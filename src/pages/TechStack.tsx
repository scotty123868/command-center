import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, AlertTriangle, TrendingUp, Shield, Clock, Zap } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { getCurrentStack, recommendations } from '../data/constants';
import type { CurrentTool, Recommendation } from '../data/constants';
import { useCompany } from '../data/CompanyContext';

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
    ? 'bg-red-50 border-l-4 border-l-red-400'
    : s <= 5
    ? 'bg-amber-50'
    : 'bg-green-50';

const complexityColor = (c: string) =>
  c === 'High' ? 'bg-red-100 text-red-700' : c === 'Medium' ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700';

const riskColor = (r: string) =>
  r === 'Critical' ? 'bg-red-600 text-white' : r === 'High' ? 'bg-red-100 text-red-700' : r === 'Medium' ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700';

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
        stroke="#E5E7EB"
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
  Insurance: 0.38,
  Healthcare: 0.34,
  Manufacturing: 0.30,
  'Financial Services': 0.36,
  Technology: 0.32,
  'Diversified Industrial': 0.28,
  'Digital Government': 0.42,
};

/* ══════════════════════════════════════════════════════════════════════════ */

export default function TechStack() {
  const { company } = useCompany();
  const currentStack = getCurrentStack(company.id);

  /* ROI calculator state */
  const [spend, setSpend] = useState(3_200_000);
  const [employees, setEmployees] = useState(450);
  const [industry, setIndustry] = useState('Insurance');

  const projected = useMemo(() => {
    const base = spend * (industryMult[industry] ?? 0.33);
    const empFactor = 1 + (employees - 200) / 5000;
    return Math.round(base * empFactor);
  }, [spend, employees, industry]);

  const optimized = spend - projected;

  const donutData = [
    { name: 'Optimized Spend', value: optimized },
    { name: 'Projected Savings', value: projected },
  ];

  const DONUT_COLORS = ['#4285F4', '#10B981'];

  const overallScore = 34;
  const segments = [
    { label: 'Critical', pct: 50, color: '#EF4444' },
    { label: 'Poor', pct: 17, color: '#F59E0B' },
    { label: 'Fair', pct: 17, color: '#10B981' },
    { label: 'Unused', pct: 16, color: '#E5E7EB' },
  ];

  // Find migration weeks for each recommendation from currentStack
  const getMigrationWeeks = (currentName: string): number => {
    const match = currentStack.find(
      (t) => currentName.toLowerCase().includes(t.name.toLowerCase().split(' ')[0].toLowerCase())
    );
    return match?.migrationWeeks ?? 8;
  };

  return (
    <div className="space-y-12">
      {/* ─── Section 1 : Stack Health Overview ─────────────────────────────── */}
      <section>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-2xl font-bold text-gray-900 mb-6"
        >
          Stack Health Overview
        </motion.h2>

        {/* Overall health bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-gray-400" />
              <span className="text-sm font-medium text-gray-600">Overall Tech Stack Health</span>
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
          <div className="flex gap-6 mt-3">
            {segments.slice(0, 3).map((seg) => (
              <div key={seg.label} className="flex items-center gap-1.5 text-xs text-gray-500">
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
              className={`rounded-2xl border border-gray-100 shadow-sm p-4 ${cardBg(tool.score)}`}
            >
              <p className="text-xs font-medium text-gray-500 truncate mb-2">{tool.name}</p>
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
          className="text-2xl font-bold text-gray-900 mb-6"
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
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 p-6 md:p-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-[2fr_auto_2fr_auto] gap-6 items-center">
                  {/* CURRENT — left 40% */}
                  <div>
                    <p className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase mb-2">
                      Current
                    </p>
                    <h4 className="font-bold text-gray-900 text-lg">{rec.current.name}</h4>
                    <p className="text-sm text-gray-500 mt-1 leading-relaxed">{rec.current.description}</p>
                    <div className="flex flex-wrap items-center gap-2 mt-3">
                      <span className="text-xs font-mono text-gray-600 bg-gray-100 px-2 py-0.5 rounded">
                        {fmt(rec.current.cost)}/yr
                      </span>
                      {rec.current.users > 0 && (
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
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
                          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${complexityColor(matchedTool.integrationComplexity)}`}>
                            {matchedTool.integrationComplexity} complexity
                          </span>
                          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${riskColor(matchedTool.riskLevel)}`}>
                            {matchedTool.riskLevel} risk
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* ARROW — center */}
                  <div className="hidden md:flex flex-col items-center gap-2">
                    <motion.div
                      animate={{ x: [0, 6, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <ArrowRight className="w-7 h-7 text-blue-500" />
                    </motion.div>
                    <span className="text-[10px] font-medium text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      ~{weeks} weeks
                    </span>
                  </div>

                  {/* RECOMMENDED — right 40% */}
                  <div>
                    <p className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase mb-2">
                      Recommended
                    </p>
                    <h4 className="font-bold text-gray-900 text-lg">
                      <span className="text-green-600">{rec.recommended.name}</span>
                    </h4>
                    <p className="text-sm text-gray-500 mt-1 leading-relaxed">{rec.recommended.description}</p>
                    <div className="mt-3">
                      <span className="text-xs font-mono text-gray-600 bg-gray-100 px-2 py-0.5 rounded">
                        {fmt(rec.recommended.cost)}/yr
                      </span>
                    </div>
                  </div>

                  {/* SAVINGS — far right */}
                  <div className="text-right md:min-w-[110px]">
                    <p className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase mb-1">
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
          className="text-2xl font-bold text-gray-900 mb-6"
        >
          ROI Calculator
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left: Inputs */}
            <div className="space-y-8">
              {/* Spend slider */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Annual IT Spend
                </label>
                <input
                  type="range"
                  min={1_000_000}
                  max={10_000_000}
                  step={100_000}
                  value={spend}
                  onChange={(e) => setSpend(Number(e.target.value))}
                  className="w-full accent-blue-500 h-2 rounded-full cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>$1M</span>
                  <span className="text-base font-bold text-gray-900">{fmt(spend)}</span>
                  <span>$10M</span>
                </div>
              </div>

              {/* Employee slider */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Employees
                </label>
                <input
                  type="range"
                  min={50}
                  max={5000}
                  step={10}
                  value={employees}
                  onChange={(e) => setEmployees(Number(e.target.value))}
                  className="w-full accent-blue-500 h-2 rounded-full cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>50</span>
                  <span className="text-base font-bold text-gray-900">
                    {employees.toLocaleString()}
                  </span>
                  <span>5,000</span>
                </div>
              </div>

              {/* Industry select */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
                >
                  {Object.keys(industryMult).map((ind) => (
                    <option key={ind} value={ind}>
                      {ind}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Right: Results */}
            <div className="flex flex-col items-center justify-center gap-6">
              {/* Big projected number */}
              <div className="text-center">
                <p className="text-sm font-medium text-gray-500 mb-1">Projected Annual Savings</p>
                <p className="text-5xl font-extrabold text-green-500 font-mono">{fmt(projected)}</p>
                <div className="flex items-center justify-center gap-1 mt-2 text-green-600">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    {((projected / spend) * 100).toFixed(0)}% of total spend
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
                      border: '1px solid #E5E7EB',
                      fontSize: '13px',
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>

              <div className="flex gap-8 text-sm">
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
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="rounded-2xl bg-[#F0F4FF] p-8"
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
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              No data lake infrastructure detected
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-3xl">
              Your organization currently has no unified data infrastructure. Without a data lake,
              73% of planned AI initiatives are impossible to execute and cross-OpCo visibility
              remains zero. We recommend implementing{' '}
              <span className="font-semibold text-gray-900">Databricks Lakehouse</span> as the
              foundational layer — connecting all operating company systems, enabling real-time
              analytics, ML workloads, and enterprise-wide decision support.
            </p>
            <div className="flex flex-wrap items-center gap-6 mt-4">
              <p className="text-sm font-semibold text-gray-700">
                Estimated implementation:{' '}
                <span className="font-mono text-orange-600">$200,000</span>
              </p>
              <p className="text-sm font-semibold text-gray-700">
                Projected ROI:{' '}
                <span className="font-mono text-green-500">6x in year one</span>
              </p>
              <p className="text-sm font-semibold text-gray-700 flex items-center gap-1">
                <Zap className="w-4 h-4 text-amber-500" />
                Timeline:{' '}
                <span className="font-mono text-gray-900">16 weeks</span>
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
