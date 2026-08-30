import { Bank, Language } from '../../types';

export interface UsaBankGuide {
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

export function getUsaBankGuide(bank: Bank, lang: Language): UsaBankGuide {
  const bankName = lang === 'bn' ? (bank.name_bn || bank.name) : lang === 'hi' ? (bank.name_hi || bank.name) : lang === 'ru' ? (bank.name_ru || bank.name) : bank.name;

  if (lang === 'bn') {
    return {
      title: `${bankName} - ABA রাউটিং নম্বর, ACH, ওয়্যার ট্রান্সফার ও সুইফট কোড নির্দেশিকা ২০২৬`,
      summary: `মার্কিন যুক্তরাষ্ট্রের অন্যতম বৃহত্তম ব্যাংক ${bankName} (${bank.short_name})-এর অফিসিয়াল ৯-ডিজিটের ABA রাউটিং নম্বর (${bank.routing_number || 'শাখাভিত্তিক'}), ডিরেক্ট ডিপোজিট ACH কোড, আন্তর্জাতিক সুইফট কোড (${bank.swift_code}) এবং ইউএস ফেডারেল রিজার্ভ ক্লিয়ারিং তথ্য।`,
      historySection: {
        heading: `ব্যাংক পরিচিতি ও শাখা নেটওয়ার্ক`,
        content: `${bankName} মার্কিন যুক্তরাষ্ট্রের একটি শীর্ষস্থানীয় ব্যাংক। প্রতিষ্ঠানটির দেশব্যাপী ${bank.branch_count.toLocaleString()}+ টিরও বেশি শাখা রয়েছে এবং এটি ইউএস ফেডারেল রিজার্ভ সিস্টেম ও FDIC (সার্টিফিকেট নং #${bank.fdic_cert || 'N/A'}) দ্বারা নিয়ন্ত্রিত।`
      },
      routingGuideSection: {
        heading: `৯-ডিজিটের ABA রাউটিং নম্বর কী এবং এটি কীভাবে গঠিত?`,
        content: `আমেরিকান ব্যাংকার্স অ্যাসোসিয়েশন (ABA) রাউটিং ট্রানজিট নম্বর হলো একটি ৯-সংখ্যার অনন্য কোড যা মার্কিন ব্যাংকগুলোর মধ্যে ইলেকট্রনিক তহবিল স্থানান্তর (ACH) এবং ওয়্যার ট্রান্সফারের জন্য ব্যবহৃত হয়:`,
        steps: [
          `প্রথম ২টি ডিজিট: ফেডারেল রিজার্ভ ডিস্ট্রিক্ট শনাক্তকারী (যেমন 01-12)।`,
          `৩য় ও ৪র্থ ডিজিট: ফেডারেল রিজার্ভ চেক প্রসেসিং সেন্টার কোড।`,
          `৫ম থেকে ৮ম ডিজিট: ব্যাংকের অনন্য প্রাতিষ্ঠানিক পরিচিতি নম্বর (ABA ID)।`,
          `৯ম ডিজিট (শেষ সংখ্যা): মড-১০ অ্যালগরিদম চেকসাম ভেরিফায়ার।`
        ]
      },
      remittanceGuideSection: {
        heading: `আন্তর্জাতিক ও অভ্যন্তরীণ অর্থ স্থানান্তরের প্রয়োজনীয় তথ্য`,
        content: `${bankName}-এর অ্যাকাউন্টে ওয়্যার বা ডিরেক্ট ডিপোজিট পাঠাতে নিম্নলিখিত তথ্য প্রয়োজন:`,
        requiredDetails: [
          { label: 'ব্যাংকের পূর্ণ নাম', value: bank.name },
          { label: 'ABA রাউটিং নম্বর (ACH / Direct Deposit)', value: bank.ach_routing || bank.routing_number || 'শাখা অনুযায়ী' },
          { label: 'ওয়্যার রাউটিং নম্বর (Fedwire)', value: bank.wire_routing || bank.routing_number || 'শাখা অনুযায়ী' },
          { label: 'আন্তর্জাতিক সুইফট / বিআইসি', value: bank.swift_code },
          { label: 'হেড অফিস ঠিকানা', value: bank.head_office },
          { label: 'হিসাবের মুদ্রা', value: 'USD (United States Dollar)' }
        ]
      },
      transferComparison: [
        {
          type: 'ACH ডিরেক্ট ডিপোজিট / পে-রোল',
          speed: '১-২ কার্যদিবস (সেম-ডে ACH উপলভ্য)',
          limit: 'ব্যাংক পলিসি অনুযায়ী',
          bestFor: 'বেতন, ইউটিলিটি বিল এবং অভ্যন্তরীণ নিয়মিত পেমেন্ট'
        },
        {
          type: 'Fedwire / ডোমেস্টিক ওয়্যার ট্রান্সফার',
          speed: 'তাৎক্ষণিক (রিয়েল-টাইম সেটেলমেন্ট)',
          limit: 'উচ্চ লেনদেন সীমা',
          bestFor: 'জরুরি বড় অঙ্কের তহবিল ও রিয়েল এস্টেট লেনদেন'
        },
        {
          type: 'আন্তর্জাতিক সুইফট ওয়্যার (SWIFT Transfer)',
          speed: '১-৩ কার্যদিবস',
          limit: 'যুক্তরাষ্ট্রের অ্যান্টি-মানি লন্ডারিং বিধিমালা অনুযায়ী',
          bestFor: 'বিদেশ থেকে রেমিট্যান্স গ্রহণ ও আন্তর্জাতিক ব্যবসা'
        }
      ],
      faqs: [
        {
          question: `${bank.short_name}-এর চেকবইয়ে রাউটিং নম্বর কোথায় থাকে?`,
          answer: `যেকোনো মার্কিন চেকের নিচের বাম দিকে ৯-সংখ্যার প্রথম সেটটি হলো ব্যাংকের ABA রাউটিং নম্বর। মাঝের অংশটি অ্যাকাউন্ট নম্বর এবং শেষেরটি চেক নম্বর।`
        },
        {
          question: `ACH রাউটিং এবং ওয়্যার রাউটিং নম্বরের মধ্যে পার্থক্য কী?`,
          answer: `অনেক মার্কিন ব্যাংকে ইলেকট্রনিক ACH ট্রান্সফার (যেমন ডিরেক্ট ডিপোজিট) এবং তাৎক্ষণিক ওয়্যার ট্রান্সফারের (Fedwire) জন্য আলাদা রাউটিং নম্বর নির্ধারিত থাকে। আমাদের ডিরেক্টরিতে প্রতিটি শাখার সুনির্দিষ্ট কোড উল্লেখ আছে।`
        },
        {
          question: `আন্তর্জাতিক ফান্ড ট্রান্সফারের জন্য কোন সুইফট কোডটি দিতে হবে?`,
          answer: `${bankName}-এর গ্লোবাল সুইফট কোড হলো ${bank.swift_code}।`
        }
      ]
    };
  }

  // Default English (or fallback)
  return {
    title: `${bankName} - ABA Routing Number, ACH, Wire Transfer & SWIFT Code 2026`,
    summary: `Official banking details for ${bankName} (${bank.short_name}): 9-digit ABA Routing Transit Numbers (${bank.routing_number || 'All Branches'}), ACH Direct Deposit codes, Fedwire details, FDIC Cert #${bank.fdic_cert || 'N/A'}, and SWIFT/BIC code (${bank.swift_code}).`,
    historySection: {
      heading: `About ${bankName} & US Branch Network`,
      content: `${bankName} is one of the premier financial institutions in the United States, operating over ${bank.branch_count.toLocaleString()}+ branches across the nation. Regulated by the Federal Reserve System and FDIC insured, it provides extensive retail, commercial, and investment banking services.`
    },
    routingGuideSection: {
      heading: `Understanding the 9-Digit ABA Routing Number Structure`,
      content: `The American Bankers Association (ABA) routing transit number is a unique 9-digit computer-readable sequence used in the US payment system for ACH and wire clearing:`,
      steps: [
        `Digits 1-2: Federal Reserve Routing Symbol (Fed District 01 through 12).`,
        `Digits 3-4: Federal Reserve check processing center assignment.`,
        `Digits 5-8: ABA Institution Identifier (Unique Bank ID).`,
        `Digit 9: Mod-10 Check Digit verification.`
      ]
    },
    remittanceGuideSection: {
      heading: `Required Information for Domestic & International Wire Transfers`,
      content: `To receive an electronic deposit or wire transfer into a ${bankName} account, provide the sender with:`,
      requiredDetails: [
        { label: 'Bank Name', value: bank.name },
        { label: 'ABA Routing (ACH / Direct Deposit)', value: bank.ach_routing || bank.routing_number || 'State/Branch specific' },
        { label: 'Wire Routing (Fedwire)', value: bank.wire_routing || bank.routing_number || 'State/Branch specific' },
        { label: 'SWIFT / BIC Code', value: bank.swift_code },
        { label: 'Headquarters', value: bank.head_office },
        { label: 'Account Currency', value: 'USD (US Dollar)' }
      ]
    },
    transferComparison: [
      {
        type: 'Automated Clearing House (ACH)',
        speed: '1-2 Business Days (Same-Day ACH available)',
        limit: 'Standard consumer/commercial limits',
        bestFor: 'Payroll direct deposits, bill pay & recurring transfers'
      },
      {
        type: 'Domestic Wire Transfer (Fedwire)',
        speed: 'Real-time / Same day (Within minutes)',
        limit: 'High limits (Up to millions)',
        bestFor: 'Real estate closings, high-value urgent payments'
      },
      {
        type: 'International SWIFT Wire Transfer',
        speed: '1-3 Business Days',
        limit: 'Subject to US FinCEN & AML regulations',
        bestFor: 'Cross-border remittances & international supplier invoices'
      }
    ],
    faqs: [
      {
        question: `Where do I find the routing number on my ${bank.short_name} check?`,
        answer: `At the bottom of your printed check, the first 9-digit number between the |: symbols is your ABA Routing Number. The next set is your account number.`
      },
      {
        question: `Is the ACH routing number different from the Wire routing number?`,
        answer: `For many large US banks, electronic ACH deposits and real-time Fedwire transfers use different routing numbers. Always confirm with the branch directory before initiating high-value wires.`
      },
      {
        question: `Which SWIFT code should be used for international incoming wires?`,
        answer: `For transfers originating outside the US, use the official primary SWIFT code: ${bank.swift_code}.`
      }
    ]
  };
}
