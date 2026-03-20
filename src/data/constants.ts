// ─── Company Profile ────────────────────────────────────────────────────────

export const companyProfile = {
  name: 'Meridian Industrial Holdings',
  industry: 'Industrial Services (PE-backed)',
  employees: 1_850,
  revenue: '$340M',
  opCos: 4,
  opCoNames: ['Meridian Environmental Services', 'Cascade Logistics Group', 'Summit Equipment Solutions', 'Ridgeline Field Operations'],
  techSpend: '$8.2M/yr',
  aiReadinessScore: 34,
  holdingPeriod: '18 months into 5-year hold',
  ebitdaMargin: '14.2%',
  targetEbitdaMargin: '22%',
};

// ─── AI Readiness Breakdown ─────────────────────────────────────────────────

export const aiReadinessBreakdown = [
  { category: 'Data Infrastructure', score: 18, maxScore: 100, status: 'Critical Gap — no centralized data layer, 4 siloed ERP instances, zero API connectivity between OpCos' },
  { category: 'Process Maturity', score: 42, maxScore: 100, status: 'Below Average — 73% of workflows rely on manual handoffs, tribal knowledge, or Excel-based tracking' },
  { category: 'Tech Stack Modernity', score: 28, maxScore: 100, status: 'Legacy-Heavy — median software age 8.3 years, 61% of tools lack API endpoints, no cloud-native infrastructure' },
  { category: 'Change Readiness', score: 45, maxScore: 100, status: 'Moderate — executive sponsor committed, but middle management adoption risk identified in 2 of 4 OpCos' },
  { category: 'Skills & Training', score: 22, maxScore: 100, status: 'Critical Gap — zero internal ML/AI capability, IT team of 11 focused on break-fix, no data engineering function' },
];

// ─── KPI Data ───────────────────────────────────────────────────────────────

export const kpis = {
  totalSavings: 4_200_000,
  techScoreBefore: 34,
  techScoreAfter: 87,
  workflowsAnalyzed: 47,
  automationReady: 12,
  unusedLicenseWaste: 2_100_000,
  savingsSparkline: [0, 80_000, 180_000, 340_000, 520_000, 780_000, 1_100_000, 1_540_000, 2_020_000, 2_680_000, 3_400_000, 4_200_000],
  scoreSparkline: [34, 36, 39, 44, 50, 57, 63, 69, 74, 79, 83, 87],
  workflowSparkline: [0, 4, 9, 15, 21, 27, 32, 36, 39, 42, 45, 47],
  licenseSparkline: [2_100_000, 2_050_000, 1_940_000, 1_780_000, 1_580_000, 1_380_000, 1_180_000, 1_020_000, 920_000, 860_000, 830_000, 810_000],
  headcountImpactSparkline: [0, 0, -2, -4, -7, -11, -14, -18, -21, -24, -26, -28],
};

// ─── Roadmap Phases ─────────────────────────────────────────────────────────

export const roadmapPhases = [
  {
    quarter: 'Q1',
    title: 'Tech Stack Audit + Quick Wins',
    items: ['License audit & reclamation', 'Vendor assessment scoring', 'Quick-win automation ID'],
    status: 'active' as const,
    weekPlan: [
      { week: 1, task: 'Kickoff & stakeholder interviews across 4 OpCos', owner: 'Sarah Chen (Engagement Lead)' },
      { week: 2, task: 'Automated license usage pull via API + manual audit of non-API vendors', owner: 'Mike Torres (Tech Lead)' },
      { week: 3, task: 'Complete vendor scorecard — weight: cost, utilization, AI-readiness, integration capability', owner: 'Mike Torres (Tech Lead)' },
      { week: 4, task: 'Workflow discovery interviews — 47 processes mapped across all OpCos', owner: 'Sarah Chen (Engagement Lead)' },
      { week: 5, task: 'License reclamation wave 1: Microsoft 365 (340 seats) + Zoom (105 seats)', owner: 'Jason Park (DevOps)' },
      { week: 6, task: 'Quick-win automation scoring: rank 47 workflows by effort/impact matrix', owner: 'Sarah Chen (Engagement Lead)' },
      { week: 7, task: 'Salesforce seat reclamation (89 seats) + Adobe audit (33 seats)', owner: 'Jason Park (DevOps)' },
      { week: 8, task: 'Executive readout: license savings realized, automation roadmap presented', owner: 'Sarah Chen (Engagement Lead)' },
      { week: 9, task: 'Concur contract termination notice (60-day clause) + Ramp pilot kickoff', owner: 'Mike Torres (Tech Lead)' },
      { week: 10, task: 'Data infrastructure assessment: map all data flows, identify integration points', owner: 'Mike Torres (Tech Lead)' },
      { week: 11, task: 'RFP for Databricks vs Snowflake vs BigQuery — decision matrix built', owner: 'Mike Torres (Tech Lead)' },
      { week: 12, task: 'Q1 close: $1.2M in license savings confirmed, Q2 pilots scoped and resourced', owner: 'Sarah Chen (Engagement Lead)' },
    ],
  },
  {
    quarter: 'Q2',
    title: 'Workflow Automation Pilots',
    items: ['Claims intake automation', 'Call center AI deployment', 'Expense mgmt migration'],
    status: 'upcoming' as const,
    weekPlan: [
      { week: 13, task: 'Claims intake pilot: GPT-4V document extraction model training on 24mo historical data', owner: 'Priya Sharma (ML Engineering)' },
      { week: 14, task: 'Sierra AI agent configuration: call flow mapping for 23 Tier-1 scenarios', owner: 'Mike Torres (Tech Lead)' },
      { week: 15, task: 'Ramp onboarding wave 1: Meridian Environmental (52 users) + Cascade Logistics (48 users)', owner: 'Jason Park (DevOps)' },
      { week: 16, task: 'Claims model validation: target >94% extraction accuracy on structured fields', owner: 'Priya Sharma (ML Engineering)' },
      { week: 17, task: 'Sierra UAT: shadow-mode deployment handling 200 calls/day with human verification', owner: 'Mike Torres (Tech Lead)' },
      { week: 18, task: 'Ramp onboarding wave 2: Summit Equipment (61 users) + Ridgeline Field Ops (39 users)', owner: 'Jason Park (DevOps)' },
      { week: 19, task: 'Claims pilot go-live: 500 claims/week through AI pipeline with human-in-loop review', owner: 'Priya Sharma (ML Engineering)' },
      { week: 20, task: 'Sierra go-live: Tier-1 automation active, Tier-2+ escalation with AI context handoff', owner: 'Mike Torres (Tech Lead)' },
      { week: 21, task: 'Concur full decommission, Ramp 100% operational across all OpCos', owner: 'Jason Park (DevOps)' },
      { week: 22, task: 'Databricks data lake: initial schema design, OpCo data connector builds begin', owner: 'Mike Torres (Tech Lead)' },
      { week: 23, task: 'Pilot performance review: claims accuracy at 96.2%, call resolution at 73% automated', owner: 'Sarah Chen (Engagement Lead)' },
      { week: 24, task: 'Q2 close: 3 automation pilots live, Ramp migration complete, data lake foundation laid', owner: 'Sarah Chen (Engagement Lead)' },
    ],
  },
  {
    quarter: 'Q3',
    title: 'Scale Automation + Data Infrastructure',
    items: ['Expand automation to 18 workflows', 'Replace Salesforce → Day.ai', 'Databricks data lake build'],
    status: 'upcoming' as const,
    weekPlan: [
      { week: 25, task: 'Day.ai CRM migration planning: data mapping from Salesforce (85 users, 340K records)', owner: 'Mike Torres (Tech Lead)' },
      { week: 26, task: 'Databricks data lake: connect Meridian Environmental ERP + Cascade Logistics WMS', owner: 'Priya Sharma (ML Engineering)' },
      { week: 27, task: 'Scale claims automation to full volume (8,200/month), reduce human review to exceptions only', owner: 'Priya Sharma (ML Engineering)' },
      { week: 28, task: 'Day.ai pilot: 20 users from Cascade Logistics sales team, parallel run with Salesforce', owner: 'Mike Torres (Tech Lead)' },
      { week: 29, task: 'Databricks: connect Summit Equipment inventory system + Ridgeline Field Ops dispatch', owner: 'Priya Sharma (ML Engineering)' },
      { week: 30, task: 'Automation wave 2: AP/AR processing, PO matching, vendor onboarding (6 new workflows)', owner: 'Jason Park (DevOps)' },
      { week: 31, task: 'Day.ai full migration: all 85 users cutover, Salesforce data archive + decommission', owner: 'Mike Torres (Tech Lead)' },
      { week: 32, task: 'Cross-OpCo inventory visibility dashboard live: real-time unified view for parent entity', owner: 'Priya Sharma (ML Engineering)' },
      { week: 33, task: 'Automation wave 3: field service scheduling, equipment maintenance prediction, safety reporting', owner: 'Jason Park (DevOps)' },
      { week: 34, task: 'Tableau replacement: Palantir AIP pilot with executive team (12 users)', owner: 'Mike Torres (Tech Lead)' },
      { week: 35, task: 'Data quality audit: reconcile cross-OpCo data, resolve 847 entity mismatches', owner: 'Priya Sharma (ML Engineering)' },
      { week: 36, task: 'Q3 close: 18 workflows automated, Day.ai live, data lake operational with 4 OpCo feeds', owner: 'Sarah Chen (Engagement Lead)' },
    ],
  },
  {
    quarter: 'Q4',
    title: 'Full AI-Native Stack Deployment',
    items: ['Complete vendor migration', 'Cross-OpCo visibility live', 'AI-native stack operational'],
    status: 'upcoming' as const,
    weekPlan: [
      { week: 37, task: 'Palantir AIP full deployment: replace Tableau for all 40 users, custom ontology build', owner: 'Mike Torres (Tech Lead)' },
      { week: 38, task: 'Devin AI developer deployment: codebase migration tasks, test automation, CI/CD pipeline', owner: 'Jason Park (DevOps)' },
      { week: 39, task: 'Predictive analytics: equipment failure models trained on 36mo maintenance data', owner: 'Priya Sharma (ML Engineering)' },
      { week: 40, task: 'Working capital optimization: AI-recommended cross-OpCo equipment redeployments begin', owner: 'Sarah Chen (Engagement Lead)' },
      { week: 41, task: 'Automation wave 4: compliance reporting, environmental monitoring, fleet management', owner: 'Jason Park (DevOps)' },
      { week: 42, task: 'Full Salesforce decommission: contract termination, data retention compliance verified', owner: 'Mike Torres (Tech Lead)' },
      { week: 43, task: 'AI-native stack validation: all systems integrated, API health monitoring live', owner: 'Jason Park (DevOps)' },
      { week: 44, task: 'Knowledge transfer: internal IT team trained on new stack, runbooks complete', owner: 'Sarah Chen (Engagement Lead)' },
      { week: 45, task: 'Final ROI validation: actual vs projected savings reconciliation', owner: 'Sarah Chen (Engagement Lead)' },
      { week: 46, task: 'Board presentation preparation: transformation metrics, EBITDA impact, Year 2 roadmap', owner: 'Sarah Chen (Engagement Lead)' },
      { week: 47, task: 'Hypercare period begins: 30-day post-deployment monitoring and optimization', owner: 'Mike Torres (Tech Lead)' },
      { week: 48, task: 'Engagement close: AI-native stack operational, $4.2M Year 1 savings confirmed', owner: 'Sarah Chen (Engagement Lead)' },
    ],
  },
];

// ─── Top Opportunities ─────────────────────────────────────────────────────

export type OpportunityStatus = 'automated' | 'in-progress' | 'identified';

export interface Opportunity {
  name: string;
  category: string;
  savings: number;
  effort: 'Low' | 'Medium' | 'High';
  status: OpportunityStatus;
  priority: number;
  timeToValue: number;
  confidence: number;
}

export const topOpportunities: Opportunity[] = [
  { name: 'Unused License Reclamation', category: 'License Audit', savings: 1_200_000, effort: 'Low', status: 'in-progress', priority: 10, timeToValue: 3, confidence: 97 },
  { name: 'Cross-OpCo Inventory Visibility', category: 'Data Infrastructure', savings: 890_000, effort: 'High', status: 'identified', priority: 9, timeToValue: 20, confidence: 81 },
  { name: 'Call Center AI (Tier 1 Deflection)', category: 'Workflow Automation', savings: 580_000, effort: 'Medium', status: 'identified', priority: 9, timeToValue: 10, confidence: 88 },
  { name: 'Dev Workflow Automation (Devin)', category: 'Tech Stack', savings: 500_000, effort: 'Medium', status: 'identified', priority: 7, timeToValue: 8, confidence: 72 },
  { name: 'Claims Intake Automation (OCR + Classification)', category: 'Workflow Automation', savings: 420_000, effort: 'Medium', status: 'identified', priority: 8, timeToValue: 12, confidence: 84 },
  { name: 'AP/AR Automation (Invoice Matching)', category: 'Workflow Automation', savings: 310_000, effort: 'Medium', status: 'identified', priority: 6, timeToValue: 8, confidence: 90 },
  { name: 'Replace Salesforce → Day.ai', category: 'Tech Stack', savings: 280_000, effort: 'High', status: 'identified', priority: 7, timeToValue: 16, confidence: 76 },
  { name: 'Replace Concur → Ramp', category: 'Tech Stack', savings: 240_000, effort: 'Low', status: 'in-progress', priority: 8, timeToValue: 4, confidence: 95 },
  { name: 'Predictive Equipment Maintenance', category: 'Workflow Automation', savings: 680_000, effort: 'High', status: 'identified', priority: 8, timeToValue: 24, confidence: 68 },
  { name: 'Field Service Scheduling Optimization', category: 'Workflow Automation', savings: 220_000, effort: 'Medium', status: 'identified', priority: 5, timeToValue: 14, confidence: 74 },
];

// ─── Tech Stack Data ────────────────────────────────────────────────────────

export interface CurrentTool {
  name: string;
  category: string;
  annualCost: number;
  users: number;
  score: number;
  integrationComplexity: 'Low' | 'Medium' | 'High';
  migrationWeeks: number;
  riskLevel: 'Low' | 'Medium' | 'High';
  dependencies: string[];
}

export const currentStack: CurrentTool[] = [
  {
    name: 'SAP ERP',
    category: 'Finance & ERP',
    annualCost: 480_000,
    users: 120,
    score: 3,
    integrationComplexity: 'High',
    migrationWeeks: 24,
    riskLevel: 'High',
    dependencies: ['General ledger', 'AP/AR processing', 'Financial reporting', 'Tax compliance', 'Intercompany eliminations'],
  },
  {
    name: 'Salesforce CRM',
    category: 'CRM',
    annualCost: 380_000,
    users: 85,
    score: 4,
    integrationComplexity: 'Medium',
    migrationWeeks: 12,
    riskLevel: 'Medium',
    dependencies: ['Pipeline management', 'Customer master data', 'Quote-to-cash flow', 'Commission calculations'],
  },
  {
    name: 'No Data Lake',
    category: 'Data Infrastructure',
    annualCost: 0,
    users: 0,
    score: 1,
    integrationComplexity: 'High',
    migrationWeeks: 20,
    riskLevel: 'High',
    dependencies: ['Cross-OpCo reporting', 'AI/ML model training', 'Executive dashboards', 'Predictive analytics', 'Compliance reporting'],
  },
  {
    name: 'Tableau',
    category: 'Business Intelligence',
    annualCost: 250_000,
    users: 40,
    score: 5,
    integrationComplexity: 'Low',
    migrationWeeks: 8,
    riskLevel: 'Low',
    dependencies: ['Monthly board reporting', 'OpCo P&L dashboards', 'KPI tracking'],
  },
  {
    name: 'Manual Dev Workflows',
    category: 'Software Development',
    annualCost: 600_000,
    users: 4,
    score: 2,
    integrationComplexity: 'Medium',
    migrationWeeks: 6,
    riskLevel: 'Medium',
    dependencies: ['Internal tooling maintenance', 'Integration builds', 'Data migration scripts', 'CI/CD pipeline'],
  },
  {
    name: 'Concur',
    category: 'Expense Management',
    annualCost: 340_000,
    users: 200,
    score: 3,
    integrationComplexity: 'Low',
    migrationWeeks: 6,
    riskLevel: 'Low',
    dependencies: ['T&E policy enforcement', 'Receipt management', 'GL coding', 'Reimbursement processing'],
  },
];

export interface Recommendation {
  current: { name: string; cost: number; users: number; score: number; description: string };
  recommended: { name: string; cost: number; description: string };
  annualSavings: number;
}

export const recommendations: Recommendation[] = [
  {
    current: {
      name: 'SAP ERP (Finance)',
      cost: 480_000,
      users: 120,
      score: 3,
      description: 'On-premise SAP R/3 instance (v4.7) running on dedicated hardware at Meridian Environmental\'s data closet. 120 named users but SSO logs show only 68 unique logins/month. 347 custom ABAP objects making upgrades prohibitively expensive — last major patch was 2021. Average report generation: 4.2 minutes. No API layer exposed; all integrations rely on flat-file IDOC exports.',
    },
    recommended: {
      name: 'Ramp + Brex',
      cost: 140_000,
      description: 'Ramp\'s ML-based categorization engine processes receipts in <2s with 97% accuracy across 50M+ transactions in its training corpus. Auto-reconciliation eliminates month-end close delays — benchmarked clients reduce close cycle from 12 days to 4 days. Built-in spend controls enforce policy at point-of-sale, reducing out-of-policy expenses by 40%. Real-time GL sync via REST API (webhook-based) replaces nightly batch processing. Brex handles corporate card issuance with per-card spend limits and automated compliance holds. Combined platform eliminates 2 FTE-equivalents of month-end reconciliation labor.',
    },
    annualSavings: 340_000,
  },
  {
    current: {
      name: 'Salesforce CRM',
      cost: 380_000,
      users: 85,
      score: 4,
      description: 'Enterprise edition with 85 licenses at $4,471/seat/yr. Adoption audit shows 38% of users log in <2x/month. 12 custom objects, 89 custom fields, but only 4 reports actively used. No Salesforce-to-ERP integration — reps manually re-key orders into SAP (avg 8 min/order). Pipeline data is 34 days stale on average. Cascade Logistics sales team has abandoned CRM entirely and tracks deals in a shared Google Sheet.',
    },
    recommended: {
      name: 'Day.ai',
      cost: 100_000,
      description: 'Day.ai\'s relationship intelligence engine auto-captures every email, call, and meeting interaction via Gmail/Outlook API hooks — eliminating manual CRM entry entirely. NLP pipeline (transformer-based) extracts deal signals, next steps, sentiment, and risk indicators from conversation data with 91% accuracy on benchmarked datasets. Auto-generated contact timelines replace manual activity logging. For an 85-person org, expect 6.2 hrs/week/rep recovered from data entry. API-first architecture enables bidirectional ERP sync via webhooks — solving the integration gap that Salesforce implementation never addressed. Migration path: 340K records via bulk API export → Day.ai ingestion pipeline, estimated 72-hour migration window.',
    },
    annualSavings: 280_000,
  },
  {
    current: {
      name: 'No Data Lake',
      cost: 0,
      users: 0,
      score: 1,
      description: 'Zero centralized data infrastructure. Four OpCos running incompatible systems: SAP R/3 (Meridian Environmental), custom FileMaker WMS (Cascade Logistics), 47 Excel spreadsheets across 12 tabs each (Summit Equipment), and a Microsoft Access database last updated in 2019 (Ridgeline Field Ops). Cross-entity reporting requires manual data pulls taking 3-4 days/month. Board reporting is 45 days stale. No ability to train ML models on historical operational data — every AI initiative blocked by this gap.',
    },
    recommended: {
      name: 'Databricks',
      cost: 200_000,
      description: 'Databricks Lakehouse unifies all 4 OpCo data sources via Delta Lake with ACID transactions and schema enforcement. Unity Catalog provides cross-entity data governance — critical for PE reporting and audit requirements. MLflow integration enables model lifecycle management for claims automation and predictive maintenance use cases. Structured Streaming ingests real-time inventory and dispatch data. Estimated data footprint: 14TB initial load, 200GB/month incremental growth. Spark-based ETL replaces 23 manual Excel reconciliation processes currently consuming 6 FTE-days/month. The data lake is the prerequisite for 73% of the AI initiatives on this roadmap — without it, $3.1M in workflow automation savings cannot be realized.',
    },
    annualSavings: 1_200_000,
  },
  {
    current: {
      name: 'Tableau (Legacy BI)',
      cost: 250_000,
      users: 40,
      score: 5,
      description: 'Tableau Server on-premise with 40 Creator/Explorer licenses. Usage analytics reveal only 19 of 127 published dashboards are viewed weekly. Zero predictive capability — purely retrospective reporting. Average dashboard load time: 38 seconds due to direct SQL queries against production SAP instance (creating lock contention during business hours). No mobile access configured despite 40% field workforce. Each dashboard update requires a Tableau developer — 3-week backlog for new report requests.',
    },
    recommended: {
      name: 'Palantir AIP',
      cost: 70_000,
      description: 'Palantir AIP provides ontology-based analytics with native LLM integration — executives query data in natural language instead of navigating static dashboard hierarchies. Decision-grade data fusion across all OpCo sources via native Databricks connector (Delta Sharing protocol). Operational AI workflows enable queries like "show me all equipment idle >30 days across OpCos with transfer cost estimates and redeployment recommendations." Sub-2-second query response on pre-computed ontology objects. Mobile-first interface designed for field operations access. Self-service analytics eliminates the 3-week dashboard request backlog entirely.',
    },
    annualSavings: 180_000,
  },
  {
    current: {
      name: 'Manual Dev Workflows',
      cost: 600_000,
      users: 4,
      score: 2,
      description: '4 FTE developers (avg $150K loaded cost) spending 70% of time on: legacy ABAP maintenance for SAP customizations, one-off data migration scripts between OpCo systems, manual QA testing with zero automated test coverage (<15% coverage), and Excel macro debugging for finance team. No CI/CD pipeline — deployments are manual FTP uploads to the SAP server. Average time to ship internal feature request: 6-8 weeks. Backlog of 47 items, oldest request is 14 months old. All 4 developers are single points of failure with no documentation.',
    },
    recommended: {
      name: 'Cognition (Devin)',
      cost: 100_000,
      description: 'Devin AI handles approximately 60% of the existing dev backlog autonomously: data migration scripts (SAP IDOC → Databricks ETL), CRUD operations for internal tools, automated test generation (targeting 80% coverage from current 15%), and CI/CD pipeline construction (GitHub Actions). Measured performance on comparable enterprise codebases: 3.2x throughput on migration tasks, 94% accuracy on test generation. Frees 2.4 FTE-equivalents for strategic work — specifically the API integration builds required for the automation roadmap. Devin operates within existing GitHub repos with PR-based review workflow; human approval required for all production merges. Risk-mitigated: all AI-generated code goes through standard code review before deployment.',
    },
    annualSavings: 500_000,
  },
  {
    current: {
      name: 'Concur',
      cost: 340_000,
      users: 200,
      score: 3,
      description: 'SAP Concur Standard with 200 active users across 4 OpCos. Average expense report takes 22 minutes to create. Receipt matching is manual — employees photograph receipts then manually link to line items in the Concur UI. Approval chains average 3.4 levels and 6.8 days to final approval. Month-end reconciliation requires 2 FTEs for 4 full days. Policy violations caught post-facto in 31% of reports, creating rework loops. GL code selection from 847 options causes 22% miscoding rate requiring manual correction by finance.',
    },
    recommended: {
      name: 'Ramp',
      cost: 100_000,
      description: 'Ramp\'s ML categorization engine auto-classifies 97% of transactions at swipe using merchant-category mapping trained on 50M+ transactions. OCR pipeline extracts merchant, amount, and category from receipt photos in <2 seconds. Policy engine enforces spend limits at point-of-sale (pre-transaction), eliminating the 31% post-facto violation rate entirely. Auto-approval for in-policy transactions removes 3.4 approval levels — only exceptions route to human review. Real-time GL sync via webhook to SAP eliminates the 4-day month-end reconciliation process. Benchmarked impact: 22 min/report drops to <1 min (swipe and forget), 2 FTE reconciliation effort drops to zero, reimbursement cycle from 18 days to instant (corporate card).',
    },
    annualSavings: 240_000,
  },
];

