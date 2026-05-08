// src/components/sections/HeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Truck, Leaf } from 'lucide-react';

const FLOATING_FRUITS = ['🥭', '🍓', '🍊', '🫐', '🍉', '🍑'];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-pattern pt-20">
      {/* Decorative Blobs */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-brand-200/30 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-leaf-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Fruits */}
      {FLOATING_FRUITS.map((fruit, i) => (
        <div
          key={i}
          className={`absolute text-3xl md:text-4xl opacity-20 md:opacity-30 animate-float pointer-events-none`}
          style={{
            top: `${15 + (i * 13) % 70}%`,
            left: i % 2 === 0 ? `${2 + i * 2}%` : undefined,
            right: i % 2 !== 0 ? `${2 + i * 3}%` : undefined,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${6 + i * 0.5}s`,
          }}
        >
          {fruit}
        </div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-semibold">
              <Leaf size={14} />
              100% Farm Fresh · Same Day Delivery
            </div>

            <div>
              <h1 className="section-title text-5xl lg:text-6xl xl:text-7xl">
                Nature's Best,{' '}
                <span className="text-brand-500 italic">Freshly</span>{' '}
                Delivered.
              </h1>
              <p className="section-subtitle mt-5 max-w-lg">
                Handpicked from India's finest farms and orchards. Experience the true taste of 
                seasonal, chemical-free fruits delivered straight to your home.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link to="/shop" className="btn-primary text-base px-8 py-4">
                Shop Now <ArrowRight size={18} />
              </Link>
              <Link to="/about" className="btn-secondary text-base px-8 py-4">
                Our Story
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 pt-2">
              {[
                { icon: <ShieldCheck size={16} />, label: 'Quality Guaranteed' },
                { icon: <Truck size={16} />, label: 'Free Delivery ₹499+' },
                { icon: <Leaf size={16} />, label: 'No Pesticides' },
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                  <span className="text-leaf-500">{b.icon}</span>
                  {b.label}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Feature Card */}
          <div className="relative animate-fade-in animation-delay-400 hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Big Center Fruit */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 bg-gradient-to-br from-brand-200 to-brand-400 rounded-full flex items-center justify-center shadow-fruit animate-float">
                  <span className="text-[9rem]">🥭</span>
                </div>
              </div>

              {/* Orbiting Fruits */}
              {['🍓', '🍊', '🫐', '🍉'].map((f, i) => {
                const angle = (i / 4) * 360 - 45;
                const rad = (angle * Math.PI) / 180;
                const r = 155;
                const x = 50 + (r / 280) * 100 * Math.cos(rad);
                const y = 50 + (r / 280) * 100 * Math.sin(rad);
                return (
                  <div
                    key={i}
                    className="absolute w-16 h-16 bg-white rounded-2xl shadow-card flex items-center justify-center text-3xl animate-float"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: 'translate(-50%, -50%)',
                      animationDelay: `${i * 0.7}s`,
                      animationDuration: `${7 + i * 0.5}s`,
                    }}
                  >
                    {f}
                  </div>
                );
              })}

              {/* Info Card */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-3xl shadow-card p-4 w-52 animate-slide-up animation-delay-600">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">⭐</div>
                  <div>
                    <p className="font-bold text-gray-900">4.9 / 5.0</p>
                    <p className="text-xs text-gray-500">10,000+ happy customers</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-leaf-500 text-white rounded-3xl shadow-lg p-4 w-44 animate-slide-up animation-delay-200">
                <p className="font-bold text-lg">50+</p>
                <p className="text-xs text-leaf-100">Fresh varieties in stock</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
