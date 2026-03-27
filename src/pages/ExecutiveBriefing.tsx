import { useRef, useState, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, TrendingDown, Clock, AlertTriangle, DollarSign, Users, Cpu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// ─── Animated Counter ──────────────────────────────────────────────────────

function AnimatedStat({ value, prefix = '', suffix = '', className = '' }: { value: number; prefix?: string; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1200;
    const steps = 40;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      // Ease-out curve
      const t = step / steps;
      const current = value * (1 - Math.pow(1 - t, 3));
      setDisplay(Math.round(current));
      if (step >= steps) {
        setDisplay(value);
        clearInterval(timer);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return <span ref={ref} className={className}>{prefix}{isInView ? display.toLocaleString() : 0}{suffix}</span>;
}

function AnimatedMoney({ value, className = '' }: { value: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState('$0');

  useEffect(() => {
    if (!isInView) return;
    const duration = 1200;
    const steps = 40;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const t = step / steps;
      const current = value * (1 - Math.pow(1 - t, 3));
      if (current >= 1_000_000) {
        setDisplay(`$${(current / 1_000_000).toFixed(1)}M`);
      } else if (current >= 1_000) {
        setDisplay(`$${Math.round(current / 1_000)}K`);
      } else {
        setDisplay(`$${Math.round(current)}`);
      }
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return <span ref={ref} className={className}>{display}</span>;
}

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
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: scrollRef, offset: ['start start', 'end end'] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div ref={scrollRef} className="relative space-y-8 pb-4">
      {/* Scroll progress line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-100 hidden lg:block" style={{ marginLeft: '-1px' }}>
        <motion.div
          className="w-full bg-gradient-to-b from-blue-400 to-blue-600 origin-top"
          style={{ height: lineHeight }}
        />
      </div>

      {/* Preliminary Estimate Banner */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-2 flex items-center gap-2">
        <AlertTriangle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
        <span className="text-xs text-amber-700">Preliminary Estimate — Based on Industry Benchmarks</span>
      </div>

      {/* ── Hero: The Headline Finding ──────────────────────────────── */}
      <div className="relative overflow-hidden rounded-2xl px-10 py-14 text-white" style={{ background: 'linear-gradient(135deg, #0f0f13 0%, #16161a 40%, #1a1a22 60%, #0f0f13 100%)' }}>
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 opacity-40" style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(66,133,244,0.15) 0%, transparent 60%)', animation: 'heroShift 8s ease-in-out infinite alternate' }} />
        <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(16,185,129,0.1) 0%, transparent 50%)', animation: 'heroShift 8s ease-in-out infinite alternate-reverse' }} />
        <style>{`
          @keyframes heroShift {
            0% { transform: translateX(-10px) scale(1); }
            100% { transform: translateX(10px) scale(1.05); }
          }
        `}</style>
        <FadeIn>
          <p className="relative text-xs uppercase tracking-[0.2em] text-slate-500 mb-3">Assessment Summary</p>
          <h1 className="relative text-4xl font-light leading-tight">
            We found <span className="text-blue-400 font-normal">$5.8M</span> in annual
            <br />optimization potential across {companyName}.
          </h1>
          <p className="relative text-slate-400 mt-4 text-lg max-w-2xl">
            Across 7 divisions, 47+ software platforms, and 62 automatable workflows —
            here's what's costing you money right now.
          </p>
        </FadeIn>
      </div>

      {/* ── Three Key Findings ──────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <FadeIn delay={0.05}>
          <div className="group bg-white rounded-xl border border-gray-100 p-6 h-full transition-all duration-300 hover:shadow-lg hover:border-gray-200">
            <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
              <DollarSign className="w-5 h-5 text-red-500" />
            </div>
            <p className="text-sm font-medium text-gray-900 mb-1">License Waste</p>
            <AnimatedMoney value={2_800_000} className="text-3xl font-mono font-bold text-red-500" />
            <p className="text-sm text-gray-500 mt-2">
              Software licenses actively paid for with fewer than 2 logins per month across all divisions.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="group bg-white rounded-xl border border-gray-100 p-6 h-full transition-all duration-300 hover:shadow-lg hover:border-gray-200">
            <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
              <Clock className="w-5 h-5 text-amber-500" />
            </div>
            <p className="text-sm font-medium text-gray-900 mb-1">Manual Processes</p>
            <AnimatedStat value={62} className="text-3xl font-mono font-bold text-amber-500" />
            <p className="text-sm text-gray-500 mt-2">
              Workflows currently requiring manual intervention that can be partially or fully automated.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="group bg-white rounded-xl border border-gray-100 p-6 h-full transition-all duration-300 hover:shadow-lg hover:border-gray-200">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
              <Cpu className="w-5 h-5 text-blue-500" />
            </div>
            <p className="text-sm font-medium text-gray-900 mb-1">AI Readiness</p>
            <p className="text-3xl font-mono font-bold text-blue-500">
              <AnimatedStat value={38} /><span className="text-lg text-gray-400">/100</span>
            </p>
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
            ].map((div, i) => (
              <motion.div
                key={div.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-lg border border-gray-100 p-4 hover:border-blue-200 hover:bg-blue-50/30 hover:shadow-md backdrop-blur-sm transition-all duration-300 cursor-pointer"
                onClick={() => navigate('/stories')}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-gray-400">{div.name}</span>
                  <span className={`font-mono text-lg font-bold ${div.score >= 40 ? 'text-emerald-500' : div.score >= 30 ? 'text-amber-500' : 'text-red-500'}`}>
                    {div.score}
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-900">{div.full}</p>
                <p className="text-xs text-gray-500 mt-1">{div.savings} potential savings</p>
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4 text-center">+ 3 additional divisions analyzed</p>
        </div>
      </FadeIn>

      {/* ── CTA: Explore the Assessment ─────────────────────────────── */}
      <FadeIn delay={0.1}>
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white flex items-center justify-between">
          {/* Subtle animated shimmer */}
          <div className="absolute inset-0 opacity-20" style={{ background: 'linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)', animation: 'ctaShimmer 3s ease-in-out infinite' }} />
          <style>{`
            @keyframes ctaShimmer {
              0%, 100% { transform: translateX(-100%); }
              50% { transform: translateX(100%); }
            }
          `}</style>
          <div className="relative">
            <p className="text-lg font-medium">Ready to explore the full assessment?</p>
            <p className="text-blue-200 text-sm mt-1">Dashboard, tech stack mapping, workflow analysis, ROI breakdown</p>
          </div>
          <button
            onClick={() => navigate('/dashboard')}
            className="relative bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-all duration-300 flex items-center gap-2 cursor-pointer flex-shrink-0 hover:shadow-lg hover:shadow-blue-500/20"
          >
            Open Dashboard <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </FadeIn>
    </div>
  );
}
