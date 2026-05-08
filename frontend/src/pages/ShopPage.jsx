// src/pages/ShopPage.jsx
import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import { categories } from '../data/products';
import { useProducts } from '../hooks/useProducts';

export default function ShopPage({ onAddToCart }) {
  const { filtered, search, setSearch, activeCategory, setActiveCategory, sortBy, setSortBy } = useProducts();

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <h1 className="section-title mb-2">Our Fruit Shop</h1>
          <p className="section-subtitle">Explore {filtered.length} fresh varieties from farms across India.</p>
        </div>

        {/* Search + Sort */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search fruits, origins, tags…"
              className="input-field pl-11"
            />
          </div>
          <div className="flex items-center gap-3">
            <SlidersHorizontal size={16} className="text-gray-400 flex-shrink-0" />
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="input-field w-auto"
            >
              <option value="popular">Most Popular</option>
              <option value="rating">Top Rated</option>
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
            </select>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-2 mb-8">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-brand-500 text-white shadow-fruit scale-105'
                  : 'bg-white text-gray-600 hover:bg-brand-50 hover:text-brand-600 shadow-sm'
              }`}
            >
              <span>{cat.emoji}</span> {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="font-display text-xl font-bold text-gray-700">No fruits found</h3>
            <p className="text-gray-400 mt-2">Try a different search or category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map(product => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
