---
order: 24
variant: content
topic: "On-ramp"
title: "/claude-api — the docs write the code"
---

## **/claude-api** — the docs write the code

### Think: built-in foreman

A bundled Skill in Claude Code that activates on any Anthropic SDK work — and explicitly on ==Managed Agents==. It knows the beta header, the agent → session pattern, vaults, sandboxes, MCP wiring, and seven language SDKs.

<!-- col -->

**Label:** scaffold a production agent from your terminal

```bash
# in Claude Code:
/claude-api managed-agents-onboard

# interactive walkthrough:
#  → picks your language (TS, Python, Go, Ruby, Java, PHP, cURL)
#  → emits Agent create + Session create boilerplate
#  → wires mcp_servers, vaults, environments, tools
#  → sets the right anthropic-beta header

# bonus
/claude-api migrate ./src to claude-opus-4-7
```

> The agent that built your codebase ==knows how to deploy itself into it==. From prompt to `ant beta:worker poll` in one session.
