import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Building2, ChevronRight } from 'lucide-react';
import {
  AreaChart,
  Area,
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
} from 'recharts';
import {
  getKpis,
  getRoadmapPhases,
  getTopOpportunities,
  getWorkflowSummary,
  getRoiSummary,
  getCurrentStack,
  getLicenses,
  getCompanyProfile,
  type OpportunityStatus,
} from '../data/constants';
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

const allTimelineStops: Record<string, Record<number, TimelineData>> = {
  meridian: {
    0: { savings: 0, scoreBefore: 38, scoreAfter: 38, workflows: 0, automationReady: 0, waste: 2_800_000 },
    6: { savings: 2_500_000, scoreBefore: 38, scoreAfter: 64, workflows: 35, automationReady: 9, waste: 1_800_000 },
    12: { savings: 5_800_000, scoreBefore: 38, scoreAfter: 86, workflows: 62, automationReady: 16, waste: 820_000 },
  },
  oakwood: {
    0: { savings: 0, scoreBefore: 41, scoreAfter: 41, workflows: 0, automationReady: 0, waste: 1_601_000 },
    6: { savings: 1_600_000, scoreBefore: 41, scoreAfter: 58, workflows: 22, automationReady: 5, waste: 1_100_000 },
    12: { savings: 3_800_000, scoreBefore: 41, scoreAfter: 78, workflows: 38, automationReady: 9, waste: 620_000 },
  },
  pinnacle: {
    0: { savings: 0, scoreBefore: 28, scoreAfter: 28, workflows: 0, automationReady: 0, waste: 634_000 },
    6: { savings: 800_000, scoreBefore: 28, scoreAfter: 48, workflows: 14, automationReady: 3, waste: 420_000 },
    12: { savings: 1_900_000, scoreBefore: 28, scoreAfter: 71, workflows: 24, automationReady: 6, waste: 280_000 },
  },
  atlas: {
    0: { savings: 0, scoreBefore: 38, scoreAfter: 38, workflows: 0, automationReady: 0, waste: 2_400_000 },
    6: { savings: 2_200_000, scoreBefore: 38, scoreAfter: 64, workflows: 30, automationReady: 8, waste: 1_600_000 },
    12: { savings: 5_100_000, scoreBefore: 38, scoreAfter: 84, workflows: 52, automationReady: 14, waste: 920_000 },
  },
  northbridge: {
    0: { savings: 0, scoreBefore: 52, scoreAfter: 52, workflows: 0, automationReady: 0, waste: 9_040_000 },
    6: { savings: 5_500_000, scoreBefore: 52, scoreAfter: 70, workflows: 82, automationReady: 24, waste: 4_520_000 },
    12: { savings: 11_000_000, scoreBefore: 52, scoreAfter: 88, workflows: 184, automationReady: 48, waste: 480_000 },
  },
  estonia: {
    0: { savings: 0, scoreBefore: 68, scoreAfter: 68, workflows: 0, automationReady: 0, waste: 3_000_000 },
    6: { savings: 4_000_000, scoreBefore: 68, scoreAfter: 80, workflows: 58, automationReady: 32, waste: 1_500_000 },
    12: { savings: 8_000_000, scoreBefore: 68, scoreAfter: 94, workflows: 126, automationReady: 62, waste: 320_000 },
  },
  hcc: {
    0: { savings: 0, scoreBefore: 32, scoreAfter: 32, workflows: 0, automationReady: 0, waste: 980_000 },
    6: { savings: 1_050_000, scoreBefore: 32, scoreAfter: 55, workflows: 11, automationReady: 3, waste: 520_000 },
    12: { savings: 2_100_000, scoreBefore: 32, scoreAfter: 78, workflows: 22, automationReady: 6, waste: 220_000 },
  },
  hrsi: {
    0: { savings: 0, scoreBefore: 36, scoreAfter: 36, workflows: 0, automationReady: 0, waste: 380_000 },
    6: { savings: 410_000, scoreBefore: 36, scoreAfter: 58, workflows: 4, automationReady: 1, waste: 200_000 },
    12: { savings: 820_000, scoreBefore: 36, scoreAfter: 80, workflows: 8, automationReady: 2, waste: 100_000 },
  },
  hsi: {
    0: { savings: 0, scoreBefore: 42, scoreAfter: 42, workflows: 0, automationReady: 0, waste: 240_000 },
    6: { savings: 340_000, scoreBefore: 42, scoreAfter: 63, workflows: 3, automationReady: 1, waste: 130_000 },
    12: { savings: 680_000, scoreBefore: 42, scoreAfter: 84, workflows: 6, automationReady: 2, waste: 60_000 },
  },
  hti: {
    0: { savings: 0, scoreBefore: 48, scoreAfter: 48, workflows: 0, automationReady: 0, waste: 420_000 },
    6: { savings: 370_000, scoreBefore: 48, scoreAfter: 67, workflows: 5, automationReady: 2, waste: 220_000 },
    12: { savings: 740_000, scoreBefore: 48, scoreAfter: 86, workflows: 10, automationReady: 3, waste: 120_000 },
  },
  htsi: {
    0: { savings: 0, scoreBefore: 40, scoreAfter: 40, workflows: 0, automationReady: 0, waste: 480_000 },
    6: { savings: 430_000, scoreBefore: 40, scoreAfter: 61, workflows: 5, automationReady: 2, waste: 260_000 },
    12: { savings: 860_000, scoreBefore: 40, scoreAfter: 82, workflows: 10, automationReady: 3, waste: 110_000 },
  },
  he: {
    0: { savings: 0, scoreBefore: 34, scoreAfter: 34, workflows: 0, automationReady: 0, waste: 180_000 },
    6: { savings: 180_000, scoreBefore: 34, scoreAfter: 55, workflows: 2, automationReady: 1, waste: 100_000 },
    12: { savings: 360_000, scoreBefore: 34, scoreAfter: 76, workflows: 4, automationReady: 1, waste: 55_000 },
  },
  gg: {
    0: { savings: 0, scoreBefore: 30, scoreAfter: 30, workflows: 0, automationReady: 0, waste: 120_000 },
    6: { savings: 120_000, scoreBefore: 30, scoreAfter: 51, workflows: 1, automationReady: 0, waste: 65_000 },
    12: { savings: 240_000, scoreBefore: 30, scoreAfter: 72, workflows: 2, automationReady: 1, waste: 32_000 },
  },
  'nb-aerospace': {
    0: { savings: 0, scoreBefore: 46, scoreAfter: 46, workflows: 0, automationReady: 0, waste: 820_000 },
    6: { savings: 1_500_000, scoreBefore: 46, scoreAfter: 66, workflows: 26, automationReady: 5, waste: 420_000 },
    12: { savings: 3_000_000, scoreBefore: 46, scoreAfter: 85, workflows: 52, automationReady: 10, waste: 120_000 },
  },
  'nb-energy': {
    0: { savings: 0, scoreBefore: 38, scoreAfter: 38, workflows: 0, automationReady: 0, waste: 1_100_000 },
    6: { savings: 1_700_000, scoreBefore: 38, scoreAfter: 62, workflows: 26, automationReady: 6, waste: 550_000 },
    12: { savings: 3_400_000, scoreBefore: 38, scoreAfter: 84, workflows: 52, automationReady: 12, waste: 160_000 },
  },
  'nb-financial': {
    0: { savings: 0, scoreBefore: 62, scoreAfter: 62, workflows: 0, automationReady: 0, waste: 680_000 },
    6: { savings: 950_000, scoreBefore: 62, scoreAfter: 76, workflows: 18, automationReady: 6, waste: 340_000 },
    12: { savings: 1_900_000, scoreBefore: 62, scoreAfter: 91, workflows: 36, automationReady: 12, waste: 100_000 },
  },
  'nb-health': {
    0: { savings: 0, scoreBefore: 55, scoreAfter: 55, workflows: 0, automationReady: 0, waste: 920_000 },
    6: { savings: 1_350_000, scoreBefore: 55, scoreAfter: 72, workflows: 22, automationReady: 7, waste: 460_000 },
    12: { savings: 2_700_000, scoreBefore: 55, scoreAfter: 89, workflows: 44, automationReady: 14, waste: 120_000 },
  },
  'ee-finance': {
    0: { savings: 0, scoreBefore: 74, scoreAfter: 74, workflows: 0, automationReady: 0, waste: 680_000 },
    6: { savings: 1_100_000, scoreBefore: 74, scoreAfter: 84, workflows: 17, automationReady: 9, waste: 340_000 },
    12: { savings: 2_200_000, scoreBefore: 74, scoreAfter: 95, workflows: 34, automationReady: 18, waste: 100_000 },
  },
  'ee-social': {
    0: { savings: 0, scoreBefore: 68, scoreAfter: 68, workflows: 0, automationReady: 0, waste: 920_000 },
    6: { savings: 1_400_000, scoreBefore: 68, scoreAfter: 80, workflows: 21, automationReady: 9, waste: 460_000 },
    12: { savings: 2_800_000, scoreBefore: 68, scoreAfter: 93, workflows: 42, automationReady: 18, waste: 130_000 },
  },
  'ee-economic': {
    0: { savings: 0, scoreBefore: 76, scoreAfter: 76, workflows: 0, automationReady: 0, waste: 420_000 },
    6: { savings: 800_000, scoreBefore: 76, scoreAfter: 86, workflows: 13, automationReady: 6, waste: 210_000 },
    12: { savings: 1_600_000, scoreBefore: 76, scoreAfter: 95, workflows: 26, automationReady: 12, waste: 50_000 },
  },
  'ee-ria': {
    0: { savings: 0, scoreBefore: 78, scoreAfter: 78, workflows: 0, automationReady: 0, waste: 380_000 },
    6: { savings: 700_000, scoreBefore: 78, scoreAfter: 88, workflows: 12, automationReady: 7, waste: 190_000 },
    12: { savings: 1_400_000, scoreBefore: 78, scoreAfter: 96, workflows: 24, automationReady: 14, waste: 40_000 },
  },
};

