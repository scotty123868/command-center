import { motion } from 'framer-motion';
import {
  Shield,
  ShieldCheck,
  Lock,
  Trash2,
  Search,
  FileText,
  Cpu,
  BarChart3,
  CheckCircle2,
  Clock,
  AlertCircle,
  Database,
  Activity,
  Zap,
  Server,
  ArrowRight,
  Wifi,
  Brain,
  AlertTriangle,
  RotateCcw,
} from 'lucide-react';

import { useCompany } from '../data/CompanyContext';
import {
  getAiAgents,
  getDataSources,
  getVendorHealth,
  getFailureModes,
  getMethodologySteps,
  type IntegrationDataSource,
  type IntegrationVendorHealth,
} from '../data/constants';

/* -- Data imported from constants.ts via getters ------------------------------ */

/* Methodology icons mapped by step number */
const methodologyIcons: Record<number, React.ElementType> = { 1: Search, 2: FileText, 3: Cpu, 4: BarChart3 };




/* -- Status helpers ------------------------------------------------------- */

function statusConfig(status: IntegrationDataSource['status']) {
  switch (status) {
    case 'Complete':
      return { icon: CheckCircle2, color: 'var(--cc-green)', bg: 'var(--cc-green-dim)', label: 'Complete' };
    case 'In Progress':
      return { icon: Clock, color: 'var(--cc-yellow)', bg: 'var(--cc-yellow-dim)', label: 'In Progress' };
    case 'Pending Access':
      return { icon: AlertCircle, color: 'var(--cc-text-tertiary)', bg: 'var(--cc-bg-card-hover)', label: 'Pending Access' };
  }
}

function coverageBarColor(coverage: number): string {
  if (coverage >= 90) return 'var(--cc-green)';
  if (coverage >= 70) return 'var(--cc-yellow)';
  return 'var(--cc-text-tertiary)';
}

function vendorStatusColor(status: IntegrationVendorHealth['status']): string {
  switch (status) {
    case 'green': return 'var(--cc-green)';
    case 'yellow': return 'var(--cc-yellow)';
    case 'red': return 'var(--cc-red)';
  }
}

function vendorStatusDimColor(status: IntegrationVendorHealth['status']): string {
  switch (status) {
    case 'green': return 'var(--cc-green-dim)';
    case 'yellow': return 'var(--cc-yellow-dim)';
    case 'red': return 'var(--cc-red-dim)';
  }
}

function metricColor(value: number, goodBelow: number, warnBelow: number): string {
  if (value <= goodBelow) return 'var(--cc-green)';
  if (value <= warnBelow) return 'var(--cc-yellow)';
  return 'var(--cc-red)';
}

function accuracyColor(value: number): string {
  if (value >= 92) return 'var(--cc-green)';
  if (value >= 88) return 'var(--cc-yellow)';
  return 'var(--cc-red)';
}

/* -- Pulse animation keyframes (injected via style tag) ------------------- */

const pulseKeyframes = `
@keyframes vendorPulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.8); }
}
`;

/* -- Component ------------------------------------------------------------ */

