# ClientFlow

A smart client enquiry and project management platform for digital agencies.

> ClientFlow is a centralized digital agency management platform that connects client requirements with suitable team members and tracks projects from enquiry to completion.

## Problem

Agencies receive enquiries through websites, email and chat. Information gets scattered, project assignment is manual (ignoring skills, availability, workload and experience), and nobody has clear visibility from first enquiry to delivery.

## Objectives

1. **Client enquiry management**: collect and validate requirements, features, budget, timeline.
2. **Centralized dashboard**: manage clients, enquiries, projects and tasks in one place.
3. **Intelligent employee matching**: recommend people by skills, availability, workload and experience.
4. **Project lifecycle tracking**: enquiry -> assigned -> in progress -> completed.
5. **Security and reliability**: authentication, authorization, validation, error handling.
6. **Analytics**: enquiries, statuses, assignments, conversions.

## Tech stack

| Layer | Technology | Why |
|---|---|---|
| Web fundamentals | HTML5, CSS3, JavaScript | Everything else compiles down to these |
| UI library | React | Reusable components, state-driven UI |
| Framework | Next.js (App Router) | Routing, server/client rendering, API in one codebase |
| Language | TypeScript | Type safety, fewer runtime bugs |
| Styling | Tailwind CSS | Utility-first, responsive, consistent |
| Backend | Next.js Route Handlers | REST-style API endpoints |
| Database | PostgreSQL | Relational data: clients, projects, employees, skills |
| ORM | Prisma | Schema, migrations, type-safe queries |
| Auth | Session-based (httpOnly cookie) + password hashing | Protected dashboard |
| Validation | Zod (+ React Hook Form) | One schema for client and server validation |
| Charts | Recharts | Analytics dashboard |
| Tooling | ESLint, Prettier, Docker (local Postgres) | Quality and reproducible setup |
| Testing | Vitest, React Testing Library, Playwright | Unit, component, end-to-end |
| Version control | Git + GitHub | History, collaboration |
| Deployment | Vercel + managed PostgreSQL (Neon / Supabase) | Hosting |

## How this repo is used

- `docs/` : architecture, folder structure, roadmap.
- `notes/` : interview-ready notes, one file per phase. **Write them as you learn.**
- `src/`, `prisma/`, `tests/` : the actual app (created phase by phase).

Start with `docs/02-learning-roadmap.md`.
