# Project State

Last updated: 2026-05-21 23:24 UTC
State owner: Sligo Labs

## Current focus

Initial Sligo Labs setup for the `sligo-droid/tonal-dashboard` fork and Vercel production URL.

## Snapshot

| Area | State | Evidence |
| --- | --- | --- |
| Local checkout | verified | `/home/droid/.hermes/workspace/tonal-dashboard`, `main` tracking `origin/main` |
| GitHub repo | verified | https://github.com/sligo-droid/tonal-dashboard, default branch `main` |
| Local checks | verified | `pnpm test` passed 35 tests; `pnpm run typecheck` passed; `pnpm run build` passed |
| Vercel production deploy | verified | `dpl_264pogmvdWqQ8qheC6y4tQ75M4xY`, status `Ready` |
| Production URL | verified | https://tonal-dashboard.vercel.app returns HTTP 200 |
| Dashboard data config | blocked | Vercel env var `TONAL_MEMBERS_JSON` is not configured yet; `/api/dashboard` returns the app's setup notice |
| Optional avatar uploads | planned | Configure Vercel env vars `BLOB_READ_WRITE_TOKEN` and `AVATAR_ADMIN_TOKEN` only if avatar uploads should persist |
| Vercel Git integration | blocked | `vercel link` could not connect the `sligo-droid/tonal-dashboard` GitHub repo to the Vercel project; current production deploy is CLI-driven |

Allowed states: `planned`, `ready`, `in_progress`, `blocked`, `implemented`, `merged`, `deployed`, `verified`, `superseded`.

## Done

- Cloned the fork to the canonical local workspace.
- Verified package install, unit tests, typecheck, and production build.
- Created/linked a Vercel project named `tonal-dashboard` using the available Vercel credentials.
- Deployed production and verified the requested public URL: https://tonal-dashboard.vercel.app

## Blocked

- Real Tonal data requires server-side Vercel environment variable `TONAL_MEMBERS_JSON` with refresh tokens. Do not commit or paste those values into Git, Discord, Notion, Obsidian, or memory.
- Automatic GitHub-triggered Vercel deploys are not active yet because Vercel failed to connect the `sligo-droid/tonal-dashboard` repository during linking. Use CLI deploys until Git integration access is fixed.

## External Configuration

Do not store secret values here.

- Vercel env var `TONAL_MEMBERS_JSON`: required for real family dashboard data.
- Vercel env var `BLOB_READ_WRITE_TOKEN`: optional for persistent avatar uploads.
- Vercel env var `AVATAR_ADMIN_TOKEN`: optional upload admin code for the hidden avatar admin panel.

## Next Actions

1. Add `TONAL_MEMBERS_JSON` in Vercel when the Tonal refresh tokens are available.
2. Re-deploy production after env vars are set, then smoke `/api/dashboard` for `configured: true`.
3. If automatic Vercel deploys are desired, fix Vercel GitHub integration access for `sligo-droid/tonal-dashboard` and reconnect the project.

## Verification Checklist

- [x] Local checkout created under `/home/droid/.hermes/workspace/tonal-dashboard`.
- [x] `pnpm install --frozen-lockfile` completed.
- [x] `pnpm test` passed.
- [x] `pnpm run typecheck` passed.
- [x] `pnpm run build` passed.
- [x] Production Vercel deployment reached `Ready`.
- [x] https://tonal-dashboard.vercel.app returned HTTP 200.
- [x] `/api/dashboard` was smoke-tested and correctly reports missing `TONAL_MEMBERS_JSON` until secrets are configured.
