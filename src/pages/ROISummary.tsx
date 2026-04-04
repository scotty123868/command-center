import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
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
  AlertTriangle,
} from 'lucide-react';
import { openBoardReport, downloadBoardReportPDF } from '../components/BoardReport';
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

// ─── Scenario Types ──────────────────────────────────────────────────────────

type ScenarioKey = 'conservative' | 'base' | 'aggressive';

interface ScenarioConfig {
  label: string;
  adoption: string;
  rollout: string;
  savingsMultiplier: number;
  timelineMultiplier: number;
  description: string;
}

const SCENARIOS: Record<ScenarioKey, ScenarioConfig> = {
  conservative: {
    label: 'Conservative',
    adoption: '60% adoption',
    rollout: '18-month rollout',
    savingsMultiplier: 0.55,
    timelineMultiplier: 1.5,
    description: 'Lower adoption assumptions with extended implementation timeline',
  },
  base: {
    label: 'Base Case',
    adoption: '80% adoption',
    rollout: '12-month rollout',
    savingsMultiplier: 1.0,
    timelineMultiplier: 1.0,
    description: 'Expected scenario based on industry benchmarks',
  },
  aggressive: {
    label: 'Aggressive',
    adoption: '95% adoption',
    rollout: '8-month rollout',
    savingsMultiplier: 1.4,
    timelineMultiplier: 0.67,
    description: 'Accelerated adoption with compressed implementation',
  },
};

// ─── Helpers ────────────────────────────────────────────────────────────────

