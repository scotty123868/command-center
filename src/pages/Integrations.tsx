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
  ExternalLink,
} from 'lucide-react';

const LASTMILE_URL = 'https://lastmile-beige.vercel.app';

/* -- Data Sources --------------------------------------------------------- */

interface DataSource {
  system: string;
  division: string;
  recordsAnalyzed: string;
  coverage: number;
  status: 'Complete' | 'In Progress' | 'Pending Access';
}

const dataSources: DataSource[] = [
  { system: 'eCMS (Computer Guidance)', division: 'All', recordsAnalyzed: '24,847 work orders', coverage: 94, status: 'Complete' },
  { system: 'Primavera P6', division: 'HCC', recordsAnalyzed: '1,247 projects', coverage: 87, status: 'Complete' },
  { system: 'HCSS Telematics', division: 'HCC, HTSI', recordsAnalyzed: '342 vehicles', coverage: 92, status: 'Complete' },
  { system: 'MCP (Internal Payroll)', division: 'All', recordsAnalyzed: '2,800 employees', coverage: 81, status: 'Complete' },
  { system: 'PTC Signal Systems', division: 'HTI', recordsAnalyzed: '4,200 track-miles', coverage: 73, status: 'In Progress' },
  { system: 'Active Directory', division: 'All', recordsAnalyzed: '2,800 accounts', coverage: 100, status: 'Complete' },
  { system: 'FRA RISPC Database', division: 'HSI', recordsAnalyzed: '12,400 inspections', coverage: 96, status: 'Complete' },
  { system: 'Legacy Field Dispatch', division: 'HCC', recordsAnalyzed: '\u2014', coverage: 45, status: 'Pending Access' },
];

/* -- Methodology Steps ---------------------------------------------------- */

