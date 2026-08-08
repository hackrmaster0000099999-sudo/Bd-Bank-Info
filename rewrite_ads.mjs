import fs from 'fs';

let code = fs.readFileSync('src/App.tsx', 'utf-8');

// add AdBanner import
if (!code.includes("import { AdBanner }")) {
  code = code.replace(
    "import { Header } from './components/Header';",
    "import { Header } from './components/Header';\nimport { AdBanner } from './components/AdBanner';"
  );
}

// Bank list injection
const bankMapOld = `                    {allBanks.map((bank) => (
                      <BankCard
                        key={bank.id}
                        bank={bank}
                        lang={lang}
                        onSelectBank={handleSelectBank}
                      />
                    ))}`;
                    
const bankMapNew = `                    {allBanks.map((bank, index) => (
                      <React.Fragment key={bank.id}>
                        <BankCard
                          bank={bank}
                          lang={lang}
                          onSelectBank={handleSelectBank}
                        />
                        {(index + 1) % 6 === 0 && <AdBanner className="col-span-1 md:col-span-2 lg:col-span-3" />}
                      </React.Fragment>
                    ))}`;

code = code.replace(bankMapOld, bankMapNew);

// Search Results injection
const searchMapOld = `                      {searchResults.map((res) => {
                        if (res.type === 'bank') {
                          return (
                            <BankCard
                              key={res.id}
                              bank={res.item as Bank}
                              lang={lang}
                              onSelectBank={handleSelectBank}
                            />
                          );
                        } else {
                          return (
                            <BranchCard
                              key={res.id}
                              branch={res.item as Branch}
                              lang={lang}
                              onSelectBranch={handleSelectBranch}
                              onOpenRoutingDecoder={handleOpenRoutingDecoder}
                              onOpenReportModal={handleOpenReportModal}
                            />
                          );
                        }
                      })}`;

const searchMapNew = `                      {searchResults.map((res, index) => {
                        let content;
                        if (res.type === 'bank') {
                          content = (
                            <BankCard
                              bank={res.item as Bank}
                              lang={lang}
                              onSelectBank={handleSelectBank}
                            />
                          );
                        } else {
                          content = (
                            <BranchCard
                              branch={res.item as Branch}
                              lang={lang}
                              onSelectBranch={handleSelectBranch}
                              onOpenRoutingDecoder={handleOpenRoutingDecoder}
                              onOpenReportModal={handleOpenReportModal}
                            />
                          );
                        }
                        return (
                          <React.Fragment key={res.id}>
                            {content}
                            {(index + 1) % 6 === 0 && <AdBanner className="col-span-1 md:col-span-2 lg:col-span-3" />}
                          </React.Fragment>
                        );
                      })}`;

code = code.replace(searchMapOld, searchMapNew);

fs.writeFileSync('src/App.tsx', code);
