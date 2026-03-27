import { useEffect } from 'react';
import { companyProfile, roiSummary } from '../data/constants';

const divisions = [
  { name: 'Herzog Contracting Corp', score: 32, savings: '$2.1M', workflows: 22, topOpp: 'GPS fleet data consolidation' },
  { name: 'Herzog Railroad Services', score: 36, savings: '$820K', workflows: 8, topOpp: 'Crew scheduling optimization' },
  { name: 'Herzog Services (Rail Testing)', score: 42, savings: '$680K', workflows: 6, topOpp: 'RailSentry AI upgrade' },
  { name: 'Herzog Technologies', score: 48, savings: '$740K', workflows: 10, topOpp: 'PTC data integration' },
  { name: 'Herzog Transit Services', score: 40, savings: '$860K', workflows: 10, topOpp: 'Transit scheduling AI' },
  { name: 'Herzog Energy', score: 34, savings: '$360K', workflows: 4, topOpp: 'Equipment utilization dashboard' },
  { name: 'Green Group LLC', score: 30, savings: '$240K', workflows: 2, topOpp: 'Environmental compliance automation' },
];

const fmtDollar = (n: number) => `$${n.toLocaleString()}`;
const gross = roiSummary.techStackSavings + roiSummary.workflowAutomation + roiSummary.licenseRecovery;

const roiBreakdown = [
  { label: 'Tech Stack Optimization (Verification)', value: fmtDollar(roiSummary.techStackSavings) },
  { label: 'Workflow Automation', value: fmtDollar(roiSummary.workflowAutomation) },
  { label: 'License Recovery (Adoption)', value: fmtDollar(roiSummary.licenseRecovery) },
  { label: 'Total Gross Savings', value: fmtDollar(gross), bold: true },
  { label: 'Implementation Costs', value: `(${fmtDollar(roiSummary.implementationCosts)})`, negative: true },
  { label: 'Net Year 1 Savings', value: fmtDollar(roiSummary.netYear1), bold: true },
];

