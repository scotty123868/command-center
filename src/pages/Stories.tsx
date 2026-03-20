import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TrendingUp,
  TrendingDown,
  ArrowRight,
  Building2,
  Users,
  DollarSign,
  Zap,
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts';

// ─── Types ──────────────────────────────────────────────────────────────────

interface MetricCard {
  label: string;
  value: string;
  trend: number; // positive = up, negative = down
  trendPositive: boolean; // is the trend direction good?
  sparkline: number[];
}

interface SavingsCategory {
  category: string;
  amount: number;
}

interface BeforeAfter {
  label: string;
  before: string;
  after: string;
}

interface Automation {
  name: string;
  status: 'live' | 'piloting' | 'planned';
  department: string;
}

interface CompanyData {
  name: string;
  industry: string;
  employees: number;
  revenue: string;
  aiScoreBefore: number;
  aiScoreAfter: number;
  totalSavings: string;
  metrics: MetricCard[];
  savings: SavingsCategory[];
  beforeAfter: BeforeAfter[];
  automations: Automation[];
}

// ─── Company Data ───────────────────────────────────────────────────────────

const companies: CompanyData[] = [
  {
    name: 'Meridian Industrial',
    industry: 'PE-Backed Industrial Services',
    employees: 1850,
    revenue: '$340M',
    aiScoreBefore: 34,
    aiScoreAfter: 87,
    totalSavings: '$4.2M/yr',
    metrics: [
      { label: 'License Waste Reduced', value: '62%', trend: 62, trendPositive: true, sparkline: [12, 22, 31, 40, 48, 55, 62] },
      { label: 'Workflows Automated', value: '18', trend: 38, trendPositive: true, sparkline: [2, 5, 8, 11, 13, 16, 18] },
      { label: 'Data Latency', value: 'Real-time', trend: -98, trendPositive: true, sparkline: [45, 38, 28, 18, 8, 2, 0.1] },
      { label: 'First-Visit Resolution', value: '68%', trend: 209, trendPositive: true, sparkline: [22, 30, 38, 46, 54, 62, 68] },
      { label: 'Cross-OpCo Visibility', value: '100%', trend: 100, trendPositive: true, sparkline: [0, 18, 35, 55, 72, 88, 100] },
      { label: 'Equipment Utilization', value: '84%', trend: 37.7, trendPositive: true, sparkline: [61, 65, 69, 73, 77, 81, 84] },
    ],
    savings: [
      { category: 'License Optimization', amount: 1800 },
      { category: 'Workflow Automation', amount: 920 },
      { category: 'Data Consolidation', amount: 640 },
      { category: 'Field Service Efficiency', amount: 540 },
      { category: 'Reporting Automation', amount: 300 },
    ],
    beforeAfter: [
      { label: 'License Utilization', before: '24%', after: '94%' },
      { label: 'Cross-OpCo Reporting', before: '45 days', after: 'Real-time' },
      { label: 'Equipment Utilization', before: '61%', after: '84%' },
      { label: 'Manual Workflows', before: '73%', after: '18%' },
    ],
    automations: [
      { name: 'License Reclamation Engine', status: 'live', department: 'IT' },
      { name: 'Cross-OpCo Data Pipeline', status: 'live', department: 'Analytics' },
      { name: 'Field Dispatch Optimization', status: 'live', department: 'Operations' },
      { name: 'Predictive Maintenance Alerts', status: 'piloting', department: 'Maintenance' },
      { name: 'Unified Procurement Workflow', status: 'planned', department: 'Procurement' },
    ],
  },
  {
    name: 'Oakwood Insurance',
    industry: 'Regional Carrier',
    employees: 800,
    revenue: '$400M GWP',
    aiScoreBefore: 41,
    aiScoreAfter: 82,
    totalSavings: '$2.1M/yr',
    metrics: [
      { label: 'Claims Processing', value: '5 min', trend: -88.9, trendPositive: true, sparkline: [45, 36, 28, 18, 12, 7, 5] },
      { label: 'License Waste Recovered', value: '$2.1M', trend: 100, trendPositive: true, sparkline: [0, 350, 720, 1100, 1500, 1800, 2100] },
      { label: 'Fraud Detection Rate', value: '2.3%', trend: 187.5, trendPositive: true, sparkline: [0.8, 1.0, 1.3, 1.6, 1.8, 2.1, 2.3] },
      { label: 'Call Center Automation', value: '60%', trend: 60, trendPositive: true, sparkline: [5, 15, 25, 35, 44, 52, 60] },
      { label: 'Policy Processing Speed', value: '3.2x', trend: 220, trendPositive: true, sparkline: [1, 1.4, 1.8, 2.2, 2.6, 2.9, 3.2] },
      { label: 'Customer Satisfaction', value: '91%', trend: 18, trendPositive: true, sparkline: [77, 80, 83, 85, 87, 89, 91] },
    ],
    savings: [
      { category: 'License Consolidation', amount: 860 },
      { category: 'Claims Automation', amount: 520 },
      { category: 'Fraud Prevention', amount: 380 },
      { category: 'Call Center AI', amount: 240 },
      { category: 'Document Processing', amount: 100 },
    ],
    beforeAfter: [
      { label: 'Claims Processing', before: '45 min', after: '5 min' },
      { label: 'License Spend', before: '$3.4M', after: '$1.3M' },
      { label: 'Fraud Detection', before: '0.8%', after: '2.3%' },
      { label: 'Customer Wait Time', before: '12 min', after: '30 sec' },
    ],
    automations: [
      { name: 'AI Claims Triage', status: 'live', department: 'Claims' },
      { name: 'Fraud Detection Model', status: 'live', department: 'Risk' },
      { name: 'Policy Document Parser', status: 'live', department: 'Underwriting' },
      { name: 'Voice-to-Text Call Summaries', status: 'piloting', department: 'Service' },
      { name: 'Automated Renewal Engine', status: 'planned', department: 'Sales' },
    ],
  },
  {
    name: 'Pinnacle Healthcare',
    industry: 'Health Services',
    employees: 420,
    revenue: '$95M',
    aiScoreBefore: 38,
    aiScoreAfter: 79,
    totalSavings: '$1.4M/yr',
    metrics: [
      { label: 'Call Center Headcount', value: '14', trend: -60, trendPositive: true, sparkline: [35, 30, 26, 22, 19, 16, 14] },
      { label: 'CSAT Improvement', value: '+23%', trend: 23, trendPositive: true, sparkline: [0, 4, 8, 12, 16, 20, 23] },
      { label: 'Agent Turnover', value: '12%', trend: -70, trendPositive: true, sparkline: [40, 34, 28, 22, 18, 15, 12] },
      { label: 'Knowledge Base Coverage', value: '98%', trend: 48.5, trendPositive: true, sparkline: [66, 72, 78, 84, 90, 95, 98] },
      { label: 'Avg Handle Time', value: '3.4 min', trend: -58.5, trendPositive: true, sparkline: [8.2, 7.0, 6.0, 5.1, 4.4, 3.8, 3.4] },
      { label: 'First-Call Resolution', value: '89%', trend: 45.9, trendPositive: true, sparkline: [61, 66, 72, 77, 82, 86, 89] },
    ],
    savings: [
      { category: 'Staffing Optimization', amount: 620 },
      { category: 'AI Knowledge Base', amount: 340 },
      { category: 'Process Automation', amount: 240 },
      { category: 'Training Reduction', amount: 120 },
      { category: 'Quality Monitoring', amount: 80 },
    ],
    beforeAfter: [
      { label: 'Agent Headcount', before: '35', after: '14' },
      { label: 'Annual Turnover', before: '40%', after: '12%' },
      { label: 'First-Call Resolution', before: '61%', after: '89%' },
      { label: 'Avg Handle Time', before: '8.2 min', after: '3.4 min' },
    ],
    automations: [
      { name: 'AI Call Routing & Triage', status: 'live', department: 'Service' },
      { name: 'Knowledge Base Auto-Update', status: 'live', department: 'Operations' },
      { name: 'Sentiment Analysis Dashboard', status: 'live', department: 'QA' },
      { name: 'Predictive Staffing Model', status: 'piloting', department: 'HR' },
      { name: 'Patient Follow-Up Automation', status: 'planned', department: 'Care' },
    ],
  },
  {
    name: 'Atlas Manufacturing',
    industry: 'PE-Backed, 4 OpCos',
    employees: 2100,
    revenue: '$320M',
    aiScoreBefore: 29,
    aiScoreAfter: 81,
    totalSavings: '$3.6M/yr',
    metrics: [
      { label: 'Duplicate Purchases Down', value: '85%', trend: -85, trendPositive: true, sparkline: [100, 82, 65, 48, 32, 20, 15] },
      { label: 'Inventory Visibility', value: '100%', trend: 100, trendPositive: true, sparkline: [0, 18, 38, 58, 75, 90, 100] },
      { label: 'Equipment Utilization Up', value: '+38%', trend: 38, trendPositive: true, sparkline: [0, 6, 12, 19, 25, 32, 38] },
      { label: 'Maintenance Costs Down', value: '28%', trend: -28, trendPositive: true, sparkline: [100, 92, 85, 80, 76, 73, 72] },
      { label: 'Cross-OpCo Procurement', value: '$1.2M saved', trend: 100, trendPositive: true, sparkline: [0, 180, 380, 580, 780, 1000, 1200] },
      { label: 'Physical Count Accuracy', value: '98.8%', trend: 8.6, trendPositive: true, sparkline: [91.7, 93, 94.5, 96, 97, 98, 98.8] },
    ],
    savings: [
      { category: 'Procurement Consolidation', amount: 1200 },
      { category: 'Inventory Optimization', amount: 840 },
      { category: 'Maintenance Efficiency', amount: 680 },
      { category: 'Equipment Utilization', amount: 560 },
      { category: 'Reporting Automation', amount: 320 },
    ],
    beforeAfter: [
      { label: 'Inventory Visibility', before: '0%', after: '100%' },
      { label: 'Duplicate Purchases', before: '$1.4M', after: '$210K' },
      { label: 'Physical Count Discrepancy', before: '8.3%', after: '1.2%' },
      { label: 'Equipment Utilization', before: '61%', after: '84%' },
    ],
    automations: [
      { name: 'Unified Inventory Platform', status: 'live', department: 'Supply Chain' },
      { name: 'Cross-OpCo Purchase Matching', status: 'live', department: 'Procurement' },
      { name: 'Predictive Maintenance System', status: 'live', department: 'Maintenance' },
      { name: 'Equipment Telemetry Dashboard', status: 'piloting', department: 'Operations' },
      { name: 'Automated Vendor Negotiation', status: 'planned', department: 'Procurement' },
    ],
  },
  {
    name: 'Northbridge Industries',
    industry: 'Diversified Industrial Conglomerate',
    employees: 42000,
    revenue: '$18.2B',
    aiScoreBefore: 52,
    aiScoreAfter: 88,
    totalSavings: '$24.8M/yr',
    metrics: [
      { label: 'Cross-OpCo Procurement', value: '$5.2M saved', trend: 100, trendPositive: true, sparkline: [0, 800, 1600, 2400, 3200, 4200, 5200] },
      { label: 'Workflows Automated', value: '184', trend: 283, trendPositive: true, sparkline: [0, 22, 48, 82, 110, 140, 184] },
      { label: 'License Waste Reduced', value: '89%', trend: 89, trendPositive: true, sparkline: [0, 18, 36, 52, 68, 80, 89] },
      { label: 'Predictive Maintenance', value: '94% uptime', trend: 18, trendPositive: true, sparkline: [76, 80, 84, 87, 90, 92, 94] },
      { label: 'Data Unification', value: '12/12 OpCos', trend: 100, trendPositive: true, sparkline: [4, 5, 7, 8, 10, 11, 12] },
      { label: 'Employee AI Adoption', value: '78%', trend: 78, trendPositive: true, sparkline: [8, 18, 32, 46, 58, 68, 78] },
    ],
    savings: [
      { category: 'Process Automation', amount: 8200 },
      { category: 'Verification Catches', amount: 6400 },
      { category: 'Adoption Uplift', amount: 5600 },
      { category: 'License Recovery', amount: 4600 },
    ],
    beforeAfter: [
      { label: 'Data Unification', before: '4 of 12 OpCos', after: '12 of 12 OpCos' },
      { label: 'Procurement Savings', before: '$0', after: '$5.2M/yr' },
      { label: 'Workflow Automation', before: '48 manual', after: '184 automated' },
      { label: 'License Utilization', before: '58%', after: '94%' },
    ],
    automations: [
      { name: 'Cross-OpCo Procurement AI', status: 'live', department: 'Procurement' },
      { name: 'Predictive Maintenance Fleet', status: 'live', department: 'Manufacturing' },
      { name: 'Financial Close Automation', status: 'live', department: 'Finance' },
      { name: 'Supply Chain Optimization', status: 'piloting', department: 'Logistics' },
      { name: 'Clinical Trial Data Pipeline', status: 'planned', department: 'Health Sciences' },
    ],
  },
  {
    name: 'Republic of Estonia',
    industry: 'Digital Government',
    employees: 28500,
    revenue: '€12.4B budget',
    aiScoreBefore: 68,
    aiScoreAfter: 94,
    totalSavings: '€18.6M/yr',
    metrics: [
      { label: 'Tax Compliance Auto', value: '94% accuracy', trend: 94, trendPositive: true, sparkline: [42, 56, 68, 78, 84, 90, 94] },
      { label: 'Citizen Services AI', value: '24/7', trend: 100, trendPositive: true, sparkline: [0, 15, 32, 50, 68, 85, 100] },
      { label: 'Workflows Automated', value: '126', trend: 103, trendPositive: true, sparkline: [0, 16, 34, 58, 78, 96, 126] },
      { label: 'Cross-Ministry Data', value: '8/8 connected', trend: 100, trendPositive: true, sparkline: [3, 4, 5, 6, 7, 7, 8] },
      { label: 'Legacy Systems Retired', value: '24 of 42', trend: 57, trendPositive: true, sparkline: [0, 4, 8, 12, 16, 20, 24] },
      { label: 'Civil Servant Adoption', value: '82%', trend: 82, trendPositive: true, sparkline: [12, 24, 38, 52, 64, 74, 82] },
    ],
    savings: [
      { category: 'Process Automation', amount: 6800 },
      { category: 'Adoption Uplift', amount: 5200 },
      { category: 'Verification Catches', amount: 4200 },
      { category: 'License Recovery', amount: 2400 },
    ],
    beforeAfter: [
      { label: 'Tax Processing', before: '14 days manual', after: 'Real-time AI' },
      { label: 'Citizen Wait Time', before: '3-5 days', after: '< 2 minutes' },
      { label: 'Cross-Ministry Data', before: '3 of 8 connected', after: '8 of 8 connected' },
      { label: 'Legacy Systems', before: '42 active', after: '18 remaining' },
    ],
    automations: [
      { name: 'Tax Compliance AI Engine', status: 'live', department: 'Tax & Customs' },
      { name: 'Citizen Services Chatbot', status: 'live', department: 'Citizen Services' },
      { name: 'Healthcare Records Integration', status: 'live', department: 'TEHIK' },
      { name: 'Cross-Ministry Data Platform', status: 'piloting', department: 'RIA' },
      { name: 'EU Interoperability Gateway', status: 'planned', department: 'Digital Office' },
    ],
  },
];

