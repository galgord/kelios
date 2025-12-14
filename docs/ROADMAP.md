# Development Roadmap: "ConfConnect" MVP

| **Document Version** | 1.0 |
| :--- | :--- |
| **Goal** | Shippable PWA MVP |
| **Timeline Estimate** | ~2 Weeks (Sprint) |

---

## Phase 1: The "Sleek" Foundation (Days 1-2)
*Goal: A working monorepo, database connection, and a beautiful empty app.*

### Backend (NestJS + Supabase)
- [ ] **Setup:** Initialize NestJS project.
- [ ] **Database:** Setup Supabase project & get credentials.
- [ ] **Prisma:** Create `schema.prisma` (Users, Events tables) and run `npx prisma migrate dev`.
- [ ] **Auth:** Implement `Passport-JWT` strategy to validate Supabase tokens.
- [ ] **Health Check:** Create a simple `/health` endpoint to verify DB connection.

### Frontend (React + Vite)
- [ ] **Setup:** Initialize Vite project (React TS).
- [ ] **UI Library:** Install Tailwind CSS & `shadcn/ui`.
- [ ] **Theme:** Configure `zinc` color palette and font (`Inter`).
- [ ] **Layout:** Build the `MobileShell` component (Bottom Nav + Header).
- [ ] **Auth:** Build Login Page (Supabase Magic Link widget).

### Milestone 🏁
> You can log in via email, see a sleek empty dashboard, and the backend acknowledges who you are.

---

## Phase 2: The Organizer Loop (Days 3-5)
*Goal: Organizers can create events and you can take their money.*

### Backend
- [ ] **Stripe Connect:** Implement "Onboard Organizer" API (Generate Stripe Express Link).
- [ ] **Events CRUD:** Create endpoints for `POST /events` and `GET /events/:id`.
- [ ] **Webhooks:** Listen for Stripe Connect account updates.

### Frontend
- [ ] **Create Event Form:** Build a multi-step form (Title, Date, Price, Description).
- [ ] **Stripe Button:** "Connect Payouts" button in the Organizer Dashboard.
- [ ] **Event Details Page:** A public-facing page (SEO friendly) showing event info.

### Milestone 🏁
> An organizer can log in, connect their bank account, and publish a paid event link.

---

## Phase 3: The Attendee Loop (Days 6-8)
*Goal: Users can pay, join, and see who else is there.*

### Backend
- [ ] **Payment Intent:** API to create a Stripe Checkout Session for a ticket.
- [ ] **Webhooks:** Listen for `checkout.session.completed` -> Create `Ticket` record in DB.
- [ ] **Attendee List:** `GET /events/:id/attendees` (Protected: only for ticket holders).

### Frontend
- [ ] **Checkout:** "Buy Ticket" button redirects to Stripe Hosted Checkout.
- [ ] **Onboarding:** Post-purchase "Complete Profile" modal (Upload Avatar + Select Tags).
- [ ] **Directory:** The "Smart List" UI.
    - [ ] List of users.
    - [ ] Filter logic (Client-side filtering for MVP is fine).
    - [ ] "Recommended" badge logic.

### Milestone 🏁
> I can buy a ticket, create my profile, and scroll through a list of other real humans at the event.

---

## Phase 4: The Core Mechanic "Connect & Swap" (Day 9)
*Goal: The actual networking utility.*

### Backend
- [ ] **Connection Logic:** APIs for `POST /connect` (Request) and `POST /accept`.
- [ ] **Notifications:** Simple in-app notification table (polled) or optimistic UI.
- [ ] **Rolodex:** `GET /me/connections` (Returns unlocked contact info).

### Frontend
- [ ] **Connect Action:** "Connect" button on attendee cards (optimistic state update).
- [ ] **Notifications Tab:** View incoming requests.
- [ ] **My Connections:** A dedicated tab showing the "Digital Business Cards" you've collected.

### Milestone 🏁
> Users can exchange contact info. The loop is closed.

---

## Phase 5: Polish & Ship (Day 10)
*Goal: Make it feel like a "Premium" Native App.*

### PWA & UX
- [ ] **Manifest:** configure `manifest.json` (Name, Icons, Theme Color).
- [ ] **Service Worker:** Ensure caching works for static assets.
- [ ] **Loading States:** Add "Skeleton" loaders (Shadcn) for all data fetching.
- [ ] **Empty States:** Add sleek "No connections yet" illustrations.

### DevOps
- [ ] **Deploy API:** Push NestJS to Railway/Render.
- [ ] **Deploy Client:** Push React to Vercel.
- [ ] **ENV:** Set production environment variables (Stripe Live Keys).

### Milestone 🏁
> **LIVE LAUNCH.** 🚀