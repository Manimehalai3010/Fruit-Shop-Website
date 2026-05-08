
import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Instagram, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-brand-gradient flex items-center justify-center">
                <Leaf className="text-white" size={18} />
              </div>
              <span className="font-display text-xl font-bold text-white">
                Fresco<span className="text-brand-400">Fruits</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Fresh, farm-direct fruits delivered to your doorstep. Quality you can taste, 
              freshness you can feel.
            </p>
            <div className="flex gap-3">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 bg-gray-800 hover:bg-brand-500 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {[
                { to: '/', label: 'Home' },
                { to: '/shop', label: 'Shop' },
                { to: '/about', label: 'About Us' },
                { to: '/contact', label: 'Contact' },
                { to: '/wishlist', label: 'My Wishlist' },
              ].map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-brand-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-white mb-5">Categories</h4>
            <ul className="space-y-3 text-sm">
              {['Tropical Fruits', 'Citrus Fruits', 'Berries', 'Stone Fruits', 'Seasonal Picks', 'Organic Basket'].map(c => (
                <li key={c}>
                  <Link to="/shop" className="hover:text-brand-400 transition-colors">{c}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-5">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 items-start">
                <MapPin size={16} className="text-brand-400 mt-0.5 flex-shrink-0" />
                <span>42, Anna Nagar, Madurai – 625020, Tamil Nadu</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={16} className="text-brand-400 flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-brand-400 transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={16} className="text-brand-400 flex-shrink-0" />
                <a href="mailto:hello@frescofruits.in" className="hover:text-brand-400 transition-colors">hello@frescofruits.in</a>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-gray-900 rounded-2xl">
              <p className="text-xs font-medium text-white mb-1">Delivery Hours</p>
              <p className="text-xs">Mon – Sat: 7 AM – 8 PM</p>
              <p className="text-xs">Sunday: 8 AM – 5 PM</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} FrescoFruits. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand-400 transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
