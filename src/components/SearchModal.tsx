import { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Zap, Wrench, BookOpen, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { workflows, currentStack, transformationStories, topOpportunities } from '../data/constants';

interface SearchResult {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: 'workflow' | 'tool' | 'story' | 'opportunity';
  route: string;
}

const iconMap = {
  workflow: { Icon: Zap, color: 'text-violet-500 bg-violet-50' },
  tool: { Icon: Wrench, color: 'text-blue-500 bg-blue-50' },
  story: { Icon: BookOpen, color: 'text-amber-500 bg-amber-50' },
  opportunity: { Icon: TrendingUp, color: 'text-emerald-500 bg-emerald-50' },
};

const categoryBadge: Record<string, string> = {
  workflow: 'bg-violet-100 text-violet-700',
  tool: 'bg-blue-100 text-blue-700',
  story: 'bg-amber-100 text-amber-700',
  opportunity: 'bg-emerald-100 text-emerald-700',
};

function buildIndex(): SearchResult[] {
  const items: SearchResult[] = [];

  workflows.forEach((w, i) => {
    items.push({
      id: `workflow-${i}`,
      name: w.name,
      category: 'Workflow',
      description: w.aiSolution.slice(0, 80) + '...',
      icon: 'workflow',
      route: '/workflows',
    });
  });

  currentStack.forEach((t, i) => {
    items.push({
      id: `tool-${i}`,
      name: t.name,
      category: 'Tool',
      description: `${t.category} — $${(t.annualCost / 1000).toFixed(0)}K/yr, ${t.users} users`,
      icon: 'tool',
      route: '/tech-stack',
    });
  });

  transformationStories.forEach((s, i) => {
    items.push({
      id: `story-${i}`,
      name: s.title,
      category: 'Story',
      description: s.problem.slice(0, 80) + '...',
      icon: 'story',
      route: '/stories',
    });
  });

  topOpportunities.forEach((o, i) => {
    items.push({
      id: `opportunity-${i}`,
      name: o.name,
      category: 'Opportunity',
      description: `${o.category} — $${(o.savings / 1000).toFixed(0)}K savings, ${o.effort} effort`,
      icon: 'opportunity',
      route: '/roi-summary',
    });
  });

  return items;
}

const allItems = buildIndex();

const recentItems = [allItems[0], allItems[6], allItems[10], allItems[14]].filter(Boolean);

export default function SearchModal() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const results = useMemo(() => {
    if (!query.trim()) return recentItems;
    const q = query.toLowerCase();
    return allItems.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q),
    );
  }, [query]);

  const close = useCallback(() => {
    setOpen(false);
    setQuery('');
    setActiveIndex(0);
  }, []);

  const selectResult = useCallback(
    (result: SearchResult) => {
      close();
      navigate(result.route);
    },
    [close, navigate],
  );

  // Keyboard shortcut: Cmd+K / Ctrl+K
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  // Focus input when modal opens
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  // Reset active index when results change
  useEffect(() => {
    setActiveIndex(0);
  }, [results]);

  // Scroll active item into view
  useEffect(() => {
    if (!listRef.current) return;
    const active = listRef.current.querySelector('[data-active="true"]');
    active?.scrollIntoView({ block: 'nearest' });
  }, [activeIndex]);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Escape') {
      close();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => (i - 1 + results.length) % results.length);
    } else if (e.key === 'Enter' && results[activeIndex]) {
      selectResult(results[activeIndex]);
    }
  }

  // Group results by icon type
  const grouped = useMemo(() => {
    const groups: Record<string, { items: SearchResult[]; globalIndices: number[] }> = {};
    results.forEach((r, idx) => {
      const key = r.category;
      if (!groups[key]) groups[key] = { items: [], globalIndices: [] };
      groups[key].items.push(r);
      groups[key].globalIndices.push(idx);
    });
    return groups;
  }, [results]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={close}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-xl rounded-2xl bg-white shadow-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            onKeyDown={handleKeyDown}
          >
            {/* Search input */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
              <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search workflows, tools, stories..."
                className="flex-1 text-sm text-gray-900 placeholder:text-gray-400 outline-none bg-transparent"
              />
              <button
                onClick={close}
                className="flex items-center justify-center w-6 h-6 rounded bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <X className="w-3.5 h-3.5 text-gray-500" />
              </button>
            </div>

            {/* Results */}
            <div ref={listRef} className="max-h-[360px] overflow-y-auto py-2">
              {results.length === 0 ? (
                <div className="px-4 py-8 text-center text-sm text-gray-400">
                  No results found for "{query}"
                </div>
              ) : (
                <>
                  {!query.trim() && (
                    <div className="px-4 pt-1 pb-1.5 text-[11px] font-medium text-gray-400 uppercase tracking-wider">
                      Recent
                    </div>
                  )}
                  {Object.entries(grouped).map(([category, group]) => (
                    <div key={category}>
                      {query.trim() && (
                        <div className="px-4 pt-3 pb-1.5 text-[11px] font-medium text-gray-400 uppercase tracking-wider">
                          {category}
                        </div>
                      )}
                      {group.items.map((result, i) => {
                        const globalIdx = group.globalIndices[i];
                        const isActive = globalIdx === activeIndex;
                        const { Icon, color } = iconMap[result.icon];
                        return (
                          <button
                            key={result.id}
                            data-active={isActive}
                            onClick={() => selectResult(result)}
                            className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                              isActive ? 'bg-gray-50' : 'hover:bg-gray-50'
                            }`}
                          >
                            <div
                              className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${color}`}
                            >
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-medium text-gray-900 truncate">
                                  {result.name}
                                </span>
                                <span
                                  className={`text-[10px] font-medium px-1.5 py-0.5 rounded-full flex-shrink-0 ${
                                    categoryBadge[result.icon]
                                  }`}
                                >
                                  {result.category}
                                </span>
                              </div>
                              <p className="text-xs text-gray-400 truncate mt-0.5">
                                {result.description}
                              </p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  ))}
                </>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center gap-4 px-4 py-2.5 border-t border-gray-100 text-[11px] text-gray-400">
              <span>
                <kbd className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-500 font-mono text-[10px]">
                  ↑↓
                </kbd>{' '}
                navigate
              </span>
              <span>
                <kbd className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-500 font-mono text-[10px]">
                  ↵
                </kbd>{' '}
                select
              </span>
              <span>
                <kbd className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-500 font-mono text-[10px]">
                  esc
                </kbd>{' '}
                close
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
