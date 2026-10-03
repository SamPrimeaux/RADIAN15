# RADIAN — Autumn / Winter 26 Luxury Flagship Storefront

An ultra-luxury, high-conversion direct-to-consumer flagship fashion storefront modeled after the reverse-engineered **RADIAN** architectural teardown specification. Features 27 choreographed scroll scenes across Acts I through VII, 5 global overlays, dedicated standalone Product Detail Pages (PDP), and a built-in **AgentSamAssistant** studio companion with interactive loading states, tips, and prompt carousels.

---

## 🌟 Key Highlights & Architecture

### 1. Master Scroll Map (27 Choreographed Sections across Acts I–VII)
- **Act I ("The Entrance")**:
  - `S01` **Announcement Marquee Loop**: Continuous text loop with express shipping, member privileges, and monogramming callouts.
  - `S02` **Sticky Curtain Hero (`HeroCurtain`)**: `100vh` sticky curtain (`position: sticky; top: 0`) that scales down to $0.85\times$ and blurs up to $6\text{px}$ as subsequent sections slide over it. Includes 2 pulsating hotspots with interactive popovers and an `ADD ALL TO CART` look bundle.
  - `S03` **"The Wardrobe" (`WardrobeGallery`)**: White-background category row with 5 isolated 3:4 cut-outs (Leather, Bottoms, Tops, Dresses, Footwear).
- **Act II ("Window Shopping")**:
  - `S04` **Dark 4-Up Promo Tiles (`PromoGrid`)**: Desktop-only black band with hand-drawn red scribble SVG accent, street photo tiles, and 10% privilege discount block.
  - `S05 & S06` **"The Selected" + 5 Circular Story Rings (`StoriesRings`)**: Offset red glitch echo headline leading to 5 story rings that open a full-screen vertical story viewer.
  - `S07` **Tabbed Collection Carousel (`CollectionCarousel`)**: `NEW ARRIVALS | BEST SELLERS | SALE` tabs with instant hover rollover image swap, color swatches, sale strike-throughs, and passive touch-action horizontal snap tracking.
- **Act III ("The Brand World")**:
  - `S08` **Fullscreen Media Product (`FullscreenEditorial`)**: *"Timeless style for every moment"*, scroll-linked word-by-word text reveal, and a floating white-framed product card.
  - `S09` **Split Media Diptych (`SplitMediaDiptych`)**: *"Discover Cotton"* vs *"Discover Leather"* with oversized media and cascade hover underlines.
  - `S10` **Dress Blurb (`DressBlurb`)**: Editorial statement with cascade link.
  - `S11` **Shoppable Lookbook (`ShopTheLookbook`)**: Full-width campaign visual with pulsing hotspots and quick-buy popovers.
- **Act IV ("The Sell")**:
  - `S12` **Bundle Product ("Better Together") (`BundleBuilder`)**: Pinned sticky summary card at `top: 80px`, interactive toggleable `[✓] INCLUDED` checkboxes, dynamic 20% discount calculations for 3+ items, and `ADD THE SELECTED` action.
  - `S13` **Featured 3-Column PDP (`FeaturedPDP`)**: Dual pinned sticky rails: Left rail sticky with size/swatch selector and ATC; Center scrolling 4-photo gallery; Right rail sticky with specifications, fit guide, and provenance accordions.
  - `S14` **Giant Ticker Marquee (`TickerMarquee`)**: Bold uppercase white typography with geometric star icons.
  - `S15` **"Refined Basics" Split Media (`RefinedBasicsSplit`)**: Left media column pinned sticky at `top: 0`; Right 2-column product grid with 8 items.
- **Act V ("The Film + Teaser")**:
  - `S16` **Brand Film (`BrandFilm`)**: Full-bleed cinematic visual with typography overlay and video launcher.
  - `S17` **"Something New Is Almost Ready" (`TeaserReserve`)**: 46.8px/700 display title, waitlist form, and VIP reserve priority confirmation.
- **Act VI ("Proof + Content")**:
  - `S18` **Press / Brand Logo Infinite Loop (`LogoMarquee`)**: VOGUE, GQ, DAZED, 032C, NUMÉRO, HYPEBEAST.
  - `S19` **"The Rhythm of Contrast" (`BeforeAfterSlider`)**: Draggable before/after comparison slider comparing raw cotton twill to full-grain lambskin with pointer-capture and `touch-action: none`.
  - `S20` **Testimonials (`TestimonialsSection`)**: 5-star ratings with interactive reviewer & product tabs.
  - `S21` **Blog Posts Stack (`BlogPostsStack`)**: Sticky card-deck stacking effect with pinned featured post.
- **Act VII ("Close")**:
  - `S22` **Newsletter Band (`NewsletterBand`)**: *"The Edit, In Your Inbox"* 38.4px/400 regular weight.
  - `S23` **Social Grid (`SocialGrid`)**: `@RADIAN` 3x2 full-bleed square grid with Instagram hover details.
  - `S24 & S25` **FAQ & Trust Strip (`FAQAndTrust`)**: 3 animated accordions + dedicated concierge, express global delivery, and artisanal provenance.
  - `S26 & S27` **Footer & Bottom Panel (`Footer`)**: Luxury dark footer, multi-column links, currency selector, smooth back-to-top button, legal terms.

