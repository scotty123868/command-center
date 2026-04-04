import { useState, useEffect } from 'react';
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
import { useCompany } from '../data/CompanyContext';

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

// ─── Per-Company Division Data ──────────────────────────────────────────────

const divisionsByCompany: Record<string, CompanyData[]> = {
  /* ── IndustrialsCo (meridian) ─────────────────────────────────────────── */
  meridian: [
    {
      name: 'IC Construction Corp (HCC)',
      industry: 'Rail & Highway Construction',
      employees: 1200,
      aiScoreBefore: 32,
      aiScoreAfter: 78,
      totalSavings: '$2.1M/yr',
      metrics: [
        { label: 'eCMS Job Cost Sync', value: 'Real-time', trend: 100, trendPositive: true, sparkline: [0, 18, 36, 54, 72, 88, 100] },
        { label: 'Heavy Job Adoption', value: '94%', trend: 94, trendPositive: true, sparkline: [30, 45, 58, 70, 80, 88, 94] },
        { label: 'P6 Schedule Accuracy', value: '91%', trend: 22, trendPositive: true, sparkline: [74, 78, 82, 85, 87, 89, 91] },
        { label: 'Procore RFI Cycle', value: '-58%', trend: -58, trendPositive: true, sparkline: [14, 12, 10, 8, 7, 6, 5.9] },
        { label: 'Prolog Compliance', value: '96%', trend: 33, trendPositive: true, sparkline: [72, 76, 80, 84, 88, 92, 96] },
        { label: 'Field-to-Finance Lag', value: '<4 hrs', trend: -92, trendPositive: true, sparkline: [48, 36, 24, 16, 10, 6, 4] },
      ],
      savings: [
        { category: 'eCMS-HCSS Integration', amount: 680 },
        { category: 'P6 Schedule Optimization', amount: 520 },
        { category: 'Procore Workflow Automation', amount: 480 },
        { category: 'Heavy Job Field Digitization', amount: 420 },
      ],
      beforeAfter: [
        { label: 'eCMS Cost Visibility', before: '24-48 hr lag', after: 'Real-time sync' },
        { label: 'P6 Budget vs. Actual', before: 'Nightly CSV', after: 'Live dashboard' },
        { label: 'Procore RFI Turnaround', before: '14 days', after: '5.9 days' },
        { label: 'Heavy Job Coverage', before: '30% of crews', after: '94% of crews' },
      ],
      automations: [
        { name: 'eCMS ↔ Heavy Job Real-Time Sync', status: 'live', department: 'Finance' },
        { name: 'Procore Document Intelligence', status: 'live', department: 'Operations' },
        { name: 'P6 AI Schedule Optimization', status: 'piloting', department: 'Planning' },
        { name: 'Prolog Compliance Automation', status: 'planned', department: 'Field Ops' },
      ],
    },
    {
      name: 'IC Rail Services (HRSI)',
      industry: 'Railroad Maintenance & Equipment',
      employees: 380,
      aiScoreBefore: 36,
      aiScoreAfter: 80,
      totalSavings: '$820K/yr',
      metrics: [
        { label: 'CMMS Work Orders', value: 'AI-prioritized', trend: 100, trendPositive: true, sparkline: [0, 15, 32, 50, 68, 85, 100] },
        { label: 'Equipment360 Uptime', value: '94%', trend: 18, trendPositive: true, sparkline: [76, 80, 84, 87, 90, 92, 94] },
        { label: 'eCMS Procurement Sync', value: 'Automated', trend: 100, trendPositive: true, sparkline: [0, 20, 40, 60, 75, 90, 100] },
        { label: 'HCSS Telematics Coverage', value: '88%', trend: 88, trendPositive: true, sparkline: [15, 28, 42, 56, 68, 78, 88] },
        { label: 'Crew Idle Time', value: '-18%', trend: -18, trendPositive: true, sparkline: [22, 20, 18, 15, 12, 8, 4] },
        { label: 'Parts Double-Entry', value: 'Eliminated', trend: -100, trendPositive: true, sparkline: [100, 82, 60, 40, 22, 8, 0] },
      ],
      savings: [
        { category: 'CMMS-eCMS Integration', amount: 240 },
        { category: 'Equipment360 Predictive Maint.', amount: 200 },
        { category: 'HCSS Telematics Optimization', amount: 180 },
        { category: 'Procurement Automation', amount: 200 },
      ],
      beforeAfter: [
        { label: 'CMMS → eCMS Parts Orders', before: 'Double-entry', after: 'Auto-sync' },
        { label: 'Equipment360 Maintenance', before: 'Reactive', after: 'Predictive AI' },
        { label: 'HCSS Telematics', before: '15% fleet covered', after: '88% fleet covered' },
        { label: 'eCMS Cost Visibility', before: '48 hr lag', after: 'Same-day' },
      ],
      automations: [
        { name: 'CMMS AI Work Order Prioritization', status: 'live', department: 'Maintenance' },
        { name: 'Equipment360 Predictive Alerts', status: 'live', department: 'Fleet' },
        { name: 'HCSS Telematics Fleet Intelligence', status: 'piloting', department: 'Operations' },
        { name: 'eCMS Auto-Procurement Pipeline', status: 'planned', department: 'Purchasing' },
      ],
    },
    {
      name: 'IC Services (HSI)',
      industry: 'Ultrasonic Rail Testing',
      employees: 220,
      aiScoreBefore: 42,
      aiScoreAfter: 84,
      totalSavings: '$680K/yr',
      metrics: [
        { label: 'RailSentry AI Detection', value: '99%', trend: 8.8, trendPositive: true, sparkline: [91, 93, 95, 96, 97, 98, 99] },
        { label: 'Ultrasonic False Positives', value: '11%', trend: -67.6, trendPositive: true, sparkline: [34, 28, 22, 18, 14, 12, 11] },
        { label: 'HCSS Safety Compliance', value: '98%', trend: 12, trendPositive: true, sparkline: [88, 90, 92, 94, 95, 97, 98] },
        { label: 'CMMS Work Order Cycle', value: '-62%', trend: -62, trendPositive: true, sparkline: [100, 82, 68, 55, 45, 40, 38] },
        { label: 'Analyst Review Time', value: '-79%', trend: -79, trendPositive: true, sparkline: [210, 160, 120, 90, 65, 50, 45] },
        { label: 'AI → P6 Scheduling', value: 'Pipeline live', trend: 100, trendPositive: true, sparkline: [0, 15, 32, 50, 68, 85, 100] },
      ],
      savings: [
        { category: 'RailSentry AI Detection', amount: 280 },
        { category: 'CMMS Maintenance Automation', amount: 160 },
        { category: 'HCSS Safety Digitization', amount: 120 },
        { category: 'Ultrasonic Analysis Pipeline', amount: 120 },
      ],
      beforeAfter: [
        { label: 'RailSentry Detection Rate', before: '91%', after: '99%' },
        { label: 'Ultrasonic False Positives', before: '34%', after: '11%' },
        { label: 'CMMS Work Order Creation', before: 'Manual from AI output', after: 'Auto-generated' },
        { label: 'HCSS Safety Reporting', before: 'Paper forms', after: 'Mobile real-time' },
      ],
      automations: [
        { name: 'RailSentry AI Object Detection', status: 'live', department: 'Rail Testing' },
        { name: 'Ultrasonic → CMMS Work Orders', status: 'live', department: 'Maintenance' },
        { name: 'HCSS Safety Digital Compliance', status: 'piloting', department: 'Safety' },
        { name: 'AI Detection → P6 Scheduling', status: 'planned', department: 'Planning' },
      ],
    },
    {
      name: 'IC Technologies (HTI)',
      industry: 'Signal & PTC Systems',
      employees: 310,
      aiScoreBefore: 48,
      aiScoreAfter: 86,
      totalSavings: '$740K/yr',
      metrics: [
        { label: 'P6 Schedule Accuracy', value: '95%', trend: 28, trendPositive: true, sparkline: [74, 78, 82, 86, 90, 93, 95] },
        { label: 'Signal/PTC Design Speed', value: '2.1x', trend: 110, trendPositive: true, sparkline: [1, 1.2, 1.4, 1.6, 1.8, 2.0, 2.1] },
        { label: 'Prolog Document Control', value: '98%', trend: 22, trendPositive: true, sparkline: [80, 84, 88, 92, 94, 96, 98] },
        { label: 'Heavy Job Field Capture', value: '92%', trend: 92, trendPositive: true, sparkline: [12, 28, 44, 58, 72, 84, 92] },
        { label: 'Project Estimation', value: '+35% accuracy', trend: 35, trendPositive: true, sparkline: [0, 5, 12, 18, 24, 30, 35] },
        { label: 'PTC Compliance Automation', value: '88%', trend: 88, trendPositive: true, sparkline: [5, 18, 32, 48, 62, 76, 88] },
      ],
      savings: [
        { category: 'P6 Schedule Optimization', amount: 220 },
        { category: 'Signal/PTC Data Integration', amount: 200 },
        { category: 'Heavy Job Field Digitization', amount: 180 },
        { category: 'Prolog Compliance Automation', amount: 140 },
      ],
      beforeAfter: [
        { label: 'P6 PTC Monitoring', before: 'Batch reports', after: 'Real-time dashboards' },
        { label: 'Signal Design Time', before: '6 weeks', after: '2.5 weeks' },
        { label: 'Prolog Document Access', before: 'File shares', after: 'Centralized + searchable' },
        { label: 'Heavy Job Coverage', before: '12% of crews', after: '92% of crews' },
      ],
      automations: [
        { name: 'P6 PTC Performance Monitoring', status: 'live', department: 'Engineering' },
        { name: 'AI Signal Design Assistant', status: 'live', department: 'Design' },
        { name: 'Prolog Auto-Compliance Pipeline', status: 'piloting', department: 'Compliance' },
        { name: 'Heavy Job Digital Twin Corridors', status: 'planned', department: 'Field Ops' },
      ],
    },
    {
      name: 'IC Transit Services (HTSI)',
      industry: 'Passenger Rail Operations',
      employees: 480,
      aiScoreBefore: 40,
      aiScoreAfter: 82,
      totalSavings: '$860K/yr',
      metrics: [
        { label: 'P6 Schedule Optimization', value: '+28% efficiency', trend: 28, trendPositive: true, sparkline: [0, 4, 8, 14, 18, 24, 28] },
        { label: 'HCSS Suite Adoption', value: '96%', trend: 14, trendPositive: true, sparkline: [82, 84, 87, 90, 92, 94, 96] },
        { label: 'Prolog Document Control', value: '94%', trend: 94, trendPositive: true, sparkline: [15, 28, 44, 58, 72, 84, 94] },
        { label: 'PMWeb Project Tracking', value: 'Live', trend: 100, trendPositive: true, sparkline: [0, 18, 36, 54, 72, 88, 100] },
        { label: 'Energy Efficiency', value: '+12%', trend: 12, trendPositive: true, sparkline: [0, 2, 4, 6, 8, 10, 12] },
        { label: 'Delay Prediction', value: '92% accuracy', trend: 92, trendPositive: true, sparkline: [20, 36, 52, 66, 78, 86, 92] },
      ],
      savings: [
        { category: 'P6 Schedule Optimization', amount: 280 },
        { category: 'HCSS Suite Integration', amount: 240 },
        { category: 'PMWeb Project Controls', amount: 200 },
        { category: 'Prolog Compliance Automation', amount: 140 },
      ],
      beforeAfter: [
        { label: 'P6 Schedule Planning', before: 'Manual/weekly', after: 'AI-optimized real-time' },
        { label: 'HCSS Vehicle Tracking', before: 'End-of-day logs', after: 'Real-time telematics' },
        { label: 'Prolog Document Access', before: 'File servers', after: 'Centralized + searchable' },
        { label: 'PMWeb Cost Control', before: 'Spreadsheets', after: 'Live dashboards' },
      ],
      automations: [
        { name: 'P6 AI Transit Scheduler', status: 'live', department: 'Operations' },
        { name: 'HCSS Predictive Vehicle Maintenance', status: 'live', department: 'Maintenance' },
        { name: 'PMWeb Passenger Flow Analytics', status: 'piloting', department: 'Planning' },
        { name: 'Prolog Energy Optimization Tracking', status: 'planned', department: 'Operations' },
      ],
    },
    {
      name: 'IC Energy (HE)',
      industry: 'Energy Infrastructure',
      employees: 120,
      aiScoreBefore: 34,
      aiScoreAfter: 76,
      totalSavings: '$360K/yr',
      metrics: [
        { label: 'eCMS Job Costing', value: 'Real-time', trend: 100, trendPositive: true, sparkline: [0, 18, 36, 54, 72, 88, 100] },
        { label: 'P6 Schedule Compliance', value: '82%', trend: 82, trendPositive: true, sparkline: [5, 16, 30, 44, 58, 70, 82] },
        { label: 'CMMS Parts Inventory', value: 'Unified', trend: 100, trendPositive: true, sparkline: [0, 20, 40, 60, 75, 90, 100] },
        { label: 'Equipment360 Tracking', value: 'Real-time', trend: 100, trendPositive: true, sparkline: [0, 15, 32, 50, 68, 85, 100] },
        { label: 'Heavy Job Field Capture', value: '85%', trend: 85, trendPositive: true, sparkline: [10, 22, 38, 52, 66, 76, 85] },
        { label: 'Cross-Division Sharing', value: '15% of fleet', trend: 15, trendPositive: true, sparkline: [0, 2, 4, 7, 10, 12, 15] },
      ],
      savings: [
        { category: 'eCMS-P6 Integration', amount: 120 },
        { category: 'CMMS Inventory Automation', amount: 100 },
        { category: 'Equipment360 Predictive Maint.', amount: 80 },
        { category: 'Heavy Job Field Digitization', amount: 60 },
      ],
      beforeAfter: [
        { label: 'eCMS Project Costs', before: 'Weekly batch', after: 'Real-time sync' },
        { label: 'P6 Budget vs. Actual', before: 'Nightly CSV', after: 'Live dashboard' },
        { label: 'CMMS Parts Ordering', before: 'Double-entry', after: 'Automated procurement' },
        { label: 'Equipment360 Visibility', before: 'End-of-day logs', after: 'Real-time GPS' },
      ],
      automations: [
        { name: 'eCMS Real-Time Job Costing', status: 'live', department: 'Finance' },
        { name: 'P6 AI Schedule Compliance', status: 'live', department: 'Planning' },
        { name: 'CMMS Predictive Parts Ordering', status: 'piloting', department: 'Maintenance' },
        { name: 'Heavy Job Cross-Division Resource Share', status: 'planned', department: 'Operations' },
      ],
    },
    {
      name: 'General Group (GG)',
      industry: 'Environmental Services',
      employees: 90,
      aiScoreBefore: 30,
      aiScoreAfter: 72,
      totalSavings: '$240K/yr',
      metrics: [
        { label: 'HCSS Safety Compliance', value: '78%', trend: 78, trendPositive: true, sparkline: [5, 16, 28, 42, 56, 68, 78] },
        { label: 'HCSS Field Inspections', value: 'Mobile', trend: 100, trendPositive: true, sparkline: [0, 20, 40, 60, 75, 90, 100] },
        { label: 'eCMS Cost Tracking', value: 'Real-time', trend: 100, trendPositive: true, sparkline: [0, 18, 36, 54, 72, 88, 100] },
        { label: 'Environmental Monitoring', value: '24/7 AI', trend: 100, trendPositive: true, sparkline: [0, 15, 32, 50, 68, 85, 100] },
        { label: 'Report Generation', value: '-65% time', trend: -65, trendPositive: true, sparkline: [100, 82, 68, 55, 45, 38, 35] },
        { label: 'Waste Routing', value: 'AI-optimized', trend: 100, trendPositive: true, sparkline: [0, 18, 36, 54, 72, 88, 100] },
      ],
      savings: [
        { category: 'HCSS Safety Automation', amount: 120 },
        { category: 'eCMS Integration', amount: 60 },
        { category: 'Environmental Monitoring AI', amount: 60 },
      ],
      beforeAfter: [
        { label: 'HCSS Safety Records', before: 'Paper files', after: 'Digital + AI alerts' },
        { label: 'HCSS Field Inspections', before: 'Paper forms', after: 'Mobile app + GPS' },
        { label: 'eCMS Cost Visibility', before: 'Monthly reports', after: 'Real-time dashboards' },
        { label: 'Environmental Sensors', before: 'Manual readings', after: '24/7 AI monitoring' },
      ],
      automations: [
        { name: 'HCSS Safety Compliance Engine', status: 'live', department: 'Safety' },
        { name: 'HCSS Field Digital Inspections', status: 'live', department: 'Operations' },
        { name: 'Environmental Sensor AI Monitoring', status: 'piloting', department: 'Environmental' },
        { name: 'eCMS Automated EPA Reporting', status: 'planned', department: 'Compliance' },
      ],
    },
  ],

  /* ── Northwood Insurance Group (departments) ────────────────────────────── */
  northwood: [
    {
      name: 'Claims Operations',
      industry: 'Insurance — Claims',
      employees: 280,
      aiScoreBefore: 28,
      aiScoreAfter: 74,
      totalSavings: '$1.8M/yr',
      metrics: [
        { label: 'Claims Processing Time', value: '-62%', trend: -62, trendPositive: true, sparkline: [14, 12, 10, 8, 7, 6, 5.3] },
        { label: 'Loss Ratio', value: '58%', trend: -12, trendPositive: true, sparkline: [66, 64, 63, 61, 60, 59, 58] },
        { label: 'Customer Satisfaction', value: '92%', trend: 24, trendPositive: true, sparkline: [74, 78, 82, 85, 88, 90, 92] },
        { label: 'Fraud Detection Rate', value: '94%', trend: 38, trendPositive: true, sparkline: [68, 74, 80, 84, 88, 91, 94] },
        { label: 'Auto-Adjudication', value: '71%', trend: 71, trendPositive: true, sparkline: [5, 18, 30, 42, 54, 64, 71] },
        { label: 'First-Contact Resolution', value: '88%', trend: 22, trendPositive: true, sparkline: [72, 75, 78, 81, 84, 86, 88] },
      ],
      savings: [
        { category: 'Claims Auto-Adjudication', amount: 820 },
        { category: 'Fraud Detection AI', amount: 480 },
        { category: 'Process Automation', amount: 320 },
        { category: 'Customer Self-Service', amount: 180 },
      ],
      beforeAfter: [
        { label: 'Claims Processing', before: '14 days', after: '5.3 days' },
        { label: 'Loss Ratio', before: '66%', after: '58%' },
        { label: 'Fraud Detection', before: '68%', after: '94%' },
        { label: 'Manual Review Rate', before: '85%', after: '29%' },
      ],
      automations: [
        { name: 'AI Claims Triage & Routing', status: 'live', department: 'Claims' },
        { name: 'Fraud Pattern Detection', status: 'live', department: 'SIU' },
        { name: 'Automated Damage Assessment', status: 'piloting', department: 'Claims' },
        { name: 'Predictive Loss Modeling', status: 'planned', department: 'Actuarial' },
      ],
    },
    {
      name: 'Underwriting',
      industry: 'Insurance — Underwriting',
      employees: 180,
      aiScoreBefore: 35,
      aiScoreAfter: 80,
      totalSavings: '$1.2M/yr',
      metrics: [
        { label: 'Quote Turnaround', value: '-55%', trend: -55, trendPositive: true, sparkline: [48, 40, 34, 28, 24, 22, 21.6] },
        { label: 'Risk Accuracy', value: '96%', trend: 18, trendPositive: true, sparkline: [81, 84, 87, 90, 93, 95, 96] },
        { label: 'Submission Intake', value: 'AI-driven', trend: 100, trendPositive: true, sparkline: [0, 18, 36, 54, 72, 88, 100] },
        { label: 'Loss Ratio Improvement', value: '-8pts', trend: -8, trendPositive: true, sparkline: [66, 64, 63, 62, 61, 60, 58] },
        { label: 'Bind Rate', value: '+14%', trend: 14, trendPositive: true, sparkline: [32, 34, 36, 38, 40, 43, 46] },
        { label: 'Portfolio Mix Score', value: '88', trend: 22, trendPositive: true, sparkline: [72, 75, 78, 81, 84, 86, 88] },
      ],
      savings: [
        { category: 'AI Underwriting Assist', amount: 480 },
        { category: 'Submission Automation', amount: 340 },
        { category: 'Risk Model Enhancement', amount: 240 },
        { category: 'Portfolio Optimization', amount: 140 },
      ],
      beforeAfter: [
        { label: 'Quote Turnaround', before: '48 hours', after: '21.6 hours' },
        { label: 'Risk Assessment', before: 'Manual scoring', after: 'AI + ML models' },
        { label: 'Submission Processing', before: '3 hours each', after: '45 min each' },
        { label: 'Bind Rate', before: '32%', after: '46%' },
      ],
      automations: [
        { name: 'AI Risk Scoring Engine', status: 'live', department: 'Underwriting' },
        { name: 'Automated Submission Intake', status: 'live', department: 'Operations' },
        { name: 'Portfolio Mix Optimizer', status: 'piloting', department: 'Strategy' },
        { name: 'Real-time Catastrophe Pricing', status: 'planned', department: 'Actuarial' },
      ],
    },
    {
      name: 'Policy Administration',
      industry: 'Insurance — Policy Admin',
      employees: 160,
      aiScoreBefore: 30,
      aiScoreAfter: 72,
      totalSavings: '$640K/yr',
      metrics: [
        { label: 'Policy Issuance Time', value: '-48%', trend: -48, trendPositive: true, sparkline: [7.2, 6.4, 5.6, 5, 4.4, 4, 3.7] },
        { label: 'Data Entry Errors', value: '-82%', trend: -82, trendPositive: true, sparkline: [12, 9, 7, 5, 3.5, 2.5, 2.2] },
        { label: 'Endorsement Automation', value: '65%', trend: 65, trendPositive: true, sparkline: [5, 14, 24, 36, 48, 58, 65] },
        { label: 'Renewal Retention', value: '91%', trend: 8, trendPositive: true, sparkline: [84, 85, 87, 88, 89, 90, 91] },
        { label: 'Compliance Score', value: '98%', trend: 12, trendPositive: true, sparkline: [88, 90, 92, 94, 95, 97, 98] },
        { label: 'Customer Portal Adoption', value: '74%', trend: 74, trendPositive: true, sparkline: [8, 20, 32, 44, 56, 66, 74] },
      ],
      savings: [
        { category: 'Policy Automation', amount: 260 },
        { category: 'Error Reduction', amount: 180 },
        { category: 'Self-Service Portal', amount: 120 },
        { category: 'Renewal Automation', amount: 80 },
      ],
      beforeAfter: [
        { label: 'Policy Issuance', before: '7.2 days', after: '3.7 days' },
        { label: 'Data Entry Errors', before: '12%', after: '2.2%' },
        { label: 'Compliance Score', before: '88%', after: '98%' },
        { label: 'Renewal Retention', before: '84%', after: '91%' },
      ],
      automations: [
        { name: 'Automated Policy Issuance', status: 'live', department: 'Policy Admin' },
        { name: 'AI Endorsement Processing', status: 'live', department: 'Operations' },
        { name: 'Predictive Renewal Engine', status: 'piloting', department: 'Retention' },
        { name: 'Regulatory Compliance Monitor', status: 'planned', department: 'Compliance' },
      ],
    },
    {
      name: 'CRM & Distribution',
      industry: 'Insurance — Distribution',
      employees: 180,
      aiScoreBefore: 26,
      aiScoreAfter: 70,
      totalSavings: '$520K/yr',
      metrics: [
        { label: 'Agent Onboarding', value: '-40%', trend: -40, trendPositive: true, sparkline: [30, 26, 24, 22, 20, 19, 18] },
        { label: 'Lead Conversion', value: '+32%', trend: 32, trendPositive: true, sparkline: [14, 16, 18, 20, 22, 24, 26] },
        { label: 'Cross-Sell Rate', value: '28%', trend: 75, trendPositive: true, sparkline: [16, 18, 20, 22, 24, 26, 28] },
        { label: 'Agent Satisfaction', value: '86%', trend: 18, trendPositive: true, sparkline: [73, 76, 78, 80, 82, 84, 86] },
        { label: 'Quote Response Time', value: '-58%', trend: -58, trendPositive: true, sparkline: [24, 20, 16, 14, 12, 11, 10] },
        { label: 'Digital Channel Share', value: '44%', trend: 44, trendPositive: true, sparkline: [12, 18, 24, 30, 35, 40, 44] },
      ],
      savings: [
        { category: 'Lead Scoring AI', amount: 200 },
        { category: 'Agent Productivity', amount: 160 },
        { category: 'Cross-Sell Engine', amount: 100 },
        { category: 'Digital Distribution', amount: 60 },
      ],
      beforeAfter: [
        { label: 'Agent Onboarding', before: '30 days', after: '18 days' },
        { label: 'Lead Conversion', before: '14%', after: '26%' },
        { label: 'Quote Response', before: '24 hours', after: '10 hours' },
        { label: 'Digital Channel Share', before: '12%', after: '44%' },
      ],
      automations: [
        { name: 'AI Lead Scoring', status: 'live', department: 'Sales' },
        { name: 'Automated Agent Portal', status: 'live', department: 'Distribution' },
        { name: 'Cross-Sell Recommendation Engine', status: 'piloting', department: 'Marketing' },
        { name: 'AI Chatbot for Agents', status: 'planned', department: 'Support' },
      ],
    },
  ],

  /* ── Pinnacle Healthcare Systems (departments) ────────────────────────── */
  pinnacle: [
    {
      name: 'Clinical Operations',
      industry: 'Healthcare — Clinical',
      employees: 160,
      aiScoreBefore: 34,
      aiScoreAfter: 78,
      totalSavings: '$1.4M/yr',
      metrics: [
        { label: 'Patient Wait Time', value: '-44%', trend: -44, trendPositive: true, sparkline: [42, 36, 32, 28, 26, 24, 23.5] },
        { label: 'Documentation Accuracy', value: '97%', trend: 14, trendPositive: true, sparkline: [85, 87, 90, 92, 94, 96, 97] },
        { label: 'Clinical Decision Support', value: 'AI-live', trend: 100, trendPositive: true, sparkline: [0, 18, 36, 54, 72, 88, 100] },
        { label: 'Patient Throughput', value: '+28%', trend: 28, trendPositive: true, sparkline: [0, 4, 8, 14, 18, 24, 28] },
        { label: 'Readmission Rate', value: '-22%', trend: -22, trendPositive: true, sparkline: [14, 13, 12, 11.5, 11.2, 11, 10.9] },
        { label: 'Staff Utilization', value: '88%', trend: 18, trendPositive: true, sparkline: [74, 77, 80, 82, 84, 86, 88] },
      ],
      savings: [
        { category: 'Clinical Documentation AI', amount: 520 },
        { category: 'Scheduling Optimization', amount: 380 },
        { category: 'Readmission Prevention', amount: 320 },
        { category: 'Staff Allocation AI', amount: 180 },
      ],
      beforeAfter: [
        { label: 'Patient Wait Time', before: '42 min', after: '23.5 min' },
        { label: 'Documentation Accuracy', before: '85%', after: '97%' },
        { label: 'Readmission Rate', before: '14%', after: '10.9%' },
        { label: 'Staff Utilization', before: '74%', after: '88%' },
      ],
      automations: [
        { name: 'AI Clinical Documentation', status: 'live', department: 'Clinical' },
        { name: 'Smart Scheduling Engine', status: 'live', department: 'Operations' },
        { name: 'Readmission Risk Predictor', status: 'piloting', department: 'Quality' },
        { name: 'AI Triage Assistant', status: 'planned', department: 'Emergency' },
      ],
    },
    {
      name: 'Revenue Cycle & Billing',
      industry: 'Healthcare — Billing',
      employees: 100,
      aiScoreBefore: 30,
      aiScoreAfter: 76,
      totalSavings: '$960K/yr',
      metrics: [
        { label: 'Billing Cycle Time', value: '-52%', trend: -52, trendPositive: true, sparkline: [45, 38, 32, 28, 24, 22, 21.6] },
        { label: 'Clean Claim Rate', value: '96%', trend: 14, trendPositive: true, sparkline: [84, 86, 88, 90, 92, 94, 96] },
        { label: 'Denial Rate', value: '-58%', trend: -58, trendPositive: true, sparkline: [18, 15, 13, 11, 9.5, 8, 7.6] },
        { label: 'Days in A/R', value: '28', trend: -38, trendPositive: true, sparkline: [45, 42, 38, 35, 32, 30, 28] },
        { label: 'Coding Accuracy', value: '98%', trend: 12, trendPositive: true, sparkline: [88, 90, 92, 94, 95, 97, 98] },
        { label: 'Patient Payment Rate', value: '82%', trend: 22, trendPositive: true, sparkline: [67, 70, 73, 76, 78, 80, 82] },
      ],
      savings: [
        { category: 'AI Coding & Billing', amount: 380 },
        { category: 'Denial Prevention', amount: 280 },
        { category: 'A/R Optimization', amount: 180 },
        { category: 'Patient Payment AI', amount: 120 },
      ],
      beforeAfter: [
        { label: 'Billing Cycle Time', before: '45 days', after: '21.6 days' },
        { label: 'Clean Claim Rate', before: '84%', after: '96%' },
        { label: 'Denial Rate', before: '18%', after: '7.6%' },
        { label: 'Days in A/R', before: '45', after: '28' },
      ],
      automations: [
        { name: 'AI Medical Coding', status: 'live', department: 'Coding' },
        { name: 'Claim Scrubbing Engine', status: 'live', department: 'Billing' },
        { name: 'Denial Prediction & Prevention', status: 'piloting', department: 'Revenue Cycle' },
        { name: 'Patient Financial Navigator', status: 'planned', department: 'Patient Access' },
      ],
    },
    {
      name: 'Pharmacy & Supply Chain',
      industry: 'Healthcare — Pharmacy',
      employees: 80,
      aiScoreBefore: 38,
      aiScoreAfter: 80,
      totalSavings: '$720K/yr',
      metrics: [
        { label: 'Medication Errors', value: '-78%', trend: -78, trendPositive: true, sparkline: [4.5, 3.6, 2.8, 2.1, 1.5, 1.1, 1.0] },
        { label: 'Formulary Compliance', value: '96%', trend: 16, trendPositive: true, sparkline: [82, 84, 87, 90, 92, 94, 96] },
        { label: 'Inventory Waste', value: '-45%', trend: -45, trendPositive: true, sparkline: [22, 19, 16, 14, 13, 12.5, 12.1] },
        { label: 'Order-to-Dispense', value: '-38%', trend: -38, trendPositive: true, sparkline: [35, 30, 27, 25, 23, 22, 21.7] },
        { label: 'Drug Interaction Alerts', value: 'AI-live', trend: 100, trendPositive: true, sparkline: [0, 18, 36, 54, 72, 88, 100] },
        { label: 'Supply Chain Visibility', value: 'Real-time', trend: 100, trendPositive: true, sparkline: [0, 15, 32, 50, 68, 85, 100] },
      ],
      savings: [
        { category: 'Medication Safety AI', amount: 280 },
        { category: 'Inventory Optimization', amount: 200 },
        { category: 'Formulary Management', amount: 140 },
        { category: 'Supply Chain AI', amount: 100 },
      ],
      beforeAfter: [
        { label: 'Medication Errors', before: '4.5/1000', after: '1.0/1000' },
        { label: 'Inventory Waste', before: '22%', after: '12.1%' },
        { label: 'Order-to-Dispense', before: '35 min', after: '21.7 min' },
        { label: 'Formulary Compliance', before: '82%', after: '96%' },
      ],
      automations: [
        { name: 'AI Drug Interaction Checker', status: 'live', department: 'Pharmacy' },
        { name: 'Smart Inventory Management', status: 'live', department: 'Supply Chain' },
        { name: 'Formulary Optimization Engine', status: 'piloting', department: 'Pharmacy' },
        { name: 'Predictive Supply Ordering', status: 'planned', department: 'Procurement' },
      ],
    },
    {
      name: 'Compliance & Quality',
      industry: 'Healthcare — Compliance',
      employees: 80,
      aiScoreBefore: 32,
      aiScoreAfter: 74,
      totalSavings: '$480K/yr',
      metrics: [
        { label: 'Compliance Score', value: '98%', trend: 14, trendPositive: true, sparkline: [86, 88, 90, 92, 94, 96, 98] },
        { label: 'Audit Readiness', value: 'Real-time', trend: 100, trendPositive: true, sparkline: [0, 18, 36, 54, 72, 88, 100] },
        { label: 'Incident Response Time', value: '-62%', trend: -62, trendPositive: true, sparkline: [180, 150, 120, 100, 85, 72, 68] },
        { label: 'Quality Measure Score', value: '94%', trend: 18, trendPositive: true, sparkline: [80, 83, 86, 88, 90, 92, 94] },
        { label: 'Training Compliance', value: '99%', trend: 12, trendPositive: true, sparkline: [88, 90, 92, 94, 96, 98, 99] },
        { label: 'Report Generation', value: '-70% time', trend: -70, trendPositive: true, sparkline: [100, 82, 65, 52, 42, 34, 30] },
      ],
      savings: [
        { category: 'Compliance Automation', amount: 200 },
        { category: 'Quality Monitoring AI', amount: 140 },
        { category: 'Audit Preparation', amount: 80 },
        { category: 'Training Management', amount: 60 },
      ],
      beforeAfter: [
        { label: 'Compliance Score', before: '86%', after: '98%' },
        { label: 'Incident Response', before: '180 min', after: '68 min' },
        { label: 'Quality Measures', before: '80%', after: '94%' },
        { label: 'Report Generation', before: '8 hours', after: '2.4 hours' },
      ],
      automations: [
        { name: 'Regulatory Compliance Monitor', status: 'live', department: 'Compliance' },
        { name: 'Quality Dashboard Automation', status: 'live', department: 'Quality' },
        { name: 'AI Incident Analysis', status: 'piloting', department: 'Risk' },
        { name: 'Automated CMS Reporting', status: 'planned', department: 'Compliance' },
      ],
    },
  ],

  /* ── Atlas Manufacturing Group (4 OpCos) ──────────────────────────────── */
  atlas: [
    {
      name: 'Atlas Precision Machining',
      industry: 'CNC Machining & Fabrication',
      employees: 620,
      aiScoreBefore: 38,
      aiScoreAfter: 82,
      totalSavings: '$1.6M/yr',
      metrics: [
        { label: 'OEE', value: '87%', trend: 24, trendPositive: true, sparkline: [70, 73, 76, 79, 82, 85, 87] },
        { label: 'Defect Rate', value: '0.8%', trend: -72, trendPositive: true, sparkline: [2.9, 2.4, 2.0, 1.6, 1.2, 1.0, 0.8] },
        { label: 'On-Time Delivery', value: '96%', trend: 14, trendPositive: true, sparkline: [84, 86, 88, 90, 92, 94, 96] },
        { label: 'Maintenance Downtime', value: '-55%', trend: -55, trendPositive: true, sparkline: [12, 10, 8.5, 7.2, 6.2, 5.6, 5.4] },
        { label: 'Scrap Reduction', value: '-62%', trend: -62, trendPositive: true, sparkline: [8.4, 7.0, 5.8, 4.8, 4.0, 3.4, 3.2] },
        { label: 'Cycle Time', value: '-18%', trend: -18, trendPositive: true, sparkline: [100, 96, 92, 90, 88, 84, 82] },
      ],
      savings: [
        { category: 'OEE Optimization', amount: 580 },
        { category: 'Defect Prevention AI', amount: 420 },
        { category: 'Predictive Maintenance', amount: 360 },
        { category: 'Scrap Reduction', amount: 240 },
      ],
      beforeAfter: [
        { label: 'OEE', before: '70%', after: '87%' },
        { label: 'Defect Rate', before: '2.9%', after: '0.8%' },
        { label: 'On-Time Delivery', before: '84%', after: '96%' },
        { label: 'Maintenance Downtime', before: '12%', after: '5.4%' },
      ],
      automations: [
        { name: 'AI OEE Optimizer', status: 'live', department: 'Production' },
        { name: 'Vision-Based Quality Inspection', status: 'live', department: 'Quality' },
        { name: 'Predictive Maintenance Engine', status: 'piloting', department: 'Maintenance' },
        { name: 'Digital Twin Simulation', status: 'planned', department: 'Engineering' },
      ],
    },
    {
      name: 'Atlas Assembly Systems',
      industry: 'Assembly & Integration',
      employees: 540,
      aiScoreBefore: 34,
      aiScoreAfter: 78,
      totalSavings: '$1.2M/yr',
      metrics: [
        { label: 'OEE', value: '84%', trend: 20, trendPositive: true, sparkline: [70, 72, 74, 77, 80, 82, 84] },
        { label: 'Defect Rate', value: '1.2%', trend: -64, trendPositive: true, sparkline: [3.4, 2.8, 2.3, 1.9, 1.6, 1.4, 1.2] },
        { label: 'On-Time Delivery', value: '94%', trend: 12, trendPositive: true, sparkline: [84, 86, 88, 89, 91, 93, 94] },
        { label: 'Maintenance Downtime', value: '-48%', trend: -48, trendPositive: true, sparkline: [15, 13, 11, 9.5, 8.5, 8, 7.8] },
        { label: 'Line Changeover', value: '-35%', trend: -35, trendPositive: true, sparkline: [45, 40, 36, 33, 31, 30, 29.3] },
        { label: 'Worker Safety Score', value: '98', trend: 8, trendPositive: true, sparkline: [91, 92, 93, 94, 96, 97, 98] },
      ],
      savings: [
        { category: 'Assembly Line AI', amount: 440 },
        { category: 'Quality Vision System', amount: 320 },
        { category: 'Changeover Optimization', amount: 260 },
        { category: 'Safety Analytics', amount: 180 },
      ],
      beforeAfter: [
        { label: 'OEE', before: '70%', after: '84%' },
        { label: 'Defect Rate', before: '3.4%', after: '1.2%' },
        { label: 'Line Changeover', before: '45 min', after: '29.3 min' },
        { label: 'Maintenance Downtime', before: '15%', after: '7.8%' },
      ],
      automations: [
        { name: 'AI Line Balancing', status: 'live', department: 'Production' },
        { name: 'Vision Quality System', status: 'live', department: 'Quality' },
        { name: 'Smart Changeover Assistant', status: 'piloting', department: 'Operations' },
        { name: 'Worker Safety AI', status: 'planned', department: 'EHS' },
      ],
    },
    {
      name: 'Atlas Materials & Supply',
      industry: 'Supply Chain & Logistics',
      employees: 480,
      aiScoreBefore: 30,
      aiScoreAfter: 74,
      totalSavings: '$980K/yr',
      metrics: [
        { label: 'Inventory Turns', value: '12.4x', trend: 42, trendPositive: true, sparkline: [8.7, 9.2, 9.8, 10.4, 11.0, 11.8, 12.4] },
        { label: 'Stockout Rate', value: '1.8%', trend: -68, trendPositive: true, sparkline: [5.6, 4.8, 4.0, 3.4, 2.8, 2.2, 1.8] },
        { label: 'Supplier On-Time', value: '94%', trend: 16, trendPositive: true, sparkline: [81, 83, 86, 88, 90, 92, 94] },
        { label: 'Warehouse Efficiency', value: '+32%', trend: 32, trendPositive: true, sparkline: [0, 5, 10, 16, 22, 28, 32] },
        { label: 'Freight Cost', value: '-22%', trend: -22, trendPositive: true, sparkline: [100, 94, 88, 84, 82, 80, 78] },
        { label: 'Demand Forecast Accuracy', value: '91%', trend: 24, trendPositive: true, sparkline: [73, 76, 80, 83, 86, 89, 91] },
      ],
      savings: [
        { category: 'Inventory Optimization', amount: 360 },
        { category: 'Demand Forecasting AI', amount: 280 },
        { category: 'Freight Optimization', amount: 200 },
        { category: 'Warehouse Automation', amount: 140 },
      ],
      beforeAfter: [
        { label: 'Inventory Turns', before: '8.7x', after: '12.4x' },
        { label: 'Stockout Rate', before: '5.6%', after: '1.8%' },
        { label: 'Demand Forecast', before: '73%', after: '91%' },
        { label: 'Freight Cost', before: '$4.2M', after: '$3.3M' },
      ],
      automations: [
        { name: 'AI Demand Forecasting', status: 'live', department: 'Planning' },
        { name: 'Smart Inventory Engine', status: 'live', department: 'Warehouse' },
        { name: 'Supplier Risk Monitor', status: 'piloting', department: 'Procurement' },
        { name: 'Autonomous Warehouse Robots', status: 'planned', department: 'Logistics' },
      ],
    },
    {
      name: 'Atlas Quality & Engineering',
      industry: 'Quality Assurance & R&D',
      employees: 460,
      aiScoreBefore: 42,
      aiScoreAfter: 84,
      totalSavings: '$1.1M/yr',
      metrics: [
        { label: 'First Pass Yield', value: '97.2%', trend: 8, trendPositive: true, sparkline: [90, 91, 93, 94, 95, 96, 97.2] },
        { label: 'Design Iteration Time', value: '-42%', trend: -42, trendPositive: true, sparkline: [21, 18, 16, 14, 13, 12.5, 12.2] },
        { label: 'Customer Returns', value: '-65%', trend: -65, trendPositive: true, sparkline: [3.2, 2.6, 2.1, 1.7, 1.4, 1.2, 1.1] },
        { label: 'R&D Productivity', value: '+38%', trend: 38, trendPositive: true, sparkline: [0, 6, 12, 18, 24, 32, 38] },
        { label: 'Test Automation', value: '82%', trend: 82, trendPositive: true, sparkline: [10, 22, 34, 48, 60, 72, 82] },
        { label: 'Certification Speed', value: '2.1x', trend: 110, trendPositive: true, sparkline: [1, 1.2, 1.4, 1.6, 1.8, 2.0, 2.1] },
      ],
      savings: [
        { category: 'Quality AI System', amount: 420 },
        { category: 'R&D Acceleration', amount: 340 },
        { category: 'Test Automation', amount: 200 },
        { category: 'Certification AI', amount: 140 },
      ],
      beforeAfter: [
        { label: 'First Pass Yield', before: '90%', after: '97.2%' },
        { label: 'Design Iterations', before: '21 days', after: '12.2 days' },
        { label: 'Customer Returns', before: '3.2%', after: '1.1%' },
        { label: 'Test Automation', before: '10%', after: '82%' },
      ],
      automations: [
        { name: 'AI Quality Inspection', status: 'live', department: 'Quality' },
        { name: 'Generative Design Assistant', status: 'live', department: 'Engineering' },
        { name: 'Automated Test Suite', status: 'piloting', department: 'Testing' },
        { name: 'AI Certification Tracker', status: 'planned', department: 'Compliance' },
      ],
    },
  ],

  /* ── Northbridge Industries Group ─────────────────────────────────────── */
  northbridge: [
    {
      name: 'Northbridge Aerospace',
      industry: 'Aerospace & Defense',
      employees: 8200,
      aiScoreBefore: 44,
      aiScoreAfter: 84,
      totalSavings: '$12.4M/yr',
      metrics: [
        { label: 'Manufacturing Yield', value: '98.6%', trend: 6, trendPositive: true, sparkline: [93, 94, 95, 96, 97, 98, 98.6] },
        { label: 'Supply Chain Visibility', value: '94%', trend: 32, trendPositive: true, sparkline: [71, 75, 80, 84, 88, 91, 94] },
        { label: 'Quality Escape Rate', value: '-74%', trend: -74, trendPositive: true, sparkline: [3.8, 3.0, 2.4, 1.8, 1.4, 1.1, 1.0] },
        { label: 'Program Margin', value: '+3.2pts', trend: 3.2, trendPositive: true, sparkline: [8.8, 9.2, 9.6, 10.2, 10.8, 11.4, 12.0] },
        { label: 'ITAR Compliance', value: '99.8%', trend: 4, trendPositive: true, sparkline: [96, 97, 97.5, 98, 98.5, 99, 99.8] },
        { label: 'MRO Turnaround', value: '-28%', trend: -28, trendPositive: true, sparkline: [45, 42, 39, 36, 34, 33, 32.4] },
      ],
      savings: [
        { category: 'Yield Optimization AI', amount: 4800 },
        { category: 'Supply Chain Intelligence', amount: 3200 },
        { category: 'Quality Prevention', amount: 2600 },
        { category: 'MRO Automation', amount: 1800 },
      ],
      beforeAfter: [
        { label: 'Manufacturing Yield', before: '93%', after: '98.6%' },
        { label: 'Supply Chain Visibility', before: '71%', after: '94%' },
        { label: 'Quality Escape Rate', before: '3.8%', after: '1.0%' },
        { label: 'MRO Turnaround', before: '45 days', after: '32.4 days' },
      ],
      automations: [
        { name: 'AI Yield Optimization', status: 'live', department: 'Manufacturing' },
        { name: 'Supply Chain Risk AI', status: 'live', department: 'Procurement' },
        { name: 'ITAR Compliance Monitor', status: 'piloting', department: 'Compliance' },
        { name: 'Digital Twin MRO', status: 'planned', department: 'Maintenance' },
      ],
    },
    {
      name: 'Northbridge Energy',
      industry: 'Energy & Utilities',
      employees: 11500,
      aiScoreBefore: 36,
      aiScoreAfter: 78,
      totalSavings: '$18.6M/yr',
      metrics: [
        { label: 'Grid Reliability', value: '99.97%', trend: 2, trendPositive: true, sparkline: [99.88, 99.90, 99.91, 99.93, 99.94, 99.96, 99.97] },
        { label: 'Outage Response', value: '-42%', trend: -42, trendPositive: true, sparkline: [125, 110, 96, 85, 78, 74, 72.5] },
        { label: 'Asset Utilization', value: '91%', trend: 18, trendPositive: true, sparkline: [77, 79, 82, 85, 87, 89, 91] },
        { label: 'Renewable Integration', value: '+34%', trend: 34, trendPositive: true, sparkline: [22, 26, 30, 34, 38, 42, 46] },
        { label: 'Safety Incidents', value: '-56%', trend: -56, trendPositive: true, sparkline: [18, 15, 12, 10, 9, 8.2, 7.9] },
        { label: 'Regulatory Compliance', value: '99.2%', trend: 6, trendPositive: true, sparkline: [94, 95, 96, 97, 98, 99, 99.2] },
      ],
      savings: [
        { category: 'Grid Optimization AI', amount: 6800 },
        { category: 'Predictive Maintenance', amount: 4600 },
        { category: 'Outage Prevention', amount: 4200 },
        { category: 'Renewable Forecasting', amount: 3000 },
      ],
      beforeAfter: [
        { label: 'Grid Reliability', before: '99.88%', after: '99.97%' },
        { label: 'Outage Response', before: '125 min', after: '72.5 min' },
        { label: 'Safety Incidents', before: '18/yr', after: '7.9/yr' },
        { label: 'Renewable Integration', before: '22%', after: '46%' },
      ],
      automations: [
        { name: 'AI Grid Management', status: 'live', department: 'Operations' },
        { name: 'Predictive Asset Maintenance', status: 'live', department: 'Maintenance' },
        { name: 'Renewable Forecasting AI', status: 'piloting', department: 'Generation' },
        { name: 'Autonomous Inspection Drones', status: 'planned', department: 'Field Ops' },
      ],
    },
    {
      name: 'Northbridge Financial Services',
      industry: 'Financial Services',
      employees: 6200,
      aiScoreBefore: 48,
      aiScoreAfter: 86,
      totalSavings: '$8.8M/yr',
      metrics: [
        { label: 'Transaction Processing', value: '+65%', trend: 65, trendPositive: true, sparkline: [0, 10, 22, 34, 46, 56, 65] },
        { label: 'Fraud Detection', value: '99.4%', trend: 8, trendPositive: true, sparkline: [92, 94, 95, 97, 98, 99, 99.4] },
        { label: 'AML Compliance', value: '99.8%', trend: 4, trendPositive: true, sparkline: [96, 97, 97.5, 98.5, 99, 99.5, 99.8] },
        { label: 'Customer Onboarding', value: '-58%', trend: -58, trendPositive: true, sparkline: [14, 12, 10, 8.5, 7, 6.2, 5.9] },
        { label: 'Risk Model Accuracy', value: '96%', trend: 14, trendPositive: true, sparkline: [84, 86, 88, 90, 92, 94, 96] },
        { label: 'Operational Cost', value: '-24%', trend: -24, trendPositive: true, sparkline: [100, 96, 92, 88, 84, 80, 76] },
      ],
      savings: [
        { category: 'Transaction Automation', amount: 3200 },
        { category: 'Fraud Prevention AI', amount: 2400 },
        { category: 'Compliance Automation', amount: 1800 },
        { category: 'Customer Experience', amount: 1400 },
      ],
      beforeAfter: [
        { label: 'Transaction Speed', before: '3.2 sec', after: '1.1 sec' },
        { label: 'Fraud Detection', before: '92%', after: '99.4%' },
        { label: 'Customer Onboarding', before: '14 days', after: '5.9 days' },
        { label: 'Operational Cost', before: '$82M', after: '$62.3M' },
      ],
      automations: [
        { name: 'Real-time Fraud AI', status: 'live', department: 'Risk' },
        { name: 'AML/KYC Automation', status: 'live', department: 'Compliance' },
        { name: 'AI Customer Onboarding', status: 'piloting', department: 'Operations' },
        { name: 'Algorithmic Trading Assist', status: 'planned', department: 'Trading' },
      ],
    },
    {
      name: 'Northbridge Health Sciences',
      industry: 'Pharmaceuticals & Biotech',
      employees: 16100,
      aiScoreBefore: 42,
      aiScoreAfter: 82,
      totalSavings: '$22.4M/yr',
      metrics: [
        { label: 'Drug Discovery Speed', value: '2.4x', trend: 140, trendPositive: true, sparkline: [1, 1.3, 1.5, 1.8, 2.0, 2.2, 2.4] },
        { label: 'Clinical Trial Efficiency', value: '+38%', trend: 38, trendPositive: true, sparkline: [0, 6, 12, 18, 26, 32, 38] },
        { label: 'Manufacturing Yield', value: '96%', trend: 12, trendPositive: true, sparkline: [86, 88, 90, 92, 93, 95, 96] },
        { label: 'Regulatory Submissions', value: '-45%', trend: -45, trendPositive: true, sparkline: [180, 160, 140, 125, 112, 102, 99] },
        { label: 'Supply Chain Reliability', value: '98%', trend: 10, trendPositive: true, sparkline: [89, 91, 93, 94, 96, 97, 98] },
        { label: 'Patient Safety Score', value: '99.6%', trend: 4, trendPositive: true, sparkline: [96, 97, 97.5, 98.2, 98.8, 99.2, 99.6] },
      ],
      savings: [
        { category: 'Drug Discovery AI', amount: 8600 },
        { category: 'Clinical Trial Optimization', amount: 5800 },
        { category: 'Manufacturing Excellence', amount: 4400 },
        { category: 'Regulatory Intelligence', amount: 3600 },
      ],
      beforeAfter: [
        { label: 'Drug Discovery', before: '4.5 years', after: '1.9 years' },
        { label: 'Clinical Trial Cost', before: '$48M avg', after: '$29.8M avg' },
        { label: 'Manufacturing Yield', before: '86%', after: '96%' },
        { label: 'Regulatory Filing', before: '180 days', after: '99 days' },
      ],
      automations: [
        { name: 'AI Molecule Screening', status: 'live', department: 'R&D' },
        { name: 'Clinical Trial Optimizer', status: 'live', department: 'Clinical Ops' },
        { name: 'GMP Compliance AI', status: 'piloting', department: 'Manufacturing' },
        { name: 'Real-World Evidence Platform', status: 'planned', department: 'Medical Affairs' },
      ],
    },
  ],

  /* ── Republic of Estonia — Digital Government ─────────────────────────── */
  estonia: [
    {
      name: 'Ministry of Finance',
      industry: 'Fiscal Policy & Taxation',
      employees: 4200,
      aiScoreBefore: 52,
      aiScoreAfter: 88,
      totalSavings: '$6.2M/yr',
      metrics: [
        { label: 'Tax Processing Time', value: '-68%', trend: -68, trendPositive: true, sparkline: [14, 11, 9, 7.5, 6, 5, 4.5] },
        { label: 'Citizen Satisfaction', value: '92%', trend: 18, trendPositive: true, sparkline: [78, 80, 83, 86, 88, 90, 92] },
        { label: 'System Uptime', value: '99.98%', trend: 2, trendPositive: true, sparkline: [99.80, 99.85, 99.88, 99.92, 99.94, 99.96, 99.98] },
        { label: 'Fraud Detection', value: '96%', trend: 28, trendPositive: true, sparkline: [75, 79, 83, 87, 90, 93, 96] },
        { label: 'Budget Forecasting', value: '94% accuracy', trend: 22, trendPositive: true, sparkline: [77, 80, 83, 86, 89, 92, 94] },
        { label: 'Digital Filing Rate', value: '99.2%', trend: 4, trendPositive: true, sparkline: [95, 96, 97, 97.5, 98, 98.8, 99.2] },
      ],
      savings: [
        { category: 'Tax Automation AI', amount: 2400 },
        { category: 'Fraud Prevention', amount: 1800 },
        { category: 'Budget Intelligence', amount: 1200 },
        { category: 'Citizen Self-Service', amount: 800 },
      ],
      beforeAfter: [
        { label: 'Tax Processing', before: '14 days', after: '4.5 days' },
        { label: 'Citizen Satisfaction', before: '78%', after: '92%' },
        { label: 'Fraud Detection', before: '75%', after: '96%' },
        { label: 'Digital Filing', before: '95%', after: '99.2%' },
      ],
      automations: [
        { name: 'AI Tax Assessment Engine', status: 'live', department: 'Tax Authority' },
        { name: 'Budget Forecasting AI', status: 'live', department: 'Budget Office' },
        { name: 'Fraud Detection System', status: 'piloting', department: 'Audit' },
        { name: 'Predictive Revenue Modeling', status: 'planned', department: 'Economics' },
      ],
    },
    {
      name: 'Ministry of Social Affairs',
      industry: 'Healthcare & Social Welfare',
      employees: 8400,
      aiScoreBefore: 46,
      aiScoreAfter: 84,
      totalSavings: '$8.4M/yr',
      metrics: [
        { label: 'Benefits Processing', value: '-58%', trend: -58, trendPositive: true, sparkline: [21, 18, 15, 12, 10, 9, 8.8] },
        { label: 'Citizen Satisfaction', value: '90%', trend: 20, trendPositive: true, sparkline: [75, 78, 81, 84, 86, 88, 90] },
        { label: 'System Uptime', value: '99.95%', trend: 2, trendPositive: true, sparkline: [99.75, 99.80, 99.84, 99.88, 99.90, 99.93, 99.95] },
        { label: 'Case Resolution Time', value: '-45%', trend: -45, trendPositive: true, sparkline: [30, 26, 23, 20, 18, 17, 16.5] },
        { label: 'Welfare Fraud Prevention', value: '92%', trend: 24, trendPositive: true, sparkline: [74, 78, 82, 85, 88, 90, 92] },
        { label: 'Healthcare Wait List', value: '-32%', trend: -32, trendPositive: true, sparkline: [45, 42, 38, 35, 33, 31, 30.6] },
      ],
      savings: [
        { category: 'Benefits Automation', amount: 3200 },
        { category: 'Case Management AI', amount: 2200 },
        { category: 'Healthcare Optimization', amount: 1800 },
        { category: 'Fraud Prevention', amount: 1200 },
      ],
      beforeAfter: [
        { label: 'Benefits Processing', before: '21 days', after: '8.8 days' },
        { label: 'Citizen Satisfaction', before: '75%', after: '90%' },
        { label: 'Case Resolution', before: '30 days', after: '16.5 days' },
        { label: 'Healthcare Wait List', before: '45 days', after: '30.6 days' },
      ],
      automations: [
        { name: 'AI Benefits Processor', status: 'live', department: 'Social Services' },
        { name: 'Healthcare Resource AI', status: 'live', department: 'Health Board' },
        { name: 'Welfare Fraud Detector', status: 'piloting', department: 'Audit' },
        { name: 'Predictive Social Needs', status: 'planned', department: 'Policy' },
      ],
    },
    {
      name: 'Ministry of Economic Affairs',
      industry: 'Trade & Digital Economy',
      employees: 5200,
      aiScoreBefore: 54,
      aiScoreAfter: 90,
      totalSavings: '$5.8M/yr',
      metrics: [
        { label: 'Business Registration', value: '-72%', trend: -72, trendPositive: true, sparkline: [3.5, 3.0, 2.4, 1.8, 1.4, 1.1, 1.0] },
        { label: 'Citizen Satisfaction', value: '94%', trend: 16, trendPositive: true, sparkline: [81, 83, 86, 88, 90, 92, 94] },
        { label: 'System Uptime', value: '99.99%', trend: 1, trendPositive: true, sparkline: [99.92, 99.94, 99.95, 99.96, 99.97, 99.98, 99.99] },
        { label: 'Permit Processing', value: '-55%', trend: -55, trendPositive: true, sparkline: [22, 18, 15, 13, 11, 10.2, 9.9] },
        { label: 'Trade Analytics', value: 'AI-live', trend: 100, trendPositive: true, sparkline: [0, 18, 36, 54, 72, 88, 100] },
        { label: 'Digital Services Adoption', value: '97%', trend: 8, trendPositive: true, sparkline: [90, 91, 92, 94, 95, 96, 97] },
      ],
      savings: [
        { category: 'Registration Automation', amount: 2200 },
        { category: 'Trade Intelligence AI', amount: 1600 },
        { category: 'Permit Processing', amount: 1200 },
        { category: 'Digital Service Platform', amount: 800 },
      ],
      beforeAfter: [
        { label: 'Business Registration', before: '3.5 days', after: '1.0 day' },
        { label: 'Citizen Satisfaction', before: '81%', after: '94%' },
        { label: 'Permit Processing', before: '22 days', after: '9.9 days' },
        { label: 'Digital Adoption', before: '90%', after: '97%' },
      ],
      automations: [
        { name: 'AI Business Registry', status: 'live', department: 'Registry' },
        { name: 'Trade Analytics Platform', status: 'live', department: 'Trade' },
        { name: 'Smart Permit Engine', status: 'piloting', department: 'Licensing' },
        { name: 'Economic Forecasting AI', status: 'planned', department: 'Economics' },
      ],
    },
    {
      name: 'Information System Authority (RIA)',
      industry: 'Cybersecurity & IT Infrastructure',
      employees: 480,
      aiScoreBefore: 58,
      aiScoreAfter: 92,
      totalSavings: '$3.6M/yr',
      metrics: [
        { label: 'Threat Detection', value: '99.7%', trend: 8, trendPositive: true, sparkline: [92, 94, 95, 97, 98, 99, 99.7] },
        { label: 'Citizen Satisfaction', value: '88%', trend: 14, trendPositive: true, sparkline: [77, 79, 81, 83, 85, 87, 88] },
        { label: 'System Uptime', value: '99.999%', trend: 1, trendPositive: true, sparkline: [99.98, 99.985, 99.99, 99.992, 99.994, 99.997, 99.999] },
        { label: 'Incident Response', value: '-64%', trend: -64, trendPositive: true, sparkline: [45, 38, 30, 24, 20, 17, 16.2] },
        { label: 'Vulnerability Patching', value: '-72%', trend: -72, trendPositive: true, sparkline: [72, 60, 48, 38, 28, 22, 20.2] },
        { label: 'X-Road Transactions', value: '+45%', trend: 45, trendPositive: true, sparkline: [1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.74] },
      ],
      savings: [
        { category: 'Threat Detection AI', amount: 1400 },
        { category: 'Incident Automation', amount: 1000 },
        { category: 'Infrastructure Optimization', amount: 720 },
        { category: 'X-Road Enhancement', amount: 480 },
      ],
      beforeAfter: [
        { label: 'Threat Detection', before: '92%', after: '99.7%' },
        { label: 'Incident Response', before: '45 min', after: '16.2 min' },
        { label: 'System Uptime', before: '99.98%', after: '99.999%' },
        { label: 'Vulnerability Patching', before: '72 hours', after: '20.2 hours' },
      ],
      automations: [
        { name: 'AI Threat Detection', status: 'live', department: 'Cybersecurity' },
        { name: 'Automated Incident Response', status: 'live', department: 'CERT' },
        { name: 'X-Road AI Monitoring', status: 'piloting', department: 'Infrastructure' },
        { name: 'Quantum-Safe Migration', status: 'planned', department: 'Cryptography' },
      ],
    },
  ],
  /* ── Federative Republic of Brazil — Digital Government ─────────────── */
  brazil: [
    {
      name: 'Receita Federal — Tax & Revenue',
      industry: 'Tax Administration & Revenue',
      employees: 38000,
      aiScoreBefore: 48,
      aiScoreAfter: 86,
      totalSavings: '$14.2M/yr',
      metrics: [
        { label: 'Tax Processing Time', value: '-62%', trend: -62, trendPositive: true, sparkline: [18, 15, 12, 10, 8.5, 7.2, 6.8] },
        { label: 'Citizen Satisfaction', value: '88%', trend: 16, trendPositive: true, sparkline: [76, 78, 80, 82, 84, 86, 88] },
        { label: 'System Uptime', value: '99.95%', trend: 2, trendPositive: true, sparkline: [99.78, 99.82, 99.86, 99.88, 99.91, 99.93, 99.95] },
        { label: 'Fraud Detection', value: '94%', trend: 26, trendPositive: true, sparkline: [72, 76, 80, 84, 88, 91, 94] },
        { label: 'SPED Compliance', value: '99.4%', trend: 5, trendPositive: true, sparkline: [95, 96, 97, 97.8, 98.4, 99, 99.4] },
        { label: 'Audit Productivity', value: '+80%', trend: 80, trendPositive: true, sparkline: [40, 48, 55, 62, 68, 74, 80] },
      ],
      savings: [
        { category: 'Tax Automation AI', amount: 5200 },
        { category: 'Fraud Prevention', amount: 4400 },
        { category: 'Audit Intelligence', amount: 2800 },
        { category: 'Citizen Self-Service', amount: 1800 },
      ],
      beforeAfter: [
        { label: 'Tax Processing', before: '18 days', after: '6.8 days' },
        { label: 'Citizen Satisfaction', before: '76%', after: '88%' },
        { label: 'Fraud Detection', before: '72%', after: '94%' },
        { label: 'Audit Productivity', before: '40%', after: '80%' },
      ],
      automations: [
        { name: 'AI Tax Assessment Engine', status: 'live', department: 'Tax Authority' },
        { name: 'SPED Analytics AI', status: 'live', department: 'Compliance' },
        { name: 'Fraud Detection System', status: 'piloting', department: 'Audit' },
        { name: 'Transfer Pricing AI', status: 'planned', department: 'International Tax' },
      ],
    },
    {
      name: 'SUS — Unified Health System',
      industry: 'Public Healthcare',
      employees: 72000,
      aiScoreBefore: 38,
      aiScoreAfter: 78,
      totalSavings: '$18.6M/yr',
      metrics: [
        { label: 'Patient Wait Time', value: '-48%', trend: -48, trendPositive: true, sparkline: [42, 38, 34, 30, 27, 24, 21.8] },
        { label: 'Citizen Satisfaction', value: '82%', trend: 18, trendPositive: true, sparkline: [68, 71, 74, 76, 78, 80, 82] },
        { label: 'System Uptime', value: '99.88%', trend: 3, trendPositive: true, sparkline: [99.60, 99.68, 99.72, 99.78, 99.82, 99.85, 99.88] },
        { label: 'Resource Utilization', value: '+34%', trend: 34, trendPositive: true, sparkline: [58, 62, 66, 70, 74, 78, 82] },
        { label: 'Prescription Accuracy', value: '97%', trend: 12, trendPositive: true, sparkline: [88, 90, 91, 93, 94, 96, 97] },
        { label: 'DATASUS Coverage', value: '94%', trend: 16, trendPositive: true, sparkline: [80, 83, 86, 88, 90, 92, 94] },
      ],
      savings: [
        { category: 'Healthcare Triage AI', amount: 6800 },
        { category: 'Resource Optimization', amount: 4600 },
        { category: 'Prescription Intelligence', amount: 3800 },
        { category: 'DATASUS Integration', amount: 3400 },
      ],
      beforeAfter: [
        { label: 'Patient Wait Time', before: '42 days', after: '21.8 days' },
        { label: 'Citizen Satisfaction', before: '68%', after: '82%' },
        { label: 'Resource Utilization', before: '58%', after: '82%' },
        { label: 'Prescription Accuracy', before: '88%', after: '97%' },
      ],
      automations: [
        { name: 'AI Patient Triage', status: 'live', department: 'Emergency Care' },
        { name: 'Resource Allocation AI', status: 'live', department: 'Hospital Management' },
        { name: 'Prescription Safety AI', status: 'piloting', department: 'Pharmacy' },
        { name: 'Epidemiological Forecasting', status: 'planned', department: 'Public Health' },
      ],
    },
    {
      name: 'BNDES — Development Bank',
      industry: 'Development Finance',
      employees: 28000,
      aiScoreBefore: 52,
      aiScoreAfter: 88,
      totalSavings: '$9.4M/yr',
      metrics: [
        { label: 'Loan Processing', value: '-56%', trend: -56, trendPositive: true, sparkline: [45, 38, 32, 28, 24, 21, 19.8] },
        { label: 'Client Satisfaction', value: '90%', trend: 14, trendPositive: true, sparkline: [79, 81, 83, 85, 87, 89, 90] },
        { label: 'System Uptime', value: '99.96%', trend: 2, trendPositive: true, sparkline: [99.82, 99.86, 99.88, 99.90, 99.92, 99.94, 99.96] },
        { label: 'Risk Assessment', value: '96%', trend: 20, trendPositive: true, sparkline: [80, 83, 86, 89, 91, 94, 96] },
        { label: 'Project Monitoring', value: '+42%', trend: 42, trendPositive: true, sparkline: [52, 58, 64, 70, 76, 80, 84] },
        { label: 'ESG Compliance', value: '92%', trend: 24, trendPositive: true, sparkline: [72, 75, 78, 82, 86, 89, 92] },
      ],
      savings: [
        { category: 'Credit Analysis AI', amount: 3400 },
        { category: 'Risk Assessment AI', amount: 2600 },
        { category: 'Project Monitoring', amount: 1800 },
        { category: 'ESG Analytics', amount: 1600 },
      ],
      beforeAfter: [
        { label: 'Loan Processing', before: '45 days', after: '19.8 days' },
        { label: 'Client Satisfaction', before: '79%', after: '90%' },
        { label: 'Risk Assessment', before: '80%', after: '96%' },
        { label: 'ESG Compliance', before: '72%', after: '92%' },
      ],
      automations: [
        { name: 'AI Credit Analysis', status: 'live', department: 'Lending' },
        { name: 'Risk Scoring Engine', status: 'live', department: 'Risk Management' },
        { name: 'ESG Analytics Platform', status: 'piloting', department: 'Sustainability' },
        { name: 'Startup Matching AI', status: 'planned', department: 'Innovation' },
      ],
    },
    {
      name: 'SERPRO — Federal Data Processing',
      industry: 'Government IT & Data Processing',
      employees: 42000,
      aiScoreBefore: 56,
      aiScoreAfter: 90,
      totalSavings: '$8.2M/yr',
      metrics: [
        { label: 'Processing Throughput', value: '+64%', trend: 64, trendPositive: true, sparkline: [1.0, 1.1, 1.2, 1.35, 1.48, 1.56, 1.64] },
        { label: 'Client Satisfaction', value: '92%', trend: 14, trendPositive: true, sparkline: [81, 83, 85, 87, 89, 91, 92] },
        { label: 'System Uptime', value: '99.99%', trend: 1, trendPositive: true, sparkline: [99.92, 99.94, 99.95, 99.96, 99.97, 99.98, 99.99] },
        { label: 'Incident Response', value: '-58%', trend: -58, trendPositive: true, sparkline: [38, 32, 27, 23, 19, 17, 16] },
        { label: 'API Availability', value: '99.97%', trend: 2, trendPositive: true, sparkline: [99.82, 99.86, 99.88, 99.91, 99.93, 99.95, 99.97] },
        { label: 'Cost per Transaction', value: '-42%', trend: -42, trendPositive: true, sparkline: [1.0, 0.88, 0.78, 0.70, 0.64, 0.60, 0.58] },
      ],
      savings: [
        { category: 'Infrastructure AI', amount: 3200 },
        { category: 'Incident Automation', amount: 2200 },
        { category: 'API Optimization', amount: 1600 },
        { category: 'Security AI', amount: 1200 },
      ],
      beforeAfter: [
        { label: 'Processing Throughput', before: '1.0x', after: '1.64x' },
        { label: 'Incident Response', before: '38 min', after: '16 min' },
        { label: 'System Uptime', before: '99.92%', after: '99.99%' },
        { label: 'Cost per Transaction', before: '$1.00', after: '$0.58' },
      ],
      automations: [
        { name: 'AI Infrastructure Monitor', status: 'live', department: 'Operations' },
        { name: 'Automated Incident Response', status: 'live', department: 'NOC' },
        { name: 'API Performance AI', status: 'piloting', department: 'Platform' },
        { name: 'Quantum-Ready Migration', status: 'planned', department: 'Security' },
      ],
    },
  ],
};

