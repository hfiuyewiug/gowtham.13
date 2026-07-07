import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Trophy, Code2, Coffee, GraduationCap } from 'lucide-react';

const JourneyAndAchievements = () => {
  const journeyTimeline = [
    {
      period: "2024 - Present",
      role: "Freelance Developer",
      company: "Remote / Self-employed",
      description: "Building responsive, modern, and clean web applications for clients worldwide. Specialized in React, Node.js, and Tailwind."
    },
    {
      period: "2023 - 2024",
      role: "Full Stack Intern",
      company: "Tech Solutions",
      description: "Collaborated on production-level projects, improved backend integration capabilities, and designed frontend dashboards."
    },
    {
      period: "2022 - 2023",
      role: "Frontend Developer",
      company: "Web Studio",
      description: "Developed user interfaces, optimized web assets for speed and SEO, and collaborated with designers to translate Figma to code."
    }
  ];

  const milestones = [
    { value: "10+", label: "Projects Built", icon: Briefcase, color: "text-violet-600", bg: "bg-violet-50" },
    { value: "5+", label: "Hackathons", icon: Trophy, color: "text-amber-500", bg: "bg-amber-50" },
    { value: "20+", label: "Problems Solved", icon: Code2, color: "text-emerald-500", bg: "bg-emerald-50" },
    { value: "100+", label: "Coffee Cups", icon: Coffee, color: "text-rose-500", bg: "bg-rose-50" }
  ];

  return (
    <section id="experience" className="py-24 bg-neutral-50/50 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: My Journey */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-600"></span>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-500">My Journey</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 mb-10">
              My professional journey
            </h2>

            {/* Timeline */}
            <div className="relative pl-6 border-l-2 border-neutral-200/80 space-y-12 ml-2">
              {journeyTimeline.map((item, index) => (
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
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-900"></span>
                  </span>

                  <span className="inline-block px-3 py-1 bg-white border border-neutral-100 rounded-full text-xs font-semibold text-neutral-500 mb-3 shadow-sm">
                    {item.period}
                  </span>
                  <h3 className="text-lg font-bold text-neutral-900 mb-1">
                    {item.role}
                  </h3>
                  <h4 className="text-xs font-bold text-violet-600 uppercase tracking-wider mb-3">
                    {item.company}
                  </h4>
                  <p className="text-sm text-neutral-500 font-normal leading-relaxed max-w-xl">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT: Achievements & Education */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-600"></span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-500">Achievements</span>
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 mb-10">
                Milestones & Achievements
              </h2>

              {/* Achievements Grid */}
              <div className="grid grid-cols-2 gap-4">
                {milestones.map((milestone, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="p-6 rounded-2xl bg-white border border-neutral-100/80 shadow-sm flex flex-col items-start hover:shadow-md transition-shadow duration-300"
                  >
                    <div className={`w-10 h-10 rounded-xl ${milestone.bg} ${milestone.color} flex items-center justify-center mb-4`}>
                      <milestone.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-neutral-900 tracking-tight leading-none mb-1">
                      {milestone.value}
                    </h3>
                    <p className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      {milestone.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Added: Education Section (Premium Detail) */}
            <div className="p-6 rounded-2xl bg-white border border-neutral-100/80 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-wider uppercase text-neutral-400">Education</span>
                <h3 className="text-sm font-bold text-neutral-900 mt-1 mb-0.5">
                  Bachelor of Engineering in Computer Science
                </h3>
                <p className="text-xs font-medium text-neutral-500">
                  Visvesvaraya Technological University (VTU)
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default JourneyAndAchievements;
