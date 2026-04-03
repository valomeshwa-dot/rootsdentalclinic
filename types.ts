import { LucideIcon } from 'lucide-react';

export type Page = 'home' | 'about' | 'services' | 'contact';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface Testimonial {
  id: string;
  name: string;
  content: string;
  rating: number;
  role?: string;
}

export interface Feature {
  id: string;
  title: string;
  description?: string;
  icon: LucideIcon;
}

export interface Doctor {
  id: string;
  name: string;
  title: string;
  specialty: string;
  image: string;
}