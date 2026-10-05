import React, { useState, useEffect } from 'react';
import { ShoppingBag, Phone, Menu as MenuIcon, X, Flame } from 'lucide-react';
import { NagoriMarviLogo } from './NagoriMarviLogo';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenWordPressModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenWordPressModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Menu', href: '#menu' },
    { label: 'Deals', href: '#deals' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0c0a09]/95 backdrop-blur-md border-b border-amber-500/20 py-2.5 shadow-xl shadow-black/60'
            : 'bg-gradient-to-b from-black/90 via-black/60 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Brand Wordmark / Emblem */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#home');
              }}
              className="group flex items-center transition-transform hover:scale-[1.02]"
              aria-label="Nagori Marvi Fast Foods Home"
            >
              <NagoriMarviLogo size="sm" showText={true} />
            </a>

            {/* Zone 2: Navigation Links (Clean text links with hover underline) */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="text-stone-300 hover:text-amber-400 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary Actions (Cart, WP Export, Order Now) */}
            <div className="flex items-center gap-3">
              {/* Cart Drawer Trigger */}
              <button
                onClick={onOpenCart}
                className="relative p-2.5 rounded-lg bg-stone-900 border border-stone-800 hover:border-amber-500/50 text-stone-200 hover:text-amber-400 transition-all cursor-pointer"
                aria-label={`Shopping Cart with ${cartCount} items`}
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-[11px] font-black rounded-full w-5 h-5 flex items-center justify-center ring-2 ring-stone-950 animate-bounce">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* WordPress Code Exporter / Template Info Trigger */}
              <button
                onClick={onOpenWordPressModal}
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-lg bg-stone-900 border border-amber-500/40 text-amber-300 hover:bg-stone-800 transition-colors cursor-pointer"
                title="WordPress Template & Code"
              >
                <span className="text-[11px]">WP</span>
                <span className="hidden xl:inline">Export Code</span>
              </button>

              {/* Order Now Primary CTA */}
              <a
                href="#menu"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#menu');
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 rounded-lg shadow-lg shadow-red-900/40 hover:shadow-red-800/60 transition-all transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
              >
                <Flame className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                Order Now
              </a>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-stone-300 hover:text-white hover:bg-stone-900 transition-colors"
                aria-label="Toggle Mobile Navigation"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden bg-black/95 backdrop-blur-xl pt-24 px-6 pb-8 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-4">
            <div className="pb-4 border-b border-stone-800 flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
                Nagori Marvi Menu
              </span>
              <span className="text-xs text-stone-400">Karachi, PK</span>
            </div>

            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="text-lg font-bold text-stone-200 hover:text-amber-400 transition-colors py-2 border-b border-stone-900 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-amber-500/70 font-mono">→</span>
                </a>
              ))}
            </nav>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenWordPressModal();
              }}
              className="w-full mt-4 py-2.5 px-4 rounded-lg bg-stone-900 border border-amber-500/30 text-amber-300 text-xs font-semibold flex items-center justify-center gap-2"
            >
              <span>WordPress Custom Template Code</span>
            </button>
          </div>

          <div className="pt-6 border-t border-stone-800 space-y-3">
            <p className="text-xs text-stone-400 text-center">Fast Delivery Hotlines</p>
            <div className="grid grid-cols-2 gap-2">
              {RESTAURANT_INFO.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/-/g, '')}`}
                  className="py-2.5 px-3 bg-stone-900 rounded-lg text-center text-xs font-bold text-amber-400 border border-amber-500/20"
                >
                  {phone}
                </a>
              ))}
            </div>
            <a
              href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=Assalam-o-Alaikum%20Nagori%20Marvi%20Fast%20Foods!%20I%20would%20like%20to%20view%20the%20menu%20and%20order.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-lg flex items-center justify-center gap-2 shadow-lg"
            >
              Order Directly on WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
};
