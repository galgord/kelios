# ConfConnect - Claude Memory File

This file serves as the primary reference for understanding and working on the ConfConnect project.

---

## Commands

### Development
```bash
# Server (Backend)
cd server
npm run start:dev          # Start NestJS in watch mode

# Client (Frontend)
cd client
npm run dev               # Start Vite dev server

# Database
cd server
npx prisma migrate dev    # Run new migration
npx prisma studio         # Open Prisma Studio GUI
npx prisma generate       # Regenerate Prisma Client
```

### Testing
```bash
# Server
cd server
npm run test              # Run Jest unit tests
npm run test:e2e          # Run E2E tests

# Client
cd client
npm run test              # Run Vitest
```

### Build & Deploy
```bash
# Client
cd client
npm run build             # Build for production
npm run preview           # Preview production build

# Server
cd server
npm run build             # Compile TypeScript
npm run start:prod        # Start production server
```

---

## Architecture Guidelines

### Backend (NestJS) - Clean Architecture
**Three-Layer Separation:**
1. **Interface Layer (Controllers):** Handle HTTP, validate DTOs, NO business logic
2. **Application Layer (Services):** All business rules and orchestration, agnostic of HTTP
3. **Infrastructure Layer (Prisma/Adapters):** Database, Stripe, Supabase integrations

**Key Rules:**
- DTOs are MANDATORY for all inputs (Body, Query, Param)
- Never return raw Prisma entities - use Response DTOs
- No hardcoded secrets - use @nestjs/config
- Keep logic in Application Layer, not in SQL

### Frontend (React) - Feature-Based Architecture
**Three-Layer Separation:**
1. **Presentation Layer (UI Components):** Pure rendering, data via props, no API calls
2. **Container/Logical Layer (Hooks & Pages):** State management, event handling, data fetching
3. **Data Layer (API & Query):** TanStack Query for server communication and caching

**Feature Folder Structure:**
```
features/networking/
├── index.ts              # Public API
├── routes.tsx            # Sub-routes
├── api/                  # API calls (e.g., fetchAttendees)
├── components/           # Feature-specific components
└── hooks/                # Custom hooks (e.g., useConnect)
```

**Component Organization:**
- Generic UI building blocks → `src/components/ui` (shadcn components)
- Business logic components → `src/features/**/components`

### Git Strategy - Atomic Commits
**Rules:**
1. One logical change per commit
2. Every commit must build and pass tests
3. Use Conventional Commits format: `<type>(<scope>): <subject>`

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `chore`: Maintenance, config, dependencies
- `refactor`: Code change without bug fix or feature
- `docs`: Documentation only
- `style`: Formatting, whitespace

**Example:** `feat(auth): add magic link login`

---

## Style Guide (Design System)

### Philosophy
"Invisible Luxury" - Minimalist, high contrast, distraction-free

### Colors - Zinc Palette
- **Background:** white (light) / zinc-950 (dark)
- **Surface/Cards:** zinc-50 (light) / zinc-900 (dark)
- **Primary Action:** zinc-900 (light) / white (dark) - monochromatic for high-end feel
- **Accent:** indigo-500 (notifications, active states, badges only)
- **Success:** emerald-500, **Destructive:** red-500, **Muted:** zinc-500

### Typography
- **Font:** Inter or Geist Sans
- **H1:** text-3xl, font-bold, tracking-tight
- **H2:** text-xl, font-semibold, tracking-tight
- **Body:** text-sm, font-normal, text-muted-foreground
- **Labels:** text-xs, font-medium, uppercase, tracking-widest

### Components
- **Global Radius:** rounded-xl (0.75rem)
- **Borders:** Thin, border-zinc-200 (light) / border-zinc-800 (dark)
- **Shadows:** shadow-sm (cards), shadow-lg (modals), shadow-xl (floating)
- **Glassmorphism:** bg-background/80 backdrop-blur-md border-t (for sticky nav/header)

### Icons
- **Library:** Lucide React
- **Stroke Width:** 1.5px (premium/elegant feel)
- **Size:** 20px standard

### Motion
- **Transitions:** duration-200 ease-in-out
- **Active State:** active:scale-95 (critical for PWA feel)
- **Page Transitions:** Fade in + Slide Up

### Mobile-First CSS
✅ Correct: `className="w-full md:w-1/2"`
❌ Incorrect: `className="w-1/2 max-md:w-full"`

---

## Tech Stack

### Frontend (client/)
- **Framework:** React 18+ with TypeScript
- **Build Tool:** Vite
- **Routing:** React Router v6
- **UI Library:** shadcn/ui (Radix UI + Tailwind)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **State Management:** TanStack Query (server state), React Context or Zustand (local state)
- **Forms:** React Hook Form + Zod
- **PWA:** vite-plugin-pwa
- **Animations:** Framer Motion (optional)

