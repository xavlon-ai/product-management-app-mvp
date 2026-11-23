# Mini Project Management App

A controlled, local-only TypeScript/Next.js foundation for the Mini Project Management MVP.

## Delivery boundary

This repository baseline is limited to the **D-12 Slice 1 foundation** authorized by the founder addendum dated **23 November 2026**: local development only, synthetic data only, no hosting or deployment, no managed database or authentication provider, and no production credentials or customer data. The initial shell intentionally does **not** implement authentication, persistence, external requests, or telemetry.

Governance record: the authorization selects D-12 Slice 1, identifies the Organization Owner account as technical owner, delivery owner, and evidence reviewer, and records the associated sole-owner separation-of-duties limitation. Escalations route through Xavlon AI to the Organization Owner with a one-working-day response target.

## Prerequisites

- Node.js `22.14.0` (see `.nvmrc`)
- npm `10.9.2` or compatible npm 10 release

The enforced Node/npm ranges are in `package.json`; npm is configured with `engine-strict=true` in `.npmrc`.

## Local setup

```bash
nvm use
npm ci
cp .env.example .env.local
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000). The `.env.local` file is optional today because the scaffold has no runtime configuration values.

Run the baseline checks before requesting review:

```bash
npm run format
npm run lint
npm run typecheck
npm run build
```

## Configuration and secrets boundary

| Location | Permitted content | Committed? |
| --- | --- | --- |
| `.env.example` | Comments and non-secret variable names only | Yes |
| `.env.local` and other `.env*.local` files | Approved local, non-production values only | No — ignored |
| Source/configuration files | No credentials, tokens, connection strings, production endpoints, or customer data | Yes |

Never add secrets, local database credentials, email-capture credentials, production endpoints, or personal/customer data to Git. Do not use `NEXT_PUBLIC_` for secrets: those values are bundled to the browser. Future server-only configuration must be added only after a provider decision is authorized, validated at the server boundary, documented here, and represented by a name-only entry in `.env.example`.

## Tooling and reproducibility

- Next.js App Router with TypeScript strict mode (`tsconfig.json`)
- ESLint with Next.js Core Web Vitals rules (`eslint.config.mjs`)
- Prettier configuration (`prettier.config.mjs`)
- npm dependency lockfile (`package-lock.json`)
- Node/npm version constraints (`.nvmrc`, `.npmrc`, and `package.json`)

## Deliberate exclusions

This pull request does not deploy or provision hosting, a managed service, PostgreSQL, email delivery, authentication, sessions, user accounts, project/task data, or production infrastructure. Those changes require the relevant future authorization, security controls, and review evidence.
