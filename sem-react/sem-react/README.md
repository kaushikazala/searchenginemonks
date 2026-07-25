# Search Engine Monks — React (Vite)

This is the React rewrite of your site. Same design, same ensō motif, same
content — rebuilt as components with real state instead of DOM scripting.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

Output goes to `dist/`, ready to deploy anywhere static (Netlify, Vercel,
Cloudflare Pages, S3, etc).

## ⚠️ One thing you need to do: add your images back

Your original upload didn't include the `assests/` folder, so these files
are referenced but not present:

- `public/assests/logo.svg` — navbar logo
- `public/assests/Monk-2.svg` — hero + "why us" illustration
- `public/assests/clinet1.jpeg`, `clinet2.jpeg`, `clinet3.jpeg` — testimonial photos

Drop them into `public/assests/` (same folder name/typo as your original site,
preserved so nothing breaks) and they'll show up automatically — Vite serves
everything in `public/` from the site root.

## What changed structurally vs. the static version

- **Components, not sections in one file** — `src/components/*.jsx`, one per
  section (Navbar, Hero, Services, WhyUs, Portfolio, Testimonials, FAQ,
  Contact, Footer, BackToTop).
- **Scroll-reveal is a hook, not a global observer** — `useReveal()` /
  `<Reveal>` wraps any element and adds `is-visible` when it enters the
  viewport. Same CSS classes (`reveal`, `reveal-delay-n`) as before, so no
  animation styling changed.
- **Stat counters** are their own `<StatCounter>` component — same easing
  math as your original `script.js`, just triggered by React state.
- **FAQ accordion** is now controlled by React state (`openIndex`) instead of
  toggling `<details>` elements — same visuals, same "only one open" rule,
  but keyboard/click handled through a `<button>` for cleaner accessibility.
- **Contact form** is a controlled form (`useState`) so you can wire the
  `handleSubmit` in `Contact.jsx` straight into an email API, Formspree,
  your backend, etc. Right now it just logs to the console and shows a
  "thanks" message — that's the one line you'll want to replace.
- **Navbar mobile menu** toggles via React state instead of Bootstrap's JS
  bundle, so `bootstrap.bundle.min.js` isn't loaded at all — only
  `bootstrap.min.css`, for the grid/utility classes.
- `script.js` is gone — its three behaviors (reveal, counters, FAQ) all live
  as hooks/components now; the fourth (navbar shrink + back-to-top) is in
  `Navbar.jsx` / `BackToTop.jsx`.

`src/style.css` is your original stylesheet, untouched, plus one small
addition: since the FAQ now renders as `<button>` instead of
`<details><summary>`, I added `.faq-item .faq-summary` / `.faq-item.is-open`
rules that mirror the old `summary` / `[open]` styling exactly.
