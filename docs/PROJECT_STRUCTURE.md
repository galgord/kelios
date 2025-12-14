# Project Structure: "ConfConnect"

| **Document Version** | 1.0 |
| :--- | :--- |
| **Architecture** | Client/Server Separation (Monorepo-style) |
| **Frontend Pattern** | Feature-Based Architecture |
| **Backend Pattern** | Modular (Domain-Driven) |

---

## 1. Root Directory
```text
conf-connect/
├── client/                 # React + Vite (PWA)
├── server/                 # NestJS API
├── .gitignore
├── README.md
└── package.json            # (Optional) Workspaces config if using npm/yarn workspaces
```

---

## 2. Server Structure (NestJS)
*Focus: Modular, Separation of Concerns, Type Safety.*

```text
server/
├── prisma/
│   ├── schema.prisma       # Database Schema
│   └── migrations/         # SQL Migration history
├── src/
│   ├── common/             # Shared utilities
│   │   ├── decorators/     # Custom decorators (e.g., @CurrentUser)
│   │   ├── guards/         # Auth guards (JwtAuthGuard)
│   │   └── filters/        # Global exception filters
│   ├── modules/
│   │   ├── auth/           # AuthController, AuthService, Strategies
│   │   ├── users/          # User profile management
│   │   ├── events/         # Event creation, listing, details
│   │   ├── networking/     # "Connect & Swap" logic
│   │   ├── payments/       # Stripe webhooks and processing
│   │   └── prisma/         # PrismaService (DB Connection)
│   ├── app.module.ts       # Root Module
│   └── main.ts             # Entry point
├── .env                    # Secrets (DB_URL, STRIPE_KEY)
├── docker-compose.yml      # (Optional) Local DB setup
└── package.json
```

---

## 3. Client Structure (React + Vite)
*Focus: Feature-Based, Shadcn UI integration, PWA Assets.*

```text
client/
├── public/
│   ├── manifest.json       # PWA Configuration
│   ├── sw.js               # Service Worker (if custom)
│   └── icons/              # App Icons (192x192, 512x512)
├── src/
│   ├── assets/             # Static images/fonts
│   ├── components/
│   │   ├── ui/             # Shadcn Components (Button, Card, Input...)
│   │   ├── layout/         # Layouts (BottomNav, Header, ProtectedRoute)
│   ├── features/           # FEATURE-BASED ARCHITECTURE
│   │   ├── auth/           # Login, Register, Forgot Password
│   │   │   ├── components/ # Auth-specific forms
│   │   │   ├── hooks/      # useAuth, useLogin
│   │   │   └── api/        # authService.ts
│   │   ├── events/         # Event Listing, Event Details, Ticketing
│   │   ├── networking/     # Attendee List, Connection Cards, Rolodex
│   │   │   ├── components/ # ConnectCard, FilterBar
│   │   │   └── hooks/      # useConnect, useAttendees
│   │   └── profile/        # User Profile, Edit Profile, Settings
│   ├── hooks/              # Global hooks (useTheme, useToast)
│   ├── lib/                # Libraries & Configuration
│   │   ├── api-client.ts   # Axios/Fetch instance with Interceptors
│   │   ├── query-client.ts # TanStack Query config
│   │   └── utils.ts        # CN (Tailwind merger) and formatters
│   ├── types/              # Global Types (User, Event)
│   ├── App.tsx             # Routes definition
│   ├── main.tsx            # Providers (QueryClientProvider, ThemeProvider)
│   └── index.css           # Tailwind directives
├── index.html
├── vite.config.ts          # Vite + PWA Plugin config
├── tailwind.config.js      # Theme customization (Zinc palette)
└── package.json
```

---

## 4. Key Implementation Details

### 4.1 Feature Folder Anatomy
Inside `client/src/features/networking/`, for example:
* `index.ts`: Public API for the feature (exports the main page).
* `routes.tsx`: Sub-routes for this feature.
* `api/`: API calls specific to networking (e.g., `fetchAttendees`).
* `components/`: UI components only used here (e.g., `AttendeeCard`).

### 4.2 Shared vs. Specific
* If a component is a generic UI building block (like a Button), it goes in `src/components/ui`.
* If a component contains business logic (like a Button that adds a friend), it goes in `src/features/networking/components`.

### 4.3 PWA Configuration
The `public/manifest.json` must be at the root of `public` to ensure the browser detects the app as installable.