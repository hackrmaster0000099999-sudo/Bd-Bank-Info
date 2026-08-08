import fs from 'fs';

let code = fs.readFileSync('index.html', 'utf-8');

// Remove the Monetag scripts injected earlier
code = code.replace(/<!-- Monetag Ads -->[\s\S]*?<!-- In-Page Push \(Banner\) -->[\s\S]*?<\/script>/, '');

fs.writeFileSync('index.html', code);
