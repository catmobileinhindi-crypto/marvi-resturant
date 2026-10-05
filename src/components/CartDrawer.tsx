import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, MessageSquare, Phone, ArrowRight } from 'lucide-react';
import { CartItem } from '../types/restaurant';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [deliveryNote, setDeliveryNote] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = items.length > 0 ? 100 : 0;
  const grandTotal = subtotal + deliveryFee;

  const generateWhatsAppOrderText = () => {
    let text = `*New Order - Nagori Marvi Fast Foods*\n`;
    text += `------------------------------------\n`;
    items.forEach((item) => {
      text += `• ${item.quantity}x ${item.name} - Rs. ${item.price * item.quantity}\n`;
    });
    text += `------------------------------------\n`;
    text += `Subtotal: Rs. ${subtotal}\n`;
    text += `Delivery Fee: Rs. ${deliveryFee}\n`;
    text += `*Total Amount: Rs. ${grandTotal}*\n\n`;

    if (customerName) text += `*Customer:* ${customerName}\n`;
    if (customerAddress) text += `*Address:* ${customerAddress}\n`;
    if (deliveryNote) text += `*Special Instructions:* ${deliveryNote}\n`;
    text += `\nPlease confirm my order and approximate delivery time. Thank you!`;

    return encodeURIComponent(text);
  };

  const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${generateWhatsAppOrderText()}`;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-stone-950 border-l border-stone-800 text-stone-100 flex flex-col justify-between shadow-2xl">
          
          {/* Header */}
          <div className="p-6 border-b border-stone-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-amber-400" />
              <h2 className="text-lg font-bold font-brand tracking-wide text-white">
                Your Food Cart ({items.reduce((acc, i) => acc + i.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-stone-400 hover:text-white hover:bg-stone-900 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12 text-stone-500">
                <div className="w-16 h-16 rounded-full bg-stone-900 flex items-center justify-center text-stone-600">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-stone-300">Your cart is empty</h3>
                  <p className="text-xs text-stone-500 mt-1 max-w-xs">
                    Explore our burgers, sizzling BBQ, stone-baked pizzas, or popular deals to add items.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              <>
                <div className="space-y-3">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="p-3.5 rounded-xl bg-stone-900/80 border border-stone-800 flex items-center gap-3"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover bg-stone-950 shrink-0"
                      />
                      
                      <div className="flex-1 min-w-0 text-left">
                        <h4 className="text-sm font-bold text-white truncate">{item.name}</h4>
                        <p className="text-xs text-amber-400 font-bold tabular-nums">
                          Rs. {item.price * item.quantity}
                        </p>
                        <span className="text-[10px] text-stone-500 tabular-nums">
                          Rs. {item.price} each
                        </span>
                      </div>

                      {/* Quantity Stepper */}
                      <div className="flex items-center gap-1.5 bg-stone-950 p-1 rounded-lg border border-stone-800">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="w-6 h-6 rounded flex items-center justify-center text-stone-300 hover:text-white hover:bg-stone-800 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-mono font-bold w-5 text-center text-white tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="w-6 h-6 rounded flex items-center justify-center text-stone-300 hover:text-white hover:bg-stone-800 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-1.5 text-stone-500 hover:text-red-400 transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Optional Customer Information for Fast Checkout */}
                <div className="pt-4 border-t border-stone-800 space-y-3 text-left">
                  <span className="text-[11px] uppercase tracking-wider text-amber-400 font-bold block">
                    Quick Delivery Details (Optional)
                  </span>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-stone-900 border border-stone-800 text-white placeholder-stone-500 focus:outline-none focus:border-amber-400"
                  />
                  <input
                    type="text"
                    placeholder="Delivery Address (Sector, House No.)"
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-stone-900 border border-stone-800 text-white placeholder-stone-500 focus:outline-none focus:border-amber-400"
                  />
                  <input
                    type="text"
                    placeholder="Special instructions (e.g. extra spicy, ketchup)"
                    value={deliveryNote}
                    onChange={(e) => setDeliveryNote(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-stone-900 border border-stone-800 text-white placeholder-stone-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </>
            )}
          </div>

          {/* Footer & Checkout Buttons */}
          {items.length > 0 && (
            <div className="p-6 border-t border-stone-800 bg-stone-950/90 space-y-4">
              
              {/* Cost Breakdown */}
              <div className="space-y-1.5 text-xs text-stone-400">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-white font-mono tabular-nums">Rs. {subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Delivery (Shah Latif Town)</span>
                  <span className="text-white font-mono tabular-nums">Rs. {deliveryFee}</span>
                </div>
                <div className="pt-2 border-t border-stone-800 flex justify-between text-base font-bold text-white">
                  <span>Grand Total</span>
                  <span className="text-amber-400 font-mono tabular-nums">Rs. {grandTotal}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-green-950/60 transition-transform active:scale-[0.98]"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.97.57 3.86 1.65 5.48L2 22l4.63-1.61c1.57.99 3.39 1.51 5.37 1.51 5.536 0 10.031-4.495 10.031-10.031C22.062 6.495 17.567 2 12.031 2zm0 18.36c-1.74 0-3.37-.5-4.78-1.42l-.34-.22-2.76.96.98-2.69-.23-.37c-1.02-1.48-1.57-3.23-1.57-5.04 0-4.62 3.76-8.38 8.38-8.38 4.62 0 8.38 3.76 8.38 8.38 0 4.62-3.76 8.38-8.46 8.38zm4.59-6.28c-.25-.13-1.49-.74-1.72-.82-.23-.08-.4-.13-.57.13-.17.25-.66.82-.81.99-.15.17-.3.19-.55.06-.25-.13-1.07-.39-2.04-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.87-.2-.49-.41-.42-.57-.43h-.49c-.17 0-.45.06-.68.32-.23.25-.89.87-.89 2.12s.91 2.46 1.04 2.63c.13.17 1.79 2.73 4.33 3.83.6.26 1.08.42 1.45.53.61.2 1.16.17 1.6.1.49-.07 1.49-.61 1.7-1.2.21-.59.21-1.1.15-1.2-.06-.11-.23-.17-.48-.29z" />
                  </svg>
                  <span>Send Order via WhatsApp</span>
                  <ArrowRight className="w-4 h-4 ml-auto" />
                </a>

                <div className="flex items-center gap-2">
                  <a
                    href={`tel:${RESTAURANT_INFO.phones[0].replace(/-/g, '')}`}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-800 text-stone-200 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span>Call to Order</span>
                  </a>

                  <button
                    onClick={onClearCart}
                    className="py-2.5 px-3 rounded-xl bg-stone-900/60 hover:bg-stone-800 text-stone-400 hover:text-red-400 text-xs font-semibold transition-colors"
                    title="Clear Cart"
                  >
                    Clear
                  </button>
                </div>
              </div>

              <p className="text-[10px] text-stone-500 text-center">
                Cash on Delivery (COD) available for all Karachi orders.
              </p>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
