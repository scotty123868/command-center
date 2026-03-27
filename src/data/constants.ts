// ─── Company Profile ────────────────────────────────────────────────────────

export const companyProfile = {
  name: 'Herzog Companies',
  industry: 'Railroad & Infrastructure Construction',
  employees: 2_800,
  opCos: 7,
  opCoNames: ['Herzog Contracting Corp (HCC)', 'Herzog Railroad Services (HRSI)', 'Herzog Services (HSI)', 'Herzog Technologies (HTI)', 'Herzog Transit Services (HTSI)', 'Herzog Energy', 'Green Group LLC'],
  techSpend: '$12.4M/yr',
  aiReadinessScore: 38,
  holdingPeriod: 'Founded 1969, 57 years in operation',
  ebitdaMargin: '11.8%',
  targetEbitdaMargin: '18%',
};

// ─── AI Readiness Breakdown ─────────────────────────────────────────────────

export const aiReadinessBreakdown = [
  { category: 'Data Infrastructure', score: 25, maxScore: 100, status: 'Critical Gap — siloed systems across 7 divisions, no unified data lake, GPS/LIDAR data from rail testing not centralized, dispatch data trapped in legacy custom system' },
  { category: 'Process Maturity', score: 44, maxScore: 100, status: 'Below Average — some automation in rail testing (TAM-4, GPS ballast trains) but most field ops manual, crew scheduling done via spreadsheets and phone calls' },
  { category: 'Tech Stack Modernity', score: 32, maxScore: 100, status: 'Legacy-Heavy — custom dispatch system built in 2009, aging TAM-4 rail testing software, SAP on-premise, Primavera P6 with no cloud integration' },
  { category: 'Change Readiness', score: 48, maxScore: 100, status: 'Moderate — CEO Brad Lager committed to technology transformation, but field crews and division GMs resistant to changing proven workflows' },
  { category: 'Skills & Training', score: 28, maxScore: 100, status: 'Critical Gap — strong mechanical/railroad expertise but near-zero data science or AI capability, IT team focused on maintaining custom systems' },
];

// ─── KPI Data ───────────────────────────────────────────────────────────────

export const kpis = {
  totalSavings: 5_800_000,
  techScoreBefore: 38,
  techScoreAfter: 86,
  workflowsAnalyzed: 62,
  automationReady: 16,
  unusedLicenseWaste: 2_800_000,
  savingsSparkline: [0, 120_000, 310_000, 580_000, 920_000, 1_400_000, 2_000_000, 2_700_000, 3_500_000, 4_400_000, 5_100_000, 5_800_000],
  scoreSparkline: [38, 40, 44, 49, 55, 61, 67, 72, 77, 81, 84, 86],
  workflowSparkline: [0, 5, 11, 18, 25, 32, 38, 44, 49, 54, 58, 62],
  licenseSparkline: [2_800_000, 2_720_000, 2_580_000, 2_380_000, 2_120_000, 1_840_000, 1_560_000, 1_320_000, 1_120_000, 980_000, 880_000, 820_000],
  headcountImpactSparkline: [0, 0, -2, -5, -9, -14, -18, -22, -26, -30, -33, -36],
};

// ─── Roadmap Phases ─────────────────────────────────────────────────────────

