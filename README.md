# Homework Design Studio PWA

Progressive Web App for [Homework Design Studio](https://homeworkdesigns.org), an interior design and renovation studio in Gurugram led by Shagun Singh Baruah. Companion to the WordPress marketing site: same positioning, plus a booking wizard, per-project portfolio, and a cost estimator the main site doesn't have.

No build step. Static files — deploy to any HTTPS host (GitHub Pages, Netlify, Vercel, Cloudflare Pages). All paths are relative, so it works at root or a subpath.

## Status

Feature-complete for v1. Everything below is implemented and verified headless (Playwright: all routes render, zero page errors).

| Route | View |
|---|---|
| `#/` | Home — hero, real stats, estimator teaser, services, latest work, testimonials, journal teaser, CTAs |
| `#/services` | 9 services, each with a "Book this service" prefilled link |
| `#/portfolio` | Grid of 5 real projects (press-covered) |
| `#/portfolio/:id` | Project detail — photo, scope, write-up, pull-quote, share, "book similar" |
| `#/about` | Story, origin (AM Services 24×7), values, team, payroll USP, testimonials, timeline |
| `#/journal` | Index of the 10 articles on the main site (links out) |
| `#/estimate` | Cost estimator by home size or sqft × finish, using the studio's published ranges |
| `#/book` | 4-step wizard → WhatsApp deep link. Accepts `?service=<id>` to preselect |
| `#/contact` | Call / WhatsApp / Instagram / address, areas served, UPI request |

Also: installable (icons generated from `favicon.svg`), offline fallback, `robots.txt`, Open Graph image, `HomeAndConstructionBusiness` JSON-LD.

## Files

- `index.html` — shell, meta/OG/JSON-LD, bottom nav, WhatsApp FAB, SW registration
- `app.js` — hash router + all views + data (`SERVICES`, `PORTFOLIO`, `TIMELINE`, `TEAM`, `JOURNAL`, `AREAS`, `ESTIMATOR`, `TESTIMONIALS`)
- `style.css` — design system (warm off-white + brass), components
- `sw.js` — cache-first shell, network-first everything else; bump `CACHE_NAME` on every `app.js` change
- `manifest.json`, `icons/`, `favicon.svg`, `offline.html`, `robots.txt`
- `images/portfolio/` — drop `{id}.jpg` here to serve photos locally (see its README)
- `fetch-images.sh` — downloads the 5 press photos into `images/portfolio/` (run anywhere with network)
- `build-icons.sh` — regenerates `icons/*.png` from `favicon.svg` (needs `npm install sharp`)

## Still needs input from Shagun

- **Testimonials** — `TESTIMONIALS` in `app.js` holds 3 placeholders that render a visible "sample layout" note. Paste real quotes, remove `placeholder: true`.
- **Team roles** — `TEAM` lists Shagun, Neha, Govind with provisional roles (`TODO` comment).
- **UPI ID** — Contact still shows "Request UPI Details" via WhatsApp; a real `upi://pay?pa=…` link needs her VPA.
- **Photos** — hero and About portrait are gradients; project photos are hot-linked from press sites until `fetch-images.sh` is run and the `image:` fields are dropped.
- **Pricing sanity check** — estimator ranges are lifted from her own blog posts; worth a glance before promoting the feature.

## Design system

```
Palette:   bg #FAF9F6 · text #1A1A1A · accent (brass) #B8860B · surface #F2F0EC
Type:      DM Serif Display (headings) · Inter (body)
Layout:    480px max, mobile-first, fixed 5-tab bottom nav, iOS safe-area aware
```

## Business context

- **Founder:** Shagun Singh Baruah — hotelier by education (ITC Hotels 2001–2008), designer by passion
- **Parent company:** AM Services 24×7 Pvt. Ltd, founded by Lt. Col. Surjit Singh (Retd.); manpower → deep cleaning & marble polishing (2012) → full renovations (2015)
- **Track record:** 50+ full home renovations, ~200 bathroom makeovers (as of end-2021)
- **Office:** 118, 1st Floor, Qutub Plaza, DLF Phase-1, Gurugram 122001
- **Phones:** +91-7042832335 · WhatsApp +91-9953770123
- **Instagram:** @homework_homeimprovement

## App store wrapping

Use [PWABuilder](https://pwabuilder.com) against the deployed HTTPS URL → package for iOS (Xcode project, Apple Developer account) and Android (TWA). Icons and manifest already satisfy its checks.

## Verifying locally

```
python3 -m http.server 8123
# open http://127.0.0.1:8123/#/
```

Checklist: all routes render · bottom-nav active state · `#/book?service=kitchens` preselects Kitchens · estimator 3 BHK shows ₹20 L–₹35 L · Lighthouse PWA installable · airplane mode → `offline.html`.
