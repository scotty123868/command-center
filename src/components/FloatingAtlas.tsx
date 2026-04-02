import { useState, useRef, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { Brain, X, Send, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCompany } from '../data/CompanyContext';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

const SUGGESTION_CHIPS: Record<string, string[]> = {
  '/dashboard': ['Summarize today\'s metrics', 'What needs attention?', 'Compare divisions'],
  '/tech-stack': ['What\'s our biggest waste?', 'License optimization options', 'Migration risks'],
  '/roi-summary': ['Break down the $5.8M', 'What\'s the payback period?', 'Compare to industry'],
  '/assessment': ['What\'s our biggest waste?', 'License optimization options', 'Migration risks'],
  '/workflows': ['Which workflows are bottlenecked?', 'Show automation rate', 'Any failures today?'],
  '/license-audit': ['Which licenses can we cut?', 'Total potential savings?', 'Unused seat analysis'],
  '/stories': ['Top performing division?', 'Who\'s lagging behind?', 'Division ROI breakdown'],
  '/data-flow': ['Any data quality issues?', 'Pipeline throughput?', 'Integration health?'],
  '/integrations': ['Which integrations are active?', 'Any connection issues?', 'Setup recommendations?'],
};

const DEFAULT_CHIPS = ['Summarize today\'s metrics', 'What needs attention?', 'Show me key insights', 'Compare divisions'];

const CANNED_RESPONSES: Record<string, string> = {
  'summarize today\'s metrics': 'Today\'s key metrics are looking strong. Overall tech spend efficiency is at 72%, up from 64% last quarter. AI readiness score has improved to 38/100, with 3 divisions now above the 50-point threshold. License utilization across the portfolio is at 68%, with $340K in identified savings from unused seats.',
  'what needs attention?': 'A few items need your attention:\n\n1. **License audit** — 3 SaaS licenses are up for renewal this week with potential savings of $42K\n2. **Division 3 (IC Rail)** — AI readiness score dropped 4 points; needs assessment review\n3. **Integration health** — ServiceNow connector showing intermittent timeouts since yesterday\n4. **Data flow** — 2 pipelines have elevated error rates (>2%) that should be investigated',
  'compare divisions': 'Here\'s the division comparison:\n\n- **IC Construction** — Best ROI ($1.2M savings), fastest adoption, highest AI readiness (62)\n- **IC Rail** — Highest throughput, but AI readiness declining (needs attention)\n- **IC Technologies** — Most complex stack (47 tools), biggest optimization opportunity\n- **IC Transit** — Newest division, ramping well at 78% automation rate\n\nOverall, Construction leads in value generation while Technologies has the most room for improvement.',
  'what\'s our biggest waste?': 'The biggest areas of waste identified:\n\n1. **Duplicate SaaS licenses** — $340K/yr across divisions using overlapping tools\n2. **Manual data entry** — Estimated 2,100 hours/month still done manually\n3. **Report generation** — 45 hours/week spent on reports that could be automated\n4. **Context switching** — Teams averaging 12 tool switches per workflow\n\nThe SaaS consolidation alone could save $340K within 60 days.',
  'license optimization options': 'License optimization opportunities:\n\n- **Consolidate 3 project management tools** → Save $180K/yr by standardizing on one\n- **Right-size Salesforce licenses** → 40% of seats are underutilized, save $95K/yr\n- **Eliminate redundant storage** → 3 overlapping cloud storage services, save $65K/yr\n- **Renegotiate enterprise agreements** → Volume discount potential of $120K/yr\n\nTotal addressable: **$460K/yr** in license savings.',
  'migration risks': 'Key migration risks to consider:\n\n1. **Data integrity** (Medium) — Cross-system data mapping needs validation for 3 legacy systems\n2. **User adoption** (Low) — Training programs are showing 92% completion rate\n3. **Integration downtime** (Low) — Estimated 2-hour maintenance window per system\n4. **Compliance continuity** (Low) — All audit trails preserved during migration\n\nOverall risk profile is **low**. The phased approach mitigates most concerns.',
  'break down the $5.8m': 'The $5.8M net ROI breaks down as follows:\n\n**Gross savings ($8.6M):**\n- **Workflow automation**: $3.6M (42%) — Reduced manual processing across divisions\n- **License recovery**: $2.8M (33%) — Eliminated redundant SaaS subscriptions & unused seats\n- **Tech stack optimization**: $2.2M (26%) — Consolidated and modernized tooling\n\n**Less implementation costs**: $2.8M\n**Net Year 1 savings**: $5.8M',
  'what\'s the payback period?': 'The payback period analysis:\n\n- **Initial investment**: $2.8M (platform + integration + training)\n- **Monthly value generated**: ~$717K ($8.6M gross / 12)\n- **Payback period**: ~3.9 months\n- **Current ROI multiple**: 2.07x ($5.8M net / $2.8M investment)\n- **Projected Year 2**: $8.7M cumulative value\n\nStrong payback within the first 4 months of deployment.',
  'compare to industry': 'Compared to industry benchmarks:\n\n- **Automation rate**: 94% vs industry avg 62% — **Top 5%**\n- **AI adoption speed**: 3 months to full deployment vs avg 9 months\n- **ROI multiple**: 2.07x vs industry avg 1.4x\n- **Error rate**: 0.03% vs industry avg 1.2%\n- **Agent uptime**: 99.97% vs industry avg 98.5%\n\nYou\'re significantly outperforming peers in construction/infrastructure.',
  'which licenses can we cut?': 'Licenses recommended for immediate action:\n\n1. **Trello** (used by 2 teams, redundant with Asana) — $24K/yr savings\n2. **Dropbox Business** (3% utilization, migrated to OneDrive) — $18K/yr\n3. **Zoom Pro** (duplicate Teams licenses exist) — $31K/yr\n4. **Monday.com** (trial expired, 0 active users) — $12K/yr\n\nTotal quick wins: **$85K/yr** with zero workflow impact.',
  'total potential savings?': 'Total identified savings across all categories:\n\n- **License optimization**: $460K/yr\n- **Workflow automation**: $1.2M/yr\n- **Vendor consolidation**: $340K/yr\n- **Right-sizing cloud**: $180K/yr\n\n**Grand total: $2.18M/yr** in addressable savings. About $850K can be captured in the next 90 days with low-risk changes.',
  'top performing division?': 'The top performing division is **IC Construction**:\n\n- **ROI**: $1.2M in savings (highest across all divisions)\n- **AI Readiness**: Score of 62/100 (leading the portfolio)\n- **Adoption rate**: 94% of eligible workflows automated\n- **User satisfaction**: 4.7/5.0 from internal surveys\n\nThey\'ve been the fastest to adopt and most effective at realizing value from the platform.',
};

function getCannedResponse(message: string): string {
  const lower = message.toLowerCase().trim();
  for (const [key, response] of Object.entries(CANNED_RESPONSES)) {
    if (lower.includes(key) || key.includes(lower)) {
      return response;
    }
  }
  if (lower.includes('save') || lower.includes('roi') || lower.includes('money')) return CANNED_RESPONSES['break down the $5.8m'];
  if (lower.includes('risk') || lower.includes('issue') || lower.includes('problem')) return CANNED_RESPONSES['what needs attention?'];
  if (lower.includes('compare') || lower.includes('benchmark')) return CANNED_RESPONSES['compare to industry'];
  if (lower.includes('license') || lower.includes('saas')) return CANNED_RESPONSES['license optimization options'];
  if (lower.includes('waste') || lower.includes('optimize')) return CANNED_RESPONSES['what\'s our biggest waste?'];
  if (lower.includes('division') || lower.includes('performing')) return CANNED_RESPONSES['top performing division?'];

  return 'I can help you analyze your technology landscape and AI readiness. Try asking about license optimization, division comparisons, ROI projections, or specific metrics. I have deep context on your tech stack, spending, and transformation progress.';
}

export default function FloatingAtlas() {
  const { company } = useCompany();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasBounced, setHasBounced] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();

  const chips = SUGGESTION_CHIPS[location.pathname] || DEFAULT_CHIPS;

  useEffect(() => {
    if (!hasBounced) {
      const timer = setTimeout(() => setHasBounced(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [hasBounced]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim() || isTyping) return;

    const userMsg: ChatMessage = { role: 'user', content: text.trim() };
    // Add user message AND empty assistant placeholder atomically to prevent race
    setMessages(prev => [...prev, userMsg, { role: 'assistant', content: '' }]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await fetch('/api/atlas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMsg].map(m => ({ role: m.role, content: m.content })),
          companyContext: `Company: ${company.name}, Industry: ${company.industry}, Division: ${company.shortName}`,
        }),
      });

      if (!response.ok) throw new Error('API unavailable');

      const reader = response.body?.getReader();
      if (!reader) throw new Error('No reader');

      const decoder = new TextDecoder();
      let assistantContent = '';

      let buffer = '';
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';
        for (const line of lines) {
          if (!line.startsWith('data: ')) continue;
          const data = line.slice(6).trim();
          if (data === '[DONE]') continue;
          try {
            const parsed = JSON.parse(data);
            if (parsed.text) {
              assistantContent += parsed.text;
              setMessages(prev => {
                const updated = [...prev];
                updated[updated.length - 1] = { role: 'assistant', content: assistantContent };
                return updated;
              });
            }
          } catch { /* skip */ }
        }
      }
    } catch {
      const response = getCannedResponse(text);
      await new Promise(r => setTimeout(r, 600 + Math.random() * 800));
      // Replace the empty placeholder instead of appending a second message
      setMessages(prev => {
        const updated = [...prev];
        updated[updated.length - 1] = { role: 'assistant', content: response };
        return updated;
      });
    } finally {
      setIsTyping(false);
    }
  }, [messages, isTyping]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed bottom-24 right-6 z-50 w-[400px] h-[500px] rounded-2xl flex flex-col overflow-hidden"
            style={{
              background: 'var(--cc-bg-elevated)',
              border: '1px solid var(--cc-border)',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.4), 0 0 0 1px var(--cc-border)',
              backdropFilter: 'blur(20px)',
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-5 py-3.5"
              style={{ borderBottom: '1px solid var(--cc-border)', background: 'var(--cc-bg-card)' }}
            >
              <div className="flex items-center gap-2.5">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: 'var(--cc-accent-glow)' }}
                >
                  <Brain className="w-4 h-4" style={{ color: 'var(--cc-accent)' }} strokeWidth={2} />
                </div>
                <div>
                  <div className="text-[13px] font-semibold flex items-center gap-1.5" style={{ color: 'var(--cc-text)' }}>
                    Atlas AI
                    <span style={{ color: 'var(--cc-text-muted)' }}>&middot;</span>
                    <span className="text-[12px] font-normal" style={{ color: 'var(--cc-text-tertiary)' }}>{company.shortName}</span>
                  </div>
                  <div className="text-[10px] font-medium flex items-center gap-1" style={{ color: '#22c55e' }}>
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#22c55e' }} />
                    Online
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 rounded-md flex items-center justify-center transition-colors"
                style={{ color: 'var(--cc-text-tertiary)' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--cc-bg-input)'; e.currentTarget.style.color = 'var(--cc-text)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--cc-text-tertiary)'; }}
              >
                <X className="w-4 h-4" strokeWidth={2} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
              {messages.length === 0 && (
                <div className="text-center py-8">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3"
                    style={{ background: 'var(--cc-accent-glow)' }}
                  >
                    <Brain className="w-6 h-6" style={{ color: 'var(--cc-accent)' }} strokeWidth={1.5} />
                  </div>
                  <p className="text-[13px] font-medium mb-1" style={{ color: 'var(--cc-text)' }}>How can I help?</p>
                  <p className="text-[11px]" style={{ color: 'var(--cc-text-tertiary)' }}>Ask me anything about your technology landscape</p>
                </div>
              )}

              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-[13px] leading-relaxed whitespace-pre-wrap ${
                      msg.role === 'user' ? 'rounded-br-md' : 'rounded-bl-md'
                    }`}
                    style={
                      msg.role === 'user'
                        ? { background: 'var(--cc-accent)', color: '#fff' }
                        : { background: 'var(--cc-bg-card)', color: 'var(--cc-text)', border: '1px solid var(--cc-border)' }
                    }
                  >
                    {msg.content || (
                      <span className="inline-flex gap-1">
                        <span className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ background: 'var(--cc-text-muted)', animationDelay: '0ms' }} />
                        <span className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ background: 'var(--cc-text-muted)', animationDelay: '150ms' }} />
                        <span className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ background: 'var(--cc-text-muted)', animationDelay: '300ms' }} />
                      </span>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && messages[messages.length - 1]?.role !== 'assistant' && (
                <div className="flex justify-start">
                  <div
                    className="rounded-2xl rounded-bl-md px-4 py-2.5"
                    style={{ background: 'var(--cc-bg-card)', border: '1px solid var(--cc-border)' }}
                  >
                    <span className="inline-flex gap-1">
                      <span className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ background: 'var(--cc-text-muted)', animationDelay: '0ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ background: 'var(--cc-text-muted)', animationDelay: '150ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ background: 'var(--cc-text-muted)', animationDelay: '300ms' }} />
                    </span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggestion Chips */}
            {messages.length === 0 && (
              <div className="px-5 pb-2 flex flex-wrap gap-1.5">
                {chips.map(chip => (
                  <button
                    key={chip}
                    onClick={() => sendMessage(chip)}
                    className="px-3 py-1.5 rounded-full text-[11px] font-medium transition-colors"
                    style={{
                      border: '1px solid var(--cc-border)',
                      color: 'var(--cc-text-secondary)',
                      background: 'transparent',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'var(--cc-bg-input)';
                      e.currentTarget.style.borderColor = 'var(--cc-border-hover)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.borderColor = 'var(--cc-border)';
                    }}
                  >
                    {chip}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form onSubmit={handleSubmit} className="px-4 py-3" style={{ borderTop: '1px solid var(--cc-border)' }}>
              <div
                className="flex items-center gap-2 rounded-xl px-3 py-2"
                style={{ background: 'var(--cc-bg-input)' }}
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder="Ask Atlas anything..."
                  className="flex-1 bg-transparent text-[13px] outline-none"
                  style={{ color: 'var(--cc-text)' }}
                  disabled={isTyping}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-white disabled:opacity-30 transition-opacity hover:opacity-90"
                  style={{ background: 'var(--cc-accent)' }}
                >
                  <Send className="w-3.5 h-3.5" strokeWidth={2} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(prev => !prev)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-white transition-shadow group"
        style={{
          background: 'var(--cc-accent)',
          boxShadow: '0 8px 24px rgba(66, 133, 244, 0.35)',
        }}
        initial={false}
        animate={!hasBounced ? {
          y: [0, -8, 0, -4, 0],
          transition: { duration: 1, delay: 0.5, ease: 'easeInOut' }
        } : {}}
        whileHover={{ boxShadow: '0 12px 32px rgba(66, 133, 244, 0.45)' }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X className="w-5 h-5" strokeWidth={2} />
            </motion.div>
          ) : (
            <motion.div key="brain" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <Brain className="w-5 h-5" strokeWidth={2} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* AI sparkle badge */}
        {!isOpen && (
          <span
            className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center shadow-sm"
            style={{ background: '#22c55e' }}
          >
            <Sparkles className="w-3 h-3 text-white" strokeWidth={2.5} />
          </span>
        )}
      </motion.button>
    </>
  );
}
