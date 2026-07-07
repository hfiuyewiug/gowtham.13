import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code2 } from 'lucide-react';

const CurrentlyBuilding = () => {
  return (
    <section className="py-24 bg-white border-t border-neutral-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Currently Building (Interactive Dashboard) */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-600"></span>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-500">Currently Building</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 mb-8">
              Under Active Development
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-neutral-950 text-white border border-neutral-900 shadow-xl relative overflow-hidden"
            >
              {/* Glow Backdrop */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 rounded-full filter blur-2xl"></div>

              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs font-bold text-violet-400 uppercase tracking-wider">Product Roadmap</span>
                  <h3 className="text-xl font-bold text-white mt-1">Weekend Explore</h3>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse"></span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-300">Active Build</span>
                </div>
              </div>

              <p className="text-sm text-neutral-400 font-normal leading-relaxed mb-8">
                A travel discovery platform focused on helping users explore destinations and discover places for their weekend journeys.
              </p>

              {/* Progress bars list */}
              <div className="space-y-6">
                {/* v1.1 */}
                <div>
                  <div className="flex items-center justify-between text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                    <span className="text-white font-semibold">Weekend Explore v1.1</span>
                    <span className="text-violet-400">90% Done</span>
                  </div>
                  <div className="w-full h-2.5 bg-neutral-900 rounded-full overflow-hidden border border-neutral-800 p-0.5">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '90%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-violet-600 to-indigo-500 rounded-full"
                    />
                  </div>
                </div>

                {/* v1.2 */}
                <div>
                  <div className="flex items-center justify-between text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                    <span className="text-white font-semibold">Weekend Explore v1.2</span>
                    <span className="text-violet-400">20% Done</span>
                  </div>
                  <div className="w-full h-2.5 bg-neutral-900 rounded-full overflow-hidden border border-neutral-800 p-0.5">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '20%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-violet-600 to-indigo-500 rounded-full"
                    />
                  </div>
                </div>

                {/* v1.3 */}
                <div>
                  <div className="flex items-center justify-between text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                    <span className="text-white font-semibold">Weekend Explore v1.3</span>
                    <span className="text-violet-400">20% Done</span>
                  </div>
                  <div className="w-full h-2.5 bg-neutral-900 rounded-full overflow-hidden border border-neutral-800 p-0.5">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '20%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-violet-600 to-indigo-500 rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 pt-6 mt-6 border-t border-neutral-900">
                {["HTML", "CSS", "JavaScript", "React"].map((t) => (
                  <span key={t} className="px-3 py-1 text-[9px] font-bold text-neutral-400 bg-neutral-900 rounded-full border border-neutral-800">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Hackathons Participated */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-600"></span>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-500">Hackathons</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 mb-8">
              Hackathons Participated
            </h2>

            {/* Timeline Cards */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="p-6 bg-white border border-neutral-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-200 flex gap-4 items-start"
              >
                <div className="w-12 h-12 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Code2 className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-base font-bold text-neutral-900">
                      Gaining Experience
                    </h3>
                    <span className="text-[10px] font-bold text-neutral-400 bg-neutral-50 border border-neutral-100 px-2 py-0.5 rounded-full whitespace-nowrap">
                      2 Participated
                    </span>
                  </div>
                  <p className="text-sm text-neutral-500 font-normal leading-relaxed">
                    Participated in 2 hackathons, focused on learning, rapid problem-solving, and gaining real-world development experience.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CurrentlyBuilding;
