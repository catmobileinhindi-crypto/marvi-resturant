import React from 'react';
import { IMAGES } from '../data/restaurantData';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

export const NagoriMarviLogo: React.FC<LogoProps> = ({
  size = 'md',
  showText = true,
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-24 h-24',
    xl: 'w-40 h-40 sm:w-48 sm:h-48',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Circular Emblem Container with Golden Rim & Glow */}
      <div className={`relative shrink-0 rounded-full p-0.5 bg-gradient-to-tr from-amber-600 via-yellow-400 to-amber-500 shadow-lg shadow-amber-950/40 ring-1 ring-amber-400/40 ${sizeClasses[size]}`}>
        <div className="relative w-full h-full rounded-full overflow-hidden bg-black flex items-center justify-center">
          <img
            src={IMAGES.logo}
            alt="Nagori Marvi Fast Foods Official Logo"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            onError={(e) => {
              // Graceful SVG fallback if image is missing
              const target = e.currentTarget;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML = `
                  <div class="w-full h-full bg-gradient-to-b from-[#1a120c] to-black flex flex-col items-center justify-center p-1 text-center">
                    <span class="text-[9px] tracking-wider text-amber-400 font-bold uppercase">NAGORI</span>
                    <span class="text-xs text-white font-extrabold tracking-tight">MARVI</span>
                    <span class="text-[7px] text-red-500 font-bold">FAST FOODS</span>
                  </div>
                `;
              }
            }}
          />
        </div>
      </div>

      {/* Brand Text Lockup for Header / Navigation */}
      {showText && (
        <div className="flex flex-col text-left">
          <span className="text-[10px] font-bold tracking-[0.25em] text-amber-400 uppercase font-brand leading-none">
            = NAGORI =
          </span>
          <span className="text-xl sm:text-2xl font-black tracking-tight text-white font-brand leading-tight drop-shadow-sm flex items-center gap-1.5">
            MARVI
            <span className="text-[10px] text-amber-400 bg-amber-500/10 border border-amber-500/30 px-1 py-0.5 rounded tracking-normal font-sans font-semibold">
              👑
            </span>
          </span>
          <span className="text-[9px] sm:text-[10px] font-extrabold tracking-[0.18em] text-red-500 uppercase leading-none">
            FAST FOODS
          </span>
        </div>
      )}
    </div>
  );
};