### Backend (server/)
- **Framework:** NestJS with TypeScript
- **Database:** PostgreSQL (Supabase)
- **ORM:** Prisma
- **Auth:** Supabase Auth + Passport-jwt
- **Payments:** Stripe Node.js SDK
- **Config:** @nestjs/config

### Infrastructure
- **Database & Auth:** Supabase
- **Storage:** Supabase Storage (avatars, event images)
- **Frontend Hosting:** Vercel
- **Backend Hosting:** Railway or Render
- **Payment Processing:** Stripe Connect

### DevOps
- **Linting:** ESLint + Prettier
- **Commit Hooks:** Husky
- **Testing:** Jest (backend), Vitest (frontend), Playwright (E2E)

---

## Project Structure Reference

### Root
```
conf-connect/
├── client/                 # React + Vite (PWA)
├── server/                 # NestJS API
├── .gitignore
├── README.md
├── CLAUDE.md               # This file
└── package.json            # Optional workspaces config
```

### Server Structure
```
server/
├── prisma/
│   ├── schema.prisma       # Database Schema
│   └── migrations/         # SQL Migration history
├── src/
│   ├── common/             # Shared utilities
│   │   ├── decorators/     # Custom decorators
│   │   ├── guards/         # Auth guards
│   │   └── filters/        # Global exception filters
│   ├── modules/
│   │   ├── auth/           # Auth logic
│   │   ├── users/          # User management
│   │   ├── events/         # Event CRUD
│   │   ├── networking/     # Connect & Swap logic
│   │   ├── payments/       # Stripe webhooks
│   │   └── prisma/         # PrismaService
│   ├── app.module.ts
│   └── main.ts
├── .env
└── package.json
```

### Client Structure
```
client/
├── public/
│   ├── manifest.json       # PWA Configuration
│   └── icons/              # App Icons
├── src/
│   ├── components/
│   │   ├── ui/             # Shadcn Components
│   │   └── layout/         # Layouts (BottomNav, Header)
│   ├── features/           # FEATURE-BASED
│   │   ├── auth/
│   │   ├── events/
│   │   ├── networking/
│   │   └── profile/
│   ├── hooks/              # Global hooks
│   ├── lib/
│   │   ├── api-client.ts   # Axios/Fetch instance
│   │   ├── query-client.ts # TanStack Query config
│   │   └── utils.ts        # CN helper, formatters
│   ├── types/              # Global TypeScript types
│   ├── App.tsx             # Routes definition
│   ├── main.tsx            # Providers setup
│   └── index.css           # Tailwind directives
├── index.html
├── vite.config.ts
├── tailwind.config.js
└── package.json
```

---

## Testing Strategy

### Priority Levels
1. **E2E Tests (Playwright)** - HIGHEST PRIORITY
   - Test critical paths: Login, Create Event, Buy Ticket
   - If these pass, the app works

2. **Unit Tests (Jest)** - MEDIUM PRIORITY
   - Test complex business logic (e.g., fee calculation)
   - Skip simple CRUD services or basic UI components

---

## Core Product Features

### User Flows
1. **Organizer:** Sign Up → Connect Stripe → Create Event → Share Link
2. **Attendee:** Click Link → Purchase Ticket → Create Profile → Browse Attendees → Connect → View Rolodex

### Key Features
- **Magic Link/OTP Auth:** Reduce password fatigue
- **Profile Tags:** 3-5 tags for smart discovery (Developer, Founder, Investor, etc.)
- **Smart Sorting:** Prioritize attendees with matching tags
- **Connect & Swap:** Request connection → Accept → Exchange contact details
- **Digital Rolodex:** All connections across all events
- **Stripe Connect:** Split payments between platform and organizer

### MVP Anti-Features (NOT building)
- ❌ In-app chat
- ❌ QR code scanning
- ❌ Tiered tickets
- ❌ Incognito mode

---

## Best Practices

### Backend
- Use DTOs with class-validator for all inputs
- Return Response DTOs, never raw entities
- Validate .env on startup using Joi or Zod
- No complex stored procedures - keep logic in Services

### Frontend
- Mobile-first CSS (base styles for mobile, then md:/lg: breakpoints)
- Composition over inheritance (small components with children)
- Extract complex logic to custom hooks (>2 useEffect = custom hook)
- Pure components in /ui, business logic in features/

### Database
- Review generated SQL before applying migrations
- Keep business logic in Application Layer, not SQL

---

## Environment Setup Checklist

1. **Supabase:** Create project → Get DATABASE_URL and SUPABASE_URL
2. **NestJS:** Initialize with Prisma → Pull schema from Supabase
3. **Frontend:** Initialize Vite + React → Install shadcn/ui CLI
4. **Monorepo:** Optional - Share Zod schemas between NestJS DTOs and React forms

---

*Last Updated: 2025-12-14*
