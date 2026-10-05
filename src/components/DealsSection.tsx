import React, { useState } from 'react';
import { Flame, Check, Sparkles, ShoppingBag, ArrowRight } from 'lucide-react';
import { POPULAR_DEALS } from '../data/restaurantData';
import { Deal } from '../types/restaurant';

interface DealsSectionProps {
  onAddDealToCart: (deal: Deal) => void;
  onInstantWhatsAppDeal: (deal: Deal) => void;
}

export const DealsSection: React.FC<DealsSectionProps> = ({
  onAddDealToCart,
  onInstantWhatsAppDeal,
}) => {
  const [addedDealIds, setAddedDealIds] = useState<{ [key: string]: boolean }>({});

  const handleAdd = (deal: Deal) => {
    onAddDealToCart(deal);
    setAddedDealIds((prev) => ({ ...prev, [deal.id]: true }));
    setTimeout(() => {
      setAddedDealIds((prev) => ({ ...prev, [deal.id]: false }));
    }, 1500);
  };

  return (
    <section id="deals" className="py-10 sm:py-20 bg-[#090807] relative overflow-hidden">
      {/* Visual glowing backdrop */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-red-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-6 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-red-600/15 border border-red-500/30 text-red-400 text-[10px] sm:text-xs font-black tracking-widest uppercase">
            <Flame className="w-3.5 h-3.5 fill-red-500" />
            <span>Exclusive Combos</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white font-brand">
            Popular Deals
          </h2>
          <p className="text-xs sm:text-base text-stone-300">
            Unbeatable hunger-busting combinations packed with your favorite fast food items, BBQ cuts, and chilled drinks.
          </p>
        </div>

        {/* Prominent Deal Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 lg:gap-8">
          {POPULAR_DEALS.map((deal) => {
            const isAdded = addedDealIds[deal.id];
            return (
              <div
                key={deal.id}
                className="group relative rounded-2xl sm:rounded-3xl bg-stone-900/95 border-2 border-amber-500/30 hover:border-amber-400 p-4 sm:p-7 shadow-xl hover:shadow-2xl hover:shadow-red-950/60 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Badge Strip */}
                <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
                  <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-stone-400">
                    {deal.code}
                  </span>
                  <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-black tracking-wider text-white uppercase bg-gradient-to-r from-red-600 to-amber-600 shadow-md">
                    {deal.badge}
                  </span>
                </div>

                {/* Deal Image Preview */}
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-lg sm:rounded-xl overflow-hidden mb-3 sm:mb-5 bg-stone-950 border border-stone-800">
                  <img
                    src={deal.image}
                    alt={deal.title}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2.5 sm:left-3 text-[11px] sm:text-xs font-semibold text-amber-300 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-yellow-400" />
                    <span>Includes {deal.drink}</span>
                  </div>
                </div>

                {/* Deal Title & Servings */}
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 text-left">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-white font-brand group-hover:text-amber-300 transition-colors">
                      {deal.title}
                    </h3>
                  </div>
                  
                  {/* Items List */}
                  <div className="space-y-1.5 py-2 sm:py-3 border-y border-stone-800">
                    <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-stone-400 font-bold">Included in Deal:</p>
                    <ul className="space-y-1 sm:space-y-1.5">
                      {deal.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-stone-200 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                          <span className="line-clamp-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Pricing & CTA */}
                <div className="space-y-3 sm:space-y-4 pt-1 sm:pt-2">
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-[9px] sm:text-[10px] text-stone-400 block font-medium">Deal Price</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl sm:text-2xl lg:text-3xl font-black text-amber-400 tabular-nums">
                          Rs. {deal.price}
                        </span>
                        {deal.originalPrice && (
                          <span className="text-xs text-stone-500 line-through tabular-nums">
                            Rs. {deal.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                    {deal.serves && (
                      <span className="text-[10px] sm:text-[11px] text-stone-400 bg-stone-950 px-2 py-0.5 sm:py-1 rounded border border-stone-800 font-mono">
                        {deal.serves}
                      </span>
                    )}
                  </div>

                  {/* Actions: Add to Cart + Instant WhatsApp */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                    <button
                      onClick={() => handleAdd(deal)}
                      className={`w-full py-2.5 sm:py-3 px-2 sm:px-3 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-1 sm:gap-1.5 cursor-pointer shadow-md ${
                        isAdded
                          ? 'bg-emerald-600 text-white'
                          : 'bg-stone-800 hover:bg-stone-700 text-stone-200 hover:text-white border border-stone-700'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5 text-amber-400" />
                          <span>+ Cart</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => onInstantWhatsAppDeal(deal)}
                      className="w-full py-2.5 sm:py-3 px-2 sm:px-3 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white flex items-center justify-center gap-1 sm:gap-1.5 cursor-pointer shadow-md shadow-red-950/60 transition-all"
                    >
                      <span>Order</span>
                      <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
