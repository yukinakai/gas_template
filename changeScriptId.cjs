const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const env = process.argv[2];

const scriptIds = {
  prod: process.env.PROD_SCRIPT_ID || '',
  stg: process.env.STG_SCRIPT_ID || '',
};

if (!scriptIds.hasOwnProperty(env) || !scriptIds[env]) {
  console.error(`Invalid environment: ${env}`);
  process.exit(1);
}

const claspJsonPath = path.join(__dirname, '.clasp.json');
const claspJson = JSON.parse(fs.readFileSync(claspJsonPath, 'utf8'));
claspJson.scriptId = scriptIds[env];
fs.writeFileSync(claspJsonPath, JSON.stringify(claspJson, null, 2));

console.log(`Changed scriptId to ${env}`);