function interpolateTimeline(month: number, companyId: string): TimelineData {
  const stops = allTimelineStops[companyId] || allTimelineStops.meridian;
  if (month <= 0) return stops[0];
  if (month >= 12) return stops[12];

  const lowerStop = month <= 6 ? 0 : 6;
  const upperStop = month <= 6 ? 6 : 12;
  const t = (month - lowerStop) / (upperStop - lowerStop);

  const lower = stops[lowerStop];
  const upper = stops[upperStop];

  return {
    savings: Math.round(lower.savings + (upper.savings - lower.savings) * t),
    scoreBefore: lower.scoreBefore,
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
  const { company } = useCompany();
  const roi = getRoiSummary(company.id);
  const items = [
    { label: 'Tech Stack Optimization', value: roi.techStackSavings, color: 'text-emerald-600' },
    { label: 'Workflow Automation', value: roi.workflowAutomation, color: 'text-emerald-600' },
    { label: 'License Recovery', value: roi.licenseRecovery, color: 'text-emerald-600' },
    { label: 'Implementation Costs', value: -roi.implementationCosts, color: 'text-red-500' },
  ];
  const net = roi.netYear1;

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
        <p className="text-[12px] font-medium text-blue-800">Year 2 Projected: <span className="font-mono font-bold">{fmtCompact(roi.year2Projected)}</span></p>
      </div>
    </div>
  );
}

