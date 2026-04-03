import React from 'react';
import { ChevronRight, Stethoscope, Smile, Activity, Zap, HeartPulse } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    id: 'consultation',
    title: 'Dental Checkup',
    description: 'Comprehensive consultation and advanced digital diagnostics for early detection.',
    icon: Stethoscope,
    color: 'bg-blue-50 text-blue-600'
  },
  {
    id: 'cleaning',
    title: 'Teeth Cleaning',
    description: 'Professional scaling and polishing to remove plaque and keep your smile bright.',
    icon: Smile,
    color: 'bg-teal-50 text-teal-600'
  },
  {
    id: 'rct',
    title: 'Root Canal',
    description: 'Painless single-sitting root canal treatments using the latest rotary endodontics.',
    icon: Activity,
    color: 'bg-indigo-50 text-indigo-600'
  },
  {
    id: 'implants',
    title: 'Dental Implants',
    description: 'Permanent tooth replacement solutions with high-quality titanium implants.',
    icon: Zap,
    color: 'bg-amber-50 text-amber-600'
  },
  {
    id: 'cosmetic',
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with advanced veneers, whitening, and smile design.',
    icon: HeartPulse,
    color: 'bg-pink-50 text-pink-600'
  },
  {
    id: 'smile',
    title: 'Smile Makeover',
    description: 'Tailored cosmetic procedures to give you the perfect aesthetic smile.',
    icon: Activity,
    color: 'bg-brandTeal-50 text-brandTeal-600'
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brandTeal-600 font-semibold tracking-wider text-sm uppercase">World Class Treatments</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Comprehensive Care Under One Roof
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-2xl p-5 sm:p-8 shadow-sm hover:shadow-xl hover:shadow-medical-500/5 transition-all duration-300 border border-slate-100"
            >
              <div className={`h-12 w-12 sm:h-14 sm:w-14 rounded-xl ${service.color} flex items-center justify-center mb-4 sm:mb-6 transition-transform group-hover:scale-110`}>
                <service.icon className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-medical-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};