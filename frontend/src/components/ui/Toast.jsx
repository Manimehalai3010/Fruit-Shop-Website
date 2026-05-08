
import React from 'react';
import { CheckCircle, AlertCircle, X } from 'lucide-react';

const ICONS = {
  success: <CheckCircle size={16} className="text-green-500 flex-shrink-0" />,
  error:   <AlertCircle size={16} className="text-red-500 flex-shrink-0" />,
  info:    <AlertCircle size={16} className="text-blue-500 flex-shrink-0" />,
};

export function ToastContainer({ toasts, removeToast }) {
  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-2 max-w-xs w-full">
      {toasts.map(t => (
        <div
          key={t.id}
          className="flex items-center gap-3 bg-white border border-gray-100 shadow-xl rounded-2xl px-4 py-3 animate-slide-up"
        >
          {ICONS[t.type] || ICONS.success}
          <p className="text-sm font-medium text-gray-800 flex-1">{t.message}</p>
          <button onClick={() => removeToast(t.id)} className="text-gray-300 hover:text-gray-500 transition-colors">
            <X size={14} />
          </button>
        </div>
      ))}
    </div>
  );
}
