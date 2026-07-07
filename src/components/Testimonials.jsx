import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "Gowtham is an excellent developer who delivers high-quality work on time. His problem-solving skills and dedication are truly impressive.",
      name: "Satish Kumar",
      role: "CEO",
      company: "InnovateTech",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150"
    },
    {
      id: 2,
      text: "Working with Gowtham was a great experience. He helped transform our legacy website into a modern, lightning-fast React application.",
      name: "Meera Nair",
      role: "Founder",
      company: "GreenSphere",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      {/* Decorative dots pattern */}
      <div className="absolute top-1/2 left-[5%] -translate-y-1/2 opacity-15 w-24 h-24 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-600"></span>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-500">Testimonials</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900">
            What clients say
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative bg-neutral-50 border border-neutral-100 rounded-3xl p-8 md:p-12 shadow-sm">
          {/* Quote Icon */}
          <div className="absolute -top-6 left-8 md:left-12 w-12 h-12 rounded-full bg-neutral-950 text-white flex items-center justify-center shadow-md">
            <Quote className="w-5 h-5" />
          </div>

          <div className="min-h-[140px] flex flex-col justify-between mt-4">
            {/* Testimonial Text */}
            <div className="relative overflow-hidden mb-8">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-neutral-600 text-lg md:text-xl font-medium italic leading-relaxed"
                >
                  "{testimonials[currentIndex].text}"
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Author details & Nav Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-neutral-200/50 pt-8">
              {/* Author profile */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-4"
                >
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-12 h-12 rounded-full object-cover border border-neutral-200"
                  />
                  <div>
                    <h4 className="text-base font-bold text-neutral-900 leading-tight">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mt-0.5">
                      {testimonials[currentIndex].role}, <span className="text-violet-600">{testimonials[currentIndex].company}</span>
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation arrows & dots */}
              <div className="flex items-center gap-6">
                {/* Dots indicator */}
                <div className="flex gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === idx ? 'bg-neutral-950 w-5' : 'bg-neutral-300'}`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Arrow Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="w-10 h-10 rounded-full border border-neutral-200 hover:border-neutral-400 bg-white text-neutral-600 hover:text-neutral-900 flex items-center justify-center transition-colors shadow-sm focus:outline-none"
                    aria-label="Previous testimonial"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-10 h-10 rounded-full border border-neutral-200 hover:border-neutral-400 bg-white text-neutral-600 hover:text-neutral-900 flex items-center justify-center transition-colors shadow-sm focus:outline-none"
                    aria-label="Next testimonial"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
