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
import { useCompany } from '../data/CompanyContext';

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

interface CompanyGapData {
  gaps: GapDetail[];
  gapDivisionMap: Record<number, string[]>;
  statCards: { label: string; color: 'blue' | 'green' | 'red' }[];
  totalImpact: string;
  divisionBadges: string[];
  investment: string;
  annualReturn: string;
  roi: string;
}

/* ── Per-Company Gap Data ────────────────────────────────────────────────── */

const gapDataByCompany: Record<string, CompanyGapData> = {
  /* ── IndustrialsCo (meridian) ─────────────────────────────────────────── */
  meridian: {
    gaps: [
      {
        id: 1,
        name: 'eCMS ↔ HCSS Suite',
        sources: 'eCMS construction ERP, HCSS Heavy Job / Equipment360',
        gapLabel: 'Flat-File Only',
        blocked: 'Real-time project cost visibility, automated field-to-finance reconciliation',
        impact: '$1.4M/yr',
        impactNum: 1400000,
        sourceList: [
          'eCMS construction ERP (finance & job costing)',
          'HCSS Heavy Job (field time & production)',
          'HCSS Equipment360 (fleet cost tracking)',
          'Flat-file exports between systems',
        ],
        missingLayer:
          'No real-time sync between eCMS construction ERP and HCSS field operations. Data flows via flat-file exports. Field costs don\'t appear in eCMS for 24-48 hours.',
        blockedCapabilities: [
          'Real-time project cost visibility across all jobs',
          'Automated field-to-finance reconciliation',
          'Same-day cost variance alerting',
          'Live job profitability dashboards',
        ],
        recommendedSolution:
          'Deploy real-time API integration between eCMS and HCSS Suite. Estimated implementation: 8-10 weeks.',
      },
      {
        id: 2,
        name: 'QMirror AS/400 Bottleneck',
        sources: 'AS/400 mainframe, QMirror batch replication',
        gapLabel: 'BATCH LAG',
        blocked: 'Real-time analytics, streaming ML inference, live dashboards',
        impact: '$1.8M/yr',
        impactNum: 1800000,
        sourceList: [
          'AS/400 mainframe (core financial & operational data)',
          'QMirror batch replication (15-min lag)',
          'Downstream BI and reporting systems',
          'All mainframe-origin data consumers',
        ],
        missingLayer:
          'AS/400 batch replication via QMirror creates 15-minute data lag for all downstream systems. Blocks real-time AI on any mainframe-origin data.',
        blockedCapabilities: [
          'Real-time analytics on mainframe-origin data',
          'Streaming ML inference pipelines',
          'Live operational dashboards',
          'Event-driven automation from core systems',
        ],
        recommendedSolution:
          'Replace QMirror batch replication with CDC (Change Data Capture) streaming from AS/400 to a modern data platform. Estimated implementation: 10-14 weeks.',
      },
      {
        id: 3,
        name: 'P6 ↔ eCMS',
        sources: 'Primavera P6, eCMS ERP',
        gapLabel: 'NIGHTLY CSV',
        blocked: 'Real-time cost overrun alerts, automated change order processing',
        impact: '$850K/yr',
        impactNum: 850000,
        sourceList: [
          'Primavera P6 (project scheduling & budgets)',
          'eCMS ERP (actual costs & accounting)',
          'Nightly CSV export process',
          'Manual budget vs. actual reconciliation',
        ],
        missingLayer:
          'Budget vs. actual analysis requires nightly CSV export from Primavera P6 to eCMS. No real-time cost variance alerting.',
        blockedCapabilities: [
          'Real-time cost overrun alerts',
          'Automated change order processing',
          'Live budget vs. actual dashboards',
          'Proactive schedule-cost impact analysis',
        ],
        recommendedSolution:
          'Build real-time P6-to-eCMS integration with automated cost variance alerting and change order workflow. Estimated implementation: 6-8 weeks.',
      },
      {
        id: 4,
        name: 'CMMS ↔ eCMS',
        sources: 'CMMS inventory, eCMS purchasing',
        gapLabel: 'DOUBLE ENTRY',
        blocked: 'Automated procurement, predictive parts ordering',
        impact: '$420K/yr',
        impactNum: 420000,
        sourceList: [
          'CMMS (maintenance management & parts inventory)',
          'eCMS (purchasing & accounts payable)',
          'Import/export file integration',
          'Manual double-entry across both systems',
        ],
        missingLayer:
          'Import/export file integration between CMMS inventory and eCMS purchasing. Parts ordering creates double-entry across systems.',
        blockedCapabilities: [
          'Automated procurement from maintenance requests',
          'Predictive parts ordering based on usage patterns',
          'Unified inventory visibility across systems',
          'Elimination of double-entry data reconciliation',
        ],
        recommendedSolution:
          'Deploy bi-directional API sync between CMMS and eCMS purchasing modules. Estimated implementation: 4-6 weeks.',
      },
      {
        id: 5,
        name: 'RailSentry / HSI Data Island',
        sources: 'RailSentry AI, HSI ultrasonic analysis, P6, Equipment360',
        gapLabel: 'AI SILO',
        blocked: 'Automated maintenance scheduling from AI detections, closed-loop inspection',
        impact: '$1.2M/yr',
        impactNum: 1200000,
        sourceList: [
          'RailSentry object detection AI (post-processing)',
          'HSI ultrasonic analysis outputs',
          'Primavera P6 (scheduling — no AI feed)',
          'Equipment360 (work orders — no AI feed)',
        ],
        missingLayer:
          'AI model outputs (RailSentry object detection, HSI ultrasonic analysis) sit in post-processing. No pipeline to feed results into P6 scheduling or Equipment360 work orders.',
        blockedCapabilities: [
          'Automated maintenance scheduling from AI detections',
          'Closed-loop inspection workflows',
          'AI-driven work order generation',
          'Predictive maintenance from combined AI signals',
        ],
        recommendedSolution:
          'Build an AI output pipeline that feeds RailSentry and HSI detections into P6 scheduling and Equipment360 work orders. Estimated implementation: 8-12 weeks.',
      },
      {
        id: 6,
        name: 'Business Objects Reporting Gap',
        sources: 'Business Objects BI, HCSS field data',
        gapLabel: 'STATIC BI',
        blocked: 'Real-time cross-division analytics, automated executive dashboards',
        impact: '$380K/yr',
        impactNum: 380000,
        sourceList: [
          'Business Objects (static BI reports)',
          'HCSS field data (not connected to BI)',
          'Manual cross-division data assembly',
          'Executive report compilation (4-5 day cycle)',
        ],
        missingLayer:
          'Static BI disconnected from real-time HCSS field data. Cross-division reports require 4-5 days of manual data assembly.',
        blockedCapabilities: [
          'Real-time cross-division analytics',
          'Automated executive dashboards',
          'Self-service reporting for division leaders',
          'Live KPI monitoring across all entities',
        ],
        recommendedSolution:
          'Replace Business Objects with modern BI (e.g., Power BI / Tableau) connected to a unified data layer fed by HCSS and all source systems. Estimated implementation: 6-10 weeks.',
      },
    ],
    gapDivisionMap: {
      1: ['meridian', 'hcc', 'hrsi', 'htsi'],
      2: ['meridian', 'hcc', 'hrsi', 'hsi', 'hti', 'htsi'],
      3: ['meridian', 'hcc', 'hti', 'htsi'],
      4: ['meridian', 'hrsi', 'hsi'],
      5: ['meridian', 'hsi', 'hrsi'],
      6: ['meridian', 'hcc', 'hrsi', 'hsi', 'hti', 'htsi'],
    },
    statCards: [
      { label: '18 Systems Mapped', color: 'blue' },
      { label: '26 Active Connections', color: 'green' },
      { label: '6 Critical Integration Gaps', color: 'red' },
      { label: '$6.05M Annual Impact', color: 'red' },
    ],
    totalImpact: '$6.05M/year',
    divisionBadges: ['IC Construction — Rail & Highway Construction', 'IC Rail Svc — Railroad Services', 'IC Services — Rail Testing', 'IC Technologies — Signal & PTC', 'IC Transit — Transit Services'],
    investment: '$280K',
    annualReturn: '$6.05M',
    roi: '21.6x Year 1',
  },

  /* ── Northwood Insurance Group ──────────────────────────────────────────── */
  northwood: {
    gaps: [
      {
        id: 1,
        name: 'Claims-to-Underwriting Data Bridge',
        sources: 'Guidewire ClaimCenter, Duck Creek Policy Admin',
        gapLabel: 'No real-time claims-underwriting sync',
        blocked: 'Dynamic pricing, loss trend analysis',
        impact: '$1.4M/yr',
        impactNum: 1400000,
        sourceList: [
          'Guidewire ClaimCenter (claims processing)',
          'Duck Creek Policy Admin (policy management)',
          'Actuarial spreadsheets (manual loss models)',
          'Third-party adjuster reports (PDF/email)',
        ],
        missingLayer:
          'Claims data and underwriting decisions exist in separate systems with no automated feedback loop. Underwriters cannot see real-time loss trends by policy segment.',
        blockedCapabilities: [
          'Dynamic risk-based pricing using live claims data',
          'Real-time loss ratio monitoring by segment',
          'Automated reserve adequacy analysis',
          'Predictive claims severity modeling',
        ],
        recommendedSolution:
          'Build a unified claims-underwriting data layer with real-time streaming from ClaimCenter to the analytics platform. Enable automated loss trend dashboards. Estimated implementation: 8-10 weeks.',
      },
      {
        id: 2,
        name: 'CRM-to-Policy Admin Integration',
        sources: 'Salesforce CRM, Duck Creek Policy Admin',
        gapLabel: 'No CRM-policy data sync',
        blocked: 'Agent 360 view, cross-sell automation',
        impact: '$680K/yr',
        impactNum: 680000,
        sourceList: [
          'Salesforce CRM (agent/broker relationships)',
          'Duck Creek Policy Admin (policy records)',
          'Marketing automation (HubSpot)',
          'Call center recordings (Genesys)',
        ],
        missingLayer:
          'Agent and policyholder data are split across CRM and policy admin with no unified view. Agents must toggle between 3-4 systems to see full customer picture.',
        blockedCapabilities: [
          'Unified agent/policyholder 360-degree view',
          'Automated cross-sell and upsell recommendations',
          'Agent performance analytics by book of business',
          'Customer lifetime value calculation',
        ],
        recommendedSolution:
          'Deploy bi-directional sync between Salesforce and Duck Creek with a customer master in the data lake. Build unified agent portal. Estimated implementation: 6-8 weeks.',
      },
      {
        id: 3,
        name: 'Fraud Detection Data Pipeline',
        sources: 'Claims system, SIU database, external watchlists',
        gapLabel: 'No unified fraud intelligence layer',
        blocked: 'Real-time fraud scoring, ring detection',
        impact: '$920K/yr',
        impactNum: 920000,
        sourceList: [
          'Guidewire ClaimCenter (claims data)',
          'SIU case management (investigations)',
          'NICB and external fraud databases',
          'Social media and public records',
        ],
        missingLayer:
          'Fraud investigation data is siloed from claims intake. SIU investigators manually cross-reference claims with external databases, delaying detection by days.',
        blockedCapabilities: [
          'Real-time fraud scoring at FNOL',
          'Network analysis for organized fraud rings',
          'Automated SIU referral with evidence packets',
          'Predictive fraud pattern detection',
        ],
        recommendedSolution:
          'Build a real-time fraud intelligence pipeline integrating claims, SIU, and external data sources. Deploy ML-based scoring at FNOL intake. Estimated implementation: 10-12 weeks.',
      },
      {
        id: 4,
        name: 'Reinsurance Data Automation',
        sources: 'Treaty management spreadsheets, claims system',
        gapLabel: 'No automated reinsurance reporting',
        blocked: 'Real-time cession tracking, treaty optimization',
        impact: '$540K/yr',
        impactNum: 540000,
        sourceList: [
          'Treaty management Excel workbooks',
          'Claims system (loss data for cessions)',
          'Accounting system (premium allocation)',
          'Reinsurer portal submissions (manual)',
        ],
        missingLayer:
          'Reinsurance cessions are calculated manually at quarter-end. No real-time visibility into treaty utilization, cession accuracy, or reinsurer settlement status.',
        blockedCapabilities: [
          'Real-time reinsurance cession tracking',
          'Automated bordereau generation',
          'Treaty optimization modeling',
          'Reinsurer settlement reconciliation',
        ],
        recommendedSolution:
          'Automate reinsurance data flows from policy and claims systems into a cession engine. Enable real-time treaty utilization dashboards. Estimated implementation: 8-10 weeks.',
      },
    ],
    gapDivisionMap: {
      1: ['northwood'],
      2: ['northwood'],
      3: ['northwood'],
      4: ['northwood'],
    },
    statCards: [
      { label: '12 Systems Mapped', color: 'blue' },
      { label: '18 Active Connections', color: 'green' },
      { label: '11 Missing Connections', color: 'red' },
      { label: '$3.5M Annual Impact', color: 'red' },
    ],
    totalImpact: '$3.5M/year',
    divisionBadges: ['Claims Operations', 'Underwriting', 'Policy Administration', 'CRM & Distribution'],
    investment: '$180K',
    annualReturn: '$3.5M',
    roi: '19.4x Year 1',
  },

  /* ── Pinnacle Healthcare Systems ──────────────────────────────────────── */
  pinnacle: {
    gaps: [
      {
        id: 1,
        name: 'EHR-to-Billing Integration',
        sources: 'Epic EHR, Cerner Revenue Cycle',
        gapLabel: 'No real-time EHR-billing sync',
        blocked: 'Automated coding, clean claim rate',
        impact: '$1.2M/yr',
        impactNum: 1200000,
        sourceList: [
          'Epic EHR (clinical documentation)',
          'Cerner Revenue Cycle (billing/coding)',
          'Manual coding review worksheets',
          'Payer remittance advice (835 files)',
        ],
        missingLayer:
          'Clinical documentation in Epic and billing codes in Cerner are not synchronized in real-time. Coders manually translate clinical notes into billing codes, creating delays and errors.',
        blockedCapabilities: [
          'AI-assisted medical coding from clinical notes',
          'Real-time clean claim rate optimization',
          'Automated charge capture from clinical workflows',
          'Denial prevention through pre-submission validation',
        ],
        recommendedSolution:
          'Deploy real-time HL7/FHIR integration between Epic and Cerner with AI-powered coding suggestions. Build automated charge capture pipeline. Estimated implementation: 10-14 weeks.',
      },
      {
        id: 2,
        name: 'Pharmacy-Clinical Data Bridge',
        sources: 'Pharmacy dispensing system, Epic EHR',
        gapLabel: 'No pharmacy-clinical data bridge',
        blocked: 'Medication reconciliation, adverse event prevention',
        impact: '$840K/yr',
        impactNum: 840000,
        sourceList: [
          'Omnicell pharmacy dispensing system',
          'Epic EHR (medication orders)',
          'External pharmacy benefit managers',
          'Drug interaction databases (manual lookup)',
        ],
        missingLayer:
          'Pharmacy dispensing data and clinical medication records are not fully integrated. Medication reconciliation requires manual comparison across systems at each care transition.',
        blockedCapabilities: [
          'Automated medication reconciliation at transitions',
          'Real-time adverse drug event prevention',
          'Formulary compliance optimization',
          'Predictive medication adherence scoring',
        ],
        recommendedSolution:
          'Implement FHIR-based medication data exchange between Omnicell and Epic. Deploy AI-powered reconciliation at admission, transfer, and discharge. Estimated implementation: 8-12 weeks.',
      },
      {
        id: 3,
        name: 'Scheduling-to-Records Pipeline',
        sources: 'Scheduling system, Epic EHR, patient portal',
        gapLabel: 'No scheduling-records integration',
        blocked: 'AI scheduling optimization, no-show prediction',
        impact: '$620K/yr',
        impactNum: 620000,
        sourceList: [
          'QGenda scheduling system',
          'Epic EHR (patient records)',
          'MyChart patient portal',
          'Call center scheduling logs',
        ],
        missingLayer:
          'Scheduling, patient history, and provider availability exist in separate systems. Optimizing appointment slots requires manual cross-referencing of patient needs and provider capacity.',
        blockedCapabilities: [
          'AI-optimized scheduling based on patient acuity',
          'Predictive no-show modeling and overbooking',
          'Provider workload balancing',
          'Automated waitlist management',
        ],
        recommendedSolution:
          'Build a unified scheduling intelligence layer connecting QGenda, Epic, and the patient portal. Deploy ML-based no-show prediction and smart scheduling. Estimated implementation: 6-10 weeks.',
      },
      {
        id: 4,
        name: 'Quality Reporting Data Lake',
        sources: 'Clinical systems, registry databases, payer portals',
        gapLabel: 'No unified quality data lake',
        blocked: 'Automated CMS reporting, quality benchmarking',
        impact: '$380K/yr',
        impactNum: 380000,
        sourceList: [
          'Epic clinical quality measures',
          'CMS quality reporting portal (manual submission)',
          'State health department registries',
          'Payer quality scorecards (separate portals)',
        ],
        missingLayer:
          'Quality data is scattered across clinical systems, registry databases, and payer portals. CMS submissions require weeks of manual data extraction and validation.',
        blockedCapabilities: [
          'Automated CMS quality measure reporting',
          'Real-time quality benchmarking dashboards',
          'Proactive gap-in-care identification',
          'Value-based care performance optimization',
        ],
        recommendedSolution:
          'Build a quality data lake aggregating clinical, registry, and payer data. Deploy automated CMS reporting and real-time quality dashboards. Estimated implementation: 8-10 weeks.',
      },
    ],
    gapDivisionMap: {
      1: ['pinnacle'],
      2: ['pinnacle'],
      3: ['pinnacle'],
      4: ['pinnacle'],
    },
    statCards: [
      { label: '14 Systems Mapped', color: 'blue' },
      { label: '20 Active Connections', color: 'green' },
      { label: '12 Missing Connections', color: 'red' },
      { label: '$3.0M Annual Impact', color: 'red' },
    ],
    totalImpact: '$3.0M/year',
    divisionBadges: ['Clinical Operations', 'Revenue Cycle & Billing', 'Pharmacy & Supply Chain', 'Compliance & Quality'],
    investment: '$160K',
    annualReturn: '$3.0M',
    roi: '18.8x Year 1',
  },

  /* ── Atlas Manufacturing Group ─────────────────────────────────────────── */
  atlas: {
    gaps: [
      {
        id: 1,
        name: 'MES-to-ERP Integration',
        sources: 'Shop floor MES, SAP ERP',
        gapLabel: 'No real-time MES-ERP sync',
        blocked: 'Real-time production costing, yield optimization',
        impact: '$1.8M/yr',
        impactNum: 1800000,
        sourceList: [
          'Siemens Opcenter MES (shop floor)',
          'SAP S/4HANA ERP (financials/planning)',
          'Manual production reports (shift-end)',
          'Excel-based cost tracking',
        ],
        missingLayer:
          'Manufacturing execution data and ERP financials are disconnected. Production costs are reconciled weekly via manual reports, preventing real-time yield-to-cost optimization.',
        blockedCapabilities: [
          'Real-time production cost visibility',
          'AI-driven yield optimization across lines',
          'Automated variance analysis',
          'Predictive capacity planning',
        ],
        recommendedSolution:
          'Deploy real-time OPC-UA/MQTT integration between MES and SAP. Build production cost analytics in the data lakehouse. Estimated implementation: 10-14 weeks.',
      },
      {
        id: 2,
        name: 'Quality-Production Data Loop',
        sources: 'QMS, MES, inspection equipment',
        gapLabel: 'No quality-production feedback loop',
        blocked: 'Root cause analysis, predictive quality',
        impact: '$1.2M/yr',
        impactNum: 1200000,
        sourceList: [
          'Quality management system (non-conformance reports)',
          'CMM and vision inspection equipment',
          'MES production parameters',
          'Customer complaint database',
        ],
        missingLayer:
          'Quality inspection results and production process parameters are stored in separate systems. Engineers manually correlate defects to process conditions, delaying root cause analysis.',
        blockedCapabilities: [
          'Real-time process-quality correlation',
          'Predictive quality scoring per batch',
          'Automated root cause analysis',
          'Statistical process control with AI',
        ],
        recommendedSolution:
          'Build a quality-production data bridge linking inspection results to process parameters in real-time. Deploy AI-driven root cause analysis. Estimated implementation: 8-12 weeks.',
      },
      {
        id: 3,
        name: 'Supply Chain Visibility Platform',
        sources: 'Supplier portals, ERP, logistics systems',
        gapLabel: 'No end-to-end supply chain visibility',
        blocked: 'Demand sensing, supplier risk management',
        impact: '$960K/yr',
        impactNum: 960000,
        sourceList: [
          'SAP Materials Management',
          '40+ supplier portals (manual check)',
          'Freight carrier tracking systems',
          'Warehouse management system',
        ],
        missingLayer:
          'No unified view of supplier performance, in-transit inventory, or demand signals. Procurement teams manually check dozens of supplier portals for order status.',
        blockedCapabilities: [
          'End-to-end supply chain visibility',
          'AI-powered demand sensing and forecasting',
          'Supplier risk scoring and monitoring',
          'Automated purchase order optimization',
        ],
        recommendedSolution:
          'Deploy a supply chain control tower integrating supplier, logistics, and warehouse data. Enable AI-driven demand sensing. Estimated implementation: 10-14 weeks.',
      },
      {
        id: 4,
        name: 'Energy & Sustainability Monitoring',
        sources: 'Utility meters, production systems, EHS database',
        gapLabel: 'No energy-production correlation',
        blocked: 'Carbon tracking, energy optimization per unit',
        impact: '$420K/yr',
        impactNum: 420000,
        sourceList: [
          'Utility smart meters (electricity, gas, water)',
          'Production scheduling system',
          'EHS compliance database',
          'Manual sustainability reports',
        ],
        missingLayer:
          'Energy consumption data and production output are tracked in separate systems. Cannot calculate energy cost per unit produced or track carbon emissions by product line.',
        blockedCapabilities: [
          'Energy cost per unit analysis',
          'Automated carbon footprint reporting',
          'AI-optimized production scheduling for energy',
          'ESG compliance automation',
        ],
        recommendedSolution:
          'Connect utility metering to production data in a unified sustainability platform. Deploy AI for energy-optimized scheduling. Estimated implementation: 6-8 weeks.',
      },
    ],
    gapDivisionMap: {
      1: ['atlas'],
      2: ['atlas'],
      3: ['atlas'],
      4: ['atlas'],
    },
    statCards: [
      { label: '18 Systems Mapped', color: 'blue' },
      { label: '26 Active Connections', color: 'green' },
      { label: '16 Missing Connections', color: 'red' },
      { label: '$4.4M Annual Impact', color: 'red' },
    ],
    totalImpact: '$4.4M/year',
    divisionBadges: ['Precision Machining', 'Assembly Systems', 'Materials & Supply', 'Quality & Engineering'],
    investment: '$240K',
    annualReturn: '$4.4M',
    roi: '18.3x Year 1',
  },

  /* ── Northbridge Industries Group ─────────────────────────────────────── */
  northbridge: {
    gaps: [
      {
        id: 1,
        name: 'Consolidated Financial Reporting',
        sources: 'SAP, Oracle, custom ERP across 4 subsidiaries',
        gapLabel: 'No unified financial data layer',
        blocked: 'Real-time consolidated P&L, segment reporting',
        impact: '$4.2M/yr',
        impactNum: 4200000,
        sourceList: [
          'SAP S/4HANA (Aerospace, Health Sciences)',
          'Oracle EBS (Energy division)',
          'FIS banking platform (Financial Services)',
          'Custom consolidation spreadsheets',
        ],
        missingLayer:
          'Each subsidiary uses a different ERP with incompatible chart of accounts. Consolidated financial reporting requires 3 weeks of manual reconciliation each quarter.',
        blockedCapabilities: [
          'Real-time consolidated P&L across all subsidiaries',
          'Automated intercompany elimination',
          'Segment-level profitability analysis',
          'Board-ready financial dashboards on demand',
        ],
        recommendedSolution:
          'Deploy a unified financial data lake with automated ETL from all ERP systems. Standardize chart of accounts mapping. Estimated implementation: 12-16 weeks.',
      },
      {
        id: 2,
        name: 'Cross-Subsidiary Talent Platform',
        sources: 'Workday, SuccessFactors, custom HR systems',
        gapLabel: 'No unified talent data',
        blocked: 'Internal mobility, workforce planning',
        impact: '$2.8M/yr',
        impactNum: 2800000,
        sourceList: [
          'Workday HCM (Aerospace, Financial Services)',
          'SAP SuccessFactors (Health Sciences)',
          'Custom HR system (Energy)',
          'LinkedIn Recruiter (all divisions)',
        ],
        missingLayer:
          'Employee skills, performance data, and career paths are siloed by subsidiary. No visibility into cross-subsidiary talent availability or internal mobility opportunities.',
        blockedCapabilities: [
          'Cross-subsidiary internal mobility platform',
          'AI-powered succession planning',
          'Unified workforce analytics',
          'Skills gap analysis and L&D targeting',
        ],
        recommendedSolution:
          'Build a unified talent intelligence platform aggregating HR data from all subsidiaries. Deploy AI-driven skills matching for internal mobility. Estimated implementation: 10-14 weeks.',
      },
      {
        id: 3,
        name: 'Enterprise Risk Intelligence',
        sources: 'GRC systems, compliance databases, audit reports',
        gapLabel: 'No enterprise-wide risk view',
        blocked: 'Aggregated risk scoring, compliance automation',
        impact: '$3.4M/yr',
        impactNum: 3400000,
        sourceList: [
          'ServiceNow GRC (Aerospace, Financial Services)',
          'Custom compliance tracking (Energy)',
          'FDA/EMA regulatory databases (Health Sciences)',
          'Internal audit management system',
        ],
        missingLayer:
          'Risk and compliance data is managed independently by each subsidiary with different frameworks (ITAR, NERC, SOX, FDA). No aggregated enterprise risk view exists.',
        blockedCapabilities: [
          'Enterprise-wide risk heat map and scoring',
          'Automated regulatory change management',
          'Cross-subsidiary compliance benchmarking',
          'AI-powered audit planning and prioritization',
        ],
        recommendedSolution:
          'Deploy an enterprise GRC platform with automated data feeds from all subsidiary compliance systems. Build a unified risk taxonomy. Estimated implementation: 12-16 weeks.',
      },
      {
        id: 4,
        name: 'Shared Services Automation',
        sources: 'Procurement, IT, legal across subsidiaries',
        gapLabel: 'No shared services data layer',
        blocked: 'Procurement leverage, IT standardization',
        impact: '$5.6M/yr',
        impactNum: 5600000,
        sourceList: [
          'Coupa procurement (partial adoption)',
          'ServiceNow ITSM (Aerospace only)',
          'Legal matter management (3 separate systems)',
          'Vendor management spreadsheets',
        ],
        missingLayer:
          'Shared services (procurement, IT, legal) operate independently in each subsidiary. No visibility into aggregate spend, vendor overlap, or service utilization across the group.',
        blockedCapabilities: [
          'Consolidated vendor management and spend analysis',
          'Group-wide procurement leverage',
          'Standardized IT service catalog',
          'Legal matter deduplication and knowledge sharing',
        ],
        recommendedSolution:
          'Build a shared services data platform connecting procurement, ITSM, and legal systems across all subsidiaries. Deploy AI-driven spend analytics. Estimated implementation: 14-18 weeks.',
      },
    ],
    gapDivisionMap: {
      1: ['northbridge', 'nb-aerospace', 'nb-energy', 'nb-financial', 'nb-health'],
      2: ['northbridge', 'nb-aerospace', 'nb-energy', 'nb-financial', 'nb-health'],
      3: ['northbridge', 'nb-aerospace', 'nb-energy', 'nb-financial', 'nb-health'],
      4: ['northbridge', 'nb-aerospace', 'nb-energy', 'nb-financial', 'nb-health'],
    },
    statCards: [
      { label: '48 Systems Mapped', color: 'blue' },
      { label: '62 Active Connections', color: 'green' },
      { label: '34 Missing Connections', color: 'red' },
      { label: '$16.0M Annual Impact', color: 'red' },
    ],
    totalImpact: '$16.0M/year',
    divisionBadges: ['NB Aerospace', 'NB Energy', 'NB Financial Services', 'NB Health Sciences'],
    investment: '$1.2M',
    annualReturn: '$16.0M',
    roi: '13.3x Year 1',
  },

  /* ── Republic of Estonia — Digital Government ─────────────────────────── */
  estonia: {
    gaps: [
      {
        id: 1,
        name: 'Cross-Ministry Data Exchange',
        sources: 'X-Road partial, ministry databases',
        gapLabel: 'Incomplete cross-ministry data sharing',
        blocked: 'Proactive citizen services, policy modeling',
        impact: '$3.8M/yr',
        impactNum: 3800000,
        sourceList: [
          'X-Road data exchange layer (partial coverage)',
          'Ministry-specific databases (Finance, Social, Economic)',
          'Population registry',
          'Business registry',
        ],
        missingLayer:
          'While X-Road enables basic data exchange, many ministry datasets remain siloed. Complex cross-ministry queries require manual coordination and data sharing agreements.',
        blockedCapabilities: [
          'Proactive citizen service delivery',
          'Cross-ministry policy impact modeling',
          'Unified citizen journey analytics',
          'AI-driven policy recommendation engine',
        ],
        recommendedSolution:
          'Expand X-Road with a semantic data catalog and automated data sharing agreements. Deploy a cross-ministry analytics platform. Estimated implementation: 12-16 weeks.',
      },
      {
        id: 2,
        name: 'Citizen Identity Resolution',
        sources: 'e-ID system, service databases, portal logs',
        gapLabel: 'No unified citizen interaction history',
        blocked: 'Personalized services, predictive needs',
        impact: '$2.4M/yr',
        impactNum: 2400000,
        sourceList: [
          'e-ID / ID-card authentication logs',
          'eesti.ee portal service usage',
          'Ministry-level CRM systems',
          'Municipal service records',
        ],
        missingLayer:
          'Citizen interactions with government are logged in separate ministry systems. No unified view of a citizen\'s service history, pending cases, or anticipated needs.',
        blockedCapabilities: [
          'Personalized government service recommendations',
          'Predictive citizen needs anticipation',
          'Life event-triggered proactive services',
          'Unified case management across ministries',
        ],
        recommendedSolution:
          'Build a privacy-preserving citizen interaction graph linking e-ID authentication with service usage. Deploy proactive service recommendations. Estimated implementation: 10-14 weeks.',
      },
      {
        id: 3,
        name: 'AI Model Governance Framework',
        sources: 'Deployed AI models, training datasets, audit logs',
        gapLabel: 'No centralized AI governance',
        blocked: 'Responsible AI deployment, bias monitoring',
        impact: '$1.6M/yr',
        impactNum: 1600000,
        sourceList: [
          'Tax assessment AI models (Finance)',
          'Benefit eligibility models (Social Affairs)',
          'Business classification models (Economic Affairs)',
          'Threat detection models (RIA)',
        ],
        missingLayer:
          'AI models deployed across ministries lack centralized governance. No unified model registry, bias monitoring, or impact assessment framework exists.',
        blockedCapabilities: [
          'Centralized AI model registry and monitoring',
          'Automated bias detection and fairness auditing',
          'AI impact assessment workflow',
          'Model performance degradation alerts',
        ],
        recommendedSolution:
          'Deploy a national AI governance platform with model registry, bias monitoring, and automated impact assessments compliant with EU AI Act. Estimated implementation: 10-14 weeks.',
      },
      {
        id: 4,
        name: 'Cybersecurity Threat Intelligence',
        sources: 'CERT-EE, ministry SOCs, NATO feeds',
        gapLabel: 'No unified threat intelligence platform',
        blocked: 'Coordinated incident response, threat prediction',
        impact: '$2.2M/yr',
        impactNum: 2200000,
        sourceList: [
          'CERT-EE threat monitoring',
          'Ministry-level security operations centers',
          'NATO CCDCOE threat feeds',
          'EU ENISA advisory database',
        ],
        missingLayer:
          'Threat intelligence from multiple sources is not aggregated into a single platform. Coordinated response across ministries requires manual communication and escalation.',
        blockedCapabilities: [
          'Unified national threat intelligence dashboard',
          'Automated cross-ministry incident response',
          'Predictive threat modeling',
          'AI-powered vulnerability prioritization',
        ],
        recommendedSolution:
          'Build a national threat intelligence platform aggregating CERT-EE, SOC, and international feeds. Deploy AI-driven threat prediction. Estimated implementation: 12-16 weeks.',
      },
    ],
    gapDivisionMap: {
      1: ['estonia', 'ee-finance', 'ee-social', 'ee-economic', 'ee-ria'],
      2: ['estonia', 'ee-finance', 'ee-social', 'ee-economic'],
      3: ['estonia', 'ee-finance', 'ee-social', 'ee-economic', 'ee-ria'],
      4: ['estonia', 'ee-ria'],
    },
    statCards: [
      { label: '32 Systems Mapped', color: 'blue' },
      { label: '44 Active Connections', color: 'green' },
      { label: '22 Missing Connections', color: 'red' },
      { label: '$10.0M Annual Impact', color: 'red' },
    ],
    totalImpact: '$10.0M/year',
    divisionBadges: ['Ministry of Finance', 'Ministry of Social Affairs', 'Ministry of Economic Affairs', 'RIA — Cybersecurity'],
    investment: '$600K',
    annualReturn: '$10.0M',
    roi: '16.7x Year 1',
  },
  /* ── Federative Republic of Brazil — Digital Government ──────────────── */
  brazil: {
    gaps: [
      {
        id: 1,
        name: 'Cross-Ministry Data Integration',
        sources: 'GOV.BR portal, ministry databases, SERPRO infrastructure',
        gapLabel: 'Fragmented data across federal agencies',
        blocked: 'Unified citizen services, proactive governance',
        impact: '$12.4M/yr',
        impactNum: 12400000,
        sourceList: [
          'GOV.BR unified portal (partial coverage)',
          'Receita Federal tax systems (SPED, e-Social)',
          'SUS health records (DATASUS)',
          'BNDES development finance platform',
          'SERPRO federal data processing infrastructure',
        ],
        missingLayer:
          'While GOV.BR provides a unified portal, backend ministry systems remain siloed. Cross-agency queries require manual data sharing agreements and SERPRO intermediation.',
        blockedCapabilities: [
          'Proactive citizen service delivery across agencies',
          'Cross-ministry policy impact modeling',
          'Unified citizen journey analytics',
          'AI-driven fiscal and social policy recommendations',
        ],
        recommendedSolution:
          'Expand GOV.BR with a semantic data catalog and automated cross-agency data sharing. Deploy unified analytics platform on SERPRO infrastructure. Estimated implementation: 16-20 weeks.',
      },
      {
        id: 2,
        name: 'Citizen Identity Resolution',
        sources: 'CPF registry, GOV.BR accounts, service databases',
        gapLabel: 'No unified citizen interaction history',
        blocked: 'Personalized services, predictive needs',
        impact: '$8.6M/yr',
        impactNum: 8600000,
        sourceList: [
          'CPF (Cadastro de Pessoas Físicas) registry',
          'GOV.BR digital identity accounts',
          'Ministry-level CRM and case systems',
          'Municipal service records across 5,570 municipalities',
        ],
        missingLayer:
          'Citizen interactions with government are logged in separate ministry systems. No unified view of a citizen\'s service history, pending cases, or anticipated needs across federal, state, and municipal levels.',
        blockedCapabilities: [
          'Personalized government service recommendations',
          'Predictive citizen needs anticipation',
          'Life event-triggered proactive services',
          'Unified case management across ministries',
        ],
        recommendedSolution:
          'Build a privacy-preserving citizen interaction graph linking CPF/GOV.BR identity with service usage. Deploy proactive service recommendations. Estimated implementation: 14-18 weeks.',
      },
      {
        id: 3,
        name: 'AI Model Governance Framework',
        sources: 'Deployed AI models, training datasets, audit logs',
        gapLabel: 'No centralized AI governance across agencies',
        blocked: 'Responsible AI deployment, bias monitoring',
        impact: '$4.2M/yr',
        impactNum: 4200000,
        sourceList: [
          'Receita Federal tax assessment AI models',
          'SUS health triage and resource allocation models',
          'BNDES credit scoring and risk models',
          'SERPRO infrastructure monitoring models',
        ],
        missingLayer:
          'AI models deployed across agencies lack centralized governance. No unified model registry, bias monitoring, or impact assessment framework exists for Brazil\'s federal AI initiatives.',
        blockedCapabilities: [
          'Centralized AI model registry and monitoring',
          'Automated bias detection and fairness auditing',
          'AI impact assessment workflow',
          'Model performance degradation alerts',
        ],
        recommendedSolution:
          'Deploy a federal AI governance platform with model registry, automated bias detection, and impact assessment. Integrate with LGPD compliance framework. Estimated implementation: 12-16 weeks.',
      },
      {
        id: 4,
        name: 'Cybersecurity & Data Protection',
        sources: 'SERPRO SOC, agency security logs, LGPD compliance data',
        gapLabel: 'Distributed threat intelligence across agencies',
        blocked: 'Unified threat response, LGPD compliance automation',
        impact: '$5.8M/yr',
        impactNum: 5800000,
        sourceList: [
          'SERPRO Security Operations Center',
          'Agency-level security monitoring systems',
          'LGPD (Lei Geral de Proteção de Dados) compliance logs',
          'International threat intelligence feeds',
        ],
        missingLayer:
          'Security monitoring is distributed across agencies with limited cross-agency threat intelligence sharing. LGPD compliance tracking is manual and fragmented.',
        blockedCapabilities: [
          'Unified national threat intelligence dashboard',
          'Automated cross-agency incident response',
          'Predictive threat modeling',
          'Automated LGPD compliance monitoring',
        ],
        recommendedSolution:
          'Build a national threat intelligence platform aggregating SERPRO SOC, agency, and international feeds. Deploy AI-driven threat prediction and LGPD compliance automation. Estimated implementation: 14-18 weeks.',
      },
    ],
    gapDivisionMap: {
      1: ['brazil', 'br-receita', 'br-sus', 'br-bndes', 'br-serpro', 'br-inss', 'br-datasus', 'br-defesa', 'br-anatel'],
      2: ['brazil', 'br-receita', 'br-sus', 'br-bndes', 'br-inss', 'br-datasus'],
      3: ['brazil', 'br-receita', 'br-sus', 'br-bndes', 'br-serpro', 'br-inss', 'br-datasus', 'br-defesa', 'br-anatel'],
      4: ['brazil', 'br-serpro', 'br-defesa'],
    },
    statCards: [
      { label: '68 Systems Mapped', color: 'blue' },
      { label: '86 Active Connections', color: 'green' },
      { label: '42 Missing Connections', color: 'red' },
      { label: '$44.0M Annual Impact', color: 'red' },
    ],
    totalImpact: '$44.0M/year',
    divisionBadges: ['Receita Federal', 'SUS Health', 'BNDES Development', 'SERPRO Data Processing', 'INSS Social Security', 'DATASUS Health IT', 'Defense Cyber', 'ANATEL Telecom'],
    investment: '$1.8M',
    annualReturn: '$31.0M',
    roi: '17.2x Year 1',
  },
};

