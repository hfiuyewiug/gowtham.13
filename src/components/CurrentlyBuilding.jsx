import React from 'react';
import { motion } from 'framer-motion';
import { Play, Sparkles, Trophy, Cpu, Calendar } from 'lucide-react';

const CurrentlyBuilding = () => {
  const activeProjects = [
    {
      title: "QuickBus 2.0",
      type: "Mobile & Web App",
      status: "In Progress",
      description: "Re-engineering the KSRTC finder to support offline-first caching, regional language search, and crowdsourced live bus coordinates.",
      progress: 75,
      tech: ["React Native", "SQLite", "Node.js"]
    }
  ];

  const hackathons = [
    {
      title: "Smart India Hackathon (SIH)",
      role: "Team Lead & Full Stack Developer",
      project: "Arogya AI - Voice-first healthcare assistant",
      achievement: "Top 10 Finalist",
      year: "2024"
    },
    {
      title: "VTU State Level Hackathon",
      role: "Lead Developer",
      project: "QuickBus - KSRTC Timing Predictor",
      achievement: "1st Place Winner",
      year: "2023"
    },
    {
      title: "HackFest Karnataka",
      role: "Frontend Developer",
      project: "Weekend Explore Route Optimizer",
      achievement: "Best UI/UX Award",
      year: "2022"
    }
  ];

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

            {activeProjects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-neutral-950 text-white border border-neutral-900 shadow-xl relative overflow-hidden"
              >
                {/* Glow Backdrop */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 rounded-full filter blur-2xl"></div>

                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-xs font-bold text-violet-400 uppercase tracking-wider">{project.type}</span>
                    <h3 className="text-xl font-bold text-white mt-1">{project.title}</h3>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse"></span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-300">{project.status}</span>
                  </div>
                </div>

                <p className="text-sm text-neutral-400 font-normal leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Progress bar */}
                <div className="mb-6">
                  <div className="flex items-center justify-between text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                    <span>Build Progress</span>
                    <span className="text-white">{project.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-neutral-900 rounded-full overflow-hidden border border-neutral-800">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${project.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-violet-600 to-indigo-500 rounded-full"
                    />
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-neutral-900">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 text-[9px] font-bold text-neutral-400 bg-neutral-900 rounded-full border border-neutral-800">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
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
              {hackathons.map((h, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-5 bg-white border border-neutral-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 flex gap-4 items-start"
                >
                  <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="text-sm font-bold text-neutral-900 truncate">
                        {h.title}
                      </h3>
                      <span className="text-[10px] font-bold text-neutral-400 bg-neutral-50 border border-neutral-100 px-2 py-0.5 rounded-full whitespace-nowrap">
                        {h.year}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-500 font-semibold mb-2">
                      Project: <span className="text-neutral-800">{h.project}</span>
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="inline-block px-2.5 py-0.5 bg-emerald-50 border border-emerald-100/50 rounded-full text-[9px] font-bold tracking-wider uppercase text-emerald-600 shadow-sm">
                        {h.achievement}
                      </span>
                      <span className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide">
                        {h.role}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CurrentlyBuilding;
