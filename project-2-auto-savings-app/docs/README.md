# ForgetMeNot — Automated Banking Savings Tool

## Overview
**ForgetMeNot** is a business analysis and product design initiative designed to integrate an automated, set-and-forget savings feature directly into modern mobile banking applications. By reducing friction in daily financial management, the tool helps users consistently meet short- and long-term savings goals without active manual transfers.

---

## Key Features
* **Automated Savings Rules:** Configurable rules for recurring transfers, round-up savings, and threshold-triggered deposits.
* **Goal Tracking Dashboard:** Clear visual progress indicators for distinct financial targets.
* **Seamless Banking Integration:** Designed to fit naturally within existing mobile and online banking navigation flows.

---

## Tools & Methodologies

### Tools & Technologies
* **Requirements & Modeling:** Mermaid.js (Sequence & Activity Diagrams), Draw.io
* **UI/UX Design & Visuals:** Canva, Figma
* **Documentation & Management:** Markdown, Git/GitHub, JIRA

### Methodologies & Frameworks
* **Agile Product Analysis:** User Stories, Acceptance Criteria (Given-When-Then), Backlog Refinement
* **User-Centered Design (UCD):** Persona Development, User Journey Mapping, Empathy Mapping
* **Business Process Modeling:** BPMN 2.0 flowcharts for transaction workflows and automated trigger logic

---

## System Architecture & Process Flow

### Transaction & Savings Logic Flow

```mermaid
flowchart TD
    A[User Setup Savings Rule] --> B{Trigger Event Detected}
    B -->|Card Purchase Round-Up| C[Calculate Round-Up Difference]
    B -->|Scheduled Transfer| D[Retrieve Scheduled Amount]
    C --> E{Check Available Balance}
    D --> E
    E -->|Sufficient Funds| F[Transfer to Savings Goal]
    E -->|Insufficient Funds| G[Notify User & Skip Transfer]
    F --> H[Update Goal Progress Dashboard]
