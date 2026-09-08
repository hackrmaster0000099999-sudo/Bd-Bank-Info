const fs = require('fs');
let content = fs.readFileSync('src/data/singapore/articles.ts', 'utf8');

content = content.replace(/bank_id: bank\.id,/, "id: bank.id, bank_id: bank.id,");

fs.writeFileSync('src/data/singapore/articles.ts', content);
