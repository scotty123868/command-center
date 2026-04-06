import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts';
import { ChevronDown, ChevronUp, ShieldAlert, AlertTriangle } from 'lucide-react';
import { getLicenses } from '../data/constants';
import type { License } from '../data/constants';
import { useCompany } from '../data/CompanyContext';
import PreliminaryBanner from '../components/PreliminaryBanner';

const COLORS = ['#EF4444', '#F59E0B', '#4285F4', '#10B981', '#8B5CF6', '#EC4899', '#E8600A'];

function fmt(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`;
  return `$${n}`;
}

function fmtFull(n: number): string {
  return '$' + n.toLocaleString();
}

function actionColor(action: string): string {
  if (action.startsWith('Reclaim')) return 'text-emerald-400';
  if (action.startsWith('Replace')) return 'text-blue-400';
  if (action.startsWith('Downgrade')) return 'text-yellow-400';
  return 'text-gray-400';
}

function actionBgStyle(action: string): React.CSSProperties {
  if (action.startsWith('Reclaim')) return { background: 'var(--cc-green-dim)' };
  if (action.startsWith('Replace')) return { background: 'var(--cc-accent-glow)' };
  if (action.startsWith('Downgrade')) return { background: 'var(--cc-yellow-dim)' };
  return { background: 'var(--cc-bg-input)' };
}

function usagePct(l: License): number {
  return Math.round((l.active90d / l.totalLicenses) * 100);
}

function actionDescription(l: License): string {
  const pct = usagePct(l);
  if (l.action.startsWith('Reclaim'))
    return `${l.inactive} licenses have had zero activity in 90+ days. Reclaiming these seats saves ${fmt(l.annualWaste)}/yr with no impact on active users (${pct}% utilization).`;
  if (l.action.startsWith('Replace') || l.action.startsWith('Migrate'))
    return `Current tool shows low utilization or better alternatives exist. Migrating consolidates spend and improves capability while saving ${fmt(l.annualWaste)}/yr.`;
  if (l.action.startsWith('Downgrade'))
    return `${l.inactive} users on Enterprise tier have usage patterns consistent with a lower plan. Downgrading these seats preserves access while saving ${fmt(l.annualWaste)}/yr.`;
  if (l.action.startsWith('Decommission'))
    return `Legacy system with ${l.inactive} unused seats. Decommissioning saves ${fmt(l.annualWaste)}/yr and reduces maintenance burden.`;
  return `${l.action} — saves ${fmt(l.annualWaste)}/yr.`;
}

function TrendSparkline({ data }: { data: number[] }) {
  const chartData = data.map((v, i) => ({ v, i }));
  return (
    <div style={{ width: 60, height: 24 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData} margin={{ top: 2, right: 2, bottom: 2, left: 2 }}>
          <Line
            type="monotone"
            dataKey="v"
            stroke="#6B7280"
            strokeWidth={1.5}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default function LicenseAudit() {
  const { company } = useCompany();
  const licenses = getLicenses(company.id);
  const totalWaste = licenses.reduce((sum: number, l: License) => sum + l.annualWaste, 0);
  const donutData = licenses.map((l: License) => ({
    name: l.vendor,
    value: l.annualWaste,
  }));
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const toggle = (i: number) => setExpandedRow(expandedRow === i ? null : i);

  return (
    <div className="space-y-8 pb-20">
      {/* Preliminary Estimate Banner */}
      <PreliminaryBanner />

      {/* ── Hero Section ──────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="rounded-2xl shadow-sm p-4 sm:p-6 flex flex-col lg:flex-row items-center gap-6 sm:gap-10" style={{ background: 'var(--cc-bg-card)', border: '1px solid var(--cc-border)' }}
      >
        {/* Left — hero number */}
        <div className="flex-1 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
            <ShieldAlert className="w-7 h-7 text-[#EF4444]" />
            <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--cc-text-secondary)' }}>
              License Waste Summary
            </span>
          </div>
          <p className="text-5xl md:text-6xl font-mono font-bold text-[#EF4444] leading-none">
            {fmt(totalWaste)}/yr
          </p>
          <p className="mt-3 text-lg" style={{ color: 'var(--cc-text-secondary)' }}>in recoverable license waste</p>
        </div>

        {/* Right — donut chart */}
        <div className="w-full lg:w-[380px] h-[280px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={donutData}
                cx="50%"
                cy="45%"
                innerRadius={65}
                outerRadius={90}
                dataKey="value"
                paddingAngle={2}
                stroke="none"
              >
                {donutData.map((_, idx) => (
                  <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value) => fmtFull(value as number)}
                contentStyle={{ borderRadius: 8, border: '1px solid var(--cc-border)', boxShadow: '0 2px 8px rgba(0,0,0,.3)', background: 'var(--cc-bg-card)', color: 'var(--cc-text)' }}
              />
              <Legend
                verticalAlign="bottom"
                iconType="circle"
                iconSize={8}
                wrapperStyle={{ fontSize: 12 }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* ── License Table ─────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, delay: 0.08 }}
        className="rounded-2xl shadow-sm overflow-hidden" style={{ background: 'var(--cc-bg-card)', border: '1px solid var(--cc-border)' }}
      >
        <div className="px-4 sm:px-6 pt-6 pb-4">
          <h2 className="text-xl font-semibold" style={{ color: 'var(--cc-text)' }}>License Inventory</h2>
          <p className="text-sm mt-1" style={{ color: 'var(--cc-text-secondary)' }}>Tap any item for detailed breakdown</p>
        </div>

        {/* Mobile: stacked cards */}
        <div className="sm:hidden px-4 pb-4 space-y-3">
          {licenses.map((l, i) => {
            const isExpanded = expandedRow === i;
            return (
              <div key={l.vendor}>
                <div
                  onClick={() => toggle(i)}
                  className="rounded-xl p-4 cursor-pointer transition-colors hover:bg-white/[0.04]"
                  style={{ background: i % 2 === 0 ? 'var(--cc-bg-elevated)' : 'rgba(255,255,255,0.02)', border: '1px solid var(--cc-border)' }}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="font-semibold text-sm" style={{ color: 'var(--cc-text)' }}>{l.vendor}</p>
                      <p className="text-xs mt-0.5" style={{ color: 'var(--cc-text-tertiary)' }}>{l.department}</p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span
                        className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold ${actionColor(l.action)}`}
                        style={actionBgStyle(l.action)}
                      >
                        {l.action}
                      </span>
                      {isExpanded ? <ChevronUp size={14} style={{ color: 'var(--cc-text-tertiary)' }} /> : <ChevronDown size={14} style={{ color: 'var(--cc-text-tertiary)' }} />}
                    </div>
                  </div>
                  <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                    <div>
                      <span style={{ color: 'var(--cc-text-tertiary)' }}>Active</span>
                      <p className="font-mono font-medium" style={{ color: 'var(--cc-text)' }}>{l.active90d}/{l.totalLicenses}</p>
                    </div>
                    <div>
                      <span style={{ color: 'var(--cc-text-tertiary)' }}>Usage</span>
                      <p className="font-mono font-medium" style={{ color: 'var(--cc-text)' }}>{usagePct(l)}%</p>
                    </div>
                    <div>
                      <span style={{ color: 'var(--cc-text-tertiary)' }}>Waste</span>
                      <p className="font-mono font-semibold text-[#EF4444]">{fmt(l.annualWaste)}/yr</p>
                    </div>
                  </div>
                </div>

                {/* Expanded detail */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 py-4 space-y-4 rounded-b-xl" style={{ background: 'var(--cc-bg-input)', border: '1px solid var(--cc-border)', borderTop: 'none' }}>
                        {/* Usage bar */}
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider mb-2">Usage (90-day)</p>
                          <div className="w-full h-3 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                            <div className="h-full rounded-full" style={{ width: `${usagePct(l)}%`, backgroundColor: usagePct(l) > 70 ? '#10B981' : usagePct(l) > 40 ? '#F59E0B' : '#EF4444' }} />
                          </div>
                          <p className="mt-1 text-xs font-mono" style={{ color: 'var(--cc-text-secondary)' }}>{usagePct(l)}% active ({l.active90d} / {l.totalLicenses})</p>
                        </div>
                        {/* Cost */}
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider mb-1">Cost per License</p>
                          <p className="text-lg font-mono font-bold" style={{ color: 'var(--cc-text)' }}>{fmtFull(l.costPerLicense)}<span className="text-xs font-normal ml-1" style={{ color: 'var(--cc-text-secondary)' }}>per seat / year</span></p>
                        </div>
                        {/* Recommendation */}
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider mb-1">Recommended Action</p>
                          <p className="text-xs leading-relaxed" style={{ color: 'var(--cc-text-secondary)' }}>{actionDescription(l)}</p>
                        </div>
                        {/* Compliance */}
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider mb-1">Compliance Risk</p>
                          {l.complianceRisk ? (
                            <div className="flex items-center gap-2">
                              <AlertTriangle size={14} className="text-red-500" />
                              <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold text-red-400" style={{ background: 'var(--cc-red-dim)' }}>Compliance Risk</span>
                            </div>
                          ) : (
                            <p className="text-xs" style={{ color: 'var(--cc-text-tertiary)' }}>No compliance risk identified</p>
                          )}
                          <p className="text-[10px] mt-1" style={{ color: 'var(--cc-text-tertiary)' }}>Last audited: {l.lastAuditDate}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Desktop: table */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="text-left text-xs font-semibold uppercase tracking-wider" style={{ borderBottom: '1px solid var(--cc-border)', color: 'var(--cc-text-secondary)' }}>
                <th className="px-6 py-3">Vendor</th>
                <th className="px-4 py-3">Dept</th>
                <th className="px-4 py-3 text-right">Total</th>
                <th className="px-4 py-3 text-right">Active</th>
                <th className="px-4 py-3 text-right">Inactive</th>
                <th className="px-4 py-3 text-right">Waste</th>
                <th className="px-4 py-3 text-center">Trend</th>
                <th className="px-4 py-3 text-center">Action</th>
                <th className="px-4 py-3 w-8" />
              </tr>
            </thead>
            <tbody>
              {licenses.map((l, i) => {
                const isExpanded = expandedRow === i;
                return (
                  <React.Fragment key={l.vendor}>
                    <tr
                      onClick={() => toggle(i)}
                      className="cursor-pointer transition-colors hover:bg-white/[0.02]"
                      style={{ borderBottom: '1px solid var(--cc-border)', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)' }}
                    >
                      <td className="px-6 py-4 font-semibold" style={{ color: 'var(--cc-text)' }}>{l.vendor}</td>
                      <td className="px-4 py-4" style={{ color: 'var(--cc-text-secondary)' }}>{l.department}</td>
                      <td className="px-4 py-4 text-right font-mono" style={{ color: 'var(--cc-text)' }}>
                        {l.totalLicenses.toLocaleString()}
                      </td>
                      <td className="px-4 py-4 text-right font-mono" style={{ color: 'var(--cc-text)' }}>
                        {l.active90d.toLocaleString()}
                      </td>
                      <td className="px-4 py-4 text-right font-mono" style={{ color: 'var(--cc-text)' }}>
                        {l.inactive.toLocaleString()}
                      </td>
                      <td className="px-4 py-4 text-right font-mono font-semibold text-[#EF4444]">
                        {fmtFull(l.annualWaste)}
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex justify-center">
                          <TrendSparkline data={l.trend} />
                        </div>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${actionColor(l.action)}`}
                          style={actionBgStyle(l.action)}
                        >
                          {l.action}
                        </span>
                      </td>
                      <td className="px-4 py-4" style={{ color: 'var(--cc-text-tertiary)' }}>
                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </td>
                    </tr>

                    {/* Expanded detail */}
                    <AnimatePresence>
                      {isExpanded && (
                        <tr>
                          <td colSpan={9} className="p-0">
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >
                              <div className="px-4 sm:px-6 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6" style={{ background: 'var(--cc-bg-input)', borderBottom: '1px solid var(--cc-border)' }}>
                                {/* Usage bar */}
                                <div>
                                  <p className="text-xs font-semibold uppercase tracking-wider mb-2">
                                    Usage (90-day)
                                  </p>
                                  <div className="w-full h-4 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                                    <div
                                      className="h-full rounded-full"
                                      style={{
                                        width: `${usagePct(l)}%`,
                                        backgroundColor:
                                          usagePct(l) > 70
                                            ? '#10B981'
                                            : usagePct(l) > 40
                                            ? '#F59E0B'
                                            : '#EF4444',
                                      }}
                                    />
                                  </div>
                                  <p className="mt-1 text-sm font-mono" style={{ color: 'var(--cc-text-secondary)' }}>
                                    {usagePct(l)}% active ({l.active90d} / {l.totalLicenses})
                                  </p>
                                </div>

                                {/* Cost per license */}
                                <div>
                                  <p className="text-xs font-semibold uppercase tracking-wider mb-2">
                                    Cost per License
                                  </p>
                                  <p className="text-2xl font-mono font-bold" style={{ color: 'var(--cc-text)' }}>
                                    {fmtFull(l.costPerLicense)}
                                  </p>
                                  <p className="text-sm mt-1" style={{ color: 'var(--cc-text-secondary)' }}>per seat / year</p>
                                </div>

                                {/* Recommendation */}
                                <div>
                                  <p className="text-xs font-semibold uppercase tracking-wider mb-2">
                                    Recommended Action
                                  </p>
                                  <p className="text-sm leading-relaxed" style={{ color: 'var(--cc-text-secondary)' }}>
                                    {actionDescription(l)}
                                  </p>
                                </div>

                                {/* Compliance risk */}
                                <div>
                                  <p className="text-xs font-semibold uppercase tracking-wider mb-2">
                                    Compliance Risk
                                  </p>
                                  {l.complianceRisk ? (
                                    <div className="flex items-center gap-2">
                                      <AlertTriangle size={16} className="text-red-500" />
                                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-red-400" style={{ background: 'var(--cc-red-dim)' }}>
                                        Compliance Risk
                                      </span>
                                    </div>
                                  ) : (
                                    <p className="text-sm" style={{ color: 'var(--cc-text-tertiary)' }}>No compliance risk identified</p>
                                  )}
                                  <p className="text-xs mt-2" style={{ color: 'var(--cc-text-tertiary)' }}>
                                    Last audited: {l.lastAuditDate}
                                  </p>
                                </div>
                              </div>
                            </motion.div>
                          </td>
                        </tr>
                      )}
                    </AnimatePresence>
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </motion.div>

    </div>
  );
}
