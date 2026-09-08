import { BankArticle } from '../../types';
import banksData from './banks.json';

/**
 * Authoritative Editorial Knowledge Base & Comprehensive Guide for Singapore Banks (新加坡银行机构 / Bank-Bank Singapura)
 * Covers 4-Digit MAS/ABS Bank Clearing Codes, 3-Digit Branch Codes (7-Digit Routing Number: BBBB-SSS),
 * FAST 24/7 Instant Interbank Transfers, PayNow (NRIC/FIN/UEN/Mobile), MEPS+ High-Value Settlement,
 * Singapore Deposit Insurance Corporation (SDIC) S$100,000 protection, and SWIFT/BIC codes.
 */

interface SingaporeBankKnowledge {
  established: string;
  foundingStory: string;
  foundingStory_bn: string;
  category: string;
  category_bn: string;
  coreStrengths: string[];
  coreStrengths_bn: string[];
  masBankCode: string;
  clearingRoutingFormat: string;
  swiftHo: string;
  popularApp: string;
  customerCare: string;
  fastInstantLimit: string;
  sdicDepositProtection: string;
  paynowSupport: string;
}

const SG_BANK_KNOWLEDGE: Record<string, SingaporeBankKnowledge> = {
  'dbs-bank-singapore': {
    established: '1968 (Established by the Government of Singapore to take over industrial financing from EDB)',
    foundingStory: 'DBS Bank Ltd (originally The Development Bank of Singapore) is the largest bank in Southeast Asia by total assets and market capitalization, managing over S$740 billion in assets. Headquartered at Marina Bay Financial Centre, DBS is globally acclaimed as "World’s Best Bank" and "Safest Bank in Asia" by Global Finance for 15 consecutive years.',
    foundingStory_bn: 'ডিবিএস ব্যাংক লিমিটেড (The Development Bank of Singapore) মোট সম্পদ ও বাজার মূলধনের দিক থেকে দক্ষিণ-পূর্ব এশিয়ার সর্ববৃহৎ ব্যাংক, যার পরিচালিত সম্পদের পরিমাণ ৭৪০ বিলিয়ন সিঙ্গাপুর ডলারেরও বেশি। মেরিনা বে ফাইন্যান্সিয়াল সেন্টারে অবস্থিত ডিবিএস গ্লোবাল ফাইন্যান্স দ্বারা টানা ১৫ বছর "এশিয়ার সবচেয়ে নিরাপদ ব্যাংক" হিসেবে ভূষিত হয়েছে।',
    category: 'Singapore Flagship Domestic Full Bank (MAS Code #7171)',
    category_bn: 'সিঙ্গাপুর জাতীয় ফ্ল্যাগশিপ ডোমেস্টিক ফুল ব্যাংক (এমএএস কোড #৭১৭১)',
    coreStrengths: [
      'Largest branch, ATM and digital cash network across Singapore combined with POSB',
      'Instant 24/7 transfers via FAST, PayNow, and real-time remittance to India, China, Malaysia, and Bangladesh',
      'Advanced digital ecosystem through DBS digibank, DBS IDEAL corporate banking, and DBS PayLah!',
      'Highest global credit rating profile (Aa1 / AA- / AA-)'
    ],
    coreStrengths_bn: [
      'পিওএসবি-র সাথে যৌথভাবে সিঙ্গাপুরে সর্ববৃহৎ শাখা, ক্যাশ ডিপোজিট মেশিন ও এটিএম নেটওয়ার্ক',
      'FAST, PayNow এবং মাত্র ৬০ সেকেন্ডে বাংলাদেশ, ভারত, চীন ও মালয়েশিয়ায় রেমিট্যান্স প্রেরণের সুবিধা',
      'ডিবিএস ডিজি Gobank, ডিবিএস আইডিয়াল (IDEAL) করপোরেট পোর্টাল এবং জনপ্রিয় ডিবিএস পে-লাহ (PayLah!) অ্যাপ',
      'বিশ্বের অন্যতম শীর্ষ ক্রেডিট রেটিং সমৃদ্ধ নিরাপদ ব্যাংকিং কাঠামো (Aa1 / AA- / AA-)'
    ],
    masBankCode: '7171',
    clearingRoutingFormat: '7171-001 / 7171001 (Marina Bay MBFC HO)',
    swiftHo: 'DBSSSGSG',
    popularApp: 'DBS digibank & DBS PayLah!',
    customerCare: '1800 111 1111 / +65 6327 2265 (24/7 Hotline)',
    fastInstantLimit: 'Up to S$200,000 per transaction (24/7/365 FAST / PayNow)',
    sdicDepositProtection: 'Insured up to S$100,000 per depositor by SDIC',
    paynowSupport: 'Full PayNow Personal (NRIC/FIN/Mobile) & PayNow Corporate (UEN/QR)'
  },
  'posb-bank-singapore': {
    established: '1877 (Founded as Post Office Savings Bank; integrated into DBS Group in 1998)',
    foundingStory: 'POSB Bank (The People’s Bank) is Singapore’s oldest local bank, established on 1 January 1877 by the British Colonial Government to encourage thrift. Acquired by DBS in 1998, POSB remains Singapore’s most trusted household retail institution, serving over 4.5 million customers and providing community banking to citizens of all ages.',
    foundingStory_bn: 'পিওএসবি ব্যাংক (The People’s Bank) সিঙ্গাপুরের সবচেয়ে প্রাচীন স্থানীয় ব্যাংক, যা ১৮৭৭ সালে সাধারণ নাগরিকদের সঞ্চয়ী সুবিধা দিতে ব্রিটিশ সরকার প্রতিষ্ঠা করে। ১৯৯৮ সালে ডিবিএস গ্রুপের সাথে যুক্ত হওয়ার পর এটি সিঙ্গাপুরের প্রতিটি পরিবারের সবচেয়ে বিশ্বস্ত রিটেইল ব্যাংকে পরিণত হয়েছে, যা ৪৫ লাখেরও বেশি গ্রাহককে সেবা দিচ্ছে।',
    category: 'Singapore Historic Household Retail Bank (MAS Code #7171)',
    category_bn: 'সিঙ্গাপুরের প্রাচীনতম ঐতিহাসিক পিপলস ব্যাংক (এমএএস কোড #৭১৭১)',
    coreStrengths: [
      'Most accessible ATM and automated teller network at every MRT station and HDB neighborhood',
      'Everyday banking with POSB Smiley Child Development Account (CDA) and National Service (NS) payroll',
      'Instant FAST & PayNow transfer linked with DBS digibank and PayLah! mobile wallet',
      'Dedicated senior citizen and student low-fee banking programs'
    ],
    coreStrengths_bn: [
      'সিঙ্গাপুরের প্রতিটি এমআরটি (MRT) স্টেশন ও এইচডিবি (HDB) আবাসিক এলাকায় বিস্তৃত এটিএম বুথ',
      'পিওএসবি স্মাইলি চাইল্ড ডেভেলপমেন্ট একাউন্ট এবং ন্যাশনাল সার্ভিস (NS) পে-রোল সুবিধাসম্পন্ন',
      'ডিবিএস ডিজি ব্যাংকিং ও পে-লাহ ওয়ালেটের মাধ্যমে FAST ও PayNow ইনস্ট্যান্ট পেমেন্ট',
      'প্রবীণ নাগরিক ও শিক্ষার্থীদের জন্য বিশেষ সর্বনিম্ন চার্জের সঞ্চয়ী একাউন্ট'
    ],
    masBankCode: '7171',
    clearingRoutingFormat: '7171-081 / 7171081 (POSB Central Routing)',
    swiftHo: 'DBSSSGSG',
    popularApp: 'POSB digibank & DBS PayLah!',
    customerCare: '1800 339 6666 / +65 6339 6666',
    fastInstantLimit: 'Up to S$200,000 per transaction via FAST & PayNow',
    sdicDepositProtection: 'Insured up to S$100,000 per depositor by SDIC',
    paynowSupport: 'Seamless PayNow via NRIC/FIN, Mobile, and QR payment'
  },
  'ocbc-bank-singapore': {
    established: '1932 (Consolidation of Chinese Commercial Bank est. 1912, Ho Hong Bank est. 1917, and Oversea-Chinese Bank est. 1919)',
    foundingStory: 'Oversea-Chinese Banking Corporation Limited (OCBC Bank) is the longest established Singapore bank, formed during the Great Depression in 1932. Headquartered at the iconic OCBC Centre on Chulia Street, OCBC is the second-largest financial group in Southeast Asia, managing over S$580 billion in assets with premier private banking via Bank of Singapore.',
    foundingStory_bn: 'ওসিবিসি ব্যাংক (Oversea-Chinese Banking Corporation - OCBC) সিঙ্গাপুরের সবচেয়ে দীর্ঘস্থায়ী বাণিজ্যিক ব্যাংক, যা ১৯৩২ সালে তিনটি শীর্ষ চীনা ব্যাংকের সমন্বয়ে গঠিত হয়। চুলিয়া স্ট্রিটে প্রধান কার্যালয় বিশিষ্ট এ ব্যাংকটি দক্ষিণ-পূর্ব এশিয়ার দ্বিতীয় বৃহত্তম ব্যাংকিং গ্রুপ এবং ব্যাংক অব সিঙ্গাপুরের মাধ্যমে শীর্ষস্থানীয় প্রাইভেট ওয়েলথ সেবা প্রদান করে।',
    category: 'Singapore Premier Universal Bank (MAS Code #7339)',
    category_bn: 'সিঙ্গাপুর শীর্ষস্থানীয় ইউনিভার্সাল ব্যাংক (এমএএস কোড #৭৩৩৯)',
    coreStrengths: [
      'Flagship OCBC 360 Account offering market-leading high interest savings tiers',
      'Pioneer of OCBC Pay Anyone, instant digital onboarding via Singpass MyInfo in 2 minutes',
      'Integrated bancassurance through Great Eastern Holdings and wealth advisory via Bank of Singapore',
      'Regional trade financing power across Singapore, Malaysia, Indonesia, and Greater China'
    ],
    coreStrengths_bn: [
      'বহুল জনপ্রিয় ওসিবিসি ৩৬০ (OCBC 360) উচ্চ সুদের স্মার্ট সেভিংস একাউন্ট',
      'সিংপাস (Singpass MyInfo) ব্যবহার করে মাত্র ২ মিনিটে তাৎক্ষণিক পেপারলেস ডিজিটাল অ্যাকাউন্ট চালু',
      'গ্রেট ইস্টার্ন ইন্স্যুরেন্স ও ব্যাংক অব সিঙ্গাপুরের মাধ্যমে সমন্বিত সম্পদ ব্যবস্থাপনা',
      'সিঙ্গাপুর, মালয়েশিয়া, ইন্দোনেশিয়া ও চীনে শক্তিশালী আন্তর্জাতিক বাণিজ্যিক করিডোর'
    ],
    masBankCode: '7339',
    clearingRoutingFormat: '7339-501 / 7339501 (OCBC Centre Head Office)',
    swiftHo: 'OCBCSGSG',
    popularApp: 'OCBC Digital & OCBC Pay Anyone',
    customerCare: '1800 363 3333 / +65 6363 3333',
    fastInstantLimit: 'Up to S$200,000 per instant transaction',
    sdicDepositProtection: 'Insured up to S$100,000 per depositor by SDIC',
    paynowSupport: 'Full PayNow (NRIC, FIN, Mobile Number, UEN Corporate, SGQR)'
  },
  'uob-singapore': {
    established: '1935 (Founded as United Chinese Bank by Datuk Wee Kheng Chiang and Chinese businessmen)',
    foundingStory: 'United Overseas Bank Limited (UOB) is a leading regional banking institution headquartered at UOB Plaza on Raffles Place. Operating over 500 offices across 19 countries, UOB is renowned for its powerhouse consumer banking, UOB One high-yield accounts, SME financing, and dominant retail expansion across Southeast Asia.',
    foundingStory_bn: 'ইউনাইটেড ওভারসিজ ব্যাংক (UOB) ১৯৩৫ সালে প্রতিষ্ঠিত সিঙ্গাপুরের শীর্ষ তিন ব্যাংকের অন্যতম, যার প্রধান কার্যালয় র‍্যাফেলস প্লেসের আইকনিক ইউওবি প্লাজায় অবস্থিত। দক্ষিণ-পূর্ব এশিয়াজুড়ে ৫০০টিরও বেশি শাখার মাধ্যমে ইউওবি তাদের ফ্ল্যাগশিপ ইউওবি ওয়ান (UOB One) অ্যাকাউন্ট এবং এসএমই ব্যবসায়ীদের অর্থায়নে নেতৃত্ব দিচ্ছে।',
    category: 'Singapore Regional Tier-1 Full Bank (MAS Code #7375)',
    category_bn: 'সিঙ্গাপুর রিজিয়নাল টায়ার-১ ফুল ব্যাংক (এমএএস কোড #৭৩৭৫)',
    coreStrengths: [
      'Market-leading UOB One Account and award-winning UOB TMRW digital consumer banking platform',
      'Deep SME and commercial banking relationships across ASEAN corridors (Singapore, Malaysia, Thailand, Vietnam, Indonesia)',
      'Instant FAST, PayNow, and global telegraphic wire settlements via UOB Infinity corporate hub',
      'Extensive credit card ecosystem with regional lifestyle and travel rewards'
    ],
    coreStrengths_bn: [
      'ইউওবি ওয়ান (UOB One) সেভিংস একাউন্ট এবং অত্যাধুনিক ইউওবি টুমরো (UOB TMRW) মোবাইল ব্যাংকিং',
      'আসিয়ান (সিঙ্গাপুর, মালয়েশিয়া, থাইল্যান্ড, ভিয়েতনাম ও ইন্দোনেশিয়া) অঞ্চলে এসএমই বাণিজ্যে শীর্ষস্থান',
      'ইউওবি ইনফিনিটি করপোরেট প্ল্যাটফর্ম, FAST ও PayNow রিয়েল-টাইম ফান্ড ট্রান্সফার',
      'আন্তর্জাতিক ভ্রমণ ও ক্যাশব্যাকের জন্য দক্ষিণ-পূর্ব এশিয়ার সেরা ক্রেডিট কার্ড সার্ভিস'
    ],
    masBankCode: '7375',
    clearingRoutingFormat: '7375-001 / 7375001 (UOB Plaza Raffles Place HO)',
    swiftHo: 'UOVBSGSG',
    popularApp: 'UOB TMRW & UOB Mighty',
    customerCare: '1800 222 2121 / +65 6222 2121',
    fastInstantLimit: 'Up to S$200,000 per transaction via FAST & PayNow',
    sdicDepositProtection: 'Insured up to S$100,000 per depositor by SDIC',
    paynowSupport: 'Full PayNow (NRIC, FIN, Mobile Number, UEN Corporate, PayNow-PromptPay)'
  },
  'standard-chartered-singapore': {
    established: '1859 (Opened first branch on Commercial Square / Raffles Place)',
    foundingStory: 'Standard Chartered Bank (Singapore) Limited has operated continuously in Singapore for over 165 years since 1859. As one of Singapore’s premier Qualified Full Banks (QFBs), StanChart anchors its global technology and operations hub in Singapore, offering wealth management, JumpStart youth accounts, Priority Banking, and global trade finance.',
    foundingStory_bn: 'স্ট্যান্ডার্ড চার্টার্ড ব্যাংক সিঙ্গাপুর ১৮৫৯ সালে প্রথম শাখা খোলার মাধ্যমে যাত্রা শুরু করে দীর্ঘ ১৬৫ বছরেরও বেশি সময় ধরে আর্থিক সেবা দিয়ে আসছে। এটি সিঙ্গাপুরের অন্যতম শীর্ষ কোয়ালিফাইড ফুল ব্যাংক (QFB), যার গ্লোবাল টেকনোলজি হাব ও প্রাইওরিটি ওয়েলথ সেন্টার সিঙ্গাপুরে অবস্থিত।',
    category: 'Singapore Qualified Full Bank (QFB) (MAS Code #7083)',
    category_bn: 'সিঙ্গাপুর কোয়ালিফাইড ফুল ব্যাংক - কিউএফবি (এমএএস কোড #৭০৮৩)',
    coreStrengths: [
      'Bonus$aver and JumpStart accounts offering competitive interest for working professionals and students',
      'Priority and Private Banking connecting cross-border assets between Singapore, London, Hong Kong, and Dubai',
      'Straight2Bank corporate treasury and real-time FAST / PayNow interbank settlement',
      'Standard Chartered Saadiq dedicated Islamic banking financial solutions'
    ],
    coreStrengths_bn: [
      'বোনাস-সেভার (Bonus$aver) এবং তরুণদের জন্য জাম্পস্টার্ট (JumpStart) জনপ্রিয় ডিজিটাল একাউন্ট',
      'সিঙ্গাপুর, লন্ডন, হংকং ও দুবাইয়ের মধ্যে আন্তর্জাতিক প্রাইওরিটি ব্যাংকিং সংযোগ',
      'Straight2Bank করপোরেট ট্রেজারি, FAST ও PayNow তাৎক্ষণিক পেমেন্ট ক্লিয়ারিং',
      'স্ট্যান্ডার্ড চার্টার্ড সাদিক (Saadiq) উইংয়ের মাধ্যমে ইসলামিক ব্যাংকিং সুবিধা'
    ],
    masBankCode: '7083',
    clearingRoutingFormat: '7083-001 / 7083001 (Marina Bay Financial Centre HO)',
    swiftHo: 'SCBLSG22',
    popularApp: 'SC Mobile Singapore App',
    customerCare: '1800 747 7000 / +65 6747 7000',
    fastInstantLimit: 'Up to S$200,000 per instant transaction',
    sdicDepositProtection: 'Insured up to S$100,000 per depositor by SDIC',
    paynowSupport: 'Full PayNow Support (Personal NRIC/FIN, Mobile & Corporate UEN)'
  },
  'citibank-singapore': {
    established: '1902 (Originally opened as International Banking Corporation on Prince Street)',
    foundingStory: 'Citibank Singapore Limited is a premier Qualified Full Bank (QFB) operating in Singapore since 1902. Serving as Citigroup’s regional wealth management and technology headquarters, Citibank Singapore is renowned for Citigold wealth advisory, multi-currency global accounts, and market-leading cash-back credit cards.',
    foundingStory_bn: 'সিটিব্যাংক সিঙ্গাপুর ১৯০২ সাল থেকে পরিচালিত একটি শতবর্ষী শীর্ষ আন্তর্জাতিক বাণিজ্যিক ব্যাংক। সিঙ্গাপুরে এর আঞ্চলিক সম্পদ ব্যবস্থাপনা সদর দপ্তর অবস্থিত। এটি সিটিগোল্ড (Citigold) ওয়েলথ অ্যাডভাইজরি, মাল্টি-কারেন্সি গ্লোবাল অ্যাকাউন্ট এবং শীর্ষস্থানীয় ক্রেডিট কার্ড সেবায় খ্যাতি অর্জন করেছে।',
    category: 'Singapore Qualified Full Bank & Global Wealth Leader (MAS Code #7214)',
    category_bn: 'সিঙ্গাপুর কিউএফবি ও গ্লোবাল ওয়েলথ লিডার (এমএএস কোড #৭২১৪)',
    coreStrengths: [
      'Citibank Global Transfers: Free instant funds transfers to Citi accounts in over 20 countries worldwide',
      'Citigold and Citigold Private Client wealth management and international brokerage',
      'Citi Global Foreign Currency Account holding up to 14 currencies with zero FX conversion fee on debit spending',
      'Direct FAST & PayNow integration with 24/7 real-time settlement'
    ],
    coreStrengths_bn: [
      'সিটিব্যাংক গ্লোবাল ট্রান্সফারের মাধ্যমে বিশ্বের ২০টিরও বেশি দেশে সম্পূর্ণ ফ্রিতে তাৎক্ষণিক অর্থ প্রেরণ',
      'সিটিগোল্ড (Citigold) বিশ্বমানের আন্তর্জাতিক ওয়েলথ ম্যানেজমেন্ট পরামর্শ ও ইনভেস্টমেন্ট',
      'একই অ্যাকাউন্টে ১৪টি আন্তর্জাতিক মুদ্রা সংরক্ষণ ও খরচ করার গ্লোবাল কারেন্সি একাউন্ট',
      'FAST ও PayNow প্ল্যাটফর্মে যুক্ত ২৪/৭ রিয়েল-টাইম ফান্ড ক্লিয়ারিং'
    ],
    masBankCode: '7214',
    clearingRoutingFormat: '7214-001 / 7214001 (Changi Business Park Head Office)',
    swiftHo: 'CITISGSG',
    popularApp: 'Citi Mobile Singapore',
    customerCare: '+65 6225 5225 (24/7 Customer Service)',
    fastInstantLimit: 'Up to S$200,000 per instant transaction',
    sdicDepositProtection: 'Insured up to S$100,000 per depositor by SDIC',
    paynowSupport: 'Full PayNow (NRIC, FIN, Mobile Number, Corporate UEN)'
  },
  'hsbc-singapore': {
    established: '1877 (The Hongkong and Shanghai Banking Corporation opened its first Singapore branch)',
    foundingStory: 'HSBC Bank (Singapore) Limited is one of Singapore’s oldest and most prestigious Qualified Full Banks, operating continuously since December 1877. Located at Marina Bay Financial Centre Tower 2, HSBC provides an international wealth corridor connecting Asia to Europe, the Middle East, and North America.',
    foundingStory_bn: 'এইচএসবিসি ব্যাংক সিঙ্গাপুর ১৮৭৭ সাল থেকে পরিচালিত একটি ঐতিহ্যবাহী কোয়ালিফাইড ফুল ব্যাংক (QFB)। মেরিনা বে ফাইন্যান্সিয়াল সেন্টারে অবস্থিত এ ব্যাংকটি ইউরোপ, মধ্যপ্রাচ্য ও উত্তর আমেরিকার সাথে এশিয়ার বাণিজ্যিক সংযোগে আন্তর্জাতিক ওয়েলথ প্ল্যাটফর্ম হিসেবে কাজ করে।',
    category: 'Singapore Qualified Full Bank & International Corridor Hub (MAS Code #7232)',
    category_bn: 'সিঙ্গাপুর কিউএফবি ও ইন্টারন্যাশনাল ওয়েলথ ব্যাংক (এমএএস কোড #৭২৩২)',
    coreStrengths: [
      'HSBC Premier and Jade status with fee-free instant global transfers across HSBC worldwide accounts',
      'HSBC Everyday Global Account supporting multi-currency savings with worldwide ATM rebates',
      'Comprehensive corporate trade financing via HSBCnet and real-time FAST / PayNow settlements',
      'Direct integration with Singapore Singpass for instant digital account setup'
    ],
    coreStrengths_bn: [
      'বিশ্বজুড়ে এইচএসবিসি অ্যাকাউন্টসমূহের মধ্যে কোনো চার্জ ছাড়া তাৎক্ষণিক গ্লোবাল মানি ট্রান্সফার সুবিধা',
      'এইচএসবিসি এভরিডে গ্লোবাল একাউন্টের মাধ্যমে একাধিক আন্তর্জাতিক মুদ্রা লেনদেন',
      'HSBCnet করপোরেট প্ল্যাটফর্ম, FAST ও PayNow রিয়েল-টাইম পেমেন্ট ক্লিয়ারিং',
      'সিংপাস (Singpass) ডিজিটাল আইডি দ্বারা কাগজবিহীন দ্রুত অ্যাকাউন্ট ওপেনিং'
    ],
    masBankCode: '7232',
    clearingRoutingFormat: '7232-001 / 7232001 (MBFC Tower 2 Head Office)',
    swiftHo: 'HSBSSGSG',
    popularApp: 'HSBC Singapore Mobile Banking',
    customerCare: '1800 4722 669 / +65 6472 2669',
    fastInstantLimit: 'Up to S$200,000 per instant transaction',
    sdicDepositProtection: 'Insured up to S$100,000 per depositor by SDIC',
    paynowSupport: 'Full PayNow (NRIC, FIN, Mobile, UEN Corporate)'
  },
  'maybank-singapore': {
    established: '1960 (Malayan Banking Berhad established first Singapore branch on Cecil Street)',
    foundingStory: 'Maybank Singapore Limited is a Qualifying Full Bank (QFB) and the Singapore operating arm of Malayan Banking Berhad, Southeast Asia’s fourth largest banking group. With full-service branches islandwide, Maybank is a leader in Singapore-Malaysia cross-border financial transactions, Islamic banking, and vehicle/home financing.',
    foundingStory_bn: 'মেব্যাংক সিঙ্গাপুর (Maybank Singapore Limited) ১৯৬০ সালে প্রতিষ্ঠিত কোয়ালিফাইং ফুল ব্যাংক এবং দক্ষিণ-পূর্ব এশিয়ার চতুর্থ বৃহত্তম ব্যাংকিং গ্রুপের অঙ্গপ্রতিষ্ঠান। সিঙ্গাপুর ও মালয়েশিয়ার মধ্যে সহজ ব্যাংকিং, ইসলামিক ফাইনান্স ও রিটেইল লোনে মেব্যাংক অত্যন্ত জনপ্রিয়।',
    category: 'Singapore Qualified Full Bank & Cross-Border Hub (MAS Code #7472)',
    category_bn: 'সিঙ্গাপুর কিউএফবি ও সিঙ্গাপুর-মালয়েশিয়া ক্রস-বর্ডার লিডার (এমএএস কোড #৭৪৭২)',
    coreStrengths: [
      'Singapore-Malaysia instant funds transfer with preferential exchange rates and zero transfer fee',
      'Maybank SaveUp Account and Islamic Sharia-compliant deposit solutions',
      'Shared ATM5 network giving free ATM access across Maybank, StanChart, Citi, HSBC, BOC, and State Bank of India',
      'Instant FAST, PayNow, and DuitNow-PayNow cross-border retail payments'
    ],
    coreStrengths_bn: [
      'সিঙ্গাপুর এবং মালয়েশিয়ার মধ্যে কোনো ফি ছাড়া রিয়েল-টাইমে তাৎক্ষণিক অর্থ স্থানান্তর',
      'মেব্যাংক সেভ-আপ একাউন্ট ও পূর্ণাঙ্গ শরীয়াহভিত্তিক ইসলামিক ব্যাংকিং সলিউশন',
      'এটিএম৫ (ATM5) নেটওয়ার্কের মাধ্যমে অন্যান্য শীর্ষ ব্যাংকের এটিএম থেকে ফ্রিতে ক্যাশ উত্তোলন',
      'FAST, PayNow এবং মালয়েশিয়ার DuitNow-এর সাথে ক্রস-বর্ডার পেমেন্ট ইন্টিগ্রেশন'
    ],
    masBankCode: '7472',
    clearingRoutingFormat: '7472-001 / 7472001 (Maybank Tower Battery Road HO)',
    swiftHo: 'MBBESGS2',
    popularApp: 'Maybank2u SG & Maybank TREATS SG',
    customerCare: '1800 629 2265 / +65 6533 5229',
    fastInstantLimit: 'Up to S$200,000 per instant transaction',
    sdicDepositProtection: 'Insured up to S$100,000 per depositor by SDIC',
    paynowSupport: 'Full PayNow (Personal NRIC/FIN & Corporate UEN)'
  },
  'bank-of-china-singapore': {
    established: '1936 (Bank of China opened its Singapore branch on Cecil Street)',
    foundingStory: 'Bank of China Limited Singapore Branch is a premier Qualified Full Bank (QFB) with an unbroken presence in Singapore since 1936. Operating from the iconic Bank of China Building at Battery Road, BOC is the leading Chinese currency (RMB) clearing bank in Singapore, facilitating bilateral trade and investment between China, Singapore, and ASEAN.',
    foundingStory_bn: 'ব্যাংক অব চায়না সিঙ্গাপুর ১৯৩৬ সাল থেকে পরিচালিত একটি ঐতিহ্যবাহী কোয়ালিফাইড ফুল ব্যাংক (QFB)। ব্যাটারি রোডের নিজস্ব ঐতিহাসিক ভবনে অবস্থিত এ ব্যাংকটি সিঙ্গাপুরে চাইনিজ ইউয়ান (RMB) ক্লিয়ারিং এবং চীন ও আসিয়ান অঞ্চলের মধ্যে আন্তর্জাতিক বাণিজ্যের প্রধান কেন্দ্র।',
    category: 'Singapore Qualified Full Bank & Primary RMB Clearing Center (MAS Code #7414)',
    category_bn: 'সিঙ্গাপুর কিউএফবি ও প্রধান আরএমবি (RMB) ক্লিয়ারিং ব্যাংক (এমএএস কোড #৭৪১৪)',
    coreStrengths: [
      'Premier RMB clearing, dual-currency SGD/RMB savings, and direct China cross-border remittance',
      'ATM5 shared consortium access and island-wide branch network',
      'Direct FAST & PayNow interbank settlement and corporate trade finance',
      'Direct UnionPay dual-currency cards with zero foreign transaction fees across mainland China'
    ],
    coreStrengths_bn: [
      'সিঙ্গাপুরে প্রধান চাইনিজ মুদ্রা (RMB) ক্লিয়ারিং এবং সরাসরি চীনে ক্রস-বর্ডার রেমিট্যান্স সুবিধা',
      'ATM5 নেটওয়ার্ক সুবিধা এবং দ্বীপজুড়ে বিস্তৃত শাখা নেটওয়ার্ক',
      'FAST ও PayNow তাত্ক্ষণিক আন্তঃব্যাংক ট্রান্সফার এবং বাণিজ্যিক ঋণপত্র সেবা',
      'চীনে কোনো রূপান্তর ফি ছাড়া খরচের জন্য ইউনিয়নপে ডুয়াল-কারেন্সি কার্ড'
    ],
    masBankCode: '7414',
    clearingRoutingFormat: '7414-001 / 7414001 (Battery Road Head Office)',
    swiftHo: 'BKCHSGSG',
    popularApp: 'BOC Mobile Banking Singapore',
    customerCare: '1800 66 95566 / +65 677 95566',
    fastInstantLimit: 'Up to S$200,000 per instant transaction',
    sdicDepositProtection: 'Insured up to S$100,000 per depositor by SDIC',
    paynowSupport: 'Full PayNow (NRIC, FIN, Mobile Number, UEN Corporate)'
  },
  'cimb-bank-singapore': {
    established: '1947 (Traces heritage to Ban Hin Lee Bank in Singapore; full commercial banking since 2009)',
    foundingStory: 'CIMB Bank Berhad Singapore Branch is a prominent commercial bank located at CIMB Plaza on Raffles Place. A key regional pillar of CIMB Group, CIMB Singapore is famous for its zero-fee, high-interest CIMB FastSaver savings account and seamless cross-border financial ecosystem between Singapore and Malaysia.',
    foundingStory_bn: 'সিআইএমবি ব্যাংক সিঙ্গাপুর র‍্যাফেলস প্লেসের সিআইএমবি প্লাজায় অবস্থিত একটি শীর্ষস্থানীয় বাণিজ্যিক ব্যাংক। মালয়েশিয়ার অন্যতম বৃহৎ ব্যাংকিং গ্রুপ সিআইএমবির অঙ্গপ্রতিষ্ঠান হিসেবে এটি কোনো ফি ছাড়া উচ্চ সুদের সিআইএমবি ফাস্টসেভার (CIMB FastSaver) একাউন্টের জন্য অত্যন্ত জনপ্রিয়।',
    category: 'Singapore Full Commercial Bank & High-Interest Savings Leader (MAS Code #7302)',
    category_bn: 'সিঙ্গাপুর বাণিজ্যিক ব্যাংক ও ফাস্টসেভার একাউন্ট লিডার (এমএএস কোড #৭৩০২)',
    coreStrengths: [
      'Flagship CIMB FastSaver Account: No fall-below fee, high interest on first dollar, fully digital',
      'CIMB Clicks Singapore: Instant Singapore-Malaysia ringgit transfer at live interbank rates',
      'Direct FAST & PayNow instant payment network settlement',
      'Comprehensive Islamic Sharia-compliant retail and corporate banking products'
    ],
    coreStrengths_bn: [
      'সিআইএমবি ফাস্টসেভার একাউন্ট: কোনো ব্যালেন্স মেইনটেইন ফি নেই ও প্রথম ডলার থেকেই উচ্চ সুদ',
      'সিআইএমবি ক্লিকস অ্যাপে সিঙ্গাপুর ও মালয়েশিয়ার মধ্যে লাইভ রেটে তাৎক্ষণিক মুদ্রা বিনিময়',
      'FAST এবং PayNow ইনস্ট্যান্ট পেমেন্ট ক্লিয়ারিং সুবিধা',
      'শরীয়াহসম্মত ইসলামিক ব্যাংকিং ও এসএমই ফাইন্যান্সিং সেবা'
    ],
    masBankCode: '7302',
    clearingRoutingFormat: '7302-001 / 7302001 (CIMB Plaza Raffles Place HO)',
    swiftHo: 'CIMBSGSG',
    popularApp: 'CIMB Clicks Singapore App',
    customerCare: '+65 6333 7777 (24/7 Hotline)',
    fastInstantLimit: 'Up to S$200,000 per instant transaction',
    sdicDepositProtection: 'Insured up to S$100,000 per depositor by SDIC',
    paynowSupport: 'Full PayNow (NRIC/FIN, Mobile Number, Corporate UEN)'
  },
  'state-bank-of-india-singapore': {
    established: '1977 (Offshore branch opened in 1977; upgraded to Qualified Full Bank in 2008)',
    foundingStory: 'State Bank of India (SBI) Singapore is a premier Qualified Full Bank (QFB) granted full retail privileges by MAS in 2008. Operating branches in Cecil Street, Little India, Jurong East, and Ang Mo Kio, SBI Singapore is the primary banking channel for the Indian diaspora, offering instant remittance to India in under 60 seconds.',
    foundingStory_bn: 'স্টেট ব্যাংক অব ইন্ডিয়া (SBI Singapore) ১৯৭৭ সাল থেকে পরিচালিত এবং ২০০৮ সালে এমএএস কর্তৃক কোয়ালিফাইড ফুল ব্যাংক (QFB) মর্যাদা লাভ করে। লিটল ইন্ডিয়া, জুরং ইস্ট ও সেসিল স্ট্রিটে অবস্থিত এসবিআই সিঙ্গাপুরে ভারতীয় ও প্রবাসী সম্প্রদায়ের জন্য মাত্র ৬০ সেকেন্ডে ফ্রিতে ভারতে অর্থ স্থানান্তরের প্রধান মাধ্যম।',
    category: 'Singapore Qualified Full Bank & India Remittance Corridor Hub (MAS Code #7524)',
    category_bn: 'সিঙ্গাপুর কিউএফবি ও ভারত রেমিট্যান্স করিডোর ব্যাংক (এমএএস কোড #৭৫২৪)',
    coreStrengths: [
      'Express Remit to India: 60-second instant transfer to any bank in India with zero commission',
      'NRI Home Loans, Rupee NRE/NRO fixed deposits, and SBI Foreign Currency accounts',
      'Shared ATM5 consortium network access across all 200+ partner ATMs in Singapore',
      'Full integration with FAST and Singapore PayNow for real-time domestic clearing'
    ],
    coreStrengths_bn: [
      'এক্সপ্রেস রেমিট: ভারতের যেকোনো ব্যাংকে মাত্র ৬০ সেকেন্ডে কোনো কমিশন ছাড়া তাৎক্ষণিক রেমিট্যান্স',
      'এনআরআই হোম লোন, ভারতীয় রুপি এনআরই/এনআরও ফিক্সড ডিপোজিট ও ফরেন কারেন্সি একাউন্ট',
      'সিঙ্গাপুরের এটিএম৫ (ATM5) নেটওয়ার্কের মাধ্যমে বিনামূল্যে ক্যাশ উত্তোলন সুবিধা',
      'সিঙ্গাপুর অভ্যন্তরীণ পেমেন্টের জন্য FAST ও PayNow নেটওয়ার্কে সরাসরি সংযুক্ত'
    ],
    masBankCode: '7524',
    clearingRoutingFormat: '7524-001 / 7524001 (Cecil Court Head Office)',
    swiftHo: 'SBINSGSG',
    popularApp: 'SBI Singapore Mobile App & YONO SBI SG',
    customerCare: '1800 724 7464 / +65 6724 7464',
    fastInstantLimit: 'Up to S$200,000 per instant transaction',
    sdicDepositProtection: 'Insured up to S$100,000 per depositor by SDIC',
    paynowSupport: 'Full PayNow (NRIC, FIN, Mobile Number, UEN Corporate)'
  },
  'trust-bank-singapore': {
    established: '2022 (Joint venture between Standard Chartered Bank and FairPrice Group)',
    foundingStory: 'Trust Bank Singapore Limited is Singapore’s leading digital full bank (DFB), launched in September 2022 as a partnership between Standard Chartered Bank (60%) and FairPrice Group (40%). Acquiring over 700,000 customers in under two years, Trust Bank integrates grocery rewards, digital savings, zero foreign exchange fees, and seamless Singpass onboarding.',
    foundingStory_bn: 'ট্রাস্ট ব্যাংক সিঙ্গাপুর (Trust Bank) ২০২২ সালে স্ট্যান্ডার্ড চার্টার্ড ব্যাংক (৬০%) এবং ফেয়ারপ্রাইস গ্রুপের (৪০%) যৌথ উদ্যোগে প্রতিষ্ঠিত সিঙ্গাপুরের সবচেয়ে সফল ডিজিটাল ব্যাংক। মাত্র ২ বছরে ৭ লাখেরও বেশি গ্রাহকবিশিষ্ট এ ব্যাংকটি সম্পূর্ণ পেপারলেস ও কোনো ফরেন এক্সচেঞ্জ ফি ছাড়া আন্তর্জাতিক লেনদেনের সুবিধা দেয়।',
    category: 'Singapore Licensed Digital Full Bank (DFB) (MAS Code #9786)',
    category_bn: 'সিঙ্গাপুর অনুমোদিত ডিজিটাল ফুল ব্যাংক - ডিএফবি (এমএএস কোড #৯৭৮৬)',
    coreStrengths: [
      'Instant digital bank account opening in under 3 minutes via Singpass MyInfo',
      'Zero foreign transaction fees and zero card annual fees on Trust credit and debit cards',
      'High-yield savings interest and deep LinkPoints rewards across 450+ FairPrice outlets',
      'Native FAST & PayNow 24/7 instant fund transfer settlement'
    ],
    coreStrengths_bn: [
      'সিংপাস (Singpass MyInfo) ব্যবহার করে মাত্র ৩ মিনিটে সম্পূর্ণ পেপারলেস ডিজিটাল অ্যাকাউন্ট চালু',
      'আন্তর্জাতিক খরচে কোনো ফরেন কারেন্সি ট্রানজাকশন ফি নেই এবং কোনো বার্ষিক ফি নেই',
      'ফেয়ারপ্রাইস সুপারমার্কেট থেকে কেনাকাটায় আকর্ষণীয় লিংক-পয়েন্টস (LinkPoints) ক্যাশব্যাক',
      'FAST ও PayNow প্ল্যাটফর্মে যুক্ত ২৪/৭ রিয়েল-টাইম টাকা পাঠানো ও গ্রহণের সুবিধা'
    ],
    masBankCode: '9786',
    clearingRoutingFormat: '9786-001 / 9786001 (Robinson 77 Central Routing)',
    swiftHo: 'TRUSSGSG',
    popularApp: 'Trust Bank SG App',
    customerCare: '+65 6827 8788 (24/7 In-App Call & Chat)',
    fastInstantLimit: 'Up to S$200,000 per instant transaction',
    sdicDepositProtection: 'Insured up to S$100,000 per depositor by SDIC',
    paynowSupport: 'Seamless PayNow via NRIC/FIN, Mobile Number, and QR scanning'
  },
  'gxs-bank-singapore': {
    established: '2022 (Joint venture between Grab Holdings and Singtel)',
    foundingStory: 'GXS Bank Pte. Ltd. is a digital full bank (DFB) licensed by the Monetary Authority of Singapore, backed by the powerhouse consortium of Grab Holdings (60%) and Singtel (40%). Tailored for gig economy workers, micro-entrepreneurs, and digital natives, GXS provides daily interest crediting on savings and instant revolving credit lines.',
    foundingStory_bn: 'জিএক্সএস ব্যাংক (GXS Bank) ২০২২ সালে দক্ষিণ-পূর্ব এশিয়ার সুপার-অ্যাপ গ্র্যাব (Grab - ৬০%) এবং সিঙ্গাপুর টেলিকম (Singtel - ৪০%)-এর যৌথ উদ্যোগে প্রতিষ্ঠিত এমএএস অনুমোদিত ডিজিটাল ফুল ব্যাংক। এটি গিগ ওয়ার্কার, ফ্রিল্যান্সার ও তরুণদের জন্য প্রতিদিন সুদ জমাকারী সেভিংস ও ইনস্ট্যান্ট লোন প্রদান করে।',
    category: 'Singapore Licensed Digital Full Bank (DFB) (MAS Code #9801)',
    category_bn: 'সিঙ্গাপুর লাইসেন্সপ্রাপ্ত ডিজিটাল ফুল ব্যাংক - ডিএফবি (এমএএস কোড #৯৮০১)',
    coreStrengths: [
      'GXS Savings Pockets with daily interest compounding and zero lock-in or minimum balance penalties',
      'GXS FlexiLoan: Instant unsecured digital credit line with transparent daily interest rates',
      'Seamless ecosystem integration with Grab (GrabPay) and Singtel (Dash) rewards',
      'Real-time FAST and PayNow payments directly inside the app'
    ],
    coreStrengths_bn: [
      'জিএক্সএস সেভিংস পকেটস: প্রতিদিন সুদ জমা হয় এবং কোনো ন্যূনতম ব্যালেন্সের শর্ত নেই',
      'জিএক্সএস ফ্লেক্সিলোয়ান: কোনো জামানত ছাড়া মাত্র কয়েক ক্লিকে তাৎক্ষণিক ব্যক্তিগত ঋণ',
      'গ্র্যাব (GrabPay) ও সিংটেল (Singtel Dash) অ্যাপের সাথে সরাসরি রিওয়ার্ড সংযোগ',
      'FAST ও PayNow-এর মাধ্যমে তাৎক্ষণিক অর্থ স্থানান্তর সুবিধা'
    ],
    masBankCode: '9801',
    clearingRoutingFormat: '9801-001 / 9801001 (Alice@Mediapolis Routing)',
    swiftHo: 'GXSBSSGS',
    popularApp: 'GXS Bank App',
    customerCare: '+65 3105 2055 (24/7 Support)',
    fastInstantLimit: 'Up to S$200,000 per instant transaction',
    sdicDepositProtection: 'Insured up to S$100,000 per depositor by SDIC',
    paynowSupport: 'Full PayNow (NRIC, FIN, Mobile Number, QR payment)'
  },
  'maribank-singapore': {
    established: '2023 (Wholly owned subsidiary of Sea Group - Shopee & Garena)',
    foundingStory: 'MariBank Singapore Private Limited is a digital full bank (DFB) licensed by MAS and wholly owned by Sea Limited (the global tech conglomerate behind Shopee and Garena). Headquartered at Galaxis in Fusionopolis, MariBank provides high-yield daily savings, instant merchant QR financing, and zero-fee business loans for Shopee sellers and retail consumers.',
    foundingStory_bn: 'মারিব্যাংক সিঙ্গাপুর (MariBank) ২০২৩ সালে প্রতিষ্ঠিত এমএএস অনুমোদিত ডিজিটাল ফুল ব্যাংক, যার শতভাগ মালিকানায় রয়েছে শোপি (Shopee) ও গ্যারেনার মূল প্রতিষ্ঠান সি লিমিটেড (Sea Group)। এটি শোপি বিক্রেতা ও সাধারণ গ্রাহকদের জন্য উচ্চ সুদের সঞ্চয়ী হিসাব ও তাৎক্ষণিক ব্যবসা ঋণ প্রদান করে।',
    category: 'Singapore Licensed Digital Full Bank (DFB) (MAS Code #9777)',
    category_bn: 'সিঙ্গাপুর অনুমোদিত ডিজিটাল ফুল ব্যাংক - ডিএফবি (এমএএস কোড #৯৭৭৭)',
    coreStrengths: [
      'Mari Savings Account offering high base interest credited daily with zero minimum balance requirement',
      'Direct checkout and top-up integration inside Shopee app with exclusive cashback vouchers',
      'Mari Business Account providing instant working capital loans for SME merchants',
      '24/7 real-time FAST and PayNow interbank settlement'
    ],
    coreStrengths_bn: [
      'মারি সেভিংস একাউন্ট: প্রতিদিন সুদ জমা এবং কোনো ন্যূনতম ব্যালেন্স মেইনটেইন করার ঝামেলা নেই',
      'শোপি (Shopee) অ্যাপে সরাসরি পেমেন্ট এবং বিশেষ ক্যাশব্যাক ভাউচার সুবিধা',
      'এসএমই ও অনলাইন ব্যবসায়ীদের জন্য মারি বিজনেস ওয়ার্কিং ক্যাপিটাল লোন',
      'FAST এবং PayNow-এর মাধ্যমে দিন-রাত ২৪ ঘণ্টা তাৎক্ষণিক ফান্ড ট্রান্সফার'
    ],
    masBankCode: '9777',
    clearingRoutingFormat: '9777-001 / 9777001 (Galaxis Fusionopolis Routing)',
    swiftHo: 'MRBKSGSG',
    popularApp: 'MariBank App',
    customerCare: '+65 6995 8688 (24/7 Hotline)',
    fastInstantLimit: 'Up to S$200,000 per instant transaction',
    sdicDepositProtection: 'Insured up to S$100,000 per depositor by SDIC',
    paynowSupport: 'Full PayNow (NRIC, FIN, Mobile Number, UEN)'
  },
  'anext-bank-singapore': {
    established: '2022 (Wholly owned digital wholesale banking subsidiary of Ant Group)',
    foundingStory: 'ANEXT Bank Pte. Ltd. is a digital wholesale bank (DWB) licensed by the Monetary Authority of Singapore, founded by Ant Group (affiliate of Alibaba Group). Headquartered at Guoco Tower, ANEXT Bank delivers borderless cross-border digital financial services, multi-currency corporate accounts, and automated micro-loans for regional SMEs.',
    foundingStory_bn: 'অ্যানেক্সট ব্যাংক (ANEXT Bank) ২০২২ সালে আলিবাবা গ্রুপের অ্যান্ট গ্রুপ (Ant Group) কর্তৃক প্রতিষ্ঠিত এমএএস অনুমোদিত ডিজিটাল হোলসেল ব্যাংক। গুওকো টাওয়ারে অবস্থিত এ ব্যাংকটি দক্ষিণ-পূর্ব এশিয়ার ক্ষুদ্র ও মাঝারি ব্যবসায়ী (SME)-দের জন্য আন্তর্জাতিক বাণিজ্য ও মাল্টি-কারেন্সি অ্যাকাউন্ট সেবা দিয়ে থাকে।',
    category: 'Singapore Licensed Digital Wholesale Bank (DWB) (MAS Code #9812)',
    category_bn: 'সিঙ্গাপুর ডিজিটাল হোলসেল ব্যাংক - ডিডব্লিউবি (এমএএস কোড #৯৮১২)',
    coreStrengths: [
      'Remote digital onboarding for regional SMEs across Singapore, China, and Southeast Asia',
      'ANEXT Business Account: Dual-currency SGD/USD accounts with zero minimum initial deposit',
      'ANEXT Programmatic SME Loans powered by AI risk modeling',
      'Direct FAST, MEPS+, and international SWIFT corporate settlement'
    ],
    coreStrengths_bn: [
      'সিঙ্গাপুর ও দক্ষিণ-পূর্ব এশিয়ার যে কোনো দেশ থেকে অনলাইনে ডিজিটাল বিজনেস অ্যাকাউন্ট খোলার সুবিধা',
      'অ্যানেক্সট বিজনেস একাউন্ট: কোনো ইনিশিয়াল ডিপোজিট ছাড়া ডুয়াল কারেন্সি SGD/USD একাউন্ট',
      'এআই অ্যালগরিদমের মাধ্যমে দ্রুততম সময়ে এসএমই ব্যবসায়ীদের জন্য ঋণ অনুমোদন',
      'FAST, MEPS+ এবং সুইফট (SWIFT) নেটওয়ার্কের মাধ্যমে আন্তর্জাতিক পেমেন্ট নিষ্পত্তি'
    ],
    masBankCode: '9812',
    clearingRoutingFormat: '9812-001 / 9812001 (Guoco Tower Central Routing)',
    swiftHo: 'ANXTSGSG',
    popularApp: 'ANEXT Bank Portal & Mobile App',
    customerCare: '+65 6808 6100 (Business Support)',
    fastInstantLimit: 'Up to S$200,000 per transaction via FAST',
    sdicDepositProtection: 'Corporate Wholesale Deposits Subject to MAS Regulatory Ring-fencing',
    paynowSupport: 'Full PayNow Corporate (UEN) & FAST'
  },
  'monetary-authority-of-singapore': {
    established: '1971 (Formed on 1 January 1971 under the Monetary Authority of Singapore Act)',
    foundingStory: 'The Monetary Authority of Singapore (MAS) is Singapore’s central bank and integrated financial regulatory authority. Headquartered on Shenton Way in the Central Business District, MAS oversees all monetary policy, currency issuance (Singapore Dollar - SGD), banking supervision, payment infrastructures (MEPS+, FAST, PayNow), and foreign reserve management.',
    foundingStory_bn: 'মনিটারি অথরিটি অব সিঙ্গাপুর (MAS) হলো সিঙ্গাপুরের কেন্দ্রীয় ব্যাংক এবং সমন্বিত আর্থিক নিয়ন্ত্রক সংস্থা। ১৯৭১ সালে প্রতিষ্ঠিত এ প্রতিষ্ঠানটি দেশটির মুদ্রানীতি, সিঙ্গাপুর ডলার (SGD) ইস্যু, ব্যাংকিং লাইসেন্স প্রদান এবং MEPS+ ও FAST-এর মতো আধুনিক পেমেন্ট অবকাঠামো পরিচালনা করে।',
    category: 'Central Bank & Financial Regulatory Authority (MAS Code #7001)',
    category_bn: 'সিঙ্গাপুরের কেন্দ্রীয় ব্যাংক ও আর্থিক নিয়ন্ত্রক কর্তৃপক্ষ (এমএএস কোড #৭০০১)',
    coreStrengths: [
      'Monetary policy management centered on the trade-weighted Singapore Dollar Nominal Effective Exchange Rate (S-NEER)',
      'Management of Singapore’s official foreign reserves totaling over S$490 billion',
      'Operator and overseer of MEPS+ Real-Time Gross Settlement (RTGS) and national payment standards (SGQR, FAST, PayNow)',
      'Global leader in fintech innovation, regulatory sandboxes, and Project Dunbar CBDC initiatives'
    ],
    coreStrengths_bn: [
      'সিঙ্গাপুর ডলারের আন্তর্জাতিক মান রক্ষায় বাণিজ্য-ভিত্তিক বিনিময় হার (S-NEER) পরিচালনা',
      'সিঙ্গাপুরের ৪৯০ বিলিয়ন ডলারেরও বেশি বিশাল বৈদেশিক মুদ্রার রিজার্ভের সুরক্ষা ও বিনিয়োগ',
      'রিয়েল-টাইম গ্রস সেটেলমেন্ট (MEPS+), FAST, PayNow ও SGQR জাতীয় পেমেন্ট মান নিয়ন্ত্রণ',
      'গ্লোবাল ফিনটেক উদ্ভাবন, সেন্ট্রাল ব্যাংক ডিজিটাল কারেন্সি (CBDC) ও আর্থিক সুরক্ষার নিয়ন্ত্রক'
    ],
    masBankCode: '7001',
    clearingRoutingFormat: '7001-001 / 7001001 (MAS Building Shenton Way HO)',
    swiftHo: 'MASSGSG',
    popularApp: 'MAS Official Regulatory Portal',
    customerCare: '+65 6225 5577',
    fastInstantLimit: 'Wholesale MEPS+ Real-Time Unlimited Settlement',
    sdicDepositProtection: 'Statutory Overseer of Singapore Deposit Insurance Scheme (SDIC)',
    paynowSupport: 'Architect and Regulatory Authority of Singapore PayNow & SGQR Standards'
  }
};

