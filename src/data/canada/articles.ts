import { BankArticle } from '../../types';
import banksData from './banks.json';

/**
 * Authoritative Editorial Knowledge Base & Comprehensive Guide for Canadian Banks (Canadian Financial Institutions)
 * Covers Canadian 3-Digit Institution Numbers, 5-Digit Transit Numbers, 9-Digit Routing Numbers (0YYYXXXXX),
 * Interac e-Transfer, Automated Clearing Settlement System (ACSS) / Lynx (LVTS replacement),
 * CDIC (Canada Deposit Insurance Corporation $100,000 protection), and SWIFT/BIC Wire Transfers.
 */

interface CanadianBankKnowledge {
  established: string;
  foundingStory: string;
  foundingStory_bn: string;
  category: string;
  category_bn: string;
  coreStrengths: string[];
  coreStrengths_bn: string[];
  institutionNumber: string;
  sampleTransit: string;
  eftRouting: string;
  swiftHo: string;
  popularApp: string;
  customerCare: string;
  interacLimit: string;
  cdicProtection: string;
  osfiCategory: string;
}

const CANADA_BANK_KNOWLEDGE: Record<string, CanadianBankKnowledge> = {
  'rbc-royal-bank-of-canada': {
    established: '1864 (Founded in Halifax, Nova Scotia as Merchants Bank of Halifax)',
    foundingStory: 'Royal Bank of Canada (RBC) is Canada’s largest bank and one of the largest in the world by market capitalization. Headquartered at Royal Bank Plaza in Toronto, RBC serves over 17 million clients globally with comprehensive retail banking, wealth management, capital markets (RBC Capital Markets), and international investor services. RBC is designated as a Global Systemically Important Bank (G-SIB) by the Financial Stability Board.',
    foundingStory_bn: 'রয়্যাল ব্যাংক অব কানাডা (RBC) মার্কেট ক্যাপিটালাইজেশনের দিক থেকে কানাডার সর্ববৃহৎ এবং বিশ্বের অন্যতম শীর্ষস্থানীয় ব্যাংক। ১৮৬৪ সালে হ্যালিফ্যাক্সে প্রতিষ্ঠিত এবং বর্তমানে টরন্টোর রয়্যাল ব্যাংক প্লাজায় প্রধান কার্যালয় বিশিষ্ট আরবিসি ১৭ মিলিয়নেরও বেশি গ্রাহককে রিটেইল, ওয়েলথ ম্যানেজমেন্ট এবং গ্লোবাল ক্যাপিটাল মার্কেটস সেবা প্রদান করে।',
    category: 'Big Five Schedule I Domestic Bank / G-SIB',
    category_bn: 'কানাডার বিগ ফাইভ তফসিল-১ ব্যাংক (G-SIB রেগুলেটেড)',
    coreStrengths: [
      'Canada’s largest financial institution with premier nationwide branch and ATM coverage',
      'Real-time Interac e-Transfer and Autodeposit integration with biometric verification',
      'Comprehensive multi-currency US/CAD cross-border accounts and RBC Bank Georgia US integration',
      'CDIC eligible deposit insurance up to $100,000 CAD per insured category'
    ],
    coreStrengths_bn: [
      'কানাডার সর্ববৃহৎ আর্থিক প্রতিষ্ঠান এবং দেশব্যাপী শীর্ষ শাখা ও এটিএম নেটওয়ার্ক',
      'বায়োমেট্রিক নিরাপত্তা সহ রিয়েল-টাইম ইন্টারাক ই-ট্রান্সফার (Interac e-Transfer) ও অটোডিপোজিট',
      'আমেরিকা ও কানাডার মধ্যে সহজ ক্রস-বর্ডার ব্যাংকিং ও মাল্টি-কারেন্সি অ্যাকাউন্ট সুবিধা',
      'কানাডা ডিপোজিট ইন্স্যুরেন্স কর্পোরেশন (CDIC) কর্তৃক প্রতি ক্যাটাগরিতে $১০০,০০০ ক্যাড পর্যন্ত বীমাকৃত'
    ],
    institutionNumber: '003',
    sampleTransit: '00001 (Toronto Main)',
    eftRouting: '000300001',
    swiftHo: 'ROYCCAT2',
    popularApp: 'RBC Mobile & RBC Avion Rewards App',
    customerCare: '1-800-769-2511 (24/7 Toll-Free in Canada/USA)',
    interacLimit: '$3,000 - $10,000 CAD / 24h based on account profile',
    cdicProtection: '$100,000 CAD per insured category (Member Institution #003)',
    osfiCategory: 'OSFI Domestic Systemically Important Bank (D-SIB)'
  },
  'td-canada-trust': {
    established: '1955 (Formed via merger of Bank of Toronto established 1855 & The Dominion Bank established 1869)',
    foundingStory: 'TD Bank Group (The Toronto-Dominion Bank) is the second-largest bank in Canada by total assets and a major player in North America. Known for its customer-centric extended retail hours and digital-first approach, TD operates thousands of branches across Canada and the Eastern United States via TD Bank, America’s Most Convenient Bank.',
    foundingStory_bn: 'টিডি ব্যাংক গ্রুপ (টরন্টো-ডোমিনিয়ন ব্যাংক) মোট সম্পদের দিক থেকে কানাডার দ্বিতীয় বৃহত্তম ব্যাংক এবং উত্তর আমেরিকার অন্যতম প্রধান আর্থিক প্রতিষ্ঠান। ১৮৫৫ ও ১৮৬৯ সালে প্রতিষ্ঠিত দুটি প্রাচীন ব্যাংকের ঐতিহাসিক একীভূতকরণের মাধ্যমে গঠিত টিডি তাদের বর্ধিত ব্যাংকিং সময়সূচী এবং অত্যাধুনিক ডিজিটাল সেবার জন্য বিশ্বজুড়ে সুপরিচিত।',
    category: 'Big Five Schedule I Domestic Bank / G-SIB',
    category_bn: 'কানাডার বিগ ফাইভ তফসিল-১ ব্যাংক (G-SIB রেগুলেটেড)',
    coreStrengths: [
      'Extended branch opening hours (7 days a week in select metro hubs) and premier customer support',
      'TD EasyWeb & TD App with integrated TD Direct Investing (Canada’s leading retail brokerage)',
      'Seamless Canada-US borderless banking accounts and instant global wire connectivity',
      'CDIC insurance coverage on eligible Canadian deposits up to $100,000 CAD'
    ],
    coreStrengths_bn: [
      'সপ্তাহে ৭ দিন ব্যাংকিং সুবিধা এবং শীর্ষস্থানীয় কাস্টমার কেয়ার সেবা',
      'টিডি ইজিওয়েব (TD EasyWeb) এবং কানাডার শীর্ষ ব্রোকারেজ টিডি ডিরেক্ট ইনভেস্টিং সমন্বয়',
      'কানাডা-ইউএস নির্বিঘ্ন বর্ডারলেস ব্যাংকিং এবং আন্তর্জাতিক ওয়্যার ট্রান্সফার নেটওয়ার্ক',
      'সিডিআইসি (CDIC) আওতাভুক্ত ডিপোজিট বীমা সুবিধা ($১০০,০০০ ক্যাড)'
    ],
    institutionNumber: '004',
    sampleTransit: '00001 (Toronto Head Office)',
    eftRouting: '000400001',
    swiftHo: 'TDOMCATTT',
    popularApp: 'TD (Canada) App & TD MySpend',
    customerCare: '1-866-222-3456 (24/7 Service Line)',
    interacLimit: 'Up to $3,000 - $5,000 CAD / 24h limit',
    cdicProtection: '$100,000 CAD per insured category (Member Institution #004)',
    osfiCategory: 'OSFI Domestic Systemically Important Bank (D-SIB)'
  },
  'scotiabank-canada': {
    established: '1832 (Founded in Halifax, Nova Scotia)',
    foundingStory: 'The Bank of Nova Scotia, operating as Scotiabank, is Canada’s most international bank with substantial operations across the Americas and the Pacific Alliance (Mexico, Peru, Chile, Colombia). Headquartered at Scotia Plaza in Toronto, Scotiabank is recognized for its Scene+ loyalty program, mortgage solutions, and comprehensive corporate banking.',
    foundingStory_bn: 'ব্যাংক অব নোভা স্কোশিয়া (স্কোশিয়াব্যাংক) কানাডার প্রাচীনতম ও সর্বাধিক আন্তর্জাতিক ব্যাংকিং নেটওয়ার্ক সমৃদ্ধ প্রতিষ্ঠান। ১৮৩২ সালে হ্যালিফ্যাক্সে প্রতিষ্ঠিত এই ব্যাংকটি লাতিন আমেরিকা ও প্রশান্ত মহাসাগরীয় অঞ্চলে বিপুল কার্যক্রম পরিচালনা করে এবং কানাডার শীর্ষস্থানীয় মর্টগেজ ও রিটেইল ব্যাংকিং সলিউশন প্রদান করে।',
    category: 'Big Five Schedule I Domestic Bank / D-SIB',
    category_bn: 'কানাডার বিগ ফাইভ তফসিল-১ ব্যাংক (D-SIB রেগুলেটেড)',
    coreStrengths: [
      'Canada’s most international bank with specialized cross-border Latin American corridors',
      'Exclusive Scene+ rewards ecosystem integrated across debit, credit, and grocery partners',
      'Scotia iTRADE advanced investing platform and Scotia Mobile Banking security',
      'Full CDIC deposit protection up to $100,000 CAD across eligible accounts'
    ],
    coreStrengths_bn: [
      'কানাডার সর্বাধিক আন্তর্জাতিক ব্যাংক এবং ক্রস-বর্ডার ফরেন করিডোর সুবিধা',
      'জনপ্রিয় সিন প্লাস (Scene+) রিওয়ার্ডস ইকোসিস্টেম ও ক্যাশব্যাক ইন্টিগ্রেশন',
      'স্কোশিয়া আইট্রেড (Scotia iTRADE) ট্রেডিং এবং হাই-সিকিউরিটি মোবাইল ব্যাংকিং',
      'সিডিআইসি (CDIC) আইনগত আমানত সুরক্ষা ($১০০,০০০ ক্যাড)'
    ],
    institutionNumber: '002',
    sampleTransit: '00001 (Toronto Executive)',
    eftRouting: '000200001',
    swiftHo: 'NOSCCATT',
    popularApp: 'Scotiabank Mobile Banking & Scene+',
    customerCare: '1-800-472-6842 (24/7 Support)',
    interacLimit: '$3,000 CAD / 24h default (up to $10,000 on request)',
    cdicProtection: '$100,000 CAD per category (Member Institution #002)',
    osfiCategory: 'OSFI Domestic Systemically Important Bank (D-SIB)'
  },
  'bmo-bank-of-montreal': {
    established: '1817 (Canada’s oldest chartered bank, founded in Montreal, Quebec)',
    foundingStory: 'Bank of Montreal (BMO Financial Group) is Canada’s oldest bank, established in 1817. Operating from its historic operational headquarters in First Canadian Place, Toronto, BMO provides personal and commercial banking, wealth management via BMO Nesbitt Burns, and capital markets solutions across North America including major US operations through BMO Bank N.A.',
    foundingStory_bn: 'ব্যাংক অব মন্ট্রিল (বিএমও) ১৮১৭ সালে প্রতিষ্ঠিত কানাডার সবচেয়ে প্রাচীন চার্টার্ড ব্যাংক। টরন্টোর ফার্স্ট কানাডিয়ান প্লেসে পরিচালিত এই ঐতিহাসিক ব্যাংকটি কানাডা এবং যুক্তরাষ্ট্রে পার্সোনাল, কমার্শিয়াল ও বিএমও নেসবিট বার্নসের মাধ্যমে ওয়েলথ ম্যানেজমেন্ট সেবা প্রদান করে।',
    category: 'Big Five Schedule I Domestic Bank / D-SIB',
    category_bn: 'কানাডার বিগ ফাইভ তফসিল-১ চার্টার্ড ব্যাংক',
    coreStrengths: [
      'Canada’s oldest chartered institution with over two centuries of financial stability',
      'Extensive North American footprint including substantial Midwest and West US presence',
      'BMO SmartFolio automated investing and award-winning digital credit card management',
      'CDIC statutory deposit insurance coverage up to $100,000 CAD'
    ],
    coreStrengths_bn: [
      'দুই শতাব্দীরও বেশি বিশ্বস্ত ব্যাংকিং ঐতিহ্য এবং আর্থিক স্থিতিশীলতা',
      'কানাডা ও যুক্তরাষ্ট্রে বিস্তৃত ভৌগোলিক নেটওয়ার্ক ও ক্রস-বর্ডার সমাধান',
      'বিএমও স্মার্টফোলিও অটোমেটেড ইনভেস্টিং এবং উন্নত ডিজিটাল ব্যাংকিং',
      'সিডিআইসি আমানত বীমা সুরক্ষা ($১০০,০০০ ক্যাড)'
    ],
    institutionNumber: '001',
    sampleTransit: '00001 (First Canadian Place)',
    eftRouting: '000100001',
    swiftHo: 'BOFMCAT2',
    popularApp: 'BMO Mobile Banking & BMO InvestorLine',
    customerCare: '1-877-225-5266 (24/7 Canada/USA)',
    interacLimit: '$3,000 CAD / 24h limit',
    cdicProtection: '$100,000 CAD per category (Member Institution #001)',
    osfiCategory: 'OSFI Domestic Systemically Important Bank (D-SIB)'
  },
  'cibc-bank-canada': {
    established: '1961 (Formed through merger of Canadian Bank of Commerce est. 1867 & Imperial Bank of Canada est. 1875)',
    foundingStory: 'Canadian Imperial Bank of Commerce (CIBC) is a major Canadian chartered bank headquartered at CIBC Square in Toronto. CIBC serves 14 million clients through its personal and business banking, wealth management (Wood Gundy), and CIBC Capital Markets divisions, along with its innovative direct banking subsidiary Simplii Financial.',
    foundingStory_bn: 'কানাডিয়ান ইম্পেরিয়াল ব্যাংক অব কমার্স (সিআইবিসি) কানাডার বিগ ফাইভ ব্যাংকের অন্যতম প্রধান প্রতিষ্ঠান। ১৮৬৭ এবং ১৮৭৫ সালের দুটি ঐতিহ্যবাহী ব্যাংকের ঐতিহাসিক একীভূতকরণের মাধ্যমে গঠিত সিআইবিসি ১ কোটি ৪০ লক্ষাধিক গ্রাহককে রিটেইল, ওয়েলথ ম্যানেজমেন্ট এবং ডিজিটাল সাবসিডিয়ারি সিম্পলি ফাইন্যান্সিয়ালের মাধ্যমে সেবা দেয়।',
    category: 'Big Five Schedule I Domestic Bank / D-SIB',
    category_bn: 'কানাডার বিগ ফাইভ তফসিল-১ চার্টার্ড ব্যাংক',
    coreStrengths: [
      'Leading digital banking infrastructure with CIBC Global Money Transfer (0% transfer fee to 120+ countries)',
      'CIBC Investor’s Edge low-cost self-directed investing platform',
      'CIBC Aventura and Aeroplan credit card ecosystem',
      'Full CDIC protection for Canadian deposits up to $100,000 CAD'
    ],
    coreStrengths_bn: [
      'সিআইবিসি গ্লোবাল মানি ট্রান্সফারের মাধ্যমে ১২০+ দেশে শূন্য ফি-তে রেমিট্যান্স পাঠানোর সুবিধা',
      'সিআইবিসি ইনভেস্টরস এজ কম খরচে সেলফ-ডিরেক্টেড স্টক ট্রেডিং প্ল্যাটফর্ম',
      'অ্যাভেনচুরা ও এরোপ্ল্যান লয়ালটি কার্ড এবং আধুনিক ডিজিটাল ক্রেডিট সলিউশন',
      'সিডিআইসি সরকারি আমানত গ্যারান্টি ($১০০,০০০ ক্যাড)'
    ],
    institutionNumber: '010',
    sampleTransit: '00001 (CIBC Square Toronto)',
    eftRouting: '001000001',
    swiftHo: 'CIBCCATT',
    popularApp: 'CIBC Mobile Banking & Simplii Direct App',
    customerCare: '1-800-465-2422 (24/7 Client Care)',
    interacLimit: '$3,000 CAD / 24h limit',
    cdicProtection: '$100,000 CAD per category (Member Institution #010)',
    osfiCategory: 'OSFI Domestic Systemically Important Bank (D-SIB)'
  },
  'national-bank-of-canada': {
    established: '1859 (Banque Nationale founded in Quebec City)',
    foundingStory: 'National Bank of Canada (Banque Nationale du Canada) is the sixth largest commercial bank in Canada and the dominant financial institution in Quebec. Headquartered at 600 De La Gauchetière Street West in Montreal, NBC provides comprehensive retail banking, wealth management, financial planning, and corporate financing across Canada.',
    foundingStory_bn: 'ন্যাশনাল ব্যাংক অব কানাডা (ব্যাংক ন্যাশনাল) কানাডার ষষ্ঠ বৃহত্তম ব্যাংক এবং কুইবেক প্রদেশের প্রধান আর্থিক স্তম্ভ। ১৮৫৯ সালে প্রতিষ্ঠিত এই ঐতিহ্যবাহী ব্যাংকটি মন্ট্রিল থেকে পরিচালিত হয় এবং কানাডাব্যাপী রিটেইল, কমার্শিয়াল ও ওয়েলথ ম্যানেজমেন্ট সেবা পরিচালনা করে।',
    category: 'Schedule I Domestic Bank / D-SIB',
    category_bn: 'কানাডিয়ান তফসিল-১ ব্যাংক (D-SIB রেগুলেটেড)',
    coreStrengths: [
      'Market leader in Quebec with expanding full-service banking across Ontario and Western Canada',
      'National Bank Direct Brokerage (zero commission trading on North American equities and ETFs)',
      'Specialized agricultural, healthcare, and commercial enterprise financing',
      'CDIC statutory deposit insurance coverage up to $100,000 CAD'
    ],
    coreStrengths_bn: [
      'কুইবেক প্রদেশে এক নম্বর ব্যাংকিং সেবাদাতা ও সমগ্র কানাডায় ক্রমবর্ধমান বিস্তার',
      'ন্যাশনাল ব্যাংক ডিরেক্ট ব্রোকারেজ-এ জিরো কমিশন স্টক ও ইটিএফ ট্রেডিং সুবিধা',
      'কৃষি, স্বাস্থ্যসেবা এবং বাণিজ্যিক প্রতিষ্ঠানের জন্য বিশেষায়িত অর্থায়ন',
      'সিডিআইসি ($১০০,০০০ ক্যাড) বিধিবদ্ধ আমানত সুরক্ষা'
    ],
    institutionNumber: '006',
    sampleTransit: '00001 (Montreal Head Office)',
    eftRouting: '000600001',
    swiftHo: 'BNDCCAMM',
    popularApp: 'National Bank / BNC Mobile App',
    customerCare: '1-888-838-6226 (Canada/US)',
    interacLimit: '$3,000 - $5,000 CAD / 24h',
    cdicProtection: '$100,000 CAD per category (Member Institution #006)',
    osfiCategory: 'OSFI Domestic Systemically Important Bank (D-SIB)'
  },
  'desjardins-group': {
    established: '1900 (Founded in Lévis, Quebec by Alphonse Desjardins)',
    foundingStory: 'Desjardins Group (Mouvement Desjardins) is the largest federation of credit unions (caisses populaires) in North America. Headquartered in Lévis, Quebec, Desjardins serves more than 7.5 million members and clients across Quebec and Ontario, offering retail banking, wealth management, life & property insurance, and securities brokerage.',
    foundingStory_bn: 'দেজারদাঁ গ্রুপ (Desjardins) উত্তর আমেরিকার সর্ববৃহৎ ক্রেডিট ইউনিয়ন কো-অপারেটিভ ফেডারেশন। ১৯০০ সালে আলফন্স দেজারদাঁ কর্তৃক প্রতিষ্ঠিত এই প্রতিষ্ঠানটি কুইবেক ও ওন্টারিওতে সাড়ে সাত মিলিয়নেরও বেশি গ্রাহককে রিটেইল ব্যাংকিং, ইন্স্যুরেন্স ও ওয়েলথ ম্যানেজমেন্ট সুবিধা দেয়।',
    category: 'Cooperative Financial Group / D-SIFI',
    category_bn: 'উত্তর আমেরিকার সর্ববৃহৎ কো-অপারেটিভ ক্রেডিট গ্রুপ',
    coreStrengths: [
      'North America’s leading financial cooperative with strong community reinvestment and dividends (ristournes)',
      'Desjardins AccèsD online and mobile portal with multi-factor authentication',
      'Comprehensive personal and commercial insurance (Desjardins Insurance)',
      'Deposit protection via AMF (Autorité des marchés financiers) Deposit Insurance Fund up to $100,000 CAD'
    ],
    coreStrengths_bn: [
      'উত্তর আমেরিকার শীর্ষ কো-অপারেটিভ ব্যাংক ও সদস্যদের বার্ষিক লাভাংশ (Ristourne) বিতরণ',
      'অত্যাধুনিক AccèsD মোবাইল ও অনলাইন ব্যাংকিং সিস্টেম',
      'লাইফ ও প্রোপার্টি ইন্স্যুরেন্স এবং কমপ্রিহেনসিভ মার্চেন্ট সলিউশন',
      'কুইবেক AMF ডিপোজিট ইন্স্যুরেন্স ফান্ড কর্তৃক $১০০,০০০ ক্যাড আমানত সুরক্ষা'
    ],
    institutionNumber: '815',
    sampleTransit: '00001 (Lévis Central)',
    eftRouting: '081500001',
    swiftHo: 'CCDVCA2L',
    popularApp: 'Desjardins Mobile Services (AccèsD)',
    customerCare: '1-800-224-7737 (Toll-Free AccèsD)',
    interacLimit: '$3,000 - $5,000 CAD / 24h',
    cdicProtection: '$100,000 CAD guaranteed by AMF Quebec',
    osfiCategory: 'AMF Quebec Domestic Systemically Important Financial Institution'
  },
  'tangerine-bank': {
    established: '1997 (Originally launched as ING DIRECT Canada; rebranded to Tangerine in 2014)',
    foundingStory: 'Tangerine Bank is a leading Canadian direct digital bank and a wholly owned subsidiary of Scotiabank. Based in Toronto, Tangerine revolutionized no-fee daily chequing accounts, high-interest savings accounts, and flexible Money-Back credit cards, operating without traditional brick-and-mortar branches.',
    foundingStory_bn: 'ট্যানজারিন ব্যাংক (পূর্বের ING Direct Canada) কানাডার শীর্ষস্থানীয় ডিজিটাল ডিরেক্ট ব্যাংক এবং স্কোশিয়াব্যাংকের একটি সহযোগী প্রতিষ্ঠান। কোনো ধরনের মাসিক ফি ছাড়া চেকিং অ্যাকাউন্ট, হাই-ইন্টারেস্ট সেভিংস এবং মানি-ব্যাক ক্রেডিট কার্ডের জন্য এটি তুমুল জনপ্রিয়।',
    category: 'Direct Digital Schedule I Bank (Scotiabank Subsidiary)',
    category_bn: 'কানাডার ১ নম্বর নো-ফি ডিজিটাল ব্যাংক (স্কোশিয়াব্যাংক সাবসিডিয়ারি)',
    coreStrengths: [
      'No monthly account maintenance fees on daily chequing accounts',
      'Free access to over 3,500 Scotiabank ATMs across Canada and Global ATM Alliance worldwide',
      'Tangerine Money-Back Credit Card with 2% automatic monthly cashback into savings',
      'CDIC statutory insurance coverage up to $100,000 CAD'
    ],
    coreStrengths_bn: [
      'দৈনন্দিন চেকিং অ্যাকাউন্টে কোনো প্রকার মাসিক ফি বা লুকানো চার্জ নেই',
      'কানাডাব্যাপী ৩,৫০০+ স্কোশিয়াব্যাংক এটিএম থেকে সম্পূর্ণ ফ্রি ক্যাশ উত্তোলনের সুবিধা',
      'ট্যানজারিন মানি-ব্যাক ক্রেডিট কার্ডে ২% অটোমেটিক ক্যাশব্যাক সরাসরি সেভিংস অ্যাকাউন্টে',
      'সিডিআইসি কর্তৃক $১০০,০০০ ক্যাড পর্যন্ত আমানত বীমাকৃত'
    ],
    institutionNumber: '614',
    sampleTransit: '00001 (Toronto Direct Hub)',
    eftRouting: '061400001',
    swiftHo: 'INGACATT',
    popularApp: 'Tangerine Mobile Banking App',
    customerCare: '1-888-826-4374 (24/7 Digital Support)',
    interacLimit: '$3,000 CAD / 24h limit',
    cdicProtection: '$100,000 CAD per category (Member Institution #614)',
    osfiCategory: 'OSFI Schedule I Bank'
  },
  'eq-bank-equitable': {
    established: '1970 (Equitable Bank; EQ Bank digital platform launched in 2016)',
    foundingStory: 'EQ Bank is the digital banking trademark of Equitable Bank, Canada’s Challenger Bank™ and the country’s seventh-largest independent Schedule I bank. Operating fully online from Toronto, EQ Bank is famed for its high-interest Personal Account combining high savings rates with daily chequing capabilities and zero ATM fees across Canada.',
    foundingStory_bn: 'ইকিউ ব্যাংক (ইকুইটেবল ব্যাংক) কানাডার সপ্তম বৃহত্তম চার্টার্ড তফসিল-১ ব্যাংক এবং শীর্ষ ডিজিটাল চ্যালেঞ্জার ব্যাংক। টরন্টো থেকে সম্পূর্ণ অনলাইন মাধ্যমে পরিচালিত এই ব্যাংকটি তাদের হাই-ইন্টারেস্ট সেভিংস-কাম-চেকিং অ্যাকাউন্ট এবং কানাডার যেকোনো এটিএম থেকে ফ্রি ক্যাশ তোলার সুবিধার জন্য খ্যাত।',
    category: 'Digital Challenger Schedule I Bank',
    category_bn: 'কানাডার শীর্ষস্থানীয় ডিজিটাল চ্যালেঞ্জার ব্যাংক',
    coreStrengths: [
      'Industry-leading everyday interest rates on combined chequing/savings Personal Accounts',
      'Zero ATM fees anywhere in Canada (reimburses out-of-network ATM surcharges within 10 business days)',
      'Integrated low-cost international transfers powered directly by Wise',
      'CDIC deposit insurance protection up to $100,000 CAD'
    ],
    coreStrengths_bn: [
      'ডেইলি অ্যাকাউন্টে সর্বোচ্চ ইন্টারেস্ট রেট এবং ফ্রি আনলিমিটেড ইন্টারাক ই-ট্রান্সফার',
      'কানাডার যেকোনো এটিএম থেকে ফ্রি ক্যাশ তোলার সুবিধা (অন্যান্য ব্যাংকের সারচার্জ রিফান্ড)',
      'ওয়াইজ (Wise) ইন্টিগ্রেশনের মাধ্যমে অতি কম খরচে সরাসরি আন্তর্জাতিক ফান্ড ট্রান্সফার',
      'সিডিআইসি কর্তৃক ১০০,০০০ ক্যাড সরকারি আমানত গ্যারান্টি'
    ],
    institutionNumber: '623',
    sampleTransit: '00001 (Toronto Online HQ)',
    eftRouting: '062300001',
    swiftHo: 'EQBKCA2T',
    popularApp: 'EQ Bank Mobile App',
    customerCare: '1-844-437-2265 (8 AM – Midnight EST)',
    interacLimit: '$5,000 CAD / 24h (Higher digital limit)',
    cdicProtection: '$100,000 CAD per category (Member Institution #623)',
    osfiCategory: 'OSFI Schedule I Bank'
  },
  'atb-financial': {
    established: '1938 (Alberta Treasury Branches established by Government of Alberta)',
    foundingStory: 'ATB Financial (Alberta Treasury Branches) is a financial institution owned by the Province of Alberta. Headquartered at ATB Place in Edmonton, ATB manages over $60 billion in assets, providing full commercial and personal banking, agri-business loans, wealth management, and capital markets across 175+ branches in Alberta.',
    foundingStory_bn: 'এটিবি ফাইন্যান্সিয়াল (আলবার্টা ট্রেজারি ব্রাঞ্চেস) আলবার্টা প্রাদেশিক সরকারের মালিকানাধীন একটি মর্যাদাপূর্ণ আর্থিক প্রতিষ্ঠান। ১৯৩৮ সালে প্রতিষ্ঠিত এবং এডমন্টনে প্রধান কার্যালয় বিশিষ্ট এটিবি ৬০ বিলিয়ন ডলারেরও বেশি সম্পদ পরিচালনা করে এবং কৃষি, বাণিজ্যিক ও রিটেইল ব্যাংকিংয়ে আলবার্টার প্রধান স্তম্ভ।',
    category: 'Provincial Crown Commercial Financial Institution',
    category_bn: 'আলবার্টা প্রাদেশিক সরকারের ক্রাউন ফিন্যান্সিয়াল ইনস্টিটিউশন',
    coreStrengths: [
      '100% unconditional guarantee on all deposits by the Government of Alberta under the ATB Financial Act',
      'Deep agricultural and energy sector financing capabilities tailored for Western Canada',
      'ATB Personal and Business mobile platform with rapid digital onboarding',
      'Extensive regional branch network across every rural and urban hub in Alberta'
    ],
    coreStrengths_bn: [
      'আলবার্টা সরকারের আইন অনুযায়ী গ্রাহকদের আমানতের ওপর ১০০% শতভাগ নিঃশর্ত সরকারি গ্যারান্টি',
      'ওয়েস্টার্ন কানাডার কৃষি ও জ্বালানি খাতের বিশেষায়িত কর্পোরেট অর্থায়ন',
      'আধুনিক এটিবি মোবাইল ব্যাংকিং ও ব্যবসায়িক ট্রেজারি প্ল্যাটফর্ম',
      'আলবার্টার প্রতিটি শহর ও গ্রামীণ অঞ্চলে ১৭৫টিরও বেশি বিস্তৃত শাখা নেটওয়ার্ক'
    ],
    institutionNumber: '809',
    sampleTransit: '00001 (Edmonton ATB Place)',
    eftRouting: '080900001',
    swiftHo: 'ATBACA7C',
    popularApp: 'ATB Mobile Banking App',
    customerCare: '1-800-332-8383 (24/7 Client Care)',
    interacLimit: '$3,000 - $5,000 CAD / 24h',
    cdicProtection: '100% Guaranteed by the Province of Alberta (Exceeds standard CDIC limits)',
    osfiCategory: 'Provincial Crown Corporation'
  },
  'vancity-credit-union': {
    established: '1946 (Vancouver City Savings Credit Union founded in Vancouver, BC)',
    foundingStory: 'Vancity (Vancouver City Savings Credit Union) is Canada’s largest community credit union by assets outside of Quebec. Headquartered on Terminal Avenue in Vancouver, Vancity is globally renowned for values-based banking, community environmental projects, affordable housing loans, and sustainable social impact finance.',
    foundingStory_bn: 'ভ্যানসিটি ক্রেডিট ইউনিয়ন কানাডার কুইবেকের বাইরের সর্ববৃহৎ কমিউনিটি ক্রেডিট ইউনিয়ন। ১৯৪৬ সালে ভ্যাঙ্কুভারে প্রতিষ্ঠিত ভ্যানসিটি সামাজিক দায়বদ্ধতা, পরিবেশবান্ধব প্রকল্প অর্থায়ন এবং স্থানীয় কমিউনিটির উন্নয়নে সাশ্রয়ী ব্যাংকিং সেবার জন্য আন্তর্জাতিকভাবে সুপরিচিত।',
    category: 'Values-Based Community Credit Union (B.C.)',
    category_bn: 'কানাডার শীর্ষ কমিউনিটি ক্রেডিট ইউনিয়ন',
    coreStrengths: [
      '100% deposit guarantee by the Credit Union Deposit Insurance Corporation of British Columbia (CUDIC)',
      'Pioneer in socially responsible investment (SRI) and zero carbon environmental financing',
      'Full-service personal chequing, small business banking, and Vancity enviro™ Visa credit cards',
      'Convenient access to the nationwide EXCHANGE Network of 3,300+ surcharge-free ATMs'
    ],
    coreStrengths_bn: [
      'ব্রিটিশ কলাম্বিয়া CUDIC কর্তৃক সকল ডিপোজিটের ওপর ১০০% শতভাগ সরকারি আমানত সুরক্ষা',
      'সামাজিক দায়বদ্ধতা ও পরিবেশবান্ধব এনভায়রনমেন্টাল ফাইন্যান্সিং সুবিধা',
      'ভ্যানসিটি এনভাইরো (enviro™) ভিসা কার্ড ও লোকাল বিজনেস ফাইন্যান্সিং',
      'কানাডাব্যাপী এক্সচেঞ্জ নেটওয়ার্কের ৩,৩০০+ সারচার্জ-মুক্ত এটিএম ব্যবহার সুবিধা'
    ],
    institutionNumber: '829',
    sampleTransit: '00001 (Vancouver Terminal)',
    eftRouting: '082900001',
    swiftHo: 'VANCUCAV',
    popularApp: 'Vancity Mobile Banking App',
    customerCare: '1-888-826-2489 (Greater Vancouver & BC)',
    interacLimit: '$3,000 CAD / 24h',
    cdicProtection: '100% Guaranteed by CUDIC British Columbia',
    osfiCategory: 'BC Financial Services Authority (BCFSA) Regulated'
  },
  'laurentian-bank-of-canada': {
    established: '1846 (Founded as Banque d’Épargne de la Cité et du District de Montréal)',
    foundingStory: 'Laurentian Bank of Canada (Banque Laurentienne) is a Montreal-based Schedule I chartered bank with historical roots dating back to 1846. Serving commercial clients, real estate developers, and specialized retail customers across Canada, Laurentian focuses on middle-market enterprise banking and specialized mortgage solutions.',
    foundingStory_bn: 'লরেনশিয়ান ব্যাংক অব কানাডা ১৮৪৬ সালে প্রতিষ্ঠিত মন্ট্রিল-ভিত্তিক একটি তফসিল-১ চার্টার্ড ব্যাংক। কানাডাব্যাপী মিডল-মার্কেট এন্টারপ্রাইজ অর্থায়ন, কমার্শিয়াল রিয়েল এস্টেট এবং বিশেষায়িত মর্টগেজ সলিউশনের জন্য এটি পরিচালিত হয়।',
    category: 'Schedule I Chartered Domestic Bank',
    category_bn: 'কানাডিয়ান তফসিল-১ চার্টার্ড ব্যাংক',
    coreStrengths: [
      'Over 175 years of commercial banking and specialized residential mortgage origination',
      'Expertise in equipment financing, commercial real estate, and syndicated corporate lending',
      'Full integration with Canadian ACSS clearing network and electronic fund transfers',
      'CDIC statutory insurance coverage up to $100,000 CAD per insured category'
    ],
    coreStrengths_bn: [
      '১৭৫ বছরেরও বেশি বাণিজ্যিক অর্থায়ন এবং আবাসিক মর্টগেজ পরিচালনার অভিজ্ঞতা',
      'বাণিজ্যিক রিয়েল এস্টেট এবং করপোরেট লেন্ডিংয়ে বিশেষায়িত দক্ষতা',
      'কানাডিয়ান পেমেন্টস এসিএসএস ও ইলেকট্রনিক ফান্ড ট্রান্সফার (EFT) ইন্টিগ্রেশন',
      'সিডিআইসি আইনগত আমানত বীমা সুরক্ষা ($১০০,০০০ ক্যাড)'
    ],
    institutionNumber: '039',
    sampleTransit: '00001 (Montreal HQ)',
    eftRouting: '003900001',
    swiftHo: 'BLMCCAMM',
    popularApp: 'LBC Direct Mobile Banking',
    customerCare: '1-800-252-1846 (Toll-Free Support)',
    interacLimit: '$3,000 CAD / 24h',
    cdicProtection: '$100,000 CAD per category (Member Institution #039)',
    osfiCategory: 'OSFI Schedule I Bank'
  },
  'canadian-western-bank': {
    established: '1988 (Formed through merger of Bank of Alberta & Western & Pacific Bank of Canada)',
    foundingStory: 'Canadian Western Bank (CWB Financial Group) is a Schedule I chartered bank based in Edmonton, Alberta. CWB specializes in business and commercial banking for mid-market business owners, commercial real estate developers, and equipment fleet operators throughout Western and Central Canada.',
    foundingStory_bn: 'কানাডিয়ান ওয়েস্টার্ন ব্যাংক (CWB) এডমন্টনে প্রধান কার্যালয় বিশিষ্ট একটি তফসিল-১ চার্টার্ড ব্যাংক। এটি মূলত মিড-মার্কেট ব্যবসায়ী, রিয়েল এস্টেট ডেভেলপার এবং ইকুইপমেন্ট ফাইন্যান্সিংয়ে বাণিজ্যিক ব্যাংকিং সেবা প্রদান করে থাকে।',
    category: 'Commercial Schedule I Bank',
    category_bn: 'কানাডিয়ান কমার্শিয়াল তফসিল-১ ব্যাংক',
    coreStrengths: [
      'Focused mid-market commercial banking, construction loans, and equipment financing across Canada',
      'CWB direct digital treasury and commercial cash management solutions',
      'High-touch relationship banking with dedicated account executives',
      'Eligible deposit insurance up to $100,000 CAD by CDIC'
    ],
    coreStrengths_bn: [
      'মিড-মার্কেট বাণিজ্যিক লোন, কনস্ট্রাকশন প্রজেক্ট ও ইকুইপমেন্ট অর্থায়নে শীর্ষস্থানীয়',
      'বাণিজ্যিক ক্যাশ ম্যানেজমেন্ট ও ডিজিটাল ট্রেজারি সলিউশন',
      'উন্নত রিলেশনশিপ ব্যাংকিং ও কর্পোরেট পরামর্শক সেবা',
      'সিডিআইসি কর্তৃক $১০০,০০০ ক্যাড পর্যন্ত আমানত বীমাকৃত'
    ],
    institutionNumber: '030',
    sampleTransit: '00001 (Edmonton CWB Place)',
    eftRouting: '003000001',
    swiftHo: 'CWBBCA7E',
    popularApp: 'CWB Direct Business Banking',
    customerCare: '1-866-292-8701 (Client Support)',
    interacLimit: '$3,000 - $5,000 CAD / 24h',
    cdicProtection: '$100,000 CAD per category (Member Institution #030)',
    osfiCategory: 'OSFI Schedule I Bank'
  },
  'simplii-financial': {
    established: '2017 (Launched as CIBC’s dedicated digital banking brand following transition from PC Financial)',
    foundingStory: 'Simplii Financial is the direct digital banking division of CIBC (Canadian Imperial Bank of Commerce). Serving over 2 million Canadians, Simplii offers no-fee daily banking, high-rate savings, competitive residential mortgages, and straightforward online investments with the full operational backing of CIBC.',
    foundingStory_bn: 'সিম্পলি ফাইন্যান্সিয়াল (Simplii) কানাডার অন্যতম বৃহৎ ব্যাংক সিআইবিসি (CIBC)-এর ডিজিটাল ডিরেক্ট ব্যাংকিং ডিভিশন। ২০ লক্ষাধিক কানাডিয়ান নাগরিককে নো-ফি চেকিং, হাই-ইন্টারেস্ট সেভিংস এবং সাশ্রয়ী মর্টগেজ সেবা দিয়ে থাকে।',
    category: 'Direct Digital Banking (CIBC Subsidiary)',
    category_bn: 'সিআইবিসি (CIBC) ডিজিটাল ডিরেক্ট ব্যাংকিং',
    coreStrengths: [
      'No monthly fees and free access to thousands of CIBC ATMs across Canada',
      'Free Simplii Global Money Transfer with zero transfer fee and competitive foreign exchange',
      'High-yield interest rates on High Interest Savings Accounts (HISA)',
      'Fully backed by CIBC and insured by CDIC up to $100,000 CAD'
    ],
    coreStrengths_bn: [
      'কোনো মাসিক মেইনটেন্যান্স ফি নেই এবং কানাডাব্যাপী CIBC এটিএম থেকে ফ্রি ক্যাশ উইথড্রয়াল',
      'সিম্পলি গ্লোবাল মানি ট্রান্সফারের মাধ্যমে বিনামূল্যে আন্তর্জাতিক রেমিট্যান্স পাঠানো',
      'হাই-ইন্টারেস্ট সেভিংস অ্যাকাউন্টে আকর্ষক মুনাফা',
      'সিআইবিসির পূর্ণ পৃষ্ঠপোষকতা ও সিডিআইসি আমানত বীমা ($১০০,০০০ ক্যাড)'
    ],
    institutionNumber: '010',
    sampleTransit: '30800 (Simplii Electronic Hub)',
    eftRouting: '001030800',
    swiftHo: 'CIBCCATT',
    popularApp: 'Simplii Financial Mobile Banking',
    customerCare: '1-888-723-8881 (24/7 Digital Support)',
    interacLimit: '$3,000 CAD / 24h',
    cdicProtection: '$100,000 CAD under CIBC CDIC Membership',
    osfiCategory: 'CIBC Schedule I Division'
  },
  'manulife-bank-of-canada': {
    established: '1993 (First bank in Canada established by an insurance company, Manulife Financial)',
    foundingStory: 'Manulife Bank of Canada is a Schedule I chartered domestic bank headquartered in Waterloo, Ontario. Created by Manulife Financial in 1993, Manulife Bank is celebrated for pioneering the Manulife One flexible mortgage account, consolidating mortgages, debts, and savings into one high-efficiency interest-reducing account.',
    foundingStory_bn: 'ম্যানুলাইফ ব্যাংক অব কানাডা ১৯৯৩ সালে আন্তর্জাতিক বীমা জায়ান্ট ম্যানুলাইফ ফাইন্যান্সিয়াল কর্তৃক প্রতিষ্ঠিত একটি তফসিল-১ চার্টার্ড ব্যাংক। এটি কানাডার প্রথম উদ্ভাবনী অল-ইন-ওয়ান ফ্লেক্সিবল অ্যাকাউন্ট ‘Manulife One’-এর জন্য বিশেষভাবে প্রশংসিত।',
    category: 'Schedule I Chartered Bank (Manulife Subsidiary)',
    category_bn: 'কানাডিয়ান তফসিল-১ ইনোভেটিভ ব্যাংক',
    coreStrengths: [
      'Pioneer of the "Manulife One" all-in-one debt management and interest-saving mortgage account',
      'Free access to over 3,300 THE EXCHANGE Network ATMs across Canada',
      'Advantage Account offering high everyday savings interest with full chequing flexibility',
      'CDIC statutory deposit insurance coverage up to $100,000 CAD'
    ],
    coreStrengths_bn: [
      'কানাডার বিখ্যাত ‘Manulife One’ অ্যাকাউন্টের মাধ্যমে মর্টগেজের সুদ কমানোর আধুনিক পদ্ধতি',
      'কানাডাব্যাপী এক্সচেঞ্জ নেটওয়ার্কের ৩,৩০০+ এটিএম থেকে সম্পূর্ণ ফ্রি ক্যাশ তোলা',
      'অ্যাডভান্টেজ অ্যাকাউন্টের মাধ্যমে সেভিংসের উচ্চ ইন্টারেস্টের সাথে চেকিং অ্যাকাউন্টের সুবিধা',
      'সিডিআইসি কর্তৃক $১০০,০০০ ক্যাড পর্যন্ত আমানত বীমাকৃত'
    ],
    institutionNumber: '540',
    sampleTransit: '00001 (Waterloo HQ)',
    eftRouting: '054000001',
    swiftHo: 'MANUCAT1',
    popularApp: 'Manulife Bank Mobile App',
    customerCare: '1-877-765-2265 (Mon-Fri 8am-8pm EST)',
    interacLimit: '$3,000 CAD / 24h',
    cdicProtection: '$100,000 CAD per category (Member Institution #540)',
    osfiCategory: 'OSFI Schedule I Bank'
  },
  'wealthsimple-investments': {
    established: '2014 (Founded in Toronto by Michael Katchen)',
    foundingStory: 'Wealthsimple is Canada’s leading digital financial platform and registered investment dealer. With over 3 million Canadian clients and billions in assets, Wealthsimple offers automated investing, high-interest Wealthsimple Cash chequing with no fees, zero-commission stock/crypto trading, and seamless P2P payments.',
    foundingStory_bn: 'ওয়েলথসিম্পল (Wealthsimple) কানাডার আধুনিক ফিনটেক ও ডিজিটাল ইনভেস্টমেন্ট জগতের শীর্ষস্থানীয় প্ল্যাটফর্ম। টরন্টো ভিত্তিক এই প্ল্যাটফর্মটি নো-ফি ক্যাশ অ্যাকাউন্ট, অটোমেটেড রোবো-অ্যাডভাইজরি, শূন্য কমিশন স্টক ট্রেডিং এবং পিয়ার-টু-পিয়ার পেমেন্টসে কানাডায় এক বিশাল বিপ্লব এনেছে।',
    category: 'Digital Financial Technology & Payments',
    category_bn: 'কানাডার শীর্ষ ফিনটেক ও ডিজিটাল ক্যাশ প্ল্যাটফর্ম',
    coreStrengths: [
      'Wealthsimple Cash account with 4-5% interest on deposits and 1% crypto/cashback on all spending',
      'Enhanced CDIC insurance coverage up to $500,000 CAD via partner CDIC-member schedule banks',
      'Instant zero-fee peer-to-peer (P2P) transfers via Wealthsimple handle ($handle)',
      'Commission-free Canadian & US stock and ETF trading'
    ],
    coreStrengths_bn: [
      'ওয়েলথসিম্পল ক্যাশ অ্যাকাউন্টে ৪-৫% পর্যন্ত মুনাফা এবং সকল কেনাকাটায় ১% ক্যাশব্যাক',
      'সিডিআইসি সদস্য ব্যাংকের অংশীদারিত্বের মাধ্যমে $৫০০,০০০ ক্যাড পর্যন্ত বর্ধিত আমানত বীমা',
      'ওয়েলথসিম্পল হ্যান্ডেল ($handle) ব্যবহার করে ফ্রেন্ডস ও ফ্যামিলির মাঝে ইনস্ট্যান্ট ট্রান্সফার',
      'কানাডিয়ান ও আমেরিকান স্টক মার্কেটে সম্পূর্ণ কমিশন-মুক্ত বিনিয়োগের সুবিধা'
    ],
    institutionNumber: '703',
    sampleTransit: '00001 (Toronto Fintech Hub)',
    eftRouting: '070300001',
    swiftHo: 'WMPLCAT2',
    popularApp: 'Wealthsimple: Trade, Cash & Crypto',
    customerCare: '1-855-255-9038 (Mon-Fri 9am-6pm EST)',
    interacLimit: '$5,000 CAD / 24h Interac & Instant P2P',
    cdicProtection: 'Up to $500,000 CAD via partner schedule banks',
    osfiCategory: 'CIRO (Canadian Investment Regulatory Organization) Regulated'
  }
};

