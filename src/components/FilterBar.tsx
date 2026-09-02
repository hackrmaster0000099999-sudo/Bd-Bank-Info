import React from 'react';
import { Filter, RotateCcw, ChevronDown, Globe } from 'lucide-react';
import { FilterState, Language, Country } from '../types';
import { getBanks, getDivisions, getDistricts } from '../lib/searchEngine';
import { translations } from '../lib/translations';

interface FilterBarProps {
  filters: FilterState;
  onChangeFilter: (key: keyof FilterState, value: string) => void;
  onResetFilters: () => void;
  lang: Language;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  onChangeFilter,
  onResetFilters,
  lang,
}) => {
  const t = translations[lang] || translations.en;
  const banks = getBanks(filters.country);
  const divisions = getDivisions(filters.country);
  const districts = getDistricts(filters.division !== 'all' ? filters.division : undefined, filters.country);

  const activeFiltersCount =
    (filters.country !== 'all' ? 1 : 0) +
    (filters.bankId !== 'all' ? 1 : 0) +
    (filters.division !== 'all' ? 1 : 0) +
    (filters.district !== 'all' ? 1 : 0);

  return (
    <div className="bg-white dark:bg-slate-800/90 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2 min-w-0">
          <div className="w-6 h-6 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
            <Filter className="w-3.5 h-3.5" />
          </div>
          <span className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
            {t.filterBy} ({t.country} → {t.banks} → {t.divisionState} → {t.districtCity})
          </span>
          {activeFiltersCount > 0 && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/60 whitespace-nowrap shrink-0">
              {activeFiltersCount} {t.active}
            </span>
          )}
        </div>

        {activeFiltersCount > 0 && (
          <button
            onClick={onResetFilters}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-emerald-700 dark:hover:text-emerald-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer whitespace-nowrap shrink-0 ml-auto sm:ml-0"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{t.reset}</span>
          </button>
        )}
      </div>

      {/* 4 Dropdowns: Country, Bank, State/Division, District/City */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
        {/* Country Dropdown */}
        <div className="relative">
          <label htmlFor="filter-country-select" className="sr-only">{t.allCountries}</label>
          <select
            id="filter-country-select"
            aria-label={t.allCountries}
            value={filters.country}
            onChange={(e) => {
              onChangeFilter('country', e.target.value);
              onChangeFilter('bankId', 'all');
              onChangeFilter('division', 'all');
              onChangeFilter('district', 'all');
            }}
            className="w-full pl-3.5 pr-8 py-2.5 text-xs font-bold bg-emerald-50/70 dark:bg-slate-700/80 border border-emerald-200/70 dark:border-slate-600 rounded-xl text-emerald-950 dark:text-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 appearance-none cursor-pointer transition-all"
          >
            <option value="all" className="dark:bg-slate-800">🌐 {t.allCountries}</option>
            <option value="us" className="dark:bg-slate-800">🇺🇸 {t.usa}</option>
            <option value="uk" className="dark:bg-slate-800">🇬🇧 {t.uk}</option>
            <option value="ca" className="dark:bg-slate-800">🇨🇦 {t.canada}</option>
            <option value="au" className="dark:bg-slate-800">🇦🇺 {t.australia}</option>
            <option value="ae" className="dark:bg-slate-800">🇦🇪 {t.uae || 'United Arab Emirates'}</option>
            <option value="ru" className="dark:bg-slate-800">🇷🇺 {t.russia}</option>
            <option value="in" className="dark:bg-slate-800">🇮🇳 {t.india}</option>
            <option value="bd" className="dark:bg-slate-800">🇧🇩 {t.bangladesh}</option>
          </select>
          <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3 pointer-events-none" />
        </div>

        {/* Bank Dropdown */}
        <div className="relative">
          <label htmlFor="filter-bank-select" className="sr-only">{t.allBanks}</label>
          <select
            id="filter-bank-select"
            aria-label={t.allBanks}
            value={filters.bankId}
            onChange={(e) => onChangeFilter('bankId', e.target.value)}
            className="w-full pl-3.5 pr-8 py-2.5 text-xs font-semibold bg-slate-50/80 dark:bg-slate-700/60 border border-slate-200/80 dark:border-slate-600/80 rounded-xl text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 dark:focus:bg-slate-700 appearance-none cursor-pointer transition-all"
          >
            <option value="all" className="dark:bg-slate-800">{t.allBanks}</option>
            {banks.map((b) => (
              <option key={b.id} value={b.id} className="dark:bg-slate-800">
                {lang === 'hi' && b.name_hi ? b.name_hi : lang === 'bn' && b.name_bn ? b.name_bn : b.name} ({b.short_name})
              </option>
            ))}
          </select>
          <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3 pointer-events-none" />
        </div>

        {/* Division/State Dropdown */}
        <div className="relative">
          <label htmlFor="filter-division-select" className="sr-only">{t.allDivisions}</label>
          <select
            id="filter-division-select"
            aria-label={t.allDivisions}
            value={filters.division}
            onChange={(e) => {
              onChangeFilter('division', e.target.value);
              onChangeFilter('district', 'all'); // Reset district on division change
            }}
            className="w-full pl-3.5 pr-8 py-2.5 text-xs font-semibold bg-slate-50/80 dark:bg-slate-700/60 border border-slate-200/80 dark:border-slate-600/80 rounded-xl text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 dark:focus:bg-slate-700 appearance-none cursor-pointer transition-all"
          >
            <option value="all" className="dark:bg-slate-800">{t.allDivisions}</option>
            {divisions.map((d) => (
              <option key={d.en} value={d.en} className="dark:bg-slate-800">
                {lang === 'hi' && d.hi ? d.hi : lang === 'bn' ? d.bn : d.en}
              </option>
            ))}
          </select>
          <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3 pointer-events-none" />
        </div>

        {/* District/City Dropdown */}
        <div className="relative">
          <label htmlFor="filter-district-select" className="sr-only">{t.allDistricts}</label>
          <select
            id="filter-district-select"
            aria-label={t.allDistricts}
            value={filters.district}
            onChange={(e) => onChangeFilter('district', e.target.value)}
            className="w-full pl-3.5 pr-8 py-2.5 text-xs font-semibold bg-slate-50/80 dark:bg-slate-700/60 border border-slate-200/80 dark:border-slate-600/80 rounded-xl text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 dark:focus:bg-slate-700 appearance-none cursor-pointer transition-all"
          >
            <option value="all" className="dark:bg-slate-800">{t.allDistricts}</option>
            {districts.map((dst) => (
              <option key={dst.en} value={dst.en} className="dark:bg-slate-800">
                {lang === 'hi' && dst.hi ? dst.hi : lang === 'bn' ? dst.bn : dst.en}
              </option>
            ))}
          </select>
          <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3 pointer-events-none" />
        </div>
      </div>
    </div>
  );
};
