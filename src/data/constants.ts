// ─── Company Profile ────────────────────────────────────────────────────────

export const companyProfile = {
  name: 'IndustrialsCo',
  industry: 'Railroad & Infrastructure Construction',
  employees: 2_800,
  opCos: 7,
  opCoNames: ['IC Construction Corp (HCC)', 'IC Rail Services (HRSI)', 'IC Services (HSI)', 'IC Technologies (HTI)', 'IC Transit Services (HTSI)', 'IC Energy', 'IC Environmental LLC'],
  techSpend: '$14.2M/yr',
  aiReadinessScore: 52,
  holdingPeriod: 'Founded 1969, 57 years in operation — 140-person technology group, TX/AZ data centers',
  ebitdaMargin: '11.8%',
  targetEbitdaMargin: '18%',
};

// ─── AI Readiness Breakdown ─────────────────────────────────────────────────

export const aiReadinessBreakdown = [
  { category: 'Data Infrastructure', score: 32, maxScore: 100, status: '18 apps across 2 data centers (TX/AZ), QMirror AS/400 bottleneck with 15-min replication lag, no unified data lake — data siloed across eCMS, HCSS, P6, and legacy systems' },
  { category: 'Process Maturity', score: 55, maxScore: 100, status: 'Mature HCSS suite for field ops, eCMS financial workflows, MCP payroll processing — gap in inter-system flat-file exchanges and batch-only integrations' },
  { category: 'Tech Stack Modernity', score: 48, maxScore: 100, status: 'Bifurcated stack — modern SaaS (HCSS Telematics, iCIMS, Procore) alongside legacy on-prem (eCMS/Computer Guidance, QMirror/AS400, MCP custom payroll)' },
  { category: 'Change Readiness', score: 68, maxScore: 100, status: '3 AI models already in production (RailSentry, Tie Inspection, HSI Ultrasonic), internal engineering teams building ML, Purview governance framework in place' },
  { category: 'Skills & Training', score: 52, maxScore: 100, status: '140-person technology group, AI/ML capability concentrated in RailSentry and inspection teams, no centralized MLOps platform or enterprise AI governance' },
];

// ─── KPI Data ───────────────────────────────────────────────────────────────

export const kpis = {
  totalSavings: 5_800_000,
  techScoreBefore: 52,
  techScoreAfter: 86,
  workflowsAnalyzed: 62,
  automationReady: 18,
  unusedLicenseWaste: 2_800_000,

  savingsSparkline: [0, 120_000, 310_000, 580_000, 920_000, 1_400_000, 2_000_000, 2_700_000, 3_500_000, 4_400_000, 5_100_000, 5_800_000],
  scoreSparkline: [52, 54, 57, 61, 65, 69, 73, 76, 79, 82, 84, 86],
  workflowSparkline: [0, 5, 11, 18, 25, 32, 38, 44, 49, 54, 58, 62],
  licenseSparkline: [2_800_000, 2_700_000, 2_550_000, 2_380_000, 2_180_000, 1_940_000, 1_700_000, 1_470_000, 1_260_000, 1_080_000, 930_000, 820_000],
  headcountImpactSparkline: [0, 0, -2, -5, -9, -14, -18, -22, -26, -30, -33, -36],
};

// ─── Roadmap Phases ─────────────────────────────────────────────────────────

export const roadmapPhases = [
  {
    quarter: 'Q1',
    title: 'Infrastructure Audit + Quick Wins on AI-Ready Systems',
    items: ['Procore AI activation', 'HCSS Telematics AI overlay', 'RailSentry MLOps pipeline', 'QMirror replacement scoping'],
    status: 'active' as const,
    weekPlan: [
      { week: 1, task: 'Kickoff & stakeholder interviews across all 7 divisions — map 18 production apps, 2 data centers (TX/AZ), 140-person tech group', owner: 'Sarah Chen (Engagement Lead)' },
      { week: 2, task: 'License usage audit: eCMS (250 seats), HCSS Suite (2,800), P6 (280), Procore (300), Business Objects (160), iCIMS (80), Heavy Bid (200)', owner: 'Jason Park (DevOps)' },
      { week: 3, task: 'Procore AI features activation — enable AI-powered project insights on existing Procore deployment (200 users, low effort)', owner: 'Mike Torres (Tech Lead)' },
      { week: 4, task: 'HCSS Telematics AI overlay scoping — predictive maintenance and route optimization from 800+ vehicle GPS/diagnostics data', owner: 'Mike Torres (Tech Lead)' },
      { week: 5, task: 'RailSentry MLOps pipeline design — model versioning, A/B testing framework, edge deployment architecture for inspection vehicles', owner: 'Priya Sharma (ML Engineering)' },
      { week: 6, task: 'QMirror AS/400 assessment — document batch replication lag (15-min), downstream dependencies, CDC replacement architecture', owner: 'Mike Torres (Tech Lead)' },
      { week: 7, task: 'License reclamation wave 1: P6 (100 inactive seats, $210K), eCMS (90 inactive, $180K), Business Objects (80 inactive, $160K)', owner: 'Jason Park (DevOps)' },
      { week: 8, task: 'Purview governance review — assess existing data governance framework for AI model deployment readiness', owner: 'Sarah Chen (Engagement Lead)' },
      { week: 9, task: 'HCSS Telematics + Equipment360 data integration assessment — map telematics-to-maintenance-order data flow for predictive maintenance', owner: 'Mike Torres (Tech Lead)' },
      { week: 10, task: 'eCMS flat-file exchange audit — document all inter-system integrations using flat files, identify CDC/API replacement candidates', owner: 'Mike Torres (Tech Lead)' },
      { week: 11, task: 'On-prem Delta Lake architecture — design lakehouse for IC TX data center, connecting eCMS + HCSS + P6 + CMMS + RailSentry', owner: 'Mike Torres (Tech Lead)' },
      { week: 12, task: 'Q1 close: $2.8M license waste identified, Procore AI live, RailSentry MLOps designed, QMirror replacement scoped', owner: 'Sarah Chen (Engagement Lead)' },
    ],
  },
  {
    quarter: 'Q2',
    title: 'Data Foundation + AI Pilots',
    items: ['QMirror → CDC pipeline', 'Lakehouse MVP (eCMS + HCSS + P6)', 'Predictive maintenance pilot', 'HSI B→A scan expansion'],
    status: 'upcoming' as const,
    weekPlan: [
      { week: 13, task: 'QMirror replacement Phase 1: deploy on-prem Kafka + Debezium for real-time CDC from AS/400 to modern data layer', owner: 'Mike Torres (Tech Lead)' },
      { week: 14, task: 'Delta Lakehouse MVP: ingest eCMS financial data + HCSS Telematics + P6 project schedules into on-prem Delta Lake (TX DC)', owner: 'Mike Torres (Tech Lead)' },
      { week: 15, task: 'HCSS Telematics AI overlay deployment: predictive maintenance models trained on Equipment360 maintenance history + telematics data', owner: 'Priya Sharma (ML Engineering)' },
      { week: 16, task: 'HSI Ultrasonic AI expansion: begin B-scan to A-scan model adaptation for broader defect detection capability', owner: 'Priya Sharma (ML Engineering)' },
      { week: 17, task: 'RailSentry MLOps pipeline deployment: model versioning, automated retraining triggers, edge deployment to inspection vehicles', owner: 'Priya Sharma (ML Engineering)' },
      { week: 18, task: 'QMirror replacement Phase 2: migrate first 3 downstream consumers from batch replication to real-time CDC streams', owner: 'Mike Torres (Tech Lead)' },
      { week: 19, task: 'Predictive maintenance pilot go-live: Equipment360 PM alerts + AI-predicted failures for HCC and HRSI fleets (800+ vehicles)', owner: 'Priya Sharma (ML Engineering)' },
      { week: 20, task: 'Lakehouse data quality validation: cross-reference eCMS project costs with P6 schedules, reconcile HCSS field production data', owner: 'Mike Torres (Tech Lead)' },
      { week: 21, task: 'HCSS Safety incident data ingestion into lakehouse — enable cross-division safety trend analysis and FRA compliance automation', owner: 'Jason Park (DevOps)' },
      { week: 22, task: 'MCP payroll data integration assessment — scope AI-powered crew scheduling optimization using MCP + HCSS timecard data', owner: 'Mike Torres (Tech Lead)' },
      { week: 23, task: 'Pilot metrics review: predictive maintenance accuracy, QMirror CDC latency reduction, RailSentry model versioning validation', owner: 'Sarah Chen (Engagement Lead)' },
      { week: 24, task: 'Q2 close: QMirror CDC live, lakehouse MVP operational, predictive maintenance pilot showing results, HSI B→A scan in progress', owner: 'Sarah Chen (Engagement Lead)' },
    ],
  },
  {
    quarter: 'Q3',
    title: 'AI Enhancement Layer',
    items: ['eCMS AI middleware', 'Crew scheduling AI on MCP', 'Heavy Bid intelligence', 'Tie Inspection edge deployment'],
    status: 'upcoming' as const,
    weekPlan: [
      { week: 25, task: 'eCMS AI middleware deployment: automated invoice matching using lakehouse data — runs alongside eCMS in IC TX data center', owner: 'Mike Torres (Tech Lead)' },
      { week: 26, task: 'eCMS project cost prediction models: train on historical eCMS + P6 data for multi-division cost forecasting', owner: 'Priya Sharma (ML Engineering)' },
      { week: 27, task: 'Crew scheduling AI pilot: optimize MCP + HCSS timecard data for intelligent crew dispatch across HCC and HRSI divisions', owner: 'Priya Sharma (ML Engineering)' },
      { week: 28, task: 'Heavy Bid AI intelligence: historical bid analysis using 5 years of Heavy Bid data, win/loss prediction model development', owner: 'Priya Sharma (ML Engineering)' },
      { week: 29, task: 'Tie Inspection AI edge deployment: deploy wood/concrete/composite classification models to field inspection devices', owner: 'Priya Sharma (ML Engineering)' },
      { week: 30, task: 'CMMS data integration into lakehouse — connect inventory records for cross-division parts forecasting and procurement optimization', owner: 'Mike Torres (Tech Lead)' },
      { week: 31, task: 'Document Intelligence pilot: AI-powered search and extraction across Prolog document control + Procore project documents', owner: 'Jason Park (DevOps)' },
      { week: 32, task: 'HCSS Safety Risk Prediction: ML models trained on HCSS Safety incident data for proactive risk scoring across job sites', owner: 'Priya Sharma (ML Engineering)' },
      { week: 33, task: 'Lakehouse expansion: ingest CMMS, RailSentry inference results, and MCP payroll data — full cross-division data foundation', owner: 'Mike Torres (Tech Lead)' },
      { week: 34, task: 'Purview AI governance framework finalization — model approval workflows, data access controls, audit trails for all AI agents', owner: 'Sarah Chen (Engagement Lead)' },
      { week: 35, task: 'Cross-division AI analytics: automated insights from eCMS + HCSS + P6 data replacing manual Business Objects reports', owner: 'Priya Sharma (ML Engineering)' },
      { week: 36, task: 'Q3 close: eCMS AI middleware live, crew scheduling AI in pilot, Heavy Bid intelligence trained, Tie Inspection edge deployed', owner: 'Sarah Chen (Engagement Lead)' },
    ],
  },
  {
    quarter: 'Q4',
    title: 'Enterprise AI Rollout',
    items: ['Full lakehouse', 'AI analytics replacing Business Objects', 'RailSentry edge deployment', 'Enterprise AI agents (Purview complete)'],
    status: 'upcoming' as const,
    weekPlan: [
      { week: 37, task: 'Full lakehouse operational: all 18 systems connected — eCMS, HCSS suite, P6, CMMS, RailSentry, MCP, Business Objects feeds', owner: 'Mike Torres (Tech Lead)' },
      { week: 38, task: 'AI analytics platform deployment: natural language query interface replacing static Business Objects dashboards (80 users)', owner: 'Priya Sharma (ML Engineering)' },
      { week: 39, task: 'RailSentry edge deployment: AI inference running on inspection vehicles with offline capability and sync-on-reconnect', owner: 'Priya Sharma (ML Engineering)' },
      { week: 40, task: 'Crew scheduling AI full rollout: MCP + HCSS optimization across all 7 divisions (2,800 employees), Purview-approved', owner: 'Mike Torres (Tech Lead)' },
      { week: 41, task: 'Enterprise AI agent activation: eCMS Invoice Intelligence, HCSS Fleet Predictor, P6 Schedule Optimizer — all Purview-governed', owner: 'Priya Sharma (ML Engineering)' },
      { week: 42, task: 'QMirror full decommission: all consumers migrated to real-time CDC pipeline, AS/400 batch replication retired', owner: 'Mike Torres (Tech Lead)' },
      { week: 43, task: 'Business Objects phase-down: migrate remaining report consumers to AI analytics platform with automated cross-division insights', owner: 'Jason Park (DevOps)' },
      { week: 44, task: 'Knowledge transfer: 140-person tech group trained on lakehouse, MLOps pipeline, and AI agent management', owner: 'Sarah Chen (Engagement Lead)' },
      { week: 45, task: 'Final ROI validation: actual vs projected AI enhancement savings — on-prem preference validated, no rip-and-replace needed', owner: 'Sarah Chen (Engagement Lead)' },
      { week: 46, task: 'Board presentation: $6.4M Year 1 savings, 3 AI models in production expanded to 8, Purview governance complete', owner: 'Sarah Chen (Engagement Lead)' },
      { week: 47, task: 'Hypercare period: 30-day post-deployment monitoring, model drift detection, lakehouse performance optimization', owner: 'Mike Torres (Tech Lead)' },
      { week: 48, task: 'Engagement close: AI-enhanced railroad operations live across all 18 systems, Year 2 advanced AI roadmap delivered', owner: 'Sarah Chen (Engagement Lead)' },
    ],
  },
];

// ─── Integration Page Interfaces ──────────────────────────────────────────

export interface AIAgent {
  name: string;
  subtitle: string;
  accuracy: number;
  metric2Label: string;
  metric2Value: number;
  metric3Label: string;
  metric3Value: string;
  overrideRate: number;
  confidenceThreshold: number;
  status: 'active' | 'piloting' | 'planned';
  lastmileAgentId: string;
}

export interface IntegrationDataSource {
  system: string;
  division: string;
  recordsAnalyzed: string;
  coverage: number;
  status: 'Complete' | 'In Progress' | 'Pending Access';
}

export interface IntegrationVendorHealth {
  name: string;
  status: 'green' | 'yellow' | 'red';
  uptime: number;
  latency: number;
  lastChecked: string;
  note?: string;
}

export interface IntegrationFailureMode {
  vendor: string;
  scenario: string;
  recovery: string;
  status: 'Passing' | 'Needs Attention';
}

export interface IntegrationMethodologyStep {
  number: number;
  title: string;
  description: string;
}

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
  { name: 'RailSentry Enhancement', category: 'Workflow Automation', savings: 1_140_000, effort: 'Medium', status: 'automated', priority: 10, timeToValue: 8, confidence: 94 },
  { name: 'Predictive Maintenance (HCSS + Equipment360)', category: 'Workflow Automation', savings: 930_000, effort: 'Medium', status: 'identified', priority: 9, timeToValue: 12, confidence: 86 },
  { name: 'Project Cost Intelligence (eCMS + P6)', category: 'Workflow Automation', savings: 810_000, effort: 'High', status: 'identified', priority: 9, timeToValue: 16, confidence: 78 },
  { name: 'Field Ops AI (HCSS Field + Heavy Job)', category: 'Workflow Automation', savings: 690_000, effort: 'Medium', status: 'identified', priority: 8, timeToValue: 12, confidence: 82 },
  { name: 'Bid Intelligence (Heavy Bid)', category: 'Workflow Automation', savings: 610_000, effort: 'Low', status: 'identified', priority: 8, timeToValue: 8, confidence: 84 },
  { name: 'Crew Scheduling (MCP + HCSS)', category: 'Workflow Automation', savings: 550_000, effort: 'Medium', status: 'identified', priority: 7, timeToValue: 14, confidence: 80 },
  { name: 'Document Intelligence (Prolog + Procore)', category: 'Workflow Automation', savings: 400_000, effort: 'Low', status: 'identified', priority: 7, timeToValue: 8, confidence: 88 },
  { name: 'HSI Ultrasonic Expansion (B→A scan)', category: 'Workflow Automation', savings: 360_000, effort: 'High', status: 'automated', priority: 8, timeToValue: 18, confidence: 76 },
  { name: 'Safety Risk Prediction (HCSS Safety)', category: 'Workflow Automation', savings: 310_000, effort: 'Low', status: 'identified', priority: 6, timeToValue: 6, confidence: 90 },
  { name: 'Real-time Data Foundation (QMirror replacement)', category: 'Data Infrastructure', savings: 0, effort: 'High', status: 'identified', priority: 10, timeToValue: 20, confidence: 92 },
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
    name: 'eCMS (Computer Guidance)',
    category: 'Construction ERP',
    annualCost: 680_000,
    users: 160,
    score: 3,
    integrationComplexity: 'High',
    migrationWeeks: 24,
    riskLevel: 'High',
    dependencies: ['Financial management', 'Project cost accounting', 'AP/AR', 'General ledger', 'Multi-division reporting'],
  },
  {
    name: 'HCSS Telematics',
    category: 'Fleet/GPS',
    annualCost: 240_000,
    users: 2_400,
    score: 7,
    integrationComplexity: 'Low',
    migrationWeeks: 4,
    riskLevel: 'Low',
    dependencies: ['Real-time GPS', 'Engine diagnostics', 'Fleet management', 'Geofencing'],
  },
  {
    name: 'Primavera P6 (Oracle)',
    category: 'Project Portfolio Management',
    annualCost: 420_000,
    users: 180,
    score: 5,
    integrationComplexity: 'High',
    migrationWeeks: 16,
    riskLevel: 'Medium',
    dependencies: ['Project scheduling', 'Resource/cost management', 'Multi-project handling', 'Critical path analysis'],
  },
  {
    name: 'Procore',
    category: 'Construction Management',
    annualCost: 280_000,
    users: 200,
    score: 8,
    integrationComplexity: 'Low',
    migrationWeeks: 4,
    riskLevel: 'Low',
    dependencies: ['Project management', 'Financial management', 'Quality/safety', 'BIM coordination'],
  },
  {
    name: 'Heavy Job (HCSS)',
    category: 'Field Ops/Job Costing',
    annualCost: 180_000,
    users: 600,
    score: 6,
    integrationComplexity: 'Medium',
    migrationWeeks: 8,
    riskLevel: 'Medium',
    dependencies: ['Timecards', 'Daily diaries', 'Production tracking', 'Budget analysis'],
  },
  {
    name: 'Heavy Bid (HCSS)',
    category: 'Estimating',
    annualCost: 160_000,
    users: 120,
    score: 6,
    integrationComplexity: 'Medium',
    migrationWeeks: 8,
    riskLevel: 'Medium',
    dependencies: ['Bid management', 'Proposals', 'Cost tracking'],
  },
  {
    name: 'Equipment360 (HCSS)',
    category: 'Fleet Maintenance',
    annualCost: 140_000,
    users: 800,
    score: 7,
    integrationComplexity: 'Low',
    migrationWeeks: 4,
    riskLevel: 'Low',
    dependencies: ['PM scheduling', 'Work orders', 'Parts inventory'],
  },
  {
    name: 'MCP (Internal)',
    category: 'Payroll/Time',
    annualCost: 320_000,
    users: 2_800,
    score: 3,
    integrationComplexity: 'High',
    migrationWeeks: 16,
    riskLevel: 'High',
    dependencies: ['Timesheets', 'Work reports', 'Invoicing', 'PTO management'],
  },
  {
    name: 'QMirror (MTL Systems)',
    category: 'Data Replication',
    annualCost: 80_000,
    users: 20,
    score: 1,
    integrationComplexity: 'High',
    migrationWeeks: 20,
    riskLevel: 'High',
    dependencies: ['AS/400 to PC database replication', 'Legacy data bridge'],
  },
  {
    name: 'Business Objects (SAP)',
    category: 'BI/Reporting',
    annualCost: 180_000,
    users: 80,
    score: 3,
    integrationComplexity: 'Medium',
    migrationWeeks: 12,
    riskLevel: 'Medium',
    dependencies: ['Dashboards', 'Ad-hoc reporting', 'Data visualization'],
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
      name: 'Legacy Field Dispatch',
      cost: 680_000,
      users: 340,
      score: 3,
      description: 'Custom-built dispatch and fleet management system from 2009, maintained by 2 internal developers. Handles crew dispatch, equipment tracking, and work order management across HCC and HRSI divisions. No mobile interface — field supervisors call dispatch center to update status. Zero integration with GPS fleet data despite HCSS Telematics tracking all 800+ vehicles. Average dispatch-to-arrival time unknown because system cannot track it. 340 users but no usage analytics to identify inactive accounts.',
    },
    recommended: {
      name: 'HCSS Equipment360 Intelligence',
      cost: 300_000,
      description: 'HCSS Equipment360\'s AI-powered fleet management platform provides real-time visibility across all 800+ vehicles and equipment assets. GPS tracking with geofencing, automated dispatch routing using ML-optimized algorithms that reduce drive time by 18% on comparable fleets. Mobile-first interface enables field crews to update work orders, capture photos, and submit safety reports from job sites. Predictive maintenance alerts based on engine diagnostics and usage patterns. Integration with proposed data lakehouse via REST API for cross-division analytics. Driver safety scoring and dash cam AI for FMCSA compliance.',
    },
    annualSavings: 380_000,
  },
  {
    current: {
      name: 'eCMS (Computer Guidance)',
      cost: 520_000,
      users: 160,
      score: 3,
      description: 'On-premise eCMS instance (Computer Guidance Corp) serving 7 divisions with 160 named users. Heavy customization for railroad project cost accounting. Report generation averages 5.1 minutes. No API layer for modern integrations — all data exchange via flat-file exports and QMirror AS/400 replication. Multi-division consolidation requires 3-day month-end close process. 160 users but SSO logs show only 92 unique logins/month.',
    },
    recommended: {
      name: 'eCMS + AI Middleware',
      cost: 240_000,
      description: 'AI middleware layer deployed alongside existing eCMS in IC data centers. Automated invoice matching reduces AP processing by 65%. Predictive project cost modeling uses historical eCMS data to forecast overruns 4-6 weeks early. Real-time API bridge enables live sync with HCSS field data, Procore project management, and proposed data lakehouse. Eliminates 3-day month-end close via automated multi-division consolidation. Mobile expense capture for field crews. Respects IC\'s on-prem preference — runs in TX/AZ data centers alongside eCMS.',
    },
    annualSavings: 280_000,
  },
  {
    current: {
      name: 'Primavera P6',
      cost: 420_000,
      users: 180,
      score: 4,
      description: 'Oracle Primavera P6 Professional with 180 licenses across HCC, HRSI, and HTI divisions. Strong CPM scheduling capability but no AI-assisted planning. 280 active projects tracked, but resource leveling is manual (project managers spend avg 6 hrs/week on schedule updates). No field mobile access — all updates must be entered from office workstations. Integration with eCMS is batch-only (nightly CSV export). 100 of 280 licenses show <2 logins/month.',
    },
    recommended: {
      name: 'Procore + AI',
      cost: 220_000,
      description: 'Procore construction management platform with AI-powered scheduling provides mobile-first project management for railroad construction. Field crews update progress directly from job sites via mobile app, eliminating office-only data entry. AI scheduling assistant optimizes resource allocation across 280+ active projects using historical performance data. Native integration with eCMS (real-time cost sync via AI middleware), HCSS Equipment360 (equipment availability), and proposed data lakehouse (predictive analytics). Automated submittals, RFI tracking, and daily log generation. Document management with AI-powered search across project archives.',
    },
    annualSavings: 200_000,
  },
  {
    current: {
      name: 'TAM-4 Rail Testing',
      cost: 240_000,
      users: 45,
      score: 4,
      description: 'IndustrialsCo\'s custom TAM-4 rail testing software processes geometry car data for track condition assessment. Handles gauge, cross-level, alignment, and surface measurements from HSI testing fleet. Software is functional but aging — built on legacy architecture with limited AI/ML integration capability. Video Track Chart and SpeedTrax modules provide visual inspection data but require manual review by 20 analysts. No automated defect detection — every anomaly flagged manually.',
    },
    recommended: {
      name: 'AI-Enhanced Inspection Platform',
      cost: 0,
      description: 'Custom AI layer built on top of existing TAM-4 data pipeline using proposed data lakehouse ML. Computer vision models (fine-tuned on 240K labeled track images) automatically detect rail surface defects, tie degradation, and gauge anomalies with >92% accuracy. LIDAR point cloud analysis for ballast profile assessment. Automated severity scoring reduces manual review time by 70% — analysts focus only on AI-flagged exceptions. Predictive models forecast track degradation 6-8 weeks ahead, enabling proactive maintenance scheduling. Integration with HCSS Equipment360 for real-time geometry car location and Procore for automatic maintenance work order generation. Zero licensing cost — runs on proposed data lakehouse compute (included in data lake cost).',
    },
    annualSavings: 520_000,
  },
  {
    current: {
      name: 'MCP (Internal)',
      cost: 340_000,
      users: 2_800,
      score: 4,
      description: 'MCP (Internal) custom payroll and time tracking system deployed across all 2,800 employees for time tracking and basic scheduling. Handles FRA hours-of-service compliance tracking for train crews and union contract rule enforcement. However, crew scheduling itself is manual — division supervisors build weekly schedules in spreadsheets, then enter into MCP for tracking. No optimization capability — supervisors rely on experience and tribal knowledge to balance crew certifications, travel time, and availability. Estimated 22% crew idle time due to suboptimal scheduling.',
    },
    recommended: {
      name: 'MCP AI Enhancement Layer',
      cost: 160_000,
      description: 'MCP AI-powered scheduling enhancement layer with railroad-specific modules for FRA hours-of-service compliance and union work rules. ML-based scheduling optimizer considers crew certifications, location, travel time, equipment availability, and fatigue risk to generate optimal weekly schedules — targeting 22% idle time reduction to <8%. Mobile app enables real-time schedule visibility, shift swaps, and availability updates. Automated compliance monitoring alerts supervisors before hours-of-service violations occur (currently caught retrospectively). Integration with HCSS Equipment360 for crew location data and eCMS for payroll sync.',
    },
    annualSavings: 180_000,
  },
  {
    current: {
      name: 'No Data Lake',
      cost: 0,
      users: 0,
      score: 1,
      description: 'Zero centralized data infrastructure across 7 divisions. Each division operates independent data silos: HCC on eCMS + Primavera, HRSI on legacy field dispatch, HSI on TAM-4 testing databases, HTI on proprietary PTC/signal systems, HTSI on transit scheduling software, Energy on standalone asset tracking, IC Environmental on environmental monitoring databases. Cross-division reporting requires manual data pulls taking 4-5 days/month. GPS/LIDAR data from rail testing generates 2TB/month but sits unanalyzed. No ability to train ML models on historical operational data — every AI initiative blocked by this gap.',
    },
    recommended: {
      name: 'Databricks',
      cost: 280_000,
      description: 'Proposed Data Lakehouse unifies all 7 division data sources via Delta Lake with ACID transactions and schema enforcement. Unity Catalog provides cross-division data governance. Purpose-built for railroad data: time-series GPS/telematics from HCSS Equipment360 (800+ vehicles), LIDAR point clouds from geometry cars, track geometry measurements from TAM-4, PTC event logs from HTI, and transit ridership data from HTSI. MLflow manages model lifecycle for predictive maintenance, defect detection, and crew optimization. Structured Streaming ingests real-time fleet telemetry. Estimated data footprint: 28TB initial load, 2.5TB/month growth. The data lake is the prerequisite for 78% of the AI initiatives on this roadmap — without it, $4.2M in workflow automation savings cannot be realized.',
    },
    annualSavings: 1_200_000,
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
    name: 'Track Inspection & Maintenance Planning',
    level: 'human-in-loop',
    currentFTEs: 18,
    currentCost: 1_260_000,
    volume: '4,200 track-miles/month inspected',
    currentTime: '3.5 hrs per track segment analysis',
    aiSolution: 'AI-enhanced track inspection using computer vision on geometry car data + LIDAR analysis. Automated defect detection and severity scoring. Human engineers review AI-flagged segments and approve maintenance plans.',
    routing: 'Human-in-the-Loop',
    routingQuote: 'Let AI find the defects so your engineers can plan the fixes',
    costShift: 'Labor $1.26M → IT $280K + Labor $500K = $480K saved',
    savings: 480_000,
    automationPercent: 55,
    details: '18 FTEs analyzing geometry car data, LIDAR scans, and visual inspection footage. 4,200 track-miles/month across Class 1 railroad customers.',
    currentProcess: [
      'HSI geometry cars collect track measurements (gauge, cross-level, alignment, surface) at speeds up to 110 mph — generating 2TB of raw data per month',
      'TAM-4 software processes raw geometry data into exception reports — flags measurements exceeding FRA Class thresholds (varies by track class 1-5)',
      'Analysts manually review Video Track Chart footage for each flagged exception — correlating visual evidence with geometry measurements (avg 3.5 hrs per 10-mile segment)',
      'Ultrasonic rail flaw detection data processed separately by different team — no integration with geometry data, creating blind spots where surface defects mask internal flaws',
      'Maintenance recommendations compiled manually in spreadsheets by senior engineers — requires cross-referencing geometry data, visual inspection, ultrasonic results, and maintenance history',
      'Recommendations sent to railroad client maintenance-of-way departments via PDF reports — no digital handoff, no automated work order generation',
      'Post-maintenance verification requires scheduling separate geometry car run — no automated before/after comparison capability',
    ],
    bottlenecks: [
      'Manual Video Track Chart review consumes 60% of analyst time — purely visual pattern recognition that AI can augment',
      'Geometry and ultrasonic data analyzed by separate teams with no integrated view — internal rail flaws beneath surface defects missed in 8% of cases',
      'LIDAR point cloud data (800GB/month) generated but largely unanalyzed — ballast profile, clearance, and vegetation encroachment assessment still done by visual inspection',
      'Senior engineer bottleneck: 3 engineers with 20+ years experience write all maintenance recommendations — 4-week backlog during peak inspection season',
      'No predictive capability — all analysis is reactive (defect already exists) rather than predictive (defect likely to develop in 6-8 weeks based on degradation trend)',
    ],
    aiArchitecture: 'Multi-modal AI pipeline on proposed data lakehouse: (1) Computer vision model (fine-tuned YOLOv8) processes Video Track Chart frames for automated defect detection — trained on 240K labeled images from 3 years of HSI inspection data. (2) Time-series anomaly detection (Prophet + Isolation Forest ensemble) on geometry measurements identifies degradation trends and predicts maintenance windows 6-8 weeks ahead. (3) LIDAR analysis module using PointNet++ for automated ballast profile assessment and clearance verification. (4) Fusion layer integrates geometry, visual, ultrasonic, and LIDAR data into unified track health score per segment. Human engineers review AI-generated maintenance plans, approve priority rankings, and customize recommendations for specific railroad client requirements.',
    implementationPlan: [
      { phase: 'Data Integration & Labeling', weeks: 'Weeks 1-4', description: 'Consolidate 3 years of geometry, visual, ultrasonic, and LIDAR data from HSI fleet into Proposed Data Lakehouse. Label 240K track images for defect detection training. Build unified track segment schema linking all data sources by milepost and timestamp.' },
      { phase: 'Model Development', weeks: 'Weeks 5-10', description: 'Train YOLOv8 defect detection model targeting >92% accuracy. Develop time-series degradation prediction models. Build LIDAR ballast analysis pipeline. Create fusion scoring algorithm integrating all data streams.' },
      { phase: 'Shadow Mode Validation', weeks: 'Weeks 11-14', description: 'Run AI pipeline in parallel with human analysts on 2,000+ track-miles. Compare AI defect detection vs human findings. Measure prediction accuracy on known maintenance outcomes. Target: <5% miss rate on critical defects.' },
      { phase: 'Graduated Production', weeks: 'Weeks 15-20', description: 'Deploy AI-assisted review for routine track classes first. Expand to higher-speed corridors after validation. Human engineers approve all AI-generated maintenance plans. Automated work order generation for approved recommendations.' },
    ],
    risks: [
      'Track image quality varies significantly with weather, lighting, and camera maintenance — degraded images may require fallback to manual review (estimated 12% of frames)',
      'FRA regulatory requirements mandate human-certified inspection reports — AI can assist but cannot replace certified track inspector sign-off',
      'Railroad client data sharing agreements may restrict use of their track data for model training — need legal review of existing HSI contracts',
      'Senior engineer buy-in critical — these are domain experts whose judgment AI augments, not replaces, must position accordingly',
    ],
    dependencies: [
      'proposed data lakehouse workspace with GPU compute for model training (estimated $15K/month during development)',
      'HSI geometry car fleet data pipeline modernization — current TAM-4 export format needs ETL connector',
      'LIDAR data storage and processing infrastructure — 800GB/month requires dedicated storage tier',
      'FRA regulatory guidance on AI-assisted inspection reporting — legal review of Part 213 requirements',
    ],
  },
  {
    name: 'Crew Scheduling & Dispatch',
    level: 'full',
    currentFTEs: 8,
    currentCost: 720_000,
    volume: '2,800 employees across 7 divisions',
    currentTime: 'Weekly manual scheduling, 22% idle time',
    aiSolution: 'AI-optimized crew scheduling considering certifications, FRA hours-of-service, union rules, travel time, and equipment availability. Automated dispatch replaces phone/radio-based coordination.',
    routing: 'Fully Automatable',
    routingQuote: 'Stop scheduling railroad crews with spreadsheets and phone calls',
    costShift: 'Labor $720K → IT $120K + Labor $180K = $420K saved',
    savings: 420_000,
    automationPercent: 75,
    details: '8 scheduling coordinators building weekly schedules manually in spreadsheets, then calling/texting crew members. 22% crew idle time due to suboptimal scheduling.',
    currentProcess: [
      'Division supervisors receive project requirements and deadlines from project managers — communicated via email and weekly planning meetings',
      'Schedulers manually build weekly crew assignments in Excel spreadsheets — cross-referencing crew certifications, equipment qualifications, and geographic assignments',
      'FRA hours-of-service compliance checked manually against MCP time records — schedulers must ensure no crew member exceeds 12-hour on-duty limits or violates rest period requirements',
      'Union work rules (UTU, IBEW, LIUNA contracts) verified manually — seniority assignments, overtime distribution, and territory restrictions',
      'Schedule distributed via group text messages and radio calls to field crews — no digital schedule visibility, changes communicated verbally',
      'Day-of adjustments (weather delays, equipment breakdowns, crew absences) handled by dispatch via phone calls — average 8 schedule changes per day across divisions',
      'Post-week reconciliation: schedulers compare planned vs actual hours in MCP, investigate variances, update next week plan — 6 hrs/week per scheduler',
    ],
    bottlenecks: [
      '22% crew idle time costs estimated $1.8M/yr in unproductive labor — caused by geographic mismatches, certification gaps, and suboptimal travel routing',
      'FRA hours-of-service violations risk: 3 violations in past 12 months resulting in $45K in fines — manual tracking cannot prevent violations when day-of schedule changes occur',
      'No optimization across divisions — HCC crew idle in Kansas while HRSI is short-staffed 80 miles away, no cross-division visibility or sharing mechanism',
      'Schedule changes create cascading conflicts: one crew absence requires average 2.4 hours of phone calls to rearrange 3-4 other assignments',
      'Zero data-driven scheduling: decisions based on supervisor intuition and personal relationships rather than optimization algorithms considering travel time, certification match, and equipment proximity',
    ],
    aiArchitecture: 'MCP AI scheduling enhancement engine with railroad-specific constraint modeling: FRA hours-of-service rules, union contract seniority and overtime provisions, crew certification matrix (42 distinct certifications tracked), equipment qualification requirements, and GPS-based travel time optimization using HCSS Equipment360 real-time vehicle positions. ML optimizer (constraint satisfaction + reinforcement learning) generates optimal weekly schedules maximizing crew utilization while respecting all regulatory and contractual constraints. Real-time rescheduling module handles day-of disruptions (weather, equipment, absence) with automated alternative crew identification and dispatch. Mobile app provides real-time schedule visibility, shift swap requests, and availability updates. Integration with MCP for automatic time record population and compliance verification.',
    implementationPlan: [
      { phase: 'Constraint Modeling', weeks: 'Weeks 1-3', description: 'Model all FRA hours-of-service rules, union contract provisions, crew certifications, and equipment qualifications in MCP AI scheduling engine. Map 42 certification types and cross-division sharing rules.' },
      { phase: 'Historical Optimization', weeks: 'Weeks 4-7', description: 'Train scheduling optimizer on 12 months of actual crew assignments and project outcomes. Identify optimization opportunities. Benchmark AI schedules against historical manual schedules.' },
      { phase: 'Pilot Deployment', weeks: 'Weeks 8-11', description: 'Deploy AI scheduling for HRSI division (340 crew members). Supervisor override capability for all AI recommendations. Measure idle time reduction, compliance improvement, and crew satisfaction.' },
      { phase: 'Full Rollout', weeks: 'Weeks 12-16', description: 'Expand to all 7 divisions (2,800 employees). Enable cross-division crew sharing. Automated dispatch via mobile app. MCP integration for real-time compliance monitoring.' },
    ],
    risks: [
      'Union resistance to AI-driven scheduling — UTU and IBEW contracts have seniority-based assignment provisions that must be strictly honored by the algorithm',
      'FRA hours-of-service compliance is safety-critical — algorithm must be validated against all Part 228 requirements before any autonomous scheduling',
      'Cross-division crew sharing requires executive mandate — division GMs have historically resisted sharing their best crews',
      'Mobile app adoption by field crews (avg age 44) — must demonstrate clear time-saving benefit within first week',
    ],
    dependencies: [
      'MCP AI enhancement module configuration (estimated 4-week setup with vendor professional services)',
      'HCSS Equipment360 GPS integration for real-time crew location data',
      'MCP (Internal) API access for time record sync and compliance data',
      'Union notification and consultation per collective bargaining agreements — minimum 60-day advance notice',
    ],
  },
  {
    name: 'Equipment Fleet Management',
    level: 'human-in-loop',
    currentFTEs: 12,
    currentCost: 960_000,
    volume: '800+ vehicles and heavy equipment',
    currentTime: 'No real-time cross-division visibility',
    aiSolution: 'HCSS fleet intelligence platform with AI-powered utilization optimization. Predictive maintenance using engine diagnostics and usage patterns. Cross-division equipment sharing with automated transfer recommendations.',
    routing: 'Human-in-the-Loop',
    routingQuote: 'You cannot optimize what you cannot see across your divisions',
    costShift: 'Labor $960K → IT $240K + Labor $340K = $380K saved',
    savings: 380_000,
    automationPercent: 50,
    details: '12 FTEs managing fleet across 7 divisions. 800+ vehicles and heavy equipment. No cross-division visibility, 18% equipment idle rate, $580K in duplicate rentals last year.',
    currentProcess: [
      'Each division maintains independent equipment tracking — HCC in Primavera P6, HRSI in legacy field dispatch, others in Excel spreadsheets',
      'Equipment location updated manually by field supervisors via end-of-day radio reports to division offices',
      'Maintenance scheduling based on calendar intervals (every 250 hours or 90 days) rather than actual condition — leads to both over-maintenance and missed failure events',
      'Equipment rental decisions made by individual division managers with no cross-division availability check — $580K in duplicate rentals identified in past 12 months',
      'Fuel consumption tracked via manual fuel card receipts — no real-time monitoring, theft detection, or efficiency analysis',
      'Equipment transfer between divisions requires 3-level approval chain averaging 4.2 days — by then the receiving division has already rented externally',
    ],
    bottlenecks: [
      '18% equipment idle rate across the fleet — approximately 144 assets sitting unused at any given time while other divisions rent equivalent equipment externally',
      'Zero predictive maintenance capability: reactive maintenance costs 3-5x more than predictive, and unplanned equipment failures cause average 2.1 day project delays',
      'No cross-division visibility: each division GM thinks they need more equipment because they cannot see what other divisions have available',
      '$580K in confirmed duplicate equipment rentals in past 12 months — actual number likely higher since tracking is manual',
      'Manual fuel tracking misses estimated $120K/yr in fuel theft and efficiency losses',
    ],
    aiArchitecture: 'HCSS Equipment360 fleet management with proposed data analytics layer. Real-time GPS tracking and geofencing for all 800+ assets. Engine diagnostic data (J1939/OBD-II) feeds ML-based predictive maintenance models trained on 3 years of maintenance records (12K work orders). Equipment utilization dashboard provides cross-division visibility with AI-generated transfer recommendations when idle assets exist within 100-mile radius of active demand. Fuel analytics: real-time consumption monitoring with anomaly detection for theft and inefficiency. Automated maintenance scheduling based on actual equipment condition (vibration analysis, oil analysis data, engine hours) rather than calendar intervals.',
    implementationPlan: [
      { phase: 'Fleet Onboarding', weeks: 'Weeks 1-4', description: 'Install HCSS hardware on all 800+ vehicles and equipment. Configure geofencing for all job sites and yards. Build unified equipment registry across 7 divisions.' },
      { phase: 'Data Integration & Modeling', weeks: 'Weeks 5-9', description: 'Connect HCSS telemetry to the proposed data lakehouse. Train predictive maintenance models on historical work orders. Build utilization analytics and cross-division matching algorithms.' },
      { phase: 'Dashboard & Recommendations', weeks: 'Weeks 10-13', description: 'Deploy executive fleet dashboard showing real-time utilization across all divisions. Enable AI-generated transfer recommendations. Implement automated rental prevention alerts.' },
      { phase: 'Optimization & Predictive', weeks: 'Weeks 14-18', description: 'Activate predictive maintenance scheduling. Deploy fuel analytics with theft detection. Implement condition-based maintenance replacing calendar-based schedules.' },
    ],
    risks: [
      'Division GM resistance to centralized fleet visibility — framing as resource optimization not oversight is critical for adoption',
      'HCSS hardware installation requires scheduled downtime for each vehicle — coordinate with project schedules to minimize operational impact',
      'Predictive maintenance models need 6+ months of HCSS telemetry data before predictions are reliable — interim period relies on historical data',
      'Heavy equipment in remote locations may have connectivity gaps — offline data caching and sync required',
    ],
    dependencies: [
      'HCSS enterprise contract (800+ vehicle tier, estimated $380K/yr including hardware)',
      'proposed data lakehouse workspace for analytics (shared with other workloads)',
      'Executive mandate for cross-division equipment sharing policy',
      'Maintenance history data export from all 7 division systems',
    ],
  },
  {
    name: 'Safety Compliance & Reporting',
    level: 'full',
    currentFTEs: 6,
    currentCost: 540_000,
    volume: '180 FRA reports/month + daily job site safety',
    currentTime: '4.2 hrs per compliance report',
    aiSolution: 'Automated FRA report generation from digital inspection data. AI-powered safety incident analysis and prevention. Real-time compliance monitoring replacing periodic manual audits.',
    routing: 'Fully Automatable',
    routingQuote: 'Automate the paperwork so your safety team can focus on keeping people safe',
    costShift: 'Labor $540K → IT $80K + Labor $140K = $320K saved',
    savings: 320_000,
    automationPercent: 70,
    details: '6 FTEs dedicated to safety compliance — FRA reporting (Form 6180), OSHA recordkeeping, state DOT filings, and internal safety audits across 7 divisions.',
    currentProcess: [
      'Field supervisors complete paper safety inspection forms daily at each job site — different forms for track work, signal/PTC, transit, and environmental operations',
      'Safety coordinators collect paper forms weekly, manually enter data into Excel tracking spreadsheets — average 3-day lag between inspection and data availability',
      'FRA Form 6180 (Railroad Accident/Incident Reports) compiled manually from incident reports, MCP time data, and medical records — 4.2 hours per report',
      'Monthly safety metrics calculated manually in Excel — lost-time incident rate, OSHA recordable rate, near-miss frequency — presented in PowerPoint at division safety meetings',
      'Annual FRA railroad safety compliance audit preparation requires 3 weeks of document assembly — physical file cabinets at each division office',
      'Drug and alcohol testing compliance (FRA Part 219) tracked in separate system with no integration to HR or scheduling systems',
    ],
    bottlenecks: [
      'Paper-based field inspection creates 3-day data lag — safety trends not visible until problems have already escalated',
      'Manual FRA reporting (4.2 hrs/report, 180/month) consumes 756 labor hours/month — purely administrative work that adds zero safety value',
      'No predictive safety analytics — all analysis is backward-looking, missing patterns that could prevent incidents',
      'Audit preparation (3 weeks annually) requires pulling physical files from 7 division offices across multiple states',
      'Drug/alcohol testing compliance tracked in isolation — scheduling conflicts with FRA hours-of-service not caught until after the fact',
    ],
    aiArchitecture: 'Mobile-first safety platform with AI analytics layer on proposed data lakehouse. Digital inspection forms via mobile app replace paper — field supervisors complete inspections with guided checklists, photo capture, and GPS-stamped submissions. Automated FRA Form 6180 generation from structured incident data with AI-assisted narrative generation (GPT-4 with FRA regulatory language fine-tuning). Predictive safety analytics: ML models (gradient boosted trees) trained on 5 years of incident data identify leading indicators — weather conditions, crew fatigue patterns, equipment age, and work type combinations that correlate with elevated risk. Real-time compliance dashboard monitoring FRA, OSHA, and state DOT requirements across all 7 divisions. Automated audit trail eliminates 3-week annual preparation.',
    implementationPlan: [
      { phase: 'Digital Form Migration', weeks: 'Weeks 1-3', description: 'Digitize all paper safety inspection forms into mobile app. Configure division-specific form templates. Train field supervisors on mobile submission workflow.' },
      { phase: 'FRA Report Automation', weeks: 'Weeks 4-7', description: 'Build automated FRA Form 6180 generation pipeline. Train AI narrative generator on 3 years of historical reports. Validate against FRA submission requirements.' },
      { phase: 'Predictive Analytics', weeks: 'Weeks 8-11', description: 'Train safety prediction models on historical incident data. Build real-time risk scoring dashboard. Configure automated alerts for elevated risk conditions.' },
      { phase: 'Compliance Dashboard', weeks: 'Weeks 12-14', description: 'Deploy unified compliance monitoring across all divisions. Automated audit trail generation. Integration with HR system for drug/alcohol testing coordination.' },
    ],
    risks: [
      'FRA regulatory requirements for report format and content must be strictly followed — AI-generated reports need human compliance officer review before submission',
      'Field crew adoption of mobile inspection app — must work offline in areas with poor cellular coverage (railroad right-of-way)',
      'Historical safety data quality varies across divisions — some divisions have comprehensive records, others have minimal documentation',
      'Predictive models must not create complacency — elevated risk scores should trigger additional precautions, not replace fundamental safety practices',
    ],
    dependencies: [
      'Mobile app development or vendor selection for safety inspection platform',
      'FRA Form 6180 submission API access (currently manual web portal upload)',
      'Historical safety data consolidation from 7 division file systems',
      'CSO LeAnna Cumber sponsorship for safety culture change management',
    ],
  },
  {
    name: 'Project Estimation & Bidding',
    level: 'human-required',
    currentFTEs: 10,
    currentCost: 1_100_000,
    volume: '~25 major bids/quarter',
    currentTime: '3-4 weeks per bid package',
    aiSolution: 'AI assists with historical cost analysis, material quantity takeoffs, and risk factor identification. Estimators focus on judgment calls, client relationships, and strategic pricing. Bid cycle drops from 3-4 weeks to 1-2 weeks.',
    routing: 'Human-Required, AI-Assisted',
    routingQuote: 'Let AI crunch the numbers so your estimators can win the deals',
    costShift: 'Labor $1.1M → IT $120K + Labor $700K = $280K saved',
    savings: 280_000,
    automationPercent: 30,
    details: '10 estimators producing bids for railroad construction, maintenance, and testing contracts across 7 divisions. Competitive, accurate bidding is critical.',
    currentProcess: [
      'Bid opportunity identified from railroad client RFP or direct solicitation — estimators manually review scope documents (avg 200-400 pages per bid package)',
      'Quantity takeoff: estimators manually calculate material quantities from engineering drawings — ballast tonnage, rail footage, tie count, signal equipment, and earthwork volumes',
      'Historical cost lookup: estimators search previous project files (stored on shared drives, inconsistently organized) for comparable work to benchmark unit costs',
      'Subcontractor solicitation: estimators contact 8-12 specialty subs for quotes on each bid — phone calls and emails with 5-7 day turnaround typical',
      'Risk assessment: senior estimators evaluate site conditions, schedule constraints, weather exposure, and client relationship factors — entirely judgment-based',
      'Bid compilation in Excel with manual cross-checks — average 3-4 weeks per major bid, 120+ line items, multiple revision cycles',
      'Win/loss analysis rarely performed — estimators move to next bid immediately, institutional learning from lost bids is near-zero',
    ],
    bottlenecks: [
      'Quantity takeoff consumes 40% of estimator time (avg 5 days per bid) — mostly mechanical calculation from drawings that AI can accelerate',
      'Historical cost data scattered across shared drives in inconsistent formats — estimators spend 1-2 days per bid searching for comparable project data',
      'No win/loss analytics: 25 bids/quarter with ~30% win rate, but zero systematic analysis of why bids are won or lost — pricing strategy based on gut feel',
      'Subcontractor quote collection (5-7 day cycle) is the critical path — no automated solicitation or historical sub pricing database',
      'Senior estimator review bottleneck: 2 senior estimators review all 25 quarterly bids — 3-week backlog during peak bid season',
    ],
    aiArchitecture: 'AI-assisted estimation platform on proposed data lakehouse with RAG pipeline for historical project data. Document ingestion: process 5 years of completed project files (cost reports, change orders, subcontractor invoices) into structured cost database indexed by work type, geography, railroad client, and track class. GPT-4 processes bid package scope documents and auto-generates preliminary quantity takeoff estimates based on drawing analysis and natural language specifications. ML-based cost estimation model (XGBoost) trained on historical project costs predicts unit rates with confidence intervals, adjusting for inflation, geography, and seasonal factors. Win/loss prediction model identifies optimal pricing strategy based on historical bid outcomes, client relationship factors, and competitive landscape. Human estimators review AI-generated quantities, apply judgment to risk factors, and make final pricing decisions.',
    implementationPlan: [
      { phase: 'Historical Data Consolidation', weeks: 'Weeks 1-5', description: 'Collect and digitize 5 years of project cost data from all divisions. Normalize into structured cost database with standardized work type taxonomy. Build searchable archive indexed by 48 cost categories.' },
      { phase: 'AI Estimation Engine', weeks: 'Weeks 6-11', description: 'Build quantity takeoff assistance using GPT-4V for drawing analysis. Train cost estimation model on historical data. Develop win/loss prediction model from 3 years of bid outcomes. Target: AI-generated estimates within 8% of final bid price.' },
      { phase: 'Estimator Training & Parallel Run', weeks: 'Weeks 12-15', description: 'Train 10 estimators on AI-assisted workflow. Run 8 bids through AI pipeline in parallel with traditional process. Measure time reduction and estimate accuracy.' },
      { phase: 'Full Deployment', weeks: 'Weeks 16-20', description: 'Deploy AI-assisted estimation for all bids. Automated sub solicitation with historical pricing. Win/loss analytics dashboard for strategic pricing decisions.' },
    ],
    risks: [
      'Bid pricing is competitively sensitive — all AI tools and data must be strictly access-controlled, no cloud-based tools that could expose pricing strategies',
      'Historical cost data includes client-specific pricing — models must not leak negotiated rates between railroad clients',
      'AI-generated quantity estimates need mandatory human verification — a material quantity error on a $50M bid could be catastrophic',
      'Estimator resistance: experienced estimators may view AI as threatening their judgment-based expertise — position as augmentation tool',
    ],
    dependencies: [
      'proposed data lakehouse workspace with document processing capability',
      'Historical project cost archive: 5 years of data from all divisions, currently in disparate file systems',
      'CFO Michael Reynolds approval for bid data access controls and security classification',
      'Estimator team commitment to 2-day training workshop and 4-week parallel evaluation',
    ],
  },
  {
    name: 'Material & Ballast Logistics',
    level: 'human-in-loop',
    currentFTEs: 14,
    currentCost: 980_000,
    volume: '2.4M tons ballast/year + rail/tie deliveries',
    currentTime: 'Manual logistics coordination',
    aiSolution: 'AI-optimized material logistics using GPS fleet data, project schedules, and quarry inventory. Automated ballast train scheduling and material pre-positioning based on predictive project needs.',
    routing: 'Human-in-the-Loop',
    routingQuote: 'Move the right material to the right place before they even ask for it',
    costShift: 'Labor $980K → IT $160K + Labor $460K = $360K saved',
    savings: 360_000,
    automationPercent: 45,
    details: '14 logistics coordinators managing ballast delivery, rail supply, tie distribution, and material pre-staging across 36 states of railroad construction operations.',
    currentProcess: [
      'Project managers submit material requests via email to logistics coordinators — specifying material type, quantity, delivery location (milepost), and required delivery date',
      'Coordinators manually check quarry/supplier inventory levels via phone calls — no real-time inventory visibility across 12 primary ballast quarries and 8 rail/tie suppliers',
      'Ballast train scheduling coordinated manually with Class 1 railroad dispatch centers — requires phone calls to obtain track windows (time slots for material delivery by rail)',
      'GPS ballast train routing optimized by experienced dispatchers based on personal knowledge of track conditions and speed restrictions — no algorithmic optimization',
      'Material delivery tracking: field crew confirms receipt via radio call to logistics office — no automated delivery confirmation or quantity verification',
      'Surplus material tracking is manual and unreliable — estimated $340K/yr in material waste from over-ordering because coordinators cannot see what is already on-site',
    ],
    bottlenecks: [
      'Track window coordination with Class 1 railroads is phone-call based — average 2.4 hours per delivery to arrange track access, schedule changes cause cascading rework',
      'No predictive material needs: logistics reacts to project manager requests rather than proactively pre-positioning based on project schedules and historical consumption patterns',
      'Quarry inventory visibility is 24-48 hours stale — coordinators over-order as buffer, creating surplus material waste estimated at $340K/yr',
      'GPS ballast train routing is experience-based not data-driven — estimated 12% improvement opportunity in delivery efficiency through route optimization',
      'No integration between Procore project schedules and material logistics — coordinators manually read project timelines to anticipate material needs',
    ],
    aiArchitecture: 'AI logistics platform on proposed data lakehouse integrating HCSS Equipment360 fleet GPS, Procore project schedules, and quarry inventory systems. Demand prediction model (LSTM neural network) forecasts material needs by project site 2-3 weeks ahead based on project schedule analysis, historical consumption patterns, and weather forecasts. Route optimization engine (modified vehicle routing problem solver) minimizes delivery cost considering track window availability, train capacity, and multi-stop delivery efficiency. Automated track window request system generates optimal delivery schedules for Class 1 railroad coordination. Real-time material tracking from quarry to job site with automated delivery confirmation via GPS geofencing. Surplus material matching: AI identifies excess material at completed sites and routes to active projects within delivery radius.',
    implementationPlan: [
      { phase: 'Data Integration', weeks: 'Weeks 1-4', description: 'Connect quarry inventory systems, HCSS Equipment360 fleet GPS, and Procore project schedules into the proposed data lakehouse. Build material demand history database from 3 years of delivery records.' },
      { phase: 'Demand Prediction', weeks: 'Weeks 5-8', description: 'Train demand forecasting model on historical consumption patterns. Build project schedule parser for automated material needs extraction. Target: predict material needs 2-3 weeks ahead with <10% variance.' },
      { phase: 'Route Optimization', weeks: 'Weeks 9-12', description: 'Deploy ballast train route optimizer. Build automated track window scheduling assistant. Integrate surplus material matching algorithm.' },
      { phase: 'Full Deployment', weeks: 'Weeks 13-16', description: 'Roll out across all HCC and HRSI projects. Automated delivery tracking and confirmation. Real-time logistics dashboard for all coordinators.' },
    ],
    risks: [
      'Class 1 railroad track window scheduling is ultimately controlled by the railroad — AI can optimize requests but cannot guarantee approvals',
      'Quarry inventory system integration varies by supplier — some quarries have digital systems, others use whiteboard tracking',
      'Weather disruptions (rain, extreme temperatures) can invalidate material delivery predictions — model must incorporate weather forecast uncertainty',
      'GPS connectivity along remote rail corridors may be intermittent — ballast train tracking needs offline capability',
    ],
    dependencies: [
      'HCSS Equipment360 GPS tracking on all ballast trains and delivery vehicles',
      'Procore project management deployment (scheduled Q3)',
      'Quarry inventory API access or data sharing agreements with 12 primary suppliers',
      'Class 1 railroad dispatch coordination protocols — need formal agreement for automated track window requests',
    ],
  },
  {
    name: 'Rail Testing & Flaw Detection',
    level: 'human-in-loop',
    currentFTEs: 20,
    currentCost: 1_800_000,
    volume: '8,400 track-miles/month tested',
    currentTime: '100% manual analysis of test data',
    aiSolution: 'AI-enhanced ultrasonic and visual rail flaw detection. Computer vision processes continuous inspection data, flagging potential defects for human verification. Reduces false-positive rate and increases detection speed.',
    routing: 'Human-in-the-Loop',
    routingQuote: 'AI sees every inch of rail — your inspectors verify the critical finds',
    costShift: 'Labor $1.8M → IT $320K + Labor $860K = $620K saved',
    savings: 620_000,
    automationPercent: 50,
    details: '20 rail testing analysts processing ultrasonic, electromagnetic, and visual inspection data from HSI testing fleet. 8,400 track-miles/month across Class 1 railroad customers.',
    currentProcess: [
      'HSI rail testing fleet (ultrasonic flaw detection cars) operates on Class 1 railroad networks testing for internal rail defects — transverse defects, detail fractures, bolt hole cracks',
      'Ultrasonic B-scan data recorded continuously at testing speeds up to 25 mph — generates massive data streams requiring real-time analysis',
      'Operators on testing cars perform initial screening of ultrasonic signals — marking potential defects for further analysis based on signal amplitude and pattern recognition',
      'Marked defects verified by walking inspectors with handheld ultrasonic equipment — expensive ground verification required for every AI or operator flag',
      'Test results compiled into FRA-mandated rail flaw reports — specific formats required for each Class 1 railroad customer',
      'Historical flaw data stored in proprietary databases per railroad customer — no cross-customer analytics or trend analysis capability',
    ],
    bottlenecks: [
      'False-positive rate on operator screening averages 34% — each false positive triggers expensive ground verification crew deployment',
      'Operator fatigue on long testing runs (8-12 hour shifts) degrades detection accuracy by estimated 15% in final 2 hours of shift',
      'No automated correlation between ultrasonic findings and visual/geometry data — defects assessed in isolation rather than in context of overall track condition',
      'Testing speed limited by operator processing capability — AI-assisted analysis could enable higher testing speeds, increasing daily coverage by 25-30%',
      'No predictive flaw growth modeling — defects identified at current state only, no forecasting of which small indications will grow to critical size',
    ],
    aiArchitecture: 'Deep learning pipeline for multi-modal rail flaw detection on proposed data lakehouse. Primary model: 1D convolutional neural network trained on 5 years of ultrasonic B-scan data (18M labeled signal segments) for automated defect classification — transverse defects, detail fractures, bolt hole cracks, and 12 additional flaw types. Signal processing layer filters rail-dependent noise patterns to reduce false positives. Fusion module integrates ultrasonic findings with geometry measurements and visual inspection data from same track segment for contextual defect assessment. Flaw growth prediction model (recurrent neural network) trained on longitudinal testing data forecasts defect progression and recommends re-test intervals. All AI detections require human verification before reporting — system designed to reduce false positives and catch defects missed by human operators, not to replace certified inspectors.',
    implementationPlan: [
      { phase: 'Data Pipeline & Labeling', weeks: 'Weeks 1-5', description: 'Build ETL pipeline for ultrasonic B-scan data into the proposed data lakehouse. Label 5 years of historical testing data (18M signal segments) with confirmed defect classifications. Create training/validation/test splits stratified by defect type and rail condition.' },
      { phase: 'Model Development', weeks: 'Weeks 6-11', description: 'Train 1D CNN for ultrasonic defect detection. Build noise filtering layer for rail-dependent signal patterns. Develop multi-modal fusion module integrating ultrasonic, geometry, and visual data. Target: >95% detection rate with <15% false positive rate (vs current 34%).' },
      { phase: 'On-Car Validation', weeks: 'Weeks 12-16', description: 'Deploy AI system on 2 HSI testing cars in shadow mode. Compare AI detections vs operator findings on 4,000+ track-miles. Validate against ground truth from walking inspector verification.' },
      { phase: 'Production Deployment', weeks: 'Weeks 17-22', description: 'Expand to full HSI testing fleet. AI-assisted operator workflow: AI pre-screens signals, operators verify flagged defects and review AI confidence scores. Enable higher testing speeds on AI-equipped cars. Automated FRA report generation from verified findings.' },
    ],
    risks: [
      'FRA Part 213 mandates specific inspection requirements — AI cannot replace certified rail testing personnel, only augment their capabilities',
      'Railroad client contracts may restrict use of their testing data for AI model training — legal review of data ownership provisions required',
      'False-negative risk (missed defects) is safety-critical — AI system must maintain >99.5% detection rate on critical defect types (transverse defects that could cause derailment)',
      'On-car edge computing infrastructure needed for real-time inference during testing runs — current testing car computing hardware may need upgrades',
      'Model drift risk: rail manufacturing and treatment methods evolve, changing defect signatures — continuous retraining pipeline required',
    ],
    dependencies: [
      'Proposed data lakehouse GPU compute for model training on 18M+ signal segments',
      'HSI testing fleet data export pipeline — current proprietary format needs converter',
      'Railroad client data sharing agreements for model training (BNSF, UP, CSX, NS contracts)',
      'Edge computing hardware assessment for testing car deployment — estimated $25K per car for inference-capable hardware',
      'FRA regulatory consultation on AI-assisted inspection reporting requirements',
    ],
  },
];

export const workflowSummary = {
  total: 62,
  fullyAutomatable: 18,
  humanInLoop: 30,
  humanRequired: 14,
  currentLaborSpend: 8_200_000,
  potentialSavings: 3_600_000,
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
  { vendor: 'Primavera P6', totalLicenses: 280, active90d: 180, inactive: 100, annualWaste: 350_000, action: 'Reclaim 100 seats — restrict to active project managers only', costPerLicense: 3_500, department: 'Project Management (HCC, HRSI, HTI)', lastAuditDate: '2025-10-15', trend: [82, 76, 70, 68, 65, 64], complianceRisk: false },
  { vendor: 'eCMS', totalLicenses: 250, active90d: 160, inactive: 90, annualWaste: 360_000, action: 'Reclaim 90 inactive seats, deploy AI middleware layer', costPerLicense: 4_000, department: 'Finance & Accounting (all divisions)', lastAuditDate: '2025-11-02', trend: [78, 72, 68, 65, 64, 64], complianceRisk: false },
  { vendor: 'AutoCAD/Civil 3D', totalLicenses: 120, active90d: 65, inactive: 55, annualWaste: 440_000, action: 'Reclaim 55 seats — consolidate to engineering department only', costPerLicense: 8_000, department: 'Engineering & Design (HCC, HTI)', lastAuditDate: '2025-08-20', trend: [68, 62, 58, 55, 54, 54], complianceRisk: true },
  { vendor: 'MCP (Internal)', totalLicenses: 2_800, active90d: 2_200, inactive: 600, annualWaste: 180_000, action: 'Reclaim 600 inactive → deploy AI enhancement layer on MCP in Q4', costPerLicense: 300, department: 'HR / All Divisions (workforce-wide)', lastAuditDate: '2026-01-10', trend: [88, 85, 82, 80, 79, 79], complianceRisk: false },
  { vendor: 'Microsoft 365', totalLicenses: 2_800, active90d: 1_800, inactive: 1_000, annualWaste: 800_000, action: 'Reclaim 1,000 seats + downgrade 400 E5→E3 for field crews', costPerLicense: 800, department: 'IT / All Divisions (company-wide)', lastAuditDate: '2025-09-15', trend: [76, 70, 66, 64, 64, 64], complianceRisk: false },
  { vendor: 'Trimble Business Center', totalLicenses: 80, active90d: 35, inactive: 45, annualWaste: 360_000, action: 'Reclaim 45 seats — restrict to active survey/GPS engineers', costPerLicense: 8_000, department: 'Survey & GPS Engineering (HSI, HCC)', lastAuditDate: '2025-07-22', trend: [62, 55, 48, 44, 44, 44], complianceRisk: false },
  { vendor: 'Salesforce', totalLicenses: 85, active90d: 45, inactive: 40, annualWaste: 310_000, action: 'Reclaim 40 seats — evaluate CRM consolidation', costPerLicense: 7_750, department: 'Business Development & Client Relations', lastAuditDate: '2026-02-01', trend: [72, 66, 60, 55, 53, 53], complianceRisk: false },
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
    id: 'fleet-blind-spots',
    title: 'The Railroad Contractor That Couldn\'t See Its Own Fleet',
    company: 'Heavy/highway & railroad contractor, 7 divisions, 800+ vehicles',
    problem: '7 divisions tracking 800+ vehicles and heavy equipment in separate systems. No cross-division visibility. $580K in duplicate equipment rentals annually.',
    discovery: 'Command Center mapped all fleet systems and found 18% equipment idle rate — approximately 144 assets sitting unused while other divisions rented the same equipment externally.',
    solution: 'Deployed HCSS fleet intelligence across all 800+ assets. Built proposed data analytics layer for cross-division visibility. AI-generated equipment transfer recommendations.',
    impact: [
      '$580K/yr in duplicate rental elimination',
      '18% idle rate reduced to 6% through cross-division sharing',
      'Predictive maintenance reducing unplanned downtime by 34%',
    ],
    quote: 'We had seven divisions buying the same equipment because nobody could see what we already owned.',
    totalImpact: 980_000,
    tags: ['Fleet Intelligence', 'HCSS Equipment360', 'Railroad', 'Equipment Utilization'],
    beforeMetrics: [
      { label: 'Fleet Visibility', before: '0% cross-division', after: '100% real-time' },
      { label: 'Equipment Idle Rate', before: '18%', after: '6%' },
      { label: 'Duplicate Rentals/Yr', before: '$580K', after: '$45K' },
      { label: 'Maintenance Approach', before: 'Calendar-based', after: 'Predictive AI' },
    ],
    afterMetrics: [
      { label: 'Fleet Visibility', before: '0% cross-division', after: '100% real-time' },
      { label: 'Equipment Idle Rate', before: '18%', after: '6%' },
      { label: 'Duplicate Rentals/Yr', before: '$580K', after: '$45K' },
      { label: 'Maintenance Approach', before: 'Calendar-based', after: 'Predictive AI' },
    ],
  },
  {
    id: 'rail-inspection-ai',
    title: 'The Testing Company That Taught AI to Find Rail Defects',
    company: 'Railroad testing & inspection division, 4 geometry cars, 8,400 track-miles/month',
    problem: '20 analysts manually reviewing ultrasonic and visual inspection data. 34% false-positive rate triggering expensive ground verification. Operator fatigue degrading accuracy on long shifts.',
    discovery: 'Command Center identified that 60% of analyst time was spent on pattern recognition tasks perfectly suited for computer vision — and that AI could reduce false positives while catching defects humans miss.',
    solution: 'Built AI-enhanced inspection pipeline: computer vision for track surface defects, deep learning for ultrasonic flaw detection, and multi-modal fusion integrating geometry, visual, and ultrasonic data.',
    impact: [
      'False-positive rate reduced from 34% to 11% — saving $620K/yr in unnecessary ground verification',
      'Defect detection rate improved 8% — catching flaws human operators missed due to fatigue',
      'Testing speed increased 25% on AI-equipped cars — more track-miles covered per shift',
    ],
    quote: 'AI sees every inch of rail at consistent quality — it never gets tired at hour eleven of a twelve-hour shift.',
    totalImpact: 860_000,
    tags: ['AI Inspection', 'Computer Vision', 'Railroad Safety', 'Rail Testing'],
    beforeMetrics: [
      { label: 'False Positive Rate', before: '34%', after: '11%' },
      { label: 'Defect Detection Rate', before: '91%', after: '99%' },
      { label: 'Track-Miles/Day per Car', before: '80 miles', after: '100 miles' },
      { label: 'Analyst Review Time/Segment', before: '3.5 hours', after: '45 minutes' },
    ],
    afterMetrics: [
      { label: 'False Positive Rate', before: '34%', after: '11%' },
      { label: 'Defect Detection Rate', before: '91%', after: '99%' },
      { label: 'Track-Miles/Day per Car', before: '80 miles', after: '100 miles' },
      { label: 'Analyst Review Time/Segment', before: '3.5 hours', after: '45 minutes' },
    ],
  },
  {
    id: 'crew-scheduling',
    title: 'The Contractor That Scheduled 2,800 Crew Members by Spreadsheet',
    company: 'Railroad contractor, 2,800 field employees, 7 divisions across 36 states',
    problem: '8 scheduling coordinators building weekly crew assignments manually in Excel. 22% crew idle time. FRA hours-of-service violations costing $45K/yr in fines.',
    discovery: 'Command Center analysis showed that AI-optimized scheduling considering certifications, union rules, travel time, and equipment proximity could reduce idle time from 22% to under 8%.',
    solution: 'Deployed MCP AI scheduling enhancement with railroad-specific constraint modeling for FRA compliance and union work rules. Cross-division crew sharing enabled.',
    impact: [
      'Crew idle time reduced from 22% to 7% — saving $1.8M/yr in productive labor recovery',
      'Zero FRA hours-of-service violations since deployment (was 3/yr)',
      'Cross-division crew sharing enabled — 15% more efficient utilization of specialized crews',
    ],
    quote: 'We were scheduling railroad crews across 36 states with spreadsheets and phone calls. That is insane in 2026.',
    totalImpact: 720_000,
    tags: ['Crew Scheduling', 'AI Optimization', 'FRA Compliance', 'Workforce'],
    beforeMetrics: [
      { label: 'Crew Idle Time', before: '22%', after: '7%' },
      { label: 'FRA Violations/Year', before: '3', after: '0' },
      { label: 'Schedule Change Handling', before: '2.4 hrs phone calls', after: '< 5 minutes' },
      { label: 'Cross-Division Sharing', before: 'None', after: '15% of crew hours' },
    ],
    afterMetrics: [
      { label: 'Crew Idle Time', before: '22%', after: '7%' },
      { label: 'FRA Violations/Year', before: '3', after: '0' },
      { label: 'Schedule Change Handling', before: '2.4 hrs phone calls', after: '< 5 minutes' },
      { label: 'Cross-Division Sharing', before: 'None', after: '15% of crew hours' },
    ],
  },
  {
    id: 'license-waste',
    title: 'The Company Bleeding $2.8M in Unused Software',
    company: 'Railroad & infrastructure contractor, 2,800 employees, 7 divisions',
    problem: 'Tech stack had grown organically across 7 divisions over 57 years. 1,000 unused Microsoft licenses, 100 unused Primavera seats, and $2.8M/yr in total license waste.',
    discovery: 'Command Center license audit found massive over-provisioning — field crews given E5 licenses when they needed basic email, engineering software provisioned to retired employees, and 40 Salesforce seats never logged in.',
    solution: 'Reclaimed unused licenses across all 7 vendors. Downgraded field crew M365 from E5 to E3. Replaced aging tools with AI-native alternatives.',
    impact: [
      '$2.8M/yr in immediate license savings',
      'New AI-native tools (HCSS Equipment360, Procore, MCP AI enhancement) increased field productivity 28%',
      'IT team freed from managing 7 vendor admin portals',
    ],
    quote: 'We were paying for 2,800 Microsoft E5 licenses for a company where half the employees work on railroad tracks.',
    totalImpact: 2_800_000,
    tags: ['License Audit', 'Railroad', 'Software Optimization'],
    beforeMetrics: [
      { label: 'Annual License Spend', before: '$5.6M', after: '$2.8M' },
      { label: 'License Utilization Rate', before: '58%', after: '94%' },
      { label: 'Shadow IT Subscriptions', before: '18 untracked', after: '0 (monitored)' },
      { label: 'Time to Provision User', before: '4.2 days', after: '< 4 hours' },
    ],
    afterMetrics: [
      { label: 'Annual License Spend', before: '$5.6M', after: '$2.8M' },
      { label: 'License Utilization Rate', before: '58%', after: '94%' },
      { label: 'Shadow IT Subscriptions', before: '18 untracked', after: '0 (monitored)' },
      { label: 'Time to Provision User', before: '4.2 days', after: '< 4 hours' },
    ],
  },
];

// ─── ROI Summary Data ───────────────────────────────────────────────────────

export const roiSummary = {
  techStackSavings: 2_200_000,
  workflowAutomation: 3_600_000,
  licenseRecovery: 2_800_000,
  implementationCosts: 2_800_000,
  netYear1: 5_800_000,
  year2Projected: 8_700_000,
};


// ═══════════════════════════════════════════════════════════════════════════════
// ─── Multi-Company Data ────────────────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

// ─── Northwood Insurance Group ──────────────────────────────────────────────────

const northwoodCompanyProfile = {
  name: 'Northwood Insurance Group',
  industry: 'Insurance',
  employees: 800,
  opCos: 1,
  opCoNames: ['Northwood Insurance Group'],
  techSpend: '$5.8M/yr',
  aiReadinessScore: 41,
  holdingPeriod: '12 months into 5-year hold',
  ebitdaMargin: '11.8%',
  targetEbitdaMargin: '19%',
};

const northwoodAiReadinessBreakdown = [
  { category: 'Data Infrastructure', score: 32, maxScore: 100, status: 'Below Average — legacy AS/400 mainframe stores 60% of policy data, no API layer, batch-only data exports via COBOL jobs running overnight' },
  { category: 'Process Maturity', score: 48, maxScore: 100, status: 'Moderate — claims workflows partially digitized via Guidewire, but 40% of underwriting still relies on manual spreadsheet-based rating' },
  { category: 'Tech Stack Modernity', score: 35, maxScore: 100, status: 'Legacy-Heavy — AS/400 mainframe (1997), Duck Creek policy admin (2012), Guidewire ClaimCenter (2018), no cloud-native infrastructure' },
  { category: 'Change Readiness', score: 52, maxScore: 100, status: 'Moderate — CTO is strong AI advocate, but claims adjusters union has expressed concerns about automation impact on jobs' },
  { category: 'Skills & Training', score: 28, maxScore: 100, status: 'Critical Gap — IT team of 18 focused on mainframe maintenance, zero ML/AI capability, no data science function, 2 open data engineer reqs unfilled for 8 months' },
];

const northwoodKpis = {
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

const northwoodRoadmapPhases = [
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

const northwoodTopOpportunities: Opportunity[] = [
  { name: 'Claims Intake Automation', category: 'Workflow Automation', savings: 650_000, effort: 'Medium', status: 'in-progress', priority: 10, timeToValue: 10, confidence: 91 },
  { name: 'Legacy Policy Migration (AS/400)', category: 'Tech Stack', savings: 540_000, effort: 'High', status: 'identified', priority: 9, timeToValue: 24, confidence: 78 },
  { name: 'Fraud Detection AI', category: 'Workflow Automation', savings: 430_000, effort: 'Medium', status: 'identified', priority: 9, timeToValue: 12, confidence: 84 },
  { name: 'Underwriting Automation', category: 'Workflow Automation', savings: 360_000, effort: 'High', status: 'identified', priority: 8, timeToValue: 16, confidence: 76 },
  { name: 'Customer Portal Modernization', category: 'Tech Stack', savings: 300_000, effort: 'Medium', status: 'identified', priority: 7, timeToValue: 14, confidence: 82 },
  { name: 'Unused License Reclamation', category: 'License Audit', savings: 730_000, effort: 'Low', status: 'in-progress', priority: 10, timeToValue: 3, confidence: 96 },
  { name: 'Regulatory Reporting Automation', category: 'Workflow Automation', savings: 220_000, effort: 'Medium', status: 'identified', priority: 6, timeToValue: 10, confidence: 88 },
  { name: 'Replace Salesforce → HubSpot', category: 'Tech Stack', savings: 150_000, effort: 'Medium', status: 'identified', priority: 7, timeToValue: 8, confidence: 90 },
  { name: 'Payment Processing Automation', category: 'Workflow Automation', savings: 250_000, effort: 'Low', status: 'identified', priority: 8, timeToValue: 6, confidence: 92 },
  { name: 'Subrogation Recovery Optimization', category: 'Workflow Automation', savings: 170_000, effort: 'High', status: 'identified', priority: 5, timeToValue: 18, confidence: 70 },
];

const northwoodCurrentStack: CurrentTool[] = [
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

const northwoodLicenses: License[] = [
  { vendor: 'Microsoft 365', totalLicenses: 800, active90d: 600, inactive: 200, annualWaste: 400_000, action: 'Reclaim 200 seats + downgrade 100 E5→E3', costPerLicense: 2_000, department: 'IT / All Departments', lastAuditDate: '2025-10-01', trend: [82, 78, 74, 70, 65, 60], complianceRisk: false },
  { vendor: 'Salesforce', totalLicenses: 120, active90d: 75, inactive: 45, annualWaste: 225_000, action: 'Reclaim 45 seats → migrate to HubSpot in Q3', costPerLicense: 5_000, department: 'Sales & Agent Relations', lastAuditDate: '2025-11-15', trend: [80, 74, 69, 65, 60, 56], complianceRisk: false },
  { vendor: 'Duck Creek', totalLicenses: 120, active90d: 88, inactive: 32, annualWaste: 192_000, action: 'Reclaim 32 inactive seats, optimize license tier', costPerLicense: 6_000, department: 'Underwriting & Policy Admin', lastAuditDate: '2025-09-20', trend: [85, 80, 76, 72, 68, 65], complianceRisk: false },
  { vendor: 'Guidewire', totalLicenses: 180, active90d: 155, inactive: 25, annualWaste: 200_000, action: 'Reclaim 25 seats, evaluate ClaimCenter cloud migration', costPerLicense: 8_000, department: 'Claims Operations', lastAuditDate: '2025-12-01', trend: [92, 90, 88, 87, 86, 84], complianceRisk: false },
  { vendor: 'Slack Enterprise', totalLicenses: 600, active90d: 480, inactive: 120, annualWaste: 144_000, action: 'Downgrade 120 inactive to free tier', costPerLicense: 1_200, department: 'IT / All Departments', lastAuditDate: '2026-01-05', trend: [90, 87, 84, 82, 80, 78], complianceRisk: false },
  { vendor: 'Adobe Acrobat Pro', totalLicenses: 200, active90d: 90, inactive: 110, annualWaste: 263_000, action: 'Reclaim 110 seats — restrict to claims and legal only', costPerLicense: 2_400, department: 'Claims & Legal (provisioned company-wide)', lastAuditDate: '2025-08-18', trend: [70, 60, 52, 45, 40, 36], complianceRisk: true },
  { vendor: 'LexisNexis', totalLicenses: 50, active90d: 18, inactive: 32, annualWaste: 176_000, action: 'Reclaim 32 seats — restrict to SIU and underwriting', costPerLicense: 5_500, department: 'Special Investigations & Underwriting', lastAuditDate: '2025-07-30', trend: [68, 58, 50, 44, 38, 34], complianceRisk: false },
];

const northwoodWorkflowSummary = {
  total: 38,
  fullyAutomatable: 9,
  humanInLoop: 18,
  humanRequired: 11,
  currentLaborSpend: 4_200_000,
  potentialSavings: 2_200_000,
};

const northwoodRoiSummary = {
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
  { name: 'Clinical Note Automation (DAX Copilot)', category: 'Workflow Automation', savings: 330_000, effort: 'Medium', status: 'identified', priority: 10, timeToValue: 8, confidence: 89 },
  { name: 'Prior Authorization Automation', category: 'Workflow Automation', savings: 240_000, effort: 'Medium', status: 'identified', priority: 9, timeToValue: 10, confidence: 85 },
  { name: 'Patient Scheduling AI', category: 'Workflow Automation', savings: 170_000, effort: 'Low', status: 'identified', priority: 8, timeToValue: 6, confidence: 91 },
  { name: 'Revenue Cycle Optimization', category: 'Workflow Automation', savings: 220_000, effort: 'High', status: 'identified', priority: 8, timeToValue: 16, confidence: 77 },
  { name: 'Coding Accuracy Improvement', category: 'Workflow Automation', savings: 140_000, effort: 'Medium', status: 'identified', priority: 7, timeToValue: 12, confidence: 82 },
  { name: 'Unused License Reclamation', category: 'License Audit', savings: 410_000, effort: 'Low', status: 'in-progress', priority: 10, timeToValue: 3, confidence: 97 },
  { name: 'Denial Management AI', category: 'Workflow Automation', savings: 120_000, effort: 'Medium', status: 'identified', priority: 6, timeToValue: 14, confidence: 74 },
  { name: 'Patient Engagement Automation', category: 'Workflow Automation', savings: 90_000, effort: 'Low', status: 'identified', priority: 5, timeToValue: 6, confidence: 88 },
  { name: 'Replace Salesforce Health Cloud', category: 'Tech Stack', savings: 100_000, effort: 'Medium', status: 'identified', priority: 6, timeToValue: 10, confidence: 84 },
  { name: 'Clinical Quality Reporting', category: 'Workflow Automation', savings: 80_000, effort: 'Low', status: 'identified', priority: 4, timeToValue: 8, confidence: 90 },
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
  { vendor: 'Zoom Healthcare', totalLicenses: 100, active90d: 42, inactive: 58, annualWaste: 76_000, action: 'Reclaim 58 seats — consolidate to Teams for non-telehealth', costPerLicense: 1_200, department: 'Clinical (telehealth) & Admin', lastAuditDate: '2025-08-28', trend: [78, 70, 62, 56, 48, 42], complianceRisk: true },
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
  { name: 'Predictive Maintenance', category: 'Workflow Automation', savings: 880_000, effort: 'High', status: 'identified', priority: 10, timeToValue: 14, confidence: 82 },
  { name: 'Cross-Plant Inventory Consolidation', category: 'Data Infrastructure', savings: 650_000, effort: 'High', status: 'identified', priority: 9, timeToValue: 18, confidence: 79 },
  { name: 'Quality Inspection AI', category: 'Workflow Automation', savings: 530_000, effort: 'Medium', status: 'identified', priority: 9, timeToValue: 12, confidence: 85 },
  { name: 'Production Scheduling Optimization', category: 'Workflow Automation', savings: 470_000, effort: 'High', status: 'identified', priority: 8, timeToValue: 16, confidence: 76 },
  { name: 'Supplier Risk Monitoring', category: 'Data Infrastructure', savings: 350_000, effort: 'Medium', status: 'identified', priority: 7, timeToValue: 10, confidence: 80 },
  { name: 'Unused License Reclamation', category: 'License Audit', savings: 1_030_000, effort: 'Low', status: 'in-progress', priority: 10, timeToValue: 3, confidence: 96 },
  { name: 'Energy Consumption Optimization', category: 'Workflow Automation', savings: 280_000, effort: 'Medium', status: 'identified', priority: 6, timeToValue: 14, confidence: 72 },
  { name: 'SAP Instance Harmonization', category: 'Tech Stack', savings: 380_000, effort: 'High', status: 'in-progress', priority: 8, timeToValue: 20, confidence: 74 },
  { name: 'Automated Receiving & Shipping', category: 'Workflow Automation', savings: 210_000, effort: 'Low', status: 'identified', priority: 5, timeToValue: 8, confidence: 88 },
  { name: 'Demand Forecasting AI', category: 'Workflow Automation', savings: 320_000, effort: 'Medium', status: 'identified', priority: 7, timeToValue: 12, confidence: 78 },
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
  totalSavings: 11_000_000,
  techScoreBefore: 52,
  techScoreAfter: 88,
  workflowsAnalyzed: 184,
  automationReady: 48,
  unusedLicenseWaste: 9_040_000,
  savingsSparkline: [0, 700_000, 1_550_000, 2_600_000, 3_950_000, 5_250_000, 6_300_000, 7_350_000, 8_400_000, 9_450_000, 10_300_000, 11_000_000],
  scoreSparkline: [52, 56, 60, 63, 67, 71, 75, 79, 82, 85, 87, 88],
  workflowSparkline: [0, 14, 29, 46, 67, 87, 105, 124, 143, 160, 174, 184],
  licenseSparkline: [9_040_000, 7_869_091, 6_709_091, 5_563_636, 4_418_182, 3_327_273, 2_372_727, 1_690_909, 1_154_545, 836_364, 620_000, 480_000],
  headcountImpactSparkline: [0, -5, -12, -21, -36, -54, -74, -98, -123, -146, -166, -184],
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
  { name: 'Cross-OpCo Procurement Consolidation', category: 'Procurement', savings: 2_090_000, effort: 'High', status: 'in-progress', priority: 10, timeToValue: 12, confidence: 88 },
  { name: 'Predictive Maintenance Fleet', category: 'Manufacturing', savings: 1_450_000, effort: 'High', status: 'automated', priority: 9, timeToValue: 16, confidence: 84 },
  { name: 'Financial Close Automation', category: 'Finance', savings: 1_280_000, effort: 'Medium', status: 'in-progress', priority: 9, timeToValue: 10, confidence: 91 },
  { name: 'Supply Chain Optimization', category: 'Supply Chain', savings: 1_930_000, effort: 'High', status: 'identified', priority: 8, timeToValue: 20, confidence: 76 },
  { name: 'Clinical Trial Data Pipeline', category: 'Health Sciences', savings: 960_000, effort: 'High', status: 'identified', priority: 7, timeToValue: 18, confidence: 72 },
  { name: 'Enterprise License Consolidation', category: 'License Audit', savings: 1_690_000, effort: 'Low', status: 'in-progress', priority: 10, timeToValue: 4, confidence: 96 },
  { name: 'HR Process Automation', category: 'HR', savings: 720_000, effort: 'Medium', status: 'identified', priority: 6, timeToValue: 8, confidence: 88 },
  { name: 'Customer Experience AI', category: 'Sales', savings: 880_000, effort: 'Medium', status: 'identified', priority: 7, timeToValue: 14, confidence: 80 },
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
  potentialSavings: 8_200_000,
};

const northbridgeRoiSummary = {
  techStackSavings: 6_400_000,
  workflowAutomation: 8_200_000,
  licenseRecovery: 4_600_000,
  implementationCosts: 8_200_000,
  netYear1: 11_000_000,
  year2Projected: 18_700_000,
};

// ═══════════════════════════════════════════════════════════════════════════════
// ─── NB Aerospace & Defense (Northbridge OpCo) ──────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

const nbAerospaceCompanyProfile = {
  name: 'NB Aerospace & Defense',
  industry: 'Aerospace & Defense',
  employees: 8_200,
  opCos: 1,
  opCoNames: ['NB Aerospace & Defense'],
  techSpend: '$34M/yr',
  aiReadinessScore: 46,
  holdingPeriod: 'Northbridge Industries OpCo',
  ebitdaMargin: '14.2%',
  targetEbitdaMargin: '22%',
};

const nbAerospaceAiReadinessBreakdown = [
  { category: 'Data Infrastructure', score: 52, maxScore: 100, status: 'Moderate — AS9100-compliant data systems in place, but flight certification records remain in siloed legacy databases with limited API access' },
  { category: 'Process Maturity', score: 38, maxScore: 100, status: 'Below Average — 32 workflows mapped, only 10 automated; MRO scheduling and supplier quality processes rely heavily on manual handoffs' },
  { category: 'Tech Stack Modernity', score: 48, maxScore: 100, status: 'Mixed — Windchill PLM and TeamCenter deployed for design, but legacy DOORS requirements management and paper-based flight cert processes persist' },
  { category: 'Change Readiness', score: 42, maxScore: 100, status: 'Moderate — engineering leadership supports AI adoption, but strict FAA/EASA regulatory requirements slow change velocity in certification workflows' },
  { category: 'Skills & Training', score: 50, maxScore: 100, status: 'Developing — strong engineering talent base of 8,200, but AI/ML skills concentrated in R&D; production floor and supply chain teams need upskilling' },
];

const nbAerospaceKpis = {
  totalSavings: 3_000_000,
  techScoreBefore: 46,
  techScoreAfter: 85,
  workflowsAnalyzed: 50,
  automationReady: 10,
  unusedLicenseWaste: 1_220_000,
  savingsSparkline: [0, 190_909, 422_727, 709_091, 995_455, 1_281_818, 1_568_182, 1_854_545, 2_140_909, 2_427_273, 2_713_636, 3_000_000],
  scoreSparkline: [46, 50, 54, 57, 61, 65, 69, 73, 77, 80, 83, 85],
  workflowSparkline: [0, 4, 8, 11, 17, 23, 29, 34, 39, 44, 48, 52],
  licenseSparkline: [1_220_000, 1_130_909, 1_030_909, 916_364, 801_818, 687_273, 572_727, 467_273, 369_091, 292_727, 230_909, 180_000],
  headcountImpactSparkline: [0, -1, -3, -6, -9, -13, -17, -21, -24, -27, -29, -32],
};

const nbAerospaceRoadmapPhases = [
  {
    quarter: 'Q1 2026',
    title: 'Flight Certification & PLM Data Unification',
    items: ['AS9100 data lake consolidation', 'PLM-to-ERP integration', 'Digital thread foundation'],
    status: 'active' as const,
    weekPlan: [
      { week: 1, task: 'AS9100 data audit and flight certification record digitization kickoff', owner: 'Quality Systems Director' },
      { week: 2, task: 'Windchill PLM ↔ SAP integration blueprint for BOM synchronization', owner: 'PLM Program Manager' },
      { week: 3, task: 'DOORS requirements traceability migration to modern ALM platform', owner: 'Systems Engineering Lead' },
      { week: 4, task: 'Digital thread architecture: design-to-manufacture data flow mapping', owner: 'Enterprise Architect' },
    ],
  },
  {
    quarter: 'Q2 2026',
    title: 'Supplier Quality & MRO Automation',
    items: ['Supplier quality portal deployment', 'MRO scheduling AI', 'Non-conformance tracking automation'],
    status: 'active' as const,
    weekPlan: [
      { week: 5, task: 'Supplier quality management portal go-live with 280 Tier 1 suppliers', owner: 'Supplier Quality Manager' },
      { week: 6, task: 'MRO scheduling optimization AI: predictive maintenance for fleet of 1,200 engines', owner: 'MRO Operations Director' },
      { week: 7, task: 'Non-conformance report automation with AI-assisted root cause analysis', owner: 'Quality Systems Director' },
      { week: 8, task: 'First article inspection (FAI) digitization across 6 manufacturing sites', owner: 'Manufacturing Engineering Lead' },
    ],
  },
  {
    quarter: 'Q3 2026',
    title: 'Production Floor AI & Supply Chain Intelligence',
    items: ['Shop floor IoT deployment', 'Supply chain risk AI', 'Automated test data analysis'],
    status: 'upcoming' as const,
    weekPlan: [
      { week: 9, task: 'IoT sensor deployment across 6 production facilities for real-time yield monitoring', owner: 'Manufacturing Engineering Lead' },
      { week: 10, task: 'Supply chain risk AI: geopolitical and single-source supplier risk scoring', owner: 'Supply Chain Director' },
      { week: 11, task: 'Automated test data analysis for flight hardware qualification', owner: 'Test Engineering Manager' },
      { week: 12, task: 'AI-driven production scheduling optimization across all manufacturing sites', owner: 'MRO Operations Director' },
    ],
  },
  {
    quarter: 'Q4 2026',
    title: 'Full Digital Thread & Regulatory Compliance AI',
    items: ['End-to-end digital thread validation', 'FAA/EASA compliance automation', 'Year 2 roadmap'],
    status: 'upcoming' as const,
    weekPlan: [
      { week: 13, task: 'Digital thread validation: full traceability from design → manufacture → field service', owner: 'Enterprise Architect' },
      { week: 14, task: 'FAA/EASA regulatory compliance automation: AI-assisted certification document generation', owner: 'Regulatory Affairs Director' },
      { week: 15, task: 'Board presentation: $3.0M Year 1 savings confirmed, Year 2 roadmap ($10.5M target)', owner: 'OpCo General Manager' },
      { week: 16, task: 'Hypercare and continuous improvement: AI model retraining, process optimization', owner: 'Quality Systems Director' },
    ],
  },
];

const nbAerospaceTopOpportunities: Opportunity[] = [
  { name: 'Flight Certification Automation', category: 'Regulatory', savings: 650_000, effort: 'High', status: 'in-progress', priority: 10, timeToValue: 14, confidence: 82 },
  { name: 'Supplier Quality AI Portal', category: 'Supply Chain', savings: 560_000, effort: 'Medium', status: 'in-progress', priority: 9, timeToValue: 10, confidence: 88 },
  { name: 'MRO Scheduling Optimization', category: 'Maintenance', savings: 470_000, effort: 'High', status: 'identified', priority: 8, timeToValue: 16, confidence: 78 },
  { name: 'Non-Conformance Report Automation', category: 'Quality', savings: 370_000, effort: 'Medium', status: 'identified', priority: 8, timeToValue: 8, confidence: 90 },
  { name: 'Digital Thread Integration', category: 'Data Infrastructure', savings: 560_000, effort: 'High', status: 'in-progress', priority: 9, timeToValue: 20, confidence: 74 },
  { name: 'License Consolidation (PLM/CAD)', category: 'License Audit', savings: 390_000, effort: 'Low', status: 'in-progress', priority: 10, timeToValue: 4, confidence: 96 },
];

const nbAerospaceCurrentStack: CurrentTool[] = [
  { name: 'Windchill PLM', category: 'PLM', annualCost: 4_200_000, users: 1_800, score: 5, integrationComplexity: 'High', migrationWeeks: 32, riskLevel: 'High', dependencies: ['Product Lifecycle', 'BOM Management', 'Change Management', 'Configuration Control'] },
  { name: 'TeamCenter', category: 'Engineering', annualCost: 3_600_000, users: 1_200, score: 6, integrationComplexity: 'High', migrationWeeks: 28, riskLevel: 'High', dependencies: ['CAD Integration', 'Simulation Data', 'Digital Twin', 'Design Collaboration'] },
  { name: 'SAP S/4HANA', category: 'ERP', annualCost: 2_800_000, users: 2_400, score: 7, integrationComplexity: 'High', migrationWeeks: 24, riskLevel: 'High', dependencies: ['Finance', 'Procurement', 'Manufacturing', 'MRO Planning'] },
  { name: 'IBM DOORS', category: 'Requirements', annualCost: 1_400_000, users: 600, score: 3, integrationComplexity: 'High', migrationWeeks: 20, riskLevel: 'Medium', dependencies: ['Requirements Traceability', 'V&V Management', 'Certification Evidence'] },
  { name: 'Solumina MES', category: 'Manufacturing', annualCost: 1_800_000, users: 1_600, score: 5, integrationComplexity: 'Medium', migrationWeeks: 16, riskLevel: 'Medium', dependencies: ['Shop Floor Control', 'Work Instructions', 'Quality Records'] },
  { name: 'AMOS MRO', category: 'Maintenance', annualCost: 2_200_000, users: 800, score: 4, integrationComplexity: 'Medium', migrationWeeks: 18, riskLevel: 'Medium', dependencies: ['MRO Scheduling', 'Parts Inventory', 'Airworthiness Tracking'] },
];

const nbAerospaceLicenses: License[] = [
  { vendor: 'Windchill PLM', totalLicenses: 480, active90d: 340, inactive: 140, annualWaste: 520_000, action: 'Reclaim 140 inactive seats + consolidate with TeamCenter users', costPerLicense: 2_280, department: 'Engineering / Product Design', lastAuditDate: '2026-01-20', trend: [82, 76, 72, 68, 66, 71], complianceRisk: false },
  { vendor: 'IBM DOORS', totalLicenses: 200, active90d: 120, inactive: 80, annualWaste: 340_000, action: 'Migrate to modern ALM — reclaim all legacy seats', costPerLicense: 3_000, department: 'Systems Engineering', lastAuditDate: '2026-02-05', trend: [75, 68, 62, 58, 55, 60], complianceRisk: true },
  { vendor: 'TeamCenter', totalLicenses: 360, active90d: 280, inactive: 80, annualWaste: 260_000, action: 'Reclaim 80 seats from non-engineering departments', costPerLicense: 2_000, department: 'Engineering / Simulation', lastAuditDate: '2026-01-10', trend: [88, 84, 80, 76, 74, 78], complianceRisk: false },
  { vendor: 'AMOS MRO', totalLicenses: 240, active90d: 200, inactive: 40, annualWaste: 100_000, action: 'Downgrade 40 inactive to read-only tier', costPerLicense: 2_500, department: 'MRO Operations', lastAuditDate: '2025-12-15', trend: [90, 88, 86, 84, 82, 83], complianceRisk: false },
];

const nbAerospaceWorkflowSummary = {
  total: 50,
  fullyAutomatable: 10,
  humanInLoop: 28,
  humanRequired: 12,
  currentLaborSpend: 10_200_000,
  potentialSavings: 1_600_000,
};

const nbAerospaceRoiSummary = {
  techStackSavings: 2_000_000,
  workflowAutomation: 1_600_000,
  licenseRecovery: 1_200_000,
  implementationCosts: 1_800_000,
  netYear1: 3_000_000,
  year2Projected: 5_100_000,
};

// ═══════════════════════════════════════════════════════════════════════════════
// ─── NB Energy Systems (Northbridge OpCo) ───────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

const nbEnergyCompanyProfile = {
  name: 'NB Energy Systems',
  industry: 'Energy & Utilities',
  employees: 11_500,
  opCos: 1,
  opCoNames: ['NB Energy Systems'],
  techSpend: '$42M/yr',
  aiReadinessScore: 38,
  holdingPeriod: 'Northbridge Industries OpCo',
  ebitdaMargin: '18.4%',
  targetEbitdaMargin: '26%',
};

const nbEnergyAiReadinessBreakdown = [
  { category: 'Data Infrastructure', score: 42, maxScore: 100, status: 'Below Average — SCADA systems generate massive telemetry but data remains trapped in OT networks; IT/OT convergence only 30% complete' },
  { category: 'Process Maturity', score: 32, maxScore: 100, status: 'Low — 42 workflows mapped, only 12 automated; grid management and pipeline monitoring rely on legacy control systems with manual oversight' },
  { category: 'Tech Stack Modernity', score: 38, maxScore: 100, status: 'Legacy-Heavy — OSIsoft PI historian, legacy SCADA, and 15-year-old GIS systems; cloud migration constrained by NERC CIP compliance' },
  { category: 'Change Readiness', score: 35, maxScore: 100, status: 'Below Average — operational teams resistant to AI in safety-critical systems; regulatory approval cycles (FERC, NERC) slow adoption' },
  { category: 'Skills & Training', score: 44, maxScore: 100, status: 'Developing — strong operational engineering talent of 11,500, but AI/data science skills limited to central analytics team of 22' },
];

const nbEnergyKpis = {
  totalSavings: 3_400_000,
  techScoreBefore: 38,
  techScoreAfter: 84,
  workflowsAnalyzed: 52,
  automationReady: 12,
  unusedLicenseWaste: 1_450_000,
  savingsSparkline: [0, 216_364, 479_091, 803_636, 1_220_909, 1_622_727, 1_947_273, 2_271_818, 2_596_364, 2_920_909, 3_183_636, 3_400_000],
  scoreSparkline: [38, 42, 46, 49, 54, 59, 63, 68, 73, 76, 80, 84],
  workflowSparkline: [0, 4, 8, 13, 18, 23, 29, 34, 39, 44, 48, 52],
  licenseSparkline: [1_450_000, 1_329_091, 1_202_727, 1_069_091, 935_455, 801_818, 668_182, 543_636, 428_182, 345_455, 273_636, 210_000],
  headcountImpactSparkline: [0, -2, -4, -8, -12, -17, -23, -28, -33, -36, -39, -42],
};

const nbEnergyRoadmapPhases = [
  {
    quarter: 'Q1 2026',
    title: 'IT/OT Convergence & SCADA Modernization',
    items: ['SCADA data lake integration', 'IT/OT network bridge deployment', 'Historian cloud migration'],
    status: 'active' as const,
    weekPlan: [
      { week: 1, task: 'SCADA telemetry data lake architecture design with NERC CIP compliance review', owner: 'OT Security Director' },
      { week: 2, task: 'OSIsoft PI historian → cloud migration assessment for 48,000 sensor tags', owner: 'Data Engineering Lead' },
      { week: 3, task: 'IT/OT network segmentation and secure data bridge deployment across 12 substations', owner: 'Network Architecture Manager' },
      { week: 4, task: 'Real-time grid telemetry pipeline: SCADA → Azure IoT Hub → data lake', owner: 'IoT Platform Manager' },
    ],
  },
  {
    quarter: 'Q2 2026',
    title: 'Grid Management & Pipeline Monitoring AI',
    items: ['Predictive grid analytics', 'Pipeline integrity AI', 'Outage prediction models'],
    status: 'active' as const,
    weekPlan: [
      { week: 5, task: 'Predictive grid load balancing AI deployment across 3 regional control centers', owner: 'Grid Operations Director' },
      { week: 6, task: 'Pipeline integrity monitoring AI: anomaly detection for 2,400 miles of pipeline', owner: 'Pipeline Operations Manager' },
      { week: 7, task: 'Weather-correlated outage prediction model training on 8 years of historical data', owner: 'Data Science Lead' },
      { week: 8, task: 'Automated FERC/NERC compliance reporting system go-live', owner: 'Regulatory Compliance Manager' },
    ],
  },
  {
    quarter: 'Q3 2026',
    title: 'Asset Management & Field Operations',
    items: ['Predictive maintenance fleet', 'Mobile field crew optimization', 'Digital twin deployment'],
    status: 'upcoming' as const,
    weekPlan: [
      { week: 9, task: 'Predictive maintenance AI for 340 substations and 1,800 transformers', owner: 'Asset Management Director' },
      { week: 10, task: 'Mobile field crew dispatch optimization: AI routing for 2,200 field technicians', owner: 'Field Operations Manager' },
      { week: 11, task: 'Digital twin deployment for 3 power generation facilities', owner: 'IoT Platform Manager' },
      { week: 12, task: 'Vegetation management AI: satellite imagery analysis for 18,000 miles of right-of-way', owner: 'Environmental Compliance Lead' },
    ],
  },
  {
    quarter: 'Q4 2026',
    title: 'Enterprise AI Integration & Optimization',
    items: ['Cross-system AI orchestration', 'Customer experience AI', 'Year 2 roadmap'],
    status: 'upcoming' as const,
    weekPlan: [
      { week: 13, task: 'Cross-system AI orchestration: unified grid, pipeline, and generation optimization', owner: 'Chief Technology Officer' },
      { week: 14, task: 'Customer experience AI: smart meter analytics and proactive outage communication', owner: 'Customer Operations Director' },
      { week: 15, task: 'Board presentation: $3.4M Year 1 savings confirmed, Year 2 roadmap ($12.8M target)', owner: 'OpCo General Manager' },
      { week: 16, task: 'Hypercare and continuous improvement: AI model retraining, NERC CIP re-certification', owner: 'OT Security Director' },
    ],
  },
];

const nbEnergyTopOpportunities: Opportunity[] = [
  { name: 'Grid Load Balancing AI', category: 'Operations', savings: 830_000, effort: 'High', status: 'in-progress', priority: 10, timeToValue: 16, confidence: 80 },
  { name: 'Pipeline Integrity Monitoring', category: 'Safety', savings: 640_000, effort: 'High', status: 'identified', priority: 9, timeToValue: 18, confidence: 76 },
  { name: 'Predictive Maintenance (Substations)', category: 'Maintenance', savings: 550_000, effort: 'Medium', status: 'in-progress', priority: 9, timeToValue: 12, confidence: 86 },
  { name: 'Outage Prediction & Response', category: 'Grid Management', savings: 460_000, effort: 'High', status: 'identified', priority: 8, timeToValue: 14, confidence: 82 },
  { name: 'NERC CIP Compliance Automation', category: 'Regulatory', savings: 410_000, effort: 'Medium', status: 'in-progress', priority: 8, timeToValue: 8, confidence: 92 },
  { name: 'License Consolidation (SCADA/GIS)', category: 'License Audit', savings: 510_000, effort: 'Low', status: 'in-progress', priority: 10, timeToValue: 4, confidence: 95 },
];

const nbEnergyCurrentStack: CurrentTool[] = [
  { name: 'OSIsoft PI', category: 'Historian', annualCost: 3_800_000, users: 2_400, score: 4, integrationComplexity: 'High', migrationWeeks: 36, riskLevel: 'High', dependencies: ['SCADA Integration', 'Sensor Telemetry', 'Process Data', 'Compliance Logging'] },
  { name: 'GE Grid Solutions SCADA', category: 'Control Systems', annualCost: 5_200_000, users: 480, score: 3, integrationComplexity: 'High', migrationWeeks: 48, riskLevel: 'High', dependencies: ['Grid Control', 'Substation Automation', 'Load Management', 'Outage Response'] },
  { name: 'Esri ArcGIS Enterprise', category: 'GIS', annualCost: 2_400_000, users: 1_800, score: 5, integrationComplexity: 'Medium', migrationWeeks: 20, riskLevel: 'Medium', dependencies: ['Asset Mapping', 'Outage Visualization', 'Field Crew Routing', 'Vegetation Management'] },
  { name: 'SAP S/4HANA', category: 'ERP', annualCost: 3_200_000, users: 3_600, score: 7, integrationComplexity: 'High', migrationWeeks: 24, riskLevel: 'High', dependencies: ['Finance', 'Procurement', 'Plant Maintenance', 'Materials Management'] },
  { name: 'Oracle Utilities CC&B', category: 'Billing', annualCost: 2_800_000, users: 1_200, score: 4, integrationComplexity: 'High', migrationWeeks: 32, riskLevel: 'High', dependencies: ['Customer Billing', 'Meter Data', 'Rate Management', 'Payment Processing'] },
  { name: 'Maximo', category: 'Asset Management', annualCost: 1_600_000, users: 2_200, score: 5, integrationComplexity: 'Medium', migrationWeeks: 16, riskLevel: 'Medium', dependencies: ['Work Orders', 'Asset Registry', 'Preventive Maintenance', 'Parts Inventory'] },
];

const nbEnergyLicenses: License[] = [
  { vendor: 'OSIsoft PI', totalLicenses: 600, active90d: 420, inactive: 180, annualWaste: 620_000, action: 'Reclaim 180 inactive seats + migrate to cloud-native historian', costPerLicense: 2_667, department: 'Operations / Engineering', lastAuditDate: '2026-01-25', trend: [80, 74, 70, 66, 64, 70], complianceRisk: false },
  { vendor: 'GE SCADA', totalLicenses: 240, active90d: 180, inactive: 60, annualWaste: 400_000, action: 'Optimize license tiers — downgrade 60 to monitoring-only', costPerLicense: 4_667, department: 'Grid Operations', lastAuditDate: '2026-02-10', trend: [85, 80, 76, 72, 70, 75], complianceRisk: true },
  { vendor: 'Esri ArcGIS', totalLicenses: 480, active90d: 360, inactive: 120, annualWaste: 290_000, action: 'Reclaim 120 seats from non-field departments', costPerLicense: 1_667, department: 'Field Operations / GIS', lastAuditDate: '2026-01-05', trend: [88, 84, 80, 76, 74, 75], complianceRisk: false },
  { vendor: 'Maximo', totalLicenses: 540, active90d: 440, inactive: 100, annualWaste: 140_000, action: 'Reclaim 100 inactive seats from seasonal contractors', costPerLicense: 1_400, department: 'Asset Management', lastAuditDate: '2025-12-20', trend: [90, 88, 84, 82, 80, 81], complianceRisk: false },
];

const nbEnergyWorkflowSummary = {
  total: 56,
  fullyAutomatable: 12,
  humanInLoop: 30,
  humanRequired: 14,
  currentLaborSpend: 14_400_000,
  potentialSavings: 2_400_000,
};

const nbEnergyRoiSummary = {
  techStackSavings: 1_800_000,
  workflowAutomation: 2_400_000,
  licenseRecovery: 1_400_000,
  implementationCosts: 2_200_000,
  netYear1: 3_400_000,
  year2Projected: 5_780_000,
};

// ═══════════════════════════════════════════════════════════════════════════════
// ─── NB Financial Services (Northbridge OpCo) ───────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

const nbFinancialCompanyProfile = {
  name: 'NB Financial Services',
  industry: 'Financial Services',
  employees: 6_200,
  opCos: 1,
  opCoNames: ['NB Financial Services'],
  techSpend: '$48M/yr',
  aiReadinessScore: 62,
  holdingPeriod: 'Northbridge Industries OpCo',
  ebitdaMargin: '22.6%',
  targetEbitdaMargin: '30%',
};

const nbFinancialAiReadinessBreakdown = [
  { category: 'Data Infrastructure', score: 68, maxScore: 100, status: 'Good — Bloomberg and Murex data feeds well-integrated, centralized risk data warehouse operational, real-time market data pipeline established' },
  { category: 'Process Maturity', score: 58, maxScore: 100, status: 'Moderate — 28 workflows mapped, 14 automated; trade settlement and compliance reporting partially automated, KYC/AML processes still manual-heavy' },
  { category: 'Tech Stack Modernity', score: 65, maxScore: 100, status: 'Above Average — Bloomberg Terminal, Murex trading platform, and Calypso risk engine are modern; legacy back-office systems need modernization' },
  { category: 'Change Readiness', score: 60, maxScore: 100, status: 'Good — front-office teams embrace AI for alpha generation, but compliance and risk teams cautious due to SEC/FINRA regulatory scrutiny' },
  { category: 'Skills & Training', score: 62, maxScore: 100, status: 'Good — quantitative talent pool of 6,200 includes 180 data scientists and quantitative analysts; broader AI literacy program needed' },
];

const nbFinancialKpis = {
  totalSavings: 1_900_000,
  techScoreBefore: 62,
  techScoreAfter: 91,
  workflowsAnalyzed: 36,
  automationReady: 12,
  unusedLicenseWaste: 930_000,
  savingsSparkline: [0, 120_909, 267_727, 449_091, 682_273, 906_818, 1_088_182, 1_269_545, 1_450_909, 1_632_273, 1_779_091, 1_900_000],
  scoreSparkline: [62, 65, 67, 70, 73, 77, 79, 82, 84, 87, 89, 91],
  workflowSparkline: [0, 3, 5, 9, 13, 17, 21, 25, 28, 31, 33, 36],
  licenseSparkline: [930_000, 860_000, 781_818, 692_727, 603_636, 514_545, 425_455, 350_000, 282_727, 231_818, 184_545, 140_000],
  headcountImpactSparkline: [0, -1, -3, -4, -6, -9, -13, -16, -19, -22, -25, -28],
};

const nbFinancialRoadmapPhases = [
  {
    quarter: 'Q1 2026',
    title: 'Compliance & Risk Data Modernization',
    items: ['KYC/AML automation platform', 'Risk data warehouse upgrade', 'Regulatory reporting pipeline'],
    status: 'active' as const,
    weekPlan: [
      { week: 1, task: 'KYC/AML automation platform evaluation and vendor selection (Comply Advantage, Refinitiv)', owner: 'Chief Compliance Officer' },
      { week: 2, task: 'Risk data warehouse migration to real-time streaming architecture', owner: 'Data Engineering Director' },
      { week: 3, task: 'SEC/FINRA regulatory reporting automation pipeline design', owner: 'Regulatory Technology Lead' },
      { week: 4, task: 'Bloomberg ↔ Murex data integration optimization for T+1 settlement readiness', owner: 'Trading Technology Director' },
    ],
  },
  {
    quarter: 'Q2 2026',
    title: 'Trading & Settlement Automation',
    items: ['Trade settlement AI', 'Portfolio risk optimization', 'Client reporting automation'],
    status: 'active' as const,
    weekPlan: [
      { week: 5, task: 'Trade settlement automation: straight-through processing for 94% of equity trades', owner: 'Operations Director' },
      { week: 6, task: 'AI-powered portfolio risk optimization with real-time VaR recalculation', owner: 'Chief Risk Officer' },
      { week: 7, task: 'Client reporting automation: AI-generated investment summaries and performance attribution', owner: 'Client Services Director' },
      { week: 8, task: 'Anti-money laundering transaction monitoring AI deployment', owner: 'Chief Compliance Officer' },
    ],
  },
  {
    quarter: 'Q3 2026',
    title: 'AI-Powered Analytics & Decision Support',
    items: ['Market intelligence AI', 'Credit risk modeling', 'Fraud detection enhancement'],
    status: 'upcoming' as const,
    weekPlan: [
      { week: 9, task: 'Market intelligence AI: NLP-based news sentiment analysis for trading desk', owner: 'Quantitative Research Lead' },
      { week: 10, task: 'AI credit risk modeling: real-time counterparty risk assessment', owner: 'Chief Risk Officer' },
      { week: 11, task: 'Fraud detection model upgrade: ML-based anomaly detection for 2.4M daily transactions', owner: 'Financial Crime Director' },
      { week: 12, task: 'Automated stress testing and scenario analysis for Basel III compliance', owner: 'Risk Analytics Manager' },
    ],
  },
  {
    quarter: 'Q4 2026',
    title: 'Full AI Integration & Regulatory Excellence',
    items: ['AI model governance framework', 'Regulatory AI validation', 'Year 2 roadmap'],
    status: 'upcoming' as const,
    weekPlan: [
      { week: 13, task: 'AI model governance framework: explainability, bias testing, and audit trails for all models', owner: 'Chief Risk Officer' },
      { week: 14, task: 'Regulatory AI validation: SEC/FINRA model risk management compliance certification', owner: 'Regulatory Technology Lead' },
      { week: 15, task: 'Board presentation: $1.9M Year 1 savings confirmed, Year 2 roadmap ($8.4M target)', owner: 'OpCo General Manager' },
      { week: 16, task: 'Hypercare and continuous improvement: model monitoring, drift detection, retraining cycles', owner: 'Quantitative Research Lead' },
    ],
  },
];

const nbFinancialTopOpportunities: Opportunity[] = [
  { name: 'KYC/AML Automation', category: 'Compliance', savings: 470_000, effort: 'Medium', status: 'in-progress', priority: 10, timeToValue: 10, confidence: 88 },
  { name: 'Trade Settlement STP', category: 'Operations', savings: 350_000, effort: 'Medium', status: 'in-progress', priority: 9, timeToValue: 8, confidence: 92 },
  { name: 'Regulatory Reporting Automation', category: 'Regulatory', savings: 310_000, effort: 'Medium', status: 'identified', priority: 9, timeToValue: 12, confidence: 86 },
  { name: 'Portfolio Risk AI Optimization', category: 'Risk', savings: 270_000, effort: 'High', status: 'identified', priority: 8, timeToValue: 16, confidence: 78 },
  { name: 'Client Reporting AI', category: 'Client Services', savings: 230_000, effort: 'Low', status: 'in-progress', priority: 7, timeToValue: 6, confidence: 94 },
  { name: 'License Consolidation (Terminal/Data)', category: 'License Audit', savings: 270_000, effort: 'Low', status: 'in-progress', priority: 10, timeToValue: 4, confidence: 96 },
];

const nbFinancialCurrentStack: CurrentTool[] = [
  { name: 'Bloomberg Terminal', category: 'Market Data', annualCost: 8_400_000, users: 420, score: 8, integrationComplexity: 'Medium', migrationWeeks: 8, riskLevel: 'Low', dependencies: ['Market Data', 'Trading Analytics', 'News Feed', 'Fixed Income Pricing'] },
  { name: 'Murex MX.3', category: 'Trading Platform', annualCost: 6_200_000, users: 340, score: 7, integrationComplexity: 'High', migrationWeeks: 36, riskLevel: 'High', dependencies: ['Trade Execution', 'Position Management', 'P&L Attribution', 'Risk Calculation'] },
  { name: 'Calypso', category: 'Risk Engine', annualCost: 3_400_000, users: 180, score: 6, integrationComplexity: 'High', migrationWeeks: 28, riskLevel: 'High', dependencies: ['Market Risk', 'Credit Risk', 'Collateral Management', 'VaR Calculation'] },
  { name: 'SAP S/4HANA', category: 'ERP/Finance', annualCost: 2_200_000, users: 1_800, score: 7, integrationComplexity: 'High', migrationWeeks: 24, riskLevel: 'Medium', dependencies: ['General Ledger', 'Regulatory Reporting', 'Cost Allocation', 'Intercompany'] },
  { name: 'Refinitiv Eikon', category: 'Data/Analytics', annualCost: 2_800_000, users: 280, score: 6, integrationComplexity: 'Medium', migrationWeeks: 12, riskLevel: 'Low', dependencies: ['Research Data', 'ESG Analytics', 'Company Screening', 'Deal Intelligence'] },
  { name: 'Broadridge', category: 'Back Office', annualCost: 1_800_000, users: 420, score: 5, integrationComplexity: 'Medium', migrationWeeks: 20, riskLevel: 'Medium', dependencies: ['Trade Settlement', 'Reconciliation', 'Corporate Actions', 'Client Reporting'] },
];

const nbFinancialLicenses: License[] = [
  { vendor: 'Bloomberg Terminal', totalLicenses: 180, active90d: 140, inactive: 40, annualWaste: 440_000, action: 'Reclaim 40 inactive terminals + optimize to B-PIPE for data-only users', costPerLicense: 8_000, department: 'Trading / Research', lastAuditDate: '2026-01-15', trend: [88, 84, 80, 76, 74, 78], complianceRisk: false },
  { vendor: 'Murex MX.3', totalLicenses: 120, active90d: 98, inactive: 22, annualWaste: 260_000, action: 'Reclaim 22 seats from non-trading support staff', costPerLicense: 8_180, department: 'Trading / Operations', lastAuditDate: '2026-02-01', trend: [90, 86, 82, 80, 78, 82], complianceRisk: false },
  { vendor: 'Refinitiv Eikon', totalLicenses: 140, active90d: 100, inactive: 40, annualWaste: 170_000, action: 'Consolidate with Bloomberg where overlap exists', costPerLicense: 3_000, department: 'Research / Sales', lastAuditDate: '2026-01-20', trend: [82, 76, 72, 68, 66, 71], complianceRisk: false },
  { vendor: 'Calypso', totalLicenses: 80, active90d: 62, inactive: 18, annualWaste: 60_000, action: 'Reclaim 18 seats from legacy risk team members', costPerLicense: 3_333, department: 'Risk Management', lastAuditDate: '2025-12-10', trend: [86, 82, 78, 76, 74, 78], complianceRisk: true },
];

const nbFinancialWorkflowSummary = {
  total: 36,
  fullyAutomatable: 12,
  humanInLoop: 16,
  humanRequired: 8,
  currentLaborSpend: 10_200_000,
  potentialSavings: 1_600_000,
};

const nbFinancialRoiSummary = {
  techStackSavings: 1_200_000,
  workflowAutomation: 1_600_000,
  licenseRecovery: 900_000,
  implementationCosts: 1_800_000,
  netYear1: 1_900_000,
  year2Projected: 3_230_000,
};

// ═══════════════════════════════════════════════════════════════════════════════
// ─── NB Health Sciences (Northbridge OpCo) ──────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

const nbHealthCompanyProfile = {
  name: 'NB Health Sciences',
  industry: 'Pharma & Biotech',
  employees: 16_100,
  opCos: 1,
  opCoNames: ['NB Health Sciences'],
  techSpend: '$56M/yr',
  aiReadinessScore: 55,
  holdingPeriod: 'Northbridge Industries OpCo',
  ebitdaMargin: '20.4%',
  targetEbitdaMargin: '28%',
};

const nbHealthAiReadinessBreakdown = [
  { category: 'Data Infrastructure', score: 58, maxScore: 100, status: 'Moderate — Veeva Vault and LIMS systems well-structured for clinical data, but R&D data silos persist across 4 therapeutic areas' },
  { category: 'Process Maturity', score: 52, maxScore: 100, status: 'Moderate — 38 workflows mapped, 14 automated; clinical trial management partially digitized, but lab data capture and pharmacovigilance remain manual' },
  { category: 'Tech Stack Modernity', score: 58, maxScore: 100, status: 'Mixed — Veeva Clinical Suite is modern, but legacy LIMS, paper-based batch records, and disconnected safety databases need urgent modernization' },
  { category: 'Change Readiness', score: 50, maxScore: 100, status: 'Moderate — R&D teams embrace AI for drug discovery, but GxP-regulated manufacturing and quality teams require extensive validation for any change' },
  { category: 'Skills & Training', score: 56, maxScore: 100, status: 'Developing — 16,100 employees include 2,400 scientists and 120 data scientists, but GxP AI validation skills scarce; clinical ops needs upskilling' },
];

const nbHealthKpis = {
  totalSavings: 2_700_000,
  techScoreBefore: 55,
  techScoreAfter: 89,
  workflowsAnalyzed: 44,
  automationReady: 14,
  unusedLicenseWaste: 1_120_000,
  savingsSparkline: [0, 171_818, 380_455, 638_182, 969_545, 1_288_636, 1_546_364, 1_804_091, 2_061_818, 2_319_545, 2_528_182, 2_700_000],
  scoreSparkline: [55, 58, 61, 65, 68, 71, 75, 79, 82, 85, 87, 89],
  workflowSparkline: [0, 3, 7, 11, 16, 21, 25, 29, 33, 36, 40, 44],
  licenseSparkline: [1_120_000, 1_024_545, 929_091, 833_636, 727_273, 619_091, 510_909, 416_364, 329_091, 252_727, 194_545, 150_000],
  headcountImpactSparkline: [0, -1, -3, -6, -9, -13, -17, -22, -27, -30, -34, -38],
};

const nbHealthRoadmapPhases = [
  {
    quarter: 'Q1 2026',
    title: 'Clinical Data Platform & Veeva Integration',
    items: ['Clinical data lake consolidation', 'Veeva Vault optimization', 'LIMS modernization assessment'],
    status: 'active' as const,
    weekPlan: [
      { week: 1, task: 'Clinical data lake architecture: Veeva Vault, LIMS, EDC, and safety data unification', owner: 'Chief Data Officer' },
      { week: 2, task: 'Veeva Vault Clinical Suite optimization and configuration audit across 12 active trials', owner: 'Clinical Systems Director' },
      { week: 3, task: 'LIMS modernization assessment: evaluate replacement of 15-year-old LabWare instance', owner: 'Lab Operations Director' },
      { week: 4, task: 'GxP data integrity framework: 21 CFR Part 11 compliance validation for AI systems', owner: 'Quality Assurance VP' },
    ],
  },
  {
    quarter: 'Q2 2026',
    title: 'Clinical Trial Optimization & Safety AI',
    items: ['Patient recruitment AI', 'Pharmacovigilance automation', 'Electronic batch records'],
    status: 'active' as const,
    weekPlan: [
      { week: 5, task: 'AI-powered patient recruitment: predictive enrollment modeling for 12 active Phase II/III trials', owner: 'Clinical Operations VP' },
      { week: 6, task: 'Pharmacovigilance automation: NLP-based adverse event detection from 840K case reports', owner: 'Drug Safety Director' },
      { week: 7, task: 'Electronic batch record (EBR) deployment across 4 manufacturing sites', owner: 'Manufacturing Systems Director' },
      { week: 8, task: 'Clinical trial data quality AI: automated edit check and query resolution', owner: 'Clinical Data Management Lead' },
    ],
  },
  {
    quarter: 'Q3 2026',
    title: 'Drug Discovery AI & Manufacturing Intelligence',
    items: ['AI-assisted molecule screening', 'Process analytical technology', 'Supply chain optimization'],
    status: 'upcoming' as const,
    weekPlan: [
      { week: 9, task: 'AI-assisted molecule screening: ML models for lead compound optimization across 3 therapeutic areas', owner: 'Computational Chemistry Lead' },
      { week: 10, task: 'Process analytical technology (PAT): real-time quality monitoring for continuous manufacturing', owner: 'Manufacturing Sciences Director' },
      { week: 11, task: 'Cold chain supply optimization: AI-driven temperature excursion prediction for biologics', owner: 'Supply Chain Director' },
      { week: 12, task: 'Regulatory submission automation: AI-assisted eCTD compilation for FDA/EMA filings', owner: 'Regulatory Affairs VP' },
    ],
  },
  {
    quarter: 'Q4 2026',
    title: 'GxP AI Validation & Enterprise Scale',
    items: ['AI model validation framework', 'Enterprise AI governance', 'Year 2 roadmap'],
    status: 'upcoming' as const,
    weekPlan: [
      { week: 13, task: 'GxP AI validation framework: computer system validation (CSV) for all production AI models', owner: 'Quality Assurance VP' },
      { week: 14, task: 'Enterprise AI governance: model risk management, change control, and audit trail compliance', owner: 'Chief Data Officer' },
      { week: 15, task: 'Board presentation: $2.7M Year 1 savings confirmed, Year 2 roadmap ($10.8M target)', owner: 'OpCo General Manager' },
      { week: 16, task: 'Hypercare and continuous improvement: AI model retraining, GxP re-validation cycles', owner: 'Clinical Systems Director' },
    ],
  },
];

const nbHealthTopOpportunities: Opportunity[] = [
  { name: 'Clinical Trial Patient Recruitment AI', category: 'Clinical Ops', savings: 640_000, effort: 'High', status: 'in-progress', priority: 10, timeToValue: 14, confidence: 82 },
  { name: 'Pharmacovigilance Automation', category: 'Drug Safety', savings: 550_000, effort: 'Medium', status: 'in-progress', priority: 9, timeToValue: 10, confidence: 88 },
  { name: 'Electronic Batch Record Deployment', category: 'Manufacturing', savings: 360_000, effort: 'High', status: 'identified', priority: 8, timeToValue: 16, confidence: 80 },
  { name: 'Regulatory Submission Automation', category: 'Regulatory', savings: 460_000, effort: 'Medium', status: 'identified', priority: 9, timeToValue: 12, confidence: 84 },
  { name: 'Lab Data Capture Automation', category: 'R&D', savings: 270_000, effort: 'Medium', status: 'identified', priority: 7, timeToValue: 8, confidence: 90 },
  { name: 'License Consolidation (Veeva/LIMS)', category: 'License Audit', savings: 420_000, effort: 'Low', status: 'in-progress', priority: 10, timeToValue: 4, confidence: 95 },
];

const nbHealthCurrentStack: CurrentTool[] = [
  { name: 'Veeva Vault Clinical', category: 'Clinical Suite', annualCost: 8_200_000, users: 2_800, score: 7, integrationComplexity: 'Medium', migrationWeeks: 16, riskLevel: 'Medium', dependencies: ['eTMF', 'CTMS', 'Clinical Data', 'Regulatory Submissions'] },
  { name: 'LabWare LIMS', category: 'Lab Management', annualCost: 3_400_000, users: 1_600, score: 4, integrationComplexity: 'High', migrationWeeks: 28, riskLevel: 'High', dependencies: ['Sample Management', 'Test Results', 'Quality Control', 'Stability Studies'] },
  { name: 'SAP S/4HANA', category: 'ERP', annualCost: 3_800_000, users: 4_200, score: 7, integrationComplexity: 'High', migrationWeeks: 24, riskLevel: 'High', dependencies: ['Finance', 'Procurement', 'Manufacturing', 'Quality Management'] },
  { name: 'Medidata Rave', category: 'EDC', annualCost: 4_600_000, users: 1_200, score: 6, integrationComplexity: 'Medium', migrationWeeks: 20, riskLevel: 'Medium', dependencies: ['Electronic Data Capture', 'Patient Randomization', 'Clinical Analytics'] },
  { name: 'TrackWise', category: 'Quality Management', annualCost: 2_200_000, users: 3_600, score: 5, integrationComplexity: 'Medium', migrationWeeks: 16, riskLevel: 'Medium', dependencies: ['CAPA', 'Deviation Management', 'Change Control', 'Complaint Handling'] },
  { name: 'Argus Safety', category: 'Pharmacovigilance', annualCost: 1_800_000, users: 480, score: 5, integrationComplexity: 'High', migrationWeeks: 24, riskLevel: 'High', dependencies: ['Adverse Event Reporting', 'Signal Detection', 'CIOMS/MedWatch', 'PADER'] },
];

const nbHealthLicenses: License[] = [
  { vendor: 'Veeva Vault', totalLicenses: 720, active90d: 540, inactive: 180, annualWaste: 480_000, action: 'Reclaim 180 inactive seats from completed trial teams', costPerLicense: 2_111, department: 'Clinical / Regulatory', lastAuditDate: '2026-01-18', trend: [85, 80, 76, 72, 70, 75], complianceRisk: false },
  { vendor: 'LabWare LIMS', totalLicenses: 400, active90d: 280, inactive: 120, annualWaste: 320_000, action: 'Reclaim 120 seats + evaluate LIMS replacement', costPerLicense: 2_167, department: 'Lab Operations / QC', lastAuditDate: '2026-02-05', trend: [82, 76, 70, 66, 64, 70], complianceRisk: true },
  { vendor: 'Medidata Rave', totalLicenses: 360, active90d: 280, inactive: 80, annualWaste: 220_000, action: 'Reclaim 80 seats from inactive study coordinators', costPerLicense: 2_250, department: 'Clinical Data Management', lastAuditDate: '2026-01-10', trend: [88, 84, 80, 78, 76, 78], complianceRisk: false },
  { vendor: 'Argus Safety', totalLicenses: 160, active90d: 120, inactive: 40, annualWaste: 100_000, action: 'Optimize license tiers — downgrade 40 to read-only', costPerLicense: 2_500, department: 'Drug Safety / PV', lastAuditDate: '2025-12-20', trend: [86, 82, 78, 76, 74, 75], complianceRisk: false },
];

const nbHealthWorkflowSummary = {
  total: 42,
  fullyAutomatable: 14,
  humanInLoop: 20,
  humanRequired: 8,
  currentLaborSpend: 13_200_000,
  potentialSavings: 2_600_000,
};

const nbHealthRoiSummary = {
  techStackSavings: 1_400_000,
  workflowAutomation: 2_600_000,
  licenseRecovery: 1_100_000,
  implementationCosts: 2_400_000,
  netYear1: 2_700_000,
  year2Projected: 4_590_000,
};

// ═══════════════════════════════════════════════════════════════════════════════
// ─── Republic of Estonia — Digital Government (Sovereign) ────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

const estoniaCompanyProfile = {
  name: 'Republic of Estonia — Digital Government',
  industry: 'Digital Government',
  employees: 28_500,
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
  totalSavings: 8_000_000,
  techScoreBefore: 68,
  techScoreAfter: 94,
  workflowsAnalyzed: 126,
  automationReady: 62,
  unusedLicenseWaste: 3_000_000,
  savingsSparkline: [0, 509_091, 1_127_273, 1_890_909, 2_872_727, 3_818_182, 4_581_818, 5_345_455, 6_109_091, 6_872_727, 7_490_909, 8_000_000],
  scoreSparkline: [68, 71, 73, 76, 78, 81, 83, 86, 88, 91, 93, 94],
  workflowSparkline: [0, 10, 21, 32, 47, 62, 74, 86, 97, 108, 117, 126],
  licenseSparkline: [3_000_000, 2_745_455, 2_436_364, 2_054_545, 1_727_273, 1_409_091, 1_090_909, 840_909, 629_091, 482_727, 383_636, 320_000],
  headcountImpactSparkline: [0, -3, -6, -11, -21, -31, -43, -56, -70, -83, -93, -102],
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
      { week: 24, task: 'Annual review: €8.0M in savings confirmed, 94 AI readiness score achieved, EU showcase presentation', owner: 'CTO, Government Digital Office' },
    ],
  },
];

const estoniaTopOpportunities: Opportunity[] = [
  { name: 'Tax Compliance Automation', category: 'Tax & Revenue', savings: 1_620_000, effort: 'Medium', status: 'automated', priority: 10, timeToValue: 8, confidence: 94 },
  { name: 'Citizen Services AI', category: 'Citizen Services', savings: 1_470_000, effort: 'High', status: 'in-progress', priority: 9, timeToValue: 14, confidence: 86 },
  { name: 'Healthcare Records Integration', category: 'Healthcare', savings: 1_310_000, effort: 'High', status: 'in-progress', priority: 9, timeToValue: 16, confidence: 82 },
  { name: 'Cross-Ministry Data Platform', category: 'Data Infrastructure', savings: 1_080_000, effort: 'High', status: 'identified', priority: 8, timeToValue: 20, confidence: 78 },
  { name: 'Procurement Optimization', category: 'Procurement', savings: 810_000, effort: 'Medium', status: 'identified', priority: 7, timeToValue: 10, confidence: 84 },
  { name: 'Legacy System Modernization', category: 'Tech Stack', savings: 460_000, effort: 'High', status: 'identified', priority: 7, timeToValue: 24, confidence: 72 },
  { name: 'Education System Automation', category: 'Education', savings: 700_000, effort: 'Medium', status: 'identified', priority: 6, timeToValue: 12, confidence: 80 },
  { name: 'Environmental Compliance AI', category: 'Environment', savings: 550_000, effort: 'Medium', status: 'identified', priority: 5, timeToValue: 14, confidence: 76 },
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
  potentialSavings: 6_800_000,
};

const estoniaRoiSummary = {
  techStackSavings: 4_200_000,
  workflowAutomation: 6_800_000,
  licenseRecovery: 2_400_000,
  implementationCosts: 5_400_000,
  netYear1: 8_000_000,
  year2Projected: 13_600_000,
};

// ═══════════════════════════════════════════════════════════════════════════════
// ─── Estonia: Fiscal Policy & Taxation (ee-finance) ──────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

const eeFinanceCompanyProfile = {
  name: 'Fiscal Policy & Taxation',
  industry: 'Government — Tax & Revenue',
  employees: 4_200,
  opCos: 0,
  opCoNames: [] as string[],
  techSpend: '€14M/yr',
  aiReadinessScore: 74,
  holdingPeriod: 'Government agency',
  ebitdaMargin: 'N/A',
  targetEbitdaMargin: 'N/A',
};

const eeFinanceAiReadinessBreakdown = [
  { category: 'Data Infrastructure', score: 82, maxScore: 100, status: 'Strong — e-MTA tax portal processes 680,000+ annual returns with structured data pipelines, real-time revenue tracking' },
  { category: 'Process Maturity', score: 74, maxScore: 100, status: 'Above Average — 28 of 34 tax workflows digitized, but VAT cross-border reconciliation and audit selection still partially manual' },
  { category: 'Tech Stack Modernity', score: 78, maxScore: 100, status: 'Advanced — SAP FICO core with e-MTA portal, though legacy customs declaration system needs modernization' },
  { category: 'Change Readiness', score: 66, maxScore: 100, status: 'Moderate — finance staff receptive to automation, but tax auditors require retraining on AI-assisted risk scoring' },
  { category: 'Skills & Training', score: 70, maxScore: 100, status: 'Developing — tax analytics team proficient in data science, but broader workforce needs AI literacy upskilling' },
];

const eeFinanceKpis = {
  totalSavings: 2_200_000,
  techScoreBefore: 74,
  techScoreAfter: 95,
  workflowsAnalyzed: 34,
  automationReady: 18,
  unusedLicenseWaste: 680_000,
  savingsSparkline: [0, 140_000, 310_000, 520_000, 790_000, 1_050_000, 1_260_000, 1_470_000, 1_680_000, 1_890_000, 2_060_000, 2_200_000],
  scoreSparkline: [74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 95],
  workflowSparkline: [0, 3, 5, 8, 11, 15, 19, 23, 26, 29, 31, 34],
  licenseSparkline: [680_000, 622_727, 565_455, 508_182, 440_000, 370_000, 300_000, 243_636, 194_545, 156_364, 125_455, 100_000],
  headcountImpactSparkline: [0, -1, -3, -6, -9, -13, -17, -21, -24, -27, -29, -32],
};

const eeFinanceRoadmapPhases = [
  {
    quarter: 'Q1 2026',
    title: 'Tax Automation Foundation',
    items: ['e-MTA AI integration', 'Automated income tax verification', 'VAT compliance engine pilot'],
    status: 'active' as const,
    weekPlan: [
      { week: 1, task: 'e-MTA portal AI gateway deployment for automated return processing', owner: 'Tax IT Director' },
      { week: 2, task: 'Income tax verification model training on 680,000 historical returns', owner: 'Tax Analytics Lead' },
      { week: 3, task: 'VAT cross-border reconciliation AI pilot with EU partner states', owner: 'VAT Compliance Manager' },
      { week: 4, task: 'Q1 checkpoint: automated verification covering 40% of personal income returns', owner: 'Tax IT Director' },
    ],
  },
  {
    quarter: 'Q2 2026',
    title: 'Fiscal Transparency & Budget Analytics',
    items: ['Real-time budget dashboard', 'Expenditure anomaly detection', 'Revenue forecasting AI'],
    status: 'upcoming' as const,
    weekPlan: [
      { week: 5, task: 'SAP FICO integration for real-time budget execution monitoring across all ministries', owner: 'Budget Analytics Lead' },
      { week: 6, task: 'Expenditure anomaly detection model deployment — flagging irregular spending patterns', owner: 'Fiscal Audit Director' },
      { week: 7, task: 'Revenue forecasting AI: monthly tax revenue predictions with 96% accuracy target', owner: 'Tax Analytics Lead' },
      { week: 8, task: 'Mid-year review: fiscal transparency dashboard live for all 8 ministry budget officers', owner: 'CFO, Ministry of Finance' },
    ],
  },
  {
    quarter: 'Q3 2026',
    title: 'Audit & Compliance AI',
    items: ['Risk-based audit selection', 'Transfer pricing analysis', 'Anti-fraud detection'],
    status: 'upcoming' as const,
    weekPlan: [
      { week: 9, task: 'AI-powered risk-based audit selection replacing random sampling — targeting 3x higher yield', owner: 'Tax Audit Director' },
      { week: 10, task: 'Transfer pricing AI analysis for multinational corporations operating in Estonia', owner: 'International Tax Lead' },
      { week: 11, task: 'Anti-fraud detection system: real-time VAT carousel fraud identification', owner: 'Fraud Prevention Unit' },
      { week: 12, task: 'Q3 review: audit yield improved 180%, fraud detection rate up 220%', owner: 'Tax IT Director' },
    ],
  },
  {
    quarter: 'Q4 2026',
    title: 'Full Tax Automation & EU Reporting',
    items: ['End-to-end tax processing', 'EU DAC7/DAC8 compliance', 'Citizen tax assistant'],
    status: 'upcoming' as const,
    weekPlan: [
      { week: 13, task: 'End-to-end automated tax processing: 95% of returns processed without human intervention', owner: 'Tax IT Director' },
      { week: 14, task: 'EU DAC7/DAC8 automated reporting for platform economy and crypto-asset transactions', owner: 'International Tax Lead' },
      { week: 15, task: 'AI citizen tax assistant: natural language tax filing support in Estonian, Russian, English', owner: 'Citizen Services Lead' },
      { week: 16, task: 'Annual review: €2.2M savings confirmed, AI readiness 95, EU compliance showcase', owner: 'CFO, Ministry of Finance' },
    ],
  },
];

const eeFinanceTopOpportunities: Opportunity[] = [
  { name: 'Automated Tax Return Processing', category: 'Tax Automation', savings: 760_000, effort: 'Medium', status: 'in-progress', priority: 10, timeToValue: 8, confidence: 94 },
  { name: 'VAT Cross-Border Reconciliation', category: 'VAT Compliance', savings: 510_000, effort: 'High', status: 'in-progress', priority: 9, timeToValue: 12, confidence: 88 },
  { name: 'Budget Optimization Analytics', category: 'Budget Analytics', savings: 340_000, effort: 'Medium', status: 'identified', priority: 8, timeToValue: 10, confidence: 86 },
  { name: 'Risk-Based Audit Selection', category: 'Tax Audit', savings: 250_000, effort: 'Medium', status: 'identified', priority: 8, timeToValue: 14, confidence: 82 },
  { name: 'Revenue Forecasting AI', category: 'Fiscal Planning', savings: 200_000, effort: 'Low', status: 'identified', priority: 7, timeToValue: 8, confidence: 84 },
  { name: 'Anti-Fraud Detection System', category: 'Fraud Prevention', savings: 140_000, effort: 'High', status: 'identified', priority: 7, timeToValue: 16, confidence: 78 },
];

const eeFinanceCurrentStack: CurrentTool[] = [
  { name: 'SAP FICO', category: 'Financial ERP', annualCost: 1_800_000, users: 840, score: 6, integrationComplexity: 'High', migrationWeeks: 20, riskLevel: 'High', dependencies: ['Budget Management', 'General Ledger', 'Financial Reporting'] },
  { name: 'e-MTA Portal', category: 'Tax Platform', annualCost: 2_200_000, users: 4_200, score: 8, integrationComplexity: 'Low', migrationWeeks: 0, riskLevel: 'Low', dependencies: ['Tax Filing', 'Return Processing', 'Taxpayer Registry'] },
  { name: 'X-Road (Finance)', category: 'Data Exchange', annualCost: 400_000, users: 4_200, score: 8, integrationComplexity: 'Low', migrationWeeks: 0, riskLevel: 'Low', dependencies: ['Cross-Ministry Data', 'Bank Integrations', 'EU Tax Exchange'] },
  { name: 'Oracle BI', category: 'Analytics', annualCost: 480_000, users: 320, score: 5, integrationComplexity: 'Medium', migrationWeeks: 12, riskLevel: 'Medium', dependencies: ['Revenue Dashboards', 'Budget Reports', 'Audit Analytics'] },
  { name: 'Customs Declaration System', category: 'Customs', annualCost: 600_000, users: 280, score: 4, integrationComplexity: 'High', migrationWeeks: 16, riskLevel: 'High', dependencies: ['Import/Export Processing', 'Tariff Classification', 'EU NCTS'] },
  { name: 'PostgreSQL', category: 'Database', annualCost: 120_000, users: 420, score: 7, integrationComplexity: 'Low', migrationWeeks: 4, riskLevel: 'Low', dependencies: ['Tax Records', 'Audit Trails', 'Reporting Data'] },
];

const eeFinanceLicenses: License[] = [
  { vendor: 'SAP FICO Suite', totalLicenses: 840, active90d: 620, inactive: 220, annualWaste: 330_000, action: 'Reclaim 220 inactive seats and consolidate to S/4HANA Finance', costPerLicense: 1_500, department: 'Ministry of Finance', lastAuditDate: '2026-01-15', trend: [78, 74, 72, 70, 68, 74], complianceRisk: false },
  { vendor: 'Oracle BI Enterprise', totalLicenses: 320, active90d: 180, inactive: 140, annualWaste: 196_000, action: 'Migrate 140 seats to open-source Metabase or Superset', costPerLicense: 1_400, department: 'Budget Analytics Division', lastAuditDate: '2025-12-20', trend: [72, 66, 60, 56, 54, 56], complianceRisk: true },
  { vendor: 'Microsoft 365 E3', totalLicenses: 4_200, active90d: 3_600, inactive: 600, annualWaste: 108_000, action: 'Downgrade 600 seats to F3 frontline tier', costPerLicense: 180, department: 'All Finance Divisions', lastAuditDate: '2026-02-01', trend: [90, 86, 84, 82, 80, 86], complianceRisk: false },
  { vendor: 'Customs Legacy Modules', totalLicenses: 28, active90d: 14, inactive: 14, annualWaste: 46_000, action: 'Decommission legacy customs modules — migrate to EU NCTS Phase 5', costPerLicense: 3_286, department: 'Customs IT', lastAuditDate: '2025-11-10', trend: [58, 52, 48, 44, 42, 50], complianceRisk: true },
];

const eeFinanceWorkflowSummary = {
  total: 36,
  fullyAutomatable: 18,
  humanInLoop: 8,
  humanRequired: 10,
  currentLaborSpend: 8_400_000,
  potentialSavings: 1_800_000,
};

const eeFinanceRoiSummary = {
  techStackSavings: 1_200_000,
  workflowAutomation: 1_800_000,
  licenseRecovery: 680_000,
  implementationCosts: 1_480_000,
  netYear1: 2_200_000,
  year2Projected: 3_740_000,
};

// ═══════════════════════════════════════════════════════════════════════════════
// ─── Estonia: Healthcare & Social Welfare (ee-social) ────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

const eeSocialCompanyProfile = {
  name: 'Healthcare & Social Welfare',
  industry: 'Government — Health & Social Services',
  employees: 8_400,
  opCos: 0,
  opCoNames: [] as string[],
  techSpend: '€28M/yr',
  aiReadinessScore: 68,
  holdingPeriod: 'Government agency',
  ebitdaMargin: 'N/A',
  targetEbitdaMargin: 'N/A',
};

const eeSocialAiReadinessBreakdown = [
  { category: 'Data Infrastructure', score: 72, maxScore: 100, status: 'Good — TEHIK health information system connects 400+ healthcare providers, but social welfare data silos persist across regional offices' },
  { category: 'Process Maturity', score: 64, maxScore: 100, status: 'Moderate — benefits processing 70% digitized, but case management and eligibility verification require significant manual review' },
  { category: 'Tech Stack Modernity', score: 68, maxScore: 100, status: 'Mixed — TEHIK modern health records coexist with legacy social welfare case management system built in 2008' },
  { category: 'Change Readiness', score: 62, maxScore: 100, status: 'Moderate — healthcare staff open to AI diagnostics, but social workers concerned about algorithmic bias in benefits decisions' },
  { category: 'Skills & Training', score: 58, maxScore: 100, status: 'Developing — clinical informaticists strong, but social welfare workforce needs substantial AI literacy and change management support' },
];

const eeSocialKpis = {
  totalSavings: 2_800_000,
  techScoreBefore: 68,
  techScoreAfter: 93,
  workflowsAnalyzed: 42,
  automationReady: 18,
  unusedLicenseWaste: 920_000,
  savingsSparkline: [0, 178_182, 394_545, 661_818, 1_005_455, 1_336_364, 1_603_636, 1_870_909, 2_138_182, 2_405_455, 2_621_818, 2_800_000],
  scoreSparkline: [68, 70, 72, 75, 77, 80, 82, 85, 87, 89, 91, 93],
  workflowSparkline: [0, 3, 6, 10, 14, 19, 25, 29, 33, 36, 39, 42],
  licenseSparkline: [920_000, 843_636, 764_545, 681_818, 593_636, 504_545, 415_455, 340_000, 271_818, 214_545, 168_182, 130_000],
  headcountImpactSparkline: [0, -2, -4, -8, -12, -18, -24, -31, -39, -45, -51, -56],
};

const eeSocialRoadmapPhases = [
  {
    quarter: 'Q1 2026',
    title: 'Health Records AI Integration',
    items: ['TEHIK AI diagnostic support', 'Patient timeline unification', 'Prescription fraud detection'],
    status: 'active' as const,
    weekPlan: [
      { week: 1, task: 'TEHIK health information system AI gateway — enabling cross-provider patient data analysis', owner: 'TEHIK Director' },
      { week: 2, task: 'Patient timeline unification: merging records from 400+ providers into single longitudinal view', owner: 'Health IT Architect' },
      { week: 3, task: 'Prescription fraud detection model training on 5 years of dispensing data', owner: 'Health Insurance Fund IT' },
      { week: 4, task: 'Q1 checkpoint: unified patient timeline operational for 50 pilot clinics', owner: 'TEHIK Director' },
    ],
  },
  {
    quarter: 'Q2 2026',
    title: 'Benefits & Case Management AI',
    items: ['Automated eligibility verification', 'Benefits fraud detection', 'Case priority scoring'],
    status: 'upcoming' as const,
    weekPlan: [
      { week: 5, task: 'Automated benefits eligibility verification via X-Road cross-registry lookups', owner: 'Social Welfare IT Lead' },
      { week: 6, task: 'Benefits fraud detection AI: pattern analysis across pension, disability, and child benefits', owner: 'Fraud Prevention Unit' },
      { week: 7, task: 'Social worker case priority scoring — AI-assisted urgency triage for 12,000 active cases', owner: 'Case Management Director' },
      { week: 8, task: 'Mid-year review: eligibility processing time reduced 60%, fraud detection rate up 150%', owner: 'Deputy Minister, Social Affairs' },
    ],
  },
  {
    quarter: 'Q3 2026',
    title: 'Predictive Health & Welfare Analytics',
    items: ['Population health risk models', 'Early intervention alerts', 'Resource allocation optimization'],
    status: 'upcoming' as const,
    weekPlan: [
      { week: 9, task: 'Population health risk model: predicting chronic disease onset for preventive intervention', owner: 'Public Health Director' },
      { week: 10, task: 'Early intervention alert system for at-risk families and vulnerable populations', owner: 'Social Welfare IT Lead' },
      { week: 11, task: 'Hospital resource allocation AI: bed management, staffing, and equipment optimization', owner: 'Hospital Network Director' },
      { week: 12, task: 'Q3 review: preventive interventions increased 40%, hospital wait times reduced 25%', owner: 'TEHIK Director' },
    ],
  },
  {
    quarter: 'Q4 2026',
    title: 'Citizen Health Portal & Full Automation',
    items: ['AI health assistant', 'Automated referral processing', 'EU health data space compliance'],
    status: 'upcoming' as const,
    weekPlan: [
      { week: 13, task: 'AI citizen health assistant: symptom checker, appointment booking, medication reminders', owner: 'Citizen Health Services Lead' },
      { week: 14, task: 'Automated referral processing: GP to specialist routing with AI-suggested pathways', owner: 'Primary Care IT Lead' },
      { week: 15, task: 'EU European Health Data Space (EHDS) compliance and cross-border health record exchange', owner: 'EU Compliance Officer' },
      { week: 16, task: 'Annual review: €2.8M savings confirmed, 93 AI readiness, 42 workflows automated', owner: 'Deputy Minister, Social Affairs' },
    ],
  },
];

const eeSocialTopOpportunities: Opportunity[] = [
  { name: 'TEHIK Health Records AI', category: 'Health IT', savings: 990_000, effort: 'High', status: 'in-progress', priority: 10, timeToValue: 14, confidence: 86 },
  { name: 'Benefits Eligibility Automation', category: 'Social Welfare', savings: 660_000, effort: 'Medium', status: 'in-progress', priority: 9, timeToValue: 10, confidence: 88 },
  { name: 'Case Management AI', category: 'Social Services', savings: 410_000, effort: 'Medium', status: 'identified', priority: 8, timeToValue: 12, confidence: 82 },
  { name: 'Prescription Fraud Detection', category: 'Health Insurance', savings: 330_000, effort: 'Medium', status: 'identified', priority: 8, timeToValue: 8, confidence: 90 },
  { name: 'Population Health Analytics', category: 'Public Health', savings: 250_000, effort: 'High', status: 'identified', priority: 7, timeToValue: 16, confidence: 76 },
  { name: 'Hospital Resource Optimization', category: 'Healthcare Operations', savings: 160_000, effort: 'High', status: 'identified', priority: 6, timeToValue: 18, confidence: 74 },
];

const eeSocialCurrentStack: CurrentTool[] = [
  { name: 'TEHIK', category: 'Health Information', annualCost: 4_600_000, users: 8_200, score: 7, integrationComplexity: 'Medium', migrationWeeks: 0, riskLevel: 'Low', dependencies: ['Patient Records', 'Prescription System', 'Lab Results'] },
  { name: 'Social Welfare Legacy', category: 'Case Management', annualCost: 1_200_000, users: 3_400, score: 3, integrationComplexity: 'High', migrationWeeks: 28, riskLevel: 'High', dependencies: ['Benefits Processing', 'Case Tracking', 'Eligibility Verification'] },
  { name: 'Health Insurance Fund IS', category: 'Insurance', annualCost: 1_800_000, users: 1_200, score: 6, integrationComplexity: 'Medium', migrationWeeks: 16, riskLevel: 'Medium', dependencies: ['Claims Processing', 'Provider Payments', 'Coverage Verification'] },
  { name: 'X-Road (Social)', category: 'Data Exchange', annualCost: 300_000, users: 8_400, score: 8, integrationComplexity: 'Low', migrationWeeks: 0, riskLevel: 'Low', dependencies: ['Cross-Registry Lookups', 'Benefit Verification', 'Health Data Exchange'] },
  { name: 'Pension Registry', category: 'Pension Management', annualCost: 600_000, users: 420, score: 5, integrationComplexity: 'Medium', migrationWeeks: 12, riskLevel: 'Medium', dependencies: ['Pension Calculations', 'Benefit Disbursement', 'Retirement Processing'] },
  { name: 'PostgreSQL', category: 'Database', annualCost: 180_000, users: 840, score: 7, integrationComplexity: 'Low', migrationWeeks: 4, riskLevel: 'Low', dependencies: ['Social Welfare Data', 'Benefits Records', 'Case History'] },
];

const eeSocialLicenses: License[] = [
  { vendor: 'Social Welfare Legacy Suite', totalLicenses: 3_400, active90d: 2_200, inactive: 1_200, annualWaste: 420_000, action: 'Replace legacy system with modern case management platform', costPerLicense: 350, department: 'Social Welfare Division', lastAuditDate: '2025-12-01', trend: [72, 68, 64, 62, 60, 65], complianceRisk: true },
  { vendor: 'Health Insurance Fund IS', totalLicenses: 1_200, active90d: 880, inactive: 320, annualWaste: 256_000, action: 'Consolidate 320 inactive seats, modernize claims processing', costPerLicense: 800, department: 'Health Insurance Fund', lastAuditDate: '2026-01-20', trend: [80, 76, 74, 72, 70, 73], complianceRisk: false },
  { vendor: 'Microsoft 365 E3', totalLicenses: 8_400, active90d: 7_200, inactive: 1_200, annualWaste: 144_000, action: 'Downgrade 1,200 inactive seats to F1 tier', costPerLicense: 120, department: 'All Social Affairs', lastAuditDate: '2026-02-10', trend: [88, 86, 84, 82, 80, 86], complianceRisk: false },
  { vendor: 'Pension Registry Modules', totalLicenses: 420, active90d: 320, inactive: 100, annualWaste: 100_000, action: 'Retire 100 unused modules, migrate to unified benefits platform', costPerLicense: 1_000, department: 'Pension Division', lastAuditDate: '2025-11-15', trend: [82, 78, 76, 74, 72, 76], complianceRisk: false },
];

const eeSocialWorkflowSummary = {
  total: 38,
  fullyAutomatable: 18,
  humanInLoop: 8,
  humanRequired: 12,
  currentLaborSpend: 11_600_000,
  potentialSavings: 2_400_000,
};

const eeSocialRoiSummary = {
  techStackSavings: 1_400_000,
  workflowAutomation: 2_400_000,
  licenseRecovery: 920_000,
  implementationCosts: 1_920_000,
  netYear1: 2_800_000,
  year2Projected: 4_760_000,
};

// ═══════════════════════════════════════════════════════════════════════════════
// ─── Estonia: Trade & Digital Economy (ee-economic) ──────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

const eeEconomicCompanyProfile = {
  name: 'Trade & Digital Economy',
  industry: 'Government — Economic Affairs & Digital Trade',
  employees: 5_200,
  opCos: 0,
  opCoNames: [] as string[],
  techSpend: '€18M/yr',
  aiReadinessScore: 76,
  holdingPeriod: 'Government agency',
  ebitdaMargin: 'N/A',
  targetEbitdaMargin: 'N/A',
};

const eeEconomicAiReadinessBreakdown = [
  { category: 'Data Infrastructure', score: 80, maxScore: 100, status: 'Strong — e-Residency platform and Business Registry provide structured digital-first data, real-time trade analytics pipeline operational' },
  { category: 'Process Maturity', score: 76, maxScore: 100, status: 'Above Average — e-Residency onboarding fully automated, but trade facilitation and export licensing retain manual checkpoints' },
  { category: 'Tech Stack Modernity', score: 82, maxScore: 100, status: 'Advanced — e-Residency built cloud-native, Business Registry on modern stack, though trade compliance tools are aging' },
  { category: 'Change Readiness', score: 70, maxScore: 100, status: 'Good — digital economy team highly innovative, but trade compliance officers cautious about AI-driven export controls' },
  { category: 'Skills & Training', score: 72, maxScore: 100, status: 'Good — e-Residency team has strong engineering culture, trade division needs upskilling in AI-assisted decision support' },
];

const eeEconomicKpis = {
  totalSavings: 1_600_000,
  techScoreBefore: 76,
  techScoreAfter: 95,
  workflowsAnalyzed: 26,
  automationReady: 12,
  unusedLicenseWaste: 420_000,
  savingsSparkline: [0, 101_818, 225_455, 378_182, 574_545, 763_636, 916_364, 1_069_091, 1_221_818, 1_374_545, 1_498_182, 1_600_000],
  scoreSparkline: [76, 78, 80, 82, 84, 86, 87, 89, 91, 92, 94, 95],
  workflowSparkline: [0, 2, 4, 6, 8, 11, 15, 18, 20, 23, 25, 26],
  licenseSparkline: [420_000, 381_818, 343_636, 305_455, 267_273, 229_091, 190_909, 157_273, 126_364, 100_909, 79_091, 60_000],
  headcountImpactSparkline: [0, -1, -2, -4, -6, -9, -11, -15, -18, -21, -23, -26],
};

const eeEconomicRoadmapPhases = [
  {
    quarter: 'Q1 2026',
    title: 'e-Residency AI Enhancement',
    items: ['AI-powered applicant screening', 'Business Registry automation', 'Digital onboarding optimization'],
    status: 'active' as const,
    weekPlan: [
      { week: 1, task: 'e-Residency AI applicant screening: automated risk assessment for 10,000+ monthly applications', owner: 'e-Residency Program Director' },
      { week: 2, task: 'Business Registry automation: AI-assisted company formation reducing processing from 3 hours to 15 minutes', owner: 'Business Registry IT Lead' },
      { week: 3, task: 'Digital onboarding optimization: AI chatbot for e-Resident support in 12 languages', owner: 'e-Residency CX Lead' },
      { week: 4, task: 'Q1 checkpoint: applicant processing time reduced 70%, approval accuracy at 98%', owner: 'e-Residency Program Director' },
    ],
  },
  {
    quarter: 'Q2 2026',
    title: 'Trade Facilitation & Export Licensing',
    items: ['Automated trade compliance', 'Export license processing', 'Customs AI integration'],
    status: 'upcoming' as const,
    weekPlan: [
      { week: 5, task: 'Automated trade compliance checks against EU sanctions lists and dual-use regulations', owner: 'Trade Compliance Director' },
      { week: 6, task: 'Export license AI processing: document analysis and risk scoring for controlled goods', owner: 'Export Control IT Lead' },
      { week: 7, task: 'Customs AI integration: automated tariff classification and origin determination', owner: 'Customs Modernization Lead' },
      { week: 8, task: 'Mid-year review: trade processing time reduced 50%, compliance accuracy improved to 99.2%', owner: 'Deputy Minister, Economic Affairs' },
    ],
  },
  {
    quarter: 'Q3 2026',
    title: 'Digital Economy Analytics',
    items: ['Economic impact modeling', 'Startup ecosystem AI', 'Investment facilitation'],
    status: 'upcoming' as const,
    weekPlan: [
      { week: 9, task: 'Economic impact modeling: AI-driven analysis of e-Residency contribution to GDP', owner: 'Economic Analysis Director' },
      { week: 10, task: 'Startup ecosystem AI: automated grant evaluation and investment matching for 1,200+ startups', owner: 'Startup Estonia Lead' },
      { week: 11, task: 'Investment facilitation AI: predictive FDI targeting based on global economic signals', owner: 'Investment Agency Director' },
      { week: 12, task: 'Q3 review: e-Residency revenue up 25%, startup grant processing time halved', owner: 'e-Residency Program Director' },
    ],
  },
  {
    quarter: 'Q4 2026',
    title: 'Full Digital Economy Platform',
    items: ['Unified business services portal', 'Cross-border trade AI', 'EU Digital Markets compliance'],
    status: 'upcoming' as const,
    weekPlan: [
      { week: 13, task: 'Unified business services portal: single AI-powered entry point for all economic affairs services', owner: 'Digital Economy IT Lead' },
      { week: 14, task: 'Cross-border trade AI: automated documentation and compliance for 150+ trading partners', owner: 'Trade Compliance Director' },
      { week: 15, task: 'EU Digital Markets Act compliance monitoring: automated platform regulation enforcement', owner: 'EU Compliance Officer' },
      { week: 16, task: 'Annual review: €1.6M savings confirmed, 95 AI readiness, trade digitization showcase', owner: 'Deputy Minister, Economic Affairs' },
    ],
  },
];

const eeEconomicTopOpportunities: Opportunity[] = [
  { name: 'e-Residency AI Screening', category: 'Digital Identity', savings: 470_000, effort: 'Medium', status: 'in-progress', priority: 10, timeToValue: 8, confidence: 92 },
  { name: 'Trade Compliance Automation', category: 'Trade Facilitation', savings: 380_000, effort: 'High', status: 'in-progress', priority: 9, timeToValue: 12, confidence: 84 },
  { name: 'Business Registry Automation', category: 'Business Services', savings: 280_000, effort: 'Low', status: 'automated', priority: 9, timeToValue: 6, confidence: 94 },
  { name: 'Export License AI Processing', category: 'Export Control', savings: 190_000, effort: 'Medium', status: 'identified', priority: 8, timeToValue: 14, confidence: 80 },
  { name: 'Startup Grant Evaluation AI', category: 'Innovation', savings: 160_000, effort: 'Medium', status: 'identified', priority: 7, timeToValue: 10, confidence: 82 },
  { name: 'FDI Predictive Targeting', category: 'Investment', savings: 120_000, effort: 'High', status: 'identified', priority: 6, timeToValue: 18, confidence: 72 },
];

const eeEconomicCurrentStack: CurrentTool[] = [
  { name: 'e-Residency Platform', category: 'Digital Identity', annualCost: 1_800_000, users: 100_000, score: 9, integrationComplexity: 'Low', migrationWeeks: 0, riskLevel: 'Low', dependencies: ['Digital Residency', 'Applicant Screening', 'ID Issuance'] },
  { name: 'Business Registry IS', category: 'Registry', annualCost: 800_000, users: 2_400, score: 7, integrationComplexity: 'Low', migrationWeeks: 4, riskLevel: 'Low', dependencies: ['Company Formation', 'Annual Reports', 'Shareholder Registry'] },
  { name: 'Trade Compliance System', category: 'Trade', annualCost: 600_000, users: 480, score: 5, integrationComplexity: 'Medium', migrationWeeks: 14, riskLevel: 'Medium', dependencies: ['Sanctions Screening', 'Export Controls', 'Customs Declarations'] },
  { name: 'X-Road (Economic)', category: 'Data Exchange', annualCost: 350_000, users: 5_200, score: 8, integrationComplexity: 'Low', migrationWeeks: 0, riskLevel: 'Low', dependencies: ['Cross-Ministry Data', 'Business Verification', 'Tax Data Exchange'] },
  { name: 'Startup Estonia Portal', category: 'Innovation', annualCost: 280_000, users: 1_200, score: 7, integrationComplexity: 'Low', migrationWeeks: 6, riskLevel: 'Low', dependencies: ['Grant Applications', 'Startup Directory', 'Mentor Matching'] },
  { name: 'PostgreSQL', category: 'Database', annualCost: 140_000, users: 520, score: 7, integrationComplexity: 'Low', migrationWeeks: 4, riskLevel: 'Low', dependencies: ['Trade Records', 'Business Data', 'Economic Statistics'] },
];

const eeEconomicLicenses: License[] = [
  { vendor: 'Trade Compliance Suite', totalLicenses: 480, active90d: 320, inactive: 160, annualWaste: 192_000, action: 'Replace legacy trade compliance with AI-native solution', costPerLicense: 1_200, department: 'Trade & Customs Division', lastAuditDate: '2025-12-15', trend: [74, 70, 66, 64, 62, 67], complianceRisk: true },
  { vendor: 'Microsoft 365 E3', totalLicenses: 5_200, active90d: 4_400, inactive: 800, annualWaste: 96_000, action: 'Downgrade 800 inactive to F1 tier', costPerLicense: 120, department: 'All Economic Affairs', lastAuditDate: '2026-02-01', trend: [88, 86, 84, 82, 80, 85], complianceRisk: false },
  { vendor: 'Salesforce Gov Cloud', totalLicenses: 240, active90d: 180, inactive: 60, annualWaste: 84_000, action: 'Consolidate 60 seats — evaluate migration to open-source CRM', costPerLicense: 1_400, department: 'Investment Agency', lastAuditDate: '2026-01-05', trend: [82, 78, 76, 72, 70, 75], complianceRisk: false },
  { vendor: 'Data Analytics Platform', totalLicenses: 120, active90d: 84, inactive: 36, annualWaste: 48_000, action: 'Migrate to unified analytics on Metabase', costPerLicense: 1_333, department: 'Economic Analysis', lastAuditDate: '2025-11-20', trend: [76, 72, 68, 66, 64, 70], complianceRisk: false },
];

const eeEconomicWorkflowSummary = {
  total: 26,
  fullyAutomatable: 12,
  humanInLoop: 6,
  humanRequired: 8,
  currentLaborSpend: 6_200_000,
  potentialSavings: 1_400_000,
};

const eeEconomicRoiSummary = {
  techStackSavings: 800_000,
  workflowAutomation: 1_400_000,
  licenseRecovery: 420_000,
  implementationCosts: 1_020_000,
  netYear1: 1_600_000,
  year2Projected: 2_720_000,
};

// ═══════════════════════════════════════════════════════════════════════════════
// ─── Estonia: Cybersecurity & IT (ee-ria) ────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

const eeRiaCompanyProfile = {
  name: 'Cybersecurity & IT (RIA)',
  industry: 'Government — Cybersecurity & Information Systems',
  employees: 480,
  opCos: 0,
  opCoNames: [] as string[],
  techSpend: '€42M/yr',
  aiReadinessScore: 78,
  holdingPeriod: 'Government agency',
  ebitdaMargin: 'N/A',
  targetEbitdaMargin: 'N/A',
};

const eeRiaAiReadinessBreakdown = [
  { category: 'Data Infrastructure', score: 84, maxScore: 100, status: 'Strong — X-Road infrastructure generates rich telemetry, SIEM collects 2M+ events/day, comprehensive threat intelligence feeds' },
  { category: 'Process Maturity', score: 78, maxScore: 100, status: 'Above Average — incident response well-structured, but vulnerability management and patch coordination across 900+ services partially manual' },
  { category: 'Tech Stack Modernity', score: 82, maxScore: 100, status: 'Advanced — modern SIEM/SOAR stack, X-Road 7.0, eID infrastructure, though legacy vulnerability scanning tools need replacement' },
  { category: 'Change Readiness', score: 74, maxScore: 100, status: 'Good — cybersecurity team embraces AI-powered threat detection, strong culture of innovation at RIA' },
  { category: 'Skills & Training', score: 72, maxScore: 100, status: 'Good — world-class cyber defense talent from NATO CCDCOE collaboration, but AI/ML specialization needs deepening' },
];

const eeRiaKpis = {
  totalSavings: 1_400_000,
  techScoreBefore: 78,
  techScoreAfter: 96,
  workflowsAnalyzed: 24,
  automationReady: 14,
  unusedLicenseWaste: 380_000,
  savingsSparkline: [0, 89_091, 197_273, 330_909, 502_727, 668_182, 801_818, 935_455, 1_069_091, 1_202_727, 1_310_909, 1_400_000],
  scoreSparkline: [78, 80, 82, 84, 86, 88, 89, 91, 92, 93, 95, 96],
  workflowSparkline: [0, 2, 4, 6, 8, 11, 13, 16, 18, 21, 23, 24],
  licenseSparkline: [380_000, 341_818, 303_636, 265_455, 227_273, 190_909, 159_091, 131_818, 107_273, 88_182, 69_091, 50_000],
  headcountImpactSparkline: [0, -1, -2, -3, -5, -7, -9, -12, -14, -17, -19, -20],
};

const eeRiaRoadmapPhases = [
  {
    quarter: 'Q1 2026',
    title: 'AI-Powered Threat Detection',
    items: ['SIEM AI enhancement', 'Automated threat hunting', 'X-Road anomaly detection'],
    status: 'active' as const,
    weekPlan: [
      { week: 1, task: 'SIEM AI model deployment: real-time threat classification on 2M+ daily events', owner: 'SOC Director' },
      { week: 2, task: 'Automated threat hunting: AI-driven proactive scanning across all government network segments', owner: 'Threat Intelligence Lead' },
      { week: 3, task: 'X-Road anomaly detection: AI monitoring of data exchange patterns for 900+ connected services', owner: 'X-Road Security Lead' },
      { week: 4, task: 'Q1 checkpoint: mean time to detect (MTTD) reduced from 4 hours to 12 minutes', owner: 'SOC Director' },
    ],
  },
  {
    quarter: 'Q2 2026',
    title: 'Vulnerability Management Automation',
    items: ['AI vulnerability scanning', 'Automated patch prioritization', 'eID security enhancement'],
    status: 'upcoming' as const,
    weekPlan: [
      { week: 5, task: 'AI vulnerability scanning: continuous assessment of 900+ government services and 14,000 endpoints', owner: 'Vulnerability Management Lead' },
      { week: 6, task: 'Automated patch prioritization: risk-based scoring replacing manual CVE triage', owner: 'Patch Coordination Lead' },
      { week: 7, task: 'eID/Smart-ID security enhancement: AI-powered authentication anomaly detection', owner: 'eID Security Lead' },
      { week: 8, task: 'Mid-year review: vulnerability remediation time reduced 65%, zero critical unpatched systems', owner: 'CISO' },
    ],
  },
  {
    quarter: 'Q3 2026',
    title: 'Incident Response Automation',
    items: ['SOAR playbook AI', 'Automated forensics', 'Cross-border threat sharing'],
    status: 'upcoming' as const,
    weekPlan: [
      { week: 9, task: 'SOAR playbook AI: automated incident response for 80% of common attack patterns', owner: 'Incident Response Lead' },
      { week: 10, task: 'Automated digital forensics: AI-assisted evidence collection and timeline reconstruction', owner: 'Forensics Team Lead' },
      { week: 11, task: 'Cross-border threat sharing: AI-curated threat intel exchange with NATO CCDCOE and EU CERT', owner: 'Threat Intelligence Lead' },
      { week: 12, task: 'Q3 review: mean time to respond (MTTR) reduced from 6 hours to 45 minutes', owner: 'SOC Director' },
    ],
  },
  {
    quarter: 'Q4 2026',
    title: 'Full Cyber Defense AI & National Resilience',
    items: ['AI cyber range', 'Predictive defense posture', 'National cyber resilience score'],
    status: 'upcoming' as const,
    weekPlan: [
      { week: 13, task: 'AI cyber range: automated adversary simulation for continuous defense testing', owner: 'Red Team Lead' },
      { week: 14, task: 'Predictive defense posture: AI forecasting emerging threats based on global attack trends', owner: 'Threat Intelligence Lead' },
      { week: 15, task: 'National cyber resilience scoring: real-time security posture assessment across all government systems', owner: 'CISO' },
      { week: 16, task: 'Annual review: €1.4M savings, 96 AI readiness, Estonia ranked #1 EU cyber resilience', owner: 'RIA Director General' },
    ],
  },
];

const eeRiaTopOpportunities: Opportunity[] = [
  { name: 'AI-Powered SIEM', category: 'Threat Detection', savings: 440_000, effort: 'Medium', status: 'in-progress', priority: 10, timeToValue: 8, confidence: 92 },
  { name: 'Automated Vulnerability Scanning', category: 'Vulnerability Management', savings: 300_000, effort: 'Medium', status: 'in-progress', priority: 9, timeToValue: 10, confidence: 88 },
  { name: 'X-Road Anomaly Detection', category: 'Infrastructure Security', savings: 230_000, effort: 'Medium', status: 'identified', priority: 9, timeToValue: 8, confidence: 90 },
  { name: 'SOAR Playbook Automation', category: 'Incident Response', savings: 190_000, effort: 'Medium', status: 'identified', priority: 8, timeToValue: 12, confidence: 84 },
  { name: 'eID Security Enhancement', category: 'Identity Security', savings: 140_000, effort: 'High', status: 'identified', priority: 8, timeToValue: 14, confidence: 80 },
  { name: 'Automated Digital Forensics', category: 'Forensics', savings: 100_000, effort: 'High', status: 'identified', priority: 7, timeToValue: 16, confidence: 76 },
];

const eeRiaCurrentStack: CurrentTool[] = [
  { name: 'X-Road 7.0 (Core)', category: 'Data Exchange', annualCost: 2_400_000, users: 480, score: 9, integrationComplexity: 'Low', migrationWeeks: 0, riskLevel: 'Low', dependencies: ['Government Data Exchange', 'Service Registry', 'API Gateway'] },
  { name: 'Splunk SIEM', category: 'Security Monitoring', annualCost: 1_600_000, users: 120, score: 7, integrationComplexity: 'Medium', migrationWeeks: 8, riskLevel: 'Medium', dependencies: ['Log Aggregation', 'Threat Detection', 'Compliance Monitoring'] },
  { name: 'Palo Alto SOAR', category: 'Incident Response', annualCost: 800_000, users: 60, score: 7, integrationComplexity: 'Medium', migrationWeeks: 6, riskLevel: 'Medium', dependencies: ['Playbook Automation', 'Incident Orchestration', 'Alert Triage'] },
  { name: 'Tenable.io', category: 'Vulnerability Scanning', annualCost: 480_000, users: 80, score: 6, integrationComplexity: 'Low', migrationWeeks: 4, riskLevel: 'Low', dependencies: ['Asset Discovery', 'CVE Scanning', 'Risk Scoring'] },
  { name: 'eID Infrastructure', category: 'Identity', annualCost: 3_200_000, users: 480, score: 9, integrationComplexity: 'Low', migrationWeeks: 0, riskLevel: 'Low', dependencies: ['Citizen Authentication', 'Digital Signatures', 'Smart-ID'] },
  { name: 'CrowdStrike Falcon', category: 'Endpoint Security', annualCost: 360_000, users: 14_000, score: 8, integrationComplexity: 'Low', migrationWeeks: 2, riskLevel: 'Low', dependencies: ['Endpoint Detection', 'Threat Response', 'Device Management'] },
];

const eeRiaLicenses: License[] = [
  { vendor: 'Splunk Enterprise', totalLicenses: 120, active90d: 88, inactive: 32, annualWaste: 160_000, action: 'Consolidate 32 inactive seats, evaluate AI-native SIEM alternatives', costPerLicense: 5_000, department: 'SOC / Threat Detection', lastAuditDate: '2026-01-10', trend: [80, 76, 74, 72, 70, 73], complianceRisk: false },
  { vendor: 'Tenable.io', totalLicenses: 80, active90d: 56, inactive: 24, annualWaste: 96_000, action: 'Replace 24 legacy scanner licenses with AI-powered continuous scanning', costPerLicense: 4_000, department: 'Vulnerability Management', lastAuditDate: '2025-12-20', trend: [78, 72, 68, 66, 64, 70], complianceRisk: false },
  { vendor: 'Palo Alto XSOAR', totalLicenses: 60, active90d: 48, inactive: 12, annualWaste: 72_000, action: 'Optimize playbook coverage to utilize all 60 licenses effectively', costPerLicense: 6_000, department: 'Incident Response', lastAuditDate: '2026-01-25', trend: [86, 82, 80, 78, 76, 80], complianceRisk: false },
  { vendor: 'CrowdStrike Falcon', totalLicenses: 14_000, active90d: 12_800, inactive: 1_200, annualWaste: 52_000, action: 'Reclaim 1,200 seats from decommissioned endpoints', costPerLicense: 43, department: 'All Government Endpoints', lastAuditDate: '2026-02-05', trend: [94, 92, 90, 88, 86, 91], complianceRisk: false },
];

const eeRiaWorkflowSummary = {
  total: 26,
  fullyAutomatable: 14,
  humanInLoop: 6,
  humanRequired: 6,
  currentLaborSpend: 5_800_000,
  potentialSavings: 1_200_000,
};

const eeRiaRoiSummary = {
  techStackSavings: 800_000,
  workflowAutomation: 1_200_000,
  licenseRecovery: 380_000,
  implementationCosts: 980_000,
  netYear1: 1_400_000,
  year2Projected: 2_380_000,
};

// ═══════════════════════════════════════════════════════════════════════════════
// ─── HCC — IC Construction Corp (IndustrialsCo Division) ─────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

const hccCompanyProfile = {
  name: 'IC Construction Corp',
  industry: 'Rail & Highway Construction',
  employees: 1_200,
  opCos: 1,
  opCoNames: ['IC Construction Corp'],
  techSpend: '$4.8M/yr',
  aiReadinessScore: 32,
  holdingPeriod: 'IndustrialsCo Division',
  ebitdaMargin: '10.5%',
  targetEbitdaMargin: '17%',
};

const hccAiReadinessBreakdown = [
  { category: 'Data Infrastructure', score: 20, maxScore: 100, status: 'Critical Gap — project data trapped in Primavera P6, equipment data in legacy field dispatch, no unified view across active job sites' },
  { category: 'Process Maturity', score: 36, maxScore: 100, status: 'Below Average — field operations largely manual, project estimation based on tribal knowledge, paving and grading ops use paper checklists' },
  { category: 'Tech Stack Modernity', score: 28, maxScore: 100, status: 'Legacy-Heavy — Primavera P6 for scheduling, heavy CAD for design, legacy field dispatch from 2009, no mobile-first tools for field crews' },
  { category: 'Change Readiness', score: 40, maxScore: 100, status: 'Moderate — division GM supports modernization but 1,200 field workers are accustomed to existing workflows' },
  { category: 'Skills & Training', score: 22, maxScore: 100, status: 'Critical Gap — strong construction expertise but near-zero digital skills among field supervisors and crew leads' },
];

const hccKpis = {
  totalSavings: 2_100_000,
  techScoreBefore: 32,
  techScoreAfter: 78,
  workflowsAnalyzed: 22,
  automationReady: 6,
  unusedLicenseWaste: 980_000,
  savingsSparkline: [0, 133_636, 283_636, 455_455, 665_455, 889_091, 1_130_909, 1_381_818, 1_622_727, 1_781_818, 1_940_909, 2_100_000],
  scoreSparkline: [32, 36, 40, 43, 47, 51, 57, 61, 65, 70, 74, 78],
  workflowSparkline: [0, 2, 4, 6, 8, 11, 12, 14, 16, 18, 20, 22],
  licenseSparkline: [980_000, 916_364, 847_273, 770_909, 694_545, 618_182, 541_818, 465_455, 390_909, 327_273, 270_909, 220_000],
  headcountImpactSparkline: [0, 0, 0, -1, -2, -3, -5, -6, -8, -9, -11, -12],
};

const hccRoadmapPhases = [
  {
    quarter: 'Q1 2026',
    title: 'License Audit & Project Data Consolidation',
    items: ['Primavera P6 seat reclamation', 'AutoCAD license audit', 'GPS fleet data unification'],
    status: 'active' as const,
    weekPlan: [
      { week: 1, task: 'Primavera P6 usage audit — identify 60+ inactive seats across project managers', owner: 'IT Director' },
      { week: 2, task: 'AutoCAD/Civil 3D license review — reclaim seats from non-engineering staff', owner: 'IT Director' },
      { week: 3, task: 'GPS fleet data assessment — map HCSS Telematics data streams for 400+ HCC vehicles', owner: 'Fleet Manager' },
      { week: 4, task: 'Project estimation workflow mapping — document current tribal-knowledge-based process', owner: 'VP Operations' },
    ],
  },
  {
    quarter: 'Q2 2026',
    title: 'Field Operations Quick Wins',
    items: ['Mobile field reporting', 'Equipment dispatch optimization', 'Subcontractor portal'],
    status: 'upcoming' as const,
    weekPlan: [
      { week: 5, task: 'Deploy Procore mobile for field crew daily logs and progress reporting', owner: 'VP Operations' },
      { week: 6, task: 'HCSS Equipment360 dispatch pilot — 200 HCC vehicles', owner: 'Fleet Manager' },
      { week: 7, task: 'Subcontractor management portal — digital submittals and change orders', owner: 'Project Controls Manager' },
      { week: 8, task: 'AI-assisted project estimation pilot using historical bid data', owner: 'VP Operations' },
    ],
  },
  {
    quarter: 'Q3 2026',
    title: 'AI-Powered Construction Operations',
    items: ['Predictive equipment maintenance', 'Material logistics optimization', 'Automated compliance reporting'],
    status: 'upcoming' as const,
    weekPlan: [
      { week: 9, task: 'Predictive maintenance models for heavy construction equipment fleet', owner: 'Fleet Manager' },
      { week: 10, task: 'Material and ballast logistics AI — optimize delivery routing across job sites', owner: 'VP Operations' },
      { week: 11, task: 'Automated DOT compliance reporting for highway construction projects', owner: 'Safety Director' },
      { week: 12, task: 'Cross-division equipment sharing dashboard with HRSI and HTI', owner: 'Fleet Manager' },
    ],
  },
  {
    quarter: 'Q4 2026',
    title: 'Full Digital Construction Platform',
    items: ['AI project scheduling', 'Digital twin for active projects', 'Year 2 roadmap'],
    status: 'upcoming' as const,
    weekPlan: [
      { week: 13, task: 'AI-powered project scheduling replacing manual Primavera P6 updates', owner: 'VP Operations' },
      { week: 14, task: 'Digital twin pilot for major rail construction corridor', owner: 'VP Operations' },
      { week: 15, task: 'ROI validation: $2.1M Year 1 savings confirmed', owner: 'Division GM' },
      { week: 16, task: 'Year 2 roadmap presentation to CEO James Mitchell', owner: 'Division GM' },
    ],
  },
];

const hccTopOpportunities: Opportunity[] = [
  { name: 'Project Estimation AI', category: 'Workflow Automation', savings: 520_000, effort: 'High', status: 'identified', priority: 10, timeToValue: 16, confidence: 76 },
  { name: 'Equipment Dispatch Optimization', category: 'Data Infrastructure', savings: 380_000, effort: 'Medium', status: 'in-progress', priority: 9, timeToValue: 10, confidence: 84 },
  { name: 'License Reclamation (P6 + CAD)', category: 'License Audit', savings: 480_000, effort: 'Low', status: 'in-progress', priority: 10, timeToValue: 3, confidence: 96 },
  { name: 'Paving Operations Automation', category: 'Workflow Automation', savings: 320_000, effort: 'Medium', status: 'identified', priority: 8, timeToValue: 14, confidence: 78 },
  { name: 'Subcontractor Management Portal', category: 'Tech Stack', savings: 240_000, effort: 'Medium', status: 'identified', priority: 7, timeToValue: 8, confidence: 82 },
  { name: 'Material Logistics AI', category: 'Workflow Automation', savings: 160_000, effort: 'Medium', status: 'identified', priority: 6, timeToValue: 12, confidence: 74 },
];

const hccCurrentStack: CurrentTool[] = [
  { name: 'Primavera P6', category: 'Project Management', annualCost: 280_000, users: 120, score: 4, integrationComplexity: 'High', migrationWeeks: 16, riskLevel: 'Medium', dependencies: ['Rail construction scheduling', 'Resource allocation', 'Critical path analysis'] },
  { name: 'AutoCAD Civil 3D', category: 'Engineering Design', annualCost: 440_000, users: 55, score: 5, integrationComplexity: 'Medium', migrationWeeks: 8, riskLevel: 'Low', dependencies: ['Highway design', 'Grading plans', 'Rail alignment'] },
  { name: 'Legacy Field Dispatch', category: 'Fleet Management', annualCost: 340_000, users: 180, score: 3, integrationComplexity: 'High', migrationWeeks: 20, riskLevel: 'High', dependencies: ['Crew dispatch', 'Equipment tracking', 'Work orders'] },
  { name: 'HCSS Telematics', category: 'GPS/Telematics', annualCost: 190_000, users: 400, score: 5, integrationComplexity: 'Low', migrationWeeks: 6, riskLevel: 'Low', dependencies: ['Vehicle tracking', 'Geofencing', 'Route optimization'] },
];

const hccLicenses: License[] = [
  { vendor: 'Primavera P6', totalLicenses: 120, active90d: 60, inactive: 60, annualWaste: 210_000, action: 'Reclaim 60 inactive seats — restrict to active PMs only', costPerLicense: 3_500, department: 'Project Management', lastAuditDate: '2025-10-15', trend: [82, 76, 70, 65, 60, 50], complianceRisk: false },
  { vendor: 'AutoCAD Civil 3D', totalLicenses: 55, active90d: 25, inactive: 30, annualWaste: 240_000, action: 'Reclaim 30 seats from non-engineering staff', costPerLicense: 8_000, department: 'Engineering & Design', lastAuditDate: '2025-08-20', trend: [68, 60, 54, 50, 46, 45], complianceRisk: true },
  { vendor: 'Microsoft 365', totalLicenses: 1_200, active90d: 800, inactive: 400, annualWaste: 320_000, action: 'Reclaim 400 seats + downgrade field crews E5→E3', costPerLicense: 800, department: 'IT / All Staff', lastAuditDate: '2025-09-15', trend: [78, 72, 68, 66, 66, 67], complianceRisk: false },
  { vendor: 'Trimble Business Center', totalLicenses: 40, active90d: 15, inactive: 25, annualWaste: 210_000, action: 'Reclaim 25 seats from inactive survey crews', costPerLicense: 8_400, department: 'Survey & GPS', lastAuditDate: '2025-07-22', trend: [62, 54, 46, 40, 38, 38], complianceRisk: false },
];

const hccWorkflowSummary = {
  total: 22,
  fullyAutomatable: 6,
  humanInLoop: 10,
  humanRequired: 6,
  currentLaborSpend: 3_200_000,
  potentialSavings: 1_400_000,
};

const hccRoiSummary = {
  techStackSavings: 800_000,
  workflowAutomation: 1_400_000,
  licenseRecovery: 980_000,
  implementationCosts: 1_080_000,
  netYear1: 2_100_000,
  year2Projected: 3_200_000,
};

// ═══════════════════════════════════════════════════════════════════════════════
// ─── HRSI — IC Rail Services (IndustrialsCo Division) ───────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

const hrsiCompanyProfile = {
  name: 'IC Rail Services',
  industry: 'Railroad Maintenance & Equipment',
  employees: 380,
  opCos: 1,
  opCoNames: ['IC Rail Services'],
  techSpend: '$1.8M/yr',
  aiReadinessScore: 36,
  holdingPeriod: 'IndustrialsCo Division',
  ebitdaMargin: '12.2%',
  targetEbitdaMargin: '19%',
};

const hrsiAiReadinessBreakdown = [
  { category: 'Data Infrastructure', score: 28, maxScore: 100, status: 'Below Average — Class 1 railroad maintenance data in legacy field dispatch system, car repair records in separate database, no unified view' },
  { category: 'Process Maturity', score: 40, maxScore: 100, status: 'Moderate — some automation in railroad car repair tracking, but maintenance scheduling and leasing management still largely manual' },
  { category: 'Tech Stack Modernity', score: 32, maxScore: 100, status: 'Legacy — legacy field dispatch system from 2009 handles most operations, supplemented by spreadsheets for car leasing' },
  { category: 'Change Readiness', score: 44, maxScore: 100, status: 'Moderate — field supervisors receptive to mobile tools, but 380 crew members spread across multiple states' },
  { category: 'Skills & Training', score: 30, maxScore: 100, status: 'Below Average — strong mechanical/railroad skills but limited digital capability among field crews' },
];

const hrsiKpis = {
  totalSavings: 820_000,
  techScoreBefore: 36,
  techScoreAfter: 80,
  workflowsAnalyzed: 8,
  automationReady: 2,
  unusedLicenseWaste: 380_000,
  savingsSparkline: [0, 50_909, 107_273, 170_909, 256_364, 349_091, 450_909, 534_545, 610_909, 687_273, 756_364, 820_000],
  scoreSparkline: [36, 40, 44, 47, 52, 56, 61, 65, 69, 73, 77, 80],
  workflowSparkline: [0, 1, 1, 2, 3, 3, 4, 4, 5, 6, 7, 8],
  licenseSparkline: [380_000, 354_545, 329_091, 303_636, 278_182, 252_727, 227_273, 201_818, 176_364, 150_909, 125_455, 100_000],
  headcountImpactSparkline: [0, 0, 0, -1, -1, -1, -2, -2, -3, -4, -4, -5],
};

const hrsiRoadmapPhases = [
  {
    quarter: 'Q1 2026',
    title: 'Maintenance Data Consolidation',
    items: ['Custom dispatch assessment', 'Car repair tracking digitization', 'License audit'],
    status: 'active' as const,
    weekPlan: [
      { week: 1, task: 'Custom dispatch system assessment — document all railroad maintenance workflows', owner: 'Division Manager' },
      { week: 2, task: 'Car repair tracking digitization — migrate from paper-based to digital records', owner: 'Maintenance Director' },
      { week: 3, task: 'Leasing management process mapping — identify automation opportunities', owner: 'Division Manager' },
      { week: 4, task: 'License audit across HRSI — identify unused MCP and dispatch seats', owner: 'IT Lead' },
    ],
  },
  {
    quarter: 'Q2 2026',
    title: 'AI-Powered Maintenance Scheduling',
    items: ['Predictive maintenance pilot', 'Mobile crew tools', 'Equipment leasing optimization'],
    status: 'upcoming' as const,
    weekPlan: [
      { week: 5, task: 'Predictive maintenance model for railroad equipment fleet', owner: 'Maintenance Director' },
      { week: 6, task: 'Mobile crew management app deployment for 380 field employees', owner: 'IT Lead' },
      { week: 7, task: 'Equipment leasing optimization using AI demand forecasting', owner: 'Division Manager' },
      { week: 8, task: 'HCSS fleet intelligence deployment for HRSI vehicles', owner: 'Fleet Manager' },
    ],
  },
  {
    quarter: 'Q3 2026', title: 'Scale & Integration', items: ['Cross-division data sharing', 'Automated compliance'], status: 'upcoming' as const,
    weekPlan: [
      { week: 9, task: 'Cross-division equipment sharing with HCC fleet', owner: 'Division Manager' },
      { week: 10, task: 'FRA compliance automation for maintenance records', owner: 'Safety Director' },
      { week: 11, task: 'AI car repair prioritization based on fleet utilization data', owner: 'Maintenance Director' },
      { week: 12, task: 'Q3 close: validation of maintenance cost reductions', owner: 'Division Manager' },
    ],
  },
  {
    quarter: 'Q4 2026', title: 'Full AI-Native Operations', items: ['Automated dispatch', 'Year 2 planning'], status: 'upcoming' as const,
    weekPlan: [
      { week: 13, task: 'Full AI dispatch replacing legacy custom system for HRSI', owner: 'IT Lead' },
      { week: 14, task: 'Knowledge transfer and training for all 380 employees', owner: 'Division Manager' },
      { week: 15, task: 'ROI validation: $820K Year 1 savings confirmed', owner: 'Division Manager' },
      { week: 16, task: 'Year 2 roadmap and continuous improvement plan', owner: 'Division Manager' },
    ],
  },
];

const hrsiTopOpportunities: Opportunity[] = [
  { name: 'Maintenance Scheduling AI', category: 'Workflow Automation', savings: 240_000, effort: 'Medium', status: 'identified', priority: 9, timeToValue: 12, confidence: 82 },
  { name: 'Car Repair Tracking Automation', category: 'Workflow Automation', savings: 180_000, effort: 'Medium', status: 'in-progress', priority: 8, timeToValue: 8, confidence: 86 },
  { name: 'License Reclamation', category: 'License Audit', savings: 200_000, effort: 'Low', status: 'in-progress', priority: 10, timeToValue: 3, confidence: 95 },
  { name: 'Equipment Leasing Optimization', category: 'Workflow Automation', savings: 200_000, effort: 'Medium', status: 'identified', priority: 7, timeToValue: 14, confidence: 78 },
];

const hrsiCurrentStack: CurrentTool[] = [
  { name: 'Legacy Field Dispatch', category: 'Fleet Management', annualCost: 200_000, users: 120, score: 3, integrationComplexity: 'High', migrationWeeks: 18, riskLevel: 'High', dependencies: ['Crew dispatch', 'Equipment tracking', 'Work orders'] },
  { name: 'MCP (Internal)', category: 'Workforce', annualCost: 120_000, users: 380, score: 4, integrationComplexity: 'Medium', migrationWeeks: 10, riskLevel: 'Medium', dependencies: ['Time tracking', 'FRA compliance', 'Payroll'] },
  { name: 'eCMS', category: 'Finance', annualCost: 160_000, users: 40, score: 3, integrationComplexity: 'High', migrationWeeks: 16, riskLevel: 'Medium', dependencies: ['Financial reporting', 'AP/AR', 'Cost accounting'] },
];

const hrsiLicenses: License[] = [
  { vendor: 'Legacy Field Dispatch', totalLicenses: 120, active90d: 80, inactive: 40, annualWaste: 160_000, action: 'Consolidate into HCSS suite — reclaim all legacy dispatch seats', costPerLicense: 4_000, department: 'Operations', lastAuditDate: '2025-11-10', trend: [78, 72, 68, 65, 64, 67], complianceRisk: false },
  { vendor: 'MCP (Internal)', totalLicenses: 380, active90d: 280, inactive: 100, annualWaste: 30_000, action: 'Reclaim 100 inactive crew seats', costPerLicense: 300, department: 'HR / All Staff', lastAuditDate: '2026-01-10', trend: [86, 82, 78, 74, 74, 74], complianceRisk: false },
  { vendor: 'eCMS', totalLicenses: 40, active90d: 20, inactive: 20, annualWaste: 80_000, action: 'Reclaim 20 seats — consolidate to finance team', costPerLicense: 4_000, department: 'Finance', lastAuditDate: '2025-11-02', trend: [72, 66, 58, 52, 50, 50], complianceRisk: false },
  { vendor: 'Microsoft 365', totalLicenses: 380, active90d: 240, inactive: 140, annualWaste: 110_000, action: 'Reclaim 140 seats + downgrade field crews', costPerLicense: 786, department: 'IT / All Staff', lastAuditDate: '2025-09-15', trend: [76, 70, 66, 63, 63, 63], complianceRisk: false },
];

const hrsiWorkflowSummary = {
  total: 8,
  fullyAutomatable: 2,
  humanInLoop: 4,
  humanRequired: 2,
  currentLaborSpend: 1_100_000,
  potentialSavings: 480_000,
};

const hrsiRoiSummary = {
  techStackSavings: 280_000,
  workflowAutomation: 480_000,
  licenseRecovery: 380_000,
  implementationCosts: 320_000,
  netYear1: 820_000,
  year2Projected: 1_250_000,
};

// ═══════════════════════════════════════════════════════════════════════════════
// ─── HSI — IC Services / Rail Testing (IndustrialsCo Division) ──────────────────
// ═══════════════════════════════════════════════════════════════════════════════

const hsiCompanyProfile = {
  name: 'IC Testing Services',
  industry: 'Ultrasonic Rail Testing',
  employees: 220,
  opCos: 1,
  opCoNames: ['IC Services'],
  techSpend: '$1.2M/yr',
  aiReadinessScore: 42,
  holdingPeriod: 'IndustrialsCo Division',
  ebitdaMargin: '14.8%',
  targetEbitdaMargin: '22%',
};

const hsiAiReadinessBreakdown = [
  { category: 'Data Infrastructure', score: 48, maxScore: 100, status: 'Moderate — TAM-4 system generates rich ultrasonic and geometry data, but 2TB/month sits largely unanalyzed in siloed databases' },
  { category: 'Process Maturity', score: 44, maxScore: 100, status: 'Moderate — advanced testing equipment in use, but defect analysis and FRA reporting still heavily manual' },
  { category: 'Tech Stack Modernity', score: 38, maxScore: 100, status: 'Mixed — TAM-4 is specialized but aging, Video Track Chart review is entirely manual, LIDAR data underutilized' },
  { category: 'Change Readiness', score: 46, maxScore: 100, status: 'Good — testing engineers are data-oriented and receptive to AI-augmented inspection workflows' },
  { category: 'Skills & Training', score: 34, maxScore: 100, status: 'Below Average — strong rail testing expertise but limited ML/data science capability for automated defect detection' },
];

const hsiKpis = {
  totalSavings: 680_000,
  techScoreBefore: 42,
  techScoreAfter: 84,
  workflowsAnalyzed: 6,
  automationReady: 2,
  unusedLicenseWaste: 240_000,
  savingsSparkline: [0, 38_182, 84_545, 141_818, 220_909, 301_818, 378_182, 454_545, 528_182, 585_455, 635_455, 680_000],
  scoreSparkline: [42, 46, 50, 53, 57, 61, 65, 69, 73, 76, 80, 84],
  workflowSparkline: [0, 1, 1, 2, 3, 3, 4, 4, 5, 5, 5, 6],
  licenseSparkline: [240_000, 227_273, 211_818, 192_727, 173_636, 154_545, 135_455, 116_364, 98_182, 85_455, 72_727, 60_000],
  headcountImpactSparkline: [0, 0, 0, -1, -1, -1, -2, -2, -3, -3, -3, -4],
};

const hsiRoadmapPhases = [
  {
    quarter: 'Q1 2026', title: 'Rail Testing Data Unification', items: ['TAM-4 data lake ingestion', 'LIDAR data pipeline', 'FRA reporting assessment'],
    status: 'active' as const,
    weekPlan: [
      { week: 1, task: 'TAM-4 data export and proposed data lakehouse ingestion pipeline for 3 years of testing history', owner: 'Testing Director' },
      { week: 2, task: 'LIDAR point cloud storage and processing infrastructure setup', owner: 'Data Engineer' },
      { week: 3, task: 'Ultrasonic inspection data consolidation from separate flaw detection databases', owner: 'Testing Director' },
      { week: 4, task: 'FRA Form 6180 reporting process mapping and automation scoping', owner: 'Compliance Manager' },
    ],
  },
  {
    quarter: 'Q2 2026', title: 'AI Defect Detection Pilot', items: ['Computer vision training', 'Ultrasonic AI', 'Shadow mode validation'],
    status: 'upcoming' as const,
    weekPlan: [
      { week: 5, task: 'Train YOLOv8 computer vision model on 240K labeled track defect images', owner: 'ML Engineer' },
      { week: 6, task: 'Ultrasonic flaw detection AI using deep learning on historical scan data', owner: 'ML Engineer' },
      { week: 7, task: 'Shadow mode: run AI pipeline in parallel with human analysts on 2,000+ track-miles', owner: 'Testing Director' },
      { week: 8, task: 'Validation: target >92% defect detection accuracy, <5% miss rate on critical flaws', owner: 'Testing Director' },
    ],
  },
  {
    quarter: 'Q3 2026', title: 'Production AI Inspection', items: ['AI-enhanced geometry cars', 'Automated FRA reporting'], status: 'upcoming' as const,
    weekPlan: [
      { week: 9, task: 'Deploy AI-enhanced inspection on all 4 geometry cars with human verification', owner: 'Testing Director' },
      { week: 10, task: 'Automated FRA compliance report generation from digital inspection data', owner: 'Compliance Manager' },
      { week: 11, task: 'Multi-modal fusion: integrate geometry, ultrasonic, visual, and LIDAR data', owner: 'ML Engineer' },
      { week: 12, task: 'Predictive track degradation models forecasting maintenance 6-8 weeks ahead', owner: 'ML Engineer' },
    ],
  },
  {
    quarter: 'Q4 2026', title: 'Full AI-Native Rail Testing', items: ['Autonomous inspection scaling', 'Year 2 roadmap'], status: 'upcoming' as const,
    weekPlan: [
      { week: 13, task: 'Scale autonomous inspection to all testing corridors', owner: 'Testing Director' },
      { week: 14, task: 'Automated work order generation for railroad client maintenance departments', owner: 'Testing Director' },
      { week: 15, task: 'ROI validation: $680K Year 1 savings confirmed', owner: 'Division GM' },
      { week: 16, task: 'Year 2 roadmap and advanced AI capabilities planning', owner: 'Division GM' },
    ],
  },
];

const hsiTopOpportunities: Opportunity[] = [
  { name: 'AI Defect Detection (Vision + Ultrasonic)', category: 'Workflow Automation', savings: 280_000, effort: 'High', status: 'identified', priority: 10, timeToValue: 16, confidence: 82 },
  { name: 'Automated FRA Reporting', category: 'Workflow Automation', savings: 120_000, effort: 'Medium', status: 'identified', priority: 8, timeToValue: 8, confidence: 90 },
  { name: 'License Reclamation', category: 'License Audit', savings: 140_000, effort: 'Low', status: 'in-progress', priority: 10, timeToValue: 3, confidence: 96 },
  { name: 'LIDAR Ballast Analysis Automation', category: 'Workflow Automation', savings: 140_000, effort: 'High', status: 'identified', priority: 7, timeToValue: 18, confidence: 74 },
];

const hsiCurrentStack: CurrentTool[] = [
  { name: 'TAM-4 Rail Testing', category: 'Rail Inspection', annualCost: 240_000, users: 45, score: 4, integrationComplexity: 'Medium', migrationWeeks: 12, riskLevel: 'Medium', dependencies: ['Track geometry', 'Defect detection', 'FRA compliance'] },
  { name: 'Trimble Business Center', category: 'Survey/GPS', annualCost: 160_000, users: 20, score: 5, integrationComplexity: 'Low', migrationWeeks: 4, riskLevel: 'Low', dependencies: ['Survey data', 'LIDAR processing', 'GIS mapping'] },
  { name: 'Custom Video Track Chart', category: 'Inspection', annualCost: 80_000, users: 20, score: 3, integrationComplexity: 'Medium', migrationWeeks: 8, riskLevel: 'Medium', dependencies: ['Visual inspection', 'Defect correlation', 'Analyst review'] },
];

const hsiLicenses: License[] = [
  { vendor: 'TAM-4 Rail Testing', totalLicenses: 45, active90d: 30, inactive: 15, annualWaste: 90_000, action: 'Reclaim 15 inactive analyst seats — consolidate to active testing crews', costPerLicense: 6_000, department: 'Rail Testing Operations', lastAuditDate: '2025-10-20', trend: [80, 74, 68, 66, 66, 67], complianceRisk: false },
  { vendor: 'Trimble Business Center', totalLicenses: 20, active90d: 10, inactive: 10, annualWaste: 80_000, action: 'Reclaim 10 seats from inactive survey engineers', costPerLicense: 8_000, department: 'Survey & GPS', lastAuditDate: '2025-07-22', trend: [65, 58, 52, 50, 50, 50], complianceRisk: false },
  { vendor: 'Microsoft 365', totalLicenses: 220, active90d: 130, inactive: 90, annualWaste: 70_000, action: 'Reclaim 90 seats + downgrade field technicians', costPerLicense: 778, department: 'IT / All Staff', lastAuditDate: '2025-09-15', trend: [72, 66, 62, 59, 59, 59], complianceRisk: false },
];

const hsiWorkflowSummary = {
  total: 6,
  fullyAutomatable: 2,
  humanInLoop: 3,
  humanRequired: 1,
  currentLaborSpend: 850_000,
  potentialSavings: 380_000,
};

const hsiRoiSummary = {
  techStackSavings: 220_000,
  workflowAutomation: 380_000,
  licenseRecovery: 240_000,
  implementationCosts: 160_000,
  netYear1: 680_000,
  year2Projected: 1_020_000,
};

// ═══════════════════════════════════════════════════════════════════════════════
// ─── HTI — IC Technologies (IndustrialsCo Division) ─────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

const htiCompanyProfile = {
  name: 'IC Technologies',
  industry: 'Signal & PTC Systems',
  employees: 310,
  opCos: 1,
  opCoNames: ['IC Technologies'],
  techSpend: '$2.4M/yr',
  aiReadinessScore: 48,
  holdingPeriod: 'IndustrialsCo Division',
  ebitdaMargin: '13.5%',
  targetEbitdaMargin: '20%',
};

const htiAiReadinessBreakdown = [
  { category: 'Data Infrastructure', score: 52, maxScore: 100, status: 'Moderate — PTC event logs and signal system data are digital but trapped in proprietary formats with limited API access' },
  { category: 'Process Maturity', score: 50, maxScore: 100, status: 'Moderate — PTC deployment follows structured processes, but GIS data management and signal design still use legacy workflows' },
  { category: 'Tech Stack Modernity', score: 48, maxScore: 100, status: 'Mixed — builds modern PTC/signal systems for clients but internal tools are aging; proprietary signal design software' },
  { category: 'Change Readiness', score: 52, maxScore: 100, status: 'Good — most tech-forward division, engineering team actively interested in AI for signal design optimization' },
  { category: 'Skills & Training', score: 38, maxScore: 100, status: 'Developing — strong signal/PTC engineering talent, some data analysis capability, but limited AI/ML skills' },
];

const htiKpis = {
  totalSavings: 740_000,
  techScoreBefore: 48,
  techScoreAfter: 86,
  workflowsAnalyzed: 10,
  automationReady: 3,
  unusedLicenseWaste: 420_000,
  savingsSparkline: [0, 44_545, 97_273, 160_909, 240_909, 325_455, 414_545, 494_545, 569_091, 632_727, 689_091, 740_000],
  scoreSparkline: [48, 52, 56, 59, 63, 67, 71, 75, 78, 81, 83, 86],
  workflowSparkline: [0, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  licenseSparkline: [420_000, 394_545, 369_091, 343_636, 318_182, 292_727, 267_273, 232_727, 196_364, 170_909, 145_455, 120_000],
  headcountImpactSparkline: [0, 0, 0, -1, -2, -2, -3, -3, -4, -5, -5, -6],
};

const htiRoadmapPhases = [
  {
    quarter: 'Q1 2026', title: 'PTC Data & Signal System Assessment', items: ['PTC event log analysis', 'Signal design tool audit', 'GIS data consolidation'],
    status: 'active' as const,
    weekPlan: [
      { week: 1, task: 'PTC event log extraction and analysis — identify patterns in system performance data', owner: 'Chief Engineer' },
      { week: 2, task: 'Signal design software audit — evaluate proprietary tools vs modern alternatives', owner: 'Engineering Manager' },
      { week: 3, task: 'GIS data consolidation — unify geographic and track data from multiple projects', owner: 'GIS Manager' },
      { week: 4, task: 'License audit — identify unused CAD, GIS, and signal design tool seats', owner: 'IT Lead' },
    ],
  },
  {
    quarter: 'Q2 2026', title: 'AI Signal Design & PTC Optimization', items: ['AI-assisted signal placement', 'PTC performance monitoring', 'GIS automation'],
    status: 'upcoming' as const,
    weekPlan: [
      { week: 5, task: 'AI-assisted signal placement optimization using historical project data', owner: 'Chief Engineer' },
      { week: 6, task: 'PTC performance monitoring dashboard with anomaly detection', owner: 'Engineering Manager' },
      { week: 7, task: 'GIS data management automation — auto-ingest field survey data', owner: 'GIS Manager' },
      { week: 8, task: 'Automated signal testing documentation and compliance reporting', owner: 'Engineering Manager' },
    ],
  },
  {
    quarter: 'Q3 2026', title: 'Scale & Integration', items: ['Cross-division PTC data', 'Predictive signal maintenance'], status: 'upcoming' as const,
    weekPlan: [
      { week: 9, task: 'Cross-division PTC data integration with HSI testing results', owner: 'Chief Engineer' },
      { week: 10, task: 'Predictive signal system maintenance using ML on performance data', owner: 'Engineering Manager' },
      { week: 11, task: 'Automated project estimation for signal installation projects', owner: 'Project Manager' },
      { week: 12, task: 'Digital twin pilot for signal corridor design', owner: 'Chief Engineer' },
    ],
  },
  {
    quarter: 'Q4 2026', title: 'Full AI-Native Signal Operations', items: ['AI signal design platform', 'Year 2 roadmap'], status: 'upcoming' as const,
    weekPlan: [
      { week: 13, task: 'Full AI-native signal design platform deployment', owner: 'Chief Engineer' },
      { week: 14, task: 'Legacy system decommission — retire proprietary design tools', owner: 'IT Lead' },
      { week: 15, task: 'ROI validation: $740K Year 1 savings confirmed', owner: 'Division GM' },
      { week: 16, task: 'Year 2 roadmap and advanced capabilities planning', owner: 'Division GM' },
    ],
  },
];

const htiTopOpportunities: Opportunity[] = [
  { name: 'PTC System Data Integration', category: 'Data Infrastructure', savings: 200_000, effort: 'High', status: 'in-progress', priority: 9, timeToValue: 14, confidence: 78 },
  { name: 'AI Signal Design Optimization', category: 'Workflow Automation', savings: 180_000, effort: 'High', status: 'identified', priority: 8, timeToValue: 16, confidence: 76 },
  { name: 'License Reclamation (CAD + GIS)', category: 'License Audit', savings: 220_000, effort: 'Low', status: 'in-progress', priority: 10, timeToValue: 3, confidence: 95 },
  { name: 'GIS Data Management Automation', category: 'Workflow Automation', savings: 140_000, effort: 'Medium', status: 'identified', priority: 7, timeToValue: 10, confidence: 82 },
];

const htiCurrentStack: CurrentTool[] = [
  { name: 'Proprietary Signal Design', category: 'Engineering', annualCost: 320_000, users: 80, score: 4, integrationComplexity: 'High', migrationWeeks: 20, riskLevel: 'High', dependencies: ['Signal placement', 'Circuit design', 'PTC integration'] },
  { name: 'ArcGIS Pro', category: 'GIS', annualCost: 180_000, users: 40, score: 6, integrationComplexity: 'Medium', migrationWeeks: 8, riskLevel: 'Low', dependencies: ['Geographic data', 'Track mapping', 'Field surveys'] },
  { name: 'AutoCAD Electrical', category: 'CAD', annualCost: 240_000, users: 60, score: 5, integrationComplexity: 'Medium', migrationWeeks: 10, riskLevel: 'Medium', dependencies: ['Electrical design', 'Signal schematics', 'Panel layouts'] },
];

const htiLicenses: License[] = [
  { vendor: 'AutoCAD Electrical', totalLicenses: 60, active90d: 35, inactive: 25, annualWaste: 200_000, action: 'Reclaim 25 seats from non-active designers', costPerLicense: 8_000, department: 'Signal Engineering', lastAuditDate: '2025-08-20', trend: [72, 66, 60, 58, 58, 58], complianceRisk: false },
  { vendor: 'ArcGIS Pro', totalLicenses: 40, active90d: 22, inactive: 18, annualWaste: 126_000, action: 'Reclaim 18 seats — restrict to active GIS analysts', costPerLicense: 7_000, department: 'GIS & Survey', lastAuditDate: '2025-09-10', trend: [68, 62, 56, 55, 55, 55], complianceRisk: false },
  { vendor: 'Microsoft 365', totalLicenses: 310, active90d: 190, inactive: 120, annualWaste: 94_000, action: 'Reclaim 120 seats + downgrade field technicians', costPerLicense: 783, department: 'IT / All Staff', lastAuditDate: '2025-09-15', trend: [74, 68, 64, 61, 61, 61], complianceRisk: false },
];

const htiWorkflowSummary = {
  total: 10,
  fullyAutomatable: 3,
  humanInLoop: 5,
  humanRequired: 2,
  currentLaborSpend: 1_000_000,
  potentialSavings: 400_000,
};

const htiRoiSummary = {
  techStackSavings: 320_000,
  workflowAutomation: 400_000,
  licenseRecovery: 420_000,
  implementationCosts: 400_000,
  netYear1: 740_000,
  year2Projected: 1_120_000,
};

// ═══════════════════════════════════════════════════════════════════════════════
// ─── HTSI — IC Transit Services (IndustrialsCo Division) ────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

const htsiCompanyProfile = {
  name: 'IC Transit Services',
  industry: 'Passenger Rail Operations',
  employees: 480,
  opCos: 1,
  opCoNames: ['IC Transit Services'],
  techSpend: '$2.2M/yr',
  aiReadinessScore: 40,
  holdingPeriod: 'IndustrialsCo Division',
  ebitdaMargin: '11.0%',
  targetEbitdaMargin: '18%',
};

const htsiAiReadinessBreakdown = [
  { category: 'Data Infrastructure', score: 42, maxScore: 100, status: 'Moderate — transit scheduling systems produce real-time data, but passenger operations data not integrated with maintenance systems' },
  { category: 'Process Maturity', score: 38, maxScore: 100, status: 'Below Average — transit scheduling partially automated, but maintenance planning and passenger flow analysis are manual' },
  { category: 'Tech Stack Modernity', score: 36, maxScore: 100, status: 'Mixed — modern fare collection systems coexist with aging maintenance tracking and crew management tools' },
  { category: 'Change Readiness', score: 48, maxScore: 100, status: 'Good — transit operators accustomed to technology; passenger service pressure drives willingness to adopt new tools' },
  { category: 'Skills & Training', score: 32, maxScore: 100, status: 'Below Average — strong transit operations expertise but limited analytics capability for ridership and maintenance optimization' },
];

const htsiKpis = {
  totalSavings: 860_000,
  techScoreBefore: 40,
  techScoreAfter: 82,
  workflowsAnalyzed: 10,
  automationReady: 3,
  unusedLicenseWaste: 480_000,
  savingsSparkline: [0, 50_909, 112_727, 189_091, 276_364, 369_091, 470_909, 563_636, 650_909, 727_273, 796_364, 860_000],
  scoreSparkline: [40, 44, 48, 51, 55, 59, 63, 67, 71, 74, 78, 82],
  workflowSparkline: [0, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  licenseSparkline: [480_000, 448_182, 416_364, 384_545, 347_273, 309_091, 270_909, 232_727, 195_455, 163_636, 135_455, 110_000],
  headcountImpactSparkline: [0, 0, 0, -1, -2, -2, -3, -4, -5, -6, -6, -7],
};

const htsiRoadmapPhases = [
  {
    quarter: 'Q1 2026', title: 'Transit Data & Operations Assessment', items: ['Ridership data analysis', 'Maintenance system audit', 'Schedule optimization scoping'],
    status: 'active' as const,
    weekPlan: [
      { week: 1, task: 'Ridership data analysis — consolidate passenger count and fare data across all routes', owner: 'Operations Director' },
      { week: 2, task: 'Transit vehicle maintenance system audit — assess current tracking and scheduling tools', owner: 'Maintenance Manager' },
      { week: 3, task: 'Crew scheduling process mapping — document manual scheduling for 480 employees', owner: 'Operations Director' },
      { week: 4, task: 'License audit — identify unused transit scheduling and maintenance software seats', owner: 'IT Lead' },
    ],
  },
  {
    quarter: 'Q2 2026', title: 'AI Transit Scheduling & Maintenance', items: ['AI schedule optimization', 'Predictive vehicle maintenance', 'Passenger analytics'],
    status: 'upcoming' as const,
    weekPlan: [
      { week: 5, task: 'AI-powered transit schedule optimization using ridership demand data', owner: 'Operations Director' },
      { week: 6, task: 'Predictive vehicle maintenance model for transit fleet', owner: 'Maintenance Manager' },
      { week: 7, task: 'Passenger flow analytics dashboard for real-time operations decisions', owner: 'Operations Director' },
      { week: 8, task: 'Mobile crew management app for transit operators and dispatchers', owner: 'IT Lead' },
    ],
  },
  {
    quarter: 'Q3 2026', title: 'Passenger Experience & Efficiency', items: ['Real-time passenger info', 'Energy optimization'], status: 'upcoming' as const,
    weekPlan: [
      { week: 9, task: 'Real-time passenger information system with AI delay predictions', owner: 'Operations Director' },
      { week: 10, task: 'Transit vehicle energy optimization using driving pattern analysis', owner: 'Maintenance Manager' },
      { week: 11, task: 'Automated compliance reporting for transit authority requirements', owner: 'Compliance Manager' },
      { week: 12, task: 'Cross-division data integration with HRSI maintenance capabilities', owner: 'Operations Director' },
    ],
  },
  {
    quarter: 'Q4 2026', title: 'Full AI-Native Transit Operations', items: ['Autonomous scheduling', 'Year 2 roadmap'], status: 'upcoming' as const,
    weekPlan: [
      { week: 13, task: 'Full autonomous transit scheduling with human oversight', owner: 'Operations Director' },
      { week: 14, task: 'Knowledge transfer and training for all 480 employees', owner: 'Operations Director' },
      { week: 15, task: 'ROI validation: $860K Year 1 savings confirmed', owner: 'Division GM' },
      { week: 16, task: 'Year 2 roadmap for advanced transit AI capabilities', owner: 'Division GM' },
    ],
  },
];

const htsiTopOpportunities: Opportunity[] = [
  { name: 'Transit Schedule Optimization', category: 'Workflow Automation', savings: 280_000, effort: 'High', status: 'identified', priority: 9, timeToValue: 14, confidence: 80 },
  { name: 'Predictive Vehicle Maintenance', category: 'Workflow Automation', savings: 200_000, effort: 'Medium', status: 'identified', priority: 8, timeToValue: 12, confidence: 82 },
  { name: 'License Reclamation', category: 'License Audit', savings: 240_000, effort: 'Low', status: 'in-progress', priority: 10, timeToValue: 3, confidence: 96 },
  { name: 'Passenger Flow Analytics', category: 'Data Infrastructure', savings: 140_000, effort: 'Medium', status: 'identified', priority: 7, timeToValue: 10, confidence: 78 },
];

const htsiCurrentStack: CurrentTool[] = [
  { name: 'Transit Scheduling System', category: 'Operations', annualCost: 280_000, users: 60, score: 4, integrationComplexity: 'High', migrationWeeks: 16, riskLevel: 'Medium', dependencies: ['Route scheduling', 'Crew assignments', 'Service planning'] },
  { name: 'Vehicle Maintenance Tracker', category: 'Maintenance', annualCost: 160_000, users: 40, score: 3, integrationComplexity: 'Medium', migrationWeeks: 10, riskLevel: 'Medium', dependencies: ['Maintenance scheduling', 'Parts inventory', 'Compliance records'] },
  { name: 'Fare Collection System', category: 'Revenue', annualCost: 180_000, users: 480, score: 6, integrationComplexity: 'Low', migrationWeeks: 4, riskLevel: 'Low', dependencies: ['Fare processing', 'Ridership data', 'Revenue reporting'] },
  { name: 'MCP (Internal)', category: 'Workforce', annualCost: 140_000, users: 480, score: 4, integrationComplexity: 'Medium', migrationWeeks: 10, riskLevel: 'Medium', dependencies: ['Time tracking', 'Crew scheduling', 'Payroll'] },
];

const htsiLicenses: License[] = [
  { vendor: 'Transit Scheduling System', totalLicenses: 60, active90d: 30, inactive: 30, annualWaste: 210_000, action: 'Reclaim 30 inactive seats — restrict to active dispatchers and planners', costPerLicense: 7_000, department: 'Transit Operations', lastAuditDate: '2025-11-15', trend: [72, 66, 58, 52, 50, 50], complianceRisk: false },
  { vendor: 'Vehicle Maintenance Tracker', totalLicenses: 40, active90d: 22, inactive: 18, annualWaste: 90_000, action: 'Reclaim 18 seats — migrate to predictive maintenance platform', costPerLicense: 5_000, department: 'Maintenance', lastAuditDate: '2025-10-20', trend: [68, 62, 56, 55, 55, 55], complianceRisk: false },
  { vendor: 'Microsoft 365', totalLicenses: 480, active90d: 300, inactive: 180, annualWaste: 180_000, action: 'Reclaim 180 seats + downgrade operators to basic tier', costPerLicense: 1_000, department: 'IT / All Staff', lastAuditDate: '2025-09-15', trend: [76, 70, 64, 62, 62, 63], complianceRisk: false },
];

const htsiWorkflowSummary = {
  total: 10,
  fullyAutomatable: 3,
  humanInLoop: 5,
  humanRequired: 2,
  currentLaborSpend: 1_400_000,
  potentialSavings: 520_000,
};

const htsiRoiSummary = {
  techStackSavings: 360_000,
  workflowAutomation: 520_000,
  licenseRecovery: 480_000,
  implementationCosts: 500_000,
  netYear1: 860_000,
  year2Projected: 1_300_000,
};

// ═══════════════════════════════════════════════════════════════════════════════
// ─── HE — IC Energy (IndustrialsCo Division) ────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

const heCompanyProfile = {
  name: 'IC Energy',
  industry: 'Energy Infrastructure',
  employees: 120,
  opCos: 1,
  opCoNames: ['IC Energy'],
  techSpend: '$0.8M/yr',
  aiReadinessScore: 34,
  holdingPeriod: 'IndustrialsCo Division',
  ebitdaMargin: '10.0%',
  targetEbitdaMargin: '16%',
};

const heAiReadinessBreakdown = [
  { category: 'Data Infrastructure', score: 26, maxScore: 100, status: 'Below Average — newer division still building data systems, project data in spreadsheets, no centralized asset tracking' },
  { category: 'Process Maturity', score: 34, maxScore: 100, status: 'Below Average — energy project management follows basic templates, compliance tracking is manual, equipment logs on paper' },
  { category: 'Tech Stack Modernity', score: 30, maxScore: 100, status: 'Basic — relies on Excel and shared drives, minimal purpose-built software for energy infrastructure management' },
  { category: 'Change Readiness', score: 42, maxScore: 100, status: 'Moderate — small team is agile and open to new tools, but limited bandwidth for major technology transitions' },
  { category: 'Skills & Training', score: 28, maxScore: 100, status: 'Below Average — strong energy engineering expertise but minimal digital tool proficiency among field crews' },
];

const heKpis = {
  totalSavings: 360_000,
  techScoreBefore: 34,
  techScoreAfter: 76,
  workflowsAnalyzed: 4,
  automationReady: 1,
  unusedLicenseWaste: 180_000,
  savingsSparkline: [0, 19_091, 43_636, 75_455, 112_727, 152_727, 197_273, 237_273, 274_545, 306_364, 334_545, 360_000],
  scoreSparkline: [34, 38, 42, 45, 49, 53, 57, 61, 65, 68, 72, 76],
  workflowSparkline: [0, 0, 0, 1, 1, 1, 2, 2, 3, 3, 3, 4],
  licenseSparkline: [180_000, 170_455, 160_364, 149_545, 138_182, 126_364, 113_636, 100_909, 88_182, 75_455, 64_545, 55_000],
  headcountImpactSparkline: [0, 0, 0, 0, -1, -1, -1, -1, -2, -2, -2, -3],
};

const heRoadmapPhases = [
  {
    quarter: 'Q1 2026', title: 'Foundation & License Audit', items: ['Asset tracking setup', 'Project data digitization', 'Compliance mapping'],
    status: 'active' as const,
    weekPlan: [
      { week: 1, task: 'Energy asset tracking system evaluation and selection', owner: 'Division Manager' },
      { week: 2, task: 'Project data digitization — migrate from spreadsheets to structured database', owner: 'Project Manager' },
      { week: 3, task: 'Environmental and energy compliance process mapping', owner: 'Compliance Lead' },
      { week: 4, task: 'License audit — identify unused software seats across 120 employees', owner: 'IT Lead' },
    ],
  },
  {
    quarter: 'Q2 2026', title: 'Digital Project Management', items: ['Procore deployment', 'Equipment tracking', 'Compliance automation'],
    status: 'upcoming' as const,
    weekPlan: [
      { week: 5, task: 'Procore deployment for energy infrastructure project management', owner: 'Project Manager' },
      { week: 6, task: 'HCSS Equipment360 tracking for energy division fleet', owner: 'Division Manager' },
      { week: 7, task: 'Automated compliance reporting for energy regulatory requirements', owner: 'Compliance Lead' },
      { week: 8, task: 'Mobile field tools for energy crew daily reporting', owner: 'IT Lead' },
    ],
  },
  {
    quarter: 'Q3 2026', title: 'AI Integration', items: ['Predictive project scheduling', 'Cross-division resource sharing'], status: 'upcoming' as const,
    weekPlan: [
      { week: 9, task: 'AI-assisted project scheduling for energy infrastructure builds', owner: 'Project Manager' },
      { week: 10, task: 'Cross-division resource sharing with HCC construction fleet', owner: 'Division Manager' },
      { week: 11, task: 'Energy project cost optimization using historical data analysis', owner: 'Project Manager' },
      { week: 12, task: 'Q3 validation of project management efficiency gains', owner: 'Division Manager' },
    ],
  },
  {
    quarter: 'Q4 2026', title: 'Optimization & Growth', items: ['Full platform integration', 'Year 2 roadmap'], status: 'upcoming' as const,
    weekPlan: [
      { week: 13, task: 'Full integration with parent company data lake and reporting', owner: 'IT Lead' },
      { week: 14, task: 'Training completion for all 120 employees on new tools', owner: 'Division Manager' },
      { week: 15, task: 'ROI validation: $360K Year 1 savings confirmed', owner: 'Division Manager' },
      { week: 16, task: 'Year 2 roadmap and growth strategy for energy division', owner: 'Division Manager' },
    ],
  },
];

const heTopOpportunities: Opportunity[] = [
  { name: 'Energy Project Management Digitization', category: 'Workflow Automation', savings: 120_000, effort: 'Medium', status: 'in-progress', priority: 9, timeToValue: 10, confidence: 84 },
  { name: 'Compliance Automation', category: 'Workflow Automation', savings: 80_000, effort: 'Medium', status: 'identified', priority: 8, timeToValue: 8, confidence: 86 },
  { name: 'License Reclamation', category: 'License Audit', savings: 100_000, effort: 'Low', status: 'in-progress', priority: 10, timeToValue: 3, confidence: 95 },
  { name: 'Equipment Tracking Optimization', category: 'Data Infrastructure', savings: 60_000, effort: 'Low', status: 'identified', priority: 7, timeToValue: 6, confidence: 88 },
];

const heCurrentStack: CurrentTool[] = [
  { name: 'Excel/SharePoint', category: 'Project Management', annualCost: 60_000, users: 40, score: 2, integrationComplexity: 'Low', migrationWeeks: 8, riskLevel: 'Low', dependencies: ['Project tracking', 'Cost estimation', 'Resource planning'] },
  { name: 'eCMS (shared)', category: 'Finance', annualCost: 80_000, users: 15, score: 3, integrationComplexity: 'High', migrationWeeks: 12, riskLevel: 'Medium', dependencies: ['Financial reporting', 'AP/AR', 'Cost accounting'] },
  { name: 'MCP (Internal)', category: 'Workforce', annualCost: 40_000, users: 120, score: 4, integrationComplexity: 'Medium', migrationWeeks: 8, riskLevel: 'Low', dependencies: ['Time tracking', 'Crew scheduling', 'Payroll'] },
];

const heLicenses: License[] = [
  { vendor: 'Microsoft 365', totalLicenses: 120, active90d: 70, inactive: 50, annualWaste: 40_000, action: 'Reclaim 50 inactive seats + downgrade field crews', costPerLicense: 800, department: 'IT / All Staff', lastAuditDate: '2025-09-15', trend: [74, 68, 62, 58, 58, 58], complianceRisk: false },
  { vendor: 'eCMS', totalLicenses: 15, active90d: 5, inactive: 10, annualWaste: 40_000, action: 'Reclaim 10 seats — consolidate to finance only', costPerLicense: 4_000, department: 'Finance', lastAuditDate: '2025-11-02', trend: [60, 50, 40, 33, 33, 33], complianceRisk: false },
  { vendor: 'AutoCAD', totalLicenses: 20, active90d: 7, inactive: 13, annualWaste: 100_000, action: 'Reclaim 13 seats from non-engineering staff', costPerLicense: 7_692, department: 'Engineering', lastAuditDate: '2025-08-20', trend: [55, 45, 38, 35, 35, 35], complianceRisk: false },
];

const heWorkflowSummary = {
  total: 4,
  fullyAutomatable: 1,
  humanInLoop: 2,
  humanRequired: 1,
  currentLaborSpend: 480_000,
  potentialSavings: 220_000,
};

const heRoiSummary = {
  techStackSavings: 120_000,
  workflowAutomation: 220_000,
  licenseRecovery: 180_000,
  implementationCosts: 160_000,
  netYear1: 360_000,
  year2Projected: 540_000,
};

// ═══════════════════════════════════════════════════════════════════════════════
// ─── GG — IC Environmental LLC (IndustrialsCo Division) ──────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

const ggCompanyProfile = {
  name: 'IC Environmental LLC',
  industry: 'Environmental Services',
  employees: 90,
  opCos: 1,
  opCoNames: ['IC Environmental LLC'],
  techSpend: '$0.4M/yr',
  aiReadinessScore: 30,
  holdingPeriod: 'IndustrialsCo Division',
  ebitdaMargin: '9.5%',
  targetEbitdaMargin: '15%',
};

const ggAiReadinessBreakdown = [
  { category: 'Data Infrastructure', score: 18, maxScore: 100, status: 'Critical Gap — environmental monitoring data in standalone databases, compliance records on paper, no integration with parent systems' },
  { category: 'Process Maturity', score: 32, maxScore: 100, status: 'Below Average — environmental compliance follows manual checklists, waste management logistics planned by hand' },
  { category: 'Tech Stack Modernity', score: 24, maxScore: 100, status: 'Basic — relies heavily on Excel, paper forms, and standalone environmental monitoring tools with no API access' },
  { category: 'Change Readiness', score: 38, maxScore: 100, status: 'Moderate — small team willing to adopt new tools, but compliance-heavy work requires careful validation of any changes' },
  { category: 'Skills & Training', score: 26, maxScore: 100, status: 'Below Average — strong environmental science expertise but limited technology adoption beyond basic office tools' },
];

const ggKpis = {
  totalSavings: 240_000,
  techScoreBefore: 30,
  techScoreAfter: 72,
  workflowsAnalyzed: 2,
  automationReady: 1,
  unusedLicenseWaste: 120_000,
  savingsSparkline: [0, 12_727, 28_182, 47_273, 71_818, 99_091, 130_909, 158_182, 182_727, 201_818, 220_909, 240_000],
  scoreSparkline: [30, 34, 38, 41, 45, 49, 53, 57, 61, 64, 68, 72],
  workflowSparkline: [0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2],
  licenseSparkline: [120_000, 113_636, 106_727, 99_091, 91_455, 83_455, 74_545, 65_636, 56_727, 47_818, 39_636, 32_000],
  headcountImpactSparkline: [0, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, -2],
};

const ggRoadmapPhases = [
  {
    quarter: 'Q1 2026', title: 'Environmental Compliance Digitization', items: ['Compliance records digitization', 'Waste management assessment', 'License audit'],
    status: 'active' as const,
    weekPlan: [
      { week: 1, task: 'Environmental compliance records digitization — migrate from paper to digital', owner: 'Compliance Manager' },
      { week: 2, task: 'Waste management logistics process mapping and optimization scoping', owner: 'Operations Manager' },
      { week: 3, task: 'Environmental monitoring data consolidation from standalone sensors', owner: 'Compliance Manager' },
      { week: 4, task: 'License audit — identify unused software across 90 employees', owner: 'IT Contact' },
    ],
  },
  {
    quarter: 'Q2 2026', title: 'Digital Compliance Platform', items: ['Automated compliance tracking', 'Waste logistics optimization'],
    status: 'upcoming' as const,
    weekPlan: [
      { week: 5, task: 'Automated environmental compliance tracking and alerting system', owner: 'Compliance Manager' },
      { week: 6, task: 'Waste management logistics optimization — AI routing for waste collection', owner: 'Operations Manager' },
      { week: 7, task: 'Mobile field inspection app for environmental site assessments', owner: 'Operations Manager' },
      { week: 8, task: 'Integration with parent company reporting systems', owner: 'IT Contact' },
    ],
  },
  {
    quarter: 'Q3 2026', title: 'AI Environmental Monitoring', items: ['Predictive environmental analytics', 'Automated reporting'], status: 'upcoming' as const,
    weekPlan: [
      { week: 9, task: 'Predictive environmental risk assessment using sensor data and ML', owner: 'Compliance Manager' },
      { week: 10, task: 'Automated regulatory reporting for EPA and state environmental agencies', owner: 'Compliance Manager' },
      { week: 11, task: 'Cross-division environmental data sharing for HCC construction projects', owner: 'Operations Manager' },
      { week: 12, task: 'Q3 efficiency validation and savings tracking', owner: 'Operations Manager' },
    ],
  },
  {
    quarter: 'Q4 2026', title: 'Optimization & Growth', items: ['Full digital platform', 'Year 2 roadmap'], status: 'upcoming' as const,
    weekPlan: [
      { week: 13, task: 'Full digital environmental services platform operational', owner: 'Operations Manager' },
      { week: 14, task: 'Training completion for all 90 employees', owner: 'Operations Manager' },
      { week: 15, task: 'ROI validation: $240K Year 1 savings confirmed', owner: 'Division GM' },
      { week: 16, task: 'Year 2 roadmap for advanced environmental AI capabilities', owner: 'Division GM' },
    ],
  },
];

const ggTopOpportunities: Opportunity[] = [
  { name: 'Environmental Compliance Automation', category: 'Workflow Automation', savings: 120_000, effort: 'Medium', status: 'identified', priority: 9, timeToValue: 10, confidence: 84 },
  { name: 'Waste Logistics AI Routing', category: 'Workflow Automation', savings: 60_000, effort: 'Medium', status: 'identified', priority: 7, timeToValue: 12, confidence: 76 },
  { name: 'License Reclamation', category: 'License Audit', savings: 60_000, effort: 'Low', status: 'in-progress', priority: 10, timeToValue: 3, confidence: 95 },
];

const ggCurrentStack: CurrentTool[] = [
  { name: 'Excel/SharePoint', category: 'Project Management', annualCost: 30_000, users: 30, score: 2, integrationComplexity: 'Low', migrationWeeks: 6, riskLevel: 'Low', dependencies: ['Project tracking', 'Compliance logs', 'Waste manifests'] },
  { name: 'Environmental Monitoring', category: 'Compliance', annualCost: 60_000, users: 15, score: 4, integrationComplexity: 'Medium', migrationWeeks: 8, riskLevel: 'Medium', dependencies: ['Sensor data', 'Air quality', 'Water sampling'] },
  { name: 'MCP (Internal)', category: 'Workforce', annualCost: 28_000, users: 90, score: 4, integrationComplexity: 'Medium', migrationWeeks: 6, riskLevel: 'Low', dependencies: ['Time tracking', 'Crew scheduling', 'Payroll'] },
];

const ggLicenses: License[] = [
  { vendor: 'Microsoft 365', totalLicenses: 90, active90d: 50, inactive: 40, annualWaste: 32_000, action: 'Reclaim 40 inactive seats + downgrade field crews', costPerLicense: 800, department: 'IT / All Staff', lastAuditDate: '2025-09-15', trend: [72, 66, 60, 56, 56, 56], complianceRisk: false },
  { vendor: 'Environmental Monitoring', totalLicenses: 15, active90d: 8, inactive: 7, annualWaste: 28_000, action: 'Reclaim 7 inactive sensor monitoring seats', costPerLicense: 4_000, department: 'Environmental Services', lastAuditDate: '2025-10-20', trend: [68, 60, 54, 53, 53, 53], complianceRisk: false },
  { vendor: 'AutoCAD LT', totalLicenses: 10, active90d: 3, inactive: 7, annualWaste: 60_000, action: 'Reclaim 7 seats — only 3 active drafters', costPerLicense: 8_571, department: 'Engineering', lastAuditDate: '2025-08-20', trend: [50, 40, 32, 30, 30, 30], complianceRisk: false },
];

const ggWorkflowSummary = {
  total: 2,
  fullyAutomatable: 1,
  humanInLoop: 1,
  humanRequired: 0,
  currentLaborSpend: 320_000,
  potentialSavings: 200_000,
};

const ggRoiSummary = {
  techStackSavings: 100_000,
  workflowAutomation: 200_000,
  licenseRecovery: 120_000,
  implementationCosts: 180_000,
  netYear1: 240_000,
  year2Projected: 380_000,
};

// ═══════════════════════════════════════════════════════════════════════════════
// ─── AI Agents (per opco) ────────────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

const hccAiAgents: AIAgent[] = [
  { name: 'Project Estimation AI', subtitle: 'Bid Accuracy', accuracy: 94.2, metric2Label: 'Bid Variance', metric2Value: 3.1, metric3Label: 'Avg Estimation Time', metric3Value: '2.4 hrs', overrideRate: 8.3, confidenceThreshold: 0.88, status: 'active', lastmileAgentId: 'project-estimation-ai' },
  { name: 'Equipment Dispatch Optimizer', subtitle: 'Fleet Routing', accuracy: 91.7, metric2Label: 'Route Efficiency', metric2Value: 4.8, metric3Label: 'Dispatch Latency', metric3Value: '1.2s', overrideRate: 12.1, confidenceThreshold: 0.84, status: 'active', lastmileAgentId: 'equipment-dispatch-optimizer' },
  { name: 'Paving Operations AI', subtitle: 'Asphalt Quality', accuracy: 89.4, metric2Label: 'Temp Deviation', metric2Value: 1.7, metric3Label: 'Compaction Accuracy', metric3Value: '97.1%', overrideRate: 15.6, confidenceThreshold: 0.82, status: 'active', lastmileAgentId: 'paving-operations-ai' },
  { name: 'Safety Compliance Monitor', subtitle: 'OSHA/FRA', accuracy: 96.8, metric2Label: 'False Positive', metric2Value: 2.1, metric3Label: 'Alert Response Time', metric3Value: '4.8s', overrideRate: 5.2, confidenceThreshold: 0.91, status: 'active', lastmileAgentId: 'safety-compliance-monitor' },
  { name: 'Subcontractor Scheduling AI', subtitle: 'Crew Coordination', accuracy: 86.3, metric2Label: 'Conflict Rate', metric2Value: 0.8, metric3Label: 'Schedule Lead Time', metric3Value: '3.6 days', overrideRate: 18.4, confidenceThreshold: 0.79, status: 'piloting', lastmileAgentId: 'subcontractor-scheduling-ai' },
  { name: 'Material Demand Forecaster', subtitle: 'Supply Chain', accuracy: 83.9, metric2Label: 'Forecast Error', metric2Value: 6.2, metric3Label: 'Lead Time', metric3Value: '4.2 weeks', overrideRate: 21.7, confidenceThreshold: 0.76, status: 'piloting', lastmileAgentId: 'material-demand-forecaster' },
  { name: 'Fleet Fuel Optimizer', subtitle: 'Fuel Efficiency', accuracy: 79.1, metric2Label: 'Fuel Waste', metric2Value: 8.4, metric3Label: 'Savings per Vehicle', metric3Value: '$127/mo', overrideRate: 24.3, confidenceThreshold: 0.72, status: 'planned', lastmileAgentId: 'fleet-fuel-optimizer' },
];

const hrsiAiAgents: AIAgent[] = [
  { name: 'Predictive Maintenance AI', subtitle: 'Asset Reliability', accuracy: 93.6, metric2Label: 'False Alarm Rate', metric2Value: 3.4, metric3Label: 'Mean Prediction Lead', metric3Value: '6.2 weeks', overrideRate: 7.8, confidenceThreshold: 0.89, status: 'active', lastmileAgentId: 'predictive-maintenance-ai' },
  { name: 'Car Repair Triage AI', subtitle: 'Repair Prioritization', accuracy: 90.2, metric2Label: 'Misclassification', metric2Value: 2.9, metric3Label: 'Triage Time', metric3Value: '0.8s', overrideRate: 11.4, confidenceThreshold: 0.85, status: 'active', lastmileAgentId: 'car-repair-triage-ai' },
  { name: 'Crew Scheduling Optimizer', subtitle: 'Workforce', accuracy: 88.7, metric2Label: 'Overtime Excess', metric2Value: 5.3, metric3Label: 'Idle Time Reduction', metric3Value: '22.4%', overrideRate: 14.2, confidenceThreshold: 0.83, status: 'active', lastmileAgentId: 'crew-scheduling-optimizer' },
  { name: 'Equipment Leasing Demand AI', subtitle: 'Lease Optimization', accuracy: 85.1, metric2Label: 'Demand Error', metric2Value: 7.6, metric3Label: 'Utilization Gain', metric3Value: '18.3%', overrideRate: 19.8, confidenceThreshold: 0.78, status: 'piloting', lastmileAgentId: 'equipment-leasing-demand-ai' },
  { name: 'Track Geometry Analyzer', subtitle: 'Track Condition', accuracy: 87.4, metric2Label: 'Measurement Drift', metric2Value: 1.4, metric3Label: 'Analysis Throughput', metric3Value: '12 mi/hr', overrideRate: 16.9, confidenceThreshold: 0.81, status: 'piloting', lastmileAgentId: 'track-geometry-analyzer' },
  { name: 'Parts Inventory Forecaster', subtitle: 'Spare Parts', accuracy: 80.6, metric2Label: 'Stockout Risk', metric2Value: 4.1, metric3Label: 'Reorder Lead Time', metric3Value: '3.1 weeks', overrideRate: 22.5, confidenceThreshold: 0.74, status: 'planned', lastmileAgentId: 'parts-inventory-forecaster' },
];

const hsiAiAgents: AIAgent[] = [
  { name: 'RailSentry AI', subtitle: 'Defect Detection', accuracy: 97.1, metric2Label: 'False Positive', metric2Value: 1.3, metric3Label: 'Detection Latency', metric3Value: '0.4s', overrideRate: 5.7, confidenceThreshold: 0.92, status: 'active', lastmileAgentId: 'railsentry-ai' },
  { name: 'FRA Compliance Auto-Reporter', subtitle: 'Regulatory Filing', accuracy: 95.3, metric2Label: 'Filing Error', metric2Value: 0.6, metric3Label: 'Report Generation', metric3Value: '3.2 min', overrideRate: 6.4, confidenceThreshold: 0.90, status: 'active', lastmileAgentId: 'fra-compliance-auto-reporter' },
  { name: 'Track Condition Predictor', subtitle: 'Degradation Forecast', accuracy: 91.8, metric2Label: 'Prediction Variance', metric2Value: 2.7, metric3Label: 'Forecast Horizon', metric3Value: '8.4 weeks', overrideRate: 10.3, confidenceThreshold: 0.86, status: 'active', lastmileAgentId: 'track-condition-predictor' },
  { name: 'Ultrasonic Signal Classifier', subtitle: 'Signal Analysis', accuracy: 88.2, metric2Label: 'Noise Rejection', metric2Value: 3.8, metric3Label: 'Classification Speed', metric3Value: '0.6s', overrideRate: 13.7, confidenceThreshold: 0.80, status: 'piloting', lastmileAgentId: 'ultrasonic-signal-classifier' },
  { name: 'Route Optimization AI', subtitle: 'Testing Routes', accuracy: 84.6, metric2Label: 'Route Deviation', metric2Value: 5.9, metric3Label: 'Miles Saved/Week', metric3Value: '142 mi', overrideRate: 17.2, confidenceThreshold: 0.77, status: 'piloting', lastmileAgentId: 'route-optimization-ai' },
  { name: 'Defect Pattern Analyzer', subtitle: 'Pattern Recognition', accuracy: 81.3, metric2Label: 'Pattern Misclass', metric2Value: 8.1, metric3Label: 'Analysis Depth', metric3Value: '36 months', overrideRate: 20.6, confidenceThreshold: 0.73, status: 'planned', lastmileAgentId: 'defect-pattern-analyzer' },
];

const htiAiAgents: AIAgent[] = [
  { name: 'Signal Fault Predictor', subtitle: 'Fault Prevention', accuracy: 92.4, metric2Label: 'False Alert Rate', metric2Value: 2.3, metric3Label: 'Prediction Window', metric3Value: '5.6 days', overrideRate: 9.1, confidenceThreshold: 0.87, status: 'active', lastmileAgentId: 'signal-fault-predictor' },
  { name: 'PTC Configuration Validator', subtitle: 'Config Audit', accuracy: 95.9, metric2Label: 'Config Mismatch', metric2Value: 0.4, metric3Label: 'Validation Time', metric3Value: '1.4s', overrideRate: 6.8, confidenceThreshold: 0.91, status: 'active', lastmileAgentId: 'ptc-configuration-validator' },
  { name: 'Wayside Equipment Monitor', subtitle: 'Equipment Health', accuracy: 87.8, metric2Label: 'Sensor Drift', metric2Value: 3.2, metric3Label: 'Health Score Latency', metric3Value: '2.8s', overrideRate: 15.3, confidenceThreshold: 0.82, status: 'piloting', lastmileAgentId: 'wayside-equipment-monitor' },
  { name: 'Installation Planning AI', subtitle: 'Project Scheduling', accuracy: 84.1, metric2Label: 'Schedule Slip', metric2Value: 6.7, metric3Label: 'Resource Utilization', metric3Value: '84.2%', overrideRate: 19.2, confidenceThreshold: 0.77, status: 'piloting', lastmileAgentId: 'installation-planning-ai' },
  { name: 'Signal Design Optimizer', subtitle: 'Design Efficiency', accuracy: 82.7, metric2Label: 'Design Rework', metric2Value: 9.3, metric3Label: 'Layout Time', metric3Value: '3.8 hrs', overrideRate: 21.1, confidenceThreshold: 0.75, status: 'piloting', lastmileAgentId: 'signal-design-optimizer' },
  { name: 'Compliance Audit AI', subtitle: 'FRA/PTC Compliance', accuracy: 78.4, metric2Label: 'Audit Gap', metric2Value: 4.6, metric3Label: 'Audit Cycle', metric3Value: '2.4 weeks', overrideRate: 24.8, confidenceThreshold: 0.71, status: 'planned', lastmileAgentId: 'compliance-audit-ai' },
];

const htsiAiAgents: AIAgent[] = [
  { name: 'Passenger Demand Forecaster', subtitle: 'Ridership Prediction', accuracy: 93.1, metric2Label: 'Demand Error', metric2Value: 3.6, metric3Label: 'Forecast Window', metric3Value: '14 days', overrideRate: 8.7, confidenceThreshold: 0.88, status: 'active', lastmileAgentId: 'passenger-demand-forecaster' },
  { name: 'Schedule Optimization AI', subtitle: 'Service Planning', accuracy: 90.8, metric2Label: 'Headway Variance', metric2Value: 1.9, metric3Label: 'Planning Horizon', metric3Value: '90 days', overrideRate: 11.6, confidenceThreshold: 0.85, status: 'active', lastmileAgentId: 'schedule-optimization-ai' },
  { name: 'Fleet Maintenance Predictor', subtitle: 'Vehicle Health', accuracy: 92.0, metric2Label: 'Missed Failure', metric2Value: 2.4, metric3Label: 'Mean Prediction Lead', metric3Value: '4.7 weeks', overrideRate: 9.4, confidenceThreshold: 0.87, status: 'active', lastmileAgentId: 'fleet-maintenance-predictor' },
  { name: 'Crew Rostering AI', subtitle: 'Crew Scheduling', accuracy: 86.9, metric2Label: 'Roster Conflict', metric2Value: 1.1, metric3Label: 'Roster Generation', metric3Value: '8.6 min', overrideRate: 16.3, confidenceThreshold: 0.80, status: 'piloting', lastmileAgentId: 'crew-rostering-ai' },
  { name: 'On-Time Performance Optimizer', subtitle: 'OTP Analytics', accuracy: 85.4, metric2Label: 'OTP Deviation', metric2Value: 4.3, metric3Label: 'Recovery Time', metric3Value: '6.1 min', overrideRate: 17.8, confidenceThreshold: 0.79, status: 'piloting', lastmileAgentId: 'on-time-performance-optimizer' },
  { name: 'Fare Revenue Analyzer', subtitle: 'Revenue Optimization', accuracy: 83.2, metric2Label: 'Revenue Leak', metric2Value: 5.7, metric3Label: 'Analysis Frequency', metric3Value: '4 hrs', overrideRate: 20.1, confidenceThreshold: 0.76, status: 'piloting', lastmileAgentId: 'fare-revenue-analyzer' },
  { name: 'Safety Incident Predictor', subtitle: 'Risk Assessment', accuracy: 80.1, metric2Label: 'Risk Misclass', metric2Value: 7.2, metric3Label: 'Assessment Cycle', metric3Value: '12 hrs', overrideRate: 23.4, confidenceThreshold: 0.73, status: 'planned', lastmileAgentId: 'safety-incident-predictor' },
];

const heAiAgents: AIAgent[] = [
  { name: 'Energy Demand Forecaster', subtitle: 'Load Prediction', accuracy: 94.7, metric2Label: 'Load Error', metric2Value: 2.6, metric3Label: 'Forecast Interval', metric3Value: '15 min', overrideRate: 7.4, confidenceThreshold: 0.89, status: 'active', lastmileAgentId: 'energy-demand-forecaster' },
  { name: 'Grid Stability Monitor', subtitle: 'Grid Analytics', accuracy: 96.3, metric2Label: 'Stability Drift', metric2Value: 0.9, metric3Label: 'Alert Latency', metric3Value: '0.3s', overrideRate: 5.9, confidenceThreshold: 0.92, status: 'active', lastmileAgentId: 'grid-stability-monitor' },
  { name: 'Solar Output Predictor', subtitle: 'Solar Forecasting', accuracy: 87.6, metric2Label: 'Irradiance Error', metric2Value: 4.4, metric3Label: 'Prediction Window', metric3Value: '48 hrs', overrideRate: 14.7, confidenceThreshold: 0.81, status: 'piloting', lastmileAgentId: 'solar-output-predictor' },
  { name: 'Equipment Health AI', subtitle: 'Asset Monitoring', accuracy: 82.1, metric2Label: 'Degradation Miss', metric2Value: 6.8, metric3Label: 'Monitoring Interval', metric3Value: '5 min', overrideRate: 22.9, confidenceThreshold: 0.74, status: 'planned', lastmileAgentId: 'equipment-health-ai' },
  { name: 'Regulatory Compliance AI', subtitle: 'FERC/NERC', accuracy: 79.8, metric2Label: 'Compliance Gap', metric2Value: 3.7, metric3Label: 'Audit Prep Time', metric3Value: '1.6 hrs', overrideRate: 25.0, confidenceThreshold: 0.70, status: 'planned', lastmileAgentId: 'regulatory-compliance-ai' },
];

const ggAiAgents: AIAgent[] = [
  { name: 'Environmental Impact Predictor', subtitle: 'Impact Assessment', accuracy: 90.4, metric2Label: 'Impact Variance', metric2Value: 3.9, metric3Label: 'Assessment Time', metric3Value: '2.1 hrs', overrideRate: 12.8, confidenceThreshold: 0.84, status: 'active', lastmileAgentId: 'environmental-impact-predictor' },
  { name: 'Waste Stream Optimizer', subtitle: 'Waste Routing', accuracy: 88.1, metric2Label: 'Route Inefficiency', metric2Value: 5.4, metric3Label: 'Diversion Rate Gain', metric3Value: '14.7%', overrideRate: 15.1, confidenceThreshold: 0.82, status: 'active', lastmileAgentId: 'waste-stream-optimizer' },
  { name: 'EPA Compliance Monitor', subtitle: 'Regulatory Tracking', accuracy: 86.2, metric2Label: 'Filing Delay', metric2Value: 1.6, metric3Label: 'Compliance Score', metric3Value: '94.8%', overrideRate: 16.7, confidenceThreshold: 0.80, status: 'piloting', lastmileAgentId: 'epa-compliance-monitor' },
  { name: 'Remediation Planning AI', subtitle: 'Cleanup Scheduling', accuracy: 81.9, metric2Label: 'Schedule Deviation', metric2Value: 7.8, metric3Label: 'Cost Accuracy', metric3Value: '88.3%', overrideRate: 23.1, confidenceThreshold: 0.74, status: 'planned', lastmileAgentId: 'remediation-planning-ai' },
  { name: 'Air Quality Forecaster', subtitle: 'AQI Prediction', accuracy: 78.7, metric2Label: 'AQI Deviation', metric2Value: 9.1, metric3Label: 'Forecast Lead', metric3Value: '72 hrs', overrideRate: 24.6, confidenceThreshold: 0.71, status: 'planned', lastmileAgentId: 'air-quality-forecaster' },
];

const meridianAiAgents: AIAgent[] = [
  { name: 'RailSentry AI', subtitle: 'Defect Detection', accuracy: 97.1, metric2Label: 'False Positive', metric2Value: 1.3, metric3Label: 'Detection Latency', metric3Value: '0.4s', overrideRate: 5.7, confidenceThreshold: 0.92, status: 'active', lastmileAgentId: 'railsentry-ai' },
  { name: 'Project Estimation AI', subtitle: 'Bid Accuracy', accuracy: 94.2, metric2Label: 'Bid Variance', metric2Value: 3.1, metric3Label: 'Avg Estimation Time', metric3Value: '2.4 hrs', overrideRate: 8.3, confidenceThreshold: 0.88, status: 'active', lastmileAgentId: 'project-estimation-ai' },
  { name: 'Predictive Maintenance AI', subtitle: 'Asset Reliability', accuracy: 93.6, metric2Label: 'False Alarm Rate', metric2Value: 3.4, metric3Label: 'Mean Prediction Lead', metric3Value: '6.2 weeks', overrideRate: 7.8, confidenceThreshold: 0.89, status: 'active', lastmileAgentId: 'predictive-maintenance-ai' },
  { name: 'Schedule Optimization AI', subtitle: 'Service Planning', accuracy: 90.8, metric2Label: 'Headway Variance', metric2Value: 1.9, metric3Label: 'Planning Horizon', metric3Value: '90 days', overrideRate: 11.6, confidenceThreshold: 0.85, status: 'active', lastmileAgentId: 'schedule-optimization-ai' },
  { name: 'Safety Compliance Monitor', subtitle: 'OSHA/FRA', accuracy: 96.8, metric2Label: 'False Positive', metric2Value: 2.1, metric3Label: 'Alert Response Time', metric3Value: '4.8s', overrideRate: 5.2, confidenceThreshold: 0.91, status: 'active', lastmileAgentId: 'safety-compliance-monitor' },
  { name: 'Crew Scheduling Optimizer', subtitle: 'Workforce', accuracy: 88.7, metric2Label: 'Overtime Excess', metric2Value: 5.3, metric3Label: 'Idle Time Reduction', metric3Value: '22.4%', overrideRate: 14.2, confidenceThreshold: 0.83, status: 'active', lastmileAgentId: 'crew-scheduling-optimizer' },
  { name: 'Passenger Demand Forecaster', subtitle: 'Ridership Prediction', accuracy: 93.1, metric2Label: 'Demand Error', metric2Value: 3.6, metric3Label: 'Forecast Window', metric3Value: '14 days', overrideRate: 8.7, confidenceThreshold: 0.88, status: 'active', lastmileAgentId: 'passenger-demand-forecaster' },
  { name: 'Signal Fault Predictor', subtitle: 'Fault Prevention', accuracy: 92.4, metric2Label: 'False Alert Rate', metric2Value: 2.3, metric3Label: 'Prediction Window', metric3Value: '5.6 days', overrideRate: 9.1, confidenceThreshold: 0.87, status: 'active', lastmileAgentId: 'signal-fault-predictor' },
];

// ═══════════════════════════════════════════════════════════════════════════════
// ─── Data Sources (per opco) ─────────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

const hccDataSources: IntegrationDataSource[] = [
  { system: 'Primavera P6', division: 'Project Management', recordsAnalyzed: '1,247 projects', coverage: 94, status: 'Complete' },
  { system: 'AutoCAD Civil 3D', division: 'Engineering', recordsAnalyzed: '890 drawings', coverage: 87, status: 'Complete' },
  { system: 'HCSS Telematics', division: 'Fleet Operations', recordsAnalyzed: '400 vehicles tracked', coverage: 96, status: 'Complete' },
  { system: 'Legacy Field Dispatch', division: 'HCC Operations', recordsAnalyzed: '18,420 dispatch records', coverage: 78, status: 'In Progress' },
  { system: 'eCMS', division: 'HCC Finance', recordsAnalyzed: '6,847 financial records', coverage: 91, status: 'Complete' },
  { system: 'MCP (Internal)', division: 'Workforce', recordsAnalyzed: '1,200 employees', coverage: 100, status: 'Complete' },
];

const hrsiDataSources: IntegrationDataSource[] = [
  { system: 'Legacy Field Dispatch', division: 'Railroad Maintenance Ops', recordsAnalyzed: '9,340 work orders', coverage: 76, status: 'In Progress' },
  { system: 'eCMS', division: 'HRSI Finance', recordsAnalyzed: '3,218 financial records', coverage: 92, status: 'Complete' },
  { system: 'MCP (Internal)', division: 'Workforce', recordsAnalyzed: '380 employees', coverage: 100, status: 'Complete' },
  { system: 'HCSS Equipment360', division: 'Vehicle Telematics', recordsAnalyzed: '180 vehicles tracked', coverage: 88, status: 'Complete' },
  { system: 'Car Repair Database', division: 'Maintenance', recordsAnalyzed: '12,400 repair records', coverage: 83, status: 'In Progress' },
];

const hsiDataSources: IntegrationDataSource[] = [
  { system: 'TAM-4 Rail Testing', division: 'Track Inspection', recordsAnalyzed: '36 months of test data', coverage: 97, status: 'Complete' },
  { system: 'FRA RISPC Database', division: 'Regulatory', recordsAnalyzed: '12,400 inspections', coverage: 95, status: 'Complete' },
  { system: 'HCSS Telematics', division: 'Geospatial', recordsAnalyzed: '4,200 track-miles', coverage: 93, status: 'Complete' },
  { system: 'Ultrasonic Sensor Archive', division: 'Defect Imaging', recordsAnalyzed: '240,000 images', coverage: 89, status: 'In Progress' },
  { system: 'MCP (Internal)', division: 'Workforce', recordsAnalyzed: '220 employees', coverage: 100, status: 'Complete' },
];

const htiDataSources: IntegrationDataSource[] = [
  { system: 'PTC Signal Systems', division: 'Signal Operations', recordsAnalyzed: '4,200 track-miles monitored', coverage: 91, status: 'Complete' },
  { system: 'Wayside Data Logger', division: 'Field Equipment', recordsAnalyzed: '8,400 events/day', coverage: 86, status: 'In Progress' },
  { system: 'Signal Design CAD', division: 'Engineering', recordsAnalyzed: '1,800 signal designs', coverage: 94, status: 'Complete' },
  { system: 'ArcGIS Pro', division: 'Asset Mapping', recordsAnalyzed: '2,100 wayside assets', coverage: 90, status: 'Complete' },
  { system: 'eCMS', division: 'HTI Finance', recordsAnalyzed: '2,940 financial records', coverage: 88, status: 'Complete' },
];

const htsiDataSources: IntegrationDataSource[] = [
  { system: 'Trapeze OPS', division: 'Scheduling & Dispatch', recordsAnalyzed: '14,800 service runs', coverage: 95, status: 'Complete' },
  { system: 'HCSS Equipment360', division: 'Vehicle Telematics', recordsAnalyzed: '120 vehicles tracked', coverage: 92, status: 'Complete' },
  { system: 'MCP (Internal)', division: 'Workforce', recordsAnalyzed: '480 employees', coverage: 100, status: 'Complete' },
  { system: 'Fare Collection System', division: 'Revenue', recordsAnalyzed: '2.4M transactions', coverage: 87, status: 'In Progress' },
  { system: 'Transit Asset Management', division: 'Asset Lifecycle', recordsAnalyzed: '800 transit assets', coverage: 84, status: 'In Progress' },
];

const heDataSources: IntegrationDataSource[] = [
  { system: 'Energy SCADA', division: 'Grid Operations', recordsAnalyzed: '48,000 sensor tags', coverage: 96, status: 'Complete' },
  { system: 'Solar Monitoring Platform', division: 'Renewable Energy', recordsAnalyzed: '12 sites monitored', coverage: 89, status: 'Complete' },
  { system: 'eCMS', division: 'HE Finance', recordsAnalyzed: '1,620 financial records', coverage: 93, status: 'Complete' },
  { system: 'Grid Management System', division: 'Power Infrastructure', recordsAnalyzed: '3,400 grid segments', coverage: 82, status: 'In Progress' },
  { system: 'MCP (Internal)', division: 'Workforce', recordsAnalyzed: '120 employees', coverage: 100, status: 'Complete' },
];

const ggDataSources: IntegrationDataSource[] = [
  { system: 'Environmental Monitoring', division: 'Field Sensors', recordsAnalyzed: '42 monitoring sites', coverage: 91, status: 'Complete' },
  { system: 'Waste Tracking System', division: 'Waste Operations', recordsAnalyzed: '1,800 manifests', coverage: 85, status: 'In Progress' },
  { system: 'EPA Compliance DB', division: 'Regulatory', recordsAnalyzed: '2,140 regulatory filings', coverage: 94, status: 'Complete' },
  { system: 'eCMS', division: 'GG Finance', recordsAnalyzed: '1,180 financial records', coverage: 90, status: 'Complete' },
  { system: 'MCP (Internal)', division: 'Workforce', recordsAnalyzed: '90 employees', coverage: 100, status: 'Complete' },
];

const meridianDataSources: IntegrationDataSource[] = [
  { system: 'eCMS', division: 'Enterprise ERP', recordsAnalyzed: '24,847 work orders', coverage: 92, status: 'Complete' },
  { system: 'HCSS Telematics (All Divisions)', division: 'Fleet Operations', recordsAnalyzed: '700+ vehicles', coverage: 94, status: 'Complete' },
  { system: 'MCP (All Divisions)', division: 'Workforce', recordsAnalyzed: '2,800 employees', coverage: 100, status: 'Complete' },
  { system: 'Proposed Data Lakehouse', division: 'Cross-Division Analytics', recordsAnalyzed: '7 division feeds consolidated', coverage: 86, status: 'In Progress' },
  { system: 'HCSS Equipment360', division: 'Telematics', recordsAnalyzed: '300+ connected assets', coverage: 88, status: 'Complete' },
  { system: 'Legacy Field Dispatch', division: 'Field Operations', recordsAnalyzed: '27,760 dispatch records', coverage: 73, status: 'Pending Access' },
];

// ═══════════════════════════════════════════════════════════════════════════════
// ─── Vendor Health (per opco) ────────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

const hccVendorHealth: IntegrationVendorHealth[] = [
  { name: 'Primavera P6', status: 'green', uptime: 99.7, latency: 42, lastChecked: '2026-03-27T08:14:00Z' },
  { name: 'AutoCAD Civil 3D', status: 'green', uptime: 99.4, latency: 68, lastChecked: '2026-03-27T08:12:00Z' },
  { name: 'HCSS Telematics', status: 'yellow', uptime: 97.8, latency: 186, lastChecked: '2026-03-27T08:10:00Z', note: 'Elevated latency during peak dispatch hours' },
  { name: 'Legacy Field Dispatch', status: 'red', uptime: 94.2, latency: 890, lastChecked: '2026-03-27T08:08:00Z', note: 'Legacy system — frequent timeouts under load' },
  { name: 'eCMS (HCC)', status: 'green', uptime: 99.6, latency: 54, lastChecked: '2026-03-27T08:15:00Z' },
  { name: 'MCP (HCC)', status: 'green', uptime: 99.3, latency: 38, lastChecked: '2026-03-27T08:13:00Z' },
];

const hrsiVendorHealth: IntegrationVendorHealth[] = [
  { name: 'Legacy Field Dispatch', status: 'red', uptime: 94.8, latency: 742, lastChecked: '2026-03-27T07:58:00Z', note: 'Legacy system — intermittent API failures' },
  { name: 'eCMS (HRSI)', status: 'green', uptime: 99.5, latency: 61, lastChecked: '2026-03-27T08:02:00Z' },
  { name: 'MCP (HRSI)', status: 'green', uptime: 99.2, latency: 44, lastChecked: '2026-03-27T08:04:00Z' },
  { name: 'HCSS Equipment360', status: 'green', uptime: 99.8, latency: 28, lastChecked: '2026-03-27T08:06:00Z' },
  { name: 'Car Repair Database', status: 'yellow', uptime: 97.1, latency: 312, lastChecked: '2026-03-27T07:56:00Z', note: 'Slow query performance on historical records' },
];

const hsiVendorHealth: IntegrationVendorHealth[] = [
  { name: 'TAM-4 Rail Testing', status: 'green', uptime: 99.1, latency: 78, lastChecked: '2026-03-27T08:18:00Z' },
  { name: 'FRA RISPC Database', status: 'green', uptime: 99.6, latency: 52, lastChecked: '2026-03-27T08:16:00Z' },
  { name: 'HCSS Telematics', status: 'green', uptime: 99.3, latency: 64, lastChecked: '2026-03-27T08:20:00Z' },
  { name: 'Ultrasonic Sensor Archive', status: 'yellow', uptime: 96.4, latency: 428, lastChecked: '2026-03-27T08:14:00Z', note: 'High latency on large image batch retrieval' },
  { name: 'MCP (HSI)', status: 'green', uptime: 99.4, latency: 36, lastChecked: '2026-03-27T08:22:00Z' },
];

const htiVendorHealth: IntegrationVendorHealth[] = [
  { name: 'PTC Signal Systems', status: 'green', uptime: 99.9, latency: 18, lastChecked: '2026-03-27T08:24:00Z' },
  { name: 'Wayside Data Logger', status: 'yellow', uptime: 97.3, latency: 247, lastChecked: '2026-03-27T08:22:00Z', note: 'Intermittent data gaps from remote wayside units' },
  { name: 'Signal Design CAD', status: 'green', uptime: 99.2, latency: 86, lastChecked: '2026-03-27T08:20:00Z' },
  { name: 'ArcGIS Pro', status: 'green', uptime: 99.0, latency: 112, lastChecked: '2026-03-27T08:18:00Z' },
  { name: 'eCMS (HTI)', status: 'green', uptime: 99.4, latency: 58, lastChecked: '2026-03-27T08:26:00Z' },
];

const htsiVendorHealth: IntegrationVendorHealth[] = [
  { name: 'Trapeze OPS', status: 'green', uptime: 99.5, latency: 46, lastChecked: '2026-03-27T08:28:00Z' },
  { name: 'HCSS Equipment360 (HTSI)', status: 'green', uptime: 99.7, latency: 32, lastChecked: '2026-03-27T08:30:00Z' },
  { name: 'MCP (HTSI)', status: 'green', uptime: 99.1, latency: 41, lastChecked: '2026-03-27T08:26:00Z' },
  { name: 'Fare Collection System', status: 'yellow', uptime: 96.8, latency: 364, lastChecked: '2026-03-27T08:24:00Z', note: 'Payment gateway latency spikes during rush hour' },
  { name: 'Transit Asset Management', status: 'yellow', uptime: 97.6, latency: 198, lastChecked: '2026-03-27T08:22:00Z', note: 'Pending API v2 migration' },
];

const heVendorHealth: IntegrationVendorHealth[] = [
  { name: 'Energy SCADA', status: 'green', uptime: 99.8, latency: 22, lastChecked: '2026-03-27T08:32:00Z' },
  { name: 'Solar Monitoring Platform', status: 'green', uptime: 98.9, latency: 94, lastChecked: '2026-03-27T08:30:00Z' },
  { name: 'eCMS (HE)', status: 'green', uptime: 99.3, latency: 56, lastChecked: '2026-03-27T08:34:00Z' },
  { name: 'Grid Management System', status: 'yellow', uptime: 97.4, latency: 276, lastChecked: '2026-03-27T08:28:00Z', note: 'Legacy SCADA bridge causing intermittent delays' },
  { name: 'MCP (HE)', status: 'green', uptime: 99.6, latency: 34, lastChecked: '2026-03-27T08:36:00Z' },
];

const ggVendorHealth: IntegrationVendorHealth[] = [
  { name: 'Environmental Monitoring', status: 'green', uptime: 98.7, latency: 118, lastChecked: '2026-03-27T08:38:00Z' },
  { name: 'Waste Tracking System', status: 'yellow', uptime: 96.2, latency: 342, lastChecked: '2026-03-27T08:36:00Z', note: 'Manifest sync delays with third-party haulers' },
  { name: 'EPA Compliance DB', status: 'green', uptime: 99.1, latency: 72, lastChecked: '2026-03-27T08:40:00Z' },
  { name: 'eCMS (GG)', status: 'green', uptime: 99.5, latency: 48, lastChecked: '2026-03-27T08:42:00Z' },
  { name: 'MCP (GG)', status: 'green', uptime: 99.4, latency: 38, lastChecked: '2026-03-27T08:44:00Z' },
];

const meridianVendorHealth: IntegrationVendorHealth[] = [
  { name: 'eCMS', status: 'green', uptime: 99.7, latency: 48, lastChecked: '2026-03-27T08:46:00Z' },
  { name: 'HCSS Telematics (Enterprise)', status: 'green', uptime: 99.4, latency: 74, lastChecked: '2026-03-27T08:44:00Z' },
  { name: 'MCP (Enterprise)', status: 'green', uptime: 99.3, latency: 42, lastChecked: '2026-03-27T08:48:00Z' },
  { name: 'Proposed Data Lakehouse', status: 'yellow', uptime: 98.1, latency: 156, lastChecked: '2026-03-27T08:42:00Z', note: 'Ingestion pipeline backpressure during nightly ETL' },
  { name: 'HCSS Equipment360', status: 'green', uptime: 99.8, latency: 26, lastChecked: '2026-03-27T08:50:00Z' },
  { name: 'Legacy Field Dispatch', status: 'red', uptime: 94.6, latency: 820, lastChecked: '2026-03-27T08:40:00Z', note: 'Scheduled for decommission Q4 — unstable under cross-division load' },
];

// ═══════════════════════════════════════════════════════════════════════════════
// ─── Failure Modes (per opco) ────────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

const hccFailureModes: IntegrationFailureMode[] = [
  { vendor: 'Primavera P6', scenario: 'API token expiration during multi-project sync', recovery: 'Auto-refresh token with 15-min buffer before expiry', status: 'Passing' },
  { vendor: 'Legacy Field Dispatch', scenario: 'Database connection pool exhaustion under peak dispatch', recovery: 'Circuit breaker with 30s cooldown, queue overflow to backup', status: 'Needs Attention' },
  { vendor: 'HCSS Telematics', scenario: 'GPS signal loss in tunnel/bridge construction zones', recovery: 'Dead reckoning interpolation with last-known-good coordinates', status: 'Passing' },
  { vendor: 'AutoCAD Civil 3D', scenario: 'Large drawing file transfer timeout (>500MB)', recovery: 'Chunked upload with resume capability and checksum validation', status: 'Passing' },
  { vendor: 'eCMS (HCC)', scenario: 'Month-end financial close locks preventing real-time reads', recovery: 'Read from reporting replica during close window', status: 'Passing' },
];

const hrsiFailureModes: IntegrationFailureMode[] = [
  { vendor: 'Legacy Field Dispatch', scenario: 'Legacy API returns malformed JSON on edge-case equipment IDs', recovery: 'Input sanitization layer with fallback to manual dispatch queue', status: 'Needs Attention' },
  { vendor: 'Car Repair Database', scenario: 'Slow query timeout on historical repair record aggregation', recovery: 'Pre-computed materialized views refreshed nightly', status: 'Needs Attention' },
  { vendor: 'HCSS Equipment360', scenario: 'Cellular dead zones causing telemetry gaps on rural rail corridors', recovery: 'On-device buffering with store-and-forward sync', status: 'Passing' },
  { vendor: 'MCP (HRSI)', scenario: 'Payroll integration failure during bi-weekly processing', recovery: 'Retry queue with 3x exponential backoff, manual override alert', status: 'Passing' },
];

const hsiFailureModes: IntegrationFailureMode[] = [
  { vendor: 'Ultrasonic Sensor Archive', scenario: 'Image batch upload fails on corrupted sensor frames', recovery: 'Frame-level validation with corrupt frame isolation and re-scan flag', status: 'Passing' },
  { vendor: 'TAM-4 Rail Testing', scenario: 'Real-time data stream disconnect during active testing run', recovery: 'Automatic reconnect with gap detection and backfill from on-board storage', status: 'Passing' },
  { vendor: 'FRA RISPC Database', scenario: 'Regulatory submission rejected due to schema version mismatch', recovery: 'Schema version detection with auto-transform to current FRA format', status: 'Needs Attention' },
  { vendor: 'HCSS Telematics', scenario: 'Coordinate projection mismatch between NAD83 and WGS84 systems', recovery: 'Automatic projection detection and transform before data merge', status: 'Passing' },
];

const htiFailureModes: IntegrationFailureMode[] = [
  { vendor: 'PTC Signal Systems', scenario: 'Signal state change event lost during network congestion', recovery: 'Redundant event sourcing with acknowledgment-based delivery', status: 'Passing' },
  { vendor: 'Wayside Data Logger', scenario: 'Remote unit firmware mismatch after partial OTA update', recovery: 'Firmware version check on reconnect with forced rollback capability', status: 'Needs Attention' },
  { vendor: 'Signal Design CAD', scenario: 'Design file version conflict during concurrent engineering edits', recovery: 'Pessimistic locking with merge conflict resolution workflow', status: 'Passing' },
  { vendor: 'ArcGIS Pro', scenario: 'Geospatial layer sync failure on large asset dataset (>2K assets)', recovery: 'Incremental delta sync with spatial index partitioning', status: 'Passing' },
];

const htsiFailureModes: IntegrationFailureMode[] = [
  { vendor: 'Trapeze OPS', scenario: 'Schedule import fails on non-standard GTFS-realtime feed format', recovery: 'GTFS format normalizer with validation report before import', status: 'Passing' },
  { vendor: 'Fare Collection System', scenario: 'Payment gateway timeout during peak ridership periods', recovery: 'Offline fare acceptance with batch reconciliation post-recovery', status: 'Needs Attention' },
  { vendor: 'Transit Asset Management', scenario: 'Asset lifecycle data sync lag exceeding 24-hour threshold', recovery: 'Priority sync queue for critical assets, background sync for rest', status: 'Needs Attention' },
  { vendor: 'HCSS Equipment360 (HTSI)', scenario: 'Vehicle health telemetry flood during fleet-wide diagnostic cycle', recovery: 'Rate limiter with priority queuing for critical health alerts', status: 'Passing' },
];

const heFailureModes: IntegrationFailureMode[] = [
  { vendor: 'Energy SCADA', scenario: 'Sensor tag data overflow during grid instability event', recovery: 'Adaptive sampling rate with priority tag buffering', status: 'Passing' },
  { vendor: 'Grid Management System', scenario: 'Legacy SCADA bridge protocol translation failure', recovery: 'Protocol fallback chain with OPC-UA as primary, Modbus as backup', status: 'Needs Attention' },
  { vendor: 'Solar Monitoring Platform', scenario: 'Cloud-edge sync failure during inverter firmware updates', recovery: 'Edge-local data retention with automatic sync on reconnect', status: 'Passing' },
  { vendor: 'eCMS (HE)', scenario: 'Energy billing data mismatch between SCADA metering and eCMS', recovery: 'Automated reconciliation report with variance threshold alerts', status: 'Passing' },
];

const ggFailureModes: IntegrationFailureMode[] = [
  { vendor: 'Environmental Monitoring', scenario: 'Sensor calibration drift detected on remote field units', recovery: 'Auto-calibration check with data quality flag and maintenance alert', status: 'Passing' },
  { vendor: 'Waste Tracking System', scenario: 'Manifest sync failure with third-party waste hauler API', recovery: 'Manifest queue with retry and manual reconciliation workflow', status: 'Needs Attention' },
  { vendor: 'EPA Compliance DB', scenario: 'Regulatory schema update breaks existing submission format', recovery: 'Schema version detection with backward-compatible transform layer', status: 'Passing' },
  { vendor: 'eCMS (GG)', scenario: 'Project cost allocation mismatch across remediation sites', recovery: 'Cross-site cost reconciliation with automated allocation rules', status: 'Passing' },
];

const meridianFailureModes: IntegrationFailureMode[] = [
  { vendor: 'eCMS', scenario: 'Cross-division data consolidation timeout during monthly roll-up', recovery: 'Parallel division processing with staged consolidation and retry', status: 'Passing' },
  { vendor: 'Legacy Field Dispatch', scenario: 'Complete system outage affecting all field dispatch operations', recovery: 'Failover to HCSS-based dispatch with manual crew notification', status: 'Needs Attention' },
  { vendor: 'Proposed Data Lakehouse', scenario: 'ETL pipeline failure on schema evolution across divisions', recovery: 'Schema registry with backward-compatible evolution and dead-letter queue', status: 'Passing' },
  { vendor: 'HCSS Telematics (Enterprise)', scenario: 'Fleet-wide GPS drift during solar storm event', recovery: 'Multi-constellation GNSS fallback with Galileo/GLONASS augmentation', status: 'Passing' },
  { vendor: 'HCSS Equipment360', scenario: 'IoT device certificate expiration across fleet', recovery: 'Automated certificate rotation with 30-day advance renewal', status: 'Passing' },
];

// ═══════════════════════════════════════════════════════════════════════════════
// ─── Methodology Steps (per opco) ───────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

const hccMethodologySteps: IntegrationMethodologyStep[] = [
  { number: 1, title: 'Fleet Asset Discovery', description: 'Inventory all 400+ fleet vehicles, heavy equipment, and GPS-tracked assets across HCC construction sites and rail corridors.' },
  { number: 2, title: 'Field Workflow Mapping', description: 'Map 18 critical construction workflows from bid estimation through project closeout, identifying manual handoffs and data gaps.' },
  { number: 3, title: 'Construction Tech Audit', description: 'Assess Primavera P6, AutoCAD Civil 3D, HCSS Telematics, and legacy field dispatch system for integration readiness, API maturity, and data quality.' },
  { number: 4, title: 'Project ROI Modeling', description: 'Model AI-driven savings across fleet utilization, bid accuracy, paving quality, and safety compliance for HCC\'s $180M annual project volume.' },
];

const hrsiMethodologySteps: IntegrationMethodologyStep[] = [
  { number: 1, title: 'Equipment Registry Scan', description: 'Catalog all railroad maintenance equipment, leased rolling stock, and repair facility assets across HRSI operations.' },
  { number: 2, title: 'Maintenance Workflow Analysis', description: 'Analyze 12 core maintenance workflows from car repair triage through equipment return, mapping crew scheduling bottlenecks.' },
  { number: 3, title: 'Railroad Tech Stack Audit', description: 'Evaluate legacy field dispatch, eCMS, HCSS Equipment360 fleet, and car repair database for data completeness and integration capability.' },
  { number: 4, title: 'Service ROI Modeling', description: 'Quantify predictive maintenance savings, crew utilization gains, and parts inventory optimization for HRSI\'s 380-employee operation.' },
];

const hsiMethodologySteps: IntegrationMethodologyStep[] = [
  { number: 1, title: 'Sensor Data Inventory', description: 'Catalog 240K+ ultrasonic images, TAM-4 test data, and GPS track geometry data across HSI\'s testing fleet and archive systems.' },
  { number: 2, title: 'Inspection Workflow Analysis', description: 'Map end-to-end rail inspection process from route planning through FRA defect reporting, identifying AI augmentation points.' },
  { number: 3, title: 'Testing Platform Audit', description: 'Assess TAM-4 software, ultrasonic sensor systems, FRA RISPC database, and HCSS Telematics for ML training data readiness.' },
  { number: 4, title: 'Compliance ROI Modeling', description: 'Model RailSentry AI defect detection improvements, FRA compliance automation savings, and route optimization gains across 4,200 track-miles.' },
];

const htiMethodologySteps: IntegrationMethodologyStep[] = [
  { number: 1, title: 'Signal System Inventory', description: 'Document all PTC installations, wayside equipment, signal controllers, and communication infrastructure across HTI\'s 4,200 track-mile territory.' },
  { number: 2, title: 'PTC Workflow Mapping', description: 'Map signal installation, configuration validation, and maintenance workflows from design through field commissioning.' },
  { number: 3, title: 'Signal Tech Stack Audit', description: 'Evaluate PTC systems, wayside data loggers, Signal Design CAD, and ArcGIS for real-time monitoring and predictive analytics readiness.' },
  { number: 4, title: 'Infrastructure ROI Modeling', description: 'Quantify signal fault prediction savings, PTC configuration validation gains, and installation planning optimization for HTI\'s 310-person team.' },
];

const htsiMethodologySteps: IntegrationMethodologyStep[] = [
  { number: 1, title: 'Ridership Data Analysis', description: 'Analyze passenger demand patterns, fare collection data, and service utilization across HTSI\'s transit operations and 2.4M annual transactions.' },
  { number: 2, title: 'Transit Schedule Mapping', description: 'Map scheduling, crew rostering, and fleet deployment workflows from demand forecasting through real-time service adjustments.' },
  { number: 3, title: 'Operations Platform Audit', description: 'Assess Trapeze OPS, HCSS Equipment360 fleet, fare collection, and transit asset management systems for AI-powered service optimization.' },
  { number: 4, title: 'Service ROI Modeling', description: 'Model on-time performance improvements, crew scheduling optimization, and fare revenue gains for HTSI\'s 480-employee passenger rail operation.' },
];

const heMethodologySteps: IntegrationMethodologyStep[] = [
  { number: 1, title: 'SCADA/Grid Discovery', description: 'Inventory 48,000 sensor tags, 12 solar sites, and grid management infrastructure across IC Energy\'s generation and distribution assets.' },
  { number: 2, title: 'Energy Workflow Mapping', description: 'Map load forecasting, grid stability monitoring, solar output prediction, and equipment maintenance workflows across the energy portfolio.' },
  { number: 3, title: 'Infrastructure Tech Audit', description: 'Evaluate SCADA systems, solar monitoring platform, grid management, and eCMS for real-time AI analytics and predictive maintenance readiness.' },
  { number: 4, title: 'Renewable ROI Modeling', description: 'Quantify demand forecasting improvements, grid stability gains, solar output optimization, and FERC/NERC compliance automation for HE\'s 120-person team.' },
];

const ggMethodologySteps: IntegrationMethodologyStep[] = [
  { number: 1, title: 'Compliance Data Inventory', description: 'Catalog environmental monitoring data from 42 sites, waste manifests, EPA filings, and remediation project records across IC Environmental operations.' },
  { number: 2, title: 'Environmental Workflow Mapping', description: 'Map impact assessment, waste stream routing, EPA compliance reporting, and remediation planning workflows from field sampling through regulatory submission.' },
  { number: 3, title: 'Monitoring Tech Audit', description: 'Assess environmental monitoring sensors, waste tracking system, EPA compliance database, and eCMS for AI-powered environmental analytics readiness.' },
  { number: 4, title: 'Remediation ROI Modeling', description: 'Model compliance automation savings, waste routing optimization, air quality forecasting improvements, and remediation scheduling gains for GG\'s 90-person team.' },
];

const meridianMethodologySteps: IntegrationMethodologyStep[] = [
  { number: 1, title: 'License Discovery', description: 'Comprehensive audit of software licenses across all 7 divisions — identify unused seats, redundant tools, and consolidation opportunities across 2,800 employees.' },
  { number: 2, title: 'Workflow Mapping', description: 'Map 62 critical workflows across rail construction, testing, signals, transit, energy, and environmental divisions to identify automation candidates.' },
  { number: 3, title: 'Tech Stack Health', description: 'Assess the full enterprise tech stack — eCMS, Primavera P6, HCSS Telematics, legacy field dispatch, and division-specific tools — for AI readiness and integration maturity.' },
  { number: 4, title: 'ROI Modeling', description: 'Model Year 1 savings of $5.8M across license reclamation, workflow automation, fleet intelligence, and AI-native railroad operations transformation.' },
];

// ═══════════════════════════════════════════════════════════════════════════════
// ─── AI Agents (Northwood, Pinnacle, Atlas) ────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

const northwoodAiAgents: AIAgent[] = [
  { name: 'Claims Triage AI', subtitle: 'Claims Routing', accuracy: 95.4, metric2Label: 'Misroute Rate', metric2Value: 1.8, metric3Label: 'Triage Latency', metric3Value: '0.6s', overrideRate: 6.2, confidenceThreshold: 0.91, status: 'active', lastmileAgentId: 'claims-triage-ai' },
  { name: 'Underwriting Copilot', subtitle: 'Risk Assessment', accuracy: 93.1, metric2Label: 'Risk Mispricing', metric2Value: 2.4, metric3Label: 'Decision Time', metric3Value: '1.8s', overrideRate: 8.7, confidenceThreshold: 0.88, status: 'active', lastmileAgentId: 'underwriting-copilot' },
  { name: 'Fraud Detection Engine', subtitle: 'Fraud Prevention', accuracy: 97.8, metric2Label: 'False Positive', metric2Value: 3.2, metric3Label: 'Detection Speed', metric3Value: '0.3s', overrideRate: 4.1, confidenceThreshold: 0.94, status: 'active', lastmileAgentId: 'fraud-detection-engine' },
  { name: 'Policy Renewal Bot', subtitle: 'Retention Automation', accuracy: 89.6, metric2Label: 'Churn Misclass', metric2Value: 5.1, metric3Label: 'Renewal Lead Time', metric3Value: '30 days', overrideRate: 13.4, confidenceThreshold: 0.83, status: 'piloting', lastmileAgentId: 'policy-renewal-bot' },
  { name: 'Loss Reserve Estimator', subtitle: 'Reserve Accuracy', accuracy: 86.3, metric2Label: 'Reserve Variance', metric2Value: 6.8, metric3Label: 'Estimation Cycle', metric3Value: '4.2 hrs', overrideRate: 17.2, confidenceThreshold: 0.79, status: 'piloting', lastmileAgentId: 'loss-reserve-estimator' },
  { name: 'Subrogation Analyzer', subtitle: 'Recovery Optimization', accuracy: 82.7, metric2Label: 'Recovery Miss', metric2Value: 8.3, metric3Label: 'Analysis Time', metric3Value: '6.1 hrs', overrideRate: 21.6, confidenceThreshold: 0.75, status: 'planned', lastmileAgentId: 'subrogation-analyzer' },
];

const pinnacleAiAgents: AIAgent[] = [
  { name: 'Clinical NLP Agent', subtitle: 'Medical Text Mining', accuracy: 96.2, metric2Label: 'Entity Miss Rate', metric2Value: 1.4, metric3Label: 'Processing Speed', metric3Value: '0.5s', overrideRate: 5.8, confidenceThreshold: 0.92, status: 'active', lastmileAgentId: 'clinical-nlp-agent' },
  { name: 'Billing Code Optimizer', subtitle: 'Revenue Cycle', accuracy: 94.7, metric2Label: 'Code Error Rate', metric2Value: 2.1, metric3Label: 'Optimization Time', metric3Value: '1.2s', overrideRate: 7.3, confidenceThreshold: 0.90, status: 'active', lastmileAgentId: 'billing-code-optimizer' },
  { name: 'Prior Auth Bot', subtitle: 'Authorization Automation', accuracy: 91.3, metric2Label: 'Denial Rate', metric2Value: 3.6, metric3Label: 'Auth Turnaround', metric3Value: '4.2 min', overrideRate: 10.8, confidenceThreshold: 0.86, status: 'active', lastmileAgentId: 'prior-auth-bot' },
  { name: 'Scheduling AI', subtitle: 'Appointment Optimization', accuracy: 88.9, metric2Label: 'No-Show Mispredict', metric2Value: 4.8, metric3Label: 'Slot Utilization', metric3Value: '94.1%', overrideRate: 14.1, confidenceThreshold: 0.82, status: 'piloting', lastmileAgentId: 'scheduling-ai' },
  { name: 'Readmission Risk Predictor', subtitle: 'Patient Outcomes', accuracy: 85.4, metric2Label: 'Risk Misclass', metric2Value: 6.2, metric3Label: 'Prediction Window', metric3Value: '30 days', overrideRate: 18.3, confidenceThreshold: 0.78, status: 'piloting', lastmileAgentId: 'readmission-risk-predictor' },
  { name: 'Drug Interaction Checker', subtitle: 'Patient Safety', accuracy: 99.1, metric2Label: 'Missed Interaction', metric2Value: 0.3, metric3Label: 'Check Latency', metric3Value: '0.1s', overrideRate: 2.4, confidenceThreshold: 0.97, status: 'active', lastmileAgentId: 'drug-interaction-checker' },
];

const atlasAiAgents: AIAgent[] = [
  { name: 'Production Optimizer', subtitle: 'Line Efficiency', accuracy: 94.8, metric2Label: 'Yield Loss', metric2Value: 1.9, metric3Label: 'Optimization Cycle', metric3Value: '2.4s', overrideRate: 7.1, confidenceThreshold: 0.90, status: 'active', lastmileAgentId: 'production-optimizer' },
  { name: 'Quality Vision AI', subtitle: 'Visual Inspection', accuracy: 97.3, metric2Label: 'False Reject', metric2Value: 1.1, metric3Label: 'Inspection Speed', metric3Value: '0.2s', overrideRate: 4.6, confidenceThreshold: 0.93, status: 'active', lastmileAgentId: 'quality-vision-ai' },
  { name: 'Supply Chain Predictor', subtitle: 'Demand Forecasting', accuracy: 91.6, metric2Label: 'Forecast Error', metric2Value: 3.7, metric3Label: 'Planning Horizon', metric3Value: '12 weeks', overrideRate: 10.2, confidenceThreshold: 0.86, status: 'active', lastmileAgentId: 'supply-chain-predictor' },
  { name: 'Maintenance Prophet', subtitle: 'Predictive Maintenance', accuracy: 93.2, metric2Label: 'False Alarm Rate', metric2Value: 2.8, metric3Label: 'Prediction Lead', metric3Value: '3.6 weeks', overrideRate: 8.4, confidenceThreshold: 0.88, status: 'active', lastmileAgentId: 'maintenance-prophet' },
  { name: 'Energy Consumption AI', subtitle: 'Utility Optimization', accuracy: 87.4, metric2Label: 'Consumption Error', metric2Value: 5.3, metric3Label: 'Savings Rate', metric3Value: '11.2%', overrideRate: 15.7, confidenceThreshold: 0.81, status: 'piloting', lastmileAgentId: 'energy-consumption-ai' },
  { name: 'Digital Twin Simulator', subtitle: 'Process Modeling', accuracy: 84.1, metric2Label: 'Model Drift', metric2Value: 7.6, metric3Label: 'Simulation Speed', metric3Value: '8.4s', overrideRate: 19.3, confidenceThreshold: 0.77, status: 'planned', lastmileAgentId: 'digital-twin-simulator' },
];

// ═══════════════════════════════════════════════════════════════════════════════
// ─── AI Agents (Northbridge + Subsidiaries) ──────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

const northbridgeAiAgents: AIAgent[] = [
  { name: 'Strategy AI', subtitle: 'Portfolio Analytics', accuracy: 92.6, metric2Label: 'Forecast Variance', metric2Value: 3.1, metric3Label: 'Analysis Cycle', metric3Value: '4.8 hrs', overrideRate: 9.4, confidenceThreshold: 0.87, status: 'active', lastmileAgentId: 'strategy-ai' },
  { name: 'Compliance Aggregator', subtitle: 'Cross-Division Compliance', accuracy: 95.1, metric2Label: 'Gap Detection Miss', metric2Value: 1.7, metric3Label: 'Scan Frequency', metric3Value: '1 hr', overrideRate: 6.3, confidenceThreshold: 0.91, status: 'active', lastmileAgentId: 'compliance-aggregator' },
  { name: 'Capital Allocator', subtitle: 'Investment Optimization', accuracy: 89.3, metric2Label: 'Allocation Error', metric2Value: 4.6, metric3Label: 'Rebalance Time', metric3Value: '12 min', overrideRate: 13.1, confidenceThreshold: 0.83, status: 'piloting', lastmileAgentId: 'capital-allocator' },
  { name: 'Synergy Detector', subtitle: 'Cross-BU Opportunities', accuracy: 84.7, metric2Label: 'False Signal', metric2Value: 7.2, metric3Label: 'Scan Window', metric3Value: '24 hrs', overrideRate: 18.6, confidenceThreshold: 0.77, status: 'planned', lastmileAgentId: 'synergy-detector' },
];

const nbAerospaceAiAgents: AIAgent[] = [
  { name: 'Certification AI', subtitle: 'FAA Compliance', accuracy: 96.7, metric2Label: 'Cert Gap Rate', metric2Value: 1.2, metric3Label: 'Review Cycle', metric3Value: '3.4 hrs', overrideRate: 5.4, confidenceThreshold: 0.93, status: 'active', lastmileAgentId: 'certification-ai' },
  { name: 'Parts Tracker', subtitle: 'Supply Chain Visibility', accuracy: 93.8, metric2Label: 'Tracking Error', metric2Value: 2.3, metric3Label: 'Refresh Interval', metric3Value: '5 min', overrideRate: 8.1, confidenceThreshold: 0.89, status: 'active', lastmileAgentId: 'parts-tracker' },
  { name: 'MRO Optimizer', subtitle: 'Maintenance Planning', accuracy: 91.2, metric2Label: 'Schedule Slip', metric2Value: 3.8, metric3Label: 'Turnaround Gain', metric3Value: '18.6%', overrideRate: 11.4, confidenceThreshold: 0.85, status: 'active', lastmileAgentId: 'mro-optimizer' },
  { name: 'Flight Test Analyzer', subtitle: 'Test Data Mining', accuracy: 87.6, metric2Label: 'Anomaly Miss', metric2Value: 5.1, metric3Label: 'Analysis Time', metric3Value: '6.2 min', overrideRate: 15.2, confidenceThreshold: 0.81, status: 'piloting', lastmileAgentId: 'flight-test-analyzer' },
  { name: 'AOG Predictor', subtitle: 'Aircraft-on-Ground Prevention', accuracy: 82.3, metric2Label: 'AOG Mispredict', metric2Value: 8.4, metric3Label: 'Prediction Lead', metric3Value: '5.8 days', overrideRate: 21.3, confidenceThreshold: 0.74, status: 'planned', lastmileAgentId: 'aog-predictor' },
];

const nbEnergyAiAgents: AIAgent[] = [
  { name: 'Grid AI', subtitle: 'Grid Management', accuracy: 95.8, metric2Label: 'Load Forecast Error', metric2Value: 1.6, metric3Label: 'Response Time', metric3Value: '0.4s', overrideRate: 5.9, confidenceThreshold: 0.92, status: 'active', lastmileAgentId: 'grid-ai' },
  { name: 'SCADA Monitor', subtitle: 'Infrastructure Health', accuracy: 94.1, metric2Label: 'Alert Miss Rate', metric2Value: 2.2, metric3Label: 'Monitor Interval', metric3Value: '10s', overrideRate: 7.6, confidenceThreshold: 0.89, status: 'active', lastmileAgentId: 'scada-monitor' },
  { name: 'Outage Predictor', subtitle: 'Outage Prevention', accuracy: 90.7, metric2Label: 'False Alarm Rate', metric2Value: 4.1, metric3Label: 'Prediction Window', metric3Value: '6.4 hrs', overrideRate: 12.3, confidenceThreshold: 0.85, status: 'piloting', lastmileAgentId: 'outage-predictor' },
  { name: 'Renewable Dispatch AI', subtitle: 'Clean Energy Optimization', accuracy: 86.4, metric2Label: 'Curtailment Error', metric2Value: 5.9, metric3Label: 'Dispatch Cycle', metric3Value: '30s', overrideRate: 16.8, confidenceThreshold: 0.80, status: 'piloting', lastmileAgentId: 'renewable-dispatch-ai' },
  { name: 'Carbon Accounting AI', subtitle: 'Emissions Tracking', accuracy: 83.2, metric2Label: 'Emission Error', metric2Value: 7.3, metric3Label: 'Report Cycle', metric3Value: '24 hrs', overrideRate: 20.1, confidenceThreshold: 0.76, status: 'planned', lastmileAgentId: 'carbon-accounting-ai' },
];

const nbFinancialAiAgents: AIAgent[] = [
  { name: 'KYC Engine', subtitle: 'Customer Verification', accuracy: 97.2, metric2Label: 'False Reject', metric2Value: 1.1, metric3Label: 'Verification Time', metric3Value: '2.4s', overrideRate: 4.3, confidenceThreshold: 0.94, status: 'active', lastmileAgentId: 'kyc-engine' },
  { name: 'Trade Screener', subtitle: 'Compliance Screening', accuracy: 98.4, metric2Label: 'Missed Flag', metric2Value: 0.6, metric3Label: 'Screening Latency', metric3Value: '0.8s', overrideRate: 3.1, confidenceThreshold: 0.96, status: 'active', lastmileAgentId: 'trade-screener' },
  { name: 'Fraud Detector', subtitle: 'Transaction Monitoring', accuracy: 96.1, metric2Label: 'False Positive', metric2Value: 2.8, metric3Label: 'Detection Speed', metric3Value: '0.2s', overrideRate: 5.6, confidenceThreshold: 0.92, status: 'active', lastmileAgentId: 'fraud-detector' },
  { name: 'Credit Risk Modeler', subtitle: 'Risk Assessment', accuracy: 91.8, metric2Label: 'Default Mispredict', metric2Value: 3.4, metric3Label: 'Scoring Time', metric3Value: '1.6s', overrideRate: 10.2, confidenceThreshold: 0.86, status: 'piloting', lastmileAgentId: 'credit-risk-modeler' },
  { name: 'AML Pattern Detector', subtitle: 'Anti-Money Laundering', accuracy: 88.6, metric2Label: 'Pattern Miss', metric2Value: 4.7, metric3Label: 'Scan Window', metric3Value: '15 min', overrideRate: 14.3, confidenceThreshold: 0.82, status: 'piloting', lastmileAgentId: 'aml-pattern-detector' },
];

const nbHealthAiAgents: AIAgent[] = [
  { name: 'Trial Analyst', subtitle: 'Clinical Trial Analytics', accuracy: 93.4, metric2Label: 'Endpoint Miss', metric2Value: 2.6, metric3Label: 'Analysis Time', metric3Value: '8.3 min', overrideRate: 8.9, confidenceThreshold: 0.88, status: 'active', lastmileAgentId: 'trial-analyst' },
  { name: 'Safety Monitor', subtitle: 'Adverse Event Detection', accuracy: 96.8, metric2Label: 'Event Miss Rate', metric2Value: 1.1, metric3Label: 'Detection Latency', metric3Value: '0.6s', overrideRate: 4.7, confidenceThreshold: 0.93, status: 'active', lastmileAgentId: 'safety-monitor' },
  { name: 'QA Inspector', subtitle: 'Manufacturing QA', accuracy: 95.2, metric2Label: 'Defect Miss Rate', metric2Value: 1.8, metric3Label: 'Inspection Speed', metric3Value: '0.4s', overrideRate: 6.1, confidenceThreshold: 0.91, status: 'active', lastmileAgentId: 'qa-inspector' },
  { name: 'Patient Stratifier', subtitle: 'Cohort Selection', accuracy: 89.7, metric2Label: 'Cohort Misclass', metric2Value: 4.3, metric3Label: 'Stratification Time', metric3Value: '3.2 min', overrideRate: 13.4, confidenceThreshold: 0.83, status: 'piloting', lastmileAgentId: 'patient-stratifier' },
  { name: 'Supply Chain Forecaster', subtitle: 'Pharma Supply Chain', accuracy: 85.1, metric2Label: 'Demand Error', metric2Value: 6.7, metric3Label: 'Forecast Horizon', metric3Value: '8 weeks', overrideRate: 18.2, confidenceThreshold: 0.78, status: 'planned', lastmileAgentId: 'supply-chain-forecaster' },
];

// ═══════════════════════════════════════════════════════════════════════════════
// ─── AI Agents (Estonia + Subsidiaries) ──────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

const estoniaAiAgents: AIAgent[] = [
  { name: 'Governance AI', subtitle: 'Policy Compliance', accuracy: 94.3, metric2Label: 'Policy Gap Rate', metric2Value: 2.1, metric3Label: 'Scan Cycle', metric3Value: '2.4 hrs', overrideRate: 7.8, confidenceThreshold: 0.89, status: 'active', lastmileAgentId: 'governance-ai' },
  { name: 'X-Road Monitor', subtitle: 'Infrastructure Health', accuracy: 98.1, metric2Label: 'Service Miss', metric2Value: 0.7, metric3Label: 'Check Interval', metric3Value: '30s', overrideRate: 3.2, confidenceThreshold: 0.96, status: 'active', lastmileAgentId: 'x-road-monitor' },
  { name: 'Citizen Portal AI', subtitle: 'Service Optimization', accuracy: 91.7, metric2Label: 'Routing Error', metric2Value: 3.4, metric3Label: 'Response Time', metric3Value: '1.2s', overrideRate: 10.6, confidenceThreshold: 0.86, status: 'active', lastmileAgentId: 'citizen-portal-ai' },
  { name: 'Budget Forecast AI', subtitle: 'Fiscal Planning', accuracy: 87.9, metric2Label: 'Forecast Variance', metric2Value: 5.6, metric3Label: 'Planning Horizon', metric3Value: '12 months', overrideRate: 15.1, confidenceThreshold: 0.81, status: 'piloting', lastmileAgentId: 'budget-forecast-ai' },
  { name: 'Legislative Impact Analyzer', subtitle: 'Policy Modeling', accuracy: 83.4, metric2Label: 'Impact Mispredict', metric2Value: 7.8, metric3Label: 'Analysis Time', metric3Value: '18 min', overrideRate: 19.7, confidenceThreshold: 0.76, status: 'planned', lastmileAgentId: 'legislative-impact-analyzer' },
];

const eeFinanceAiAgents: AIAgent[] = [
  { name: 'Tax AI', subtitle: 'Tax Processing', accuracy: 96.4, metric2Label: 'Filing Error', metric2Value: 1.3, metric3Label: 'Processing Time', metric3Value: '0.8s', overrideRate: 5.2, confidenceThreshold: 0.93, status: 'active', lastmileAgentId: 'tax-ai' },
  { name: 'Audit Bot', subtitle: 'Automated Auditing', accuracy: 93.7, metric2Label: 'Anomaly Miss', metric2Value: 2.4, metric3Label: 'Audit Cycle', metric3Value: '6.4 min', overrideRate: 8.4, confidenceThreshold: 0.89, status: 'active', lastmileAgentId: 'audit-bot' },
  { name: 'Revenue Predictor', subtitle: 'Fiscal Forecasting', accuracy: 90.1, metric2Label: 'Forecast Error', metric2Value: 3.9, metric3Label: 'Prediction Window', metric3Value: '6 months', overrideRate: 12.1, confidenceThreshold: 0.84, status: 'piloting', lastmileAgentId: 'revenue-predictor' },
  { name: 'VAT Fraud Detector', subtitle: 'Tax Compliance', accuracy: 95.8, metric2Label: 'False Positive', metric2Value: 2.7, metric3Label: 'Detection Speed', metric3Value: '1.4s', overrideRate: 6.1, confidenceThreshold: 0.91, status: 'active', lastmileAgentId: 'vat-fraud-detector' },
  { name: 'Treasury Optimizer', subtitle: 'Cash Management', accuracy: 86.3, metric2Label: 'Liquidity Error', metric2Value: 5.8, metric3Label: 'Optimization Cycle', metric3Value: '4 hrs', overrideRate: 16.4, confidenceThreshold: 0.79, status: 'planned', lastmileAgentId: 'treasury-optimizer' },
];

const eeSocialAiAgents: AIAgent[] = [
  { name: 'Benefits Engine', subtitle: 'Eligibility Processing', accuracy: 95.6, metric2Label: 'Eligibility Error', metric2Value: 1.6, metric3Label: 'Decision Time', metric3Value: '1.1s', overrideRate: 5.9, confidenceThreshold: 0.92, status: 'active', lastmileAgentId: 'benefits-engine' },
  { name: 'Health Records AI', subtitle: 'Medical Data Processing', accuracy: 97.4, metric2Label: 'Record Mismatch', metric2Value: 0.9, metric3Label: 'Matching Speed', metric3Value: '0.3s', overrideRate: 3.8, confidenceThreshold: 0.95, status: 'active', lastmileAgentId: 'health-records-ai' },
  { name: 'Case AI', subtitle: 'Case Management', accuracy: 92.1, metric2Label: 'Case Misroute', metric2Value: 3.2, metric3Label: 'Assignment Time', metric3Value: '2.4s', overrideRate: 9.7, confidenceThreshold: 0.87, status: 'active', lastmileAgentId: 'case-ai' },
  { name: 'Welfare Fraud Detector', subtitle: 'Fraud Prevention', accuracy: 88.4, metric2Label: 'False Positive', metric2Value: 5.1, metric3Label: 'Scan Cycle', metric3Value: '4 hrs', overrideRate: 14.6, confidenceThreshold: 0.82, status: 'piloting', lastmileAgentId: 'welfare-fraud-detector' },
  { name: 'Social Impact Modeler', subtitle: 'Policy Impact', accuracy: 83.7, metric2Label: 'Outcome Error', metric2Value: 7.4, metric3Label: 'Model Cycle', metric3Value: '48 hrs', overrideRate: 19.2, confidenceThreshold: 0.76, status: 'planned', lastmileAgentId: 'social-impact-modeler' },
];

const eeEconomicAiAgents: AIAgent[] = [
  { name: 'Trade AI', subtitle: 'Trade Analytics', accuracy: 93.8, metric2Label: 'Trade Misclass', metric2Value: 2.3, metric3Label: 'Analysis Speed', metric3Value: '1.6s', overrideRate: 8.2, confidenceThreshold: 0.89, status: 'active', lastmileAgentId: 'trade-ai' },
  { name: 'e-Residency Bot', subtitle: 'Application Processing', accuracy: 96.1, metric2Label: 'Processing Error', metric2Value: 1.4, metric3Label: 'Decision Time', metric3Value: '2.8s', overrideRate: 5.4, confidenceThreshold: 0.92, status: 'active', lastmileAgentId: 'e-residency-bot' },
  { name: 'Registry AI', subtitle: 'Business Registration', accuracy: 94.6, metric2Label: 'Filing Error', metric2Value: 1.9, metric3Label: 'Registration Time', metric3Value: '3.4 min', overrideRate: 7.1, confidenceThreshold: 0.90, status: 'active', lastmileAgentId: 'registry-ai' },
  { name: 'FDI Analyzer', subtitle: 'Investment Analytics', accuracy: 87.2, metric2Label: 'Sector Misclass', metric2Value: 5.6, metric3Label: 'Report Cycle', metric3Value: '12 hrs', overrideRate: 15.8, confidenceThreshold: 0.80, status: 'piloting', lastmileAgentId: 'fdi-analyzer' },
  { name: 'Export Compliance AI', subtitle: 'Trade Compliance', accuracy: 91.4, metric2Label: 'Sanction Miss', metric2Value: 0.8, metric3Label: 'Screen Time', metric3Value: '0.6s', overrideRate: 10.3, confidenceThreshold: 0.86, status: 'active', lastmileAgentId: 'export-compliance-ai' },
];

const eeRiaAiAgents: AIAgent[] = [
  { name: 'Threat Hunter', subtitle: 'Cyber Threat Detection', accuracy: 97.6, metric2Label: 'Threat Miss Rate', metric2Value: 0.8, metric3Label: 'Detection Speed', metric3Value: '0.1s', overrideRate: 3.6, confidenceThreshold: 0.95, status: 'active', lastmileAgentId: 'threat-hunter' },
  { name: 'X-Road Health', subtitle: 'Service Monitoring', accuracy: 99.2, metric2Label: 'Downtime Miss', metric2Value: 0.3, metric3Label: 'Check Interval', metric3Value: '15s', overrideRate: 2.1, confidenceThreshold: 0.97, status: 'active', lastmileAgentId: 'x-road-health' },
  { name: 'Incident AI', subtitle: 'Incident Response', accuracy: 94.8, metric2Label: 'Severity Misclass', metric2Value: 2.1, metric3Label: 'Response Time', metric3Value: '4.2s', overrideRate: 6.7, confidenceThreshold: 0.91, status: 'active', lastmileAgentId: 'incident-ai' },
  { name: 'Vulnerability Scanner AI', subtitle: 'Vuln Detection', accuracy: 92.3, metric2Label: 'False Positive', metric2Value: 3.6, metric3Label: 'Scan Cycle', metric3Value: '30 min', overrideRate: 9.8, confidenceThreshold: 0.87, status: 'piloting', lastmileAgentId: 'vulnerability-scanner-ai' },
  { name: 'Digital Identity Verifier', subtitle: 'eID Validation', accuracy: 98.7, metric2Label: 'Verification Error', metric2Value: 0.4, metric3Label: 'Verify Time', metric3Value: '0.3s', overrideRate: 2.8, confidenceThreshold: 0.96, status: 'active', lastmileAgentId: 'digital-identity-verifier' },
];

// ═══════════════════════════════════════════════════════════════════════════════
// ─── Data Sources (Northwood, Pinnacle, Atlas) ─────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

const northwoodDataSources: IntegrationDataSource[] = [
  { system: 'Guidewire PolicyCenter', division: 'Policy Administration', recordsAnalyzed: '2.4M active policies', coverage: 96, status: 'Complete' },
  { system: 'Duck Creek Claims', division: 'Claims Management', recordsAnalyzed: '840,000 claims', coverage: 93, status: 'Complete' },
  { system: 'Verisk Analytics', division: 'Risk & Actuarial', recordsAnalyzed: '1.8M risk assessments', coverage: 89, status: 'Complete' },
  { system: 'Salesforce CRM', division: 'Agent & Customer', recordsAnalyzed: '620,000 customer records', coverage: 91, status: 'Complete' },
  { system: 'Internal Data Warehouse', division: 'Enterprise Analytics', recordsAnalyzed: '14.2M transactions', coverage: 84, status: 'In Progress' },
  { system: 'DocuSign CLM', division: 'Contract Management', recordsAnalyzed: '340,000 contracts', coverage: 78, status: 'In Progress' },
];

const pinnacleDataSources: IntegrationDataSource[] = [
  { system: 'Epic EHR', division: 'Clinical Operations', recordsAnalyzed: '3.2M patient records', coverage: 97, status: 'Complete' },
  { system: 'Athenahealth', division: 'Revenue Cycle', recordsAnalyzed: '1.6M billing records', coverage: 94, status: 'Complete' },
  { system: 'Quest Diagnostics', division: 'Lab & Diagnostics', recordsAnalyzed: '4.8M lab results', coverage: 91, status: 'Complete' },
  { system: 'Availity', division: 'Payer Connectivity', recordsAnalyzed: '2.1M auth requests', coverage: 88, status: 'Complete' },
  { system: 'Cerner Scheduling', division: 'Patient Access', recordsAnalyzed: '890,000 appointments', coverage: 92, status: 'Complete' },
  { system: 'Workday HCM', division: 'Workforce', recordsAnalyzed: '4,200 employees', coverage: 100, status: 'Complete' },
];

const atlasDataSources: IntegrationDataSource[] = [
  { system: 'SAP S/4HANA', division: 'Enterprise ERP', recordsAnalyzed: '18,400 production orders', coverage: 95, status: 'Complete' },
  { system: 'Siemens MES', division: 'Manufacturing Execution', recordsAnalyzed: '6.2M sensor readings', coverage: 93, status: 'Complete' },
  { system: 'Oracle SCM', division: 'Supply Chain', recordsAnalyzed: '42,000 purchase orders', coverage: 90, status: 'Complete' },
  { system: 'IBM Maximo', division: 'Asset Management', recordsAnalyzed: '8,400 equipment records', coverage: 87, status: 'In Progress' },
  { system: 'Rockwell FactoryTalk', division: 'Automation & Control', recordsAnalyzed: '24,000 PLC tags', coverage: 91, status: 'Complete' },
  { system: 'Kronos/UKG', division: 'Workforce', recordsAnalyzed: '3,600 employees', coverage: 100, status: 'Complete' },
];

// ═══════════════════════════════════════════════════════════════════════════════
// ─── Data Sources (Northbridge + Subsidiaries) ───────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

const northbridgeDataSources: IntegrationDataSource[] = [
  { system: 'SAP BPC', division: 'Corporate Finance', recordsAnalyzed: '12,400 consolidation entries', coverage: 94, status: 'Complete' },
  { system: 'Workday HCM', division: 'Corporate HR', recordsAnalyzed: '18,000 employees', coverage: 98, status: 'Complete' },
  { system: 'ServiceNow GRC', division: 'Risk & Compliance', recordsAnalyzed: '2,800 compliance records', coverage: 91, status: 'Complete' },
  { system: 'Tableau Server', division: 'Enterprise Analytics', recordsAnalyzed: '4 BU data feeds', coverage: 86, status: 'In Progress' },
  { system: 'Anaplan', division: 'Strategic Planning', recordsAnalyzed: '48 financial models', coverage: 82, status: 'In Progress' },
];

const nbAerospaceDataSources: IntegrationDataSource[] = [
  { system: 'Siemens Teamcenter', division: 'PLM & Engineering', recordsAnalyzed: '24,000 part records', coverage: 96, status: 'Complete' },
  { system: 'SAP ERP (Aerospace)', division: 'Finance & Procurement', recordsAnalyzed: '8,200 financial records', coverage: 93, status: 'Complete' },
  { system: 'IFS MRO', division: 'Maintenance & Overhaul', recordsAnalyzed: '6,400 work orders', coverage: 89, status: 'Complete' },
  { system: 'FAA ELOS Database', division: 'Certification', recordsAnalyzed: '1,200 cert records', coverage: 97, status: 'Complete' },
  { system: 'Windchill Quality', division: 'Quality Assurance', recordsAnalyzed: '3,800 NCRs', coverage: 85, status: 'In Progress' },
];

const nbEnergyDataSources: IntegrationDataSource[] = [
  { system: 'OSIsoft PI', division: 'SCADA & Telemetry', recordsAnalyzed: '86,000 sensor tags', coverage: 96, status: 'Complete' },
  { system: 'ABB SCADA', division: 'Grid Operations', recordsAnalyzed: '12,400 grid nodes', coverage: 94, status: 'Complete' },
  { system: 'SAP ERP (Energy)', division: 'Finance & Billing', recordsAnalyzed: '4.2M customer accounts', coverage: 91, status: 'Complete' },
  { system: 'GE Digital APM', division: 'Asset Performance', recordsAnalyzed: '3,200 generation assets', coverage: 88, status: 'In Progress' },
  { system: 'NERC Compliance DB', division: 'Regulatory', recordsAnalyzed: '1,800 compliance records', coverage: 95, status: 'Complete' },
];

const nbFinancialDataSources: IntegrationDataSource[] = [
  { system: 'Temenos T24', division: 'Core Banking', recordsAnalyzed: '6.8M customer accounts', coverage: 97, status: 'Complete' },
  { system: 'Refinitiv', division: 'Market Data', recordsAnalyzed: '2.4M instruments', coverage: 94, status: 'Complete' },
  { system: 'Actimize AML', division: 'Compliance & AML', recordsAnalyzed: '18.6M transactions screened', coverage: 96, status: 'Complete' },
  { system: 'Moody\'s Analytics', division: 'Credit Risk', recordsAnalyzed: '420,000 credit profiles', coverage: 91, status: 'Complete' },
  { system: 'Bloomberg Terminal Feed', division: 'Trading & Research', recordsAnalyzed: '1.2M market events/day', coverage: 88, status: 'In Progress' },
];

const nbHealthDataSources: IntegrationDataSource[] = [
  { system: 'Veeva Vault', division: 'Clinical Trials', recordsAnalyzed: '840 active trials', coverage: 96, status: 'Complete' },
  { system: 'SAP ERP (Health)', division: 'Manufacturing & Finance', recordsAnalyzed: '6,200 batch records', coverage: 93, status: 'Complete' },
  { system: 'FDA FAERS', division: 'Pharmacovigilance', recordsAnalyzed: '42,000 adverse events', coverage: 91, status: 'Complete' },
  { system: 'TrackWise QMS', division: 'Quality Management', recordsAnalyzed: '12,400 CAPA records', coverage: 89, status: 'Complete' },
  { system: 'LIMS System', division: 'Laboratory', recordsAnalyzed: '1.8M test results', coverage: 87, status: 'In Progress' },
];

// ═══════════════════════════════════════════════════════════════════════════════
// ─── Data Sources (Estonia + Subsidiaries) ───────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

const estoniaDataSources: IntegrationDataSource[] = [
  { system: 'X-Road Platform', division: 'National Data Exchange', recordsAnalyzed: '1.2B annual queries', coverage: 99, status: 'Complete' },
  { system: 'eesti.ee Portal', division: 'Citizen Services', recordsAnalyzed: '1.3M registered users', coverage: 96, status: 'Complete' },
  { system: 'Population Registry', division: 'Demographics', recordsAnalyzed: '1.34M citizen records', coverage: 100, status: 'Complete' },
  { system: 'State Budget System', division: 'Fiscal Management', recordsAnalyzed: '8,400 budget items', coverage: 92, status: 'Complete' },
  { system: 'RIHA Information System', division: 'IT Governance', recordsAnalyzed: '2,400 state IT systems', coverage: 88, status: 'In Progress' },
];

const eeFinanceDataSources: IntegrationDataSource[] = [
  { system: 'EMTA Tax System', division: 'Tax Administration', recordsAnalyzed: '680,000 taxpayers', coverage: 98, status: 'Complete' },
  { system: 'e-Customs Platform', division: 'Customs & Excise', recordsAnalyzed: '420,000 declarations', coverage: 95, status: 'Complete' },
  { system: 'State Treasury System', division: 'Treasury Management', recordsAnalyzed: '2.4M payment records', coverage: 93, status: 'Complete' },
  { system: 'Audit Trail Database', division: 'Internal Audit', recordsAnalyzed: '12,800 audit records', coverage: 89, status: 'Complete' },
  { system: 'EU Reporting Gateway', division: 'EU Compliance', recordsAnalyzed: '840 regulatory filings', coverage: 91, status: 'Complete' },
];

const eeSocialDataSources: IntegrationDataSource[] = [
  { system: 'SKAIS Social System', division: 'Benefits Administration', recordsAnalyzed: '480,000 beneficiaries', coverage: 97, status: 'Complete' },
  { system: 'Health Insurance Fund', division: 'Health Coverage', recordsAnalyzed: '1.28M insured persons', coverage: 96, status: 'Complete' },
  { system: 'Pension Registry', division: 'Pension Management', recordsAnalyzed: '620,000 pension records', coverage: 94, status: 'Complete' },
  { system: 'Case Management DB', division: 'Social Services', recordsAnalyzed: '86,000 active cases', coverage: 90, status: 'Complete' },
  { system: 'Unemployment Registry', division: 'Employment Services', recordsAnalyzed: '42,000 job seekers', coverage: 88, status: 'In Progress' },
];

const eeEconomicDataSources: IntegrationDataSource[] = [
  { system: 'Trade Registry', division: 'Business Registration', recordsAnalyzed: '240,000 companies', coverage: 99, status: 'Complete' },
  { system: 'e-Residency Platform', division: 'Digital Residency', recordsAnalyzed: '108,000 e-residents', coverage: 97, status: 'Complete' },
  { system: 'Statistics Estonia', division: 'Economic Statistics', recordsAnalyzed: '4.2M data points', coverage: 93, status: 'Complete' },
  { system: 'Investment Gateway', division: 'FDI Tracking', recordsAnalyzed: '2,400 investment records', coverage: 86, status: 'In Progress' },
  { system: 'EU Funds Portal', division: 'Structural Funds', recordsAnalyzed: '1,800 grant applications', coverage: 91, status: 'Complete' },
];

const eeRiaDataSources: IntegrationDataSource[] = [
  { system: 'X-Road Security Layer', division: 'Infrastructure Security', recordsAnalyzed: '48M daily auth events', coverage: 99, status: 'Complete' },
  { system: 'CERT-EE Threat Feed', division: 'Cyber Threat Intel', recordsAnalyzed: '2.4M threat indicators', coverage: 96, status: 'Complete' },
  { system: 'eID Infrastructure', division: 'Digital Identity', recordsAnalyzed: '1.34M active certificates', coverage: 98, status: 'Complete' },
  { system: 'State Network Monitor', division: 'Network Operations', recordsAnalyzed: '12,000 network nodes', coverage: 94, status: 'Complete' },
  { system: 'Incident Response DB', division: 'CSIRT Operations', recordsAnalyzed: '6,800 incidents/year', coverage: 91, status: 'Complete' },
];

// ═══════════════════════════════════════════════════════════════════════════════
// ─── Vendor Health (Northwood, Pinnacle, Atlas) ────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

const northwoodVendorHealth: IntegrationVendorHealth[] = [
  { name: 'Guidewire PolicyCenter', status: 'green', uptime: 99.8, latency: 34, lastChecked: '2026-03-27T08:14:00Z' },
  { name: 'Duck Creek Claims', status: 'green', uptime: 99.5, latency: 52, lastChecked: '2026-03-27T08:12:00Z' },
  { name: 'Verisk Analytics', status: 'green', uptime: 99.3, latency: 78, lastChecked: '2026-03-27T08:10:00Z' },
  { name: 'Salesforce CRM', status: 'green', uptime: 99.9, latency: 28, lastChecked: '2026-03-27T08:08:00Z' },
  { name: 'Internal Data Warehouse', status: 'yellow', uptime: 97.6, latency: 246, lastChecked: '2026-03-27T08:06:00Z', note: 'ETL pipeline delays during nightly batch processing' },
  { name: 'DocuSign CLM', status: 'green', uptime: 99.1, latency: 64, lastChecked: '2026-03-27T08:04:00Z' },
];

const pinnacleVendorHealth: IntegrationVendorHealth[] = [
  { name: 'Epic EHR', status: 'green', uptime: 99.9, latency: 22, lastChecked: '2026-03-27T08:14:00Z' },
  { name: 'Athenahealth', status: 'green', uptime: 99.6, latency: 46, lastChecked: '2026-03-27T08:12:00Z' },
  { name: 'Quest Diagnostics', status: 'yellow', uptime: 98.2, latency: 184, lastChecked: '2026-03-27T08:10:00Z', note: 'Intermittent HL7 FHIR endpoint latency spikes' },
  { name: 'Availity', status: 'green', uptime: 99.4, latency: 56, lastChecked: '2026-03-27T08:08:00Z' },
  { name: 'Cerner Scheduling', status: 'green', uptime: 99.2, latency: 68, lastChecked: '2026-03-27T08:06:00Z' },
  { name: 'Workday HCM', status: 'green', uptime: 99.7, latency: 32, lastChecked: '2026-03-27T08:04:00Z' },
];

const atlasVendorHealth: IntegrationVendorHealth[] = [
  { name: 'SAP S/4HANA', status: 'green', uptime: 99.7, latency: 44, lastChecked: '2026-03-27T08:14:00Z' },
  { name: 'Siemens MES', status: 'green', uptime: 99.4, latency: 36, lastChecked: '2026-03-27T08:12:00Z' },
  { name: 'Oracle SCM', status: 'yellow', uptime: 98.1, latency: 198, lastChecked: '2026-03-27T08:10:00Z', note: 'Elevated response times during PO batch processing' },
  { name: 'IBM Maximo', status: 'yellow', uptime: 97.4, latency: 264, lastChecked: '2026-03-27T08:08:00Z', note: 'Legacy SOAP API migration in progress' },
  { name: 'Rockwell FactoryTalk', status: 'green', uptime: 99.6, latency: 18, lastChecked: '2026-03-27T08:06:00Z' },
  { name: 'Kronos/UKG (Atlas)', status: 'green', uptime: 99.3, latency: 42, lastChecked: '2026-03-27T08:04:00Z' },
];

// ═══════════════════════════════════════════════════════════════════════════════
// ─── Vendor Health (Northbridge + Subsidiaries) ──────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

const northbridgeVendorHealth: IntegrationVendorHealth[] = [
  { name: 'SAP BPC', status: 'green', uptime: 99.6, latency: 54, lastChecked: '2026-03-27T08:14:00Z' },
  { name: 'Workday HCM', status: 'green', uptime: 99.8, latency: 32, lastChecked: '2026-03-27T08:12:00Z' },
  { name: 'ServiceNow GRC', status: 'green', uptime: 99.4, latency: 48, lastChecked: '2026-03-27T08:10:00Z' },
  { name: 'Tableau Server', status: 'yellow', uptime: 97.8, latency: 218, lastChecked: '2026-03-27T08:08:00Z', note: 'Cross-BU dashboard refresh slowdowns during peak hours' },
  { name: 'Anaplan', status: 'green', uptime: 99.1, latency: 72, lastChecked: '2026-03-27T08:06:00Z' },
];

const nbAerospaceVendorHealth: IntegrationVendorHealth[] = [
  { name: 'Siemens Teamcenter', status: 'green', uptime: 99.7, latency: 42, lastChecked: '2026-03-27T08:14:00Z' },
  { name: 'SAP ERP (Aerospace)', status: 'green', uptime: 99.5, latency: 56, lastChecked: '2026-03-27T08:12:00Z' },
  { name: 'IFS MRO', status: 'green', uptime: 99.2, latency: 68, lastChecked: '2026-03-27T08:10:00Z' },
  { name: 'FAA ELOS Database', status: 'green', uptime: 99.8, latency: 24, lastChecked: '2026-03-27T08:08:00Z' },
  { name: 'Windchill Quality', status: 'yellow', uptime: 97.6, latency: 234, lastChecked: '2026-03-27T08:06:00Z', note: 'NCR sync delays with Teamcenter PLM' },
];

const nbEnergyVendorHealth: IntegrationVendorHealth[] = [
  { name: 'OSIsoft PI', status: 'green', uptime: 99.9, latency: 14, lastChecked: '2026-03-27T08:14:00Z' },
  { name: 'ABB SCADA', status: 'green', uptime: 99.6, latency: 22, lastChecked: '2026-03-27T08:12:00Z' },
  { name: 'SAP ERP (Energy)', status: 'green', uptime: 99.4, latency: 58, lastChecked: '2026-03-27T08:10:00Z' },
  { name: 'GE Digital APM', status: 'yellow', uptime: 97.9, latency: 196, lastChecked: '2026-03-27T08:08:00Z', note: 'Asset model sync lag during fleet-wide recalculation' },
  { name: 'NERC Compliance DB', status: 'green', uptime: 99.3, latency: 46, lastChecked: '2026-03-27T08:06:00Z' },
];

const nbFinancialVendorHealth: IntegrationVendorHealth[] = [
  { name: 'Temenos T24', status: 'green', uptime: 99.8, latency: 18, lastChecked: '2026-03-27T08:14:00Z' },
  { name: 'Refinitiv', status: 'green', uptime: 99.6, latency: 12, lastChecked: '2026-03-27T08:12:00Z' },
  { name: 'Actimize AML', status: 'green', uptime: 99.7, latency: 28, lastChecked: '2026-03-27T08:10:00Z' },
  { name: 'Moody\'s Analytics', status: 'green', uptime: 99.3, latency: 64, lastChecked: '2026-03-27T08:08:00Z' },
  { name: 'Bloomberg Terminal Feed', status: 'yellow', uptime: 98.4, latency: 148, lastChecked: '2026-03-27T08:06:00Z', note: 'Market data feed latency during high-volatility sessions' },
];

const nbHealthVendorHealth: IntegrationVendorHealth[] = [
  { name: 'Veeva Vault', status: 'green', uptime: 99.7, latency: 38, lastChecked: '2026-03-27T08:14:00Z' },
  { name: 'SAP ERP (Health)', status: 'green', uptime: 99.5, latency: 52, lastChecked: '2026-03-27T08:12:00Z' },
  { name: 'FDA FAERS', status: 'green', uptime: 99.1, latency: 86, lastChecked: '2026-03-27T08:10:00Z' },
  { name: 'TrackWise QMS', status: 'yellow', uptime: 97.8, latency: 212, lastChecked: '2026-03-27T08:08:00Z', note: 'CAPA workflow sync delays with Veeva during batch releases' },
  { name: 'LIMS System', status: 'yellow', uptime: 97.2, latency: 278, lastChecked: '2026-03-27T08:06:00Z', note: 'Legacy LIMS API rate limiting on high-throughput assays' },
];

// ═══════════════════════════════════════════════════════════════════════════════
// ─── Vendor Health (Estonia + Subsidiaries) ──────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

const estoniaVendorHealth: IntegrationVendorHealth[] = [
  { name: 'X-Road Platform', status: 'green', uptime: 99.97, latency: 8, lastChecked: '2026-03-27T08:14:00Z' },
  { name: 'eesti.ee Portal', status: 'green', uptime: 99.8, latency: 24, lastChecked: '2026-03-27T08:12:00Z' },
  { name: 'Population Registry', status: 'green', uptime: 99.9, latency: 16, lastChecked: '2026-03-27T08:10:00Z' },
  { name: 'State Budget System', status: 'green', uptime: 99.4, latency: 62, lastChecked: '2026-03-27T08:08:00Z' },
  { name: 'RIHA Information System', status: 'yellow', uptime: 98.1, latency: 176, lastChecked: '2026-03-27T08:06:00Z', note: 'IT asset catalog sync delays during quarterly audits' },
];

const eeFinanceVendorHealth: IntegrationVendorHealth[] = [
  { name: 'EMTA Tax System', status: 'green', uptime: 99.9, latency: 18, lastChecked: '2026-03-27T08:14:00Z' },
  { name: 'e-Customs Platform', status: 'green', uptime: 99.6, latency: 42, lastChecked: '2026-03-27T08:12:00Z' },
  { name: 'State Treasury System', status: 'green', uptime: 99.7, latency: 28, lastChecked: '2026-03-27T08:10:00Z' },
  { name: 'Audit Trail Database', status: 'green', uptime: 99.2, latency: 54, lastChecked: '2026-03-27T08:08:00Z' },
  { name: 'EU Reporting Gateway', status: 'yellow', uptime: 98.4, latency: 164, lastChecked: '2026-03-27T08:06:00Z', note: 'EU gateway latency during cross-border reporting deadlines' },
];

const eeSocialVendorHealth: IntegrationVendorHealth[] = [
  { name: 'SKAIS Social System', status: 'green', uptime: 99.7, latency: 32, lastChecked: '2026-03-27T08:14:00Z' },
  { name: 'Health Insurance Fund', status: 'green', uptime: 99.8, latency: 22, lastChecked: '2026-03-27T08:12:00Z' },
  { name: 'Pension Registry', status: 'green', uptime: 99.5, latency: 38, lastChecked: '2026-03-27T08:10:00Z' },
  { name: 'Case Management DB', status: 'yellow', uptime: 97.9, latency: 198, lastChecked: '2026-03-27T08:08:00Z', note: 'Case assignment queue backlog during benefit enrollment periods' },
  { name: 'Unemployment Registry', status: 'yellow', uptime: 98.1, latency: 146, lastChecked: '2026-03-27T08:06:00Z', note: 'Job matching API response times elevated during peak posting hours' },
];

const eeEconomicVendorHealth: IntegrationVendorHealth[] = [
  { name: 'Trade Registry', status: 'green', uptime: 99.9, latency: 14, lastChecked: '2026-03-27T08:14:00Z' },
  { name: 'e-Residency Platform', status: 'green', uptime: 99.7, latency: 28, lastChecked: '2026-03-27T08:12:00Z' },
  { name: 'Statistics Estonia', status: 'green', uptime: 99.4, latency: 56, lastChecked: '2026-03-27T08:10:00Z' },
  { name: 'Investment Gateway', status: 'yellow', uptime: 97.6, latency: 224, lastChecked: '2026-03-27T08:08:00Z', note: 'FDI data aggregation delays from partner country feeds' },
  { name: 'EU Funds Portal', status: 'green', uptime: 99.2, latency: 68, lastChecked: '2026-03-27T08:06:00Z' },
];

const eeRiaVendorHealth: IntegrationVendorHealth[] = [
  { name: 'X-Road Security Layer', status: 'green', uptime: 99.99, latency: 4, lastChecked: '2026-03-27T08:14:00Z' },
  { name: 'CERT-EE Threat Feed', status: 'green', uptime: 99.8, latency: 12, lastChecked: '2026-03-27T08:12:00Z' },
  { name: 'eID Infrastructure', status: 'green', uptime: 99.95, latency: 8, lastChecked: '2026-03-27T08:10:00Z' },
  { name: 'State Network Monitor', status: 'green', uptime: 99.6, latency: 18, lastChecked: '2026-03-27T08:08:00Z' },
  { name: 'Incident Response DB', status: 'green', uptime: 99.4, latency: 34, lastChecked: '2026-03-27T08:06:00Z' },
];

// ═══════════════════════════════════════════════════════════════════════════════
// ─── Failure Modes (Northwood, Pinnacle, Atlas) ────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

const northwoodFailureModes: IntegrationFailureMode[] = [
  { vendor: 'Guidewire PolicyCenter', scenario: 'Policy batch renewal job exceeds processing window during peak season', recovery: 'Parallel batch partitioning with priority queue for expiring policies', status: 'Passing' },
  { vendor: 'Duck Creek Claims', scenario: 'Claims intake API overwhelmed during catastrophe event surge', recovery: 'Auto-scaling claims queue with overflow to async processing pipeline', status: 'Needs Attention' },
  { vendor: 'Verisk Analytics', scenario: 'Risk model API timeout on complex multi-peril property assessments', recovery: 'Cached risk scores with background refresh and stale-data indicator', status: 'Passing' },
  { vendor: 'Salesforce CRM', scenario: 'CRM sync failure during Salesforce maintenance windows', recovery: 'Bidirectional change buffer with automated reconciliation post-maintenance', status: 'Passing' },
  { vendor: 'Internal Data Warehouse', scenario: 'ETL pipeline failure on schema changes from upstream policy systems', recovery: 'Schema evolution detection with auto-migration and dead-letter queue for failures', status: 'Needs Attention' },
];

const pinnacleFailureModes: IntegrationFailureMode[] = [
  { vendor: 'Epic EHR', scenario: 'HL7 FHIR API rate limiting during mass patient record migration', recovery: 'Adaptive rate throttling with exponential backoff and batch segmentation', status: 'Passing' },
  { vendor: 'Athenahealth', scenario: 'Billing code sync failure between Epic and Athenahealth during coding updates', recovery: 'Code crosswalk validation layer with automated discrepancy alerts', status: 'Passing' },
  { vendor: 'Quest Diagnostics', scenario: 'Lab result delivery delay due to HL7 message queue backlog', recovery: 'Priority queue for critical results with STAT flag bypass and SMS alerts', status: 'Needs Attention' },
  { vendor: 'Availity', scenario: 'Prior auth submission timeout during payer system maintenance', recovery: 'Auth request queue with retry logic and manual override workflow for urgent cases', status: 'Passing' },
  { vendor: 'Cerner Scheduling', scenario: 'Appointment slot sync conflict between Epic and Cerner calendars', recovery: 'Real-time slot locking with conflict detection and automated rebooking', status: 'Needs Attention' },
];

const atlasFailureModes: IntegrationFailureMode[] = [
  { vendor: 'SAP S/4HANA', scenario: 'Production order sync failure during MRP run with 10K+ items', recovery: 'Incremental MRP sync with chunked processing and rollback capability', status: 'Passing' },
  { vendor: 'Siemens MES', scenario: 'Real-time sensor data flood during multi-line startup sequence', recovery: 'Adaptive sampling with edge buffering and priority tag forwarding', status: 'Passing' },
  { vendor: 'Oracle SCM', scenario: 'Purchase order approval workflow timeout on complex multi-level BOM items', recovery: 'Parallel approval routing with auto-escalation and timeout override', status: 'Needs Attention' },
  { vendor: 'IBM Maximo', scenario: 'Asset hierarchy sync failure between Maximo and SAP Plant Maintenance', recovery: 'Bidirectional asset reconciliation with conflict resolution rules engine', status: 'Needs Attention' },
  { vendor: 'Rockwell FactoryTalk', scenario: 'PLC tag polling failure during firmware update window', recovery: 'Redundant OPC-UA connection with automatic failover to backup controller', status: 'Passing' },
];

// ═══════════════════════════════════════════════════════════════════════════════
// ─── Failure Modes (Northbridge + Subsidiaries) ──────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

const northbridgeFailureModes: IntegrationFailureMode[] = [
  { vendor: 'SAP BPC', scenario: 'Cross-subsidiary consolidation timeout during quarterly close', recovery: 'Staged consolidation with parallel BU processing and incremental rollup', status: 'Passing' },
  { vendor: 'Workday HCM', scenario: 'Employee data sync failure across 4 BU instances during reorganization', recovery: 'Org change event queue with sequential BU propagation and rollback', status: 'Passing' },
  { vendor: 'ServiceNow GRC', scenario: 'Compliance scan timeout on cross-BU policy aggregation', recovery: 'Distributed scan with per-BU caching and incremental aggregation', status: 'Needs Attention' },
  { vendor: 'Tableau Server', scenario: 'Dashboard refresh failure on large cross-BU dataset joins', recovery: 'Pre-materialized cross-BU views with incremental refresh scheduling', status: 'Needs Attention' },
];

const nbAerospaceFailureModes: IntegrationFailureMode[] = [
  { vendor: 'Siemens Teamcenter', scenario: 'PLM data sync failure during large assembly release with 5K+ parts', recovery: 'Chunked release propagation with dependency-aware ordering', status: 'Passing' },
  { vendor: 'IFS MRO', scenario: 'Work order cascade failure when aircraft returns early from service', recovery: 'Dynamic work order resequencing with resource reallocation engine', status: 'Needs Attention' },
  { vendor: 'FAA ELOS Database', scenario: 'Certification submission rejected due to ELOS format version mismatch', recovery: 'Format version detection with auto-transform and pre-submission validation', status: 'Passing' },
  { vendor: 'Windchill Quality', scenario: 'NCR data sync lag between quality and PLM during audit periods', recovery: 'Priority sync queue for open NCRs with audit-mode acceleration', status: 'Needs Attention' },
];

const nbEnergyFailureModes: IntegrationFailureMode[] = [
  { vendor: 'OSIsoft PI', scenario: 'Historian data overflow during grid instability cascading event', recovery: 'Adaptive compression with priority tag buffering and overflow archive', status: 'Passing' },
  { vendor: 'ABB SCADA', scenario: 'SCADA communication loss with remote substations during storm events', recovery: 'Store-and-forward at RTU level with automatic gap-fill on reconnect', status: 'Passing' },
  { vendor: 'GE Digital APM', scenario: 'Asset model recalculation timeout on fleet-wide degradation update', recovery: 'Distributed recalculation with priority queuing for critical generation assets', status: 'Needs Attention' },
  { vendor: 'NERC Compliance DB', scenario: 'CIP compliance evidence upload failure during audit preparation', recovery: 'Chunked upload with resume capability and pre-validation checks', status: 'Passing' },
];

const nbFinancialFailureModes: IntegrationFailureMode[] = [
  { vendor: 'Temenos T24', scenario: 'Core banking batch EOD processing failure during high-volume day', recovery: 'Checkpoint-based batch resume with parallel account processing', status: 'Passing' },
  { vendor: 'Refinitiv', scenario: 'Market data feed disconnect during trading hours', recovery: 'Redundant feed with automatic failover and gap-fill from secondary source', status: 'Passing' },
  { vendor: 'Actimize AML', scenario: 'AML scan backlog during month-end transaction surge', recovery: 'Elastic scan infrastructure with priority queuing for high-risk transactions', status: 'Needs Attention' },
  { vendor: 'Moody\'s Analytics', scenario: 'Credit model API timeout on bulk portfolio reassessment', recovery: 'Batched reassessment with stale-score tolerance and priority customer refresh', status: 'Passing' },
  { vendor: 'Bloomberg Terminal Feed', scenario: 'Data feed corruption during market volatility event', recovery: 'Feed integrity validation with automatic switchover to backup feed', status: 'Passing' },
];

const nbHealthFailureModes: IntegrationFailureMode[] = [
  { vendor: 'Veeva Vault', scenario: 'Clinical document sync failure during multi-site trial data lock', recovery: 'Document-level locking with staged sync and conflict resolution workflow', status: 'Passing' },
  { vendor: 'FDA FAERS', scenario: 'Adverse event submission rejected due to MedDRA version mismatch', recovery: 'MedDRA version detection with auto-coding to current terminology', status: 'Needs Attention' },
  { vendor: 'TrackWise QMS', scenario: 'CAPA escalation chain failure during batch release hold', recovery: 'Redundant notification channel with SMS fallback and auto-escalation timer', status: 'Passing' },
  { vendor: 'LIMS System', scenario: 'Test result batch upload timeout on high-throughput assay data', recovery: 'Chunked upload with checksum validation and partial-batch acceptance', status: 'Needs Attention' },
];

// ═══════════════════════════════════════════════════════════════════════════════
// ─── Failure Modes (Estonia + Subsidiaries) ──────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

const estoniaFailureModes: IntegrationFailureMode[] = [
  { vendor: 'X-Road Platform', scenario: 'X-Road message broker overload during cross-ministry data exchange peak', recovery: 'Auto-scaling message brokers with service-level priority queuing', status: 'Passing' },
  { vendor: 'eesti.ee Portal', scenario: 'Citizen portal session overflow during tax filing deadline', recovery: 'Elastic session management with queue-based access control', status: 'Needs Attention' },
  { vendor: 'Population Registry', scenario: 'Registry sync failure during census data integration update', recovery: 'Incremental sync with conflict detection and manual review queue', status: 'Passing' },
  { vendor: 'RIHA Information System', scenario: 'IT system catalog update failure during quarterly compliance audit', recovery: 'Staged catalog refresh with rollback capability and audit-mode freeze', status: 'Passing' },
];

const eeFinanceFailureModes: IntegrationFailureMode[] = [
  { vendor: 'EMTA Tax System', scenario: 'Tax filing system overload during quarterly declaration deadline', recovery: 'Queue-based filing with priority for approaching-deadline submissions', status: 'Passing' },
  { vendor: 'e-Customs Platform', scenario: 'Customs declaration processing failure on complex multi-commodity shipments', recovery: 'Declaration segmentation with per-commodity validation and partial acceptance', status: 'Passing' },
  { vendor: 'State Treasury System', scenario: 'Payment batch processing timeout during government payroll cycle', recovery: 'Parallel payment processing with priority queuing for salary disbursements', status: 'Needs Attention' },
  { vendor: 'EU Reporting Gateway', scenario: 'EU reporting submission failure due to schema version incompatibility', recovery: 'Schema version detection with auto-transform and pre-submission validation', status: 'Passing' },
];

const eeSocialFailureModes: IntegrationFailureMode[] = [
  { vendor: 'SKAIS Social System', scenario: 'Benefits recalculation timeout during annual indexation update', recovery: 'Batched recalculation with priority for pension payments and staged rollout', status: 'Passing' },
  { vendor: 'Health Insurance Fund', scenario: 'Claims processing backlog during flu season surge', recovery: 'Elastic claims processing with auto-adjudication for routine claims', status: 'Needs Attention' },
  { vendor: 'Case Management DB', scenario: 'Case assignment failure during social worker caseload rebalancing', recovery: 'Algorithmic load balancing with manual override and rollback capability', status: 'Passing' },
  { vendor: 'Unemployment Registry', scenario: 'Job matching engine timeout on large employer batch posting', recovery: 'Async matching with incremental result delivery and employer notification', status: 'Needs Attention' },
];

const eeEconomicFailureModes: IntegrationFailureMode[] = [
  { vendor: 'Trade Registry', scenario: 'Company registration queue backlog during e-Residency application surge', recovery: 'Priority queue separation for domestic vs e-Residency registrations', status: 'Passing' },
  { vendor: 'e-Residency Platform', scenario: 'Identity verification timeout with partner country biometric systems', recovery: 'Async verification with status polling and applicant notification workflow', status: 'Needs Attention' },
  { vendor: 'Statistics Estonia', scenario: 'Data pipeline failure during cross-ministry statistical aggregation', recovery: 'Incremental aggregation with source-level caching and gap detection', status: 'Passing' },
  { vendor: 'Investment Gateway', scenario: 'FDI tracking sync failure with international investment databases', recovery: 'Retry queue with partner-specific adapters and manual reconciliation fallback', status: 'Needs Attention' },
];

const eeRiaFailureModes: IntegrationFailureMode[] = [
  { vendor: 'X-Road Security Layer', scenario: 'Certificate chain validation failure during mass certificate rotation', recovery: 'Staged rotation with parallel old/new certificate acceptance window', status: 'Passing' },
  { vendor: 'CERT-EE Threat Feed', scenario: 'Threat intelligence feed overload during coordinated cyber attack', recovery: 'Priority threat classification with critical-only mode and bulk processing queue', status: 'Passing' },
  { vendor: 'eID Infrastructure', scenario: 'Digital signature validation bottleneck during election period', recovery: 'Distributed validation cluster with auto-scaling and cached certificate chains', status: 'Needs Attention' },
  { vendor: 'State Network Monitor', scenario: 'Monitoring probe failure cascade across government network segments', recovery: 'Redundant probe deployment with automatic failover and gap detection', status: 'Passing' },
  { vendor: 'Incident Response DB', scenario: 'Incident correlation engine overload during multi-vector attack', recovery: 'Tiered correlation with critical-first processing and analyst escalation queue', status: 'Passing' },
];

// ═══════════════════════════════════════════════════════════════════════════════
// ─── Methodology Steps (Northwood, Pinnacle, Atlas) ───────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

const northwoodMethodologySteps: IntegrationMethodologyStep[] = [
  { number: 1, title: 'Policy Portfolio Discovery', description: 'Inventory 2.4M active policies across all lines of business — property, casualty, specialty, and excess — mapping data flows between Guidewire, Duck Creek, and Verisk systems.' },
  { number: 2, title: 'Claims Workflow Mapping', description: 'Map 24 critical claims workflows from FNOL through settlement, identifying manual bottlenecks in triage, adjudication, and subrogation processes.' },
  { number: 3, title: 'InsurTech Stack Audit', description: 'Assess Guidewire PolicyCenter, Duck Creek Claims, Verisk Analytics, Salesforce CRM, and internal data warehouse for AI integration readiness and API maturity.' },
  { number: 4, title: 'Underwriting ROI Modeling', description: 'Model AI-driven savings across claims triage automation, fraud detection, underwriting efficiency, and policy renewal retention for Northwood\'s $4.2B premium portfolio.' },
];

const pinnacleMethodologySteps: IntegrationMethodologyStep[] = [
  { number: 1, title: 'Clinical Data Inventory', description: 'Catalog 3.2M patient records across Epic EHR, 4.8M lab results from Quest Diagnostics, and 2.1M prior auth requests — mapping clinical data flows and interoperability gaps.' },
  { number: 2, title: 'Patient Journey Mapping', description: 'Map 18 critical patient workflows from scheduling through discharge, identifying automation opportunities in clinical documentation, billing, and prior authorization.' },
  { number: 3, title: 'Health IT Stack Audit', description: 'Assess Epic EHR, Athenahealth, Quest Diagnostics, Availity, and Cerner Scheduling for FHIR compliance, AI readiness, and clinical decision support integration.' },
  { number: 4, title: 'Clinical ROI Modeling', description: 'Model AI-driven improvements in clinical NLP documentation, billing code optimization, prior auth automation, and scheduling efficiency for Pinnacle\'s 4,200-employee health system.' },
];

const atlasMethodologySteps: IntegrationMethodologyStep[] = [
  { number: 1, title: 'Production Asset Inventory', description: 'Catalog 8,400 equipment records, 24,000 PLC tags, and 6.2M sensor data points across Atlas Manufacturing\'s production lines and supply chain operations.' },
  { number: 2, title: 'Manufacturing Workflow Mapping', description: 'Map 32 critical production workflows from raw material receipt through finished goods shipment, identifying quality control bottlenecks and predictive maintenance opportunities.' },
  { number: 3, title: 'Industrial Tech Stack Audit', description: 'Assess SAP S/4HANA, Siemens MES, Oracle SCM, IBM Maximo, and Rockwell FactoryTalk for real-time analytics, digital twin, and predictive maintenance readiness.' },
  { number: 4, title: 'Production ROI Modeling', description: 'Model AI-driven savings in production optimization, quality defect reduction, supply chain forecasting, and predictive maintenance for Atlas\'s 3,600-employee manufacturing operation.' },
];

// ═══════════════════════════════════════════════════════════════════════════════
// ─── Methodology Steps (Northbridge + Subsidiaries) ─────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

const northbridgeMethodologySteps: IntegrationMethodologyStep[] = [
  { number: 1, title: 'Cross-BU Asset Discovery', description: 'Inventory technology assets, data platforms, and AI capabilities across all 4 business units — Aerospace, Energy, Financial Services, and Health Sciences — identifying consolidation and synergy opportunities.' },
  { number: 2, title: 'Conglomerate Workflow Mapping', description: 'Map 14 critical cross-BU workflows including capital allocation, compliance aggregation, shared services, and strategic planning processes.' },
  { number: 3, title: 'Enterprise Tech Stack Audit', description: 'Assess SAP BPC, Workday HCM, ServiceNow GRC, Tableau, and Anaplan for cross-BU integration maturity, data quality, and AI-driven strategic analytics readiness.' },
  { number: 4, title: 'Portfolio ROI Modeling', description: 'Model AI-driven value across strategic capital allocation, cross-BU compliance automation, and synergy detection for Northbridge\'s $28B diversified portfolio.' },
];

const nbAerospaceMethodologySteps: IntegrationMethodologyStep[] = [
  { number: 1, title: 'Fleet & Parts Inventory', description: 'Catalog 24,000 part records in Teamcenter PLM, 6,400 MRO work orders, and FAA certification records across NB Aerospace\'s defense and commercial aviation divisions.' },
  { number: 2, title: 'MRO Workflow Mapping', description: 'Map 16 critical MRO workflows from aircraft induction through return-to-service, identifying AI augmentation points in parts tracking, certification, and turnaround optimization.' },
  { number: 3, title: 'Aviation Tech Stack Audit', description: 'Assess Siemens Teamcenter, IFS MRO, FAA ELOS Database, and Windchill Quality for AS9100 compliance, digital thread readiness, and predictive maintenance integration.' },
  { number: 4, title: 'Aerospace ROI Modeling', description: 'Model AI-driven savings in MRO turnaround reduction, parts availability optimization, and FAA certification acceleration for NB Aerospace\'s fleet operations.' },
];

const nbEnergyMethodologySteps: IntegrationMethodologyStep[] = [
  { number: 1, title: 'Grid Infrastructure Discovery', description: 'Inventory 86,000 SCADA sensor tags, 12,400 grid nodes, and 3,200 generation assets across NB Energy\'s transmission, distribution, and renewable portfolio.' },
  { number: 2, title: 'Energy Operations Mapping', description: 'Map 12 critical grid operations workflows from demand forecasting through outage restoration, identifying AI opportunities in grid stability and renewable dispatch.' },
  { number: 3, title: 'Utility Tech Stack Audit', description: 'Assess OSIsoft PI, ABB SCADA, GE Digital APM, and NERC Compliance DB for real-time grid analytics, predictive maintenance, and regulatory automation readiness.' },
  { number: 4, title: 'Grid ROI Modeling', description: 'Model AI-driven savings in outage prediction, renewable dispatch optimization, and NERC/FERC compliance automation for NB Energy\'s regulated utility operations.' },
];

const nbFinancialMethodologySteps: IntegrationMethodologyStep[] = [
  { number: 1, title: 'Financial Data Discovery', description: 'Catalog 6.8M customer accounts, 18.6M screened transactions, and 420,000 credit profiles across NB Financial Services\' banking, trading, and compliance operations.' },
  { number: 2, title: 'Banking Workflow Mapping', description: 'Map 20 critical financial workflows from customer onboarding through trade settlement, identifying automation opportunities in KYC, AML screening, and credit risk assessment.' },
  { number: 3, title: 'FinTech Stack Audit', description: 'Assess Temenos T24, Refinitiv, Actimize AML, Moody\'s Analytics, and Bloomberg for real-time transaction monitoring, AI-driven risk modeling, and regulatory compliance readiness.' },
  { number: 4, title: 'Financial ROI Modeling', description: 'Model AI-driven improvements in KYC processing speed, AML false-positive reduction, and credit risk prediction accuracy for NB Financial Services\' regulated banking operations.' },
];

const nbHealthMethodologySteps: IntegrationMethodologyStep[] = [
  { number: 1, title: 'Clinical & Manufacturing Discovery', description: 'Catalog 840 active clinical trials in Veeva Vault, 12,400 CAPA records, and 1.8M lab test results across NB Health Sciences\' pharma R&D and manufacturing divisions.' },
  { number: 2, title: 'Pharma Workflow Mapping', description: 'Map 14 critical workflows from drug discovery through commercial manufacturing, identifying AI augmentation in trial analysis, safety monitoring, and quality inspection.' },
  { number: 3, title: 'Life Sciences Tech Audit', description: 'Assess Veeva Vault, FDA FAERS, TrackWise QMS, and LIMS for GxP compliance, clinical data analytics, and AI-driven pharmacovigilance readiness.' },
  { number: 4, title: 'Health Sciences ROI Modeling', description: 'Model AI-driven savings in clinical trial acceleration, adverse event detection speed, and manufacturing quality improvement for NB Health Sciences\' regulated operations.' },
];

// ═══════════════════════════════════════════════════════════════════════════════
// ─── Methodology Steps (Estonia + Subsidiaries) ─────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

const estoniaMethodologySteps: IntegrationMethodologyStep[] = [
  { number: 1, title: 'Digital Government Discovery', description: 'Inventory 2,400 state IT systems in RIHA, X-Road service catalog, and citizen-facing digital services — mapping data flows across ministries and the 1.2B annual X-Road queries.' },
  { number: 2, title: 'Governance Workflow Mapping', description: 'Map 18 critical cross-ministry workflows from policy drafting through citizen service delivery, identifying AI augmentation points in compliance monitoring and budget planning.' },
  { number: 3, title: 'e-Government Tech Audit', description: 'Assess X-Road platform, eesti.ee portal, Population Registry, and RIHA for AI integration readiness, interoperability maturity, and data quality across the national digital infrastructure.' },
  { number: 4, title: 'National ROI Modeling', description: 'Model AI-driven improvements in citizen service efficiency, cross-ministry data utilization, and governance automation for Estonia\'s 1.34M-citizen digital society.' },
];

const eeFinanceMethodologySteps: IntegrationMethodologyStep[] = [
  { number: 1, title: 'Tax & Revenue Discovery', description: 'Catalog 680,000 taxpayer records, 420,000 customs declarations, and 2.4M treasury payments across the Ministry of Finance\'s tax administration and fiscal management systems.' },
  { number: 2, title: 'Fiscal Workflow Mapping', description: 'Map 12 critical fiscal workflows from tax filing through treasury disbursement, identifying automation opportunities in audit selection, VAT compliance, and EU reporting.' },
  { number: 3, title: 'Finance Tech Stack Audit', description: 'Assess EMTA Tax System, e-Customs Platform, State Treasury, and EU Reporting Gateway for AI-driven tax compliance, fraud detection, and fiscal forecasting readiness.' },
  { number: 4, title: 'Fiscal ROI Modeling', description: 'Model AI-driven improvements in tax processing efficiency, VAT fraud detection, audit targeting accuracy, and treasury management optimization for Estonia\'s fiscal operations.' },
];

const eeSocialMethodologySteps: IntegrationMethodologyStep[] = [
  { number: 1, title: 'Social Services Discovery', description: 'Catalog 480,000 benefit recipients, 1.28M health insurance records, and 86,000 active social cases across the Ministry of Social Affairs\' welfare and healthcare systems.' },
  { number: 2, title: 'Welfare Workflow Mapping', description: 'Map 14 critical social service workflows from benefit application through case resolution, identifying automation in eligibility determination, health records matching, and case assignment.' },
  { number: 3, title: 'Social Tech Stack Audit', description: 'Assess SKAIS, Health Insurance Fund, Pension Registry, and Case Management DB for AI-driven benefits processing, fraud prevention, and predictive social service readiness.' },
  { number: 4, title: 'Social ROI Modeling', description: 'Model AI-driven improvements in benefit processing speed, health record interoperability, case management efficiency, and welfare fraud detection for Estonia\'s social safety net.' },
];

const eeEconomicMethodologySteps: IntegrationMethodologyStep[] = [
  { number: 1, title: 'Economic Data Discovery', description: 'Catalog 240,000 registered companies, 108,000 e-Residents, and 4.2M statistical data points across the Ministry of Economic Affairs\' business and trade platforms.' },
  { number: 2, title: 'Economic Workflow Mapping', description: 'Map 10 critical economic workflows from business registration through FDI tracking, identifying AI opportunities in trade analytics, e-Residency processing, and export compliance.' },
  { number: 3, title: 'Economic Tech Stack Audit', description: 'Assess Trade Registry, e-Residency Platform, Statistics Estonia, and Investment Gateway for AI-driven business analytics, automated registration, and trade intelligence readiness.' },
  { number: 4, title: 'Economic ROI Modeling', description: 'Model AI-driven improvements in business registration speed, e-Residency application processing, FDI analysis accuracy, and export compliance automation for Estonia\'s economic development.' },
];

const eeRiaMethodologySteps: IntegrationMethodologyStep[] = [
  { number: 1, title: 'Cyber Infrastructure Discovery', description: 'Inventory X-Road security layer handling 48M daily auth events, 1.34M active eID certificates, and 12,000 monitored network nodes across RIA\'s national cybersecurity infrastructure.' },
  { number: 2, title: 'Security Operations Mapping', description: 'Map 8 critical security workflows from threat detection through incident resolution, identifying AI augmentation in threat hunting, vulnerability scanning, and digital identity verification.' },
  { number: 3, title: 'Cyber Tech Stack Audit', description: 'Assess X-Road Security Layer, CERT-EE Threat Feed, eID Infrastructure, and State Network Monitor for AI-driven threat intelligence, automated incident response, and zero-trust readiness.' },
  { number: 4, title: 'Cybersecurity ROI Modeling', description: 'Model AI-driven improvements in threat detection speed, incident response time, X-Road availability, and digital identity verification throughput for RIA\'s national cyber defense operations.' },
];

// ═══════════════════════════════════════════════════════════════════════════════
// ─── Company-Specific Workflows ──────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

// ─── Northwood Insurance Workflows ─────────────────────────────────────────────

const northwoodWorkflows: Workflow[] = [
  {
    name: 'Claims Intake & Triage',
    level: 'full',
    currentFTEs: 12,
    currentCost: 840_000,
    volume: '4,200 claims/month across P&C and specialty lines',
    currentTime: '35 min per claim initial triage',
    aiSolution: 'AI-powered claims intake with NLP document parsing, automatic severity scoring, and intelligent routing to adjusters based on claim type, complexity, and adjuster expertise.',
    routing: 'Fully Automatable',
    routingQuote: 'Let AI read the FNOL so adjusters can start investigating',
    costShift: 'Labor $840K → IT $180K + Labor $280K = $380K saved',
    savings: 380_000,
    automationPercent: 82,
    details: '12 FTEs manually entering FNOL data from phone, email, and portal submissions. Average 35 minutes per claim for initial data entry and triage routing.',
    currentProcess: [
      'First Notice of Loss (FNOL) received via phone (45%), email (30%), web portal (15%), and agent submissions (10%) — no unified intake channel',
      'Claims handlers manually key FNOL data into Guidewire ClaimCenter — average 12 minutes per claim for data entry alone',
      'Triage coordinator reviews each claim to assign severity (1-5 scale) and route to appropriate adjuster team — P&C, specialty, or catastrophe',
      'Supporting documents (police reports, medical records, photos) received separately and manually attached to claim file — average 3-day lag',
      'Duplicate claim detection done manually by searching policyholder name and date of loss — estimated 4% duplicate rate undetected',
    ],
    bottlenecks: [
      'Manual FNOL data entry consumes 45% of intake team time — purely clerical work with high error rate (8% rekeying errors)',
      'Triage routing based on coordinator experience rather than data — suboptimal adjuster matching leads to 22% reassignment rate',
      'Document lag: 3-day average delay between FNOL and complete claim file assembly delays investigation start',
      'No automated fraud signals at intake — suspicious patterns only caught weeks later during investigation',
    ],
    aiArchitecture: 'Multi-channel NLP intake pipeline: (1) Speech-to-text transcription for phone FNOLs with entity extraction for claim details. (2) OCR + NLP for email and document parsing — automatically extract loss details, policy info, and claimant data. (3) ML severity scoring model trained on 5 years of claim outcomes to auto-assign priority. (4) Intelligent routing algorithm matching claim characteristics to adjuster expertise and current workload. (5) Fraud signal detection at intake using anomaly detection on claim patterns.',
    implementationPlan: [
      { phase: 'Data Pipeline & Model Training', weeks: 'Weeks 1-4', description: 'Connect all intake channels to unified NLP pipeline. Train entity extraction models on 50K historical FNOLs. Build severity scoring model on claim outcome data.' },
      { phase: 'Shadow Mode Testing', weeks: 'Weeks 5-8', description: 'Run AI intake in parallel with manual process. Compare AI triage decisions vs human routing. Validate fraud signal accuracy against known fraud cases.' },
      { phase: 'Graduated Deployment', weeks: 'Weeks 9-12', description: 'Deploy AI intake for web portal claims first (lowest complexity). Expand to email and phone channels. Human review for high-severity claims only.' },
      { phase: 'Full Automation', weeks: 'Weeks 13-16', description: 'Fully automated intake for all channels. Real-time document assembly. Adjusters receive pre-populated claim files with AI-generated investigation recommendations.' },
    ],
    risks: [
      'State regulatory requirements for claims acknowledgment timelines — AI must meet or exceed current response times',
      'Phone FNOL transcription accuracy in noisy environments or with non-native speakers may require human fallback',
      'Adjuster pushback on AI-assigned cases — must demonstrate better matching than current coordinator judgment',
    ],
    dependencies: [
      'Guidewire ClaimCenter API access for real-time claim creation and routing',
      'Telephony integration for call recording and real-time transcription',
      'Historical claims data warehouse access for model training (minimum 3 years)',
    ],
  },
  {
    name: 'Policy Renewal Processing',
    level: 'full',
    currentFTEs: 8,
    currentCost: 640_000,
    volume: '12,000 renewals/quarter across all lines',
    currentTime: '45 min per renewal review',
    aiSolution: 'AI-automated renewal pipeline with risk reassessment, pricing optimization, and personalized retention offers generated from policyholder behavior analytics.',
    routing: 'Fully Automatable',
    routingQuote: 'Stop losing profitable policyholders to manual renewal backlogs',
    costShift: 'Labor $640K → IT $140K + Labor $200K = $300K saved',
    savings: 300_000,
    automationPercent: 78,
    details: '8 FTEs manually processing renewals 90 days before expiration. Current 18% non-renewal rate includes profitable policyholders lost to slow processing.',
    currentProcess: [
      'Renewal queue generated 90 days before policy expiration — exported from Guidewire as CSV and distributed to renewal team',
      'Underwriters manually review loss history, claims frequency, and market conditions for each renewal',
      'Pricing team recalculates premium using rating engine — manual data entry of updated risk factors takes 20 min per policy',
      'Renewal offer generated and sent to policyholder/agent — average 15-day turnaround from queue to offer',
      'Non-renewal decisions require manual documentation and state-specific notice compliance',
    ],
    bottlenecks: [
      '15-day turnaround allows competitors to poach profitable accounts before renewal offer reaches policyholder',
      'Flat renewal pricing (no personalization) — same rate increase applied regardless of policyholder loyalty or risk improvement',
      'No predictive retention modeling — cannot identify which policyholders are at risk of switching carriers',
      'Manual compliance tracking for state-specific non-renewal notice requirements (varies by state, 30-90 day windows)',
    ],
    aiArchitecture: 'Automated renewal engine: (1) Risk reassessment model ingesting real-time data (claims, credit, property, weather exposure) for dynamic repricing. (2) Retention prediction model identifying at-risk policyholders 120 days before expiration. (3) Price optimization engine balancing retention probability against profitability targets. (4) Automated compliance engine generating state-specific notices and tracking deadlines.',
    implementationPlan: [
      { phase: 'Model Development', weeks: 'Weeks 1-5', description: 'Train retention prediction model on 3 years of renewal/non-renewal outcomes. Build dynamic pricing engine with profitability constraints.' },
      { phase: 'Pilot — Personal Lines', weeks: 'Weeks 6-10', description: 'Deploy automated renewal for personal auto and homeowners. Monitor retention rates vs control group.' },
      { phase: 'Expand to Commercial', weeks: 'Weeks 11-14', description: 'Extend to commercial lines with underwriter oversight for policies over $50K premium.' },
      { phase: 'Full Automation', weeks: 'Weeks 15-18', description: 'End-to-end automated renewal for all standard lines. Human review only for complex specialty policies and non-renewal decisions.' },
    ],
    risks: [
      'State rate filing requirements — AI-generated pricing must comply with filed and approved rating algorithms',
      'Agent channel conflict if AI offers differ from agent-quoted renewals',
      'Retention offers that are too aggressive may erode profitability on marginal accounts',
    ],
    dependencies: [
      'Guidewire PolicyCenter integration for real-time policy data',
      'Third-party data feeds (credit scores, property valuations, weather risk) for dynamic repricing',
      'State-by-state compliance rule engine for notice requirements',
    ],
  },
  {
    name: 'Underwriting Review & Decisioning',
    level: 'human-in-loop',
    currentFTEs: 15,
    currentCost: 1_500_000,
    volume: '2,800 new submissions/month',
    currentTime: '2-4 hours per submission review',
    aiSolution: 'AI-assisted underwriting with automated risk scoring, pre-filled applications, and decision recommendations. Human underwriters review AI recommendations for complex or high-value risks.',
    routing: 'Human-in-the-Loop',
    routingQuote: 'AI scores the risk, underwriters make the judgment calls',
    costShift: 'Labor $1.5M → IT $320K + Labor $680K = $500K saved',
    savings: 500_000,
    automationPercent: 52,
    details: '15 senior underwriters reviewing submissions manually. Average 2-4 hours per submission including data gathering, risk assessment, and pricing.',
    currentProcess: [
      'Submission received from agent/broker with application, loss runs, and supplemental documents — often incomplete',
      'Underwriter manually gathers additional data: MVR reports, credit scores, property inspections, CLUE reports — average 45 min per submission',
      'Risk assessment performed using rating manual and underwriter judgment — no predictive modeling on loss propensity',
      'Pricing calculated using rating engine with manual factor adjustments — inconsistent application across underwriters',
      'Quote issued to agent with terms, conditions, and pricing — average 5-day turnaround for standard risks',
    ],
    bottlenecks: [
      '5-day quote turnaround loses business to faster competitors — industry benchmark is 24-48 hours for standard commercial',
      'Inconsistent underwriting: same risk receives different pricing from different underwriters — 15% variance on comparable submissions',
      'Data gathering consumes 35% of underwriter time — pure clerical work that delays the analysis',
      'No portfolio-level view — individual underwriters cannot see how each decision affects overall book profitability',
    ],
    aiArchitecture: 'AI underwriting copilot: (1) Automated data enrichment pulling MVR, credit, property, and claims data in real-time. (2) ML risk scoring model trained on 10 years of policy/loss data predicting loss ratio by risk class. (3) Pricing recommendation engine ensuring consistency across underwriters while respecting appetite guidelines. (4) Portfolio optimization layer showing cumulative impact of each decision on book composition. Human underwriters review AI recommendations, approve/modify pricing, and handle complex risks requiring judgment.',
    implementationPlan: [
      { phase: 'Data Integration', weeks: 'Weeks 1-4', description: 'Connect all third-party data sources for automated enrichment. Build unified submission data model.' },
      { phase: 'Risk Model Training', weeks: 'Weeks 5-10', description: 'Train predictive loss models on historical policy and claims data. Validate against known outcomes. Build pricing consistency engine.' },
      { phase: 'Copilot Deployment', weeks: 'Weeks 11-16', description: 'Deploy AI copilot alongside underwriters. AI pre-fills data, scores risk, and recommends pricing. Underwriters approve or override.' },
      { phase: 'Optimization & Expansion', weeks: 'Weeks 17-22', description: 'Add portfolio optimization. Expand to specialty lines. Auto-approve low-complexity standard risks.' },
    ],
    risks: [
      'Regulatory scrutiny on AI-driven pricing decisions — must demonstrate non-discriminatory outcomes and fair lending compliance',
      'Underwriter resistance to AI-recommended pricing that conflicts with their experience-based judgment',
      'Model drift risk as market conditions change — requires continuous monitoring and retraining cadence',
    ],
    dependencies: [
      'Historical underwriting data (minimum 10 years of policy-level loss data with all rating factors)',
      'Third-party data API integrations (LexisNexis, TransUnion, CoreLogic, ISO)',
      'Guidewire integration for seamless submission-to-quote workflow',
    ],
  },
  {
    name: 'Fraud Investigation & Detection',
    level: 'human-in-loop',
    currentFTEs: 6,
    currentCost: 540_000,
    volume: '380 SIU referrals/month',
    currentTime: '12-40 hours per investigation',
    aiSolution: 'ML fraud detection network analyzing claim patterns, provider networks, and claimant behavior. AI flags suspicious claims and generates investigation dossiers for SIU investigators.',
    routing: 'Human-in-the-Loop',
    routingQuote: 'AI catches the patterns humans miss in thousands of claims',
    costShift: 'Labor $540K → IT $120K + Labor $240K = $180K saved',
    savings: 180_000,
    automationPercent: 45,
    details: '6 SIU investigators handling 380 referrals/month. Current fraud detection relies on adjuster intuition and basic business rules — estimated 40% of fraud goes undetected.',
    currentProcess: [
      'Adjusters manually flag suspicious claims based on red flag checklists — subjective and inconsistent',
      'SIU receives referrals and manually researches claimant history, provider patterns, and public records',
      'Investigators conduct interviews, field inspections, and coordinate with law enforcement',
      'Investigation findings compiled in manual reports with recommendations for claim denial or recovery',
      'No systematic pattern analysis across claims — each investigation treated independently',
    ],
    bottlenecks: [
      'Adjuster referral rate is only 3% of claims — industry estimates 10-15% of claims have fraudulent elements',
      'Manual investigation averages 25 hours per case — SIU capacity limits investigations to highest-value referrals',
      'No network analysis — organized fraud rings exploiting provider/claimant relationships go undetected',
      'Delayed detection: average 45 days from claim filing to fraud identification, after significant payments made',
    ],
    aiArchitecture: 'Graph neural network fraud detection: (1) Social network analysis mapping claimant-provider-attorney relationships across entire claim portfolio. (2) Anomaly detection on claim patterns (timing, amounts, injury types, treatment patterns). (3) NLP analysis of claim narratives identifying scripted/templated fraud indicators. (4) Real-time scoring at FNOL providing fraud probability before any payment. Human SIU investigators review AI-flagged claims, conduct field investigations, and make final determinations.',
    implementationPlan: [
      { phase: 'Data Lake & Graph Build', weeks: 'Weeks 1-5', description: 'Build claims knowledge graph linking claimants, providers, attorneys, and addresses. Load 5 years of historical claims data.' },
      { phase: 'Model Training', weeks: 'Weeks 6-10', description: 'Train fraud detection models on known fraud outcomes. Build network analysis algorithms. Develop real-time scoring pipeline.' },
      { phase: 'Shadow Detection', weeks: 'Weeks 11-14', description: 'Run AI fraud detection in parallel with human referral process. Measure additional fraud identified by AI that humans missed.' },
      { phase: 'Production Deployment', weeks: 'Weeks 15-18', description: 'AI scores all new claims at intake. Automated investigation dossiers for high-score claims. SIU investigators focus on AI-prioritized cases.' },
    ],
    risks: [
      'False positive rate must be managed carefully — wrongly flagging legitimate claims damages customer relationships',
      'State regulations on claims investigation timelines — AI must accelerate, not delay, the investigation process',
      'Privacy considerations around social network analysis of claimant relationships',
    ],
    dependencies: [
      'Complete historical claims database with fraud outcome labels',
      'Provider network data and claims linkage across all lines of business',
      'SIU case management system integration for investigation workflow',
    ],
  },
  {
    name: 'Customer Onboarding & Quoting',
    level: 'full',
    currentFTEs: 10,
    currentCost: 700_000,
    volume: '3,600 new quotes/month',
    currentTime: '25 min per quote generation',
    aiSolution: 'AI-powered instant quoting with automated data prefill, real-time risk assessment, and personalized coverage recommendations.',
    routing: 'Fully Automatable',
    routingQuote: 'From application to quote in seconds, not days',
    costShift: 'Labor $700K → IT $160K + Labor $220K = $320K saved',
    savings: 320_000,
    automationPercent: 85,
    details: '10 FTEs generating quotes manually. Current 25-minute process loses prospects to competitors offering instant quotes.',
    currentProcess: [
      'Prospect submits application via agent, web portal, or phone — data often incomplete requiring follow-up',
      'Service team manually enters application data into rating engine — average 10 min per quote',
      'Rating engine calculates premium — but requires manual override for non-standard risks (40% of quotes)',
      'Quote document generated and sent to prospect via email — average 2-day turnaround',
      'Follow-up calls to prospects who received quotes but have not bound — manual tracking in CRM',
    ],
    bottlenecks: [
      '2-day quote turnaround loses 35% of prospects to competitors with instant quoting',
      '40% of quotes require manual rating override — inconsistent pricing across agents',
      'No coverage recommendation engine — agents sell what they know, not what the prospect needs',
      'Quote-to-bind conversion rate of 22% is below industry average of 32% — attributed to slow response and generic offerings',
    ],
    aiArchitecture: 'Instant quoting engine: (1) Pre-fill application from public data sources (property records, DMV, business registrations) reducing manual input by 70%. (2) Real-time ML risk scoring replacing manual rating overrides. (3) Coverage recommendation engine analyzing prospect profile against loss propensity models. (4) Dynamic pricing optimized for conversion probability and profitability. (5) Automated follow-up sequences triggered by prospect engagement signals.',
    implementationPlan: [
      { phase: 'Data Enrichment Layer', weeks: 'Weeks 1-3', description: 'Connect public data sources for automated application prefill. Build prospect data enrichment pipeline.' },
      { phase: 'Rating Engine Upgrade', weeks: 'Weeks 4-8', description: 'Replace manual override process with ML-based rating. Train pricing model on historical quote-to-bind data.' },
      { phase: 'Instant Quote Deployment', weeks: 'Weeks 9-12', description: 'Deploy real-time quoting for personal lines. Sub-60-second quote generation for standard risks.' },
      { phase: 'Commercial Lines Expansion', weeks: 'Weeks 13-16', description: 'Extend instant quoting to small commercial. Add coverage recommendation engine. Automated follow-up sequences.' },
    ],
    risks: [
      'Instant quote accuracy must match or exceed manually reviewed quotes — cannot sacrifice accuracy for speed',
      'Agent disintermediation concerns if direct-to-consumer quoting bypasses agency channel',
      'Regulatory compliance with state-specific rating requirements in automated pricing',
    ],
    dependencies: [
      'Third-party data APIs for application prefill (CoreLogic, LexisNexis, public records)',
      'Rating engine API access for real-time premium calculation',
      'CRM integration for automated prospect tracking and follow-up',
    ],
  },
  {
    name: 'Premium Calculation & Rating',
    level: 'full',
    currentFTEs: 5,
    currentCost: 450_000,
    volume: '18,000 rating transactions/month',
    currentTime: '8 min per complex rating',
    aiSolution: 'AI-enhanced rating engine with real-time data integration, dynamic factor adjustment, and automated compliance validation across all state jurisdictions.',
    routing: 'Fully Automatable',
    routingQuote: 'Real-time actuarial precision at every rating transaction',
    costShift: 'Labor $450K → IT $100K + Labor $120K = $230K saved',
    savings: 230_000,
    automationPercent: 88,
    details: '5 FTEs handling complex rating exceptions and manual factor adjustments. 18,000 transactions/month with 25% requiring manual intervention.',
    currentProcess: [
      'Standard ratings processed through Guidewire rating engine — automated for simple personal lines',
      'Complex commercial risks require manual factor lookup and application — 25% of all ratings',
      'Schedule rating credits/debits applied manually by underwriters based on subjective risk assessment',
      'Multi-state policies require separate rating calculations per jurisdiction — manual compliance verification',
      'Rating accuracy audited quarterly — current 3.2% error rate on manually adjusted ratings',
    ],
    bottlenecks: [
      '25% of ratings require manual intervention creating bottleneck in quoting pipeline',
      'Schedule rating inconsistency — same risk profile receives different credits from different underwriters',
      'Multi-state compliance verification is manual and error-prone — 1.8% of ratings have state compliance issues',
      'No real-time market data integration — competitive pricing intelligence updated quarterly rather than continuously',
    ],
    aiArchitecture: 'AI rating engine overlay: (1) ML-based schedule rating replacing subjective manual credits with data-driven factors. (2) Real-time regulatory compliance engine validating every rating against current state rules. (3) Competitive pricing intelligence using market data feeds. (4) Automated exception handling for complex commercial risks using ensemble models trained on historical underwriter decisions.',
    implementationPlan: [
      { phase: 'Rating Data Analysis', weeks: 'Weeks 1-3', description: 'Analyze 3 years of manual rating adjustments to train consistency models. Map all state regulatory requirements.' },
      { phase: 'ML Rating Models', weeks: 'Weeks 4-8', description: 'Build ML schedule rating models. Develop compliance validation engine. Integrate competitive market data.' },
      { phase: 'Pilot Deployment', weeks: 'Weeks 9-12', description: 'Deploy AI rating for personal auto and homeowners. Compare AI vs manual ratings. Target <1% error rate.' },
      { phase: 'Full Rollout', weeks: 'Weeks 13-16', description: 'Extend to all commercial lines. Eliminate manual rating exceptions. Real-time compliance validation on every transaction.' },
    ],
    risks: [
      'State DOI scrutiny on AI-driven rating factors — must demonstrate actuarial justification for all ML-derived variables',
      'Rating accuracy is critical — errors result in regulatory fines and E&O exposure',
      'Transition risk during parallel operation of manual and AI rating processes',
    ],
    dependencies: [
      'Guidewire rating engine API for real-time integration',
      'State regulatory filing database for compliance rules',
      'Market pricing data feeds for competitive intelligence',
    ],
  },
  {
    name: 'Reinsurance Placement & Management',
    level: 'human-in-loop',
    currentFTEs: 4,
    currentCost: 520_000,
    volume: '24 treaty placements/year, $180M ceded premium',
    currentTime: '3-6 weeks per placement cycle',
    aiSolution: 'AI-optimized reinsurance portfolio management with automated exposure analysis, optimal cession modeling, and market intelligence for treaty negotiations.',
    routing: 'Human-in-the-Loop',
    routingQuote: 'AI models the optimal cession structure, brokers negotiate the deal',
    costShift: 'Labor $520K → IT $80K + Labor $280K = $160K saved',
    savings: 160_000,
    automationPercent: 38,
    details: '4 reinsurance specialists managing $180M in ceded premium. Treaty placement cycle averages 4 weeks with significant manual analysis.',
    currentProcess: [
      'Exposure analysis compiled manually from underwriting data — aggregated by geography, line of business, and peril',
      'Cession modeling performed in Excel spreadsheets — testing various treaty structures against historical loss scenarios',
      'Market submissions prepared manually and sent to reinsurance brokers — limited competitive analysis',
      'Treaty terms negotiated with reinsurers — manual tracking of quotes, conditions, and counterparty credit',
      'Ongoing treaty monitoring and bordereau reporting compiled manually from claims and policy data',
    ],
    bottlenecks: [
      'Exposure aggregation takes 2 weeks per renewal — data scattered across policy admin, claims, and actuarial systems',
      'Excel-based cession modeling cannot handle complex multi-layer structures efficiently — limits optimization',
      'No real-time catastrophe exposure monitoring — aggregate positions updated quarterly',
      'Bordereau preparation consumes 1 FTE full-time — manual data extraction and formatting for each reinsurer',
    ],
    aiArchitecture: 'AI reinsurance optimization: (1) Real-time exposure aggregation from policy and claims systems with geographic and peril decomposition. (2) Monte Carlo simulation engine for optimal cession structure modeling across unlimited treaty configurations. (3) Market intelligence dashboard tracking reinsurer pricing trends and capacity. (4) Automated bordereau generation from source systems. Human specialists review AI-recommended treaty structures, conduct negotiations, and manage reinsurer relationships.',
    implementationPlan: [
      { phase: 'Exposure Data Integration', weeks: 'Weeks 1-4', description: 'Build real-time exposure aggregation from policy admin and claims systems. Create catastrophe exposure model.' },
      { phase: 'Optimization Engine', weeks: 'Weeks 5-10', description: 'Develop Monte Carlo cession optimization. Build market intelligence dashboard. Automate bordereau generation.' },
      { phase: 'Treaty Renewal Pilot', weeks: 'Weeks 11-16', description: 'Apply AI optimization to next treaty renewal cycle. Compare AI-recommended vs traditional structure on net cost basis.' },
      { phase: 'Ongoing Optimization', weeks: 'Weeks 17-20', description: 'Real-time exposure monitoring. Dynamic cession recommendations as portfolio composition changes.' },
    ],
    risks: [
      'Reinsurer relationships are personal and trust-based — AI cannot replace relationship management',
      'Catastrophe model accuracy depends on quality of geocoded exposure data — current data quality varies by line',
      'Treaty contract language is nuanced — AI can optimize structure but legal review remains human-required',
    ],
    dependencies: [
      'Policy admin system API for real-time exposure data',
      'Catastrophe modeling platform (RMS/AIR) integration',
      'Reinsurer market data feeds for pricing intelligence',
    ],
  },
  {
    name: 'Loss Adjustment & Settlement',
    level: 'human-in-loop',
    currentFTEs: 14,
    currentCost: 1_120_000,
    volume: '2,600 claim settlements/month',
    currentTime: '4-8 hours per settlement evaluation',
    aiSolution: 'AI-powered settlement recommendation engine analyzing comparable claims, medical cost benchmarks, and litigation risk to recommend optimal settlement ranges.',
    routing: 'Human-in-the-Loop',
    routingQuote: 'Data-driven settlement recommendations that reduce leakage and cycle time',
    costShift: 'Labor $1.12M → IT $200K + Labor $580K = $340K saved',
    savings: 340_000,
    automationPercent: 48,
    details: '14 adjusters evaluating and negotiating settlements. Current average settlement cycle of 45 days with significant leakage from inconsistent valuation.',
    currentProcess: [
      'Adjuster reviews claim file including medical records, repair estimates, and liability assessment',
      'Settlement value estimated using adjuster experience and basic reserve guidelines — no comparable claim analysis',
      'Authority levels require manual escalation: adjuster ($25K), supervisor ($100K), VP ($500K), executive ($500K+)',
      'Negotiation with claimant/attorney conducted via phone and letter — no structured negotiation analytics',
      'Settlement payment processing requires manual authorization chain and check/wire issuance',
    ],
    bottlenecks: [
      'Settlement inconsistency: comparable claims receive 20-35% different valuations depending on assigned adjuster',
      'Authority escalation delays: supervisor approval adds average 3 days, VP approval adds 7 days',
      'No litigation risk scoring — cannot quantify probability and cost of litigated outcomes to inform settlement decisions',
      'Manual payment processing adds 5-7 days after settlement agreement',
    ],
    aiArchitecture: 'AI settlement engine: (1) Comparable claim analysis using NLP similarity matching on claim characteristics, injuries, and jurisdictions. (2) Medical cost benchmarking against regional and provider-specific databases. (3) Litigation risk model predicting likelihood of suit and expected litigated outcome costs. (4) Optimal settlement range calculator balancing indemnity accuracy against claim cycle time. Human adjusters review AI-recommended ranges, conduct negotiations, and approve final settlements.',
    implementationPlan: [
      { phase: 'Claims Data Mining', weeks: 'Weeks 1-5', description: 'Build comparable claim database from 10 years of settlement history. Develop NLP similarity matching on claim narratives.' },
      { phase: 'Settlement Models', weeks: 'Weeks 6-10', description: 'Train settlement recommendation model. Build litigation risk scorer. Integrate medical cost benchmarks.' },
      { phase: 'Adjuster Copilot', weeks: 'Weeks 11-15', description: 'Deploy AI settlement recommendations alongside adjusters. Compare AI vs adjuster valuations. Measure consistency improvement.' },
      { phase: 'Authority Optimization', weeks: 'Weeks 16-20', description: 'Automated authority routing for AI-validated settlements within acceptable ranges. Reduce cycle time for straightforward claims.' },
    ],
    risks: [
      'State bad faith regulations require good-faith claims handling — AI recommendations must be defensible',
      'Adjuster resistance to AI-recommended settlement values that differ from their experience-based judgment',
      'Historical settlement data may contain systemic biases that need correction before model training',
    ],
    dependencies: [
      'Complete claims settlement history with outcome data (minimum 10 years)',
      'Medical cost benchmark databases (Milliman, Mitchell)',
      'Claims management system integration for real-time recommendation delivery',
    ],
  },
];

// ─── Pinnacle Healthcare Workflows ───────────────────────────────────────────

const pinnacleWorkflows: Workflow[] = [
  {
    name: 'Patient Intake & Registration',
    level: 'full',
    currentFTEs: 8,
    currentCost: 480_000,
    volume: '3,200 patient encounters/month',
    currentTime: '18 min per patient registration',
    aiSolution: 'AI-powered patient intake with automated insurance verification, pre-population from HIE data, and digital check-in kiosks reducing front desk workload by 75%.',
    routing: 'Fully Automatable',
    routingQuote: 'Patients check in, not check off boxes',
    costShift: 'Labor $480K → IT $100K + Labor $140K = $240K saved',
    savings: 240_000,
    automationPercent: 80,
    details: '8 FTEs handling manual patient registration with paper forms, manual insurance verification, and data entry into legacy EHR.',
    currentProcess: [
      'Patient arrives and fills out paper intake forms — demographics, insurance, medical history, consent forms',
      'Front desk staff manually enters data into EHR system — average 12 minutes per patient',
      'Insurance eligibility verified via phone or payer portal — average 6 minutes, frequent holds and portal timeouts',
      'Copay and deductible calculated manually using benefit tables — errors discovered at billing stage',
      'Paper forms scanned and attached to patient record — poor OCR quality requires manual verification',
    ],
    bottlenecks: [
      'Paper-to-digital conversion error rate of 6% — demographics and insurance data entry errors cause downstream billing failures',
      'Insurance verification phone holds average 8 minutes during peak hours — front desk staff unavailable for patient service',
      'No pre-visit data collection — patients provide same information at every visit, averaging 18 min of unproductive wait time',
      'Peak hour bottleneck: 8am-10am registration backlog creates average 25 min patient wait times',
    ],
    aiArchitecture: 'Digital intake platform: (1) Pre-visit digital forms sent via text/email 48 hours before appointment — auto-populated from patient history. (2) Real-time insurance eligibility verification via EDI 270/271 transactions. (3) AI-powered OCR for any remaining paper forms with 99%+ accuracy. (4) Kiosk check-in with biometric verification. (5) Automated copay calculation from benefit data with patient payment collection at check-in.',
    implementationPlan: [
      { phase: 'Digital Forms & Pre-Visit', weeks: 'Weeks 1-4', description: 'Deploy digital intake forms with pre-population from patient history. Build text/email notification system for pre-visit completion.' },
      { phase: 'Insurance Automation', weeks: 'Weeks 5-8', description: 'Connect real-time eligibility verification. Automate copay calculation. Deploy patient payment collection.' },
      { phase: 'Kiosk Deployment', weeks: 'Weeks 9-12', description: 'Install self-service kiosks at all locations. Train staff on new workflow. Monitor wait time reduction.' },
      { phase: 'Full Optimization', weeks: 'Weeks 13-16', description: 'Add biometric check-in. Integrate with scheduling for arrival prediction. Reduce front desk to concierge role.' },
    ],
    risks: [
      'HIPAA compliance for digital forms and text-based communications — must implement proper encryption and consent',
      'Patient demographics (elderly patients) may resist digital-first intake — must maintain manual fallback',
      'EHR integration complexity with legacy system — may require middleware layer',
    ],
    dependencies: [
      'EHR system API or HL7/FHIR interface for patient data exchange',
      'EDI clearinghouse connection for real-time eligibility (270/271 transactions)',
      'Patient communication platform with HIPAA-compliant messaging',
    ],
  },
  {
    name: 'Clinical Documentation & Coding',
    level: 'human-in-loop',
    currentFTEs: 12,
    currentCost: 960_000,
    volume: '3,200 encounters/month requiring documentation',
    currentTime: '15-45 min per encounter documentation',
    aiSolution: 'Ambient AI clinical documentation with real-time transcription, auto-generated SOAP notes, and AI-assisted ICD-10/CPT coding with clinical validation.',
    routing: 'Human-in-the-Loop',
    routingQuote: 'Providers focus on patients while AI writes the notes',
    costShift: 'Labor $960K → IT $220K + Labor $440K = $300K saved',
    savings: 300_000,
    automationPercent: 55,
    details: '12 staff (6 providers spending documentation time + 6 coders). Providers spend average 2 hours/day on documentation — time taken from patient care.',
    currentProcess: [
      'Provider conducts patient encounter while mentally noting key findings for later documentation',
      'After encounter (or at end of day), provider types SOAP notes into EHR — average 15 min per encounter for simple visits, 45 min for complex',
      'Medical coders review documentation to assign ICD-10 diagnosis codes and CPT procedure codes — 8 min per encounter',
      'Coding queries sent back to providers for clarification — average 15% of encounters require clarification adding 3-day delay',
      'Completed documentation submitted for billing — average 5-day lag from encounter to billing-ready state',
    ],
    bottlenecks: [
      'Provider documentation burden: 2 hours/day after-hours documentation causes burnout and reduces patient throughput by 20%',
      'Coding accuracy: 12% of claims denied on first submission due to coding errors or insufficient documentation',
      'Documentation lag: 5-day average from encounter to billing-ready status delays revenue by $180K in monthly cash flow',
      'Coding query loop: 15% of encounters bounce between coder and provider, averaging 3 additional days',
    ],
    aiArchitecture: 'Ambient AI documentation: (1) Real-time encounter transcription using medical speech-to-text (ambient microphone in exam room, patient consent). (2) Auto-generated SOAP notes from encounter transcript using medical LLM fine-tuned on clinical documentation. (3) AI coding engine suggesting ICD-10 and CPT codes from documentation with CDI (Clinical Documentation Improvement) prompts. (4) Provider reviews and approves AI-generated notes and codes before submission. Compliance layer validates documentation completeness against payer-specific requirements.',
    implementationPlan: [
      { phase: 'Ambient Pilot', weeks: 'Weeks 1-5', description: 'Deploy ambient transcription in 3 exam rooms. Train medical LLM on practice-specific documentation patterns. Validate transcription accuracy.' },
      { phase: 'Note Generation', weeks: 'Weeks 6-10', description: 'Deploy AI SOAP note generation. Providers review and edit AI drafts. Measure documentation time reduction.' },
      { phase: 'AI Coding Integration', weeks: 'Weeks 11-15', description: 'Add AI-assisted ICD-10/CPT coding. Integrate CDI prompts. Measure first-pass coding accuracy improvement.' },
      { phase: 'Full Deployment', weeks: 'Weeks 16-20', description: 'Expand to all exam rooms and providers. Integrate with billing system for same-day charge capture. Target <3% coding denial rate.' },
    ],
    risks: [
      'HIPAA requirements for ambient recording — must obtain explicit patient consent and secure all audio/transcript data',
      'Medical documentation accuracy is patient-safety critical — AI-generated notes must be thoroughly reviewed by providers',
      'Provider adoption varies — some clinicians may prefer their established documentation workflow',
    ],
    dependencies: [
      'EHR integration for note insertion and coding submission',
      'HIPAA-compliant audio capture and storage infrastructure',
      'Medical terminology model fine-tuned on practice specialty areas',
    ],
  },
  {
    name: 'Prior Authorization Processing',
    level: 'full',
    currentFTEs: 6,
    currentCost: 420_000,
    volume: '1,800 prior auth requests/month',
    currentTime: '45 min per authorization request',
    aiSolution: 'AI-automated prior authorization with payer-specific rule engines, automated clinical documentation assembly, and electronic submission with real-time status tracking.',
    routing: 'Fully Automatable',
    routingQuote: 'Eliminate the fax machine from the authorization process',
    costShift: 'Labor $420K → IT $80K + Labor $120K = $220K saved',
    savings: 220_000,
    automationPercent: 82,
    details: '6 FTEs manually processing prior auth requests. Current 45-minute process per request with 30% initial denial rate requiring appeals.',
    currentProcess: [
      'Provider orders procedure/medication requiring prior authorization — triggers manual process',
      'Staff identifies payer-specific authorization requirements — checking multiple payer portals and phone systems',
      'Clinical documentation gathered from patient record to support medical necessity — manual chart review and extraction',
      'Authorization request submitted via fax (55%), payer portal (35%), or phone (10%)',
      'Status tracking via manual follow-up calls — average 3 follow-up calls per request before determination',
      'Denials require appeal preparation — manual compilation of additional clinical evidence, average 2 hours per appeal',
    ],
    bottlenecks: [
      '45-minute manual process per authorization delays patient care by average 5 business days',
      '30% initial denial rate — mostly due to incomplete clinical documentation submitted with request',
      'Fax-based submission (55% of requests) — no tracking, frequent lost faxes requiring resubmission',
      'Staff spends 40% of time on hold with payer phone systems for status checks',
      'Appeal preparation (2 hours each) consumes disproportionate staff time for 30% of requests',
    ],
    aiArchitecture: 'Automated prior auth engine: (1) Payer rule engine mapping authorization requirements by procedure, diagnosis, and payer — auto-identifies when prior auth is needed. (2) AI clinical documentation assembler extracting relevant clinical evidence from EHR to meet medical necessity criteria. (3) Electronic submission via X12 278 transactions where available, with automated portal submission for remaining payers. (4) Real-time status tracking dashboard eliminating follow-up calls. (5) Automated appeal generation for denials with AI-assembled additional clinical evidence.',
    implementationPlan: [
      { phase: 'Payer Rule Mapping', weeks: 'Weeks 1-4', description: 'Map authorization requirements for top 20 payers covering 85% of volume. Build payer-specific rule engine.' },
      { phase: 'Clinical Documentation AI', weeks: 'Weeks 5-8', description: 'Build AI engine to extract and assemble relevant clinical documentation from EHR. Train on historical approvals.' },
      { phase: 'Electronic Submission', weeks: 'Weeks 9-12', description: 'Deploy electronic submission for payers supporting 278 transactions. Build automated portal submission for others.' },
      { phase: 'Appeals & Optimization', weeks: 'Weeks 13-16', description: 'Add automated appeal generation. Deploy real-time tracking dashboard. Target 85% first-pass approval rate.' },
    ],
    risks: [
      'Payer authorization requirements change frequently — rule engine requires continuous maintenance',
      'Clinical documentation extraction must be accurate — incorrect evidence can result in inappropriate authorization',
      'Some payers may not accept electronic submissions — fax fallback may remain necessary',
    ],
    dependencies: [
      'EHR clinical data access for AI documentation assembly',
      'EDI clearinghouse supporting X12 278 transactions',
      'Payer portal APIs or RPA for payers without electronic submission',
    ],
  },
  {
    name: 'Billing & Claims Submission',
    level: 'full',
    currentFTEs: 5,
    currentCost: 350_000,
    volume: '3,200 claims/month submitted to payers',
    currentTime: '12 min per claim preparation',
    aiSolution: 'AI-powered clean claim submission with automated charge capture, real-time eligibility verification, and predictive denial prevention.',
    routing: 'Fully Automatable',
    routingQuote: 'Submit clean claims the first time, every time',
    costShift: 'Labor $350K → IT $80K + Labor $100K = $170K saved',
    savings: 170_000,
    automationPercent: 85,
    details: '5 billing staff preparing and submitting claims. Current 15% denial rate costs $420K/year in rework and delayed revenue.',
    currentProcess: [
      'Charge tickets received from providers — paper-based for 40% of encounters, requiring manual data entry',
      'Billing staff verifies demographics, insurance, and coding accuracy before submission',
      'Claims formatted per payer-specific requirements and submitted via clearinghouse',
      'Remittance advices reviewed manually for payment accuracy and denial identification',
      'Denied claims investigated and resubmitted — average 22 days to resolve denied claims',
    ],
    bottlenecks: [
      '15% first-pass denial rate — above industry benchmark of 8%, costing $420K/year in rework',
      'Paper charge tickets require manual data entry — 6% error rate in charge capture',
      'Payer-specific billing rules not consistently applied — staff relies on institutional knowledge',
      'Denial management is reactive — no predictive identification of claims likely to deny before submission',
    ],
    aiArchitecture: 'AI billing engine: (1) Automated charge capture from clinical documentation — no paper tickets required. (2) Pre-submission claim scrubbing with AI rules engine checking payer-specific requirements. (3) Predictive denial model flagging claims likely to deny before submission for correction. (4) Automated denial categorization and routing for efficient resolution. (5) Real-time financial dashboard tracking days in A/R, denial rates, and collection efficiency.',
    implementationPlan: [
      { phase: 'Charge Capture Automation', weeks: 'Weeks 1-4', description: 'Automate charge capture from clinical documentation. Eliminate paper charge tickets.' },
      { phase: 'Claim Scrubbing AI', weeks: 'Weeks 5-8', description: 'Build pre-submission scrubbing engine. Train predictive denial model on historical denial data.' },
      { phase: 'Submission Optimization', weeks: 'Weeks 9-12', description: 'Deploy AI scrubbing on all claims. Target <8% first-pass denial rate. Automate denial categorization.' },
      { phase: 'Revenue Optimization', weeks: 'Weeks 13-16', description: 'Add financial dashboards. Automate denial follow-up workflows. Optimize collection efficiency.' },
    ],
    risks: [
      'Coding compliance — automated charge capture must accurately reflect services rendered to avoid fraud risk',
      'Payer contract terms for electronic submission formats — must support all major clearinghouse requirements',
      'Transition from paper-based charge capture requires provider workflow changes',
    ],
    dependencies: [
      'EHR clinical documentation access for automated charge capture',
      'Clearinghouse integration for electronic claim submission and remittance',
      'Historical denial data for predictive model training (minimum 2 years)',
    ],
  },
  {
    name: 'Appointment Scheduling & Optimization',
    level: 'full',
    currentFTEs: 4,
    currentCost: 240_000,
    volume: '4,800 appointments/month scheduled',
    currentTime: '8 min per scheduling call',
    aiSolution: 'AI-optimized scheduling with online self-service, predictive no-show management, and dynamic provider schedule optimization.',
    routing: 'Fully Automatable',
    routingQuote: 'Fill every appointment slot with the right patient',
    costShift: 'Labor $240K → IT $60K + Labor $60K = $120K saved',
    savings: 120_000,
    automationPercent: 88,
    details: '4 FTEs handling phone-based scheduling. 14% no-show rate costs $340K/year in lost revenue.',
    currentProcess: [
      'Patient calls to schedule appointment — staff checks provider availability manually in EHR',
      'Appointment type matched to provider specialty and time slot — based on staff knowledge of provider preferences',
      'Confirmation calls made manually 48 hours before appointment — reaches voicemail 60% of time',
      'No-shows identified after the fact — slot goes unfilled with no recovery mechanism',
      'Waitlist managed in spreadsheet — patients rarely contacted when cancellations occur',
    ],
    bottlenecks: [
      '14% no-show rate: $340K/year in lost provider productivity — no predictive identification or intervention',
      'Phone-only scheduling limits access — 35% of patients prefer online self-service (industry average)',
      'Manual confirmation calls reach only 40% of patients live — ineffective for reducing no-shows',
      'No dynamic optimization — provider schedules not adjusted based on demand patterns or patient acuity',
    ],
    aiArchitecture: 'AI scheduling platform: (1) Online self-service scheduling with intelligent provider matching based on clinical need. (2) Predictive no-show model scoring each appointment and triggering targeted interventions (reminders, transportation offers, overbooking for high-risk slots). (3) Dynamic schedule optimization adjusting template blocks based on demand patterns. (4) Automated waitlist management filling cancellations in real-time.',
    implementationPlan: [
      { phase: 'Online Scheduling', weeks: 'Weeks 1-4', description: 'Deploy patient self-service scheduling portal. Integrate with EHR schedule. Build provider matching algorithm.' },
      { phase: 'No-Show Prevention', weeks: 'Weeks 5-8', description: 'Train predictive no-show model. Deploy multi-channel reminders (text, email, phone). Implement targeted interventions.' },
      { phase: 'Dynamic Optimization', weeks: 'Weeks 9-12', description: 'Add schedule template optimization. Deploy automated waitlist management. Implement intelligent overbooking.' },
      { phase: 'Full Optimization', weeks: 'Weeks 13-14', description: 'Optimize patient-provider matching. Add post-visit follow-up scheduling. Target <6% no-show rate.' },
    ],
    risks: [
      'Patient preference for phone scheduling — must maintain phone option while incentivizing digital adoption',
      'Overbooking strategy risks provider burnout if not carefully calibrated',
      'EHR scheduling module limitations may constrain optimization capabilities',
    ],
    dependencies: [
      'EHR scheduling API for real-time availability and appointment creation',
      'Patient communication platform for multi-channel reminders',
      'Historical appointment data for no-show prediction model (minimum 1 year)',
    ],
  },
  {
    name: 'Prescription Management & Refills',
    level: 'human-in-loop',
    currentFTEs: 3,
    currentCost: 240_000,
    volume: '2,400 prescription actions/month',
    currentTime: '10 min per refill/new Rx processing',
    aiSolution: 'AI-assisted prescription management with automated refill processing, drug interaction checking, and prior authorization integration.',
    routing: 'Human-in-the-Loop',
    routingQuote: 'AI handles the refill queue, providers approve the clinical decisions',
    costShift: 'Labor $240K → IT $50K + Labor $120K = $70K saved',
    savings: 70_000,
    automationPercent: 45,
    details: '3 staff processing prescription requests. Providers spend 30 min/day on refill approvals — time taken from patient care.',
    currentProcess: [
      'Refill requests received from pharmacies via fax (70%) and e-prescribing (30%)',
      'Staff reviews patient chart for last visit date, medication history, and renewal eligibility',
      'Provider approves or denies refill — adds to provider inbox queue, average 24-hour turnaround',
      'Approved refills transmitted to pharmacy — fax-based refills require manual retransmission',
      'Formulary issues and prior auths identified after prescription rejected by pharmacy — reactive process',
    ],
    bottlenecks: [
      'Fax-based refill requests (70%) require manual processing — no structured data to automate',
      'Provider refill queue backlog averages 24 hours — patients calling pharmacy before approval processed',
      'Formulary checking is reactive — prescriptions rejected at pharmacy trigger time-consuming therapeutic alternatives process',
      'No proactive medication management — chronic disease patients run out of medications between visits',
    ],
    aiArchitecture: 'AI prescription management: (1) Automated refill processing for established medications meeting renewal criteria (last visit within 12 months, no contraindications). (2) Proactive formulary checking at prescribing with therapeutic alternative suggestions. (3) Drug-drug interaction AI checking against full medication list including OTC and supplements. (4) Provider reviews and approves AI-recommended refill actions and new prescriptions.',
    implementationPlan: [
      { phase: 'E-Prescribing Expansion', weeks: 'Weeks 1-4', description: 'Migrate remaining fax-based pharmacies to e-prescribing. Build structured refill request pipeline.' },
      { phase: 'Auto-Refill Engine', weeks: 'Weeks 5-8', description: 'Deploy automated refill processing for qualifying medications. Provider reviews exceptions only.' },
      { phase: 'Formulary Integration', weeks: 'Weeks 9-12', description: 'Add real-time formulary checking. Integrate prior authorization workflow. Deploy drug interaction AI.' },
      { phase: 'Proactive Management', weeks: 'Weeks 13-16', description: 'Add medication adherence monitoring. Proactive refill reminders for chronic disease patients.' },
    ],
    risks: [
      'Patient safety: automated refill processing must have robust clinical rules to prevent inappropriate renewals',
      'State prescribing regulations vary — some require in-person visit within specific timeframes for certain medications',
      'Provider liability for AI-recommended approvals — must maintain clear provider oversight and accountability',
    ],
    dependencies: [
      'E-prescribing network (Surescripts) connectivity for all pharmacy partners',
      'EHR medication list and clinical decision support integration',
      'Formulary databases from major PBMs for real-time coverage checking',
    ],
  },
  {
    name: 'Referral Processing & Coordination',
    level: 'full',
    currentFTEs: 3,
    currentCost: 210_000,
    volume: '800 referrals/month to specialists',
    currentTime: '20 min per referral processing',
    aiSolution: 'AI-automated referral management with intelligent specialist matching, automated documentation transfer, and closed-loop tracking.',
    routing: 'Fully Automatable',
    routingQuote: 'Referrals that actually close the loop',
    costShift: 'Labor $210K → IT $40K + Labor $60K = $110K saved',
    savings: 110_000,
    automationPercent: 78,
    details: '3 FTEs processing referrals manually. 35% of referrals never completed by patients — no tracking or follow-up system.',
    currentProcess: [
      'Provider writes referral order in EHR — often generic (e.g., "refer to cardiology") without specific specialist',
      'Referral staff faxes referral and clinical notes to specialist office — average 15 min per referral',
      'Specialist office calls back to schedule — or does not, with no tracking mechanism',
      'Patient responsible for scheduling their own specialist appointment in many cases',
      'Referral completion status unknown unless specialist sends consultation note back (happens 60% of time)',
    ],
    bottlenecks: [
      '35% referral leakage — patients never complete specialist visits, impacting care quality and downstream revenue',
      'Fax-based referral process — no confirmation of receipt, frequent lost referrals requiring resubmission',
      'No specialist quality/outcomes data — referrals based on provider personal relationships rather than patient outcomes',
      'Closed-loop failure — 40% of specialist consultation notes never received by referring provider',
    ],
    aiArchitecture: 'AI referral platform: (1) Intelligent specialist matching based on clinical need, insurance network, patient location, and quality metrics. (2) Electronic referral transmission with automated documentation assembly. (3) Patient engagement — automated scheduling assistance and appointment reminders. (4) Closed-loop tracking — automated follow-up on incomplete referrals and consultation note receipt.',
    implementationPlan: [
      { phase: 'Electronic Referral Network', weeks: 'Weeks 1-4', description: 'Build electronic referral connections with top 20 specialist practices. Automate documentation transfer.' },
      { phase: 'Patient Engagement', weeks: 'Weeks 5-8', description: 'Deploy patient referral tracking and scheduling assistance. Automated reminders for incomplete referrals.' },
      { phase: 'Specialist Matching', weeks: 'Weeks 9-12', description: 'Build specialist quality/outcomes database. Deploy intelligent matching algorithm.' },
      { phase: 'Closed-Loop Optimization', weeks: 'Weeks 13-16', description: 'Automated consultation note tracking. Alert referring provider on specialist findings. Reduce referral leakage to <15%.' },
    ],
    risks: [
      'Specialist practice participation depends on their willingness to accept electronic referrals — some may resist',
      'Patient engagement outreach must comply with communication consent preferences',
      'Specialist quality data may be limited or sensitive to share — requires careful handling',
    ],
    dependencies: [
      'EHR referral module API for order creation and tracking',
      'Health information exchange (HIE) connectivity for specialist data sharing',
      'Patient communication platform for referral tracking and reminders',
    ],
  },
  {
    name: 'Discharge Planning & Care Transitions',
    level: 'human-in-loop',
    currentFTEs: 4,
    currentCost: 320_000,
    volume: '600 discharges/month requiring coordination',
    currentTime: '40 min per discharge plan preparation',
    aiSolution: 'AI-generated discharge plans with automated medication reconciliation, follow-up scheduling, and patient-appropriate education materials.',
    routing: 'Human-in-the-Loop',
    routingQuote: 'AI prepares the plan, care coordinators ensure the transition',
    costShift: 'Labor $320K → IT $60K + Labor $160K = $100K saved',
    savings: 100_000,
    automationPercent: 42,
    details: '4 care coordinators preparing discharge plans. 22% readmission rate within 30 days — above target of 15%.',
    currentProcess: [
      'Provider enters discharge order with high-level instructions — specifics left to care coordinator',
      'Care coordinator manually compiles discharge instructions, medication list, and follow-up appointments',
      'Medication reconciliation performed manually — comparing admission meds, inpatient changes, and discharge orders',
      'Discharge education delivered verbally to patient — comprehension varies significantly',
      'Follow-up appointment scheduled manually — often by patient themselves after discharge',
    ],
    bottlenecks: [
      '22% readmission rate driven by medication errors (34% of readmissions) and missed follow-up (28% of readmissions)',
      'Medication reconciliation errors: 18% of discharge medication lists have discrepancies with inpatient orders',
      'Patient education comprehension: studies show patients retain only 40% of verbal discharge instructions',
      'Follow-up scheduling gap: 45% of patients do not have follow-up scheduled at time of discharge',
    ],
    aiArchitecture: 'AI discharge management: (1) Automated medication reconciliation comparing admission, inpatient, and discharge orders with AI-flagged discrepancies. (2) AI-generated discharge plans in patient-appropriate language (reading level, language preference). (3) Automated follow-up scheduling integrated with provider availability. (4) Post-discharge AI monitoring via text check-ins to identify early warning signs of complications. Care coordinators review AI-generated plans, address complex social determinant issues, and manage high-risk transitions.',
    implementationPlan: [
      { phase: 'Medication Reconciliation AI', weeks: 'Weeks 1-5', description: 'Build automated medication reconciliation engine. Flag discrepancies for pharmacist review. Target <2% reconciliation error rate.' },
      { phase: 'Discharge Plan Generation', weeks: 'Weeks 6-10', description: 'Deploy AI discharge plan generator with patient-appropriate language. Integrate follow-up scheduling.' },
      { phase: 'Post-Discharge Monitoring', weeks: 'Weeks 11-14', description: 'Launch text-based post-discharge check-ins. AI triage of responses to identify complications. Alert care team on high-risk signals.' },
      { phase: 'Optimization', weeks: 'Weeks 15-18', description: 'Refine readmission prediction model. Optimize monitoring frequency and intervention triggers. Target <15% readmission rate.' },
    ],
    risks: [
      'Medication reconciliation is patient-safety critical — AI must not miss dangerous interactions or duplications',
      'Patient engagement with text-based monitoring varies by demographics — elderly patients may not respond',
      'Post-discharge monitoring generates alerts requiring clinical judgment — must avoid alert fatigue',
    ],
    dependencies: [
      'EHR medication module API for comprehensive medication data',
      'Patient communication platform with HIPAA-compliant messaging',
      'Provider scheduling system for automated follow-up appointment booking',
    ],
  },
];

// ─── Atlas Manufacturing Workflows ───────────────────────────────────────────

const atlasWorkflows: Workflow[] = [
  {
    name: 'Purchase Order Processing',
    level: 'full',
    currentFTEs: 8,
    currentCost: 560_000,
    volume: '6,200 POs/month across 4 OpCos',
    currentTime: '22 min per PO creation and approval',
    aiSolution: 'AI-automated procurement with intelligent PO generation from demand signals, automated three-way matching, and dynamic vendor selection optimization.',
    routing: 'Fully Automatable',
    routingQuote: 'From requisition to PO in seconds, not days',
    costShift: 'Labor $560K → IT $120K + Labor $180K = $260K saved',
    savings: 260_000,
    automationPercent: 82,
    details: '8 FTEs across 4 OpCos manually creating POs, matching invoices, and processing approvals. Average 3-day PO cycle time.',
    currentProcess: [
      'Requisition submitted by production floor or inventory system — paper-based in 2 OpCos, digital in 2',
      'Procurement staff manually creates PO in ERP — looking up vendor, pricing, and contract terms',
      'PO routed for approval via email chain — approval authority based on dollar amount across 4 levels',
      'Approved PO sent to vendor via email or fax — no electronic purchase order transmission',
      'Three-way matching (PO, receipt, invoice) done manually in spreadsheets — average 15 min per transaction',
    ],
    bottlenecks: [
      '3-day average PO cycle time causes production delays when materials needed urgently',
      'Approval email chains: average 1.5 days for manager approval — longer if approver is traveling',
      'Three-way matching backlog: 1,200 unmatched transactions at any time — $2.1M in unresolved invoice disputes',
      'No spend analytics — cannot identify consolidation opportunities across 4 OpCos buying from same vendors',
    ],
    aiArchitecture: 'AI procurement engine: (1) Automated PO generation from MRP demand signals and inventory reorder points. (2) ML-based vendor selection optimizing for price, quality, delivery reliability, and risk. (3) Automated approval routing with AI-recommended urgency classification. (4) Real-time three-way matching with automated exception resolution. (5) Cross-OpCo spend analytics identifying consolidation opportunities.',
    implementationPlan: [
      { phase: 'PO Automation', weeks: 'Weeks 1-4', description: 'Automate PO generation from demand signals. Build electronic vendor transmission. Implement digital approval workflow.' },
      { phase: 'Three-Way Matching', weeks: 'Weeks 5-8', description: 'Deploy automated matching engine. AI exception resolution for common discrepancies. Clear backlog of unmatched transactions.' },
      { phase: 'Vendor Optimization', weeks: 'Weeks 9-12', description: 'Build vendor scoring model. Deploy cross-OpCo spend analytics. Identify consolidation opportunities.' },
      { phase: 'Predictive Procurement', weeks: 'Weeks 13-16', description: 'Add demand forecasting for proactive ordering. Dynamic safety stock optimization. Target <1 day PO cycle time.' },
    ],
    risks: [
      'ERP integration complexity across 4 different systems — may require middleware for unified procurement',
      'Vendor resistance to electronic PO transmission — smaller suppliers may need onboarding support',
      'Automated approval must respect delegation of authority policies — cannot bypass financial controls',
    ],
    dependencies: [
      'ERP system APIs across all 4 OpCos for PO creation and invoice matching',
      'Vendor master data consolidation across OpCos',
      'MRP/inventory system integration for demand signals',
    ],
  },
  {
    name: 'Production Scheduling & Planning',
    level: 'human-in-loop',
    currentFTEs: 10,
    currentCost: 800_000,
    volume: '12 production lines across 4 OpCos',
    currentTime: '6-8 hours weekly planning per line',
    aiSolution: 'AI-optimized production scheduling with demand-driven planning, real-time constraint management, and cross-OpCo capacity balancing.',
    routing: 'Human-in-the-Loop',
    routingQuote: 'AI optimizes the schedule, planners handle the exceptions',
    costShift: 'Labor $800K → IT $180K + Labor $340K = $280K saved',
    savings: 280_000,
    automationPercent: 48,
    details: '10 production planners across 4 OpCos spending 6-8 hours weekly per line on scheduling. OEE averages 62% — well below 85% world-class benchmark.',
    currentProcess: [
      'Customer orders entered into ERP and translated to production requirements — manual bill of materials explosion',
      'Planners build weekly production schedules in spreadsheets — considering machine capacity, material availability, and labor',
      'Schedule changes from rush orders or material shortages require manual replanning — average 4 reschedules per week per line',
      'Changeover sequences determined by planner experience — no optimization of setup time reduction',
      'Cross-OpCo capacity sharing does not exist — each OpCo plans independently even when producing similar products',
    ],
    bottlenecks: [
      'OEE at 62% — 23 points below world-class benchmark, driven by changeover time (18%) and unplanned downtime (12%)',
      'Manual replanning: 4 reschedules/week per line, each taking 2-3 hours, consuming 40% of planner capacity',
      'No changeover optimization — current sequences add estimated 15% unnecessary setup time',
      'Zero cross-OpCo capacity visibility — orders rejected at one OpCo while another has idle capacity',
    ],
    aiArchitecture: 'AI production scheduler: (1) Demand-driven scheduling engine integrating customer orders, forecasts, and safety stock targets. (2) Constraint-based optimization considering machine capacity, material availability, labor skills, and maintenance windows. (3) ML-optimized changeover sequencing minimizing setup time using historical changeover data. (4) Cross-OpCo capacity balancing dashboard. (5) Real-time rescheduling engine automatically adjusting for disruptions. Production planners review AI schedules, handle customer escalations, and manage cross-functional coordination.',
    implementationPlan: [
      { phase: 'Data Integration', weeks: 'Weeks 1-5', description: 'Connect ERP, MES, and machine data across 4 OpCos. Build unified production data model. Capture changeover time data.' },
      { phase: 'Scheduling Engine', weeks: 'Weeks 6-12', description: 'Deploy AI scheduling for 2 pilot production lines. Optimize changeover sequences. Measure OEE improvement.' },
      { phase: 'Cross-OpCo Balancing', weeks: 'Weeks 13-18', description: 'Build capacity visibility dashboard. Enable cross-OpCo order routing. Deploy real-time rescheduling.' },
      { phase: 'Full Deployment', weeks: 'Weeks 19-24', description: 'Expand to all 12 production lines. Add predictive maintenance integration. Target 78% OEE.' },
    ],
    risks: [
      'Production data quality varies significantly across OpCos — garbage-in-garbage-out risk for AI scheduling',
      'Planner resistance to AI-generated schedules — must demonstrate measurable OEE improvement quickly',
      'Cross-OpCo capacity sharing requires executive mandate — OpCo GMs historically operate independently',
    ],
    dependencies: [
      'MES integration across all 4 OpCos for real-time production data',
      'ERP integration for order and material data',
      'Machine connectivity for OEE data capture (IoT sensors on key equipment)',
    ],
  },
  {
    name: 'Quality Inspection & Control',
    level: 'human-in-loop',
    currentFTEs: 14,
    currentCost: 980_000,
    volume: '28,000 inspections/month across all OpCos',
    currentTime: '8-25 min per inspection depending on type',
    aiSolution: 'AI-powered visual inspection using computer vision, automated SPC analysis, and predictive quality models linking process parameters to defect outcomes.',
    routing: 'Human-in-the-Loop',
    routingQuote: 'AI inspects every unit, humans investigate the outliers',
    costShift: 'Labor $980K → IT $220K + Labor $420K = $340K saved',
    savings: 340_000,
    automationPercent: 52,
    details: '14 quality inspectors performing manual visual and dimensional inspections. Current defect escape rate of 2.8% — customer quality complaints trending upward.',
    currentProcess: [
      'In-process inspection performed manually at key stations — visual checks and manual dimensional measurements',
      'Inspection results recorded on paper quality logs — data entered into QMS at end of shift',
      'Statistical process control (SPC) charts maintained manually — out-of-control conditions identified hours after occurrence',
      'Final inspection before shipping — 100% visual for critical products, sampling for standard',
      'Customer complaints investigated manually — root cause analysis averages 5 days',
    ],
    bottlenecks: [
      '2.8% defect escape rate: customer returns costing $890K/year plus reputation damage',
      'Paper-based quality logs: data entered 4-8 hours after inspection — SPC responses are always late',
      'Manual visual inspection fatigue: miss rate increases 35% during second half of shift',
      'Root cause analysis bottleneck: 5-day average limits corrective action speed — problems recur',
    ],
    aiArchitecture: 'AI quality platform: (1) Computer vision inspection using cameras at key production stations — trained on historical defect images for automatic detection. (2) Real-time SPC on digitized process parameters with AI-powered out-of-control detection and root cause suggestion. (3) Predictive quality model linking upstream process parameters to downstream defect probability — enabling proactive adjustment before defects occur. (4) Digital quality records with automated compliance reporting. Quality engineers review AI-flagged issues, investigate complex root causes, and drive continuous improvement.',
    implementationPlan: [
      { phase: 'Digital Quality Capture', weeks: 'Weeks 1-5', description: 'Deploy digital inspection forms replacing paper logs. Connect process sensors for real-time SPC. Build quality data lake.' },
      { phase: 'Computer Vision Pilot', weeks: 'Weeks 6-12', description: 'Install cameras at 3 key inspection stations. Train defect detection models on historical data. Validate detection accuracy.' },
      { phase: 'Predictive Quality', weeks: 'Weeks 13-18', description: 'Build process-to-quality prediction models. Deploy proactive alerts for out-of-spec conditions. Reduce defect escapes.' },
      { phase: 'Full Deployment', weeks: 'Weeks 19-24', description: 'Expand computer vision to all critical stations. Integrate with production scheduling for quality-aware planning. Target <1% defect escape rate.' },
    ],
    risks: [
      'Computer vision accuracy depends on consistent lighting and camera positioning — production environment challenges',
      'Regulatory requirements (ISO, customer audits) may require human sign-off on inspection results',
      'Process parameter data collection requires IoT sensor investment on older equipment',
    ],
    dependencies: [
      'Industrial cameras and lighting infrastructure at inspection stations',
      'MES integration for real-time process parameter data',
      'Quality management system (QMS) API for digital record integration',
    ],
  },
  {
    name: 'Inventory Management & Optimization',
    level: 'full',
    currentFTEs: 6,
    currentCost: 420_000,
    volume: '18,000 SKUs across 4 OpCos, $42M inventory value',
    currentTime: 'Weekly manual reorder review, monthly cycle counts',
    aiSolution: 'AI-driven inventory optimization with demand forecasting, dynamic safety stock calculation, and automated replenishment across all OpCos.',
    routing: 'Fully Automatable',
    routingQuote: 'Right material, right quantity, right time — every time',
    costShift: 'Labor $420K → IT $100K + Labor $120K = $200K saved',
    savings: 200_000,
    automationPercent: 80,
    details: '6 inventory planners managing 18,000 SKUs. Current inventory turns of 4.2/year — benchmark is 8-12 for industry. $6.8M in excess and obsolete inventory.',
    currentProcess: [
      'Inventory levels reviewed weekly via ERP reports — manually compared against reorder points',
      'Reorder points set annually based on historical average demand — no seasonal or trend adjustment',
      'Purchase requisitions created manually when stock drops below reorder point',
      'Cycle counts performed monthly by warehouse staff — 3% inventory accuracy variance',
      'Excess and obsolete inventory identified annually during physical inventory — $6.8M currently',
    ],
    bottlenecks: [
      '4.2 inventory turns vs 8-12 benchmark — $18M excess working capital tied up in inventory',
      'Static reorder points cause both stockouts (12% of orders backordered) and excess inventory simultaneously',
      '3% inventory accuracy variance — causes production interruptions and emergency orders',
      'No cross-OpCo inventory visibility — same part stocked at all 4 locations with no sharing mechanism',
    ],
    aiArchitecture: 'AI inventory engine: (1) ML demand forecasting using sales history, seasonality, customer orders, and economic indicators. (2) Dynamic safety stock calculation adjusting for lead time variability and service level targets. (3) Automated replenishment generating POs when AI-calculated reorder points triggered. (4) Cross-OpCo inventory visibility with automatic transfer recommendations. (5) Excess/obsolete prediction identifying slow-moving inventory before it becomes obsolete.',
    implementationPlan: [
      { phase: 'Demand Forecasting', weeks: 'Weeks 1-5', description: 'Build ML demand forecast models for top 2,000 SKUs (80% of value). Validate against historical actuals.' },
      { phase: 'Dynamic Replenishment', weeks: 'Weeks 6-10', description: 'Deploy AI-calculated reorder points. Automate replenishment for standard items. Reduce stockout rate.' },
      { phase: 'Cross-OpCo Optimization', weeks: 'Weeks 11-14', description: 'Build cross-OpCo inventory dashboard. Deploy automated transfer recommendations. Identify excess reduction opportunities.' },
      { phase: 'Full Optimization', weeks: 'Weeks 15-18', description: 'Expand to all 18,000 SKUs. Vendor-managed inventory for top suppliers. Target 7+ inventory turns.' },
    ],
    risks: [
      'Demand forecasting accuracy depends on data quality — inconsistent demand coding across OpCos is a concern',
      'Automated replenishment must respect minimum order quantities and vendor lead time variability',
      'Cross-OpCo transfers add transportation cost — must net positive vs local procurement',
    ],
    dependencies: [
      'ERP inventory data across all 4 OpCos — unified item master required',
      'Supplier lead time data and performance history',
      'Sales order and demand forecast data for ML model training',
    ],
  },
  {
    name: 'Vendor Onboarding & Management',
    level: 'human-in-loop',
    currentFTEs: 3,
    currentCost: 240_000,
    volume: '120 new vendors/year, 1,800 active vendors',
    currentTime: '4-6 weeks per vendor onboarding',
    aiSolution: 'AI-streamlined vendor onboarding with automated compliance verification, risk scoring, and continuous performance monitoring.',
    routing: 'Human-in-the-Loop',
    routingQuote: 'Onboard vendors in days, not weeks, with full compliance',
    costShift: 'Labor $240K → IT $50K + Labor $120K = $70K saved',
    savings: 70_000,
    automationPercent: 42,
    details: '3 procurement staff managing vendor onboarding and performance. 4-6 week onboarding cycle delays new supplier availability.',
    currentProcess: [
      'Vendor application received via email — unstructured forms varying by OpCo',
      'Compliance verification manual: business registration, insurance certificates, quality certifications checked individually',
      'Financial viability assessment via Dun & Bradstreet report — manually ordered and reviewed',
      'Vendor master record created in ERP — duplicated across 4 OpCo systems',
      'Annual vendor review performed via spreadsheet scorecards — subjective and inconsistent',
    ],
    bottlenecks: [
      '4-6 week onboarding cycle — production waits for materials from approved vendors while applications process',
      'Compliance documentation expires without tracking — 22% of active vendors have lapsed insurance or certifications',
      'No real-time risk monitoring — vendor financial distress discovered only at annual review or after disruption',
      'Duplicate vendor records across 4 OpCo ERPs — cannot consolidate spend or performance data',
    ],
    aiArchitecture: 'AI vendor management: (1) Digital onboarding portal with automated document verification (OCR + AI validation of insurance, certifications, registrations). (2) Real-time financial risk scoring using D&B data and news sentiment analysis. (3) Automated compliance monitoring with expiration tracking and renewal alerts. (4) Unified vendor master across OpCos with AI-powered deduplication. Procurement team reviews AI risk assessments, conducts on-site audits for critical vendors, and manages strategic supplier relationships.',
    implementationPlan: [
      { phase: 'Digital Onboarding Portal', weeks: 'Weeks 1-4', description: 'Build vendor self-service portal. Automate document upload and AI verification. Target 2-week onboarding cycle.' },
      { phase: 'Risk Scoring & Monitoring', weeks: 'Weeks 5-8', description: 'Deploy real-time financial risk scoring. Build compliance expiration tracking. Automate renewal alerts.' },
      { phase: 'Vendor Master Consolidation', weeks: 'Weeks 9-12', description: 'Deduplicate vendor records across 4 OpCos. Build unified vendor performance dashboard.' },
      { phase: 'Continuous Monitoring', weeks: 'Weeks 13-16', description: 'Add news and sentiment monitoring for supply risk. Integrate with procurement for risk-adjusted vendor selection.' },
    ],
    risks: [
      'Vendor adoption of digital portal — smaller suppliers may resist self-service onboarding',
      'Compliance verification automation must be accurate — cannot onboard non-compliant vendors',
      'Vendor master consolidation across 4 ERPs is complex — requires careful data governance',
    ],
    dependencies: [
      'Dun & Bradstreet API for financial risk data',
      'ERP vendor master APIs across all 4 OpCos',
      'Insurance verification services for automated certificate validation',
    ],
  },
  {
    name: 'Maintenance Work Orders & Equipment Management',
    level: 'human-in-loop',
    currentFTEs: 8,
    currentCost: 640_000,
    volume: '2,400 work orders/month, 800 equipment assets',
    currentTime: '30 min per work order creation and scheduling',
    aiSolution: 'AI-powered predictive maintenance with IoT-driven condition monitoring, automated work order generation, and maintenance schedule optimization.',
    routing: 'Human-in-the-Loop',
    routingQuote: 'Fix equipment before it fails, not after it stops production',
    costShift: 'Labor $640K → IT $160K + Labor $280K = $200K saved',
    savings: 200_000,
    automationPercent: 50,
    details: '8 maintenance planners managing 800 equipment assets across 4 OpCos. Unplanned downtime accounts for 12% of production time — $3.2M annual impact.',
    currentProcess: [
      'Preventive maintenance scheduled on fixed calendar intervals — regardless of actual equipment condition',
      'Work orders created manually in CMMS when PM is due or breakdown occurs',
      'Maintenance technicians assigned manually by planner — considering skills, availability, and parts',
      'Parts availability checked manually — 18% of work orders delayed by parts unavailability',
      'Maintenance history tracked in CMMS but not analyzed for failure patterns or optimization',
    ],
    bottlenecks: [
      'Calendar-based PM: 35% of preventive maintenance performed unnecessarily (equipment in good condition) while 12% of failures still unplanned',
      '18% of work orders delayed by parts unavailability — maintenance planner unaware until technician arrives at machine',
      'No predictive capability — equipment fails unexpectedly despite regular PM schedule',
      'Maintenance history data exists but is never analyzed — failure patterns and root causes not identified systematically',
    ],
    aiArchitecture: 'Predictive maintenance platform: (1) IoT sensor data collection (vibration, temperature, power consumption, acoustic) from critical equipment. (2) ML anomaly detection models trained on historical failure data to predict equipment degradation. (3) Automated work order generation triggered by AI-detected conditions with recommended parts and procedures. (4) Maintenance schedule optimization balancing predictive, preventive, and corrective activities against production schedule. Maintenance planners and technicians review AI predictions, perform condition assessments, and execute maintenance activities.',
    implementationPlan: [
      { phase: 'IoT Sensor Deployment', weeks: 'Weeks 1-6', description: 'Install vibration, temperature, and power sensors on top 50 critical assets. Connect to data platform.' },
      { phase: 'Predictive Models', weeks: 'Weeks 7-14', description: 'Train failure prediction models on historical maintenance data. Deploy anomaly detection on live sensor feeds.' },
      { phase: 'Automated Work Orders', weeks: 'Weeks 15-18', description: 'Connect AI predictions to CMMS for automated work order generation. Integrate parts availability checking.' },
      { phase: 'Full Optimization', weeks: 'Weeks 19-24', description: 'Expand sensors to all 800 assets. Optimize PM intervals based on condition data. Target 50% reduction in unplanned downtime.' },
    ],
    risks: [
      'IoT sensor installation requires production downtime — must coordinate with manufacturing schedule',
      'Predictive model accuracy depends on sufficient failure history — some equipment types may have limited data',
      'Maintenance technician trust in AI predictions takes time to build — early false alarms will erode confidence',
    ],
    dependencies: [
      'IoT sensor hardware and connectivity infrastructure',
      'CMMS API for work order creation and maintenance history access',
      'Production scheduling integration to coordinate maintenance windows',
    ],
  },
  {
    name: 'Shipping & Logistics Coordination',
    level: 'full',
    currentFTEs: 5,
    currentCost: 380_000,
    volume: '8,400 shipments/month across 4 OpCos',
    currentTime: '15 min per shipment coordination',
    aiSolution: 'AI-optimized logistics with automated carrier selection, load optimization, and real-time shipment tracking with proactive delay management.',
    routing: 'Fully Automatable',
    routingQuote: 'Ship smarter with AI-optimized carrier selection and load building',
    costShift: 'Labor $380K → IT $80K + Labor $100K = $200K saved',
    savings: 200_000,
    automationPercent: 82,
    details: '5 logistics coordinators manually arranging shipments. Freight costs 15% above benchmark due to suboptimal carrier selection and LTL consolidation.',
    currentProcess: [
      'Shipping requirements generated from production completion and customer order dates',
      'Logistics coordinator contacts carriers for quotes — typically 2-3 carriers per shipment via phone/email',
      'Carrier selected based on coordinator relationships and available quotes — no systematic optimization',
      'Bill of lading and shipping documents prepared manually — data retyped from production and order records',
      'Shipment tracking relies on carrier portals — customers call for status updates',
    ],
    bottlenecks: [
      'Freight cost 15% above benchmark — suboptimal carrier selection and missed LTL consolidation opportunities',
      'Manual carrier quoting: 15 min per shipment, limited to 2-3 carriers vs TMS-automated multi-carrier comparison',
      'No cross-OpCo shipment consolidation — products shipping to same customer from different OpCos sent separately',
      'Reactive tracking — delivery issues discovered when customer complaints arrive, not proactively',
    ],
    aiArchitecture: 'AI logistics platform: (1) Multi-carrier rating and selection engine optimizing for cost, transit time, and service reliability. (2) AI load optimization consolidating LTL shipments across OpCos heading to same geography. (3) Automated BOL and document generation from ERP/production data. (4) Real-time GPS shipment tracking with AI-predicted ETAs and proactive delay alerts.',
    implementationPlan: [
      { phase: 'TMS Deployment', weeks: 'Weeks 1-4', description: 'Implement cloud TMS with multi-carrier rating. Automate document generation. Connect all 4 OpCo shipping operations.' },
      { phase: 'Load Optimization', weeks: 'Weeks 5-8', description: 'Deploy AI load building and LTL consolidation. Identify cross-OpCo consolidation opportunities.' },
      { phase: 'Tracking & Visibility', weeks: 'Weeks 9-12', description: 'Implement real-time GPS tracking. Deploy proactive delay alerts. Build customer shipment visibility portal.' },
      { phase: 'Continuous Optimization', weeks: 'Weeks 13-16', description: 'ML-based carrier performance scoring. Dynamic routing optimization. Target 12% freight cost reduction.' },
    ],
    risks: [
      'Carrier API integration: major carriers support EDI/API, but smaller regional carriers may require manual fallback',
      'Cross-OpCo consolidation requires coordinated shipping schedules — may add 1-2 days to some orders',
      'Customer expectations for delivery dates must be managed during optimization transition',
    ],
    dependencies: [
      'ERP integration across all 4 OpCos for order and production data',
      'Carrier APIs and EDI connections for automated rating and booking',
      'GPS tracking data from carrier partners',
    ],
  },
  {
    name: 'RMA Processing & Returns Management',
    level: 'full',
    currentFTEs: 3,
    currentCost: 210_000,
    volume: '400 RMAs/month, $1.8M annual returns value',
    currentTime: '25 min per RMA processing',
    aiSolution: 'AI-automated returns management with intelligent disposition routing, automated credit processing, and root cause analytics for quality improvement.',
    routing: 'Fully Automatable',
    routingQuote: 'Turn returns into insights with AI-powered root cause analysis',
    costShift: 'Labor $210K → IT $40K + Labor $60K = $110K saved',
    savings: 110_000,
    automationPercent: 78,
    details: '3 customer service staff processing returns. Average 8-day RMA cycle time frustrates customers and delays credits.',
    currentProcess: [
      'Customer contacts customer service to request return — reason documented in free-text field',
      'RMA number issued manually after verifying order and warranty status in ERP',
      'Return received at warehouse — inspected manually and disposition decision made (repair, replace, credit, scrap)',
      'Credit memo created manually in ERP after disposition — average 5-day delay from receipt to credit',
      'Return reason data exists but is not analyzed systematically for quality improvement',
    ],
    bottlenecks: [
      '8-day RMA cycle time: customer dissatisfaction and delayed credit impacting customer relationships',
      'Manual disposition decisions: inconsistent — same defect type receives different dispositions depending on inspector',
      '5-day credit delay: customers escalate to sales team, consuming sales productivity',
      'Return reason data never analyzed — recurring quality issues not identified from returns data',
    ],
    aiArchitecture: 'AI returns platform: (1) Automated RMA issuance with AI verification of order, warranty, and return eligibility. (2) AI-powered disposition routing using defect classification (photos + description NLP) to recommend repair/replace/credit/scrap. (3) Automated credit processing triggered by disposition completion. (4) Returns analytics dashboard linking return reasons to production lots, vendors, and process conditions for root cause identification.',
    implementationPlan: [
      { phase: 'Automated RMA Issuance', weeks: 'Weeks 1-3', description: 'Build self-service RMA portal. Automate order and warranty verification. Issue RMA numbers instantly.' },
      { phase: 'AI Disposition', weeks: 'Weeks 4-8', description: 'Train disposition model on historical returns data. Deploy photo-based defect classification. Automate standard dispositions.' },
      { phase: 'Credit Automation', weeks: 'Weeks 9-11', description: 'Automate credit memo generation. Trigger instant credits for pre-approved disposition types. Reduce cycle to <3 days.' },
      { phase: 'Quality Analytics', weeks: 'Weeks 12-14', description: 'Build returns root cause dashboard. Link to production and vendor data. Feed insights to quality improvement programs.' },
    ],
    risks: [
      'Automated RMA issuance must prevent fraudulent returns — AI needs robust validation rules',
      'AI disposition accuracy for high-value items must be validated before removing human review',
      'Customer expectations for instant credits must be balanced with fraud prevention',
    ],
    dependencies: [
      'ERP order and warranty data for return eligibility verification',
      'Warehouse management system for return receipt and inspection workflow',
      'Quality management system for root cause analytics integration',
    ],
  },
];

// ─── Northbridge Industries Group Workflows ──────────────────────────────────

const northbridgeWorkflows: Workflow[] = [
  {
    name: 'Strategic Planning & Portfolio Analysis',
    level: 'human-in-loop',
    currentFTEs: 8,
    currentCost: 1_200_000,
    volume: '4 portfolio companies, 24 strategic initiatives tracked',
    currentTime: '3-4 weeks per quarterly strategic review cycle',
    aiSolution: 'AI-powered strategic intelligence platform with real-time portfolio analytics, competitive monitoring, and scenario modeling for capital allocation.',
    routing: 'Human-in-the-Loop',
    routingQuote: 'AI synthesizes the data, leadership makes the strategy',
    costShift: 'Labor $1.2M → IT $280K + Labor $520K = $400K saved',
    savings: 400_000,
    automationPercent: 38,
    details: '8 strategy and FP&A staff compiling quarterly portfolio reviews from 4 divisions. Manual data aggregation delays strategic insight by 3-4 weeks.',
    currentProcess: [
      'Each division submits quarterly performance data via PowerPoint and Excel — no standardized reporting template',
      'Corporate strategy team manually aggregates and normalizes financial and operational data across 4 divisions',
      'Competitive intelligence gathered manually from industry reports, news, and analyst calls',
      'Strategic initiative tracking maintained in spreadsheets — progress updates via quarterly review meetings',
      'Portfolio rebalancing analysis performed annually using external consultants at $500K/engagement',
    ],
    bottlenecks: [
      'Quarterly review data 3-4 weeks stale by time of board presentation — decisions made on backward-looking information',
      'No real-time competitive intelligence — market shifts discovered months after occurrence',
      'Strategic initiative tracking is passive — deviations from plan not identified until next quarterly review',
      'Annual portfolio analysis cadence too slow for dynamic markets — opportunities missed between reviews',
    ],
    aiArchitecture: 'AI strategy platform: (1) Real-time financial data aggregation from 4 division ERPs with automated normalization and KPI calculation. (2) AI competitive intelligence monitoring (news, filings, patent activity, hiring patterns) with automated alerting. (3) Scenario modeling engine for portfolio rebalancing using Monte Carlo simulation and market factor analysis. (4) Strategic initiative tracking with AI-generated progress assessments from operational data. Leadership team uses AI insights for strategic discussions, investment decisions, and portfolio optimization.',
    implementationPlan: [
      { phase: 'Data Unification', weeks: 'Weeks 1-6', description: 'Connect 4 division ERPs for real-time financial data. Build standardized KPI framework. Automate quarterly review generation.' },
      { phase: 'Competitive Intelligence', weeks: 'Weeks 7-12', description: 'Deploy AI competitive monitoring across all 4 division industries. Build automated alerting for material market changes.' },
      { phase: 'Scenario Modeling', weeks: 'Weeks 13-18', description: 'Build portfolio scenario modeling engine. Run historical backtests. Deploy for next capital allocation cycle.' },
      { phase: 'Continuous Strategy', weeks: 'Weeks 19-24', description: 'Real-time strategic dashboard for executive team. AI-generated portfolio health scores. Reduce quarterly review preparation to 2 days.' },
    ],
    risks: [
      'Division resistance to real-time financial visibility — some GMs prefer controlling their narrative',
      'Competitive intelligence accuracy — AI-generated insights require human validation before strategic decisions',
      'Scenario model assumptions must be transparent and explainable for board-level discussions',
    ],
    dependencies: [
      'ERP data access across all 4 divisions (SAP, Oracle, NetSuite)',
      'Competitive intelligence data feeds (news APIs, SEC filings, patent databases)',
      'Financial modeling infrastructure for Monte Carlo simulation',
    ],
  },
  {
    name: 'Capital Allocation & Investment Analysis',
    level: 'human-in-loop',
    currentFTEs: 5,
    currentCost: 750_000,
    volume: '$2.4B total assets, 40+ capex requests/year',
    currentTime: '2-3 weeks per investment analysis',
    aiSolution: 'AI-enhanced capital allocation with automated DCF modeling, risk-adjusted return optimization, and portfolio impact simulation.',
    routing: 'Human-in-the-Loop',
    routingQuote: 'Data-driven capital allocation across the portfolio',
    costShift: 'Labor $750K → IT $160K + Labor $340K = $250K saved',
    savings: 250_000,
    automationPercent: 35,
    details: '5 FP&A analysts evaluating capex requests manually. 2-3 week analysis cycle delays investment decisions and capital deployment.',
    currentProcess: [
      'Division submits capex request with business case — format and depth varies significantly by division',
      'FP&A team builds DCF model in Excel for each request — typical model takes 3-5 days to build and validate',
      'Sensitivity analysis performed manually — limited to 3-4 scenarios due to time constraints',
      'Capital committee review package compiled manually — 20+ page PowerPoint with financial analysis',
      'Post-investment tracking is minimal — actual returns vs projected rarely measured after 12 months',
    ],
    bottlenecks: [
      '2-3 week analysis cycle: urgent investment opportunities missed while analysis processes through queue',
      'Inconsistent business case quality: some divisions over-project returns, others are conservative — no normalization',
      'Limited sensitivity analysis: manual process cannot explore full range of scenarios for risk assessment',
      'No portfolio-level optimization: each request evaluated independently without considering portfolio impact',
    ],
    aiArchitecture: 'AI capital allocation platform: (1) Standardized business case template with AI-assisted financial projection validation against historical accuracy. (2) Automated DCF modeling with ML-adjusted assumptions based on division-specific track record. (3) Monte Carlo sensitivity analysis exploring 10,000+ scenarios per request. (4) Portfolio optimization layer evaluating each request in context of total capital allocation strategy. CFO and investment committee use AI analytics to inform allocation decisions.',
    implementationPlan: [
      { phase: 'Business Case Standardization', weeks: 'Weeks 1-4', description: 'Build standardized digital business case template. Train AI projection validation model on historical capex outcomes.' },
      { phase: 'Automated DCF & Sensitivity', weeks: 'Weeks 5-10', description: 'Deploy automated DCF modeling. Build Monte Carlo simulation engine. Integrate historical accuracy adjustment.' },
      { phase: 'Portfolio Optimization', weeks: 'Weeks 11-16', description: 'Build portfolio-level capital allocation optimizer. Deploy investment committee dashboard.' },
      { phase: 'Post-Investment Tracking', weeks: 'Weeks 17-20', description: 'Automate actual vs projected tracking. Feed outcomes back to projection accuracy models. Improve future estimates.' },
    ],
    risks: [
      'Division gaming of AI-adjusted projections — must keep adjustment methodology confidential',
      'Capital committee comfort with AI-assisted recommendations for large investments — requires gradual trust building',
      'Historical capex outcome data may be insufficient for some divisions or investment types',
    ],
    dependencies: [
      'Historical capex request and outcome data across all divisions',
      'Division ERP data for actual financial performance tracking',
      'Financial market data for discount rate and comparable transaction analysis',
    ],
  },
  {
    name: 'Compliance Reporting & Regulatory Management',
    level: 'full',
    currentFTEs: 10,
    currentCost: 1_000_000,
    volume: '4 regulatory regimes, 180+ compliance requirements tracked',
    currentTime: '8-12 hours per compliance report',
    aiSolution: 'AI-automated compliance with real-time regulatory monitoring, automated report generation, and continuous control testing.',
    routing: 'Fully Automatable',
    routingQuote: 'Automate compliance reporting, not compliance judgment',
    costShift: 'Labor $1.0M → IT $200K + Labor $400K = $400K saved',
    savings: 400_000,
    automationPercent: 72,
    details: '10 compliance staff across 4 divisions tracking 180+ requirements. Manual reporting consumes 60% of compliance team capacity — leaving insufficient time for proactive risk management.',
    currentProcess: [
      'Regulatory requirements tracked in spreadsheets — separate trackers per division with no unified view',
      'Compliance reports compiled manually from division data — averaging 8-12 hours per report',
      'Control testing performed quarterly using manual sampling and documentation review',
      'Regulatory change monitoring done manually — subscribing to regulator newsletters and industry publications',
      'Board compliance reporting aggregated manually from 4 division compliance officers',
    ],
    bottlenecks: [
      'Manual reporting consumes 60% of team capacity — compliance officers act as data aggregators instead of risk advisors',
      'Quarterly control testing: issues discovered 3 months after occurrence — late detection increases remediation cost',
      'Regulatory change lag: average 45 days between regulation change and internal policy update',
      'No unified compliance view across 4 divisions — board sees fragmented reports',
    ],
    aiArchitecture: 'AI GRC platform: (1) Unified compliance requirements database mapped to controls across all 4 divisions. (2) Continuous control monitoring with automated testing using data from ERP, HR, and operational systems. (3) AI regulatory change monitoring scanning 200+ regulatory sources with automated impact assessment. (4) Automated compliance report generation pulling real-time data from source systems. Compliance officers review AI-generated reports, investigate exceptions, and provide strategic regulatory guidance.',
    implementationPlan: [
      { phase: 'Compliance Database', weeks: 'Weeks 1-5', description: 'Build unified compliance requirements database. Map controls to requirements across all 4 divisions.' },
      { phase: 'Continuous Monitoring', weeks: 'Weeks 6-12', description: 'Connect control data sources for automated testing. Deploy exception alerting. Replace quarterly sampling with continuous.' },
      { phase: 'Regulatory Intelligence', weeks: 'Weeks 13-16', description: 'Deploy AI regulatory change monitoring. Build automated impact assessment. Reduce change response to <7 days.' },
      { phase: 'Automated Reporting', weeks: 'Weeks 17-20', description: 'Generate board compliance reports automatically. Real-time compliance dashboards for each division. Free 60% of team for risk advisory.' },
    ],
    risks: [
      'Continuous monitoring requires data access across all systems — security and privacy considerations',
      'AI regulatory interpretation must be validated by legal — cannot fully automate regulatory analysis',
      'Board trust in AI-generated compliance reports requires gradual demonstration of accuracy',
    ],
    dependencies: [
      'ERP, HR, and operational system APIs across all 4 divisions',
      'Regulatory source data feeds for change monitoring',
      'GRC platform selection or existing tool integration',
    ],
  },
  {
    name: 'M&A Due Diligence & Integration',
    level: 'human-required',
    currentFTEs: 6,
    currentCost: 900_000,
    volume: '3-5 acquisition targets evaluated/year',
    currentTime: '8-12 weeks per due diligence process',
    aiSolution: 'AI-accelerated due diligence with automated data room analysis, risk identification, and integration planning powered by pattern recognition from prior acquisitions.',
    routing: 'Human-Required',
    routingQuote: 'AI reads the data room, deal team focuses on judgment',
    costShift: 'Labor $900K → IT $150K + Labor $600K = $150K saved',
    savings: 150_000,
    automationPercent: 25,
    details: '6 M&A staff conducting due diligence. 8-12 week process with external advisors. $2-5M per deal in advisory fees.',
    currentProcess: [
      'Target identification through industry contacts, investment bankers, and market screening — largely relationship-driven',
      'Preliminary screening using publicly available data — manual financial analysis and strategic fit assessment',
      'Due diligence data room review: 5,000-15,000 documents analyzed manually by internal team and external advisors',
      'Financial model built in Excel — 3-4 weeks for complex targets with multiple scenarios',
      'Integration planning begins post-close — typically 6-12 months after deal signing',
    ],
    bottlenecks: [
      'Data room review: 5,000-15,000 documents — human team can review 200-300/day, creating 4-6 week bottleneck',
      'Key risks buried in documents: material adverse conditions sometimes discovered late in process after significant investment',
      'Integration planning starts too late — post-close discovery of system incompatibilities, culture mismatches',
      'No institutional memory: lessons from prior acquisitions not systematically captured for future deals',
    ],
    aiArchitecture: 'AI due diligence platform: (1) Automated data room analysis using NLP to scan all documents for material terms, risks, and anomalies. (2) AI-powered financial model generation from target financial statements with automatic normalization. (3) Risk pattern matching against database of issues discovered in prior acquisitions. (4) Pre-close integration readiness assessment analyzing system compatibility and organizational alignment. Deal team focuses on strategic judgment, relationship management, and negotiation while AI handles document analysis and pattern recognition.',
    implementationPlan: [
      { phase: 'Data Room AI', weeks: 'Weeks 1-6', description: 'Build document analysis pipeline for standard data room formats. Train NLP models on risk identification using prior due diligence findings.' },
      { phase: 'Financial Modeling', weeks: 'Weeks 7-12', description: 'Automate financial model generation from target statements. Build scenario analysis engine.' },
      { phase: 'Integration Assessment', weeks: 'Weeks 13-16', description: 'Build technology and organizational compatibility assessment framework. Deploy pre-close integration readiness scoring.' },
      { phase: 'Institutional Learning', weeks: 'Weeks 17-20', description: 'Build deal knowledge base from prior acquisitions. Feed lessons learned into risk pattern matching for future deals.' },
    ],
    risks: [
      'Confidentiality: AI processing of sensitive target data requires robust security and access controls',
      'AI document analysis may miss context-dependent risks that require industry expertise to identify',
      'Deal team resistance to AI-flagged risks that contradict their investment thesis',
    ],
    dependencies: [
      'Secure document processing infrastructure with data room integration',
      'Historical due diligence findings database from prior acquisitions',
      'Financial data extraction tools for automated model building',
    ],
  },
  {
    name: 'Cross-Division Procurement & Spend Management',
    level: 'full',
    currentFTEs: 7,
    currentCost: 560_000,
    volume: '$1.2B combined spend across 4 divisions',
    currentTime: 'Annual vendor negotiation cycle',
    aiSolution: 'AI-driven spend analytics with automated contract consolidation, dynamic vendor negotiation support, and predictive spend optimization.',
    routing: 'Fully Automatable',
    routingQuote: 'One portfolio, one negotiating table, AI-optimized spend',
    costShift: 'Labor $560K → IT $120K + Labor $180K = $260K saved',
    savings: 260_000,
    automationPercent: 68,
    details: '7 procurement staff across corporate and divisions. No consolidated spend visibility — estimated $18M in cross-division savings opportunities unidentified.',
    currentProcess: [
      'Each division procures independently — separate vendor relationships, contracts, and negotiations',
      'Corporate procurement provides guidelines but has no visibility into division-level spending',
      'Annual contract negotiations conducted division-by-division — same vendor negotiated with 4 times',
      'Spend analysis performed annually using exported ERP data — 6-week manual analysis cycle',
      'Maverick spending (off-contract purchases) estimated at 25% but not systematically tracked',
    ],
    bottlenecks: [
      'No consolidated spend visibility: $1.2B in spend managed as 4 independent $300M portfolios instead of one',
      'Same vendors negotiated separately by each division — missing volume discount leverage',
      'Annual spend analysis is stale by publication — market conditions change faster than analysis cycle',
      '25% maverick spending: $300M purchased outside negotiated contracts at higher prices',
    ],
    aiArchitecture: 'AI spend management: (1) Cross-division spend analytics engine ingesting AP data from all 4 ERPs with AI-powered vendor and category normalization. (2) Contract consolidation recommender identifying cross-division opportunities with estimated savings. (3) AI negotiation support with benchmark pricing, vendor risk scores, and alternative supplier recommendations. (4) Real-time maverick spend detection and automated policy enforcement.',
    implementationPlan: [
      { phase: 'Spend Visibility', weeks: 'Weeks 1-5', description: 'Connect AP data from all 4 division ERPs. Build AI spend classification and vendor normalization.' },
      { phase: 'Consolidation Analysis', weeks: 'Weeks 6-10', description: 'Identify top 50 cross-division consolidation opportunities. Estimate savings per category. Build negotiation playbooks.' },
      { phase: 'Negotiation Execution', weeks: 'Weeks 11-16', description: 'Execute top 10 consolidation negotiations with AI-supported pricing benchmarks. Track realized savings.' },
      { phase: 'Continuous Optimization', weeks: 'Weeks 17-20', description: 'Deploy real-time maverick spend detection. Automated contract compliance monitoring. Target $12M annual savings.' },
    ],
    risks: [
      'Division autonomy concerns — GMs may resist centralized procurement mandates',
      'Spend data normalization across 4 different ERP systems is technically complex',
      'Vendor consolidation may reduce supply chain resilience — must balance savings with risk',
    ],
    dependencies: [
      'AP data access from all 4 division ERP systems',
      'Vendor master consolidation for cross-division analysis',
      'Contract management system for centralized agreement tracking',
    ],
  },
  {
    name: 'Enterprise Risk Assessment & Monitoring',
    level: 'human-in-loop',
    currentFTEs: 4,
    currentCost: 480_000,
    volume: '4 divisions, 120+ risk factors monitored',
    currentTime: '6-8 weeks for annual enterprise risk assessment',
    aiSolution: 'AI-powered continuous risk monitoring with real-time risk scoring, automated scenario analysis, and early warning indicators across all divisions.',
    routing: 'Human-in-the-Loop',
    routingQuote: 'Continuous risk radar instead of annual risk snapshot',
    costShift: 'Labor $480K → IT $100K + Labor $240K = $140K saved',
    savings: 140_000,
    automationPercent: 42,
    details: '4 risk management staff conducting annual enterprise risk assessment. Static risk register reviewed once per year — too infrequent for dynamic risk environment.',
    currentProcess: [
      'Annual risk assessment conducted via workshops with division leadership — 2-day facilitated sessions per division',
      'Risk register maintained in spreadsheet — 120+ risks across strategic, operational, financial, and compliance categories',
      'Risk scoring (likelihood x impact) performed subjectively by division leadership during workshop',
      'Mitigation plans documented but progress tracking is informal — reviewed annually at next workshop',
      'Board risk reporting compiled manually from risk register data — 6-8 weeks lag from assessment to board presentation',
    ],
    bottlenecks: [
      'Annual assessment cadence: risks emerge and evolve between assessments without detection',
      'Subjective scoring: same risk receives different ratings from different divisions',
      'No early warning system: risks materialize without advance indicator detection',
      'Mitigation tracking is informal — 40% of mitigation plans are overdue with no escalation mechanism',
    ],
    aiArchitecture: 'AI risk monitoring: (1) Continuous risk scoring using real-time operational, financial, and market data. (2) Early warning indicator detection using ML models trained on historical risk materialization events. (3) Automated scenario analysis quantifying potential impact across all divisions. (4) Risk mitigation tracking with automated progress monitoring and escalation. Risk officers review AI-generated risk assessments, provide contextual judgment, and advise leadership on mitigation priorities.',
    implementationPlan: [
      { phase: 'Risk Data Integration', weeks: 'Weeks 1-5', description: 'Connect operational and financial data sources to risk monitoring platform. Digitize risk register with standardized taxonomy.' },
      { phase: 'Continuous Scoring', weeks: 'Weeks 6-10', description: 'Deploy AI risk scoring with real-time data inputs. Build early warning indicator models.' },
      { phase: 'Scenario Analysis', weeks: 'Weeks 11-14', description: 'Build automated scenario analysis engine. Quantify risk impact across portfolio.' },
      { phase: 'Full Monitoring', weeks: 'Weeks 15-18', description: 'Deploy real-time risk dashboard for board. Automate mitigation tracking and escalation. Continuous risk radar.' },
    ],
    risks: [
      'AI risk scoring may create false sense of precision — risk management inherently involves qualitative judgment',
      'Real-time risk data requires broad system access — information security and privacy considerations',
      'Board may over-rely on AI risk scores without understanding model limitations',
    ],
    dependencies: [
      'Operational and financial data feeds from all 4 divisions',
      'External risk data (market, regulatory, geopolitical, cyber) for comprehensive monitoring',
      'GRC platform or risk management system for centralized risk register',
    ],
  },
  {
    name: 'Talent Allocation & Workforce Planning',
    level: 'human-in-loop',
    currentFTEs: 5,
    currentCost: 400_000,
    volume: '12,000+ employees across 4 divisions',
    currentTime: '4-6 weeks for annual workforce planning cycle',
    aiSolution: 'AI-driven workforce planning with skills-based talent matching, predictive attrition modeling, and cross-division talent mobility optimization.',
    routing: 'Human-in-the-Loop',
    routingQuote: 'Right talent, right role, right division — AI-matched',
    costShift: 'Labor $400K → IT $80K + Labor $200K = $120K saved',
    savings: 120_000,
    automationPercent: 40,
    details: '5 HR/talent staff managing workforce planning for 12,000+ employees. Annual planning cycle too slow — critical skills gaps discovered after projects launch.',
    currentProcess: [
      'Annual headcount planning driven by budget cycle — divisions submit requests 6 months ahead',
      'Skills inventory maintained informally by HR business partners — no centralized skills database',
      'Cross-division talent sharing rare — each division recruits independently even for common roles',
      'Succession planning performed manually for top 50 leaders — no visibility into broader talent pipeline',
      'Attrition forecasting based on historical average — no predictive capability for identifying flight risk individuals',
    ],
    bottlenecks: [
      'Critical skills gaps discovered after project launch — no proactive matching of talent to upcoming needs',
      'No cross-division talent marketplace — employee mobility limited to division-internal postings',
      'Succession planning covers only top 50 — broader leadership pipeline is opaque',
      'Attrition surprises: key talent departures not anticipated — average 60-day vacancy after unexpected departure',
    ],
    aiArchitecture: 'AI workforce platform: (1) Skills ontology mapping all 12,000+ employees using NLP analysis of resumes, project history, and performance data. (2) Talent-to-project matching engine recommending optimal staffing for upcoming initiatives. (3) Predictive attrition model identifying flight risk employees using engagement, compensation, and career progression signals. (4) Cross-division talent marketplace enabling internal mobility. HR leaders review AI recommendations, manage organizational dynamics, and execute talent strategies.',
    implementationPlan: [
      { phase: 'Skills Mapping', weeks: 'Weeks 1-6', description: 'Build enterprise skills ontology. NLP extraction from resumes and project histories across all 4 divisions.' },
      { phase: 'Attrition Prediction', weeks: 'Weeks 7-12', description: 'Train predictive attrition model on historical turnover data. Deploy flight risk scoring for all employees.' },
      { phase: 'Talent Marketplace', weeks: 'Weeks 13-18', description: 'Launch cross-division talent marketplace. AI-matched internal mobility recommendations.' },
      { phase: 'Workforce Optimization', weeks: 'Weeks 19-24', description: 'Deploy project-to-talent matching. Succession planning expansion to top 200 roles. Proactive skills gap identification.' },
    ],
    risks: [
      'Employee data privacy — predictive attrition modeling raises ethical concerns about surveillance',
      'Division resistance to cross-division talent sharing — GMs may view it as losing their best people',
      'Skills data quality varies — self-reported skills may not reflect actual capabilities',
    ],
    dependencies: [
      'HRIS data access across all 4 divisions',
      'Performance management and engagement survey data',
      'Project management data for talent-to-project matching',
    ],
  },
  {
    name: 'Board Reporting & Executive Intelligence',
    level: 'full',
    currentFTEs: 4,
    currentCost: 400_000,
    volume: '12 board meetings/year, 48 executive reports/year',
    currentTime: '2-3 weeks per board package preparation',
    aiSolution: 'AI-generated board reporting with real-time dashboards, automated narrative generation, and interactive scenario exploration.',
    routing: 'Fully Automatable',
    routingQuote: 'Board-ready intelligence in hours, not weeks',
    costShift: 'Labor $400K → IT $80K + Labor $120K = $200K saved',
    savings: 200_000,
    automationPercent: 75,
    details: '4 FP&A/strategy staff compiling board packages. 2-3 week preparation cycle means board sees stale data.',
    currentProcess: [
      'Financial data collected from 4 division controllers via email 2 weeks before board meeting',
      'Corporate FP&A manually normalizes and consolidates financial reports into board format',
      'Operational metrics gathered separately from division operations teams',
      'Board narrative written by CFO and strategy team — 40+ page PowerPoint deck',
      'Board questions answered via follow-up memos after meeting — 1-2 week turnaround',
    ],
    bottlenecks: [
      '2-3 week preparation: board data is 3-4 weeks stale at time of meeting',
      'Manual consolidation errors: 5% of board figures require post-meeting correction',
      'Static format: 40-page PowerPoint cannot support interactive exploration or ad-hoc analysis',
      'Post-meeting follow-up: 1-2 week turnaround for board questions delays decision-making',
    ],
    aiArchitecture: 'AI board intelligence: (1) Real-time financial and operational data aggregation from all 4 divisions. (2) Automated narrative generation using LLM fine-tuned on company communication style. (3) Interactive dashboard enabling board members to explore data during meetings. (4) AI-powered Q&A allowing instant response to ad-hoc board questions with supporting data. FP&A reviews AI-generated narratives for accuracy and strategic messaging.',
    implementationPlan: [
      { phase: 'Data Aggregation', weeks: 'Weeks 1-4', description: 'Connect real-time financial and operational data from all 4 divisions. Build automated consolidation.' },
      { phase: 'Dashboard Development', weeks: 'Weeks 5-10', description: 'Build interactive board dashboard. Design executive views with drill-down capability.' },
      { phase: 'Narrative Generation', weeks: 'Weeks 11-14', description: 'Train LLM for automated board narrative generation. Deploy for first board meeting with human review.' },
      { phase: 'Interactive Intelligence', weeks: 'Weeks 15-18', description: 'Deploy AI Q&A for board meetings. Real-time scenario exploration. Reduce preparation to 2 days.' },
    ],
    risks: [
      'Board members vary in technology comfort — must provide intuitive interface alongside traditional materials',
      'AI-generated narratives must accurately represent company position — requires careful review',
      'Data security: board materials are highly sensitive — AI platform must meet highest security standards',
    ],
    dependencies: [
      'Real-time ERP data access from all 4 divisions',
      'Historical board materials for LLM fine-tuning',
      'Secure board portal platform with AI capabilities',
    ],
  },
];

// ─── Estonia Government Workflows ────────────────────────────────────────────

const estoniaWorkflows: Workflow[] = [
  {
    name: 'Citizen Service Request Processing',
    level: 'full',
    currentFTEs: 45,
    currentCost: 2_700_000,
    volume: '180,000 service requests/month across all ministries',
    currentTime: '5-15 business days per request resolution',
    aiSolution: 'AI-powered citizen service platform with intelligent request routing, automated document processing, and conversational AI for first-line resolution.',
    routing: 'Fully Automatable',
    routingQuote: 'AI resolves citizen requests in minutes, not weeks',
    costShift: 'Labor €2.7M → IT €600K + Labor €900K = €1.2M saved',
    savings: 1_200_000,
    automationPercent: 78,
    details: '45 civil servants processing service requests across ministries. Average 8-day resolution time with significant variance by request type.',
    currentProcess: [
      'Citizens submit requests via eesti.ee portal, email, phone, or in-person at service centers',
      'Requests manually classified and routed to appropriate ministry department — average 2-day routing delay',
      'Case officer reviews request, gathers required documentation, and processes according to regulations',
      'Status updates provided only when citizen inquires — no proactive notification system',
      'Cross-ministry requests require manual coordination between departments — adding 5+ days to resolution',
    ],
    bottlenecks: [
      '2-day routing delay: requests sit in queue before reaching the right department',
      '35% of requests require additional documentation from citizen — back-and-forth adds average 5 days',
      'Cross-ministry coordination: 20% of requests span multiple ministries with no automated handoff',
      'Status tracking: citizens call service center for updates, consuming additional staff time',
    ],
    aiArchitecture: 'AI citizen service platform: (1) NLP-powered request classification and routing using X-Road data for intelligent department matching. (2) Conversational AI (Estonian language NLP) handling first-line resolution for common requests. (3) Automated document processing with OCR and data extraction from citizen submissions. (4) Proactive status notifications via eesti.ee and mobile ID. (5) Cross-ministry orchestration engine for multi-department requests using X-Road service bus.',
    implementationPlan: [
      { phase: 'Request Classification AI', weeks: 'Weeks 1-6', description: 'Train Estonian NLP models on historical request data. Build intelligent routing engine connected to X-Road.' },
      { phase: 'Conversational AI Pilot', weeks: 'Weeks 7-14', description: 'Deploy conversational AI for top 20 request types (covering 60% of volume). Estonian and Russian language support.' },
      { phase: 'Cross-Ministry Orchestration', weeks: 'Weeks 15-20', description: 'Build automated handoff for multi-ministry requests. Deploy proactive citizen notifications.' },
      { phase: 'Full Deployment', weeks: 'Weeks 21-26', description: 'Expand AI handling to all request types. Target <2 day average resolution. Real-time citizen satisfaction tracking.' },
    ],
    risks: [
      'Estonian language NLP accuracy — must handle Estonian grammar complexity and Russian-language requests',
      'Citizen trust in AI-processed government decisions — transparency requirements for automated processing',
      'Data privacy under EU GDPR — AI processing of citizen data requires legal basis and consent management',
    ],
    dependencies: [
      'X-Road infrastructure for cross-ministry data exchange',
      'eesti.ee portal integration for citizen-facing AI interface',
      'Population registry and document register access for automated verification',
    ],
  },
  {
    name: 'Permit Application Processing',
    level: 'human-in-loop',
    currentFTEs: 30,
    currentCost: 1_800_000,
    volume: '42,000 permit applications/year across ministries',
    currentTime: '15-45 business days per permit decision',
    aiSolution: 'AI-assisted permit processing with automated completeness checking, risk-based review routing, and intelligent decision support for permit officers.',
    routing: 'Human-in-the-Loop',
    routingQuote: 'AI checks the paperwork, officers make the decisions',
    costShift: 'Labor €1.8M → IT €400K + Labor €800K = €600K saved',
    savings: 600_000,
    automationPercent: 48,
    details: '30 permit officers across building, environmental, business, and activity permits. Average 25-day processing time with 40% of applications incomplete on submission.',
    currentProcess: [
      'Permit application submitted via ministry-specific portals — different systems for building, environmental, business permits',
      'Permit officer manually reviews application for completeness — 40% returned for additional information',
      'Technical review performed against regulatory requirements — manual checking of plans, specifications, and compliance',
      'Cross-ministry consultation required for 30% of permits — initiated via email, average 10-day response time',
      'Decision documented and permit issued or denied — manual notification to applicant',
    ],
    bottlenecks: [
      '40% incomplete applications: back-and-forth with applicants adds average 12 days to processing',
      'Manual technical review: permit officers spend 70% of time on routine compliance checking',
      'Cross-ministry consultation: 10-day average response time for required inter-ministry approvals',
      'No risk-based routing: simple low-risk permits wait in same queue as complex high-impact applications',
    ],
    aiArchitecture: 'AI permit platform: (1) Intelligent application forms with real-time completeness validation and AI-guided document upload. (2) Automated compliance checking against regulatory databases and spatial data (GIS). (3) Risk-based routing — AI classifies permits by complexity and risk, auto-approving low-risk applications. (4) Cross-ministry consultation automation via X-Road with structured review requests and deadline tracking. Permit officers review AI-prepared assessments, handle complex applications, and make final decisions on high-impact permits.',
    implementationPlan: [
      { phase: 'Smart Application Forms', weeks: 'Weeks 1-6', description: 'Build intelligent forms with real-time validation. Reduce incomplete submissions by 80%.' },
      { phase: 'Automated Compliance', weeks: 'Weeks 7-14', description: 'Connect regulatory databases and GIS data. Build automated compliance checking engine.' },
      { phase: 'Risk-Based Routing', weeks: 'Weeks 15-20', description: 'Deploy AI risk classification. Auto-approve low-risk permits. Route complex permits to senior officers.' },
      { phase: 'Cross-Ministry Automation', weeks: 'Weeks 21-26', description: 'Automate inter-ministry consultation via X-Road. Track consultation deadlines. Target <10 day average processing.' },
    ],
    risks: [
      'Automated permit approval must comply with administrative law requirements — right of appeal must be preserved',
      'GIS and spatial data accuracy critical for building and environmental permits — data quality varies by municipality',
      'Cross-ministry automated routing requires agreement on service levels between ministries',
    ],
    dependencies: [
      'X-Road services for cross-ministry data exchange and consultation',
      'National GIS and spatial data infrastructure',
      'Regulatory compliance databases maintained by each ministry',
    ],
  },
  {
    name: 'Tax Filing & Processing',
    level: 'full',
    currentFTEs: 25,
    currentCost: 1_500_000,
    volume: '1.3M personal + 200K corporate tax filings/year',
    currentTime: 'Pre-filled returns: 3 min; Complex returns: 2-4 weeks review',
    aiSolution: 'AI-enhanced tax processing with expanded pre-fill coverage, anomaly detection for audit targeting, and automated compliance monitoring.',
    routing: 'Fully Automatable',
    routingQuote: 'Estonia\'s pre-filled tax returns made even smarter by AI',
    costShift: 'Labor €1.5M → IT €350K + Labor €500K = €650K saved',
    savings: 650_000,
    automationPercent: 85,
    details: '25 tax officers managing filing processing and audits. Estonia already has world-leading 98% e-filing rate — AI targets remaining manual review and audit processes.',
    currentProcess: [
      'Pre-filled tax returns generated from employer, bank, and investment data via X-Road — 98% e-filing rate',
      'Most personal returns accepted automatically — but 12% require manual review for discrepancies',
      'Corporate returns reviewed by tax officers — manual verification of deductions, transfers, and compliance',
      'Audit selection based on simple rules and random sampling — estimated 60% of audits find no significant issues',
      'VAT compliance monitoring performed via periodic reporting review — real-time monitoring limited',
    ],
    bottlenecks: [
      '12% of personal returns flagged for manual review — many are false positives consuming officer time',
      'Corporate audit selection: 60% of audits find no issues — poor targeting wastes limited audit resources',
      'VAT compliance gaps: quarterly monitoring allows 3-month window for VAT fraud before detection',
      'Cross-border transaction monitoring limited — EU intra-community supplies difficult to verify in real-time',
    ],
    aiArchitecture: 'AI tax platform: (1) Expanded pre-fill using AI to incorporate additional data sources (e-commerce platforms, sharing economy, crypto exchanges). (2) ML anomaly detection for audit targeting — replacing rules-based selection with predictive models trained on historical audit outcomes. (3) Real-time VAT compliance monitoring analyzing transaction patterns for fraud indicators. (4) Cross-border verification using EU tax data exchange automation. Tax officers review AI-flagged returns, conduct targeted audits, and handle complex compliance cases.',
    implementationPlan: [
      { phase: 'Enhanced Pre-Fill', weeks: 'Weeks 1-6', description: 'Integrate additional data sources into pre-fill system. Reduce manual review rate from 12% to 5%.' },
      { phase: 'AI Audit Targeting', weeks: 'Weeks 7-14', description: 'Train ML audit selection model on 5 years of audit outcomes. Validate targeting improvement against random sampling baseline.' },
      { phase: 'VAT Monitoring', weeks: 'Weeks 15-20', description: 'Deploy real-time VAT transaction monitoring. Build fraud pattern detection. Reduce detection window to <7 days.' },
      { phase: 'Cross-Border AI', weeks: 'Weeks 21-26', description: 'Integrate EU tax data exchange feeds. Automated cross-border transaction verification. Target 80% productive audit rate.' },
    ],
    risks: [
      'Tax data is extremely sensitive — AI processing must comply with strict data protection and taxpayer rights',
      'ML audit targeting must not discriminate against any demographic groups — fairness auditing required',
      'EU regulatory framework for automated tax processing still evolving — must maintain flexibility',
    ],
    dependencies: [
      'X-Road connections to expanded data sources (e-commerce, crypto, sharing economy)',
      'EU tax data exchange (DAC7, DAC8) technical infrastructure',
      'Historical audit outcome data for ML model training',
    ],
  },
  {
    name: 'Benefits Enrollment & Social Services',
    level: 'human-in-loop',
    currentFTEs: 20,
    currentCost: 1_200_000,
    volume: '340,000 benefit applications/year',
    currentTime: '10-30 business days per benefit determination',
    aiSolution: 'AI-powered proactive benefits platform with life-event triggered enrollment, automated eligibility determination, and predictive social needs identification.',
    routing: 'Human-in-the-Loop',
    routingQuote: 'Government that anticipates citizen needs before they ask',
    costShift: 'Labor €1.2M → IT €280K + Labor €500K = €420K saved',
    savings: 420_000,
    automationPercent: 52,
    details: '20 case workers processing benefit applications. Estonia\'s "invisible government" vision: proactive service delivery using life events as triggers.',
    currentProcess: [
      'Citizen applies for benefits via eesti.ee or service center — must identify which benefits they are eligible for',
      'Case worker verifies eligibility by checking multiple data sources via X-Road queries',
      'Documentation requirements vary by benefit type — citizen must provide proof documents for some benefits',
      'Determination made by case worker following regulatory guidelines — average 15-day processing time',
      'Benefit payment initiated after approval — separate process for each benefit type',
    ],
    bottlenecks: [
      'Citizens must know which benefits exist and apply for them — estimated 15-20% of eligible benefits unclaimed',
      'Eligibility verification across multiple data sources is manual — X-Road data available but not automatically analyzed',
      '15-day average processing: citizens in urgent need wait while application processes through queue',
      'Each benefit processed independently — no unified view of citizen\'s social support needs',
    ],
    aiArchitecture: 'AI proactive benefits: (1) Life-event detection engine monitoring population registry, tax data, and health data via X-Road for triggering events (birth, death, job loss, disability). (2) Automated eligibility determination checking all applicable benefits simultaneously. (3) Proactive citizen notification of benefit entitlements with pre-filled applications. (4) Predictive needs model identifying citizens likely to need social services before crisis. Case workers review complex cases, manage high-need individuals, and provide personalized social support.',
    implementationPlan: [
      { phase: 'Life-Event Engine', weeks: 'Weeks 1-8', description: 'Build life-event detection from X-Road data sources. Map benefit eligibility rules for all major benefit programs.' },
      { phase: 'Proactive Notification', weeks: 'Weeks 9-14', description: 'Deploy proactive benefit notifications for birth-related, job loss, and disability events. Pre-fill applications.' },
      { phase: 'Automated Determination', weeks: 'Weeks 15-20', description: 'Automate eligibility determination for standard cases. Case workers handle exceptions and complex needs.' },
      { phase: 'Predictive Social Services', weeks: 'Weeks 21-26', description: 'Deploy needs prediction model. Proactive outreach to at-risk citizens. Unified social support dashboard.' },
    ],
    risks: [
      'Proactive benefits requires sensitive life-event monitoring — must balance service with privacy rights',
      'Automated eligibility determination must be legally defensible — citizens have right to appeal automated decisions',
      'Predictive social needs model risks stigmatization — must be used for positive outreach, not profiling',
    ],
    dependencies: [
      'X-Road access to population registry, tax, health, and employment data',
      'Digital notification infrastructure via eesti.ee and mobile ID',
      'Social benefits regulatory rules database for all benefit programs',
    ],
  },
  {
    name: 'Business Registration & Compliance',
    level: 'full',
    currentFTEs: 12,
    currentCost: 720_000,
    volume: '28,000 new registrations + 120,000 compliance filings/year',
    currentTime: '18 min average registration (already world-leading), 5-10 days for complex filings',
    aiSolution: 'AI-enhanced business registry with instant registration, automated compliance monitoring, and proactive regulatory guidance for businesses.',
    routing: 'Fully Automatable',
    routingQuote: 'Register a company in minutes, stay compliant automatically',
    costShift: 'Labor €720K → IT €160K + Labor €240K = €320K saved',
    savings: 320_000,
    automationPercent: 82,
    details: '12 registry officers managing registrations and compliance. Estonia\'s 18-minute registration is world-leading — AI targets compliance monitoring and complex filings.',
    currentProcess: [
      'Business registration via e-Business Register portal — 18-minute average for standard registrations',
      'Complex registrations (foreign owners, regulated industries) require manual review — 5-10 days',
      'Annual report filing: 200K businesses file annual reports — 12% require manual review for compliance',
      'Beneficial ownership verification performed manually for AML compliance',
      'Regulatory change notifications sent to businesses via generic newsletters — low engagement rate',
    ],
    bottlenecks: [
      'Complex registrations: 15% of applications require manual review delaying registration by 5-10 days',
      'Annual report compliance: 18% of businesses file late, requiring manual follow-up and penalty processing',
      'Beneficial ownership verification for AML: manual process cannot keep pace with ownership change volume',
      'Regulatory guidance: businesses unaware of compliance requirements until they receive penalties',
    ],
    aiArchitecture: 'AI business registry: (1) Automated complex registration handling using AI analysis of ownership structures, industry regulations, and international entity verification. (2) AI-powered annual report review with automated compliance checking and materiality assessment. (3) Real-time beneficial ownership monitoring using X-Road corporate data with AML risk scoring. (4) Proactive regulatory guidance chatbot providing business-specific compliance information.',
    implementationPlan: [
      { phase: 'Complex Registration AI', weeks: 'Weeks 1-6', description: 'Build AI analysis for complex ownership structures. Automate international entity verification. Reduce complex processing to <2 days.' },
      { phase: 'Compliance Monitoring', weeks: 'Weeks 7-12', description: 'Deploy AI annual report review. Automated compliance checking. Proactive filing reminders.' },
      { phase: 'AML Enhancement', weeks: 'Weeks 13-18', description: 'Build real-time beneficial ownership monitoring. AML risk scoring for all registered entities.' },
      { phase: 'Proactive Guidance', weeks: 'Weeks 19-24', description: 'Deploy regulatory guidance chatbot. Business-specific compliance calendar. Reduce late filings by 50%.' },
    ],
    risks: [
      'Automated registration decisions must comply with EU company law directives',
      'AML risk scoring must not create discriminatory outcomes against legitimate businesses from certain jurisdictions',
      'Chatbot regulatory guidance must be accurate — incorrect advice could expose government to liability',
    ],
    dependencies: [
      'e-Business Register platform integration',
      'X-Road access to international company registries for verification',
      'EU Anti-Money Laundering Directive compliance framework',
    ],
  },
  {
    name: 'Digital ID Issuance & Authentication',
    level: 'full',
    currentFTEs: 15,
    currentCost: 900_000,
    volume: '1.34M active eID cards, 400K mobile ID users',
    currentTime: '5 business days for physical ID issuance',
    aiSolution: 'AI-enhanced digital identity with biometric verification, fraud detection, and seamless cross-border authentication under eIDAS.',
    routing: 'Fully Automatable',
    routingQuote: 'Secure digital identity at the speed of light',
    costShift: 'Labor €900K → IT €200K + Labor €300K = €400K saved',
    savings: 400_000,
    automationPercent: 75,
    details: '15 staff managing ID issuance and authentication infrastructure. Estonia\'s eID is foundational to all digital services — AI enhances security and user experience.',
    currentProcess: [
      'eID card application processed at PPA service points — biometric data captured in person',
      'Identity verification performed manually against population registry and existing documents',
      'Card produced at central facility and mailed to citizen — 5-day turnaround',
      'Authentication infrastructure (eID, mobile ID, Smart-ID) monitored by technical team',
      'Fraud detection relies on manual review of suspicious authentication patterns',
    ],
    bottlenecks: [
      '5-day physical ID turnaround: citizens without valid ID cannot access digital services during wait',
      'Manual identity verification: bottleneck at service points during peak periods (elections, ID expiration waves)',
      'Fraud detection lag: suspicious patterns identified hours or days after occurrence',
      'Cross-border authentication: eIDAS technical integration with other EU member states is complex and manual',
    ],
    aiArchitecture: 'AI digital identity platform: (1) AI-powered biometric verification reducing in-person processing time. (2) Real-time fraud detection using ML models analyzing authentication patterns, device fingerprints, and behavioral biometrics. (3) Automated identity proofing for remote issuance of digital credentials (reducing physical visit requirements). (4) Cross-border authentication automation under eIDAS with AI-powered identity matching across EU registries.',
    implementationPlan: [
      { phase: 'Biometric AI', weeks: 'Weeks 1-6', description: 'Deploy AI-enhanced biometric verification. Reduce identity verification time at service points by 60%.' },
      { phase: 'Fraud Detection', weeks: 'Weeks 7-12', description: 'Build real-time authentication fraud detection. Deploy ML models for anomaly detection on 48M monthly events.' },
      { phase: 'Remote Issuance', weeks: 'Weeks 13-18', description: 'Enable remote identity proofing for credential renewal. Reduce physical visit requirements.' },
      { phase: 'eIDAS Automation', weeks: 'Weeks 19-24', description: 'Automate cross-border authentication under eIDAS. AI-powered identity matching with EU member state registries.' },
    ],
    risks: [
      'Digital identity is national security critical — AI must not introduce vulnerabilities into authentication infrastructure',
      'Biometric data handling under GDPR requires strict purpose limitation and storage controls',
      'Remote identity proofing must meet EU eIDAS high assurance level requirements',
    ],
    dependencies: [
      'Population registry biometric data access',
      'Authentication log infrastructure for fraud detection training (48M events/month)',
      'EU eIDAS node connectivity for cross-border authentication',
    ],
  },
  {
    name: 'Inter-Ministry Data Sharing & X-Road Governance',
    level: 'human-in-loop',
    currentFTEs: 10,
    currentCost: 600_000,
    volume: '1.2B X-Road transactions/year, 900+ data services',
    currentTime: '4-8 weeks for new data service onboarding',
    aiSolution: 'AI-optimized data governance with automated service cataloging, intelligent access management, and performance optimization for X-Road infrastructure.',
    routing: 'Human-in-the-Loop',
    routingQuote: 'AI governs the data highway that powers digital Estonia',
    costShift: 'Labor €600K → IT €140K + Labor €280K = €180K saved',
    savings: 180_000,
    automationPercent: 42,
    details: '10 X-Road governance staff managing 900+ data services and 1.2B annual transactions. Service onboarding takes 4-8 weeks — limiting innovation speed.',
    currentProcess: [
      'Ministry requests new X-Road data service — formal application with data model, access requirements, and security assessment',
      'X-Road governance team reviews application against data protection and security policies',
      'Technical onboarding performed by ministry IT team with X-Road team support — configuration, testing, certification',
      'Access management: each consuming ministry must request access to each data service individually',
      'Performance monitoring via dashboards — but no automated capacity planning or optimization',
    ],
    bottlenecks: [
      '4-8 week service onboarding: ministries build workarounds while waiting for X-Road access',
      'Manual access management: 900+ services x multiple consuming ministries = thousands of access decisions',
      'No automated data quality monitoring — consuming ministries discover data issues through application errors',
      'Capacity planning is reactive — performance degradation during peak usage periods',
    ],
    aiArchitecture: 'AI X-Road governance: (1) Automated service cataloging with AI-generated data dictionaries and impact assessments. (2) ML-based access management recommending appropriate data access based on ministry function and existing patterns. (3) Real-time data quality monitoring with automated alerting for schema changes and data anomalies. (4) Predictive capacity management using traffic pattern analysis for proactive scaling. Governance team reviews AI access recommendations, handles complex policy decisions, and drives data architecture strategy.',
    implementationPlan: [
      { phase: 'Service Cataloging', weeks: 'Weeks 1-5', description: 'Build AI-powered service catalog for all 900+ data services. Auto-generate data dictionaries and usage documentation.' },
      { phase: 'Smart Access Management', weeks: 'Weeks 6-12', description: 'Deploy ML-based access recommendation engine. Streamline access approval workflow. Reduce onboarding to <2 weeks.' },
      { phase: 'Data Quality Monitoring', weeks: 'Weeks 13-18', description: 'Deploy real-time data quality monitoring across all X-Road services. Automated alerting for anomalies.' },
      { phase: 'Predictive Infrastructure', weeks: 'Weeks 19-24', description: 'Build predictive capacity management. Auto-scaling based on traffic patterns. Ensure 99.99% availability target.' },
    ],
    risks: [
      'X-Road is critical national infrastructure — AI changes must not impact availability or security',
      'Automated access management must comply with data protection regulations — cannot grant access without proper legal basis',
      'Some ministries may resist automated governance of their data services',
    ],
    dependencies: [
      'X-Road monitoring infrastructure for performance data',
      'Data protection regulation database for automated compliance checking',
      'Ministry IT team coordination for service onboarding improvements',
    ],
  },
  {
    name: 'Public Procurement & E-Tendering',
    level: 'full',
    currentFTEs: 18,
    currentCost: 1_080_000,
    volume: '12,000 tenders/year, €4.2B total procurement value',
    currentTime: '30-90 days per procurement cycle',
    aiSolution: 'AI-powered procurement with automated tender generation, intelligent bid evaluation, and predictive market analysis for optimal procurement strategy.',
    routing: 'Fully Automatable',
    routingQuote: 'Transparent, efficient public procurement at digital speed',
    costShift: 'Labor €1.08M → IT €240K + Labor €400K = €440K saved',
    savings: 440_000,
    automationPercent: 72,
    details: '18 procurement officers across ministries managing €4.2B in annual procurement. Manual processes add 15-20 days to average procurement cycle.',
    currentProcess: [
      'Procurement need identified by ministry — specification written manually in compliance with Public Procurement Act',
      'Tender documents prepared and published on e-Procurement portal — 2-3 weeks for document preparation',
      'Bids received electronically and evaluated manually against published criteria — 1-2 weeks for evaluation',
      'Contract awarded and published — administrative review period of 14 days per regulation',
      'Contract execution monitoring performed via periodic reporting — limited real-time performance tracking',
    ],
    bottlenecks: [
      'Tender document preparation: 2-3 weeks of manual work for each procurement — often similar to previous tenders',
      'Bid evaluation: manual scoring of technical and financial criteria is time-intensive for large tenders (50+ bids)',
      'No market intelligence: procurement officers lack data on market pricing, vendor capacity, and optimal tender timing',
      'Contract monitoring is passive: performance issues discovered through missed deliverables rather than proactive tracking',
    ],
    aiArchitecture: 'AI procurement platform: (1) Automated tender generation using templates from similar historical procurements with AI-optimized specifications. (2) AI bid evaluation assistants scoring technical proposals against criteria with consistency and speed. (3) Market intelligence engine analyzing vendor databases, pricing trends, and competition patterns. (4) Smart contract monitoring with automated performance tracking and early warning for delivery risks. Procurement officers review AI evaluations, handle strategic vendor relationships, and manage high-value complex procurements.',
    implementationPlan: [
      { phase: 'Tender Automation', weeks: 'Weeks 1-6', description: 'Build AI tender generation from historical templates. Reduce document preparation from 3 weeks to 3 days.' },
      { phase: 'Bid Evaluation AI', weeks: 'Weeks 7-14', description: 'Deploy AI-assisted bid evaluation for technical proposals. Human review for final scoring. Ensure EU directive compliance.' },
      { phase: 'Market Intelligence', weeks: 'Weeks 15-20', description: 'Build procurement market intelligence dashboard. Optimal timing and market analysis for major tenders.' },
      { phase: 'Contract Monitoring', weeks: 'Weeks 21-26', description: 'Deploy automated contract performance monitoring. Early warning for delivery risks. Target 20-day cycle reduction.' },
    ],
    risks: [
      'EU Public Procurement Directives require specific evaluation procedures — AI must comply with transparency and equal treatment',
      'AI bid evaluation must be auditable and non-discriminatory — essential for administrative review challenges',
      'Market intelligence must not facilitate anti-competitive behavior or bid-rigging detection evasion',
    ],
    dependencies: [
      'e-Procurement portal integration for tender publication and bid management',
      'Historical procurement database for AI template generation',
      'EU procurement regulations compliance framework',
    ],
  },
];

// ═══════════════════════════════════════════════════════════════════════════════
// ─── Company-Specific Recommendations ────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

// ─── Northwood Insurance Recommendations ───────────────────────────────────────

const northwoodRecommendations: Recommendation[] = [
  {
    current: {
      name: 'Guidewire ClaimCenter',
      cost: 1_800_000,
      users: 280,
      score: 4,
      description: 'Legacy Guidewire ClaimCenter deployment (v9) handling P&C claims across all lines. Limited AI integration — all claim triage, assignment, and settlement performed manually. No NLP for document processing. Settlement recommendations based on adjuster experience rather than data analytics. Mobile capabilities limited to basic status lookup.',
    },
    recommended: {
      name: 'AI-Native Claims Platform',
      cost: 1_200_000,
      description: 'Modern AI-native claims platform with NLP-powered FNOL processing, computer vision for damage assessment, ML-based fraud detection at intake, and AI-recommended settlement ranges. Mobile-first with field adjuster tools including photo AI damage estimation. Real-time claims analytics and automated compliance reporting across all state jurisdictions.',
    },
    annualSavings: 600_000,
  },
  {
    current: {
      name: 'Legacy Underwriting Workbench',
      cost: 680_000,
      users: 45,
      score: 3,
      description: 'Custom-built underwriting workbench from 2015 with manual risk assessment workflow. No predictive modeling — underwriters rely on experience and basic rating manuals. Data enrichment (credit, MVR, property) requires manual ordering. Inconsistent pricing across underwriters with 15% variance on comparable risks. No portfolio-level view for book management.',
    },
    recommended: {
      name: 'AI Underwriting Engine',
      cost: 420_000,
      description: 'AI-powered underwriting platform with automated data enrichment, ML risk scoring trained on 10 years of loss data, and portfolio optimization. Instant decisioning for low-complexity risks. AI copilot for complex risks providing pricing recommendations with consistency enforcement. Real-time portfolio analytics showing impact of each decision on book composition and profitability.',
    },
    annualSavings: 260_000,
  },
  {
    current: {
      name: 'Manual Fraud Review Process',
      cost: 540_000,
      users: 6,
      score: 2,
      description: 'SIU team using manual red flag checklists and adjuster referrals for fraud detection. No systematic pattern analysis across claims. Investigation dossiers compiled manually. Only 3% of claims referred to SIU — industry estimates 10-15% have fraudulent elements. Estimated $4.2M in annual undetected fraud leakage based on industry benchmarks.',
    },
    recommended: {
      name: 'ML Fraud Detection Network',
      cost: 280_000,
      description: 'Graph neural network fraud detection platform analyzing claimant-provider-attorney relationships across entire portfolio. Real-time fraud scoring at FNOL before any payment. NLP analysis of claim narratives for scripted fraud indicators. Social network analysis identifying organized fraud rings. Automated investigation dossier generation for SIU. Expected fraud recovery improvement of $2.1M annually.',
    },
    annualSavings: 260_000,
  },
  {
    current: {
      name: 'Spreadsheet Reinsurance Analysis',
      cost: 320_000,
      users: 4,
      score: 2,
      description: 'Reinsurance portfolio management using Excel spreadsheets for exposure aggregation, cession modeling, and bordereau preparation. Exposure analysis takes 2 weeks per renewal. Limited scenario testing due to manual calculation constraints. No real-time catastrophe exposure monitoring. Bordereau preparation consumes 1 FTE full-time.',
    },
    recommended: {
      name: 'AI Reinsurance Optimization Platform',
      cost: 180_000,
      description: 'AI-powered reinsurance management with real-time exposure aggregation from policy admin and claims systems. Monte Carlo simulation for optimal cession structure modeling. Market intelligence tracking reinsurer pricing and capacity. Automated bordereau generation. Real-time catastrophe exposure monitoring with automated aggregate tracking.',
    },
    annualSavings: 140_000,
  },
];

// ─── Pinnacle Healthcare Recommendations ─────────────────────────────────────

const pinnacleRecommendations: Recommendation[] = [
  {
    current: {
      name: 'Legacy EHR System',
      cost: 480_000,
      users: 85,
      score: 3,
      description: 'On-premise EHR system installed in 2016 with limited interoperability. No FHIR API support. Clinical documentation requires manual entry — providers spend 2 hours/day after-hours on documentation. No integration with patient engagement tools. Reporting limited to pre-built reports with no custom analytics. HL7v2 interfaces only, requiring custom point-to-point integrations for every connected system.',
    },
    recommended: {
      name: 'Cloud-Native EHR with AI',
      cost: 320_000,
      description: 'Modern cloud-native EHR with FHIR R4 API, ambient AI documentation, and integrated patient engagement. Providers dictate notes via AI ambient listening — auto-generated SOAP notes reduce after-hours documentation by 80%. Native telehealth, patient portal, and mobile access. Open API ecosystem for rapid integration with specialty tools. Population health analytics built-in.',
    },
    annualSavings: 160_000,
  },
  {
    current: {
      name: 'Paper Fax Referral System',
      cost: 180_000,
      users: 30,
      score: 2,
      description: 'Referral management via fax machines and phone calls. Referral orders printed from EHR, clinical notes manually assembled, and faxed to specialist offices. No confirmation of receipt — estimated 15% of referrals lost in fax transmission. 35% of referrals never completed by patients with zero tracking or follow-up. Specialist consultation notes received back via fax with poor OCR quality.',
    },
    recommended: {
      name: 'AI Digital Referral Exchange',
      cost: 60_000,
      description: 'Electronic referral network with AI-powered specialist matching based on clinical need, insurance network, and quality outcomes. Automated clinical documentation assembly and transmission. Patient engagement with scheduling assistance and reminders. Closed-loop tracking ensuring consultation completion and note receipt. Analytics on referral patterns and specialist performance.',
    },
    annualSavings: 120_000,
  },
  {
    current: {
      name: 'Manual Medical Coding',
      cost: 420_000,
      users: 6,
      score: 3,
      description: 'Medical coding performed by certified coders reviewing clinical documentation after each encounter. Average 8 minutes per encounter with 12% first-pass denial rate due to coding errors or insufficient documentation. Coding queries bounce between coders and providers adding 3 days per encounter. Documentation improvement (CDI) performed reactively after coding — not integrated into clinical workflow.',
    },
    recommended: {
      name: 'AI-Assisted Coding Engine',
      cost: 180_000,
      description: 'AI-powered medical coding with NLP analysis of clinical documentation for automated ICD-10 and CPT code suggestion. Real-time CDI prompts during documentation — improving code accuracy at the source. Automated claim scrubbing before submission with predictive denial prevention. AI validates coding accuracy against clinical evidence, reducing first-pass denials to <5%. Coders review AI suggestions for complex cases only.',
    },
    annualSavings: 240_000,
  },
  {
    current: {
      name: 'Manual Prior Authorization',
      cost: 420_000,
      users: 6,
      score: 2,
      description: 'Prior authorization processed manually — staff identifies payer requirements, assembles clinical documentation, and submits via fax (55%) or payer portals (35%). Average 45 minutes per request with 30% initial denial rate. Status tracking via manual follow-up calls with average 3 calls per request. Appeals prepared manually at 2 hours each. Patients wait average 5 business days for authorization.',
    },
    recommended: {
      name: 'AI Prior Auth Automation',
      cost: 120_000,
      description: 'Automated prior authorization with payer-specific rule engine, AI-powered clinical documentation assembly from EHR data, and electronic submission via X12 278 transactions. Real-time status tracking eliminates follow-up calls. Automated appeal generation for denials. Target 85% first-pass approval rate and <24-hour turnaround for standard authorizations.',
    },
    annualSavings: 300_000,
  },
];

// ─── Atlas Manufacturing Recommendations ─────────────────────────────────────

const atlasRecommendations: Recommendation[] = [
  {
    current: {
      name: 'Legacy MES Systems',
      cost: 680_000,
      users: 120,
      score: 3,
      description: 'Three different MES platforms across 4 OpCos — one using a system from 2011. Limited IoT integration. Production data entered manually at end of shift. No real-time OEE visibility — calculated weekly from manual reports. SPC charts maintained on paper. No integration with ERP for automated production reporting.',
    },
    recommended: {
      name: 'Cloud MES with AI Analytics',
      cost: 420_000,
      description: 'Unified cloud MES platform across all 4 OpCos with real-time IoT data collection from production equipment. AI-powered OEE optimization with automated downtime analysis and root cause identification. Digital SPC with real-time out-of-control detection. Predictive maintenance integration. Automated production reporting to ERP. Mobile dashboards for floor supervisors.',
    },
    annualSavings: 260_000,
  },
  {
    current: {
      name: 'Paper Quality Logs',
      cost: 280_000,
      users: 14,
      score: 2,
      description: 'Quality inspection data recorded on paper forms at inspection stations. Data entered into QMS spreadsheets at end of shift — 4-8 hour delay for SPC response. No automated defect detection. 2.8% defect escape rate costing $890K/year in customer returns. Root cause analysis manual and averages 5 days. No traceability from customer complaint back to production conditions.',
    },
    recommended: {
      name: 'Digital QMS with Computer Vision',
      cost: 140_000,
      description: 'Digital quality management with tablet-based inspection forms, computer vision automated inspection at key stations, and real-time SPC dashboards. AI defect detection trained on historical defect images. Automated root cause analysis linking defects to production parameters. Full traceability from complaint to production lot, shift, and machine settings. Target <1% defect escape rate.',
    },
    annualSavings: 140_000,
  },
  {
    current: {
      name: 'Spreadsheet Inventory Management',
      cost: 420_000,
      users: 6,
      score: 2,
      description: 'Inventory managed via ERP min/max settings reviewed annually with supplemental Excel tracking. Static reorder points cause simultaneous stockouts (12%) and $6.8M excess inventory. No demand forecasting beyond historical averages. No cross-OpCo inventory visibility. Cycle count accuracy at 97% — insufficient for lean operations. Annual physical inventory costs $180K in labor.',
    },
    recommended: {
      name: 'AI Inventory Optimization',
      cost: 180_000,
      description: 'AI-driven inventory management with ML demand forecasting using sales history, economic indicators, and customer signals. Dynamic safety stock adjusting for lead time variability and service targets. Cross-OpCo inventory visibility with automated transfer recommendations. Predictive obsolescence identification. Target: 7+ inventory turns, <3% stockout rate, $4M excess inventory reduction.',
    },
    annualSavings: 240_000,
  },
  {
    current: {
      name: 'Calendar-Based Maintenance',
      cost: 640_000,
      users: 8,
      score: 3,
      description: 'Preventive maintenance on fixed calendar intervals using basic CMMS. 35% of PM performed unnecessarily while 12% of failures are still unplanned. No IoT sensor data from equipment. Work order scheduling manual. Parts availability unknown until technician arrives at machine — 18% of WOs delayed. Unplanned downtime accounts for 12% of production time ($3.2M annual impact).',
    },
    recommended: {
      name: 'AI Predictive Maintenance Platform',
      cost: 320_000,
      description: 'IoT-connected predictive maintenance with vibration, temperature, and power sensors on critical assets. ML models predict equipment degradation 2-4 weeks before failure. Automated work order generation with parts pre-staging. Maintenance schedule optimization balancing predictive, preventive, and production schedules. Target: 50% reduction in unplanned downtime, 25% reduction in maintenance costs.',
    },
    annualSavings: 320_000,
  },
];

// ─── Northbridge Industries Group Recommendations ────────────────────────────

const northbridgeRecommendations: Recommendation[] = [
  {
    current: {
      name: 'Siloed Division ERPs',
      cost: 4_200_000,
      users: 2_400,
      score: 3,
      description: 'Four different ERP systems across divisions — SAP (Aerospace), Oracle (Energy), NetSuite (Financial Services), and Sage (Health). No unified chart of accounts. Month-end consolidation requires 15-day close process with manual journal entries. No cross-division reporting without external consultants. $4.2M combined annual cost for 4 separate licensing, hosting, and support contracts.',
    },
    recommended: {
      name: 'Unified ERP Platform with AI',
      cost: 2_800_000,
      description: 'Unified cloud ERP with multi-subsidiary architecture supporting all 4 divisions on shared infrastructure. Automated intercompany eliminations and real-time consolidation — reducing close to 3 days. AI-powered financial forecasting and anomaly detection. Cross-division analytics and KPI dashboards. Shared services model for common functions. Maintained division-specific modules for industry requirements.',
    },
    annualSavings: 1_400_000,
  },
  {
    current: {
      name: 'Manual Compliance Processes',
      cost: 1_000_000,
      users: 10,
      score: 2,
      description: 'Compliance managed via spreadsheets across 4 different regulatory regimes — FAA (Aerospace), FERC/NERC (Energy), SEC/FINRA (Financial Services), and FDA/CMS (Health). 180+ requirements tracked manually. Quarterly control testing via sampling. Regulatory change monitoring through newsletter subscriptions. 60% of compliance team capacity consumed by report preparation. Board sees fragmented compliance picture.',
    },
    recommended: {
      name: 'Automated GRC Platform',
      cost: 500_000,
      description: 'AI-powered GRC platform with unified compliance requirements mapping across all 4 regulatory regimes. Continuous control monitoring replacing quarterly sampling. AI regulatory change detection scanning 200+ sources with automated impact assessment. Automated compliance report generation for board and regulators. Real-time compliance dashboards per division. Risk-based testing prioritization.',
    },
    annualSavings: 500_000,
  },
  {
    current: {
      name: 'Legacy Treasury Management',
      cost: 480_000,
      users: 8,
      score: 3,
      description: 'Treasury operations using spreadsheets and basic banking portals across 4 divisions. Cash position compiled manually each morning from separate bank accounts. No cash flow forecasting beyond simple trend projection. FX exposure managed reactively. Intercompany lending tracked in Excel. No automated payment factory — each division processes payments independently.',
    },
    recommended: {
      name: 'Modern AI-Powered TMS',
      cost: 280_000,
      description: 'Cloud treasury management system with real-time cash visibility across all divisions and bank accounts. ML-powered cash flow forecasting with 95%+ accuracy at 30-day horizon. Automated FX hedging recommendations. Centralized payment factory with fraud detection. Intercompany netting and settlement automation. Working capital optimization analytics.',
    },
    annualSavings: 200_000,
  },
  {
    current: {
      name: 'Spreadsheet Strategic Planning',
      cost: 600_000,
      users: 8,
      score: 2,
      description: 'Strategic planning and portfolio analysis performed in PowerPoint and Excel. Quarterly data aggregation takes 3-4 weeks. No real-time competitive intelligence. Portfolio rebalancing analysis uses external consultants at $500K per engagement. Strategic initiative tracking via quarterly review meetings. Board materials prepared manually with 2-3 week lead time.',
    },
    recommended: {
      name: 'AI Strategic Intelligence Platform',
      cost: 320_000,
      description: 'AI-powered strategic planning with real-time portfolio analytics from all 4 division ERPs. Competitive intelligence monitoring using NLP on news, filings, and market data. Monte Carlo scenario modeling for capital allocation. AI-generated board materials with real-time data. Strategic initiative tracking with automated progress assessment. Replace $500K annual consulting spend.',
    },
    annualSavings: 280_000,
  },
  {
    current: {
      name: 'No Data Lake',
      cost: 0,
      users: 0,
      score: 1,
      description: 'Zero unified data infrastructure across 4 divisions. Each division operates independent data silos with different ERPs, CRMs, and operational systems. Cross-division reporting requires manual data pulls taking 3-4 weeks. No ability to train ML models on enterprise-wide data. Every AI initiative blocked by lack of unified data layer. Estimated $8.2M in workflow automation savings cannot be realized without data infrastructure.',
    },
    recommended: {
      name: 'Enterprise Data Lakehouse',
      cost: 480_000,
      description: 'Enterprise Databricks Lakehouse connecting all 4 divisions with Delta Lake for ACID transactions. Unity Catalog for cross-division data governance. Real-time data pipelines from all ERPs, CRMs, and operational systems. MLflow for enterprise ML model lifecycle management. Foundation for all AI initiatives on the roadmap — prerequisite for 78% of planned automation projects.',
    },
    annualSavings: 1_800_000,
  },
];

// ─── Estonia Government Recommendations ──────────────────────────────────────

const estoniaRecommendations: Recommendation[] = [
  {
    current: {
      name: 'Legacy Case Management Systems',
      cost: 2_400_000,
      users: 180,
      score: 3,
      description: 'Multiple legacy case management systems across ministries — some dating to 2008. No unified citizen view across services. Case routing is manual. Document processing requires manual data entry. Cross-ministry cases require phone/email coordination. Average 8-day resolution for citizen service requests. 180,000 requests/month across all ministries with 20% requiring multi-ministry coordination.',
    },
    recommended: {
      name: 'AI-Native Citizen Service Platform',
      cost: 1_400_000,
      description: 'Unified AI-native citizen service platform built on X-Road with NLP-powered request classification and routing. Conversational AI (Estonian + Russian) handling first-line resolution for 60% of common requests. Automated document processing with OCR and data extraction. Cross-ministry orchestration for multi-department requests. Proactive citizen notifications. Target: <2-day average resolution time.',
    },
    annualSavings: 1_000_000,
  },
  {
    current: {
      name: 'Manual Document Processing',
      cost: 1_200_000,
      users: 85,
      score: 2,
      description: 'Government document processing across ministries relies on manual review and data entry. 42,000 permit applications, 340,000 benefit applications, and 12,000 procurement tenders processed annually — each requiring manual document review. OCR quality on scanned documents averages 82% accuracy, requiring manual correction. Cross-referencing citizen data across systems requires manual X-Road queries. Average document processing time: 12 minutes per document.',
    },
    recommended: {
      name: 'AI Document Extraction & Processing',
      cost: 480_000,
      description: 'AI-powered document processing platform with advanced OCR (99%+ accuracy for Estonian/Russian text), intelligent data extraction from structured and unstructured documents, automated cross-referencing via X-Road, and smart validation against regulatory requirements. Handles all document types: permits, benefits applications, tax filings, procurement bids. Reduces manual processing by 80%.',
    },
    annualSavings: 720_000,
  },
  {
    current: {
      name: 'Rules-Based Tax Processing',
      cost: 1_500_000,
      users: 25,
      score: 5,
      description: 'Estonia\'s tax system is already world-leading with 98% e-filing and pre-filled returns. However, audit targeting uses simple rules and random sampling — 60% of audits find no significant issues. VAT compliance monitoring is periodic rather than real-time. Cross-border transaction verification is manual. Corporate return review requires officer judgment for deductions and transfer pricing.',
    },
    recommended: {
      name: 'AI-Enhanced Tax Intelligence',
      cost: 900_000,
      description: 'AI layer on top of existing tax infrastructure: ML audit targeting trained on historical outcomes (target 80% productive audit rate), real-time VAT transaction monitoring for fraud detection, cross-border verification automation via EU data exchange, and AI-assisted corporate return review for complex deductions and transfer pricing. Preserves Estonia\'s world-leading e-filing while adding predictive intelligence.',
    },
    annualSavings: 600_000,
  },
  {
    current: {
      name: 'Manual Procurement Review',
      cost: 1_080_000,
      users: 18,
      score: 3,
      description: 'Public procurement officers manually prepare tender documents (2-3 weeks each), evaluate bids against criteria, and monitor contract performance. 12,000 tenders/year worth €4.2B. Tender preparation is largely repetitive — similar specifications for similar procurements. Bid evaluation is manual and time-intensive for large tenders. No market intelligence for optimal procurement strategy.',
    },
    recommended: {
      name: 'AI Procurement Platform',
      cost: 640_000,
      description: 'AI-powered public procurement with template-based tender generation from historical procurements (3 weeks to 3 days), AI-assisted bid evaluation for technical proposals, market intelligence for pricing and competition analysis, and automated contract performance monitoring. Fully compliant with EU Public Procurement Directives. Smart contract monitoring with early warning for delivery risks.',
    },
    annualSavings: 440_000,
  },
];

// ═══════════════════════════════════════════════════════════════════════════════
// ─── Company Data Lookup Maps ──────────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

type CompanyId = string;

const companyProfiles: Record<string, typeof companyProfile> = {
  meridian: companyProfile,
  hcc: hccCompanyProfile,
  hrsi: hrsiCompanyProfile,
  hsi: hsiCompanyProfile,
  hti: htiCompanyProfile,
  htsi: htsiCompanyProfile,
  he: heCompanyProfile,
  gg: ggCompanyProfile,
  northwood: northwoodCompanyProfile,
  pinnacle: pinnacleCompanyProfile,
  atlas: atlasCompanyProfile,
  northbridge: northbridgeCompanyProfile,
  'nb-aerospace': nbAerospaceCompanyProfile,
  'nb-energy': nbEnergyCompanyProfile,
  'nb-financial': nbFinancialCompanyProfile,
  'nb-health': nbHealthCompanyProfile,
  estonia: estoniaCompanyProfile,
  'ee-finance': eeFinanceCompanyProfile,
  'ee-social': eeSocialCompanyProfile,
  'ee-economic': eeEconomicCompanyProfile,
  'ee-ria': eeRiaCompanyProfile,
};

const companyAiReadiness: Record<string, typeof aiReadinessBreakdown> = {
  meridian: aiReadinessBreakdown,
  hcc: hccAiReadinessBreakdown,
  hrsi: hrsiAiReadinessBreakdown,
  hsi: hsiAiReadinessBreakdown,
  hti: htiAiReadinessBreakdown,
  htsi: htsiAiReadinessBreakdown,
  he: heAiReadinessBreakdown,
  gg: ggAiReadinessBreakdown,
  northwood: northwoodAiReadinessBreakdown,
  pinnacle: pinnacleAiReadinessBreakdown,
  atlas: atlasAiReadinessBreakdown,
  northbridge: northbridgeAiReadinessBreakdown,
  'nb-aerospace': nbAerospaceAiReadinessBreakdown,
  'nb-energy': nbEnergyAiReadinessBreakdown,
  'nb-financial': nbFinancialAiReadinessBreakdown,
  'nb-health': nbHealthAiReadinessBreakdown,
  estonia: estoniaAiReadinessBreakdown,
  'ee-finance': eeFinanceAiReadinessBreakdown,
  'ee-social': eeSocialAiReadinessBreakdown,
  'ee-economic': eeEconomicAiReadinessBreakdown,
  'ee-ria': eeRiaAiReadinessBreakdown,
};

const companyKpis: Record<string, typeof kpis> = {
  meridian: kpis,
  hcc: hccKpis,
  hrsi: hrsiKpis,
  hsi: hsiKpis,
  hti: htiKpis,
  htsi: htsiKpis,
  he: heKpis,
  gg: ggKpis,
  northwood: northwoodKpis,
  pinnacle: pinnacleKpis,
  atlas: atlasKpis,
  northbridge: northbridgeKpis,
  'nb-aerospace': nbAerospaceKpis,
  'nb-energy': nbEnergyKpis,
  'nb-financial': nbFinancialKpis,
  'nb-health': nbHealthKpis,
  estonia: estoniaKpis,
  'ee-finance': eeFinanceKpis,
  'ee-social': eeSocialKpis,
  'ee-economic': eeEconomicKpis,
  'ee-ria': eeRiaKpis,
};

const companyRoadmapPhases: Record<string, typeof roadmapPhases> = {
  meridian: roadmapPhases,
  hcc: hccRoadmapPhases,
  hrsi: hrsiRoadmapPhases,
  hsi: hsiRoadmapPhases,
  hti: htiRoadmapPhases,
  htsi: htsiRoadmapPhases,
  he: heRoadmapPhases,
  gg: ggRoadmapPhases,
  northwood: northwoodRoadmapPhases,
  pinnacle: pinnacleRoadmapPhases,
  atlas: atlasRoadmapPhases,
  northbridge: northbridgeRoadmapPhases,
  'nb-aerospace': nbAerospaceRoadmapPhases,
  'nb-energy': nbEnergyRoadmapPhases,
  'nb-financial': nbFinancialRoadmapPhases,
  'nb-health': nbHealthRoadmapPhases,
  estonia: estoniaRoadmapPhases,
  'ee-finance': eeFinanceRoadmapPhases,
  'ee-social': eeSocialRoadmapPhases,
  'ee-economic': eeEconomicRoadmapPhases,
  'ee-ria': eeRiaRoadmapPhases,
};

const companyTopOpportunities: Record<string, Opportunity[]> = {
  meridian: topOpportunities,
  hcc: hccTopOpportunities,
  hrsi: hrsiTopOpportunities,
  hsi: hsiTopOpportunities,
  hti: htiTopOpportunities,
  htsi: htsiTopOpportunities,
  he: heTopOpportunities,
  gg: ggTopOpportunities,
  northwood: northwoodTopOpportunities,
  pinnacle: pinnacleTopOpportunities,
  atlas: atlasTopOpportunities,
  northbridge: northbridgeTopOpportunities,
  'nb-aerospace': nbAerospaceTopOpportunities,
  'nb-energy': nbEnergyTopOpportunities,
  'nb-financial': nbFinancialTopOpportunities,
  'nb-health': nbHealthTopOpportunities,
  estonia: estoniaTopOpportunities,
  'ee-finance': eeFinanceTopOpportunities,
  'ee-social': eeSocialTopOpportunities,
  'ee-economic': eeEconomicTopOpportunities,
  'ee-ria': eeRiaTopOpportunities,
};

const companyCurrentStack: Record<string, CurrentTool[]> = {
  meridian: currentStack,
  hcc: hccCurrentStack,
  hrsi: hrsiCurrentStack,
  hsi: hsiCurrentStack,
  hti: htiCurrentStack,
  htsi: htsiCurrentStack,
  he: heCurrentStack,
  gg: ggCurrentStack,
  northwood: northwoodCurrentStack,
  pinnacle: pinnacleCurrentStack,
  atlas: atlasCurrentStack,
  northbridge: northbridgeCurrentStack,
  'nb-aerospace': nbAerospaceCurrentStack,
  'nb-energy': nbEnergyCurrentStack,
  'nb-financial': nbFinancialCurrentStack,
  'nb-health': nbHealthCurrentStack,
  estonia: estoniaCurrentStack,
  'ee-finance': eeFinanceCurrentStack,
  'ee-social': eeSocialCurrentStack,
  'ee-economic': eeEconomicCurrentStack,
  'ee-ria': eeRiaCurrentStack,
};

const companyLicenses: Record<string, License[]> = {
  meridian: licenses,
  hcc: hccLicenses,
  hrsi: hrsiLicenses,
  hsi: hsiLicenses,
  hti: htiLicenses,
  htsi: htsiLicenses,
  he: heLicenses,
  gg: ggLicenses,
  northwood: northwoodLicenses,
  pinnacle: pinnacleLicenses,
  atlas: atlasLicenses,
  northbridge: northbridgeLicenses,
  'nb-aerospace': nbAerospaceLicenses,
  'nb-energy': nbEnergyLicenses,
  'nb-financial': nbFinancialLicenses,
  'nb-health': nbHealthLicenses,
  estonia: estoniaLicenses,
  'ee-finance': eeFinanceLicenses,
  'ee-social': eeSocialLicenses,
  'ee-economic': eeEconomicLicenses,
  'ee-ria': eeRiaLicenses,
};

const companyWorkflowSummaries: Record<string, typeof workflowSummary> = {
  meridian: workflowSummary,
  hcc: hccWorkflowSummary,
  hrsi: hrsiWorkflowSummary,
  hsi: hsiWorkflowSummary,
  hti: htiWorkflowSummary,
  htsi: htsiWorkflowSummary,
  he: heWorkflowSummary,
  gg: ggWorkflowSummary,
  northwood: northwoodWorkflowSummary,
  pinnacle: pinnacleWorkflowSummary,
  atlas: atlasWorkflowSummary,
  northbridge: northbridgeWorkflowSummary,
  'nb-aerospace': nbAerospaceWorkflowSummary,
  'nb-energy': nbEnergyWorkflowSummary,
  'nb-financial': nbFinancialWorkflowSummary,
  'nb-health': nbHealthWorkflowSummary,
  estonia: estoniaWorkflowSummary,
  'ee-finance': eeFinanceWorkflowSummary,
  'ee-social': eeSocialWorkflowSummary,
  'ee-economic': eeEconomicWorkflowSummary,
  'ee-ria': eeRiaWorkflowSummary,
};

const companyWorkflowsMap: Record<string, Workflow[]> = {
  meridian: workflows,
  hcc: workflows,
  hrsi: workflows,
  hsi: workflows,
  hti: workflows,
  htsi: workflows,
  he: workflows,
  gg: workflows,
  northwood: northwoodWorkflows,
  pinnacle: pinnacleWorkflows,
  atlas: atlasWorkflows,
  northbridge: northbridgeWorkflows,
  'nb-aerospace': northbridgeWorkflows,
  'nb-energy': northbridgeWorkflows,
  'nb-financial': northbridgeWorkflows,
  'nb-health': northbridgeWorkflows,
  estonia: estoniaWorkflows,
  'ee-finance': estoniaWorkflows,
  'ee-social': estoniaWorkflows,
  'ee-economic': estoniaWorkflows,
  'ee-ria': estoniaWorkflows,
};

const companyRecommendationsMap: Record<string, Recommendation[]> = {
  meridian: recommendations,
  hcc: recommendations,
  hrsi: recommendations,
  hsi: recommendations,
  hti: recommendations,
  htsi: recommendations,
  he: recommendations,
  gg: recommendations,
  northwood: northwoodRecommendations,
  pinnacle: pinnacleRecommendations,
  atlas: atlasRecommendations,
  northbridge: northbridgeRecommendations,
  'nb-aerospace': northbridgeRecommendations,
  'nb-energy': northbridgeRecommendations,
  'nb-financial': northbridgeRecommendations,
  'nb-health': northbridgeRecommendations,
  estonia: estoniaRecommendations,
  'ee-finance': estoniaRecommendations,
  'ee-social': estoniaRecommendations,
  'ee-economic': estoniaRecommendations,
  'ee-ria': estoniaRecommendations,
};

const companyRoiSummaries: Record<string, typeof roiSummary> = {
  meridian: roiSummary,
  hcc: hccRoiSummary,
  hrsi: hrsiRoiSummary,
  hsi: hsiRoiSummary,
  hti: htiRoiSummary,
  htsi: htsiRoiSummary,
  he: heRoiSummary,
  gg: ggRoiSummary,
  northwood: northwoodRoiSummary,
  pinnacle: pinnacleRoiSummary,
  atlas: atlasRoiSummary,
  northbridge: northbridgeRoiSummary,
  'nb-aerospace': nbAerospaceRoiSummary,
  'nb-energy': nbEnergyRoiSummary,
  'nb-financial': nbFinancialRoiSummary,
  'nb-health': nbHealthRoiSummary,
  estonia: estoniaRoiSummary,
  'ee-finance': eeFinanceRoiSummary,
  'ee-social': eeSocialRoiSummary,
  'ee-economic': eeEconomicRoiSummary,
  'ee-ria': eeRiaRoiSummary,
};

const companyAiAgents: Record<string, AIAgent[]> = {
  meridian: meridianAiAgents,
  hcc: hccAiAgents,
  hrsi: hrsiAiAgents,
  hsi: hsiAiAgents,
  hti: htiAiAgents,
  htsi: htsiAiAgents,
  he: heAiAgents,
  gg: ggAiAgents,
  northwood: northwoodAiAgents,
  pinnacle: pinnacleAiAgents,
  atlas: atlasAiAgents,
  northbridge: northbridgeAiAgents,
  'nb-aerospace': nbAerospaceAiAgents,
  'nb-energy': nbEnergyAiAgents,
  'nb-financial': nbFinancialAiAgents,
  'nb-health': nbHealthAiAgents,
  estonia: estoniaAiAgents,
  'ee-finance': eeFinanceAiAgents,
  'ee-social': eeSocialAiAgents,
  'ee-economic': eeEconomicAiAgents,
  'ee-ria': eeRiaAiAgents,
};

const companyDataSources: Record<string, IntegrationDataSource[]> = {
  meridian: meridianDataSources,
  hcc: hccDataSources,
  hrsi: hrsiDataSources,
  hsi: hsiDataSources,
  hti: htiDataSources,
  htsi: htsiDataSources,
  he: heDataSources,
  gg: ggDataSources,
  northwood: northwoodDataSources,
  pinnacle: pinnacleDataSources,
  atlas: atlasDataSources,
  northbridge: northbridgeDataSources,
  'nb-aerospace': nbAerospaceDataSources,
  'nb-energy': nbEnergyDataSources,
  'nb-financial': nbFinancialDataSources,
  'nb-health': nbHealthDataSources,
  estonia: estoniaDataSources,
  'ee-finance': eeFinanceDataSources,
  'ee-social': eeSocialDataSources,
  'ee-economic': eeEconomicDataSources,
  'ee-ria': eeRiaDataSources,
};

const companyVendorHealth: Record<string, IntegrationVendorHealth[]> = {
  meridian: meridianVendorHealth,
  hcc: hccVendorHealth,
  hrsi: hrsiVendorHealth,
  hsi: hsiVendorHealth,
  hti: htiVendorHealth,
  htsi: htsiVendorHealth,
  he: heVendorHealth,
  gg: ggVendorHealth,
  northwood: northwoodVendorHealth,
  pinnacle: pinnacleVendorHealth,
  atlas: atlasVendorHealth,
  northbridge: northbridgeVendorHealth,
  'nb-aerospace': nbAerospaceVendorHealth,
  'nb-energy': nbEnergyVendorHealth,
  'nb-financial': nbFinancialVendorHealth,
  'nb-health': nbHealthVendorHealth,
  estonia: estoniaVendorHealth,
  'ee-finance': eeFinanceVendorHealth,
  'ee-social': eeSocialVendorHealth,
  'ee-economic': eeEconomicVendorHealth,
  'ee-ria': eeRiaVendorHealth,
};

const companyFailureModes: Record<string, IntegrationFailureMode[]> = {
  meridian: meridianFailureModes,
  hcc: hccFailureModes,
  hrsi: hrsiFailureModes,
  hsi: hsiFailureModes,
  hti: htiFailureModes,
  htsi: htsiFailureModes,
  he: heFailureModes,
  gg: ggFailureModes,
  northwood: northwoodFailureModes,
  pinnacle: pinnacleFailureModes,
  atlas: atlasFailureModes,
  northbridge: northbridgeFailureModes,
  'nb-aerospace': nbAerospaceFailureModes,
  'nb-energy': nbEnergyFailureModes,
  'nb-financial': nbFinancialFailureModes,
  'nb-health': nbHealthFailureModes,
  estonia: estoniaFailureModes,
  'ee-finance': eeFinanceFailureModes,
  'ee-social': eeSocialFailureModes,
  'ee-economic': eeEconomicFailureModes,
  'ee-ria': eeRiaFailureModes,
};

const companyMethodologySteps: Record<string, IntegrationMethodologyStep[]> = {
  meridian: meridianMethodologySteps,
  hcc: hccMethodologySteps,
  hrsi: hrsiMethodologySteps,
  hsi: hsiMethodologySteps,
  hti: htiMethodologySteps,
  htsi: htsiMethodologySteps,
  he: heMethodologySteps,
  gg: ggMethodologySteps,
  northwood: northwoodMethodologySteps,
  pinnacle: pinnacleMethodologySteps,
  atlas: atlasMethodologySteps,
  northbridge: northbridgeMethodologySteps,
  'nb-aerospace': nbAerospaceMethodologySteps,
  'nb-energy': nbEnergyMethodologySteps,
  'nb-financial': nbFinancialMethodologySteps,
  'nb-health': nbHealthMethodologySteps,
  estonia: estoniaMethodologySteps,
  'ee-finance': eeFinanceMethodologySteps,
  'ee-social': eeSocialMethodologySteps,
  'ee-economic': eeEconomicMethodologySteps,
  'ee-ria': eeRiaMethodologySteps,
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

export function getWorkflows(companyId: CompanyId): Workflow[] {
  return companyWorkflowsMap[companyId] ?? companyWorkflowsMap.meridian;
}

export function getRecommendations(companyId: CompanyId): Recommendation[] {
  return companyRecommendationsMap[companyId] ?? companyRecommendationsMap.meridian;
}

export function getRoiSummary(companyId: CompanyId) {
  return companyRoiSummaries[companyId] ?? companyRoiSummaries.meridian;
}

export function getAiAgents(companyId: CompanyId) {
  return companyAiAgents[companyId] ?? companyAiAgents.meridian;
}

export function getDataSources(companyId: CompanyId) {
  return companyDataSources[companyId] ?? companyDataSources.meridian;
}

export function getVendorHealth(companyId: CompanyId) {
  return companyVendorHealth[companyId] ?? companyVendorHealth.meridian;
}

export function getFailureModes(companyId: CompanyId) {
  return companyFailureModes[companyId] ?? companyFailureModes.meridian;
}

export function getMethodologySteps(companyId: CompanyId) {
  return companyMethodologySteps[companyId] ?? companyMethodologySteps.meridian;
}
