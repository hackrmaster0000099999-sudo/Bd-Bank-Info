export interface SingaporeBankingGuide {
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

export const singaporeBankingGuide: SingaporeBankingGuide = {
  title: "Complete Singapore Banking System, MEPS+, FAST & SWIFT Transfer Guide (2026)",
  title_bn: "সিঙ্গাপুর ব্যাংকিং ব্যবস্থা, MEPS+, FAST, PayNow ও সুইফট কোড গাইড (২০২৬)",
  title_hi: "सिंगापुर बैंकिंग प्रणाली, MEPS+, FAST, PayNow एवं स्विफ्ट ट्रांसफर गाइड (2026)",
  title_ru: "Банковская система Сингапура: MEPS+, FAST, PayNow и SWIFT переводы (2026)",
  subtitle: "Everything you need to know about Singapore bank codes, 3-digit branch codes, FAST transfers, PayNow, MEPS+, and international wires.",
  subtitle_bn: "সিঙ্গাপুরের ৪ ডিজিটের ব্যাংক কোড, ৩ ডিজিটের ব্রাঞ্চ কোড, FAST ফান্ড ট্রান্সফার, PayNow এবং আন্তর্জাতিক রেমিট্যান্স প্রেরণের যাবতীয় তথ্য।",
  subtitle_hi: "सिंगापुर के 4-अंकीय बैंक कोड, 3-अंकीय शाखा कोड, FAST इंस्टेंट ट्रांसफर, PayNow एवं अंतरराष्ट्रीय वायर की संपूर्ण जानकारी।",
  subtitle_ru: "Все о клиринговых кодах банков Сингапура, 3-значных кодах отделений, FAST, PayNow, MEPS+ и международных переводах SWIFT.",
  sections: [
    {
      id: "overview",
      title: "1. Overview of the Singapore Banking System & MAS Regulation",
      title_bn: "১. সিঙ্গাপুরের ব্যাংকিং ব্যবস্থা ও মনিটারি অথরিটি অব সিঙ্গাপুর (MAS)",
      title_hi: "1. सिंगापुर बैंकिंग प्रणाली एवं मॉनेटरी अथॉरिटी ऑफ सिंगापुर (MAS)",
      title_ru: "1. Банковская система Сингапура и регулирование MAS",
      content: "Singapore is Southeast Asia's premier financial hub and a leading global wealth management center. All banking institutions in Singapore are strictly regulated by the Monetary Authority of Singapore (MAS), which acts as the nation's central bank and integrated financial supervisor. Banks are classified into Full Banks (such as DBS, POSB, OCBC, UOB), Qualified Full Banks (QFBs like Standard Chartered, Citibank, HSBC, Maybank), Wholesale Banks, and Digital Banks (such as Trust Bank, GXS Bank, MariBank, and ANEXT Bank).",
      content_bn: "সিঙ্গাপুর হলো দক্ষিণ-পূর্ব এশিয়া ও সমগ্র বিশ্বের অন্যতম শীর্ষস্থানীয় নিরাপদ অর্থনৈতিক কেন্দ্র। দেশটির সকল বাণিজ্যিক ব্যাংক এবং অর্থনৈতিক প্রতিষ্ঠান মনিটারি অথরিটি অব সিঙ্গাপুর (MAS) দ্বারা নিয়ন্ত্রিত হয়। ব্যাংকগুলোকে ফুল ব্যাংক (DBS, POSB, OCBC, UOB), কোয়ালিফাইড ফুল ব্যাংক (Standard Chartered, Citibank, HSBC, Maybank), হোলসেল ব্যাংক এবং নতুন প্রজন্মের ডিজিটাল ব্যাংক (Trust Bank, GXS Bank, MariBank) হিসেবে ভাগ করা হয়।",
      content_hi: "सिंगापुर दक्षिण-पूर्व एशिया का प्रमुख वित्तीय केंद्र है। सिंगापुर के सभी बैंक मॉनेटरी अथॉरिटी ऑफ सिंगापुर (MAS) द्वारा कड़ाई से विनियमित हैं। इनमें फुल बैंक (DBS, OCBC, UOB), क्वालिफाइड फुल बैंक (Standard Chartered, Citibank, HSBC) और नए डिजिटल बैंक (Trust Bank, GXS Bank, MariBank) शामिल हैं।",
      content_ru: "Сингапур — ключевой финансовый хаб Азии. Все кредитные организации регулируются Денежно-кредитным управлением Сингапура (MAS), выполняющим функции центрального банка. Банки делятся на полнолицензионные (DBS, OCBC, UOB), QFB (Citibank, HSBC, StanChart) и цифровые банки (Trust Bank, GXS Bank, MariBank)."
    },
    {
      id: "clearing-format",
      title: "2. How Singapore Bank Routing & Clearing Numbers Work (4-Digit Bank + 3-Digit Branch)",
      title_bn: "২. সিঙ্গাপুরে ৭ ডিজিটের ক্লিয়ারিং রাউটিং নম্বর যেভাবে গঠিত হয়",
      title_hi: "2. सिंगापुर बैंक रूटिंग एवं क्लियरिंग कोड की संरचना (4-अंकीय बैंक + 3-अंकीय शाखा)",
      title_ru: "2. Структура клиринговых и маршрутных кодов Сингапура (4 цифры банка + 3 цифры филиала)",
      content: "Domestic interbank transfers in Singapore use a standard 7-digit clearing routing code. The first 4 digits represent the Bank Code assigned by MAS and the Association of Banks in Singapore (ABS) — for example, 7171 for DBS/POSB, 7339 for OCBC, 7375 for UOB, 7083 for Standard Chartered, and 7214 for Citibank. The following 3 digits designate the specific Branch Code (e.g. 001 for Raffles Place / Head Office, 010 for Orchard, 025 for Tampines). Combined, they form the 7-digit routing number (e.g., 7171-001 or 7171001).",
      content_bn: "সিঙ্গাপুরে অভ্যন্তরীণ আন্তঃব্যাংক ট্রান্সফারের জন্য একটি ৭ ডিজিটের ক্লিয়ারিং রাউটিং কোড ব্যবহৃত হয়। প্রথম ৪টি ডিজিট হলো ব্যাংক কোড (যেমন: ৭১৭১ ডিবিএস/পিওএসবি, ৭৩৩৯ ওসিবিসি, ৭৩৭৫ ইউওবি, ৭০৮৩ স্ট্যান্ডার্ড চার্টার্ড, ৭২১৪ সিটিব্যাংক)। পরবর্তী ৩টি ডিজিট হলো সুনির্দিষ্ট শাখা বা ব্রাঞ্চ কোড (যেমন: ০০১ হেড অফিস, ০১০ অরচার্ড)। এই দুটি অংশ মিলে ৭ ডিজিটের রাউটিং কোড তৈরি হয় (যেমন: ৭১৭১০০১)।",
      content_hi: "सिंगापुर में स्थानीय इंटरबैंक ट्रांसफर के लिए 7-अंकीय क्लियरिंग रूटिंग कोड प्रयुक्त होता है। पहले 4 अंक बैंक कोड होते हैं (जैसे DBS/POSB के लिए 7171, OCBC के लिए 7339, UOB के लिए 7375) और अंतिम 3 अंक विशिष्ट शाखा कोड (001, 010 आदि) होते हैं। यह 7-अंकीय संख्या (उदा. 7171001) डोमेस्टिक क्लीयरिंग के लिए आवश्यक है।",
      content_ru: "Для межбанковских переводов внутри страны используется 7-значный клиринговый код: первые 4 цифры — код банка (7171 для DBS/POSB, 7339 для OCBC, 7375 для UOB, 7083 для StanChart), а следующие 3 цифры — код филиала (например, 001 для головного офиса). Вместе они формируют единый код (например, 7171001)."
    },
    {
      id: "fast-paynow-meps",
      title: "3. MEPS+, FAST, PayNow & GIRO Payment Networks",
      title_bn: "৩. MEPS+, FAST, PayNow ও GIRO পেমেন্ট নেটওয়ার্কের বিবরণ",
      title_hi: "3. MEPS+, FAST, PayNow एवं GIRO भुगतान नेटवर्क",
      title_ru: "3. Платежные сети Сингапура: MEPS+, FAST, PayNow и GIRO",
      content: "Singapore features one of the world's most advanced electronic payment infrastructures:\n• FAST (Fast And Secure Transfers): 24/7 instant electronic interbank transfer network supporting real-time transactions up to SGD 200,000 per transfer across all participating banks.\n• PayNow: Instant peer-to-peer and peer-to-merchant proxy payment overlay running on FAST, allowing immediate transfers using Mobile Number, NRIC/FIN, UEN (Company ID), or Virtual Payment Address (VPA).\n• MEPS+ (MAS Electronic Payment System): The national Real-Time Gross Settlement (RTGS) system for high-value and critical wholesale interbank payments.\n• GIRO: The automated direct debit and credit billing network used for recurring bills, utility payments, and corporate payroll.",
      content_bn: "সিঙ্গাপুরের ডিজিটাল পেমেন্ট নেটওয়ার্ক অত্যন্ত আধুনিক ও সুরক্ষিত:\n• FAST (Fast And Secure Transfers): ২৪/৭ তাৎক্ষণিক ইন্টারব্যাংক ফান্ড ট্রান্সফার যা প্রতিবারে সর্বোচ্চ SGD ২,০০,০০০ পর্যন্ত তাৎক্ষণিক পৌঁছে দেয়।\n• PayNow: মোবাইল নম্বর, এনআরআইসি (NRIC/FIN) বা কোম্পানির UEN ব্যবহার করে সেকেন্ডের মধ্যে টাকা পাঠানোর অত্যন্ত জনপ্রিয় সিস্টেম।\n• MEPS+: উচ্চমূল্যের এবং প্রাতিষ্ঠানিক রিয়েল-টাইম গ্রস সেটেলমেন্ট (RTGS) সিস্টেম।\n• GIRO: নিয়মিত বিল পরিশোধ, ইউটিলিটি এবং বেতন বিতরণের জন্য ব্যবহৃত ব্যাচ পেমেন্ট নেটওয়ার্ক।",
      content_hi: "सिंगापुर में अत्याधुनिक डिजिटल नेटवर्क मौजूद हैं:\n• FAST: 24/7 तात्कालिक ट्रांसफर जो अधिकतम SGD 200,000 तक तुरंत भेजता है।\n• PayNow: मोबाइल नंबर, NRIC/FIN या कंपनी UEN के जरिए सेकंडों में ट्रांसफर करने की लोकप्रिय सेवा।\n• MEPS+: बड़े कॉर्पोरेट और बैंक-टू-बैंक सेटलमेंट हेतु आरटीजीएस (RTGS) नेटवर्क।\n• GIRO: नियमित बिल और वेतन भुगतान के लिए उपयोग की जाने वाली डायरेक्ट डेबिट सुविधा।",
      content_ru: "Сингапур обладает передовой расчетной инфраструктурой:\n• FAST: круглосуточная система мгновенных межбанковских переводов суммой до 200 000 SGD за операцию.\n• PayNow: мгновенные расчеты по номеру телефона, NRIC или номеру компании UEN.\n• MEPS+: государственная система валовых расчетов в реальном времени (RTGS) для крупных межбанковских сумм.\n• GIRO: система периодических прямых списаний для коммунальных счетов и зарплатных проектов."
    },
    {
      id: "international-wires",
      title: "4. International Wire Transfers to Singapore: Does Singapore Use IBAN?",
      title_bn: "৪. সিঙ্গাপুরে আন্তর্জাতিক রেমিট্যান্স: সিঙ্গাপুরে কি IBAN ব্যবহৃত হয়?",
      title_hi: "4. सिंगापुर में अंतरराष्ट्रीय वायर ट्रांसफर: क्या सिंगापुर IBAN का उपयोग करता है?",
      title_ru: "4. Международные переводы в Сингапур: используется ли IBAN?",
      content: "IMPORTANT: Singapore does NOT use the International Bank Account Number (IBAN) standard. Attempts to enter a Singapore account into an IBAN field will fail. To send international wire transfers via SWIFT to Singapore, you need: 1. Beneficiary Full Legal Name, 2. Beneficiary Bank's 8 or 11 character SWIFT/BIC code (e.g., DBSSSGSG for DBS, OCBCSGSG for OCBC, UOVBSGSG for UOB), 3. 4-digit Bank Code and 3-digit Branch Code, and 4. Beneficiary Account Number (typically 9 to 12 digits depending on the bank).",
      content_bn: "বিশেষ সতর্কতা: সিঙ্গাপুরে আইবিএএন (IBAN) কোড ব্যবহৃত হয় না। অনেক আন্তর্জাতিক প্রেরক ভুলবশত IBAN খুঁজতে চান, তবে সিঙ্গাপুরের ক্ষেত্রে কেবল সুইফট কোড ও মূল অ্যাকাউন্ট নম্বরই যথেষ্ট। বিদেশ থেকে সিঙ্গাপুরে টাকা পাঠাতে প্রয়োজন: ১. প্রাপকের পূর্ণ বৈধ নাম, ২. ব্যাংকের ৮ বা ১১ অক্ষরের SWIFT/BIC কোড (যেমন DBS-এর জন্য DBSSSGSG, OCBC-এর জন্য OCBCSGSG, UOB-এর জন্য UOVBSGSG), ৩. ব্যাংকের ৪ ডিজিটের ব্যাংক কোড ও ৩ ডিজিটের ব্রাঞ্চ কোড, এবং ৪. প্রাপকের মূল একাউন্ট নম্বর।",
      content_hi: "महत्वपूर्ण नोट: सिंगापुर IBAN प्रणाली का उपयोग नहीं करता है। अंतरराष्ट्रीय वायर ट्रांसफर के लिए केवल SWIFT/BIC कोड, बैंक कोड, शाखा कोड एवं ग्राहक खाता संख्या की आवश्यकता होती है।",
      content_ru: "ВАЖНО: В Сингапуре НЕ используется формат IBAN. Попытка ввести сингапурский счет в поле IBAN приведет к ошибке. Для международного перевода SWIFT требуются: имя получателя, SWIFT/BIC код банка (например, DBSSSGSG для DBS), клиринговые коды банка и отделения, и номер счета."
    }
  ]
};
