import React from 'react';
import { FileQuestion, Home, ArrowLeft } from 'lucide-react';
import { Language } from '../types';

interface PageProps {
  lang: Language;
  onHome: () => void;
}

export const NotFoundPage: React.FC<PageProps> = ({ lang, onHome }) => {
  const isBn = lang === 'bn';

  return (
    <div className="max-w-xl mx-auto px-4 py-16 text-center space-y-6">
      <div className="w-20 h-20 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 rounded-3xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 mx-auto shadow-md">
        <FileQuestion className="w-10 h-10" />
      </div>

      <div className="space-y-2">
        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
          ERROR 404
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {isBn ? 'পেজটি পাওয়া যায়নি (Page Not Found)' : 'Page Not Found'}
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
          {isBn
            ? 'আপনি যে পেজ বা ইউআরআর-টি খুঁজছেন তা মুছে ফেলা হয়েছে অথবা ঠিকানাটি ভুল লেখা হয়েছে।'
            : 'The page or URL you are looking for does not exist or may have been moved.'}
        </p>
      </div>

      <div className="pt-2 flex items-center justify-center gap-3">
        <button
          onClick={onHome}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors shadow-md cursor-pointer"
        >
          <Home className="w-4 h-4" />
          <span>{isBn ? 'হোমপেজে ফিরে যান' : 'Back to Home'}</span>
        </button>
      </div>
    </div>
  );
};
