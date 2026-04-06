import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Building2, ChevronRight, ChevronDown, Lightbulb, Sparkles, Target } from 'lucide-react';
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
    0: { savings: 0, scoreBefore: 52, scoreAfter: 52, workflows: 0, automationReady: 0, waste: 2_800_000 },
    6: { savings: 2_500_000, scoreBefore: 52, scoreAfter: 69, workflows: 35, automationReady: 9, waste: 1_800_000 },
    12: { savings: 5_800_000, scoreBefore: 52, scoreAfter: 86, workflows: 62, automationReady: 18, waste: 820_000 },
  },
  northwood: {
    0: { savings: 0, scoreBefore: 39, scoreAfter: 39, workflows: 0, automationReady: 0, waste: 8_400_000 },
    6: { savings: 9_600_000, scoreBefore: 39, scoreAfter: 58, workflows: 62, automationReady: 16, waste: 5_800_000 },
    12: { savings: 22_000_000, scoreBefore: 39, scoreAfter: 78, workflows: 124, automationReady: 32, waste: 3_000_000 },
  },
  pinnacle: {
    0: { savings: 0, scoreBefore: 26, scoreAfter: 26, workflows: 0, automationReady: 0, waste: 9_200_000 },
    6: { savings: 10_400_000, scoreBefore: 26, scoreAfter: 48, workflows: 78, automationReady: 21, waste: 6_400_000 },
    12: { savings: 24_000_000, scoreBefore: 26, scoreAfter: 74, workflows: 156, automationReady: 42, waste: 3_100_000 },
  },
  atlas: {
    0: { savings: 0, scoreBefore: 37, scoreAfter: 37, workflows: 0, automationReady: 0, waste: 8_200_000 },
    6: { savings: 9_900_000, scoreBefore: 37, scoreAfter: 60, workflows: 40, automationReady: 13, waste: 4_100_000 },
    12: { savings: 22_000_000, scoreBefore: 37, scoreAfter: 84, workflows: 86, automationReady: 28, waste: 2_400_000 },
  },
  northbridge: {
    0: { savings: 0, scoreBefore: 52, scoreAfter: 52, workflows: 0, automationReady: 0, waste: 18_000_000 },
    6: { savings: 24_900_000, scoreBefore: 52, scoreAfter: 71, workflows: 85, automationReady: 22, waste: 9_000_000 },
    12: { savings: 55_500_000, scoreBefore: 52, scoreAfter: 88, workflows: 184, automationReady: 48, waste: 1_600_000 },
  },
  estonia: {
    0: { savings: 0, scoreBefore: 68, scoreAfter: 68, workflows: 0, automationReady: 0, waste: 3_000_000 },
    6: { savings: 4_000_000, scoreBefore: 68, scoreAfter: 80, workflows: 58, automationReady: 32, waste: 1_500_000 },
    12: { savings: 8_000_000, scoreBefore: 68, scoreAfter: 94, workflows: 126, automationReady: 62, waste: 320_000 },
  },
  hcc: {
    0: { savings: 0, scoreBefore: 29, scoreAfter: 29, workflows: 0, automationReady: 0, waste: 980_000 },
    6: { savings: 1_050_000, scoreBefore: 29, scoreAfter: 51, workflows: 11, automationReady: 3, waste: 520_000 },
    12: { savings: 2_100_000, scoreBefore: 29, scoreAfter: 78, workflows: 22, automationReady: 6, waste: 220_000 },
  },
  hrsi: {
    0: { savings: 0, scoreBefore: 35, scoreAfter: 35, workflows: 0, automationReady: 0, waste: 380_000 },
    6: { savings: 410_000, scoreBefore: 35, scoreAfter: 56, workflows: 4, automationReady: 1, waste: 200_000 },
    12: { savings: 820_000, scoreBefore: 35, scoreAfter: 80, workflows: 8, automationReady: 2, waste: 100_000 },
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
    0: { savings: 0, scoreBefore: 39, scoreAfter: 39, workflows: 0, automationReady: 0, waste: 480_000 },
    6: { savings: 430_000, scoreBefore: 39, scoreAfter: 59, workflows: 5, automationReady: 2, waste: 260_000 },
    12: { savings: 860_000, scoreBefore: 39, scoreAfter: 82, workflows: 10, automationReady: 3, waste: 110_000 },
  },
  he: {
    0: { savings: 0, scoreBefore: 32, scoreAfter: 32, workflows: 0, automationReady: 0, waste: 180_000 },
    6: { savings: 180_000, scoreBefore: 32, scoreAfter: 53, workflows: 2, automationReady: 1, waste: 100_000 },
    12: { savings: 360_000, scoreBefore: 32, scoreAfter: 76, workflows: 4, automationReady: 1, waste: 55_000 },
  },
  gg: {
    0: { savings: 0, scoreBefore: 28, scoreAfter: 28, workflows: 0, automationReady: 0, waste: 120_000 },
    6: { savings: 120_000, scoreBefore: 28, scoreAfter: 49, workflows: 1, automationReady: 0, waste: 65_000 },
    12: { savings: 240_000, scoreBefore: 28, scoreAfter: 72, workflows: 2, automationReady: 1, waste: 32_000 },
  },
  'nb-aerospace': {
    0: { savings: 0, scoreBefore: 46, scoreAfter: 46, workflows: 0, automationReady: 0, waste: 6_100_000 },
    6: { savings: 6_800_000, scoreBefore: 46, scoreAfter: 65, workflows: 23, automationReady: 5, waste: 3_100_000 },
    12: { savings: 15_100_000, scoreBefore: 46, scoreAfter: 85, workflows: 50, automationReady: 10, waste: 900_000 },
  },
  'nb-energy': {
    0: { savings: 0, scoreBefore: 38, scoreAfter: 38, workflows: 0, automationReady: 0, waste: 7_200_000 },
    6: { savings: 7_700_000, scoreBefore: 38, scoreAfter: 59, workflows: 23, automationReady: 6, waste: 3_600_000 },
    12: { savings: 17_200_000, scoreBefore: 38, scoreAfter: 84, workflows: 52, automationReady: 12, waste: 1_100_000 },
  },
  'nb-financial': {
    0: { savings: 0, scoreBefore: 63, scoreAfter: 63, workflows: 0, automationReady: 0, waste: 4_600_000 },
    6: { savings: 4_300_000, scoreBefore: 63, scoreAfter: 77, workflows: 17, automationReady: 6, waste: 2_300_000 },
    12: { savings: 9_600_000, scoreBefore: 63, scoreAfter: 91, workflows: 36, automationReady: 12, waste: 700_000 },
  },
  'nb-health': {
    0: { savings: 0, scoreBefore: 55, scoreAfter: 55, workflows: 0, automationReady: 0, waste: 5_600_000 },
    6: { savings: 6_100_000, scoreBefore: 55, scoreAfter: 71, workflows: 21, automationReady: 7, waste: 2_800_000 },
    12: { savings: 13_600_000, scoreBefore: 55, scoreAfter: 89, workflows: 44, automationReady: 14, waste: 750_000 },
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
  brazil: {
    0: { savings: 0, scoreBefore: 45, scoreAfter: 45, workflows: 0, automationReady: 0, waste: 260_000_000 },
    6: { savings: 324_000_000, scoreBefore: 45, scoreAfter: 64, workflows: 176, automationReady: 62, waste: 130_000_000 },
    12: { savings: 720_000_000, scoreBefore: 45, scoreAfter: 82, workflows: 380, automationReady: 134, waste: 26_000_000 },
  },
  'br-receita': {
    0: { savings: 0, scoreBefore: 55, scoreAfter: 55, workflows: 0, automationReady: 0, waste: 42_000_000 },
    6: { savings: 63_000_000, scoreBefore: 55, scoreAfter: 72, workflows: 30, automationReady: 14, waste: 21_000_000 },
    12: { savings: 140_000_000, scoreBefore: 55, scoreAfter: 88, workflows: 64, automationReady: 28, waste: 6_000_000 },
  },
  'br-sus': {
    0: { savings: 0, scoreBefore: 37, scoreAfter: 37, workflows: 0, automationReady: 0, waste: 58_000_000 },
    6: { savings: 81_000_000, scoreBefore: 37, scoreAfter: 56, workflows: 38, automationReady: 15, waste: 29_000_000 },
    12: { savings: 180_000_000, scoreBefore: 37, scoreAfter: 76, workflows: 82, automationReady: 32, waste: 8_500_000 },
  },
  'br-bndes': {
    0: { savings: 0, scoreBefore: 52, scoreAfter: 52, workflows: 0, automationReady: 0, waste: 32_000_000 },
    6: { savings: 45_000_000, scoreBefore: 52, scoreAfter: 70, workflows: 22, automationReady: 8, waste: 16_000_000 },
    12: { savings: 100_000_000, scoreBefore: 52, scoreAfter: 86, workflows: 48, automationReady: 16, waste: 4_800_000 },
  },
  'br-serpro': {
    0: { savings: 0, scoreBefore: 54, scoreAfter: 54, workflows: 0, automationReady: 0, waste: 28_000_000 },
    6: { savings: 36_000_000, scoreBefore: 54, scoreAfter: 70, workflows: 21, automationReady: 9, waste: 14_000_000 },
    12: { savings: 80_000_000, scoreBefore: 54, scoreAfter: 86, workflows: 46, automationReady: 18, waste: 4_000_000 },
  },
  'br-inss': {
    0: { savings: 0, scoreBefore: 41, scoreAfter: 41, workflows: 0, automationReady: 0, waste: 28_000_000 },
    6: { savings: 36_000_000, scoreBefore: 41, scoreAfter: 60, workflows: 26, automationReady: 11, waste: 14_000_000 },
    12: { savings: 80_000_000, scoreBefore: 41, scoreAfter: 78, workflows: 56, automationReady: 22, waste: 4_000_000 },
  },
  'br-datasus': {
    0: { savings: 0, scoreBefore: 43, scoreAfter: 43, workflows: 0, automationReady: 0, waste: 22_000_000 },
    6: { savings: 27_000_000, scoreBefore: 43, scoreAfter: 62, workflows: 19, automationReady: 8, waste: 11_000_000 },
    12: { savings: 60_000_000, scoreBefore: 43, scoreAfter: 80, workflows: 42, automationReady: 16, waste: 3_200_000 },
  },
  'br-defesa': {
    0: { savings: 0, scoreBefore: 50, scoreAfter: 50, workflows: 0, automationReady: 0, waste: 18_000_000 },
    6: { savings: 22_000_000, scoreBefore: 50, scoreAfter: 68, workflows: 16, automationReady: 7, waste: 9_000_000 },
    12: { savings: 50_000_000, scoreBefore: 50, scoreAfter: 84, workflows: 34, automationReady: 14, waste: 2_600_000 },
  },
  'br-anatel': {
    0: { savings: 0, scoreBefore: 46, scoreAfter: 46, workflows: 0, automationReady: 0, waste: 12_000_000 },
    6: { savings: 13_500_000, scoreBefore: 46, scoreAfter: 64, workflows: 13, automationReady: 5, waste: 6_000_000 },
    12: { savings: 30_000_000, scoreBefore: 46, scoreAfter: 82, workflows: 28, automationReady: 10, waste: 1_800_000 },
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
      className={`group relative flex flex-col justify-between rounded-2xl p-4 sm:p-6 transition-all duration-200 ${onClick ? 'cursor-pointer hover:border-white/10' : ''}`}
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
    'eCMS (Computer Guidance)': 7, 'Salesforce CRM': 8, 'No Data Lake': 9, 'Tableau': 8, 'Manual Dev Workflows': 9, 'Concur': 8,
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
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full transition-colors cursor-pointer"
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
  // useNavigate must be called before any early returns (hooks rule)
  const drawerNavigate = useNavigate();
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
            className="fixed right-0 top-0 z-50 h-full w-full sm:w-[480px] overflow-y-auto rounded-l-2xl p-6 sm:p-8 shadow-2xl"
            style={{ background: 'var(--cc-bg-card)', borderLeft: '1px solid var(--cc-border)' }}
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full transition-colors cursor-pointer"
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
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: 'var(--cc-text-tertiary)' }}>FTEs</p>
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

            {/* Cross-links */}
            <div className="mt-6 flex flex-col gap-2">
              <button
                onClick={() => {
                  onClose();
                  drawerNavigate('/roi-summary');
                }}
                className="flex items-center gap-1.5 text-[13px] font-medium transition-colors cursor-pointer"
                style={{ color: 'var(--cc-accent)' }}
              >
                View ROI Analysis
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ─── Peer Benchmarking Data ─────────────────────────────────────────────────

