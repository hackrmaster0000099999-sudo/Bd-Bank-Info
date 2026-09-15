import { BankArticle, Country } from '../types';

/**
 * Shared National Banking & Clearing Architecture Guide Articles
 * Each country has ONE shared comprehensive guide explaining generic clearing mechanics,
 * routing numbers, checksum algorithms, wire cutoffs, and regulatory deposit insurance.
 * Bank+State pages link to these country guides rather than duplicating generic content inline.
 */

export function getCountrySharedGuideSlug(country: Country): string {
  switch (country) {
    case 'us':
      return 'how-us-banking-works';
    case 'uk':
      return 'how-uk-banking-works';
    case 'in':
      return 'how-india-banking-works';
    case 'bd':
      return 'how-bangladesh-banking-works';
    case 'ca':
      return 'how-canada-banking-works';
    case 'au':
      return 'how-australia-banking-works';
    case 'de':
      return 'how-germany-banking-works';
    case 'ae':
      return 'how-uae-banking-works';
    case 'sg':
      return 'how-singapore-banking-works';
    case 'my':
      return 'how-malaysia-banking-works';
    case 'ru':
      return 'how-russia-banking-works';
    default:
      return 'how-us-banking-works';
  }
}

export function getCountrySharedGuideTitle(country: Country, lang: string = 'en'): string {
  if (lang === 'bn') {
    switch (country) {
      case 'us': return 'মার্কিন যুক্তরাষ্ট্রের ব্যাংকিং ব্যবস্থা, ৯-সংখ্যার রাউটিং নম্বর ও ক্লিয়ারিং গাইড';
      case 'uk': return 'যুক্তরাজ্যের ব্যাংকিং ব্যবস্থা, ৬-সংখ্যার সর্ট কোড ও ক্লিয়ারিং গাইড';
      case 'in': return 'ভারতের ব্যাংকিং সিস্টেম, ১১-সংখ্যার IFSC, MICR ও ফান্ড ট্রান্সফার গাইড';
      case 'bd': return 'বাংলাদেশের ব্যাংকিং ব্যবস্থা, ৯-ডিজিট BEFTN রাউটিং ও ক্লিয়ারিং গাইড';
      case 'ca': return 'কানাডার ব্যাংকিং ব্যবস্থা, ৫-ডিজিট ট্রানজিট ও EFT ক্লিয়ারিং গাইড';
      case 'au': return 'অস্ট্রেলিয়ার ব্যাংকিং ব্যবস্থা, ৬-ডিজিট BSB কোড ও NPP ট্রান্সফার গাইড';
      case 'de': return 'জার্মানির ব্যাংকিং ব্যবস্থা, ৮-সংখ্যার BLZ ও SEPA ক্লিয়ারিং গাইড';
      case 'ae': return 'সংযুক্ত আরব আমিরাতের ব্যাংকিং ব্যবস্থা, CBUAE রাউটিং ও ওয়্যার গাইড';
      case 'sg': return 'সিঙ্গাপুরের ব্যাংকিং ব্যবস্থা, FAST, MEPS+ ও ক্লিয়ারিং কোড গাইড';
      case 'my': return 'মালয়েশিয়ার ব্যাংকিং ব্যবস্থা, DuitNow, RENTAS ও ক্লিয়ারিং গাইড';
      case 'ru': return 'রাশিয়ার ব্যাংকিং ব্যবস্থা, ৯-সংখ্যার BIK ও ক্লিয়ারিং গাইড';
      default: return 'জাতীয় ব্যাংকিং ক্লিয়ারিং ও ওয়্যার ট্রান্সফার গাইড';
    }
  }

  switch (country) {
    case 'us': return 'How US Banking Works: 9-Digit ABA Routing Numbers, ACH, Fedwire & Checksums';
    case 'uk': return 'How UK Banking Works: 6-Digit Sort Codes, BACS, Faster Payments & CHAPS';
    case 'in': return 'How Indian Banking Works: 11-Character IFSC Codes, MICR, NEFT, RTGS & UPI';
    case 'bd': return 'How Bangladesh Banking Works: 9-Digit BEFTN Routing Numbers & BACH Clearing';
    case 'ca': return 'How Canadian Banking Works: 5-Digit Transit Numbers, Institution Codes & EFT';
    case 'au': return 'How Australian Banking Works: 6-Digit BSB Codes, NPP, Osko & BECS Transfers';
    case 'de': return 'How German Banking Works: 8-Digit BLZ (Bankleitzahl), SEPA & Bundesbank Clearing';
    case 'ae': return 'How UAE Banking Works: CBUAE Bank Codes, UAEFTS & Aani Instant Payments';
    case 'sg': return 'How Singapore Banking Works: Bank Codes, FAST, PayNow & MEPS+ Clearing';
    case 'my': return 'How Malaysian Banking Works: Bank Codes, DuitNow, Interbank GIRO & RENTAS';
    case 'ru': return 'How Russian Banking Works: 9-Digit BIK (БИК), Correspondent Accounts & SBP';
    default: return 'National Banking Clearing, Routing Codes & Remittance Guide';
  }
}

