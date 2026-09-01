const fs = require('fs');
const path = require('path');

const banks = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/canada/banks.json'), 'utf8'));

// Detailed provinces and cities across Canada
const provinces = {
  ontario: {
    division: 'Ontario',
    division_bn: 'ওন্টারিও',
    division_hi: 'ओंटारियो',
    division_ru: 'Онтарио',
    cities: [
      { name: 'Toronto Financial District', district: 'Toronto', district_bn: 'টরন্টো', district_hi: 'टोरंटो', district_ru: 'Торонто', upazila: 'Bay & King Downtown', address: '200 Bay Street, Suite 100', address_bn: '২০০ বে স্ট্রিট, সুইট ১০০, টরন্টো, ওন্টারিও', zip: 'M5J 2J5', phone_area: '416' },
      { name: 'Toronto Midtown Yonge', district: 'Toronto', district_bn: 'টরন্টো', district_hi: 'टोरंटो', district_ru: 'Торонто', upazila: 'Yonge & Eglinton', address: '2300 Yonge Street', address_bn: '২৩০০ ইয়ং স্ট্রিট, টরন্টো, ওন্টারিও', zip: 'M4P 1E4', phone_area: '416' },
      { name: 'Toronto North York', district: 'Toronto', district_bn: 'টরন্টো', district_hi: 'टोरंटो', district_ru: 'Торонто', upazila: 'North York Centre', address: '5140 Yonge Street', address_bn: '৫১৪০ ইয়ং স্ট্রিট, নর্থ ইয়র্ক, টরন্টো', zip: 'M2N 6L7', phone_area: '416' },
      { name: 'Toronto Scarborough Town', district: 'Toronto', district_bn: 'টরন্টো', district_hi: 'टोरंटो', district_ru: 'Торонто', upazila: 'Scarborough Town Centre', address: '300 Borough Drive', address_bn: '৩০০ বোরো ড্রাইভ, স্কারবোরো, টরন্টো', zip: 'M1P 4P5', phone_area: '416' },
      { name: 'Toronto Etobicoke West', district: 'Toronto', district_bn: 'টরন্টো', district_hi: 'टोरंटो', district_ru: 'Торонто', upazila: 'Bloor West Village', address: '2930 Bloor Street West', address_bn: '২৯৩০ ব্লুর স্ট্রিট ওয়েস্ট, ইটোভিকো', zip: 'M8X 1B6', phone_area: '416' },
      { name: 'Ottawa Parliament Hill', district: 'Ottawa', district_bn: 'অটোয়া', district_hi: 'ओटावा', district_ru: 'Оттава', upazila: 'Centretown Downtown', address: '50 O\'Connor Street', address_bn: '৫০ ওকনর স্ট্রিট, অটোয়া, ওন্টারিও', zip: 'K1P 6L2', phone_area: '613' },
      { name: 'Ottawa Kanata Tech Hub', district: 'Ottawa', district_bn: 'অটোয়া', district_hi: 'ओटावा', district_ru: 'Оттава', upazila: 'Kanata Research Park', address: '400 March Road', address_bn: '৪০০ মার্চ রোড, কানাটা, অটোয়া', zip: 'K2K 3H4', phone_area: '613' },
      { name: 'Mississauga City Centre', district: 'Peel Region', district_bn: 'মিসিসাগা', district_hi: 'मिसिसॉगा', district_ru: 'Миссиссога', upazila: 'Square One Financial Center', address: '100 City Centre Drive', address_bn: '১০০ সিটি সেন্টার ড্রাইভ, মিসিসাগা', zip: 'L5B 2C9', phone_area: '905' },
      { name: 'Brampton Downtown Heritage', district: 'Peel Region', district_bn: 'ব্র্যাম্পটন', district_hi: 'ब्रैम्पटन', district_ru: 'Брамптон', upazila: 'Queen & Main', address: '1 Main Street North', address_bn: '১ মেইন স্ট্রিট নর্থ, ব্র্যাম্পটন', zip: 'L6X 1M8', phone_area: '905' },
      { name: 'Hamilton James Street', district: 'Hamilton', district_bn: 'হ্যামিল্টন', district_hi: 'हैमिल्टन', district_ru: 'Гамильтон', upazila: 'Downtown Commercial Core', address: '21 King Street West', address_bn: '২১ কিং স্ট্রিট ওয়েস্ট, হ্যামিল্টন', zip: 'L8P 4W7', phone_area: '905' },
      { name: 'London Richmond Row', district: 'Middlesex County', district_bn: 'লন্ডন', district_hi: 'लंदन', district_ru: 'Лондон', upazila: 'Richmond Street Financial', address: '380 Wellington Street', address_bn: '৩৮০ ওয়েলিংটন স্ট্রিট, লন্ডন, ওন্টারিও', zip: 'N6A 5B5', phone_area: '519' },
      { name: 'Kitchener-Waterloo Innovation', district: 'Waterloo Region', district_bn: 'ওয়াটারলু', district_hi: 'वाटरलू', district_ru: 'Ватерлоо', upazila: 'King Street Tech Corridor', address: '50 Queen Street North', address_bn: '৫০ কুইন স্ট্রিট নর্থ, কিচেনার', zip: 'N2H 6P4', phone_area: '519' },
      { name: 'Windsor Ouellette Financial', district: 'Essex County', district_bn: 'উইন্ডসর', district_hi: 'विंडसर', district_ru: 'Виндзор', upazila: 'Riverfront Downtown', address: '100 Ouellette Avenue', address_bn: '১০০ ওলেত্তে এভিনিউ, উইন্ডসর', zip: 'N9A 6T1', phone_area: '519' },
      { name: 'Markham High Tech Hub', district: 'York Region', district_bn: 'মার্খাম', district_hi: 'मार्खम', district_ru: 'Маркем', upazila: 'Warden & Highway 7', address: '3100 Steeles Avenue East', address_bn: '৩১০০ স্টিলস এভিনিউ ইস্ট, মার্খাম', zip: 'L3R 8T3', phone_area: '905' },
      { name: 'Vaughan Metropolitan Centre', district: 'York Region', district_bn: 'ভন', district_hi: 'वॉन', district_ru: 'Вон', upazila: 'Highway 7 & Jane', address: '3100 Rutherford Road', address_bn: '৩১০০ রাদারফোর্ড রোড, ভন', zip: 'L4K 0G4', phone_area: '905' }
    ]
  },
  quebec: {
    division: 'Quebec',
    division_bn: 'কুইবেক',
    division_hi: 'क्यूबेक',
    division_ru: 'Квебек',
    cities: [
      { name: 'Montreal Downtown Ville-Marie', district: 'Montreal', district_bn: 'মন্ট্রিল', district_hi: 'मॉन्ट्रियल', district_ru: 'Монреаль', upazila: 'Boulevard Rene-Levesque', address: '600 Rue De La Gauchetiere Ouest', address_bn: '৬০০ রু দ্য লা গশেতিয়ের ওয়েস্ট, মন্ট্রিল', zip: 'H3B 4L2', phone_area: '514' },
      { name: 'Montreal Old Port Place d\'Armes', district: 'Montreal', district_bn: 'মন্ট্রিল', district_hi: 'मॉन्ट्रियल', district_ru: 'Монреаль', upazila: 'Old Montreal Financial', address: '119 Rue Saint-Jacques', address_bn: '১১৯ রু সেন্ট-জ্যাক, মন্ট্রিল', zip: 'H2Y 1L6', phone_area: '514' },
      { name: 'Montreal West Island Pointe-Claire', district: 'Montreal', district_bn: 'মন্ট্রিল', district_hi: 'मॉन्ट्रियल', district_ru: 'Монреаль', upazila: 'Trans-Canada Highway', address: '6815 Autoroute Transcanadienne', address_bn: '৬৮১৫ অটোরেট ট্রান্সকানাডিয়ান, মন্ট্রিল', zip: 'H9R 5J1', phone_area: '514' },
      { name: 'Quebec City Haute-Ville', district: 'Capitale-Nationale', district_bn: 'কুইবেক সিটি', district_hi: 'क्यूबेक सिटी', district_ru: 'Квебек Сити', upazila: 'Place d\'Youville', address: '500 Grande Allee Est', address_bn: '৫০০ গ্র্যান্ড অ্যালি ইস্ট, কুইবেক সিটি', zip: 'G1R 2J7', phone_area: '418' },
      { name: 'Quebec City Sainte-Foy', district: 'Capitale-Nationale', district_bn: 'কুইবেক সিটি', district_hi: 'क्यूबेक सिटी', district_ru: 'Квебек Сити', upazila: 'Laurier Financial Hub', address: '2700 Boulevard Laurier', address_bn: '২৭০০ বুলেভার্ড লরিয়ার, কুইবেক সিটি', zip: 'G1V 2L8', phone_area: '418' },
      { name: 'Laval Boulevard Saint-Martin', district: 'Laval', district_bn: 'লাভাল', district_hi: 'लावल', district_ru: 'Лаваль', upazila: 'Centropolis Financial Core', address: '3055 Boulevard Saint-Martin Ouest', address_bn: '৩০৫৫ বুলেভার্ড সেন্ট-মার্টিন, লাভাল', zip: 'H7T 1A1', phone_area: '450' },
      { name: 'Gatineau Promenade du Portage', district: 'Outaouais', district_bn: 'গাতিনো', district_hi: 'गैतिनो', district_ru: 'Гатино', upazila: 'Hull Sector Downtown', address: '15 Rue Eddy', address_bn: '১৫ রু এডি, গাতিনো, কুইবেক', zip: 'J8X 2V6', phone_area: '819' },
      { name: 'Sherbrooke King Ouest', district: 'Estrie', district_bn: 'শেরব্রুক', district_hi: 'शेरब्रुक', district_ru: 'Шербрук', upazila: 'Downtown Commercial', address: '150 Rue Wellington Nord', address_bn: '১৫০ রু ওয়েলিংটন নর্ড, শেরব্রুক', zip: 'J1H 5C6', phone_area: '819' },
      { name: 'Trois-Rivieres Boulevard des Forges', district: 'Mauricie', district_bn: 'ট্রোয়া-রিভিয়ার', district_hi: 'ट्रोइस-रिविएरेस', district_ru: 'Труа-Ривьер', upazila: 'Centre-Ville', address: '1350 Rue Royale', address_bn: '১৩৫০ রু রয়্যাল, ট্রোয়া-রিভিয়ার', zip: 'G9A 4J4', phone_area: '819' },
      { name: 'Longueuil Boulevard Roland-Therrien', district: 'Monteregie', district_bn: 'লঙ্গুইল', district_hi: 'लॉन्ग्यूइल', district_ru: 'Лонгёй', upazila: 'Metro Longueuil Financial', address: '100 Place Charles-Le Moyne', address_bn: '১০০ প্লেস চার্লস-লে ময়ন, লঙ্গুইল', zip: 'J4K 2T5', phone_area: '450' }
    ]
  },
  british_columbia: {
    division: 'British Columbia',
    division_bn: 'ব্রিটিশ কলম্বিয়া',
    division_hi: 'ब्रिटिश कोलंबिया',
    division_ru: 'Британская Колумбия',
    cities: [
      { name: 'Vancouver Financial District Burrard', district: 'Metro Vancouver', district_bn: 'ভ্যাঙ্কুভার', district_hi: 'वैंकूवर', district_ru: 'Ванкувер', upazila: 'Burrard & Georgia Financial', address: '666 Burrard Street, Suite 100', address_bn: '৬৬৬ বুরার্ড স্ট্রিট, ভ্যাঙ্কুভার, বিসি', zip: 'V6C 2X8', phone_area: '604' },
      { name: 'Vancouver West Hastings Waterfront', district: 'Metro Vancouver', district_bn: 'ভ্যাঙ্কুভার', district_hi: 'वैंकूवर', district_ru: 'Ванкувер', upazila: 'Waterfront Financial Core', address: '200 Granville Street', address_bn: '২০০ গ্র্যানভিল স্ট্রিট, ভ্যাঙ্কুভার', zip: 'V6C 1S4', phone_area: '604' },
      { name: 'Vancouver Broadway Corridor', district: 'Metro Vancouver', district_bn: 'ভ্যাঙ্কুভার', district_hi: 'वैंकूवर', district_ru: 'Ванкувер', upazila: 'Broadway Tech & Health', address: '1405 West Broadway', address_bn: '১৪০৫ ওয়েস্ট ব্রডওয়ে, ভ্যাঙ্কুভার', zip: 'V6H 1H6', phone_area: '604' },
      { name: 'Burnaby Metrotown Centre', district: 'Metro Vancouver', district_bn: 'বার্নাবি', district_hi: 'बर्नबी', district_ru: 'Бёрнаби', upazila: 'Kingsway Financial Plaza', address: '4800 Kingsway, Metrotown', address_bn: '৪৮০০ কিংসওয়ে, মেট্রোটাউন, বার্নাবি', zip: 'V5H 4J2', phone_area: '604' },
      { name: 'Richmond No 3 Road Financial', district: 'Metro Vancouver', district_bn: 'রিচমন্ড', district_hi: 'रिचमंड', district_ru: 'Ричмонд', upazila: 'Richmond Centre SkyTrain', address: '6061 No. 3 Road', address_bn: '৬০৬১ নং ৩ রোড, রিচমন্ড, বিসি', zip: 'V6Y 2B2', phone_area: '604' },
      { name: 'Surrey City Centre King George', district: 'Metro Vancouver', district_bn: 'সারে', district_hi: 'सरे', district_ru: 'Суррей', upazila: 'Surrey Central Plaza', address: '13450 102 Avenue', address_bn: '১৩৪৫০ ১০২ এভিনিউ, সারে, বিসি', zip: 'V3T 5X3', phone_area: '604' },
      { name: 'Victoria Government Street', district: 'Capital Region', district_bn: 'ভিক্টোরিয়া', district_hi: 'विक्टोरिया', district_ru: 'Виктория', upazila: 'Inner Harbour Downtown', address: '1075 Douglas Street', address_bn: '১০৭৫ ডগলাস স্ট্রিট, ভিক্টোরিয়া, বিসি', zip: 'V8W 2C9', phone_area: '250' },
      { name: 'Kelowna Downtown Bernard', district: 'Central Okanagan', district_bn: 'কেলওনা', district_hi: 'केलोव्ना', district_ru: 'Келоуна', upazila: 'Okanagan Waterfront Hub', address: '400 Bernard Avenue', address_bn: '৪০০ বার্নার্ড এভিনিউ, কেলওনা', zip: 'V1Y 6N7', phone_area: '250' },
      { name: 'Abbotsford South Fraser Way', district: 'Fraser Valley', district_bn: 'অ্যাবটসফোর্ড', district_hi: 'एबॉट्सफ़ोर्ड', district_ru: 'Абботсфорд', upazila: 'Clearbrook Commercial', address: '32071 South Fraser Way', address_bn: '৩২০৭১ সাউথ ফ্রেজার ওয়ে, অ্যাবটসফোর্ড', zip: 'V2T 1W4', phone_area: '604' },
      { name: 'Kamloops Victoria Street', district: 'Thompson-Nicola', district_bn: 'কামলুপস', district_hi: 'कमलूप्स', district_ru: 'Камлупс', upazila: 'City Core', address: '290 3rd Avenue', address_bn: '২৯০ ৩য় এভিনিউ, কামলুপস, বিসি', zip: 'V2C 3M3', phone_area: '250' }
    ]
  },
  alberta: {
    division: 'Alberta',
    division_bn: 'আলবার্টা',
    division_hi: 'अल्बर्टा',
    division_ru: 'Альберта',
    cities: [
      { name: 'Calgary Downtown 8th Ave', district: 'Calgary Region', district_bn: 'ক্যালগারি', district_hi: 'कैलगरी', district_ru: 'Калгари', upazila: 'Stephen Avenue Mall Financial', address: '333 7th Avenue SW, Suite 100', address_bn: '৩৩৩ ৭ম এভিনিউ এসডব্লিউ, ক্যালগারি', zip: 'T2P 2Z1', phone_area: '403' },
      { name: 'Calgary Bankers Hall Tower', district: 'Calgary Region', district_bn: 'ক্যালগারি', district_hi: 'कैलगरी', district_ru: 'Калгари', upazila: '9th Avenue SW Energy Core', address: '855 2nd Street SW', address_bn: '৮৫৫ ২য় স্ট্রিট এসডব্লিউ, ব্যাংকার্স হল', zip: 'T2P 4J7', phone_area: '403' },
      { name: 'Calgary Beltline 17th Ave', district: 'Calgary Region', district_bn: 'ক্যালগারি', district_hi: 'कैलगरी', district_ru: 'Калгари', upazila: '17th Avenue Retail Corridor', address: '1200 17th Avenue SW', address_bn: '১২০০ ১৭তম এভিনিউ এসডব্লিউ, ক্যালগারি', zip: 'T2T 0B4', phone_area: '403' },
      { name: 'Edmonton Jasper Avenue Financial', district: 'Edmonton Region', district_bn: 'এডমন্টন', district_hi: 'एडमोंटन', district_ru: 'Эдмонтон', upazila: '101st Street Downtown', address: '10025 Jasper Avenue', address_bn: '১০০২৫ জ্যাসপার এভিনিউ, এডমন্টন', zip: 'T5J 1T3', phone_area: '780' },
      { name: 'Edmonton ICE District Rogers', district: 'Edmonton Region', district_bn: 'এডমন্টন', district_hi: 'एडमोंटन', district_ru: 'Эдмонтон', upazila: '104th Avenue Entertainment', address: '10360 102 Street NW', address_bn: '১০৩৬০ ১০২ স্ট্রিট এনডব্লিউ, এডমন্টন', zip: 'T5J 1B9', phone_area: '780' },
      { name: 'Edmonton West Edmonton Mall', district: 'Edmonton Region', district_bn: 'এডমন্টন', district_hi: 'एडमोंटन', district_ru: 'Эдмонтон', upazila: '87th Avenue Commercial Hub', address: '8882 170 Street NW', address_bn: '৮৮৮২ ১৭০ স্ট্রিট এনডব্লিউ, এডমন্টন', zip: 'T5T 4J2', phone_area: '780' },
      { name: 'Red Deer Gaetz Avenue', district: 'Central Alberta', district_bn: 'রেড ডিয়ার', district_hi: 'रेड डियर', district_ru: 'Ред-Дир', upazila: 'Downtown Red Deer', address: '4901 48th Street', address_bn: '৪৯০১ ৪৮তম স্ট্রিট, রেড ডিয়ার', zip: 'T4N 1S8', phone_area: '403' },
      { name: 'Lethbridge 4th Avenue', district: 'Southern Alberta', district_bn: 'লেথব্রিজ', district_hi: 'लेथब्रिज', district_ru: 'Летбридж', upazila: 'Scenic Downtown', address: '702 3rd Avenue South', address_bn: '৭০২ ৩য় এভিনিউ সাউথ, লেথব্রিজ', zip: 'T1J 0H6', phone_area: '403' },
      { name: 'Medicine Hat 3rd Street', district: 'Southeast Alberta', district_bn: 'মেডিসিন হ্যাট', district_hi: 'मेडिसिन हैट', district_ru: 'Медисин-Хат', upazila: 'River District', address: '579 3rd Street SE', address_bn: '৫৭৯ ৩য় স্ট্রিট এসই, মেডিসিন হ্যাট', zip: 'T1A 0H2', phone_area: '403' },
      { name: 'Fort McMurray Franklin Ave', district: 'Wood Buffalo', district_bn: 'ফোর্ট ম্যাকমারি', district_hi: 'फोर्ट मैकमरे', district_ru: 'Форт Мак-Мюррей', upazila: 'Oilsands Commercial Hub', address: '9912 Franklin Avenue', address_bn: '৯৯১২ ফ্র্যাঙ্কলিন এভিনিউ, ফোর্ট ম্যাকমারি', zip: 'T9H 2K5', phone_area: '780' }
    ]
  },
  prairies_atlantic: {
    division: 'Manitoba & Atlantic Canada',
    division_bn: 'ম্যানিটোবা ও আটলান্টিক প্রভিন্স',
    division_hi: 'मैनिटोबा व अटलांटिक',
    division_ru: 'Манитоба и Атлантика',
    cities: [
      { name: 'Winnipeg Portage & Main', district: 'Manitoba', district_bn: 'উইনিপেগ', district_hi: 'विन्निपेग', district_ru: 'Виннипег', upazila: 'Portage Avenue Financial', address: '201 Portage Avenue, Suite 100', address_bn: '২০১ পোর্টেজ এভিনিউ, উইনিপেগ, ম্যানিটোবা', zip: 'R3B 3K6', phone_area: '204' },
      { name: 'Winnipeg Broadway Avenue', district: 'Manitoba', district_bn: 'উইনিপেগ', district_hi: 'विन्निपेग', district_ru: 'Виннипег', upazila: 'Legislative District', address: '360 Main Street', address_bn: '৩৬০ মেইন স্ট্রিট, উইনিপেগ, ম্যানিটোবা', zip: 'R3C 3Z3', phone_area: '204' },
      { name: 'Regina 12th Avenue Financial', district: 'Saskatchewan', district_bn: 'রেজিনা', district_hi: 'रेजिना', district_ru: 'Реджайна', upazila: 'Scarth Street Mall', address: '1800 Hamilton Street', address_bn: '১৮০০ হ্যামিল্টন স্ট্রিট, রেজিনা, সাসকাচুয়ান', zip: 'S4P 4L5', phone_area: '306' },
      { name: 'Saskatoon 2nd Avenue Downtown', district: 'Saskatchewan', district_bn: 'সাসকাটুন', district_hi: 'सास्काटून', district_ru: 'Саскатун', upazila: 'Midtown Plaza Core', address: '201 21st Street East', address_bn: '২০১ ২১তম স্ট্রিট ইস্ট, সাসকাটুন', zip: 'S7K 0B8', phone_area: '306' },
      { name: 'Halifax Upper Water Waterfront', district: 'Nova Scotia', district_bn: 'হ্যালিফ্যাক্স', district_hi: 'हैलिफ़ैक्स', district_ru: 'Галифакс', upazila: 'Barrington Street Financial', address: '1969 Upper Water Street, Purdy\'s Wharf', address_bn: '১৯৬৯ আপার ওয়াটার স্ট্রিট, হ্যালিফ্যাক্স', zip: 'B3J 3R7', phone_area: '902' },
      { name: 'Halifax Spring Garden Road', district: 'Nova Scotia', district_bn: 'হ্যালিফ্যাক্স', district_hi: 'हैलिफ़ैक्स', district_ru: 'Галифакс', upazila: 'University & Hospital Area', address: '5515 Spring Garden Road', address_bn: '৫৫১৫ স্প্রিং গার্ডেন রোড, হ্যালিফ্যাক্স', zip: 'B3J 1G8', phone_area: '902' },
      { name: 'St. John\'s Water Street Main', district: 'Newfoundland', district_bn: 'সেন্ট জনস', district_hi: 'सेंट जॉन्स', district_ru: 'Сент-Джонс', upazila: 'Harbour Downtown', address: '226 Water Street', address_bn: '২২৬ ওয়াটার স্ট্রিট, সেন্ট জনস', zip: 'A1C 1A9', phone_area: '709' },
      { name: 'Moncton Main Street Hub', district: 'New Brunswick', district_bn: 'মঙ্কটন', district_hi: 'मोंकटन', district_ru: 'Монктон', upazila: 'Downtown Financial', address: '770 Main Street', address_bn: '৭৭০ মেইন স্ট্রিট, মঙ্কটন', zip: 'E1C 1E7', phone_area: '506' },
      { name: 'Saint John King Street Plaza', district: 'New Brunswick', district_bn: 'সেন্ট জন', district_hi: 'सेंट जॉन', district_ru: 'Сент-Джон', upazila: 'Brunswick Square Mall', address: '39 King Street', address_bn: '৩৯ কিং স্ট্রিট, সেন্ট জন, নিউ ব্রান্সউইক', zip: 'E2L 1G3', phone_area: '506' },
      { name: 'Charlottetown Queen Street', district: 'Prince Edward Island', district_bn: 'শার্লটটাউন', district_hi: 'शार्लोटटाउन', district_ru: 'Шарлоттаун', upazila: 'Historic Downtown Core', address: '100 Queen Street', address_bn: '১০০ কুইন স্ট্রিট, শার্লটটাউন, পিইআই', zip: 'C1A 4B1', phone_area: '902' }
    ]
  }
};

