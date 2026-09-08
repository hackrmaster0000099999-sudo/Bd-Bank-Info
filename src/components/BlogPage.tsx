import React, { useState, useMemo } from 'react';
import { BookOpen, Search, Clock, ArrowRight, Building2, Sparkles, ChevronRight, Globe2, RotateCcw } from 'lucide-react';
import { Language, Country } from '../types';
import { allBankArticles } from '../lib/searchEngine';
import { bdBanksArticles } from '../data/bd/articles';
import { indiaBanksArticles } from '../data/india/articles';
import { russianBanksArticles } from '../data/russia/articles';
import { usaBanksArticles } from '../data/usa/articles';
import { ukBanksArticles } from '../data/uk/articles';
import { germanyBanksArticles } from '../data/germany/articles';
import { canadaBanksArticles } from '../data/canada/articles';
import { australiaBanksArticles } from '../data/australia/articles';
import { uaeBanksArticles } from '../data/uae/articles';
import { singaporeBanksArticles } from '../data/singapore/articles';
import { HeroCountrySelector } from './HeroCountrySelector';

interface BlogPageProps {
  lang: Language;
  country: Country;
  onSetCountry: (country: Country) => void;
  onSetLanguage?: (lang: Language) => void;
  onSelectArticle: (slug: string) => void;
  onNavigateHome: () => void;
}


