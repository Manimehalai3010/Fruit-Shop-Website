import React from 'react';
import { stats } from '../../data/products';

export default function StatsSection() {
  return (
    <section className="bg-white py-12 border-y border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl mb-2">{stat.emoji}</div>
              <div className="font-display text-3xl font-bold text-gray-900">
                {stat.value}
              </div>
              <div className="text-sm text-green-600 font-medium mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}