export const roadmapPhases = [
  {
    quarter: 'Q1',
    title: 'Tech Stack Audit + Fleet Intelligence Quick Wins',
    items: ['License audit & reclamation', 'GPS fleet data consolidation', 'Quick-win field automation'],
    status: 'active' as const,
    weekPlan: [
      { week: 1, task: 'Kickoff & stakeholder interviews across all 7 divisions — HCC, HRSI, HSI, HTI, HTSI, Energy, Green Group', owner: 'Sarah Chen (Engagement Lead)' },
      { week: 2, task: 'License usage audit via API pull + manual review of Primavera P6, SAP, AutoCAD, Trimble licenses across divisions', owner: 'Jason Park (DevOps)' },
      { week: 3, task: 'GPS/telematics data assessment — map Trimble fleet data streams, identify consolidation opportunities across 800+ tracked assets', owner: 'Mike Torres (Tech Lead)' },
      { week: 4, task: 'Workflow discovery: 62 processes mapped across rail construction, testing, signals, transit ops, and environmental divisions', owner: 'Sarah Chen (Engagement Lead)' },
      { week: 5, task: 'License reclamation wave 1: Microsoft 365 (1,000 seats) + Primavera P6 (100 seats) + AutoCAD (55 seats)', owner: 'Jason Park (DevOps)' },
      { week: 6, task: 'Quick-win scoring: rank 62 workflows by automation potential — prioritize crew scheduling and safety compliance', owner: 'Sarah Chen (Engagement Lead)' },
      { week: 7, task: 'Salesforce seat reclamation (45 seats) + Trimble Business Center audit (45 inactive seats)', owner: 'Jason Park (DevOps)' },
      { week: 8, task: 'Executive readout to CEO Brad Lager & CFO Eric Bruder: $2.8M license waste identified, fleet intelligence roadmap presented', owner: 'Sarah Chen (Engagement Lead)' },
      { week: 9, task: 'Custom dispatch system assessment — document all integrations, data flows, and API gaps in legacy 2009 system', owner: 'Mike Torres (Tech Lead)' },
      { week: 10, task: 'Data infrastructure mapping: identify all data silos across 7 divisions, GPS/LIDAR data stores, rail testing databases', owner: 'Mike Torres (Tech Lead)' },
      { week: 11, task: 'RFP for Databricks data lakehouse — evaluate against Snowflake for railroad-specific time-series and geospatial data needs', owner: 'Mike Torres (Tech Lead)' },
      { week: 12, task: 'Q1 close: $2.8M in license savings confirmed, Samsara fleet pilot scoped, data lake vendor selected', owner: 'Sarah Chen (Engagement Lead)' },
    ],
  },
  {
    quarter: 'Q2',
    title: 'Field Operations AI Pilots',
    items: ['RailSentry AI upgrade', 'Predictive maintenance pilot', 'Crew scheduling optimization'],
    status: 'upcoming' as const,
    weekPlan: [
      { week: 13, task: 'RailSentry AI upgrade: train computer vision model on 36 months of track defect imagery (240K labeled images from HSI fleet)', owner: 'Priya Sharma (ML Engineering)' },
      { week: 14, task: 'Samsara fleet intelligence deployment: Phase 1 — 200 vehicles across HCC and HRSI divisions', owner: 'Mike Torres (Tech Lead)' },
      { week: 15, task: 'Predictive maintenance model development: train on equipment failure history from 7 divisions (18K maintenance records)', owner: 'Priya Sharma (ML Engineering)' },
      { week: 16, task: 'RailSentry AI validation: target >92% defect detection accuracy on rail surface flaws, gauge anomalies, and tie condition', owner: 'Priya Sharma (ML Engineering)' },
      { week: 17, task: 'Crew scheduling optimization pilot: AI-based scheduling for HRSI division (340 field crew members)', owner: 'Mike Torres (Tech Lead)' },
      { week: 18, task: 'Samsara deployment Phase 2: remaining 600 vehicles across HTI, HTSI, Energy, Green Group divisions', owner: 'Jason Park (DevOps)' },
      { week: 19, task: 'RailSentry AI go-live on HSI testing fleet: AI-enhanced inspection on 4 geometry cars with human verification', owner: 'Priya Sharma (ML Engineering)' },
      { week: 20, task: 'Crew scheduling go-live: AI dispatch for HRSI with supervisor override capability, targeting 22% idle time reduction', owner: 'Mike Torres (Tech Lead)' },
      { week: 21, task: 'Safety compliance automation pilot: auto-generate FRA Form 6180 reports from digital inspection data', owner: 'Jason Park (DevOps)' },
      { week: 22, task: 'Databricks data lake Phase 1: connect HCC project data + HRSI fleet telemetry + HSI rail testing results', owner: 'Mike Torres (Tech Lead)' },
      { week: 23, task: 'Pilot metrics review: RailSentry detection rate, crew utilization improvement, predictive maintenance accuracy', owner: 'Sarah Chen (Engagement Lead)' },
      { week: 24, task: 'Q2 close: 3 AI pilots live, Samsara fully deployed, crew scheduling showing 18% efficiency gain', owner: 'Sarah Chen (Engagement Lead)' },
    ],
  },
  {
    quarter: 'Q3',
    title: 'Cross-Division Data Platform + Scale',
    items: ['Databricks data lake connecting all 7 divisions', 'Equipment utilization optimization', 'AI dispatch system'],
    status: 'upcoming' as const,
    weekPlan: [
      { week: 25, task: 'Databricks data lake Phase 2: connect HTI signal/PTC data + HTSI transit operations + Energy division assets', owner: 'Mike Torres (Tech Lead)' },
      { week: 26, task: 'SAP ERP migration planning: assess NetSuite for multi-division railroad operations (160 users, $520K current spend)', owner: 'Mike Torres (Tech Lead)' },
      { week: 27, task: 'Scale crew scheduling AI to all 7 divisions (2,800 employees), integrate with Kronos/UKG workforce data', owner: 'Priya Sharma (ML Engineering)' },
      { week: 28, task: 'NetSuite pilot: 40 users from HCC finance team, parallel run with SAP for one complete accounting period', owner: 'Jason Park (DevOps)' },
      { week: 29, task: 'Databricks Phase 3: connect Green Group environmental data + unified equipment registry across all divisions', owner: 'Priya Sharma (ML Engineering)' },
      { week: 30, task: 'Automation wave 2: ballast logistics optimization, project estimation AI assist, PTC system data integration', owner: 'Jason Park (DevOps)' },
      { week: 31, task: 'Equipment utilization dashboard live: real-time fleet visibility across all 7 divisions with AI redeployment recommendations', owner: 'Priya Sharma (ML Engineering)' },
      { week: 32, task: 'Procore deployment for project management: migrate from Primavera P6 (180 users), AI-powered scheduling', owner: 'Mike Torres (Tech Lead)' },
      { week: 33, task: 'Automation wave 3: material procurement optimization, environmental compliance auto-reporting, transit scheduling AI', owner: 'Jason Park (DevOps)' },
      { week: 34, task: 'AI-enhanced inspection platform pilot: integrate ultrasonic + LIDAR + vision data for comprehensive rail assessment', owner: 'Priya Sharma (ML Engineering)' },
      { week: 35, task: 'Cross-division data quality audit: reconcile equipment records, resolve naming inconsistencies across 7 divisions', owner: 'Priya Sharma (ML Engineering)' },
      { week: 36, task: 'Q3 close: data lake operational with all 7 division feeds, 38 workflows automated, equipment utilization up 24%', owner: 'Sarah Chen (Engagement Lead)' },
    ],
  },
  {
    quarter: 'Q4',
    title: 'AI-Native Railroad Operations',
    items: ['Predictive track maintenance', 'Autonomous inspection', 'AI safety systems'],
    status: 'upcoming' as const,
    weekPlan: [
      { week: 37, task: 'Predictive track maintenance deployment: ML models predicting rail defects 6-8 weeks before failure across Class 1 network', owner: 'Priya Sharma (ML Engineering)' },
      { week: 38, task: 'Workforce.com deployment: replace Kronos for AI-powered crew scheduling across all 2,800 employees', owner: 'Jason Park (DevOps)' },
      { week: 39, task: 'Autonomous inspection scaling: AI-enhanced geometry cars operating with reduced human oversight on routine corridors', owner: 'Priya Sharma (ML Engineering)' },
      { week: 40, task: 'AI dispatch system full deployment: replace legacy custom dispatch with Samsara + AI routing for all field operations', owner: 'Mike Torres (Tech Lead)' },
      { week: 41, task: 'Automation wave 4: FRA compliance automation, environmental monitoring AI, transit passenger flow optimization', owner: 'Jason Park (DevOps)' },
      { week: 42, task: 'Legacy system decommission: custom dispatch system sunset, Primavera P6 contract termination', owner: 'Mike Torres (Tech Lead)' },
      { week: 43, task: 'AI-native stack validation: all systems integrated across 7 divisions, real-time data flowing through Databricks', owner: 'Jason Park (DevOps)' },
      { week: 44, task: 'Knowledge transfer: division IT teams trained on new stack, operational runbooks complete for all AI systems', owner: 'Sarah Chen (Engagement Lead)' },
      { week: 45, task: 'Final ROI validation: actual vs projected savings reconciliation across all initiatives', owner: 'Sarah Chen (Engagement Lead)' },
      { week: 46, task: 'Board presentation to CEO Brad Lager: transformation metrics, safety improvements, Year 2 AI roadmap', owner: 'Sarah Chen (Engagement Lead)' },
      { week: 47, task: 'Hypercare period: 30-day post-deployment monitoring, model drift detection, performance optimization', owner: 'Mike Torres (Tech Lead)' },
      { week: 48, task: 'Engagement close: AI-native railroad operations live, $5.8M Year 1 savings confirmed', owner: 'Sarah Chen (Engagement Lead)' },
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
  { name: 'Predictive Track Maintenance', category: 'Workflow Automation', savings: 1_400_000, effort: 'High', status: 'identified', priority: 10, timeToValue: 20, confidence: 78 },
  { name: 'Unused License Reclamation', category: 'License Audit', savings: 1_200_000, effort: 'Low', status: 'in-progress', priority: 10, timeToValue: 3, confidence: 97 },
  { name: 'Fleet GPS Intelligence & Utilization', category: 'Data Infrastructure', savings: 980_000, effort: 'Medium', status: 'in-progress', priority: 9, timeToValue: 10, confidence: 86 },
  { name: 'AI Rail Inspection (Ultrasonic + Vision)', category: 'Workflow Automation', savings: 860_000, effort: 'High', status: 'identified', priority: 9, timeToValue: 16, confidence: 82 },
  { name: 'Crew Scheduling Optimization', category: 'Workflow Automation', savings: 720_000, effort: 'Medium', status: 'identified', priority: 8, timeToValue: 12, confidence: 84 },
  { name: 'PTC System Modernization', category: 'Tech Stack', savings: 640_000, effort: 'High', status: 'identified', priority: 8, timeToValue: 18, confidence: 74 },
  { name: 'Equipment Idle Time Reduction', category: 'Data Infrastructure', savings: 580_000, effort: 'Medium', status: 'identified', priority: 7, timeToValue: 14, confidence: 80 },
  { name: 'Automated Safety Compliance (FRA)', category: 'Workflow Automation', savings: 520_000, effort: 'Medium', status: 'identified', priority: 7, timeToValue: 8, confidence: 90 },
  { name: 'Material & Ballast Logistics AI', category: 'Workflow Automation', savings: 480_000, effort: 'Medium', status: 'identified', priority: 6, timeToValue: 12, confidence: 76 },
  { name: 'Transit Operations Efficiency', category: 'Workflow Automation', savings: 440_000, effort: 'Medium', status: 'identified', priority: 6, timeToValue: 14, confidence: 72 },
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
    name: 'Primavera P6',
    category: 'Project Management',
    annualCost: 420_000,
    users: 180,
    score: 4,
    integrationComplexity: 'High',
    migrationWeeks: 16,
    riskLevel: 'Medium',
    dependencies: ['Rail construction scheduling', 'Resource allocation', 'Critical path analysis', 'Multi-division project tracking', 'Client reporting'],
  },
  {
    name: 'Custom Dispatch System',
    category: 'Fleet Management',
    annualCost: 680_000,
    users: 340,
    score: 3,
    integrationComplexity: 'High',
    migrationWeeks: 20,
    riskLevel: 'High',
    dependencies: ['Crew dispatch', 'Equipment tracking', 'Work order management', 'Field communications', 'GPS fleet coordination'],
  },
  {
    name: 'SAP ERP',
    category: 'Finance',
    annualCost: 520_000,
    users: 160,
    score: 3,
    integrationComplexity: 'High',
    migrationWeeks: 24,
    riskLevel: 'High',
    dependencies: ['General ledger', 'AP/AR processing', 'Multi-division financial reporting', 'Tax compliance', 'Project cost accounting'],
  },
  {
    name: 'Trimble GPS Fleet',
    category: 'GPS/Telematics',
    annualCost: 380_000,
    users: 800,
    score: 5,
    integrationComplexity: 'Low',
    migrationWeeks: 6,
    riskLevel: 'Low',
    dependencies: ['Vehicle tracking', 'Equipment location', 'Geofencing', 'Driver behavior monitoring', 'Route optimization'],
  },
  {
    name: 'TAM-4 Rail Testing',
    category: 'Rail Inspection',
    annualCost: 240_000,
    users: 45,
    score: 4,
    integrationComplexity: 'Medium',
    migrationWeeks: 12,
    riskLevel: 'Medium',
    dependencies: ['Track geometry measurement', 'Defect detection', 'Video Track Chart', 'Regulatory compliance data', 'Maintenance planning input'],
  },
  {
    name: 'Kronos/UKG',
    category: 'Workforce Management',
    annualCost: 340_000,
    users: 2_800,
    score: 4,
    integrationComplexity: 'Medium',
    migrationWeeks: 10,
    riskLevel: 'Medium',
    dependencies: ['Time tracking', 'Crew scheduling', 'Payroll integration', 'FRA hours-of-service compliance', 'Union contract rules'],
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
      name: 'Custom Dispatch System',
      cost: 680_000,
      users: 340,
      score: 3,
      description: 'Custom-built dispatch and fleet management system from 2009, maintained by 2 internal developers. Handles crew dispatch, equipment tracking, and work order management across HCC and HRSI divisions. No mobile interface — field supervisors call dispatch center to update status. Zero integration with GPS fleet data despite Trimble tracking all 800+ vehicles. Average dispatch-to-arrival time unknown because system cannot track it. 340 users but no usage analytics to identify inactive accounts.',
    },
    recommended: {
      name: 'Samsara Fleet Intelligence',
      cost: 300_000,
      description: 'Samsara\'s AI-powered fleet management platform provides real-time visibility across all 800+ vehicles and equipment assets. GPS tracking with geofencing, automated dispatch routing using ML-optimized algorithms that reduce drive time by 18% on comparable fleets. Mobile-first interface enables field crews to update work orders, capture photos, and submit safety reports from job sites. Predictive maintenance alerts based on engine diagnostics and usage patterns. Integration with Databricks data lake via REST API for cross-division analytics. Driver safety scoring and dash cam AI for FMCSA compliance.',
    },
    annualSavings: 380_000,
  },
  {
    current: {
      name: 'SAP ERP',
      cost: 520_000,
      users: 160,
      score: 3,
      description: 'On-premise SAP ECC instance serving 7 divisions with 160 named users. Heavy customization for railroad project cost accounting — 280+ custom ABAP objects. Last major upgrade was 2019. Report generation averages 5.1 minutes. No API layer for modern integrations — all data exchange via flat-file IDOC exports. Multi-division consolidation requires 3-day month-end close process. 160 users but SSO logs show only 92 unique logins/month.',
    },
    recommended: {
      name: 'NetSuite',
      cost: 240_000,
      description: 'NetSuite cloud ERP with multi-subsidiary support handles all 7 Herzog divisions with unified chart of accounts and real-time consolidation — eliminates 3-day month-end close. Project cost accounting module built for construction/infrastructure with WBS integration. Native REST API enables real-time sync with Samsara fleet data, Procore project management, and Databricks analytics. Mobile expense capture for field crews. AI-powered financial forecasting using historical project data. Migration path: parallel run for 2 accounting periods, estimated 16-week implementation.',
    },
    annualSavings: 280_000,
  },
  {
    current: {
      name: 'Primavera P6',
      cost: 420_000,
      users: 180,
      score: 4,
      description: 'Oracle Primavera P6 Professional with 180 licenses across HCC, HRSI, and HTI divisions. Strong CPM scheduling capability but no AI-assisted planning. 280 active projects tracked, but resource leveling is manual (project managers spend avg 6 hrs/week on schedule updates). No field mobile access — all updates must be entered from office workstations. Integration with SAP is batch-only (nightly CSV export). 100 of 280 licenses show <2 logins/month.',
    },
    recommended: {
      name: 'Procore + AI',
      cost: 220_000,
      description: 'Procore construction management platform with AI-powered scheduling provides mobile-first project management for railroad construction. Field crews update progress directly from job sites via mobile app, eliminating office-only data entry. AI scheduling assistant optimizes resource allocation across 280+ active projects using historical performance data. Native integration with NetSuite (real-time cost sync), Samsara (equipment availability), and Databricks (predictive analytics). Automated submittals, RFI tracking, and daily log generation. Document management with AI-powered search across project archives.',
    },
    annualSavings: 200_000,
  },
  {
    current: {
      name: 'TAM-4 Rail Testing',
      cost: 240_000,
      users: 45,
      score: 4,
      description: 'Herzog\'s custom TAM-4 rail testing software processes geometry car data for track condition assessment. Handles gauge, cross-level, alignment, and surface measurements from HSI testing fleet. Software is functional but aging — built on legacy architecture with limited AI/ML integration capability. Video Track Chart and SpeedTrax modules provide visual inspection data but require manual review by 20 analysts. No automated defect detection — every anomaly flagged manually.',
    },
    recommended: {
      name: 'AI-Enhanced Inspection Platform',
      cost: 0,
      description: 'Custom AI layer built on top of existing TAM-4 data pipeline using Databricks ML. Computer vision models (fine-tuned on 240K labeled track images) automatically detect rail surface defects, tie degradation, and gauge anomalies with >92% accuracy. LIDAR point cloud analysis for ballast profile assessment. Automated severity scoring reduces manual review time by 70% — analysts focus only on AI-flagged exceptions. Predictive models forecast track degradation 6-8 weeks ahead, enabling proactive maintenance scheduling. Integration with Samsara for real-time geometry car location and Procore for automatic maintenance work order generation. Zero licensing cost — runs on Databricks compute (included in data lake cost).',
    },
    annualSavings: 520_000,
  },
  {
    current: {
      name: 'Kronos/UKG',
      cost: 340_000,
      users: 2_800,
      score: 4,
      description: 'Kronos Workforce Ready (now UKG) deployed across all 2,800 employees for time tracking and basic scheduling. Handles FRA hours-of-service compliance tracking for train crews and union contract rule enforcement. However, crew scheduling itself is manual — division supervisors build weekly schedules in spreadsheets, then enter into Kronos for tracking. No optimization capability — supervisors rely on experience and tribal knowledge to balance crew certifications, travel time, and availability. Estimated 22% crew idle time due to suboptimal scheduling.',
    },
    recommended: {
      name: 'Workforce.com + AI Scheduling',
      cost: 160_000,
      description: 'Workforce.com AI-powered scheduling platform with railroad-specific modules for FRA hours-of-service compliance and union work rules. ML-based scheduling optimizer considers crew certifications, location, travel time, equipment availability, and fatigue risk to generate optimal weekly schedules — targeting 22% idle time reduction to <8%. Mobile app enables real-time schedule visibility, shift swaps, and availability updates. Automated compliance monitoring alerts supervisors before hours-of-service violations occur (currently caught retrospectively). Integration with Samsara for crew location data and NetSuite for payroll sync.',
    },
    annualSavings: 180_000,
  },
  {
    current: {
      name: 'No Data Lake',
      cost: 0,
      users: 0,
      score: 1,
      description: 'Zero centralized data infrastructure across 7 divisions. Each division operates independent data silos: HCC on SAP + Primavera, HRSI on custom dispatch, HSI on TAM-4 testing databases, HTI on proprietary PTC/signal systems, HTSI on transit scheduling software, Energy on standalone asset tracking, Green Group on environmental monitoring databases. Cross-division reporting requires manual data pulls taking 4-5 days/month. GPS/LIDAR data from rail testing generates 2TB/month but sits unanalyzed. No ability to train ML models on historical operational data — every AI initiative blocked by this gap.',
    },
    recommended: {
      name: 'Databricks',
      cost: 280_000,
      description: 'Databricks Lakehouse unifies all 7 division data sources via Delta Lake with ACID transactions and schema enforcement. Unity Catalog provides cross-division data governance. Purpose-built for railroad data: time-series GPS/telematics from Samsara (800+ vehicles), LIDAR point clouds from geometry cars, track geometry measurements from TAM-4, PTC event logs from HTI, and transit ridership data from HTSI. MLflow manages model lifecycle for predictive maintenance, defect detection, and crew optimization. Structured Streaming ingests real-time fleet telemetry. Estimated data footprint: 28TB initial load, 2.5TB/month growth. The data lake is the prerequisite for 78% of the AI initiatives on this roadmap — without it, $4.2M in workflow automation savings cannot be realized.',
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
    aiArchitecture: 'Multi-modal AI pipeline on Databricks: (1) Computer vision model (fine-tuned YOLOv8) processes Video Track Chart frames for automated defect detection — trained on 240K labeled images from 3 years of HSI inspection data. (2) Time-series anomaly detection (Prophet + Isolation Forest ensemble) on geometry measurements identifies degradation trends and predicts maintenance windows 6-8 weeks ahead. (3) LIDAR analysis module using PointNet++ for automated ballast profile assessment and clearance verification. (4) Fusion layer integrates geometry, visual, ultrasonic, and LIDAR data into unified track health score per segment. Human engineers review AI-generated maintenance plans, approve priority rankings, and customize recommendations for specific railroad client requirements.',
    implementationPlan: [
      { phase: 'Data Integration & Labeling', weeks: 'Weeks 1-4', description: 'Consolidate 3 years of geometry, visual, ultrasonic, and LIDAR data from HSI fleet into Databricks lakehouse. Label 240K track images for defect detection training. Build unified track segment schema linking all data sources by milepost and timestamp.' },
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
      'Databricks workspace with GPU compute for model training (estimated $15K/month during development)',
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
      'FRA hours-of-service compliance checked manually against Kronos time records — schedulers must ensure no crew member exceeds 12-hour on-duty limits or violates rest period requirements',
      'Union work rules (UTU, IBEW, LIUNA contracts) verified manually — seniority assignments, overtime distribution, and territory restrictions',
      'Schedule distributed via group text messages and radio calls to field crews — no digital schedule visibility, changes communicated verbally',
      'Day-of adjustments (weather delays, equipment breakdowns, crew absences) handled by dispatch via phone calls — average 8 schedule changes per day across divisions',
      'Post-week reconciliation: schedulers compare planned vs actual hours in Kronos, investigate variances, update next week plan — 6 hrs/week per scheduler',
    ],
    bottlenecks: [
      '22% crew idle time costs estimated $1.8M/yr in unproductive labor — caused by geographic mismatches, certification gaps, and suboptimal travel routing',
      'FRA hours-of-service violations risk: 3 violations in past 12 months resulting in $45K in fines — manual tracking cannot prevent violations when day-of schedule changes occur',
      'No optimization across divisions — HCC crew idle in Kansas while HRSI is short-staffed 80 miles away, no cross-division visibility or sharing mechanism',
      'Schedule changes create cascading conflicts: one crew absence requires average 2.4 hours of phone calls to rearrange 3-4 other assignments',
      'Zero data-driven scheduling: decisions based on supervisor intuition and personal relationships rather than optimization algorithms considering travel time, certification match, and equipment proximity',
    ],
    aiArchitecture: 'Workforce.com AI scheduling engine with railroad-specific constraint modeling: FRA hours-of-service rules, union contract seniority and overtime provisions, crew certification matrix (42 distinct certifications tracked), equipment qualification requirements, and GPS-based travel time optimization using Samsara real-time vehicle positions. ML optimizer (constraint satisfaction + reinforcement learning) generates optimal weekly schedules maximizing crew utilization while respecting all regulatory and contractual constraints. Real-time rescheduling module handles day-of disruptions (weather, equipment, absence) with automated alternative crew identification and dispatch. Mobile app provides real-time schedule visibility, shift swap requests, and availability updates. Integration with Kronos for automatic time record population and compliance verification.',
    implementationPlan: [
      { phase: 'Constraint Modeling', weeks: 'Weeks 1-3', description: 'Model all FRA hours-of-service rules, union contract provisions, crew certifications, and equipment qualifications in Workforce.com engine. Map 42 certification types and cross-division sharing rules.' },
      { phase: 'Historical Optimization', weeks: 'Weeks 4-7', description: 'Train scheduling optimizer on 12 months of actual crew assignments and project outcomes. Identify optimization opportunities. Benchmark AI schedules against historical manual schedules.' },
      { phase: 'Pilot Deployment', weeks: 'Weeks 8-11', description: 'Deploy AI scheduling for HRSI division (340 crew members). Supervisor override capability for all AI recommendations. Measure idle time reduction, compliance improvement, and crew satisfaction.' },
      { phase: 'Full Rollout', weeks: 'Weeks 12-16', description: 'Expand to all 7 divisions (2,800 employees). Enable cross-division crew sharing. Automated dispatch via mobile app. Kronos integration for real-time compliance monitoring.' },
    ],
    risks: [
      'Union resistance to AI-driven scheduling — UTU and IBEW contracts have seniority-based assignment provisions that must be strictly honored by the algorithm',
      'FRA hours-of-service compliance is safety-critical — algorithm must be validated against all Part 228 requirements before any autonomous scheduling',
      'Cross-division crew sharing requires executive mandate — division GMs have historically resisted sharing their best crews',
      'Mobile app adoption by field crews (avg age 44) — must demonstrate clear time-saving benefit within first week',
    ],
    dependencies: [
      'Workforce.com railroad module configuration (estimated 4-week setup with vendor professional services)',
      'Samsara GPS integration for real-time crew location data',
      'Kronos/UKG API access for time record sync and compliance data',
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
    aiSolution: 'Samsara fleet intelligence platform with AI-powered utilization optimization. Predictive maintenance using engine diagnostics and usage patterns. Cross-division equipment sharing with automated transfer recommendations.',
    routing: 'Human-in-the-Loop',
    routingQuote: 'You cannot optimize what you cannot see across your divisions',
    costShift: 'Labor $960K → IT $240K + Labor $340K = $380K saved',
    savings: 380_000,
    automationPercent: 50,
    details: '12 FTEs managing fleet across 7 divisions. 800+ vehicles and heavy equipment. No cross-division visibility, 18% equipment idle rate, $580K in duplicate rentals last year.',
    currentProcess: [
      'Each division maintains independent equipment tracking — HCC in Primavera P6, HRSI in custom dispatch, others in Excel spreadsheets',
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
    aiArchitecture: 'Samsara fleet management with Databricks analytics layer. Real-time GPS tracking and geofencing for all 800+ assets. Engine diagnostic data (J1939/OBD-II) feeds ML-based predictive maintenance models trained on 3 years of maintenance records (12K work orders). Equipment utilization dashboard provides cross-division visibility with AI-generated transfer recommendations when idle assets exist within 100-mile radius of active demand. Fuel analytics: real-time consumption monitoring with anomaly detection for theft and inefficiency. Automated maintenance scheduling based on actual equipment condition (vibration analysis, oil analysis data, engine hours) rather than calendar intervals.',
    implementationPlan: [
      { phase: 'Fleet Onboarding', weeks: 'Weeks 1-4', description: 'Install Samsara hardware on all 800+ vehicles and equipment. Configure geofencing for all job sites and yards. Build unified equipment registry across 7 divisions.' },
      { phase: 'Data Integration & Modeling', weeks: 'Weeks 5-9', description: 'Connect Samsara telemetry to Databricks. Train predictive maintenance models on historical work orders. Build utilization analytics and cross-division matching algorithms.' },
      { phase: 'Dashboard & Recommendations', weeks: 'Weeks 10-13', description: 'Deploy executive fleet dashboard showing real-time utilization across all divisions. Enable AI-generated transfer recommendations. Implement automated rental prevention alerts.' },
      { phase: 'Optimization & Predictive', weeks: 'Weeks 14-18', description: 'Activate predictive maintenance scheduling. Deploy fuel analytics with theft detection. Implement condition-based maintenance replacing calendar-based schedules.' },
    ],
    risks: [
      'Division GM resistance to centralized fleet visibility — framing as resource optimization not oversight is critical for adoption',
      'Samsara hardware installation requires scheduled downtime for each vehicle — coordinate with project schedules to minimize operational impact',
      'Predictive maintenance models need 6+ months of Samsara telemetry data before predictions are reliable — interim period relies on historical data',
      'Heavy equipment in remote locations may have connectivity gaps — offline data caching and sync required',
    ],
    dependencies: [
      'Samsara enterprise contract (800+ vehicle tier, estimated $380K/yr including hardware)',
      'Databricks workspace for analytics (shared with other workloads)',
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
      'FRA Form 6180 (Railroad Accident/Incident Reports) compiled manually from incident reports, Kronos time data, and medical records — 4.2 hours per report',
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
    aiArchitecture: 'Mobile-first safety platform with AI analytics layer on Databricks. Digital inspection forms via mobile app replace paper — field supervisors complete inspections with guided checklists, photo capture, and GPS-stamped submissions. Automated FRA Form 6180 generation from structured incident data with AI-assisted narrative generation (GPT-4 with FRA regulatory language fine-tuning). Predictive safety analytics: ML models (gradient boosted trees) trained on 5 years of incident data identify leading indicators — weather conditions, crew fatigue patterns, equipment age, and work type combinations that correlate with elevated risk. Real-time compliance dashboard monitoring FRA, OSHA, and state DOT requirements across all 7 divisions. Automated audit trail eliminates 3-week annual preparation.',
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
    aiArchitecture: 'AI-assisted estimation platform on Databricks with RAG pipeline for historical project data. Document ingestion: process 5 years of completed project files (cost reports, change orders, subcontractor invoices) into structured cost database indexed by work type, geography, railroad client, and track class. GPT-4 processes bid package scope documents and auto-generates preliminary quantity takeoff estimates based on drawing analysis and natural language specifications. ML-based cost estimation model (XGBoost) trained on historical project costs predicts unit rates with confidence intervals, adjusting for inflation, geography, and seasonal factors. Win/loss prediction model identifies optimal pricing strategy based on historical bid outcomes, client relationship factors, and competitive landscape. Human estimators review AI-generated quantities, apply judgment to risk factors, and make final pricing decisions.',
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
      'Databricks workspace with document processing capability',
      'Historical project cost archive: 5 years of data from all divisions, currently in disparate file systems',
      'CFO Eric Bruder approval for bid data access controls and security classification',
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
    aiArchitecture: 'AI logistics platform on Databricks integrating Samsara fleet GPS, Procore project schedules, and quarry inventory systems. Demand prediction model (LSTM neural network) forecasts material needs by project site 2-3 weeks ahead based on project schedule analysis, historical consumption patterns, and weather forecasts. Route optimization engine (modified vehicle routing problem solver) minimizes delivery cost considering track window availability, train capacity, and multi-stop delivery efficiency. Automated track window request system generates optimal delivery schedules for Class 1 railroad coordination. Real-time material tracking from quarry to job site with automated delivery confirmation via GPS geofencing. Surplus material matching: AI identifies excess material at completed sites and routes to active projects within delivery radius.',
    implementationPlan: [
      { phase: 'Data Integration', weeks: 'Weeks 1-4', description: 'Connect quarry inventory systems, Samsara fleet GPS, and Procore project schedules into Databricks. Build material demand history database from 3 years of delivery records.' },
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
      'Samsara GPS tracking on all ballast trains and delivery vehicles',
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
    aiArchitecture: 'Deep learning pipeline for multi-modal rail flaw detection on Databricks. Primary model: 1D convolutional neural network trained on 5 years of ultrasonic B-scan data (18M labeled signal segments) for automated defect classification — transverse defects, detail fractures, bolt hole cracks, and 12 additional flaw types. Signal processing layer filters rail-dependent noise patterns to reduce false positives. Fusion module integrates ultrasonic findings with geometry measurements and visual inspection data from same track segment for contextual defect assessment. Flaw growth prediction model (recurrent neural network) trained on longitudinal testing data forecasts defect progression and recommends re-test intervals. All AI detections require human verification before reporting — system designed to reduce false positives and catch defects missed by human operators, not to replace certified inspectors.',
    implementationPlan: [
      { phase: 'Data Pipeline & Labeling', weeks: 'Weeks 1-5', description: 'Build ETL pipeline for ultrasonic B-scan data into Databricks. Label 5 years of historical testing data (18M signal segments) with confirmed defect classifications. Create training/validation/test splits stratified by defect type and rail condition.' },
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
      'Databricks GPU compute for model training on 18M+ signal segments',
      'HSI testing fleet data export pipeline — current proprietary format needs converter',
      'Railroad client data sharing agreements for model training (BNSF, UP, CSX, NS contracts)',
      'Edge computing hardware assessment for testing car deployment — estimated $25K per car for inference-capable hardware',
      'FRA regulatory consultation on AI-assisted inspection reporting requirements',
    ],
  },
];

export const workflowSummary = {
  total: 62,
  fullyAutomatable: 16,
  humanInLoop: 32,
  humanRequired: 14,
  currentLaborSpend: 8_200_000,
  potentialSavings: 3_800_000,
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
  { vendor: 'SAP ERP', totalLicenses: 250, active90d: 160, inactive: 90, annualWaste: 360_000, action: 'Reclaim 90 seats → migrate to NetSuite in Q3', costPerLicense: 4_000, department: 'Finance & Accounting (all divisions)', lastAuditDate: '2025-11-02', trend: [78, 72, 68, 65, 64, 64], complianceRisk: false },
  { vendor: 'AutoCAD/Civil 3D', totalLicenses: 120, active90d: 65, inactive: 55, annualWaste: 440_000, action: 'Reclaim 55 seats — consolidate to engineering department only', costPerLicense: 8_000, department: 'Engineering & Design (HCC, HTI)', lastAuditDate: '2025-08-20', trend: [68, 62, 58, 55, 54, 54], complianceRisk: true },
  { vendor: 'Kronos/UKG', totalLicenses: 2_800, active90d: 2_200, inactive: 600, annualWaste: 180_000, action: 'Reclaim 600 inactive → migrate to Workforce.com in Q4', costPerLicense: 300, department: 'HR / All Divisions (workforce-wide)', lastAuditDate: '2026-01-10', trend: [88, 85, 82, 80, 79, 79], complianceRisk: false },
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
    solution: 'Deployed Samsara fleet intelligence across all 800+ assets. Built Databricks analytics layer for cross-division visibility. AI-generated equipment transfer recommendations.',
    impact: [
      '$580K/yr in duplicate rental elimination',
      '18% idle rate reduced to 6% through cross-division sharing',
      'Predictive maintenance reducing unplanned downtime by 34%',
    ],
    quote: 'We had seven divisions buying the same equipment because nobody could see what we already owned.',
    totalImpact: 980_000,
    tags: ['Fleet Intelligence', 'Samsara', 'Railroad', 'Equipment Utilization'],
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
    solution: 'Deployed Workforce.com AI scheduling with railroad-specific constraint modeling for FRA compliance and union work rules. Cross-division crew sharing enabled.',
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
      'New AI-native tools (Samsara, Procore, Workforce.com) increased field productivity 28%',
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
  workflowAutomation: 3_800_000,
  licenseRecovery: 2_800_000,
  implementationCosts: 3_000_000,
  netYear1: 5_800_000,
  year2Projected: 8_700_000,
};


// ═══════════════════════════════════════════════════════════════════════════════
// ─── Multi-Company Data ────────────────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

// ─── Oakwood Insurance Group ──────────────────────────────────────────────────

const oakwoodCompanyProfile = {
  name: 'Oakwood Insurance Group',
  industry: 'Insurance',
  employees: 800,
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
  unusedLicenseWaste: 1_601_000,
  savingsSparkline: [0, 60_000, 150_000, 290_000, 460_000, 680_000, 960_000, 1_300_000, 1_720_000, 2_280_000, 3_000_000, 3_800_000],
  scoreSparkline: [41, 43, 46, 50, 54, 58, 62, 66, 70, 73, 76, 78],
  workflowSparkline: [0, 3, 7, 12, 17, 22, 26, 30, 33, 35, 37, 38],
  licenseSparkline: [1_601_000, 1_560_000, 1_480_000, 1_360_000, 1_200_000, 1_050_000, 920_000, 810_000, 730_000, 680_000, 650_000, 630_000],
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
  unusedLicenseWaste: 634_000,
  savingsSparkline: [0, 30_000, 80_000, 160_000, 270_000, 410_000, 580_000, 790_000, 1_040_000, 1_340_000, 1_600_000, 1_900_000],
  scoreSparkline: [28, 30, 33, 37, 41, 46, 51, 56, 60, 64, 68, 71],
  workflowSparkline: [0, 2, 5, 8, 11, 14, 16, 18, 20, 22, 23, 24],
  licenseSparkline: [634_000, 625_000, 595_000, 550_000, 495_000, 440_000, 390_000, 345_000, 310_000, 285_000, 268_000, 255_000],
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
  savingsSparkline: [0, 1_100_000, 2_750_000, 4_950_000, 6_600_000, 8_250_000, 9_900_000, 11_000_000],
  scoreSparkline: [52, 58, 64, 70, 76, 82, 86, 88],
  workflowSparkline: [0, 22, 48, 82, 110, 140, 168, 184],
  licenseSparkline: [9_040_000, 7_200_000, 5_400_000, 3_600_000, 2_100_000, 1_200_000, 700_000, 480_000],
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
  workflowsAnalyzed: 52,
  automationReady: 10,
  unusedLicenseWaste: 820_000,
  savingsSparkline: [0, 300_000, 750_000, 1_200_000, 1_650_000, 2_100_000, 2_550_000, 3_000_000],
  scoreSparkline: [46, 52, 58, 64, 70, 76, 82, 85],
  workflowSparkline: [0, 6, 12, 22, 30, 38, 46, 52],
  licenseSparkline: [820_000, 720_000, 600_000, 480_000, 360_000, 260_000, 180_000, 120_000],
  headcountImpactSparkline: [0, -2, -6, -12, -18, -24, -28, -32],
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
      { week: 15, task: 'Board presentation: $6.2M Year 1 savings confirmed, Year 2 roadmap ($10.5M target)', owner: 'OpCo General Manager' },
      { week: 16, task: 'Hypercare and continuous improvement: AI model retraining, process optimization', owner: 'Quality Systems Director' },
    ],
  },
];

const nbAerospaceTopOpportunities: Opportunity[] = [
  { name: 'Flight Certification Automation', category: 'Regulatory', savings: 1_400_000, effort: 'High', status: 'in-progress', priority: 10, timeToValue: 14, confidence: 82 },
  { name: 'Supplier Quality AI Portal', category: 'Supply Chain', savings: 1_200_000, effort: 'Medium', status: 'in-progress', priority: 9, timeToValue: 10, confidence: 88 },
  { name: 'MRO Scheduling Optimization', category: 'Maintenance', savings: 1_000_000, effort: 'High', status: 'identified', priority: 8, timeToValue: 16, confidence: 78 },
  { name: 'Non-Conformance Report Automation', category: 'Quality', savings: 800_000, effort: 'Medium', status: 'identified', priority: 8, timeToValue: 8, confidence: 90 },
  { name: 'Digital Thread Integration', category: 'Data Infrastructure', savings: 1_200_000, effort: 'High', status: 'in-progress', priority: 9, timeToValue: 20, confidence: 74 },
  { name: 'License Consolidation (PLM/CAD)', category: 'License Audit', savings: 820_000, effort: 'Low', status: 'in-progress', priority: 10, timeToValue: 4, confidence: 96 },
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
  { vendor: 'Windchill PLM', totalLicenses: 480, active90d: 340, inactive: 140, annualWaste: 320_000, action: 'Reclaim 140 inactive seats + consolidate with TeamCenter users', costPerLicense: 2_280, department: 'Engineering / Product Design', lastAuditDate: '2026-01-20', trend: [82, 76, 72, 68, 66, 71], complianceRisk: false },
  { vendor: 'IBM DOORS', totalLicenses: 200, active90d: 120, inactive: 80, annualWaste: 240_000, action: 'Migrate to modern ALM — reclaim all legacy seats', costPerLicense: 3_000, department: 'Systems Engineering', lastAuditDate: '2026-02-05', trend: [75, 68, 62, 58, 55, 60], complianceRisk: true },
  { vendor: 'TeamCenter', totalLicenses: 360, active90d: 280, inactive: 80, annualWaste: 160_000, action: 'Reclaim 80 seats from non-engineering departments', costPerLicense: 2_000, department: 'Engineering / Simulation', lastAuditDate: '2026-01-10', trend: [88, 84, 80, 76, 74, 78], complianceRisk: false },
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
  unusedLicenseWaste: 1_100_000,
  savingsSparkline: [0, 340_000, 850_000, 1_530_000, 2_040_000, 2_550_000, 3_060_000, 3_400_000],
  scoreSparkline: [38, 44, 50, 58, 64, 72, 78, 84],
  workflowSparkline: [0, 6, 14, 22, 30, 38, 46, 52],
  licenseSparkline: [1_100_000, 960_000, 800_000, 640_000, 480_000, 340_000, 240_000, 160_000],
  headcountImpactSparkline: [0, -3, -8, -16, -24, -32, -38, -42],
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
      { week: 15, task: 'Board presentation: $7.4M Year 1 savings confirmed, Year 2 roadmap ($12.8M target)', owner: 'OpCo General Manager' },
      { week: 16, task: 'Hypercare and continuous improvement: AI model retraining, NERC CIP re-certification', owner: 'OT Security Director' },
    ],
  },
];

const nbEnergyTopOpportunities: Opportunity[] = [
  { name: 'Grid Load Balancing AI', category: 'Operations', savings: 1_800_000, effort: 'High', status: 'in-progress', priority: 10, timeToValue: 16, confidence: 80 },
  { name: 'Pipeline Integrity Monitoring', category: 'Safety', savings: 1_400_000, effort: 'High', status: 'identified', priority: 9, timeToValue: 18, confidence: 76 },
  { name: 'Predictive Maintenance (Substations)', category: 'Maintenance', savings: 1_200_000, effort: 'Medium', status: 'in-progress', priority: 9, timeToValue: 12, confidence: 86 },
  { name: 'Outage Prediction & Response', category: 'Grid Management', savings: 1_000_000, effort: 'High', status: 'identified', priority: 8, timeToValue: 14, confidence: 82 },
  { name: 'NERC CIP Compliance Automation', category: 'Regulatory', savings: 900_000, effort: 'Medium', status: 'in-progress', priority: 8, timeToValue: 8, confidence: 92 },
  { name: 'License Consolidation (SCADA/GIS)', category: 'License Audit', savings: 1_100_000, effort: 'Low', status: 'in-progress', priority: 10, timeToValue: 4, confidence: 95 },
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
  { vendor: 'OSIsoft PI', totalLicenses: 600, active90d: 420, inactive: 180, annualWaste: 480_000, action: 'Reclaim 180 inactive seats + migrate to cloud-native historian', costPerLicense: 2_667, department: 'Operations / Engineering', lastAuditDate: '2026-01-25', trend: [80, 74, 70, 66, 64, 70], complianceRisk: false },
  { vendor: 'GE SCADA', totalLicenses: 240, active90d: 180, inactive: 60, annualWaste: 280_000, action: 'Optimize license tiers — downgrade 60 to monitoring-only', costPerLicense: 4_667, department: 'Grid Operations', lastAuditDate: '2026-02-10', trend: [85, 80, 76, 72, 70, 75], complianceRisk: true },
  { vendor: 'Esri ArcGIS', totalLicenses: 480, active90d: 360, inactive: 120, annualWaste: 200_000, action: 'Reclaim 120 seats from non-field departments', costPerLicense: 1_667, department: 'Field Operations / GIS', lastAuditDate: '2026-01-05', trend: [88, 84, 80, 76, 74, 75], complianceRisk: false },
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
  unusedLicenseWaste: 680_000,
  savingsSparkline: [0, 190_000, 475_000, 855_000, 1_140_000, 1_425_000, 1_710_000, 1_900_000],
  scoreSparkline: [62, 66, 70, 76, 80, 84, 88, 91],
  workflowSparkline: [0, 4, 9, 16, 22, 28, 32, 36],
  licenseSparkline: [680_000, 600_000, 500_000, 400_000, 300_000, 220_000, 160_000, 100_000],
  headcountImpactSparkline: [0, -2, -4, -8, -14, -18, -24, -28],
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
      { week: 15, task: 'Board presentation: $5.0M Year 1 savings confirmed, Year 2 roadmap ($8.4M target)', owner: 'OpCo General Manager' },
      { week: 16, task: 'Hypercare and continuous improvement: model monitoring, drift detection, retraining cycles', owner: 'Quantitative Research Lead' },
    ],
  },
];

