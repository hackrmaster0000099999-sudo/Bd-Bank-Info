import React from 'react';
import { Building2, Search, Hash, Globe, Sun, Moon } from 'lucide-react';
import { Language, Country } from '../types';
import { Link, useLocation } from 'react-router-dom';
import { translations } from '../lib/translations';
import { CountrySelector } from './CountrySelector';

interface HeaderProps {
  lang: Language;
  onSetLanguage: (lang: Language) => void;
  country: Country;
  onSetCountry: (country: Country) => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onSetLanguage,
  country,
  onSetCountry,
  darkMode,
  onToggleDarkMode,
}) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const t = translations[lang] || translations.en;

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200/70 dark:border-slate-800 shadow-2xs transition-colors">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo on Left */}
          <Link to="/" className="flex items-center cursor-pointer group shrink-0 py-1" id="header-logo-link">
            <div className="flex items-center justify-start group-hover:opacity-95 transition-opacity">
              <img
                src="/logo.png"
                alt="World Bank Codes"
                className="h-10 sm:h-12 md:h-14 w-auto max-w-[200px] sm:max-w-[280px] md:max-w-[340px] object-contain drop-shadow-2xs"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement?.querySelector('.fallback-brand-text')?.classList.remove('hidden');
                }}
              />
              <div className="fallback-brand-text hidden flex items-center space-x-2.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md shadow-emerald-600/30">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 dark:text-white leading-tight">
                  World Bank Codes
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5 bg-slate-100/80 dark:bg-slate-800/80 p-1 rounded-2xl border border-slate-200/60 dark:border-slate-700/60">
            <Link
              to="/"
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                currentPath === '/'
                  ? 'bg-white dark:bg-slate-700 text-emerald-800 dark:text-emerald-300 shadow-2xs border border-slate-200/80 dark:border-slate-600 font-bold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-700/50'
              }`}
            >
              <Search className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>{t.search}</span>
            </Link>

            <Link
              to="/banks"
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                currentPath.startsWith('/banks') || currentPath.startsWith('/bank/')
                  ? 'bg-white dark:bg-slate-700 text-emerald-800 dark:text-emerald-300 shadow-2xs border border-slate-200/80 dark:border-slate-600 font-bold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-700/50'
              }`}
            >
              <Building2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>{t.banks}</span>
            </Link>

            <Link
              to="/routing"
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                currentPath === '/routing' || currentPath.startsWith('/branch/')
                  ? 'bg-white dark:bg-slate-700 text-emerald-800 dark:text-emerald-300 shadow-2xs border border-slate-200/80 dark:border-slate-600 font-bold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-700/50'
              }`}
            >
              <Hash className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>{country === 'in' ? t.ifsc : t.routing}</span>
            </Link>

            <Link
              to="/swift"
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                currentPath === '/swift'
                  ? 'bg-white dark:bg-slate-700 text-emerald-800 dark:text-emerald-300 shadow-2xs border border-slate-200/80 dark:border-slate-600 font-bold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-700/50'
              }`}
            >
              <Globe className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>{t.swift}</span>
            </Link>
          </nav>

          {/* Right actions: ONLY Country Selector (Flag + Code) & Dark Mode Toggle */}
          <div className="flex items-center space-x-2.5 sm:space-x-3.5 pl-2 pr-0.5 sm:pr-2">
            {/* Country Selector with Flag and 2-Letter Code */}
            <CountrySelector
              country={country}
              onSetCountry={onSetCountry}
              onSetLanguage={onSetLanguage}
              lang={lang}
            />

            {/* Dark Mode Toggle */}
            <button
              onClick={onToggleDarkMode}
              className="p-2 sm:p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-amber-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all cursor-pointer active:scale-95 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs"
              title={darkMode ? 'Light Mode' : 'Dark Mode'}
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Bar */}
        <div className="md:hidden flex items-center justify-around py-1.5 border-t border-slate-100 dark:border-slate-800 text-xs gap-1">
          <Link
            to="/"
            className={`flex flex-col items-center py-1 px-2.5 rounded-xl transition-all min-w-0 ${
              currentPath === '/'
                ? 'text-emerald-700 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/60'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            <Search className="w-4 h-4 shrink-0" />
            <span className="text-[11px] truncate whitespace-nowrap">{t.search}</span>
          </Link>

          <Link
            to="/banks"
            className={`flex flex-col items-center py-1 px-2.5 rounded-xl transition-all min-w-0 ${
              currentPath.startsWith('/banks') || currentPath.startsWith('/bank/')
                ? 'text-emerald-700 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/60'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            <Building2 className="w-4 h-4 shrink-0" />
            <span className="text-[11px] truncate whitespace-nowrap">{t.banks}</span>
          </Link>

          <Link
            to="/routing"
            className={`flex flex-col items-center py-1 px-2.5 rounded-xl transition-all min-w-0 ${
              currentPath === '/routing' || currentPath.startsWith('/branch/')
                ? 'text-emerald-700 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/60'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            <Hash className="w-4 h-4 shrink-0" />
            <span className="text-[11px] truncate whitespace-nowrap">{country === 'in' ? t.ifsc : t.routing}</span>
          </Link>

          <Link
            to="/swift"
            className={`flex flex-col items-center py-1 px-2.5 rounded-xl transition-all min-w-0 ${
              currentPath === '/swift'
                ? 'text-emerald-700 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/60'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            <Globe className="w-4 h-4 shrink-0" />
            <span className="text-[11px] truncate whitespace-nowrap">{t.swift}</span>
          </Link>
        </div>
      </div>
    </header>
  );
};
