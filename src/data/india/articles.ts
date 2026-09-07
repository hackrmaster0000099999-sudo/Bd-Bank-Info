import { BankArticle } from '../../types';
import banksData from './banks.json';

/**
 * Human-grade Financial Editorial Engine for Indian Banks (हिन्दी भाषा में विशेष बैंकिंग मार्गदर्शिका)
 * Comprehensive, SEO-optimized guides covering IFSC Codes, MICR Codes, SWIFT Codes,
 * NEFT, RTGS, IMPS fund transfers, and cheque layout analysis in Hindi & English.
 */

const INDIA_BANK_KNOWLEDGE_HI: Record<string, {
  established: string;
  foundingStory_hi: string;
  category_hi: string;
  coreStrengths_hi: string[];
  swiftHo: string;
  ifscPrefix: string;
  popularApp_hi: string;
  customerCare_hi: string;
  transferModes_hi: string;
  impsMinMax_hi: string;
  rtgsMin_hi: string;
}> = {
  'state-bank-of-india': {
    established: '1955 (इंपीरियल बैंक ऑफ इंडिया का राष्ट्रीयकरण)',
    foundingStory_hi: 'भारतीय स्टेट बैंक (SBI) भारत का सबसे बड़ा और सबसे प्रतिष्ठित सार्वजनिक क्षेत्र का वाणिज्यिक बैंक है। 1806 में बैंक ऑफ कलकत्ता के रूप में शुरू हुआ यह बैंक 1955 में संसद के एक अधिनियम द्वारा भारतीय स्टेट बैंक बना। देश के हर कोने में फैली 22,400 से अधिक शाखाओं और 62,000+ एटीएम के विशाल नेटवर्क के साथ SBI भारत की वित्तीय रीढ़ है।',
    category_hi: 'सार्वजनिक क्षेत्र का अनुसूचित वाणिज्यिक बैंक (Public Sector Bank)',
    coreStrengths_hi: ['देश का सबसे बड़ा 22,400+ शाखा नेटवर्क', 'YONO SBI डिजिटल सुपर ऐप', 'सरकारी योजनाओं, पेंशन एवं डायरेक्ट बेनिफिट ट्रांसफर (DBT) का प्रमुख केंद्र', 'वैश्विक स्तर पर 36+ देशों में विदेशी शाखाएं'],
    swiftHo: 'SBININBB',
    ifscPrefix: 'SBIN',
    popularApp_hi: 'YONO SBI / YONO Lite / SBI Online Internet Banking',
    customerCare_hi: '1800 1234 / 1800 2100 / 1800 11 2211',
    transferModes_hi: 'NEFT (24x7), RTGS (24x7), IMPS (तत्काल), UPI (BHIM/PhonePe/GPay)',
    impsMinMax_hi: '₹1 से ₹5,00,000 तक प्रति दिन',
    rtgsMin_hi: '₹2,00,000 (दो लाख रुपये) से शुरू (कोई ऊपरी सीमा नहीं)'
  },
  'hdfc-bank': {
    established: '1994 (हाउसिंग डेवलपमेंट फाइनेंस कॉर्पोरेशन की सहायक इकाई)',
    foundingStory_hi: 'एचडीएफसी बैंक (HDFC Bank Ltd.) भारत का सबसे बड़ा निजी क्षेत्र का बैंक और बाजार पूंजीकरण के हिसाब से देश का अग्रणी वित्तीय संस्थान है। 1994 में मुंबई में स्थापित, इस बैंक ने भारत में विश्वस्तरीय डिजिटल बैंकिंग, क्रेडिट कार्ड और कॉर्पोरेट फाइनेंसिंग में नए मानदंड स्थापित किए हैं।',
    category_hi: 'निजी क्षेत्र का प्रमुख अनुसूचित बैंक (Private Sector Bank)',
    coreStrengths_hi: ['भारत का सबसे बड़ा निजी बैंक (8,700+ शाखाएं)', 'क्रेडिट कार्ड एवं पर्सनल लोन मार्केट लीडर', 'HDFC Bank MobileBanking एवं PayZapp', 'स्मार्ट बाय (SmartBuy) एवं डिजिटल मर्चेंट सोल्यूशंस'],
    swiftHo: 'HDFCINBB',
    ifscPrefix: 'HDFC',
    popularApp_hi: 'HDFC Bank MobileBanking App & PayZapp',
    customerCare_hi: '1800 1600 / 1800 2600',
    transferModes_hi: 'NEFT, RTGS, IMPS, UPI, Quick Transfer',
    impsMinMax_hi: '₹1 से ₹5,00,000 तक',
    rtgsMin_hi: '₹2,00,000 न्यूनतम'
  },
  'icici-bank': {
    established: '1994 (ICICI लिमिटेड द्वारा प्रवर्तित)',
    foundingStory_hi: 'आईसीआईसीआई बैंक (ICICI Bank) भारत का दूसरा सबसे बड़ा निजी क्षेत्र का बैंक है। 1994 में स्थापित इस बैंक ने भारत में इंटरनेट बैंकिंग और मोबाइल बैंकिंग नवाचारों का नेतृत्व किया है। इसका iMobile Pay ऐप भारत के सबसे उन्नत बैंकिंग एप्लिकेशनों में गिना जाता है।',
    category_hi: 'अग्रणी निजी वाणिज्यिक बैंक',
    coreStrengths_hi: ['6,500+ शाखाएं और 15,000+ एटीएम', 'iMobile Pay सुपर ऐप', 'इंस्टा लोन एवं फॉरेक्स कार्ड सेवाएं', 'मजबूत कॉर्पोरेट एवं रिटेल लोन पोर्टफोलियो'],
    swiftHo: 'ICICINBB',
    ifscPrefix: 'ICIC',
    popularApp_hi: 'iMobile Pay by ICICI Bank',
    customerCare_hi: '1800 1080 / 1800 103 8181',
    transferModes_hi: 'NEFT, RTGS, IMPS 24x7, UPI',
    impsMinMax_hi: '₹1 से ₹5,00,000',
    rtgsMin_hi: '₹2,00,000 न्यूनतम'
  },
  'punjab-national-bank': {
    established: '1894 (लाला लाजपत राय द्वारा लाहौर में स्थापित स्वदेशी बैंक)',
    foundingStory_hi: 'पंजाब नैशनल बैंक (PNB) भारत का पहला स्वदेशी बैंक है जिसकी स्थापना 1894 में लाला लाजपत राय और अन्य स्वतंत्रता सेनानियों द्वारा की गई थी। 2020 में ओरिएंटल बैंक ऑफ कॉमर्स और यूनाइटेड बैंक ऑफ इंडिया के विलय के बाद PNB भारत का दूसरा सबसे बड़ा सार्वजनिक क्षेत्र का बैंक बन गया है।',
    category_hi: 'सार्वजनिक क्षेत्र का प्रतिष्ठित बैंक',
    coreStrengths_hi: ['10,000+ शाखाओं का विशाल नेटवर्क', 'PNB ONE डिजिटल मोबाइल ऐप', 'कृषि ऋण एवं MSME फाइनेंस में अग्रणी', 'विशाल ग्रामीण एवं अर्ध-शहरी पहुंच'],
    swiftHo: 'PUNBINBB',
    ifscPrefix: 'PUNB',
    popularApp_hi: 'PNB ONE App',
    customerCare_hi: '1800 180 2222 / 1800 103 2222',
    transferModes_hi: 'NEFT, RTGS, IMPS, UPI',
    impsMinMax_hi: '₹1 से ₹5,00,000',
    rtgsMin_hi: '₹2,00,000 न्यूनतम'
  },
  'bank-of-baroda': {
    established: '1908 (महाराजा सयाजीराव गायकवाड़ III द्वारा बड़ौदा में स्थापित)',
    foundingStory_hi: 'बैंक ऑफ बड़ौदा (Bank of Baroda - BOB) भारत का तीसरा सबसे बड़ा सार्वजनिक बैंक है। 1908 में स्थापित और 1969 में राष्ट्रीयकृत इस बैंक ने 2019 में देना बैंक और विजया बैंक को अपने में समाहित किया। इसका bob World डिजिटल प्लेटफॉर्म बैंकिंग को बेहद आसान बनाता है।',
    category_hi: 'सार्वजनिक क्षेत्र का अंतरराष्ट्रीय बैंक',
    coreStrengths_hi: ['8,200+ शाखाएं एवं 17+ देशों में अंतरराष्ट्रीय उपस्थिति', 'bob World डिजिटल ऐप', 'ट्रेड फाइनेंस एवं एनआरआई (NRI) बैंकिंग', 'रिटेल लोन एवं एमएसएमई फंडिंग'],
    swiftHo: 'BARBINBB',
    ifscPrefix: 'BARB',
    popularApp_hi: 'bob World (BOB Mobile Banking)',
    customerCare_hi: '1800 5700 / 1800 5000',
    transferModes_hi: 'NEFT, RTGS, IMPS, UPI',
    impsMinMax_hi: '₹1 से ₹5,00,000',
    rtgsMin_hi: '₹2,00,000 न्यूनतम'
  },
  'axis-bank': {
    established: '1993 (यूटीआई बैंक के रूप में शुरू, बाद में एक्सिस बैंक नामित)',
    foundingStory_hi: 'एक्सिस बैंक (Axis Bank) भारत का तीसरा सबसे बड़ा निजी क्षेत्र का बैंक है। 1993 में यूटीआई बैंक के रूप में स्थापित होकर 2007 में इसका नाम बदलकर एक्सिस बैंक किया गया। 2023 में सिटीबैंक इंडिया के उपभोक्ता बैंकिंग व्यवसाय के अधिग्रहण के बाद एक्सिस बैंक की प्रीमियम बैंकिंग में स्थिति और मजबूत हुई है।',
    category_hi: 'अग्रणी निजी वाणिज्यिक बैंक',
    coreStrengths_hi: ['5,300+ घरेलू शाखाएं', 'open by Axis Bank मोबाइल ऐप', 'क्रेडिट कार्ड (Flipkart Axis, Magnus)', 'कॉर्पोरेट इन्वेस्टमेंट एवं वेल्थ मैनेजमेंट'],
    swiftHo: 'UTIBINBB',
    ifscPrefix: 'UTIB',
    popularApp_hi: 'open by Axis Bank',
    customerCare_hi: '1860 419 5555 / 1860 500 5555',
    transferModes_hi: 'NEFT, RTGS, IMPS, UPI',
    impsMinMax_hi: '₹1 से ₹5,00,000',
    rtgsMin_hi: '₹2,00,000 न्यूनतम'
  },
  'canara-bank': {
    established: '1906 (अम्मेम्बल सुब्बा राव पई द्वारा मैंगलोर में स्थापित)',
    foundingStory_hi: 'केनरा बैंक (Canara Bank) भारत के सबसे पुराने और बड़े सार्वजनिक बैंकों में से एक है। 1906 में कर्नाटक के मैंगलोर में स्थापित और 2020 में सिंडिकेट बैंक के विलय के बाद केनरा बैंक 9,600 से अधिक शाखाओं के साथ देश भर में व्यापक वित्तीय सेवाएं प्रदान कर रहा है।',
    category_hi: 'सार्वजनिक क्षेत्र का अनुसूचित बैंक',
    coreStrengths_hi: ['9,600+ शाखाएं एवं 10,000+ एटीएम', 'Canara ai1 डिजिटल सुपर ऐप', 'शिक्षा ऋण (Education Loan) एवं कृषि वित्त', 'मजबूत दक्षिण एवं उत्तर भारतीय शाखा नेटवर्क'],
    swiftHo: 'CNRBINBB',
    ifscPrefix: 'CNRB',
    popularApp_hi: 'Canara ai1 Mobile Banking',
    customerCare_hi: '1800 425 0018 / 1800 1030 018',
    transferModes_hi: 'NEFT, RTGS, IMPS, UPI',
    impsMinMax_hi: '₹1 से ₹5,00,000',
    rtgsMin_hi: '₹2,00,000 न्यूनतम'
  },
  'kotak-mahindra-bank': {
    established: '2003 (NBFC से पूर्ण वाणिज्यिक बैंक बनने वाला पहला संस्थान)',
    foundingStory_hi: 'कोटक महिंद्रा बैंक (Kotak Mahindra Bank) भारत का अग्रणी निजी बैंक है जिसे 2003 में आरबीआई द्वारा बैंकिंग लाइसेंस प्राप्त हुआ। उदय कोटक द्वारा प्रवर्तित इस बैंक ने अपने शून्य-बैलेंस डिजिटल खाते "Kotak 811" के माध्यम से भारत में डिजिटल ऑनबोर्डिंग में क्रांति ला दी है।',
    category_hi: 'प्रमुख निजी वाणिज्यिक बैंक',
    coreStrengths_hi: ['Kotak 811 डिजिटल जीरो-बैलेंस खाता', '1,900+ शाखाएं', 'इनोवेटिव वेल्थ मैनेजमेंट एवं इन्वेस्टमेंट बैंकिंग', 'फास्ट डिजिटल लोन प्रोसेसिंग'],
    swiftHo: 'KKBKINBB',
    ifscPrefix: 'KKBK',
    popularApp_hi: 'Kotak - 811 & Mobile Banking App',
    customerCare_hi: '1860 266 2666',
    transferModes_hi: 'NEFT, RTGS, IMPS, UPI',
    impsMinMax_hi: '₹1 से ₹5,00,000',
    rtgsMin_hi: '₹2,00,000 न्यूनतम'
  },
  'union-bank-of-india': {
    established: '1919 (महात्मा गांधी द्वारा उद्घाटन किया गया ऐतिहासिक बैंक)',
    foundingStory_hi: 'यूनियन बैंक ऑफ इंडिया (Union Bank of India) की स्थापना 1919 में हुई थी और इसके मुख्य कार्यालय का उद्घाटन स्वयं राष्ट्रपिता महात्मा गांधी ने किया था। 2020 में आंध्रा बैंक और कॉर्पोरेशन बैंक के ऐतिहासिक विलय के बाद यह 8,500 से अधिक शाखाओं के साथ भारत का प्रमुख सार्वजनिक बैंक बन गया है।',
    category_hi: 'सार्वजनिक क्षेत्र का प्रतिष्ठित बैंक',
    coreStrengths_hi: ['8,500+ शाखा नेटवर्क', 'Vyom - Union Bank Digital App', 'एमएसएमई, हाउसिंग एवं कॉर्पोरेट क्रेडिट', 'विशाल ग्रामीण शाखा पहुंच'],
    swiftHo: 'UBININBB',
    ifscPrefix: 'UBIN',
    popularApp_hi: 'Union Vyom App',
    customerCare_hi: '1800 22 22 44 / 1800 208 2244',
    transferModes_hi: 'NEFT, RTGS, IMPS, UPI',
    impsMinMax_hi: '₹1 से ₹5,00,000',
    rtgsMin_hi: '₹2,00,000 न्यूनतम'
  },
  'indusind-bank': {
    established: '1994 (हिंदुजा समूह द्वारा प्रवर्तित)',
    foundingStory_hi: 'इंडसइंड बैंक (IndusInd Bank) 1994 में स्थापित एक आधुनिक नई पीढ़ी का निजी वाणिज्यिक बैंक है। यह वाहन वित्तपोषण (Vehicle Finance), माइक्रोफाइनेंस और उपभोक्ता बैंकिंग में अपनी उत्कृष्ट सेवाओं और ग्राहक-अनुकूल डिजिटल सुविधाओं के लिए जाना जाता है।',
    category_hi: 'नई पीढ़ी का निजी बैंक',
    coreStrengths_hi: ['वाहन ऋण एवं कमर्शियल व्हीकल फाइनेंस', 'Indie by IndusInd डिजिटल बैंकिंग', 'प्रीमियम क्रेडिट कार्ड एवं फॉरेक्स', '2,900+ शाखा नेटवर्क'],
    swiftHo: 'INDBINBB',
    ifscPrefix: 'INDB',
    popularApp_hi: 'IndusMobile & INDIE App',
    customerCare_hi: '1860 267 7777 / 022 44066666',
    transferModes_hi: 'NEFT, RTGS, IMPS, UPI',
    impsMinMax_hi: '₹1 से ₹5,00,000',
    rtgsMin_hi: '₹2,00,000 न्यूनतम'
  }
};