type PeerCaseStudy = { icon: React.ReactNode; headline: string; description: string; timeline: string };

const peerCaseStudiesByIndustry: Record<string, PeerCaseStudy[]> = {
  default: [
    {
      icon: <Building2 className="h-5 w-5" style={{ color: 'var(--cc-accent)' }} />,
      headline: '31% Idle Time Reduction',
      description: 'Mid-market infrastructure company (2,500 FTEs) achieved 31% idle time reduction through AI-powered crew scheduling and fleet optimization.',
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
  ],
  Insurance: [
    {
      icon: <Building2 className="h-5 w-5" style={{ color: 'var(--cc-accent)' }} />,
      headline: '42% Claims Processing Faster',
      description: 'Regional P&C insurer (8,000 FTEs) cut claims cycle time by 42% with AI-powered intake and automated adjudication.',
      timeline: '10 months',
    },
    {
      icon: <Target className="h-5 w-5" style={{ color: 'var(--cc-green)' }} />,
      headline: '$18M/yr Savings',
      description: 'National insurance carrier achieved $18M annual savings through fraud detection AI, underwriting automation, and license consolidation.',
      timeline: '12 months',
    },
    {
      icon: <Sparkles className="h-5 w-5" style={{ color: 'var(--cc-yellow)' }} />,
      headline: 'AI Readiness Score 76',
      description: 'Insurance group (12,000 FTEs) raised AI readiness from 38 to 76 through claims digitization and legacy mainframe migration.',
      timeline: '14 months',
    },
  ],
  Healthcare: [
    {
      icon: <Building2 className="h-5 w-5" style={{ color: 'var(--cc-accent)' }} />,
      headline: '60% Documentation Burden Reduced',
      description: 'Multi-specialty health system (15,000 FTEs) cut physician documentation time by 60% with ambient AI clinical notes.',
      timeline: '6 months',
    },
    {
      icon: <Target className="h-5 w-5" style={{ color: 'var(--cc-green)' }} />,
      headline: '$22M/yr Savings',
      description: 'Regional health network achieved $22M annual savings through revenue cycle AI, prior auth automation, and scheduling optimization.',
      timeline: '12 months',
    },
    {
      icon: <Sparkles className="h-5 w-5" style={{ color: 'var(--cc-yellow)' }} />,
      headline: 'AI Readiness Score 68',
      description: 'Healthcare system (10,000 FTEs) raised AI readiness from 24 to 68 through Epic optimization and clinical AI deployment.',
      timeline: '14 months',
    },
  ],
};

function getPeerCaseStudies(industry: string): PeerCaseStudy[] {
  if (industry.includes('Insurance')) return peerCaseStudiesByIndustry.Insurance;
  if (industry.includes('Healthcare')) return peerCaseStudiesByIndustry.Healthcare;
  return peerCaseStudiesByIndustry.default;
}

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
  const navigate = useNavigate();
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
  const [expandedOpp, setExpandedOpp] = useState<string | null>(null);

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
    <div className="space-y-8 pb-20">
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, var(--cc-accent-glow) 0%, transparent 70%)' }} />

        <div className="relative z-10 px-5 py-6 sm:px-8 sm:py-10 lg:px-12 lg:py-14">
          {/* Company name + timestamp */}
          <div className="flex items-center justify-between mb-2">
            <h1
              className="text-[22px] sm:text-[28px] lg:text-[36px] font-bold tracking-tight"
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
            Assessed March 2026 &middot; {company.employees.toLocaleString()} FTEs &middot; {company.opCos} Division{company.opCos === 1 ? '' : 's'}
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
            <div className="mt-6 lg:mt-0 flex flex-wrap gap-5 sm:gap-8 lg:gap-12">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: 'var(--cc-text-muted)' }}>AI Score</p>
                <div className="mt-1 flex items-baseline gap-1">
                  <span className="font-mono text-[24px] font-bold" style={{ color: 'var(--cc-text-muted)' }}>{companyKpis.techScoreBefore}</span>
                  <ArrowRight className="h-4 w-4 mx-1" style={{ color: 'var(--cc-text-muted)' }} />
                  <span className="font-mono text-[24px] font-bold" style={{ color: 'var(--cc-accent)' }}>
                    <AnimatedCounter value={companyKpis.techScoreAfter} duration={1600} />
                  </span>
                  <span className="text-[9px] font-medium ml-1" style={{ color: 'var(--cc-text-muted)' }}>(Projected)</span>
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
      >
        <button
          onClick={() => setShowCostOfInaction(!showCostOfInaction)}
          className="flex items-center gap-3 rounded-xl px-4 py-3 w-full cursor-pointer transition-all duration-300"
          style={{
            background: showCostOfInaction ? 'var(--cc-red-dim)' : 'var(--cc-bg-card)',
            border: showCostOfInaction ? '1px solid rgba(239, 68, 68, 0.3)' : '1px solid var(--cc-border)',
          }}
        >
          {/* Toggle track */}
          <span
            className="relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors duration-200"
            style={{ background: showCostOfInaction ? 'var(--cc-red)' : 'var(--cc-text-muted)' }}
          >
            {/* Toggle knob */}
            <span
              className="inline-block h-4 w-4 rounded-full bg-white shadow-sm transition-transform duration-200"
              style={{
                transform: showCostOfInaction ? 'translateX(22px)' : 'translateX(4px)',
              }}
            />
          </span>
          <div className="flex flex-col items-start">
            <span className="text-[13px] font-semibold" style={{ color: showCostOfInaction ? 'var(--cc-red)' : 'var(--cc-text)' }}>
              Cost of Inaction
            </span>
            <span className="text-[11px]" style={{ color: 'var(--cc-text-tertiary)' }}>
              {showCostOfInaction ? '3-year projection shown below' : 'Show projected losses if no action taken'}
            </span>
          </div>
        </button>
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
            <div className="rounded-2xl p-4 sm:p-6" style={{ background: 'var(--cc-red-dim)', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
              <h2 className="text-[14px] font-semibold" style={{ color: 'var(--cc-red)' }}>
                If No Action Is Taken — 3-Year Projection
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {(() => {
                  const companyRoi = getRoiSummary(company.id);
                  const year1 = companyKpis.totalSavings;
                  const year2 = companyRoi.year2Projected;
                  const year3 = Math.round(companyRoi.year2Projected * 1.18);
                  const total = year1 + year2 + year3;
                  return [
                    { label: 'Year 1 Opportunity Cost', value: fmtCompact(year1), sub: 'Total savings forgone' },
                    { label: 'Year 2 Projected', value: fmtCompact(year2), sub: 'Automation scaling + maintenance drop' },
                    { label: 'Year 3 Projected', value: fmtCompact(year3), sub: 'Full maturity compounding' },
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
                  className="group cursor-pointer rounded-2xl p-4 sm:p-5 transition-colors hover:border-white/10"
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
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
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
                      {sub.employees.toLocaleString()} FTEs
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


      {/* ── Timeline Scrubber (dark-themed) ────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.25 }}
        className="rounded-2xl p-4 sm:p-6"
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
                className="text-[12px] font-medium transition-colors cursor-pointer"
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
        className="rounded-2xl p-4 sm:p-6"
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
              className="text-[11px] font-medium px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
              style={{ color: 'var(--cc-accent)', background: 'rgba(66,133,244,0.1)' }}
            >
              Select All
            </button>
            <button
              onClick={() => setEnabledOpps(new Set())}
              className="text-[11px] font-medium px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
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
            const isExpanded = expandedOpp === opp.name;

            // Generate analysis data from opportunity properties
            const categoryAssumptions: Record<string, { benchmark: string; laborCost: string; reductionPct: string }> = {
              'Workflow Automation': {
                benchmark: 'Industry avg labor cost per automated workflow',
                laborCost: fmtCompact(Math.round(opp.savings * 1.3)),
                reductionPct: `${Math.round(60 + opp.confidence * 0.3)}%`,
              },
              'License Audit': {
                benchmark: 'Unused seat reclamation rate across SaaS portfolio',
                laborCost: fmtCompact(Math.round(opp.savings * 1.15)),
                reductionPct: `${Math.round(70 + opp.confidence * 0.2)}%`,
              },
              'Data Infrastructure': {
                benchmark: 'Data ops overhead reduction via modernization',
                laborCost: fmtCompact(Math.round(opp.savings * 1.4)),
                reductionPct: `${Math.round(40 + opp.confidence * 0.4)}%`,
              },
              'Tech Stack': {
                benchmark: 'Platform consolidation savings benchmark',
                laborCost: fmtCompact(Math.round(opp.savings * 1.25)),
                reductionPct: `${Math.round(50 + opp.confidence * 0.35)}%`,
              },
            };
            const catData = categoryAssumptions[opp.category] || categoryAssumptions['Workflow Automation'];
            const savingsLow = fmtCompact(Math.round(opp.savings * 0.75));
            const savingsHigh = fmtCompact(Math.round(opp.savings * 1.25));

            return (
              <motion.div
                key={opp.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.32 + i * 0.03 }}
                className="rounded-xl transition-colors overflow-hidden"
                style={{
                  background: enabled ? 'var(--cc-bg-elevated)' : 'transparent',
                  border: `1px solid ${isExpanded ? 'var(--cc-accent)' : enabled ? 'var(--cc-border-hover)' : 'var(--cc-border)'}`,
                }}
              >
                {/* Main row */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 px-4 py-3">
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    {/* Toggle */}
                    <button
                      onClick={() => toggleOpp(opp.name)}
                      className="relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors duration-200 cursor-pointer"
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

                    {/* Clickable name area */}
                    <button
                      onClick={() => setExpandedOpp(isExpanded ? null : opp.name)}
                      className="flex items-center gap-2 flex-1 min-w-0 text-left group"
                    >
                      <span className="flex-1 text-[13px] font-medium truncate" style={{ color: enabled ? 'var(--cc-text)' : 'var(--cc-text-muted)' }}>
                        {opp.name}
                      </span>
                      {i === 0 && !isExpanded && (
                        <span className="hidden group-hover:inline-block text-[10px] shrink-0" style={{ color: 'var(--cc-text-muted)' }}>
                          Click for analysis
                        </span>
                      )}
                      <motion.span
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="shrink-0"
                      >
                        <ChevronDown size={14} style={{ color: 'var(--cc-text-muted)' }} />
                      </motion.span>
                    </button>
                  </div>

                  <div className="flex items-center gap-3 pl-[52px] sm:pl-0">
                    {/* Category badge */}
                    <span className="hidden sm:inline-block rounded-full px-2.5 py-0.5 text-[10px] font-medium" style={{ background: sc.bg, color: sc.text }}>
                      {opp.category}
                    </span>

                    {/* Savings */}
                    <span className="font-mono text-[13px] font-semibold shrink-0" style={{ color: enabled ? 'var(--cc-green)' : 'var(--cc-text-muted)' }}>
                      {fmtCompact(opp.savings)}/yr
                    </span>
                  </div>
                </div>

                {/* Expandable analysis panel */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 pt-1 space-y-4" style={{ borderTop: '1px solid var(--cc-border)' }}>
                        {/* Header */}
                        <h4 className="text-[12px] font-semibold tracking-wide uppercase" style={{ color: 'var(--cc-accent)' }}>
                          Source Analysis: {opp.name}
                        </h4>

                        {/* Metric cards */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {[
                            { label: 'Confidence', value: `${opp.confidence}%`, color: opp.confidence >= 85 ? 'var(--cc-green)' : opp.confidence >= 70 ? 'var(--cc-yellow)' : 'var(--cc-text-secondary)' },
                            { label: 'Effort', value: opp.effort, color: opp.effort === 'Low' ? 'var(--cc-green)' : opp.effort === 'Medium' ? 'var(--cc-yellow)' : '#f87171' },
                            { label: 'Timeline', value: `${opp.timeToValue} wks`, color: 'var(--cc-accent)' },
                            { label: 'Priority', value: `${opp.priority}/10`, color: opp.priority >= 8 ? 'var(--cc-green)' : 'var(--cc-text-secondary)' },
                          ].map(m => (
                            <div
                              key={m.label}
                              className="rounded-lg px-3 py-2.5 text-center"
                              style={{ background: 'var(--cc-bg-card)', border: '1px solid var(--cc-border)' }}
                            >
                              <div className="text-[10px] font-medium uppercase tracking-wider mb-1" style={{ color: 'var(--cc-text-muted)' }}>{m.label}</div>
                              <div className="font-mono text-[16px] font-bold" style={{ color: m.color }}>{m.value}</div>
                            </div>
                          ))}
                        </div>

                        {/* How we calculated this */}
                        <div>
                          <h5 className="text-[11px] font-semibold uppercase tracking-wider mb-1.5" style={{ color: 'var(--cc-text-secondary)' }}>How We Calculated This</h5>
                          <ul className="space-y-1 text-[12px]" style={{ color: 'var(--cc-text-secondary)' }}>
                            <li>&#8226; Base: {catData.benchmark}</li>
                            <li>&#8226; Scale factor: {company.employees.toLocaleString()} FTEs across {company.opCos} division{company.opCos === 1 ? '' : 's'}</li>
                            <li>&#8226; Confidence adjustment: {opp.confidence}% certainty based on data completeness</li>
                          </ul>
                        </div>

                        {/* Assumptions */}
                        <div>
                          <h5 className="text-[11px] font-semibold uppercase tracking-wider mb-1.5" style={{ color: 'var(--cc-text-secondary)' }}>Assumptions</h5>
                          <ul className="space-y-1 text-[12px]" style={{ color: 'var(--cc-text-secondary)' }}>
                            <li>&#8226; Current {opp.category === 'License Audit' ? 'unused license spend' : opp.category === 'Tech Stack' ? 'platform overlap' : 'manual process'} costs ~{catData.laborCost}/yr in {opp.category === 'License Audit' ? 'wasted seats' : opp.category === 'Tech Stack' ? 'redundant tools' : 'labor'}</li>
                            <li>&#8226; {opp.category === 'License Audit' ? 'Seat reclamation' : opp.category === 'Tech Stack' ? 'Consolidation' : 'AI automation'} reduces {opp.category === 'License Audit' ? 'license waste' : opp.category === 'Data Infrastructure' ? 'data ops overhead' : 'processing time'} by {catData.reductionPct}</li>
                            <li>&#8226; Implementation requires {opp.timeToValue} weeks at {opp.effort.toLowerCase()} effort</li>
                          </ul>
                        </div>

                        {/* Comparable outcomes */}
                        <div
                          className="rounded-lg px-4 py-3 text-[12px] italic"
                          style={{ background: 'rgba(66,133,244,0.06)', color: 'var(--cc-text-secondary)', border: '1px solid rgba(66,133,244,0.12)' }}
                        >
                          &ldquo;Companies with {company.employees.toLocaleString()}+ employees typically realize {savingsLow}&ndash;{savingsHigh} in {opp.category.toLowerCase()} within 12 months.&rdquo;
                        </div>

                        {/* Link to relevant detail page based on category */}
                        <button
                          onClick={() => {
                            const categoryRoutes: Record<string, string> = {
                              'Workflow Automation': '/workflows',
                              'License Audit': '/license-audit',
                              'Tech Stack': '/tech-stack',
                              'Data Infrastructure': '/data-flow',
                            };
                            navigate(categoryRoutes[opp.category] || '/workflows');
                          }}
                          className="inline-flex items-center gap-1.5 text-[12px] font-medium transition-colors hover:underline cursor-pointer"
                          style={{ color: 'var(--cc-accent)' }}
                        >
                          View {opp.category === 'License Audit' ? 'License Audit' : opp.category === 'Tech Stack' ? 'Tech Stack' : opp.category === 'Data Infrastructure' ? 'Data Flow' : 'Workflow'} Details
                          <ArrowRight size={12} />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
        className="rounded-2xl p-4 sm:p-6"
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
        {/* Priority Matrix */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="rounded-2xl p-5 sm:p-6"
          style={{ background: 'var(--cc-bg-card)', border: '1px solid var(--cc-border)' }}
        >
          <h2 className="text-[15px] font-semibold mb-1" style={{ color: 'var(--cc-text)' }}>Priority Matrix</h2>
          <p className="text-[12px] mb-4" style={{ color: 'var(--cc-text-secondary)' }}>Impact vs Effort — bubble size = savings</p>

          {/* Mobile: list layout (scatter charts don't work on 375px) */}
          <div className="sm:hidden space-y-2">
            {[...scatterData].sort((a, b) => b.savings - a.savings).map((entry) => (
              <div
                key={entry.name}
                className="flex items-center gap-3 rounded-lg px-3 py-2.5"
                style={{ background: 'var(--cc-bg-elevated)', border: '1px solid var(--cc-border)' }}
              >
                <div
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{ background: scatterColors[entry.status] || '#6B7280' }}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-[12px] font-medium truncate" style={{ color: 'var(--cc-text)' }}>{entry.name}</p>
                  <p className="text-[10px]" style={{ color: 'var(--cc-text-tertiary)' }}>
                    Effort: {entry.effort}
                  </p>
                </div>
                <span className="font-mono text-[12px] font-semibold shrink-0" style={{ color: 'var(--cc-green)' }}>
                  {fmtCompact(entry.savings)}
                </span>
              </div>
            ))}
          </div>

          {/* Desktop: scatter chart */}
          <div className="hidden sm:block relative h-[320px]">
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
            {/* Quadrant labels — positioned outside chart plot area */}
            <div className="hidden xl:block absolute top-0 left-12 text-[8px] font-medium pointer-events-none" style={{ color: 'var(--cc-green)', opacity: 0.35 }}>HIGH IMPACT / LOW EFFORT</div>
            <div className="hidden xl:block absolute top-0 right-4 text-[8px] font-medium pointer-events-none" style={{ color: 'var(--cc-yellow)', opacity: 0.35 }}>HIGH IMPACT / HIGH EFFORT</div>
            <div className="hidden xl:block absolute bottom-10 left-12 text-[8px] font-medium pointer-events-none" style={{ color: 'var(--cc-text-muted)', opacity: 0.35 }}>LOW IMPACT / LOW EFFORT</div>
            <div className="hidden xl:block absolute bottom-10 right-4 text-[8px] font-medium pointer-events-none" style={{ color: 'var(--cc-red)', opacity: 0.35 }}>LOW IMPACT / HIGH EFFORT</div>
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
          {/* Mobile: list layout */}
          <div className="sm:hidden space-y-2">
            {radarData.map((d) => (
              <div key={d.category} className="rounded-lg px-3 py-2.5" style={{ background: 'var(--cc-bg-elevated)', border: '1px solid var(--cc-border)' }}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[12px] font-medium" style={{ color: 'var(--cc-text)' }}>{d.category}</span>
                  <span className="font-mono text-[12px] font-semibold" style={{ color: d.current < 40 ? 'var(--cc-red)' : d.current < 60 ? 'var(--cc-yellow)' : 'var(--cc-green)' }}>
                    {d.current}/100
                  </span>
                </div>
                <div className="h-1.5 rounded-full" style={{ background: 'var(--cc-border)' }}>
                  <div className="h-full rounded-full relative" style={{ width: `${d.current}%`, background: d.current < 40 ? '#EF4444' : d.current < 60 ? '#F59E0B' : '#10B981' }}>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0.5 h-3 rounded-full" style={{ background: '#4285F4', left: `${((d.target - d.current) / d.current) * 100}%` }} />
                  </div>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-[10px]" style={{ color: 'var(--cc-text-muted)' }}>Target: {d.target}</span>
                  <span className="text-[10px]" style={{ color: 'var(--cc-text-muted)' }}>Industry: {d.industry}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: radar chart */}
          <div className="hidden sm:block h-[320px]">
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
          {getPeerCaseStudies(company.industry).map((study, i) => (
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
        className="rounded-2xl p-4 sm:p-6"
        style={{ background: 'var(--cc-bg-card)', border: '1px solid var(--cc-border)' }}
      >
        <h2 className="text-[15px] font-semibold mb-1" style={{ color: 'var(--cc-text)' }}>Transformation Roadmap</h2>
        <p className="text-[12px] mb-6" style={{ color: 'var(--cc-text-secondary)' }}>12-month implementation timeline</p>

        {/* Mobile: vertical timeline */}
        <div className="sm:hidden space-y-3">
          {companyRoadmap.map((phase, i) => {
            const isActive = phase.status === 'active';
            return (
              <motion.div
                key={phase.quarter}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.57 + i * 0.06 }}
                className="flex gap-3"
              >
                <div className="flex flex-col items-center">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0"
                    style={{
                      background: isActive ? 'var(--cc-accent)' : 'var(--cc-bg-elevated)',
                      color: isActive ? '#fff' : 'var(--cc-text-tertiary)',
                      border: isActive ? 'none' : '1px solid var(--cc-border)',
                    }}
                  >
                    {phase.quarter.replace('Q', '')}
                  </div>
                  {i < companyRoadmap.length - 1 && (
                    <div className="w-px flex-1 my-1" style={{ background: isActive ? 'var(--cc-accent)' : 'var(--cc-border)' }} />
                  )}
                </div>
                <div className="pb-3 flex-1 min-w-0">
                  <p className="text-[12px] font-semibold" style={{ color: isActive ? 'var(--cc-text)' : 'var(--cc-text-secondary)' }}>
                    {phase.title}
                  </p>
                  <div className="mt-1 flex flex-wrap gap-x-3 gap-y-0.5">
                    {phase.items.map(item => (
                      <span key={item} className="text-[10px]" style={{ color: isActive ? 'var(--cc-text-secondary)' : 'var(--cc-text-muted)' }}>
                        &bull; {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Desktop: Gantt bars */}
        <div className="hidden sm:block space-y-4">
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
          {/* Insight 1: Most expensive legacy system → Tech Stack page */}
          {mostExpensiveLegacy && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.62 }}
              whileHover={{ y: -2 }}
              onClick={() => navigate('/tech-stack')}
              className="rounded-2xl p-5 cursor-pointer transition-shadow hover:shadow-lg"
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
              <p className="mt-2 flex items-center gap-1 text-[11px] font-medium" style={{ color: 'var(--cc-accent)' }}>
                View Tech Stack Analysis <ArrowRight className="w-3 h-3" />
              </p>
            </motion.div>
          )}

          {/* Insight 2: Highest savings opportunity → Workflows page */}
          {highestSavingsOpp && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.68 }}
              whileHover={{ y: -2 }}
              onClick={() => navigate('/workflows')}
              className="rounded-2xl p-5 cursor-pointer transition-shadow hover:shadow-lg"
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
              <p className="mt-2 flex items-center gap-1 text-[11px] font-medium" style={{ color: 'var(--cc-accent)' }}>
                View Workflow Analysis <ArrowRight className="w-3 h-3" />
              </p>
            </motion.div>
          )}

          {/* Insight 3: Best AI-ready dimension → Data Flow page */}
          {bestAiDimension && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.74 }}
              whileHover={{ y: -2 }}
              onClick={() => navigate('/data-flow')}
              className="rounded-2xl p-5 cursor-pointer transition-shadow hover:shadow-lg"
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
              <p className="mt-2 flex items-center gap-1 text-[11px] font-medium" style={{ color: 'var(--cc-accent)' }}>
                View Data Flow Intelligence <ArrowRight className="w-3 h-3" />
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
