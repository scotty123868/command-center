import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TrendingUp,
  TrendingDown,
  ArrowRight,
  Building2,
  Users,
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
import PreliminaryBanner from '../components/PreliminaryBanner';

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
  aiScoreBefore: number;
  aiScoreAfter: number;
  totalSavings: string;
  metrics: MetricCard[];
  savings: SavingsCategory[];
  beforeAfter: BeforeAfter[];
  automations: Automation[];
}

// ─── Division Data ─────────────────────────────────────────────────────────

const divisions: CompanyData[] = [
  {
    name: 'Herzog Contracting Corp',
    industry: 'Rail & Highway Construction',
    employees: 1200,

    aiScoreBefore: 32,
    aiScoreAfter: 78,
    totalSavings: '$2.1M/yr',
    metrics: [
      { label: 'License Waste Reduced', value: '68%', trend: 68, trendPositive: true, sparkline: [10, 20, 30, 40, 50, 60, 68] },
      { label: 'Workflows Automated', value: '22', trend: 100, trendPositive: true, sparkline: [0, 3, 6, 10, 14, 18, 22] },
      { label: 'Equipment Utilization', value: '82%', trend: 34, trendPositive: true, sparkline: [61, 65, 69, 73, 77, 80, 82] },
      { label: 'Project Estimation Speed', value: '2.5x', trend: 150, trendPositive: true, sparkline: [1, 1.3, 1.6, 1.9, 2.1, 2.3, 2.5] },
      { label: 'Dispatch Efficiency', value: '+42%', trend: 42, trendPositive: true, sparkline: [0, 8, 16, 24, 30, 36, 42] },
      { label: 'Subcontractor Compliance', value: '96%', trend: 33, trendPositive: true, sparkline: [72, 76, 80, 84, 88, 92, 96] },
    ],
    savings: [
      { category: 'License Reclamation', amount: 980 },
      { category: 'Project Estimation AI', amount: 520 },
      { category: 'Equipment Dispatch', amount: 380 },
      { category: 'Paving Automation', amount: 220 },
    ],
    beforeAfter: [
      { label: 'License Utilization', before: '32%', after: '92%' },
      { label: 'Project Estimation', before: '2 weeks', after: '3 days' },
      { label: 'Equipment Idle Rate', before: '18%', after: '6%' },
      { label: 'Manual Workflows', before: '78%', after: '22%' },
    ],
    automations: [
      { name: 'License Reclamation Engine', status: 'live', department: 'IT' },
      { name: 'GPS Fleet Intelligence', status: 'live', department: 'Operations' },
      { name: 'AI Project Estimation', status: 'piloting', department: 'Estimating' },
      { name: 'Paving Operations Automation', status: 'planned', department: 'Field Ops' },
    ],
  },
  {
    name: 'Herzog Railroad Services',
    industry: 'Railroad Maintenance & Equipment',
    employees: 380,

    aiScoreBefore: 36,
    aiScoreAfter: 80,
    totalSavings: '$820K/yr',
    metrics: [
      { label: 'Maintenance Scheduling', value: 'AI-driven', trend: 100, trendPositive: true, sparkline: [0, 15, 32, 50, 68, 85, 100] },
      { label: 'Car Repair Tracking', value: 'Digital', trend: 100, trendPositive: true, sparkline: [0, 20, 40, 60, 75, 90, 100] },
      { label: 'License Waste Reduced', value: '62%', trend: 62, trendPositive: true, sparkline: [8, 18, 28, 38, 48, 56, 62] },
      { label: 'Crew Idle Time', value: '-18%', trend: -18, trendPositive: true, sparkline: [22, 20, 18, 15, 12, 8, 4] },
      { label: 'Equipment Uptime', value: '94%', trend: 18, trendPositive: true, sparkline: [76, 80, 84, 87, 90, 92, 94] },
      { label: 'Leasing Optimization', value: '$200K saved', trend: 100, trendPositive: true, sparkline: [0, 30, 60, 100, 140, 170, 200] },
    ],
    savings: [
      { category: 'Maintenance AI', amount: 240 },
      { category: 'License Reclamation', amount: 200 },
      { category: 'Car Repair Tracking', amount: 180 },
      { category: 'Leasing Optimization', amount: 200 },
    ],
    beforeAfter: [
      { label: 'Maintenance Planning', before: 'Manual/weekly', after: 'AI real-time' },
      { label: 'Car Repair Records', before: 'Paper-based', after: 'Digital + AI' },
      { label: 'License Utilization', before: '38%', after: '90%' },
      { label: 'Crew Idle Time', before: '22%', after: '4%' },
    ],
    automations: [
      { name: 'AI Maintenance Scheduler', status: 'live', department: 'Maintenance' },
      { name: 'Digital Car Repair Tracking', status: 'live', department: 'Operations' },
      { name: 'Predictive Equipment Maintenance', status: 'piloting', department: 'Fleet' },
      { name: 'AI Leasing Demand Forecast', status: 'planned', department: 'Management' },
    ],
  },
  {
    name: 'Herzog Services (Rail Testing)',
    industry: 'Ultrasonic Rail Testing',
    employees: 220,

    aiScoreBefore: 42,
    aiScoreAfter: 84,
    totalSavings: '$680K/yr',
    metrics: [
      { label: 'Defect Detection Rate', value: '99%', trend: 8.8, trendPositive: true, sparkline: [91, 93, 95, 96, 97, 98, 99] },
      { label: 'False Positive Rate', value: '11%', trend: -67.6, trendPositive: true, sparkline: [34, 28, 22, 18, 14, 12, 11] },
      { label: 'FRA Reporting', value: 'Automated', trend: 100, trendPositive: true, sparkline: [0, 18, 36, 54, 72, 88, 100] },
      { label: 'Track-Miles/Day', value: '100', trend: 25, trendPositive: true, sparkline: [80, 84, 88, 92, 95, 98, 100] },
      { label: 'Analyst Review Time', value: '-79%', trend: -79, trendPositive: true, sparkline: [210, 160, 120, 90, 65, 50, 45] },
      { label: 'LIDAR Utilization', value: '85%', trend: 85, trendPositive: true, sparkline: [5, 18, 32, 48, 62, 74, 85] },
    ],
    savings: [
      { category: 'AI Defect Detection', amount: 280 },
      { category: 'License Reclamation', amount: 140 },
      { category: 'FRA Reporting Automation', amount: 120 },
      { category: 'LIDAR Ballast Analysis', amount: 140 },
    ],
    beforeAfter: [
      { label: 'Defect Detection', before: '91%', after: '99%' },
      { label: 'False Positive Rate', before: '34%', after: '11%' },
      { label: 'Analyst Time/Segment', before: '3.5 hours', after: '45 minutes' },
      { label: 'LIDAR Analysis', before: 'Unused', after: '85% automated' },
    ],
    automations: [
      { name: 'AI Track Defect Detection', status: 'live', department: 'Rail Testing' },
      { name: 'Automated FRA Reporting', status: 'live', department: 'Compliance' },
      { name: 'LIDAR Ballast Analysis', status: 'piloting', department: 'Engineering' },
      { name: 'Predictive Degradation Models', status: 'planned', department: 'Analytics' },
    ],
  },
  {
    name: 'Herzog Technologies',
    industry: 'Signal & PTC Systems',
    employees: 310,

    aiScoreBefore: 48,
    aiScoreAfter: 86,
    totalSavings: '$740K/yr',
    metrics: [
      { label: 'PTC System Monitoring', value: 'Real-time', trend: 100, trendPositive: true, sparkline: [0, 18, 36, 54, 72, 88, 100] },
      { label: 'Signal Design Speed', value: '2.1x', trend: 110, trendPositive: true, sparkline: [1, 1.2, 1.4, 1.6, 1.8, 2.0, 2.1] },
      { label: 'License Waste Reduced', value: '65%', trend: 65, trendPositive: true, sparkline: [8, 18, 28, 38, 48, 58, 65] },
      { label: 'GIS Data Quality', value: '98%', trend: 22, trendPositive: true, sparkline: [80, 84, 88, 92, 94, 96, 98] },
      { label: 'Project Estimation', value: '+35% accuracy', trend: 35, trendPositive: true, sparkline: [0, 5, 12, 18, 24, 30, 35] },
      { label: 'Compliance Automation', value: '88%', trend: 88, trendPositive: true, sparkline: [5, 18, 32, 48, 62, 76, 88] },
    ],
    savings: [
      { category: 'License Reclamation', amount: 220 },
      { category: 'PTC Data Integration', amount: 200 },
      { category: 'Signal Design AI', amount: 180 },
      { category: 'GIS Automation', amount: 140 },
    ],
    beforeAfter: [
      { label: 'PTC Monitoring', before: 'Batch reports', after: 'Real-time AI' },
      { label: 'Signal Design Time', before: '6 weeks', after: '2.5 weeks' },
      { label: 'License Utilization', before: '48%', after: '92%' },
      { label: 'GIS Data Entry', before: 'Manual', after: 'Auto-ingest' },
    ],
    automations: [
      { name: 'PTC Performance Monitoring', status: 'live', department: 'Engineering' },
      { name: 'AI Signal Design Assistant', status: 'live', department: 'Design' },
      { name: 'GIS Auto-Ingest Pipeline', status: 'piloting', department: 'GIS' },
      { name: 'Digital Twin Signal Corridors', status: 'planned', department: 'Engineering' },
    ],
  },
  {
    name: 'Herzog Transit Services',
    industry: 'Passenger Rail Operations',
    employees: 480,

    aiScoreBefore: 40,
    aiScoreAfter: 82,
    totalSavings: '$860K/yr',
    metrics: [
      { label: 'Schedule Optimization', value: '+28% efficiency', trend: 28, trendPositive: true, sparkline: [0, 4, 8, 14, 18, 24, 28] },
      { label: 'Vehicle Uptime', value: '96%', trend: 14, trendPositive: true, sparkline: [82, 84, 87, 90, 92, 94, 96] },
      { label: 'License Waste Reduced', value: '72%', trend: 72, trendPositive: true, sparkline: [5, 16, 28, 40, 52, 64, 72] },
      { label: 'Passenger Satisfaction', value: '+18%', trend: 18, trendPositive: true, sparkline: [0, 3, 6, 9, 12, 15, 18] },
      { label: 'Energy Efficiency', value: '+12%', trend: 12, trendPositive: true, sparkline: [0, 2, 4, 6, 8, 10, 12] },
      { label: 'Delay Prediction', value: '92% accuracy', trend: 92, trendPositive: true, sparkline: [20, 36, 52, 66, 78, 86, 92] },
    ],
    savings: [
      { category: 'Schedule Optimization', amount: 280 },
      { category: 'License Reclamation', amount: 240 },
      { category: 'Predictive Maintenance', amount: 200 },
      { category: 'Passenger Analytics', amount: 140 },
    ],
    beforeAfter: [
      { label: 'Schedule Planning', before: 'Manual/weekly', after: 'AI real-time' },
      { label: 'Vehicle Downtime', before: '18%', after: '4%' },
      { label: 'License Utilization', before: '40%', after: '92%' },
      { label: 'Delay Notification', before: 'Reactive', after: 'Predictive AI' },
    ],
    automations: [
      { name: 'AI Transit Scheduler', status: 'live', department: 'Operations' },
      { name: 'Predictive Vehicle Maintenance', status: 'live', department: 'Maintenance' },
      { name: 'Passenger Flow Analytics', status: 'piloting', department: 'Planning' },
      { name: 'Energy Optimization AI', status: 'planned', department: 'Operations' },
    ],
  },
  {
    name: 'Herzog Energy',
    industry: 'Energy Infrastructure',
    employees: 120,

    aiScoreBefore: 34,
    aiScoreAfter: 76,
    totalSavings: '$360K/yr',
    metrics: [
      { label: 'Project Mgmt', value: 'Digital', trend: 100, trendPositive: true, sparkline: [0, 18, 36, 54, 72, 88, 100] },
      { label: 'Compliance Automation', value: '82%', trend: 82, trendPositive: true, sparkline: [5, 16, 30, 44, 58, 70, 82] },
      { label: 'License Waste Reduced', value: '58%', trend: 58, trendPositive: true, sparkline: [5, 14, 24, 34, 42, 50, 58] },
      { label: 'Equipment Tracking', value: 'Real-time', trend: 100, trendPositive: true, sparkline: [0, 15, 32, 50, 68, 85, 100] },
      { label: 'Cost Estimation', value: '+22% accuracy', trend: 22, trendPositive: true, sparkline: [0, 4, 8, 12, 16, 19, 22] },
      { label: 'Resource Sharing', value: '15% of fleet', trend: 15, trendPositive: true, sparkline: [0, 2, 4, 7, 10, 12, 15] },
    ],
    savings: [
      { category: 'Project Digitization', amount: 120 },
      { category: 'License Reclamation', amount: 100 },
      { category: 'Compliance Automation', amount: 80 },
      { category: 'Equipment Tracking', amount: 60 },
    ],
    beforeAfter: [
      { label: 'Project Tracking', before: 'Spreadsheets', after: 'Procore + AI' },
      { label: 'Compliance', before: 'Manual checklists', after: '82% automated' },
      { label: 'License Utilization', before: '34%', after: '88%' },
      { label: 'Equipment Visibility', before: 'End-of-day', after: 'Real-time GPS' },
    ],
    automations: [
      { name: 'Procore Project Management', status: 'live', department: 'Projects' },
      { name: 'Compliance Auto-Tracking', status: 'live', department: 'Compliance' },
      { name: 'AI Cost Estimation', status: 'piloting', department: 'Estimating' },
      { name: 'Cross-Division Resource Share', status: 'planned', department: 'Operations' },
    ],
  },
  {
    name: 'Green Group LLC',
    industry: 'Environmental Services',
    employees: 90,

    aiScoreBefore: 30,
    aiScoreAfter: 72,
    totalSavings: '$240K/yr',
    metrics: [
      { label: 'Compliance Automation', value: '78%', trend: 78, trendPositive: true, sparkline: [5, 16, 28, 42, 56, 68, 78] },
      { label: 'Waste Routing', value: 'AI-optimized', trend: 100, trendPositive: true, sparkline: [0, 18, 36, 54, 72, 88, 100] },
      { label: 'License Waste Reduced', value: '55%', trend: 55, trendPositive: true, sparkline: [5, 12, 22, 32, 40, 48, 55] },
      { label: 'Field Inspections', value: 'Mobile', trend: 100, trendPositive: true, sparkline: [0, 20, 40, 60, 75, 90, 100] },
      { label: 'Report Generation', value: '-65% time', trend: -65, trendPositive: true, sparkline: [100, 82, 68, 55, 45, 38, 35] },
      { label: 'Sensor Monitoring', value: '24/7 AI', trend: 100, trendPositive: true, sparkline: [0, 15, 32, 50, 68, 85, 100] },
    ],
    savings: [
      { category: 'Compliance Automation', amount: 120 },
      { category: 'License Reclamation', amount: 60 },
      { category: 'Waste Logistics AI', amount: 60 },
    ],
    beforeAfter: [
      { label: 'Compliance Records', before: 'Paper files', after: 'Digital + AI alerts' },
      { label: 'Waste Routing', before: 'Manual planning', after: 'AI-optimized' },
      { label: 'License Utilization', before: '30%', after: '86%' },
      { label: 'Field Inspections', before: 'Paper forms', after: 'Mobile app + GPS' },
    ],
    automations: [
      { name: 'Environmental Compliance Engine', status: 'live', department: 'Compliance' },
      { name: 'AI Waste Logistics Routing', status: 'live', department: 'Operations' },
      { name: 'Predictive Environmental Risk', status: 'piloting', department: 'Compliance' },
      { name: 'Automated EPA Reporting', status: 'planned', department: 'Compliance' },
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

// ─── Division Dashboard ─────────────────────────────────────────────────────

function DivisionDashboard({ company }: { company: CompanyData }) {
  const savingsData = company.savings.map((s) => ({
    category: s.category,
    amount: s.amount,
  }));

  return (
    <div className="space-y-6">
      {/* Section 1: Division Overview Bar */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div>
              <h2 className="text-2xl font-bold text-[#1B1B1B]">{company.name}</h2>
              <p className="text-sm text-[#6B7280]">{company.industry}</p>
            </div>
            <div className="hidden sm:flex items-center gap-6 pl-6 border-l border-gray-200">
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
                  {(() => {
                    const isGood = metric.trendPositive;
                    const isDown = metric.trend < 0;
                    const color = isGood ? 'text-[#10B981]' : 'text-[#EF4444]';
                    const Icon = isDown ? TrendingDown : TrendingUp;
                    return (
                      <>
                        <Icon className={`w-3.5 h-3.5 ${color}`} />
                        <span className={`text-xs font-semibold ${color}`}>
                          {metric.trend > 0 ? '+' : ''}{Math.abs(metric.trend).toFixed(0)}%
                        </span>
                      </>
                    );
                  })()}
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
  const [searchParams] = useSearchParams();
  const divParam = searchParams.get('div');
  const initialIndex = divParam !== null ? Math.min(Math.max(0, parseInt(divParam, 10) || 0), divisions.length - 1) : 0;
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  return (
    <div className="space-y-6">
      <PreliminaryBanner />

      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        <h1 className="text-3xl font-bold text-[#1B1B1B]">Division Performance</h1>
        <p className="text-[#6B7280] mt-1 text-lg">
          Transformation results across all 7 Herzog divisions
        </p>
      </motion.div>

      {/* Division Switcher Tab Bar */}
      <div className="border-b border-gray-200">
        <nav className="flex gap-1 -mb-px overflow-x-auto scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }} aria-label="Division tabs">
          {divisions.map((division, index) => (
            <button
              key={division.name}
              onClick={() => setActiveIndex(index)}
              className={`relative whitespace-nowrap px-5 py-3 text-sm font-medium transition-colors ${
                activeIndex === index
                  ? 'text-[#4285F4] font-semibold'
                  : 'text-[#6B7280] hover:text-[#1B1B1B]'
              }`}
            >
              <span className="flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                {division.name}
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
          <DivisionDashboard company={divisions[activeIndex]} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
