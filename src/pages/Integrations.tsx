import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  Clock,
  Plug,
  ArrowRight,
  Database,
  Activity,
  Zap,
  Server,
} from 'lucide-react';

/* -- Logo component with fallback ----------------------------------------- */

function IntegrationLogo({ name, domain, size = 32 }: { name: string; domain: string; size?: number }) {
  const [failed, setFailed] = useState(false);

  if (failed || !domain) {
    return (
      <div
        className="rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-500 font-semibold text-sm flex-shrink-0"
        style={{ width: size, height: size }}
      >
        {name.charAt(0)}
      </div>
    );
  }

  return (
    <img
      src={`https://icon.horse/icon/${domain}`}
      alt={`${name} logo`}
      width={size}
      height={size}
      className="rounded-lg object-contain bg-white border border-gray-200 flex-shrink-0"
      onError={() => setFailed(true)}
    />
  );
}

/* -- Category color map --------------------------------------------------- */

const categoryColors: Record<string, string> = {
  'ERP & Finance': 'bg-purple-100 text-purple-700',
  'CRM & Sales': 'bg-blue-100 text-blue-700',
  'HR & Payroll': 'bg-rose-100 text-rose-700',
  'IT & Security': 'bg-slate-100 text-slate-700',
  Communication: 'bg-green-100 text-green-700',
  'Field Service & Ops': 'bg-orange-100 text-orange-700',
  'BI & Analytics': 'bg-cyan-100 text-cyan-700',
  DevOps: 'bg-violet-100 text-violet-700',
  'Expense & Procurement': 'bg-amber-100 text-amber-700',
  'Data Platform': 'bg-emerald-100 text-emerald-700',
  'AI & ML': 'bg-indigo-100 text-indigo-700',
  'Customer Service AI': 'bg-sky-100 text-sky-700',
  'Contact Center AI': 'bg-fuchsia-100 text-fuchsia-700',
  'AI Development': 'bg-lime-100 text-lime-700',
  'Data Infrastructure': 'bg-teal-100 text-teal-700',
  'Vector Database': 'bg-pink-100 text-pink-700',
  'Communications API': 'bg-red-100 text-red-700',
};

/* -- Data ----------------------------------------------------------------- */

interface ActiveIntegration {
  name: string;
  domain: string;
  category: string;
  status: 'Connected' | 'Syncing';
  lastSync: string;
  dataPoints: string;
}

