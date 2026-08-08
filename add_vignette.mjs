import fs from 'fs';

let code = fs.readFileSync('index.html', 'utf-8');

const vignetteScript = `    <!-- Monetag Vignette Banner -->
    <script>(function(s){s.dataset.zone='11497201',s.src='https://n6wxm.com/vignette.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))</script>
`;

code = code.replace('  </head>', vignetteScript + '  </head>');
fs.writeFileSync('index.html', code);
