# Detailed Dev Checklist: "ConfConnect"

| **Document Version** | 1.0 |
| :--- | :--- |
| **Status** | Pending |
| **Testing Strategy** | Manual Verification + Playwright E2E |

---

## Phase 1: The Foundation (Monorepo & Auth)

### 1.1 Repo & Backend Setup
- [ ] Initialize Monorepo structure (`client/` and `server/`).
- [ ] **Server:** Install NestJS, Prisma, and Supabase client.
- [ ] **DB:** Run `npx prisma init` and define `User` model.
- [ ] **DB:** Execute `npx prisma migrate dev --name init`.
- [ ] **Endpoint:** Create `GET /health` returning `{ status: 'ok' }`.
- [ ] **CHECKPOINT:** Curl the health endpoint -> returns 200 OK.

### 1.2 Frontend Shell & Auth
- [ ] **Client:** Initialize Vite + React TS.
- [ ] **UI:** Install Tailwind & Shadcn (`npx shadcn-ui@latest init`).
- [ ] **Layout:** Build `MobileShell` (Header + BottomNav).
- [ ] **Auth:** Implement Supabase Auth (Magic Link).
- [ ] **Guard:** Create `ProtectedRoute` component in React.
- [ ] **Strategy:** Implement `JwtStrategy` in NestJS to validate Supabase tokens.
- [ ] **CHECKPOINT:** Login on frontend -> Receive JWT -> Call protected API -> 200 OK.

### 🧪 Playwright Verification (Auth)
- [ ] **Task:** Create test `auth.spec.ts`.
- [ ] **Scenario:** User lands on home -> Redirects to Login -> Enters Email -> Logs in -> Sees Dashboard.

---

## Phase 2: Organizer Flow (Events & Money)

### 2.1 Event Management
- [x] **DB:** Update Prisma schema with `Event` model.
- [x] **API:** Create `POST /events` (Protected).
- [x] **Form:** Build `CreateEventForm` with Zod validation (Title, Date, Price).
- [x] **UI:** Build `OrganizerDashboard` listing their events.
- [ ] **CHECKPOINT:** Create an event in UI -> Verify row appears in Supabase `Event` table.

### 2.2 Stripe Connect (Onboarding)
- [ ] **Stripe:** Enable Connect in Stripe Dashboard.
- [x] **API:** Create endpoint `POST /payments/onboard` (Returns Stripe OAuth link).
- [ ] **API:** Create endpoint `GET /payments/refresh` (Handle incomplete onboarding).
- [x] **Frontend:** Add "Setup Payouts" button to Dashboard.
- [ ] **CHECKPOINT:** Click button -> Redirect to Stripe -> Complete onboarding -> Redirect back to App.

### 🧪 Playwright Verification (Organizer)
- [ ] **Task:** Create test `organizer.spec.ts`.
- [ ] **Scenario:** Login as Organizer -> Create "Tech Meetup" -> Verify Event appears on Dashboard.

---

## Phase 3: Attendee Flow (Buying & Browsing)

### 3.1 Public Event Page
- [ ] **API:** Create `GET /events/:id` (Public).
- [ ] **Page:** Build `EventDetailsPage` (Title, Price, "Buy Ticket" CTA).
- [ ] **CHECKPOINT:** Incognito window -> Visit event link -> See details.

### 3.2 Purchasing Ticket
- [ ] **Stripe:** Create Checkout Session API (Split payment: Platform fee vs Organizer).
- [ ] **Webhook:** Create `StripeWebhookController` to listen for `checkout.session.completed`.
- [ ] **DB:** Create `Ticket` model.
- [ ] **Logic:** Webhook creates `Ticket` record in DB upon success.
- [ ] **CHECKPOINT:** Use Stripe "Test Card" (4242...) -> Buy Ticket -> Verify `Ticket` row in DB.

### 3.3 Onboarding & Directory
- [ ] **Form:** Build "Complete Profile" Modal (Job Title, Tags).
- [ ] **API:** Create `GET /events/:id/attendees` (Fetch other ticket holders).
- [ ] **List:** Build `AttendeeList` component with `Tag` badges.
- [ ] **Filter:** Implement client-side filtering by "Job Title".

### 🧪 Playwright Verification (Purchase)
- [ ] **Task:** Create test `purchase.spec.ts`.
- [ ] **Scenario:** Visit Public Event -> Click Buy -> Fill Stripe Test Form -> Redirect to Success -> See "Complete Profile".

---

## Phase 4: Networking (The Core)

### 4.1 Connection Logic
- [ ] **DB:** Create `Connection` model (requesterId, receiverId, status).
- [ ] **API:** `POST /networking/connect` (Send request).
- [ ] **API:** `POST /networking/accept` (Update status to 'ACCEPTED').
- [ ] **UI:** Add "Connect" button to `AttendeeCard`.
- [ ] **UI:** Handle "Pending" state (Button disabled + "Sent" text).

### 4.2 The "Rolodex"
- [ ] **API:** `GET /networking/connections` (Return users where status = ACCEPTED).
- [ ] **Privacy:** Ensure Email/Phone is ONLY sent if status = ACCEPTED.
- [ ] **Page:** Build `MyConnections` tab.
- [ ] **CHECKPOINT:** User A requests B -> B accepts -> A sees B's email.

### 🧪 Playwright Verification (Networking)
- [ ] **Task:** Create test `connect.spec.ts` (Requires 2 browser contexts).
- [ ] **Scenario:**
    1. Browser A (User A) finds User B -> Clicks Connect.
    2. Browser B (User B) reloads -> Sees Request -> Clicks Accept.
    3. Browser A reloads -> Sees User B in "Connections".

---

## Phase 5: Polish & PWA

### 5.1 Assets & Config
- [ ] **Manifest:** Generate `manifest.json` using [Favicon Generator](https://realfavicongenerator.net/).
- [ ] **Icons:** Place `icon-192.png` and `icon-512.png` in `/public`.
- [ ] **Meta:** Add OpenGraph tags for Event sharing (Twitter/Facebook cards).

### 5.2 Final QA
- [ ] **Mobile Check:** Open on actual phone (via local network IP).
- [ ] **Empty States:** Verify "No Events" and "No Connections" look good.
- [ ] **Loading:** Verify Skeletons appear on slow 3G (Network Throttling).

### 5.3 Deployment
- [ ] **Env:** Set `STRIPE_SECRET_KEY` and `SUPABASE_URL` in Railway/Vercel.
- [ ] **Migrate:** Run `npx prisma migrate deploy` on production DB.
- [ ] **Build:** Verify production build passes.