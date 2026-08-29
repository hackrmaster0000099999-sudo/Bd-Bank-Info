import { Bank, BikBreakdown } from '../../types';
import russianBanks from './banks.json';

// Russian Federal Subject / OKATO region map for BIK Digits 3-4
export const RUSSIAN_REGIONS_OKATO: Record<string, { nameEn: string; nameRu: string; nameBn: string; nameHi: string; federalDistrict: string }> = {
  '45': {
    nameEn: 'Moscow City',
    nameRu: 'г. Москва',
    nameBn: 'মস্কো সিটি',
    nameHi: 'मॉस्को सिटी',
    federalDistrict: 'Central Federal District'
  },
  '40': {
    nameEn: 'Saint Petersburg City',
    nameRu: 'г. Санкт-Петербург',
    nameBn: 'সেন্ট পিটার্সবার্গ সিটি',
    nameHi: 'सेंट पीटर्सबर्ग सिटी',
    federalDistrict: 'Northwestern Federal District'
  },
  '46': {
    nameEn: 'Moscow Oblast',
    nameRu: 'Московская область',
    nameBn: 'মস্কো ওব্লাস্ট',
    nameHi: 'मॉस्को ओब्लास्ट',
    federalDistrict: 'Central Federal District'
  },
  '41': {
    nameEn: 'Leningrad Oblast',
    nameRu: 'Ленинградская область',
    nameBn: 'লেনিনগ্রাদ ওব্লাস্ট',
    nameHi: 'लेनिनग्राद ओब्लास्ट',
    federalDistrict: 'Northwestern Federal District'
  },
  '50': {
    nameEn: 'Novosibirsk Oblast',
    nameRu: 'Новосибирская область',
    nameBn: 'নোভোসিবির্স্ক ওব্লাস্ট',
    nameHi: 'नोवोसिबिर्स्क ओब्लास्ट',
    federalDistrict: 'Siberian Federal District'
  },
  '65': {
    nameEn: 'Sverdlovsk Oblast (Yekaterinburg)',
    nameRu: 'Свердловская область (Екатеринбург)',
    nameBn: 'স্ভার্দলোভস্ক ওব্লাস্ট (ইয়েকাটেরিনবার্গ)',
    nameHi: 'स्वेर्दलोव्स्क ओब्लास्ट (येकातेरिनबर्ग)',
    federalDistrict: 'Ural Federal District'
  },
  '22': {
    nameEn: 'Nizhny Novgorod Oblast',
    nameRu: 'Нижегородская область',
    nameBn: 'নিঝনি নভগোরোদ ওব্লাস্ট',
    nameHi: 'निज़नी नोवगोरोड ओब्लास्ट',
    federalDistrict: 'Volga Federal District'
  },
  '92': {
    nameEn: 'Republic of Tatarstan (Kazan)',
    nameRu: 'Республика Татарстан (Казань)',
    nameBn: 'তাতারস্তান প্রজাতন্ত্র (কাজান)',
    nameHi: 'तातारस्तान गणराज्य (कज़ान)',
    federalDistrict: 'Volga Federal District'
  },
  '60': {
    nameEn: 'Rostov Oblast',
    nameRu: 'Ростовская область',
    nameBn: 'রস্তভ ওব্লাস্ট',
    nameHi: 'रोस्तोव ओब्लास्ट',
    federalDistrict: 'Southern Federal District'
  },
  '03': {
    nameEn: 'Krasnodar Krai',
    nameRu: 'Краснодарский край',
    nameBn: 'ক্রাসনোদর ক্রাই',
    nameHi: 'क्रास्नोडार क्राय',
    federalDistrict: 'Southern Federal District'
  },
  '05': {
    nameEn: 'Primorsky Krai (Vladivostok)',
    nameRu: 'Приморский край (Владивосток)',
    nameBn: 'প্রিমরস্কি ক্রাই (ভ্লাদিভোস্টক)',
    nameHi: 'प्रिमोर्स्की क्राय (व्लादिवोस्तोक)',
    federalDistrict: 'Far Eastern Federal District'
  },
  '08': {
    nameEn: 'Khabarovsk Krai',
    nameRu: 'Хабаровский край',
    nameBn: 'খাবারভস্ক ক্রাই',
    nameHi: 'खाबरोव्स्क क्राय',
    federalDistrict: 'Far Eastern Federal District'
  },
  '34': {
    nameEn: 'Kostroma Oblast',
    nameRu: 'Костромская область',
    nameBn: 'কোস্ট্রোমা ওব্লাস্ট',
    nameHi: 'कोस्ट्रोमा ओब्लास्ट',
    federalDistrict: 'Central Federal District'
  },
  '75': {
    nameEn: 'Chelyabinsk Oblast',
    nameRu: 'Челябинская область',
    nameBn: 'চেলিয়াবিনস্ক ওব্লাস্ট',
    nameHi: 'चेल्याबििंस्क ओब्लास्ट',
    federalDistrict: 'Ural Federal District'
  },
  '52': {
    nameEn: 'Omsk Oblast',
    nameRu: 'Омская область',
    nameBn: 'ওমস্ক ওব্লাস্ট',
    nameHi: 'ओम्स्क ओब्लास्ट',
    federalDistrict: 'Siberian Federal District'
  },
  '80': {
    nameEn: 'Republic of Bashkortostan (Ufa)',
    nameRu: 'Республика Башкортостан (Уфа)',
    nameBn: 'বাশকর্তোস্তান প্রজাতন্ত্র (উফা)',
    nameHi: 'बाश्कोर्तोस्तान गणराज्य (ऊफ़ा)',
    federalDistrict: 'Volga Federal District'
  },
  '04': {
    nameEn: 'Krasnoyarsk Krai',
    nameRu: 'Красноярский край',
    nameBn: 'ক্রাসনোয়ারস্ক ক্রাই',
    nameHi: 'क्रास्नोयार्स्क क्राय',
    federalDistrict: 'Siberian Federal District'
  },
  '20': {
    nameEn: 'Voronezh Oblast',
    nameRu: 'Воронежская область',
    nameBn: 'ভোরোনেঝ ওব্লাস্ট',
    nameHi: 'वोरोनेज़ ओब्लास्ट',
    federalDistrict: 'Central Federal District'
  },
  '57': {
    nameEn: 'Perm Krai',
    nameRu: 'Пермский край',
    nameBn: 'পের্ম ক্রাই',
    nameHi: 'पर्म क्राय',
    federalDistrict: 'Volga Federal District'
  },
  '18': {
    nameEn: 'Volgograd Oblast',
    nameRu: 'Волгоградская область',
    nameBn: 'ভলগোগ্রাদ ওব্লাস্ট',
    nameHi: 'वोल्गोग्राद ओब्लास्ट',
    federalDistrict: 'Southern Federal District'
  },
  '63': {
    nameEn: 'Saratov Oblast',
    nameRu: 'Саратовская область',
    nameBn: 'সারাটভ ওব্লাস্ট',
    nameHi: 'सारातोव ओब्लास्ट',
    federalDistrict: 'Volga Federal District'
  },
  '71': {
    nameEn: 'Tyumen Oblast',
    nameRu: 'Тюменская область',
    nameBn: 'টিউমেন ওব্লাস্ট',
    nameHi: 'त्युमेन ओब्लास्ट',
    federalDistrict: 'Ural Federal District'
  },
  '25': {
    nameEn: 'Irkutsk Oblast',
    nameRu: 'Иркутская область',
    nameBn: 'ইরকুটস্ক ওব্লাস্ট',
    nameHi: 'इरकुत्स्क ओब्लास्ट',
    federalDistrict: 'Siberian Federal District'
  },
  '27': {
    nameEn: 'Kaliningrad Oblast',
    nameRu: 'Калининградская область',
    nameBn: 'কালিনিনগ্রাদ ওব্লাস্ট',
    nameHi: 'कलिनिनग्राद ओब्लास्ट',
    federalDistrict: 'Northwestern Federal District'
  }
};

