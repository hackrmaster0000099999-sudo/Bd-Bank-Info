import { BankArticle } from '../../types';
import banksData from './banks.json';

/**
 * Authoritative Editorial Knowledge Base & Comprehensive Guide for Malaysia Banks (Bank-Bank di Malaysia / 马来西亚银行机构)
 * Covers 2-Digit Bank Codes, 5-Digit IBG Routing Numbers, DuitNow 24/7 Instant Transfers,
 * RENTAS RTGS Large-Value Settlement, PIDM RM250,000 Deposit Insurance Protection, and SWIFT/BIC Codes.
 */

interface MalaysiaBankKnowledge {
  established: string;
  foundingStory: string;
  foundingStory_bn: string;
  foundingStory_ms?: string;
  category: string;
  category_bn: string;
  category_ms?: string;
  coreStrengths: string[];
  coreStrengths_bn: string[];
  coreStrengths_ms?: string[];
  bnmBankCode: string;
  clearingRoutingFormat: string;
  swiftHo: string;
  popularApp: string;
  customerCare: string;
  duitNowInstantLimit: string;
  pidmDepositProtection: string;
  duitNowSupport: string;
}

const MY_BANK_KNOWLEDGE: Record<string, MalaysiaBankKnowledge> = {
  'maybank-malaysia': {
    established: '1960 (Founded by business tycoon Khoo Teck Puat and Oei Tjong Ie)',
    foundingStory: 'Malayan Banking Berhad (Maybank) is the largest financial services group in Malaysia and the 4th largest bank in Southeast Asia by total assets (exceeding RM1 trillion). Headquartered at Menara Maybank in Kuala Lumpur, Maybank operates an extensive network of over 390 domestic branches, commanding the highest market share in retail deposits, auto financing, home mortgages, and online consumer banking via Maybank2u.',
    foundingStory_bn: 'মালায়ন ব্যাংকিং বারহাদ (মেব্যাংক) মোট সম্পদের দিক থেকে মালয়েশিয়ার সর্ববৃহৎ এবং দক্ষিণ-পূর্ব এশিয়ার চতুর্থ বৃহত্তম আর্থিক প্রতিষ্ঠান (যার সম্পদ ১ ট্রিলিয়ন রিঙ্গিত ছাড়িয়ে গেছে)। কুয়ালালামপুরের মেনারা মেব্যাংকে প্রধান কার্যালয় অবস্থিত এই ব্যাংকটির দেশব্যাপী ৩৯০টিরও বেশি শাখা রয়েছে এবং তাদের "Maybank2u" পোর্টাল মালয়েশিয়ার সবচেয়ে জনপ্রিয় অনলাইন ব্যাংকিং প্ল্যাটফর্ম।',
    foundingStory_ms: 'Malayan Banking Berhad (Maybank) adalah kumpulan perkhidmatan kewangan terbesar di Malaysia dan bank keempat terbesar di Asia Tenggara mengikut jumlah aset (melebihi RM1 trilion). Beribu pejabat di Menara Maybank di Kuala Lumpur, Maybank mengendalikan rangkaian luas lebih 390 cawangan domestik, memegang bahagian pasaran tertinggi dalam deposit runcit, pembiayaan kenderaan, gadai janji perumahan, dan perbankan digital melalui Maybank2u dan MAE.',
    category: 'Malaysia Flagship Domestic Universal Commercial Bank (BNM Code #01)',
    category_bn: 'মালয়েশিয়া জাতীয় ফ্ল্যাগশিপ ইউনিভার্সাল কমার্শিয়াল ব্যাংক (বিএনএম কোড #০১)',
    category_ms: 'Bank Komersial Universal Utama Malaysia (Kod BNM #01)',
    coreStrengths: [
      'Largest branch and ATM network covering all states and federal territories in Malaysia',
      'Pioneer of Maybank2u and MAE mobile banking ecosystem serving over 12 million active digital users',
      'Comprehensive Islamic banking division (Maybank Islamic is the largest Islamic lender in ASEAN)',
      'Direct cross-border real-time remittances across Singapore, Indonesia, Philippines, and Cambodia'
    ],
    coreStrengths_bn: [
      'মালয়েশিয়ার প্রতিটি রাজ্য ও ফেডারেল টেরিটোরিতে সর্ববৃহৎ শাখা ও এটিএম নেটওয়ার্ক',
      'মালয়েশিয়ার শীর্ষ ডিজিটাল ব্যাংকিং MAE এবং Maybank2u অ্যাপ (১ কোটি ২০ লাখেরও বেশি সক্রিয় ব্যবহারকারী)',
      'আশিয়ানের (ASEAN) সর্ববৃহৎ ইসলামিক ব্যাংকিং শাখা মেব্যাংক ইসলামিক (Maybank Islamic)',
      'সিঙ্গাপুর, ইন্দোনেশিয়া ও ফিলিপাইনে তাৎক্ষণিক আন্তর্জাতিক রেমিট্যান্স সুবিধা'
    ],
    coreStrengths_ms: [
      'Rangkaian cawangan dan ATM terbesar meliputi semua negeri dan wilayah persekutuan di Malaysia',
      'Peneraju ekosistem perbankan digital Maybank2u dan MAE dengan lebih 12 juta pengguna aktif',
      'Bahagian perbankan Islam komprehensif (Maybank Islamic adalah pembiaya Islamik terbesar di ASEAN)',
      'Kiriman wang rentas sempadan masa nyata terus merentasi Singapura, Indonesia, Filipina, dan Kemboja'
    ],
    bnmBankCode: '01',
    clearingRoutingFormat: '01001 (Kuala Lumpur Main Head Office)',
    swiftHo: 'MBBEMYKL',
    popularApp: 'MAE by Maybank2u',
    customerCare: '1-300 88 6688 / +60 3-7844 3696 (24/7 Hotline)',
    duitNowInstantLimit: 'Up to RM50,000 per instant transaction (24/7/365 DuitNow)',
    pidmDepositProtection: 'Insured up to RM250,000 per depositor by PIDM',
    duitNowSupport: 'Full DuitNow Transfer (Mobile, NRIC, Passport, Account & DuitNow QR)'
  },
  'cimb-bank-malaysia': {
    established: '1924 (Origins trace back to Bian Chiang Bank in Kuching, Sarawak)',
    foundingStory: 'CIMB Bank Berhad is Malaysia’s second-largest financial services provider and one of ASEAN’s leading universal banking groups. Headquartered at Menara CIMB in KL Sentral, CIMB provides retail banking, commercial lending, investment banking, and Islamic finance across Malaysia, Indonesia (CIMB Niaga), Singapore, Thailand, and Cambodia.',
    foundingStory_bn: 'সিআইএমবি ব্যাংক বারহাদ মালয়েশিয়ার দ্বিতীয় বৃহত্তম আর্থিক গ্রুপ এবং দক্ষিণ-পূর্ব এশিয়ার অন্যতম প্রভাবশালী ইউনিভার্সাল ব্যাংক। কেএল সেন্ট্রালের মেনারা সিআইএমবি-তে অবস্থিত প্রতিষ্ঠানটির দেশব্যাপী ২৮০টির বেশি শাখা রয়েছে এবং এটি মালয়েশিয়া ছাড়াও ইন্দোনেশিয়া (সিআইএমবি নিয়াগা), সিঙ্গাপুর ও থাইল্যান্ডে সফল ব্যাংকিং পরিচালনা করছে।',
    foundingStory_ms: 'CIMB Bank Berhad adalah penyedia perkhidmatan kewangan kedua terbesar di Malaysia dan salah satu kumpulan perbankan universal terkemuka di ASEAN. Beribu pejabat di Menara CIMB di KL Sentral, CIMB menyediakan perbankan runcit, pinjaman komersial, perbankan pelaburan, dan kewangan Islam merentasi Malaysia, Indonesia (CIMB Niaga), Singapura, Thailand, dan Kemboja.',
    category: 'Malaysia Leading Universal Commercial Bank (BNM Code #02)',
    category_bn: 'মালয়েশিয়ার শীর্ষস্থানীয় ইউনিভার্সাল বাণিজ্যিক ব্যাংক (বিএনএম কোড #০২)',
    category_ms: 'Bank Komersial Universal Terkemuka Malaysia (Kod BNM #02)',
    coreStrengths: [
      'Extensive regional footprint across ASEAN with synchronized multi-currency accounts',
      'CIMB OCTO and CIMB Clicks digital banking platforms with biometrics and secure approval',
      'Industry-leading foreign exchange, trade financing, and SME business advisory',
      'Robust corporate investment franchise and award-winning Islamic banking'
    ],
    coreStrengths_bn: [
      'আশিয়ান অঞ্চলজুড়ে বিস্তৃত নেটওয়ার্ক ও মাল্টি-কারেন্সি অ্যাকাউন্ট সুবিধা',
      'CIMB OCTO এবং CIMB Clicks ডিজিটাল মোবাইল প্ল্যাটফর্ম',
      'বৈদেশিক বাণিজ্য, এসএমই বিজনেস লোন এবং নির্ভরযোগ্য আন্তর্জাতিক রেমিট্যান্স চ্যানেল',
      'পুরস্কারপ্রাপ্ত ইসলামিক ব্যাংকিং ও ইনভেস্টমেন্ট ব্যাংকিং সক্ষমতা'
    ],
    coreStrengths_ms: [
      'Jejak serantau luas di ASEAN dengan akaun pelbagai mata wang bersepadu',
      'Platform perbankan digital CIMB OCTO dan CIMB Clicks dengan biometrik dan kelulusan selamat',
      'Peneraju pasaran pertukaran mata wang asing, pembiayaan perdagangan, dan khidmat nasihat PKS',
      'Francais pelaburan korporat kukuh dan perbankan Islam bertaraf antarabangsa'
    ],
    bnmBankCode: '02',
    clearingRoutingFormat: '02001 (KL Sentral Head Office)',
    swiftHo: 'CIBBMYKL',
    popularApp: 'CIMB OCTO App',
    customerCare: '+60 3-6204 7788 (24/7 Customer Support)',
    duitNowInstantLimit: 'Up to RM50,000 per transaction (24/7 DuitNow)',
    pidmDepositProtection: 'Insured up to RM250,000 per depositor by PIDM',
    duitNowSupport: 'Full DuitNow Transfer & DuitNow QR Merchant Acquiring'
  },
  'public-bank-malaysia': {
    established: '1966 (Founded by the legendary banking pioneer Tan Sri Dato Sri Dr. Teh Hong Piow)',
    foundingStory: 'Public Bank Berhad is renowned as Malaysia’s most prudently managed and consistently profitable commercial bank, with the lowest non-performing loan (NPL) ratio in the national banking sector. Headquartered at Menara Public Bank on Jalan Ampang, Public Bank serves millions of retail customers, Chinese business communities, and SMEs with unparalleled branch customer service.',
    foundingStory_bn: 'কিংবদন্তী ব্যাংকার তান শ্রী তেহ হং পিও কর্তৃক ১৯৬৬ সালে প্রতিষ্ঠিত পাবলিক ব্যাংক মালয়েশিয়ার সবচেয়ে সুপরিচালিত, লাভজনক এবং সুশৃঙ্খল বাণিজ্যিক ব্যাংক। জালান আম্পাংয়ে অবস্থিত প্রধান কার্যালয় সহ ব্যাংকটির ২৯০টিরও বেশি শাখা রয়েছে এবং এটি খুচরা আমানতকারী ও ক্ষুদ্র-মাঝারি শিল্পের (SME) সবচেয়ে বিশ্বস্ত প্রতিষ্ঠান।',
    foundingStory_ms: 'Public Bank Berhad terkenal sebagai bank komersial yang diuruskan dengan paling berhemat dan mencatatkan keuntungan konsisten di Malaysia, dengan nisbah pinjaman tidak berbayar (NPL) terendah dalam industri perbankan negara. Beribu pejabat di Menara Public Bank di Jalan Ampang, Public Bank melayani berjuta-juta pelanggan runcit dan PKS dengan perkhidmatan cawangan yang cemerlang.',
    category: 'Premier Retail & SME Commercial Bank (BNM Code #03)',
    category_bn: 'শীর্ষ রিটেইল ও এসএমই বাণিজ্যিক ব্যাংক (বিএনএম কোড #০৩)',
    category_ms: 'Bank Komersial Runcit & PKS Utama (Kod BNM #03)',
    coreStrengths: [
      'Unrivalled asset quality, exemplary balance-sheet health, and highest loan repayment discipline',
      'Market leader in domestic commercial vehicle hire purchase and residential mortgages',
      'MyPB and PBe Online banking channels with stringent transaction security',
      'Deep trust among Malaysian SME business owners and property buyers'
    ],
    coreStrengths_bn: [
      'ব্যাংকিং খাতে সর্বনিম্ন খেলাপি ঋণ ও সবচেয়ে সুদৃঢ় ব্যালান্স শিট',
      'গাড়ি ক্রয় ঋণ (Hire Purchase) এবং আবাসন হোম লোনে মালয়েশিয়ার শীর্ষ মার্কেট শেয়ার',
      'মাই-পিবি (MyPB) মোবাইল অ্যাপ এবং নিরাপদ পিবিই (PBe) নেট ব্যাংকিং',
      'মালয়েশিয়ান ব্যবসায়ী ও সাধারণ আমানতকারীদের অবিচল আস্থা'
    ],
    coreStrengths_ms: [
      'Kualiti aset tiada tandingan, kesihatan kunci kira-kira teladan, dan disiplin pembayaran pinjaman tertinggi',
      'Peneraju pasaran sewa beli kenderaan komersial domestik dan gadai janji kediaman',
      'Saluran perbankan dalam talian MyPB dan PBe dengan keselamatan transaksi yang teguh',
      'Kepercayaan mendalam dalam kalangan pemilik perniagaan PKS dan pembeli hartanah Malaysia'
    ],
    bnmBankCode: '03',
    clearingRoutingFormat: '03001 (Menara Public Bank HO)',
    swiftHo: 'PBBEMYKL',
    popularApp: 'MyPB by Public Bank',
    customerCare: '+60 3-2176 6000 (Customer Service Helpline)',
    duitNowInstantLimit: 'Up to RM50,000 per instant transaction',
    pidmDepositProtection: 'Insured up to RM250,000 per depositor by PIDM',
    duitNowSupport: 'Full DuitNow Instant Transfer & DuitNow QR'
  },
  'rhb-bank-malaysia': {
    established: '1994 (Merger of Rashid Hussain Berhad, Kwong Yik Bank 1913, and DCB Bank)',
    foundingStory: 'RHB Bank Berhad is the fourth largest banking group in Malaysia by assets, formed through landmark mergers including Kwong Yik Bank (established in 1913 as the first local bank in the Federated Malay States). Headquartered at RHB Centre on Jalan Tun Razak, RHB provides retail banking, treasury, Islamic solutions, and corporate advisory across Malaysia and Southeast Asia.',
    foundingStory_bn: '১৯৯৪ সালে কোয়ং ইক ব্যাংক (১৯১৩) ও ডিসিবি ব্যাংকের ঐতিহাসিক সমন্বয়ে গঠিত আরএইচবি ব্যাংক মালয়েশিয়ার চতুর্থ বৃহত্তম ব্যাংকিং গ্রুপ। কুয়ালালামপুরের জালান তুন রাজাকে অবস্থিত আরএইচবি সেন্টারের অধীনে ব্যাংকটির ২২০টিরও বেশি দেশব্যাপী শাখা রয়েছে।',
    category: 'Full-Service Commercial Bank (BNM Code #04)',
    category_bn: 'ফুল-সার্ভিস বাণিজ্যিক ব্যাংকিং গ্রুপ (বিএনএম কোড #০৪)',
    coreStrengths: [
      'Extensive retail banking presence in urban hubs and rural administrative centers',
      'RHB Mobile Banking App featuring innovative cardless cash withdrawals and FX currency wallets',
      'Robust SME e-financing portals enabling quick digital business approvals',
      'Dynamic Islamic banking arm (RHB Islamic Bank)'
    ],
    coreStrengths_bn: [
      'শহর ও গ্রামীণ কেন্দ্রজুড়ে বিস্তৃত ২২০টির বেশি আধুনিক ব্যাংকিং শাখা',
      'কার্ডহীন ক্যাশ উত্তোলন ও ফরেন কারেন্সি মাল্টি-ওয়ালেট সমৃদ্ধ RHB মোবাইল অ্যাপ',
      'ক্ষুদ্র উদ্যোক্তাদের জন্য দ্রুত ই-ফাইন্যান্সিং ও ডিজিটাল লোন অনুমোদন',
      'আরএইচবি ইসলামিক ব্যাংকের শক্তিশালী শরিয়াহ সম্মত পণ্যসম্ভার'
    ],
    bnmBankCode: '04',
    clearingRoutingFormat: '04001 (RHB Centre Jalan Tun Razak)',
    swiftHo: 'RHBBMYKL',
    popularApp: 'RHB Mobile Banking',
    customerCare: '+60 3-9206 8118 (24/7 RHB Customer Contact Centre)',
    duitNowInstantLimit: 'Up to RM50,000 per transaction',
    pidmDepositProtection: 'Insured up to RM250,000 per depositor by PIDM',
    duitNowSupport: 'Full DuitNow Transfer & DuitNow QR'
  },
  'hong-leong-bank-malaysia': {
    established: '1905 (Originally established as Kwong Lee Mortgage and Remittance Company in Kuching)',
    foundingStory: 'Hong Leong Bank Berhad is a leading financial institution backed by the storied Hong Leong Group conglomerate. Headquartered at Bukit Damansara in Kuala Lumpur, the bank solidified its position after merging with EON Bank in 2011, establishing a powerful retail, wealth, and commercial network of 250 branches nationwide.',
    foundingStory_bn: 'হং লিওং ব্যাংক ১৯০৫ সালে সারাওয়াকের কুচিংয়ে প্রতিষ্ঠিত হয়। পরবর্তীতে হং লিওং গ্রুপের নেতৃত্বে এবং ২০১১ সালে ইওন ব্যাংকের (EON Bank) সাথে একীভূতকরণের মাধ্যমে এটি মালয়েশিয়ার অন্যতম শীর্ষ রিটেইল ব্যাংকে রূপান্তরিত হয়। ২৫০টি শাখার সমন্বয়ে এটি প্রযুক্তিভিত্তিক ব্যাংকিংয়ে অগ্রণী ভূমিকা পালন করছে।',
    category: 'Technology-Driven Commercial Bank (BNM Code #05)',
    category_bn: 'প্রযুক্তিভিত্তিক বাণিজ্যিক ব্যাংক (বিএনএম কোড #০৫)',
    coreStrengths: [
      'Pioneer in digital-first banking and digital wealth management via HLB Connect',
      'First Malaysian bank to roll out facial recognition biometric authentication for mobile transactions',
      'Exceptional customer loyalty in small business trade and commercial loans',
      'Insured deposits up to RM250,000 under PIDM'
    ],
    coreStrengths_bn: [
      'এইচএলবি কানেক্ট (HLB Connect) অ্যাপের মাধ্যমে অগ্রণী ডিজিটাল ব্যাংকিং সেবা',
      'মালয়েশিয়ায় প্রথম মোবাইল ট্রানজেকশনে ফেসিয়াল রিকগনিশন বায়োমেট্রিক নিরাপত্তা চালু',
      'এসএমই ও কর্পোরেট বাণিজ্যে উচ্চমানের কাস্টমার সার্ভিস ও দ্রুত ক্লিয়ারিং',
      'পিআইডিএমের আওতায় আড়াই লাখ রিঙ্গিত পর্যন্ত সরকারি আমানত সুরক্ষা'
    ],
    bnmBankCode: '05',
    clearingRoutingFormat: '05001 (Bukit Damansara Menara Hong Leong)',
    swiftHo: 'HLBBMYKL',
    popularApp: 'HLB Connect Mobile',
    customerCare: '+60 3-7626 8899 (HLB Contact Centre)',
    duitNowInstantLimit: 'Up to RM50,000 per transaction',
    pidmDepositProtection: 'Insured up to RM250,000 per depositor by PIDM',
    duitNowSupport: 'Full DuitNow Real-Time Transfer & QR'
  },
  'ambank-malaysia': {
    established: '1975 (Founded as Arab-Malaysian Development Bank by Hussain Najadi)',
    foundingStory: 'AmBank (M) Berhad (part of AMMB Holdings Berhad) is the 6th largest banking institution in Malaysia. Located at Menara AmBank on Jalan Yap Kwan Seng, AmBank provides comprehensive retail, business, investment banking, and life insurance solutions, serving over 3 million retail customers.',
    foundingStory_bn: '১৯৭৫ সালে আরব-মালয়েশিয়ান ডেভেলপমেন্ট ব্যাংক হিসেবে যাত্রা শুরু করা অ্যামব্যাংক মালয়েশিয়ার অন্যতম শীর্ষ ব্যাংকিং গ্রুপ। মেনারা অ্যামব্যাংকে সদর দপ্তর অবস্থিত এই ব্যাংকের দেশজুড়ে ১৮০টি শাখা রয়েছে এবং অটোমোবাইল ফাইন্যান্সিংয়ে এর ব্যাপক পরিচিতি রয়েছে।',
    category: 'Commercial & Retail Banking Powerhouse (BNM Code #06)',
    category_bn: 'বাণিজ্যিক ও রিটেইল ব্যাংকিং প্রতিষ্ঠান (বিএনএম কোড #০৬)',
    coreStrengths: [
      'Major domestic provider of car loans, personal lines of credit, and merchant acquiring',
      'AmOnline mobile application with seamless DuitNow and e-fixed deposit placement',
      'Strategic partnership history with Australia & New Zealand Banking Group (ANZ)',
      'Robust corporate treasury and FX desk'
    ],
    coreStrengths_bn: [
      'গাড়ি ঋণ, পার্সোনাল ক্রেডিট এবং কার্ড পেমেন্টে নির্ভরযোগ্য সেবা',
      'অ্যাম-অনলাইন (AmOnline) মোবাইল ব্যাংকিং ও ই-ফিক্সড ডিপোজিট সুবিধা',
      'আন্তর্জাতিক এএনজেড (ANZ) ব্যাংকের সাথে সমন্বিত কৌশলগত ব্যাংকিং মান',
      'করপোরেট ট্রেজারি ও ফরেক্স কারেন্সি কনভার্সনে দ্রুত সার্ভিস'
    ],
    bnmBankCode: '06',
    clearingRoutingFormat: '06001 (Menara AmBank Jalan Yap Kwan Seng)',
    swiftHo: 'ARBKMYKL',
    popularApp: 'AmOnline App',
    customerCare: '+60 3-2178 8888 (AmBank Contact Centre)',
    duitNowInstantLimit: 'Up to RM50,000 per instant transfer',
    pidmDepositProtection: 'Insured up to RM250,000 per depositor by PIDM',
    duitNowSupport: 'Full DuitNow Instant Transfers & QR Payments'
  },
  'bank-islam-malaysia': {
    established: '1983 (Established as the first Islamic bank in Malaysia and Southeast Asia)',
    foundingStory: 'Bank Islam Malaysia Berhad is the pioneer and vanguard of Islamic banking in Southeast Asia. Operating under the Islamic Financial Services Act (IFSA 2013), Bank Islam offers 100% Shariah-compliant retail, commercial, and investment banking with 150 branches across all Malaysian states.',
    foundingStory_bn: '১৯৮৩ সালে মালয়েশিয়া ও দক্ষিণ-পূর্ব এশিয়ার প্রথম পূর্ণাঙ্গ শরিয়াহভিত্তিক ব্যাংক হিসেবে ব্যাংক ইসলাম প্রতিষ্ঠিত হয়। ব্যাংকটি শতভাগ সুদবিহীন ইসলামিক অর্থনীতি, তাকাফুল ও হালাল বিনিয়োগের পথপ্রদর্শক হিসেবে পরিচিত এবং এর ১৫০টি শাখা রয়েছে।',
    category: 'Pioneer Islamic Full Commercial Bank (BNM Code #07)',
    category_bn: 'দক্ষিণ-পূর্ব এশিয়ার প্রথম ইসলামিক ব্যাংক (বিএনএম কোড #০৭)',
    coreStrengths: [
      'Authentic 100% Shariah-governed banking principles across all products',
      'GO by Bank Islam mobile banking app with instant Tabung Haji linked transfers',
      'Leadership in green and socially responsible Islamic Sukuk investment',
      'Insured up to RM250,000 under Islamic deposit protection by PIDM'
    ],
    coreStrengths_bn: [
      'শতভাগ শরিয়াহ সম্মত প্রডাক্ট ও হালাল বিনিয়োগ কাঠামো',
      'গো বাই ব্যাংক ইসলাম (GO by Bank Islam) অ্যাপ ও তাবং হাজি লিঙ্কড ফান্ড ট্রান্সফার',
      'গ্রিন ও সোশ্যাল ইসলামিক সুকুক (Sukuk) বন্ডে শীর্ষস্থান',
      'পিআইডিএমের আওতায় ২,৫০,০০০ রিঙ্গিত পর্যন্ত পৃথক ইসলামিক আমানত সুরক্ষা'
    ],
    bnmBankCode: '07',
    clearingRoutingFormat: '07001 (Menara Bank Islam Jalan Perak)',
    swiftHo: 'BIMBMYKL',
    popularApp: 'GO by Bank Islam',
    customerCare: '+60 3-26 900 900 (Bank Islam Contact Centre)',
    duitNowInstantLimit: 'Up to RM50,000 per instant transaction',
    pidmDepositProtection: 'Insured up to RM250,000 per depositor by PIDM (Islamic window)',
    duitNowSupport: 'Full DuitNow Transfer & DuitNow QR'
  },
  'bsn-malaysia': {
    established: '1974 (Formed to take over the Post Office Savings Bank established in 1877)',
    foundingStory: 'Bank Simpanan Nasional (BSN) is Malaysia’s state-owned national savings bank under the Ministry of Finance. Tasked with financial inclusion, BSN serves over 9 million Malaysians through 390 branches and thousands of Ejen Bank BSN (registered banking agents) in rural and urban communities.',
    foundingStory_bn: '১৮৭৭ সালের পোস্ট অফিস সেভিংস ব্যাংকের উত্তরাধিকার সূত্রে ১৯৭৪ সালে অর্থ মন্ত্রণালয়ের অধীনে ব্যাংক সিম্পানান ন্যাশনাল (BSN) প্রতিষ্ঠিত হয়। মালয়েশিয়ার প্রতিটি প্রান্তে ৯ মিলিয়নেরও বেশি নাগরিককে আর্থিক অন্তর্ভুক্তির আওতায় আনতে বিএসএন ৩৯০টি শাখা ও কয়েক হাজার এজেন্ট ব্যাংকিং পয়েন্ট পরিচালনা করছে।',
    category: 'National Statutory Savings Bank (BNM Code #15)',
    category_bn: 'মালয়েশিয়া জাতীয় রাষ্ট্রায়ত্ত সেভিংস ব্যাংক (বিএনএম কোড #১৫)',
    coreStrengths: [
      'Unmatched geographic penetration extending into every district and sub-district',
      'BSN Premium Savings Certificate (Sijil Simpanan Premium / SSP) prize savings schemes',
      'myBSN internet banking with DuitNow and federal aid disbursement (STR/BKM)',
      'Government-backed financial security and PIDM insured deposits'
    ],
    coreStrengths_bn: [
      'মালয়েশিয়ার প্রত্যন্ত অঞ্চলে সবচেয়ে বিস্তৃত ব্যাংকিং অবকাঠামো ও এজেন্ট নেটওয়ার্ক',
      'বিএসএন প্রিমিয়াম সেভিংস সার্টিফিকেট (SSP) স্কিম',
      'মাই-বিএসএন (myBSN) ইন্টারনেট ব্যাংকিং ও সরকারি ভাতা বিতরণ চ্যানেল',
      'সরকারি মালিকানা ও পিআইডিএম আমানত সুরক্ষা'
    ],
    bnmBankCode: '15',
    clearingRoutingFormat: '15001 (Wisma BSN Jalan Ampang)',
    swiftHo: 'BSNMMYKL',
    popularApp: 'myBSN Mobile',
    customerCare: '1300 88 1900 / +60 3-2613 1900',
    duitNowInstantLimit: 'Up to RM50,000 per instant transaction',
    pidmDepositProtection: 'Government-backed & Insured up to RM250,000 by PIDM',
    duitNowSupport: 'Full DuitNow 24/7 Transfers'
  }
};

