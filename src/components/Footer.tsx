import React from 'react';
import { ShieldAlert, FileText, Database, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { Link } from 'react-router-dom';

interface FooterProps {
  lang: Language;
  onOpenReportModal: () => void;
    }

export const Footer: React.FC<FooterProps> = ({
  lang,
  onOpenReportModal,
    }) => {
  const isBn = lang === 'bn';

  return (
    <footer className="bg-slate-900 text-slate-300 mt-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Purpose */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-sm">
                BD
              </div>
              <span className="font-bold text-lg text-white font-sans">BD Bank Info</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {isBn
                ? 'বাংলাদেশের ব্যাংক সমূহের Routing Number, SWIFT Code এবং Branch Information দ্রুত খুঁজে পাওয়ার সবচেয়ে সহজ মাধ্যম।'
                : 'Fast, reliable directory for Bangladesh Bank Routing Numbers, SWIFT Codes, and Branch Information.'}
            </p>
            <div className="pt-1">
              <button
                onClick={onOpenReportModal}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20 hover:bg-amber-500/20 transition-all cursor-pointer"
              >
                <HeartHandshake className="w-3.5 h-3.5" />
                <span>{isBn ? 'তথ্য ভুল মনে হচ্ছে? জানান' : 'Report Wrong Info'}</span>
              </button>
            </div>
          </div>

          {/* Directory Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">
              {isBn ? 'ডিরেক্টরি' : 'Directory'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  to="/banks"
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  {isBn ? 'ব্যাংক তালিকা (All Banks)' : 'All Banks List'}
                </Link>
              </li>
              <li>
                <Link
                  to="/routing"
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  {isBn ? 'রাউটিং নম্বর ডিরেক্টরি' : 'Routing Numbers Directory'}
                </Link>
              </li>
              <li>
                <Link
                  to="/swift"
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  {isBn ? 'সুইফট/BIC কোড ফাইন্ডার' : 'SWIFT / BIC Code Finder'}
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  {isBn ? 'সার্বজনীন অনুসন্ধান (Universal Search)' : 'Universal Fast Search'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Trust & Data Disclaimer */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-emerald-400" />
              <span>{isBn ? 'সতর্কতা ও উৎস' : 'Disclaimer'}</span>
            </h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              {isBn
                ? 'এই ওয়েবসাইটের সকল ডাটা বাংলাদেশ ব্যাংক (Bangladesh Bank) প্রকাশিত BEFTN মাস্টার ফাইল থেকে সংগ্রহ করা হয়েছে। বড় ধরনের আর্থিক লেনদেনের পূর্বে সংশ্লিষ্ট ব্যাংকের সাথে নিশ্চিত হবার পরামর্শ দেওয়া হচ্ছে।'
                : 'Data compiled from official Bangladesh Bank BEFTN records. BD Bank Info is an independent reference guide and not affiliated with Bangladesh Bank.'}
            </p>
            <div className="text-[10px] text-emerald-400/90 font-mono pt-1">
              Ref: BB BPSD(ET)552/2026 • Verified March 2026
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800 text-center sm:flex sm:justify-between sm:text-left text-xs text-slate-500">
          <p>© {new Date().getFullYear()} BD Bank Info. Fast, Lightweight & Open Reference.</p>
          <p className="mt-2 sm:mt-0">
            {isBn ? 'বাংলাদেশে তৈরি 🇧🇩 • SEO-Optimized Static Engine' : 'Made for Bangladesh 🇧🇩 • Static SEO Architecture'}
          </p>
        </div>
      </div>
    </footer>
  );
};
