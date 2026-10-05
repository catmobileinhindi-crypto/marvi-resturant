import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=Assalam-o-Alaikum%20Nagori%20Marvi%20Fast%20Foods!%20I%20want%20to%20order%20food.`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip on hover (desktop) */}
      <span className="hidden sm:inline-block mr-3 px-3 py-1.5 rounded-xl bg-stone-900/95 text-emerald-400 text-xs font-bold border border-emerald-500/30 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        Order on WhatsApp 💬
      </span>

      {/* Floating Button (Clean, Static & Solid) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-black/50 transition-colors"
      >
        {/* WhatsApp Official SVG Icon */}
        <svg
          className="w-8 h-8 sm:w-9 sm:h-9 fill-white"
          viewBox="0 0 24 24"
        >
          <path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.97.57 3.86 1.65 5.48L2 22l4.63-1.61c1.57.99 3.39 1.51 5.37 1.51 5.536 0 10.031-4.495 10.031-10.031C22.062 6.495 17.567 2 12.031 2zm0 18.36c-1.74 0-3.37-.5-4.78-1.42l-.34-.22-2.76.96.98-2.69-.23-.37c-1.02-1.48-1.57-3.23-1.57-5.04 0-4.62 3.76-8.38 8.38-8.38 4.62 0 8.38 3.76 8.38 8.38 0 4.62-3.76 8.38-8.46 8.38zm4.59-6.28c-.25-.13-1.49-.74-1.72-.82-.23-.08-.4-.13-.57.13-.17.25-.66.82-.81.99-.15.17-.3.19-.55.06-.25-.13-1.07-.39-2.04-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.87-.2-.49-.41-.42-.57-.43h-.49c-.17 0-.45.06-.68.32-.23.25-.89.87-.89 2.12s.91 2.46 1.04 2.63c.13.17 1.79 2.73 4.33 3.83.6.26 1.08.42 1.45.53.61.2 1.16.17 1.6.1.49-.07 1.49-.61 1.7-1.2.21-.59.21-1.1.15-1.2-.06-.11-.23-.17-.48-.29z" />
        </svg>
      </a>
    </div>
  );
};
