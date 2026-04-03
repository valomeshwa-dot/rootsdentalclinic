import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Sunita Deshmukh",
    role: "Patient from Chembur",
    content: "Excellent facilities and great teamwork. Extremely competent dental care. Highly recommended for any dental procedure.",
    rating: 5
  },
  {
    id: 2,
    name: "Rajesh Khanna",
    role: "Regular Patient",
    content: "Dr Menaz Thakkar is soft spoken, patient and very skilled. She explains everything so clearly and makes you feel at ease.",
    rating: 5
  },
  {
    id: 3,
    name: "Anita Iyer",
    role: "Dental Implants Patient",
    content: "Very comfortable treatment experience and clear explanation of procedures. The clinic is spotless and the staff is very friendly.",
    rating: 5
  }
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-medical-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brandTeal-600 font-bold tracking-wider text-sm uppercase">Patient Stories</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            What Our Patients Say About Roots Dental Clinic
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200 border border-slate-100 relative">
            <Quote className="absolute top-8 left-8 h-12 w-12 text-medical-100" />
            
            <div className="relative z-10 min-h-[200px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="text-center"
                    >
                        <div className="flex justify-center gap-1 mb-6">
                            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                            ))}
                        </div>
                        <p className="text-xl md:text-2xl text-slate-700 font-medium italic mb-8 leading-relaxed">
                            "{testimonials[currentIndex].content}"
                        </p>
                        <div>
                            <h4 className="font-bold text-slate-900 text-lg">{testimonials[currentIndex].name}</h4>
                            <p className="text-slate-500 text-sm">{testimonials[currentIndex].role}</p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button 
                onClick={prev}
                className="p-3 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-medical-50 hover:text-medical-600 transition-colors shadow-sm"
            >
                <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
                onClick={next}
                className="p-3 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-medical-50 hover:text-medical-600 transition-colors shadow-sm"
            >
                <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};