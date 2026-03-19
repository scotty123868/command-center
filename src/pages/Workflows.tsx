import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  AlertTriangle,
  Link2,
} from 'lucide-react';
import { workflows, workflowSummary } from '../data/constants';
import type { Workflow, AutomationLevel } from '../data/constants';

/* ── helpers ─────────────────────────────────────────── */

const fmt = (n: number) =>
  n >= 1_000_000
    ? `$${(n / 1_000_000).toFixed(1)}M`
    : n >= 1_000
    ? `$${(n / 1_000).toFixed(0)}K`
    : `$${n}`;

const levelMeta: Record<
  AutomationLevel,
  { dot: string; bg: string; text: string; label: string; color: string }
> = {
  full: {
    dot: 'bg-emerald-500',
    bg: 'bg-emerald-50',
    text: 'text-emerald-700',
    label: 'Fully Automatable',
    color: '#10B981',
  },
  'human-in-loop': {
    dot: 'bg-amber-500',
    bg: 'bg-amber-50',
    text: 'text-amber-700',
    label: 'Human-in-the-Loop',
    color: '#F59E0B',
  },
  'human-required': {
    dot: 'bg-red-500',
    bg: 'bg-red-50',
    text: 'text-red-700',
    label: 'Human-Required',
    color: '#EF4444',
  },
};

/* ── section header ──────────────────────────────────── */

function SectionHeader({ label, color = 'border-gray-200' }: { label: string; color?: string }) {
  return (
    <div className="flex items-center gap-3 pt-6 pb-2">
      <span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">
        {label}
      </span>
      <div className={`h-px flex-1 ${color}`} style={{ backgroundColor: 'rgba(0,0,0,0.06)' }} />
    </div>
  );
}

/* ── donut stat ──────────────────────────────────────── */

