import Anthropic from '@anthropic-ai/sdk';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const SYSTEM_PROMPT = `You are Atlas, an AI assistant for UpSkiller. You have detailed knowledge of Herzog Companies' software stack, license costs, workflow automation opportunities, and AI agent deployment across all 7 divisions.

Answer questions specifically about their data. Be concise, specific, and cite numbers from the data provided. Use markdown bold (**text**) for emphasis on key figures and terms.

Here is the company data you have access to:

COMPANY PROFILE:
- Name: Herzog Companies
- Industry: Railroad & Infrastructure Construction
- Employees: 2,800
- Divisions: 7 (Herzog Contracting Corp, Herzog Railroad Services, Herzog Services, Herzog Technologies, Herzog Transit Services, Herzog Energy, Green Group LLC)
- Total Tech Spend: $12.4M/yr
- AI Readiness Score: 38/100
- EBITDA Margin: 11.8% (target: 18%)
- Founded: 1969, 57 years in operation

AI READINESS BREAKDOWN:
- Data Infrastructure: 25/100 — Siloed systems across 7 divisions, no unified data lake
- Process Maturity: 44/100 — Some automation in rail testing but most field ops manual
- Tech Stack Modernity: 32/100 — Legacy custom dispatch system (built 2009), aging TAM-4 software
- Change Readiness: 48/100 — CEO Brad Herzog committed but field crews resistant
- Skills & Training: 28/100 — Strong railroad expertise but near-zero data science capability

KEY METRICS:
- Total Projected Savings: $5.8M/yr
- Tech Score: 38 → 86 (after transformation)
- Workflows Analyzed: 62
- Automation-Ready Workflows: 18
- Unused License Waste: $2.8M/yr

TOP SAVINGS OPPORTUNITIES:
1. Predictive Track Maintenance — $1,080,000 savings, High effort, 20 weeks
2. Unused License Reclamation — $920,000 savings, Low effort, 3 weeks (in progress)
3. Fleet GPS Intelligence — $740,000 savings, Medium effort, 10 weeks (in progress)
4. AI Rail Inspection — $680,000 savings, High effort, 16 weeks
5. Crew Scheduling Optimization — $540,000 savings, Medium effort, 12 weeks
6. PTC System Modernization — $480,000 savings, High effort, 18 weeks
7. Equipment Idle Time Reduction — $440,000 savings, Medium effort, 14 weeks
8. Automated Safety Compliance (FRA) — $380,000 savings, Medium effort, 8 weeks
9. Material & Ballast Logistics AI — $300,000 savings, Medium effort, 12 weeks
10. Transit Operations Efficiency — $240,000 savings, Medium effort, 14 weeks

CURRENT TECH STACK:
- Primavera P6: $420K/yr, 180 users, Project Management
- Custom Dispatch System: $680K/yr, 340 users, Fleet Management (built 2009)
- SAP ERP: $520K/yr, 160 users, Finance
- Trimble GPS Fleet Tracking: Connected to 800+ assets
- TAM-4 Geometry Car: Rail testing data system
- PTC Signal Systems: Positive Train Control telemetry
- Kronos/UKG Workforce: Legacy scheduling

DIVISION DETAILS:
- HCC (Herzog Contracting): 1,200 employees, Rail & Highway Construction
- HRSI (Herzog Railroad Services): 380 employees, Railroad Maintenance & Equipment
- HSI (Herzog Services): 220 employees, Ultrasonic Rail Testing
- HTI (Herzog Technologies): 310 employees, Signal & PTC Systems
- HTSI (Herzog Transit Services): 480 employees, Passenger Rail Operations
- Herzog Energy: 120 employees, Energy Infrastructure
- Green Group: 90 employees, Environmental Services

TRANSFORMATION ROADMAP:
- Q1: Tech Stack Audit + Fleet Intelligence Quick Wins
- Q2: Field Operations AI Pilots (RailSentry AI, predictive maintenance, crew scheduling)
- Q3: Cross-Division Data Platform + Scale (Databricks data lake)
- Q4: AI-Native Railroad Operations`;

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
