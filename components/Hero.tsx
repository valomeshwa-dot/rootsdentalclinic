import React, { useRef } from 'react';
import { Button } from './ui/Button';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { CalendarCheck, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const px = (e.clientX - left) / width;
    const py = (e.clientY - top) / height;
    
    mouseX.set((px - 0.5) * 40);
    mouseY.set((py - 0.5) * 40);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const invX = useTransform(x, (v) => -v);
  const invY = useTransform(y, (v) => -v);

  const gridX = useTransform(x, (v) => v * 0.2);
  const gridY = useTransform(y, (v) => v * 0.2);

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative pt-8 pb-12 lg:pt-16 lg:pb-24 overflow-hidden bg-gradient-to-br from-white via-medical-50/30 to-brandTeal-50/20"
    >
      {/* Subtle Grid Pattern */}
      <motion.div 
        style={{ x: gridX, y: gridY, backgroundImage: 'radial-gradient(#0056b3 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        className="absolute inset-[-10%] opacity-[0.05] pointer-events-none -z-20"
      />

      {/* Dynamic Background Elements */}
      <motion.div 
        style={{ x, y }}
        className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-medical-200/20 rounded-full blur-[100px] -z-10 pointer-events-none"
      />
      <motion.div 
        style={{ x: invX, y: invY }}
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brandTeal-200/20 rounded-full blur-[120px] -z-10 pointer-events-none"
      />

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          style={{ 
            x: useTransform(x, (v) => v * (i + 1) * 0.1),
            y: useTransform(y, (v) => v * (i + 1) * 0.1),
          }}
          className="absolute w-2 h-2 bg-medical-400/20 rounded-full blur-[1px] -z-10 pointer-events-none hidden lg:block"
          initial={{ 
            top: `${Math.random() * 100}%`, 
            left: `${Math.random() * 100}%` 
          }}
        />
      ))}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-medical-50 border border-medical-100 text-medical-700 text-[10px] sm:text-xs font-semibold mb-4 sm:mb-6">
              Advanced Dental Care with a Gentle Touch in Chembur
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-4 sm:mb-6 tracking-tight">
              Roots Dental <br className="hidden lg:block"/>
              <span className="text-medical-500">Clinic.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Experience patient-focused dental care with modern technology. 
              We combine clinical excellence with a gentle touch to ensure your comfort.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button onClick={onBookClick} size="lg" className="w-full sm:w-auto min-w-[200px] shadow-medical-500/25">
                Book Instant Appointment
              </Button>
              <div className="flex items-center gap-4 text-sm font-medium text-slate-500">
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-5 h-5 text-brandTeal-500" />
                  <span>Widely Trusted</span>
                </div>
                <div className="hidden sm:flex items-center gap-1">
                  <CalendarCheck className="w-5 h-5 text-brandTeal-500" />
                  <span>No Waiting Time</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 relative w-full max-w-xl lg:max-w-none"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-medical-900/10 border-4 border-white">
              <img 
                src="/roots_dental_hero_1775214680390.png" 
                alt="Modern Clinic at Roots Dental Clinic" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-1000"
              />
            </div>
            
            {/* Background Decor */}
            <motion.div 
              style={{ x: invX, y: invY }}
              className="absolute -top-10 -right-10 w-64 h-64 bg-brandTeal-100/40 rounded-full blur-3xl -z-10"
            />
            <motion.div 
              style={{ x, y }}
              className="absolute -bottom-10 -left-10 w-64 h-64 bg-medical-100/40 rounded-full blur-3xl -z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};