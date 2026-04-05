import { useState, useMemo } from 'react';
import { ChevronDown, Trophy, Clock, Zap, Target } from 'lucide-react';
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Cell,
} from 'recharts';
import { useCompany } from '../data/CompanyContext';
import {
  getCompanyProfile,
  getKpis,
  getTopOpportunities,
  getWorkflowSummary,
  getRoiSummary,
  getCurrentStack,
} from '../data/constants';
import PreliminaryBanner from '../components/PreliminaryBanner';

// ─── Helpers ──────────────────────────────────────────────────────────────────

function fmt(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`;
  return `$${n}`;
}

function pct(n: number): string {
  return `${n}%`;
}

type Winner = 'a' | 'b' | 'tie';

function winnerClass(winner: Winner, side: 'a' | 'b'): string {
  if (winner === 'tie') return '';
  if (winner === side) return 'text-emerald-400';
  return '';
}

function winnerBadge(winner: Winner, side: 'a' | 'b'): React.ReactNode {
  if (winner === side) {
    return <Trophy className="inline w-3.5 h-3.5 text-emerald-500 ml-1" strokeWidth={2} />;
  }
  return null;
}

// ─── Types ────────────────────────────────────────────────────────────────────

interface MetricRow {
  label: string;
  valueA: string;
  valueB: string;
  winner: Winner;
  rawA: number;
  rawB: number;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function Compare() {
  const { company, companies } = useCompany();

  // Determine which companies to show in comparison dropdowns
  const divisions = useMemo(() => {
    // If current company has children (is a parent/conglomerate), show those children
    const children = companies.filter((c) => c.parentId === company.id);
    if (children.length >= 2) return children;

    // If current company IS a child, show siblings within the same parent
    if (company.parentId) {
      const siblings = companies.filter((c) => c.parentId === company.parentId);
      if (siblings.length >= 2) return siblings;
    }

    // For standalone companies (no parent, no children): show other standalone companies
    // that are not conglomerate parents (i.e., companies without children of their own)
    const parentIds = new Set(companies.filter((c) => c.parentId).map((c) => c.parentId));
    const standalones = companies.filter(
      (c) => !c.parentId && !parentIds.has(c.id)
    );
    if (standalones.length >= 2) return standalones;

    return [];
  }, [companies, company],
  );

  const [divAId, setDivAId] = useState(divisions[0]?.id ?? '');
  const [divBId, setDivBId] = useState(divisions[1]?.id ?? '');

  const divA = divisions.find((d) => d.id === divAId) ?? divisions[0];
  const divB = divisions.find((d) => d.id === divBId) ?? divisions[1];

  // Pull data
  const profileA = getCompanyProfile(divAId);
  const profileB = getCompanyProfile(divBId);
  const kpisA = getKpis(divAId);
  const kpisB = getKpis(divBId);
  const oppsA = getTopOpportunities(divAId);
  const oppsB = getTopOpportunities(divBId);
  const wfA = getWorkflowSummary(divAId);
  const wfB = getWorkflowSummary(divBId);
  const roiA = getRoiSummary(divAId);
  const roiB = getRoiSummary(divBId);
  const stackA = getCurrentStack(divAId);
  const stackB = getCurrentStack(divBId);

  // Build comparison metrics
  // Higher is better for readiness, ROI, automatable workflows
  // Lower is better for license waste, timeline
  const metrics: MetricRow[] = useMemo(() => {
    const readinessA = profileA.aiReadinessScore;
    const readinessB = profileB.aiReadinessScore;

    const wasteA = kpisA.unusedLicenseWaste;
    const wasteB = kpisB.unusedLicenseWaste;

    const platformsA = stackA.length;
    const platformsB = stackB.length;

    const roiPotA = roiA.netYear1;
    const roiPotB = roiB.netYear1;

    const autoA = wfA.fullyAutomatable;
    const autoB = wfB.fullyAutomatable;

    // Average timeToValue for top 3 opps
    const top3A = oppsA.slice(0, 3);
    const top3B = oppsB.slice(0, 3);
    const timeA = top3A.length > 0 ? Math.round(top3A.reduce((s, o) => s + o.timeToValue, 0) / top3A.length) : 0;
    const timeB = top3B.length > 0 ? Math.round(top3B.reduce((s, o) => s + o.timeToValue, 0) / top3B.length) : 0;

    function higher(a: number, b: number): Winner {
      if (a > b) return 'a';
      if (b > a) return 'b';
      return 'tie';
    }
    function lower(a: number, b: number): Winner {
      if (a < b) return 'a';
      if (b < a) return 'b';
      return 'tie';
    }

    return [
      { label: 'AI Readiness Score', valueA: pct(readinessA), valueB: pct(readinessB), winner: higher(readinessA, readinessB), rawA: readinessA, rawB: readinessB },
      { label: 'License Waste', valueA: fmt(wasteA), valueB: fmt(wasteB), winner: lower(wasteA, wasteB), rawA: wasteA, rawB: wasteB },
      { label: 'Software Platforms', valueA: String(platformsA), valueB: String(platformsB), winner: 'tie', rawA: platformsA, rawB: platformsB },
      { label: 'ROI Potential (Year 1)', valueA: fmt(roiPotA), valueB: fmt(roiPotB), winner: higher(roiPotA, roiPotB), rawA: roiPotA, rawB: roiPotB },
      { label: 'Automatable Workflows', valueA: String(autoA), valueB: String(autoB), winner: higher(autoA, autoB), rawA: autoA, rawB: autoB },
      { label: 'Avg. Implementation (wks)', valueA: `${timeA} wks`, valueB: `${timeB} wks`, winner: lower(timeA, timeB), rawA: timeA, rawB: timeB },
    ];
  }, [profileA, profileB, kpisA, kpisB, stackA, stackB, roiA, roiB, wfA, wfB, oppsA, oppsB]);

  // Radar chart data — normalize to 0-100 for each axis
  const radarData = useMemo(() => {
    return [
      { metric: 'AI Readiness', A: profileA.aiReadinessScore, B: profileB.aiReadinessScore },
      { metric: 'ROI Potential', A: Math.min(100, Math.round((roiA.netYear1 / 3_000_000) * 100)), B: Math.min(100, Math.round((roiB.netYear1 / 3_000_000) * 100)) },
      { metric: 'Automation', A: Math.min(100, Math.round((wfA.fullyAutomatable / 10) * 100)), B: Math.min(100, Math.round((wfB.fullyAutomatable / 10) * 100)) },
      { metric: 'Efficiency', A: Math.min(100, 100 - Math.round((kpisA.unusedLicenseWaste / 2_000_000) * 100)), B: Math.min(100, 100 - Math.round((kpisB.unusedLicenseWaste / 2_000_000) * 100)) },
      { metric: 'Scale', A: Math.min(100, Math.round((divA.employees / 1500) * 100)), B: Math.min(100, Math.round((divB.employees / 1500) * 100)) },
    ];
  }, [profileA, profileB, roiA, roiB, wfA, wfB, kpisA, kpisB, divA, divB]);

  // Bar chart data for savings comparison
  const barData = useMemo(() => {
    return [
      { name: 'Tech Stack', A: roiA.techStackSavings, B: roiB.techStackSavings },
      { name: 'Automation', A: roiA.workflowAutomation, B: roiB.workflowAutomation },
      { name: 'License Recovery', A: roiA.licenseRecovery, B: roiB.licenseRecovery },
    ];
  }, [roiA, roiB]);

  const top3OppsA = oppsA.slice(0, 3);
  const top3OppsB = oppsB.slice(0, 3);

  return (
    <div className="space-y-6">
      <PreliminaryBanner />

      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight" style={{ color: 'var(--cc-text)' }}>Division Comparison</h1>
        <p className="text-sm mt-1" style={{ color: 'var(--cc-text-secondary)' }}>
          Compare two divisions side-by-side across key automation and technology metrics
        </p>
      </div>

      {/* Division selectors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DivisionSelector
          label="Division A"
          value={divAId}
          onChange={setDivAId}
          divisions={divisions}
          color="blue"
        />
        <DivisionSelector
          label="Division B"
          value={divBId}
          onChange={setDivBId}
          divisions={divisions}
          color="violet"
        />
      </div>

      {divAId === divBId && (
        <div className="rounded-xl px-4 py-3 text-sm" style={{ background: 'rgba(245, 158, 11, 0.08)', border: '1px solid rgba(245, 158, 11, 0.2)', color: 'var(--cc-yellow)' }}>
          Select two different divisions to see a meaningful comparison.
        </div>
      )}

      {/* Comparison table */}
      <div className="rounded-2xl shadow-sm overflow-hidden" style={{ background: 'var(--cc-bg-card)', border: '1px solid var(--cc-border)' }}>
        <div className="px-4 sm:px-6 py-4" style={{ borderBottom: '1px solid var(--cc-border)' }}>
          <h2 className="text-sm font-semibold" style={{ color: 'var(--cc-text)' }}>Key Metrics Comparison</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: 'var(--cc-bg-elevated)' }}>
                <th className="text-left px-4 sm:px-6 py-3 text-xs font-semibold uppercase tracking-wider w-1/3" style={{ color: 'var(--cc-text-secondary)' }}>
                  Metric
                </th>
                <th className="text-center px-4 sm:px-6 py-3 text-xs font-semibold text-blue-400 uppercase tracking-wider w-1/3">
                  {divA.shortName}
                </th>
                <th className="text-center px-4 sm:px-6 py-3 text-xs font-semibold text-violet-400 uppercase tracking-wider w-1/3">
                  {divB.shortName}
                </th>
              </tr>
            </thead>
            <tbody>
              {metrics.map((m) => (
                <tr key={m.label} className="transition-colors" style={{ borderBottom: '1px solid var(--cc-border)' }}>
                  <td className="px-4 sm:px-6 py-3.5 font-medium" style={{ color: 'var(--cc-text-secondary)' }}>{m.label}</td>
                  <td className={`px-4 sm:px-6 py-3.5 text-center font-semibold rounded-md ${winnerClass(m.winner, 'a')}`} style={m.winner !== 'a' ? { color: 'var(--cc-text)' } : undefined}>
                    {m.valueA}
                    {winnerBadge(m.winner, 'a')}
                  </td>
                  <td className={`px-4 sm:px-6 py-3.5 text-center font-semibold rounded-md ${winnerClass(m.winner, 'b')}`} style={m.winner !== 'b' ? { color: 'var(--cc-text)' } : undefined}>
                    {m.valueB}
                    {winnerBadge(m.winner, 'b')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Radar chart */}
        <div className="rounded-2xl shadow-sm p-4 sm:p-6" style={{ background: 'var(--cc-bg-card)', border: '1px solid var(--cc-border)' }}>
          <h3 className="text-sm font-semibold mb-4" style={{ color: 'var(--cc-text)' }}>Capability Radar</h3>
          <ResponsiveContainer width="100%" height={320}>
            <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="70%">
              <PolarGrid stroke="var(--cc-border)" />
              <PolarAngleAxis dataKey="metric" tick={{ fontSize: 11, fill: 'var(--cc-text-secondary)' }} />
              <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} axisLine={false} />
              <Radar
                name={divA.shortName}
                dataKey="A"
                stroke="#3b82f6"
                fill="#3b82f6"
                fillOpacity={0.15}
                strokeWidth={2}
              />
              <Radar
                name={divB.shortName}
                dataKey="B"
                stroke="#8b5cf6"
                fill="#8b5cf6"
                fillOpacity={0.15}
                strokeWidth={2}
              />
              <Legend
                wrapperStyle={{ fontSize: 12, paddingTop: 8 }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Bar chart — savings breakdown */}
        <div className="rounded-2xl shadow-sm p-4 sm:p-6" style={{ background: 'var(--cc-bg-card)', border: '1px solid var(--cc-border)' }}>
          <h3 className="text-sm font-semibold mb-4" style={{ color: 'var(--cc-text)' }}>Savings Breakdown</h3>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={barData} barGap={4}>
              <XAxis dataKey="name" tick={{ fontSize: 11, fill: 'var(--cc-text-secondary)' }} axisLine={false} tickLine={false} />
              <YAxis
                tick={{ fontSize: 11, fill: 'var(--cc-text-tertiary)' }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v: number) => fmt(v)}
              />
              <Tooltip
                formatter={(value) => fmt(Number(value))}
                contentStyle={{ borderRadius: 12, background: 'var(--cc-bg-card)', border: '1px solid var(--cc-border)', fontSize: 12, color: 'var(--cc-text)' }}
              />
              <Legend wrapperStyle={{ fontSize: 12, paddingTop: 8 }} />
              <Bar dataKey="A" name={divA.shortName} radius={[6, 6, 0, 0]} maxBarSize={48}>
                {barData.map((_, i) => (
                  <Cell key={i} fill="#3b82f6" />
                ))}
              </Bar>
              <Bar dataKey="B" name={divB.shortName} radius={[6, 6, 0, 0]} maxBarSize={48}>
                {barData.map((_, i) => (
                  <Cell key={i} fill="#8b5cf6" />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top opportunities side-by-side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <OpportunityCard
          title={`Top Opportunities — ${divA.shortName}`}
          opportunities={top3OppsA}
          color="blue"
        />
        <OpportunityCard
          title={`Top Opportunities — ${divB.shortName}`}
          opportunities={top3OppsB}
          color="violet"
        />
      </div>
    </div>
  );
}

// ─── Subcomponents ────────────────────────────────────────────────────────────

function DivisionSelector({
  label,
  value,
  onChange,
  divisions,
  color,
}: {
  label: string;
  value: string;
  onChange: (id: string) => void;
  divisions: { id: string; shortName: string; industry: string }[];
  color: 'blue' | 'violet';
}) {
  const borderColor = color === 'blue' ? 'rgba(59, 130, 246, 0.25)' : 'rgba(139, 92, 246, 0.25)';
  const bgColor = color === 'blue' ? 'rgba(59, 130, 246, 0.06)' : 'rgba(139, 92, 246, 0.06)';
  const labelColor = color === 'blue' ? 'text-blue-400' : 'text-violet-400';

  return (
    <div className="rounded-xl p-4" style={{ background: bgColor, border: `1px solid ${borderColor}` }}>
      <span className={`text-[10px] font-bold uppercase tracking-wider ${labelColor}`}>{label}</span>
      <div className="relative mt-2">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none rounded-lg pl-4 pr-10 py-2.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 cursor-pointer transition-all"
          style={{ background: 'var(--cc-bg-elevated)', border: '1px solid var(--cc-border)', color: 'var(--cc-text)' }}
        >
          {divisions.map((d) => (
            <option key={d.id} value={d.id}>
              {d.shortName} — {d.industry}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" style={{ color: 'var(--cc-text-tertiary)' }} strokeWidth={2} />
      </div>
    </div>
  );
}

function OpportunityCard({
  title,
  opportunities,
  color,
}: {
  title: string;
  opportunities: { name: string; savings: number; effort: string; timeToValue: number; confidence: number }[];
  color: 'blue' | 'violet';
}) {
  const accentBorder = color === 'blue' ? 'border-l-blue-500' : 'border-l-violet-500';
  const accentText = color === 'blue' ? 'text-blue-400' : 'text-violet-400';

  return (
    <div className="rounded-2xl shadow-sm overflow-hidden" style={{ background: 'var(--cc-bg-card)', border: '1px solid var(--cc-border)' }}>
      <div className="px-4 sm:px-6 py-4" style={{ borderBottom: '1px solid var(--cc-border)' }}>
        <h3 className="text-sm font-semibold" style={{ color: 'var(--cc-text)' }}>{title}</h3>
      </div>
      <div>
        {opportunities.map((opp, i) => (
          <div key={i} className={`px-4 sm:px-6 py-4 border-l-[3px] ${accentBorder}`} style={{ borderBottom: '1px solid var(--cc-border)' }}>
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-sm font-semibold truncate" style={{ color: 'var(--cc-text)' }}>{opp.name}</p>
                <div className="flex items-center gap-2 sm:gap-3 mt-1.5 text-xs flex-wrap" style={{ color: 'var(--cc-text-secondary)' }}>
                  <span className="flex items-center gap-1">
                    <Target className="w-3 h-3" strokeWidth={2} />
                    {opp.confidence}%
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" strokeWidth={2} />
                    {opp.timeToValue} wks
                  </span>
                  <span className="flex items-center gap-1">
                    <Zap className="w-3 h-3" strokeWidth={2} />
                    {opp.effort}
                  </span>
                </div>
              </div>
              <span className={`text-sm font-bold ${accentText} whitespace-nowrap`}>
                {fmt(opp.savings)}
              </span>
            </div>
          </div>
        ))}
        {opportunities.length === 0 && (
          <div className="px-6 py-8 text-center text-sm" style={{ color: 'var(--cc-text-tertiary)' }}>No opportunities data available</div>
        )}
      </div>
    </div>
  );
}
