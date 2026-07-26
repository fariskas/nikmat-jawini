# Nikmat Jawini — Single-Page Real Estate Site

**Handoff document.** Everything asked for, everything built, and what's still open.
Last updated: 26 July 2026

> **Starting a new conversation?** Upload `design-1-ledger.html` and `design-2-signal.html`
> along with this file. The two HTML files are fully self-contained (all images embedded
> as base64) — there are no asset folders, no build step, no dependencies except the
> Google Fonts link.

---

## 1. The brief

A single-page website for a Singapore real estate agent, **two design variations**, built
from a hand-drawn wireframe PDF (`YOUR_REAL_ESTATE.pdf`).

### Stated requirements

| # | Requirement | Status |
|---|---|---|
| 1 | Two design variations | Done — see §4 |
| 2 | Follow the wireframe PDF structure | Done — see §3 |
| 3 | Testimonial carousel: **1 image + 1 review per slide** | Done — 7 slides |
| 4 | Fixed menu with anchor links to subsections | Done — 6 anchors, scroll-spy |
| 5 | WhatsApp link in the fixed menu | Done — `wa.me/6596583122` |
| 6 | Instagram link in the fixed menu | Done |
| 7 | Repeat the menu in the footer | Done — same 6 anchors + contacts |
| 8 | Professional design | Both directions aim at this differently |
| 9 | Font: **League Spartan** (Google Font) | Done — sole typeface, weights 300–900 |
| 10 | Colours: **white** + **navy `#1A2A39`**, accent allowed | Done — one accent per variation |
| 11 | Testimonials link out to ERA portal | Done — 2 places per design |
| 12 | Awards as a **full-page carousel, auto-scrolling, infinite, right-to-left**, images repeated | Done — and verified pixel-exact |

### Key details

- **Name:** Nikmat Jawini
- **Agency:** ERA Realty Network Pte Ltd
- **CEA licence:** R000282G
- **WhatsApp / phone:** 9658 3122 → `https://wa.me/6596583122`
- **Instagram:** `https://www.instagram.com/nikmat.jawini/`
- **Testimonials:** `https://propertyportal.era.com.sg/agent/detail/R000282G?review=1`

---

## 2. Source assets

### Supplied by the client

| File | What it is | Where it ended up |
|---|---|---|
| `YOUR_REAL_ESTATE.pdf` | Hand-drawn wireframe, 6 pages | Structure + all copy + headshot + client photo |
| `IMG_0328.JPG` | Top 1000 Achievers 2025, ranked **937th** (pink) | Awards marquee |
| `IMG_0329.JPG` | Top 200 YoungERA 2025, ranked **152nd** (pink) | Awards marquee |
| `IMG-20250505-WA0009.jpeg` | Top 500 Achievers Q2 2024, YoungERA (purple, square) | Awards marquee |
| `IMG-20250505-WA0010.jpeg` | Top 900 Achievers 2024 (gold) | Awards marquee |

### Extracted from the wireframe PDF

The PDF was one tall screenshot image (1536 × 10190px) embedded across 6 pages. Two
images were cropped out of it:

- **Headshot** — cropped, then background removed with a flood-fill key (the backdrop was
  flat light grey, so this came out clean). Saved as a transparent WebP so it can sit
  directly on the navy hero in Design 2.
- **Client photo** — the HDB / MyNiceHome "Yay!" handover shot with two clients.
  This is the **only** client photo that existed in the source.

### Image processing applied

| Asset | Format | Size | Notes |
|---|---|---|---|
| Headshot | WebP w/ alpha, 660px wide | ~36 KB | Background keyed out |
| Award ×4 | JPEG q78, 560–620px wide | ~52–76 KB each | Intrinsic `width`/`height` set in HTML |
| Client photo | JPEG q80, 760px wide | ~87 KB | |

All are embedded as base64 data URIs. Each HTML file is ~890 KB total.

---

## 3. Page structure

Both designs share the identical structure, taken from the wireframe:

