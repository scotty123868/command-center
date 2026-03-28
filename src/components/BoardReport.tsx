import { config } from '../data/config';
import { getRoiSummary, getKpis, getWorkflowSummary, getLicenses } from '../data/constants';

const today = new Date().toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

/** Escape HTML entities to prevent XSS from URL-injected config values */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

const fmtMoney = (n: number) =>
  n >= 1_000_000 ? `$${(n / 1_000_000).toFixed(1)}M` : `$${Math.round(n / 1_000)}K`;

function generateReportHTML(companyId = 'meridian'): string {
  const roiSummary = getRoiSummary(companyId);
  const kpis = getKpis(companyId);
  const wfSummary = getWorkflowSummary(companyId);
  const licenses = getLicenses(companyId);
  const totalLicenseWaste = licenses.reduce((sum, l) => sum + l.annualWaste, 0);
  const safeName = escapeHtml(config.name);
  const safeEmployees = escapeHtml(config.employees.toLocaleString());
  const safeOpCos = escapeHtml(String(config.opCos));
  const safeAiScore = escapeHtml(String(config.aiReadinessScore));
  const safeToday = escapeHtml(today);

  const gross = roiSummary.techStackSavings + roiSummary.workflowAutomation + roiSummary.licenseRecovery;
  const net = roiSummary.netYear1;
  const roi = Math.round((net / roiSummary.implementationCosts) * 100);
  const breakeven = ((roiSummary.implementationCosts / gross) * 12).toFixed(1);
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Board Report — ${safeName}</title>
  <style>
    @page { margin: 0.6in; size: letter; }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      color: #1a1a1a;
      background: #fff;
      max-width: 800px;
      margin: 0 auto;
      padding: 40px 32px;
      line-height: 1.5;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    @media print {
      body { padding: 0; }
      .no-print { display: none !important; }
    }

    /* Header */
    .header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      border-bottom: 2px solid #4285F4;
      padding-bottom: 16px;
      margin-bottom: 24px;
    }
    .logo-area { display: flex; align-items: center; gap: 10px; }
    .logo-mark {
      width: 32px; height: 32px; border-radius: 8px;
      background: #4285F4; color: #fff;
      display: flex; align-items: center; justify-content: center;
      font-weight: 700; font-size: 14px;
    }
    .logo-text { font-size: 20px; font-weight: 700; color: #111; }
    .logo-text span { color: #4285F4; }
    .header-right { text-align: right; font-size: 12px; color: #666; }
    .report-title { font-size: 14px; font-weight: 600; color: #333; margin-top: 2px; }

    /* Company bar */
    .company-bar {
      background: #F8F9FB; border-radius: 8px; padding: 14px 18px;
      display: flex; justify-content: space-between; align-items: center;
      margin-bottom: 24px; border: 1px solid #E5E7EB;
    }
    .company-name { font-size: 15px; font-weight: 700; color: #111; }
    .company-meta { display: flex; gap: 16px; font-size: 12px; color: #555; }
    .company-meta strong { color: #111; }

    /* Sections */
    .section { margin-bottom: 22px; }
    .section-title {
      font-size: 13px; font-weight: 700; text-transform: uppercase;
      letter-spacing: 0.08em; color: #4285F4; margin-bottom: 8px;
      padding-bottom: 4px; border-bottom: 1px solid #E5E7EB;
    }
    .section p { font-size: 13px; color: #333; line-height: 1.65; }

    /* Tables */
    table { width: 100%; border-collapse: collapse; font-size: 12px; margin-top: 6px; }
    th {
      text-align: left; padding: 8px 10px; background: #F3F4F6;
      font-size: 10px; font-weight: 700; text-transform: uppercase;
      letter-spacing: 0.06em; color: #555; border-bottom: 1px solid #E5E7EB;
    }
    td { padding: 8px 10px; border-bottom: 1px solid #F3F4F6; color: #333; }
    tr:last-child td { border-bottom: none; }
    .num { font-family: 'SF Mono', 'Menlo', monospace; font-weight: 600; }
    .green { color: #059669; }
    .red { color: #DC2626; }
    .blue { color: #4285F4; }
    .bold { font-weight: 700; }

    /* Waterfall */
    .waterfall-row {
      display: flex; justify-content: space-between; padding: 6px 0;
      border-bottom: 1px solid #F3F4F6; font-size: 13px;
    }
    .waterfall-row:last-child { border-bottom: none; }
    .waterfall-row.total {
      border-top: 2px solid #111; border-bottom: none;
      font-weight: 700; padding-top: 10px; margin-top: 4px;
    }

    /* Timeline */
    .timeline-grid { display: grid; grid-template-columns: 60px 1fr; gap: 4px 12px; font-size: 12px; }
    .q-label {
      font-weight: 700; color: #4285F4; font-size: 11px;
      padding: 4px 0;
    }
    .q-desc { color: #444; padding: 4px 0; }

    /* Footer */
    .footer {
      margin-top: 28px; padding-top: 12px; border-top: 1px solid #E5E7EB;
      font-size: 10px; color: #999; text-align: center;
    }

    /* Print button */
    .print-btn {
      position: fixed; bottom: 24px; right: 24px;
      background: #4285F4; color: #fff; border: none; border-radius: 10px;
      padding: 12px 24px; font-size: 14px; font-weight: 600;
      cursor: pointer; box-shadow: 0 4px 12px rgba(66,133,244,0.3);
    }
    .print-btn:hover { background: #3367D6; }
  </style>
</head>
<body>
  <button class="print-btn no-print" onclick="window.print()">Print / Save as PDF</button>

  <!-- Header -->
  <div class="header">
    <div class="logo-area">
      <div class="logo-mark">U</div>
      <div>
        <div class="logo-text">UpSkiller <span>AI</span></div>
      </div>
    </div>
    <div class="header-right">
      <div class="report-title">Board Report &mdash; AI Transformation Analysis</div>
      <div>${safeToday}</div>
    </div>
  </div>

  <!-- Company Bar -->
  <div class="company-bar">
    <div class="company-name">${safeName}</div>
    <div class="company-meta">
      <div><strong>${safeEmployees}</strong> Employees</div>
      <div><strong>${safeOpCos}</strong> Divisions</div>
      <div>AI Readiness: <strong class="red">${safeAiScore}/100</strong></div>
    </div>
  </div>

  <!-- Executive Summary -->
  <div class="section">
    <div class="section-title">Executive Summary</div>
    <p>
      UpSkiller AI conducted a comprehensive AI transformation analysis of ${safeName}, evaluating
      ${wfSummary.total} workflows, 23 software tools, and 1,850+ employee roles across ${safeOpCos} operating companies.
      The analysis identified <strong>${fmtMoney(net)} in annualized net savings</strong> through tech stack optimization,
      workflow automation, and license reclamation. With an implementation investment of ${fmtMoney(roiSummary.implementationCosts)}, the program
      achieves <strong>break-even in ${breakeven} months</strong> and delivers a <strong>${roi}% Year 1 ROI</strong>.
      Year 2 projected savings compound to ${fmtMoney(roiSummary.year2Projected)} as automation scales and maintenance costs approach zero.
    </p>
  </div>

  <!-- KPI Table -->
  <div class="section">
    <div class="section-title">Key Performance Indicators</div>
    <table>
      <thead>
        <tr><th>Metric</th><th>Current</th><th>Projected</th><th>Impact</th></tr>
      </thead>
      <tbody>
        <tr>
          <td>Tech Stack Score</td>
          <td class="num">${kpis.techScoreBefore} / 100</td>
          <td class="num blue">${kpis.techScoreAfter} / 100</td>
          <td class="num green">+${Math.round(((kpis.techScoreAfter - kpis.techScoreBefore) / kpis.techScoreBefore) * 100)}% improvement</td>
        </tr>
        <tr>
          <td>Annual Tech Spend</td>
          <td class="num">${fmtMoney(roiSummary.techStackSavings + roiSummary.workflowAutomation + roiSummary.licenseRecovery + roiSummary.netYear1)}</td>
          <td class="num blue">${fmtMoney(roiSummary.netYear1)}</td>
          <td class="num green">-${fmtMoney(roiSummary.techStackSavings + roiSummary.workflowAutomation + roiSummary.licenseRecovery - roiSummary.implementationCosts)} savings</td>
        </tr>
        <tr>
          <td>Workflow Automation Rate</td>
          <td class="num">0%</td>
          <td class="num blue">${Math.round((wfSummary.fullyAutomatable / wfSummary.total) * 100)}%</td>
          <td class="num green">${wfSummary.fullyAutomatable} of ${wfSummary.total} workflows</td>
        </tr>
        <tr>
          <td>License Utilization</td>
          <td class="num">54%</td>
          <td class="num blue">94%</td>
          <td class="num green">${fmtMoney(totalLicenseWaste)} waste eliminated</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Top 5 Opportunities -->
  <div class="section">
    <div class="section-title">Top 5 Opportunities</div>
    <table>
      <thead>
        <tr><th>#</th><th>Opportunity</th><th>Category</th><th>Est. Savings</th><th>Confidence</th></tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td class="bold">Unused License Reclamation</td>
          <td>License Audit</td>
          <td class="num green">$1.2M/yr</td>
          <td class="num">97%</td>
        </tr>
        <tr>
          <td>2</td>
          <td class="bold">Cross-Division Inventory Visibility</td>
          <td>Data Infrastructure</td>
          <td class="num green">$890k/yr</td>
          <td class="num">81%</td>
        </tr>
        <tr>
          <td>3</td>
          <td class="bold">Predictive Equipment Maintenance</td>
          <td>Workflow Automation</td>
          <td class="num green">$680k/yr</td>
          <td class="num">68%</td>
        </tr>
        <tr>
          <td>4</td>
          <td class="bold">Crew Scheduling &amp; Dispatch AI</td>
          <td>Workflow Automation</td>
          <td class="num green">$580k/yr</td>
          <td class="num">88%</td>
        </tr>
        <tr>
          <td>5</td>
          <td class="bold">Dev Workflow Automation</td>
          <td>Tech Stack</td>
          <td class="num green">$500k/yr</td>
          <td class="num">72%</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Implementation Timeline -->
  <div class="section">
    <div class="section-title">Implementation Timeline</div>
    <div class="timeline-grid">
      <div class="q-label">Q1 2026</div>
      <div class="q-desc">Tech Stack Audit + Quick Wins &mdash; License reclamation, vendor scoring, quick-win automation identification</div>
      <div class="q-label">Q2 2026</div>
      <div class="q-desc">Workflow Automation Pilots &mdash; Crew scheduling AI, FRA compliance reporting, equipment fleet management</div>
      <div class="q-label">Q3 2026</div>
      <div class="q-desc">Scale + Integrate &mdash; Cross-Division data platform, predictive maintenance rollout, AI-native CRM migration</div>
      <div class="q-label">Q4 2026</div>
      <div class="q-desc">Optimize + Compound &mdash; Full automation scaling, continuous optimization, Year 2 planning</div>
    </div>
  </div>

  <!-- Savings Waterfall -->
  <div class="section">
    <div class="section-title">Savings Waterfall</div>
    <div class="waterfall-row">
      <span>Tech Stack Optimization</span>
      <span class="num green">+ ${fmtMoney(roiSummary.techStackSavings)}</span>
    </div>
    <div class="waterfall-row">
      <span>Workflow Automation</span>
      <span class="num green">+ ${fmtMoney(roiSummary.workflowAutomation)}</span>
    </div>
    <div class="waterfall-row">
      <span>License Recovery</span>
      <span class="num green">+ ${fmtMoney(roiSummary.licenseRecovery)}</span>
    </div>
    <div class="waterfall-row">
      <span>Implementation Costs</span>
      <span class="num red">&minus; ${fmtMoney(roiSummary.implementationCosts)}</span>
    </div>
    <div class="waterfall-row total">
      <span>Net Year 1 Savings</span>
      <span class="num blue">${fmtMoney(net)}</span>
    </div>
  </div>

  <!-- Footer -->
  <div class="footer">
    Confidential &mdash; Prepared by UpSkiller AI Command Center &mdash; ${safeToday}
  </div>
</body>
</html>`;
}

export function openBoardReport(companyId = 'meridian') {
  const reportWindow = window.open('', '_blank');
  if (reportWindow) {
    reportWindow.document.write(generateReportHTML(companyId));
    reportWindow.document.close();
  }
}
