import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import {
  AreaChart,
  Area,
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
} from 'recharts';
import {
  kpis,
  roadmapPhases,
  topOpportunities,
  currentStack,
  licenses,
  workflowSummary,
  roiSummary,
  type OpportunityStatus,
} from '../data/constants';
import { config } from '../data/config';
import { useCompany } from '../data/CompanyContext';

// ─── Helpers ────────────────────────────────────────────────────────────────

const fmtCompact = (n: number) => {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${Math.round(n / 1_000)}k`;
  return `$${n}`;
};

const statusConfig: Record<OpportunityStatus, { label: string; bg: string; text: string }> = {
  automated: { label: 'Automated', bg: 'bg-emerald-50', text: 'text-emerald-700' },
  'in-progress': { label: 'In Progress', bg: 'bg-amber-50', text: 'text-amber-700' },
  identified: { label: 'Identified', bg: 'bg-gray-100', text: 'text-gray-500' },
};

// ─── Timeline Interpolation ────────────────────────────────────────────────

type TimelineData = {
  savings: number;
  scoreBefore: number;
  scoreAfter: number;
  workflows: number;
  automationReady: number;
  waste: number;
};

const timelineStops: Record<number, TimelineData> = {
  0: { savings: 0, scoreBefore: 34, scoreAfter: 34, workflows: 0, automationReady: 0, waste: 2_100_000 },
  6: { savings: 1_800_000, scoreBefore: 34, scoreAfter: 62, workflows: 27, automationReady: 7, waste: 1_400_000 },
  12: { savings: 4_200_000, scoreBefore: 34, scoreAfter: 87, workflows: 47, automationReady: 12, waste: 800_000 },
};

function interpolateTimeline(month: number): TimelineData {
  if (month <= 0) return timelineStops[0];
  if (month >= 12) return timelineStops[12];

  const lowerStop = month <= 6 ? 0 : 6;
  const upperStop = month <= 6 ? 6 : 12;
  const t = (month - lowerStop) / (upperStop - lowerStop);

  const lower = timelineStops[lowerStop];
  const upper = timelineStops[upperStop];

  return {
    savings: Math.round(lower.savings + (upper.savings - lower.savings) * t),
    scoreBefore: 34,
    scoreAfter: Math.round(lower.scoreAfter + (upper.scoreAfter - lower.scoreAfter) * t),
    workflows: Math.round(lower.workflows + (upper.workflows - lower.workflows) * t),
    automationReady: Math.round(lower.automationReady + (upper.automationReady - lower.automationReady) * t),
    waste: Math.round(lower.waste + (upper.waste - lower.waste) * t),
  };
}

// ─── Mini Sparkline Component ───────────────────────────────────────────────

function Sparkline({
  data,
  color,
  id,
}: {
  data: number[];
  color: string;
  id: string;
}) {
  const chartData = data.map((v, i) => ({ v, i }));
  return (
    <div className="h-[32px] w-[100px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartData} margin={{ top: 2, right: 0, bottom: 0, left: 0 }}>
          <defs>
            <linearGradient id={`grad-${id}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity={0.24} />
              <stop offset="100%" stopColor={color} stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="v"
            stroke={color}
            strokeWidth={1.5}
            fill={`url(#grad-${id})`}
            dot={false}
            isAnimationActive={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

// ─── AI Readiness Gauge ─────────────────────────────────────────────────────

function ReadinessGauge({ score }: { score: number }) {
  const data = [{ value: score, fill: '#4285F4' }];
  return (
    <div className="relative h-[100px] w-[100px]">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="70%"
          outerRadius="100%"
          startAngle={225}
          endAngle={-45}
          barSize={8}
          data={data}
        >
          <RadialBar
            dataKey="value"
            cornerRadius={4}
            background={{ fill: '#F3F4F6' }}
            isAnimationActive={false}
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-mono text-[22px] font-bold text-[#111827]">{score}</span>
        <span className="text-[10px] text-gray-400">/100</span>
      </div>
    </div>
  );
}

// ─── KPI Card ───────────────────────────────────────────────────────────────

function KpiCard({
  label,
  children,
  sparklineData,
  sparklineColor,
  sparklineId,
  delay = 0,
  onClick,
}: {
  label: string;
  children: React.ReactNode;
  sparklineData: number[];
  sparklineColor: string;
  sparklineId: string;
  delay?: number;
  onClick?: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -1, boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}
      onClick={onClick}
      className={`flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] ${onClick ? 'cursor-pointer' : ''}`}
    >
      <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">
        {label}
      </p>
      <div className="mt-3">{children}</div>
      <div className="mt-4">
        <Sparkline data={sparklineData} color={sparklineColor} id={sparklineId} />
      </div>
    </motion.div>
  );
}

// ─── Drill-Down Panel Content ──────────────────────────────────────────────

type DrillDownType = 'savings' | 'score' | 'workflows' | 'licenses' | null;

function SavingsDrillDown() {
  const items = [
    { label: 'Tech Stack Optimization', value: roiSummary.techStackSavings, color: 'text-emerald-600' },
    { label: 'Workflow Automation', value: roiSummary.workflowAutomation, color: 'text-emerald-600' },
    { label: 'License Recovery', value: roiSummary.licenseRecovery, color: 'text-emerald-600' },
    { label: 'Implementation Costs', value: -roiSummary.implementationCosts, color: 'text-red-500' },
  ];
  const net = roiSummary.netYear1;

  return (
    <div>
      <h3 className="text-[15px] font-semibold text-gray-900">Savings Breakdown</h3>
      <p className="mt-1 text-[12px] text-gray-500">Year 1 net savings analysis</p>
      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <div key={item.label} className="flex items-center justify-between border-b border-gray-50 pb-3">
            <span className="text-[13px] text-gray-700">{item.label}</span>
            <span className={`font-mono text-[14px] font-semibold ${item.color}`}>
              {item.value < 0 ? '-' : ''}{fmtCompact(Math.abs(item.value))}
            </span>
          </div>
        ))}
        <div className="flex items-center justify-between rounded-xl bg-emerald-50 px-4 py-3">
          <span className="text-[13px] font-semibold text-emerald-800">Net Year 1 Savings</span>
          <span className="font-mono text-[18px] font-bold text-emerald-600">{fmtCompact(net)}</span>
        </div>
      </div>
      <div className="mt-6 rounded-xl bg-blue-50 px-4 py-3">
        <p className="text-[12px] font-medium text-blue-800">Year 2 Projected: <span className="font-mono font-bold">{fmtCompact(roiSummary.year2Projected)}</span></p>
      </div>
    </div>
  );
}