```
┌─ FIXED NAV ─────────────────────────────────────────────┐
│  Brand · Home · Why me · What I offer · Awards ·         │
│  Reviews · Contact · [IG] · [WhatsApp]                   │
└──────────────────────────────────────────────────────────┘

#top      HERO
          Headline "Your real estate solutions."
          Headshot · WhatsApp CTA · credentials strip (3 items)

#why      READY TO UPGRADE? OR SIMPLY WISH TO RIGHTSIZE?
          → 2 solid reasons why
            01  Proven successful track record
            02  Happy clients with real testimonials

#offer    WHAT I OFFER
            01  Personalised consultation — real advice, practical solutions
            02  Efficiency & transparency — no hidden numbers, quick response

#awards   RECOGNITION
          Full-bleed infinite marquee, right→left, 4 awards × 2 sets

#reviews  CLIENT TESTIMONIALS
          Carousel — 1 image + 1 review per slide, 7 slides
          8 ERA rating criteria per review
          → "Read more testimonials" link to ERA portal

#contact  CLOSING CTA
          WhatsApp + Instagram

┌─ FOOTER ────────────────────────────────────────────────┐
│  Agent details · Sections (6 anchors) · Get in touch     │
└──────────────────────────────────────────────────────────┘
```

The wireframe's numbered lists ("2 solid reasons why", "what I offer" items 1 & 2) are
kept as genuine numbered sequences, because the content really is a counted list.

---

## 4. The two variations

### Design 1 — "Ledger" (`design-1-ledger.html`)

White-dominant, editorial, restrained. Reads like a design studio's client document.

**Tokens**
```
--paper    #FFFFFF     white canvas
--ink      #1A2A39     navy, used as ink
--ink-deep #14212C     footer
--mist     #F1F4F7     section alternation
--rule     #DCE2E8     hairlines
--brass    #B98432     ACCENT
--muted    #5C6E7E     body copy
--star     #D89B33     rating stars
```

**Why brass:** taken from the gold medallions in the award posters. It's an
awards-and-credentials page, so the accent points at the thing the page is about.

**Type:** League Spartan 800 for display at `-0.035em` tracking; 400 at 1.72 line-height
for body; 600 uppercase at `0.24em` for labels.

**Layout:** asymmetric. Hero is text-left / portrait-right. Strict hairline grid. The
"What I offer" band is inverted to navy so there's one dark anchor before the marquee.

**Signature element:** the *spec frame* — a hairline box with brass corner ticks, like a
floor-plan dimension marker. Used on the hero portrait and on every carousel photo.

---

### Design 2 — "Signal" (`design-2-signal.html`)

Navy-dominant, bold, centred. Reads like a brand campaign.

**Tokens**
```
--navy   #1A2A39     base
--deep   #121D27     awards band + footer
--navy-2 #22364A     card interiors
--paper  #FFFFFF
--haze   #EDF1F5     light section
--red    #E4002B     ACCENT (ERA brand red)
--gold   #E0A33C     rating stars
--muted  #5E7183
```

**Why red:** it's ERA's own red and already appears in every award poster and on the
lapel pin in the headshot. On-brand rather than decorative. Used sparingly — hover
underlines, active dots, small rules, one button.

**Type:** League Spartan 900 uppercase for display at `-0.045em`; same body settings.
Much larger display sizes than Design 1.

**Layout:** centred, full-bleed alternating bands. Hero portrait is the transparent
cut-out fading into the navy. Cards lift on hover.

**Signature element:** the red rule-through motif + the glowing full-bleed marquee on
near-black navy.

---

## 5. Content written into the page

The wireframe had headline copy but no body copy, so supporting copy was written to
match. Everything is plain, specific, and in the agent's voice — no marketing filler.

**Hero sub:** "Selling, buying, upgrading, rightsizing — handled end to end, with the
numbers explained before you commit to anything."

**Credentials strip (3 items):**
1. Upgrading & rightsizing — timing your sale and purchase so you're never caught between two homes
2. 5.0 across every review — verified on the ERA property portal
3. Top 1000 Achiever, 2025 — ranked 937th nationally

**Closing:** "Tell me where you are, and I'll tell you what's possible. / One message, no
obligation. I'll come back to you with the numbers for your specific flat."

> ⚠️ **Please fact-check two claims before going live:**
> - *"more than 8,000 ERA associates"* — this was written as a plausible figure and is
>   **not verified**. Either confirm the real number or cut the phrase.
> - *"5.0 across every review"* — true for the 7 reviews transcribed, but confirm it
>   holds for the full portal listing.

### Testimonials (all 7 transcribed from the wireframe PDF)

| # | Name | Role | Date | Photo |
|---|---|---|---|---|
| 1 | Nur Khairiana | Buyer | 15 January 2026 | ✅ real photo |
| 2 | Mohd Redzuan Bin Jaafar | Buyer | 17 February 2025 | monogram |
| 3 | Mohammed Adil Aprianto | Buyer | 02 March 2026 | monogram |
| 4 | Muhammad Khedir | Buyer | 06 July 2026 | monogram |
| 5 | Bella Ariffin | Buyer | 03 March 2025 | monogram |
| 6 | Irna Nurlina | Buyer | 02 July 2026 | monogram |
| 7 | Dewi | Seller | 02 December 2025 | monogram |

