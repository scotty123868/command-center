import Anthropic from '@anthropic-ai/sdk';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const SYSTEM_PROMPT = `You are Atlas, an AI assistant for UpSkiller. You have detailed knowledge of IndustrialsCo's software stack, license costs, workflow automation opportunities, and AI agent deployment across all 7 divisions.

Answer questions specifically about their data. Be concise, specific, and cite numbers from the data provided. Use markdown bold (**text**) for emphasis on key figures and terms.

Here is the company data you have access to:

COMPANY PROFILE:
- Name: IndustrialsCo
- Industry: Railroad & Infrastructure Construction
- Employees: 2,800
- Divisions: 7 (IC Construction Corp, IC Rail Services, IC Services, IC Technologies, IC Transit Services, IC Energy, IC Environmental LLC)
- Total Tech Spend: $14.2M/yr
- AI Readiness Score: 52/100
- EBITDA Margin: 11.8% (target: 18%)
- Founded: 1969, 57 years in operation — 140-person technology group, TX/AZ data centers

AI READINESS BREAKDOWN:
- Data Infrastructure: 32/100 — 18 apps across 2 data centers (TX/AZ), QMirror AS/400 bottleneck with 15-min replication lag, no unified data lake
- Process Maturity: 55/100 — Mature HCSS suite for field ops, eCMS financial workflows, MCP payroll processing — gap in inter-system flat-file exchanges
- Tech Stack Modernity: 48/100 — Bifurcated stack — modern SaaS (HCSS Telematics, iCIMS, Procore) alongside legacy on-prem (eCMS, QMirror/AS400, MCP)
- Change Readiness: 68/100 — 3 AI models already in production (RailSentry, Tie Inspection, HSI Ultrasonic), Purview governance framework in place
- Skills & Training: 52/100 — 140-person technology group, AI/ML capability concentrated in RailSentry and inspection teams, no centralized MLOps

KEY METRICS:
- Total Projected Savings: $5.8M/yr
- Tech Score: 52 → 86 (after transformation)
- Workflows Analyzed: 62
- Automation-Ready Workflows: 18
- Unused License Waste: $2.8M/yr

TOP SAVINGS OPPORTUNITIES:
1. RailSentry Enhancement — $1.14M savings, Medium effort, 8 weeks (automated)
2. Predictive Maintenance (HCSS + Equipment360) — $930K savings, Medium effort, 12 weeks
3. Project Cost Intelligence (eCMS + P6) — $810K savings, High effort, 16 weeks
4. Field Ops AI (HCSS Field + Heavy Job) — $690K savings, Medium effort, 12 weeks
5. Bid Intelligence (Heavy Bid) — $610K savings, Low effort, 8 weeks
6. Crew Scheduling (MCP + HCSS) — $550K savings, Medium effort, 14 weeks
7. Document Intelligence (Prolog + Procore) — $400K savings, Low effort, 8 weeks
8. HSI Ultrasonic Expansion (B→A scan) — $360K savings, High effort, 18 weeks (automated)
9. Safety Risk Prediction (HCSS Safety) — $310K savings, Low effort, 6 weeks
10. Real-time Data Foundation (QMirror replacement) — $0 savings, High effort, 20 weeks (enabler)

CURRENT TECH STACK:
- eCMS (Computer Guidance): $680K/yr, 160 users, Construction ERP
- HCSS Telematics: $240K/yr, 2,400 users, Fleet/GPS
- Primavera P6 (Oracle): $420K/yr, 180 users, Project Portfolio Management
- Procore: $280K/yr, 200 users, Construction Management
- Heavy Job (HCSS): $180K/yr, 600 users, Field Ops/Job Costing
- Heavy Bid (HCSS): $160K/yr, 120 users, Estimating
- Equipment360 (HCSS): $140K/yr, 800 users, Fleet Maintenance
- MCP (Internal): $320K/yr, 2,800 users, Payroll/Time
- QMirror (MTL Systems): $80K/yr, 20 users, Data Replication
- Business Objects (SAP): $180K/yr, 80 users, BI/Reporting

DIVISION DETAILS:
- HCC (IC Construction): 1,200 employees, Rail & Highway Construction
- HRSI (IC Rail Services): 380 employees, Railroad Maintenance & Equipment
- HSI (IC Services): 220 employees, Ultrasonic Rail Testing
- HTI (IC Technologies): 310 employees, Signal & PTC Systems
- HTSI (IC Transit Services): 480 employees, Passenger Rail Operations
- IC Energy: 120 employees, Energy Infrastructure
- IC Environmental: 90 employees, Environmental Services

TRANSFORMATION ROADMAP:
- Q1: Infrastructure Audit + Quick Wins on AI-Ready Systems (Procore AI, HCSS Telematics AI, RailSentry MLOps, QMirror replacement scoping)
- Q2: Data Foundation + AI Pilots (QMirror → CDC pipeline, Lakehouse MVP, predictive maintenance pilot, HSI B→A scan expansion)
- Q3: AI Enhancement Layer (eCMS AI middleware, crew scheduling AI, Heavy Bid intelligence, Tie Inspection edge deployment)
- Q4: Enterprise AI Rollout (full lakehouse, AI analytics replacing Business Objects, RailSentry edge deployment, enterprise AI agents)`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'ANTHROPIC_API_KEY is not configured' });
  }

  const { messages, companyContext } = req.body as {
    messages: { role: 'user' | 'assistant'; content: string }[];
    companyContext?: string;
  };

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'Messages array is required' });
  }

  const systemPrompt = companyContext
    ? `${SYSTEM_PROMPT}\n\nADDITIONAL CONTEXT FOR CURRENT COMPANY/DIVISION:\n${companyContext}`
    : SYSTEM_PROMPT;

  try {
    const client = new Anthropic({ apiKey });

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    const stream = client.messages.stream({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      system: systemPrompt,
      messages,
    });

    for await (const event of stream) {
      if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
        res.write(`data: ${JSON.stringify({ text: event.delta.text })}\n\n`);
      }
    }

    res.write('data: [DONE]\n\n');
    res.end();
  } catch (error) {
    console.error('Atlas API error:', error);
    if (!res.headersSent) {
      res.status(500).json({ error: 'Failed to get response from AI' });
    } else {
      res.write(`data: ${JSON.stringify({ error: 'Stream interrupted' })}\n\n`);
      res.end();
    }
  }
}
