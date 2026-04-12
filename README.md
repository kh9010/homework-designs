# Homework Design Studio PWA

Progressive Web App for Homework Design Studio (homeworkdesigns.org), an interior design and renovation studio in Gurgaon led by Shagun Singh.

## Status: Work in Progress

### Done
- `index.html` — app shell with bottom navigation, meta tags, manifest + service worker registration
- `manifest.json` — PWA manifest (standalone, icons, theme colors)
- `style.css` — complete design system with warm/luxury palette (off-white + brass/gold), bottom nav, forms, cards, wizard UI, portfolio grid, contact cards
- `favicon.svg` — "H" monogram favicon

### TODO
- [ ] **`app.js`** — Hash router and all 6 view renderers:
  - `#/` Home (hero, stats, service cards, CTA)
  - `#/services` Services list (7 services)
  - `#/portfolio` Portfolio grid (placeholder images)
  - `#/about` Shagun's story + timeline
  - `#/book` 4-step booking wizard → WhatsApp deep link
  - `#/contact` Address, phones, socials, UPI deep link
- [ ] **`sw.js`** — Service worker (cache-first for shell, network-first for dynamic, offline fallback)
- [ ] **`offline.html`** — Offline fallback page with phone numbers
- [ ] **`icons/`** — Generate PNG icons from `favicon.svg`:
  - `icon-192.png` (192x192)
  - `icon-512.png` (512x512)
  - `icon-maskable-192.png` (maskable, safe zone)
  - `icon-maskable-512.png` (maskable, safe zone)
  - `apple-touch-icon.png` (180x180)

## Design System (already in style.css)

```
Palette:
  --color-bg:      #FAF9F6  (warm off-white, plaster walls)
  --color-text:    #1A1A1A  (near-black)
  --color-accent:  #B8860B  (brass/gold — luxury hardware vibe)
  --color-surface: #F2F0EC  (warm card backgrounds)

Typography:
  Headings: DM Serif Display (elegant serif)
  Body:     Inter (clean sans)

Layout:
  Max content width: 480px (mobile-first, app-like)
  Fixed bottom tab nav: 5 tabs (Home / Services / Portfolio / Book / Contact)
  Safe-area insets for iPhone notch
```

## Business Context

- **Founder**: Shagun Singh (ex-ITC Hotels 2001–2008, Homework since 2012)
- **Location**: 118, 1st Floor, Qutub Plaza, DLF Phase-1, Gurgaon Haryana 122001
- **Phones**: +91-7042832335, +91-9953770123 (WhatsApp primary)
- **Instagram**: @homework_homeimprovement (30K followers)
- **Services**: Full Home Renovations, Modular Kitchens, Marble Polishing, Color Consulting, Restyling, Hand-Crafted Vanities, Deep Cleaning
- **Legal name**: AM Services 24x7 Pvt. Ltd

## Booking Flow (multi-step wizard)

1. **Select Service** — visual cards for each of the 7 services
2. **Property Details** — type (Apartment/Villa/Office), location, description
3. **Contact Info** — name, phone (+91), email, preferred contact time
4. **Review & Send** — summary, then green "Send via WhatsApp" button

WhatsApp deep link target:
```
https://wa.me/919953770123?text={url-encoded message with all form fields}
```

## UPI Payment (Contact view)

Simple deep link, no payment gateway:
```
upi://pay?pa={UPI_ID}&pn=Homework%20Design%20Studio&cu=INR
```
Shagun needs to provide her UPI ID before this goes live.

## App Store Wrapping Path

Use [PWABuilder](https://pwabuilder.com):
1. Deploy PWA to HTTPS URL
2. Enter URL at pwabuilder.com
3. Fix any manifest/SW/icon issues flagged
4. Click "Package for stores"
5. **iOS**: Download Xcode project, sign with Apple Developer ($99/yr), submit
6. **Android**: Download Trusted Web Activity (TWA) project, build in Android Studio, submit to Play Store

No Node.js / build tools needed.

## Verification Checklist (once complete)

- [ ] Open `index.html` locally — all 6 views navigate correctly via hash routing
- [ ] Bottom nav active state updates when navigating
- [ ] Booking wizard: all 4 steps work, WhatsApp link opens with pre-filled message
- [ ] UPI link opens UPI apps on Android
- [ ] Run Lighthouse PWA audit — should pass installability
- [ ] Test offline: airplane mode after first load → `offline.html` appears
- [ ] Run PWABuilder audit at pwabuilder.com after deployment
- [ ] Test on real iOS + Android devices

## Notes on Handoff

The `homework/` directory is self-contained — it can be moved as-is into a new standalone repo, then deployed to any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages). All paths in `index.html` and `manifest.json` are relative, so it'll work at any subpath or root.
