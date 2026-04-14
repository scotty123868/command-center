import Anthropic from '@anthropic-ai/sdk';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const BASE_PROMPT = `You are Atlas, an AI assistant for Ally AI. You have detailed knowledge of the current company/division's software stack, license costs, workflow automation opportunities, and AI agent deployment.

Answer questions specifically about the company data provided below. Be concise, specific, and cite numbers from the data. Use markdown bold (**text**) for emphasis on key figures and terms. Never reference companies that are not in the provided context.`;

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
    ? `${BASE_PROMPT}\n\nCURRENT COMPANY/DIVISION DATA:\n${companyContext}`
    : `${BASE_PROMPT}\n\nNo specific company context was provided. Answer in general terms and ask the user which company or division they are asking about.`;

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
