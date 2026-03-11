# Bridge V2 — Product Requirements Document

**Product:** Bridge (B2B SaaS for Indian Driving Schools)

**Core Objective:** Replace 10-year-old legacy software. Reduce the 15-minute admission process to 5 minutes, AND automatically increase branch revenue by 10-15% via WhatsApp lead recovery and lifecycle marketing.

---

## 1. Domain Glossary

| Term | Meaning |
|------|---------|
| Sarathi | Government RTO portal for license applications |
| LL | Learner's License (valid 6 months) |
| DL | Permanent / Driving License |
| RTO | Regional Transport Office |
| KYC | Know Your Customer — identity verification |
| Aadhaar | India's 12-digit biometric identity number |
| DigiLocker | Government digital document wallet; used for Aadhaar-based identity verification via Surepass |
| MDR | Merchant Discount Rate — payment processing fee; Bridge targets 0% MDR via UPI |
| Surepass | Third-party verification API — powers both Aadhaar/DigiLocker and DL verification |
| Inngest | Workflow/job engine for delayed and scheduled background tasks |
| PUC | Pollution Under Control certificate (vehicle compliance) |
| RC | Registration Certificate (vehicle registration document) |
| FC | Fitness Certificate (commercial vehicle compliance) |

---

## 3. Tenancy & Personas

**Tenancy model:** Each driving school is a single tenant. A school can have multiple branches. Branch-level data isolation is enforced — Branch Managers only see their own branch. The tenant record stores the school's RTO-issued operating license number.

**KYC usage:** Each tenant has a monthly KYC verification limit tracked by the system.

| Persona | Access | Primary Goal |
|---------|--------|--------------|
| Tenant Admin (Corporate HO) | Same app — can switch branches + "All Branches" aggregate view | Aggregate revenue, lead conversion rates, prevent revenue leakage |
| Branch Manager | Single branch only | Capture leads, admit clients, schedule sessions, collect payments |
| Instructor | Smartphone, own schedule only | View daily schedule |
| Prospect (Lead) | External — receives WhatsApp | Gets instant pricing when they call the school, plus automated follow-ups |
| Client (Student) | External — receives WhatsApp | Gets updates, receipts, referral/upsell offers |

**Branch configuration:** Each branch can set:
- Working days (default: all 7)
- Operating hours (default: 6AM–8PM)
- License service charge (default: ₹500)
- Default RTO office
- Training packages — a menu of session count + slot duration combos (e.g., "21 sessions x 30 min", "30 sessions x 45 min") that clients choose from during enrollment

**Staff verification:**
- Branch Managers: Aadhaar verified via Surepass DigiLocker API
- Instructors: Driving License verified via Surepass DL API. Each instructor is assigned a default vehicle.

**Vehicle management:** Each vehicle tracks:
- Name, registration number, rent per slot, transmission (Manual / Automatic / IMT)
- Status: Active, Maintenance, Retired
- Compliance expiries: PUC, Insurance, Registration (RC), Fitness Certificate (FC)

---

## 4. Core Flows

### Flow 0: Tenant Onboarding

3-step wizard for new sign-ups:
1. Enter school name
2. Enter WhatsApp number
3. Add branch locations

### Flow 1: WhatsApp Lead Recovery Pipeline (with Marketing Hub)

*Implementation Note (The "Bridge-Assigned Bot" Strategy): Bridge provisions a dedicated, cloud-hosted Indian (+91) WhatsApp Business API number for the school.*
* *The Branch Manager does NOT connect their personal/business WhatsApp account. They keep using their existing phone number normally.*
* *Bridge registers the new provisioned number via a developer-first BSP (like Plivo, Twilio, or an Indian aggregator like Fyno) and names the profile "Maruti Driving School Bot".*
* *Compliance/KYC Constraint: Due to Indian Telecom regulations, purchasing a +91 virtual number programmatically requires business KYC (GST Certificate or Incorporation Docs). The Onboarding Wizard must collect a business document upload to pass to the provider's API for DLT/Number approval.*
* *Every automated message (Instant pitches, expiry upsells, dormant blasts) fires from this provisioned Bridge number.*
* *All outgoing Bot templates contain a Quick Reply Button labeled `💬 Chat with Branch Manager`. This button is a `wa.me` deep-link that directs the customer straight completely out of the Bot and into a direct one-on-one chat with the Manager's actual personal/business phone number.*

1. **Capture:** Prospect calls the school asking for prices. Branch Manager opens Bridge and logs the lead: Name, Phone, Source (walk-in / phone call / referral / WhatsApp), and optional notes.
2. **Instant Pitch:** Bridge fires an immediate WhatsApp message via Inngest: *"Hi [Name], thanks for contacting Maruti Driving School! Here is our pricing brochure and location. Reply to this message to book your slot."*
3. **Automated Chase:** If the Lead is not converted to a "Client" within 48 hours, Inngest sends a follow-up: *"Hi [Name], still looking to learn driving? Enroll today and get ₹500 off your Full Course."*
4. **Lead Scoring (Hot Leads):** Any interaction (e.g., clicking the tracked pricing brochure link) dynamically increases the lead's score and flags them as a "Hot Lead" in the Action Center for a manual follow-up call.
5. **Occasion Blasts / Dormant Re-engagement:** Branch Managers can bulk-select unconverted leads (e.g., from the last 6 months) and send custom promotional blasts (e.g., "Diwali Special: ₹1000 off!") via the Marketing Hub.