const nbFinancialTopOpportunities: Opportunity[] = [
  { name: 'KYC/AML Automation', category: 'Compliance', savings: 1_200_000, effort: 'Medium', status: 'in-progress', priority: 10, timeToValue: 10, confidence: 88 },
  { name: 'Trade Settlement STP', category: 'Operations', savings: 900_000, effort: 'Medium', status: 'in-progress', priority: 9, timeToValue: 8, confidence: 92 },
  { name: 'Regulatory Reporting Automation', category: 'Regulatory', savings: 800_000, effort: 'Medium', status: 'identified', priority: 9, timeToValue: 12, confidence: 86 },
  { name: 'Portfolio Risk AI Optimization', category: 'Risk', savings: 700_000, effort: 'High', status: 'identified', priority: 8, timeToValue: 16, confidence: 78 },
  { name: 'Client Reporting AI', category: 'Client Services', savings: 600_000, effort: 'Low', status: 'in-progress', priority: 7, timeToValue: 6, confidence: 94 },
  { name: 'License Consolidation (Terminal/Data)', category: 'License Audit', savings: 680_000, effort: 'Low', status: 'in-progress', priority: 10, timeToValue: 4, confidence: 96 },
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
  { vendor: 'Bloomberg Terminal', totalLicenses: 180, active90d: 140, inactive: 40, annualWaste: 320_000, action: 'Reclaim 40 inactive terminals + optimize to B-PIPE for data-only users', costPerLicense: 8_000, department: 'Trading / Research', lastAuditDate: '2026-01-15', trend: [88, 84, 80, 76, 74, 78], complianceRisk: false },
  { vendor: 'Murex MX.3', totalLicenses: 120, active90d: 98, inactive: 22, annualWaste: 180_000, action: 'Reclaim 22 seats from non-trading support staff', costPerLicense: 8_180, department: 'Trading / Operations', lastAuditDate: '2026-02-01', trend: [90, 86, 82, 80, 78, 82], complianceRisk: false },
  { vendor: 'Refinitiv Eikon', totalLicenses: 140, active90d: 100, inactive: 40, annualWaste: 120_000, action: 'Consolidate with Bloomberg where overlap exists', costPerLicense: 3_000, department: 'Research / Sales', lastAuditDate: '2026-01-20', trend: [82, 76, 72, 68, 66, 71], complianceRisk: false },
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
  unusedLicenseWaste: 920_000,
  savingsSparkline: [0, 270_000, 675_000, 1_215_000, 1_620_000, 2_025_000, 2_430_000, 2_700_000],
  scoreSparkline: [55, 60, 65, 70, 76, 82, 86, 89],
  workflowSparkline: [0, 5, 12, 20, 26, 32, 38, 44],
  licenseSparkline: [920_000, 800_000, 680_000, 540_000, 400_000, 280_000, 180_000, 120_000],
  headcountImpactSparkline: [0, -2, -6, -12, -18, -26, -32, -38],
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
      { week: 15, task: 'Board presentation: $6.2M Year 1 savings confirmed, Year 2 roadmap ($10.8M target)', owner: 'OpCo General Manager' },
      { week: 16, task: 'Hypercare and continuous improvement: AI model retraining, GxP re-validation cycles', owner: 'Clinical Systems Director' },
    ],
  },
];

