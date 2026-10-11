# ClientFlow: Project Pitch (interview-ready)

## 30-second version
ClientFlow is a full-stack web platform for digital agencies. Clients submit detailed project enquiries through a public site; staff manage them in a secure dashboard; and a skill-based recommendation engine suggests the best employees based on skills, availability, workload and experience. It then tracks each project from enquiry to completion, with analytics on conversions and statuses.

## Why this stack?
- **Next.js + React + TypeScript**: one codebase for UI and API, type safety end to end.
- **PostgreSQL + Prisma**: the data is relational (clients -> enquiries -> projects -> tasks, employees <-> skills), and Prisma gives migrations and typed queries.
- **Tailwind**: fast, consistent, responsive styling.
- **Zod**: one validation schema shared by form and API.

## Likely questions
**Q: Why PostgreSQL over MongoDB?**
A: The data is highly relational with many-to-many links (employees-skills, projects-employees). Joins, foreign keys and transactions fit naturally. A document store would duplicate data or push integrity into app code.

**Q: How does the recommendation engine work?**
A: A weighted scoring function: skill match, availability, workload fit, and experience each normalized to 0-1, combined with configurable weights. It returns a ranked list with a per-factor breakdown, so results are explainable and tunable.

**Q: How do you secure the dashboard?**
A: Passwords hashed (bcrypt/argon2), sessions in httpOnly cookies, route protection in the proxy/middleware layer, role checks (RBAC) in every route handler, and Zod validation on all input. Never trust the client.

**Q: Authentication vs authorization?**
A: Authentication = who are you (login). Authorization = what may you do (roles/permissions).

**Q: Server vs client components in Next.js?**
A: Server components render on the server with no JS shipped and can access the DB directly; client components (`"use client"`) handle interactivity such as forms and state.

**Q: How did you handle errors?**
A: Route handlers return consistent JSON errors with correct HTTP status codes (400 validation, 401/403 auth, 404, 500); the UI uses error boundaries and form-level messages.

**Q: How would you scale it?**
A: Index hot columns (status, createdAt, foreign keys), paginate lists, cache analytics, move recommendation to a background job if it grows, and use connection pooling for serverless Postgres.
