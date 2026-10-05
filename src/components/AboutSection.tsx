import React from 'react';
import { HeartHandshake, Award, Sparkles, UtensilsCrossed } from 'lucide-react';
import { NagoriMarviLogo } from './NagoriMarviLogo';
import { IMAGES } from '../data/restaurantData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-10 sm:py-24 bg-[#0a0908] relative overflow-hidden">
      {/* Decorative backdrop glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-red-950/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Visual Composition with Logo & Food Images */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Main Image Frame */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-amber-500/30 shadow-xl bg-stone-950">
                <img
                  src={IMAGES.bbq}
                  alt="Sizzling Charcoal BBQ at Nagori Marvi"
                  loading="lazy"
                  className="w-full h-[220px] sm:h-[420px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                
                {/* Overlay Quote */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 text-left">
                  <p className="text-amber-400 font-brand text-sm sm:text-lg font-bold">
                    Karachi's True Fast Food Tradition
                  </p>
                  <p className="text-[10px] sm:text-xs text-stone-300 mt-0.5 sm:mt-1">
                    Authentic recipes, fresh daily prep, and smoky char.
                  </p>
                </div>
              </div>

              {/* Floating Second Food Image (hidden on very small mobile) */}
              <div className="hidden sm:block absolute -bottom-8 -right-6 w-52 h-44 rounded-2xl overflow-hidden border-2 border-stone-800 shadow-2xl">
                <img
                  src={IMAGES.pizza}
                  alt="Stone baked cheese pizza"
                  loading="lazy"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-2 left-3 text-[11px] font-bold text-white">
                  Stone Baked Crusts
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Story & Principles */}
          <div className="lg:col-span-6 space-y-3 sm:space-y-6 text-left">
            <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-amber-400 uppercase tracking-widest">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>About Nagori Marvi</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white font-brand leading-tight">
              Taste That Brings People Together
            </h2>

            <p className="text-xs sm:text-base lg:text-lg text-stone-300 leading-relaxed">
              Nagori Marvi Fast Foods serves a wide variety of fast food, BBQ, burgers, pizzas, rolls and family deals. Our goal is simple — great taste, satisfying portions and food made for every craving.
            </p>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              Whether you are planning a late-night feast with friends, a family dinner combo, or a quick crispy zinger on the go, our kitchen is fired up every evening to deliver the ultimate culinary satisfaction to your table.
            </p>

            {/* 2 Pillars: 2 columns even on mobile */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-4 pt-1 sm:pt-4">
              <div className="p-2.5 sm:p-4 rounded-xl bg-stone-900/70 border border-stone-800">
                <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                  <UtensilsCrossed className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 shrink-0" />
                  <h4 className="text-xs sm:text-sm font-bold text-white">Fresh Cuts</h4>
                </div>
                <p className="text-[10px] sm:text-xs text-stone-400">
                  Daily sourced chicken and prime meats with hygienic prep.
                </p>
              </div>

              <div className="p-2.5 sm:p-4 rounded-xl bg-stone-900/70 border border-stone-800">
                <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 shrink-0" />
                  <h4 className="text-xs sm:text-sm font-bold text-white">Value Portions</h4>
                </div>
                <p className="text-[10px] sm:text-xs text-stone-400">
                  Value-packed family deals that satisfy every appetite.
                </p>
              </div>
            </div>

            {/* Address Pill */}
            <div className="pt-1 sm:pt-2 flex items-center gap-2 text-[11px] sm:text-xs text-amber-300/90 font-medium">
              <HeartHandshake className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-400 shrink-0" />
              <span>Sector 17-A, Shah Latif Town, Karachi.</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