const nbHealthTopOpportunities: Opportunity[] = [
  { name: 'Clinical Trial Patient Recruitment AI', category: 'Clinical Ops', savings: 1_400_000, effort: 'High', status: 'in-progress', priority: 10, timeToValue: 14, confidence: 82 },
  { name: 'Pharmacovigilance Automation', category: 'Drug Safety', savings: 1_200_000, effort: 'Medium', status: 'in-progress', priority: 9, timeToValue: 10, confidence: 88 },
  { name: 'Electronic Batch Record Deployment', category: 'Manufacturing', savings: 800_000, effort: 'High', status: 'identified', priority: 8, timeToValue: 16, confidence: 80 },
  { name: 'Regulatory Submission Automation', category: 'Regulatory', savings: 1_000_000, effort: 'Medium', status: 'identified', priority: 9, timeToValue: 12, confidence: 84 },
  { name: 'Lab Data Capture Automation', category: 'R&D', savings: 600_000, effort: 'Medium', status: 'identified', priority: 7, timeToValue: 8, confidence: 90 },
  { name: 'License Consolidation (Veeva/LIMS)', category: 'License Audit', savings: 920_000, effort: 'Low', status: 'in-progress', priority: 10, timeToValue: 4, confidence: 95 },
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
  { vendor: 'Veeva Vault', totalLicenses: 720, active90d: 540, inactive: 180, annualWaste: 380_000, action: 'Reclaim 180 inactive seats from completed trial teams', costPerLicense: 2_111, department: 'Clinical / Regulatory', lastAuditDate: '2026-01-18', trend: [85, 80, 76, 72, 70, 75], complianceRisk: false },
  { vendor: 'LabWare LIMS', totalLicenses: 400, active90d: 280, inactive: 120, annualWaste: 260_000, action: 'Reclaim 120 seats + evaluate LIMS replacement', costPerLicense: 2_167, department: 'Lab Operations / QC', lastAuditDate: '2026-02-05', trend: [82, 76, 70, 66, 64, 70], complianceRisk: true },
  { vendor: 'Medidata Rave', totalLicenses: 360, active90d: 280, inactive: 80, annualWaste: 180_000, action: 'Reclaim 80 seats from inactive study coordinators', costPerLicense: 2_250, department: 'Clinical Data Management', lastAuditDate: '2026-01-10', trend: [88, 84, 80, 78, 76, 78], complianceRisk: false },
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
  savingsSparkline: [0, 800_000, 2_000_000, 3_600_000, 4_800_000, 6_000_000, 7_200_000, 8_000_000],
  scoreSparkline: [68, 72, 76, 80, 84, 88, 92, 94],
  workflowSparkline: [0, 16, 34, 58, 78, 96, 112, 126],
  licenseSparkline: [3_000_000, 2_600_000, 2_000_000, 1_500_000, 1_000_000, 650_000, 420_000, 320_000],
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
  savingsSparkline: [0, 220_000, 550_000, 990_000, 1_320_000, 1_650_000, 1_980_000, 2_200_000],
  scoreSparkline: [74, 77, 80, 83, 87, 90, 93, 95],
  workflowSparkline: [0, 4, 8, 14, 20, 26, 30, 34],
  licenseSparkline: [680_000, 590_000, 500_000, 390_000, 280_000, 200_000, 140_000, 100_000],
  headcountImpactSparkline: [0, -2, -6, -12, -18, -24, -28, -32],
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
      { week: 16, task: 'Annual review: €5.2M savings confirmed, AI readiness 95, EU compliance showcase', owner: 'CFO, Ministry of Finance' },
    ],
  },
];

