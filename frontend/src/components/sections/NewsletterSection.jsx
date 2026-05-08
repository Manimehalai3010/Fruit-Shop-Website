// src/components/sections/NewsletterSection.jsx
import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-20 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,129,15,0.12),transparent_60%)]" />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-5xl mb-4">🍊</div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
          Stay Ripe & In the Loop
        </h2>
        <p className="text-gray-400 text-lg mb-8">
          Get seasonal fruit alerts, exclusive deals, and farm stories delivered to your inbox.
        </p>

        {submitted ? (
          <div className="bg-brand-500/10 border border-brand-500/30 rounded-2xl px-8 py-6 text-brand-300 font-medium">
            🎉 You're subscribed! Watch for fresh updates in your inbox.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="relative flex-1">
              <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full bg-gray-900 border border-gray-700 text-white placeholder-gray-500 rounded-xl pl-10 pr-4 py-3.5 text-sm focus:outline-none focus:border-brand-400 transition-colors"
                required
              />
            </div>
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe <ArrowRight size={16} />
            </button>
          </form>
        )}

        <p className="text-xs text-gray-600 mt-4">No spam, ever. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
