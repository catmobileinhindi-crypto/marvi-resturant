import React, { useState } from 'react';
import { X, Star, Clock, Check, Plus, MessageSquare, Flame } from 'lucide-react';
import { MenuItem } from '../types/restaurant';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface ProductModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (item: MenuItem, quantity: number) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  item,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  if (!item) return null;

  const handleAdd = () => {
    onAddToCart(item, quantity);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 900);
  };

  const instantWhatsAppUrl = `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Assalam-o-Alaikum Nagori Marvi Fast Foods! I would like to order ${quantity}x ${item.name} (${item.priceDisplay}). Please confirm delivery time.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-xl rounded-3xl bg-stone-950 border border-stone-800 shadow-2xl overflow-hidden z-10 text-stone-100 flex flex-col max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 backdrop-blur-md text-stone-300 hover:text-white hover:bg-black/90 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-900">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
          
          {item.badge && (
            <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
              {item.badge}
            </span>
          )}

          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold bg-stone-950/80 px-2.5 py-1 rounded">
              {item.categoryLabel}
            </span>
            <div className="flex items-center gap-1.5 bg-stone-950/80 px-2.5 py-1 rounded text-xs font-bold text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>{item.rating || 4.9}</span>
            </div>
          </div>
        </div>

        {/* Details & Interactive Actions */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto text-left">
          
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-black text-white font-brand">
              {item.name}
            </h3>
            <p className="text-sm text-stone-300 leading-relaxed font-normal">
              {item.description}
            </p>
          </div>

          <div className="flex items-center justify-between py-3 border-y border-stone-800">
            <div>
              <span className="text-[11px] text-stone-400 block font-medium">Price</span>
              <span className="text-2xl font-black text-amber-400 tabular-nums">
                {item.priceDisplay}
              </span>
            </div>

            {item.prepTime && (
              <div className="text-right">
                <span className="text-[11px] text-stone-400 block font-medium">Preparation</span>
                <span className="text-xs text-stone-300 font-mono flex items-center gap-1">
                  <Clock className="w-3 h-3 text-stone-400" /> {item.prepTime}
                </span>
              </div>
            )}
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center justify-between pt-1">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-300">
              Quantity
            </span>
            <div className="flex items-center gap-3 bg-stone-900 border border-stone-800 p-1.5 rounded-xl">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 rounded-lg bg-stone-950 flex items-center justify-center text-stone-300 hover:text-white"
              >
                -
              </button>
              <span className="w-8 text-center text-sm font-mono font-bold text-white tabular-nums">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 rounded-lg bg-stone-950 flex items-center justify-center text-stone-300 hover:text-white"
              >
                +
              </button>
            </div>
          </div>

          {/* Modal Bottom Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <button
              onClick={handleAdd}
              className={`w-full py-3.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg ${
                isAdded
                  ? 'bg-emerald-600 text-white'
                  : 'bg-red-600 hover:bg-red-500 text-white shadow-red-950/60'
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added to Cart!</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  <span>Add (Rs. {item.price * quantity})</span>
                </>
              )}
            </button>

            <a
              href={instantWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/60 transition-transform active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Instant WhatsApp</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
