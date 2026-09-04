const fs = require('fs');
const path = require('path');

const banks = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/germany/banks.json'), 'utf8'));

// Detailed states (Bundesländer) and cities across Germany
const states = {
  bavaria: {
    division: 'Bavaria (Bayern)',
    division_bn: 'বাভারিয়া (বায়ার্ন)',
    division_hi: 'बवेरिया (बायर्न)',
    division_ru: 'Бавария (Байерн)',
    cities: [
      { name: 'Munich City Center (Altstadt)', district: 'Munich', district_bn: 'মিউনিখ', district_hi: 'म्यूनिख', district_ru: 'Мюнхен', upazila: 'Marienplatz & Altstadt', address: 'Marienplatz 1', address_bn: 'মারিয়েনপ্লাৎস ১, অল্টস্টাড্ট, মিউনিখ', zip: '80331', phone_area: '89', blz_prefix: '700' },
      { name: 'Munich Financial District Brienner', district: 'Munich', district_bn: 'মিউনিখ', district_hi: 'म्यूनिख', district_ru: 'Мюнхен', upazila: 'Maxvorstadt Financial', address: 'Brienner Straße 20', address_bn: 'ব্রিয়েনার স্ট্রাসে ২০, ম্যাক্সভরস্টাড্ট, মিউনিখ', zip: '80333', phone_area: '89', blz_prefix: '700' },
      { name: 'Munich Schwabing Business Hub', district: 'Munich', district_bn: 'মিউনিখ', district_hi: 'म्यूनिख', district_ru: 'Мюнхен', upazila: 'Schwabing-Freimann', address: 'Leopoldstraße 150', address_bn: 'লিওপোল্ডস্ট্রাসে ১৫০, শোয়াবিং, মিউনিখ', zip: '80804', phone_area: '89', blz_prefix: '701' },
      { name: 'Munich Bogenhausen East', district: 'Munich', district_bn: 'মিউনিখ', district_hi: 'म्यूनिख', district_ru: 'Мюнхен', upazila: 'Bogenhausen Arabellapark', address: 'Arabellastraße 15', address_bn: 'আরাবেলাস্ট্রাসে ১৫, বোগেনহাউসেন, মিউনিখ', zip: '81925', phone_area: '89', blz_prefix: '700' },
      { name: 'Nuremberg Central Lorenzer', district: 'Nuremberg', district_bn: 'নুরেমবার্গ', district_hi: 'नूर्नबर्ग', district_ru: 'Нюрнберг', upazila: 'Lorenzer Altstadt', address: 'Lorenzer Platz 3', address_bn: 'লোরেনজার প্লাৎস ৩, নুরেমবার্গ', zip: '90402', phone_area: '911', blz_prefix: '760' },
      { name: 'Nuremberg Franken Business Park', district: 'Nuremberg', district_bn: 'নুরেমবার্গ', district_hi: 'नूर्नबर्ग', district_ru: 'Нюрнберг', upazila: 'Südoststadt Tech Center', address: 'Frankenstraße 100', address_bn: 'ফ্রাঙ্কেনস্ট্রাসে ১০০, নুরেমবার্গ', zip: '90461', phone_area: '911', blz_prefix: '760' },
      { name: 'Augsburg Rathausplatz Central', district: 'Augsburg', district_bn: 'অগসবার্গ', district_hi: 'ऑग्सबर्ग', district_ru: 'Аугсбург', upazila: 'Innenstadt Core', address: 'Rathausplatz 2', address_bn: 'রাথাউসপ্লাৎস ২, অগসবার্গ', zip: '86150', phone_area: '821', blz_prefix: '720' },
      { name: 'Regensburg Neupfarrplatz', district: 'Regensburg', district_bn: 'রেগেনসবার্গ', district_hi: 'रेगेन्सबर्ग', district_ru: 'Регенсбург', upazila: 'Historische Altstadt', address: 'Neupfarrplatz 5', address_bn: 'নয়পফারপ্লাৎস ৫, রেগেনসবার্গ', zip: '93047', phone_area: '941', blz_prefix: '750' },
      { name: 'Ingolstadt Audi Automotive Core', district: 'Ingolstadt', district_bn: 'ইঙ্গোলস্টাট', district_hi: 'इंगोलस्टाट', district_ru: 'Ингольштадт', upazila: 'Mitte & Audi Ring', address: 'Rathausplatz 4', address_bn: 'রাথাউসপ্লাৎস ৪, ইঙ্গিতোলস্টাট', zip: '85049', phone_area: '841', blz_prefix: '721' },
      { name: 'Würzburg Residenz Financial', district: 'Würzburg', district_bn: 'ভুর্ৎসবুর্গ', district_hi: 'वुर्जबर्ग', district_ru: 'Вюрцбург', upazila: 'Altstadt Main', address: 'Juliuspromenade 64', address_bn: 'জুলিয়াসপ্রমেনাড ৬৪, ভুর্ৎসবুর্গ', zip: '97070', phone_area: '931', blz_prefix: '790' },
      { name: 'Erlangen Siemens MedTech Hub', district: 'Erlangen', district_bn: 'এরলাঙ্গেন', district_hi: 'एरलांगेन', district_ru: 'Эрланген', upazila: 'Hugendubelplatz Tech', address: 'Hauptstraße 30', address_bn: 'হপ্টস্ট্রাসে ৩০, এরলাঙ্গেন', zip: '91054', phone_area: '9131', blz_prefix: '763' },
      { name: 'Bamberg Historic UNESCO Core', district: 'Bamberg', district_bn: 'বামবার্গ', district_hi: 'बामबर्ग', district_ru: 'Бамберг', upazila: 'Inselstadt Financial', address: 'Grüner Markt 14', address_bn: 'গ্রুনার মার্ক্ট ১৪, বামবার্গ', zip: '96047', phone_area: '951', blz_prefix: '770' }
    ]
  },
  baden_wuerttemberg: {
    division: 'Baden-Württemberg',
    division_bn: 'বাডেন-ভুর্টেমবার্গ',
    division_hi: 'बाडेन-वुर्टेमबर्ग',
    division_ru: 'Баден-Вюртемберг',
    cities: [
      { name: 'Stuttgart Schlossplatz Financial', district: 'Stuttgart', district_bn: 'স্টুটগার্ট', district_hi: 'स्टटगार्ट', district_ru: 'Штутгарт', upazila: 'Stuttgart-Mitte Core', address: 'Königstraße 3', address_bn: 'কোয়েনিগস্ট্রাসে ৩, শ্লসপ্লাৎস, স্টুটগার্ট', zip: '70173', phone_area: '711', blz_prefix: '600' },
      { name: 'Stuttgart Vaihingen Technology Hub', district: 'Stuttgart', district_bn: 'স্টুটগার্ট', district_hi: 'स्टटगार्ट', district_ru: 'Штутгарт', upazila: 'Stuttgart-Vaihingen', address: 'Hauptstraße 19', address_bn: 'হপ্টস্ট্রাসে ১৯, ভাইহিঙ্গেন, স্টুটগার্ট', zip: '70563', phone_area: '711', blz_prefix: '600' },
      { name: 'Mannheim Paradeplatz Central', district: 'Mannheim', district_bn: 'ম্যানহাইম', district_hi: 'मैनहाइम', district_ru: 'Мангейм', upazila: 'Quadratestadt Core O2', address: 'Paradeplatz O2, 1', address_bn: 'প্যারেডপ্লাৎস ও২, ১, ম্যানহাইম', zip: '68161', phone_area: '621', blz_prefix: '670' },
      { name: 'Karlsruhe Marktplatz Federal Court', district: 'Karlsruhe', district_bn: 'কার্লসরুয়ে', district_hi: 'कार्लस्रुहे', district_ru: 'Карлсруэ', upazila: 'Innenstadt-Ost', address: 'Kaiserstraße 90', address_bn: 'কাইজারস্ট্রাসে ৯০, মার্ক্টপ্লাৎস, কার্লসরুয়ে', zip: '76133', phone_area: '721', blz_prefix: '660' },
      { name: 'Freiburg Bertoldsbrunnen Black Forest', district: 'Freiburg', district_bn: 'ফ্রাইবুর্গ', district_hi: 'फ्रीबर्ग', district_ru: 'Фрайбург', upazila: 'Altstadt Center', address: 'Kaiser-Joseph-Straße 200', address_bn: 'কাইজার-জোসেফ-স্ট্রাসে ২০০, ফ্রাইবুর্গ', zip: '79098', phone_area: '761', blz_prefix: '680' },
      { name: 'Heidelberg Bismarckplatz Neckar', district: 'Heidelberg', district_bn: 'হাইডেলবার্গ', district_hi: 'हाइडेलबर्ग', district_ru: 'Гейдельберг', upazila: 'Bergheim & Altstadt', address: 'Bismarckplatz 1', address_bn: 'বিসমার্কপ্লাৎস ১, হাইডেলবার্গ', zip: '69115', phone_area: '6221', blz_prefix: '672' },
      { name: 'Ulm Münsterplatz Central', district: 'Ulm', district_bn: 'উলম', district_hi: 'उल्म', district_ru: 'Ульм', upazila: 'Mitte Donau Core', address: 'Münsterplatz 7', address_bn: 'মুনস্টারপ্লাৎস ৭, উলম', zip: '89073', phone_area: '731', blz_prefix: '630' },
      { name: 'Heilbronn Neckar Financial', district: 'Heilbronn', district_bn: 'হেইলব্রন', district_hi: 'हेलब्रॉन', district_ru: 'Хайльбронн', upazila: 'Innenstadt Core', address: 'Allee 18', address_bn: 'অ্যালি ১৮, হেইলব্রন', zip: '74072', phone_area: '7131', blz_prefix: '620' },
      { name: 'Pforzheim Goldstadt Core', district: 'Pforzheim', district_bn: 'পফোরৎসহাইম', district_hi: 'फोर्ज़हाइम', district_ru: 'Пфорцхайм', upazila: 'Leopoldplatz Financial', address: 'Leopoldplatz 1', address_bn: 'লিওপোল্ডপ্লাৎস ১, পফোরৎসহাইম', zip: '75172', phone_area: '7231', blz_prefix: '666' },
      { name: 'Reutlingen Marktplatz', district: 'Reutlingen', district_bn: 'রয়টলিঙ্গেন', district_hi: 'रूटलिंगेन', district_ru: 'Ройтлинген', upazila: 'Stadtmitte Core', address: 'Wilhelmstraße 22', address_bn: 'ভিলহেলমস্ট্রাসে ২২, রয়টলিঙ্গেন', zip: '72764', phone_area: '7121', blz_prefix: '640' }
    ]
  },
  north_rhine_westphalia: {
    division: 'North Rhine-Westphalia (Nordrhein-Westfalen)',
    division_bn: 'নর্থ রাইন-ওয়েস্টফালিয়া',
    division_hi: 'नॉर्थ राइन-वेस्टफेलिया',
    division_ru: 'Северный Рейн-Вестфалия',
    cities: [
      { name: 'Cologne Dom Cathedral Central', district: 'Cologne (Köln)', district_bn: 'কোলন (কোয়েলন)', district_hi: 'कोलोन', district_ru: 'Кёльн', upazila: 'Altstadt-Nord Domplatte', address: 'Domkloster 3', address_bn: 'ডমক্লোস্টার ৩, কোলন', zip: '50667', phone_area: '221', blz_prefix: '370' },
      { name: 'Cologne Neumarkt Financial', district: 'Cologne (Köln)', district_bn: 'কোলন (কোয়েলন)', district_hi: 'कोलोन', district_ru: 'Кёльн', upazila: 'Altstadt-Süd Neumarkt', address: 'Hahnenstraße 57', address_bn: 'হানেনস্ট্রাসে ৫৭, নয়মার্ক্ট, কোলন', zip: '50667', phone_area: '221', blz_prefix: '370' },
      { name: 'Düsseldorf Königsallee Financial Core', district: 'Düsseldorf', district_bn: 'ডুসেলডর্ফ', district_hi: 'डसेलडोर्फ', district_ru: 'Дюссельдорф', upazila: 'Stadtmitte Kö-Bogen', address: 'Königsallee 45', address_bn: 'কোয়েনিগসঅ্যালি ৪৫, ডুসেলডর্ফ', zip: '40212', phone_area: '211', blz_prefix: '300' },
      { name: 'Düsseldorf Hafen Media Harbor', district: 'Düsseldorf', district_bn: 'ডুসেলডর্ফ', district_hi: 'डसेलडोर्फ', district_ru: 'Дюссельдорф', upazila: 'MedienHafen Tech', address: 'Stromstraße 49', address_bn: 'স্ট্রমস্ট্রাসে ৪৯, মেদিয়েনহাফেন, ডুসেলডর্ফ', zip: '40221', phone_area: '211', blz_prefix: '300' },
      { name: 'Dortmund Westenhellweg Central', district: 'Dortmund', district_bn: 'ডর্টমুন্ড', district_hi: 'डॉर्टमुंड', district_ru: 'Дортмунд', upazila: 'Innenstadt-West', address: 'Westenhellweg 85', address_bn: 'ওয়েস্টেনহেলওয়েগ ৮৫, ডর্টমুন্ড', zip: '44137', phone_area: '231', blz_prefix: '440' },
      { name: 'Essen Kennedyplatz Financial', district: 'Essen', district_bn: 'এসেন', district_hi: 'एसेन', district_ru: 'Эссেন', upazila: 'Stadtkern Kennedyplatz', address: 'Lindenallee 1', address_bn: 'লিন্ডেনঅ্যালি ১, কেনেডিপ্লাৎস, এসেন', zip: '45127', phone_area: '201', blz_prefix: '360' },
      { name: 'Bonn Museum Mile & Federal District', district: 'Bonn', district_bn: 'বন', district_hi: 'बॉन', district_ru: 'Бонн', upazila: 'Gronau Bundesviertel', address: 'Friedrich-Ebert-Allee 120', address_bn: 'ফ্রিডরিশ-এবার্ট-অ্যালি ১২০, বুন্দেসফিয়েরটেল, বন', zip: '53113', phone_area: '228', blz_prefix: '380' },
      { name: 'Bonn Münsterplatz Central', district: 'Bonn', district_bn: 'বন', district_hi: 'बॉन', district_ru: 'Бонн', upazila: 'Bonn-Zentrum Core', address: 'Münsterplatz 24', address_bn: 'মুনস্টারপ্লাৎস ২৪, বন-সেন্ট্রাম, বন', zip: '53111', phone_area: '228', blz_prefix: '380' },
      { name: 'Münster Prinzipalmarkt Historic', district: 'Münster', district_bn: 'মুনস্টার', district_hi: 'मुन्स्टर', district_ru: 'Мюнстер', upazila: 'Altstadt Prinzipalmarkt', address: 'Prinzipalmarkt 11', address_bn: 'প্রিন্সিপালমার্ক্ট ১১, মুনস্টার', zip: '48143', phone_area: '251', blz_prefix: '400' },
      { name: 'Bielefeld Jahnplatz Commercial', district: 'Bielefeld', district_bn: 'বিলেফেল্ড', district_hi: 'बीलेफेल्ड', district_ru: 'Билефельд', upazila: 'Mitte Jahnplatz', address: 'Jahnplatz 4', address_bn: 'জাহনপ্লাৎস ৪, বিলেফেল্ড', zip: '33602', phone_area: '521', blz_prefix: '480' },
      { name: 'Aachen Elisenbrunnen Imperial', district: 'Aachen', district_bn: 'আখেন', district_hi: 'आचेन', district_ru: 'Ахен', upazila: 'Aachen-Mitte Core', address: 'Friedrich-Wilhelm-Platz 1', address_bn: 'ফ্রিডরিশ-ভিলহেলম-প্লাৎস ১, আখেন', zip: '52062', phone_area: '241', blz_prefix: '390' },
      { name: 'Duisburg Königstraße Port Hub', district: 'Duisburg', district_bn: 'ডুইসবার্গ', district_hi: 'ड्यूसबर्ग', district_ru: 'Дуйсбург', upazila: 'Altstadt Königstraße', address: 'Königstraße 25', address_bn: 'কোয়েনিগস্ট্রাসে ২৫, ডুইসবার্গ', zip: '47051', phone_area: '203', blz_prefix: '350' }
    ]
  },
  hessen: {
    division: 'Hesse (Hessen)',
    division_bn: 'হেসেন (Hesse)',
    division_hi: 'हेस्से (Hessen)',
    division_ru: 'Гессен (Hessen)',
    cities: [
      { name: 'Frankfurt Taunusanlage Banking District', district: 'Frankfurt am Main', district_bn: 'ফ্রাঙ্কফুর্ট আম মাইন', district_hi: 'फ्रैंकफर्ट', district_ru: 'Франкфурт-на-Майне', upazila: 'Bankenviertel Innenstadt', address: 'Taunusanlage 12', address_bn: 'টাউনুসানলাগে ১২, বাংকেনফিয়েরটেল, ফ্রাঙ্কফুর্ট', zip: '60325', phone_area: '69', blz_prefix: '500' },
      { name: 'Frankfurt Kaiserplatz Main Core', district: 'Frankfurt am Main', district_bn: 'ফ্রাঙ্কফুর্ট আম মাইন', district_hi: 'फ्रैंकफर्ट', district_ru: 'Франкফুрт-на-Майне', upazila: 'Innenstadt Kaiserplatz', address: 'Kaiserplatz 1', address_bn: 'কাইজারপ্লাৎস ১, ফ্রাঙ্কফুর্ট আম মাইন', zip: '60311', phone_area: '69', blz_prefix: '500' },
      { name: 'Frankfurt Mainzer Landstraße Tech', district: 'Frankfurt am Main', district_bn: 'ফ্রাঙ্কফুর্ট আম মাইন', district_hi: 'फ्रैंकफर्ट', district_ru: 'Франкফুрт-на-Майне', upazila: 'Gallus Financial Corridor', address: 'Mainzer Landstraße 150', address_bn: 'মাইনজার ল্যান্ডস্ট্রাসে ১৫০, গালুস, ফ্রাঙ্কফুর্ট', zip: '60327', phone_area: '69', blz_prefix: '500' },
      { name: 'Frankfurt Sachsenhausen South', district: 'Frankfurt am Main', district_bn: 'ফ্রাঙ্কফুর্ট আম মাইন', district_hi: 'फ्रैंकफर्ट', district_ru: 'Франкফুрт-на-Майне', upazila: 'Sachsenhausen-Nord', address: 'Schweizer Straße 42', address_bn: 'শোয়াইজার স্ট্রাসে ৪২, সাক্সেনহাউসেন, ফ্রাঙ্কফুর্ট', zip: '60594', phone_area: '69', blz_prefix: '501' },
      { name: 'Wiesbaden Schlossplatz State Capital', district: 'Wiesbaden', district_bn: 'ভিসবাডেন', district_hi: 'विस्बाडेन', district_ru: 'Висбаден', upazila: 'Mitte Schlossplatz', address: 'Marktplatz 1', address_bn: 'মার্ক্টপ্লাৎস ১, ভিসবাডেন', zip: '65183', phone_area: '611', blz_prefix: '510' },
      { name: 'Kassel Friedrichsplatz Documenta', district: 'Kassel', district_bn: 'কাসেল', district_hi: 'कासेल', district_ru: 'Кассель', upazila: 'Mitte Friedrichsplatz', address: 'Friedrichsplatz 8', address_bn: 'ফ্রিডরিশপ্লাৎস ৮, কাসেল', zip: '34117', phone_area: '561', blz_prefix: '520' },
      { name: 'Darmstadt Luisenplatz Tech & Space', district: 'Darmstadt', district_bn: 'ডার্মস্টাট', district_hi: 'डार्मस्टाड्ट', district_ru: 'Дармштадт', upazila: 'Stadtmitte Luisenplatz', address: 'Luisenplatz 5', address_bn: 'লুইসিয়ানপ্লাৎস ৫, ডার্মস্টাট', zip: '64283', phone_area: '6151', blz_prefix: '508' },
      { name: 'Offenbach Marktplatz Main River', district: 'Offenbach am Main', district_bn: 'অফেনবাখ আম মাইন', district_hi: 'ऑफनबैक', district_ru: 'Оффенбах', upazila: 'Zentrum Marktplatz', address: 'Frankfurter Straße 32', address_bn: 'ফ্রাঙ্কফুর্টার স্ট্রাসে ৩২, অফেনবাখ', zip: '63065', phone_area: '69', blz_prefix: '505' },
      { name: 'Fulda Bonifatiusplatz Central', district: 'Fulda', district_bn: 'ফুল্ডা', district_hi: 'फुल्डा', district_ru: 'Фульда', upazila: 'Altstadt Bonifatiusplatz', address: 'Universitätsplatz 2', address_bn: 'ইউনিভার্সিটেটস্প্লাৎস ২, ফুল্ডা', zip: '36037', phone_area: '661', blz_prefix: '530' },
      { name: 'Gießen Seltersweg University Core', district: 'Gießen', district_bn: 'গিসেন', district_hi: 'गीसेन', district_ru: 'Гисен', upazila: 'Innenstadt Seltersweg', address: 'Seltersweg 15', address_bn: 'সেল্টার্সওয়েগ ১৫, গিসেন', zip: '35390', phone_area: '641', blz_prefix: '513' }
    ]
  },
  berlin_brandenburg: {
    division: 'Berlin & Brandenburg',
    division_bn: 'বার্লিন ও ব্র্যান্ডেনবুর্গ',
    division_hi: 'बर्लिन व ब्रैंडेनबर्ग',
    division_ru: 'Берлин и Бранденбург',
    cities: [
      { name: 'Berlin Alexanderplatz Historic', district: 'Berlin', district_bn: 'বার্লিন', district_hi: 'बर्लिन', district_ru: 'Берлин', upazila: 'Mitte Alexanderplatz', address: 'Alexanderplatz 2', address_bn: 'আলেকজান্ডারপ্লাৎস ২, মিট্টে, বার্লিন', zip: '10178', phone_area: '30', blz_prefix: '100' },
      { name: 'Berlin Friedrichstraße Financial Core', district: 'Berlin', district_bn: 'বার্লিন', district_hi: 'बर्लिन', district_ru: 'Берлин', upazila: 'Mitte Friedrichstadt', address: 'Friedrichstraße 180', address_bn: 'ফ্রিডরিশস্ট্রাসে ১৮০, মিট্টে, বার্লিন', zip: '10117', phone_area: '30', blz_prefix: '100' },
      { name: 'Berlin Potsdamer Platz Business Tower', district: 'Berlin', district_bn: 'বার্লিন', district_hi: 'बর্লিন', district_ru: 'Берлин', upazila: 'Tiergarten Potsdamer Platz', address: 'Potsdamer Platz 1', address_bn: 'পটসডামার প্লাৎস ১, টিয়েরগার্টেন, বার্লিন', zip: '10785', phone_area: '30', blz_prefix: '100' },
      { name: 'Berlin Kurfürstendamm West End', district: 'Berlin', district_bn: 'বার্লিন', district_hi: 'बর্লিন', district_ru: 'Берлин', upazila: 'Charlottenburg Ku\'damm', address: 'Kurfürstendamm 102', address_bn: 'কুর্ফুয়ারস্টেনডাম ১০২, শার্লোটেনবুর্গ, বার্লিন', zip: '10711', phone_area: '30', blz_prefix: '100' },
      { name: 'Berlin Spandau Altstadt Waterfront', district: 'Berlin', district_bn: 'বার্লিন', district_hi: 'बর্লিন', district_ru: 'Берлин', upazila: 'Spandau Altstadt', address: 'Breite Straße 35', address_bn: 'ব্রেইটে স্ট্রাসে ৩৫, স্পানডাউ, বার্লিন', zip: '13597', phone_area: '30', blz_prefix: '100' },
      { name: 'Berlin Neukölln Hermannplatz', district: 'Berlin', district_bn: 'বার্লিন', district_hi: 'बর্লিন', district_ru: 'Берлин', upazila: 'Neukölln Hermannplatz', address: 'Karl-Marx-Straße 75', address_bn: 'কার্ল-মার্ক্স-স্ট্রাসে ৭৫, নয়কোলন, বার্লিন', zip: '12043', phone_area: '30', blz_prefix: '100' },
      { name: 'Potsdam Brandenburger Straße Capital', district: 'Potsdam', district_bn: 'পটসডাম', district_hi: 'पॉट्सडैम', district_ru: 'Потсдам', upazila: 'Innenstadt & Brandenburger Tor', address: 'Brandenburger Straße 40', address_bn: 'ব্র্যান্ডেনবুর্গা স্ট্রাসে ৪০, পটসডাম', zip: '14467', phone_area: '331', blz_prefix: '160' },
      { name: 'Cottbus Altmarkt Spree-Neiße', district: 'Cottbus', district_bn: 'কটবুস', district_hi: 'कॉटबस', district_ru: 'Котбус', upazila: 'Mitte Altmarkt', address: 'Altmarkt 21', address_bn: 'অল্টমার্ক্ট ২১, কটবুস', zip: '03046', phone_area: '355', blz_prefix: '180' },
      { name: 'Brandenburg an der Havel Neustadt', district: 'Brandenburg an der Havel', district_bn: 'ব্র্যান্ডেনবুর্গ আন ডের হাভেল', district_hi: 'ब्रैंडेनबर्ग', district_ru: 'Бранденбург-на-Хафеле', upazila: 'Neustadt Markt', address: 'Hauptstraße 60', address_bn: 'হপ্টস্ট্রাসে ৬০, ব্র্যান্ডেনবুর্গ আন ডের হাভেল', zip: '14776', phone_area: '3381', blz_prefix: '162' },
      { name: 'Frankfurt Oder Karl-Marx-Straße', district: 'Frankfurt (Oder)', district_bn: 'ফ্রাঙ্কফুর্ট (ওডার)', district_hi: 'फ्रैंकफर्ट (ओडर)', district_ru: 'Франкфурт-на-Одере', upazila: 'Zentrum Oder-Neiße', address: 'Karl-Marx-Straße 23', address_bn: 'কার্ল-মার্ক্স-স্ট্রাসে ২৩, ফ্রাঙ্কফুর্ট (ওডার)', zip: '15230', phone_area: '335', blz_prefix: '170' }
    ]
  },
  northern_eastern_germany: {
    division: 'Northern & Eastern Germany',
    division_bn: 'উত্তর ও পূর্ব জার্মানি',
    division_hi: 'उत्तरी व पूर्वी जर्मनी',
    division_ru: 'Северная и Восточная Германия',
    cities: [
      { name: 'Hamburg Jungfernstieg Binnenalster', district: 'Hamburg', district_bn: 'হামবুর্গ', district_hi: 'हैम्बर्ग', district_ru: 'Гамбург', upazila: 'Hamburg-Mitte Alster', address: 'Jungfernstieg 22', address_bn: 'জুংফার্নস্টিগ ২২, আলস্টার, হামবুর্গ', zip: '20354', phone_area: '40', blz_prefix: '200' },
      { name: 'Hamburg HafenCity Financial Quarter', district: 'Hamburg', district_bn: 'হামবুর্গ', district_hi: 'हैम्बर्ग', district_ru: 'Гамбург', upazila: 'HafenCity Überseequartier', address: 'Am Sandtorkai 50', address_bn: 'আম স্যান্ডটরকাই ৫০, হাফেনসিটি, হামবুর্গ', zip: '20457', phone_area: '40', blz_prefix: '200' },
      { name: 'Hamburg Altona Ottensen', district: 'Hamburg', district_bn: 'হামবুর্গ', district_hi: 'हैम्बर्ग', district_ru: 'Гамбург', upazila: 'Altona Ottenser Hauptstraße', address: 'Ottenser Hauptstraße 10', address_bn: 'ওটেনসার হপ্টস্ট্রাসে ১০, আলটোনা, হামবুর্গ', zip: '22765', phone_area: '40', blz_prefix: '201' },
      { name: 'Bremen Marktplatz UNESCO Heritage', district: 'Bremen', district_bn: 'ব্রেমেন', district_hi: 'ब्रेमेन', district_ru: 'Бремен', upazila: 'Mitte Am Markt', address: 'Am Markt 12', address_bn: 'আম মার্ক্ট ১২, ব্রেমেন', zip: '28195', phone_area: '421', blz_prefix: '290' },
      { name: 'Hannover Kröpcke Financial Core', district: 'Hanover (Hannover)', district_bn: 'হ্যানোভার', district_hi: 'हनोवर', district_ru: 'Ганновер', upazila: 'Mitte Kröpcke', address: 'Georgstraße 36', address_bn: 'গেয়র্গস্ট্রাসে ৩৬, ক্রপকে, হ্যানোভার', zip: '30159', phone_area: '511', blz_prefix: '250' },
      { name: 'Leipzig Augustusplatz Financial', district: 'Leipzig', district_bn: 'লাইপজিগ', district_hi: 'लीपज़िग', district_ru: 'Лейпциг', upazila: 'Zentrum Augustusplatz', address: 'Augustusplatz 1', address_bn: 'অগাস্টাসপ্লাৎস ১, লাইপজিগ', zip: '04109', phone_area: '341', blz_prefix: '860' },
      { name: 'Dresden Altmarkt Baroque Core', district: 'Dresden', district_bn: 'ড্রেসডেন', district_hi: 'ड्रेसडेन', district_ru: 'Дрезден', upazila: 'Innere Altstadt Altmarkt', address: 'Altmarkt 7', address_bn: 'অল্টমার্ক্ট ৭, ড্রেসডেন', zip: '01067', phone_area: '351', blz_prefix: '850' },
      { name: 'Erfurt Anger Central Thuringia', district: 'Erfurt', district_bn: 'এরফুর্ট', district_hi: 'एरफर्ट', district_ru: 'Эрфурт', upazila: 'Altstadt Anger', address: 'Anger 1', address_bn: 'আঙ্গার ১, এরফুর্ট', zip: '99084', phone_area: '361', blz_prefix: '820' },
      { name: 'Magdeburg Alter Markt Cathedral', district: 'Magdeburg', district_bn: 'ম্যাগডেবার্গ', district_hi: 'मैगडेबर्ग', district_ru: 'Магдебург', upazila: 'Altstadt Alter Markt', address: 'Alter Markt 10', address_bn: 'অল্টার মার্ক্ট ১০, ম্যাগডেবার্গ', zip: '39104', phone_area: '391', blz_prefix: '810' },
      { name: 'Kiel Holstenstraße Baltic Sea Port', district: 'Kiel', district_bn: 'কিয়েল', district_hi: 'कील', district_ru: 'Киль', upazila: 'Vorstadt Holstenstraße', address: 'Holstenstraße 55', address_bn: 'হোলস্টেনস্ট্রাসে ৫৫, কিয়েল', zip: '24103', phone_area: '431', blz_prefix: '210' },
      { name: 'Mainz Schillerplatz Rhine Capital', district: 'Mainz', district_bn: 'মাইনৎস', district_hi: 'मेंज', district_ru: 'Майнц', upazila: 'Altstadt Schillerplatz', address: 'Schillerplatz 2', address_bn: 'শিলারপ্লাৎস ২, মাইনৎস', zip: '55116', phone_area: '6131', blz_prefix: '550' },
      { name: 'Saarbrücken St. Johanner Markt', district: 'Saarbrücken', district_bn: 'সারব্রুকেন', district_hi: 'सारब्रुकेन', district_ru: 'Саарбрюккен', upazila: 'St. Johann Markt', address: 'St. Johanner Markt 15', address_bn: 'সেন্ট জোহানার মার্ক্ট ১৫, সারব্রুকেন', zip: '66111', phone_area: '681', blz_prefix: '590' },
      { name: 'Rostock Neuer Markt Baltic Core', district: 'Rostock', district_bn: 'রস্টক', district_hi: 'रोस्टॉक', district_ru: 'Росток', upazila: 'Stadtmitte Neuer Markt', address: 'Neuer Markt 1', address_bn: 'নয়ার মার্ক্ট ১, রস্টক', zip: '18055', phone_area: '381', blz_prefix: '130' }
    ]
  }
};