interface MethodologyStep {
  number: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

const methodologySteps: MethodologyStep[] = [
  {
    number: 1,
    title: 'License Discovery',
    description: 'Scan Active Directory + vendor APIs to find all software licenses, identify unused seats',
    icon: Search,
  },
  {
    number: 2,
    title: 'Workflow Mapping',
    description: 'Interview data + system logs to map manual processes and automation opportunities',
    icon: FileText,
  },
  {
    number: 3,
    title: 'Tech Stack Health',
    description: 'Evaluate each platform\'s AI-readiness, integration capabilities, and replacement candidates',
    icon: Cpu,
  },
  {
    number: 4,
    title: 'ROI Modeling',
    description: 'Cross-reference savings opportunities with implementation costs and industry benchmarks',
    icon: BarChart3,
  },
];

/* -- Status helpers ------------------------------------------------------- */

function statusConfig(status: DataSource['status']) {
  switch (status) {
    case 'Complete':
      return { icon: CheckCircle2, color: 'text-emerald-500', bg: 'bg-emerald-50', label: 'Complete' };
    case 'In Progress':
      return { icon: Clock, color: 'text-amber-500', bg: 'bg-amber-50', label: 'In Progress' };
    case 'Pending Access':
      return { icon: AlertCircle, color: 'text-gray-400', bg: 'bg-gray-50', label: 'Pending Access' };
  }
}

function coverageBarColor(coverage: number) {
  if (coverage >= 90) return 'bg-emerald-500';
  if (coverage >= 70) return 'bg-amber-500';
  return 'bg-gray-400';
}

/* -- Component ------------------------------------------------------------ */

export default function Integrations() {
  const completedCount = dataSources.filter((d) => d.status === 'Complete').length;
  const inProgressCount = dataSources.filter((d) => d.status === 'In Progress').length;
  const pendingCount = dataSources.filter((d) => d.status === 'Pending Access').length;

  return (
    <div className="space-y-10">
      {/* ── Header ─────────────────────────────────────────────────────── */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Integration Hub</h1>
        <p className="mt-1 text-sm text-gray-500">Connected systems and data sources powering your assessment</p>
      </div>

      {/* ── Summary stats ──────────────────────────────────────────────── */}
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
          className="bg-white rounded-2xl border border-gray-100 px-6 py-5 flex items-center gap-4"
        >
          <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
            <CheckCircle2 className="w-5 h-5 text-emerald-500" strokeWidth={2} />
          </div>
          <div>
            <p className="text-2xl font-semibold text-gray-900 leading-none">{completedCount}</p>
            <p className="text-xs text-gray-500 mt-1">Systems Analyzed</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="bg-white rounded-2xl border border-gray-100 px-6 py-5 flex items-center gap-4"
        >
          <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0">
            <Clock className="w-5 h-5 text-amber-500" strokeWidth={2} />
          </div>
          <div>
            <p className="text-2xl font-semibold text-gray-900 leading-none">{inProgressCount}</p>
            <p className="text-xs text-gray-500 mt-1">In Progress</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="bg-white rounded-2xl border border-gray-100 px-6 py-5 flex items-center gap-4"
        >
          <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0">
            <AlertCircle className="w-5 h-5 text-gray-400" strokeWidth={2} />
          </div>
          <div>
            <p className="text-2xl font-semibold text-gray-900 leading-none">{pendingCount}</p>
            <p className="text-xs text-gray-500 mt-1">Pending Access</p>
          </div>
        </motion.div>
      </motion.div>

      {/* ── Section 1: Assessment Data Sources ─────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Assessment Data Sources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {dataSources.map((source, i) => {
            const sc = statusConfig(source.status);
            const StatusIcon = sc.icon;
            return (
              <motion.div
                key={source.system}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: i * 0.03 }}
                className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-lg hover:shadow-gray-100/60 transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-sm font-semibold text-gray-900 leading-snug">{source.system}</h3>
                  <span className={`flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full ${sc.bg} ${sc.color}`}>
                    <StatusIcon className="w-3 h-3" strokeWidth={2.5} />
                    {sc.label}
                  </span>
                </div>

                <div className="space-y-2 text-xs text-gray-500">
                  <div className="flex justify-between">
                    <span>Division</span>
                    <span className="font-medium text-gray-700">{source.division}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Records Analyzed</span>
                    <span className="font-medium text-gray-700">{source.recordsAnalyzed}</span>
                  </div>
                </div>

                {/* Coverage bar */}
                <div className="mt-4">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[11px] text-gray-400 font-medium">Coverage</span>
                    <span className="text-[11px] font-semibold text-gray-700">{source.coverage}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${coverageBarColor(source.coverage)}`}
                      style={{ width: `${source.coverage}%` }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* ── Section 2: Assessment Methodology ─────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Assessment Methodology</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {methodologySteps.map((step, i) => {
            const StepIcon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.25 + i * 0.05 }}
                className="bg-white rounded-2xl border border-gray-100 p-5 relative overflow-hidden"
              >
                {/* Step number watermark */}
                <span className="absolute top-3 right-4 text-[48px] font-bold text-gray-50 leading-none select-none pointer-events-none">
                  {step.number}
                </span>

                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-3">
                    <StepIcon className="w-5 h-5 text-blue-500" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1.5">{step.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* ── Section 3: Data Security ──────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="rounded-2xl overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1B1B1F 0%, #2B2B2F 100%)',
        }}
      >
        <div className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
              <Shield className="w-5 h-5 text-emerald-400" strokeWidth={1.8} />
            </div>
            <h2 className="text-lg font-semibold text-white">Data Security</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 bg-white/[0.04] rounded-xl px-5 py-4 border border-white/[0.06]">
              <Lock className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" strokeWidth={1.8} />
              <div>
                <p className="text-sm font-medium text-white/90">End-to-End Encryption</p>
                <p className="text-xs text-white/40 mt-0.5">All assessment data is encrypted end-to-end (AES-256)</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white/[0.04] rounded-xl px-5 py-4 border border-white/[0.06]">
              <Server className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" strokeWidth={1.8} />
              <div>
                <p className="text-sm font-medium text-white/90">On-Premise Analysis</p>
                <p className="text-xs text-white/40 mt-0.5">No data leaves your network &mdash; analysis runs on-premise or in your VPC</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white/[0.04] rounded-xl px-5 py-4 border border-white/[0.06]">
              <ShieldCheck className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" strokeWidth={1.8} />
              <div>
                <p className="text-sm font-medium text-white/90">SOC 2 Type II Compliant</p>
                <p className="text-xs text-white/40 mt-0.5">Independently audited security controls and practices</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white/[0.04] rounded-xl px-5 py-4 border border-white/[0.06]">
              <Trash2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" strokeWidth={1.8} />
              <div>
                <p className="text-sm font-medium text-white/90">Data Retention Policy</p>
                <p className="text-xs text-white/40 mt-0.5">Assessment data is deleted after engagement unless you choose to retain</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Data Pipeline Status ──────────────────────────────────────── */}
      <motion.div
        className="bg-white rounded-2xl border border-gray-100 p-8"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.35 }}
      >
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Data Pipeline Status</h2>

        <div className="flex items-center justify-between gap-6 mb-8">
          <div className="flex-1 bg-gray-50 rounded-xl border border-gray-100 p-5 text-center">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-3">
              <Database className="w-6 h-6 text-blue-500" strokeWidth={1.8} />
            </div>
            <p className="text-sm font-semibold text-gray-900">Sources</p>
            <p className="text-xs text-gray-500 mt-1">{dataSources.length} systems scanned</p>
          </div>

          <div className="flex flex-col items-center gap-1 flex-shrink-0">
            <ArrowRight className="w-5 h-5 text-gray-300" />
            <span className="text-[10px] text-gray-400 font-medium">Extract</span>
          </div>

          <div className="flex-1 bg-gray-50 rounded-xl border border-gray-100 p-5 text-center">
            <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mx-auto mb-3">
              <Activity className="w-6 h-6 text-amber-500" strokeWidth={1.8} />
            </div>
            <p className="text-sm font-semibold text-gray-900">Analysis Engine</p>
            <p className="text-xs text-gray-500 mt-1">AI-powered processing</p>
          </div>

          <div className="flex flex-col items-center gap-1 flex-shrink-0">
            <ArrowRight className="w-5 h-5 text-gray-300" />
            <span className="text-[10px] text-gray-400 font-medium">Report</span>
          </div>

          <div className="flex-1 bg-gray-50 rounded-xl border border-gray-100 p-5 text-center">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mx-auto mb-3">
              <Zap className="w-6 h-6 text-emerald-500" strokeWidth={1.8} />
            </div>
            <p className="text-sm font-semibold text-gray-900">Command Center</p>
            <p className="text-xs text-gray-500 mt-1">Assessment output</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
          <span className="flex items-center gap-1.5">
            <Database className="w-3.5 h-3.5 text-gray-400" />
            Total records scanned:
          </span>
          <span className="font-semibold text-gray-700">48,736</span>
          <span className="text-gray-300">|</span>
          <span className="font-semibold text-emerald-600">83% avg coverage</span>
          <span className="text-gray-300">|</span>
          <span>{completedCount} of {dataSources.length} systems complete</span>
        </div>
      </motion.div>

      {/* ── Cross-link to Last Mile Connectors ────────────────────── */}
      <a
        href={`${LASTMILE_URL}/connectors`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-sm text-blue-500 hover:text-blue-400 transition-colors"
      >
        View live system connections
        <ExternalLink className="w-3.5 h-3.5" strokeWidth={2} />
      </a>
    </div>
  );
}
