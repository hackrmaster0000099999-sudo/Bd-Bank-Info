import React, { useEffect } from 'react';
import { Building2, MapPin, Phone, Mail, Hash, Globe, ArrowLeft, HeartHandshake, HelpCircle } from 'lucide-react';
import { Branch, Language } from '../types';
import { CopyButton } from './CopyButton';
import { ShareButton } from './ShareButton';
import { decodeRoutingNumber } from '../lib/routingDecoder';
import { updateSEOMeta } from '../lib/seoManager';

interface BranchDetailsViewProps {
  branch: Branch;
  lang: Language;
  onBack: () => void;
  onOpenRoutingDecoder: (routing: string) => void;
  onOpenReportModal: (branch: Branch) => void;
}

export const BranchDetailsView: React.FC<BranchDetailsViewProps> = ({
  branch,
  lang,
  onBack,
  onOpenRoutingDecoder,
  onOpenReportModal
}) => {
  const isBn = lang === 'bn';
  const decoded = decodeRoutingNumber(branch.routing_number);

  const shareTitle = `${branch.bank_name} (${branch.name} Branch) Routing Number & SWIFT Code`;
  const shareText = `Official BEFTN Routing: ${branch.routing_number} | SWIFT Code: ${branch.swift_code || 'Head Office'} | District: ${branch.district}, Bangladesh.`;

  // Update SEO Meta Tags on view mount
  useEffect(() => {
    updateSEOMeta({
      title: `${branch.bank_name} ${branch.name} Branch Routing Number & SWIFT Code`,
      description: `Find official BEFTN Routing Number: ${branch.routing_number} and SWIFT Code: ${branch.swift_code || 'HO'} for ${branch.bank_name}, ${branch.name} branch, ${branch.district}, Bangladesh.`,
      lang
    });
  }, [branch, lang]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Back Button & Share Top Row */}
      <div className="flex items-center justify-between gap-3">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/80 transition-colors shadow-xs cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>{isBn ? 'পূর্ববর্তী পাতায় ফিরে যান' : 'Back to Listings'}</span>
        </button>

        <ShareButton
          title={shareTitle}
          text={shareText}
          lang={lang}
          size="md"
        />
      </div>

      {/* Hero Branch Header Card */}
      <div className="bg-white dark:bg-slate-800/90 rounded-3xl border border-slate-200/90 dark:border-slate-700/80 p-6 sm:p-8 shadow-md space-y-6">
        {/* Header Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-600">
              <Building2 className="w-3.5 h-3.5 inline mr-1 text-emerald-600 dark:text-emerald-400" />
              {isBn ? branch.bank_name_bn : branch.bank_name}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">
              {isBn ? branch.district_bn : branch.district} • {isBn ? branch.division_bn : branch.division}
            </span>
          </div>

          <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700/80 px-2.5 py-1 rounded-md">
            Branch Code: {branch.branch_code}
          </span>
        </div>

        {/* Title */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {isBn ? `${branch.bank_name_bn} - ${branch.name_bn}` : `${branch.bank_name} ${branch.name}`}
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mt-1">
            {isBn ? branch.name : branch.name_bn}
          </p>
        </div>

        {/* Big One-Click Copy Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {/* Routing Number Box */}
          <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white p-5 rounded-2xl shadow-lg shadow-emerald-700/10 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-100 flex items-center gap-1">
                <Hash className="w-4 h-4 text-emerald-200" />
                <span>{isBn ? 'BEFTN রাউটিং নম্বর' : 'BEFTN Routing Number'}</span>
              </span>
              <button
                onClick={() => onOpenRoutingDecoder(branch.routing_number)}
                className="text-[11px] text-emerald-100 underline hover:text-white flex items-center gap-1 cursor-pointer font-bold"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>{isBn ? 'বিশ্লেষণ' : 'Breakdown'}</span>
              </button>
            </div>

            <div className="flex items-center justify-between bg-white/10 backdrop-blur-xs px-4 py-3 rounded-xl border border-white/20">
              <span className="font-mono text-2xl sm:text-3xl font-extrabold tracking-wider">
                {branch.routing_number}
              </span>
              <CopyButton textToCopy={branch.routing_number} lang={lang} size="lg" />
            </div>
          </div>

          {/* SWIFT Code Box */}
          <div className="bg-slate-900 dark:bg-slate-950 text-white p-5 rounded-2xl shadow-lg space-y-3 border border-slate-800">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1">
                <Globe className="w-4 h-4 text-emerald-400" />
                <span>{isBn ? 'সুইফট/BIC কোড' : 'SWIFT / BIC Code'}</span>
              </span>
            </div>

            <div className="flex items-center justify-between bg-white/10 backdrop-blur-xs px-4 py-3 rounded-xl border border-white/20">
              <span className="font-mono text-xl sm:text-2xl font-extrabold tracking-wider">
                {branch.swift_code || 'N/A'}
              </span>
              {branch.swift_code && <CopyButton textToCopy={branch.swift_code} lang={lang} size="lg" />}
            </div>
          </div>
        </div>

        {/* 9-Digit BEFTN Breakdown Component */}
        {decoded.isValid && (
          <div className="bg-slate-50 dark:bg-slate-700/40 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-3">
            <h3 className="text-xs font-bold uppercase text-slate-700 dark:text-slate-300 tracking-wider">
              {isBn ? 'বাংলাদেশ ব্যাংক রাউটিং নম্বর অ্যানালাইসিস:' : 'Bangladesh Bank BEFTN Decoder:'}
            </h3>

            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="bg-emerald-100/60 dark:bg-emerald-950/60 p-2.5 rounded-xl border border-emerald-200 dark:border-emerald-800">
                <span className="text-[10px] font-bold text-emerald-800 dark:text-emerald-300 block">Bank ({decoded.bankCode})</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{branch.bank_short_name}</span>
              </div>
              <div className="bg-amber-100/60 dark:bg-amber-950/60 p-2.5 rounded-xl border border-amber-200 dark:border-amber-800">
                <span className="text-[10px] font-bold text-amber-800 dark:text-amber-300 block">District ({decoded.districtCode})</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{branch.district}</span>
              </div>
              <div className="bg-sky-100/60 dark:bg-sky-950/60 p-2.5 rounded-xl border border-sky-200 dark:border-sky-800">
                <span className="text-[10px] font-bold text-sky-800 dark:text-sky-300 block">Branch ({decoded.branchCode})</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{branch.branch_code}</span>
              </div>
            </div>
          </div>
        )}

        {/* Contact & Location Info */}
        <div className="space-y-3 text-xs pt-2 border-t border-slate-100 dark:border-slate-700">
          <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
            {isBn ? 'যোগাযোগ ও অবস্থান বিবরণী:' : 'Address & Contact Details:'}
          </h3>

          <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2.5 text-slate-700 dark:text-slate-300">
            <div className="flex items-start space-x-2">
              <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
              <div>
                <span className="font-bold text-slate-900 dark:text-white block">{isBn ? 'পূর্ণাঙ্গ ঠিকানা:' : 'Full Address:'}</span>
                <p>{isBn ? branch.address_bn : branch.address}</p>
              </div>
            </div>

            {branch.phone && (
              <div className="flex items-center space-x-2 border-t border-slate-200/60 dark:border-slate-700/60 pt-2">
                <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <div>
                  <span className="font-bold text-slate-900 dark:text-white mr-2">{isBn ? 'ফোন নম্বর:' : 'Telephone:'}</span>
                  <span>{branch.phone}</span>
                </div>
              </div>
            )}

            {branch.email && (
              <div className="flex items-center space-x-2 border-t border-slate-200/60 dark:border-slate-700/60 pt-2">
                <Mail className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <div>
                  <span className="font-bold text-slate-900 dark:text-white mr-2">{isBn ? 'ইমেইল:' : 'Official Email:'}</span>
                  <span>{branch.email}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Action Controls */}
        <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 dark:border-slate-700">
          <button
            onClick={() => onOpenReportModal(branch)}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60 hover:bg-amber-100 transition-colors cursor-pointer"
          >
            <HeartHandshake className="w-4 h-4" />
            <span>{isBn ? 'তথ্য ভুল মনে হচ্ছে? জানান' : 'Report Wrong Info'}</span>
          </button>

          <div className="text-xs text-slate-400 font-mono">
            Verified: BB Master List 2026
          </div>
        </div>
      </div>
    </div>
  );
};
