// Germany Banking Comprehensive Guides & FAQs
// In English, Bengali (বাংলা), Hindi (हिन्दी), and Russian (Русский)

export interface GermanyBankingGuide {
  id: string;
  title: string;
  titleBn: string;
  titleHi: string;
  titleRu: string;
  summary: string;
  summaryBn: string;
  summaryHi: string;
  summaryRu: string;
  content: string;
  contentBn: string;
  contentHi: string;
  contentRu: string;
  faqs: Array<{
    question: string;
    questionBn: string;
    questionHi: string;
    questionRu: string;
    answer: string;
    answerBn: string;
    answerHi: string;
    answerRu: string;
  }>;
}

export const GERMANY_BANKING_GUIDES: GermanyBankingGuide[] = [
  {
    id: 'understanding-blz-and-german-iban',
    title: 'Complete Guide to German Bankleitzahl (BLZ), IBAN & SEPA Transfers',
    titleBn: 'জার্মান ব্যাংকলাইটজাহল (BLZ), IBAN ও সেপা (SEPA) ট্রান্সফার গাইড',
    titleHi: 'जर्मन बैंकलीत्ज़ाह्ल (BLZ), IBAN और सेपा ट्रांसफर गाइड',
    titleRu: 'Полный гид по немецким кодам BLZ, IBAN и переводам SEPA',
    summary: 'Everything you need to know about the 8-digit German Bankleitzahl (BLZ), 22-character German IBAN (DEkk), SEPA Instant Credit Transfers, and Deutsche Bundesbank clearing.',
    summaryBn: 'জার্মানির ৮-সংখ্যার ব্যাংকলাইটজাহল (BLZ), ২২-অক্ষরের জার্মান IBAN, সেপা ইনস্ট্যান্ট পেমেন্ট এবং ডয়চে বুন্দেসব্যাংক ক্লিয়ারিং সম্পর্কিত বিস্তারিত তথ্য।',
    summaryHi: 'जर्मनी के 8-अंकीय बैंकलीत्ज़ाह्ल (BLZ), 22-अक्षरीय IBAN और सेपा इंस्टेंट ट्रांसफर की सम्पूर्ण जानकारी।',
    summaryRu: 'Все об 8-значном коде BLZ Германии, 22-значном коде IBAN (DEkk), мгновенных переводах SEPA и клиринге Бундесбанка.',
    content: `### Understanding German Bank Identifiers: BLZ and IBAN

In Germany's financial system regulated by **Deutsche Bundesbank** and the **Federal Financial Supervisory Authority (BaFin)**, every domestic and international payment relies on two core identifiers:

1. **Bankleitzahl (BLZ)**: An 8-digit numerical code that identifies a specific German credit institution and its clearing region.
   - **Digits 1–3**: Clearing Area (Clearinggebiet / Bundesbank regional district).
   - **Digit 4**: Banking Group (e.g., 5 = Sparkassen, 6 = Landesbanken, 2 = Cooperative Volksbanken, 1/4 = Commercial banks, 0 = Bundesbank).
   - **Digits 5–8**: Internal Bank/Institute identifier assigned by Deutsche Bundesbank.

2. **German IBAN (International Bank Account Number)**: Exactly 22 alphanumeric characters starting with **DE**:
   - \`DE\` (Country code for Germany)
   - \`kk\` (2-digit checksum generated via ISO 7064 Modulo 97-10 algorithm)
   - \`BBBB BBBB\` (8-digit BLZ Bankleitzahl)
   - \`CCCC CCCC CC\` (10-digit Account Number, padded with leading zeros)

3. **SWIFT / BIC (ISO 9362)**: 8 or 11 character code required for international cross-border transfers outside the SEPA zone.`,
    contentBn: `### জার্মান ব্যাংক কোড পরিচিতি: BLZ এবং IBAN

জার্মানির ব্যাংকিং ব্যবস্থা **ডয়চে বুন্দেসব্যাংক (Deutsche Bundesbank)** এবং **বাফিন (BaFin)** দ্বারা নিয়ন্ত্রিত। জার্মানির প্রতিটি আর্থিক লেনদেনে মূলত দুটি কোড ব্যবহৃত হয়:

১. **ব্যাংকলাইটজাহল (Bankleitzahl - BLZ)**: ৮-সংখ্যার একটি স্বতন্ত্র সংখ্যা যা প্রতিটি নির্দিষ্ট ব্যাংক শাখা এবং ক্লিয়ারিং অঞ্চল নির্দেশ করে।
   - **১ম থেকে ৩য় সংখ্যা**: ক্লিয়ারিং এলাকা (যেমন: ৫০০ = ফ্রাঙ্কফুর্ট, ১০০ = বার্লিন, ৭০০ = মিউনিখ)।
   - **৪র্থ সংখ্যা**: ব্যাংক গ্রুপ (যেমন: ৫ = স্পারকাশে, ৬ = ল্যান্ডেসব্যাংক, ২ = সমবায় ভক্সব্যাংক, ১ = বাণিজ্যিক ব্যাংক)।
   - **৫ম থেকে ৮ম সংখ্যা**: নির্দিষ্ট ইনস্টিটিউট ও ব্রাঞ্চ আইডি।

২. **জার্মান IBAN (ইন্টারন্যাশনাল ব্যাংক অ্যাকাউন্ট নম্বর)**: মোট ২২ অক্ষরের একটি বৈশ্বিক নম্বর যা **DE** দিয়ে শুরু হয়।
   - \`DE\` (জার্মানির কান্ট্রি কোড)
   - \`kk\` (২-সংখ্যার নিরাপত্তা চেক ডিজিট Mod 97-10)
   - ৮-সংখ্যার BLZ কোড
   - ১০-সংখ্যার ব্যাংক অ্যাকাউন্ট নম্বর

৩. **SWIFT/BIC কোড**: ইউরোপীয় ইউনিয়নের বাইরে আন্তর্জাতিক রেমিট্যান্সের জন্য প্রয়োজনীয় ৮ বা ১১ অক্ষরের কোড (যেমন: ডয়চে ব্যাংকের জন্য DEUTDEDD)।`,
    contentHi: `### जर्मन बैंक कोड संरचना: BLZ और IBAN

जर्मनी की बैंकिंग प्रणाली **ड्यूश बुंडेसबैंक (Deutsche Bundesbank)** और **बाफिन (BaFin)** द्वारा संचालित होती है।

1. **बैंकलीत्ज़ाह्ल (BLZ - Bankleitzahl)**: 8-अंकों का विशिष्ट कोड जो बैंक शाखा और क्लीयरिंग क्षेत्र दर्शाता है।
2. **जर्मन IBAN**: 22 अक्षरों का खाता नंबर जो **DE** से शुरू होता है।
3. **SWIFT / BIC**: अंतरराष्ट्रीय मनी ट्रांसफर के लिए 8 या 11 अक्षरों का वैश्विक कोड।`,
    contentRu: `### Банковские коды Германии: BLZ и IBAN

Банковская система Германии контролируется **Немецким федеральным банком (Deutsche Bundesbank)** и **BaFin**:

1. **Bankleitzahl (BLZ)**: 8-значный числовой код немецкого банка.
2. **IBAN Германии**: 22-значный код, начинающийся с **DE**.
3. **SWIFT / BIC**: Международный код идентификации банка.`,
    faqs: [
      {
        question: 'Where can I find my German Bankleitzahl (BLZ)?',
        questionBn: 'জার্মান ব্যাংকের BLZ কোড কোথায় পাওয়া যাবে?',
        questionHi: 'जर्मन BLZ कोड कहाँ मिलेगा?',
        questionRu: 'Где найти немецкий банковский код BLZ?',
        answer: 'Your 8-digit BLZ is located inside digits 5 to 12 of your German IBAN (e.g. DEkk [50070010] xxxxxxxxxx) and is printed on your Girocard / Maestro debit card and account statements.',
        answerBn: 'আপনার ৮-সংখ্যার BLZ কোডটি আপনার জার্মান IBAN-এর ৫ থেকে ১২তম স্থানে থাকে এবং আপনার গিরোকার্ড (Girocard) ডেবিট কার্ড ও ব্যাংক স্টেটমেন্টে লেখা থাকে।',
        answerHi: 'आपका 8-अंकीय BLZ कोड आपके जर्मन IBAN के 5वें से 12वें स्थान पर स्थित होता है और यह आपके गिरोकार्ड (डेबिट कार्ड) पर छपा होता है।',
        answerRu: '8-значный код BLZ содержится в позициях с 5 по 12 вашего немецкого IBAN (DEkk [50070010] xxxxxxxxxx) и указан на карте Girocard.'
      },
      {
        question: 'How fast are SEPA Instant Credit Transfers in Germany?',
        questionBn: 'জার্মানিতে সেপা ইনস্ট্যান্ট ট্রান্সফারে কত সময় লাগে?',
        questionHi: 'जर्मनी में सेपा इंस्टेंट ट्रांसफर में कितना समय लगता है?',
        questionRu: 'Сколько времени занимает перевод SEPA Instant в Германии?',
        answer: 'SEPA Instant Credit Transfers are executed in under 10 seconds 24/7/365 across all German banks (Sparkassen, Deutsche Bank, Commerzbank, ING, DKB, N26) with funds immediately credited.',
        answerBn: 'সেপা ইনস্ট্যান্ট ট্রান্সফারের মাধ্যমে মাত্র ১০ সেকেন্ডের মধ্যে দিন-রাত ২৪ ঘণ্টা জার্মানির যেকোনো ব্যাংকে তাৎক্ষণিক টাকা স্থানান্তর সম্পন্ন হয়।',
        answerHi: 'सेपा इंस्टेंट ट्रांसफर मात्र 10 सेकंड के भीतर चौबीसों घंटे तुरंत पूरा हो जाता है।',
        answerRu: 'Мгновенные переводы SEPA Instant выполняются менее чем за 10 секунд круглосуточно между всеми немецкими банками.'
      }
    ]
  }
];