// ─── Workflow Data ──────────────────────────────────────────────────────────

export type AutomationLevel = 'full' | 'human-in-loop' | 'human-required';

export interface Workflow {
  name: string;
  level: AutomationLevel;
  currentFTEs: number;
  currentCost: number;
  volume: string;
  currentTime: string;
  aiSolution: string;
  routing: string;
  routingQuote: string;
  costShift: string;
  savings: number;
  automationPercent: number;
  details: string;
  currentProcess: string[];
  bottlenecks: string[];
  aiArchitecture: string;
  implementationPlan: { phase: string; weeks: string; description: string }[];
  risks: string[];
  dependencies: string[];
}

export const workflows: Workflow[] = [
  {
    name: 'Insurance Claims Intake',
    level: 'human-in-loop',
    currentFTEs: 12,
    currentCost: 840_000,
    volume: '8,200 claims/month',
    currentTime: '45 min/claim',
    aiSolution: 'Auto-summarization + first-pass decision. AI reads claim, extracts key fields, flags anomalies, drafts initial determination. Human reviews AI output (5 min vs 45 min).',
    routing: 'Human-in-the-Loop',
    routingQuote: 'Add one verification step now to eliminate eight manual steps permanently',
    costShift: 'Labor $840K → IT $180K + Labor $240K = $420K saved',
    savings: 420_000,
    automationPercent: 65,
    details: '12 FTEs manually reviewing claims, keying data into system, average processing time 45 min/claim, 8,200 claims/month.',
    currentProcess: [
      'Agent receives claim via email, fax, or web portal — no unified intake channel (37% email, 28% fax, 35% portal)',
      'Manual data entry into ClaimsPro ERP: agent re-keys claimant info, policy number, incident details, ICD-10 codes (avg 12 min/claim)',
      'Cross-reference against policy database to verify coverage and deductible status (avg 8 min) — requires switching between 3 screens in ClaimsPro',
      'Flag for medical review if claim exceeds $5K threshold or contains specific ICD-10 codes (J44.1, M54.5, S72.0 series)',
      'Route to adjuster queue based on claim type: property, casualty, workers comp, or general liability — routing rules maintained in a shared Excel spreadsheet last updated 8 months ago',
      'Adjuster reviews claim file, identifies missing documentation, sends request letters via mail merge (avg 3.2 touchpoints per claim, 4.2-day turnaround per touchpoint)',
      'Final determination and payment authorization — requires supervisor approval for claims >$10K, VP approval for claims >$50K',
      'Agent manually updates state regulatory reporting system (separate from ClaimsPro) with final disposition — third data entry for same claim',
    ],
    bottlenecks: [
      'Triple data entry across ClaimsPro, Excel tracking spreadsheet, and state regulatory reporting system — each claim touched in 3 systems independently',
      '40% of claims require manual policy lookup due to ClaimsPro\'s inability to fuzzy-match policy numbers when agents transpose digits',
      'No OCR capability — all faxed documents (28% of intake volume, ~2,296 claims/month) processed via manual keystroke entry, error rate 4.7%',
      'Adjuster routing spreadsheet last updated 8 months ago — 23% of claims misrouted on first assignment, requiring manual re-queue adding 1.8 days avg delay',
      'Medical review bottleneck: 2 nurses reviewing 1,400 flagged claims/month, creating 11-day average backlog before adjuster can proceed',
      'No automated fraud detection — relies entirely on adjuster intuition; estimated 2.3% of claims are fraudulent but only 0.8% are caught',
    ],
    aiArchitecture: 'GPT-4V for multi-modal document extraction from fax images, scanned PDFs, and email attachments — fine-tuned on 24 months of Meridian claims data (196K labeled examples). Custom BERT-based classification model for claim routing trained on historical adjuster assignments with 94.3% accuracy on held-out test set. Anomaly detection ensemble (Isolation Forest + autoencoder) trained on 5 years of claims data flags statistical outliers for fraud review — expected to increase fraud detection from 0.8% to 2.1% of claims. Integration via ClaimsPro REST API (v3.2) for automated data population with bidirectional sync at 15-second polling intervals. Azure Cognitive Services for ICD-10 code extraction with medical ontology mapping. Claims above 92% model confidence auto-route; below threshold queues for human review with pre-populated determination and supporting evidence highlighted.',
    implementationPlan: [
      { phase: 'Data Preparation & Labeling', weeks: 'Weeks 1-3', description: 'Extract and label 24 months of historical claims data (196K records). Build training/validation/test splits (70/15/15). Clean and normalize ICD-10 codes against 2024 CMS codeset. Establish ground truth benchmarks for extraction accuracy.' },
      { phase: 'Model Development & Training', weeks: 'Weeks 4-8', description: 'Fine-tune GPT-4V on document extraction task. Train BERT classifier for routing on historical adjuster assignments. Train anomaly detection ensemble on historical fraud cases (confirmed and suspected). Target: >94% extraction accuracy, >91% routing accuracy, >85% fraud detection recall.' },
      { phase: 'Integration & Pipeline Build', weeks: 'Weeks 6-10', description: 'Build ClaimsPro REST API integration layer (read/write). Develop unified intake queue consolidating email (IMAP listener), fax (eFax API), and portal (existing webhook). Configure Azure Cognitive Services pipeline for ICD-10 extraction. Build human review interface with AI confidence scores and evidence highlighting.' },
      { phase: 'Shadow Mode Validation', weeks: 'Weeks 11-14', description: 'Run AI pipeline in parallel with human processors on live claims. Compare AI output vs human decisions on 2,000+ claims. Measure extraction accuracy, routing accuracy, and determination agreement rate. Retrain on edge cases. Target: <3% disagreement rate with human processors.' },
      { phase: 'Graduated Production Rollout', weeks: 'Weeks 15-18', description: 'Week 15: AI handles claims <$2K with human spot-check (20% sample). Week 16: expand to claims <$5K. Week 17: expand to all non-medical-review claims. Week 18: full deployment with human-in-loop for exception review and all claims >$50K. Monitor daily accuracy metrics and drift detection.' },
    ],
    risks: [
      'ClaimsPro API rate limits (current tier: 100 req/min) may throttle automated data population at peak volume — need to negotiate enterprise API tier with vendor (est. $12K/yr incremental)',
      'State regulatory requirements in IL, OH, and PA mandate human review of specific claim types (workers comp, environmental liability) — must build jurisdiction-aware exception routing',
      'Historical training data has survivorship bias — denied claims underrepresented in dataset, may need synthetic data augmentation or targeted labeling of denial cases',
      'Fax image quality varies significantly (resolution range: 100-300 DPI) — degraded scans may require fallback to manual processing (estimated 8-12% of fax volume)',
      'Union contract for claims processors (OPEIU Local 153) requires 90-day notice period for role changes — impacts headcount reduction timeline, earliest reductions in Week 31',
    ],
    dependencies: [
      'ClaimsPro API write access (currently read-only — vendor requires signed addendum and security audit, est. 3-week procurement cycle)',
      'Azure Cognitive Services subscription (Medical tier) — requires BAA execution for HIPAA compliance, legal review in progress',
      'Historical claims data export from ClaimsPro — IT estimates 2-week extraction window for 196K records with associated documents',
      'HR and union notification for FTE redeployment plan — 90-day notice required per collective bargaining agreement',
    ],
  },
  {
    name: 'Call Center / Customer Service',
    level: 'full',
    currentFTEs: 35,
    currentCost: 1_200_000,
    volume: '12,000 calls/month',
    currentTime: '40% annual agent churn',
    aiSolution: 'Deploy Parloa or Sierra for AI-native customer service. Tier 1 (password resets, status checks, FAQs) = 60% of volume, fully automated. Tier 2+ escalates to human agents with full AI context.',
    routing: 'Fully Automatable (Tier 1)',
    routingQuote: 'Stop hiring people to do work that AI should be doing',
    costShift: 'Labor $1.2M → IT $320K + Labor $300K = $580K saved',
    savings: 580_000,
    automationPercent: 60,
    details: '35 agents, 40% churn annually, $1.2M/yr in labor + recruiting costs. Knowledge walking out the door with every departure.',
    currentProcess: [
      'Customer calls main number, navigates 4-level IVR tree built on Avaya platform (avg 2.3 min in IVR before reaching agent queue)',
      'Hold queue: avg 4.2 min wait, peaks to 12 min on Monday mornings (8-11am) — 23% caller abandonment during peak',
      'Agent answers, verifies identity via 3-question security protocol (name, DOB, last 4 SSN) — avg 1.8 min, no SSO or biometric verification available',
      'Agent searches Confluence knowledge base (2,300 articles, last systematic audit 18 months ago — 34% of articles confirmed outdated)',
      'For Tier 1 issues (password resets, claim status, policy questions, appointment scheduling): agent follows scripted response, often reading verbatim from wiki article',
      'For Tier 2+ issues: agent attempts resolution, frequently escalates via warm transfer to specialist queue (avg 3.2 min additional hold time, context frequently lost in verbal handoff)',
      'Agent manually logs call notes in Salesforce CRM post-call (avg 2.4 min) — inconsistent formatting, 41% of notes lack resolution category tag',
      'QA team reviews 5% random sample of calls weekly — findings delivered to agents 3 weeks later, rarely actionable due to time lag',
    ],
    bottlenecks: [
      '40% annual turnover = 14 agents/year churning, at $8,200 recruiting + $4,100 training cost per replacement = $172K/yr in churn costs alone — not counting productivity ramp (6 weeks to proficiency)',
      '60% of call volume (7,200 calls/month) is Tier 1: password resets (22%), claim status checks (18%), policy FAQs (12%), appointment scheduling (8%) — requires zero judgment, pure script execution',
      'Knowledge base is 34% stale — agents frequently give incorrect information, driving 18% callback rate on "resolved" tickets',
      'No CRM integration with Avaya telephony — agents toggle between 4 applications per call (Avaya softphone, Salesforce, Confluence, ClaimsPro), adding 1.8 min to avg handle time',
      'Peak volume (Monday 8-11am) causes 12-min avg wait times with 23% caller abandonment — many call back later, inflating total volume by estimated 8-10%',
      'Post-call documentation (2.4 min avg) is pure overhead — 41% of notes are incomplete, making historical case review unreliable for Tier 2 escalations',
    ],
    aiArchitecture: 'Sierra conversational AI platform deployed as primary call handler with Deepgram Nova-2 for speech-to-text (word error rate <4% on domain-specific vocabulary after custom dictionary training). Intent classification model trained on 8 months of call transcripts (14,200 labeled conversations) covering 23 Tier-1 scenario types. Real-time RAG pipeline queries refreshed knowledge base (daily sync from Confluence API with automated staleness scoring). For Tier-1 resolution: Sierra executes actions via backend APIs — password reset (Active Directory API), claim status (ClaimsPro API), appointment scheduling (Google Calendar API). For Tier-2 escalation: AI generates structured handoff summary (customer identity, issue classification, steps attempted, recommended resolution path, sentiment score) — eliminating the verbal handoff context loss. Sentiment analysis model (fine-tuned RoBERTa, F1: 0.89) monitors conversation tone and auto-escalates to human if frustration detected. Post-call: AI auto-generates standardized CRM notes with resolution category, eliminating 2.4 min/call documentation overhead.',
    implementationPlan: [
      { phase: 'Call Analysis & Intent Mapping', weeks: 'Weeks 1-3', description: 'Transcribe and categorize 3 months of call recordings (36,000 calls). Map all call types to 23 Tier-1 + 14 Tier-2 intent categories. Define automation boundary. Build conversation flow diagrams. Identify API endpoints needed for each automatable action.' },
      { phase: 'Knowledge Base Remediation', weeks: 'Weeks 2-5', description: 'Full audit of 2,300 Confluence articles. Archive 780 confirmed obsolete. Update 340 stale articles with current information from SME interviews. Restructure remaining 1,180 articles for RAG retrieval (chunk sizing, metadata tagging). Build automated freshness monitoring with 30-day staleness alerts.' },
      { phase: 'Sierra Configuration & Integration', weeks: 'Weeks 4-9', description: 'Configure Sierra with Meridian-specific voice persona and domain vocabulary. Train intent classifier on labeled call data. Build conversation flows for 23 Tier-1 scenarios with fallback paths. Integrate: Deepgram (STT), Active Directory (password reset), ClaimsPro (status lookup), Google Calendar (scheduling), Salesforce (CRM logging). Build Avaya SIP trunk integration for call routing.' },
      { phase: 'Shadow Mode Deployment', weeks: 'Weeks 10-12', description: 'Sierra listens to live calls and generates recommended responses in real-time sidebar. Agents see AI suggestions but maintain full conversation control. Measure: AI would-have-been-correct rate across all intent categories. Target: >87% accuracy on Tier-1 scenarios, >92% on top-5 volume scenarios (password reset, status check, FAQ, scheduling, account update).' },
      { phase: 'Graduated Live Automation', weeks: 'Weeks 13-18', description: 'Week 13: Sierra handles password resets autonomously (22% of volume, lowest risk). Week 14: add status checks (18%). Week 15: add FAQ responses (12%). Week 16: add appointment scheduling (8%). Weeks 17-18: remaining Tier-1 scenarios. "Speak to agent" escape hatch available at any point with <10s transfer time. Monitor CSAT, resolution rate, and escalation rate at each expansion stage. Target: 60% full automation with no CSAT degradation.' },
    ],
    risks: [
      'Customer sentiment risk: industrial services clients (plant managers, field supervisors) may resist AI interaction — "speak to human" escape hatch must transfer in <10 seconds with full context preserved',
      'Deepgram accuracy may degrade on field worker calls with background noise (machinery, wind, radio chatter) and heavy industry jargon — budget 2 weeks for custom vocabulary fine-tuning',
      'Avaya PBX contract runs through Q3 2026 — early termination fee of $34K, or parallel operation with SIP trunk rerouting during transition period',
      'Agent workforce reduction requires careful change management — plan for voluntary attrition (natural 40% rate) + redeployment of remaining agents to Tier-2 specialist roles with higher compensation',
      'PCI compliance: if customers speak credit card numbers during calls, AI system must not store or log them — need real-time PCI redaction pipeline in Deepgram transcription layer',
    ],
    dependencies: [
      'Deepgram enterprise contract execution with custom vocabulary SLA (est. 2-week procurement, $48K/yr)',
      'Backend API endpoints operational for: password reset (Active Directory), claim status (ClaimsPro), appointment scheduling (Google Calendar) — 2 of 3 exist, AD integration needs build',
      'Avaya SIP trunk integration or replacement — current PBX is on-premise Avaya IP Office 500, SIP trunk capability confirmed but never configured',
      'Knowledge base remediation must reach >90% freshness score before Sierra go-live — currently at 66%',
      'HR-approved workforce transition plan for 21 affected agents — requires 60-day notice per employment agreements',
    ],
  },
  {
    name: 'Inventory Mgmt / Cross-OpCo Visibility',
    level: 'human-in-loop',
    currentFTEs: 8,
    currentCost: 1_400_000,
    volume: '4 operating companies',
    currentTime: 'No shared visibility',
    aiSolution: 'Set up Databricks data lake, connect all OpCo inventory systems. Parent entity gets real-time dashboard. Optimize working capital by redeploying idle equipment across OpCos.',
    routing: 'Human-in-the-Loop',
    routingQuote: 'You can\'t optimize what you can\'t see across your portfolio',
    costShift: 'Duplicate purchases $1.4M → Optimized $510K = $890K saved',
    savings: 890_000,
    automationPercent: 55,
    details: 'Parent company with 4 operating companies, no shared visibility. Each OpCo tracks inventory in different systems (Excel, legacy ERP).',
    currentProcess: [
      'Each OpCo maintains independent inventory system: Meridian Environmental (SAP MM module), Cascade Logistics (custom FileMaker WMS built by a contractor in 2017), Summit Equipment (47 Excel spreadsheets across 12 tabs each, maintained by 3 different people), Ridgeline Field Ops (MS Access database, last schema update 2019)',
      'Monthly inventory reconciliation: each OpCo controller manually exports data into a standardized Excel template designed by parent company FP&A (avg 6 hrs per OpCo per month — 24 FTE-hours/month total)',
      'Parent company FP&A analyst consolidates 4 Excel files into master workbook — manual copy-paste with VLOOKUP-based validation (avg 2 full days/month, frequently breaks when OpCos change column ordering)',
      'Equipment utilization tracked informally: OpCo managers email or call each other when they need specific equipment, no centralized availability view or search capability',
      'Capital expenditure requests reviewed in isolation by each OpCo GM — no cross-OpCo check for available idle equipment before approving new purchase or rental',
      'Quarterly physical inventory counts at each OpCo location: 2-day process per site requiring 3-4 FTEs pulled from operations, creating productivity loss during counts',
      'Discrepancies between physical count and system records average 8.3% by value — root cause analysis rarely completed due to time constraints, discrepancies simply adjusted in the books',
      'Annual insurance renewal requires consolidated equipment list — last year this took 3 weeks to compile and contained an estimated $620K in untracked or mis-valued assets',
    ],
    bottlenecks: [
      'Four incompatible data formats with zero automated translation: SAP IDOC (XML-based), FileMaker XML export (custom schema), Excel XLSX (inconsistent column naming across 47 files), and Access MDB (proprietary binary format requiring ODBC driver)',
      'No real-time visibility: parent entity sees inventory data that is 30-45 days stale at best — capital allocation decisions made on outdated information, estimated $400K/yr in suboptimal purchasing decisions',
      '$1.4M in confirmed duplicate equipment purchases over last 18 months: 3 identical CAT 320F excavators ($180K each) across OpCos, 12 portable generators ($8K each) already owned elsewhere, 4 sets of environmental testing equipment ($45K each) sitting idle at Meridian while Ridgeline rented the same gear',
      'No equipment depreciation tracking at parent level — Meridian uses straight-line, Cascade uses declining balance, Summit doesn\'t track depreciation at all, Ridgeline uses tax depreciation — audit risk flagged by external auditors in last engagement',
      'Physical count discrepancies (8.3% avg by value) suggest systemic data integrity issues — the $620K in untracked asset value identified during insurance renewal is likely understated',
      'Entity resolution is manual and unreliable: same equipment appears as "CAT 320 Excavator" at Meridian, "Caterpillar 320F" at Cascade, "320F Hyd. Exc." at Summit — no master equipment catalog',
    ],
    aiArchitecture: 'Databricks Lakehouse with Delta Lake providing ACID-compliant unified inventory schema across all 4 OpCos. Four custom data connectors: (1) SAP RFC connector for Meridian Environmental via SAP PI middleware (real-time change data capture), (2) FileMaker ODBC bridge for Cascade Logistics with 15-minute polling interval, (3) Excel watcher service for Summit Equipment using OneDrive API with file-level change detection (requires migrating files from local drives to OneDrive first), (4) Access ODBC connector for Ridgeline with hourly batch extraction. Entity resolution model (fine-tuned Sentence-BERT on equipment descriptions) matches same physical assets across OpCos despite inconsistent naming conventions — trained on 400 manually labeled equipment pairs, targeting >96% match accuracy. ML-based demand forecasting (Prophet + XGBoost ensemble) predicts equipment utilization by OpCo and generates cross-entity redeployment recommendations with transfer cost calculations. Palantir AIP provides natural-language query layer for executives: "Which OpCo has idle excavators within 50 miles of the Summit job site in Columbus?"',
    implementationPlan: [
      { phase: 'Data Source Assessment & Schema Design', weeks: 'Weeks 1-4', description: 'Map all data sources, schemas, and update frequencies across 4 OpCos. Document all 847 known entity mismatches. Define unified equipment schema covering: asset ID, category (3-level taxonomy), location (GPS where available), utilization status, depreciation method + accumulated depreciation, maintenance history, and insurance valuation. Get sign-off from all 4 OpCo controllers on schema.' },
      { phase: 'Connector Development & Data Ingestion', weeks: 'Weeks 5-10', description: 'Build and test 4 data connectors in priority order: SAP RFC (weeks 5-6, highest data quality), FileMaker ODBC (weeks 6-7), Excel watcher after OneDrive migration (weeks 7-9, requires Summit cooperation), Access ODBC (weeks 8-9). Integration testing and data quality validation (week 10). Target: <2% data loss on initial sync, <5-minute latency for SAP/FileMaker, <1-hour for Excel/Access.' },
      { phase: 'Entity Resolution & Data Quality', weeks: 'Weeks 9-13', description: 'Label 400 equipment match pairs for entity resolution model training. Train fine-tuned Sentence-BERT model. Run entity resolution across full dataset — resolve 847 known mismatches + discover additional duplicates (estimated 200-300 more). Build automated matching pipeline for ongoing data ingestion. Manual review of low-confidence matches (<85%). Target: >96% match accuracy on labeled test set.' },
      { phase: 'Analytics Dashboard & Forecasting', weeks: 'Weeks 11-16', description: 'Build parent-level inventory dashboard in Palantir AIP showing: real-time equipment locations, utilization rates, idle asset alerts (>30 days), duplicate purchase warnings, and depreciation summaries. Train demand forecasting models on 36 months of historical utilization data. Build cross-OpCo equipment request workflow with automated transfer cost calculation.' },
      { phase: 'Operational Rollout & Change Management', weeks: 'Weeks 17-20', description: 'Deploy to parent FP&A team (week 17). Expand to OpCo controllers for reconciliation replacement — eliminate monthly Excel consolidation process (week 18). Implement mandatory cross-OpCo availability check before any CapEx request >$10K (week 19). Executive workshop on natural-language analytics (week 20). Measure: duplicate purchase rate, equipment utilization improvement, time-to-report.' },
    ],
    risks: [
      'Summit Equipment\'s Excel-based system has no audit trail and no data validation — historical data may be unreliable for model training; plan for 2-week manual data cleansing effort',
      'Ridgeline\'s Access database has known corruption issues (3 incidents in past 12 months) — may require full data reconstruction from last physical count records before ingestion',
      'OpCo controller resistance to centralized visibility — Cascade Logistics GM has historically resisted parent oversight; executive mandate from PE sponsor required before project kickoff',
      'SAP PI middleware at Meridian Environmental reaches end-of-support in Q4 2026 — may need interim RFC connector solution or accelerated migration to SAP Integration Suite',
      'Entity resolution model requires 40+ hours of manual labeling for initial training set — need to identify domain expert at each OpCo willing to participate in labeling workshops',
      'OneDrive migration for Summit Equipment files requires change management with 3 people who have maintained those spreadsheets for 4+ years — high resistance risk',
    ],
    dependencies: [
      'Databricks workspace provisioned on Azure (Meridian\'s existing cloud tenant — avoids new vendor security review)',
      'SAP PI access credentials and RFC function module documentation from Meridian Environmental IT (single IT admin, frequently backlogged)',
      'FileMaker Server admin access at Cascade Logistics — currently held by original contractor who built the system in 2017 (contractor relationship status: unclear)',
      'Summit Equipment agreement to migrate 47 Excel files from local drives to OneDrive — requires buy-in from 3 individual spreadsheet owners',
      'Executive mandate from PE sponsor for cross-OpCo equipment sharing policy — requires board-level approval at next quarterly meeting',
      'Physical inventory count at all 4 sites to establish baseline (recommended before data ingestion to validate system-of-record accuracy)',
    ],
  },
  {
    name: 'Expense Reporting',
    level: 'full',
    currentFTEs: 0,
    currentCost: 520_000,
    volume: '200 employees submitting',
    currentTime: '2 hrs/month per employee',
    aiSolution: 'Switch to Ramp: AI auto-categorizes, auto-matches receipts, auto-approves within policy. Employees snap a photo, Ramp does the rest.',
    routing: 'Fully Automatable',
    routingQuote: 'Nobody should spend two hours a month on expense reports in 2026',
    costShift: 'Concur $340K + Labor $180K → Ramp $100K + Labor $0 = $240K saved',
    savings: 240_000,
    automationPercent: 90,
    details: 'Currently using Concur, 200 employees submitting expenses. Average 2 hours/month per employee on expense reports = 4,800 hrs/yr wasted.',
    currentProcess: [
      'Employee incurs business expense — pays with personal credit card or shared Amex corporate card (no per-employee card, shared card number passed around via email)',
      'Receipts accumulate: physical receipts in wallets, digital receipts in various email inboxes — no centralized capture at point of transaction',
      'End of month: employee opens Concur, manually creates expense report header (project code, cost center, business purpose narrative)',
      'For each line item: manually enter date, vendor name, amount, select GL code from dropdown (847 options with non-intuitive naming like "6140-Travel-Domestic-Air-Coach"), attach receipt photo, write business justification',
      'Submit report — enters 3-4 level approval chain: direct manager (1-2 days) → department head (1-2 days) → finance controller (1 day) → VP sign-off if total >$2,500 (1-3 days)',
      'Finance team reviews approved reports for policy compliance: per-diem rates, receipt requirements, restricted vendor list — 15% rejection rate requiring resubmission',
      'Month-end: 2 FTEs spend 4 full days reconciling approved Concur reports against Amex corporate card statement — manual line-by-line matching in Excel',
      'Reimbursement processed via AP batch run (bi-monthly) — employees wait avg 18 days from submission to funds in bank account',
    ],
    bottlenecks: [
      '4,800 employee-hours/year spent on expense report creation (200 employees x 2 hrs/month x 12 months) — equivalent to 2.3 FTEs of productive time destroyed on administrative work',
      '847 GL code options with non-intuitive naming creates selection paralysis and errors — 22% of submitted reports have at least one miscoded line item, each requiring manual correction by finance (avg 15 min per correction)',
      'Shared corporate card (single Amex number used by 40+ travelers) makes reconciliation nearly impossible — finance cannot match transactions to individuals without cross-referencing travel calendars',
      '15% rejection rate creates rework loops: avg 2.1 additional touchpoints per rejected report, extending total cycle time to 28 days for rejected submissions',
      'No real-time spend visibility — finance discovers budget overruns 30-45 days after spend occurs, well past the point where corrective action is possible',
      '18-day reimbursement cycle creates genuine employee dissatisfaction — cited as top-3 complaint in 2 of last 4 employee engagement surveys, contributing to overall 22% voluntary turnover',
    ],
    aiArchitecture: 'Ramp corporate cards issued per-employee (200 physical + 200 virtual cards) replace shared Amex + personal card reimbursement model entirely. Transaction data captured at point-of-sale with: merchant name, MCC code, amount, timestamp, and GPS location (mobile swipe). Ramp ML engine auto-categorizes to GL code with 97% accuracy using merchant-category mapping model trained on 50M+ transactions across Ramp\'s customer base — custom fine-tuning on Meridian\'s historical GL mappings during onboarding (1-week process). OCR pipeline processes receipt photos in <2 seconds via mobile app notification at time of swipe. Policy engine evaluates each transaction against Meridian-specific rules (per-transaction limits by role, category restrictions, weekend/holiday flags, restricted vendor blacklist) in real-time at point-of-sale — violations blocked pre-transaction rather than caught post-facto. Auto-approval for all in-policy transactions eliminates 3-4 level approval chain. Webhook-based real-time sync to SAP GL journal entries via Ramp Connect API — eliminates month-end reconciliation entirely.',
    implementationPlan: [
      { phase: 'Configuration & Policy Migration', weeks: 'Weeks 1-2', description: 'Map Concur expense categories to Ramp GL code rules. Configure spend policies: per-employee limits by role/level, category restrictions, auto-approval thresholds. Set up Ramp Connect webhook to SAP GL. Define exception routing: who reviews flagged transactions, escalation paths for >$2,500 expenses.' },
      { phase: 'Card Issuance & Employee Onboarding', weeks: 'Weeks 3-4', description: 'Issue 200 physical Ramp cards + 200 virtual cards. Cancel shared Amex corporate card. Run 4 onboarding sessions (one per OpCo, 30 min each): install mobile app, link bank accounts for reimbursement of pre-Ramp expenses, demo receipt photo workflow. Distribute quick-reference card with GL code lookup removed (AI handles it).' },
      { phase: 'Parallel Run & Validation', weeks: 'Weeks 5-6', description: 'Run Ramp alongside Concur for one complete expense cycle. All transactions flow through Ramp; finance team compares auto-categorization accuracy against manual Concur coding. Resolve GL mapping discrepancies (expect 3-5% of categories need adjustment based on similar migrations). Validate SAP webhook delivers clean journal entries.' },
      { phase: 'Cutover & Concur Decommission', weeks: 'Weeks 7-8', description: 'Disable Concur access for all users. Process final legacy expense reports submitted before cutover. Archive 3 years of Concur historical data per audit retention policy. Execute Concur contract termination (60-day notice already filed in Q1 Week 9). Confirm Amex card cancellation with treasury.' },
    ],
    risks: [
      'Employee resistance to corporate card model — some field workers at Ridgeline prefer personal card airline miles (mitigate: communicate Ramp 1.5% cashback program, which exceeds typical personal card rewards on business spend)',
      'SAP GL integration: Ramp Connect API may not support SAP\'s BAPI/RFC format natively — may need lightweight middleware (est. 1-week development effort by internal dev team)',
      'Concur historical data export: 3 years of expense records (est. 28,000 reports) need archival in queryable format per audit retention requirements — Concur data export is CSV only, need ETL into Databricks for long-term access',
      'International travel: Cascade Logistics has LATAM operations (Mexico, Colombia) — Ramp multi-currency support and local merchant acceptance needs validation before rollout to those 12 employees',
    ],
    dependencies: [
      'Concur contract 60-day termination notice filed (initiated Q1 Week 9)',
      'Shared Amex corporate card cancellation coordinated with treasury department — need to clear all outstanding charges first',
      'SAP GL chart of accounts export from finance controller (847 codes with descriptions and cost center mappings)',
      'HR-approved employee communication plan — timing coordinated with OpCo town halls',
      'Bank account details from all 200 employees for Ramp reimbursement setup (pre-Ramp legacy expense settlement)',
    ],
  },
  {
    name: 'Research & Analysis',
    level: 'human-required',
    currentFTEs: 6,
    currentCost: 720_000,
    volume: '~40 reports/quarter',
    currentTime: '2-3 weeks per report',
    aiSolution: 'AI assists with data gathering, summarization, first-draft reports. Analysts focus on insight generation and strategic recommendations. Report cycle drops from 2-3 weeks to 3-5 days.',
    routing: 'Human-Required, AI-Assisted',
    routingQuote: 'Let AI do the research so your analysts can do the thinking',
    costShift: 'Labor $720K → IT $80K + Labor $300K = $340K saved',
    savings: 340_000,
    automationPercent: 35,
    details: 'Team of 6 analysts producing market research, competitive analysis. $2M/yr in EBITDA impact from slow, outdated research cycles.',
    currentProcess: [
      'Engagement partner or OpCo GM submits research request via email (no standardized intake form — scope ambiguity is common, requiring 1-2 clarification rounds)',
      'Analyst manually searches 8-12 data sources: IBISWorld, S&P Capital IQ, Bloomberg Terminal, SEC EDGAR, Bureau of Labor Statistics, industry trade publications, Google Scholar, and internal SharePoint',
      'Data extraction: analyst copies relevant data points from each source into Excel workbook, manually builds comparison tables and trend analyses (avg 3 days per report)',
      'Competitive analysis: analyst reads 15-30 competitor filings, press releases, and earnings call transcripts, manually summarizes positioning, financials, and strategic moves',
      'First draft written in PowerPoint: 12-25 slides with charts manually built in Excel and screenshot-pasted into slides (avg 4 days per report, significant formatting overhead)',
      'Internal review: draft → senior analyst (2 days) → director feedback (2 days) → revisions (1 day). 60% of feedback is formatting/consistency corrections, not substantive analytical input',
      'Final version delivered via email attachment — no version control, no collaborative workspace, no ability to update findings as new data emerges',
      'Research findings siloed: completed reports stored on individual analyst laptops and a poorly organized SharePoint folder — similar questions re-researched from scratch 34% of the time',
    ],
    bottlenecks: [
      'Data gathering phase (3 days avg per report, 120 days/yr across team) is 90% mechanical: navigating source UIs, copying data, reformatting — zero analytical judgment required',
      'No automated data pipeline from any subscribed source — analysts manually log into each platform, run searches, copy results into Excel. $180K/yr in subscription costs with no API utilization',
      '34% of recent reports covered topics already partially addressed in prior deliverables — no institutional knowledge search, no report reuse system, no way to build on previous work',
      'Review cycle adds 5 days per report, but 60% of reviewer comments are formatting corrections (chart style inconsistency, font sizes, slide layout) — not analytical substance',
      'Reports are stale on delivery: 2-3 week cycle means market data is already outdated. 3 reports in last quarter were superseded by market events before delivery',
      'Senior analyst reviewer is single bottleneck: 1 person reviewing all 40 quarterly reports — 2.5 week backlog in busy periods, creating cascading delays across the team',
    ],
    aiArchitecture: 'Custom RAG pipeline built on Databricks with LangChain orchestration layer. Document ingestion from 8 primary sources via APIs: Capital IQ (REST API, $18K/yr for programmatic access), Bloomberg Terminal API ($6K/yr addon), SEC EDGAR (free XBRL feed), IBISWorld (API tier upgrade, $4K/yr), BLS (free public API), plus web scraping with Firecrawl for trade publications. Vector store (Pinecone, est. 50M vectors at scale) indexes all 340+ historical Meridian research deliverables for institutional knowledge reuse — enables queries like "What did we find about the environmental services competitive landscape in the Q2 2025 report?" GPT-4 Turbo generates first-draft report sections from structured prompts with inline source citations and confidence scores. Custom fine-tuned summarization model (Llama 3 70B, 4-bit quantized, hosted on Databricks) purpose-built for earnings call and regulatory filing analysis — trained on 2,400 analyst-written summaries from Meridian\'s historical output. Automated chart generation via Plotly from structured data with Meridian brand styling applied programmatically. Human analysts focus exclusively on: validating AI-gathered data, generating novel insights, developing strategic recommendations, and client-specific framing.',
    implementationPlan: [
      { phase: 'Knowledge Base & Source Integration', weeks: 'Weeks 1-5', description: 'Collect and digitize all 340+ historical research deliverables from analyst laptops and SharePoint (est. 2 weeks of collection effort). Ingest into Pinecone vector store with metadata tagging (report type, industry, date, analyst, OpCo). Configure API connectors to 8 data sources. Build automated data refresh schedules. Validate retrieval accuracy on 50 test queries against known report content.' },
      { phase: 'AI Pipeline Development', weeks: 'Weeks 6-11', description: 'Build LangChain RAG pipeline for automated data gathering and first-draft generation. Fine-tune Llama 3 70B on 2,400 historical analyst summaries (4 weeks training data prep + 2 weeks fine-tuning + evaluation). Develop automated chart generation with Meridian brand templates. Build review workflow showing AI confidence scores and source provenance for each claim in generated drafts. Implement hallucination detection: cross-reference AI-generated statistics against source documents with automated flagging of unsupported claims.' },
      { phase: 'Analyst Training & Parallel Run', weeks: 'Weeks 12-15', description: 'Train 6 analysts on AI-assisted research workflow (2-day workshop). Redefine role expectations: shift from data gathering/formatting to insight generation and strategic framing. Run 10 reports through new AI-assisted workflow in parallel with traditional process. Measure: cycle time reduction, data accuracy, analyst satisfaction, report quality scores from requestors. Target: 60% reduction in cycle time with equal or better quality ratings.' },
      { phase: 'Full Deployment & Optimization', weeks: 'Weeks 16-20', description: 'Transition all new report requests to AI-assisted workflow. Establish ongoing quality benchmarks. Build automated freshness monitoring for knowledge base (flag reports >6 months old for review/archive). Implement feedback loop: analyst corrections to AI drafts fed back as training signal for model improvement. Reallocate 2 of 6 analysts to higher-value strategic advisory work (freed capacity from eliminated data gathering/formatting labor).' },
    ],
    risks: [
      'Data source API access costs: Capital IQ programmatic API ($18K/yr), Bloomberg Terminal API addon ($6K/yr), IBISWorld API tier ($4K/yr) = $28K/yr incremental subscription cost — needs budget approval from CFO',
      'Analyst resistance to AI-generated first drafts — 2 senior analysts have expressed concern about "being replaced by a bot." Requires careful positioning as augmentation (insight work) not replacement (data work)',
      'LLM hallucination risk on financial data is non-trivial: must build verification layer that cross-references every numerical claim in AI-generated drafts against source documents before human review',
      'Client/requestor perception: need clear disclosure framework distinguishing AI-assisted data gathering from human-authored strategic analysis — PE sponsor has asked for transparency policy',
      'Fine-tuned Llama 3 summarization model requires 6-8 weeks of training data preparation (labeling, cleaning, format standardization) before model development can begin — long lead time item',
      'Historical report archive is scattered: 40% on analyst laptops (3 analysts have left the company — need to recover files from IT storage), 60% on SharePoint in inconsistent folder structures',
    ],
    dependencies: [
      'Databricks workspace (shared with inventory analytics workload — needs resource isolation configured to prevent compute contention)',
      'API subscription upgrades: Capital IQ programmatic tier ($18K/yr), Bloomberg Terminal API addon ($6K/yr), IBISWorld API access ($4K/yr)',
      'Pinecone vector database provisioned on dedicated tier (est. 50M vectors at steady state, ~$2K/month)',
      'Historical research deliverable archive: 340+ reports need to be collected from analyst laptops (3 current, 3 former employees), SharePoint, and email attachments — est. 2 weeks of collection and organization effort',
      'Analyst team buy-in: need all 6 analysts to participate in 2-day training workshop and commit to 4-week parallel process evaluation',
    ],
  },
  {
    name: 'IT License Management',
    level: 'full',
    currentFTEs: 2,
    currentCost: 2_100_000,
    volume: '$2.1M in annual licenses',
    currentTime: 'No active monitoring',
    aiSolution: 'AI continuously monitors usage across all SaaS tools, flags inactive licenses for reclamation, auto-downgrades unused seats, and alerts on duplicate subscriptions.',
    routing: 'Fully Automatable',
    routingQuote: 'Every company is paying for software nobody uses — the question is how much',
    costShift: 'License waste $2.1M → Optimized $900K = $1.2M saved',
    savings: 1_200_000,
    automationPercent: 85,
    details: '$2.1M in annual software licenses. Audit reveals: 340 unused Microsoft licenses, 89 unused Salesforce licenses, various zombie subscriptions.',
    currentProcess: [
      'New employee onboarding: HR sends email to IT helpdesk with new hire name and start date — IT admin provisions licenses based on department template spreadsheet (last updated 14 months ago, contains roles that no longer exist)',
      'License requests during employment: department heads email IT helpdesk with software request — no approval workflow, no cost center attribution, no budget impact check. IT admin provisions within 48 hours, no questions asked.',
      'Employee offboarding: HR sends termination notice to IT via email (average 4.2-day delay between last day and notification). IT admin manually deactivates accounts in each vendor portal individually — Microsoft Admin Center, Salesforce Setup, Tableau Server, etc. (avg 45 min per offboarding across 8 systems)',
      'No usage monitoring capability: IT has zero visibility into whether provisioned licenses are actually being used between annual audits. The SSO (Okta) has usage analytics but nobody has been trained to use them.',
      'Annual license true-up: IT admin spends 3 weeks manually logging into each vendor admin portal, counting active licenses, comparing against contract terms. Results captured in Excel.',
      'Renewal decisions: IT director reviews contracts 2 weeks before renewal (when reminded by vendor). Decision based on "did anyone complain about not having access?" rather than actual usage data. Auto-renew is the default on 67% of contracts.',
      'Shadow IT: department managers purchase SaaS tools directly on corporate credit cards without IT knowledge — discovered 23 untracked subscriptions totaling $197K/yr during this engagement\'s license audit',
    ],
    bottlenecks: [
      '340 unused Microsoft 365 E5 licenses at $2,000/yr each = $680K/yr waste — includes employees who left (avg 4.2-day deprovisioning lag x 22 terminations/month x $5.48/day/license = $38K/yr in post-termination waste alone)',
      '89 unused Salesforce Enterprise licenses at $5,000/yr each = $445K/yr waste — provisioned during 2023 "all hands on CRM" initiative, 89 users never adopted the tool',
      'No real-time usage telemetry despite having Okta SSO: IT team doesn\'t know that Okta System Log API provides per-app login frequency, session duration, and feature usage data — this capability exists but is unused',
      'Shadow IT spending of $197K/yr across 23 untracked SaaS subscriptions creates compliance risk: no security review, no SSO integration, no data classification, unknown data residency — 4 of 23 tools handle PII',
      'License true-up is reactive: Salesforce charged $125K penalty last year for exceeding contracted seat count by 15 seats that were provisioned but not tracked in IT\'s contract spreadsheet',
      '67% auto-renewal rate means contracts renew without usage review — identified 3 zombie subscriptions totaling $42K/yr for tools that haven\'t been used since the vendor contact at Meridian left the company',
    ],
    aiArchitecture: 'Zylo SaaS management platform deployed as central license intelligence layer with Okta SSO integration providing real-time login telemetry across all managed applications (login frequency, session duration, feature utilization depth). API connectors to top 15 vendors: Microsoft 365 Admin API (user activity reports), Salesforce License Management API (login history + feature usage), Tableau REST API (workbook/view access logs), Zoom Admin API (meeting participation), Adobe Admin Console API (app launches), Slack Analytics API (message/channel activity), plus 9 additional vendor integrations. ML-based optimization engine analyzes 90-day rolling usage patterns and recommends: license tier downgrades (e.g., M365 E5 → E3 for users not consuming Advanced Threat Protection, Power BI, or Audio Conferencing features), seat reclamation (no login >60 days + 14-day grace period notification), and contract consolidation opportunities across OpCos. Automated lifecycle workflows: Okta SCIM provisioning on hire (role-based template, not department spreadsheet), immediate suspension on termination (HR system webhook, not email), and auto-downgrade after inactivity threshold. Shadow IT detection via dual channel: Ramp expense report scanning (ML classification of SaaS charges on corporate cards) and DNS query monitoring for unauthorized cloud services.',
    implementationPlan: [
      { phase: 'Discovery & Complete Inventory', weeks: 'Weeks 1-3', description: 'Deploy Zylo discovery agent across all network segments. Integrate Okta System Log API for 90-day historical login data. Catalog all SaaS applications including 23 known shadow IT subscriptions. Pull current contract terms, renewal dates, and minimum commitments from IT director\'s records (partially in email, partially in a personal Excel file). Build complete license inventory with cost attribution by department, OpCo, and cost center.' },
      { phase: 'Immediate Reclamation (Quick Wins)', weeks: 'Weeks 3-5', description: 'Wave 1 (Week 3): Reclaim 340 unused M365 licenses ($680K). Wave 2 (Week 4): Reclaim 89 unused Salesforce seats ($445K). Downgrade 70 inactive Slack Enterprise to free tier ($84K). Cancel 33 unused Adobe Creative Suite licenses ($198K). Wave 3 (Week 5): Reclaim 105 inactive Zoom seats ($126K). Cancel 3 zombie subscriptions ($42K). Total quick-win savings: $1.58M annualized. Each reclamation preceded by 7-day "last chance" notification email to affected user.' },
      { phase: 'Automated Governance Setup', weeks: 'Weeks 6-9', description: 'Configure Okta SCIM for automated provisioning/deprovisioning across all managed applications — eliminate the 4.2-day termination lag entirely. Build role-based license templates (replace 14-month-old department spreadsheet) with per-role entitlements reviewed and approved by each department head. Configure 60-day inactivity monitoring with automated email notification at day 45, manager notification at day 53, and auto-reclamation at day 60. Build contract renewal calendar with usage-based right-sizing recommendations generated 90 days before each renewal.' },
      { phase: 'Shadow IT Detection & Ongoing Optimization', weeks: 'Weeks 10-14', description: 'Deploy shadow IT detection: configure Ramp transaction classifier to flag SaaS charges, set up DNS monitoring for unauthorized cloud service access. Onboard discovered shadow IT into managed portfolio or terminate. Build executive dashboard: license spend vs utilization by department/OpCo, shadow IT risk score, projected savings from upcoming renewals. Establish monthly optimization review cadence with IT director and CFO. Configure automated compliance alerts for: license count approaching contract maximum, new shadow IT detected, user approaching inactivity threshold.' },
    ],
    risks: [
      'License reclamation may hit vendor minimum commitment clauses: Salesforce contract has 150-seat minimum (reclaiming 89 brings to 111, which is below minimum) — need legal review and potential renegotiation before reclamation',
      'Aggressive reclamation could deactivate licenses for infrequent-but-legitimate users: quarterly board reporting in Tableau (3 board members log in 4x/year), annual compliance tools, seasonal project management — need "protected user" exceptions list',
      'Shadow IT discovery will surface compliance issues: 4 of 23 untracked tools handle PII, at least 2 likely violate data residency requirements — may require immediate remediation budget ($15-25K estimated)',
      'Zylo deployment requires network-level visibility: if any OpCo uses separate network infrastructure (Ridgeline has its own ISP), shadow IT detection will have blind spots until network consolidation',
      'Some vendor APIs throttle or charge for programmatic access: Salesforce metadata API calls count against daily limits, Microsoft Graph API requires E5 admin consent — test API quotas before committing to real-time monitoring intervals',
    ],
    dependencies: [
      'Okta SSO admin access with System Log API permissions — currently limited to IT director\'s personal account (need service account created)',
      'Vendor API credentials for top 15 tools: 11 already have admin portals accessible, 4 require enterprise API tier upgrades (est. $8K/yr combined incremental cost)',
      'HR system (ADP) webhook integration for real-time termination events — replacing current email-based notification process',
      'Legal review of all vendor contracts for minimum commitment clauses and seat reduction notice periods (Salesforce: 30-day notice, Microsoft: immediate, Adobe: end-of-term only)',
      'Executive sponsorship letter from CFO authorizing license governance policy enforcement — department heads have historically resisted centralized license management',
    ],
  },
  {
    name: 'Field Service Operations & Knowledge Access',
    level: 'human-in-loop' as AutomationLevel,
    currentFTEs: 45,
    currentCost: 2_800_000,
    volume: '1,200 service calls/month across 4 OpCos',
    currentTime: '3.2 hrs avg per service call',
    aiSolution: 'RAG-powered field assistant connected to equipment manuals, service history, and compliance databases. Technicians query via mobile app instead of calling dispatch or flipping through 400-page manuals.',
    routing: 'Human-in-the-Loop',
    routingQuote: 'Your best technician\'s knowledge shouldn\'t leave when they do',
    costShift: 'Labor $2.8M → IT $340K + Labor $1.94M = $520K saved',
    savings: 520_000,
    automationPercent: 42,
    details: '45 field technicians across 4 OpCos servicing fire suppression, HVAC, and environmental monitoring systems. Average 3.2 hours per service call, 22% first-visit resolution rate.',
    currentProcess: [
      'Dispatch assigns service call via radio or text message — technician receives address, customer name, and a 1-line problem description ("sprinkler head leaking, 3rd floor")',
      'Technician drives to site with truck stocked based on general inventory — no pre-diagnosis means wrong parts on truck 34% of the time, requiring return trip',
      'On-site: technician inspects system, identifies equipment make/model, then searches for relevant manual — carries 3-4 physical binders (400+ pages each) in truck for most common systems',
      'For unfamiliar systems: technician calls dispatch, who calls senior technician for advice — average 18 minutes on hold/callback cycle, senior tech pulled from their own job site',
      'Technician performs repair/service following manual procedures — if procedures unclear or system is non-standard variant, technician improvises or escalates to supervisor (12% of calls)',
      'Compliance documentation: technician fills out paper inspection form (state-specific, different form per jurisdiction), photographs work with personal phone, submits forms via scan/email within 48 hours',
      'Service history: technician writes summary in truck on paper form, office admin enters into scheduling system next day — 24-48 hour lag before service record is queryable',
      'Parts used: technician marks parts on paper form, inventory not updated until admin processes forms — creates phantom inventory (system says in stock, actually used 2 days ago)',
    ],
    bottlenecks: [
      '34% wrong-parts-on-truck rate drives $180K/yr in wasted fuel, labor, and customer frustration from return trips — root cause is zero pre-diagnosis capability and no real-time inventory visibility per truck',
      'Senior technician as knowledge bottleneck: 3 most experienced techs (avg 22 years tenure) field 40+ calls/day from junior techs — consuming 3.5 hrs/day of their billable time ($340K/yr opportunity cost)',
      'Physical manuals are incomplete: cover only 60% of installed equipment base, miss all systems installed after 2019, and have zero coverage for legacy pre-2005 systems — technicians rely on tribal knowledge for 40% of service calls',
      'Paper-based compliance forms: 6 different state jurisdictions require different inspection documentation — wrong form used 8% of the time, creating compliance violations discovered during audits',
      '24-48 hour service record lag means dispatch has no visibility into what was actually done — repeat calls within 48 hours (7% of volume) are blind, technician arrives without context',
      'Knowledge loss is existential: 3 senior technicians are within 5 years of retirement, collectively hold 66 years of institutional knowledge about 2,400+ installed systems — zero documentation of their expertise',
    ],
    aiArchitecture: 'Custom RAG-powered field assistant built on Databricks + LangChain with mobile-first interface (React Native app). Document ingestion pipeline processes: 2,400 equipment manuals (PDF, avg 400 pages each), 36 months of service history records (18,000 completed work orders), state-specific compliance form templates (6 jurisdictions), and parts catalog with cross-reference data (14,000 SKUs). Vector store (Pinecone) indexes all ingested documents with equipment-specific metadata tagging. Technician queries via voice (Whisper API for speech-to-text) or text: "How do I replace the flow switch on a Viking Model D-2 wet system installed before 2008?" System returns: relevant manual section, past service history for that specific installed system (by site address), recommended parts list with real-time truck inventory check, and applicable state compliance form. GPT-4 generates step-by-step repair instructions contextualized to the specific system variant. Pre-dispatch module analyzes service call description + equipment history to predict likely issue and pre-stage correct parts on truck (targeting 34% wrong-parts rate → <10%). Automated compliance form selection and pre-population based on jurisdiction + equipment type + service performed. Real-time service record capture: technician narrates summary, Whisper transcribes, GPT-4 structures into standardized work order format, immediately synced to Databricks.',
    implementationPlan: [
      { phase: 'Knowledge Base Construction', weeks: 'Weeks 1-6', description: 'Digitize and ingest 2,400 equipment manuals via OCR pipeline (est. 960,000 pages). Ingest 18,000 historical work orders from scheduling system. Interview 3 senior technicians: structured 2-hour sessions capturing tribal knowledge for top 50 most-serviced system types (total: 300 hours of recorded expertise). Build vector store with equipment-specific metadata schema.' },
      { phase: 'Mobile App Development', weeks: 'Weeks 4-10', description: 'Build React Native field assistant app with: voice query (Whisper), text query, camera-based equipment identification (GPT-4V for nameplate/label reading), parts lookup with truck inventory check, compliance form auto-selection, and voice-to-text service report capture. Offline mode for areas with poor cellular coverage (pre-cached manuals for assigned service area).' },
      { phase: 'Pre-Dispatch Intelligence', weeks: 'Weeks 8-12', description: 'Train predictive model on historical service calls to identify likely issue from description + equipment history. Build parts recommendation engine that cross-references predicted issue with truck inventory and suggests pre-staging. Integrate with dispatch system for automated parts recommendation at assignment time. Target: reduce wrong-parts rate from 34% to <10%.' },
      { phase: 'Pilot Deployment', weeks: 'Weeks 13-16', description: 'Deploy to 8 technicians at Meridian Environmental (highest service volume OpCo). Measure: query response accuracy, first-visit resolution rate improvement, average call duration reduction, wrong-parts rate, and technician satisfaction. Iterate on RAG retrieval quality based on technician feedback (expect 2-3 reindexing cycles). Target: 15% reduction in average service call duration.' },
      { phase: 'Full Rollout + Knowledge Capture', weeks: 'Weeks 17-22', description: 'Expand to all 45 technicians across 4 OpCos. Establish ongoing knowledge capture workflow: every resolved service call with a novel solution automatically flagged for senior tech review and knowledge base addition. Build automated compliance report generation from captured service data. Integrate parts usage data with real-time inventory management.' },
    ],
    risks: [
      'Cellular coverage gaps at rural job sites (estimated 15% of service area) — offline mode critical, need to pre-cache relevant manuals for assigned daily route before departure',
      'Senior technician cooperation: tribal knowledge interviews require 300 hours of their time over 6 weeks — need explicit management mandate and incentive structure (suggested: $5K completion bonus per tech)',
      'Equipment manual digitization quality: many manuals are poor-quality scans or photocopies — OCR error rate on degraded documents estimated 8-12%, requiring manual verification of critical safety procedures',
      'Technician adoption resistance: field workforce (avg age 47) may resist mobile app — app UX must be dead simple, voice-first, and demonstrably save them time within first week of use',
      'Liability concern: if AI provides incorrect repair guidance that leads to system failure or safety incident — need clear disclaimer framework, confidence scoring, and mandatory human verification for safety-critical procedures',
    ],
    dependencies: [
      'Equipment manual archive: currently stored across 3 filing cabinets at Meridian Environmental HQ, 2 storage units at Cascade, and individual technician trucks — need physical collection before digitization',
      'Service history database access: scheduling system (ServiceTitan) API credentials — currently managed by office admin, need admin-level API access',
      'Senior technician availability: 3 techs each need to dedicate 100 hours over 6 weeks for knowledge capture — requires scheduling around their existing service commitments',
      'React Native development capacity: 1 mobile developer needed for 10 weeks — may need contractor if internal team fully allocated on automation pipeline work',
      'Pinecone vector database: additional capacity for 960K+ manual pages — estimated $3K/month incremental cost',
    ],
  },
];

