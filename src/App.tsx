import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Language, FilterState, Bank, Branch, Country } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { UniversalSearch } from './components/UniversalSearch';
import { FilterBar } from './components/FilterBar';
import { BankCard } from './components/BankCard';
import { BranchCard } from './components/BranchCard';
import { RoutingDecoderModal } from './components/RoutingDecoderModal';
import { ReportIssueModal } from './components/ReportIssueModal';
import { RatingFeedbackModal } from './components/RatingFeedbackModal';
import { BankDetailsView } from './components/BankDetailsView';
import { BranchDetailsView } from './components/BranchDetailsView';
import { HeroCountrySelector } from './components/HeroCountrySelector';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { PrivacyPage } from './components/PrivacyPage';
import { DisclaimerPage } from './components/DisclaimerPage';
import { NotFoundPage } from './components/NotFoundPage';
import { searchAll, getBanks, getDivisions, getBankBySlug, getBranchByRoutingNumber, getBranchByIdOrRouting } from './lib/searchEngine';
import { generateSeoData, updateSEOMeta, getFreshnessLabel, CURRENT_DATA_VERSION_DATE } from './lib/seoManager';
import { detectUserCountryAndLang } from './lib/geoDetector';
import { translations } from './lib/translations';
import { Building2, Sparkles, ShieldCheck, MapPin, CheckCircle2, Clock, Star } from 'lucide-react';

