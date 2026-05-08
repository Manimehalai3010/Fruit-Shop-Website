
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '../ui/ProductCard';
import { products } from '../../data/products';

export default function FeaturedProducts({ onAddToCart }) {
  const featured = products.filter(p => p.inStock).slice(0, 4);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-brand-500 font-semibold text-sm uppercase tracking-wider mb-2">🌟 Top Picks</p>
            <h2 className="section-title">Fresh & Seasonal Favourites</h2>
          </div>
          <Link to="/shop" className="hidden sm:flex items-center gap-2 text-brand-600 font-semibold hover:gap-3 transition-all">
            View all <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>

        <div className="text-center mt-10 sm:hidden">
          <Link to="/shop" className="btn-secondary">
            View All Fruits <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
