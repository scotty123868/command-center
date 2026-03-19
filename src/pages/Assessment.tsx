import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

// ─── Pre-populated conversation ─────────────────────────────────────────────

interface Message {
  role: 'user' | 'ai';
  content: string;
  table?: { headers: string[]; rows: string[][] };
  list?: { items: { title: string; detail: string }[] };
}

const conversation: Message[] = [
  {
    role: 'user',
    content: 'What are the biggest areas of waste in our current tech stack?',
  },
  {
    role: 'ai',
    content:
      'I analyzed your full tech stack across all 4 OpCos. Here are the top three areas of recoverable spend:',
    table: {
      headers: ['Tool', 'Annual Waste', 'Root Cause'],
      rows: [
        ['Microsoft 365', '$680K', '340 unused licenses across 3 OpCos'],
        ['Salesforce CRM', '$445K', '89 inactive seats, duplicate orgs'],
        ['Concur Expense', '$340K', 'Legacy contract; recommend Ramp migration'],
      ],
    },
  },
  {
    role: 'user',
    content: 'Which workflows should we automate first for maximum ROI?',
  },
  {
    role: 'ai',
    content:
      'Based on effort-vs-impact analysis across 47 mapped workflows, here are the top 3 automation candidates ranked by net ROI:',
    list: {
      items: [
        {
          title: '1. License Management & Provisioning',
          detail:
            '85% automatable | $1.2M annual savings | 3-week implementation. Currently manual across all OpCos with 12+ hours/week spent on provisioning. Low complexity, high-confidence win.',
        },
        {
          title: '2. Call Center Tier-1 Resolution',
          detail:
            '60% automatable | $580K annual savings | 18-week implementation. AI agent can handle password resets, status checks, and FAQ routing. Requires careful prompt engineering and escalation rules.',
        },
        {
          title: '3. Expense Report Processing',
          detail:
            '90% automatable | $240K annual savings | 8-week implementation. Replace Concur with Ramp + AI receipt matching. Already proven at scale in similar PE portfolios.',
        },
      ],
    },
  },
  {
    role: 'user',
    content: 'What would it take to build a data lake connecting all 4 OpCos?',
  },
  {
    role: 'ai',
    content:
      'Great question. Unifying your data is the highest-leverage long-term investment. Here\'s the recommended approach:\n\n**Architecture:** Databricks Lakehouse on Azure (aligns with your existing M365 footprint)\n\n**Data Connectors Needed:**\n- SAP ERP (OpCo 1 & 2) via SAP CDC connector\n- FileMaker Pro (OpCo 3) via REST API export\n- Excel/Access databases (OpCo 4) via scheduled ETL\n- Salesforce (all OpCos) via Fivetran\n\n**Key Challenge:** Entity resolution across OpCos. Customer "Acme Corp" exists in 3 different systems with different IDs. You\'ll need a master data management (MDM) layer.\n\n**Timeline:** 20 weeks to production-ready MVP\n**Investment:** ~$200K (infrastructure + implementation)\n**Projected ROI:** 19x over 3 years ($3.8M in cross-sell identification, duplicate elimination, and consolidated reporting)\n\nThis is Phase 3 on your transformation roadmap. I recommend completing the license audit and workflow automation first to fund this initiative.',
  },
];

