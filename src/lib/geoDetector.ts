import { Country, Language } from '../types';

export interface DetectedGeo {
  country: Country;
  lang: Language;
  source: 'timezone' | 'locale' | 'network' | 'saved';
  confidence: number;
}

const STORAGE_KEY_COUNTRY = 'wbc_user_country_preference';
const STORAGE_KEY_LANG = 'wbc_user_lang_preference';
const STORAGE_KEY_MANUAL = 'wbc_user_has_manual_override';

/**
 * Detect user country and language from browser hints (Timezone, Navigator locale, and network geo)
 */
export function detectUserCountryAndLang(): { country: Country; lang: Language } {
  // 1. Check if user already manually selected a preference in the past
  if (typeof window !== 'undefined') {
    const manualOverride = localStorage.getItem(STORAGE_KEY_MANUAL);
    const savedCountry = localStorage.getItem(STORAGE_KEY_COUNTRY) as Country | null;
    const savedLang = localStorage.getItem(STORAGE_KEY_LANG) as Language | null;

    if (manualOverride === 'true' && savedCountry) {
      return {
        country: savedCountry,
        lang: savedLang || getDefaultLanguageForCountry(savedCountry)
      };
    }
  }

  // 2. Client-side fast detection via Browser Timezone (Instant & highly reliable)
  const timezoneGeo = detectFromTimezone();
  if (timezoneGeo) {
    return timezoneGeo;
  }

  // 3. Fallback to Browser Language Locale (e.g. bn-BD, hi-IN, ru-RU, en-GB, en-US)
  const localeGeo = detectFromLocale();
  if (localeGeo) {
    return localeGeo;
  }

  // Default fallback (USA or UK depending on global international standard)
  return { country: 'us', lang: 'en' };
}

/**
 * Detects country based on Intl.DateTimeFormat timezone string
 */
function detectFromTimezone(): { country: Country; lang: Language } | null {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';

    // Bangladesh
    if (tz === 'Asia/Dhaka') {
      return { country: 'bd', lang: 'bn' };
    }

    // United Arab Emirates (UAE)
    if (tz === 'Asia/Dubai' || tz === 'Asia/Abu_Dhabi' || tz === 'Asia/Muscat') {
      return { country: 'ae', lang: 'en' };
    }

    // Singapore
    if (tz === 'Asia/Singapore') {
      return { country: 'sg', lang: 'en' };
    }

    // India
    if (tz === 'Asia/Kolkata' || tz === 'Asia/Calcutta' || tz === 'Asia/Colombo') {
      return { country: 'in', lang: 'hi' };
    }

    // Russia & CIS regions
    if (
      tz.startsWith('Europe/Moscow') ||
      tz.startsWith('Europe/Samara') ||
      tz.startsWith('Europe/Kaliningrad') ||
      tz.startsWith('Asia/Yekaterinburg') ||
      tz.startsWith('Asia/Novosibirsk') ||
      tz.startsWith('Asia/Krasnoyarsk') ||
      tz.startsWith('Asia/Irkutsk') ||
      tz.startsWith('Asia/Yakutsk') ||
      tz.startsWith('Asia/Vladivostok') ||
      tz.startsWith('Asia/Magadan') ||
      tz.startsWith('Asia/Kamchatka') ||
      tz.startsWith('Asia/Omsk') ||
      tz.startsWith('Asia/Barnaul') ||
      tz.startsWith('Asia/Tomsk')
    ) {
      return { country: 'ru', lang: 'ru' };
    }

    // United Kingdom
    if (
      tz === 'Europe/London' ||
      tz === 'Europe/Belfast' ||
      tz === 'Europe/Jersey' ||
      tz === 'Europe/Guernsey' ||
      tz === 'Europe/Isle_of_Man' ||
      tz === 'GB' ||
      tz === 'GMT'
    ) {
      return { country: 'uk', lang: 'en' };
    }

    // Canada
    if (
      tz.startsWith('America/Toronto') ||
      tz.startsWith('America/Vancouver') ||
      tz.startsWith('America/Montreal') ||
      tz.startsWith('America/Edmonton') ||
      tz.startsWith('America/Calgary') ||
      tz.startsWith('America/Winnipeg') ||
      tz.startsWith('America/Halifax') ||
      tz.startsWith('America/St_Johns') ||
      tz.startsWith('America/Regina') ||
      tz.startsWith('America/Moncton') ||
      tz.startsWith('America/Yellowknife') ||
      tz.startsWith('America/Whitehorse') ||
      tz.startsWith('America/Iqaluit') ||
      tz === 'Canada/Eastern' ||
      tz === 'Canada/Pacific' ||
      tz === 'Canada/Central' ||
      tz === 'Canada/Mountain' ||
      tz === 'Canada/Atlantic' ||
      tz === 'Canada/Newfoundland'
    ) {
      return { country: 'ca', lang: 'en' };
    }

    // Australia
    if (
      tz.startsWith('Australia/Sydney') ||
      tz.startsWith('Australia/Melbourne') ||
      tz.startsWith('Australia/Brisbane') ||
      tz.startsWith('Australia/Perth') ||
      tz.startsWith('Australia/Adelaide') ||
      tz.startsWith('Australia/Hobart') ||
      tz.startsWith('Australia/Darwin') ||
      tz.startsWith('Australia/Canberra') ||
      tz.startsWith('Australia/Lord_Howe') ||
      tz.startsWith('Australia/Eucla') ||
      tz.startsWith('Australia/Broken_Hill') ||
      tz.startsWith('Australia/Currie') ||
      tz.startsWith('Australia/Lindeman') ||
      tz === 'Australia/ACT' ||
      tz === 'Australia/NSW' ||
      tz === 'Australia/North' ||
      tz === 'Australia/Queensland' ||
      tz === 'Australia/South' ||
      tz === 'Australia/Tasmania' ||
      tz === 'Australia/Victoria' ||
      tz === 'Australia/West'
    ) {
      return { country: 'au', lang: 'en' };
    }

    // United States
    if (
      tz.startsWith('America/New_York') ||
      tz.startsWith('America/Chicago') ||
      tz.startsWith('America/Denver') ||
      tz.startsWith('America/Los_Angeles') ||
      tz.startsWith('America/Phoenix') ||
      tz.startsWith('America/Detroit') ||
      tz.startsWith('America/Indiana') ||
      tz.startsWith('America/Anchorage') ||
      tz.startsWith('America/Honolulu') ||
      tz.startsWith('America/Boise') ||
      tz.startsWith('America/Juneau') ||
      tz.startsWith('America/Sitka') ||
      tz.startsWith('America/Yakutat') ||
      tz.startsWith('America/Nome') ||
      tz.startsWith('America/Adak') ||
      tz.startsWith('America/Menominee') ||
      tz.startsWith('America/Kentucky') ||
      tz.startsWith('America/North_Dakota') ||
      tz === 'US/Eastern' ||
      tz === 'US/Central' ||
      tz === 'US/Mountain' ||
      tz === 'US/Pacific' ||
      tz === 'US/Alaska' ||
      tz === 'US/Hawaii'
    ) {
      return { country: 'us', lang: 'en' };
    }
  } catch (err) {
    console.debug('Timezone detection error', err);
  }
  return null;
}

