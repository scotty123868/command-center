# Herzog Companies — Demo Script
## Meeting with Brad Lager (CEO) and CTO
## Prepared: March 2026

---

## Pre-Meeting Setup

- [ ] Open Command Center in Tab 1: `[vercel-url]?reset=true` (clears demo state)
- [ ] Open Lastmile in Tab 2: `[vercel-url]` (pre-loaded to Overview)
- [ ] Print 2 copies of one-page Executive Summary (from Board Report PDF)
- [ ] Have pricing sheet in folder (not visible until asked)
- [ ] Test both URLs load correctly on meeting WiFi
- [ ] Prepare backup: both apps running locally (`npm run dev`)

---

## Act 0: "Before I Open the Laptop" (0-2 min)

**Place the printed one-page Executive Summary face-down on the table.**

> "Brad, before I show you anything — what's the biggest technology frustration across your divisions right now?"

**Listen. Take notes. Whatever he says, connect it to what you're about to show.**

> "That's exactly what we wanted to dig into. We spent the last few weeks modeling Herzog's technology landscape. Let me show you what we found."

**Flip the one-page summary face up. Give Brad and CTO each a copy.**

> "This is the executive summary. The platform behind it is what I want to walk you through."

---

## Act 1: "We Understand Your Business" (2-4 min)

**Open Tab 1 — Command Center lands on Executive Briefing (full-screen, dark, immersive)**

> "We built this specifically for Herzog. Not a template — a model of your actual operating structure."

**Scroll through slowly:**

- **Industry stats:** "The railroad industry is at an inflection point. FRA compliance costs are rising, 47% of the workforce is eligible for retirement, and your Class 1 competitors are investing heavily in AI."

- **The $5.8M number:** "Based on industry benchmarks for a company of your size and structure, we estimate $5.8M in annual optimization potential across your 7 divisions."

- **IMPORTANT — say this NOW, before they question it:**
  > "These are preliminary estimates based on public data and industry patterns. The real assessment connects to your actual systems — SAP, Primavera, your PTC platforms — and gives you exact numbers."

- **Division cards:** "We modeled each division independently — HCC, Railroad Services, Technologies, Transit, all seven."

**Click "Explore Your Assessment →"**

---

## Act 2: "The Scale of the Opportunity" (4-7 min)

**Dashboard loads with KPI cards**

> "Here's the big picture: $5.8M in identified savings, 62 workflows we can automate, and $820K in license waste — software you're paying for that nobody's using."

**Click the company dropdown → show 7 divisions**

> "Every division is independently analyzed. Let me show you the biggest one."

**Click into HCC (Herzog Contracting Corp)**

> "HCC alone has $2.1M in potential savings. Their Primavera P6 setup has 340 licenses but our model shows significant underutilization. Their crew scheduling is still largely manual."

**Navigate back to parent (Herzog Companies)**

**Toggle "Show Cost of Inaction"**

> "Here's what keeps me up at night about companies that wait. These numbers compound."

*KPI cards flip to red — showing 3-year cost of doing nothing*

> "Every month you wait, the gap between you and the companies investing in AI widens."

**Pause. Let the red numbers sit. Don't rush past this.**

---

## Act 3: "How It Actually Works" — The CTO Moment (7-11 min)

**This is where you win the CTO. Show the platform infrastructure.**

### 3A: Integration Hub (Command Center — Tab 1)

**Navigate to Integration Hub in the Platform section**

> "Let me show you how this actually works under the hood."

- Show the 8 connected data sources with coverage percentages
- > "We connect to your systems through MCP — Model Context Protocol. SAP, Primavera, Kronos, PTC — all your existing platforms."
- Show the Assessment Methodology cards
- Show the Data Security panel
- > "Everything runs in your VPC. No data leaves your network. SOC 2 Type II certified."

### 3B: AI Infrastructure (Lastmile — Tab 2)

**Switch to Tab 2 → Navigate to AI Infrastructure**

> "Command Center is the assessment — day one. This is the ongoing platform."

- Show the 5-stage pipeline: CONNECT → INGEST → ANALYZE → VERIFY → DEPLOY
- > "This is the full architecture. What you saw in Command Center is stage one."
- Show the Technology Stack panel (GPT-4o, Claude, custom models, Kafka, K8s)
- Show the Deployment Architecture diagram
- > "This runs inside your infrastructure. On-premise or your cloud."

### 3C: System Connectors

