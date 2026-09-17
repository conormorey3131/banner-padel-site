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
  components/   Header, Footer, Button, Section, Feature, BookingCta, AppPromo, PageHero, Social
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

## Launch setup

- Contact form posts to FormSubmit for `info@bannerpadel.ie`, with a honeypot and the provider’s default CAPTCHA. After deploying, submit a test enquiry and confirm FormSubmit’s activation email in that inbox, then verify a second enquiry arrives. No test email has been sent during development.
- Successful submissions redirect to `https://www.bannerpadel.ie/thank-you/`. Test the return journey on the production domain.
- Club address, directions and phone (+353 85 244 6686) are set. Confirmed opening hours: Monday–Friday 09:00–23:00; Saturday–Sunday 09:00–20:00. Phone and hours are included in local-business structured data.
- Public booking links use `https://playtomic.com/clubs/banner-padel`. The calendar retains its existing dedicated embed endpoint.
- Weekly timetable at `/timetable/` is transcribed from the club-supplied poster. Coaching prices remain unconfirmed.
- Social preview card: `public/social-share.png`, editable source `public/social-share.svg`. Regenerate with `node scripts/build-social-share.mjs`.
- Sitemap at `/sitemap.xml` discovers Astro pages automatically, excluding 404 and thank-you pages; `/robots.txt` advertises it. Submit the sitemap in the domain’s Search Console after launch.
- Privacy notice at `/privacy/`: club must confirm controller/legal identity, actual email/hosting providers, retention criteria and any international-transfer safeguards before publishing. It describes the current website integrations; it is not an audit of the club’s wider data practices.
- Custom not-found page builds to `dist/404.html`. Verify hosting returns it with a 404 status for unknown URLs.
- Final checks: mobile booking, app links/QR codes, contact delivery and more venue photography.
- Move the `bannerpadel.ie` domain from the current site when ready. Hosting changes have not been made here.

## Domain

The live site currently runs from the separate `banner-padel` repo, which holds the
`CNAME` for `www.bannerpadel.ie`. This repo has no CNAME on purpose.

## Client preview

The `gh-pages` branch contains the built client preview, served by GitHub Pages.
Update that branch with the output of the preview build when sharing a new revision.
The preview is public at https://conormorey3131.github.io/banner-padel-site/ and carries
`noindex, nofollow` on every page. `node scripts/build-preview.mjs` builds and adjusts links,
assets and the form return URL for the repository subdirectory. `npm run build` remains the
production build. No custom domain is assigned to this preview.

Do not switch the live domain to this version until the final €350 payment is received.
