import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Building2, ChevronRight, ExternalLink, Lightbulb, Sparkles, Target } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
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
  getAiReadinessBreakdown,
  type OpportunityStatus,
} from '../data/constants';
import { useCompany } from '../data/CompanyContext';

import { LASTMILE_URL } from '../data/crosslinks';

// ─── Helpers ────────────────────────────────────────────────────────────────

const fmtCompact = (n: number) => {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${Math.round(n / 1_000)}k`;
  return `$${n}`;
};

const statusColors: Record<OpportunityStatus, { bg: string; text: string; dot: string }> = {
  automated: { bg: 'var(--cc-green-dim)', text: 'var(--cc-green)', dot: 'var(--cc-green)' },
  'in-progress': { bg: 'var(--cc-yellow-dim)', text: 'var(--cc-yellow)', dot: 'var(--cc-yellow)' },
  identified: { bg: 'rgba(255,255,255,0.06)', text: 'var(--cc-text-secondary)', dot: 'var(--cc-text-tertiary)' },
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
    12: { savings: 5_800_000, scoreBefore: 38, scoreAfter: 86, workflows: 62, automationReady: 18, waste: 820_000 },
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

// ─── AI Readiness Gauge (dark-themed) ───────────────────────────────────────


// ─── KPI Card (dark-themed) ─────────────────────────────────────────────────

function KpiCard({
  label,
  children,
  sparklineData,
  sparklineColor,
  sparklineId,
  delay = 0,
  onClick,
  accentColor,
}: {
  label: string;
  children: React.ReactNode;
  sparklineData: number[];
  sparklineColor: string;
  sparklineId: string;
  delay?: number;
  onClick?: () => void;
  accentColor?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -2, scale: 1.02 }}
      onClick={onClick}
      className={`group relative flex flex-col justify-between rounded-2xl p-6 transition-all duration-200 ${onClick ? 'cursor-pointer' : ''}`}
      style={{
        background: 'var(--cc-bg-card)',
        border: '1px solid var(--cc-border)',
        borderTop: accentColor ? `2px solid ${accentColor}` : '1px solid var(--cc-border)',
      }}
    >
      <p className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: 'var(--cc-text-tertiary)' }}>
        {label}
      </p>
      <div className="mt-3">{children}</div>
      <div className="mt-4">
        <Sparkline data={sparklineData} color={sparklineColor} id={sparklineId} />
      </div>
    </motion.div>
  );
}

// ─── Drill-Down Panel Content (dark-themed) ─────────────────────────────────

type DrillDownType = 'savings' | 'score' | 'workflows' | 'licenses' | null;

function SavingsDrillDown() {
  const { company } = useCompany();
  const roi = getRoiSummary(company.id);
  const items = [
    { label: 'Tech Stack Optimization', value: roi.techStackSavings, color: 'var(--cc-green)' },
    { label: 'Workflow Automation', value: roi.workflowAutomation, color: 'var(--cc-green)' },
    { label: 'License Recovery', value: roi.licenseRecovery, color: 'var(--cc-green)' },
    { label: 'Implementation Costs', value: -roi.implementationCosts, color: 'var(--cc-red)' },
  ];
  const net = roi.netYear1;

  return (
    <div>
      <h3 className="text-[15px] font-semibold" style={{ color: 'var(--cc-text)' }}>Savings Breakdown</h3>
      <p className="mt-1 text-[12px]" style={{ color: 'var(--cc-text-secondary)' }}>Year 1 net savings analysis</p>
      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <div key={item.label} className="flex items-center justify-between pb-3" style={{ borderBottom: '1px solid var(--cc-border)' }}>
            <span className="text-[13px]" style={{ color: 'var(--cc-text-secondary)' }}>{item.label}</span>
            <span className="font-mono text-[14px] font-semibold" style={{ color: item.color }}>
              {item.value < 0 ? '-' : ''}{fmtCompact(Math.abs(item.value))}
            </span>
          </div>
        ))}
        <div className="flex items-center justify-between rounded-xl px-4 py-3" style={{ background: 'var(--cc-green-dim)' }}>
          <span className="text-[13px] font-semibold" style={{ color: 'var(--cc-green)' }}>Net Year 1 Savings</span>
          <span className="font-mono text-[18px] font-bold" style={{ color: 'var(--cc-green)' }}>{fmtCompact(net)}</span>
        </div>
      </div>
      <div className="mt-6 rounded-xl px-4 py-3" style={{ background: 'rgba(66, 133, 244, 0.1)' }}>
        <p className="text-[12px] font-medium" style={{ color: 'var(--cc-accent)' }}>Year 2 Projected: <span className="font-mono font-bold">{fmtCompact(roi.year2Projected)}</span></p>
      </div>
    </div>
  );
}

function ScoreDrillDown() {
  const { company } = useCompany();
  const tools = getCurrentStack(company.id).slice(0, 6);
  const targetScores: Record<string, number> = {
    'SAP ERP': 7, 'Salesforce CRM': 8, 'No Data Lake': 9, 'Tableau': 8, 'Manual Dev Workflows': 9, 'Concur': 8,
  };

  return (
    <div>
      <h3 className="text-[15px] font-semibold" style={{ color: 'var(--cc-text)' }}>Tech Stack Score Breakdown</h3>
      <p className="mt-1 text-[12px]" style={{ color: 'var(--cc-text-secondary)' }}>Current vs target scores by tool (out of 10)</p>
      <div className="mt-6 space-y-5">
        {tools.map((tool) => {
          const target = targetScores[tool.name] || 8;
          return (
            <div key={tool.name}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[12px] font-medium" style={{ color: 'var(--cc-text-secondary)' }}>{tool.name}</span>
                <span className="text-[11px]" style={{ color: 'var(--cc-text-tertiary)' }}>
                  <span className="font-mono font-semibold" style={{ color: 'var(--cc-text-muted)' }}>{tool.score}</span>
                  <ArrowRight className="inline h-3 w-3 mx-1" style={{ color: 'var(--cc-text-muted)' }} />
                  <span className="font-mono font-semibold" style={{ color: 'var(--cc-accent)' }}>{target}</span>
                </span>
              </div>
              <div className="relative h-[6px] w-full rounded-full" style={{ background: 'var(--cc-border)' }}>
                <div className="absolute top-0 left-0 h-full rounded-full" style={{ width: `${(tool.score / 10) * 100}%`, background: 'var(--cc-text-muted)' }} />
                <div className="absolute top-0 left-0 h-full rounded-full opacity-40" style={{ width: `${(target / 10) * 100}%`, background: 'var(--cc-accent)' }} />
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
    { name: 'Track Inspection & Maintenance Planning', savings: '$420K/yr', level: 'Full Automation' },
    { name: 'Crew Scheduling & Dispatch', savings: '$380K/yr', level: 'Human-in-Loop' },
    { name: 'Equipment Fleet Management', savings: '$310K/yr', level: 'Full Automation' },
  ];

  return (
    <div>
      <h3 className="text-[15px] font-semibold" style={{ color: 'var(--cc-text)' }}>Workflow Analysis</h3>
      <p className="mt-1 text-[12px]" style={{ color: 'var(--cc-text-secondary)' }}>{wfSummary.total} workflows analyzed across all divisions</p>
      <div className="mt-6 space-y-3">
        <div className="flex items-center justify-between rounded-xl px-4 py-3" style={{ background: 'var(--cc-green-dim)' }}>
          <span className="text-[13px]" style={{ color: 'var(--cc-green)' }}>Fully Automatable</span>
          <span className="font-mono text-[16px] font-bold" style={{ color: 'var(--cc-green)' }}>{wfSummary.fullyAutomatable}</span>
        </div>
        <div className="flex items-center justify-between rounded-xl px-4 py-3" style={{ background: 'var(--cc-yellow-dim)' }}>
          <span className="text-[13px]" style={{ color: 'var(--cc-yellow)' }}>Human-in-Loop</span>
          <span className="font-mono text-[16px] font-bold" style={{ color: 'var(--cc-yellow)' }}>{wfSummary.humanInLoop}</span>
        </div>
        <div className="flex items-center justify-between rounded-xl px-4 py-3" style={{ background: 'rgba(255,255,255,0.04)' }}>
          <span className="text-[13px]" style={{ color: 'var(--cc-text-secondary)' }}>Human Required</span>
          <span className="font-mono text-[16px] font-bold" style={{ color: 'var(--cc-text-secondary)' }}>{wfSummary.humanRequired}</span>
        </div>
      </div>
      <div className="mt-6">
        <h4 className="text-[12px] font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--cc-text-tertiary)' }}>Top 3 Opportunities</h4>
        <div className="space-y-3">
          {topWorkflows.map((wf) => (
            <div key={wf.name} className="rounded-xl p-3" style={{ border: '1px solid var(--cc-border)', background: 'var(--cc-bg-elevated)' }}>
              <p className="text-[13px] font-medium" style={{ color: 'var(--cc-text)' }}>{wf.name}</p>
              <div className="mt-1 flex items-center gap-3">
                <span className="text-[12px] font-mono font-semibold" style={{ color: 'var(--cc-green)' }}>{wf.savings}</span>
                <span className="rounded-full px-2 py-0.5 text-[10px] font-medium" style={{ background: 'rgba(66,133,244,0.15)', color: 'var(--cc-accent)' }}>{wf.level}</span>
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
      <h3 className="text-[15px] font-semibold" style={{ color: 'var(--cc-text)' }}>License Waste Breakdown</h3>
      <p className="mt-1 text-[12px]" style={{ color: 'var(--cc-text-secondary)' }}>Top sources of unused license spend</p>
      <div className="mt-6 space-y-4">
        {topWaste.map((lic) => {
          const utilization = Math.round((lic.active90d / lic.totalLicenses) * 100);
          return (
            <div key={lic.vendor} className="rounded-xl p-4" style={{ border: '1px solid var(--cc-border)', background: 'var(--cc-bg-elevated)' }}>
              <div className="flex items-center justify-between">
                <span className="text-[13px] font-medium" style={{ color: 'var(--cc-text)' }}>{lic.vendor}</span>
                <span className="font-mono text-[16px] font-bold" style={{ color: 'var(--cc-red)' }}>{fmtCompact(lic.annualWaste)}</span>
              </div>
              <div className="mt-2 flex items-center gap-3">
                <div className="h-[4px] flex-1 rounded-full" style={{ background: 'var(--cc-border)' }}>
                  <div className="h-full rounded-full" style={{ width: `${100 - utilization}%`, background: 'var(--cc-red)' }} />
                </div>
                <span className="text-[11px]" style={{ color: 'var(--cc-text-tertiary)' }}>{lic.inactive} / {lic.totalLicenses} unused</span>
              </div>
              <p className="mt-2 text-[11px]" style={{ color: 'var(--cc-text-tertiary)' }}>{lic.action}</p>
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
          <motion.div
            key="drilldown-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40"
            style={{ background: 'rgba(0,0,0,0.5)' }}
            onClick={onClose}
          />
          <motion.div
            key="drilldown-panel"
            initial={{ x: 420 }}
            animate={{ x: 0 }}
            exit={{ x: 420 }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 z-50 h-full w-full sm:w-[420px] overflow-y-auto rounded-l-2xl p-6 sm:p-8 shadow-2xl"
            style={{ background: 'var(--cc-bg-card)', borderLeft: '1px solid var(--cc-border)' }}
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full transition-colors"
              style={{ background: 'var(--cc-bg-elevated)', color: 'var(--cc-text-secondary)' }}
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

// ─── Division Deep-Dive Drawer ──────────────────────────────────────────────

function DivisionDrawer({
  entity,
  onClose,
}: {
  entity: { id: string; name: string; shortName: string; initials: string; industry: string; employees: number } | null;
  onClose: () => void;
}) {
  if (!entity) return null;
  const subKpis = getKpis(entity.id);
  const subOpps = getTopOpportunities(entity.id).slice(0, 5);
  const profile = getCompanyProfile(entity.id);

  return (
    <AnimatePresence>
      {entity && (
        <>
          <motion.div
            key="div-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40"
            style={{ background: 'rgba(0,0,0,0.5)' }}
            onClick={onClose}
          />
          <motion.div
            key="div-panel"
            initial={{ x: 480 }}
            animate={{ x: 0 }}
            exit={{ x: 480 }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 z-50 h-full w-[480px] overflow-y-auto rounded-l-2xl p-8 shadow-2xl"
            style={{ background: 'var(--cc-bg-card)', borderLeft: '1px solid var(--cc-border)' }}
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full transition-colors"
              style={{ background: 'var(--cc-bg-elevated)', color: 'var(--cc-text-secondary)' }}
            >
              <X className="h-4 w-4" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-4 mt-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl text-[14px] font-bold" style={{ background: 'rgba(66,133,244,0.15)', color: 'var(--cc-accent)' }}>
                {entity.initials}
              </div>
              <div>
                <h3 className="text-[17px] font-bold" style={{ color: 'var(--cc-text)' }}>{entity.shortName}</h3>
                <p className="text-[12px]" style={{ color: 'var(--cc-text-tertiary)' }}>{entity.industry}</p>
              </div>
            </div>

            {/* Stats grid */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-xl p-4" style={{ background: 'var(--cc-bg-elevated)', border: '1px solid var(--cc-border)' }}>
                <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: 'var(--cc-text-tertiary)' }}>Savings</p>
                <p className="mt-1 font-mono text-[20px] font-bold" style={{ color: 'var(--cc-green)' }}>{fmtCompact(subKpis.totalSavings)}</p>
              </div>
              <div className="rounded-xl p-4" style={{ background: 'var(--cc-bg-elevated)', border: '1px solid var(--cc-border)' }}>
                <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: 'var(--cc-text-tertiary)' }}>AI Score</p>
                <p className="mt-1 font-mono text-[20px] font-bold" style={{ color: 'var(--cc-accent)' }}>{profile.aiReadinessScore}</p>
              </div>
              <div className="rounded-xl p-4" style={{ background: 'var(--cc-bg-elevated)', border: '1px solid var(--cc-border)' }}>
                <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: 'var(--cc-text-tertiary)' }}>Workflows</p>
                <p className="mt-1 font-mono text-[20px] font-bold" style={{ color: 'var(--cc-text)' }}>{subKpis.workflowsAnalyzed}</p>
              </div>
              <div className="rounded-xl p-4" style={{ background: 'var(--cc-bg-elevated)', border: '1px solid var(--cc-border)' }}>
                <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: 'var(--cc-text-tertiary)' }}>Employees</p>
                <p className="mt-1 font-mono text-[20px] font-bold" style={{ color: 'var(--cc-text)' }}>{entity.employees.toLocaleString()}</p>
              </div>
            </div>

            {/* Top opportunities */}
            <div className="mt-6">
              <h4 className="text-[12px] font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--cc-text-tertiary)' }}>Top Opportunities</h4>
              <div className="space-y-2">
                {subOpps.map((opp) => (
                  <div key={opp.name} className="flex items-center justify-between rounded-lg px-3 py-2.5" style={{ background: 'var(--cc-bg-elevated)', border: '1px solid var(--cc-border)' }}>
                    <span className="text-[12px] font-medium" style={{ color: 'var(--cc-text-secondary)' }}>{opp.name}</span>
                    <span className="font-mono text-[12px] font-semibold" style={{ color: 'var(--cc-green)' }}>{fmtCompact(opp.savings)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* View Full Analysis link */}
            <a
              href={`${LASTMILE_URL}/agents?company=${entity.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center gap-1.5 text-[13px] font-medium transition-colors"
              style={{ color: 'var(--cc-accent)' }}
            >
              View Full Analysis
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ─── Peer Benchmarking Data ─────────────────────────────────────────────────

const peerCaseStudies = [
  {
    icon: <Building2 className="h-5 w-5" style={{ color: 'var(--cc-accent)' }} />,
    headline: '31% Idle Time Reduction',
    description: 'Mid-market infrastructure company (2,500 emp) achieved 31% idle time reduction through AI-powered crew scheduling and fleet optimization.',
    timeline: '8 months',
  },
  {
    icon: <Target className="h-5 w-5" style={{ color: 'var(--cc-green)' }} />,
    headline: '$4.2M/yr Savings',
    description: 'Railroad services firm achieved $4.2M annual savings through fleet intelligence, predictive maintenance, and license reclamation.',
    timeline: '12 months',
  },
  {
    icon: <Sparkles className="h-5 w-5" style={{ color: 'var(--cc-yellow)' }} />,
    headline: 'AI Readiness Score 82',
    description: 'Industrial conglomerate (5 divisions) raised AI readiness from 34 to 82 through unified data platform and cross-division automation.',
    timeline: '12 months',
  },
];

// ─── Custom Scatter Tooltip ─────────────────────────────────────────────────

function ScatterTooltipContent({ active, payload }: { active?: boolean; payload?: Array<{ payload: { name: string; savings: number; effort: string; status: string } }> }) {
  if (!active || !payload || !payload.length) return null;
  const d = payload[0].payload;
  return (
    <div className="rounded-lg px-3 py-2 shadow-lg" style={{ background: 'var(--cc-bg-card)', border: '1px solid var(--cc-border)' }}>
      <p className="text-[12px] font-semibold" style={{ color: 'var(--cc-text)' }}>{d.name}</p>
      <p className="text-[11px]" style={{ color: 'var(--cc-text-secondary)' }}>Savings: {fmtCompact(d.savings)}</p>
      <p className="text-[11px]" style={{ color: 'var(--cc-text-tertiary)' }}>Effort: {d.effort} &middot; {d.status}</p>
    </div>
  );
}

// ─── Dashboard ──────────────────────────────────────────────────────────────

export default function Dashboard() {
  const { company, companies } = useCompany();
  const companyKpis = getKpis(company.id);
  const companyRoadmap = getRoadmapPhases(company.id);
  const companyOpps = getTopOpportunities(company.id);
  const companyStack = getCurrentStack(company.id);
  const companyAiBreakdown = getAiReadinessBreakdown(company.id);

  // Sub-entities for parent companies
  const childEntities = companies.filter((c) => c.parentId === company.id);

  // Loading state — no artificial delay
  const [loading] = useState(false);

  // Cost of Inaction toggle
  const [showCostOfInaction, setShowCostOfInaction] = useState(false);

  // Timeline scrubber
  const [timelineMonth, setTimelineMonth] = useState(12);
  const tlData = interpolateTimeline(timelineMonth, company.id);

  // Drill-down panel
  const [activeDrillDown, setActiveDrillDown] = useState<DrillDownType>(null);

  // Division drawer
  const [selectedDivision, setSelectedDivision] = useState<typeof childEntities[0] | null>(null);

  // Initiative simulator toggles
  const [enabledOpps, setEnabledOpps] = useState<Set<string>>(() => new Set(companyOpps.map(o => o.name)));

  // Reset enabled opps when company changes
  useEffect(() => {
    setEnabledOpps(new Set(companyOpps.map(o => o.name)));
  }, [company.id]); // eslint-disable-line react-hooks/exhaustive-deps

  // What-If sliders
  const [implTimeline, setImplTimeline] = useState(12);
  const [divisionsInScope, setDivisionsInScope] = useState(company.opCos);
  const [automationAggr, setAutomationAggr] = useState(1.0);

  // Reset sliders on company change
  useEffect(() => {
    setDivisionsInScope(company.opCos);
  }, [company.opCos]);

  // Computed savings from initiative simulator + what-if sliders
  const baseSavings = companyOpps.filter(o => enabledOpps.has(o.name)).reduce((s, o) => s + o.savings, 0);
  const timelineMultiplier = implTimeline <= 12 ? 1 : 1 - ((implTimeline - 12) * 0.03);
  const divisionMultiplier = company.opCos > 0 ? divisionsInScope / company.opCos : 1;
  const selectedSavings = Math.round(baseSavings * timelineMultiplier * divisionMultiplier * automationAggr);
  const totalPossibleSavings = companyOpps.reduce((s, o) => s + o.savings, 0);

  // Static sync display — data is pre-loaded
  const syncSeconds = 12;

  // Toggle an opportunity on/off
  const toggleOpp = (name: string) => {
    setEnabledOpps(prev => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  // ─── Scatter Plot Data ────────────────────────────────────────────────────
  const effortMap: Record<string, number> = { Low: 1, Medium: 2, High: 3 };
  const scatterData = companyOpps.map(o => ({
    name: o.name,
    effort: o.effort,
    effortNum: effortMap[o.effort] || 2,
    savings: o.savings,
    status: o.status,
    size: Math.max(40, (o.savings / 100_000) * 8),
  }));
  const scatterColors: Record<string, string> = {
    automated: '#10B981',
    'in-progress': '#F59E0B',
    identified: '#6B7280',
  };

  // ─── Radar Chart Data (deterministic from company data) ──────────────────
  const radarData = companyAiBreakdown.map((d, idx) => {
    // Deterministic seed: use score and index to create stable "random-looking" offsets
    const seedOffset = ((d.score * 7 + idx * 13) % 11);
    return {
      category: d.category.replace('Data Infrastructure', 'Data Infra').replace('Process Maturity', 'Process').replace('Tech Stack Modernity', 'Tech Stack').replace('Change Readiness', 'Change').replace('Skills & Training', 'Skills'),
      current: d.score,
      target: Math.min(95, d.score + 40 + seedOffset),
      industry: 55 + ((d.score * 3 + idx * 7) % 11),
    };
  });

  // ─── AI Insight Cards Data ────────────────────────────────────────────────
  const mostExpensiveLegacy = [...companyStack].sort((a, b) => b.annualCost - a.annualCost)[0];
  const highestSavingsOpp = [...companyOpps].sort((a, b) => b.savings - a.savings)[0];
  const bestAiDimension = [...companyAiBreakdown].sort((a, b) => b.score - a.score)[0];

  // ─── Shimmer loading skeleton ─────────────────────────────────────────────
  if (loading) {
    return (
      <div className="space-y-8">
        {/* Hero skeleton */}
        <div className="cc-shimmer h-[260px] w-full" />
        {/* KPI row skeleton */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {[1, 2, 3, 4].map(i => <div key={i} className="cc-shimmer h-[140px]" />)}
        </div>
        {/* Content skeletons */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="cc-shimmer h-[320px]" />
          <div className="cc-shimmer h-[320px]" />
        </div>
        <div className="cc-shimmer h-[200px]" />
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {[1, 2, 3].map(i => <div key={i} className="cc-shimmer h-[160px]" />)}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* ── 1. CINEMATIC HERO SECTION ────────────────────────────── */}
      <motion.section
        key={`hero-${company.id}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-2xl cc-dotgrid"
        style={{
          background: 'linear-gradient(135deg, var(--cc-bg) 0%, var(--cc-bg-elevated) 50%, var(--cc-bg) 100%)',
          border: '1px solid var(--cc-border)',
        }}
      >
        {/* Blue accent glow behind number */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, var(--cc-accent-glow) 0%, transparent 70%)' }} />

        <div className="relative z-10 px-8 py-10 lg:px-12 lg:py-14">
          {/* Company name + timestamp */}
          <div className="flex items-center justify-between mb-2">
            <h1
              className="text-[28px] lg:text-[36px] font-bold tracking-tight"
              style={{ color: 'var(--cc-text)', letterSpacing: '-0.02em' }}
            >
              {company.name}
            </h1>
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono flex items-center gap-1.5" style={{ color: 'var(--cc-text-tertiary)' }}>
                <span className="w-1.5 h-1.5 rounded-full cc-live-dot" style={{ background: 'var(--cc-green)' }} />
                Last synced: {syncSeconds}s ago
              </span>
            </div>
          </div>
          <p className="text-[12px] font-medium" style={{ color: 'var(--cc-text-muted)' }}>
            Assessed March 2026 &middot; {company.employees.toLocaleString()} Employees &middot; {company.opCos} Division{company.opCos === 1 ? '' : 's'}
          </p>

          {/* Primary metric */}
          <div className="mt-8 flex flex-col lg:flex-row lg:items-end lg:gap-16">
            <div className="cc-glow rounded-2xl px-6 py-4 inline-block" style={{ background: 'rgba(66,133,244,0.08)' }}>
              <p className="text-[10px] font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--cc-accent)' }}>
                Identified Savings
              </p>
              <div className="font-mono font-bold leading-none" style={{ color: 'var(--cc-text)', fontSize: '56px', letterSpacing: '-0.03em' }}>
                <AnimatedCounter
                  value={companyKpis.totalSavings / 1_000_000}
                  prefix="$"
                  suffix="M"
                  decimals={1}
                  duration={1800}
                />
              </div>
            </div>

            {/* Secondary stats */}
            <div className="mt-6 lg:mt-0 flex flex-wrap gap-8 lg:gap-12">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: 'var(--cc-text-muted)' }}>AI Score</p>
                <div className="mt-1 flex items-baseline gap-1">
                  <span className="font-mono text-[24px] font-bold" style={{ color: 'var(--cc-text-muted)' }}>{companyKpis.techScoreBefore}</span>
                  <ArrowRight className="h-4 w-4 mx-1" style={{ color: 'var(--cc-text-muted)' }} />
                  <span className="font-mono text-[24px] font-bold" style={{ color: 'var(--cc-accent)' }}>
                    <AnimatedCounter value={companyKpis.techScoreAfter} duration={1600} />
                  </span>
                </div>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: 'var(--cc-text-muted)' }}>Workflows</p>
                <p className="mt-1 font-mono text-[24px] font-bold" style={{ color: 'var(--cc-text)' }}>
                  <AnimatedCounter value={companyKpis.workflowsAnalyzed} duration={1400} />
                </p>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: 'var(--cc-text-muted)' }}>License Waste</p>
                <p className="mt-1 font-mono text-[24px] font-bold" style={{ color: 'var(--cc-red)' }}>
                  <AnimatedCounter
                    value={companyKpis.unusedLicenseWaste / 1_000_000}
                    prefix="$"
                    suffix="M"
                    decimals={1}
                    duration={1400}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── Cost of Inaction Toggle ──────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-500"
        style={{
          background: showCostOfInaction ? 'var(--cc-red-dim)' : 'transparent',
        }}
      >
        <button
          onClick={() => setShowCostOfInaction(!showCostOfInaction)}
          className="relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors duration-200"
          style={{ background: showCostOfInaction ? 'var(--cc-red)' : 'var(--cc-text-muted)' }}
        >
          <span
            className="inline-block h-3.5 w-3.5 transform rounded-full shadow transition-transform duration-200"
            style={{
              background: 'var(--cc-text)',
              transform: showCostOfInaction ? 'translateX(18px)' : 'translateX(3px)',
            }}
          />
        </button>
        <span className="text-[12px] font-medium" style={{ color: showCostOfInaction ? 'var(--cc-red)' : 'var(--cc-text-secondary)' }}>
          Show Cost of Inaction
        </span>
      </motion.div>

      <AnimatePresence>
        {showCostOfInaction && (
          <motion.section
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="rounded-2xl p-6" style={{ background: 'var(--cc-red-dim)', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
              <h2 className="text-[14px] font-semibold" style={{ color: 'var(--cc-red)' }}>
                If No Action Is Taken — 3-Year Projection
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {(() => {
                  const year1 = companyKpis.totalSavings;
                  const year2 = Math.round(companyKpis.totalSavings * 1.15);
                  const year3 = Math.round(companyKpis.totalSavings * 1.35);
                  const total = year1 + year2 + year3;
                  return [
                    { label: 'Year 1 Opportunity Cost', value: fmtCompact(year1), sub: 'Total savings forgone' },
                    { label: 'Year 2 (15% compounding)', value: fmtCompact(year2), sub: 'Inflation + regulatory increases' },
                    { label: 'Year 3 (35% compounding)', value: fmtCompact(year3), sub: 'Compounding tech debt' },
                    { label: 'Total Cost of Inaction', value: fmtCompact(total), sub: '3-year cumulative loss' },
                  ];
                })().map((metric, i) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="rounded-xl p-4"
                    style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.15)' }}
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: 'var(--cc-red)' }}>
                      {metric.label}
                    </p>
                    <p className="mt-2 font-mono text-[26px] font-bold leading-none" style={{ color: 'var(--cc-red)' }}>
                      {metric.value}
                    </p>
                    <p className="mt-1 text-[11px]" style={{ color: 'rgba(239,68,68,0.6)' }}>{metric.sub}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* ── Sub-Entities Section ────────────────────────────────── */}
      {childEntities.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="flex items-center gap-2 mb-5">
            <Building2 className="h-5 w-5" style={{ color: 'var(--cc-text-tertiary)' }} />
            <h2 className="text-[15px] font-semibold" style={{ color: 'var(--cc-text)' }}>
              Divisions
            </h2>
            <span className="rounded-full px-2 py-0.5 text-[11px] font-medium" style={{ background: 'var(--cc-bg-elevated)', color: 'var(--cc-text-tertiary)' }}>
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

              return (
                <motion.div
                  key={sub.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.12 + i * 0.05 }}
                  whileHover={{ y: -2 }}
                  onClick={() => setSelectedDivision(sub)}
                  className="group cursor-pointer rounded-2xl p-5 transition-colors"
                  style={{ background: 'var(--cc-bg-card)', border: '1px solid var(--cc-border)' }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg text-[12px] font-bold" style={{ background: 'rgba(66,133,244,0.15)', color: 'var(--cc-accent)' }}>
                        {sub.initials}
                      </div>
                      <div>
                        <p className="text-[13px] font-semibold leading-tight" style={{ color: 'var(--cc-text)' }}>{sub.shortName}</p>
                        <p className="text-[11px]" style={{ color: 'var(--cc-text-tertiary)' }}>{sub.industry}</p>
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" style={{ color: 'var(--cc-text-muted)' }} />
                  </div>

                  {/* Metrics row */}
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: 'var(--cc-text-muted)' }}>Savings</p>
                      <p className="mt-0.5 font-mono text-[14px] font-bold" style={{ color: 'var(--cc-green)' }}>
                        {fmtCompact(subKpis.totalSavings)}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: 'var(--cc-text-muted)' }}>Score</p>
                      <p className="mt-0.5 font-mono text-[14px] font-bold">
                        <span style={{ color: 'var(--cc-text-muted)' }}>{subKpis.techScoreBefore}</span>
                        <span style={{ color: 'var(--cc-text-muted)' }} className="mx-0.5">&rarr;</span>
                        <span style={{ color: 'var(--cc-accent)' }}>{subKpis.techScoreAfter}</span>
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: 'var(--cc-text-muted)' }}>Workflows</p>
                      <p className="mt-0.5 font-mono text-[14px] font-bold" style={{ color: 'var(--cc-text)' }}>
                        {subKpis.workflowsAnalyzed}
                      </p>
                    </div>
                  </div>

                  {/* Bottom row */}
                  <div className="mt-3 flex items-center justify-between pt-3" style={{ borderTop: '1px solid var(--cc-border)' }}>
                    <span className="text-[11px]" style={{ color: 'var(--cc-text-tertiary)' }}>
                      {sub.employees.toLocaleString()} employees
                    </span>
                    <span className="rounded-full px-2 py-0.5 text-[11px] font-semibold" style={{ background: 'var(--cc-green-dim)', color: 'var(--cc-green)' }}>
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
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4"
      >
        <KpiCard
          label="Identified Savings"
          sparklineData={companyKpis.savingsSparkline}
          sparklineColor="#10B981"
          sparklineId="savings"
          delay={0.05}
          onClick={() => setActiveDrillDown('savings')}
          accentColor="var(--cc-green)"
        >
          <p className="font-mono text-3xl font-bold leading-none" style={{ color: 'var(--cc-green)' }}>
            {fmtCompact(tlData.savings)}
            <span className="text-[14px] font-semibold" style={{ color: 'var(--cc-text-muted)' }}>/yr</span>
          </p>
        </KpiCard>

        <KpiCard
          label="Tech Stack Score"
          sparklineData={companyKpis.scoreSparkline}
          sparklineColor="#4285F4"
          sparklineId="score"
          delay={0.1}
          onClick={() => setActiveDrillDown('score')}
          accentColor="var(--cc-accent)"
        >
          <div className="flex items-baseline gap-1.5">
            <span className="font-mono text-3xl font-bold leading-none" style={{ color: 'var(--cc-text-muted)' }}>
              {tlData.scoreBefore}
            </span>
            <ArrowRight className="h-4 w-4" style={{ color: 'var(--cc-text-muted)' }} />
            <span className="font-mono text-3xl font-bold leading-none" style={{ color: 'var(--cc-accent)' }}>
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
          accentColor="var(--cc-yellow)"
        >
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-3xl font-bold leading-none" style={{ color: 'var(--cc-text)' }}>
              {tlData.workflows}
            </span>
            <span className="rounded-full px-2 py-0.5 text-[11px] font-semibold" style={{ background: 'var(--cc-green-dim)', color: 'var(--cc-green)' }}>
              {tlData.automationReady} ready
            </span>
          </div>
        </KpiCard>

        <KpiCard
          label={timelineMonth === 0 ? 'License Waste (Current)' : `License Waste (Month ${timelineMonth})`}
          sparklineData={companyKpis.licenseSparkline}
          sparklineColor="#EF4444"
          sparklineId="license"
          delay={0.2}
          onClick={() => setActiveDrillDown('licenses')}
          accentColor="var(--cc-red)"
        >
          <p className="font-mono text-3xl font-bold leading-none" style={{ color: 'var(--cc-red)' }}>
            {fmtCompact(tlData.waste)}
            <span className="text-[14px] font-semibold" style={{ color: 'var(--cc-text-muted)' }}>/yr</span>
          </p>
          {timelineMonth > 0 && (
            <p className="text-[10px] mt-1" style={{ color: 'var(--cc-text-muted)' }}>
              Started at {fmtCompact(companyKpis.unusedLicenseWaste)} &middot; {fmtCompact(companyKpis.unusedLicenseWaste - tlData.waste)} recovered
            </p>
          )}
        </KpiCard>
      </motion.div>

      {/* ── Cross-links to Last Mile ────────────────────────────── */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
        <a
          href={`${LASTMILE_URL}/agents?company=${company.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-[13px] transition-colors"
          style={{ color: 'var(--cc-text-tertiary)' }}
        >
          View AI Agents in Last Mile
          <ExternalLink className="w-3 h-3" strokeWidth={2} />
        </a>
        <a
          href={`${LASTMILE_URL}/operations?company=${company.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-[13px] transition-colors"
          style={{ color: 'var(--cc-text-tertiary)' }}
        >
          View live operations
          <ExternalLink className="w-3 h-3" strokeWidth={2} />
        </a>
      </div>

      {/* ── Timeline Scrubber (dark-themed) ────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.25 }}
        className="rounded-2xl p-6"
        style={{ background: 'var(--cc-bg-card)', border: '1px solid var(--cc-border)' }}
      >
        <h2 className="text-[15px] font-semibold" style={{ color: 'var(--cc-text)' }}>Transformation Timeline</h2>
        <p className="mt-1 text-[12px]" style={{ color: 'var(--cc-text-secondary)' }}>Drag to see projected KPI values over time</p>
        <div className="mt-6">
          <div className="relative">
            <input
              type="range"
              min={0}
              max={12}
              step={1}
              value={timelineMonth}
              onChange={(e) => setTimelineMonth(Number(e.target.value))}
              className="cc-slider w-full"
              style={{
                background: `linear-gradient(to right, var(--cc-accent) 0%, var(--cc-accent) ${(timelineMonth / 12) * 100}%, var(--cc-border) ${(timelineMonth / 12) * 100}%, var(--cc-border) 100%)`,
              }}
            />
          </div>
          <div className="mt-3 flex justify-between">
            {[{ label: 'Today', m: 0 }, { label: 'Month 6', m: 6 }, { label: 'Month 12', m: 12 }].map(({ label, m }) => (
              <button
                key={m}
                onClick={() => setTimelineMonth(m)}
                className="text-[12px] font-medium transition-colors"
                style={{ color: timelineMonth === m ? 'var(--cc-accent)' : 'var(--cc-text-muted)' }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── 3. INITIATIVE SIMULATOR WITH TOGGLES ─────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="rounded-2xl p-6 lg:p-8"
        style={{ background: 'var(--cc-bg-card)', border: '1px solid var(--cc-border)' }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-[15px] font-semibold" style={{ color: 'var(--cc-text)' }}>Initiative Simulator</h2>
            <p className="mt-1 text-[12px]" style={{ color: 'var(--cc-text-secondary)' }}>Toggle initiatives on/off to model savings scenarios</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="rounded-xl px-4 py-2" style={{ background: 'var(--cc-green-dim)' }}>
              <span className="text-[11px] font-medium" style={{ color: 'var(--cc-text-secondary)' }}>Selected: </span>
              <span className="font-mono text-[16px] font-bold" style={{ color: 'var(--cc-green)' }}>
                {fmtCompact(selectedSavings)}
              </span>
              <span className="text-[11px]" style={{ color: 'var(--cc-text-tertiary)' }}> of {fmtCompact(totalPossibleSavings)}</span>
            </div>
            <button
              onClick={() => setEnabledOpps(new Set(companyOpps.map(o => o.name)))}
              className="text-[11px] font-medium px-3 py-1.5 rounded-lg transition-colors"
              style={{ color: 'var(--cc-accent)', background: 'rgba(66,133,244,0.1)' }}
            >
              Select All
            </button>
            <button
              onClick={() => setEnabledOpps(new Set())}
              className="text-[11px] font-medium px-3 py-1.5 rounded-lg transition-colors"
              style={{ color: 'var(--cc-text-tertiary)', background: 'var(--cc-bg-elevated)' }}
            >
              Clear
            </button>
          </div>
        </div>

        <div className="space-y-1">
          {companyOpps.map((opp, i) => {
            const enabled = enabledOpps.has(opp.name);
            const sc = statusColors[opp.status];
            return (
              <motion.div
                key={opp.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.32 + i * 0.03 }}
                className="flex items-center gap-4 rounded-xl px-4 py-3 transition-colors"
                style={{
                  background: enabled ? 'var(--cc-bg-elevated)' : 'transparent',
                  border: `1px solid ${enabled ? 'var(--cc-border-hover)' : 'var(--cc-border)'}`,
                }}
              >
                {/* Toggle */}
                <button
                  onClick={() => toggleOpp(opp.name)}
                  className="relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors duration-200"
                  style={{ background: enabled ? 'var(--cc-green)' : 'var(--cc-text-muted)' }}
                >
                  <span
                    className="inline-block h-3.5 w-3.5 rounded-full shadow transition-transform duration-200"
                    style={{
                      background: 'var(--cc-text)',
                      transform: enabled ? 'translateX(18px)' : 'translateX(3px)',
                    }}
                  />
                </button>

                {/* Name */}
                <span className="flex-1 text-[13px] font-medium" style={{ color: enabled ? 'var(--cc-text)' : 'var(--cc-text-muted)' }}>
                  {opp.name}
                </span>

                {/* Category badge */}
                <span className="hidden sm:inline-block rounded-full px-2.5 py-0.5 text-[10px] font-medium" style={{ background: sc.bg, color: sc.text }}>
                  {opp.category}
                </span>

                {/* Savings */}
                <span className="font-mono text-[13px] font-semibold shrink-0" style={{ color: enabled ? 'var(--cc-green)' : 'var(--cc-text-muted)' }}>
                  {fmtCompact(opp.savings)}/yr
                </span>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* ── 4. WHAT-IF ASSUMPTION SLIDERS ────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.35 }}
        className="rounded-2xl p-6 lg:p-8"
        style={{ background: 'var(--cc-bg-card)', border: '1px solid var(--cc-border)' }}
      >
        <h2 className="text-[15px] font-semibold mb-1" style={{ color: 'var(--cc-text)' }}>What-If Assumptions</h2>
        <p className="text-[12px] mb-6" style={{ color: 'var(--cc-text-secondary)' }}>Adjust variables to model different scenarios</p>

        <div className="space-y-6">
          {/* Implementation Timeline */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[12px] font-medium" style={{ color: 'var(--cc-text-secondary)' }}>Implementation Timeline</span>
              <span className="font-mono text-[14px] font-bold" style={{ color: 'var(--cc-accent)' }}>{implTimeline} months</span>
            </div>
            <input
              type="range"
              min={6}
              max={18}
              step={1}
              value={implTimeline}
              onChange={(e) => setImplTimeline(Number(e.target.value))}
              className="cc-slider w-full"
              style={{
                background: `linear-gradient(to right, var(--cc-accent) 0%, var(--cc-accent) ${((implTimeline - 6) / 12) * 100}%, var(--cc-border) ${((implTimeline - 6) / 12) * 100}%, var(--cc-border) 100%)`,
              }}
            />
            <div className="flex justify-between mt-1">
              <span className="text-[10px]" style={{ color: 'var(--cc-text-muted)' }}>6 months</span>
              <span className="text-[10px]" style={{ color: 'var(--cc-text-muted)' }}>18 months</span>
            </div>
          </div>

          {/* Divisions in Scope */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[12px] font-medium" style={{ color: 'var(--cc-text-secondary)' }}>Divisions in Scope</span>
              <span className="font-mono text-[14px] font-bold" style={{ color: 'var(--cc-accent)' }}>{divisionsInScope} of {company.opCos}</span>
            </div>
            <input
              type="range"
              min={1}
              max={Math.max(company.opCos, 1)}
              step={1}
              value={divisionsInScope}
              onChange={(e) => setDivisionsInScope(Number(e.target.value))}
              className="cc-slider w-full"
              style={{
                background: `linear-gradient(to right, var(--cc-accent) 0%, var(--cc-accent) ${((divisionsInScope - 1) / Math.max(company.opCos - 1, 1)) * 100}%, var(--cc-border) ${((divisionsInScope - 1) / Math.max(company.opCos - 1, 1)) * 100}%, var(--cc-border) 100%)`,
              }}
            />
            <div className="flex justify-between mt-1">
              <span className="text-[10px]" style={{ color: 'var(--cc-text-muted)' }}>1</span>
              <span className="text-[10px]" style={{ color: 'var(--cc-text-muted)' }}>{company.opCos}</span>
            </div>
          </div>

          {/* Automation Aggressiveness */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[12px] font-medium" style={{ color: 'var(--cc-text-secondary)' }}>Automation Aggressiveness</span>
              <span className="font-mono text-[14px] font-bold" style={{ color: 'var(--cc-accent)' }}>{automationAggr.toFixed(1)}x</span>
            </div>
            <input
              type="range"
              min={0.5}
              max={1.5}
              step={0.1}
              value={automationAggr}
              onChange={(e) => setAutomationAggr(Number(e.target.value))}
              className="cc-slider w-full"
              style={{
                background: `linear-gradient(to right, var(--cc-accent) 0%, var(--cc-accent) ${((automationAggr - 0.5) / 1.0) * 100}%, var(--cc-border) ${((automationAggr - 0.5) / 1.0) * 100}%, var(--cc-border) 100%)`,
              }}
            />
            <div className="flex justify-between mt-1">
              <span className="text-[10px]" style={{ color: 'var(--cc-text-muted)' }}>0.5x</span>
              <span className="text-[10px]" style={{ color: 'var(--cc-text-muted)' }}>1.5x</span>
            </div>
          </div>
        </div>

        {/* Computed total */}
        <div className="mt-6 rounded-xl px-5 py-4 flex items-center justify-between" style={{ background: 'var(--cc-green-dim)', border: '1px solid rgba(16,185,129,0.2)' }}>
          <span className="text-[13px] font-semibold" style={{ color: 'var(--cc-green)' }}>Adjusted Savings Projection</span>
          <span className="font-mono text-[22px] font-bold" style={{ color: 'var(--cc-green)' }}>{fmtCompact(selectedSavings)}/yr</span>
        </div>
      </motion.section>

      {/* ── 5. PRIORITY MATRIX + 6. RADAR CHART (side by side) ──── */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {/* Priority Matrix (Scatter Plot) */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="rounded-2xl p-6"
          style={{ background: 'var(--cc-bg-card)', border: '1px solid var(--cc-border)' }}
        >
          <h2 className="text-[15px] font-semibold mb-1" style={{ color: 'var(--cc-text)' }}>Priority Matrix</h2>
          <p className="text-[12px] mb-4" style={{ color: 'var(--cc-text-secondary)' }}>Impact vs Effort — bubble size = savings</p>
          <div className="relative h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 20, right: 20, bottom: 30, left: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                <XAxis
                  type="number"
                  dataKey="effortNum"
                  domain={[0.5, 3.5]}
                  ticks={[1, 2, 3]}
                  tickFormatter={(v: number) => ['', 'Low', 'Medium', 'High'][v] || ''}
                  tick={{ fill: '#9CA3AF', fontSize: 11 }}
                  axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                  tickLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                  label={{ value: 'Effort', position: 'insideBottom', offset: -20, fill: '#6B7280', fontSize: 11 }}
                />
                <YAxis
                  type="number"
                  dataKey="savings"
                  tickFormatter={(v: number) => fmtCompact(v).replace('$', '')}
                  tick={{ fill: '#9CA3AF', fontSize: 11 }}
                  axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                  tickLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                  label={{ value: 'Savings', angle: -90, position: 'insideLeft', offset: 10, fill: '#6B7280', fontSize: 11 }}
                />
                <Tooltip content={<ScatterTooltipContent />} cursor={false} />
                <Scatter data={scatterData}>
                  {scatterData.map((entry, idx) => (
                    <Cell
                      key={`cell-${idx}`}
                      fill={scatterColors[entry.status] || '#6B7280'}
                      fillOpacity={0.7}
                      r={Math.sqrt(entry.size) * 2}
                    />
                  ))}
                </Scatter>
              </ScatterChart>
            </ResponsiveContainer>
            {/* Quadrant labels */}
            <div className="absolute top-2 left-12 text-[9px] font-medium" style={{ color: 'var(--cc-green)', opacity: 0.5 }}>HIGH IMPACT / LOW EFFORT</div>
            <div className="absolute top-2 right-4 text-[9px] font-medium" style={{ color: 'var(--cc-yellow)', opacity: 0.5 }}>HIGH IMPACT / HIGH EFFORT</div>
            <div className="absolute bottom-8 left-12 text-[9px] font-medium" style={{ color: 'var(--cc-text-muted)', opacity: 0.5 }}>LOW IMPACT / LOW EFFORT</div>
            <div className="absolute bottom-8 right-4 text-[9px] font-medium" style={{ color: 'var(--cc-red)', opacity: 0.5 }}>LOW IMPACT / HIGH EFFORT</div>
          </div>
          {/* Legend */}
          <div className="mt-3 flex items-center gap-4">
            {[{ label: 'Automated', color: '#10B981' }, { label: 'In Progress', color: '#F59E0B' }, { label: 'Identified', color: '#6B7280' }].map(l => (
              <div key={l.label} className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: l.color }} />
                <span className="text-[10px]" style={{ color: 'var(--cc-text-tertiary)' }}>{l.label}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Radar Chart (Competitive Benchmarking) */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.45 }}
          className="rounded-2xl p-6"
          style={{ background: 'var(--cc-bg-card)', border: '1px solid var(--cc-border)' }}
        >
          <h2 className="text-[15px] font-semibold mb-1" style={{ color: 'var(--cc-text)' }}>AI Readiness Benchmark</h2>
          <p className="text-[12px] mb-4" style={{ color: 'var(--cc-text-secondary)' }}>Current vs target vs industry average</p>
          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="70%">
                <PolarGrid stroke="rgba(255,255,255,0.08)" />
                <PolarAngleAxis dataKey="category" tick={{ fill: '#9CA3AF', fontSize: 11 }} />
                <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: '#6B7280', fontSize: 9 }} axisLine={false} />
                <Radar name="Industry Avg" dataKey="industry" stroke="#6B7280" fill="#6B7280" fillOpacity={0.1} strokeDasharray="4 4" strokeWidth={1} />
                <Radar name="Current" dataKey="current" stroke="#EF4444" fill="#EF4444" fillOpacity={0.15} strokeWidth={2} />
                <Radar name="Target" dataKey="target" stroke="#4285F4" fill="#4285F4" fillOpacity={0.1} strokeWidth={2} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          {/* Legend */}
          <div className="mt-2 flex items-center justify-center gap-6">
            {[{ label: 'Current', color: '#EF4444' }, { label: 'Target', color: '#4285F4' }, { label: 'Industry Avg', color: '#6B7280' }].map(l => (
              <div key={l.label} className="flex items-center gap-1.5">
                <div className="w-3 h-[2px]" style={{ background: l.color }} />
                <span className="text-[10px]" style={{ color: 'var(--cc-text-tertiary)' }}>{l.label}</span>
              </div>
            ))}
          </div>
        </motion.section>
      </div>

      {/* ── 7. PEER BENCHMARKING ─────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <h2 className="text-[15px] font-semibold mb-5" style={{ color: 'var(--cc-text)' }}>Peer Benchmarks</h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {peerCaseStudies.map((study, i) => (
            <motion.div
              key={study.headline}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.52 + i * 0.06 }}
              className="rounded-2xl p-5"
              style={{
                background: 'var(--cc-bg-card)',
                border: '1px solid var(--cc-border)',
                borderLeft: '3px solid var(--cc-accent)',
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                {study.icon}
                <span className="font-mono text-[16px] font-bold" style={{ color: 'var(--cc-text)' }}>{study.headline}</span>
              </div>
              <p className="text-[12px] leading-relaxed" style={{ color: 'var(--cc-text-secondary)' }}>{study.description}</p>
              <div className="mt-3 flex items-center gap-2">
                <span className="rounded-full px-2 py-0.5 text-[10px] font-medium" style={{ background: 'rgba(66,133,244,0.1)', color: 'var(--cc-accent)' }}>
                  {study.timeline}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="mt-3 text-[10px] italic" style={{ color: 'var(--cc-text-muted)' }}>Based on UpSkiller client data. Company details anonymized.</p>
      </motion.section>

      {/* ── 8. GANTT TIMELINE ────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.55 }}
        className="rounded-2xl p-6 lg:p-8"
        style={{ background: 'var(--cc-bg-card)', border: '1px solid var(--cc-border)' }}
      >
        <h2 className="text-[15px] font-semibold mb-1" style={{ color: 'var(--cc-text)' }}>Transformation Roadmap</h2>
        <p className="text-[12px] mb-6" style={{ color: 'var(--cc-text-secondary)' }}>12-month implementation timeline</p>

        {/* Gantt bars */}
        <div className="space-y-4">
          {companyRoadmap.map((phase, i) => {
            const isActive = phase.status === 'active';
            const quarterWidth = '25%';
            return (
              <motion.div
                key={phase.quarter}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.57 + i * 0.06 }}
              >
                <div className="flex items-center gap-4">
                  {/* Quarter label */}
                  <div className="w-16 shrink-0">
                    <span
                      className="inline-block rounded-full px-2.5 py-0.5 text-[11px] font-bold"
                      style={{
                        background: isActive ? 'var(--cc-accent)' : 'var(--cc-bg-elevated)',
                        color: isActive ? '#fff' : 'var(--cc-text-tertiary)',
                      }}
                    >
                      {phase.quarter}
                    </span>
                  </div>

                  {/* Gantt bar container */}
                  <div className="flex-1 relative">
                    <div
                      className="rounded-lg px-4 py-3 relative overflow-hidden"
                      style={{
                        width: quarterWidth,
                        marginLeft: `${i * 25}%`,
                        background: isActive ? 'rgba(66,133,244,0.15)' : 'var(--cc-bg-elevated)',
                        border: `1px solid ${isActive ? 'rgba(66,133,244,0.3)' : 'var(--cc-border)'}`,
                      }}
                    >
                      {/* "Now" marker for active phase */}
                      {isActive && (
                        <div className="absolute top-0 left-[30%] w-[2px] h-full" style={{ background: 'var(--cc-accent)' }}>
                          <span className="absolute -top-4 -left-3 text-[8px] font-bold" style={{ color: 'var(--cc-accent)' }}>NOW</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Phase details below bar */}
                <div className="ml-20 mt-1.5">
                  <p className="text-[12px] font-semibold" style={{ color: isActive ? 'var(--cc-text)' : 'var(--cc-text-secondary)' }}>
                    {phase.title}
                  </p>
                  <div className="mt-1 flex flex-wrap gap-x-4 gap-y-0.5">
                    {phase.items.map(item => (
                      <span key={item} className="text-[11px]" style={{ color: isActive ? 'var(--cc-text-secondary)' : 'var(--cc-text-muted)' }}>
                        &bull; {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Progress indicator */}
        <div className="mt-8 flex items-center gap-3">
          <div className="h-[3px] flex-1 rounded-full" style={{ background: 'var(--cc-border)' }}>
            <div className="h-full w-1/4 rounded-full" style={{ background: 'var(--cc-accent)' }} />
          </div>
          <span className="shrink-0 text-[12px] font-medium" style={{ color: 'var(--cc-text-tertiary)' }}>
            {(() => {
              const activeIdx = companyRoadmap.findIndex(p => p.status === 'active');
              const phase = activeIdx >= 0 ? companyRoadmap[activeIdx] : companyRoadmap[0];
              return `Phase ${activeIdx >= 0 ? activeIdx + 1 : 1} of ${companyRoadmap.length} — ${phase?.title || 'Planning'}`;
            })()}
          </span>
        </div>
      </motion.section>

      {/* ── 9. AI INSIGHT CARDS ──────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
      >
        <h2 className="text-[15px] font-semibold mb-5" style={{ color: 'var(--cc-text)' }}>AI-Generated Insights</h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {/* Insight 1: Most expensive legacy system */}
          {mostExpensiveLegacy && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.62 }}
              className="rounded-2xl p-5"
              style={{
                background: 'var(--cc-bg-card)',
                border: '1px solid var(--cc-border)',
                borderLeft: '3px solid var(--cc-accent)',
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="h-4 w-4" style={{ color: 'var(--cc-yellow)' }} />
                <span className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: 'var(--cc-text-tertiary)' }}>Legacy System Alert</span>
              </div>
              <p className="text-[13px] leading-relaxed" style={{ color: 'var(--cc-text-secondary)' }}>
                <span style={{ color: 'var(--cc-text)' }} className="font-semibold">{mostExpensiveLegacy.name}</span> is the highest-cost legacy system at{' '}
                <span className="font-mono font-semibold" style={{ color: 'var(--cc-red)' }}>{fmtCompact(mostExpensiveLegacy.annualCost)}/yr</span> with a modernization score of{' '}
                <span className="font-mono font-semibold" style={{ color: 'var(--cc-yellow)' }}>{mostExpensiveLegacy.score}/10</span>.
                Migration complexity is {mostExpensiveLegacy.integrationComplexity.toLowerCase()}.
              </p>
            </motion.div>
          )}

          {/* Insight 2: Highest savings opportunity */}
          {highestSavingsOpp && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.68 }}
              className="rounded-2xl p-5"
              style={{
                background: 'var(--cc-bg-card)',
                border: '1px solid var(--cc-border)',
                borderLeft: '3px solid var(--cc-accent)',
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-4 w-4" style={{ color: 'var(--cc-green)' }} />
                <span className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: 'var(--cc-text-tertiary)' }}>Top Opportunity</span>
              </div>
              <p className="text-[13px] leading-relaxed" style={{ color: 'var(--cc-text-secondary)' }}>
                <span style={{ color: 'var(--cc-text)' }} className="font-semibold">{highestSavingsOpp.name}</span> represents the largest savings opportunity at{' '}
                <span className="font-mono font-semibold" style={{ color: 'var(--cc-green)' }}>{fmtCompact(highestSavingsOpp.savings)}/yr</span> with{' '}
                <span className="font-mono font-semibold">{highestSavingsOpp.confidence}%</span> confidence.
                Time to value: {highestSavingsOpp.timeToValue} weeks.
              </p>
            </motion.div>
          )}

          {/* Insight 3: Best AI-ready dimension */}
          {bestAiDimension && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.74 }}
              className="rounded-2xl p-5"
              style={{
                background: 'var(--cc-bg-card)',
                border: '1px solid var(--cc-border)',
                borderLeft: '3px solid var(--cc-accent)',
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Target className="h-4 w-4" style={{ color: 'var(--cc-accent)' }} />
                <span className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: 'var(--cc-text-tertiary)' }}>Strongest Dimension</span>
              </div>
              <p className="text-[13px] leading-relaxed" style={{ color: 'var(--cc-text-secondary)' }}>
                <span style={{ color: 'var(--cc-text)' }} className="font-semibold">{bestAiDimension.category}</span> is the strongest AI readiness dimension at{' '}
                <span className="font-mono font-semibold" style={{ color: 'var(--cc-accent)' }}>{bestAiDimension.score}/{bestAiDimension.maxScore}</span>.
                This can serve as the foundation for accelerating adoption in weaker areas.
              </p>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* ── Competitive Framing ────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.65 }}
        className="rounded-xl px-6 py-5"
        style={{ background: 'var(--cc-bg-elevated)', border: '1px solid var(--cc-border)' }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 rounded-full" style={{ background: 'var(--cc-text-muted)' }} />
            <div>
              <p className="text-[12px]" style={{ color: 'var(--cc-text-muted)' }}>Traditional consulting</p>
              <p className="text-[13px]" style={{ color: 'var(--cc-text-tertiary)' }}>12 weeks, $500K &rarr; PowerPoint deck</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 rounded-full" style={{ background: 'var(--cc-accent)' }} />
            <div>
              <p className="text-[12px]" style={{ color: 'var(--cc-accent)' }}>UpSkiller AI</p>
              <p className="text-[13px]" style={{ color: 'var(--cc-text)' }}>5 days to first insights, &lt;$750/month &rarr; Live platform</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── Drill-Down Panel ──────────────────────────────────── */}
      <DrillDownPanel type={activeDrillDown} onClose={() => setActiveDrillDown(null)} />

      {/* ── Division Deep-Dive Drawer ────────────────────────── */}
      <DivisionDrawer entity={selectedDivision} onClose={() => setSelectedDivision(null)} />
    </div>
  );
}
