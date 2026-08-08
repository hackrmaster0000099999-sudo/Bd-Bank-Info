import fs from 'fs';

let code = fs.readFileSync('src/App.tsx', 'utf-8');

code = code.replace(/import \{ DataPipelineModal \} from '.\/components\/DataPipelineModal';\n/, '');
code = code.replace(/import \{ SeoToolingModal \} from '.\/components\/SeoToolingModal';\n/, '');

code = code.replace(/const \[isDataPipelineOpen, setIsDataPipelineOpen\] = useState\(false\);\n/, '');
code = code.replace(/const \[isSeoModalOpen, setIsSeoModalOpen\] = useState\(false\);\n/, '');

code = code.replace(/<DataPipelineModal[\s\S]*?\/>\n/, '');
code = code.replace(/<SeoToolingModal[\s\S]*?\/>\n/, '');

fs.writeFileSync('src/App.tsx', code);
