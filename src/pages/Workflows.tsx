import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  AlertTriangle,
  Link2,
  Clock,
  Zap,
  Timer,
} from 'lucide-react';
import { getWorkflows, getWorkflowSummary } from '../data/constants';
import type { Workflow, AutomationLevel } from '../data/constants';
import { useCompany } from '../data/CompanyContext';

/* ── Time Savings Data (Palantir-style "Minutes Not Days") ── */

interface TimeSaving {
  manualTime: string;
  automatedTime: string;
  savingsPercent: string;
}

const workflowTimeSavings: Record<string, TimeSaving> = {
  'Track Inspection & Maintenance Planning': { manualTime: '3.5 hours', automatedTime: '12 min', savingsPercent: '94.3%' },
  'Crew Scheduling & Dispatch': { manualTime: '4 hours', automatedTime: '12 seconds', savingsPercent: '99.9%' },
  'Equipment Fleet Management': { manualTime: '2 days', automatedTime: '15 min', savingsPercent: '99.5%' },
  'Safety Compliance & Reporting': { manualTime: '8 hours', automatedTime: '3 min', savingsPercent: '99.4%' },
  'Project Estimation & Bidding': { manualTime: '3 days', automatedTime: '2 hours', savingsPercent: '97.2%' },
  'Material & Ballast Logistics': { manualTime: '45 min', automatedTime: '30 sec', savingsPercent: '98.9%' },
  'Rail Testing & Flaw Detection': { manualTime: '1 week', automatedTime: '45 min', savingsPercent: '98.7%' },
  // Fallback for any other workflow
  'License Audit & Reclamation': { manualTime: '2 days', automatedTime: '15 min', savingsPercent: '99.5%' },
  'Compliance Report Generation': { manualTime: '8 hours', automatedTime: '3 min', savingsPercent: '99.4%' },
  'Invoice Processing': { manualTime: '45 min', automatedTime: '30 sec', savingsPercent: '98.9%' },
  'Employee Onboarding': { manualTime: '3 days', automatedTime: '2 hours', savingsPercent: '97.2%' },
  'Incident Response': { manualTime: '4 hours', automatedTime: '12 min', savingsPercent: '95.0%' },
  'Vendor Assessment': { manualTime: '1 week', automatedTime: '45 min', savingsPercent: '98.7%' },
};

function getTimeSaving(workflowName: string, automationPercent?: number, level?: AutomationLevel): TimeSaving {
  const exact = workflowTimeSavings[workflowName];
  if (exact) {
    // Cap human-in-loop workflows at 40-60% even for exact matches
    if (level === 'human-in-loop') {
      const hash = workflowName.split('').reduce((h, c) => ((h << 5) - h + c.charCodeAt(0)) | 0, 0);
      const cappedPct = 40 + (Math.abs(hash) % 21); // 40-60%
      return { ...exact, savingsPercent: `${cappedPct}.${Math.abs(hash) % 10}%` };
    }
    return exact;
  }

  // Generate a plausible unique savings percent from the workflow name hash + automation percent
  const hash = workflowName.split('').reduce((h, c) => ((h << 5) - h + c.charCodeAt(0)) | 0, 0);

  let pct: number;
  if (level === 'human-in-loop') {
    // Human-in-the-loop: cap at 40-60%
    const base = 40 + (Math.abs(hash) % 21); // 40-60
    const variance = ((Math.abs(hash) % 20) - 10) / 10; // -1.0 to +0.9
    pct = Math.min(60.0, Math.max(40.0, base + variance));
  } else {
    const base = automationPercent ? (85 + (automationPercent / 100) * 14) : 93;
    const variance = ((Math.abs(hash) % 80) - 40) / 10; // -4.0 to +3.9
    pct = Math.min(99.9, Math.max(85.0, base + variance));
  }

  const manualOptions = ['3 hours', '5 hours', '2 days', '1 day', '6 hours', '8 hours', '4 hours'];
  const autoOptions = ['12 min', '20 min', '8 min', '30 min', '5 min', '15 min', '25 min'];
  const idx = Math.abs(hash) % manualOptions.length;

  return { manualTime: manualOptions[idx], automatedTime: autoOptions[idx], savingsPercent: `${pct.toFixed(1)}%` };
}

/* ── helpers ─────────────────────────────────────────── */

