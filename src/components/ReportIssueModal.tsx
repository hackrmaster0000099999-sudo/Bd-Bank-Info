import React, { useState } from 'react';
import { X, HeartHandshake, CheckCircle2, Send, Loader2, ShieldCheck } from 'lucide-react';
import { Language, Branch } from '../types';
import { sendSupportMessage } from '../lib/supportMailService';

interface ReportIssueModalProps {
  branch?: Branch | null;
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

const reportTranslations = {
  en: {
    title: 'Report Wrong Information',
    subtitle: 'Help keep World Bank Codes accurate & verified',
    successTitle: 'Thank You! Report Received.',
    successDesc: 'Our verification team will audit and update the official registry records.',
    targetEntity: 'Target Bank / Branch:',
    issueType: 'Select Issue Type:',
    options: {
      wrong_routing: 'Wrong Routing / Transit / Sort Code / BIK / IFSC',
      wrong_swift: 'Wrong SWIFT / BIC Code',
      address_change: 'Branch Relocated / Address Changed',
      missing_branch: 'Missing Branch or Bank',
      other: 'Other Data Correction'
    },
    detailsLabel: 'Correct Information & Details:',
    detailsPlaceholder: 'Provide correct routing number, SWIFT, or official address update...',
    emailLabel: 'Your Email (Optional, for updates):',
    emailPlaceholder: 'yourname@example.com',
    securityNotice: 'Report dispatched directly to our database verification desk.',
    cancel: 'Cancel',
    submit: 'Submit Report',
    sending: 'Sending...'
  },
  bn: {
    title: 'তথ্য সংশোধন বা রিপোর্ট করুন',
    subtitle: 'সঠিক ও নির্ভরযোগ্য ডাটা বজায় রাখতে আপনার মূল্যবান মতামত জানান',
    successTitle: 'ধন্যবাদ! আপনার রিপোর্ট জমা নেওয়া হয়েছে।',
    successDesc: 'আমাদের টিম অফিসিয়াল রেকর্ড যাচাই করে ডাটাবেজ আপডেট করবে।',
    targetEntity: 'নির্বাচিত ব্যাংক বা শাখা:',
    issueType: 'সমস্যার ধরন:',
    options: {
      wrong_routing: 'ভুল রাউটিং / সর্ট কোড / IFSC / BIK নম্বর',
      wrong_swift: 'ভুল সুইফট (SWIFT / BIC) কোড',
      address_change: 'শাখার ঠিকানা পরিবর্তন বা স্থানান্তরিত',
      missing_branch: 'শাখা খুঁজে পাওয়া যাচ্ছে না',
      other: 'অন্যান্য তথ্য সংশোধন'
    },
    detailsLabel: 'সঠিক তথ্য বিস্তারিত লিখুন:',
    detailsPlaceholder: 'উদাহরণ: এই শাখার নতুন রাউটিং নম্বর হলো... অথবা নতুন ঠিকানা...',
    emailLabel: 'আপনার ইমেইল (ঐচ্ছিক, আপডেটের জন্য):',
    emailPlaceholder: 'yourname@example.com',
    securityNotice: 'রিপোর্টটি সরাসরি আমাদের ডেটাবেস ভেরিফিকেশন ডেস্কে চলে যাবে।',
    cancel: 'বাতিল',
    submit: 'রিপোর্ট পাঠান',
    sending: 'পাঠানো হচ্ছে...'
  },
  hi: {
    title: 'गलत जानकारी की रिपोर्ट करें',
    subtitle: 'सटीक एवं सत्यापित बैंकिंग डेटा बनाए रखने में सहयोग करें',
    successTitle: 'धन्यवाद! आपकी रिपोर्ट प्राप्त हुई।',
    successDesc: 'हमारी सत्यापन टीम आधिकारिक रिकॉर्ड से जांच कर डेटाबेस अपडेट करेगी।',
    targetEntity: 'लक्षित बैंक / शाखा:',
    issueType: 'समस्या का प्रकार चुनें:',
    options: {
      wrong_routing: 'गलत राउटिंग / IFSC / Sort Code / BIK कोड',
      wrong_swift: 'गलत स्विफ्ट (SWIFT / BIC) कोड',
      address_change: 'शाखा का पता बदल गया है / स्थानांतरित',
      missing_branch: 'शाखा सूची में अनुपलब्ध है',
      other: 'अन्य डेटा सुधार'
    },
    detailsLabel: 'सही जानकारी एवं विवरण लिखें:',
    detailsPlaceholder: 'कृपया सही कोड, नया पता या आधिकारिक अपडेट यहाँ लिखें...',
    emailLabel: 'आपका ईमेल (वैकल्पिक, उत्तर पाने हेतु):',
    emailPlaceholder: 'yourname@example.com',
    securityNotice: 'यह रिपोर्ट सीधे हमारे डेटाबेस सत्यापन डेस्क पर भेजी जाएगी।',
    cancel: 'रद्द करें',
    submit: 'रिपोर्ट भेजें',
    sending: 'भेजा जा रहा है...'
  },
  ru: {
    title: 'Сообщить об ошибке в данных',
    subtitle: 'Помогите нам поддерживать точность и актуальность банковских реквизитов',
    successTitle: 'Спасибо! Сообщение принято.',
    successDesc: 'Наша служба верификации проверит информацию по официальным реестрам.',
    targetEntity: 'Объект отчета (Банк / Отделение):',
    issueType: 'Тип неточности:',
    options: {
      wrong_routing: 'Неверный БИК / Sort Code / Routing / IFSC',
      wrong_swift: 'Неверный SWIFT / BIC код',
      address_change: 'Отделение переехало / изменился адрес',
      missing_branch: 'Отделение отсутствует в справочнике',
      other: 'Другое исправление данных'
    },
    detailsLabel: 'Правильные реквизиты и комментарий:',
    detailsPlaceholder: 'Укажите актуальный БИК, корр. счет, SWIFT или новый адрес филиала...',
    emailLabel: 'Ваш Email (необязательно, для обратной связи):',
    emailPlaceholder: 'yourname@example.com',
    securityNotice: 'Отчет отправляется напрямую в службу верификации данных.',
    cancel: 'Отмена',
    submit: 'Отправить отчет',
    sending: 'Отправка...'
  }
};

export const ReportIssueModal: React.FC<ReportIssueModalProps> = ({
  branch,
  isOpen,
  onClose,
  lang
}) => {
  const [issueType, setIssueType] = useState('wrong_routing');
  const [details, setDetails] = useState('');
  const [userContact, setUserContact] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const t = reportTranslations[lang] || reportTranslations.en;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await sendSupportMessage({
      type: 'report_issue',
      senderEmail: userContact,
      subject: `🚨 Data Correction Report: [${issueType}] ${branch ? `${branch.bank_name} - ${branch.name}` : 'General Report'}`,
      message: details,
      category: issueType,
      branchOrBank: branch ? `${branch.bank_name} (${branch.name} Branch, Routing/Code: ${branch.sort_code || branch.bik_code || branch.ifsc_code || branch.routing_number})` : undefined
    });
    setIsSubmitting(false);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setDetails('');
      onClose();
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white dark:bg-slate-800 rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200 dark:border-slate-700 space-y-4 relative animate-in fade-in zoom-in-95 duration-150 text-slate-800 dark:text-slate-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center space-x-3">
          <div className="w-11 h-11 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center shadow-inner shrink-0">
            <HeartHandshake className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {t.title}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {t.subtitle}
            </p>
          </div>
        </div>

        {submitted ? (
          <div className="bg-emerald-50 dark:bg-emerald-950/40 p-6 sm:p-8 rounded-2xl border border-emerald-200 dark:border-emerald-800/60 text-center space-y-2 py-8">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 dark:text-emerald-400 mx-auto animate-bounce" />
            <h4 className="font-extrabold text-slate-900 dark:text-slate-100 text-lg">
              {t.successTitle}
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 max-w-sm mx-auto">
              {t.successDesc}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            {/* Target Branch Note */}
            {branch && (
              <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded-2xl border border-slate-200 dark:border-slate-700/80">
                <span className="text-slate-500 dark:text-slate-400 font-medium block text-[11px]">
                  {t.targetEntity}
                </span>
                <span className="font-bold text-slate-900 dark:text-slate-100 block break-words mt-0.5">
                  {branch.bank_name} - {branch.name} ({branch.sort_code || branch.bik_code || branch.ifsc_code || branch.routing_number})
                </span>
              </div>
            )}

            {/* Issue Type */}
            <div>
              <label htmlFor="report-issue-type-select" className="font-bold text-slate-800 dark:text-slate-200 block mb-1">
                {t.issueType}
              </label>
              <select
                id="report-issue-type-select"
                aria-label={t.issueType}
                value={issueType}
                onChange={(e) => setIssueType(e.target.value)}
                className="w-full p-2.5 bg-slate-50 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600/80 rounded-xl text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium cursor-pointer"
              >
                <option value="wrong_routing" className="dark:bg-slate-800">{t.options.wrong_routing}</option>
                <option value="wrong_swift" className="dark:bg-slate-800">{t.options.wrong_swift}</option>
                <option value="address_change" className="dark:bg-slate-800">{t.options.address_change}</option>
                <option value="missing_branch" className="dark:bg-slate-800">{t.options.missing_branch}</option>
                <option value="other" className="dark:bg-slate-800">{t.options.other}</option>
              </select>
            </div>

            {/* Correct Information Details */}
            <div>
              <label className="font-bold text-slate-800 dark:text-slate-200 block mb-1">
                {t.detailsLabel}
              </label>
              <textarea
                required
                rows={3}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder={t.detailsPlaceholder}
                className="w-full p-2.5 bg-slate-50 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600/80 rounded-xl text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Optional Email */}
            <div>
              <label className="font-bold text-slate-800 dark:text-slate-200 block mb-1">
                {t.emailLabel}
              </label>
              <input
                type="email"
                value={userContact}
                onChange={(e) => setUserContact(e.target.value)}
                placeholder={t.emailPlaceholder}
                className="w-full p-2.5 bg-slate-50 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600/80 rounded-xl text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Direct dispatch notice */}
            <div className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>{t.securityNotice}</span>
            </div>

            {/* Action buttons */}
            <div className="pt-2 flex items-center justify-end space-x-2">
              <button
                type="button"
                onClick={onClose}
                disabled={isSubmitting}
                className="px-4 py-2.5 text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors cursor-pointer"
              >
                {t.cancel}
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-all shadow-md shadow-emerald-600/20 cursor-pointer disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>{t.sending}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>{t.submit}</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
