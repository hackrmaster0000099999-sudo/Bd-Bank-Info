import React, { useEffect, useRef } from 'react';
import { Search, X, Sparkles, Hash, Globe, Building2 } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../lib/translations';

interface UniversalSearchProps {
  query: string;
  onChangeQuery: (q: string) => void;
  searchType: 'all' | 'routing' | 'ifsc' | 'swift' | 'branch';
  onChangeSearchType: (type: any) => void;
  lang: Language;
  totalResultsCount: number;
}

export const UniversalSearch: React.FC<UniversalSearchProps> = ({
  query,
  onChangeQuery,
  searchType,
  onChangeSearchType,
  lang,
  totalResultsCount
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const t = translations[lang] || translations.en;

  // Keyboard shortcut '/' focus search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && document.activeElement !== inputRef.current) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const popularTags = [
    { label: 'SBIN0000001', type: 'ifsc' as const, note: 'SBI Mumbai' },
    { label: '044525225', type: 'routing' as const, note: 'Sberbank BIK' },
    { label: '125260123', type: 'routing' as const, note: 'IBBL Dhaka' },
    { label: 'SBININBB', type: 'swift' as const, note: 'SBI SWIFT' },
    { label: 'IBBLBDDH', type: 'swift' as const, note: 'IBBL SWIFT' },
    { label: 'SABRRU2P', type: 'swift' as const, note: 'Sberbank SWIFT' }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-3">
      {/* Search Input Box Container */}
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <div className="w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 transition-transform group-focus-within:scale-110">
            <Search className="h-4 w-4" />
          </div>
        </div>

        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => onChangeQuery(e.target.value)}
          placeholder={t.searchPlaceholder}
          className="block w-full pl-14 pr-24 py-4 text-slate-900 dark:text-white bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700 rounded-2xl shadow-sm hover:border-emerald-300 dark:hover:border-emerald-500 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 text-sm sm:text-base transition-all font-medium placeholder-slate-400 dark:placeholder-slate-500"
        />

        {/* Clear & Keyboard shortcut indicator */}
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center space-x-2">
          {query ? (
            <button
              onClick={() => onChangeQuery('')}
              className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
              aria-label="Clear search query"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 border border-slate-200 dark:border-slate-700 rounded-md text-[10px] font-mono font-semibold text-slate-400 bg-slate-50 dark:bg-slate-900">
              /
            </kbd>
          )}

          <div className="h-4 w-[1px] bg-slate-200 dark:bg-slate-700 hidden sm:block" />

          {/* Results Badge */}
          <span className="hidden sm:inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60">
            {totalResultsCount}
          </span>
        </div>
      </div>

      {/* Search Mode Toggles & Popular Tags */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-1 px-1">
        {/* Search Mode Chips */}
        <div className="flex flex-wrap items-center gap-1 bg-slate-200/60 dark:bg-slate-800 p-1 rounded-2xl text-xs max-w-full">
          <button
            onClick={() => onChangeSearchType('all')}
            className={`px-3 py-1.5 rounded-xl font-bold transition-all flex items-center gap-1.5 cursor-pointer text-xs ${
              searchType === 'all'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-2xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>{lang === 'hi' ? 'सभी' : lang === 'bn' ? 'সবগুলো' : lang === 'ru' ? 'Все' : 'All'}</span>
          </button>

          <button
            onClick={() => onChangeSearchType('ifsc')}
            className={`px-3 py-1.5 rounded-xl font-bold transition-all flex items-center gap-1.5 cursor-pointer text-xs ${
              searchType === 'ifsc'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-2xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Hash className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>{t.ifsc}</span>
          </button>

          <button
            onClick={() => onChangeSearchType('routing')}
            className={`px-3 py-1.5 rounded-xl font-bold transition-all flex items-center gap-1.5 cursor-pointer text-xs ${
              searchType === 'routing'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-2xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Hash className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>{t.routing}</span>
          </button>

          <button
            onClick={() => onChangeSearchType('swift')}
            className={`px-3 py-1.5 rounded-xl font-bold transition-all flex items-center gap-1.5 cursor-pointer text-xs ${
              searchType === 'swift'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-2xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Globe className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>{t.swift}</span>
          </button>
        </div>

        {/* Popular search quick pills */}
        <div className="hidden lg:flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
          <span className="font-semibold">{t.quickSearch}:</span>
          {popularTags.slice(0, 4).map((tag, idx) => (
            <button
              key={idx}
              onClick={() => {
                onChangeQuery(tag.label);
                onChangeSearchType(tag.type);
              }}
              className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/60 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors font-mono text-[11px] cursor-pointer"
            >
              {tag.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
