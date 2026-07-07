import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [state, handleSubmit] = useForm('mbdvelyy');

  // Reset local form values when Formspree submission succeeds
  useEffect(() => {
    if (state.succeeded) {
      setFormData({ name: '', email: '', message: '' });
    }
  }, [state.succeeded]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-neutral-50/50 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Let's Work Together */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-600"></span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-500">Let's Work Together</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 leading-snug mb-8">
                Have an idea?<br />Let's turn it into something real.
              </h2>

              {/* Info Items */}
              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-white border border-neutral-100 flex items-center justify-center text-neutral-500 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[9px] text-neutral-400 font-bold uppercase tracking-wider">Email Me</span>
                    <a href="mailto:yadhur689@gmail.com" className="text-sm font-semibold text-neutral-800 hover:text-violet-600 transition-colors">
                      yadhur689@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-white border border-neutral-100 flex items-center justify-center text-neutral-500 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[9px] text-neutral-400 font-bold uppercase tracking-wider">Based In</span>
                    <span className="text-sm font-semibold text-neutral-800">
                      Mangalore, India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Interactive Mini CTA Card */}
            <div className="p-6 rounded-2xl bg-white border border-neutral-100 shadow-sm flex items-center justify-between group">
              <div>
                <h4 className="text-sm font-bold text-neutral-900 mb-0.5">Let's Talk</h4>
                <p className="text-xs text-neutral-500 font-medium">Quick consultation & code design</p>
              </div>
              <a 
                href="mailto:yadhur689@gmail.com" 
                className="w-10 h-10 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white flex items-center justify-center shadow-sm transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* RIGHT: Modern Formspree Integrated Form */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-3xl border border-neutral-100/80 shadow-lg"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Field: Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-5 py-3.5 rounded-xl border border-neutral-200 focus:border-neutral-900 bg-neutral-50/30 text-sm outline-none transition-colors duration-200"
                  />
                  <ValidationError 
                    prefix="Name" 
                    field="name" 
                    errors={state.errors} 
                    className="text-red-500 text-xs mt-1 block"
                  />
                </div>

                {/* Field: Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="w-full px-5 py-3.5 rounded-xl border border-neutral-200 focus:border-neutral-900 bg-neutral-50/30 text-sm outline-none transition-colors duration-200"
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email" 
                    errors={state.errors} 
                    className="text-red-500 text-xs mt-1 block"
                  />
                </div>

                {/* Field: Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What would you like to build?"
                    className="w-full px-5 py-3.5 rounded-xl border border-neutral-200 focus:border-neutral-900 bg-neutral-50/30 text-sm outline-none resize-none transition-colors duration-200"
                  />
                  <ValidationError 
                    prefix="Message" 
                    field="message" 
                    errors={state.errors} 
                    className="text-red-500 text-xs mt-1 block"
                  />
                </div>

                {/* Success Alert */}
                {state.succeeded && (
                  <motion.div 
                    initial={{ opacity: 0, y: 5 }} 
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold"
                  >
                    Thank you! Your message was sent successfully. Gowtham Nataraj will get back to you shortly.
                  </motion.div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-4 px-6 rounded-xl bg-neutral-950 text-white font-medium hover:bg-neutral-800 transition-colors shadow-sm disabled:opacity-50 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  {state.submitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </>
                  )}
                </button>

              </form>
            </motion.div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Contact;
