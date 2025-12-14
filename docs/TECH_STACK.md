# Tech Stack Documentation: "ConfConnect"

| **Document Version** | 1.0 |
| :--- | :--- |
| **Application Type** | Progressive Web App (PWA) |
| **Primary Stack** | React (Vite), NestJS, Supabase |

---

## 1. Frontend (Client)

### Core
* **Framework:** **React** (v18+)
* **Build Tool:** **Vite**
    * *Why:* Faster dev server and easier PWA configuration than Next.js for a pure "app-like" experience.
* **Language:** TypeScript
* **Routing:** **React Router v6**

### UI & UX
* **Component Library:** **shadcn/ui**
    * *Note:* Headless, accessible components built on Radix UI.
* **Styling:** **Tailwind CSS**
    * *Requirement:* Essential for shadcn/ui.
* **Icons:** **Lucide React** (Standard icon set for shadcn).
* **Animations:** **Framer Motion** (Optional, for smooth transitions between "Connect" and "Swap" states).

### State & Data Fetching
* **Server State:** **TanStack Query (React Query)**
    * *Why:* Handles caching, loading states, and syncing with the backend/Supabase automatically.
* **Local State:** React Context (for simple theme/user session) or **Zustand** (if complex flow is needed).
* **Forms:** **React Hook Form** + **Zod**
    * *Why:* Zod provides schema validation that can be shared/inferred from the backend DTOs.

### PWA Capabilities
* **Plugin:** **vite-plugin-pwa**
    * *Features:* Generates `manifest.json`, handles Service Worker for offline fallback, and "Add to Home Screen" prompts.

---

## 2. Backend (API)

### Core
* **Framework:** **NestJS**
* **Language:** TypeScript
* **Architecture:** Modular (Modules for `Events`, `Users`, `Payments`).

### Database & ORM
* **Database:** **PostgreSQL** (Hosted via Supabase).
* **ORM:** **Prisma**
    * *Why:* Best-in-class TypeScript safety. It connects to the Supabase Postgres instance.
    * *Alternative:* TypeORM (Native to NestJS, but Prisma is generally preferred for DX).

### Authentication & Authorization
* **Auth Provider:** **Supabase Auth**
* **Strategy:** `Passport-jwt` (NestJS)
    * *Flow:* Frontend authenticates with Supabase -> receives JWT -> sends JWT to NestJS API -> NestJS validates token against Supabase secret.

### Payments
* **SDK:** **Stripe Node.js Library**
* **Webhooks:** NestJS dedicated webhook controller to listen for `checkout.session.completed`.

---

## 3. Infrastructure & Services

### Hosting
* **Frontend:** **Vercel** (Zero-config deployment for Vite).
* **Backend:** **Railway** or **Render**
    * *Why:* Both support NestJS out of the box with minimal config. Railway is recommended for easy Postgres connection pooling if needed.
* **Database:** **Supabase** (Managed Postgres + Auth + Storage).

### File Storage
* **Service:** **Supabase Storage**
    * *Usage:* Storing user profile avatars and event cover images.

### DevOps
* **Linting:** ESLint + Prettier.
* **Commit Hooks:** Husky (to ensure code quality before commit).
* **Repo:** GitHub / GitLab.

---

## 4. Recommended Development Workflow

1.  **Supabase:** Set up the project to get the `DATABASE_URL` and `SUPABASE_URL`.
2.  **NestJS:** Initialize with Prisma. Pull the database schema from Supabase.
3.  **Frontend:** Initialize Vite + React. Install `shadcn/ui` CLI.
4.  **Shared Types:** (Optional) If using a Monorepo (Turborepo), share Zod schemas between NestJS DTOs and React forms to prevent type mismatches.