// ─── Company-to-Division Index Map ──────────────────────────────────────────

const companyToDivIndex: Record<string, { parent: string; index: number }> = {
  // IndustrialsCo children
  hcc: { parent: 'meridian', index: 0 },
  hrsi: { parent: 'meridian', index: 1 },
  hsi: { parent: 'meridian', index: 2 },
  hti: { parent: 'meridian', index: 3 },
  htsi: { parent: 'meridian', index: 4 },
  he: { parent: 'meridian', index: 5 },
  gg: { parent: 'meridian', index: 6 },
  // Northbridge children
  'nb-aerospace': { parent: 'northbridge', index: 0 },
  'nb-energy': { parent: 'northbridge', index: 1 },
  'nb-financial': { parent: 'northbridge', index: 2 },
  'nb-health': { parent: 'northbridge', index: 3 },
  // Estonia children
  'ee-finance': { parent: 'estonia', index: 0 },
  'ee-social': { parent: 'estonia', index: 1 },
  'ee-economic': { parent: 'estonia', index: 2 },
  'ee-ria': { parent: 'estonia', index: 3 },
  // Brazil children
  'br-receita': { parent: 'brazil', index: 0 },
  'br-sus': { parent: 'brazil', index: 1 },
  'br-bndes': { parent: 'brazil', index: 2 },
  'br-serpro': { parent: 'brazil', index: 3 },
};

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
          <circle cx="32" cy="32" r={radius} fill="none" stroke="var(--cc-border)" strokeWidth="5" />
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
          <span className="text-sm font-bold" style={{ color: 'var(--cc-text)' }}>{after}</span>
        </div>
      </div>
      <div className="text-xs" style={{ color: 'var(--cc-text-secondary)' }}>
        <div>AI Readiness</div>
        <div className="flex items-center gap-1">
          <span className="font-mono" style={{ color: 'var(--cc-text-tertiary)' }}>{before}</span>
          <ArrowRight className="w-3 h-3" style={{ color: 'var(--cc-text-tertiary)' }} />
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
    planned: 'bg-gray-500',
  };
  const labels = {
    live: 'Live',
    piloting: 'Piloting',
    planned: 'Planned',
  };
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium" style={{ color: 'var(--cc-text-secondary)' }}>
      <span className={`w-2 h-2 rounded-full ${colors[status]}`} />
      {labels[status]}
    </span>
  );
}

