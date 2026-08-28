import React from 'react';
import { ShieldAlert, FileText, ArrowLeft } from 'lucide-react';
import { Language } from '../types';

interface PageProps {
  lang: Language;
  onBack: () => void;
}

export const DisclaimerPage: React.FC<PageProps> = ({ lang, onBack }) => {
  const isBn = lang === 'bn';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-xs cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
        <span>{isBn ? 'হোমপেজে ফিরে যান' : 'Back to Home'}</span>
      </button>

      <div className="bg-white dark:bg-slate-800/90 rounded-3xl border border-slate-200 dark:border-slate-700 p-6 sm:p-10 shadow-sm space-y-6 text-slate-800 dark:text-slate-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950 flex items-center justify-center text-amber-600 dark:text-amber-400">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {isBn ? 'ডিসক্লেমার ও দায়মুক্তি (Disclaimer)' : 'Disclaimer & Terms of Use'}
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {isBn ? 'তথ্যের সঠিকতা ও উৎস সংক্রান্ত গুরুত্বপূর্ণ বার্তা' : 'Important information regarding data accuracy & sources'}
            </p>
          </div>
        </div>

        <hr className="border-slate-200 dark:border-slate-700" />

        <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <div className="bg-amber-50 dark:bg-amber-950/40 p-4 rounded-2xl border border-amber-200 dark:border-amber-800/60 text-amber-900 dark:text-amber-300">
            <p className="font-semibold">
              {isBn
                ? 'সতর্কতা: বড় ধরনের অর্থনৈতিক লেনদেন করার পূর্বে সংশ্লিষ্ট ব্যাংক বা শাখার সাথে রাউটিং নম্বর নিশ্চিত হয়ে নেওয়ার অনুরোধ করা হচ্ছে।'
                : 'Notice: Before initiating large interbank financial transfers or foreign remittances, always confirm routing details directly with the beneficiary bank.'}
            </p>
          </div>

          <h2 className="text-sm font-bold text-slate-900 dark:text-white pt-2">
            {isBn ? '১. তথ্যের উৎস (Data Source)' : '1. Source of Data'}
          </h2>
          <p>
            {isBn
              ? 'এই ওয়েবসাইটে প্রদর্শিত ব্যাংক, শাখা, রাউটিং নম্বর এবং সুইফট কোডসমূহ সরাসরি কেন্দ্রীয় ব্যাংক ও আর্থিক কর্তৃপক্ষের পাবলিক মাস্টার ফাইল এবং আন্তর্জাতিক ব্যাংকিং ডাটাবেজ থেকে সংগৃহীত। World Bank Codes একটি স্বাধীন রেফারেন্স তথ্য সার্ভিস এবং কোনো সরকারি বা কেন্দ্রীয় ব্যাংকের সাথে সরাসরি যুক্ত কোনো প্রতিষ্ঠান নয়।'
              : 'All bank routing numbers, branch records, and SWIFT codes published on World Bank Codes are compiled from central bank records and international banking datasets. World Bank Codes is an independent reference guide.'}
          </p>

          <h2 className="text-sm font-bold text-slate-900 dark:text-white pt-2">
            {isBn ? '২. তথ্যের দায়বদ্ধতা (Limitation of Liability)' : '2. Limitation of Liability'}
          </h2>
          <p>
            {isBn
              ? 'আমরা তথ্যের সর্বোচ্চ নির্ভুলতা বজায় রাখার চেষ্টা করি। তবুও ব্যাংকের শাখা পরিবর্তন বা কোড হালনাগাদের কারণে অনিচ্ছাকৃত কোনো ভুল বা বিলম্বের ফলে সৃষ্ট আর্থিক ক্ষতির জন্য World Bank Codes দায়ী থাকবে না।'
              : 'While we strive to keep information complete and up to date, World Bank Codes makes no warranties of any kind about the completeness, reliability, or accuracy of the data.'}
          </p>
        </div>
      </div>
    </div>
  );
};
