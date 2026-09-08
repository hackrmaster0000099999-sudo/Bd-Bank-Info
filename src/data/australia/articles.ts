import { BankArticle } from '../../types';
import banksData from './banks.json';

/**
 * Authoritative Editorial Knowledge Base & Comprehensive Guide for Australian Banks (Australian Financial Institutions)
 * Covers Australian 6-Digit BSB Codes (Bank-State-Branch: XXX-XXX), APCA Institution Codes,
 * NPP (New Payments Platform), Osko by BPAY, PayID Instant Transfers,
 * Financial Claims Scheme (FCS - Australian Government $250,000 AUD Deposit Guarantee),
 * and International SWIFT/BIC Wire Transfers.
 */

interface AustralianBankKnowledge {
  established: string;
  foundingStory: string;
  foundingStory_bn: string;
  category: string;
  category_bn: string;
  coreStrengths: string[];
  coreStrengths_bn: string[];
  bankCode: string;
  sampleBsb: string;
  swiftHo: string;
  popularApp: string;
  customerCare: string;
  payidSupport: string;
  fcsProtection: string;
  apraCategory: string;
}

const AUSTRALIA_BANK_KNOWLEDGE: Record<string, AustralianBankKnowledge> = {
  'commonwealth-bank-of-australia': {
    established: '1911 (Founded by the Australian Government under the Commonwealth Bank Act)',
    foundingStory: 'Commonwealth Bank of Australia (CBA / CommBank) is Australia’s largest bank and the premier financial institution in the Southern Hemisphere by market capitalization. Headquartered at Commonwealth Bank Place in Sydney, CommBank provides retail, business, institutional banking, funds management, superannuation, and broking services to over 16 million customers across Australia and New Zealand. CBA leads the nation in digital banking with the acclaimed CommBank app.',
    foundingStory_bn: 'কমনওয়েলথ ব্যাংক অব অস্ট্রেলিয়া (CommBank / CBA) অস্ট্রেলিয়ার সর্ববৃহৎ বাণিজ্যিক ব্যাংক এবং মার্কেট ক্যাপিটালাইজেশনের দিক থেকে দক্ষিণ গোলার্ধের অন্যতম শীর্ষ আর্থিক প্রতিষ্ঠান। ১৯১১ সালে প্রতিষ্ঠিত এবং সিডনিতে প্রধান কার্যালয় বিশিষ্ট কমব্যাংক ১৬ মিলিয়নেরও বেশি গ্রাহককে রিটেইল, করপোরেট, সুপারঅ্যানুয়েশন এবং ডিজিটাল ব্যাংকিং সেবা প্রদান করে।',
    category: 'Big Four Major Australian Bank / APRA Major D-SIB',
    category_bn: 'অস্ট্রেলিয়ার বিগ ফোর ব্যাংক (APRA ও RBA নিয়ন্ত্রিত D-SIB)',
    coreStrengths: [
      'Australia’s largest retail and commercial branch/ATM network spanning all states and territories',
      'Market-leading CommBank mobile banking app with integrated StepPay, Cardless Cash, and Smart Alerts',
      'Instant 24/7 payments via New Payments Platform (NPP), Osko by BPAY, and PayID phone/email routing',
      'Government-backed Financial Claims Scheme (FCS) protecting deposits up to $250,000 AUD per person'
    ],
    coreStrengths_bn: [
      'সমগ্র অস্ট্রেলিয়া জুড়ে সর্ববৃহৎ শাখা ও স্মার্ট এটিএম নেটওয়ার্ক',
      'অস্ট্রেলিয়ার ১ নম্বর কমব্যাংক মোবাইল অ্যাপ, স্টেপ-পে ও কার্ডলেস ক্যাশ সুবিধা',
      'এনপিপি (NPP), ওস্কো (Osko) এবং পে-আইডি (PayID) এর মাধ্যমে ২৪/৭ তাৎক্ষণিক ফ্রি ফান্ড ট্রান্সফার',
      'অস্ট্রেলিয়ান সরকারের ফিনান্সিয়াল ক্লেইমস স্কিম (FCS) এর আওতায় প্রতি গ্রাহকের $২৫০,০০০ এইউডি পর্যন্ত শতভাগ সুরক্ষিত'
    ],
    bankCode: '06',
    sampleBsb: '062-000 (Sydney Main)',
    swiftHo: 'CTBAAU2S',
    popularApp: 'CommBank App (iOS & Android)',
    customerCare: '13 2221 (24/7 Australia) / +61 2 9999 3283 (Overseas)',
    payidSupport: 'Full Support (Mobile, Email, ABN & Organization ID)',
    fcsProtection: '$250,000 AUD guaranteed per account holder by Australian Government FCS',
    apraCategory: 'Major Authorised Deposit-taking Institution (ADI)'
  },
  'westpac-banking-corporation': {
    established: '1817 (Founded as Bank of New South Wales - Australia’s first bank and oldest corporation)',
    foundingStory: 'Westpac Banking Corporation is Australia’s first bank and oldest operating corporation, established in 1817 as the Bank of New South Wales before rebranding to Westpac (Western-Pacific) in 1982. Headquartered at Westpac Place on Kent Street, Sydney, Westpac serves over 13 million customers through its core Westpac brand, St.George Bank, Bank of Melbourne, and BankSA, making it a cornerstone of Australian economic history and financial markets.',
    foundingStory_bn: 'ওয়েস্টপ্যাক ব্যাংকিং কর্পোরেশন অস্ট্রেলিয়ার প্রথম ব্যাংক এবং দেশের প্রাচীনতম আর্থিক প্রতিষ্ঠান, যা ১৮১৭ সালে ব্যাংক অব নিউ সাউথ ওয়েলস হিসেবে যাত্রা শুরু করে। সিডনির কেন্ট স্ট্রিটে প্রধান কার্যালয় বিশিষ্ট ওয়েস্টপ্যাক সেন্ট জর্জ, ব্যাংক অব মেলবোর্ন এবং ব্যাংকএসএ সহ ১৩ মিলিয়নেরও বেশি অস্ট্রেলিয়ান গ্রাহককে ব্যাংকিং সেবা দিচ্ছে।',
    category: 'Big Four Major Australian Bank / APRA Major D-SIB',
    category_bn: 'অস্ট্রেলিয়ার বিগ ফোর ব্যাংক (APRA অনুমোদিত ADI)',
    coreStrengths: [
      'Pioneer of Australian institutional banking with over 200 years of continuous financial legacy',
      'Comprehensive multi-brand banking network combining Westpac, St.George, Bank of Melbourne & BankSA',
      'Integrated Westpac One and Mobile App with real-time dynamic Card Security Codes and ScamBlock',
      'Government FCS protection up to $250,000 AUD per depositor across all Westpac family accounts'
    ],
    coreStrengths_bn: [
      '২০০ বছরেরও বেশি ঐতিহ্যবাহী অস্ট্রেলিয়ার প্রাচীনতম ব্যাংকিং প্রতিষ্ঠান',
      'ওয়েস্টপ্যাক, সেন্ট জর্জ, ব্যাংক অব মেলবোর্ন এবং ব্যাংকএসএ-এর সমন্বিত ব্যাংকিং নেটওয়ার্ক',
      'ওয়েস্টপ্যাক মোবাইল অ্যাপ ও স্ক্যামব্লক প্রযুক্তি সহ নিরাপদ অনলাইন ব্যাংকিং',
      'অস্ট্রেলিয়া সরকারের গ্যারান্টিযুক্ত FCS সুরক্ষা ($২৫০,০০০ এইউডি পর্যন্ত)'
    ],
    bankCode: '03',
    sampleBsb: '032-000 (Sydney Main)',
    swiftHo: 'WPACAU2S',
    popularApp: 'Westpac Mobile Banking App',
    customerCare: '132 032 (Australia) / +61 2 9155 7700 (Overseas)',
    payidSupport: 'Full Support (Instant Osko Transfers with PayID)',
    fcsProtection: '$250,000 AUD guaranteed per account holder by Australian Government FCS',
    apraCategory: 'Major Authorised Deposit-taking Institution (ADI)'
  },
  'national-australia-bank': {
    established: '1858 (Founded in Melbourne as National Bank of Australasia)',
    foundingStory: 'National Australia Bank (NAB) is one of Australia’s Big Four financial institutions and the country’s leading business bank. Headquartered at NAB Place on Bourke Street in Melbourne, NAB manages significant operations across Australia, New Zealand (BNZ), the UK, the US, and Asia. NAB provides market-leading commercial lending, agri-business financing, personal transaction accounts with zero monthly fees (NAB Classic), and ubank digital services.',
    foundingStory_bn: 'ন্যাশনাল অস্ট্রেলিয়া ব্যাংক (NAB) অস্ট্রেলিয়ার অন্যতম প্রধান বিগ ফোর ব্যাংক এবং দেশটির শীর্ষস্থানীয় ব্যবসায়িক ও কৃষি অর্থায়নকারী ব্যাংক। ১৮৫৮ সালে মেলবোর্নে প্রতিষ্ঠিত এনএবি অস্ট্রেলিয়া, নিউজিল্যান্ড ও আন্তর্জাতিক বাজারে বিস্তৃত কার্যক্রম পরিচালনা করে। ফি-মুক্ত এনএবি ক্লাসিক চেকিং অ্যাকাউন্ট ও ডিজিটাল ব্যাংকিংয়ের জন্য এটি সুপরিচিত।',
    category: 'Big Four Major Australian Bank / APRA Major D-SIB',
    category_bn: 'অস্ট্রেলিয়ার বিগ ফোর ব্যাংক (শীর্ষ বিজনেস ব্যাংকিং পার্টনার)',
    coreStrengths: [
      'Australia’s premier business and agricultural bank financing Australian commercial enterprise',
      'Fee-free NAB Classic personal everyday bank account with no unarranged overdraft penalties',
      'State-of-the-art Melbourne headquarters managing ubank fintech and global transaction clearing',
      'Full NPP / Osko real-time payment connectivity and Australian Government FCS $250k protection'
    ],
    coreStrengths_bn: [
      'অস্ট্রেলিয়ার শীর্ষ বিজনেস ও এগ্রি-বিজনেস ব্যাংকিং সেবাদাতা',
      'কোনো মাসিক মেইনটেন্যান্স ফি ছাড়াই এনএবি ক্লাসিক ট্রানজাকশন অ্যাকাউন্ট',
      'মেলবোর্নে প্রধান কার্যালয় এবং ইউব্যাংক (ubank) ডিজিটাল ব্যাংকিং প্লাটফর্ম',
      'NPP/Osko রিয়েল-টাইম ক্লিয়ারিং ও সরকারি এফসিএস ২৫০,০০০ ডলার সুরক্ষা'
    ],
    bankCode: '08',
    sampleBsb: '082-001 (Sydney Main Branch)',
    swiftHo: 'NATAAU3303M',
    popularApp: 'NAB Mobile Banking App',
    customerCare: '13 22 65 (Australia) / +61 3 8641 9083 (Overseas)',
    payidSupport: 'Full Support (Fast PayID Registration & Real-Time Alerts)',
    fcsProtection: '$250,000 AUD guaranteed per account holder by Australian Government FCS',
    apraCategory: 'Major Authorised Deposit-taking Institution (ADI)'
  },
  'anz-bank': {
    established: '1835 (Founded in London as Bank of Australasia; merged with Union Bank of Australia in 1951)',
    foundingStory: 'Australia and New Zealand Banking Group (ANZ) is one of Australia’s Big Four banking institutions and a leading international bank across the Asia-Pacific region. Headquartered at the ANZ Centre in Melbourne’s Docklands, ANZ provides retail, private wealth, commercial, institutional, and trade finance services across Australia, New Zealand, and over 30 global markets. With the launch of the ANZ Plus digital platform, ANZ is modernizing personal financial management.',
    foundingStory_bn: 'অস্ট্রেলিয়া অ্যান্ড নিউজিল্যান্ড ব্যাংকিং গ্রুপ (ANZ) বিগ ফোর ব্যাংকের অন্যতম এবং এশিয়া-প্যাসিফিক অঞ্চলের শীর্ষ আন্তর্জাতিক ব্যাংক। ১৮৩৫ সালে প্রতিষ্ঠিত এবং মেলবোর্নের ডকল্যান্ডসে প্রধান কার্যালয় বিশিষ্ট এএনজেড অস্ট্রেলিয়া ও নিউজিল্যান্ড ছাড়াও বিশ্বজুড়ে ৩০টির বেশি দেশে রিটেইল, করপোরেট এবং আন্তর্জাতিক বাণিজ্য অর্থায়ন সেবা পরিচালনা করে।',
    category: 'Big Four Major Australian Bank / APRA Major D-SIB',
    category_bn: 'অস্ট্রেলিয়ার বিগ ফোর ব্যাংক (এশিয়া-প্যাসিফিক গ্লোবাল ট্রেড লিডার)',
    coreStrengths: [
      'Deep trade connectivity across Australia, New Zealand, Asia, Pacific, Europe, and America',
      'Modern ANZ Plus digital retail banking platform with automated savings targets and financial coaching',
      'Comprehensive institutional FX, trade financing, and cross-border currency clearing',
      'Government FCS deposit safety guarantee up to $250,000 AUD per depositor'
    ],
    coreStrengths_bn: [
      'অস্ট্রেলিয়া, নিউজিল্যান্ড ও এশিয়া প্যাসিফিক করিডোরে সর্ববৃহৎ আন্তর্জাতিক নেটওয়ার্ক',
      'সর্বাধুনিক এএনজেড প্লাস (ANZ Plus) ডিজিটাল ব্যাংকিং অ্যাপ ও স্মার্ট সেভিংস টুলস',
      'আন্তর্জাতিক বৈদেশিক মুদ্রা ক্লিয়ারিং ও সুইফট ওয়্যার ট্রান্সফারে বিশেষ দক্ষতা',
      'অস্ট্রেলিয়ান এফসিএস ডিপোজিট গ্যারান্টি ($২৫০,০০০ এইউডি পর্যন্ত সম্পূর্ণ নিরাপদ)'
    ],
    bankCode: '01',
    sampleBsb: '012-002 (Melbourne Collins St)',
    swiftHo: 'ANZBAU3M',
    popularApp: 'ANZ App & ANZ Plus App',
    customerCare: '13 13 14 (Australia) / +61 3 9683 9999 (Overseas)',
    payidSupport: 'Full Support (Instant NPP Transfers on ANZ App & Plus)',
    fcsProtection: '$250,000 AUD guaranteed per account holder by Australian Government FCS',
    apraCategory: 'Major Authorised Deposit-taking Institution (ADI)'
  },
  'macquarie-bank': {
    established: '1969 (Founded as Hill Samuel Australia; granted full Australian banking licence in 1985)',
    foundingStory: 'Macquarie Bank Limited is a global diversified financial group headquartered at 50 Martin Place in Sydney. Renowned as "the Millionaires’ Factory" and Australia’s leading investment bank, Macquarie operates across asset management, commodities, global markets, retail deposits, and award-winning residential mortgages. Macquarie Bank provides fee-free personal transaction accounts offering high interest on everyday balances with market-leading digital security.',
    foundingStory_bn: 'ম্যাককুয়ারি ব্যাংক লিমিটেড (Macquarie Bank) সিডনির ৫০ মার্টিন প্লেসে প্রধান কার্যালয় বিশিষ্ট অস্ট্রেলিয়ার শীর্ষস্থানীয় ইনভেস্টমেন্ট ও রিটেইল ব্যাংক। ১৯৬৯ সালে প্রতিষ্ঠিত ম্যাককুয়ারি বৈশ্বিক অ্যাসেট ম্যানেজমেন্ট, ইনফ্রাস্ট্রাকচার ফাইন্যান্সিং, অনলাইন লেনদেনে উচ্চ সুদের ট্রানজাকশন অ্যাকাউন্ট এবং আধুনিক হোম লোনের জন্য আন্তর্জাতিকভাবে খ্যাত।',
    category: 'Australian Investment & Modern Digital Bank / APRA ADI',
    category_bn: 'অস্ট্রেলিয়ান শীর্ষ ইনভেস্টমেন্ট ও ডিজিটাল ব্যাংক',
    coreStrengths: [
      'Australia’s premier global investment bank and infrastructure asset manager',
      'Innovative everyday transaction accounts earning high savings interest on everyday balance with no fees',
      'Ultra-secure Macquarie Authenticator app with push notification approval for every transfer',
      'Full Osko / PayID / BSB clearing backed by Australian Government $250,000 FCS insurance'
    ],
    coreStrengths_bn: [
      'গ্লোবাল ইনভেস্টমেন্ট ব্যাংকিং ও ইনফ্রাস্ট্রাকচার ফাইন্যান্সিংয়ে অস্ট্রেলিয়ার এক নম্বর প্রতিষ্ঠান',
      'দৈনন্দিন ব্যালেন্সের ওপর উচ্চ সুদ এবং সকল প্রকার ফি-মুক্ত আধুনিক ট্রানজাকশন অ্যাকাউন্ট',
      'ম্যাককুয়ারি অথেনটিকেশন অ্যাপের মাধ্যমে প্রতিটি পেমেন্টে বায়োমেট্রিক নিরাপত্তা',
      'অস্ট্রেলিয়ান এফসিএস ($২৫০,০০০ এইউডি) সরকারি ডিপোজিট সুরক্ষা'
    ],
    bankCode: '18',
    sampleBsb: '182-222 (Sydney Martin Place)',
    swiftHo: 'MACQAU2S',
    popularApp: 'Macquarie Mobile Banking App',
    customerCare: '133 174 (Australia) / +61 2 8245 4400 (Overseas)',
    payidSupport: 'Full Support (Mobile, Email, Fast PayID Clearing)',
    fcsProtection: '$250,000 AUD guaranteed per account holder by Australian Government FCS',
    apraCategory: 'Authorised Deposit-taking Institution (ADI)'
  },
  'bendigo-and-adelaide-bank': {
    established: '1858 (Founded on the Victorian goldfields as Bendigo Mutual Permanent Land and Building Society)',
    foundingStory: 'Bendigo and Adelaide Bank is one of Australia’s largest and most trusted customer-centric regional banks. Headquartered at The Bendigo Centre in Bendigo, Victoria, the bank operates nationwide through over 450 branches and innovative Community Bank branches that reinvest up to 80% of profits back into local community projects. Bendigo Bank consistently ranks as one of Australia’s highest-rated banks for customer satisfaction and ethics.',
    foundingStory_bn: 'বেনডিগো অ্যান্ড অ্যাডিলেড ব্যাংক অস্ট্রেলিয়ার অন্যতম শীর্ষ আঞ্চলিক ও গ্রাহকবান্ধব বাণিজ্যিক ব্যাংক। ১৮৫৮ সালে ভিক্টোরিয়ায় প্রতিষ্ঠিত এবং বেনডিগোতে প্রধান কার্যালয় বিশিষ্ট এই ব্যাংকটি এর কমিউনিটি ব্যাংকিং মডেলের জন্য বিশেষভাবে সমাদৃত, যার মাধ্যমে অর্জিত লভ্যাংশের সিংহভাগ স্থানীয় উন্নয়নে ব্যয় করা হয়।',
    category: 'Australian Regional & Community Bank / APRA ADI',
    category_bn: 'অস্ট্রেলিয়ার বৃহত্তম কমিউনিটি ও আঞ্চলিক ব্যাংক',
    coreStrengths: [
      'Over 300 Community Bank branches reinvesting over $320 million into local Australian communities',
      'Consistently ranked among Australia’s top banks for customer trust, ethical banking, and satisfaction',
      'Comprehensive personal, business, agribusiness, and home loan services with localized branch support',
      'Government Financial Claims Scheme protection up to $250,000 AUD per depositor'
    ],
    coreStrengths_bn: [
      'কমিউনিটি ব্যাংকিং মডেলের মাধ্যমে স্থানীয় সম্প্রদায়ের উন্নয়নে বিপুল আর্থিক সহায়তা',
      'গ্রাহক সন্তুষ্টি ও নৈতিক ব্যাংকিংয়ে অস্ট্রেলিয়ার অন্যতম শীর্ষ র্যাংকধারী প্রতিষ্ঠান',
      'ব্যক্তিগত, বাণিজ্যিক ও কৃষি লোনের জন্য দেশব্যাপী ৪৫০টিরও বেশি শাখা নেটওয়ার্ক',
      'অস্ট্রেলিয়া সরকারের এফসিএস ($২৫০,০০০ এইউডি) আমানত সুরক্ষা'
    ],
    bankCode: '63',
    sampleBsb: '633-000 (Bendigo Head Office)',
    swiftHo: 'BENDAU3B',
    popularApp: 'Bendigo Bank App',
    customerCare: '1300 236 344 (Australia) / +61 3 5485 7908 (Overseas)',
    payidSupport: 'Full Support (Osko & PayID Integration)',
    fcsProtection: '$250,000 AUD guaranteed per account holder by Australian Government FCS',
    apraCategory: 'Authorised Deposit-taking Institution (ADI)'
  },
  'bank-of-queensland': {
    established: '1874 (Founded as The Brisbane Permanent Benefit Building and Investment Society)',
    foundingStory: 'Bank of Queensland (BOQ) is one of Australia’s leading regional banks and one of the oldest financial institutions in Queensland. Headquartered in Newstead, Brisbane, BOQ operates through an Owner-Manager branch model where branches are owned and run by local small business entrepreneurs. BOQ Group also owns ME Bank and Virgin Money Australia, serving hundreds of thousands of retail and commercial clients.',
    foundingStory_bn: 'ব্যাংক অব কুইন্সল্যান্ড (BOQ) কুইন্সল্যান্ডের প্রাচীনতম এবং অস্ট্রেলিয়ার অন্যতম প্রধান আঞ্চলিক ব্যাংক। ১৮৭৪ সালে ব্রিসবেনে প্রতিষ্ঠিত বিওকিউ ওনার-ম্যানেজার মডেলের মাধ্যমে পরিচালিত হয়, যেখানে প্রতিটি শাখা স্থানীয় ব্যবসায়ীদের দ্বারা পরিচালিত। এটি মি ব্যাংক (ME Bank) এবং ভার্জিন মানি অস্ট্রেলিয়ার মূল প্রতিষ্ঠান।',
    category: 'Australian Regional Banking Group / APRA ADI',
    category_bn: 'অস্ট্রেলিয়ার শীর্ষ আঞ্চলিক ব্যাংক (কুইন্সল্যান্ড ও দেশব্যাপী)',
    coreStrengths: [
      'Unique Owner-Manager branch franchise model delivering personalized local service',
      'Strong retail and SME presence across Queensland and nationwide through BOQ, ME Bank & Virgin Money',
      'Modern digital banking apps with competitive term deposits and home loan packages',
      'Protected under the Australian Government Financial Claims Scheme ($250k AUD per depositor)'
    ],
    coreStrengths_bn: [
      'ওনার-ম্যানেজার ফ্রাঞ্চাইজি মডেলের মাধ্যমে সরাসরি ব্যক্তিগত গ্রাহক সেবা',
      'কুইন্সল্যান্ড সহ সারা অস্ট্রেলিয়ায় শক্তিশালী রিটেইল ও এসএমই ব্যাংকিং উপস্থিতি',
      'আকর্ষণীয় টার্ম ডিপোজিট ও ফ্ল্যাপশিপ হোম লোন প্যাকেজ',
      'অস্ট্রেলিয়া সরকারের এফসিএস ডিপোজিট ইন্স্যুরেন্স গ্যারান্টি ($২৫০,০০০ এইউডি)'
    ],
    bankCode: '12',
    sampleBsb: '124-001 (Brisbane Queen St)',
    swiftHo: 'BQLDAU4B',
    popularApp: 'myBOQ App & BOQ Mobile',
    customerCare: '1300 55 72 72 (Australia) / +61 7 3336 2420 (Overseas)',
    payidSupport: 'Full Support (Fast Osko NPP Payments on myBOQ)',
    fcsProtection: '$250,000 AUD guaranteed per account holder by Australian Government FCS',
    apraCategory: 'Authorised Deposit-taking Institution (ADI)'
  },
  'suncorp-bank': {
    established: '1902 (Founded as Queensland Agricultural Bank)',
    foundingStory: 'Suncorp Bank is a major Australian retail and commercial bank headquartered at Heritage Lanes on Ann Street in Brisbane, Queensland. Originating in 1902 as the Queensland Agricultural Bank and expanding through mergers with the Metway Bank and Suncorp, the bank became part of the ANZ Banking Group in 2024. Suncorp Bank maintains its distinct brand identity serving over 1.2 million retail and small business clients across Queensland, NSW, and Victoria.',
    foundingStory_bn: 'সানকর্প ব্যাংক (Suncorp Bank) ১৯০২ সালে প্রতিষ্ঠিত এবং ব্রিসবেনে প্রধান কার্যালয় বিশিষ্ট কুইন্সল্যান্ডের শীর্ষ বাণিজ্যিক ব্যাংক। মেটওয়ে ব্যাংক ও এগ্রিকালচারাল ব্যাংকের সমন্বয়ে গড়ে ওঠা এই ঐতিহ্যবাহী প্রতিষ্ঠানটি ২০২৪ সালে এএনজেড গ্রুপের অংশ হলেও নিজস্ব স্বতন্ত্র ব্র্যান্ডে গ্রাহকদের সেবা দিয়ে আসছে।',
    category: 'Australian Commercial Bank (ANZ Group) / APRA ADI',
    category_bn: 'অস্ট্রেলিয়ান বাণিজ্যিক ব্যাংক (এএনজেড গ্রুপভুক্ত ADI)',
    coreStrengths: [
      'Rich 120+ year agricultural and retail banking heritage across Queensland and eastern states',
      'Award-winning home loan products and transparent Everyday Options transaction accounts',
      'Seamless real-time Osko payments, BPAY, and PayID integrations with the Suncorp App',
      'Government FCS deposit protection up to $250,000 AUD per customer'
    ],
    coreStrengths_bn: [
      '১২০ বছরেরও বেশি সমৃদ্ধ ব্যাংকিং ঐতিহ্য এবং কুইন্সল্যান্ডে গভীর গ্রাহক আস্থা',
      'পুরস্কারপ্রাপ্ত ফ্ল্যাগশিপ হোম লোন ও এভরিডে ট্রানজাকশন অ্যাকাউন্ট',
      'সানকর্প অ্যাপের মাধ্যমে নিরবচ্ছিন্ন ওস্কো, বি-পে ও পে-আইডি পেমেন্ট',
      'অস্ট্রেলিয়া সরকারের এফসিএস ($২৫০,০০০ এইউডি) আমানত সুরক্ষা'
    ],
    bankCode: '48',
    sampleBsb: '484-799 (Brisbane Ann St)',
    swiftHo: 'SNCAAU4B',
    popularApp: 'Suncorp Bank App',
    customerCare: '13 11 75 (Australia) / +61 7 3362 1222 (Overseas)',
    payidSupport: 'Full Support (Instant PayID & NPP Clearing)',
    fcsProtection: '$250,000 AUD guaranteed per account holder by Australian Government FCS',
    apraCategory: 'Authorised Deposit-taking Institution (ADI)'
  },
  'bankwest': {
    established: '1895 (Founded as the Agricultural Bank of Western Australia in Perth)',
    foundingStory: 'Bankwest (Bank of Western Australia) is a prominent Australian financial institution headquartered at Bankwest Place on Murray Street in Perth, Western Australia. Founded in 1895 to finance farmers and pioneers in WA, Bankwest operated as a state-owned bank before privatizing and becoming a fully owned subsidiary of Commonwealth Bank of Australia (CBA) in 2008. Today, Bankwest operates as a cutting-edge digital-first bank serving customers nationwide.',
    foundingStory_bn: 'ব্যাংকওয়েস্ট (Bankwest) ওয়েস্টার্ন অস্ট্রেলিয়ার পার্থে ১৮৯৫ সালে প্রতিষ্ঠিত অন্যতম প্রাচীন ও শীর্ষ বাণিজ্যিক ব্যাংক। ২০০৮ সাল থেকে এটি কমনওয়েলথ ব্যাংকের (CBA) একটি বিশেষায়িত সহযোগী প্রতিষ্ঠান হিসেবে সারা অস্ট্রেলিয়ায় সর্বাধুনিক ডিজিটাল ব্যাংকিং ও হোম লোন সেবা প্রদান করছে।',
    category: 'Australian Digital & Regional Bank (CBA Group) / APRA ADI',
    category_bn: 'অস্ট্রেলিয়ার ডিজিটাল ও আঞ্চলিক ব্যাংক (কমব্যাংক গ্রুপভুক্ত)',
    coreStrengths: [
      'Western Australia’s signature financial institution with over a century of banking heritage',
      'Streamlined digital-first everyday accounts, offset home loans, and zero foreign transaction fee cards',
      'Bankwest Easy Alerts providing instant push notifications for every card tap or salary deposit',
      'Full backing under Commonwealth Bank of Australia and Australian Government FCS $250k protection'
    ],
    coreStrengths_bn: [
      'ওয়েস্টার্ন অস্ট্রেলিয়ার প্রধান প্রতীকী ব্যাংক ও শতাধিক বছরের সেবামূলক ঐতিহ্য',
      'ডিজিটাল-ফার্স্ট ব্যাংকিং, অফসেট হোম লোন এবং বিদেশি লেনদেনে শূন্য ফি সুবিধা',
      'ব্যাংকওয়েস্ট ইজি অ্যালার্ট ও রিয়েল-টাইম ট্রানজাকশন ট্র্যাকিং',
      'কমনওয়েলথ ব্যাংক ও অস্ট্রেলিয়া সরকারের এফসিএস ($২৫০,০০০) সুরক্ষা'
    ],
    bankCode: '30',
    sampleBsb: '306-001 (Perth Murray St)',
    swiftHo: 'BKWAU6P',
    popularApp: 'Bankwest App',
    customerCare: '13 17 19 (Australia) / +61 8 9449 2840 (Overseas)',
    payidSupport: 'Full Support (Osko Instant Transfers with PayID)',
    fcsProtection: '$250,000 AUD guaranteed per account holder by Australian Government FCS (under CBA)',
    apraCategory: 'Authorised Deposit-taking Institution (ADI)'
  },
  'ing-bank-australia': {
    established: '1999 (Launched as Australia’s first branchless direct bank)',
    foundingStory: 'ING Bank (Australia) Limited, part of the Dutch global financial conglomerate ING Group, revolutionized Australian banking in 1999 by launching the nation’s first branchless direct bank. Headquartered at 60 Margaret Street in Sydney, ING has grown into Australia’s largest and most acclaimed fintech challenger bank, serving over 2 million customers with its signature Orange Everyday transaction account and Savings Maximiser.',
    foundingStory_bn: 'আইএনজি ব্যাংক অস্ট্রেলিয়া ১৯৯৯ সালে দেশের প্রথম শাখাহীন অনলাইন ডিরেক্ট ব্যাংক হিসেবে যাত্রা শুরু করে অস্ট্রেলিয়ার ব্যাংকিং ধারায় বিপ্লব আনে। সিডনিতে প্রধান কার্যালয় বিশিষ্ট আইএনজি এর অরেঞ্জ এভরিডে এবং সেভিংস ম্যাক্সিমাইজারের মাধ্যমে ২ মিলিয়নেরও বেশি গ্রাহককে সেরা ডিজিটাল ব্যাংকিং সুবিধা দিচ্ছে।',
    category: 'Direct Digital Challenger Bank / APRA ADI',
    category_bn: 'অস্ট্রেলিয়ার শীর্ষ ডিজিটাল চ্যালেঞ্জার ব্যাংক',
    coreStrengths: [
      'Pioneer of zero-fee branchless banking and ATM fee rebate incentives nationwide and worldwide',
      'Consistently awarded Australia’s Best Bank for customer advocacy and savings interest rates',
      'Rapid digital account opening with instant digital Mastercard provisioning to Apple/Google Wallet',
      'Government Financial Claims Scheme deposit safety guarantee up to $250,000 AUD per depositor'
    ],
    coreStrengths_bn: [
      'শাখাহীন ফি-মুক্ত ব্যাংকিং এবং দেশ-বিদেশে এটিএম ফি রিবেট সুবিধার প্রবক্তা',
      'অস্ট্রেলিয়ার শীর্ষ পুরস্কারপ্রাপ্ত ডিজিটাল ব্যাংক ও উচ্চ সুদের সেভিংস ম্যাক্সিমাইজার',
      'মুহূর্তের মধ্যে ডিজিটাল অ্যাকাউন্ট ও অ্যাপল/গুগল পে সাপোর্ট',
      'অস্ট্রেলিয়ান এফসিএস ($২৫০,০০০ এইউডি) সরকারি আমানত সুরক্ষা'
    ],
    bankCode: '92',
    sampleBsb: '923-100 (Sydney Head Office)',
    swiftHo: 'INGBAP4S',
    popularApp: 'ING Australia Banking App',
    customerCare: '133 464 (Australia) / +61 2 9028 4077 (Overseas)',
    payidSupport: 'Full Support (Fast Osko Payments & PayID Lookup)',
    fcsProtection: '$250,000 AUD guaranteed per account holder by Australian Government FCS',
    apraCategory: 'Authorised Deposit-taking Institution (ADI)'
  },
  'st-george-bank': {
    established: '1937 (Founded as St. George Co-operative Building Society in Hurstville, NSW)',
    foundingStory: 'St.George Bank is a major Australian retail bank established in 1937 in suburban Sydney, becoming a full commercial bank in 1992 before merging into Westpac Banking Corporation in 2008. Headquartered in Kogarah, NSW, St.George is famous for its iconic friendly dragon mascot and provides extensive branch banking, mortgages, commercial loans, and wealth management services across New South Wales, the ACT, Queensland, and Western Australia.',
    foundingStory_bn: 'সেন্ট জর্জ ব্যাংক (St.George Bank) ১৯৩৭ সালে প্রতিষ্ঠিত নিউ সাউথ ওয়েলসের অন্যতম জনপ্রিয় বাণিজ্যিক ব্যাংক। ২০০৮ সাল থেকে এটি ওয়েস্টপ্যাক ব্যাংকিং কর্পোরেশনের একটি প্রধান সহযোগী ব্র্যান্ড হিসেবে কাজ করছে। এর হেডকোয়ার্টার কোগারাহ, এনএসডাব্লিউ-তে অবস্থিত।',
    category: 'Australian Commercial Bank (Westpac Group) / APRA ADI',
    category_bn: 'অস্ট্রেলিয়ান বাণিজ্যিক ব্যাংক (ওয়েস্টপ্যাক গ্রুপভুক্ত)',
    coreStrengths: [
      'Deep roots in New South Wales and Sydney suburban communities with strong customer loyalty',
      'Award-winning home loans, family pledge options, and dedicated small business managers',
      'Access to Westpac’s nationwide ATM network with zero withdrawal fees for St.George cardholders',
      'Australian Government Financial Claims Scheme deposit protection up to $250,000 AUD per customer'
    ],
    coreStrengths_bn: [
      'সিডনি ও নিউ সাউথ ওয়েলসের স্থানীয় গ্রাহকদের মাঝে গভীর আস্থা ও জনপ্রিয়তা',
      'আকর্ষণীয় হোম লোন ও ফ্যামিলি প্লেজ সুবিধা',
      'ওয়েস্টপ্যাকের সমগ্র অস্ট্রেলিয়ার সকল এটিএম থেকে ফ্রি টাকা তোলার সুযোগ',
      'অস্ট্রেলিয়ান এফসিএস ($২৫০,০০০ এইউডি) সরকারি ডিপোজিট সুরক্ষা'
    ],
    bankCode: '11',
    sampleBsb: '112-879 (Kogarah Head Office)',
    swiftHo: 'SGBLAU2S',
    popularApp: 'St.George Mobile Banking App',
    customerCare: '13 33 30 (Australia) / +61 2 9155 7800 (Overseas)',
    payidSupport: 'Full Support (Osko Real-Time PayID Payments)',
    fcsProtection: '$250,000 AUD guaranteed per account holder by Australian Government FCS (under Westpac)',
    apraCategory: 'Authorised Deposit-taking Institution (ADI)'
  },
  'bank-of-melbourne': {
    established: '1989 (Relaunched in 2011 as Victoria’s dedicated local bank by Westpac)',
    foundingStory: 'Bank of Melbourne is Victoria’s dedicated local banking institution, headquartered on Collins Street in Melbourne. Originally founded in 1989 and revived by Westpac in 2011, Bank of Melbourne operates over 100 branches across metropolitan Melbourne and regional Victoria, combining local Victorian decision-making with the institutional financial strength of the Westpac Group.',
    foundingStory_bn: 'ব্যাংক অব মেলবোর্ন (Bank of Melbourne) ভিক্টোরিয়া রাজ্যের ডেডিকেটেড স্থানীয় ব্যাংক। ১৯৮৯ সালে প্রতিষ্ঠিত এবং ২০১১ সালে ওয়েস্টপ্যাক দ্বারা নতুন আঙ্গিকে চালু হওয়া এই ব্যাংকটি মেলবোর্নের কলিন্স স্ট্রিটে প্রধান কার্যালয় থেকে সমগ্র ভিক্টোরিয়ায় ব্যাংকিং সেবা পরিচালনা করে।',
    category: 'Victorian Regional Bank (Westpac Group) / APRA ADI',
    category_bn: 'ভিক্টোরিয়ার বিশেষায়িত আঞ্চলিক ব্যাংক (ওয়েস্টপ্যাক গ্রুপ)',
    coreStrengths: [
      'Dedicated local focus on Victorian residents, property buyers, and local businesses',
      'Over 100 branches across Melbourne and Victoria with locally empowered lending managers',
      'Integrated mobile banking app with Osko instant settlement and biometric security',
      'Protected under the Australian Government FCS guarantee ($250,000 AUD per customer)'
    ],
    coreStrengths_bn: [
      'ভিক্টোরিয়া ও মেলবোর্নবাসীর জন্য বিশেষায়িত লোকাল ব্যাংকিং সেবা',
      'মেলবোর্ন ও আশেপাশের অঞ্চলে ১০০টির বেশি শাখা ও স্থানীয় ঋণ অনুমোদন সুবিধা',
      'ওস্কো রিয়েল-টাইম পেমেন্ট ও বায়োমেট্রিক নিরাপত্তা সমৃদ্ধ অ্যাপ',
      'অস্ট্রেলিয়া সরকারের এফসিএস ($২৫০,০০০ এইউডি) আমানত সুরক্ষা'
    ],
    bankCode: '19',
    sampleBsb: '193-000 (Melbourne Collins St)',
    swiftHo: 'BMLBAU3S',
    popularApp: 'Bank of Melbourne Mobile Banking App',
    customerCare: '13 22 66 (Australia) / +61 3 8536 7870 (Overseas)',
    payidSupport: 'Full Support (Osko & PayID Integration)',
    fcsProtection: '$250,000 AUD guaranteed per account holder by Australian Government FCS (under Westpac)',
    apraCategory: 'Authorised Deposit-taking Institution (ADI)'
  },
  'banksa': {
    established: '1848 (Founded as the Savings Bank of South Australia in Adelaide)',
    foundingStory: 'BankSA (Bank of South Australia) is South Australia’s largest and oldest bank, established in 1848 in Adelaide. As the dominant financial institution in South Australia for over 175 years, BankSA joined the St.George Bank and Westpac family in 2008. Headquartered at 97 King William Street in Adelaide, BankSA finances South Australian families, businesses, wineries, and agricultural innovators.',
    foundingStory_bn: 'ব্যাংকএসএ (BankSA - Bank of South Australia) সাউথ অস্ট্রেলিয়ার প্রাচীনতম ও সর্ববৃহৎ ব্যাংক, যা ১৮৪৮ সালে প্রতিষ্ঠিত। অ্যাডিলেডের কিং উইলিয়াম স্ট্রিটে প্রধান কার্যালয় বিশিষ্ট ব্যাংকএসএ ১৭৫ বছরেরও বেশি সময় ধরে সাউথ অস্ট্রেলিয়ার স্থানীয় অর্থনীতিতে নেতৃস্থানীয় ভূমিকা রাখছে।',
    category: 'South Australian Regional Bank (Westpac Group) / APRA ADI',
    category_bn: 'সাউথ অস্ট্রেলিয়ার প্রধান আঞ্চলিক ব্যাংক (ওয়েস্টপ্যাক গ্রুপ)',
    coreStrengths: [
      'South Australia’s premier bank with 175+ years of continuous service across metropolitan Adelaide and regional SA',
      'Extensive branch network and agribusiness specialists serving SA primary producers',
      'Full modern digital banking app with Cardless Cash and Osko instant PayID transfers',
      'Backed by Australian Government FCS deposit guarantee up to $250,000 AUD per customer'
    ],
    coreStrengths_bn: [
      'সাউথ অস্ট্রেলিয়ার প্রধান ঐতিহ্যবাহী ব্যাংক ও ১৭৫ বছরের বিশ্বস্ত সেবা',
      'অ্যাডিলেড ও আশেপাশের অঞ্চলে বিস্তৃত শাখা ও কৃষি ঋণ সুবিধা',
      'কার্ডলেস ক্যাশ ও ওস্কো ইনস্ট্যান্ট পেমেন্ট সুবিধা সম্বলিত মোবাইল অ্যাপ',
      'অস্ট্রেলিয়া সরকারের এফসিএস ($২৫০,০০০ এইউডি) আমানত সুরক্ষা'
    ],
    bankCode: '10',
    sampleBsb: '105-001 (Adelaide King William St)',
    swiftHo: 'BSAAAU5S',
    popularApp: 'BankSA Mobile Banking App',
    customerCare: '13 13 76 (Australia) / +61 8 8424 8202 (Overseas)',
    payidSupport: 'Full Support (Osko Fast Payments via PayID)',
    fcsProtection: '$250,000 AUD guaranteed per account holder by Australian Government FCS (under Westpac)',
    apraCategory: 'Authorised Deposit-taking Institution (ADI)'
  },
  'me-bank': {
    established: '1994 (Founded as Super Members Home Loans by Australian Industry Super Funds)',
    foundingStory: 'ME Bank (Members Equity Bank) was founded in 1994 by Australia’s industry superannuation funds to provide fair, transparent, and low-cost home loans and banking to Australian workers. Headquartered at 360 Elizabeth Street in Melbourne, ME Bank was acquired by Bank of Queensland (BOQ) in 2021, creating a powerful alternative to the Big Four banks with competitive high-interest savings and home loans.',
    foundingStory_bn: 'মি ব্যাংক (ME Bank - Members Equity Bank) ১৯৯৪ সালে অস্ট্রেলিয়ার সুপারঅ্যানুয়েশন ফান্ডগুলোর উদ্যোগে প্রতিষ্ঠিত হয় যাতে সাধারণ কর্মীদের কম সুদে হোম লোন ও সাশ্রয়ী ব্যাংকিং দেওয়া যায়। মেলবোর্নে প্রধান কার্যালয় বিশিষ্ট এই প্রতিষ্ঠানটি ২০২১ সালে ব্যাংক অব কুইন্সল্যান্ড (BOQ) দ্বারা অধিগৃহীত হয়।',
    category: 'Australian Direct & Challenger Bank (BOQ Group) / APRA ADI',
    category_bn: 'অস্ট্রেলিয়ার ডিজিটাল চ্যালেঞ্জার ব্যাংক (BOQ গ্রুপ)',
    coreStrengths: [
      'Created by Australian super funds with a mission to help everyday Australians get ahead',
      'Competitive HomeMe mortgages and SpendME everyday accounts with zero monthly fees',
      'Fast Osko NPP transfer clearing with modern mobile security features',
      'Government Financial Claims Scheme deposit safety protection up to $250,000 AUD'
    ],
    coreStrengths_bn: [
      'সাধারণ কর্মীদের সুবিধার্থে প্রতিষ্ঠিত সাশ্রয়ী ও স্বচ্ছ ব্যাংকিং প্রতিষ্ঠান',
      'কোনো মাসিক ফি ছাড়া স্পেন্ড-মি ট্রানজাকশন অ্যাকাউন্ট ও আকর্ষণীয় হোম লোন',
      'ওস্কো এনপিপি তাৎক্ষণিক ফান্ড ট্রান্সফার ও ডিজিটাল পেমেন্টস',
      'অস্ট্রেলিয়া সরকারের এফসিএস ($২৫০,০০০ এইউডি) ডিপোজিট গ্যারান্টি'
    ],
    bankCode: '94',
    sampleBsb: '944-600 (Melbourne Head Office)',
    swiftHo: 'MEBLAU2S',
    popularApp: 'ME Bank App',
    customerCare: '13 15 63 (Australia) / +61 3 9708 4001 (Overseas)',
    payidSupport: 'Full Support (Instant PayID & NPP Clearing)',
    fcsProtection: '$250,000 AUD guaranteed per account holder by Australian Government FCS (under BOQ)',
    apraCategory: 'Authorised Deposit-taking Institution (ADI)'
  },
  'amp-bank': {
    established: '1998 (Banking division of AMP Limited, established 1849)',
    foundingStory: 'AMP Bank Limited is the banking subsidiary of AMP Limited, one of Australia’s oldest wealth management and superannuation corporations founded in 1849. Headquartered at Alfred Street in Sydney, AMP Bank provides residential home loans, savings accounts, term deposits, and self-managed super fund (SMSF) banking to over 100,000 clients across Australia.',
    foundingStory_bn: 'এএমপি ব্যাংক লিমিটেড (AMP Bank) ১৮৪৯ সালে প্রতিষ্ঠিত অস্ট্রেলিয়ার ঐতিহ্যবাহী সম্পদ ব্যবস্থাপনা প্রতিষ্ঠান এএমপি লিমিটেডের ব্যাংকিং শাখা। ১৯৯৮ সালে প্রতিষ্ঠিত এই ব্যাংকটি সিডনি থেকে সারা অস্ট্রেলিয়ার গ্রাহকদের হোম লোন, সেভিংস ও সুপারঅ্যানুয়েশন ব্যাংকিং সেবা প্রদান করে।',
    category: 'Australian Wealth & Retail Bank / APRA ADI',
    category_bn: 'অস্ট্রেলিয়ার ওয়েলথ ও রিটেইল ব্যাংক',
    coreStrengths: [
      'Backed by AMP Limited’s 175-year track record in Australian wealth and retirement management',
      'Specialized solutions for SMSF (Self-Managed Super Fund) lending and high-yield savings',
      'Integrated digital banking with real-time Osko settlement and round-up savings features',
      'Protected under the Australian Government FCS insurance ($250k AUD per depositor)'
    ],
    coreStrengths_bn: [
      '১৭৫ বছরের অভিজ্ঞতাসম্পন্ন এএমপি ওয়েলথ গ্রুপের শক্তিশালী আর্থিক ভিত্তি',
      'এসএমএসএফ (SMSF) সুপার ফান্ড লোন ও হাই-ইল্ড সেভিংসে বিশেষ দক্ষতা',
      'ওস্কো রিয়েল-টাইম ফান্ড ট্রান্সফার ও রাউন্ড-আপ সেভিংস সুবিধা',
      'অস্ট্রেলিয়া সরকারের এফসিএস ($২৫০,০০০ এইউডি) ডিপোজিট সুরক্ষা'
    ],
    bankCode: '70',
    sampleBsb: '704-865 (Sydney Alfred St)',
    swiftHo: 'AMPBAU2S',
    popularApp: 'AMP Bank App',
    customerCare: '13 30 30 (Australia) / +61 2 8048 8162 (Overseas)',
    payidSupport: 'Full Support (Fast PayID Transfers)',
    fcsProtection: '$250,000 AUD guaranteed per account holder by Australian Government FCS',
    apraCategory: 'Authorised Deposit-taking Institution (ADI)'
  },
  'great-southern-bank': {
    established: '1946 (Founded as Credit Union Australia - CUA)',
    foundingStory: 'Great Southern Bank (formerly Credit Union Australia - CUA) is Australia’s largest customer-owned financial institution. Headquartered at 300 George Street in Brisbane, Queensland, the bank rebranded from CUA to Great Southern Bank in 2021 to reaffirm its commitment to helping everyday Australians buy their own homes. Because it is customer-owned without shareholders, profits are reinvested directly into lower interest rates and customer perks.',
    foundingStory_bn: 'গ্রেট সাউদার্ন ব্যাংক (পূর্বে ক্রেডিট ইউনিয়ন অস্ট্রেলিয়া - CUA) অস্ট্রেলিয়ার সর্ববৃহৎ কাস্টমার-মালিকানাধীন মিউচুয়াল ব্যাংক। ১৯৪৬ সালে প্রতিষ্ঠিত এবং ব্রিসবেনে প্রধান কার্যালয় বিশিষ্ট এই প্রতিষ্ঠানটি কোনো শেয়ারহোল্ডার না থাকায় মুনাফা সরাসরি গ্রাহকদের কম সুদের লোন এবং বাড়তি সেবায় ব্যবহার করে।',
    category: 'Australia’s Largest Customer-Owned Mutual Bank / APRA ADI',
    category_bn: 'অস্ট্রেলিয়ার সর্ববৃহৎ কাস্টমার-মালিকানাধীন মিউচুয়াল ব্যাংক',
    coreStrengths: [
      'Australia’s largest customer-owned bank where profits benefit depositors rather than outside shareholders',
      'Innovative HomeLoan and First Home Buyer Boost programs with dedicated mobile lenders',
      'The Vault high-interest savings sub-accounts and automated clever-round-up tools',
      'Government Financial Claims Scheme deposit guarantee up to $250,000 AUD per depositor'
    ],
    coreStrengths_bn: [
      'অস্ট্রেলিয়ার সর্ববৃহৎ কাস্টমার-মালিকানাধীন ব্যাংক যেখানে কোনো বাইরের শেয়ারহোল্ডার নেই',
      'ফার্স্ট হোম বায়ারদের জন্য বিশেষ লোন ও উদ্ভাবনী সঞ্চয়ী স্কিম (The Vault)',
      'রাউন্ড-আপ সেভিংস টুলস ও সহজ মোবাইল ব্যাংকিং অ্যাপ্লিকেশন',
      'অস্ট্রেলিয়া সরকারের এফসিএস ($২৫০,০০০ এইউডি) আমানত সুরক্ষা'
    ],
    bankCode: '81',
    sampleBsb: '814-282 (Brisbane George St)',
    swiftHo: 'CUAAAU4B',
    popularApp: 'Great Southern Bank Mobile App',
    customerCare: '133 282 (Australia) / +61 7 3552 4945 (Overseas)',
    payidSupport: 'Full Support (Instant Osko Transfers with PayID)',
    fcsProtection: '$250,000 AUD guaranteed per account holder by Australian Government FCS',
    apraCategory: 'Authorised Deposit-taking Institution (ADI)'
  },
  'hsbc-bank-australia': {
    established: '1965 (Established as HSBC Group’s Australian banking entity)',
    foundingStory: 'HSBC Bank Australia Limited is a premier foreign commercial bank operating in Australia, headquartered at Tower 1, Barangaroo International Towers in Sydney. Leveraging the global strength of HSBC Group, HSBC Australia specializes in cross-border wealth management, international mortgage solutions, multi-currency Global Money Accounts, and corporate trade finance connecting Australian business to Asia, Europe, and the Americas.',
    foundingStory_bn: 'এইচএসবিসি ব্যাংক অস্ট্রেলিয়া লিমিটেড ১৯৬৫ সাল থেকে অস্ট্রেলিয়ায় আন্তর্জাতিক ব্যাংকিং কার্যক্রম পরিচালনা করছে। সিডনির বারানগারুতে প্রধান কার্যালয় বিশিষ্ট এইচএসবিসি ক্রস-বর্ডার রেমিট্যান্স, মাল্টি-কারেন্সি গ্লোবাল মানি অ্যাকাউন্ট এবং আন্তর্জাতিক বাণিজ্যে অগ্রণী ভূমিকা পালন করে।',
    category: 'Foreign Commercial Bank & Global Wealth Leader / APRA ADI',
    category_bn: 'আন্তর্জাতিক বাণিজ্যিক ব্যাংক (গ্লোবাল ট্রেড ও ফরেন এক্সচেঞ্জ)',
    coreStrengths: [
      'Seamless multi-currency Global Money Accounts enabling holding and spending in 10+ currencies',
      'Instant zero-fee international transfers between worldwide HSBC accounts via Global View & Global Transfers',
      'Premier and Jade wealth management offering dedicated global relationship managers',
      'Australian Government Financial Claims Scheme deposit safety protection up to $250,000 AUD'
    ],
    coreStrengths_bn: [
      '১০টিরও বেশি বৈদেশিক মুদ্রায় লেনদেনের সুবিধা সম্বলিত গ্লোবাল মানি অ্যাকাউন্ট',
      'বিশ্বজুড়ে সকল এইচএসবিসি অ্যাকাউন্টের মধ্যে মুহূর্তে শূন্য ফি-তে আন্তর্জাতিক রেমিট্যান্স ট্রান্সফার',
      'প্রিমিয়ার ওয়েলথ ম্যানেজমেন্ট এবং ডেডিকেটেড রিলেশনশিপ ব্যাংকিং',
      'অস্ট্রেলিয়া সরকারের এফসিএস ($২৫০,০০০ এইউডি) সরকারি ডিপোজিট সুরক্ষা'
    ],
    bankCode: '34',
    sampleBsb: '342-011 (Sydney Barangaroo)',
    swiftHo: 'HKBCAU2S',
    popularApp: 'HSBC Australia Mobile Banking',
    customerCare: '1300 308 008 (Australia) / +61 2 9005 8220 (Overseas)',
    payidSupport: 'Full Support (Fast Osko PayID Transfers)',
    fcsProtection: '$250,000 AUD guaranteed per account holder by Australian Government FCS',
    apraCategory: 'Authorised Deposit-taking Institution (ADI)'
  },
  'citibank-australia': {
    established: '1985 (Granted Australian banking licence; consumer banking transitioned to NAB Group in 2022)',
    foundingStory: 'Citibank Australia is a prominent international financial institution headquartered on Park Street in Sydney. Operating in Australia since 1985, Citi’s consumer banking and credit card division was acquired by National Australia Bank (NAB) in 2022, creating a powerhouse in international currency accounts (Citibank Plus) and premium rewards, while Citi retains its leading global institutional markets franchise in Australia.',
    foundingStory_bn: 'সিটিব্যাংক অস্ট্রেলিয়া ১৯৮৫ সাল থেকে সিডনি থেকে পরিচালিত শীর্ষস্থানীয় আন্তর্জাতিক ব্যাংক। ২০২২ সালে এর কনজিউমার ও কার্ড বিজনেস ন্যাশনাল অস্ট্রেলিয়া ব্যাংক (NAB) দ্বারা অধিগৃহীত হয়। গ্লোবাল কারেন্সি লেনদেন এবং আন্তর্জাতিক প্রিমিয়ার ব্যাংকিংয়ে এটি অত্যন্ত জনপ্রিয়।',
    category: 'Global Commercial & Institutional Bank (NAB Consumer Partner) / APRA ADI',
    category_bn: 'আন্তর্জাতিক বাণিজ্যিক ও প্রাতিষ্ঠানিক ব্যাংক',
    coreStrengths: [
      'Fee-free international ATM withdrawals and zero foreign transaction fees on Citibank Plus accounts',
      'Comprehensive institutional treasury, corporate lending, and cross-border currency clearing',
      'Full Osko / PayID / BSB clearing backed by National Australia Bank and Australian Government FCS',
      'Protected under the Australian Government FCS guarantee ($250,000 AUD per depositor)'
    ],
    coreStrengths_bn: [
      'সিটিব্যাংক প্লাস অ্যাকাউন্টের মাধ্যমে বিশ্বজুড়ে ফ্রি এটিএম ও শূন্য ফরেন ট্রানজাকশন ফি',
      'আন্তর্জাতিক ট্রেজারি, করপোরেট ঋণ এবং গ্লোবাল কারেন্সি ক্লিয়ারিং',
      'ন্যাব গ্রুপের সমন্বিত পেমেন্ট প্ল্যাটফর্ম ও ওস্কো/পে-আইডি রিয়েল-টাইম ট্রান্সফার',
      'অস্ট্রেলিয়ান এফসিএস ($২৫০,০০০ এইউডি) সরকারি ডিপোজিট সুরক্ষা'
    ],
    bankCode: '24',
    sampleBsb: '242-200 (Sydney Park St)',
    swiftHo: 'CITIAP2S',
    popularApp: 'Citi Mobile App Australia',
    customerCare: '13 24 84 (Australia) / +61 2 8225 0615 (Overseas)',
    payidSupport: 'Full Support (Osko Fast Clearing)',
    fcsProtection: '$250,000 AUD guaranteed per account holder by Australian Government FCS (under NAB)',
    apraCategory: 'Authorised Deposit-taking Institution (ADI)'
  },
  'peoples-choice-credit-union': {
    established: '1875 (Heritage Bank founded 1875; merged with People’s Choice in 2023 to create People First Bank)',
    foundingStory: 'People First Bank (formed via the historic 2023 merger of Heritage Bank founded in 1875 and People’s Choice Credit Union founded in 1949) is Australia’s leading customer-owned mutual bank. Headquartered on Flinders Street in Adelaide, South Australia, People First Bank serves over 720,000 members across South Australia, Queensland, Victoria, and NSW, offering genuine cooperative values without shareholder dividend pressure.',
    foundingStory_bn: 'পিপল ফার্স্ট ব্যাংক (হেরিটেজ ব্যাংক ও পিপলস চয়েস ক্রেডিট ইউনিয়নের ঐতিহাসিক একীভূতকরণের মাধ্যমে গঠিত) অস্ট্রেলিয়ার অন্যতম শীর্ষ মিউচুয়াল কাস্টমার-মালিকানাধীন ব্যাংক। অ্যাডিলেডে প্রধান কার্যালয় বিশিষ্ট এই ব্যাংকটি ৭২০,০০০ এর বেশি গ্রাহককে সেবা দিয়ে থাকে।',
    category: 'Australian Customer-Owned Mutual Bank / APRA ADI',
    category_bn: 'অস্ট্রেলিয়ার শীর্ষ মিউচুয়াল কাস্টমার-ওন্ড ব্যাংক',
    coreStrengths: [
      'Customer-owned cooperative model with 100% of profits dedicated to members and community projects',
      'Comprehensive branch coverage across South Australia, Queensland, NSW, and Victoria',
      'Award-winning home loans and transparent transaction accounts with zero monthly keeping fees',
      'Full Australian Government Financial Claims Scheme deposit safety up to $250,000 AUD'
    ],
    coreStrengths_bn: [
      '১০০% কাস্টমার মালিকানাধীন মিউচুয়াল ব্যাংক যেখানে মুনাফা সদস্যদের কল্যাণে ব্যয় হয়',
      'সাউথ অস্ট্রেলিয়া, কুইন্সল্যান্ড ও ভিক্টোরিয়ায় বিস্তৃত শাখা নেটওয়ার্ক',
      'মাসিক ফি-হীন ট্রানজাকশন অ্যাকাউন্ট ও কাস্টমার-ফার্স্ট হোম লোন প্যাকেজ',
      'অস্ট্রেলিয়া সরকারের এফসিএস ($২৫০,০০০ এইউডি) সরকারি আমানত সুরক্ষা'
    ],
    bankCode: '80',
    sampleBsb: '805-050 (Adelaide Flinders St)',
    swiftHo: 'HERBAU4B',
    popularApp: 'People First Bank App',
    customerCare: '13 11 82 (Australia) / +61 8 8305 8305 (Overseas)',
    payidSupport: 'Full Support (Fast Osko PayID Transfers)',
    fcsProtection: '$250,000 AUD guaranteed per account holder by Australian Government FCS',
    apraCategory: 'Authorised Deposit-taking Institution (ADI)'
  },
  'reserve-bank-of-australia': {
    established: '1960 (Established under the Reserve Bank Act 1959)',
    foundingStory: 'The Reserve Bank of Australia (RBA) is Australia’s central bank and monetary authority, headquartered at 65 Martin Place in Sydney. Operating under the Reserve Bank Act 1959, the RBA determines the nation’s official cash rate (OCR), issues Australian currency notes, maintains financial system stability, manages foreign exchange reserves, and oversees the Reserve Bank Information and Transfer System (RITS) for high-value real-time gross settlement (RTGS).',
    foundingStory_bn: 'রিজার্ভ ব্যাংক অব অস্ট্রেলিয়া (RBA) হলো অস্ট্রেলিয়ার কেন্দ্রীয় ব্যাংক ও প্রধান মুদ্রানীতি নিয়ন্ত্রক সংস্থা। ১৯৫৯ সালের রিজার্ভ ব্যাংক আইনের অধীনে প্রতিষ্ঠিত এবং সিডনির মার্টিন প্লেসে অবস্থিত আরবিএ দেশের নগদ টাকার নোট ইস্যু, সুদের হার নির্ধারণ এবং আর্থিক ব্যবস্থার সার্বিক স্থিতিশীলতা নিশ্চিত করে।',
    category: 'Central Monetary Authority / Sovereign Bank',
    category_bn: 'অস্ট্রেলিয়ার কেন্দ্রীয় ব্যাংক (মুদ্রানীতি ও রিজার্ভ নিয়ন্ত্রক)',
    coreStrengths: [
      'Sole issuer of Australian banknotes crafted with world-leading polymer security technology',
      'Sets national monetary policy, inflation target (2-3%), and the Official Cash Rate (OCR)',
      'Operates RITS (Reserve Bank Information and Transfer System) settling hundreds of billions daily',
      'Monitors national financial stability in close partnership with APRA, ASIC, and the Treasury'
    ],
    coreStrengths_bn: [
      'বিশ্বমানের পলিমার প্রযুক্তি সম্বলিত অস্ট্রেলিয়ান ডলার নোটের একমাত্র প্রকাশক',
      'অস্ট্রেলিয়ার কেন্দ্রীয় মুদ্রানীতি ও অফিসিয়াল ক্যাশ রেট (OCR) নির্ধারক',
      'দৈনিক শত শত বিলিয়ন ডলার নিষ্পত্তির জন্য RITS রিয়েল-টাইম সেটেলমেন্ট সিস্টেম পরিচালনা',
      'APRA এবং ASIC-এর সহযোগিতায় অস্ট্রেলিয়ার ব্যাংকিং ব্যবস্থার সার্বিক নিরাপত্তা নিশ্চিতকরণ'
    ],
    bankCode: '09',
    sampleBsb: '092-002 (Sydney Martin Place Central)',
    swiftHo: 'RBAAAU2S',
    popularApp: 'Official Portal: rba.gov.au',
    customerCare: '+61 2 9551 8111 (Sydney Head Office)',
    payidSupport: 'Systemic Settlement Operator (NPP Fast Settlement Service)',
    fcsProtection: 'Sovereign Central Bank Authority (Government Owned)',
    apraCategory: 'Central Bank of Australia'
  }
};

