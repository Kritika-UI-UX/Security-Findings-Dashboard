# Product Requirements Document (PRD)

📌 **Project Title:** Security Findings Dashboard

---

## 🧠 Problem Statement  
Security analysts and IT managers face an overwhelming volume of security findings across diverse assets (VMs, printers, storage). Existing dashboards tend to be too technical, unintuitive, or lack prioritization tools, impeding fast decision-making. We need a unified, human-centered dashboard that simplifies threat visibility, prioritizes action, and boosts team efficiency. :contentReference[oaicite:0]{index=0}

---

## 👥 User Personas  

### 1. Anita – Security Analyst (Primary)  
- **Age:** 29  
- **Context:** Night-shift SOC analyst handling real-time alerts and incident triage.  
- **Goals:** Quickly identify and assign critical threats; monitor remediation.  
- **Pain Points:** Alert overload; poor asset context; dashboard fatigue; weak mobile support.

### 2. Raj – IT Manager (Secondary)  
- **Age:** 42  
- **Context:** Oversees weekly security KPIs, ensures SLA compliance, liaises with DevOps.  
- **Goals:** High-level view of unresolved threats; measure team efficiency; export reports.  
- **Pain Points:** Overly complex charts; lack of export options; fragmented asset views.

### 3. Priya – Compliance Officer (Tertiary)  
- **Age:** 35  
- **Context:** Prepares audits, tracks long-standing vulnerabilities.  
- **Goals:** Monitor aging issues; verify compliance status.  
- **Pain Points:** Incomplete historical context; inability to filter logs. :contentReference[oaicite:1]{index=1}

---

## 🎯 Goals & Success Metrics  

**Primary Goals:**  
- Accelerate identification and response to critical findings  
- Simplify tracking of aging issues and remediation progress  
- Ensure intuitive use for non-technical audiences  

**Success Metrics:**  
- ⏱️ **Average triage time for critical findings** ↓  
- 🧩 **Resolved issues per week** ↑  
- 📈 **User satisfaction score** ≥ 85% (survey)  
- 📊 **Time to export reports** ↓  
- 🔍 **Weekly active usage of key widgets** ↑ :contentReference[oaicite:2]{index=2}

---

## 🚀 Core Features  

1. **Findings Table**  
   - Columns: Asset, Finding, Severity, Date, Estimated Fix Time  
   - Sortable, filterable, groupable by asset/severity

2. **Severity Heatmap Widget**  
   - Color-coded matrix showing severity across assets

3. **Top Critical Findings Widget**  
   - Auto-surfaces the most urgent issues

4. **Assets With Most Findings Widget**  
   - Ranks assets by issue count

5. **Quick Wins Widget**  
   - Highlights high-severity, low-fix-time items

6. **Findings by Age Widget**  
   - Timeline of oldest unresolved issues

7. **Responsive Layout**  
   - Desktop-first; tablet friendly; mobile in V2

8. **Assignment & Status Tags**  
   - Assign to team members; mark open/in-progress/resolved

9. **Export & Share**  
   - PDF/CSV export for compliance and reporting

---

## ⚠️ Edge Cases  

- Multiple findings on one asset with mixed severity  
- Critical alert with zero or null fix time (false positive)  
- Asset offline—finding cannot be verified  
- Missing fix-time data (null values)  
- Role-based access: user cannot assign issues

---

## 🚧 Constraints  

- **Backend/API:** Limited access; use mock data  
- **Timeline:** 1-week turnaround for internship challenge  
- **Tooling:** Figma for design; Lovable.dev for UI copy (editable limits)  
- **Skillset:** Non-technical designer; coding not required  
- **Platform Focus:** Desktop-first; mobile optional

---

## 📎 Notes  

- Created as part of a UX internship design challenge  
- Designs completed in Figma; interface refinements via Lovable.dev  
- Research, design, and documentation produced independently

> Last updated: May 15, 2025  
