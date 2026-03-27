import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Database,
  Lock,
  ChevronDown,
  ChevronUp,
  ArrowDown,
  Activity,
  AlertTriangle,
  Server,
  Layers,
  BarChart3,
  ShieldCheck,
} from 'lucide-react';
import PreliminaryBanner from '../components/PreliminaryBanner';

/* ── Gap Data ────────────────────────────────────────────────────────────── */

interface GapDetail {
  id: number;
  name: string;
  sources: string;
  gapLabel: string;
  blocked: string;
  impact: string;
  impactNum: number;
  sourceList: string[];
  missingLayer: string;
  blockedCapabilities: string[];
  recommendedSolution: string;
}

const gaps: GapDetail[] = [
  {
    id: 1,
    name: 'Unified General Ledger',
    sources: '4 separate ERP/accounting systems',
    gapLabel: 'No unified general ledger',
    blocked: 'Real-time consolidated P&L',
    impact: '$400K/yr',
    impactNum: 400000,
    sourceList: [
      'SAP ERP (HCC, HRSI, HTI)',
      'Primavera P6 (HCC, Herzog Energy)',
      'Custom Dispatch System (built 2009)',
      'FRA Compliance Database (HSI)',
    ],
    missingLayer:
      'No unified chart of accounts or general ledger aggregation layer exists. Each entity closes books independently with different timelines, account structures, and reporting standards.',
    blockedCapabilities: [
      'Real-time consolidated P&L across all entities',
      'Automated intercompany elimination',
      'Cash flow forecasting with AI/ML models',
      'Board-ready financial dashboards',
    ],
    recommendedSolution:
      'Deploy a unified chart of accounts in Databricks Lakehouse with automated ETL from SAP ERP, Primavera P6, and legacy systems. Estimated implementation: 8-12 weeks.',
  },
  {
    id: 2,
    name: 'Centralized Equipment Catalog',
    sources: 'SAP MM, FileMaker, 47 Excel files, Access DB',
    gapLabel: 'No centralized equipment catalog',
    blocked: 'Cross-Division equipment sharing, predictive maintenance',
    impact: '$890K/yr',
    impactNum: 890000,
    sourceList: [
      'Trimble GPS Fleet Tracking (HCC, HRSI)',
      'Custom Dispatch System (equipment scheduling)',
      'TAM-4 Geometry Car Data (HSI rail testing)',
      'Kronos/UKG Workforce (maintenance crew logs)',
    ],
    missingLayer:
      'No single source of truth for equipment inventory, location, condition, or maintenance history. Asset IDs are inconsistent across systems, preventing cross-referencing.',
    blockedCapabilities: [
      'Cross-Division equipment sharing and utilization optimization',
      'Predictive maintenance using sensor + history data',
      'Depreciation and capex planning models',
      'Field technician mobile lookup',
    ],
    recommendedSolution:
      'Build a master equipment registry in the lakehouse with fuzzy-matching to reconcile asset IDs. Integrate IoT sensor feeds for real-time condition monitoring. Estimated implementation: 10-14 weeks.',
  },
  {
    id: 3,
    name: 'Unified Customer Layer',
    sources: 'Salesforce (partial), Google Sheets, email',
    gapLabel: 'No unified customer layer',
    blocked: 'Cross-sell modeling, churn prediction',
    impact: '$340K/yr',
    impactNum: 340000,
    sourceList: [
      'SAP ERP (partial customer data — HCC only)',
      'PTC Signal Telemetry (HTI client deployments)',
      'Primavera P6 (project-based client records)',
    ],
    missingLayer:
      'No 360-degree customer view exists. The same customer may appear in multiple divisions under different names, with no deduplication or relationship mapping.',
    blockedCapabilities: [
      'Cross-sell modeling across operating companies',
      'Customer churn prediction and retention scoring',
      'Lifetime value calculation',
      'Unified customer communication history',
    ],
    recommendedSolution:
      'Implement customer master data management (MDM) with identity resolution. Consolidate into a unified customer graph in the lakehouse. Estimated implementation: 6-10 weeks.',
  },
  {
    id: 4,
    name: 'Digital Field Data Capture',
    sources: 'Paper forms, phone photos, verbal reports',
    gapLabel: 'No digital field data capture',
    blocked: 'AI troubleshooting, compliance automation',
    impact: '$520K/yr',
    impactNum: 520000,
    sourceList: [
      'Paper inspection forms (handwritten)',
      'Phone photos stored in individual camera rolls',
      'Verbal reports relayed via phone calls',
      'Text messages between field and office staff',
    ],
    missingLayer:
      'No structured digital capture exists for field operations. Critical operational data is trapped in analog formats, making it impossible to search, analyze, or train models.',
    blockedCapabilities: [
      'AI-powered troubleshooting and diagnostic assistant',
      'Automated compliance documentation and audit trails',
      'Pattern recognition for recurring equipment failures',
      'Real-time field operations dashboard',
    ],
    recommendedSolution:
      'Deploy a mobile-first field data capture app with offline capability, photo OCR, and voice-to-text. Data flows directly into the lakehouse. Estimated implementation: 8-12 weeks.',
  },
  {
    id: 5,
    name: 'Centralized Usage Telemetry',
    sources: '15+ SaaS vendor portals (no API)',
    gapLabel: 'No centralized usage telemetry',
    blocked: 'License optimization, shadow IT detection',
    impact: '$2.1M/yr',
    impactNum: 2100000,
    sourceList: [
      '15+ SaaS vendor admin portals (manual login required)',
      'No API integrations or usage data exports configured',
      'IT team manually checks portals quarterly',
      'No visibility into actual per-user utilization',
    ],
    missingLayer:
      'No automated collection of software usage telemetry across the organization. License counts, actual usage, and spend are tracked in disconnected spreadsheets updated quarterly at best.',
    blockedCapabilities: [
      'Automated license optimization and right-sizing',
      'Shadow IT detection and governance',
      'SaaS spend forecasting and budget alerts',
      'Vendor contract negotiation with usage data',
    ],
    recommendedSolution:
      'Deploy a SaaS management platform (e.g., Zylo or Productiv) with SSO integration for automated usage tracking. Feed telemetry into the lakehouse for analytics. Estimated implementation: 4-6 weeks.',
  },
  {
    id: 6,
    name: 'Regulatory Data Pipeline',
    sources: 'State systems (manual), internal spreadsheets',
    gapLabel: 'No regulatory data pipeline',
    blocked: 'Automated compliance, audit trail',
    impact: '$180K/yr',
    impactNum: 180000,
    sourceList: [
      'State regulatory portals (manual data entry)',
      'Internal compliance spreadsheets',
      'Email-based reporting to regulatory bodies',
      'PDF certificates stored in shared drives',
    ],
    missingLayer:
      'No automated pipeline for ingesting regulatory requirements, deadlines, or submission data. Compliance status is tracked manually with significant risk of missed deadlines.',
    blockedCapabilities: [
      'Automated compliance reporting and submission',
      'Complete audit trail with version history',
      'Proactive deadline and renewal alerts',
      'Regulatory change impact analysis',
    ],
    recommendedSolution:
      'Build automated regulatory data pipelines with web scraping for state portals, structured document storage, and deadline-driven alerting. Estimated implementation: 6-8 weeks.',
  },
];

