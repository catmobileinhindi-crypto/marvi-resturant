import React, { useState } from 'react';
import { ShoppingBag, Star, Clock, Plus, Check } from 'lucide-react';
import { MenuItem } from '../types/restaurant';
import { FEATURED_MENU } from '../data/restaurantData';

interface FeaturedMenuProps {
  activeCategory: string;
  onSelectCategory: (cat: string) => void;
  onAddToCart: (item: MenuItem) => void;
  onQuickView: (item: MenuItem) => void;
}

export const FeaturedMenu: React.FC<FeaturedMenuProps> = ({
  activeCategory,
  onSelectCategory,
  onAddToCart,
  onQuickView,
}) => {
  const [addedItemIds, setAddedItemIds] = useState<{ [key: string]: boolean }>({});

  const filterTabs = [
    { id: 'all', label: 'All Items' },
    { id: 'burgers', label: 'Burgers' },
    { id: 'bbq', label: 'BBQ & Karahi' },
    { id: 'pizza', label: 'Special Pizza' },
    { id: 'rolls', label: 'Paratha Rolls' },
    { id: 'sandwiches', label: 'Sandwiches' },
  ];

  const filteredItems = FEATURED_MENU.filter((item) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'deals') return true; // Show all when deals clicked or let user see
    if (activeCategory === 'bbq') {
      return item.category === 'bbq';
    }
    return item.category === activeCategory;
  });

  const handleAdd = (item: MenuItem, e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(item);
    setAddedItemIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1500);
  };

  return (
    <section id="menu" className="py-10 sm:py-20 bg-[#0e0c0b] relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-6 sm:mb-10">
          <span className="text-[10px] sm:text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full">
            Taste The Sizzle
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white font-brand">
            Featured Menu
          </h2>
          <p className="text-xs sm:text-base text-stone-300">
            A curated selection of our most loved street-food and culinary specialties. Freshly prepared to order.
          </p>
        </div>

        {/* Category Tabs (Functional segmented control without badge clutter) */}
        <div className="flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 overflow-x-auto pb-3 mb-6 sm:mb-10 no-scrollbar">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onSelectCategory(tab.id)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-sm font-bold rounded-lg sm:rounded-xl whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeCategory === tab.id
                  ? 'bg-gradient-to-r from-red-600 to-rose-700 text-white shadow-lg shadow-red-950/60'
                  : 'bg-stone-900 text-stone-300 hover:text-white hover:bg-stone-800 border border-stone-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid: 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {filteredItems.map((item) => {
            const isAdded = addedItemIds[item.id];
            return (
              <div
                key={item.id}
                onClick={() => onQuickView(item)}
                className="group relative rounded-xl sm:rounded-2xl bg-stone-900/90 border border-stone-800 hover:border-amber-500/50 shadow-lg hover:shadow-2xl hover:shadow-red-950/30 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                {/* Image Section */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-950">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent opacity-80" />
                  
                  {/* Subtle Badge */}
                  {item.badge && (
                    <div className="absolute top-1.5 left-1.5 sm:top-3 sm:left-3 bg-red-600/90 backdrop-blur-sm text-white text-[8px] sm:text-[10px] font-extrabold tracking-wider uppercase px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded shadow-md">
                      {item.badge}
                    </div>
                  )}

                  {/* Rating / Prep */}
                  <div className="absolute top-1.5 right-1.5 sm:top-3 sm:right-3 bg-stone-950/80 backdrop-blur-sm border border-stone-800 px-1.5 py-0.5 rounded flex items-center gap-1 text-[9px] sm:text-[11px] font-bold text-amber-400">
                    <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-amber-400 text-amber-400" />
                    <span>{item.rating || 4.9}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-2.5 sm:p-5 flex-1 flex flex-col justify-between text-left">
                  <div className="space-y-1 sm:space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] sm:text-[11px] uppercase tracking-wider text-amber-400/90 font-bold truncate">
                        {item.categoryLabel}
                      </span>
                      {item.prepTime && (
                        <span className="hidden sm:flex text-[10px] text-stone-400 items-center gap-1 font-mono">
                          <Clock className="w-3 h-3 text-stone-500" /> {item.prepTime}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xs sm:text-base lg:text-lg font-bold text-white group-hover:text-amber-300 transition-colors leading-snug line-clamp-1">
                      {item.name}
                    </h3>

                    <p className="text-[10px] sm:text-xs text-stone-400 line-clamp-1 sm:line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Price and Add to Cart Action */}
                  <div className="mt-2.5 sm:mt-5 pt-2 sm:pt-4 border-t border-stone-800/80 flex items-center justify-between gap-1 sm:gap-2">
                    <div className="min-w-0">
                      <p className="text-xs sm:text-base font-black text-amber-400 tabular-nums truncate">
                        {item.priceDisplay}
                      </p>
                    </div>

                    <button
                      onClick={(e) => handleAdd(item, e)}
                      className={`inline-flex items-center gap-1 px-2 py-1.5 sm:px-3.5 sm:py-2 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-md shrink-0 ${
                        isAdded
                          ? 'bg-emerald-600 text-white scale-105'
                          : 'bg-red-600 hover:bg-red-500 text-white hover:shadow-red-900/60'
                      }`}
                      aria-label={`Add ${item.name} to cart`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="hidden xs:inline">Added</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>Add</span>
                        </>
                      )}
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