---

### 2. Global Overlay & Drawer System
1. **Full-Height Frosted Menu Drawer (`MenuDrawer`)**:
   - Opens full viewport height (`inset-y-0 h-full`).
   - Frosted glassmorphism (`bg-[#0a0a0a]/85 backdrop-blur-2xl border-r border-white/15`).
   - iOS-style drill-down navigation (`SHOP BY SILHOUETTE >`, `MATERIALS & CRAFT >`, `< Back to Directory`).
   - Horizontal snap inspiration rail and currency/account footer actions.
2. **Top Drop-Down Search Panel (`SearchPanel`)**:
   - `translateY(-128px -> 0)` in 0.38s with auto-focused input.
   - Live predictive search results with instant product thumbnails and quick-view triggers.
3. **Slide-Over Bag Drawer (`BagDrawer`)**:
   - 520px wide right sheet (`cubic-bezier(0.65, 0, 0.35, 1)`).
   - High-contrast serif *"Your BAG"*, itemized list, quantity steppers, free shipping threshold meter, promo code engine (`RADIAN15`), and checkout simulation.
4. **Discover Drawer (`DiscoverDrawer`)**:
   - Megaphone trigger opening tabbed drawer (`NEW & NOW`, `OFFERS`, `MORE`), seasonal highlights, and quick-add actions.
5. **Welcome Privilege Card (`PromoTabCard`)**:
   - Persistent vertical left edge tab ("GET 15% OFF") opening an anchored bottom-right card modal.
6. **Stories Viewer Modal (`StoriesViewerModal`)**:
   - Instagram-style full-screen vertical player with auto-advancing progress bars and direct buy tags.
7. **Quick View Modal (`QuickViewModal`)**:
   - In-place PDP preview with shade swatches, size selector, and Add to Bag.
8. **Fly-to-Cart Animation (`FlyToCartGhost`)**:
   - Physical "+1" ghost element that arcs from the clicked button into the BAG badge in the header, triggering the counter pop animation.

---

### 3. Dedicated Individual Product Page (PDP) View (`ProductDetailPage`)
- Standalone full-page product view accessible by clicking any product title or image across the store.
- **Left Gallery**: High-res multi-angle photography, thumbnail navigation reel, and model fit measurements tag.
- **Right Purchase Module**:
  - Atelier shade swatches with active ring indicator.
  - Sizing chips with live inventory state ("Limited batch inventory in stock. Dispatches in 24 hours").
  - Bespoke fit guide advisory modal.
  - Add to Bag with live subtotal calculation and Express Concierge Checkout.
  - Fabrication, care, and duty-free worldwide shipping accordions.
- **Complete the Look**: Curated cross-sell carousel with instant 1-click addition to ensemble.
- **Mobile Sticky Buy Bar**: Fixed bottom purchase bar for smaller phone viewports.

---

### 4. Built-in AgentSam Studio Assistant (`AgentSamAssistant`)
- Toggleable developer and brand concierge dashboard (via floating bottom-left button or header sparkle icon).
- **Tips & Prompts Carousel**:
  - Minimalist 3D-styled cards with actionable next-step luxury ecommerce prompts (audio transcription, VIP drop vaults, dynamic currency engines, generative lookbooks).
  - 1-click copy-to-clipboard button.
- **Architecture & File Status Inspector**:
  - Live module line counts, health verification, and component directory.
- **Page & View Switcher**:
  - Quick launcher to test standalone PDP views, full-height frosted menu drawers, and cart states.
- **Simulated Build State Engine**:
  - Interactive compiling progress bar and status indicator.

---

## 📱 Mobile & Touch Enhancements

- **Framer Motion Page Transitions**:
  - Choreographed transition states between the Flagship Storefront and Standalone Product Detail Pages (PDP) using `AnimatePresence mode="wait"`.
  - Luxury editorial curve (`ease: [0.22, 1, 0.36, 1]`) with subtle opacity, 18px glide, and sub-pixel blur-in effect for continuous perceptual elegance.
- **Header Responsiveness**: Clean layout on 375px–390px phone viewports with zero overlap between the centered `RADIAN` logo and control icons.
- **Touch-Action Optimization**:
  - `touch-action: none` on `BeforeAfterSlider` with pointer capture for buttery 120fps dragging.
  - `touch-action: pan-x`, `overscroll-behavior-x: contain`, and passive scroll listeners on `CollectionCarousel`.
- **Curtain Hero Scaling**: Balanced font sizes (`text-wrap: balance`) and stacked full-width CTAs on smaller screens.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Styling**: Tailwind CSS v4 (`@import "tailwindcss";`)
- **Icons**: Lucide React
- **Animations**: CSS Compositor Transforms, Custom Keyframes, House Easings (`cubic-bezier(0.22, 1, 0.36, 1)`)
- **Bundler**: Vite 8
- **AI Integrations**: `@google/genai` TypeScript SDK

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the local development server (Port 3000)
npm run dev

# 3. Build for production
npm run build

# 4. Verify TypeScript and Linting
npm run lint
```

---

## 📄 License & Attribution

Designed and engineered for **RADIAN — Autumn / Winter 26**. All silhouettes, textures, and copy follow the high-fashion direct-to-consumer architectural guidelines.