const eeFinanceTopOpportunities: Opportunity[] = [
  { name: 'Automated Tax Return Processing', category: 'Tax Automation', savings: 1_800_000, effort: 'Medium', status: 'in-progress', priority: 10, timeToValue: 8, confidence: 94 },
  { name: 'VAT Cross-Border Reconciliation', category: 'VAT Compliance', savings: 1_200_000, effort: 'High', status: 'in-progress', priority: 9, timeToValue: 12, confidence: 88 },
  { name: 'Budget Optimization Analytics', category: 'Budget Analytics', savings: 800_000, effort: 'Medium', status: 'identified', priority: 8, timeToValue: 10, confidence: 86 },
  { name: 'Risk-Based Audit Selection', category: 'Tax Audit', savings: 600_000, effort: 'Medium', status: 'identified', priority: 8, timeToValue: 14, confidence: 82 },
  { name: 'Revenue Forecasting AI', category: 'Fiscal Planning', savings: 480_000, effort: 'Low', status: 'identified', priority: 7, timeToValue: 8, confidence: 84 },
  { name: 'Anti-Fraud Detection System', category: 'Fraud Prevention', savings: 320_000, effort: 'High', status: 'identified', priority: 7, timeToValue: 16, confidence: 78 },
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
  savingsSparkline: [0, 280_000, 700_000, 1_260_000, 1_680_000, 2_100_000, 2_520_000, 2_800_000],
  scoreSparkline: [68, 71, 75, 79, 83, 87, 90, 93],
  workflowSparkline: [0, 5, 10, 18, 26, 32, 38, 42],
  licenseSparkline: [920_000, 800_000, 670_000, 530_000, 390_000, 280_000, 190_000, 130_000],
  headcountImpactSparkline: [0, -3, -8, -16, -26, -38, -48, -56],
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
      { week: 16, task: 'Annual review: €6.8M savings confirmed, 93 AI readiness, 42 workflows automated', owner: 'Deputy Minister, Social Affairs' },
    ],
  },
];

