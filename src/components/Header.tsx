import React from 'react';
import { Building2, Search, Hash, Globe, Database, ArrowRightLeft, ShieldCheck, Sun, Moon } from 'lucide-react';
import { Language } from '../types';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  lang: Language;
  onToggleLanguage: () => void;
    darkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onToggleLanguage,
    darkMode,
  onToggleDarkMode
}) => {
  const isBn = lang === 'bn';
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-slate-200/60 dark:border-slate-800/80 shadow-2xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 cursor-pointer group">
            <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center shadow-md shadow-emerald-600/20 group-hover:scale-105 transition-transform duration-200 overflow-hidden border border-slate-100 dark:border-slate-800">
              <img src="/logo.png" alt="World Bank Codes Logo" className="w-full h-full object-cover" onError={(e) => {
                // Fallback if logo not yet uploaded
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }} />
              <Building2 className="w-5 h-5 text-emerald-600 hidden" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg tracking-tight text-slate-900 dark:text-white leading-none">
                  World Bank Codes
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/60">
                  v2.0
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block mt-0.5 font-medium">
                {isBn ? 'গ্লোবাল ব্যাংক রাউটিং ও সুইফট কোড ডিরেক্টরি' : 'Global Bank Routing & SWIFT Codes Directory'}
              </p>
            </div>
          </Link>

          {/* Navigation Items */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5 bg-slate-100/70 dark:bg-slate-800/70 p-1 rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
            <Link
              to="/"
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                currentPath === '/'
                  ? 'bg-white dark:bg-slate-700 text-emerald-800 dark:text-emerald-300 shadow-xs border border-slate-200/80 dark:border-slate-600 font-bold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-700/50'
              }`}
            >
              <Search className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>{isBn ? 'খুঁজুন' : 'Search'}</span>
            </Link>

            <Link
              to="/banks"
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                currentPath.startsWith('/banks') || currentPath.startsWith('/bank/')
                  ? 'bg-white dark:bg-slate-700 text-emerald-800 dark:text-emerald-300 shadow-xs border border-slate-200/80 dark:border-slate-600 font-bold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-700/50'
              }`}
            >
              <Building2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>{isBn ? 'ব্যাংক সমূহ' : 'Banks'}</span>
            </Link>

            <Link
              to="/routing"
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                currentPath === '/routing' || currentPath.startsWith('/branch/')
                  ? 'bg-white dark:bg-slate-700 text-emerald-800 dark:text-emerald-300 shadow-xs border border-slate-200/80 dark:border-slate-600 font-bold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-700/50'
              }`}
            >
              <Hash className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>{isBn ? 'রাউটিং নম্বর' : 'Routing Numbers'}</span>
            </Link>

            <Link
              to="/swift"
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                currentPath === '/swift'
                  ? 'bg-white dark:bg-slate-700 text-emerald-800 dark:text-emerald-300 shadow-xs border border-slate-200/80 dark:border-slate-600 font-bold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-700/50'
              }`}
            >
              <Globe className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>{isBn ? 'সুইফট কোড' : 'SWIFT Codes'}</span>
            </Link>

            
          </nav>

          {/* Right actions: Dark mode + Language toggle + Status badge */}
          <div className="flex items-center space-x-2">
            

            {/* Dark Mode Toggle */}
            <button
              onClick={onToggleDarkMode}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-amber-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all cursor-pointer active:scale-95 border border-slate-200/60 dark:border-slate-700/60"
              title={darkMode ? (isBn ? 'লাইট মোড' : 'Light Mode') : (isBn ? 'ডার্ক মোড' : 'Dark Mode')}
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Language Switch Button */}
            <button
              onClick={onToggleLanguage}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 transition-all shadow-xs active:scale-95 cursor-pointer"
              title={isBn ? 'Switch to English' : 'বাংলায় পরিবর্তন করুন'}
            >
              <ArrowRightLeft className="w-3.5 h-3.5 text-emerald-400 dark:text-emerald-600" />
              <span>{isBn ? 'English' : 'বাংলা'}</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Bar */}
        <div className="md:hidden flex items-center justify-around py-2 border-t border-slate-100 dark:border-slate-800 text-xs">
          <Link
            to="/"
            className={`flex flex-col items-center py-1 px-2 rounded-xl transition-all ${
              currentPath === '/'
                ? 'text-emerald-700 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/60'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            <Search className="w-4 h-4" />
            <span className="text-[11px]">{isBn ? 'খুঁজুন' : 'Search'}</span>
          </Link>

          <Link
            to="/banks"
            className={`flex flex-col items-center py-1 px-2 rounded-xl transition-all ${
              currentPath.startsWith('/banks') || currentPath.startsWith('/bank/')
                ? 'text-emerald-700 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/60'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span className="text-[11px]">{isBn ? 'ব্যাংক' : 'Banks'}</span>
          </Link>

          <Link
            to="/routing"
            className={`flex flex-col items-center py-1 px-2 rounded-xl transition-all ${
              currentPath === '/routing' || currentPath.startsWith('/branch/')
                ? 'text-emerald-700 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/60'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            <Hash className="w-4 h-4" />
            <span className="text-[11px]">{isBn ? 'রাউটিং' : 'Routing'}</span>
          </Link>

          <Link
            to="/swift"
            className={`flex flex-col items-center py-1 px-2 rounded-xl transition-all ${
              currentPath === '/swift'
                ? 'text-emerald-700 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/60'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span className="text-[11px]">{isBn ? 'সুইফট' : 'SWIFT'}</span>
          </Link>

          
        </div>
      </div>
    </header>
  );
};
