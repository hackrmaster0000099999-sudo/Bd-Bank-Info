import { BankArticle } from '../../types';
import banksData from './banks.json';

/**
 * Authoritative Editorial Knowledge Base & Comprehensive Guide for UAE Banks (مصارف دولة الإمارات العربية المتحدة)
 * Covers 3-Digit CBUAE Bank Clearing Codes, 9-Digit UAEFTS Routing Numbers, UAE 23-Character IBAN standard (AEkk...),
 * Aani Instant Payments, Wages Protection System (WPS), SWIFT/BIC codes, and Central Bank of the UAE (CBUAE) regulatory standards.
 */

interface UaeBankKnowledge {
  established: string;
  foundingStory: string;
  foundingStory_bn: string;
  category: string;
  category_bn: string;
  coreStrengths: string[];
  coreStrengths_bn: string[];
  cbuaeCode: string;
  routingFormat: string;
  swiftHo: string;
  ibanExample: string;
  popularApp: string;
  customerCare: string;
  aaniInstantLimit: string;
  depositProtection: string;
  wpsSupport: string;
}

const UAE_BANK_KNOWLEDGE: Record<string, UaeBankKnowledge> = {
  'emirates-nbd': {
    established: '1963 (National Bank of Dubai merged with Emirates Bank International in 2007)',
    foundingStory: 'Emirates NBD PJSC is the largest banking group in the United Arab Emirates and a leading financial powerhouse across the MENAT (Middle East, North Africa and Türkiye) region. Formed in 2007 by the historic merger of National Bank of Dubai (NBD) and Emirates Bank International (EBI), the bank is headquartered in Deira, Dubai, managing total assets exceeding AED 860 billion.',
    foundingStory_bn: 'এমিরেটস এনবিডি (Emirates NBD PJSC) সংযুক্ত আরব আমিরাতের সর্ববৃহৎ ব্যাংকিং গ্রুপ এবং মধ্যপ্রাচ্য, উত্তর আফ্রিকা ও তুরস্ক (MENAT) অঞ্চলের শীর্ষস্থানীয় আর্থিক পরাশক্তি। ২০০৭ সালে ন্যাশনাল ব্যাংক অব দুবাই (NBD) ও এমিরেটস ব্যাংক ইন্টারন্যাশনালের ঐতিহাসিক একীভূতকরণের মাধ্যমে গঠিত এ ব্যাংকটি ৮৬০ বিলিয়ন দিরহামেরও বেশি সম্পদ পরিচালনা করে।',
    category: 'UAE National Flagship Universal Bank (CBUAE Code #023)',
    category_bn: 'ইউএই জাতীয় ফ্ল্যাগশিপ ইউনিভার্সাল ব্যাংক (সিবিইউএই কোড #০২৩)',
    coreStrengths: [
      'UAE’s largest banking network with over 300 branches and 1,600+ ATMs across all 7 Emirates',
      'Instant domestic settlements via UAEFTS, CBUAE Aani instant payment network, and DirectRemit in 60 seconds',
      'Full Wages Protection System (WPS) corporate payroll integration for corporate entities and SMEs',
      'Advanced digital ecosystem through ENBD X mobile banking and Liv. digital youth platform'
    ],
    coreStrengths_bn: [
      'সংযুক্ত আরব আমিরাতের ৭টি আমিরাতজুড়ে ৩০০টিরও বেশি শাখা এবং ১,৬০০+ এটিএমের বৃহত্তম নেটওয়ার্ক',
      'UAEFTS, সিবিইউএই আনি (Aani) ইনস্ট্যান্ট পেমেন্ট এবং ৬০ সেকেন্ডে ডিরেক্টরেমিট (DirectRemit) সুবিধা',
      'প্রতিষ্ঠান এবং এসএমই খাতের জন্য ওয়েজেস প্রোটেকশন সিস্টেম (WPS) পে-রোল অটোমেশন',
      'ইএনবিডি এক্স (ENBD X) মোবাইল ব্যাংকিং ও লিভ (Liv.) ডিজিটাল ব্যাংকিং প্ল্যাটফর্ম'
    ],
    cbuaeCode: '023',
    routingFormat: '023010001 (Head Office Dubai)',
    swiftHo: 'EBBDAEAD',
    ibanExample: 'AE07 0230 0001 2345 6789 012',
    popularApp: 'ENBD X & Liv. Digital App',
    customerCare: '+971 600 54 0000 (24/7 Hotline)',
    aaniInstantLimit: 'Up to AED 50,000 per instant transaction (24/7/365)',
    depositProtection: 'Central Bank of the UAE (CBUAE) Solvency Guarantee & Statutory Reserves',
    wpsSupport: 'Full Wages Protection System (WPS) SIF Electronic Payroll Processing'
  },
  'first-abu-dhabi-bank': {
    established: '2017 (Merger of National Bank of Abu Dhabi - NBAD est. 1968 and First Gulf Bank - FGB est. 1979)',
    foundingStory: 'First Abu Dhabi Bank (FAB) is the largest bank in the UAE by market capitalization and total assets, managing over AED 1.2 trillion in balance sheet assets. Created through the merger of National Bank of Abu Dhabi (NBAD) and First Gulf Bank (FGB), FAB serves as the primary sovereign and governmental banking partner for the Emirate of Abu Dhabi.',
    foundingStory_bn: 'ফার্স্ট আবুধাবি ব্যাংক (First Abu Dhabi Bank - FAB) বাজার মূলধন এবং মোট সম্পদের দিক থেকে সংযুক্ত আরব আমিরাতের সর্ববৃহৎ ব্যাংক, যার ব্যালেন্স শিটের আকার ১.২ ট্রিলিয়ন দিরহামেরও বেশি। ন্যাশনাল ব্যাংক অব আবুধাবি (NBAD) এবং ফার্স্ট গালফ ব্যাংকের (FGB) একীভূতকরণের মাধ্যমে প্রতিষ্ঠিত এ ব্যাংকটি আবুধাবি সরকারের প্রধান আর্থিক অংশীদার।',
    category: 'Abu Dhabi Sovereign & Universal Banking Giant (CBUAE Code #035)',
    category_bn: 'আবুধাবি সোভেরেন ও ইউনিভার্সাল ব্যাংকিং জায়ান্ট (সিবিইউএই কোড #০৩৫)',
    coreStrengths: [
      'Largest asset base in the Middle East with premier government, sovereign and corporate finance access',
      'Direct clearing via UAEFTS, CBUAE Aani real-time network, and global SWIFT gpi hub',
      'Payit digital mobile wallet integration and WPS payroll disbursement for millions of expatriate workers',
      'Highest credit rating profile in the MENA region (Aa3 / AA- / AA-)'
    ],
    coreStrengths_bn: [
      'মধ্যপ্রাচ্যের সর্ববৃহৎ সম্পদ ও আবুধাবি সরকারের সার্বভৌম আর্থিক কার্যক্রমের প্রধান কেন্দ্রবিন্দু',
      'UAEFTS, সিবিইউএই আনি (Aani) রিয়েল-টাইম নেটওয়ার্ক এবং গ্লোবাল সুইফট জিপিআই (SWIFT gpi) ক্লিয়ারিং',
      'পে-ইট (Payit) ডিজিটাল ওয়ালেট এবং লাখ লাখ প্রবাসীদের জন্য ডব্লিউপিএস (WPS) স্যালারি সিস্টেম',
      'মধ্যপ্রাচ্য ও উত্তর আফ্রিকা অঞ্চলে সর্বোচ্চ আন্তর্জাতিক ক্রেডিট রেটিং (Aa3 / AA- / AA-)'
    ],
    cbuaeCode: '035',
    routingFormat: '035020001 (Head Office Abu Dhabi)',
    swiftHo: 'NBADAEAD',
    ibanExample: 'AE19 0350 0001 2345 6789 012',
    popularApp: 'FAB Mobile & Payit Digital Wallet',
    customerCare: '+971 600 52 5500 (24/7 Support)',
    aaniInstantLimit: 'Up to AED 50,000 per instant transaction',
    depositProtection: 'Central Bank of the UAE (CBUAE) Reserve Backing & Abu Dhabi Government Backing',
    wpsSupport: 'Comprehensive WPS Payroll & Corporate Salary Card Solutions'
  },
  'abu-dhabi-commercial-bank': {
    established: '1985 (Merger of Emirates Commercial Bank, Federal Commercial Bank, and Khaleej Commercial Bank; combined with Union National Bank & Al Hilal Bank in 2019)',
    foundingStory: 'Abu Dhabi Commercial Bank PJSC (ADCB) is one of the UAE’s three largest banking powerhouses, majority-owned by the Government of Abu Dhabi through Mubadala Investment Company. Following its landmark multi-way consolidation with Union National Bank (UNB) and Al Hilal Bank in 2019, ADCB provides high-grade retail, corporate, and Islamic banking.',
    foundingStory_bn: 'আবুধাবি কমার্শিয়াল ব্যাংক (ADCB) সংযুক্ত আরব আমিরাতের শীর্ষ তিন ব্যাংকিং পরাশক্তির অন্যতম, যার সিংহভাগ মালিকানা মুবাদালা ইনভেস্টমেন্ট কোম্পানির মাধ্যমে আবুধাবি সরকারের হাতে। ২০১৯ সালে ইউনিয়ন ন্যাশনাল ব্যাংক (UNB) এবং আল হিলাল ব্যাংকের সাথে ঐতিহাসিক একত্রীকরণের পর এডিসিবি রিটেইল ও ইসলামিক ব্যাংকিংয়ে অনন্য ভূমিকা পালন করছে।',
    category: 'Abu Dhabi Government Majority-Owned Tier-1 Bank (CBUAE Code #040)',
    category_bn: 'আবুধাবি সরকারি নিয়ন্ত্রিত টায়ার-১ কমার্শিয়াল ব্যাংক (সিবিইউএই কোড #০৪০)',
    coreStrengths: [
      'Over 200 branches across Abu Dhabi, Dubai, Sharjah and all Northern Emirates',
      'Hayyak instant digital onboarding via UAE Pass and biometric national identity integration',
      'Al Hilal Islamic banking window providing strict Sharia-compliant Islamic financing',
      'Multi-currency corporate treasury clearing and real-time Aani CBUAE payments'
    ],
    coreStrengths_bn: [
      'আবুধাবি, দুবাই, শারজাহসহ সকল নর্দার্ন আমিরাতজুড়ে ২০০টিরও বেশি শাখার বিস্তৃত নেটওয়ার্ক',
      'ইউএই পাস (UAE Pass) ও বায়োমেট্রিকের মাধ্যমে হায়াক (Hayyak) তাৎক্ষণিক ডিজিটাল একাউন্ট ওপেনিং',
      'আল হিলাল ইসলামিক ব্যাংকিং উইংয়ের মাধ্যমে ১০০% শরীয়াহসম্মত ব্যাংকিং সেবা',
      'মাল্টি-কারেন্সি ট্রেজারি ক্লিয়ারিং এবং সিবিইউএই আনি (Aani) তাৎক্ষণিক অর্থ স্থানান্তর'
    ],
    cbuaeCode: '040',
    routingFormat: '040020001 (Head Office Abu Dhabi)',
    swiftHo: 'ADCBAEAA',
    ibanExample: 'AE25 0400 0001 2345 6789 012',
    popularApp: 'ADCB Mobile Banking & Hayyak',
    customerCare: '+971 600 50 2030',
    aaniInstantLimit: 'Up to AED 50,000 per transfer (instant 24/7)',
    depositProtection: 'Central Bank of the UAE (CBUAE) Framework & Mubadala Sovereign Sponsorship',
    wpsSupport: 'Full Wages Protection System (WPS) Electronic SIF Processing'
  },
  'dubai-islamic-bank': {
    established: '1975 (Founded by Haj Saeed Bin Ahmed Al Lootah as the world’s first full-fledged Islamic bank)',
    foundingStory: 'Dubai Islamic Bank PJSC (DIB) holds global distinction as the first modern commercial bank to incorporate the principles of Islam in all its practices. Listed on the Dubai Financial Market, DIB is the largest Islamic bank in the UAE and the second-largest Islamic bank in the world, with total assets exceeding AED 314 billion following the acquisition of Noor Bank.',
    foundingStory_bn: 'দুবাই ইসলামিক ব্যাংক (Dubai Islamic Bank - DIB) বিশ্বের ইতিহাসে প্রথম পূর্ণাঙ্গ বাণিজ্যিক ইসলামিক ব্যাংক হিসেবে ১৯৭৫ সালে প্রতিষ্ঠিত হয়। দুবাই ফাইন্যান্সিয়াল মার্কেটে তালিকাভুক্ত এই ঐতিহাসিক ব্যাংকটি সংযুক্ত আরব আমিরাতের সর্ববৃহৎ এবং বিশ্বের দ্বিতীয় বৃহত্তম ইসলামিক ব্যাংক, যার সম্পদের পরিমাণ ৩১৪ বিলিয়ন দিরহামেরও বেশি।',
    category: 'World Pioneer & Largest UAE Islamic Bank (CBUAE Code #024)',
    category_bn: 'বিশ্বের প্রথম ও ইউএইর সর্ববৃহৎ ইসলামিক ব্যাংক (সিবিইউএই কোড #০২৪)',
    coreStrengths: [
      'World’s historic pioneer in Islamic banking, Mudharabah savings, and Murabaha auto/home financing',
      'Complete integration with UAEFTS, CBUAE Aani network, and instant mobile remittance to South Asia & Egypt',
      'Dedicated Islamic corporate cash management, Sukuk issuance, and WPS salary card solutions',
      'Widespread branch network across Dubai, Abu Dhabi, Sharjah, Ajman, RAK, Fujairah, and UAQ'
    ],
    coreStrengths_bn: [
      'ইসলামিক ব্যাংকিংয়ের পথিকৃৎ হিসেবে মুদারাবা সঞ্চয় এবং মুরাবাহা গৃহ ও গাড়ি ফাইন্যান্সিংয়ে শীর্ষস্থান',
      'UAEFTS, সিবিইউএই আনি (Aani) নেটওয়ার্ক এবং দক্ষিণ এশিয়া ও মিশরে তাত্ক্ষণিক রেমিট্যান্স সুবিধা',
      'শরীয়াহভিত্তিক করপোরেট ক্যাশ ম্যানেজমেন্ট, সুকুক বন্ড এবং ডব্লিউপিএস স্যালারি কার্ড',
      'দুবাই, আবুধাবি, শারজাহসহ সংযুক্ত আরব আমিরাতের প্রতিটি কোণে বিস্তৃত শাখা নেটওয়ার্ক'
    ],
    cbuaeCode: '024',
    routingFormat: '024010001 (Head Office Dubai)',
    swiftHo: 'DUBIAEAD',
    ibanExample: 'AE42 0240 0001 2345 6789 012',
    popularApp: 'DIB Mobile Banking App',
    customerCare: '+971 4 609 2222',
    aaniInstantLimit: 'Up to AED 50,000 per transaction',
    depositProtection: 'CBUAE Regulatory Framework & Statutory Islamic Asset Ring-fencing',
    wpsSupport: 'Sharia-Compliant Wages Protection System (WPS) Corporate Payroll'
  },
  'mashreq-bank': {
    established: '1967 (Founded as Bank of Oman in Deira, Dubai)',
    foundingStory: 'Mashreq Bank PSC is the oldest privately owned bank in the United Arab Emirates. Established in 1967 prior to the formation of the UAE federation, Mashreq is renowned for pioneering retail banking technologies in the Middle East, including the introduction of the first ATM, the first payment cards, and the UAE’s first fully digital neobank, Mashreq Neo.',
    foundingStory_bn: 'মাশরেক ব্যাংক (Mashreq Bank PSC) সংযুক্ত আরব আমিরাতের সবচেয়ে প্রাচীন বেসরকারি বাণিজ্যিক ব্যাংক। ১৯৬৭ সালে প্রতিষ্ঠিত এ ব্যাংকটি মধ্যপ্রাচ্যে আধুনিক ব্যাংকিং প্রযুক্তির প্রবর্তক হিসেবে পরিচিত—প্রথম এটিএম মেশিন, প্রথম পেমেন্ট কার্ড এবং ইউএইর প্রথম পূর্ণাঙ্গ ডিজিটাল নিওব্যাংক মাশরেক নিও (Mashreq Neo) চালু করে।',
    category: 'UAE Private Banking & Digital Innovation Pioneer (CBUAE Code #031)',
    category_bn: 'ইউএইর সবচেয়ে প্রাচীন বেসরকারি ব্যাংক ও ডিজিটাল পথিকৃৎ (সিবিইউএই কোড #০৩১)',
    coreStrengths: [
      'Pioneer of Mashreq Neo, Mashreq NeoBiz for SMEs, and Neo NXT for youth digital banking',
      'Instant overseas remittances to India, Pakistan, Bangladesh, Egypt, and the Philippines via QuickRemit',
      'Direct CBUAE Aani instant payment settlement and UAE Pass automated instant onboarding',
      'Extensive international network covering New York, London, Hong Kong, Singapore, and Cairo'
    ],
    coreStrengths_bn: [
      'মাশরেক নিও (Mashreq Neo) এবং ক্ষুদ্র উদ্যোক্তাদের জন্য নিওবিজ (NeoBiz)-এর মতো ডিজিটাল প্ল্যাটফর্ম',
      'কুইকরেমিট (QuickRemit)-এর মাধ্যমে ভারত, বাংলাদেশ, পাকিস্তান ও মিশরে নিমেষেই রেমিট্যান্স প্রেরণ',
      'সিবিইউএই আনি (Aani) পেমেন্ট এবং ইউএই পাস দ্বারা কাগজবিহীন তাৎক্ষণিক অ্যাকাউন্ট চালুকরণ',
      'লন্ডন, নিউইয়র্ক, হংকং, সিঙ্গাপুর ও কায়রোতে শক্তিশালী আন্তর্জাতিক করেসপন্ডেন্ট ব্যাংকিং ব্যবস্থা'
    ],
    cbuaeCode: '031',
    routingFormat: '031010001 (Head Office Dubai)',
    swiftHo: 'BOMLAEAD',
    ibanExample: 'AE33 0310 0001 2345 6789 012',
    popularApp: 'Mashreq UAE & Mashreq Neo App',
    customerCare: '+971 4 424 4444',
    aaniInstantLimit: 'Up to AED 50,000 per transfer',
    depositProtection: 'Central Bank of the UAE (CBUAE) Prudential Oversight & Reserve Backing',
    wpsSupport: 'Full Wages Protection System (WPS) Digital Payroll with NeoBiz'
  },
  'abu-dhabi-islamic-bank': {
    established: '1997 (Established as a public joint stock company in Abu Dhabi)',
    foundingStory: 'Abu Dhabi Islamic Bank PJSC (ADIB) is a leading Islamic financial institution headquartered in Abu Dhabi. With over 1 million customers and a premier retail footprint across the UAE, ADIB provides Sharia-governed wealth management, personal financing, covered cards, and corporate syndications.',
    foundingStory_bn: 'আবুধাবি ইসলামিক ব্যাংক (Abu Dhabi Islamic Bank - ADIB) ১৯৯৭ সালে প্রতিষ্ঠিত সংযুক্ত আরব আমিরাতের অন্যতম শীর্ষস্থানীয় ইসলামিক ব্যাংক। ১০ লাখেরও বেশি গ্রাহকবিশিষ্ট এ ব্যাংকটি আবুধাবি ও দুবাইসহ সমগ্র আমিরাতে শরীয়াহভিত্তিক ব্যক্তিগত ঋণ, কাভার্ড কার্ড, সম্পদ ব্যবস্থাপনা ও করপোরেট বিনিয়োগ সেবা দিয়ে থাকে।',
    category: 'UAE Tier-1 Islamic Banking Institution (CBUAE Code #048)',
    category_bn: 'ইউএই টায়ার-১ ইসলামিক ব্যাংকিং প্রতিষ্ঠান (সিবিইউএই কোড #০৪৮)',
    coreStrengths: [
      'Over 150 branches across Abu Dhabi, Dubai, Al Ain, Sharjah, and Northern Emirates',
      'SmartBanking digital platform and Amwali digital Islamic banking for next-generation youth',
      'WPS payroll cards and instant foreign exchange remittance channels across the Arab world',
      'Strict Sharia Supervisory Board oversight ensuring 100% Halal compliance'
    ],
    coreStrengths_bn: [
      'আবুধাবি, দুবাই, আল আইন ও শারজাহজুড়ে ১৫০টিরও বেশি শাখার বিস্তৃত উপস্থিতি',
      'স্মার্ট ব্যাংকিং ও তরুণদের জন্য আমওয়ালি (Amwali) ডিজিটাল ইসলামিক অ্যাকাউন্ট',
      'ডব্লিউপিএস পে-রোল কার্ড এবং আরব ও এশিয়ান দেশগুলোতে তাৎক্ষণিক রেমিট্যান্স ট্রান্সফার',
      'বিশিষ্ট ইসলামিক স্কলারদের সমন্বয়ে গঠিত শরীয়াহ বোর্ডের কঠোর তত্ত্বাবধান'
    ],
    cbuaeCode: '048',
    routingFormat: '048020001 (Head Office Abu Dhabi)',
    swiftHo: 'ADIBUAE2',
    ibanExample: 'AE55 0480 0001 2345 6789 012',
    popularApp: 'ADIB Mobile Banking & Amwali',
    customerCare: '+971 600 54 3210',
    aaniInstantLimit: 'Up to AED 50,000 per instant transaction',
    depositProtection: 'Central Bank of the UAE (CBUAE) Framework & Statutory Islamic Asset Reserves',
    wpsSupport: 'Full WPS Payroll Processing & Islamic Salary Transfer Cards'
  },
  'commercial-bank-of-dubai': {
    established: '1969 (Founded by Emiri Decree of H.H. Sheikh Rashid Bin Saeed Al Maktoum)',
    foundingStory: 'Commercial Bank of Dubai PSC (CBD) was established in 1969 as a joint venture with Commerzbank, Chase Manhattan, and Commercial Bank of Kuwait before transforming into a fully national UAE public shareholding company in 1982. Headquartered in Deira, CBD is a digital banking powerhouse serving businesses and retail clients.',
    foundingStory_bn: 'কমার্শিয়াল ব্যাংক অব দুবাই (CBD) ১৯৬৯ সালে দুবাইয়ের তৎকালীন শাসক মহামান্য শেখ রশিদ বিন সাঈদ আল মাকতুমের নির্দেশে প্রতিষ্ঠিত হয়। ১৯৮২ সালে পূর্ণাঙ্গ জাতীয় ব্যাংকে রূপান্তরের পর দুবাইয়ের পোর্ট সাঈদে প্রধান কার্যালয় বিশিষ্ট এই ব্যাংকটি ব্যবসা ও ব্যক্তি খাতের জন্য অত্যাধুনিক ডিজিটাল সেবা প্রদান করছে।',
    category: 'Dubai National Commercial & Corporate Bank (CBUAE Code #039)',
    category_bn: 'দুবাই জাতীয় বাণিজ্যিক ও করপোরেট ব্যাংক (সিবিইউএই কোড #০৩৯)',
    coreStrengths: [
      'Leading digital banking app consistently ranked top-rated in UAE App Store and Google Play',
      'Instant digital bank account creation in under 3 minutes using UAE Pass',
      'Comprehensive commercial cash management, trade finance, and WPS payroll solutions',
      'Real-time UAEFTS and Aani payment integration'
    ],
    coreStrengths_bn: [
      'ইউএইর অন্যতম সেরা রেটিংপ্রাপ্ত মোবাইল ব্যাংকিং অ্যাপ ও ক্যাশলেস ফাইন্যান্সিং সুবিধা',
      'ইউএই পাস (UAE Pass) ব্যবহার করে মাত্র ৩ মিনিটে তাৎক্ষণিক ডিজিটাল অ্যাকাউন্ট চালু',
      'বাণিজ্যিক ট্রেড ফাইন্যান্স, করপোরেট ক্যাশ ম্যানেজমেন্ট ও ডব্লিউপিএস স্যালারি বিতরণ',
      'UAEFTS এবং সিবিইউএই আনি (Aani) তাৎক্ষণিক ক্লিয়ারিং নেটওয়ার্কে যুক্ত'
    ],
    cbuaeCode: '039',
    routingFormat: '039010001 (Head Office Dubai)',
    swiftHo: 'CBDUAE44',
    ibanExample: 'AE61 0390 0001 2345 6789 012',
    popularApp: 'CBD Mobile Banking App',
    customerCare: '+971 600 52 2263',
    aaniInstantLimit: 'Up to AED 50,000 per instant transfer',
    depositProtection: 'Central Bank of the UAE (CBUAE) Regulatory Compliance & Capital Standards',
    wpsSupport: 'WPS Electronic Salary System with Corporate iBusiness Portal'
  },
  'rakbank': {
    established: '1976 (National Bank of Ras Al Khaimah PJSC)',
    foundingStory: 'The National Bank of Ras Al Khaimah (P.J.S.C.), publicly known as RAKBANK, is one of the UAE’s most vibrant commercial banks. Majority-owned by the Government of Ras Al Khaimah, RAKBANK is a market leader in SME business banking, credit cards, auto finance, and personal loans across the Emirates.',
    foundingStory_bn: 'ন্যাশনাল ব্যাংক অব রাস আল খাইমাহ (রাকব্যাংক - RAKBANK) ১৯৭৬ সালে প্রতিষ্ঠিত সংযুক্ত আরব আমিরাতের অন্যতম জনপ্রিয় বাণিজ্যিক ব্যাংক। রাস আল খাইমাহ সরকারের সিংহভাগ মালিকানাধীন এ ব্যাংকটি ক্ষুদ্র ও মাঝারি উদ্যোক্তা (SME), ক্রেডিট কার্ড এবং পার্সোনাল লোন প্রদানে শীর্ষস্থান ধরে রেখেছে।',
    category: 'Ras Al Khaimah Government Majority-Owned Bank (CBUAE Code #045)',
    category_bn: 'রাস আল খাইমাহ সরকারি ব্যাংক ও এসএমই ফাইন্যান্সিং লিডার (সিবিইউএই কোড #০৪৫)',
    coreStrengths: [
      'Undisputed UAE market leader in SME and Small Business Banking solutions',
      'Award-winning RAKtrack digital remittances and Skydo international business payments',
      'WPS corporate payroll and CBUAE Aani real-time mobile funds transfer',
      'Branches and business centers across all 7 Emirates'
    ],
    coreStrengths_bn: [
      'সংযুক্ত আরব আমিরাতের এসএমই ও ক্ষুদ্র ব্যবসায়ীদের জন্য সবচেয়ে নির্ভরযোগ্য ব্যাংকিং সলিউশন',
      'তাত্ক্ষণিক রেমিট্যান্স ও আন্তর্জাতিক ব্যবসায়িক লেনদেনের জন্য আধুনিক ডিজিটাল চ্যানেল',
      'ডব্লিউপিএস (WPS) পে-রোল ম্যানেজমেন্ট এবং সিবিইউএই আনি (Aani) তাৎক্ষণিক স্থানান্তর',
      'সাতটি আমিরাতের প্রতিটি প্রান্তে অবস্থিত শাখা ও বিজনেস ব্যাংকিং হাব'
    ],
    cbuaeCode: '045',
    routingFormat: '045050001 (Head Office Ras Al Khaimah)',
    swiftHo: 'RAKBAEAA',
    ibanExample: 'AE72 0450 0001 2345 6789 012',
    popularApp: 'RAKBANK Digital Banking App',
    customerCare: '+971 4 213 0000',
    aaniInstantLimit: 'Up to AED 50,000 per instant transfer',
    depositProtection: 'Central Bank of the UAE (CBUAE) Solvency Standards & RAK Government Backing',
    wpsSupport: 'Complete WPS Payroll for Startups, SMEs and Large Corporates'
  },
  'emirates-islamic-bank': {
    established: '2004 (Established by Emirates NBD Group as its dedicated Islamic banking subsidiary)',
    foundingStory: 'Emirates Islamic PJSC is one of the premier Islamic financial institutions in the UAE, operating as the Sharia-compliant retail and corporate banking subsidiary of Emirates NBD Group. It provides modern ethical banking solutions aligned strictly with Islamic Sharia tenets.',
    foundingStory_bn: 'এমিরেটস ইসলামিক (Emirates Islamic PJSC) ২০০৪ সালে প্রতিষ্ঠিত সংযুক্ত আরব আমিরাতের অন্যতম প্রধান শরীয়াহভিত্তিক ব্যাংক। এমিরেটস এনবিডি গ্রুপের অঙ্গপ্রতিষ্ঠান হিসেবে এটি ব্যক্তি ও করপোরেট গ্রাহকদের সম্পূর্ণ সুদবিহীন আধুনিক ইসলামিক ব্যাংকিং সেবা প্রদান করে।',
    category: 'Emirates NBD Group Sharia-Compliant Bank (CBUAE Code #049)',
    category_bn: 'এমিরেটস এনবিডি গ্রুপের পূর্ণাঙ্গ শরীয়াহভিত্তিক ইসলামিক ব্যাংক (সিবিইউএই কোড #০৪৯)',
    coreStrengths: [
      'Backed by the financial strength and technology infrastructure of Emirates NBD Group',
      'Kunooz high-yield prize savings account and competitive Islamic home/auto Murabaha finance',
      'Seamless integration with CBUAE Aani instant payment network and QuickRemit to India/Pakistan/Egypt',
      'WPS Islamic salary cards and corporate Sharia cash management'
    ],
    coreStrengths_bn: [
      'এমিরেটস এনবিডি গ্রুপের প্রযুক্তিগত ও আর্থিক কাঠামোর শক্তিশালী সুরক্ষা',
      'কুনুজ (Kunooz) জনপ্রিয় পুরস্কারভিত্তিক সেভিংস একাউন্ট ও মুরাবাহা গৃহ ঋণ',
      'সিবিইউএই আনি (Aani) ইনস্ট্যান্ট নেটওয়ার্ক ও কুইকরেমিট আন্তর্জাতিক অর্থ স্থানান্তর',
      'ডব্লিউপিএস ইসলামিক স্যালারি কার্ড এবং করপোরেট শরীয়াহ ক্যাশ ম্যানেজমেন্ট'
    ],
    cbuaeCode: '049',
    routingFormat: '049010001 (Head Office Dubai)',
    swiftHo: 'EBILAEAD',
    ibanExample: 'AE83 0490 0001 2345 6789 012',
    popularApp: 'Emirates Islamic Mobile Banking',
    customerCare: '+971 600 59 9995',
    aaniInstantLimit: 'Up to AED 50,000 per instant transfer',
    depositProtection: 'Central Bank of the UAE (CBUAE) Framework & ENBD Group Support',
    wpsSupport: 'Sharia-Certified Wages Protection System (WPS) Payroll'
  },
  'sharjah-islamic-bank': {
    established: '1975 (National Bank of Sharjah, converted to fully Islamic banking in 2002)',
    foundingStory: 'Sharjah Islamic Bank PJSC (SIB), formerly the National Bank of Sharjah, holds the historic distinction of being the world’s first commercial bank to successfully convert entirely from conventional banking to Islamic Sharia-compliant operations in 2002. Headquartered in Sharjah, SIB serves retail, commercial, and government entities.',
    foundingStory_bn: 'শারজাহ ইসলামিক ব্যাংক (Sharjah Islamic Bank - SIB) ১৯৭৫ সালে প্রতিষ্ঠিত হয় এবং ২০০২ সালে বিশ্বের প্রথম বাণিজ্যিক ব্যাংক হিসেবে ঐতিহ্যগত ব্যাংকিং থেকে সফলভাবে ১০০% পূর্ণাঙ্গ ইসলামিক শরীয়াহ ব্যাংকিংয়ে রূপান্তরিত হয়। এটি শারজাহ সরকারের অন্যতম প্রধান সহযোগী প্রতিষ্ঠান।',
    category: 'Sharjah Government Affiliated Islamic Bank (CBUAE Code #042)',
    category_bn: 'শারজাহ সরকারি সহযোগী পূর্ণাঙ্গ ইসলামিক ব্যাংক (সিবিইউএই কোড #০৪২)',
    coreStrengths: [
      'Extensive presence across Sharjah, Dubai, Abu Dhabi, and the Northern Emirates',
      'World-renowned milestone for successful conversion to 100% Sharia banking',
      'Corporate treasury, Sukuk capital markets, and WPS payroll card solutions',
      'CBUAE Aani 24/7 instant fund transfer settlement'
    ],
    coreStrengths_bn: [
      'শারজাহ, দুবাই, আবুধাবিসহ সমগ্র সংযুক্ত আরব আমিরাতে ৮৫টিরও বেশি শাখার বিস্তৃত উপস্থিতি',
      'বিশ্বের প্রথম ব্যাংক হিসেবে সম্পূর্ণ সফল ইসলামিক রূপান্তরের আন্তর্জাতিক খ্যাতি',
      'করপোরেট সুকুক ফাইন্যান্সিং, ট্রেড ক্যাশ এবং ডব্লিউপিএস স্যালারি কার্ড সার্ভিস',
      'সিবিইউএই আনি (Aani) প্ল্যাটফর্মের মাধ্যমে ২৪/৭ তাৎক্ষণিক অর্থ আদান-প্রদান'
    ],
    cbuaeCode: '042',
    routingFormat: '042030001 (Head Office Sharjah)',
    swiftHo: 'NBSHAEAA',
    ibanExample: 'AE94 0420 0001 2345 6789 012',
    popularApp: 'Sharjah Islamic Bank Digital App',
    customerCare: '+971 6 599 9999',
    aaniInstantLimit: 'Up to AED 50,000 per instant transfer',
    depositProtection: 'Central Bank of the UAE (CBUAE) Reserve Backing & Sharjah Sovereign Sponsorship',
    wpsSupport: 'Full Islamic WPS Payroll & Direct Salary Cards'
  },
  'hsbc-bank-middle-east-uae': {
    established: '1946 (Originally established in Dubai as Imperial Bank of Persia/British Bank of the Middle East)',
    foundingStory: 'HSBC Bank Middle East Limited is the oldest established foreign international bank operating in the UAE, tracing its roots back to 1946 in Dubai. Serving as a crucial global bridge connecting the UAE to international capital markets, HSBC provides premier wealth management, multi-currency accounts, and global corporate finance.',
    foundingStory_bn: 'এইচএসবিসি ব্যাংক মিডল ইস্ট (HSBC UAE) সংযুক্ত আরব আমিরাতে পরিচালিত সবচেয়ে প্রাচীন বিদেশি আন্তর্জাতিক ব্যাংক, যার কার্যক্রম ১৯৪৬ সালে দুবাইয়ে শুরু হয়। ইউএইকে বৈশ্বিক আর্থিক বাজারের সাথে যুক্ত করতে এটি প্রিমিয়ার ওয়েলথ ম্যানেজমেন্ট, আন্তর্জাতিক মাল্টি-কারেন্সি অ্যাকাউন্ট ও গ্লোবাল ট্রেড ফাইন্যান্স সেবা প্রদান করে।',
    category: 'UAE Leading International Foreign Commercial Bank (CBUAE Code #032)',
    category_bn: 'ইউএইর শীর্ষস্থানীয় আন্তর্জাতিক বাণিজ্যিক ব্যাংক (সিবিইউএই কোড #০৩২)',
    coreStrengths: [
      'Premier and Jade global status with fee-free instant cross-border transfers between HSBC accounts worldwide',
      'Full corporate treasury, trade corridor clearing, and Wages Protection System (WPS) integration',
      'Direct participation in UAEFTS and CBUAE Aani real-time network',
      'Multi-currency foreign exchange and international mortgage financing'
    ],
    coreStrengths_bn: [
      'বিশ্বজুড়ে এইচএসবিসি অ্যাকাউন্টসমূহের মধ্যে কোনো ফি ছাড়া তাৎক্ষণিক গ্লোবাল মানি ট্রান্সফার সুবিধা',
      'আন্তর্জাতিক ট্রেড করিডোর ক্লিয়ারিং, ট্রেজারি এবং ডব্লিউপিএস পে-রোল সিস্টেম',
      'UAEFTS এবং সিবিইউএই আনি (Aani) রিয়েল-টাইম ফান্ড ট্রান্সফারে সরাসরি সংযুক্ত',
      'মাল্টি-কারেন্সি ফরেন এক্সচেঞ্জ এবং আন্তর্জাতিক রিয়েল এস্টেট ফাইন্যান্সিং'
    ],
    cbuaeCode: '032',
    routingFormat: '032010001 (Head Office Downtown Dubai)',
    swiftHo: 'BBMEAEAD',
    ibanExample: 'AE12 0320 0001 2345 6789 012',
    popularApp: 'HSBC UAE Mobile Banking',
    customerCare: '+971 600 55 4722',
    aaniInstantLimit: 'Up to AED 50,000 per instant transfer',
    depositProtection: 'CBUAE Prudential Standards & HSBC Group Global Capital Reserves',
    wpsSupport: 'HSBCnet Corporate Electronic Wages Protection System (WPS)'
  },
  'standard-chartered-bank-uae': {
    established: '1958 (First international bank branch opened in Sharjah)',
    foundingStory: 'Standard Chartered Bank UAE is one of the most distinguished international banks operating in the United Arab Emirates, with continuous operations dating back to 1958. Headquartered in Downtown Dubai, Standard Chartered specializes in wealth management, cross-border corporate syndications, and Sharia-compliant Islamic banking via Saadiq.',
    foundingStory_bn: 'স্ট্যান্ডার্ড চার্টার্ড ব্যাংক ইউএই (Standard Chartered Bank UAE) ১৯৫৮ সালে শারজাহতে প্রথম শাখা চালুর মধ্য দিয়ে ইউএইতে যাত্রা শুরু করা অন্যতম শীর্ষ বৈশ্বিক ব্যাংক। এটি ওয়েলথ ম্যানেজমেন্ট, বহুজাতিক করপোরেট বিনিয়োগ এবং সাদিক (Saadiq)-এর মাধ্যমে ইসলামিক ব্যাংকিং সেবা প্রদান করে।',
    category: 'UAE Foreign Commercial & Saadiq Islamic Bank (CBUAE Code #034)',
    category_bn: 'ইউএই আন্তর্জাতিক বাণিজ্যিক ও সাদিক ইসলামিক ব্যাংক (সিবিইউএই কোড #০৩৪)',
    coreStrengths: [
      'Pioneer in cross-border trade finance connecting Asia, Africa, and the Middle East corridors',
      'Standard Chartered Saadiq dedicated Islamic banking window',
      'Direct clearing via UAEFTS, CBUAE Aani, and global Straight2Bank corporate platform',
      'Comprehensive Wages Protection System (WPS) corporate payroll integration'
    ],
    coreStrengths_bn: [
      'এশিয়া, আফ্রিকা ও মধ্যপ্রাচ্যের বাণিজ্যিক করিডোরের মধ্যে ক্রস-বর্ডার ট্রেড ফাইন্যান্সের শীর্ষস্থান',
      'স্ট্যান্ডার্ড চার্টার্ড সাদিক (Saadiq) উইংয়ের মাধ্যমে বিশ্বমানের ইসলামিক ব্যাংকিং',
      'Straight2Bank প্ল্যাটফর্ম, UAEFTS এবং সিবিইউএই আনি (Aani) নেটওয়ার্ক ক্লিয়ারিং',
      'বহুজাতিক ও স্থানীয় কোম্পানির জন্য ডব্লিউপিএস স্যালারি প্রসেসিং'
    ],
    cbuaeCode: '034',
    routingFormat: '034010001 (Head Office Downtown Dubai)',
    swiftHo: 'SCBLAEAD',
    ibanExample: 'AE23 0340 0001 2345 6789 012',
    popularApp: 'SC Mobile UAE App',
    customerCare: '+971 600 52 2288',
    aaniInstantLimit: 'Up to AED 50,000 per instant transfer',
    depositProtection: 'CBUAE Capital Framework & Standard Chartered PLC Global Balance Sheet',
    wpsSupport: 'Straight2Bank Corporate Electronic WPS SIF File Automation'
  },
  'citibank-uae': {
    established: '1964 (First established in Dubai on the Dubai Creek)',
    foundingStory: 'Citibank N.A. UAE is a premier global consumer and institutional banking institution operating in the UAE since 1964. Renowned for its Citi Handlowy global networks, Citigold wealth advisory, and industry-leading cashback and travel credit cards, Citibank serves high-net-worth individuals and multinational corporations.',
    foundingStory_bn: 'সিটিব্যাংক ইউএই (Citibank UAE) ১৯৬৪ সাল থেকে সংযুক্ত আরব আমিরাতে পরিচালিত একটি বিশ্বখ্যাত আন্তর্জাতিক ব্যাংক। প্রিমিয়াম সিটিগোল্ড (Citigold) ওয়েলথ অ্যাডভাইজরি, আন্তর্জাতিক পেমেন্ট কার্ড এবং বহুজাতিক করপোরেট ব্যাংকিংয়ে এটি অত্যন্ত জনপ্রিয়।',
    category: 'UAE Foreign Commercial & Wealth Management Bank (CBUAE Code #033)',
    category_bn: 'ইউএই আন্তর্জাতিক বাণিজ্যিক ও সিটিগোল্ড ওয়েলথ ব্যাংক (সিবিইউএই কোড #০৩৩)',
    coreStrengths: [
      'Citigold and Citigold Private Client global wealth management advisory',
      'Global fee-free money transfers to Citibank accounts in over 20 countries via Citibank Global Transfers',
      'Direct UAEFTS clearing and UAE Pass seamless digital client onboarding',
      'Full corporate treasury, foreign exchange, and institutional custody'
    ],
    coreStrengths_bn: [
      'সিটিগোল্ড (Citigold) বিশ্বমানের আন্তর্জাতিক ওয়েলথ ম্যানেজমেন্ট পরামর্শ',
      'সিটিব্যাংক গ্লোবাল ট্রান্সফারের মাধ্যমে বিশ্বের ২০টিরও বেশি দেশে সম্পূর্ণ ফ্রিতে তাৎক্ষণিক অর্থ প্রেরণ',
      'UAEFTS ক্লিয়ারিং এবং ইউএই পাস দ্বারা দ্রুত পেপারলেস ডিজিটাল সাইনআপ',
      'করপোরেট ট্রেজারি, আন্তর্জাতিক মুদ্রা লেনদেন এবং কাস্টডি সেবা'
    ],
    cbuaeCode: '033',
    routingFormat: '033010001 (Head Office Al Wasl Dubai)',
    swiftHo: 'CITIAEAD',
    ibanExample: 'AE34 0330 0001 2345 6789 012',
    popularApp: 'Citi Mobile UAE App',
    customerCare: '+971 4 311 4000',
    aaniInstantLimit: 'Up to AED 50,000 per instant transfer',
    depositProtection: 'Central Bank of the UAE (CBUAE) Framework & Citigroup Global Backing',
    wpsSupport: 'CitiDirect Corporate Payroll & Direct Deposit Processing'
  },
  'al-maryah-community-bank': {
    established: '2021 (UAE’s first specialized digital community bank licensed by CBUAE)',
    foundingStory: 'Al Maryah Community Bank (Mbank) is the UAE’s first fully licensed specialized digital community bank. Headquartered on Al Maryah Island in Abu Dhabi, Mbank delivers branchless mobile banking, digital IPO subscriptions, and automated SME digital lending tailored for UAE citizens and residents.',
    foundingStory_bn: 'আল মারিয়াহ কমিউনিটি ব্যাংক (Mbank) ২০২১ সালে প্রতিষ্ঠিত সংযুক্ত আরব আমিরাতের প্রথম লাইসেন্সপ্রাপ্ত ডিজিটাল কমিউনিটি ব্যাংক। আবুধাবির আল মারিয়াহ দ্বীপে প্রধান কার্যালয় বিশিষ্ট এই ব্যাংকটি শতভাগ ডিজিটাল পেপারলেস ব্যাংকিং, আইপিও সাবস্ক্রিপশন ও এসএমই লোন প্রদান করে।',
    category: 'UAE First Licensed Digital Community Bank (CBUAE Code #050)',
    category_bn: 'ইউএইর প্রথম অনুমোদিত পূর্ণাঙ্গ ডিজিটাল কমিউনিটি ব্যাংক (সিবিইউএই কোড #০৫০)',
    coreStrengths: [
      'Instant account opening in under 90 seconds using UAE Pass and EID biometric scanning',
      'Direct integrated subscription to Dubai Financial Market (DFM) and Abu Dhabi Securities Exchange (ADX) IPOs',
      'Pioneering native integration with CBUAE Aani real-time payment ecosystem',
      'Dedicated digital accounts for startups, freelancers, and small merchants'
    ],
    coreStrengths_bn: [
      'ইউএই পাস (UAE Pass) ও বায়োমেট্রিক স্ক্যানের মাধ্যমে মাত্র ৯০ সেকেন্ডে পেপারলেস একাউন্ট খোলা',
      'দুবাই ফাইন্যান্সিয়াল মার্কেট (DFM) ও আবুধাবি স্টক এক্সচেঞ্জ (ADX) আইপিওতে সরাসরি বিনিয়োগ',
      'সিবিইউএই আনি (Aani) রিয়েল-টাইম পেমেন্ট নেটওয়ার্কের সম্পূর্ণ ডিজিটাল সুবিধা',
      'ফ্রিল্যান্সার, স্টার্টআপ এবং ক্ষুদ্র উদ্যোক্তাদের জন্য বিশেষ ডিজিটাল বিজনেস একাউন্ট'
    ],
    cbuaeCode: '050',
    routingFormat: '050020001 (Head Office Abu Dhabi)',
    swiftHo: 'MBMNAEAD',
    ibanExample: 'AE45 0500 0001 2345 6789 012',
    popularApp: 'Mbank UAE App',
    customerCare: '+971 600 57 1111',
    aaniInstantLimit: 'Up to AED 50,000 per instant transaction (24/7)',
    depositProtection: 'Central Bank of the UAE (CBUAE) Reserve Mandates & Full ADGM Regulation',
    wpsSupport: 'Digital WPS Electronic Payroll Solution for SMEs'
  },
  'wio-bank': {
    established: '2022 (Licensed by CBUAE, backed by ADQ, Alpha Dhabi, FAB, and e&)',
    foundingStory: 'Wio Bank PJSC is an innovative digital platform bank in the Middle East, regulated by the Central Bank of the UAE and headquartered in Abu Dhabi. Backed by sovereign powerhouses including ADQ, Alpha Dhabi Holding, First Abu Dhabi Bank (FAB), and e& (formerly Etisalat), Wio operates through Wio Business for enterprises and Wio Personal for everyday consumers.',
    foundingStory_bn: 'উইও ব্যাংক (Wio Bank PJSC) ২০২২ সালে প্রতিষ্ঠিত মধ্যপ্রাচ্যের শীর্ষস্থানীয় ডিজিটাল প্ল্যাটফর্ম ব্যাংক। আবুধাবি সার্বভৌম বিনিয়োগ সংস্থা ADQ, ফার্স্ট আবুধাবি ব্যাংক (FAB), আলফা ধাবি এবং ইঅ্যান্ড (ইতিসালাত)-এর যৌথ পৃষ্ঠপোষকতায় পরিচালিত এই ব্যাংকটি উইও বিজনেস ও উইও পার্সোনাল অ্যাপের মাধ্যমে বৈপ্লবিক ডিজিটাল সেবা দেয়।',
    category: 'UAE Sovereign-Backed Next-Gen Digital Platform Bank (CBUAE Code #051)',
    category_bn: 'ইউএই সার্বভৌম বিনিয়োগ সংস্থা পরিচালিত নেক্সট-জেন ডিজিটাল ব্যাংক (সিবিইউএই কোড #০৫১)',
    coreStrengths: [
      'Wio Business: Leading digital banking operating system for companies with multi-currency virtual cards and invoices',
      'Wio Personal: Ultra-high yield multi-currency savings spaces with automated FX conversion',
      'Instant settlement via CBUAE Aani real-time network and global SWIFT integration',
      'Direct in-app global stock trading across US and UAE equity markets'
    ],
    coreStrengths_bn: [
      'উইও বিজনেস (Wio Business): ব্যবসা প্রতিষ্ঠানের জন্য ভার্চুয়াল কার্ড, ইনভয়েসিং ও ক্যাশ ফ্লো সুবিধা',
      'উইও পার্সোনাল (Wio Personal): সর্বোচ্চ মুনাফাযুক্ত মাল্টি-কারেন্সি সেভিংস স্পেস',
      'সিবিইউএই আনি (Aani) এবং সুইফট গ্লোবাল নেটওয়ার্কের মাধ্যমে তাৎক্ষণিক আন্তর্জাতিক ট্রান্সফার',
      'অ্যাপের মাধ্যমে সরাসরি ইউএস ও ইউএই স্টক মার্কেটে শেয়ার লেনদেনের সুযোগ'
    ],
    cbuaeCode: '051',
    routingFormat: '051020001 (Head Office Abu Dhabi)',
    swiftHo: 'WIOBAEAD',
    ibanExample: 'AE56 0510 0001 2345 6789 012',
    popularApp: 'Wio Business & Wio Personal Apps',
    customerCare: '+971 600 50 0946',
    aaniInstantLimit: 'Up to AED 50,000 per instant transaction',
    depositProtection: 'Central Bank of the UAE (CBUAE) Tier-1 Digital Reserve Oversight',
    wpsSupport: 'Automated In-App WPS Payroll File Generation and Disbursement'
  }
};