export default function Integrations() {
  const { company } = useCompany();
  const aiAgents = getAiAgents(company.id);
  const dataSources = getDataSources(company.id);
  const vendorHealthData = getVendorHealth(company.id);
  const failureModes = getFailureModes(company.id);
  const methodologySteps = getMethodologySteps(company.id);
  const accentColor = company.accentColor;

  const completedCount = dataSources.filter((d: IntegrationDataSource) => d.status === 'Complete').length;
  const inProgressCount = dataSources.filter((d: IntegrationDataSource) => d.status === 'In Progress').length;
  const pendingCount = dataSources.filter((d: IntegrationDataSource) => d.status === 'Pending Access').length;

  return (
    <div className="space-y-10">
      {/* Inject pulse keyframes */}
      <style>{pulseKeyframes}</style>

      {/* -- Header ---------------------------------------------------------- */}
      <div>
        <h1 className="text-2xl font-semibold tracking-tight" style={{ color: 'var(--cc-text)' }}>Integration Hub</h1>
        <p className="mt-1 text-sm" style={{ color: 'var(--cc-text-secondary)' }}>Connected systems, vendor health, and AI reliability monitoring</p>
      </div>

      {/* -- Summary stats --------------------------------------------------- */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl px-6 py-5 flex items-center gap-4"
          style={{ background: 'var(--cc-bg-card)', border: '1px solid var(--cc-border)' }}
        >
          <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'var(--cc-green-dim)' }}>
            <CheckCircle2 className="w-5 h-5" style={{ color: 'var(--cc-green)' }} strokeWidth={2} />
          </div>
          <div>
            <p className="text-2xl font-semibold leading-none" style={{ color: 'var(--cc-text)' }}>{completedCount}</p>
            <p className="text-xs mt-1" style={{ color: 'var(--cc-text-secondary)' }}>Systems Analyzed</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="rounded-2xl px-6 py-5 flex items-center gap-4"
          style={{ background: 'var(--cc-bg-card)', border: '1px solid var(--cc-border)' }}
        >
          <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'var(--cc-yellow-dim)' }}>
            <Clock className="w-5 h-5" style={{ color: 'var(--cc-yellow)' }} strokeWidth={2} />
          </div>
          <div>
            <p className="text-2xl font-semibold leading-none" style={{ color: 'var(--cc-text)' }}>{inProgressCount}</p>
            <p className="text-xs mt-1" style={{ color: 'var(--cc-text-secondary)' }}>In Progress</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="rounded-2xl px-6 py-5 flex items-center gap-4"
          style={{ background: 'var(--cc-bg-card)', border: '1px solid var(--cc-border)' }}
        >
          <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'var(--cc-bg-card-hover)' }}>
            <AlertCircle className="w-5 h-5" style={{ color: 'var(--cc-text-tertiary)' }} strokeWidth={2} />
          </div>
          <div>
            <p className="text-2xl font-semibold leading-none" style={{ color: 'var(--cc-text)' }}>{pendingCount}</p>
            <p className="text-xs mt-1" style={{ color: 'var(--cc-text-secondary)' }}>Pending Access</p>
          </div>
        </motion.div>
      </motion.div>

      {/* ================================================================== */}
      {/* == VENDOR HEALTH DASHBOARD ======================================= */}
      {/* ================================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <Wifi className="w-5 h-5" style={{ color: 'var(--cc-accent)' }} strokeWidth={2} />
          <h2 className="text-lg font-semibold" style={{ color: 'var(--cc-text)' }}>Vendor Health Dashboard</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {vendorHealthData.map((vendor, i) => (
            <motion.div
              key={vendor.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: i * 0.04 }}
              className="rounded-2xl p-5"
              style={{ background: 'var(--cc-bg-card)', border: '1px solid var(--cc-border)' }}
            >
              {/* Vendor name + status dot */}
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-sm font-semibold leading-snug" style={{ color: 'var(--cc-text)' }}>{vendor.name}</h3>
                <div className="relative flex items-center justify-center w-5 h-5 flex-shrink-0">
                  {/* Pulse ring */}
                  <span
                    className="absolute w-3 h-3 rounded-full"
                    style={{
                      background: vendorStatusColor(vendor.status),
                      opacity: 0.3,
                      animation: 'vendorPulse 2s ease-in-out infinite',
                    }}
                  />
                  {/* Solid dot */}
                  <span
                    className="relative w-2.5 h-2.5 rounded-full"
                    style={{ background: vendorStatusColor(vendor.status) }}
                  />
                </div>
              </div>

              {/* Metrics */}
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span style={{ color: 'var(--cc-text-secondary)' }}>Uptime</span>
                  <span className="font-medium" style={{ color: vendor.uptime >= 99 ? 'var(--cc-green)' : vendor.uptime >= 97 ? 'var(--cc-yellow)' : 'var(--cc-red)' }}>{vendor.uptime}%</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: 'var(--cc-text-secondary)' }}>Latency</span>
                  <span className="font-medium" style={{ color: vendor.latency <= 100 ? 'var(--cc-green)' : vendor.latency <= 500 ? 'var(--cc-yellow)' : 'var(--cc-red)' }}>{vendor.latency}ms</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: 'var(--cc-text-secondary)' }}>Last checked</span>
                  <span className="font-medium" style={{ color: 'var(--cc-text-tertiary)' }}>{vendor.lastChecked}</span>
                </div>
              </div>

              {/* Note */}
              {vendor.note && (
                <div
                  className="mt-3 rounded-lg px-3 py-2 text-[11px] font-medium"
                  style={{
                    background: vendorStatusDimColor(vendor.status),
                    color: vendorStatusColor(vendor.status),
                  }}
                >
                  {vendor.note}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ================================================================== */}
      {/* == FAILURE MODE REGISTRY ========================================= */}
      {/* ================================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <RotateCcw className="w-5 h-5" style={{ color: 'var(--cc-accent)' }} strokeWidth={2} />
          <h2 className="text-lg font-semibold" style={{ color: 'var(--cc-text)' }}>Failure Mode Registry</h2>
        </div>
        <div className="rounded-2xl overflow-hidden" style={{ background: 'var(--cc-bg-card)', border: '1px solid var(--cc-border)' }}>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: '1px solid var(--cc-border)' }}>
                  <th className="text-left px-5 py-3 text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--cc-text-tertiary)' }}>Vendor</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--cc-text-tertiary)' }}>Scenario</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--cc-text-tertiary)' }}>Recovery Strategy</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--cc-text-tertiary)' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {failureModes.map((fm, i) => (
                  <motion.tr
                    key={fm.vendor + fm.scenario}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: 0.2 + i * 0.04 }}
                    style={{ borderBottom: i < failureModes.length - 1 ? '1px solid var(--cc-border)' : undefined }}
                  >
                    <td className="px-5 py-3.5 font-medium" style={{ color: 'var(--cc-text)' }}>{fm.vendor}</td>
                    <td className="px-5 py-3.5" style={{ color: 'var(--cc-text-secondary)' }}>{fm.scenario}</td>
                    <td className="px-5 py-3.5" style={{ color: 'var(--cc-text-secondary)' }}>{fm.recovery}</td>
                    <td className="px-5 py-3.5">
                      <span
                        className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full"
                        style={{
                          background: fm.status === 'Passing' ? 'var(--cc-green-dim)' : 'var(--cc-yellow-dim)',
                          color: fm.status === 'Passing' ? 'var(--cc-green)' : 'var(--cc-yellow)',
                        }}
                      >
                        {fm.status === 'Passing' ? (
                          <CheckCircle2 className="w-3 h-3" strokeWidth={2.5} />
                        ) : (
                          <AlertTriangle className="w-3 h-3" strokeWidth={2.5} />
                        )}
                        {fm.status}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>

      {/* ================================================================== */}
      {/* == AI AGENT RELIABILITY SCORES =================================== */}
      {/* ================================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <Brain className="w-5 h-5" style={{ color: 'var(--cc-accent)' }} strokeWidth={2} />
          <h2 className="text-lg font-semibold" style={{ color: 'var(--cc-text)' }}>AI Agent Reliability Scores</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {aiAgents.map((agent, i) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.25 + i * 0.06 }}
              className="rounded-2xl p-6 hover:shadow-lg transition-shadow"
              style={{ background: 'var(--cc-bg-card)', border: '1px solid var(--cc-border)', borderLeft: `3px solid ${accentColor}` }}
            >
              {/* Header */}
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold" style={{ color: 'var(--cc-text)' }}>{agent.name}</h3>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--cc-text-tertiary)' }}>{agent.subtitle}</p>
                </div>
                <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                  agent.status === 'active' ? 'bg-emerald-500/10 text-emerald-400' :
                  agent.status === 'piloting' ? 'bg-amber-500/10 text-amber-400' :
                  'bg-slate-500/10 text-slate-400'
                }`}>
                  {agent.status}
                </span>
              </div>

              {/* 4 Metrics */}
              <div className="space-y-3 mb-5">
                {/* Accuracy */}
                <div className="flex items-center justify-between">
                  <span className="text-xs" style={{ color: 'var(--cc-text-secondary)' }}>Accuracy</span>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full" style={{ background: accuracyColor(agent.accuracy) }} />
                    <span className="text-sm font-semibold" style={{ color: accuracyColor(agent.accuracy) }}>{agent.accuracy}%</span>
                  </div>
                </div>

                {/* Metric 2 (false positive / conflict rate / false alarm) */}
                <div className="flex items-center justify-between">
                  <span className="text-xs" style={{ color: 'var(--cc-text-secondary)' }}>{agent.metric2Label}</span>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full" style={{ background: metricColor(agent.metric2Value, 3, 5) }} />
                    <span className="text-sm font-semibold" style={{ color: metricColor(agent.metric2Value, 3, 5) }}>{agent.metric2Value}%</span>
                  </div>
                </div>

                {/* Metric 3 (decision time / schedule time / lead time) */}
                <div className="flex items-center justify-between">
                  <span className="text-xs" style={{ color: 'var(--cc-text-secondary)' }}>{agent.metric3Label}</span>
                  <span className="text-sm font-semibold" style={{ color: 'var(--cc-text)' }}>{agent.metric3Value}</span>
                </div>

                {/* Human Override Rate */}
                <div className="flex items-center justify-between">
                  <span className="text-xs" style={{ color: 'var(--cc-text-secondary)' }}>Human Override Rate</span>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full" style={{ background: metricColor(agent.overrideRate, 10, 20) }} />
                    <span className="text-sm font-semibold" style={{ color: metricColor(agent.overrideRate, 10, 20) }}>{agent.overrideRate}%</span>
                  </div>
                </div>
              </div>

              {/* Confidence threshold slider (visual only) */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-medium" style={{ color: 'var(--cc-text-tertiary)' }}>Confidence Threshold</span>
                  <span className="text-[11px] font-semibold" style={{ color: 'var(--cc-text-secondary)' }}>{Math.round(agent.confidenceThreshold * 100)}%</span>
                </div>
                <div className="relative w-full h-2 rounded-full" style={{ background: 'var(--cc-bg-input)' }}>
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${agent.confidenceThreshold * 100}%`,
                      background: `linear-gradient(90deg, var(--cc-accent), var(--cc-green))`,
                    }}
                  />
                  {/* Thumb */}
                  <div
                    className="absolute top-1/2 w-3.5 h-3.5 rounded-full"
                    style={{
                      left: `${agent.confidenceThreshold * 100}%`,
                      transform: 'translate(-50%, -50%)',
                      background: 'var(--cc-bg-card)',
                      border: '2px solid var(--cc-accent)',
                      boxShadow: '0 0 6px var(--cc-accent-glow)',
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* -- Section 1: Assessment Data Sources ----------------------------- */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.25 }}
      >
        <h2 className="text-lg font-semibold mb-4" style={{ color: 'var(--cc-text)' }}>Assessment Data Sources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {dataSources.map((source, i) => {
            const sc = statusConfig(source.status);
            const StatusIcon = sc.icon;
            return (
              <motion.div
                key={source.system}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.3 + i * 0.03 }}
                className="rounded-2xl p-5"
                style={{ background: 'var(--cc-bg-card)', border: '1px solid var(--cc-border)' }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-sm font-semibold leading-snug" style={{ color: 'var(--cc-text)' }}>{source.system}</h3>
                  <span
                    className="flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full"
                    style={{ background: sc.bg, color: sc.color }}
                  >
                    <StatusIcon className="w-3 h-3" strokeWidth={2.5} />
                    {sc.label}
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span style={{ color: 'var(--cc-text-secondary)' }}>Division</span>
                    <span className="font-medium" style={{ color: 'var(--cc-text)' }}>{source.division}</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: 'var(--cc-text-secondary)' }}>Records Analyzed</span>
                    <span className="font-medium" style={{ color: 'var(--cc-text)' }}>{source.recordsAnalyzed}</span>
                  </div>
                </div>

                {/* Coverage bar */}
                <div className="mt-4">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[11px] font-medium" style={{ color: 'var(--cc-text-tertiary)' }}>Coverage</span>
                    <span className="text-[11px] font-semibold" style={{ color: 'var(--cc-text)' }}>{source.coverage}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full overflow-hidden" style={{ background: 'var(--cc-bg-input)' }}>
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{ width: `${source.coverage}%`, background: coverageBarColor(source.coverage) }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* -- Section 2: Assessment Methodology ----------------------------- */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <h2 className="text-lg font-semibold mb-4" style={{ color: 'var(--cc-text)' }}>Assessment Methodology</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {methodologySteps.map((step, i) => {
            const StepIcon = methodologyIcons[step.number] || Search;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.35 + i * 0.05 }}
                className="rounded-2xl p-5 relative overflow-hidden"
                style={{ background: 'var(--cc-bg-card)', border: '1px solid var(--cc-border)' }}
              >
                {/* Step number watermark */}
                <span className="absolute top-3 right-4 text-[48px] font-bold leading-none select-none pointer-events-none" style={{ color: 'var(--cc-border)' }}>
                  {step.number}
                </span>

                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: 'var(--cc-accent-glow)' }}>
                    <StepIcon className="w-5 h-5" style={{ color: 'var(--cc-accent)' }} strokeWidth={1.8} />
                  </div>
                  <h3 className="text-sm font-semibold mb-1.5" style={{ color: 'var(--cc-text)' }}>{step.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--cc-text-secondary)' }}>{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* -- Section 3: Data Security -------------------------------------- */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.35 }}
        className="rounded-2xl overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1B1B1F 0%, #2B2B2F 100%)',
        }}
      >
        <div className="p-5 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(16, 185, 129, 0.1)' }}>
              <Shield className="w-5 h-5" style={{ color: '#34D399' }} strokeWidth={1.8} />
            </div>
            <h2 className="text-lg font-semibold text-white">Data Security</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 rounded-xl px-5 py-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <Lock className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#34D399' }} strokeWidth={1.8} />
              <div>
                <p className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.9)' }}>End-to-End Encryption</p>
                <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>All assessment data is encrypted end-to-end (AES-256)</p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl px-5 py-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <Server className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#34D399' }} strokeWidth={1.8} />
              <div>
                <p className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.9)' }}>On-Premise Analysis</p>
                <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>No data leaves your network &mdash; analysis runs on-premise or in your VPC</p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl px-5 py-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <ShieldCheck className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#34D399' }} strokeWidth={1.8} />
              <div>
                <p className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.9)' }}>SOC 2 Type II Compliant</p>
                <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>Independently audited security controls and practices</p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl px-5 py-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <Trash2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#34D399' }} strokeWidth={1.8} />
              <div>
                <p className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.9)' }}>Data Retention Policy</p>
                <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>Assessment data is deleted after engagement unless you choose to retain</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* -- Data Pipeline Status ------------------------------------------ */}
      <motion.div
        className="rounded-2xl p-5 sm:p-8"
        style={{ background: 'var(--cc-bg-card)', border: '1px solid var(--cc-border)' }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <h2 className="text-lg font-semibold mb-6" style={{ color: 'var(--cc-text)' }}>Data Pipeline Status</h2>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="w-full sm:flex-1 rounded-xl p-5 text-center" style={{ background: 'var(--cc-bg-elevated)', border: '1px solid var(--cc-border)' }}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ background: 'var(--cc-accent-glow)' }}>
              <Database className="w-6 h-6" style={{ color: 'var(--cc-accent)' }} strokeWidth={1.8} />
            </div>
            <p className="text-sm font-semibold" style={{ color: 'var(--cc-text)' }}>Sources</p>
            <p className="text-xs mt-1" style={{ color: 'var(--cc-text-secondary)' }}>{dataSources.length} systems scanned</p>
          </div>

          <div className="flex flex-col items-center gap-1 flex-shrink-0">
            <ArrowRight className="w-5 h-5 rotate-90 sm:rotate-0" style={{ color: 'var(--cc-text-muted)' }} />
            <span className="text-[10px] font-medium" style={{ color: 'var(--cc-text-tertiary)' }}>Extract</span>
          </div>

          <div className="w-full sm:flex-1 rounded-xl p-5 text-center" style={{ background: 'var(--cc-bg-elevated)', border: '1px solid var(--cc-border)' }}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ background: 'var(--cc-yellow-dim)' }}>
              <Activity className="w-6 h-6" style={{ color: 'var(--cc-yellow)' }} strokeWidth={1.8} />
            </div>
            <p className="text-sm font-semibold" style={{ color: 'var(--cc-text)' }}>Analysis Engine</p>
            <p className="text-xs mt-1" style={{ color: 'var(--cc-text-secondary)' }}>AI-powered processing</p>
          </div>

          <div className="flex flex-col items-center gap-1 flex-shrink-0">
            <ArrowRight className="w-5 h-5 rotate-90 sm:rotate-0" style={{ color: 'var(--cc-text-muted)' }} />
            <span className="text-[10px] font-medium" style={{ color: 'var(--cc-text-tertiary)' }}>Report</span>
          </div>

          <div className="w-full sm:flex-1 rounded-xl p-5 text-center" style={{ background: 'var(--cc-bg-elevated)', border: '1px solid var(--cc-border)' }}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ background: 'var(--cc-green-dim)' }}>
              <Zap className="w-6 h-6" style={{ color: 'var(--cc-green)' }} strokeWidth={1.8} />
            </div>
            <p className="text-sm font-semibold" style={{ color: 'var(--cc-text)' }}>Command Center</p>
            <p className="text-xs mt-1" style={{ color: 'var(--cc-text-secondary)' }}>Assessment output</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 text-xs" style={{ color: 'var(--cc-text-secondary)' }}>
          <span className="flex items-center gap-1.5">
            <Database className="w-3.5 h-3.5" style={{ color: 'var(--cc-text-tertiary)' }} />
            Total records scanned:
          </span>
          <span className="font-semibold" style={{ color: 'var(--cc-text)' }}>48,736</span>
          <span style={{ color: 'var(--cc-text-muted)' }}>|</span>
          <span className="font-semibold" style={{ color: 'var(--cc-green)' }}>83% avg coverage</span>
          <span style={{ color: 'var(--cc-text-muted)' }}>|</span>
          <span>{completedCount} of {dataSources.length} systems complete</span>
        </div>
      </motion.div>

    </div>
  );
}
