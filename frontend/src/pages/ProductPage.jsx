// src/pages/ProductPage.jsx
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, ShoppingCart, Minus, Plus, MapPin, Star, Tag } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { formatPrice, calcDiscount } from '../utils/helpers';
import StarRating from '../components/ui/StarRating';
import ProductCard from '../components/ui/ProductCard';

export default function ProductPage({ onAddToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === Number(id));
  const [qty, setQty] = useState(1);

  const { addItem, items, updateQty: cartUpdate } = useCart();
  const { toggle, isWishlisted } = useWishlist();

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 pt-20">
        <div className="text-6xl">😢</div>
        <h1 className="font-display text-2xl font-bold">Product not found</h1>
        <Link to="/shop" className="btn-primary">Back to Shop</Link>
      </div>
    );
  }

  const discount = calcDiscount(product.originalPrice, product.price);
  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  const cartItem = items.find(i => i.id === product.id);

  const handleAddToCart = () => {
    if (cartItem) {
      cartUpdate(product.id, cartItem.qty + qty);
    } else {
      for (let i = 0; i < qty; i++) addItem(product);
    }
    onAddToCart?.(product);
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-500 hover:text-brand-600 mb-8 transition-colors"
        >
          <ArrowLeft size={16} /> Back
        </button>

        {/* Product Detail */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Image */}
          <div className={`relative rounded-4xl bg-gradient-to-br ${product.color} aspect-square flex items-center justify-center overflow-hidden shadow-fruit`}>
            <span className="text-[12rem] animate-float">{product.emoji}</span>
            {!product.inStock && (
              <div className="absolute inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-600">Out of Stock</span>
              </div>
            )}
            {discount > 0 && (
              <span className="absolute top-5 left-5 badge bg-green-500 text-white text-sm px-4 py-1.5">
                {discount}% OFF
              </span>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className={`badge ${product.badgeColor}`}>{product.badge}</span>
                {product.tags.map(tag => (
                  <span key={tag} className="badge bg-gray-100 text-gray-600">#{tag}</span>
                ))}
              </div>
              <h1 className="font-display text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center gap-3 mb-4">
                <StarRating rating={product.rating} />
                <span className="font-semibold text-gray-700">{product.rating}</span>
                <span className="text-gray-400 text-sm">({product.reviews} reviews)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <MapPin size={14} className="text-brand-500" />
                Origin: <span className="font-medium text-gray-700">{product.origin}</span>
              </div>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="font-display text-4xl font-bold text-gray-900">{formatPrice(product.price)}</span>
              <span className="text-gray-400">/ {product.unit}</span>
              {product.originalPrice && (
                <span className="text-xl text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
              )}
            </div>

            {/* Qty + Add */}
            {product.inStock ? (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-4 py-3">
                  <button onClick={() => setQty(q => Math.max(1, q - 1))} className="text-gray-500 hover:text-brand-600 transition-colors">
                    <Minus size={16} />
                  </button>
                  <span className="w-8 text-center font-bold text-lg">{qty}</span>
                  <button onClick={() => setQty(q => q + 1)} className="text-gray-500 hover:text-brand-600 transition-colors">
                    <Plus size={16} />
                  </button>
                </div>
                <button onClick={handleAddToCart} className="btn-primary flex-1 justify-center text-base py-4">
                  <ShoppingCart size={18} /> Add to Cart — {formatPrice(product.price * qty)}
                </button>
                <button
                  onClick={() => toggle(product.id)}
                  className={`p-4 rounded-2xl border-2 transition-all duration-200 ${
                    isWishlisted(product.id)
                      ? 'border-rose-400 bg-rose-50 text-rose-500'
                      : 'border-gray-200 hover:border-rose-300 text-gray-400 hover:text-rose-400'
                  }`}
                >
                  <Heart size={20} fill={isWishlisted(product.id) ? 'currentColor' : 'none'} />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <div className="flex-1 bg-gray-100 text-gray-500 text-center py-4 rounded-2xl font-semibold">
                  Currently Out of Stock
                </div>
                <button
                  onClick={() => toggle(product.id)}
                  className="btn-secondary py-4 px-5"
                >
                  <Heart size={18} /> Wishlist
                </button>
              </div>
            )}

            <div className="bg-brand-50 rounded-2xl p-4 text-sm text-brand-700 font-medium">
              🚚 Free delivery on orders above ₹499 · Same-day if ordered before 2 PM
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <section>
            <h2 className="section-title text-2xl mb-6">You might also like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map(p => (
                <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
