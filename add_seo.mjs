import fs from 'fs';

let code = fs.readFileSync('src/App.tsx', 'utf-8');

// add import
code = code.replace(
  "import { useNavigate, useLocation } from 'react-router-dom';",
  "import { useNavigate, useLocation } from 'react-router-dom';\nimport { useSEO } from './hooks/useSEO';"
);

// inside App()
const seoLogic = `
  // Dynamic SEO
  const getSEO = () => {
    const baseTitle = 'BD Bank Info | Routing Number, SWIFT Code & Branch Finder';
    if (selectedBranch) {
      const bnTitle = \`\${selectedBranch.bank_name} \${selectedBranch.branch_name} Routing Number - \${selectedBranch.routing_number}\`;
      const enTitle = \`\${selectedBranch.bank_name} \${selectedBranch.branch_name} Routing Number - \${selectedBranch.routing_number}\`;
      return {
        title: lang === 'bn' ? bnTitle : enTitle,
        description: lang === 'bn' ? \`\${selectedBranch.bank_name}-এর \${selectedBranch.branch_name} শাখার রাউটিং নম্বর \${selectedBranch.routing_number} এবং অন্যান্য তথ্য।\` : \`Find the routing number (\${selectedBranch.routing_number}) and branch details for \${selectedBranch.bank_name}, \${selectedBranch.branch_name}.\`,
        url: \`https://ais-dev-zp3vsixrfvzv6qf7qdnk3g-944495601366.asia-southeast1.run.app/branch/\${selectedBranch.routing_number}\`
      }
    }
    if (selectedBank) {
      return {
        title: lang === 'bn' ? \`\${selectedBank.name_bn || selectedBank.name} - সুইফট কোড ও শাখা সমূহ\` : \`\${selectedBank.name} - SWIFT Code & Branches\`,
        description: lang === 'bn' ? \`\${selectedBank.name_bn || selectedBank.name}-এর সুইফট কোড (\${selectedBank.swift_code || 'N/A'}) এবং শাখা সমূহের তালিকা।\` : \`SWIFT code (\${selectedBank.swift_code || 'N/A'}) and list of all branches for \${selectedBank.name}.\`,
        url: \`https://ais-dev-zp3vsixrfvzv6qf7qdnk3g-944495601366.asia-southeast1.run.app/bank/\${selectedBank.id}\`
      }
    }
    
    if (currentTab === 'banks') return { title: 'All Banks List in Bangladesh - BD Bank Info', description: 'List of all banks operating in Bangladesh with their SWIFT codes and details.' };
    if (currentTab === 'routing') return { title: 'Bangladesh Bank Routing Numbers Directory', description: 'Search and find BEFTN routing numbers for all bank branches in Bangladesh.' };
    if (currentTab === 'swift') return { title: 'Bangladesh Banks SWIFT / BIC Code Finder', description: 'Find SWIFT / BIC codes for international wire transfers to Bangladesh banks.' };
    
    return { title: baseTitle, description: 'বাংলাদেশের সকল ব্যাংকের Routing Number, SWIFT/BIC Code এবং Branch Information খুব সহজে ও দ্রুত খুঁজে বের করুন।' };
  };
  
  const seoInfo = getSEO();
  useSEO(seoInfo);
`;

code = code.replace(
  "  const [darkMode, setDarkMode] = useState<boolean>(false);",
  "  const [darkMode, setDarkMode] = useState<boolean>(false);\n" + seoLogic
);

fs.writeFileSync('src/App.tsx', code);
