
import React from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../utils/helpers';

export default function CartDrawer({ open, onClose }) {
  const { items, updateQty, removeItem, totalPrice, clearCart } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl transition-transform duration-300 ease-in-out flex flex-col ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-brand-500" />
            <h2 className="font-display text-xl font-bold text-gray-900">Your Cart</h2>
            <span className="badge bg-brand-100 text-brand-700">{items.length} items</span>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <div className="text-6xl">🛒</div>
              <div>
                <p className="font-semibold text-gray-700">Your cart is empty</p>
                <p className="text-sm text-gray-400 mt-1">Add some fresh fruits to get started!</p>
              </div>
              <button onClick={onClose} className="btn-primary text-sm">
                Browse Shop
              </button>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="flex items-center gap-4 p-3 bg-gray-50 rounded-2xl">
                {/* Emoji */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl flex-shrink-0`}>
                  {item.emoji}
                </div>

                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-gray-900 truncate">{item.name}</p>
                  <p className="text-xs text-gray-400">{formatPrice(item.price)} / {item.unit}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateQty(item.id, item.qty - 1)}
                      className="w-6 h-6 bg-white border border-gray-200 rounded-lg flex items-center justify-center hover:bg-brand-50 transition-colors"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="text-sm font-semibold w-5 text-center">{item.qty}</span>
                    <button
                      onClick={() => updateQty(item.id, item.qty + 1)}
                      className="w-6 h-6 bg-white border border-gray-200 rounded-lg flex items-center justify-center hover:bg-brand-50 transition-colors"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <span className="font-bold text-sm text-brand-600">{formatPrice(item.price * item.qty)}</span>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-gray-300 hover:text-rose-500 transition-colors"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-gray-100 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-500 text-sm">Subtotal</span>
              <span className="font-bold text-lg text-gray-900">{formatPrice(totalPrice)}</span>
            </div>
            <p className="text-xs text-gray-400 text-center">Free delivery on orders above ₹499 🎉</p>
            <Link
              to="/checkout"
              onClick={onClose}
              className="btn-primary w-full justify-center text-base"
            >
              Proceed to Checkout
            </Link>
            <button
              onClick={clearCart}
              className="w-full text-sm text-gray-400 hover:text-rose-500 transition-colors"
            >
              Clear Cart
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
