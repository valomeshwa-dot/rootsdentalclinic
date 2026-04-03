import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Heart, Award, Users } from 'lucide-react';
import { Button } from './ui/Button';

export const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section className="relative py-12 md:py-16 bg-gradient-to-r from-medical-600 to-medical-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/medical-icons.png')] opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Roots Dental Clinic
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-medical-100 text-base md:text-lg max-w-2xl mx-auto"
          >
            Providing modern and patient-focused dental care in Chembur, Mumbai with advanced technology and a gentle touch.
          </motion.p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-medical-500"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-medical-50 rounded-full">
                  <Shield className="h-6 w-6 text-medical-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Ethical Care</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Roots Dental Clinic in Chembur, Mumbai provides modern and patient-focused dental care. We use advanced technology and focus on clear communication without pushing unnecessary treatments.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-brandTeal-500"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-brandTeal-50 rounded-full">
                  <Heart className="h-6 w-6 text-brandTeal-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Patient Comfort</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Patients appreciate our gentle approach and comfortable treatment environment. We focus on clear explanations of procedures to ensure you feel informed and relaxed.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Dr. Menaz Thakkar</h2>
            <div className="h-1 w-20 bg-brandTeal-500 mx-auto mt-4"></div>
          </div>
          
          <div className="flex justify-center">
            <div className="max-w-md w-full group relative overflow-hidden rounded-2xl bg-white shadow-lg border border-slate-100">
              <div className="aspect-[4/5] overflow-hidden bg-slate-50">
                <img 
                  src="/dr_menaz_thakkar_1775214863538.png" 
                  alt="Dr. Menaz Thakkar" 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent p-6 text-white pt-24">
                <h3 className="text-2xl font-bold text-white">Dr. Menaz Thakkar</h3>
                <p className="text-brandTeal-300 font-medium">BDS, MDS - Lead Dentist</p>
                <p className="text-slate-300 text-sm mt-1">Known for gentle treatment & modern techniques</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 text-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-16">
                <div className="flex flex-col items-center">
                    <span className="text-3xl md:text-4xl font-bold text-medical-600">5,000+</span>
                    <span className="text-slate-500 font-medium text-sm md:text-base">Patients Smiles</span>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex items-center gap-1">
                        <Award className="h-6 w-6 md:h-8 md:w-8 text-brandTeal-500" />
                        <span className="text-3xl md:text-4xl font-bold text-slate-900">4.9/5</span>
                    </div>
                    <span className="text-slate-500 font-medium text-sm md:text-base">Google Rating</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-3xl md:text-4xl font-bold text-medical-600">Chembur</span>
                    <span className="text-slate-500 font-medium text-sm md:text-base">Mumbai Location</span>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};