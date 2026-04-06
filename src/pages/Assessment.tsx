import { useRef, useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, AlertCircle } from 'lucide-react';
import { useAtlasChat } from '../hooks/useAtlasChat.ts';
import { useCompany } from '../data/CompanyContext';
import { getTopOpportunities, getWorkflowSummary, getCurrentStack, getLicenses } from '../data/constants';

// ─── Pre-populated conversation ─────────────────────────────────────────────

interface Message {
  role: 'user' | 'ai';
  content: string;
  table?: { headers: string[]; rows: string[][]; footer?: string };
  list?: { items: { title: string; detail: string }[] };
}

function buildConversation(companyName: string, workflowCount: number, topOpps: { name: string; savings: number }[], stack: { name: string }[], opCoCount: number, totalWaste: number): Message[] {
  const fmtK = (n: number) => n >= 1_000_000 ? `$${(n / 1_000_000).toFixed(1)}M` : `$${Math.round(n / 1_000)}K`;
  const top3 = topOpps.slice(0, 3);
  const stackTop3 = stack.slice(0, 3);

  return [
    {
      role: 'user',
      content: 'What are the biggest areas of waste in our current tech stack?',
    },
    {
      role: 'ai',
      content:
        `I analyzed your full tech stack across ${companyName}${opCoCount > 1 ? ` (${opCoCount} divisions)` : ''}. Here are the top areas of recoverable spend:`,
      table: {
        headers: ['Tool', 'Opportunity', 'Root Cause'],
        rows: stackTop3.map((t, i) => {
          const perTool = Math.round(totalWaste * (i === 0 ? 0.4 : i === 1 ? 0.35 : 0.25));
          return [
            t.name,
            fmtK(perTool),
            i === 0 ? 'Unused licenses across organization' : i === 1 ? 'Inactive seats — restrict to active users only' : 'Legacy contract underutilization',
          ];
        }),
        footer: `Total recoverable: ${fmtK(totalWaste)}/yr`,
      },
    },
    {
      role: 'user',
      content: 'Which workflows should we automate first for maximum ROI?',
    },
    {
      role: 'ai',
      content:
        `Based on effort-vs-impact analysis across ${workflowCount} mapped workflows, here are the top 3 automation candidates ranked by net ROI:`,
      list: {
        items: top3.map((opp, i) => ({
          title: `${i + 1}. ${opp.name}`,
          detail: `${fmtK(opp.savings)} annual savings potential. High-confidence opportunity identified through workflow and tech stack analysis.`,
        })),
      },
    },
    {
      role: 'user',
      content: `What would it take to build a unified data platform for ${companyName}?`,
    },
    {
      role: 'ai',
      content:
        `Great question. Unifying your data is the highest-leverage long-term investment. Here's the recommended approach:\n\n**Architecture:** Cloud-native data lakehouse (aligns with your existing infrastructure)\n\n**Data Connectors Needed:**\n${stack.slice(0, 5).map(t => `- ${t.name} via API integration`).join('\n')}\n\n**Key Challenge:** Entity resolution across systems. The same records exist in multiple systems with different IDs. You'll need a master data management (MDM) layer.\n\n**Timeline:** 16 weeks to production-ready MVP\n**Investment:** ~$200K (infrastructure + implementation)\n**Projected ROI:** 6x in year one\n\nThis is Phase 3 on your transformation roadmap. I recommend completing the license audit and workflow automation first to fund this initiative.`,
    },
  ];
}

const suggestedQuestions = [
  'Show me cross-division data gaps',
  'Compare eCMS AI middleware options',
  "What's our AI readiness score?",
  'Generate Q1 board report',
];

// ─── Chat Components ────────────────────────────────────────────────────────

function UserMessage({ content, delay }: { content: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="flex justify-end"
    >
      <div className="max-w-[85%] sm:max-w-[70%] rounded-2xl rounded-br-md bg-[#4285F4] px-4 sm:px-5 py-3.5 text-[14px] leading-relaxed text-white">
        {content}
      </div>
    </motion.div>
  );
}

/** Parse **bold** markdown into spans */
function renderText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <span key={i} className="font-semibold" style={{ color: 'var(--cc-text)' }}>
          {part.slice(2, -2)}
        </span>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