/* ── Resolve company gap data ────────────────────────────────────────────── */

function fmtImpact(n: number): string {
  if (n >= 1_000_000) {
    const m = n / 1_000_000;
    return `$${m.toFixed(1)}M/year`;
  }
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K/year`;
  return `$${n}/year`;
}

function resolveGapData(companyId: string): CompanyGapData {
  // Direct match — recompute totalImpact from gaps to ensure consistency
  if (gapDataByCompany[companyId]) {
    const data = gapDataByCompany[companyId];
    const sum = data.gaps.reduce((s, g) => s + g.impactNum, 0);
    return { ...data, totalImpact: fmtImpact(sum) };
  }

  // Child company mapping to parent
  const childToParent: Record<string, string> = {
    hcc: 'meridian', hrsi: 'meridian', hsi: 'meridian', hti: 'meridian',
    htsi: 'meridian',
    'nb-aerospace': 'northbridge', 'nb-energy': 'northbridge',
    'nb-financial': 'northbridge', 'nb-health': 'northbridge',
    'ee-finance': 'estonia', 'ee-social': 'estonia',
    'ee-economic': 'estonia', 'ee-ria': 'estonia',
    'br-receita': 'brazil', 'br-sus': 'brazil',
    'br-bndes': 'brazil', 'br-serpro': 'brazil',
    'br-inss': 'brazil', 'br-datasus': 'brazil',
    'br-defesa': 'brazil', 'br-anatel': 'brazil',
  };

  const parentId = childToParent[companyId];
  if (parentId && gapDataByCompany[parentId]) {
    const parentData = gapDataByCompany[parentId];
    // Filter to gaps relevant to this child
    const filtered = parentData.gaps.filter(g =>
      parentData.gapDivisionMap[g.id]?.includes(companyId)
    );
    const gaps = filtered.length > 0 ? filtered : parentData.gaps;
    const sum = gaps.reduce((s, g) => s + g.impactNum, 0);
    return {
      ...parentData,
      gaps,
      totalImpact: fmtImpact(sum),
    };
  }

  // Fallback
  const fallback = gapDataByCompany.meridian;
  const sum = fallback.gaps.reduce((s, g) => s + g.impactNum, 0);
  return { ...fallback, totalImpact: fmtImpact(sum) };
}

/* ── Shared UI constants ─────────────────────────────────────────────────── */

const colorMap = {
  blue: {
    bg: 'rgba(66,133,244,0.1)',
    border: 'rgba(66,133,244,0.3)',
    text: 'text-blue-400',
    icon: 'text-blue-400',
  },
  green: {
    bg: 'var(--cc-green-dim)',
    border: 'rgba(16,185,129,0.3)',
    text: 'text-emerald-400',
    icon: 'text-emerald-400',
  },
  red: {
    bg: 'var(--cc-red-dim)',
    border: 'rgba(239,68,68,0.3)',
    text: 'text-red-400',
    icon: 'text-red-400',
  },
};

const statIcons = [Server, Activity, AlertTriangle, BarChart3];

/* ── Component ───────────────────────────────────────────────────────────── */

export default function DataFlow() {
  const { company } = useCompany();
  const gapData = resolveGapData(company.id);
  const [expandedGap, setExpandedGap] = useState<number | null>(null);

  const toggle = (id: number) =>
    setExpandedGap((prev) => (prev === id ? null : id));

  // Company-specific proposed architecture
  const proposedArchitectures: Record<string, { title: string; subtitle: string }> = {
    meridian: { title: 'On-prem Databricks Lakehouse', subtitle: 'Unified on-premises lakehouse connecting all 18 ERP systems across operating companies' },
    northwood: { title: 'Cloud Data Fabric + Claims Intelligence Layer', subtitle: 'Cloud-native data fabric unifying claims, underwriting, and distribution data' },
    pinnacle: { title: 'FHIR-compliant Health Data Lakehouse', subtitle: 'Interoperable health data lakehouse with FHIR APIs for clinical and operational analytics' },
    atlas: { title: 'Industrial IoT Data Mesh', subtitle: 'Distributed data mesh connecting shop floor IoT, MES, and enterprise systems' },
    northbridge: { title: 'Cross-OpCo Analytics Platform', subtitle: 'Federated analytics platform spanning all 12 operating companies with unified governance' },
    brazil: { title: 'GOV.BR Interoperable Data Layer', subtitle: 'Federated government data layer with LGPD-compliant cross-agency interoperability' },
  };

  // Resolve architecture for child companies via parent
  const childToParentArch: Record<string, string> = {
    hcc: 'meridian', hrsi: 'meridian', hsi: 'meridian', hti: 'meridian', htsi: 'meridian',
    'nb-aerospace': 'northbridge', 'nb-energy': 'northbridge', 'nb-financial': 'northbridge', 'nb-health': 'northbridge',
    'br-receita': 'brazil', 'br-sus': 'brazil', 'br-bndes': 'brazil', 'br-serpro': 'brazil',
    'br-inss': 'brazil', 'br-datasus': 'brazil', 'br-defesa': 'brazil', 'br-anatel': 'brazil',
  };

  const archKey = proposedArchitectures[company.id] ? company.id : (childToParentArch[company.id] || 'meridian');
  const proposedArchitecture = proposedArchitectures[archKey] || proposedArchitectures.meridian;

  return (
    <div className="space-y-12 pb-16">
      <PreliminaryBanner />

      {/* ── Section 1: Header ─────────────────────────────────────────────── */}
      <div>
        <h1 className="text-2xl font-bold" style={{ color: 'var(--cc-text)' }}>
          Data Flow Intelligence
        </h1>
        <p className="mt-1" style={{ color: 'var(--cc-text-secondary)' }}>
          Automated detection of data connectivity gaps across your organization
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {gapData.statCards.map((card, i) => {
            const c = colorMap[card.color];
            const Icon = statIcons[i];
            return (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl p-5 shadow-sm"
                style={{ background: c.bg, border: `1px solid ${c.border}` }}
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
        <h2 className="text-lg font-semibold mb-4" style={{ color: 'var(--cc-text)' }}>
          Critical Data Gap Map
        </h2>

        <div className="space-y-3">
          {gapData.gaps.map((gap, i) => (
            <motion.div
              key={gap.id}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.07 }}
              className="rounded-2xl shadow-sm overflow-hidden" style={{ background: 'var(--cc-bg-card)', border: '1px solid var(--cc-border)' }}
            >
              {/* Mobile layout */}
              <div className="flex flex-col gap-3 px-5 py-4 sm:hidden">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 min-w-0 flex-1">
                    <Database className="h-4 w-4 shrink-0 text-blue-500" />
                    <span className="text-sm truncate" style={{ color: 'var(--cc-text)' }}>{gap.name}</span>
                  </div>
                  <span className="font-mono text-sm font-semibold text-red-600 shrink-0 ml-3">
                    {gap.impact}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <motion.div
                    className="h-2.5 w-2.5 rounded-full bg-red-500 shrink-0"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                  <span className="rounded-md border border-dashed border-red-800/40 px-2 py-0.5 text-[10px] font-semibold text-red-400 shrink-0" style={{ background: 'var(--cc-red-dim)' }}>
                    GAP
                  </span>
                  <span className="text-xs text-red-500 truncate">
                    {gap.gapLabel}
                  </span>
                </div>
                <div className="flex items-start gap-2 text-xs" style={{ color: 'var(--cc-text-secondary)' }}>
                  <Lock className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: 'var(--cc-text-tertiary)' }} />
                  <span>Blocked: {gap.blocked}</span>
                </div>
              </div>

              {/* Desktop layout */}
              <div className="hidden sm:grid grid-cols-12 items-center gap-4 px-5 py-4">
                {/* Source Systems */}
                <div className="col-span-3 flex items-start gap-2">
                  <Database className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                  <span className="text-sm" style={{ color: 'var(--cc-text)' }}>{gap.sources}</span>
                </div>

                {/* Gap Indicator */}
                <div className="col-span-3 flex items-center justify-center gap-2">
                  <motion.div
                    className="h-3 w-3 rounded-full bg-red-500"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                  <span className="rounded-md border border-dashed border-red-800/40 px-3 py-1 text-xs font-semibold text-red-400" style={{ background: 'var(--cc-red-dim)' }}>
                    GAP
                  </span>
                  <span className="text-xs text-red-500 max-w-[180px] truncate">
                    {gap.gapLabel}
                  </span>
                </div>

                {/* Blocked Capability */}
                <div className="col-span-4 flex items-start gap-2">
                  <Lock className="mt-0.5 h-4 w-4 shrink-0" style={{ color: 'var(--cc-text-tertiary)' }} />
                  <span className="text-sm" style={{ color: 'var(--cc-text-secondary)' }}>{gap.blocked}</span>
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
        <div className="mt-4 rounded-2xl px-6 py-4 text-center" style={{ background: 'var(--cc-bg-elevated)', border: '1px solid var(--cc-border)' }}>
          <span className="text-sm font-semibold" style={{ color: 'var(--cc-text-secondary)' }}>
            Total Quantified Data Gap Impact:{' '}
          </span>
          <span className="font-mono text-lg font-bold text-red-400">
            {gapData.totalImpact}
          </span>
        </div>
      </div>

      {/* ── Section 3: Expandable Gap Details ─────────────────────────────── */}
      <div>
        <h2 className="text-lg font-semibold mb-4" style={{ color: 'var(--cc-text)' }}>
          Gap Details
        </h2>

        <div className="space-y-3">
          {gapData.gaps.map((gap) => {
            const isOpen = expandedGap === gap.id;
            return (
              <div
                key={gap.id}
                className="rounded-2xl shadow-sm overflow-hidden" style={{ background: 'var(--cc-bg-card)', border: '1px solid var(--cc-border)' }}
              >
                {/* Collapsed Header */}
                <button
                  onClick={() => toggle(gap.id)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg" style={{ background: 'var(--cc-red-dim)' }}>
                      <AlertTriangle className="h-4 w-4 text-red-500" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold" style={{ color: 'var(--cc-text)' }}>
                        {gap.name}
                      </span>
                      <span className="ml-3 font-mono text-xs font-semibold text-red-500">
                        {gap.impact}
                      </span>
                    </div>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5" style={{ color: 'var(--cc-text-tertiary)' }} />
                  ) : (
                    <ChevronDown className="h-5 w-5" style={{ color: 'var(--cc-text-tertiary)' }} />
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
                      <div className="px-5 py-5 space-y-5" style={{ borderTop: '1px solid var(--cc-border)' }}>
                        {/* Source Systems */}
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--cc-text-tertiary)' }}>
                            Source Systems
                          </p>
                          <ul className="space-y-1">
                            {gap.sourceList.map((s, i) => (
                              <li
                                key={i}
                                className="flex items-center gap-2 text-sm"
                              >
                                <Database className="h-3.5 w-3.5 text-blue-400" />
                                {s}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Missing Data Layer */}
                        <div className="border-l-4 border-red-400 pl-4">
                          <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--cc-text-tertiary)' }}>
                            Missing Data Layer
                          </p>
                          <p className="text-sm" style={{ color: 'var(--cc-text)' }}>                            {gap.missingLayer}
                          </p>
                        </div>

                        {/* Blocked Capabilities */}
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--cc-text-tertiary)' }}>
                            Blocked Capabilities
                          </p>
                          <ul className="space-y-1">
                            {gap.blockedCapabilities.map((b, i) => (
                              <li
                                key={i}
                                className="flex items-center gap-2 text-sm"
                              >
                                <Lock className="h-3.5 w-3.5" style={{ color: 'var(--cc-text-tertiary)' }} />
                                {b}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Recommended Solution */}
                        <div className="border-l-4 border-green-400 pl-4">
                          <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--cc-text-tertiary)' }}>
                            Recommended Solution
                          </p>
                          <p className="text-sm" style={{ color: 'var(--cc-text)' }}>                            {gap.recommendedSolution}
                          </p>
                        </div>

                        {/* Impact Callout */}
                        <div className="rounded-xl px-4 py-3 flex items-center gap-3" style={{ background: 'var(--cc-red-dim)', border: '1px solid rgba(239,68,68,0.2)' }}>
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
        <h2 className="text-lg font-semibold mb-4" style={{ color: 'var(--cc-text)' }}>
          Proposed: {proposedArchitecture.title}
        </h2>

        <div className="rounded-2xl shadow-sm p-8" style={{ background: 'var(--cc-bg-card)', border: '1px solid var(--cc-border)' }}>
          {/* Division Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {gapData.divisionBadges.map(
              (name, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="rounded-xl px-4 py-2 text-sm font-medium text-green-400" style={{ background: 'var(--cc-green-dim)', border: '1px solid rgba(16,185,129,0.2)' }}
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
            className="mx-auto max-w-md rounded-2xl px-8 py-5 text-center shadow-lg"
            style={{ background: 'var(--cc-bg-elevated)', border: '1px solid var(--cc-border)' }}
          >
            <div className="flex items-center justify-center gap-3">
              <Layers className="h-6 w-6 text-green-400" />
              <span className="text-lg font-bold" style={{ color: 'var(--cc-text)' }}>
                {proposedArchitecture.title}
              </span>
            </div>
            <p className="mt-1 text-xs" style={{ color: 'var(--cc-text-secondary)' }}>
              {proposedArchitecture.subtitle}
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
                className="rounded-xl p-4 text-center" style={{ background: 'var(--cc-green-dim)', border: '1px solid rgba(16,185,129,0.15)' }}
              >
                <benefit.icon className="mx-auto h-6 w-6 text-green-600 mb-2" />
                <p className="text-sm font-semibold" style={{ color: 'var(--cc-text)' }}>
                  {benefit.title}
                </p>
                <p className="mt-1 text-xs" style={{ color: 'var(--cc-text-secondary)' }}>{benefit.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* ROI Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="mt-6 rounded-xl px-6 py-4 text-center" style={{ background: 'var(--cc-bg-input)', border: '1px solid var(--cc-border)' }}
          >
            <span className="text-sm" style={{ color: 'var(--cc-text-secondary)' }}>
              Investment:{' '}
              <span className="font-mono font-semibold" style={{ color: 'var(--cc-text)' }}>
                {gapData.investment}
              </span>{' '}
              &middot; Annual Return:{' '}
              <span className="font-mono font-semibold text-green-600">
                {gapData.annualReturn}
              </span>{' '}
              &middot; ROI:{' '}
              <span className="font-mono font-bold text-green-600">
                {gapData.roi}
              </span>
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
