import React from 'react';

interface AdBannerProps {
  className?: string;
}

export const AdBanner: React.FC<AdBannerProps> = ({ className = '' }) => {
  return (
    <div className={`w-full py-4 flex justify-center ${className}`}>
      <a 
        href="https://omg10.com/4/11497195" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block w-full max-w-2xl bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-slate-800/80 dark:to-emerald-900/20 border border-emerald-100/50 dark:border-emerald-800/30 rounded-2xl p-4 sm:p-5 text-center hover:shadow-md transition-all cursor-pointer group relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-[9px] font-bold px-2 py-0.5 rounded-bl-lg uppercase tracking-wider">
          Ad
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
          <div className="text-center sm:text-left">
            <span className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors block leading-tight mb-1">
              Unlock Exclusive Financial Offers
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 block">
              Click here to explore premium deals and opportunities tailored for you.
            </span>
          </div>
          <div className="mt-2 sm:mt-0 sm:ml-auto">
            <span className="inline-block bg-emerald-600 text-white text-xs font-semibold px-4 py-2 rounded-xl shadow-sm group-hover:bg-emerald-500 transition-colors">
              Explore Now
            </span>
          </div>
        </div>
      </a>
    </div>
  );
};
