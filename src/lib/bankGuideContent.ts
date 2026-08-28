import { Bank, Branch, Language } from '../types';

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
  const isBn = lang === 'bn';

  if (isBn) {
    return {
      title: `${bank.name_bn} - রাউটিং নম্বর, সুইফট কোড ও ব্যাংকিং সহায়িকা ২০২৬`,
      summary: `${bank.name_bn} (${bank.short_name})-এর সকল ব্রাঞ্চের সঠিক ৯ ডিজিটের BEFTN রাউটিং নম্বর, আন্তর্জাতিক সুইফট/BIC কোড (${bank.swift_code}) এবং তহবিল স্থানান্তরের বিস্তারিত নিয়মাবলি।`,
      historySection: {
        heading: `${bank.name_bn} পরিচিতি ও শাখা নেটওয়ার্ক`,
        content: `${bank.name_bn} (${bank.name}) বাংলাদেশের ব্যাংকিং খাতের একটি অন্যতম নির্ভরযোগ্য প্রতিষ্ঠান। ব্যাংকটির কেন্দ্রীয় ব্যাংক কোড হলো "${bank.bank_code}"। বর্তমানে সারাদেশে ব্যাংকটির প্রায় ${bank.branch_count}+ টি অনুমোদিত শাখা এবং বিশাল এটিএম বুথ নেটওয়ার্ক রয়েছে, যার মাধ্যমে গ্রাহকরা সার্বক্ষণিক আধুনিক ব্যাংকিং সেবা গ্রহণ করতে পারেন।`
      },
      routingGuideSection: {
        heading: `${bank.short_name} রাউটিং নম্বর কী এবং কীভাবে কাজ করে?`,
        content: `বাংলাদেশ ব্যাংক পরিচালিত ইলেকট্রনিক ফান্ড ট্রান্সফার (BEFTN/RTGS/NPSB) সেবায় ${bank.name_bn}-এর প্রতিটি ব্রাঞ্চের জন্য একটি অনন্য ৯-ডিজিটের রাউটিং নম্বর নির্ধারণ করা হয়েছে। এই ৯ ডিজিটের গঠন কাঠামো নিম্নরূপ:`,
        steps: [
          `প্রথম ৩ ডিজিট (${bank.bank_code}): এটি হলো ${bank.short_name}-এর অফিশিয়াল ব্যাংক আইডেন্টিফিকেশন কোড।`,
          `পরবর্তী ২ ডিজিট: সংশ্লিষ্ট জেলা বা অঞ্চলের কোড (যেমন: ঢাকার জন্য ২৬, চট্টগ্রামের জন্য ১৫)।`,
          `শেষ ৪ ডিজিট: সংশ্লিষ্ট নির্দিষ্ট ব্রাঞ্চের নিজস্ব ব্রাঞ্চ কোড।`
        ]
      },
      remittanceGuideSection: {
        heading: `বিদেশ থেকে ${bank.short_name}-এ রেমিট্যান্স বা ফ্রিল্যান্সিং পেমেন্ট গ্রহণের নিয়ম`,
        content: `আন্তর্জাতিক ব্যাংক ওয়্যার ট্রান্সফার, ফ্রিল্যান্সিং প্ল্যাটফর্ম (Upwork, Fiverr, Payoneer, Deel) কিংবা Google AdSense ও ইউটিউব থেকে সরাসরি ${bank.name_bn}-এর একাউন্টে টাকা আনতে নিচের তথ্যগুলো প্রেরণকারী বা পেমেন্ট সেটিংসে সঠিকভাবে প্রদান করুন:`,
        requiredDetails: [
          { label: 'ব্যাংকের নাম (Bank Name)', value: bank.name },
          { label: 'সুইফট কোড (SWIFT / BIC Code)', value: bank.swift_code },
          { label: 'হেড অফিস ঠিকানা', value: bank.head_office },
          { label: 'অ্যাকাউন্টের ধরন', value: 'Savings / Current / Freelancer Account' },
          { label: 'সরকারি প্রণোদনা', value: 'বৈধ রেমিট্যান্সে ২.৫% সরকারি নগদ প্রণোদনা প্রযোজ্য' }
        ]
      },
      transferComparison: [
        {
          type: 'NPSB (ইন্টারনেট/মোবাইল ব্যাংকিং)',
          speed: 'তাৎক্ষণিক (Real-Time)',
          limit: 'প্রতিবারে সর্বোচ্চ ৩,০০,০০০ টাকা পর্যন্ত',
          bestFor: 'জরুরি বিল পরিশোধ ও তাৎক্ষণিক একাউন্ট ট্রান্সফার'
        },
        {
          type: 'BEFTN (ব্যাংক ইলেকট্রনিক ট্রান্সফার)',
          speed: 'একই কার্যদিবস বা পরবর্তী কার্যদিবস',
          limit: 'সাধারণ লেনদেন (কোনো অতিরিক্ত চার্জ নেই)',
          bestFor: 'বেতন প্রদান, লভ্যাংশ বিতরণ ও সাধারণ ফান্ড ট্রান্সফার'
        },
        {
          type: 'RTGS (রিয়েল-টাইম গ্রস সেটেলমেন্ট)',
          speed: 'কয়েক মিনিটের মধ্যে',
          limit: 'সর্বনিম্ন ১,০০,০০০ টাকা থেকে সীমাহীন',
          bestFor: 'ব্যবসায়িক ও বড় অংকের জরুরি লেনদেন'
        }
      ],
      faqs: [
        {
          question: `${bank.short_name}-এর হেড অফিস সুইফট কোড কী?`,
          answer: `${bank.name_bn}-এর অফিশিয়াল আন্তর্জাতিক সুইফট (SWIFT/BIC) কোড হলো ${bank.swift_code}। বৈদেশিক লেনদেন ও রেমিট্যান্সের জন্য এই কোডটি সারা বিশ্বের যেকোনো প্রান্ত থেকে ব্যবহার করা যায়।`
        },
        {
          question: `${bank.name_bn}-এর রাউটিং নম্বর কত ডিজিটের হয়?`,
          answer: `বাংলাদেশ ব্যাংকের নিয়ম অনুযায়ী ${bank.short_name}-এর প্রতিটি শাখার রাউটিং নম্বর মোট ৯ ডিজিটের হয়ে থাকে, যার প্রথম ৩ ডিজিট "${bank.bank_code}" দ্বারা শুরু হয়।`
        },
        {
          question: `চেক বই ছাড়া কীভাবে ${bank.short_name}-এর ব্রাঞ্চ রাউটিং নম্বর জানা যাবে?`,
          answer: `আমাদের World Bank Codes পোর্টালে ব্যাংকের নাম এবং আপনার জেলার নাম নির্বাচন করলেই সাথে সাথে সংশ্লিষ্ট শাখার নির্ভুল ৯ ডিজিটের রাউটিং নম্বর পেয়ে যাবেন।`
        },
        {
          question: `ভুল রাউটিং নম্বর দিলে কি টাকা অন্য একাউন্টে চলে যাবে?`,
          answer: `না। রাউটিং নম্বর শুধুমাত্র ব্রাঞ্চ শনাক্ত করে। একাউন্ট নম্বর এবং ব্রাঞ্চের রাউটিং নম্বর উভয়ের তথ্য ম্যাচ না করলে BEFTN স্বয়ংক্রিয়ভাবে লেনদেন বাতিল করে ২-৩ কার্যদিবসের মধ্যে টাকা প্রেরকের অ্যাকাউন্টে ফেরত পাঠিয়ে দেয়।`
        }
      ]
    };
  }

  return {
    title: `${bank.name} - Routing Number, SWIFT Code & Banking Guide 2026`,
    summary: `Complete 9-digit BEFTN Routing Numbers, Head Office SWIFT Code (${bank.swift_code}), branch locations and money transfer guide for ${bank.name} (${bank.short_name}).`,
    historySection: {
      heading: `About ${bank.name} & Network`,
      content: `${bank.name} (${bank.short_name}) is one of the leading commercial financial institutions in Bangladesh, assigned central Bank Code "${bank.bank_code}". With over ${bank.branch_count} branches nationwide, it provides advanced electronic fund transfer (BEFTN, RTGS, NPSB) and international trade services.`
    },
    routingGuideSection: {
      heading: `Understanding ${bank.short_name} 9-Digit BEFTN Routing Number`,
      content: `In Bangladesh Electronic Funds Transfer Network (BEFTN), every individual branch of ${bank.name} has a designated 9-digit routing number structured as follows:`,
      steps: [
        `First 3 Digits (${bank.bank_code}): Represents ${bank.short_name}'s central institutional code.`,
        `Middle 2 Digits: Represents the District code (e.g., 26 for Dhaka, 15 for Chittagong).`,
        `Last 4 Digits: The unique 4-digit branch code identifying the specific branch location.`
      ]
    },
    remittanceGuideSection: {
      heading: `Receiving Inward Foreign Remittances & Freelancing Payouts`,
      content: `To receive direct bank wires, freelancer platform earnings (Upwork, Fiverr, Payoneer, Deel), Google AdSense, or overseas remittances into your ${bank.name} account, provide these verified banking details:`,
      requiredDetails: [
        { label: 'Bank Name', value: bank.name },
        { label: 'SWIFT / BIC Code', value: bank.swift_code },
        { label: 'Head Office Address', value: bank.head_office },
        { label: 'Account Type', value: 'Savings / Current / Freelancer Account' },
        { label: 'Govt Incentive', value: '2.5% direct cash incentive on legal remittances' }
      ]
    },
    transferComparison: [
      {
        type: 'NPSB (Internet & Mobile Banking)',
        speed: 'Instant Real-Time Settlement',
        limit: 'Up to BDT 300,000 per transaction',
        bestFor: 'Urgent inter-bank transfers and card/app payments'
      },
      {
        type: 'BEFTN (Electronic Funds Transfer)',
        speed: 'Same-day or next business day',
        limit: 'Standard transactions (Zero extra fee)',
        bestFor: 'Salary disbursements, dividend payouts, routine transfers'
      },
      {
        type: 'RTGS (Real-Time Gross Settlement)',
        speed: 'Within a few minutes',
        limit: 'Minimum BDT 100,000 (No upper limit)',
        bestFor: 'High-value corporate and urgent fund transfers'
      }
    ],
    faqs: [
      {
        question: `What is the SWIFT Code for ${bank.name}?`,
        answer: `The official SWIFT / BIC Code for ${bank.name} is ${bank.swift_code}. This code is universally accepted for foreign remittances and international wire transfers.`
      },
      {
        question: `How many digits is the ${bank.short_name} routing number?`,
        answer: `All routing numbers for ${bank.name} are exactly 9 digits long, always beginning with the 3-digit bank code "${bank.bank_code}".`
      },
      {
        question: `How can I find the routing number without a cheque book?`,
        answer: `You can instantly look up your specific branch on World Bank Codes by selecting the bank and district to get the verified 9-digit routing number.`
      },
      {
        question: `What happens if an incorrect routing number is entered?`,
        answer: `If the routing number does not match the account holder's branch records, the BEFTN network automatically rejects the transaction and reverses the funds within 2-3 banking business days.`
      }
    ]
  };
}