Long reviews were lightly trimmed for the carousel; the full text remains on the ERA
portal, which is what the "Read more testimonials" link is for.

Each review shows all 8 ERA rating criteria at 5 stars:
Communication · Client Dedication · Value-added Services · Process Expertise ·
Market Knowledge · Reliability · Marketing Skills · Negotiation Skills

Design 1 lists them as a two-column dotted table. Design 2 shows them as pills.

---

## 6. Technical implementation

### Awards marquee — the important one

**A naive `translateX(-50%)` marquee is broken here, and it's a subtle failure.**

Standard approach: duplicate the image set, set `width: max-content`, animate to `-50%`.
That assumes `max-content` equals exactly twice one set's width.

It doesn't. The awards are sized by `height` with `width: auto`, and an image with
`height:100%; width:auto` contributes its **natural** width to intrinsic sizing, not its
scaled width. Measured at 1440px:

```
one set (measured)      1465.8 px
max-content / 2         1626.0 px      ← 160px off
```

So the loop would jump ~160px on every cycle. Visible, and hard to diagnose by eye.

**Fix:** measure one set in JS and drive both the track width and the translate distance
from that number.

```js
function sizeMarquee(){
  document.querySelectorAll('.marquee').forEach(m=>{
    const t=m.querySelector('.marquee-track');
    const kids=[...t.children];
    if(kids.length<2) return;
    const half=kids.length/2;
    let w=0;
    for(let i=0;i<half;i++){
      const el=kids[i];
      w += el.getBoundingClientRect().width + parseFloat(getComputedStyle(el).marginRight||0);
    }
    if(!w) return;
    t.style.width=(w*2)+'px';
    t.style.setProperty('--shift', w+'px');
    t.style.animationDuration=(w/62).toFixed(2)+'s';   // constant ~62px/sec
  });
}
sizeMarquee();
window.addEventListener('load',sizeMarquee);
let mqT; window.addEventListener('resize',()=>{clearTimeout(mqT);mqT=setTimeout(sizeMarquee,180);});
```

```css
@keyframes slide{
  from{transform:translate3d(0,0,0)}
  to  {transform:translate3d(calc(-1 * var(--shift,50%)),0,0)}
}
```

Also required, and easy to miss:
- **No `loading="lazy"`** on marquee images — the off-screen duplicate set wouldn't lay
  out, breaking the measurement. Images are base64 anyway, so there's no cost.
- **Explicit `width`/`height` attributes** on each `<img>` so space is reserved before decode.

Deriving duration from width also means scroll speed is constant at any viewport,
instead of racing on wide screens. Pauses on hover.

### Testimonial carousel

- Slides built in JS from a `REVIEWS` array — see §7 for how to edit.
- One image (or monogram) + one review per slide, exactly as asked.
- Controls: prev/next arrows, dots, `01 / 07` counter, arrow keys, touch swipe.
- Autoplay every 9s; stops permanently on any interaction, pauses on hover.
- Disabled entirely under `prefers-reduced-motion`.

### Navigation

- Fixed, blur-backed, 6 anchors + Instagram + WhatsApp.
- Scroll-spy via `IntersectionObserver` (`rootMargin: -45% 0px -50% 0px`).
- Collapses to a burger menu below 900px; menu closes on link tap.
- `scroll-padding-top` set to nav height so anchors don't land under the bar.

### Quality floor

- Responsive at 1440 / 1024 / 390 — no horizontal overflow at any width.
- Visible `:focus-visible` outlines in the accent colour.
- `prefers-reduced-motion` respected: marquee stops, carousel autoplay off, transitions cut.
- Scroll-reveal via `IntersectionObserver`, staggered.
- No `localStorage` / `sessionStorage` anywhere.

---

## 7. How to edit things

Everything lives in one file per design. Search for these landmarks.

**Swap in a client photo** — find `const REVIEWS =` near the bottom of the file. Each
entry has a `"photo"` key that is either a base64 data URI or `null`. Replace `null` with
a data URI (or a normal path like `"images/client2.jpg"` if you'd rather host images
separately) and the monogram card is replaced automatically. No other change needed.

```js
{ "name":"Muhammad Khedir", "role":"Buyer", "date":"06 July 2026",
  "initials":"MK", "photo": null,        // ← replace this
  "text":[ "para 1…", "para 2…" ] }
```

**Edit review text** — the `text` array; each string becomes its own paragraph.

