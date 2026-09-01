import { Bank, Branch, Language } from '../../types';

export function getCanadaHomeSeo(lang: Language) {
  switch (lang) {
    case 'bn':
      return {
        title: 'কানাডা ব্যাংক ট্রানজিট নম্বর, EFT রাউটিং ও সুইফট কোড ডিরেক্টরি | পেমেন্টস কানাডা',
        description: 'কানাডার সকল শীর্ষ ব্যাংক (RBC, TD, Scotiabank, BMO, CIBC, Desjardins) এর ট্রানজিট নম্বর, ৩-ডিজিট ইন্সটিটিউশন কোড, ৯-সংখ্যার EFT রাউটিং ও SWIFT কোড ডিরেক্টরি।'
      };
    case 'hi':
      return {
        title: 'कनाडा बैंक ट्रांजिट नंबर, EFT राउटिंग एवं SWIFT कोड डायरेक्टरी | पेमेंट्स कनाडा',
        description: 'कनाडा के प्रमुख बैंकों (RBC, TD, Scotiabank, BMO, CIBC) के 5-अंकीय ट्रांजिट नंबर, 3-अंकीय संस्थान कोड, 9-अंकीय EFT राउटिंग और स्विफ्ट कोड खोजें।'
      };
    case 'ru':
      return {
        title: 'Банковские коды Канады: Transit, Institution, EFT Routing и SWIFT | Справочник',
        description: 'Полный справочник банков Канады (RBC, TD Bank, Scotiabank, BMO, CIBC): транзитные номера отделений, коды учреждений, 9-значные номера EFT и SWIFT.'
      };
    default:
      return {
        title: 'Canada Bank Transit Numbers, Institution Codes & 9-Digit EFT Routing Directory',
        description: 'Official Payments Canada Transit Numbers, 3-digit Institution Numbers, 9-digit EFT Electronic Routing & SWIFT Codes for RBC, TD, Scotiabank, BMO, CIBC and credit unions across Ontario, Quebec, BC and Alberta.'
      };
  }
}

export function getCanadaBankSeo(bank: Bank, lang: Language) {
  const bankName = lang === 'bn' && bank.name_bn ? bank.name_bn : bank.name;
  const instCode = bank.institution_number || bank.bank_code;
  const swift = bank.swift_code || 'N/A';

  switch (lang) {
    case 'bn':
      return {
        title: `${bankName} ট্রানজিট নম্বর, ইন্সটিটিউশন কোড (${instCode}) ও SWIFT কোড (${swift})`,
        description: `${bankName} এর সকল ব্রাঞ্চ ট্রানজিট নম্বর, ৩-ডিজিট ইন্সটিটিউশন নম্বর ${instCode}, ৯-সংখ্যার EFT রাউটিং এবং আন্তর্জাতিক ওয়্যার সুইফট কোড ${swift}।`
      };
    case 'hi':
      return {
        title: `${bankName} ट्रांजिट नंबर, संस्थान कोड (${instCode}) एवं SWIFT कोड (${swift})`,
        description: `${bankName} की सभी शाखाओं के ट्रांजिट नंबर, 3-अंकीय संस्थान कोड ${instCode}, EFT राउटिंग और स्विफ्ट कोड ${swift} खोजें।`
      };
    case 'ru':
      return {
        title: `${bankName} - Транзитные номера, код банка (${instCode}) и SWIFT (${swift}) Канада`,
        description: `Реквизиты ${bankName}: 3-значный код банка ${instCode}, транзитные номера отделений в Канаде, 9-значный код EFT и SWIFT код ${swift}.`
      };
    default:
      return {
        title: `${bank.name} Transit Numbers, Institution Code ${instCode} & SWIFT ${swift}`,
        description: `Find all Canadian branch transit numbers, 3-digit institution code ${instCode}, 9-digit direct deposit EFT routing and SWIFT code ${swift} for ${bank.name} in Ontario, BC, Quebec, Alberta.`
      };
  }
}

export function getCanadaBranchSeo(branch: Branch, lang: Language) {
  const branchName = lang === 'bn' && branch.name_bn ? branch.name_bn : branch.name;
  const bankName = lang === 'bn' && branch.bank_name_bn ? branch.bank_name_bn : branch.bank_name;
  const transit = branch.transit_number || branch.branch_code;
  const inst = branch.institution_number || '003';
  const eft = branch.routing_number;

  switch (lang) {
    case 'bn':
      return {
        title: `${bankName} ${branchName} ট্রানজিট নম্বর ${transit} ও EFT রাউটিং (${eft})`,
        description: `${bankName} ${branchName} এর ৫-সংখ্যার ট্রানজিট কোড ${transit}, ইন্সটিটিউশন নম্বর ${inst}, ৯-সংখ্যার ডিরেক্ট ডিপোজিট EFT রাউটিং ${eft}, পূর্ণ ঠিকানা ও ফোন নম্বর।`
      };
    case 'hi':
      return {
        title: `${bankName} ${branchName} ट्रांजिट नंबर ${transit} व EFT राउटिंग (${eft})`,
        description: `${bankName} ${branchName} का 5-अंकीय ट्रांजिट कोड ${transit}, संस्थान कोड ${inst}, EFT राउटिंग ${eft}, पता व फोन नंबर।`
      };
    case 'ru':
      return {
        title: `${bankName} ${branchName} - Transit ${transit}, EFT ${eft} и реквизиты`,
        description: `Реквизиты отделения ${bankName} (${branchName}): транзитный номер ${transit}, код учреждения ${inst}, EFT маршрутизатор ${eft}, адрес и контакты.`
      };
    default:
      return {
        title: `${branch.bank_name} ${branch.name} Transit Number ${transit} & EFT Routing ${eft}`,
        description: `${branch.bank_name} ${branch.name} Transit Number is ${transit}, Institution Number is ${inst}, 9-Digit Direct Deposit EFT Routing is ${eft}. Full address: ${branch.address}. Phone: ${branch.phone || 'Available online'}.`
      };
  }
}
