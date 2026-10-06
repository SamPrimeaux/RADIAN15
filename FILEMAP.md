# Repository Filemap & Architecture

## 📂 Complete File Tree Map

```text
/
├── index.html                           # HTML entry point with luxury typography & meta tags
├── metadata.json                        # AI Studio applet capabilities and naming
├── package.json                         # Dependencies & project scripts
├── tsconfig.json                        # TypeScript strict compiler configuration
├── vite.config.ts                       # Vite 8 config with Tailwind v4 & host allowlisting
├── README.md                            # Complete multi-page storefront & Brand Studio documentation
├── FILEMAP.md                           # This file: component map, module roles & WIP status
│
└── src/
    ├── main.tsx                         # React 19 root bootstrap
    ├── App.tsx                          # Synchronized page router with Framer Motion transitions
    ├── index.css                        # Custom easing tokens, marquees, keyframes & touch rules
    │
    ├── types/
    │   └── index.ts                     # TypeScript data interfaces (PageRoute, Product, EpistemicState, BrandWorkspace)
    │
    ├── data/
    │   ├── catalog.ts                   # Products, stories, reviews, blogs, faqs datasets
    │   └── brandStreamData.ts           # Brand workspaces (RADIAN, FNF, CoPro), recovery receipts & cards
    │
    ├── context/
    │   └── CartContext.tsx              # Central state: multi-page routing, cart, overlays, currency & fly ghost
    │
    ├── assets/
    │   └── images/                      # High-res campaign & studio photography assets
    │
    └── components/                      # Modular UI components
        │
        ├── # Dedicated Multi-Page Views (src/components/pages/)
        ├── pages/CollectionsPage.tsx    # Faceted catalog with category filters, grid toggles & sorting
        ├── pages/LookbookPage.tsx       # Shoppable campaign lookbook with interactive hotspot pins
        ├── pages/MaisonPage.tsx         # Atelier heritage, material craft slider & flagship bookings
        ├── pages/ReserveVaultPage.tsx   # Limited-batch numbered drop vault & VIP pass generator
        ├── pages/BrandStreamPage.tsx    # AgentSam Brand Stream, recovery simulator & inspector drawer
        │
        ├── # Standalone PDP & Studio Dashboard
        ├── ProductDetailPage.tsx        # Dedicated standalone PDP view with contiguous buy module
        ├── AgentSamAssistant.tsx        # Developer dashboard, multi-page fast router & prompt carousel
        │
        ├── # Global Navigation & Overlays
        ├── Header.tsx                   # Universal floating pill navigation with active route tabs
        ├── Footer.tsx                   # Dark luxury footer with multi-page directory & currency selector
        ├── MenuDrawer.tsx               # Full-height frosted glassmorphic drill-down navigation
        ├── SearchPanel.tsx              # Top drop-down search sheet with predictive search
        ├── BagDrawer.tsx                # Slide-over bag (520px) with shipping meter & checkout
        ├── DiscoverDrawer.tsx           # Megaphone tabbed drawer (New & Now, Offers, More)
        ├── PromoTabCard.tsx             # Persistent vertical left tab ("Get 15% off") + modal card
        ├── StoriesViewerModal.tsx       # Full-screen vertical Instagram-style story player
        ├── QuickViewModal.tsx           # In-place modal PDP preview with swatches & size chips
        ├── FlyToCartGhost.tsx           # "+1" physical arc animation from button to header BAG
        │
        ├── # Master Scroll Flagship Sections (Acts I – VII)
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
        ├── TeaserReserve.tsx            # S17 "Something new is almost ready" display & VIP waitlist
        ├── LogoMarquee.tsx              # S18 Press logo infinite loop (Vogue, GQ, etc.)
        ├── BeforeAfterSlider.tsx        # S19 The Rhythm of Contrast with touch-action pointer capture
        ├── TestimonialsSection.tsx      # S20 5-star review carousel with reviewer & product tabs
        ├── BlogPostsStack.tsx           # S21 Sticky card-deck stacking blog posts
        ├── NewsletterBand.tsx           # S22 "The Edit, In Your Inbox" regular heading
        ├── SocialGrid.tsx               # S23 @RADIAN 3x2 full bleed Instagram square grid
        └── FAQAndTrust.tsx              # S24 FAQ accordions + S25 Trust strip
```
