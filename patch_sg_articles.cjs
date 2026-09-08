const fs = require('fs');
let content = fs.readFileSync('src/data/singapore/articles.ts', 'utf8');

// Replace returned object keys to match BankArticle interface
content = content.replace(/slug:/g, 'slug:');
content = content.replace(/bankId: bank\.id,/g, 'bank_id: bank.id,');
content = content.replace(/bankName: bank\.name,/g, ''); // bankName is not in interface
content = content.replace(/bankName_bn: bank\.name_bn \|\| bank\.name,/g, ''); // bankName_bn is not in interface
content = content.replace(/country: 'sg',/g, 'country: \'sg\',');
content = content.replace(/countryName: 'Singapore',/g, ''); // countryName is not in interface
content = content.replace(/countryName_bn: 'সিঙ্গাপুর',/g, ''); // countryName_bn is not in interface
content = content.replace(/countryFlag: '🇸🇬',/g, ''); // countryFlag is not in interface
content = content.replace(/title: articleTitle,/g, 'title: articleTitle,');
content = content.replace(/title_bn: articleTitle_bn,/g, 'title_bn: articleTitle_bn, subtitle: articleTitle, subtitle_bn: articleTitle_bn,');
content = content.replace(/relatedBankSlugs: /g, '/* relatedBankSlugs: ');
content = content.replace(/\.map\(\(b\) => \`\$\{b\.id\}-bank-code-swift-routing-singapore\`\),/g, '.map((b) => `${b.id}-bank-code-swift-routing-singapore`), */');
content = content.replace(/metaTitle:/g, 'meta_title:');
content = content.replace(/metaTitle_bn:/g, '// meta_title_bn:'); // metaTitle_bn is not in interface
content = content.replace(/metaDescription:/g, 'meta_description:');
content = content.replace(/metaDescription_bn:/g, '// meta_description_bn:'); // metaDescription_bn is not in interface
content = content.replace(/canonicalUrl:/g, '// canonicalUrl:');
content = content.replace(/publishedDate:/g, 'published_date:');
content = content.replace(/lastUpdatedDate:/g, 'last_updated:');
content = content.replace(/readingTimeMinutes: 7,/g, 'read_time: "7 min read",');
content = content.replace(/author: /g, 'author: ');

fs.writeFileSync('src/data/singapore/articles.ts', content);