const eeSocialTopOpportunities: Opportunity[] = [
  { name: 'TEHIK Health Records AI', category: 'Health IT', savings: 2_400_000, effort: 'High', status: 'in-progress', priority: 10, timeToValue: 14, confidence: 86 },
  { name: 'Benefits Eligibility Automation', category: 'Social Welfare', savings: 1_600_000, effort: 'Medium', status: 'in-progress', priority: 9, timeToValue: 10, confidence: 88 },
  { name: 'Case Management AI', category: 'Social Services', savings: 1_000_000, effort: 'Medium', status: 'identified', priority: 8, timeToValue: 12, confidence: 82 },
  { name: 'Prescription Fraud Detection', category: 'Health Insurance', savings: 800_000, effort: 'Medium', status: 'identified', priority: 8, timeToValue: 8, confidence: 90 },
  { name: 'Population Health Analytics', category: 'Public Health', savings: 600_000, effort: 'High', status: 'identified', priority: 7, timeToValue: 16, confidence: 76 },
  { name: 'Hospital Resource Optimization', category: 'Healthcare Operations', savings: 400_000, effort: 'High', status: 'identified', priority: 6, timeToValue: 18, confidence: 74 },
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
  savingsSparkline: [0, 160_000, 400_000, 720_000, 960_000, 1_200_000, 1_440_000, 1_600_000],
  scoreSparkline: [76, 79, 82, 85, 88, 91, 93, 95],
  workflowSparkline: [0, 3, 6, 10, 16, 20, 24, 26],
  licenseSparkline: [420_000, 360_000, 300_000, 240_000, 180_000, 130_000, 90_000, 60_000],
  headcountImpactSparkline: [0, -1, -4, -8, -12, -18, -22, -26],
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
      { week: 16, task: 'Annual review: €3.4M savings confirmed, 95 AI readiness, trade digitization showcase', owner: 'Deputy Minister, Economic Affairs' },
    ],
  },
];

