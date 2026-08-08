const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf-8');

// 1. imports
code = code.replace(
  "import React, { useState, useMemo, useEffect } from 'react';",
  "import React, { useState, useMemo, useEffect } from 'react';\nimport { Routes, Route, useNavigate, useLocation, useParams } from 'react-router-dom';"
);

// 2. update App()
code = code.replace(
  "export default function App() {\n  const [lang, setLang] = useState<Language>('bn');\n  const [currentTab, setCurrentTab] = useState<string>('search');",
  "export default function App() {\n  const [lang, setLang] = useState<Language>('bn');\n  const navigate = useNavigate();\n  const location = useLocation();\n  const currentPath = location.pathname;"
);

// 3. remove handleSelectTab completely and logic for currentTab
code = code.replace(
  /const handleSelectTab = \(tab: string\) => {[\s\S]*?};\n/g,
  ""
);

code = code.replace(/currentTab/g, "currentPath"); // some uses might be broken, we'll fix them manually

fs.writeFileSync('src/App.tsx', code);
