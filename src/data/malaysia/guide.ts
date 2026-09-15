export interface MalaysiaBankingGuide {
  title: string;
  title_bn: string;
  title_hi: string;
  title_ru: string;
  subtitle: string;
  subtitle_bn: string;
  subtitle_hi: string;
  subtitle_ru: string;
  sections: Array<{
    id: string;
    title: string;
    title_bn: string;
    title_hi: string;
    title_ru: string;
    content: string;
    content_bn: string;
    content_hi: string;
    content_ru: string;
  }>;
}

export const malaysiaBankingGuide: MalaysiaBankingGuide = {
  title: "Complete Malaysia Banking System, RENTAS, DuitNow, IBG & SWIFT Transfer Guide (2026)",
  title_bn: "মালয়েশিয়া ব্যাংকিং ব্যবস্থা, RENTAS, DuitNow, IBG ও সুইফট কোড নির্দেশিকা (২০২৬)",
  title_hi: "मलेशिया बैंकिंग प्रणाली, रेंटास, डुइटनाउ, आईबीजी एवं स्विफ्ट कोड गाइड (2026)",
  title_ru: "Банковская система Малайзии: RENTAS, DuitNow, IBG и SWIFT переводы (2026)",
  subtitle: "Everything you need to know about Malaysian bank codes, IBG routing numbers, DuitNow instant transfers, RENTAS RTGS, PIDM deposit protection, and overseas wire transfers.",
  subtitle_bn: "মালয়েশিয়ান ব্যাংক কোড, ৫-সংখ্যার আইবিজি রাউটিং নম্বর, ডুইটনাউ (DuitNow) তাৎক্ষণিক ট্রান্সফার, রেন্টাস (RENTAS), পিআইডিএম আমানত সুরক্ষা এবং আন্তর্জাতিক রেমিট্যান্স সম্পর্কিত যাবতীয় তথ্য।",
  subtitle_hi: "मलेशियाई बैंक कोड, आईबीजी रूटिंग नंबर, डुइटनाउ इंस्टेंट ट्रांसफर, रेंटास आरटीजीएस, पीआईडीएम जमा सुरक्षा और अंतरराष्ट्रीय वायर की संपूर्ण जानकारी।",
  subtitle_ru: "Все о клиринговых кодах банков Малайзии, IBG маршрутизации, мгновенных переводах DuitNow, системе RENTAS и страховании депозитов PIDM.",
  sections: [
    {
      id: "bnm-overview",
      title: "1. Overview of the Malaysian Banking System & Bank Negara Malaysia (BNM)",
      title_bn: "১. মালয়েশিয়ান ব্যাংকিং ব্যবস্থা ও ব্যাংক নেগারা মালয়েশিয়া (BNM)",
      title_hi: "1. मलेशियाई बैंकिंग प्रणाली एवं बैंक नेगारा मलेशिया (BNM)",
      title_ru: "1. Банковская система Малайзии и регулирование Банка Негара",
      content: "Malaysia boasts one of the most developed and resilient financial ecosystems in Southeast Asia, with a pioneering dual-banking system that offers world-class conventional banking alongside global Islamic finance solutions. All banking and financial institutions are chartered, licensed, and strictly regulated by Bank Negara Malaysia (BNM), the central bank of Malaysia founded in 1959. Major domestic financial groups include Maybank (Malayan Banking Berhad), CIMB Bank, Public Bank, RHB Bank, Hong Leong Bank, and AmBank, complemented by international players like HSBC, Standard Chartered, OCBC, and UOB.",
      content_bn: "মালয়েশিয়া দক্ষিণ-পূর্ব এশিয়ার অন্যতম আধুনিক ও শক্তিশালী অর্থনৈতিক ব্যবস্থার দেশ, যেখানে প্রথাগত বাণিজ্যিক ব্যাংকিংয়ের পাশাপাশি বৈশ্বিক ইসলামিক ফাইন্যান্সের এক অনন্য দ্বৈত ব্যাংকিং কাঠামো বিদ্যমান। মালয়েশিয়ার সমস্ত বাণিজ্যিক ব্যাংক দেশটির কেন্দ্রীয় ব্যাংক 'ব্যাংক নেগারা মালয়েশিয়া' (BNM) দ্বারা নিয়ন্ত্রিত ও লাইসেন্সপ্রাপ্ত। প্রধান দেশীয় ব্যাংকের মধ্যে রয়েছে মেব্যাংক (Maybank), সিআইএমবি (CIMB), পাবলিক ব্যাংক, আরএইচবি (RHB), হং লিওং এবং অ্যামব্যাংক।",
      content_hi: "मलेशिया में दक्षिण-पूर्व एशिया की एक अत्यंत विकसित वित्तीय प्रणाली कार्यरत है, जिसमें पारंपरिक और इस्लामिक बैंकिंग दोनों का मजबूत समन्वय है। सभी बैंक बैंक नेगारा मलेशिया (BNM - केंद्रीय बैंक) द्वारा विनियमित हैं। प्रमुख बैंकों में मेबैंक, सीआईएमबी, पब्लिक बैंक, आरएचबी और एचएसबीसी शामिल हैं।",
      content_ru: "Малайзия обладает одной из самых передовых банковских систем Юго-Восточной Азии с развитым исламским и конвенциональным банкингом. Регулятором выступает Центральный банк Малайзии (Bank Negara Malaysia, BNM). Крупнейшие институты: Maybank, CIMB, Public Bank, RHB, Hong Leong и зарубежные HSBC, StanChart, UOB."
    },
    {
      id: "clearing-routing",
      title: "2. How Malaysian Bank Codes & Interbank GIRO (IBG) Routing Work",
      title_bn: "২. মালয়েশিয়ান ব্যাংক কোড ও আইবিজি (IBG) ক্লিয়ারিং রাউটিং যেভাবে গঠিত হয়",
      title_hi: "2. मलेशियाई बैंक कोड एवं आईबीजी रूटिंग कोड की संरचना",
      title_ru: "2. Структура клиринговых кодов банков Малайзии и системы IBG",
      content: "Domestic interbank fund routing in Malaysia is facilitated by Payments Network Malaysia (PayNet) and BNM. Domestic electronic fund transfers rely on standard Bank Codes (e.g. 01 for Maybank, 02 for CIMB, 03 for Public Bank, 04 for RHB) paired with specific 3-digit branch codes to create 5-digit clearing routing identifiers (e.g. 01001 for Maybank Main Branch). When completing online banking transfers or setting up automated payroll payments, entering the correct bank and branch code ensures seamless settlement.",
      content_bn: "মালয়েশিয়ায় অভ্যন্তরীণ আন্তঃব্যাংক লেনদেন পে-নেট (PayNet) এবং ব্যাংক নেগারার মাধ্যমে নিষ্পত্তি হয়। আন্তঃব্যাংক স্থানান্তরের জন্য ২-সংখ্যার অফিশিয়াল ব্যাংক কোড (যেমন মেব্যাংকের জন্য ০১, সিআইএমবির জন্য ০২, পাবলিক ব্যাংকের জন্য ০৩) এবং ৩-সংখ্যার ব্রাঞ্চ কোড মিলিয়ে ৫-ডিজিটের রাউটিং কোড গঠিত হয় (যেমন ০১০০১)। সঠিক ব্যাংক কোড ও শাখা নির্বাচন অনলাইন ব্যাংকিং ও বেতন স্থানান্তরে ভুল এড়াতে অপরিহার্য।",
      content_hi: "मलेशिया में अंतर-बैंक इलेक्ट्रॉनिक लेनदेन PayNet और BNM द्वारा संचालित होते हैं। प्रत्येक बैंक को 2-अंकीय कोड आवंटित है (जैसे मेबैंक 01, CIMB 02, पब्लिक बैंक 03), जो 3-अंकीय शाखा कोड के साथ 5-अंकीय आईबीজি रूटिंग कोड बनाता है।",
      content_ru: "Внутристрановые переводы обслуживаются платежной сетью PayNet и регулятором BNM. Банкам присвоены 2-значные коды (Maybank: 01, CIMB: 02, Public Bank: 03), образующие вместе с 3-значным кодом отделения 5-значный клиринговый идентификатор IBG."
    },
    {
      id: "duitnow-rentas",
      title: "3. DuitNow Instant Transfers, RENTAS RTGS & JomPAY Bill Payments",
      title_bn: "৩. ডুইটনাউ (DuitNow) ইনস্ট্যান্ট ট্রান্সফার, রেন্টাস (RENTAS) ও জমপে (JomPAY)",
      title_hi: "3. डुइटनाउ इंस्टेंट ट्रांसफर, रेंटास आरटीजीएस एवं जोमपे बिल भुगतान",
      title_ru: "3. Мгновенные переводы DuitNow, система RENTAS и платежи JomPAY",
      content: "Malaysia operates cutting-edge real-time payment channels: 1) DuitNow Instant Transfer: Allows 24/7/365 immediate fund transfer up to RM50,000 per transaction using Bank Account Numbers or DuitNow IDs (Mobile Number, Malaysian NRIC, Passport, or Business Registration Number); 2) RENTAS (Real-Time Electronic Transfer of Funds and Securities): Malaysia’s large-value RTGS clearing network for high-value interbank settlements; 3) JomPAY: The national online bill payment scheme linking over 5,000 corporate and utility billers; 4) Interbank GIRO (IBG): Scheduled batch transfers processing within standard banking business hours.",
      content_bn: "মালয়েশিয়ায় আধুনিক পেমেন্ট চ্যানেলগুলোর মধ্যে রয়েছে: ১) ডুইটনাউ (DuitNow): ২৪/৭ তাৎক্ষণিক টাকা পাঠানোর সুবিধা যাতে মোবাইল নম্বর, পরিচয়পত্র নম্বর (NRIC) বা ব্যাংক অ্যাকাউন্ট ব্যবহার করা যায়; ২) রেন্টাস (RENTAS): উচ্চমূল্যের কর্পোরেট ও আন্তঃব্যাংক আরটিজিএস (RTGS) রিয়েল-টাইম সেটেলমেন্ট ব্যবস্থা; ৩) জমপে (JomPAY): মালয়েশিয়ার জাতীয় বিল পেমেন্ট সেবা; ৪) ইন্টারব্যাংক জিরো (IBG): নির্ধারিত ব্যাংকিং কর্মদিবসে কার্যকর হওয়া ব্যাচ ফান্ড ট্রান্সফার।",
      content_hi: "मलेशिया में मुख्य भुगतान चैनलों में शामिल हैं: 1) डुइटनाउ (DuitNow): मोबाइल नंबर, एनआरआईसी या बैंक खाते के जरिए 24/7 तत्काल फंड ट्रांसफर; 2) रेंटास (RENTAS): उच्च-मूल्य के अंतर-बैंक लेनदेन के लिए राष्ट्रीय आरटीजीएस प्रणाली; 3) जोमपे (JomPAY): राष्ट्रीय बिल भुगतान प्रणाली।",
      content_ru: "Малайзия использует современные платежные каналы: 1) DuitNow: круглосуточные мгновенные переводы по номеру телефона, NRIC или номеру счета до 50 000 RM; 2) RENTAS: система валовых расчетов в реальном времени (RTGS) для крупных межбанковских сумм; 3) JomPAY: единая система оплаты счетов."
    },
    {
      id: "pidm-protection",
      title: "4. PIDM Deposit Insurance (Protected up to RM250,000)",
      title_bn: "৪. পিআইডিএম (PIDM) আমানত বীমা সুরক্ষা (সর্বোচ্চ ২,৫০,০০০ রিঙ্গিত)",
      title_hi: "4. पीआईडीएम जमा बीमा सुरक्षा (RM 2,50,000 तक सुरक्षित)",
      title_ru: "4. Государственное страхование вкладов PIDM (до 250 000 RM)",
      content: "All eligible customer deposits across member commercial banks and Islamic banks in Malaysia are automatically protected by Perbadanan Insurans Deposit Malaysia (PIDM). Under the Malaysian Deposit Insurance System, eligible deposits (savings accounts, current accounts, and fixed deposit investments) are insured up to RM250,000 per depositor per member institution by the Government of Malaysia. Conventional and Islamic accounts are insured separately up to RM250,000 each.",
      content_bn: "মালয়েশিয়ার সমস্ত লাইসেন্সপ্রাপ্ত সদস্য ব্যাংকের আমানত 'পেরবাদানান ইন্সুরান ডিপোজিট মালয়েশিয়া' (PIDM) দ্বারা সুরক্ষিত। দেশটির আমানত সুরক্ষা আইনের অধীনে প্রতিটি গ্রাহকের সেভিংস, কারেন্ট এবং ফিক্সড ডিপোজিট আমানত সদস্য ব্যাংক প্রতি সর্বোচ্চ ২,৫০,০০০ মালয়েশিয়ান রিঙ্গিত (RM 250,000) পর্যন্ত সরকারিভাবে বীমাকৃত। ইসলামিক ও কনভেনশনাল ডিপোজিট আলাদাভাবে ২,৫০,০০০ রিঙ্গিত করে সুরক্ষা পায়।",
      content_hi: "मलेशिया में सभी पात्र बैंक जमा परबदानन इंसुरान डिपॉजिट मलेशिया (PIDM) द्वारा कानूनी रूप से सुरक्षित हैं। प्रत्येक बैंक में प्रति जमाकर्ता बचत, चालू व सावधि जमा पर RM 2,50,000 तक की सरकारी बीमा गारंटी प्राप्त होती है।",
      content_ru: "Депозиты во всех банках-участниках автоматически застрахованы государственной корпорацией страхования вкладов Малайзии (PIDM). Лимит страхового возмещения составляет до 250 000 малайзийских ринггитов (RM) на одного вкладчика в каждом банке."
    },
    {
      id: "swift-international",
      title: "5. SWIFT Wire Transfers & Inward Remittances to Malaysia",
      title_bn: "৫. সুইফট (SWIFT) ওয়্যার ও মালয়েশিয়ায় রেমিট্যান্স প্রেরণের নির্দেশিকা",
      title_hi: "5. स्विफ्ट वायर ट्रांसफर एवं मलेशिया में विदेशी रेमिटेंस",
      title_ru: "5. Международные переводы SWIFT и входящие платежи в Малайзию",
      content: "For cross-border inward remittances to Malaysian bank accounts from Singapore, the United States, Europe, the United Kingdom, Bangladesh, or India, foreign senders must supply: 1) The beneficiary bank's 8 or 11-character SWIFT/BIC Code (e.g. MBBEMYKL for Maybank, CIBBMYKL for CIMB, PBBEMYKL for Public Bank); 2) Beneficiary Full Name matching their Malaysian NRIC or Passport; 3) Full Malaysian Bank Account Number; 4) Bank Head Office or Branch Address in Kuala Lumpur. Inward foreign currency wires are converted at daily bank forex board rates or held in Multi-Currency Foreign Accounts.",
      content_bn: "বিদেশ (যেমন সিঙ্গাপুর, মধ্যপ্রাচ্য, ইউরোপ, যুক্তরাষ্ট্র বা বাংলাদেশ) থেকে মালয়েশিয়ার ব্যাংক অ্যাকাউন্টে আন্তর্জাতিক রেমিট্যান্স প্রেরণের জন্য প্রয়োজনীয় তথ্য: ১) সংশ্লিষ্ট ব্যাংকের ৮ বা ১১ অক্ষরের সুইফট কোড (যেমন মেব্যাংকের জন্য MBBEMYKL, সিআইএমবির জন্য CIBBMYKL, পাবলিক ব্যাংকের জন্য PBBEMYKL); ২) একাউন্টধারীর পাসপোর্ট বা এনআইডি অনুযায়ী পূর্ণ নাম; ৩) সঠিক ব্যাংক হিসাব নম্বর; ৪) ব্যাংকের শাখা বা কুয়ালালামপুর প্রধান কার্যালয়ের ঠিকানা।",
      content_hi: "विदेशों से मलेशियाई खातों में धन प्राप्त करने के लिए 8 या 11 अक्षरों का स्विफ्ट/बीआईसी कोड (जैसे मेबैंक के लिए MBBEMYKL, CIMB के लिए CIBBMYKL), खाताधारक का पूरा नाम और बैंक खाता संख्या आवश्यक है।",
      content_ru: "Для получения международного валютного перевода SWIFT на счет в Малайзии отправителю требуется предоставить: 1) 8- или 11-значный SWIFT/BIC код банка (например, MBBEMYKL для Maybank); 2) ФИО получателя по паспорту/NRIC; 3) Номер банковского счета; 4) Адрес банка в Куала-Лумпуре."
    }
  ]
};