const statCards = [
  { label: '15 Systems Mapped', color: 'blue' as const },
  { label: '23 Active Connections', color: 'green' as const },
  { label: '14 Missing Connections', color: 'red' as const },
  { label: '$3.8M Annual Impact', color: 'red' as const },
];

const colorMap = {
  blue: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-700',
    icon: 'text-blue-500',
  },
  green: {
    bg: 'bg-green-50',
    border: 'border-green-200',
    text: 'text-green-700',
    icon: 'text-green-500',
  },
  red: {
    bg: 'bg-red-50',
    border: 'border-red-200',
    text: 'text-red-700',
    icon: 'text-red-500',
  },
};

const statIcons = [Server, Activity, AlertTriangle, BarChart3];

/* ── Component ───────────────────────────────────────────────────────────── */

export default function DataFlow() {
  const [expandedGap, setExpandedGap] = useState<number | null>(null);

  const toggle = (id: number) =>
    setExpandedGap((prev) => (prev === id ? null : id));

  return (
    <div className="space-y-12 pb-16">
      <PreliminaryBanner />

      {/* ── Section 1: Header ─────────────────────────────────────────────── */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Data Flow Intelligence
        </h1>
        <p className="mt-1 text-gray-500">
          Automated detection of data connectivity gaps across your organization
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {statCards.map((card, i) => {
            const c = colorMap[card.color];
            const Icon = statIcons[i];
            return (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className={`rounded-2xl border ${c.border} ${c.bg} p-5 shadow-sm`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`h-5 w-5 ${c.icon}`} />
                  <span className={`text-sm font-semibold ${c.text}`}>
                    {card.label}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── Section 2: Data Gap Map ───────────────────────────────────────── */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Critical Data Gap Map
        </h2>

        <div className="space-y-3">
          {gaps.map((gap, i) => (
            <motion.div
              key={gap.id}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.07 }}
              className="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden"
            >
              <div className="grid grid-cols-12 items-center gap-4 px-5 py-4">
                {/* Source Systems */}
                <div className="col-span-3 flex items-start gap-2">
                  <Database className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                  <span className="text-sm text-gray-700">{gap.sources}</span>
                </div>

                {/* Gap Indicator */}
                <div className="col-span-3 flex items-center justify-center gap-2">
                  <motion.div
                    className="h-3 w-3 rounded-full bg-red-500"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                  <span className="rounded-md border border-dashed border-red-300 bg-red-50 px-3 py-1 text-xs font-semibold text-red-600">
                    GAP
                  </span>
                  <span className="text-xs text-red-500 max-w-[180px] truncate">
                    {gap.gapLabel}
                  </span>
                </div>

                {/* Blocked Capability */}
                <div className="col-span-4 flex items-start gap-2">
                  <Lock className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" />
                  <span className="text-sm text-gray-500">{gap.blocked}</span>
                </div>

                {/* Impact */}
                <div className="col-span-2 text-right">
                  <span className="font-mono text-sm font-semibold text-red-600">
                    {gap.impact}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Bar */}
        <div className="mt-4 rounded-2xl bg-gray-900 px-6 py-4 text-center">
          <span className="text-sm font-semibold text-gray-300">
            Total Quantified Data Gap Impact:{' '}
          </span>
          <span className="font-mono text-lg font-bold text-red-400">
            $3.8M/year
          </span>
        </div>
      </div>

      {/* ── Section 3: Expandable Gap Details ─────────────────────────────── */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Gap Details
        </h2>

        <div className="space-y-3">
          {gaps.map((gap) => {
            const isOpen = expandedGap === gap.id;
            return (
              <div
                key={gap.id}
                className="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden"
              >
                {/* Collapsed Header */}
                <button
                  onClick={() => toggle(gap.id)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-50">
                      <AlertTriangle className="h-4 w-4 text-red-500" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-gray-900">
                        {gap.name}
                      </span>
                      <span className="ml-3 font-mono text-xs font-semibold text-red-500">
                        {gap.impact}
                      </span>
                    </div>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </button>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-gray-100 px-5 py-5 space-y-5">
                        {/* Source Systems */}
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                            Source Systems
                          </p>
                          <ul className="space-y-1">
                            {gap.sourceList.map((s, i) => (
                              <li
                                key={i}
                                className="flex items-center gap-2 text-sm text-gray-600"
                              >
                                <Database className="h-3.5 w-3.5 text-blue-400" />
                                {s}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Missing Data Layer */}
                        <div className="border-l-4 border-red-400 pl-4">
                          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                            Missing Data Layer
                          </p>
                          <p className="text-sm text-gray-700">
                            {gap.missingLayer}
                          </p>
                        </div>

                        {/* Blocked Capabilities */}
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                            Blocked Capabilities
                          </p>
                          <ul className="space-y-1">
                            {gap.blockedCapabilities.map((b, i) => (
                              <li
                                key={i}
                                className="flex items-center gap-2 text-sm text-gray-600"
                              >
                                <Lock className="h-3.5 w-3.5 text-gray-400" />
                                {b}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Recommended Solution */}
                        <div className="border-l-4 border-green-400 pl-4">
                          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                            Recommended Solution
                          </p>
                          <p className="text-sm text-gray-700">
                            {gap.recommendedSolution}
                          </p>
                        </div>

                        {/* Impact Callout */}
                        <div className="rounded-xl bg-red-50 border border-red-100 px-4 py-3 flex items-center gap-3">
                          <BarChart3 className="h-5 w-5 text-red-500" />
                          <div>
                            <span className="text-xs text-red-500 font-medium">
                              Annual Impact
                            </span>
                            <p className="font-mono text-lg font-bold text-red-600">
                              {gap.impact}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Section 4: Recommended Architecture ───────────────────────────── */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Proposed: Unified Data Architecture
        </h2>

        <div className="rounded-2xl border border-gray-100 bg-white shadow-sm p-8">
          {/* Division Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {['HCC — Rail & Highway Construction', 'HRSI — Railroad Services', 'HSI — Rail Testing', 'HTI — Signal & PTC', 'HTSI — Transit Services', 'HE — Energy', 'GG — Environmental'].map(
              (name, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="rounded-xl bg-green-50 border border-green-200 px-4 py-2 text-sm font-medium text-green-700"
                >
                  {name}
                </motion.div>
              ),
            )}
          </div>

          {/* Down Arrows */}
          <div className="flex justify-center my-4 gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.15 }}
              >
                <ArrowDown className="h-5 w-5 text-green-400" />
              </motion.div>
            ))}
          </div>

          {/* Central Lakehouse Node */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="mx-auto max-w-md rounded-2xl bg-gray-900 px-8 py-5 text-center shadow-lg"
          >
            <div className="flex items-center justify-center gap-3">
              <Layers className="h-6 w-6 text-green-400" />
              <span className="text-lg font-bold text-white">
                Databricks Lakehouse
              </span>
            </div>
            <p className="mt-1 text-xs text-gray-400">
              Unified data platform — single source of truth
            </p>
          </motion.div>

          {/* Down Arrows */}
          <div className="flex justify-center my-4 gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 + i * 0.15 }}
              >
                <ArrowDown className="h-5 w-5 text-green-400" />
              </motion.div>
            ))}
          </div>

          {/* Benefit Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: Activity,
                title: 'Real-time cross-entity visibility',
                desc: 'Consolidated dashboards across all operating companies',
              },
              {
                icon: Layers,
                title: 'AI/ML model training enabled',
                desc: 'Unified, clean data ready for predictive analytics',
              },
              {
                icon: ShieldCheck,
                title: 'Automated compliance reporting',
                desc: 'Continuous audit trails with regulatory pipelines',
              },
            ].map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + i * 0.1 }}
                className="rounded-xl border border-green-100 bg-green-50 p-4 text-center"
              >
                <benefit.icon className="mx-auto h-6 w-6 text-green-600 mb-2" />
                <p className="text-sm font-semibold text-gray-900">
                  {benefit.title}
                </p>
                <p className="mt-1 text-xs text-gray-500">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* ROI Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="mt-6 rounded-xl bg-gray-50 border border-gray-200 px-6 py-4 text-center"
          >
            <span className="text-sm text-gray-500">
              Investment:{' '}
              <span className="font-mono font-semibold text-gray-900">
                $200K
              </span>{' '}
              &middot; Annual Return:{' '}
              <span className="font-mono font-semibold text-green-600">
                $3.8M
              </span>{' '}
              &middot; ROI:{' '}
              <span className="font-mono font-bold text-green-600">
                19x Year 1
              </span>
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
