import React from 'react';
import { Building2, ShieldCheck, Zap, Database, ArrowLeft } from 'lucide-react';
import { Language } from '../types';

interface PageProps {
  lang: Language;
  onBack: () => void;
}

export const AboutPage: React.FC<PageProps> = ({ lang, onBack }) => {
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
          <div className="w-12 h-12 rounded-2xl bg-emerald-600 flex items-center justify-center text-white font-black text-xl shadow-md">
            BD
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {isBn ? 'আমাদের সম্পর্কে (About Us)' : 'About BD Bank Info'}
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {isBn ? 'বাংলাদেশের সবচেয়ে দ্রুতগতির ও সঠিক ব্যাংক রাউটিং নম্বর ডিরেক্টরি' : 'Fastest & verified bank routing directory in Bangladesh'}
            </p>
          </div>
        </div>

        <hr className="border-slate-200 dark:border-slate-700" />

        <div className="space-y-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <p>
            {isBn
              ? 'BD Bank Info হলো একটি উন্মুক্ত ও নিরপেক্ষ অনলাইন তথ্য ডিরেক্টরি প্ল্যাটফর্ম, যা বাংলাদেশের সকল তফসিলি ব্যাংকের BEFTN রাউটিং নম্বর, সুইফট কোড (SWIFT/BIC Code), শাখার ঠিকানা এবং মোবাইল ফোন নম্বর এক প্ল্যাটফর্মে সহজে খুঁজে পাওয়ার সুবিধার্থে তৈরি করা হয়েছে।'
              : 'BD Bank Info is an open and independent digital reference portal created to help individuals, businesses, and freelancers easily look up BEFTN Routing Numbers, SWIFT/BIC Codes, branch addresses, and contact numbers for all scheduled banks in Bangladesh.'}
          </p>

          <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 pt-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <span>{isBn ? 'আমাদের তথ্যের উৎস (Data Transparency)' : 'Data Transparency & Source'}</span>
          </h2>
          <p>
            {isBn
              ? 'আমাদের সকল তথ্য সরাসরি বাংলাদেশ ব্যাংক (Bangladesh Bank) প্রকাশিত অফিশিয়াল BEFTN (Bangladesh Electronic Funds Transfer Network) মাস্টার ফাইল থেকে নিয়মিত আপডেট করা হয়। ফলে আপনি কোনো ঝামেলা ছাড়াই সঠিক এবং হালনাগাদকৃত রাউটিং নম্বর ব্যবহার করতে পারেন।'
              : 'Our records are compiled directly from Bangladesh Bank master BEFTN releases. We ensure high data accuracy so you can initiate electronic fund transfers (BEFTN/NPSB/RTGS) and foreign remittances with confidence.'}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-600 space-y-2">
              <Zap className="w-5 h-5 text-amber-500" />
              <h3 className="font-bold text-xs text-slate-900 dark:text-white">{isBn ? 'দ্রুত ও আল্ট্রা ফাস্ট' : 'Ultra Fast Search'}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                {isBn ? 'কোনো পেজ রিলোড ছাড়াই যেকোনো ব্যাংক বা ব্রাঞ্চের নাম ও কোড তাৎক্ষণিক সার্চ করার প্রযুক্তি।' : 'Instant client-side filter engine with zero page delay.'}
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-600 space-y-2">
              <Database className="w-5 h-5 text-emerald-500" />
              <h3 className="font-bold text-xs text-slate-900 dark:text-white">{isBn ? 'নির্ভুল ডাটাবেজ' : 'Verified Records'}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                {isBn ? 'বাংলাদেশ ব্যাংকের সর্বশেষ মাস্টার সার্কুলার অনুযায়ী ব্যাংকের ব্রাঞ্চ কোড ও ডাটা সমন্বিত।' : 'Cross-checked with official BB master listings for 2026.'}
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-600 space-y-2">
              <Building2 className="w-5 h-5 text-sky-500" />
              <h3 className="font-bold text-xs text-slate-900 dark:text-white">{isBn ? 'ওয়ান-ক্লিক কপি' : 'One-Click Copy'}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                {isBn ? 'সহজেই এক ক্লিকে রাউটিং নম্বর ও সুইফট কোড কপি করার সুবিধা।' : 'Quickly copy 9-digit routing numbers and SWIFT codes.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
