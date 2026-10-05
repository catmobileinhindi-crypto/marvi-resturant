import React from 'react';
import { Phone, MapPin, Heart } from 'lucide-react';
import { NagoriMarviLogo } from './NagoriMarviLogo';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface FooterProps {
  onSelectCategory: (cat: string) => void;
  onOpenWordPressModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory, onOpenWordPressModal }) => {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#070605] border-t border-stone-800/80 pt-10 pb-8 sm:pt-16 sm:pb-12 text-stone-400">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-10 pb-8 sm:pb-12 border-b border-stone-800">
          
          {/* Col 1: Logo & Brief Bio (5 cols) */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4 text-left">
            <NagoriMarviLogo size="sm" showText={true} />
            <p className="text-xs sm:text-sm text-stone-400 max-w-sm leading-relaxed pt-1 sm:pt-2">
              Karachi's trusted fast food spot serving sizzling charcoal BBQ, loaded gourmet burgers, cheesy stone-baked pizzas, and paratha rolls.
            </p>
            <div className="flex items-center gap-2 text-[11px] sm:text-xs text-amber-400 font-semibold">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500" />
              <span>Accepting Delivery & Takeaway Orders</span>
            </div>
          </div>

          {/* Col 2 & 3: 2-column Links row on mobile (4 cols total on desktop) */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4 text-left">
            {/* Quick Links */}
            <div className="space-y-2 sm:space-y-3">
              <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-amber-400 font-brand">
                Quick Links
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm">
                {['Home', 'Menu', 'Deals', 'About', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleScroll(`#${item.toLowerCase()}`);
                      }}
                      className="hover:text-amber-300 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div className="space-y-2 sm:space-y-3">
              <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-amber-400 font-brand">
                Categories
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm">
                {[
                  { label: 'BBQ', id: 'bbq' },
                  { label: 'Pizza', id: 'pizza' },
                  { label: 'Burgers', id: 'burgers' },
                  { label: 'Rolls', id: 'rolls' },
                ].map((cat) => (
                  <li key={cat.id}>
                    <button
                      onClick={() => {
                        onSelectCategory(cat.id);
                        handleScroll('#menu');
                      }}
                      className="hover:text-amber-300 transition-colors cursor-pointer text-left"
                    >
                      {cat.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Col 4: Contact Info (3 cols) */}
          <div className="lg:col-span-3 space-y-2 sm:space-y-3 text-left">
            <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-amber-400 font-brand">
              Contact & Order
            </h4>
            
            <div className="space-y-1.5 sm:space-y-2 text-xs text-stone-300">
              <div className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  {RESTAURANT_INFO.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/-/g, '')}`}
                      className="block font-bold hover:text-amber-400 tabular-nums transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-400 shrink-0 mt-0.5" />
                <address className="not-italic text-[10px] sm:text-[11px] text-stone-400 leading-relaxed">
                  Plot No. N-164, Shah Latif Town, Sector 17-A, Karachi
                </address>
              </div>

              <div className="pt-1">
                <button
                  onClick={onOpenWordPressModal}
                  className="text-[10px] sm:text-[11px] text-amber-400/80 hover:text-amber-300 underline font-mono flex items-center gap-1 cursor-pointer"
                >
                  ⚙️ WordPress Template Code
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip with Copyright */}
        <div className="pt-4 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-[10px] sm:text-xs text-stone-500 gap-2 sm:gap-4">
          <p>© {new Date().getFullYear()} Nagori Marvi Fast Foods. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            Handcrafted with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> for Client Demo
          </p>
        </div>

      </div>
    </footer>
  );
};
