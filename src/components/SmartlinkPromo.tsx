import React from 'react';
import { ExternalLink, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { Language } from '../types';

interface SmartlinkProps {
  variant?: 'button' | 'banner' | 'pill' | 'card';
  lang?: Language;
  className?: string;
}

export const SMARTLINK_URL = "https://www.profitableratecpmnetwork.com/rk5tqkzpyc?key=806a9b382333bd0069c0001d6d6ee27d";

export const SmartlinkPromo: React.FC<SmartlinkProps> = ({
  variant = 'button',
  lang = 'en',
  className = '',
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Open smartlink in new window safely
  };

  if (variant === 'pill') {
    return (
      <a
        href={SMARTLINK_URL}
        target="_blank"
        rel="noopener noreferrer sponsored"
        onClick={handleClick}
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-linear-to-r from-emerald-500/10 to-teal-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-300/60 dark:border-emerald-700/60 hover:from-emerald-500/20 hover:to-teal-500/20 transition-all shadow-2xs group cursor-pointer ${className}`}
        title="Check Live Remittance & Banking Offers"
      >
        <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-400 group-hover:scale-110 transition-transform" />
        <span>
          {lang === 'bn'
            ? 'লাইভ রেমিট্যান্স রেট ও অফার'
            : lang === 'hi'
            ? 'सर्वोत्तम मनी ट्रांसफर व बैंकिंग ऑफर'
            : lang === 'ru'
            ? 'Лучшие банковские предложения'
            : 'Best Remittance & Money Transfer Deals'}
        </span>
        <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
      </a>
    );
  }

  if (variant === 'card') {
    return (
      <a
        href={SMARTLINK_URL}
        target="_blank"
        rel="noopener noreferrer sponsored"
        onClick={handleClick}
        className={`block p-4 sm:p-5 rounded-2xl bg-linear-to-br from-emerald-50 via-teal-50/50 to-amber-50/30 dark:from-slate-800/90 dark:via-emerald-950/30 dark:to-slate-800/90 border border-emerald-200/80 dark:border-emerald-800/60 hover:border-emerald-400 dark:hover:border-emerald-600 transition-all duration-200 shadow-xs hover:shadow-md group cursor-pointer ${className}`}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-600/30 group-hover:scale-105 transition-transform shrink-0">
              <Sparkles className="w-5 h-5 text-amber-200" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {lang === 'bn'
                    ? 'জিরো ফি মানি ট্রান্সফার ও স্পেশাল রেট'
                    : lang === 'hi'
                    ? 'जीरो फीस मनी ट्रांसफर व विशेष दरें'
                    : lang === 'ru'
                    ? 'Международные переводы с 0% комиссией'
                    : 'Zero-Fee International Money Transfer Offers'}
                </span>
                <span className="px-1.5 py-0.5 rounded text-[9px] font-bold uppercase bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-500/30">
                  Featured
                </span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5 line-clamp-1">
                {lang === 'bn'
                  ? 'আন্তর্জাতিক রেমিট্যান্স, ক্যাশব্যাক ও গ্লোবাল ব্যাংক অ্যাকাউন্ট অফার যাচাই করুন।'
                  : lang === 'hi'
                  ? 'विदेश से पैसे मंगाने या भेजने के लिए बेस्ट एक्सचेंज रेट व कैशबैक ऑफर देखें।'
                  : lang === 'ru'
                  ? 'Сравните лучшие курсы валют и спецпредложения для денежных переводов.'
                  : 'Compare lowest exchange fees, cashback bonuses & fast remittance partners.'}
              </p>
            </div>
          </div>
          <div className="shrink-0 flex items-center text-xs font-bold text-emerald-700 dark:text-emerald-400 group-hover:translate-x-0.5 transition-transform">
            <ExternalLink className="w-4 h-4" />
          </div>
        </div>
      </a>
    );
  }

  // Default Button style
  return (
    <a
      href={SMARTLINK_URL}
      target="_blank"
      rel="noopener noreferrer sponsored"
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-linear-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs shadow-md shadow-emerald-600/20 hover:shadow-lg hover:shadow-emerald-600/30 active:scale-95 transition-all cursor-pointer ${className}`}
    >
      <Sparkles className="w-4 h-4 text-amber-300 fill-amber-300" />
      <span>
        {lang === 'bn'
          ? 'সেরা রেমিট্যান্স ও এক্সচেঞ্জ অফার দেখুন'
          : lang === 'hi'
          ? 'सर्वश्रेष्ठ रेमिटेंस व कैशबैक ऑफर देखें'
          : lang === 'ru'
          ? 'Лучшие предложения по переводам'
          : 'Check Best Remittance & Exchange Rates'}
      </span>
      <ExternalLink className="w-3.5 h-3.5 opacity-80" />
    </a>
  );
};
