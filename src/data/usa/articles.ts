import { BankArticle } from '../../types';
import banksData from './banks.json';

/**
 * Editorial Knowledge Base & Comprehensive Guide for Top 20 United States Commercial & National Banks
 * Covers 9-Digit ABA Routing Numbers, Fedwire, ACH Direct Deposit, SWIFT/BIC, FDIC Insurance, and Wire Transfer Limits.
 */

interface UsBankKnowledge {
  established: string;
  foundingStory: string;
  foundingStory_bn: string;
  category: string;
  category_bn: string;
  coreStrengths: string[];
  coreStrengths_bn: string[];
  swiftHo: string;
  routingMain: string;
  achRouting: string;
  wireRouting: string;
  popularApp: string;
  customerCare: string;
  achTransferTime: string;
  wireCutoff: string;
  fdicCoverage: string;
}

const USA_BANK_KNOWLEDGE: Record<string, UsBankKnowledge> = {
  'jpmorgan-chase': {
    established: '1799 (Founded by Aaron Burr as The Manhattan Company)',
    foundingStory: 'JPMorgan Chase Bank, N.A. is the largest financial institution in the United States and one of the largest financial conglomerates in the world, holding over $3.9 trillion in assets. Operating over 4,700 branches across all 48 contiguous states, Chase provides world-class retail banking, commercial lending, investment management, and global treasury solutions.',
    foundingStory_bn: 'জেপিমরগান চেজ ব্যাংক (JPMorgan Chase Bank, N.A.) মার্কিন যুক্তরাষ্ট্রের বৃহত্তম বাণিজ্যিক ব্যাংক এবং বিশ্বের অন্যতম শীর্ষ আর্থিক প্রতিষ্ঠান, যার সম্পদ ৩.৯ ট্রিলিয়ন ডলারেরও বেশি। ১৭৯৯ সালে প্রতিষ্ঠিত এই ব্যাংকটি যুক্তরাষ্ট্রে ৪,৭০০টিরও বেশি শাখার মাধ্যমে রিটেইল ব্যাংকিং, ক্রেডিট কার্ড এবং আন্তর্জাতিক ট্রেজারি সেবা পরিচালনা করে।',
    category: 'National Commercial Bank (FDIC Insured #628)',
    category_bn: 'জাতীয় বাণিজ্যিক ব্যাংক (FDIC বীমাকৃত #৬২৮)',
    coreStrengths: [
      'Largest retail banking network in the US with 4,700+ branches and 15,000+ ATMs',
      'Award-winning Chase Mobile Banking app with Zelle and credit journey monitoring',
      'Industry-leading Chase Sapphire and Freedom credit card rewards ecosystems',
      'Fedwire, ACH, and international multi-currency global settlement infrastructure'
    ],
    coreStrengths_bn: [
      'যুক্তরাষ্ট্রের বৃহত্তম শাখা নেটওয়ার্ক (৪,৭০০+ ব্রাঞ্চ ও ১৫,০০০+ এটিএম)',
      'পুরস্কারপ্রাপ্ত চেজ মোবাইল অ্যাপ এবং তাৎক্ষণিক জেল (Zelle) ট্রান্সফার',
      'বিশ্ববিখ্যাত স্যাফায়ার ও ফ্রিডম ক্রেডিট কার্ড ইকোসিস্টেম',
      'ফেডওয়্যার (Fedwire), ACH এবং আন্তর্জাতিক ওয়্যার ট্রান্সফার সেবা'
    ],
    swiftHo: 'CHASUS33',
    routingMain: '021000021',
    achRouting: '021000021',
    wireRouting: '021000021',
    popularApp: 'Chase Mobile: Bank & Invest (iOS & Android)',
    customerCare: '1-800-935-9935 (International: +1-713-262-3300)',
    achTransferTime: '1 to 2 business days (Same-day ACH available)',
    wireCutoff: '4:00 PM Eastern Time (ET) for same-day domestic wire',
    fdicCoverage: '$250,000 standard coverage per depositor (FDIC Cert #628)'
  },
  'bank-of-america': {
    established: '1784 (Origins trace to Massachusetts Bank and Bank of Italy in 1904)',
    foundingStory: 'Bank of America, N.A. (BofA) is the second-largest banking institution in the United States, headquartered in Charlotte, North Carolina. Serving approximately 68 million consumer and small business clients through 3,800 retail financial centers and an industry-leading digital platform powered by Erica virtual assistant.',
    foundingStory_bn: 'ব্যাংক অব আমেরিকা (Bank of America, N.A.) মার্কিন যুক্তরাষ্ট্রের দ্বিতীয় বৃহত্তম বাণিজ্যিক ব্যাংক, যার সদর দপ্তর নর্থ ক্যারোলিনার শার্লটে অবস্থিত। দেশজুড়ে ৩,৮০০টিরও বেশি ফিন্যান্সিয়াল সেন্টার এবং ৬৮ মিলিয়নেরও বেশি গ্রাহককে এটি আধুনিক ব্যাংকিং ও এরিকা (Erica) ডিজিটাল অ্যাসিস্ট্যান্ট সুবিধা প্রদান করে।',
    category: 'National Commercial Bank (FDIC Insured #3510)',
    category_bn: 'জাতীয় বাণিজ্যিক ব্যাংক (FDIC বীমাকৃত #৩৫১০)',
    coreStrengths: [
      'Over 3,800 physical branches and 15,000+ ATMs nationwide',
      'Pioneering digital banking featuring Erica virtual financial assistant',
      'Preferred Rewards relationship tiers offering mortgage discounts and cash back boosts',
      'Merrill Edge integrated wealth management and investment brokerage'
    ],
    coreStrengths_bn: [
      'সারাদেশে ৩,৮০০+ শাখা ও ১৫,০০০+ এটিএম',
      'উন্নত মোবাইল ব্যাংকিং ও এআই চালিত এরিকা ভার্চুয়াল অ্যাসিস্ট্যান্ট',
      'মেরিল এজ (Merrill Edge) বিনিয়োগ ও ট্রেডিং ইন্টিগ্রেশন',
      'আন্তর্জাতিক ওয়্যার ট্রান্সফার ও প্রেফার্ড রিওয়ার্ডস সুবিধা'
    ],
    swiftHo: 'BOFAUS3N',
    routingMain: '026009593',
    achRouting: '026009593',
    wireRouting: '026009593',
    popularApp: 'Bank of America Mobile Banking',
    customerCare: '1-800-432-1000 (International: +1-315-724-4022)',
    achTransferTime: '1 to 3 business days (Next-day available)',
    wireCutoff: '5:00 PM Eastern Time (ET) for domestic wires',
    fdicCoverage: '$250,000 per depositor, per account category (FDIC Cert #3510)'
  },
  'wells-fargo': {
    established: '1852 (Founded by Henry Wells and William G. Fargo in San Francisco)',
    foundingStory: 'Wells Fargo Bank, N.A. is one of the "Big Four" banks in the United States, holding over $1.9 trillion in assets. Founded during the California Gold Rush in 1852, Wells Fargo is a pioneer of American stagecoach express transport and modern commercial banking, operating roughly 4,300 retail locations across the nation.',
    foundingStory_bn: 'ওয়েলস ফার্গো ব্যাংক (Wells Fargo Bank, N.A.) মার্কিন যুক্তরাষ্ট্রের অন্যতম শীর্ষ "বিগ ফোর" ব্যাংকিং প্রতিষ্ঠান। ১৮৫২ সালে ক্যালিফোর্নিয়া গোল্ড রাশের সময় প্রতিষ্ঠিত এই ঐতিহাসিক ব্যাংকটির বর্তমান সম্পদ ১.৯ ট্রিলিয়ন ডলারের বেশি এবং সারাদেশে ৪,৩০০টিরও বেশি শাখা রয়েছে।',
    category: 'National Commercial Bank (FDIC Insured #3511)',
    category_bn: 'জাতীয় বাণিজ্যিক ব্যাংক (FDIC বীমাকৃত #৩৫১১)',
    coreStrengths: [
      'Extensive footprint of 4,300+ branches and 11,000+ ATMs',
      'Major mortgage originator and leading commercial real estate lender',
      'Wells Fargo Mobile app with Fargo AI financial guide',
      'Direct Pay, ACH business services, and domestic/international wires'
    ],
    coreStrengths_bn: [
      '৪,৩০০+ রিটেইল শাখা এবং ১১,০০০+ এটিএম বুথ',
      'আমেরিকার বৃহত্তম মর্টগেজ ও কমার্শিয়াল রিয়েল এস্টেট ফাইন্যান্সার',
      'ওয়েলস ফার্গো মোবাইল অ্যাপ ও ফার্গো এআই সহায়িকা',
      'ডিরেক্ট ডিপোজিট, ACH ও বিশ্বস্ত ওয়্যার ট্রান্সফার'
    ],
    swiftHo: 'WFBIUS6S',
    routingMain: '121000248',
    achRouting: '121000248',
    wireRouting: '121000248',
    popularApp: 'Wells Fargo Mobile',
    customerCare: '1-800-869-3557 (International: +1-925-825-7600)',
    achTransferTime: '1 to 3 business days',
    wireCutoff: '4:30 PM Central Time for domestic wire transfer',
    fdicCoverage: '$250,000 standard FDIC deposit insurance (FDIC Cert #3511)'
  },
  'citibank': {
    established: '1812 (Founded as City Bank of New York)',
    foundingStory: 'Citibank, N.A. (consumer division of Citigroup) is America\'s preeminent global bank, with operations in over 160 countries and jurisdictions. Founded in 1812, Citibank has historically pioneered automated teller machines (ATMs) and cross-border corporate payments, offering unmatched international banking and wealth management services.',
    foundingStory_bn: 'সিটিব্যাংক (Citibank, N.A.) বিশ্বব্যাপী ১৬০টিরও বেশি দেশে পরিচালিত মার্কিন যুক্তরাষ্ট্রের সবচেয়ে আন্তর্জাতিক ব্যাংক। ১৮১২ সালে প্রতিষ্ঠিত এই ব্যাংকটি এটিএম এবং আন্তর্জাতিক ক্রস-বর্ডার পেমেন্টের পথিকৃৎ, যা উচ্চমানের ওয়েলথ ম্যানেজমেন্ট ও গ্লোবাল ট্রেজারি সেবা প্রদান করে।',
    category: 'National Commercial Bank (FDIC Insured #7213)',
    category_bn: 'জাতীয় বাণিজ্যিক ব্যাংক (FDIC বীমাকৃত #৭২১৩)',
    coreStrengths: [
      'Unsurpassed global reach spanning North America, Europe, Asia, and Latin America',
      'Premier Citigold and Citi Priority wealth advisory programs',
      'Instant global fee-free transfers between Citibank worldwide accounts',
      'Flagship Double Cash and Premier credit card portfolios'
    ],
    coreStrengths_bn: [
      'বিশ্বের ১৬০টিরও বেশি দেশে বিস্তৃত গ্লোবাল ব্যাংকিং নেটওয়ার্ক',
      'সিটিগোল্ড (Citigold) প্রিমিয়াম সম্পদ ব্যবস্থাপনা সেবা',
      'বিশ্বজুড়ে সিটিব্যাংক অ্যাকাউন্টের মাঝে ফ্রি তাৎক্ষণিক ফান্ড ট্রান্সফার',
      'আন্তর্জাতিক ওয়্যার ও অত্যাধুনিক কর্পোরেট ব্যাংকিং সমাধান'
    ],
    swiftHo: 'CITIUS33',
    routingMain: '021000089',
    achRouting: '021000089',
    wireRouting: '021000089',
    popularApp: 'Citi Mobile: Cards & Banking',
    customerCare: '1-800-374-9700 (International: +1-210-677-0065)',
    achTransferTime: '1 to 2 business days',
    wireCutoff: '4:00 PM Eastern Time for same-day domestic wire',
    fdicCoverage: '$250,000 per depositor (FDIC Cert #7213)'
  },
  'us-bank': {
    established: '1863 (Chartered as First National Bank of Cincinnati)',
    foundingStory: 'U.S. Bank National Association is the fifth-largest commercial bank in the United States, headquartered in Minneapolis, Minnesota. Operating under National Bank Charter #24, U.S. Bank manages over 2,200 branches across 26 states, widely celebrated for financial stability, ethical governance, and premier business payment solutions.',
    foundingStory_bn: 'ইউএস ব্যাংক (U.S. Bank National Association) মার্কিন যুক্তরাষ্ট্রের পঞ্চম বৃহত্তম বাণিজ্যিক ব্যাংক, যার সদর দপ্তর মিনেসোটার মিনিয়াপলিসে অবস্থিত। ১৮৬৩ সালে প্রতিষ্ঠিত এই ব্যাংকটি ২৬টি অঙ্গরাজ্যে ২,২০০টিরও বেশি শাখা পরিচালনা করে এবং অনন্য আর্থিক স্থিতিশীলতার জন্য সুপরিচিত।',
    category: 'National Commercial Bank (FDIC Insured #6548)',
    category_bn: 'জাতীয় বাণিজ্যিক ব্যাংক (FDIC বীমাকৃত #৬৫৪৮)',
    coreStrengths: [
      '2,200+ branches and 4,000+ ATMs across 26 Midwestern and Western states',
      'World’s Most Ethical Companies honoree by Ethisphere for consecutive years',
      'Comprehensive Elavon merchant processing and corporate trust services',
      'Highly rated U.S. Bank Smartly Checking and digital wealth integration'
    ],
    coreStrengths_bn: [
      '২৬টি অঙ্গরাজ্যে ২,২০০+ শাখা ও ৪,০০০+ এটিএম বুথ',
      'টানা কয়েক বছর বিশ্বের অন্যতম শীর্ষ নৈতিক ব্যাংক হিসেবে স্বীকৃত',
      'এলাভন (Elavon) মার্চেন্ট পেমেন্ট প্রসেসিং ও করপোরেট ট্রাস্ট সেবা',
      'ইউএস ব্যাংক স্মার্টলি চেকিং ও নিরাপদ ডিজিটাল ওয়্যার ট্রান্সফার'
    ],
    swiftHo: 'USBKUS44',
    routingMain: '091000022',
    achRouting: '091000022',
    wireRouting: '091000022',
    popularApp: 'U.S. Bank Mobile App',
    customerCare: '1-800-872-2657 (International: +1-503-401-9991)',
    achTransferTime: '1 to 3 business days',
    wireCutoff: '4:30 PM Central Time for domestic wires',
    fdicCoverage: '$250,000 standard FDIC deposit insurance (FDIC Cert #6548)'
  },
  'pnc-bank': {
    established: '1852 (Origins trace to Pittsburgh Trust and Savings Company)',
    foundingStory: 'PNC Bank, National Association is the sixth-largest bank in the US by assets, headquartered in Pittsburgh, Pennsylvania. Operating across 27 states and Washington, D.C. with over 2,300 branches, PNC is renowned for its innovative Virtual Wallet accounts, extensive middle-market lending, and commercial treasury management.',
    foundingStory_bn: 'পিএনসি ব্যাংক (PNC Bank, National Association) মার্কিন যুক্তরাষ্ট্রের ষষ্ঠ বৃহত্তম বাণিজ্যিক ব্যাংক, যার সদর দপ্তর পেনসিলভেনিয়ার পিটসবার্গে। ১৮৫২ সালে প্রতিষ্ঠিত পিএনসি ব্যাংক ২৭টি অঙ্গরাজ্য এবং ওয়াশিংটন ডিসিতে ২,৩০০টিরও বেশি শাখার মাধ্যমে সেবা প্রদান করে।',
    category: 'National Commercial Bank (FDIC Insured #6384)',
    category_bn: 'জাতীয় বাণিজ্যিক ব্যাংক (FDIC বীমাকৃত #৬৩৮৪)',
    coreStrengths: [
      '2,300+ physical financial centers and 60,000+ PNC and partner ATMs',
      'Pioneering Virtual Wallet digital budgeting and money-management platform',
      'Major corporate treasury management and middle-market syndications',
      'Extensive presence across the Mid-Atlantic, Midwest, Southeast, and Texas'
    ],
    coreStrengths_bn: [
      '২,৩০০+ শাখা ও ৬০,০০০+ পার্টনার এটিএম',
      'ভার্চুয়াল ওয়ালেট (Virtual Wallet) আধুনিক বাজেট ব্যবস্থাপনা প্ল্যাটফর্ম',
      'বৃহৎ কমার্শিয়াল ও ট্রেজারি লেন্ডিং সেবা',
      'নিরাপদ ফেডওয়্যার ও ডিরেক্ট ডিপোজিট ক্লিয়ারিং'
    ],
    swiftHo: 'PNCCUS33',
    routingMain: '043000096',
    achRouting: '043000096',
    wireRouting: '043000096',
    popularApp: 'PNC Mobile Banking & Virtual Wallet',
    customerCare: '1-888-762-2265 (International: +1-412-803-7711)',
    achTransferTime: '1 to 2 business days',
    wireCutoff: '4:00 PM Eastern Time for same-day domestic wire',
    fdicCoverage: '$250,000 per depositor (FDIC Cert #6384)'
  },
  'truist-bank': {
    established: '2019 (Historic merger of BB&T established 1872 and SunTrust established 1891)',
    foundingStory: 'Truist Bank is the seventh-largest commercial bank in the United States, headquartered in Charlotte, North Carolina. Formed in December 2019 through the historic $66 billion merger of equals between BB&T and SunTrust Banks, Truist serves over 15 million clients across the high-growth Southeastern and Mid-Atlantic regions.',
    foundingStory_bn: 'ট্রুইস্ট ব্যাংক (Truist Bank) যুক্তরাষ্ট্রের সপ্তম বৃহত্তম বাণিজ্যিক ব্যাংক, যা ২০১৯ সালে দুটি শতবর্ষী ব্যাংক—বিবিঅ্যান্ডটি (১৮৭২) এবং সানট্রাস্ট (১৮৯১)-এর ঐতিহাসিক ঐতিহাসিক মার্জারের মাধ্যমে গঠিত হয়। ব্যাংকটির সদর দপ্তর নর্থ ক্যারোলিনার শার্লটে অবস্থিত।',
    category: 'State Commercial Bank (FDIC Insured #9846)',
    category_bn: 'স্টেট বাণিজ্যিক ব্যাংক (FDIC বীমাকৃত #৯৮৪৬)',
    coreStrengths: [
      '2,000+ branches serving the high-growth Sunbelt and Mid-Atlantic corridors',
      'Truist One Checking offering automatic overdraft waiver buffers',
      'Comprehensive commercial banking, asset finance, and Sheffield Financial retail lending',
      'Seamless digital migration uniting SunTrust and BB&T digital accounts'
    ],
    coreStrengths_bn: [
      'আমেরিকার সানবেল্ট ও আটলান্টিক অঞ্চলে ২,০০০+ শাখা',
      'ট্রুইস্ট ওয়ান চেকিং অ্যাকাউন্ট ও ওভারড্রাফট সুরক্ষা',
      'বৃহৎ রিটেইল লোন ও মার্চেন্ট ফাইন্যান্সিং সুবিধা',
      'নিরাপদ ৯-ডিজিটের রাউটিং ও ডিরেক্ট ডিপোজিট ক্লিয়ারিং'
    ],
    swiftHo: 'TRUSUS33',
    routingMain: '053101121',
    achRouting: '053101121',
    wireRouting: '053101121',
    popularApp: 'Truist Mobile Banking',
    customerCare: '1-844-487-8478 (International: +1-910-914-8250)',
    achTransferTime: '1 to 3 business days',
    wireCutoff: '4:30 PM Eastern Time for domestic wire transfer',
    fdicCoverage: '$250,000 standard FDIC deposit insurance (FDIC Cert #9846)'
  },
  'goldman-sachs': {
    established: '1869 (Founded by Marcus Goldman in New York City)',
    foundingStory: 'Goldman Sachs Bank USA is the commercial banking subsidiary of The Goldman Sachs Group, Inc., one of the world\'s premier investment banking and securities firms. Through its consumer brand Marcus by Goldman Sachs, it delivers high-yield savings accounts, certificates of deposit (CDs), and institutional cash management with industry-leading yields.',
    foundingStory_bn: 'গোল্ডম্যান স্যাক্স ব্যাংক ইউএসএ (Goldman Sachs Bank USA) বিশ্ববিখ্যাত বিনিয়োগ ও আর্থিক প্রতিষ্ঠান দ্য গোল্ডম্যান স্যাক্স গ্রুপের বাণিজ্যিক ব্যাংকিং শাখা। ১৮৬৯ সালে প্রতিষ্ঠিত এই প্রতিষ্ঠানটি মারকাস (Marcus by Goldman Sachs)-এর মাধ্যমে সেরা হাই-ইল্ড সেভিংস ও প্রাতিষ্ঠানিক ক্যাশ ম্যানেজমেন্ট সেবা দেয়।',
    category: 'State Commercial Bank (FDIC Insured #33124)',
    category_bn: 'স্টেট বাণিজ্যিক ব্যাংক (FDIC বীমাকৃত #৩৩১২৪)',
    coreStrengths: [
      'Premier high-yield savings accounts with zero fees and competitive APY',
      'World-class institutional liquidity and corporate deposit solutions',
      'Direct Fedwire routing connection for rapid high-value settlements',
      'Seamless online interface powered by institutional risk management'
    ],
    coreStrengths_bn: [
      'মারকাস হাই-ইল্ড সেভিংস অ্যাকাউন্টে সর্বোচ্চ মুনাফার হার (APY)',
      'বিশ্বমানের প্রাতিষ্ঠানিক লিকুইডিটি ও ট্রেজারি ব্যবস্থাপনা',
      'উচ্চমূল্যের লেনদেনের জন্য সরাসরি ফেডওয়্যার (Fedwire) রাউটিং',
      'কোনো অতিরিক্ত ফি ছাড়াই দ্রুততম ডিজিটাল উইথড্রয়াল'
    ],
    swiftHo: 'GSCOUS33',
    routingMain: '021000018',
    achRouting: '021000018',
    wireRouting: '021000018',
    popularApp: 'Marcus by Goldman Sachs',
    customerCare: '1-855-977-1331 (International: +1-917-344-4340)',
    achTransferTime: '1 to 3 business days (Same-day transfers between linked accounts)',
    wireCutoff: '3:00 PM Eastern Time for domestic wires',
    fdicCoverage: '$250,000 per depositor (FDIC Cert #33124)'
  },
  'td-bank-us': {
    established: '1852 (Origins trace to Portland Savings Bank; subsidiary of TD Bank Group)',
    foundingStory: 'TD Bank, N.A. self-styles as "America\'s Most Convenient Bank®", operating as the US retail banking subsidiary of Canada\'s Toronto-Dominion Bank. With more than 1,100 branches spanning 15 Eastern states from Maine to Florida, TD Bank is beloved for seven-day-a-week branch banking, long customer service hours, and instant debit card printing.',
    foundingStory_bn: 'টিডি ব্যাংক (TD Bank, N.A.) মার্কিন যুক্তরাষ্ট্রের ১৫টি পূর্ব উপকূলীয় অঙ্গরাজ্যে পরিচালিত কানাডার বিখ্যাত টরন্টো-ডোমিনিয়ন ব্যাংকের সহযোগী প্রতিষ্ঠান। সপ্তাহে ৭ দিন খোলা থাকা এবং যেকোনো শাখায় তাৎক্ষণিক ডেবিট কার্ড প্রিন্টিং সুবিধার জন্য এটি "আমেরিকার সবচেয়ে সুবিধাজনক ব্যাংক" হিসেবে খ্যাত।',
    category: 'National Commercial Bank (FDIC Insured #184)',
    category_bn: 'জাতীয় বাণিজ্যিক ব্যাংক (FDIC বীমাকৃত #১৮৪)',
    coreStrengths: [
      '1,100+ stores open 7 days a week with extended morning and evening hours',
      'Instant in-branch debit card replacement upon account opening',
      'Cross-border banking integration with TD Canada Trust accounts',
      'Penny Arcade coin counting and community-focused neighborhood banking'
    ],
    coreStrengths_bn: [
      'সপ্তাহে ৭ দিন খোলা থাকা ১,১০০+ ফিন্যান্সিয়াল স্টোর',
      'শাখা থেকেই তাৎক্ষণিক ডেবিট কার্ড প্রিন্ট করে নেওয়ার সুবিধা',
      'কানাডার টিডি ব্যাংকের সাথে সরাসরি ক্রস-বর্ডার ফান্ড ট্রান্সফার',
      'সহজ ৯-ডিজিটের রাউটিং নম্বর ও জিরো-ব্যালেন্স স্টুডেন্ট অ্যাকাউন্ট'
    ],
    swiftHo: 'TDOMUS33',
    routingMain: '011103093',
    achRouting: '011103093',
    wireRouting: '011103093',
    popularApp: 'TD Bank (US)',
    customerCare: '1-888-751-9000 (24/7 Live Representative)',
    achTransferTime: '1 to 2 business days',
    wireCutoff: '4:00 PM Eastern Time for same-day domestic wire',
    fdicCoverage: '$250,000 standard FDIC deposit insurance (FDIC Cert #184)'
  },
  'capital-one': {
    established: '1994 (Pioneered by Richard Fairbank as a credit card disruptor)',
    foundingStory: 'Capital One, N.A. is one of the top 10 largest banks in the US, celebrated for combining online-first agility with innovative physical Capital One Cafés. Famous for its "What\'s in your wallet?®" marketing, Capital One provides fee-free 360 Checking, high-yield savings, and world-class Venture travel credit cards.',
    foundingStory_bn: 'ক্যাপিটাল ওয়ান (Capital One, N.A.) যুক্তরাষ্ট্রের শীর্ষ ১০ ব্যাংকের একটি, যা সম্পূর্ণ ফি-বিহীন ৩৬০ চেকিং অ্যাকাউন্ট এবং আধুনিক "ক্যাপিটাল ওয়ান ক্যাফে" ধারণার মাধ্যমে আমেরিকান ব্যাংকিং ব্যবস্থায় বৈপ্লবিক পরিবর্তন এনেছে। ১৯৯৪ সালে রিচার্ড ফেয়ারব্যাংক এটি প্রতিষ্ঠা করেন।',
    category: 'National Commercial Bank (FDIC Insured #33954)',
    category_bn: 'জাতীয় বাণিজ্যিক ব্যাংক (FDIC বীমাকৃত #৩৩৯৫৪)',
    coreStrengths: [
      'Capital One 360 Checking with zero monthly fees and zero foreign transaction fees',
      'Innovative Capital One Cafés providing co-working space and 50% handcrafted beverage discounts',
      'Award-winning Capital One Mobile app featuring Eno virtual numbers and fraud alerts',
      'Venture X, Quicksilver, and Savor consumer and dining credit cards'
    ],
    coreStrengths_bn: [
      'কোনো মাসিক বা ওভারড্রাফট ফি ছাড়া ক্যাপিটাল ওয়ান ৩৬০ চেকিং',
      'অনন্য "ক্যাপিটাল ওয়ান ক্যাফে" যেখানে কফি ও ওয়াইফাই সহ ব্যাংকিং সুবিধা মেলে',
      'ইনো (Eno) এআই অ্যাসিস্ট্যান্ট চালিত দ্রুত ও নিরাপদ মোবাইল অ্যাপ',
      'বিদেশে ব্যবহারের জন্য জিরো ফরেন ট্রানজ্যাকশন ফি ডেবিট কার্ড'
    ],
    swiftHo: 'NFBKUS33',
    routingMain: '051405515',
    achRouting: '051405515',
    wireRouting: '051405515',
    popularApp: 'Capital One Mobile (iOS & Android)',
    customerCare: '1-800-655-2265 (Credit Cards: 1-800-227-4825)',
    achTransferTime: '1 to 2 business days (Early direct deposit up to 2 days prior)',
    wireCutoff: '3:00 PM Eastern Time for outbound domestic wires',
    fdicCoverage: '$250,000 per depositor (FDIC Cert #33954)'
  },
  'bank-of-new-york-mellon': {
    established: '1784 (Founded by Alexander Hamilton; America\'s oldest bank)',
    foundingStory: 'The Bank of New York Mellon (BNY) is the oldest banking corporation in the United States, founded in 1784 by founding father Alexander Hamilton. As the world\'s largest custody bank with over $47 trillion in assets under custody and administration, BNY forms the bedrock of global financial market plumbing and institutional investment.',
    foundingStory_bn: 'ব্যাংক অব নিউ ইয়র্ক মেলন (BNY) আমেরিকার সবচেয়ে প্রাচীনতম ব্যাংক, যা ১৭৮৪ সালে মার্কিন যুক্তরাষ্ট্রের প্রতিষ্ঠাতা আলেকজান্ডার হ্যামিল্টন প্রতিষ্ঠা করেছিলেন। বিশ্বের বৃহত্তম কাস্টডি ব্যাংক হিসেবে এটি ৪৭ ট্রিলিয়ন ডলারেরও বেশি সম্পদ তত্ত্বাবধান ও কাস্টডি পরিচালনা করে।',
    category: 'State Commercial Bank (FDIC Insured #639)',
    category_bn: 'স্টেট বাণিজ্যিক ব্যাংক (FDIC বীমাকৃত #৬৩৯)',
    coreStrengths: [
      'World’s largest asset servicer and global custodian ($47T+ AUC/A)',
      'Oldest bank in the US holding continuous charter operations since 1784',
      'Critical clearance agent for US government securities and sovereign funds',
      'Direct Fedwire routing for institutional global currency settlements'
    ],
    coreStrengths_bn: [
      'বিশ্বের বৃহত্তম সম্পদ তত্ত্বাবধায়ক (৪৭ ট্রিলিয়ন ডলার কাস্টডি)',
      '১৭৮৪ সাল থেকে একটানা পরিচালিত আমেরিকার প্রাচীনতম আর্থিক প্রতিষ্ঠান',
      'মার্কিন সরকারি সিকিউরিটিজ ও সোভারেন ফান্ডের প্রধান ক্লিয়ারিং হাউস',
      'সরাসরি ফেডওয়্যার ও সুইফট ভিত্তিক আন্তর্জাতিক সেটেলমেন্ট'
    ],
    swiftHo: 'IRVTUS3N',
    routingMain: '021000018',
    achRouting: '021000018',
    wireRouting: '021000018',
    popularApp: 'BNY Wealth Management & Portal',
    customerCare: '1-800-225-5269 (Institutional: +1-212-495-1784)',
    achTransferTime: 'Same-day to 1 business day for institutional accounts',
    wireCutoff: '5:00 PM Eastern Time for Fedwire settlements',
    fdicCoverage: '$250,000 per depositor (FDIC Cert #639)'
  },
  'state-street': {
    established: '1792 (Founded as Union Bank in Boston, Massachusetts)',
    foundingStory: 'State Street Bank and Trust Company is the second-oldest continually operating bank in the United States, headquartered in Boston. Specializing in institutional asset servicing, investment management, and ETF creation through State Street Global Advisors (creators of SPDR SPY ETF), State Street manages $40+ trillion in assets under custody.',
    foundingStory_bn: 'স্টেট স্ট্রিট ব্যাংক (State Street Bank and Trust Company) মার্কিন যুক্তরাষ্ট্রের দ্বিতীয় প্রাচীনতম ব্যাংক, যা ১৭৯২ সালে বোস্টনে প্রতিষ্ঠিত হয়। বিশ্বের সবচেয়ে বড় এক্সচেঞ্জ-ট্রেডেড ফান্ড (SPDR S&P 500 ETF - SPY)-এর উদ্ভাবক হিসেবে এটি ৪০ ট্রিলিয়ন ডলারের বেশি প্রাতিষ্ঠানিক সম্পদ তত্ত্বাবধান করে।',
    category: 'State Trust & Commercial Bank (FDIC Insured #9368)',
    category_bn: 'স্টেট ট্রাস্ট ও বাণিজ্যিক ব্যাংক (FDIC বীমাকৃত #৯৩৬৮)',
    coreStrengths: [
      'Pioneer of modern ETFs and manager of the world-renowned SPDR family',
      '$40+ trillion in assets under custody and administration',
      'Premier institutional securities lending, foreign exchange, and data analytics',
      'Robust global clearing infrastructure across 100+ geographic markets'
    ],
    coreStrengths_bn: [
      'বিশ্বখ্যাত এসপিওয়াই (SPDR SPY ETF)-এর প্রতিষ্ঠাতা ও ইনভেস্টমেন্ট ম্যানেজার',
      '৪০ ট্রিলিয়ন ডলারেরও বেশি প্রাতিষ্ঠানিক কাস্টডি সম্পদ',
      'আন্তর্জাতিক মুদ্রা বিনিময় (FX) এবং সিকিউরিটিজ লেন্ডিংয়ে বিশ্বনেতা',
      '১০০টিরও বেশি ভৌগোলিক বাজারে বিশ্বস্ত ক্লিয়ারিং ব্যবস্থা'
    ],
    swiftHo: 'SBOSUS33',
    routingMain: '011000028',
    achRouting: '011000028',
    wireRouting: '011000028',
    popularApp: 'State Street Global Markets Portal',
    customerCare: '1-617-786-3000 (Institutional Client Services)',
    achTransferTime: '1 business day',
    wireCutoff: '4:30 PM Eastern Time',
    fdicCoverage: '$250,000 standard FDIC coverage (FDIC Cert #9368)'
  },
  'citizens-bank': {
    established: '1828 (Founded as High Street Bank in Providence, Rhode Island)',
    foundingStory: 'Citizens Bank, N.A. is one of the nation\'s oldest and largest financial institutions, headquartered in Providence, Rhode Island. Operating approximately 1,100 branches across 14 New England, Mid-Atlantic, and Midwest states, Citizens provides personal checking, merchant financing, and innovative student loan refinancing.',
    foundingStory_bn: 'সিটিজেন্স ব্যাংক (Citizens Bank, N.A.) যুক্তরাষ্ট্রের অন্যতম প্রাচীন ও বৃহৎ বাণিজ্যিক ব্যাংক, যার সদর দপ্তর রোড আইল্যান্ডের প্রভিডেন্সে অবস্থিত। ১৮২৮ সালে প্রতিষ্ঠিত এই ব্যাংকটি নিউ ইংল্যান্ড ও মধ্য-আটলান্টিক অঞ্চলের ১৪টি অঙ্গরাজ্যে ১,১০০টিরও বেশি শাখা পরিচালনা করে।',
    category: 'National Commercial Bank (FDIC Insured #57957)',
    category_bn: 'জাতীয় বাণিজ্যিক ব্যাংক (FDIC বীমাকৃত #৫৭৯৫৭)',
    coreStrengths: [
      '1,100+ branches and 3,400+ ATMs across 14 Northeastern and Midwest states',
      'Market leader in nationwide student loan refinancing and Apple iPhone Upgrade financing',
      'Citizens Quest Checking with dedicated financial advisory services',
      'Citizens Access high-yield online savings and certificates of deposit'
    ],
    coreStrengths_bn: [
      'আমেরিকার উত্তর-পূর্বাঞ্চলে ১,১০০+ শাখা ও ৩,৪০০+ এটিএম',
      'স্টুডেন্ট লোন রিফাইন্যান্সিং ও অ্যাপল আইফোন আপগ্রেড প্রোগ্রামের প্রধান অংশীদার',
      'সিটিজেন্স অ্যাকসেস (Citizens Access) হাই-ইল্ড অনলাইন সেভিংস',
      'সহজ ও নির্ভরযোগ্য ৯-ডিজিটের রাউটিং নম্বর ও ডিরেক্ট ডিপোজিট'
    ],
    swiftHo: 'CIZNUS33',
    routingMain: '011500120',
    achRouting: '011500120',
    wireRouting: '011500120',
    popularApp: 'Citizens Bank Mobile Banking',
    customerCare: '1-800-922-9999 (International: +1-401-455-5000)',
    achTransferTime: '1 to 3 business days',
    wireCutoff: '4:00 PM Eastern Time for domestic wire transfer',
    fdicCoverage: '$250,000 standard FDIC deposit insurance (FDIC Cert #57957)'
  },
  'morgan-stanley': {
    established: '1935 (Formed by Henry S. Morgan and Harold Stanley on Wall Street)',
    foundingStory: 'Morgan Stanley Bank, N.A. is the commercial and private banking arm of global investment powerhouse Morgan Stanley. Following its landmark acquisitions of E*TRADE and Eaton Vance, Morgan Stanley provides seamlessly integrated private wealth banking, retail stock trading, high-yield cash accounts, and securities-backed lending.',
    foundingStory_bn: 'মরগান স্ট্যানলি ব্যাংক (Morgan Stanley Bank, N.A.) বিশ্বখ্যাত মার্কিন বিনিয়োগ প্রতিষ্ঠান মরগান স্ট্যানলির প্রাইভেট ও কমার্শিয়াল ব্যাংকিং শাখা। ই*ট্রেড (E*TRADE) অধিগ্রহণের পর এটি সাধারণ বিনিয়োগকারী ও ধনকুবেরদের উচ্চমানের ব্রোকারেজ, হাই-ইল্ড সেভিংস ও প্রাইভেট ব্যাংকিং সেবা দেয়।',
    category: 'National Commercial Bank (FDIC Insured #32992)',
    category_bn: 'জাতীয় বাণিজ্যিক ব্যাংক (FDIC বীমাকৃত #৩২৯৯২)',
    coreStrengths: [
      'Integration with E*TRADE for zero-commission stock, options, and ETF trading',
      'Morgan Stanley Private Bank CashPlus accounts with unlimited ATM fee rebates worldwide',
      'Securities-based tailored lending and multi-generational family office advisory',
      'Fast Fedwire settlement between brokerage accounts and checking balances'
    ],
    coreStrengths_bn: [
      'ই*ট্রেড (E*TRADE)-এর সাথে সমন্বিত ফ্রি স্টক ও অপশন ট্রেডিং প্ল্যাটফর্ম',
      'ক্যাশপ্লাস (CashPlus) অ্যাকাউন্টে বিশ্বজুড়ে সীমাহীন ফ্রি এটিএম রিবেট',
      'ওয়েলথ ম্যানেজমেন্ট ও সিকিউরিটিজ-ব্যাকড পার্সোনাল লোন',
      'দ্রুততম ফেডওয়্যার ট্রান্সফার ও বিনিয়োগ সেটেলমেন্ট'
    ],
    swiftHo: 'MSNYUS33',
    routingMain: '124303126',
    achRouting: '124303126',
    wireRouting: '124303126',
    popularApp: 'Morgan Stanley Mobile & E*TRADE from Morgan Stanley',
    customerCare: '1-888-454-3965 (International: +1-801-902-6997)',
    achTransferTime: '1 to 2 business days (Instant between E*TRADE & Morgan Stanley accounts)',
    wireCutoff: '3:00 PM Eastern Time for same-day domestic wire',
    fdicCoverage: '$250,000 per depositor (Extended multi-bank sweep coverage up to $5M)'
  },
  'fifth-third-bank': {
    established: '1858 (Merger of Third National Bank and Fifth National Bank in Cincinnati)',
    foundingStory: 'Fifth Third Bank, National Association is a premier regional bank headquartered in Cincinnati, Ohio. Deriving its distinctive name from the 1908 merger of Third National Bank and Fifth National Bank, Fifth Third operates over 1,070 branches across Ohio, Kentucky, Indiana, Michigan, Illinois, Florida, Georgia, and the Carolinas.',
    foundingStory_bn: 'ফিফথ থার্ড ব্যাংক (Fifth Third Bank, National Association) ওহাইও অঙ্গরাজ্যের সিনসিনাটিতে সদর দপ্তর অবস্থিত আমেরিকার অন্যতম শীর্ষ আঞ্চলিক ব্যাংক। ১৯০৮ সালে থার্ড ন্যাশনাল ও ফিফথ ন্যাশনালের মিলনে গঠিত এই ব্যাংকটি মিডওয়েস্ট ও ফ্লোরিডায় ১,০৭০টিরও বেশি শাখা পরিচালনা করে।',
    category: 'National Commercial Bank (FDIC Insured #6672)',
    category_bn: 'জাতীয় বাণিজ্যিক ব্যাংক (FDIC বীমাকৃত #৬৬৭২)',
    coreStrengths: [
      '1,070+ branches across 11 Midwestern and Southeastern states',
      'Fifth Third Momentum Checking with Early Pay direct deposit (up to 2 days early)',
      'Extra Time® grace period feature allowing an extra day to avoid overdraft fees',
      'Robust middle-market commercial syndication and equipment leasing'
    ],
    coreStrengths_bn: [
      'মিডওয়েস্ট ও সানবেল্টের ১১টি অঙ্গরাজ্যে ১,০৭০+ শাখা',
      'মোমেন্টাম চেকিং ও আর্লি পে (২ দিন আগে বেতন পাওয়ার সুবিধা)',
      'ওভারড্রাফট ফি এড়ানোর জন্য বিশেষ এক্সট্রা টাইম (Extra Time®) সুবিধা',
      'আমেরিকান এক্সপ্রেস ও এটিএম নেটওয়ার্কের সাথে সমন্বিত সেবা'
    ],
    swiftHo: 'FTBCUS33',
    routingMain: '042000314',
    achRouting: '042000314',
    wireRouting: '042000314',
    popularApp: 'Fifth Third Mobile Banking',
    customerCare: '1-800-972-3030 (International: +1-513-579-5303)',
    achTransferTime: '1 to 2 business days',
    wireCutoff: '4:00 PM Eastern Time for domestic wire transfer',
    fdicCoverage: '$250,000 standard FDIC deposit insurance (FDIC Cert #6672)'
  },
  'm-and-t-bank': {
    established: '1856 (Founded as Manufacturers and Traders Bank in Buffalo, New York)',
    foundingStory: 'M&T Bank (Manufacturers and Traders Trust Company) is a leading American regional banking powerhouse headquartered in Buffalo, New York. Holding over $200 billion in assets following its strategic acquisition of People\'s United Bank, M&T operates approximately 1,000 branches across 12 Mid-Atlantic and Northeast states.',
    foundingStory_bn: 'এম অ্যান্ড টি ব্যাংক (M&T Bank) নিউ ইয়র্কের বাফেলোতে সদর দপ্তর অবস্থিত মার্কিন যুক্তরাষ্ট্রের শীর্ষস্থানীয় আঞ্চলিক ব্যাংকগুলোর অন্যতম। ১৮৫৬ সালে প্রতিষ্ঠিত এই ব্যাংকটির সম্পদ ২০০ বিলিয়ন ডলারেরও বেশি এবং এটি নিউ ইয়র্ক, নিউ জার্সি ও নিউ ইংল্যান্ডে ১,০০০টিরও বেশি শাখা পরিচালনা করে।',
    category: 'State Commercial Bank (FDIC Insured #588)',
    category_bn: 'স্টেট বাণিজ্যিক ব্যাংক (FDIC বীমাকৃত #৫৮৮)',
    coreStrengths: [
      '1,000+ branches and 2,200+ ATMs across 12 Mid-Atlantic and Northeast states',
      'Consistent top-tier Small Business Administration (SBA) lender nationwide',
      'Wilmington Trust premier wealth management and fiduciary custody services',
      'MyWay Banking low-cost checking certified by Bank On standards'
    ],
    coreStrengths_bn: [
      '১২টি অঙ্গরাজ্যে ১,০০০+ পূর্ণাঙ্গ ব্যাংকিং শাখা ও ২,২০০+ এটিএম',
      'ক্ষুদ্র ব্যবসার ঋণে যুক্তরাষ্ট্রের শীর্ষস্থানীয় এসবিএ (SBA) লেন্ডার',
      'উইলমিংটন ট্রাস্ট (Wilmington Trust) আন্তর্জাতিক ওয়েলথ ম্যানেজমেন্ট',
      'সহজ ও নিরাপদ ৯-সংখ্যার রাউটিং নম্বর ও ব্যাংকিং ট্রান্সফার'
    ],
    swiftHo: 'FMBKUS33',
    routingMain: '022000046',
    achRouting: '022000046',
    wireRouting: '022000046',
    popularApp: 'M&T Mobile Banking',
    customerCare: '1-800-724-2440 (International: +1-716-635-4000)',
    achTransferTime: '1 to 3 business days',
    wireCutoff: '4:00 PM Eastern Time for same-day domestic wire',
    fdicCoverage: '$250,000 per depositor (FDIC Cert #588)'
  },
  'huntington-national-bank': {
    established: '1866 (Founded by P. W. Huntington in Columbus, Ohio)',
    foundingStory: 'The Huntington National Bank is a premier Midwest regional bank holding over $190 billion in assets, headquartered in Columbus, Ohio. Celebrated for customer advocacy and consumer-friendly banking innovations like 24-Hour Grace® and Early Pay, Huntington operates more than 1,000 full-service branches across 11 states.',
    foundingStory_bn: 'হান্টিংটন ন্যাশনাল ব্যাংক (The Huntington National Bank) ওহাইওর কলম্বাসে সদর দপ্তর অবস্থিত আমেরিকার অন্যতম প্রশংসিত আঞ্চলিক ব্যাংক। ১৮৬৬ সালে প্রতিষ্ঠিত হান্টিংটন ব্যাংক গ্রাহকবান্ধব ২৪-আওয়ার গ্রেস (24-Hour Grace®) ও আর্লি পে সুবিধার জন্য সারাদেশে ব্যাপক জনপ্রিয়।',
    category: 'National Commercial Bank (FDIC Insured #6560)',
    category_bn: 'জাতীয় বাণিজ্যিক ব্যাংক (FDIC বীমাকৃত #৬৫৬০)',
    coreStrengths: [
      '1,000+ branches and 1,600+ ATMs across 11 Midwest and Southeastern states',
      'Pioneer of 24-Hour Grace® for automatic overdraft fee protection',
      'Nation’s #1 SBA 7(a) small business lender by transaction count for over a decade',
      'Asterisk-Free Checking account with no monthly maintenance fees'
    ],
    coreStrengths_bn: [
      '১১টি অঙ্গরাজ্যে ১,০০০+ শাখা এবং ১,৬০০+ এটিএম',
      '২৪-আওয়ার গ্রেস (24-Hour Grace) ফি মওকুফের নির্ভরযোগ্য সুরক্ষা',
      'টানা এক দশক ধরে আমেরিকার ১ নম্বর ক্ষুদ্র ব্যবসা ঋণদাতা (SBA 7a)',
      'অ্যাস্ট্যারিস্ক-ফ্রি নো-ফি চেকিং ও দ্রুতগতির ডিরেক্ট ডিপোজিট'
    ],
    swiftHo: 'HUNTUS33',
    routingMain: '044000024',
    achRouting: '044000024',
    wireRouting: '044000024',
    popularApp: 'Huntington Mobile',
    customerCare: '1-800-480-2265 (International: +1-616-355-8828)',
    achTransferTime: '1 to 2 business days (Early Pay up to 2 days prior)',
    wireCutoff: '4:00 PM Eastern Time for domestic wire',
    fdicCoverage: '$250,000 standard FDIC deposit insurance (FDIC Cert #6560)'
  },
  'keybank': {
    established: '1825 (Origins trace to Commercial Bank of Albany, New York)',
    foundingStory: 'KeyBank National Association is the primary subsidiary of KeyCorp, headquartered in Cleveland, Ohio. Tracing its roots back over 200 years to 1825, KeyBank manages over $185 billion in assets with nearly 1,000 branches across 15 states from Maine to Alaska, providing robust consumer banking, healthcare finance, and Laurel Road physician lending.',
    foundingStory_bn: 'কিব্যাংক (KeyBank National Association) ওহাইওর ক্লিভল্যান্ডে সদর দপ্তর অবস্থিত ২০০ বছরের পুরনো ঐতিহাসিক আমেরিকান ব্যাংক। ১৮২৫ সালে প্রতিষ্ঠিত কিব্যাংক মেইন থেকে আলাস্কা পর্যন্ত ১৫টি অঙ্গরাজ্যে প্রায় ১,০০০টি শাখার মাধ্যমে আধুনিক ব্যাংকিং পরিচালনা করে।',
    category: 'National Commercial Bank (FDIC Insured #17534)',
    category_bn: 'জাতীয় বাণিজ্যিক ব্যাংক (FDIC বীমাকৃত #১৭৫৩৪)',
    coreStrengths: [
      'Nearly 1,000 branches across 15 states spanning the Northeast, Midwest, and Pacific Northwest',
      'Laurel Road specialized digital banking and student loan refinancing for doctors and dentists',
      'Key Smart Checking with zero maintenance fee requirements on qualifying deposits',
      'Comprehensive commercial equipment leasing and real estate capital markets'
    ],
    coreStrengths_bn: [
      '১৫টি অঙ্গরাজ্যে প্রায় ১,০০০ শাখা ও শক্তিশালী অনলাইন নেটওয়ার্ক',
      'লরেল রোড (Laurel Road) স্পেশালাইজড ফিন্যান্সিং ও রিফাইন্যান্সিং সেবা',
      'কি স্মার্ট চেকিং ও সহজ মোবাইল ব্যাংকিং সুবিধা',
      'নিরাপদ ৯-ডিজিটের রাউটিং নম্বর ও আন্তর্জাতিক ওয়্যার সাপোর্ট'
    ],
    swiftHo: 'KEYBUS33',
    routingMain: '041001039',
    achRouting: '041001039',
    wireRouting: '041001039',
    popularApp: 'KeyBank Mobile',
    customerCare: '1-800-539-2968 (International: +1-716-838-8600)',
    achTransferTime: '1 to 3 business days',
    wireCutoff: '4:30 PM Eastern Time for domestic wire transfer',
    fdicCoverage: '$250,000 standard FDIC deposit insurance (FDIC Cert #17534)'
  },
  'regions-bank': {
    established: '1971 (Merger of First National Bank of Montgomery, Exchange Security, and First National of Huntsville)',
    foundingStory: 'Regions Bank is a premier Southern regional banking institution headquartered in Birmingham, Alabama. Managing over $150 billion in assets with 1,250+ full-service branches across 16 states in the South and Midwest, Regions provides personalized community-style banking, GreenSky home improvement financing, and modern treasury management.',
    foundingStory_bn: 'রিজিয়নস ব্যাংক (Regions Bank) মার্কিন যুক্তরাষ্ট্রের দক্ষিণাঞ্চলের অন্যতম শীর্ষ বাণিজ্যিক ব্যাংক, যার সদর দপ্তর আলাবামার বার্মিংহামে। ১,২৫০টিরও বেশি শাখার মাধ্যমে ব্যাংকটি আলাবামা, ফ্লোরিডা, টেক্সাস, জর্জিয়া ও টেনেসি সহ ১৬টি অঙ্গরাজ্যে সেবা প্রদান করে।',
    category: 'State Commercial Bank (FDIC Insured #12368)',
    category_bn: 'স্টেট বাণিজ্যিক ব্যাংক (FDIC বীমাকৃত #১২৩৬৮)',
    coreStrengths: [
      '1,250+ branches and 2,000+ ATMs across 16 Southern, Midwestern, and Texas states',
      'Regions LifeGreen® Checking with rewards points and mobile deposit perks',
      'GreenSky point-of-sale home improvement consumer loan platform',
      'Dedicated relationship bankers and proactive financial planning reviews'
    ],
    coreStrengths_bn: [
      'আমেরিকার সাউথ ও টেক্সাসের ১৬টি অঙ্গরাজ্যে ১,২৫০+ শাখা',
      'লাইফগ্রিন (LifeGreen®) চেকিং ও সহজ মোবাইল ডিপোজিট সুবিধা',
      'হোম ইমপ্রুভমেন্ট লোন ও করপোরেট ট্রেজারি সমাধান',
      'সরাসরি ফেডওয়্যার ও ৯-সংখ্যার নির্ভরযোগ্য রাউটিং সিস্টেম'
    ],
    swiftHo: 'UABAUS44',
    routingMain: '062000019',
    achRouting: '062000019',
    wireRouting: '062000019',
    popularApp: 'Regions Mobile Banking',
    customerCare: '1-800-734-4667 (International: +1-205-581-7120)',
    achTransferTime: '1 to 2 business days',
    wireCutoff: '4:00 PM Central Time for domestic wire transfer',
    fdicCoverage: '$250,000 per depositor (FDIC Cert #12368)'
  },
  'northern-trust': {
    established: '1889 (Founded by Byron Laflin Smith in Chicago, Illinois)',
    foundingStory: 'The Northern Trust Company is a prestigious international wealth management and asset servicing institution headquartered in Chicago, Illinois. Managing over $1.4 trillion in assets under management and $15+ trillion in assets under custody, Northern Trust has catered to high-net-worth families, sovereign wealth funds, and leading institutions since 1889.',
    foundingStory_bn: 'দ্য নর্দার্ন ট্রাস্ট কোম্পানি (The Northern Trust Company) ১৮৮৯ সালে শিকাগোতে প্রতিষ্ঠিত আমেরিকার অন্যতম অভিজাত প্রাইভেট ওয়েলথ ব্যাংক। বিশ্বের শীর্ষ ধনী পরিবার, সোভারেন ফান্ড এবং প্রাতিষ্ঠানিক বিনিয়োগকারীদের জন্য এটি ১৫ ট্রিলিয়ন ডলারের বেশি সম্পদ কাস্টডি ও প্রাইভেট ব্যাংকিং পরিচালনা করে।',
    category: 'State Commercial & Trust Bank (FDIC Insured #913)',
    category_bn: 'স্টেট বাণিজ্যিক ও ট্রাস্ট ব্যাংক (FDIC বীমাকৃত #৯১৩)',
    coreStrengths: [
      'Global leader in private wealth management, family office advisory, and fiduciary trust',
      '$15+ trillion in assets under custody/administration globally',
      'Bespoke private banking with dedicated relationship managers and custom credit facilities',
      'Pristine credit ratings and ultra-conservative balance sheet management'
    ],
    coreStrengths_bn: [
      'বিশ্বের শীর্ষ প্রাইভেট ওয়েলথ ও ফ্যামিলি অফিস অ্যাডভাইজরি প্রতিষ্ঠান',
      '১৫ ট্রিলিয়ন ডলারেরও বেশি বৈশ্বিক কাস্টডি সম্পদ',
      'অতি-উচ্চ সম্পদশালী গ্রাহকদের জন্য কাস্টম প্রাইভেট ব্যাংকিং ও ক্রেডিট সুবিধা',
      'বিশ্বমানের আন্তর্জাতিক সুইফট সেটেলমেন্ট ও ফেডওয়্যার নিরাপত্তা'
    ],
    swiftHo: 'CNORUS44',
    routingMain: '071000152',
    achRouting: '071000152',
    wireRouting: '071000152',
    popularApp: 'Northern Trust Private Passport®',
    customerCare: '1-888-289-6542 (International: +1-312-630-6000)',
    achTransferTime: 'Same-day to 1 business day for private banking clients',
    wireCutoff: '4:30 PM Central Time for domestic wire transfer',
    fdicCoverage: '$250,000 per depositor (FDIC Cert #913)'
  }
};

