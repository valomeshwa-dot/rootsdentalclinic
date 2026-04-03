import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-xl font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-500 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]";
  
  const variants = {
    primary: "bg-medical-500 text-white hover:bg-medical-600 shadow-lg shadow-medical-500/20 border border-transparent",
    secondary: "bg-medical-50 text-medical-700 hover:bg-medical-100 border border-transparent",
    outline: "border border-slate-200 bg-white hover:bg-slate-50 text-slate-700",
    ghost: "hover:bg-slate-100 text-slate-600",
    accent: "bg-brandTeal-400 text-white hover:bg-brandTeal-500 shadow-lg shadow-brandTeal-400/20 border border-transparent"
  };

  const sizes = {
    sm: "h-9 px-4 text-xs",
    md: "h-11 px-6 text-sm",
    lg: "h-14 px-8 text-base",
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <motion.button 
      whileTap={{ scale: 0.97 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
};