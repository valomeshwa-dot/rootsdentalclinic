import React from 'react';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';

export const Doctors: React.FC<{ onBookClick: () => void }> = ({ onBookClick }) => {
  return (
    <section id="doctors" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full max-w-md lg:max-w-none"
          >
             <div className="relative">
                <div className="absolute inset-0 bg-medical-500 rounded-3xl rotate-6 opacity-10"></div>
                <div className="relative rounded-3xl overflow-hidden border border-slate-100 shadow-2xl bg-slate-50">
                    <img 
                      src="/dr_menaz_thakkar_1775214863538.png" 
                      alt="Dr. Menaz Thakkar" 
                      className="w-full h-auto object-cover min-h-[400px]"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 pt-24 text-white">
                        <p className="text-2xl font-bold">Dr. Menaz Thakkar</p>
                        <p className="text-medical-200">Lead Dentist & MDS Specialist</p>
                    </div>
                </div>
             </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 text-center lg:text-left"
          >
            <span className="text-brandTeal-600 font-semibold tracking-wider text-sm uppercase">Meet Our Expert</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6">
              Gentle Care, <br className="hidden sm:block"/> Professional Excellence
            </h2>
            <p className="text-base md:text-lg text-slate-600 mb-6 leading-relaxed">
              Roots Dental Clinic is led by Dr. Menaz Thakkar, known for her gentle treatment approach and clear explanations.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed text-sm md:text-base">
              Dr. Menaz focuses on modern techniques and patient comfort, ensuring that every patient feels informed and relaxed throughout their treatment journey in Chembur.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-8">
                <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-medical-50 flex items-center justify-center text-medical-600 font-bold shrink-0">15+</div>
                    <div className="text-left">
                        <p className="font-bold text-slate-900">Years Experience</p>
                        <p className="text-xs text-slate-500">In advanced dentistry</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-brandTeal-50 flex items-center justify-center text-brandTeal-600 font-bold shrink-0">5k+</div>
                    <div className="text-left">
                        <p className="font-bold text-slate-900">Happy Patients</p>
                        <p className="text-xs text-slate-500">Across Chembur, Mumbai</p>
                    </div>
                </div>
            </div>

            <Button onClick={onBookClick} size="lg" className="w-full sm:w-auto">Book Appointment with Dr. Menaz</Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};