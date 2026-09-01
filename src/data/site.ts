// Single source of truth for site-wide content.
// Values marked TODO still need to be confirmed by the club.
export const site = {
  name: "Banner Padel",
  tagline: "Clare's first indoor padel club",
  town: "Ennis",
  county: "Co. Clare",
  url: "https://www.bannerpadel.ie",

  // TODO: confirm full street address and Eircode
  address: {
    line1: "Ennis",
    region: "Co. Clare",
    country: "IE",
  },

  // TODO: confirm public phone and email
  phone: "",
  email: "",

  // TODO: confirm real opening hours
  hours: [
    { days: "Monday – Friday", time: "7:00 – 23:00" },
    { days: "Saturday", time: "8:00 – 22:00" },
    { days: "Sunday", time: "8:00 – 22:00" },
  ],

  booking: "https://playtomic.io/wl/005f080e-4191-4437-a723-fed2c913164d",

  social: {
    instagram: "https://www.instagram.com/bannerpadel",
    facebook: "https://www.facebook.com/bannerpadel",
    tiktok: "https://www.tiktok.com/@bannerpadel",
    handle: "@bannerpadel",
  },
} as const;

export const nav = [
  { label: "Coaching", href: "/coaching/" },
  { label: "The Venue", href: "/venue/" },
  { label: "What is Padel", href: "/what-is-padel/" },
  { label: "Contact", href: "/contact/" },
] as const;
