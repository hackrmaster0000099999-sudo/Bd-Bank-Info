// Comprehensive Canadian Banking System Guide (Payments Canada, Transit & Institution Numbers)

export interface CanadaGuideContent {
  title: string;
  subtitle: string;
  sections: {
    id: string;
    heading: string;
    content: string;
    points?: string[];
  }[];
}

export const CANADA_GUIDE: Record<'en' | 'bn' | 'hi' | 'ru', CanadaGuideContent> = {
  en: {
    title: 'Complete Guide to Canadian Transit Numbers, Institution Numbers & EFT Routing',
    subtitle: 'Understanding Payments Canada, Direct Deposit Cheque lines, Wire SWIFT Codes & ACSS Clearing.',
    sections: [
      {
        id: 'what-is-transit-number',
        heading: 'What is a Canadian Transit Number & Institution Number?',
        content: 'In Canada, financial transactions are governed by Payments Canada through the Automated Clearing Settlement System (ACSS). A bank account routing structure consists of three essential numbers: Transit Number (5 digits), Institution Number (3 digits), and Account Number (7 to 12 digits).',
        points: [
          'Transit Number (5 digits): Identifies the exact branch where your account is held.',
          'Institution Number (3 digits): Identifies the specific bank (e.g., 003 for RBC, 004 for TD, 001 for BMO, 002 for Scotiabank, 010 for CIBC).',
          '9-Digit EFT Routing Format: For electronic direct deposit, payroll, and CRA tax refunds, the 9-digit format is 0 + Institution Number (3 digits) + Transit Number (5 digits) -> 0YYYXXXXX.'
        ]
      },
      {
        id: 'how-to-read-canadian-cheque',
        heading: 'How to Read a Canadian Cheque Line (MICR)',
        content: 'At the bottom of any Canadian bank cheque or direct deposit form, you will find three sets of MICR numbers:',
        points: [
          'Cheque Number (3-4 digits): Top or first set of digits on the left.',
          'Transit Number (5 digits): The middle 5-digit number indicating your branch.',
          'Institution Number (3 digits): The 3-digit number identifying the bank.',
          'Account Number (7-12 digits): The rightmost set of numbers representing your unique bank account.'
        ]
      },
      {
        id: 'canadian-swift-wire',
        heading: 'International Wire Transfers to Canada (SWIFT / BIC)',
        content: 'When receiving money internationally from the US, UK, Europe, India, Bangladesh, or elsewhere, you will need your Canadian bank’s 8 or 11-character SWIFT/BIC code along with your full account details and Canadian branch address.'
      }
    ]
  },
  bn: {
    title: 'কানাডিয়ান ব্যাংক ট্রানজিট নম্বর, ইন্সটিটিউশন কোড ও EFT রাউটিং গাইড',
    subtitle: 'পেমেন্টস কানাডা, ডিরেক্ট ডিপোজিট, পে-রোল, চেক লাইন ও সুইফট কোড নির্দেশিকা',
    sections: [
      {
        id: 'what-is-transit-number',
        heading: 'কানাডিয়ান ট্রানজিট নম্বর ও ইন্সটিটিউশন নম্বর কী?',
        content: 'কানাডার ব্যাংকিং ব্যবস্থায় লেনদেন পরিচালিত হয় পেমেন্টস কানাডা (Payments Canada) এর ACSS সিস্টেমের মাধ্যমে। যেকোনো অ্যাকাউন্টের সঠিক পরিচিতির জন্য তিনটি অংশ থাকে:',
        points: [
          'ট্রানজিট নম্বর (৫ সংখ্যা): আপনার ব্যাংক ব্রাঞ্চের সুনির্দিষ্ট কোড।',
          'ইন্সটিটিউশন নম্বর (৩ সংখ্যা): ব্যাংকের মূল পরিচিতি কোড (যেমন: RBC এর জন্য 003, TD এর জন্য 004, BMO এর জন্য 001, স্কোশিয়াব্যাংকের জন্য 002, CIBC এর জন্য 010)।',
          '৯-সংখ্যার EFT রাউটিং নম্বর: ইলেকট্রনিক ফান্ড ট্রান্সফার, বেতন বা কানাডা রেভিনিউ এজেন্সি (CRA) ডিপোজিটের জন্য ফরম্যাট হলো: 0 + ইন্সটিটিউশন নম্বর (৩ সংখ্যা) + ট্রানজিট নম্বর (৫ সংখ্যা) -> 0YYYXXXXX।'
        ]
      },
      {
        id: 'how-to-read-canadian-cheque',
        heading: 'কানাডিয়ান চেকের MICR লাইন কীভাবে বুঝবেন?',
        content: 'কানাডার যেকোনো চেকের নিচের লাইনে তিনটি গুরুত্বপূর্ণ সংখ্যা থাকে:',
        points: [
          'চেক নম্বর (৩-৪ সংখ্যা): সর্ববামে থাকে।',
          'ট্রানজিট নম্বর (৫ সংখ্যা): ব্রাঞ্চের ৫-সংখ্যার কোড।',
          'ইন্সটিটিউশন নম্বর (৩ সংখ্যা): ব্যাংকের ৩-সংখ্যার কোড।',
          'অ্যাকাউন্ট নম্বর (৭-১২ সংখ্যা): আপনার নিজস্ব ব্যাংক অ্যাকাউন্ট নম্বর।'
        ]
      },
      {
        id: 'canadian-swift-wire',
        heading: 'কানাডায় আন্তর্জাতিক ওয়্যার ট্রান্সফার ও সুইফট (SWIFT) কোড',
        content: 'বিদেশ থেকে কানাডার অ্যাকাউন্টে রেমিট্যান্স বা ডলার পাঠানোর জন্য ব্যাংকের ৮ বা ১১ অক্ষরের SWIFT/BIC কোড, ব্রাঞ্চের পূর্ণ ঠিকানা এবং ট্রানজিট ও অ্যাকাউন্ট নম্বর প্রয়োজন হয়।'
      }
    ]
  },
  hi: {
    title: 'कैनेडियन ट्रांजिट नंबर, संस्थान कोड एवं EFT राउटिंग संपूर्ण गाइड',
    subtitle: 'पेमेंट्स कनाडा, डायरेक्ट डिपॉजिट, चेक लाइन व SWIFT कोड का विस्तृत विवरण',
    sections: [
      {
        id: 'what-is-transit-number',
        heading: 'कैनेडियन ट्रांजिट नंबर और इंस्टीट्यूशन नंबर क्या है?',
        content: 'कनाडा में बैंकिंग लेनदेन पेमेंट्स कनाडा (Payments Canada) के ACSS सिस्टम के तहत संचालित होते हैं। किसी भी बैंक खाते के लिए 3 मुख्य घटक होते हैं:',
        points: [
          'ट्रांजिट नंबर (5 अंक): बैंक शाखा की पहचान संख्या।',
          'इंस्टीट्यूशन कोड (3 अंक): बैंक की राष्ट्रीय पहचान (जैसे RBC = 003, TD = 004, BMO = 001, CIBC = 010)।',
          '9-अंकीय EFT राउटिंग: इलेक्ट्रॉनिक डायरेक्ट डिपॉजिट एवं CRA टैक्स रिफंड के लिए प्रारूप 0 + इंस्टीट्यूशन कोड (3 अंक) + ट्रांजिट कोड (5 अंक) होता है।'
        ]
      },
      {
        id: 'how-to-read-canadian-cheque',
        heading: 'कैनेडियन चेक से कोड्स कैसे निकालें?',
        content: 'कनाडा के किसी भी चेक के निचले MICR हिस्से में 5-अंकीय ट्रांजिट कोड, 3-अंकीय बैंक कोड और खाता संख्या लिखी होती है।'
      }
    ]
  },
  ru: {
    title: 'Полное руководство по банковским кодам Канады (Transit, Institution & EFT)',
    subtitle: 'Система Payments Canada, прямой депозит, MICR реквизиты чеков и SWIFT коды',
    sections: [
      {
        id: 'what-is-transit-number',
        heading: 'Что такое канадский транзитный номер (Transit) и код учреждения (Institution)?',
        content: 'В Канаде клиринг платежей осуществляется организацией Payments Canada через автоматизированную систему ACSS. Реквизиты состоят из трех компонентов:',
        points: [
          'Transit Number (5 цифр): Код конкретного отделения банка.',
          'Institution Number (3 цифры): Национальный идентификатор банка (003 - RBC, 004 - TD, 001 - BMO, 002 - Scotiabank, 010 - CIBC).',
          '9-значный EFT маршрутизатор: 0 + Код банка (3 цифры) + Код отделения (5 цифр) = 0YYYXXXXX.'
        ]
      }
    ]
  }
};
