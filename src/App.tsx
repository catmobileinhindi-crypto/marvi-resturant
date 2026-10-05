import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { Categories } from './components/Categories';
import { FeaturedMenu } from './components/FeaturedMenu';
import { DealsSection } from './components/DealsSection';
import { AboutSection } from './components/AboutSection';
import { ContactDelivery } from './components/ContactDelivery';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ProductModal } from './components/ProductModal';
import { WordPressExportModal } from './components/WordPressExportModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MenuItem, Deal, CartItem } from './types/restaurant';
import { RESTAURANT_INFO } from './data/restaurantData';
import { MessageSquare, Phone } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null);
  const [isWordPressModalOpen, setIsWordPressModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const handleAddToCart = (item: MenuItem, quantity: number = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [
        ...prev,
        {
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: quantity,
          image: item.image,
        },
      ];
    });
    showToast(`Added ${quantity}x ${item.name} to cart!`);
  };

  const handleAddDealToCart = (deal: Deal) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === deal.id);
      if (existing) {
        return prev.map((i) =>
          i.id === deal.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [
        ...prev,
        {
          id: deal.id,
          name: `${deal.code}: ${deal.title}`,
          price: deal.price,
          quantity: 1,
          image: deal.image,
          details: deal.items.join(', '),
        },
      ];
    });
    showToast(`Added ${deal.code} to cart!`);
  };

  const handleUpdateCartQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveCartItem = (id: string) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleCategorySelect = (categoryId: string) => {
    if (categoryId === 'deals') {
      const dealsElement = document.getElementById('deals');
      if (dealsElement) {
        dealsElement.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    setActiveCategory(categoryId);
    const menuElement = document.getElementById('menu');
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInstantWhatsAppDeal = (deal: Deal) => {
    const text = encodeURIComponent(
      `Assalam-o-Alaikum Nagori Marvi Fast Foods! I want to order ${deal.code} (${deal.title}) for Rs. ${deal.price}.\nIncluded: ${deal.items.join(', ')}.\nPlease confirm delivery.`
    );
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#0a0908] text-stone-100 flex flex-col selection:bg-red-700 selection:text-white relative">
      
      {/* Top Navbar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWordPressModal={() => setIsWordPressModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOrderNowClick={() => {
            const menuEl = document.getElementById('menu');
            if (menuEl) menuEl.scrollIntoView({ behavior: 'smooth' });
          }}
          onViewMenuClick={() => {
            const menuEl = document.getElementById('menu');
            if (menuEl) menuEl.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        <TrustStrip />

        <Categories onSelectCategory={handleCategorySelect} />

        <FeaturedMenu
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          onAddToCart={(item) => handleAddToCart(item, 1)}
          onQuickView={(item) => setSelectedProduct(item)}
        />

        <DealsSection
          onAddDealToCart={handleAddDealToCart}
          onInstantWhatsAppDeal={handleInstantWhatsAppDeal}
        />

        <AboutSection />

        <ContactDelivery />
      </main>

      {/* Footer */}
      <Footer
        onSelectCategory={handleCategorySelect}
        onOpenWordPressModal={() => setIsWordPressModalOpen(true)}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
      />

      {/* Product Detail Modal */}
      <ProductModal
        item={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* WordPress Exporter & Compatibility Modal */}
      <WordPressExportModal
        isOpen={isWordPressModalOpen}
        onClose={() => setIsWordPressModalOpen(false)}
      />

      {/* Floating WhatsApp Button at Bottom */}
      <FloatingWhatsApp />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-24 right-6 z-50 bg-stone-900 border border-amber-500/40 text-amber-300 px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2.5 text-xs font-bold animate-bounce">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
