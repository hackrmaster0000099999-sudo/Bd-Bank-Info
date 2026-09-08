const fs = require('fs');
let content = fs.readFileSync('src/data/singapore/articles.ts', 'utf8');

// replace title: with heading: inside the sections array
content = content.replace(/title: '1\./g, "heading: '1.");
content = content.replace(/title_bn: '১\./g, "heading_bn: '১.");
content = content.replace(/title: '2\./g, "heading: '2.");
content = content.replace(/title_bn: '২\./g, "heading_bn: '২.");
content = content.replace(/title: '3\./g, "heading: '3.");
content = content.replace(/title_bn: '৩\./g, "heading_bn: '৩.");
content = content.replace(/title: '4\./g, "heading: '4.");
content = content.replace(/title_bn: '৪\./g, "heading_bn: '৪.");
content = content.replace(/title: '5\./g, "heading: '5.");
content = content.replace(/title_bn: '৫\./g, "heading_bn: '৫.");

fs.writeFileSync('src/data/singapore/articles.ts', content);