export default function BoardReportPage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.print();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        @media print {
          body { margin: 0; padding: 0; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .no-print { display: none !important; }
          .print-break { page-break-before: always; }
        }
        @page { margin: 0.6in; size: letter; }
        .report-body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          color: #1a1a1a;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }
        .report-footer {
          text-align: center;
          font-size: 10px;
          color: #94a3b8;
          padding-top: 20px;
          border-top: 1px solid #e2e8f0;
          margin-top: 40px;
        }
      `}</style>

      <div className="report-body" style={{ padding: '40px 32px' }}>
        {/* ── Cover Page ────────────────────────────────────────── */}
        <div style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', background: '#16161A', color: 'white', margin: '-40px -32px 0', padding: '80px 40px', borderRadius: '0' }}>
          <div style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#64748b', marginBottom: '40px' }}>
            UpSkiller AI
          </div>
          <h1 style={{ fontSize: '36px', fontWeight: 300, lineHeight: 1.2, margin: '0 0 12px' }}>
            Herzog Companies
          </h1>
          <p style={{ fontSize: '20px', color: '#94a3b8', margin: '0 0 40px' }}>
            AI Readiness Assessment
          </p>
          <div style={{ width: '60px', height: '1px', background: '#334155', margin: '0 auto 40px' }} />
          <p style={{ fontSize: '14px', color: '#64748b' }}>March 2026</p>
          <p style={{ fontSize: '12px', color: '#475569', marginTop: '24px', fontStyle: 'italic' }}>
            Preliminary Estimate — Based on Industry Benchmarks
          </p>
        </div>

        {/* ── Executive Summary ─────────────────────────────────── */}
        <div className="print-break" style={{ paddingTop: '40px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '24px', color: '#111827' }}>
            Executive Summary
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '32px' }}>
            <div style={{ background: '#f8fafc', borderRadius: '12px', padding: '20px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#64748b', marginBottom: '8px' }}>
                AI Readiness Score
              </div>
              <div style={{ fontSize: '36px', fontWeight: 700, fontFamily: 'monospace', color: '#ef4444' }}>
                {companyProfile.aiReadinessScore}/100
              </div>
              <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '4px' }}>
                Critical — requires foundational investment
              </div>
            </div>
            <div style={{ background: '#f8fafc', borderRadius: '12px', padding: '20px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#64748b', marginBottom: '8px' }}>
                Total Identified Savings
              </div>
              <div style={{ fontSize: '36px', fontWeight: 700, fontFamily: 'monospace', color: '#10b981' }}>
                $5.8M
              </div>
              <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '4px' }}>
                Annual optimization potential
              </div>
            </div>
            <div style={{ background: '#f8fafc', borderRadius: '12px', padding: '20px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#64748b', marginBottom: '8px' }}>
                License Waste Identified
              </div>
              <div style={{ fontSize: '36px', fontWeight: 700, fontFamily: 'monospace', color: '#ef4444' }}>
                $2.8M
              </div>
              <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '4px' }}>
                In unused or underutilized licenses
              </div>
            </div>
            <div style={{ background: '#f8fafc', borderRadius: '12px', padding: '20px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#64748b', marginBottom: '8px' }}>
                Workflows Analyzed
              </div>
              <div style={{ fontSize: '36px', fontWeight: 700, fontFamily: 'monospace', color: '#111827' }}>
                62
              </div>
              <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '4px' }}>
                Across all 7 operating divisions
              </div>
            </div>
          </div>

          <div className="report-footer">
            Preliminary Estimate — Based on Industry Benchmarks &middot; Prepared by UpSkiller AI &middot; March 2026
          </div>
        </div>

        {/* ── Division Summary Table ──────────────────────────────── */}
        <div className="print-break" style={{ paddingTop: '40px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '24px', color: '#111827' }}>
            Division Summary
          </h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #e2e8f0' }}>
                <th style={{ textAlign: 'left', padding: '10px 8px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#64748b' }}>Division</th>
                <th style={{ textAlign: 'center', padding: '10px 8px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#64748b' }}>Score</th>
                <th style={{ textAlign: 'right', padding: '10px 8px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#64748b' }}>Savings</th>
                <th style={{ textAlign: 'center', padding: '10px 8px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#64748b' }}>Workflows</th>
                <th style={{ textAlign: 'left', padding: '10px 8px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#64748b' }}>Top Opportunity</th>
              </tr>
            </thead>
            <tbody>
              {divisions.map((div, i) => (
                <tr key={div.name} style={{ borderBottom: '1px solid #f1f5f9', background: i % 2 === 0 ? '#fafbfc' : 'white' }}>
                  <td style={{ padding: '10px 8px', fontWeight: 500 }}>{div.name}</td>
                  <td style={{ padding: '10px 8px', textAlign: 'center', fontFamily: 'monospace', fontWeight: 700, color: div.score > 40 ? '#10b981' : div.score >= 30 ? '#f59e0b' : '#ef4444' }}>{div.score}</td>
                  <td style={{ padding: '10px 8px', textAlign: 'right', fontFamily: 'monospace', fontWeight: 600, color: '#10b981' }}>{div.savings}</td>
                  <td style={{ padding: '10px 8px', textAlign: 'center', fontFamily: 'monospace' }}>{div.workflows}</td>
                  <td style={{ padding: '10px 8px', color: '#64748b', fontSize: '12px' }}>{div.topOpp}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="report-footer">
            Preliminary Estimate — Based on Industry Benchmarks &middot; Prepared by UpSkiller AI &middot; March 2026
          </div>
        </div>

        {/* ── ROI Breakdown ───────────────────────────────────────── */}
        <div className="print-break" style={{ paddingTop: '40px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '24px', color: '#111827' }}>
            ROI Breakdown — Year 1
          </h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
            <tbody>
              {roiBreakdown.map((row) => (
                <tr key={row.label} style={{ borderBottom: row.bold ? '2px solid #111827' : '1px solid #f1f5f9' }}>
                  <td style={{ padding: '14px 8px', fontWeight: row.bold ? 700 : 400, color: row.bold ? '#111827' : '#374151' }}>
                    {row.label}
                  </td>
                  <td style={{
                    padding: '14px 8px',
                    textAlign: 'right',
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    fontSize: row.bold ? '18px' : '14px',
                    color: row.negative ? '#ef4444' : row.bold ? '#111827' : '#10b981',
                  }}>
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="report-footer">
            Preliminary Estimate — Based on Industry Benchmarks &middot; Prepared by UpSkiller AI &middot; March 2026
          </div>
        </div>

        {/* ── Recommended Next Steps ──────────────────────────────── */}
        <div className="print-break" style={{ paddingTop: '40px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '24px', color: '#111827' }}>
            Recommended Next Steps
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '12px', padding: '24px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#15803d', marginBottom: '8px' }}>
                Phase 1 — Systems Audit
              </div>
              <div style={{ fontSize: '20px', fontWeight: 600, color: '#111827', marginBottom: '4px' }}>4 Weeks</div>
              <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>
                Complete license audit across all 7 divisions, map 47+ software platforms, identify immediate reclamation opportunities. Target: $2.8M in license waste confirmed.
              </p>
            </div>

            <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '24px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#1d4ed8', marginBottom: '8px' }}>
                Phase 2 — Pilot Programs
              </div>
              <div style={{ fontSize: '20px', fontWeight: 600, color: '#111827', marginBottom: '4px' }}>8 Weeks</div>
              <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>
                Deploy RailSentry AI upgrade, crew scheduling optimization pilot for HRSI division (340 crew members), and Samsara fleet intelligence for 200 vehicles.
              </p>
            </div>

            <div style={{ background: '#faf5ff', border: '1px solid #e9d5ff', borderRadius: '12px', padding: '24px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#7e22ce', marginBottom: '8px' }}>
                Phase 3 — Enterprise Rollout
              </div>
              <div style={{ fontSize: '20px', fontWeight: 600, color: '#111827', marginBottom: '4px' }}>12 Weeks</div>
              <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>
                Scale AI solutions across all 7 divisions, deploy Databricks data lake, migrate from SAP to NetSuite, full crew scheduling AI for 2,800 employees.
              </p>
            </div>
          </div>

          <div className="report-footer">
            Preliminary Estimate — Based on Industry Benchmarks &middot; Prepared by UpSkiller AI &middot; March 2026
          </div>
        </div>
      </div>
    </>
  );
}
