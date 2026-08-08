import React, { useState } from 'react';
import { Share2, Check, MessageSquare, Copy, ExternalLink, Send } from 'lucide-react';

interface ShareButtonProps {
  title: string;
  text: string;
  url?: string;
  lang?: 'en' | 'bn';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const ShareButton: React.FC<ShareButtonProps> = ({
  title,
  text,
  url,
  lang = 'bn',
  className = '',
  size = 'sm',
}) => {
  const [copied, setCopied] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const isBn = lang === 'bn';

  const targetUrl = url || window.location.href;
  const shareTextCombined = `${title}\n${text}\n🔗 ${targetUrl}`;

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: `${text} - BD Bank Info`,
          url: targetUrl,
        });
        return;
      } catch {
        // User cancelled or unsupported, fallback to dropdown
      }
    }
    setShowDropdown((prev) => !prev);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(targetUrl);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setShowDropdown(false);
    }, 2000);
  };

  const handleWhatsAppShare = () => {
    const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareTextCombined)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setShowDropdown(false);
  };

  const handleTelegramShare = () => {
    const tgUrl = `https://t.me/share/url?url=${encodeURIComponent(targetUrl)}&text=${encodeURIComponent(title + '\n' + text)}`;
    window.open(tgUrl, '_blank', 'noopener,noreferrer');
    setShowDropdown(false);
  };

  const sizeClasses = {
    sm: 'px-2.5 py-1 text-[11px] gap-1 rounded-full',
    md: 'px-3 py-1.5 text-xs font-semibold gap-1.5 rounded-xl',
    lg: 'px-4 py-2 text-xs sm:text-sm font-semibold gap-2 rounded-xl',
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={handleNativeShare}
        className={`inline-flex items-center justify-center font-semibold transition-all duration-200 border cursor-pointer select-none bg-emerald-50/80 hover:bg-emerald-100 text-emerald-800 border-emerald-200/80 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/60 dark:hover:bg-emerald-900/60 shadow-xs active:scale-95 ${sizeClasses[size]} ${className}`}
        title={isBn ? 'শেয়ার করুন (WhatsApp, Messenger, Copy)' : 'Share details'}
      >
        <Share2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
        <span>{isBn ? 'শেয়ার' : 'Share'}</span>
      </button>

      {/* Share Options Popup */}
      {showDropdown && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setShowDropdown(false)}
          />
          <div className="absolute right-0 bottom-full mb-2 sm:bottom-auto sm:top-full sm:mt-2 w-56 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl z-50 p-2 space-y-1 animate-pop-spring">
            <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 border-b border-slate-100 dark:border-slate-700/60 mb-1">
              {isBn ? 'শেয়ারের মাধ্যম নির্বাচন করুন' : 'Select Share Option'}
            </div>

            {/* WhatsApp */}
            <button
              onClick={handleWhatsAppShare}
              className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded-xl transition-colors cursor-pointer"
            >
              <div className="w-6 h-6 rounded-lg bg-emerald-500 text-white flex items-center justify-center">
                <MessageSquare className="w-3.5 h-3.5" />
              </div>
              <span className="flex-1 text-left">WhatsApp</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </button>

            {/* Telegram */}
            <button
              onClick={handleTelegramShare}
              className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-sky-50 dark:hover:bg-sky-900/30 rounded-xl transition-colors cursor-pointer"
            >
              <div className="w-6 h-6 rounded-lg bg-sky-500 text-white flex items-center justify-center">
                <Send className="w-3.5 h-3.5" />
              </div>
              <span className="flex-1 text-left">Telegram</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </button>

            {/* Direct Copy URL */}
            <button
              onClick={handleCopyLink}
              className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700/60 rounded-xl transition-colors cursor-pointer"
            >
              <div className="w-6 h-6 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center">
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              </div>
              <span className="flex-1 text-left">
                {copied ? (isBn ? 'লিঙ্ক কপি হয়েছে!' : 'Link Copied!') : (isBn ? 'লিঙ্ক কপি করুন' : 'Copy Share Link')}
              </span>
            </button>
          </div>
        </>
      )}
    </div>
  );
};