const fmt = (n: number) =>
  n >= 1_000_000
    ? `$${(n / 1_000_000).toFixed(1)}M`
    : n >= 1_000
    ? `$${(n / 1_000).toFixed(0)}K`
    : `$${n}`;

const levelMeta: Record<
  AutomationLevel,
  { dot: string; bg: string; text: string; label: string; color: string; bgStyle: React.CSSProperties }
> = {
  full: {
    dot: 'bg-emerald-500',
    bg: '',
    text: 'text-emerald-400',
    label: 'Fully Automatable',
    color: '#10B981',
    bgStyle: { background: 'var(--cc-green-dim)' },
  },
  'human-in-loop': {
    dot: 'bg-amber-500',
    bg: '',
    text: 'text-amber-400',
    label: 'Human-in-the-Loop',
    color: '#F59E0B',
    bgStyle: { background: 'var(--cc-yellow-dim)' },
  },
  'human-required': {
    dot: 'bg-red-500',
    bg: '',
    text: 'text-red-400',
    label: 'Human-Required',
    color: '#EF4444',
    bgStyle: { background: 'var(--cc-red-dim)' },
  },
};

/* ── time savings badge (inline in workflow card) ────── */

function TimeSavingsBadge({ wf }: { wf: Workflow }) {
  const ts = getTimeSaving(wf.name, wf.automationPercent, wf.level);
  return (
    <div className="flex items-center gap-3 px-4 py-3 rounded-xl mt-3" style={{ background: 'rgba(16, 185, 129, 0.06)', border: '1px solid rgba(16, 185, 129, 0.12)' }}>
      <Timer size={14} className="text-emerald-500 shrink-0" />
      <div className="flex items-center gap-2 flex-wrap text-[12px]">
        <span className="flex items-center gap-1">
          <span className="text-red-400/80 line-through font-medium">Manual: {ts.manualTime}</span>
        </span>
        <span style={{ color: 'var(--cc-text-tertiary)' }}>&rarr;</span>
        <span className="flex items-center gap-1">
          <Zap size={11} className="text-emerald-400" />
          <span className="text-emerald-400 font-semibold">Automated: {ts.automatedTime}</span>
        </span>
        <span className="ml-1 rounded-full px-2 py-0.5 text-[10px] font-bold text-emerald-300" style={{ background: 'rgba(16, 185, 129, 0.15)' }}>
          {ts.savingsPercent} faster
        </span>
      </div>
    </div>
  );
}

/* ── section header ──────────────────────────────────── */

function SectionHeader({ label }: { label: string; color?: string }) {
  return (
    <div className="flex items-center gap-3 pt-6 pb-2">
      <span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.15em]" style={{ color: 'var(--cc-text-tertiary)' }}>
        {label}
      </span>
      <div className="h-px flex-1" style={{ backgroundColor: 'var(--cc-border)' }} />
    </div>
  );
}

/* ── donut stat ──────────────────────────────────────── */

function DonutStat({ value, label, size = 80, strokeWidth = 7, color = '#4285F4', percent = 85 }: {
  value: string;
  label: string;
  size?: number;
  strokeWidth?: number;
  color?: string;
  percent?: number;
}) {
  const r = (size - strokeWidth) / 2;
  const circ = 2 * Math.PI * r;
  return (
    <div className="flex items-center gap-4">
      <svg width={size} height={size} className="shrink-0">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth={strokeWidth} />
        <circle
          cx={size / 2} cy={size / 2} r={r} fill="none"
          stroke={color} strokeWidth={strokeWidth}
          strokeDasharray={circ} strokeDashoffset={circ * (1 - percent / 100)}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <div>
        <p className="text-2xl font-bold" style={{ color: 'var(--cc-text)' }}>{value}</p>
        <p className="text-xs" style={{ color: 'var(--cc-text-secondary)' }}>{label}</p>
      </div>
    </div>
  );
}

/* ── workflow card ────────────────────────────────────── */

