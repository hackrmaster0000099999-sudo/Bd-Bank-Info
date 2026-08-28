import React from 'react';
import { ShieldCheck, Lock, ArrowLeft } from 'lucide-react';
import { Language } from '../types';

interface PageProps {
  lang: Language;
  onBack: () => void;
}

export const PrivacyPage: React.FC<PageProps> = ({ lang, onBack }) => {
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
          <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
            <Lock className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {isBn ? 'প্রাইভেসি পলিসি (Privacy Policy)' : 'Privacy Policy'}
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {isBn ? 'সর্বশেষ হালনাগাদ: মার্চ ২০২৬' : 'Last Updated: March 2026'}
            </p>
          </div>
        </div>

        <hr className="border-slate-200 dark:border-slate-700" />

        <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <p>
            {isBn
              ? 'World Bank Codes ব্যবহারকারীদের তথ্যের গোপনীয়তা রক্ষায় অঙ্গীকারবদ্ধ। এই পেজে আমাদের গোপনীয়তা নীতি সম্পর্কে তথ্য দেওয়া হলো।'
              : 'At World Bank Codes, accessible from https://worldbankcodes.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by World Bank Codes and how we use it.'}
          </p>

          <h2 className="text-sm font-bold text-slate-900 dark:text-white pt-2">
            {isBn ? '১. সংগৃহীত তথ্য (Information We Collect)' : '1. Information We Collect'}
          </h2>
          <p>
            {isBn
              ? 'আমরা ব্যবহারকারীদের ব্যক্তিগত গোপনীয় তথ্য (যেমন জাতীয় পরিচয়পত্র, পাসওয়ার্ড, ব্যাংকিং পিন) সংগ্রহ করি না। সাইটের অভিজ্ঞতা উন্নত করতে কুকিজ এবং কুকিজ ভিত্তিক অ্যানালিটিক্স ব্যবহার করা হতে পারে।'
              : 'World Bank Codes does not collect personal financial or confidential user data like PINs, passwords, or bank account credentials. Standard log files and Google Analytics 4 (GA4) are utilized to analyze web traffic anonymously.'}
          </p>

          <h2 className="text-sm font-bold text-slate-900 dark:text-white pt-2">
            {isBn ? '২. গুগল অ্যানালিটিক্স ও কুকিজ (Cookies & Analytics)' : '2. Cookies & Analytics'}
          </h2>
          <p>
            {isBn
              ? 'আমাদের ওয়েবসাইট ব্যবহারের সময় ভিজিটর অভিজ্ঞতা এবং ট্রাফিক বিশ্লেষণ করার জন্য Google Analytics ব্যবহারের সুযোগ রয়েছে।'
              : 'We use standard browser cookies to store user preferences (e.g. language selection, dark mode preferences). Third-party vendors like Google Analytics process aggregate traffic metrics.'}
          </p>

          <h2 className="text-sm font-bold text-slate-900 dark:text-white pt-2">
            {isBn ? '৩. থার্ড-পার্টি লিংকসমূহ (Third-Party Links)' : '3. Third-Party Links'}
          </h2>
          <p>
            {isBn
              ? 'আমাদের ওয়েবসাইটে সরকারি বা ব্যাংকের অফিশিয়াল ওয়েবসাইটের বাহ্যিক লিংক থাকতে পারে। বাহ্যিক ওয়েবসাইটের পলিসির জন্য World Bank Codes দায়ী নয়।'
              : 'Our website may contain links to official bank portals or external resources. We are not responsible for the privacy practices of third-party websites.'}
          </p>
        </div>
      </div>
    </div>
  );
};
