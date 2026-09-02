export interface BankingGuide {
  title: string;
  title_bn: string;
  title_hi: string;
  title_ru: string;
  summary: string;
  summary_bn: string;
  summary_hi: string;
  summary_ru: string;
  sections: {
    heading: string;
    heading_bn: string;
    heading_hi: string;
    heading_ru: string;
    content: string;
    content_bn: string;
    content_hi: string;
    content_ru: string;
  }[];
}

export const uaeBankingGuide: BankingGuide = {
  title: "United Arab Emirates (UAE) Banking & CBUAE Routing Master Directory",
  title_bn: "সংযুক্ত আরব আমিরাত (ইউএই) ব্যাংকিং ও সিবিইউএই (CBUAE) রাউটিং পূর্ণাঙ্গ গাইড",
  title_hi: "संयुक्त अरब अमीरात (UAE) बैंकिंग व CBUAE रूटिंग सम्पूर्ण गाइड",
  title_ru: "Полное руководство по банковской системе и маршрутным кодам ОАЭ (CBUAE)",
  summary: "Comprehensive directory and technical guide to UAE banking clearing codes, Central Bank of the UAE (CBUAE) routing numbers, IBAN standard (AEkk...), UAEFTS electronic fund transfers, Aani instant payments, Wage Protection System (WPS), and SWIFT/BIC remittances across all 7 Emirates.",
  summary_bn: "সংযুক্ত আরব আমিরাতের ৭টি আমিরাত (দুবাই, আবুধাবি, শারজাহ, আজমান, রাস আল খাইমাহ, ফুজাইরাহ, উম্ম আল কুয়াইন)-এর ব্যাংকিং ক্লিয়ারিং কোড, সিবিইউএই (CBUAE) রাউটিং, আইবিএএন (IBAN), ইউএইএফটিএস (UAEFTS), আনি (Aani) ইনস্ট্যান্ট পেমেন্ট ও সুইফট কোডের পূর্ণাঙ্গ সহায়িকা।",
  summary_hi: "संयुक्त अरब अमीरात के सभी 7 अमीरातों के बैंकिंग कोड, सेंट्रल बैंक रूटिंग (CBUAE), IBAN, UAEFTS ट्रांसफर, आनी (Aani) इंस्टेंट पेमेंट और स्विफ्ट कोड की सम्पूर्ण जानकारी।",
  summary_ru: "Полный справочник по клиринговым кодам ЦБ ОАЭ (CBUAE), номерам IBAN, национальной системе переводов UAEFTS, сервису быстрых платежей Aani и переводам SWIFT во всех 7 эмиратах.",
  sections: [
    {
      heading: "Overview of the UAE Banking System & CBUAE Regulation",
      heading_bn: "ইউএই ব্যাংকিং ব্যবস্থা ও সেন্ট্রাল ব্যাংক অব দ্য ইউএই (CBUAE)",
      heading_hi: "यूएई बैंकिंग प्रणाली एवं सेंट्रल बैंक (CBUAE)",
      heading_ru: "Банковская система ОАЭ и регулирование CBUAE",
      content: "The United Arab Emirates represents the primary financial hub of the Middle East. Regulated by the Central Bank of the United Arab Emirates (CBUAE), the system comprises national banks (such as Emirates NBD, First Abu Dhabi Bank - FAB, and ADCB), Islamic banks (such as Dubai Islamic Bank and ADIB), and international institutions (such as HSBC, Standard Chartered, and Citibank).",
      content_bn: "সংযুক্ত আরব আমিরাত মধ্যপ্রাচ্যের প্রধান ফিন্যান্সিয়াল কেন্দ্র। সেন্ট্রাল ব্যাংক অব দ্য ইউএই (CBUAE) দ্বারা পরিচালিত এ সিস্টেমে রয়েছে শীর্ষ ন্যাশনাল ব্যাংক (এমিরেটস এনবিডি, ফার্স্ট আবুধাবি ব্যাংক - এফএবি, এডিসিবি), শীর্ষ ইসলামিক ব্যাংক (দুবাই ইসলামিক ব্যাংক, এডিআইবি) এবং আন্তর্জাতিক ব্যাংক (এইচএসবিসি, স্ট্যান্ডার্ড চার্টার্ড, সিটিব্যাংক)।",
      content_hi: "संयुक्त अरब अमीरात मध्य पूर्व का प्रमुख वित्तीय केंद्र है। सेंट्रल बैंक ऑफ द यूएई (CBUAE) के अंतर्गत राष्ट्रीय बैंक (Emirates NBD, FAB, ADCB), इस्लामिक बैंक (DIB, ADIB) और अंतरराष्ट्रीय बैंक कार्यरत हैं।",
      content_ru: "ОАЭ являются главным финансовым центром Ближнего Востока. Под контролем Центрального банка ОАЭ (CBUAE) работают национальные банки (Emirates NBD, FAB, ADCB), исламские банки (DIB, ADIB) и международные финансовые институты."
    },
    {
      heading: "UAE Central Bank (CBUAE) Routing & 3-Digit Bank Codes",
      heading_bn: "ইউএই সেন্ট্রাল ব্যাংক রাউটিং ও ৩-ডিজিটের ব্যাংক ক্লিয়ারিং কোড",
      heading_hi: "यूएई सेंट्रल बैंक रूटिंग एवं 3-अंकीय बैंक कोड",
      heading_ru: "Маршрутные и 3-значные клиринговые коды ЦБ ОАЭ",
      content: "Domestic electronic fund transfers in the UAE utilize 3-digit CBUAE Bank Clearing Codes (e.g., 023 for Emirates NBD, 035 for FAB, 040 for ADCB, 024 for Dubai Islamic Bank, 031 for Mashreq) combined with 9-digit branch routing numbers. These clearing numbers ensure precise settlement through the UAE Funds Transfer System (UAEFTS).",
      content_bn: "সংযুক্ত আরব আমিরাতে অভ্যন্তরীণ ফান্ড ট্রান্সফারে ৩-ডিজিটের সিবিইউএই ক্লিয়ারিং কোড (যেমন: ০২৩ এমিরেটস এনবিডি, ০৩৫ এফএবি, ০৪০ এডিসিবি, ০২৪ দুবাই ইসলামিক ব্যাংক, ০৩১ মাশরেক) এবং ৯-ডিজিটের ব্রাঞ্চ রাউটিং নাম্বার ব্যবহৃত হয়। এটি UAEFTS নেটওয়ার্কে দ্রুত টাকা পৌঁছানো নিশ্চিত করে।",
      content_hi: "घरेलू ट्रांसफर के लिए 3-अंकीय CBUAE बैंक क्लियरिंग कोड (023 Emirates NBD, 035 FAB, 040 ADCB) तथा 9-अंकीय शाखा रूटिंग कोड का उपयोग किया जाता है।",
      content_ru: "Для внутренних переводов используются 3-значные клиринговые коды ЦБ ОАЭ (023 Emirates NBD, 035 FAB, 040 ADCB, 024 DIB) и 9-значные маршрутные номера через систему UAEFTS."
    },
    {
      heading: "UAE IBAN Standard & Structure (AEkk...)",
      heading_bn: "ইউএই আইবিএএন (IBAN) ফরম্যাট ও গঠন",
      heading_hi: "यूएई आईबीएएन (IBAN) संरचना",
      heading_ru: "Стандарт и структура номеров IBAN в ОАЭ",
      content: "All bank accounts in the United Arab Emirates adhere to the standard 23-character International Bank Account Number (IBAN) format: AEkk BBBC CCCC CCCC CCCC CCC (where 'AE' is the country code, 'kk' represents 2 check digits, 'BBB' is the 3-digit bank identifier, and the remaining 16 digits form the individual customer account number). An IBAN is mandatory for all domestic salary transfers and international wire transfers into the UAE.",
      content_bn: "সংযুক্ত আরব আমিরাতের সকল ব্যাংক একাউন্টের জন্য ২৩ অক্ষরের আইবিএএন (IBAN) বাধ্যতামূলক: AEkk BBBC CCCC CCCC CCCC CCC ('AE' দেশের কোড, 'kk' হলো ২ ডিজিটের চেক ডিজিট, 'BBB' হলো ৩ ডিজিটের ব্যাংক কোড এবং বাকি ১৬ ডিজিট হলো গ্রাহকের একাউন্ট নম্বর)। বেতন ও রেমিট্যান্স গ্রহণের জন্য এটি অপরিহার্য।",
      content_hi: "यूएई में सभी बैंक खातों के लिए 23-वर्णों का IBAN अनिवार्य है (AEkk BBB CCCCCCCC CCCCCCCC)। यह घरेलू वेतन और अंतरराष्ट्रीय वायर ट्रांसफर के लिए आवश्यक है।",
      content_ru: "Все банковские счета в ОАЭ имеют 23-значный формат IBAN: AEkk BBBC CCCC CCCC CCCC CCC, где AE — код страны, kk — контрольные цифры, BBB — 3-значный код банка, а остальные 16 знаков — номер счета."
    },
    {
      heading: "Aani Instant Payment Platform (IPP) & Real-Time Transfers",
      heading_bn: "আনি (Aani) ইনস্ট্যান্ট পেমেন্ট প্ল্যাটফর্ম ও রিয়েল-টাইম লেনদেন",
      heading_hi: "आनी (Aani) इंस्टेंट पेमेंट प्लेटफॉर्म",
      heading_ru: "Платформа мгновенных платежей Aani (IPP) в ОАЭ",
      content: "Regulated by Al Etihad Payments (a subsidiary of the CBUAE), the 'Aani' Instant Payment Platform allows UAE residents to instantly send and receive funds 24/7/365 within seconds using only a recipient's mobile phone number or email address, alongside traditional IBAN and routing number methods.",
      content_bn: "আল ইতিহাদ পেমেন্টস (সেন্ট্রাল ব্যাংক অব ইউএই-এর অধীন) পরিচালিত 'আনি (Aani)' ইনস্ট্যান্ট পেমেন্ট প্ল্যাটফর্মের মাধ্যমে মাত্র কয়েক সেকেন্ডে ২৪/৭ টাকা পাঠানো যায়। গ্রাহকরা একাউন্ট বা আইবিএএন-এর পাশাপাশি প্রাপকের মোবাইল নম্বর বা ইমেইল দিয়েও তাৎক্ষণিক লেনদেন করতে পারেন।",
      content_hi: "CBUAE की सहायक कंपनी अल इतिहाद पेमेंट्स द्वारा संचालित 'Aani' प्लेटफॉर्म मोबाइल नंबर या ईमेल का उपयोग करके 24/7 तुरंत फंड ट्रांसफर की सुविधा देता है।",
      content_ru: "Платформа мгновенных платежей Aani позволяет переводить средства за секунды 24/7/365 по номеру мобильного телефона, адресу электронной почты или IBAN."
    },
    {
      heading: "International Remittance, SWIFT / BIC & Expat Banking",
      heading_bn: "আন্তর্জাতিক রেমিট্যান্স, সুইফট (SWIFT) ও প্রবাসী ব্যাংকিং",
      heading_hi: "अंतरराष्ट्रीय रेमिटेंस एवं स्विफ्ट कोड",
      heading_ru: "Международные денежные переводы и коды SWIFT в ОАЭ",
      content: "Millions of expatriates in the UAE send and receive billions in global remittances annually. For incoming international funds, foreign senders require the beneficiary bank's 8 or 11 character SWIFT/BIC code (e.g., EBBDAEAD for Emirates NBD, NBADAEAD for FAB), the full 23-character IBAN, and branch location details.",
      content_bn: "ইউএই-তে কর্মরত লাখ লাখ প্রবাসী প্রতি বছর নিজ দেশে রেমিট্যান্স পাঠান এবং দেশে থেকে বৈদেশিক অর্থ গ্রহণ করেন। বিদেশ থেকে ইউএই-তে ফান্ড পাঠাতে ৮ বা ১১ অক্ষরের সুইফট/BIC কোড (যেমন: EBBDAEAD, NBADAEAD), ২৩ ডিজিটের IBAN এবং ব্রাঞ্চের সঠিক নাম প্রদান করতে হয়।",
      content_hi: "विदेश से यूएई में पैसा प्राप्त करने के लिए लाभार्थी बैंक का 8 या 11 अक्षरों का स्विफ्ट कोड (उदा. EBBDAEAD, NBADAEAD) और 23-वर्णों का IBAN अनिवार्य होता है।",
      content_ru: "Для получения международных переводов в ОАЭ требуется 8- или 11-значный код SWIFT/BIC банка-получателя (напр., EBBDAEAD для Emirates NBD, NBADAEAD для FAB) и полный 23-значный IBAN."
    }
  ]
};
