import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { POPULAR_CATEGORIES } from '../data/restaurantData';

interface CategoriesProps {
  onSelectCategory: (categoryId: string) => void;
}

export const Categories: React.FC<CategoriesProps> = ({ onSelectCategory }) => {
  return (
    <section id="categories" className="py-10 sm:py-20 bg-[#0a0908] relative">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-12 pb-3 sm:pb-4 border-b border-stone-800/80">
          <div className="space-y-1 sm:space-y-2 text-left">
            <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-amber-400 uppercase tracking-widest">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>Explore Menu</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-brand">
              Popular Categories
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-400 mt-1 sm:mt-0 max-w-sm text-left sm:text-right">
            Crafted with passion, sizzled over coals, and prepared with authentic Karachi taste.
          </p>
        </div>

        {/* Categories Grid (2 cards per row on mobile, 3 on tablet, 6 on desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-4">
          {POPULAR_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="group relative rounded-xl sm:rounded-2xl overflow-hidden bg-stone-900 border border-stone-800 hover:border-amber-500/60 shadow-md hover:shadow-xl hover:shadow-red-950/40 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex flex-col"
            >
              {/* Image Container with 4:3 Ratio */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-950">
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
              </div>

              {/* Card Content */}
              <div className="p-2.5 sm:p-4 flex-1 flex flex-col justify-between text-left">
                <div>
                  <h3 className="text-sm sm:text-base lg:text-lg font-black text-white group-hover:text-amber-400 transition-colors font-brand leading-tight">
                    {cat.name}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-stone-400 line-clamp-1 mt-0.5">
                    {cat.subtitle}
                  </p>
                </div>

                <div className="mt-2.5 sm:mt-4 pt-2 border-t border-stone-800/80 flex items-center justify-between">
                  <span className="text-[11px] sm:text-xs font-semibold text-amber-400 group-hover:text-amber-300 transition-colors flex items-center gap-1">
                    Explore
                    <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-stone-500 font-mono">0{POPULAR_CATEGORIES.indexOf(cat) + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
