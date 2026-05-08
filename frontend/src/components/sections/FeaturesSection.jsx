
import React from 'react';
import { deliveryFeatures } from '../../data/products';

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-500 font-semibold text-sm uppercase tracking-wider mb-2">Why FrescoFruits?</p>
          <h2 className="section-title">More Than Just Fresh Fruit</h2>
          <p className="section-subtitle mt-4 max-w-xl mx-auto">
            We're committed to bringing you the best — from the farm to your table.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {deliveryFeatures.map((f, i) => (
            <div
              key={i}
              className="group bg-white rounded-3xl p-7 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{f.icon}</div>
              <h3 className="font-display font-bold text-lg text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