const DEFAULT_AUSTRALIA_KNOWLEDGE: AustralianBankKnowledge = {
  established: 'Authorised Australian Financial Institution',
  foundingStory: 'An Authorised Deposit-taking Institution (ADI) regulated by the Australian Prudential Regulation Authority (APRA) and the Reserve Bank of Australia (RBA). Providing comprehensive consumer, business, and electronic payments across Australia.',
  foundingStory_bn: 'অস্ট্রেলিয়ান প্রুডেন্সিয়াল রেগুলেশন অথরিটি (APRA) এবং রিজার্ভ ব্যাংক অব অস্ট্রেলিয়া (RBA) অনুমোদিত আর্থিক প্রতিষ্ঠান। অস্ট্রেলিয়াজুড়ে নিরাপদ গ্রাহক ও বাণিজ্যিক ব্যাংকিং সেবা প্রদানে নিয়োজিত।',
  category: 'Authorised Deposit-taking Institution (ADI)',
  category_bn: 'APRA অনুমোদিত আর্থিক প্রতিষ্ঠান (ADI)',
  coreStrengths: [
    'Regulated under Australian banking laws with strict APRA capital adequacy oversight',
    'Full integration with Australia’s New Payments Platform (NPP), Osko, and BSB clearing',
    'Protected under the Australian Government Financial Claims Scheme ($250k AUD per depositor)',
    'Full support for domestic EFT and international SWIFT/BIC remittances'
  ],
  coreStrengths_bn: [
    'অস্ট্রেলিয়ান ব্যাংকিং আইন এবং APRA এর কঠোর নজরদারিতে পরিচালিত',
    'অস্ট্রেলিয়ার নিউ পেমেন্টস প্ল্যাটফর্ম (NPP), ওস্কো ও বিএসবি ক্লিয়ারিংয়ে সংযুক্ত',
    'অস্ট্রেলিয়ান সরকারের এফসিএস ($২৫০,০০০ এইউডি) আমানত সুরক্ষা',
    'অভ্যন্তরীণ EFT এবং আন্তর্জাতিক সুইফট রেমিট্যান্স লেনদেনে সম্পূর্ণ কার্যকর'
  ],
  bankCode: '00',
  sampleBsb: '000-000',
  swiftHo: 'AUSTRALIA',
  popularApp: 'Australian Digital Banking',
  customerCare: 'Contact local Australian branch for customer service',
  payidSupport: 'Supported via NPP / Osko',
  fcsProtection: '$250,000 AUD guaranteed per account holder by Australian Government FCS',
  apraCategory: 'Authorised Deposit-taking Institution (ADI)'
};

