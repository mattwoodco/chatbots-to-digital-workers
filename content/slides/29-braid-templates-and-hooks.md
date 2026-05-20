---
order: 29
variant: content
topic: "BRAID"
title: "Templates, examples, and host-side hooks"
---

## Templates, examples, and **host-side hooks**

### Start from a working flow

==`flows/_templates/`== — fill-in-the-blank starters: `fundraiser-video-site`, `static-site-builder-deployer`, `image-series-with-memory`, `url-to-ad-set`, `viral-video-ad`.

==`flows/_examples/`== — runnable reference flows: **fundraiser** (Fal MCP + Vercel), **snapshots** (reflection-into-memory), **gauntlet-ads** (Playwright screenshots), **hiking-boots**, **fraction-blocks**.

<!-- col -->

### Credentialed work stays on the host

```yaml
run:
  post_session_hook:
    command: bun run ".../post-hooks/vercel-deploy.ts"
    env_passthrough: [VERCEL_TOKEN]
    timeout_ms: 300000
```

The agent drafts and renders inside the sandbox. The **post-session hook** runs on the host with a ==strictly scoped== token after the session ends. `VERCEL_TOKEN` never enters the agent's context.

> Vaults for the agent. Hooks for the deploy. ==The right credential in the right room.==