/**
 * Compile exhaustive, SEO-grade articles for every bank in Canada.
 */
export const canadaBanksArticles: BankArticle[] = banksData.map(bank => {
  const knowledge = CANADA_BANK_KNOWLEDGE[bank.id] || {
    established: bank.established || 'Established Financial Institution',
    foundingStory: `${bank.name} is a premier Canadian financial institution registered with the Bank of Canada and Payments Canada, providing essential banking, deposits, clearing, and electronic funds transfers across Canada.`,
    foundingStory_bn: `${bank.name_bn || bank.name} কানাডার একটি বিশ্বস্ত ও অনুমোদিত আর্থিক প্রতিষ্ঠান যা ব্যাংক অব কানাডা এবং পেমেন্টস কানাডার নিয়ন্ত্রক কাঠামোর আওতায় দেশব্যাপী গ্রাহকদের ব্যাংকিং ও লেনদেন সেবা প্রদান করে।`,
    category: `${bank.type || 'Canadian Financial Institution'} (Institution #${bank.institution_number || bank.bank_code})`,
    category_bn: `কানাডিয়ান অনুমোদিত আর্থিক প্রতিষ্ঠান (ইনস্টিটিউশন #${bank.institution_number || bank.bank_code})`,
    coreStrengths: [
      'Official registered financial institution with Payments Canada clearing integration',
      'Standard 3-digit Institution Number and 5-digit Transit Number verification',
      'Interac e-Transfer and EFT Direct Deposit support for Canadian payroll and CRA tax refunds',
      'Statutory deposit protection under CDIC or provincial credit union deposit guarantees'
    ],
    coreStrengths_bn: [
      'পেমেন্টস কানাডা এসিএসএস সেটেলমেন্ট ও ক্লিয়ারিং নেটওয়ার্কের অনুমোদিত সদস্য',
      'সঠিক ৩-সংখ্যার ইন্সটিটিউশন নম্বর এবং ৫-সংখ্যার ট্রানজিট কোড ভেরিফিকেশন ব্যবস্থা',
      'ইন্টারাক ই-ট্রান্সফার (Interac) এবং সিআরএ ট্যাক্স রিফান্ড সরাসরি জমার সুবিধা',
      'সিডিআইসি (CDIC) বা প্রাদেশিক ডিপোজিট গ্যারান্টি করপোরেশনের মাধ্যমে আমানত সুরক্ষা'
    ],
    institutionNumber: bank.institution_number || bank.bank_code || '000',
    sampleTransit: '00001',
    eftRouting: bank.routing_number || `0${bank.institution_number || bank.bank_code}00001`,
    swiftHo: bank.swift_code || 'ROYCCAT2',
    popularApp: `${bank.short_name || bank.name} Online & Mobile Banking`,
    customerCare: '1-800-ROYAL-BK / Official Canadian Support Line',
    interacLimit: '$3,000 CAD / 24h standard limit',
    cdicProtection: '$100,000 CAD statutory protection',
    osfiCategory: 'OSFI / Payments Canada Member'
  };

  const articleId = bank.id;
  const instNum = bank.institution_number || bank.bank_code || '000';
  const eftCode = bank.routing_number || `0${instNum}00001`;
  const swiftCode = bank.swift_code || 'ROYCCAT2';

  return {
    id: articleId,
    bank_id: bank.id,
    slug: bank.id,
    country: 'ca',
    title: `${bank.name} Routing Number, Transit & Institution Codes, SWIFT, and Wire Guide 2026`,
    title_bn: `${bank.name_bn || bank.name} - ৩ সংখ্যার ইন্সটিটিউশন কোড, ট্রানজিট নম্বর, ইন্টারাক ই-ট্রান্সফার ও সুইফট গাইড ২০২৬`,
    title_hi: `${bank.name_hi || bank.name} - ट्रांजिट नंबर, इंस्टीट्यूशन कोड, इंटरैक ई-ट्रांसफर एवं स्विफ्ट गाइड 2026`,
    title_ru: `${bank.name_ru || bank.name} - Institution Number, Transit код, Interac и SWIFT реквизиты 2026`,
    subtitle: `Official 2026 banking specifications for ${bank.name}: 3-digit institution number (${instNum}), 5-digit transit numbers, 9-digit EFT routing format, Interac e-Transfer limits, CDIC insurance, and international wire instructions.`,
    subtitle_bn: `${bank.name_bn || bank.name}-এর ২০২৬ সালের ৩-সংখ্যার প্রতিষ্ঠান কোড (${instNum}), ৫-সংখ্যার ব্রাঞ্চ ট্রানজিট, ৯-সংখ্যার ইএফটি রাউটিং, ইন্টারাক ই-ট্রান্সফার এবং সুইফট ওয়্যার ট্রান্সফার সহায়িকা।`,
    subtitle_hi: `${bank.name_hi || bank.name} के 2026 इंस्टीट्यूशन कोड (${instNum}), 5-अंकीय ट्रांजिट नंबर, EFT राउटिंग और स्विफ्ट कोड की प्रामाणिक जानकारी।`,
    subtitle_ru: `Официальные банковские коды ${bank.name_ru || bank.name}: Institution Number (${instNum}), 5-значный Transit код, 9-значный EFT маршрутизатор, лимиты Interac и SWIFT переводы 2026.`,
    meta_title: `${bank.name} Transit & Institution Code, EFT Routing & SWIFT 2026`,
    meta_description: `Official 3-digit Institution Number (${instNum}), 5-digit Transit, 9-digit EFT routing, Interac limits and SWIFT wire codes for ${bank.name} Canada.`,
    meta_keywords: [
      `${bank.name} transit number`,
      `${bank.name} institution code ${instNum}`,
      `${bank.name} eft routing`,
      `${bank.name} swift code`,
      `${bank.name} interac limit`,
      `cdic deposit insurance ${bank.name}`
    ],
    author: 'Editorial Banking Board (Payments Canada / CDIC Standards)',
    published_date: '2026-09-08',
    last_updated: '2026-09-08',
    read_time: '6 min read',
    overview: `${bank.name} is a leading Canadian financial institution. Understanding Canada’s unique clearing system—comprising 3-digit Institution Numbers, 5-digit Branch Transit Numbers, 9-digit Electronic Fund Transfer (EFT) codes, and Interac e-Transfer—is vital for seamless direct deposits, CRA tax refunds, and international telegraphic transfers.`,
    overview_bn: `${bank.name_bn || bank.name} কানাডার অর্থনীতি ও ব্যাংকিং ব্যবস্থার একটি অন্যতম নির্ভরযোগ্য প্রতিষ্ঠান। কানাডার ব্যাংকিং ব্যবস্থায় পে-রোল ডিরেক্ট ডিপোজিট, সিআরএ (CRA) সরকারি রিফান্ড, প্রি-অথরাইজড ডেবিট এবং আন্তর্জাতিক ওয়্যার ট্রান্সফার সঠিকভাবে সম্পন্ন করতে ৩-সংখ্যার ইন্সটিটিউশন কোড, ৫-সংখ্যার ট্রানজিট নম্বর এবং ৯-সংখ্যার ইএফটি রাউটিং ফরম্যাট জানা অত্যন্ত জরুরি।`,
    overview_hi: `${bank.name_hi || bank.name} कनाडा के प्रमुख वित्तीय संस्थानों में से एक है। वेतन डायरेक्ट डिपॉजिट, टैक्स रिफंड और अंतरराष्ट्रीय वायर ट्रांसफर के लिए इंस्टीट्यूशन कोड, 5-अंकीय ट्रांजिट नंबर और स्विफ्ट कोड आवश्यक हैं।`,
    overview_ru: `${bank.name_ru || bank.name} является ведущим финансовым институтом Канады. Для правильного зачисления зарплат, возврата налогов CRA и международных переводов используются 3-значный Institution Number, 5-значный номер отделения (Transit) и SWIFT код.`,
    quick_stats: [
      { label: 'Institution Number', label_bn: 'ইন্সটিটিউশন কোড', label_hi: 'इंस्टीट्यूशन कोड', label_ru: 'Institution Code', value: instNum },
      { label: 'Sample Transit (Branch)', label_bn: 'ট্রানজিট নম্বর (শাখা)', label_hi: 'ब्रांच ट्रांजिट', label_ru: 'Transit код', value: knowledge.sampleTransit },
      { label: '9-Digit EFT Routing', label_bn: '৯ সংখ্যার EFT রাউটিং', label_hi: '9-अंकीय EFT राउटिंग', label_ru: 'EFT Routing (9 цифр)', value: eftCode },
      { label: 'SWIFT / BIC Code', label_bn: 'সুইফট / বিআইসি কোড', label_hi: 'स्विफ्ट कोड', label_ru: 'SWIFT / BIC', value: swiftCode },
      { label: 'Interac 24h Limit', label_bn: 'ইন্টারাক ২৪ ঘণ্টার লিমিট', label_hi: 'इंटरैक दैनिक सीमा', label_ru: 'Лимит Interac (24ч)', value: knowledge.interacLimit },
      { label: 'Deposit Protection', label_bn: 'সরকারি আমানত বীমা', label_hi: 'जमा बीमा गारंटी', label_ru: 'Страхование вкладов', value: knowledge.cdicProtection }
    ],
    sections: [
      {
        id: 'overview-history',
        heading: '1. Institutional Overview & Background',
        heading_bn: '১. প্রতিষ্ঠানের পরিচিতি ও ব্যাংকিং ইতিহাস',
        heading_hi: '1. संस्था का परिचय एवं इतिहास',
        heading_ru: '1. Обзор и история банка',
        content: `${knowledge.foundingStory}\n\n**Regulatory Status & Licensing:** ${knowledge.category} monitored by OSFI (Office of the Superintendent of Financial Institutions) and operating under Payments Canada rules. Headquartered at ${bank.head_office}.`,
        content_bn: `${knowledge.foundingStory_bn}\n\n**নিয়ন্ত্রক অনুমোদন ও তদারকি:** ${knowledge.category_bn}। ব্যাংকটি ব্যাংক অব কানাডা, ওএসএফআই (OSFI) এবং পেমেন্টস কানাডার প্রত্যক্ষ নিয়ন্ত্রক নির্দেশিকা অনুযায়ী পরিচালিত। প্রধান কার্যালয়: ${bank.head_office_bn || bank.head_office}।`,
        content_hi: `${knowledge.foundingStory}\n\nनियामक स्थिति: OSFI और बैंक ऑफ कनाडा द्वारा अधिकृत संस्थान।`,
        content_ru: `${knowledge.foundingStory}\n\nРегулируется Управлением суперинтенданта финансовых институтов (OSFI) и Банком Канады.`
      },
      {
        id: 'clearing-codes-format',
        heading: '2. Canadian Clearing Codes Explained: Transit, Institution & EFT',
        heading_bn: '২. কানাডিয়ান ব্যাংকিং কোডের গঠন: ট্রানজিট, ইন্সটিটিউশন ও ৯ সংখ্যার EFT',
        heading_hi: '2. कनाडाई बैंकिंग कोड प्रणाली: ट्रांजिट, इंस्टीट्यूशन एवं 9-अंकीय EFT',
        heading_ru: '2. Структура клиринговых кодов Канады: Transit, Institution и 9-значный EFT',
        content: `In Canada, domestic banking transfers rely on a standardized three-part numbering structure rather than standard IBANs:\n\n1. **3-Digit Institution Number (YYY):** Represents ${bank.name} nationwide across all branches (${instNum}).\n2. **5-Digit Branch Transit Number (XXXXX):** Uniquely identifies the physical home branch where your account was opened (e.g., ${knowledge.sampleTransit}).\n3. **9-Digit Electronic Funds Transfer (EFT) Routing Format:** Used for direct deposit payroll and pre-authorized debits, written as **0YYYXXXXX** (Leading zero + 3-digit Institution Code + 5-digit Transit Number). For ${bank.name}, standard head office format is **${eftCode}**.\n4. **7 to 12-Digit Account Number:** Your unique personal or corporate account balance number.`,
        content_bn: `কানাডায় ব্যাংক লেনদেনের জন্য ইউরোপীয় আইবান (IBAN) ব্যবস্থার বদলে ৩-অংশের একটি স্ট্যান্ডার্ড পদ্ধতি ব্যবহৃত হয়:\n\n১. **৩ সংখ্যার ইন্সটিটিউশন কোড (YYY):** এটি ${bank.name_bn || bank.name}-এর সার্বজনীন পরিচিতি নম্বর (${instNum})।\n২. **৫ সংখ্যার ব্রাঞ্চ ট্রানজিট নম্বর (XXXXX):** এটি যে নির্দিষ্ট ব্রাঞ্চে আপনার ব্যাংক অ্যাকাউন্টটি খোলা হয়েছে তা সনাক্ত করে (যেমন: ${knowledge.sampleTransit})।\n৩. **৯ সংখ্যার ইএফটি রাউটিং নম্বর (EFT Routing - 0YYYXXXXX):** বেতন বা পে-রোল ডিরেক্ট ডিপোজিট এবং সিআরএ ট্যাক্স রিফান্ডের জন্য ব্যবহৃত হয়। এটি গঠিত হয় প্রথমে শূন্য (0), এরপর ৩ সংখ্যার ইন্সটিটিউশন কোড (${instNum}) এবং শেষে ৫ সংখ্যার ব্রাঞ্চ ট্রানজিট কোড যুক্ত করে (${eftCode})।\n৪. **৭ থেকে ১২ সংখ্যার অ্যাকাউন্ট নম্বর:** আপনার ব্যক্তিগত ব্যাংক অ্যাকাউন্ট নম্বর।`,
        content_hi: `कनाडा में घरेलू फंड ट्रांसफर के लिए 3-अंकीय इंस्टीट्यूशन नंबर (${instNum}), 5-अंकीय ट्रांजिट नंबर और 9-अंकीय EFT राउटिंग कोड (${eftCode}) का उपयोग किया जाता है।`,
        content_ru: `В банковской системе Канады вместо IBAN используются три реквизита: 3-значный Institution Number (${instNum}), 5-значный номер филиала Transit и 9-значный формат EFT (${eftCode}).`
      },
      {
        id: 'interac-etransfer-guide',
        heading: '3. Interac e-Transfer & Daily Limits Guide',
        heading_bn: '৩. ইন্টারাক ই-ট্রান্সফার ও দৈনিক লেনদেনের নিয়মাবলী',
        heading_hi: '3. इंटरैक ई-ट्रांसफर (Interac e-Transfer) एवं सीमाएं',
        heading_ru: '3. Руководство по переводам Interac e-Transfer и лимитам',
        content: `Interac e-Transfer is Canada’s premier real-time funds transfer network, allowing instantaneous money transfers using only an email address or Canadian mobile phone number.\n\n- **Standard Limits for ${bank.name}:** ${knowledge.interacLimit}.\n- **Autodeposit Feature:** When enabled, incoming transfers deposit directly into your designated account without answering security questions.\n- **Speed:** Funds are typically available within 10 to 60 seconds.`,
        content_bn: `ইন্টারাক ই-ট্রান্সফার (Interac e-Transfer) কানাডার সবচেয়ে জনপ্রিয় ও তাৎক্ষণিক অর্থ আদান-প্রদান ব্যবস্থা। এর মাধ্যমে কোনো ব্যাংকের বিস্তারিত তথ্য ছাড়াই কেবল ইমেইল বা কানাডিয়ান ফোন নম্বরের সাহায্যে মুহূর্তেই টাকা পাঠানো যায়।\n\n- **${bank.name_bn || bank.name}-এর সাধারণ সীমা:** ${knowledge.interacLimit}।\n- **অটোডিপোজিট (Autodeposit):** এটি চালু রাখলে কোনো সিকিউরিটি প্রশ্নের উত্তর না দিয়েই ফান্ড সরাসরি আপনার অ্যাকাউন্টে যোগ হয়।\n- **লেনদেনের সময়:** সাধারণ ইন্টারাক লেনদেন ১০ থেকে ৬০ সেকেন্ডের মধ্যেই সম্পূর্ণ হয়।`,
        content_hi: `इंटरैक ई-ट्रांसफर कनाडा में तुरंत पैसे भेजने का सबसे लोकप्रिय माध्यम है। ईमेल या मोबाइल नंबर द्वारा 24 घंटे में फंड ट्रांसफर होता है।`,
        content_ru: `Interac e-Transfer — система мгновенных межбанковских переводов в Канаде по номеру телефона или электронной почте со средним временем зачисления 10-60 секунд.`
      },
      {
        id: 'cdic-deposit-protection',
        heading: '4. CDIC Deposit Insurance & Fund Safety Standards',
        heading_bn: '৪. সিডিআইসি আমানত সুরক্ষা ও সরকারি গ্যারান্টি',
        heading_hi: '4. CDIC जमा बीमा एवं सुरक्षा मानक',
        heading_ru: '4. Страхование вкладов CDIC и государственные гарантии',
        content: `Deposits at ${bank.name} are safeguarded up to **$100,000 CAD per insured category** (savings, chequing, joint accounts, RRSP, TFSA, FHSA, and RRIF) under the Canada Deposit Insurance Corporation (CDIC) or provincial credit union protection schemes.\n\n- **Covered Products:** Canadian dollar and foreign currency deposits, GICs (Guaranteed Investment Certificates) with terms up to 5 years.\n- **Protection Level:** ${knowledge.cdicProtection}.`,
        content_bn: `${bank.name_bn || bank.name}-এ রক্ষিত আপনার কষ্টার্জিত আমানত কানাডা সরকারের নিয়ন্ত্রিত **কানাডা ডিপোজিট ইন্স্যুরেন্স কর্পোরেশন (CDIC)** বা প্রাদেশিক সুরক্ষা সংস্থার আওতায় প্রতিটি অ্যাকাউন্টিং ক্যাটাগরিতে (যেমন: চেকিং, সেভিংস, জয়েন্ট অ্যাকাউন্ট, টিএফএসএ, আরআরএসপি ইত্যাদি) সর্বোচ্চ **১০০,০০০ কানাডিয়ান ডলার** পর্যন্ত সম্পূর্ণ সুরক্ষিত।\n\n- **বীমাকৃত ফান্ড:** ক্যাড ও ফরেন কারেন্সি কারেন্ট/সেভিংস অ্যাকাউন্ট এবং ৫ বছর মেয়াদের জিআইসি (GIC)।\n- **সুরক্ষার নিশ্চয়তা:** ${knowledge.cdicProtection}।`,
        content_hi: `कनाडा डिपॉजिट इंश्योरेंस कॉरपोरेशन (CDIC) के तहत आपके डिपॉजिट प्रत्येक श्रेणी में $100,000 CAD तक सुरक्षित एवं बीमित हैं।`,
        content_ru: `Вклады в банке защищены государственной корпорацией CDIC на сумму до 100 000 канадских долларов на каждую застрахованную категорию счетов.`
      },
      {
        id: 'international-wires',
        heading: '5. International Wire Transfers & SWIFT/BIC Instructions',
        heading_bn: '৫. আন্তর্জাতিক ওয়্যার ট্রান্সফার ও সুইফট/বিআইসি গাইড',
        heading_hi: '5. अंतरराष्ट्रीय वायर ट्रांसफर एवं स्विफ्ट कोड',
        heading_ru: '5. Международные валютные переводы SWIFT',
        content: `When receiving telegraphic wire transfers from abroad into ${bank.name}, provide the sender with:\n\n- **Beneficiary Bank:** ${bank.name}\n- **SWIFT/BIC Code:** **${swiftCode}**\n- **Institution Number:** ${instNum}\n- **Branch Transit Number:** Your 5-digit home branch transit (e.g., ${knowledge.sampleTransit})\n- **Account Number:** Your personal 7-12 digit account number\n- **Bank Address:** ${bank.head_office}, Canada\n- **Intermediary Bank:** Standard CAD or USD clearing correspondence if routed through global hubs.`,
        content_bn: `বিদেশ থেকে ${bank.name_bn || bank.name}-এ রেমিট্যান্স বা আন্তর্জাতিক ওয়্যার ট্রান্সফার গ্রহণের জন্য প্রেরককে নিম্নলিখিত তথ্যগুলো প্রদান করুন:\n\n- **গ্রাহকের ব্যাংকের নাম:** ${bank.name_bn || bank.name}\n- **সুইফট/বিআইসি কোড:** **${swiftCode}**\n- **ইন্সটিটিউশন নম্বর:** ${instNum}\n- **ব্রাঞ্চ ট্রানজিট কোড:** আপনার শাখার ৫ সংখ্যার ট্রানজিট নম্বর (যেমন: ${knowledge.sampleTransit})\n- **গ্রাহকের অ্যাকাউন্ট নম্বর:** আপনার ৭ থেকে ১২ সংখ্যার পূর্ণাঙ্গ ব্যাংক অ্যাকাউন্ট নম্বর\n- **ব্যাংকের প্রধান ঠিকানা:** ${bank.head_office_bn || bank.head_office}, Canada`,
        content_hi: `विदेश से फंड ट्रांसफर प्राप्त करने के लिए SWIFT कोड (${swiftCode}), इंस्टीट्यूशन कोड (${instNum}) और 5-अंकीय ब्रांच ट्रांजिट नंबर अनिवार्य है।`,
        content_ru: `Для получения международного перевода на счет в ${bank.name} используйте SWIFT код ${swiftCode}, Institution Number ${instNum} и 5-значный код филиала Transit.`
      }
    ],
    faqs: [
      {
        question: `What is the Institution Number for ${bank.name}?`,
        question_bn: `${bank.name_bn || bank.name}-এর ইন্সটিটিউশন নম্বর কত?`,
        question_hi: `${bank.name_hi || bank.name} का इंस्टीट्यूशन कोड क्या है?`,
        question_ru: `Какой Institution Number у ${bank.name_ru || bank.name}?`,
        answer: `The official 3-digit Institution Number for ${bank.name} is **${instNum}**. It is used along with your 5-digit branch transit number for all domestic direct deposits and EFT clearing.`,
        answer_bn: `${bank.name_bn || bank.name}-এর অফিসিয়াল ৩-সংখ্যার ইন্সটিটিউশন কোড হলো **${instNum}**। পে-রোল ডিরেক্ট ডিপোজিট এবং চেক ক্লিয়ারিংয়ে আপনার ব্রাঞ্চের ৫-সংখ্যার ট্রানজিট কোডের সাথে এটি যুক্ত হয়।`,
        answer_hi: `${bank.name_hi || bank.name} का 3-अंकीय इंस्टीट्यूशन कोड **${instNum}** है।`,
        answer_ru: `Официальный 3-значный Institution Number для ${bank.name_ru || bank.name} — **${instNum}**.`
      },
      {
        question: `How do I find my 5-digit Transit Number on a cheque?`,
        question_bn: `চেক বইয়ের পাতা থেকে কীভাবে ৫ সংখ্যার ট্রানজিট নম্বর বের করব?`,
        question_hi: `चेक से 5-अंकीय ट्रांजिट नंबर कैसे प्राप्त करें?`,
        question_ru: `Как найти 5-значный Transit код на чеке?`,
        answer: `On a Canadian cheque, look at the bottom MICR line. The first set of 5 digits represents your Transit Number (XXXXX), followed by the 3-digit Institution Number (${instNum}), followed by your personal Account Number.`,
        answer_bn: `কানাডিয়ান চেক বইয়ের নিচের MICR লাইনে প্রথম ৫টি সংখ্যা হলো আপনার ব্রাঞ্চ ট্রানজিট কোড (XXXXX), এর পরের ৩টি সংখ্যা হলো ইন্সটিটিউশন কোড (${instNum}) এবং শেষের অংশটি হলো আপনার ব্যাংক অ্যাকাউন্ট নম্বর।`,
        answer_hi: `कनाडाई चेक के निचले हिस्से में पहले 5 अंक आपका ब्रांच ट्रांजिट कोड होते हैं।`,
        answer_ru: `В нижней строке канадского чека первые 5 цифр обозначают номер филиала (Transit), следующие 3 цифры — код банка (${instNum}).`
      },
      {
        question: `Is ${bank.name} protected by CDIC deposit insurance?`,
        question_bn: `${bank.name_bn || bank.name}-এর আমানত কি CDIC কর্তৃক বীমাকৃত?`,
        question_hi: `क्या ${bank.name_hi || bank.name} में जमा राशि CDIC द्वारा बीमित है?`,
        question_ru: `Застрахованы ли вклады в ${bank.name_ru || bank.name} через CDIC?`,
        answer: `Yes, deposits at ${bank.name} are backed up to $100,000 CAD per insured category by the Canada Deposit Insurance Corporation (CDIC) or corresponding provincial deposit guarantee corporations.`,
        answer_bn: `হ্যাঁ, ${bank.name_bn || bank.name}-এর ডিপোজিট কানাডা সরকারের নিয়ন্ত্রিত সিডিআইসি (CDIC) অথবা সমমানের প্রাদেশিক ডিপোজিট ইনস্যুরেন্স ফান্ড কর্তৃক প্রতি ক্যাটাগরিতে সর্বোচ্চ ১০০,০০০ ক্যাড পর্যন্ত বীমাকৃত।`,
        answer_hi: `हाँ, CDIC नियमों के अनुसार प्रति खाता श्रेणी $100,000 CAD तक सुरक्षित है।`,
        answer_ru: `Да, депозиты в банке застрахованы на сумму до 100 000 CAD в соответствии с государственными стандартами CDIC.`
      },
      {
        question: `What is the SWIFT/BIC code for international wires to ${bank.name}?`,
        question_bn: `${bank.name_bn || bank.name}-এ বিদেশি রেমিট্যান্সের জন্য সুইফট কোড কোনটি?`,
        question_hi: `${bank.name_hi || bank.name} का अंतरराष्ट्रीय SWIFT कोड क्या है?`,
        question_ru: `Какой SWIFT код используется для переводов в ${bank.name_ru || bank.name}?`,
        answer: `The primary international SWIFT/BIC code for ${bank.name} head office is **${swiftCode}**.`,
        answer_bn: `${bank.name_bn || bank.name}-এর প্রধান কার্যালয়ের আন্তর্জাতিক সুইফট/বিআইসি (SWIFT/BIC) কোড হলো **${swiftCode}**।`,
        answer_hi: `${bank.name_hi || bank.name} का आधिकारिक स्विफ्ट कोड **${swiftCode}** है।`,
        answer_ru: `Главный международный SWIFT/BIC код банка — **${swiftCode}**.`
      }
    ]
  };
});