// ─── Mini Sparkline Component ───────────────────────────────────────────────

function Sparkline({ data }: { data: number[] }) {
  const chartData = data.map((v, i) => ({ i, v }));
  return (
    <div className="w-20 h-8">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <Line
            type="monotone"
            dataKey="v"
            stroke="#4285F4"
            strokeWidth={1.5}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

// ─── AI Score Gauge ─────────────────────────────────────────────────────────

function AiGauge({ before, after }: { before: number; after: number }) {
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const progress = (after / 100) * circumference;

  return (
    <div className="flex items-center gap-3">
      <div className="relative w-16 h-16">
        <svg viewBox="0 0 64 64" className="w-full h-full -rotate-90">
          <circle cx="32" cy="32" r={radius} fill="none" stroke="#E5E7EB" strokeWidth="5" />
          <motion.circle
            cx="32"
            cy="32"
            r={radius}
            fill="none"
            stroke="#4285F4"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: circumference - progress }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold text-[#1B1B1B]">{after}</span>
        </div>
      </div>
      <div className="text-xs text-[#6B7280]">
        <div>AI Readiness</div>
        <div className="flex items-center gap-1">
          <span className="text-[#9CA3AF] font-mono">{before}</span>
          <ArrowRight className="w-3 h-3 text-[#9CA3AF]" />
          <span className="text-[#4285F4] font-bold font-mono">{after}</span>
        </div>
      </div>
    </div>
  );
}

// ─── Status Dot ─────────────────────────────────────────────────────────────

function StatusDot({ status }: { status: 'live' | 'piloting' | 'planned' }) {
  const colors = {
    live: 'bg-[#10B981]',
    piloting: 'bg-amber-400',
    planned: 'bg-gray-300',
  };
  const labels = {
    live: 'Live',
    piloting: 'Piloting',
    planned: 'Planned',
  };
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#6B7280]">
      <span className={`w-2 h-2 rounded-full ${colors[status]}`} />
      {labels[status]}
    </span>
  );
}

// ─── Custom Tooltip ─────────────────────────────────────────────────────────

function SavingsTooltip({ active, payload }: { active?: boolean; payload?: Array<{ value: number }> }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-lg text-sm">
      <span className="font-semibold text-[#1B1B1B]">${payload[0].value}K</span>
    </div>
  );
}

