import fs from 'fs';

let code = fs.readFileSync('src/App.tsx', 'utf-8');

// replace imports
code = code.replace(
  "import { searchAll, getBanks, getDivisions, getBankBySlug, getBranchBySlug } from './lib/searchEngine';",
  "import { searchAll, getBanks, getDivisions, getBankBySlug, getBranchBySlug, getBranchByRoutingNumber } from './lib/searchEngine';"
);
code = code.replace(
  "import React, { useState, useMemo, useEffect } from 'react';",
  "import React, { useState, useMemo, useEffect } from 'react';\nimport { useNavigate, useLocation } from 'react-router-dom';"
);

// We need to inject hooks at the start of App()
code = code.replace(
  "const [currentTab, setCurrentTab] = useState<string>('search');",
  `const [currentTab, setCurrentTab] = useState<string>('search');
  const navigate = useNavigate();
  const location = useLocation();`
);

// We replace handleSelectTab, handleSelectBank, handleSelectBranch
const blockToReplace = `  // Handle Tab Switch
  const handleSelectTab = (tab: string) => {
    setCurrentTab(tab);
    setSelectedBank(null);
    setSelectedBranch(null);

    if (tab === 'routing') {
      setSearchType('routing');
      if (!query) setQuery('125'); // Preset example
    } else if (tab === 'swift') {
      setSearchType('swift');
      if (!query) setQuery('IBBL'); // Preset example
    } else if (tab === 'banks') {
      setSearchType('all');
      setQuery('');
    } else if (tab === 'search') {
      setSearchType('all');
    }
  };

  // Filter handlers
  const handleFilterChange = (key: keyof FilterState, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleResetFilters = () => {
    setFilters({ bankId: 'all', division: 'all', district: 'all', searchType: 'all' });
    setQuery('');
  };

  // Select Bank Detail
  const handleSelectBank = (bankId: string) => {
    const bank = getBankBySlug(bankId);
    if (bank) {
      setSelectedBank(bank);
      setSelectedBranch(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Select Branch Detail
  const handleSelectBranch = (branch: Branch) => {
    setSelectedBranch(branch);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };`;

const newBlock = `  // Filter handlers
  const handleFilterChange = (key: keyof FilterState, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleResetFilters = () => {
    setFilters({ bankId: 'all', division: 'all', district: 'all', searchType: 'all' });
    setQuery('');
  };

  // React Router Sync
  useEffect(() => {
    const path = location.pathname;
    if (path.startsWith('/bank/')) {
      const slug = path.replace('/bank/', '');
      const bank = getBankBySlug(slug);
      if (bank) {
        setSelectedBank(bank);
        setSelectedBranch(null);
      }
    } else if (path.startsWith('/branch/')) {
      const routing = path.replace('/branch/', '');
      const branch = getBranchByRoutingNumber(routing);
      if (branch) {
        setSelectedBranch(branch);
        setSelectedBank(null);
      }
    } else {
      setSelectedBank(null);
      setSelectedBranch(null);
      
      const tab = path.substring(1) || 'search';
      setCurrentTab(tab);
      
      if (tab === 'routing') {
        setSearchType('routing');
        // if (!query) setQuery('125'); // Optional preset
      } else if (tab === 'swift') {
        setSearchType('swift');
        // if (!query) setQuery('IBBL'); // Optional preset
      } else if (tab === 'banks') {
        setSearchType('all');
        // setQuery('');
      } else {
        setSearchType('all');
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // Select Bank Detail
  const handleSelectBank = (bankId: string) => {
    navigate('/bank/' + bankId);
  };

  // Select Branch Detail
  const handleSelectBranch = (branch: Branch) => {
    navigate('/branch/' + branch.routing_number);
  };`;

code = code.replace(blockToReplace, newBlock);

fs.writeFileSync('src/App.tsx', code);
