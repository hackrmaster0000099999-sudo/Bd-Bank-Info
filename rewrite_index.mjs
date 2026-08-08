import fs from 'fs';

let code = fs.readFileSync('index.html', 'utf-8');
code = code.replace(
  '<meta name="viewport" content="width=device-width, initial-scale=1.0" />',
  '<meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <link rel="icon" type="image/png" href="/logo.png" />'
);

fs.writeFileSync('index.html', code);
