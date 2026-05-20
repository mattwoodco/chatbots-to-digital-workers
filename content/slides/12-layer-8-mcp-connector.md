---
order: 12
variant: content
topic: "Layer 8"
title: "MCP Connector — the universal adapter"
---

## **MCP Connector** — the universal adapter

### Think: socket vs power cord

The Agent declares ==which sockets exist== — GitHub, Linear, Slack, Notion, your private server. The Session brings ==the power cord== — a vault-held OAuth token. One agent definition, the entire MCP ecosystem.

<!-- col -->

**Label:** declare an MCP server on the agent, attach creds at the session

```bash
# the agent knows the shape; no secrets here
curl -X POST https://api.anthropic.com/v1/agents \
  -H "x-api-key: $ANTHROPIC_API_KEY" \
  -d '{
    "name":"GitHub Assistant",
    "model":"claude-opus-4-7",
    "mcp_servers":[
      {"type":"url","name":"github",
       "url":"https://api.githubcopilot.com/mcp/"}
    ],
    "tools":[
      {"type":"agent_toolset_20260401"},
      {"type":"mcp_toolset","mcp_server_name":"github"}
    ]
  }'

# session brings the user's token via a vault
curl -X POST https://api.anthropic.com/v1/sessions \
  -d '{"agent":"agt_...","vault_ids":["vlt_user_gh"]}'
```

> Your laptop already speaks MCP. ==Ship the same servers to production== — swap the runtime, keep the tools.
