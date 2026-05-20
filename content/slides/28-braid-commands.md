---
order: 28
variant: content
topic: "BRAID"
title: "Six commands"
---

## Six **commands**

Inside Claude Code, BRAID exposes one slash-command surface for the whole lifecycle — scaffold, run, inspect, consolidate, tear down.

<!-- col -->

```bash
# describe what you want in a sentence
/braid create "3-shot fundraiser site for a dog rescue"

# or pick a template directly
/braid create --template fundraiser-video-site --name my-flow

# provision env, vault, stores, agents
/braid setup my-flow

# start (or resume) a streaming run
/braid run my-flow "brief goes here"

# inspect / pick / kill in-flight sessions
/braid sessions my-flow --pick

# consolidate past runs into a memory store
/braid dream my-flow --sessions 10
```

> One command per verb. ==No glue code.==
