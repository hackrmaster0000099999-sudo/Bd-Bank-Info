import React from 'react';
import { ShieldAlert, FileText, Database, HeartHandshake, CheckCircle2, Clock, Star } from 'lucide-react';
import { Language } from '../types';
import { Link } from 'react-router-dom';
import { translations } from '../lib/translations';
import { CURRENT_DATA_VERSION_DATE } from '../lib/seoManager';

interface FooterProps {
  lang: Language;
  onOpenReportModal: () => void;
  onOpenRatingModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onOpenReportModal,
  onOpenRatingModal,
}) => {
  const t = translations[lang] || translations.en;
  const isBn = lang === 'bn';
  const isHi = lang === 'hi';

  return (
    <footer className="bg-slate-900 text-slate-300 mt-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand & Purpose */}
          <div className="sm:col-span-2 md:col-span-1 space-y-3">
            <Link to="/" className="inline-block group">
              <picture>
                <source srcSet="/logo.webp" type="image/webp" />
                <img 
                  src="/logo.png" 
                  alt="World Bank Codes" 
                  width="240"
                  height="48"
                  loading="lazy"
                  className="h-11 sm:h-12 w-auto max-w-[240px] object-contain rounded-lg drop-shadow-sm group-hover:opacity-95 transition-opacity"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement?.parentElement?.querySelector('.footer-fallback-logo')?.classList.remove('hidden');
                  }}
                />
              </picture>
              <div className="footer-fallback-logo hidden flex items-center space-x-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold text-sm tracking-wider shadow-md shadow-emerald-600/30">
                  WBC
                </div>
                <span className="font-bold text-lg text-white font-sans">World Bank Codes</span>
              </div>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t.footerDesc}
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {onOpenRatingModal && (
                <button
                  onClick={onOpenRatingModal}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30 hover:bg-amber-500/25 transition-all cursor-pointer shadow-xs"
                >
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{isHi ? 'रेटिंग व फीडबैक' : isBn ? 'রেটিং ও মতামত দিন' : lang === 'ru' ? 'Оцените нас ⭐' : 'Rate Us ⭐'}</span>
                </button>
              )}
              <button
                onClick={onOpenReportModal}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 transition-all cursor-pointer"
              >
                <HeartHandshake className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.reportIssue}</span>
              </button>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-800/80">
                <Clock className="w-3 h-3 text-emerald-400" />
                <span>{lang === 'hi' ? `डेटा अपडेट: ${CURRENT_DATA_VERSION_DATE}` : lang === 'bn' ? `সর্বশেষ আপডেট: ${CURRENT_DATA_VERSION_DATE}` : `DB Sync: ${CURRENT_DATA_VERSION_DATE}`}</span>
              </span>
            </div>
          </div>

          {/* Directory Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">
              {t.bankBranchDirectory}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  to="/banks"
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  {t.allBanks}
                </Link>
              </li>
              <li>
                <Link
                  to="/routing"
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  {t.routingNumberTitle} / IFSC
                </Link>
              </li>
              <li>
                <Link
                  to="/swift"
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  {t.swiftCodeTitle}
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  {t.quickSearch}
                </Link>
              </li>
            </ul>
          </div>

          {/* Essential Legal & EEAT Pages */}
          <div>
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">
              {lang === 'hi' ? 'महत्वपूर्ण पृष्ठ' : lang === 'bn' ? 'প্রয়োজনীয় পেজ' : 'Essential Pages'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/about" className="hover:text-emerald-400 transition-colors cursor-pointer">
                  {t.aboutUs}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-400 transition-colors cursor-pointer">
                  {t.contactUs}
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-emerald-400 transition-colors cursor-pointer">
                  {t.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="hover:text-emerald-400 transition-colors cursor-pointer">
                  {t.disclaimer}
                </Link>
              </li>
            </ul>
          </div>

          {/* Authority & Disclaimer Note */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.verifiedCodes}</span>
            </h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              {lang === 'hi'
                ? 'सभी बैंक कोड, IFSC, MICR और SWIFT कोड्स आधिकारिक स्रोतों (RBI, BB) से सत्यापित किए जाते हैं। फिर भी बड़े लेन-देन से पहले अपनी शाखा से पुष्टि अवश्य करें।'
                : lang === 'bn'
                ? 'সকল ব্যাংক কোড, রাউটিং ও সুইফট কোড নিয়মিত বাংলাদেশ ব্যাংক এবং সংশ্লিষ্ট ব্যাংক সূত্র হতে যাচাই করা হয়।'
                : 'All bank codes, routing numbers, and SWIFT codes are cross-verified against official central bank records.'}
            </p>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} World Bank Codes. All rights reserved.</p>
          <p className="text-[11px] text-slate-500">
            Global Bank Routing Numbers, IFSC, Sort Codes, BIK & SWIFT Directory
          </p>

        </div>
      </div>
    </footer>
  );
};
