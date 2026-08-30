import React from 'react';
import { FileQuestion, Home, Building2, Hash, Globe, ArrowLeft } from 'lucide-react';
import { Language } from '../types';

interface PageProps {
  lang: Language;
  onHome: () => void;
  onNavigate?: (path: string) => void;
}

export const NotFoundPage: React.FC<PageProps> = ({ lang, onHome, onNavigate }) => {
  const isBn = lang === 'bn';
  const isHi = lang === 'hi';
  const isRu = lang === 'ru';

  const navigateTo = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.location.href = path;
    }
  };

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
          {isRu
            ? 'Страница не найдена (404)'
            : isHi
            ? 'पेज नहीं मिला (404 - Page Not Found)'
            : isBn
            ? 'পেজটি পাওয়া যায়নি (Page Not Found)'
            : 'Page Not Found'}
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
          {isRu
            ? 'Запрошенная страница или реквизиты не найдены. Воспользуйтесь поиском или перейдите в один из разделов ниже.'
            : isHi
            ? 'आप जिस पेज या बैंक विवरण को खोज रहे हैं वह उपलब्ध नहीं है या पता बदल गया है।'
            : isBn
            ? 'আপনি যে পেজ বা ব্যাংকিং কোডটি খুঁজছেন তা পাওয়া যায়নি অথবা ঠিকানাটি ভুল লেখা হয়েছে।'
            : 'The page or banking code resource you are looking for does not exist or may have been moved.'}
        </p>
      </div>

      {/* Quick Navigation Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
        <button
          onClick={() => navigateTo('/')}
          className="flex flex-col items-center justify-center p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-emerald-500 text-slate-800 dark:text-slate-200 hover:text-emerald-600 transition-colors shadow-2xs cursor-pointer text-xs font-bold gap-1.5"
        >
          <Home className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>{isRu ? 'Главная' : isHi ? 'होम' : isBn ? 'হোমপেজ' : 'Home'}</span>
        </button>

        <button
          onClick={() => navigateTo('/banks')}
          className="flex flex-col items-center justify-center p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-emerald-500 text-slate-800 dark:text-slate-200 hover:text-emerald-600 transition-colors shadow-2xs cursor-pointer text-xs font-bold gap-1.5"
        >
          <Building2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>{isRu ? 'Все банки' : isHi ? 'सभी बैंक' : isBn ? 'সকল ব্যাংক' : 'All Banks'}</span>
        </button>

        <button
          onClick={() => navigateTo('/routing')}
          className="flex flex-col items-center justify-center p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-emerald-500 text-slate-800 dark:text-slate-200 hover:text-emerald-600 transition-colors shadow-2xs cursor-pointer text-xs font-bold gap-1.5 col-span-2 sm:col-span-1"
        >
          <Hash className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>{isRu ? 'Поиск БИК' : isHi ? 'राउटिंग/IFSC' : isBn ? 'রাউটিং কোড' : 'Routing Codes'}</span>
        </button>
      </div>

      <div className="pt-2 flex items-center justify-center gap-3">
        <button
          onClick={onHome}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors shadow-md cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{isRu ? 'Вернуться на главную' : isHi ? 'मुख्य पृष्ठ पर लौटें' : isBn ? 'হোমপেজে ফিরে যান' : 'Back to Home'}</span>
        </button>
      </div>
    </div>
  );
};
