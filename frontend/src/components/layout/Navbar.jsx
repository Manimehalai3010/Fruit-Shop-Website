
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Heart, Search, Menu, X, Leaf } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar({ onCartOpen }) {
  const { totalItems } = useCart();
  const { wishlist } = useWishlist();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-brand-gradient flex items-center justify-center shadow-fruit group-hover:scale-105 transition-transform">
            <Leaf className="text-white" size={18} />
          </div>
          <span className="font-display text-xl font-bold text-gray-900">
            Fresco<span className="text-brand-500">Fruits</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`nav-link pb-1 ${location.pathname === link.to ? 'text-brand-600 after:w-full' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link to="/shop" className="hidden sm:flex p-2.5 text-gray-500 hover:text-brand-500 hover:bg-brand-50 rounded-xl transition-colors">
            <Search size={20} />
          </Link>
          <Link to="/wishlist" className="relative p-2.5 text-gray-500 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-colors">
            <Heart size={20} />
            {wishlist.length > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </Link>
          <button
            onClick={onCartOpen}
            className="relative p-2.5 text-gray-500 hover:text-brand-500 hover:bg-brand-50 rounded-xl transition-colors"
            aria-label="Open cart"
          >
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-brand-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-bounce-slow">
                {totalItems}
              </span>
            )}
          </button>
          <button
            className="md:hidden p-2.5 text-gray-600 hover:bg-gray-100 rounded-xl transition-colors"
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4 shadow-lg">
          <ul className="flex flex-col gap-1 pt-3">
            {NAV_LINKS.map(link => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`block px-4 py-3 rounded-xl font-medium transition-colors ${
                    location.pathname === link.to
                      ? 'bg-brand-50 text-brand-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