const activeIntegrations: ActiveIntegration[] = [
  // ERP & Finance (6)
  { name: 'SAP ERP', domain: 'sap.com', category: 'ERP & Finance', status: 'Connected', lastSync: '2 min ago', dataPoints: '847K records' },
  { name: 'Oracle NetSuite', domain: 'netsuite.com', category: 'ERP & Finance', status: 'Connected', lastSync: '5 min ago', dataPoints: '412K records' },
  { name: 'QuickBooks', domain: 'quickbooks.intuit.com', category: 'ERP & Finance', status: 'Connected', lastSync: '10 min ago', dataPoints: '89K transactions' },
  { name: 'Bill.com', domain: 'bill.com', category: 'ERP & Finance', status: 'Connected', lastSync: '15 min ago', dataPoints: '34K invoices' },
  { name: 'Stripe', domain: 'stripe.com', category: 'ERP & Finance', status: 'Connected', lastSync: 'Real-time', dataPoints: '1.8M payments' },
  { name: 'Brex', domain: 'brex.com', category: 'ERP & Finance', status: 'Connected', lastSync: '30 min ago', dataPoints: '12K expenses' },

  // CRM & Sales (4)
  { name: 'Salesforce', domain: 'salesforce.com', category: 'CRM & Sales', status: 'Connected', lastSync: 'Just now', dataPoints: '340K records' },
  { name: 'HubSpot', domain: 'hubspot.com', category: 'CRM & Sales', status: 'Connected', lastSync: '3 min ago', dataPoints: '218K contacts' },
  { name: 'Outreach', domain: 'outreach.io', category: 'CRM & Sales', status: 'Connected', lastSync: '8 min ago', dataPoints: '94K sequences' },
  { name: 'LinkedIn Sales Nav', domain: 'linkedin.com', category: 'CRM & Sales', status: 'Connected', lastSync: '1 hr ago', dataPoints: '15K leads' },

  // HR & Payroll (4)
  { name: 'ADP', domain: 'adp.com', category: 'HR & Payroll', status: 'Connected', lastSync: 'Daily sync', dataPoints: '1,850 employees' },
  { name: 'Workday', domain: 'workday.com', category: 'HR & Payroll', status: 'Connected', lastSync: '20 min ago', dataPoints: '1,850 profiles' },
  { name: 'BambooHR', domain: 'bamboohr.com', category: 'HR & Payroll', status: 'Connected', lastSync: '45 min ago', dataPoints: '1,200 records' },
  { name: 'Greenhouse', domain: 'greenhouse.io', category: 'HR & Payroll', status: 'Connected', lastSync: '1 hr ago', dataPoints: '3.2K candidates' },

  // IT & Security (5)
  { name: 'Microsoft 365', domain: 'microsoft.com', category: 'IT & Security', status: 'Connected', lastSync: '1 min ago', dataPoints: '1.2M events' },
  { name: 'Okta SSO', domain: 'okta.com', category: 'IT & Security', status: 'Connected', lastSync: 'Real-time', dataPoints: '1,850 users' },
  { name: 'CrowdStrike', domain: 'crowdstrike.com', category: 'IT & Security', status: 'Connected', lastSync: 'Real-time', dataPoints: '4.7K endpoints' },
  { name: 'Datadog', domain: 'datadoghq.com', category: 'IT & Security', status: 'Syncing', lastSync: 'Real-time', dataPoints: '28M metrics' },
  { name: 'PagerDuty', domain: 'pagerduty.com', category: 'IT & Security', status: 'Connected', lastSync: '5 min ago', dataPoints: '1.2K incidents' },

  // Communication (4)
  { name: 'Slack', domain: 'slack.com', category: 'Communication', status: 'Connected', lastSync: 'Real-time', dataPoints: '2.4M messages' },
  { name: 'Zoom', domain: 'zoom.us', category: 'Communication', status: 'Connected', lastSync: '1 hr ago', dataPoints: '12K meetings' },
  { name: 'Microsoft Teams', domain: 'microsoft.com', category: 'Communication', status: 'Connected', lastSync: '2 min ago', dataPoints: '890K messages' },
  { name: 'Google Workspace', domain: 'google.com', category: 'Communication', status: 'Connected', lastSync: '5 min ago', dataPoints: '3.1M emails' },

  // Field Service & Ops (3)
  { name: 'ServiceTitan', domain: 'servicetitan.com', category: 'Field Service & Ops', status: 'Connected', lastSync: '10 min ago', dataPoints: '18K work orders' },
  { name: 'Samsara', domain: 'samsara.com', category: 'Field Service & Ops', status: 'Connected', lastSync: 'Real-time', dataPoints: '340 vehicles' },
  { name: 'Procore', domain: 'procore.com', category: 'Field Service & Ops', status: 'Connected', lastSync: '20 min ago', dataPoints: '2.8K projects' },

  // BI & Analytics (3)
  { name: 'Tableau', domain: 'tableau.com', category: 'BI & Analytics', status: 'Connected', lastSync: '15 min ago', dataPoints: '127 dashboards' },
  { name: 'Power BI', domain: 'powerbi.microsoft.com', category: 'BI & Analytics', status: 'Connected', lastSync: '30 min ago', dataPoints: '84 reports' },
  { name: 'Looker', domain: 'looker.com', category: 'BI & Analytics', status: 'Connected', lastSync: '12 min ago', dataPoints: '56 explores' },

  // DevOps (3)
  { name: 'Jira', domain: 'atlassian.com', category: 'DevOps', status: 'Connected', lastSync: '5 min ago', dataPoints: '4.2K tickets' },
  { name: 'GitHub', domain: 'github.com', category: 'DevOps', status: 'Connected', lastSync: '2 min ago', dataPoints: '1.4K repos' },
  { name: 'AWS', domain: 'aws.amazon.com', category: 'DevOps', status: 'Connected', lastSync: 'Real-time', dataPoints: '92 services' },

  // Expense & Procurement (2)
  { name: 'Concur', domain: 'concur.com', category: 'Expense & Procurement', status: 'Connected', lastSync: '5 min ago', dataPoints: '28K reports' },
  { name: 'Coupa', domain: 'coupa.com', category: 'Expense & Procurement', status: 'Connected', lastSync: '1 hr ago', dataPoints: '6.3K orders' },
];

