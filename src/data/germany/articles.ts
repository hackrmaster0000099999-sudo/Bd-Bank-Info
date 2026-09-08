import { BankArticle } from '../../types';
import banksData from './banks.json';

/**
 * Authoritative Editorial Knowledge Base & Comprehensive Guide for German Banks (Deutsche Kreditinstitute)
 * Covers 8-Digit BLZ (Bankleitzahl), SEPA Credit Transfers (SCT), SEPA Instant (SCT Inst),
 * SEPA Direct Debit (Lastschrift), German IBAN (DEkk...), SWIFT/BIC, and BaFin/EdB statutory deposit protection (€100,000).
 */

interface GermanBankKnowledge {
  established: string;
  foundingStory: string;
  foundingStory_bn: string;
  foundingStory_de: string;
  category: string;
  category_bn: string;
  category_de: string;
  coreStrengths: string[];
  coreStrengths_bn: string[];
  coreStrengths_de: string[];
  blzMain: string;
  blzFormatted: string;
  swiftHo: string;
  ibanExample: string;
  popularApp: string;
  customerCare: string;
  sepaInstantLimit: string;
  depositProtection: string;
  bafinId: string;
}

const GERMANY_BANK_KNOWLEDGE: Record<string, GermanBankKnowledge> = {
  'deutsche-bank': {
    established: '1870 (Founded in Berlin by Ludwig Bamberger & Adelbert Delbrück)',
    foundingStory: 'Deutsche Bank AG is Germany’s largest banking institution and one of the world’s leading financial services groups. Headquartered at the iconic Twin Towers on Taunusanlage in Frankfurt am Main, Deutsche Bank operates globally across investment banking, corporate treasury, private wealth management, and retail banking with total assets exceeding €1.3 trillion.',
    foundingStory_bn: 'ডয়চে ব্যাংক এজি (Deutsche Bank AG) জার্মানির সর্ববৃহৎ ব্যাংকিং প্রতিষ্ঠান এবং বিশ্বের অন্যতম প্রধান আর্থিক সংস্থা। ১৮৭০ সালে বার্লিনে প্রতিষ্ঠিত এবং বর্তমানে ফ্রাঙ্কফুর্টের বিখ্যাত টুইন টাওয়ারে প্রধান কার্যালয় বিশিষ্ট এই বৈশ্বিক ব্যাংকটি ১.৩ ট্রিলিয়ন ইউরোরও বেশি সম্পদ পরিচালনা করে।',
    foundingStory_de: 'Die Deutsche Bank AG ist das nach Bilanzsumme und Mitarbeiterzahl größte Kreditinstitut Deutschlands mit Sitz in Frankfurt am Main. Sie bietet als globale Universalbank Finanzdienstleistungen für Privatkunden, mittelständische Unternehmen, multinationale Konzerne und institutionelle Investoren.',
    category: 'German Global Universal Bank (BaFin / ECB G-SIB ID #100003)',
    category_bn: 'জার্মান গ্লোবাল ইউনিভার্সাল ব্যাংক (BaFin আইডি #১০০০MD)',
    category_de: 'Deutsche Großbank / Systemrelevantes Kreditinstitut (BaFin-ID: 100003)',
    coreStrengths: [
      'Germany’s largest financial institution with premier global corporate and investment banking',
      'Instant SEPA Credit Transfer (SCT Inst) settled in real-time via Bundesbank/EBA CLEARING',
      'Comprehensive multi-currency accounts and direct global trade finance infrastructure',
      'Statutory EdB deposit protection (€100,000) plus voluntary Einlagensicherungsfonds der privaten Banken'
    ],
    coreStrengths_bn: [
      'জার্মানির সর্ববৃহৎ আর্থিক প্রতিষ্ঠান এবং বৈশ্বিক ইনভেস্টমেন্ট ব্যাংকিং সেবাদাতা',
      'তাত্ক্ষণিক সেপা ইনস্ট্যান্ট (SEPA Instant) পেমেন্টস ও বুন্দেসব্যাংক রিয়েল-টাইম সেটেলমেন্ট',
      'আন্তর্জাতিক মাল্টি-কারেন্সি অ্যাকাউন্ট ও গ্লোবাল ট্রেড ফাইন্যান্স সুবিধা',
      'আইনগত EdB আমানত সুরক্ষা (€১০০,০০০) এবং ব্যক্তিগত ব্যাংকগুলোর অতিরিক্ত স্বেচ্ছাসেবী তহবিল সুরক্ষা'
    ],
    coreStrengths_de: [
      'Größte Universalbank Deutschlands mit weltweitem Corporate & Investment Banking',
      'Echtzeit-Überweisungen via SEPA Instant Credit Transfer rund um die Uhr',
      'Führende digitale Banking-App mit PhotoTAN und digitalem Finanzplaner',
      'Gesetzliche Einlagensicherung (100.000 €) plus freiwilliger Einlagensicherungsfonds des BdB'
    ],
    blzMain: '50070010',
    blzFormatted: '500 700 10',
    swiftHo: 'DEUTDEDD',
    ibanExample: 'DE89 5007 0010 0123 4567 89',
    popularApp: 'Deutsche Bank Mobile & photoTAN App',
    customerCare: '+49 (0)69 910-10000 (24/7 Service)',
    sepaInstantLimit: 'Up to €100,000 per transaction (real-time 24/7)',
    depositProtection: '100.000 € gesetzlich (EdB) + freiwillige Einlagensicherung des BdB',
    bafinId: '100003'
  },
  'commerzbank': {
    established: '1870 (Founded in Hamburg by merchants and private bankers)',
    foundingStory: 'Commerzbank AG is Germany’s second-largest private listed bank and the leading financier for the German "Mittelstand" (small- and medium-sized enterprises). Headquartered in the famous 259-meter Commerzbank Tower in Frankfurt am Main, the bank handles roughly 30% of Germany’s foreign trade transactions and serves over 11 million private and small-business clients.',
    foundingStory_bn: 'কমার্ৎসব্যাংক এজি (Commerzbank AG) জার্মানির দ্বিতীয় বৃহত্তম তালিকাভুক্ত বাণিজ্যিক ব্যাংক এবং জার্মানির শিল্প ও মাঝারি ব্যবসার (Mittelstand) প্রধান অর্থায়নকারী। ফ্রাঙ্কফুর্টের ঐতিহাসিক কমার্ৎসব্যাংক টাওয়ারে অবস্থিত এই প্রতিষ্ঠানটি জার্মানির মোট বৈদেশিক বাণিজ্যের প্রায় ৩০% লেনদেন পরিচালনা করে।',
    foundingStory_de: 'Die Commerzbank AG ist eine deutsche Großbank mit Sitz in Frankfurt am Main. Sie ist der führende Finanzierungspartner für den deutschen Mittelstand und betreut rund 11 Millionen Privat- und Unternehmerkunden.',
    category: 'German Major Commercial Bank (BaFin ID #100004)',
    category_bn: 'জার্মান প্রধান বাণিজ্যিক ব্যাংক (BaFin আইডি #১০০০MD)',
    category_de: 'Deutsche Großbank (BaFin-ID: 100004)',
    coreStrengths: [
      'Leading financier for German Mittelstand and international trade financing',
      'Free basic checking accounts with modern mobile banking and photoTAN authorization',
      'Extensive national branch network and full cash deposit ATM integration (Cash Group)',
      'Fast cross-border SEPA and SWIFT corporate treasury settlement'
    ],
    coreStrengths_bn: [
      'জার্মান মাঝারি শিল্প ও আন্তর্জাতিক বাণিজ্যের সর্ববৃহৎ অর্থায়নকারী',
      'আধুনিক মোবাইল ব্যাংকিং ও ফটো-ট্যান (photoTAN) নিরাপত্তা সুবিধা',
      'ক্যাশ গ্রুপ (Cash Group) নেটওয়ার্কের মাধ্যমে বিনামূল্যে সারা দেশে এটিএম সুবিধা',
      'দ্রুত সেপা ও আন্তর্জাতিক সুইফট রেমিট্যান্স নিষ্পত্তিকরণ'
    ],
    coreStrengths_de: [
      'Marktführer in der Mittelstandsfinanzierung und im deutschen Außenhandel',
      'Kostenloses Girokonto mit digitalem Assistenten und photoTAN-Sicherheit',
      'Bundesweites Filialnetz und kostenlose Bargeldversorgung in der Cash Group',
      'Volle Unterstützung von SEPA Instant und weltweiten SWIFT-Transaktionen'
    ],
    blzMain: '50040000',
    blzFormatted: '500 400 00',
    swiftHo: 'COBADEFF',
    ibanExample: 'DE44 5004 0000 0987 6543 21',
    popularApp: 'Commerzbank Banking App & photoTAN',
    customerCare: '+49 (0)69 9866 0966 (24/7 Helpline)',
    sepaInstantLimit: 'Up to €100,000 per instant transfer',
    depositProtection: '100.000 € gesetzlich (EdB) + Einlagensicherungsfonds des BdB',
    bafinId: '100004'
  },
  'kfw-bankengruppe': {
    established: '1948 (Established under the Marshall Plan / European Recovery Program)',
    foundingStory: 'KfW Bankengruppe (Kreditanstalt für Wiederaufbau) is Germany’s state-owned national promotional and development bank, owned 80% by the Federal Republic of Germany and 20% by the German federal states. Headquartered in Frankfurt am Main, KfW finances sustainable energy, housing modernization, student loans, and international development cooperation with a balance sheet exceeding €550 billion.',
    foundingStory_bn: 'কেএফডব্লিউ ব্যাংক গ্রুপ (KfW Bankengruppe) জার্মানির রাষ্ট্রীয় জাতীয় উন্নয়ন ব্যাংক, যা ১৯৪৮ সালে মার্শাল প্ল্যানের অধীনে প্রতিষ্ঠিত হয়েছিল। জার্মানির ফেডারেল সরকার (৮০%) ও বিভিন্ন অঙ্গরাজ্যের (২০%) মালিকানাধীন এই প্রতিষ্ঠানটি পরিবেশবান্ধব শক্তি, আবাসন, শিক্ষা ও ক্ষুদ্র উদ্যোক্তাদের সাশ্রয়ী ঋণ দিয়ে থাকে।',
    foundingStory_de: 'Die KfW (Kreditanstalt für Wiederaufbau) ist die weltweit größte nationale Förderbank und nach Bilanzsumme die drittgrößte Bank Deutschlands mit Sitz in Frankfurt am Main. Sie fördert Mittelstand, Existenzgründer, Wohnungsbau, Klimaschutz und Bildung.',
    category: 'German Federal Promotional Bank (Anstalt des öffentlichen Rechts)',
    category_bn: 'জার্মান রাষ্ট্রীয় উন্নয়ন ব্যাংক (BaFin আইডি #১০০০MD)',
    category_de: 'Staatliche Förderbank der Bundesrepublik Deutschland (BaFin-ID: 100007)',
    coreStrengths: [
      'AAA-rated sovereign credit backing by the Federal Republic of Germany (Anstaltslast)',
      'Subsidized low-interest loans for energy-efficient homes, solar installations, and education',
      'Extensive international development financing via KfW DEG and KfW Entwicklungsbank',
      'Direct institutional clearing with the Deutsche Bundesbank'
    ],
    coreStrengths_bn: [
      'জার্মান কেন্দ্রীয় সরকারের শতভাগ গ্যারান্টিযুক্ত সর্বোচ্চ ট্রিপল-এ (AAA) রেটিং',
      'পরিবেশবান্ধব বাড়ি নির্মাণ ও শিক্ষা ঋণে বিশেষ ভর্তুকিযুক্ত সুদের হার',
      'আন্তর্জাতিক টেকসই উন্নয়ন ও গ্রিন এনার্জি প্রকল্পে শীর্ষস্থানীয় অর্থায়ন',
      'ডয়চে বুন্দেসব্যাংকের মাধ্যমে সরাসরি প্রাতিষ্ঠানিক লেনদেন'
    ],
    coreStrengths_de: [
      'Hundertprozentige Gewährträgerhaftung und Anstaltslast des Bundes (AAA-Rating)',
      'Zinsgünstige Förderkredite für energetisches Bauen, Sanieren und Photovoltaik',
      'Förderung von Start-ups, Innovationen und globalen Entwicklungsprojekten',
      'Institutionelle Bankleitzahl für Förderdarlehensabrechnungen'
    ],
    blzMain: '50020400',
    blzFormatted: '500 204 00',
    swiftHo: 'KFWXDEDD',
    ibanExample: 'DE12 5002 0400 0012 3456 78',
    popularApp: 'KfW Förderassistent Portal',
    customerCare: '+49 (0)800 539 9001 (Kostenfreie Servicenummer)',
    sepaInstantLimit: 'Institutional clearing threshold via Bundesbank',
    depositProtection: 'Unconditional statutory guarantee by the Federal Republic of Germany',
    bafinId: '100007'
  },
  'dz-bank': {
    established: '2001 (Merger of DG BANK and GZ-Bank; historic roots date to 1895)',
    foundingStory: 'DZ BANK AG (Deutsche Zentral-Genossenschaftsbank) is the central institution for the German Cooperative Financial Network (Genossenschaftliche FinanzGruppe), serving around 700 local cooperative banks (Volksbanken and Raiffeisenbanken) with over 7,500 branches. It is the second-largest bank in Germany by assets.',
    foundingStory_bn: 'ডিজেড ব্যাংক এজি (DZ BANK AG) জার্মানির সমবায় ব্যাংকিং নেটওয়ার্কের কেন্দ্রীয় প্রতিষ্ঠান, যা প্রায় ৭০০টি স্থানীয় ফোক্সব্যাংক ও রাইফাইজেনব্যাংক (Volksbanken und Raiffeisenbanken)-কে কেন্দ্রীয় তারল্য, ক্লিয়ারিং ও আন্তর্জাতিক ব্যাংকিং সেবা প্রদান করে।',
    foundingStory_de: 'Die DZ BANK AG ist das Zentralinstitut der Genossenschaftlichen FinanzGruppe Volksbanken Raiffeisenbanken und Spitzeninstitut für rund 700 genossenschaftliche Primärbanken in Deutschland.',
    category: 'German Cooperative Central Bank (BaFin ID #100010)',
    category_bn: 'জার্মান সমবায় কেন্দ্রীয় ব্যাংক (BaFin আইডি #১০০০MD)',
    category_de: 'Zentralinstitut der Genossenschaftsbanken (BaFin-ID: 100010)',
    coreStrengths: [
      'Central clearing institution for over 700 Volksbanken and Raiffeisenbanken across Germany',
      'Comprehensive institutional B2B liquidity management and capital markets access',
      'Direct participant in TARGET2, SEPA, and international SWIFT correspondent networks',
      'Backed by the BVR Institutional Protection Scheme with 100% deposit security history'
    ],
    coreStrengths_bn: [
      '৭০০টিরও বেশি স্থানীয় সমবায় ব্যাংকের কেন্দ্রীয় ক্লিয়ারিং ও ট্রেজারি ব্যবস্থাপনা',
      'টার্গেট২ (TARGET2) এবং সেপা নেটওয়ার্কে সরাসরি সংযোগ ও সেটেলমেন্ট',
      'বিভিআর (BVR) প্রাতিষ্ঠানিক সুরক্ষা ব্যবস্থার মাধ্যমে শতভাগ আমানত নিরাপত্তা',
      'জার্মানির দ্বিতীয় বৃহত্তম ব্যাংকিং গ্রুপের মূল শক্তি'
    ],
    coreStrengths_de: [
      'Zentrales Clearing für über 700 Volksbanken und Raiffeisenbanken',
      'Führende Verbundbank für Liquiditäts- und Kapitalmarktdienstleistungen',
      'Direkte Anbindung an TARGET2 und EBA CLEARING',
      'Schutz durch die Institutssicherung des BVR ohne jemals eingetretenen Einlagenverlust'
    ],
    blzMain: '50060400',
    blzFormatted: '500 604 00',
    swiftHo: 'GENODEF1',
    ibanExample: 'DE65 5006 0400 1234 5678 90',
    popularApp: 'VR Banking App & VR SecureGo plus',
    customerCare: '+49 (0)69 7447-01 (Frankfurt Head Office)',
    sepaInstantLimit: 'Up to €100,000 via cooperative clearing rail',
    depositProtection: 'BVR Institutssicherung (Institutional Protection Scheme)',
    bafinId: '100010'
  },
  'lbbw': {
    established: '1999 (Formed from merger of SüdwestLB, Landesgirokasse, and L-Bank)',
    foundingStory: 'Landesbank Baden-Württemberg (LBBW) is the largest German Landesbank (state bank) and a premier commercial universal bank headquartered in Stuttgart. Owned jointly by the State of Baden-Württemberg, the City of Stuttgart, and the Sparkassenverband Baden-Württemberg, LBBW serves as the central bank for 50 local savings banks (Sparkassen).',
    foundingStory_bn: 'ল্যান্ডেস ব্যাংক বাডেন-ভুর্টেমবার্গ (LBBW) জার্মানির সর্ববৃহৎ ল্যান্ডেস ব্যাংক এবং বাডেন-ভুর্টেমবার্গ অঙ্গরাজ্যের প্রধান বাণিজ্যিক ব্যাংক। স্টুটগার্টে প্রধান কার্যালয় অবস্থিত এই ব্যাংকটি ৫০টি স্পারকাশের কেন্দ্রীয় ব্যাংক হিসেবে কাজ করে।',
    foundingStory_de: 'Die Landesbank Baden-Württemberg (LBBW) ist die größte deutsche Landesbank mit Hauptsitz in Stuttgart. Sie ist Universalbank und Zentralinstitut für die Sparkassen in Baden-Württemberg, Rheinland-Pfalz und Sachsen.',
    category: 'German Landesbank & Sparkassen Central Bank (BaFin ID #100015)',
    category_bn: 'জার্মান ল্যান্ডেস ব্যাংক ও স্পারকাশে সেন্ট্রাল ব্যাংক',
    category_de: 'Landesbank / Zentralinstitut der Sparkassen (BaFin-ID: 100015)',
    coreStrengths: [
      'Largest Landesbank in Germany with leading position in industrial export financing',
      'Central bank for savings banks in Baden-Württemberg, Rhineland-Palatinate, and Saxony',
      'High-grade institutional real estate and renewable energy structured financing',
      'Protected under the Sparkassen-Finanzgruppe institutional deposit protection system'
    ],
    coreStrengths_bn: [
      'জার্মানির সর্ববৃহৎ ল্যান্ডেস ব্যাংক ও রপ্তানিমুখী শিল্পের প্রধান সহযোগী',
      'দক্ষিণ ও পূর্ব জার্মানির স্পারকাশেগুলোর জন্য সেন্ট্রাল সেটেলমেন্ট হাব',
      'স্পারকাশেন-ফিনান্সগ্রুপের প্রাতিষ্ঠানিক আমানত সুরক্ষায় সুরক্ষিত',
      'রিয়েল এস্টেট ও নবায়নযোগ্য শক্তি প্রকল্পে বৃহৎ বিনিয়োগ'
    ],
    coreStrengths_de: [
      'Größte Landesbank Deutschlands mit Schwerpunkt Mittelstands- und Exportfinanzierung',
      'Zentralbankfunktion für die Sparkassen in Südwestdeutschland und Sachsen',
      'Führend bei nachhaltigen Finanzierungen und Green Bonds',
      'Einlagenschutz über das Sicherungssystem der Sparkassen-Finanzgruppe'
    ],
    blzMain: '60050101',
    blzFormatted: '600 501 01',
    swiftHo: 'SOLADEST',
    ibanExample: 'DE32 6005 0101 0098 7654 32',
    popularApp: 'LBBW Mobil App',
    customerCare: '+49 (0)711 127-0 (Stuttgart Central)',
    sepaInstantLimit: 'Up to €100,000 per instant transaction',
    depositProtection: 'Sparkassen-Finanzgruppe Institutssicherung',
    bafinId: '100015'
  },
  'bayernlb': {
    established: '1884 (Roots date to Royal Bavarian Agricultural Credit Institute)',
    foundingStory: 'Bayerische Landesbank (BayernLB) is the premier public-law commercial bank for the Free State of Bavaria, headquartered in Munich on Brienner Straße. BayernLB is owned 75% by the Free State of Bavaria and 25% by the Association of Bavarian Savings Banks (Sparkassenverband Bayern). It also owns DKB (Deutsche Kreditbank).',
    foundingStory_bn: 'বায়ার্ন এলবি (BayernLB) বাভারিয়া অঙ্গরাজ্যের শীর্ষস্থানীয় বাণিজ্যিক ও ল্যান্ডেস ব্যাংক, যার প্রধান কার্যালয় মিউনিখে অবস্থিত। ব্যাংকটি বাভারিয়া সরকার ও বাভারিয়ান স্পারকাশে অ্যাসোসিয়েশনের যৌথ মালিকানাধীন এবং বিখ্যাত ডিজিটাল ব্যাংক ডিকেবি (DKB)-এর মূল প্রতিষ্ঠান।',
    foundingStory_de: 'Die Bayerische Landesbank (BayernLB) ist eine öffentlich-rechtliche Universalbank mit Sitz in München und die Landesbank des Freistaates Bayern. Sie fungiert als Zentralbank der bayerischen Sparkassen.',
    category: 'Bavarian State Bank & Sparkassen Clearing Hub (BaFin ID #100018)',
    category_bn: 'বাভারিয়ান স্টেট ব্যাংক ও ক্লিয়ারিং হাব',
    category_de: 'Bayerische Landesbank (BaFin-ID: 100018)',
    coreStrengths: [
      'Financial engine for the prosperous Bavarian economy and international corporate partners',
      'Central clearing institution for all Bavarian Sparkassen (savings banks)',
      'Parent company of DKB (Deutsche Kreditbank), Germany’s second-largest direct bank',
      'Secured by the institutional guarantee and reserve fund of the Sparkassen-Finanzgruppe'
    ],
    coreStrengths_bn: [
      'বাভারিয়া অঙ্গরাজ্যের অর্থনৈতিক প্রবৃদ্ধির মূল চালিকাশক্তি',
      'বাভারিয়ার সকল স্পারকাশের কেন্দ্রীয় ক্লিয়ারিং সুবিধা',
      'ডিজিটাল ব্যাংক ডিকেবি (DKB)-এর প্রধান মূল প্রতিষ্ঠান',
      'স্পারকাশেন-ফিনান্সগ্রুপের সম্পূর্ণ আমানত সুরক্ষা'
    ],
    coreStrengths_de: [
      'Finanzpartner der bayerischen Wirtschaft und internationaler Unternehmenskunden',
      'Zentralbank für alle bayerischen Sparkassen mit SEPA- und RTGS-Clearing',
      'Muttergesellschaft der Deutschen Kreditbank AG (DKB)',
      'Institutssicherung der deutschen Sparkassen-Finanzgruppe'
    ],
    blzMain: '70050000',
    blzFormatted: '700 500 00',
    swiftHo: 'BYLADEMM',
    ibanExample: 'DE19 7005 0000 0112 2334 45',
    popularApp: 'BayernLB Business Banking',
    customerCare: '+49 (0)89 2171-01 (Munich Central)',
    sepaInstantLimit: 'Up to €100,000 per instant transaction',
    depositProtection: 'Sparkassen-Finanzgruppe Institutssicherung',
    bafinId: '100018'
  },
  'nordlb': {
    established: '1970 (Merger of historic state institutions dating back to 1765 Braunschweigische Staatsbank)',
    foundingStory: 'Norddeutsche Landesbank Girozentrale (NORD/LB) is the Landesbank for northern Germany, operating across Lower Saxony, Saxony-Anhalt, and Mecklenburg-Western Pomerania. Headquartered in Hanover, NORD/LB is a market leader in agricultural financing, renewable energy wind farms, and aircraft structured finance.',
    foundingStory_bn: 'নর্ড এলবি (NORD/LB) উত্তর জার্মানির প্রধান ল্যান্ডেস ব্যাংক, যা লোয়ার স্যাক্সনি, স্যাক্সনি-আনহাল্ট ও মেকলেনবার্গ অঙ্গরাজ্যে কার্যক্রম পরিচালনা করে। হ্যানোভারে অবস্থিত এই ব্যাংকটি কৃষি, বায়ু বিদ্যুৎ ও এভিয়েশন ফাইন্যান্সিংয়ে বিশেষায়িত।',
    foundingStory_de: 'Die Norddeutsche Landesbank Girozentrale (NORD/LB) ist die Landesbank für Niedersachsen und Sachsen-Anhalt mit Hauptsitz in Hannover. Sie ist eine der führenden deutschen Banken für Erneuerbare Energien und Agrarfinanzierung.',
    category: 'Northern German Landesbank (BaFin ID #100021)',
    category_bn: 'উত্তর জার্মান ল্যান্ডেস ব্যাংক (BaFin আইডি #১০০০MD)',
    category_de: 'Norddeutsche Landesbank (BaFin-ID: 100021)',
    coreStrengths: [
      'Pioneer in financing European onshore and offshore wind energy infrastructure',
      'Traditional agricultural and agricultural-business credit leadership in Northern Germany',
      'Central clearing partner for regional Sparkassen in Lower Saxony and Saxony-Anhalt',
      'Fully protected under the Sparkassen-Finanzgruppe institutional deposit protection scheme'
    ],
    coreStrengths_bn: [
      'ইউরোপীয় অফশোর ও অনশোর বায়ু বিদ্যুৎ প্রকল্পে শীর্ষ বিনিয়োগকারী',
      'উত্তর জার্মানির কৃষিভিত্তিক ব্যবসা ও গ্রামীণ উন্নয়নে প্রধান অর্থায়নকারী',
      'আঞ্চলিক স্পারকাশেগুলোর জন্য সেন্ট্রাল সেটেলমেন্ট সুবিধা',
      'স্পারকাশেন-ফিনান্সগ্রুপের সম্পূর্ণ প্রাতিষ্ঠানিক আমানত সুরক্ষা'
    ],
    coreStrengths_de: [
      'Führender Finanzierer von Wind- und Solarparks in Europa',
      'Kompetenzzentrum für Agrar- und Ernährungswirtschaft in Norddeutschland',
      'Girozentrale für Sparkassen in Niedersachsen, Sachsen-Anhalt und Mecklenburg-Vorpommern',
      'Institutssicherung der Sparkassen-Finanzgruppe'
    ],
    blzMain: '25050000',
    blzFormatted: '250 500 00',
    swiftHo: 'NOLDDE2H',
    ibanExample: 'DE58 2505 0000 0554 4332 21',
    popularApp: 'NORD/LB Banking App',
    customerCare: '+49 (0)511 361-0 (Hanover Central)',
    sepaInstantLimit: 'Up to €100,000 per instant transfer',
    depositProtection: 'Sparkassen-Finanzgruppe Institutssicherung',
    bafinId: '100021'
  },
  'helaba': {
    established: '1953 (Historic roots date back to 1840 Landesbank Hessen)',
    foundingStory: 'Landesbank Hessen-Thüringen (Helaba) is a major German universal commercial bank and the central banking institution for savings banks in the federal states of Hesse and Thuringia. Headquartered in the iconic 200-meter MAIN TOWER in Frankfurt am Main and in Erfurt, Helaba handles public infrastructure, real estate finance, and corporate banking.',
    foundingStory_bn: 'হেলাবা ব্যাংক (Helaba) জার্মানির অন্যতম প্রধান বাণিজ্যিক ও ল্যান্ডেস ব্যাংক, যা হেসেন ও থুরিংগিয়া অঙ্গরাজ্যের স্পারকাশেগুলোর সেন্ট্রাল ব্যাংক। ফ্রাঙ্কফুর্টের বিখ্যাত মেইন টাওয়ার (MAIN TOWER)-এ অবস্থিত এই ব্যাংকটি সরকারি অবকাঠামো ও বাণিজ্যিক প্রকল্পে নেতৃত্ব দেয়।',
    foundingStory_de: 'Die Landesbank Hessen-Thüringen Girozentrale (Helaba) ist eine öffentlich-rechtliche Universalbank mit Doppelhauptsitz in Frankfurt am Main (MAIN TOWER) und Erfurt. Sie ist Sparkassenzentralbank für Hessen und Thüringen.',
    category: 'German Landesbank & Sparkassen Girozentrale (BaFin ID #100025)',
    category_bn: 'জার্মান ল্যান্ডেস ব্যাংক ও স্পারকাশে গিরোজেন্ট্রালে',
    category_de: 'Landesbank Hessen-Thüringen (BaFin-ID: 100025)',
    coreStrengths: [
      'Commercial real estate financing leader across Germany, Europe, and the United States',
      'Public development bank (WIBank) managing regional economic development funds',
      'Direct participant in Frankfurt’s financial hub payment clearing and TARGET2 infrastructure',
      'Member of the institutional protection scheme of the German Savings Banks Finance Group'
    ],
    coreStrengths_bn: [
      'জার্মানি, ইউরোপ ও যুক্তরাষ্ট্রে বাণিজ্যিক রিয়েল এস্টেট অর্থায়নে শীর্ষস্থানীয়',
      'ডব্লিউআইব্যাংক (WIBank)-এর মাধ্যমে আঞ্চলিক উন্নয়নে সরকারি তহবিল ব্যবস্থাপনা',
      'ফ্রাঙ্কফুর্ট ফাইন্যান্সিয়াল হাবের সরাসরি পেমেন্ট ক্লিয়ারিং ও টার্গেট২ সুবিধা',
      'স্পারকাশেন-ফিনান্সগ্রুপের শতভাগ নিরাপদ আমানত সুরক্ষা ব্যবস্থা'
    ],
    coreStrengths_de: [
      'Führend in der gewerblichen Immobilienfinanzierung international',
      'Wirtschafts- und Infrastrukturbank Hessen (WIBank) als Förderinstitut',
      'Zentralbankfunktion für die Sparkassen in Hessen und Thüringen',
      'Sicherung durch das Institutssicherungssystem der Sparkassen-Finanzgruppe'
    ],
    blzMain: '50050000',
    blzFormatted: '500 500 00',
    swiftHo: 'HELADEF1',
    ibanExample: 'DE72 5005 0000 0011 2233 44',
    popularApp: 'Helaba Banking Connect',
    customerCare: '+49 (0)69 9132-01 (Frankfurt Main Tower)',
    sepaInstantLimit: 'Up to €100,000 per instant transaction',
    depositProtection: 'Sparkassen-Finanzgruppe Institutssicherung',
    bafinId: '100025'
  },
  'ing-diba': {
    established: '1965 (Founded as BSV Bank für Sparanlagen und Vermögensbildung in Frankfurt)',
    foundingStory: 'ING-DiBa AG (operating as ING Deutschland) is Germany’s largest direct bank and the third-largest retail bank in the country, serving over 9.5 million customers. Headquartered on Theodor-Heuss-Allee in Frankfurt am Main, ING is renowned for its no-fee digital checking accounts (Girokonto), high-yield call money (Extra-Konto), and accessible ETF securities savings plans.',
    foundingStory_bn: 'আইএনজি জার্মানি (ING-DiBa AG) জার্মানির সর্ববৃহৎ ডিরেক্ট ডিজিটাল ব্যাংক এবং ৯৫ লক্ষাধিক গ্রাহক নিয়ে দেশটির তৃতীয় বৃহত্তম রিটেইল ব্যাংক। ফ্রাঙ্কফুর্টে অবস্থিত এই ব্যাংকটি তাদের ফ্রি কারেন্ট একাউন্ট (Girokonto), সেভিংস একাউন্ট (Extra-Konto) ও ইটিএফ ইনভেস্টমেন্টের জন্য অত্যন্ত জনপ্রিয়।',
    foundingStory_de: 'Die ING-DiBa AG (Markenauftritt: ING) ist mit über 9,5 Millionen Kunden die größte Direktbank Deutschlands mit Sitz in Frankfurt am Main. Sie bietet Girokonten, Tagesgeld (Extra-Konto), Baufinanzierungen, Verbraucherkredite und Wertpapierdepots an.',
    category: 'German Direct Bank (BaFin ID #100030)',
    category_bn: 'জার্মান প্রধান ডিরেক্ট ডিজিটাল ব্যাংক (BaFin আইডি #১০০০MD)',
    category_de: 'Größte Direktbank Deutschlands (BaFin-ID: 100030)',
    coreStrengths: [
      'Market leader in consumer digital banking with over 9.5 million satisfied German retail clients',
      'Free Visa debit card with free cash withdrawals at almost all ATMs in Germany and the Eurozone',
      'Award-winning "Banking to go" mobile app with instant fingerprint and Face ID authentication',
      'Dual deposit protection: €100,000 statutory (EdB) + multi-million private banking deposit fund'
    ],
    coreStrengths_bn: [
      '৯৫ লক্ষের বেশি গ্রাহক নিয়ে জার্মানির এক নম্বর ডিজিটাল কনজিউমার ব্যাংক',
      'ফ্রি ভিসা ডেবিট কার্ড দিয়ে ইউরোজোনের প্রায় সব এটিএম থেকে বিনামূল্যে ক্যাশ উত্তোলন',
      'অত্যন্ত জনপ্রিয় "Banking to go" মোবাইল অ্যাপ ও বায়োমেট্রিক নিরাপত্তা',
      'আইনগত €১০০,০০০ (EdB) ও অতিরিক্ত প্রাইভেট ব্যাংক আমানত সুরক্ষা'
    ],
    coreStrengths_de: [
      'Größte Direktbank Deutschlands mit erstklassigem Kundenservice',
      'Kostenlose VISA Card Debit mit gratis Bargeldabhebung an 97% aller Geldautomaten',
      'Vielfach prämierte Banking to go App mit Echtzeit-Push-Nachrichten',
      'Gesetzliche Einlagensicherung (100.000 €) plus freiwilliger BdB-Einlagensicherungsfonds'
    ],
    blzMain: '50010517',
    blzFormatted: '500 105 17',
    swiftHo: 'INGDDEFF',
    ibanExample: 'DE27 5001 0517 0123 4567 89',
    popularApp: 'ING Banking to go (iOS & Android)',
    customerCare: '+49 (0)69 50 500 105 (Mon-Sun 24/7)',
    sepaInstantLimit: 'Up to €100,000 per instant transaction (24/7/365)',
    depositProtection: '100.000 € gesetzlich (EdB) + Einlagensicherungsfonds des BdB',
    bafinId: '100030'
  },
  'dkb': {
    established: '1990 (Founded in Berlin as the first private bank established in East Germany)',
    foundingStory: 'Deutsche Kreditbank AG (DKB) is Germany’s second-largest direct bank and a pioneer in sustainable digital banking, serving over 5.5 million retail and business customers. Headquartered in Berlin on Taubenstraße, DKB is an industry leader in public infrastructure, municipal renewable energy, and modern fee-free checking accounts.',
    foundingStory_bn: 'ডিকেবি ব্যাংক (Deutsche Kreditbank AG) জার্মানির দ্বিতীয় বৃহত্তম ডিরেক্ট ব্যাংক এবং পরিবেশবান্ধব ও টেকসই ব্যাংকিংয়ের পথপ্রদর্শক। বার্লিনে অবস্থিত এই ব্যাংকটি ৫৫ লক্ষেরও বেশি গ্রাহককে আধুনিক ডিজিটাল ব্যাংকিং ও কম সুদের লোন প্রদান করে।',
    foundingStory_de: 'Die Deutsche Kreditbank AG (DKB) mit Sitz in Berlin ist mit über 5,5 Millionen Kunden die zweitgrößte Direktbank Deutschlands und eine Tochtergesellschaft der BayernLB. Schwerpunkte sind digitales Privatkundengeschäft und nachhaltige Finanzierungen.',
    category: 'German Sustainable Direct Bank (BaFin ID #100035)',
    category_bn: 'জার্মান ডিজিটাল ডিরেক্ট ব্যাংক (BaFin আইডি #১০০০MD)',
    category_de: 'Direktbank / Nachhaltiges Kreditinstitut (BaFin-ID: 100035)',
    coreStrengths: [
      'Pioneer in digital checking accounts with transparent sustainability focus (Geldverbesserer)',
      'Free worldwide payments and fee-free ATM withdrawals via the DKB Visa debit card',
      'Key financier for German wind, solar, social housing, and healthcare facilities',
      'Protected under the institutional guarantee system of the German Savings Banks Finance Group'
    ],
    coreStrengths_bn: [
      'টেকসই ও পরিবেশবান্ধব প্রকল্পে অর্থায়নের জন্য জার্মানির শীর্ষ বিশ্বস্ত ব্যাংক',
      'ডিকেবি ভিসা ডেবিট কার্ডের মাধ্যমে বিশ্বব্যাপী বিনামূল্যে লেনদেন ও ক্যাশ উত্তোলন',
      'আধুনিক ডিকেবি মোবাইল অ্যাপ ও তাত্ক্ষণিক সেপা পেমেন্ট সুবিধা',
      'স্পারকাশেন-ফিনান্সগ্রুপের শতভাগ প্রাতিষ্ঠানিক আমানত সুরক্ষায় সুরক্ষিত'
    ],
    coreStrengths_de: [
      'Nachhaltige Direktbank („Geldverbesserer“) mit über 5,5 Millionen Kunden',
      'Kostenloses Girokonto für Aktivkunden mit weltweit kostenloser Visa Debitkarte',
      'Großfinanzierer von erneuerbaren Energien, Schulen, Krankenhäusern und Pflegeheimen',
      'Sicherungssystem der Sparkassen-Finanzgruppe (Institutssicherung)'
    ],
    blzMain: '12030000',
    blzFormatted: '120 300 00',
    swiftHo: 'DKBBDD33',
    ibanExample: 'DE89 1203 0000 0123 4567 89',
    popularApp: 'DKB App & TAN2go',
    customerCare: '+49 (0)30 120 300 00 (Kundenservice Berlin)',
    sepaInstantLimit: 'Up to €100,000 per instant transaction',
    depositProtection: 'Sparkassen-Finanzgruppe Institutssicherung',
    bafinId: '100035'
  },
  'postbank': {
    established: '1990 (Postal checking service roots date back to 1909 Postscheckdienst)',
    foundingStory: 'Postbank is one of Germany’s most recognized consumer banking brands, operating as a branch of Deutsche Bank AG with headquarters in Bonn on Friedrich-Ebert-Allee. Postbank provides everyday checking accounts, consumer loans, and savings services to approximately 12 million customers across Germany through thousands of branch and partner locations.',
    foundingStory_bn: 'পোস্টব্যাংক (Postbank) জার্মানির অন্যতম জনপ্রিয় ও সুপরিচিত কনজিউমার ব্যাংক, যা বর্তমানে ডয়চে ব্যাংক গ্রুপের একটি বিশেষ শাখা। বনে প্রধান কার্যালয় অবস্থিত এই ব্যাংকটি ১ কোটি ২০ লক্ষের বেশি গ্রাহককে ডাকঘর ও ব্রাঞ্চের মাধ্যমে সহজ দৈনন্দিন ব্যাংকিং সেবা দেয়।',
    foundingStory_de: 'Die Postbank (eine Niederlassung der Deutsche Bank AG) mit Sitz in Bonn ist eine der traditionsreichsten Privatkundenbanken Deutschlands mit rund 12 Millionen Kunden und bundesweit flächendeckender Filial- und Partnerpräsenz.',
    category: 'German Retail Commercial Bank (Deutsche Bank AG Branch)',
    category_bn: 'জার্মান রিটেইল বাণিজ্যিক ব্যাংক (ডয়চে ব্যাংক গ্রুপ)',
    category_de: 'Privatkundenbank / Niederlassung der Deutsche Bank AG (BaFin-ID: 100040)',
    coreStrengths: [
      'Dense nationwide presence in postal branch offices and Deutsche Bank partner locations',
      'Convenient cash deposit and withdrawal network via Cash Group and Postbank counters',
      'Popular Postbank Giro direkt and Giro plus current accounts with mobile banking apps',
      'Statutory deposit protection under Deutsche Bank AG (€100,000 EdB + BdB private fund)'
    ],
    coreStrengths_bn: [
      'জার্মানিজুড়ে বিস্তৃত ডাকঘর ও পার্টনার লোকেশনে সরাসরি ক্যাশ জমা ও উত্তোলনের সুযোগ',
      'ক্যাশ গ্রুপের হাজার হাজার এটিএম থেকে সম্পূর্ণ বিনামূল্যে টাকা তোলার সুবিধা',
      'পোস্টব্যাংক মোবাইল অ্যাপ ও বেস্টসাইট (BestSign) বায়োমেট্রিক অথেনটিকেশন',
      'ডয়চে ব্যাংক এজি-র অধীনে সম্পূর্ণ সংবিধিবদ্ধ আমানত সুরক্ষা'
    ],
    coreStrengths_de: [
      'Flächendeckende Bargeldversorgung an Postfilialen und Cash Group Geldautomaten',
      'Sichere BestSign-Sicherheitsfreigabe direkt auf dem Smartphone oder Seal One',
      'Traditionsreiche Girokontomodelle für Privatkunden, Studenten und Geschäftsleute',
      'Volle Einlagensicherung im Rahmen der Deutsche Bank AG (EdB + BdB)'
    ],
    blzMain: '10010010',
    blzFormatted: '100 100 10',
    swiftHo: 'PBNKDEFF',
    ibanExample: 'DE39 1001 0010 0987 6543 21',
    popularApp: 'Postbank Banking & BestSign App',
    customerCare: '+49 (0)228 5500 5500 (Bonn Kundenservice)',
    sepaInstantLimit: 'Up to €100,000 per instant transfer',
    depositProtection: '100.000 € gesetzlich (EdB) + Einlagensicherungsfonds des BdB',
    bafinId: '100040'
  },
  'sparkasse-koelnbonn': {
    established: '1826 (Founded as Sparkasse der Stadt Köln and Sparkasse Bonn)',
    foundingStory: 'Sparkasse KölnBonn is the largest municipal savings bank (Stadtsparkasse) in Germany by total assets, serving over 1 million private and commercial clients in Cologne and Bonn. Headquartered on Hahnenstraße in Cologne, the bank is a pillar of the Rhineland regional economy, financing local schools, cultural heritage, and municipal development.',
    foundingStory_bn: 'স্পারকাশে কোলন-বন (Sparkasse KölnBonn) সম্পদের দিক থেকে জার্মানির সর্ববৃহৎ মিউনিসিপ্যাল সঞ্চয়ী ব্যাংক। কোলন ও বন অঞ্চলে ১০ লক্ষেরও বেশি গ্রাহককে সেবা দেওয়া এই প্রতিষ্ঠানটি রাইনল্যান্ড এলাকার স্থানীয় ব্যবসা ও সংস্কৃতিতে মূল ভূমিকা পালন করে।',
    foundingStory_de: 'Die Sparkasse KölnBonn ist die nach Bilanzsumme größte kommunale Sparkasse Deutschlands mit Sitz in Köln und Bonn. Sie betreut rund eine Million Kunden in der Metropolregion Köln/Bonn.',
    category: 'German Municipal Sparkasse (Zweckverband Köln/Bonn)',
    category_bn: 'জার্মান মিউনিসিপ্যাল সঞ্চয়ী ব্যাংক (স্পারকাশে)',
    category_de: 'Kommunale Sparkasse (BaFin-ID: 100045)',
    coreStrengths: [
      'Largest municipal savings bank in Germany with unparalleled Rhineland branch presence',
      'Free access to Germany’s largest ATM network (23,000+ Sparkasse cash machines)',
      'Award-winning Sparkasse App rated #1 for consumer banking in Germany',
      '100% deposit security via the Sparkassen-Finanzgruppe institutional protection scheme'
    ],
    coreStrengths_bn: [
      'কোলন ও বন অঞ্চলের সর্ববৃহৎ শাখা ও এটিএম নেটওয়ার্ক',
      'জার্মানির ২৩,০০০ এর বেশি স্পারকাশে এটিএম থেকে সম্পূর্ণ বিনামূল্যে টাকা উত্তোলনের সুবিধা',
      'জার্মানির এক নম্বর রেটেড "Sparkasse" মোবাইল ব্যাংকিং অ্যাপ',
      'স্পারকাশেন-ফিনান্সগ্রুপের শতভাগ নিরাপদ প্রাতিষ্ঠানিক আমানত গ্যারান্টি'
    ],
    coreStrengths_de: [
      'Größte kommunale Sparkasse Deutschlands in der Region Köln/Bonn',
      'Kostenlose Bargeldabhebung an bundesweit über 23.000 Sparkassen-Geldautomaten',
      'Testsieger-Banking-App der Sparkasse mit Fotoüberweisung und Giropay/Wero',
      'Vollständige Institutssicherung durch die Sparkassen-Finanzgruppe'
    ],
    blzMain: '37050198',
    blzFormatted: '370 501 98',
    swiftHo: 'COLSDE33',
    ibanExample: 'DE61 3705 0198 0123 4567 89',
    popularApp: 'Sparkasse App & pushTAN App',
    customerCare: '+49 (0)221 226-0 (Köln/Bonn Service)',
    sepaInstantLimit: 'Up to €100,000 per SEPA Instant transfer',
    depositProtection: 'Sparkassen-Finanzgruppe Institutssicherung',
    bafinId: '100045'
  },
  'berliner-sparkasse': {
    established: '1818 (Founded by the Berlin City Council as Berlin’s first savings institution)',
    foundingStory: 'Berliner Sparkasse (operating as a branch of Landesbank Berlin AG) is one of Germany’s oldest and most historic savings banks, serving the federal capital for over two centuries. Headquartered on Alexanderplatz in Berlin, it serves approximately 1.5 million customers and is the premier retail banking provider in the German capital.',
    foundingStory_bn: 'বার্লিনার স্পারকাশে (Berliner Sparkasse) জার্মানির রাজধানী বার্লিনের সর্বপ্রাচীন ও প্রধান সঞ্চয়ী ব্যাংক, যা ১৮১৮ সালে প্রতিষ্ঠিত হয়েছিল। আলেকজান্ডারপ্লাটজে প্রধান কার্যালয় বিশিষ্ট এই ব্যাংকটি বার্লিনের ১৫ লক্ষাধিক নাগরিককে ব্যাংকিং সেবা দেয়।',
    foundingStory_de: 'Die Berliner Sparkasse (Niederlassung der Landesbank Berlin AG) mit Sitz am Alexanderplatz ist das marktführende Kreditinstitut in der Bundeshauptstadt Berlin mit rund 1,5 Millionen Kunden.',
    category: 'Capital City Savings Bank (Landesbank Berlin AG Branch)',
    category_bn: 'বার্লিন রাজধানীর প্রধান সঞ্চয়ী ব্যাংক',
    category_de: 'Hauptstadt-Sparkasse (BaFin-ID: 100050)',
    coreStrengths: [
      'Market leader in Berlin with the city’s densest branch and self-service ATM network',
      'Comprehensive public and private account offerings for Berlin residents, startups, and students',
      'Nationwide fee-free cash access across all 23,000+ German Sparkassen ATMs',
      'Complete safety under the Sparkassen-Finanzgruppe institutional deposit protection system'
    ],
    coreStrengths_bn: [
      'বার্লিনের প্রতিটি বরো ও এলাকায় সবচেয়ে বিস্তৃত শাখা এবং এটিএম বুথ',
      'বার্লিনের ছাত্রছাত্রী, পেশাজীবী ও স্টার্টআপদের জন্য বিশেষ ব্যাংকিং সুবিধা',
      'সারাদেশে ২৩,০০০ এর বেশি স্পারকাশে এটিএম থেকে বিনামূল্যে ক্যাশ উত্তোলনের সুবিধা',
      'স্পারকাশেন-ফিনান্সগ্রুপের শতভাগ নিরাপদ প্রাতিষ্ঠানিক আমানত সুরক্ষা'
    ],
    coreStrengths_de: [
      'Marktführer in Berlin mit dem dichtesten Filial- und SB-Standortnetz der Hauptstadt',
      'Spezielles Girokonto für Studierende, Auszubildende und Berliner Gründer',
      'Kostenlose Bargeldabhebung an allen Sparkassen-Automaten deutschlandweit',
      'Sicherheit durch die Institutssicherung der Sparkassen-Finanzgruppe'
    ],
    blzMain: '10050000',
    blzFormatted: '100 500 00',
    swiftHo: 'BELADEBE',
    ibanExample: 'DE18 1005 0000 0112 2334 45',
    popularApp: 'Sparkasse App & pushTAN',
    customerCare: '+49 (0)30 869 869 69 (Berlin Hotline 24/7)',
    sepaInstantLimit: 'Up to €100,000 per instant transaction',
    depositProtection: 'Sparkassen-Finanzgruppe Institutssicherung',
    bafinId: '100050'
  },
  'stadtsparkasse-muenchen': {
    established: '1824 (Founded by the Magistrate of the Royal Capital and Residence City of Munich)',
    foundingStory: 'Stadtsparkasse München is the market leader in retail and commercial banking in the Bavarian state capital Munich, serving over 800,000 customers. Headquartered on Sparkassenstraße in Munich’s city center, the bank provides extensive financial services, sustainable regional loans, and real estate financing.',
    foundingStory_bn: 'স্টাটস্পারকাশে মিউনিখ (Stadtsparkasse München) বাভারিয়ার রাজধানী মিউনিখের শীর্ষস্থানীয় মিউনিসিপ্যাল ব্যাংক, যা ১৮২৪ সালে প্রতিষ্ঠিত হয়। ৮ লক্ষাধিক গ্রাহককে সেবা দেওয়া এই প্রতিষ্ঠানটি মিউনিখের অর্থনীতি ও রিয়েল এস্টেটের অন্যতম চালিকাশক্তি।',
    foundingStory_de: 'Die Stadtsparkasse München ist mit rund 800.000 Kunden die marktführende Bank für Privat- und Firmenkunden in der bayerischen Landeshauptstadt München mit Sitz in der Sparkassenstraße.',
    category: 'Bavarian Municipal Sparkasse (BaFin ID #100055)',
    category_bn: 'বাভারিয়ান মিউনিসিপ্যাল সঞ্চয়ী ব্যাংক',
    category_de: 'Bayerische Stadtsparkasse (BaFin-ID: 100055)',
    coreStrengths: [
      'Leading financial partner for private individuals and business enterprises in Munich',
      'Densest ATM and advisory branch network across all Munich metropolitan districts',
      'Top-rated mobile banking app with instant SEPA and digital girocard / Apple Pay',
      'Backed by the institutional guarantee scheme of the German Sparkassen Finance Group'
    ],
    coreStrengths_bn: [
      'মিউনিখ শহরের বাসিন্দাদের এবং বাণিজ্যিক উদ্যোক্তাদের বিশ্বস্ত আর্থিক পার্টনার',
      'মিউনিখের সকল গুরুত্বপূর্ণ মেট্রোপলিটন এলাকায় শাখা ও এটিএম সুবিধা',
      'অ্যাপল পে ও গুগল পে সমন্বিত ডিজিটাল জিরোকার্ড এবং তাত্ক্ষণিক সেপা পেমেন্ট',
      'স্পারকাশেন-ফিনান্সগ্রুপের শতভাগ নিরাপদ প্রাতিষ্ঠানিক আমানত সুরক্ষা'
    ],
    coreStrengths_de: [
      'Marktführer in der Metropolregion München für Privatkunden und Mittelstand',
      'Dichtestes Geldautomaten- und Beratungsnetz in ganz München',
      'Echtzeit-Überweisungen und Apple Pay / Google Pay mit digitaler Sparkassen-Card',
      'Volle Institutssicherung im Sparkassenverband Bayern'
    ],
    blzMain: '70150000',
    blzFormatted: '701 500 00',
    swiftHo: 'SSKMDEMM',
    ibanExample: 'DE52 7015 0000 0987 6543 21',
    popularApp: 'Sparkasse App & pushTAN',
    customerCare: '+49 (0)89 2167-0 (München Service)',
    sepaInstantLimit: 'Up to €100,000 per instant transaction',
    depositProtection: 'Sparkassen-Finanzgruppe Institutssicherung',
    bafinId: '100055'
  },
  'haspa-hamburger-sparkasse': {
    established: '1827 (Founded as Hamburger Spar-Casse von 1827 in the Free Hanseatic City)',
    foundingStory: 'Hamburger Sparkasse (Haspa) is the largest free savings bank in Germany, serving roughly 1.5 million customers across the Hamburg metropolitan region. Headquartered on Wikingerweg in Hamburg, Haspa combines neighborhood banking through over 100 neighborhood branch hubs with advanced digital banking tools.',
    foundingStory_bn: 'হামবুর্গার স্পারকাশে (Haspa) জার্মানির বৃহত্তম স্বাধীন সঞ্চয়ী ব্যাংক, যা ১৮২৭ সালে প্রতিষ্ঠিত। হামবুর্গের বন্দর ও মেট্রোপলিটন এলাকার ১৫ লক্ষাধিক নাগরিককে সেবা দেওয়া এই ঐতিহ্যবাহী ব্যাংকটি স্থানীয় অর্থনীতি ও উদ্যোক্তাদের প্রধান সহায়ক।',
    foundingStory_de: 'Die Hamburger Sparkasse AG (Haspa) ist die größte Sparkasse Deutschlands mit Sitz in Hamburg. Sie betreut rund 1,5 Millionen Privat- und Firmenkunden in der Metropolregion Hamburg.',
    category: 'Hanseatic Savings Bank (Haspa AG / BaFin ID #100060)',
    category_bn: 'হ্যানসিয়াটিক সঞ্চয়ী ব্যাংক (হামবুর্গ)',
    category_de: 'Freie Sparkasse / Hamburger Sparkasse AG (BaFin-ID: 100060)',
    coreStrengths: [
      'Market leader in the Free and Hanseatic City of Hamburg with over 100 neighborhood branches',
      'HaspaJoker loyalty account program offering regional event discounts and cashback benefits',
      'Free cash access across all 23,000+ Sparkassen ATMs throughout Germany',
      'Protected under the institutional protection scheme of the Sparkassen-Finanzgruppe'
    ],
    coreStrengths_bn: [
      'হামবুর্গ নগরীর প্রতিটি পাড়া ও মহল্লায় ১০০টিরও বেশি নেইবারহুড ব্রাঞ্চ হাব',
      'হাসপাজোকার (HaspaJoker) অ্যাকাউন্টের মাধ্যমে আঞ্চলিক ইভেন্ট ডিসকাউন্ট ও ক্যাশব্যাক সুবিধা',
      'জার্মানির ২৩,০০০ এর বেশি স্পারকাশে এটিএম থেকে বিনামূল্যে ক্যাশ উত্তোলনের সুবিধা',
      'স্পারকাশেন-ফিনান্সগ্রুপের সম্পূর্ণ নিরাপদ প্রাতিষ্ঠানিক আমানত সুরক্ষা'
    ],
    coreStrengths_de: [
      'Marktführer in Hamburg mit über 100 modernen Nachbarschaftsfilialen',
      'HaspaJoker Mehrwertkonto mit exklusiven Event-Rabatten, Cashbacks und Reiseschutz',
      'Kostenlose Bargeldversorgung bundesweit im Sparkassennetz',
      'Institutssicherung der Sparkassen-Finanzgruppe'
    ],
    blzMain: '20050550',
    blzFormatted: '200 505 50',
    swiftHo: 'HASPDEHH',
    ibanExample: 'DE94 2005 0550 0123 4567 89',
    popularApp: 'Haspa App & Sparkasse App',
    customerCare: '+49 (0)40 3578-0 (Hamburg Hotline)',
    sepaInstantLimit: 'Up to €100,000 per instant transfer',
    depositProtection: 'Sparkassen-Finanzgruppe Institutssicherung',
    bafinId: '100060'
  },
  'frankfurter-sparkasse': {
    established: '1822 (Founded as Polytechnische Gesellschaft savings bank in Frankfurt)',
    foundingStory: 'Frankfurter Sparkasse is the fourth-largest savings bank in Germany and the premier retail financial institution in the Frankfurt/Rhine-Main financial center, serving over 500,000 clients. Headquartered on Neue Mainzer Straße in Frankfurt, it operates as a subsidiary of Landesbank Hessen-Thüringen (Helaba).',
    foundingStory_bn: 'ফ্রাঙ্কফুর্টার স্পারকাশে (Frankfurter Sparkasse) জার্মানির চতুর্থ বৃহত্তম সঞ্চয়ী ব্যাংক এবং ফ্রাঙ্কফুর্ট ফাইন্যান্সিয়াল সেন্টারের প্রধান রিটেইল ব্যাংক। ১৮২২ সালে প্রতিষ্ঠিত এই প্রতিষ্ঠানটি ৫ লক্ষাধিক গ্রাহককে নির্ভরযোগ্য ব্যাংকিং সেবা প্রদান করে।',
    foundingStory_de: 'Die Frankfurter Sparkasse ist die viertgrößte Sparkasse in Deutschland mit Sitz in Frankfurt am Main und eine Tochtergesellschaft der Landesbank Hessen-Thüringen (Helaba).',
    category: 'Frankfurt Regional Sparkasse (Helaba Group / BaFin ID #100065)',
    category_bn: 'ফ্রাঙ্কফুর্ট আঞ্চলিক সঞ্চয়ী ব্যাংক (হেলাবা গ্রুপ)',
    category_de: 'Regionalbank / Sparkasse Frankfurt (BaFin-ID: 100065)',
    coreStrengths: [
      'Leading retail bank in the Frankfurt financial district with unmatched branch density',
      'Full integration with Helaba group capital markets and international treasury corridors',
      'Free ATM access at over 23,000 Sparkassen ATMs nationwide in Germany',
      '100% deposit protection backed by the German Savings Banks Finance Group'
    ],
    coreStrengths_bn: [
      'ফ্রাঙ্কফুর্টের আন্তর্জাতিক ব্যাংকিং ডিস্ট্রিক্টে বিস্তৃত শাখা ও এটিএম সুবিধা',
      'হেলাবা গ্রুপের মাধ্যমে আন্তর্জাতিক ট্রেজারি ও ইনভেস্টমেন্ট ব্যাংকিং সংযোগ',
      'সারা দেশে ২৩,০০০ এর বেশি স্পারকাশে এটিএম থেকে বিনামূল্যে ক্যাশ উত্তোলনের সুবিধা',
      'স্পারকাশেন-ফিনান্সগ্রুপের শতভাগ নিরাপদ প্রাতিষ্ঠানিক আমানত সুরক্ষা'
    ],
    coreStrengths_de: [
      'Marktführende Sparkasse im Finanzzentrum Frankfurt am Main',
      'Verbindung von lokaler Filialnähe mit der Kapitalmarktkraft der Helaba',
      'Kostenlose Bargeldabhebung im gesamten Sparkassennetz',
      'Sicherung durch das Institutssicherungssystem der Sparkassen-Finanzgruppe'
    ],
    blzMain: '50050201',
    blzFormatted: '500 502 01',
    swiftHo: 'FRASDEFF',
    ibanExample: 'DE38 5005 0201 0112 2334 45',
    popularApp: 'Sparkasse App & pushTAN',
    customerCare: '+49 (0)69 2641-0 (Frankfurt Kundencenter)',
    sepaInstantLimit: 'Up to €100,000 per instant transaction',
    depositProtection: 'Sparkassen-Finanzgruppe Institutssicherung',
    bafinId: '100065'
  },
  'hypovereinsbank': {
    established: '1869 (Formed by merger of Bayerische Vereinsbank & Bayerische Hypotheken- und Wechsel-Bank)',
    foundingStory: 'HypoVereinsbank (UniCredit Bank GmbH) is one of Germany’s largest major commercial banks, operating as the core German subsidiary of the pan-European UniCredit Group. Headquartered on Arabellastraße in Munich, HVB serves over 2.5 million clients with comprehensive corporate, wealth, and private banking solutions.',
    foundingStory_bn: 'হাইপোভেরাইনসব্যাংক (HypoVereinsbank / UniCredit Bank GmbH) জার্মানির অন্যতম প্রধান বাণিজ্যিক ব্যাংক, যা প্যান-ইউরোপীয় ইউনিক্রেডিট গ্রুপের জার্মান শাখা হিসেবে পরিচালিত হয়। মিউনিখে প্রধান কার্যালয় বিশিষ্ট এই ব্যাংকটি ২৫ লক্ষাধিক গ্রাহককে বাণিজ্যিক ও ওয়েলথ ব্যাংকিং সেবা দেয়।',
    foundingStory_de: 'Die UniCredit Bank GmbH (bekannt unter der Marke HypoVereinsbank / HVB) mit Sitz in München ist eine deutsche Großbank und Teil der europäischen Bankengruppe UniCredit mit rund 2,5 Millionen Kunden.',
    category: 'German Major Commercial Bank (UniCredit Group / BaFin ID #100070)',
    category_bn: 'জার্মান প্রধান বাণিজ্যিক ব্যাংক (ইউনিক্রেডিট গ্রুপ)',
    category_de: 'Deutsche Großbank / UniCredit Gruppe (BaFin-ID: 100070)',
    coreStrengths: [
      'Seamless cross-border banking across Germany, Italy, Austria, and Central/Eastern Europe',
      'Founding member of the German Cash Group offering free cash withdrawals at 7,000+ ATMs',
      'Premier private banking, corporate structuring, and sustainable trade finance services',
      'Protected under statutory deposit protection (€100,000 EdB) and the BdB voluntary deposit fund'
    ],
    coreStrengths_bn: [
      'জার্মানি, ইতালি, অস্ট্রিয়া ও পূর্ব ইউরোপজুড়ে সহজ ক্রস-বর্ডার ব্যাংকিং সুবিধা',
      'ক্যাশ গ্রুপের প্রতিষ্ঠাতা সদস্য হিসেবে ৭,০০০+ এটিএম থেকে বিনামূল্যে ক্যাশ উত্তোলনের সুযোগ',
      'প্রিমিয়ার প্রাইভেট ব্যাংকিং ও আন্তর্জাতিক ট্রেড ফাইন্যান্সিং সেবা',
      'আইনগত €১০০,০০০ (EdB) ও অতিরিক্ত প্রাইভেট ব্যাংক আমানত সুরক্ষা তহবিল'
    ],
    coreStrengths_de: [
      'Nahtloses europäisches Banking in Deutschland, Italien, Österreich und CEE',
      'Kostenlose Bargeldabhebung an allen rund 7.000 Geldautomaten der Cash Group',
      'Führende Beratung für vermögende Privatkunden (Wealth Management) und Unternehmenskunden',
      'Gesetzliche Einlagensicherung (100.000 €) plus BdB-Einlagensicherungsfonds'
    ],
    blzMain: '70020270',
    blzFormatted: '700 202 70',
    swiftHo: 'HYVEDEMM',
    ibanExample: 'DE83 7002 0270 0987 6543 21',
    popularApp: 'HVB Mobile Banking & HVB photoTAN',
    customerCare: '+49 (0)89 3780 (Munich Central)',
    sepaInstantLimit: 'Up to €100,000 per instant transaction',
    depositProtection: '100.000 € gesetzlich (EdB) + Einlagensicherungsfonds des BdB',
    bafinId: '100070'
  },
  'gls-bank': {
    established: '1974 (Founded in Bochum by Wilhelm Ernst Barkhoff as the world’s first socio-ecological bank)',
    foundingStory: 'GLS Gemeinschaftsbank eG is the world’s first and Germany’s largest socio-ecological cooperative ethical bank, headquartered in Bochum. GLS Bank exclusively finances sustainable projects in organic agriculture, renewable energies, social housing, education, and health, operating on full transparency regarding every loaned euro.',
    foundingStory_bn: 'জিএলএস ব্যাংক (GLS Gemeinschaftsbank eG) বিশ্বের প্রথম এবং জার্মানির সর্ববৃহৎ সামাজিক ও পরিবেশবান্ধব এথিক্যাল সমবায় ব্যাংক, যা ১৯৭৪ সালে বখুমে প্রতিষ্ঠিত হয়। ব্যাংকটি শুধুমাত্র জৈব কৃষি, নবায়নযোগ্য শক্তি, শিক্ষা ও সামাজিক কল্যাণমূলক টেকসই প্রকল্পে ঋণ প্রদান করে।',
    foundingStory_de: 'Die GLS Gemeinschaftsbank eG mit Sitz in Bochum ist die erste sozial-ökologische Universalbank der Welt. Sie finanziert ausschließlich nachhaltige Projekte in den Bereichen erneuerbare Energien, Bio-Landwirtschaft, Bildung und soziales Wohnen.',
    category: 'German Ethical & Sustainable Cooperative Bank (BaFin ID #100075)',
    category_bn: 'জার্মান পরিবেশবান্ধব ও এথিক্যাল সমবায় ব্যাংক',
    category_de: 'Sozial-ökologische Genossenschaftsbank (BaFin-ID: 100075)',
    coreStrengths: [
      'Pioneer of sustainable banking with 100% transparent publication of all loaned funds',
      'Strict exclusion criteria banning fossil fuels, arms manufacturing, and speculative derivatives',
      'Access to over 15,000 fee-free ATMs within the Volksbanken and Raiffeisenbanken network (BankCard ServiceNetz)',
      '100% deposit security via the BVR Institutional Protection Scheme'
    ],
    coreStrengths_bn: [
      'শতভাগ স্বচ্ছতা নিয়ে টেকসই ও পরিবেশবান্ধব ব্যাংকিংয়ের অগ্রদূত',
      'অস্ত্র, জীবাশ্ম জ্বালানি বা ক্ষতিকর খাতে বিনিয়োগ সম্পূর্ণ নিষিদ্ধ',
      'ফোক্সব্যাংক ও রাইফাইজেনব্যাংকের ১৫,০০০+ এটিএম থেকে বিনামূল্যে ক্যাশ উত্তোলনের সুবিধা',
      'বিভিআর (BVR) প্রাতিষ্ঠানিক আমানত সুরক্ষায় সম্পূর্ণ নিরাপদ'
    ],
    coreStrengths_de: [
      'Vollständige Transparenz: Veröffentlichung jedes einzelnen vergebenen Kredits',
      'Strikte Positiv- und Ausschlusskriterien für ökologische und soziale Investitionen',
      'Kostenlose Bargeldversorgung an über 15.000 Geldautomaten im BankCard ServiceNetz',
      'Institutssicherung des Bundesverbandes der Deutschen Volksbanken und Raiffeisenbanken (BVR)'
    ],
    blzMain: '43060967',
    blzFormatted: '430 609 67',
    swiftHo: 'GENODED1GLS',
    ibanExample: 'DE47 4306 0967 0123 4567 89',
    popularApp: 'GLS Banking App & SecureGo plus',
    customerCare: '+49 (0)234 5797-100 (Bochum Hotline)',
    sepaInstantLimit: 'Up to €100,000 per instant transaction',
    depositProtection: 'BVR Institutssicherung (Institutional Protection Scheme)',
    bafinId: '100075'
  },
  'n26-bank': {
    established: '2013 (Founded in Berlin by Valentin Stalf & Maximilian Tayenthal; full BaFin license in 2016)',
    foundingStory: 'N26 Bank SE is Germany’s premier digital neobank and one of Europe’s leading mobile-first banking pioneers, serving over 8 million customers across 24 European markets. Headquartered in Berlin on Klosterstraße, N26 operates entirely 100% paperless on smartphone devices with instant push notifications, virtual Mastercard debit cards, and sub-accounts (Spaces).',
    foundingStory_bn: 'এন২৬ ব্যাংক (N26 Bank SE) জার্মানির শীর্ষস্থানীয় ডিজিটাল নিওব্যাংক এবং ইউরোপের অন্যতম জনপ্রিয় মোবাইল-ফার্স্ট ব্যাংক, যার সদর দপ্তর বার্লিনে অবস্থিত। ২০১৩ সালে প্রতিষ্ঠিত এবং পূর্ণাঙ্গ জার্মান ব্যাংকিং লাইসেন্সপ্রাপ্ত এই ব্যাংকটি ৮ মিলিয়নেরও বেশি গ্রাহককে শতভাগ পেপারলেস ব্যাংকিং সেবা দিয়ে আসছে।',
    foundingStory_de: 'Die N26 Bank SE ist eine deutsche Direktbank mit Sitz in Berlin und europäischer Vollbanklizenz der BaFin. Mit über 8 Millionen Kunden in 24 europäischen Ländern revolutioniert N26 das Smartphone-Banking mit innovativen Features wie Unterkonten (Spaces) und Echtzeit-Push-Nachrichten.',
    category: 'German Digital Neobank (BaFin Full Banking License ID #100080)',
    category_bn: 'জার্মান ডিজিটাল নিওব্যাংক (BaFin ফুল লাইসেন্স #১০০০MD)',
    category_de: 'Deutsche Smartphone-Bank / Neobank (BaFin-ID: 100080)',
    coreStrengths: [
      'Account opening in under 8 minutes with instant German IBAN (DE...) and virtual Mastercard',
      'Instant SEPA transfers, sub-accounts (Spaces) with shared banking features, and Crypto integration',
      'Real-time transaction push notifications and advanced in-app biometric card security controls',
      'Statutory deposit protection up to €100,000 per depositor by the German Deposit Guarantee Scheme (EdB)'
    ],
    coreStrengths_bn: [
      'মাত্র ৮ মিনিটে স্মার্টফোনে তাৎক্ষণিক জার্মান আইবান (DE...) ও ভার্চুয়াল মাস্টারকার্ড অ্যাকাউন্ট',
      'রিয়েল-টাইম সেপা ইনস্ট্যান্ট পেমেন্ট, সাব-অ্যাকাউন্ট (Spaces) ও বাজেট ট্র্যাকিং সুবিধা',
      'প্রতিটি লেনদেনের সাথে সাথে পুশ নোটিফিকেশন ও বায়োমেট্রিক সিকিউরিটি কন্ট্রোল',
      'জার্মান সরকারের সংবিধিবদ্ধ EdB স্কিমের অধীনে €১০০,০০০ পর্যন্ত সম্পূর্ণ নিরাপদ'
    ],
    coreStrengths_de: [
      'Kontoeröffnung in unter 8 Minuten direkt auf dem Smartphone mit deutscher IBAN',
      'Kostenlose Echtzeit-Überweisungen (SEPA Instant) und intelligente Unterkonten (Spaces)',
      '100% papierloses Mobile Banking mit Apple Pay, Google Pay und weltweiter Kartennutzung',
      'Volle gesetzliche deutsche Einlagensicherung bis 100.000 € durch die EdB'
    ],
    blzMain: '10011001',
    blzFormatted: '100 110 01',
    swiftHo: 'NTSBDEB1',
    ibanExample: 'DE02 1001 1001 0123 4567 89',
    popularApp: 'N26 Mobile Banking (iOS & Android)',
    customerCare: '+49 (0)30 364 285 010 (In-App Support Chat 24/7)',
    sepaInstantLimit: 'Up to €100,000 per instant transaction (free 24/7)',
    depositProtection: '100.000 € gesetzlich (Entschädigungseinrichtung deutscher Banken - EdB)',
    bafinId: '100080'
  },
  'solarisbank': {
    established: '2016 (Founded in Berlin by FinLeap; acquired full BaFin banking license in 2016)',
    foundingStory: 'Solaris SE (formerly Solarisbank) is Europe’s leading Banking-as-a-Service (BaaS) technology platform with a full German commercial banking license, headquartered in Berlin on Cuvrystraße. Solaris provides white-label modular banking APIs, IBAN issuing, digital lending, and payment infrastructure to tech leaders like Trade Republic, Samsung Pay, and ADAC.',
    foundingStory_bn: 'সোলারিস ব্যাংক (Solaris SE) ইউরোপের শীর্ষস্থানীয় ব্যাংকিং-অ্যাজ-এ-সার্ভিস (BaaS) টেকনোলজি প্ল্যাটফর্ম, যা বার্লিনে অবস্থিত এবং পূর্ণাঙ্গ জার্মান কমার্শিয়াল ব্যাংকিং লাইসেন্সপ্রাপ্ত। সোলারিস বিভিন্ন আন্তর্জাতিক ফিনটেক ও প্রযুক্তি সংস্থাকে এপিআই (API), আইবান ও পেমেন্ট সেবা প্রদান করে।',
    foundingStory_de: 'Die Solaris SE (ehemals Solarisbank) ist Europas führende Banking-as-a-Service-Plattform (BaaS) mit deutscher Vollbanklizenz mit Sitz in Berlin. Solaris ermöglicht es Technologieunternehmen, nahtlos Finanzdienstleistungen und deutsche IBANs anzubieten.',
    category: 'German Banking-as-a-Service (BaaS) Tech Bank (BaFin ID #100085)',
    category_bn: 'জার্মান ব্যাংকিং-অ্যাজ-এ-সার্ভিস (BaaS) প্ল্যাটফর্ম ব্যাংক',
    category_de: 'Tech-Unternehmen mit deutscher Vollbanklizenz (BaFin-ID: 100085)',
    coreStrengths: [
      'Modular cloud-native RESTful APIs for instant German IBAN generation and account issuance',
      'Powers leading European fintech unicorns, crypto custody accounts, and digital credit cards',
      'Direct integration with Deutsche Bundesbank clearing, SEPA Instant, and TARGET2 rails',
      'Statutory deposit protection of €100,000 per end-customer under German law (EdB)'
    ],
    coreStrengths_bn: [
      'মডুলার ক্লাউড এপিআই-এর মাধ্যমে তাৎক্ষণিক জার্মান আইবান তৈরি ও অ্যাকাউন্ট চালুর সুবিধা',
      'ইউরোপের শীর্ষ ফিনটেক প্রতিষ্ঠান ও ডিজিটাল ক্রেডিট কার্ডের ব্যাকএন্ড ব্যাংকিং শক্তি',
      'ডয়চে বুন্দেসব্যাংকের মাধ্যমে সরাসরি সেপা ও ক্লিয়ারিং সংযোগ',
      'জার্মান সরকারের সংবিধিবদ্ধ EdB স্কিমের অধীনে গ্রাহক প্রতি €১০০,০০০ আমানত সুরক্ষা'
    ],
    coreStrengths_de: [
      'Führende API-getriebene Banking-as-a-Service Plattform in Europa',
      'Infrastrukturpartner für Trade Republic, Samsung Pay und führende Fintechs',
      'Vollständige Anbindung an Bundesbank-Clearing und SEPA Instant',
      'Gesetzliche deutsche Einlagensicherung von 100.000 € je Kunde (EdB)'
    ],
    blzMain: '11010100',
    blzFormatted: '110 101 00',
    swiftHo: 'SOISDEB1',
    ibanExample: 'DE15 1101 0100 0112 2334 45',
    popularApp: 'Solaris Developer & Partner Portal',
    customerCare: '+49 (0)30 2325 5780 (Berlin Business Support)',
    sepaInstantLimit: 'Up to €100,000 per instant transaction',
    depositProtection: '100.000 € gesetzlich (EdB)',
    bafinId: '100085'
  },
  'deutsche-bundesbank': {
    established: '1957 (Established by the Federal Bank Act, succeeding Bank deutscher Länder)',
    foundingStory: 'The Deutsche Bundesbank is the central bank of the Federal Republic of Germany and an integral part of the Eurosystem and the European System of Central Banks (ESCB). Headquartered in Frankfurt am Main on Wilhelm-Epstein-Straße, the Bundesbank manages Germany’s official monetary reserves (including the world’s second-largest gold reserves) and oversees payment systems.',
    foundingStory_bn: 'ডয়চে বুন্দেসব্যাংক (Deutsche Bundesbank) জার্মানির কেন্দ্রীয় ব্যাংক এবং ইউরোপীয় সেন্ট্রাল ব্যাংক সিস্টেম (Eurosystem)-এর অন্যতম প্রধান স্তম্ভ। ফ্রাঙ্কফুর্টে প্রধান কার্যালয় অবস্থিত এই ব্যাংকটি জার্মানির মুদ্রা সরবরাহ, বৈদেশিক মুদ্রার রিজার্ভ ও বিশ্বের দ্বিতীয় বৃহত্তম স্বর্ণের রিজার্ভ সংরক্ষণ করে।',
    foundingStory_de: 'Die Deutsche Bundesbank ist die Notenbank der Bundesrepublik Deutschland und integraler Bestandteil des Europäischen Systems der Zentralbanken (ESZB) mit Sitz in Frankfurt am Main. Sie sichert die Geldwertstabilität des Euro und überwacht das deutsche Zahlungsverkehrssystem.',
    category: 'German Central Bank (Eurosystem Anchor / BaFin Partner)',
    category_bn: 'জার্মানির কেন্দ্রীয় ব্যাংক (ইউরোসিস্টেম)',
    category_de: 'Zentralnotenbank der Bundesrepublik Deutschland (BLZ: 50000000)',
    coreStrengths: [
      'Custodian of the Euro currency and Germany’s national monetary reserves including 3,350+ tons of gold',
      'Operates the core national settlement infrastructure for TARGET2, TIPS, and SEPA clearing',
      'Co-regulator of all German credit institutions alongside the BaFin and ECB',
      'Administers the official German Bankleitzahlen (BLZ) directory and clearing routing protocols'
    ],
    coreStrengths_bn: [
      'ইউরো মুদ্রার স্থিতিশীলতা এবং জার্মানির ৩,৩৫০ টনের বেশি স্বর্ণ রিজার্ভের নিয়ন্ত্রক',
      'টার্গেট২ (TARGET2), টিপস (TIPS) ও সেপা ক্লিয়ারিং সিস্টেমের মূল পরিচালনাকারী',
      'বাফিন (BaFin) ও ইউরোপীয় সেন্ট্রাল ব্যাংকের সাথে সকল ব্যাংকের প্রধান নিয়ন্ত্রক',
      'জার্মানির অফিশিয়াল ব্যাংকলাইৎজাহল (BLZ) কোড ব্যবস্থার প্রতিষ্ঠাতা ও পরিচালক'
    ],
    coreStrengths_de: [
      'Hüterin der Währungsstabilität und Verwalterin der deutschen Währungs- und Goldreserven',
      'Betreiberin des deutschen Großbetragszahlungssystems (TARGET) und von TIPS',
      'Gemeinsame Bankenaufsicht mit der BaFin und der Europäischen Zentralbank (EZB)',
      'Herausgeberin und Verwalterin des offiziellen deutschen Bankleitzahlen-Verzeichnisses'
    ],
    blzMain: '50000000',
    blzFormatted: '500 000 00',
    swiftHo: 'MARKDEFF',
    ibanExample: 'DE02 5000 0000 0000 0000 01',
    popularApp: 'Bundesbank Publikationen & Cash App',
    customerCare: '+49 (0)69 9566-3511 (Frankfurt Zentrale)',
    sepaInstantLimit: 'Sovereign / Central Bank settlement hub',
    depositProtection: 'Sovereign institution of the Federal Republic of Germany',
    bafinId: '100001'
  }
};