export const workflowSummary = {
  total: 48,
  fullyAutomatable: 18,
  humanInLoop: 22,
  humanRequired: 8,
  currentLaborSpend: 6_800_000,
  potentialSavings: 3_100_000,
};

// ─── License Audit Data ─────────────────────────────────────────────────────

export interface License {
  vendor: string;
  totalLicenses: number;
  active90d: number;
  inactive: number;
  annualWaste: number;
  action: string;
  costPerLicense: number;
  department: string;
  lastAuditDate: string;
  trend: number[];
  complianceRisk: boolean;
}

export const licenses: License[] = [
  { vendor: 'Microsoft 365', totalLicenses: 450, active90d: 110, inactive: 340, annualWaste: 680_000, action: 'Reclaim 340 seats + downgrade 80 E5→E3', costPerLicense: 2_000, department: 'IT / All Departments (cross-OpCo)', lastAuditDate: '2025-09-15', trend: [78, 72, 65, 58, 48, 24], complianceRisk: false },
  { vendor: 'Salesforce', totalLicenses: 200, active90d: 111, inactive: 89, annualWaste: 445_000, action: 'Reclaim 89 seats → full migration to Day.ai in Q3', costPerLicense: 5_000, department: 'Sales & Business Development', lastAuditDate: '2025-11-02', trend: [82, 76, 71, 64, 59, 56], complianceRisk: false },
  { vendor: 'Tableau', totalLicenses: 80, active90d: 23, inactive: 57, annualWaste: 228_000, action: 'Replace → Palantir AIP (full swap Q4)', costPerLicense: 4_000, department: 'Finance & Executive', lastAuditDate: '2025-08-20', trend: [65, 55, 48, 41, 34, 29], complianceRisk: false },
  { vendor: 'Slack Enterprise', totalLicenses: 450, active90d: 380, inactive: 70, annualWaste: 84_000, action: 'Downgrade 70 inactive to free tier', costPerLicense: 1_200, department: 'IT / All Departments (cross-OpCo)', lastAuditDate: '2026-01-10', trend: [92, 90, 88, 87, 86, 84], complianceRisk: false },
  { vendor: 'Zoom Enterprise', totalLicenses: 300, active90d: 195, inactive: 105, annualWaste: 126_000, action: 'Reclaim 105 seats, evaluate Slack huddles consolidation', costPerLicense: 1_200, department: 'IT / All Departments (cross-OpCo)', lastAuditDate: '2025-10-18', trend: [85, 80, 76, 72, 68, 65], complianceRisk: false },
  { vendor: 'Adobe Creative Suite', totalLicenses: 45, active90d: 12, inactive: 33, annualWaste: 198_000, action: 'Reclaim 33 seats — restrict to Marketing & Design only', costPerLicense: 6_000, department: 'Marketing (historically provisioned to all managers)', lastAuditDate: '2025-07-22', trend: [62, 52, 44, 38, 31, 27], complianceRisk: true },
  { vendor: 'Concur', totalLicenses: 200, active90d: 200, inactive: 0, annualWaste: 340_000, action: 'Replace → Ramp (full platform swap Q2)', costPerLicense: 1_700, department: 'Finance / All Departments', lastAuditDate: '2026-02-01', trend: [100, 100, 100, 100, 100, 100], complianceRisk: false },
];

