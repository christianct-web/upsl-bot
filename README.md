# UPSL Bot (WhatsApp + OpenClaw + n8n)

Production-ready split-assistant setup for Universal Package Systems Limited (UPSL):

- **Client-facing assistant** (public WhatsApp line)
- **Ops personal assistant** (internal WhatsApp line)

## Current architecture

```text
WhatsApp account: upsl      -> OpenClaw binding -> agentId: upsl-client
WhatsApp account: upsl-ops  -> OpenClaw binding -> agentId: upsl-ops
WhatsApp account: default   -> OpenClaw binding -> agentId: main (unchanged)
```

## Included in this repo

- `agents/upsl-client/system.md` – client-facing prompt
- `agents/upsl-ops/system.md` – ops personal-assistant prompt
- `config/openclaw.routing.sample.json` – multi-account + binding sample
- `n8n/upsl-csr-main.workflow.json` – UPSL CSR workflow export
- `n8n/upsl-owner-assistant.workflow.json` – UPSL owner/ops workflow export
- `docs/` – deployment and troubleshooting notes

## Environment

Copy `.env.example` to `.env` and fill values.

## Operational notes

- `upsl` DM policy is configured to **open** (public inbound allowed).
- `upsl-ops` remains internal and should stay paired/controlled.
- If `upsl-ops` fails with WhatsApp 401/408, re-link that account only:

```bash
openclaw channels logout --channel whatsapp --account upsl-ops
openclaw channels login --channel whatsapp --account upsl-ops
```

## Quick checks

```bash
openclaw channels list
openclaw channels status
openclaw channels logs --channel whatsapp | tail -120
```

