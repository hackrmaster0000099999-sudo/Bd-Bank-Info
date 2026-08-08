import React from 'react';
import { X, Hash, Info, CheckCircle2, AlertTriangle, Building2, MapPin } from 'lucide-react';
import { Language } from '../types';
import { decodeRoutingNumber } from '../lib/routingDecoder';
import { CopyButton } from './CopyButton';

interface RoutingDecoderModalProps {
  routingNumber: string;
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const RoutingDecoderModal: React.FC<RoutingDecoderModalProps> = ({
  routingNumber,
  isOpen,
  onClose,
  lang
}) => {
  if (!isOpen) return null;

  const isBn = lang === 'bn';
  const decoded = decodeRoutingNumber(routingNumber);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white dark:bg-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 dark:border-slate-700 space-y-5 relative animate-in fade-in zoom-in-95 duration-150">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-400 flex items-center justify-center">
            <Hash className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {isBn ? 'BEFTN রাউটিং নম্বর কোড বিশ্লেষণ' : 'BEFTN Routing Number Breakdown'}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {isBn ? 'বাংলাদেশ ব্যাংকের ৯-ডিজিট রাউটিং কোডের গঠন' : 'Bangladesh Bank 9-Digit BEFTN Structure'}
            </p>
          </div>
        </div>

        {/* Main Number Display & Copy */}
        <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-xl border border-slate-200 dark:border-slate-600/80 flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block">
              {isBn ? 'পরীক্ষাধীন রাউটিং নম্বর:' : 'Target Routing Number:'}
            </span>
            <span className="font-mono text-2xl font-bold text-slate-900 dark:text-white tracking-wider">
              {routingNumber || 'N/A'}
            </span>
          </div>
          <CopyButton textToCopy={routingNumber} lang={lang} size="md" />
        </div>

        {decoded.isValid ? (
          <div className="space-y-3">
            <div className="flex items-center gap-1.5 text-xs text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 p-2.5 rounded-lg border border-emerald-200 dark:border-emerald-800/60">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>{isBn ? 'সঠিক ৯-ডিজিটের BEFTN ফরম্যাট।' : 'Valid 9-digit BEFTN Routing Number.'}</span>
            </div>

            {/* Visual 3-part breakdown bar */}
            <div className="grid grid-cols-3 gap-2 text-center pt-2">
              <div className="bg-emerald-50/80 dark:bg-emerald-950/40 p-3 rounded-xl border border-emerald-200 dark:border-emerald-800/60">
                <span className="text-[10px] uppercase font-bold text-emerald-800 dark:text-emerald-300 block">Bank Code</span>
                <span className="font-mono text-lg font-bold text-emerald-900 dark:text-emerald-100">{decoded.bankCode}</span>
                <span className="text-[11px] text-emerald-700 dark:text-emerald-400 block mt-0.5 line-clamp-1 font-semibold">
                  {decoded.bank ? (isBn ? decoded.bank.short_name : decoded.bank.short_name) : 'Bank'}
                </span>
              </div>

              <div className="bg-amber-50/80 dark:bg-amber-950/40 p-3 rounded-xl border border-amber-200 dark:border-amber-800/60">
                <span className="text-[10px] uppercase font-bold text-amber-800 dark:text-amber-300 block">District Code</span>
                <span className="font-mono text-lg font-bold text-amber-900 dark:text-amber-100">{decoded.districtCode}</span>
                <span className="text-[11px] text-amber-700 dark:text-amber-400 block mt-0.5 line-clamp-1 font-semibold">
                  {decoded.districtName}
                </span>
              </div>

              <div className="bg-sky-50/80 dark:bg-sky-950/40 p-3 rounded-xl border border-sky-200 dark:border-sky-800/60">
                <span className="text-[10px] uppercase font-bold text-sky-800 dark:text-sky-300 block">Branch Code</span>
                <span className="font-mono text-lg font-bold text-sky-900 dark:text-sky-100">{decoded.branchCode}</span>
                <span className="text-[11px] text-sky-700 dark:text-sky-400 block mt-0.5 line-clamp-1 font-semibold">
                  {isBn ? 'শাখা আইডি' : 'Branch ID'}
                </span>
              </div>
            </div>

            {/* Explanation breakdown list */}
            <div className="bg-slate-50 dark:bg-slate-700/40 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700/80 text-xs space-y-2">
              <div className="flex items-start space-x-2">
                <Building2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                <div>
                  <span className="font-bold text-slate-800 dark:text-slate-200">
                    {isBn ? 'প্রথম ৩ সংখ্যা (Bank Identifier):' : 'First 3 digits (Bank Code):'}
                  </span>
                  <p className="text-slate-600 dark:text-slate-300">
                    {decoded.bank
                      ? `${decoded.bankCode} - ${isBn ? decoded.bank.name_bn : decoded.bank.name}`
                      : `${decoded.bankCode} - Unlisted Bank`}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-2 border-t border-slate-200/80 dark:border-slate-700/80 pt-2">
                <MapPin className="w-4 h-4 text-amber-600 dark:text-amber-500 mt-0.5 shrink-0" />
                <div>
                  <span className="font-bold text-slate-800 dark:text-slate-200">
                    {isBn ? '৪র্থ ও ৫ম সংখ্যা (District Code):' : '4th & 5th digits (District Code):'}
                  </span>
                  <p className="text-slate-600 dark:text-slate-300">{decoded.districtCode} - {decoded.districtName}</p>
                </div>
              </div>

              <div className="flex items-start space-x-2 border-t border-slate-200/80 dark:border-slate-700/80 pt-2">
                <Hash className="w-4 h-4 text-sky-600 dark:text-sky-500 mt-0.5 shrink-0" />
                <div>
                  <span className="font-bold text-slate-800 dark:text-slate-200">
                    {isBn ? 'শেষ ৪ সংখ্যা (Branch Identifier):' : 'Last 4 digits (Branch Code):'}
                  </span>
                  <p className="text-slate-600 dark:text-slate-300">
                    {isBn
                      ? `${decoded.branchCode} - সংশ্লিষ্ট ব্যাংকের শাখা আইডি।`
                      : `${decoded.branchCode} - Specific branch serial code.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-rose-50 dark:bg-rose-950/40 p-4 rounded-xl border border-rose-200 dark:border-rose-800/60 flex items-start space-x-3 text-xs text-rose-800 dark:text-rose-300">
            <AlertTriangle className="w-5 h-5 text-rose-600 dark:text-rose-500 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block mb-0.5">
                {isBn ? 'অকার্যকর বা অপূর্ণ রাউটিং নম্বর' : 'Invalid or Incomplete Routing Number'}
              </span>
              <p>
                {isBn
                  ? 'বাংলাদেশ ব্যাংকের BEFTN সিস্টেম অনুযায়ী রাউটিং নম্বর অবশ্যই ৯টি ডিজিট সম্পন্ন হতে হবে।'
                  : 'BEFTN Routing Numbers issued by Bangladesh Bank must be exactly 9 digits.'}
              </p>
            </div>
          </div>
        )}

        {/* Modal Footer */}
        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-colors cursor-pointer"
          >
            {isBn ? 'বন্ধ করুন' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