// 1. United States National Banking Guide
export const usaNationalGuideArticle: BankArticle = {
  id: 'how-us-banking-works',
  bank_id: 'usa-national-clearing',
  slug: 'how-us-banking-works',
  country: 'us',
  title: 'How US Banking Works: 9-Digit ABA Routing Numbers, ACH, Fedwire & Checksums',
  title_bn: 'মার্কিন ব্যাংকিং ব্যবস্থা: ৯-সংখ্যার ABA রাউটিং নাম্বার, ACH, ফেডওয়্যার ও চেকসাম অ্যালগরিদম',
  title_hi: 'अमेरिकी बैंकिंग कैसे काम करती है: 9-अंकीय ABA रूटिंग नंबर, ACH, फेडवायर और चेकसम फॉर्मूला',
  title_ru: 'Как устроена банковская система США: 9-значный ABA Routing Transit Number, ACH, Fedwire и Mod-10',
  title_de: 'Wie das US-Bankensystem funktioniert: 9-stellige ABA-Routing-Nummern, ACH, Fedwire & Prüfsummen',
  subtitle: 'A complete technical guide to the Federal Reserve clearing system, Automated Clearing House (ACH) cycles, Mod-10 Luhn checksum algorithms, and FDIC deposit protection.',
  subtitle_bn: 'ফেডারেল রিজার্ভ ক্লিয়ারিং ব্যবস্থা, ACH সাইকেল, মড-১০ অ্যালগরিদম ও FDIC বীমার পূর্ণাঙ্গ বিশ্লেষণ।',
  subtitle_hi: 'फेडरल रिजर्व क्लियरिंग सिस्टम, ऑटोमेटेड क्लियरिंग हाउस (ACH), मॉड-10 चेकसम और FDIC बीमा की विस्तृत गाइड।',
  subtitle_ru: 'Полное руководство по клирингу Федеральной Резервной Системы, прямым депозитам ACH, расчету контрольной суммы и страхованию FDIC.',
  subtitle_de: 'Umfassender Leitfaden zum Clearing der Federal Reserve, ACH-Zyklen, Mod-10-Prüfsummen und FDIC-Einlagensicherung.',
  meta_title: 'How US Banking Works: 9-Digit Routing Numbers, ACH & Fedwire Explained',
  meta_description: 'Learn how US banking clearing works: 9-digit ABA routing transit numbers, Federal Reserve districts, Mod-10 checksum formula, ACH direct deposits, Fedwire cutoff times, and FDIC insurance.',
  meta_keywords: [
    'how us banking works',
    'aba routing number structure',
    'mod 10 routing checksum algorithm',
    'ach vs fedwire differences',
    'federal reserve clearing districts',
    'fdic 250000 insurance rules',
    'us direct deposit routing lookup'
  ],
  read_time: '7 min read',
  author: 'World Bank Codes Financial Editorial Team',
  published_date: '2026-03-01',
  last_updated: '2026-09-14',
  overview: 'The United States banking architecture relies on the 9-digit ABA Routing Transit Number (RTN) developed in 1910 by the American Bankers Association. Operated through the Federal Reserve Banks and The Clearing House (ACH), this network settles trillions of dollars daily across retail and institutional transactions.',
  overview_bn: 'মার্কিন যুক্তরাষ্ট্রের ব্যাংকিং ক্লিয়ারিং অবকাঠামো পরিচালিত হয় ৯-সংখ্যার ABA রাউটিং ট্রানজিট নম্বরের মাধ্যমে, যা ১৯১০ সালে প্রতিষ্ঠিত হয়। ফেডারেল রিজার্ভ ব্যাংক এবং দ্য ক্লিয়ারিং হাউসের মাধ্যমে কোটি কোটি ডলারের দৈনিক লেনদেন সম্পন্ন হয়।',
  sections: [
    {
      id: 'us-rtn-structure',
      heading: '1. Structure of the 9-Digit ABA Routing Transit Number',
      heading_bn: '১. ৯-সংখ্যার ABA রাউটিং ট্রানজিট নম্বরের গঠন',
      content: 'Every valid US routing number consists of exactly 9 numerical digits divided into three functional segments:\n\n- **Digits 1-4 (Federal Reserve District Prefix):** Identifies the Federal Reserve district, routing symbol, and institution category. First two digits `01`-`12` indicate normal Fed districts (e.g., 01=Boston, 02=New York, 12=San Francisco). Prefixes `21`-`32` signify thrift institutions in corresponding districts, while `61`-`72` represent electronic wire-only participants.\n- **Digits 5-8 (Financial Institution Identifier):** Unique internal identifier assigned by Accuity (the official ABA registrar) to the specific financial institution.\n- **Digit 9 (Mod-10 Mathematical Checksum):** Enforces a strict validation algorithm to eliminate transcription errors.',
      keyTakeaways: ['9-digit format standard', 'First 4 digits represent Fed district', '9th digit is mod-10 check']
    },
    {
      id: 'us-mod10-checksum',
      heading: '2. The Mathematical Mod-10 Checksum Algorithm',
      heading_bn: '২. গানিতিক মড-১০ চেকসাম অ্যালগরিদম ও ফর্মুলা',
      content: 'To prevent typographical errors when routing electronic funds, the 9th digit of every US routing number must strictly satisfy the weighting formula:\n\n`[ 3(d1 + d4 + d7) + 7(d2 + d5 + d8) + 1(d3 + d6 + d9) ] mod 10 === 0`\n\n**Example Validation:** For Chase New York routing number `021000021`:\n- Sum 1 (positions 1,4,7): 0 + 0 + 0 = 0 -> Multiply by 3 = 0\n- Sum 2 (positions 2,5,8): 2 + 0 + 2 = 4 -> Multiply by 7 = 28\n- Sum 3 (positions 3,6,9): 1 + 0 + 1 = 2 -> Multiply by 1 = 2\n- Total Sum: 0 + 28 + 2 = 30\n- Check: `30 mod 10 = 0` (Valid routing number).\n\nIf any single digit is transposed or mistyped, the checksum fails immediately, preventing mistaken transfers before submission to the clearing house.',
      keyTakeaways: ['Formula: [3(d1+d4+d7) + 7(d2+d5+d8) + (d3+d6+d9)] % 10 = 0', 'Prevents erroneous fund transfers']
    },
    {
      id: 'us-payment-rails',
      heading: '3. Clearing Rails: ACH vs. Fedwire vs. RTP vs. FedNow',
      heading_bn: '৩. মার্কিন পেমেন্ট রেল: ACH বনাম ফেডওয়্যার বনাম FedNow',
      content: 'The US banking system utilizes multiple distinct payment rails based on speed, cost, and finality:\n\n- **Automated Clearing House (ACH):** Batch-based electronic network operated by the Federal Reserve and EPN. Ideal for payroll direct deposits, recurring bill payments, and tax refunds. Standard ACH settles in 1-2 business days; Same-Day ACH processes transactions across 3 daily clearing windows with a $1,000,000 per-transaction cap.\n- **Fedwire Funds Service:** Real-time Gross Settlement (RTGS) system owned and operated directly by the 12 Federal Reserve Banks. Fedwire transactions are immediate, irrevocable, and final upon execution. Most banks impose a 4:00 PM or 5:00 PM Eastern Time cutoff for same-day processing.\n- **FedNow & RTP (Real-Time Payments):** Modern instant payment rails operating 24/7/365 with sub-second clearing and immediate availability of funds up to standard limit thresholds.',
      keyTakeaways: ['ACH for batch payroll/bills', 'Fedwire for immediate high-value wholesale', 'FedNow for 24/7 instant retail']
    },
    {
      id: 'us-fdic-insurance',
      heading: '4. FDIC Insurance & Regulatory Safety Limits',
      heading_bn: '৪. এফডিআইসি ডিপোজিট ইন্স্যুরেন্স ও রেগুলেটরি সুরক্ষা',
      content: 'Deposits in US banks are insured by the Federal Deposit Insurance Corporation (FDIC), an independent agency of the US government backed by the full faith and credit of the United States.\n\n- **Coverage Limit:** Standard insurance amount is **$250,000 per depositor, per FDIC-insured bank, per ownership category** (single accounts, joint accounts, trust accounts, IRAs).\n- **Credit Unions:** Equivalent protection up to $250,000 is provided through the National Credit Union Share Insurance Fund (NCUSIF) managed by the NCUA.\n- **FDIC Certificate Numbers:** Every insured institution is assigned a unique FDIC Certificate number (e.g., JPMorgan Chase #628, Bank of America #3510, Wells Fargo #3511), certifying its active compliance with federal reserve capitalization standards.',
      keyTakeaways: ['$250,000 statutory coverage per depositor', 'NCUA protects credit unions', 'Backed by US Federal Government']
    }
  ],
  faqs: [
    {
      question: 'Where do I find the routing number on a physical paper check?',
      question_bn: 'কাগজের চেকের কোথায় রাউটিং নম্বর লেখা থাকে?',
      answer: 'On a standard US personal or business check, the 9-digit ABA routing number appears on the bottom left side printed in magnetic ink (MICR line) between the colon-like transit symbols (`⑆021000021⑆`). It is immediately followed by your account number and the check number.'
    },
    {
      question: 'Can a bank have different routing numbers for ACH and Wire transfers?',
      question_bn: 'একটি ব্যাংকের কি ACH এবং ওয়্যার ট্রান্সফারের জন্য আলাদা রাউটিং নম্বর হতে পারে?',
      answer: 'Yes. Major institutions frequently maintain dedicated routing numbers for electronic ACH direct deposits (batch processing) and separate routing numbers for incoming domestic Fedwire transfers. Always verify whether the payment sender requires the paper/ACH transit number or the electronic Fedwire identifier.'
    },
    {
      question: 'What happens if I enter an invalid routing number during a transfer?',
      question_bn: 'ফান্ড ট্রান্সফারের সময় ভুল রাউটিং নম্বর দিলে কি হবে?',
      answer: 'Because all financial institutions and automated payment processors validate the 9-digit mod-10 checksum before initiating payment instructions, mistyped routing numbers are rejected instantly at form validation. If an incorrect but numerically valid routing number belonging to another bank is submitted, the receiving bank rejects the transaction and funds are returned in 2 to 5 business days.'
    }
  ],
  quick_stats: [
    { label: 'Primary Code Type', label_bn: 'প্রধান কোড ফরম্যাট', value: '9-Digit ABA Routing Transit Number', value_bn: '৯-ডিজিট ABA রাউটিং ট্রানজিট নম্বর' },
    { label: 'Validation Algorithm', label_bn: 'যাচাইকরণ অ্যালগরিদম', value: 'Mod-10 Weighted (3-7-1-3-7-1-3-7-1)', value_bn: 'মড-১০ ওয়েটেড ফর্মুলা' },
    { label: 'Clearing Infrastructure', label_bn: 'ক্লিয়ারিং অবকাঠামো', value: 'FedACH, Fedwire, RTP, FedNow', value_bn: 'ফেড-এসিএইচ, ফেডওয়্যার ও FedNow' },
    { label: 'Deposit Protection', label_bn: 'আমানত সুরক্ষা', value: 'FDIC / NCUA $250,000 per depositor', value_bn: 'এফডিআইসি $২৫০,০০০ পর্যন্ত' }
  ]
};

