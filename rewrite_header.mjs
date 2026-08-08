import fs from 'fs';

let code = fs.readFileSync('src/components/Header.tsx', 'utf-8');

code = code.replace(/onOpenDataPipeline:\s*\(\)\s*=>\s*void;\n/, '');
code = code.replace(/onOpenDataPipeline,\n/, '');
// Remove button 1
code = code.replace(/<button\s+onClick=\{onOpenDataPipeline\}[\s\S]*?<\/button>/, '');
// Remove button 2 (BB Sync badge)
code = code.replace(/<button\s+onClick=\{onOpenDataPipeline\}[\s\S]*?<\/button>/, '');
// Remove button 3 (Mobile)
code = code.replace(/<button\s+onClick=\{onOpenDataPipeline\}[\s\S]*?<\/button>/, '');

fs.writeFileSync('src/components/Header.tsx', code);
