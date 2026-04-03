import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

interface StickyMobileCTAProps {
  onBookClick: () => void;
}

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ onBookClick }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] z-50 md:hidden pb-safe">
      <div className="flex divide-x divide-slate-100">
        <a 
          href="tel:+919819147774" 
          className="flex-1 flex flex-col items-center justify-center py-3 active:bg-slate-50"
        >
          <Phone className="h-5 w-5 text-medical-600 mb-1" />
          <span className="text-xs font-semibold text-slate-700">Call Now</span>
        </a>
        <button 
          onClick={onBookClick} 
          className="flex-1 flex flex-col items-center justify-center py-3 active:bg-slate-50"
        >
          <MessageCircle className="h-5 w-5 text-brandTeal-600 mb-1" />
          <span className="text-xs font-semibold text-slate-700">WhatsApp</span>
        </button>
        <button 
          onClick={onBookClick} 
          className="flex-[1.5] bg-medical-600 text-white font-semibold text-sm flex items-center justify-center"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};