/**
 * Detects country based on Navigator Language
 */
function detectFromLocale(): { country: Country; lang: Language } | null {
  try {
    const navLangs = navigator.languages || [navigator.language];
    for (const rawLang of navLangs) {
      const l = (rawLang || '').toLowerCase();

      if (l.includes('bn') || l.includes('bd')) {
        return { country: 'bd', lang: 'bn' };
      }
      if (l.includes('hi') || l.endsWith('-in')) {
        return { country: 'in', lang: 'hi' };
      }
      if (l.includes('ru') || l.endsWith('-ru') || l.endsWith('-by') || l.endsWith('-kz')) {
        return { country: 'ru', lang: 'ru' };
      }
      if (l.endsWith('-gb') || l.endsWith('-uk')) {
        return { country: 'uk', lang: 'en' };
      }
      if (l.endsWith('-ae') || l.includes('ae')) {
        return { country: 'ae', lang: 'en' };
      }
      if (l.endsWith('-sg') || l.includes('sg')) {
        return { country: 'sg', lang: 'en' };
      }
      if (l.endsWith('-ca') || l.includes('ca')) {
        return { country: 'ca', lang: 'en' };
      }
      if (l.endsWith('-au') || l.includes('en-au')) {
        return { country: 'au', lang: 'en' };
      }
      if (l.endsWith('-us')) {
        return { country: 'us', lang: 'en' };
      }
    }
  } catch (err) {
    console.debug('Locale detection error', err);
  }
  return null;
}

/**
 * Asynchronous background network IP detection to refine if timezone is generic UTC
 */
export async function tryAsyncGeoLookup(): Promise<{ country: Country; lang: Language } | null> {
  if (typeof window === 'undefined') return null;
  const manualOverride = localStorage.getItem(STORAGE_KEY_MANUAL);
  if (manualOverride === 'true') return null; // Respect user's explicit choice

  try {
    // Fast lightweight free endpoint
    const res = await fetch('https://api.country.is/', { cache: 'force-cache' });
    if (!res.ok) return null;
    const data = await res.json();
    const code = (data?.country || '').toLowerCase();

    if (code === 'bd') return { country: 'bd', lang: 'bn' };
    if (code === 'in') return { country: 'in', lang: 'hi' };
    if (code === 'ru' || code === 'by' || code === 'kz') return { country: 'ru', lang: 'ru' };
    if (code === 'gb' || code === 'uk') return { country: 'uk', lang: 'en' };
    if (code === 'ae') return { country: 'ae', lang: 'en' };
    if (code === 'sg') return { country: 'sg', lang: 'en' };
    if (code === 'ca') return { country: 'ca', lang: 'en' };
    if (code === 'au') return { country: 'au', lang: 'en' };
    if (code === 'us') return { country: 'us', lang: 'en' };
  } catch {
    // Silently continue without error
  }
  return null;
}

/**
 * Save manual user choice so automatic detection won't override what user intentionally clicked
 */
export function recordUserManualCountry(country: Country, lang: Language) {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY_COUNTRY, country);
    localStorage.setItem(STORAGE_KEY_LANG, lang);
    localStorage.setItem(STORAGE_KEY_MANUAL, 'true');
  }
}

export function getDefaultLanguageForCountry(c: Country): Language {
  switch (c) {
    case 'bd':
      return 'bn';
    case 'in':
      return 'hi';
    case 'ru':
      return 'ru';
    case 'sg':
    case 'ae':
    case 'uk':
    case 'us':
    case 'ca':
    case 'au':
    default:
      return 'en';
  }
}