export const singaporeBanksArticles: BankArticle[] = (banksData as Array<{
  id: string;
  name: string;
  name_bn?: string;
  name_hi?: string;
  name_ru?: string;
  bank_code: string;
  swift_code?: string;
  head_office?: string;
  head_office_bn?: string;
  head_office_hi?: string;
  head_office_ru?: string;
  website?: string;
  branch_count?: number;
  established?: string;
  type?: string;
}>).map((bank) => {
  const custom = SG_BANK_KNOWLEDGE[bank.id] || {
    established: bank.established || 'Established in Singapore',
    foundingStory: `${bank.name} is a licensed banking institution operating under the prudential regulatory oversight of the Monetary Authority of Singapore (MAS). Headquartered at ${bank.head_office || 'Singapore'}, it provides comprehensive financial solutions, interbank FAST transfers, and international wire remittances.`,
    foundingStory_bn: `${bank.name_bn || bank.name} সিঙ্গাপুরের মনিটারি অথরিটি (MAS) দ্বারা নিয়ন্ত্রিত একটি নির্ভরযোগ্য ব্যাংকিং প্রতিষ্ঠান। এর প্রধান কার্যালয় ${bank.head_office_bn || bank.head_office || 'সিঙ্গাপুরে'} অবস্থিত এবং এটি অভ্যন্তরীণ FAST পেমেন্ট, PayNow ও আন্তর্জাতিক রেমিট্যান্স সেবা দিয়ে থাকে।`,
    category: `Singapore Financial Institution (MAS Code #${bank.bank_code})`,
    category_bn: `সিঙ্গাপুর ব্যাংকিং প্রতিষ্ঠান (এমএএস কোড #${bank.bank_code})`,
    coreStrengths: [
      `Official 4-digit MAS Clearing Code: ${bank.bank_code}`,
      `Direct clearing via FAST, PayNow, MEPS+ and international SWIFT (${bank.swift_code || 'Available'})`,
      'Insured up to S$100,000 per depositor under the Singapore Deposit Insurance Corporation (SDIC)',
      'Digital banking onboarding supported via Singpass MyInfo national identity'
    ],
    coreStrengths_bn: [
      `সিঙ্গাপুর এমএএস ৪-ডিজিটের অফিশিয়াল ক্লিয়ারিং কোড: ${bank.bank_code}`,
      `FAST, PayNow, MEPS+ এবং আন্তর্জাতিক সুইফট (${bank.swift_code || 'বিদ্যমান'}) ট্রান্সফার সুবিধা`,
      'সিঙ্গাপুর ডিপোজিট ইন্স্যুরেন্স কর্পোরেশন (SDIC) দ্বারা প্রতি আমানতকারীকে সর্বোচ্চ ১,০০,০০০ সিঙ্গাপুর ডলার পর্যন্ত বীমা সুরক্ষা',
      'সিংপাস (Singpass) ডিজিটাল আইডির মাধ্যমে দ্রুত ও নিরাপদ অনলাইন একাউন্ট ওপেনিং'
    ],
    masBankCode: bank.bank_code,
    clearingRoutingFormat: `${bank.bank_code}-001 / ${bank.bank_code}001`,
    swiftHo: bank.swift_code || 'Available',
    popularApp: `${bank.name} Mobile Banking`,
    customerCare: '+65 6000 0000',
    fastInstantLimit: 'Up to S$200,000 per instant transaction',
    sdicDepositProtection: 'Insured up to S$100,000 per depositor by SDIC',
    paynowSupport: 'Supported (NRIC/FIN/UEN/Mobile/QR)'
  };

  const articleTitle = `${bank.name}: MAS Bank Code, 7-Digit Routing Number, FAST, PayNow & SWIFT Transfer Guide (2026)`;
  const articleTitle_bn = `${bank.name_bn || bank.name}: ৪-সংখ্যার ব্যাংক কোড, ৭-ডিজিট রাউটিং নম্বর, FAST, PayNow ও সুইফট কোড নির্দেশিকা (২০২৬)`;

  const overview = `Complete banking guide for ${bank.name} in Singapore (MAS Bank Code: ${bank.bank_code}). Learn how to locate your 7-digit branch routing number (${custom.clearingRoutingFormat}), initiate 24/7 FAST & PayNow instant payments, receive overseas SWIFT telegraphic transfers (${custom.swiftHo}), and explore SDIC S$100,000 deposit protection.`;
  const overview_bn = `${bank.name_bn || bank.name}-এর সম্পূর্ণ ব্যাংকিং গাইড (সিঙ্গাপুর এমএএস ব্যাংক কোড: ${bank.bank_code})। ৭-সংখ্যার ব্রাঞ্চ ক্লিয়ারিং রাউটিং নম্বর বিন্যাস (${custom.clearingRoutingFormat}), ২৪/৭ FAST ও PayNow তাৎক্ষণিক টাকা ট্রান্সফার, আন্তর্জাতিক সুইফট ওয়্যার (${custom.swiftHo}) এবং এসডিআইসি (SDIC) ১ লাখ ডলারের আমানত সুরক্ষা সম্পর্কিত যাবতীয় তথ্য।`;

  const sections = [
    {
      id: 'heritage-overview',
      heading: '1. Institution Profile, Founding Heritage & MAS Regulation',
      heading_bn: '১. ব্যাংকের পরিচিতি, ঐতিহাসিক পটভূমি ও এমএএস (MAS) নিয়ন্ত্রণ',
      content: `${custom.foundingStory}

Under the supervisory framework of the Monetary Authority of Singapore (MAS), ${bank.name} operates with robust capital adequacy and prudential risk management. As a licensed ${bank.type || 'Banking Institution'}, it adheres to strict Anti-Money Laundering (AML) and Counter-Financing of Terrorism (CFT) standards while offering world-class retail, corporate, and private wealth management solutions.`,
      content_bn: `${custom.foundingStory_bn}

মনিটারি অথরিটি অব সিঙ্গাপুর (MAS)-এর কঠোর ব্যাংকিং নীতিমালার অধীনে ${bank.name_bn || bank.name} সর্বোচ্চ আর্থিক নিরাপত্তা ও ঝুঁকি ব্যবস্থাপনার সাথে পরিচালিত হয়। একটি অনুমোদিত ${bank.type || 'ব্যাংকিং প্রতিষ্ঠান'} হিসেবে এটি আন্তর্জাতিক মানদণ্ড বজায় রেখে রিটেইল, করপোরেট এবং উচ্চমানের সম্পদ ব্যবস্থাপনা সেবা প্রদান করছে।`
    },
    {
      id: 'clearing-and-routing-structure',
      heading: '2. 4-Digit MAS Bank Code & 7-Digit Domestic Routing Number Format',
      heading_bn: '২. ৪-ডিজিটের এমএএস ব্যাংক কোড ও ৭-সংখ্যার ব্রাঞ্চ রাউটিং নম্বর বিশ্লেষণ',
      content: `Domestic interbank transfers in Singapore require a standardized 7-digit routing number composed of two critical segments:

1. **MAS Bank Code (4 Digits)**: **${bank.bank_code}** — Uniquely identifies ${bank.name} across the Singapore Automated Clearing House (ACH), FAST, and GIRO payment engines.
2. **Branch Code (3 Digits)**: Specifies the designated physical or digital branch location (e.g., \`001\` for Head Office / Main Branch).

**Example Routing Format**:
- **Bank Code**: \`${bank.bank_code}\`
- **Branch Code (e.g., Head Office)**: \`001\`
- **Combined 7-Digit Clearing Routing Code**: \`${custom.clearingRoutingFormat}\`

When making an electronic transfer via FAST, GIRO, or internet banking, enter the 4-digit bank code \`${bank.bank_code}\`, select the appropriate 3-digit branch code, and then provide your 9-to-12 digit account number.`,
      content_bn: `সিঙ্গাপুরে অভ্যন্তরীণ আন্তঃব্যাংক লেনদেন সম্পন্ন করতে একটি স্ট্যান্ডার্ড ৭-সংখ্যার রাউটিং নম্বর ব্যবহৃত হয়, যা দুটি প্রধান অংশে বিভক্ত:

১. **এমএএস ব্যাংক কোড (৪ ডিজিট)**: **${bank.bank_code}** — যা সিঙ্গাপুরের অটোমেটেড ক্লিয়ারিং হাউস (ACH), FAST এবং GIRO নেটওয়ার্কে ${bank.name_bn || bank.name}-কে চিহ্নিত করে।
২. **শাখা কোড (৩ ডিজিট)**: ব্যাংকের সুনির্দিষ্ট শাখা বা ডিজিটাল হাব নির্দেশ করে (যেমন: হেড অফিসের জন্য \`001\`)।

**রাউটিং কোডের নমুনা গঠন**:
- **ব্যাংক কোড**: \`${bank.bank_code}\`
- **শাখা কোড (যেমন: হেড অফিস)**: \`001\`
- **একত্রিত ৭-সংখ্যার ক্লিয়ারিং রাউটিং কোড**: \`${custom.clearingRoutingFormat}\`

ইন্টারনেট ব্যাংকিং বা মোবাইল অ্যাপে ফান্ড ট্রান্সফারের সময় ব্যাংক কোড \`${bank.bank_code}\`, নির্দিষ্ট শাখার ৩ ডিজিট কোড এবং এরপর আপনার মূল অ্যাকাউন্ট নম্বরটি সঠিকভাবে ইনপুট দিতে হয়।`
    },
    {
      id: 'fast-paynow-payments',
      heading: '3. FAST 24/7 Instant Interbank Transfers & Singapore PayNow',
      heading_bn: '৩. FAST ২৪/৭ রিয়েল-টাইম ফান্ড ট্রান্সফার ও সিঙ্গাপুর PayNow গাইডলাইন',
      content: `${bank.name} provides direct, real-time connectivity to Singapore's state-of-the-art electronic payment networks:

- **FAST (Fast And Secure Transfers)**: Enables instant interbank funds transfers 24/7/365 across participating banks in Singapore. Customers can transfer up to ${custom.fastInstantLimit} with immediate funds availability.
- **PayNow Instant Payments**: Link your ${bank.name} bank account to your Singapore National Registration Identity Card (NRIC), Foreign Identification Number (FIN), or Singapore mobile phone number. Senders can transfer funds instantaneously without needing to know your bank account or branch number.
- **PayNow Corporate & SGQR**: Businesses can link their Unique Entity Number (UEN) to receive seamless instant payments from customers scanning standardized SGQR codes.
- **Cross-Border Retail Payment Linkages**: Direct linkage with Malaysia's DuitNow and Thailand's PromptPay allows instant peer-to-peer cross-border mobile transfers.`,
      content_bn: `${bank.name_bn || bank.name} সিঙ্গাপুরের আধুনিকতম ইলেকট্রনিক পেমেন্ট নেটওয়ার্কগুলোর সাথে সার্বক্ষণিক সংযুক্ত:

- **FAST (Fast And Secure Transfers)**: সিঙ্গাপুরের যেকোনো ব্যাংকে দিন-রাত ২৪ ঘণ্টা তাৎক্ষণিকভাবে টাকা পাঠানোর জাতীয় নেটওয়ার্ক। প্রতি লেনদেনে সর্বোচ্চ ${custom.fastInstantLimit} পর্যন্ত নিমেষেই ট্রান্সফার করা যায়।
- **PayNow ইনস্ট্যান্ট পেমেন্ট**: আপনার ব্যাংক অ্যাকাউন্টটি সিঙ্গাপুর এনআরআইসি (NRIC), এফআইএন (FIN) অথবা সিঙ্গাপুরের মোবাইল নম্বরের সাথে লিঙ্ক করে একাউন্ট নম্বর ছাড়াই সঙ্গে সঙ্গে টাকা আদান-প্রদান করা যায়।
- **PayNow কর্পোরেট ও SGQR**: ব্যবসায়িক প্রতিষ্ঠানসমূহ তাদের ইউনিক এন্টিটি নম্বর (UEN) লিঙ্ক করে SGQR কোডের মাধ্যমে গ্রাহকদের থেকে সরাসরি পেমেন্ট গ্রহণ করতে পারে।
- **ক্রস-বর্ডার পেমেন্ট সংযোগ**: মালয়েশিয়ার DuitNow এবং থাইল্যান্ডের PromptPay-এর সাথে সরাসরি মোবাইল নম্বরের মাধ্যমে ইনস্ট্যান্ট ক্রস-বর্ডার রেমিট্যান্স লেনদেন সমর্থিত।`
    },
    {
      id: 'international-swift-wire',
      heading: '4. International SWIFT / BIC Telegraphic Wire Transfers & Remittance',
      heading_bn: '৪. আন্তর্জাতিক সুইফট (SWIFT/BIC) ওয়্যার ট্রান্সফার ও রেমিট্যান্স নির্দেশিকা',
      content: `For overseas inward and outward telegraphic wire transfers (TT), ${bank.name} utilizes the global SWIFT network. 

**Essential Wire Transfer Credentials for ${bank.name}**:
- **Bank Name**: ${bank.name}
- **SWIFT / BIC Code (Head Office)**: \`${custom.swiftHo}\`
- **Clearing Bank Code**: \`${bank.bank_code}\`
- **Head Office Address**: ${bank.head_office || 'Singapore'}
- **Beneficiary Account Number**: Your 9-to-12 digit account number
- **Beneficiary Full Name & Residential Address in Singapore**: As registered with the bank

*Pro Tip*: For large commercial wire transfers exceeding S$500,000, high-value real-time gross settlement is processed securely via MEPS+ (MAS Electronic Payment System).`,
      content_bn: `বিদেশ থেকে রেমিট্যান্স গ্রহণ বা আন্তর্জাতিক ওয়্যার ট্রান্সফার (TT) পাঠানোর জন্য ${bank.name_bn || bank.name} বিশ্বমানের সুইফট (SWIFT) নেটওয়ার্ক ব্যবহার করে।

**আন্তর্জাতিক ওয়্যার ট্রান্সফারের জন্য প্রয়োজনীয় তথ্য**:
- **ব্যাংকের পূর্ণ নাম**: ${bank.name} (${bank.name_bn || ''})
- **সুইফট কোড (SWIFT / BIC Code)**: \`${custom.swiftHo}\`
- **এমএএস ব্যাংক কোড**: \`${bank.bank_code}\`
- **হেড অফিসের ঠিকানা**: ${bank.head_office_bn || bank.head_office || 'সিঙ্গাপুর'}
- **গ্রাহকের অ্যাকাউন্ট নম্বর**: আপনার ৯ থেকে ১২ সংখ্যার পূর্ণাঙ্গ ব্যাংক হিসাব নম্বর
- **অ্যাকাউন্টধারীর নাম ও সিঙ্গাপুরের ঠিকানা**: ব্যাংকে যেভাবে নিবন্ধিত রয়েছে

*পরামর্শ*: ৫ লাখ সিঙ্গাপুর ডলারের বেশি বড় বাণিজ্যিক লেনদেনের ক্ষেত্রে সেন্ট্রাল ব্যাংক পরিচালিত MEPS+ (MAS Electronic Payment System)-এর মাধ্যমে নিরাপদ রিয়েল-টাইম সেটেলমেন্ট সম্পন্ন হয়।`
    },
    {
      id: 'sdic-deposit-insurance',
      heading: '5. SDIC Deposit Insurance & Customer Security Safeguards',
      heading_bn: '৫. এসডিআইসি (SDIC) ১ লাখ ডলারের আমানত সুরক্ষা ও নিরাপত্তা গ্যারান্টি',
      content: `Under the Singapore Deposit Insurance Scheme administered by the Singapore Deposit Insurance Corporation (SDIC):

- **Statutory Deposit Guarantee**: Singapore Dollar deposits held with ${bank.name} are insured up to **S$100,000** per depositor per Scheme member by law (upgraded under statutory framework).
- **Covered Accounts**: Savings accounts, current accounts, and fixed deposit placements in Singapore Dollars (SGD) are automatically protected without requiring any enrollment fees.
- **Digital Banking Security Safeguards**: Multi-factor authentication via Digital Token, Singpass Face Verification, biometric login, and dynamic transaction cooling-off periods for newly linked devices ensure maximum anti-scam protection.`,
      content_bn: `সিঙ্গাপুর ডিপোজিট ইন্স্যুরেন্স কর্পোরেশন (SDIC) পরিচালিত জাতীয় আমানত সুরক্ষা আইনের অধীনে:

- **আইনি আমানত বীমা সুরক্ষা**: ${bank.name_bn || bank.name}-এ রক্ষিত সিঙ্গাপুর ডলার আমানত আইনত প্রতি আমানতকারীর জন্য সর্বোচ্চ **১,০০,০০০ সিঙ্গাপুর ডলার (S$100,000)** পর্যন্ত শতভাগ সুরক্ষিত।
- **সুরক্ষিত অ্যাকাউন্টসমূহ**: সাধারণ সঞ্চয়ী হিসাব, চলতি হিসাব এবং সিঙ্গাপুর ডলারের ফিক্সড ডিপোজিটসমূহ কোনো অতিরিক্ত ফি ছাড়াই স্বয়ংক্রিয়ভাবে এই বীমার আওতাভুক্ত।
- **ডিজিটাল অ্যান্টি-স্ক্যাম নিরাপত্তা**: ডিজিটাল সিকিউরিটি টোকেন, সিংপাস ফেস ভেরিফিকেশন, বায়োমেট্রিক অথেন্টিকেশন এবং নতুন ডিভাইসের জন্য ট্রানজাকশন কুলিং-অফ পিরিয়ডের মাধ্যমে সর্বোচ্চ ব্যাংকিং নিরাপত্তা নিশ্চিত করা হয়।`
    }
  ];

  const quick_stats = [
    { label: 'MAS Bank Code', value: bank.bank_code, icon: 'Hash' },
    { label: 'Branch Routing Format', value: custom.clearingRoutingFormat, icon: 'GitBranch' },
    { label: 'SWIFT / BIC (HO)', value: custom.swiftHo, icon: 'Globe' },
    { label: 'FAST / PayNow Limit', value: custom.fastInstantLimit, icon: 'Zap' },
    { label: 'SDIC Protection', value: 'Insured up to S$100,000', icon: 'ShieldCheck' },
    { label: 'Mobile Banking App', value: custom.popularApp, icon: 'Smartphone' }
  ];

  const faqs = [
    {
      question: `What is the MAS Bank Code for ${bank.name} in Singapore?`,
      question_bn: `সিঙ্গাপুরে ${bank.name_bn || bank.name}-এর ৪-ডিজিটের এমএএস ব্যাংক কোড কোনটি?`,
      answer: `The official MAS Bank Code for ${bank.name} is ${bank.bank_code}. This 4-digit code is required for all domestic FAST, PayNow, and GIRO interbank fund transfers across Singapore.`,
      answer_bn: `${bank.name_bn || bank.name}-এর অফিশিয়াল ৪-সংখ্যার এমএএস ব্যাংক কোড হলো ${bank.bank_code}। সিঙ্গাপুরের যেকোনো ব্যাংক থেকে FAST, PayNow অথবা GIRO-এর মাধ্যমে টাকা পাঠাতে এই কোডটি প্রয়োজন হয়।`
    },
    {
      question: `How do I find the 7-digit branch routing number for ${bank.name}?`,
      question_bn: `${bank.name_bn || bank.name}-এর ৭-সংখ্যার ব্রাঞ্চ রাউটিং কোড কীভাবে গঠিত হয়?`,
      answer: `The 7-digit routing number combines the 4-digit bank code (${bank.bank_code}) and the 3-digit branch code (e.g., 001 for Head Office), creating the format ${custom.clearingRoutingFormat}.`,
      answer_bn: `৭-সংখ্যার রাউটিং নম্বরটি ৪ ডিজিটের ব্যাংক কোড (${bank.bank_code}) এবং ৩ ডিজিটের শাখা কোড (যেমন: হেড অফিসের জন্য 001) একত্রিত করে গঠিত হয় (যেমন: ${custom.clearingRoutingFormat})।`
    },
    {
      question: `How does FAST and PayNow work with ${bank.name}?`,
      question_bn: `${bank.name_bn || bank.name}-এ FAST এবং PayNow কীভাবে কাজ করে?`,
      answer: `${bank.name} supports FAST 24/7 instant interbank transfers up to ${custom.fastInstantLimit}. PayNow allows users to transfer and receive funds instantly using their Singapore NRIC, FIN, or mobile phone number.`,
      answer_bn: `${bank.name_bn || bank.name}-এ FAST ২৪/৭ রিয়েল-টাইমে তাৎক্ষণিক অর্থ স্থানান্তর সমর্থন করে। PayNow-এর মাধ্যমে ব্যাংক অ্যাকাউন্ট নম্বর ছাড়াই শুধু NRIC, FIN অথবা মোবাইল নম্বর ব্যবহার করে সঙ্গে সঙ্গে টাকা লেনদেন করা যায়।`
    },
    {
      question: `What is the SWIFT code for international wire transfers to ${bank.name}?`,
      question_bn: `বিদেশ থেকে রেমিট্যান্স বা ওয়্যার ট্রান্সফারের জন্য ${bank.name_bn || bank.name}-এর সুইফট কোড কোনটি?`,
      answer: `The primary international SWIFT / BIC code for ${bank.name} is ${custom.swiftHo}. Senders must include this code along with the beneficiary account number and Singapore address.`,
      answer_bn: `${bank.name_bn || bank.name}-এর আন্তর্জাতিক প্রধান সুইফট কোড হলো ${custom.swiftHo}। আন্তর্জাতিক ওয়্যার ট্রান্সফার বা রেমিট্যান্স পাঠানোর সময় এই কোড এবং সঠিক হিসাব নম্বর ব্যবহার করতে হবে।`
    },
    {
      question: `Are deposits at ${bank.name} insured by the Singapore Government?`,
      question_bn: `${bank.name_bn || bank.name}-এর আমানত কি সিঙ্গাপুর সরকারের এসডিআইসি (SDIC) দ্বারা সুরক্ষিত?`,
      answer: `Yes. Singapore Dollar deposits placed with ${bank.name} are insured up to S$100,000 per depositor by the Singapore Deposit Insurance Corporation (SDIC) under statutory laws.`,
      answer_bn: `হ্যাঁ, ${bank.name_bn || bank.name}-এ রক্ষিত সিঙ্গাপুর ডলার আমানত সিঙ্গাপুর ডিপোজিট ইন্স্যুরেন্স কর্পোরেশন (SDIC) আইন অনুযায়ী প্রতি আমানতকারীর জন্য সর্বোচ্চ ১,০০,০০০ সিঙ্গাপুর ডলার পর্যন্ত শতভাগ সুরক্ষিত।`
    }
  ];

  return {
    slug: `${bank.id}-bank-code-swift-routing-singapore`,
    id: bank.id, bank_id: bank.id,
    
    
    country: 'sg',
    
    
    
    title: articleTitle,
    title_bn: articleTitle_bn, subtitle: articleTitle, subtitle_bn: articleTitle_bn,
    overview,
    overview_bn,
    sections,
    quick_stats,
    faqs,
    /* relatedBankSlugs: (banksData as Array<{ id: string }>)
      .filter((b) => b.id !== bank.id)
      .slice(0, 4)
      .map((b) => `${b.id}-bank-code-swift-routing-singapore`), */
    meta_title: `${bank.name} MAS Code ${bank.bank_code}, 7-Digit Routing, FAST & SWIFT Singapore (2026)`,
    // meta_title_bn: `${bank.name_bn || bank.name} এমএএস কোড ${bank.bank_code}, ৭-ডিজিট রাউটিং, FAST ও সুইফট কোড (২০২৬)`,
    meta_description: `Official guide for ${bank.name} (MAS Bank Code: ${bank.bank_code}) in Singapore. 7-digit branch routing formats, FAST 24/7 instant transfers, PayNow, MEPS+, SDIC S$100,000 protection and SWIFT ${custom.swiftHo}.`,
    // meta_description_bn: `${bank.name_bn || bank.name}-এর অফিসিয়াল গাইড (এমএএস কোড: ${bank.bank_code})। ৭-সংখ্যার ব্রাঞ্চ রাউটিং কোড, FAST ২৪/৭ পেমেন্ট, PayNow, SDIC ১ লাখ ডলারের আমানত বীমা ও আন্তর্জাতিক সুইফট ${custom.swiftHo}।`,
    // canonicalUrl: `https://youtubemonetizationchecker.online/articles/${bank.id}-bank-code-swift-routing-singapore`,
    published_date: '2026-01-15',
    last_updated: '2026-09-08',
    read_time: "7 min read",
    author: 'Editorial Banking Intelligence Desk Singapore'
  };
});
