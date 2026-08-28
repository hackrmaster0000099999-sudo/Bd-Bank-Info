import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Language, FilterState, Bank, Branch } from './types';
import { Header } from './components/Header';
import { AdBanner } from './components/AdBanner';
import { Footer } from './components/Footer';
import { UniversalSearch } from './components/UniversalSearch';
import { FilterBar } from './components/FilterBar';
import { BankCard } from './components/BankCard';
import { BranchCard } from './components/BranchCard';
import { RoutingDecoderModal } from './components/RoutingDecoderModal';
import { ReportIssueModal } from './components/ReportIssueModal';
import { BankDetailsView } from './components/BankDetailsView';
import { BranchDetailsView } from './components/BranchDetailsView';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { PrivacyPage } from './components/PrivacyPage';
import { DisclaimerPage } from './components/DisclaimerPage';
import { NotFoundPage } from './components/NotFoundPage';
import { searchAll, getBanks, getDivisions, getBankBySlug, getBranchByRoutingNumber, getBranchByIdOrRouting } from './lib/searchEngine';
import { generateSeoData, updateSEOMeta } from './lib/seoManager';
import { Building2, Sparkles, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('bn');
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
  const [searchType, setSearchType] = useState<'all' | 'routing' | 'swift' | 'branch'>('all');
  const [filters, setFilters] = useState<FilterState>({
    bankId: 'all',
    division: 'all',
    district: 'all',
    searchType: 'all'
  });

  // Selected detail view items
  const [selectedBank, setSelectedBank] = useState<Bank | null>(null);
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);

  // Modals state
  const [isRoutingDecoderOpen, setIsRoutingDecoderOpen] = useState(false);
  const [decoderRoutingNumber, setDecoderRoutingNumber] = useState('');

  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [reportBranchTarget, setReportBranchTarget] = useState<Branch | null>(null);

  const isBn = lang === 'bn';
  const allBanks = getBanks();
  const divisions = getDivisions();

  // Search results memoized
  const searchResults = useMemo(() => {
    return searchAll(query, { ...filters, searchType });
  }, [query, filters, searchType]);

  // Filter handlers
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
    } else if (path === '/about' || path === '/contact' || path === '/privacy' || path === '/disclaimer') {
      setSelectedBank(null);
      setSelectedBranch(null);
      setCurrentTab(path.substring(1));
    } else if (path === '/' || path === '/banks' || path === '/routing' || path === '/swift') {
      setSelectedBank(null);
      setSelectedBranch(null);

      const tab = path === '/' ? 'search' : path.substring(1);
      setCurrentTab(tab);

      if (tab === 'routing') {
        setSearchType('routing');
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
  }, [location.pathname]);

  // Select Bank Detail
  const handleSelectBank = (bankId: string) => {
    navigate('/bank/' + bankId);
  };

  // Select Branch Detail
  const handleSelectBranch = (branch: Branch) => {
    navigate('/branch/' + branch.routing_number);
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
    } else if (currentTab === 'privacy') {
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
      schemaType: selectedBranch ? 'branch' : selectedBank ? 'bank' : 'general'
    });
  }, [selectedBranch, selectedBank, currentTab, is404, lang, query]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/70 dark:bg-slate-900 font-sans text-slate-800 dark:text-slate-200 transition-colors">
      {/* Top Header Navigation */}
      <Header
        lang={lang}
        onToggleLanguage={() => setLang((prev) => (prev === 'bn' ? 'en' : 'bn'))}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode((prev) => !prev)}
      />

      {/* Main Body */}
      <main className="flex-1">
        {is404 ? (
          <NotFoundPage lang={lang} onHome={() => navigate('/')} />
        ) : currentTab === 'about' ? (
          <AboutPage lang={lang} onBack={() => navigate('/')} />
        ) : currentTab === 'contact' ? (
          <ContactPage lang={lang} onBack={() => navigate('/')} />
        ) : currentTab === 'privacy' ? (
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
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-800/60 shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>
                  {isBn
                    ? 'বাংলাদেশ ব্যাংক BEFTN ডাটাবেজ আপডেট (মার্চ ২০২৬)'
                    : 'Official Bangladesh Bank BEFTN Records (Updated March 2026)'}
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight max-w-3xl mx-auto leading-tight">
                {isBn
                  ? 'বাংলাদেশের সকল ব্যাংকের রাউটিং নম্বর ও সুইফট কোড'
                  : 'Bangladesh Bank Routing Numbers & SWIFT Code Directory'}
              </h1>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
                {isBn
                  ? 'সহজে এবং এক-ক্লিকে কপি সুবিধাসহ ব্যাংক নাম, শাখা, ৯ ডিজিটের রাউটিং নম্বর এবং সুইফট কোড খুঁজুন।'
                  : 'Fast, lightweight and clean search directory. Copy BEFTN routing numbers and BIC SWIFT codes instantly.'}
              </p>

              {/* Universal Search Input Bar */}
              <div className="pt-2">
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
                  <div className="flex items-center justify-between bg-white dark:bg-slate-800/90 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs">
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-950/60 flex items-center justify-center">
                        <Building2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <span>{isBn ? 'তালিকাভুক্ত ব্যাংক সমূহ' : 'Scheduled Banks of Bangladesh'}</span>
                    </h2>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-600/60">
                      {allBanks.length} {isBn ? 'টি ব্যাংক' : 'Banks'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {allBanks.map((bank, index) => (
                      <React.Fragment key={bank.id}>
                        <BankCard
                          bank={bank}
                          lang={lang}
                          onSelectBank={handleSelectBank}
                        />
                        {(index + 1) % 6 === 0 && <AdBanner className="col-span-1 md:col-span-2 lg:col-span-3" />}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}

              {/* Search Results Display Area */}
              {(query || currentTab !== 'banks' || filters.bankId !== 'all' || filters.division !== 'all' || filters.district !== 'all') && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between bg-white dark:bg-slate-800/90 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs">
                    <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-950/60 flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <span>
                        {isBn
                          ? `অনুসন্ধান ফলাফল (${searchResults.length})`
                          : `Search Results (${searchResults.length})`}
                      </span>
                    </h2>

                    {query && (
                      <button
                        onClick={() => setQuery('')}
                        className="inline-flex items-center px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors cursor-pointer"
                      >
                        {isBn ? 'অনুসন্ধান মুছুন' : 'Clear Query'}
                      </button>
                    )}
                  </div>

                  {searchResults.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {searchResults.map((res, index) => {
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
                      })}
                    </div>
                  ) : (
                    /* No Results State with Fuzzy Suggestions & Report Link */
                    <div className="bg-white dark:bg-slate-800/90 p-8 sm:p-12 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 text-center space-y-4 max-w-xl mx-auto shadow-xs">
                      <div className="w-12 h-12 bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-400 rounded-full flex items-center justify-center mx-auto">
                        <Building2 className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {isBn ? 'কোনো ফলাফল পাওয়া যায়নি' : 'No Results Found'}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {isBn
                          ? 'আপনার অনুসন্ধানের সাথে মিল রেখে কোনো ব্যাংক বা শাখা পাওয়া যায়নি। বানান পরীক্ষা করুন অথবা ফিল্টার রিসেট করে আবার চেষ্টা করুন।'
                          : 'No matching banks or branches found for your query. Try checking spelling or resetting filters.'}
                      </p>

                      <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
                        <button
                          onClick={handleResetFilters}
                          className="px-4 py-2 text-xs font-semibold bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition-colors cursor-pointer"
                        >
                          {isBn ? 'ফিল্টার রিসেট করুন' : 'Reset All Filters'}
                        </button>

                        <button
                          onClick={() => handleOpenReportModal(null)}
                          className="px-4 py-2 text-xs font-semibold bg-slate-100 text-slate-800 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
                        >
                          {isBn ? 'অনুপস্থিত শাখা রিপোর্ট করুন' : 'Report Missing Branch'}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Browse By Division Section */}
              <div className="pt-6 border-t border-slate-200/80 dark:border-slate-700/80 space-y-4">
                <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <span>{isBn ? 'বিভাগ অনুযায়ী ব্যাংক শাখা খুঁজুন' : 'Browse Branches by Division'}</span>
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
                      <span className="text-xs font-bold block">{isBn ? div.bn : div.en}</span>
                      <span className="text-[10px] opacity-75 font-mono">{div.en}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* About World Bank Codes & Educational Overview */}
              <div className="bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200 dark:border-slate-700/80 p-6 sm:p-8 space-y-4 shadow-xs">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <span>{isBn ? 'World Bank Codes সম্পর্কে' : 'About World Bank Codes'}</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-1">
                      {isBn ? 'BEFTN রাউটিং নম্বর কী?' : 'What is a BEFTN Routing Number?'}
                    </h3>
                    <p>
                      {isBn
                        ? 'বাংলাদেশ ইলেকট্রনিক ফান্ডস ট্র্যান্সফার নেটওয়ার্ক (BEFTN)-এর জন্য ব্যবহৃত ৯ ডিজিটের অনন্য কোড, যা এক ব্যাংকের অ্যাকাউন্ট থেকে অন্য ব্যাংকে টাকা পাঠানোর জন্য প্রয়োজন হয়।'
                        : 'A 9-digit unique numeric code used by Bangladesh Electronic Funds Transfer Network (BEFTN) for interbank transfers.'}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-1">
                      {isBn ? 'SWIFT / BIC কোড কী?' : 'What is a SWIFT / BIC Code?'}
                    </h3>
                    <p>
                      {isBn
                        ? 'আন্তর্জাতিক রেমিট্যান্স বা বিদেশ থেকে বাংলাদেশে অর্থ পাঠানোর জন্য ৮ বা ১১ ডিজিটের আন্তর্জাতিক ব্যাংক আইডেন্টিফায়ার কোড।'
                        : 'An 8-character or 11-character international code used for receiving foreign remittances into Bangladeshi bank accounts.'}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-1">
                      {isBn ? 'ডাটা নির্ভুলতা ও দ্রুততা' : 'Data Accuracy & Speed'}
                    </h3>
                    <p>
                      {isBn
                        ? 'বাংলাদেশ ব্যাংকের অফিশিয়াল তালিকা অনুযায়ী নিয়মিত হালনাগাদকৃত ডাটা। কোনো পেজ রিলোড ছাড়াই ইন্সট্যান্ট কপি এবং সার্চ।'
                        : 'Updated directly from Bangladesh Bank master BEFTN releases with instant offline-capable client search.'}
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
      />

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
    </div>
  );
}

