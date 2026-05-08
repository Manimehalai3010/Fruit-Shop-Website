import React from 'react';
import { stats } from '../../data/products';

export default function StatsSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-500 to-emerald-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 text-center shadow-lg hover:scale-105 transition duration-300"
            >
              
              {/* Emoji */}
              <div className="text-5xl mb-4">
                {stat.emoji}
              </div>

              {/* Value */}
              <div className="font-display text-4xl font-bold text-white">
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-sm text-white/80 font-medium mt-2">
                {stat.label}
              </div>

            </div>
          ))}
          
        </div>

      </div>
    </section>
  );
}