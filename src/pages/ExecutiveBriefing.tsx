import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, TrendingDown, Clock, AlertTriangle, DollarSign, Users, Cpu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
// ─── Animated Section Wrapper ──────────────────────────────────────────────

function FadeIn({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Executive Briefing Page ──────────────────────────────────────────────

export default function ExecutiveBriefing() {
  const navigate = useNavigate();
  const companyName = 'Herzog Companies';

  return (
    <div className="space-y-8 pb-16">
      {/* Preliminary Estimate Banner */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-2 flex items-center gap-2">
        <AlertTriangle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
        <span className="text-xs text-amber-700">Preliminary Estimate — Based on Industry Benchmarks</span>
      </div>

      {/* ── Hero: The Headline Finding ──────────────────────────────── */}
      <div className="bg-[#16161A] rounded-2xl px-10 py-14 text-white">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-3">Assessment Summary</p>
          <h1 className="text-4xl font-light leading-tight">
            We found <span className="text-blue-400 font-normal">$5.8M</span> in annual
            <br />optimization potential across {companyName}.
          </h1>
          <p className="text-slate-400 mt-4 text-lg max-w-2xl">
            Across 7 divisions, 47+ software platforms, and 62 automatable workflows —
            here's what's costing you money right now.
          </p>
        </FadeIn>
      </div>

      {/* ── Three Key Findings ──────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <FadeIn delay={0.05}>
          <div className="bg-white rounded-xl border border-gray-100 p-6 h-full">
            <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mb-4">
              <DollarSign className="w-5 h-5 text-red-500" />
            </div>
            <p className="text-sm font-medium text-gray-900 mb-1">License Waste</p>
            <p className="text-3xl font-mono font-bold text-red-500">$2.8M</p>
            <p className="text-sm text-gray-500 mt-2">
              Software licenses actively paid for with fewer than 2 logins per month across all divisions.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="bg-white rounded-xl border border-gray-100 p-6 h-full">
            <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center mb-4">
              <Clock className="w-5 h-5 text-amber-500" />
            </div>
            <p className="text-sm font-medium text-gray-900 mb-1">Manual Processes</p>
            <p className="text-3xl font-mono font-bold text-amber-500">62</p>
            <p className="text-sm text-gray-500 mt-2">
              Workflows currently requiring manual intervention that can be partially or fully automated.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="bg-white rounded-xl border border-gray-100 p-6 h-full">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
              <Cpu className="w-5 h-5 text-blue-500" />
            </div>
            <p className="text-sm font-medium text-gray-900 mb-1">AI Readiness</p>
            <p className="text-3xl font-mono font-bold text-blue-500">38<span className="text-lg text-gray-400">/100</span></p>
            <p className="text-sm text-gray-500 mt-2">
              Current readiness score. Industry leaders are at 65+. The gap represents both risk and opportunity.
            </p>
          </div>
        </FadeIn>
      </div>

      {/* ── Industry Context: Why Now ──────────────────────────────── */}
      <FadeIn delay={0.1}>
        <div className="bg-white rounded-xl border border-gray-100 p-8">
          <p className="text-xs uppercase tracking-[0.15em] text-gray-400 mb-6">Why This Matters Now</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-5 h-5 text-slate-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">FRA Compliance Pressure</p>
                <p className="text-sm text-gray-500 mt-1">
                  Part 213 track geometry and Part 236 signal requirements are tightening. Manual compliance processes won't scale.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-slate-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Workforce Transition</p>
                <p className="text-sm text-gray-500 mt-1">
                  47% of railroad workers are eligible for retirement within 5 years. Institutional knowledge needs to be captured in systems.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                <TrendingDown className="w-5 h-5 text-slate-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Competitive Gap</p>
                <p className="text-sm text-gray-500 mt-1">
                  68% of Class 1 railroads are investing in AI automation. The window to lead is closing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* ── Division Quick View ─────────────────────────────────────── */}
      <FadeIn delay={0.1}>
        <div className="bg-white rounded-xl border border-gray-100 p-8">
          <div className="flex items-center justify-between mb-6">
            <p className="text-xs uppercase tracking-[0.15em] text-gray-400">Division Readiness</p>
            <button
              onClick={() => navigate('/stories')}
              className="text-xs text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
            >
              View All <ArrowRight className="w-3 h-3" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'HCC', full: 'Herzog Contracting', score: 32, savings: '$2.1M' },
              { name: 'HRSI', full: 'Railroad Services', score: 36, savings: '$820K' },
              { name: 'HTI', full: 'Technologies', score: 48, savings: '$740K' },
              { name: 'HTSI', full: 'Transit Services', score: 40, savings: '$860K' },
            ].map((div) => (
              <div key={div.name} className="rounded-lg border border-gray-100 p-4 hover:border-blue-200 hover:bg-blue-50/30 transition-colors cursor-pointer"
                onClick={() => navigate('/stories')}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-gray-400">{div.name}</span>
                  <span className={`font-mono text-lg font-bold ${div.score >= 40 ? 'text-emerald-500' : div.score >= 30 ? 'text-amber-500' : 'text-red-500'}`}>
                    {div.score}
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-900">{div.full}</p>
                <p className="text-xs text-gray-500 mt-1">{div.savings} potential savings</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4 text-center">+ 3 additional divisions analyzed</p>
        </div>
      </FadeIn>

      {/* ── CTA: Explore the Assessment ─────────────────────────────── */}
      <FadeIn delay={0.1}>
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white flex items-center justify-between">
          <div>
            <p className="text-lg font-medium">Ready to explore the full assessment?</p>
            <p className="text-blue-200 text-sm mt-1">Dashboard, tech stack mapping, workflow analysis, ROI breakdown</p>
          </div>
          <button
            onClick={() => navigate('/dashboard')}
            className="bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors flex items-center gap-2 cursor-pointer flex-shrink-0"
          >
            Open Dashboard <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </FadeIn>
    </div>
  );
}
