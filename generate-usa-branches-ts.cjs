const fs = require('fs');

const tsContent = `import { Branch } from '../../../types';
import banks from '../banks.json';

function calculateAbaRouting(bankPrefix4: string, branchIdx: number): string {
  const prefix8 = String(bankPrefix4).padStart(4, '0') + String(branchIdx).padStart(4, '0');
  const digits = prefix8.split('').map(Number);
  const weights = [3, 7, 1, 3, 7, 1, 3, 7];
  let partialSum = 0;
  for (let i = 0; i < 8; i++) {
    partialSum += digits[i] * weights[i];
  }
  const remainder = partialSum % 10;
  const checkDigit = remainder === 0 ? 0 : 10 - remainder;
  return prefix8 + String(checkDigit);
}

const regions = {
  northeast: {
    name: 'Northeast',
    name_bn: 'উত্তর-পূর্বাঞ্চল',
    name_hi: 'उत्तर-पूर्व',
    name_ru: 'Северо-Восток',
    cities: [
      { name: 'New York Wall Street', state: 'New York', state_code: 'NY', county: 'New York County', name_bn: 'নিউ ইয়র্ক ওয়াল স্ট্রিট', state_bn: 'নিউ ইয়র্ক', street: '14 Wall Street', zip: '10005', phone_area: '212' },
      { name: 'New York Midtown Park Ave', state: 'New York', state_code: 'NY', county: 'New York County', name_bn: 'নিউ ইয়র্ক মিডটাউন', state_bn: 'নিউ ইয়র্ক', street: '270 Park Avenue', zip: '10017', phone_area: '212' },
      { name: 'New York Brooklyn Heights', state: 'New York', state_code: 'NY', county: 'Kings County', name_bn: 'ব্রুকলিন হাইটস', state_bn: 'নিউ ইয়র্ক', street: '16 Court Street', zip: '11241', phone_area: '718' },
      { name: 'New York Queens Plaza', state: 'New York', state_code: 'NY', county: 'Queens County', name_bn: 'কুইন্স প্লাজা', state_bn: 'নিউ ইয়র্ক', street: '29-27 Queens Plaza North', zip: '11101', phone_area: '718' },
      { name: 'Boston Financial District', state: 'Massachusetts', state_code: 'MA', county: 'Suffolk County', name_bn: 'বোস্টন ফিনান্সিয়াল ডিস্ট্রিক্ট', state_bn: 'ম্যাসাচুসেটস', street: '100 Federal Street', zip: '02110', phone_area: '617' },
      { name: 'Boston Back Bay', state: 'Massachusetts', state_code: 'MA', county: 'Suffolk County', name_bn: 'বোস্টন ব্যাক বে', state_bn: 'ম্যাসাচুসেটস', street: '500 Boylston Street', zip: '02116', phone_area: '617' },
      { name: 'Philadelphia Center City', state: 'Pennsylvania', state_code: 'PA', county: 'Philadelphia County', name_bn: 'ফিলাডেলফিয়া সেন্টার সিটি', state_bn: 'পেনসিলভানিয়া', street: '1500 Market Street', zip: '19102', phone_area: '215' },
      { name: 'Pittsburgh Downtown', state: 'Pennsylvania', state_code: 'PA', county: 'Allegheny County', name_bn: 'পিটসবার্গ ডাউনটাউন', state_bn: 'পেনসিলভানিয়া', street: '300 Fifth Avenue', zip: '15222', phone_area: '412' },
      { name: 'Jersey City Exchange Place', state: 'New Jersey', state_code: 'NJ', county: 'Hudson County', name_bn: 'জার্সি সিটি এক্সচেঞ্জ প্লেস', state_bn: 'নিউ জার্সি', street: '10 Exchange Place', zip: '07302', phone_area: '201' },
      { name: 'Newark Broad Street', state: 'New Jersey', state_code: 'NJ', county: 'Essex County', name_bn: 'নিউয়ার্ক ব্রড স্ট্রিট', state_bn: 'নিউ জার্সি', street: '744 Broad Street', zip: '07102', phone_area: '973' },
      { name: 'Buffalo Main Place', state: 'New York', state_code: 'NY', county: 'Erie County', name_bn: 'বাফেলো মেইন প্লেস', state_bn: 'নিউ ইয়র্ক', street: 'One M&T Plaza', zip: '14203', phone_area: '716' },
      { name: 'Hartford Financial Center', state: 'Connecticut', state_code: 'CT', county: 'Hartford County', name_bn: 'হার্টফোর্ড ফিনান্সিয়াল', state_bn: 'কানেকটিকাট', street: '100 Pearl Street', zip: '06103', phone_area: '860' },
      { name: 'Stamford Atlantic St', state: 'Connecticut', state_code: 'CT', county: 'Fairfield County', name_bn: 'স্ট্যামফোর্ড আটলান্টিক', state_bn: 'কানেকটিকাট', street: '300 Atlantic Street', zip: '06901', phone_area: '203' },
      { name: 'Providence Citizens Plaza', state: 'Rhode Island', state_code: 'RI', county: 'Providence County', name_bn: 'প্রভিডেন্স প্লাজা', state_bn: 'রোড আইল্যান্ড', street: 'One Citizens Plaza', zip: '02903', phone_area: '401' },
      { name: 'Albany State Street', state: 'New York', state_code: 'NY', county: 'Albany County', name_bn: 'অ্যালবানি স্টেট স্ট্রিট', state_bn: 'নিউ ইয়র্ক', street: '67 State Street', zip: '12207', phone_area: '518' },
      { name: 'Rochester Main Street', state: 'New York', state_code: 'NY', county: 'Monroe County', name_bn: 'রোচেস্টার মেইন স্ট্রিট', state_bn: 'নিউ ইয়র্ক', street: '183 East Main Street', zip: '14604', phone_area: '585' }
    ]
  },
  southeast: {
    name: 'Southeast',
    name_bn: 'দক্ষিণ-পূর্বাঞ্চল',
    name_hi: 'दक्षिण-पूर्व',
    name_ru: 'Юго-Восток',
    cities: [
      { name: 'Charlotte Tryon Financial', state: 'North Carolina', state_code: 'NC', county: 'Mecklenburg County', name_bn: 'শার্লট ট্রায়োন', state_bn: 'উত্তর ক্যারোলিনা', street: '100 North Tryon Street', zip: '28255', phone_area: '704' },
      { name: 'Charlotte SouthPark', state: 'North Carolina', state_code: 'NC', county: 'Mecklenburg County', name_bn: 'শার্লট সাউথপার্ক', state_bn: 'উত্তর ক্যারোলিনা', street: '6000 Fairview Road', zip: '28210', phone_area: '704' },
      { name: 'Atlanta Peachtree Center', state: 'Georgia', state_code: 'GA', county: 'Fulton County', name_bn: 'আটলান্টা পিচট্রি', state_bn: 'জর্জিয়া', street: '225 Peachtree Street NE', zip: '30303', phone_area: '404' },
      { name: 'Atlanta Buckhead Financial', state: 'Georgia', state_code: 'GA', county: 'Fulton County', name_bn: 'আটলান্টা বাকহেড', state_bn: 'জর্জিয়া', street: '3344 Peachtree Road NE', zip: '30326', phone_area: '404' },
      { name: 'Miami Brickell Financial', state: 'Florida', state_code: 'FL', county: 'Miami-Dade County', name_bn: 'মিয়ামি ব্রিকলেল', state_bn: 'ফ্লোরিডা', street: '1111 Brickell Avenue', zip: '33131', phone_area: '305' },
      { name: 'Miami Downtown Biscayne', state: 'Florida', state_code: 'FL', county: 'Miami-Dade County', name_bn: 'মিয়ামি ডাউনটাউন', state_bn: 'ফ্লোরিডা', street: '100 Biscayne Blvd', zip: '33132', phone_area: '305' },
      { name: 'Orlando Orange Avenue', state: 'Florida', state_code: 'FL', county: 'Orange County', name_bn: 'অরল্যান্ডো অরেঞ্জ অ্যাভিনিউ', state_bn: 'ফ্লোরিডা', street: '200 South Orange Avenue', zip: '32801', phone_area: '407' },
      { name: 'Tampa Downtown Franklin', state: 'Florida', state_code: 'FL', county: 'Hillsborough County', name_bn: 'টাম্পা ডাউনটাউন', state_bn: 'ফ্লোরিডা', street: '400 North Franklin Street', zip: '33602', phone_area: '813' },
      { name: 'Fort Lauderdale Las Olas', state: 'Florida', state_code: 'FL', county: 'Broward County', name_bn: 'ফোর্ট লডারডেল লাস ওলাস', state_bn: 'ফ্লোরিডা', street: '200 East Las Olas Blvd', zip: '33301', phone_area: '954' },
      { name: 'Jacksonville Bay Street', state: 'Florida', state_code: 'FL', county: 'Duval County', name_bn: 'জ্যাকসনভিল বে স্ট্রিট', state_bn: 'ফ্লোরিডা', street: '50 North Laura Street', zip: '32202', phone_area: '904' },
      { name: 'Nashville Broadway Hub', state: 'Tennessee', state_code: 'TN', county: 'Davidson County', name_bn: 'ন্যাশভিল ব্রডওয়ে', state_bn: 'টেনেসি', street: '501 Commerce Street', zip: '37203', phone_area: '615' },
      { name: 'Tysons Corner Capital One Hub', state: 'Virginia', state_code: 'VA', county: 'Fairfax County', name_bn: 'টাইসনস কর্নার', state_bn: 'ভার্জিনিয়া', street: '1680 Capital One Drive', zip: '22102', phone_area: '703' },
      { name: 'Richmond Main Street', state: 'Virginia', state_code: 'VA', county: 'Richmond City', name_bn: 'রিচমন্ড মেইন স্ট্রিট', state_bn: 'ভার্জিনিয়া', street: '901 East Cary Street', zip: '23219', phone_area: '804' },
      { name: 'Raleigh Fayetteville St', state: 'North Carolina', state_code: 'NC', county: 'Wake County', name_bn: 'র‍্যালি ফায়েটভিল', state_bn: 'উত্তর ক্যারোলিনা', street: '150 Fayetteville Street', zip: '27601', phone_area: '919' },
      { name: 'Birmingham 5th Avenue', state: 'Alabama', state_code: 'AL', county: 'Jefferson County', name_bn: 'বার্মিংহাম ৫ম অ্যাভিনিউ', state_bn: 'অ্যালাবামা', street: '1900 5th Avenue North', zip: '35203', phone_area: '205' },
      { name: 'Charleston Meeting Street', state: 'South Carolina', state_code: 'SC', county: 'Charleston County', name_bn: 'চার্লসটন মিটিং স্ট্রিট', state_bn: 'দক্ষিণ ক্যারোলিনা', street: '151 Meeting Street', zip: '29401', phone_area: '843' }
    ]
  },
  midwest: {
    name: 'Midwest',
    name_bn: 'মধ্য-পশ্চিমাঞ্চল',
    name_hi: 'मध्य-पश्चिम',
    name_ru: 'Средний Запад',
    cities: [
      { name: 'Chicago LaSalle Financial', state: 'Illinois', state_code: 'IL', county: 'Cook County', name_bn: 'শিকাগো লাসাল স্ট্রিট', state_bn: 'ইলিনয়', street: '231 South LaSalle Street', zip: '60604', phone_area: '312' },
      { name: 'Chicago Michigan Avenue', state: 'Illinois', state_code: 'IL', county: 'Cook County', name_bn: 'শিকাগো মিশিগান অ্যাভিনিউ', state_bn: 'ইলিনয়', street: '500 North Michigan Avenue', zip: '60611', phone_area: '312' },
      { name: 'Chicago West Loop Wacker', state: 'Illinois', state_code: 'IL', county: 'Cook County', name_bn: 'শিকাগো ওয়েস্ট লুপ', state_bn: 'ইলিনয়', street: '110 North Wacker Drive', zip: '60606', phone_area: '312' },
      { name: 'Columbus Capitol Square', state: 'Ohio', state_code: 'OH', county: 'Franklin County', name_bn: 'কলম্বাস ক্যাপিটল স্কয়ার', state_bn: 'ওহাইও', street: '41 South High Street', zip: '43287', phone_area: '614' },
      { name: 'Cincinnati Fountain Square', state: 'Ohio', state_code: 'OH', county: 'Hamilton County', name_bn: 'সিনসিনাটি ফাউন্টেন স্কয়ার', state_bn: 'ওহাইও', street: '38 Fountain Square Plaza', zip: '45263', phone_area: '513' },
      { name: 'Cleveland Public Square', state: 'Ohio', state_code: 'OH', county: 'Cuyahoga County', name_bn: 'ক্লিভল্যান্ড পাবলিক স্কয়ার', state_bn: 'ওহাইও', street: '127 Public Square', zip: '44114', phone_area: '216' },
      { name: 'Detroit Woodward Downtown', state: 'Michigan', state_code: 'MI', county: 'Wayne County', name_bn: 'ডেট্রয়েট উডওয়ার্ড', state_bn: 'মিশিগান', street: '1001 Woodward Avenue', zip: '48226', phone_area: '313' },
      { name: 'Minneapolis Nicollet Mall', state: 'Minnesota', state_code: 'MN', county: 'Hennepin County', name_bn: 'মিনিয়াপোলিস নিকোলেট মল', state_bn: 'মিনেসোটা', street: '800 Nicollet Mall', zip: '55402', phone_area: '612' },
      { name: 'St Paul Minnesota Street', state: 'Minnesota', state_code: 'MN', county: 'Ramsey County', name_bn: 'সেন্ট পল মিনেসোটা', state_bn: 'মিনেসোটা', street: '332 Minnesota Street', zip: '55101', phone_area: '651' },
      { name: 'Indianapolis Monument Circle', state: 'Indiana', state_code: 'IN', county: 'Marion County', name_bn: 'ইন্ডিয়ানাপোলিস মনুমেন্ট', state_bn: 'ইন্ডিয়ানা', street: 'One Monument Circle', zip: '46204', phone_area: '317' },
      { name: 'St Louis Market Street', state: 'Missouri', state_code: 'MO', county: 'St. Louis City', name_bn: 'সেন্ট লুইস মার্কেট স্ট্রিট', state_bn: 'মিসৌরি', street: '800 Market Street', zip: '63101', phone_area: '314' },
      { name: 'Kansas City Main Street', state: 'Missouri', state_code: 'MO', county: 'Jackson County', name_bn: 'ক্যানসাস সিটি মেইন স্ট্রিট', state_bn: 'মিসৌরি', street: '1200 Main Street', zip: '64105', phone_area: '816' },
      { name: 'Milwaukee Water Street', state: 'Wisconsin', state_code: 'WI', county: 'Milwaukee County', name_bn: 'মিলওয়াকি ওয়াটার স্ট্রিট', state_bn: 'উইসকনসিন', street: '770 North Water Street', zip: '53202', phone_area: '414' },
      { name: 'Grand Rapids Monroe Center', state: 'Michigan', state_code: 'MI', county: 'Kent County', name_bn: 'গ্র্যান্ড র‍্যাপিডস মনরো', state_bn: 'মিশিগান', street: '99 Monroe Avenue NW', zip: '49503', phone_area: '616' },
      { name: 'Toledo Madison Avenue', state: 'Ohio', state_code: 'OH', county: 'Lucas County', name_bn: 'টলেডো ম্যাডিসন', state_bn: 'ওহাইও', street: '500 Madison Avenue', zip: '43604', phone_area: '419' },
      { name: 'Des Moines Locust Street', state: 'Iowa', state_code: 'IA', county: 'Polk County', name_bn: 'ডি মইন লোকাস্ট', state_bn: 'আইওয়া', street: '666 Locust Street', zip: '50309', phone_area: '515' }
    ]
  },
  southwest_texas: {
    name: 'Southwest & Texas',
    name_bn: 'দক্ষিণ-পশ্চিমাঞ্চল ও টেক্সাস',
    name_hi: 'दक्षिण-पश्चिम और टेक्सास',
    name_ru: 'Юго-Запад и Техас',
    cities: [
      { name: 'Dallas Main Downtown', state: 'Texas', state_code: 'TX', county: 'Dallas County', name_bn: 'ডালাস মেইন ডাউনটাউন', state_bn: 'টেক্সাস', street: '1717 Main Street', zip: '75201', phone_area: '214' },
      { name: 'Dallas Uptown McKinnon', state: 'Texas', state_code: 'TX', county: 'Dallas County', name_bn: 'ডালাস আপটাউন', state_bn: 'টেক্সাস', street: '2121 McKinnon Street', zip: '75201', phone_area: '214' },
      { name: 'Houston Texas Ave Financial', state: 'Texas', state_code: 'TX', county: 'Harris County', name_bn: 'হিউস্টন টেক্সাস অ্যাভিনিউ', state_bn: 'টেক্সাস', street: '712 Main Street', zip: '77002', phone_area: '713' },
      { name: 'Houston Galleria Post Oak', state: 'Texas', state_code: 'TX', county: 'Harris County', name_bn: 'হিউস্টন গ্যালেরিয়া', state_bn: 'টেক্সাস', street: '5065 Westheimer Road', zip: '77056', phone_area: '713' },
      { name: 'Austin Congress Downtown', state: 'Texas', state_code: 'TX', county: 'Travis County', name_bn: 'অস্টিন কংগ্রেস অ্যাভিনিউ', state_bn: 'টেক্সাস', street: '515 Congress Avenue', zip: '78701', phone_area: '512' },
      { name: 'San Antonio Houston Street', state: 'Texas', state_code: 'TX', county: 'Bexar County', name_bn: 'সান আন্তোনিও হিউস্টন', state_bn: 'টেক্সাস', street: '300 Convent Street', zip: '78205', phone_area: '210' },
      { name: 'Fort Worth Throckmorton', state: 'Texas', state_code: 'TX', county: 'Tarrant County', name_bn: 'ফোর্ট ওয়ার্থ থ্রকমর্টন', state_bn: 'টেক্সাস', street: '201 Main Street', zip: '76102', phone_area: '817' },
      { name: 'Westlake Schwab Corporate', state: 'Texas', state_code: 'TX', county: 'Denton County', name_bn: 'ওয়েস্টলেক শোয়াব ক্যাম্পাস', state_bn: 'টেক্সাস', street: '3000 Schwab Way', zip: '76262', phone_area: '817' },
      { name: 'Phoenix Central Financial', state: 'Arizona', state_code: 'AZ', county: 'Maricopa County', name_bn: 'ফিনিক্স সেন্ট্রাল', state_bn: 'অ্যারিজোনা', street: '100 North Central Avenue', zip: '85004', phone_area: '602' },
      { name: 'Scottsdale Camelback', state: 'Arizona', state_code: 'AZ', county: 'Maricopa County', name_bn: 'স্কটসডেল ক্যামেলব্যাক', state_bn: 'অ্যারিজোনা', street: '7001 East Camelback Road', zip: '85251', phone_area: '480' },
      { name: 'Las Vegas Strip Financial', state: 'Nevada', state_code: 'NV', county: 'Clark County', name_bn: 'লাস ভেগাস ফিনান্সিয়াল', state_bn: 'নেভাদা', street: '3883 Howard Hughes Pkwy', zip: '89169', phone_area: '702' },
      { name: 'Salt Lake City Main St', state: 'Utah', state_code: 'UT', county: 'Salt Lake County', name_bn: 'সল্টলেক সিটি মেইন স্ট্রিট', state_bn: 'উটাহ', street: '222 South Main Street', zip: '84101', phone_area: '801' },
      { name: 'Denver 17th Street', state: 'Colorado', state_code: 'CO', county: 'Denver County', name_bn: 'ডেনভার ১৭তম স্ট্রিট', state_bn: 'কলোরাডো', street: '1125 17th Street', zip: '80202', phone_area: '303' },
      { name: 'Oklahoma City Broadway', state: 'Oklahoma', state_code: 'OK', county: 'Oklahoma County', name_bn: 'ওকলাহোমা সিটি ব্রডওয়ে', state_bn: 'ওকলাহোমা', street: '100 North Broadway', zip: '73102', phone_area: '405' },
      { name: 'Albuquerque Central Ave', state: 'New Mexico', state_code: 'NM', county: 'Bernalillo County', name_bn: 'আলবুকার্কি সেন্ট্রাল', state_bn: 'নিউ মেক্সিকো', street: '201 3rd Street NW', zip: '87102', phone_area: '505' },
      { name: 'Tucson Stone Financial', state: 'Arizona', state_code: 'AZ', county: 'Pima County', name_bn: 'টাকসন স্টোন', state_bn: 'অ্যারিজোনা', street: '1 South Church Avenue', zip: '85701', phone_area: '520' }
    ]
  },
  west_coast: {
    name: 'West Coast',
    name_bn: 'ওয়েস্ট কোস্ট',
    name_hi: 'वेस्ट कोस्ट',
    name_ru: 'Западное побережье',
    cities: [
      { name: 'San Francisco Montgomery Financial', state: 'California', state_code: 'CA', county: 'San Francisco County', name_bn: 'সান ফ্রান্সিসকো মন্টগোমারি', state_bn: 'ক্যালিফোর্নিয়া', street: '420 Montgomery Street', zip: '94104', phone_area: '415' },
      { name: 'San Francisco Market Street', state: 'California', state_code: 'CA', county: 'San Francisco County', name_bn: 'সান ফ্রান্সিসকো মার্কেট স্ট্রিট', state_bn: 'ক্যালিফোর্নিয়া', street: '555 Market Street', zip: '94105', phone_area: '415' },
      { name: 'Los Angeles Wilshire Financial', state: 'California', state_code: 'CA', county: 'Los Angeles County', name_bn: 'লস অ্যাঞ্জেলেস উইলশায়ার', state_bn: 'ক্যালিফোর্নিয়া', street: '333 South Grand Avenue', zip: '90071', phone_area: '213' },
      { name: 'Los Angeles Century City', state: 'California', state_code: 'CA', county: 'Los Angeles County', name_bn: 'লস অ্যাঞ্জেলেস সেঞ্চুরি সিটি', state_bn: 'ক্যালিফোর্নিয়া', street: '2029 Century Park East', zip: '90067', phone_area: '310' },
      { name: 'San Diego Broadway Downtown', state: 'California', state_code: 'CA', county: 'San Diego County', name_bn: 'সান ডিয়েগো ব্রডওয়ে', state_bn: 'ক্যালিফোর্নিয়া', street: '600 B Street', zip: '92101', phone_area: '619' },
      { name: 'San Jose Silicon Valley', state: 'California', state_code: 'CA', county: 'Santa Clara County', name_bn: 'সান জোসে সিলিকন ভ্যালি', state_bn: 'ক্যালিফোর্নিয়া', street: '50 West San Fernando Street', zip: '95113', phone_area: '408' },
      { name: 'Palo Alto University Ave', state: 'California', state_code: 'CA', county: 'Santa Clara County', name_bn: 'পালো অল্টো ইউনিভার্সিটি', state_bn: 'ক্যালিফোর্নিয়া', street: '250 University Avenue', zip: '94301', phone_area: '650' },
      { name: 'Irvine Spectrum Financial', state: 'California', state_code: 'CA', county: 'Orange County', name_bn: 'আরভাইন স্পেকট্রাম', state_bn: 'ক্যালিফোর্নিয়া', street: '2050 Main Street', zip: '92614', phone_area: '949' },
      { name: 'Sacramento Capitol Mall', state: 'California', state_code: 'CA', county: 'Sacramento County', name_bn: 'স্যাক্রামেন্টো ক্যাপিটল মল', state_bn: 'ক্যালিফোর্নিয়া', street: '500 Capitol Mall', zip: '95814', phone_area: '916' },
      { name: 'Seattle 4th Avenue Financial', state: 'Washington', state_code: 'WA', county: 'King County', name_bn: 'সিয়াটল ৪র্থ অ্যাভিনিউ', state_bn: 'ওয়াশিংটন', street: '1201 3rd Avenue', zip: '98101', phone_area: '206' },
      { name: 'Bellevue Financial Center', state: 'Washington', state_code: 'WA', county: 'King County', name_bn: 'বেলভিউ ফিনান্সিয়াল', state_bn: 'ওয়াশিংটন', street: '10800 NE 8th Street', zip: '98004', phone_area: '425' },
      { name: 'Portland 5th Avenue', state: 'Oregon', state_code: 'OR', county: 'Multnomah County', name_bn: 'পোর্টল্যান্ড ৫ম অ্যাভিনিউ', state_bn: 'অরেগন', street: '111 SW 5th Avenue', zip: '97204', phone_area: '503' },
      { name: 'Honolulu Bishop Financial', state: 'Hawaii', state_code: 'HI', county: 'Honolulu County', name_bn: 'হনোলুলু বিশপ স্ট্রিট', state_bn: 'হাওয়াই', street: '1001 Bishop Street', zip: '96813', phone_area: '808' },
      { name: 'Anchorage 5th Avenue Hub', state: 'Alaska', state_code: 'AK', county: 'Anchorage Municipality', name_bn: 'অ্যাঙ্করেজ ৫ম অ্যাভিনিউ', state_bn: 'আলাস্কা', street: '301 West Northern Lights Blvd', zip: '99503', phone_area: '907' },
      { name: 'Oakland City Center', state: 'California', state_code: 'CA', county: 'Alameda County', name_bn: 'ওকল্যান্ড সিটি সেন্টার', state_bn: 'ক্যালিফোর্নিয়া', street: '1111 Broadway', zip: '94607', phone_area: '510' },
      { name: 'Pasadena Colorado Blvd', state: 'California', state_code: 'CA', county: 'Los Angeles County', name_bn: 'পাসাদেনা কলোরাডো', state_bn: 'ক্যালিফোর্নিয়া', street: '300 East Colorado Blvd', zip: '91101', phone_area: '626' }
    ]
  }
};

const generatedBranches: Branch[] = [];
let globalBranchCounter = 1;

for (const [regionKey, regionData] of Object.entries(regions)) {
  for (const city of regionData.cities) {
    for (const bank of banks) {
      const bankCode = bank.bank_code;
      const branchIndex = (globalBranchCounter * 11) % 9000 + 100;
      const routingNumber = calculateAbaRouting(bankCode, branchIndex);
      const branchId = bank.id + '-' + city.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + routingNumber;

      const branch: Branch = {
        id: branchId,
        bank_id: bank.id,
        bank_name: bank.name,
        bank_name_bn: bank.name_bn,
        bank_name_hi: bank.name_hi,
        bank_name_ru: bank.name_ru,
        bank_short_name: bank.short_name,
        country: 'us',
        name: city.name + ' Branch',
        name_bn: city.name_bn + ' শাখা',
        name_hi: city.name + ' शाखा',
        name_ru: 'Филиал ' + city.name,
        division: city.state,
        division_bn: city.state_bn,
        division_hi: city.state,
        division_ru: city.state,
        district: city.county,
        district_bn: city.county,
        district_hi: city.county,
        district_ru: city.county,
        upazila: city.name,
        upazila_bn: city.name_bn,
        upazila_hi: city.name,
        upazila_ru: city.name,
        address: ((globalBranchCounter % 990) + 10) + ' ' + city.street + ', ' + city.state_code + ' ' + city.zip,
        address_bn: ((globalBranchCounter % 990) + 10) + ' ' + city.street + ', ' + city.state_bn + ', মার্কিন যুক্তরাষ্ট্র',
        address_hi: ((globalBranchCounter % 990) + 10) + ' ' + city.street + ', ' + city.state + ', यूएसए',
        address_ru: ((globalBranchCounter % 990) + 10) + ' ' + city.street + ', ' + city.state + ', США',
        zip_code: city.zip,
        routing_number: routingNumber,
        ach_routing: routingNumber,
        wire_routing: routingNumber,
        swift_code: bank.swift_code,
        branch_code: String(branchIndex),
        phone: '+1 (' + city.phone_area + ') ' + Math.floor(200 + (globalBranchCounter % 700)) + '-' + Math.floor(1000 + (globalBranchCounter % 8999)),
        status: 'active'
      };
      generatedBranches.push(branch);
      globalBranchCounter++;
    }
  }
}

export const usaBranches: Branch[] = generatedBranches;
`;

fs.writeFileSync('./src/data/usa/branches/index.ts', tsContent, 'utf8');
console.log('Successfully wrote generated logic to index.ts');
