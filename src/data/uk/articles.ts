import { BankArticle } from '../../types';
import banksData from './banks.json';

/**
 * Authoritative Editorial Knowledge Base & Comprehensive Guide for UK Clearing & Commercial Banks
 * Covers 6-Digit Sort Codes (XX-XX-XX), Bacs, Faster Payments System (FPS), CHAPS, UK IBAN, SWIFT/BIC, and FSCS Protection (£85,000).
 */

interface UkBankKnowledge {
  established: string;
  foundingStory: string;
  foundingStory_bn: string;
  category: string;
  category_bn: string;
  coreStrengths: string[];
  coreStrengths_bn: string[];
  sortCodeMain: string;
  sortCodeFormatted: string;
  swiftHo: string;
  ibanExample: string;
  popularApp: string;
  customerCare: string;
  fpsLimit: string;
  chapsCutoff: string;
  fscsCoverage: string;
}

const UK_BANK_KNOWLEDGE: Record<string, UkBankKnowledge> = {
  'barclays-bank-uk': {
    established: '1690 (Founded by John Freame and Thomas Gould in Lombard Street, London)',
    foundingStory: 'Barclays Bank UK PLC is one of the oldest and largest British universal banks, with origins dating back over 330 years to London’s historic goldsmith banking traditions. Barclays introduced the world’s very first automated cash machine (ATM) in Enfield in 1967 and launched Barclaycard, the UK’s first credit card. Today, Barclays serves over 24 million customers across the UK.',
    foundingStory_bn: 'বার্কলেস ব্যাংক ইউকে পিএলসি (Barclays Bank UK PLC) যুক্তরাজ্যের অন্যতম প্রাচীন ও বৃহত্তম সার্বজনীন ব্যাংক, যার সূচনা ৩৩০ বছরেরও বেশি আগে ১৬৯০ সালে লন্ডনের গোল্ডস্মিথ ব্যাংকিং ঐতিহ্যের মাধ্যমে। ১৯৬৭ সালে এনফিল্ডে বিশ্বের সর্বপ্রথম এটিএম মেশিন স্থাপন এবং যুক্তরাজ্যের প্রথম ক্রেডিট কার্ড (বার্কলেকার্ড) চালু করে বার্কলেস ইতিহাস তৈরি করেছিল।',
    category: 'UK Clearing Bank (PRA/FCA Regulated #759676)',
    category_bn: 'যুক্তরাজ্যের প্রধান ক্লিয়ারিং ব্যাংক (PRA/FCA লাইসেন্স #৭৫৯৬৭৬)',
    coreStrengths: [
      'Extensive UK network with premier digital banking and 1,000+ branch and pop-up locations',
      'Pioneered the world’s first ATM and Barclaycard payment technology ecosystem',
      'Instant Faster Payments (FPS) with direct Bank of England RTGS settlement',
      'Global multi-currency accounts and corporate investment banking reach'
    ],
    coreStrengths_bn: [
      'যুক্তরাজ্যজুড়ে বিস্তৃত শাখা নেটওয়ার্ক ও আধুনিক মোবাইল ব্যাংকিং',
      'বিশ্বের প্রথম এটিএম ও বার্কলেকার্ড পেমেন্ট প্রযুক্তির উদ্ভাবক',
      'তাত্ক্ষণিক ফাস্টার পেমেন্টস (FPS) ও ব্যাংক অব ইংল্যান্ড সরাসরি সেটেলমেন্ট',
      'আন্তর্জাতিক মাল্টি-কারেন্সি অ্যাকাউন্ট ও গ্লোবাল ট্রেজারি সুবিধা'
    ],
    sortCodeMain: '200000',
    sortCodeFormatted: '20-00-00',
    swiftHo: 'BARCGB22',
    ibanExample: 'GB29 BARC 2000 0012 3456 78',
    popularApp: 'Barclays UK App (iOS & Android)',
    customerCare: '0345 734 5345 (International: +44 24 7684 2100)',
    fpsLimit: 'Up to £250,000 per transaction (instant 24/7)',
    chapsCutoff: '15:30 UK Time for same-day high-value settlement',
    fscsCoverage: '£85,000 per eligible claimant (FSCS / PRA FRN 759676)'
  },
  'hsbc-uk': {
    established: '1865 (Hongkong and Shanghai Banking Corporation, UK Ring-Fenced in Birmingham)',
    foundingStory: 'HSBC UK Bank plc is the British retail and commercial banking arm of HSBC Holdings plc, one of the world’s largest banking groups with assets exceeding $3 trillion. Headquartered at 1 Centenary Square in Birmingham, HSBC UK serves over 14 million domestic personal and business clients, providing unmatched global remittance links across Asia, Europe, and North America.',
    foundingStory_bn: 'এইচএসবিসি ইউকে ব্যাংক (HSBC UK Bank plc) বিশ্বের শীর্ষস্থানীয় ফিন্যান্সিয়াল গ্রুপ এইচএসবিসি হোল্ডিংস-এর যুক্তরাজ্যভিত্তিক রিটেইল ব্যাংকিং শাখা, যার সম্পদ ৩ ট্রিলিয়ন ডলারের বেশি। বার্মিংহামে প্রধান কার্যালয় অবস্থিত এই ব্যাংকটি ১ কোটি ৪০ লক্ষের বেশি ব্রিটিশ গ্রাহককে আধুনিক ব্যাংকিং ও বিশ্বব্যাপী আন্তর্জাতিক রেমিট্যান্স সেবা দিয়ে আসছে।',
    category: 'UK Clearing Bank (PRA/FCA Regulated #765112)',
    category_bn: 'যুক্তরাজ্যের প্রধান ক্লিয়ারিং ব্যাংক (PRA/FCA লাইসেন্স #৭৬৫১১২)',
    coreStrengths: [
      'Global Money Account allowing multi-currency holding with zero foreign transaction fees',
      'Direct clearing member of Bacs, CHAPS, and Faster Payments systems',
      'Premier and Jade wealth management with dedicated international banking corridors',
      'Extensive UK branch footprint and advanced voice/biometric biometric app security'
    ],
    coreStrengths_bn: [
      'গ্লোবাল মানি অ্যাকাউন্টের মাধ্যমে একাধিক মুদ্রায় লেনদেন ও কোনো ফি ছাড়া কারেন্সি কনভার্শন',
      'ব্যাক্স (Bacs), চ্যাপস (CHAPS) ও ফাস্টার পেমেন্টসের সরাসরি ক্লিয়ারিং মেম্বার',
      'প্রিমিয়ার ওয়েলথ ম্যানেজমেন্ট ও আন্তর্জাতিক করিডোর রেমিট্যান্স সুবিধা',
      'বায়োমেট্রিক ও ভয়েস আইডি সিকিউরিটি সমৃদ্ধ মোবাইল ব্যাংকিং'
    ],
    sortCodeMain: '400000',
    sortCodeFormatted: '40-00-00',
    swiftHo: 'MIDLGB22',
    ibanExample: 'GB44 MIDL 4000 0087 6543 21',
    popularApp: 'HSBC UK Mobile Banking',
    customerCare: '0345 740 4404 (International: +44 121 214 5404)',
    fpsLimit: 'Up to £25,000 via mobile app / £50,000 online per day',
    chapsCutoff: '15:45 UK Time for guaranteed same-day wire',
    fscsCoverage: '£85,000 per depositor under FSCS (PRA FRN 765112)'
  },
  'lloyds-bank': {
    established: '1765 (Founded by John Taylor and Sampson Lloyd II in Birmingham)',
    foundingStory: 'Lloyds Bank plc is one of the historic "Big Four" British clearing banks and the flagship retail brand of Lloyds Banking Group, the largest domestic retail mortgage and current account provider in the United Kingdom. Headquartered at 25 Gresham Street in London, Lloyds Bank manages trillions in UK personal deposits and commercial financing.',
    foundingStory_bn: 'লয়েডস ব্যাংক পিএলসি (Lloyds Bank plc) যুক্তরাজ্যের ঐতিহাসিক "বিগ ফোর" ব্যাংকের অন্যতম এবং বৃহত্তম রিটেইল মর্টগেজ ও কারেন্ট অ্যাকাউন্ট প্রদানকারী প্রতিষ্ঠান। ১৭৬৫ সালে বার্মিংহামে প্রতিষ্ঠিত এই ব্যাংকটি লন্ডনের গ্রেশাম স্ট্রিটে প্রধান কার্যালয় নিয়ে ব্রিটিশ অর্থনীতিতে গুরুত্বপূর্ণ ভূমিকা পালন করে চলেছে।',
    category: 'UK Clearing Bank (PRA/FCA Regulated #119278)',
    category_bn: 'যুক্তরাজ্যের প্রধান ক্লিয়ারিং ব্যাংক (PRA/FCA লাইসেন্স #১১৯২৭৮)',
    coreStrengths: [
      'Largest retail provider of mortgages and personal current accounts in Britain',
      'Club Lloyds lifestyle perks, cinema vouchers, and preferential savings rates',
      'Seamless multi-channel branch, online, telephone, and mobile banking ecosystem',
      'Full direct integration with Bank of England CHAPS and Faster Payments RTGS'
    ],
    coreStrengths_bn: [
      'যুক্তরাজ্যের সর্ববৃহৎ মর্টগেজ ও পার্সোনাল ব্যাংকিং সেবাদাতা',
      'ক্লাব লয়েডস অ্যাকাউন্টের মাধ্যমে সিনেমা টিকেট, ম্যাগাজিন ও ক্যাশব্যাক সুবিধা',
      'দেশজুড়ে বিস্তৃত শাখা ও আধুনিক মোবাইল ব্যাংকিং প্ল্যাটফর্ম',
      'ব্যাংক অব ইংল্যান্ড চ্যাপস ও ফাস্টার পেমেন্টসে সরাসরি ক্লিয়ারিং সুবিধা'
    ],
    sortCodeMain: '300000',
    sortCodeFormatted: '30-00-00',
    swiftHo: 'LOYDGB2L',
    ibanExample: 'GB21 LOYD 3000 0012 3456 78',
    popularApp: 'Lloyds Bank Mobile Banking',
    customerCare: '0345 300 0000 (International: +44 1733 347 007)',
    fpsLimit: 'Up to £25,000 per payment via app (instant)',
    chapsCutoff: '16:00 UK Time for same-day UK settlement',
    fscsCoverage: '£85,000 under Lloyds Banking Group FSCS registration (#119278)'
  },
  'natwest-bank': {
    established: '1968 (National Provincial Bank founded 1833 & Westminster Bank founded 1836)',
    foundingStory: 'National Westminster Bank Plc (NatWest) is a core pillar of the NatWest Group (formerly Royal Bank of Scotland Group), headquartered in Bishopsgate, London. NatWest provides comprehensive consumer banking, commercial lending, and digital innovation to over 19 million clients across England, Wales, and international markets.',
    foundingStory_bn: 'ন্যাশনাল ওয়েস্টমিনস্টার ব্যাংক (NatWest) যুক্তরাজ্যের শীর্ষস্থানীয় ব্যাংকিং প্রতিষ্ঠানগুলোর অন্যতম, যার মূল শিকড় ১৮৩৩ ও ১৮৩৬ সালের ঐতিহ্যবাহী ব্যাংকে বিস্তৃত। লন্ডনের বিশপসগেটে অবস্থিত এই ব্যাংকটি যুক্তরাজ্যজুড়ে কোটি কোটি গ্রাহককে ব্যক্তিগত, বাণিজ্যিক ও ডিজিটাল ব্যাংকিং সেবা প্রদান করে।',
    category: 'UK Retail & Clearing Bank (PRA/FCA Regulated #121878)',
    category_bn: 'যুক্তরাজ্যের প্রধান ক্লিয়ারিং ব্যাংক (PRA/FCA লাইসেন্স #১২১৮৭৮)',
    coreStrengths: [
      'NatWest Reward current accounts with monthly cashback on household utility direct debits',
      'GetCash feature enabling emergency cash withdrawals from ATMs without a physical debit card',
      'Direct participant in CHAPS, Bacs, and Faster Payments Schemes',
      'Extensive presence across England and Wales with dedicated business accelerators'
    ],
    coreStrengths_bn: [
      'রিওয়ার্ড অ্যাকাউন্টের মাধ্যমে ইউটিলিটি বিল পেমেন্টে মাসিক ক্যাশব্যাক সুবিধা',
      'গেটক্যাশ (GetCash) সুবিধার মাধ্যমে কার্ড ছাড়াই এটিএম থেকে জরুরি নগদ উত্তোলনের সুযোগ',
      'ব্যাক্স ও ফাস্টার পেমেন্টসের পূর্ণ ক্লিয়ারিং সুবিধা',
      'ইংল্যান্ড ও ওয়েলস জুড়ে বিস্তৃত শাখা ও আধুনিক ব্যবসায়িক সহায়তা'
    ],
    sortCodeMain: '600001',
    sortCodeFormatted: '60-00-01',
    swiftHo: 'NWBKGB2L',
    ibanExample: 'GB60 NWBK 6000 0112 3456 78',
    popularApp: 'NatWest Mobile Banking App',
    customerCare: '0345 788 8444 (International: +44 345 788 8444)',
    fpsLimit: 'Up to £20,000 per transaction via mobile app',
    chapsCutoff: '15:30 UK Time for guaranteed same-day transfer',
    fscsCoverage: '£85,000 per depositor under NatWest FSCS scheme (#121878)'
  },
  'santander-uk': {
    established: '1988 (Abbey National founded 1849, acquired by Banco Santander in 2004)',
    foundingStory: 'Santander UK plc is a major British commercial bank and subsidiary of Spain’s Banco Santander S.A. Originating from the historic Abbey National Building Society (the first building society to convert to a bank in 1989), Santander UK manages over 14 million customers with innovative 1|2|3 cashback current accounts and prominent mortgage financing.',
    foundingStory_bn: 'সান্তান্দার ইউকে পিএলসি (Santander UK plc) যুক্তরাজ্যের অন্যতম শীর্ষ বাণিজ্যিক ব্যাংক, যা স্পেনের বিশ্বখ্যাত ব্যানক সান্তান্দার গ্রুপের অধীন পরিচালিত। ঐতিহাসিক অ্যাবে ন্যাশনাল বিল্ডিং সোসাইটি থেকে রূপান্তরিত হয়ে এটি বর্তমানে যুক্তরাজ্যে ১ কোটি ৪০ লক্ষের বেশি গ্রাহককে ১|২|৩ ক্যাশব্যাক অ্যাকাউন্ট ও মর্টগেজ সুবিধা প্রদান করে।',
    category: 'UK Retail Bank (PRA/FCA Regulated #106054)',
    category_bn: 'যুক্তরাজ্যের শীর্ষ রিটেইল ব্যাংক (PRA/FCA লাইসেন্স #১০৬০৫৪)',
    coreStrengths: [
      'Market-defining 1|2|3 current account product family offering interest and utility bill cashback',
      'Direct access to Banco Santander global banking networks in Europe and the Americas',
      'Leading competitive residential and buy-to-let mortgage origination',
      'Full Bacs, CHAPS, Faster Payments, and Confirmation of Payee (CoP) verification'
    ],
    coreStrengths_bn: [
      'জনপ্রিয় ১|২|৩ কারেন্ট অ্যাকাউন্ট এবং ইউটিলিটি বিলে নিশ্চিত ক্যাশব্যাক',
      'ইউরোপ ও আমেরিকায় অবস্থিত সান্তান্দার গ্লোবাল নেটওয়ার্কে দ্রুত ফান্ড ট্রান্সফার',
      'গৃহনির্মাণ ঋণ ও বিনিয়োগকারী মর্টগেজের শীর্ষ প্রতিষ্ঠান',
      'ব্যাক্স, চ্যাপস ও ফাস্টার পেমেন্টসের নির্ভরযোগ্য ক্লিয়ারিং ব্যবস্থা'
    ],
    sortCodeMain: '090126',
    sortCodeFormatted: '09-01-26',
    swiftHo: 'ABBYGB2L',
    ibanExample: 'GB34 ABBY 0901 2612 3456 78',
    popularApp: 'Santander UK Mobile Banking',
    customerCare: '0800 9123 123 (International: +44 1908 438 000)',
    fpsLimit: 'Up to £25,000 per payment (instant 24/7)',
    chapsCutoff: '15:45 UK Time for same-day high-value payments',
    fscsCoverage: '£85,000 per depositor under Santander UK FSCS license (#106054)'
  },
  'royal-bank-of-scotland': {
    established: '1727 (Established by Royal Charter in Edinburgh, Scotland)',
    foundingStory: 'The Royal Bank of Scotland plc (RBS) was founded by Royal Charter in Edinburgh in 1727 and is historically credited with inventing the modern banking overdraft in 1728. As part of NatWest Group, RBS remains one of the three Scottish commercial banks authorized to issue its own Scottish bank sterling banknotes.',
    foundingStory_bn: 'রয়্যাল ব্যাংক অব স্কটল্যান্ড পিএলসি (RBS) ১৭২৭ সালে এডিনবরায় রাজকীয় সনদের (Royal Charter) মাধ্যমে প্রতিষ্ঠিত হয় এবং ১৭২৮ সালে আধুনিক ব্যাংকিং ওভারড্রাফ্ট উদ্ভাবন করে বিশ্বব্যাংকিংয়ে বিপ্লব ঘটায়। ন্যাটওয়েস্ট গ্রুপের অংশ হিসেবে এটি নিজস্ব স্কটিশ পাউন্ড ব্যাংকনোট ছাপানোর অনুমোদনপ্রাপ্ত শীর্ষ প্রতিষ্ঠান।',
    category: 'Scottish Commercial Bank & Banknote Issuer (PRA #114724)',
    category_bn: 'স্কটিশ ক্লিয়ারিং ব্যাংক ও নোট ইস্যুকারী প্রতিষ্ঠান (PRA লাইসেন্স #১১৪৭২৪)',
    coreStrengths: [
      'Authorized issuer of Scottish sterling banknotes alongside Bank of England currency',
      'Inventor of the modern banking overdraft facility (first introduced in 1728)',
      'Digital banking integration with NatWest Group security infrastructure',
      'Direct participant in Scottish and UK-wide Faster Payments and CHAPS clearing'
    ],
    coreStrengths_bn: [
      'ইংল্যান্ডের পাউন্ডের সমমূল্যে নিজস্ব স্কটিশ পাউন্ড নোট ইস্যু করার রাজকীয় ক্ষমতা',
      '১৭২৮ সালে সর্বপ্রথম ব্যাংকিং ওভারড্রাফ্ট ব্যবস্থার ঐতিহাসিক উদ্ভাবক',
      'ন্যাটওয়েস্ট গ্রুপের শক্তিশালী ডিজিটাল প্ল্যাটফর্ম ও বায়োমেট্রিক নিরাপত্তা',
      'যুক্তরাজ্যজুড়ে তাত্ক্ষণিক ফাস্টার পেমেন্টস ও ক্লিয়ারিং সুবিধা'
    ],
    sortCodeMain: '830425',
    sortCodeFormatted: '83-04-25',
    swiftHo: 'RBOSGB2L',
    ibanExample: 'GB72 RBOS 8304 2512 3456 78',
    popularApp: 'Royal Bank of Scotland App',
    customerCare: '03457 242 424 (International: +44 131 549 8888)',
    fpsLimit: 'Up to £20,000 per transaction via mobile',
    chapsCutoff: '15:30 UK Time for same-day CHAPS payment',
    fscsCoverage: '£85,000 per customer under RBS FSCS registration (#114724)'
  },
  'standard-chartered-uk': {
    established: '1969 (Chartered Bank founded 1853 & Standard Bank founded 1862)',
    foundingStory: 'Standard Chartered PLC is a British multinational banking and financial services company headquartered in Basinghall Avenue, London. While headquartered in the UK financial hub, Standard Chartered specializes in cross-border trade finance, corporate investment, and treasury services bridging the UK with Asia, Africa, and the Middle East.',
    foundingStory_bn: 'স্ট্যান্ডার্ড চার্টার্ড পিএলসি (Standard Chartered PLC) লন্ডনের বেসিংহল অ্যাভিনিউতে সদর দপ্তর অবস্থিত একটি শীর্ষস্থানীয় ব্রিটিশ বহুজাতিক ব্যাংক। ১৮৫৩ ও ১৮৬২ সালের দুটি ঐতিহাসিক ব্যাংকের সমন্বয়ে গঠিত এই ব্যাংকটি এশিয়া, আফ্রিকা ও মধ্যপ্রাচ্যের সাথে যুক্তরাজ্যের আন্তর্জাতিক বাণিজ্য ও বিনিয়োগ অর্থায়নে নেতৃত্ব দিচ্ছে।',
    category: 'International Clearing Bank (PRA/FCA Regulated #114276)',
    category_bn: 'আন্তর্জাতিক ক্লিয়ারিং ও ইনভেস্টমেন্ট ব্যাংক (PRA লাইসেন্স #১১৪২৭৬)',
    coreStrengths: [
      'Premier trade finance and cross-border currency clearing between London, Asia, and Africa',
      'Global treasury settlement and corporate institutional custody infrastructure',
      'Full SWIFT BIC direct member with high-speed automated foreign exchange settlement',
      'Direct participant in Bank of England RTGS and international clearing systems'
    ],
    coreStrengths_bn: [
      'লন্ডন, এশিয়া ও আফ্রিকার মধ্যে প্রধান আন্তর্জাতিক ট্রেড ফাইন্যান্স ও মুদ্রা ক্লিয়ারিং ব্যবস্থা',
      'গ্লোবাল ট্রেজারি সেটেলমেন্ট ও বৃহৎ প্রাতিষ্ঠানিক বিনিয়োগ ব্যাংকিং',
      'সুইফটের সরাসরি সদস্য এবং দ্রুতগতির আন্তর্জাতিক বৈদেশিক মুদ্রা এক্সচেঞ্জ',
      'ব্যাংক অব ইংল্যান্ডের সরাসরি আরটিজিএস মেম্বারশিপ'
    ],
    sortCodeMain: '660000',
    sortCodeFormatted: '66-00-00',
    swiftHo: 'SCBLGB2L',
    ibanExample: 'GB18 SCBL 6600 0012 3456 78',
    popularApp: 'Standard Chartered Mobile UK',
    customerCare: '020 7885 8888 (International: +44 20 7885 8888)',
    fpsLimit: 'High-value corporate clearing & domestic wires',
    chapsCutoff: '15:00 UK Time for same-day clearing',
    fscsCoverage: '£85,000 per depositor under FSCS (#114276)'
  },
  'halifax-bank': {
    established: '1853 (Founded as the Halifax Permanent Benefit Building and Investment Society)',
    foundingStory: 'Halifax is a premier British banking brand operating as a trading division of Bank of Scotland plc (within Lloyds Banking Group). Established in West Yorkshire in 1853, Halifax grew into the largest building society in the UK before demutualizing. Halifax is renowned for its iconic Halifax Reward Current Account and widespread mortgage lending.',
    foundingStory_bn: 'হ্যালিফ্যাক্স (Halifax) যুক্তরাজ্যের ওয়েস্ট ইয়র্কশায়ারে ১৮৫৩ সালে প্রতিষ্ঠিত একটি অন্যতম শীর্ষ ব্যাংক, যা বর্তমানে লয়েডস ব্যাংকিং গ্রুপের অন্তর্ভুক্ত। একসময় যুক্তরাজ্যের বৃহত্তম বিল্ডিং সোসাইটি হিসেবে পরিচিত হ্যালিফ্যাক্স তার জনপ্রিয় রিওয়ার্ড কারেন্ট অ্যাকাউন্ট ও সাশ্রয়ী মর্টগেজ সেবার জন্য বিশেষভাবে সমাদৃত।',
    category: 'UK Retail Bank Division (Lloyds Banking Group / PRA #106085)',
    category_bn: 'যুক্তরাজ্যের শীর্ষ রিটেইল ব্যাংক (PRA লাইসেন্স #১০৬০৮৫)',
    coreStrengths: [
      'Award-winning Halifax Reward current accounts offering monthly cash bonuses',
      'UK’s premier home mortgage provider with dedicated high-street mortgage advisers',
      'Seamless Halifax Mobile Banking app with card freeze and instant notifications',
      'Full participant in UK Faster Payments, Bacs direct debits, and CHAPS'
    ],
    coreStrengths_bn: [
      'জনপ্রিয় হ্যালিফ্যাক্স রিওয়ার্ড অ্যাকাউন্ট ও নিশ্চিত মাসিক ক্যাশ বোনাস',
      'যুক্তরাজ্যের শীর্ষস্থানীয় হোম লোন ও মর্টগেজ ফাইন্যান্সার',
      'অত্যাধুনিক মোবাইল অ্যাপ ও কার্ড সিকিউরিটি কন্ট্রোল',
      'ব্যাক্স ডিরেক্ট ডেবিট ও ফাস্টার পেমেন্টসে তাত্ক্ষণিক ফান্ড ট্রান্সফার'
    ],
    sortCodeMain: '110001',
    sortCodeFormatted: '11-00-01',
    swiftHo: 'HLFXGB21',
    ibanExample: 'GB11 HLFX 1100 0112 3456 78',
    popularApp: 'Halifax Mobile Banking App',
    customerCare: '0345 720 3040 (International: +44 113 242 1984)',
    fpsLimit: 'Up to £25,000 per payment via mobile app (instant)',
    chapsCutoff: '16:00 UK Time for same-day settlement',
    fscsCoverage: 'Protected up to £85,000 under Bank of Scotland plc FSCS license (#169628)'
  },
  'nationwide-building-society': {
    established: '1884 (Founded as Southern Co-operative Permanent Building Society in London)',
    foundingStory: 'Nationwide Building Society is the largest building society in the world and the second-largest mortgage and savings provider in the United Kingdom, owned by its 16+ million member customers rather than outside shareholders. Headquartered in Swindon, Nationwide offers ethical mutual banking, market-leading FlexPlus travel insurance accounts, and member profit distributions.',
    foundingStory_bn: 'ন্যাশনওয়াইড বিল্ডিং সোসাইটি (Nationwide Building Society) বিশ্বের সর্ববৃহৎ মিউচুয়াল বিল্ডিং সোসাইটি এবং যুক্তরাজ্যের দ্বিতীয় বৃহত্তম সেভিংস ও মর্টগেজ প্রতিষ্ঠান। বাইরের শেয়ারহোল্ডারদের বদলে এটি ১৬ মিলিয়নেরও বেশি সদস্য-গ্রাহকের মালিকানাধীন পরিচালিত হয় এবং বার্ষিক লাভ সদস্যদের মাঝে বোনাস হিসেবে বিতরণ করে।',
    category: 'Mutual Building Society & Retail Bank (PRA #106078)',
    category_bn: 'বিশ্বের বৃহত্তম মিউচুয়াল বিল্ডিং সোসাইটি (PRA লাইসেন্স #১০৬০৭৮)',
    coreStrengths: [
      'Customer-owned mutual structure where profits are returned to members via the "Fairer Share" bonus',
      'Acclaimed FlexPlus packaged current account with worldwide family travel & breakdown cover',
      'Extensive UK branch pledge guaranteeing high-street presence across towns and cities',
      'Direct clearing participant in Bacs, CHAPS, and UK Faster Payments'
    ],
    coreStrengths_bn: [
      'গ্রাহক-মালিকানাধীন মিউচুয়াল প্রতিষ্ঠান এবং "ফেয়ারার শেয়ার" বার্ষিক ক্যাশ বোনাস',
      'ফ্লেক্সপ্লাস কারেন্ট অ্যাকাউন্টে বিশ্বব্যাপী ভ্রমণ ও গাড়ির ব্রেকডাউন ইন্স্যুরেন্স',
      'যুক্তরাজ্যের সকল শহরে ফিজিক্যাল ব্রাঞ্চ চালু রাখার স্থায়ী প্রতিশ্রুতি',
      'ব্যাক্স ও চ্যাপস-এর সরাসরি ক্লিয়ারিং মেম্বারশিপ'
    ],
    sortCodeMain: '070093',
    sortCodeFormatted: '07-00-93',
    swiftHo: 'NAWBGB21',
    ibanExample: 'GB88 NAWB 0700 9312 3456 78',
    popularApp: 'Nationwide Banking App',
    customerCare: '0800 30 20 11 (International: +44 1793 65 67 89)',
    fpsLimit: 'Up to £25,000 per payment via mobile app (24/7)',
    chapsCutoff: '15:00 UK Time for same-day CHAPS payment',
    fscsCoverage: '£85,000 per member under Nationwide FSCS registration (#106078)'
  },
  'bank-of-scotland': {
    established: '1695 (Founded by an Act of the Parliament of Scotland, Edinburgh)',
    foundingStory: 'Bank of Scotland plc is one of the oldest banking institutions in the world, founded in 1695 just one year after the Bank of England. It was the very first commercial bank in Europe to successfully print paper banknotes. Headquartered at The Mound in Edinburgh, Bank of Scotland operates as a core operating company of Lloyds Banking Group.',
    foundingStory_bn: 'ব্যাংক অব স্কটল্যান্ড (Bank of Scotland plc) বিশ্বের অন্যতম প্রাচীনতম ব্যাংক, যা ১৬৯৫ সালে স্কটল্যান্ডের পার্লামেন্টের এক আইনের মাধ্যমে প্রতিষ্ঠিত হয়। এটি সমগ্র ইউরোপের মধ্যে সর্বপ্রথম সফলভাবে কাগজের ব্যাংকনোট চালু করে ইতিহাস তৈরি করেছিল। এডিনবরার দ্য মাউন্ডে অবস্থিত এই ব্যাংকটি স্কটল্যান্ডজুড়ে শীর্ষ আর্থিক সেবা দিয়ে আসছে।',
    category: 'Scottish Clearing Bank & Banknote Issuer (PRA #169628)',
    category_bn: 'ঐতিহাসিক স্কটিশ ক্লিয়ারিং ব্যাংক ও নোট ইস্যুকারী (PRA লাইসেন্স #১৬৯৬২৮)',
    coreStrengths: [
      'Europe’s first commercial bank to issue paper banknotes (continuous issue since 1695)',
      'Over 330 years of continuous Scottish financial heritage and commercial banking leadership',
      'Integrated technology platform within Lloyds Banking Group infrastructure',
      'Direct participant in Bank of England RTGS, CHAPS, and Bacs clearing'
    ],
    coreStrengths_bn: [
      'ইউরোপের প্রথম ব্যাংক হিসেবে ১৬৯৫ সাল থেকে নিরবচ্ছিন্নভাবে কাগজের নোট চালুর ইতিহাস',
      '৩৩০ বছরের সমৃদ্ধ স্কটিশ ব্যাংকিং ঐতিহ্য ও বাণিজ্যিক অর্থায়ন',
      'লয়েডস ব্যাংকিং গ্রুপের শক্তিশালী ডিজিটাল টেকনোলজি ব্যাকবোন',
      'ব্যাংক অব ইংল্যান্ডের আরটিজিএস ও চ্যাপস-এর পূর্ণ সদস্য'
    ],
    sortCodeMain: '800000',
    sortCodeFormatted: '80-00-00',
    swiftHo: 'BOFSGB21',
    ibanExample: 'GB54 BOFS 8000 0012 3456 78',
    popularApp: 'Bank of Scotland Mobile Banking',
    customerCare: '0345 721 3141 (International: +44 131 337 4218)',
    fpsLimit: 'Up to £25,000 per transaction via app (instant)',
    chapsCutoff: '16:00 UK Time for same-day settlement',
    fscsCoverage: '£85,000 per depositor under Bank of Scotland FSCS license (#169628)'
  },
  'tsb-bank': {
    established: '1810 (Founded by Reverend Henry Duncan in Ruthwell, Scotland as Trustee Savings Bank)',
    foundingStory: 'TSB Bank plc (Trustee Savings Bank) has roots dating back to 1810, founded as the world’s first self-sustaining mutual savings bank designed for ordinary working people. Headquartered at 20 Gresham Street in London and owned by Spain’s Banco Sabadell, TSB provides transparent retail banking, Spend & Save cashback accounts, and comprehensive mortgage products across Britain.',
    foundingStory_bn: 'টিএসবি ব্যাংক পিএলসি (TSB Bank plc) ১৮১০ সালে স্কটল্যান্ডের রুথওয়েলে প্রতিষ্ঠিত বিশ্বের প্রথম ট্রাস্টি সেভিংস ব্যাংক থেকে উদ্ভূত। স্পেনের ব্যানক সাবাদেল গ্রুপের অংশ হিসেবে এটি যুক্তরাজ্যে সাধারণ কর্মজীবী মানুষদের জন্য স্পেন্ড অ্যান্ড সেভ ক্যাশব্যাক অ্যাকাউন্ট ও বিশ্বস্ত ব্যাংকিং সেবা পরিচালনা করে।',
    category: 'UK Retail Bank (PRA/FCA Regulated #187082)',
    category_bn: 'যুক্তরাজ্যের রিটেইল ব্যাংক (PRA/FCA লাইসেন্স #১৮৭০৮২)',
    coreStrengths: [
      'Historic originator of the savings bank movement dedicated to ordinary citizens',
      'Spend & Save current account featuring automated savings pots and monthly cashback',
      'Fraud Refund Guarantee protecting innocent customers from authorized push payment fraud',
      'Full direct integration with Faster Payments, Bacs, and CHAPS'
    ],
    coreStrengths_bn: [
      'সাধারণ নাগরিকদের জন্য বিশ্বস্ত সেভিংস ব্যাংকিং আন্দোলনের পথিকৃৎ',
      'স্পেন্ড অ্যান্ড সেভ অ্যাকাউন্টে অটো-সেভিংস পট ও নিশ্চিত ক্যাশব্যাক',
      'গ্রাহকদের জন্য বিশেষ ফ্রড রিফান্ড গ্যারান্টি নিরাপত্তা ব্যবস্থা',
      'ফাস্টার পেমেন্টস ও ব্যাক্স ডিরেক্ট ডেবিটের সরাসরি সুবিধা'
    ],
    sortCodeMain: '770000',
    sortCodeFormatted: '77-00-00',
    swiftHo: 'TSBSGB21',
    ibanExample: 'GB92 TSBS 7700 0012 3456 78',
    popularApp: 'TSB Mobile Banking App',
    customerCare: '03459 758 758 (International: +44 203 284 1575)',
    fpsLimit: 'Up to £10,000 per payment via app / £25,000 online',
    chapsCutoff: '15:30 UK Time for same-day clearing',
    fscsCoverage: '£85,000 per customer under TSB Bank FSCS scheme (#187082)'
  },
  'virgin-money-uk': {
    established: '1838 (Founded as Clydesdale Bank in Glasgow, merged with Virgin Money)',
    foundingStory: 'Virgin Money UK PLC (comprising Clydesdale Bank, Yorkshire Bank, and Virgin Money) is a leading national financial institution with headquarters in Newcastle upon Tyne and Glasgow. Providing innovative digital current accounts, competitive credit cards, and retail mortgages, Virgin Money is renowned for its distinctive Virgin Red loyalty points and modern customer lounges.',
    foundingStory_bn: 'ভার্জিন মানি ইউকে (Virgin Money UK PLC) ১৮৩৮ সালে প্রতিষ্ঠিত ঐতিহাসিক ক্লাইডসডেল ব্যাংক ও রিচার্ড ব্র্যানসনের ভার্জিন গ্রুপের সমন্বয়ে গঠিত একটি শীর্ষস্থানীয় ব্যাংক। নিউক্যাসেল ও গ্লাসগোতে কার্যক্রম পরিচালিত এই ব্যাংকটি আধুনিক ডিজিটাল ব্যাংকিং, রিওয়ার্ড পয়েন্টস ও বিশেষ লাউঞ্জ সুবিধার জন্য জনপ্রিয়।',
    category: 'UK Retail Bank (PRA/FCA Regulated #121873)',
    category_bn: 'যুক্তরাজ্যের আধুনিক রিটেইল ব্যাংক (PRA লাইসেন্স #১২১৮৭৩)',
    coreStrengths: [
      'Exclusive Virgin Money Lounges across major UK cities for account holders',
      'Virgin Red reward points integration redeemable for flights, cruises, and experiences',
      'Historic Scottish banknote issuing authority through Clydesdale Bank legacy',
      'Direct participant in Bacs, Faster Payments, and CHAPS clearing networks'
    ],
    coreStrengths_bn: [
      'যুক্তরাজ্যের প্রধান প্রধান শহরে গ্রাহকদের জন্য বিলাসবহুল ভার্জিন মানি লাউঞ্জ সুবিধা',
      'ভার্জিন রেড লয়ালটি পয়েন্টসের মাধ্যমে ফ্লাইট ও শপিং রিওয়ার্ড',
      'ঐতিহাসিক ক্লাইডসডেল ব্যাংকের অধীনে স্কটিশ ব্যাংকনোট ইস্যুর অনুমতি',
      'ফাস্টার পেমেন্টস ও ব্যাক্স সেটেলমেন্টের নির্ভরযোগ্য অবকাঠামো'
    ],
    sortCodeMain: '080054',
    sortCodeFormatted: '08-00-54',
    swiftHo: 'CLYDGB2L',
    ibanExample: 'GB45 CLYD 0800 5412 3456 78',
    popularApp: 'Virgin Money Mobile Banking',
    customerCare: '0800 121 7365 (International: +44 141 951 7320)',
    fpsLimit: 'Up to £25,000 per transaction (instant 24/7)',
    chapsCutoff: '15:00 UK Time for guaranteed same-day wire',
    fscsCoverage: '£85,000 under Clydesdale Bank / Virgin Money FSCS (#121873)'
  },
  'metro-bank': {
    established: '2010 (Founded by Vernon Hill and Anthony Thomson in London)',
    foundingStory: 'Metro Bank PLC made history in 2010 as the very first new high-street retail bank to be granted a full banking licence in the United Kingdom in over 150 years. Operating extended 7-day-a-week store hours (open 362 days a year) with instant on-the-spot debit card printing and dog-friendly customer stores, Metro Bank transformed traditional UK banking customer service.',
    foundingStory_bn: 'মেট্রো ব্যাংক পিএলসি (Metro Bank PLC) ২০১০ সালে লন্ডনে প্রতিষ্ঠিত হয়ে ১৫০ বছরের মধ্যে যুক্তরাজ্যের প্রথম সম্পূর্ণ নতুন হাই-স্ট্রিট ব্যাংকের মর্যাদা অর্জন করে। সপ্তাহে ৭ দিন খোলা থাকা, তাৎক্ষণিকভাবে শাখায় বসে ডেবিট কার্ড প্রিন্ট করে দেওয়া এবং পোষা প্রাণী-বান্ধব ব্যাংকিং স্টোরের মাধ্যমে মেট্রো ব্যাংক গ্রাহক সেবায় বিপ্লব এনেছে।',
    category: 'UK Challenger Bank (PRA/FCA Regulated #502988)',
    category_bn: 'যুক্তরাজ্যের শীর্ষ চ্যালেঞ্জার ব্যাংক (PRA লাইসেন্স #৫০২৯৮৮)',
    coreStrengths: [
      'First new UK high-street bank in 150+ years with 7-day extended store hours',
      'Instant account opening with personalized MasterCard debit card printed in-store in minutes',
      'Free coin counting machines (Magic Money Machines) available to customers and non-customers',
      'Full direct member of Faster Payments, Bacs, and CHAPS'
    ],
    coreStrengths_bn: [
      'সপ্তাহে ৭ দিন ও বছরে ৩৬২ দিন খোলা থাকা একমাত্র ব্রিটিশ হাই-স্ট্রিট ব্যাংক',
      'মিনিটের মধ্যে শাখায় বসে তাৎক্ষণিক ডেবিট কার্ড প্রিন্ট ও অ্যাকাউন্ট চালু',
      'বিনামূল্যে কয়েন কাউন্টিং সুবিধা (ম্যাজিক মানি মেশিন)',
      'ফাস্টার পেমেন্টস ও ব্যাক্স-এর সরাসরি অংশগ্রহণকারী'
    ],
    sortCodeMain: '230580',
    sortCodeFormatted: '23-05-80',
    swiftHo: 'MYMBGB2L',
    ibanExample: 'GB78 MYMB 2305 8012 3456 78',
    popularApp: 'Metro Bank App (iOS & Android)',
    customerCare: '0345 08 08 500 (International: +44 20 3402 8312)',
    fpsLimit: 'Up to £10,000 per payment via mobile app / £25,000 online',
    chapsCutoff: '15:30 UK Time for same-day clearing',
    fscsCoverage: '£85,000 per depositor under Metro Bank FSCS registration (#502988)'
  },
  'cooperative-bank': {
    established: '1872 (Founded as the Loan and Deposit Department of the CWS, Manchester)',
    foundingStory: 'The Co-operative Bank plc is Britain’s leading ethical commercial bank, headquartered at 1 Balloon Street in Manchester. With a customer-led Ethical Policy embedded directly into its constitution since 1992, The Co-operative Bank strictly refuses to finance arms manufacturing, fossil fuel extraction, or oppressive regimes, attracting socially conscious depositors nationwide.',
    foundingStory_bn: 'দ্য কো-অপারেটিভ ব্যাংক (The Co-operative Bank plc) যুক্তরাজ্যের সর্বপ্রধান নীতিবান ও পরিবেশবান্ধব (Ethical) বাণিজ্যিক ব্যাংক, যার সদর দপ্তর ম্যানচেস্টারের বেলুন স্ট্রিটে অবস্থিত। ১৯৯২ সাল থেকে ব্যাংকটি তার সংবিধানে অস্ত্র তৈরি বা পরিবেশ ধ্বংসকারী খাতে অর্থায়ন বন্ধের নীতি কঠোরভাবে মেনে চলে আসছে।',
    category: 'UK Ethical Retail Bank (PRA/FCA Regulated #121882)',
    category_bn: 'যুক্তরাজ্যের প্রধান এথিক্যাল ব্যাংক (PRA লাইসেন্স #১২১৮৮২)',
    coreStrengths: [
      'UK’s pioneering ethical banking policy co-created and voted on by customer members',
      'Strict exclusion of fossil fuels, oppressive regimes, animal testing, and tobacco funding',
      'Everyday Extra packaged accounts with mobile, breakdown, and worldwide travel insurance',
      'Direct participant in Faster Payments, Bacs direct debits, and CHAPS RTGS'
    ],
    coreStrengths_bn: [
      'গ্রাহকদের সরাসরি ভোটে নির্ধারিত যুক্তরাজ্যের সর্বপ্রথম এথিক্যাল ব্যাংকিং পলিসি',
      'অস্ত্র ও পরিবেশবিরোধী কোনো খাতে অর্থায়ন না করার কঠোর নীতি',
      'ভ্রমণ ও মোবাইল ইন্স্যুরেন্স সহ এভরিডে এক্সট্রা কারেন্ট অ্যাকাউন্ট',
      'ফাস্টার পেমেন্টস ও ব্যাক্স ডিরেক্ট ডেবিটের সরাসরি সুবিধা'
    ],
    sortCodeMain: '089000',
    sortCodeFormatted: '08-90-00',
    swiftHo: 'CPBKGB22',
    ibanExample: 'GB67 CPBK 0890 0012 3456 78',
    popularApp: 'The Co-operative Bank Mobile App',
    customerCare: '03457 212 212 (International: +44 3457 212 212)',
    fpsLimit: 'Up to £25,000 per payment (instant 24/7)',
    chapsCutoff: '15:00 UK Time for guaranteed same-day payment',
    fscsCoverage: '£85,000 per eligible claimant under FSCS license (#121882)'
  },
  'ulster-bank': {
    established: '1836 (Founded as The Ulster Banking Company in Belfast, Northern Ireland)',
    foundingStory: 'Ulster Bank Limited is one of the historic "Big Four" Northern Irish commercial banks, operating across Northern Ireland as part of the NatWest Group. Headquartered at Donegall Square East in Belfast, Ulster Bank is an authorized issuer of Northern Ireland sterling banknotes and provides comprehensive local retail and agricultural commercial lending.',
    foundingStory_bn: 'আলস্টার ব্যাংক (Ulster Bank Limited) উত্তর আয়ারল্যান্ডের অন্যতম প্রাচীন ও প্রধান বাণিজ্যিক ব্যাংক, যা বেলফাস্টের ডনেগল স্কয়ার ইস্টে সদর দপ্তর নিয়ে ন্যাটওয়েস্ট গ্রুপের অংশ হিসেবে পরিচালিত হয়। এটি উত্তর আয়ারল্যান্ডে নিজস্ব পাউন্ড ব্যাংকনোট ছাপানোর অনুমতিপ্রাপ্ত শীর্ষ প্রতিষ্ঠান।',
    category: 'Northern Ireland Bank & Banknote Issuer (PRA #121881)',
    category_bn: 'উত্তর আয়ারল্যান্ডের ক্লিয়ারিং ব্যাংক ও নোট ইস্যুকারী (PRA #১২১৮৮১)',
    coreStrengths: [
      'Authorized issuer of Northern Irish sterling banknotes in Belfast',
      'Leading agricultural and commercial business lending across Northern Ireland',
      'Shared digital security infrastructure with NatWest and Royal Bank of Scotland',
      'Full direct integration with UK Faster Payments and Bacs clearing networks'
    ],
    coreStrengths_bn: [
      'উত্তর আয়ারল্যান্ডে নিজস্ব স্টার্লিং পাউন্ড নোট ইস্যু করার বিশেষ আইনি ক্ষমতা',
      'কৃষি ও স্থানীয় ব্যবসায়িক ঋণ প্রদানের শীর্ষস্থানীয় সেবাদাতা',
      'ন্যাটওয়েস্ট গ্রুপের শক্তিশালী ডিজিটাল প্রযুক্তি ও মোবাইল অ্যাপ ব্যাকবোন',
      'যুক্তরাজ্যের ফাস্টার পেমেন্টস ও ব্যাক্স ক্লিয়ারিং ব্যবস্থার সরাসরি অংশীদার'
    ],
    sortCodeMain: '980000',
    sortCodeFormatted: '98-00-00',
    swiftHo: 'ULSBGB2B',
    ibanExample: 'GB39 ULSB 9800 0012 3456 78',
    popularApp: 'Ulster Bank NI Mobile Banking',
    customerCare: '0345 742 4365 (International: +44 28 9032 5244)',
    fpsLimit: 'Up to £20,000 per payment via mobile app',
    chapsCutoff: '15:30 UK Time for same-day CHAPS settlement',
    fscsCoverage: '£85,000 per depositor under Ulster Bank FSCS registration (#121881)'
  },
  'monzo-bank': {
    established: '2015 (Founded by Tom Blomfield, Jonas Huckestein, and team in London)',
    foundingStory: 'Monzo Bank Ltd is Britain’s largest and most famous digital challenger bank, serving over 9 million customers with its iconic hot coral Mastercard debit card. Granted a full UK banking licence by the PRA and FCA in 2017, Monzo pioneered instant spending push notifications, salary sorters, fee-free spending abroad, and built-in savings pots.',
    foundingStory_bn: 'মনজো ব্যাংক (Monzo Bank Ltd) যুক্তরাজ্যের সর্ববৃহৎ ও সবচেয়ে জনপ্রিয় আধুনিক ডিজিটাল ব্যাংক, যার গ্রাহক সংখ্যা ৯০ লক্ষেরও বেশি। এর বিখ্যাত হট কোরাল রঙের ডেবিট কার্ড, তাৎক্ষণিক ট্রানজেকশন নোটিফিকেশন, বিদেশের মাটিতে কোনো ফি ছাড়া কেনাকাটা এবং সেভিংস পট ব্যবস্থার মাধ্যমে মনজো তরুণ প্রজন্মের প্রিয় ব্যাংকে পরিণত হয়েছে।',
    category: 'UK Digital Clearing Bank (PRA/FCA Regulated #730427)',
    category_bn: 'যুক্তরাজ্যের শীর্ষ ডিজিটাল ক্লিয়ারিং ব্যাংক (PRA লাইসেন্স #৭৩০৪২৭)',
    coreStrengths: [
      'Over 9 million UK users with real-time push notifications and automated salary sorters',
      'Fee-free spending worldwide at the real Mastercard exchange rate with zero markup',
      'Direct participant in Bacs, Faster Payments, and Confirmation of Payee (CoP)',
      'Monzo Plus and Premium tiers offering phone insurance, travel cover, and high-yield savings'
    ],
    coreStrengths_bn: [
      '৯০ লক্ষের বেশি গ্রাহক ও তাৎক্ষণিক মোবাইল নোটিফিকেশন ও স্বয়ংক্রিয় স্যালারি সর্টার',
      'বিশ্বের যেকোনো দেশে কোনো অতিরিক্ত চার্জ ছাড়া মাস্টারকার্ড অফিশিয়াল রেটে কেনাকাটা',
      'ব্যাক্স ও ফাস্টার পেমেন্টসে সরাসরি তাৎক্ষণিক ট্রান্সফার সুবিধা',
      'মনজো প্লাস ও প্রিমিয়াম প্ল্যানে মোবাইল ও ট্রাভেল ইন্স্যুরেন্স সুবিধা'
    ],
    sortCodeMain: '040004',
    sortCodeFormatted: '04-00-04',
    swiftHo: 'MONZGB21',
    ibanExample: 'GB12 MONZ 0400 0412 3456 78',
    popularApp: 'Monzo - Mobile Banking (iOS & Android)',
    customerCare: '0800 802 1281 (International: +44 20 3872 0620)',
    fpsLimit: 'Up to £10,000 per day via app (Faster Payments instant)',
    chapsCutoff: 'Inbound CHAPS supported / Outbound via Faster Payments',
    fscsCoverage: '£85,000 full UK deposit protection under FSCS (#730427)'
  }
};

