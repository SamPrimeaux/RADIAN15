# Repository Filemap & Work-in-Progress (WIP) Architecture

## 📂 Complete File Tree Map

```text
/
├── index.html                           # HTML entry point with luxury typography & meta tags
├── metadata.json                        # AI Studio applet capabilities and naming
├── package.json                         # Dependencies & project scripts
├── tsconfig.json                        # TypeScript strict compiler configuration
├── vite.config.ts                       # Vite 8 config with Tailwind v4 & path aliases
├── README.md                            # Complete storefront architecture & feature documentation
├── FILEMAP.md                           # This file: component map, module roles & WIP status
├── .env.example                         # Environment variables placeholder
├── .gitignore                           # Git ignore rules
│
└── src/
    ├── main.tsx                         # React 19 root bootstrap
    ├── App.tsx                          # Master app layout, section orchestrator & overlay host
    ├── index.css                        # Custom easing tokens, marquees, keyframes & touch rules
    │
    ├── types/
    │   └── index.ts                     # TypeScript data interfaces (Product, CartItem, Story, etc.)
    │
    ├── data/
    │   └── catalog.ts                   # Autumn/Winter 26 products, stories, reviews, blogs, faqs
    │
    ├── context/
    │   └── CartContext.tsx              # Global state: cart, drawers, PDP routing, currency & fly ghost
    │
    ├── assets/
    │   └── images/                      # Generated campaign & studio photography assets
    │       ├── hero_autumn_winter_*.jpg        # S02 Hero campaign visual (16:9)
    │       ├── lookbook_leather_editorial_*.jpg# S11 Shoppable lookbook visual (16:9)
    │       ├── split_media_cotton_maroon_*.jpg # S09 Cotton editorial (3:4)
    │       ├── split_media_leather_kuro_*.jpg  # S09 Leather editorial (3:4)
    │       └── pdp_gallery_leather_tee_*.jpg   # S13 Calfskin Tee PDP gallery (3:4)
    │
    └── components/                      # Modular UI components
        │
        ├── # Global Navigation & Overlays
        ├── Header.tsx                   # S01 Marquee + Floating Nav (Transparent -> White Pill)
        ├── MenuDrawer.tsx               # Full-height frosted glassmorphic drill-down menu
        ├── SearchPanel.tsx              # S01 Top drop-down search sheet (translateY -128px -> 0)
        ├── BagDrawer.tsx                # Slide-over cart (520px) with shipping meter & checkout
        ├── DiscoverDrawer.tsx           # Megaphone tabbed drawer (New & Now, Offers, More)
        ├── PromoTabCard.tsx             # Persistent vertical left tab ("Get 15% off") + modal card
        ├── StoriesViewerModal.tsx       # Full-screen vertical Instagram-style story player
        ├── QuickViewModal.tsx           # In-place modal PDP preview with swatches & size chips
        ├── FlyToCartGhost.tsx           # "+1" physical arc animation from button to header BAG
        │
        ├── # Standalone Pages & Studio Dashboard
        ├── ProductDetailPage.tsx        # Dedicated standalone PDP view with contiguous buy module
        ├── AgentSamAssistant.tsx        # Built-in developer dashboard, tips carousel & loading state
        │
        ├── # Master Scroll Sections (Acts I – VII)
        ├── HeroCurtain.tsx              # S02 Sticky curtain hero with pulsating garment hotspots
        ├── WardrobeGallery.tsx          # S03 5-tile 3:4 cut-out category row
        ├── PromoGrid.tsx                # S04 Dark 4-up promo tiles with red scribble SVG (desktop)
        ├── StoriesRings.tsx             # S05 "The Selected" heading + S06 5 circular story rings
        ├── CollectionCarousel.tsx       # S07 Tabbed product carousel with passive touch-action
        ├── FullscreenEditorial.tsx      # S08 Timeless style + scroll-linked word-by-word reveal
        ├── SplitMediaDiptych.tsx        # S09 Discover Cotton | Discover Leather diptych
        ├── DressBlurb.tsx               # S10 Black leather dress quote & cascade link
        ├── ShopTheLookbook.tsx          # S11 Interactive shoppable lookbook with hotspots
        ├── BundleBuilder.tsx            # S12 Better Together pinned sticky summary & 20% discount
        ├── FeaturedPDP.tsx              # S13 3-column PDP with dual pinned sticky rails
        ├── TickerMarquee.tsx            # S14 Giant ticker marquee (white caps + icons)
        ├── RefinedBasicsSplit.tsx       # S15 Pinned media column + 2-col product grid
        ├── BrandFilm.tsx                # S16 Full-bleed brand film reel & video launcher
        ├── TeaserReserve.tsx            # S17 "Something new is almost ready" 46.8px display & VIP waitlist
        ├── LogoMarquee.tsx              # S18 Press logo infinite loop (Vogue, GQ, etc.)
        ├── BeforeAfterSlider.tsx        # S19 The Rhythm of Contrast with touch-action pointer capture
        ├── TestimonialsSection.tsx      # S20 5-star review carousel with reviewer & product tabs
        ├── BlogPostsStack.tsx           # S21 Sticky card-deck stacking blog posts
        ├── NewsletterBand.tsx           # S22 "The Edit, In Your Inbox" 38.4px regular heading
        ├── SocialGrid.tsx               # S23 @RADIAN 3x2 full bleed Instagram square grid
        ├── FAQAndTrust.tsx              # S24 FAQ accordions + S25 Trust strip
        └── Footer.tsx                   # S26 Dark luxury footer + S27 bottom panel
```

