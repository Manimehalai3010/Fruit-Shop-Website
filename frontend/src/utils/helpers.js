// src/utils/helpers.js

export const formatPrice = (price) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);

export const calcDiscount = (original, price) =>
  original ? Math.round(((original - price) / original) * 100) : 0;

export const cn = (...classes) => classes.filter(Boolean).join(' ');

export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

export const slugify = (str) =>
  str.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
