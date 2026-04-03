import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Clock, ChevronDown, ChevronUp, ArrowRight, Instagram } from 'lucide-react';
import { Button } from './ui/Button';

interface ContactProps {
  onBookClick: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onBookClick }) => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Roots+Dental+Clinic+Chembur+Mumbai";

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const faqs = [
    { q: "Do you accept insurance?", a: "Yes, we accept various dental insurance plans. Please contact our front desk on WhatsApp to verify your specific coverage." },
    { q: "Is there parking available?", a: "Yes, parking is available near the building premises in Chembur." },
    { q: "Do you offer emergency care?", a: "Yes, we prioritize dental emergencies. Please call us at +91 98191 47774 immediately." },
    { q: "How do I book an appointment?", a: "You can book directly via WhatsApp for instant confirmation. Click 'Chat on WhatsApp' below." }
  ];

  const operationalHours = [
    { day: "Monday", time: "9:00 AM – 9:00 PM" },
    { day: "Tuesday", time: "9:00 AM – 9:00 PM" },
    { day: "Wednesday", time: "9:00 AM – 9:00 PM" },
    { day: "Thursday", time: "9:00 AM – 9:00 PM" },
    { day: "Friday", time: "9:00 AM – 9:00 PM" },
    { day: "Saturday", time: "9:00 AM – 9:00 PM" },
    { day: "Sunday", time: "9:00 AM – 9:00 PM" },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-slate-900 py-8 md:py-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Get in Touch</h1>
        <p className="text-slate-400 text-sm md:text-base">Roots Dental Clinic - Advanced Care with a Gentle Touch.</p>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Direct WhatsApp Concierge */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-medical-100 flex flex-col justify-center text-center">
            <div className="bg-brandTeal-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-10 w-10 text-brandTeal-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">WhatsApp Concierge</h2>
            <p className="text-slate-600 mb-8 leading-relaxed max-w-sm mx-auto">
              Skip the forms. Chat directly with our front desk for instant booking or pricing inquiries at <strong>+91 98191 47774</strong>.
            </p>
            <div className="space-y-4">
                <Button 
                  onClick={onBookClick} 
                  size="lg" 
                  fullWidth 
                  className="bg-brandTeal-500 hover:bg-brandTeal-600 py-8 text-xl"
                >
                    Chat on WhatsApp
                </Button>
                <div className="flex justify-center gap-4">
                    <a 
                      href="https://rootsdentalclinic.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-600 hover:text-medical-600 font-medium transition-colors"
                    >
                        <ArrowRight className="h-5 w-5" />
                        <span>Visit Website</span>
                    </a>
                </div>
                <p className="text-sm text-slate-500 font-medium italic">We typically respond in under 10 minutes.</p>
            </div>
            
            <div className="mt-12 pt-8 border-t border-slate-100">
               <h3 className="font-bold text-slate-900 mb-4">Clinic Operational Hours</h3>
               <div className="space-y-2">
                  {operationalHours.map((h, i) => (
                    <div key={i} className="flex justify-between text-sm text-slate-600">
                      <span>{h.day}</span>
                      <span>{h.time}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          {/* Details & Map */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-medical-50 p-6 rounded-xl">
                <Phone className="h-6 w-6 text-medical-600 mb-3" />
                <h3 className="font-bold text-slate-900 mb-1">Emergency Call</h3>
                <a href="tel:+919819147774" className="text-slate-700 hover:text-medical-600 transition-colors font-bold text-lg">+91 98191 47774</a>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <Clock className="h-6 w-6 text-slate-700 mb-3" />
                <h3 className="font-bold text-slate-900 mb-1">Location Arrival</h3>
                <p className="text-slate-600 text-sm">~25 mins from main Noida hubs</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl sm:col-span-2 border-l-4 border-medical-500">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-medical-600 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Detailed Address</h3>
                    <p className="text-slate-600 text-sm font-medium leading-relaxed">
                      517, Waman Tukaram Patil Marg, Borla, Wadhwa, Chembur, Mumbai, Maharashtra 400071
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Interaction */}
            <div 
              className="w-full h-48 bg-slate-200 rounded-xl overflow-hidden border border-slate-300 relative group cursor-pointer"
              onClick={() => window.open(mapsUrl, '_blank')}
            >
               <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500 bg-slate-100 group-hover:bg-slate-50 transition-colors">
                  <MapPin className="h-10 w-10 mb-2 text-medical-500 animate-bounce" />
                  <span className="font-bold text-slate-900">Get Directions to Roots Dental Clinic</span>
                  <span className="text-xs">Chembur, Mumbai</span>
               </div>
            </div>
            
            {/* FAQ Accordion */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Patient FAQ</h3>
              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-lg overflow-hidden">
                    <button 
                      onClick={() => toggleAccordion(idx)}
                      className="w-full flex justify-between items-center p-4 bg-white hover:bg-slate-50 transition-colors text-left"
                    >
                      <span className="font-medium text-slate-800">{faq.q}</span>
                      {activeAccordion === idx ? <ChevronUp className="h-4 w-4 text-slate-500" /> : <ChevronDown className="h-4 w-4 text-slate-500" />}
                    </button>
                    {activeAccordion === idx && (
                      <div className="p-4 bg-slate-50 border-t border-slate-200 text-sm text-slate-600 leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};