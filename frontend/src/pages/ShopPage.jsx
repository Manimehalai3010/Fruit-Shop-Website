import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import { categories } from '../data/products';
import { useProducts } from '../hooks/useProducts';

export default function ShopPage({ onAddToCart }) {
  const {
    filtered,
    search,
    setSearch,
    activeCategory,
    setActiveCategory,
    sortBy,
    setSortBy,
  } = useProducts();

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-green-50 to-orange-50 pt-24 pb-20 overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative mb-14">
        
        {/* Blur Background */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-200/30 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-orange-200/20 blur-3xl rounded-full" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-[40px] shadow-xl overflow-hidden">

            <div className="grid lg:grid-cols-2 gap-10 items-center p-8 md:p-14">

              {/* LEFT */}
              <div>

                <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-semibold mb-6">
                  <span className="text-lg">🍃</span>
                  Fresh Fruits Delivered Daily
                </div>

                <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight">
                  Freshness You Can
                  <span className="text-green-600 italic"> Taste</span>
                </h1>

                <p className="text-gray-600 text-lg leading-relaxed mt-6 max-w-xl">
                  Discover premium seasonal fruits sourced directly from trusted farms across India.
                  Fresh, juicy, and delivered to your doorstep within hours.
                </p>

                {/* STATS */}
                <div className="flex flex-wrap gap-6 mt-8">

                  <div className="bg-white rounded-2xl px-5 py-4 shadow-md">
                    <h3 className="text-2xl font-bold text-gray-900">
                      50+
                    </h3>
                    <p className="text-sm text-gray-500">
                      Fresh Varieties
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl px-5 py-4 shadow-md">
                    <h3 className="text-2xl font-bold text-gray-900">
                      10K+
                    </h3>
                    <p className="text-sm text-gray-500">
                      Happy Customers
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl px-5 py-4 shadow-md">
                    <h3 className="text-2xl font-bold text-gray-900">
                      4.9★
                    </h3>
                    <p className="text-sm text-gray-500">
                      Top Rated
                    </p>
                  </div>

                </div>
              </div>

              {/* RIGHT */}
              <div className="hidden lg:flex justify-center relative">

                <div className="relative w-[400px] h-[400px]">

                  {/* Main Circle */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-orange-200 rounded-full shadow-2xl flex items-center justify-center">
                    <span className="text-[10rem] animate-bounce">
                      🥭
                    </span>
                  </div>

                  {/* Floating Fruits */}
                  <div className="absolute -top-5 left-10 w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center text-4xl animate-float">
                    🍓
                  </div>

                  <div className="absolute top-10 -right-5 w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center text-4xl animate-float animation-delay-200">
                    🍊
                  </div>

                  <div className="absolute bottom-10 -left-6 w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center text-4xl animate-float animation-delay-400">
                    🍉
                  </div>

                  <div className="absolute -bottom-4 right-12 w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center text-4xl animate-float animation-delay-600">
                    🫐
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SHOP CONTENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* SEARCH + FILTER */}
        <div className="bg-white rounded-3xl shadow-lg p-5 mb-8 flex flex-col lg:flex-row gap-5 lg:items-center lg:justify-between">

          {/* Search */}
          <div className="relative flex-1 max-w-xl">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search fruits, categories, origins..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 bg-gray-50"
            />
          </div>

          {/* Sort */}
          <div className="flex items-center gap-3">
            <SlidersHorizontal size={18} className="text-gray-400" />

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-5 py-4 rounded-2xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <option value="popular">Most Popular</option>
              <option value="rating">Top Rated</option>
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
            </select>
          </div>

        </div>

        {/* CATEGORY TABS */}
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-3 mb-10">

          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 whitespace-nowrap px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-green-500 text-white shadow-xl scale-105'
                  : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-600 shadow-md'
              }`}
            >
              <span className="text-lg">{cat.emoji}</span>
              {cat.label}
            </button>
          ))}

        </div>

        {/* EMPTY STATE */}
        {filtered.length === 0 ? (
          <div className="bg-white rounded-[40px] shadow-lg py-24 text-center">

            <div className="text-7xl mb-5">
              🔍
            </div>

            <h3 className="text-3xl font-bold text-gray-800 mb-3">
              No Fruits Found
            </h3>

            <p className="text-gray-500 text-lg">
              Try another category or search keyword.
            </p>

          </div>
        ) : (
          <>
            {/* TITLE */}
            <div className="flex items-center justify-between mb-8">

              <div>
                <h2 className="text-3xl font-black text-gray-900">
                  Popular Fruits
                </h2>

                <p className="text-gray-500 mt-2">
                  Showing {filtered.length} fresh products
                </p>
              </div>

              <div className="hidden md:flex items-center gap-2 bg-white px-5 py-3 rounded-2xl shadow-md">
                <span className="text-xl">🚚</span>
                <p className="text-sm font-medium text-gray-700">
                  Same Day Delivery Available
                </p>
              </div>

            </div>

            {/* PRODUCT GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

              {filtered.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                />
              ))}

            </div>
          </>
        )}
      </section>
    </main>
  );
}