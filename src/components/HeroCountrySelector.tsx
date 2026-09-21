import React from 'react';
import { Globe2, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { Country, Language } from '../types';
import { translations } from '../lib/translations';

interface HeroCountrySelectorProps {
  country: Country;
  onSetCountry: (country: Country) => void;
  onSetLanguage?: (lang: Language) => void;
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
    badgeNative: 'ABA Routing'
  },
  {
    id: 'uk',
    flag: '🇬🇧',
    code: 'UK',
    nameEn: 'United Kingdom',
    nameNative: 'UK',
    badgeEn: 'Sort Codes & Faster Payments',
    badgeNative: 'Sort Code'
  },
  {
    id: 'ca',
    flag: '🇨🇦',
    code: 'CA',
    nameEn: 'Canada',
    nameNative: 'Canada',
    badgeEn: 'Transit & EFT Routing',
    badgeNative: 'Transit & EFT'
  },
  {
    id: 'au',
    flag: '🇦🇺',
    code: 'AU',
    nameEn: 'Australia',
    nameNative: 'Australia',
    badgeEn: 'BSB & APCA Direct Entry',
    badgeNative: 'BSB Code'
  },
  {
    id: 'ae',
    flag: '🇦🇪',
    code: 'AE',
    nameEn: 'United Arab Emirates',
    nameNative: 'UAE',
    badgeEn: 'CBUAE & Routing',
    badgeNative: 'CBUAE Routing'
  },
  {
    id: 'de',
    flag: '🇩🇪',
    code: 'DE',
    nameEn: 'Germany',
    nameNative: 'Germany',
    badgeEn: 'BLZ, IBAN & SEPA',
    badgeNative: 'BLZ & SEPA'
  },
  {
    id: 'sg',
    flag: '🇸🇬',
    code: 'SG',
    nameEn: 'Singapore',
    nameNative: 'Singapore',
    badgeEn: 'MEPS+, FAST & PayNow',
    badgeNative: 'MEPS+ & FAST'
  },
  {
    id: 'my',
    flag: '🇲🇾',
    code: 'MY',
    nameEn: 'Malaysia',
    nameNative: 'Malaysia',
    badgeEn: 'IBG, DuitNow & RENTAS',
    badgeNative: 'IBG & DuitNow'
  },
  {
    id: 'ru',
    flag: '🇷🇺',
    code: 'RU',
    nameEn: 'Russia',
    nameNative: 'Russia',
    badgeEn: 'BIK & SWIFT',
    badgeNative: 'BIK & SWIFT'
  },
  {
    id: 'bd',
    flag: '🇧🇩',
    code: 'BD',
    nameEn: 'Bangladesh',
    nameNative: 'Bangladesh',
    badgeEn: 'BEFTN & SWIFT',
    badgeNative: 'Routing & SWIFT'
  },
  {
    id: 'in',
    flag: '🇮🇳',
    code: 'IN',
    nameEn: 'India',
    nameNative: 'India',
    badgeEn: 'IFSC, MICR & SWIFT',
    badgeNative: 'IFSC & SWIFT'
  }
];

export const HeroCountrySelector: React.FC<HeroCountrySelectorProps> = ({
  country,
  onSetCountry,
  onSetLanguage
}) => {
  const handleTabClick = (tabId: Country) => {
    onSetCountry(tabId);
    if (onSetLanguage) {
      onSetLanguage('en');
    }
  };

  const getCountryBannerText = (c: Country): string => {
    switch (c) {
      case 'us':
        return 'Selected Country: United States (US Federal Reserve ABA Routing & SWIFT Directory)';
      case 'uk':
        return 'Selected Country: United Kingdom (Bank of England & FCA Sort Code Directory)';
      case 'ca':
        return 'Selected Country: Canada (Payments Canada ACSS Transit, Institution & EFT Routing Directory)';
      case 'au':
        return 'Selected Country: Australia (AusPayNet BSB Directory & SWIFT Codes)';
      case 'sg':
        return 'Selected Country: Singapore (Monetary Authority of Singapore MAS, MEPS+, FAST & PayNow Directory)';
      case 'my':
        return 'Selected Country: Malaysia (Bank Negara Malaysia BNM, IBG, DuitNow & SWIFT Directory)';
      case 'ae':
        return 'Selected Country: United Arab Emirates (CBUAE Routing & SWIFT Directory)';
      case 'de':
        return 'Selected Country: Germany (Deutsche Bundesbank BLZ, IBAN & SEPA Directory)';
      case 'ru':
        return 'Selected Country: Russia (Bank of Russia CBR BIK & SWIFT Directory)';
      case 'in':
        return 'Selected Country: India (RBI IFSC & SWIFT Directory)';
      case 'bd':
        return 'Selected Country: Bangladesh (Central Bank BEFTN Database)';
      default:
        return 'Global Banking Network: USA, UK, Canada, Australia, Germany & Asia';
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-2.5">
      {/* Active Country Status Banner */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-50/90 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border border-emerald-200/90 dark:border-emerald-800/80 shadow-2xs">
        <span className="flex h-2 w-2 relative shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600 dark:bg-emerald-400"></span>
        </span>
        <span className="font-semibold text-[11px] sm:text-xs">
          {getCountryBannerText(country)}
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
              onClick={() => handleTabClick(tab.id)}
              className={`relative flex-shrink-0 flex items-center justify-center gap-1.5 px-4 py-2 sm:py-2.5 rounded-xl transition-all duration-200 cursor-pointer text-center select-none snap-start min-w-[140px] sm:min-w-[160px] ${
                isActive
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm border border-slate-200/90 dark:border-slate-600 font-bold scale-[1.01]'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-700/50 font-medium'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <span className="text-base sm:text-lg leading-none">{tab.flag}</span>
                <span className="text-xs sm:text-sm font-bold tracking-tight whitespace-nowrap">
                  {tab.nameEn}
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
