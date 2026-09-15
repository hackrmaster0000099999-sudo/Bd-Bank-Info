import React, { useState, useEffect } from 'react';
import { Building2, Globe, MapPin, Search, ArrowLeft, ExternalLink, BookOpen, HelpCircle, ChevronDown, ChevronUp, CheckCircle2, ArrowRightLeft, ShieldCheck, Sparkles, Share2, Layers } from 'lucide-react';
import { Bank, Branch, Language } from '../types';
import { slugifyState, getCountrySharedGuideSlug, getCountrySharedGuideTitle } from '../lib/searchEngine';
import { BranchCard } from './BranchCard';
import { CopyButton } from './CopyButton';
import { EzoicAdSpot } from './EzoicAdSpot';
import { getBankGuideContent } from '../lib/bankGuideContent';
import { updateSEOMeta, CURRENT_DATA_VERSION_DATE } from '../lib/seoManager';
import { Link } from 'react-router-dom';

interface BankStateViewProps {
  bank: Bank;
  stateSlug: string;
  stateName: string;
  stateBranches: Branch[];
  allBankBranches: Branch[];
  lang: Language;
  onBack: () => void;
  onSelectBranch: (branch: Branch) => void;
  onSelectState: (stateSlug: string) => void;
  onOpenRoutingDecoder: (routing: string) => void;
  onOpenReportModal: (branch: Branch) => void;
}

