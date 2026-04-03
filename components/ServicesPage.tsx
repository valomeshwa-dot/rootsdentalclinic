import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Zap, Smile, Stethoscope, HeartPulse, Microscope, Syringe, ClipboardCheck, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

interface ServicesPageProps {
  onBookClick: () => void;
}

const dentalServices = [
  { title: "Dental Checkup & Consultation", desc: "Comprehensive examination and digital diagnostics for early detection.", icon: Stethoscope },
  { title: "Teeth Cleaning & Polishing", desc: "Professional scaling to remove plaque and keep your smile healthy.", icon: Smile },
  { title: "Root Canal Treatment", desc: "Painless, single-sitting treatments using advanced rotary endodontics.", icon: Activity },
  { title: "Dental Fillings", desc: "Natural-looking composite restorations to treat cavities effectively.", icon: ClipboardCheck },
  { title: "Dental Implants", desc: "Permanent, high-quality solutions for missing tooth replacement.", icon: Zap },
  { title: "Gum Treatment", desc: "Specialized care for healthy gums and treatment of periodontal diseases.", icon: HeartPulse },
  { title: "Cosmetic Dentistry", desc: "Transform your smile with advanced aesthetic procedures.", icon: Smile },
  { title: "Veneers", desc: "Thin, custom-made shells designed to cover the front surface of teeth.", icon: ClipboardCheck },
  { title: "Smile Makeover", desc: "Tailored combination of procedures for a perfect aesthetic smile.", icon: Zap },
];

export const ServicesPage: React.FC<ServicesPageProps> = ({ onBookClick }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Dental Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="bg-medical-100 p-3 rounded-2xl mb-4">
              <Smile className="h-8 w-8 text-medical-600" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Our Specialized Treatments</h2>
            <p className="text-slate-600 mt-4 max-w-2xl">
              At Roots Dental Clinic, we offer a comprehensive range of dental services using modern technology and a gentle approach.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dentalServices.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-medical-500/5 transition-all duration-300"
              >
                <div className="bg-medical-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="h-7 w-7 text-medical-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-medical-500/10 blur-[120px] -z-0"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-20">Our Care Journey</h2>
          
          <div className="hidden md:flex justify-between relative max-w-5xl mx-auto">
            {/* Connecting Line */}
            <div className="absolute top-10 left-0 right-0 h-1 bg-slate-800 -z-0"></div>
            
            {[
              { step: 1, title: "Consultation", desc: "Digital Diagnostics" },
              { step: 2, title: "Clear Plan", desc: "Detailed Explanation" },
              { step: 3, title: "Treatment", desc: "Painless Experience" },
              { step: 4, title: "Healthy Smile", desc: "Long-term Care" },
            ].map((item, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center w-48">
                <div className="w-20 h-20 rounded-2xl bg-medical-500 rotate-45 flex items-center justify-center shadow-[0_0_30px_rgba(14,165,233,0.3)] mb-8 transition-transform hover:rotate-[135deg] duration-500">
                  <span className="-rotate-45 text-2xl font-bold">{item.step}</span>
                </div>
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Mobile Vertical Process */}
          <div className="md:hidden space-y-12 pl-6 border-l-2 border-slate-800 ml-2">
             {[
               { step: 1, title: "Consultation", desc: "Digital Diagnostics" },
               { step: 2, title: "Clear Plan", desc: "Detailed Explanation" },
               { step: 3, title: "Treatment", desc: "Painless Experience" },
               { step: 4, title: "Healthy Smile", desc: "Long-term Care" },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-[35px] top-0 w-12 h-12 rounded-xl bg-medical-500 flex items-center justify-center font-bold shadow-lg">
                  {item.step}
                </div>
                <div className="pl-6 pt-1">
                  <h3 className="font-bold text-xl mb-1">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-24 text-center">
            <Button onClick={onBookClick} size="lg" className="px-12 py-8 text-xl shadow-medical-500/20">
              Start Your Care Journey
            </Button>
            <p className="text-slate-500 mt-6 font-medium italic">Instant WhatsApp confirmation in 10 mins</p>
          </div>
        </div>
      </section>
    </div>
  );
};