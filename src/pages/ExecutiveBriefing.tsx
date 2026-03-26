import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronDown, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// ─── Division Data ──────────────────────────────────────────────────────────

const divisions = [
  { name: 'Herzog Contracting Corp', tag: 'Rail & Highway Construction', score: 32 },
  { name: 'Herzog Railroad Services', tag: 'Railroad Maintenance & Equipment', score: 36 },
  { name: 'Herzog Services', tag: 'Ultrasonic Rail Testing', score: 42 },
  { name: 'Herzog Technologies', tag: 'Signal & PTC Systems', score: 48 },
  { name: 'Herzog Transit Services', tag: 'Passenger Rail Operations', score: 40 },
  { name: 'Herzog Energy', tag: 'Energy Infrastructure', score: 34 },
  { name: 'Green Group LLC', tag: 'Environmental Services', score: 30 },
];

function scoreColor(score: number) {
  if (score > 40) return 'text-emerald-400';
  if (score >= 30) return 'text-amber-400';
  return 'text-red-400';
}

// ─── Animated Section Wrapper ──────────────────────────────────────────────

function FadeSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Executive Briefing Page ──────────────────────────────────────────────

export default function ExecutiveBriefing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#16161A] text-white overflow-y-auto overflow-x-hidden">
      {/* ── Hero Section ──────────────────────────────────────────── */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center">
        {/* UpSkiller AI logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-2 mb-16"
        >
          <div className="w-7 h-7 rounded-lg bg-[#4285F4]/90 flex items-center justify-center">
            <Zap className="w-3.5 h-3.5 text-white" strokeWidth={2.2} fill="currentColor" />
          </div>
          <span className="text-white/60 text-sm font-medium tracking-wide">UpSkiller AI</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl font-light text-white"
        >
          Herzog Companies
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-2xl text-slate-400 mt-4"
        >
          AI Readiness Assessment
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-base text-slate-500 mt-6 italic"
        >
          Building America's Infrastructure
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-sm text-slate-500 mt-4 tracking-wide"
        >
          $800M Revenue &middot; 2,800 Employees &middot; 7 Operating Divisions
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="absolute bottom-12"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-6 h-6 text-slate-600" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Industry Pressure ─────────────────────────────────────── */}
      <section className="px-6 py-32 max-w-5xl mx-auto">
        <FadeSection>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-600 mb-16 text-center">Industry Context</p>
        </FadeSection>

        <div className="flex flex-col md:flex-row items-start justify-between gap-16">
          <FadeSection className="flex-1 text-center" delay={0}>
            <p className="font-mono text-5xl font-light text-white">$2.4B</p>
            <div className="w-12 h-px bg-slate-700 mx-auto my-6" />
            <p className="text-sm text-slate-400 leading-relaxed max-w-[240px] mx-auto">
              Annual FRA compliance burden across U.S. railroad industry
            </p>
          </FadeSection>

          <FadeSection className="flex-1 text-center" delay={0.15}>
            <p className="font-mono text-5xl font-light text-white">47%</p>
            <div className="w-12 h-px bg-slate-700 mx-auto my-6" />
            <p className="text-sm text-slate-400 leading-relaxed max-w-[240px] mx-auto">
              Of railroad workforce eligible for retirement within 5 years
            </p>
          </FadeSection>

          <FadeSection className="flex-1 text-center" delay={0.3}>
            <p className="font-mono text-5xl font-light text-white">68%</p>
            <div className="w-12 h-px bg-slate-700 mx-auto my-6" />
            <p className="text-sm text-slate-400 leading-relaxed max-w-[240px] mx-auto">
              Of Class 1 railroads actively investing in AI automation
            </p>
          </FadeSection>
        </div>
      </section>

      {/* ── The Opportunity ───────────────────────────────────────── */}
      <section className="px-6 py-32 max-w-4xl mx-auto">
        <FadeSection>
          <p className="text-3xl text-white font-light leading-relaxed">
            Your 7 divisions run 47+ software platforms.
          </p>
        </FadeSection>
        <FadeSection delay={0.2}>
          <p className="text-3xl text-blue-400 font-light leading-relaxed mt-4">
            We identified $5.8M in annual optimization potential.
          </p>
        </FadeSection>
        <FadeSection delay={0.35}>
          <p className="text-sm text-slate-600 mt-8">
            Preliminary estimate based on industry benchmarks
          </p>
        </FadeSection>
      </section>

      {/* ── Division Overview (horizontal scroll) ─────────────────── */}
      <section className="py-32">
        <FadeSection className="px-6 max-w-5xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-600">Divisions</p>
          <p className="text-2xl text-white font-light mt-2">AI Readiness by Division</p>
        </FadeSection>

        <div className="relative">
          {/* Fade gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #16161A, transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #16161A, transparent)' }} />

          <div
            className="flex gap-5 px-16 overflow-x-auto pb-4"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {divisions.map((div, i) => (
              <motion.div
                key={div.name}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex-shrink-0 w-[260px] rounded-xl border border-white/[0.06] bg-white/[0.03] p-6"
                style={{ scrollSnapAlign: 'start' }}
              >
                <p className="text-[13px] font-medium text-white">{div.name}</p>
                <p className="text-[11px] text-slate-500 mt-1">{div.tag}</p>
                <div className="mt-6 flex items-end justify-between">
                  <span className={`font-mono text-4xl font-bold ${scoreColor(div.score)}`}>
                    {div.score}
                  </span>
                  <span className="text-[11px] text-slate-600">/100</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ───────────────────────────────────────────── */}
      <section className="px-6 py-32 text-center">
        <FadeSection>
          <button
            onClick={() => navigate('/dashboard')}
            className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 text-lg rounded-lg transition-colors duration-200 cursor-pointer"
          >
            Explore Your Assessment
          </button>
          <p className="text-sm text-slate-600 mt-8">
            Prepared exclusively for Herzog Companies &middot; March 2026
          </p>
        </FadeSection>
      </section>
    </div>
  );
}