export const australiaBanksArticles: BankArticle[] = banksData.map((bank) => {
  const knowledge = AUSTRALIA_BANK_KNOWLEDGE[bank.id] || {
    ...DEFAULT_AUSTRALIA_KNOWLEDGE,
    bankCode: bank.bank_code || '00',
    sampleBsb: bank.bsb_code || '000-000',
    swiftHo: bank.swift_code || 'CTBAAU2S'
  };

  const bsbCode = bank.bsb_code || knowledge.sampleBsb;
  const bsbFormatted = bsbCode.length === 6 ? `${bsbCode.slice(0, 3)}-${bsbCode.slice(3)}` : bsbCode;
  const bankCode = bank.bank_code || bsbCode.slice(0, 2);
  const swiftCode = bank.swift_code || knowledge.swiftHo;

  return {
    id: `guide-${bank.id}`,
    slug: bank.id,
    bank_id: bank.id,
    country: 'au',
    title: `${bank.name} BSB Code, Account Routing & SWIFT Transfer Guide 2026`,
    title_bn: `${bank.name_bn || bank.name} - বিএসবি (BSB) কোড, রাউটিং ও সুইফট কোড নির্দেশিকা ২০২৬`,
    title_hi: `${bank.name_hi || bank.name} - बीएसबी कोड, राउटिंग एवं स्विफ्ट कोड गाइड 2026`,
    title_ru: `${bank.name_ru || bank.name} — BSB код, клиринг и SWIFT переводы 2026`,
    subtitle: `Official 2026 banking specifications for ${bank.name}: 6-digit BSB code (${bsbFormatted}), APCA bank code (${bankCode}), Osko/PayID real-time transfers, FCS $250,000 AUD deposit guarantee, and international SWIFT wire instructions.`,
    subtitle_bn: `${bank.name_bn || bank.name}-এর ২০২৬ সালের ৬-সংখ্যার BSB কোড (${bsbFormatted}), APCA কোড (${bankCode}), ওস্কো ও পে-আইডি ইনস্ট্যান্ট পেমেন্ট, অস্ট্রেলিয়ান সরকারি FCS আমানত সুরক্ষা এবং সুইফট কোড (${swiftCode}) নির্দেশিকা।`,
    subtitle_hi: `${bank.name_hi || bank.name} का 2026 BSB कोड (${bsbFormatted}), APCA कोड (${bankCode}), Osko/PayID ट्रांसफर एवं SWIFT कोड (${swiftCode}) सम्पूर्ण विवरण।`,
    subtitle_ru: `Официальный справочник по банку ${bank.name_ru || bank.name}: 6-значный BSB код (${bsbFormatted}), APCA (${bankCode}), система Osko/PayID и SWIFT (${swiftCode}).`,
    meta_title: `${bank.name} BSB Code, Routing Number, Osko PayID & SWIFT 2026`,
    meta_description: `Complete guide to ${bank.name} 6-digit BSB code (${bsbFormatted}), APCA bank code (${bankCode}), Osko/PayID real-time transfers, FCS $250,000 AUD deposit guarantee and SWIFT code (${swiftCode}).`,
    meta_keywords: [
      `${bank.name} bsb code`,
      `${bank.name} routing number`,
      `${bank.name} swift code`,
      `${bank.name} payid`,
      `${bank.name} osko`,
      `australia ${bank.name} fcs guarantee`
    ],
    read_time: '6 min read',
    published_date: '2026-03-01',
    last_updated: '2026-09-08',
    author: 'Global Financial Editorial Board (Australia Banking Desk)',
    overview: `${bank.name} is a leading Australian financial institution and Authorised Deposit-taking Institution (ADI). Understanding Australia’s Bank-State-Branch (BSB) clearing architecture, Osko/PayID instant settlements, and the government FCS deposit guarantee ensures secure domestic and international money transfers.`,
    overview_bn: `${bank.name_bn || bank.name} অস্ট্রেলিয়ার অন্যতম শীর্ষস্থানীয় আর্থিক প্রতিষ্ঠান এবং অনুমোদিত আমানত গ্রহণকারী সংস্থা (ADI)। অস্ট্রেলিয়ার ৬-ডিজিটের BSB ক্লিয়ারিং সিস্টেম, ওস্কো/পে-আইডি ইনস্ট্যান্ট পেমেন্ট এবং সরকারের ২৫০,০০০ এইউডি আমানত সুরক্ষা জানা যেকোনো লেনদেনের জন্য অত্যন্ত আবশ্যক।`,
    overview_hi: `${bank.name_hi || bank.name} ऑस्ट्रेलिया के प्रमुख वित्तीय संस्थानों में से एक है। 6-अंकीय BSB कोड, Osko/PayID और FCS गारंटी के साथ सुरक्षित बैंकिंग गाइड।`,
    overview_ru: `${bank.name_ru || bank.name} является ведущим финансовым учреждением Австралии (ADI). Изучите структуру BSB кодов, систему мгновенных платежей NPP Osko/PayID и государственную гарантию вкладов FCS.`,
    quick_stats: [
      { label: 'Bank Identifier (APCA)', label_bn: 'ব্যাংক সনাক্তকরণ কোড (APCA)', label_hi: 'बैंक पहचान कोड', label_ru: 'Код банка APCA', value: bankCode },
      { label: 'Sample BSB Code', label_bn: 'নমুনা বিএসবি (BSB) কোড', label_hi: 'बीएसबी कोड', label_ru: 'BSB код отделения', value: bsbFormatted },
      { label: 'SWIFT / BIC Code', label_bn: 'সুইফট / বিআইসি কোড', label_hi: 'स्विफ्ट कोड', label_ru: 'SWIFT / BIC', value: swiftCode },
      { label: 'NPP / PayID Support', label_bn: 'পে-আইডি ও ওস্কো সাপোর্ট', label_hi: 'PayID / Osko सपोर्ट', label_ru: 'Поддержка PayID', value: knowledge.payidSupport },
      { label: 'FCS Deposit Protection', label_bn: 'সরকারি আমানত বীমা', label_hi: 'FCS जमा गारंटी', label_ru: 'Защита вкладов FCS', value: '$250,000 AUD (APRA)' },
      { label: 'Regulatory Status', label_bn: 'নিয়ন্ত্রক মর্যাদা', label_hi: 'नियामक स्थिति', label_ru: 'Статус регулятора', value: knowledge.apraCategory }
    ],
    sections: [
      {
        id: 'overview-history',
        heading: '1. Institutional Overview & Background',
        heading_bn: '১. প্রতিষ্ঠানের পরিচিতি ও ব্যাংকিং ইতিহাস',
        heading_hi: '1. संस्था का परिचय एवं इतिहास',
        heading_ru: '1. Обзор и история банка',
        content: `${knowledge.foundingStory}\n\n**Regulatory Status & Licensing:** ${knowledge.category} authorised and supervised by the Australian Prudential Regulation Authority (APRA) and operating within Reserve Bank of Australia (RBA) settlement frameworks. Headquartered at ${bank.head_office}.`,
        content_bn: `${knowledge.foundingStory_bn}\n\n**নিয়ন্ত্রক অনুমোদন ও তদারকি:** ${knowledge.category_bn}। ব্যাংকটি অস্ট্রেলিয়ান প্রুডেন্সিয়াল রেগুলেশন অথরিটি (APRA) এবং রিজার্ভ ব্যাংক অব অস্ট্রেলিয়া (RBA)-এর প্রত্যক্ষ নিয়ন্ত্রক নির্দেশিকা অনুযায়ী পরিচালিত। প্রধান কার্যালয়: ${bank.head_office_bn || bank.head_office}।`,
        content_hi: `${knowledge.foundingStory}\n\nनियामक स्थिति: APRA एवं रिज़र्व बैंक ऑफ ऑस्ट्रेलिया (RBA) द्वारा अधिकृत ADI संस्थान।`,
        content_ru: `${knowledge.foundingStory}\n\nРегулируется Австралийским управлением пруденциального регулирования (APRA) и Резервным банком Австралии (RBA).`
      },
      {
        id: 'clearing-codes-bsb-format',
        heading: '2. Australian BSB Code Structure & Account Number Format',
        heading_bn: '২. অস্ট্রেলিয়ান বিএসবি (BSB) কোডের গঠন ও একাউন্ট ফরম্যাট',
        heading_hi: '2. ऑस्ट्रेलियाई बीएसबी (BSB) कोड संरचना एवं खाता संख्या प्रारूप',
        heading_ru: '2. Структура австралийского BSB кода и формат счета',
        content: `In Australia, domestic interbank transfers do not use international IBAN numbers. Instead, funds are routed via a standardized Bank-State-Branch (BSB) and Account Number combination:\n\n1. **6-Digit BSB Code (XXX-XXX):** Identifies ${bank.name} and the specific branch location. Format is **${bsbFormatted}**.\n   - **Digits 1-2 (Bank Identifier):** Specifies ${bank.name} (Bank Code: **${bankCode}**).\n   - **Digit 3 (State / Territory Code):** Indicates the state (2=NSW, 3=VIC, 4=QLD, 5=SA, 6=WA, 7=TAS, 8=NT, 1=ACT).\n   - **Digits 4-6 (Branch Office Code):** Pinpoints the precise suburban or CBD branch.\n2. **6 to 9-Digit Account Number:** Your individual personal or corporate account ledger number.\n3. **Account Name:** Full registered legal account holder name for matching.`,
        content_bn: `অস্ট্রেলিয়ায় অভ্যন্তরীণ ব্যাংক লেনদেনে আন্তর্জাতিক আইবান (IBAN) ব্যবস্থার বদলে ৬-ডিজিটের BSB (Bank-State-Branch) কোড ও একাউন্ট নম্বর ব্যবহৃত হয়:\n\n১. **৬ সংখ্যার বিএসবি কোড (XXX-XXX):** এটি ${bank.name_bn || bank.name} এবং এর সুনির্দিষ্ট শাখা সনাক্ত করে (যেমন: **${bsbFormatted}**)।\n   - **১ম ও ২য় সংখ্যা (ব্যাংক কোড):** নির্দেশ করে ${bank.name_bn || bank.name} (কোড: **${bankCode}**)।\n   - **৩য় সংখ্যা (স্টেট/প্রদেশ কোড):** নির্দেশ করে অস্ট্রেলিয়ার রাজ্য (২=এনএসডাব্লিউ/সিডনি, ৩=ভিক্টোরিয়া/মেলবোর্ন, ৪=কুইন্সল্যান্ড, ৫=সাউথ অস্ট্রেলিয়া, ৬=ওয়েস্টার্ন অস্ট্রেলিয়া ইত্যাদি)।\n   - **৪র্থ থেকে ৬ষ্ঠ সংখ্যা (শাখা কোড):** সুনির্দিষ্ট লোকাল ব্রাঞ্চ অফিস চিহ্নিত করে।\n২. **৬ থেকে ৯ সংখ্যার একাউন্ট নম্বর:** গ্রাহকের নিজস্ব ব্যাংক একাউন্ট নম্বর।\n৩. **অ্যাকাউন্টধারীর নাম:** নিবন্ধিত মূল অ্যাকাউন্টের পুরো নাম।`,
        content_hi: `ऑस्ट्रेलिया में घरेलू फंड ट्रांसफर के लिए 6-अंकीय BSB कोड (${bsbFormatted}) एवं खाता संख्या का उपयोग किया जाता है। प्रथम 2 अंक बैंक कोड (${bankCode}) दर्शाते हैं।`,
        content_ru: `В Австралии для внутренних переводов используется 6-значный код BSB (${bsbFormatted}) и номер счета (6-9 цифр). Первые две цифры указывают на банк (${bankCode}).`
      },
      {
        id: 'npp-osko-payid-guide',
        heading: '3. NPP, Osko & PayID Instant Payments Guide',
        heading_bn: '৩. এনপিপি, ওস্কো এবং পে-আইডি (PayID) ইনস্ট্যান্ট পেমেন্ট গাইড',
        heading_hi: '3. NPP, ओस्को (Osko) एवं PayID त्वरित भुगतान गाइड',
        heading_ru: '3. Руководство по мгновенным платежам NPP, Osko и PayID',
        content: `Australia’s New Payments Platform (NPP) allows near-instantaneous funds clearance 24 hours a day, 365 days a year:\n\n- **Osko by BPAY:** Instant transfer service built onto NPP. When transferring funds to or from ${bank.name}, funds typically arrive within **10 to 60 seconds** even on weekends and public holidays.\n- **PayID Alias:** Instead of sharing your 6-digit BSB and 9-digit account number, you can link a mobile phone number, email address, or Australian Business Number (ABN) to your account for instantaneous lookup.\n- **Daily Limits:** Typically between $1,000 AUD and $20,000 AUD depending on mobile app security settings and two-factor authentication.`,
        content_bn: `অস্ট্রেলিয়ার নিউ পেমেন্টস প্ল্যাটফর্ম (NPP) এবং ওস্কো (Osko by BPAY) সারা বছর ২৪/৭ রিয়েল-টাইমে টাকা পাঠানোর সুবিধা দেয়:\n\n- **ওস্কো ইনস্ট্যান্ট ট্রান্সফার:** ${bank.name_bn || bank.name}-এ যেকোনো ট্রান্সফার ১০ থেকে ৬০ সেকেন্ডের মধ্যে সম্পন্ন হয়, এমনকি সরকারি ছুটির দিনেও।\n- **পে-আইডি (PayID):** বিএসবি ও একাউন্ট নম্বর দেওয়ার পরিবর্তে আপনার মোবাইল নম্বর, ইমেইল বা ABN যুক্ত করে সহজেই তাৎক্ষণিক পেমেন্ট গ্রহণ করা যায়।\n- **দৈনিক সীমা:** সাধারণত $১,০০০ থেকে $২০,০০০ এইউডি পর্যন্ত সিকিউরিটি লেভেলের ওপর নির্ভর করে।`,
        content_hi: `NPP और ओस्को के माध्यम से 24/7 तुरंत पैसा ट्रांसफर होता है। PayID द्वारा मोबाइल नंबर या ईमेल के जरिए 60 सेकंड में फंड भेजा जा सकता है।`,
        content_ru: `Система NPP и сервис Osko обеспечивают мгновенное межбанковское зачисление средств за 10-60 секунд 24/7 по реквизитам или PayID.`
      },
      {
        id: 'fcs-government-deposit-protection',
        heading: '4. Australian Financial Claims Scheme (FCS) Deposit Guarantee',
        heading_bn: '৪. অস্ট্রেলিয়ান সরকারের ফিনান্সিয়াল ক্লেইমস স্কিম (FCS) আমানত সুরক্ষা',
        heading_hi: '4. ऑस्ट्रेलियाई सरकार की FCS जमा गारंटी ($250,000 AUD)',
        heading_ru: '4. Государственная схема защиты вкладов FCS ($250,000 AUD)',
        content: `Deposits held at ${bank.name} are safeguarded under the Australian Government’s **Financial Claims Scheme (FCS)**:\n\n- **Protection Limit:** Up to **$250,000 AUD per account holder** per Authorised Deposit-taking Institution (ADI).\n- **Covered Accounts:** Savings accounts, cheque accounts, debit card accounts, term deposits, and mortgage offset accounts.\n- **Administered by:** APRA (Australian Prudential Regulation Authority).\n- **Protection Guarantee:** ${knowledge.fcsProtection}.`,
        content_bn: `${bank.name_bn || bank.name}-এ রক্ষিত আপনার আমানত অস্ট্রেলিয়া সরকারের **ফিনান্সিয়াল ক্লেইমস স্কিম (FCS)**-এর অধীনে সম্পূর্ণ সুরক্ষিত:\n\n- **সুরক্ষার সর্বোচ্চ সীমা:** প্রতি গ্রাহকের জন্য প্রতিটি ব্যাংকে সর্বোচ্চ **২৫০,০০০ অস্ট্রেলিয়ান ডলার ($250,000 AUD)**।\n- **আওতাভুক্ত অ্যাকাউন্টসমূহ:** সেভিংস অ্যাকাউন্ট, চেকিং অ্যাকাউন্ট, ফিক্সড টার্ম ডিপোজিট এবং হোম লোন অফসেট অ্যাকাউন্ট।\n- **নিয়ন্ত্রক সংস্থা:** অস্ট্রেলিয়ান প্রুডেন্সিয়াল রেগুলেশন অথরিটি (APRA)।\n- **সরকারি নিশ্চয়তা:** ${knowledge.fcsProtection}।`,
        content_hi: `ऑस्ट्रेलियाई सरकार की FCS योजना के तहत प्रत्येक खाताधारक के लिए $250,000 AUD तक की जमा राशि पूरी तरह से सुरक्षित एवं बीमित है।`,
        content_ru: `Вклады в ${bank.name_ru || bank.name} застрахованы государственной программой FCS на сумму до 250 000 австралийских долларов на одного вкладчика.`
      },
      {
        id: 'international-wires-swift',
        heading: '5. International Wire Transfers & SWIFT/BIC Instructions',
        heading_bn: '৫. আন্তর্জাতিক ওয়্যার ট্রান্সফার ও সুইফট/বিআইসি গাইড',
        heading_hi: '5. अंतरराष्ट्रीय वायर ट्रांसफर एवं स्विफ्ट कोड',
        heading_ru: '5. Международные валютные переводы SWIFT',
        content: `When receiving international wire transfers or remittances into ${bank.name} from abroad, provide the overseas sender with the following information:\n\n- **Beneficiary Bank:** ${bank.name}\n- **SWIFT/BIC Code:** **${swiftCode}**\n- **BSB Code:** Your 6-digit home branch BSB (e.g., ${bsbFormatted})\n- **Account Number:** Your Australian bank account number (up to 9 digits)\n- **Bank Address:** ${bank.head_office}, Australia\n- **Currency:** Australian Dollars (AUD) or designated foreign currency account.`,
        content_bn: `বিদেশ থেকে রেমিট্যান্স বা আন্তর্জাতিক ওয়্যার ট্রান্সফার ${bank.name_bn || bank.name}-এ গ্রহণের জন্য প্রেরককে নিম্নলিখিত তথ্যগুলো দিন:\n\n- **গ্রাহকের ব্যাংকের নাম:** ${bank.name_bn || bank.name}\n- **সুইফট/বিআইসি কোড:** **${swiftCode}**\n- **বিএসবি (BSB) কোড:** আপনার শাখার ৬ সংখ্যার বিএসবি নম্বর (যেমন: ${bsbFormatted})\n- **গ্রাহকের অ্যাকাউন্ট নম্বর:** আপনার ৬ থেকে ৯ সংখ্যার ব্যাংক একাউন্ট নম্বর\n- **ব্যাংকের প্রধান কার্যালয়ের ঠিকানা:** ${bank.head_office_bn || bank.head_office}, Australia`,
        content_hi: `विदेश से फंड ट्रांसफर प्राप्त करने के लिए SWIFT कोड (${swiftCode}), 6-अंकीय BSB कोड (${bsbFormatted}) और खाता संख्या आवश्यक है।`,
        content_ru: `Для получения международного перевода на счет в ${bank.name} укажите SWIFT код ${swiftCode}, 6-значный BSB код и номер счета получателя.`
      }
    ],
    faqs: [
      {
        question: `What is the BSB code for ${bank.name}?`,
        question_bn: `${bank.name_bn || bank.name}-এর বিএসবি (BSB) কোড কত?`,
        question_hi: `${bank.name_hi || bank.name} का BSB कोड क्या है?`,
        question_ru: `Какой BSB код у ${bank.name_ru || bank.name}?`,
        answer: `The primary BSB code for ${bank.name} is **${bsbFormatted}** (Bank Code: ${bankCode}). Individual local branches have unique 6-digit BSB numbers based on state and branch office.`,
        answer_bn: `${bank.name_bn || bank.name}-এর প্রধান বিএসবি কোড হলো **${bsbFormatted}** (ব্যাংক কোড: ${bankCode})। অঞ্চল ও শাখাভেদে প্রতিটি শাখার স্বতন্ত্র ৬-ডিজিট বিএসবি কোড রয়েছে।`,
        answer_hi: `${bank.name_hi || bank.name} का मुख्य BSB कोड **${bsbFormatted}** है।`,
        answer_ru: `Основной BSB код для ${bank.name_ru || bank.name} — **${bsbFormatted}** (Код банка: ${bankCode}).`
      },
      {
        question: `Does ${bank.name} support instant Osko & PayID transfers?`,
        question_bn: `${bank.name_bn || bank.name} কি ওস্কো ও পে-আইডি সমর্থন করে?`,
        question_hi: `क्या ${bank.name_hi || bank.name} Osko एवं PayID सपोर्ट करता है?`,
        question_ru: `Поддерживает ли ${bank.name_ru || bank.name} переводы Osko и PayID?`,
        answer: `Yes, ${bank.name} is fully integrated with the New Payments Platform (NPP), supporting real-time Osko transfers and PayID registration for instant 24/7 payments.`,
        answer_bn: `হ্যাঁ, ${bank.name_bn || bank.name} অস্ট্রেলিয়ার নিউ পেমেন্টস প্ল্যাটফর্ম (NPP)-এ সংযুক্ত, যার মাধ্যমে ওস্কো ও পে-আইডি দিয়ে ২৪ ঘণ্টা তাৎক্ষণিক পেমেন্ট আদান-প্রদান করা যায়।`,
        answer_hi: `हाँ, ${bank.name_hi || bank.name} NPP प्लेटफॉर्म पर 24/7 Osko एवं PayID ट्रांसफर की सुविधा प्रदान करता है।`,
        answer_ru: `Да, банк полностью подключен к платформе NPP и поддерживает мгновенные переводы Osko и идентификаторы PayID.`
      },
      {
        question: `Are my deposits at ${bank.name} protected by the Australian Government?`,
        question_bn: `${bank.name_bn || bank.name}-এর আমানত কি অস্ট্রেলিয়া সরকার কর্তৃক সুরক্ষিত?`,
        question_hi: `क्या ${bank.name_hi || bank.name} में जमा राशि सरकार द्वारा बीमित है?`,
        question_ru: `Застрахованы ли вклады в ${bank.name_ru || bank.name} правительством Австралии?`,
        answer: `Yes, deposits at ${bank.name} are guaranteed up to $250,000 AUD per account holder under the Australian Government’s Financial Claims Scheme (FCS).`,
        answer_bn: `হ্যাঁ, ${bank.name_bn || bank.name}-এ রক্ষিত অর্থ অস্ট্রেলিয়ান সরকারের ফিনান্সিয়াল ক্লেইমস স্কিম (FCS)-এর আওতায় সর্বোচ্চ ২৫০,০০০ এইউডি ($250,000 AUD) পর্যন্ত সরকারি গ্যারান্টিতে সুরক্ষিত।`,
        answer_hi: `हाँ, ऑस्ट्रेलियाई सरकार की FCS योजना के तहत $250,000 AUD तक की जमा राशि सुरक्षित है।`,
        answer_ru: `Да, вклады застрахованы государственной схемой FCS на сумму до 250 000 AUD.`
      },
      {
        question: `What is the SWIFT/BIC code for international transfers to ${bank.name}?`,
        question_bn: `${bank.name_bn || bank.name}-এ বিদেশি রেমিট্যান্সের জন্য সুইফট কোড কোনটি?`,
        question_hi: `${bank.name_hi || bank.name} का अंतरराष्ट्रीय स्विफ्ट कोड क्या है?`,
        question_ru: `Какой международный SWIFT код у ${bank.name_ru || bank.name}?`,
        answer: `The official international SWIFT/BIC code for ${bank.name} is **${swiftCode}**.`,
        answer_bn: `${bank.name_bn || bank.name}-এর প্রধান কার্যালয়ের অফিশিয়াল আন্তর্জাতিক সুইফট/বিআইসি (SWIFT/BIC) কোড হলো **${swiftCode}**।`,
        answer_hi: `${bank.name_hi || bank.name} का आधिकारिक अंतरराष्ट्रीय स्विफ्ट कोड **${swiftCode}** है।`,
        answer_ru: `Официальный международный SWIFT/BIC код банка — **${swiftCode}**.`
      }
    ]
  };
});
