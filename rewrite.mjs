import fs from 'fs';

let code = fs.readFileSync('src/App.tsx', 'utf-8');

// Imports
code = code.replace(
  "import React, { useState, useMemo, useEffect } from 'react';",
  "import React, { useState, useMemo, useEffect } from 'react';\nimport { Routes, Route, useNavigate, useLocation, useParams } from 'react-router-dom';"
);

// We'll write the whole code because regex replacement for a 200 line JSX block is error-prone.
