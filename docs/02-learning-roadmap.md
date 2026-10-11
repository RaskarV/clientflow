# ClientFlow: Learning + Build Roadmap

Rule for every phase: **learn the concept -> build the feature -> write the interview note -> commit.**
Each phase ends with a working, committed milestone and a file in `notes/`.

| Phase | Learn | Build | Milestone | Note file |
|---|---|---|---|---|
| 0 | Git, terminal, Node, VS Code | Repo + README | First commit on GitHub | `00-setup.md` |
| 1 | HTML5, CSS3 (box model, flex, grid) | Static home/services pages | Responsive plain page | `01-html-css.md` |
| 2 | JavaScript (ES6, async/await, fetch, DOM) | Enquiry form with JS validation | Form works in browser | `02-javascript.md` |
| 3 | TypeScript basics (types, interfaces, generics) | Typed helper functions | Compiles with strict mode | `03-typescript.md` |
| 4 | React (components, props, state, effects, hooks) | UI component library | Reusable Button/Card/Input | `04-react.md` |
| 5 | Next.js App Router (routing, layouts, server vs client components) | Public site + dashboard shell | All pages routed | `05-nextjs.md` |
| 6 | Tailwind CSS | Style everything responsively | Polished UI | `06-tailwind.md` |
| 7 | SQL + PostgreSQL (tables, keys, joins, indexes, normalization) | ER diagram | Schema designed on paper | `07-database.md` |
| 8 | Prisma (schema, migrations, queries, relations) | Models + seed script | DB running in Docker | `08-prisma.md` |
| 9 | REST, Route Handlers, HTTP status codes, Zod validation | Enquiry API (POST/GET/PATCH) | Form saves to DB | `09-api.md` |
| 10 | Authentication vs authorization, hashing, cookies, sessions, RBAC | Login, protected dashboard, roles | Only staff see dashboard | `10-auth.md` |
| 11 | Data fetching, forms (React Hook Form), error handling | Enquiries/clients/projects/tasks CRUD | Full dashboard workflow | `11-dashboard.md` |
| 12 | Algorithms: weighted scoring, normalization | Recommendation engine | Ranked employee suggestions | `12-recommendation.md` |
| 13 | Aggregation queries, charts | Analytics page | Conversion + status charts | `13-analytics.md` |
| 14 | Testing pyramid, mocking, e2e | Vitest + Playwright tests | Green CI | `14-testing.md` |
| 15 | Env vars, CI/CD, deployment, security basics | Deploy to Vercel + managed Postgres | Live URL | `15-deployment.md` |

## Recommendation engine (Phase 12) preview

For each employee, compute a score 0-100:

```
score = 0.45 * skillMatch      // required skills covered, weighted by proficiency
      + 0.25 * availability    // free capacity in the project window
      + 0.20 * workloadFit     // fewer active projects = higher
      + 0.10 * experience      // past projects with similar skills/type
```

Weights are constants in one config file so they can be tuned and explained. Return the score **and a breakdown** so the UI can show *why* someone was recommended.

## Suggested pace

Roughly 8-12 weeks at 1-2 hours a day. Phases 1-3 can be compressed if you already know them.

## Definition of done per phase

- Feature works and is committed with a clear message.
- You can explain it in 60 seconds without looking.
- The note file has: concept summary, 5+ interview Q&As, one bug you hit and how you fixed it.
