import React from 'react';

interface SkeletonLoaderProps {
  count?: number;
}

export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={idx}
          className="bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 p-5 shadow-xs animate-pulse space-y-4"
        >
          {/* Header Badges */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-24 h-6 bg-slate-200 dark:bg-slate-700 rounded-full" />
              <div className="w-16 h-6 bg-slate-200 dark:bg-slate-700 rounded-full" />
            </div>
            <div className="w-20 h-4 bg-slate-200 dark:bg-slate-700 rounded" />
          </div>

          {/* Title & Subtitle */}
          <div className="space-y-2">
            <div className="w-3/4 h-5 bg-slate-200 dark:bg-slate-700 rounded-lg" />
            <div className="w-1/2 h-3 bg-slate-100 dark:bg-slate-700/60 rounded" />
          </div>

          {/* Routing Box Placeholder */}
          <div className="bg-slate-100 dark:bg-slate-700/40 p-3.5 rounded-2xl space-y-2 border border-slate-200/50 dark:border-slate-700/50">
            <div className="flex items-center justify-between">
              <div className="w-28 h-3 bg-slate-200 dark:bg-slate-600 rounded" />
              <div className="w-12 h-3 bg-slate-200 dark:bg-slate-600 rounded" />
            </div>
            <div className="w-full h-9 bg-slate-200 dark:bg-slate-600/80 rounded-xl" />
          </div>

          {/* Footer Bar */}
          <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
            <div className="w-20 h-4 bg-slate-200 dark:bg-slate-700 rounded" />
            <div className="w-20 h-4 bg-slate-200 dark:bg-slate-700 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
};