// 2. United Kingdom National Banking Guide
export const ukNationalGuideArticle: BankArticle = {
  id: 'how-uk-banking-works',
  bank_id: 'uk-national-clearing',
  slug: 'how-uk-banking-works',
  country: 'uk',
  title: 'How UK Banking Works: 6-Digit Sort Codes, BACS, Faster Payments & CHAPS',
  title_bn: 'যুক্তরাজ্যের ব্যাংকিং ব্যবস্থা: ৬-সংখ্যার সর্ট কোড, BACS, ফাস্টার পেমেন্টস ও CHAPS',
  title_hi: 'यूके बैंकिंग प्रणाली: 6-अंकीय सॉर्ट कोड, BACS, फास्टर पेमेंट्स एवं CHAPS गाइड',
  title_ru: 'Как устроена банковская система Великобритании: 6-значный Sort Code, BACS, Faster Payments и CHAPS',
  title_de: 'Wie das britische Bankensystem funktioniert: 6-stellige Sort Codes, BACS, Faster Payments & CHAPS',
  subtitle: 'A technical guide to UK domestic clearing rails, 6-digit sort code formatting (XX-XX-XX), BACS 3-day direct debits, 24/7 Faster Payments, and FSCS deposit protection.',
  subtitle_bn: 'যুক্তরাজ্যের ঘরোয়া ক্লিয়ারিং রেল, ৬-ডিজিটের সর্ট কোড বিন্যাস ও FSCS আমানত সুরক্ষার বিস্তারিত গাইড।',
  meta_title: 'How UK Banking Works: 6-Digit Sort Codes, BACS & Faster Payments',
  meta_description: 'Complete guide to UK clearing: 6-digit Sort Codes (XX-XX-XX), Faster Payments 24/7 real-time transfers, BACS 3-day cycles, CHAPS same-day wholesale clearing, and £85,000 FSCS deposit insurance.',
  read_time: '6 min read',
  author: 'World Bank Codes Financial Editorial Team',
  published_date: '2026-03-01',
  last_updated: '2026-09-14',
  overview: 'The United Kingdom banking system organizes domestic transfers around the 6-digit Sort Code and 8-digit account number. Payments are processed through world-leading electronic rails including Faster Payments for real-time transactions, BACS for bulk payroll and direct debits, and CHAPS for high-value wholesale settlements.',
  overview_bn: 'যুক্তরাজ্যের ব্যাংকিং ক্লিয়ারিং ব্যবস্থা ৬-সংখ্যার সর্ট কোড এবং ৮-সংখ্যার একাউন্ট নম্বরের ওপর ভিত্তি করে কাজ করে। ফাস্টার পেমেন্টস, BACS এবং CHAPS এর মাধ্যমে শত কোটি পাউন্ডের লেনদেন পরিচালিত হয়।',
  sections: [
    {
      id: 'uk-sortcode-structure',
      heading: '1. UK 6-Digit Sort Code Structure & Formatting',
      heading_bn: '১. ইউকে ৬-সংখ্যার সর্ট কোডের গঠন ও বিন্যাস',
      content: 'A UK Sort Code consists of 6 numeric digits, formatted as three pairs separated by hyphens (`XX-XX-XX`):\n\n- **First 2 digits:** Identify the clearing bank brand or institutional banking group (e.g., `20-xx-xx` for Barclays, `40-xx-xx` for HSBC, `30-xx-xx` for Lloyds Bank, `60-xx-xx` for NatWest).\n- **Middle 2 digits:** Designate internal administrative regions or specialized treasury accounting centers.\n- **Last 2 digits:** Identify the individual branch office or customer service processing hub.\n\nAll UK sort codes are registered and maintained in the Extended Industry Sorting Code Directory (EISCD) managed by Vocalink (a Mastercard company) under the supervision of Pay.UK.',
      keyTakeaways: ['6-digit format XX-XX-XX', 'First 2 digits identify bank group', 'EISCD central registry']
    },
    {
      id: 'uk-payment-rails',
      heading: '2. UK Payment Rails: Faster Payments vs. BACS vs. CHAPS',
      heading_bn: '২. ইউকে পেমেন্ট রেল: Faster Payments, BACS এবং CHAPS',
      content: '- **Faster Payments System (FPS):** Near-instant electronic transfers operating 24 hours a day, 365 days a year. Transactions typically clear in under 15 seconds with limits up to £1,000,000 depending on individual bank policies.\n- **BACS Payment Schemes:** A 3-day clearing cycle used for bulk salary payments (Direct Credit) and recurring utility/subscription collections (Direct Debit).\n- **CHAPS (Clearing House Automated Payment System):** High-value, same-day wholesale settlement system operated on the Bank of England RTGS infrastructure. Primarily used for commercial property purchases, large corporate acquisitions, and time-critical interbank settlements with a daily 3:30 PM cutoff.',
      keyTakeaways: ['Faster Payments for 24/7 retail', 'BACS for 3-day direct debits', 'CHAPS for high-value wholesale']
    },
    {
      id: 'uk-cop-protection',
      heading: '3. Confirmation of Payee (CoP) & Fraud Protection',
      heading_bn: '৩. কনফার্মেশন অফ পেয়ি (CoP) ও জালিয়াতি প্রতিরোধ ব্যবস্থা',
      content: 'To prevent Authorized Push Payment (APP) fraud and typographical transfer errors, the UK implemented mandatory **Confirmation of Payee (CoP)**. When entering a recipient sort code and account number, the banking app cross-references the beneficiary name with the destination bank in real time, alerting users if the name does not match.',
      keyTakeaways: ['Real-time name matching', 'Reduces fraud and misdirected funds']
    },
    {
      id: 'uk-fscs-insurance',
      heading: '4. Financial Services Compensation Scheme (FSCS)',
      heading_bn: '৪. ইউকে FSCS আমানত বীমা ও নিরাপত্তা',
      content: 'Deposits with authorized UK banks and building societies are protected by the **Financial Services Compensation Scheme (FSCS)** up to **£85,000 per person, per banking license** (or £170,000 for joint accounts), regulated by the Prudential Regulation Authority (PRA) and the Financial Conduct Authority (FCA).',
      keyTakeaways: ['£85,000 statutory coverage', '£170,000 for joint accounts', 'PRA & FCA regulated']
    }
  ],
  faqs: [
    {
      question: 'How do I convert a UK Sort Code and Account Number into an IBAN?',
      question_bn: 'কীভাবে ইউকে সর্ট কোড ও একাউন্ট নম্বরকে IBAN-এ রূপান্তর করবেন?',
      answer: 'A standard UK IBAN contains 22 alphanumeric characters: Country Code `GB` + 2 check digits + 4-letter Bank BIC Code + 6-digit Sort Code + 8-digit Account Number (e.g., `GB29 NWBK 601613 31926819`).'
    }
  ],
  quick_stats: [
    { label: 'Primary Domestic Identifier', label_bn: 'প্রধান কোড ফরম্যাট', value: '6-Digit Sort Code (XX-XX-XX)', value_bn: '৬-ডিজিট সর্ট কোড (XX-XX-XX)' },
    { label: 'Real-Time Clearing Rail', label_bn: 'রিয়েল-টাইম ক্লিয়ারিং', value: 'Faster Payments (FPS) 24/7/365', value_bn: 'ফাস্টার পেমেন্টস (FPS) ২৪/৭' },
    { label: 'Bulk Clearing', label_bn: 'বাল্ক ক্লিয়ারিং', value: 'BACS 3-Day Cycle (Direct Debit)', value_bn: 'BACS ৩-দিনের সাইকেল' },
    { label: 'Deposit Protection', label_bn: 'আমানত সুরক্ষা', value: 'FSCS £85,000 per banking license', value_bn: 'FSCS £৮৫,০০০ পর্যন্ত' }
  ]
};

