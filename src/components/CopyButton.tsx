import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Language } from '../types';

interface CopyButtonProps {
  textToCopy: string;
  label?: string;
  lang?: Language;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const CopyButton: React.FC<CopyButtonProps> = ({
  textToCopy,
  label,
  lang = 'bn',
  className = '',
  size = 'md'
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  const isBn = lang === 'bn';
  const copiedText = isBn ? 'অনুলিপি করা হয়েছে ✓' : 'Copied ✓';
  const copyText = label || (isBn ? 'কপি করুন' : 'Copy');

  const sizeClasses = {
    sm: 'px-2.5 py-1 text-[11px] gap-1 rounded-full',
    md: 'px-3.5 py-1.5 text-xs font-semibold gap-1.5 rounded-xl',
    lg: 'px-4 py-2 text-xs sm:text-sm font-semibold gap-2 rounded-xl'
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={`Copy ${textToCopy}`}
      className={`inline-flex items-center justify-center font-medium transition-all duration-200 border active:scale-95 cursor-pointer select-none ${
        copied
          ? 'bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-600/25 ring-2 ring-emerald-500/30 scale-105 animate-pop-spring'
          : 'bg-emerald-50/80 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border-emerald-200/80 dark:border-emerald-800/60 hover:bg-emerald-100/80 dark:hover:bg-emerald-900/60 hover:border-emerald-300/80 dark:hover:border-emerald-700/80 hover:shadow-xs'
      } ${sizeClasses[size]} ${className}`}
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-white animate-check-pop stroke-[2.5]" />
          <span className="animate-pop-spring font-bold">{copiedText}</span>
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400 transition-transform group-hover:scale-110" />
          <span>{copyText}</span>
        </>
      )}
    </button>
  );
};