const DEFAULT_UK_KNOWLEDGE: UkBankKnowledge = {
  established: '1900',
  foundingStory: 'A leading authorized UK financial institution regulated by the Prudential Regulation Authority (PRA) and the Financial Conduct Authority (FCA), providing personal current accounts, commercial lending, and digital payment solutions.',
  foundingStory_bn: 'যুক্তরাজ্যের প্রুডেনশিয়াল রেগুলেশন অথরিটি (PRA) এবং ফিন্যান্সিয়াল কনডাক্ট অথরিটি (FCA) কর্তৃক লাইসেন্সপ্রাপ্ত একটি শীর্ষস্থানীয় ব্রিটিশ আর্থিক প্রতিষ্ঠান।',
  category: 'UK Authorized Bank (PRA/FCA Regulated)',
  category_bn: 'যুক্তরাজ্যের অনুমোদিত ব্যাংক (PRA/FCA নিবন্ধিত)',
  coreStrengths: [
    'Full participant in UK Faster Payments, Bacs, and CHAPS networks',
    'Standard £85,000 deposit protection under the Financial Services Compensation Scheme (FSCS)',
    'Seamless mobile and internet banking with Confirmation of Payee verification',
    'Direct connection with Bank of England clearing infrastructure'
  ],
  coreStrengths_bn: [
    'যুক্তরাজ্যের ফাস্টার পেমেন্টস, ব্যাক্স এবং চ্যাপস নেটওয়ার্কের সরাসরি সদস্য',
    'এফএসসিএস (FSCS) স্কিমের অধীনে ৮৫,০০০ পাউন্ড পর্যন্ত আমানত সুরক্ষা',
    'কনফার্মেশন অব পেই (CoP) ও আধুনিক মোবাইল ব্যাংকিং সুবিধা',
    'ব্যাংক অব ইংল্যান্ড ক্লিয়ারিং ব্যবস্থার সাথে সরাসরি সংযোগ'
  ],
  sortCodeMain: '000000',
  sortCodeFormatted: '00-00-00',
  swiftHo: 'BANKGB2L',
  ibanExample: 'GB00 BANK 0000 0012 3456 78',
  popularApp: 'Official Mobile Banking App',
  customerCare: '0345 000 0000',
  fpsLimit: 'Up to £25,000 per payment',
  chapsCutoff: '15:30 UK Time',
  fscsCoverage: '£85,000 under FSCS'
};

