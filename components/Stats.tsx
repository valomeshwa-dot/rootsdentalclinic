import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { label: 'Happy Patients', value: 5000, suffix: '+' },
  { label: 'Google Rating', value: 4, suffix: '.9' },
  { label: 'Reviews', value: 193, suffix: '+' },
  { label: 'Experience', value: 15, suffix: 'y+' },
];

const Counter: React.FC<{ value: number; suffix: string }> = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepTime = duration / steps;
      const increment = value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-medical-600">
      {count}{suffix}
    </span>
  );
};

export const Stats: React.FC = () => {
  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x md:divide-slate-100">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center px-4"
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="text-sm md:text-base text-slate-500 font-medium mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};