const DEFAULT_UAE_KNOWLEDGE: UaeBankKnowledge = {
  established: 'Licensed & Regulated by Central Bank of the UAE (CBUAE)',
  foundingStory: 'This licensed banking institution operates within the United Arab Emirates under the rigorous supervisory standards of the Central Bank of the UAE (CBUAE). It offers retail, corporate, and foreign exchange clearing across the 7 Emirates.',
  foundingStory_bn: 'এই অনুমোদিত ব্যাংকিং প্রতিষ্ঠানটি সেন্ট্রাল ব্যাংক অব দ্য ইউএই (CBUAE)-এর সার্বিক নিয়ন্ত্রক নীতিমালার অধীনে সংযুক্ত আরব আমিরাতের ৭টি আমিরাতজুড়ে ব্যক্তি, করপোরেট ও রেমিট্যান্স ক্লিয়ারিং সেবা প্রদান করে থাকে।',
  category: 'Licensed UAE Financial Institution (CBUAE Regulated)',
  category_bn: 'অনুমোদিত ইউএই আর্থিক প্রতিষ্ঠান (সিবিইউএই নিয়ন্ত্রিত)',
  coreStrengths: [
    'Fully compliant with CBUAE UAEFTS and Aani instant payment settlement networks',
    'Mandatory UAE 23-digit IBAN (AEkk...) standard structure for domestic and foreign transfers',
    'Wages Protection System (WPS) corporate salary compliance',
    'SWIFT/BIC international telegraphic remittance routing'
  ],
  coreStrengths_bn: [
    'UAEFTS এবং সিবিইউএই আনি (Aani) ইনস্ট্যান্ট পেমেন্ট সেটেলমেন্ট নেটওয়ার্কের শতভাগ বাস্তবায়ন',
    'অভ্যন্তরীণ ও আন্তর্জাতিক অর্থ স্থানান্তরের জন্য বাধ্যতামূলক ২৩ অক্ষরের আইবিএএন (AEkk...) স্ট্যান্ডার্ড',
    'ওয়েজেস প্রোটেকশন সিস্টেম (WPS) পে-রোল নিয়মাবলি মেনে চলা',
    'সুইফট/বিআইসি (SWIFT/BIC) আন্তর্জাতিক রেমিট্যান্স রাউটিং সুবিধা'
  ],
  cbuaeCode: '000',
  routingFormat: '000010001',
  swiftHo: 'UAE',
  ibanExample: 'AE00 0000 0001 2345 6789 012',
  popularApp: 'UAE Digital Banking App',
  customerCare: 'Contact local UAE branch or customer support line',
  aaniInstantLimit: 'Up to AED 50,000 per instant transfer',
  depositProtection: 'Central Bank of the UAE (CBUAE) Statutory Capital Reserves',
  wpsSupport: 'Supported via CBUAE Wages Protection System (WPS)'
};

