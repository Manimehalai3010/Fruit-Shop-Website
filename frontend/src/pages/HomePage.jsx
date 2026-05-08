// src/pages/HomePage.jsx
import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import StatsSection from '../components/sections/StatsSection';
import FeaturedProducts from '../components/sections/FeaturedProducts';
import FeaturesSection from '../components/sections/FeaturesSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import NewsletterSection from '../components/sections/NewsletterSection';

export default function HomePage({ onAddToCart }) {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <FeaturedProducts onAddToCart={onAddToCart} />
      <FeaturesSection />
      <TestimonialsSection />
      <NewsletterSection />
    </main>
  );
}
