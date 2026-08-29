import React from 'react';
import { Building2, Globe, MapPin, ChevronRight } from 'lucide-react';
import { Bank, Language } from '../types';
import { CopyButton } from './CopyButton';
import { translations } from '../lib/translations';

interface BankCardProps {
  bank: Bank;
  lang: Language;
  onSelectBank: (bankId: string) => void;
}

export const BankCard: React.FC<BankCardProps> = ({ bank, lang, onSelectBank }) => {
  const t = translations[lang] || translations.en;

  const getBankName = () => {
    if (lang === 'hi' && bank.name_hi) return bank.name_hi;
    if (lang === 'bn' && bank.name_bn) return bank.name_bn;
    return bank.name;
  };

  const getSubName = () => {
    if (lang === 'hi') return bank.name;
    if (lang === 'bn') return bank.name;
    return bank.name_hi || bank.name_bn || '';
  };

  const getHeadOffice = () => {
    if (lang === 'hi' && bank.head_office_hi) return bank.head_office_hi;
    if (lang === 'bn' && bank.head_office_bn) return bank.head_office_bn;
    return bank.head_office;
  };

  return (
    <div
      onClick={() => onSelectBank(bank.id)}
      className="bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 p-5 shadow-xs hover:shadow-lg hover:shadow-emerald-900/5 dark:hover:shadow-black/20 hover:border-emerald-300 dark:hover:border-emerald-500 transition-all duration-200 group flex flex-col justify-between cursor-pointer"
    >
      <div>
        {/* Top Header Badge & Bank Code */}
        <div className="flex flex-wrap items-start justify-between gap-2.5 mb-3">
          <div className="flex items-center space-x-3 min-w-0">
            <div className="w-11 h-11 rounded-2xl bg-emerald-50 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 font-extrabold flex items-center justify-center text-xs border border-emerald-100 dark:border-emerald-800 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-2xs shrink-0">
              {bank.short_name.substring(0, 4)}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                  {bank.country === 'in' ? '🇮🇳 India' : '🇧🇩 Bangladesh'}
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded-md text-[9px] font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300">
                  {bank.type || 'Bank'}
                </span>
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono mt-0.5 truncate">
                {bank.country === 'in' && bank.ifsc_prefix ? (
                  <>IFSC Prefix: <span className="font-bold text-slate-800 dark:text-slate-200">{bank.ifsc_prefix}</span></>
                ) : (
                  <>Bank Code: <span className="font-bold text-slate-800 dark:text-slate-200">{bank.bank_code}</span></>
                )}
              </div>
            </div>
          </div>

          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60 shrink-0">
            <Building2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>{bank.branch_count.toLocaleString()} {t.branchCount}</span>
          </span>
        </div>

        {/* Bank Title */}
        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors break-words">
          {getBankName()}
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-3.5 break-words">
          {getSubName()}
        </p>

        {/* Metadata Details */}
        <div className="space-y-2 py-3 border-t border-slate-100 dark:border-slate-700/60 text-xs">
          {/* SWIFT Code */}
          <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-50/90 dark:bg-slate-700/40 p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
            <div className="flex flex-wrap items-center gap-1.5 text-slate-700 dark:text-slate-300 min-w-0">
              <Globe className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span className="font-medium text-slate-600 dark:text-slate-400">{t.swift}:</span>
              <span className="font-mono font-bold text-slate-900 dark:text-slate-100 tracking-wide break-all">{bank.swift_code}</span>
            </div>
            <CopyButton textToCopy={bank.swift_code} size="sm" lang={lang} className="shrink-0" />
          </div>

          {/* Head Office Address */}
          <div className="flex items-start space-x-1.5 text-slate-600 dark:text-slate-300 text-[11px] pt-1">
            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
            <span className="break-words line-clamp-2">{getHeadOffice()}</span>
          </div>
        </div>
      </div>

      {/* Footer Action */}
      <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs font-bold text-emerald-700 dark:text-emerald-400 group-hover:text-emerald-800 dark:group-hover:text-emerald-300">
        <span>{bank.country === 'in' ? (lang === 'hi' ? 'शाखाएँ व IFSC कोड देखें' : 'View Branches & IFSC Codes') : (lang === 'bn' ? 'শাখা ও রাউটিং নম্বর দেখুন' : 'View Branches & Routing')}</span>
        <div className="w-6 h-6 rounded-full bg-emerald-50 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-700 dark:text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-all">
          <ChevronRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
};
