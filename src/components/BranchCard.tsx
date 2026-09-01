import React from 'react';
import { MapPin, Phone, Hash, Globe, Building2, ChevronRight, HelpCircle, HeartHandshake } from 'lucide-react';
import { Branch, Language } from '../types';
import { CopyButton } from './CopyButton';
import { ShareButton } from './ShareButton';
import { translations } from '../lib/translations';

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
  const t = translations[lang] || translations.en;
  const isUS = branch.country === 'us';
  const isUK = branch.country === 'uk' || !!branch.sort_code;
  const isCanada = branch.country === 'ca' || !!branch.transit_number;
  const isRussia = branch.country === 'ru' || !!branch.bik_code;
  const isIndia = branch.country === 'in' || !!branch.ifsc_code;

  const getBranchName = () => {
    if (lang === 'ru' && branch.name_ru) return branch.name_ru;
    if (lang === 'hi' && branch.name_hi) return branch.name_hi;
    if (lang === 'bn' && branch.name_bn) return branch.name_bn;
    return branch.name;
  };

  const getBankName = () => {
    if (lang === 'ru' && branch.bank_name_ru) return branch.bank_name_ru;
    if (lang === 'hi' && branch.bank_name_hi) return branch.bank_name_hi;
    if (lang === 'bn' && branch.bank_name_bn) return branch.bank_name_bn;
    return branch.bank_name;
  };

  const getDistrict = () => {
    if (lang === 'ru' && branch.district_ru) return branch.district_ru;
    if (lang === 'hi' && branch.district_hi) return branch.district_hi;
    if (lang === 'bn' && branch.district_bn) return branch.district_bn;
    return branch.district;
  };

  const getAddress = () => {
    if (lang === 'ru' && branch.address_ru) return branch.address_ru;
    if (lang === 'hi' && branch.address_hi) return branch.address_hi;
    if (lang === 'bn' && branch.address_bn) return branch.address_bn;
    return branch.address;
  };

  const shareTitle = `${branch.bank_name} - ${branch.name} Branch`;
  const shareText = isUS
    ? `ABA Routing: ${branch.routing_number} | ACH: ${branch.ach_routing || branch.routing_number} | City: ${branch.district}, ${branch.division}`
    : isUK
    ? `Sort Code: ${branch.sort_code || branch.routing_number} | SWIFT: ${branch.swift_code || 'N/A'} | Postcode: ${branch.zip_code || 'N/A'}, UK`
    : isCanada
    ? `Transit: ${branch.transit_number || branch.branch_code} | Institution: ${branch.institution_number || '003'} | EFT: ${branch.routing_number} | Canada`
    : isRussia
    ? `БИК: ${branch.bik_code || branch.routing_number} | Корр: ${branch.corr_account || 'N/A'} | Город: ${branch.district}, ${branch.division}`
    : isIndia
    ? `IFSC: ${branch.ifsc_code} | MICR: ${branch.routing_number} | City: ${branch.district}, ${branch.division}`
    : `Routing: ${branch.routing_number} | SWIFT: ${branch.swift_code || 'N/A'} | District: ${branch.district}`;

  return (
    <div className="bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 p-5 shadow-xs hover:shadow-lg hover:shadow-emerald-900/5 dark:hover:shadow-black/20 transition-all duration-200 flex flex-col justify-between group">
      <div>
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex flex-wrap items-center gap-1.5 min-w-0">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 max-w-full whitespace-nowrap shrink-0">
              <Building2 className="w-3.5 h-3.5 mr-1 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span className="truncate max-w-[140px] sm:max-w-[200px]">{getBankName()}</span>
            </span>
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60 shrink-0 whitespace-nowrap">
              {getDistrict()}
            </span>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700/80 text-slate-600 dark:text-slate-300 whitespace-nowrap">
              {isUS ? '🇺🇸 US' : isUK ? '🇬🇧 UK' : isCanada ? '🇨🇦 CA' : isRussia ? '🇷🇺 RU' : isIndia ? '🇮🇳 IN' : '🇧🇩 BD'}
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
          className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors cursor-pointer break-words"
        >
          {getBranchName()}
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-3.5 break-words">
          {branch.name} • {branch.division}
        </p>

        {/* Primary Code Highlight Box: ABA for US, Sort Code for UK, BIK for Russia, IFSC for India, Routing for BD */}
        {isUS ? (
          <div className="bg-emerald-50/70 dark:bg-emerald-950/40 p-3 sm:p-3.5 rounded-2xl border border-emerald-200/70 dark:border-emerald-800/50 mb-3 space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-1">
              <div className="flex items-center space-x-1.5 min-w-0">
                <div className="w-5 h-5 rounded-md bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 flex items-center justify-center shrink-0">
                  <Hash className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">
                  ABA Routing Number:
                </span>
              </div>
              <span className="text-[10px] font-bold text-emerald-800 dark:text-emerald-300 uppercase">
                ACH & Wire (Fed)
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 bg-white dark:bg-slate-800 px-3 py-2 rounded-xl border border-emerald-200/80 dark:border-emerald-700/60 shadow-2xs">
              <span className="font-mono text-base sm:text-lg font-extrabold text-slate-900 dark:text-white tracking-wider break-all min-w-0">
                {branch.routing_number}
              </span>
              <CopyButton
                textToCopy={branch.routing_number}
                label={t.copy}
                size="sm"
                lang={lang}
                className="shrink-0"
              />
            </div>
          </div>
        ) : isUK ? (
          <div className="bg-emerald-50/70 dark:bg-emerald-950/40 p-3 sm:p-3.5 rounded-2xl border border-emerald-200/70 dark:border-emerald-800/50 mb-3 space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-1">
              <div className="flex items-center space-x-1.5 min-w-0">
                <div className="w-5 h-5 rounded-md bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 flex items-center justify-center shrink-0">
                  <Hash className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">
                  UK Sort Code:
                </span>
              </div>
              <span className="text-[10px] font-bold text-emerald-800 dark:text-emerald-300 uppercase">
                BACS / Faster Payments
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 bg-white dark:bg-slate-800 px-3 py-2 rounded-xl border border-emerald-200/80 dark:border-emerald-700/60 shadow-2xs">
              <span className="font-mono text-base sm:text-lg font-extrabold text-slate-900 dark:text-white tracking-wider break-all min-w-0">
                {branch.sort_code || branch.routing_number}
              </span>
              <CopyButton
                textToCopy={branch.sort_code || branch.routing_number}
                label={t.copy}
                size="sm"
                lang={lang}
                className="shrink-0"
              />
            </div>
          </div>
        ) : isCanada ? (
          <div className="bg-emerald-50/70 dark:bg-emerald-950/40 p-3 sm:p-3.5 rounded-2xl border border-emerald-200/70 dark:border-emerald-800/50 mb-3 space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-1">
              <div className="flex items-center space-x-1.5 min-w-0">
                <div className="w-5 h-5 rounded-md bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 flex items-center justify-center shrink-0">
                  <Hash className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">
                  Transit & Inst: {branch.transit_number || branch.branch_code}-{branch.institution_number || '003'}
                </span>
              </div>
              <span className="text-[10px] font-bold text-emerald-800 dark:text-emerald-300 uppercase">
                Payments Canada EFT
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 bg-white dark:bg-slate-800 px-3 py-2 rounded-xl border border-emerald-200/80 dark:border-emerald-700/60 shadow-2xs">
              <span className="font-mono text-base sm:text-lg font-extrabold text-slate-900 dark:text-white tracking-wider break-all min-w-0">
                {branch.routing_number}
              </span>
              <CopyButton
                textToCopy={branch.routing_number}
                label={t.copy}
                size="sm"
                lang={lang}
                className="shrink-0"
              />
            </div>
          </div>
        ) : isRussia ? (
          <div className="bg-emerald-50/70 dark:bg-emerald-950/40 p-3 sm:p-3.5 rounded-2xl border border-emerald-200/70 dark:border-emerald-800/50 mb-3 space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-1">
              <div className="flex items-center space-x-1.5 min-w-0">
                <div className="w-5 h-5 rounded-md bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 flex items-center justify-center shrink-0">
                  <Hash className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">
                  БИК (BIK):
                </span>
              </div>
              <span className="text-[10px] font-bold text-emerald-800 dark:text-emerald-300 uppercase">
                Банк России
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 bg-white dark:bg-slate-800 px-3 py-2 rounded-xl border border-emerald-200/80 dark:border-emerald-700/60 shadow-2xs">
              <span className="font-mono text-base sm:text-lg font-extrabold text-slate-900 dark:text-white tracking-wider break-all min-w-0">
                {branch.bik_code || branch.routing_number}
              </span>
              <CopyButton
                textToCopy={branch.bik_code || branch.routing_number}
                label={t.copy}
                size="sm"
                lang={lang}
                className="shrink-0"
              />
            </div>
          </div>
        ) : isIndia && branch.ifsc_code ? (
          <div className="bg-emerald-50/70 dark:bg-emerald-950/40 p-3 sm:p-3.5 rounded-2xl border border-emerald-200/70 dark:border-emerald-800/50 mb-3 space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-1">
              <div className="flex items-center space-x-1.5 min-w-0">
                <div className="w-5 h-5 rounded-md bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 flex items-center justify-center shrink-0">
                  <Hash className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">
                  {t.ifsc}:
                </span>
              </div>
              <span className="text-[10px] font-bold text-emerald-800 dark:text-emerald-300 uppercase">
                NEFT / RTGS / IMPS
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 bg-white dark:bg-slate-800 px-3 py-2 rounded-xl border border-emerald-200/80 dark:border-emerald-700/60 shadow-2xs">
              <span className="font-mono text-base sm:text-lg font-extrabold text-slate-900 dark:text-white tracking-wider break-all min-w-0">
                {branch.ifsc_code}
              </span>
              <CopyButton
                textToCopy={branch.ifsc_code}
                label={t.copy}
                size="sm"
                lang={lang}
                className="shrink-0"
              />
            </div>
          </div>
        ) : (
          <div className="bg-emerald-50/70 dark:bg-emerald-950/40 p-3 sm:p-3.5 rounded-2xl border border-emerald-200/70 dark:border-emerald-800/50 mb-3 space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-1">
              <div className="flex items-center space-x-1.5 min-w-0">
                <div className="w-5 h-5 rounded-md bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 flex items-center justify-center shrink-0">
                  <Hash className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">
                  {t.routing}:
                </span>
              </div>
              <button
                onClick={() => onOpenRoutingDecoder(branch.routing_number)}
                className="inline-flex items-center gap-1 text-[11px] text-emerald-700 dark:text-emerald-400 hover:text-emerald-900 font-bold underline underline-offset-2 cursor-pointer shrink-0"
                title="Routing number breakdown"
              >
                <HelpCircle className="w-3 h-3" />
                <span>{t.routingDecoder}</span>
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 bg-white dark:bg-slate-800 px-3 py-2 rounded-xl border border-emerald-200/80 dark:border-emerald-700/60 shadow-2xs">
              <span className="font-mono text-base sm:text-lg font-extrabold text-slate-900 dark:text-white tracking-wider break-all min-w-0">
                {branch.routing_number}
              </span>
              <CopyButton
                textToCopy={branch.routing_number}
                label={t.copy}
                size="sm"
                lang={lang}
                className="shrink-0"
              />
            </div>
          </div>
        )}

        {/* Secondary Codes: Corr Account / MICR / SWIFT */}
        <div className="space-y-2 text-xs">
          {/* Russian Corr Account */}
          {isRussia && branch.corr_account && (
            <div className="flex items-center justify-between bg-slate-50/80 dark:bg-slate-700/40 px-3 py-2 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
              <div className="flex items-center space-x-1.5">
                <Hash className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span className="font-medium text-slate-600 dark:text-slate-300">{lang === 'ru' ? 'Корр. счет:' : 'Corr. Account:'}</span>
                <span className="font-mono font-bold text-slate-900 dark:text-slate-100">{branch.corr_account}</span>
              </div>
              <CopyButton textToCopy={branch.corr_account} size="sm" lang={lang} />
            </div>
          )}

          {/* MICR / Secondary Code */}
          {isIndia && branch.routing_number && (
            <div className="flex items-center justify-between bg-slate-50/80 dark:bg-slate-700/40 px-3 py-2 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
              <div className="flex items-center space-x-1.5">
                <Hash className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span className="font-medium text-slate-600 dark:text-slate-300">MICR Code:</span>
                <span className="font-mono font-bold text-slate-900 dark:text-slate-100">{branch.routing_number}</span>
              </div>
              <CopyButton textToCopy={branch.routing_number} size="sm" lang={lang} />
            </div>
          )}

          {/* SWIFT */}
          {branch.swift_code ? (
            <div className="flex items-center justify-between bg-slate-50/80 dark:bg-slate-700/40 px-3 py-2 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
              <div className="flex items-center space-x-1.5">
                <Globe className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span className="font-medium text-slate-600 dark:text-slate-300">{t.swift}:</span>
                <span className="font-mono font-bold text-slate-900 dark:text-slate-100">{branch.swift_code}</span>
              </div>
              <CopyButton textToCopy={branch.swift_code} size="sm" lang={lang} />
            </div>
          ) : (
            <div className="text-[11px] text-slate-500 dark:text-slate-400 bg-amber-50/50 dark:bg-amber-950/30 px-3 py-1.5 rounded-xl border border-amber-200/40 dark:border-amber-800/40">
              {lang === 'ru' ? 'Используется SWIFT код головного офиса' : lang === 'hi' ? 'यह शाखा मुख्य शाखा (Head Office) का स्विफ्ट कोड उपयोग करती है।' : lang === 'bn' ? 'এই শাখাটি হেড অফিসের সুইফট কোড ব্যবহার করে।' : 'Uses Head Office SWIFT Code'}
            </div>
          )}

          {/* Address */}
          <div className="flex items-start space-x-1.5 text-slate-600 dark:text-slate-300 text-xs pt-1">
            <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 mt-0.5 shrink-0" />
            <span className="break-words line-clamp-2">{getAddress()}</span>
          </div>

          {/* Phone */}
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
          <span>{t.reportIssue}</span>
        </button>

        <button
          onClick={() => onSelectBranch(branch)}
          className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors cursor-pointer"
        >
          <span>{t.viewDetails}</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
