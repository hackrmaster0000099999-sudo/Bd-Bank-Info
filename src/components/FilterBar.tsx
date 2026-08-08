import React from 'react';
import { Filter, RotateCcw, ChevronDown } from 'lucide-react';
import { FilterState, Language } from '../types';
import { getBanks, getDivisions, getDistricts } from '../lib/searchEngine';

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
  lang
}) => {
  const isBn = lang === 'bn';
  const banks = getBanks();
  const divisions = getDivisions();
  const districts = getDistricts(filters.division !== 'all' ? filters.division : undefined);

  const activeFiltersCount =
    (filters.bankId !== 'all' ? 1 : 0) +
    (filters.division !== 'all' ? 1 : 0) +
    (filters.district !== 'all' ? 1 : 0);

  return (
    <div className="bg-white dark:bg-slate-800/90 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <Filter className="w-3.5 h-3.5" />
          </div>
          <span className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
            {isBn ? 'ফিল্টার করুন (Bank → Division → District)' : 'Filters (Bank → Division → District)'}
          </span>
          {activeFiltersCount > 0 && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/60">
              {activeFiltersCount} {isBn ? 'সক্রিয়' : 'active'}
            </span>
          )}
        </div>

        {activeFiltersCount > 0 && (
          <button
            onClick={onResetFilters}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-emerald-700 dark:hover:text-emerald-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{isBn ? 'রিসেট' : 'Reset'}</span>
          </button>
        )}
      </div>

      {/* Dropdowns */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
        {/* Bank Dropdown */}
        <div className="relative">
          <select
            value={filters.bankId}
            onChange={(e) => onChangeFilter('bankId', e.target.value)}
            className="w-full pl-3.5 pr-8 py-2.5 text-xs font-semibold bg-slate-50/80 dark:bg-slate-700/60 border border-slate-200/80 dark:border-slate-600/80 rounded-xl text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 dark:focus:bg-slate-700 appearance-none cursor-pointer transition-all"
          >
            <option value="all" className="dark:bg-slate-800">{isBn ? 'সকল ব্যাংক (All Banks)' : 'All Banks'}</option>
            {banks.map((b) => (
              <option key={b.id} value={b.id} className="dark:bg-slate-800">
                {isBn ? b.name_bn : b.name} ({b.short_name})
              </option>
            ))}
          </select>
          <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3 pointer-events-none" />
        </div>

        {/* Division Dropdown */}
        <div className="relative">
          <select
            value={filters.division}
            onChange={(e) => {
              onChangeFilter('division', e.target.value);
              onChangeFilter('district', 'all'); // Reset district on division change
            }}
            className="w-full pl-3.5 pr-8 py-2.5 text-xs font-semibold bg-slate-50/80 dark:bg-slate-700/60 border border-slate-200/80 dark:border-slate-600/80 rounded-xl text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 dark:focus:bg-slate-700 appearance-none cursor-pointer transition-all"
          >
            <option value="all" className="dark:bg-slate-800">{isBn ? 'সকল বিভাগ (All Divisions)' : 'All Divisions'}</option>
            {divisions.map((d) => (
              <option key={d.en} value={d.en} className="dark:bg-slate-800">
                {isBn ? d.bn : d.en}
              </option>
            ))}
          </select>
          <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3 pointer-events-none" />
        </div>

        {/* District Dropdown */}
        <div className="relative">
          <select
            value={filters.district}
            onChange={(e) => onChangeFilter('district', e.target.value)}
            className="w-full pl-3.5 pr-8 py-2.5 text-xs font-semibold bg-slate-50/80 dark:bg-slate-700/60 border border-slate-200/80 dark:border-slate-600/80 rounded-xl text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 dark:focus:bg-slate-700 appearance-none cursor-pointer transition-all"
          >
            <option value="all" className="dark:bg-slate-800">{isBn ? 'সকল জেলা (All Districts)' : 'All Districts'}</option>
            {districts.map((dst) => (
              <option key={dst.en} value={dst.en} className="dark:bg-slate-800">
                {isBn ? dst.bn : dst.en}
              </option>
            ))}
          </select>
          <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3 pointer-events-none" />
        </div>
      </div>
    </div>
  );
};
