---
order: 11
variant: content
topic: "Layer 7"
title: "Sandboxes — your kitchen, their chef"
---

## **Sandboxes** — your kitchen, their chef

### Think: bring-your-own-kitchen

Anthropic is the head chef sending tickets to a queue. The line cook works in ==your kitchen== — your knives, your pantry, your health inspector. Tool calls, file writes, and network egress stay on infrastructure ==you control==.

<!-- col -->

**Label:** declare a self-hosted environment, run the worker

```bash
# 1. create the environment
curl -X POST https://api.anthropic.com/v1/environments \
  -H "x-api-key: $ANTHROPIC_API_KEY" \
  -H "anthropic-beta: managed-agents-2026-04-01" \
  -d '{"name":"self-hosted","config":{"type":"self_hosted"}}'

# 2. start a worker on your box (scoped env key, not the org key)
export ANTHROPIC_ENVIRONMENT_KEY="sk-ant-oat01-..."
ant beta:worker poll --workdir /workspace

# 3. point a session at it
curl -X POST https://api.anthropic.com/v1/sessions \
  -d '{"agent":"agt_...","environment_id":"env_..."}'
```

> Your agent. Your perimeter. ==Our brain.== Fits HIPAA, SOC2, on-prem residency, intranet APIs. Cookbooks ship for Cloudflare, Daytona, Docker, Modal, Vercel.