export const BankStateView: React.FC<BankStateViewProps> = ({
  bank,
  stateSlug,
  stateName,
  stateBranches,
  allBankBranches,
  lang,
  onBack,
  onSelectBranch,
  onSelectState,
  onOpenRoutingDecoder,
  onOpenReportModal
}) => {
  const [branchQuery, setBranchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('all');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const isBn = lang === 'bn';
  const isHi = lang === 'hi';
  const isRu = lang === 'ru';
  const isDe = lang === 'de';

  const isUS = bank.country === 'us';
  const isUK = bank.country === 'uk';
  const isCA = bank.country === 'ca';
  const isAU = bank.country === 'au';
  const isIN = bank.country === 'in';
  const isRU = bank.country === 'ru';
  const isBD = bank.country === 'bd';
  const isDE = bank.country === 'de';
  const isMY = bank.country === 'my';

  const codeLabel = isIN
    ? 'IFSC'
    : isUK
    ? 'Sort Code'
    : isUS
    ? 'ABA Routing'
    : isCA
    ? 'Transit / EFT'
    : isAU
    ? 'BSB'
    : isDE
    ? 'BLZ'
    : isRU
    ? 'BIK (БИК)'
    : isBD
    ? 'BEFTN Routing'
    : isMY
    ? 'IBG Routing'
    : 'Routing';

  // Extract cities / districts in this state
  const cities = Array.from(new Set(stateBranches.map((b) => b.district || b.upazila || b.name))).filter(Boolean);

  // Extract all states/regions available for this bank for cross-linking
  const statesMap = new Map<string, { name: string; count: number }>();
  for (const b of allBankBranches) {
    if (b.division) {
      const slug = slugifyState(b.division);
      const existing = statesMap.get(slug);
      if (existing) {
        existing.count++;
      } else {
        statesMap.set(slug, { name: b.division, count: 1 });
      }
    }
  }
  const otherStates = Array.from(statesMap.entries())
    .map(([slug, val]) => ({ slug, name: val.name, count: val.count }))
    .sort((a, b) => b.count - a.count);

  // Group branches by city / district
  const branchesByCity = stateBranches.reduce((acc, br) => {
    const city = br.district || br.upazila || br.division || 'Other Branches';
    if (!acc[city]) acc[city] = [];
    acc[city].push(br);
    return acc;
  }, {} as Record<string, Branch[]>);

  // Filter branches according to search input & city filter
  const filteredBranches = stateBranches.filter((br) => {
    const matchesCity = selectedCity === 'all' || (br.district || br.upazila || br.name) === selectedCity;
    const q = branchQuery.toLowerCase().trim();
    const matchesQuery =
      !q ||
      br.name.toLowerCase().includes(q) ||
      (br.name_bn && br.name_bn.includes(q)) ||
      (br.name_hi && br.name_hi.includes(q)) ||
      (br.name_ru && br.name_ru.includes(q)) ||
      (br.routing_number && br.routing_number.includes(q)) ||
      (br.ifsc_code && br.ifsc_code.toLowerCase().includes(q)) ||
      (br.sort_code && br.sort_code.toLowerCase().includes(q)) ||
      (br.bik_code && br.bik_code.toLowerCase().includes(q)) ||
      (br.transit_number && br.transit_number.includes(q)) ||
      (br.blz && br.blz.includes(q)) ||
      (br.swift_code && br.swift_code.toLowerCase().includes(q)) ||
      (br.address && br.address.toLowerCase().includes(q));

    return matchesCity && matchesQuery;
  });

  const localizedBankName = isRu ? (bank.name_ru || bank.name) : isHi ? (bank.name_hi || bank.name) : isBn ? (bank.name_bn || bank.name) : bank.name;

  // SEO page title and description
  const metaTitle = isBn
    ? `${localizedBankName} (${bank.short_name}) ${stateName} শাখার রাউটিং নম্বর, ঠিকানা ও সুইফট কোড ২০২৬`
    : isHi
    ? `${localizedBankName} - ${stateName} की सभी शाखाएं, IFSC, MICR ও राउटिंग कोड ২০২৬`
    : isRu
    ? `${localizedBankName} в регионе ${stateName}: БИК, реквизиты, отделения и SWIFT коды`
    : `${bank.name} (${bank.short_name}) ${stateName} Branches, ${codeLabel} & SWIFT Directory 2026`;

  const metaDesc = isBn
    ? `${localizedBankName}-এর ${stateName} অঞ্চলের সকল (${stateBranches.length}টি) শাখার ৯-ডিজিটের অফিশিয়াল রাউটিং নাম্বার, সুইফট কোড, শাখা কোড, সঠিক ঠিকানা ও যোগাযোগ নম্বর ২০২৬।`
    : isHi
    ? `${localizedBankName} की ${stateName} में स्थित सभी ${stateBranches.length} शाखाओं के आधिकारिक IFSC, MICR एवं राउटिंग कोड, पूरा पता व संपर्क विवरण।`
    : isRu
    ? `Справочник всех отделений ${bank.name} в регионе ${stateName} (${stateBranches.length} отделений): банковские реквизиты, БИК, корр. счета, SWIFT и адреса филиалов.`
    : `Find all ${stateBranches.length} ${bank.name} branches in ${stateName}. Verified ${codeLabel}, SWIFT/BIC codes, full addresses, and direct contact details for 2026.`;

  const pageCanonicalUrl = `https://worldbankcodes.com/bank/${bank.id}/${stateSlug}`;

  // Custom localized State FAQs
  const stateFaqs = [
    {
      question: isBn
        ? `${stateName} অঞ্চলে ${bank.name}-এর কতটি শাখা রয়েছে?`
        : isHi
        ? `${stateName} में ${bank.name} की कुल कितनी शाखाएं हैं?`
        : `How many ${bank.name} branches are located in ${stateName}?`,
      answer: isBn
        ? `${stateName} অঞ্চলে ${bank.name}-এর মোট ${stateBranches.length}টি অনুমোদিত ও সক্রিয় শাখা রয়েছে। প্রতিটি শাখার জন্য আলাদা BEFTN/সুইফট কোড ও ঠিকানা উপরে প্রদর্শিত হয়েছে।`
        : isHi
        ? `${stateName} में ${bank.name} की कुल ${stateBranches.length} शाखाएं कार्यरत हैं। सभी शाखाओं के IFSC, MICR एवं शाखा कोड सत्यापित हैं।`
        : `There are currently ${stateBranches.length} verified active ${bank.name} branches in ${stateName}. Each location maintains verified clearing identifiers, addresses, and SWIFT connectivity.`
    },
    {
      question: isBn
        ? `${stateName}-এ ${bank.name}-এর শাখাগুলোতে অর্থ স্থানান্তরের জন্য কোন কোড ব্যবহার করব?`
        : isHi
        ? `${stateName} में फंड ट्रांसफर के लिए मुझे कौन से कोड की आवश्यकता होगी?`
        : `Which code should I use for fund transfers to ${bank.name} in ${stateName}?`,
      answer: isUS
        ? `Use the 9-digit ABA routing transit number for domestic ACH direct deposit and domestic Fedwire transfers. For incoming international remittances, use SWIFT/BIC code ${bank.swift_code}.`
        : isUK
        ? `Use the 6-digit UK Sort Code alongside the 8-digit account number for Faster Payments and BACS. For international payments, supply SWIFT code ${bank.swift_code}.`
        : isIN
        ? `Use the branch-specific 11-digit IFSC code for NEFT, RTGS, and IMPS transfers within India. For foreign remittances, use ${bank.swift_code}.`
        : isCA
        ? `Provide the 5-digit Transit number and 3-digit Institution number (003) for direct deposits and pre-authorized debits, or 9-digit EFT routing code.`
        : isDE
        ? `Use the 8-digit Bankleitzahl (BLZ) and your German IBAN for SEPA domestic/cross-border European credit transfers, with SWIFT ${bank.swift_code}.`
        : `Use the 9-digit BEFTN routing number corresponding to the specific branch in ${stateName}, and ${bank.swift_code} for foreign wire remittances.`
    },
    {
      question: isBn
        ? `আন্তর্জাতিক রেমিট্যান্স বা বিদেশ থেকে ফান্ড পাঠানোর জন্য কী তথ্য লাগবে?`
        : isHi
        ? `विदेश से पैसे मंगाने के लिए क्या विवरण देना होगा?`
        : `What information is required for international remittances to ${stateName}?`,
      answer: `To receive foreign wire transfers, instruct the remitter to provide: Bank Name (${bank.name}), Beneficiary Name, Account Number, Branch Address in ${stateName}, and SWIFT/BIC code (${bank.swift_code}).`
    }
  ];

  // Handle deep-link / redirect hash scrolling to specific branch card
  useEffect(() => {
    if (window.location.hash) {
      const targetId = window.location.hash.substring(1);
      const tryScroll = () => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          el.classList.add('ring-4', 'ring-emerald-500/50', 'border-emerald-500');
          setTimeout(() => {
            el.classList.remove('ring-4', 'ring-emerald-500/50');
          }, 3500);
          return true;
        }
        return false;
      };

      if (!tryScroll()) {
        const timer = setTimeout(tryScroll, 200);
        return () => clearTimeout(timer);
      }
    }
  }, [stateSlug, filteredBranches.length]);

  // Update SEO Meta Tags & structured data on mount/state change
  useEffect(() => {
    updateSEOMeta({
      title: metaTitle,
      description: metaDesc,
      canonicalUrl: pageCanonicalUrl,
      lang,
      bank,
      stateBranches,
      stateName,
      stateSlug,
      schemaType: 'bank_state',
      faqs: stateFaqs
    });
  }, [bank, stateSlug, stateName, stateBranches, lang]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Breadcrumb Navigation Bar */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-2xs cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>{isRu ? 'Все банки' : isHi ? 'सभी बैंक' : isBn ? 'সকল ব্যাংক' : 'All Banks'}</span>
        </button>

        <span className="text-slate-300 dark:text-slate-600">/</span>

        <Link
          to={`/bank/${bank.id}`}
          className="hover:text-emerald-600 dark:hover:text-emerald-400 truncate max-w-[150px] sm:max-w-xs font-semibold"
        >
          {bank.short_name || bank.name}
        </Link>

        <span className="text-slate-300 dark:text-slate-600">/</span>

        <span className="text-slate-900 dark:text-white font-bold truncate">
          {stateName}
        </span>
      </nav>

      {/* Hero Header Banner */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden border border-slate-700/50">
        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 whitespace-nowrap shrink-0">
              {bank.type || 'Commercial Bank'}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-slate-200 border border-white/10 whitespace-nowrap shrink-0">
              <MapPin className="w-3 h-3 inline mr-1 text-emerald-400" />
              {stateName} ({stateBranches.length} {isBn ? 'টি শাখা' : isHi ? 'शाखाएं' : isRu ? 'отделений' : 'Branches'})
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-white/10 text-slate-200 border border-white/10 whitespace-nowrap shrink-0">
              {isIN ? `IFSC: ${bank.ifsc_prefix || bank.bank_code}` : `Bank Code: ${bank.bank_code}`}
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 whitespace-nowrap shrink-0">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              <span>{CURRENT_DATA_VERSION_DATE}</span>
            </span>
          </div>

          <div>
            <h1 className="text-xl sm:text-3xl font-extrabold tracking-tight break-words">
              {localizedBankName} — {stateName}
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1 break-words">
              {isBn
                ? `${stateName} অঞ্চলের সকল শাখার অফিশিয়াল ${codeLabel}, সুইফট কোড, শাখা কোড ও বিস্তারিত ঠিকানা নির্দেশিকা`
                : isHi
                ? `${stateName} क्षेत्र की सभी शाखाओं के आधिकारिक ${codeLabel}, MICR, स्विफ्ट कोड ও पता`
                : isRu
                ? `Справочник всех филиалов ${bank.name} в регионе ${stateName} с БИК кодами, адресами и SWIFT`
                : `Verified Directory of All ${stateBranches.length} ${bank.name} Branches in ${stateName} with Official ${codeLabel} & SWIFT`}
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-700/80 text-xs">
            <div className="bg-white/5 backdrop-blur-xs p-3.5 rounded-2xl border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-slate-400 font-medium block text-[11px]">
                  {isBn ? 'হেড অফিস সুইফট কোড:' : isHi ? 'प्रधान कार्यालय SWIFT:' : 'SWIFT / BIC Code:'}
                </span>
                <span className="font-mono text-sm sm:text-base font-bold text-white tracking-wider">
                  {bank.swift_code}
                </span>
              </div>
              <CopyButton textToCopy={bank.swift_code} size="sm" lang={lang} className="shrink-0" />
            </div>

            <div className="bg-white/5 backdrop-blur-xs p-3.5 rounded-2xl border border-white/10">
              <span className="text-slate-400 font-medium block text-[11px]">
                {isBn ? 'মোট শহর / জেলা:' : isHi ? 'शामिल शहर / जिले:' : 'Cities / Districts:'}
              </span>
              <span className="text-sm sm:text-base font-bold text-white">
                {cities.length} {isBn ? 'টি অঞ্চল' : isHi ? 'जिले' : 'Locations'}
              </span>
            </div>

            <div className="bg-white/5 backdrop-blur-xs p-3.5 rounded-2xl border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-slate-400 font-medium block text-[11px]">
                  {isBn ? 'ব্যাংকের প্রধান কার্যালয়:' : isHi ? 'केंद्रीय मुख्यालय:' : 'Head Office:'}
                </span>
                <span className="text-xs text-white font-medium truncate block max-w-[180px]">
                  {bank.head_office}
                </span>
              </div>
              {bank.website && (
                <a
                  href={bank.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-emerald-300 transition-colors"
                  aria-label="Visit Bank Website"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Cross-Region Navigation Pill List */}
      {otherStates.length > 1 && (
        <div className="bg-white dark:bg-slate-800/90 p-4 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-2xs space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200">
            <span className="flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>{isBn ? `${bank.short_name}-এর অন্যান্য রাজ্য ও অঞ্চল:` : isHi ? `${bank.short_name} के अन्य राज्य / क्षेत्र:` : `Other States & Regions for ${bank.short_name}:`}</span>
            </span>
            <Link
              to={`/bank/${bank.id}`}
              className="text-emerald-600 dark:text-emerald-400 hover:underline font-semibold"
            >
              {isBn ? 'সব শাখা দেখুন' : isHi ? 'सभी शाखाएं' : 'View All Bank Branches'} →
            </Link>
          </div>
          <div className="flex flex-wrap gap-2 pt-1 max-h-36 overflow-y-auto">
            {otherStates.map((st) => {
              const isActive = st.slug === stateSlug;
              return (
                <Link
                  key={st.slug}
                  to={`/bank/${bank.id}/${st.slug}`}
                  onClick={() => onSelectState(st.slug)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs transition-all ${
                    isActive
                      ? 'bg-emerald-600 text-white font-bold shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 hover:bg-emerald-50 hover:text-emerald-700 dark:hover:bg-slate-700'
                  }`}
                >
                  <span>{st.name}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${isActive ? 'bg-emerald-700 text-emerald-100' : 'bg-slate-200 dark:bg-slate-600 text-slate-600 dark:text-slate-300'}`}>
                    {st.count}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* In-Page Search & City Filter Bar */}
      <div className="bg-white dark:bg-slate-800/90 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-xs space-y-3">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <h2 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Building2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>
              {isHi
                ? `${stateName} में शाखाएं (${filteredBranches.length})`
                : isBn
                ? `${stateName}-এ ${bank.short_name}-এর শাখা তালিকা (${filteredBranches.length})`
                : `${stateName} Branches Directory (${filteredBranches.length})`}
            </span>
          </h2>

          {/* City Filter Dropdown */}
          {cities.length > 1 && (
            <div className="relative w-full sm:w-56">
              <label htmlFor="state-city-select" className="sr-only">
                {isHi ? 'शहर चुनें' : isBn ? 'শহর বা জেলা নির্বাচন' : 'Filter by City / District'}
              </label>
              <select
                id="state-city-select"
                aria-label={isHi ? 'शहर चुनें' : isBn ? 'শহর বা জেলা নির্বাচন' : 'Filter by City / District'}
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-3 py-2 text-xs font-medium bg-slate-50 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600/80 rounded-xl text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
              >
                <option value="all">
                  {isBn ? `সকল শহর (${cities.length})` : isHi ? `सभी शहर (${cities.length})` : `All Cities / Districts (${cities.length})`}
                </option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Real-time search query box */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={branchQuery}
            onChange={(e) => setBranchQuery(e.target.value)}
            placeholder={
              isHi
                ? `${stateName} में शाखा का नाम, पता या ${codeLabel} लिखें...`
                : isBn
                ? `${stateName}-এ শাখার নাম, এলাকা বা রাউটিং লিখুন...`
                : `Filter branches in ${stateName} by name, address or ${codeLabel}...`
            }
            className="w-full pl-10 pr-4 py-2.5 text-xs bg-slate-50 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500"
          />
        </div>
      </div>

      {/* Ad Placement 1: Top (Before Branch Listing / Above Content) */}
      <EzoicAdSpot id="ezoic-bankstate-top-ad" className="w-full bg-slate-50/50 dark:bg-slate-800/30 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700/60 py-2" />

      {/* Consolidated Branch Cards Grid with Ad Placement 2 (Middle) */}
      {filteredBranches.length > 0 ? (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredBranches.slice(0, 24).map((br) => (
              <BranchCard
                key={`${br.country || 'bd'}-${br.id}`}
                branch={br}
                lang={lang}
                onSelectBranch={onSelectBranch}
                onOpenRoutingDecoder={onOpenRoutingDecoder}
                onOpenReportModal={onOpenReportModal}
              />
            ))}
          </div>

          {/* Ad Placement 2: Middle (After first 24 branch cards if list is long, or between branch grid and details) */}
          {filteredBranches.length > 24 && (
            <>
              <EzoicAdSpot id="ezoic-bankstate-mid-ad" className="w-full bg-slate-50/50 dark:bg-slate-800/30 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700/60 py-2" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredBranches.slice(24).map((br) => (
                  <BranchCard
                    key={`${br.country || 'bd'}-${br.id}`}
                    branch={br}
                    lang={lang}
                    onSelectBranch={onSelectBranch}
                    onOpenRoutingDecoder={onOpenRoutingDecoder}
                    onOpenReportModal={onOpenReportModal}
                  />
                ))}
              </div>
            </>
          )}

          {filteredBranches.length <= 24 && (
            <EzoicAdSpot id="ezoic-bankstate-mid-ad" className="w-full bg-slate-50/50 dark:bg-slate-800/30 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700/60 py-2" />
          )}
        </div>
      ) : (
        <div className="bg-white dark:bg-slate-800/90 p-8 rounded-2xl border border-slate-200 dark:border-slate-700/80 text-center space-y-2">
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            {isHi ? 'कोई शाखा नहीं मिली।' : isBn ? 'কোনো শাখা পাওয়া যায়নি।' : `No branches found matching "${branchQuery}" in ${stateName}.`}
          </p>
          <button
            onClick={() => {
              setBranchQuery('');
              setSelectedCity('all');
            }}
            className="text-xs text-emerald-700 dark:text-emerald-400 font-bold underline cursor-pointer"
          >
            {isBn ? 'ফিল্টার রিসেট করুন' : isHi ? 'फ़िल्टर हटाएं' : 'Clear Filters'}
          </button>
        </div>
      )}

      {/* Bank-Specific Operational & Regulatory Details + Shared Clearing Guide Link */}
      <article className="bg-white dark:bg-slate-800/90 rounded-3xl border border-slate-200 dark:border-slate-700/80 p-6 sm:p-10 shadow-xs space-y-8 text-slate-800 dark:text-slate-200">
        <div className="border-b border-slate-200 dark:border-slate-700/80 pb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{stateName} Banking & Operations Guide</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight break-words">
            {isBn
              ? `${stateName} অঞ্চলে ${bank.name}-এর ব্যাংকিং কার্যক্রম ও রেগুলেটরি তথ্য`
              : isHi
              ? `${stateName} में ${bank.name} के बैंकिंग संचालन एवं नियामक विवरण`
              : `${bank.name} Operational Details & Branch Network in ${stateName}`}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
            {metaDesc}
          </p>
        </div>

        {/* Section 1: Bank-Specific Operational & Regulatory Grid */}
        <section className="space-y-4">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>{isBn ? 'প্রাতিষ্ঠানিক ও রেগুলেটরি তথ্যাবলি' : `Bank-Specific Regulatory & Operational Parameters`}</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {/* Regulatory Status */}
            <div className="bg-slate-50 dark:bg-slate-900/40 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700/60 space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {isUS ? 'FDIC Certificate / Regulator' : 'Central Regulatory Authority'}
              </span>
              <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                {isUS
                  ? `FDIC Cert #${bank.fdic_cert || '628'} • Federal Reserve Member`
                  : isUK
                  ? 'Bank of England / PRA & FCA • FSCS Protected'
                  : isIN
                  ? 'Reserve Bank of India (RBI) • DICGC Insured'
                  : isCA
                  ? 'Payments Canada Direct Clearer • CDIC Insured'
                  : isDE
                  ? 'Deutsche Bundesbank & BaFin • EdB Sicherung'
                  : isRU
                  ? 'Bank of Russia Licensed • DIA System'
                  : 'Bangladesh Bank Scheduled Commercial Bank'}
              </p>
            </div>

            {/* Wire & Clearing Cutoff Times */}
            <div className="bg-slate-50 dark:bg-slate-900/40 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700/60 space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Processing & Settlement Windows
              </span>
              <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                {isUS
                  ? 'Fedwire: 4:00 PM ET Cutoff • ACH: 3 Daily Windows'
                  : isUK
                  ? 'Faster Payments: 24/7/365 • CHAPS: 3:30 PM London'
                  : isIN
                  ? 'NEFT: 24x7 Round-the-Clock • RTGS: Real-Time'
                  : isCA
                  ? 'EFT: 1-2 Business Days • Interac: 24/7'
                  : isDE
                  ? 'SEPA Instant (<10s) • SEPA Core: 1 Business Day'
                  : 'BEFTN: Next Day Batch • RTGS: 3:30 PM BST'}
              </p>
            </div>

            {/* Customer Care Hotline */}
            <div className="bg-slate-50 dark:bg-slate-900/40 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700/60 space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Verified Customer Support
              </span>
              <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                {bank.customer_care || (isUS ? '1-800-935-9935' : isUK ? '0345 734 5345' : isIN ? '1800 1234' : '16234')}
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Shared National Clearing & Remittance Guide Link (PRD Section 8a) */}
        <section className="bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50/50 dark:from-emerald-950/40 dark:via-teal-950/30 dark:to-emerald-950/20 rounded-2xl border border-emerald-200/80 dark:border-emerald-800/60 p-5 sm:p-6 space-y-3">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-emerald-700 dark:text-emerald-400 shrink-0" />
            <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
              {getCountrySharedGuideTitle(bank.country, lang)}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {isBn
              ? `জাতীয় পর্যায়ে ক্লিয়ারিং আর্কিটেকচার, রাউটিং নম্বর বিন্যাস, গাণিতিক চেকসাম অ্যালগরিদম, ACH/BEFTN সেটেলমেন্ট সাইকেল এবং সেন্ট্রাল ডিপোজিট বীমা সম্পর্কে বিস্তারিত জানতে আমাদের সার্বজনীন নির্দেশিকা পড়ুন:`
              : `For a comprehensive technical explanation of national clearing mechanics, mathematical checksum formulas, batch vs. real-time payment cycles (ACH/Fedwire/FPS/NEFT), and government deposit insurance regulations, consult the official shared national guide:`}
          </p>
          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            <Link
              to={`/article/${getCountrySharedGuideSlug(bank.country)}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors shadow-xs"
            >
              <span>{isBn ? `সার্বজনীন ক্লিয়ারিং গাইড পড়ুন` : `Read Shared National Clearing Guide`}</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
            <Link
              to={`/article/${bank.id}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/80 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-colors shadow-xs"
            >
              <span>{isBn ? `${bank.name} প্রতিষ্ঠানিক গাইড` : `${bank.name} Specific Profile`}</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Section 3: State FAQs Accordion */}
        <section className="space-y-3 pt-2">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>Frequently Asked Questions — {bank.name} in {stateName}</span>
          </h3>

          <div className="space-y-2.5">
            {stateFaqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 dark:border-slate-700/80 overflow-hidden bg-slate-50/50 dark:bg-slate-900/30 transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:bg-slate-100/50 dark:hover:bg-slate-800/50 cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="p-4 pt-0 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/40 dark:border-slate-700/40 mt-1">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Ad Placement 3: Bottom (Page end, after FAQ section) */}
        <EzoicAdSpot id="ezoic-bankstate-bottom-ad" className="w-full bg-slate-50/50 dark:bg-slate-900/30 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700/60 py-2 mt-4" />
      </article>
    </div>
  );
};
