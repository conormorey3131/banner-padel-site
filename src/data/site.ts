// Single source of truth for site-wide content.
// Contact details and opening hours supplied by the club.
export const site = {
  name: "Banner Padel",
  tagline: "Clare's first indoor padel club",
  town: "Ennis",
  county: "Co. Clare",
  url: "https://bannerpadel.ie",

  // Address supplied by the club.
  address: {
    line1: "Quin Road Business Park",
    locality: "Ennis",
    postalCode: "V95 D592",
    region: "Co. Clare",
    country: "IE",
  },

  phone: "+353 85 244 6686",
  email: "info@bannerpadel.ie",
  directions: "https://maps.google.com/?cid=10938682595280522135",

  // Opening hours confirmed by the club.
  hours: [
    { days: "Monday–Friday", time: "9am–11pm", opens: "09:00", closes: "23:00", schemaDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] },
    { days: "Saturday–Sunday", time: "9am–8pm", opens: "09:00", closes: "20:00", schemaDays: ["Saturday", "Sunday"] },
  ],

  booking: "https://playtomic.com/clubs/banner-padel",
  // Keep the existing embedded calendar endpoint separate from the public club page.
  bookingEmbed: "https://playtomic.io/wl/005f080e-4191-4437-a723-fed2c913164d",

  // Loyalty app — earn points per visit, redeem for rewards.
  app: {
    appStore: "https://apps.apple.com/ie/app/banner-padel/id6806317013",
    googlePlay: "https://play.google.com/store/apps/details?id=ir.bannerpadel.app",
  },

  social: {
    instagram: "https://www.instagram.com/bannerpadel",
    facebook: "https://www.facebook.com/bannerpadel",
    tiktok: "https://www.tiktok.com/@bannerpadel",
    handle: "@bannerpadel",
  },
} as const;

export const nav = [
  { label: "Membership", href: "/#membership" },
  { label: "Timetable", href: "/timetable/" },
  { label: "Coaching", href: "/coaching/" },
  { label: "The Venue", href: "/venue/" },
  { label: "What is Padel", href: "/what-is-padel/" },
  { label: "Contact", href: "/contact/" },
] as const;