const fmtCompact = (n: number) => {
  if (Math.abs(n) >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (Math.abs(n) >= 1_000) return `$${Math.round(n / 1_000)}k`;
  return `$${n}`;
};

const fmtAxisM = (v: number) => `$${(v / 1_000_000).toFixed(1)}M`;
const fmtAxisK = (v: number) => `$${Math.round(v / 1_000)}k`;

function fmtDollarsWithCommas(n: number): string {
  return '$' + Math.round(n).toLocaleString();
}

// ─── Scenario-adjusted ROI builder ──────────────────────────────────────────

function getScenarioROI(
  baseRoi: ReturnType<typeof getRoiSummary>,
  scenario: ScenarioKey
) {
  const cfg = SCENARIOS[scenario];
  const m = cfg.savingsMultiplier;
  return {
    techStackSavings: Math.round(baseRoi.techStackSavings * m),
    workflowAutomation: Math.round(baseRoi.workflowAutomation * m),
    licenseRecovery: Math.round(baseRoi.licenseRecovery * m),
    implementationCosts: baseRoi.implementationCosts, // fixed cost
    netYear1: Math.round(
      (baseRoi.techStackSavings + baseRoi.workflowAutomation + baseRoi.licenseRecovery) * m -
        baseRoi.implementationCosts
    ),
    year2Projected: Math.round(baseRoi.year2Projected * m),
    rolloutMonths: Math.round(12 * cfg.timelineMultiplier),
  };
}

// ─── Animated Number Hook ───────────────────────────────────────────────────

function useAnimatedValue(target: number, duration = 800): number {
  const [value, setValue] = useState(target);
  const prevTarget = useRef(target);

  useEffect(() => {
    const from = prevTarget.current;
    prevTarget.current = target;
    if (from === target) return;
    const start = performance.now();
    let raf: number;
    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(from + (target - from) * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);

  return value;
}

// ─── Waterfall builder ──────────────────────────────────────────────────────

function buildWaterfallData(roi: ReturnType<typeof getScenarioROI>) {
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

// ─── Implementation timeline builder ────────────────────────────────────────

function buildTimeline(roi: ReturnType<typeof getScenarioROI>) {
  const totalCost = roi.implementationCosts;
  const n = roi.rolloutMonths;
  const totalSav = roi.techStackSavings + roi.workflowAutomation + roi.licenseRecovery;
  const allMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan+', 'Feb+', 'Mar+', 'Apr+', 'May+', 'Jun+'];
  const months = allMonths.slice(0, n);
  return months.map((month, i) => {
    // Front-load costs, ramp savings
    const costWeight = Math.max(0, 1 - i / (n * 0.6));
    const savWeight = Math.min(1, i / (n * 0.7));
    const costNorm = costWeight / months.reduce((s, _, j) => s + Math.max(0, 1 - j / (n * 0.6)), 0);
    const savNorm = savWeight / months.reduce((s, _, j) => s + Math.min(1, j / (n * 0.7)), 0);
    const cost = Math.round(totalCost * costNorm);
    const savings = Math.round(totalSav * savNorm);
    return { month, cost, savings, net: savings - cost };
  });
}

// ─── Metric cards builder ───────────────────────────────────────────────────

function buildMetrics(roiSummary: ReturnType<typeof getScenarioROI>) {
  return [
    { label: 'Tech Stack Optimization', value: roiSummary.techStackSavings, color: '#10B981', icon: Cpu },
    { label: 'Workflow Automation', value: roiSummary.workflowAutomation, color: '#10B981', icon: Workflow },
    { label: 'License Recovery', value: roiSummary.licenseRecovery, color: '#10B981', icon: KeyRound },
    { label: 'Implementation Costs', value: -roiSummary.implementationCosts, color: '#EF4444', icon: Hammer },
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

// ─── Cost of Inaction Counter ───────────────────────────────────────────────

function CostOfInactionCounter({ monthlyWaste, companyName }: { monthlyWaste: number; companyName: string }) {
  const [elapsed, setElapsed] = useState(0);
  const perSecond = monthlyWaste / 30 / 24 / 3600; // per-second burn

  useEffect(() => {
    const start = Date.now();
    const iv = setInterval(() => setElapsed((Date.now() - start) / 1000), 50);
    return () => clearInterval(iv);
  }, []);

  const liveWaste = perSecond * elapsed;

  return (
    <motion.div
      className="rounded-2xl p-6 text-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(239,68,68,0.08) 0%, rgba(239,68,68,0.02) 100%)',
        border: '1px solid rgba(239,68,68,0.2)',
      }}
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center justify-center gap-2 mb-3">
        <AlertTriangle size={18} className="text-red-400" />
        <p className="text-sm font-semibold uppercase tracking-wider text-red-400">
          Cost of Inaction
        </p>
      </div>
      <p className="text-sm mb-2" style={{ color: 'var(--cc-text-secondary)' }}>
        Every month of delay costs {companyName} approximately
      </p>
      <p
        className="text-3xl sm:text-4xl font-mono font-bold text-red-400"
        style={{
          textShadow: '0 0 20px rgba(239,68,68,0.3)',
          animation: 'costPulse 2s ease-in-out infinite',
        }}
      >
        {fmtDollarsWithCommas(monthlyWaste)}
      </p>
      <p className="text-sm mt-1" style={{ color: 'var(--cc-text-tertiary)' }}>
        in continued waste per month
      </p>
      <div className="mt-3 pt-3" style={{ borderTop: '1px solid rgba(239,68,68,0.15)' }}>
        <p className="text-xs" style={{ color: 'var(--cc-text-tertiary)' }}>
          Since you opened this page:{' '}
          <span className="font-mono font-semibold text-red-400">
            +{fmtDollarsWithCommas(liveWaste)}
          </span>{' '}
          wasted ({`~$${perSecond >= 1 ? Math.round(perSecond) : perSecond.toFixed(2)}/sec`})
        </p>
      </div>
      <style>{`
        @keyframes costPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.85; }
        }
      `}</style>
    </motion.div>
  );
}

// ─── Scenario Selector ──────────────────────────────────────────────────────

function ScenarioSelector({
  active,
  onChange,
}: {
  active: ScenarioKey;
  onChange: (s: ScenarioKey) => void;
}) {
  const keys: ScenarioKey[] = ['conservative', 'base', 'aggressive'];
  return (
    <motion.div
      className="rounded-2xl p-5"
      style={{ background: 'var(--cc-bg-card)', border: '1px solid var(--cc-border)' }}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.05 }}
    >
      <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--cc-text-tertiary)' }}>
        ROI Scenario
      </p>
      <div className="flex gap-2">
        {keys.map((key) => {
          const s = SCENARIOS[key];
          const isActive = key === active;
          return (
            <button
              key={key}
              onClick={() => onChange(key)}
              className="flex-1 rounded-xl px-3 py-3 text-left transition-all duration-200 cursor-pointer"
              style={{
                background: isActive
                  ? key === 'base'
                    ? 'linear-gradient(135deg, rgba(16,185,129,0.15) 0%, rgba(16,185,129,0.05) 100%)'
                    : key === 'conservative'
                    ? 'linear-gradient(135deg, rgba(66,133,244,0.15) 0%, rgba(66,133,244,0.05) 100%)'
                    : 'linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(139,92,246,0.05) 100%)'
                  : 'var(--cc-bg-input)',
                border: isActive
                  ? key === 'base'
                    ? '1px solid rgba(16,185,129,0.4)'
                    : key === 'conservative'
                    ? '1px solid rgba(66,133,244,0.4)'
                    : '1px solid rgba(139,92,246,0.4)'
                  : '1px solid var(--cc-border)',
                transform: isActive ? 'scale(1.02)' : 'scale(1)',
              }}
            >
              <p className="text-sm font-semibold" style={{ color: 'var(--cc-text)' }}>
                {s.label}
                {key === 'base' && (
                  <span className="ml-1.5 text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-medium">
                    DEFAULT
                  </span>
                )}
              </p>
              <p className="text-xs mt-0.5" style={{ color: 'var(--cc-text-tertiary)' }}>
                {s.adoption} / {s.rollout}
              </p>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}

// ─── Animated Metric Value ──────────────────────────────────────────────────

function AnimatedMetricValue({ value, color }: { value: number; color: string }) {
  const animVal = useAnimatedValue(value);
  const isNeg = value < 0;
  return (
    <p className="text-2xl font-bold font-mono" style={{ color }}>
      {isNeg ? '-' : ''}
      {fmtCompact(Math.abs(animVal))}
    </p>
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
          <Bar dataKey="base" stackId="stack" fill="transparent" />
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

// ─── Scenario Comparison Table ──────────────────────────────────────────────

function ScenarioComparisonTable({
  baseRoi,
  activeScenario,
}: {
  baseRoi: ReturnType<typeof getRoiSummary>;
  activeScenario: ScenarioKey;
}) {
  const keys: ScenarioKey[] = ['conservative', 'base', 'aggressive'];

  const rows = keys.map((key) => {
    const roi = getScenarioROI(baseRoi, key);
    const gross = roi.techStackSavings + roi.workflowAutomation + roi.licenseRecovery;
    const paybackMonths = (roi.implementationCosts / (gross / 12)).toFixed(1);
    const year1Pct = Math.round((roi.netYear1 / roi.implementationCosts) * 100);
    const npv3yr = Math.round(roi.netYear1 + roi.year2Projected * 2 * 0.9); // simplified 3-yr NPV with 10% discount
    return {
      key,
      label: SCENARIOS[key].label,
      year1ROI: `${year1Pct}%`,
      payback: `${paybackMonths} mo`,
      npv3yr: fmtCompact(npv3yr),
      implCost: fmtCompact(roi.implementationCosts),
      netYear1: fmtCompact(roi.netYear1),
    };
  });

  return (
    <motion.div
      className="rounded-2xl shadow-sm p-6"
      style={{ background: 'var(--cc-bg-card)', border: '1px solid var(--cc-border)' }}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35, duration: 0.4 }}
    >
      <h2 className="text-lg font-semibold mb-5">Scenario Comparison</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr style={{ borderBottom: '1px solid var(--cc-border)' }}>
              <th className="text-left py-2 px-3 text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--cc-text-tertiary)' }}>Metric</th>
              {rows.map((r) => (
                <th
                  key={r.key}
                  className="text-right py-2 px-3 text-xs font-semibold uppercase tracking-wider"
                  style={{
                    color: r.key === activeScenario ? '#10B981' : 'var(--cc-text-tertiary)',
                    background: r.key === activeScenario ? 'rgba(16,185,129,0.06)' : 'transparent',
                    borderRadius: '8px 8px 0 0',
                  }}
                >
                  {r.label}
                  {r.key === activeScenario && ' *'}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              { label: 'Year 1 Net Savings', field: 'netYear1' as const },
              { label: 'Year 1 ROI', field: 'year1ROI' as const },
              { label: 'Payback Period', field: 'payback' as const },
              { label: '3-Year NPV', field: 'npv3yr' as const },
              { label: 'Implementation Cost', field: 'implCost' as const },
            ].map((metric, i) => (
              <tr key={metric.field} style={{ borderBottom: i < 4 ? '1px solid var(--cc-border)' : 'none' }}>
                <td className="py-2.5 px-3 font-medium" style={{ color: 'var(--cc-text-secondary)' }}>
                  {metric.label}
                </td>
                {rows.map((r) => (
                  <td
                    key={r.key}
                    className="py-2.5 px-3 text-right font-mono font-semibold"
                    style={{
                      color: r.key === activeScenario ? 'var(--cc-text)' : 'var(--cc-text-secondary)',
                      background: r.key === activeScenario ? 'rgba(16,185,129,0.06)' : 'transparent',
                    }}
                  >
                    {r[metric.field]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

// ─── Page Component ─────────────────────────────────────────────────────────

export default function ROISummary() {
  const { company } = useCompany();
  const baseRoi = getRoiSummary(company.id);
  const [scenario, setScenario] = useState<ScenarioKey>('base');

  const roiSummary = getScenarioROI(baseRoi, scenario);
  const metrics = buildMetrics(roiSummary);
  const waterfallChartData = buildWaterfallData(roiSummary);
  const timelineData = buildTimeline(roiSummary);
  const breakEvenMonth = findBreakEvenMonth(timelineData);

  // Monthly waste = gross savings / 12
  const grossSavings = baseRoi.techStackSavings + baseRoi.workflowAutomation + baseRoi.licenseRecovery;
  const monthlyWaste = Math.round(grossSavings / 12);

  // Animated hero number
  const animatedNetYear1 = useAnimatedValue(roiSummary.netYear1);
  const animatedGross = useAnimatedValue(
    roiSummary.techStackSavings + roiSummary.workflowAutomation + roiSummary.licenseRecovery
  );

  const handleDownloadPDF = useCallback(() => {
    void downloadBoardReportPDF(company.id, scenario);
  }, [company.id, scenario]);

  const handleOpenReport = useCallback(() => {
    openBoardReport(company.id, scenario);
  }, [company.id, scenario]);

  return (
    <div className="space-y-12">
      {/* Preliminary Estimate Banner */}
      <span className="text-xs px-3 py-1 rounded inline-block" style={{ color: 'var(--cc-text-secondary)', background: 'var(--cc-bg-card)' }}>
        Preliminary Estimate — Based on Industry Benchmarks
      </span>

      {/* ── Cost of Inaction ──────────────────────────────────────────── */}
      <CostOfInactionCounter monthlyWaste={monthlyWaste} companyName={company.name} />

      {/* ── Scenario Selector ─────────────────────────────────────────── */}
      <ScenarioSelector active={scenario} onChange={setScenario} />

      {/* ── Generate Board Report Buttons ──────────────────────────────── */}
      <div className="flex flex-col sm:flex-row justify-end gap-3">
        <button
          onClick={handleDownloadPDF}
          className="group relative inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/30 cursor-pointer overflow-hidden"
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.2) 50%, transparent 75%)', animation: 'shimmer 2s ease-in-out infinite' }} />
          <style>{`@keyframes shimmer { 0%, 100% { transform: translateX(-100%); } 50% { transform: translateX(100%); } }`}</style>
          <FileDown size={16} className="relative" />
          <span className="relative">Download PDF ({SCENARIOS[scenario].label})</span>
        </button>
        <button
          onClick={handleOpenReport}
          className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold shadow-sm transition-colors duration-200 cursor-pointer" style={{ background: 'var(--cc-bg-card)', color: 'var(--cc-text)', border: '1px solid var(--cc-border)' }}
        >
          <FileDown size={16} />
          Preview Report
        </button>
      </div>

      {/* ── Section 1: Hero ───────────────────────────────────────────── */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <AnimatePresence mode="wait">
          <motion.p
            key={scenario}
            className="text-xs font-medium px-3 py-1 rounded-full inline-block mb-3"
            style={{
              background: scenario === 'base' ? 'rgba(16,185,129,0.15)' : scenario === 'conservative' ? 'rgba(66,133,244,0.15)' : 'rgba(139,92,246,0.15)',
              color: scenario === 'base' ? '#10B981' : scenario === 'conservative' ? '#4285F4' : '#8B5CF6',
            }}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
          >
            {SCENARIOS[scenario].label} Scenario — {SCENARIOS[scenario].adoption}, {SCENARIOS[scenario].rollout}
          </motion.p>
        </AnimatePresence>
        <p className="text-sm font-medium uppercase tracking-widest mb-2" style={{ color: 'var(--cc-text-tertiary)' }}>
          Projected Net Impact
        </p>
        <h1
          className="font-mono font-bold leading-none bg-clip-text text-transparent text-5xl sm:text-6xl md:text-[80px]"
          style={{ backgroundImage: 'linear-gradient(135deg, #10B981 0%, #059669 40%, #047857 100%)' }}
        >
          {fmtCompact(Math.round(animatedNetYear1))}
        </h1>
        <p className="mt-3 text-lg" style={{ color: 'var(--cc-text-secondary)' }}>after implementation costs</p>
        <p className="mt-1 text-sm" style={{ color: 'var(--cc-text-tertiary)' }}>
          Gross savings: {fmtCompact(Math.round(animatedGross))} &mdash; Implementation: {fmtCompact(roiSummary.implementationCosts)}
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
              <AnimatedMetricValue value={m.value} color={m.color} />
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
          <span className="text-xs font-normal ml-2" style={{ color: 'var(--cc-text-tertiary)' }}>
            ({SCENARIOS[scenario].rollout})
          </span>
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

      {/* ── Section 5: Scenario Comparison Table ──────────────────────── */}
      <ScenarioComparisonTable baseRoi={baseRoi} activeScenario={scenario} />

      {/* ── Section 6: Payback Analysis Panel ─────────────────────────── */}
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
              <p className="text-3xl font-mono font-bold text-[#4285F4]">{((roiSummary.implementationCosts / ((roiSummary.techStackSavings + roiSummary.workflowAutomation + roiSummary.licenseRecovery) / 12))).toFixed(1)}</p>
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
            With a total implementation investment of {fmtCompact(roiSummary.implementationCosts)}, the program reaches break-even around month {Math.ceil(roiSummary.implementationCosts / ((roiSummary.techStackSavings + roiSummary.workflowAutomation + roiSummary.licenseRecovery) / 12))}. Year 1 net savings of {fmtCompact(roiSummary.netYear1)} represent a {Math.round((roiSummary.netYear1 / roiSummary.implementationCosts) * 100)}% ROI. As automation scales and AI-native tools mature in Year 2, implementation costs drop to near-zero maintenance while savings compound to a projected {fmtCompact(roiSummary.year2Projected)} annually.
          </p>
        </div>
      </motion.div>

      {/* ── Section 7: Board Report Preview ─────────────────────────── */}
      <motion.div
        className="rounded-2xl shadow-sm p-8" style={{ background: 'var(--cc-bg-card)', border: '1px solid var(--cc-border)' }}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.3 }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-lg font-semibold">Board Report Preview</h2>
            <p className="text-sm mt-1">Executive-ready report with key findings and recommendations</p>
          </div>
          <button
            onClick={handleDownloadPDF}
            className="group relative inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/30 cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.2) 50%, transparent 75%)', animation: 'shimmer 2s ease-in-out infinite' }} />
            <FileDown size={16} className="relative" />
            <span className="relative">Download PDF</span>
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
