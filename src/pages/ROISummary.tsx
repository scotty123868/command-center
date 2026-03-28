import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Cpu,
  Workflow,
  KeyRound,
  Hammer,
  TrendingUp,
  Clock,
  BarChart3,
  DollarSign,
  FileDown,
  FileText,
  PieChart,
  Presentation,
  ExternalLink,
} from 'lucide-react';
import { openBoardReport } from '../components/BoardReport';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  Line,
  Legend,
  ReferenceLine,
} from 'recharts';
import { getRoiSummary } from '../data/constants';
import { useCompany } from '../data/CompanyContext';
import { LASTMILE_URL } from '../data/crosslinks';

// ─── Helpers ────────────────────────────────────────────────────────────────

const fmtCompact = (n: number) => {
  if (Math.abs(n) >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (Math.abs(n) >= 1_000) return `$${Math.round(n / 1_000)}k`;
  return `$${n}`;
};

const fmtAxisM = (v: number) => `$${(v / 1_000_000).toFixed(1)}M`;
const fmtAxisK = (v: number) => `$${Math.round(v / 1_000)}k`;

// ─── Waterfall builder (derived from per-company ROI data) ──────────────────

function buildWaterfallData(roi: ReturnType<typeof getRoiSummary>) {
  const raw = [
    { name: 'Current State', value: 0, total: 0, fill: '#6B7280' },
    { name: 'Tech Stack', value: roi.techStackSavings, total: roi.techStackSavings, fill: '#10B981' },
    { name: 'Workflow Auto.', value: roi.workflowAutomation, total: roi.techStackSavings + roi.workflowAutomation, fill: '#10B981' },
    { name: 'License Recovery', value: roi.licenseRecovery, total: roi.techStackSavings + roi.workflowAutomation + roi.licenseRecovery, fill: '#10B981' },
    { name: 'Implementation', value: -roi.implementationCosts, total: roi.netYear1, fill: '#EF4444' },
    { name: 'Net Year 1', value: 0, total: roi.netYear1, fill: '#4285F4' },
  ];
  return raw.map((d) => {
    if (d.name === 'Current State') return { ...d, base: 0, segment: 0 };
    if (d.name === 'Net Year 1') return { ...d, base: 0, segment: d.total };
    if (d.value < 0) return { ...d, base: d.total, segment: Math.abs(d.value) };
    return { ...d, base: d.total - d.value, segment: d.value };
  });
}

// ─── Implementation timeline builder (scaled per company) ───────────────────

function buildTimeline(roi: ReturnType<typeof getRoiSummary>) {
  const totalCost = roi.implementationCosts;
  // monthlySavingsEnd not used but kept for reference: roi.netYear1 / 8
  // Cost distribution: front-loaded ramp-down
  const costPcts = [0.14, 0.18, 0.21, 0.14, 0.11, 0.07, 0.05, 0.04, 0.03, 0.015, 0.007, 0.003];
  // Savings distribution: back-loaded ramp-up
  const savPcts = [0, 0.015, 0.035, 0.06, 0.08, 0.10, 0.10, 0.11, 0.11, 0.12, 0.12, 0.13];
  const totalSav = roi.techStackSavings + roi.workflowAutomation + roi.licenseRecovery;
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months.map((month, i) => {
    const cost = Math.round(totalCost * costPcts[i]);
    const savings = Math.round(totalSav * savPcts[i]);
    return { month, cost, savings, net: savings - cost };
  });
}

// ─── Metric cards builder ────────────────────────────────────────────────────

function buildMetrics(roiSummary: ReturnType<typeof getRoiSummary>) {
  return [
    {
      label: 'Tech Stack Optimization',
      value: roiSummary.techStackSavings,
      color: '#10B981',
      icon: Cpu,
    },
    {
      label: 'Workflow Automation',
      value: roiSummary.workflowAutomation,
      color: '#10B981',
      icon: Workflow,
    },
    {
      label: 'License Recovery',
      value: roiSummary.licenseRecovery,
      color: '#10B981',
      icon: KeyRound,
    },
    {
      label: 'Implementation Costs',
      value: -roiSummary.implementationCosts,
      color: '#EF4444',
      icon: Hammer,
    },
  ];
}

// ─── Custom Waterfall Tooltip ───────────────────────────────────────────────

function WaterfallTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null;
  const d = payload[0]?.payload;
  if (!d) return null;
  return (
    <div className="rounded-lg px-3 py-2 shadow-md text-sm" style={{ background: 'var(--cc-bg-card)', border: '1px solid var(--cc-border)' }}>
      <p className="font-semibold" style={{ color: 'var(--cc-text)' }}>{d.name}</p>
      {d.value !== 0 && (
        <p style={{ color: d.fill }}>
          {d.value > 0 ? '+' : ''}
          {fmtCompact(d.value)}
        </p>
      )}
      <p style={{ color: 'var(--cc-text-secondary)' }}>Total: {fmtCompact(d.total)}</p>
    </div>
  );
}