interface AvailableIntegration {
  name: string;
  domain: string;
  category: string;
  recommended?: boolean;
}

const availableIntegrations: AvailableIntegration[] = [
  { name: 'Databricks', domain: 'databricks.com', category: 'Data Platform', recommended: true },
  { name: 'Ramp', domain: 'ramp.com', category: 'ERP & Finance', recommended: true },
  { name: 'Day.ai', domain: 'day.ai', category: 'CRM & Sales', recommended: true },
  { name: 'Palantir AIP', domain: 'palantir.com', category: 'AI & ML', recommended: true },
  { name: 'Sierra AI', domain: 'sierra.ai', category: 'Customer Service AI' },
  { name: 'Parloa', domain: 'parloa.com', category: 'Contact Center AI' },
  { name: 'Cognition (Devin)', domain: 'cognition.ai', category: 'AI Development' },
  { name: 'Snowflake', domain: 'snowflake.com', category: 'Data Platform' },
  { name: 'dbt', domain: 'getdbt.com', category: 'Data Infrastructure' },
  { name: 'Fivetran', domain: 'fivetran.com', category: 'Data Infrastructure' },
  { name: 'Monte Carlo', domain: 'montecarlodata.com', category: 'Data Infrastructure' },
  { name: 'Pinecone', domain: 'pinecone.io', category: 'Vector Database' },
  { name: 'OpenAI', domain: 'openai.com', category: 'AI & ML' },
  { name: 'Anthropic', domain: 'anthropic.com', category: 'AI & ML' },
  { name: 'Twilio', domain: 'twilio.com', category: 'Communications API' },
];

/* -- Component ------------------------------------------------------------ */