// ─── Transformation Stories ─────────────────────────────────────────────────

export interface BeforeAfterMetric {
  label: string;
  before: string;
  after: string;
}

export interface TransformationStory {
  id: string;
  title: string;
  company: string;
  revenue: string;
  problem: string;
  discovery: string;
  solution: string;
  impact: string[];
  quote: string;
  totalImpact: number;
  tags: string[];
  beforeMetrics: BeforeAfterMetric[];
  afterMetrics: BeforeAfterMetric[];
}

export const transformationStories: TransformationStory[] = [
  {
    id: 'no-data-lake',
    title: 'The PE Portfolio Company That Had No Data Lake',
    company: 'Mid-market industrial services, $180M revenue, 4 operating companies',
    revenue: '$180M',
    problem: 'No unified data infrastructure. Each OpCo used different systems. Executive team making decisions blind.',
    discovery: 'UpSkiller Command Center identified that without a data lake, 73% of planned AI initiatives were impossible.',
    solution: 'Implemented Databricks Lakehouse as foundation. Connected all 4 OpCo systems. Built cross-entity visibility.',
    impact: [
      '$1.8M in working capital optimization (equipment redeployment across OpCos)',
      '$400K in duplicate purchase elimination',
      'Unlocked ability to deploy AI across all business units',
    ],
    quote: 'We realized we were trying to build a house without a foundation.',
    totalImpact: 2_200_000,
    tags: ['Data Infrastructure', 'Databricks', 'PE Portfolio'],
    beforeMetrics: [
      { label: 'Data Latency', before: '45 days', after: 'Real-time' },
      { label: 'Cross-OpCo Report Time', before: '3-4 days manual', after: '< 30 seconds' },
      { label: 'Duplicate Purchases/Yr', before: '$1.4M', after: '$180K' },
      { label: 'AI Initiatives Enabled', before: '0 of 12', after: '12 of 12' },
    ],
    afterMetrics: [
      { label: 'Data Latency', before: '45 days', after: 'Real-time' },
      { label: 'Cross-OpCo Report Time', before: '3-4 days manual', after: '< 30 seconds' },
      { label: 'Duplicate Purchases/Yr', before: '$1.4M', after: '$180K' },
      { label: 'AI Initiatives Enabled', before: '0 of 12', after: '12 of 12' },
    ],
  },
  {
    id: 'unused-licenses',
    title: 'The Insurance Company Bleeding $2M in Unused Licenses',
    company: 'Regional insurance carrier, 800 employees, $400M GWP',
    revenue: '$400M GWP',
    problem: 'Tech stack had grown organically over 15 years. Nobody knew what they were paying for.',
    discovery: 'Command Center license audit found 340 unused Microsoft licenses, 89 unused Salesforce seats, and $2.1M/yr in total waste.',
    solution: 'Reclaimed unused licenses. Replaced Salesforce with Day.ai for mid-market CRM. Replaced Concur with Ramp.',
    impact: [
      '$2.1M/yr in immediate savings',
      'New AI-native tools increased productivity 34%',
      'IT team freed up from license management overhead',
    ],
    quote: 'We were paying for 450 Salesforce licenses. 89 people hadn\'t logged in for 6 months.',
    totalImpact: 2_100_000,
    tags: ['License Audit', 'Day.ai', 'Ramp', 'Insurance'],
    beforeMetrics: [
      { label: 'Annual License Spend', before: '$3.4M', after: '$1.3M' },
      { label: 'License Utilization Rate', before: '52%', after: '94%' },
      { label: 'Time to Provision New User', before: '3.2 days', after: '< 4 hours' },
      { label: 'Shadow IT Subscriptions', before: '23 untracked', after: '0 (monitored)' },
    ],
    afterMetrics: [
      { label: 'Annual License Spend', before: '$3.4M', after: '$1.3M' },
      { label: 'License Utilization Rate', before: '52%', after: '94%' },
      { label: 'Time to Provision New User', before: '3.2 days', after: '< 4 hours' },
      { label: 'Shadow IT Subscriptions', before: '23 untracked', after: '0 (monitored)' },
    ],
  },
  {
    id: 'call-center-churn',
    title: 'The Call Center That Couldn\'t Stop Churning',
    company: 'Healthcare services company, 35-person call center, 40% annual turnover',
    revenue: '$95M',
    problem: 'Constant recruiting and training cycle. $1.2M/yr in labor + recruiting costs. Knowledge walking out the door.',
    discovery: 'Command Center analyzed call patterns — 60% were Tier 1 (password resets, status checks, appointment scheduling).',
    solution: 'Deployed Sierra AI agents for Tier 1. Remaining human agents handle complex cases with full AI context.',
    impact: [
      'Reduced headcount from 35 to 14',
      'Eliminated churn problem for Tier 1 entirely',
      'Improved customer satisfaction scores by 23%',
    ],
    quote: 'We were hiring people to do work that AI should be doing.',
    totalImpact: 580_000,
    tags: ['Workflow Automation', 'Sierra', 'Healthcare'],
    beforeMetrics: [
      { label: 'Agent Headcount', before: '35', after: '14' },
      { label: 'Annual Turnover', before: '40%', after: '12%' },
      { label: 'Avg Wait Time (Peak)', before: '12 min', after: '< 30 sec' },
      { label: 'First-Call Resolution', before: '61%', after: '89%' },
    ],
    afterMetrics: [
      { label: 'Agent Headcount', before: '35', after: '14' },
      { label: 'Annual Turnover', before: '40%', after: '12%' },
      { label: 'Avg Wait Time (Peak)', before: '12 min', after: '< 30 sec' },
      { label: 'First-Call Resolution', before: '61%', after: '89%' },
    ],
  },
  {
    id: 'inventory-visibility',
    title: 'The Manufacturer Who Couldn\'t See Their Own Inventory',
    company: 'PE-backed industrial manufacturer, parent + 4 OpCos, $320M combined revenue',
    revenue: '$320M',
    problem: 'Each OpCo tracked inventory independently. Parent company had no visibility. Duplicate equipment purchases across OpCos.',
    discovery: 'Command Center mapped all inventory systems and found $3.2M in duplicate/idle equipment across OpCos.',
    solution: 'Databricks data lake connecting all OpCo inventory systems. Real-time parent-level dashboard. AI-powered redeployment recommendations.',
    impact: [
      '$890K/yr in working capital improvement',
      '34% reduction in new equipment purchases',
      'Cross-OpCo redeployment saving $1.2M in capital avoidance',
    ],
    quote: 'We had four companies buying the same equipment because nobody could see what we already owned.',
    totalImpact: 890_000,
    tags: ['Data Infrastructure', 'Databricks', 'Manufacturing', 'PE Portfolio'],
    beforeMetrics: [
      { label: 'Inventory Visibility', before: '0% cross-OpCo', after: '100% real-time' },
      { label: 'Duplicate Equipment Purchases', before: '$1.4M/yr', after: '$210K/yr' },
      { label: 'Physical Count Discrepancy', before: '8.3%', after: '1.2%' },
      { label: 'Equipment Utilization Rate', before: '61%', after: '84%' },
    ],
    afterMetrics: [
      { label: 'Inventory Visibility', before: '0% cross-OpCo', after: '100% real-time' },
      { label: 'Duplicate Equipment Purchases', before: '$1.4M/yr', after: '$210K/yr' },
      { label: 'Physical Count Discrepancy', before: '8.3%', after: '1.2%' },
      { label: 'Equipment Utilization Rate', before: '61%', after: '84%' },
    ],
  },
];

