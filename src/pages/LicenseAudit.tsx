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
  if (action.startsWith('Reclaim')) return 'bg-emerald-100 text-emerald-700';
  if (action.startsWith('Replace')) return 'bg-blue-100 text-blue-700';
  if (action.startsWith('Downgrade')) return 'bg-yellow-100 text-yellow-700';
  return 'bg-gray-100 text-gray-600';
}

function usagePct(l: License): number {
  return Math.round((l.active90d / l.totalLicenses) * 100);
}

function actionDescription(l: License): string {
  const pct = usagePct(l);
  if (l.action === 'Reclaim')
    return `${l.inactive} licenses have had zero activity in 90+ days. Reclaiming these seats saves ${fmt(l.annualWaste)}/yr with no impact on active users (${pct}% utilization).`;
  if (l.action.startsWith('Replace'))
    return `Current tool shows low utilization or better alternatives exist. Migrating to ${l.action.replace('Replace → ', '')} consolidates spend and improves capability while saving ${fmt(l.annualWaste)}/yr.`;
  if (l.action === 'Downgrade')
    return `${l.inactive} users on Enterprise tier have usage patterns consistent with a lower plan. Downgrading these seats preserves access while saving ${fmt(l.annualWaste)}/yr.`;
  return '';
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
    <div className="space-y-10">
      {/* Preliminary Estimate Banner */}
      <span className="text-xs text-slate-400 bg-slate-100 px-3 py-1 rounded inline-block">
        Preliminary Estimate — Based on Industry Benchmarks
      </span>

      {/* ── Hero Section ──────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.04)] border border-gray-100 p-8 flex flex-col lg:flex-row items-center gap-10"
      >
        {/* Left — hero number */}
        <div className="flex-1 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
            <ShieldAlert className="w-7 h-7 text-[#EF4444]" />
            <span className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              License Waste Summary
            </span>
          </div>
          <p className="text-5xl md:text-6xl font-mono font-bold text-[#EF4444] leading-none">
            {fmt(totalWaste)}/yr
          </p>
          <p className="mt-3 text-lg text-gray-500">in recoverable license waste</p>
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
                contentStyle={{ borderRadius: 8, border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,.12)' }}
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
        className="bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden"
      >
        <div className="px-4 sm:px-8 pt-6 pb-4">
          <h2 className="text-xl font-semibold text-gray-900">License Inventory</h2>
          <p className="text-sm text-gray-500 mt-1">Click any row for detailed breakdown</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="border-b border-gray-100 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                <th className="px-8 py-3">Vendor</th>
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
                      className={`cursor-pointer transition-colors border-b border-gray-100 ${
                        i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                      } hover:bg-[#F0F4FF]`}
                    >
                      <td className="px-8 py-4 font-semibold text-gray-900">{l.vendor}</td>
                      <td className="px-4 py-4 text-gray-600">{l.department}</td>
                      <td className="px-4 py-4 text-right font-mono text-gray-700">
                        {l.totalLicenses.toLocaleString()}
                      </td>
                      <td className="px-4 py-4 text-right font-mono text-gray-700">
                        {l.active90d.toLocaleString()}
                      </td>
                      <td className="px-4 py-4 text-right font-mono text-gray-700">
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
                        >
                          {l.action}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-gray-400">
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
                              <div className="px-4 sm:px-8 py-6 bg-[#F0F4FF] border-b border-gray-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                                {/* Usage bar */}
                                <div>
                                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                                    Usage (90-day)
                                  </p>
                                  <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
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
                                  <p className="mt-1 text-sm font-mono text-gray-600">
                                    {usagePct(l)}% active ({l.active90d} / {l.totalLicenses})
                                  </p>
                                </div>

                                {/* Cost per license */}
                                <div>
                                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                                    Cost per License
                                  </p>
                                  <p className="text-2xl font-mono font-bold text-gray-900">
                                    {fmtFull(l.costPerLicense)}
                                  </p>
                                  <p className="text-sm text-gray-500 mt-1">per seat / year</p>
                                </div>

                                {/* Recommendation */}
                                <div>
                                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                                    Recommended Action
                                  </p>
                                  <p className="text-sm text-gray-700 leading-relaxed">
                                    {actionDescription(l)}
                                  </p>
                                </div>

                                {/* Compliance risk */}
                                <div>
                                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                                    Compliance Risk
                                  </p>
                                  {l.complianceRisk ? (
                                    <div className="flex items-center gap-2">
                                      <AlertTriangle size={16} className="text-red-500" />
                                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-700">
                                        Compliance Risk
                                      </span>
                                    </div>
                                  ) : (
                                    <p className="text-sm text-gray-400">No compliance risk identified</p>
                                  )}
                                  <p className="text-xs text-gray-400 mt-2">
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