// 3. India National Banking Guide
export const indiaNationalGuideArticle: BankArticle = {
  id: 'how-india-banking-works',
  bank_id: 'india-national-clearing',
  slug: 'how-india-banking-works',
  country: 'in',
  title: 'How Indian Banking Works: 11-Character IFSC Codes, MICR, NEFT, RTGS & UPI',
  title_bn: 'ভারতের ব্যাংকিং ব্যবস্থা: ১১-অক্ষরের IFSC কোড, MICR, NEFT, RTGS ও UPI গাইড',
  title_hi: 'भारतीय बैंकिंग प्रणाली: 11-अंकीय IFSC कोड, MICR, NEFT, RTGS और UPI विस्तृत गाइड',
  title_ru: 'Как устроена банковская система Индии: 11-значный IFSC, MICR, NEFT, RTGS и UPI',
  title_de: 'Wie das indische Bankensystem funktioniert: 11-stellige IFSC-Codes, MICR, NEFT, RTGS & UPI',
  subtitle: 'A detailed breakdown of the Reserve Bank of India (RBI) payment architecture, 11-character IFSC format, 9-digit MICR check clearing, NEFT 24x7 batches, RTGS, and DICGC deposit insurance.',
  subtitle_bn: 'রিজার্ভ ব্যাংক অফ ইন্ডিয়ার (RBI) পেমেন্ট আর্কিটেকচার, ১১-সংখ্যার IFSC ফরম্যাট, NEFT ও UPI ব্যবস্থার সম্পূর্ণ গাইড।',
  meta_title: 'How Indian Banking Works: IFSC Code Structure, NEFT, RTGS & UPI',
  meta_description: 'Complete guide to Indian interbank clearing: 11-character IFSC structure, 9-digit MICR cheque codes, round-the-clock NEFT, real-time RTGS, UPI integration, and ₹5 Lakh DICGC deposit protection.',
  read_time: '7 min read',
  author: 'World Bank Codes Financial Editorial Team',
  published_date: '2026-03-01',
  last_updated: '2026-09-14',
  overview: 'The Indian electronic payment system, regulated by the Reserve Bank of India (RBI) and operated by NPCI, is one of the most advanced in the world. Fund routing relies on 11-character alphanumeric Indian Financial System Codes (IFSC) for electronic transfers and 9-digit Magnetic Ink Character Recognition (MICR) codes for paper cheques.',
  overview_bn: 'ভারতের ইলেকট্রনিক পেমেন্ট ব্যবস্থা ভারতীয় রিজার্ভ ব্যাংক (RBI) ও NPCI দ্বারা নিয়ন্ত্রিত। এটি মূলত ১১-অক্ষরের IFSC কোড এবং ৯-সংখ্যার MICR কোডের ওপর ভিত্তি করে পরিচালিত হয়।',
  sections: [
    {
      id: 'in-ifsc-structure',
      heading: '1. Anatomy of an 11-Character IFSC Code',
      heading_bn: '১. ১১-সংখ্যার IFSC কোডের পূর্ণাঙ্গ গঠন',
      content: 'Every bank branch participating in RBI electronic clearing has a unique 11-character IFSC code divided into three parts:\n\n- **Characters 1-4 (Bank Code):** 4 uppercase alphabetic letters representing the bank (e.g., `SBIN` for State Bank of India, `HDFC` for HDFC Bank, `ICIC` for ICICI Bank, `PUNB` for Punjab National Bank).\n- **Character 5 (Reserved Control Character):** Always the numeric digit `0` (zero), reserved for future expansion.\n- **Characters 6-11 (Branch Code):** 6 alphanumeric characters identifying the specific physical branch.',
      keyTakeaways: ['11 characters total', 'First 4 letters bank identifier', '5th character always 0']
    },
    {
      id: 'in-micr-structure',
      heading: '2. 9-Digit MICR Code Structure for Cheque Clearing',
      heading_bn: '২. চেক ক্লিয়ারিংয়ের জন্য ৯-সংখ্যার MICR কোডের গঠন',
      content: 'Magnetic Ink Character Recognition (MICR) codes are 9-digit numbers printed on the bottom of cheque leaves for high-speed automated sorting via Cheque Truncation System (CTS-2010):\n\n- **Digits 1-3:** City Code (aligned with postal pin code).\n- **Digits 4-6:** Bank Code assigned by RBI.\n- **Digits 7-9:** Specific branch identifier code.',
      keyTakeaways: ['9 digits: City (3) + Bank (3) + Branch (3)', 'Used for CTS-2010 automated cheque sorting']
    },
    {
      id: 'in-payment-rails',
      heading: '3. Electronic Payment Systems: NEFT vs. RTGS vs. IMPS vs. UPI',
      heading_bn: '৩. পেমেন্ট সিস্টেম: NEFT বনাম RTGS বনাম IMPS বনাম UPI',
      content: '- **NEFT (National Electronic Funds Transfer):** Operates 24x7 in half-hourly settlement batches with no minimum or maximum statutory limit.\n- **RTGS (Real Time Gross Settlement):** High-value fund transfers with continuous individual order clearing; minimum transaction limit is ₹2,00,000.\n- **IMPS (Immediate Payment Service):** Instant 24x7 interbank electronic transfer up to ₹5,00,000.\n- **UPI (Unified Payments Interface):** Mobile-first instant payment rail built on IMPS using Virtual Payment Addresses (VPA) and QR codes.',
      keyTakeaways: ['NEFT operates 24x7 half-hourly batches', 'RTGS for ₹2 Lakh+ real-time', 'UPI for mobile instant payments']
    },
    {
      id: 'in-dicgc-insurance',
      heading: '4. DICGC Insurance Coverage',
      heading_bn: '৪. DICGC আমানত বীমা ও নিরাপত্তা',
      content: 'Deposits in scheduled commercial banks and cooperative banks in India are insured by the **Deposit Insurance and Credit Guarantee Corporation (DICGC)**, an RBI subsidiary, up to **₹5,00,000 (5 Lakh Rupees)** per depositor per bank for both principal and interest.',
      keyTakeaways: ['₹5,00,000 statutory deposit guarantee', 'Covers savings, fixed, recurring deposits']
    }
  ],
  faqs: [
    {
      question: 'Is the 5th character of an IFSC code always zero?',
      question_bn: 'IFSC কোডের ৫ম অক্ষর কি সবসময় শূন্য (0) হয়?',
      answer: 'Yes. By RBI mandate, the 5th character of every valid IFSC is always the numeric digit "0" (zero) to ensure compatibility across clearing engines.'
    }
  ],
  quick_stats: [
    { label: 'Primary Electronic Code', label_bn: 'প্রধান কোড ফরম্যাট', value: '11-Character IFSC (4 letters + 0 + 6 chars)', value_bn: '১১-অক্ষরের IFSC কোড' },
    { label: 'Paper Cheque Code', label_bn: 'চেক ক্লিয়ারিং কোড', value: '9-Digit MICR Code', value_bn: '৯-ডিজিট MICR কোড' },
    { label: 'Real-Time Clearing Rails', label_bn: 'রিয়েল-টাইম রেল', value: 'NEFT (24x7), RTGS, IMPS, UPI', value_bn: 'NEFT (২৪x৭), RTGS, IMPS, UPI' },
    { label: 'Deposit Protection', label_bn: 'আমানত সুরক্ষা', value: 'DICGC ₹5 Lakh per depositor', value_bn: 'DICGC ₹৫ লাখ পর্যন্ত' }
  ]
};