let globalBranchSeq = 100;

for (const [key, provInfo] of Object.entries(provinces)) {
  const branches = [];
  
  for (const city of provInfo.cities) {
    for (const bank of banks) {
      const instNum = bank.institution_number || bank.bank_code;
      const transitNum = String(globalBranchSeq % 89999 + 10001).padStart(5, '0');
      // Canada EFT 9-digit format: 0 + 3-digit institution + 5-digit transit
      const eftRouting = `0${instNum}${transitNum}`;
      
      branches.push({
        id: `${bank.id}-${city.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${transitNum}`,
        bank_id: bank.id,
        bank_name: bank.name,
        bank_name_bn: bank.name_bn || bank.name,
        bank_name_hi: bank.name_hi || bank.name,
        bank_name_ru: bank.name_ru || bank.name,
        bank_short_name: bank.short_name || bank.name,
        country: 'ca',
        name: `${city.name} Branch`,
        name_bn: `${city.district_bn} ${bank.short_name || ''} শাখা`,
        name_hi: `${city.district_hi} ${bank.short_name || ''} शाखा`,
        name_ru: `${city.district_ru} филиал ${bank.short_name || ''}`,
        division: provInfo.division,
        division_bn: provInfo.division_bn,
        division_hi: provInfo.division_hi,
        division_ru: provInfo.division_ru,
        district: city.district,
        district_bn: city.district_bn,
        district_hi: city.district_hi,
        district_ru: city.district_ru,
        upazila: city.upazila,
        address: `${city.address}, ${city.district}, ${provInfo.division} ${city.zip}`,
        address_bn: `${city.address_bn} ${city.zip}`,
        zip_code: city.zip,
        branch_code: transitNum,
        transit_number: transitNum,
        institution_number: instNum,
        routing_number: eftRouting,
        swift_code: bank.swift_code || 'ROYCCAT2',
        phone: `+1 ${city.phone_area}-${String(globalBranchSeq * 7).padStart(3, '0').slice(-3)}-${String(globalBranchSeq * 13).padStart(4, '0').slice(-4)}`,
        status: 'active'
      });
      
      globalBranchSeq++;
    }
  }
  
  const targetPath = path.join(__dirname, `src/data/canada/branches/${key}.json`);
  fs.writeFileSync(targetPath, JSON.stringify(branches, null, 2), 'utf8');
  console.log(`Wrote ${branches.length} branches to ${key}.json`);
}

console.log('Finished generating comprehensive Canada branches dataset!');
