import React from 'react';
import { ShieldCheck, Monitor, Smile, Sparkles } from 'lucide-react';
import { Feature } from '../types';
import { motion } from 'framer-motion';

const features: Feature[] = [
  {
    id: '1',
    title: 'Sterilized Environment',
    description: 'We follow strict WHO sterilization protocols to ensure 100% safety.',
    icon: ShieldCheck
  },
  {
    id: '2',
    title: 'Modern Technology',
    description: 'Equipped with digital X-rays, intraoral cameras, and laser dentistry tools.',
    icon: Monitor
  },
  {
    id: '3',
    title: 'Painless Care',
    description: 'Advanced anesthesia techniques for a comfortable, anxiety-free experience.',
    icon: Smile
  },
  {
    id: '4',
    title: 'Transparent Pricing',
    description: 'No hidden costs. We provide detailed treatment plans upfront.',
    icon: Sparkles
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-medical-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brandTeal-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Ayush Dental Care?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We go beyond standard care to provide a premium, safe, and comfortable experience for every patient.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div 
              key={feature.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors"
            >
              <div className="h-12 w-12 rounded-lg bg-medical-500 text-white flex items-center justify-center mb-6 shadow-lg shadow-medical-500/30">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                  {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};