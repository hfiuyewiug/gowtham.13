import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Code2, GraduationCap, Clock } from 'lucide-react';

const JourneyAndAchievements = () => {
  const versionJourney = [
    {
      version: "v1.1",
      period: "2024",
      title: "Weekend Explore v1.1",
      stage: "Initial Launch",
      description: "Initial version of the product with the core Weekend Explore experience.",
      status: "Completed"
    },
    {
      version: "v1.2",
      period: "2024",
      title: "Weekend Explore v1.2",
      stage: "UI Refinement",
      description: "Improved features, refined the UI, and enhanced the overall user experience.",
      status: "Completed"
    },
    {
      version: "v1.3",
      period: "2025 - Present",
      title: "Weekend Explore v1.3",
      stage: "Currently Building",
      description: "Current development version focused on improving the platform, adding better experiences, and expanding Weekend Explore.",
      status: "Currently Building"
    }
  ];

  return (
    <section id="experience" className="py-24 bg-neutral-50/50 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Weekend Explore Product Journey */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-600"></span>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-500">Product Journey</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 mb-10">
              Weekend Explore Timeline
            </h2>

            {/* Timeline */}
            <div className="relative pl-6 border-l-2 border-neutral-200/80 space-y-12 ml-2">
              {versionJourney.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline bullet */}
                  <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-neutral-900 shadow-sm flex items-center justify-center">
                    <span className={`w-1.5 h-1.5 rounded-full ${item.status === 'Currently Building' ? 'bg-violet-600 animate-ping' : 'bg-neutral-950'}`}></span>
                  </span>

                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-block px-3 py-1 bg-white border border-neutral-100 rounded-full text-xs font-semibold text-neutral-500 shadow-sm">
                      {item.period}
                    </span>
                    {item.status === 'Currently Building' && (
                      <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-violet-50 border border-violet-100 text-[9px] font-bold uppercase tracking-wider text-violet-600">
                        <span className="w-1 h-1 rounded-full bg-violet-600 animate-pulse"></span>
                        Currently Building
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-neutral-900 mb-1">
                    {item.title}
                  </h3>
                  <h4 className="text-xs font-bold text-violet-600 uppercase tracking-wider mb-3">
                    {item.stage}
                  </h4>
                  <p className="text-sm text-neutral-500 font-normal leading-relaxed max-w-xl">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT: Education & Hackathon details */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Education Card */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-600"></span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-500">Education</span>
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-3xl bg-white border border-neutral-100/80 shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center shrink-0 mt-0.5">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-wider">Academic Profile</span>
                    <h3 className="text-base font-bold text-neutral-900 mt-1 mb-1 leading-snug">
                      Computer Science and Engineering – Artificial Intelligence and Machine Learning (CSE-AIML)
                    </h3>
                    <p className="text-sm font-semibold text-neutral-700 mb-1">
                      2nd Year Engineering Student
                    </p>
                    <p className="text-xs text-neutral-500 font-medium">
                      NIAT &bull; Yenepoya University &bull; Mangaluru, Karnataka
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Hackathons Detail Card */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-600"></span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-500">Hackathon Experience</span>
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-3xl bg-white border border-neutral-100/80 shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-wider">Learning & Development</span>
                    <h3 className="text-base font-bold text-neutral-900 mt-1 mb-2">
                      2 Hackathons Participated
                    </h3>
                    <p className="text-xs text-neutral-500 font-normal leading-relaxed">
                      Participated in 2 hackathons, focused on learning, rapid problem-solving, and gaining real-world development experience.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default JourneyAndAchievements;
