import React, { useState } from 'react';
import { BookOpen, Search, Clock, ArrowRight, Building2, Sparkles, ChevronRight, Globe2 } from 'lucide-react';
import { Language, Country } from '../types';
import { allBankArticles } from '../lib/searchEngine';
import { bdBanksArticles } from '../data/bd/articles';
import { indiaBanksArticles } from '../data/india/articles';
import { russianBanksArticles } from '../data/russia/articles';

interface BlogPageProps {
  lang: Language;
  country: Country;
  onSelectArticle: (slug: string) => void;
  onNavigateHome: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({
  lang,
  country,
  onSelectArticle,
  onNavigateHome
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountryFilter, setSelectedCountryFilter] = useState<'all' | 'bd' | 'in' | 'ru'>('all');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'islamic' | 'state' | 'private' | 'foreign'>('all');

  const articlesToFilter = selectedCountryFilter === 'all'
    ? allBankArticles
    : selectedCountryFilter === 'bd'
    ? bdBanksArticles
    : selectedCountryFilter === 'in'
    ? indiaBanksArticles
    : russianBanksArticles;

  const isRussian = lang === 'ru';
  const isHindi = lang === 'hi';
  const isBengali = lang === 'bn';

  const filteredArticles = articlesToFilter.filter((article) => {
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
      (article.meta_keywords && article.meta_keywords.some(k => k.toLowerCase().includes(searchTerm.toLowerCase())));

    if (!matchesSearch) return false;

    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'islamic') {
      return article.overview_bn?.includes('ইসলামিক') || article.slug.includes('islami') || article.slug.includes('arafah') || article.slug.includes('social') || article.slug.includes('shahjalal') || article.slug.includes('exim') || article.slug.includes('union');
    }
    if (selectedCategory === 'state') {
      return article.slug.includes('sberbank') || article.slug.includes('vtb') || article.slug.includes('gazprom') || article.slug.includes('rosselkhoz') || article.slug.includes('psb') || article.slug.includes('sbi') || article.slug.includes('state-bank') || article.slug.includes('punjab') || article.slug.includes('baroda') || article.slug.includes('canara') || article.slug.includes('union-bank') || article.slug.includes('sonali') || article.slug.includes('janata') || article.slug.includes('agrani') || article.slug.includes('rupali') || article.slug.includes('basic') || article.slug.includes('krishi');
    }
    if (selectedCategory === 'foreign') {
      return article.slug.includes('raiffeisen') || article.slug.includes('standard-chartered') || article.slug.includes('hsbc') || article.slug.includes('citibank') || article.slug.includes('woori') || article.slug.includes('commercial-bank-of-ceylon') || article.slug.includes('habib');
    }
    if (selectedCategory === 'private') {
      return article.slug.includes('alfa') || article.slug.includes('tinkoff') || article.slug.includes('t-bank') || article.slug.includes('sovcom') || article.slug.includes('saint-petersburg') || article.slug.includes('uralsib') || article.slug.includes('hdfc') || article.slug.includes('icici') || article.slug.includes('axis') || article.slug.includes('kotak') || article.slug.includes('indusind') || article.slug.includes('yes-bank') || article.slug.includes('brac') || article.slug.includes('dutch-bangla') || article.slug.includes('city-bank') || article.slug.includes('prime');
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400">
        <button
          onClick={onNavigateHome}
          className="hover:text-emerald-600 dark:hover:text-emerald-400 cursor-pointer font-medium"
        >
          {isHindi ? 'होम' : isBengali ? 'হোম' : 'Home'}
        </button>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-slate-800 dark:text-slate-200 font-semibold">
          {isHindi ? 'बैंकिंग लेख एवं ब्लॉग' : isBengali ? 'ব্লগ ও ব্যাংকিং আর্টিকেল' : 'Blog & Banking Guides'}
        </span>
      </nav>

      {/* Header Banner */}
      <div className="bg-gradient-to-br from-emerald-900 via-slate-900 to-emerald-950 text-white p-8 sm:p-12 rounded-3xl shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>
              {isRussian ? 'Аналитический центр банковских реквизитов и руководств 2026' : isHindi ? 'अंतरराष्ट्रीय बैंकिंग ज्ञान केंद्र एवं सत्यापित गाइड 2026' : isBengali ? 'বাংলাদেশ ও আন্তর্জাতিক ব্যাংকিং নলেজ হাব ও সম্পূর্ণ আর্টিকেল' : 'Global Banking Knowledge Hub & Verified Guides'}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight text-white">
            {isRussian
              ? 'БИК коды, Корр. счета, ИНН, SWIFT и официальные банковские реквизиты банков РФ 2026'
              : isHindi
              ? 'भारतीय एवं वैश्विक बैंकों के IFSC कोड, स्विफ्ट कोड और संपूर्ण बैंकिंग गाइड 2026'
              : isBengali
              ? 'বাংলাদেশ ও ভারতের সকল ব্যাংকের রাউটিং নাম্বার, IFSC ও সুইফট কোড গাইড ২০২৬'
              : 'Complete Bank IFSC Codes, Routing Numbers & SWIFT BIC Guides 2026'}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {isRussian
              ? 'Официальные девятизначные БИК коды, двадцатизначные корреспондентские счета в Банке России, ИНН, КПП, переводы через СБП без комиссии, SWIFT реквизиты Сбербанка, ВТБ, Альфа-Банка, Т-Банка (Тинькофф) и всех банков РФ.'
              : isHindi
              ? 'भारतीय स्टेट बैंक (SBI), HDFC, ICICI, PNB सहित भारत और बांग्लादेश के सभी प्रमुख वाणिज्यिक व सरकारी बैंकों के 11-अंकीय आधिकारिक IFSC कोड, स्विफ्ट कोड, चेक बुक गाइड, NEFT/RTGS/IMPS फंड ट्रांसफर नियम।'
              : isBengali
              ? 'ইসলামী ব্যাংক, ডাচ-বাংলা, ব্র্যাক, সোনালী ব্যাংক এবং ভারতের এসবিআই, এইচডিএফসি সহ সকল তফসিলি ও বাণিজ্যিক ব্যাংকের প্রতিটি শাখার ৯-সংখ্যার BEFTN রাউটিং নাম্বার, ১১-ডিজিট IFSC, আন্তর্জাতিক সুইফট কোড ও পূর্ণাঙ্গ ব্যাংকিং সহায়িকা।'
              : 'Authoritative financial editorial guides for banks across Russia, India, Bangladesh and global financial corridors.'}
          </p>

          {/* Quick Filter Search inside Banner */}
          <div className="pt-2">
            <div className="relative max-w-xl">
              <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={isRussian ? 'Поиск банка или статьи (например: Сбер, ВТБ, Т-Банк, Альфа)...' : isHindi ? 'बैंक का नाम या आर्टिकल खोजें (जैसे: SBI, HDFC, PNB, ICICI)...' : isBengali ? 'ব্যাংকের নাম বা আর্টিকেল খুঁজুন (যেমন: ব্র্যাক, ডিবিবিএল, এসবিআই)...' : 'Search banking articles...'}
                className="w-full pl-11 pr-4 py-3 bg-white/10 dark:bg-slate-800/80 backdrop-blur-md border border-white/20 dark:border-slate-700 text-white placeholder-slate-400 text-sm rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-300 hover:text-white bg-white/20 px-2 py-0.5 rounded-md"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Country Filter Bar */}
      <div className="flex flex-wrap items-center gap-2 pt-2">
        <span className="text-xs font-bold text-slate-500 dark:text-slate-400 mr-1 flex items-center gap-1">
          <Globe2 className="w-3.5 h-3.5" />
          <span>{isRussian ? 'Страна:' : isHindi ? 'देश चुनें:' : isBengali ? 'দেশ ফিল্টার:' : 'Country:'}</span>
        </span>
        <button
          onClick={() => setSelectedCountryFilter('all')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
            selectedCountryFilter === 'all'
              ? 'bg-emerald-600 text-white shadow-xs'
              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50'
          }`}
        >
          {isRussian ? `Все страны (${allBankArticles.length})` : isHindi ? `सभी देश (${allBankArticles.length})` : isBengali ? `সকল দেশ (${allBankArticles.length})` : `All Countries (${allBankArticles.length})`}
        </button>
        <button
          onClick={() => setSelectedCountryFilter('ru')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
            selectedCountryFilter === 'ru'
              ? 'bg-emerald-600 text-white shadow-xs'
              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50'
          }`}
        >
          <span>🇷🇺</span>
          <span>{isRussian ? `Россия (${russianBanksArticles.length} статей)` : `Russia (${russianBanksArticles.length})`}</span>
        </button>
        <button
          onClick={() => setSelectedCountryFilter('in')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
            selectedCountryFilter === 'in'
              ? 'bg-emerald-600 text-white shadow-xs'
              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50'
          }`}
        >
          <span>🇮🇳</span>
          <span>{isHindi ? `भारत / India (${indiaBanksArticles.length} लेख)` : `India (${indiaBanksArticles.length})`}</span>
        </button>
        <button
          onClick={() => setSelectedCountryFilter('bd')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
            selectedCountryFilter === 'bd'
              ? 'bg-emerald-600 text-white shadow-xs'
              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50'
          }`}
        >
          <span>🇧🇩</span>
          <span>{isHindi ? `বাংলাদেশ / Bangladesh (${bdBanksArticles.length} लेख)` : isBengali ? `বাংলাদেশ (${bdBanksArticles.length}টি)` : `Bangladesh (${bdBanksArticles.length})`}</span>
        </button>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
            selectedCategory === 'all'
              ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 shadow-sm'
              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50'
          }`}
        >
          {isRussian ? 'Все категории' : isHindi ? 'सभी बैंक' : isBengali ? 'সকল ক্যাটাগরি' : 'All Types'}
        </button>
        <button
          onClick={() => setSelectedCategory('state')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
            selectedCategory === 'state'
              ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 shadow-sm'
              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50'
          }`}
        >
          {isRussian ? 'Системно значимые и государственные' : isHindi ? 'सार्वजनिक क्षेत्र के बैंक (Public Sector)' : isBengali ? 'রাষ্ট্রায়ত্ত ও বিশেষায়িত ব্যাংক' : 'Public / State-Owned'}
        </button>
        <button
          onClick={() => setSelectedCategory('private')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
            selectedCategory === 'private'
              ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 shadow-sm'
              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50'
          }`}
        >
          {isRussian ? 'Частные коммерческие банки' : isHindi ? 'निजी वाणिज्यिक बैंक (Private Sector)' : isBengali ? 'বেসরকারি বাণিজ্যিক ব্যাংক' : 'Private Sector'}
        </button>
        <button
          onClick={() => setSelectedCategory('islamic')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
            selectedCategory === 'islamic'
              ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 shadow-sm'
              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50'
          }`}
        >
          {isRussian ? 'Партнерский / Исламский банкинг' : isHindi ? 'इस्लामिक बैंकिंग (Islamic Banking)' : isBengali ? 'ইসলামিক ব্যাংকসমূহ' : 'Islamic Banking'}
        </button>
        <button
          onClick={() => setSelectedCategory('foreign')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
            selectedCategory === 'foreign'
              ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 shadow-sm'
              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50'
          }`}
        >
          {isRussian ? 'Иностранные банки' : isHindi ? 'विदेशी वाणिज्यिक बैंक (Foreign Banks)' : isBengali ? 'বিদেশি বাণিজ্যিক ব্যাংক' : 'Foreign Banks'}
        </button>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((article) => {
          const isArticleRussia = article.country === 'ru';
          const isArticleIndia = article.country === 'in';
          const isArticleBD = article.country === 'bd';

          const title = (isRussian || isArticleRussia) && article.title_ru
            ? article.title_ru
            : (isHindi || isArticleIndia) && article.title_hi
            ? article.title_hi
            : (isBengali || isArticleBD) && article.title_bn
            ? article.title_bn
            : article.title;

          const subtitle = (isRussian || isArticleRussia) && article.subtitle_ru
            ? article.subtitle_ru
            : (isHindi || isArticleIndia) && article.subtitle_hi
            ? article.subtitle_hi
            : (isBengali || isArticleBD) && article.subtitle_bn
            ? article.subtitle_bn
            : article.subtitle;

          const bankCode = article.quick_stats.find(s => s.label.includes('БИК') || s.label.includes('কোড') || s.label.includes('Code') || s.label.includes('प्रीफिक्स') || s.label.includes('Prefix'))?.value || '000';
          const swift = article.quick_stats.find(s => s.label.includes('SWIFT') || s.label.includes('свифт') || s.label.includes('সুইফট') || s.label.includes('स्विफ्ट'))?.value || 'SWIFT';

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
                    <span>{isArticleRussia ? `БИК: ${bankCode}` : isArticleIndia ? `IFSC: ${bankCode}` : `ব্যাংক কোড: ${bankCode}`}</span>
                  </span>

                  <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
                    <Clock className="w-3 h-3" />
                    <span>{article.read_time}</span>
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
                    <span className="text-slate-400 block">{isRussian ? 'SWIFT / BIC:' : isHindi ? 'स्विफ्ट कोड:' : 'সুইফট কোড:'}</span>
                    <span className="font-mono font-bold text-slate-800 dark:text-slate-200">{swift}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">{isArticleRussia ? 'БИК код:' : isArticleIndia ? (isHindi ? 'IFSC प्रीफिक्स:' : 'IFSC Prefix:') : 'BEFTN কোড:'}</span>
                    <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">{bankCode}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs font-semibold text-emerald-600 dark:text-emerald-400 group-hover:translate-x-1 transition-transform">
                <span>{isRussian ? 'Читать статью целиком →' : isHindi ? 'पूरा लेख पढ़ें →' : isBengali ? 'সম্পূর্ণ আর্টিকেল পড়ুন' : 'Read Full Guide →'}</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </article>
          );
        })}
      </div>

      {filteredArticles.length === 0 && (
        <div className="bg-white dark:bg-slate-800 p-12 rounded-2xl border border-slate-200 dark:border-slate-700 text-center space-y-3">
          <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
          <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
            {isHindi ? 'कोई लेख नहीं मिला' : 'কোনো আর্টিকেল পাওয়া যায়নি'}
          </h3>
          <p className="text-xs text-slate-500">
            {isHindi ? 'कृपया किसी अन्य बैंक के नाम से खोजें।' : 'অনুগ্রহ করে অন্য কোনো ব্যাংকের নাম দিয়ে অনুসন্ধান করুন।'}
          </p>
        </div>
      )}
    </div>
  );
};
