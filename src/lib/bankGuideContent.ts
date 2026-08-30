import { Bank, Branch, Language } from '../types';
import { getUsaBankGuide } from '../data/usa/index';

export interface BankGuide {
  title: string;
  summary: string;
  historySection: {
    heading: string;
    content: string;
  };
  routingGuideSection: {
    heading: string;
    content: string;
    steps: string[];
  };
  remittanceGuideSection: {
    heading: string;
    content: string;
    requiredDetails: { label: string; value: string }[];
  };
  transferComparison: {
    type: string;
    speed: string;
    limit: string;
    bestFor: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export function getBankGuideContent(bank: Bank, lang: Language): BankGuide {
  if (bank.country === 'us') {
    return getUsaBankGuide(bank, lang);
  }

  const isIndia = bank.country === 'in';
  const isRussia = bank.country === 'ru' || !!bank.bik_code;

  if (lang === 'ru' || isRussia) {
    const bankName = bank.name_ru || bank.name;
    return {
      title: `${bankName} - БИК, Корр. счет, SWIFT и реквизиты отделений 2026`,
      summary: `Официальные банковские реквизиты ${bankName} (${bank.short_name}): 9-значный БИК (${bank.bik_code || 'все отделения'}), корр. счета, ИНН, КПП, SWIFT/BIC код (${bank.swift_code}) и справочник филиалов по всей России.`,
      historySection: {
        heading: `О банке ${bankName} и сеть филиалов`,
        content: `${bankName} является одним из ведущих участников банковской системы Российской Федерации. Банк имеет генеральную лицензию Банка России и широкую сеть из более чем ${bank.branch_count.toLocaleString()}+ отделений по регионам РФ.`
      },
      routingGuideSection: {
        heading: `Что такое БИК ${bank.short_name} и структура кода`,
        content: `БИК (Банковский идентификационный код) — это уникальный 9-значный идентификатор банка в платежной системе Банка России (ЦБ РФ):`,
        steps: [
          `Первые 2 цифры (04): код платежной системы Российской Федерации.`,
          `3-я и 4-я цифры: код региона России по классификатору ОКАТО.`,
          `5-я и 6-я цифры: номер подразделения расчетной сети Банка России.`,
          `Последние 3 цифры (000–999): условный номер кредитной организации / филиала.`
        ]
      },
      remittanceGuideSection: {
        heading: `Реквизиты для межбанковских переводов и валютных расчетов`,
        content: `Для отправки или получения денежного перевода на счет в ${bankName} используйте следующие официальные реквизиты:`,
        requiredDetails: [
          { label: 'Наименование банка', value: bank.name },
          { label: 'БИК Банка', value: bank.bik_code || 'См. конкретное отделение' },
          { label: 'SWIFT / BIC', value: bank.swift_code },
          { label: 'Головной офис', value: bank.head_office_ru || bank.head_office },
          { label: 'Валюта счета', value: 'RUB / CNY / KZT / AED / USD' }
        ]
      },
      transferComparison: [
        {
          type: 'СБП (Система быстрых платежей)',
          speed: 'Мгновенно (24/7)',
          limit: 'До 100 000 ₽/мес без комиссии',
          bestFor: 'Мгновенные переводы по номеру телефона'
        },
        {
          type: 'Межбанковский перевод по реквизитам',
          speed: 'От 15 минут до 1 рабочего дня',
          limit: 'В соответствии с тарифами банка',
          bestFor: 'Оплата счетов, налогов и крупных покупок'
        },
        {
          type: 'СПФС / SWIFT Перевод',
          speed: '1-3 рабочих дня',
          limit: 'По валютному законодательству РФ',
          bestFor: 'Международные расчеты и трансграничные переводы'
        }
      ],
      faqs: [
        {
          question: `Где узнать БИК и корр. счет отделения ${bank.short_name}?`,
          answer: `БИК и корреспондентский счет указаны в мобильном приложении банка, в договоре на открытие счета, либо в нашем онлайн-справочнике World Bank Codes при выборе города и филиала.`
        },
        {
          question: `Какой SWIFT код использовать для ${bankName}?`,
          answer: `Для международных расчетов используется официальный SWIFT код банка: ${bank.swift_code}.`
        },
        {
          question: `Чем отличается БИК от корреспондентского счета?`,
          answer: `БИК — это 9-значный код самого банка в ЦБ РФ, а корреспондентский счет (20 знаков) — это счет банка в территориальном учреждении Банка России для проведения межбанковских расчетов.`
        }
      ]
    };
  }

  if (lang === 'hi') {
    const bankName = bank.name_hi || bank.name;
    return {
      title: `${bankName} - IFSC कोड, MICR, स्विफ्ट कोड एवं शाखा निर्देशिका 2026`,
      summary: `${bankName} (${bank.short_name}) की सभी शाखाओं के आधिकारिक 11-अक्षरीय IFSC कोड, MICR, SWIFT कोड (${bank.swift_code}) और ऑनलाइन फंड ट्रांसफर गाइड।`,
      historySection: {
        heading: `${bankName} का परिचय एवं नेटवर्क`,
        content: `${bankName} भारत के बैंकिंग क्षेत्र का एक प्रमुख एवं विश्वसनीय बैंक है। भारतीय रिज़र्व बैंक (RBI) द्वारा मान्यता प्राप्त इस बैंक की देशभर में ${bank.branch_count.toLocaleString()}+ से अधिक शाखाएँ हैं, जो ग्राहकों को NEFT, RTGS, IMPS एवं नेटबैंकिंग की आधुनिक सुविधा प्रदान करती हैं।`
      },
      routingGuideSection: {
        heading: `${bank.short_name} IFSC कोड क्या है और इसकी संरचना कैसे होती है?`,
        content: `IFSC (Indian Financial System Code) एक 11-वर्णों का अल्फ़ान्यूमेरिक कोड है जो RBI द्वारा अंतर-बैंक फंड ट्रांसफर के लिए प्रत्येक शाखा को आवंटित किया जाता है। इसकी संरचना इस प्रकार है:`,
        steps: [
          `पहले 4 अक्षर (${bank.ifsc_prefix || bank.short_name.toUpperCase()}): यह बैंक के नाम को दर्शाता है।`,
          `5वां अक्षर (0): यह हमेशा '0' (शून्य) होता है और भविष्य के उपयोग के लिए सुरक्षित है।`,
          `अंतिम 6 वर्ण: यह संबंधित विशिष्ट शाखा (Branch Code) की पहचान कराता है।`
        ]
      },
      remittanceGuideSection: {
        heading: `विदेश से ${bank.short_name} में अंतर्राष्ट्रीय वायर ट्रांसफर / रेमिटेंस प्राप्त करने की विधि`,
        content: `विदेश से भारत में पैसा मंगवाने या फ्रीलांसिंग प्लेटफॉर्म (Upwork, Deel, PayPal, YouTube/AdSense) से भुगतान प्राप्त करने के लिए निम्नलिखित विवरण दर्ज करें:`,
        requiredDetails: [
          { label: 'बैंक का नाम (Bank Name)', value: bank.name },
          { label: 'स्विफ्ट कोड (SWIFT / BIC)', value: bank.swift_code },
          { label: 'IFSC कोड (शाखा IFSC)', value: `${bank.ifsc_prefix || bank.short_name}0******` },
          { label: 'प्रधान कार्यालय पता', value: bank.head_office_hi || bank.head_office },
          { label: 'मुद्रा (Currency)', value: 'INR / USD / EUR' }
        ]
      },
      transferComparison: [
        {
          type: 'IMPS (Immediate Payment)',
          speed: 'तुरंत (Real-Time 24x7)',
          limit: '₹5,00,000 प्रति दिन',
          bestFor: 'त्वरित एवं आपातकालीन छोटे लेन-देन'
        },
        {
          type: 'NEFT (National Electronic Funds)',
          speed: '30 मिनट से 2 घंटे',
          limit: 'कोई न्यूनतम या अधिकतम सीमा नहीं',
          bestFor: 'सामान्य ऑनलाइन बिल एवं व्यापारिक भुगतान'
        },
        {
          type: 'RTGS (Real Time Gross Settlement)',
          speed: 'तत्काल (Real-Time)',
          limit: 'न्यूनतम ₹2,00,000',
          bestFor: 'बड़े व्यापारिक भुगतान एवं व्यावसायिक ट्रांसफर'
        },
        {
          type: 'SWIFT / Wire Transfer',
          speed: '1 से 3 कार्य दिवस',
          limit: 'विदेशी मुद्रा नियमों (FEMA) के अनुसार',
          bestFor: 'अंतर्राष्ट्रीय रेमिटेंस एवं विदेशी भुगतान'
        }
      ],
      faqs: [
        {
          question: `${bank.short_name} का IFSC कोड कैसे पता करें?`,
          answer: `आप अपनी चेकबुक की ऊपरी बाईं ओर, बैंक पासबुक के पहले पन्ने पर, अथवा हमारी इस वेबसाइट पर शाखा का नाम या शहर खोजकर तुरंत आधिकारिक IFSC कोड प्राप्त कर सकते हैं।`
        },
        {
          question: `क्या सभी शाखाओं का SWIFT कोड एक ही होता है?`,
          answer: `ज़्यादातर मामलों में विदेशी लेन-देन मुख्य शाखा के SWIFT कोड (${bank.swift_code}) और स्थानीय शाखा के IFSC कोड के ज़रिए सफलतापूर्वक प्रोसेस हो जाते हैं।`
        },
        {
          question: `MICR कोड और IFSC कोड में क्या अंतर है?`,
          answer: `IFSC कोड का उपयोग ऑनलाइन ट्रांसफर (NEFT, RTGS, IMPS) के लिए होता है, जबकि 9-अंकीय MICR कोड का उपयोग चेक क्लियरिंग (Cheque Clearing) में मैग्नेटिक इंक तकनीक द्वारा तेज़ी से चेक प्रोसेस करने के लिए होता है।`
        }
      ]
    };
  }

  if (lang === 'bn') {
    return {
      title: `${bank.name_bn} - রাউটিং নম্বর, সুইফট কোড ও ব্যাংকিং সহায়িকা ২০২৬`,
      summary: `${bank.name_bn} (${bank.short_name})-এর সকল ব্রাঞ্চের সঠিক ৯ ডিজিটের BEFTN রাউটিং নম্বর, আন্তর্জাতিক সুইফট/BIC কোড (${bank.swift_code}) এবং তহবিল স্থানান্তরের বিস্তারিত নিয়মাবলি।`,
      historySection: {
        heading: `${bank.name_bn} পরিচিতি ও শাখা নেটওয়ার্ক`,
        content: `${bank.name_bn} (${bank.name}) ব্যাংকিং খাতের একটি অন্যতম নির্ভরযোগ্য প্রতিষ্ঠান। সারাদেশে ব্যাংকটির প্রায় ${bank.branch_count.toLocaleString()}+ টি অনুমোদিত শাখা রয়েছে, যার মাধ্যমে গ্রাহকরা সার্বক্ষণিক আধুনিক ব্যাংকিং সেবা গ্রহণ করতে পারেন।`
      },
      routingGuideSection: {
        heading: `${bank.short_name} কোড কী এবং কীভাবে কাজ করে?`,
        content: `ইলেকট্রনিক ফান্ড ট্রান্সফার (BEFTN/RTGS/NPSB/IFSC) সেবায় ${bank.name_bn}-এর প্রতিটি ব্রাঞ্চের জন্য অনন্য কোড নির্ধারণ করা হয়েছে। এই কোডের গঠন কাঠামো নিম্নরূপ:`,
        steps: [
          `প্রথম অংশ: ব্যাংক আইডেন্টিফিকেশন কোড।`,
          `দ্বিতীয় অংশ: সংশ্লিষ্ট জেলা বা অঞ্চলের কোড।`,
          `শেষ অংশ: সংশ্লিষ্ট নির্দিষ্ট ব্রাঞ্চের নিজস্ব কোড।`
        ]
      },
      remittanceGuideSection: {
        heading: `বিদেশ থেকে ${bank.short_name}-এ রেমিট্যান্স বা ফ্রিল্যান্সিং পেমেন্ট গ্রহণের নিয়ম`,
        content: `আন্তর্জাতিক ব্যাংক ওয়্যার ট্রান্সফার, ফ্রিল্যান্সিং প্ল্যাটফর্ম (Upwork, Fiverr, Payoneer, Deel) কিংবা Google AdSense ও ইউটিউব থেকে সরাসরি ${bank.name_bn}-এর একাউন্টে টাকা আনতে নিচের তথ্যগুলো প্রদান করুন:`,
        requiredDetails: [
          { label: 'ব্যাংকের নাম (Bank Name)', value: bank.name },
          { label: 'সুইফট কোড (SWIFT / BIC Code)', value: bank.swift_code },
          { label: 'হেড অফিস ঠিকানা', value: bank.head_office },
          { label: 'অ্যাকাউন্টের ধরন', value: 'Savings / Current / Freelancer Account' }
        ]
      },
      transferComparison: [
        {
          type: 'BEFTN / NEFT',
          speed: 'পরবর্তী কার্যদিবস / কয়েক ঘণ্টা',
          limit: 'ব্যাংক পলিসি অনুযায়ী',
          bestFor: 'সাধারণ আন্তঃব্যাংক ট্রান্সফার ও বেতন প্রদান'
        },
        {
          type: 'RTGS',
          speed: 'তাৎক্ষণিক (রিয়েল-টাইম)',
          limit: 'উচ্চ অংকের লেনদেন',
          bestFor: 'জরুরি ও বড় অংকের বাণিজ্যিক লেনদেন'
        },
        {
          type: 'NPSB / IMPS',
          speed: 'ইন্সট্যান্ট (২৪/৭)',
          limit: 'দৈনিক নির্দিষ্ট সীমা',
          bestFor: 'কার্ড ও ইন্টারনেট ব্যাংকিং ফান্ড ট্রান্সফার'
        },
        {
          type: 'SWIFT / Wire',
          speed: '১ থেকে ৩ কার্যদিবস',
          limit: 'আন্তর্জাতিক রেমিট্যান্স নিয়ম অনুযায়ী',
          bestFor: 'বিদেশ থেকে অর্থ গ্রহণ ও ফ্রিল্যান্সিং পেমেন্ট'
        }
      ],
      faqs: [
        {
          question: `${bank.short_name}-এর সুইফট কোড কি সব ব্রাঞ্চের জন্য এক?`,
          answer: `হ্যাঁ, ${bank.name_bn}-এর হেড অফিসের মূল সুইফট কোড (${bank.swift_code}) ব্যবহার করে যেকোনো ব্রাঞ্চের অ্যাকাউন্টে আন্তর্জাতিক রেমিট্যান্স গ্রহণ করা যায়।`
        },
        {
          question: `রাউটিং বা IFSC নম্বর ভুল দিলে কি টাকা কেটে যাবে?`,
          answer: `রাউটিং নম্বর বা অ্যাকাউন্ট নম্বর ভুল হলে অর্থ সাধারণত প্রাপকের অ্যাকাউন্টে জমা না হয়ে মূল প্রেরকের অ্যাকাউন্টে ২ থেকে ৩ কার্যদিবসের মধ্যে স্বয়ংক্রিয়ভাবে ফেরত আসে।`
        }
      ]
    };
  }

  // English fallback
  return {
    title: `${bank.name} (${bank.short_name}) All Branches Routing Numbers, IFSC & SWIFT Codes`,
    summary: `Complete directory of ${bank.name} branches, official 9-digit BEFTN Routing Numbers / IFSC codes, SWIFT/BIC code (${bank.swift_code}), MICR codes, and wire transfer guide.`,
    historySection: {
      heading: `About ${bank.name} & Branch Network`,
      content: `${bank.name} is a leading commercial bank operating with over ${bank.branch_count.toLocaleString()}+ branches across the country, providing comprehensive financial services including electronic funds transfer, retail banking, and international remittances.`
    },
    routingGuideSection: {
      heading: `${bank.short_name} Bank Code Structure & Routing Guide`,
      content: `Each branch of ${bank.name} is assigned a unique identifying code for processing interbank transfers (BEFTN/RTGS/IFSC/NEFT) efficiently:`,
      steps: [
        `Prefix / Bank Identifier: Represents ${bank.name}.`,
        `Middle Code: Designates the clearing zone / district.`,
        `Suffix: Identifies the individual branch location.`
      ]
    },
    remittanceGuideSection: {
      heading: `How to Receive International Wire Transfers & Inward Remittances`,
      content: `To receive inward remittances, overseas wire transfers, or freelance payouts (Upwork, Deel, PayPal, AdSense) into your ${bank.name} account, provide these details:`,
      requiredDetails: [
        { label: 'Beneficiary Bank', value: bank.name },
        { label: 'SWIFT / BIC Code', value: bank.swift_code },
        { label: 'Head Office Address', value: bank.head_office },
        { label: 'Account Currency', value: isIndia ? 'INR' : 'BDT' }
      ]
    },
    transferComparison: [
      {
        type: isIndia ? 'IMPS (Immediate)' : 'NPSB (Instant)',
        speed: 'Instant (24x7 Real-time)',
        limit: 'Standard daily limit',
        bestFor: 'Emergency and immediate transfers'
      },
      {
        type: isIndia ? 'NEFT' : 'BEFTN',
        speed: 'Within hours / Same day',
        limit: 'No upper limit',
        bestFor: 'Routine payroll, vendor & bill payments'
      },
      {
        type: 'RTGS',
        speed: 'Instant (Real-time)',
        limit: 'High-value transactions',
        bestFor: 'Large commercial & corporate settlements'
      },
      {
        type: 'SWIFT Wire Transfer',
        speed: '1 to 3 Business Days',
        limit: 'As per central bank FX guidelines',
        bestFor: 'Inward foreign remittances & global earnings'
      }
    ],
    faqs: [
      {
        question: `What is the SWIFT Code for ${bank.name}?`,
        answer: `The primary international SWIFT / BIC code for ${bank.name} is ${bank.swift_code}. It can be used for international transfers to any of its branches.`
      },
      {
        question: `How do I locate my branch routing or IFSC number?`,
        answer: `You can find it printed on your bank cheque book, on the front page of your bank passbook, or search directly on World Bank Codes by branch name or district.`
      }
    ]
  };
}
