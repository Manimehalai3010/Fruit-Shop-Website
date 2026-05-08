// src/components/ui/ProductCard.jsx
import React from 'react';
import { Heart, ShoppingCart, Star, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { formatPrice, calcDiscount } from '../../utils/helpers';

export default function ProductCard({ product, onAddToCart }) {
  const { addItem, items } = useCart();
  const { toggle, isWishlisted } = useWishlist();
  const inCart = items.some(i => i.id === product.id);
  const discount = calcDiscount(product.originalPrice, product.price);

  const handleAdd = (e) => {
    e.preventDefault();
    addItem(product);
    onAddToCart?.(product);
  };

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="card group-hover:-translate-y-1 transition-all duration-300">
        {/* Image Area */}
        <div className={`relative h-44 bg-gradient-to-br ${product.color} flex items-center justify-center overflow-hidden`}>
          <span className="text-7xl group-hover:scale-110 transition-transform duration-500 animate-float">
            {product.emoji}
          </span>

          {/* Wishlist */}
          <button
            onClick={(e) => { e.preventDefault(); toggle(product.id); }}
            className={`absolute top-3 right-3 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-200 ${
              isWishlisted(product.id)
                ? 'bg-rose-500 text-white shadow-lg scale-110'
                : 'bg-white/80 text-gray-400 hover:text-rose-500'
            }`}
          >
            <Heart size={15} fill={isWishlisted(product.id) ? 'currentColor' : 'none'} />
          </button>

          {/* Badge */}
          <span className={`absolute top-3 left-3 badge ${product.badgeColor} text-xs`}>
            {product.badge}
          </span>

          {/* Discount */}
          {discount > 0 && (
            <span className="absolute bottom-3 left-3 badge bg-green-500 text-white">
              {discount}% OFF
            </span>
          )}

          {/* Out of Stock */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-white/60 backdrop-blur-sm flex items-center justify-center">
              <span className="font-semibold text-gray-600 text-sm bg-white px-3 py-1.5 rounded-full shadow">Out of Stock</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="font-display font-semibold text-gray-900 text-base leading-tight">{product.name}</h3>
            <div className="flex items-center gap-1 flex-shrink-0">
              <Star size={12} className="text-amber-400 fill-amber-400" />
              <span className="text-xs font-semibold text-gray-700">{product.rating}</span>
            </div>
          </div>

          <div className="flex items-center gap-1 text-xs text-gray-400 mb-3">
            <MapPin size={11} />
            <span>{product.origin}</span>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-bold text-lg text-gray-900">{formatPrice(product.price)}</span>
                <span className="text-xs text-gray-400">/{product.unit}</span>
              </div>
              {product.originalPrice && (
                <span className="text-xs text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
              )}
            </div>

            <button
              onClick={handleAdd}
              disabled={!product.inStock}
              className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl transition-all duration-200 ${
                inCart
                  ? 'bg-green-100 text-green-700 hover:bg-green-200'
                  : product.inStock
                  ? 'bg-brand-500 text-white hover:bg-brand-600 shadow-fruit'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            >
              <ShoppingCart size={13} />
              {inCart ? 'Added' : 'Add'}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