// ─── ROI Summary Data ───────────────────────────────────────────────────────

export const roiSummary = {
  techStackSavings: 1_800_000,
  workflowAutomation: 3_100_000,
  licenseRecovery: 2_100_000,
  implementationCosts: 2_800_000,
  netYear1: 4_200_000,
  year2Projected: 6_100_000,
};


// ═══════════════════════════════════════════════════════════════════════════════
// ─── Multi-Company Data ────────────────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

// ─── Oakwood Insurance Group ──────────────────────────────────────────────────

const oakwoodCompanyProfile = {
  name: 'Oakwood Insurance Group',
  industry: 'Insurance',
  employees: 800,
  revenue: '$400M',
  opCos: 1,
  opCoNames: ['Oakwood Insurance Group'],
  techSpend: '$5.8M/yr',
  aiReadinessScore: 41,
  holdingPeriod: '12 months into 5-year hold',
  ebitdaMargin: '11.8%',
  targetEbitdaMargin: '19%',
};

const oakwoodAiReadinessBreakdown = [
  { category: 'Data Infrastructure', score: 32, maxScore: 100, status: 'Below Average — legacy AS/400 mainframe stores 60% of policy data, no API layer, batch-only data exports via COBOL jobs running overnight' },
  { category: 'Process Maturity', score: 48, maxScore: 100, status: 'Moderate — claims workflows partially digitized via Guidewire, but 40% of underwriting still relies on manual spreadsheet-based rating' },
  { category: 'Tech Stack Modernity', score: 35, maxScore: 100, status: 'Legacy-Heavy — AS/400 mainframe (1997), Duck Creek policy admin (2012), Guidewire ClaimCenter (2018), no cloud-native infrastructure' },
  { category: 'Change Readiness', score: 52, maxScore: 100, status: 'Moderate — CTO is strong AI advocate, but claims adjusters union has expressed concerns about automation impact on jobs' },
  { category: 'Skills & Training', score: 28, maxScore: 100, status: 'Critical Gap — IT team of 18 focused on mainframe maintenance, zero ML/AI capability, no data science function, 2 open data engineer reqs unfilled for 8 months' },
];

const oakwoodKpis = {
  totalSavings: 3_800_000,
  techScoreBefore: 41,
  techScoreAfter: 78,
  workflowsAnalyzed: 38,
  automationReady: 9,
  unusedLicenseWaste: 1_600_000,
  savingsSparkline: [0, 60_000, 150_000, 290_000, 460_000, 680_000, 960_000, 1_300_000, 1_720_000, 2_280_000, 3_000_000, 3_800_000],
  scoreSparkline: [41, 43, 46, 50, 54, 58, 62, 66, 70, 73, 76, 78],
  workflowSparkline: [0, 3, 7, 12, 17, 22, 26, 30, 33, 35, 37, 38],
  licenseSparkline: [1_600_000, 1_560_000, 1_480_000, 1_360_000, 1_200_000, 1_050_000, 920_000, 810_000, 730_000, 680_000, 650_000, 630_000],
  headcountImpactSparkline: [0, 0, -1, -3, -5, -8, -11, -14, -17, -19, -21, -23],
};

const oakwoodRoadmapPhases = [
  {
    quarter: 'Q1',
    title: 'Legacy Assessment + Claims Quick Wins',
    items: ['AS/400 dependency mapping', 'Claims intake digitization', 'License audit & reclamation'],
    status: 'active' as const,
    weekPlan: [
      { week: 1, task: 'Kickoff & stakeholder interviews with claims, underwriting, and IT leadership', owner: 'Sarah Chen (Engagement Lead)' },
      { week: 2, task: 'AS/400 mainframe audit: map all COBOL programs, batch jobs, and data dependencies', owner: 'Mike Torres (Tech Lead)' },
      { week: 3, task: 'Guidewire ClaimCenter utilization assessment — feature adoption vs license tier', owner: 'Mike Torres (Tech Lead)' },
      { week: 4, task: 'Claims intake workflow discovery — map all 38 processes across intake, adjudication, and payment', owner: 'Sarah Chen (Engagement Lead)' },
      { week: 5, task: 'License audit wave 1: Salesforce (120 seats, 45 inactive), Duck Creek (80 seats)', owner: 'Jason Park (DevOps)' },
      { week: 6, task: 'Quick-win scoring: rank 38 workflows by automation potential and regulatory constraints', owner: 'Sarah Chen (Engagement Lead)' },
      { week: 7, task: 'Microsoft 365 license reclamation (200 seats unused) + Slack consolidation', owner: 'Jason Park (DevOps)' },
      { week: 8, task: 'Executive readout: $1.6M license waste identified, claims automation roadmap presented', owner: 'Sarah Chen (Engagement Lead)' },
      { week: 9, task: 'Duck Creek modernization assessment — API layer feasibility for policy migration', owner: 'Mike Torres (Tech Lead)' },
      { week: 10, task: 'Fraud detection data audit: identify available training data across claims history', owner: 'Priya Sharma (ML Engineering)' },
      { week: 11, task: 'Cloud migration planning: assess Azure vs AWS for Guidewire cloud hosting', owner: 'Mike Torres (Tech Lead)' },
      { week: 12, task: 'Q1 close: $1.6M license savings confirmed, claims automation pilots scoped', owner: 'Sarah Chen (Engagement Lead)' },
    ],
  },
  {
    quarter: 'Q2',
    title: 'Claims Automation + Fraud Detection Pilots',
    items: ['Claims intake AI deployment', 'Fraud detection model training', 'Underwriting automation pilot'],
    status: 'upcoming' as const,
    weekPlan: [
      { week: 13, task: 'Claims intake AI: GPT-4V document extraction trained on 18 months of claims data (142K records)', owner: 'Priya Sharma (ML Engineering)' },
      { week: 14, task: 'Fraud detection ensemble model training on 5-year claims history with labeled fraud cases', owner: 'Priya Sharma (ML Engineering)' },
      { week: 15, task: 'Underwriting automation: rule engine configuration for standard personal lines auto-rating', owner: 'Mike Torres (Tech Lead)' },
      { week: 16, task: 'Claims AI validation: target >93% extraction accuracy on structured fields', owner: 'Priya Sharma (ML Engineering)' },
      { week: 17, task: 'Fraud model validation: shadow mode on live claims stream — target 3x improvement in detection rate', owner: 'Priya Sharma (ML Engineering)' },
      { week: 18, task: 'Customer portal modernization kickoff: UX research with 50 policyholders', owner: 'Jason Park (DevOps)' },
      { week: 19, task: 'Claims AI go-live: 4,000 claims/week through pipeline with human-in-loop review', owner: 'Priya Sharma (ML Engineering)' },
      { week: 20, task: 'Fraud detection go-live: all claims scored, high-risk flagged for SIU review', owner: 'Priya Sharma (ML Engineering)' },
      { week: 21, task: 'Underwriting auto-rating live for personal auto and homeowners lines', owner: 'Mike Torres (Tech Lead)' },
      { week: 22, task: 'Customer self-service portal beta: FNOL filing, claim status, policy documents', owner: 'Jason Park (DevOps)' },
      { week: 23, task: 'Pilot metrics review: claims processing time, fraud catch rate, underwriting throughput', owner: 'Sarah Chen (Engagement Lead)' },
      { week: 24, task: 'Q2 close: 3 automation pilots live, fraud detection operational, portal in beta', owner: 'Sarah Chen (Engagement Lead)' },
    ],
  },
  {
    quarter: 'Q3',
    title: 'Legacy Migration + Scale Automation',
    items: ['AS/400 policy data migration', 'Expand claims automation to full volume', 'Salesforce → HubSpot migration'],
    status: 'upcoming' as const,
    weekPlan: [
      { week: 25, task: 'AS/400 policy migration planning: map 2.4M policy records to modern schema', owner: 'Mike Torres (Tech Lead)' },
      { week: 26, task: 'Policy data extraction: COBOL batch export to staging database with validation', owner: 'Mike Torres (Tech Lead)' },
      { week: 27, task: 'Scale claims AI to full volume (16,000 claims/month), reduce human review to exceptions', owner: 'Priya Sharma (ML Engineering)' },
      { week: 28, task: 'Salesforce → HubSpot migration: data mapping for 120 agent users', owner: 'Jason Park (DevOps)' },
      { week: 29, task: 'Policy migration wave 1: personal auto (800K policies) to Duck Creek cloud', owner: 'Mike Torres (Tech Lead)' },
      { week: 30, task: 'Automation wave 2: payment processing, subrogation intake, compliance reporting', owner: 'Jason Park (DevOps)' },
      { week: 31, task: 'HubSpot go-live: all agents migrated, Salesforce decommission planned', owner: 'Jason Park (DevOps)' },
      { week: 32, task: 'Policy migration wave 2: homeowners (600K policies) to Duck Creek cloud', owner: 'Mike Torres (Tech Lead)' },
      { week: 33, task: 'Regulatory reporting automation: state filing auto-generation from claims data', owner: 'Priya Sharma (ML Engineering)' },
      { week: 34, task: 'Customer portal full launch: self-service FNOL, document upload, payment', owner: 'Jason Park (DevOps)' },
      { week: 35, task: 'Data quality reconciliation: validate migrated policy data against AS/400 source', owner: 'Priya Sharma (ML Engineering)' },
      { week: 36, task: 'Q3 close: AS/400 migration 60% complete, claims fully automated, portal live', owner: 'Sarah Chen (Engagement Lead)' },
    ],
  },
  {
    quarter: 'Q4',
    title: 'Complete Migration + AI-Native Operations',
    items: ['Complete AS/400 decommission', 'Predictive underwriting models', 'Full digital operations'],
    status: 'upcoming' as const,
    weekPlan: [
      { week: 37, task: 'Policy migration wave 3: commercial lines (400K policies) — most complex migration', owner: 'Mike Torres (Tech Lead)' },
      { week: 38, task: 'Predictive underwriting: ML models for risk scoring using enriched data sources', owner: 'Priya Sharma (ML Engineering)' },
      { week: 39, task: 'AS/400 parallel run: validate all migrated policies process correctly in new systems', owner: 'Mike Torres (Tech Lead)' },
      { week: 40, task: 'Predictive loss modeling: forecast claims frequency by segment for pricing optimization', owner: 'Priya Sharma (ML Engineering)' },
      { week: 41, task: 'Automation wave 3: policy endorsements, billing inquiries, agent onboarding', owner: 'Jason Park (DevOps)' },
      { week: 42, task: 'AS/400 decommission: final data archive, mainframe contract termination notice filed', owner: 'Mike Torres (Tech Lead)' },
      { week: 43, task: 'AI-native stack validation: all systems integrated, API health monitoring live', owner: 'Jason Park (DevOps)' },
      { week: 44, task: 'Knowledge transfer: internal IT team trained on new stack, runbooks complete', owner: 'Sarah Chen (Engagement Lead)' },
      { week: 45, task: 'Final ROI validation: actual vs projected savings reconciliation', owner: 'Sarah Chen (Engagement Lead)' },
      { week: 46, task: 'Board presentation: transformation metrics, combined ratio impact, Year 2 roadmap', owner: 'Sarah Chen (Engagement Lead)' },
      { week: 47, task: 'Hypercare period: 30-day post-migration monitoring and optimization', owner: 'Mike Torres (Tech Lead)' },
      { week: 48, task: 'Engagement close: AS/400 decommissioned, $3.8M Year 1 savings confirmed', owner: 'Sarah Chen (Engagement Lead)' },
    ],
  },
];

const oakwoodTopOpportunities: Opportunity[] = [
  { name: 'Claims Intake Automation', category: 'Workflow Automation', savings: 820_000, effort: 'Medium', status: 'in-progress', priority: 10, timeToValue: 10, confidence: 91 },
  { name: 'Legacy Policy Migration (AS/400)', category: 'Tech Stack', savings: 680_000, effort: 'High', status: 'identified', priority: 9, timeToValue: 24, confidence: 78 },
  { name: 'Fraud Detection AI', category: 'Workflow Automation', savings: 540_000, effort: 'Medium', status: 'identified', priority: 9, timeToValue: 12, confidence: 84 },
  { name: 'Underwriting Automation', category: 'Workflow Automation', savings: 460_000, effort: 'High', status: 'identified', priority: 8, timeToValue: 16, confidence: 76 },
  { name: 'Customer Portal Modernization', category: 'Tech Stack', savings: 380_000, effort: 'Medium', status: 'identified', priority: 7, timeToValue: 14, confidence: 82 },
  { name: 'Unused License Reclamation', category: 'License Audit', savings: 920_000, effort: 'Low', status: 'in-progress', priority: 10, timeToValue: 3, confidence: 96 },
  { name: 'Regulatory Reporting Automation', category: 'Workflow Automation', savings: 280_000, effort: 'Medium', status: 'identified', priority: 6, timeToValue: 10, confidence: 88 },
  { name: 'Replace Salesforce → HubSpot', category: 'Tech Stack', savings: 190_000, effort: 'Medium', status: 'identified', priority: 7, timeToValue: 8, confidence: 90 },
  { name: 'Payment Processing Automation', category: 'Workflow Automation', savings: 310_000, effort: 'Low', status: 'identified', priority: 8, timeToValue: 6, confidence: 92 },
  { name: 'Subrogation Recovery Optimization', category: 'Workflow Automation', savings: 220_000, effort: 'High', status: 'identified', priority: 5, timeToValue: 18, confidence: 70 },
];

const oakwoodCurrentStack: CurrentTool[] = [
  {
    name: 'Guidewire ClaimCenter',
    category: 'Claims Management',
    annualCost: 620_000,
    users: 180,
    score: 5,
    integrationComplexity: 'Medium',
    migrationWeeks: 0,
    riskLevel: 'Low',
    dependencies: ['Claims intake', 'Adjudication workflow', 'Payment processing', 'Regulatory reporting'],
  },
  {
    name: 'Duck Creek Policy Admin',
    category: 'Policy Administration',
    annualCost: 480_000,
    users: 120,
    score: 4,
    integrationComplexity: 'High',
    migrationWeeks: 16,
    riskLevel: 'Medium',
    dependencies: ['Policy issuance', 'Endorsements', 'Renewal processing', 'Rating engine'],
  },
  {
    name: 'AS/400 Mainframe',
    category: 'Legacy Systems',
    annualCost: 340_000,
    users: 45,
    score: 1,
    integrationComplexity: 'High',
    migrationWeeks: 28,
    riskLevel: 'High',
    dependencies: ['Historical policy data', 'COBOL batch processing', 'Legacy reporting', 'Actuarial data feeds'],
  },
  {
    name: 'Salesforce CRM',
    category: 'Agent Management',
    annualCost: 360_000,
    users: 120,
    score: 3,
    integrationComplexity: 'Medium',
    migrationWeeks: 10,
    riskLevel: 'Medium',
    dependencies: ['Agent relationships', 'Commission tracking', 'Pipeline management', 'Quote generation'],
  },
  {
    name: 'Microsoft 365',
    category: 'Productivity & Collaboration',
    annualCost: 480_000,
    users: 800,
    score: 6,
    integrationComplexity: 'Low',
    migrationWeeks: 0,
    riskLevel: 'Low',
    dependencies: ['Email', 'Document management', 'SharePoint sites', 'Teams collaboration'],
  },
  {
    name: 'Slack',
    category: 'Communication',
    annualCost: 144_000,
    users: 600,
    score: 7,
    integrationComplexity: 'Low',
    migrationWeeks: 0,
    riskLevel: 'Low',
    dependencies: ['Internal messaging', 'Claims team coordination', 'IT alerts', 'Vendor integrations'],
  },
];

const oakwoodLicenses: License[] = [
  { vendor: 'Microsoft 365', totalLicenses: 800, active90d: 600, inactive: 200, annualWaste: 400_000, action: 'Reclaim 200 seats + downgrade 100 E5→E3', costPerLicense: 2_000, department: 'IT / All Departments', lastAuditDate: '2025-10-01', trend: [82, 78, 74, 70, 65, 60], complianceRisk: false },
  { vendor: 'Salesforce', totalLicenses: 120, active90d: 75, inactive: 45, annualWaste: 225_000, action: 'Reclaim 45 seats → migrate to HubSpot in Q3', costPerLicense: 5_000, department: 'Sales & Agent Relations', lastAuditDate: '2025-11-15', trend: [80, 74, 69, 65, 60, 56], complianceRisk: false },
  { vendor: 'Duck Creek', totalLicenses: 120, active90d: 88, inactive: 32, annualWaste: 192_000, action: 'Reclaim 32 inactive seats, optimize license tier', costPerLicense: 6_000, department: 'Underwriting & Policy Admin', lastAuditDate: '2025-09-20', trend: [85, 80, 76, 72, 68, 65], complianceRisk: false },
  { vendor: 'Guidewire', totalLicenses: 180, active90d: 155, inactive: 25, annualWaste: 200_000, action: 'Reclaim 25 seats, evaluate ClaimCenter cloud migration', costPerLicense: 8_000, department: 'Claims Operations', lastAuditDate: '2025-12-01', trend: [92, 90, 88, 87, 86, 84], complianceRisk: false },
  { vendor: 'Slack Enterprise', totalLicenses: 600, active90d: 480, inactive: 120, annualWaste: 144_000, action: 'Downgrade 120 inactive to free tier', costPerLicense: 1_200, department: 'IT / All Departments', lastAuditDate: '2026-01-05', trend: [90, 87, 84, 82, 80, 78], complianceRisk: false },
  { vendor: 'Adobe Acrobat Pro', totalLicenses: 200, active90d: 90, inactive: 110, annualWaste: 264_000, action: 'Reclaim 110 seats — restrict to claims and legal only', costPerLicense: 2_400, department: 'Claims & Legal (provisioned company-wide)', lastAuditDate: '2025-08-18', trend: [70, 60, 52, 45, 40, 36], complianceRisk: true },
  { vendor: 'LexisNexis', totalLicenses: 50, active90d: 18, inactive: 32, annualWaste: 176_000, action: 'Reclaim 32 seats — restrict to SIU and underwriting', costPerLicense: 5_500, department: 'Special Investigations & Underwriting', lastAuditDate: '2025-07-30', trend: [68, 58, 50, 44, 38, 34], complianceRisk: false },
];

const oakwoodWorkflowSummary = {
  total: 38,
  fullyAutomatable: 9,
  humanInLoop: 18,
  humanRequired: 11,
  currentLaborSpend: 4_200_000,
  potentialSavings: 2_200_000,
};

const oakwoodRoiSummary = {
  techStackSavings: 1_250_000,
  workflowAutomation: 2_200_000,
  licenseRecovery: 1_600_000,
  implementationCosts: 1_250_000,
  netYear1: 3_800_000,
  year2Projected: 5_200_000,
};

// ─── Pinnacle Healthcare ─────────────────────────────────────────────────────

const pinnacleCompanyProfile = {
  name: 'Pinnacle Healthcare',
  industry: 'Healthcare',
  employees: 420,
  revenue: '$95M',
  opCos: 1,
  opCoNames: ['Pinnacle Healthcare'],
  techSpend: '$3.2M/yr',
  aiReadinessScore: 28,
  holdingPeriod: '6 months into 5-year hold',
  ebitdaMargin: '8.4%',
  targetEbitdaMargin: '16%',
};

const pinnacleAiReadinessBreakdown = [
  { category: 'Data Infrastructure', score: 22, maxScore: 100, status: 'Critical Gap — Epic EHR is primary data store but data extraction is limited to standard reports, no data warehouse, clinical and billing data siloed' },
  { category: 'Process Maturity', score: 35, maxScore: 100, status: 'Below Average — 80% of prior auth handled via fax/phone, clinical documentation averages 2.5 hrs/day per provider, scheduling is manual' },
  { category: 'Tech Stack Modernity', score: 24, maxScore: 100, status: 'Legacy-Heavy — Epic (2016 version, 2 major versions behind), fax-dependent payer integrations, no cloud infrastructure beyond email' },
  { category: 'Change Readiness', score: 32, maxScore: 100, status: 'Low — physicians skeptical of AI in clinical workflows, nursing staff open to documentation help, admin leadership supportive' },
  { category: 'Skills & Training', score: 18, maxScore: 100, status: 'Critical Gap — zero data science capability, IT team of 8 focused on Epic support, no informatics department, 1 analyst for all reporting' },
];

const pinnacleKpis = {
  totalSavings: 1_900_000,
  techScoreBefore: 28,
  techScoreAfter: 71,
  workflowsAnalyzed: 24,
  automationReady: 6,
  unusedLicenseWaste: 640_000,
  savingsSparkline: [0, 30_000, 80_000, 160_000, 270_000, 410_000, 580_000, 790_000, 1_040_000, 1_340_000, 1_600_000, 1_900_000],
  scoreSparkline: [28, 30, 33, 37, 41, 46, 51, 56, 60, 64, 68, 71],
  workflowSparkline: [0, 2, 5, 8, 11, 14, 16, 18, 20, 22, 23, 24],
  licenseSparkline: [640_000, 625_000, 595_000, 550_000, 495_000, 440_000, 390_000, 345_000, 310_000, 285_000, 268_000, 255_000],
  headcountImpactSparkline: [0, 0, -1, -2, -3, -5, -7, -9, -10, -12, -13, -14],
};

