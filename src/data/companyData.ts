// ============================================================
// COMPANY CONFIGURATION
// Replace all placeholder values with actual company data.
// This is the SINGLE source of truth for all company information.
// ============================================================

export const companyData = {
  // Core identity
  name: "KPS SYSTEMS",
  tagline: "ENGINEERED FOR THE REAL WORLD.",
  shortTagline: "Precision Electronics & Power Solutions",
  description:
    "We manufacture precision-built electronic motherboards and engineered power transformers for demanding industrial, commercial, and OEM applications. Every product is designed for reliability, durability, and performance.",

  // Contact information — replace with actual values
  phone: "+91-XXXXXXXXXX",
  whatsapp: "+91-XXXXXXXXXX",
  email: "enquiries@kpssystems.com",

  // Location
  address: {
    line1: "[ADDRESS LINE 1]",
    line2: "[ADDRESS LINE 2]",
    city: "[CITY]",
    state: "[STATE]",
    pincode: "[PINCODE]",
    country: "India",
    full: "[FULL ADDRESS TO BE PROVIDED]",
  },

  // Links
  googleMapsUrl: "https://maps.google.com/?q=[LOCATION]",
  whatsappUrl: "https://wa.me/91XXXXXXXXXX?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20products.",

  // Social (optional — remove if not applicable)
  social: {
    linkedin: null,
    twitter: null,
    instagram: null,
  },

  // About content — replace with actual company story
  about: {
    who: "[COMPANY HISTORY AND BACKGROUND TO BE PROVIDED]",
    what: "We manufacture two core product families: precision-built electronic motherboards designed for control and automation applications, and engineered power transformers for a wide range of electronic and industrial uses.",
    how: "[MANUFACTURING PROCESS DESCRIPTION TO BE PROVIDED]",
    why: "Direct manufacturer. No middlemen. Every enquiry is handled by our engineering team who understand your application requirements.",
  },

  // Manufacturing process steps
  capabilities: [
    {
      step: "01",
      title: "DESIGN",
      description: "[Design and engineering process to be described]",
    },
    {
      step: "02",
      title: "ASSEMBLY",
      description: "[Assembly process to be described]",
    },
    {
      step: "03",
      title: "TESTING",
      description: "[Testing methodology to be described]",
    },
    {
      step: "04",
      title: "QUALITY CONTROL",
      description: "[Quality control process to be described]",
    },
    {
      step: "05",
      title: "DELIVERY",
      description: "[Delivery and support process to be described]",
    },
  ],

  // SEO
  seo: {
    defaultTitle: "KPS Systems | Electronic Motherboards & Transformers",
    defaultDescription:
      "Manufacturer of precision electronic motherboards and transformers for industrial, commercial, and OEM applications. Request a quote or download product datasheets.",
    siteUrl: "https://kpssystems.com",
  },

  // Year
  foundedYear: "[YEAR]",
};

export type CompanyData = typeof companyData;
