import React, { useState, useEffect } from 'react';
import { Menu, X, Stethoscope } from 'lucide-react';
import { Button } from './ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { name: string; page: Page }[] = [
    { name: 'Home', page: 'home' },
    { name: 'About Us', page: 'about' },
    { name: 'Services', page: 'services' },
    { name: 'Contact', page: 'contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-white py-4'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div 
              className="flex items-center gap-2.5 cursor-pointer"
              onClick={() => onNavigate('home')}
            >
              <div className="bg-medical-500 rounded-lg p-2 text-white">
                <Stethoscope className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold text-slate-900 leading-tight">Roots Dental Clinic</span>
                <span className="text-[10px] sm:text-xs font-medium text-brandTeal-500 tracking-wider uppercase tracking-widest">Advanced Dental Care</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button 
                  key={link.name} 
                  onClick={() => onNavigate(link.page)}
                  className={`text-sm font-medium transition-colors ${
                    currentPage === link.page 
                      ? 'text-medical-600 font-semibold' 
                      : 'text-slate-600 hover:text-medical-500'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="text-right hidden xl:block">
                <p className="text-xs text-slate-500 font-medium">Open Daily</p>
                <p className="text-[10px] font-bold text-slate-900 leading-none">9:00 AM – 9:00 PM</p>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="border-medical-200 text-medical-600 hover:bg-medical-50 gap-2"
                onClick={() => window.location.href = 'tel:+919819147774'}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                Call: 98191 47774
              </Button>
              <Button onClick={onBookClick} variant="primary" size="sm">
                Book Appointment
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="lg:hidden p-2 text-slate-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[72px] left-0 right-0 bg-white z-40 border-b border-slate-100 shadow-lg lg:hidden overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <button 
                  key={link.name} 
                  onClick={() => {
                    onNavigate(link.page);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-base font-medium py-3 border-b border-slate-50 text-left ${
                    currentPage === link.page ? 'text-medical-600' : 'text-slate-700'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <div className="flex flex-col gap-3 mt-2">
                 <div className="flex justify-between items-center bg-slate-50 p-3 rounded-lg">
                    <span className="text-sm text-slate-500">Today's Hours</span>
                    <span className="text-sm font-bold text-slate-900">9:00 AM – 9:00 PM</span>
                 </div>
                 <Button onClick={() => { onBookClick(); setIsMobileMenuOpen(false); }} fullWidth>
                  Book Appointment
                </Button>
                 <Button 
                   variant="outline" 
                   fullWidth 
                   onClick={() => window.location.href = 'tel:+919819147774'}
                 >
                   Call: 98191 47774
                 </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};