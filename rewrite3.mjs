import fs from 'fs';

let code = fs.readFileSync('src/App.tsx', 'utf-8');

code = code.replace(/currentTab=\{currentTab\}\s*onSelectTab=\{handleSelectTab\}/, '');
code = code.replace(/onSelectTab=\{handleSelectTab\}/, '');
code = code.replace(/handleSelectTab/g, '(() => {})'); // Just in case

fs.writeFileSync('src/App.tsx', code);
