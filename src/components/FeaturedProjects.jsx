import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Compass, Bus, Scale, Activity } from 'lucide-react';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "Weekend Explore",
      description: "Tourism platform in Karnataka. Discover hidden gems, beautiful beaches, and historical spots with smart routes.",
      tags: ["React", "MongoDB", "Express.js"],
      color: "from-sky-500/10 via-blue-500/5 to-white",
      icon: Compass,
      iconColor: "text-blue-500",
      bgGlow: "bg-blue-400/10",
      link: "https://weekendexplore.example.com"
    },
    {
      id: 2,
      title: "QuickBus – KSRTC Finder",
      description: "Find KSRTC bus timings, routes, and real-time schedules easily. Optimized for mobile and offline accessibility.",
      tags: ["React", "Node.js", "Tailwind"],
      color: "from-amber-500/10 via-orange-500/5 to-white",
      icon: Bus,
      iconColor: "text-orange-500",
      bgGlow: "bg-orange-400/10",
      link: "https://quickbus.example.com"
    },
    {
      id: 3,
      title: "AI Legal Assistant – Zyrus",
      description: "Voice-first AI legal assistant providing smart legal guidance, document summarization, and consultation.",
      tags: ["React", "AI API", "Tailwind"],
      color: "from-indigo-500/10 via-violet-500/5 to-white",
      icon: Scale,
      iconColor: "text-indigo-500",
      bgGlow: "bg-indigo-400/10",
      link: "https://zyrus.example.com"
    },
    {
      id: 4,
      title: "Arogya AI",
      description: "Voice-first AI health assistant for rural India, supporting regional languages to bridge healthcare gaps.",
      tags: ["React", "AI", "Voice AI"],
      color: "from-emerald-500/10 via-teal-500/5 to-white",
      icon: Activity,
      iconColor: "text-emerald-500",
      bgGlow: "bg-emerald-400/10",
      link: "https://arogya.example.com"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-600"></span>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-500">Featured Projects</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900">
              Some of my recent work
            </h2>
          </div>
          
          <a 
            href="https://github.com/gowtham-n" 
            target="_blank" 
            rel="noreferrer"
            className="group flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-neutral-600 hover:text-neutral-900 transition-colors mt-4 md:mt-0"
          >
            <span>View All Projects</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group rounded-3xl border border-neutral-100 bg-neutral-50/50 overflow-hidden hover:border-neutral-200 transition-all duration-300 hover:shadow-xl hover:shadow-neutral-900/[0.02]"
            >
              {/* Card Header Illustration */}
              <div className={`h-48 md:h-56 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden border-b border-neutral-100`}>
                
                {/* Decorative background shape */}
                <div className={`absolute w-36 h-36 rounded-full ${project.bgGlow} filter blur-xl group-hover:scale-110 transition-transform duration-500`}></div>
                
                {/* Icon Container */}
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-md border border-neutral-100 z-10 group-hover:scale-105 transition-transform duration-300">
                  <project.icon className={`w-8 h-8 ${project.iconColor}`} />
                </div>

                {/* Diagonal Arrow Overlay */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white border border-neutral-100 flex items-center justify-center text-neutral-400 group-hover:text-neutral-900 group-hover:border-neutral-300 shadow-sm transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8 bg-white">
                <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-violet-600 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-500 font-normal leading-relaxed mb-6 h-12 overflow-hidden text-ellipsis line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 text-[10px] font-bold text-neutral-600 bg-neutral-100 rounded-full border border-neutral-200/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
