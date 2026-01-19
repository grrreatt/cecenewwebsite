'use client';

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* WhatsApp Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20BA5A] transition-all flex items-center justify-center animate-pulse hover:animate-none"
        aria-label="WhatsApp Chat"
      >
        <MessageCircle className="w-7 h-7" />
      </button>

      {/* Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-lg shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-2">
          <div className="bg-[#25D366] text-white p-4 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg">Cecevents Support</h3>
              <p className="text-sm opacity-90">Typically replies instantly</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-1 rounded"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 space-y-4">
            <p className="text-gray-700 text-sm">
              👋 Hi! How can we help you today?
            </p>
            <a
              href="https://wa.me/919654513231?text=Hello%20Cecevents%2C%20I%20need%20assistance"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#25D366] text-white py-3 rounded-lg font-semibold text-center hover:bg-[#20BA5A] transition-colors"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
}
