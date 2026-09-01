import React from 'react';
import { Globe2, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { Country, Language } from '../types';
import { translations } from '../lib/translations';

interface HeroCountrySelectorProps {
  country: Country;
  onSetCountry: (country: Country) => void;
  lang: Language;
}

interface CountryTab {
  id: Country;
  flag: string;
  code: string;
  nameEn: string;
  nameNative: string;
  badgeEn: string;
  badgeNative: string;
}

const COUNTRY_TABS: CountryTab[] = [
  {
    id: 'us',
    flag: '🇺🇸',
    code: 'US',
    nameEn: 'United States',
    nameNative: 'USA',
    badgeEn: 'ABA & ACH Routing',
    badgeNative: 'ABA রাউটিং'
  },
  {
    id: 'uk',
    flag: '🇬🇧',
    code: 'UK',
    nameEn: 'United Kingdom',
    nameNative: 'UK',
    badgeEn: 'Sort Codes & Faster Payments',
    badgeNative: 'সর্ট কোড ও SWIFT'
  },
  {
    id: 'ca',
    flag: '🇨🇦',
    code: 'CA',
    nameEn: 'Canada',
    nameNative: 'Canada',
    badgeEn: 'Transit & EFT Routing',
    badgeNative: 'ট্রানজিট ও EFT'
  },
  {
    id: 'ru',
    flag: '🇷🇺',
    code: 'RU',
    nameEn: 'Russia',
    nameNative: 'Россия',
    badgeEn: 'BIK & SWIFT',
    badgeNative: 'БИК и SWIFT'
  },
  {
    id: 'bd',
    flag: '🇧🇩',
    code: 'BD',
    nameEn: 'Bangladesh',
    nameNative: 'বাংলাদেশ',
    badgeEn: 'BEFTN & SWIFT',
    badgeNative: 'রাউটিং ও সুইফট'
  },
  {
    id: 'in',
    flag: '🇮🇳',
    code: 'IN',
    nameEn: 'India',
    nameNative: 'भारत',
    badgeEn: 'IFSC, MICR & SWIFT',
    badgeNative: 'IFSC ও সুইফট'
  }
];

export const HeroCountrySelector: React.FC<HeroCountrySelectorProps> = ({
  country,
  onSetCountry,
  lang
}) => {
  const t = translations[lang] || translations.en;

  return (
    <div className="w-full max-w-2xl mx-auto space-y-2.5">
      {/* Active Country Status Banner */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-50/90 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border border-emerald-200/90 dark:border-emerald-800/80 shadow-2xs">
        <span className="flex h-2 w-2 relative shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600 dark:bg-emerald-400"></span>
        </span>
        <span className="font-semibold text-[11px] sm:text-xs">
          {country === 'us'
            ? (lang === 'bn' ? 'নির্বাচিত দেশ: মার্কিন যুক্তরাষ্ট্র (ইউএস ফেডারেল রিজার্ভ ও ABA রাউটিং ডাটাবেজ)' : lang === 'hi' ? 'चयनित देश: संयुक्त राज्य अमेरिका (US Fed Reserve ABA Routing Database)' : lang === 'ru' ? 'Выбранная страна: США (ФРС США, ABA Routing и SWIFT)' : 'Selected Country: United States (US Federal Reserve ABA Routing & SWIFT Directory)')
            : country === 'uk'
            ? (lang === 'bn' ? 'নির্বাচিত দেশ: যুক্তরাজ্য (ব্যাংক অব ইংল্যান্ড ও FCA অনুমোদিত সর্ট কোড ডাটাবেজ)' : lang === 'hi' ? 'चयनित देश: यूनाइटेड किंगडम (Bank of England / FCA Sort Codes Database)' : lang === 'ru' ? 'Выбранная страна: Великобритания (Sort Codes, BACS & SWIFT)' : 'Selected Country: United Kingdom (Bank of England & FCA Sort Code Directory)')
            : country === 'ca'
            ? (lang === 'bn' ? 'নির্বাচিত দেশ: কানাডা (পেমেন্টস কানাডা ACSS, ট্রানজিট নম্বর ও EFT রাউটিং ডাটাবেজ)' : lang === 'hi' ? 'चयनित देश: कनाडा (Payments Canada ACSS, ट्रांजिट कोड व EFT राउटिंग)' : lang === 'ru' ? 'Выбранная страна: Канада (Payments Canada, Transit и EFT Routing)' : 'Selected Country: Canada (Payments Canada ACSS Transit, Institution & EFT Routing Directory)')
            : country === 'ru'
            ? (lang === 'ru' ? 'Выбранная страна: Россия (Банк России ЦБ РФ БИК, корр. счета и SWIFT)' : lang === 'bn' ? 'নির্বাচিত দেশ: রাশিয়া (সেন্ট্রাল ব্যাংক অব রাশিয়া BIK ডাটাবেজ)' : 'Selected Country: Russia (Bank of Russia CBR BIK & SWIFT Directory)')
            : country === 'in'
            ? (lang === 'hi' ? 'चयनित देश: भारत (RBI अधिकृत बैंक एवं IFSC डाटाबेस)' : lang === 'bn' ? 'নির্বাচিত দেশ: ভারত (আরবিআই অনুমোদিত IFSC ডাটাবেজ)' : 'Selected Country: India (RBI IFSC & SWIFT Directory)')
            : country === 'bd'
            ? (lang === 'bn' ? 'নির্বাচিত দেশ: বাংলাদেশ (বাংলাদেশ ব্যাংক অনুমোদিত BEFTN ডাটাবেজ)' : 'Selected Country: Bangladesh (Central Bank BEFTN Database)')
            : (lang === 'ru' ? 'Все страны: База реквизитов США, РФ, Индии и Бангладеш' : lang === 'hi' ? 'सभी देश: अमेरिका, भारत, रूस एवं बांग्लादेश के बैंक कोड' : lang === 'bn' ? 'বিশ্বের ব্যাংক সমূহের সকল কোড ও ব্রাঞ্চ ডিরেক্টরি' : 'Global Banking Network: USA, Russia, India & Bangladesh Central Directory')}
        </span>
      </div>

      {/* Interactive Pill Switcher (Scrollable) */}
      <div className="bg-slate-200/70 dark:bg-slate-800/90 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-xs flex flex-nowrap overflow-x-auto snap-x gap-1.5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {COUNTRY_TABS.map((tab) => {
          const isActive = country === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onSetCountry(tab.id)}
              className={`relative flex-shrink-0 flex items-center justify-center gap-1.5 px-4 py-2 sm:py-2.5 rounded-xl transition-all duration-200 cursor-pointer text-center select-none snap-start min-w-[140px] sm:min-w-[160px] ${
                isActive
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm border border-slate-200/90 dark:border-slate-600 font-bold scale-[1.01]'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-700/50 font-medium'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <span className="text-base sm:text-lg leading-none">{tab.flag}</span>
                <span className="text-xs sm:text-sm font-bold tracking-tight">
                  {lang === 'ru'
                    ? (tab.id === 'us' ? 'США' : tab.id === 'uk' ? 'Великобритания' : tab.id === 'ca' ? 'Канада' : tab.id === 'ru' ? 'Россия' : tab.id === 'in' ? 'Индия' : 'Бангладеш')
                    : lang === 'hi'
                    ? (tab.id === 'us' ? 'यू.एस.ए' : tab.id === 'uk' ? 'यूके' : tab.id === 'ca' ? 'कनाडा' : tab.id === 'ru' ? 'रूस' : tab.id === 'in' ? 'भारत' : 'बांग्लादेश')
                    : lang === 'bn'
                    ? (tab.id === 'us' ? 'যুক্তরাষ্ট্র' : tab.id === 'uk' ? 'যুক্তরাজ্য' : tab.id === 'ca' ? 'কানাডা' : tab.id === 'ru' ? 'রাশিয়া' : tab.id === 'in' ? 'ভারত' : 'বাংলাদেশ')
                    : tab.nameEn}
                </span>
              </div>

              <span
                className={`text-[10px] font-mono px-1.5 py-0.5 rounded-md hidden md:inline-block ${
                  isActive
                    ? 'bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 font-bold'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                }`}
              >
                {tab.code}
              </span>

              {isActive && (
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-white dark:ring-slate-700 sm:hidden" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
