import fs from 'fs';

let code = fs.readFileSync('src/components/BankDetailsView.tsx', 'utf-8');

if (!code.includes("import { AdBanner }")) {
  code = code.replace(
    "import { BranchCard } from './BranchCard';",
    "import { BranchCard } from './BranchCard';\nimport { AdBanner } from './AdBanner';"
  );
}

const oldMap = `          {filteredBranches.map((br) => (
            <BranchCard
              key={br.id}
              branch={br}
              lang={lang}
              onSelectBranch={onSelectBranch}
              onOpenRoutingDecoder={onOpenRoutingDecoder}
              onOpenReportModal={onOpenReportModal}
            />
          ))}`;

const newMap = `          {filteredBranches.map((br, index) => (
            <React.Fragment key={br.id}>
              <BranchCard
                branch={br}
                lang={lang}
                onSelectBranch={onSelectBranch}
                onOpenRoutingDecoder={onOpenRoutingDecoder}
                onOpenReportModal={onOpenReportModal}
              />
              {(index + 1) % 6 === 0 && <AdBanner className="col-span-1 md:col-span-2 lg:col-span-3" />}
            </React.Fragment>
          ))}`;

code = code.replace(oldMap, newMap);
fs.writeFileSync('src/components/BankDetailsView.tsx', code);
