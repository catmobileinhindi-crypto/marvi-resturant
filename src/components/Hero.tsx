import React from 'react';
import { ArrowRight, Flame, Sparkles, Clock, ShieldCheck, MapPin } from 'lucide-react';
import { IMAGES, RESTAURANT_INFO } from '../data/restaurantData';

interface HeroProps {
  onOrderNowClick: () => void;
  onViewMenuClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOrderNowClick, onViewMenuClick }) => {
  return (
    <section id="home" className="relative flex items-center pt-20 pb-8 sm:pt-28 sm:pb-16 overflow-hidden bg-[#0a0908]">
      {/* Dark Ambient Background with Crimson & Amber Fire Embers Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-red-600/15 blur-[100px] sm:blur-[140px] rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-amber-500/10 blur-[90px] sm:blur-[130px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Bold Copy & CTAs (7 columns on desktop) */}
          <div className="lg:col-span-7 space-y-3.5 sm:space-y-6 text-left">
            
            {/* Top Brand Sub-strip */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-stone-900/90 border border-amber-500/30 text-amber-300 text-[10px] sm:text-xs font-semibold tracking-wide shadow-sm">
              <span className="flex h-1.5 w-1.5 rounded-full bg-red-500 animate-ping" />
              <span className="uppercase tracking-wider text-amber-300">
                Karachi's Sizzling BBQ & Fast Food
              </span>
              <span className="text-stone-500">|</span>
              <span className="text-stone-300 flex items-center gap-1">
                <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-400" /> Open till 3 AM
              </span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tight text-white leading-[1.1] font-brand">
                Fresh Food.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-red-500">
                  Bold Flavours.
                </span>
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="text-xs sm:text-base lg:text-lg text-stone-300 max-w-2xl font-normal leading-relaxed">
              From sizzling BBQ and juicy burgers to cheesy pizzas — enjoy your favourites from{' '}
              <strong className="text-amber-300 font-semibold">Nagori Marvi Fast Foods</strong>. Freshly made on order with rapid delivery right to your door.
            </p>

            {/* Food Specialties Quick Badges */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-stone-300 font-medium">
              <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-stone-900/80 border border-stone-800 text-amber-300 flex items-center gap-1">
                <Flame className="w-3 h-3 text-red-500" /> Charcoal BBQ
              </span>
              <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-stone-900/80 border border-stone-800 text-amber-300 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-yellow-400" /> Zingers
              </span>
              <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-stone-900/80 border border-stone-800 text-amber-300 flex items-center gap-1">
                🍕 Stone Pizza
              </span>
              <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-stone-900/80 border border-stone-800 text-amber-300 flex items-center gap-1">
                🌯 Rolls
              </span>
            </div>

            {/* Primary Action Buttons: Compact side-by-side on mobile */}
            <div className="pt-1 sm:pt-2 flex flex-row items-center gap-2.5 sm:gap-4">
              <button
                onClick={onOrderNowClick}
                className="group flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-3 px-4 py-2.5 sm:px-8 sm:py-3.5 text-xs sm:text-base font-extrabold uppercase tracking-wider text-white bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-500 rounded-lg sm:rounded-xl shadow-lg shadow-red-950/60 transition-all cursor-pointer whitespace-nowrap"
              >
                <span>ORDER NOW</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onViewMenuClick}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 sm:px-8 sm:py-3.5 text-xs sm:text-base font-bold uppercase tracking-wider text-stone-200 hover:text-white bg-stone-900/90 hover:bg-stone-800 border border-stone-700 hover:border-amber-500/60 rounded-lg sm:rounded-xl transition-all cursor-pointer whitespace-nowrap"
              >
                <span>VIEW MENU</span>
              </button>
            </div>

            {/* Trust Markers Below CTA */}
            <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-3 sm:gap-6 text-[10px] sm:text-xs text-stone-400 border-t border-stone-900">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% Halal</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>30-45 Min Delivery</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-red-400" />
                <span>Shah Latif Town</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase with Official Logo Badge & Food Spread */}
          <div className="lg:col-span-5 relative flex items-center justify-center mt-2 sm:mt-0">
            
            {/* Main Food Photo Frame with Glow */}
            <div className="relative w-full max-w-sm sm:max-w-lg lg:max-w-none">
              
              {/* Decorative Frame Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-amber-500 to-rose-600 rounded-2xl sm:rounded-3xl blur-md sm:blur-xl opacity-30" />
              
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-stone-950 border border-amber-500/30 shadow-xl">
                
                {/* Hero Food Photography (Pizza, Burger, BBQ, Rolls) */}
                <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={IMAGES.heroSpread}
                    alt="Nagori Marvi Fast Foods Feast"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle Dark Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  
                  {/* Floating Pill on image */}
                  <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 bg-stone-950/85 backdrop-blur-md border border-amber-500/40 rounded-md sm:rounded-lg px-2 py-1 sm:px-3 sm:py-1.5 flex items-center gap-1.5 text-[9px] sm:text-xs font-bold text-amber-300">
                    <Flame className="w-3 h-3 text-red-500 fill-red-500" />
                    <span>Special Chef Selection</span>
                  </div>

                  {/* Price Tag Overlay */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-4 sm:right-4 flex items-end justify-between">
                    <div>
                      <p className="text-[9px] sm:text-[11px] uppercase tracking-wider text-amber-400 font-bold">Today's Highlight</p>
                      <h4 className="text-sm sm:text-lg font-bold text-white leading-tight">Marvi Feast Platter</h4>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] sm:text-xs text-stone-400 line-through">Rs. 1,450</span>
                      <p className="text-sm sm:text-lg font-black text-amber-400 tabular-nums">Rs. 1,199</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Prominent Official Logo Badge Overlap */}
              <div className="absolute -top-4 -right-2 sm:-top-7 sm:-right-6 z-20 flex flex-col items-center">
                <div className="relative">
                  <div className="w-16 h-16 sm:w-28 sm:h-28 rounded-full p-0.5 sm:p-1 bg-gradient-to-tr from-amber-500 via-yellow-400 to-red-600 shadow-xl shadow-red-950/80">
                    <img
                      src={IMAGES.logo}
                      alt="Official Nagori Marvi Fast Foods Crest"
                      className="w-full h-full rounded-full object-cover border border-stone-950"
                    />
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
