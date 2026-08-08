import fs from 'fs';

let code = fs.readFileSync('src/components/BranchDetailsView.tsx', 'utf-8');

if (!code.includes("import { AdBanner }")) {
  code = code.replace(
    "import { CopyButton } from './CopyButton';",
    "import { CopyButton } from './CopyButton';\nimport { AdBanner } from './AdBanner';"
  );
}

const targetDiv = `      {/* Hero Branch Header Card */}`;
const replacementDiv = `      <AdBanner className="mb-2" />\n\n      {/* Hero Branch Header Card */}`;

if (!code.includes("<AdBanner className=\"mb-2\" />")) {
  code = code.replace(targetDiv, replacementDiv);
}

fs.writeFileSync('src/components/BranchDetailsView.tsx', code);