### Flow 2: 5-Minute Student Admission

A client can come from a converted Lead or walk in directly.

1. Branch Manager converts a Lead or creates a new Client.
2. Selects enrollment type:
   - **Full Service** = License process (LL + DL paperwork) + driving training sessions.
   - **Training Only** = Driving sessions only, no license paperwork.
3. Client selects a training package (configured per branch — e.g., "21 sessions x 30 min").
4. Client selects their preferred vehicle. The instructor is auto-assigned based on the vehicle's default instructor.
5. **KYC Step:** Enters 12-digit Aadhaar. System validates via Surepass, auto-fills demographics.
6. **Payment Step:** Full payment upfront or 2 installments. System tracks total_fee vs paid_amount. Accepts 0% MDR UPI QR or Cash.

**Client lifecycle:** Lead (optional) -> Enrolled -> LL Issued (if Full Service) -> Training -> DL Issued -> Alumni

### Flow 3: Sarathi Portal Auto-Fill (Chrome Extension)

1. Branch Manager opens Client profile and clicks "Auto-Fill Sarathi".
2. Bridge passes data to Chrome Extension, which opens the Sarathi portal and injects fields instantly.

### Flow 4: Alumni Upsell Engine

*In India, a Learner's License (LL) expires in 6 months. Students must get a Permanent License (DL) before then.*

1. **Trigger:** Client completes their course and gets their LL. Manager marks status as "LL Issued" and logs the date.
2. **Referral Campaign (Day 30):** Inngest sends WhatsApp: *"Hope you're driving safely! Refer a friend to our school and get ₹500 cashback when they join."*
3. **Expiry Upsell (Month 5):** Inngest sends WhatsApp: *"Your Learner's License expires in 30 days! Book your Permanent DL test with us today to avoid RTO penalties."*
4. **Family Member Discount (Year 1):** On the anniversary of receiving their DL, Inngest sends: *"Happy anniversary of getting your license! Do you have a sibling or spouse who needs to learn? Here is a ₹500 family discount."*
5. **"New Car" Refresher Course (Year 1–2):** Targeted campaign upselling a few sessions of "Highway Driving Masterclass" or "City Traffic Confidence" aimed at alumni who may have recently purchased their own vehicle.

### Flow 5: Smart Scheduling (Vehicle-First)

Client selects their vehicle during enrollment. All sessions are booked upfront at fixed recurring slots. The calendar is vehicle-centric:
1. Select a vehicle to view its schedule and available slots.
2. Manager clicks an empty slot, assigns Client. Instructor is auto-assigned via the vehicle's default instructor. System prevents double-booking.

### Automated WhatsApp Messages (via API Aggregator e.g., Fyno/Plivo)

Bridge provisions and hosts the dedicated WhatsApp Bot numbers for each tenant. Bridge manages template creation and compliance programmatically.

| Trigger | Timing | Message |
|---------|--------|---------|
| Lead captured | Immediate | Pricing brochure + location |
| Lead not converted | 48 hours later | Follow-up with discount offer |
| Payment received | Immediate | Payment receipt |
| Upcoming session | Before scheduled training | Session reminder |
| Pending balance | When installment due | Payment due reminder |
| Course completed | Day 30 after LL issuance | Referral campaign |
| LL expiring | Month 5 after LL issuance | DL upsell |
| DL Anniversary | 1 year after DL issuance | Family member discount offer |
| Refresher Upsell | 1-2 years after DL issuance | Highway/Refresher training offer |
| Occasion Broadcast | Manual trigger by Manager | Bulk promos to dormant leads (e.g., Diwali) |

---

## 5. Dashboard

| Widget | Purpose |
|--------|---------|
| Metric Cards | Key numbers at a glance |
| Action Center | Pending Sarathi filings, overdue payments, upcoming RTO tests, Hot Leads (link clicks), Unread Messages |
| Revenue Overview | Revenue trends |
| Today's Schedule | Vehicle-wise training schedule for the day |
| Recent Transactions | Latest payments |

---

## 6. Pages

| Page | Status | Description |
|------|--------|-------------|
| Sign In / Sign Up | Built | Clerk-powered auth |
| Onboarding | Built | 3-step tenant setup wizard |
| Dashboard | Built | Metrics, action center, schedule, transactions |
| Fleet | Built | Vehicle CRUD + compliance tracking |
| Staff | Built | Staff CRUD + KYC verification |
| Settings | Built | Branch operations configuration (Staff Phone vs Bot Number routing) |
| Calendar | Planned | Vehicle-first scheduling |
| Clients | Planned | Client list with search/filter, add/edit |
| Income | Planned | Auto-tracked from client payments |
| Expense | Planned | Manual expense logging with categories (Fuel, Rent, Salaries, Vehicle Maintenance, Insurance, RTO Fees, Marketing, Utilities, Other) — extensible later |
| Marketing Hub | Planned | Bulk WhatsApp broadcast tool for leads and alumni segments |
