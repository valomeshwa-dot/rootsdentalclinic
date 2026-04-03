import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Features } from './components/Features';
import { Services } from './components/Services';
import { Doctors } from './components/Doctors';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { StickyMobileCTA } from './components/StickyMobileCTA';
import { About } from './components/About';
import { ServicesPage } from './components/ServicesPage';
import { Contact } from './components/Contact';
import { Breadcrumbs } from './components/ui/Breadcrumbs';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleOpenBooking = () => {
    const message = encodeURIComponent("Hi Roots Dental Clinic, I'd like to book an appointment with Dr. Menaz Thakkar.");
    window.open(`https://wa.me/919819147774?text=${message}`, '_blank');
  };
  
  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'about':
        return <About />;
      case 'services':
        return <ServicesPage onBookClick={handleOpenBooking} />;
      case 'contact':
        return <Contact onBookClick={handleOpenBooking} />;
      case 'home':
      default:
        return (
          <>
            <Hero onBookClick={handleOpenBooking} />
            <Stats />
            <Services />
            <Doctors onBookClick={handleOpenBooking} />
            <Features />
            <Testimonials />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen font-sans bg-white selection:bg-brandTeal-100 selection:text-medical-900">
      <Navbar 
        currentPage={currentPage}
        onNavigate={handleNavigate} 
        onBookClick={handleOpenBooking} 
      />
      
      <main className="pt-[72px] lg:pt-[88px]">
        {currentPage !== 'home' && (
          <Breadcrumbs currentPage={currentPage} onNavigate={handleNavigate} />
        )}
        {renderPage()}
      </main>

      <Footer onNavigate={handleNavigate} onBookClick={handleOpenBooking} />
      
      <StickyMobileCTA onBookClick={handleOpenBooking} />
    </div>
  );
};

export default App;