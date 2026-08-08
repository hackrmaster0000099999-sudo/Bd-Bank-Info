import React, { useState } from 'react';
import { Building2, Globe, MapPin, Search, ArrowLeft, ExternalLink, Hash, Filter } from 'lucide-react';
import { Bank, Branch, Language } from '../types';
import { getBranchesForBank } from '../lib/searchEngine';
import { BranchCard } from './BranchCard';
import { CopyButton } from './CopyButton';

interface BankDetailsViewProps {
  bank: Bank;
  lang: Language;
  onBack: () => void;
  onSelectBranch: (branch: Branch) => void;
  onOpenRoutingDecoder: (routing: string) => void;
  onOpenReportModal: (branch: Branch) => void;
}

export const BankDetailsView: React.FC<BankDetailsViewProps> = ({
  bank,
  lang,
  onBack,
  onSelectBranch,
  onOpenRoutingDecoder,
  onOpenReportModal
}) => {
  const [bankBranchQuery, setBankBranchQuery] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('all');

  const isBn = lang === 'bn';
  const allBranches = getBranchesForBank(bank.id);

  // Extract districts for this bank
  const districts = Array.from(new Set(allBranches.map((b) => b.district)));

  // Filter branches
  const filteredBranches = allBranches.filter((br) => {
    const matchesDistrict = selectedDistrict === 'all' || br.district === selectedDistrict;
    const matchesQuery =
      !bankBranchQuery ||
      br.name.toLowerCase().includes(bankBranchQuery.toLowerCase()) ||
      br.name_bn.includes(bankBranchQuery) ||
      br.routing_number.includes(bankBranchQuery) ||
      (br.swift_code && br.swift_code.toLowerCase().includes(bankBranchQuery.toLowerCase()));

    return matchesDistrict && matchesQuery;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 transition-colors shadow-xs cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4 text-emerald-600" />
        <span>{isBn ? 'পূর্ববর্তী পাতায় ফিরে যান' : 'Back to Bank List'}</span>
      </button>

      {/* Main Bank Header Banner */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              {bank.type || 'Commercial Bank'}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-white/10 text-slate-200 border border-white/10">
              Bank Code: {bank.bank_code}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              {bank.branch_count} {isBn ? 'টি শাখা' : 'Branches Total'}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {isBn ? bank.name_bn : bank.name}
          </h1>
          <p className="text-sm text-slate-300 font-medium">{isBn ? bank.name : bank.name_bn}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-700/80 text-xs">
            {/* SWIFT Box */}
            <div className="bg-white/5 backdrop-blur-xs p-3.5 rounded-xl border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-slate-400 font-medium block">
                  {isBn ? 'হেড অফিস সুইফট/BIC কোড:' : 'Head Office SWIFT Code:'}
                </span>
                <span className="font-mono text-base font-bold text-white tracking-wider">
                  {bank.swift_code}
                </span>
              </div>
              <CopyButton textToCopy={bank.swift_code} size="md" lang={lang} />
            </div>

            {/* Address & Official Site */}
            <div className="bg-white/5 backdrop-blur-xs p-3.5 rounded-xl border border-white/10 space-y-1.5">
              <div className="flex items-start space-x-1.5 text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{isBn ? bank.head_office_bn : bank.head_office}</span>
              </div>
              {bank.website && (
                <a
                  href={bank.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold underline underline-offset-2 pt-1"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>{isBn ? 'অফিসিয়াল ওয়েবসাইট' : 'Official Website'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Branch Search and Filter Toolbar */}
      <div className="bg-white dark:bg-slate-800/90 p-4 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-xs space-y-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Building2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <span>
              {isBn
                ? `${bank.short_name}-এর সকল শাখার তালিকা (${filteredBranches.length})`
                : `${bank.short_name} Branches & Routing Directory (${filteredBranches.length})`}
            </span>
          </h2>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            {/* District Filter Dropdown */}
            <div className="relative w-full sm:w-48">
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="w-full pl-3 pr-8 py-2 text-xs font-medium bg-slate-50 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600/80 rounded-lg text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
              >
                <option value="all" className="dark:bg-slate-800">{isBn ? 'সকল জেলা (All Districts)' : 'All Districts'}</option>
                {districts.map((d) => (
                  <option key={d} value={d} className="dark:bg-slate-800">
                    {d}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Bank Specific Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            value={bankBranchQuery}
            onChange={(e) => setBankBranchQuery(e.target.value)}
            placeholder={
              isBn
                ? 'এই ব্যাংকের শাখা বা রাউটিং নম্বর লিখুন (যেমন গুলশান / ১২৫২৬০১২৩)...'
                : 'Search within this bank by branch name or routing number...'
            }
            className="w-full pl-9 pr-4 py-2.5 text-xs bg-slate-50 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500"
          />
        </div>
      </div>

      {/* Branch Grid */}
      {filteredBranches.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredBranches.map((br) => (
            <BranchCard
              key={br.id}
              branch={br}
              lang={lang}
              onSelectBranch={onSelectBranch}
              onOpenRoutingDecoder={onOpenRoutingDecoder}
              onOpenReportModal={onOpenReportModal}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white dark:bg-slate-800/90 p-8 rounded-2xl border border-slate-200 dark:border-slate-700/80 text-center space-y-2">
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            {isBn ? 'কোনো শাখা পাওয়া যায়নি।' : 'No branches found matching your filter.'}
          </p>
          <button
            onClick={() => {
              setBankBranchQuery('');
              setSelectedDistrict('all');
            }}
            className="text-xs text-emerald-700 dark:text-emerald-400 font-bold underline cursor-pointer"
          >
            {isBn ? 'ফিল্টার রিসেট করুন' : 'Reset Filters'}
          </button>
        </div>
      )}
    </div>
  );
};
