import { useState } from 'react';
import { getCompanyProfile, getKpis, getRoiSummary, getRoadmapPhases } from '../data/constants';
import { useCompany } from '../data/CompanyContext';
import { downloadBoardReportPDF } from '../components/BoardReport';

const fmtDollar = (n: number) => {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  return `$${Math.round(n / 1_000)}K`;
};

export default function BoardReportPage() {
  const { company, companies } = useCompany();
  const companyProfile = getCompanyProfile(company.id);
  const companyKpis = getKpis(company.id);
  const roiSummary = getRoiSummary(company.id);
  const roadmapPhases = getRoadmapPhases(company.id);
  const gross = roiSummary.techStackSavings + roiSummary.workflowAutomation + roiSummary.licenseRecovery;
  const roi = Math.round((roiSummary.netYear1 / roiSummary.implementationCosts) * 100);

  const topOppByDivision: Record<string, string> = {
    hcc: 'Project Estimation AI ($520K)',
    hrsi: 'Maintenance Scheduling AI ($240K)',
    hsi: 'AI Defect Detection ($280K)',
    hti: 'License Reclamation (CAD + GIS) ($220K)',
    htsi: 'Transit Schedule Optimization ($280K)',
    he: 'Energy Project Mgmt Digitization ($120K)',
    gg: 'Environmental Compliance Automation ($120K)',
  };

  const divisions = companies
    .filter(c => c.parentId === 'meridian' && c.id !== 'meridian')
    .map(c => {
      const k = getKpis(c.id);
      return {
        name: c.name,
        abbrev: c.initials,
        employees: c.employees,
        scoreBefore: k.techScoreBefore,
        scoreAfter: k.techScoreAfter,
        savings: k.totalSavings >= 1_000_000 ? `$${(k.totalSavings / 1_000_000).toFixed(1)}M` : `$${Math.round(k.totalSavings / 1_000)}K`,
        topOpp: topOppByDivision[c.id] || '',
      };
    });

  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    setDownloading(true);
    try {
      await downloadBoardReportPDF(company.id);
    } finally {
      setDownloading(false);
    }
  };

  const pageFooter = (pageNum: number) => (
    <div style={{
      position: 'absolute' as const,
      bottom: '0.5in',
      left: '0.75in',
      right: '0.75in',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '8px',
      color: '#94a3b8',
      borderTop: '1px solid #e2e8f0',
      paddingTop: '8px',
    }}>
      <span>CONFIDENTIAL</span>
      <span>Prepared by UpSkiller AI  |  March 2026</span>
      <span>Page {pageNum} of 4</span>
    </div>
  );

  return (
    <>
      <style>{`
        @page {
          margin: 0;
          size: 8.5in 11in;
        }
        @media print {
          html, body {
            margin: 0 !important;
            padding: 0 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .no-print { display: none !important; }
          .report-page {
            page-break-after: always;
            page-break-inside: avoid;
          }
          .report-page:last-child {
            page-break-after: auto;
          }
        }
        @media screen {
          body {
            background: #e5e7eb !important;
          }
        }
        * { box-sizing: border-box; }
        .report-page {
          width: 8.5in;
          min-height: 11in;
          background: #ffffff;
          margin: 0 auto;
          padding: 0.75in;
          position: relative;
          font-family: 'Georgia', 'Times New Roman', serif;
          color: #1a1a2e;
          line-height: 1.55;
        }
        @media screen {
          .report-page {
            margin: 20px auto;
            box-shadow: 0 4px 24px rgba(0,0,0,0.12);
          }
        }
        .report-page h1, .report-page h2, .report-page h3, .report-page h4 {
          font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif;
          margin: 0;
        }
        .report-page p { margin: 0; }
        .report-page table {
          width: 100%;
          border-collapse: collapse;
          font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif;
        }
        .section-rule {
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #1e3a5f, #2563eb 40%, transparent 100%);
          margin-bottom: 16px;
        }
        .download-bar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: #16161A;
          padding: 12px 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        }
        .download-bar button {
          border: none;
          border-radius: 8px;
          padding: 10px 24px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
          color: #fff;
        }
        .download-bar .btn-primary { background: #4285F4; }
        .download-bar .btn-primary:hover { background: #3367D6; }
        .download-bar .btn-primary:disabled { background: #555; cursor: wait; }
        .download-bar .btn-secondary { background: #334155; }
        .download-bar .btn-secondary:hover { background: #475569; }
        .download-bar span { color: #94a3b8; font-size: 13px; }
        @media print {
          .download-bar { display: none !important; }
        }
      `}</style>

      <div className="download-bar">
        <span>Board Report Preview</span>
        <button className="btn-primary" onClick={() => void handleDownload()} disabled={downloading}>
          {downloading ? 'Generating PDF...' : 'Download PDF'}
        </button>
        <button className="btn-secondary" onClick={() => window.print()}>
          Print
        </button>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          PAGE 1: COVER
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="report-page" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        {/* Top brand bar */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1.8in' }}>
            <div style={{
              fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif",
              fontSize: '11px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase' as const,
              color: '#64748b',
            }}>
              UpSkiller AI
            </div>
          </div>

          {/* Title block */}
          <div style={{ borderLeft: '3px solid #2563eb', paddingLeft: '24px' }}>
            <h1 style={{
              fontSize: '32px',
              fontWeight: 300,
              letterSpacing: '-0.01em',
              lineHeight: 1.15,
              color: '#0f172a',
              marginBottom: '12px',
            }}>
              Technology Assessment
              <br />
              <span style={{ fontWeight: 600 }}>&amp; Transformation Roadmap</span>
            </h1>
          </div>

          <div style={{ width: '100%', height: '1px', background: '#e2e8f0', margin: '32px 0' }} />

          {/* Client details */}
          <div style={{
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif",
            fontSize: '13px',
            color: '#475569',
            lineHeight: 2.2,
          }}>
            <div>
              <span style={{ color: '#94a3b8', fontSize: '10px', textTransform: 'uppercase' as const, letterSpacing: '0.12em' }}>
                Prepared for
              </span>
              <br />
              <span style={{ fontSize: '18px', fontWeight: 600, color: '#0f172a' }}>
                {companyProfile.name}
              </span>
            </div>
            <div style={{ marginTop: '16px' }}>
              <span style={{ color: '#94a3b8', fontSize: '10px', textTransform: 'uppercase' as const, letterSpacing: '0.12em' }}>
                Prepared by
              </span>
              <br />
              <span style={{ fontSize: '14px', fontWeight: 500, color: '#334155' }}>
                UpSkiller AI Advisory Services
              </span>
            </div>
            <div style={{ marginTop: '16px' }}>
              <span style={{ color: '#94a3b8', fontSize: '10px', textTransform: 'uppercase' as const, letterSpacing: '0.12em' }}>
                Date
              </span>
              <br />
              <span style={{ fontSize: '14px', color: '#334155' }}>
                March 2026
              </span>
            </div>
          </div>
        </div>

        {/* Bottom disclaimer */}
        <div style={{
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif",
          fontSize: '9px',
          color: '#94a3b8',
          lineHeight: 1.6,
          borderTop: '1px solid #e2e8f0',
          paddingTop: '12px',
        }}>
          <strong style={{ color: '#64748b' }}>CONFIDENTIAL</strong> — This document contains proprietary analysis and recommendations.
          Savings estimates are preliminary and based on industry benchmarks, vendor interviews, and operational data provided by {companyProfile.name}.
          Actual results may vary based on implementation scope and timing.
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          PAGE 2: EXECUTIVE SUMMARY
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="report-page">
        <div style={{
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif",
          fontSize: '10px',
          textTransform: 'uppercase' as const,
          letterSpacing: '0.15em',
          color: '#2563eb',
          marginBottom: '4px',
        }}>
          Section 1
        </div>
        <h2 style={{ fontSize: '24px', fontWeight: 600, color: '#0f172a', marginBottom: '6px' }}>
          Executive Summary
        </h2>
        <div className="section-rule" />

        <p style={{ fontSize: '12.5px', color: '#334155', marginBottom: '20px', lineHeight: 1.7 }}>
          UpSkiller AI conducted a comprehensive technology and AI readiness assessment of {companyProfile.name},
          evaluating {companyKpis.workflowsAnalyzed} workflows across {companyProfile.employees.toLocaleString()} employee
          roles and {companyProfile.opCos} operating divisions. The assessment reveals significant opportunity for
          operational improvement through technology modernization and AI adoption.
        </p>

        {/* Key Findings */}
        <h3 style={{
          fontSize: '12px',
          fontWeight: 700,
          textTransform: 'uppercase' as const,
          letterSpacing: '0.08em',
          color: '#1e3a5f',
          marginBottom: '10px',
        }}>
          Key Findings
        </h3>
        <div style={{
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif",
          fontSize: '11.5px',
          color: '#334155',
          lineHeight: 1.7,
          marginBottom: '22px',
          paddingLeft: '2px',
        }}>
          {[
            `Total annualized net savings of ${fmtDollar(roiSummary.netYear1)}, with Year 2 projections of ${fmtDollar(roiSummary.year2Projected)} as automation scales`,
            `AI Readiness Score improvement from ${companyKpis.techScoreBefore}/100 (Critical) to ${companyKpis.techScoreAfter}/100 (Advanced) across all divisions`,
            `${fmtDollar(companyKpis.unusedLicenseWaste)} in annual license waste identified — immediate reclamation opportunity`,
            `${companyKpis.automationReady} of ${companyKpis.workflowsAnalyzed} workflows identified as automation-ready, targeting field operations, scheduling, and compliance`,
            `${roi}% Year 1 ROI on ${fmtDollar(roiSummary.implementationCosts)} implementation investment, with break-even at ${((roiSummary.implementationCosts / gross) * 12).toFixed(1)} months`,
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
              <span style={{ color: '#2563eb', fontWeight: 700, flexShrink: 0, fontSize: '10px', marginTop: '2px' }}>&#9654;</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Savings Waterfall */}
        <h3 style={{
          fontSize: '12px',
          fontWeight: 700,
          textTransform: 'uppercase' as const,
          letterSpacing: '0.08em',
          color: '#1e3a5f',
          marginBottom: '10px',
        }}>
          Year 1 Savings Waterfall
        </h3>
        <div style={{
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif",
          border: '1px solid #e2e8f0',
          borderRadius: '4px',
          overflow: 'hidden',
          marginBottom: '22px',
        }}>
          {[
            { label: 'Tech Stack Optimization', value: roiSummary.techStackSavings, sign: '+', color: '#059669' },
            { label: 'Workflow Automation', value: roiSummary.workflowAutomation, sign: '+', color: '#059669' },
            { label: 'License Recovery', value: roiSummary.licenseRecovery, sign: '+', color: '#059669' },
          ].map((row, i) => (
            <div key={i} style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '8px 14px',
              fontSize: '11.5px',
              borderBottom: '1px solid #f1f5f9',
              color: '#334155',
            }}>
              <span>{row.label}</span>
              <span style={{ fontFamily: "'SF Mono', Menlo, monospace", fontWeight: 600, color: row.color }}>
                {row.sign} {fmtDollar(row.value)}
              </span>
            </div>
          ))}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '8px 14px',
            fontSize: '11.5px',
            borderBottom: '1px solid #f1f5f9',
            color: '#334155',
          }}>
            <span>Gross Savings</span>
            <span style={{ fontFamily: "'SF Mono', Menlo, monospace", fontWeight: 700, color: '#0f172a' }}>
              = {fmtDollar(gross)}
            </span>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '8px 14px',
            fontSize: '11.5px',
            borderBottom: '1px solid #e2e8f0',
            color: '#334155',
          }}>
            <span>Implementation Costs</span>
            <span style={{ fontFamily: "'SF Mono', Menlo, monospace", fontWeight: 600, color: '#dc2626' }}>
              &minus; {fmtDollar(roiSummary.implementationCosts)}
            </span>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px 14px',
            fontSize: '13px',
            fontWeight: 700,
            background: '#f0f9ff',
            color: '#0f172a',
          }}>
            <span>Net Year 1 Savings</span>
            <span style={{ fontFamily: "'SF Mono', Menlo, monospace", color: '#1e3a5f' }}>
              {fmtDollar(roiSummary.netYear1)}
            </span>
          </div>
        </div>

        {/* Immediate Action Items */}
        <h3 style={{
          fontSize: '12px',
          fontWeight: 700,
          textTransform: 'uppercase' as const,
          letterSpacing: '0.08em',
          color: '#1e3a5f',
          marginBottom: '10px',
        }}>
          Immediate Action Items
        </h3>
        <div style={{
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif",
          fontSize: '11.5px',
          color: '#334155',
          lineHeight: 1.7,
        }}>
          {[
            { num: '1', text: 'Initiate license audit across all 7 divisions to capture $2.8M in waste (4-week timeline)' },
            { num: '2', text: 'Approve Samsara fleet intelligence pilot for 200 vehicles in HCC division' },
            { num: '3', text: 'Schedule deep-dive technical assessment with division GMs and IT leadership' },
            { num: '4', text: 'Establish AI Transformation Steering Committee with CEO and CFO sponsorship' },
          ].map((item) => (
            <div key={item.num} style={{ display: 'flex', gap: '10px', marginBottom: '6px' }}>
              <span style={{
                background: '#1e3a5f',
                color: '#ffffff',
                borderRadius: '50%',
                width: '18px',
                height: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '10px',
                fontWeight: 700,
                flexShrink: 0,
                marginTop: '1px',
              }}>
                {item.num}
              </span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        {pageFooter(2)}
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          PAGE 3: DIVISION BREAKDOWN
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="report-page">
        <div style={{
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif",
          fontSize: '10px',
          textTransform: 'uppercase' as const,
          letterSpacing: '0.15em',
          color: '#2563eb',
          marginBottom: '4px',
        }}>
          Section 2
        </div>
        <h2 style={{ fontSize: '24px', fontWeight: 600, color: '#0f172a', marginBottom: '6px' }}>
          Division Performance Analysis
        </h2>
        <div className="section-rule" />

        <p style={{ fontSize: '12px', color: '#475569', marginBottom: '18px', lineHeight: 1.65 }}>
          Each of {companyProfile.name}'s {companyProfile.opCos} operating divisions was assessed independently for AI readiness,
          technology maturity, and optimization potential. The table below summarizes current state, projected improvement,
          and the highest-impact opportunity per division.
        </p>

        <table style={{ fontSize: '11px', marginBottom: '24px' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #1e3a5f' }}>
              {['Division', 'Headcount', 'AI Score (Before \u2192 After)', 'Annual Savings', 'Top Opportunity'].map((h) => (
                <th key={h} style={{
                  padding: '8px 6px',
                  fontSize: '9px',
                  fontWeight: 700,
                  textTransform: 'uppercase' as const,
                  letterSpacing: '0.08em',
                  color: '#1e3a5f',
                  textAlign: h === 'Annual Savings' || h === 'Headcount' ? 'right' : 'left',
                  background: '#f8fafc',
                }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {divisions.map((div, i) => (
              <tr key={div.name} style={{ borderBottom: '1px solid #f1f5f9', background: i % 2 === 0 ? '#ffffff' : '#fafbfc' }}>
                <td style={{ padding: '7px 6px', fontWeight: 600, color: '#0f172a', fontSize: '10.5px' }}>
                  {div.name}
                </td>
                <td style={{ padding: '7px 6px', textAlign: 'right', fontFamily: "'SF Mono', Menlo, monospace", color: '#475569' }}>
                  {div.employees.toLocaleString()}
                </td>
                <td style={{ padding: '7px 6px', fontFamily: "'SF Mono', Menlo, monospace" }}>
                  <span style={{ color: '#dc2626', fontWeight: 600 }}>{div.scoreBefore}</span>
                  <span style={{ color: '#94a3b8', margin: '0 4px' }}>&rarr;</span>
                  <span style={{ color: '#059669', fontWeight: 700 }}>{div.scoreAfter}</span>
                </td>
                <td style={{ padding: '7px 6px', textAlign: 'right', fontFamily: "'SF Mono', Menlo, monospace", fontWeight: 700, color: '#059669' }}>
                  {div.savings}
                </td>
                <td style={{ padding: '7px 6px', color: '#475569', fontSize: '10.5px' }}>
                  {div.topOpp}
                </td>
              </tr>
            ))}
            {/* Totals row */}
            <tr style={{ borderTop: '2px solid #1e3a5f', background: '#f0f9ff' }}>
              <td style={{ padding: '8px 6px', fontWeight: 700, color: '#0f172a' }}>
                Total / Avg
              </td>
              <td style={{ padding: '8px 6px', textAlign: 'right', fontFamily: "'SF Mono', Menlo, monospace", fontWeight: 700, color: '#0f172a' }}>
                {companyProfile.employees.toLocaleString()}
              </td>
              <td style={{ padding: '8px 6px', fontFamily: "'SF Mono', Menlo, monospace" }}>
                <span style={{ color: '#dc2626', fontWeight: 700 }}>{companyKpis.techScoreBefore}</span>
                <span style={{ color: '#94a3b8', margin: '0 4px' }}>&rarr;</span>
                <span style={{ color: '#059669', fontWeight: 700 }}>{companyKpis.techScoreAfter}</span>
              </td>
              <td style={{ padding: '8px 6px', textAlign: 'right', fontFamily: "'SF Mono', Menlo, monospace", fontWeight: 700, color: '#059669', fontSize: '12px' }}>
                {fmtDollar(companyKpis.totalSavings)}
              </td>
              <td style={{ padding: '8px 6px', fontWeight: 600, color: '#0f172a', fontSize: '10.5px' }}>
                &mdash;
              </td>
            </tr>
          </tbody>
        </table>

        {/* Key Observations */}
        <h3 style={{
          fontSize: '12px',
          fontWeight: 700,
          textTransform: 'uppercase' as const,
          letterSpacing: '0.08em',
          color: '#1e3a5f',
          marginBottom: '10px',
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif",
        }}>
          Key Observations
        </h3>
        <div style={{
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif",
          fontSize: '11px',
          color: '#334155',
          lineHeight: 1.7,
        }}>
          {[
            'Herzog Contracting Corp (HCC) represents 36% of total savings opportunity due to fleet scale (800+ vehicles) and legacy dispatch system inefficiency.',
            'Herzog Technologies (HTI) has the highest current AI readiness (48/100) and can serve as a lighthouse division for early AI adoption wins.',
            'All divisions share common infrastructure gaps: no unified data lake, siloed GPS/LIDAR data, and spreadsheet-based crew scheduling.',
            'Environmental compliance automation at Green Group LLC offers the fastest time-to-value with a low-complexity implementation.',
          ].map((obs, i) => (
            <div key={i} style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
              <span style={{ color: '#2563eb', flexShrink: 0, fontSize: '10px', marginTop: '2px' }}>&#9654;</span>
              <span>{obs}</span>
            </div>
          ))}
        </div>

        {/* Score legend */}
        <div style={{
          marginTop: '20px',
          padding: '12px 16px',
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '4px',
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif",
          fontSize: '10px',
          color: '#64748b',
          display: 'flex',
          gap: '24px',
        }}>
          <span style={{ fontWeight: 700, color: '#475569' }}>AI Readiness Scale:</span>
          <span><span style={{ color: '#dc2626', fontWeight: 600 }}>0-40</span> Critical</span>
          <span><span style={{ color: '#f59e0b', fontWeight: 600 }}>41-60</span> Developing</span>
          <span><span style={{ color: '#2563eb', fontWeight: 600 }}>61-80</span> Competent</span>
          <span><span style={{ color: '#059669', fontWeight: 600 }}>81-100</span> Advanced</span>
        </div>

        {pageFooter(3)}
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          PAGE 4: IMPLEMENTATION ROADMAP + NEXT STEPS
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="report-page">
        <div style={{
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif",
          fontSize: '10px',
          textTransform: 'uppercase' as const,
          letterSpacing: '0.15em',
          color: '#2563eb',
          marginBottom: '4px',
        }}>
          Section 3
        </div>
        <h2 style={{ fontSize: '24px', fontWeight: 600, color: '#0f172a', marginBottom: '6px' }}>
          Implementation Roadmap
        </h2>
        <div className="section-rule" />

        <p style={{ fontSize: '12px', color: '#475569', marginBottom: '18px', lineHeight: 1.65 }}>
          The transformation is structured across four quarterly phases, progressing from audit and quick wins
          through full AI-native operations. Each phase builds on the prior, with defined deliverables and measurable outcomes.
        </p>

        {/* Quarterly phases */}
        <div style={{
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif",
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
          marginBottom: '28px',
        }}>
          {roadmapPhases.map((phase, i) => {
            const colors = [
              { bg: '#f0f9ff', border: '#bfdbfe', accent: '#1d4ed8', badge: '#dbeafe' },
              { bg: '#f0fdf4', border: '#bbf7d0', accent: '#15803d', badge: '#dcfce7' },
              { bg: '#fefce8', border: '#fde68a', accent: '#a16207', badge: '#fef9c3' },
              { bg: '#faf5ff', border: '#e9d5ff', accent: '#7e22ce', badge: '#f3e8ff' },
            ];
            const c = colors[i];
            return (
              <div key={phase.quarter} style={{
                border: `1px solid ${c.border}`,
                borderRadius: '6px',
                padding: '14px 16px',
                background: c.bg,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <span style={{
                    background: c.accent,
                    color: '#ffffff',
                    fontSize: '10px',
                    fontWeight: 700,
                    padding: '2px 8px',
                    borderRadius: '3px',
                    letterSpacing: '0.05em',
                  }}>
                    {phase.quarter} 2026
                  </span>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a' }}>
                    {phase.title}
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  {phase.items.map((item, j) => (
                    <div key={j} style={{
                      fontSize: '11px',
                      color: '#334155',
                      display: 'flex',
                      gap: '6px',
                      alignItems: 'flex-start',
                    }}>
                      <span style={{ color: c.accent, fontSize: '7px', marginTop: '4px', flexShrink: 0 }}>&#9679;</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Next Steps CTA */}
        <div style={{
          background: '#0f172a',
          borderRadius: '6px',
          padding: '24px',
          color: '#ffffff',
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif",
        }}>
          <h3 style={{
            fontSize: '16px',
            fontWeight: 700,
            marginBottom: '10px',
            color: '#ffffff',
          }}>
            Next Steps
          </h3>
          <p style={{
            fontSize: '12px',
            lineHeight: 1.7,
            color: '#cbd5e1',
            marginBottom: '14px',
          }}>
            This preliminary assessment identifies {fmtDollar(roiSummary.netYear1)} in net Year 1 savings opportunity.
            To validate findings and begin implementation, we recommend scheduling a
            deep-dive technical assessment with your division leadership and IT teams.
          </p>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            fontSize: '11.5px',
          }}>
            {[
              'Schedule a 2-day on-site technical assessment with division GMs',
              'Validate license usage data with IT and procurement teams',
              'Identify executive sponsor and form AI Transformation Steering Committee',
              'Approve Phase 1 budget and timeline for Q1 2026 kickoff',
            ].map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: '8px', color: '#e2e8f0' }}>
                <span style={{ color: '#60a5fa', flexShrink: 0 }}>&#10003;</span>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div style={{
          marginTop: '20px',
          textAlign: 'center' as const,
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif",
          fontSize: '11px',
          color: '#64748b',
          lineHeight: 1.8,
        }}>
          <div style={{ fontWeight: 600, color: '#334155' }}>UpSkiller AI Advisory Services</div>
          <div>ai-advisory@upskiller.com &nbsp;|&nbsp; upskiller.com/enterprise</div>
        </div>

        {pageFooter(4)}
      </div>
    </>
  );
}
