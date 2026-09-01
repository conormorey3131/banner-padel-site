# Banner Padel

Website for Banner Padel — Clare's first indoor padel club, Ennis, Co. Clare.

Built with [Astro](https://astro.build) and Tailwind CSS v4. Static output.

## Running it

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static build into dist/
npm run preview  # serve the build
```

## Structure

```
src/
  assets/       photography and logos (optimised at build time by astro:assets)
  components/   Header, Footer, Button, Section, Feature, BookingCta, PageHero, Social
  data/site.ts  address, hours, booking URL, socials, nav — single source of truth
  layouts/      Layout.astro — head, SEO meta, JSON-LD, scroll reveals
  pages/        index, book, coaching, venue, what-is-padel, contact
  styles/       global.css — Tailwind theme tokens (navy + saffron)
legacy-site/    the previous static HTML site, kept for content reference
```

## Design

Navy `#061633` and saffron `#ffd502` — the Banner County colours — on a warm off-white
base. Sora for display type, Inter for body. Photography does the heavy lifting;
saffron is reserved for calls to action.

## Before launch

- [ ] Fill in the `TODO` fields in `src/data/site.ts` (address, phone, email, real opening hours)
- [ ] Point the contact form at a real endpoint — `src/pages/contact.astro` currently posts to `#`
- [ ] Confirm coaching pricing in `src/pages/coaching.astro` (currently `TODO`)
- [ ] Add an OG share image and more photography (café, lounge, players, exterior)
- [ ] Move the `bannerpadel.ie` domain over from the `banner-padel` repo when ready

## Domain

The live site currently runs from the separate `banner-padel` repo, which holds the
`CNAME` for `www.bannerpadel.ie`. This repo has no CNAME on purpose.