const eeEconomicTopOpportunities: Opportunity[] = [
  { name: 'e-Residency AI Screening', category: 'Digital Identity', savings: 1_000_000, effort: 'Medium', status: 'in-progress', priority: 10, timeToValue: 8, confidence: 92 },
  { name: 'Trade Compliance Automation', category: 'Trade Facilitation', savings: 800_000, effort: 'High', status: 'in-progress', priority: 9, timeToValue: 12, confidence: 84 },
  { name: 'Business Registry Automation', category: 'Business Services', savings: 600_000, effort: 'Low', status: 'automated', priority: 9, timeToValue: 6, confidence: 94 },
  { name: 'Export License AI Processing', category: 'Export Control', savings: 400_000, effort: 'Medium', status: 'identified', priority: 8, timeToValue: 14, confidence: 80 },
  { name: 'Startup Grant Evaluation AI', category: 'Innovation', savings: 340_000, effort: 'Medium', status: 'identified', priority: 7, timeToValue: 10, confidence: 82 },
  { name: 'FDI Predictive Targeting', category: 'Investment', savings: 260_000, effort: 'High', status: 'identified', priority: 6, timeToValue: 18, confidence: 72 },
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
  savingsSparkline: [0, 140_000, 350_000, 630_000, 840_000, 1_050_000, 1_260_000, 1_400_000],
  scoreSparkline: [78, 81, 84, 87, 90, 92, 94, 96],
  workflowSparkline: [0, 3, 6, 10, 14, 18, 22, 24],
  licenseSparkline: [380_000, 320_000, 260_000, 200_000, 150_000, 110_000, 80_000, 50_000],
  headcountImpactSparkline: [0, -1, -3, -6, -10, -14, -18, -20],
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
      { week: 16, task: 'Annual review: €3.2M savings, 96 AI readiness, Estonia ranked #1 EU cyber resilience', owner: 'RIA Director General' },
    ],
  },
];