// 4. Bangladesh National Banking Guide
export const bdBangladeshNationalGuideArticle: BankArticle = {
  id: 'how-bangladesh-banking-works',
  bank_id: 'bd-national-clearing',
  slug: 'how-bangladesh-banking-works',
  country: 'bd',
  title: 'How Bangladesh Banking Works: 9-Digit BEFTN Routing Numbers & BACH Clearing',
  title_bn: 'বাংলাদেশের ব্যাংকিং ব্যবস্থা: ৯-ডিজিট BEFTN রাউটিং নম্বর ও BACH ক্লিয়ারিং গাইড',
  title_hi: 'बांग्लादेश बैंकिंग प्रणाली: 9-अंकीय BEFTN रूटिंग नंबर एवं BACH क्लियरिंग गाइड',
  title_ru: 'Как устроена банковская система Бангладеш: 9-значный BEFTN Routing Number и клиринг BACH',
  title_de: 'Wie das Bankensystem in Bangladesch funktioniert: 9-stellige BEFTN-Routing-Nummern & BACH-Clearing',
  subtitle: 'A comprehensive technical overview of Bangladesh Bank automated clearing rails: 9-digit BEFTN routing numbers, BACH electronic check clearing, NPSB instant card transfers, RTGS, and Deposit Insurance.',
  subtitle_bn: 'বাংলাদেশ ব্যাংকের অটোমেটেড ক্লিয়ারিং ব্যবস্থা, ৯-ডিজিট BEFTN রাউটিং নম্বর, BACH, NPSB ও আমানত বীমা ফান্ডের সম্পূর্ণ বিশ্লেষণ।',
  meta_title: 'How Bangladesh Banking Works: 9-Digit BEFTN Routing Numbers & BACH',
  meta_description: 'Detailed guide to Bangladesh interbank clearing: 9-digit BEFTN routing number structure (District + Bank + Branch), BACH electronic cheque truncation, NPSB card switching, RTGS, and BDT 2 Lakh deposit protection.',
  read_time: '6 min read',
  author: 'World Bank Codes Financial Editorial Team',
  published_date: '2026-03-01',
  last_updated: '2026-09-14',
  overview: 'The banking sector in Bangladesh is centrally governed by Bangladesh Bank. Interbank transactions are executed seamlessly across the Bangladesh Automated Clearing House (BACH), which encompasses the Bangladesh Electronic Funds Transfer Network (BEFTN) and the Bangladesh Automated Cheque Processing System (BACPS).',
  overview_bn: 'বাংলাদেশের ব্যাংকিং ব্যবস্থা বাংলাদেশ ব্যাংক কর্তৃক কেন্দ্রীয়ভাবে পরিচালিত হয়। ইন্টারব্যাংক ফান্ড ট্রান্সফার BACH এর আওতাধীন BEFTN, NPSB ও RTGS এর মাধ্যমে পরিচালিত হয়।',
  sections: [
    {
      id: 'bd-beftn-structure',
      heading: '1. Structure of Bangladesh 9-Digit BEFTN Routing Numbers',
      heading_bn: '১. বাংলাদেশের ৯-ডিজিট BEFTN রাউটিং নম্বরের গঠন',
      content: 'Every scheduled commercial bank branch in Bangladesh is assigned a 9-digit numerical routing number divided into three 3-digit segments:\n\n- **Digits 1-3 (District Code):** Designates the geographical district or clearing zone defined by Bangladesh Bank (e.g., `085` for Dhaka, `090` for Chittagong, `225` for Sylhet).\n- **Digits 4-6 (Bank Identifier):** Unique 3-digit code assigned to the commercial bank (e.g., `125` for Islami Bank Bangladesh, `060` for BRAC Bank, `085` for Dutch-Bangla Bank, `200` for Sonali Bank).\n- **Digits 7-9 (Branch Code):** Specific branch number within that banking institution.',
      keyTakeaways: ['9 digits format', 'Digits 1-3: District code', 'Digits 4-6: Bank code', 'Digits 7-9: Branch code']
    },
    {
      id: 'bd-payment-rails',
      heading: '2. Bangladesh Clearing Rails: BEFTN vs. NPSB vs. BD-RTGS',
      heading_bn: '২. বাংলাদেশ ব্যাংকিং ক্লিয়ারিং রেল: BEFTN, NPSB ও RTGS',
      content: '- **BEFTN (Bangladesh Electronic Funds Transfer Network):** Handles credit transfers (salary disbursements, dividends, vendor payments) and debit instructions in batch cycles settled within next business day.\n- **NPSB (National Payment Switch Bangladesh):** Facilitates real-time interbank ATM withdrawals, POS card payments, and instant Account-to-Account / MFS (bKash, Nagad) transfers.\n- **BD-RTGS (Real Time Gross Settlement):** High-value local currency (BDT) and foreign currency (USD, EUR, GBP) interbank clearing settled instantly with a minimum limit of BDT 100,000.',
      keyTakeaways: ['BEFTN next-day batch clearing', 'NPSB instant card/MFS switching', 'RTGS for BDT 100,000+ real-time']
    },
    {
      id: 'bd-ditf-insurance',
      heading: '3. Deposit Insurance Trust Fund (DITF) Protection',
      heading_bn: '৩. আমানত বীমা ট্রাস্ট ফান্ড (DITF) ও গ্রাহক সুরক্ষা',
      content: 'Under the Bank Deposit Insurance Act, deposits in scheduled banks are protected by the **Deposit Insurance Trust Fund (DITF)** managed by Bangladesh Bank, insuring retail deposits up to **BDT 2,00,000 (Two Lakh Taka)** per depositor per bank.',
      keyTakeaways: ['BDT 2,00,000 statutory deposit insurance', 'Managed by Bangladesh Bank DITF']
    }
  ],
  faqs: [
    {
      question: 'Where can I find the 9-digit routing number on a Bangladeshi cheque leaf?',
      question_bn: 'বাংলাদেশি চেকের পাতার কোথায় ৯-সংখ্যার রাউটিং নম্বর থাকে?',
      answer: 'The 9-digit routing number is printed at the bottom of the cheque leaf in the MICR band, positioned between the cheque number and the customer account number.'
    }
  ],
  quick_stats: [
    { label: 'Primary Routing Code', label_bn: 'প্রধান রাউটিং কোড', value: '9-Digit BEFTN Routing Number (District + Bank + Branch)', value_bn: '৯-ডিজিট BEFTN রাউটিং কোড' },
    { label: 'Clearing House', label_bn: 'ক্লিয়ারিং হাউজ', value: 'BACH (BEFTN & BACPS)', value_bn: 'বাংলাদেশ অটোমেটেড ক্লিয়ারিং হাউজ (BACH)' },
    { label: 'Instant Settlement Rail', label_bn: 'তাৎক্ষণিক পেমেন্ট রেল', value: 'NPSB & BD-RTGS', value_bn: 'NPSB এবং রিয়েল-টাইম RTGS' },
    { label: 'Deposit Protection', label_bn: 'আমানত সুরক্ষা', value: 'DITF BDT 2,00,000 per depositor', value_bn: 'DITF ২ লাখ টাকা পর্যন্ত' }
  ]
};

// 5. Canada National Banking Guide
export const canadaNationalGuideArticle: BankArticle = {
  id: 'how-canada-banking-works',
  bank_id: 'ca-national-clearing',
  slug: 'how-canada-banking-works',
  country: 'ca',
  title: 'How Canadian Banking Works: 5-Digit Transit Numbers, Institution Codes & EFT',
  title_bn: 'কানাডার ব্যাংকিং ব্যবস্থা: ৫-ডিজিট ট্রানজিট নম্বর, ৩-ডিজিট ব্যাংক কোড ও EFT গাইড',
  subtitle: 'A comprehensive guide to Payments Canada ACSS clearing, Canadian Routing Transit Numbers (0XXXYYYYY), direct deposits, Interac e-Transfers, and CDIC insurance.',
  meta_title: 'How Canadian Banking Works: Transit Numbers, Institution Codes & EFT',
  meta_description: 'Complete guide to Canadian banking clearing: 5-digit branch Transit Numbers, 3-digit Institution Codes, Electronic Funds Transfers (EFT), Lynx RTGS, and $100,000 CDIC deposit protection.',
  read_time: '6 min read',
  author: 'World Bank Codes Financial Editorial Team',
  published_date: '2026-03-01',
  last_updated: '2026-09-14',
  overview: 'The Canadian banking system operates under Payments Canada regulations. Interbank transfers require a combination of a 5-digit Transit Number, a 3-digit Financial Institution Number, and a customer account number.',
  sections: [
    {
      id: 'ca-eft-format',
      heading: '1. Canadian Routing Number Format (8-Digit & 9-Digit EFT)',
      content: 'In Canada, banking routing information is formatted in two standard ways:\n\n- **Paper Cheque MICR Standard:** `XXXXX-YYY` (5-digit Transit Number followed by 3-digit Institution Code).\n- **Electronic Funds Transfer (EFT) Standard:** `0YYYXXXXX` (Leading zero + 3-digit Institution Code + 5-digit Transit Number).\n\nFor example, RBC Royal Bank (Institution 003) branch 00010 in Toronto has the electronic routing number `000300010`.',
      keyTakeaways: ['EFT format: 0 + 3-digit Inst + 5-digit Transit', 'Paper format: 5-digit Transit + 3-digit Inst']
    },
    {
      id: 'ca-payment-rails',
      heading: '2. Canadian Clearing Rails: ACSS vs. Lynx vs. Interac',
      content: '- **Automated Clearing Settlement System (ACSS):** Batch retail payment clearing system processing millions of direct deposits, pre-authorized debits, and cheques daily.\n- **Lynx:** High-value Real-Time Gross Settlement (RTGS) system owned and operated by Payments Canada.\n- **Interac e-Transfer:** Ubiquitous Canadian consumer instant payment rail linking email addresses and mobile numbers directly to bank accounts.',
      keyTakeaways: ['ACSS for direct deposits', 'Lynx for high-value wholesale', 'Interac for instant consumer transfers']
    },
    {
      id: 'ca-cdic-insurance',
      heading: '3. Canada Deposit Insurance Corporation (CDIC)',
      content: 'Eligible Canadian dollar deposits at member institutions are automatically protected by the **Canada Deposit Insurance Corporation (CDIC)** up to **$100,000 CAD per insured category** per member financial institution.',
      keyTakeaways: ['$100,000 CAD statutory deposit guarantee', 'Protects savings, chequing, GICs']
    }
  ],
  faqs: [
    {
      question: 'What is the difference between a Canadian transit number and institution number?',
      answer: 'The 3-digit Institution Number identifies the banking company (e.g., 001 for BMO, 002 for Scotiabank, 003 for RBC, 004 for TD, 006 for CIBC), whereas the 5-digit Transit Number identifies the specific physical branch office.'
    }
  ],
  quick_stats: [
    { label: 'Transit Format', value: '5-Digit Branch Transit Number' },
    { label: 'Institution Format', value: '3-Digit Bank Institution Code' },
    { label: 'Electronic EFT Format', value: '0YYYXXXXX (9 Digits Total)' },
    { label: 'Deposit Protection', value: 'CDIC $100,000 CAD per category' }
  ]
};