export function decodeBikCode(bik: string): BikBreakdown {
  const cleanBik = bik.replace(/\D/g, '');
  
  if (cleanBik.length !== 9) {
    return {
      bikCode: bik,
      isValid: false,
      countryCode: '',
      regionCode: '',
      regionName: 'Unknown',
      regionNameRu: 'Неизвестно',
      settlementCenterCode: '',
      creditOrgCode: ''
    };
  }

  const countryCode = cleanBik.substring(0, 2); // '04'
  const regionCode = cleanBik.substring(2, 4); // OKATO region
  const settlementCenterCode = cleanBik.substring(4, 6); // RKC
  const creditOrgCode = cleanBik.substring(6, 9); // Credit organization 050-999

  const isValid = countryCode === '04';
  const regionInfo = RUSSIAN_REGIONS_OKATO[regionCode] || {
    nameEn: `Russian Region (${regionCode})`,
    nameRu: `Субъект РФ (код ${regionCode})`,
    nameBn: `রাশিয়ান অঞ্চল (${regionCode})`,
    nameHi: `रूसी क्षेत्र (${regionCode})`,
    federalDistrict: 'Russian Federation'
  };

  // Find matching bank by BIK prefix or exact BIK
  const bank = (russianBanks as Bank[]).find(
    (b) => b.bik_code === cleanBik || (b.bik_code && b.bik_code.substring(6, 9) === creditOrgCode)
  );

  return {
    bikCode: cleanBik,
    isValid,
    countryCode,
    countryName: 'Russian Federation (РФ)',
    regionCode,
    regionName: regionInfo.nameEn,
    regionNameRu: regionInfo.nameRu,
    settlementCenterCode,
    creditOrgCode,
    branchIndex: creditOrgCode,
    bank,
    branchName: bank ? `${bank.name} (${regionInfo.nameEn})` : undefined,
    corrAccount: bank?.corr_account
  };
}

export const decodeBik = decodeBikCode;
