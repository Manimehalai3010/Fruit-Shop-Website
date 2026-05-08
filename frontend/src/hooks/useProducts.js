// src/hooks/useProducts.js
import { useState, useMemo } from 'react';
import { products } from '../data/products';

export const useProducts = () => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const filtered = useMemo(() => {
    let result = [...products];
    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.origin.toLowerCase().includes(q) ||
        p.tags.some(t => t.includes(q))
      );
    }
    switch (sortBy) {
      case 'price-asc':  result.sort((a, b) => a.price - b.price); break;
      case 'price-desc': result.sort((a, b) => b.price - a.price); break;
      case 'rating':     result.sort((a, b) => b.rating - a.rating); break;
      default: /* popular — keep original order */ break;
    }
    return result;
  }, [search, activeCategory, sortBy]);

  return { filtered, search, setSearch, activeCategory, setActiveCategory, sortBy, setSortBy };
};