const suggestedQuestions = [
  'Show me cross-OpCo data gaps',
  'Compare Salesforce vs Day.ai migration',
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
      <div className="max-w-[70%] rounded-2xl rounded-br-md bg-[#4285F4] px-5 py-3.5 text-[14px] leading-relaxed text-white">
        {content}
      </div>
    </motion.div>
  );
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
  // Parse markdown-style bold
  function renderText(text: string) {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <span key={i} className="font-semibold text-gray-900">
            {part.slice(2, -2)}
          </span>
        );
      }
      return <span key={i}>{part}</span>;
    });
  }

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

      <div className="max-w-[75%] rounded-2xl rounded-bl-md bg-white border border-gray-200 px-5 py-4 shadow-sm">
        {/* Main text */}
        <div className="text-[14px] leading-relaxed text-gray-700 whitespace-pre-line">
          {content.split('\n').map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {line.startsWith('- ') ? (
                <span className="flex gap-2">
                  <span className="text-gray-400">-</span>
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
          <div className="mt-4 overflow-hidden rounded-xl border border-gray-100">
            <table className="w-full text-[13px]">
              <thead>
                <tr className="bg-gray-50">
                  {table.headers.map((h) => (
                    <th
                      key={h}
                      className="px-4 py-2.5 text-left text-[10px] font-semibold uppercase tracking-wider text-gray-500"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.rows.map((row, i) => (
                  <tr key={i} className="border-t border-gray-50">
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className={`px-4 py-2.5 ${
                          j === 1
                            ? 'font-mono font-semibold text-red-500'
                            : 'text-gray-700'
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="bg-red-50 px-4 py-2.5 text-[12px] font-semibold text-red-700">
              Total recoverable: $2.1M/yr
            </div>
          </div>
        )}

        {/* Prioritized list */}
        {list && (
          <div className="mt-4 space-y-3">
            {list.items.map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-100 bg-gray-50/50 px-4 py-3"
              >
                <p className="text-[13px] font-semibold text-gray-900">
                  {item.title}
                </p>
                <p className="mt-1 text-[12px] leading-relaxed text-gray-500">
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
      <div className="rounded-2xl rounded-bl-md bg-white border border-gray-200 px-5 py-4 shadow-sm">
        <div className="flex items-center gap-1.5">
          <span
            className="w-2 h-2 rounded-full bg-gray-300"
            style={{ animation: 'pulse 1.4s ease-in-out infinite' }}
          />
          <span
            className="w-2 h-2 rounded-full bg-gray-300"
            style={{ animation: 'pulse 1.4s ease-in-out 0.2s infinite' }}
          />
          <span
            className="w-2 h-2 rounded-full bg-gray-300"
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
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);

  let delayCounter = 0;

  return (
    <div className="flex flex-col" style={{ height: 'calc(100vh - 56px)' }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex-shrink-0 px-6 pt-2 pb-4 border-b border-gray-100"
      >
        <h1 className="text-[20px] font-bold text-gray-900 tracking-tight">
          AI Assistant
        </h1>
        <p className="text-[13px] text-gray-500 mt-0.5">
          Ask questions about your data, get recommendations, explore
          optimization strategies
        </p>
      </motion.div>

      {/* Chat area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-6 py-6">
        <div className="max-w-3xl mx-auto space-y-6">
          {conversation.map((msg, i) => {
            const d = delayCounter;
            delayCounter += 0.12;
            if (msg.role === 'user') {
              return <UserMessage key={i} content={msg.content} delay={d} />;
            }
            return (
              <AIMessage
                key={i}
                content={msg.content}
                table={msg.table}
                list={msg.list}
                delay={d}
              />
            );
          })}

          {/* Typing indicator */}
          <TypingIndicator delay={delayCounter} />

          {/* Suggested questions */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: delayCounter + 0.2 }}
            className="pt-4"
          >
            <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-3">
              Suggested questions
            </p>
            <div className="flex flex-wrap gap-2">
              {suggestedQuestions.map((q) => (
                <button
                  key={q}
                  type="button"
                  className="px-4 py-2 rounded-full border border-gray-200 bg-white text-[13px] font-medium text-gray-600 hover:border-[#4285F4] hover:text-[#4285F4] hover:bg-blue-50/50 transition-all duration-200 cursor-pointer shadow-sm"
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
        className="flex-shrink-0 border-t border-gray-100 bg-white px-6 py-4"
      >
        <div className="max-w-3xl mx-auto relative">
          <input
            type="text"
            readOnly
            placeholder="Ask about your data..."
            className="w-full h-12 pl-5 pr-14 rounded-xl bg-gray-50 border border-gray-200 text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4285F4]/20 focus:border-[#4285F4]/40 transition-all duration-200 shadow-sm cursor-text"
          />
          <button
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-[#4285F4] flex items-center justify-center hover:bg-[#3574DB] transition-colors duration-150"
          >
            <ArrowUp className="w-4 h-4 text-white" strokeWidth={2.5} />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
