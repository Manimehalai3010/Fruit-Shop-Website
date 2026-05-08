// src/pages/CheckoutPage.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/helpers';

const DELIVERY_FEE = 49;
const FREE_DELIVERY_THRESHOLD = 499;

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [placed, setPlaced] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', address: '', pincode: '', payment: 'cod' });

  const delivery = totalPrice >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
  const grandTotal = totalPrice + delivery;

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = e => {
    e.preventDefault();
    setPlaced(true);
    clearCart();
  };

  if (placed) {
    return (
      <main className="min-h-screen bg-gray-50 pt-24 pb-16 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-green-500" />
          </div>
          <h1 className="font-display text-3xl font-bold text-gray-900 mb-3">Order Placed! 🎉</h1>
          <p className="text-gray-500 mb-8">
            Thank you for your order, {form.name}! We'll deliver your fresh fruits within 2 hours.
            A confirmation has been sent to <strong>{form.email}</strong>.
          </p>
          <Link to="/" className="btn-primary">Back to Home</Link>
        </div>
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-gray-50 pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="font-display text-2xl font-bold text-gray-700 mb-2">Nothing to checkout</h2>
          <Link to="/shop" className="btn-primary mt-4 inline-block">Go Shopping</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-500 hover:text-brand-600 mb-8 transition-colors">
          <ArrowLeft size={16} /> Back to Cart
        </button>
        <h1 className="section-title text-3xl mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
            {/* Delivery Info */}
            <div className="bg-white rounded-3xl p-6 shadow-card">
              <h2 className="font-display font-bold text-lg mb-5">Delivery Information</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Full Name *</label>
                  <input name="name" value={form.name} onChange={handleChange} required className="input-field mt-1" placeholder="Your name" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Phone *</label>
                  <input name="phone" value={form.phone} onChange={handleChange} required className="input-field mt-1" placeholder="+91 98765 43210" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Email *</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} required className="input-field mt-1" placeholder="you@example.com" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Delivery Address *</label>
                  <textarea name="address" value={form.address} onChange={handleChange} required className="input-field mt-1 resize-none" rows={3} placeholder="House/Flat, Street, Area, City" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Pincode *</label>
                  <input name="pincode" value={form.pincode} onChange={handleChange} required className="input-field mt-1" placeholder="625020" />
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="bg-white rounded-3xl p-6 shadow-card">
              <h2 className="font-display font-bold text-lg mb-5">Payment Method</h2>
              <div className="space-y-3">
                {[
                  { value: 'cod', label: '💵 Cash on Delivery', desc: 'Pay when your order arrives' },
                  { value: 'upi', label: '📱 UPI / QR Code', desc: 'Pay via Google Pay, PhonePe, Paytm' },
                  { value: 'card', label: '💳 Credit / Debit Card', desc: 'Visa, Mastercard, RuPay' },
                ].map(opt => (
                  <label key={opt.value} className={`flex items-center gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all ${form.payment === opt.value ? 'border-brand-400 bg-brand-50' : 'border-gray-200 hover:border-gray-300'}`}>
                    <input type="radio" name="payment" value={opt.value} checked={form.payment === opt.value} onChange={handleChange} className="accent-brand-500" />
                    <div>
                      <p className="font-semibold text-sm">{opt.label}</p>
                      <p className="text-xs text-gray-400">{opt.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <button type="submit" className="btn-primary w-full justify-center text-base py-4">
              Place Order — {formatPrice(grandTotal)}
            </button>
          </form>

          {/* Order Summary */}
          <div className="bg-white rounded-3xl p-6 shadow-card h-fit sticky top-24">
            <h2 className="font-display font-bold text-lg mb-5">Order Summary</h2>
            <div className="space-y-3 max-h-64 overflow-y-auto scrollbar-hide mb-4">
              {items.map(item => (
                <div key={item.id} className="flex items-center gap-3">
                  <span className="text-2xl">{item.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{item.name}</p>
                    <p className="text-xs text-gray-400">x{item.qty} {item.unit}</p>
                  </div>
                  <span className="text-sm font-semibold">{formatPrice(item.price * item.qty)}</span>
                </div>
              ))}
            </div>
            <div className="border-t pt-4 space-y-2 text-sm">
              <div className="flex justify-between text-gray-500">
                <span>Subtotal</span><span>{formatPrice(totalPrice)}</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>Delivery</span>
                <span className={delivery === 0 ? 'text-green-600 font-semibold' : ''}>
                  {delivery === 0 ? 'FREE 🎉' : formatPrice(delivery)}
                </span>
              </div>
              <div className="flex justify-between font-bold text-base pt-2 border-t">
                <span>Total</span><span className="text-brand-600">{formatPrice(grandTotal)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
