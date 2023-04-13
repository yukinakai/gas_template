const fs = require('fs');
const path = require('path');

const claspJsonPath = path.join(__dirname, '.clasp.json');
const claspJson = JSON.parse(fs.readFileSync(claspJsonPath, 'utf8'));
claspJson.scriptId = '';
fs.writeFileSync(claspJsonPath, JSON.stringify(claspJson, null, 2));

console.log('Reset scriptId');
