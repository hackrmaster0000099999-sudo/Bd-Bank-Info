import React, { useState, useEffect } from 'react';
import { Building2, Globe, MapPin, Search, ArrowLeft, ExternalLink, Hash, BookOpen, HelpCircle, ChevronDown, ChevronUp, CheckCircle2, ArrowRightLeft, ShieldCheck } from 'lucide-react';
import { Bank, Branch, Language } from '../types';
import { getBranchesForBank } from '../lib/searchEngine';
import { BranchCard } from './BranchCard';
import { AdBanner } from './AdBanner';
import { CopyButton } from './CopyButton';
import { getBankGuideContent } from '../lib/bankGuideContent';
import { updateSEOMeta } from '../lib/seoManager';

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
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const isBn = lang === 'bn';
  const allBranches = getBranchesForBank(bank.id);
  const guide = getBankGuideContent(bank, lang);

  // Update SEO Meta Tags on view mount
  useEffect(() => {
    updateSEOMeta({
      title: `${bank.name} (${bank.short_name}) All Branches Routing Numbers & SWIFT Codes | World Bank Codes`,
      description: guide.summary,
      lang
    });
  }, [bank, lang, guide]);

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
        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-xs cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
        <span>{isBn ? 'পূর্ববর্তী পাতায় ফিরে যান' : 'Back to Bank Directory'}</span>
      </button>

      {/* Main Bank Header Banner */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden border border-slate-700/50">
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

          <div>
            <h1 className="text-xl sm:text-3xl font-extrabold tracking-tight break-words">
              {isBn ? bank.name_bn : bank.name}
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1 break-words">
              {isBn ? bank.name : bank.name_bn}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-700/80 text-xs">
            {/* SWIFT Box */}
            <div className="bg-white/5 backdrop-blur-xs p-4 rounded-2xl border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-slate-400 font-medium block text-[11px]">
                  {isBn ? 'হেড অফিস সুইফট/BIC কোড:' : 'Head Office SWIFT Code:'}
                </span>
                <span className="font-mono text-base sm:text-lg font-bold text-white tracking-wider">
                  {bank.swift_code}
                </span>
              </div>
              <CopyButton textToCopy={bank.swift_code} size="md" lang={lang} />
            </div>

            {/* Address & Official Site */}
            <div className="bg-white/5 backdrop-blur-xs p-4 rounded-2xl border border-white/10 space-y-1.5">
              <div className="flex items-start space-x-2 text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="break-words">{isBn ? bank.head_office_bn : bank.head_office}</span>
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
      <div className="bg-white dark:bg-slate-800/90 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-xs space-y-3">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <h2 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Building2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>
              {isBn
                ? `${bank.short_name}-এর শাখা ও রাউটিং তালিকা (${filteredBranches.length})`
                : `${bank.short_name} Branches & Routing Directory (${filteredBranches.length})`}
            </span>
          </h2>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            {/* District Filter Dropdown */}
            <div className="relative w-full sm:w-52">
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="w-full px-3 py-2 text-xs font-medium bg-slate-50 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600/80 rounded-xl text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
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
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={bankBranchQuery}
            onChange={(e) => setBankBranchQuery(e.target.value)}
            placeholder={
              isBn
                ? 'এই ব্যাংকের শাখা বা রাউটিং নম্বর লিখুন (যেমন গুলশান / ১২৫২৬০১২৩)...'
                : 'Search within this bank by branch name or routing number...'
            }
            className="w-full pl-10 pr-4 py-2.5 text-xs bg-slate-50 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500"
          />
        </div>
      </div>

      {/* Branch Grid */}
      {filteredBranches.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredBranches.map((br, index) => (
            <React.Fragment key={br.id}>
              <BranchCard
                branch={br}
                lang={lang}
                onSelectBranch={onSelectBranch}
                onOpenRoutingDecoder={onOpenRoutingDecoder}
                onOpenReportModal={onOpenReportModal}
              />
              {(index + 1) % 6 === 0 && <AdBanner className="col-span-1 md:col-span-2 lg:col-span-3" />}
            </React.Fragment>
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

      {/* In-depth Educational Blog & Guide Section for SEO */}
      <article className="bg-white dark:bg-slate-800/90 rounded-3xl border border-slate-200 dark:border-slate-700/80 p-6 sm:p-10 shadow-sm space-y-8 text-slate-800 dark:text-slate-200">
        <div className="border-b border-slate-200 dark:border-slate-700/80 pb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{isBn ? 'ব্যাংকিং গাইড ও নির্দেশিকা' : 'Official Banking Guide & Reference'}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight break-words">
            {guide.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
            {guide.summary}
          </p>
        </div>

        {/* Section 1: Bank Background */}
        <section className="space-y-3">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>{guide.historySection.heading}</span>
          </h3>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            {guide.historySection.content}
          </p>
        </section>

        {/* Section 2: Routing Guide & Structure */}
        <section className="space-y-3 bg-slate-50 dark:bg-slate-900/50 p-5 sm:p-6 rounded-2xl border border-slate-200/80 dark:border-slate-700/60">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Hash className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>{guide.routingGuideSection.heading}</span>
          </h3>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            {guide.routingGuideSection.content}
          </p>
          <ul className="space-y-2 pt-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            {guide.routingGuideSection.steps.map((step, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Section 3: Remittance Guide */}
        <section className="space-y-3">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Globe className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>{guide.remittanceGuideSection.heading}</span>
          </h3>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            {guide.remittanceGuideSection.content}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {guide.remittanceGuideSection.requiredDetails.map((item, idx) => (
              <div key={idx} className="bg-emerald-50/60 dark:bg-emerald-950/30 p-3.5 rounded-xl border border-emerald-200/70 dark:border-emerald-800/50">
                <div className="text-[11px] font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider">{item.label}</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white mt-0.5 break-words">{item.value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Transfer Channels Comparison */}
        <section className="space-y-3">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <ArrowRightLeft className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>{isBn ? 'তহবিল স্থানান্তরের মাধ্যম তুলনা' : 'Electronic Funds Transfer Methods'}</span>
          </h3>
          
          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100 dark:bg-slate-700/60 text-slate-800 dark:text-slate-200 font-bold border-b border-slate-200 dark:border-slate-700">
                <tr>
                  <th className="p-3 sm:p-4">{isBn ? 'পেমেন্ট চ্যানেল' : 'Payment Method'}</th>
                  <th className="p-3 sm:p-4">{isBn ? 'গতি' : 'Settlement Speed'}</th>
                  <th className="p-3 sm:p-4">{isBn ? 'লেনদেন সীমা' : 'Limit'}</th>
                  <th className="p-3 sm:p-4">{isBn ? 'ব্যবহারের উপযুক্ত ক্ষেত্র' : 'Best Used For'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700/60 text-slate-700 dark:text-slate-300">
                {guide.transferComparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                    <td className="p-3 sm:p-4 font-bold text-slate-900 dark:text-white">{row.type}</td>
                    <td className="p-3 sm:p-4 text-emerald-600 dark:text-emerald-400 font-medium">{row.speed}</td>
                    <td className="p-3 sm:p-4">{row.limit}</td>
                    <td className="p-3 sm:p-4">{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5: Bank FAQs Accordion */}
        <section className="space-y-3 pt-2">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>{isBn ? 'সচরাচর জিজ্ঞাসিত প্রশ্নাবলি (FAQ)' : 'Frequently Asked Questions (FAQ)'}</span>
          </h3>

          <div className="space-y-2.5">
            {guide.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 dark:border-slate-700/80 overflow-hidden bg-slate-50/50 dark:bg-slate-900/30 transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:bg-slate-100/50 dark:hover:bg-slate-800/50 cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="p-4 pt-0 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/40 dark:border-slate-700/40 mt-1">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </article>
    </div>
  );
};
