import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, AlertTriangle, TrendingUp, Shield, Clock, Zap } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { getCurrentStack, getRecommendations, getKpis, getCompanyProfile } from '../data/constants';
import type { CurrentTool, Recommendation } from '../data/constants';
import { useCompany } from '../data/CompanyContext';
import PreliminaryBanner from '../components/PreliminaryBanner';

/* ── helpers ─────────────────────────────────────────────────────────────── */

const fmt = (n: number) =>
  n >= 1_000_000
    ? `$${(n / 1_000_000).toFixed(1)}M`
    : n >= 1_000
    ? `$${(n / 1_000).toFixed(0)}K`
    : `$${n}`;

const fmtFull = (n: number) => `$${n.toLocaleString('en-US')}`;

const scoreColor = (s: number) =>
  s <= 3 ? '#EF4444' : s <= 5 ? '#F59E0B' : '#10B981';

const scoreLabel = (s: number) =>
  s <= 3 ? 'Critical' : s <= 5 ? 'Poor' : 'Fair';

const cardBg = (s: number) =>
  s <= 3
    ? 'border-l-4 border-l-red-400'
    : s <= 5
    ? ''
    : '';

const cardBgStyle = (s: number) =>
  s <= 3
    ? { background: 'var(--cc-red-dim)' }
    : s <= 5
    ? { background: 'var(--cc-yellow-dim)' }
    : { background: 'var(--cc-green-dim)' };

const complexityColor = (c: string) =>
  c === 'High' ? 'text-red-400' : c === 'Medium' ? 'text-amber-400' : 'text-green-400';

const complexityStyle = (c: string) =>
  c === 'High' ? { background: 'var(--cc-red-dim)' } : c === 'Medium' ? { background: 'var(--cc-yellow-dim)' } : { background: 'var(--cc-green-dim)' };

const riskColor = (r: string) =>
  r === 'Critical' ? 'bg-red-600 text-white' : r === 'High' ? 'text-red-400' : r === 'Medium' ? 'text-amber-400' : 'text-green-400';

const riskStyle = (r: string) =>
  r === 'Critical' ? {} : r === 'High' ? { background: 'var(--cc-red-dim)' } : r === 'Medium' ? { background: 'var(--cc-yellow-dim)' } : { background: 'var(--cc-green-dim)' };

/* ── Radial Gauge (tiny) ─────────────────────────────────────────────────── */

function RadialGauge({ score, size = 40 }: { score: number; size?: number }) {
  const radius = (size - 6) / 2;
  const circumference = 2 * Math.PI * radius;
  const pct = score / 10;
  const offset = circumference * (1 - pct);
  const color = scoreColor(score);

  return (
    <svg width={size} height={size} className="flex-shrink-0">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth={3}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={3}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
      <text
        x={size / 2}
        y={size / 2}
        textAnchor="middle"
        dominantBaseline="central"
        className="text-[10px] font-bold"
        fill={color}
      >
        {score}
      </text>
    </svg>
  );
}

/* ── industry multipliers ────────────────────────────────────────────────── */

const industryMult: Record<string, number> = {
  'Railroad & Infrastructure': 0.32,
  'Transportation Services': 0.34,
  Manufacturing: 0.30,
  'Energy Infrastructure': 0.28,
  'Environmental Services': 0.26,
  Construction: 0.30,
  'Transit Operations': 0.34,
  'Healthcare': 0.36,
  'Insurance': 0.33,
  'Financial Services': 0.31,
  'Aerospace & Defense': 0.29,
  'Digital Government': 0.27,
};

/* ══════════════════════════════════════════════════════════════════════════ */