function AIMessage({
  content,
  table,
  list,
  delay,
}: {
  content: string;
  table?: Message['table'];
  list?: Message['list'];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="flex items-start gap-3"
    >
      {/* AI Avatar */}
      <div className="w-8 h-8 rounded-full bg-[#4285F4] flex items-center justify-center flex-shrink-0 mt-0.5">
        <span className="text-[11px] font-bold text-white">AI</span>
      </div>

      <div className="max-w-[90%] sm:max-w-[75%] rounded-2xl rounded-bl-md px-4 sm:px-5 py-4 shadow-sm" style={{ background: 'var(--cc-bg-card)', border: '1px solid var(--cc-border)' }}>
        {/* Main text */}
        <div className="text-[14px] leading-relaxed whitespace-pre-line" style={{ color: 'var(--cc-text-secondary)' }}>
          {content.split('\n').map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {line.startsWith('- ') ? (
                <span className="flex gap-2">
                  <span style={{ color: 'var(--cc-text-tertiary)' }}>-</span>
                  <span>{renderText(line.slice(2))}</span>
                </span>
              ) : (
                renderText(line)
              )}
            </span>
          ))}
        </div>

        {/* Data table */}
        {table && (
          <div className="mt-4 overflow-hidden rounded-xl" style={{ border: '1px solid var(--cc-border)' }}>
            <table className="w-full text-[13px]">
              <thead>
                <tr style={{ background: 'var(--cc-bg-input)' }}>
                  {table.headers.map((h) => (
                    <th
                      key={h}
                      className="px-4 py-2.5 text-left text-[10px] font-semibold uppercase tracking-wider" style={{ color: 'var(--cc-text-secondary)' }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.rows.map((row, i) => (
                  <tr key={i} style={{ borderTop: '1px solid var(--cc-border)' }}>
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className={`px-4 py-2.5 ${
                          j === 1
                            ? 'font-mono font-semibold text-red-400'
                            : ''
                        }`}
                        style={j !== 1 ? { color: 'var(--cc-text-secondary)' } : undefined}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            {table.footer && (
              <div className="px-4 py-2.5 text-[12px] font-semibold text-red-400" style={{ background: 'var(--cc-red-dim)' }}>
                {table.footer}
              </div>
            )}
          </div>
        )}

        {/* Prioritized list */}
        {list && (
          <div className="mt-4 space-y-3">
            {list.items.map((item, i) => (
              <div
                key={i}
                className="rounded-xl px-4 py-3" style={{ background: 'var(--cc-bg-elevated)', border: '1px solid var(--cc-border)' }}
              >
                <p className="text-[13px] font-semibold" style={{ color: 'var(--cc-text)' }}>
                  {item.title}
                </p>
                <p className="mt-1 text-[12px] leading-relaxed" style={{ color: 'var(--cc-text-secondary)' }}>
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

function StreamedAIMessage({ content }: { content: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex items-start gap-3"
    >
      <div className="w-8 h-8 rounded-full bg-[#4285F4] flex items-center justify-center flex-shrink-0 mt-0.5">
        <span className="text-[11px] font-bold text-white">AI</span>
      </div>
      <div className="max-w-[90%] sm:max-w-[75%] rounded-2xl rounded-bl-md px-4 sm:px-5 py-4 shadow-sm" style={{ background: 'var(--cc-bg-card)', border: '1px solid var(--cc-border)' }}>
        <div className="text-[14px] leading-relaxed whitespace-pre-line" style={{ color: 'var(--cc-text-secondary)' }}>
          {content.split('\n').map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {line.startsWith('- ') ? (
                <span className="flex gap-2">
                  <span style={{ color: 'var(--cc-text-tertiary)' }}>-</span>
                  <span>{renderText(line.slice(2))}</span>
                </span>
              ) : (
                renderText(line)
              )}
            </span>
          ))}
          {content === '' && (
            <span className="inline-block w-1.5 h-4 bg-gray-400 animate-pulse ml-0.5" />
          )}
        </div>
      </div>
    </motion.div>
  );
}

function LiveUserMessage({ content }: { content: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex justify-end"
    >
      <div className="max-w-[90%] sm:max-w-[70%] rounded-2xl rounded-br-md bg-[#4285F4] px-4 sm:px-5 py-3.5 text-[14px] leading-relaxed text-white">
        {content}
      </div>
    </motion.div>
  );
}

function TypingIndicator({ delay }: { delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay }}
      className="flex items-start gap-3"
    >
      <div className="w-8 h-8 rounded-full bg-[#4285F4] flex items-center justify-center flex-shrink-0">
        <span className="text-[11px] font-bold text-white">AI</span>
      </div>
      <div className="rounded-2xl rounded-bl-md px-5 py-4 shadow-sm" style={{ background: 'var(--cc-bg-card)', border: '1px solid var(--cc-border)' }}>
        <div className="flex items-center gap-1.5">
          <span
            className="w-2 h-2 rounded-full bg-gray-500"
            style={{ animation: 'pulse 1.4s ease-in-out infinite' }}
          />
          <span
            className="w-2 h-2 rounded-full bg-gray-500"
            style={{ animation: 'pulse 1.4s ease-in-out 0.2s infinite' }}
          />
          <span
            className="w-2 h-2 rounded-full bg-gray-500"
            style={{ animation: 'pulse 1.4s ease-in-out 0.4s infinite' }}
          />
        </div>
      </div>
      <style>{`
        @keyframes pulse {
          0%, 80%, 100% { opacity: 0.3; transform: scale(0.8); }
          40% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </motion.div>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────────

export default function Assessment() {
  const { company } = useCompany();
  const companyOpps = getTopOpportunities(company.id);
  const companyWfSummary = getWorkflowSummary(company.id);
  const companyStack = getCurrentStack(company.id);
  const companyLicenses = getLicenses(company.id);
  const totalWaste = companyLicenses.reduce((sum, l) => sum + l.annualWaste, 0);

  const conversation = buildConversation(
    company.name,
    companyWfSummary.total,
    companyOpps,
    companyStack,
    company.opCos,
    totalWaste,
  );

  const scrollRef = useRef<HTMLDivElement>(null);
  const [inputValue, setInputValue] = useState('');
  const { messages: liveMessages, isStreaming, error, sendMessage } = useAtlasChat();

  // Auto-scroll on new messages or streaming updates
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [liveMessages, isStreaming]);

  const handleSend = useCallback(() => {
    if (!inputValue.trim() || isStreaming) return;
    const msg = inputValue.trim();
    setInputValue('');
    sendMessage(msg);
  }, [inputValue, isStreaming, sendMessage]);

  const handleSuggestionClick = useCallback((q: string) => {
    if (isStreaming) return;
    sendMessage(q);
  }, [isStreaming, sendMessage]);

  let delayCounter = 0;

  return (
    <div className="flex flex-col" style={{ height: 'calc(100vh - 160px)' }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex-shrink-0 px-4 sm:px-6 pt-2 pb-4 border-b" style={{ borderColor: 'var(--cc-border)' }}
      >
        <h1 className="text-[20px] font-bold tracking-tight" style={{ color: 'var(--cc-text)' }}>
          AI Assistant
        </h1>
        <p className="text-[13px] mt-0.5" style={{ color: 'var(--cc-text-secondary)' }}>
          Ask questions about your data, get recommendations, explore optimization strategies
        </p>
      </motion.div>

      {/* Chat area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-3 sm:px-6 py-6">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Static pre-populated messages */}
          {conversation.map((msg, i) => {
            const d = delayCounter;
            delayCounter += 0.12;
            if (msg.role === 'user') {
              return <UserMessage key={i} content={msg.content} delay={d} />;
            }
            return (
              <AIMessage key={i} content={msg.content} table={msg.table} list={msg.list} delay={d} />
            );
          })}

          {/* Typing indicator (only when no live messages and not streaming) */}
          {liveMessages.length === 0 && !isStreaming && (
            <TypingIndicator delay={delayCounter} />
          )}

          {/* Live messages from real Claude API */}
          {liveMessages.map((msg, i) => {
            if (msg.role === 'user') {
              return <LiveUserMessage key={`live-${i}`} content={msg.content} />;
            }
            return <StreamedAIMessage key={`live-${i}`} content={msg.content} />;
          })}

          {/* Streaming indicator when waiting for first token */}
          {isStreaming && liveMessages.length > 0 && liveMessages[liveMessages.length - 1].role === 'user' && (
            <TypingIndicator delay={0} />
          )}

          {/* Error message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 px-4 py-3 rounded-xl text-[13px]" style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)', color: '#ef4444' }}
            >
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{error}</span>
            </motion.div>
          )}

          {/* Suggested questions */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: delayCounter + 0.2 }}
            className="pt-4"
          >
            <p className="text-[11px] font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--cc-text-tertiary)' }}>
              Suggested questions
            </p>
            <div className="flex flex-wrap gap-2">
              {suggestedQuestions.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => handleSuggestionClick(q)}
                  disabled={isStreaming}
                  className="px-4 py-2 rounded-full text-[13px] font-medium hover:border-[#4285F4] hover:text-[#4285F4] transition-all duration-200 cursor-pointer shadow-sm disabled:opacity-50 disabled:cursor-not-allowed" style={{ background: 'var(--cc-bg-card)', border: '1px solid var(--cc-border)', color: 'var(--cc-text-secondary)' }}
                >
                  {q}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Input bar */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="flex-shrink-0 border-t px-3 sm:px-6 py-4" style={{ borderColor: 'var(--cc-border)', background: 'var(--cc-bg-card)' }}
      >
        <div className="max-w-3xl mx-auto relative">
          <input
            type="text"
            placeholder="Ask about your data..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') handleSend(); }}
            disabled={isStreaming}
            className="w-full h-12 pl-5 pr-14 rounded-xl text-[14px] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4285F4]/20 focus:border-[#4285F4]/40 transition-all duration-200 shadow-sm disabled:opacity-50 cursor-text" style={{ background: 'var(--cc-bg-elevated)', border: '1px solid var(--cc-border)', color: 'var(--cc-text)' }}
          />
          <button
            type="button"
            onClick={handleSend}
            disabled={isStreaming || !inputValue.trim()}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-[#4285F4] flex items-center justify-center hover:bg-[#3574DB] transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowUp className="w-4 h-4 text-white" strokeWidth={2.5} />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
