import React, { useEffect, useState } from 'react';
import { Building2, MapPin, Phone, Mail, Hash, Globe, ArrowLeft, HeartHandshake, HelpCircle, BookOpen, CheckCircle2, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { Branch, Language } from '../types';
import { CopyButton } from './CopyButton';
import { AdBanner } from './AdBanner';
import { ShareButton } from './ShareButton';
import { decodeRoutingNumber } from '../lib/routingDecoder';
import { updateSEOMeta } from '../lib/seoManager';
import { Link } from 'react-router-dom';

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
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const shareTitle = `${branch.bank_name} (${branch.name} Branch) Routing Number & SWIFT Code`;
  const shareText = `Official BEFTN Routing: ${branch.routing_number} | SWIFT Code: ${branch.swift_code || 'Head Office'} | District: ${branch.district}, Bangladesh.`;

  // Update SEO Meta Tags on view mount
  useEffect(() => {
    updateSEOMeta({
      title: `${branch.bank_name} ${branch.name} Branch Routing Number (${branch.routing_number}) | World Bank Codes`,
      description: `Official BEFTN Routing Number: ${branch.routing_number} and SWIFT Code for ${branch.bank_name}, ${branch.name} branch, ${branch.district}, Bangladesh. Verified for electronic fund transfer.`,
      lang
    });
  }, [branch, lang]);

  const faqs = isBn
    ? [
        {
          question: `${branch.bank_name_bn}-এর ${branch.name_bn}-এর রাউটিং নম্বর কত?`,
          answer: `${branch.bank_name_bn} (${branch.name_bn})-এর অফিসিয়াল বাংলাদেশ ব্যাংক অনুমোদিত ৯-ডিজিটের BEFTN রাউটিং নম্বর হলো ${branch.routing_number}।`
        },
        {
          question: `এই শাখায় টাকা পাঠাতে সুইফট কোড কী ব্যবহার করতে হবে?`,
          answer: branch.swift_code
            ? `এই নির্দিষ্ট শাখার নিজস্ব সুইফট কোড হলো ${branch.swift_code}। বৈদেশিক রেমিট্যান্সের জন্য এটি সরাসরি ব্যবহার করা যায়।`
            : `এই শাখার জন্য হেড অফিস সুইফট কোড ব্যবহার করতে হবে এবং ব্রাঞ্চের নাম হিসেবে "${branch.name}" উল্লেখ করতে হবে।`
        },
        {
          question: `এই রাউটিং নম্বর দিয়ে কোন কোন মাধ্যমে টাকা পাঠানো যাবে?`,
          answer: `এই রাউটিং নম্বরটি ব্যবহার করে BEFTN, RTGS, NPSB, ইন্টারনেট ব্যাংকিং, এবং যেকোনো মোবাইল ফিন্যান্সিয়াল সার্ভিস (বিকাশ/রকেট/নগদ) থেকে সরাসরি ব্যাংক অ্যাকাউন্টে টাকা পাঠানো সম্ভব।`
        }
      ]
    : [
        {
          question: `What is the routing number of ${branch.bank_name} ${branch.name} branch?`,
          answer: `The official 9-digit BEFTN Routing Number for ${branch.bank_name} (${branch.name} Branch) is ${branch.routing_number}.`
        },
        {
          question: `Which SWIFT code should be used for international transfers to this branch?`,
          answer: branch.swift_code
            ? `The dedicated SWIFT / BIC code for this branch is ${branch.swift_code}.`
            : `You should use the principal Head Office SWIFT code for ${branch.bank_name} and specify "${branch.name}" branch in the remittance instructions.`
        },
        {
          question: `Can I send money to this branch via mobile financial services (MFS)?`,
          answer: `Yes, you can transfer money directly from bKash, Nagad, Rocket or any internet banking app into accounts in this branch using this 9-digit routing number.`
        }
      ];

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

        <div className="flex items-center gap-2">
          <Link
            to={`/bank/${branch.bank_id}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 hover:bg-emerald-100 transition-colors"
          >
            <Building2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{isBn ? 'এই ব্যাংকের সকল শাখা' : 'All Bank Branches'}</span>
            <span className="sm:hidden">{isBn ? 'সকল শাখা' : 'All'}</span>
          </Link>

          <ShareButton
            title={shareTitle}
            text={shareText}
            lang={lang}
            size="md"
          />
        </div>
      </div>

      <AdBanner className="mb-2" />

      {/* Hero Branch Header Card */}
      <div className="bg-white dark:bg-slate-800/90 rounded-3xl border border-slate-200/90 dark:border-slate-700/80 p-6 sm:p-8 shadow-md space-y-6">
        {/* Header Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <Link
              to={`/bank/${branch.bank_id}`}
              className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-600 hover:bg-slate-200 transition-colors"
            >
              <Building2 className="w-3.5 h-3.5 inline mr-1 text-emerald-600 dark:text-emerald-400" />
              {isBn ? branch.bank_name_bn : branch.bank_name}
            </Link>
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
          <h1 className="text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight break-words">
            {isBn ? `${branch.bank_name_bn} - ${branch.name_bn}` : `${branch.bank_name} ${branch.name}`}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium mt-1 break-words">
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
              <span className="font-mono text-xl sm:text-2xl font-extrabold tracking-wider break-all">
                {branch.swift_code || 'HEAD OFFICE'}
              </span>
              {branch.swift_code && <CopyButton textToCopy={branch.swift_code} lang={lang} size="lg" />}
            </div>
          </div>
        </div>

        {/* 9-Digit BEFTN Breakdown Component (Built-in without modal) */}
        {decoded.isValid && (
          <div className="bg-slate-50 dark:bg-slate-700/40 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-3">
            <h3 className="text-xs font-bold uppercase text-slate-700 dark:text-slate-300 tracking-wider flex items-center gap-1.5">
              <Hash className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>{isBn ? 'রাউটিং নম্বর বিশ্লেষণ (৯ ডিজিট গঠন):' : 'Routing Number Breakdown (9-Digit Structure):'}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-center text-xs">
              <div className="bg-emerald-100/60 dark:bg-emerald-950/60 p-3 rounded-xl border border-emerald-200 dark:border-emerald-800">
                <span className="text-[10px] font-bold text-emerald-800 dark:text-emerald-300 block uppercase">Bank Code ({decoded.bankCode})</span>
                <span className="font-bold text-slate-800 dark:text-slate-100 text-sm mt-0.5 block">{branch.bank_short_name}</span>
              </div>
              <div className="bg-amber-100/60 dark:bg-amber-950/60 p-3 rounded-xl border border-amber-200 dark:border-amber-800">
                <span className="text-[10px] font-bold text-amber-800 dark:text-amber-300 block uppercase">District Code ({decoded.districtCode})</span>
                <span className="font-bold text-slate-800 dark:text-slate-100 text-sm mt-0.5 block">{branch.district}</span>
              </div>
              <div className="bg-sky-100/60 dark:bg-sky-950/60 p-3 rounded-xl border border-sky-200 dark:border-sky-800">
                <span className="text-[10px] font-bold text-sky-800 dark:text-sky-300 block uppercase">Branch Code ({decoded.branchCode})</span>
                <span className="font-bold text-slate-800 dark:text-slate-100 text-sm mt-0.5 block">{branch.branch_code}</span>
              </div>
            </div>
          </div>
        )}

        {/* Contact & Location Info */}
        <div className="space-y-3 text-xs pt-2 border-t border-slate-100 dark:border-slate-700">
          <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
            {isBn ? 'শাখার ঠিকানা ও যোগাযোগের তথ্য:' : 'Address & Contact Information:'}
          </h3>

          <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-3 text-slate-700 dark:text-slate-300">
            <div className="flex items-start space-x-2">
              <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
              <div>
                <span className="font-bold text-slate-900 dark:text-white block text-xs">{isBn ? 'শাখার ঠিকানা:' : 'Branch Address:'}</span>
                <p className="mt-0.5 leading-relaxed break-words">{isBn ? branch.address_bn : branch.address}</p>
              </div>
            </div>

            {branch.phone && (
              <div className="flex items-center space-x-2 border-t border-slate-200/60 dark:border-slate-700/60 pt-2.5">
                <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <div>
                  <span className="font-bold text-slate-900 dark:text-white mr-2">{isBn ? 'ফোন নম্বর:' : 'Telephone:'}</span>
                  <span className="font-mono">{branch.phone}</span>
                </div>
              </div>
            )}

            {branch.email && (
              <div className="flex items-center space-x-2 border-t border-slate-200/60 dark:border-slate-700/60 pt-2.5">
                <Mail className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <div>
                  <span className="font-bold text-slate-900 dark:text-white mr-2">{isBn ? 'ইমেইল:' : 'Email:'}</span>
                  <span className="font-mono break-all">{branch.email}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Branch Guide & Instructions */}
        <div className="space-y-4 pt-2 border-t border-slate-100 dark:border-slate-700 text-xs sm:text-sm">
          <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>{isBn ? 'এই শাখায় অর্থ স্থানান্তরের গাইডলাইন' : 'Fund Transfer Guidelines for this Branch'}</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-1.5">
              <h4 className="font-bold text-slate-900 dark:text-white text-xs">{isBn ? '১. BEFTN ট্রান্সফার' : '1. BEFTN Inter-Bank Transfer'}</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {isBn 
                  ? `অন্য ব্যাংক থেকে এই শাখায় ফান্ড ট্রান্সফার করার সময় রাউটিং নম্বর হিসেবে ${branch.routing_number} ইনপুট দিন।`
                  : `Enter routing number ${branch.routing_number} when initiating an inter-bank transfer via BEFTN.`}
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-1.5">
              <h4 className="font-bold text-slate-900 dark:text-white text-xs">{isBn ? '২. আন্তর্জাতিক রেমিট্যান্স' : '2. Foreign Remittance'}</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {isBn
                  ? `বিদেশ থেকে প্রেরকের কাছে ব্যাংকের নাম, শাখার নাম (${branch.name}) এবং সুইফট কোড প্রদান করুন।`
                  : `Provide Bank Name, Branch Name (${branch.name}) and SWIFT code to the sender overseas.`}
              </p>
            </div>
          </div>
        </div>

        {/* Branch FAQs */}
        <div className="space-y-3 pt-2 border-t border-slate-100 dark:border-slate-700">
          <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>{isBn ? 'সচরাচর জিজ্ঞাসিত প্রশ্ন (FAQ)' : 'Frequently Asked Questions'}</span>
          </h3>

          <div className="space-y-2">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 dark:border-slate-700/80 overflow-hidden bg-slate-50/50 dark:bg-slate-900/30 transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-3.5 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:bg-slate-100/50 dark:hover:bg-slate-800/50 cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="p-3.5 pt-0 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/40 dark:border-slate-700/40 mt-1">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Controls */}
        <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 dark:border-slate-700">
          <button
            onClick={() => onOpenReportModal(branch)}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60 hover:bg-amber-100 transition-colors cursor-pointer"
          >
            <HeartHandshake className="w-4 h-4" />
            <span>{isBn ? 'তথ্য সংশোধন বা রিপোর্ট' : 'Report Wrong Info'}</span>
          </button>

          <div className="text-xs text-slate-400 font-mono">
            Verified: Official Master Register 2026
          </div>
        </div>
      </div>
    </div>
  );
};
