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

export const australiaBankingGuide: BankingGuide = {
  title: "Australian Banking Routing & BSB Code Master Directory",
  title_bn: "অস্ট্রেলিয়ান ব্যাংকিং রাউটিং ও বিএসবি (BSB) কোড পূর্ণাঙ্গ গাইড",
  title_hi: "ऑस्ट्रेलियाई बैंकिंग राउटिंग व बीएसबी (BSB) कोड सम्पूर्ण गाइड",
  title_ru: "Полное руководство по банковским BSB кодам Австралии",
  summary: "Comprehensive guide to Australian BSB (Bank-State-Branch) codes, account numbers, NPP (New Payments Platform), Osko real-time transfers, direct entry, and international SWIFT wire transfers regulated by AusPayNet and the Reserve Bank of Australia (RBA).",
  summary_bn: "অস্ট্রেলিয়ার বিএসবি (Bank-State-Branch) কোড, একাউন্ট নম্বর, এনপিপি (New Payments Platform), ওস্কো (Osko) ইনস্ট্যান্ট পেমেন্ট এবং আন্তর্জাতিক সুইফট ওয়্যার ট্রান্সফারের পূর্ণাঙ্গ সহায়িকা।",
  summary_hi: "ऑस्ट्रेलिया के बीएसबी (Bank-State-Branch) कोड, खाता संख्या, NPP ओस्को रीयल-टाइम ट्रांसफर व अंतरराष्ट्रीय स्विफ्ट वायर ट्रांसफर की विस्तृत गाइड।",
  summary_ru: "Полный справочник по австралийским кодам BSB (Bank-State-Branch), системе мгновенных платежей NPP/Osko, Direct Entry и международным переводам SWIFT.",
  sections: [
    {
      heading: "What is an Australian BSB Code?",
      heading_bn: "অস্ট্রেলিয়ান বিএসবি (BSB) কোড কী?",
      heading_hi: "ऑस्ट्रेलियाई बीएसबी (BSB) कोड क्या है?",
      heading_ru: "Что такое австралийский BSB код?",
      content: "A BSB (Bank-State-Branch) is a unique 6-digit numerical code used in Australia to identify individual bank branches for domestic payments, salary direct credits, automated debits, and EFT transfers. Formatted as XXX-XXX, the first 2 digits specify the financial institution, the 3rd digit indicates the Australian state or territory, and the final 3 digits denote the specific branch office.",
      content_bn: "বিএসবি (BSB - Bank-State-Branch) হলো ৬ ডিজিটের একটি নির্দিষ্ট কোড যা অস্ট্রেলিয়ায় অভ্যন্তরীণ পেমেন্ট, বেতন জমা, ইলেকট্রনিক ফান্ড ট্রান্সফার (EFT) ও ডাইরেক্ট ডেবিটের জন্য প্রতিটি ব্যাংক ব্রাঞ্চকে চিহ্নিত করে। এটি সাধারণত XXX-XXX ফরম্যাটে লেখা হয় (যেমন ০৬২-০০০)।",
      content_hi: "बीएसबी (Bank-State-Branch) 6 अंकों का एक विशेष कोड है जिसका उपयोग ऑस्ट्रेलिया में घरेलू बैंक ट्रांसफर, वेतन जमा, डायरेक्ट डेबिट और ईएफटी (EFT) के लिए प्रत्येक शाखा की पहचान हेतु किया जाता है।",
      content_ru: "BSB (Bank-State-Branch) — это 6-значный цифровой код, используемый в Австралии для идентификации банка и конкретного отделения при межбанковских переводах, начислении зарплаты и прямом дебетовании."
    },
    {
      heading: "BSB Code Structure & State Digits Breakdown",
      heading_bn: "বিএসবি কোডের গঠন ও স্টেট ডিজিট বিশ্লেষণ",
      heading_hi: "बीएसबी कोड की संरचना एवं राज्य कोड",
      heading_ru: "Структура BSB кода и коды штатов",
      content: "Australian BSB numbers are structured as follows: Digits 1-2 identify the Bank (e.g., 06=CommBank, 03=Westpac, 08=NAB, 01=ANZ, 18=Macquarie, 63=Bendigo). Digit 3 identifies the State (1=ACT, 2=NSW, 3=VIC, 4=QLD, 5=SA, 6=WA, 7=TAS, 8=NT, 9=Australia-wide). Digits 4-6 identify the specific branch location.",
      content_bn: "বিএসবি কোডের ১ম ২ ডিজিট ব্যাংক নির্দেশ করে (যেমন: ০৬=কমনওয়েলথ ব্যাংক, ০৩=ওয়েস্টপ্যাক, ০৮=ন্যাব, ০১=এএনজেড)। ৩য় ডিজিট অস্ট্রেলিয়ার প্রদেশ/স্টেট নির্দেশ করে (১=ক্যানবেরা/ACT, ২=নিউ সাউথ ওয়েলস/সিডনি, ৩=ভিক্টোরিয়া/মেলবোর্ন, ৪=কুইন্সল্যান্ড, ৫=সাউথ অস্ট্রেলিয়া, ৬=ওয়েস্টার্ন অস্ট্রেলিয়া)। শেষ ৩ ডিজিট সুনির্দিষ্ট ব্রাঞ্চ কোড।",
      content_hi: "बीएसबी कोड के प्रथम 2 अंक बैंक की पहचान करते हैं (उदा. 06=CommBank, 03=Westpac, 08=NAB, 01=ANZ)। तीसरा अंक राज्य दर्शाता है (2=NSW, 3=VIC, 4=QLD आदि)। अंतिम 3 अंक शाखा संख्या होते हैं।",
      content_ru: "Первые 2 цифры определяют банк (06=CommBank, 03=Westpac, 08=NAB, 01=ANZ), 3-я цифра указывает на штат (2=NSW, 3=VIC, 4=QLD), а последние 3 цифры — номер филиала."
    },
    {
      heading: "New Payments Platform (NPP), Osko & PayID",
      heading_bn: "এনপিপি (NPP), ওস্কো (Osko) এবং পে-আইডি (PayID)",
      heading_hi: "न्यू पेमेंट्स प्लेटफॉर्म (NPP), ओस्को एवं PayID",
      heading_ru: "Система NPP, Osko и PayID в Австралии",
      content: "Australia's modern banking infrastructure leverages the New Payments Platform (NPP) powered by Osko by BPAY, enabling 24/7/365 real-time instantaneous funds transfers. Users can transact using their standard BSB and Account Number or alias using PayID (phone number, email address, or Australian Business Number - ABN).",
      content_bn: "অস্ট্রেলিয়ার সর্বাধুনিক পেমেন্ট সিস্টেম হলো এনপিপি (New Payments Platform) ও ওস্কো (Osko), যা বছরে ৩৬৫ দিন ২৪ ঘণ্টা মুহূর্তের মধ্যে টাকা পাঠানোর সুবিধা দেয়। গ্রাহকরা বিএসবি ও একাউন্ট নম্বরের পাশাপাশি পে-আইডি (মোবাইল নম্বর, ইমেইল বা ABN) দিয়ে সরাসরি লেনদেন করতে পারেন।",
      content_hi: "ऑस्ट्रेलिया का न्यू पेमेंट्स प्लेटफॉर्म (NPP) ओस्को (Osko) के माध्यम से 24/7/365 तुरंत फंड ट्रांसफर की सुविधा प्रदान करता है।",
      content_ru: "Платформа NPP вместе с сервисом Osko обеспечивает мгновенные межбанковские переводы в режиме 24/7 по BSB/счету или идентификатору PayID."
    },
    {
      heading: "International Wire Transfers to Australia (SWIFT/BIC)",
      heading_bn: "অস্ট্রেলিয়ায় আন্তর্জাতিক ওয়্যার ট্রান্সফার ও সুইফট কোড",
      heading_hi: "ऑस्ट्रेलिया में अंतरराष्ट्रीय वायर ट्रांसफर एवं स्विफ्ट कोड",
      heading_ru: "Международные банковские переводы SWIFT в Австралию",
      content: "When sending international money transfers into an Australian bank account from overseas, the sender requires the bank's 8 or 11-character SWIFT/BIC code (e.g. CTBAAU2S for CommBank, WPACAU2S for Westpac), the recipient's 6-digit BSB code, their domestic account number (up to 9 digits), and full account holder name.",
      content_bn: "বিদেশ থেকে অস্ট্রেলিয়ার কোনো ব্যাংক একাউন্টে রেমিট্যান্স বা ওয়্যার ট্রান্সফার পাঠানোর জন্য ব্যাংকের ৮ বা ১১ ডিজিটের সুইফট/বিআইসি (SWIFT/BIC) কোড, ৬ ডিজিটের বিএসবি (BSB) কোড এবং বেনিফিশিয়ারির ৯ ডিজিটের একাউন্ট নম্বর প্রয়োজন হয়।",
      content_hi: "विदेश से ऑस्ट्रेलिया में धन भेजने के लिए बैंक का 8 या 11 अक्षरों का SWIFT/BIC कोड, 6 अंकों का BSB कोड और 9 अंकों का खाता नंबर आवश्यक होता है।",
      content_ru: "Для международного перевода в Австралию отправителю необходим SWIFT/BIC код банка (например, CTBAAU2S для CBA), 6-значный BSB код и номер счета получателя."
    }
  ]
};