/**
 * Helper to build an exhaustive, structured BankArticle for any German bank
 */
function buildGermanBankArticle(bank: any): BankArticle {
  const bankId = bank.id;
  const bankNameEn = bank.name;
  const bankNameBn = bank.name_bn || bank.name;
  const bankNameDe = bank.name;
  const shortName = bank.short_name || bank.name;
  const blzDigits = bank.blz || bank.bank_code || '50070010';
  const blzFormatted = `${blzDigits.slice(0, 3)} ${blzDigits.slice(3, 6)} ${blzDigits.slice(6, 8)}`;
  const swiftCode = bank.swift_code || 'DEUTDEDD';
  const headOffice = bank.head_office || 'Frankfurt am Main, Germany';
  const headOfficeBn = bank.head_office_bn || 'ফ্রাঙ্কফুর্ট আম মাইন, জার্মানি';
  const establishedYear = bank.established || '1870';
  const bafinId = bank.bafin_id || '100003';
  const ibanStructure = bank.iban_structure || `DEkk ${blzDigits.slice(0, 4)} ${blzDigits.slice(4, 8)} CCCC CCCC CC`;

  const fallbackKnowledge: GermanBankKnowledge = {
    established: `${establishedYear} (Germany)`,
    foundingStory: `${bankNameEn} is an authorized and regulated German credit institution operating under the supervision of BaFin and the Deutsche Bundesbank. It provides universal banking services, SEPA transfers, and commercial financial solutions across Germany and the European Union.`,
    foundingStory_bn: `${bankNameBn} জার্মানির বাফিন (BaFin) ও ডয়চে বুন্দেসব্যাংক অনুমোদিত একটি শীর্ষস্থানীয় ব্যাংকিং প্রতিষ্ঠান, যা জার্মানি ও ইউরোপীয় ইউনিয়নজুড়ে ব্যক্তিগত ও বাণিজ্যিক ব্যাংকিং সেবা প্রদান করে।`,
    foundingStory_de: `${bankNameDe} ist ein von der BaFin und der Deutschen Bundesbank beaufsichtigtes deutsches Kreditinstitut mit umfassenden Dienstleistungen im SEPA-Zahlungsverkehr und Privatkundengeschäft.`,
    category: `German Credit Institution (BaFin ID #${bafinId})`,
    category_bn: `জার্মান বাণিজ্যিক ব্যাংক (BaFin আইডি #${bafinId})`,
    category_de: `Deutsches Kreditinstitut (BaFin-ID: ${bafinId})`,
    coreStrengths: [
      `Official 8-digit Bankleitzahl (BLZ: ${blzDigits}) for domestic and SEPA routing`,
      `Instant SEPA Credit Transfers (SCT Inst) settled 24/7 across the Eurozone`,
      `Direct clearing integration with the Deutsche Bundesbank and TARGET2 rails`,
      `Statutory deposit protection of €100,000 per depositor under German law (EdB)`
    ],
    coreStrengths_bn: [
      `অভ্যন্তরীণ ও সেপা লেনদেনের জন্য অফিশিয়াল ৮-ডিজিট ব্যাংকলাইৎজাহল (BLZ: ${blzDigits})`,
      `সারা ইউরোপজুড়ে ২৪/৭ তাৎক্ষণিক সেপা ইনস্ট্যান্ট (SEPA Instant) পেমেন্ট সুবিধা`,
      `ডয়চে বুন্দেসব্যাংকের সাথে সরাসরি প্রাতিষ্ঠানিক ক্লিয়ারিং ও সেটেলমেন্ট সংযোগ`,
      `জার্মান সরকারের সংবিধিবদ্ধ EdB স্কিমের অধীনে গ্রাহক প্রতি €১০০,০০০ আমানত সুরক্ষা`
    ],
    coreStrengths_de: [
      `Offizielle 8-stellige Bankleitzahl (BLZ: ${blzDigits}) für den deutschen Zahlungsverkehr`,
      `Echtzeit-Überweisungen via SEPA Instant rund um die Uhr`,
      `Direkte Anbindung an die Deutsche Bundesbank und TARGET2`,
      `Gesetzliche Einlagensicherung bis 100.000 € pro Kunde (EdB)`
    ],
    blzMain: blzDigits,
    blzFormatted: blzFormatted,
    swiftHo: swiftCode,
    ibanExample: `DE89 ${blzDigits.slice(0, 4)} ${blzDigits.slice(4, 8)} 0123 4567 89`,
    popularApp: `${shortName} Mobile Banking App`,
    customerCare: bank.website || 'https://www.bundesbank.de',
    sepaInstantLimit: 'Up to €100,000 per instant transaction',
    depositProtection: '100.000 € gesetzlich (EdB / EinSiG)',
    bafinId: bafinId
  };

  const knowledge = GERMANY_BANK_KNOWLEDGE[bankId] || fallbackKnowledge;

  const titleEn = `${bankNameEn} BLZ (${blzDigits}), German IBAN, SWIFT Code & SEPA Guide 2026`;
  const titleBn = `${bankNameBn} বিএলজেড (BLZ ${blzDigits}), আইবান (IBAN), সুইফট কোড ও সেপা গাইড ২০২৬`;
  const subtitleEn = `Complete official guide to ${shortName} 8-digit Bankleitzahl (${blzFormatted}), 22-character German IBAN, SWIFT/BIC (${swiftCode}), SEPA Instant transfers, and €100,000 BaFin deposit protection.`;
  const subtitleBn = `${shortName}-এর ৮-ডিজিটের অফিশিয়াল ব্যাংকলাইৎজাহল (${blzFormatted}), ২২-সংখ্যার জার্মান আইবান (IBAN), সুইফট কোড (${swiftCode}), সেপা ইনস্ট্যান্ট ট্রান্সফার এবং €১০০,০০০ আমানত সুরক্ষার সম্পূর্ণ তথ্য।`;
  const metaTitle = `${bankNameEn} BLZ ${blzDigits} | German IBAN, SWIFT & SEPA Guide 2026`;
  const metaDescription = `Find ${bankNameEn} official 8-digit BLZ (${blzDigits}), German IBAN (${knowledge.ibanExample}), SWIFT/BIC ${swiftCode}, SEPA Instant limits, and €100,000 EdB deposit insurance protection rules.`;

  const sections = [
    {
      id: 'overview-and-history',
      heading: `About ${bankNameEn}: History, Licensing & Regulatory Profile`,
      heading_bn: `${bankNameBn}-এর ইতিহাস, লাইসেন্স ও নিয়ন্ত্রক পরিচয়`,
      content: `
**${bankNameEn}** (${knowledge.category}) is one of Germany’s prominent credit institutions, regulated by the Federal Financial Supervisory Authority (**BaFin - Bundesanstalt für Finanzdienstleistungsaufsicht**) under BaFin ID **#${knowledge.bafinId}** and supervised jointly with the **Deutsche Bundesbank** and the European Central Bank (ECB).

### Historical Background & Corporate Overview:
${knowledge.foundingStory}

### Core Institutional Pillars:
* **Establishment & Heritage:** ${knowledge.established}
* **Headquarters & Central Clearing:** ${headOffice}
* **Supervisory Authorities:** BaFin ID #${knowledge.bafinId} / Deutsche Bundesbank
* **Primary Bankleitzahl (BLZ):** \`${blzDigits}\` (Formatted: \`${blzFormatted}\`)
* **Head Office SWIFT / BIC:** \`${swiftCode}\`
* **Official Website:** [${bank.website || 'Official Portal'}](${bank.website || 'https://www.bafin.de'})
      `.trim(),
      content_bn: `
**${bankNameBn}** (${knowledge.category_bn}) জার্মানির অন্যতম প্রধান অনুমোদিত বাণিজ্যিক ও আর্থিক প্রতিষ্ঠান। এটি জার্মানির ফেডারেল আর্থিক কর্তৃপক্ষ **বাফিন (BaFin)** কর্তৃক লাইসেন্স নম্বর **#${knowledge.bafinId}**-এর অধীনে নিবন্ধিত এবং **ডয়চে বুন্দেসব্যাংক (Deutsche Bundesbank)** ও ইউরোপীয় সেন্ট্রাল ব্যাংক (ECB)-এর সরাসরি তত্ত্বাবধানে পরিচালিত।

### ইতিহাস ও প্রাতিষ্ঠানিক পরিচিতি:
${knowledge.foundingStory_bn}

### ব্যাংকের মূল তথ্য ও প্রাতিষ্ঠানিক বিবরণ:
* **প্রতিষ্ঠা ও ইতিহাস:** ${knowledge.established}
* **প্রধান কার্যালয়:** ${headOfficeBn}
* **নিয়ন্ত্রক কর্তৃপক্ষ:** BaFin ID #${knowledge.bafinId} / Deutsche Bundesbank
* **প্রধান ব্যাংকলাইৎজাহল (BLZ):** \`${blzDigits}\` (ফরম্যাট: \`${blzFormatted}\`)
* **হেড অফিস সুইফট কোড (SWIFT / BIC):** \`${swiftCode}\`
* **অফিশিয়াল ওয়েবসাইট:** [${bank.website || 'ওয়েবসাইট দেখুন'}](${bank.website || 'https://www.bafin.de'})
      `.trim()
    },
    {
      id: 'blz-and-iban-structure',
      heading: `German Bankleitzahl (BLZ ${blzDigits}) & IBAN Architecture`,
      heading_bn: `জার্মান ব্যাংকলাইৎজাহল (BLZ ${blzDigits}) এবং আইবান (IBAN) গঠন`,
      content: `
Every German bank account uses an 8-digit **Bankleitzahl (BLZ)** allocated by the Deutsche Bundesbank. For **${bankNameEn}**, the primary clearing BLZ is **\`${blzDigits}\`**.

### Anatomy of the 8-Digit German BLZ (\`${blzFormatted}\`):
* **Digits 1–3 (\`${blzDigits.slice(0, 3)}\`): Clearing Area & Region (Clearing-Gebiet)** — Identifies the geographic Bundesbank branch clearing zone.
* **Digit 4 (\`${blzDigits.slice(3, 4)}\`): Bank Sector (Institutsgruppe)** — Indicates whether the bank is a commercial bank, Sparkasse, cooperative Volksbank, or state Landesbank.
* **Digits 5–8 (\`${blzDigits.slice(4, 8)}\`): Individual Bank Identifier (Institutsnummer)** — Uniquely identifies ${shortName} within that regional clearing district.

### German 22-Character IBAN Structure:
In Germany, all domestic and cross-border bank accounts are standardized as a 22-character International Bank Account Number (IBAN):
\`\`\`
DEkk BBBB BBBB CCCC CCCC CC
| |  |    |    |
| |  |    |    +-- 10-digit Account Number (Kontonummer, zero-padded)
| |  +----+------- 8-digit Bankleitzahl (BLZ: ${blzDigits})
| +--------------- 2-digit MOD-97 Check Digits (Prüfziffer)
+----------------- ISO Country Code for Germany ("DE")
\`\`\`
* **Example ${shortName} IBAN:** \`${knowledge.ibanExample}\`
      `.trim(),
      content_bn: `
জার্মানির ব্যাংকিং ব্যবস্থায় প্রতিটি ব্যাংকের জন্য ডয়চে বুন্দেসব্যাংক কর্তৃক ৮-ডিজিটের একটি অনন্য **ব্যাংকলাইৎজাহল (Bankleitzahl - BLZ)** নির্ধারিত থাকে। **${bankNameBn}**-এর প্রধান ক্লিয়ারিং বিএলজেড হলো **\`${blzDigits}\`**।

### ৮-ডিজিটের জার্মান বিএলজেড (BLZ \`${blzFormatted}\`)-এর গঠন:
* **প্রথম ৩ ডিজিট (\`${blzDigits.slice(0, 3)}\`): ক্লিয়ারিং অঞ্চল (Clearing-Gebiet)** — বুন্দেসব্যাংকের আঞ্চলিক ভৌগোলিক ক্লিয়ারিং জোন নির্দেশ করে।
* **৪র্থ ডিজিট (\`${blzDigits.slice(3, 4)}\`): ব্যাংক সেক্টর (Institutsgruppe)** — প্রতিষ্ঠানটি বাণিজ্যিক ব্যাংক, স্পারকাশে, সমবায় ব্যাংক নাকি ল্যান্ডেস ব্যাংক তা বোঝায়।
* **শেষ ৪ ডিজিট (\`${blzDigits.slice(4, 8)}\`): স্বতন্ত্র ব্যাংক নম্বর (Institutsnummer)** — ওই অঞ্চলে ${shortName}-কে নির্দিষ্টভাবে শনাক্ত করে।

### ২২-সংখ্যার জার্মান আইবান (German IBAN)-এর গঠন:
জার্মানিতে যেকোনো ব্যাংক একাউন্টের আইবান ২২ অক্ষরের হয়ে থাকে:
\`\`\`
DEkk BBBB BBBB CCCC CCCC CC
| |  |    |    |
| |  |    |    +-- ১০-ডিজিটের একাউন্ট নম্বর (Kontonummer)
| |  +----+------- ৮-ডিজিটের ব্যাংকলাইৎজাহল (BLZ: ${blzDigits})
| +--------------- ২-ডিজিটের চেক ডিজিট (Prüfziffer)
+----------------- জার্মানির কান্ট্রি কোড ("DE")
\`\`\`
* **${shortName}-এর নমুনা আইবান:** \`${knowledge.ibanExample}\`
      `.trim()
    },
    {
      id: 'sepa-payments-and-swift',
      heading: `SEPA Instant, SEPA Direct Debit & International SWIFT Wires`,
      heading_bn: `সেপা ইনস্ট্যান্ট (SEPA Instant), ডিরেক্ট ডেবিট ও আন্তর্জাতিক সুইফট রেমিট্যান্স`,
      content: `
**${bankNameEn}** is fully integrated into the European Single Euro Payments Area (SEPA) infrastructure and the global SWIFT network.

### Payment Rails Supported by ${shortName}:
1. **SEPA Instant Credit Transfer (SCT Inst):**
   * **Speed:** Settles in under **10 seconds** directly to the recipient’s IBAN, 24/7/365.
   * **Limit:** ${knowledge.sepaInstantLimit}.
   * **Coverage:** Accessible across all 36 SEPA member countries (Eurozone, UK, Switzerland, Norway, etc.).

2. **SEPA Standard Credit Transfer (SCT):**
   * Processed within 1 business day without cross-border fees inside the EEA.

3. **SEPA Core & B2B Direct Debit (SEPA-Lastschrift):**
   * Automated utility, rent, and subscription debits with statutory 8-week refund rights for consumer protection.

4. **International SWIFT Wire Transfers:**
   * **SWIFT/BIC Code:** \`${swiftCode}\`
   * **Settlement Currency:** EUR, USD, GBP, CHF, JPY, and other global currencies.
   * **Routing Instructions for Inward Wires:**
     * **Beneficiary Bank:** ${bankNameEn}
     * **SWIFT / BIC:** \`${swiftCode}\`
     * **IBAN / Account:** 22-digit German IBAN (e.g., \`${knowledge.ibanExample}\`)
     * **Bank Address:** ${headOffice}
      `.trim(),
      content_bn: `
**${bankNameBn}** ইউরোপীয় সিঙ্গেল ইউরো পেমেন্টস এরিয়া (SEPA) এবং বিশ্বব্যাপী সুইফট (SWIFT) আন্তর্জাতিক রেমিট্যান্স নেটওয়ার্কের সরাসরি সদস্য।

### ${shortName}-এর পেমেন্ট সিস্টেম ও লেনদেনের নিয়ম:
১. **সেপা ইনস্ট্যান্ট ক্রেডিট ট্রান্সফার (SEPA Instant):**
   * **সময়সীমা:** মাত্র **১০ সেকেন্ডের মধ্যে** প্রাপকের আইবানে রিয়েল-টাইমে টাকা জমা হয় (বছরের ৩৬৫ দিন ২৪ ঘণ্টা চালু)।
   * **লেনদেনের সীমা:** ${knowledge.sepaInstantLimit}।
   * **আওতাভুক্ত দেশ:** ইউরোপের ৩৬টি সেপা সদস্য দেশ (জার্মানি, ফ্রান্স, ইতালি, যুক্তরাজ্য, সুইজারল্যান্ড ইত্যাদি)।

২. **স্ট্যান্ডার্ড সেপা ট্রান্সফার (Standard SEPA):**
   * ১ কার্যদিবসের মধ্যে ইউরোপীয় ইউনিয়নের অভ্যন্তরে কোনো বাড়তি চার্জ ছাড়াই নিষ্পত্তি হয়।

৩. **সেপা ডিরেক্ট ডেবিট (SEPA-Lastschrift):**
   * বাসা ভাড়া, বিদ্যুৎ ও মোবাইল বিলের জন্য স্বয়ংক্রিয় ডেবিট সুবিধা, যেখানে গ্রাহকদের ৮ সপ্তাহের রিফান্ড সুরক্ষা থাকে।

৪. **বিদেশ থেকে আন্তর্জাতিক সুইফট রেমিট্যান্স আনার নিয়ম:**
   * **সুইফট কোড (SWIFT / BIC):** \`${swiftCode}\`
   * **প্রাপকের আইবান (German IBAN):** ২২ অক্ষরের আইবান কোড (যেমন: \`${knowledge.ibanExample}\`)
   * **ব্যাংকের নাম ও ঠিকানা:** ${bankNameBn}, ${headOfficeBn}
      `.trim()
    },
    {
      id: 'deposit-guarantee-and-bafin',
      heading: `Deposit Protection (€100,000 Statutory Guarantee) & BaFin Oversight`,
      heading_bn: `আমানত সুরক্ষা (€১০০,০০০ সংবিধিবদ্ধ গ্যারান্টি) ও বাফিন (BaFin) নিরাপত্তা`,
      content: `
Deposits at **${bankNameEn}** are legally protected under the German Deposit Guarantee Act (**Einlagensicherungsgesetz - EinSiG**), complying with strict European Union directives.

### How German Deposit Protection Works:
* **Statutory Deposit Guarantee:** Up to **€100,000 per depositor, per banking institution** through the official Compensation Scheme of German Banks (**EdB - Entschädigungseinrichtung deutscher Banken**) or equivalent institutional protection schemes (Sparkassen-Finanzgruppe / BVR).
* **Joint Accounts (Gemeinschaftskonten):** Married couples and joint account holders receive double protection up to **€200,000** (€100,000 per individual).
* **Temporary High Balances:** Special life situations (such as home real estate sales, social severance payouts, or inheritance) are protected up to **€500,000** for up to 6 months.
* **BaFin & Bundesbank Supervision:** ${bankNameEn} maintains strict capital adequacy and liquidity ratios under BaFin ID **#${knowledge.bafinId}** and ECB Single Supervisory Mechanism rules.
      `.trim(),
      content_bn: `
**${bankNameBn}**-এ গচ্ছিত সকল আমানত জার্মান ডিপোজিট গ্যারান্টি আইন (**Einlagensicherungsgesetz - EinSiG**) এবং ইউরোপীয় ইউনিয়নের কঠোর নির্দেশিকা অনুযায়ী সম্পূর্ণ সুরক্ষিত ও বীমাকৃত।

### জার্মান আমানত সুরক্ষা ব্যবস্থার প্রধান নিয়মাবলী:
* **সংবিধিবদ্ধ সুরক্ষা সীমা:** প্রতিটি অনুমোদিত ব্যাংকে প্রতি গ্রাহকের জন্য সর্বোচ্চ **€১০০,০০০ (এক লক্ষ ইউরো)** পর্যন্ত শতভাগ নিরাপদ (জার্মান EdB বা স্পারকাশে/বিভিআর প্রাতিষ্ঠানিক তহবিল দ্বারা সুরক্ষিত)।
* **যৌথ (Joint) একাউন্ট:** স্বামী-স্ত্রী বা যৌথ একাউন্টের ক্ষেত্রে সুরক্ষা সীমা দ্বিগুণ হয়ে সর্বোচ্চ **€২০০,০০০ (দুই লক্ষ ইউরো)** পর্যন্ত স্বয়ংক্রিয়ভাবে কার্যকর হয়।
* **অস্থায়ী উচ্চ ব্যালেন্স সুরক্ষা:** বাড়ি বিক্রি, অবসর ভাতা বা উত্তরাধিকার সূত্রে প্রাপ্ত বড় অঙ্কের অর্থ ৬ মাস পর্যন্ত সর্বোচ্চ **€৫০০,০০০** পর্যন্ত বিশেষ সুরক্ষার আওতায় থাকে।
* **বাফিন ও বুন্দেসব্যাংকের কঠোর নজরদারি:** বাফিন লাইসেন্স **#${knowledge.bafinId}**-এর অধীনে ব্যাংকের মূলধন ও তারল্য সার্বক্ষণিক পর্যবেক্ষণ করা হয়।
      `.trim()
    }
  ];

  const faqs = [
    {
      question: `What is the Bankleitzahl (BLZ) for ${bankNameEn}?`,
      question_bn: `${bankNameBn}-এর ব্যাংকলাইৎজাহল (BLZ) কত?`,
      question_hi: `${bankNameEn} का बैंकलेइटजाहल (BLZ) कोड क्या है?`,
      question_de: `Wie lautet die Bankleitzahl (BLZ) der ${bankNameDe}?`,
      answer: `The official 8-digit Bankleitzahl (BLZ) for ${bankNameEn} is ${blzDigits} (formatted as ${blzFormatted}). It is used across Germany for domestic transfers, direct debits, and SEPA routing.`,
      answer_bn: `${bankNameBn}-এর অফিশিয়াল ৮-ডিজিটের ব্যাংকলাইৎজাহল (BLZ) হলো ${blzDigits} (ফরম্যাট: ${blzFormatted})। এটি জার্মানিজুড়ে স্থানীয় ফান্ড ট্রান্সফার ও সেপা পেমেন্টে ব্যবহৃত হয়।`,
      answer_hi: `${bankNameEn} का आधिकारिक 8-अंकीय बैंकलेइटजाहल (BLZ) कोड ${blzDigits} (${blzFormatted}) है। इसका उपयोग जर्मनी में घरेलू एवं सेपा ट्रांसफर के लिए किया जाता है।`,
      answer_de: `Die offizielle 8-stellige Bankleitzahl (BLZ) der ${bankNameDe} lautet ${blzDigits} (in Dreiergruppen: ${blzFormatted}).`
    },
    {
      question: `What is the SWIFT/BIC code for international wire transfers to ${bankNameEn}?`,
      question_bn: `${bankNameBn}-এ বিদেশ থেকে রেমিট্যান্স আনার সুইফট কোড (SWIFT) কী?`,
      question_hi: `${bankNameEn} का अंतरराष्ट्रीय वायर ट्रांसफर स्विफ्ट (SWIFT) कोड क्या है?`,
      question_de: `Wie lautet der SWIFT/BIC-Code für Auslandsüberweisungen zur ${bankNameDe}?`,
      answer: `The official Head Office SWIFT/BIC code for ${bankNameEn} is ${swiftCode}. Use this 8-character SWIFT code along with your 22-character German IBAN for all inward cross-border money transfers.`,
      answer_bn: `${bankNameBn}-এর অফিশিয়াল আন্তর্জাতিক হেড অফিস সুইফট কোড হলো ${swiftCode}। বিদেশ থেকে অর্থ পাঠাতে এই ৮-অক্ষরের সুইফট কোড ও আপনার ২২-সংখ্যার জার্মান আইবান (IBAN) ব্যবহার করুন।`,
      answer_hi: `${bankNameEn} का आधिकारिक अंतरराष्ट्रीय स्विफ्ट कोड ${swiftCode} है। विदेश से खाते में फंड प्राप्त करने के लिए इस कोड और अपने 22-अंकीय जर्मन आईबीएएन (IBAN) का उपयोग करें।`,
      answer_de: `Der offizielle SWIFT/BIC-Code der ${bankNameDe} lautet ${swiftCode}. Dieser 8-stellige BIC wird zusammen mit der 22-stelligen deutschen IBAN für alle internationalen Überweisungen benötigt.`
    },
    {
      question: `How fast does a SEPA Instant transfer arrive in ${shortName}?`,
      question_bn: `সেপা ইনস্ট্যান্ট (SEPA Instant)-এর মাধ্যমে টাকা আসতে কত সময় লাগে?`,
      question_hi: `सेपा इंस्टेंट (SEPA Instant) के माध्यम से ट्रांसफर में कितना समय लगता है?`,
      question_de: `Wie schnell kommt eine SEPA-Echtzeitüberweisung bei der ${shortName} an?`,
      answer: `SEPA Instant transfers arrive in real-time within 10 seconds, 24 hours a day, 365 days a year across all participating banks in the European SEPA zone.`,
      answer_bn: `সেপা ইনস্ট্যান্ট ট্রান্সফারের মাধ্যমে টাকা পাঠানোর সাথে সাথে মাত্র ১০ সেকেন্ডের মধ্যে রিয়েল-টাইমে প্রাপকের একাউন্টে ক্রেডিট হয়ে যায়, যা বছরের ৩৬৫ দিন ২৪ ঘণ্টা সচল থাকে।`,
      answer_hi: `सेपा इंस्टेंट ट्रांसफर 10 सेकंड के भीतर रियल-टाइम में क्रेडिट हो जाता है और यह सप्ताह के सातों दिन 24 घंटे उपलब्ध रहता है।`,
      answer_de: `Eine SEPA-Echtzeitüberweisung (Instant Payment) wird innerhalb von maximal 10 Sekunden rund um die Uhr an 365 Tagen im Jahr direkt auf dem Konto gutgeschrieben.`
    },
    {
      question: `How much money is protected under deposit insurance in ${bankNameEn}?`,
      question_bn: `${bankNameBn}-এ কত ইউরো পর্যন্ত আমানত সুরক্ষা (Deposit Insurance) পাওয়া যায়?`,
      question_hi: `${bankNameEn} में जमा बीमा (Deposit Protection) के तहत कितनी राशि सुरक्षित है?`,
      question_de: `Wie hoch ist die Einlagensicherung bei der ${bankNameDe}?`,
      answer: `Deposits at ${bankNameEn} are legally protected up to €100,000 per person under the German Deposit Guarantee Act (EinSiG) through the EdB or respective institutional protection funds, and up to €200,000 for joint accounts.`,
      answer_bn: `${bankNameBn}-এ আপনার গচ্ছিত অর্থ জার্মান ডিপোজিট গ্যারান্টি আইনের অধীনে একক একাউন্টে সর্বোচ্চ €১০০,০০০ এবং যৌথ একাউন্টে সর্বোচ্চ €২০০,০০০ পর্যন্ত সম্পূর্ণ সুরক্ষিত ও বীমাকৃত।`,
      answer_hi: `${bankNameEn} में जमा धनराशि जर्मन डिपॉजिट गारंटी अधिनियम (EinSiG) के तहत एकल खातों के लिए €100,000 तक और संयुक्त खातों के लिए €200,000 तक पूरी तरह बीमित और सुरक्षित है।`,
      answer_de: `Einlagen bei der ${bankNameDe} sind im Rahmen der gesetzlichen deutschen Einlagensicherung (EinSiG) bis zu 100.000 € pro Einleger (bei Gemeinschaftskonten bis zu 200.000 €) geschützt.`
    },
    {
      question: `How is the German IBAN constructed for ${shortName}?`,
      question_bn: `${shortName}-এ আমার ২২-সংখ্যার আইবান (IBAN) কীভাবে তৈরি হয়?`,
      question_hi: `${shortName} के लिए 22-अंकीय जर्मन आईबीएएन (IBAN) कैसे बनता है?`,
      question_de: `Wie ist die deutsche IBAN der ${shortName} aufgebaut?`,
      answer: `The 22-character German IBAN consists of 'DE' + 2 check digits + 8-digit Bankleitzahl (${blzDigits}) + 10-digit account number (e.g. ${knowledge.ibanExample}). You can find your full IBAN in your banking app or on your account statement.`,
      answer_bn: `২২-ডিজিটের জার্মান আইবান গঠিত হয় 'DE' + ২ চেক ডিজিট + ৮-ডিজিট বিএলজেড (${blzDigits}) + ১০-ডিজিট একাউন্ট নম্বর দিয়ে (যেমন: ${knowledge.ibanExample})। আপনার ব্যাংকিং অ্যাপ বা স্টেটমেন্টে এটি পাওয়া যায়।`,
      answer_hi: `22-अंकीय जर्मन आईबीएएन 'DE' + 2 चेक डिजिट + 8-अंकीय बैंकलेइटजाहल (${blzDigits}) + 10-अंकीय खाता संख्या से बनता है (उदा. ${knowledge.ibanExample})।`,
      answer_de: `Die 22-stellige deutsche IBAN setzt sich zusammen aus dem Ländercode 'DE', einer 2-stelligen Prüfziffer, der 8-stelligen Bankleitzahl (${blzDigits}) und der 10-stelligen Kontonummer (z. B. ${knowledge.ibanExample}).`
    }
  ];

  const quickStats = [
    { label: 'Bank Name', label_bn: 'ব্যাংকের পূর্ণ নাম', label_de: 'Name des Kreditinstituts', value: bankNameEn, value_bn: bankNameBn },
    { label: 'Short / Brand Name', label_bn: 'ব্র্যান্ড / সংক্ষিপ্ত নাম', label_de: 'Kurzname / Marke', value: shortName, value_bn: shortName },
    { label: 'Primary Bankleitzahl (BLZ)', label_bn: 'প্রধান ব্যাংকলাইৎজাহল (BLZ)', label_de: 'Bankleitzahl (BLZ)', value: blzFormatted, value_bn: blzFormatted },
    { label: 'BLZ (8 Digits)', label_bn: 'বিএলজেড (সংখ্যায়)', label_de: 'BLZ (8-stellig)', value: blzDigits, value_bn: blzDigits },
    { label: 'SWIFT / BIC Code', label_bn: 'আন্তর্জাতিক সুইফট কোড', label_de: 'SWIFT / BIC-Code', value: swiftCode, value_bn: swiftCode },
    { label: 'German IBAN Format', label_bn: 'জার্মান আইবান ফরম্যাট', label_de: 'Deutsche IBAN-Struktur', value: knowledge.ibanExample, value_bn: knowledge.ibanExample },
    { label: 'Deposit Protection', label_bn: 'আমানত সুরক্ষা', label_de: 'Gesetzliche Einlagensicherung', value: '100.000 € pro Kunde', value_bn: 'গ্রাহক প্রতি €১০০,০০০' },
    { label: 'BaFin ID', label_bn: 'বাফিন লাইসেন্স আইডি', label_de: 'BaFin-ID / Aufsicht', value: `#${bafinId}`, value_bn: `#${bafinId}` },
    { label: 'SEPA Instant Limit', label_bn: 'সেপা ইনস্ট্যান্ট সীমা', label_de: 'SEPA Instant Limit', value: knowledge.sepaInstantLimit, value_bn: knowledge.sepaInstantLimit },
    { label: 'Customer Helpline', label_bn: 'গ্রাহক সহায়তা হেল্পলাইন', label_de: 'Kundenservice Telefon', value: knowledge.customerCare, value_bn: knowledge.customerCare }
  ];

  return {
    id: bankId,
    bank_id: bankId,
    slug: bankId,
    country: 'de',
    title: titleEn,
    title_bn: titleBn,
    title_hi: `${bankNameEn} 8-अंकीय BLZ, जर्मन आईबीएएन एवं स्विफ्ट कोड गाइड 2026`,
    title_ru: `${bankNameEn} - 8-значный BLZ, немецкий IBAN и SWIFT реквизиты (2026)`,
    subtitle: subtitleEn,
    subtitle_bn: subtitleBn,
    subtitle_hi: `${bankNameEn} के 8-अंकीय बैंकलेइटजाहल (${blzFormatted}), सेपा इंस्टेंट, जर्मन आईबीएएन (IBAN) एवं €100,000 BaFin सुरक्षा की पूरी जानकारी।`,
    subtitle_ru: `Официальный справочник банковских реквизитов ${bankNameEn}: 8-значный Bankleitzahl (${blzFormatted}), переводы SEPA Instant, IBAN и SWIFT.`,
    meta_title: metaTitle,
    meta_description: metaDescription,
    meta_keywords: [
      `${bankNameEn} blz`,
      `${shortName} bankleitzahl ${blzDigits}`,
      `${bankNameEn} swift code`,
      `${shortName} german iban format`,
      `${bankNameEn} sepa instant limit`,
      `einlagensicherung 100000 ${shortName}`,
      `bafin ${bafinId} ${shortName}`,
      `${shortName} sepa lastschrift`
    ],
    read_time: '6 min read',
    author: 'World Bank Codes Germany Financial Editorial Team',
    published_date: '2026-03-01',
    last_updated: '2026-09-08',
    overview: `Authoritative guide to 8-digit Bankleitzahl (${blzFormatted}), SEPA Instant transfers, SEPA direct debits, German IBAN structure, and €100,000 BaFin/EdB deposit protection for ${bankNameEn}.`,
    overview_bn: `${bankNameBn}-এর ৮-সংখ্যার ব্যাংকলাইৎজাহল (${blzFormatted}), সেপা ইনস্ট্যান্ট ট্রান্সফার, সেপা ডিরেক্ট ডেবিট, জার্মান আইবান ফরম্যাট এবং সংবিধিবদ্ধ আমানত সুরক্ষার সম্পূর্ণ বিশ্লেষণ।`,
    sections,
    faqs,
    quick_stats: quickStats
  };
}

/**
 * Pre-generate all articles for all 21 banks in Germany
 */
export const germanyBanksArticles: BankArticle[] = (banksData as any[]).map((bank) =>
  buildGermanBankArticle(bank)
);

export function getGermanyArticleBySlug(slug: string): BankArticle | undefined {
  return germanyBanksArticles.find((a) => a.slug === slug || a.bank_id === slug);
}
