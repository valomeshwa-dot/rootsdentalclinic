import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { Page } from '../../types';

interface BreadcrumbsProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ currentPage, onNavigate }) => {
  const pageName = currentPage.charAt(0).toUpperCase() + currentPage.slice(1);

  return (
    <div className="bg-slate-50 border-b border-slate-100 py-3">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center text-sm text-slate-500">
          <button 
            onClick={() => onNavigate('home')} 
            className="flex items-center hover:text-medical-600 transition-colors"
          >
            <Home className="h-4 w-4 mr-1" />
            Home
          </button>
          
          <ChevronRight className="h-4 w-4 mx-2 text-slate-400" />
          
          <span className="font-semibold text-medical-600 pointer-events-none">
            {pageName === 'Services' ? 'Detailed Services' : pageName}
          </span>
        </nav>
      </div>
    </div>
  );
};