// 6. Australia National Banking Guide
export const australiaNationalGuideArticle: BankArticle = {
  id: 'how-australia-banking-works',
  bank_id: 'au-national-clearing',
  slug: 'how-australia-banking-works',
  country: 'au',
  title: 'How Australian Banking Works: 6-Digit BSB Codes, NPP, Osko & BECS Transfers',
  title_bn: 'অস্ট্রেলিয়ার ব্যাংকিং ব্যবস্থা: ৬-ডিজিট BSB কোড, NPP, ওস্কো ও BECS ট্রান্সফার গাইড',
  subtitle: 'A technical guide to Australian clearing: 6-digit Bank State Branch (BSB) format (XXX-YYY), New Payments Platform (NPP), PayID, and Financial Claims Scheme protection.',
  meta_title: 'How Australian Banking Works: 6-Digit BSB Codes, NPP & PayID',
  meta_description: 'Guide to Australian banking: 6-digit BSB code structure (XXX-YYY), APCA registration, NPP & Osko 24/7 instant settlements, BECS direct entry, and $250,000 AUD FCS guarantee.',
  read_time: '6 min read',
  author: 'World Bank Codes Financial Editorial Team',
  published_date: '2026-03-01',
  last_updated: '2026-09-14',
  overview: 'The Australian payments system organizes all interbank fund flows using the 6-digit Bank State Branch (BSB) number and account numbers up to 9 digits, supervised by the Reserve Bank of Australia (RBA) and AusPayNet.',
  sections: [
    {
      id: 'au-bsb-structure',
      heading: '1. Anatomy of the Australian 6-Digit BSB Code',
      content: 'A BSB code is structured as `XXX-YYY`:\n\n- **First 2 digits:** Bank or financial institution group (e.g., 01=ANZ, 03=Westpac, 06=Commonwealth Bank, 08=NAB).\n- **Digit 3:** State code where the branch was established (e.g., 2=NSW/ACT, 3=VIC, 4=QLD, 5=SA, 6=WA, 7=TAS, 8=NT).\n- **Last 3 digits (YYY):** Specific physical branch code.',
      keyTakeaways: ['6-digit XXX-YYY format', 'Digit 3 indicates state origin', 'AusPayNet maintained']
    },
    {
      id: 'au-npp-rail',
      heading: '2. Australian Real-Time Rails: NPP, Osko & PayID',
      content: 'The **New Payments Platform (NPP)** enables 24/7/365 real-time data-rich transactions through Osko. Users can route payments instantly using **PayID** (mobile phone numbers, email addresses, or ABNs) without memorizing BSB codes.',
      keyTakeaways: ['NPP 24/7 instant clearing', 'PayID eliminates routing code friction']
    },
    {
      id: 'au-fcs-insurance',
      heading: '3. Financial Claims Scheme (FCS) Guarantee',
      content: 'Under the Australian Government Financial Claims Scheme (FCS) administered by APRA, deposits in authorized deposit-taking institutions (ADIs) are guaranteed up to **$250,000 AUD per account holder per ADI**.',
      keyTakeaways: ['$250,000 AUD statutory deposit guarantee', 'Administered by APRA']
    }
  ],
  faqs: [
    {
      question: 'Do I need both a BSB and an account number in Australia?',
      answer: 'Yes. Unless you are paying via PayID, domestic Australian direct transfers always require the 6-digit BSB code (specifying the bank and branch) plus the recipient account number.'
    }
  ],
  quick_stats: [
    { label: 'Primary Code', value: '6-Digit BSB Code (XXX-YYY)' },
    { label: 'Instant Rail', value: 'New Payments Platform (NPP) & Osko' },
    { label: 'Alias Routing', value: 'PayID (Phone, Email, ABN)' },
    { label: 'Deposit Protection', value: 'FCS $250,000 AUD per ADI' }
  ]
};

// 7. Germany National Banking Guide
export const germanyNationalGuideArticle: BankArticle = {
  id: 'how-germany-banking-works',
  bank_id: 'de-national-clearing',
  slug: 'how-germany-banking-works',
  country: 'de',
  title: 'How German Banking Works: 8-Digit BLZ (Bankleitzahl), SEPA & Bundesbank Clearing',
  title_bn: 'জার্মানির ব্যাংকিং ব্যবস্থা: ৮-সংখ্যার BLZ কোড, SEPA ও বুন্দেসবাংক ক্লিয়ারিং গাইড',
  title_de: 'Wie das deutsche Bankensystem funktioniert: 8-stellige BLZ, SEPA & Bundesbank-Clearing',
  subtitle: 'A technical guide to German banking: 8-digit Bankleitzahl (BLZ) encoding, IBAN construction (DE...), SEPA Credit & Instant transfers, and statutory deposit insurance (EdB).',
  meta_title: 'How German Banking Works: 8-Digit BLZ, IBAN & SEPA Instant Guide',
  meta_description: 'Complete guide to the German banking system: 8-digit Bankleitzahl (BLZ) structures, Deutsche Bundesbank clearing, SEPA Instant Transfers (<10s), and €100,000 EdB deposit guarantee.',
  read_time: '6 min read',
  author: 'World Bank Codes Financial Editorial Team',
  published_date: '2026-03-01',
  last_updated: '2026-09-14',
  overview: 'The German banking architecture is centrally organized by the Deutsche Bundesbank and the Federal Financial Supervisory Authority (BaFin). Domestic and European transfers utilize the 8-digit Bankleitzahl (BLZ) seamlessly embedded into European Standard IBANs.',
  sections: [
    {
      id: 'de-blz-structure',
      heading: '1. The 8-Digit German Bankleitzahl (BLZ) Structure',
      content: 'The 8-digit BLZ assigned by the Deutsche Bundesbank is divided into:\n\n- **Digit 1 (Clearing Area):** Identifies the clearing region in Germany (e.g., 1=Berlin/Brandenburg, 2=Hamburg/Schleswig-Holstein, 5=Frankfurt/Hesse, 7=Stuttgart/Baden-Württemberg, 8=Munich/Bavaria).\n- **Digits 2-3 (Branch Network Zone):** Specific economic sub-district.\n- **Digit 4 (Banking Group):** Identifies the bank sector (e.g., 0=Bundesbank, 1-2=Private banks, 4=Commerzbank, 5=Sparkassen, 6=Genossenschaftsbanken / Volksbanken, 7=Postbank).\n- **Digits 5-8 (Internal Bank Number):** Specific banking institute.',
      keyTakeaways: ['8 digits format', 'Digit 1 indicates Bundesbank clearing region', 'Embedded into IBAN']
    },
    {
      id: 'de-sepa-clearing',
      heading: '2. German IBAN Structure & SEPA Clearing',
      content: 'A German IBAN contains exactly 22 alphanumeric characters:\n`DE` (Country Code) + 2 Check Digits + 8-Digit BLZ + 10-Digit Account Number.\n\nTransactions within Germany and the Eurozone are executed via **SEPA Credit Transfers (SCT)** settling in 1 business day, or **SEPA Instant Credit Transfers (SCT Inst)** clearing in less than 10 seconds 24/7.',
      keyTakeaways: ['22-character DE IBAN', 'SEPA Instant transfers in <10s']
    },
    {
      id: 'de-edb-insurance',
      heading: '3. Statutory Deposit Protection (Einlagensicherung EdB)',
      content: 'Under European Union directives, retail and corporate deposits in German banks are legally guaranteed by the **Entschädigungseinrichtung deutscher Banken (EdB)** up to **€100,000 per depositor per bank**.',
      keyTakeaways: ['€100,000 statutory deposit protection per depositor', 'BaFin & Bundesbank supervised']
    }
  ],
  faqs: [
    {
      question: 'Is the BLZ still used after the introduction of SEPA IBANs?',
      answer: 'Yes. The 8-digit BLZ forms characters 5 through 12 of every German IBAN and remains the foundational clearing identifier utilized by the Deutsche Bundesbank for interbank batch routing.'
    }
  ],
  quick_stats: [
    { label: 'Bank Identifier', value: '8-Digit Bankleitzahl (BLZ)' },
    { label: 'IBAN Length', value: '22 Characters (DE + 2 check + 8 BLZ + 10 Acc)' },
    { label: 'Instant Settlement', value: 'SEPA Instant Credit (<10 Seconds)' },
    { label: 'Deposit Protection', value: 'EdB €100,000 per depositor' }
  ]
};

