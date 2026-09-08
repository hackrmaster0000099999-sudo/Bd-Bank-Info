import React, { useState } from 'react';
import {
  BookOpen,
  Calendar,
  Clock,
  User,
  ShieldCheck,
  Building2,
  Share2,
  Copy,
  Check,
  ChevronRight,
  ArrowLeft,
  HelpCircle,
  Hash,
  Globe,
  ExternalLink,
  Info,
  MapPin,
  FileText
} from 'lucide-react';
import { BankArticle, Language, Branch } from '../types';
import { getBranchesForBank } from '../lib/searchEngine';
import { CURRENT_DATA_VERSION_DATE } from '../lib/seoManager';

interface ArticleDetailViewProps {
  article: BankArticle;
  lang: Language;
  onBack: () => void;
  onSelectBank: (bankId: string) => void;
  onSelectBranch: (branch: Branch) => void;
  onOpenRoutingDecoder: (routing: string) => void;
}

export const ArticleDetailView: React.FC<ArticleDetailViewProps> = ({
  article,
  lang,
  onBack,
  onSelectBank,
  onSelectBranch,
  onOpenRoutingDecoder
}) => {
  const [copied, setCopied] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const isRussian = lang === 'ru' || article.country === 'ru';
  const isHindi = !isRussian && (lang === 'hi' || article.country === 'in');
  const isBengali = !isRussian && !isHindi && (lang === 'bn' || article.country === 'bd');
  const isGerman = !isRussian && !isHindi && !isBengali && (lang === 'de' || article.country === 'de');

  const title = isRussian && article.title_ru
    ? article.title_ru
    : isHindi && article.title_hi
    ? article.title_hi
    : isBengali && article.title_bn
    ? article.title_bn
    : isGerman && article.title_de
    ? article.title_de
    : article.title;

  const subtitle = isRussian && article.subtitle_ru
    ? article.subtitle_ru
    : isHindi && article.subtitle_hi
    ? article.subtitle_hi
    : isBengali && article.subtitle_bn
    ? article.subtitle_bn
    : isGerman && article.subtitle_de
    ? article.subtitle_de
    : article.subtitle;

  const overview = isRussian && article.overview_ru
    ? article.overview_ru
    : isHindi && article.overview_hi
    ? article.overview_hi
    : isBengali && article.overview_bn
    ? article.overview_bn
    : isGerman && article.overview_de
    ? article.overview_de
    : article.overview;

  // Get branches of this bank for direct exploration
  const branches = getBranchesForBank(article.bank_id);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Breadcrumb */}
      <nav className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400">
        <button
          onClick={onBack}
          className="hover:text-emerald-600 dark:hover:text-emerald-400 cursor-pointer font-medium"
        >
          {lang === 'de'
            ? 'Alle Artikel & Blog'
            : lang === 'ru'
            ? 'Все статьи и блог'
            : lang === 'hi'
            ? 'सभी बैंकिंग लेख'
            : lang === 'bn'
            ? 'সকল আর্টিকেল ও ব্লগ'
            : 'All Articles & Blog'}
        </button>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-slate-800 dark:text-slate-200 font-semibold truncate max-w-xs sm:max-w-md">
          {title}
        </span>
      </nav>

      {/* Article Header & Hero */}
      <header className="bg-white dark:bg-slate-800/90 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-700/80 shadow-sm space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/80">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>
                {article.country === 'de'
                  ? (lang === 'de' ? 'BaFin & EdB (100.000 € Einlagensicherung) Leitfaden 2026' : lang === 'bn' ? 'বাফিন ও এডিবি (১০০,০০০ ইউরো ডিপোজিট স্কিম) গাইড ২০২৬' : lang === 'hi' ? 'BaFin एवं EdB (100,000 € डिपॉजिट गारंटी) गाइड 2026' : lang === 'ru' ? 'BaFin и защита вкладов EdB (100 000 €) 2026' : 'BaFin & EdB (€100,000 Deposit Guarantee) Guide 2026')
                  : article.country === 'uk'
                  ? (lang === 'bn' ? 'ব্যাংক অব ইংল্যান্ড ও FSCS বিমাকৃত গাইড ২০২৬' : lang === 'hi' ? 'बैंक ऑफ इंग्लैंड एवं FSCS प्रमाणित गाइड 2026' : lang === 'ru' ? 'Банк Англии и страхование FSCS 2026' : 'Bank of England & FSCS Protected Guide 2026')
                  : article.country === 'us'
                  ? (lang === 'bn' ? 'ফেডারেল রিজার্ভ ও FDIC নিবন্ধিত গাইড ২০২৬' : lang === 'hi' ? 'फेडरल रिजर्व एवं FDIC प्रमाणित गाइड 2026' : lang === 'ru' ? 'ФРС США и страхование FDIC 2026' : 'Federal Reserve & FDIC Insured Guide 2026')
                  : article.country === 'ru'
                  ? (lang === 'ru' ? 'Официальное руководство ЦБ РФ 2026' : lang === 'bn' ? 'সেন্ট্রাল ব্যাংক অব রাশিয়া সার্টিফাইড ২০২৬' : 'Central Bank of Russia (CBR) Certified Guide 2026')
                  : article.country === 'in'
                  ? (lang === 'hi' ? 'आरबीआई अधिकृत बैंकिंग मार्गदर्शिका 2026' : lang === 'bn' ? 'আরবিআই অনুমোদিত ব্যাংকিং গাইড ২০২৬' : 'Reserve Bank of India (RBI) Certified Guide 2026')
                  : (lang === 'bn' ? 'বাংলাদেশ ব্যাংক অনুমোদিত গাইড ২০২৬' : 'Bangladesh Bank Certified Guide 2026')}
              </span>
            </span>

            <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.read_time}</span>
            </span>
          </div>

          <button
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
            <span>
              {copied
                ? (lang === 'de' ? 'Link kopiert!' : lang === 'ru' ? 'Ссылка скопирована!' : lang === 'hi' ? 'लिंक कॉपी हो गया!' : lang === 'bn' ? 'লিংক কপি হয়েছে!' : 'Link Copied!')
                : (lang === 'de' ? 'Artikel teilen' : lang === 'ru' ? 'Поделиться статьей' : lang === 'hi' ? 'शेयर करें' : lang === 'bn' ? 'শেয়ার করুন' : 'Share Article')}
            </span>
          </button>
        </div>

        <div className="space-y-4">
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            {title}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {subtitle}
          </p>
        </div>

        {/* Author & Verification Meta */}
        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-700/60 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-slate-400" />
            <span>{isGerman ? 'Autor:' : isRussian ? 'Автор:' : isHindi ? 'लेखक:' : isBengali ? 'লেখক:' : 'Author:'} <strong className="text-slate-700 dark:text-slate-200">{article.author}</strong></span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>{isGerman ? 'Aktualisiert:' : isRussian ? 'Обновлено:' : isHindi ? 'अंतिम अपडेट:' : isBengali ? 'সর্বশেষ সংস্করণ:' : 'Updated:'} <strong className="text-emerald-700 dark:text-emerald-300">{CURRENT_DATA_VERSION_DATE}</strong></span>
          </div>
          <button
            onClick={() => onSelectBank(article.bank_id)}
            className="ml-auto inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:underline font-bold cursor-pointer"
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>{isGerman ? `Bankseite & Filialen (${branches.length})` : isRussian ? `Страница банка и филиалы (${branches.length})` : isHindi ? `बैंक का मुख्य पेज एवं शाखाएं (${branches.length})` : isBengali ? `ব্যাংকের মূল পেজ ও সকল ব্রাঞ্চ দেখুন (${branches.length})` : `Bank Details & Branches (${branches.length})`}</span>
          </button>
        </div>
      </header>

      {/* Quick Bank Stats Card Grid */}
      <section className="bg-emerald-900 text-white rounded-3xl p-6 sm:p-8 shadow-lg space-y-6">
        <h2 className="text-base sm:text-lg font-bold flex items-center gap-2 text-emerald-200">
          <Hash className="w-4 h-4 text-emerald-300" />
          <span>{isGerman ? 'Wichtige Bankdaten & Codes (Quick Statistics)' : isRussian ? 'Основные реквизиты и коды банка (Quick Statistics)' : isHindi ? 'बैंक के महत्वपूर्ण कोड एवं आंकड़े (Quick Statistics)' : isBengali ? 'এক নজরে ব্যাংকের গুরুত্বপূর্ণ কোড ও তথ্য (Quick Statistics)' : 'Quick Bank Statistics & Verification'}</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-xs">
          {article.quick_stats.map((stat, i) => {
            const statLabel = isRussian && stat.label_ru ? stat.label_ru : isHindi && stat.label_hi ? stat.label_hi : isBengali && stat.label_bn ? stat.label_bn : isGerman && stat.label_de ? stat.label_de : stat.label;
            const statValue = isRussian && stat.value_ru ? stat.value_ru : isHindi && stat.value_hi ? stat.value_hi : isBengali && stat.value_bn ? stat.value_bn : isGerman && stat.value_de ? stat.value_de : stat.value;
            return (
              <div key={i} className="bg-emerald-950/60 p-3.5 rounded-2xl border border-emerald-800/80 space-y-1">
                <span className="text-emerald-300/80 font-medium block">
                  {statLabel}
                </span>
                <span className="text-sm font-bold text-white font-mono block break-words">
                  {statValue}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Article Body Content */}
      <div className="bg-white dark:bg-slate-800/90 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-700/80 shadow-xs space-y-10">
        {/* Lead Overview */}
        <div className="bg-emerald-50/70 dark:bg-emerald-950/40 p-5 sm:p-6 rounded-2xl border border-emerald-200/80 dark:border-emerald-800/60 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-emerald-900 dark:text-emerald-300 mb-1">
                {isGerman ? 'Zusammenfassung des Leitfadens' : isRussian ? 'Краткое резюме руководства' : isHindi ? 'गाइड सारांश एवं अवलोकन' : isBengali ? 'গাইড ওভারভিউ ও ভূমিকা' : 'Guide Summary'}
              </h3>
              <p className="whitespace-pre-line">{overview}</p>
            </div>
          </div>
        </div>

        {/* Main Headings & Sections */}
        {article.sections.map((section, idx) => {
          const heading = isRussian && section.heading_ru ? section.heading_ru : isHindi && section.heading_hi ? section.heading_hi : isBengali && section.heading_bn ? section.heading_bn : isGerman && section.heading_de ? section.heading_de : section.heading;
          const content = isRussian && section.content_ru ? section.content_ru : isHindi && section.content_hi ? section.content_hi : isBengali && section.content_bn ? section.content_bn : isGerman && section.content_de ? section.content_de : section.content;

          return (
            <section key={section.id} id={section.id} className="space-y-4 pt-6 first:pt-0 border-t first:border-t-0 border-slate-100 dark:border-slate-700/60">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-xl bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 flex items-center justify-center text-xs font-extrabold shrink-0">
                  {idx + 1}
                </span>
                <span>{heading}</span>
              </h2>

              <div className="prose prose-slate dark:prose-invert max-w-none text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed space-y-3 whitespace-pre-line">
                {content}
              </div>
            </section>
          );
        })}

        {/* Direct Branches Explorer within this Bank */}
        <section className="pt-8 border-t border-slate-100 dark:border-slate-700/60 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-600" />
              <span>{isGerman ? `Wichtige Filialen & Bankleitzahlen (${branches.length} Filialen)` : isRussian ? `Филиалы и отделения банка (${branches.length} отделений)` : isHindi ? `इस बैंक की प्रमुख शाखाएं एवं IFSC कोड्स (${branches.length} शाखाएं)` : isBengali ? `এই ব্যাংকের প্রধান শাখা ও রাউটিং কোডসমূহ (${branches.length}টি শাখা)` : `Key Bank Branches & Codes (${branches.length} branches)`}</span>
            </h2>
            <button
              onClick={() => onSelectBank(article.bank_id)}
              className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer"
            >
              {isGerman ? `Alle ${branches.length} Filialen im Verzeichnis anzeigen →` : isRussian ? `Все ${branches.length} отделений в справочнике →` : isHindi ? `सभी ${branches.length} शाखाएं देखें →` : isBengali ? `সকল ${branches.length}টি শাখা ডিরেক্টরিতে দেখুন →` : `View all ${branches.length} branches →`}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {branches.slice(0, 6).map((branch) => (
              <div
                key={branch.id}
                onClick={() => onSelectBranch(branch)}
                className="p-3.5 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200/60 dark:border-slate-700/60 hover:border-emerald-500/50 cursor-pointer transition-all space-y-2 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {isGerman && branch.name_de ? branch.name_de : isRussian && branch.name_ru ? branch.name_ru : isHindi && branch.name_hi ? branch.name_hi : isBengali && branch.name_bn ? branch.name_bn : branch.name}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-emerald-100/70 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 font-bold">
                    {branch.blz || branch.blz_code || branch.bik_code || branch.ifsc_code || branch.sort_code || branch.routing_number}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                  {isGerman && branch.district_de ? branch.district_de : isRussian && branch.district_ru ? branch.district_ru : isHindi && branch.district_hi ? branch.district_hi : isBengali && branch.district_bn ? branch.district_bn : branch.district}, {isGerman && branch.division_de ? branch.division_de : isRussian && branch.division_ru ? branch.division_ru : isHindi && branch.division_hi ? branch.division_hi : isBengali && branch.division_bn ? branch.division_bn : branch.division}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs Section */}
        {article.faqs && article.faqs.length > 0 && (
          <section className="pt-8 border-t border-slate-100 dark:border-slate-700/60 space-y-4">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-emerald-600" />
              <span>{isGerman ? 'Häufig gestellte Fragen (FAQ)' : isRussian ? 'Часто задаваемые вопросы (FAQ)' : isHindi ? 'अक्सर पूछे जाने वाले प्रश्न (Frequently Asked Questions)' : isBengali ? 'সাধারণ জিজ্ঞাসিত প্রশ্নাবলী (Frequently Asked Questions)' : 'Frequently Asked Questions'}</span>
            </h2>

            <div className="space-y-3">
              {article.faqs.map((faq, i) => {
                const q = isRussian && faq.question_ru ? faq.question_ru : isHindi && faq.question_hi ? faq.question_hi : isBengali && faq.question_bn ? faq.question_bn : isGerman && faq.question_de ? faq.question_de : faq.question;
                const a = isRussian && faq.answer_ru ? faq.answer_ru : isHindi && faq.answer_hi ? faq.answer_hi : isBengali && faq.answer_bn ? faq.answer_bn : isGerman && faq.answer_de ? faq.answer_de : faq.answer;
                const isOpen = activeFaq === i;

                return (
                  <div
                    key={i}
                    className="border border-slate-200/80 dark:border-slate-700/80 rounded-2xl overflow-hidden bg-slate-50/50 dark:bg-slate-900/40"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : i)}
                      className="w-full text-left p-4 text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center justify-between gap-3 cursor-pointer hover:bg-slate-100/50 dark:hover:bg-slate-800/50"
                    >
                      <span>{q}</span>
                      <ChevronRight className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-90 text-emerald-600' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="p-4 pt-0 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-800">
                        {a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </div>

      {/* Bottom Navigation Back to Blog */}
      <div className="flex items-center justify-between pt-4">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all cursor-pointer shadow-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>
            {lang === 'de'
              ? 'Zurück zu allen Artikeln'
              : lang === 'ru'
              ? 'Назад ко всем статьям'
              : lang === 'hi'
              ? 'सभी लेखों पर वापस जाएं'
              : lang === 'bn'
              ? 'সকল ব্যাংকের আর্টিকেল তালিকায় ফিরে যান'
              : 'Back to All Articles'}
          </span>
        </button>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer"
        >
          {lang === 'de'
            ? 'Nach oben ↑'
            : lang === 'ru'
            ? 'Наверх ↑'
            : lang === 'hi'
            ? 'ऊपर जाएं ↑'
            : lang === 'bn'
            ? 'উপরে যান ↑'
            : 'Top ↑'}
        </button>
      </div>
    </article>
  );
};