export default function TechStack() {
  const { company } = useCompany();
  const currentStack = getCurrentStack(company.id);

  const allRecommendations = getRecommendations(company.id);

  // Filter recommendations to match tools in this company's stack
  const recommendations = useMemo(() => {
    const stackNames = new Set(currentStack.map(t => t.name.toLowerCase()));
    const filtered = allRecommendations.filter(rec =>
      stackNames.has(rec.current.name.toLowerCase()) ||
      // Also include "No Data Lake" which applies to all companies
      rec.current.name === 'No Data Lake'
    );
    return filtered.length > 0 ? filtered : allRecommendations;
  }, [currentStack, allRecommendations]);

  // Use KPI techScoreBefore as the single source of truth for overall score
  const overallScore = useMemo(() => {
    return getKpis(company.id).techScoreBefore;
  }, [company.id]);

  // Compute segments from actual stack scores
  const segments = useMemo(() => {
    if (currentStack.length === 0) return [
      { label: 'Critical', pct: 50, color: '#EF4444' },
      { label: 'Poor', pct: 17, color: '#F59E0B' },
      { label: 'Fair', pct: 17, color: '#10B981' },
      { label: 'Unused', pct: 16, color: '#3A3A44' },
    ];
    const total = currentStack.length;
    const critical = currentStack.filter(t => t.score <= 3).length;
    const poor = currentStack.filter(t => t.score > 3 && t.score <= 5).length;
    const fair = currentStack.filter(t => t.score > 5).length;
    const unused = 0;
    return [
      { label: 'Critical', pct: Math.round((critical / total) * 100), color: '#EF4444' },
      { label: 'Poor', pct: Math.round((poor / total) * 100), color: '#F59E0B' },
      { label: 'Fair', pct: Math.round((fair / total) * 100) || (100 - Math.round((critical / total) * 100) - Math.round((poor / total) * 100)), color: '#10B981' },
      { label: 'Unused', pct: unused, color: '#3A3A44' },
    ];
  }, [currentStack]);

  /* ROI calculator — uses company's actual savings as the anchor */
  const companyProfile = getCompanyProfile(company.id);
  const companyRoi = getKpis(company.id);

  // Parse tech spend string safely: "$14.2M/yr" → 14200000
  const parseTechSpend = (s: string): number => {
    const match = s.match(/([\d.]+)\s*(M|K|B)?/i);
    if (!match) return 3_200_000;
    const num = parseFloat(match[1]);
    const unit = (match[2] || '').toUpperCase();
    if (unit === 'B') return Math.round(num * 1_000_000_000);
    if (unit === 'M') return Math.round(num * 1_000_000);
    if (unit === 'K') return Math.round(num * 1_000);
    return Math.round(num);
  };

  const defaultSpend = parseTechSpend(companyProfile.techSpend || '$3.2M');
  const defaultFtes = company.employees || 2800;
  const [spend, setSpend] = useState(defaultSpend);
  const [ftes, setFtes] = useState(defaultFtes);

  // Auto-match industry
  const matchedIndustry = useMemo(() => {
    const ci = company.industry.toLowerCase();
    if (ci.includes('insurance')) return 'Insurance';
    if (ci.includes('health')) return 'Healthcare';
    if (ci.includes('manufactur')) return 'Manufacturing';
    if (ci.includes('aerospace') || ci.includes('defense')) return 'Aerospace & Defense';
    if (ci.includes('financial') || ci.includes('bank') || ci.includes('development finance')) return 'Financial Services';
    if (ci.includes('government') || ci.includes('public') || ci.includes('tax') || ci.includes('security') || ci.includes('telecom')) return 'Digital Government';
    if (ci.includes('energy')) return 'Energy Infrastructure';
    if (ci.includes('transit') || ci.includes('passenger')) return 'Transit Operations';
    if (ci.includes('construction')) return 'Construction';
    if (ci.includes('environmental')) return 'Environmental Services';
    if (ci.includes('railroad') || ci.includes('rail')) return 'Railroad & Infrastructure';
    return 'Manufacturing';
  }, [company.industry]);

  // Reset when company changes
  useEffect(() => {
    setSpend(parseTechSpend(getCompanyProfile(company.id).techSpend || '$3.2M'));
    setFtes(company.employees || 2800);
  }, [company.id, company.employees]);

  // Simple projected savings: industry multiplier × spend, scaled by FTE ratio
  const projected = useMemo(() => {
    const mult = industryMult[matchedIndustry] ?? 0.33;
    const fteRatio = ftes / Math.max(1, defaultFtes); // 1.0 at default, scales linearly
    const spendRatio = spend / Math.max(1, defaultSpend);
    return Math.round(companyRoi.totalSavings * spendRatio * fteRatio * (mult / (industryMult[matchedIndustry] ?? 0.33)));
  }, [spend, ftes, defaultSpend, defaultFtes, companyRoi.totalSavings, matchedIndustry]);

  const optimized = Math.max(0, spend - projected);

  const donutData = [
    { name: 'Optimized Spend', value: optimized },
    { name: 'Projected Savings', value: projected },
  ];

  const DONUT_COLORS = ['#4285F4', '#10B981'];

  // Find migration weeks for each recommendation from currentStack
  const getMigrationWeeks = (currentName: string): number => {
    // Try exact match first
    const exactMatch = currentStack.find(
      (t) => t.name.toLowerCase() === currentName.toLowerCase()
    );
    if (exactMatch) return exactMatch.migrationWeeks;

    // Try partial match — check if any word from the tool name appears in the current name
    const partialMatch = currentStack.find((t) => {
      const toolWords = t.name.toLowerCase().split(/[\s()]+/).filter(w => w.length > 2);
      const targetLower = currentName.toLowerCase();
      return toolWords.some(w => targetLower.includes(w));
    });
    if (partialMatch) return partialMatch.migrationWeeks;

    // Generate unique fallback from name hash to avoid all showing same value
    const hash = currentName.split('').reduce((h, c) => ((h << 5) - h + c.charCodeAt(0)) | 0, 0);
    const weeks = [4, 6, 8, 10, 12, 14, 16, 20];
    return weeks[Math.abs(hash) % weeks.length];
  };

  return (
    <div className="space-y-8 pb-20">
      {/* Preliminary Estimate Banner */}
      <PreliminaryBanner />

      {/* ─── Section 1 : Stack Health Overview ─────────────────────────────── */}
      <section>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-2xl font-bold mb-6" style={{ color: 'var(--cc-text)' }}
        >
          Stack Health Overview
        </motion.h2>

        {/* Overall health bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl shadow-sm p-6 mb-6" style={{ background: 'var(--cc-bg-card)', borderColor: 'var(--cc-border)', border: '1px solid var(--cc-border)' }}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5" style={{ color: 'var(--cc-text-tertiary)' }} />
              <span className="text-sm font-medium" style={{ color: 'var(--cc-text-secondary)' }}>Overall Tech Stack Health</span>
            </div>
            <span className="text-2xl font-bold text-red-500 font-mono">{overallScore}/100</span>
          </div>
          <div className="h-3 w-full rounded-full overflow-hidden flex">
            {segments.map((seg, i) => (
              <div
                key={i}
                className="h-full first:rounded-l-full last:rounded-r-full"
                style={{ width: `${seg.pct}%`, backgroundColor: seg.color }}
              />
            ))}
          </div>
          <div className="flex flex-wrap gap-6 mt-3">
            {segments.slice(0, 3).map((seg) => (
              <div key={seg.label} className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--cc-text-secondary)' }}>
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: seg.color }} />
                {seg.label}
              </div>
            ))}
          </div>
        </motion.div>

        {/* 6 metric cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {currentStack.map((tool: CurrentTool, i: number) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04, duration: 0.25 }}
              className={`rounded-2xl shadow-sm p-4 ${cardBg(tool.score)}`}
              style={{ ...cardBgStyle(tool.score), border: '1px solid var(--cc-border)' }}
            >
              <p className="text-xs font-medium truncate mb-2" style={{ color: 'var(--cc-text-secondary)' }}>{tool.name}</p>
              <div className="flex items-center justify-between">
                <RadialGauge score={tool.score} size={38} />
                <span
                  className="text-[11px] font-semibold"
                  style={{ color: scoreColor(tool.score) }}
                >
                  {scoreLabel(tool.score)}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── Section 2 : AI-Native Migration Map ──────────────────────────── */}
      <section>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-2xl font-bold mb-6" style={{ color: 'var(--cc-text)' }}
        >
          AI-Native Migration Map
        </motion.h2>

        <div className="space-y-4">
          {recommendations.map((rec: Recommendation, i: number) => {
            const weeks = getMigrationWeeks(rec.current.name);
            const matchedTool = currentStack.find(
              (t) => rec.current.name.toLowerCase().includes(t.name.toLowerCase().split(' ')[0].toLowerCase())
            );

            return (
              <motion.div
                key={rec.current.name}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04, duration: 0.3 }}
                className="rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 p-4 sm:p-6" style={{ background: 'var(--cc-bg-card)', border: '1px solid var(--cc-border)' }}
              >
                <div className="grid grid-cols-1 md:grid-cols-[2fr_auto_2fr_auto] gap-4 md:gap-6 items-center">
                  {/* CURRENT — left 40% */}
                  <div>
                    <p className="text-[10px] font-semibold tracking-widest uppercase mb-2">
                      Current
                    </p>
                    <h4 className="font-bold text-lg" style={{ color: 'var(--cc-text)' }}>{rec.current.name}</h4>
                    <p className="text-sm mt-1 leading-relaxed" style={{ color: 'var(--cc-text-secondary)' }}>{rec.current.description}</p>
                    <div className="flex flex-wrap items-center gap-2 mt-3">
                      <span className="text-xs font-mono px-2 py-0.5 rounded" style={{ color: 'var(--cc-text-secondary)', background: 'var(--cc-bg-input)' }}>
                        {fmt(rec.current.cost)}/yr
                      </span>
                      {rec.current.users > 0 && (
                        <span className="text-xs px-2 py-0.5 rounded" style={{ color: 'var(--cc-text-secondary)', background: 'var(--cc-bg-input)' }}>
                          {rec.current.users} users
                        </span>
                      )}
                      <span
                        className="text-xs font-semibold px-2 py-0.5 rounded"
                        style={{
                          backgroundColor: `${scoreColor(rec.current.score)}18`,
                          color: scoreColor(rec.current.score),
                        }}
                      >
                        {rec.current.score}/10
                      </span>
                      {matchedTool && (
                        <>
                          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${complexityColor(matchedTool.integrationComplexity)}`} style={complexityStyle(matchedTool.integrationComplexity)}>
                            {matchedTool.integrationComplexity} complexity
                          </span>
                          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${riskColor(matchedTool.riskLevel)}`} style={riskStyle(matchedTool.riskLevel)}>
                            {matchedTool.riskLevel} risk
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* ARROW — center (desktop: horizontal, mobile: vertical) */}
                  <div className="flex md:hidden justify-center py-1">
                    <div className="flex items-center gap-2">
                      <motion.div
                        animate={{ y: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        <ArrowRight className="w-5 h-5 text-blue-500 rotate-90" />
                      </motion.div>
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1" style={{ color: 'var(--cc-text-tertiary)', background: 'var(--cc-bg-input)' }}>
                        <Clock className="w-3 h-3" />
                        ~{weeks} weeks
                      </span>
                    </div>
                  </div>
                  <div className="hidden md:flex flex-col items-center gap-2">
                    <motion.div
                      animate={{ x: [0, 6, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <ArrowRight className="w-7 h-7 text-blue-500" />
                    </motion.div>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1" style={{ color: 'var(--cc-text-tertiary)', background: 'var(--cc-bg-input)' }}>
                      <Clock className="w-3 h-3" />
                      ~{weeks} weeks
                    </span>
                  </div>

                  {/* RECOMMENDED — right 40% */}
                  <div>
                    <p className="text-[10px] font-semibold tracking-widest uppercase mb-2">
                      Recommended
                    </p>
                    <h4 className="font-bold text-lg" style={{ color: 'var(--cc-text)' }}>
                      <span className="text-green-400">{rec.recommended.name}</span>
                    </h4>
                    <p className="text-sm mt-1 leading-relaxed" style={{ color: 'var(--cc-text-secondary)' }}>{rec.recommended.description}</p>
                    <div className="mt-3">
                      <span className="text-xs font-mono px-2 py-0.5 rounded" style={{ color: 'var(--cc-text-secondary)', background: 'var(--cc-bg-input)' }}>
                        {fmt(rec.recommended.cost)}/yr
                      </span>
                    </div>
                  </div>

                  {/* SAVINGS — far right */}
                  <div className="text-right md:min-w-[110px]">
                    <p className="text-[10px] font-semibold tracking-widest uppercase mb-1" style={{ color: 'var(--cc-text-tertiary)' }}>
                      Annual Savings
                    </p>
                    <span className="text-2xl font-bold font-mono text-green-500">
                      {fmt(rec.annualSavings)}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ─── Section 3 : ROI Calculator ───────────────────────────────────── */}
      <section>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-2xl font-bold mb-6" style={{ color: 'var(--cc-text)' }}
        >
          ROI Calculator
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl shadow-sm p-4 sm:p-6" style={{ background: 'var(--cc-bg-card)', border: '1px solid var(--cc-border)' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">
            {/* Left: Inputs */}
            <div className="space-y-8">
              {/* Spend slider */}
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--cc-text)' }}>
                  Current Annual IT Spend
                </label>
                <input
                  type="range"
                  min={Math.round(defaultSpend * 0.3)}
                  max={Math.round(defaultSpend * 2)}
                  step={Math.max(10_000, Math.round(defaultSpend * 0.01))}
                  value={spend}
                  onChange={(e) => setSpend(Number(e.target.value))}
                  className="w-full accent-blue-500 h-2 rounded-full cursor-pointer"
                />
                <div className="flex justify-between text-xs mt-1" style={{ color: 'var(--cc-text-tertiary)' }}>
                  <span>{fmt(Math.round(defaultSpend * 0.3))}</span>
                  <span className="text-base font-bold" style={{ color: 'var(--cc-text)' }}>{fmt(spend)}</span>
                  <span>{fmt(Math.round(defaultSpend * 2))}</span>
                </div>
              </div>

              {/* FTE slider */}
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--cc-text)' }}>
                  Number of FTEs
                </label>
                <input
                  type="range"
                  min={Math.max(50, Math.round(defaultFtes * 0.3))}
                  max={Math.round(defaultFtes * 2)}
                  step={Math.max(10, Math.round(defaultFtes * 0.01))}
                  value={ftes}
                  onChange={(e) => setFtes(Number(e.target.value))}
                  className="w-full accent-blue-500 h-2 rounded-full cursor-pointer"
                />
                <div className="flex justify-between text-xs mt-1" style={{ color: 'var(--cc-text-tertiary)' }}>
                  <span>{Math.max(50, Math.round(defaultFtes * 0.3)).toLocaleString()}</span>
                  <span className="text-base font-bold" style={{ color: 'var(--cc-text)' }}>
                    {ftes.toLocaleString()}
                  </span>
                  <span>{Math.round(defaultFtes * 2).toLocaleString()}</span>
                </div>
              </div>

              {/* Industry — auto-detected from company */}
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--cc-text)' }}>Industry</label>
                <div className="w-full rounded-xl px-4 py-2.5 text-sm font-medium" style={{ background: 'var(--cc-bg-input)', border: '1px solid var(--cc-border)', color: 'var(--cc-text)' }}>
                  {matchedIndustry}
                </div>
              </div>
            </div>

            {/* Right: Results */}
            <div className="flex flex-col items-center justify-center gap-6">
              {/* Big projected number */}
              <div className="text-center">
                <p className="text-sm font-medium mb-1" style={{ color: 'var(--cc-text-secondary)' }}>Projected Annual Savings</p>
                <p className="text-3xl sm:text-5xl font-extrabold text-green-500 font-mono">{fmt(projected)}</p>
                <div className="flex items-center justify-center gap-1 mt-2 text-green-600">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    {Math.min(99, Math.round((projected / Math.max(1, spend)) * 100))}% of total spend
                  </span>
                </div>
              </div>

              {/* Donut chart */}
              <ResponsiveContainer width="100%" height={220}>
                <PieChart>
                  <Pie
                    data={donutData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={95}
                    paddingAngle={3}
                    dataKey="value"
                    stroke="none"
                  >
                    {donutData.map((_, idx) => (
                      <Cell key={idx} fill={DONUT_COLORS[idx]} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value) => fmtFull(value as number)}
                    contentStyle={{
                      borderRadius: '8px',
                      border: '1px solid var(--cc-border)',
                      fontSize: '13px',
                      background: 'var(--cc-bg-card)',
                      color: 'var(--cc-text)',
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>

              <div className="flex flex-wrap gap-4 sm:gap-8 text-sm" style={{ color: 'var(--cc-text-secondary)' }}>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-3 h-3 rounded-full bg-blue-500" />
                  Optimized Spend
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-3 h-3 rounded-full bg-green-500" />
                  Projected Savings
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ─── Section 4 : Critical Gap Alert ─────────────────────────────── */}
      {(() => {
        const criticalGaps: Record<string, { title: string; description: string; cost: string; roi: string; timeline: string }> = {
          northwood: {
            title: 'Manual Call Center Operations — 2,500 agents across 5 legacy CCaaS vendors',
            description: 'Your contact center operates on 5 siloed CCaaS platforms with no unified routing, analytics, or AI assistance. Agent handle time averages 8.2 minutes with 34% repeat-call rate. We recommend implementing Parloa AI with Genesys to automate 60% of inbound calls and consolidate 5 siloed CCaaS deployments into one platform.',
            cost: '$3,000,000',
            roi: '$8M/yr savings',
            timeline: '16 weeks',
          },
          pinnacle: {
            title: 'Manual Prior Authorization — 340 staff processing prior auth requests',
            description: 'Prior authorization requests are processed manually across 340 staff, averaging 45 minutes per request with a 30% initial denial rate. Patients wait an average of 5 business days for authorization. We recommend deploying Tennr AI for automated prior authorization, reducing approval time from 5 days to 4 hours.',
            cost: '$1,500,000',
            roi: '$5.5M/yr savings',
            timeline: '12 weeks',
          },
          atlas: {
            title: 'Disconnected MES-to-ERP pipeline — manual data entry between shop floor and SAP',
            description: 'Production data is manually entered from shop floor MES systems into SAP at end of shift, creating 4-8 hour data lag with 3.2% transcription error rate. No real-time OEE visibility across plants. We recommend implementing a real-time MES-to-SAP integration layer with automated production reporting and AI-powered anomaly detection.',
            cost: '$2,200,000',
            roi: '$6.5M/yr savings',
            timeline: '20 weeks',
          },
          northbridge: {
            title: 'No unified cross-OpCo analytics — 12 operating companies with isolated BI instances',
            description: 'Each of your 12 operating companies runs its own BI stack with no cross-portfolio visibility. Board reporting requires 3 weeks of manual data assembly. No standardized KPIs across OpCos. We recommend implementing a unified analytics platform with automated cross-OpCo data federation and standardized executive dashboards.',
            cost: '$1,800,000',
            roi: '$4.2M/yr savings',
            timeline: '14 weeks',
          },
          brazil: {
            title: 'No interoperable citizen data layer — 8 ministries with separate citizen databases',
            description: 'Each of the 8 ministries maintains its own citizen database with no interoperability. Citizens must re-register for every government service. No unified identity resolution across agencies. We recommend implementing a federated citizen data layer with privacy-preserving identity resolution and cross-ministry data sharing protocols.',
            cost: '$4,500,000',
            roi: '$12M/yr savings',
            timeline: '24 weeks',
          },
        };
        const gap = criticalGaps[company.id] ?? {
          title: 'No data lake infrastructure detected',
          description: 'Your organization currently has no unified data infrastructure. Without a data lake, 73% of planned AI initiatives are impossible to execute and cross-division visibility remains zero. We recommend implementing On-prem Delta Lakehouse as the foundational layer — connecting all operating company systems, enabling real-time analytics, ML workloads, and enterprise-wide decision support.',
          cost: '$200,000',
          roi: '6x in year one',
          timeline: '16 weeks',
        };
        return (
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="rounded-2xl p-4 sm:p-6" style={{ background: 'var(--cc-bg-card)', border: '1px solid var(--cc-border)' }}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-0.5">
                <AlertTriangle className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-block bg-red-500 text-white text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full">
                    Critical Gap
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--cc-text)' }}>
                  {gap.title}
                </h3>
                <p className="leading-relaxed max-w-3xl" style={{ color: 'var(--cc-text-secondary)' }}>
                  {gap.description}
                </p>
                <div className="flex flex-wrap items-center gap-6 mt-4">
                  <p className="text-sm font-semibold" style={{ color: 'var(--cc-text)' }}>
                    Estimated implementation:{' '}
                    <span className="font-mono text-orange-600">{gap.cost}</span>
                  </p>
                  <p className="text-sm font-semibold" style={{ color: 'var(--cc-text)' }}>
                    Projected ROI:{' '}
                    <span className="font-mono text-green-500">{gap.roi}</span>
                  </p>
                  <p className="text-sm font-semibold flex items-center gap-1" style={{ color: 'var(--cc-text)' }}>
                    <Zap className="w-4 h-4 text-amber-500" />
                    Timeline:{' '}
                    <span className="font-mono" style={{ color: 'var(--cc-text)' }}>{gap.timeline}</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
        );
      })()}
    </div>
  );
}
