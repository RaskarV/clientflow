# ClientFlow: Folder Structure

```
clientflow/
├── prisma/
│   ├── schema.prisma            # All data models (single source of truth for DB)
│   ├── migrations/              # Generated migration history
│   └── seed.ts                  # Demo employees, skills, enquiries
│
├── public/                      # Static assets (logo, images)
│
├── src/
│   ├── app/                     # Next.js App Router (routes live here)
│   │   ├── layout.tsx           # Root layout
│   │   ├── globals.css          # Tailwind entry
│   │   ├── error.tsx            # Global error boundary
│   │   ├── not-found.tsx
│   │   │
│   │   ├── (public)/            # Public agency website (route group, no URL prefix)
│   │   │   ├── page.tsx         # Home
│   │   │   ├── services/page.tsx
│   │   │   ├── about/page.tsx
│   │   │   └── enquiry/page.tsx # Client enquiry form
│   │   │
│   │   ├── (auth)/
│   │   │   └── login/page.tsx
│   │   │
│   │   ├── (dashboard)/         # Protected internal area
│   │   │   └── dashboard/
│   │   │       ├── layout.tsx   # Sidebar + topbar
│   │   │       ├── page.tsx     # Overview
│   │   │       ├── enquiries/   # list + [id] detail + recommendations
│   │   │       ├── clients/
│   │   │       ├── projects/    # list + [id] with tasks
│   │   │       ├── tasks/
│   │   │       ├── employees/   # profiles, skills, workload
│   │   │       └── analytics/
│   │   │
│   │   └── api/                 # Route Handlers (backend)
│   │       ├── auth/            # login, logout, me
│   │       ├── enquiries/       # POST (public), GET/PATCH (staff)
│   │       ├── clients/
│   │       ├── projects/
│   │       ├── tasks/
│   │       ├── employees/
│   │       ├── recommendations/ # skill-based matching endpoint
│   │       └── analytics/
│   │
│   ├── components/
│   │   ├── ui/                  # Button, Input, Card, Modal, Badge, Table
│   │   ├── forms/               # EnquiryForm, LoginForm, ProjectForm
│   │   ├── dashboard/           # Sidebar, StatCard, StatusBadge, TaskBoard
│   │   └── public/              # Hero, ServiceCard, Footer, Navbar
│   │
│   ├── lib/
│   │   ├── prisma.ts            # Prisma client singleton
│   │   ├── auth/                # session, password hashing, role guards
│   │   ├── validations/         # Zod schemas (enquiry, project, task, ...)
│   │   ├── recommendation/      # scoring engine (pure functions, easy to test)
│   │   ├── errors.ts            # AppError + API error helper
│   │   └── utils.ts
│   │
│   ├── services/                # Business logic (enquiry, project, employee, analytics)
│   ├── hooks/                   # Custom React hooks
│   ├── types/                   # Shared TypeScript types
│   └── proxy.ts                 # Route protection (named middleware.ts before Next.js 16)
│
├── tests/
│   ├── unit/                    # recommendation engine, validators
│   ├── components/
│   └── e2e/                     # Playwright: enquiry -> assignment flow
│
├── docs/                        # Architecture, roadmap, API notes
├── notes/                       # Interview notes per phase
│
├── .env.example                 # DATABASE_URL, SESSION_SECRET (never commit .env)
├── docker-compose.yml           # Local PostgreSQL
├── .eslintrc / eslint.config.mjs
├── .prettierrc
├── next.config.ts
├── tailwind / postcss config
├── tsconfig.json
├── package.json
└── README.md
```

## Layering rule (great interview talking point)

```
UI (components/pages)  ->  API route handler  ->  service  ->  Prisma  ->  PostgreSQL
                              validate (Zod)      business     data
                              auth check          rules        access
```

- **Route handlers** stay thin: parse, validate, authorize, call a service, return JSON.
- **Services** hold business rules (e.g. "an enquiry can only be converted once").
- **Recommendation engine** is pure functions with no DB access, so it is trivially unit-testable.

## Core data models (draft)

`User` (role: ADMIN / MANAGER / EMPLOYEE), `Employee`, `Skill`, `EmployeeSkill` (level, years), `Client`, `Enquiry` (status, budget, timeline, features), `EnquirySkill` (required skills), `Project`, `ProjectAssignment`, `Task`.
