import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeftRight, Sparkles } from 'lucide-react';
import { SPLIT_COTTON_IMAGE, SPLIT_LEATHER_IMAGE } from '../data/catalog';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  return (
    <section className="relative z-20 bg-white text-[#111111] py-24 px-6 md:px-12 border-b border-black/10">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left 40% Copy */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#8b181b] font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#8b181b]" />
            <span>INTERACTIVE MATERIAL COMPARISON</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-[0.1em] text-black">
            THE RHYTHM <br />
            OF CONTRAST
          </h2>

          <p className="text-sm text-neutral-600 font-light leading-relaxed">
            Drag the handle to inspect the tactile contrast between dense raw cotton twill and supple drum-dyed Italian lambskin. Two structural extremes coexisting in single ensemble architectures.
          </p>

          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider">
              <span className="w-3 h-3 rounded-full bg-[#1c1f24]" />
              <span>LEFT: Heavy Organic Cotton Twill (380gsm)</span>
            </div>
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider">
              <span className="w-3 h-3 rounded-full bg-[#8b181b]" />
              <span>RIGHT: Full-Grain Vegetable-Tanned Lambskin</span>
            </div>
          </div>
        </div>

        {/* Right 55% Draggable Comparison Slider (781x1041 aspect) */}
        <div className="lg:col-span-7 flex justify-center">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative w-full max-w-[620px] aspect-[3/4] rounded-sm overflow-hidden select-none cursor-ew-resize border border-black/10 shadow-2xl"
          >
            {/* Background Image (Right - Leather) */}
            <img
              src={SPLIT_LEATHER_IMAGE}
              alt="Drum-dyed leather detail"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <span className="absolute top-4 right-4 z-10 px-3 py-1 bg-black/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
              LEATHER ARCHIVE
            </span>

            {/* Foreground Clipped Image (Left - Cotton) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src={SPLIT_COTTON_IMAGE}
                alt="Organic cotton twill detail"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-white/90 backdrop-blur-md text-black text-[10px] font-bold uppercase tracking-widest rounded-full shadow">
                RAW COTTON
              </span>
            </div>

            {/* Draggable Divider Line & Handle */}
            <div
              className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-black shadow-2xl flex items-center justify-center border-2 border-black/20">
                <ArrowLeftRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
