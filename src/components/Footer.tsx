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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand & Purpose */}
          <div className="sm:col-span-2 md:col-span-1 space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-xs tracking-wider">
                WBC
              </div>
              <span className="font-bold text-lg text-white font-sans">World Bank Codes</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {isBn
                ? 'ব্যাংক সমূহের Routing Number, SWIFT / BIC Code এবং Branch Information দ্রুত খুঁজে পাওয়ার উন্মুক্ত গ্লোবাল ডিরেক্টরি।'
                : 'Fast, reliable global directory for Bank Routing Numbers, SWIFT Codes, and Branch Information worldwide.'}
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

          {/* Essential Legal & EEAT Pages */}
          <div>
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">
              {isBn ? 'প্রয়োজনীয় পেজ' : 'Essential Pages'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  to="/about"
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  {isBn ? 'আমাদের সম্পর্কে (About Us)' : 'About Us'}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  {isBn ? 'যোগাযোগ (Contact Us)' : 'Contact Us'}
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  {isBn ? 'প্রাইভেসি পলিসি (Privacy Policy)' : 'Privacy Policy'}
                </Link>
              </li>
              <li>
                <Link
                  to="/disclaimer"
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  {isBn ? 'ডিসক্লেমার (Disclaimer)' : 'Disclaimer'}
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
                ? 'এই ওয়েবসাইটের ব্যাংক কোড ও শাখা সংক্রান্ত ডাটা সংশ্লিষ্ট কেন্দ্রীয় ব্যাংক ও আন্তর্জাতিক ব্যাংকিং ফাইল থেকে সংগ্রহ করা হয়েছে। বড় ধরনের আর্থিক লেনদেনের পূর্বে সংশ্লিষ্ট ব্যাংকের সাথে তথ্য নিশ্চিত করার পরামর্শ দেওয়া হচ্ছে।'
                : 'Data compiled from official banking registers and BEFTN/SWIFT records. World Bank Codes is an independent reference guide.'}
            </p>
            <div className="text-[10px] text-emerald-400/90 font-mono pt-1">
              Ref: WBC-BPSD-2026 • Verified March 2026
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800 text-center sm:flex sm:justify-between sm:text-left text-xs text-slate-500">
          <p>© {new Date().getFullYear()} World Bank Codes (worldbankcodes.com). Fast, Lightweight & Open Reference.</p>
          <p className="mt-2 sm:mt-0">
            {isBn ? 'গ্লোবাল ব্যাংক কোড ডিরেক্টরি 🌐 • SEO-Optimized Static Engine' : 'Global Banking Directory 🌐 • Static SEO Architecture'}
          </p>
        </div>
      </div>
    </footer>
  );
};
