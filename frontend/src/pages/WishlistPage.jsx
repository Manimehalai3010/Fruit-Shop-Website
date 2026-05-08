
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { products } from '../data/products';
import { useWishlist } from '../context/WishlistContext';
import ProductCard from '../components/ui/ProductCard';

export default function WishlistPage({ onAddToCart }) {
  const { wishlist } = useWishlist();
  const wishlisted = products.filter(p => wishlist.includes(p.id));

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-10">
          <Heart size={28} className="text-rose-500" />
          <div>
            <h1 className="section-title text-3xl">My Wishlist</h1>
            <p className="text-gray-400 text-sm">{wishlisted.length} item{wishlisted.length !== 1 ? 's' : ''} saved</p>
          </div>
        </div>

        {wishlisted.length === 0 ? (
          <div className="text-center py-24 flex flex-col items-center gap-5">
            <div className="text-7xl">🍃</div>
            <div>
              <h2 className="font-display text-2xl font-bold text-gray-700">Your wishlist is empty</h2>
              <p className="text-gray-400 mt-2">Save your favourite fruits for later!</p>
            </div>
            <Link to="/shop" className="btn-primary">Browse Shop</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishlisted.map(p => (
              <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