let globalBranchSeq = 1000;

for (const [key, stateInfo] of Object.entries(states)) {
  const branches = [];
  
  for (const city of stateInfo.cities) {
    for (const bank of banks) {
      // Bankleitzahl (8 digits): 3-digit regional clearing area (city.blz_prefix) + 1-digit bank group code + 4-digit bank identifier
      const bankGroupDigit = bank.type === 'German Sparkasse' ? '5' : bank.type === 'German Landesbank' ? '5' : bank.type === 'German Cooperative Bank' ? '6' : bank.type === 'German Direct Bank' ? '1' : bank.type === 'German Development Bank' ? '0' : '7';
      const instSuffix = String(bank.bank_code || '1000').slice(-4);
      const branchBLZ = `${city.blz_prefix}${bankGroupDigit}${instSuffix}`;
      
      const branchSeqStr = String(globalBranchSeq % 89999 + 10001).padStart(5, '0');
      // Construct realistic German IBAN sample: DE + 22 chars
      const checkDigits = String((globalBranchSeq * 7) % 89 + 10).padStart(2, '0');
      const accountNum = `00${branchSeqStr}${String(globalBranchSeq % 999).padStart(3, '0')}`;
      const ibanSample = `DE${checkDigits} ${branchBLZ.slice(0, 4)} ${branchBLZ.slice(4, 8)} ${accountNum.slice(0, 4)} ${accountNum.slice(4, 8)} ${accountNum.slice(8, 10)}`;
      
      branches.push({
        id: `${bank.id}-${city.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${branchBLZ.slice(-4)}`,
        bank_id: bank.id,
        bank_name: bank.name,
        bank_name_bn: bank.name_bn || bank.name,
        bank_name_hi: bank.name_hi || bank.name,
        bank_name_ru: bank.name_ru || bank.name,
        bank_short_name: bank.short_name || bank.name,
        country: 'de',
        name: `${city.name} Branch`,
        name_bn: `${city.district_bn} ${bank.short_name || ''} শাখা`,
        name_hi: `${city.district_hi} ${bank.short_name || ''} शाखा`,
        name_ru: `${city.district_ru} филиал ${bank.short_name || ''}`,
        division: stateInfo.division,
        division_bn: stateInfo.division_bn,
        division_hi: stateInfo.division_hi,
        division_ru: stateInfo.division_ru,
        district: city.district,
        district_bn: city.district_bn,
        district_hi: city.district_hi,
        district_ru: city.district_ru,
        upazila: city.upazila,
        address: `${city.address}, ${city.zip} ${city.district}, Germany`,
        address_bn: `${city.address_bn}, ${city.zip} ${city.district_bn}, জার্মানি`,
        zip_code: city.zip,
        branch_code: branchBLZ,
        blz: branchBLZ,
        blz_code: branchBLZ,
        routing_number: branchBLZ,
        iban_sample: ibanSample,
        swift_code: bank.swift_code || 'DEUTDEDD',
        phone: `+49 ${city.phone_area} ${String(globalBranchSeq * 3).padStart(4, '0').slice(-4)} ${String(globalBranchSeq * 7).padStart(4, '0').slice(-4)}`,
        status: 'active'
      });
      
      globalBranchSeq++;
    }
  }
  
  const targetPath = path.join(__dirname, `src/data/germany/branches/${key}.json`);
  fs.writeFileSync(targetPath, JSON.stringify(branches, null, 2), 'utf8');
  console.log(`Wrote ${branches.length} branches to ${key}.json`);
}

console.log('Finished generating comprehensive Germany branches dataset!');
