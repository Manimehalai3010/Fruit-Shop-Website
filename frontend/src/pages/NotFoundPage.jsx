
import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-hero-pattern flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl mb-4 animate-bounce-slow">🍋</div>
        <h1 className="font-display text-6xl font-bold text-gray-900 mb-3">404</h1>
        <p className="font-display text-2xl text-gray-700 mb-3">Page Not Found</p>
        <p className="text-gray-500 mb-8">Oops! Looks like this page got eaten. Let's find you something fresh.</p>
        <div className="flex gap-3 justify-center">
          <Link to="/" className="btn-primary">Go Home</Link>
          <Link to="/shop" className="btn-secondary">Browse Shop</Link>
        </div>
      </div>
    </main>
  );
}
