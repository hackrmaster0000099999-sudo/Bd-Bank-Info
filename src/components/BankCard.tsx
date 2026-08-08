import React from 'react';
import { Building2, Globe, MapPin, ChevronRight, Hash } from 'lucide-react';
import { Bank, Language } from '../types';
import { CopyButton } from './CopyButton';

interface BankCardProps {
  bank: Bank;
  lang: Language;
  onSelectBank: (bankId: string) => void;
}

export const BankCard: React.FC<BankCardProps> = ({ bank, lang, onSelectBank }) => {
  const isBn = lang === 'bn';

  return (
    <div
      onClick={() => onSelectBank(bank.id)}
      className="bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 p-5 shadow-xs hover:shadow-lg hover:shadow-emerald-900/5 dark:hover:shadow-black/20 hover:border-emerald-300 dark:hover:border-emerald-500 transition-all duration-200 group flex flex-col justify-between cursor-pointer"
    >
      <div>
        {/* Top Header Badge & Bank Code */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center space-x-3">
            <div className="w-11 h-11 rounded-2xl bg-emerald-50 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 font-extrabold flex items-center justify-center text-xs border border-emerald-100 dark:border-emerald-800 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-2xs">
              {bank.short_name.substring(0, 4)}
            </div>
            <div>
              <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                {bank.type || 'Bank'}
              </span>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                Bank Code: <span className="font-bold text-slate-800 dark:text-slate-200">{bank.bank_code}</span>
              </div>
            </div>
          </div>

          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60">
            <Building2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>{bank.branch_count} {isBn ? 'শাখা' : 'Branches'}</span>
          </span>
        </div>

        {/* Bank Title */}
        <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
          {isBn ? bank.name_bn : bank.name}
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-3.5 line-clamp-1">
          {isBn ? bank.name : bank.name_bn}
        </p>

        {/* Metadata Details */}
        <div className="space-y-2 py-3 border-t border-slate-100 dark:border-slate-700/60 text-xs">
          {/* SWIFT Code */}
          <div className="flex items-center justify-between bg-slate-50/90 dark:bg-slate-700/40 p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
            <div className="flex items-center space-x-1.5 text-slate-700 dark:text-slate-300">
              <Globe className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span className="font-medium text-slate-600 dark:text-slate-400">{isBn ? 'সুইফট:' : 'SWIFT:'}</span>
              <span className="font-mono font-bold text-slate-900 dark:text-slate-100 tracking-wide">{bank.swift_code}</span>
            </div>
            <CopyButton textToCopy={bank.swift_code} size="sm" lang={lang} />
          </div>

          {/* Head Office Address */}
          <div className="flex items-start space-x-1.5 text-slate-600 dark:text-slate-300 text-[11px] pt-1">
            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
            <span className="line-clamp-2">{isBn ? bank.head_office_bn : bank.head_office}</span>
          </div>
        </div>
      </div>

      {/* Footer Action */}
      <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs font-bold text-emerald-700 dark:text-emerald-400 group-hover:text-emerald-800 dark:group-hover:text-emerald-300">
        <span>{isBn ? 'শাখা ও রাউটিং নম্বর দেখুন' : 'View Branches & Routing'}</span>
        <div className="w-6 h-6 rounded-full bg-emerald-50 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-700 dark:text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-all">
          <ChevronRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
};