// ─── Company Dashboard ──────────────────────────────────────────────────────

function CompanyDashboard({ company }: { company: CompanyData }) {
  const savingsData = company.savings.map((s) => ({
    category: s.category,
    amount: s.amount,
  }));

  return (
    <div className="space-y-6">
      {/* Section 1: Company Overview Bar */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div>
              <h2 className="text-2xl font-bold text-[#1B1B1B]">{company.name}</h2>
              <p className="text-sm text-[#6B7280]">{company.industry}</p>
            </div>
            <div className="hidden sm:flex items-center gap-6 pl-6 border-l border-gray-200">
              <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                <DollarSign className="w-4 h-4" />
                <span className="font-semibold text-[#1B1B1B]">{company.revenue}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                <Users className="w-4 h-4" />
                <span className="font-semibold text-[#1B1B1B]">{company.employees.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                <Zap className="w-4 h-4 text-[#10B981]" />
                <span className="font-semibold text-[#10B981]">{company.totalSavings} identified</span>
              </div>
            </div>
          </div>
          <AiGauge before={company.aiScoreBefore} after={company.aiScoreAfter} />
        </div>
      </div>

      {/* Section 2: Key Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {company.metrics.map((metric, i) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: i * 0.04 }}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5"
          >
            <p className="text-xs font-medium text-[#6B7280] uppercase tracking-wide mb-2">
              {metric.label}
            </p>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-2xl font-bold text-[#1B1B1B]">{metric.value}</p>
                <div className="flex items-center gap-1 mt-1">
                  {metric.trendPositive ? (
                    <TrendingUp className="w-3.5 h-3.5 text-[#10B981]" />
                  ) : (
                    <TrendingDown className="w-3.5 h-3.5 text-[#EF4444]" />
                  )}
                  <span
                    className={`text-xs font-semibold ${
                      metric.trendPositive ? 'text-[#10B981]' : 'text-[#EF4444]'
                    }`}
                  >
                    {metric.trend > 0 ? '+' : ''}{Math.abs(metric.trend).toFixed(0)}%
                  </span>
                </div>
              </div>
              <Sparkline data={metric.sparkline} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Section 3: Savings Breakdown */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h3 className="text-sm font-semibold text-[#1B1B1B] uppercase tracking-wide mb-4">
          Savings Breakdown ($K)
        </h3>
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={savingsData} layout="vertical" margin={{ left: 10, right: 24 }}>
              <XAxis type="number" tick={{ fontSize: 12, fill: '#6B7280' }} tickFormatter={(v) => `$${v}K`} />
              <YAxis
                type="category"
                dataKey="category"
                tick={{ fontSize: 12, fill: '#6B7280' }}
                width={160}
              />
              <Tooltip content={<SavingsTooltip />} cursor={{ fill: 'rgba(66,133,244,0.06)' }} />
              <Bar dataKey="amount" fill="#4285F4" radius={[0, 6, 6, 0]} barSize={24} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Section 4: Before & After Comparison */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h3 className="text-sm font-semibold text-[#1B1B1B] uppercase tracking-wide mb-4">
          Before &amp; After
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {company.beforeAfter.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-gray-100 bg-[#FAFBFF] p-4 text-center"
            >
              <p className="text-xs font-medium text-[#6B7280] uppercase tracking-wide mb-3">
                {item.label}
              </p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-lg font-bold font-mono text-[#EF4444]/70">{item.before}</span>
                <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <span className="text-lg font-bold font-mono text-[#10B981]">{item.after}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 5: Active Automations */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h3 className="text-sm font-semibold text-[#1B1B1B] uppercase tracking-wide mb-4">
          Active Automations
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-2 pr-4 text-xs font-semibold text-[#6B7280] uppercase tracking-wide">
                  Workflow
                </th>
                <th className="text-left py-2 pr-4 text-xs font-semibold text-[#6B7280] uppercase tracking-wide">
                  Department
                </th>
                <th className="text-left py-2 text-xs font-semibold text-[#6B7280] uppercase tracking-wide">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {company.automations.map((a) => (
                <tr key={a.name} className="border-b border-gray-50 last:border-0">
                  <td className="py-2.5 pr-4 font-medium text-[#1B1B1B]">{a.name}</td>
                  <td className="py-2.5 pr-4 text-[#6B7280]">{a.department}</td>
                  <td className="py-2.5">
                    <StatusDot status={a.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default function Stories() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        <h1 className="text-3xl font-bold text-[#1B1B1B]">Company Dashboards</h1>
        <p className="text-[#6B7280] mt-1 text-lg">
          Transformation results by client company
        </p>
      </motion.div>

      {/* Company Switcher Tab Bar */}
      <div className="border-b border-gray-200">
        <nav className="flex gap-1 -mb-px overflow-x-auto scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }} aria-label="Company tabs">
          {companies.map((company, index) => (
            <button
              key={company.name}
              onClick={() => setActiveIndex(index)}
              className={`relative whitespace-nowrap px-5 py-3 text-sm font-medium transition-colors ${
                activeIndex === index
                  ? 'text-[#4285F4] font-semibold'
                  : 'text-[#6B7280] hover:text-[#1B1B1B]'
              }`}
            >
              <span className="flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                {company.name}
              </span>
              {activeIndex === index && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4285F4]"
                  transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                />
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Dashboard Content with AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
        >
          <CompanyDashboard company={companies[activeIndex]} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
