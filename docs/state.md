# UPSL Bot State Summary

## What is live
- Multi-account WhatsApp setup:
  - default (Personal)
  - upsl (client-facing)
  - upsl-ops (internal ops)
- OpenClaw binding split by accountId.
- n8n workflows created/updated for client and ops flows.

## Known issue
- `upsl-ops` has shown intermittent WhatsApp auth failures (401 / QR timeout 408) after restart.
- Recovery: logout + fresh login only for `upsl-ops` account.

## Data persistence today
- Conversations: OpenClaw agent session store.
- Workflow execution data: n8n execution history.
- Legacy Empire-style JSON CRM pipeline exists separately and can be wired in as needed.
