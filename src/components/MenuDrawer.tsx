import { useEditorialBrand } from '../portable/EditorialHost';
import React, { useState } from 'react';
import { ChevronRight, ArrowLeft, X, Globe, User, Sparkles, ExternalLink } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useEditorialData } from '../portable/EditorialHost';

export const MenuDrawer: React.FC = () => {
  const brand = useEditorialBrand();
  const { CATEGORIES_WARDROBE, PRODUCTS } = useEditorialData();
  const {
    isMenuOpen,
    setIsMenuOpen,
    currency,
    setCurrency,
    setActiveProductPage
  } = useCart();
  const [currentPanel, setCurrentPanel] = useState<'root' | 'shop' | 'material'>('root');

  if (!isMenuOpen) return null;

  const handleOpenProduct = (productId: string) => {
    const prod = PRODUCTS.find(p => p.id === productId);
    if (prod) {
      setActiveProductPage(prod);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Dimmed & blurred backdrop */}
      <div
        onClick={() => setIsMenuOpen(false)}
        className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300"
      />

      {/* FULL SCREEN HEIGHT Glassmorphic / Frosted Left Sheet Drawer */}
      <div
        className="absolute inset-y-0 left-0 w-full max-w-[640px] h-full bg-[#0a0a0a]/85 backdrop-blur-2xl text-white border-r border-white/15 shadow-[0_0_60px_rgba(0,0,0,0.9)] flex flex-col justify-between overflow-hidden animate-[themeReveal_0.4s_cubic-bezier(0.22,1,0.36,1)] z-10"
      >
        {/* Top Header inside drawer: Full brand lockup and close X */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-6 border-b border-white/10 bg-black/30 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="text-[#8b181b] text-xs">◆</span>
            <span className="font-semibold tracking-[0.3em] uppercase text-sm sm:text-base">{brand.name}</span>
            <span className="text-[10px] tracking-[0.2em] text-[#e2a8aa] uppercase font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10">
              AW26 DIRECTORY
            </span>
          </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-white/80 hover:text-white transition-all cursor-pointer"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Navigation Body with Push Drill-down */}
        <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-6 space-y-6">
          {currentPanel === 'root' && (
            <div className="space-y-6">
              {/* Primary Drill-down links */}
              <div className="space-y-3 text-[19px] sm:text-[21px] font-light tracking-[0.08em] uppercase">
                <button
                  onClick={() => setCurrentPanel('shop')}
                  className="w-full flex items-center justify-between py-2 text-left hover:text-[#e2a8aa] transition-colors group cursor-pointer"
                >
                  <span className="group-hover:translate-x-2 transition-transform duration-300">
                    SHOP BY SILHOUETTE
                  </span>
                  <ChevronRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </button>

                <button
                  onClick={() => setCurrentPanel('material')}
                  className="w-full flex items-center justify-between py-2 text-left hover:text-[#e2a8aa] transition-colors group cursor-pointer"
                >
                  <span className="group-hover:translate-x-2 transition-transform duration-300">
                    MATERIALS & CRAFT
                  </span>
                  <ChevronRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </button>

                <a
                  href="#collection-tab"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 hover:text-[#e2a8aa] transition-colors hover:translate-x-2 duration-300"
                >
                  ALL COLLECTIONS
                </a>
                <a
                  href="#bundle"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 hover:text-[#e2a8aa] transition-colors hover:translate-x-2 duration-300"
                >
                  BETTER TOGETHER BUNDLES
                </a>
                <button
                  onClick={() => handleOpenProduct('leather-tee')}
                  className="w-full text-left py-2 hover:text-[#e2a8aa] transition-colors hover:translate-x-2 duration-300 flex items-center justify-between group cursor-pointer"
                >
                  <span>FEATURED CALFSKIN TEE (PDP)</span>
                  <ExternalLink className="w-4 h-4 opacity-40 group-hover:opacity-100" />
                </button>
                <button
                  onClick={() => handleOpenProduct('sable-blazer')}
                  className="w-full text-left py-2 hover:text-[#e2a8aa] transition-colors hover:translate-x-2 duration-300 flex items-center justify-between group cursor-pointer"
                >
                  <span>SABLE WOOL BLAZER (PDP)</span>
                  <ExternalLink className="w-4 h-4 opacity-40 group-hover:opacity-100" />
                </button>
              </div>

              <div className="h-[1px] bg-white/10 my-6" />

              {/* "Find Your Inspiration" Horizontal Card Rail */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-white/50 font-semibold">
                    FIND YOUR INSPIRATION
                  </div>
                  <span className="text-[10px] text-[#e2a8aa] tracking-widest uppercase">5 CURATIONS</span>
                </div>
                <div className="flex gap-4 overflow-x-auto pb-4 snap-x no-scrollbar">
                  {CATEGORIES_WARDROBE.map(cat => (
                    <a
                      key={cat.id}
                      href={cat.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="group shrink-0 w-[180px] snap-start bg-white/5 rounded-sm overflow-hidden border border-white/10 hover:border-white/30 backdrop-blur-sm transition-all"
                    >
                      <div className="aspect-[3/4] relative overflow-hidden bg-neutral-900">
                        <img
                          src={cat.image}
                          alt={cat.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        <div className="absolute bottom-2.5 left-2.5 right-2.5">
                          <div className="text-[12px] font-semibold tracking-wider uppercase text-white">
                            {cat.name}
                          </div>
                          <div className="text-[10px] text-white/60">{cat.count}</div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Sub-Panel: Shop Categories */}
          {currentPanel === 'shop' && (
            <div className="space-y-6">
              <button
                onClick={() => setCurrentPanel('root')}
                className="flex items-center gap-2 text-[12px] uppercase tracking-widest text-[#e2a8aa] font-medium hover:text-white transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Directory</span>
              </button>

              <div className="space-y-7 pt-2">
                <div>
                  <span className="text-[10px] tracking-[0.25em] text-white/40 uppercase font-semibold block mb-2.5">
                    BLAZERS & TAILORING
                  </span>
                  <div className="space-y-2.5 pl-2 text-[15px]">
                    <button
                      onClick={() => handleOpenProduct('sable-blazer')}
                      className="block text-left text-white/90 hover:text-[#e2a8aa] transition-colors cursor-pointer"
                    >
                      Sable Wool Blazer (Dedicated Page) →
                    </button>
                    <a href="#collection-tab" onClick={() => setIsMenuOpen(false)} className="block text-white/70 hover:text-white transition-colors">
                      Slouchy Double-Pleat Culottes
                    </a>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] tracking-[0.25em] text-white/40 uppercase font-semibold block mb-2.5">
                    LEATHER & OUTERWEAR
                  </span>
                  <div className="space-y-2.5 pl-2 text-[15px]">
                    <button
                      onClick={() => handleOpenProduct('leather-tee')}
                      className="block text-left text-white/90 hover:text-[#e2a8aa] transition-colors cursor-pointer"
                    >
                      Architectural Calfskin Tee (Dedicated Page) →
                    </button>
                    <button
                      onClick={() => handleOpenProduct('kuro-jacket')}
                      className="block text-left text-white/90 hover:text-[#e2a8aa] transition-colors cursor-pointer"
                    >
                      Kuro Washed Biker Jacket (Dedicated Page) →
                    </button>
                    <button
                      onClick={() => handleOpenProduct('sharp-leather-trench')}
                      className="block text-left text-white/90 hover:text-[#e2a8aa] transition-colors cursor-pointer"
                    >
                      Sharp Leather Trench (Dedicated Page) →
                    </button>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] tracking-[0.25em] text-white/40 uppercase font-semibold block mb-2.5">
                    TOPS & SECOND SKINS
                  </span>
                  <div className="space-y-2.5 pl-2 text-[15px]">
                    <button
                      onClick={() => handleOpenProduct('calm-pullover')}
                      className="block text-left text-white/90 hover:text-[#e2a8aa] transition-colors cursor-pointer"
                    >
                      Calm Cashmere Pullover →
                    </button>
                    <button
                      onClick={() => handleOpenProduct('merino-turtleneck')}
                      className="block text-left text-white/90 hover:text-[#e2a8aa] transition-colors cursor-pointer"
                    >
                      Merino Second-Skin Turtleneck →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Sub-Panel: Materials */}
          {currentPanel === 'material' && (
            <div className="space-y-6">
              <button
                onClick={() => setCurrentPanel('root')}
                className="flex items-center gap-2 text-[12px] uppercase tracking-widest text-[#e2a8aa] font-medium hover:text-white transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Directory</span>
              </button>

              <div className="space-y-4 pt-2 text-white/80 text-[13px] leading-relaxed">
                <div className="p-4 bg-white/5 rounded-sm border border-white/10 backdrop-blur-sm">
                  <div className="text-[13px] font-semibold text-white tracking-wider uppercase mb-1">
                    Vegetable-Tanned European Calfskin
                  </div>
                  <p className="text-white/60 text-xs leading-relaxed">
                    Drum-tumbled with organic chestnut and mimosa tannins in Florence. Develops a personal patina that deepens with every wear.
                  </p>
                </div>
                <div className="p-4 bg-white/5 rounded-sm border border-white/10 backdrop-blur-sm">
                  <div className="text-[13px] font-semibold text-white tracking-wider uppercase mb-1">
                    380gsm English Wool Crepe
                  </div>
                  <p className="text-white/60 text-xs leading-relaxed">
                    Woven in Yorkshire with high-twist yarn for fluid drape, natural thermal memory, and structural crispness.
                  </p>
                </div>
                <div className="p-4 bg-white/5 rounded-sm border border-white/10 backdrop-blur-sm">
                  <div className="text-[13px] font-semibold text-white tracking-wider uppercase mb-1">
                    16-Gauge Australian Merino
                  </div>
                  <p className="text-white/60 text-xs leading-relaxed">
                    Seamless circular knit construction engineered to contour the body with breathable second-skin comfort.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer actions pinned at bottom of full-screen drawer */}
        <div className="px-6 sm:px-8 py-5 border-t border-white/10 bg-black/40 backdrop-blur-md flex items-center justify-between text-[12px] uppercase tracking-wider">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-white/50" />
            <select
              value={currency}
              onChange={e => setCurrency(e.target.value)}
              className="bg-transparent text-white focus:outline-none cursor-pointer"
            >
              <option value="USD" className="bg-neutral-900 text-white">USD ($)</option>
              <option value="EUR" className="bg-neutral-900 text-white">EUR (€)</option>
              <option value="GBP" className="bg-neutral-900 text-white">GBP (£)</option>
              <option value="JPY" className="bg-neutral-900 text-white">JPY (¥)</option>
            </select>
          </div>

          <button
            onClick={() => {
              setIsMenuOpen(false);
              alert('Customer Account Portal: VIP members can access tailoring preferences and bespoke orders.');
            }}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors font-medium cursor-pointer"
          >
            <User className="w-4 h-4" />
            <span>SIGN IN / ACCOUNT</span>
          </button>
        </div>
      </div>
    </div>
  );
};