export default function App() {
  const initialGeo = useMemo(() => detectUserCountryAndLang(), []);
  const [lang, setLang] = useState<Language>(initialGeo.lang);
  const [country, setCountry] = useState<Country>(initialGeo.country);
  const [currentTab, setCurrentTab] = useState<string>('search');
  const [is404, setIs404] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Dark mode state
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Search & Filter state
  const [query, setQuery] = useState<string>('');
  const [searchType, setSearchType] = useState<'all' | 'routing' | 'ifsc' | 'swift' | 'branch'>('all');
  const [filters, setFilters] = useState<FilterState>({
    country: initialGeo.country,
    bankId: 'all',
    division: 'all',
    district: 'all',
    searchType: 'all'
  });

  // Keep country filter in sync with global country
  const handleSetCountry = (newCountry: Country) => {
    setCountry(newCountry);
    if (newCountry === 'de') {
      setLang('de');
    } else if (newCountry === 'in') {
      setLang('hi');
    } else if (newCountry === 'bd') {
      setLang('bn');
    } else if (newCountry === 'ru') {
      setLang('ru');
    } else {
      setLang('en');
    }

    setFilters((prev) => ({
      ...prev,
      country: newCountry,
      bankId: 'all',
      division: 'all',
      district: 'all'
    }));

    // If currently on a detail page from another country, redirect to appropriate directory
    const path = location.pathname;
    if (newCountry !== 'all') {
      if (path.startsWith('/bank/')) {
        const slug = path.replace('/bank/', '');
        const currentBank = getBankBySlug(slug);
        if (currentBank && currentBank.country && currentBank.country !== newCountry) {
          navigate('/banks');
        }
      } else if (path.startsWith('/branch/')) {
        const identifier = decodeURIComponent(path.replace('/branch/', ''));
        const currentBranch = getBranchByIdOrRouting(identifier) || getBranchByRoutingNumber(identifier);
        if (currentBranch && currentBranch.country && currentBranch.country !== newCountry) {
          navigate('/routing');
        }
      }
    }
  };

  // Selected detail view items
  const [selectedBank, setSelectedBank] = useState<Bank | null>(null);
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);

  // Modals state
  const [isRoutingDecoderOpen, setIsRoutingDecoderOpen] = useState(false);
  const [decoderRoutingNumber, setDecoderRoutingNumber] = useState('');

  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [reportBranchTarget, setReportBranchTarget] = useState<Branch | null>(null);

  const [isRatingModalOpen, setIsRatingModalOpen] = useState(false);

  const t = translations[lang] || translations.en;
  const currentBanks = getBanks(country);
  const divisions = getDivisions(country);

  // Search results memoized
  const searchResults = useMemo(() => {
    return searchAll(query, { ...filters, country, searchType });
  }, [query, filters, country, searchType]);

  // Filter handlers
  const handleFilterChange = (key: keyof FilterState, value: string) => {
    if (key === 'country') {
      handleSetCountry(value as Country);
    } else {
      setFilters((prev) => ({ ...prev, [key]: value }));
    }
  };

  const handleResetFilters = () => {
    setFilters({ country: 'all', bankId: 'all', division: 'all', district: 'all', searchType: 'all' });
    setCountry('all');
    setQuery('');
  };

  // React Router Sync
  useEffect(() => {
    const path = location.pathname;
    setIs404(false);

    if (path.startsWith('/bank/')) {
      const slug = path.replace('/bank/', '');
      const bank = getBankBySlug(slug);
      if (bank) {
        setSelectedBank(bank);
        setSelectedBranch(null);
      } else {
        setIs404(true);
      }
    } else if (path.startsWith('/branch/')) {
      const identifier = decodeURIComponent(path.replace('/branch/', ''));
      const branch = getBranchByIdOrRouting(identifier) || getBranchByRoutingNumber(identifier);
      if (branch) {
        setSelectedBranch(branch);
        setSelectedBank(null);
      } else {
        setIs404(true);
      }
    } else if (path === '/about' || path === '/contact' || path === '/privacy-policy' || path === '/disclaimer') {
      setSelectedBank(null);
      setSelectedBranch(null);
      setCurrentTab(path.substring(1));
    } else if (path === '/' || path === '/banks' || path === '/routing' || path === '/swift') {
      setSelectedBank(null);
      setSelectedBranch(null);

      const tab = path === '/' ? 'search' : path.substring(1);
      setCurrentTab(tab);

      if (tab === 'routing') {
        setSearchType(country === 'in' ? 'ifsc' : 'routing');
      } else if (tab === 'swift') {
        setSearchType('swift');
      } else {
        setSearchType('all');
      }
    } else {
      setSelectedBank(null);
      setSelectedBranch(null);
      setIs404(true);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname, country]);

  // Select Bank Detail
  const handleSelectBank = (bankId: string) => {
    navigate('/bank/' + bankId);
  };

  // Select Branch Detail
  const handleSelectBranch = (branch: Branch) => {
    const code = branch.ifsc_code || branch.routing_number;
    navigate('/branch/' + encodeURIComponent(code));
  };

  // Trigger Routing Decoder Modal
  const handleOpenRoutingDecoder = (routing: string) => {
    setDecoderRoutingNumber(routing);
    setIsRoutingDecoderOpen(true);
  };

  // Trigger Report Issue Modal
  const handleOpenReportModal = (branch?: Branch | null) => {
    setReportBranchTarget(branch || null);
    setIsReportModalOpen(true);
  };

  // SEO Metadata Update
  useEffect(() => {
    let viewType: 'home' | 'banks' | 'bank_detail' | 'branch_detail' | 'routing' | 'swift' | 'about' | 'contact' | 'privacy' | 'disclaimer' | '404' = 'home';

    if (is404) {
      viewType = '404';
    } else if (selectedBranch) {
      viewType = 'branch_detail';
    } else if (selectedBank) {
      viewType = 'bank_detail';
    } else if (currentTab === 'banks') {
      viewType = 'banks';
    } else if (currentTab === 'routing') {
      viewType = 'routing';
    } else if (currentTab === 'swift') {
      viewType = 'swift';
    } else if (currentTab === 'about') {
      viewType = 'about';
    } else if (currentTab === 'contact') {
      viewType = 'contact';
    } else if (currentTab === 'privacy-policy') {
      viewType = 'privacy';
    } else if (currentTab === 'disclaimer') {
      viewType = 'disclaimer';
    }

    const seo = generateSeoData(viewType, lang, selectedBank || undefined, selectedBranch || undefined, query);

    updateSEOMeta({
      title: seo.title,
      description: seo.description,
      canonicalUrl: seo.canonicalUrl,
      lang: lang,
      bank: selectedBank || undefined,
      branch: selectedBranch || undefined,
      schemaType: selectedBranch ? 'branch' : selectedBank ? 'bank' : 'general',
      is404: is404
    });
  }, [selectedBranch, selectedBank, currentTab, is404, lang, query]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/70 dark:bg-slate-900 font-sans text-slate-800 dark:text-slate-200 transition-colors">
      {/* Top Header Navigation */}
      <Header
        lang={lang}
        onSetLanguage={setLang}
        country={country}
        onSetCountry={handleSetCountry}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode((prev) => !prev)}
      />

      {/* Main Body */}
      <main className="flex-1">
        {is404 ? (
          <NotFoundPage lang={lang} onHome={() => navigate('/')} onNavigate={(path) => navigate(path)} />
        ) : currentTab === 'about' ? (
          <AboutPage lang={lang} onBack={() => navigate('/')} />
        ) : currentTab === 'contact' ? (
          <ContactPage lang={lang} onBack={() => navigate('/')} />
        ) : currentTab === 'privacy-policy' ? (
          <PrivacyPage lang={lang} onBack={() => navigate('/')} />
        ) : currentTab === 'disclaimer' ? (
          <DisclaimerPage lang={lang} onBack={() => navigate('/')} />
        ) : selectedBranch ? (
          /* VIEW 1: Branch Details View */
          <BranchDetailsView
            branch={selectedBranch}
            lang={lang}
            onBack={() => navigate(-1)}
            onOpenRoutingDecoder={handleOpenRoutingDecoder}
            onOpenReportModal={handleOpenReportModal}
          />
        ) : selectedBank ? (
          /* VIEW 2: Bank Details View */
          <BankDetailsView
            bank={selectedBank}
            lang={lang}
            onBack={() => navigate('/')}
            onSelectBranch={handleSelectBranch}
            onOpenRoutingDecoder={handleOpenRoutingDecoder}
            onOpenReportModal={handleOpenReportModal}
          />
        ) : (
          /* VIEW 3: Main Directory Landing / Search Views */
          <div className="space-y-8 py-6">
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2 text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border border-emerald-200/90 dark:border-emerald-800/80 shadow-2xs max-w-full text-center break-words">
                <span className="flex h-2 w-2 relative shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600 dark:bg-emerald-400"></span>
                </span>
                <span className="break-words">
                  {getFreshnessLabel(lang)}
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight max-w-4xl mx-auto leading-tight">
                {country === 'de' ? (
                  lang === 'de'
                    ? 'Deutsche Bankleitzahlen (BLZ), IBAN, SWIFT & Filialverzeichnis'
                    : lang === 'bn'
                    ? 'জার্মানির সকল ব্যাংকের Bankleitzahl (BLZ), IBAN ও সুইফট কোড ডিরেক্টরি'
                    : lang === 'hi'
                    ? 'जर्मनी के सभी बैंकों के BLZ, IBAN एवं SWIFT कोड डायरेक्टरी'
                    : lang === 'ru'
                    ? 'Справочник BLZ, IBAN и SWIFT кодов банков Германии'
                    : 'Germany Bankleitzahl (BLZ), IBAN & SWIFT Code Directory'
                ) : country === 'in' ? (
                  lang === 'hi'
                    ? 'भारत के सभी बैंकों के IFSC कोड, MICR ও स्विफ्ट कोड'
                    : lang === 'ru'
                    ? 'Справочник IFSC, MICR и SWIFT кодов банков Индии'
                    : 'All India Bank IFSC Codes, MICR & SWIFT Directory'
                ) : country === 'bd' ? (
                  lang === 'bn'
                    ? 'বাংলাদেশের সকল ব্যাংকের রাউটিং নম্বর ও সুইফট কোড'
                    : lang === 'ru'
                    ? 'Справочник Routing и SWIFT кодов банков Бангладеш'
                    : 'Bangladesh Bank Routing Numbers & SWIFT Code Directory'
                ) : country === 'ru' ? (
                  lang === 'ru'
                    ? 'Открытый справочник банковских реквизитов: БИК, корр. счета и SWIFT коды РФ'
                    : lang === 'hi'
                    ? 'रूसी बैंकों के BIK एवं SWIFT कोड डायरेक्टरी'
                    : lang === 'bn'
                    ? 'রাশিয়ান ব্যাংক সমূহের BIK এবং SWIFT কোড ডিরেক্টরি'
                    : 'Russian Bank BIK, Correspondent Accounts & SWIFT Codes Directory'
                ) : (
                  lang === 'de'
                    ? 'Weltweites Bankleitzahlen-Verzeichnis: BLZ, IBAN, Sort Code & SWIFT'
                    : lang === 'ru'
                    ? 'Глобальный справочник кодов IFSC, Routing и SWIFT'
                    : lang === 'hi'
                    ? 'वैश्विक बैंक IFSC, राउटिंग एवं SWIFT कोड डायरेक्टरी'
                    : lang === 'bn'
                    ? 'বিশ্বের ব্যাংক সমূহের IFSC, রাউটিং ও সুইফট কোড ডিরেক্টরি'
                    : 'Global Bank IFSC, Routing Numbers & SWIFT Codes Directory'
                )}
              </h1>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
                {t.tagline}
              </p>

              {/* Hero Country Quick Switcher */}
              <div className="pt-2">
                <HeroCountrySelector
                  country={country}
                  onSetCountry={handleSetCountry}
                  onSetLanguage={setLang}
                  lang={lang}
                />
              </div>

              {/* Universal Search Input Bar */}
              <div className="pt-1">
                <UniversalSearch
                  query={query}
                  onChangeQuery={setQuery}
                  searchType={searchType}
                  onChangeSearchType={setSearchType}
                  lang={lang}
                  totalResultsCount={searchResults.length}
                />
              </div>
            </section>

            {/* Filter Bar & Content Area */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
              {/* Filter Bar */}
              <FilterBar
                filters={filters}
                onChangeFilter={handleFilterChange}
                onResetFilters={handleResetFilters}
                lang={lang}
              />

              {/* Tab 1: Banks List (When Tab is 'banks') */}
              {currentTab === 'banks' && !query && filters.bankId === 'all' && (
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3 bg-white dark:bg-slate-800/90 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs">
                    <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 min-w-0">
                      <div className="w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-950/60 flex items-center justify-center shrink-0">
                        <Building2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <span className="truncate">{t.allBanks} ({currentBanks.length})</span>
                    </h2>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-600/60 shrink-0">
                      {currentBanks.length} {t.banks}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {currentBanks.map((bank) => (
                      <BankCard
                        key={`${bank.country || 'bd'}-${bank.id}`}
                        bank={bank}
                        lang={lang}
                        onSelectBank={handleSelectBank}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Search Results Display Area */}
              {(query || currentTab !== 'banks' || filters.bankId !== 'all' || filters.division !== 'all' || filters.district !== 'all') && (
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3 bg-white dark:bg-slate-800/90 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs">
                    <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 min-w-0">
                      <div className="w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-950/60 flex items-center justify-center shrink-0">
                        <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <span className="break-words">
                        {lang === 'hi'
                          ? `खोज परिणाम (${searchResults.length})`
                          : lang === 'bn'
                          ? `অনুসন্ধান ফলাফল (${searchResults.length})`
                          : `Search Results (${searchResults.length})`}
                      </span>
                    </h2>

                    {query && (
                      <button
                        onClick={() => setQuery('')}
                        className="inline-flex items-center px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors cursor-pointer shrink-0"
                      >
                        {lang === 'hi' ? 'खोज हटाएं' : lang === 'bn' ? 'অনুসন্ধান মুছুন' : 'Clear Query'}
                      </button>
                    )}
                  </div>

                  {searchResults.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {searchResults.map((res) => {
                        if (res.type === 'bank') {
                          return (
                            <BankCard
                              key={`bank-${res.country || 'bd'}-${res.id}`}
                              bank={res.item as Bank}
                              lang={lang}
                              onSelectBank={handleSelectBank}
                            />
                          );
                        }
                        return (
                          <BranchCard
                            key={`branch-${res.country || 'bd'}-${res.id}`}
                            branch={res.item as Branch}
                            lang={lang}
                            onSelectBranch={handleSelectBranch}
                            onOpenRoutingDecoder={handleOpenRoutingDecoder}
                            onOpenReportModal={handleOpenReportModal}
                          />
                        );
                      })}
                    </div>
                  ) : (
                    /* No Results State */
                    <div className="bg-white dark:bg-slate-800/90 p-8 sm:p-12 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 text-center space-y-4 max-w-xl mx-auto shadow-xs">
                      <div className="w-12 h-12 bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-400 rounded-full flex items-center justify-center mx-auto">
                        <Building2 className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {lang === 'hi' ? 'कोई परिणाम नहीं मिला' : lang === 'bn' ? 'কোনো ফলাফল পাওয়া যায়নি' : 'No Results Found'}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {lang === 'hi'
                          ? 'आपकी खोज के अनुसार कोई बैंक या शाखा नहीं मिली। कृपया वर्तनी (Spelling) जाँचें या फ़िल्टर रीसेट करें।'
                          : lang === 'bn'
                          ? 'আপনার অনুসন্ধানের সাথে মিল রেখে কোনো ব্যাংক বা শাখা পাওয়া যায়নি। বানান পরীক্ষা করুন অথবা ফিল্টার রিসেট করে আবার চেষ্টা করুন।'
                          : 'No matching banks or branches found for your query. Try checking spelling or resetting filters.'}
                      </p>

                      <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
                        <button
                          onClick={handleResetFilters}
                          className="px-4 py-2 text-xs font-semibold bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition-colors cursor-pointer"
                        >
                          {t.reset}
                        </button>

                        <button
                          onClick={() => handleOpenReportModal(null)}
                          className="px-4 py-2 text-xs font-semibold bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
                        >
                          {t.reportIssue}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Browse By Division/State Section */}
              <div className="pt-6 border-t border-slate-200/80 dark:border-slate-700/80 space-y-4">
                <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <span>
                    {country === 'in'
                      ? (lang === 'hi' ? 'राज्य के अनुसार बैंक शाखाएँ खोजें' : 'Browse Branches by Indian State')
                      : country === 'bd'
                      ? (lang === 'bn' ? 'বিভাগ অনুযায়ী ব্যাংক শাখা খুঁজুন' : 'Browse Branches by BD Division')
                      : (lang === 'hi' ? 'राज्य / विभाग अनुसार शाखाएँ खोजें' : lang === 'bn' ? 'বিভাগ / রাজ্য অনুযায়ী শাখা খুঁজুন' : 'Browse Branches by State / Division')}
                  </span>
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
                  {divisions.map((div) => (
                    <button
                      key={div.en}
                      onClick={() => {
                        handleFilterChange('division', div.en);
                        setCurrentTab('search');
                      }}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        filters.division === div.en
                          ? 'bg-emerald-700 dark:bg-emerald-600 text-white border-emerald-700 dark:border-emerald-600 shadow-md font-bold'
                          : 'bg-white dark:bg-slate-800/90 text-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700/80 hover:border-emerald-300 dark:hover:border-emerald-700/60 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20'
                      }`}
                    >
                      <span className="text-xs font-bold block truncate">
                        {lang === 'hi' && div.hi ? div.hi : lang === 'bn' ? div.bn : div.en}
                      </span>
                      <span className="text-[10px] opacity-75 font-mono truncate block">{div.en}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* About World Bank Codes & Educational Overview */}
              <div className="bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200 dark:border-slate-700/80 p-6 sm:p-8 space-y-4 shadow-xs">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <span>{t.aboutUs} - World Bank Codes</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-1">
                      {lang === 'hi' ? 'IFSC एवं রাউটিং কোড কী?' : lang === 'bn' ? 'IFSC ও BEFTN রাউটিং নম্বর কী?' : 'What is IFSC & Routing Code?'}
                    </h3>
                    <p>
                      {lang === 'hi'
                        ? 'IFSC (Indian Financial System Code) ११ अक्षरों का कोड है जो NEFT, RTGS, IMPS के लिए आवश्यक है। बांग्लादेश में ৯ অঙ্কের BEFTN রাউটিং কোড ব্যবহৃত হয়।'
                        : lang === 'bn'
                        ? 'বাংলাদেশ ইলেকট্রনিক ফান্ডস ট্র্যান্সফার নেটওয়ার্ক (BEFTN)-এর জন্য ব্যবহৃত ৯ ডিজিটের অনন্য কোড এবং ভারতের ১১ ডিজিটের IFSC কোড আন্তঃব্যাংক লেনদেনে ব্যবহৃত হয়।'
                        : 'IFSC is an 11-character alphanumeric code for Indian interbank transfers (NEFT/RTGS), while Bangladesh uses 9-digit BEFTN routing numbers.'}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-1">
                      {lang === 'hi' ? 'SWIFT / BIC कोड क्या है?' : lang === 'bn' ? 'SWIFT / BIC কোড কী?' : 'What is a SWIFT / BIC Code?'}
                    </h3>
                    <p>
                      {lang === 'hi'
                        ? 'अंतर्राष्ट्रीय मनी ट्रांसफर या विदेश से भारत/बांग्लादेश में पैसे मंगवाने के लिए ८ या ११ अक्षरों का अंतर्राष्ट्रीय बैंक कोड।'
                        : lang === 'bn'
                        ? 'আন্তর্জাতিক রেমিট্যান্স বা বিদেশ থেকে অর্থ পাঠানোর জন্য ৮ বা ১১ ডিজিটের আন্তর্জাতিক ব্যাংক আইডেন্টিফায়ার কোড।'
                        : 'An 8 or 11 character standard identifier code used worldwide for international wire transfers and foreign remittances.'}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-1">
                      {lang === 'hi' ? 'सटीकता एवं गति' : lang === 'bn' ? 'ডাটা নির্ভুলতা ও দ্রুততা' : 'Data Accuracy & Speed'}
                    </h3>
                    <p>
                      {lang === 'hi'
                        ? 'RBI एवं केंद्रीय बैंकों द्वारा सत्यापित मास्टर डेटाबेस। बिना किसी विज्ञापन (Ad-free) के तेज़ और सहज अनुभव।'
                        : lang === 'bn'
                        ? 'বাংলাদেশ ব্যাংক ও আরবিআই-এর অফিশিয়াল ডাটা অনুযায়ী নিয়মিত হালনাগাদকৃত। শতভাগ বিজ্ঞাপনমুক্ত ও নিরাপদ।'
                        : 'Updated directly from official central bank databases. 100% ad-free, ultra-fast, and mobile-friendly.'}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onOpenReportModal={() => handleOpenReportModal(selectedBranch)}
        onOpenRatingModal={() => setIsRatingModalOpen(true)}
      />

      {/* Floating Instant Rating & Feedback Button */}
      <button
        onClick={() => setIsRatingModalOpen(true)}
        className="fixed bottom-5 right-4 sm:right-6 z-30 inline-flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-full bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-extrabold text-xs shadow-xl shadow-amber-500/25 transition-all hover:scale-105 active:scale-95 cursor-pointer border border-amber-400/80"
        title="Rate & Feedback"
        aria-label="Rate Us & Send Direct Message"
      >
        <Star className="w-4 h-4 fill-slate-950 text-slate-950" />
        <span>{lang === 'hi' ? 'रेटिंग व फीडबैक' : lang === 'bn' ? 'রেটিং ও মতামত' : lang === 'ru' ? 'Оцените нас ⭐' : 'Rate Us ⭐'}</span>
      </button>

      {/* Interactive Modals */}
      <RoutingDecoderModal
        routingNumber={decoderRoutingNumber}
        isOpen={isRoutingDecoderOpen}
        onClose={() => setIsRoutingDecoderOpen(false)}
        lang={lang}
      />

      <ReportIssueModal
        branch={reportBranchTarget}
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
        lang={lang}
      />

      <RatingFeedbackModal
        isOpen={isRatingModalOpen}
        onClose={() => setIsRatingModalOpen(false)}
        lang={lang}
      />
    </div>
  );
}
