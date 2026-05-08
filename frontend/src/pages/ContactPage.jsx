
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const FAQ = [
  { q: 'What are your delivery hours?', a: 'Mon–Sat: 7 AM – 8 PM | Sunday: 8 AM – 5 PM. Orders before 2 PM get same-day delivery.' },
  { q: 'Is there a minimum order amount?', a: 'No minimum order! However, delivery is free on orders above ₹499.' },
  { q: 'How fresh are the fruits?', a: 'All fruits are sourced within 24–48 hours of delivery. We use cold-chain logistics to preserve quality.' },
  { q: 'What if I receive damaged or unripe fruits?', a: 'We offer a 100% replacement or full refund guarantee. Just send us a photo within 2 hours of delivery.' },
  { q: 'Do you offer bulk/corporate orders?', a: 'Yes! We cater to restaurants, offices, and events. Contact us at hello@frescofruits.in for pricing.' },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = e => { e.preventDefault(); setSent(true); };

  return (
   <main className="min-h-screen bg-gray-50 pt-32 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h1 className="section-title mb-3">Get in Touch 🍊</h1>
          <p className="section-subtitle">Have a question, feedback, or bulk order? We'd love to hear from you.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info */}
          <div className="space-y-4">
            {[
              { icon: <MapPin size={20} />, title: 'Our Location', value: '42, Anna Nagar, Madurai – 625020, Tamil Nadu', color: 'bg-brand-100 text-brand-600' },
              { icon: <Phone size={20} />, title: 'Phone', value: '+91 98765 43210', color: 'bg-green-100 text-green-600' },
              { icon: <Mail size={20} />, title: 'Email', value: 'hello@frescofruits.in', color: 'bg-blue-100 text-blue-600' },
              { icon: <Clock size={20} />, title: 'Working Hours', value: 'Mon–Sat 7 AM – 8 PM\nSun 8 AM – 5 PM', color: 'bg-purple-100 text-purple-600' },
            ].map((info, i) => (
              <div key={i} className="card p-5 flex items-start gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${info.color}`}>
                  {info.icon}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{info.title}</p>
                  <p className="text-gray-500 text-sm mt-0.5 whitespace-pre-line">{info.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 card p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-10">
                <CheckCircle size={48} className="text-green-500" />
                <h3 className="font-display text-2xl font-bold text-gray-900">Message Sent!</h3>
                <p className="text-gray-500">We'll get back to you within 24 hours.</p>
                <button onClick={() => setSent(false)} className="btn-secondary">Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} required className="input-field mt-1" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Email *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required className="input-field mt-1" placeholder="you@example.com" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Subject *</label>
                  <input name="subject" value={form.subject} onChange={handleChange} required className="input-field mt-1" placeholder="How can we help?" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Message *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required className="input-field mt-1 resize-none" rows={5} placeholder="Tell us more…" />
                </div>
                <button type="submit" className="btn-primary w-full justify-center">
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="section-title text-2xl mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-3">
            {FAQ.map((item, i) => (
              <div key={i} className="card overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {item.q}
                  <span className={`text-brand-500 transition-transform duration-200 text-xl ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-50">
                    <p className="pt-4">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
