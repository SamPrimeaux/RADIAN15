import React, { useState, useEffect } from 'react';
import { Search, Megaphone, ShoppingBag, Globe, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Header: React.FC = () => {
  const {
    cartCount,
    setIsMenuOpen,
    isMenuOpen,
    setIsBagOpen,
    setIsSearchOpen,
    setIsDiscoverOpen,
    isBagPopping,
    currency,
    setCurrency,
    isAgentSamOpen,
    setIsAgentSamOpen,
    activeProductPage,
    setActiveProductPage
  } = useCart();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* S01: Announcement Marquee Bar (35px) */}
      <div className="relative z-40 h-[35px] bg-[#0b0b0b] text-[#e0e0e0] border-b border-white/10 flex items-center overflow-hidden select-none text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-medium">
        <div className="animate-marquee flex items-center whitespace-nowrap">
          <span className="mx-4 sm:mx-6 flex items-center gap-2">
            <span>Free express shipping on orders over $150</span>
            <span className="text-[#8b181b]">✦</span>
          </span>
          <span className="mx-4 sm:mx-6 flex items-center gap-2">
            <span>Members save 20% on their first order</span>
            <span className="text-[#8b181b]">✦</span>
          </span>
          <span className="mx-4 sm:mx-6 flex items-center gap-2">
            <span>Autumn / Winter 26 runway archive now live</span>
            <span className="text-[#8b181b]">✦</span>
          </span>
          <span className="mx-4 sm:mx-6 flex items-center gap-2">
            <span>Complimentary signature gift wrapping on all orders</span>
            <span className="text-[#8b181b]">✦</span>
          </span>
          {/* Duplicate track for seamless infinite marquee loop */}
          <span className="mx-4 sm:mx-6 flex items-center gap-2">
            <span>Free express shipping on orders over $150</span>
            <span className="text-[#8b181b]">✦</span>
          </span>
          <span className="mx-4 sm:mx-6 flex items-center gap-2">
            <span>Members save 20% on their first order</span>
            <span className="text-[#8b181b]">✦</span>
          </span>
          <span className="mx-4 sm:mx-6 flex items-center gap-2">
            <span>Autumn / Winter 26 runway archive now live</span>
            <span className="text-[#8b181b]">✦</span>
          </span>
          <span className="mx-4 sm:mx-6 flex items-center gap-2">
            <span>Complimentary signature gift wrapping on all orders</span>
            <span className="text-[#8b181b]">✦</span>
          </span>
        </div>
      </div>

      {/* Floating Header */}
      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isScrolled
            ? 'top-2 sm:top-4 px-3 sm:px-4 flex justify-center pointer-events-none'
            : 'top-[35px] px-4 sm:px-8 md:px-10 h-14 bg-gradient-to-b from-black/85 via-black/50 to-transparent'
        }`}
      >
        <div
          className={`pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isScrolled
              ? 'w-full max-w-[1046px] h-12 bg-white/95 text-[#0b0b0b] rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.18)] backdrop-blur-md px-4 sm:px-6 flex items-center justify-between border border-black/5'
              : 'w-full h-full flex items-center justify-between text-white'
          }`}
        >
          {/* Left Zone: Hamburger & Desktop Navigation */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="group relative flex items-center justify-center w-8 h-8 rounded-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-current cursor-pointer"
              aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              <div className="w-5 h-3.5 flex flex-col justify-between items-start">
                <span
                  className={`h-[1.5px] rounded-full transition-all duration-300 ${
                    isScrolled ? 'bg-[#0b0b0b]' : 'bg-white'
                  } ${isMenuOpen ? 'w-5 translate-y-[5.5px] rotate-45' : 'w-5'}`}
                />
                <span
                  className={`h-[1.5px] rounded-full transition-all duration-300 ${
                    isScrolled ? 'bg-[#0b0b0b]' : 'bg-white'
                  } ${isMenuOpen ? 'opacity-0' : 'w-3.5 group-hover:w-5'}`}
                />
                <span
                  className={`h-[1.5px] rounded-full transition-all duration-300 ${
                    isScrolled ? 'bg-[#0b0b0b]' : 'bg-white'
                  } ${isMenuOpen ? 'w-5 -translate-y-[6.5px] -rotate-45' : 'w-5'}`}
                />
              </div>
            </button>

            {/* Desktop Rolling Links */}
            <nav className="hidden md:flex items-center gap-7 text-[12px] uppercase tracking-[0.16em] font-medium">
              <a
                href="#shop"
                onClick={() => activeProductPage && setActiveProductPage(null)}
                className="group roll-text"
              >
                <span>SHOP</span>
                <span>SHOP</span>
              </a>
              <a
                href="#wardrobe"
                onClick={() => activeProductPage && setActiveProductPage(null)}
                className="group roll-text"
              >
                <span>WARDROBE</span>
                <span>WARDROBE</span>
              </a>
              <a
                href="#bundle"
                onClick={() => activeProductPage && setActiveProductPage(null)}
                className="group roll-text"
              >
                <span>BUNDLES</span>
                <span>BUNDLES</span>
              </a>
              <a
                href="#editorial"
                onClick={() => activeProductPage && setActiveProductPage(null)}
                className="group roll-text"
              >
                <span>EDITORIAL</span>
                <span>EDITORIAL</span>
              </a>
            </nav>
          </div>

          {/* Center Zone: Brand Wordmark (Clean centering with zero overlap) */}
          <div className="flex items-center justify-center">
            <button
              onClick={() => setActiveProductPage(null)}
              className={`font-semibold tracking-[0.25em] sm:tracking-[0.3em] uppercase transition-colors flex items-center gap-1 cursor-pointer ${
                isScrolled ? 'text-[#0b0b0b] text-[14px] sm:text-[16px]' : 'text-white text-[14px] sm:text-[17px]'
              }`}
            >
              <span className="text-[#8b181b] text-xs">◆</span>
              <span>RADIAN</span>
              <span className="text-[#8b181b] text-xs">◆</span>
            </button>
          </div>

          {/* Right Zone: Controls (Search, Discover, Bag, AgentSam) */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            {/* Currency selector (Desktop only) */}
            <div className="relative hidden lg:flex items-center gap-1 text-[11px] font-medium tracking-wider">
              <Globe className="w-3.5 h-3.5 opacity-60" />
              <select
                value={currency}
                onChange={e => setCurrency(e.target.value)}
                className="bg-transparent appearance-none cursor-pointer pr-2 focus:outline-none uppercase"
              >
                <option value="USD" className="text-black bg-white">USD ($)</option>
                <option value="EUR" className="text-black bg-white">EUR (€)</option>
                <option value="GBP" className="text-black bg-white">GBP (£)</option>
                <option value="JPY" className="text-black bg-white">JPY (¥)</option>
              </select>
            </div>

            {/* Search Dropdown trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-1.5 hover:opacity-75 transition-opacity cursor-pointer"
              aria-label="Open search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Discover Drawer trigger */}
            <button
              onClick={() => setIsDiscoverOpen(true)}
              className="p-1.5 hover:opacity-75 transition-opacity relative cursor-pointer"
              aria-label="Open discover news"
            >
              <Megaphone className="w-4 h-4" />
              <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-[#8b181b] rounded-full" />
            </button>

            {/* Bag Drawer trigger with Counter Pop */}
            <button
              id="header-bag-btn"
              onClick={() => setIsBagOpen(true)}
              className={`relative flex items-center gap-1 py-1 px-2.5 sm:py-1.5 sm:px-3 rounded-full text-[11px] sm:text-[12px] font-medium tracking-wider transition-all cursor-pointer ${
                isScrolled
                  ? 'bg-black text-white hover:bg-neutral-800'
                  : 'bg-white/15 backdrop-blur-sm hover:bg-white/25 text-white'
              } ${isBagPopping ? 'scale-110 ring-2 ring-[#8b181b]' : 'scale-100'}`}
              aria-label="Shopping bag"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span className="hidden xs:inline uppercase text-[10px] sm:text-[11px]">BAG</span>
              <span className="text-[11px] font-semibold tabular-nums">
                ({cartCount})
              </span>
            </button>

            {/* Studio / AgentSam toggle icon for quick dashboard launch */}
            <button
              onClick={() => setIsAgentSamOpen(!isAgentSamOpen)}
              className={`p-1.5 rounded-full transition-all cursor-pointer ${
                isAgentSamOpen
                  ? 'bg-[#8b181b] text-white'
                  : 'text-white/60 hover:text-white hover:bg-white/10'
              }`}
              title="AgentSam Studio Dashboard"
              aria-label="AgentSam Assistant"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#e2a8aa]" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
