# Mini Project Management App

A controlled, **local-development-only** TypeScript/Next.js application baseline for D-12 Slice 1. It is intentionally an application shell, not a deployed product and not an authentication implementation.

## Authorized boundary

This repository baseline is limited to the 23 November 2026 founder authorization addendum and D-12 Slice 1 foundation work:

- TypeScript/Next.js repository scaffold and initial accessible application shell.
- Local development configuration and secrets-handling documentation.
- Dependency/tooling lockfiles and reproducible developer commands.
- Synthetic test/development data only.

It explicitly excludes hosting, deployment, managed database or authentication services, production credentials, production/customer data, external redirects, collaboration, and work beyond the authorized slice. The sole Owner is technical owner, delivery owner, and evidence reviewer for this local-only slice; this is the recorded separation-of-duties limitation.

## Prerequisites

- Node.js 20 (see `.nvmrc`)
- npm 10 or later

## Local setup

1. Clone the repository and select the reviewed branch.
2. Copy the committed template: `cp .env.example .env.local`.
3. Keep all values in `.env.local` local-only and synthetic. Never use production values, user exports, credentials, or connection strings.
4. Install the locked dependency graph: `npm ci`.
5. Start the local server: `npm run dev`.
6. Open [http://localhost:3000](http://localhost:3000).

The shell currently needs no database, email capture service, or authentication provider. Their blank placeholders in `.env.example` document the future local-only configuration boundary; do not fill them with managed-service or production values under this authorization.

## Quality commands

```sh
npm run format:check
npm run lint
npm run typecheck
npm run build
```

`npm ci` uses the committed `package-lock.json`; do not replace it with an unreviewed dependency graph. Use `npm install` only when intentionally updating dependencies and commit the corresponding reviewed lockfile change.

## Configuration and secret handling

| Location | May be committed? | Purpose |
| --- | --- | --- |
| `.env.example` | Yes | Non-secret variable names and safe blank/default examples only. |
| `.env.local`, `.env.*.local`, `.env` | No | Developer-local, synthetic/local values only. Git ignores these paths. |
| Source code | Yes, without secrets | Validates configuration presence and uses public variables only when explicitly prefixed `NEXT_PUBLIC_`. |
| A future approved secret manager | Not in this slice | Runtime/deploy-time secret storage after separate authorization. |

Do not commit passwords, session secrets, API tokens, database URLs containing credentials, cookies, email verification tokens, private keys, production exports, or personal/customer data. Before a future review, inspect staged files with `git diff --cached` and search for accidental values, for example `git grep -nEi '(secret|password|token|api[_-]?key|postgres(ql)?://)'` (review context before treating a match as a leak).

## Environment and data boundary

Only a developer machine is in scope. Local PostgreSQL and a local email-capture service are future approved *local* options, must use synthetic accounts/data, and are not provisioned by this scaffold. No preview, staging, hosting, deployment, managed provider, production configuration, or external data transfer is created or configured here. India-only residency restrictions remain applicable: do not introduce an external provider or transfer personal data without a separate approved decision.

## Security baseline notes

The founder addendum specifies email/password, mandatory verification before access, server-side sessions, a 30-minute idle timeout, 12-hour absolute lifetime, `HttpOnly`, `Secure`, `SameSite=Lax`, host-only cookies, same-origin relative redirects limited to `/`, `/dashboard`, `/verify-email`, and `/login`, and specified endpoint rate limits. This scaffold does **not** implement authentication or sessions. Those controls require a separately reviewed implementation, including the additional founder approval called out in the addendum for signup and verification-validation limits.

## Repository conventions

- Work only on non-default task branches and submit changes through pull requests.
- Keep TypeScript strict (`tsconfig.json`) and run the quality commands before requesting review.
- Versioned dependencies and tooling are governed by `package.json` and `package-lock.json`.
- No deployment workflow is present by design; production deployment is not authorized.
