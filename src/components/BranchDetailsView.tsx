import React, { useEffect, useState } from 'react';
import { Building2, MapPin, Phone, Mail, Hash, Globe, ArrowLeft, HeartHandshake, HelpCircle, BookOpen, CheckCircle2, ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';
import { Branch, Language } from '../types';
import { CopyButton } from './CopyButton';
import { ShareButton } from './ShareButton';
import { decodeRoutingNumber } from '../lib/routingDecoder';
import { decodeBik } from '../data/russia/bikDecoder';
import { validateAbaRouting } from '../data/usa/abaValidator';
import { validateSortCode } from '../data/uk/sortCodeValidator';
import { updateSEOMeta, CURRENT_DATA_VERSION_DATE } from '../lib/seoManager';
import { Link } from 'react-router-dom';
import { translations } from '../lib/translations';

interface BranchDetailsViewProps {
  branch: Branch;
  lang: Language;
  onBack: () => void;
  onOpenRoutingDecoder: (routing: string) => void;
  onOpenReportModal: (branch: Branch) => void;
}

export const BranchDetailsView: React.FC<BranchDetailsViewProps> = ({
  branch,
  lang,
  onBack,
  onOpenRoutingDecoder,
  onOpenReportModal
}) => {
  const t = translations[lang] || translations.en;
  const decoded = decodeRoutingNumber(branch.routing_number);
  const bikDecoded = decodeBik(branch.bik_code || branch.routing_number);
  const abaDecoded = branch.country === 'us' ? validateAbaRouting(branch.routing_number) : null;
  const isUS = branch.country === 'us';
  const isUK = branch.country === 'uk' || !!branch.sort_code;
  const isRussia = branch.country === 'ru' || !!branch.bik_code;
  const isIndia = branch.country === 'in' || !!branch.ifsc_code;
  const sortCodeDecoded = isUK ? validateSortCode(branch.sort_code || branch.routing_number) : null;
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const getBranchName = () => {
    if (lang === 'ru' && branch.name_ru) return branch.name_ru;
    if (lang === 'hi' && branch.name_hi) return branch.name_hi;
    if (lang === 'bn' && branch.name_bn) return branch.name_bn;
    return branch.name;
  };

  const getBankName = () => {
    if (lang === 'ru' && branch.bank_name_ru) return branch.bank_name_ru;
    if (lang === 'hi' && branch.bank_name_hi) return branch.bank_name_hi;
    if (lang === 'bn' && branch.bank_name_bn) return branch.bank_name_bn;
    return branch.bank_name;
  };

  const getDistrict = () => {
    if (lang === 'ru' && branch.district_ru) return branch.district_ru;
    if (lang === 'hi' && branch.district_hi) return branch.district_hi;
    if (lang === 'bn' && branch.district_bn) return branch.district_bn;
    return branch.district;
  };

  const getAddress = () => {
    if (lang === 'ru' && branch.address_ru) return branch.address_ru;
    if (lang === 'hi' && branch.address_hi) return branch.address_hi;
    if (lang === 'bn' && branch.address_bn) return branch.address_bn;
    return branch.address;
  };

  const shareTitle = `${branch.bank_name} (${branch.name} Branch) Code & Details`;
  const shareText = isUS
    ? `ABA Routing: ${branch.routing_number} | ACH: ${branch.ach_routing || branch.routing_number} | City: ${branch.district}, ${branch.division}, USA.`
    : isUK
    ? `UK Sort Code: ${branch.sort_code || branch.routing_number} | SWIFT: ${branch.swift_code || 'HO'} | Location: ${branch.district}, ${branch.division}, UK.`
    : isRussia
    ? `БИК: ${branch.bik_code || branch.routing_number} | Корр. счет: ${branch.corr_account || 'N/A'} | Город: ${branch.district}, ${branch.division}, Россия.`
    : isIndia
    ? `Official IFSC: ${branch.ifsc_code} | MICR: ${branch.routing_number} | City: ${branch.district}, ${branch.division}, India.`
    : `Official BEFTN Routing: ${branch.routing_number} | SWIFT Code: ${branch.swift_code || 'Head Office'} | District: ${branch.district}, Bangladesh.`;

  const faqs = isUS
    ? [
        {
          question: `What is the 9-digit ABA routing number for ${branch.bank_name} - ${branch.name}?`,
          answer: `The official 9-digit ABA Routing Transit Number (RTN) for this branch is ${branch.routing_number}. It is used for electronic direct deposits, bill pay (ACH), and domestic wire transfers.`
        },
        {
          question: `Which routing number should I use for ACH vs. Fedwire?`,
          answer: `For ACH direct deposit and payroll: ${branch.ach_routing || branch.routing_number}. For real-time Fedwire transfers: ${branch.wire_routing || branch.routing_number}.`
        },
        {
          question: `What SWIFT / BIC code is used for incoming international wire transfers?`,
          answer: branch.swift_code
            ? `The international SWIFT code is ${branch.swift_code}. Provide this code to the remitting bank alongside the beneficiary's name and account number.`
            : `Use the main head office SWIFT code for ${branch.bank_name} and specify the branch address.`
        }
      ]
    : isUK
    ? [
        {
          question: `What is the Sort Code for ${branch.bank_name} - ${branch.name}?`,
          answer: `The official 6-digit Sort Code for this branch is ${branch.sort_code || branch.routing_number}. In the UK, it is formatted as ${sortCodeDecoded?.formattedSortCode || branch.sort_code || branch.routing_number} and used for BACS Direct Debit, Faster Payments, and CHAPS.`
        },
        {
          question: `Does this branch support Faster Payments (FPS) and BACS?`,
          answer: `Yes, ${branch.bank_name} supports UK Faster Payments for real-time payments, BACS for Direct Debits / Direct Credits, and CHAPS for high-value same-day settlements.`
        },
        {
          question: `Which SWIFT / BIC code is used for international payments to the UK?`,
          answer: branch.swift_code
            ? `The official SWIFT code for international transfers to this branch is ${branch.swift_code}.`
            : `Use the main UK Head Office SWIFT code for ${branch.bank_name} along with the 8-digit UK account number and Sort Code.`
        }
      ]
    : lang === 'ru'
    ? [
        {
          question: `Какой БИК у отделения ${getBankName()} (${getBranchName()})?`,
          answer: `Официальный 9-значный БИК (Банковский идентификационный код) данного отделения: ${branch.bik_code || branch.routing_number}. Зарегистрирован в платежной системе Банка России.`
        },
        {
          question: `Какой корреспондентский счет используется для переводов?`,
          answer: branch.corr_account
            ? `Корреспондентский счет отделения в Главном управлении Банка России: ${branch.corr_account}.`
            : `Для данного филиала используется корреспондентский счет головного банка в Банке России.`
        },
        {
          question: `Какой SWIFT код использовать для международных расчетов?`,
          answer: branch.swift_code
            ? `Прямой SWIFT/BIC код этого отделения: ${branch.swift_code}.`
            : `Рекомендуется использовать головной SWIFT код банка ${branch.bank_name} с указанием наименования отделения "${branch.name}".`
        }
      ]
    : lang === 'hi'
    ? [
        {
          question: `${getBankName()} ${getBranchName()} शाखा का IFSC कोड क्या है?`,
          answer: `${getBankName()} (${getBranchName()} शाखा) का आधिकारिक 11-अक्षरीय IFSC कोड ${branch.ifsc_code || 'N/A'} है, जिसका उपयोग NEFT, RTGS एवं IMPS ट्रांसफर में होता है।`
        },
        {
          question: `क्या इस शाखा में MICR कोड उपलब्ध है?`,
          answer: `हाँ, इस शाखा का 9-अंकीय MICR कोड ${branch.routing_number} है, जो चेक क्लियरिंग के लिए उपयोग होता है।`
        },
        {
          question: `अंतर्राष्ट्रीय वायर ट्रांसफर के लिए कौन सा कोड उपयोग करें?`,
          answer: branch.swift_code
            ? `इस शाखा का सीधा स्विफ्ट कोड ${branch.swift_code} है।`
            : `इसके लिए मुख्य शाखा का स्विफ्ट कोड उपयोग करें और विवरण में शाखा का नाम दर्ज करें।`
        }
      ]
    : lang === 'bn'
    ? [
        {
          question: `${branch.bank_name_bn || branch.bank_name}-এর ${branch.name_bn || branch.name}-এর কোড কত?`,
          answer: `${branch.bank_name_bn || branch.bank_name} (${branch.name_bn || branch.name})-এর অফিসিয়াল অনুমোদিত কোড হলো ${branch.ifsc_code || branch.routing_number}।`
        },
        {
          question: `এই শাখায় টাকা পাঠাতে সুইফট কোড কী ব্যবহার করতে হবে?`,
          answer: branch.swift_code
            ? `এই নির্দিষ্ট শাখার নিজস্ব সুইফট কোড হলো ${branch.swift_code}।`
            : `এই শাখার জন্য হেড অফিস সুইফট কোড ব্যবহার করতে হবে এবং ব্রাঞ্চের নাম হিসেবে "${branch.name}" উল্লেখ করতে হবে।`
        }
      ]
    : [
        {
          question: `What is the official code of ${branch.bank_name} ${branch.name} branch?`,
          answer: `The official code for ${branch.bank_name} (${branch.name} Branch) is ${branch.bik_code || branch.ifsc_code || branch.routing_number}.`
        },
        {
          question: `Which SWIFT code should be used for international transfers?`,
          answer: branch.swift_code
            ? `The dedicated SWIFT / BIC code for this branch is ${branch.swift_code}.`
            : `You should use the principal Head Office SWIFT code for ${branch.bank_name} and specify "${branch.name}" branch.`
        }
      ];

  // Update SEO Meta Tags on view mount
  useEffect(() => {
    updateSEOMeta({
      title: isUS
        ? `${branch.name} - ${branch.bank_name} ABA Routing Number ${branch.routing_number}, SWIFT & Address | World Bank Codes`
        : isUK
        ? `${branch.bank_name} ${branch.name} Branch Sort Code ${branch.sort_code || branch.routing_number}, SWIFT & Address | World Bank Codes`
        : `${branch.bank_name} ${branch.name} Branch Code & SWIFT | World Bank Codes`,
      description: isUS
        ? `Official 9-digit ABA Routing Number: ${branch.routing_number}, ACH: ${branch.ach_routing || branch.routing_number}, Wire: ${branch.wire_routing || branch.routing_number}, SWIFT: ${branch.swift_code || 'HO'} for ${branch.bank_name}, ${branch.name}, ${branch.district}, ${branch.division}, USA.`
        : isUK
        ? `Official UK 6-digit Sort Code: ${branch.sort_code || branch.routing_number} (${sortCodeDecoded?.formattedSortCode || branch.sort_code || branch.routing_number}), SWIFT: ${branch.swift_code || 'HO'}, Postcode: ${branch.zip_code || 'N/A'} for ${branch.bank_name} (${branch.name} Branch), ${branch.district}, ${branch.division}, United Kingdom.`
        : isRussia
        ? `Official BIK Code: ${branch.bik_code || branch.routing_number}, Corr. Account: ${branch.corr_account || 'N/A'} for ${branch.bank_name} (${branch.name} Branch), ${branch.district}, Russia.`
        : isIndia
        ? `Official IFSC Code: ${branch.ifsc_code}, MICR: ${branch.routing_number} for ${branch.bank_name} (${branch.name} Branch), ${branch.district}, ${branch.division}, India.`
        : `Official BEFTN Routing Number: ${branch.routing_number} and SWIFT Code for ${branch.bank_name}, ${branch.name} branch, ${branch.district}, Bangladesh.`,
      lang,
      branch,
      faqs
    });
  }, [branch, lang, isUS, isUK, isRussia, isIndia, faqs]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Back Button & Share Top Row */}
      <div className="flex items-center justify-between gap-3">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/80 transition-colors shadow-xs cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>{lang === 'hi' ? 'वापस जाएँ' : lang === 'bn' ? 'পূর্ববর্তী পাতায় ফিরে যান' : 'Back to Listings'}</span>
        </button>

        <div className="flex items-center gap-2">
          <Link
            to={`/bank/${branch.bank_id}`}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 hover:bg-emerald-100 transition-colors"
          >
            <Building2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{lang === 'hi' ? 'इस बैंक की सभी शाखाएँ' : lang === 'bn' ? 'এই ব্যাংকের সকল শাখা' : 'All Bank Branches'}</span>
            <span className="sm:hidden">{t.allBanks}</span>
          </Link>

          <ShareButton
            title={shareTitle}
            text={shareText}
            lang={lang}
            size="md"
          />
        </div>
      </div>

      {/* Main Branch Hero Card */}
      <div className="bg-white dark:bg-slate-800/90 rounded-3xl border border-slate-200 dark:border-slate-700/80 p-6 sm:p-8 shadow-md space-y-6">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 whitespace-nowrap shrink-0">
              <Building2 className="w-3.5 h-3.5 mr-1 text-emerald-600 dark:text-emerald-400" />
              <span>{getBankName()}</span>
            </span>
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 whitespace-nowrap shrink-0">
              {getDistrict()}, {branch.division}
            </span>
            <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 whitespace-nowrap shrink-0">
              {isUS ? '🇺🇸 United States' : isUK ? '🇬🇧 United Kingdom' : isRussia ? '🇷🇺 Russia' : isIndia ? '🇮🇳 India' : '🇧🇩 Bangladesh'}
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-700 whitespace-nowrap shrink-0">
              <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
              <span>{lang === 'ru' ? `Проверено: ${CURRENT_DATA_VERSION_DATE}` : lang === 'hi' ? `सत्यापित: ${CURRENT_DATA_VERSION_DATE}` : lang === 'bn' ? `যাচাইকৃত: ${CURRENT_DATA_VERSION_DATE}` : `Verified: ${CURRENT_DATA_VERSION_DATE}`}</span>
            </span>
          </div>

          <h1 className="text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight break-words">
            {getBranchName()}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
            {branch.name} • {branch.bank_name}
          </p>
        </div>

        {/* Highlighted Code Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Primary Transfer Code Box: ABA for US, Sort Code for UK, BIK for Russia, IFSC for India, Routing for BD */}
          {isUS ? (
            <div className="bg-emerald-50/80 dark:bg-emerald-950/40 p-4 sm:p-5 rounded-2xl border border-emerald-200 dark:border-emerald-800/60 flex flex-col justify-between space-y-3">
              <div>
                <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 block uppercase tracking-wider">
                  ABA Routing Transit Number (9 Digits)
                </span>
                <span className="font-mono text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-wider break-all mt-1 block">
                  {branch.routing_number}
                </span>
              </div>
              <CopyButton textToCopy={branch.routing_number} size="md" lang={lang} className="w-full justify-center" />
            </div>
          ) : isUK ? (
            <div className="bg-emerald-50/80 dark:bg-emerald-950/40 p-4 sm:p-5 rounded-2xl border border-emerald-200 dark:border-emerald-800/60 flex flex-col justify-between space-y-3">
              <div>
                <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 block uppercase tracking-wider">
                  UK Sort Code (6 Digits)
                </span>
                <span className="font-mono text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-wider break-all mt-1 block">
                  {sortCodeDecoded?.formattedSortCode || branch.sort_code || branch.routing_number}
                </span>
              </div>
              <CopyButton textToCopy={branch.sort_code || branch.routing_number} size="md" lang={lang} className="w-full justify-center" />
            </div>
          ) : isRussia ? (
            <div className="bg-emerald-50/80 dark:bg-emerald-950/40 p-4 sm:p-5 rounded-2xl border border-emerald-200 dark:border-emerald-800/60 flex flex-col justify-between space-y-3">
              <div>
                <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 block uppercase tracking-wider">
                  БИК (Банковский идентификационный код)
                </span>
                <span className="font-mono text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-wider break-all mt-1 block">
                  {branch.bik_code || branch.routing_number}
                </span>
              </div>
              <CopyButton textToCopy={branch.bik_code || branch.routing_number} size="md" lang={lang} className="w-full justify-center" />
            </div>
          ) : isIndia && branch.ifsc_code ? (
            <div className="bg-emerald-50/80 dark:bg-emerald-950/40 p-4 sm:p-5 rounded-2xl border border-emerald-200 dark:border-emerald-800/60 flex flex-col justify-between space-y-3">
              <div>
                <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 block uppercase tracking-wider">
                  {t.ifsc} (NEFT / RTGS / IMPS)
                </span>
                <span className="font-mono text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-wider break-all mt-1 block">
                  {branch.ifsc_code}
                </span>
              </div>
              <CopyButton textToCopy={branch.ifsc_code} size="md" lang={lang} className="w-full justify-center" />
            </div>
          ) : (
            <div className="bg-emerald-50/80 dark:bg-emerald-950/40 p-4 sm:p-5 rounded-2xl border border-emerald-200 dark:border-emerald-800/60 flex flex-col justify-between space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 block uppercase tracking-wider">
                    {t.routing} (BEFTN / RTGS)
                  </span>
                  <span className="font-mono text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-wider break-all mt-1 block">
                    {branch.routing_number}
                  </span>
                </div>
                <button
                  onClick={() => onOpenRoutingDecoder(branch.routing_number)}
                  className="p-1.5 rounded-lg bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-200 transition-colors cursor-pointer"
                  title="Decode 9-digit routing number"
                >
                  <HelpCircle className="w-4 h-4" />
                </button>
              </div>
              <CopyButton textToCopy={branch.routing_number} size="md" lang={lang} className="w-full justify-center" />
            </div>
          )}

          {/* Secondary Code Box */}
          {isUS ? (
            <div className="bg-slate-50 dark:bg-slate-700/40 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-700/80 flex flex-col justify-between space-y-3">
              <div>
                <span className="text-xs font-bold text-slate-600 dark:text-slate-300 block uppercase tracking-wider">
                  ACH / Direct Deposit Routing
                </span>
                <span className="font-mono text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-wider break-all mt-1 block">
                  {branch.ach_routing || branch.routing_number}
                </span>
              </div>
              <CopyButton
                textToCopy={branch.ach_routing || branch.routing_number}
                size="md"
                lang={lang}
                className="w-full justify-center"
              />
            </div>
          ) : isRussia && branch.corr_account ? (
            <div className="bg-slate-50 dark:bg-slate-700/40 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-700/80 flex flex-col justify-between space-y-3">
              <div>
                <span className="text-xs font-bold text-slate-600 dark:text-slate-300 block uppercase tracking-wider">
                  Корреспондентский счет (Корр. счет)
                </span>
                <span className="font-mono text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-wider break-all mt-1 block">
                  {branch.corr_account}
                </span>
              </div>
              <CopyButton
                textToCopy={branch.corr_account}
                size="md"
                lang={lang}
                className="w-full justify-center"
              />
            </div>
          ) : (
            <div className="bg-slate-50 dark:bg-slate-700/40 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-700/80 flex flex-col justify-between space-y-3">
              <div>
                <span className="text-xs font-bold text-slate-600 dark:text-slate-300 block uppercase tracking-wider">
                  {branch.swift_code ? t.swift : isIndia ? 'MICR Code' : t.swift}
                </span>
                <span className="font-mono text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-wider break-all mt-1 block">
                  {branch.swift_code || branch.routing_number}
                </span>
              </div>
              <CopyButton
                textToCopy={branch.swift_code || branch.routing_number}
                size="md"
                lang={lang}
                className="w-full justify-center"
              />
            </div>
          )}
        </div>

        {/* US Extra Requisites Section (Wire Routing, SWIFT, Zip Code) */}
        {isUS && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
            {branch.wire_routing && (
              <div className="bg-slate-50 dark:bg-slate-700/30 p-3 rounded-xl border border-slate-200/70 dark:border-slate-700/60 flex items-center justify-between">
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block text-[11px] font-medium">Fedwire (Wire Routing):</span>
                  <span className="font-mono font-bold text-slate-900 dark:text-slate-100">{branch.wire_routing}</span>
                </div>
                <CopyButton textToCopy={branch.wire_routing} size="sm" lang={lang} />
              </div>
            )}
            {branch.swift_code && (
              <div className="bg-slate-50 dark:bg-slate-700/30 p-3 rounded-xl border border-slate-200/70 dark:border-slate-700/60 flex items-center justify-between">
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block text-[11px] font-medium">SWIFT / BIC Code:</span>
                  <span className="font-mono font-bold text-slate-900 dark:text-slate-100">{branch.swift_code}</span>
                </div>
                <CopyButton textToCopy={branch.swift_code} size="sm" lang={lang} />
              </div>
            )}
            {branch.zip_code && (
              <div className="bg-slate-50 dark:bg-slate-700/30 p-3 rounded-xl border border-slate-200/70 dark:border-slate-700/60 flex items-center justify-between">
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block text-[11px] font-medium">ZIP Code:</span>
                  <span className="font-mono font-bold text-slate-900 dark:text-slate-100">{branch.zip_code}</span>
                </div>
                <CopyButton textToCopy={branch.zip_code} size="sm" lang={lang} />
              </div>
            )}
          </div>
        )}

        {/* UK Extra Requisites Section (SWIFT, Postcode, Clearing Network) */}
        {isUK && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
            {branch.swift_code && (
              <div className="bg-slate-50 dark:bg-slate-700/30 p-3 rounded-xl border border-slate-200/70 dark:border-slate-700/60 flex items-center justify-between">
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block text-[11px] font-medium">SWIFT / BIC Code:</span>
                  <span className="font-mono font-bold text-slate-900 dark:text-slate-100">{branch.swift_code}</span>
                </div>
                <CopyButton textToCopy={branch.swift_code} size="sm" lang={lang} />
              </div>
            )}
            {branch.zip_code && (
              <div className="bg-slate-50 dark:bg-slate-700/30 p-3 rounded-xl border border-slate-200/70 dark:border-slate-700/60 flex items-center justify-between">
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block text-[11px] font-medium">UK Postcode:</span>
                  <span className="font-mono font-bold text-slate-900 dark:text-slate-100">{branch.zip_code}</span>
                </div>
                <CopyButton textToCopy={branch.zip_code} size="sm" lang={lang} />
              </div>
            )}
            <div className="bg-slate-50 dark:bg-slate-700/30 p-3 rounded-xl border border-slate-200/70 dark:border-slate-700/60 flex items-center justify-between">
              <div>
                <span className="text-slate-500 dark:text-slate-400 block text-[11px] font-medium">Payment Schemes:</span>
                <span className="font-semibold text-emerald-700 dark:text-emerald-400">Faster Payments, BACS, CHAPS</span>
              </div>
            </div>
          </div>
        )}

        {/* UK Sort Code Structure Card */}
        {isUK && sortCodeDecoded && (
          <div className="bg-emerald-50/40 dark:bg-emerald-950/20 p-4 rounded-2xl border border-emerald-200/70 dark:border-emerald-800/50 space-y-2 text-xs">
            <div className="flex items-center gap-1.5 font-bold text-emerald-800 dark:text-emerald-300">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>UK Sort Code & Payment Clearing Information</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-[11px]">
              <div className="bg-white/80 dark:bg-slate-800 p-2.5 rounded-lg border border-emerald-100 dark:border-emerald-800/40">
                <span className="text-slate-500 dark:text-slate-400 block">Bank Prefix:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{sortCodeDecoded.bankPrefix} ({sortCodeDecoded.possibleBankName || branch.bank_name})</span>
              </div>
              <div className="bg-white/80 dark:bg-slate-800 p-2.5 rounded-lg border border-emerald-100 dark:border-emerald-800/40">
                <span className="text-slate-500 dark:text-slate-400 block">Standard Format:</span>
                <span className="font-mono font-semibold text-emerald-700 dark:text-emerald-400">{sortCodeDecoded.formattedSortCode}</span>
              </div>
              <div className="bg-white/80 dark:bg-slate-800 p-2.5 rounded-lg border border-emerald-100 dark:border-emerald-800/40">
                <span className="text-slate-500 dark:text-slate-400 block">Regulated By:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">Bank of England / FCA</span>
              </div>
            </div>
          </div>
        )}

        {/* US ABA Structure & Federal Reserve District Card */}
        {isUS && abaDecoded && (
          <div className="bg-emerald-50/40 dark:bg-emerald-950/20 p-4 rounded-2xl border border-emerald-200/70 dark:border-emerald-800/50 space-y-2 text-xs">
            <div className="flex items-center gap-1.5 font-bold text-emerald-800 dark:text-emerald-300">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>US Federal Reserve Routing & ABA Checksum Validation</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-[11px]">
              <div className="bg-white/80 dark:bg-slate-800 p-2.5 rounded-lg border border-emerald-100 dark:border-emerald-800/40">
                <span className="text-slate-500 dark:text-slate-400 block">Federal Reserve District:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{abaDecoded.fedDistrictName} ({abaDecoded.fedDistrictCode})</span>
              </div>
              <div className="bg-white/80 dark:bg-slate-800 p-2.5 rounded-lg border border-emerald-100 dark:border-emerald-800/40">
                <span className="text-slate-500 dark:text-slate-400 block">Institution Classification:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{abaDecoded.institutionType}</span>
              </div>
              <div className="bg-white/80 dark:bg-slate-800 p-2.5 rounded-lg border border-emerald-100 dark:border-emerald-800/40">
                <span className="text-slate-500 dark:text-slate-400 block">Mod-10 Check Digit:</span>
                <span className="font-mono font-semibold text-emerald-700 dark:text-emerald-400">Digit #{abaDecoded.checkDigit} (Valid)</span>
              </div>
            </div>
          </div>
        )}

        {/* Russian Extra Requisites Section (INN, KPP, SWIFT) */}
        {isRussia && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
            {branch.inn && (
              <div className="bg-slate-50 dark:bg-slate-700/30 p-3 rounded-xl border border-slate-200/70 dark:border-slate-700/60 flex items-center justify-between">
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block text-[11px] font-medium">ИНН банка:</span>
                  <span className="font-mono font-bold text-slate-900 dark:text-slate-100">{branch.inn}</span>
                </div>
                <CopyButton textToCopy={branch.inn} size="sm" lang={lang} />
              </div>
            )}
            {branch.kpp && (
              <div className="bg-slate-50 dark:bg-slate-700/30 p-3 rounded-xl border border-slate-200/70 dark:border-slate-700/60 flex items-center justify-between">
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block text-[11px] font-medium">КПП филиала:</span>
                  <span className="font-mono font-bold text-slate-900 dark:text-slate-100">{branch.kpp}</span>
                </div>
                <CopyButton textToCopy={branch.kpp} size="sm" lang={lang} />
              </div>
            )}
            {branch.swift_code && (
              <div className="bg-slate-50 dark:bg-slate-700/30 p-3 rounded-xl border border-slate-200/70 dark:border-slate-700/60 flex items-center justify-between">
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block text-[11px] font-medium">SWIFT / BIC:</span>
                  <span className="font-mono font-bold text-slate-900 dark:text-slate-100">{branch.swift_code}</span>
                </div>
                <CopyButton textToCopy={branch.swift_code} size="sm" lang={lang} />
              </div>
            )}
          </div>
        )}

        {/* Russian BIK Structure Explanation Card */}
        {isRussia && bikDecoded && bikDecoded.isValid && (
          <div className="bg-emerald-50/40 dark:bg-emerald-950/20 p-4 rounded-2xl border border-emerald-200/70 dark:border-emerald-800/50 space-y-2 text-xs">
            <div className="flex items-center gap-1.5 font-bold text-emerald-800 dark:text-emerald-300">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>{lang === 'ru' ? 'Расшифровка структуры БИК (Банк России)' : 'BIK Code Structure Breakdown'}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-[11px]">
              <div className="bg-white/80 dark:bg-slate-800 p-2.5 rounded-lg border border-emerald-100 dark:border-emerald-800/40">
                <span className="text-slate-500 dark:text-slate-400 block">Страна (04):</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{bikDecoded.countryName}</span>
              </div>
              <div className="bg-white/80 dark:bg-slate-800 p-2.5 rounded-lg border border-emerald-100 dark:border-emerald-800/40">
                <span className="text-slate-500 dark:text-slate-400 block">Код региона (ОКАТО):</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{bikDecoded.regionName} ({bikDecoded.regionCode})</span>
              </div>
              <div className="bg-white/80 dark:bg-slate-800 p-2.5 rounded-lg border border-emerald-100 dark:border-emerald-800/40">
                <span className="text-slate-500 dark:text-slate-400 block">Номер подразделения:</span>
                <span className="font-mono font-semibold text-slate-800 dark:text-slate-200">{bikDecoded.branchIndex}</span>
              </div>
            </div>
          </div>
        )}

        {/* Contact & Location Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-4 border-t border-slate-100 dark:border-slate-700/80">
          <div className="flex items-start space-x-2.5 text-slate-700 dark:text-slate-300">
            <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <div className="min-w-0">
              <span className="font-bold block text-slate-900 dark:text-white">{t.address}</span>
              <span className="break-words leading-relaxed">{getAddress()}</span>
            </div>
          </div>

          {branch.phone && (
            <div className="flex items-start space-x-2.5 text-slate-700 dark:text-slate-300">
              <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <div className="min-w-0">
                <span className="font-bold block text-slate-900 dark:text-white">{t.phone}</span>
                <span className="break-words">{branch.phone}</span>
              </div>
            </div>
          )}
        </div>

        {/* Report Mistake Button */}
        <div className="pt-2 flex justify-end">
          <button
            onClick={() => onOpenReportModal(branch)}
            className="inline-flex items-center gap-1.5 text-xs text-amber-700 dark:text-amber-400 hover:text-amber-900 font-semibold transition-colors cursor-pointer"
          >
            <HeartHandshake className="w-4 h-4" />
            <span>{t.reportIssue}</span>
          </button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white dark:bg-slate-800/90 rounded-3xl border border-slate-200 dark:border-slate-700/80 p-6 sm:p-8 shadow-xs space-y-4">
        <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          <span>{lang === 'hi' ? 'अक्सर पूछे जाने वाले प्रश्न (FAQ)' : lang === 'bn' ? 'সচরাচর জিজ্ঞাসিত প্রশ্নাবলি (FAQ)' : 'Frequently Asked Questions'}</span>
        </h2>

        <div className="space-y-2.5">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 dark:border-slate-700/80 overflow-hidden bg-slate-50/50 dark:bg-slate-900/30 transition-colors"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:bg-slate-100/50 dark:hover:bg-slate-800/50 cursor-pointer"
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="p-4 pt-0 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/40 dark:border-slate-700/40 mt-1">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