**Add or remove a review** — add/remove an object in `REVIEWS`. Dots, counter and
autoplay all adapt automatically.

**Change colours** — the `:root` block at the top of `<style>`. Every colour in the page
derives from those variables.

**Change the accent** — Design 1: `--brass`. Design 2: `--red`.

**Add an award** — add two `<figure class="award">` blocks inside `.marquee-track`, one in
each half, keeping both halves identical. Include `width`/`height` attributes. The
marquee re-measures itself, so no other change is needed.

**Change marquee speed** — the `w/62` divisor in `sizeMarquee()`. Higher = slower.

**Change section order** — sections are plain top-level `<section>` blocks with `id`s
matching the nav anchors. Move them; update the nav and footer lists to match.

---

## 8. Verification performed

All checks run headless in Chromium at 1440 / 1024 / 390px, with League Spartan actually
loaded (fetched locally via `@fontsource/league-spartan`, because the sandbox blocked
`fonts.googleapis.com`).

| Check | Result |
|---|---|
| Horizontal overflow, all 3 widths, both designs | None |
| Nav fits without wrapping | Exact at all widths |
| Display headings break at intended `<br>` points | ✅ after fix (§9) |
| Marquee loop seamless | ✅ exact at 1440 / 1024 / 390 and after live resize |
| Carousel: 7 slides, 1 image + 1 review each | ✅ |
| All 8 rating criteria present per slide | ✅ |
| 6 nav anchors, 6 footer anchors, no broken targets | ✅ |
| WhatsApp / Instagram / ERA portal links present | ✅ |
| All 9 embedded images load | ✅ |
| JS console errors | None |
| Reduced motion stops marquee + autoplay | ✅ |
| Body-copy contrast | 5.27:1 (passes WCAG AA) |

---

## 9. Bugs found and fixed during review

Worth knowing about, since two of them are the kind that reappear if the code is
refactored.

1. **Marquee not seamless** — `max-content` mis-measured by 160px. Root cause and fix in
   §6. This was invisible in a static screenshot.

2. **Headings squeezed in Design 2** — `.sec-head { max-width: 60ch }` was constraining
   the headings, not just the paragraphs, so centred display type wrapped to 4 lines in a
   ~540px column instead of breaking at the `<br>`. Changed to
   `max-width: min(58rem, 100%)` with the measure moved onto `.sec-head .lede`.

3. **Low-contrast review date** — white at 50% opacity on navy was ~4.6:1. Raised to 66%.

**Font note:** League Spartan is *narrower* than the system fallback, so once it loaded,
headings gained room rather than overflowing. Any future size tuning must be checked with
the real font loaded — the fallback is misleading.

---

## 10. Open items

### Blocking

- [ ] **Six client photos needed.** Only one existed in the source. Reviews 2–7 currently
      show a designed monogram card (initials + Buyer/Seller in the accent colour). It
      reads as intentional, not broken — but real photos would be much stronger. One-line
      change each, see §7.

### Should do before launch

- [ ] **Verify the "8,000 ERA associates" figure** — written as plausible, not confirmed.
- [ ] **Confirm "5.0 across every review"** holds for the full portal listing.
- [ ] **Pick one design** and drop the other.
- [ ] **Open both files in a real browser and eyeball them.** The final round of changes
      was verified by measurement, not by eye — the screenshot viewer stopped rendering
      partway through the session. The numbers are unambiguous, but a human look is worth
      it, particularly Design 2's `#why` section where the heading-width fix landed.

### Nice to have

- [ ] `<meta property="og:*">` tags + a share image for WhatsApp link previews
      (important — this will mostly be shared *via* WhatsApp)
- [ ] Favicon
- [ ] Analytics
- [ ] A pre-filled WhatsApp message, e.g.
      `https://wa.me/6596583122?text=Hi%20Nikmat%2C%20I%27d%20like%20to%20ask%20about...`
- [ ] Consider self-hosting League Spartan (via `@fontsource/league-spartan`) to remove
      the Google Fonts dependency and avoid a flash of fallback text
- [ ] If more awards arrive each year, the marquee handles them — just keep the two halves
      identical

---

## 11. Files

| File | What |
|---|---|
| `design-1-ledger.html` | Variation 1 — white / navy / brass, editorial |
| `design-2-signal.html` | Variation 2 — navy / white / ERA red, bold |
| `PROJECT-HANDOFF.md` | This document |

Both HTML files are standalone. Upload to any host and they work — no build step, no
asset folders. The only external request is the Google Fonts stylesheet.