// ─── Break-even month finder ────────────────────────────────────────────────

function findBreakEvenMonth(timeline: ReturnType<typeof buildTimeline>): string | null {
  let cumNet = 0;
  for (const d of timeline) {
    cumNet += d.net;
    if (cumNet >= 0) return d.month;
  }
  return null;
}

// ─── Custom Timeline Tooltip ────────────────────────────────────────────────

function TimelineTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg px-3 py-2 shadow-md text-sm" style={{ background: 'var(--cc-bg-card)', border: '1px solid var(--cc-border)' }}>
      <p className="font-semibold mb-1" style={{ color: 'var(--cc-text)' }}>{label}</p>
      {payload.map((p: any) => (
        <p key={p.dataKey} style={{ color: p.color }}>
          {p.name}: {fmtAxisK(p.value)}
        </p>
      ))}
    </div>
  );
}

// ─── Waterfall Chart Section (animated) ─────────────────────────────────────

function WaterfallChartSection({ waterfallChartData }: { waterfallChartData: ReturnType<typeof buildWaterfallData> }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="rounded-2xl shadow-sm p-6" style={{ background: 'var(--cc-bg-card)', border: '1px solid var(--cc-border)' }}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ delay: 0.25, duration: 0.4 }}
    >
      <h2 className="text-lg font-semibold mb-6">
        Savings Waterfall
      </h2>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={waterfallChartData}
          margin={{ top: 10, right: 20, left: 10, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 12, fill: '#6B7280' }}
            axisLine={{ stroke: 'rgba(255,255,255,0.06)' }}
            tickLine={false}
          />
          <YAxis
            tickFormatter={fmtAxisM}
            tick={{ fontSize: 12, fill: '#6B7280' }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<WaterfallTooltip />} />
          {/* Invisible base bar */}
          <Bar dataKey="base" stackId="stack" fill="transparent" />
          {/* Visible colored segment */}
          <Bar
            dataKey="segment"
            stackId="stack"
            radius={[4, 4, 0, 0]}
            isAnimationActive={isInView}
            animationDuration={800}
            animationBegin={0}
          >
            {waterfallChartData.map((entry, idx) => (
              <Cell key={idx} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

// ─── Page Component ─────────────────────────────────────────────────────────

export default function ROISummary() {
  const { company } = useCompany();
  const roiSummary = getRoiSummary(company.id);
  const metrics = buildMetrics(roiSummary);
  const waterfallChartData = buildWaterfallData(roiSummary);
  const timelineData = buildTimeline(roiSummary);
  const breakEvenMonth = findBreakEvenMonth(timelineData);

  return (
    <div className="space-y-12">
      {/* Preliminary Estimate Banner */}
      <span className="text-xs px-3 py-1 rounded inline-block" style={{ color: 'var(--cc-text-secondary)', background: 'var(--cc-bg-card)' }}>
        Preliminary Estimate — Based on Industry Benchmarks
      </span>

      {/* ── Generate Board Report Buttons ──────────────────────────────── */}
      <div className="flex justify-end gap-3">
        <button
          onClick={() => window.open(`/board-report${window.location.search}`, '_blank')}
          className="group relative inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/30 cursor-pointer overflow-hidden"
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.2) 50%, transparent 75%)', animation: 'shimmer 2s ease-in-out infinite' }} />
          <style>{`@keyframes shimmer { 0%, 100% { transform: translateX(-100%); } 50% { transform: translateX(100%); } }`}</style>
          <FileDown size={16} className="relative" />
          <span className="relative">Generate Board Report</span>
        </button>
        <button
          onClick={() => openBoardReport(company.id)}
          className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold shadow-sm transition-colors duration-200 cursor-pointer" style={{ background: 'var(--cc-bg-card)', color: 'var(--cc-text)', border: '1px solid var(--cc-border)' }}
        >
          <FileDown size={16} />
          Quick Export
        </button>
      </div>

      {/* ── Section 1: Hero ───────────────────────────────────────────── */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-sm font-medium uppercase tracking-widest mb-2" style={{ color: 'var(--cc-text-tertiary)' }}>
          Projected Net Impact
        </p>
        <h1
          className="font-mono font-bold leading-none bg-clip-text text-transparent"
          style={{ fontSize: 80, backgroundImage: 'linear-gradient(135deg, #10B981 0%, #059669 40%, #047857 100%)' }}
        >
          {fmtCompact(roiSummary.netYear1)}
        </h1>
        <p className="mt-3 text-lg" style={{ color: 'var(--cc-text-secondary)' }}>after implementation costs</p>
        <p className="mt-1 text-sm" style={{ color: 'var(--cc-text-tertiary)' }}>
          Gross savings: {fmtCompact(roiSummary.techStackSavings + roiSummary.workflowAutomation + roiSummary.licenseRecovery)} &mdash; Implementation: {fmtCompact(roiSummary.implementationCosts)}
        </p>
        <p className="mt-2 text-xs italic" style={{ color: 'var(--cc-text-tertiary)' }}>
          Based on industry benchmarks and preliminary assessment data
        </p>
      </motion.div>

      {/* ── Section 2: Breakdown Cards ────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {metrics.map((m, i) => {
          const Icon = m.icon;
          return (
            <motion.div
              key={m.label}
              className="group rounded-2xl p-5 flex flex-col gap-3 transition-all duration-200 hover:shadow-md" style={{ background: 'var(--cc-bg-card)', border: '1px solid var(--cc-border)' }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (i + 1) * 0.08, duration: 0.4 }}
              whileHover={{ y: -2, scale: 1.02 }}
            >
              <div
                className="flex items-center justify-center w-10 h-10 rounded-lg transition-transform duration-200 group-hover:scale-110"
                style={{ backgroundColor: m.color + '14' }}
              >
                <Icon size={20} style={{ color: m.color }} />
              </div>
              <p className="text-sm" style={{ color: 'var(--cc-text-secondary)' }}>{m.label}</p>
              <p
                className="text-2xl font-bold font-mono"
                style={{ color: m.color }}
              >
                {m.value < 0 ? '-' : ''}
                {fmtCompact(Math.abs(m.value))}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* ── Section 3: Waterfall Chart ────────────────────────────────── */}
      <WaterfallChartSection waterfallChartData={waterfallChartData} />

      {/* ── Cross-link to Last Mile Impact ────────────────────────────── */}
      <a
        href={`${LASTMILE_URL}/impact?company=${company.id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-sm text-blue-500 hover:text-blue-400 transition-colors"
      >
        See verified impact data
        <ExternalLink className="w-3.5 h-3.5" strokeWidth={2} />
      </a>

      {/* ── Section 4: Timeline Chart ─────────────────────────────────── */}
      <motion.div
        className="rounded-2xl shadow-sm p-6" style={{ background: 'var(--cc-bg-card)', border: '1px solid var(--cc-border)' }}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.3 }}
      >
        <h2 className="text-lg font-semibold mb-6">
          Implementation Timeline &amp; Cost Curve
        </h2>
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart
            data={timelineData}
            margin={{ top: 10, right: 20, left: 10, bottom: 5 }}
          >
            <defs>
              <linearGradient id="gradCost" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#EF4444" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#EF4444" stopOpacity={0.05} />
              </linearGradient>
              <linearGradient id="gradSavings" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10B981" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#10B981" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 12, fill: '#6B7280' }}
              axisLine={{ stroke: 'rgba(255,255,255,0.06)' }}
              tickLine={false}
            />
            <YAxis
              tickFormatter={fmtAxisK}
              tick={{ fontSize: 12, fill: '#6B7280' }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip content={<TimelineTooltip />} />
            <Legend
              verticalAlign="top"
              height={36}
              iconType="circle"
              wrapperStyle={{ fontSize: 13 }}
            />
            {breakEvenMonth && (
              <ReferenceLine
                x={breakEvenMonth}
                stroke="#4285F4"
                strokeDasharray="6 4"
                strokeWidth={1.5}
                label={{
                  value: 'Break-even',
                  position: 'top',
                  fill: '#4285F4',
                  fontSize: 12,
                  fontWeight: 600,
                }}
              />
            )}
            <Area
              type="monotone"
              dataKey="cost"
              name="Costs"
              stroke="#EF4444"
              fill="url(#gradCost)"
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="savings"
              name="Savings"
              stroke="#10B981"
              fill="url(#gradSavings)"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="net"
              name="Net"
              stroke="#4285F4"
              strokeWidth={2}
              strokeDasharray="6 4"
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>

      {/* ── Section 5: Payback Analysis Panel ─────────────────────────── */}
      <motion.div
        className="rounded-2xl shadow-sm overflow-hidden"
        style={{ background: 'var(--cc-bg-card)', border: '1px solid var(--cc-border)' }}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.3 }}
      >
        <div className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#4285F4]/10">
              <BarChart3 size={20} className="text-[#4285F4]" />
            </div>
            <h2 className="text-lg font-semibold">Payback Analysis</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="rounded-2xl p-5 text-center" style={{ background: 'var(--cc-bg-input)', border: '1px solid var(--cc-border)' }}>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock size={16} className="text-[#4285F4]" />
                <p className="text-xs font-semibold uppercase tracking-wider">
                  Payback Period
                </p>
              </div>
              <p className="text-3xl font-mono font-bold text-[#4285F4]">{(roiSummary.implementationCosts / (roiSummary.netYear1 / 12)).toFixed(1)}</p>
              <p className="text-sm mt-1">months</p>
            </div>

            <div className="rounded-2xl p-5 text-center" style={{ background: 'var(--cc-bg-input)', border: '1px solid var(--cc-border)' }}>
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp size={16} className="text-[#10B981]" />
                <p className="text-xs font-semibold uppercase tracking-wider">
                  Year 1 Net ROI
                </p>
              </div>
              <p className="text-3xl font-mono font-bold text-[#10B981]">{Math.round((roiSummary.netYear1 / roiSummary.implementationCosts) * 100)}%</p>
              <p className="text-sm mt-1">return on investment</p>
            </div>

            <div className="rounded-2xl p-5 text-center" style={{ background: 'var(--cc-bg-input)', border: '1px solid var(--cc-border)' }}>
              <div className="flex items-center justify-center gap-2 mb-2">
                <DollarSign size={16} className="text-[#10B981]" />
                <p className="text-xs font-semibold uppercase tracking-wider">
                  Year 2 Projected
                </p>
              </div>
              <p className="text-3xl font-mono font-bold text-[#10B981]">{fmtCompact(roiSummary.year2Projected)}</p>
              <p className="text-sm mt-1">annual savings</p>
            </div>
          </div>

          <p className="leading-relaxed max-w-3xl" style={{ color: 'var(--cc-text-secondary)' }}>
            With a total implementation investment of {fmtCompact(roiSummary.implementationCosts)}, the program reaches break-even around month {Math.ceil(roiSummary.implementationCosts / (roiSummary.netYear1 / 12))}. Year 1 net savings of {fmtCompact(roiSummary.netYear1)} represent a {Math.round((roiSummary.netYear1 / roiSummary.implementationCosts) * 100)}% ROI. As automation scales and AI-native tools mature in Year 2, implementation costs drop to near-zero maintenance while savings compound to a projected {fmtCompact(roiSummary.year2Projected)} annually.
          </p>
        </div>
      </motion.div>

      {/* ── Section 6: Board Report Preview ─────────────────────────── */}
      <motion.div
        className="rounded-2xl shadow-sm p-8" style={{ background: 'var(--cc-bg-card)', border: '1px solid var(--cc-border)' }}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.3 }}
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold">Board Report Preview</h2>
            <p className="text-sm mt-1">Executive-ready report with key findings and recommendations</p>
          </div>
          <button
            onClick={() => window.open(`/board-report${window.location.search}`, '_blank')}
            className="group relative inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/30 cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.2) 50%, transparent 75%)', animation: 'shimmer 2s ease-in-out infinite' }} />
            <FileDown size={16} className="relative" />
            <span className="relative">Generate Board Report</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Page 1 Preview */}
          <div className="rounded-xl p-5 hover:shadow-md transition-shadow duration-200" style={{ background: 'var(--cc-bg-input)', border: '1px solid var(--cc-border)' }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'var(--cc-accent-glow)' }}>
                <Presentation size={18} className="text-blue-500" />
              </div>
              <div>
                <p className="text-sm font-semibold">Executive Summary</p>
                <p className="text-[11px]">Page 1</p>
              </div>
            </div>
            <ul className="space-y-1.5 text-xs">
              <li className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-blue-400" />Total savings opportunity</li>
              <li className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-blue-400" />Implementation timeline</li>
              <li className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-blue-400" />Key recommendations</li>
            </ul>
          </div>

          {/* Page 2 Preview */}
          <div className="rounded-xl p-5 hover:shadow-md transition-shadow duration-200" style={{ background: 'var(--cc-bg-input)', border: '1px solid var(--cc-border)' }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'var(--cc-green-dim)' }}>
                <PieChart size={18} className="text-emerald-500" />
              </div>
              <div>
                <p className="text-sm font-semibold">Financial Analysis</p>
                <p className="text-[11px]">Page 2</p>
              </div>
            </div>
            <ul className="space-y-1.5 text-xs">
              <li className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-emerald-400" />Savings waterfall breakdown</li>
              <li className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-emerald-400" />Payback period analysis</li>
              <li className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-emerald-400" />Year 1 vs Year 2 projections</li>
            </ul>
          </div>

          {/* Page 3 Preview */}
          <div className="rounded-xl p-5 hover:shadow-md transition-shadow duration-200" style={{ background: 'var(--cc-bg-input)', border: '1px solid var(--cc-border)' }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'rgba(139,92,246,0.15)' }}>
                <FileText size={18} className="text-purple-500" />
              </div>
              <div>
                <p className="text-sm font-semibold">Action Plan</p>
                <p className="text-[11px]">Page 3</p>
              </div>
            </div>
            <ul className="space-y-1.5 text-xs">
              <li className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-purple-400" />Division-by-division roadmap</li>
              <li className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-purple-400" />Quick wins vs. strategic bets</li>
              <li className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-purple-400" />Next steps and timeline</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
