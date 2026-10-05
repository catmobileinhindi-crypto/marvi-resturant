import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Clock, Copy, Check, Navigation } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { NagoriMarviLogo } from './NagoriMarviLogo';

export const ContactDelivery: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPhone(text);
    setTimeout(() => setCopiedPhone(null), 2000);
  };

  const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=Assalam-o-Alaikum%20Nagori%20Marvi%20Fast%20Foods!%20I%20want%20to%20place%20an%20order%20for%20home%20delivery.`;

  return (
    <section id="contact" className="py-10 sm:py-24 bg-[#0d0b0a] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-red-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-2xl sm:rounded-3xl bg-stone-900/90 border-2 border-amber-500/30 p-4 sm:p-10 lg:p-16 shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center">
            
            {/* Left Column: Contact details & large CTAs */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-8 text-left">
              
              <div className="space-y-1.5 sm:space-y-3">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                  <Navigation className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <span>Doorstep Fast Delivery</span>
                </div>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white font-brand">
                  Ready To Order?
                </h2>
                <p className="text-stone-300 text-xs sm:text-base max-w-xl">
                  Order your favorite burgers, sizzling BBQ boti, crispy rolls, and cheesy pizzas directly. Call our hotlines or message us on WhatsApp for fast delivery.
                </p>
              </div>

              {/* Delivery Hotlines Strip */}
              <div className="space-y-2 sm:space-y-3">
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-stone-400 font-bold block">
                  Home Delivery Numbers:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {RESTAURANT_INFO.phones.map((phone) => (
                    <div
                      key={phone}
                      className="p-3 sm:p-4 rounded-xl bg-stone-950/80 border border-stone-800 flex items-center justify-between group hover:border-amber-500/50 transition-colors"
                    >
                      <div className="flex items-center gap-2.5 sm:gap-3">
                        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                          <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </div>
                        <div>
                          <span className="text-[9px] sm:text-[10px] text-stone-400 block font-medium">Hotline</span>
                          <a
                            href={`tel:${phone.replace(/-/g, '')}`}
                            className="text-sm sm:text-base font-black text-white hover:text-amber-400 tabular-nums transition-colors"
                          >
                            {phone}
                          </a>
                        </div>
                      </div>

                      <button
                        onClick={() => handleCopy(phone)}
                        className="p-1.5 sm:p-2 rounded text-stone-500 hover:text-amber-400 transition-colors cursor-pointer"
                        title="Copy Phone Number"
                      >
                        {copiedPhone === phone ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons: 2 columns on mobile */}
              <div className="grid grid-cols-2 gap-2 sm:gap-4 pt-1 sm:pt-2">
                {/* CALL NOW Button */}
                <a
                  href={`tel:${RESTAURANT_INFO.phones[0].replace(/-/g, '')}`}
                  className="group py-3 sm:py-4 px-2 sm:px-6 rounded-lg sm:rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider text-white bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-500 flex items-center justify-center gap-1.5 sm:gap-3 shadow-lg shadow-red-950/70 transition-all text-center whitespace-nowrap"
                >
                  <Phone className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                  <span>CALL NOW</span>
                </a>

                {/* ORDER ON WHATSAPP Button */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group py-3 sm:py-4 px-2 sm:px-6 rounded-lg sm:rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider text-white bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 flex items-center justify-center gap-1.5 sm:gap-3 shadow-lg shadow-green-950/70 transition-all text-center whitespace-nowrap"
                >
                  <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5 fill-white shrink-0" viewBox="0 0 24 24">
                    <path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.97.57 3.86 1.65 5.48L2 22l4.63-1.61c1.57.99 3.39 1.51 5.37 1.51 5.536 0 10.031-4.495 10.031-10.031C22.062 6.495 17.567 2 12.031 2zm0 18.36c-1.74 0-3.37-.5-4.78-1.42l-.34-.22-2.76.96.98-2.69-.23-.37c-1.02-1.48-1.57-3.23-1.57-5.04 0-4.62 3.76-8.38 8.38-8.38 4.62 0 8.38 3.76 8.38 8.38 0 4.62-3.76 8.38-8.46 8.38zm4.59-6.28c-.25-.13-1.49-.74-1.72-.82-.23-.08-.4-.13-.57.13-.17.25-.66.82-.81.99-.15.17-.3.19-.55.06-.25-.13-1.07-.39-2.04-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.87-.2-.49-.41-.42-.57-.43h-.49c-.17 0-.45.06-.68.32-.23.25-.89.87-.89 2.12s.91 2.46 1.04 2.63c.13.17 1.79 2.73 4.33 3.83.6.26 1.08.42 1.45.53.61.2 1.16.17 1.6.1.49-.07 1.49-.61 1.7-1.2.21-.59.21-1.1.15-1.2-.06-.11-.23-.17-.48-.29z" />
                  </svg>
                  <span>WHATSAPP</span>
                </a>
              </div>

            </div>

            {/* Right Column: Address Card with Official Logo & Map Pin Details */}
            <div className="lg:col-span-5 bg-stone-950/90 rounded-2xl p-6 sm:p-8 border border-stone-800 space-y-6 text-left">
              
              <div className="flex items-center gap-4 pb-4 border-b border-stone-800">
                <NagoriMarviLogo size="sm" showText={true} />
              </div>

              {/* Exact Address formatted as requested */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="text-[11px] uppercase tracking-wider text-amber-400 font-bold block">
                      Restaurant Location:
                    </span>
                    <address className="not-italic text-sm text-stone-200 leading-relaxed font-medium">
                      Plot No. N-164, <br />
                      Shah Latif Town, <br />
                      Sector 17-A, <br />
                      Near Mangal Bazar, <br />
                      Karachi, Pakistan
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-stone-900">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-stone-400 font-bold block">
                      Operating Hours:
                    </span>
                    <p className="text-xs text-stone-300 font-mono">
                      {RESTAURANT_INFO.openingHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Delivery Zone Notice */}
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs leading-relaxed">
                🚀 <strong>Quick Dispatch:</strong> Covering Shah Latif Town, Sector 17-A, Mangal Bazar Road, and adjacent areas with insulated food carriers.
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