export const malaysiaBanksArticles: BankArticle[] = (banksData as Array<{
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
  const custom = MY_BANK_KNOWLEDGE[bank.id] || {
    established: bank.established || 'Operating in Malaysia',
    foundingStory: `${bank.name} is a licensed banking institution operating under the prudential regulatory oversight of Bank Negara Malaysia (BNM). Headquartered at ${bank.head_office || 'Kuala Lumpur, Malaysia'}, it provides comprehensive retail and commercial banking, DuitNow instant transfers, Interbank GIRO (IBG), and international SWIFT remittances.`,
    foundingStory_bn: `${bank.name_bn || bank.name} মালয়েশিয়ার কেন্দ্রীয় ব্যাংক 'ব্যাংক নেগারা মালয়েশিয়া' (BNM) দ্বারা লাইসেন্সপ্রাপ্ত ও নিয়ন্ত্রিত একটি স্বনামধন্য আর্থিক প্রতিষ্ঠান। এর প্রধান কার্যালয় ${bank.head_office_bn || bank.head_office || 'কুয়ালালামপুরে'} অবস্থিত এবং এটি অভ্যন্তরীণ DuitNow, IBG ও আন্তর্জাতিক সুইফট রেমিট্যান্স সেবা দিয়ে থাকে।`,
    foundingStory_ms: `${bank.name} adalah institusi perbankan berlesen yang beroperasi di bawah pengawasan ketat Bank Negara Malaysia (BNM). Beribu pejabat di ${bank.head_office || 'Kuala Lumpur, Malaysia'}, ia menyediakan perkhidmatan perbankan runcit dan komersial yang menyeluruh, pindahan segera DuitNow, Interbank GIRO (IBG), dan kiriman wang SWIFT antarabangsa.`,
    category: `Malaysian Licensed Financial Institution (BNM Code #${bank.bank_code})`,
    category_bn: `মালয়েশিয়ান ব্যাংকিং প্রতিষ্ঠান (বিএনএম কোড #${bank.bank_code})`,
    category_ms: `Institusi Perbankan Berlesen Malaysia (Kod BNM #${bank.bank_code})`,
    coreStrengths: [
      `Official 2-digit Bank Negara Malaysia clearing code: ${bank.bank_code}`,
      `Real-time payments via DuitNow, Interbank GIRO (IBG), and SWIFT (${bank.swift_code || 'Available'})`,
      'Eligible customer deposits insured up to RM250,000 by Perbadanan Insurans Deposit Malaysia (PIDM)',
      'Digital banking onboarding supported with Malaysian NRIC and MyKad verification'
    ],
    coreStrengths_bn: [
      `ব্যাংক নেগারা মালয়েশিয়ার ২-সংখ্যার অফিশিয়াল ব্যাংক কোড: ${bank.bank_code}`,
      `DuitNow, IBG এবং আন্তর্জাতিক সুইফট (${bank.swift_code || 'বিদ্যমান'}) ট্রান্সফার সুবিধা`,
      'পেরবাদানান ইন্সুরান ডিপোজিট মালয়েশিয়া (PIDM) দ্বারা প্রতি আমানতকারীকে সর্বোচ্চ ২,৫০,০০০ রিঙ্গিত পর্যন্ত আমানত বীমা',
      'মালয়েশিয়ান মাইকাড (MyKad) ও পাসপোর্টের মাধ্যমে দ্রুত ও নিরাপদ ডিজিটাল অ্যাকাউন্ট সেবা'
    ],
    coreStrengths_ms: [
      `Kod bank penjelasan 2 digit rasmi Bank Negara Malaysia: ${bank.bank_code}`,
      `Pembayaran masa nyata melalui DuitNow, Interbank GIRO (IBG), dan SWIFT (${bank.swift_code || 'Tersedia'})`,
      'Deposit pelanggan yang layak diinsuranskan sehingga RM250,000 oleh Perbadanan Insurans Deposit Malaysia (PIDM)',
      'Pembukaan akaun perbankan digital disokong dengan pengesahan MyKad dan pasport'
    ],
    bnmBankCode: bank.bank_code,
    clearingRoutingFormat: `${bank.bank_code}001`,
    swiftHo: bank.swift_code || 'Available',
    popularApp: `${bank.name} Mobile Banking`,
    customerCare: '+60 3-2000 0000',
    duitNowInstantLimit: 'Up to RM50,000 per instant transaction',
    pidmDepositProtection: 'Insured up to RM250,000 per depositor by PIDM',
    duitNowSupport: 'Full DuitNow Support (Mobile, NRIC, Account & QR)'
  };

  const articleTitle = `${bank.name}: Bank Code, 5-Digit IBG Routing Number, DuitNow & SWIFT Transfer Guide (2026)`;
  const articleTitle_bn = `${bank.name_bn || bank.name}: ব্যাংক কোড, ৫-ডিজিটের IBG রাউটিং নম্বর, DuitNow ও সুইফট কোড নির্দেশিকা (২০২৬)`;
  const articleTitle_ms = `${bank.name}: Kod Bank, Nombor Penghalaan IBG 5 Digit, Panduan DuitNow & SWIFT (2026)`;

  const overview = `Complete guide for ${bank.name} in Malaysia (BNM Bank Code: ${bank.bank_code}). Learn how to find your 5-digit IBG branch routing number (${custom.clearingRoutingFormat}), perform 24/7 instant DuitNow transfers, receive overseas SWIFT telegraphic transfers (${custom.swiftHo}), and explore PIDM RM250,000 deposit protection.`;
  const overview_bn = `${bank.name_bn || bank.name}-এর সম্পূর্ণ ব্যাংকিং নির্দেশিকা (ব্যাংক নেগারা মালয়েশিয়া কোড: ${bank.bank_code})। ৫-সংখ্যার IBG ক্লিয়ারিং রাউটিং নম্বর (${custom.clearingRoutingFormat}), ২৪/৭ ডুইটনাউ (DuitNow) তাৎক্ষণিক টাকা ট্রান্সফার, আন্তর্জাতিক সুইফট ওয়্যার রেমিট্যান্স (${custom.swiftHo}) এবং পিআইডিএম (PIDM) ২,৫০,০০০ রিঙ্গিতের সরকারি আমানত সুরক্ষার নিয়মাবলি।`;
  const overview_ms = `Panduan komprehensif untuk ${bank.name} di Malaysia (Kod Bank BNM: ${bank.bank_code}). Ketahui cara mencari nombor penghalaan cawangan IBG 5 digit anda (${custom.clearingRoutingFormat}), membuat pindahan segera DuitNow 24/7, menerima pindahan kawat telegrafik SWIFT luar negara (${custom.swiftHo}), dan perlindungan deposit kerajaan PIDM sehingga RM250,000.`;

  const sections = [
    {
      id: 'heritage-overview',
      heading: '1. Institution Profile, Founding Heritage & BNM Regulation',
      heading_bn: '১. ব্যাংকের পরিচিতি, ঐতিহাসিক পটভূমি ও ব্যাংক নেগারা (BNM) নিয়ন্ত্রণ',
      heading_ms: '1. Profil Institusi, Sejarah Penubuhan & Kawal Selia BNM',
      content: `${custom.foundingStory}

As an authorized commercial institution licensed under the Financial Services Act (FSA 2013) or Islamic Financial Services Act (IFSA 2013), ${bank.name} adheres to the rigorous statutory liquidity and capital adequacy guidelines established by Bank Negara Malaysia. It operates under clearing code **${bank.bank_code}** across the national payment infrastructure.`,
      content_bn: `${custom.foundingStory_bn}

ফাইন্যান্সিয়াল সার্ভিসেস অ্যাক্ট ২০১৩-এর অধীনে লাইসেন্সপ্রাপ্ত প্রতিষ্ঠান হিসেবে ${bank.name_bn || bank.name} ব্যাংক নেগারা মালয়েশিয়ার কঠোর আর্থিক নিয়মাবলি মেনে কার্যক্রম পরিচালনা করে। দেশটির জাতীয় আন্তঃব্যাংক ক্লিয়ারিং নেটওয়ার্কে এর নির্ধারিত ব্যাংক কোড হলো **${bank.bank_code}**।`,
      content_ms: `${custom.foundingStory_ms || custom.foundingStory}

Sebagai sebuah institusi perbankan berlesen di bawah Akta Perkhidmatan Kewangan (FSA 2013) atau Akta Perkhidmatan Kewangan Islam (IFSA 2013), ${bank.name} mematuhi garis panduan kecukupan modal dan kecairan statutori yang ketat oleh Bank Negara Malaysia (BNM). Bank ini beroperasi di bawah kod penjelasan **${bank.bank_code}** dalam infrastruktur pembayaran kebangsaan Malaysia.`
    },
    {
      id: 'clearing-format',
      heading: '2. 2-Digit Bank Code & 5-Digit IBG Clearing Routing Structure',
      heading_bn: '২. ২-ডিজিটের ব্যাংক কোড ও ৫-ডিজিটের IBG রাউটিং কোডের গঠন',
      heading_ms: '2. Kod Bank 2 Digit & Struktur Penghalaan Penjelasan IBG 5 Digit',
      content: `In Malaysia, domestic funds routing relies on standard clearing formats:

- **Bank Code (${bank.bank_code})**: The unique 2-digit numeric identifier assigned by BNM and PayNet identifying ${bank.name}.
- **Branch Code (3 Digits)**: A 3-digit code specifying the exact branch location (e.g., 001 for the Kuala Lumpur Main Branch).
- **5-Digit IBG Routing Number**: Combining the 2-digit bank code and 3-digit branch code creates the 5-digit Interbank GIRO routing number (e.g., **${custom.clearingRoutingFormat}**).

When initiating scheduled payroll transfers or vendor payments through Malaysian online banking portals, providing the correct 5-digit routing number guarantees accurate settlement within 1-2 business days.`,
      content_bn: `মালয়েশিয়ায় অভ্যন্তরীণ আন্তঃব্যাংক লেনদেনের জন্য নিম্নলিখিত ক্লিয়ারিং কোড ব্যবহৃত হয়:

- **ব্যাংক কোড (${bank.bank_code})**: ব্যাংক নেগারা মালয়েশিয়া ও পে-নেট কর্তৃক নির্ধারিত ২-সংখ্যার ইউনিক কোড যা ${bank.name_bn || bank.name}-কে চিহ্নিত করে।
- **শাখা কোড (৩ ডিজিট)**: সুনির্দিষ্ট শাখাকে নির্দেশকারী ৩-সংখ্যার কোড (যেমন প্রধান কার্যালয়ের জন্য ০০১)।
- **৫-সংখ্যার IBG রাউটিং নম্বর**: ব্যাংক কোড এবং ব্রাঞ্চ কোড একত্রে মিলে ৫-ডিজিটের রাউটিং কোড গঠিত হয় (যেমন: **${custom.clearingRoutingFormat}**)।`,
      content_ms: `Di Malaysia, penghalaan dana domestik bergantung kepada format penjelasan piawai kebangsaan:

- **Kod Bank (${bank.bank_code})**: Pengecam berangka 2 digit unik yang diberikan oleh BNM dan PayNet untuk mengenal pasti ${bank.name}.
- **Kod Cawangan (3 Digit)**: Kod 3 digit yang menentukan lokasi cawangan tertentu (contohnya, 001 untuk Cawangan Utama Kuala Lumpur).
- **Nombor Penghalaan IBG 5 Digit**: Gabungan kod bank 2 digit dan kod cawangan 3 digit menghasilkan nombor penghalaan Interbank GIRO (contoh: **${custom.clearingRoutingFormat}**).`
    },
    {
      id: 'duitnow-instant',
      heading: '3. 24/7 Real-Time DuitNow Instant Transfers & Limits',
      heading_bn: '৩. ২৪/৭ রিয়েল-টাইম ডুইটনাউ (DuitNow) ট্রান্সফার ও লেনদেন সীমা',
      heading_ms: '3. Pindahan Segera DuitNow 24/7 & Had Transaksi',
      content: `Customers of ${bank.name} enjoy instant 24/7/365 fund transfer capabilities via Malaysia's national **DuitNow** network:

- **Transfer Speed**: Immediate settlement (under 5 seconds) directly between bank accounts.
- **Maximum Daily Limit**: ${custom.duitNowInstantLimit}.
- **DuitNow ID Options**: Send and receive money without disclosing account numbers using:
  1. Malaysian Mobile Phone Number (e.g., +6012-3456789)
  2. Malaysian National Identity Card Number (NRIC / MyKad)
  3. Police or Army ID Number
  4. Passport Number (for expatriates and foreign workers)
  5. Business Registration Number (BRN) for corporate accounts
- **DuitNow QR**: Universal interoperable QR payment standard across Malaysian merchants and e-wallets (Touch 'n Go, GrabPay, Boost).`,
      content_bn: `${bank.name_bn || bank.name}-এর গ্রাহকরা মালয়েশিয়ার জাতীয় পেমেন্ট নেটওয়ার্ক **ডুইটনাউ (DuitNow)**-এর মাধ্যমে সার্বক্ষণিক তাৎক্ষণিক টাকা লেনদেন করতে পারেন:

- **লেনদেনের সময়**: ৫ সেকেন্ডেরও কম সময়ে এক অ্যাকাউন্ট থেকে অন্য অ্যাকাউন্টে টাকা জমা হয়।
- **সর্বোচ্চ সীমা**: ${custom.duitNowInstantLimit}।
- **ডুইটনাউ আইডি অপশন**: ব্যাংক হিসাব নম্বর ছাড়াও প্রাপকের মোবাইল নম্বর, মালয়েশিয়ান এনআইডি (MyKad) বা পাসপোর্ট নম্বর ব্যবহার করে সরাসরি টাকা পাঠানো যায়।
- **ডুইটনাউ কিউআর (DuitNow QR)**: দেশের যেকোনো দোকান ও অনলাইন শপিংয়ে স্পর্শহীন কিউআর কোড স্ক্যান করে পেমেন্টের সুবিধা।`,
      content_ms: `Pelanggan ${bank.name} menikmati kemudahan pindahan dana serta-merta 24/7/365 melalui rangkaian pembayaran nasional **DuitNow**:

- **Kepantasan Pindahan**: Penyelesaian serta-merta (kurang daripada 5 saat) terus antara akaun bank.
- **Had Harian Maksimum**: ${custom.duitNowInstantLimit}.
- **Pilihan ID DuitNow**: Hantar dan terima wang tanpa perlu mendedahkan nombor akaun bank menggunakan:
  1. Nombor Telefon Mudah Alih Malaysia (cth: +6012-3456789)
  2. Nombor Kad Pengenalan Pendaftaran Negara (MyKad / NRIC)
  3. Nombor Polis atau Tentera
  4. Nombor Pasport (untuk ekspatriat dan pekerja asing)
  5. Nombor Pendaftaran Perniagaan (BRN) untuk akaun syarikat
- **DuitNow QR**: Standard pembayaran QR seragam di semua peniaga dan e-dompet Malaysia (Touch 'n Go, GrabPay, Boost).`
    },
    {
      id: 'pidm-protection',
      heading: '4. PIDM Government Deposit Protection up to RM250,000',
      heading_bn: '৪. পিআইডিএম (PIDM) আমানত সুরক্ষা: সর্বোচ্চ ২,৫০,০০০ রিঙ্গিত সরকারি নিশ্চয়তা',
      heading_ms: '4. Perlindungan Deposit Kerajaan PIDM Sehingga RM250,000',
      content: `Eligible customer deposits placed with ${bank.name} are legally guaranteed and protected by **Perbadanan Insurans Deposit Malaysia (PIDM)**:

- **Coverage Cap**: Insured up to **RM250,000** per depositor per member institution.
- **Protected Accounts**: Personal savings accounts, current accounts, fixed deposit (FD) placements, and foreign currency accounts.
- **Separate Protection**: Conventional accounts and Islamic banking accounts are insured separately for up to RM250,000 each (providing up to RM500,000 total statutory protection for dual account holders).
- **Automatic Insurance**: No enrollment or fee is required from retail depositors. Protection is statutory and backed by the Government of Malaysia.`,
      content_bn: `${bank.name_bn || bank.name}-এ রক্ষিত সাধারণ গ্রাহকদের আমানত **পেরবাদানান ইন্সুরান ডিপোজিট মালয়েশিয়া (PIDM)** দ্বারা সুরক্ষিত:

- **সুরক্ষার সর্বোচ্চ সীমা**: সদস্য ব্যাংক প্রতি আমানতকারী পিছু সর্বোচ্চ **২,৫০,০০০ রিঙ্গিত** (RM 250,000)।
- **অন্তর্ভুক্ত অ্যাকাউন্ট**: সেভিংস একাউন্ট, চলতি হিসাব (Current Account) ও ফিক্সড ডিপোজিট (FD)।
- **স্বতন্ত্র সুরক্ষা**: ইসলামিক এবং সাধারণ ব্যাংক হিসাবের জন্য আলাদাভাবে আড়াই লাখ রিঙ্গিত করে মোট ৫,০০,০০০ রিঙ্গিত পর্যন্ত সুরক্ষা পাওয়া যায়।
- **স্বয়ংক্রিয় সুবিধা**: এর জন্য আলাদা কোনো আবেদন বা ফি দিতে হয় না; এটি সরকারি আইনে সুরক্ষিত।`,
      content_ms: `Deposit pelanggan yang layak di ${bank.name} dilindungi dan diinsuranskan secara sah oleh **Perbadanan Insurans Deposit Malaysia (PIDM)**:

- **Had Perlindungan**: Dilindungi sehingga **RM250,000** bagi setiap pendeposit bagi setiap institusi ahli.
- **Akaun yang Dilindungi**: Akaun simpanan peribadi, akaun semasa, deposit tetap (FD), dan akaun mata wang asing.
- **Perlindungan Berasingan**: Akaun konvensional dan akaun perbankan Islam dilindungi secara berasingan sehingga RM250,000 setiap satu (jumlah perlindungan sehingga RM500,000).
- **Perlindungan Automatik**: Tiada permohonan atau bayaran dikenakan kepada pendeposit runcit. Perlindungan ini adalah statutori dan dijamin oleh Kerajaan Malaysia.`
    },
    {
      id: 'swift-remittance',
      heading: '5. Inward International SWIFT Wire Instructions to Malaysia',
      heading_bn: '৫. বিদেশ থেকে সুইফট (SWIFT) মাধ্যমে মালয়েশিয়ায় রেমিট্যান্স পাঠানোর নিয়ম',
      heading_ms: '5. Arahan Pindahan Kawat SWIFT Antarabangsa ke Malaysia',
      content: `To receive an overseas telegraphic transfer (TT) into a ${bank.name} account from abroad (Singapore, United States, Europe, United Kingdom, Bangladesh, India, or Australia), furnish the following wire details to the sending financial institution:

1. **Beneficiary Bank Name**: ${bank.name}
2. **SWIFT / BIC Code**: **${custom.swiftHo}**
3. **Bank Clearing Code**: ${bank.bank_code}
4. **Beneficiary Name**: Customer full legal name as registered on their Malaysian NRIC or Passport
5. **Beneficiary Account Number**: Domestic account number (usually 10 to 14 digits)
6. **Bank Address**: ${bank.head_office || 'Kuala Lumpur, Malaysia'}
7. **Intermediary Bank (if required)**: For USD wires, transfers typically route via correspondent clearing banks in New York (such as JPMorgan Chase or Citibank N.A.).`,
      content_bn: `সিঙ্গাপুর, মধ্যপ্রাচ্য, ইউরোপ, আমেরিকা বা বাংলাদেশ থেকে ${bank.name_bn || bank.name}-এর একাউন্টে আন্তর্জাতিক রেমিট্যান্স পাঠানোর জন্য প্রয়োজনীয় তথ্য:

১. **ব্যাংকের নাম**: ${bank.name_bn || bank.name}
২. **সুইফট / বিআইসি কোড**: **${custom.swiftHo}**
৩. **ব্যাংক কোড**: ${bank.bank_code}
৪. **প্রাপকের নাম**: পাসপোর্ট বা মালয়েশিয়ান এনআইডি অনুযায়ী সম্পূর্ণ নাম
৫. **অ্যাকাউন্ট নম্বর**: মালয়েশিয়ান ব্যাংক হিসাব নম্বর (সাধারণত ১০ থেকে ১৪ ডিজিট)
৬. **ব্যাংকের প্রধান কার্যালয়ের ঠিকানা**: ${bank.head_office_bn || bank.head_office || 'কুয়ালালামপুর, মালয়েশিয়া'}
৭. **ইউএস ডলার মধ্যস্থতাকারী ব্যাংক**: ইউএস ডলার রেমিট্যান্সের জন্য সাধারণত নিউ ইয়র্কের জেপি মরগান চেজ বা সিটিব্যাংক হয়ে নিষ্পত্তি হয়।`,
      content_ms: `Untuk menerima pindahan kawat telegrafik (TT) luar negara ke akaun ${bank.name} dari Singapura, UK, Amerika Syarikat, Bangladesh, India, atau Australia, berikan maklumat berikut kepada bank penghantar:

1. **Nama Bank Penerima**: ${bank.name}
2. **Kod SWIFT / BIC**: **${custom.swiftHo}**
3. **Kod Penjelasan Bank**: ${bank.bank_code}
4. **Nama Penerima**: Nama penuh seperti pada MyKad atau Pasport
5. **Nombor Akaun Penerima**: Nombor akaun bank tempatan (10 hingga 14 digit)
6. **Alamat Bank**: ${bank.head_office || 'Kuala Lumpur, Malaysia'}
7. **Bank Perantara (jika perlu)**: Bagi pindahan USD, ia diselesaikan melalui bank koresponden di New York (seperti JPMorgan Chase atau Citibank N.A.).`
    }
  ];

  const faqs = [
    {
      question: `What is the Bank Code for ${bank.name} in Malaysia?`,
      question_bn: `মালয়েশিয়ায় ${bank.name_bn || bank.name}-এর ব্যাংক কোড কত?`,
      question_ms: `Apakah Kod Bank untuk ${bank.name} di Malaysia?`,
      answer: `The official Bank Negara Malaysia clearing bank code for ${bank.name} is ${bank.bank_code}. For domestic Interbank GIRO (IBG) transfers, this combines with a 3-digit branch code to form a 5-digit routing number (e.g., ${custom.clearingRoutingFormat}).`,
      answer_bn: `ব্যাংক নেগারা মালয়েশিয়া কর্তৃক ${bank.name_bn || bank.name}-এর জন্য নির্ধারিত ব্যাংক কোড হলো ${bank.bank_code}। অভ্যন্তরীণ লেনদেনের জন্য এর সাথে ৩ ডিজিটের ব্রাঞ্চ কোড যোগ করে ৫ ডিজিটের রাউটিং কোড তৈরি হয় (যেমন: ${custom.clearingRoutingFormat})।`,
      answer_ms: `Kod bank penjelasan rasmi Bank Negara Malaysia untuk ${bank.name} ialah ${bank.bank_code}. Bagi pindahan Interbank GIRO (IBG), kod ini digabungkan dengan kod cawangan 3 digit untuk membentuk nombor penghalaan 5 digit (contohnya: ${custom.clearingRoutingFormat}).`
    },
    {
      question: `What is the SWIFT code for international wires to ${bank.name}?`,
      question_bn: `${bank.name_bn || bank.name}-এ আন্তর্জাতিক ওয়্যার ট্রান্সফারের সুইফট কোড কী?`,
      question_ms: `Apakah kod SWIFT untuk pindahan kawat antarabangsa ke ${bank.name}?`,
      answer: `The primary head office SWIFT/BIC code for ${bank.name} is ${custom.swiftHo}. This code routes foreign remittances safely through the global SWIFT network into Malaysian Ringgit or foreign currency accounts.`,
      answer_bn: `${bank.name_bn || bank.name}-এর প্রধান সুইফট কোড হলো ${custom.swiftHo}। আন্তর্জাতিক রেমিট্যান্স ও বৈদেশিক মুদ্রা স্থানান্তরে এই কোডটি ব্যবহৃত হয়।`,
      answer_ms: `Kod SWIFT/BIC ibu pejabat utama untuk ${bank.name} ialah ${custom.swiftHo}. Kod ini menghalakan kiriman wang asing melalui rangkaian global SWIFT ke akaun Ringgit Malaysia atau mata wang asing.`
    },
    {
      question: `Are deposits at ${bank.name} protected by the Malaysian government?`,
      question_bn: `${bank.name_bn || bank.name}-এর আমানত কি মালয়েশিয়া সরকার কর্তৃক সুরক্ষিত?`,
      question_ms: `Adakah deposit di ${bank.name} dilindungi oleh kerajaan Malaysia?`,
      answer: `Yes, deposits at ${bank.name} are covered by Perbadanan Insurans Deposit Malaysia (PIDM) up to RM250,000 per depositor. Conventional and Islamic accounts are insured separately.`,
      answer_bn: `হ্যাঁ, ${bank.name_bn || bank.name}-এর আমানত পেরবাদানান ইন্সুরান ডিপোজিট মালয়েশিয়া (PIDM) দ্বারা প্রতি গ্রাহকের জন্য সর্বোচ্চ ২,৫০,০০০ রিঙ্গিত পর্যন্ত সরকারিভাবে সুরক্ষিত।`,
      answer_ms: `Ya, deposit di ${bank.name} dilindungi oleh Perbadanan Insurans Deposit Malaysia (PIDM) sehingga RM250,000 bagi setiap pendeposit. Akaun konvensional dan perbankan Islam dilindungi secara berasingan.`
    },
    {
      question: `How do I send money instantly to a ${bank.name} account using DuitNow?`,
      question_bn: `ডুইটনাউ (DuitNow) দিয়ে কীভাবে ${bank.name_bn || bank.name}-এ তাৎক্ষণিক টাকা পাঠাবেন?`,
      question_ms: `Bagaimana cara menghantar wang serta-merta ke akaun ${bank.name} menggunakan DuitNow?`,
      answer: `Open any Malaysian banking app or e-wallet, choose DuitNow Transfer, select ${bank.name}, enter the recipient's bank account number or DuitNow ID (mobile number or NRIC), enter the transfer amount up to RM50,000, and confirm. Funds arrive immediately 24/7.`,
      answer_bn: `যেকোনো মালয়েশিয়ান মোবাইল ব্যাংকিং বা ই-ওয়ালেট খুলে DuitNow ট্রান্সফার নির্বাচন করুন, প্রাপকের ব্যাংক হিসেবে ${bank.name_bn || bank.name} সিলেক্ট করে অ্যাকাউন্ট নম্বর বা মোবাইল/NRIC নম্বর এবং টাকার পরিমাণ দিন। ২৪/৭ সেকেন্ডের মধ্যেই টাকা পৌঁছে যাবে।`,
      answer_ms: `Buka mana-mana aplikasi perbankan atau e-dompet Malaysia, pilih Pindahan DuitNow, pilih ${bank.name}, masukkan nombor akaun atau ID DuitNow (nombor telefon bimbit atau MyKad), masukkan jumlah sehingga RM50,000, dan sahkan. Wang dipindahkan serta-merta 24/7.`
    }
  ];

  return {
    id: bank.id,
    bank_id: bank.id,
    slug: `${bank.id}-bank-code-swift-routing-malaysia`,
    country: 'my',
    title: articleTitle,
    title_bn: articleTitle_bn,
    title_ms: articleTitle_ms,
    subtitle: `Complete 2026 directory covering ${bank.name}'s 2-digit Bank Code (${bank.bank_code}), 5-digit IBG clearing numbers, DuitNow transfer rules, PIDM insurance, and SWIFT wires.`,
    subtitle_bn: `${bank.name_bn || bank.name}-এর ২-সংখ্যার ব্যাংক কোড (${bank.bank_code}), ৫-সংখ্যার IBG ক্লিয়ারিং কোড, ডুইটনাউ (DuitNow) নিয়মাবলি ও সুইফট ওয়্যার ট্রান্সফার গাইড।`,
    subtitle_ms: `Direktori lengkap 2026 meliputi Kod Bank 2 digit ${bank.name} (${bank.bank_code}), nombor penjelasan IBG 5 digit, pindahan segera DuitNow, insurans PIDM, dan pindahan SWIFT.`,
    meta_title: `${bank.name}: Bank Code ${bank.bank_code}, IBG Routing, DuitNow & SWIFT | World Bank Codes`,
    meta_description: overview,
    read_time: '7 min read',
    author: 'World Bank Codes Editorial Research',
    published_date: '2026-01-20',
    last_updated: '2026-09-10',
    overview,
    overview_bn,
    overview_ms,
    sections,
    faqs,
    quick_stats: [
      { label: 'Bank Code (BNM)', label_bn: 'ব্যাংক কোড (BNM)', label_ms: 'Kod Bank (BNM)', value: bank.bank_code },
      { label: 'Head Office SWIFT', label_bn: 'হেড অফিস সুইফট', label_ms: 'SWIFT Ibu Pejabat', value: custom.swiftHo },
      { label: 'Clearing Format', label_bn: 'ক্লিয়ারিং ফরম্যাট', label_ms: 'Format Penjelasan', value: '5-Digit IBG (Bank + Cawangan)' },
      { label: 'Instant Payment', label_bn: 'ইনস্ট্যান্ট পেমেন্ট', label_ms: 'Pembayaran Segera', value: 'DuitNow 24/7 (sehingga RM50,000)' },
      { label: 'Deposit Insurance', label_bn: 'আমানত সুরক্ষা', label_ms: 'Insurans Deposit', value: 'PIDM Dilindungi sehingga RM250,000' },
      { label: 'Regulating Authority', label_bn: 'নিয়ন্ত্রণকারী সংস্থা', label_ms: 'Pihak Berkuasa Kawal Selia', value: 'Bank Negara Malaysia (BNM)' },
      { label: 'Digital Mobile App', label_bn: 'ডিজিটাল মোবাইল অ্যাপ', label_ms: 'Aplikasi Mudah Alih', value: custom.popularApp },
      { label: 'Customer Helpline', label_bn: 'গ্রাহক হেল্পলাইন', label_ms: 'Talian Bantuan Pelanggan', value: custom.customerCare }
    ]
  };
});
