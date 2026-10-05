import React from 'react';
import { ChefHat, Sparkles, Bike, Zap } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const features = [
    {
      icon: ChefHat,
      title: 'Freshly Prepared',
      description: 'Cooked fresh on every single order with 100% prime cuts and authentic spices.',
      color: 'text-amber-400',
      bg: 'bg-amber-500/10 border-amber-500/20',
    },
    {
      icon: Sparkles,
      title: 'Premium Taste',
      description: 'Signature marinades, secret spice blends, and melt-in-the-mouth recipes.',
      color: 'text-red-400',
      bg: 'bg-red-500/10 border-red-500/20',
    },
    {
      icon: Bike,
      title: 'Home Delivery',
      description: 'Doorstep dispatch across Shah Latif Town & surrounding Karachi sectors.',
      color: 'text-yellow-400',
      bg: 'bg-yellow-500/10 border-yellow-500/20',
    },
    {
      icon: Zap,
      title: 'Fast Service',
      description: 'Piping hot food packaged in insulated bags to seal in crunch and warmth.',
      color: 'text-orange-400',
      bg: 'bg-orange-500/10 border-orange-500/20',
    },
  ];

  return (
    <section className="relative z-20 py-5 sm:py-8 bg-[#0f0e0d] border-y border-stone-800/80">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="group flex flex-col sm:flex-row items-start gap-2.5 sm:gap-4 p-3 sm:p-4 rounded-xl bg-stone-900/50 border border-stone-800/70 hover:border-amber-500/40 transition-all duration-300 hover:bg-stone-900"
              >
                <div className={`p-2 sm:p-3 rounded-lg border ${feat.bg} shrink-0`}>
                  <Icon className={`w-4 h-4 sm:w-6 sm:h-6 ${feat.color}`} />
                </div>
                <div className="space-y-0.5 sm:space-y-1 text-left">
                  <h3 className="text-xs sm:text-sm font-bold text-white tracking-wide group-hover:text-amber-300 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-stone-400 leading-relaxed font-normal line-clamp-2">
                    {feat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