// 8. UAE National Banking Guide
export const uaeNationalGuideArticle: BankArticle = {
  id: 'how-uae-banking-works',
  bank_id: 'ae-national-clearing',
  slug: 'how-uae-banking-works',
  country: 'ae',
  title: 'How UAE Banking Works: CBUAE Bank Codes, UAEFTS & Aani Instant Payments',
  title_bn: 'সংযুক্ত আরব আমিরাতের ব্যাংকিং ব্যবস্থা: CBUAE কোড, UAEFTS ও আনি পেমেন্ট গাইড',
  subtitle: 'A guide to Central Bank of the UAE (CBUAE) clearing, 23-character UAE IBANs, UAEFTS real-time settlements, and Aani instant mobile payment rails.',
  meta_title: 'How UAE Banking Works: CBUAE Clearing, IBAN & Aani Payments',
  meta_description: 'Complete guide to UAE interbank clearing: Central Bank of the UAE (CBUAE) 3-digit bank codes, 23-character IBAN format, UAEFTS fund transfers, and Aani instant payment network.',
  read_time: '6 min read',
  author: 'World Bank Codes Financial Editorial Team',
  published_date: '2026-03-01',
  last_updated: '2026-09-14',
  overview: 'The United Arab Emirates banking system is regulated by the Central Bank of the UAE (CBUAE). Domestic payments rely on 23-character UAE IBANs processed through the UAE Funds Transfer System (UAEFTS) and the Aani Instant Payments Platform.',
  sections: [
    {
      id: 'ae-iban-format',
      heading: '1. Structure of the 23-Character UAE IBAN',
      content: 'A UAE IBAN contains 23 characters:\n`AE` (Country Code) + 2 Check Digits + 3-Digit Bank Code + 16-Digit Account Number (e.g., `AE07 033 1234567890123456` for Emirates NBD).',
      keyTakeaways: ['23 characters length', 'AE + 2 check digits + 3 bank digits + 16 account digits']
    },
    {
      id: 'ae-payment-rails',
      heading: '2. UAE Clearing Rails: UAEFTS vs. Aani',
      content: '- **UAEFTS (UAE Funds Transfer System):** The core real-time gross settlement system operated by CBUAE for interbank transfers.\n- **Aani (Instant Payment Platform):** Regulated by Al Etihad Payments (AEP), enabling instant 24/7 transfers up to AED 50,000 using mobile phone numbers or email aliases.',
      keyTakeaways: ['UAEFTS for core interbank clearing', 'Aani for instant mobile transfers up to AED 50k']
    }
  ],
  faqs: [
    {
      question: 'Is an IBAN mandatory for all domestic transfers in the UAE?',
      answer: 'Yes. By CBUAE regulations, all domestic salary transfers (WPS), personal payments, and electronic settlements in the UAE require a valid 23-character IBAN.'
    }
  ],
  quick_stats: [
    { label: 'Primary Identifier', value: '23-Character UAE IBAN (AE...)' },
    { label: 'Clearing Engine', value: 'CBUAE UAEFTS' },
    { label: 'Instant Platform', value: 'Aani Instant Payments (AEP)' },
    { label: 'Central Regulator', value: 'Central Bank of the UAE (CBUAE)' }
  ]
};

// 9. Singapore National Banking Guide
export const singaporeNationalGuideArticle: BankArticle = {
  id: 'how-singapore-banking-works',
  bank_id: 'sg-national-clearing',
  slug: 'how-singapore-banking-works',
  country: 'sg',
  title: 'How Singapore Banking Works: Bank Codes, FAST, PayNow & MEPS+ Clearing',
  title_bn: 'সিঙ্গাপুরের ব্যাংকিং ব্যবস্থা: ব্যাংক কোড, FAST, পে-নাউ ও MEPS+ গাইড',
  subtitle: 'A technical guide to Monetary Authority of Singapore (MAS) clearing rails: 4-digit bank codes, FAST 24/7 instant settlement, PayNow, and SDIC deposit insurance.',
  meta_title: 'How Singapore Banking Works: Bank Codes, FAST, PayNow & MEPS+',
  meta_description: 'Guide to Singapore interbank clearing: 4-digit bank codes, 3-digit branch codes, FAST real-time transfers, PayNow proxy routing, MEPS+ wholesale RTGS, and SGD 100,000 SDIC protection.',
  read_time: '6 min read',
  author: 'World Bank Codes Financial Editorial Team',
  published_date: '2026-03-01',
  last_updated: '2026-09-14',
  overview: 'The Singapore financial hub, regulated by the Monetary Authority of Singapore (MAS), operates world-class electronic payment systems. Domestic fund transfers use a combination of 4-digit bank codes and 3-digit branch codes, accelerated by FAST and PayNow.',
  sections: [
    {
      id: 'sg-codes-format',
      heading: '1. Singapore Bank & Branch Code Structure',
      content: 'In Singapore, bank transfers identify the destination through:\n- **4-Digit Bank Code:** (e.g., 7171 for DBS/POSB, 7339 for OCBC, 7375 for UOB, 7214 for Citibank).\n- **3-Digit Branch Code:** Designates the specific operational branch.\n- **Account Number:** 7 to 10 numerical digits.',
      keyTakeaways: ['4-digit bank code + 3-digit branch code', 'MAS registered']
    },
    {
      id: 'sg-payment-rails',
      heading: '2. FAST, PayNow & MEPS+ Clearing Rails',
      content: '- **FAST (Fast And Secure Transfers):** 24/7 instant electronic funds transfer system for amounts up to SGD 200,000.\n- **PayNow:** Peer-to-peer overlay enabling funds routing via NRIC/FIN numbers, mobile numbers, or UEN corporate identifiers.\n- **MEPS+ (MAS Electronic Payment System):** Real-time gross settlement system for large-value interbank and sovereign bond settlements.',
      keyTakeaways: ['FAST for real-time up to SGD 200k', 'PayNow for NRIC/mobile proxy transfers', 'MEPS+ for wholesale']
    },
    {
      id: 'sg-sdic-insurance',
      heading: '3. Singapore Deposit Insurance Corporation (SDIC)',
      content: 'Deposits with full banks and finance companies are automatically protected by the **Singapore Deposit Insurance Corporation (SDIC)** up to **SGD $100,000 per depositor per Scheme member**.',
      keyTakeaways: ['SGD $100,000 statutory deposit coverage', 'Regulated under MAS framework']
    }
  ],
  faqs: [
    {
      question: 'Can I transfer funds between Singapore banks without knowing the branch code?',
      answer: 'When transferring via PayNow using a mobile number or NRIC, the system automatically resolves the destination bank and account without needing branch codes.'
    }
  ],
  quick_stats: [
    { label: 'Bank Identifier', value: '4-Digit Bank Code + 3-Digit Branch Code' },
    { label: 'Instant Rail', value: 'FAST & PayNow (24/7)' },
    { label: 'Wholesale Rail', value: 'MAS MEPS+ RTGS' },
    { label: 'Deposit Protection', value: 'SDIC SGD $100,000 per depositor' }
  ]
};