function DonutStat({ value, label, size = 80, strokeWidth = 7, color = '#4285F4' }: {
  value: string;
  label: string;
  size?: number;
  strokeWidth?: number;
  color?: string;
}) {
  const r = (size - strokeWidth) / 2;
  const circ = 2 * Math.PI * r;
  return (
    <div className="flex items-center gap-4">
      <svg width={size} height={size} className="shrink-0">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#F3F4F6" strokeWidth={strokeWidth} />
        <circle
          cx={size / 2} cy={size / 2} r={r} fill="none"
          stroke={color} strokeWidth={strokeWidth}
          strokeDasharray={circ} strokeDashoffset={circ * 0.15}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <div>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        <p className="text-xs text-gray-500">{label}</p>
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
      className="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden"
    >
      {/* ── collapsed row ── */}
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-4 px-7 py-5 text-left hover:bg-gray-50/50 transition-colors"
      >
        <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${meta.dot}`} />
        <span className="flex-1 text-[15px] font-semibold text-gray-900 truncate">{wf.name}</span>
        <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${meta.bg} ${meta.text}`}>
          {wf.routing}
        </span>
        <span className="text-sm font-bold text-emerald-600 tabular-nums">{fmt(wf.savings)}/yr</span>

        {/* mini automation bar */}
        <div className="hidden sm:flex items-center gap-2 w-32">
          <div className="h-1.5 flex-1 rounded-full bg-gray-100 overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{ width: `${wf.automationPercent}%`, backgroundColor: meta.color }}
            />
          </div>
          <span className="text-[10px] font-semibold text-gray-400 tabular-nums w-7 text-right">
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
              {/* ── CURRENT PROCESS ── */}
              <SectionHeader label="Current Process" />
              <div className="border-l-2 border-gray-200 pl-5 mt-2 space-y-1.5">
                {wf.currentProcess.map((step, i) => (
                  <div key={i} className="flex gap-3 text-sm text-gray-700 leading-relaxed">
                    <span className="shrink-0 text-[11px] font-semibold text-gray-400 tabular-nums w-5 text-right pt-0.5">
                      {i + 1}.
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>

              {/* ── BOTTLENECKS ── */}
              <SectionHeader label="Bottlenecks Identified" />
              <div className="border-l-2 border-red-200 pl-5 mt-2 space-y-1.5">
                {wf.bottlenecks.map((b, i) => (
                  <div key={i} className="flex gap-2.5 text-sm text-gray-700 leading-relaxed">
                    <span className="shrink-0 mt-1 h-1.5 w-1.5 rounded-full bg-red-400" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              {/* ── AI ARCHITECTURE ── */}
              <SectionHeader label="Proposed AI Architecture" />
              <div className="mt-2 rounded-xl border border-blue-100 bg-blue-50/60 px-5 py-4 border-l-4 border-l-blue-400">
                <p className="text-sm leading-relaxed text-gray-700">{wf.aiArchitecture}</p>
              </div>

              {/* ── IMPLEMENTATION PLAN ── */}
              <SectionHeader label="Implementation Plan" />
              <div className="border-l-2 border-emerald-200 pl-5 mt-2 space-y-3">
                {wf.implementationPlan.map((p, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[11px] font-bold text-emerald-600">Phase {i + 1}</span>
                      <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 tabular-nums">
                        {p.weeks} wks
                      </span>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-gray-800">{p.phase}</span>
                      <span className="text-sm text-gray-500"> — {p.description}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* ── RISK ASSESSMENT ── */}
              <SectionHeader label="Risk Assessment" />
              <div className="border-l-2 border-amber-200 pl-5 mt-2 space-y-1.5">
                {wf.risks.map((r, i) => (
                  <div key={i} className="flex gap-2.5 text-sm text-gray-700 leading-relaxed">
                    <AlertTriangle size={13} className="shrink-0 mt-0.5 text-amber-500" />
                    <span>{r}</span>
                  </div>
                ))}
              </div>

              {/* ── DEPENDENCIES ── */}
              <SectionHeader label="Dependencies" />
              <div className="border-l-2 border-gray-200 pl-5 mt-2 space-y-1.5">
                {wf.dependencies.map((d, i) => (
                  <div key={i} className="flex gap-2.5 text-sm text-gray-700 leading-relaxed">
                    <Link2 size={13} className="shrink-0 mt-0.5 text-gray-400" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>

              {/* ── COST MODEL ── */}
              <SectionHeader label="Cost Model" />
              <div className="mt-3 space-y-3">
                <p className="text-xs font-medium text-gray-500 mb-2">{wf.costShift}</p>
                {/* current cost bar */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-gray-500">Current</span>
                    <span className="font-semibold text-gray-700 tabular-nums">{fmt(wf.currentCost)}/yr</span>
                  </div>
                  <div className="h-3 w-full rounded-full bg-gray-100 overflow-hidden">
                    <div className="h-full rounded-full bg-gray-400" style={{ width: '100%' }} />
                  </div>
                </div>
                {/* reduced cost bar */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-gray-500">After AI</span>
                    <span className="font-semibold text-gray-700 tabular-nums">{fmt(reducedCost)}/yr</span>
                  </div>
                  <div className="relative h-3 w-full rounded-full bg-gray-100 overflow-hidden">
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
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">
                      Automation Coverage
                    </span>
                    <span className="text-xs font-bold tabular-nums" style={{ color: meta.color }}>
                      {wf.automationPercent}%
                    </span>
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-gray-100 overflow-hidden">
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
  return (
    <div className="space-y-8">
      {/* ── page title ── */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Workflow Scoping Documents</h1>
        <p className="mt-1 text-sm text-gray-500">
          AI automation discovery across 47 workflows — detailed scoping, architecture, and implementation plans.
        </p>
      </div>

      {/* ── discovery summary row ── */}
      <div className="flex items-center gap-10 flex-wrap">
        {/* total workflows donut */}
        <DonutStat value="47" label="Workflows Analyzed" color="#4285F4" />

        {/* type split — stacked bar */}
        <div className="flex-1 min-w-[260px]">
          <p className="text-xs text-gray-500 mb-2">Split by Automation Type</p>
          <div className="flex h-5 w-full overflow-hidden rounded-full">
            <div
              className="flex items-center justify-center text-[10px] font-bold text-white"
              style={{ width: `${(18 / 47) * 100}%`, backgroundColor: '#10B981' }}
            >
              18
            </div>
            <div
              className="flex items-center justify-center text-[10px] font-bold text-white"
              style={{ width: `${(21 / 47) * 100}%`, backgroundColor: '#F59E0B' }}
            >
              21
            </div>
            <div
              className="flex items-center justify-center text-[10px] font-bold text-white"
              style={{ width: `${(8 / 47) * 100}%`, backgroundColor: '#EF4444' }}
            >
              8
            </div>
          </div>
          <div className="flex gap-4 mt-1.5 text-[10px] text-gray-500">
            <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-emerald-500" />Full</span>
            <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-amber-500" />Human-in-Loop</span>
            <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-red-500" />Human-Required</span>
          </div>
        </div>

        {/* total savings donut */}
        <DonutStat value={fmt(workflowSummary.potentialSavings) + '/yr'} label="Total Savings" color="#10B981" />
      </div>

      {/* ── workflow scoping cards ── */}
      <div className="space-y-3">
        {workflows.map((wf: Workflow, i: number) => (
          <WorkflowCard key={wf.name} wf={wf} index={i} />
        ))}
      </div>
    </div>
  );
}