---

## 🏗️ Component Map & State Flow

```text
               ┌────────────────────────────────────────────────────────┐
               │                      CartProvider                      │
               │   (Cart, Drawers, Currency, PDP Route, Fly Animation)   │
               └──────────────────────────┬─────────────────────────────┘
                                          │
        ┌─────────────────────────────────┼────────────────────────────────┐
        ▼                                 ▼                                ▼
┌───────────────┐               ┌───────────────────┐            ┌───────────────────┐
│    Header     │               │   App (Router)    │            │     Overlays      │
│  - S01 Marquee│               │                   │            │  - MenuDrawer     │
│  - Pill Nav   │               └─────────┬─────────┘            │  - BagDrawer      │
│  - Bag Counter│                         │                      │  - SearchPanel    │
└───────────────┘            ┌────────────┴───────────┐          │  - DiscoverDrawer │
                             ▼                        ▼          │  - PromoTabCard   │
                   ┌───────────────────┐    ┌──────────────────┐ │  - StoriesViewer  │
                   │ Standalone PDP    │    │ Master Scroll    │ │  - QuickViewModal │
                   │ ProductDetailPage │    │ (27 Sections     │ │  - FlyToCartGhost │
                   └───────────────────┘    │  Acts I - VII)   │ └───────────────────┘
                                            └──────────────────┘
```

---

## 📋 Work-In-Progress (WIP) Tracking & Milestone Status

| Milestone / Feature Area | Target Spec | Implementation Status | Notes |
|:---|:---|:---|:---|
| **Master Scroll Map (S01–S27)** | Exact heights & act structure | ✅ Completed | 27 sections matching teardown wireframes |
| **Sticky Curtain Hero (S02)** | Scales 1 $\to$ 0.85 & blurs on scroll | ✅ Completed | Fully responsive with touch hotspots |
| **Dual Pinned Rails PDP (S13)** | Dual sticky rails at `top: 80px` | ✅ Completed | Left rail options, right rail accordions |
| **Bundle Builder (S12)** | Pinned sticky card, 20% calculation | ✅ Completed | Interactive checkboxes with live summary |
| **Full-Height Frosted Menu** | `inset-y-0`, `backdrop-blur-2xl` | ✅ Completed | Full screen height, glassmorphic styling |
| **Standalone PDP (`ProductDetailPage`)** | Dedicated individual product pages | ✅ Completed | Cross-sell rail, model specs, size guide |
| **Framer Motion Page Transitions** | Editorial glide & blur-in curve | ✅ Completed | `AnimatePresence mode="wait"`, easeOutQuint |
| **AgentSam Assistant Dashboard** | Interactive loading tips carousel | ✅ Completed | 3D-styled cards, prompt launcher, file status |
| **Touch & Drag Enhancements** | 120fps native drag feel | ✅ Completed | Pointer capture on slider, `touch-action: pan-x` |
| **Mobile Header Optimization** | Zero overlap on 375–390px screens | ✅ Completed | Balanced brand mark and compact actions |
| **Documentation & Repo Map** | README & FILEMAP | ✅ Completed | Full teardown reference & guide |

---

## 🔮 Next Roadmap Enhancements (Ready for Prompting in AgentSam)
1. **Dynamic 3D Fitting Avatar**: Integrate Three.js / WebGL model with real-time silhouette drape simulation.
2. **Audio Atelier Concierge**: Connect with the Gemini Live API for real-time voice-driven luxury styling advisory.
3. **Cryptographic Member Drop Vault**: Exclusive 6-digit passcode gate for 50 numbered archival pieces.
4. **Geolocation Auto-Currency Switcher**: IP-grounded currency selection with pre-calculated import clearances.