const pinnacleRoadmapPhases = [
  {
    quarter: 'Q1',
    title: 'Clinical Workflow Assessment + Quick Wins',
    items: ['Epic utilization audit', 'Documentation burden analysis', 'License audit & reclamation'],
    status: 'active' as const,
    weekPlan: [
      { week: 1, task: 'Kickoff & stakeholder interviews with CMO, CNO, CFO, and department heads', owner: 'Sarah Chen (Engagement Lead)' },
      { week: 2, task: 'Epic EHR utilization audit: feature adoption, module usage, customization inventory', owner: 'Mike Torres (Tech Lead)' },
      { week: 3, task: 'Clinical documentation burden study: shadow 20 providers across 5 specialties for 3 days', owner: 'Sarah Chen (Engagement Lead)' },
      { week: 4, task: 'Prior auth workflow mapping: document all 24 processes across clinical and admin teams', owner: 'Sarah Chen (Engagement Lead)' },
      { week: 5, task: 'License audit wave 1: Salesforce Health Cloud (80 seats), DocuSign (150 seats)', owner: 'Jason Park (DevOps)' },
      { week: 6, task: 'Quick-win scoring: rank 24 workflows by clinical impact and HIPAA compliance requirements', owner: 'Sarah Chen (Engagement Lead)' },
      { week: 7, task: 'Microsoft Teams license optimization (200 unused seats) + ADP module consolidation', owner: 'Jason Park (DevOps)' },
      { week: 8, task: 'Executive readout: $640K license waste identified, clinical AI roadmap presented', owner: 'Sarah Chen (Engagement Lead)' },
      { week: 9, task: 'Ambient documentation vendor evaluation: DAX Copilot vs Abridge vs Suki', owner: 'Mike Torres (Tech Lead)' },
      { week: 10, task: 'Prior auth automation vendor evaluation: Cohere Health vs Olive AI vs Infinitus', owner: 'Mike Torres (Tech Lead)' },
      { week: 11, task: 'Data infrastructure assessment: Epic data extraction capabilities, FHIR API readiness', owner: 'Mike Torres (Tech Lead)' },
      { week: 12, task: 'Q1 close: $640K license savings confirmed, clinical AI pilots scoped and vendor selected', owner: 'Sarah Chen (Engagement Lead)' },
    ],
  },
  {
    quarter: 'Q2',
    title: 'Clinical AI Pilots',
    items: ['Ambient documentation pilot', 'Prior auth automation', 'Scheduling AI pilot'],
    status: 'upcoming' as const,
    weekPlan: [
      { week: 13, task: 'DAX Copilot deployment: 10-provider pilot group across primary care and orthopedics', owner: 'Mike Torres (Tech Lead)' },
      { week: 14, task: 'Prior auth automation: configure Cohere Health integration with Epic and top 5 payers', owner: 'Priya Sharma (ML Engineering)' },
      { week: 15, task: 'Patient scheduling AI: configure intelligent scheduling based on visit type, provider capacity, and no-show prediction', owner: 'Priya Sharma (ML Engineering)' },
      { week: 16, task: 'DAX Copilot validation: measure documentation time reduction, note quality assessment by CMO', owner: 'Sarah Chen (Engagement Lead)' },
      { week: 17, task: 'Prior auth pilot live: automated submission for imaging and specialist referrals', owner: 'Priya Sharma (ML Engineering)' },
      { week: 18, task: 'Scheduling AI pilot: 3 clinic locations, measure no-show rate and utilization improvement', owner: 'Priya Sharma (ML Engineering)' },
      { week: 19, task: 'DAX Copilot expansion: add 15 more providers based on pilot results', owner: 'Mike Torres (Tech Lead)' },
      { week: 20, task: 'Revenue cycle assessment: identify coding accuracy gaps and denial patterns', owner: 'Sarah Chen (Engagement Lead)' },
      { week: 21, task: 'Prior auth automation expanded to all payer contracts (18 payers)', owner: 'Priya Sharma (ML Engineering)' },
      { week: 22, task: 'Coding accuracy AI evaluation: compare AI-assisted coding vs current manual process', owner: 'Priya Sharma (ML Engineering)' },
      { week: 23, task: 'Pilot metrics review: documentation time saved, prior auth turnaround, scheduling utilization', owner: 'Sarah Chen (Engagement Lead)' },
      { week: 24, task: 'Q2 close: 3 clinical AI pilots live, documentation burden reduced 60% for pilot providers', owner: 'Sarah Chen (Engagement Lead)' },
    ],
  },
  {
    quarter: 'Q3',
    title: 'Scale Clinical AI + Revenue Cycle',
    items: ['DAX Copilot full deployment', 'Revenue cycle optimization', 'Patient engagement platform'],
    status: 'upcoming' as const,
    weekPlan: [
      { week: 25, task: 'DAX Copilot full rollout: all 85 providers across all specialties', owner: 'Mike Torres (Tech Lead)' },
      { week: 26, task: 'Revenue cycle AI: deploy coding accuracy tool with real-time CDI suggestions', owner: 'Priya Sharma (ML Engineering)' },
      { week: 27, task: 'Denial management AI: pattern recognition on historical denials, auto-appeal generation', owner: 'Priya Sharma (ML Engineering)' },
      { week: 28, task: 'Patient engagement: automated appointment reminders, pre-visit instructions, follow-up', owner: 'Jason Park (DevOps)' },
      { week: 29, task: 'Scheduling AI expanded to all 8 clinic locations', owner: 'Jason Park (DevOps)' },
      { week: 30, task: 'Epic upgrade planning: path to current version for FHIR R4 API capabilities', owner: 'Mike Torres (Tech Lead)' },
      { week: 31, task: 'Revenue cycle optimization: AI-driven charge capture and billing automation', owner: 'Priya Sharma (ML Engineering)' },
      { week: 32, task: 'Salesforce Health Cloud → simpler CRM for patient outreach (evaluate alternatives)', owner: 'Jason Park (DevOps)' },
      { week: 33, task: 'Clinical quality reporting automation: HEDIS/MIPS measures auto-calculated', owner: 'Priya Sharma (ML Engineering)' },
      { week: 34, task: 'Patient portal enhancement: AI-powered symptom checker, care navigation', owner: 'Jason Park (DevOps)' },
      { week: 35, task: 'Data analytics foundation: clinical data warehouse for population health insights', owner: 'Mike Torres (Tech Lead)' },
      { week: 36, task: 'Q3 close: DAX fully deployed, revenue cycle AI live, $1.4M in annualized savings realized', owner: 'Sarah Chen (Engagement Lead)' },
    ],
  },
  {
    quarter: 'Q4',
    title: 'Optimization + Predictive Analytics',
    items: ['Predictive patient risk models', 'Full revenue cycle automation', 'Population health analytics'],
    status: 'upcoming' as const,
    weekPlan: [
      { week: 37, task: 'Predictive risk models: readmission prediction, chronic disease progression, no-show forecasting', owner: 'Priya Sharma (ML Engineering)' },
      { week: 38, task: 'Full revenue cycle automation: end-to-end from charge capture to payment posting', owner: 'Priya Sharma (ML Engineering)' },
      { week: 39, task: 'Population health dashboard: risk stratification, care gap identification, outreach prioritization', owner: 'Mike Torres (Tech Lead)' },
      { week: 40, task: 'Epic upgrade execution: migrate to current version with FHIR R4 support', owner: 'Mike Torres (Tech Lead)' },
      { week: 41, task: 'Automation wave 3: credentialing, referral management, patient financial counseling', owner: 'Jason Park (DevOps)' },
      { week: 42, task: 'Payer contract analytics: AI-driven fee schedule analysis and negotiation support', owner: 'Priya Sharma (ML Engineering)' },
      { week: 43, task: 'Full system integration validation: all AI tools connected, data flowing correctly', owner: 'Jason Park (DevOps)' },
      { week: 44, task: 'Knowledge transfer: clinical informatics team trained on all AI tools', owner: 'Sarah Chen (Engagement Lead)' },
      { week: 45, task: 'Final ROI validation: actual vs projected savings and clinical outcome improvements', owner: 'Sarah Chen (Engagement Lead)' },
      { week: 46, task: 'Board presentation: transformation metrics, margin improvement, Year 2 roadmap', owner: 'Sarah Chen (Engagement Lead)' },
      { week: 47, task: 'Hypercare period: 30-day monitoring of all deployed AI systems', owner: 'Mike Torres (Tech Lead)' },
      { week: 48, task: 'Engagement close: clinical AI operational, $1.9M Year 1 savings confirmed', owner: 'Sarah Chen (Engagement Lead)' },
    ],
  },
];

const pinnacleTopOpportunities: Opportunity[] = [
  { name: 'Clinical Note Automation (DAX Copilot)', category: 'Workflow Automation', savings: 520_000, effort: 'Medium', status: 'identified', priority: 10, timeToValue: 8, confidence: 89 },
  { name: 'Prior Authorization Automation', category: 'Workflow Automation', savings: 380_000, effort: 'Medium', status: 'identified', priority: 9, timeToValue: 10, confidence: 85 },
  { name: 'Patient Scheduling AI', category: 'Workflow Automation', savings: 260_000, effort: 'Low', status: 'identified', priority: 8, timeToValue: 6, confidence: 91 },
  { name: 'Revenue Cycle Optimization', category: 'Workflow Automation', savings: 340_000, effort: 'High', status: 'identified', priority: 8, timeToValue: 16, confidence: 77 },
  { name: 'Coding Accuracy Improvement', category: 'Workflow Automation', savings: 220_000, effort: 'Medium', status: 'identified', priority: 7, timeToValue: 12, confidence: 82 },
  { name: 'Unused License Reclamation', category: 'License Audit', savings: 640_000, effort: 'Low', status: 'in-progress', priority: 10, timeToValue: 3, confidence: 97 },
  { name: 'Denial Management AI', category: 'Workflow Automation', savings: 180_000, effort: 'Medium', status: 'identified', priority: 6, timeToValue: 14, confidence: 74 },
  { name: 'Patient Engagement Automation', category: 'Workflow Automation', savings: 140_000, effort: 'Low', status: 'identified', priority: 5, timeToValue: 6, confidence: 88 },
  { name: 'Replace Salesforce Health Cloud', category: 'Tech Stack', savings: 160_000, effort: 'Medium', status: 'identified', priority: 6, timeToValue: 10, confidence: 84 },
  { name: 'Clinical Quality Reporting', category: 'Workflow Automation', savings: 120_000, effort: 'Low', status: 'identified', priority: 4, timeToValue: 8, confidence: 90 },
];

const pinnacleCurrentStack: CurrentTool[] = [
  {
    name: 'Epic EHR',
    category: 'Electronic Health Record',
    annualCost: 1_200_000,
    users: 350,
    score: 6,
    integrationComplexity: 'High',
    migrationWeeks: 0,
    riskLevel: 'Low',
    dependencies: ['Clinical documentation', 'Order entry', 'Patient scheduling', 'Billing integration', 'Regulatory reporting'],
  },
  {
    name: 'Availity',
    category: 'Revenue Cycle / Clearinghouse',
    annualCost: 180_000,
    users: 45,
    score: 5,
    integrationComplexity: 'Medium',
    migrationWeeks: 0,
    riskLevel: 'Low',
    dependencies: ['Claims submission', 'Eligibility verification', 'Prior auth submission', 'Remittance processing'],
  },
  {
    name: 'Microsoft Teams',
    category: 'Communication & Collaboration',
    annualCost: 240_000,
    users: 420,
    score: 6,
    integrationComplexity: 'Low',
    migrationWeeks: 0,
    riskLevel: 'Low',
    dependencies: ['Internal messaging', 'Video conferencing', 'Care team coordination', 'File sharing'],
  },
  {
    name: 'ADP Workforce Now',
    category: 'HR & Payroll',
    annualCost: 156_000,
    users: 420,
    score: 5,
    integrationComplexity: 'Low',
    migrationWeeks: 0,
    riskLevel: 'Low',
    dependencies: ['Payroll processing', 'Benefits administration', 'Time tracking', 'Credentialing support'],
  },
  {
    name: 'Salesforce Health Cloud',
    category: 'Patient Relationship Management',
    annualCost: 320_000,
    users: 80,
    score: 3,
    integrationComplexity: 'Medium',
    migrationWeeks: 10,
    riskLevel: 'Medium',
    dependencies: ['Patient outreach', 'Care coordination', 'Referral management', 'Population health campaigns'],
  },
  {
    name: 'DocuSign',
    category: 'Document Management',
    annualCost: 108_000,
    users: 150,
    score: 5,
    integrationComplexity: 'Low',
    migrationWeeks: 4,
    riskLevel: 'Low',
    dependencies: ['Patient consent forms', 'Provider contracts', 'Insurance authorizations', 'Compliance documents'],
  },
];

const pinnacleLicenses: License[] = [
  { vendor: 'Salesforce Health Cloud', totalLicenses: 80, active90d: 32, inactive: 48, annualWaste: 240_000, action: 'Reclaim 48 seats → evaluate simpler CRM alternative', costPerLicense: 5_000, department: 'Care Coordination & Outreach', lastAuditDate: '2025-10-20', trend: [75, 68, 60, 54, 48, 42], complianceRisk: false },
  { vendor: 'Microsoft Teams', totalLicenses: 420, active90d: 220, inactive: 200, annualWaste: 120_000, action: 'Downgrade 200 inactive to basic tier', costPerLicense: 600, department: 'IT / All Departments', lastAuditDate: '2025-11-10', trend: [82, 76, 70, 65, 58, 52], complianceRisk: false },
  { vendor: 'DocuSign', totalLicenses: 150, active90d: 65, inactive: 85, annualWaste: 102_000, action: 'Reclaim 85 seats — restrict to admin and legal', costPerLicense: 1_200, department: 'Admin & Legal (provisioned org-wide)', lastAuditDate: '2025-09-05', trend: [72, 64, 56, 50, 44, 40], complianceRisk: false },
  { vendor: 'ADP Modules', totalLicenses: 420, active90d: 380, inactive: 40, annualWaste: 48_000, action: 'Consolidate redundant modules, reclaim 40 inactive', costPerLicense: 1_200, department: 'HR', lastAuditDate: '2025-12-15', trend: [95, 93, 92, 91, 90, 89], complianceRisk: false },
  { vendor: 'Zoom Healthcare', totalLicenses: 100, active90d: 42, inactive: 58, annualWaste: 70_000, action: 'Reclaim 58 seats — consolidate to Teams for non-telehealth', costPerLicense: 1_200, department: 'Clinical (telehealth) & Admin', lastAuditDate: '2025-08-28', trend: [78, 70, 62, 56, 48, 42], complianceRisk: true },
  { vendor: 'Nuance PowerScribe', totalLicenses: 30, active90d: 12, inactive: 18, annualWaste: 54_000, action: 'Reclaim 18 seats — evaluate DAX Copilot replacement', costPerLicense: 3_000, department: 'Radiology', lastAuditDate: '2025-07-15', trend: [68, 58, 50, 44, 38, 34], complianceRisk: false },
];

const pinnacleWorkflowSummary = {
  total: 24,
  fullyAutomatable: 6,
  humanInLoop: 12,
  humanRequired: 6,
  currentLaborSpend: 2_800_000,
  potentialSavings: 1_200_000,
};

const pinnacleRoiSummary = {
  techStackSavings: 480_000,
  workflowAutomation: 1_200_000,
  licenseRecovery: 640_000,
  implementationCosts: 420_000,
  netYear1: 1_900_000,
  year2Projected: 2_800_000,
};

// ─── Atlas Manufacturing ─────────────────────────────────────────────────────

const atlasCompanyProfile = {
  name: 'Atlas Manufacturing',
  industry: 'Manufacturing (PE-backed, 4 OpCos)',
  employees: 2_100,
  revenue: '$320M',
  opCos: 4,
  opCoNames: ['Atlas Precision Components', 'Titan Metal Fabrication', 'Forge Industrial Systems', 'Apex Assembly Solutions'],
  techSpend: '$9.6M/yr',
  aiReadinessScore: 38,
  holdingPeriod: '24 months into 5-year hold',
  ebitdaMargin: '12.6%',
  targetEbitdaMargin: '21%',
};

const atlasAiReadinessBreakdown = [
  { category: 'Data Infrastructure', score: 30, maxScore: 100, status: 'Below Average — SAP S/4HANA at 2 of 4 plants, other 2 on legacy MES systems, Siemens MindSphere collecting IoT data but not centralized' },
  { category: 'Process Maturity', score: 44, maxScore: 100, status: 'Moderate — production scheduling still manual at 2 plants, quality inspection 90% visual, maintenance is reactive at all 4 facilities' },
  { category: 'Tech Stack Modernity', score: 38, maxScore: 100, status: 'Mixed — SAP S/4HANA is modern but fragmented across plants, MindSphere collecting data with no analytics layer, AutoCAD workflows manual' },
  { category: 'Change Readiness', score: 48, maxScore: 100, status: 'Moderate — plant managers at Atlas Precision and Forge are AI advocates, Titan and Apex leadership more conservative, union workforce cautious' },
  { category: 'Skills & Training', score: 26, maxScore: 100, status: 'Critical Gap — no data science team, IT staffed for ERP maintenance, no ML/AI capability, industrial engineers receptive but untrained' },
];

const atlasKpis = {
  totalSavings: 5_100_000,
  techScoreBefore: 38,
  techScoreAfter: 84,
  workflowsAnalyzed: 52,
  automationReady: 14,
  unusedLicenseWaste: 2_400_000,
  savingsSparkline: [0, 90_000, 220_000, 400_000, 640_000, 940_000, 1_320_000, 1_800_000, 2_400_000, 3_200_000, 4_100_000, 5_100_000],
  scoreSparkline: [38, 40, 44, 49, 54, 60, 65, 70, 74, 78, 81, 84],
  workflowSparkline: [0, 4, 10, 16, 22, 28, 34, 38, 42, 46, 49, 52],
  licenseSparkline: [2_400_000, 2_340_000, 2_220_000, 2_050_000, 1_840_000, 1_620_000, 1_400_000, 1_220_000, 1_080_000, 980_000, 920_000, 880_000],
  headcountImpactSparkline: [0, 0, -2, -5, -8, -12, -16, -20, -24, -28, -31, -34],
};

const atlasRoadmapPhases = [
  {
    quarter: 'Q1',
    title: 'Plant Assessment + Data Foundation',
    items: ['Cross-plant system audit', 'IoT data centralization', 'License audit & reclamation'],
    status: 'active' as const,
    weekPlan: [
      { week: 1, task: 'Kickoff & stakeholder interviews with plant managers, VP Manufacturing, and CIO', owner: 'Sarah Chen (Engagement Lead)' },
      { week: 2, task: 'Cross-plant system audit: map SAP instances, MES systems, PLC configurations across 4 facilities', owner: 'Mike Torres (Tech Lead)' },
      { week: 3, task: 'Siemens MindSphere data assessment: sensor coverage, data quality, collection frequency per plant', owner: 'Mike Torres (Tech Lead)' },
      { week: 4, task: 'Workflow discovery: map 52 processes across production, quality, maintenance, and supply chain', owner: 'Sarah Chen (Engagement Lead)' },
      { week: 5, task: 'License audit wave 1: SAP (680 seats), AutoCAD (200 seats), Jira (300 seats)', owner: 'Jason Park (DevOps)' },
      { week: 6, task: 'Quick-win scoring: rank 52 workflows by automation potential and cross-plant synergy', owner: 'Sarah Chen (Engagement Lead)' },
      { week: 7, task: 'Microsoft 365 license reclamation (400 unused seats) + Slack consolidation across plants', owner: 'Jason Park (DevOps)' },
      { week: 8, task: 'Executive readout: $2.4M license waste identified, predictive maintenance roadmap presented', owner: 'Sarah Chen (Engagement Lead)' },
      { week: 9, task: 'IoT data lake design: unified schema for MindSphere + PLC data across 4 plants', owner: 'Mike Torres (Tech Lead)' },
      { week: 10, task: 'Predictive maintenance data audit: identify equipment with sufficient sensor history for ML models', owner: 'Priya Sharma (ML Engineering)' },
      { week: 11, task: 'SAP harmonization assessment: feasibility of consolidating 2 SAP instances + 2 legacy MES', owner: 'Mike Torres (Tech Lead)' },
      { week: 12, task: 'Q1 close: $2.4M license savings confirmed, data lake architecture approved, pilots scoped', owner: 'Sarah Chen (Engagement Lead)' },
    ],
  },
  {
    quarter: 'Q2',
    title: 'Predictive Maintenance + Inventory Consolidation',
    items: ['Predictive maintenance pilots at 2 plants', 'Cross-plant inventory visibility', 'Quality inspection AI pilot'],
    status: 'upcoming' as const,
    weekPlan: [
      { week: 13, task: 'Predictive maintenance model training: 24 months of vibration, temperature, and pressure data from Atlas Precision', owner: 'Priya Sharma (ML Engineering)' },
      { week: 14, task: 'Cross-plant inventory system: connect SAP MM modules + legacy warehouse systems to unified data lake', owner: 'Mike Torres (Tech Lead)' },
      { week: 15, task: 'Quality inspection AI: computer vision model training on 50K historical defect images', owner: 'Priya Sharma (ML Engineering)' },
      { week: 16, task: 'Predictive maintenance validation: shadow mode at Atlas Precision — predict vs actual failures over 4 weeks', owner: 'Priya Sharma (ML Engineering)' },
      { week: 17, task: 'Inventory visibility dashboard live: real-time cross-plant raw material and WIP view', owner: 'Mike Torres (Tech Lead)' },
      { week: 18, task: 'Quality inspection pilot: inline camera stations at Forge Industrial for automated defect detection', owner: 'Priya Sharma (ML Engineering)' },
      { week: 19, task: 'Predictive maintenance go-live at Atlas Precision: automated work orders generated from ML predictions', owner: 'Priya Sharma (ML Engineering)' },
      { week: 20, task: 'Expand predictive maintenance to Titan Metal Fabrication (CNC fleet)', owner: 'Priya Sharma (ML Engineering)' },
      { week: 21, task: 'Cross-plant procurement consolidation: automated reorder points based on aggregate demand', owner: 'Mike Torres (Tech Lead)' },
      { week: 22, task: 'Supplier risk monitoring pilot: real-time tracking of top 50 suppliers across geopolitical and financial signals', owner: 'Priya Sharma (ML Engineering)' },
      { week: 23, task: 'Pilot metrics review: unplanned downtime reduction, inventory turns, defect escape rate', owner: 'Sarah Chen (Engagement Lead)' },
      { week: 24, task: 'Q2 close: predictive maintenance at 2 plants, inventory visibility live, quality AI in pilot', owner: 'Sarah Chen (Engagement Lead)' },
    ],
  },
  {
    quarter: 'Q3',
    title: 'Scale Automation + Production Optimization',
    items: ['Production scheduling AI', 'Expand predictive maintenance to all plants', 'SAP harmonization'],
    status: 'upcoming' as const,
    weekPlan: [
      { week: 25, task: 'Production scheduling AI: constraint-based optimization for Atlas Precision and Forge Industrial', owner: 'Priya Sharma (ML Engineering)' },
      { week: 26, task: 'Expand predictive maintenance to Forge Industrial and Apex Assembly (all 4 plants now covered)', owner: 'Priya Sharma (ML Engineering)' },
      { week: 27, task: 'SAP harmonization wave 1: migrate Titan legacy MES to SAP S/4HANA', owner: 'Mike Torres (Tech Lead)' },
      { week: 28, task: 'Quality inspection AI expanded to all 4 plants with plant-specific defect models', owner: 'Priya Sharma (ML Engineering)' },
      { week: 29, task: 'Supply chain optimization: demand forecasting + automated purchase order generation', owner: 'Priya Sharma (ML Engineering)' },
      { week: 30, task: 'Automation wave 2: receiving inspection, shipping documentation, compliance reporting', owner: 'Jason Park (DevOps)' },
      { week: 31, task: 'SAP harmonization wave 2: migrate Apex legacy MES to SAP S/4HANA', owner: 'Mike Torres (Tech Lead)' },
      { week: 32, task: 'Cross-plant production load balancing: AI-recommended work distribution across facilities', owner: 'Priya Sharma (ML Engineering)' },
      { week: 33, task: 'Energy consumption optimization: ML models for reducing power usage during off-peak production', owner: 'Priya Sharma (ML Engineering)' },
      { week: 34, task: 'AutoCAD workflow automation: AI-assisted drawing generation and design review', owner: 'Jason Park (DevOps)' },
      { week: 35, task: 'Data quality reconciliation: validate cross-plant data consistency in unified schema', owner: 'Priya Sharma (ML Engineering)' },
      { week: 36, task: 'Q3 close: all 4 plants on predictive maintenance, production scheduling AI live, SAP unified', owner: 'Sarah Chen (Engagement Lead)' },
    ],
  },
  {
    quarter: 'Q4',
    title: 'Full AI-Native Manufacturing Operations',
    items: ['Digital twin deployment', 'Complete system integration', 'Cross-plant optimization live'],
    status: 'upcoming' as const,
    weekPlan: [
      { week: 37, task: 'Digital twin pilot: real-time virtual model of Atlas Precision production line', owner: 'Mike Torres (Tech Lead)' },
      { week: 38, task: 'Supplier risk monitoring full deployment: all 200+ suppliers tracked with automated alerts', owner: 'Priya Sharma (ML Engineering)' },
      { week: 39, task: 'Cross-plant capacity optimization: AI-driven allocation across 4 facilities for large orders', owner: 'Priya Sharma (ML Engineering)' },
      { week: 40, task: 'Energy and sustainability reporting: automated carbon tracking and ESG compliance', owner: 'Jason Park (DevOps)' },
      { week: 41, task: 'Automation wave 3: warranty claims, customer quality portals, field service scheduling', owner: 'Jason Park (DevOps)' },
      { week: 42, task: 'Full SAP landscape validation: all 4 plants on unified instance, master data harmonized', owner: 'Mike Torres (Tech Lead)' },
      { week: 43, task: 'AI-native manufacturing stack validation: all systems integrated, real-time dashboards operational', owner: 'Jason Park (DevOps)' },
      { week: 44, task: 'Knowledge transfer: plant engineers and IT team trained on AI tools, runbooks complete', owner: 'Sarah Chen (Engagement Lead)' },
      { week: 45, task: 'Final ROI validation: actual vs projected savings across all 4 plants', owner: 'Sarah Chen (Engagement Lead)' },
      { week: 46, task: 'Board presentation: transformation metrics, EBITDA impact, capacity gains, Year 2 roadmap', owner: 'Sarah Chen (Engagement Lead)' },
      { week: 47, task: 'Hypercare period: 30-day post-deployment monitoring across all facilities', owner: 'Mike Torres (Tech Lead)' },
      { week: 48, task: 'Engagement close: AI-native manufacturing operational, $5.1M Year 1 savings confirmed', owner: 'Sarah Chen (Engagement Lead)' },
    ],
  },
];

