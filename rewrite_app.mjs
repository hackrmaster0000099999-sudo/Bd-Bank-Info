import fs from 'fs';

let code = fs.readFileSync('src/App.tsx', 'utf-8');

code = code.replace(/onOpenDataPipeline=\{.*?\}\s*/g, '');
code = code.replace(/onOpenSeoModal=\{.*?\}\s*/g, '');

fs.writeFileSync('src/App.tsx', code);
