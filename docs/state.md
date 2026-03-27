# UPSL Bot State Summary

## What is live
- Multi-account WhatsApp setup:
  - default (Personal)
  - upsl (client-facing)
  - upsl-ops (internal ops)
- OpenClaw binding split by accountId.
- n8n workflows created/updated for client and ops flows.
- OpenClaw ↔ n8n WebSocket adapter (`src/index.js`) routes messages by account:
  - `upsl` → n8n CSR workflow (webhook: `upsl-agent-chat-entry`)
  - `upsl-ops` → n8n Ops workflow (webhook: `upsl-owner-assistant-entry`)
  - `default` → ignored (handled natively by OpenClaw)

## How to run
```bash
npm run preflight   # check env vars
npm start           # connect to gateway and start routing
```

## Known issue
- `upsl-ops` has shown intermittent WhatsApp auth failures (401 / QR timeout 408) after restart.
- Recovery: logout + fresh login only for `upsl-ops` account.
- Owner Assistant n8n workflow (`3E10fQYDf9GgZb1U`) is currently INACTIVE — activate before using upsl-ops.

## Data persistence today
- Conversations: OpenClaw agent session store + n8n WindowBufferMemory (per sessionId).
- Workflow execution data: n8n execution history.
- Legacy Empire-style JSON CRM pipeline exists separately and can be wired in as needed.
