import { motion } from 'framer-motion';
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
  const monthlySavingsEnd = roi.netYear1 / 8; // approx monthly savings at steady state
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
    <div className="rounded-lg border border-gray-100 bg-white px-3 py-2 shadow-md text-sm">
      <p className="font-semibold text-gray-800">{d.name}</p>
      {d.value !== 0 && (
        <p style={{ color: d.fill }}>
          {d.value > 0 ? '+' : ''}
          {fmtCompact(d.value)}
        </p>
      )}
      <p className="text-gray-500">Total: {fmtCompact(d.total)}</p>
    </div>
  );
}

// ─── Custom Timeline Tooltip ────────────────────────────────────────────────

function TimelineTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-gray-100 bg-white px-3 py-2 shadow-md text-sm">
      <p className="font-semibold text-gray-800 mb-1">{label}</p>
      {payload.map((p: any) => (
        <p key={p.dataKey} style={{ color: p.color }}>
          {p.name}: {fmtAxisK(p.value)}
        </p>
      ))}
    </div>
  );
}

// ─── Page Component ─────────────────────────────────────────────────────────

export default function ROISummary() {
  const { company } = useCompany();
  const roiSummary = getRoiSummary(company.id);
  const metrics = buildMetrics(roiSummary);
  const waterfallChartData = buildWaterfallData(roiSummary);
  const timelineData = buildTimeline(roiSummary);

  return (
    <div className="space-y-10">
      {/* ── Generate Board Report Button ──────────────────────────────── */}
      <div className="flex justify-end">
        <button
          onClick={openBoardReport}
          className="inline-flex items-center gap-2 rounded-xl bg-[#4285F4] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-[#3367D6]"
        >
          <FileDown size={16} />
          Generate Board Report
        </button>
      </div>

      {/* ── Section 1: Hero ───────────────────────────────────────────── */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-sm font-medium uppercase tracking-widest text-gray-400 mb-2">
          Total Estimated Impact
        </p>
        <h1
          className="font-mono font-bold leading-none"
          style={{ fontSize: 64, color: '#4285F4' }}
        >
          {fmtCompact(roiSummary.netYear1)}
        </h1>
        <p className="mt-2 text-lg text-gray-500">estimated annual savings</p>
      </motion.div>

      {/* ── Section 2: Breakdown Cards ────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {metrics.map((m, i) => {
          const Icon = m.icon;
          return (
            <motion.div
              key={m.label}
              className="rounded-2xl bg-white border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.04)] p-5 flex flex-col gap-3"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (i + 1) * 0.05, duration: 0.3 }}
            >
              <div
                className="flex items-center justify-center w-10 h-10 rounded-lg"
                style={{ backgroundColor: m.color + '14' }}
              >
                <Icon size={20} style={{ color: m.color }} />
              </div>
              <p className="text-sm text-gray-500">{m.label}</p>
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
      <motion.div
        className="rounded-2xl bg-white border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.04)] p-6"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.3 }}
      >
        <h2 className="text-lg font-semibold text-gray-800 mb-6">
          Savings Waterfall
        </h2>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart
            data={waterfallChartData}
            margin={{ top: 10, right: 20, left: 10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 12, fill: '#6B7280' }}
              axisLine={{ stroke: '#E5E7EB' }}
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
            <Bar dataKey="segment" stackId="stack" radius={[4, 4, 0, 0]}>
              {waterfallChartData.map((entry, idx) => (
                <Cell key={idx} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      {/* ── Section 4: Timeline Chart ─────────────────────────────────── */}
      <motion.div
        className="rounded-2xl bg-white border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.04)] p-6"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.3 }}
      >
        <h2 className="text-lg font-semibold text-gray-800 mb-6">
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
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 12, fill: '#6B7280' }}
              axisLine={{ stroke: '#E5E7EB' }}
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
            <ReferenceLine
              x="May"
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
        className="rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden"
        style={{ backgroundColor: '#F0F4FF' }}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.3 }}
      >
        <div className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#4285F4]/10">
              <BarChart3 size={20} className="text-[#4285F4]" />
            </div>
            <h2 className="text-lg font-semibold text-gray-800">Payback Analysis</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.04)] p-5 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock size={16} className="text-[#4285F4]" />
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Payback Period
                </p>
              </div>
              <p className="text-3xl font-mono font-bold text-[#4285F4]">{(roiSummary.implementationCosts / (roiSummary.netYear1 / 12)).toFixed(1)}</p>
              <p className="text-sm text-gray-500 mt-1">months</p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.04)] p-5 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp size={16} className="text-[#10B981]" />
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Year 1 Net ROI
                </p>
              </div>
              <p className="text-3xl font-mono font-bold text-[#10B981]">{Math.round((roiSummary.netYear1 / roiSummary.implementationCosts) * 100)}%</p>
              <p className="text-sm text-gray-500 mt-1">return on investment</p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.04)] p-5 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <DollarSign size={16} className="text-[#10B981]" />
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Year 2 Projected
                </p>
              </div>
              <p className="text-3xl font-mono font-bold text-[#10B981]">{fmtCompact(roiSummary.year2Projected)}</p>
              <p className="text-sm text-gray-500 mt-1">annual savings</p>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed max-w-3xl">
            With a total implementation investment of {fmtCompact(roiSummary.implementationCosts)}, the program reaches break-even around month {Math.ceil(roiSummary.implementationCosts / (roiSummary.netYear1 / 12))}. Year 1 net savings of {fmtCompact(roiSummary.netYear1)} represent a {Math.round((roiSummary.netYear1 / roiSummary.implementationCosts) * 100)}% ROI. As automation scales and AI-native tools mature in Year 2, implementation costs drop to near-zero maintenance while savings compound to a projected {fmtCompact(roiSummary.year2Projected)} annually.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