// ─── Custom Tooltip ─────────────────────────────────────────────────────────

function SavingsTooltip({ active, payload }: { active?: boolean; payload?: Array<{ value: number }> }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg px-3 py-2 shadow-lg text-sm" style={{ background: 'var(--cc-bg-card)', borderColor: 'var(--cc-border)', borderWidth: 1, borderStyle: 'solid' }}>
      <span className="font-semibold" style={{ color: 'var(--cc-text)' }}>${payload[0].value}K</span>
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
      <div className="rounded-2xl shadow-sm p-6" style={{ background: 'var(--cc-bg-card)', borderColor: 'var(--cc-border)', borderWidth: 1, borderStyle: 'solid' }}>
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div>
              <h2 className="text-2xl font-bold" style={{ color: 'var(--cc-text)' }}>{company.name}</h2>
              <p className="text-sm" style={{ color: 'var(--cc-text-secondary)' }}>{company.industry}</p>
            </div>
            <div className="hidden sm:flex items-center gap-6 pl-6 border-l" style={{ borderColor: 'var(--cc-border)' }}>
              <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--cc-text-secondary)' }}>
                <Users className="w-4 h-4" />
                <span className="font-semibold" style={{ color: 'var(--cc-text)' }}>{company.employees.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--cc-text-secondary)' }}>
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
            className="rounded-2xl shadow-sm p-5" style={{ background: 'var(--cc-bg-card)', borderColor: 'var(--cc-border)', borderWidth: 1, borderStyle: 'solid' }}
          >
            <p className="text-xs font-medium uppercase tracking-wide mb-2" style={{ color: 'var(--cc-text-secondary)' }}>
              {metric.label}
            </p>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-2xl font-bold" style={{ color: 'var(--cc-text)' }}>{metric.value}</p>
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
      <div className="rounded-2xl shadow-sm p-6" style={{ background: 'var(--cc-bg-card)', borderColor: 'var(--cc-border)', borderWidth: 1, borderStyle: 'solid' }}>
        <h3 className="text-sm font-semibold uppercase tracking-wide mb-4" style={{ color: 'var(--cc-text)' }}>
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
      <div className="rounded-2xl shadow-sm p-6" style={{ background: 'var(--cc-bg-card)', borderColor: 'var(--cc-border)', borderWidth: 1, borderStyle: 'solid' }}>
        <h3 className="text-sm font-semibold uppercase tracking-wide mb-4" style={{ color: 'var(--cc-text)' }}>
          Before &amp; After
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {company.beforeAfter.map((item) => (
            <div
              key={item.label}
              className="rounded-xl p-4 text-center" style={{ background: 'var(--cc-bg-elevated)', borderColor: 'var(--cc-border)', borderWidth: 1, borderStyle: 'solid' }}
            >
              <p className="text-xs font-medium uppercase tracking-wide mb-3" style={{ color: 'var(--cc-text-secondary)' }}>
                {item.label}
              </p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-lg font-bold font-mono text-[#EF4444]/70">{item.before}</span>
                <ArrowRight className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--cc-text-tertiary)' }} />
                <span className="text-lg font-bold font-mono text-[#10B981]">{item.after}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 5: Active Automations */}
      <div className="rounded-2xl shadow-sm p-6" style={{ background: 'var(--cc-bg-card)', borderColor: 'var(--cc-border)', borderWidth: 1, borderStyle: 'solid' }}>
        <h3 className="text-sm font-semibold uppercase tracking-wide mb-4" style={{ color: 'var(--cc-text)' }}>
          Active Automations
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b" style={{ borderColor: 'var(--cc-border)' }}>
                <th className="text-left py-2 pr-4 text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--cc-text-secondary)' }}>
                  Workflow
                </th>
                <th className="text-left py-2 pr-4 text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--cc-text-secondary)' }}>
                  Department
                </th>
                <th className="text-left py-2 text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--cc-text-secondary)' }}>
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {company.automations.map((a) => (
                <tr key={a.name} className="border-b last:border-0">
                  <td className="py-2.5 pr-4 font-medium" style={{ color: 'var(--cc-text)' }}>{a.name}</td>
                  <td className="py-2.5 pr-4" style={{ color: 'var(--cc-text-secondary)' }}>{a.department}</td>
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

// ─── Helper: resolve divisions for a company ────────────────────────────────

function resolveDivisions(companyId: string): CompanyData[] {
  // Direct parent match (meridian, northwood, pinnacle, atlas, northbridge, estonia, brazil)
  if (divisionsByCompany[companyId]) {
    return divisionsByCompany[companyId];
  }
  // Child company -> show single division from parent
  const mapping = companyToDivIndex[companyId];
  if (mapping) {
    const parentDivisions = divisionsByCompany[mapping.parent];
    if (parentDivisions && parentDivisions[mapping.index]) {
      return [parentDivisions[mapping.index]];
    }
  }
  // Fallback to meridian
  return divisionsByCompany.meridian;
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default function Stories() {
  const { company } = useCompany();
  const [searchParams] = useSearchParams();
  const divParam = searchParams.get('div');

  const divisions = resolveDivisions(company.id);
  const isSpecificChild = !!companyToDivIndex[company.id];

  const defaultIndex = divParam !== null
    ? Math.min(Math.max(0, parseInt(divParam, 10) || 0), divisions.length - 1)
    : 0;
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  // Reset activeIndex when divisions change (e.g., company switch)
  useEffect(() => {
    setActiveIndex(0);
  }, [divisions.length, company.id]);

  return (
    <div className="space-y-6">
      <PreliminaryBanner />

      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        <h1 className="text-3xl font-bold" style={{ color: 'var(--cc-text)' }}>Division Performance</h1>
        <p className="mt-1 text-lg" style={{ color: 'var(--cc-text-secondary)' }}>
          {isSpecificChild ? `Transformation results for ${company.name}` : `Transformation results across all ${divisions.length} ${company.name} divisions`}
        </p>
      </motion.div>

      {/* Division Switcher Tab Bar */}
      <div className="border-b" style={{ borderColor: 'var(--cc-border)' }}>
        <nav className="flex gap-1 -mb-px overflow-x-auto scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }} aria-label="Division tabs">
          {divisions.map((division, index) => (
            <button
              key={division.name}
              onClick={() => setActiveIndex(index)}
              className={`relative whitespace-nowrap px-5 py-3 text-sm font-medium transition-colors ${
                activeIndex === index
                  ? 'text-[#4285F4] font-semibold'
                  : ''
              }`}
              style={activeIndex !== index ? { color: 'var(--cc-text-secondary)' } : undefined}
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