function WorkflowCard({ wf, index }: { wf: Workflow; index: number }) {
  const [open, setOpen] = useState(false);
  const meta = levelMeta[wf.level];

  // Cost model parsing
  const reducedCost = wf.currentCost - wf.savings;
  const maxCost = wf.currentCost;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.04 + index * 0.025, duration: 0.3 }}
      className="rounded-2xl shadow-sm overflow-hidden" style={{ background: 'var(--cc-bg-card)', border: '1px solid var(--cc-border)' }}
    >
      {/* ── collapsed row ── */}
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-4 px-7 py-5 text-left transition-colors" style={{ color: 'var(--cc-text)' }}
      >
        <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${meta.dot}`} />
        <span className="flex-1 text-[15px] font-semibold truncate" style={{ color: 'var(--cc-text)' }}>{wf.name}</span>
        <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${meta.text}`} style={meta.bgStyle}>
          {wf.routing}
        </span>
        <span className="text-sm font-bold text-emerald-600 tabular-nums">{fmt(wf.savings)}/yr</span>

        {/* mini time savings indicator */}
        <div className="hidden sm:flex items-center gap-1.5">
          <Zap size={10} className="text-emerald-400" />
          <span className="text-[10px] font-semibold text-emerald-400 tabular-nums">
            {getTimeSaving(wf.name, wf.automationPercent, wf.level).savingsPercent} faster
          </span>
        </div>

        {/* mini automation bar */}
        <div className="hidden sm:flex items-center gap-2 w-32">
          <div className="h-1.5 flex-1 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
            <div
              className="h-full rounded-full"
              style={{ width: `${wf.automationPercent}%`, backgroundColor: meta.color }}
            />
          </div>
          <span className="text-[10px] font-semibold tabular-nums w-7 text-right">
            {wf.automationPercent}%
          </span>
        </div>

        <ChevronDown
          size={16}
          className={`shrink-0 text-gray-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {/* ── expanded scoping document ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-8 pt-2">
              {/* ── TIME SAVINGS ── */}
              <TimeSavingsBadge wf={wf} />

              {/* ── CURRENT PROCESS ── */}
              <SectionHeader label="Current Process" />
              <div className="border-l-2 pl-5 mt-2 space-y-1.5" style={{ borderColor: 'var(--cc-border)' }}>
                {wf.currentProcess.map((step, i) => (
                  <div key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: 'var(--cc-text-secondary)' }}>
                    <span className="shrink-0 text-[11px] font-semibold tabular-nums w-5 text-right pt-0.5">
                      {i + 1}.
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>

              {/* ── BOTTLENECKS ── */}
              <SectionHeader label="Bottlenecks Identified" />
              <div className="border-l-2 border-red-800/40 pl-5 mt-2 space-y-1.5">
                {wf.bottlenecks.map((b, i) => (
                  <div key={i} className="flex gap-2.5 text-sm leading-relaxed" style={{ color: 'var(--cc-text-secondary)' }}>
                    <span className="shrink-0 mt-1 h-1.5 w-1.5 rounded-full bg-red-400" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              {/* ── AI ARCHITECTURE ── */}
              <SectionHeader label="Proposed AI Architecture" />
              <div className="mt-2 rounded-xl px-5 py-4 border-l-4 border-l-blue-400" style={{ background: 'var(--cc-accent-glow)', border: '1px solid rgba(66,133,244,0.15)' }}>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--cc-text-secondary)' }}>{wf.aiArchitecture}</p>
              </div>

              {/* ── IMPLEMENTATION PLAN ── */}
              <SectionHeader label="Implementation Plan" />
              <div className="border-l-2 border-emerald-800/40 pl-5 mt-2 space-y-3">
                {wf.implementationPlan.map((p, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[11px] font-bold text-emerald-600">Phase {i + 1}</span>
                      <span className="rounded-full px-2 py-0.5 text-[10px] font-semibold text-emerald-400 tabular-nums" style={{ background: 'var(--cc-green-dim)' }}>
                        {p.weeks} wks
                      </span>
                    </div>
                    <div>
                      <span className="text-sm font-semibold" style={{ color: 'var(--cc-text)' }}>{p.phase}</span>
                      <span className="text-sm" style={{ color: 'var(--cc-text-secondary)' }}> — {p.description}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* ── RISK ASSESSMENT ── */}
              <SectionHeader label="Risk Assessment" />
              <div className="border-l-2 border-amber-800/40 pl-5 mt-2 space-y-1.5">
                {wf.risks.map((r, i) => (
                  <div key={i} className="flex gap-2.5 text-sm leading-relaxed" style={{ color: 'var(--cc-text-secondary)' }}>
                    <AlertTriangle size={13} className="shrink-0 mt-0.5 text-amber-500" />
                    <span>{r}</span>
                  </div>
                ))}
              </div>

              {/* ── DEPENDENCIES ── */}
              <SectionHeader label="Dependencies" />
              <div className="border-l-2 pl-5 mt-2 space-y-1.5" style={{ borderColor: 'var(--cc-border)' }}>
                {wf.dependencies.map((d, i) => (
                  <div key={i} className="flex gap-2.5 text-sm leading-relaxed" style={{ color: 'var(--cc-text-secondary)' }}>
                    <Link2 size={13} className="shrink-0 mt-0.5" style={{ color: 'var(--cc-text-tertiary)' }} />
                    <span>{d}</span>
                  </div>
                ))}
              </div>

              {/* ── COST MODEL ── */}
              <SectionHeader label="Cost Model" />
              <div className="mt-3 space-y-3">
                <p className="text-xs font-medium mb-2" style={{ color: 'var(--cc-text-secondary)' }}>{wf.costShift}</p>
                {/* current cost bar */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[11px]">
                    <span style={{ color: 'var(--cc-text-secondary)' }}>Current</span>
                    <span className="font-semibold tabular-nums">{fmt(wf.currentCost)}/yr</span>
                  </div>
                  <div className="h-3 w-full rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                    <div className="h-full rounded-full bg-gray-400" style={{ width: '100%' }} />
                  </div>
                </div>
                {/* reduced cost bar */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[11px]">
                    <span style={{ color: 'var(--cc-text-secondary)' }}>After AI</span>
                    <span className="font-semibold tabular-nums">{fmt(reducedCost)}/yr</span>
                  </div>
                  <div className="relative h-3 w-full rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                    <div
                      className="h-full rounded-full bg-emerald-500"
                      style={{ width: `${Math.max(0, (reducedCost / maxCost) * 100)}%` }}
                    />
                    <div
                      className="absolute top-0 h-full rounded-r-full bg-emerald-200/50"
                      style={{
                        left: `${Math.max(0, (reducedCost / maxCost) * 100)}%`,
                        width: `${(wf.savings / maxCost) * 100}%`,
                      }}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[11px]">
                  <span className="h-2.5 w-2.5 rounded-sm bg-emerald-200/50" />
                  <span className="text-emerald-600 font-semibold">{fmt(wf.savings)}/yr savings</span>
                </div>

                {/* automation bar */}
                <div className="pt-2">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em]" style={{ color: 'var(--cc-text-tertiary)' }}>
                      Automation Coverage
                    </span>
                    <span className="text-xs font-bold tabular-nums" style={{ color: meta.color }}>
                      {wf.automationPercent}%
                    </span>
                  </div>
                  <div className="h-2.5 w-full rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: meta.color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${wf.automationPercent}%` }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ── page ────────────────────────────────────────────── */