function ScoreDrillDown() {
  const tools = currentStack.slice(0, 6);
  const targetScores: Record<string, number> = {
    'SAP ERP': 7,
    'Salesforce CRM': 8,
    'No Data Lake': 9,
    'Tableau': 8,
    'Manual Dev Workflows': 9,
    'Concur': 8,
  };

  return (
    <div>
      <h3 className="text-[15px] font-semibold text-gray-900">Tech Stack Score Breakdown</h3>
      <p className="mt-1 text-[12px] text-gray-500">Current vs target scores by tool (out of 10)</p>
      <div className="mt-6 space-y-5">
        {tools.map((tool) => {
          const target = targetScores[tool.name] || 8;
          return (
            <div key={tool.name}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[12px] font-medium text-gray-700">{tool.name}</span>
                <span className="text-[11px] text-gray-500">
                  <span className="font-mono font-semibold text-gray-400">{tool.score}</span>
                  <ArrowRight className="inline h-3 w-3 mx-1 text-gray-300" />
                  <span className="font-mono font-semibold text-[#4285F4]">{target}</span>
                </span>
              </div>
              <div className="relative h-[6px] w-full rounded-full bg-gray-100">
                <div
                  className="absolute top-0 left-0 h-full rounded-full bg-gray-300"
                  style={{ width: `${(tool.score / 10) * 100}%` }}
                />
                <div
                  className="absolute top-0 left-0 h-full rounded-full bg-[#4285F4] opacity-40"
                  style={{ width: `${(target / 10) * 100}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function WorkflowsDrillDown() {
  const topWorkflows = [
    { name: 'Claims Intake Processing', savings: '$420K/yr', level: 'Full Automation' },
    { name: 'Call Center Tier-1 Resolution', savings: '$380K/yr', level: 'Human-in-Loop' },
    { name: 'AP/AR Invoice Matching', savings: '$310K/yr', level: 'Full Automation' },
  ];

  return (
    <div>
      <h3 className="text-[15px] font-semibold text-gray-900">Workflow Analysis</h3>
      <p className="mt-1 text-[12px] text-gray-500">{workflowSummary.total} workflows analyzed across all OpCos</p>
      <div className="mt-6 space-y-3">
        <div className="flex items-center justify-between rounded-xl bg-emerald-50 px-4 py-3">
          <span className="text-[13px] text-emerald-800">Fully Automatable</span>
          <span className="font-mono text-[16px] font-bold text-emerald-600">{workflowSummary.fullyAutomatable}</span>
        </div>
        <div className="flex items-center justify-between rounded-xl bg-amber-50 px-4 py-3">
          <span className="text-[13px] text-amber-800">Human-in-Loop</span>
          <span className="font-mono text-[16px] font-bold text-amber-600">{workflowSummary.humanInLoop}</span>
        </div>
        <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
          <span className="text-[13px] text-gray-700">Human Required</span>
          <span className="font-mono text-[16px] font-bold text-gray-500">{workflowSummary.humanRequired}</span>
        </div>
      </div>
      <div className="mt-6">
        <h4 className="text-[12px] font-semibold uppercase tracking-wider text-gray-500 mb-3">Top 3 Opportunities</h4>
        <div className="space-y-3">
          {topWorkflows.map((wf) => (
            <div key={wf.name} className="rounded-xl border border-gray-100 p-3">
              <p className="text-[13px] font-medium text-gray-900">{wf.name}</p>
              <div className="mt-1 flex items-center gap-3">
                <span className="text-[12px] font-mono font-semibold text-emerald-600">{wf.savings}</span>
                <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-medium text-blue-700">{wf.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LicensesDrillDown() {
  const topWaste = licenses
    .filter((l) => l.annualWaste > 0)
    .sort((a, b) => b.annualWaste - a.annualWaste)
    .slice(0, 3);

  return (
    <div>
      <h3 className="text-[15px] font-semibold text-gray-900">License Waste Breakdown</h3>
      <p className="mt-1 text-[12px] text-gray-500">Top sources of unused license spend</p>
      <div className="mt-6 space-y-4">
        {topWaste.map((lic) => {
          const utilization = Math.round((lic.active90d / lic.totalLicenses) * 100);
          return (
            <div key={lic.vendor} className="rounded-xl border border-gray-100 p-4">
              <div className="flex items-center justify-between">
                <span className="text-[13px] font-medium text-gray-900">{lic.vendor}</span>
                <span className="font-mono text-[16px] font-bold text-red-500">{fmtCompact(lic.annualWaste)}</span>
              </div>
              <div className="mt-2 flex items-center gap-3">
                <div className="h-[4px] flex-1 rounded-full bg-gray-100">
                  <div
                    className="h-full rounded-full bg-red-400"
                    style={{ width: `${100 - utilization}%` }}
                  />
                </div>
                <span className="text-[11px] text-gray-500">{lic.inactive} / {lic.totalLicenses} unused</span>
              </div>
              <p className="mt-2 text-[11px] text-gray-500">{lic.action}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function DrillDownPanel({ type, onClose }: { type: DrillDownType; onClose: () => void }) {
  const content: Record<string, React.ReactNode> = {
    savings: <SavingsDrillDown />,
    score: <ScoreDrillDown />,
    workflows: <WorkflowsDrillDown />,
    licenses: <LicensesDrillDown />,
  };

  return (
    <AnimatePresence>
      {type && (
        <>
          {/* Backdrop */}
          <motion.div
            key="drilldown-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/20"
            onClick={onClose}
          />
          {/* Panel */}
          <motion.div
            key="drilldown-panel"
            initial={{ x: 420 }}
            animate={{ x: 0 }}
            exit={{ x: 420 }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 z-50 h-full w-[420px] overflow-y-auto rounded-l-2xl bg-white p-8 shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-700"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="mt-4">{type && content[type]}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ─── Dashboard ──────────────────────────────────────────────────────────────

export default function Dashboard() {
  const { company } = useCompany();
  const sortedOpps = [...topOpportunities].sort((a, b) => a.priority - b.priority);

  // Flash highlight when company changes
  const [companyFlash, setCompanyFlash] = useState(false);
  const [prevCompanyId, setPrevCompanyId] = useState(company.id);

  useEffect(() => {
    if (company.id !== prevCompanyId) {
      setPrevCompanyId(company.id);
      setCompanyFlash(true);
      const timer = setTimeout(() => setCompanyFlash(false), 1200);
      return () => clearTimeout(timer);
    }
  }, [company.id, prevCompanyId]);

  // Feature 1: Cost of Inaction toggle
  const [showCostOfInaction, setShowCostOfInaction] = useState(false);

  // Feature 2: Timeline scrubber
  const [timelineMonth, setTimelineMonth] = useState(12);
  const tlData = interpolateTimeline(timelineMonth);

  // Feature 3: Drill-down panel
  const [activeDrillDown, setActiveDrillDown] = useState<DrillDownType>(null);

  return (
    <div className="space-y-8">
      {/* ── Feature 1: Cost of Inaction Toggle ──────────────────── */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setShowCostOfInaction(!showCostOfInaction)}
          className={`relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors duration-200 ${
            showCostOfInaction ? 'bg-red-500' : 'bg-gray-200'
          }`}
        >
          <span
            className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow transition-transform duration-200 ${
              showCostOfInaction ? 'translate-x-[18px]' : 'translate-x-[3px]'
            }`}
          />
        </button>
        <span className="text-[12px] font-medium text-gray-600">Show Cost of Inaction</span>
      </div>

      <AnimatePresence>
        {showCostOfInaction && (
          <motion.section
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="rounded-2xl border border-red-100 bg-red-50 p-6">
              <h2 className="text-[14px] font-semibold text-red-800">
                If No Action Is Taken — 3-Year Projection
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {[
                  { label: 'Wasted License Spend', value: '$6.3M', sub: '$2.1M x 3 years' },
                  { label: 'Lost Productivity', value: '$9.3M', sub: '$3.1M x 3 years' },
                  { label: 'Missed AI Advantage', value: '$12.6M', sub: 'Compounding tech debt' },
                  { label: 'Total Cost of Inaction', value: '$28.2M', sub: 'Sum + opportunity cost' },
                ].map((metric, i) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="rounded-xl border border-red-100 bg-white/60 p-4"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-red-500">
                      {metric.label}
                    </p>
                    <p className="mt-2 font-mono text-[26px] font-bold leading-none text-red-600">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-[11px] text-red-400">{metric.sub}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* ── 1. Company Context Bar ────────────────────────────────── */}
      <motion.section
        key={company.id}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={`flex flex-col gap-6 rounded-2xl border bg-white p-4 lg:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] lg:flex-row lg:items-center lg:justify-between transition-all duration-700 ${
          companyFlash
            ? 'border-blue-400 ring-2 ring-blue-200 shadow-[0_0_20px_rgba(66,133,244,0.15)]'
            : 'border-gray-100'
        }`}
      >
        {/* Left */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          <h1 className="text-[15px] font-semibold text-gray-900">
            {company.name}
          </h1>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-gray-50 px-3 py-1 text-[12px] font-medium text-gray-600">
              {company.revenue} Revenue
            </span>
            <span className="text-gray-300">&middot;</span>
            <span className="rounded-full bg-gray-50 px-3 py-1 text-[12px] font-medium text-gray-600">
              {company.employees.toLocaleString()} Employees
            </span>
            <span className="text-gray-300">&middot;</span>
            <span className="rounded-full bg-gray-50 px-3 py-1 text-[12px] font-medium text-gray-600">
              {company.opCos} Operating Compan{company.opCos === 1 ? 'y' : 'ies'}
            </span>
          </div>
        </div>

        {/* Right — AI Readiness */}
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">
              AI Readiness Score
            </p>
            <p className="mt-1 text-[12px] text-red-500 font-medium">
              Critical — requires foundational investment
            </p>
          </div>
          <ReadinessGauge score={config.aiReadinessScore} />
        </div>
      </motion.section>

      {/* ── 2. KPI Cards ──────────────────────────────────────────── */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard
          label="Identified Savings"
          sparklineData={kpis.savingsSparkline}
          sparklineColor="#10B981"
          sparklineId="savings"
          delay={0.05}
          onClick={() => setActiveDrillDown('savings')}
        >
          <p className="font-mono text-[32px] font-bold leading-none text-emerald-600">
            {fmtCompact(tlData.savings)}
            <span className="text-[14px] font-semibold text-gray-400">/yr</span>
          </p>
        </KpiCard>

        <KpiCard
          label="Tech Stack Score"
          sparklineData={kpis.scoreSparkline}
          sparklineColor="#4285F4"
          sparklineId="score"
          delay={0.1}
          onClick={() => setActiveDrillDown('score')}
        >
          <div className="flex items-baseline gap-1.5">
            <span className="font-mono text-[32px] font-bold leading-none text-gray-400">
              {tlData.scoreBefore}
            </span>
            <ArrowRight className="h-4 w-4 text-gray-300" />
            <span className="font-mono text-[32px] font-bold leading-none text-[#4285F4]">
              {tlData.scoreAfter}
            </span>
          </div>
        </KpiCard>

        <KpiCard
          label="Workflows Analyzed"
          sparklineData={kpis.workflowSparkline}
          sparklineColor="#F59E0B"
          sparklineId="workflows"
          delay={0.15}
          onClick={() => setActiveDrillDown('workflows')}
        >
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-[32px] font-bold leading-none text-[#111827]">
              {tlData.workflows}
            </span>
            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-700">
              {tlData.automationReady} ready
            </span>
          </div>
        </KpiCard>

        <KpiCard
          label="License Waste"
          sparklineData={kpis.licenseSparkline}
          sparklineColor="#EF4444"
          sparklineId="license"
          delay={0.2}
          onClick={() => setActiveDrillDown('licenses')}
        >
          <p className="font-mono text-[32px] font-bold leading-none text-red-500">
            {fmtCompact(tlData.waste)}
            <span className="text-[14px] font-semibold text-gray-400">/yr</span>
          </p>
        </KpiCard>
      </div>

      {/* ── Feature 2: Timeline Scrubber ────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
      >
        <h2 className="text-[15px] font-semibold text-gray-900">Transformation Timeline</h2>
        <p className="mt-1 text-[12px] text-gray-500">Drag to see projected KPI values over time</p>
        <div className="mt-6">
          <div className="relative">
            <input
              type="range"
              min={0}
              max={12}
              step={1}
              value={timelineMonth}
              onChange={(e) => setTimelineMonth(Number(e.target.value))}
              className="timeline-scrubber w-full"
            />
            <style>{`
              .timeline-scrubber {
                -webkit-appearance: none;
                appearance: none;
                height: 6px;
                border-radius: 999px;
                outline: none;
                cursor: pointer;
                background: linear-gradient(
                  to right,
                  #4285F4 0%,
                  #4285F4 ${(timelineMonth / 12) * 100}%,
                  #E5E7EB ${(timelineMonth / 12) * 100}%,
                  #E5E7EB 100%
                );
              }
              .timeline-scrubber::-webkit-slider-thumb {
                -webkit-appearance: none;
                appearance: none;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background: white;
                border: 2px solid #4285F4;
                box-shadow: 0 2px 8px rgba(66, 133, 244, 0.3);
                cursor: pointer;
                transition: box-shadow 0.15s ease;
              }
              .timeline-scrubber::-webkit-slider-thumb:hover {
                box-shadow: 0 2px 12px rgba(66, 133, 244, 0.5);
              }
              .timeline-scrubber::-moz-range-thumb {
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background: white;
                border: 2px solid #4285F4;
                box-shadow: 0 2px 8px rgba(66, 133, 244, 0.3);
                cursor: pointer;
              }
              .timeline-scrubber::-moz-range-track {
                height: 6px;
                border-radius: 999px;
                background: #E5E7EB;
              }
              .timeline-scrubber::-moz-range-progress {
                height: 6px;
                border-radius: 999px;
                background: #4285F4;
              }
            `}</style>
          </div>
          <div className="mt-3 flex justify-between">
            <button
              onClick={() => setTimelineMonth(0)}
              className={`text-[12px] font-medium transition-colors ${timelineMonth === 0 ? 'text-[#4285F4] font-semibold' : 'text-gray-400 hover:text-gray-600'}`}
            >
              Today
            </button>
            <button
              onClick={() => setTimelineMonth(6)}
              className={`text-[12px] font-medium transition-colors ${timelineMonth === 6 ? 'text-[#4285F4] font-semibold' : 'text-gray-400 hover:text-gray-600'}`}
            >
              Month 6
            </button>
            <button
              onClick={() => setTimelineMonth(12)}
              className={`text-[12px] font-medium transition-colors ${timelineMonth === 12 ? 'text-[#4285F4] font-semibold' : 'text-gray-400 hover:text-gray-600'}`}
            >
              Month 12
            </button>
          </div>
        </div>
      </motion.section>

      {/* ── 3. Transformation Roadmap ─────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="rounded-2xl border border-gray-100 bg-white px-4 py-6 lg:px-8 lg:py-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
      >
        <h2 className="text-[15px] font-semibold text-gray-900">
          Transformation Roadmap
        </h2>

        {/* Timeline */}
        <div className="mt-10 hidden xl:block">
          <div className="relative mx-auto max-w-4xl">
            {/* Horizontal track */}
            <div className="absolute left-0 right-0 top-[6px] h-[2px] bg-gray-200" />

            <div className="relative flex justify-between">
              {roadmapPhases.map((phase, i) => {
                const isActive = phase.status === 'active';
                return (
                  <motion.div
                    key={phase.quarter}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.06 }}
                    className="flex w-[22%] flex-col items-center text-center"
                  >
                    {/* Dot on track */}
                    <div
                      className={`relative z-10 h-[14px] w-[14px] rounded-full border-[2.5px] ${
                        isActive
                          ? 'border-[#4285F4] bg-[#4285F4]'
                          : 'border-gray-300 bg-white'
                      }`}
                    />

                    {/* Quarter badge */}
                    <span
                      className={`mt-4 inline-block rounded-full px-3 py-0.5 text-[11px] font-bold ${
                        isActive
                          ? 'bg-[#4285F4] text-white'
                          : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      {phase.quarter} 2026
                    </span>

                    {/* Title */}
                    <h3
                      className={`mt-2.5 text-[13px] font-semibold leading-snug ${
                        isActive ? 'text-gray-900' : 'text-gray-500'
                      }`}
                    >
                      {phase.title}
                    </h3>

                    {/* Bullet items */}
                    <ul className="mt-2.5 space-y-1">
                      {phase.items.map((item) => (
                        <li
                          key={item}
                          className={`text-[12px] leading-relaxed ${
                            isActive ? 'text-gray-700' : 'text-gray-400'
                          }`}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile fallback: stacked */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:hidden">
          {roadmapPhases.map((phase) => {
            const isActive = phase.status === 'active';
            return (
              <div
                key={phase.quarter}
                className={`rounded-xl border p-5 ${
                  isActive ? 'border-[#4285F4]/30 bg-blue-50/40' : 'border-gray-100'
                }`}
              >
                <span
                  className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-bold ${
                    isActive ? 'bg-[#4285F4] text-white' : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  {phase.quarter} 2026
                </span>
                <h3 className={`mt-2 text-[13px] font-semibold ${isActive ? 'text-gray-900' : 'text-gray-500'}`}>
                  {phase.title}
                </h3>
                <ul className="mt-2 space-y-1">
                  {phase.items.map((item) => (
                    <li key={item} className={`text-[12px] ${isActive ? 'text-gray-700' : 'text-gray-400'}`}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Progress indicator */}
        <div className="mt-8 flex items-center gap-3">
          <div className="h-[3px] flex-1 rounded-full bg-gray-100">
            <div className="h-full w-1/4 rounded-full bg-[#4285F4]" />
          </div>
          <span className="shrink-0 text-[12px] font-medium text-gray-500">
            Phase 1 of 4 — Tech Stack Audit + Quick Wins
          </span>
        </div>
      </motion.section>

      {/* ── 4. Top Opportunities ──────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.25 }}
      >
        <h2 className="mb-5 text-[15px] font-semibold text-gray-900">
          Top Opportunities
        </h2>

        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] text-left text-[13px]">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50/60">
                  <th className="px-5 py-3 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                    #
                  </th>
                  <th className="px-5 py-3 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                    Opportunity
                  </th>
                  <th className="px-5 py-3 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                    Category
                  </th>
                  <th className="px-5 py-3 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                    Est. Savings
                  </th>
                  <th className="px-5 py-3 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                    Time to Value
                  </th>
                  <th className="px-5 py-3 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                    Confidence
                  </th>
                  <th className="px-5 py-3 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {sortedOpps.map((opp, i) => {
                  const s = statusConfig[opp.status];
                  return (
                    <motion.tr
                      key={opp.name}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 + i * 0.03 }}
                      className="border-b border-gray-50 transition-colors last:border-0 hover:bg-gray-50/50"
                    >
                      {/* Priority */}
                      <td className="px-5 py-3.5">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 text-[11px] font-semibold text-gray-500">
                          {opp.priority}
                        </span>
                      </td>
                      {/* Name */}
                      <td className="px-5 py-3.5 font-medium text-gray-900">
                        {opp.name}
                      </td>
                      {/* Category */}
                      <td className="px-5 py-3.5 text-gray-500">{opp.category}</td>
                      {/* Savings */}
                      <td className="px-5 py-3.5 font-mono font-semibold text-emerald-600">
                        {fmtCompact(opp.savings)}/yr
                      </td>
                      {/* Time to Value */}
                      <td className="px-5 py-3.5 text-gray-500">{opp.timeToValue}</td>
                      {/* Confidence bar */}
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-2">
                          <div className="h-[5px] w-16 overflow-hidden rounded-full bg-gray-100">
                            <div
                              className="h-full rounded-full bg-[#4285F4]"
                              style={{ width: `${opp.confidence}%` }}
                            />
                          </div>
                          <span className="text-[11px] font-medium text-gray-400">
                            {opp.confidence}%
                          </span>
                        </div>
                      </td>
                      {/* Status */}
                      <td className="px-5 py-3.5">
                        <span
                          className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${s.bg} ${s.text}`}
                        >
                          {s.label}
                        </span>
                      </td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </motion.section>

      {/* ── Feature 3: Drill-Down Panel ─────────────────────────── */}
      <DrillDownPanel type={activeDrillDown} onClose={() => setActiveDrillDown(null)} />
    </div>
  );
}