const eeRiaTopOpportunities: Opportunity[] = [
  { name: 'AI-Powered SIEM', category: 'Threat Detection', savings: 1_000_000, effort: 'Medium', status: 'in-progress', priority: 10, timeToValue: 8, confidence: 92 },
  { name: 'Automated Vulnerability Scanning', category: 'Vulnerability Management', savings: 680_000, effort: 'Medium', status: 'in-progress', priority: 9, timeToValue: 10, confidence: 88 },
  { name: 'X-Road Anomaly Detection', category: 'Infrastructure Security', savings: 520_000, effort: 'Medium', status: 'identified', priority: 9, timeToValue: 8, confidence: 90 },
  { name: 'SOAR Playbook Automation', category: 'Incident Response', savings: 440_000, effort: 'Medium', status: 'identified', priority: 8, timeToValue: 12, confidence: 84 },
  { name: 'eID Security Enhancement', category: 'Identity Security', savings: 320_000, effort: 'High', status: 'identified', priority: 8, timeToValue: 14, confidence: 80 },
  { name: 'Automated Digital Forensics', category: 'Forensics', savings: 240_000, effort: 'High', status: 'identified', priority: 7, timeToValue: 16, confidence: 76 },
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
// ─── HCC — Herzog Contracting Corp (Herzog Division) ─────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

const hccCompanyProfile = {
  name: 'Herzog Contracting Corp',
  industry: 'Rail & Highway Construction',
  employees: 1_200,
  opCos: 1,
  opCoNames: ['Herzog Contracting Corp'],
  techSpend: '$4.8M/yr',
  aiReadinessScore: 32,
  holdingPeriod: 'Herzog Companies Division',
  ebitdaMargin: '10.5%',
  targetEbitdaMargin: '17%',
};

const hccAiReadinessBreakdown = [
  { category: 'Data Infrastructure', score: 20, maxScore: 100, status: 'Critical Gap — project data trapped in Primavera P6, equipment data in custom dispatch, no unified view across active job sites' },
  { category: 'Process Maturity', score: 36, maxScore: 100, status: 'Below Average — field operations largely manual, project estimation based on tribal knowledge, paving and grading ops use paper checklists' },
  { category: 'Tech Stack Modernity', score: 28, maxScore: 100, status: 'Legacy-Heavy — Primavera P6 for scheduling, heavy CAD for design, custom dispatch from 2009, no mobile-first tools for field crews' },
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
  savingsSparkline: [0, 210_000, 480_000, 820_000, 1_200_000, 1_600_000, 1_850_000, 2_100_000],
  scoreSparkline: [32, 38, 44, 50, 58, 64, 72, 78],
  workflowSparkline: [0, 3, 6, 10, 13, 16, 19, 22],
  licenseSparkline: [980_000, 880_000, 760_000, 640_000, 520_000, 400_000, 300_000, 220_000],
  headcountImpactSparkline: [0, 0, -1, -3, -5, -8, -10, -12],
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
      { week: 3, task: 'GPS fleet data assessment — map Trimble data streams for 400+ HCC vehicles', owner: 'Fleet Manager' },
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
      { week: 6, task: 'Samsara equipment dispatch pilot — 200 HCC vehicles', owner: 'Fleet Manager' },
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
      { week: 16, task: 'Year 2 roadmap presentation to CEO Brad Lager', owner: 'Division GM' },
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
  { name: 'Custom Dispatch', category: 'Fleet Management', annualCost: 340_000, users: 180, score: 3, integrationComplexity: 'High', migrationWeeks: 20, riskLevel: 'High', dependencies: ['Crew dispatch', 'Equipment tracking', 'Work orders'] },
  { name: 'Trimble GPS Fleet', category: 'GPS/Telematics', annualCost: 190_000, users: 400, score: 5, integrationComplexity: 'Low', migrationWeeks: 6, riskLevel: 'Low', dependencies: ['Vehicle tracking', 'Geofencing', 'Route optimization'] },
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
// ─── HRSI — Herzog Railroad Services (Herzog Division) ───────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

const hrsiCompanyProfile = {
  name: 'Herzog Railroad Services',
  industry: 'Railroad Maintenance & Equipment',
  employees: 380,
  opCos: 1,
  opCoNames: ['Herzog Railroad Services'],
  techSpend: '$1.8M/yr',
  aiReadinessScore: 36,
  holdingPeriod: 'Herzog Companies Division',
  ebitdaMargin: '12.2%',
  targetEbitdaMargin: '19%',
};

const hrsiAiReadinessBreakdown = [
  { category: 'Data Infrastructure', score: 28, maxScore: 100, status: 'Below Average — Class 1 railroad maintenance data in custom dispatch system, car repair records in separate database, no unified view' },
  { category: 'Process Maturity', score: 40, maxScore: 100, status: 'Moderate — some automation in railroad car repair tracking, but maintenance scheduling and leasing management still largely manual' },
  { category: 'Tech Stack Modernity', score: 32, maxScore: 100, status: 'Legacy — custom dispatch system from 2009 handles most operations, supplemented by spreadsheets for car leasing' },
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
  savingsSparkline: [0, 80_000, 180_000, 320_000, 480_000, 600_000, 720_000, 820_000],
  scoreSparkline: [36, 42, 48, 55, 62, 68, 75, 80],
  workflowSparkline: [0, 1, 2, 3, 4, 5, 7, 8],
  licenseSparkline: [380_000, 340_000, 300_000, 260_000, 220_000, 180_000, 140_000, 100_000],
  headcountImpactSparkline: [0, 0, -1, -1, -2, -3, -4, -5],
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
      { week: 4, task: 'License audit across HRSI — identify unused Kronos and dispatch seats', owner: 'IT Lead' },
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
      { week: 8, task: 'Samsara fleet intelligence deployment for HRSI vehicles', owner: 'Fleet Manager' },
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
  { name: 'Custom Dispatch', category: 'Fleet Management', annualCost: 200_000, users: 120, score: 3, integrationComplexity: 'High', migrationWeeks: 18, riskLevel: 'High', dependencies: ['Crew dispatch', 'Equipment tracking', 'Work orders'] },
  { name: 'Kronos/UKG', category: 'Workforce', annualCost: 120_000, users: 380, score: 4, integrationComplexity: 'Medium', migrationWeeks: 10, riskLevel: 'Medium', dependencies: ['Time tracking', 'FRA compliance', 'Payroll'] },
  { name: 'SAP ERP', category: 'Finance', annualCost: 160_000, users: 40, score: 3, integrationComplexity: 'High', migrationWeeks: 16, riskLevel: 'Medium', dependencies: ['Financial reporting', 'AP/AR', 'Cost accounting'] },
];

const hrsiLicenses: License[] = [
  { vendor: 'Custom Dispatch', totalLicenses: 120, active90d: 80, inactive: 40, annualWaste: 160_000, action: 'Migrate to Samsara — reclaim all legacy dispatch seats', costPerLicense: 4_000, department: 'Operations', lastAuditDate: '2025-11-10', trend: [78, 72, 68, 65, 64, 67], complianceRisk: false },
  { vendor: 'Kronos/UKG', totalLicenses: 380, active90d: 280, inactive: 100, annualWaste: 30_000, action: 'Reclaim 100 inactive crew seats', costPerLicense: 300, department: 'HR / All Staff', lastAuditDate: '2026-01-10', trend: [86, 82, 78, 74, 74, 74], complianceRisk: false },
  { vendor: 'SAP ERP', totalLicenses: 40, active90d: 20, inactive: 20, annualWaste: 80_000, action: 'Reclaim 20 seats — consolidate to finance team', costPerLicense: 4_000, department: 'Finance', lastAuditDate: '2025-11-02', trend: [72, 66, 58, 52, 50, 50], complianceRisk: false },
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
// ─── HSI — Herzog Services / Rail Testing (Herzog Division) ──────────────────
// ═══════════════════════════════════════════════════════════════════════════════

const hsiCompanyProfile = {
  name: 'Herzog Services (Rail Testing)',
  industry: 'Ultrasonic Rail Testing',
  employees: 220,
  opCos: 1,
  opCoNames: ['Herzog Services'],
  techSpend: '$1.2M/yr',
  aiReadinessScore: 42,
  holdingPeriod: 'Herzog Companies Division',
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
  savingsSparkline: [0, 60_000, 150_000, 280_000, 400_000, 520_000, 610_000, 680_000],
  scoreSparkline: [42, 48, 54, 60, 66, 72, 78, 84],
  workflowSparkline: [0, 1, 2, 3, 4, 5, 5, 6],
  licenseSparkline: [240_000, 220_000, 190_000, 160_000, 130_000, 100_000, 80_000, 60_000],
  headcountImpactSparkline: [0, 0, -1, -1, -2, -3, -3, -4],
};

const hsiRoadmapPhases = [
  {
    quarter: 'Q1 2026', title: 'Rail Testing Data Unification', items: ['TAM-4 data lake ingestion', 'LIDAR data pipeline', 'FRA reporting assessment'],
    status: 'active' as const,
    weekPlan: [
      { week: 1, task: 'TAM-4 data export and Databricks ingestion pipeline for 3 years of testing history', owner: 'Testing Director' },
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
// ─── HTI — Herzog Technologies (Herzog Division) ─────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

const htiCompanyProfile = {
  name: 'Herzog Technologies',
  industry: 'Signal & PTC Systems',
  employees: 310,
  opCos: 1,
  opCoNames: ['Herzog Technologies'],
  techSpend: '$2.4M/yr',
  aiReadinessScore: 48,
  holdingPeriod: 'Herzog Companies Division',
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
  savingsSparkline: [0, 70_000, 170_000, 300_000, 440_000, 560_000, 660_000, 740_000],
  scoreSparkline: [48, 54, 60, 66, 72, 78, 82, 86],
  workflowSparkline: [0, 1, 2, 4, 5, 7, 8, 10],
  licenseSparkline: [420_000, 380_000, 340_000, 300_000, 260_000, 200_000, 160_000, 120_000],
  headcountImpactSparkline: [0, 0, -1, -2, -3, -4, -5, -6],
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
// ─── HTSI — Herzog Transit Services (Herzog Division) ────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

const htsiCompanyProfile = {
  name: 'Herzog Transit Services',
  industry: 'Passenger Rail Operations',
  employees: 480,
  opCos: 1,
  opCoNames: ['Herzog Transit Services'],
  techSpend: '$2.2M/yr',
  aiReadinessScore: 40,
  holdingPeriod: 'Herzog Companies Division',
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
  savingsSparkline: [0, 80_000, 200_000, 340_000, 500_000, 640_000, 760_000, 860_000],
  scoreSparkline: [40, 46, 52, 58, 64, 70, 76, 82],
  workflowSparkline: [0, 1, 2, 4, 5, 7, 8, 10],
  licenseSparkline: [480_000, 430_000, 380_000, 320_000, 260_000, 200_000, 150_000, 110_000],
  headcountImpactSparkline: [0, 0, -1, -2, -3, -5, -6, -7],
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
  { name: 'Kronos/UKG', category: 'Workforce', annualCost: 140_000, users: 480, score: 4, integrationComplexity: 'Medium', migrationWeeks: 10, riskLevel: 'Medium', dependencies: ['Time tracking', 'Crew scheduling', 'Payroll'] },
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
// ─── HE — Herzog Energy (Herzog Division) ────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

const heCompanyProfile = {
  name: 'Herzog Energy',
  industry: 'Energy Infrastructure',
  employees: 120,
  opCos: 1,
  opCoNames: ['Herzog Energy'],
  techSpend: '$0.8M/yr',
  aiReadinessScore: 34,
  holdingPeriod: 'Herzog Companies Division',
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
  savingsSparkline: [0, 30_000, 80_000, 140_000, 210_000, 270_000, 320_000, 360_000],
  scoreSparkline: [34, 40, 46, 52, 58, 64, 70, 76],
  workflowSparkline: [0, 0, 1, 1, 2, 3, 3, 4],
  licenseSparkline: [180_000, 165_000, 148_000, 130_000, 110_000, 90_000, 70_000, 55_000],
  headcountImpactSparkline: [0, 0, 0, -1, -1, -2, -2, -3],
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
      { week: 6, task: 'Samsara equipment tracking for energy division fleet', owner: 'Division Manager' },
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
  { name: 'SAP ERP (shared)', category: 'Finance', annualCost: 80_000, users: 15, score: 3, integrationComplexity: 'High', migrationWeeks: 12, riskLevel: 'Medium', dependencies: ['Financial reporting', 'AP/AR', 'Cost accounting'] },
  { name: 'Kronos/UKG', category: 'Workforce', annualCost: 40_000, users: 120, score: 4, integrationComplexity: 'Medium', migrationWeeks: 8, riskLevel: 'Low', dependencies: ['Time tracking', 'Crew scheduling', 'Payroll'] },
];

const heLicenses: License[] = [
  { vendor: 'Microsoft 365', totalLicenses: 120, active90d: 70, inactive: 50, annualWaste: 40_000, action: 'Reclaim 50 inactive seats + downgrade field crews', costPerLicense: 800, department: 'IT / All Staff', lastAuditDate: '2025-09-15', trend: [74, 68, 62, 58, 58, 58], complianceRisk: false },
  { vendor: 'SAP ERP', totalLicenses: 15, active90d: 5, inactive: 10, annualWaste: 40_000, action: 'Reclaim 10 seats — consolidate to finance only', costPerLicense: 4_000, department: 'Finance', lastAuditDate: '2025-11-02', trend: [60, 50, 40, 33, 33, 33], complianceRisk: false },
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
// ─── GG — Green Group LLC (Herzog Division) ──────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

const ggCompanyProfile = {
  name: 'Green Group LLC',
  industry: 'Environmental Services',
  employees: 90,
  opCos: 1,
  opCoNames: ['Green Group LLC'],
  techSpend: '$0.4M/yr',
  aiReadinessScore: 30,
  holdingPeriod: 'Herzog Companies Division',
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
  savingsSparkline: [0, 20_000, 50_000, 90_000, 140_000, 180_000, 210_000, 240_000],
  scoreSparkline: [30, 36, 42, 48, 54, 60, 66, 72],
  workflowSparkline: [0, 0, 0, 1, 1, 1, 2, 2],
  licenseSparkline: [120_000, 110_000, 98_000, 86_000, 72_000, 58_000, 44_000, 32_000],
  headcountImpactSparkline: [0, 0, 0, 0, -1, -1, -1, -2],
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
  { name: 'Kronos/UKG', category: 'Workforce', annualCost: 28_000, users: 90, score: 4, integrationComplexity: 'Medium', migrationWeeks: 6, riskLevel: 'Low', dependencies: ['Time tracking', 'Crew scheduling', 'Payroll'] },
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
  oakwood: oakwoodCompanyProfile,
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
  oakwood: oakwoodAiReadinessBreakdown,
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
  oakwood: oakwoodKpis,
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
  oakwood: oakwoodRoadmapPhases,
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
  oakwood: oakwoodTopOpportunities,
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
  oakwood: oakwoodCurrentStack,
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
  oakwood: oakwoodLicenses,
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
  oakwood: oakwoodWorkflowSummary,
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

const companyRoiSummaries: Record<string, typeof roiSummary> = {
  meridian: roiSummary,
  hcc: hccRoiSummary,
  hrsi: hrsiRoiSummary,
  hsi: hsiRoiSummary,
  hti: htiRoiSummary,
  htsi: htsiRoiSummary,
  he: heRoiSummary,
  gg: ggRoiSummary,
  oakwood: oakwoodRoiSummary,
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
