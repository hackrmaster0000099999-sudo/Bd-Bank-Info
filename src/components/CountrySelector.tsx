import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check, Globe2 } from 'lucide-react';
import { Country, Language } from '../types';

interface CountrySelectorProps {
  country: Country;
  onSetCountry: (country: Country) => void;
  onSetLanguage?: (lang: Language) => void;
  lang: Language;
}

interface CountryOption {
  code: Country;
  flag: string;
  shortCode: string;
  name: string;
  nameNative: string;
  defaultLang: Language;
}

const COUNTRIES: CountryOption[] = [
  {
    code: 'all',
    flag: '🌐',
    shortCode: 'ALL',
    name: 'All Countries',
    nameNative: 'সমস্ত দেশ / सभी देश',
    defaultLang: 'en'
  },
  {
    code: 'bd',
    flag: '🇧🇩',
    shortCode: 'BD',
    name: 'Bangladesh',
    nameNative: 'বাংলাদেশ',
    defaultLang: 'bn'
  },
  {
    code: 'in',
    flag: '🇮🇳',
    shortCode: 'IN',
    name: 'India',
    nameNative: 'भारत',
    defaultLang: 'hi'
  }
];

export const CountrySelector: React.FC<CountrySelectorProps> = ({
  country,
  onSetCountry,
  onSetLanguage,
  lang
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentOption = COUNTRIES.find((c) => c.code === country) || COUNTRIES[0];

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleSelect = (option: CountryOption) => {
    onSetCountry(option.code);
    if (onSetLanguage) {
      onSetLanguage(option.defaultLang);
    }
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button: Flag + 2-Letter Code + Chevron */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-800 dark:hover:bg-slate-700/90 text-slate-800 dark:text-slate-100 border border-slate-200/80 dark:border-slate-700/80 transition-all cursor-pointer shadow-2xs focus:outline-none focus:ring-2 focus:ring-emerald-500/30 active:scale-95"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        title="Select Country / দেশ নির্বাচন করুন"
      >
        <span className="text-sm leading-none">{currentOption.flag}</span>
        <span className="tracking-wider uppercase font-mono font-bold text-xs">{currentOption.shortCode}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-slate-500 dark:text-slate-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-emerald-600 dark:text-emerald-400' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-56 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200/90 dark:border-slate-700/90 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150"
          role="listbox"
        >
          <div className="px-3 py-1.5 border-b border-slate-100 dark:border-slate-700/60 mb-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 block">
              {lang === 'hi' ? 'देश चुनें' : lang === 'bn' ? 'দেশ নির্বাচন করুন' : 'Select Country'}
            </span>
          </div>

          <div className="space-y-0.5 px-1">
            {COUNTRIES.map((option) => {
              const isSelected = option.code === country;
              return (
                <button
                  key={option.code}
                  type="button"
                  onClick={() => handleSelect(option)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left text-xs transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-bold'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700/60 font-medium'
                  }`}
                  role="option"
                  aria-selected={isSelected}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="text-base leading-none">{option.flag}</span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono font-bold text-xs">{option.shortCode}</span>
                        <span className="text-slate-400 dark:text-slate-500">•</span>
                        <span className="truncate text-xs">{option.name}</span>
                      </div>
                      <span className="text-[10px] text-slate-400 dark:text-slate-400 block truncate">
                        {option.nameNative}
                      </span>
                    </div>
                  </div>
                  {isSelected && (
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 ml-2" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