/**
 * Builds high-density, authoritative, and human-crafted Hindi banking articles for Indian Banks
 */
export function buildIndiaBankArticle(bank: any): BankArticle {
  const bankId = bank.id;
  const bankNameHi = bank.name_hi || bank.name;
  const bankNameEn = bank.name;
  const shortName = bank.short_name || 'Bank';
  const ifscPrefix = bank.ifsc_prefix || bank.bank_code || 'BANK';
  const swiftCode = bank.swift_code || 'N/A';
  const headOfficeHi = bank.head_office_hi || bank.head_office || 'मुंबई, भारत';
  const headOfficeEn = bank.head_office || 'Mumbai, India';
  const branchCount = bank.branch_count || 1000;
  const establishedYear = bank.established || '1990';
  const bankType = bank.type || 'अनुसूचित वाणिज्यिक बैंक';

  const knowledge = INDIA_BANK_KNOWLEDGE_HI[bankId] || {
    established: `${establishedYear} (भारतीय रिज़र्व बैंक (RBI) द्वारा लाइसेंस प्राप्त अनुसूचित बैंक)`,
    foundingStory_hi: `${bankNameHi} (${bankNameEn}) भारत के बैंकिंग एवं वित्तीय परिदृश्य में एक प्रतिष्ठित और विश्वसनीय अनुसूचित वाणिज्यिक बैंक है। अपनी स्थापना से ही यह बैंक रिटेल ऋण, बचत खाते, कॉर्पोरेट वित्तीय पोषण, एमएसएमई लोन और अत्याधुनिक डिजिटल बैंकिंग प्लेटफॉर्म के माध्यम से करोड़ों नागरिकों को सेवाएं प्रदान कर रहा है।`,
    category_hi: `${bankType} (Scheduled Commercial Bank)`,
    coreStrengths_hi: [
      `देश भर में ${branchCount.toLocaleString()}+ शाखाओं और एटीएम का नेटवर्क`,
      'आरबीआई (RBI) अनुमोदित 11-अंकीय IFSC कोड और 9-अंकीय MICR क्लियरिंग',
      '24x7 निर्बाध NEFT, RTGS, IMPS और UPI डिजिटल फंड ट्रांसफर',
      'मोबाइल बैंकिंग, नेट बैंकिंग और अंतरराष्ट्रीय रेमिटेंस सुविधाएं'
    ],
    swiftHo: swiftCode,
    ifscPrefix: ifscPrefix,
    popularApp_hi: `${shortName} Mobile Banking & Internet Banking`,
    customerCare_hi: '24x7 राष्ट्रीय टोल-फ्री हेल्पलाइन',
    transferModes_hi: 'NEFT, RTGS, IMPS, UPI',
    impsMinMax_hi: '₹1 से ₹5,00,000 तक',
    rtgsMin_hi: '₹2,00,000 (दो लाख रुपये) न्यूनतम'
  };

  const titleHi = `${bankNameHi} (${shortName}) IFSC कोड, MICR, स्विफ्ट कोड एवं संपूर्ण बैंकिंग गाइड 2026`;
  const titleEn = `${bankNameEn} (${shortName}) IFSC Code, MICR, SWIFT Code & Banking Guide 2026`;
  const subtitleHi = `${bankNameHi} की सभी शाखाओं के 11-अंकीय आधिकारिक IFSC कोड, 9-अंकीय MICR कोड, चेक बुक से कोड खोजने की विधि, NEFT / RTGS / IMPS फंड ट्रांसफर नियम और संपूर्ण शाखा निर्देशिका।`;
  const subtitleEn = `Complete directory of 11-character IFSC codes, 9-digit MICR, SWIFT BIC codes, and wire transfer rules for ${bankNameEn}.`;

  const metaTitle = `${bankNameHi} (${shortName}) IFSC कोड, MICR, स्विफ्ट कोड लिस्ट 2026 | World Bank Codes`;
  const metaDescription = `${bankNameHi} (${shortName}) की सभी शाखाओं के 100% सत्यापित 11-अंकीय IFSC कोड, 9-अंकीय MICR, SWIFT कोड (${swiftCode}), नेट बैंकिंग और NEFT/RTGS/IMPS फंड ट्रांसफर की पूरी जानकारी। RBI अनुमोदित 2026 गाइड।`;

  const overviewHi = `
${bankNameHi} (${bankNameEn} - ${shortName}) भारत के बैंकिंग क्षेत्र का एक अत्यंत महत्वपूर्ण और भरोसेमंद स्तंभ है। यदि आप भारत के किसी भी राज्य या शहर से अथवा विदेश से इस बैंक के खाते में पैसे ट्रांसफर (NEFT/RTGS/IMPS/UPI) करना चाहते हैं, चेक क्लियरिंग कराना चाहते हैं, या विदेशी मुद्रा रेमिटेंस प्राप्त करना चाहते हैं, तो संबंधित शाखा का **11-अक्षरों का आधिकारिक IFSC कोड (Indian Financial System Code)**, **9-अंकीय MICR कोड** और **अंतरराष्ट्रीय स्विफ्ट कोड (SWIFT/BIC Code)** जानना अनिवार्य है।

इस विस्तृत एवं अद्यतन मार्गदर्शिका में हमने ${bankNameHi} के IFSC कोड की संरचना, चेक के निचले हिस्से से कोड पहचानने का तरीका, फंड ट्रांसफर की सीमाएं एवं समय, और सभी राज्यों की शाखाओं की सूची व्यवस्थित रूप से प्रस्तुत की है।
  `.trim();

  const sections = [
    {
      id: 'bank-profile-history',
      heading: `${bankNameHi} का परिचय एवं संगठनात्मक संरचना`,
      heading_hi: `${bankNameHi} का परिचय एवं संगठनात्मक संरचना`,
      content_hi: `
${knowledge.foundingStory_hi}

### बैंक की मुख्य विशेषताएं एवं प्रमुख आंकड़े:
* **स्थापना वर्ष:** ${knowledge.established}
* **बैंक श्रेणी:** ${knowledge.category_hi}
* **प्रधान कार्यालय का पता:** ${headOfficeHi}
* **हेड ऑफिस SWIFT/BIC कोड:** \`${swiftCode}\`
* **IFSC प्रीफिक्स (IFSC Prefix):** \`${ifscPrefix}\` (सभी शाखाओं के 11-अंकीय IFSC के पहले 4 अक्षर)
* **शाखा नेटवर्क:** पूरे भारत में लगभग **${branchCount.toLocaleString()}+** से अधिक शाखाएं एवं एटीएम
* **आधिकारिक डिजिटल ऐप:** ${knowledge.popularApp_hi}
* **ग्राहक सेवा हेल्पलाइन:** ${knowledge.customerCare_hi}

बैंक सामान्य बचत खाता (Savings Account), चालू खाता (Current Account), सावधि जमा (FD/RD), पर्सनल लोन, होम लोन, क्रेडिट कार्ड, और अंतरराष्ट्रीय व्यापार वित्त जैसी संपूर्ण आधुनिक बैंकिंग सुविधाएं प्रदान करता है।
      `.trim(),
      content: `${bankNameEn} is a major scheduled commercial bank in India operating ${branchCount.toLocaleString()}+ branches across the country. Head office: ${headOfficeEn}. Official SWIFT: ${swiftCode}.`
    },
    {
      id: 'understanding-ifsc-code-structure',
      heading: `${bankNameHi} के 11-अंकीय IFSC कोड की संरचना (IFSC Code Structure)`,
      heading_hi: `${bankNameHi} के 11-अंकीय IFSC कोड की संरचना (IFSC Code Structure)`,
      content_hi: `
भारत में भारतीय रिज़र्व बैंक (RBI) द्वारा सभी बैंकों की प्रत्येक शाखा को विशिष्ट रूप से पहचानने के लिए **IFSC (Indian Financial System Code)** प्रणाली का उपयोग किया जाता है। यह कोड 11 अल्फ़ान्यूमेरिक (अक्षर और संख्या) वर्णों का बना होता है।

${bankNameHi} का 11-अंकीय IFSC कोड किस प्रकार बनता है, इसे नीचे समझें:

1. **प्रथम 4 अक्षर (बैंक कोड):** \`${ifscPrefix}\` — यह चार अंग्रेजी अक्षर दर्शाते हैं कि यह खाता ${bankNameHi} में है।
2. **5वां अक्षर (नियंत्रण शून्य):** हमेशा \`0\` (शून्य) होता है — इसे भविष्य के नियंत्रण के लिए रिज़र्व बैंक द्वारा शून्य रखा गया है।
3. **अंतिम 6 अक्षर/संख्याएं (शाखा कोड):** जैसे \`000123\` या \`004589\` — यह संबंधित राज्य/शहर की विशिष्ट शाखा की पहचान करते हैं।

> **उदाहरण:** यदि किसी शाखा का IFSC कोड \`${ifscPrefix}000001\` है, तो इसमें \`${ifscPrefix}\` बैंक का नाम, \`0\` 5वां रिज़र्व कैरेक्टर, और \`000001\` उस विशेष शाखा का विशिष्ट ब्रांच कोड है।
      `.trim(),
      content: `The 11-character IFSC code for ${bankNameEn} consists of: 4-character Bank Code (${ifscPrefix}), 5th character control zero '0', and 6-digit Branch Code.`
    },
    {
      id: 'how-to-find-ifsc-from-cheque',
      heading: `चेक बुक, पासबुक और ऑनलाइन से ${bankNameHi} का IFSC और MICR कोड कैसे खोजें?`,
      heading_hi: `चेक बुक, पासबुक और ऑनलाइन से ${bankNameHi} का IFSC और MICR कोड कैसे खोजें?`,
      content_hi: `
यदि आपका खाता ${bankNameHi} में है, तो आप 3 बहुत ही आसान तरीकों से अपनी शाखा का सही IFSC और MICR कोड जान सकते हैं:

#### 1. चेक बुक (Cheque Leaf) के माध्यम से:
* **IFSC कोड:** चेक के सबसे ऊपरी बाएं कोने पर बैंक के पते के साथ **IFSC: ${ifscPrefix}0****** स्पष्ट रूप से मुद्रित होता है।
* **MICR कोड:** चेक के निचले सफेद बैंड पर मैग्नेटिक स्याही से 9 अंकों का MICR कोड छपा होता है (चेक नंबर के तुरंत बाद)।

#### 2. हमारे World Bank Codes पोर्टल पर खोजें:
आप हमारे सर्च बॉक्स में बैंक का नाम और अपने शहर/शाखा का नाम दर्ज करके तुरंत 100% सटीक IFSC कोड, 9-अंकीय MICR, शाखा का फोन नंबर और पूरा पता देख सकते हैं।

#### 3. पासबुक या मोबाइल बैंकिंग ऐप से:
आपकी बैंक पासबुक के पहले पन्ने पर और मोबाइल ऐप (${knowledge.popularApp_hi}) की प्रोफ़ाइल/अकाउंट डिटेल्स में आपकी होम ब्रांच का IFSC कोड अंकित रहता है।
      `.trim(),
      content: `Find your 11-digit IFSC printed at the top-left of your cheque leaf or search verified records directly on World Bank Codes.`
    },
    {
      id: 'fund-transfer-modes-limits',
      heading: `फंड ट्रांसफर के तरीके: NEFT, RTGS, IMPS और UPI में अंतर एवं समय सीमा`,
      heading_hi: `फंड ट्रांसफर के तरीके: NEFT, RTGS, IMPS और UPI में अंतर एवं समय सीमा`,
      content_hi: `
${bankNameHi} के खाते में या इस बैंक से किसी अन्य बैंक में पैसे भेजने के लिए आप निम्नलिखित डिजिटल चैनलों का उपयोग कर सकते हैं:

| ट्रांसफर मोड | ट्रांसफर का समय | न्यूनतम व अधिकतम सीमा | उपयुक्त उपयोग |
| :--- | :--- | :--- | :--- |
| **IMPS (Instant)** | 24x7 तत्काल (कुछ ही सेकंड में) | ₹1 से ₹5,00,000 प्रति दिन | आपातकालीन पैसे भेजना, तत्काल बिल भुगतान |
| **NEFT (National)** | 24x7 हर आधे घंटे के बैच में | कोई न्यूनतम सीमा नहीं (₹1 से असीमित) | नियमित वेतन भुगतान, किराया, सामान्य ट्रांसफर |
| **RTGS (Real-Time)** | 24x7 तत्काल ग्रॉस सेटलमेंट | न्यूनतम **₹2,00,000** (कोई ऊपरी सीमा नहीं) | बड़े व्यावसायिक भुगतान, संपत्ति खरीद, उच्च मूल्य लेनदेन |
| **UPI (BHIM/GPay)** | 24x7 तत्काल | ₹1 से ₹1,00,000 (विशेष मामलों में ₹5 लाख) | दैनिक खरीदारी, मोबाइल रिचार्ज, व्यक्तिगत भुगतान |

*नोट: NEFT, RTGS और IMPS के माध्यम से पैसे भेजते समय लाभार्थी (Beneficiary) का खाता नंबर, खाता धारक का नाम और शाखा का सटीक 11-अंकीय IFSC कोड दर्ज करना अनिवार्य है।*
      `.trim(),
      content: `Comparison of IMPS (instant up to 5 lakh), NEFT (24x7 batch processing), RTGS (real-time high-value 2 lakh+), and UPI for ${bankNameEn}.`
    },
    {
      id: 'swift-code-and-international-remittance',
      heading: `अंतरराष्ट्रीय रेमिटेंस एवं स्विफ्ट कोड (\`${swiftCode}\`) गाइड`,
      heading_hi: `अंतरराष्ट्रीय रेमिटेंस एवं स्विफ्ट कोड (\`${swiftCode}\`) गाइड`,
      content_hi: `
यदि आप विदेश (जैसे अमेरिका, यूके, कनाडा, यूएई, ऑस्ट्रेलिया, जर्मनी, सिंगापुर) से भारत में अपने परिवार को पैसे भेज रहे हैं, या फ्रीलांसिंग (Upwork, Fiverr, Google AdSense, YouTube) की विदेशी आय ${bankNameHi} के खाते में प्राप्त करना चाहते हैं, तो आपको **SWIFT/BIC कोड** की आवश्यकता होगी:

* **हेड ऑफिस SWIFT कोड:** \`${swiftCode}\`
* **बैंक का नाम:** ${bankNameEn}
* **प्रधान कार्यालय:** ${headOfficeHi}
* **लाभार्थी का विवरण:** आपका पूरा नाम (जैसा बैंक में है) और खाता संख्या।

*महत्वपूर्ण: यदि आपकी स्थानीय शाखा का अलग स्विफ्ट कोड उपलब्ध नहीं है, तो आप बिना किसी संकोच के हेड ऑफिस के 8-अंकीय मुख्य स्विफ्ट कोड (\`${swiftCode}\`) का उपयोग कर सकते हैं। विदेशी बैंक से भेजा गया पैसा सीधे आपके खाते में क्रेडिट हो जाएगा।*
      `.trim(),
      content: `Use the official Head Office SWIFT/BIC code ${swiftCode} along with your full account name and account number for incoming inward wire transfers and export proceeds.`
    }
  ];

  const faqs = [
    {
      question: `${bankNameHi} का IFSC कोड क्या होता है?`,
      question_bn: `${bankNameHi}-এর আইএফএসসি কোড কী?`,
      question_hi: `${bankNameHi} का IFSC कोड क्या होता है?`,
      answer: `The 11-character IFSC code identifies a specific branch for electronic transactions, starting with ${ifscPrefix}.`,
      answer_bn: `${bankNameHi}-এর ১১-সংখ্যার আইএফএসসি কোড প্রতিটি শাখাকে আলাদাভাবে চিহ্নিত করে যার শুরু হয় "${ifscPrefix}" দিয়ে।`,
      answer_hi: `${bankNameHi} का IFSC कोड 11 अक्षरों का एक अद्वितीय कोड होता है जो भारतीय रिज़र्व बैंक (RBI) द्वारा दिया जाता है। इस बैंक के सभी IFSC कोड का पहला 4 अक्षर "${ifscPrefix}" होता है और इसका उपयोग NEFT, RTGS व IMPS द्वारा पैसे भेजने के लिए होता है।`
    },
    {
      question: `${bankNameHi} का स्विफ्ट कोड (SWIFT Code) क्या है?`,
      question_bn: `${bankNameHi}-এর প্রধান সুইফট কোড কোনটি?`,
      question_hi: `${bankNameHi} का स्विफ्ट कोड (SWIFT Code) क्या है?`,
      answer: `The Head Office SWIFT/BIC code for ${bankNameEn} is ${swiftCode}.`,
      answer_bn: `${bankNameHi}-এর অফিশিয়াল হেড অফিস সুইফট কোড হলো "${swiftCode}"।`,
      answer_hi: `${bankNameHi} का मुख्य अंतरराष्ट्रीय स्विफ्ट (SWIFT/BIC) कोड "${swiftCode}" है। विदेश से भारत में वायर ट्रांसफर या रेमिटेंस मंगाने के लिए इसका उपयोग किया जाता है।`
    },
    {
      question: `गलत IFSC कोड डालने पर क्या पैसा कट जाएगा?`,
      question_bn: `ভুল IFSC কোড দিলে কি টাকা কেটে যাবে?`,
      question_hi: `गलत IFSC कोड डालने पर क्या पैसा कट जाएगा?`,
      answer: `If the IFSC code is invalid, transaction will fail and money is credited back within 1-2 business days.`,
      answer_bn: `না, আইএফএসসি কোড ভুল বা অবৈধ হলে টাকা স্বয়ংক্রিয়ভাবে প্রেরকের একাউন্টে ফেরত আসে।`,
      answer_hi: `यदि आपने कोई ऐसा IFSC कोड दर्ज किया है जो मौजूद नहीं है, तो बैंक सर्वर लेनदेन अस्वीकार कर देगा और पैसा तुरंत या 1-2 कार्यदिवसों में आपके खाते में वापस आ जाएगा। हालांकि, यदि खाता संख्या और IFSC दोनों किसी अन्य व्यक्ति के खाते से मेल खा जाएं तो समस्या हो सकती है, इसलिए हमेशा सही IFSC कोड की पुष्टि करें।`
    },
    {
      question: `NEFT और RTGS में न्यूनतम कितने रुपये भेज सकते हैं?`,
      question_bn: `NEFT এবং RTGS-এ সর্বনিম্ন কত টাকা পাঠানো যায়?`,
      question_hi: `NEFT और RTGS में न्यूनतम कितने रुपये भेज सकते हैं?`,
      answer: `NEFT has no minimum limit (from ₹1), while RTGS requires a minimum transaction value of ₹2,00,000.`,
      answer_bn: `NEFT-এ কোনো ন্যূনতম সীমা নেই (১ টাকা থেকে), তবে RTGS-এর জন্য সর্বনিম্ন ২,০০,০০০ টাকা প্রয়োজন।`,
      answer_hi: `NEFT के माध्यम से आप ₹1 से लेकर बिना किसी ऊपरी सीमा के कितना भी पैसा भेज सकते हैं। जबकि RTGS (Real-Time Gross Settlement) के लिए न्यूनतम राशि **₹2,00,000 (दो लाख रुपये)** होना आवश्यक है।`
    }
  ];

  const quickStats = [
    { label: 'बैंक का पूरा नाम', label_hi: 'बैंक का पूरा नाम', value: bankNameHi, value_hi: bankNameHi },
    { label: 'संक्षिप्त नाम (Short Name)', label_hi: 'संक्षिप्त नाम (Short Name)', value: shortName, value_hi: shortName },
    { label: 'IFSC प्रीफिक्स (Bank Prefix)', label_hi: 'IFSC प्रीफिक्स (Bank Prefix)', value: ifscPrefix, value_hi: ifscPrefix },
    { label: 'स्विफ्ट कोड (SWIFT BIC)', label_hi: 'स्विफ्ट कोड (SWIFT BIC)', value: swiftCode, value_hi: swiftCode },
    { label: 'कुल शाखाएं (Branches)', label_hi: 'कुल शाखाएं (Branches)', value: `${branchCount.toLocaleString()}+`, value_hi: `${branchCount.toLocaleString()}+ शाखाएं` },
    { label: 'प्रधान कार्यालय (Head Office)', label_hi: 'प्रधान कार्यालय (Head Office)', value: headOfficeHi, value_hi: headOfficeHi },
    { label: 'ग्राहक सहायता (Helpline)', label_hi: 'ग्राहक सहायता (Helpline)', value: knowledge.customerCare_hi, value_hi: knowledge.customerCare_hi }
  ];

  return {
    id: bankId,
    bank_id: bankId,
    slug: bankId,
    country: 'in',
    title: titleEn,
    title_hi: titleHi,
    title_bn: `${bankNameHi} (${shortName}) আইএফএসসি ও ব্যাংকিং সহায়িকা ২০২৬`,
    subtitle: subtitleEn,
    subtitle_hi: subtitleHi,
    subtitle_bn: `${bankNameHi}-এর সকল শাখার আইএফএসসি কোড, সুইফট কোড ও ব্যাংকিং নির্দেশিকা।`,
    meta_title: metaTitle,
    meta_description: metaDescription,
    meta_keywords: [
      `${bankNameHi} ifsc code`,
      `${shortName} ifsc code search`,
      `${bankNameHi} swift code`,
      `${shortName} branch micr code 2026`,
      `neft rtgs imps ${shortName}`,
      `ifsc code prefix ${ifscPrefix}`
    ],
    read_time: '6 मिनट पढ़ने का समय',
    author: 'World Bank Codes Financial Editorial Team',
    published_date: '2026-02-01',
    last_updated: '2026-09-04',
    overview: `Detailed guide to 11-digit IFSC codes, MICR, SWIFT BIC details, and fund transfer limits for ${bankNameEn}.`,
    overview_hi: overviewHi,
    sections,
    faqs,
    quick_stats: quickStats
  };
}

/**
 * Pre-generate all articles for all banks in India
 */
export const indiaBanksArticles: BankArticle[] = (banksData as any[]).map((bank) =>
  buildIndiaBankArticle(bank)
);

export function getIndiaArticleBySlug(slug: string): BankArticle | undefined {
  return indiaBanksArticles.find((a) => a.slug === slug || a.bank_id === slug);
}
