import { Bank, Branch } from '../types';

export interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  lang?: 'en' | 'bn';
}

export function generateSeoData(
  viewType: 'home' | 'banks' | 'bank_detail' | 'branch_detail' | 'routing' | 'swift',
  lang: 'en' | 'bn',
  bank?: Bank,
  branch?: Branch,
  query?: string
): { title: string; description: string } {
  const isBn = lang === 'bn';
  if (viewType === 'branch_detail' && branch) {
    return {
      title: `${branch.bank_name} (${branch.name} Branch) Routing Number & SWIFT Code`,
      description: `Find official BEFTN Routing Number: ${branch.routing_number} and SWIFT Code: ${branch.swift_code || 'HO'} for ${branch.bank_name}, ${branch.name} branch, Bangladesh.`
    };
  }
  if (viewType === 'bank_detail' && bank) {
    return {
      title: `${bank.name} (${bank.short_name}) All Branches Routing Numbers & SWIFT Codes`,
      description: `Explore all branches, BEFTN routing numbers, and SWIFT codes for ${bank.name} in Bangladesh.`
    };
  }
  if (viewType === 'banks') {
    return {
      title: isBn ? 'সকল তফসিলি ব্যাংক তালিকা ও কোড' : 'All Scheduled Banks List & Codes in Bangladesh',
      description: isBn ? 'বাংলাদেশের সকল সরকারি, বেসরকারি ও বিদেশি ব্যাংকের তালিকা।' : 'Complete list of scheduled banks in Bangladesh.'
    };
  }
  if (viewType === 'routing') {
    return {
      title: isBn ? 'বিইএফটিএন রাউটিং নম্বর ডিরেক্টরি' : 'BEFTN Routing Number Directory Bangladesh',
      description: isBn ? '৯ ডিজিটের রাউটিং নম্বর দিয়ে ব্যাংক ও শাখা খুঁজুন।' : 'Find bank branches by 9-digit BEFTN routing number.'
    };
  }
  if (viewType === 'swift') {
    return {
      title: isBn ? 'সুইফট কোড (SWIFT BIC) ডিরেক্টরি' : 'SWIFT Code Directory for Banks in Bangladesh',
      description: isBn ? 'আন্তর্জাতিক লেনদেনের জন্য ব্যাংকগুলোর সুইফট কোড।' : 'Find international SWIFT codes for banks in Bangladesh.'
    };
  }
  return {
    title: isBn ? 'BD Bank Info - ব্যাংক রাউটিং ও সুইফট কোড ফাইন্ডার' : 'BD Bank Info - Routing Number & SWIFT Code Finder',
    description: isBn ? 'বাংলাদেশের সকল ব্যাংকের রাউটিং নম্বর, সুইফট কোড এবং শাখা তথ্য।' : 'Official Bangladesh Bank routing numbers and SWIFT codes directory.'
  };
}

export function updateSEOMeta({ title, description, canonicalUrl, lang = 'bn' }: SEOProps): void {
  // Update document title
  document.title = title;

  // Update meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', description);

  // Update Open Graph Title
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (!ogTitle) {
    ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    document.head.appendChild(ogTitle);
  }
  ogTitle.setAttribute('content', title);

  // Update Open Graph Description
  let ogDesc = document.querySelector('meta[property="og:description"]');
  if (!ogDesc) {
    ogDesc = document.createElement('meta');
    ogDesc.setAttribute('property', 'og:description');
    document.head.appendChild(ogDesc);
  }
  ogDesc.setAttribute('content', description);

  // Update HTML lang attribute
  document.documentElement.lang = lang === 'bn' ? 'bn' : 'en';

  // Update Canonical URL
  if (canonicalUrl) {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);
  }
}
