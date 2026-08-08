import React from 'react';
import { MapPin, Phone, Hash, Globe, Building2, ChevronRight, HelpCircle, HeartHandshake } from 'lucide-react';
import { Branch, Language } from '../types';
import { CopyButton } from './CopyButton';
import { ShareButton } from './ShareButton';

interface BranchCardProps {
  branch: Branch;
  lang: Language;
  onSelectBranch: (branch: Branch) => void;
  onOpenRoutingDecoder: (routing: string) => void;
  onOpenReportModal: (branch: Branch) => void;
}

export const BranchCard: React.FC<BranchCardProps> = ({
  branch,
  lang,
  onSelectBranch,
  onOpenRoutingDecoder,
  onOpenReportModal
}) => {
  const isBn = lang === 'bn';

  const shareTitle = `${branch.bank_name} - ${branch.name} Branch`;
  const shareText = `Routing Number: ${branch.routing_number}${branch.swift_code ? ` | SWIFT: ${branch.swift_code}` : ''} | District: ${branch.district}`;

  return (
    <div className="bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 p-5 shadow-xs hover:shadow-lg hover:shadow-emerald-900/5 dark:hover:shadow-black/20 transition-all duration-200 flex flex-col justify-between group">
      <div>
        {/* Top Badges */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
              <Building2 className="w-3.5 h-3.5 mr-1 text-emerald-600 dark:text-emerald-400" />
              {isBn ? branch.bank_name_bn : branch.bank_name}
            </span>
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60">
              {isBn ? branch.district_bn : branch.district}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700/80 text-slate-600 dark:text-slate-300">
              Code: {branch.branch_code}
            </span>
            <ShareButton
              title={shareTitle}
              text={shareText}
              lang={lang}
              size="sm"
            />
          </div>
        </div>

        {/* Branch Title */}
        <h3
          onClick={() => onSelectBranch(branch)}
          className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors cursor-pointer"
        >
          {isBn ? branch.name_bn : branch.name}
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-3.5">
          {isBn ? branch.name : branch.name_bn}
        </p>

        {/* Highlighted Routing Number Box */}
        <div className="bg-emerald-50/70 dark:bg-emerald-950/40 p-3.5 rounded-2xl border border-emerald-200/70 dark:border-emerald-800/50 mb-3 space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1.5">
              <div className="w-5 h-5 rounded-md bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 flex items-center justify-center">
                <Hash className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                {isBn ? 'BEFTN রাউটিং নম্বর:' : 'BEFTN Routing Number:'}
              </span>
            </div>
            <button
              onClick={() => onOpenRoutingDecoder(branch.routing_number)}
              className="inline-flex items-center gap-1 text-[11px] text-emerald-700 dark:text-emerald-400 hover:text-emerald-900 font-bold underline underline-offset-2 cursor-pointer"
              title="Routing number 9-digit breakdown"
            >
              <HelpCircle className="w-3 h-3" />
              <span>{isBn ? 'বিশ্লেষণ' : 'Breakdown'}</span>
            </button>
          </div>

          <div className="flex items-center justify-between gap-2 bg-white dark:bg-slate-800 px-3.5 py-2 rounded-xl border border-emerald-200/80 dark:border-emerald-700/60 shadow-2xs">
            <span className="font-mono text-base font-extrabold text-slate-900 dark:text-white tracking-wider">
              {branch.routing_number}
            </span>
            <CopyButton
              textToCopy={branch.routing_number}
              label={isBn ? 'কপি' : 'Copy'}
              size="sm"
              lang={lang}
            />
          </div>
        </div>

        {/* SWIFT Code & Contact Info */}
        <div className="space-y-2 text-xs">
          {/* SWIFT */}
          {branch.swift_code ? (
            <div className="flex items-center justify-between bg-slate-50/80 dark:bg-slate-700/40 px-3 py-2 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
              <div className="flex items-center space-x-1.5">
                <Globe className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span className="font-medium text-slate-600 dark:text-slate-300">{isBn ? 'সুইফট:' : 'SWIFT:'}</span>
                <span className="font-mono font-bold text-slate-900 dark:text-slate-100">{branch.swift_code}</span>
              </div>
              <CopyButton textToCopy={branch.swift_code} size="sm" lang={lang} />
            </div>
          ) : (
            <div className="text-[11px] text-slate-500 dark:text-slate-400 bg-amber-50/50 dark:bg-amber-950/30 px-3 py-1.5 rounded-xl border border-amber-200/40 dark:border-amber-800/40">
              {isBn ? 'এই শাখাটি হেড অফিসের সুইফট কোড ব্যবহার করে।' : 'Uses Head Office SWIFT Code'}
            </div>
          )}

          {/* Address */}
          <div className="flex items-start space-x-1.5 text-slate-600 dark:text-slate-300 text-xs pt-1">
            <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 mt-0.5 shrink-0" />
            <span className="line-clamp-2">{isBn ? branch.address_bn : branch.address}</span>
          </div>

          {/* Phone / Email */}
          {branch.phone && (
            <div className="flex items-center space-x-1.5 text-slate-500 dark:text-slate-400 text-[11px]">
              <Phone className="w-3 h-3 text-slate-400 shrink-0" />
              <span>{branch.phone}</span>
            </div>
          )}
        </div>
      </div>

      {/* Footer Controls */}
      <div className="pt-3 mt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
        <button
          onClick={() => onOpenReportModal(branch)}
          className="inline-flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400 hover:text-amber-700 dark:hover:text-amber-400 font-medium transition-colors cursor-pointer"
        >
          <HeartHandshake className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
          <span>{isBn ? 'তথ্য সংশোধন' : 'Report Correction'}</span>
        </button>

        <button
          onClick={() => onSelectBranch(branch)}
          className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors cursor-pointer"
        >
          <span>{isBn ? 'বিস্তারিত' : 'Full Details'}</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