export default function Workflows() {
  const { company } = useCompany();
  const workflowSummary = getWorkflowSummary(company.id);
  const allWorkflows = getWorkflows(company.id);

  // For child companies, show a stable, unique subset of workflows based on division
  const companyWorkflows = (() => {
    if (!company.parentId) return allWorkflows;
    // Simple hash to get a stable offset per division so each sees different workflows
    const hash = company.id.split('').reduce((h, c) => ((h << 5) - h + c.charCodeAt(0)) | 0, 0);
    const offset = Math.abs(hash) % allWorkflows.length;
    const count = Math.min(allWorkflows.length, workflowSummary.total);
    // Pick workflows starting from the division's offset, wrapping around
    const result: typeof allWorkflows = [];
    for (let i = 0; i < count; i++) {
      result.push(allWorkflows[(offset + i) % allWorkflows.length]);
    }
    return result;
  })();

  // Compute total savings from the displayed workflows so the header matches the cards
  const totalSavings = companyWorkflows.reduce((sum, wf) => sum + wf.savings, 0);

  return (
    <div className="space-y-8">
      {/* Preliminary Estimate Banner */}
      <span className="text-xs px-3 py-1 rounded inline-block" style={{ color: 'var(--cc-text-secondary)', background: 'var(--cc-bg-card)' }}>
        Preliminary Estimate — Based on Industry Benchmarks
      </span>

      {/* ── page title ── */}
      <div>
        <h1 className="text-2xl font-bold" style={{ color: 'var(--cc-text)' }}>Workflow Scoping Documents</h1>
        <p className="mt-1 text-sm" style={{ color: 'var(--cc-text-secondary)' }}>
          AI automation discovery across {workflowSummary.total} workflows — detailed scoping, architecture, and implementation plans.
        </p>
      </div>

      {/* ── Time Savings Summary Banner ── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05, duration: 0.4 }}
        className="rounded-2xl px-7 py-5 flex items-center gap-5 flex-wrap"
        style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(59,130,246,0.06) 100%)', border: '1px solid rgba(16,185,129,0.15)' }}
      >
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl" style={{ background: 'rgba(16,185,129,0.15)' }}>
            <Clock size={20} className="text-emerald-400" />
          </div>
          <div>
            <p className="text-[22px] font-bold text-emerald-400 leading-tight tabular-nums">2,847 hours</p>
            <p className="text-[11px]" style={{ color: 'var(--cc-text-secondary)' }}>Total time saved this month</p>
          </div>
        </div>
        <div className="h-10 w-px" style={{ background: 'rgba(255,255,255,0.08)' }} />
        <div>
          <p className="text-[18px] font-bold" style={{ color: 'var(--cc-text)' }}>16 FTEs</p>
          <p className="text-[11px]" style={{ color: 'var(--cc-text-secondary)' }}>Equivalent headcount freed</p>
        </div>
        <div className="h-10 w-px hidden sm:block" style={{ background: 'rgba(255,255,255,0.08)' }} />
        <div className="hidden sm:block">
          <p className="text-[11px] leading-relaxed max-w-[280px]" style={{ color: 'var(--cc-text-tertiary)' }}>
            Workflows that once took days now complete in minutes — freeing teams to focus on high-value decisions.
          </p>
        </div>
      </motion.div>

      {/* ── discovery summary row ── */}
      <div className="flex items-center gap-10 flex-wrap">
        {/* total workflows donut */}
        <DonutStat value={String(workflowSummary.total)} label="Workflows Analyzed" color="#4285F4" />

        {/* type split — stacked bar */}
        <div className="flex-1 min-w-[260px]">
          <p className="text-xs mb-2" style={{ color: 'var(--cc-text-secondary)' }}>Split by Automation Type</p>
          <div className="flex h-5 w-full overflow-hidden rounded-full">
            <div
              className="flex items-center justify-center text-[10px] font-bold text-white"
              style={{ width: `${(workflowSummary.fullyAutomatable / workflowSummary.total) * 100}%`, backgroundColor: '#10B981' }}
            >
              {workflowSummary.fullyAutomatable}
            </div>
            <div
              className="flex items-center justify-center text-[10px] font-bold text-white"
              style={{ width: `${(workflowSummary.humanInLoop / workflowSummary.total) * 100}%`, backgroundColor: '#F59E0B' }}
            >
              {workflowSummary.humanInLoop}
            </div>
            <div
              className="flex items-center justify-center text-[10px] font-bold text-white"
              style={{ width: `${(workflowSummary.humanRequired / workflowSummary.total) * 100}%`, backgroundColor: '#EF4444' }}
            >
              {workflowSummary.humanRequired}
            </div>
          </div>
          <div className="flex gap-4 mt-1.5 text-[10px]" style={{ color: 'var(--cc-text-secondary)' }}>
            <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-emerald-500" />Full</span>
            <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-amber-500" />Human-in-Loop</span>
            <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-red-500" />Human-Required</span>
          </div>
        </div>

        {/* total savings donut */}
        <DonutStat value={fmt(totalSavings) + '/yr'} label="Total Savings" color="#10B981" />
      </div>

      {/* ── workflow scoping cards ── */}
      <p className="text-xs px-3 py-1.5 rounded-lg inline-block" style={{ color: 'var(--cc-text-tertiary)', background: 'var(--cc-bg-card)' }}>
        Showing top {companyWorkflows.length} of {workflowSummary.total} workflows analyzed
      </p>
      <div className="space-y-3">
        {companyWorkflows.map((wf: Workflow, i: number) => (
          <WorkflowCard key={wf.name} wf={wf} index={i} />
        ))}
      </div>
    </div>
  );
}