function buildUkBankArticle(bank: any): BankArticle {
  const bankId = bank.id;
  const knowledge = UK_BANK_KNOWLEDGE[bankId] || DEFAULT_UK_KNOWLEDGE;

  const bankNameEn = bank.name || bank.short_name;
  const bankNameBn = bank.name_bn || bankNameEn;
  const shortName = bank.short_name || bankNameEn;
  const sortCodeRaw = bank.sort_code || knowledge.sortCodeFormatted || '00-00-00';
  const sortCodeFormatted = sortCodeRaw.includes('-')
    ? sortCodeRaw
    : `${sortCodeRaw.slice(0, 2)}-${sortCodeRaw.slice(2, 4)}-${sortCodeRaw.slice(4, 6)}`;
  const sortCodeDigits = sortCodeFormatted.replace(/-/g, '');
  const swiftCode = bank.swift_code || knowledge.swiftHo;
  const fcaFrn = bank.fca_frn || '100000';
  const headOfficeEn = bank.head_office || 'London, United Kingdom';
  const headOfficeBn = bank.head_office_bn || 'লন্ডন, যুক্তরাজ্য';

  const titleEn = `${bankNameEn} Sort Code, Bacs, Faster Payments & SWIFT Guide 2026`;
  const titleBn = `${bankNameBn}: ৬-সংখ্যার সর্ট কোড, ফাস্টার পেমেন্টস, ব্যাক্স ও সুইফট কোড গাইড ২০২৬`;

  const subtitleEn = `Complete verified guide to ${bankNameEn} 6-digit sort codes (${sortCodeFormatted}), UK Faster Payments, Bacs direct debits, CHAPS high-value wires, IBAN format, and £85,000 FSCS deposit insurance.`;
  const subtitleBn = `${bankNameBn}-এর অফিশিয়াল ৬-ডিজিটের সর্ট কোড (${sortCodeFormatted}), ফাস্টার পেমেন্টস, ব্যাক্স ডিরেক্ট ডেবিট, চ্যাপস ওয়্যার, আন্তর্জাতিক আইবান (IBAN) ও ৮৫,০০০ পাউন্ড এফএসসিএস আমানত সুরক্ষার সম্পূর্ণ সহায়িকা।`;

  const metaTitle = `${bankNameEn} Sort Code ${sortCodeFormatted}, SWIFT ${swiftCode} & Banking Guide | World Bank Codes`;
  const metaDescription = `Find ${bankNameEn} sort code (${sortCodeFormatted}), SWIFT BIC code (${swiftCode}), Faster Payments limits, UK IBAN format, head office address, and FSCS £85k protection rules.`;

  const sections = [
    {
      id: 'bank-overview-and-history',
      heading: `About ${bankNameEn}: History, Heritage & Regulatory Standing`,
      heading_bn: `${bankNameBn}: ইতিহাস, ঐতিহ্য ও নিয়ন্ত্রক স্বীকৃতি`,
      content: `
**${bankNameEn}** is a premier financial institution in the United Kingdom, authorized by the **Prudential Regulation Authority (PRA)** and regulated by both the **Financial Conduct Authority (FCA)** and the PRA under Firm Reference Number (FRN) **#${fcaFrn}**.

### Key Background & Institutional Profile:
* **Establishment:** Founded in ${knowledge.established}.
* **Headquarters:** ${headOfficeEn}.
* **Category:** ${knowledge.category}.
* **Primary Clearing Sort Code:** \`${sortCodeFormatted}\` (Numerical: \`${sortCodeDigits}\`).
* **Head Office SWIFT / BIC Code:** \`${swiftCode}\`.
* **FSCS Deposit Guarantee:** Eligible deposits protected up to **£85,000** per person.

${knowledge.foundingStory}

### Core Institutional Strengths:
${knowledge.coreStrengths.map((s) => `* ${s}`).join('\n')}
      `.trim(),
      content_bn: `
**${bankNameBn}** যুক্তরাজ্যের ব্যাংকিং খাতের অন্যতম শীর্ষস্থানীয় ও বিশ্বস্ত আর্থিক প্রতিষ্ঠান, যা যুক্তরাজ্যের **প্রুডেনশিয়াল রেগুলেশন অথরিটি (PRA)** এবং **ফিন্যান্সিয়াল কনডাক্ট অথরিটি (FCA)** দ্বারা ফার্ম রেফারেন্স নম্বর (FRN) **#${fcaFrn}**-এর অধীনে অনুমোদিত ও নিয়ন্ত্রিত।

### ব্যাংকের মূল পরিচিতি ও তথ্যসমূহ:
* **প্রতিষ্ঠাকাল:** ${knowledge.established}।
* **প্রধান কার্যালয়:** ${headOfficeBn}।
* **ব্যাংকের ধরন:** ${knowledge.category_bn}।
* **প্রধান সর্ট কোড (Sort Code):** \`${sortCodeFormatted}\` (সংখ্যা: \`${sortCodeDigits}\`)।
* **আন্তর্জাতিক সুইফট কোড (SWIFT/BIC):** \`${swiftCode}\`।
* **এফএসসিএস আমানত সুরক্ষা:** গ্রাহক প্রতি সর্বোচ্চ **£৮৫,০০০ (পঁচাশি হাজার পাউন্ড)** পর্যন্ত শতভাগ নিরাপদ ও বীমাকৃত।

${knowledge.foundingStory_bn}

### ব্যাংকের প্রধান সুবিধাসমূহ:
${knowledge.coreStrengths_bn.map((s) => `* ${s}`).join('\n')}
      `.trim()
    },
    {
      id: 'sort-code-explained-uk',
      heading: `Understanding ${bankNameEn} 6-Digit Sort Code (${sortCodeFormatted})`,
      heading_bn: `${bankNameBn}-এর ৬-ডিজিটের সর্ট কোড (${sortCodeFormatted}) ও এর গঠন`,
      content: `
In the British banking system, a **Sort Code** is a 6-digit number formatted as three pairs of digits separated by hyphens (e.g., \`${sortCodeFormatted}\`). It identifies both the bank and the specific clearing branch handling an account within the UK clearing network.

### Anatomy of ${bankNameEn} Sort Code \`${sortCodeFormatted}\`:
\`\`\`
  ${sortCodeFormatted.slice(0, 2)}  -  ${sortCodeFormatted.slice(3, 5)}  -  ${sortCodeFormatted.slice(6, 8)}
 [Bank]   [Area/Branch] [Specific Branch]
\`\`\`

1. **First 2 Digits (\`${sortCodeFormatted.slice(0, 2)}\`):** Identifies the banking institution within the UK clearing system (Barclays, HSBC, Lloyds, NatWest, Santander, etc.).
2. **Middle 2 Digits (\`${sortCodeFormatted.slice(3, 5)}\`):** Identifies the regional processing centre, clearing district, or territory.
3. **Last 2 Digits (\`${sortCodeFormatted.slice(6, 8)}\`):** Identifies the specific branch or specialized operational accounting unit.

### Where to Find Your Sort Code:
* **Debit Card:** Printed on the bottom-left corner of your physical Visa or Mastercard debit card (next to your 8-digit account number).
* **Mobile Banking App:** Displayed immediately under your current or savings account balance inside the **${knowledge.popularApp}**.
* **Bank Statements & Cheque Book:** Displayed in the top-right header of your monthly PDF statement and encoded in the MICR line at the bottom of your cheques.
      `.trim(),
      content_bn: `
যুক্তরাজ্যের ব্যাংকিং নিয়মে **সর্ট কোড (Sort Code)** হলো একটি ৬-সংখ্যার বিশেষ ক্লিয়ারিং কোড, যা হাইফেন দিয়ে দুটি করে তিনটি জোড়ায় বিভক্ত থাকে (যেমন: \`${sortCodeFormatted}\`)। এটি যুক্তরাজ্যের ক্লিয়ারিং ব্যবস্থার মধ্যে ব্যাংক এবং সংশ্লিষ্ট নির্দিষ্ট শাখাকে সঠিকভাবে চিহ্নিত করে।

### ${bankNameBn}-এর সর্ট কোড \`${sortCodeFormatted}\`-এর গঠন:
\`\`\`
  ${sortCodeFormatted.slice(0, 2)}  -  ${sortCodeFormatted.slice(3, 5)}  -  ${sortCodeFormatted.slice(6, 8)}
 [ব্যাংক]  [অঞ্চল / ডিস্ট্রিক্ট]  [নির্দিষ্ট শাখা কোড]
\`\`\`

1. **প্রথম ২ ডিজিট (\`${sortCodeFormatted.slice(0, 2)}\`):** যুক্তরাজ্যের ব্যাংকিং নেটওয়ার্কে মূল ব্যাংককে চিহ্নিত করে।
2. **মাঝের ২ ডিজিট (\`${sortCodeFormatted.slice(3, 5)}\`):** আঞ্চলিক প্রসেসিং সেন্টার বা এলাকা কোড নির্দেশ করে।
3. **শেষের ২ ডিজিট (\`${sortCodeFormatted.slice(6, 8)}\`):** গ্রাহকের নির্দিষ্ট শাখা বা স্পেশাল অপারেশনাল ইউনিট চিহ্নিত করে।

### সর্ট কোড কোথায় পাবেন?
* **ডেবিট কার্ড:** আপনার ফিজিক্যাল ডেবিট কার্ডের সামনের বা পেছনের অংশে ৮-সংখ্যার একাউন্ট নম্বরের পাশেই ৬-ডিজিটের সর্ট কোড মুদ্রিত থাকে।
* **মোবাইল অ্যাপ:** ব্যাংকের মোবাইল অ্যাপে লগইন করলেই একাউন্ট ব্যালেন্সের নিচে সর্ট কোড ও একাউন্ট নম্বর দেখা যায়।
* **ব্যাংক স্টেটমেন্ট ও চেক বই:** মাসিক ব্যাংক স্টেটমেন্টের উপরে এবং চেকের নিচের MICR লাইনে সর্ট কোড লেখা থাকে।
      `.trim()
    },
    {
      id: 'uk-payment-systems-fps-bacs-chaps',
      heading: `UK Payment Methods: Faster Payments, Bacs Direct Debits & CHAPS`,
      heading_bn: `যুক্তরাজ্যের পেমেন্ট পদ্ধতি: ফাস্টার পেমেন্টস (FPS), ব্যাক্স (Bacs) ও চ্যাপস (CHAPS)`,
      content: `
When transferring money to or from **${bankNameEn}** within the UK, three distinct clearing systems operate depending on urgency, value, and recurring nature:

### 1. Faster Payments System (FPS) — Instant 24/7 Transfers
* **Speed:** Typically clears in **seconds** (guaranteed within 2 hours), 24 hours a day, 365 days a year including bank holidays.
* **Cost:** Free for personal retail banking clients.
* **Limits:** ${knowledge.fpsLimit}.
* **Common Uses:** Splitting bills with friends, mobile app transfers, online shopping, paying tradespeople, and emergency transfers.

### 2. Bacs Payment Schemes (Bacs Direct Credit & Direct Debit)
* **Speed:** 3-working-day clearing cycle (Day 1: Input, Day 2: Processing, Day 3: Settlement).
* **Cost:** Free for consumer collections and salary credits.
* **Common Uses:** Monthly salary payrolls, state pensions, universal credit benefits, household utility direct debits (council tax, energy, broadband, gym memberships).

### 3. CHAPS (Clearing House Automated Payment System)
* **Speed:** Guaranteed **same-day** settlement through the Bank of England Real-Time Gross Settlement (RTGS) system.
* **Cutoff Time:** ${knowledge.chapsCutoff}.
* **Cost:** Typically £20 to £25 per transfer.
* **Common Uses:** High-value property purchases (buying a house/solicitor completion funds), multi-million commercial transactions, and high-priority corporate settlements.
      `.trim(),
      content_bn: `
যুক্তরাজ্যে **${bankNameBn}**-এর মাধ্যমে অভ্যন্তরীণ অর্থ স্থানান্তরের জন্য মূলত ৩টি প্রধান ক্লিয়ারিং চ্যানেল ব্যবহৃত হয়:

### ১. ফাস্টার পেমেন্টস (Faster Payments System - FPS) — তাত্ক্ষণিক ট্রান্সফার
* **গতি:** সাধারণত কয়েক **সেকেন্ডের** মধ্যে টাকা জমা হয় (সর্বোচ্চ ২ ঘণ্টা), দিনরাত ২৪ ঘণ্টা ও ছুটির দিনেও কার্যকর।
* **খরচ:** সাধারণ ব্যক্তিগত গ্রাহকদের জন্য সম্পূর্ণ ফ্রি।
* **সীমাবদ্ধতা:** ${knowledge.fpsLimit}।
* **ব্যবহার:** বন্ধুদের টাকা পাঠানো, অনলাইন শপিং, তাৎক্ষণিক বিল পেমেন্ট ও ছোট ব্যবসা লেনদেন।

### ২. ব্যাক্স পেমেন্টস (Bacs Direct Credit & Direct Debit) — ৩ কার্যদিবসের রুটিন পেমেন্ট
* **গতি:** ৩ কার্যদিবসের স্ট্যান্ডার্ড সাইকেল (১ম দিন: ফাইল প্রদান, ২য় দিন: প্রসেসিং, ৩য় দিন: একাউন্টে জমা)।
* **ব্যবহার:** চাকরিজীবীদের মাসিক বেতন (Payroll), পেনশন, সরকারি ভাতা এবং গ্যাস-বিদ্যুৎ, কাউন্সিল ট্যাক্স ও ব্রডব্যান্ডের ডিরেক্ট ডেবিট অটো-পেমেন্ট।

### ৩. চ্যাপস (CHAPS) — ব্যাংক অব ইংল্যান্ডের মাধ্যমে উচ্চমূল্যের গ্যারান্টিযুক্ত ট্রান্সফার
* **গতি:** ব্যাংক অব ইংল্যান্ডের আরটিজিএস (RTGS) সিস্টেমে একই দিনে নিশ্চিত ক্লিয়ারিং।
* **কাট-অফ টাইম:** ${knowledge.chapsCutoff}।
* **খরচ:** সাধারণত প্রতি ট্রানজেকশনে ২০ থেকে ২৫ পাউন্ড ফি প্রযোজ্য।
* **ব্যবহার:** বাড়ি কেনাবেচা (সলিসিটর ফান্ড ট্রান্সফার), উচ্চমূল্যের প্রপার্টি লেনদেন ও প্রাতিষ্ঠানিক বাণিজ্য।
      `.trim()
    },
    {
      id: 'international-transfers-and-uk-iban',
      heading: `International Wires to ${bankNameEn}: UK IBAN Structure & SWIFT Code`,
      heading_bn: `বিদেশ থেকে রেমিট্যান্স গ্রহণ: যুক্তরাজ্যের আইবান (IBAN) ও সুইফট কোড গাইড`,
      content: `
For cross-border international remittances from USA, Europe, Bangladesh, India, UAE, or anywhere worldwide, overseas banks require your **UK International Bank Account Number (IBAN)** and **SWIFT / BIC code**.

### UK IBAN Structure (22 Alphanumeric Characters):
A British IBAN consists of 22 characters structured as follows:
\`\`\`
 GB  29   ${bank.bank_code || 'BARC'}   ${sortCodeDigits}   12345678
[CC] [CD] [Bank Code] [Sort Code] [Account Number]
\`\`\`
* **Country Code (2 Letters):** \`GB\` (United Kingdom).
* **Check Digits (2 Numbers):** Dynamically calculated check digits (e.g., \`29\`).
* **Bank Code (4 Letters):** 4-letter unique SWIFT bank identifier code (e.g., \`${bank.bank_code || 'BARC'}\`).
* **Sort Code (6 Digits):** Your branch sort code (\`${sortCodeDigits}\`).
* **Account Number (8 Digits):** Your 8-digit unique bank account number.

### Required Details to Receive Foreign Funds into ${bankNameEn}:
1. **Beneficiary Name:** Your full legal account name as registered with ${bankNameEn}.
2. **SWIFT / BIC Code:** \`${swiftCode}\` (Head Office SWIFT).
3. **UK IBAN:** Your 22-character UK IBAN (e.g., \`${knowledge.ibanExample}\`).
4. **Bank Name & Address:** ${bankNameEn}, ${headOfficeEn}.
5. **Payment Reference:** Account holder name or invoice reference.
      `.trim(),
      content_bn: `
মার্কিন যুক্তরাষ্ট্র, ইউরোপ, বাংলাদেশ, ভারত বা মধ্যপ্রাচ্য থেকে **${bankNameBn}**-এ সরাসরি বৈদেশিক মুদ্রা বা রেমিট্যান্স পাঠাতে প্রেরক ব্যাংকের কাছে আপনার **যুক্তরাজ্যের আইবান (IBAN)** এবং **সুইফট কোড (SWIFT/BIC)** প্রয়োজন হয়।

### যুক্তরাজ্যের আইবান (IBAN)-এর গঠন (২২টি ক্যারেক্টার):
যুক্তরাজ্যের প্রতিটি ব্যাংক একাউন্টের জন্য একটি ২২-সংখ্যার আইবান নির্ধারিত থাকে:
\`\`\`
 GB  29   ${bank.bank_code || 'BARC'}   ${sortCodeDigits}   12345678
[দেশ] [চেক] [ব্যাংক কোড]  [সর্ট কোড]   [একাউন্ট নম্বর]
\`\`\`
* **কান্ট্রি কোড (২ অক্ষর):** \`GB\` (যুক্তরাজ্য)।
* **চেক ডিজিট (২ সংখ্যা):** স্বয়ংক্রিয় নিরাপত্তা ডিজিট (যেমন \`29\`)।
* **ব্যাংক শনাক্তকারী (৪ অক্ষর):** ব্যাংকের সংক্ষিপ্ত সুইফট প্রিফিক্স।
* **সর্ট কোড (৬ সংখ্যা):** আপনার শাখার ৬-ডিজিটের সর্ট কোড (\`${sortCodeDigits}\`)।
* **একাউন্ট নম্বর (৮ সংখ্যা):** আপনার নিজস্ব ৮-ডিজিটের হিসাব নম্বর।

### বিদেশ থেকে ফান্ড রিসিভ করতে প্রেরককে যা যা দিতে হবে:
১. **হিসাবধারীর নাম (Beneficiary Name):** পাসপোর্টে থাকা পূর্ণ নাম।
২. **আন্তর্জাতিক সুইফট কোড (SWIFT):** \`${swiftCode}\`।
৩. **যুক্তরাজ্য আইবান (UK IBAN):** আপনার ২২ অক্ষরের আইবান কোড (যেমন: \`${knowledge.ibanExample}\`)।
৪. **ব্যাংকের নাম ও ঠিকানা:** ${bankNameBn}, ${headOfficeBn}।
      `.trim()
    },
    {
      id: 'fscs-protection-and-regulation',
      heading: `FSCS Deposit Protection (£85,000) & Financial Regulations`,
      heading_bn: `এফএসসিএস (FSCS) ডিপোজিট সুরক্ষা (£৮৫,০০০) ও গ্রাহক নিরাপত্তা`,
      content: `
Your eligible deposits with **${bankNameEn}** are legally protected under the UK government’s statutory **Financial Services Compensation Scheme (FSCS)**, authorized by the Prudential Regulation Authority under FRN **#${fcaFrn}**.

### How FSCS Deposit Protection Works:
* **Standard Compensation Limit:** Up to **£85,000** per person, per authorized banking institution.
* **Joint Accounts:** If you hold a joint current or savings account with a spouse or partner, you are protected up to **£170,000** (£85,000 each).
* **Temporary High Balances:** Special life events (such as selling a residential home, redundancy payouts, inheritance, or divorce settlements) receive temporary protection of up to **£1,000,000** for up to 6 months.
* **Confirmation of Payee (CoP):** ${bankNameEn} utilizes real-time Confirmation of Payee name matching to ensure money is never transferred to an incorrect or fraudulent account.
      `.trim(),
      content_bn: `
**${bankNameBn}**-এ আপনার রক্ষিত আমানত যুক্তরাজ্য সরকারের সংবিধিবদ্ধ **ফিন্যান্সিয়াল সার্ভিসেস কমপেনসেশন স্কিম (FSCS)** দ্বারা ফার্ম রেফারেন্স নম্বর **#${fcaFrn}**-এর অধীনে সম্পূর্ণ সুরক্ষিত ও বীমাকৃত।

### এফএসসিএস (FSCS) আমানত সুরক্ষার নিয়মাবলী:
* **স্ট্যান্ডার্ড কভারেজ সীমা:** প্রতিটি অনুমোদিত ব্যাংকে প্রতি গ্রাহকের জন্য সর্বোচ্চ **£৮৫,০০০ (পঁচাশি হাজার পাউন্ড)** পর্যন্ত শতভাগ নিরাপদ।
* **যৌথ (Joint) একাউন্ট:** স্বামী-স্ত্রীর যৌথ একাউন্টের ক্ষেত্রে সুরক্ষা সীমা দ্বিগুণ হয়ে সর্বোচ্চ **£১৭০,০০০ (এক লক্ষ সত্তর হাজার পাউন্ড)** পর্যন্ত স্বয়ংক্রিয়ভাবে প্রযোজ্য হয়।
* **অস্থায়ী উচ্চ ব্যালেন্স সুরক্ষা:** বাড়ি বিক্রি, উত্তরাধিকার সূত্রে পাওয়া সম্পত্তি বা অবসর ভাতার মতো বড় অংকের অর্থ ৬ মাস পর্যন্ত সর্বোচ্চ **£১,০০০,০০০ (দশ লক্ষ পাউন্ড)** পর্যন্ত বিশেষ সুরক্ষার আওতাভুক্ত থাকে।
* **কনফার্মেশন অব পেই (CoP):** ভুল বা প্রতারণামূলক একাউন্টে টাকা পাঠানো রোধ করতে রিয়েল-টাইম নাম যাচাইকরণ ব্যবস্থা কার্যকর রয়েছে।
      `.trim()
    }
  ];

  const faqs = [
    {
      question: `What is the sort code for ${bankNameEn}?`,
      question_bn: `${bankNameBn}-এর প্রধান সর্ট কোড (Sort Code) কত?`,
      question_hi: `${bankNameEn} का मुख्य सॉर्ट कोड (Sort Code) क्या है?`,
      answer: `The primary clearing sort code for ${bankNameEn} is ${sortCodeFormatted} (numerical: ${sortCodeDigits}). It is used across the UK for Faster Payments, Bacs direct debits, and local bank transfers.`,
      answer_bn: `${bankNameBn}-এর প্রধান ক্লিয়ারিং সর্ট কোড হলো ${sortCodeFormatted} (সংখ্যায়: ${sortCodeDigits})। এটি যুক্তরাজ্যজুড়ে ফাস্টার পেমেন্টস, ব্যাক্স ডিরেক্ট ডেবিট ও স্থানীয় ফান্ড ট্রান্সফারে ব্যবহৃত হয়।`,
      answer_hi: `${bankNameEn} का प्राथमिक क्लियरिंग सॉर्ट कोड ${sortCodeFormatted} (${sortCodeDigits}) है। इसका उपयोग यूके में फास्टर पेमेंट्स और बैंक ट्रांसफर के लिए किया जाता है।`
    },
    {
      question: `What is the SWIFT/BIC code for international wire transfers to ${bankNameEn}?`,
      question_bn: `${bankNameBn}-এ বিদেশ থেকে রেমিট্যান্স আনার সুইফট কোড (SWIFT) কী?`,
      question_hi: `${bankNameEn} का अंतरराष्ट्रीय वायर ट्रांसफर स्विफ्ट (SWIFT) कोड क्या है?`,
      answer: `The official Head Office SWIFT/BIC code for ${bankNameEn} is ${swiftCode}. Use this 8-character SWIFT code along with your 22-character UK IBAN for all inward cross-border money transfers.`,
      answer_bn: `${bankNameBn}-এর অফিশিয়াল আন্তর্জাতিক হেড অফিস সুইফট কোড হলো ${swiftCode}। বিদেশ থেকে যুক্তরাজ্যে ফান্ড আনতে এই ৮-অক্ষরের সুইফট কোড ও আপনার ২২-সংখ্যার আইবান (IBAN) ব্যবহার করুন।`,
      answer_hi: `${bankNameEn} का आधिकारिक अंतरराष्ट्रीय स्विफ्ट कोड ${swiftCode} है। विदेश से खाते में फंड प्राप्त करने के लिए इस कोड और अपने यूके आईबीएएन (IBAN) का उपयोग करें।`
    },
    {
      question: `How long does a Faster Payment take to clear into ${shortName}?`,
      question_bn: `ফাস্টার পেমেন্টসের মাধ্যমে টাকা আসতে কত সময় লাগে?`,
      question_hi: `फास्टर पेमेंट्स ट्रांसफर क्लियर होने में कितना समय लगता है?`,
      answer: `UK Faster Payments typically arrive in real-time within a few seconds (guaranteed within 2 hours), 24 hours a day, 7 days a week, including weekends and bank holidays.`,
      answer_bn: `ফাস্টার পেমেন্টসের মাধ্যমে টাকা পাঠানোর সাথে সাথে মাত্র কয়েক সেকেন্ডের মধ্যেই প্রাপকের একাউন্টে ক্রেডিট হয়ে যায় (সর্বোচ্চ ২ ঘণ্টা), যা সাপ্তাহিক ছুটি ও সরকারি ছুটির দিনেও ২৪ ঘণ্টা সচল থাকে।`,
      answer_hi: `यूके फास्टर पेमेंट्स आमतौर पर कुछ ही सेकंड में रियल-टाइम में क्रेडिट हो जाता है और यह सप्ताह के सातों दिन 24 घंटे उपलब्ध रहता है।`
    },
    {
      question: `How much of my money is protected by the FSCS in ${bankNameEn}?`,
      question_bn: `${bankNameBn}-এ কত টাকা পর্যন্ত এফএসসিএস (FSCS) স্কিমে সুরক্ষিত?`,
      question_hi: `${bankNameEn} में FSCS द्वारा कितनी राशि सुरक्षित होती है?`,
      answer: `Eligible deposits at ${bankNameEn} are protected by the UK Government's Financial Services Compensation Scheme (FSCS) up to £85,000 for single accounts, and up to £170,000 for joint accounts under PRA FRN #${fcaFrn}.`,
      answer_bn: `${bankNameBn}-এ আপনার গচ্ছিত অর্থ যুক্তরাজ্য সরকারের এফএসসিএস (FSCS) স্কিমের অধীনে একক একাউন্টে সর্বোচ্চ £৮৫,০০০ এবং যৌথ একাউন্টে সর্বোচ্চ £১৭০,০০০ পর্যন্ত সম্পূর্ণ সুরক্ষিত ও বীমাকৃত।`,
      answer_hi: `${bankNameEn} में जमा धनराशि यूके सरकार की FSCS योजना के तहत एकल खातों के लिए £85,000 तक और संयुक्त खातों के लिए £170,000 तक पूरी तरह बीमित और सुरक्षित है।`
    },
    {
      question: `How do I find my UK IBAN for ${shortName}?`,
      question_bn: `${shortName}-এ আমার ২২-সংখ্যার আইবান (IBAN) কীভাবে বের করব?`,
      question_hi: `${shortName} के लिए अपना 22-अंकीय यूके आईबीएएन (IBAN) कैसे प्राप्त करें?`,
      answer: `You can find your official 22-character UK IBAN in the ${knowledge.popularApp} under account details, at the top of your monthly bank statement PDF, or by combining 'GB', your check digits, bank identifier, sort code (${sortCodeDigits}), and 8-digit account number.`,
      answer_bn: `আপনার ২২-ডিজিটের পূর্ণাঙ্গ আইবান (IBAN) খুঁজে পেতে ব্যাংকের মোবাইল অ্যাপে একাউন্ট ডিটেইলস অপশনে যান অথবা পিডিএফ ব্যাংক স্টেটমেন্টের উপরের অংশে দেখুন।`,
      answer_hi: `आप अपने आधिकारिक 22-अंकीय यूके आईबीएएन को बैंक के मोबाइल ऐप में खाता विवरण या अपने मासिक बैंक स्टेटमेंट में देख सकते हैं।`
    }
  ];

  const quickStats = [
    { label: 'Bank Name', label_bn: 'ব্যাংকের পূর্ণ নাম', value: bankNameEn, value_bn: bankNameBn },
    { label: 'Short / Brand Name', label_bn: 'ব্র্যান্ড / সংক্ষিপ্ত নাম', value: shortName, value_bn: shortName },
    { label: 'Primary Sort Code', label_bn: 'প্রধান সর্ট কোড', value: sortCodeFormatted, value_bn: sortCodeFormatted },
    { label: 'Sort Code (Numeric)', label_bn: 'সর্ট কোড (সংখ্যা)', value: sortCodeDigits, value_bn: sortCodeDigits },
    { label: 'SWIFT / BIC Code', label_bn: 'আন্তর্জাতিক সুইফট কোড', value: swiftCode, value_bn: swiftCode },
    { label: 'UK IBAN Format', label_bn: 'যুক্তরাজ্যের আইবান ফরম্যাট', value: knowledge.ibanExample, value_bn: knowledge.ibanExample },
    { label: 'FSCS Protection', label_bn: 'এফএসসিএস ডিপোজিট সুরক্ষা', value: '£85,000 per person', value_bn: 'ব্যক্তি প্রতি £৮৫,০০০' },
    { label: 'FCA / PRA FRN', label_bn: 'রেগুলেটরি ফার্ম নম্বর (FRN)', value: `#${fcaFrn}`, value_bn: `#${fcaFrn}` },
    { label: 'Faster Payments Limit', label_bn: 'ফাস্টার পেমেন্টস সীমা', value: knowledge.fpsLimit, value_bn: knowledge.fpsLimit },
    { label: 'Customer Helpline', label_bn: 'গ্রাহক সহায়তা হেল্পলাইন', value: knowledge.customerCare, value_bn: knowledge.customerCare }
  ];

  return {
    id: bankId,
    bank_id: bankId,
    slug: bankId,
    country: 'uk',
    title: titleEn,
    title_bn: titleBn,
    title_hi: `${bankNameEn} 6-अंकीय सॉर्ट कोड, फास्टर पेमेंट्स एवं स्विफ्ट कोड गाइड 2026`,
    title_ru: `${bankNameEn} - 6-значный сорт-код (Sort Code), Faster Payments и SWIFT реквизиты (2026)`,
    subtitle: subtitleEn,
    subtitle_bn: subtitleBn,
    subtitle_hi: `${bankNameEn} के 6-अंकीय सॉर्ट कोड (${sortCodeFormatted}), फास्टर पेमेंट्स, आईबीएएन (IBAN) एवं £85,000 FSCS सुरक्षा की पूरी जानकारी।`,
    subtitle_ru: `Официальный справочник банковских реквизитов ${bankNameEn}: 6-значный Sort Code (${sortCodeFormatted}), переводы Faster Payments, Bacs и SWIFT.`,
    meta_title: metaTitle,
    meta_description: metaDescription,
    meta_keywords: [
      `${bankNameEn} sort code`,
      `${shortName} sort code ${sortCodeFormatted}`,
      `${bankNameEn} swift code`,
      `${shortName} faster payments limit`,
      `${bankNameEn} uk iban format`,
      `fscs 85000 ${shortName}`,
      `${shortName} bacs direct debit`,
      `chaps wire transfer ${shortName}`
    ],
    read_time: '6 min read',
    author: 'World Bank Codes UK Financial Editorial Team',
    published_date: '2026-03-01',
    last_updated: '2026-09-08',
    overview: `Authoritative guide to 6-digit sort codes (${sortCodeFormatted}), Faster Payments, Bacs direct debits, CHAPS settlement, UK IBAN structure, and £85,000 FSCS deposit protection for ${bankNameEn}.`,
    overview_bn: `${bankNameBn}-এর ৬-সংখ্যার সর্ট কোড (${sortCodeFormatted}), ফাস্টার পেমেন্টস, ব্যাক্স ডিরেক্ট ডেবিট, চ্যাপস সেটেলমেন্ট, যুক্তরাজ্যের আইবান ফরম্যাট এবং এফএসসিএস আমানত সুরক্ষার সম্পূর্ণ বিশ্লেষণ।`,
    sections,
    faqs,
    quick_stats: quickStats
  };
}

/**
 * Pre-generate all articles for all 16 banks in the United Kingdom
 */
export const ukBanksArticles: BankArticle[] = (banksData as any[]).map((bank) =>
  buildUkBankArticle(bank)
);

export function getUkArticleBySlug(slug: string): BankArticle | undefined {
  return ukBanksArticles.find((a) => a.slug === slug || a.bank_id === slug);
}
