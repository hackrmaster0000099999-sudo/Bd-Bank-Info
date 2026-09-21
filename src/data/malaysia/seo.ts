import {
  getMalaysiaBankMetaTitle,
  getMalaysiaBankMetaDescription,
  getMalaysiaBranchMetaTitle,
  getMalaysiaBranchMetaDescription,
  getMalaysiaHomeSeo as getMalaysiaHomeSeoStrict
} from './seoHelper';

export const malaysiaSeoData = {
  metaTitle: {
    ms: "Malaysia Bank IBG Codes & Branch Directory 2026 | WBC",
    en: "Malaysia Bank IBG Codes & Branch Directory 2026 | WBC",
    bn: "মালয়েশিয়া ব্যাংক IBG কোড ও ব্রাঞ্চ ডিরেক্টরি ২০২৬ | WBC",
    hi: "मलेशिया बैंक IBG कोड व शाखा निर्देशिका 2026 | WBC",
    ru: "Банки Малайзии: Коды IBG и отделения 2026 | WBC"
  },
  metaDescription: {
    ms: "Find verified 5-digit IBG clearing codes, DuitNow transfer details, SWIFT BIC, and branch addresses for all banks across Malaysia. Official 2026 BNM directory.",
    en: "Find verified 5-digit IBG clearing codes, DuitNow transfer details, SWIFT BIC, and branch addresses for all banks across Malaysia. Official 2026 BNM directory.",
    bn: "মালয়েশিয়ার সকল ব্যাংকের ভেরিফাইড ৫-সংখ্যার IBG ক্লিয়ারিং কোড, ডুইটনাউ ট্রান্সফার বিবরণ, সুইফট BIC ও শাখা ঠিকানা খুঁজুন। অফিসিয়াল ২০২৬ BNM ডিরেক্টরি।",
    hi: "मलेशिया के सभी बैंकों के सत्यापित 5-अंकीय IBG क्लियरिंग कोड, डुइटनाउ विवरण, स्विफ्ट कोड एवं शाखा पते प्राप्त करें। आधिकारिक 2026 BNM डायरेक्टरी।",
    ru: "Проверенные 5-значные клиринговые коды IBG, DuitNow, SWIFT BIC и адреса отделений всех банков Малайзии в официальном справочнике BNM 2026 года."
  },
  keywords: [
    "Malaysia bank routing codes",
    "IBG clearing codes Malaysia",
    "Maybank swift code MBBEMYKL",
    "CIMB Malaysia bank code 02",
    "Public Bank Malaysia routing code",
    "RHB Bank Malaysia branch code",
    "DuitNow transfer bank code Malaysia",
    "RENTAS clearing participant Malaysia",
    "Hong Leong Bank IBG code",
    "AmBank branch swift code",
    "Bank Islam Malaysia swift BIMBMYKL",
    "Bank Negara Malaysia licensed banks",
    "PIDM deposit insurance RM250000",
    "Malaysia post code bank directory"
  ],
  faqs: [
    {
      question_en: "What is an Interbank GIRO (IBG) Routing Code in Malaysia?",
      question_bn: "মালয়েশিয়ায় ইন্টারব্যাংক জিরো (IBG) রাউটিং কোড কী?",
      question_hi: "मलेशिया में इंटरबैंक जीआईआरओ (IBG) रूटिंग कोड क्या है?",
      question_ru: "Что такое клиринговый код Interbank GIRO (IBG) в Малайзии?",
      answer_en: "In Malaysia, domestic interbank transfers use an IBG routing number consisting of a 2-digit Bank Code (e.g., 01 for Maybank, 02 for CIMB, 03 for Public Bank) paired with a 3-digit Branch Code to uniquely route electronic payments across Bank Negara Malaysia's clearing network.",
      answer_bn: "মালয়েশিয়ায় অভ্যন্তরীণ আন্তঃব্যাংক লেনদেনের জন্য ২-সংখ্যার অফিশিয়াল ব্যাংক কোড (যেমন: মেব্যাংকের জন্য ০১, সিআইএমবির জন্য ০২, পাবলিক ব্যাংকের জন্য ০৩) এবং ৩-সংখ্যার ব্রাঞ্চ কোড মিলিয়ে ৫-সংখ্যার IBG ক্লিয়ারিং কোড তৈরি হয় যা ব্যাংক নেগারার ক্লিয়ারিং নেটওয়ার্কে ব্যবহৃত হয়।",
      answer_hi: "मलेशिया में अंतर-बैंक ट्रांसफर के लिए 2-अंकीय बैंक कोड (उदा. 01 Maybank, 02 CIMB, 03 Public Bank) एवं 3-अंकीय शाखा कोड मिलाकर 5-अंकीय आईबीजी रूटिंग कोड बनता है।",
      answer_ru: "В Малайзии межбанковские переводы внутри страны используют клиринговый номер IBG, состоящий из 2-значного кода банка (01 для Maybank, 02 для CIMB, 03 для Public Bank) и 3-значного кода отделения."
    },
    {
      question_en: "What is DuitNow in Malaysia and how does it work?",
      question_bn: "মালয়েশিয়ায় ডুইটনাউ (DuitNow) কী এবং এটি কীভাবে কাজ করে?",
      question_hi: "मलेशिया में डुइटनाउ (DuitNow) क्या है और यह कैसे कार्य करता है?",
      question_ru: "Что такое сервис DuitNow в Малайзии?",
      answer_en: "DuitNow is Malaysia's national real-time payment ecosystem developed by PayNet and Bank Negara Malaysia. It allows instant 24/7 money transfers up to RM50,000 using recipient account numbers or DuitNow IDs (Mobile Number, Malaysian NRIC, Army/Police ID, Passport, or Business Registration Number).",
      answer_bn: "ডুইটনাউ (DuitNow) হলো পে-নেট ও ব্যাংক নেগারা মালয়েশিয়া পরিচালিত ২৪/৭ রিয়েল-টাইম জাতীয় পেমেন্ট নেটওয়ার্ক। এর মাধ্যমে ব্যাংক একাউন্ট নম্বর ছাড়াও গ্রাহকের মোবাইল নম্বর বা মালয়েশিয়ান জাতীয় পরিচয়পত্র (NRIC) দিয়ে তাৎক্ষণিক ৫০,০০০ রিঙ্গিত পর্যন্ত টাকা ট্রান্সফার করা যায়।",
      answer_hi: "डुइटनाउ PayNet और बैंक नेगारा मलेशिया द्वारा विकसित 24/7 तत्काल भुगतान सेवा है। इसके जरिए मोबाइल नंबर, एनआरआईसी या बैंक खाता संख्या का उपयोग करके RM 50,000 तक तुरंत भेजे जा सकते हैं।",
      answer_ru: "DuitNow — национальная система мгновенных круглосуточных переводов до 50 000 RM по номеру мобильного телефона, NRIC или номеру банковского счета, созданная PayNet и Банком Негара."
    },
    {
      question_en: "Are deposits in Malaysian banks protected by the government?",
      question_bn: "মালয়েশিয়ার ব্যাংক আমানত কি সরকারিভাবে সুরক্ষিত?",
      question_hi: "क्या मलेशियाई बैंकों में जमा राशि सरकारी रूप से सुरक्षित है?",
      question_ru: "Застрахованы ли вклады в банках Малайзии государством?",
      answer_en: "Yes, eligible customer deposits in all licensed commercial and Islamic banks in Malaysia are automatically protected up to RM250,000 per depositor per member bank by Perbadanan Insurans Deposit Malaysia (PIDM).",
      answer_bn: "হ্যাঁ, মালয়েশিয়ার সমস্ত লাইসেন্সপ্রাপ্ত বাণিজ্যিক ও ইসলামিক ব্যাংকে গ্রাহকের সেভিংস, চলতি ও মেয়াদী আমানত পেরবাদানান ইন্সুরান ডিপোজিট মালয়েশিয়া (PIDM) দ্বারা ব্যাংক প্রতি সর্বোচ্চ ২,৫০,০০০ মালয়েশিয়ান রিঙ্গিত পর্যন্ত সরকার কর্তৃক সুরক্ষিত।",
      answer_hi: "हाँ, मलेशिया के सभी अधिकृत वाणिज्यिक और इस्लामिक बैंकों में पात्र जमा राशि परबदानन इंसुरान डिपॉजिट मलेशिया (PIDM) द्वारा प्रति जमाकर्ता प्रति बैंक RM 2,50,000 तक कानूनी रूप से सुरक्षित है।",
      answer_ru: "Да, депозиты во всех лицензированных коммерческих и исламских банках застрахованы государственной корпорацией PIDM на сумму до 250 000 RM на одного вкладчика в каждом банке."
    }
  ]
};

export function getMalaysiaBankSeo(bank: any, lang: any = 'en') {
  return {
    title: getMalaysiaBankMetaTitle(bank, lang),
    description: getMalaysiaBankMetaDescription(bank, lang)
  };
}

export function getMalaysiaBranchSeo(branch: any, lang: any = 'en') {
  return {
    title: getMalaysiaBranchMetaTitle(branch, lang),
    description: getMalaysiaBranchMetaDescription(branch, lang)
  };
}

export function getMalaysiaHomeSeo(lang: any = 'en') {
  return getMalaysiaHomeSeoStrict(lang);
}

