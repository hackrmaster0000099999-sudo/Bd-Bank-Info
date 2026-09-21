export {
  getAustraliaHomeSeo,
  getAustraliaBankSeo,
  getAustraliaBranchSeo,
  getAustraliaBankMetaTitle,
  getAustraliaBankMetaDescription,
  getAustraliaBranchMetaTitle,
  getAustraliaBranchMetaDescription,
  getAustraliaBankArticleSeo
} from './seoHelper';

export const australiaSeoData = {
  metaTitle: {
    en: "Australia BSB Numbers & Bank Code Directory 2026 | WBC",
    bn: "অস্ট্রেলিয়ার সকল ব্যাংকের বিএসবি কোড ও ব্রাঞ্চ ডিরেক্টরি ২০২৬ | WBC",
    hi: "ऑस्ट्रेलियाई बैंकों के बीएसबी (BSB) कोड व शाखा डायरेक्टरी | WBC",
    ru: "BSB коды и справочник отделений банков Австралии 2026 | WBC"
  },
  metaDescription: {
    en: "Find verified 6-digit Australian BSB numbers (Bank-State-Branch), APCA codes, SWIFT/BIC, and PayID/Osko info for 2,120+ bank branches across Australia.",
    bn: "কমনওয়েলথ ব্যাংক, ওয়েস্টপ্যাক, ন্যাব, এএনজেড সহ অস্ট্রেলিয়ার সকল ব্যাংকের অফিসিয়াল ৬ ডিজিটের বিএসবি (BSB) কোড, সুইফট কোড, এনপিপি ও ব্রাঞ্চের তথ্য খুঁজুন।",
    hi: "कॉमनवेल्थ बैंक, वेस्टपैक, NAB, ANZ व सभी ऑस्ट्रेलियाई बैंकों के 6-अंकीय BSB कोड, स्विफ्ट कोड और शाखा विवरण खोजें।",
    ru: "Поиск официальных 6-значных кодов BSB (Bank-State-Branch), SWIFT/BIC, систем мгновенных платежей NPP/Osko для CommBank, Westpac, NAB, ANZ и банков Австралии."
  },
  keywords: [
    "Australia BSB codes",
    "Australian bank routing numbers",
    "BSB validator Australia",
    "Commonwealth Bank BSB code",
    "Westpac BSB numbers",
    "NAB BSB code search",
    "ANZ Bank BSB",
    "Macquarie BSB code",
    "Bendigo Bank BSB directory",
    "Osko NPP payment Australia",
    "Australian bank SWIFT codes",
    "Sydney bank branches BSB",
    "Melbourne bank BSB codes",
    "Brisbane BSB numbers"
  ],
  faqs: [
    {
      question_en: "What is a BSB number in Australia and why is it needed?",
      question_bn: "অস্ট্রেলিয়ায় বিএসবি (BSB) নম্বর কী এবং এটি কেন প্রয়োজন হয়?",
      question_hi: "ऑस्ट्रेलिया में BSB नंबर क्या होता है और इसकी क्या आवश्यकता है?",
      question_ru: "Что такое BSB номер в Австралии и зачем он нужен?",
      answer_en: "A BSB (Bank-State-Branch) number is a 6-digit identifier formatted as XXX-XXX used in Australia to route domestic funds transfers, direct credits, salary payments, and direct debits to the exact bank and branch holding the account.",
      answer_bn: "বিএসবি (BSB - Bank-State-Branch) হলো ৬ ডিজিটের একটি কোড (যেমন ০৬২-০০০), যা অস্ট্রেলিয়ায় যে কোনো ব্যাংক একাউন্টে টাকা পাঠানো, বেতন জমা ও ডাইরেক্ট ডেবিটের জন্য সঠিক ব্রাঞ্চ ও ব্যাংক নির্ধারণ করতে ব্যবহৃত হয়।",
      answer_hi: "बीएसबी (Bank-State-Branch) 6 अंकों का एक पहचान कोड है जिसका उपयोग ऑस्ट्रेलिया में सही बैंक शाखा में धन हस्तांतरण और वेतन भुगतान के लिए किया जाता है।",
      answer_ru: "Код BSB (Bank-State-Branch) — это 6-значный номер в формате XXX-XXX, используемый для маршрутизации межбанковских платежей и зарплатных зачислений в Австралии."
    },
    {
      question_en: "How do I find my Australian bank BSB and account number?",
      question_bn: "আমি কীভাবে আমার অস্ট্রেলিয়ান ব্যাংকের বিএসবি ও একাউন্ট নম্বর খুঁজে পাবো?",
      question_hi: "मैं अपने ऑस्ट्रेलियाई बैंक का BSB और खाता संख्या कैसे प्राप्त करूँ?",
      question_ru: "Как узнать свой австралийский BSB и номер банковского счета?",
      answer_en: "Your BSB and account number can be found in your mobile banking app, online banking portal under account details, on your bank statements, or by looking up your branch name in our official directory.",
      answer_bn: "আপনার মোবাইল ব্যাংকিং অ্যাপ, অনলাইন ব্যাংকিং ড্যাশবোর্ড, ব্যাংক স্টেটমেন্টের শীর্ষে অথবা আমাদের ওয়েবসাইটে ব্রাঞ্চের নাম লিখে সহজেই বিএসবি কোড খুঁজে পেতে পারেন।",
      answer_hi: "आप अपनी मोबाइल बैंकिंग ऐप, ऑनलाइन बैंकिंग पोर्टल, बैंक स्टेटमेंट या हमारे पोर्टल पर अपनी शाखा खोजकर BSB प्राप्त कर सकते हैं।",
      answer_ru: "BSB и номер счета указаны в мобильном приложении вашего банка, в выписке по счету или в нашем онлайн-справочнике."
    },
    {
      question_en: "Can I use BSB for international wire transfers to Australia?",
      question_bn: "আন্তর্জাতিক ট্রান্সফারে কি বিএসবি কোড ব্যবহার করা যায়?",
      question_hi: "क्या अंतरराष्ट्रीय ट्रांसफर के लिए BSB कोड का उपयोग किया जा सकता है?",
      question_ru: "Нужен ли BSB для международного перевода в Австралию?",
      answer_en: "Yes. When sending money from abroad to Australia via SWIFT wire transfer, you will need the bank's SWIFT/BIC code, the recipient's 6-digit BSB number, and their account number (up to 9 digits).",
      answer_bn: "হ্যাঁ, বিদেশ থেকে অস্ট্রেলিয়ায় টাকা পাঠানোর সময় ব্যাংকের সুইফট (SWIFT) কোডের সাথে প্রাপকের ৬ ডিজিটের বিএসবি এবং একাউন্ট নম্বর দিতে হয়।",
      answer_hi: "हाँ, विदेश से स्विफ्ट वायर ट्रांसफर द्वारा ऑस्ट्रेलिया में राशि भेजते समय बैंक के SWIFT कोड के साथ 6 अंकों का BSB और खाता नंबर देना अनिवार्य है।",
      answer_ru: "Да, для международного перевода через SWIFT требуется SWIFT/BIC код банка, 6-значный BSB и номер счета получателя в Австралии."
    }
  ]
};

