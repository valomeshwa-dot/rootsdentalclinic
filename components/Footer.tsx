import React from 'react';
import { MapPin, Phone, ArrowRight, Instagram } from 'lucide-react';
import { Button } from './ui/Button';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
  onBookClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onBookClick }) => {
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Roots+Dental+Clinic+Chembur+Mumbai";

  return (
    <footer id="footer" className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simplified Pre-Footer CTA */}
        <div className="bg-medical-700 rounded-2xl p-6 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 mb-16 md:mb-20 shadow-2xl">
            <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Book Your Dental Appointment Today</h2>
                <p className="text-medical-100 text-base md:text-lg">Experience gentle care at Roots Dental Clinic.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <Button onClick={onBookClick} variant="accent" size="lg" className="bg-brandTeal-400 hover:bg-brandTeal-500 text-white w-full sm:w-auto">
                    Message Us Now
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-white text-medical-700 border-white hover:bg-medical-50 border-2 w-full sm:w-auto"
                  onClick={() => window.location.href = 'tel:+919819147774'}
                >
                    Call Us: +91 98191 47774
                </Button>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 border-b border-slate-800 pb-12">
          
          {/* Brand & Description */}
          <div className="lg:col-span-4">
            <h3 className="text-2xl font-bold text-white mb-6">Roots Dental Clinic</h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Modern and patient-focused dental care in Chembur, Mumbai. 
              Advanced technology combined with a gentle touch for a comfortable treatment experience.
            </p>
            <div className="flex gap-4">
                <a 
                  href="https://rootsdentalclinic.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-800 p-3 rounded-full text-white hover:bg-medical-600 transition-colors"
                  aria-label="Website"
                >
                    <ArrowRight className="h-5 w-5" />
                </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><button onClick={() => onNavigate('about')} className="hover:text-medical-400 transition-colors text-left">About Us</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-medical-400 transition-colors text-left">Dr. Menaz Thakkar</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-medical-400 transition-colors text-left">Treatments</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-medical-400 transition-colors text-left">Contact</button></li>
            </ul>
          </div>

          {/* Contact & Map */}
          <div className="lg:col-span-6">
            <h4 className="text-white font-semibold mb-6">Visit Us</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-slate-400">
                        <MapPin className="h-5 w-5 text-medical-500 mt-1 shrink-0" />
                        <span className="text-xs">517, Waman Tukaram Patil Marg, Borla, Wadhwa, Chembur, Mumbai, Maharashtra 400071</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-medical-500 shrink-0" />
                        <span>+91 98191 47774</span>
                    </li>
                </ul>
                
                {/* Map Interactive Link */}
                <div 
                  className="w-full h-40 bg-slate-800 rounded-xl overflow-hidden relative group cursor-pointer"
                  onClick={() => window.open(mapsUrl, '_blank')}
                >
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-800 group-hover:bg-slate-700 transition-colors">
                        <div className="text-center">
                            <MapPin className="h-8 w-8 text-medical-500 mx-auto mb-2" />
                            <span className="text-xs font-medium text-white flex items-center gap-1">Open in Maps <ArrowRight className="h-3 w-3" /></span>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>

        <div className="pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Roots Dental Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};