const atlasTopOpportunities: Opportunity[] = [
  { name: 'Predictive Maintenance', category: 'Workflow Automation', savings: 1_200_000, effort: 'High', status: 'identified', priority: 10, timeToValue: 14, confidence: 82 },
  { name: 'Cross-Plant Inventory Consolidation', category: 'Data Infrastructure', savings: 880_000, effort: 'High', status: 'identified', priority: 9, timeToValue: 18, confidence: 79 },
  { name: 'Quality Inspection AI', category: 'Workflow Automation', savings: 720_000, effort: 'Medium', status: 'identified', priority: 9, timeToValue: 12, confidence: 85 },
  { name: 'Production Scheduling Optimization', category: 'Workflow Automation', savings: 640_000, effort: 'High', status: 'identified', priority: 8, timeToValue: 16, confidence: 76 },
  { name: 'Supplier Risk Monitoring', category: 'Data Infrastructure', savings: 480_000, effort: 'Medium', status: 'identified', priority: 7, timeToValue: 10, confidence: 80 },
  { name: 'Unused License Reclamation', category: 'License Audit', savings: 1_400_000, effort: 'Low', status: 'in-progress', priority: 10, timeToValue: 3, confidence: 96 },
  { name: 'Energy Consumption Optimization', category: 'Workflow Automation', savings: 380_000, effort: 'Medium', status: 'identified', priority: 6, timeToValue: 14, confidence: 72 },
  { name: 'SAP Instance Harmonization', category: 'Tech Stack', savings: 520_000, effort: 'High', status: 'in-progress', priority: 8, timeToValue: 20, confidence: 74 },
  { name: 'Automated Receiving & Shipping', category: 'Workflow Automation', savings: 290_000, effort: 'Low', status: 'identified', priority: 5, timeToValue: 8, confidence: 88 },
  { name: 'Demand Forecasting AI', category: 'Workflow Automation', savings: 410_000, effort: 'Medium', status: 'identified', priority: 7, timeToValue: 12, confidence: 78 },
];

const atlasCurrentStack: CurrentTool[] = [
  {
    name: 'SAP S/4HANA',
    category: 'ERP & Production',
    annualCost: 1_200_000,
    users: 680,
    score: 6,
    integrationComplexity: 'High',
    migrationWeeks: 0,
    riskLevel: 'Medium',
    dependencies: ['Production planning', 'Material management', 'Financial consolidation', 'Quality management', 'Plant maintenance'],
  },
  {
    name: 'Siemens MindSphere',
    category: 'Industrial IoT',
    annualCost: 480_000,
    users: 120,
    score: 5,
    integrationComplexity: 'High',
    migrationWeeks: 0,
    riskLevel: 'Low',
    dependencies: ['Sensor data collection', 'Equipment monitoring', 'OEE tracking', 'Energy monitoring'],
  },
  {
    name: 'Jira',
    category: 'Project & Issue Tracking',
    annualCost: 180_000,
    users: 300,
    score: 7,
    integrationComplexity: 'Low',
    migrationWeeks: 0,
    riskLevel: 'Low',
    dependencies: ['Engineering change orders', 'Maintenance work orders', 'IT service management', 'Quality NCR tracking'],
  },
  {
    name: 'AutoCAD',
    category: 'Engineering & Design',
    annualCost: 560_000,
    users: 200,
    score: 5,
    integrationComplexity: 'Medium',
    migrationWeeks: 0,
    riskLevel: 'Low',
    dependencies: ['Part design', 'Tool design', 'Plant layout', 'Fixture design', 'Drawing revision control'],
  },
  {
    name: 'Microsoft 365',
    category: 'Productivity & Collaboration',
    annualCost: 840_000,
    users: 2_100,
    score: 6,
    integrationComplexity: 'Low',
    migrationWeeks: 0,
    riskLevel: 'Low',
    dependencies: ['Email', 'Document management', 'SharePoint sites', 'Teams collaboration'],
  },
  {
    name: 'Slack',
    category: 'Communication',
    annualCost: 240_000,
    users: 1_200,
    score: 7,
    integrationComplexity: 'Low',
    migrationWeeks: 0,
    riskLevel: 'Low',
    dependencies: ['Plant floor communication', 'Engineering collaboration', 'IT alerts', 'Cross-plant coordination'],
  },
];

const atlasLicenses: License[] = [
  { vendor: 'SAP S/4HANA', totalLicenses: 680, active90d: 420, inactive: 260, annualWaste: 780_000, action: 'Reclaim 260 seats + harmonize 2 legacy MES plants onto SAP', costPerLicense: 3_000, department: 'Manufacturing & Finance (all plants)', lastAuditDate: '2025-09-28', trend: [80, 74, 68, 64, 60, 56], complianceRisk: false },
  { vendor: 'AutoCAD', totalLicenses: 200, active90d: 85, inactive: 115, annualWaste: 460_000, action: 'Reclaim 115 seats — restrict to engineering departments only', costPerLicense: 4_000, department: 'Engineering (provisioned to all managers)', lastAuditDate: '2025-10-15', trend: [72, 64, 56, 50, 44, 40], complianceRisk: false },
  { vendor: 'Microsoft 365', totalLicenses: 2_100, active90d: 1_700, inactive: 400, annualWaste: 480_000, action: 'Reclaim 400 seats + downgrade 300 E5→E1 for plant floor', costPerLicense: 1_200, department: 'IT / All Plants', lastAuditDate: '2025-11-20', trend: [88, 84, 82, 80, 78, 76], complianceRisk: false },
  { vendor: 'Jira', totalLicenses: 300, active90d: 180, inactive: 120, annualWaste: 144_000, action: 'Reclaim 120 seats — consolidate to engineering and IT only', costPerLicense: 1_200, department: 'Engineering & IT (provisioned broadly)', lastAuditDate: '2025-08-10', trend: [82, 76, 70, 66, 62, 58], complianceRisk: false },
  { vendor: 'Slack Enterprise', totalLicenses: 1_200, active90d: 900, inactive: 300, annualWaste: 360_000, action: 'Downgrade 300 inactive to free tier', costPerLicense: 1_200, department: 'IT / All Plants', lastAuditDate: '2026-01-08', trend: [90, 86, 82, 78, 74, 72], complianceRisk: false },
  { vendor: 'Siemens MindSphere', totalLicenses: 120, active90d: 80, inactive: 40, annualWaste: 120_000, action: 'Reclaim 40 unused plant licenses, optimize data tier', costPerLicense: 3_000, department: 'Plant Operations & Engineering', lastAuditDate: '2025-07-25', trend: [85, 78, 72, 68, 64, 62], complianceRisk: false },
  { vendor: 'MATLAB / Simulink', totalLicenses: 40, active90d: 12, inactive: 28, annualWaste: 56_000, action: 'Reclaim 28 seats — restrict to R&D team only', costPerLicense: 2_000, department: 'R&D & Quality Engineering', lastAuditDate: '2025-06-30', trend: [65, 55, 48, 42, 36, 32], complianceRisk: false },
];

const atlasWorkflowSummary = {
  total: 52,
  fullyAutomatable: 14,
  humanInLoop: 26,
  humanRequired: 12,
  currentLaborSpend: 8_400_000,
  potentialSavings: 3_800_000,
};

const atlasRoiSummary = {
  techStackSavings: 2_100_000,
  workflowAutomation: 3_800_000,
  licenseRecovery: 2_400_000,
  implementationCosts: 3_200_000,
  netYear1: 5_100_000,
  year2Projected: 7_600_000,
};

// ═══════════════════════════════════════════════════════════════════════════════
// ─── Northbridge Industries Group (Conglomerate) ─────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

const northbridgeCompanyProfile = {
  name: 'Northbridge Industries Group',
  industry: 'Diversified Industrial',
  employees: 42_000,
  revenue: '$18.2B',
  opCos: 12,
  opCoNames: ['NB Aerospace', 'NB Energy Systems', 'NB Financial Services', 'NB Health Sciences', 'NB Defense & Security', 'NB Advanced Materials', 'NB Maritime', 'NB Infrastructure', 'NB AgriTech', 'NB Digital', 'NB Logistics', 'NB Real Estate Holdings'],
  techSpend: '$142M/yr',
  aiReadinessScore: 52,
  holdingPeriod: 'Public company, Fortune 500',
  ebitdaMargin: '16.8%',
  targetEbitdaMargin: '24%',
};

const northbridgeAiReadinessBreakdown = [
  { category: 'Data Infrastructure', score: 58, maxScore: 100, status: 'Moderate — centralized data lake exists for 4 of 12 OpCos, remaining 8 operate siloed ERP instances with limited API connectivity' },
  { category: 'Process Maturity', score: 48, maxScore: 100, status: 'Below Average — 184 workflows mapped across 12 OpCos, only 48 automated, significant manual handoffs in procurement and maintenance' },
  { category: 'Tech Stack Modernity', score: 55, maxScore: 100, status: 'Mixed — SAP S/4HANA Cloud deployed in 6 OpCos, legacy systems persist in remaining 6, Snowflake data lake partially operational' },
  { category: 'Change Readiness', score: 45, maxScore: 100, status: 'Moderate — C-suite fully committed to AI transformation, but adoption risk in 5 of 12 OpCos with entrenched legacy processes' },
  { category: 'Skills & Training', score: 52, maxScore: 100, status: 'Developing — central AI CoE with 18 data scientists, but OpCo-level AI literacy below target, training programs in early stages across 42,000 employees' },
];

const northbridgeKpis = {
  totalSavings: 24_800_000,
  techScoreBefore: 52,
  techScoreAfter: 88,
  workflowsAnalyzed: 184,
  automationReady: 48,
  unusedLicenseWaste: 4_200_000,
  savingsSparkline: [0, 2_400_000, 6_200_000, 11_800_000, 16_400_000, 20_100_000, 22_800_000, 24_800_000],
  scoreSparkline: [52, 58, 64, 70, 76, 82, 86, 88],
  workflowSparkline: [0, 22, 48, 82, 110, 140, 168, 184],
  licenseSparkline: [4_200_000, 3_600_000, 2_800_000, 2_100_000, 1_400_000, 900_000, 600_000, 480_000],
  headcountImpactSparkline: [0, -8, -22, -48, -80, -120, -156, -184],
};

const northbridgeRoadmapPhases = [
  {
    quarter: 'Q1 2026',
    title: 'Cross-OpCo Data Unification',
    items: ['Enterprise data lake consolidation', 'Master data management rollout', 'API gateway deployment across 12 OpCos'],
    status: 'active' as const,
    weekPlan: [
      { week: 1, task: 'Enterprise data strategy kickoff with all 12 OpCo CIOs', owner: 'Chief Data Officer' },
      { week: 2, task: 'Snowflake data lake schema unification for remaining 8 OpCos', owner: 'Data Engineering Lead' },
      { week: 3, task: 'SAP Master Data Governance deployment for cross-OpCo entity resolution', owner: 'ERP Program Director' },
      { week: 4, task: 'API gateway (Apigee) provisioning for all OpCo system interconnects', owner: 'Enterprise Architecture' },
      { week: 5, task: 'Data quality baseline assessment across 12 OpCos — 847M records audited', owner: 'Data Engineering Lead' },
      { week: 6, task: 'Real-time data pipeline deployment: SAP CDC → Snowflake for first 6 OpCos', owner: 'Data Engineering Lead' },
      { week: 7, task: 'Cross-OpCo procurement data harmonization — 42,000 supplier records deduplicated', owner: 'Procurement Analytics' },
      { week: 8, task: 'Executive data dashboard go-live: real-time P&L across all 12 OpCos', owner: 'Chief Data Officer' },
    ],
  },
  {
    quarter: 'Q2 2026',
    title: 'ERP & IoT Platform Consolidation',
    items: ['SAP S/4HANA migration for remaining OpCos', 'Siemens Xcelerator IoT integration', 'ServiceNow ITSM unification'],
    status: 'active' as const,
    weekPlan: [
      { week: 9, task: 'SAP S/4HANA migration wave 2: NB Maritime + NB Infrastructure + NB AgriTech', owner: 'ERP Program Director' },
      { week: 10, task: 'Siemens Xcelerator IoT sensor deployment across 340 manufacturing facilities', owner: 'IoT Program Manager' },
      { week: 11, task: 'ServiceNow ITSM consolidation: merge 8 separate ITSM instances into one', owner: 'IT Operations Director' },
      { week: 12, task: 'Workday HCM data migration for NB Defense & NB Maritime (8,400 employees)', owner: 'HR Systems Lead' },
    ],
  },
  {
    quarter: 'Q2-Q3 2026',
    title: '184 Workflows Across 12 OpCos',
    items: ['Procurement automation', 'Maintenance workflow AI', 'Finance close automation'],
    status: 'upcoming' as const,
    weekPlan: [
      { week: 13, task: 'Procurement workflow automation: PO matching, vendor onboarding, spend analytics across all OpCos', owner: 'Procurement Analytics' },
      { week: 14, task: 'Predictive maintenance AI deployment across 340 manufacturing sites', owner: 'IoT Program Manager' },
      { week: 15, task: 'Financial close automation: intercompany eliminations, consolidation, reporting', owner: 'Finance Transformation Lead' },
      { week: 16, task: 'HR workflow automation: recruiting, onboarding, performance management across 42,000 employees', owner: 'HR Systems Lead' },
    ],
  },
  {
    quarter: 'Q3 2026',
    title: 'AI Decision Layer for Procurement & Maintenance',
    items: ['Procurement AI optimization', 'Predictive maintenance fleet', 'Supply chain intelligence'],
    status: 'upcoming' as const,
    weekPlan: [
      { week: 17, task: 'Cross-OpCo procurement AI: automated vendor selection, price optimization, demand forecasting', owner: 'Chief Data Officer' },
      { week: 18, task: 'Predictive maintenance fleet: AI-driven equipment lifecycle management across all OpCos', owner: 'IoT Program Manager' },
      { week: 19, task: 'Supply chain optimization: real-time logistics AI, inventory rebalancing across 12 OpCos', owner: 'Supply Chain Director' },
      { week: 20, task: 'Clinical trial data pipeline for NB Health Sciences — FDA submission automation', owner: 'Health Sciences IT Director' },
    ],
  },
  {
    quarter: 'Q4 2026',
    title: 'Enterprise-Wide Adoption Across 42,000 Employees',
    items: ['AI training at scale', 'Full stack operational', 'Year 2 roadmap planning'],
    status: 'upcoming' as const,
    weekPlan: [
      { week: 21, task: 'AI literacy training rollout: 42,000 employees across 12 OpCos in 8-week program', owner: 'Chief Learning Officer' },
      { week: 22, task: 'Full AI-native stack validation: all systems integrated, monitoring live', owner: 'Enterprise Architecture' },
      { week: 23, task: 'Board presentation: $24.8M Year 1 savings confirmed, Year 2 roadmap ($42M target)', owner: 'Chief Data Officer' },
      { week: 24, task: 'Hypercare and continuous improvement: AI model retraining, process optimization', owner: 'AI CoE Director' },
    ],
  },
];

const northbridgeTopOpportunities: Opportunity[] = [
  { name: 'Cross-OpCo Procurement Consolidation', category: 'Procurement', savings: 5_200_000, effort: 'High', status: 'in-progress', priority: 10, timeToValue: 12, confidence: 88 },
  { name: 'Predictive Maintenance Fleet', category: 'Manufacturing', savings: 3_600_000, effort: 'High', status: 'automated', priority: 9, timeToValue: 16, confidence: 84 },
  { name: 'Financial Close Automation', category: 'Finance', savings: 3_200_000, effort: 'Medium', status: 'in-progress', priority: 9, timeToValue: 10, confidence: 91 },
  { name: 'Supply Chain Optimization', category: 'Supply Chain', savings: 4_800_000, effort: 'High', status: 'identified', priority: 8, timeToValue: 20, confidence: 76 },
  { name: 'Clinical Trial Data Pipeline', category: 'Health Sciences', savings: 2_400_000, effort: 'High', status: 'identified', priority: 7, timeToValue: 18, confidence: 72 },
  { name: 'Enterprise License Consolidation', category: 'License Audit', savings: 4_200_000, effort: 'Low', status: 'in-progress', priority: 10, timeToValue: 4, confidence: 96 },
  { name: 'HR Process Automation', category: 'HR', savings: 1_800_000, effort: 'Medium', status: 'identified', priority: 6, timeToValue: 8, confidence: 88 },
  { name: 'Customer Experience AI', category: 'Sales', savings: 2_200_000, effort: 'Medium', status: 'identified', priority: 7, timeToValue: 14, confidence: 80 },
];

const northbridgeCurrentStack: CurrentTool[] = [
  { name: 'SAP S/4HANA Cloud', category: 'ERP', annualCost: 12_400_000, users: 8_200, score: 6, integrationComplexity: 'High', migrationWeeks: 48, riskLevel: 'High', dependencies: ['Finance', 'Procurement', 'Manufacturing', 'Supply Chain'] },
  { name: 'Workday', category: 'HR/Finance', annualCost: 6_800_000, users: 42_000, score: 7, integrationComplexity: 'Medium', migrationWeeks: 24, riskLevel: 'Medium', dependencies: ['HR', 'Payroll', 'Benefits', 'Workforce Planning'] },
  { name: 'Palantir Foundry', category: 'Analytics', annualCost: 4_200_000, users: 840, score: 5, integrationComplexity: 'High', migrationWeeks: 20, riskLevel: 'Medium', dependencies: ['Executive Analytics', 'Operational Intelligence', 'Supply Chain Visibility'] },
  { name: 'Salesforce Enterprise', category: 'CRM', annualCost: 8_400_000, users: 4_200, score: 6, integrationComplexity: 'Medium', migrationWeeks: 16, riskLevel: 'Medium', dependencies: ['Sales Pipeline', 'Customer Master', 'Revenue Operations'] },
  { name: 'Siemens Xcelerator', category: 'Industrial IoT', annualCost: 3_200_000, users: 480, score: 4, integrationComplexity: 'High', migrationWeeks: 32, riskLevel: 'High', dependencies: ['Manufacturing IoT', 'Asset Management', 'Predictive Maintenance'] },
  { name: 'ServiceNow', category: 'IT/Ops', annualCost: 5_600_000, users: 2_100, score: 7, integrationComplexity: 'Medium', migrationWeeks: 12, riskLevel: 'Low', dependencies: ['IT Service Management', 'Change Management', 'Incident Response'] },
  { name: 'Snowflake', category: 'Data Lake', annualCost: 2_800_000, users: 1_200, score: 8, integrationComplexity: 'Low', migrationWeeks: 8, riskLevel: 'Low', dependencies: ['Data Warehousing', 'ML Model Training', 'Cross-OpCo Analytics'] },
  { name: 'Azure AD', category: 'Identity', annualCost: 1_800_000, users: 42_000, score: 8, integrationComplexity: 'Low', migrationWeeks: 4, riskLevel: 'Low', dependencies: ['SSO', 'MFA', 'Conditional Access', 'Identity Governance'] },
];

