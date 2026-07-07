import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Briefcase, Code2, Users2, Trophy, BrainCircuit, Star } from 'lucide-react';

const StatItem = ({ value, suffix, label, icon: Icon }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value, 10);
      if (isNaN(end)) {
        setDisplayValue(value);
        return;
      }
      
      const duration = 2000; // ms
      const increment = end / (duration / 16); // ~60fps
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(timer);
          setDisplayValue(end);
        } else {
          setDisplayValue(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center p-6 bg-white/40 border border-neutral-100/50 rounded-2xl md:bg-transparent md:border-0 md:p-0 md:rounded-none relative md:after:absolute md:after:right-0 md:after:top-1/4 md:after:h-1/2 md:after:w-[1px] md:after:bg-neutral-200/60 last:after:hidden">
      <div className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-600 mb-4 shadow-sm border border-neutral-100">
        <Icon className="w-5 h-5" />
      </div>
      <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight mb-2">
        {displayValue}
        <span className="text-neutral-500 font-medium">{suffix}</span>
      </h2>
      <p className="text-xs font-semibold tracking-wider uppercase text-neutral-500 max-w-[140px] leading-tight">
        {label}
      </p>
    </div>
  );
};

const Stats = () => {
  const statsData = [
    { value: "10", suffix: "+", label: "Projects Completed", icon: Briefcase },
    { value: "2", suffix: "+", label: "Years Experience", icon: Code2 },
    { value: "5", suffix: "+", label: "Technologies", icon: Star },
    { value: "100", suffix: "%", label: "Client Satisfaction", icon: Users2 },
    { value: "5", suffix: "+", label: "Hackathons", icon: Trophy }
  ];

  return (
    <section className="relative py-12 md:py-16 bg-white border-y border-neutral-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
          {statsData.map((stat, idx) => (
            <StatItem 
              key={idx}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              icon={stat.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
