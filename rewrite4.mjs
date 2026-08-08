import fs from 'fs';

let code = fs.readFileSync('src/App.tsx', 'utf-8');

code = code.replace(/onBack=\{.*?setSelectedBranch\(null\).*?\}/g, "onBack={() => navigate(-1)}");
code = code.replace(/onBack=\{.*?setSelectedBank\(null\).*?\}/g, "onBack={() => navigate('/')}");

fs.writeFileSync('src/App.tsx', code);
