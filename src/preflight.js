require('dotenv').config();

const required = [
  'OPENCLAW_GATEWAY_URL',
  'N8N_BASE_URL',
  'N8N_WORKFLOW_CSR_ID',
  'N8N_WORKFLOW_OPS_ID'
];

let ok = true;
for (const key of required) {
  if (!process.env[key]) {
    ok = false;
    console.error(`Missing env: ${key}`);
  }
}

if (!ok) process.exit(1);
console.log('Preflight OK');