export const uaeBanksArticles: BankArticle[] = banksData.map((bank) => {
  const knowledge = UAE_BANK_KNOWLEDGE[bank.id] || {
    ...DEFAULT_UAE_KNOWLEDGE,
    cbuaeCode: bank.cbuae_code || bank.bank_code || '000',
    routingFormat: bank.routing_number || '000010001',
    swiftHo: bank.swift_code || 'UAE'
  };

  const cbuaeCode = bank.cbuae_code || bank.bank_code || knowledge.cbuaeCode;
  const routingNum = bank.routing_number || knowledge.routingFormat;
  const swiftCode = bank.swift_code || knowledge.swiftHo;
  const sampleIban = knowledge.ibanExample;

  return {
    id: `guide-${bank.id}`,
    slug: bank.id,
    bank_id: bank.id,
    country: 'ae',
    title: `${bank.name} Routing Number, CBUAE Code, IBAN & SWIFT Transfer Guide 2026`,
    title_bn: `${bank.name_bn || bank.name} - সিবিইউএই (CBUAE) কোড, রাউটিং নাম্বার, আইবিএএন ও সুইফট গাইড ২০২৬`,
    title_hi: `${bank.name_hi || bank.name} - CBUAE बैंक कोड, IBAN, आनी (Aani) एवं स्विफ्ट कोड गाइड 2026`,
    title_ru: `${bank.name_ru || bank.name} — CBUAE код, IBAN (AE...), UAEFTS и SWIFT реквизиты 2026`,
    subtitle: `Official 2026 banking specifications for ${bank.name}: 3-digit CBUAE clearing code (${cbuaeCode}), 9-digit UAEFTS routing (${routingNum}), 23-character IBAN format, Aani 24/7 instant payments, Wages Protection System (WPS), and international SWIFT wire transfers.`,
    subtitle_bn: `${bank.name_bn || bank.name}-এর ২০২৬ সালের ৩-সংখ্যার সিবিইউএই ক্লিয়ারিং কোড (${cbuaeCode}), ৯-সংখ্যার UAEFTS রাউটিং (${routingNum}), ২৩ অক্ষরের আইবিএএন (IBAN), আনি (Aani) ইনস্ট্যান্ট পেমেন্ট, ডব্লিউপিএস স্যালারি সিস্টেম এবং সুইফট কোড (${swiftCode}) নির্দেশিকা।`,
    subtitle_hi: `${bank.name_hi || bank.name} का 2026 CBUAE बैंक कोड (${cbuaeCode}), 9-अंकीय राउटिंग (${routingNum}), 23-वर्णों का IBAN, Aani इंस्टेंट पेमेंट और स्विफ्ट कोड (${swiftCode}) विवरण।`,
    subtitle_ru: `Официальный справочник по банку ${bank.name_ru || bank.name}: 3-значный код CBUAE (${cbuaeCode}), маршрутизатор UAEFTS (${routingNum}), 23-значный IBAN, мгновенные переводы Aani и SWIFT (${swiftCode}).`,
    meta_title: `${bank.name} CBUAE Code, Routing Number, IBAN & SWIFT 2026`,
    meta_description: `Complete guide to ${bank.name} 3-digit CBUAE clearing code (${cbuaeCode}), 9-digit UAEFTS routing number, 23-character UAE IBAN, Aani instant payments, WPS payroll and SWIFT code (${swiftCode}).`,
    meta_keywords: [
      `${bank.name} cbuae code`,
      `${bank.name} routing number`,
      `${bank.name} iban uae`,
      `${bank.name} swift code`,
      `${bank.name} aani instant transfer`,
      `uae wps payroll ${bank.name}`
    ],
    read_time: '6 min read',
    published_date: '2026-03-01',
    last_updated: '2026-09-08',
    author: 'Global Financial Editorial Board (Middle East Banking Desk)',
    overview: `${bank.name} is a cornerstone of the United Arab Emirates banking sector, operating under the direct regulatory supervision of the Central Bank of the UAE (CBUAE). Understanding the UAE’s 3-digit CBUAE clearing code, the standardized 23-character IBAN structure, UAEFTS electronic settlements, Aani instant mobile transfers, and Wages Protection System (WPS) guarantees secure personal and corporate financial transactions across Dubai, Abu Dhabi, Sharjah, and all Emirates.`,
    overview_bn: `${bank.name_bn || bank.name} সংযুক্ত আরব আমিরাতের ব্যাংকিং ও অর্থনীতির অন্যতম শীর্ষ স্তম্ভ, যা সেন্ট্রাল ব্যাংক অব দ্য ইউএই (CBUAE)-এর প্রত্যক্ষ নিয়ন্ত্রণে পরিচালিত। ৩-সংখ্যার সিবিইউএই ক্লিয়ারিং কোড, ২৩ অক্ষরের আইবিএএন (IBAN) গঠন, UAEFTS ইলেকট্রনিক ট্রান্সফার, আনি (Aani) তাৎক্ষণিক পেমেন্ট এবং ডব্লিউপিএস (WPS) বেতন কাঠামোর সঠিক ব্যবহার দুবাই, আবুধাবি ও সমগ্র আমিরাতে অর্থ লেনদেনের শতভাগ নিরাপত্তা নিশ্চিত করে।`,
    overview_hi: `${bank.name_hi || bank.name} संयुक्त अरब अमीरात की प्रमुख वित्तीय संस्था है। 3-अंकीय CBUAE कोड, 23-वर्णों का IBAN, UAEFTS नेटवर्क और Aani इंस्टेंट ट्रांसफर के साथ संपूर्ण बैंकिंग गाइड।`,
    overview_ru: `${bank.name_ru || bank.name} является ведущим финансовым институтом ОАЭ под надзором Центрального банка ОАЭ (CBUAE). Изучите клиринговые коды CBUAE, 23-значный стандарт IBAN, систему мгновенных платежей Aani и зарплатную систему WPS.`,
    quick_stats: [
      { label: 'CBUAE Clearing Code', label_bn: 'সিবিইউএই ক্লিয়ারিং কোড', label_hi: 'CBUAE बैंक कोड', label_ru: 'Код банка CBUAE', value: cbuaeCode },
      { label: '9-Digit UAEFTS Routing', label_bn: '৯ সংখ্যার UAEFTS রাউটিং', label_hi: '9-अंकीय UAEFTS राउटिंग', label_ru: 'UAEFTS Routing (9 цифр)', value: routingNum },
      { label: 'Sample UAE IBAN', label_bn: 'নমুনা ইউএই আইবিএএন', label_hi: 'यूएई IBAN उदाहरण', label_ru: 'Пример IBAN (ОАЭ)', value: sampleIban },
      { label: 'SWIFT / BIC Code', label_bn: 'সুইফট / বিআইসি কোড', label_hi: 'स्विफ्ट कोड', label_ru: 'SWIFT / BIC', value: swiftCode },
      { label: 'Aani Instant Transfer', label_bn: 'আনি (Aani) ইনস্ট্যান্ট ট্রান্সফার', label_hi: 'Aani इंस्टेंट ट्रांसफर', label_ru: 'Мгновенные переводы Aani', value: 'Supported (24/7/365)' },
      { label: 'WPS Payroll Support', label_bn: 'ডব্লিউপিএস (WPS) পে-রোল সাপোর্ট', label_hi: 'WPS वेतन प्रणाली', label_ru: 'Система WPS', value: 'Full SIF Compliance' }
    ],
    sections: [
      {
        id: 'overview-history',
        heading: '1. Institutional Background & Regulatory Status',
        heading_bn: '১. প্রতিষ্ঠানের পরিচিতি ও নিয়ন্ত্রক অনুমোদন',
        heading_hi: '1. संस्था का परिचय एवं नियामक स्थिति',
        heading_ru: '1. Обзор и нормативный статус банка',
        content: `${knowledge.foundingStory}\n\n**Regulatory Oversight & Licensing:** ${knowledge.category} licensed and supervised by the Central Bank of the United Arab Emirates (CBUAE). Operating in full compliance with Federal Law No. 14 of 2018 regarding the Central Bank and Organization of Financial Institutions. Headquartered at ${bank.head_office}.`,
        content_bn: `${knowledge.foundingStory_bn}\n\n**নিয়ন্ত্রক অনুমোদন ও তদারকি:** ${knowledge.category_bn}। ব্যাংকটি সেন্ট্রাল ব্যাংক অব দ্য ইউএই (CBUAE) কর্তৃক অনুমোদিত এবং ২০১৮ সালের ফেডারেল আইন নং ১৪ অনুযায়ী পরিচালিত। প্রধান কার্যালয়: ${bank.head_office_bn || bank.head_office}।`,
        content_hi: `${knowledge.foundingStory}\n\nनियामक स्थिति: सेंट्रल बैंक ऑफ द यूएई (CBUAE) द्वारा अधिकृत एवं नियंत्रित संस्थान।`,
        content_ru: `${knowledge.foundingStory}\n\nЛицензируется и регулируется Центральным банком ОАЭ (CBUAE) в соответствии с Федеральным законом № 14 от 2018 года.`
      },
      {
        id: 'clearing-codes-and-iban-structure',
        heading: '2. UAE Banking Clearing Identifiers: CBUAE Code, UAEFTS & 23-Character IBAN',
        heading_bn: '২. ইউএই ব্যাংকিং কোডের গঠন: সিবিইউএই কোড, UAEFTS ও ২৩ অক্ষরের IBAN',
        heading_hi: '2. यूएई बैंकिंग कोड: CBUAE कोड, UAEFTS एवं 23-वर्णों का IBAN',
        heading_ru: '2. Клиринговые идентификаторы ОАЭ: Код CBUAE, UAEFTS и 23-значный IBAN',
        content: `In the United Arab Emirates, domestic interbank transactions utilize three core identifiers:\n\n1. **3-Digit CBUAE Clearing Code (BBB):** Uniquely identifies ${bank.name} across the Emirates banking system (**${cbuaeCode}**).\n2. **9-Digit UAEFTS Routing Number:** Used for domestic clearing through the UAE Funds Transfer System (Format: **${routingNum}**).\n3. **23-Character UAE IBAN (AEkk BBBC CCCC CCCC CCCC CCC):**\n   - **Characters 1-2 (Country Code):** **AE** representing the United Arab Emirates.\n   - **Characters 3-4 (Check Digits):** 2 mathematical verification digits.\n   - **Characters 5-7 (Bank Identifier):** 3-digit CBUAE code (**${cbuaeCode}**).\n   - **Characters 8-23 (Account Number):** 16-digit customer individual account number (e.g., **${sampleIban}**).\n4. **Mandatory Requirement:** Under CBUAE regulations, an IBAN is mandatory for all domestic salary credits, electronic fund transfers, and inward international remittances.`,
        content_bn: `সংযুক্ত আরব আমিরাতে অভ্যন্তরীণ ব্যাংক লেনদেনের জন্য তিনটি প্রধান কোড ব্যবহৃত হয়:\n\n১. **৩-সংখ্যার সিবিইউএই ক্লিয়ারিং কোড (BBB):** এটি ${bank.name_bn || bank.name}-এর সার্বজনীন ব্যাংক পরিচিতি নম্বর (**${cbuaeCode}**)।\n২. **৯-সংখ্যার UAEFTS রাউটিং নাম্বার:** সেন্ট্রাল ব্যাংকের ইলেকট্রনিক ক্লিয়ারিং সিস্টেমে ব্যবহৃত ফরম্যাট (**${routingNum}**)।\n৩. **২৩ অক্ষরের ইউএই আইবিএএন (AEkk BBBC CCCC CCCC CCCC CCC):**\n   - **১ম ও ২য় অক্ষর (দেশের কোড):** **AE** নির্দেশ করে সংযুক্ত আরব আমিরাত।\n   - **৩য় ও ৪র্থ সংখ্যা (চেক ডিজিট):** ২-ডিজিটের ভেরিফিকেশন কোড।\n   - **৫ম থেকে ৭ম সংখ্যা (ব্যাংক কোড):** ৩-সংখ্যার সিবিইউএই কোড (**${cbuaeCode}**)।\n   - **৮ম থেকে ২৩তম সংখ্যা (একাউন্ট নম্বর):** ১৬-সংখ্যার ব্যক্তিগত অ্যাকাউন্ট নম্বর (যেমন: **${sampleIban}**)।\n৪. **বাধ্যতামূলক নিয়ম:** সিবিইউএই-এর বিধানমতে সকল অভ্যন্তরীণ বেতন, ট্রান্সফার এবং আন্তর্জাতিক রেমিট্যান্স গ্রহণের জন্য পূর্ণাঙ্গ IBAN থাকা বাধ্যতামূলক।`,
        content_hi: `यूएई में घरेलू फंड ट्रांसफर के लिए 3-अंकीय CBUAE बैंक कोड (${cbuaeCode}), 9-अंकीय UAEFTS राउटिंग कोड (${routingNum}) और 23-वर्णों का अनिवार्य IBAN उपयोग किया जाता है।`,
        content_ru: `В ОАЭ для межбанковских расчетов используются 3-значный код CBUAE (${cbuaeCode}), 9-значный маршрутизатор UAEFTS (${routingNum}) и 23-значный стандартный номер счета IBAN.`
      },
      {
        id: 'aani-instant-payments-guide',
        heading: '3. Aani Instant Payments by CBUAE: 24/7 Real-Time Money Transfers',
        heading_bn: '৩. সিবিইউএই আনি (Aani) ইনস্ট্যান্ট পেমেন্ট: ২৪/৭ তাৎক্ষণিক অর্থ স্থানান্তর',
        heading_hi: '3. CBUAE आनी (Aani) इंस्टेंट पेमेंट्स: 24/7 त्वरित मनी ट्रांसफर',
        heading_ru: '3. Мгновенные платежи Aani от ЦБ ОАЭ: переводы 24/7 в реальном времени',
        content: `Operated by Al Etihad Payments (a subsidiary of the Central Bank of the UAE), **Aani** enables instant interbank money transfers across the UAE within seconds:\n\n- **Instant Speed:** Transfers to and from accounts at ${bank.name} settle in real-time (**under 10 seconds**), 24 hours a day, 365 days a year (including weekends and official holidays).\n- **Alias Identifiers:** Send or receive money instantly using only the recipient’s **mobile phone number** or **email address** without entering full 23-character IBANs.\n- **QR Code Payments & Split Bill:** Pay merchants instantly by scanning Aani QR codes or request split payments from friends directly.\n- **Transaction Limit:** Up to **AED 50,000 per transaction** under standard CBUAE limits.`,
        content_bn: `সেন্ট্রাল ব্যাংক অব দ্য ইউএইর সহযোগী প্রতিষ্ঠান আল ইতিহাদ পেমেন্টস কর্তৃক পরিচালিত **আনি (Aani)** একটি তাৎক্ষণিক আন্তঃব্যাংক পেমেন্ট প্ল্যাটফর্ম:\n\n- **তাত্ক্ষণিক গতি:** ${bank.name_bn || bank.name}-এর যেকোনো অ্যাকাউন্টে মাত্র **১০ সেকেন্ডের মধ্যে** ২৪/৭ অর্থ স্থানান্তর সম্পন্ন হয় (সরকারি ছুটির দিনেও প্রযোজ্য)।\n- **মোবাইল নম্বর ও ইমেইল দ্বারা লেনদেন:** দীর্ঘ ২৩ অক্ষরের IBAN না লিখে কেবল প্রাপকের **মোবাইল নম্বর** বা **ইমেইল** ব্যবহার করে তৎক্ষণাৎ টাকা পাঠানো যায়।\n- **কিউআর কোড ও স্প্লিট বিল:** দোকানে কিউআর কোড স্ক্যান করে পেমেন্ট কিংবা বন্ধুদের মাঝে বিল ভাগাভাগি করার আধুনিক সুবিধা।\n- **লেনদেনের সীমা:** সিবিইউএই নিয়মানুযায়ী প্রতি ট্রানজাকশনে সর্বোচ্চ **৫০,০০০ দিরহাম (AED 50,000)** পর্যন্ত।`,
        content_hi: `CBUAE की Aani प्रणाली द्वारा मोबाइल नंबर के माध्यम से 10 सेकंड में 24/7 तुरंत फंड ट्रांसफर होता है। प्रति लेनदेन अधिकतम सीमा 50,000 AED है।`,
        content_ru: `Национальная система быстрых платежей Aani от ЦБ ОАЭ обеспечивает мгновенный перевод средств за 10 секунд 24/7 по номеру мобильного телефона до 50 000 AED.`
      },
      {
        id: 'wps-wages-protection-system',
        heading: '4. Wages Protection System (WPS) & Corporate Salary Compliance',
        heading_bn: '৪. ওয়েজেস প্রোটেকশন সিস্টেম (WPS) ও করপোরেট বেতন বিতরণ নিয়ম',
        heading_hi: '4. वेजेस प्रोटेक्शन सिस्टम (WPS) एवं कॉर्पोरेट वेतन अनुपालन',
        heading_ru: '4. Система защиты заработной платы WPS и корпоративные выплаты',
        content: `The **Wages Protection System (WPS)** is a mandatory electronic salary transfer system overseen jointly by the Ministry of Human Resources and Emiratisation (MOHRE) and the Central Bank of the UAE (CBUAE):\n\n- **Corporate Payroll at ${bank.name}:** Employers disburse employee salaries using standardized Salary Information Files (SIF) securely processed via CBUAE.\n- **Payroll Cards & Accounts:** Expatriate and national workers receive monthly wages directly into dedicated WPS salary cards or active IBAN accounts with zero delays.\n- **Compliance Guarantee:** Protects employees’ timely compensation and safeguards business entities against regulatory fines and labor licensing blocks.`,
        content_bn: `সংযুক্ত আরব আমিরাতের মানবসম্পদ মন্ত্রণালয় (MOHRE) এবং সেন্ট্রাল ব্যাংক (CBUAE) পরিচালিত **ওয়েজেস প্রোটেকশন সিস্টেম (WPS)** একটি বাধ্যতামূলক ইলেকট্রনিক বেতন বিতরণ ব্যবস্থা:\n\n- **${bank.name_bn || bank.name}-এ পে-রোল প্রসেসিং:** প্রতিষ্ঠানসমূহ সিবিইউএই অনুমোদিত স্যালারি ইনফরমেশন ফাইল (SIF)-এর মাধ্যমে কর্মীদের বেতন প্রদান করে।\n- **স্যালারি কার্ড ও অ্যাকাউন্ট:** প্রবাসী ও স্থানীয় কর্মীরা নির্ধারিত তারিখে কোনো বিলম্ব ছাড়াই ডব্লিউপিএস স্যালারি কার্ড বা IBAN অ্যাকাউন্টে তাদের বেতন লাভ করেন।\n- **নিয়ন্ত্রক সুবিধা:** এটি কর্মীদের পাওনা নিশ্চিত করে এবং কোম্পানিগুলোকে প্রশাসনিক জরিমানা ও লাইসেন্স ব্লকিং থেকে সুরক্ষিত রাখে।`,
        content_hi: `WPS प्रणाली MOHRE और CBUAE के अंतर्गत सभी कंपनियों के लिए अनिवार्य इलेक्ट्रॉनिक वेतन भुगतान प्रणाली है।`,
        content_ru: `Система WPS является обязательным государственным механизмом выплаты заработных плат сотрудникам через банки ОАЭ под контролем Министерства труда (MOHRE) и CBUAE.`
      },
      {
        id: 'international-wires-and-remittances',
        heading: '5. International SWIFT Wire Transfers & Remittance Instructions',
        heading_bn: '৫. আন্তর্জাতিক সুইফট ওয়্যার ট্রান্সফার ও রেমিট্যান্স নির্দেশিকা',
        heading_hi: '5. अंतरराष्ट्रीय स्विफ्ट वायर ट्रांसफर एवं विदेशी रेমিট্যান্স',
        heading_ru: '5. Международные переводы SWIFT и валютные реквизиты',
        content: `To receive overseas telegraphic wire transfers or foreign currency remittances into your account at ${bank.name}, furnish the overseas remitter with the following verified credentials:\n\n- **Beneficiary Bank Name:** ${bank.name}\n- **SWIFT/BIC Code:** **${swiftCode}**\n- **Full International IBAN:** Your complete 23-character UAE IBAN (e.g., **${sampleIban}**)\n- **3-Digit CBUAE Code:** **${cbuaeCode}**\n- **Bank Head Office Address:** ${bank.head_office}, United Arab Emirates\n- **Currency:** UAE Dirhams (AED), US Dollars (USD), Euros (EUR), British Pounds (GBP), or other supported global clearing currencies.`,
        content_bn: `বিদেশ থেকে রেমিট্যান্স বা আন্তর্জাতিক ওয়্যার ট্রান্সফার ${bank.name_bn || bank.name}-এ গ্রহণের জন্য প্রেরককে নিচের সঠিক তথ্যগুলো প্রদান করুন:\n\n- **গ্রাহকের ব্যাংকের নাম:** ${bank.name_bn || bank.name}\n- **সুইফট/বিআইসি (SWIFT/BIC) কোড:** **${swiftCode}**\n- **পূর্ণাঙ্গ আন্তর্জাতিক আইবিএএন (IBAN):** আপনার ২৩ অক্ষরের একাউন্ট আইবিএএন (যেমন: **${sampleIban}**)\n- **সিবিইউএই কোড:** **${cbuaeCode}**\n- **ব্যাংকের প্রধান কার্যালয়ের ঠিকানা:** ${bank.head_office_bn || bank.head_office}, সংযুক্ত আরব আমিরাত\n- **মুদ্রা (Currency):** এইউডি (AED), ইউএস ডলার (USD), ইউরো (EUR), ব্রিটিশ পাউন্ড (GBP) ইত্যাদি।`,
        content_hi: `विदेश से धन प्राप्त करने के लिए SWIFT कोड (${swiftCode}), 23-वर्णों का IBAN और CBUAE कोड (${cbuaeCode}) आवश्यक है।`,
        content_ru: `Для получения валютного перевода в ${bank.name_ru || bank.name} используйте международный SWIFT код ${swiftCode} и 23-значный номер IBAN.`
      }
    ],
    faqs: [
      {
        question: `What is the 3-digit CBUAE Bank Code for ${bank.name}?`,
        question_bn: `${bank.name_bn || bank.name}-এর ৩-সংখ্যার সিবিইউএই (CBUAE) ব্যাংক কোড কত?`,
        question_hi: `${bank.name_hi || bank.name} का 3-अंकीय CBUAE बैंक कोड क्या है?`,
        question_ru: `Какой 3-значный код CBUAE у ${bank.name_ru || bank.name}?`,
        answer: `The official 3-digit Central Bank of the UAE (CBUAE) clearing code for ${bank.name} is **${cbuaeCode}**. It appears inside your 23-character IBAN between positions 5 and 7.`,
        answer_bn: `${bank.name_bn || bank.name}-এর অফিসিয়াল ৩-সংখ্যার সেন্ট্রাল ব্যাংক (CBUAE) ক্লিয়ারিং কোড হলো **${cbuaeCode}**। এটি আপনার ২৩ অক্ষরের IBAN-এর ৫ম থেকে ৭ম স্থানে অন্তর্ভুক্ত থাকে।`,
        answer_hi: `${bank.name_hi || bank.name} का 3-अंकीय CBUAE बैंक कोड **${cbuaeCode}** है।`,
        answer_ru: `Официальный 3-значный клиринговый код ЦБ ОАЭ (CBUAE) для ${bank.name_ru || bank.name} — **${cbuaeCode}**.`
      },
      {
        question: `How is the UAE IBAN structured for ${bank.name}?`,
        question_bn: `${bank.name_bn || bank.name}-এর জন্য ইউএই আইবিএএন (IBAN) কীভাবে গঠিত হয়?`,
        question_hi: `${bank.name_hi || bank.name} के लिए यूएई IBAN का प्रारूप क्या है?`,
        question_ru: `Какова структура IBAN в ${bank.name_ru || bank.name}?`,
        answer: `The UAE IBAN consists of 23 alphanumeric characters: 'AE' (Country Code) + 2 Check Digits + '0' + 3-digit Bank Code (${cbuaeCode}) + 16-digit Account Number (e.g., ${sampleIban}).`,
        answer_bn: `ইউএই আইবিএএন ২৩টি অক্ষরের সমন্বয়ে গঠিত: 'AE' (দেশের কোড) + ২ ডিজিটের চেক সংখ্যা + '0' + ৩-সংখ্যার ব্যাংক কোড (${cbuaeCode}) + ১৬-সংখ্যার গ্রাহক অ্যাকাউন্ট নম্বর (যেমন: ${sampleIban})।`,
        answer_hi: `यूएई IBAN 23 वर्णों का होता है: AE + 2 चेक अंक + CBUAE कोड (${cbuaeCode}) + 16 अंकों का खाता नंबर।`,
        answer_ru: `Номер IBAN в ОАЭ состоит из 23 знаков: AE (код страны) + 2 контрольные цифры + код банка (${cbuaeCode}) + 16 цифр номера счета.`
      },
      {
        question: `Does ${bank.name} support Aani instant payments by CBUAE?`,
        question_bn: `${bank.name_bn || bank.name} কি সিবিইউএই আনি (Aani) ইনস্ট্যান্ট পেমেন্ট সমর্থন করে?`,
        question_hi: `क्या ${bank.name_hi || bank.name} Aani इंस्टेंट पेमेंट्स सपोर्ट करता है?`,
        question_ru: `Поддерживает ли ${bank.name_ru || bank.name} мгновенные переводы Aani?`,
        answer: `Yes, ${bank.name} is integrated with the Central Bank of the UAE’s Aani network, allowing real-time 24/7 instant money transfers within 10 seconds using mobile phone numbers or email aliases.`,
        answer_bn: `হ্যাঁ, ${bank.name_bn || bank.name} সেন্ট্রাল ব্যাংক অব দ্য ইউএইর আনি (Aani) নেটওয়ার্কের সাথে সম্পূর্ণ যুক্ত, যার মাধ্যমে মোবাইল নম্বর বা ইমেইল ব্যবহার করে ২৪ ঘণ্টা ১০ সেকেন্ডের মধ্যে তাৎক্ষণিক টাকা পাঠানো যায়।`,
        answer_hi: `हाँ, ${bank.name_hi || bank.name} Aani प्लेटफॉर्म से जुड़ा हुआ है और 24/7 तुरंत ट्रांसफर की सुविधा देता है।`,
        answer_ru: `Да, банк полностью интегрирован с государственной платформой быстрых платежей Aani (переводы за 10 секунд 24/7).`
      },
      {
        question: `What is the SWIFT/BIC code for international wire transfers to ${bank.name}?`,
        question_bn: `${bank.name_bn || bank.name}-এ আন্তর্জাতিক রেমিট্যান্সের জন্য সুইফট কোড কোনটি?`,
        question_hi: `${bank.name_hi || bank.name} का आधिकारिक अंतरराष्ट्रीय SWIFT कोड क्या है?`,
        question_ru: `Какой SWIFT код используется для переводов в ${bank.name_ru || bank.name}?`,
        answer: `The primary international SWIFT/BIC code for ${bank.name} head office is **${swiftCode}**.`,
        answer_bn: `${bank.name_bn || bank.name}-এর প্রধান কার্যালয়ের আন্তর্জাতিক সুইফট/বিআইসি (SWIFT/BIC) কোড হলো **${swiftCode}**।`,
        answer_hi: `${bank.name_hi || bank.name} का आधिकारिक अंतरराष्ट्रीय स्विफ्ट कोड **${swiftCode}** है।`,
        answer_ru: `Главный международный SWIFT/BIC код банка — **${swiftCode}**.`
      }
    ]
  };
});
