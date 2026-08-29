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
          {country === 'ru'
            ? (lang === 'ru' ? 'Выбранная страна: Россия (Банк России ЦБ РФ БИК, корр. счета и SWIFT)' : lang === 'bn' ? 'নির্বাচিত দেশ: রাশিয়া (সেন্ট্রাল ব্যাংক অব রাশিয়া BIK ডাটাবেজ)' : 'Selected Country: Russia (Bank of Russia CBR BIK & SWIFT Directory)')
            : country === 'in'
            ? (lang === 'hi' ? 'चयनित देश: भारत (RBI अधिकृत बैंक एवं IFSC डाटाबेस)' : lang === 'bn' ? 'নির্বাচিত দেশ: ভারত (আরবিআই অনুমোদিত IFSC ডাটাবেজ)' : 'Selected Country: India (RBI IFSC & SWIFT Directory)')
            : country === 'bd'
            ? (lang === 'bn' ? 'নির্বাচিত দেশ: বাংলাদেশ (বাংলাদেশ ব্যাংক অনুমোদিত BEFTN ডাটাবেজ)' : 'Selected Country: Bangladesh (Central Bank BEFTN Database)')
            : (lang === 'ru' ? 'Все страны: Полная база реквизитов РФ, Индии и Бангладеш' : lang === 'hi' ? 'सभी देश: भारत, रूस एवं बांग्लादेश के संपूर्ण बैंक कोड' : lang === 'bn' ? 'বিশ্বের ব্যাংক সমূহের সকল কোড ও ব্রাঞ্চ ডিরেক্টরি' : 'Global Banking Network: Russia, India & Bangladesh Central Directory')}
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
                    ? (tab.id === 'ru' ? 'Россия' : tab.id === 'in' ? 'Индия' : 'Бангладеш')
                    : lang === 'hi'
                    ? (tab.id === 'ru' ? 'रूस' : tab.id === 'in' ? 'भारत' : 'बांग्लादेश')
                    : lang === 'bn'
                    ? (tab.id === 'ru' ? 'রাশিয়া' : tab.id === 'in' ? 'ভারত' : 'বাংলাদেশ')
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