function ScoreDrillDown() {
  const { company } = useCompany();
  const tools = getCurrentStack(company.id).slice(0, 6);
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
  const { company } = useCompany();
  const wfSummary = getWorkflowSummary(company.id);
  const topWorkflows = [
    { name: 'Claims Intake Processing', savings: '$420K/yr', level: 'Full Automation' },
    { name: 'Call Center Tier-1 Resolution', savings: '$380K/yr', level: 'Human-in-Loop' },
    { name: 'AP/AR Invoice Matching', savings: '$310K/yr', level: 'Full Automation' },
  ];

  return (
    <div>
      <h3 className="text-[15px] font-semibold text-gray-900">Workflow Analysis</h3>
      <p className="mt-1 text-[12px] text-gray-500">{wfSummary.total} workflows analyzed across all OpCos</p>
      <div className="mt-6 space-y-3">
        <div className="flex items-center justify-between rounded-xl bg-emerald-50 px-4 py-3">
          <span className="text-[13px] text-emerald-800">Fully Automatable</span>
          <span className="font-mono text-[16px] font-bold text-emerald-600">{wfSummary.fullyAutomatable}</span>
        </div>
        <div className="flex items-center justify-between rounded-xl bg-amber-50 px-4 py-3">
          <span className="text-[13px] text-amber-800">Human-in-Loop</span>
          <span className="font-mono text-[16px] font-bold text-amber-600">{wfSummary.humanInLoop}</span>
        </div>
        <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
          <span className="text-[13px] text-gray-700">Human Required</span>
          <span className="font-mono text-[16px] font-bold text-gray-500">{wfSummary.humanRequired}</span>
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
  const { company } = useCompany();
  const topWaste = getLicenses(company.id)
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
  const { company, companies, setCompanyId } = useCompany();
  const companyKpis = getKpis(company.id);
  const companyProfile = getCompanyProfile(company.id);
  const companyRoadmap = getRoadmapPhases(company.id);
  const companyOpps = getTopOpportunities(company.id);
  const companyRoi = getRoiSummary(company.id);

  // Sub-entities for parent companies (conglomerate / sovereign)
  const childEntities = companies.filter((c) => c.parentId === company.id);
  const sortedOpps = [...companyOpps].sort((a, b) => a.priority - b.priority);

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
  const tlData = interpolateTimeline(timelineMonth, company.id);

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
                {(() => {
                  const waste3y = companyKpis.unusedLicenseWaste * 3;
                  const prod3y = companyRoi.workflowAutomation * 3;
                  const missed3y = companyKpis.totalSavings * 3;
                  const total = waste3y + prod3y + missed3y;
                  return [
                    { label: 'Wasted License Spend', value: fmtCompact(waste3y), sub: `${fmtCompact(companyKpis.unusedLicenseWaste)} x 3 years` },
                    { label: 'Lost Productivity', value: fmtCompact(prod3y), sub: `${fmtCompact(companyRoi.workflowAutomation)} x 3 years` },
                    { label: 'Missed AI Advantage', value: fmtCompact(missed3y), sub: 'Compounding tech debt' },
                    { label: 'Total Cost of Inaction', value: fmtCompact(total), sub: 'Sum + opportunity cost' },
                  ];
                })().map((metric, i) => (
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
            <p className={`mt-1 text-[12px] font-medium ${companyProfile.aiReadinessScore >= 70 ? 'text-emerald-600' : companyProfile.aiReadinessScore >= 50 ? 'text-amber-600' : 'text-red-500'}`}>
              {companyProfile.aiReadinessScore >= 70 ? 'Strong — ready for advanced AI' : companyProfile.aiReadinessScore >= 50 ? 'Developing — foundation in place' : 'Critical — requires foundational investment'}
            </p>
          </div>
          <ReadinessGauge score={companyProfile.aiReadinessScore} />
        </div>
      </motion.section>

      {/* ── Sub-Entities Section (conglomerate / sovereign only) ── */}
      {childEntities.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          <div className="flex items-center gap-2 mb-5">
            <Building2 className="h-5 w-5 text-gray-400" />
            <h2 className="text-[15px] font-semibold text-gray-900">
              Operating Companies
            </h2>
            <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[11px] font-medium text-gray-500">
              {childEntities.length}
            </span>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {childEntities.map((sub, i) => {
              const subKpis = getKpis(sub.id);
              const subRoi = getRoiSummary(sub.id);
              const roiPct = subRoi.implementationCosts > 0
                ? Math.round((subRoi.netYear1 / subRoi.implementationCosts) * 100)
                : 0;
              const badgeBg = 'bg-purple-100 text-purple-700';

              return (
                <motion.div
                  key={sub.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.08 + i * 0.05 }}
                  whileHover={{ y: -2, boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}
                  onClick={() => setCompanyId(sub.id)}
                  className="group cursor-pointer rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-colors hover:border-gray-200"
                >
                  {/* Header: Initials badge + name + chevron */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-9 w-9 items-center justify-center rounded-lg text-[12px] font-bold ${badgeBg}`}>
                        {sub.initials}
                      </div>
                      <div>
                        <p className="text-[13px] font-semibold text-gray-900 leading-tight">{sub.shortName}</p>
                        <p className="text-[11px] text-gray-500">{sub.industry}</p>
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-gray-300 transition-transform group-hover:translate-x-0.5 group-hover:text-gray-500" />
                  </div>

                  {/* Metrics row */}
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">Savings</p>
                      <p className="mt-0.5 font-mono text-[14px] font-bold text-emerald-600">
                        {fmtCompact(subKpis.totalSavings)}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">Score</p>
                      <p className="mt-0.5 font-mono text-[14px] font-bold text-gray-900">
                        <span className="text-gray-400">{subKpis.techScoreBefore}</span>
                        <span className="text-gray-300 mx-0.5">&rarr;</span>
                        <span className="text-[#4285F4]">{subKpis.techScoreAfter}</span>
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">Workflows</p>
                      <p className="mt-0.5 font-mono text-[14px] font-bold text-gray-900">
                        {subKpis.workflowsAnalyzed}
                      </p>
                    </div>
                  </div>

                  {/* Bottom row */}
                  <div className="mt-3 flex items-center justify-between border-t border-gray-50 pt-3">
                    <span className="text-[11px] text-gray-500">
                      {sub.employees.toLocaleString()} employees
                    </span>
                    <span className="text-[11px] text-gray-500">{sub.revenue}</span>
                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-700">
                      {roiPct}% ROI
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>
      )}

      {/* ── 2. KPI Cards ──────────────────────────────────────────── */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard
          label="Identified Savings"
          sparklineData={companyKpis.savingsSparkline}
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
          sparklineData={companyKpis.scoreSparkline}
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
          sparklineData={companyKpis.workflowSparkline}
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
          sparklineData={companyKpis.licenseSparkline}
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
              {companyRoadmap.map((phase, i) => {
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
          {companyRoadmap.map((phase) => {
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
            {(() => {
              const activeIdx = companyRoadmap.findIndex(p => p.status === 'active');
              const phase = activeIdx >= 0 ? companyRoadmap[activeIdx] : companyRoadmap[0];
              return `Phase ${activeIdx >= 0 ? activeIdx + 1 : 1} of ${companyRoadmap.length} — ${phase?.title || 'Planning'}`;
            })()}
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
