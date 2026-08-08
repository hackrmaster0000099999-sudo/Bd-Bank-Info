import fs from 'fs';

let code = fs.readFileSync('src/components/Footer.tsx', 'utf-8');

code = code.replace(/onOpenSeoModal:\s*\(\)\s*=>\s*void;\n/, '');
code = code.replace(/onOpenDataPipeline:\s*\(\)\s*=>\s*void;\n/, '');
code = code.replace(/onOpenSeoModal,\n/, '');
code = code.replace(/onOpenDataPipeline\n/, '');

fs.writeFileSync('src/components/Footer.tsx', code);