const northbridgeLicenses: License[] = [
  { vendor: 'SAP S/4HANA', totalLicenses: 2400, active90d: 1680, inactive: 720, annualWaste: 3_800_000, action: 'Reclaim 720 seats + optimize license tiers across 12 OpCos', costPerLicense: 5_280, department: 'Enterprise / All OpCos', lastAuditDate: '2026-01-15', trend: [82, 76, 72, 68, 64, 70], complianceRisk: false },
  { vendor: 'Salesforce', totalLicenses: 4200, active90d: 3100, inactive: 1100, annualWaste: 2_200_000, action: 'Reclaim 1,100 seats + consolidate 4 Salesforce orgs into 1', costPerLicense: 2_000, department: 'Sales & Revenue Operations', lastAuditDate: '2026-02-01', trend: [85, 80, 76, 72, 70, 74], complianceRisk: false },
  { vendor: 'Workday', totalLicenses: 1800, active90d: 1420, inactive: 380, annualWaste: 1_400_000, action: 'Reclaim 380 seats from terminated/transferred employees', costPerLicense: 3_680, department: 'HR / All OpCos', lastAuditDate: '2025-12-20', trend: [90, 86, 82, 80, 78, 79], complianceRisk: false },
  { vendor: 'Palantir Foundry', totalLicenses: 340, active90d: 180, inactive: 160, annualWaste: 840_000, action: 'Reclaim 160 seats — restrict to active analysts only', costPerLicense: 5_250, department: 'Analytics / Executive', lastAuditDate: '2026-01-08', trend: [68, 60, 55, 50, 48, 53], complianceRisk: true },
  { vendor: 'ServiceNow', totalLicenses: 2100, active90d: 1800, inactive: 300, annualWaste: 420_000, action: 'Downgrade 300 inactive to read-only tier', costPerLicense: 1_400, department: 'IT Operations / All OpCos', lastAuditDate: '2026-02-10', trend: [92, 90, 88, 86, 85, 86], complianceRisk: false },
  { vendor: 'Siemens Xcelerator', totalLicenses: 480, active90d: 320, inactive: 160, annualWaste: 380_000, action: 'Reclaim 160 seats from non-manufacturing OpCos', costPerLicense: 2_375, department: 'Manufacturing & Engineering', lastAuditDate: '2025-11-15', trend: [78, 72, 68, 65, 64, 67], complianceRisk: false },
];

const northbridgeWorkflowSummary = {
  total: 184,
  fullyAutomatable: 48,
  humanInLoop: 94,
  humanRequired: 42,
  currentLaborSpend: 48_000_000,
  potentialSavings: 24_800_000,
};

const northbridgeRoiSummary = {
  techStackSavings: 6_400_000,
  workflowAutomation: 8_200_000,
  licenseRecovery: 4_600_000,
  implementationCosts: 8_200_000,
  netYear1: 24_800_000,
  year2Projected: 42_000_000,
};

// ═══════════════════════════════════════════════════════════════════════════════
// ─── Republic of Estonia — Digital Government (Sovereign) ────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

const estoniaCompanyProfile = {
  name: 'Republic of Estonia — Digital Government',
  industry: 'Digital Government',
  employees: 28_500,
  revenue: '\u20AC12.4B budget',
  opCos: 8,
  opCoNames: ['Ministry of Finance', 'Ministry of Economic Affairs', 'Ministry of Social Affairs', 'Ministry of Justice', 'Ministry of Education', 'Ministry of Defence', 'Ministry of Environment', 'Ministry of Interior'],
  techSpend: '€84M/yr',
  aiReadinessScore: 68,
  holdingPeriod: 'Sovereign government',
  ebitdaMargin: 'N/A',
  targetEbitdaMargin: 'N/A',
};

const estoniaAiReadinessBreakdown = [
  { category: 'Data Infrastructure', score: 78, maxScore: 100, status: 'Strong — X-Road 7.0 data exchange layer connects 900+ government services, 99.9% uptime, real-time cross-ministry data access' },
  { category: 'Process Maturity', score: 65, maxScore: 100, status: 'Above Average — 99% of government services digitized, but 126 workflows still require manual intervention across 8 ministries' },
  { category: 'Tech Stack Modernity', score: 72, maxScore: 100, status: 'Advanced — X-Road, eID, and RIHA form a modern digital backbone, though legacy systems persist in Social Affairs and Justice ministries' },
  { category: 'Change Readiness', score: 58, maxScore: 100, status: 'Moderate — strong political will for AI-native governance, but civil service adoption varies across ministries, training needed for 28,500 employees' },
  { category: 'Skills & Training', score: 62, maxScore: 100, status: 'Developing — AI CoE established at e-Governance Academy, but ministry-level AI skills below target, recruitment competing with private sector' },
];

const estoniaKpis = {
  totalSavings: 18_600_000,
  techScoreBefore: 68,
  techScoreAfter: 94,
  workflowsAnalyzed: 126,
  automationReady: 62,
  unusedLicenseWaste: 2_800_000,
  savingsSparkline: [0, 1_800_000, 4_600_000, 8_200_000, 12_100_000, 15_400_000, 17_200_000, 18_600_000],
  scoreSparkline: [68, 72, 76, 80, 84, 88, 92, 94],
  workflowSparkline: [0, 16, 34, 58, 78, 96, 112, 126],
  licenseSparkline: [2_800_000, 2_400_000, 1_800_000, 1_300_000, 900_000, 600_000, 400_000, 320_000],
  headcountImpactSparkline: [0, -4, -12, -28, -46, -68, -88, -102],
};

const estoniaRoadmapPhases = [
  {
    quarter: 'Q1 2026',
    title: 'X-Road AI Gateway Deployment',
    items: ['AI gateway for X-Road 7.0', 'Cross-ministry data harmonization planning', 'Citizen service audit'],
    status: 'active' as const,
    weekPlan: [
      { week: 1, task: 'X-Road AI gateway architecture review with RIA (Information System Authority)', owner: 'CTO, Government Digital Office' },
      { week: 2, task: 'AI service registry deployment on RIHA — cataloging all 900+ government services for AI readiness', owner: 'RIHA Program Director' },
      { week: 3, task: 'Cross-ministry data quality audit: 8 ministries, 2,400 datasets, 128M citizen records', owner: 'Chief Data Officer' },
      { week: 4, task: 'eID/Smart-ID integration testing for AI-authenticated citizen service automation', owner: 'eID Program Manager' },
      { week: 5, task: 'Privacy impact assessment for AI processing of citizen data — GDPR + Estonian Data Protection Act compliance', owner: 'Data Protection Officer' },
      { week: 6, task: 'Tax compliance AI pilot: automated income verification across 680,000 annual tax returns', owner: 'Tax & Customs Board IT' },
      { week: 7, task: 'Healthcare data pipeline: TEHIK integration for cross-ministry health record access via X-Road', owner: 'TEHIK Director' },
      { week: 8, task: 'Q1 readout: X-Road AI gateway operational, tax compliance pilot showing 94% accuracy', owner: 'CTO, Government Digital Office' },
    ],
  },
  {
    quarter: 'Q1-Q2 2026',
    title: 'Cross-Ministry Data Harmonization',
    items: ['Ministry data schema unification', 'Legacy system modernization', 'AI training data preparation'],
    status: 'active' as const,
    weekPlan: [
      { week: 9, task: 'Ministry of Finance + Economic Affairs data schema harmonization via X-Road', owner: 'Chief Data Officer' },
      { week: 10, task: 'Legacy system assessment: Ministry of Social Affairs (custom legacy) and Justice (Oracle-based)', owner: 'Enterprise Architecture' },
      { week: 11, task: 'PostgreSQL migration planning for legacy Oracle databases in Justice ministry', owner: 'Database Migration Lead' },
      { week: 12, task: 'AI training data preparation: anonymization pipeline for citizen data per GDPR Art. 89', owner: 'Data Protection Officer' },
    ],
  },
  {
    quarter: 'Q2-Q3 2026',
    title: '126 Government Workflows',
    items: ['Tax automation expansion', 'Citizen services AI', 'Healthcare records integration'],
    status: 'upcoming' as const,
    weekPlan: [
      { week: 13, task: 'Tax compliance full automation: all income, corporate, and VAT processing via AI pipeline', owner: 'Tax & Customs Board IT' },
      { week: 14, task: 'Citizen services AI assistants: 24/7 multilingual (Estonian, Russian, English) government service chatbot', owner: 'Citizen Services Director' },
      { week: 15, task: 'Healthcare records integration: unified patient timeline across all providers via TEHIK + X-Road', owner: 'TEHIK Director' },
      { week: 16, task: 'Cross-ministry procurement optimization: centralized AI-driven purchasing across 8 ministries', owner: 'Public Procurement Office' },
    ],
  },
  {
    quarter: 'Q3 2026',
    title: 'Citizen Service AI Assistants',
    items: ['AI-powered citizen portal', 'Proactive government services', 'Multilingual support'],
    status: 'upcoming' as const,
    weekPlan: [
      { week: 17, task: 'AI citizen portal launch: proactive notification of eligible government services based on life events', owner: 'Citizen Services Director' },
      { week: 18, task: 'Automated permit processing: building permits, business licenses, residency applications', owner: 'Ministry of Interior IT' },
      { week: 19, task: 'Education system AI: automated student enrollment, transcript processing, qualification recognition', owner: 'Ministry of Education IT' },
      { week: 20, task: 'Environmental monitoring AI: automated compliance reporting, pollution tracking, forest management', owner: 'Ministry of Environment IT' },
    ],
  },
  {
    quarter: 'Q4 2026',
    title: 'Pan-Ministry Adoption & EU Interoperability',
    items: ['EU AI Act compliance', 'Cross-border interoperability', 'Full digital government'],
    status: 'upcoming' as const,
    weekPlan: [
      { week: 21, task: 'EU AI Act compliance certification for all government AI systems', owner: 'Data Protection Officer' },
      { week: 22, task: 'Cross-border interoperability: connect Estonian X-Road AI gateway to EU eIDAS 2.0 framework', owner: 'CTO, Government Digital Office' },
      { week: 23, task: 'Pan-ministry AI adoption: 28,500 civil servants trained, all 126 workflows operational', owner: 'Chief Learning Officer' },
      { week: 24, task: 'Annual review: €18.6M in savings confirmed, 94 AI readiness score achieved, EU showcase presentation', owner: 'CTO, Government Digital Office' },
    ],
  },
];

const estoniaTopOpportunities: Opportunity[] = [
  { name: 'Tax Compliance Automation', category: 'Tax & Revenue', savings: 4_200_000, effort: 'Medium', status: 'automated', priority: 10, timeToValue: 8, confidence: 94 },
  { name: 'Citizen Services AI', category: 'Citizen Services', savings: 3_800_000, effort: 'High', status: 'in-progress', priority: 9, timeToValue: 14, confidence: 86 },
  { name: 'Healthcare Records Integration', category: 'Healthcare', savings: 3_400_000, effort: 'High', status: 'in-progress', priority: 9, timeToValue: 16, confidence: 82 },
  { name: 'Cross-Ministry Data Platform', category: 'Data Infrastructure', savings: 2_800_000, effort: 'High', status: 'identified', priority: 8, timeToValue: 20, confidence: 78 },
  { name: 'Procurement Optimization', category: 'Procurement', savings: 2_100_000, effort: 'Medium', status: 'identified', priority: 7, timeToValue: 10, confidence: 84 },
  { name: 'Legacy System Modernization', category: 'Tech Stack', savings: 1_200_000, effort: 'High', status: 'identified', priority: 7, timeToValue: 24, confidence: 72 },
  { name: 'Education System Automation', category: 'Education', savings: 1_800_000, effort: 'Medium', status: 'identified', priority: 6, timeToValue: 12, confidence: 80 },
  { name: 'Environmental Compliance AI', category: 'Environment', savings: 1_400_000, effort: 'Medium', status: 'identified', priority: 5, timeToValue: 14, confidence: 76 },
];

const estoniaCurrentStack: CurrentTool[] = [
  { name: 'X-Road 7.0', category: 'Data Exchange', annualCost: 2_400_000, users: 28_500, score: 8, integrationComplexity: 'Low', migrationWeeks: 0, riskLevel: 'Low', dependencies: ['Cross-Ministry Data Exchange', 'Service Registry', 'Citizen Authentication'] },
  { name: 'RIHA', category: 'Info System Registry', annualCost: 800_000, users: 2_400, score: 7, integrationComplexity: 'Low', migrationWeeks: 0, riskLevel: 'Low', dependencies: ['Service Catalog', 'Data Asset Registry', 'Compliance Tracking'] },
  { name: 'eID / Smart-ID', category: 'Identity', annualCost: 3_200_000, users: 28_500, score: 9, integrationComplexity: 'Low', migrationWeeks: 0, riskLevel: 'Low', dependencies: ['Citizen Authentication', 'Digital Signatures', 'Cross-Border Identity'] },
  { name: 'TEHIK', category: 'Health IT', annualCost: 4_600_000, users: 8_200, score: 6, integrationComplexity: 'Medium', migrationWeeks: 16, riskLevel: 'Medium', dependencies: ['Patient Records', 'Prescription System', 'Health Insurance'] },
  { name: 'SAP', category: 'Financial Mgmt', annualCost: 3_800_000, users: 840, score: 5, integrationComplexity: 'High', migrationWeeks: 24, riskLevel: 'High', dependencies: ['Budget Management', 'Accounting', 'Financial Reporting'] },
  { name: 'Custom Legacy', category: 'Social Services', annualCost: 1_200_000, users: 3_400, score: 3, integrationComplexity: 'High', migrationWeeks: 32, riskLevel: 'High', dependencies: ['Benefits Processing', 'Social Welfare', 'Pension Management'] },
  { name: 'PostgreSQL', category: 'Database', annualCost: 600_000, users: 4_200, score: 7, integrationComplexity: 'Low', migrationWeeks: 4, riskLevel: 'Low', dependencies: ['Government Databases', 'Registry Systems', 'Audit Logging'] },
  { name: 'e-Residency Platform', category: 'Digital Identity', annualCost: 1_800_000, users: 100_000, score: 8, integrationComplexity: 'Low', migrationWeeks: 0, riskLevel: 'Low', dependencies: ['Digital Residency', 'Business Registration', 'Tax Filing'] },
];

const estoniaLicenses: License[] = [
  { vendor: 'SAP Financial Suite', totalLicenses: 840, active90d: 520, inactive: 320, annualWaste: 1_200_000, action: 'Reclaim 320 seats + evaluate open-source alternatives for smaller ministries', costPerLicense: 3_750, department: 'Ministry of Finance / Cross-Ministry', lastAuditDate: '2026-01-20', trend: [75, 70, 66, 62, 60, 62], complianceRisk: false },
  { vendor: 'Oracle Database', totalLicenses: 280, active90d: 140, inactive: 140, annualWaste: 680_000, action: 'Migrate to PostgreSQL — Oracle license elimination program', costPerLicense: 4_860, department: 'Ministry of Justice / IT', lastAuditDate: '2025-12-15', trend: [68, 60, 55, 50, 48, 50], complianceRisk: true },
  { vendor: 'Microsoft 365 E5', totalLicenses: 12000, active90d: 8400, inactive: 3600, annualWaste: 540_000, action: 'Downgrade 3,600 to E3 tier — E5 features unused by administrative staff', costPerLicense: 150, department: 'All Ministries', lastAuditDate: '2026-02-05', trend: [88, 82, 78, 74, 72, 70], complianceRisk: false },
  { vendor: 'Custom Legacy Systems', totalLicenses: 42, active90d: 18, inactive: 24, annualWaste: 380_000, action: 'Decommission 24 legacy modules — replace with X-Road microservices', costPerLicense: 15_830, department: 'Ministry of Social Affairs', lastAuditDate: '2025-11-01', trend: [62, 55, 48, 42, 40, 43], complianceRisk: true },
  { vendor: 'VMware vSphere', totalLicenses: 180, active90d: 120, inactive: 60, annualWaste: 200_000, action: 'Migrate 60 VMs to containerized deployment on Kubernetes', costPerLicense: 3_333, department: 'RIA (Information System Authority)', lastAuditDate: '2026-01-10', trend: [82, 76, 72, 68, 66, 67], complianceRisk: false },
];

const estoniaWorkflowSummary = {
  total: 126,
  fullyAutomatable: 62,
  humanInLoop: 28,
  humanRequired: 36,
  currentLaborSpend: 32_000_000,
  potentialSavings: 18_600_000,
};

const estoniaRoiSummary = {
  techStackSavings: 4_200_000,
  workflowAutomation: 6_800_000,
  licenseRecovery: 2_400_000,
  implementationCosts: 5_400_000,
  netYear1: 18_600_000,
  year2Projected: 28_000_000,
};

// ═══════════════════════════════════════════════════════════════════════════════
// ─── Company Data Lookup Maps ──────────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

type CompanyId = string;

const companyProfiles: Record<string, typeof companyProfile> = {
  meridian: companyProfile,
  oakwood: oakwoodCompanyProfile,
  pinnacle: pinnacleCompanyProfile,
  atlas: atlasCompanyProfile,
  northbridge: northbridgeCompanyProfile,
  estonia: estoniaCompanyProfile,
};

const companyAiReadiness: Record<string, typeof aiReadinessBreakdown> = {
  meridian: aiReadinessBreakdown,
  oakwood: oakwoodAiReadinessBreakdown,
  pinnacle: pinnacleAiReadinessBreakdown,
  atlas: atlasAiReadinessBreakdown,
  northbridge: northbridgeAiReadinessBreakdown,
  estonia: estoniaAiReadinessBreakdown,
};

const companyKpis: Record<string, typeof kpis> = {
  meridian: kpis,
  oakwood: oakwoodKpis,
  pinnacle: pinnacleKpis,
  atlas: atlasKpis,
  northbridge: northbridgeKpis,
  estonia: estoniaKpis,
};

const companyRoadmapPhases: Record<string, typeof roadmapPhases> = {
  meridian: roadmapPhases,
  oakwood: oakwoodRoadmapPhases,
  pinnacle: pinnacleRoadmapPhases,
  atlas: atlasRoadmapPhases,
  northbridge: northbridgeRoadmapPhases,
  estonia: estoniaRoadmapPhases,
};

const companyTopOpportunities: Record<string, Opportunity[]> = {
  meridian: topOpportunities,
  oakwood: oakwoodTopOpportunities,
  pinnacle: pinnacleTopOpportunities,
  atlas: atlasTopOpportunities,
  northbridge: northbridgeTopOpportunities,
  estonia: estoniaTopOpportunities,
};

const companyCurrentStack: Record<string, CurrentTool[]> = {
  meridian: currentStack,
  oakwood: oakwoodCurrentStack,
  pinnacle: pinnacleCurrentStack,
  atlas: atlasCurrentStack,
  northbridge: northbridgeCurrentStack,
  estonia: estoniaCurrentStack,
};

const companyLicenses: Record<string, License[]> = {
  meridian: licenses,
  oakwood: oakwoodLicenses,
  pinnacle: pinnacleLicenses,
  atlas: atlasLicenses,
  northbridge: northbridgeLicenses,
  estonia: estoniaLicenses,
};

const companyWorkflowSummaries: Record<string, typeof workflowSummary> = {
  meridian: workflowSummary,
  oakwood: oakwoodWorkflowSummary,
  pinnacle: pinnacleWorkflowSummary,
  atlas: atlasWorkflowSummary,
  northbridge: northbridgeWorkflowSummary,
  estonia: estoniaWorkflowSummary,
};

const companyRoiSummaries: Record<string, typeof roiSummary> = {
  meridian: roiSummary,
  oakwood: oakwoodRoiSummary,
  pinnacle: pinnacleRoiSummary,
  atlas: atlasRoiSummary,
  northbridge: northbridgeRoiSummary,
  estonia: estoniaRoiSummary,
};

// ═══════════════════════════════════════════════════════════════════════════════
// ─── Lookup Functions ──────────────────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

export function getCompanyProfile(companyId: CompanyId) {
  return companyProfiles[companyId] ?? companyProfiles.meridian;
}

export function getAiReadinessBreakdown(companyId: CompanyId) {
  return companyAiReadiness[companyId] ?? companyAiReadiness.meridian;
}

export function getKpis(companyId: CompanyId) {
  return companyKpis[companyId] ?? companyKpis.meridian;
}

export function getRoadmapPhases(companyId: CompanyId) {
  return companyRoadmapPhases[companyId] ?? companyRoadmapPhases.meridian;
}

export function getTopOpportunities(companyId: CompanyId) {
  return companyTopOpportunities[companyId] ?? companyTopOpportunities.meridian;
}

export function getCurrentStack(companyId: CompanyId) {
  return companyCurrentStack[companyId] ?? companyCurrentStack.meridian;
}

export function getLicenses(companyId: CompanyId) {
  return companyLicenses[companyId] ?? companyLicenses.meridian;
}

export function getWorkflowSummary(companyId: CompanyId) {
  return companyWorkflowSummaries[companyId] ?? companyWorkflowSummaries.meridian;
}

export function getRoiSummary(companyId: CompanyId) {
  return companyRoiSummaries[companyId] ?? companyRoiSummaries.meridian;
}