export default function Integrations() {
  const [activeTab, setActiveTab] = useState<'active' | 'available'>('active');

  return (
    <div className="space-y-8">
      {/* -- Header + Stats ------------------------------------------------ */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Integrations</h1>
        <p className="mt-1 text-sm text-gray-500">Connected data sources powering your Command Center analysis</p>
      </div>

      <motion.div
        className="grid grid-cols-3 gap-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Active */}
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
            <p className="text-2xl font-semibold text-gray-900 leading-none">{activeIntegrations.length}</p>
            <p className="text-xs text-gray-500 mt-1">Active Connections</p>
          </div>
        </motion.div>

        {/* Available */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl border border-gray-100 px-6 py-5 flex items-center gap-4"
        >
          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
            <Plug className="w-5 h-5 text-blue-500" strokeWidth={2} />
          </div>
          <div>
            <p className="text-2xl font-semibold text-gray-900 leading-none">{availableIntegrations.length}</p>
            <p className="text-xs text-gray-500 mt-1">Available</p>
          </div>
        </motion.div>

        {/* Pending */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl border border-gray-100 px-6 py-5 flex items-center gap-4"
        >
          <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0">
            <Clock className="w-5 h-5 text-amber-500" strokeWidth={2} />
          </div>
          <div>
            <p className="text-2xl font-semibold text-gray-900 leading-none">6</p>
            <p className="text-xs text-gray-500 mt-1">Pending Setup</p>
          </div>
        </motion.div>
      </motion.div>

      {/* -- Tabs ---------------------------------------------------------- */}
      <div className="flex gap-1 bg-gray-100 rounded-lg p-1 w-fit">
        <button
          onClick={() => setActiveTab('active')}
          className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
            activeTab === 'active'
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Active ({activeIntegrations.length})
        </button>
        <button
          onClick={() => setActiveTab('available')}
          className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
            activeTab === 'available'
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Available ({availableIntegrations.length})
        </button>
      </div>

      {/* -- Active Integrations Grid -------------------------------------- */}
      {activeTab === 'active' && (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          key="active"
        >
          {activeIntegrations.map((integration, i) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: i * 0.02 }}
              className="bg-white rounded-2xl border border-gray-100 border-l-2 border-l-emerald-400 px-4 py-3.5 hover:shadow-lg hover:shadow-gray-100 transition-shadow duration-300 cursor-default"
            >
              <div className="flex items-start justify-between mb-2.5">
                <IntegrationLogo name={integration.name} domain={integration.domain} size={32} />
                <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full whitespace-nowrap ${categoryColors[integration.category] || 'bg-gray-100 text-gray-600'}`}>
                  {integration.category}
                </span>
              </div>

              <h3 className="text-sm font-semibold text-gray-900 mb-1.5 truncate">{integration.name}</h3>

              <div className="flex items-center gap-1.5 mb-2.5">
                <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${integration.status === 'Syncing' ? 'bg-amber-400 animate-pulse' : 'bg-emerald-400'}`} />
                <span className={`text-xs font-medium ${integration.status === 'Syncing' ? 'text-amber-600' : 'text-emerald-600'}`}>
                  {integration.status}
                </span>
              </div>

              <div className="space-y-1 pt-2.5 border-t border-gray-50">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-gray-400">Last sync</span>
                  <span className="text-[11px] text-gray-600 font-medium">{integration.lastSync}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-gray-400">Data</span>
                  <span className="text-[11px] text-gray-600 font-medium">{integration.dataPoints}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* -- Available Integrations Grid ----------------------------------- */}
      {activeTab === 'available' && (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          key="available"
        >
          {availableIntegrations.map((integration, i) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: i * 0.02 }}
              className="bg-white rounded-2xl border border-dashed border-gray-200 px-4 py-3.5 opacity-80 hover:opacity-100 hover:shadow-lg hover:shadow-gray-100 transition-all duration-300 cursor-default"
            >
              <div className="flex items-start justify-between mb-2.5">
                <IntegrationLogo name={integration.name} domain={integration.domain} size={32} />
                <div className="flex flex-col items-end gap-1">
                  <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full whitespace-nowrap ${categoryColors[integration.category] || 'bg-gray-100 text-gray-600'}`}>
                    {integration.category}
                  </span>
                  {integration.recommended && (
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-blue-50 text-blue-600">
                      Recommended
                    </span>
                  )}
                </div>
              </div>

              <h3 className="text-sm font-semibold text-gray-900 mb-3 truncate">{integration.name}</h3>

              <button className="w-full py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium transition-colors duration-200">
                Connect
              </button>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* -- Data Pipeline Status ------------------------------------------ */}
      <motion.div
        className="bg-white rounded-2xl border border-gray-100 p-8"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Data Pipeline Status</h2>

        <div className="flex items-center justify-between gap-6 mb-8">
          <div className="flex-1 bg-gray-50 rounded-xl border border-gray-100 p-5 text-center">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-3">
              <Database className="w-6 h-6 text-blue-500" strokeWidth={1.8} />
            </div>
            <p className="text-sm font-semibold text-gray-900">Sources</p>
            <p className="text-xs text-gray-500 mt-1">{activeIntegrations.length} connected systems</p>
          </div>

          <div className="flex flex-col items-center gap-1 flex-shrink-0">
            <ArrowRight className="w-5 h-5 text-gray-300" />
            <span className="text-[10px] text-gray-400 font-medium">Stream</span>
          </div>

          <div className="flex-1 bg-gray-50 rounded-xl border border-gray-100 p-5 text-center">
            <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mx-auto mb-3">
              <Activity className="w-6 h-6 text-amber-500" strokeWidth={1.8} />
            </div>
            <p className="text-sm font-semibold text-gray-900">Ingestion Pipeline</p>
            <p className="text-xs text-gray-500 mt-1">Real-time processing</p>
          </div>

          <div className="flex flex-col items-center gap-1 flex-shrink-0">
            <ArrowRight className="w-5 h-5 text-gray-300" />
            <span className="text-[10px] text-gray-400 font-medium">Enrich</span>
          </div>

          <div className="flex-1 bg-gray-50 rounded-xl border border-gray-100 p-5 text-center">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mx-auto mb-3">
              <Zap className="w-6 h-6 text-emerald-500" strokeWidth={1.8} />
            </div>
            <p className="text-sm font-semibold text-gray-900">Command Center</p>
            <p className="text-xs text-gray-500 mt-1">Unified analysis layer</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
          <span className="flex items-center gap-1.5">
            <Server className="w-3.5 h-3.5 text-gray-400" />
            Last 24 hours:
          </span>
          <span className="font-semibold text-gray-700">8.7M events processed</span>
          <span className="text-gray-300">|</span>
          <span className="font-semibold text-emerald-600">99.7% uptime</span>
          <span className="text-gray-300">|</span>
          <span>Avg latency: <span className="font-semibold text-gray-700">340ms</span></span>
        </div>
      </motion.div>
    </div>
  );
}