// 10. Malaysia National Banking Guide
export const malaysiaNationalGuideArticle: BankArticle = {
  id: 'how-malaysia-banking-works',
  bank_id: 'my-national-clearing',
  slug: 'how-malaysia-banking-works',
  country: 'my',
  title: 'How Malaysian Banking Works: Bank Codes, DuitNow, Interbank GIRO & RENTAS',
  title_bn: 'মালয়েশিয়ার ব্যাংকিং ব্যবস্থা: ব্যাংক কোড, DuitNow, ইন্টারব্যাংক গিরো ও RENTAS গাইড',
  subtitle: 'A technical guide to Bank Negara Malaysia (BNM) clearing: SWIFT bank routing, DuitNow instant 24/7 transfers, IBG batch cycles, and PIDM deposit protection.',
  meta_title: 'How Malaysian Banking Works: DuitNow, Interbank GIRO & RENTAS',
  meta_description: 'Complete guide to Malaysian banking clearing: PayNet infrastructure, DuitNow instant QR and account routing, Interbank GIRO (IBG), RENTAS RTGS, and RM250,000 PIDM deposit insurance.',
  read_time: '6 min read',
  author: 'World Bank Codes Financial Editorial Team',
  published_date: '2026-03-01',
  last_updated: '2026-09-14',
  overview: 'The Malaysian banking system is regulated by Bank Negara Malaysia (BNM) and operated by Payments Network Malaysia (PayNet). Payments move swiftly through DuitNow for real-time transactions, Interbank GIRO (IBG) for batch payments, and RENTAS for high-value wholesale clearing.',
  sections: [
    {
      id: 'my-payment-rails',
      heading: '1. Malaysian Payment Rails: DuitNow vs. IBG vs. RENTAS',
      content: '- **DuitNow (Instant Transfer):** Real-time fund transfer operating 24/7/365 with immediate funds crediting up to RM50,000 per transaction.\n- **Interbank GIRO (IBG):** Scheduled batch payment clearing for funds settling in multiple daily cutoff windows.\n- **RENTAS (Real-time Electronic Transfer of Funds and Securities):** Large-value RTGS clearing operated by BNM for wholesale market transactions.',
      keyTakeaways: ['DuitNow for 24/7 real-time transfers', 'IBG for batch settlement', 'RENTAS for wholesale RTGS']
    },
    {
      id: 'my-pidm-insurance',
      heading: '2. PIDM Deposit Protection',
      content: 'Eligible bank deposits in commercial and Islamic banks in Malaysia are protected by **Perbadanan Insurans Deposit Malaysia (PIDM)** up to **RM250,000 per depositor per member bank**.',
      keyTakeaways: ['RM250,000 statutory deposit insurance', 'Protects commercial and Islamic bank deposits']
    }
  ],
  faqs: [
    {
      question: 'What is a DuitNow ID in Malaysia?',
      answer: 'A DuitNow ID allows users to receive funds using their National Registration Identity Card (NRIC) number, passport number, mobile number, or business registration number without disclosing their bank account number.'
    }
  ],
  quick_stats: [
    { label: 'Instant Transfer Rail', value: 'DuitNow (24/7 Real-Time)' },
    { label: 'Batch Transfer Rail', value: 'Interbank GIRO (IBG)' },
    { label: 'Wholesale RTGS', value: 'BNM RENTAS' },
    { label: 'Deposit Protection', value: 'PIDM RM250,000 per depositor' }
  ]
};

// 11. Russia National Banking Guide
export const russiaNationalGuideArticle: BankArticle = {
  id: 'how-russia-banking-works',
  bank_id: 'ru-national-clearing',
  slug: 'how-russia-banking-works',
  country: 'ru',
  title: 'How Russian Banking Works: 9-Digit BIK (БИК), Correspondent Accounts & SBP',
  title_bn: 'রাশিয়ার ব্যাংকিং ব্যবস্থা: ৯-সংখ্যার BIK কোড, করেসপনডেন্ট একাউন্ট ও SBP গাইড',
  title_ru: 'Как устроена банковская система России: 9-значный БИК, корреспондентские счета и СБП',
  subtitle: 'A technical guide to Bank of Russia clearing: 9-digit BIK format (04XXXXYYY), 20-digit Correspondent Accounts (30101...), Faster Payments System (СБП), and DIA deposit insurance.',
  meta_title: 'How Russian Banking Works: 9-Digit BIK (БИК), Corr Accounts & SBP',
  meta_description: 'Complete guide to Russian interbank clearing: 9-digit BIK (БИК) structure, 20-digit Correspondent Accounts (30101), Faster Payments System (СБП), and 1.4 Million Rubles DIA deposit insurance.',
  read_time: '6 min read',
  author: 'World Bank Codes Financial Editorial Team',
  published_date: '2026-03-01',
  last_updated: '2026-09-14',
  overview: 'The Russian banking system is regulated by the Central Bank of the Russian Federation (Bank of Russia). Domestic interbank clearing relies on the 9-digit Bank Identification Code (BIK / БИК) and 20-digit Correspondent Accounts (Корреспондентский счет).',
  sections: [
    {
      id: 'ru-bik-structure',
      heading: '1. Structure of the 9-Digit Russian BIK (БИК)',
      content: 'A Russian BIK (Банковский идентификационный код) is a 9-digit number starting with `04`:\n\n- **Digits 1-2 (`04`):** Country code for the Russian Federation within the national clearing system.\n- **Digits 3-4 (Territorial Code):** Subject of the Russian Federation according to OKATO (e.g., `45` for Moscow City, `40` for Saint Petersburg, `75` for Chelyabinsk, `65` for Sverdlovsk).\n- **Digits 5-6 (Clearing Unit Code):** Cash settlement center (РКЦ) of the Bank of Russia.\n- **Digits 7-9 (Credit Institution Identifier):** Unique internal identifier matching the last 3 digits of the bank correspondent account.',
      keyTakeaways: ['9 digits starting with 04', 'Digits 3-4: Territorial region', 'Digits 7-9: Bank identifier']
    },
    {
      id: 'ru-corr-account',
      heading: '2. 20-Digit Correspondent Account (Корр. счет)',
      content: 'Every commercial bank maintains a 20-digit correspondent account with the Bank of Russia starting with `30101810...` (in RUB). The last 3 digits of the correspondent account always match the last 3 digits of the bank BIK.',
      keyTakeaways: ['20 digits starting with 30101', 'Last 3 digits match BIK']
    },
    {
      id: 'ru-sbp-and-dia',
      heading: '3. Faster Payments System (СБП) & Deposit Insurance (АСВ)',
      content: '- **Faster Payments System (СБП - Система быстрых платежей):** Instant 24/7 transfers by phone number operated by the Bank of Russia and NSPK.\n- **Deposit Insurance Agency (АСВ):** Statutory insurance covering retail deposits up to **1,400,000 Rubles (1.4M RUB)** per depositor per bank.',
      keyTakeaways: ['СБП 24/7 instant transfers by phone', 'АСВ 1.4M RUB statutory insurance']
    }
  ],
  faqs: [
    {
      question: 'Why do Russian bank transfers require both a BIK and a Correspondent Account?',
      answer: 'The BIK identifies the credit institution and its specific territorial clearing branch within the Bank of Russia network, while the Correspondent Account serves as the bank settlement balance ledger at the central bank.'
    }
  ],
  quick_stats: [
    { label: 'Bank Identifier', value: '9-Digit BIK (БИК - 04XXXXYYY)' },
    { label: 'Settlement Account', value: '20-Digit Correspondent Account (30101...)' },
    { label: 'Instant Rail', value: 'Faster Payments System (СБП)' },
    { label: 'Deposit Protection', value: 'DIA (АСВ) 1,400,000 RUB per depositor' }
  ]
};

// All 11 Shared Country Guide Articles
export const countrySharedGuideArticles: BankArticle[] = [
  usaNationalGuideArticle,
  ukNationalGuideArticle,
  indiaNationalGuideArticle,
  bdBangladeshNationalGuideArticle,
  canadaNationalGuideArticle,
  australiaNationalGuideArticle,
  germanyNationalGuideArticle,
  uaeNationalGuideArticle,
  singaporeNationalGuideArticle,
  malaysiaNationalGuideArticle,
  russiaNationalGuideArticle
];