export const BlogPage: React.FC<BlogPageProps> = ({
  lang,
  country,
  onSetCountry,
  onSetLanguage,
  onSelectArticle,
  onNavigateHome
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'islamic' | 'state' | 'private' | 'foreign'>('all');

  const handleCountryClick = (c: Country) => {
    onSetCountry(c);
    if (onSetLanguage) {
      if (c === 'de') onSetLanguage('de');
      else if (c === 'bd') onSetLanguage('bn');
      else if (c === 'in') onSetLanguage('hi');
      else if (c === 'ru') onSetLanguage('ru');
      else if (c === 'us' || c === 'uk' || c === 'ca' || c === 'au' || c === 'ae' || c === 'sg') onSetLanguage('en');
    }
  };

  const articlesToFilter = useMemo(() => {
    if (country === 'all') return allBankArticles;
    if (country === 'sg') return singaporeBanksArticles;
    if (country === 'ae') return uaeBanksArticles;
    if (country === 'au') return australiaBanksArticles;
    if (country === 'ca') return canadaBanksArticles;
    if (country === 'de') return germanyBanksArticles;
    if (country === 'uk') return ukBanksArticles;
    if (country === 'us') return usaBanksArticles;
    if (country === 'bd') return bdBanksArticles;
    if (country === 'in') return indiaBanksArticles;
    if (country === 'ru') return russianBanksArticles;
    return []; // For countries without blog articles yet
  }, [country]);

  const isRussian = lang === 'ru';
  const isHindi = lang === 'hi';
  const isBengali = lang === 'bn';
  const isGerman = lang === 'de';

  const filteredArticles = useMemo(() => {
    return articlesToFilter.filter((article) => {
      const isArticleRu = article.country === 'ru';
      const isArticleIn = article.country === 'in';
      const isArticleBd = article.country === 'bd';

      const titleToSearch =
        (isRussian || isArticleRu) && article.title_ru
          ? article.title_ru
          : (isHindi || isArticleIn) && article.title_hi
          ? article.title_hi
          : (isBengali || isArticleBd) && article.title_bn
          ? article.title_bn
          : article.title;

      const matchesSearch =
        titleToSearch.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.slug.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (article.meta_keywords && article.meta_keywords.some((k) => k.toLowerCase().includes(searchTerm.toLowerCase())));

      if (!matchesSearch) return false;

      if (selectedCategory === 'all') return true;
      if (selectedCategory === 'islamic') {
        return (
          article.overview_bn?.includes('ইসলামিক') ||
          article.slug.includes('islami') ||
          article.slug.includes('arafah') ||
          article.slug.includes('social') ||
          article.slug.includes('shahjalal') ||
          article.slug.includes('exim') ||
          article.slug.includes('union')
        );
      }
      if (selectedCategory === 'state') {
        return (
          article.slug.includes('sberbank') ||
          article.slug.includes('vtb') ||
          article.slug.includes('gazprom') ||
          article.slug.includes('rosselkhoz') ||
          article.slug.includes('psb') ||
          article.slug.includes('sbi') ||
          article.slug.includes('state-bank') ||
          article.slug.includes('punjab') ||
          article.slug.includes('baroda') ||
          article.slug.includes('canara') ||
          article.slug.includes('union-bank') ||
          article.slug.includes('sonali') ||
          article.slug.includes('janata') ||
          article.slug.includes('agrani') ||
          article.slug.includes('rupali') ||
          article.slug.includes('basic') ||
          article.slug.includes('krishi')
        );
      }
      if (selectedCategory === 'foreign') {
        return (
          article.slug.includes('td-bank') ||
          article.slug.includes('raiffeisen') ||
          article.slug.includes('standard-chartered') ||
          article.slug.includes('hsbc') ||
          article.slug.includes('citibank') ||
          article.slug.includes('woori') ||
          article.slug.includes('commercial-bank-of-ceylon') ||
          article.slug.includes('habib')
        );
      }
      if (selectedCategory === 'private') {
        return (
          article.country === 'us' ||
          article.slug.includes('alfa') ||
          article.slug.includes('tinkoff') ||
          article.slug.includes('t-bank') ||
          article.slug.includes('sovcom') ||
          article.slug.includes('saint-petersburg') ||
          article.slug.includes('uralsib') ||
          article.slug.includes('hdfc') ||
          article.slug.includes('icici') ||
          article.slug.includes('axis') ||
          article.slug.includes('kotak') ||
          article.slug.includes('indusind') ||
          article.slug.includes('yes-bank') ||
          article.slug.includes('brac') ||
          article.slug.includes('dutch-bangla') ||
          article.slug.includes('city-bank') ||
          article.slug.includes('prime')
        );
      }
      return true;
    });
  }, [articlesToFilter, isRussian, isHindi, isBengali, searchTerm, selectedCategory]);

  // Dynamic banner texts based on active country / language
  const bannerBadge =
    country === 'sg'
      ? 'Monetary Authority of Singapore (MAS) Regulated Banking Guides 2026'
      : country === 'ae'
      ? 'Central Bank of the UAE (CBUAE) Verified Banking Guides 2026'
      : country === 'au'
      ? 'Reserve Bank of Australia & APRA Regulated Bank Guides 2026'
      : country === 'ca'
      ? 'Bank of Canada & CDIC Regulated Bank Guides 2026'
      : country === 'uk'
      ? 'Bank of England & PRA Regulated Bank Guides 2026'
      : country === 'us'
      ? 'USA & Global Banking Knowledge Hub & Verified Guides 2026'
      : country === 'ru' || isRussian
      ? 'Аналитический центр банковских реквизитов и руководств 2026'
      : country === 'in' || isHindi
      ? 'भारतीय एवं अंतरराष्ट्रीय बैंकिंग ज्ञान केंद्र व सत्यापित गाइड 2026'
      : country === 'bd' || isBengali
      ? 'বাংলাদেশ ও আন্তর্জাতিক ব্যাংকিং নলেজ হাব ও সম্পূর্ণ আর্টিকেল'
      : country === 'de' || isGerman
      ? 'Deutsches & Internationales Banken-Wissenszentrum 2026'
      : 'Global Banking Knowledge Hub & Verified Guides 2026';

  const bannerTitle =
    country === 'sg'
      ? 'Singapore Banks 4-Digit MAS Codes, 7-Digit Routing, FAST & PayNow Guides 2026'
      : country === 'ae'
      ? 'UAE Banks CBUAE Codes, UAEFTS, 23-Digit IBAN & Aani Instant Guides 2026'
      : country === 'au'
      ? 'Australia Banks BSB Codes, NPP Osko, PayID & SWIFT Guides 2026'
      : country === 'ca'
      ? 'Canada Banks Transit Number, Institution Code, Interac & SWIFT Guides 2026'
      : country === 'uk'
      ? 'UK Banks 6-Digit Sort Code, Faster Payments & SWIFT Guides 2026'
      : country === 'us'
      ? 'ABA Routing Numbers, SWIFT Codes & Wire Transfer Guides for US Banks 2026'
      : country === 'ru' || isRussian
      ? 'БИК коды, Корр. счета, ИНН, SWIFT и официальные банковские реквизиты банков РФ 2026'
      : country === 'in' || isHindi
      ? 'भारतीय बैंकों के आधिकारिक IFSC कोड, MICR, स्विफ्ट कोड और बैंकिंग गाइड 2026'
      : country === 'bd' || isBengali
      ? 'বাংলাদেশ ও আন্তর্জাতিক সকল ব্যাংকের রাউটিং নাম্বার, IFSC ও সুইফট কোড গাইড ২০২৬'
      : country === 'de' || isGerman
      ? 'Bankleitzahlen (BLZ), BIC / SWIFT und SEPA-Überweisungsleitfaden 2026'
      : 'Complete Bank IFSC Codes, Routing Numbers & SWIFT BIC Guides 2026';

  const bannerSubtitle =
    country === 'sg'
      ? 'Official 4-digit MAS/ABS bank clearing codes (7171, 7339, 7375, 7083, 7214), 7-digit branch routing numbers, FAST 24/7 instant transfers, PayNow (NRIC/FIN/UEN), SDIC S$100,000 deposit guarantee, and SWIFT wire codes for DBS, POSB, OCBC, UOB, Standard Chartered, Citibank, HSBC, Maybank, Bank of China, Trust Bank, GXS Bank, MariBank, and all Singapore financial institutions.'
      : country === 'ae'
      ? 'Official 3-digit CBUAE bank clearing codes, 9-digit UAEFTS routing numbers, 23-character IBAN structure (AEkk...), Aani 24/7 instant mobile payments, Wages Protection System (WPS) and SWIFT wire codes for Emirates NBD, First Abu Dhabi Bank (FAB), ADCB, Dubai Islamic Bank (DIB), Mashreq, ADIB, CBD, RAKBANK, Emirates Islamic, Sharjah Islamic Bank, HSBC UAE, Citibank, Wio Bank and all UAE institutions.'
      : country === 'au'
      ? 'Official 6-digit BSB codes (Bank-State-Branch: XXX-XXX), NPP 24/7 Osko instant transfers, PayID routing, Australian Government FCS $250,000 AUD deposit guarantee and SWIFT wire codes for CommBank, Westpac, NAB, ANZ, Macquarie, Bendigo Bank, Suncorp, Bankwest and all Australian institutions.'
      : country === 'ca'
      ? 'Official 3-digit Institution Numbers, 5-digit Branch Transit codes, 9-digit EFT routing formats, Interac e-Transfer limits, CDIC $100,000 deposit insurance and SWIFT wire codes for RBC, TD, Scotiabank, BMO, CIBC, National Bank, Desjardins and all Canadian financial institutions.'
      : country === 'uk'
      ? 'Official 6-digit sort codes (XX-XX-XX), Faster Payments limits, Bacs direct debits, CHAPS settlement, UK IBAN structure, and £85,000 FSCS protection for Barclays, HSBC, Lloyds, NatWest, Santander, and all UK clearing banks.'
      : country === 'us'
      ? 'Official 9-digit ABA Routing Transit Numbers (RTN), Fedwire / ACH transfer rules, FDIC insurance coverage ($250,000) and SWIFT codes for JPMorgan Chase, Bank of America, Wells Fargo, Citibank and top US banks.'
      : country === 'ru' || isRussian
      ? 'Официальные девятизначные БИК коды, двадцатизначные корреспондентские счета в Банке России, ИНН, КПП, переводы через СБП без комиссии, SWIFT реквизиты Сбербанка, ВТБ, Альфа-Банка, Т-Банка (Тинькофф) и всех банков РФ.'
      : country === 'in' || isHindi
      ? 'भारतीय स्टेट बैंक (SBI), HDFC, ICICI, PNB सहित भारत के सभी प्रमुख वाणिज्यिक व सरकारी बैंकों के 11-अंकीय आधिकारिक IFSC कोड, स्विफ्ट कोड, चेक बुक गाइड, NEFT/RTGS/IMPS फंड ट्रांसफर नियम।'
      : country === 'bd' || isBengali
      ? 'ইসলামী ব্যাংক, ডাচ-বাংলা, ব্র্যাক, সোনালী ব্যাংক এবং ভারতের এসবিআই, এইচডিএফসি সহ সকল তফসিলি ও বাণিজ্যিক ব্যাংকের প্রতিটি শাখার ৯-সংখ্যার BEFTN রাউটিং নাম্বার, ১১-ডিজিট IFSC, আন্তর্জাতিক সুইফট কোড ও পূর্ণাঙ্গ ব্যাংকিং সহায়িকা।'
      : country === 'de' || isGerman
      ? 'Offizielle Bankleitzahlen (BLZ), BIC/SWIFT-Codes, IBAN-Rechner und SEPA-Überweisungsrichtlinien für deutsche und internationale Banken.'
      : 'Authoritative financial editorial guides for banks across Singapore, UAE, Australia, Canada, UK, USA, Germany, Russia, India, Bangladesh and global financial corridors.';

  const searchPlaceholder =
    country === 'sg'
      ? 'Search Singapore banks (e.g., DBS, POSB, OCBC, UOB, StanChart, Trust)...'
      : country === 'ae'
      ? 'Search UAE banks (e.g., Emirates NBD, FAB, ADCB, DIB, Mashreq, Wio)...'
      : country === 'au'
      ? 'Search Australian banks (e.g., CommBank, Westpac, NAB, ANZ, Macquarie)...'
      : country === 'ca'
      ? 'Search Canadian banks (e.g., RBC, TD, Scotiabank, BMO, CIBC, Desjardins)...'
      : country === 'uk'
      ? 'Search UK banks (e.g., Barclays, HSBC, Lloyds, NatWest, Monzo)...'
      : country === 'us'
      ? 'Search US banks or articles (e.g., Chase, BofA, Wells Fargo)...'
      : country === 'ru' || isRussian
      ? 'Поиск банка или статьи (например: Сбер, ВТБ, Т-Банк, Альфа)...'
      : country === 'in' || isHindi
      ? 'बैंक का नाम या आर्टिकल खोजें (जैसे: SBI, HDFC, PNB, ICICI)...'
      : country === 'bd' || isBengali
      ? 'ব্যাংকের নাম বা আর্টিকেল খুঁজুন (যেমন: ব্র্যাক, ডিবিবিএল, সোনালী)...'
      : country === 'de' || isGerman
      ? 'Bank oder Artikel suchen (z. B. Deutsche Bank, Commerzbank)...'
      : 'Search banking articles...';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400">
        <button
          onClick={onNavigateHome}
          className="hover:text-emerald-600 dark:hover:text-emerald-400 cursor-pointer font-medium"
        >
          {isGerman ? 'Startseite' : isRussian ? 'Главная' : isHindi ? 'होम' : isBengali ? 'হোম' : 'Home'}
        </button>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-slate-800 dark:text-slate-200 font-semibold">
          {isGerman ? 'Banken-Leitfäden & Blog' : isRussian ? 'Банковские статьи и блог' : isHindi ? 'बैंकिंग लेख एवं ब्लॉग' : isBengali ? 'ব্লগ ও ব্যাংকিং আর্টিকেল' : 'Blog & Banking Guides'}
        </span>
      </nav>

      {/* Header Banner */}
      <div className="bg-gradient-to-br from-emerald-900 via-slate-900 to-emerald-950 text-white p-8 sm:p-12 rounded-3xl shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{bannerBadge}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight text-white">
            {bannerTitle}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {bannerSubtitle}
          </p>

          {/* Quick Filter Search inside Banner */}
          <div className="pt-2">
            <div className="relative max-w-xl">
              <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={searchPlaceholder}
                className="w-full pl-11 pr-14 py-3 bg-white/10 dark:bg-slate-800/80 backdrop-blur-md border border-white/20 dark:border-slate-700 text-white placeholder-slate-400 text-sm rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-300 hover:text-white bg-white/20 px-2 py-0.5 rounded-md cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Country Filter Bar (Synchronized with Global Country State) */}
      <div className="pt-2">
        <HeroCountrySelector
          country={country}
          onSetCountry={handleCountryClick}
          onSetLanguage={onSetLanguage}
          lang={lang}
        />
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
            selectedCategory === 'all'
              ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 shadow-sm'
              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/60'
          }`}
        >
          {isGerman ? 'Alle Kategorien' : isRussian ? 'Все категории' : isHindi ? 'सभी श्रेणियां' : isBengali ? 'সকল ক্যাটাগরি' : 'All Categories'}
        </button>
        <button
          onClick={() => setSelectedCategory('state')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
            selectedCategory === 'state'
              ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 shadow-sm'
              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/60'
          }`}
        >
          {isGerman ? 'Staatliche & Systemische Banken' : isRussian ? 'Системно значимые и государственные' : isHindi ? 'सार्वजनिक क्षेत्र के बैंक (Public Sector)' : isBengali ? 'রাষ্ট্রায়ত্ত ও বিশেষায়িত ব্যাংক' : 'Public & State-Owned'}
        </button>
        <button
          onClick={() => setSelectedCategory('private')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
            selectedCategory === 'private'
              ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 shadow-sm'
              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/60'
          }`}
        >
          {isGerman ? 'Private Geschäftsbanken' : isRussian ? 'Частные коммерческие банки' : isHindi ? 'निजी वाणिज्यिक बैंक (Private Sector)' : isBengali ? 'বেসরকারি বাণিজ্যিক ব্যাংক' : 'Private Sector'}
        </button>
        <button
          onClick={() => setSelectedCategory('islamic')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
            selectedCategory === 'islamic'
              ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 shadow-sm'
              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/60'
          }`}
        >
          {isGerman ? 'Islamisches Bankwesen' : isRussian ? 'Партнерский / Исламский банкинг' : isHindi ? 'इस्लामिक बैंकिंग (Islamic Banking)' : isBengali ? 'ইসলামিক ব্যাংকসমূহ' : 'Islamic Banking'}
        </button>
        <button
          onClick={() => setSelectedCategory('foreign')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
            selectedCategory === 'foreign'
              ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 shadow-sm'
              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/60'
          }`}
        >
          {isGerman ? 'Ausländische Banken' : isRussian ? 'Иностранные банки' : isHindi ? 'विदेशी वाणिज्यिक बैंक (Foreign Banks)' : isBengali ? 'বিদেশি বাণিজ্যিক ব্যাংক' : 'Foreign Banks'}
        </button>
      </div>

      {/* Articles Grid */}
      {filteredArticles.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => {
            const isArticleRussia = article.country === 'ru';
            const isArticleIndia = article.country === 'in';
            const isArticleUSA = article.country === 'us';
            const isArticleUK = article.country === 'uk';
            const isArticleGermany = article.country === 'de';
            const isArticleCanada = article.country === 'ca';
            const isArticleAustralia = article.country === 'au';
            const isArticleUAE = article.country === 'ae';
            const isArticleSingapore = article.country === 'sg';
            const isArticleBD = article.country === 'bd';

            const title =
              (isRussian || isArticleRussia) && article.title_ru
                ? article.title_ru
                : (isHindi || isArticleIndia) && article.title_hi
                ? article.title_hi
                : (isBengali || isArticleBD) && article.title_bn
                ? article.title_bn
                : article.title;

            const subtitle =
              (isRussian || isArticleRussia) && article.subtitle_ru
                ? article.subtitle_ru
                : (isHindi || isArticleIndia) && article.subtitle_hi
                ? article.subtitle_hi
                : (isBengali || isArticleBD) && article.subtitle_bn
                ? article.subtitle_bn
                : article.subtitle;

            const bankCode =
              article.quick_stats.find(
                (s) =>
                  s.label.includes('Routing') ||
                  s.label.includes('রাউটিং') ||
                  s.label.includes('БИК') ||
                  s.label.includes('কোড') ||
                  s.label.includes('Code') ||
                  s.label.includes('BLZ') ||
                  s.label.includes('Bankleitzahl') ||
                  s.label.includes('प्रीफिक्स') ||
                  s.label.includes('Prefix')
              )?.value || '000';

            const swift =
              article.quick_stats.find(
                (s) =>
                  s.label.includes('SWIFT') ||
                  s.label.includes('свифт') ||
                  s.label.includes('সুইফট') ||
                  s.label.includes('स्विफ्ट') ||
                  s.label.includes('BIC')
              )?.value || 'SWIFT';

            const readTimeText = isRussian
              ? article.read_time.replace('read', 'чтения').replace('min', 'мин')
              : isHindi
              ? article.read_time.replace('min read', 'मिनट पढ़ने का समय')
              : isBengali
              ? article.read_time.replace('min read', 'মিনিট পড়ার সময়')
              : isGerman
              ? article.read_time.replace('min read', 'Min. Lesezeit')
              : article.read_time;

            return (
              <article
                key={article.slug}
                onClick={() => onSelectArticle(article.slug)}
                className="bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 p-6 flex flex-col justify-between hover:shadow-lg hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all cursor-pointer group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-800/60">
                      <Building2 className="w-3 h-3" />
                      <span>
                        {isArticleRussia
                          ? `БИК: ${bankCode}`
                          : isArticleIndia
                          ? `IFSC: ${bankCode}`
                          : isArticleUSA
                          ? `ABA: ${bankCode}`
                          : isArticleUK
                          ? `Sort Code: ${bankCode}`
                          : isArticleGermany
                          ? `BLZ: ${bankCode}`
                          : isArticleCanada
                          ? `Inst. #${bankCode}`
                          : isArticleAustralia
                          ? `BSB: ${bankCode}`
                          : isArticleUAE
                          ? `CBUAE: ${bankCode}`
                          : isArticleSingapore
                          ? `MAS: ${bankCode}`
                          : `ব্যাংক কোড: ${bankCode}`}
                      </span>
                    </span>

                    <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
                      <Clock className="w-3 h-3" />
                      <span>{readTimeText}</span>
                    </span>
                  </div>

                  <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                    {title}
                  </h2>

                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                    {subtitle}
                  </p>

                  {/* Quick key highlights */}
                  <div className="pt-2 grid grid-cols-2 gap-2 text-[11px] bg-slate-50 dark:bg-slate-900/60 p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
                    <div>
                      <span className="text-slate-400 block">
                        {isRussian ? 'SWIFT / BIC:' : isHindi ? 'स्विफ्ट कोड:' : isGerman ? 'BIC / SWIFT:' : isBengali ? 'সুইফট কোড:' : 'SWIFT / BIC:'}
                      </span>
                      <span className="font-mono font-bold text-slate-800 dark:text-slate-200">{swift}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">
                        {isArticleRussia
                          ? 'БИК код:'
                          : isArticleIndia
                          ? isHindi
                            ? 'IFSC प्रीफिक्स:'
                            : 'IFSC Prefix:'
                          : isArticleUSA
                          ? 'ABA Routing:'
                          : isArticleUK
                          ? 'Sort Code:'
                          : isArticleGermany
                          ? 'Bankleitzahl:'
                          : isArticleCanada
                          ? 'Institution #:'
                          : isArticleAustralia
                          ? 'BSB Prefix:'
                          : isArticleUAE
                          ? 'CBUAE কোড:'
                          : isArticleSingapore
                          ? 'MAS কোড:'
                          : 'BEFTN কোড:'}
                      </span>
                      <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">{bankCode}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs font-semibold text-emerald-600 dark:text-emerald-400 group-hover:translate-x-1 transition-transform">
                  <span>
                    {isGerman
                      ? 'Vollständigen Artikel lesen →'
                      : isRussian
                      ? 'Читать статью целиком →'
                      : isHindi
                      ? 'पूरा लेख पढ़ें →'
                      : isBengali
                      ? 'সম্পূর্ণ আর্টিকেল পড়ুন →'
                      : 'Read Full Guide →'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </article>
            );
          })}
        </div>
      )}

      {/* Empty State Type 1: Country has no articles yet (e.g. Germany, UK, Canada, Australia, Singapore, UAE) */}
      {articlesToFilter.length === 0 && (
        <div className="bg-white dark:bg-slate-800 p-8 sm:p-12 rounded-3xl border border-slate-200/90 dark:border-slate-700/90 text-center space-y-6 shadow-sm">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 flex items-center justify-center text-amber-600 dark:text-amber-400">
            <BookOpen className="w-8 h-8" />
          </div>
          <div className="max-w-md mx-auto space-y-2">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              {isGerman
                ? 'Keine Artikel für dieses Land verfügbar'
                : isRussian
                ? 'Статьи для этой страны еще готовятся'
                : isHindi
                ? 'इस देश के लिए अभी कोई बैंकिंग लेख उपलब्ध नहीं है'
                : isBengali
                ? 'এই দেশের জন্য এখনও কোনো ব্যাংকিং আর্টিকেল প্রকাশিত হয়নি'
                : 'No banking guides published for this country yet'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {isGerman
                ? 'Für dieses Land wurden noch keine redaktionellen Leitfäden verfasst. Wählen Sie ein anderes Land aus oder erkunden Sie alle veröffentlichten Artikel.'
                : isRussian
                ? 'Для этого региона подробные статьи еще не опубликованы. Вы можете выбрать другую страну или просмотреть все доступные статьи.'
                : isHindi
                ? 'इस देश के लिए अभी विस्तृत बैंकिंग गाइड प्रकाशित नहीं हुए हैं। आप नीचे दिए गए अन्य देशों के लेख पढ़ सकते हैं या सभी देश देख सकते हैं।'
                : isBengali
                ? 'এই দেশের জন্য বিস্তারিত ব্যাংকিং গাইড শীঘ্রই যুক্ত করা হবে। আপনি নিচের তালিকা থেকে অন্য দেশ বা ভাষা নির্বাচন করে আর্টিকেল পড়তে পারেন।'
                : 'Editorial banking guides for this region will be added soon. You can explore available articles for USA, Bangladesh, India, Russia or view all countries.'}
            </p>
          </div>

          {/* Quick switcher buttons right inside empty state */}
          <div className="pt-2 max-w-2xl mx-auto">
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">
              {isGerman
                ? 'Verfügbare Länder & Artikel durchsuchen:'
                : isRussian
                ? 'Доступные статьи по странам:'
                : isHindi
                ? 'उपलब्ध देशों के लेख देखें:'
                : isBengali
                ? 'উপলব্ধ দেশগুলোর আর্টিকেল দেখুন:'
                : 'Browse Available Countries:'}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <button
                onClick={() => handleCountryClick('all')}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition-all shadow-xs cursor-pointer"
              >
                🌐 {isGerman ? `Alle Länder (${allBankArticles.length})` : isRussian ? `Все страны (${allBankArticles.length})` : isHindi ? `सभी देश (${allBankArticles.length})` : isBengali ? `সকল দেশ (${allBankArticles.length})` : `All Countries (${allBankArticles.length})`}
              </button>
              <button
                onClick={() => handleCountryClick('us')}
                className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-100 transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span>🇺🇸</span>
                <span>USA ({usaBanksArticles.length})</span>
              </button>
              <button
                onClick={() => handleCountryClick('bd')}
                className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-100 transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span>🇧🇩</span>
                <span>Bangladesh ({bdBanksArticles.length})</span>
              </button>
              <button
                onClick={() => handleCountryClick('in')}
                className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-100 transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span>🇮🇳</span>
                <span>India ({indiaBanksArticles.length})</span>
              </button>
              <button
                onClick={() => handleCountryClick('ru')}
                className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-100 transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span>🇷🇺</span>
                <span>Russia ({russianBanksArticles.length})</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Empty State Type 2: Search filter or category returned no results */}
      {articlesToFilter.length > 0 && filteredArticles.length === 0 && (
        <div className="bg-white dark:bg-slate-800 p-12 rounded-2xl border border-slate-200 dark:border-slate-700 text-center space-y-4">
          <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
          <div className="space-y-1">
            <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
              {isGerman ? 'Keine passenden Artikel gefunden' : isRussian ? 'Статьи не найдены' : isHindi ? 'कोई लेख नहीं मिला' : isBengali ? 'কোনো আর্টিকেল পাওয়া যায়নি' : 'No Articles Found'}
            </h3>
            <p className="text-xs text-slate-500">
              {isGerman
                ? 'Bitte versuchen Sie es mit einem anderen Suchbegriff oder setzen Sie die Filter zurück.'
                : isRussian
                ? 'Попробуйте изменить поисковый запрос или сбросить фильтры.'
                : isHindi
                ? 'कृपया किसी अन्य बैंक के नाम से खोजें या फ़िल्टर रीसेट करें।'
                : isBengali
                ? 'অনুগ্রহ করে অন্য কোনো ব্যাংকের নাম দিয়ে অনুসন্ধান করুন অথবা ফিল্টার রিসেট করুন।'
                : 'Please try searching with another bank name or clear active filters.'}
            </p>
          </div>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
            }}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{isGerman ? 'Filter zurücksetzen' : isRussian ? 'Сбросить фильтры' : isHindi ? 'फ़िल्टर रीसेट करें' : isBengali ? 'ফিল্টার রিসেট করুন' : 'Reset Filters'}</span>
          </button>
        </div>
      )}
    </div>
  );
};

