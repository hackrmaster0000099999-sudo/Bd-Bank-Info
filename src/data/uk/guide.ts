export const ukBankingGuide = {
  sortCodeStructure: {
    title: "Understanding UK Bank Sort Codes (XX-XX-XX)",
    title_bn: "ইউকে ব্যাংক সর্ট কোডের গঠন ও ব্যবহার (XX-XX-XX)",
    title_hi: "यूके बैंक सॉर्ट कोड की संरचना और उपयोग (XX-XX-XX)",
    title_ru: "Структура и использование UK Sort Code (XX-XX-XX)",
    description: "In the United Kingdom, a Sort Code is a 6-digit number formatted as 3 pairs of numbers (e.g. 20-00-00 or 40-11-18) that identifies both the bank and the specific branch holding an account.",
    parts: [
      {
        digits: "First 2 Digits (XX-00-00)",
        meaning: "Bank Code / Clearing Institution",
        example: "20 = Barclays, 30 = Lloyds, 40 = HSBC, 60 = NatWest"
      },
      {
        digits: "Last 4 Digits (00-XX-XX)",
        meaning: "Branch Identification Code",
        example: "Specifies the geographical branch office (e.g. London Canary Wharf, Birmingham HQ)"
      }
    ]
  },
  clearingSystems: [
    {
      name: "Faster Payments (FPS)",
      speed: "Real-time / Instant (Under 2 hours)",
      limit: "Up to £1,000,000 per transaction depending on bank",
      description: "Standard electronic transfer across UK banks available 24/7/365."
    },
    {
      name: "BACS Direct Credit / Debit",
      speed: "3 Working Days",
      limit: "Standard payroll, pensions, and direct debits",
      description: "Used by employers for recurring salary payments and bill collections."
    },
    {
      name: "CHAPS (Clearing House Automated Payment System)",
      speed: "Same-Day High Value Guaranteed",
      limit: "No upper financial limit",
      description: "Used primarily for property purchases, real estate transactions, and high-value corporate transfers."
    }
  ]
};