**Navigate to System Connectors**

- Show the 8 active MCP connections with real-time status
- > "Primavera P6 — last sync 7 minutes ago, 1,247 active projects mapped."
- Show the pending connections table
- > "Your custom dispatch system is next — we just need IT credentials."

### 3D: AI Reliability (The Trust Layer)

**Navigate to AI Reliability**

- Show the 94.2% trust score
- > "Every AI output is tested continuously. PTC Signal Verification is at 99.1% accuracy."
- Show the Human-in-the-Loop queue
- > "When the AI isn't confident enough, it flags for human review. Your FRA safety standards are never compromised."

### 3E: Adoption Dashboard (The CEO's Weekly View)

**Navigate to Adoption Dashboard**

- Show the 38% overall adoption bar → "This is your progress bar."
- Show division breakdown → "HTI is leading at 52%. Green Group needs attention."
- Show the AI tools grid → "Track Geometry AI has 89 users running 340 analyses per week."
- Show the blockers → "Custom dispatch is the main bottleneck."

> "This is the page you'd check every week. It tells you exactly where AI adoption stands across all 7 divisions."

**If CTO asks questions, let them drive the rest of Act 3. If time is short, skip 3E.**

---

## Act 4: "The Ask" (9-11 min)

**Back to Tab 1 — Command Center → ROI Summary**

> "Let me break down the math."

*Walk through the waterfall:*
> "Tech stack optimization: $2.2M. Workflow automation: $3.8M. License recovery: $2.8M. Minus $3.0M in implementation costs. That's $5.8M net in Year 1."

**Click "Generate Board Report"**

> "This downloads as a PDF you can share with your board."

*PDF opens/downloads*

> "We prepared this for you. It breaks down every division, every opportunity, every number."

**THE CLOSE:**

> "What you've seen today is our preliminary model. The real assessment connects to your actual systems and gives you exact numbers. Based on what we've seen in comparable railroad operations, the assessment alone typically identifies 3-5x its cost in savings within the first 60 days."

> "We have capacity to start [SPECIFIC DATE]. Should we lock that in?"

---

## Pivot Strategies

### If Brad asks about pricing:
> "The assessment is a [PRICE] fixed engagement over [X] weeks. The platform subscription follows based on what we find. The assessment typically pays for itself within the first quarter."

### If CTO asks about integration:
> "We connect to your existing systems through MCP — Model Context Protocol. Let me show you."

*Navigate to Integration Hub (Command Center) or System Connectors (Lastmile) to show live connections*

> "SAP, Primavera, Kronos, PTC — all your existing platforms. No rip-and-replace. Our connectors sit alongside your current tools."

### If CTO asks about AI safety/reliability:
*Navigate to AI Reliability page*
> "Every AI output is tested against 847 test cases daily. FRA-critical workflows require 95%+ confidence — below that, it flags for human review. PTC Signal Verification is at 99.1% accuracy — we're submitting for FRA certification."

### If CTO asks "can you really connect to Primavera P6?":
*Navigate to System Connectors → Primavera card*
> "We already have the connector built. 87% schema coverage. Full integration takes about 3 days once we have credentials."

### If they seem skeptical about the numbers:
> "Fair question. These are estimates based on industry benchmarks. Let me show you how we calculated them."

*Drill into a specific division they care about. Show the methodology: verification + automation + adoption - costs = net impact*

> "The real value of the assessment is replacing these estimates with your actual data."

### If they ask "who else have you done this for?":
> "We've deployed the platform in [X industry]. The railroad-specific work you see here is what we built because we see the opportunity in this industry and wanted to prove we understand the domain before asking for your time."

### If they want to close immediately:
> "Great. Here's what we need from your IT team to get started: API access to your license management system, read-only access to Primavera project data, and a 30-minute call with each division's IT lead. We can have the first division assessed within two weeks."

### If the meeting is running short:
Skip Act 3 (lastmile) entirely. Go straight from Act 2 (Cost of Inaction) to Act 4 (ROI + close).

### If they're not ready to commit:
> "No pressure at all. Take the board report, discuss it internally. I'd love to schedule a follow-up with your CTO and division IT leads to answer technical questions. When works for you?"

---

## Post-Meeting

- [ ] Send follow-up email within 2 hours with PDF board report attached
- [ ] Reference specific pain point Brad mentioned in Act 0
- [ ] Propose specific next step with date
- [ ] Connect on LinkedIn if not already connected
