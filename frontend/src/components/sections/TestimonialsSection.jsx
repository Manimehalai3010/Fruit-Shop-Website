
import React from 'react';
import { testimonials } from '../../data/products';
import StarRating from '../ui/StarRating';

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-500 font-semibold text-sm uppercase tracking-wider mb-2">💬 Customer Love</p>
          <h2 className="section-title">What Our Customers Say</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map(t => (
            <div key={t.id} className="card p-6 flex flex-col gap-4">
              <StarRating rating={t.rating} />
              <p className="text-gray-600 text-sm leading-relaxed flex-1 italic">"{t.comment}"</p>
              <div className="flex items-center gap-3 pt-2 border-t border-gray-50">
                <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-white text-xs font-bold`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-sm text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role} · {t.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