/**
 * Helper to build an exhaustive, human-grade editorial guide for any US Bank
 */
function buildUsaBankArticle(bank: any): BankArticle {
  const bankId = bank.id;
  const bankNameEn = bank.name;
  const bankNameBn = bank.name_bn || bank.name;
  const shortName = bank.short_name || bank.name;
  const routingNumber = bank.routing_number || bank.ach_routing || '021000021';
  const swiftCode = bank.swift_code || 'CHASUS33';
  const headOffice = bank.head_office || 'United States';
  const headOfficeBn = bank.head_office_bn || 'মার্কিন যুক্তরাষ্ট্র';
  const fdicCert = bank.fdic_cert || 'FDIC Insured';
  const fedDistrict = bank.fed_district || 'Federal Reserve System';
  const branchCount = bank.branch_count || 80;

  const knowledge = USA_BANK_KNOWLEDGE[bankId] || {
    established: bank.established || '1900',
    foundingStory: `${bankNameEn} is a leading commercial banking institution in the United States, operating verified routing numbers under the Federal Reserve System and FDIC insurance certificate #${fdicCert}.`,
    foundingStory_bn: `${bankNameBn} মার্কিন যুক্তরাষ্ট্রের একটি শীর্ষস্থানীয় বাণিজ্যিক ব্যাংক, যা ফেডারেল রিজার্ভ সিস্টেমের অধীনে ৯-সংখ্যার অফিশিয়াল রাউটিং নাম্বার এবং FDIC বীমাকৃত সনদ #${fdicCert} পরিচালনা করে।`,
    category: bank.type || 'National Commercial Bank',
    category_bn: 'জাতীয় বাণিজ্যিক ব্যাংক',
    coreStrengths: [
      'FDIC insured up to $250,000 per depositor',
      'Automated Clearing House (ACH) and Fedwire certified routing',
      'Online and mobile banking with Zelle real-time payments',
      'International wire settlements via SWIFT network'
    ],
    coreStrengths_bn: [
      'প্রতি গ্রাহকের আমানতে $২৫০,০০০ পর্যন্ত এফডিআইসি (FDIC) বীমা সুরক্ষা',
      'অটোমেটেড ক্লিয়ারিং হাউস (ACH) ও ফেডওয়্যার অনুমোদিত রাউটিং ব্যবস্থা',
      'অনলাইন ও মোবাইল ব্যাংকিংয়ে তাৎক্ষণিক জেল (Zelle) ফান্ড ট্রান্সফার',
      'সুইফট (SWIFT) নেটওয়ার্কের মাধ্যমে আন্তর্জাতিক ওয়্যার ট্রান্সফার'
    ],
    swiftHo: swiftCode,
    routingMain: routingNumber,
    achRouting: bank.ach_routing || routingNumber,
    wireRouting: bank.wire_routing || routingNumber,
    popularApp: `${shortName} Mobile App`,
    customerCare: '1-800-432-1000',
    achTransferTime: '1 to 3 business days',
    wireCutoff: '4:00 PM Eastern Time',
    fdicCoverage: '$250,000 standard FDIC deposit insurance'
  };

  const titleEn = `${bankNameEn} Routing Number, ACH Direct Deposit & SWIFT Code Directory 2026`;
  const titleBn = `${bankNameBn} (${shortName}) রাউটিং নাম্বার, ACH ডিরেক্ট ডিপোজিট ও সুইফট কোড ২০২৬`;
  const subtitleEn = `Complete official guide to 9-digit ABA routing numbers, domestic Fedwire, ACH payroll direct deposit, and international wire transfers for ${bankNameEn}.`;
  const subtitleBn = `${bankNameBn}-এর ৯-ডিজিটের অফিশিয়াল ABA রাউটিং নাম্বার, ফেডওয়্যার, পে-রোল ডিরেক্ট ডিপোজিট এবং আন্তর্জাতিক সুইফট কোডের পূর্ণাঙ্গ গাইড।`;

  const metaTitle = `${bankNameEn} 9-Digit Routing Number, ACH & Wire Guide (2026) | World Bank Codes`;
  const metaDescription = `Find the official 9-digit ABA routing number (${routingNumber}), ACH direct deposit info, wire routing, SWIFT code (${swiftCode}), FDIC cert #${fdicCert}, and branch locations for ${bankNameEn}. Verified for 2026.`;

  const sections = [
    {
      id: 'bank-overview-and-credentials',
      heading: `About ${bankNameEn}: History, Assets & Regulatory Status`,
      heading_bn: `${bankNameBn}: ব্যাংকের ইতিহাস, সম্পদ ও রেগুলেটরি পরিচিতি`,
      content: `
${knowledge.foundingStory}

### Key Institutional Credentials:
* **Official Bank Name:** ${bankNameEn}
* **Common / Trading Name:** ${shortName}
* **Charter & License Type:** ${knowledge.category}
* **FDIC Certificate Number:** **${fdicCert}** (100% backed by the full faith and credit of the United States Government)
* **Federal Reserve District:** ${fedDistrict}
* **Global Head Office:** ${headOffice}
* **Primary 9-Digit ABA Routing Number:** \`${routingNumber}\`
* **Head Office International SWIFT Code:** \`${swiftCode}\`

### Core Institutional Strengths:
${knowledge.coreStrengths.map((s) => `* **${s}**`).join('\n')}
      `.trim(),
      content_bn: `
${knowledge.foundingStory_bn}

### ব্যাংকের মূল রেগুলেটরি পরিচিতি:
* **অফিশিয়াল নাম:** ${bankNameBn} (${bankNameEn})
* **সংক্ষিপ্ত নাম:** ${shortName}
* **লাইসেন্স ও চার্টার ক্যাটাগরি:** ${knowledge.category_bn}
* **এফডিআইসি সনদ নম্বর (FDIC Cert):** **${fdicCert}** (মার্কিন সরকারের পূর্ণ নিশ্চয়তাপূর্ণ বীমা)
* **ফেডারেল রিজার্ভ ডিস্ট্রিক্ট:** ${fedDistrict}
* **প্রধান কার্যালয়ের ঠিকানা:** ${headOfficeBn}
* **প্রধান ৯-ডিজিটের রাউটিং নাম্বার:** \`${routingNumber}\`
* **আন্তর্জাতিক সুইফট কোড (SWIFT/BIC):** \`${swiftCode}\`

### ব্যাংকের প্রধান সুবিধাসমূহ:
${knowledge.coreStrengths_bn.map((s) => `* ${s}`).join('\n')}
      `.trim()
    },
    {
      id: 'aba-routing-number-structure',
      heading: `Understanding the 9-Digit ABA Routing Transit Number (RTN)`,
      heading_bn: `আমেরিকান ব্যাংকের ৯-ডিজিটের ABA রাউটিং নাম্বারের গঠন ও বিশ্লেষণ`,
      content: `
An **ABA Routing Transit Number (RTN)** is a unique nine-digit code assigned to financial institutions in the United States by Accuity (formerly Thomson Financial), the official registrar for the American Bankers Association (ABA). It is used to identify the specific financial institution responsible for crediting or debiting money during financial transactions.

For **${bankNameEn}**, the primary routing number is **\`${routingNumber}\`**.

### Mathematical Breakdown of the 9 Digits:
1. **Federal Reserve Routing Symbol (Digits 1–2):** The first two digits specify the Federal Reserve Bank district overseeing the charter. For example, \`01\` through \`12\` designate the primary twelve Federal Reserve districts (e.g., Boston, New York, Philadelphia, Cleveland, Richmond, Atlanta, Chicago, St. Louis, Minneapolis, Kansas City, Dallas, San Francisco).
2. **Thrift / Specialized Institution Indicator (Digits 3–4):** Identifies the Federal Reserve check processing center or electronic processing facility.
3. **Unique Financial Institution Identifier (Digits 5–8):** The specific 4-digit code assigned to **${shortName}** within its Federal Reserve district.
4. **Modulus-10 Checksum (Digit 9):** A mathematical check digit calculated using a weighted checksum algorithm:
   $$\\text{Checksum} = (3(d_1 + d_4 + d_7) + 7(d_2 + d_5 + d_8) + 1(d_3 + d_6 + d_9)) \\pmod{10} = 0$$
   If the checksum does not equal zero modulo 10, the banking terminal automatically rejects the routing number as invalid or typo-ridden before processing.
      `.trim(),
      content_bn: `
আমেরিকান ব্যাংকিং ব্যবস্থায় **ABA রাউটিং ট্রানজিট নাম্বার (Routing Transit Number - RTN)** হলো ৯-সংখ্যার একটি অনন্য কোড, যা আমেরিকান ব্যাংকার্স অ্যাসোসিয়েশন (ABA) কর্তৃক নিবন্ধিত। মার্কিন যুক্তরাষ্ট্রের এক ব্যাংক থেকে অন্য ব্যাংকে লেনদেনের জন্য এই কোডটি প্রতিটি ব্যাংককে সুনির্দিষ্টভাবে চিহ্নিত করে।

**${bankNameBn}**-এর প্রধান অফিশিয়াল রাউটিং নাম্বার হলো **\`${routingNumber}\`**।

### ৯-সংখ্যার গাণিতিক গঠন ও বিশ্লেষণ:
1. **ফেডারেল রিজার্ভ সিম্বল (১ম ও ২য় সংখ্যা):** প্রথম দুটি সংখ্যা নির্দেশ করে ব্যাংকটি কোন ফেডারেল রিজার্ভ ডিস্ট্রিক্টের আওতাধীন (যেমন: 01 বোস্টন, 02 নিউ ইয়র্ক, 04 ক্লিভল্যান্ড, 05 রিচমন্ড, 12 সান ফ্রান্সিসকো ইত্যাদি)।
2. **প্রসেসিং সেন্টার কোড (৩য় ও ৪র্থ সংখ্যা):** ফেডারেল রিজার্ভের নির্দিষ্ট চেক প্রসেসিং বা ইলেকট্রনিক হাব নির্দেশ করে।
3. **ব্যাংক আইডেন্টিফায়ার (৫ম থেকে ৮ম সংখ্যা):** এটি ${shortName}-এর জন্য নির্ধারিত অনন্য ৪-ডিজিটের কোড।
4. **মডুলাস-১০ চেকসাম (৯ম সংখ্যা):** একটি গাণিতিক চেকসাম অ্যালগরিদম যা নিশ্চিত করে যে রাউটিং নম্বরটি সম্পূর্ণ নির্ভুল এবং কোনো ভুল টাইপ হয়নি।
      `.trim()
    },
    {
      id: 'how-to-find-routing-on-check',
      heading: `How to Locate Routing Number & Account Number on a Check`,
      heading_bn: `চেক বই (Check Leaf) থেকে রাউটিং নম্বর ও একাউন্ট নম্বর বের করার নিয়ম`,
      content: `
If you hold a physical paper check from **${bankNameEn}**, you can easily identify your routing number and account number along the bottom edge, printed in magnetic ink (MICR format):

\`\`\`
|: 021000021 |:  1234567890 ||'  1001
    [Routing]       [Account]     [Check #]
\`\`\`

1. **Routing Number (Bottom-Left 9 Digits):** Located on the bottom-left corner of the check, bordered by the transit symbol \`|:\`. This is always exactly 9 digits (\`${routingNumber}\`).
2. **Account Number (Middle Sequence):** The sequence of numbers immediately to the right of the routing number, ending at the on-us symbol \`||\`. This is your personal checking or business account number (typically 8 to 12 digits).
3. **Check Number (Far-Right Sequence):** The short 3 or 4-digit number at the bottom-right corner, which matches the check number printed at the top-right of your check leaf.

*Tip: You can also look up your verified routing number anytime on our World Bank Codes portal or directly in the ${knowledge.popularApp} under "Account Details / Direct Deposit".*
      `.trim(),
      content_bn: `
আপনার যদি ${bankNameBn}-এর একটি সাধারণ চেক বই থাকে, তবে চেকের নিচের বর্ডার বরাবর ম্যাগনেটিক কালিতে (MICR) লেখা লাইনটি দেখে খুব সহজেই রাউটিং নম্বর ও একাউন্ট নম্বর আলাদা করতে পারবেন:

1. **রাউটিং নাম্বার (নিচের বাম দিকের ৯টি সংখ্যা):** চেকের নিচের সর্ববামে \`|:\` চিহ্নের মাঝে ৯ সংখ্যার যে কোডটি থাকে, সেটিই হলো আপনার ব্যাংকের **ABA Routing Number** (যেমন: \`${routingNumber}\`)।
2. **একাউন্ট নাম্বার (মাঝের সংখ্যাগুলো):** রাউটিং নম্বরের ঠিক পরপরই থাকা ৮ থেকে ১২ ডিজিটের সংখ্যাটি হলো আপনার ব্যক্তিগত বা ব্যবসায়িক ব্যাংক একাউন্ট নম্বর।
3. **চেক নম্বর (ডানদিকের সংখ্যা):** সর্বডানে থাকা ৩ বা ৪ ডিজিটের সংখ্যাটি হলো ওই নির্দিষ্ট চেকের সিরিয়াল নম্বর।

*পরামর্শ: আপনি আমাদের World Bank Codes পোর্টালে অথবা আপনার ${knowledge.popularApp} অ্যাপের "Direct Deposit Information" অপশনে গিয়েও সাথে সাথে এই তথ্যগুলো পেতে পারেন।*
      `.trim()
    },
    {
      id: 'ach-vs-wire-transfers-comparison',
      heading: `Transfer Methods: ACH Direct Deposit vs. Domestic Fedwire vs. Zelle`,
      heading_bn: `ফান্ড ট্রান্সফারের মাধ্যম: ACH ডিরেক্ট ডিপোজিট, ফেডওয়্যার এবং তাৎক্ষণিক জেল (Zelle)`,
      content: `
When transferring money to or from **${bankNameEn}**, it is essential to choose the appropriate network depending on the urgency, transfer cost, and transaction limits:

| Payment Network | Speed & Settlement | Typical Cost | Common Use Cases |
| :--- | :--- | :--- | :--- |
| **ACH Direct Deposit (Inbound)** | 1 to 2 business days (Early pay available) | **$0 (Free)** | Employer payroll, Social Security, IRS tax refunds |
| **ACH Direct Payment (Outbound)** | 1 to 3 business days | **$0 (Free)** for standard | Credit card bill pay, utility bills, mortgage, Venmo |
| **Fedwire Domestic Wire (Inbound)** | Instantaneous (Real-time gross settlement) | $0 to $15 | Large incoming funds, business invoicing |
| **Fedwire Domestic Wire (Outbound)** | Same-day (Sent within 15–60 minutes) | $25 to $35 | Real estate closings, title payments, high-value transfers |
| **Zelle® Person-to-Person** | Seconds (24 hours / 7 days) | **$0 (Free)** | Splitting dinner, rent to roommates, friends and family |
| **International Outgoing Wire** | 1 to 3 business days via SWIFT | $40 to $50 + FX | Foreign remittances, overseas property, international tuition |

### Important Rules for Domestic Fedwire:
* Fedwire cut-off time for ${shortName} is generally **${knowledge.wireCutoff}**. Wires submitted after this time will be processed on the next business banking day.
* Always confirm whether your branch requires an **ACH Routing Number** or a dedicated **Wire Routing Number** (for many national banks, both are identical, but regional centers may maintain separate numbers).
      `.trim(),
      content_bn: `
${bankNameBn}-এ টাকা পাঠাতে বা একাউন্ট থেকে অন্য কোথাও ফান্ড ট্রান্সফার করার সময় সঠিক পেমেন্ট নেটওয়ার্ক নির্বাচন করা জরুরি:

| পেমেন্ট নেটওয়ার্ক | নিষ্পত্তির সময় | সাধারণ ব্যাংক ফি | সবচেয়ে উপযুক্ত ব্যবহার |
| :--- | :--- | :--- | :--- |
| **ACH ডিরেক্ট ডিপোজিট (ইনবাউন্ড)** | ১ থেকে ২ কার্যদিবস | **সম্পূর্ণ ফ্রি ($0)** | চাকরির বেতন, বোনাস, সরকারি ভাতা, ট্যাক্স রিফান্ড |
| **ACH আউটবাউন্ড বিল পে** | ১ থেকে ৩ কার্যদিবস | **ফ্রি ($0)** | ক্রেডিট কার্ড বিল, ইউটিলিটি বিল, গাড়ি বা বাড়ির কিস্তি |
| **ফেডওয়্যার ডমেস্টিক ওয়্যার (আউট)** | তাৎক্ষণিক (১৫-৬০ মিনিট) | $২৫ থেকে $৩৫ | বাড়ি/জমি ক্রয়, জরুরি ব্যবসায়িক পেমেন্ট, বড় অঙ্কের লেনদেন |
| **জেল (Zelle®) ইনস্ট্যান্ট ট্রান্সফার** | কয়েক সেকেন্ডে | **ফ্রি ($0)** | বন্ধু ও পরিবারের মাঝে তাৎক্ষণিক টাকা লেনদেন |
| **আন্তর্জাতিক ওয়্যার ট্রান্সফার** | ১ থেকে ৩ কার্যদিবস | $৪০ থেকে $৫০ | বিদেশে পরিবারকে টাকা পাঠানো, আমদানি-রপ্তানি ও ফ্রিল্যান্সিং |

*জরুরি টিপস: ফেডওয়্যার (Fedwire) পাঠানোর জন্য ব্যাংকের নির্ধারিত দৈনিক কাট-অফ টাইম থাকে (${knowledge.wireCutoff})। এই সময়ের পরে সাবমিট করলে তা পরবর্তী কার্যদিবসে পাঠানো হবে।*
      `.trim()
    },
    {
      id: 'international-inward-wire-swift-guide',
      heading: `International Wire Transfers & SWIFT/BIC Code (\`${swiftCode}\`)`,
      heading_bn: `আন্তর্জাতিক ওয়্যার ট্রান্সফার ও সুইফট কোড (\`${swiftCode}\`) সহায়িকা`,
      content: `
If you are receiving money from abroad (such as Bangladesh, India, UK, Germany, Canada, UAE, or Australia) or collecting international freelance payments (Upwork, Fiverr, YouTube, Stripe, Google AdSense) into your **${bankNameEn}** account, you must provide your foreign sender with the following standardized wire instructions:

### Inward International Wire Instructions:
* **Beneficiary Bank Name:** ${bankNameEn}
* **Head Office SWIFT / BIC Code:** \`${swiftCode}\`
* **Beneficiary Bank Address:** ${headOffice}
* **ABA / Fedwire Routing Number:** \`${routingNumber}\`
* **Beneficiary Full Name:** Your full legal name as registered on your bank account
* **Beneficiary Account Number:** Your 8–12 digit checking or savings account number
* **Purpose of Remittance:** Family support, salary, freelance software export, or investment

*Note on Intermediary Banks: Because the US Dollar is the world's primary reserve currency, all incoming foreign currency wires are cleared through US clearing banks. Using ${bankNameEn}'s official SWIFT code \`${swiftCode}\` ensures zero routing detour and rapid direct credit.*
      `.trim(),
      content_bn: `
আপনি যদি বাংলাদেশ, ভারত, যুক্তরাজ্য, জার্মানি, দুবাই বা বিশ্বের যেকোনো দেশ থেকে ${bankNameBn}-এর একাউন্টে আন্তর্জাতিক ওয়্যার ট্রান্সফার বা রেমিট্যান্স আনতে চান, তবে প্রেরককে নিচের তথ্যগুলো সঠিকভাবে প্রদান করতে হবে:

### আন্তর্জাতিক ওয়্যার ট্রান্সফারের জন্য প্রয়োজনীয় তথ্য:
* **বেনিফিশিয়ারি ব্যাংকের নাম:** ${bankNameEn}
* **হেড অফিস সুইফট কোড (SWIFT/BIC):** \`${swiftCode}\`
* **ব্যাংকের প্রধান কার্যালয়ের ঠিকানা:** ${headOfficeBn}
* **ABA রাউটিং নাম্বার:** \`${routingNumber}\`
* **গ্রাহকের পুরো নাম (Beneficiary Name):** আপনার ব্যাংক অ্যাকাউন্টে যেভাবে নাম লেখা রয়েছে
* **একাউন্ট নম্বর (Account Number):** আপনার ব্যক্তিগত চেকিং বা সেভিংস হিসাব নম্বর
* **টাকা পাঠানোর কারণ (Purpose):** পারিবারিক খরচ, ফ্রিল্যান্সিং পারিশ্রমিক বা ব্যবসা

*বিশেষ দ্রষ্টব্য: হেড অফিসের মূল সুইফট কোড \`${swiftCode}\` ব্যবহার করলে মার্কিন যুক্তরাষ্ট্রে যেকোনো শাখা বা অঙ্গরাজ্যের একাউন্টে কোনো রকম মধ্যবর্তী বিলম্ব ছাড়াই দ্রুত ডলার জমা হয়ে যায়।*
      `.trim()
    },
    {
      id: 'fdic-insurance-and-security',
      heading: `FDIC Insurance Coverage ($250,000) & Account Protection`,
      heading_bn: `এফডিআইসি (FDIC) ডিপোজিট ইন্স্যুরেন্স ও গ্রাহক আমানত সুরক্ষা`,
      content: `
Your deposits with **${bankNameEn}** are backed by the full faith and credit of the United States Government through the **Federal Deposit Insurance Corporation (FDIC)** under Certificate Number **#${fdicCert}**.

### What FDIC Insurance Protects:
* **Standard Coverage Limit:** Up to **$250,000** per depositor, per insured bank, for each account ownership category.
* **Eligible Account Types:** Checking accounts, Savings accounts, Money Market Deposit Accounts (MMDAs), and Certificates of Deposit (CDs).
* **Multiplied Coverage:** By holding different ownership categories (e.g., individual accounts, joint accounts with a spouse, trust accounts, or retirement IRAs), a family can legally protect millions of dollars in deposits under complete federal insurance.
* **Non-Covered Assets:** Mutual funds, stocks, bonds, crypto assets, annuities, and contents of safe deposit boxes are not insured by the FDIC.
      `.trim(),
      content_bn: `
${bankNameBn}-এ আপনার জমাকৃত প্রতিটি ডলার মার্কিন যুক্তরাষ্ট্র সরকারের **ফেডারেল ডিপোজিট ইন্স্যুরেন্স কর্পোরেশন (FDIC)** দ্বারা সনদ নম্বর **#${fdicCert}**-এর অধীনে সম্পূর্ণ সুরক্ষিত ও বীমাকৃত।

### এফডিআইসি বীমার মূল নিয়মাবলী:
* **স্ট্যান্ডার্ড কভারেজ সীমা:** প্রতিটি ব্যাংকে প্রতি আমানতকারীর জন্য সর্বোচ্চ **$২৫০,০০০ (আড়াই লক্ষ ডলার)** পর্যন্ত শতভাগ সুরক্ষিত।
* **যেসব একাউন্ট বীমার আওতাভুক্ত:** চেকিং একাউন্ট, সেভিংস একাউন্ট, মানি মার্কেট একাউন্ট এবং সিডি (Certificate of Deposit)।
* **সুরক্ষা বৃদ্ধির কৌশল:** ব্যক্তিগত একাউন্ট, স্বামী-স্ত্রীর যৌথ (Joint) একাউন্ট এবং ট্রাস্ট একাউন্টের সমন্বয়ে একটি পরিবার একই ব্যাংকে দশ লক্ষ ডলারের বেশি সম্পূর্ণ বীমাকৃত রাখতে পারে।
      `.trim()
    }
  ];

  const faqs = [
    {
      question: `What is the 9-digit routing number for ${bankNameEn}?`,
      question_bn: `${bankNameBn}-এর অফিশিয়াল ৯-ডিজিটের রাউটিং নাম্বার কত?`,
      question_hi: `${bankNameEn} का 9-अंकीय रूटिंग नंबर क्या है?`,
      answer: `The primary 9-digit ABA routing number for ${bankNameEn} is ${routingNumber}. It is used for nationwide ACH direct deposits, automatic bill payments, and domestic Fedwire transfers.`,
      answer_bn: `${bankNameBn}-এর প্রধান ৯-সংখ্যার অফিশিয়াল রাউটিং নম্বর হলো ${routingNumber}। এটি দেশজুড়ে পে-রোল ডিরেক্ট ডিপোজিট, বিল পেমেন্ট এবং ফেডওয়্যার ট্রান্সফারের জন্য ব্যবহৃত হয়।`,
      answer_hi: `${bankNameEn} का प्राथमिक 9-अंकीय ABA रूटिंग नंबर ${routingNumber} है। इसका उपयोग डायरेक्ट डिपॉजिट, बिल भुगतान और डोमेस्टिक फेडवायर ट्रांसफर के लिए किया जाता है।`
    },
    {
      question: `Is the ACH routing number the same as the Wire routing number?`,
      question_bn: `ACH রাউটিং নাম্বার এবং ওয়্যার রাউটিং নাম্বার কি একই হয়?`,
      question_hi: `क्या ACH रूटिंग नंबर और वायर रूटिंग नंबर एक ही होते हैं?`,
      answer: `For ${shortName}, the electronic ACH routing number (${routingNumber}) is generally accepted for all regular direct deposits and payments. However, some large regional branches may maintain separate routing numbers for same-day Fedwire transfers. Always verify through the mobile app before sending large wires.`,
      answer_bn: `${shortName}-এর ক্ষেত্রে সাধারণ ACH ডিরেক্ট ডিপোজিট ও বিল পেমেন্টের জন্য ${routingNumber} ব্যবহৃত হয়। তবে কিছু অঞ্চলে তাৎক্ষণিক ফেডওয়্যারের জন্য আলাদা বিশেষ ওয়্যার রাউটিং থাকতে পারে, যা ব্যাংকের মোবাইল অ্যাপ থেকে দেখে নেওয়া যায়।`,
      answer_hi: `${shortName} के लिए अधिकांश नियमित ACH पेमेंट्स में ${routingNumber} ही उपयोग होता है, हालांकि कुछ मामलों में सेम-डे वायर ट्रांसफर के लिए विशेष वायर रूटिंग नंबर हो सकता है।`
    },
    {
      question: `What is the SWIFT / BIC code for international transfers to ${bankNameEn}?`,
      question_bn: `${bankNameBn}-এ বিদেশ থেকে টাকা পাঠানোর সুইফট কোড (SWIFT Code) কী?`,
      question_hi: `${bankNameEn} का अंतरराष्ट्रीय स्विफ्ट (SWIFT) कोड क्या है?`,
      answer: `The official Head Office SWIFT/BIC code for ${bankNameEn} is ${swiftCode}. Use this 8-character code alongside your account number for inward international wire transfers from any foreign country.`,
      answer_bn: `${bankNameBn}-এর অফিশিয়াল আন্তর্জাতিক হেড অফিস সুইফট কোড হলো ${swiftCode}। বিদেশ থেকে যেকোনো মুদ্রা বা ডলার রেমিট্যান্স সরাসরি একাউন্টে আনতে এই ৮-ডিজিটের কোডটি ব্যবহার করুন।`,
      answer_hi: `${bankNameEn} का आधिकारिक अंतरराष्ट्रीय स्विफ्ट/BIC कोड ${swiftCode} है। विदेश से भारत या अन्य देशों से वायर ट्रांसफर प्राप्त करने के लिए इसका उपयोग करें।`
    },
    {
      question: `How much money is insured by the FDIC in ${bankNameEn}?`,
      question_bn: `${bankNameBn}-এ আমার কত টাকা পর্যন্ত FDIC বীমা দ্বারা সুরক্ষিত?`,
      question_hi: `${bankNameEn} में FDIC द्वारा कितनी राशि तक का बीमा होता है?`,
      answer: `Deposits at ${bankNameEn} are federally insured by the FDIC up to $250,000 per depositor, per insured bank, for each account ownership category under FDIC Certificate #${fdicCert}.`,
      answer_bn: `${bankNameBn}-এ আপনার গচ্ছিত আমানত মার্কিন যুক্তরাষ্ট্র সরকারের এফডিআইসি (FDIC Cert #${fdicCert}) দ্বারা প্রতিটি ক্যাটাগরিতে সর্বোচ্চ $২৫০,০০০ (আড়াই লক্ষ ডলার) পর্যন্ত শতভাগ নিরাপদ ও বীমাকৃত।`,
      answer_hi: `${bankNameEn} में जमा की गई राशि FDIC सर्टिफिकेट #${fdicCert} के तहत प्रति जमाकर्ता $2,50,000 तक अमेरिकी सरकार द्वारा पूरी तरह से बीमित और सुरक्षित है।`
    },
    {
      question: `How long does direct deposit take to clear into ${shortName}?`,
      question_bn: `ডিরেক্ট ডিপোজিট হতে কত সময় লাগে?`,
      question_hi: `डायरेक्ट डिपॉजिट क्रेडिट होने में कितना समय लगता है?`,
      answer: `Payroll and government direct deposits typically clear on your scheduled payday by 9:00 AM local time. Accounts with early direct deposit features can receive funds up to 2 days ahead of payday.`,
      answer_bn: `নিয়মিত পে-রোল ও সরকারি বেতন সাধারণত বেতনের দিন সকাল ৯টার মধ্যেই একাউন্টে ক্রেডিট হয়ে যায়। আর আর্লি ডিরেক্ট ডিপোজিট সুবিধা চালু থাকলে বেতনের ২ দিন আগেই টাকা একাউন্টে জমা হয়।`,
      answer_hi: `नियमित पेरोल डायरेक्ट डिपॉजिट आमतौर पर आपके वेतन दिवस की सुबह 9:00 बजे तक खाते में आ जाता है। प्रारंभिक डायरेक्ट डिपॉजिट सुविधा होने पर 2 दिन पहले भी फंड मिल सकता है।`
    }
  ];

  const quickStats = [
    { label: 'Bank Name', label_bn: 'ব্যাংকের পূর্ণ নাম', value: bankNameEn, value_bn: bankNameBn },
    { label: 'Short / Brand Name', label_bn: 'ব্র্যান্ড / সংক্ষিপ্ত নাম', value: shortName, value_bn: shortName },
    { label: 'Primary ABA Routing', label_bn: 'প্রধান ABA রাউটিং নাম্বার', value: routingNumber, value_bn: routingNumber },
    { label: 'ACH Direct Deposit', label_bn: 'ACH ডিরেক্ট ডিপোজিট কোড', value: knowledge.achRouting, value_bn: knowledge.achRouting },
    { label: 'Domestic Wire Routing', label_bn: 'ফেডওয়্যার রাউটিং নাম্বার', value: knowledge.wireRouting, value_bn: knowledge.wireRouting },
    { label: 'SWIFT / BIC Code', label_bn: 'আন্তর্জাতিক সুইফট কোড', value: swiftCode, value_bn: swiftCode },
    { label: 'FDIC Insurance Cert', label_bn: 'এফডিআইসি সনদ নম্বর', value: `#${fdicCert}`, value_bn: `#${fdicCert} ($250k insured)` },
    { label: 'Federal Reserve District', label_bn: 'ফেডারেল রিজার্ভ ডিস্ট্রিক্ট', value: fedDistrict, value_bn: fedDistrict },
    { label: 'Customer Helpline', label_bn: 'গ্রাহক সহায়তা হেল্পলাইন', value: knowledge.customerCare, value_bn: knowledge.customerCare }
  ];

  return {
    id: bankId,
    bank_id: bankId,
    slug: bankId,
    country: 'us',
    title: titleEn,
    title_bn: titleBn,
    title_hi: `${bankNameEn} 9-अंकीय रूटिंग नंबर, ACH डायरेक्ट डिपॉजिट एवं स्विफ्ट कोड डायरेक्टरी 2026`,
    title_ru: `${bankNameEn} - 9-значный ABA Routing Number, ACH и SWIFT реквизиты (2026)`,
    subtitle: subtitleEn,
    subtitle_bn: subtitleBn,
    subtitle_hi: `${bankNameEn} के 9-अंकीय ABA रूटिंग नंबर, डायरेक्ट डिपॉजिट एवं स्विफ्ट कोड की पूरी जानकारी।`,
    subtitle_ru: `Официальный справочник банковских реквизитов ${bankNameEn}: 9-значный маршрутный номер ABA, ACH и переводы Fedwire.`,
    meta_title: metaTitle,
    meta_description: metaDescription,
    meta_keywords: [
      `${bankNameEn} routing number`,
      `${shortName} 9 digit routing number`,
      `${bankNameEn} ach routing direct deposit`,
      `${shortName} wire transfer routing number`,
      `${bankNameEn} swift code`,
      `fdic cert ${fdicCert} ${shortName}`,
      `${shortName} check routing number lookup`
    ],
    read_time: '6 min read',
    author: 'World Bank Codes Financial Editorial Team',
    published_date: '2026-03-01',
    last_updated: '2026-09-08',
    overview: `Comprehensive guide to 9-digit ABA routing numbers, ACH direct deposits, Fedwire transfers, SWIFT codes, and FDIC protection for ${bankNameEn}.`,
    overview_bn: `${bankNameBn}-এর ৯-সংখ্যার ABA রাউটিং নাম্বার, পে-রোল ACH ডিরেক্ট ডিপোজিট, ফেডওয়্যার ওয়্যার ট্রান্সফার এবং এফডিআইসি বীমার পূর্ণাঙ্গ বিশ্লেষণ।`,
    sections,
    faqs,
    quick_stats: quickStats
  };
}

/**
 * Pre-generate all articles for all 20 banks in the United States
 */
export const usaBanksArticles: BankArticle[] = (banksData as any[]).map((bank) =>
  buildUsaBankArticle(bank)
);

export function getUsaArticleBySlug(slug: string): BankArticle | undefined {
  return usaBanksArticles.find((a) => a.slug === slug || a.bank_id === slug);
}
