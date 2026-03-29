import Anthropic from '@anthropic-ai/sdk';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const SYSTEM_PROMPT = `You are Atlas, an AI assistant for UpSkiller. You have detailed knowledge of IndustrialsCo' software stack, license costs, workflow automation opportunities, and AI agent deployment across all 7 divisions.

Answer questions specifically about their data. Be concise, specific, and cite numbers from the data provided. Use markdown bold (**text**) for emphasis on key figures and terms.

Here is the company data you have access to:

COMPANY PROFILE:
- Name: IndustrialsCo
- Industry: Railroad & Infrastructure Construction
- Employees: 2,800
- Divisions: 7 (IC Construction Corp, IC Rail Services, IC Services, IC Technologies, IC Transit Services, IC Energy, IC Environmental LLC)
- Total Tech Spend: $12.4M/yr
- AI Readiness Score: 38/100
- EBITDA Margin: 11.8% (target: 18%)
- Founded: 1969, 57 years in operation

AI READINESS BREAKDOWN:
- Data Infrastructure: 25/100 — Siloed systems across 7 divisions, no unified data lake
- Process Maturity: 44/100 — Some automation in rail testing but most field ops manual
- Tech Stack Modernity: 32/100 — Legacy custom dispatch system (built 2009), aging TAM-4 software
- Change Readiness: 48/100 — CEO James Mitchell committed but field crews resistant
- Skills & Training: 28/100 — Strong railroad expertise but near-zero data science capability

KEY METRICS:
- Total Projected Savings: $5.8M/yr
- Tech Score: 38 → 86 (after transformation)
- Workflows Analyzed: 62
- Automation-Ready Workflows: 18
- Unused License Waste: $2.8M/yr

TOP SAVINGS OPPORTUNITIES:
1. Predictive Track Maintenance — $1.4M savings, High effort, 20 weeks
2. Unused License Reclamation — $1.2M savings, Low effort, 3 weeks (in progress)
3. Fleet GPS Intelligence — $980K savings, Medium effort, 10 weeks (in progress)
4. AI Rail Inspection — $860K savings, High effort, 16 weeks
5. Crew Scheduling Optimization — $720K savings, Medium effort, 12 weeks
6. PTC System Modernization — $640K savings, High effort, 18 weeks
7. Equipment Idle Time Reduction — $580K savings, Medium effort, 14 weeks
8. Automated Safety Compliance (FRA) — $520K savings, Medium effort, 8 weeks
9. Material & Ballast Logistics AI — $480K savings, Medium effort, 12 weeks
10. Transit Operations Efficiency — $440K savings, Medium effort, 14 weeks

CURRENT TECH STACK:
- Primavera P6: $420K/yr, 180 users, Project Management
- Custom Dispatch System: $680K/yr, 340 users, Fleet Management (built 2009)
- SAP ERP: $520K/yr, 160 users, Finance
- Trimble GPS Fleet Tracking: Connected to 800+ assets
- TAM-4 Geometry Car: Rail testing data system
- PTC Signal Systems: Positive Train Control telemetry
- Kronos/UKG Workforce: Legacy scheduling

DIVISION DETAILS:
- HCC (IC Construction): 1,200 employees, Rail & Highway Construction
- HRSI (IC Rail Services): 380 employees, Railroad Maintenance & Equipment
- HSI (IC Services): 220 employees, Ultrasonic Rail Testing
- HTI (IC Technologies): 310 employees, Signal & PTC Systems
- HTSI (IC Transit Services): 480 employees, Passenger Rail Operations
- IC Energy: 120 employees, Energy Infrastructure
- IC Environmental: 90 employees, Environmental Services

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
