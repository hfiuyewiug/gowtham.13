import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Compass } from 'lucide-react';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "Weekend Explore",
      description: "A travel discovery platform focused on helping users explore destinations and discover places for their weekend journeys.",
      tags: ["Developer / Product Builder", "v1.3", "Currently Building"],
      color: "from-sky-500/10 via-blue-500/5 to-white",
      icon: Compass,
      iconColor: "text-blue-500",
      bgGlow: "bg-blue-400/10",
      link: "https://github.com/hfiuyewiug/gowtham.13"
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
              My featured product
            </h2>
          </div>
          
          <a 
            href="https://github.com/hfiuyewiug/gowtham.13" 
            target="_blank" 
            rel="noreferrer"
            className="group flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-neutral-600 hover:text-neutral-900 transition-colors mt-4 md:mt-0"
          >
            <span>View Code Repository</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Projects Grid (Centered single card) */}
        <div className="max-w-xl mx-auto">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group rounded-3xl border border-neutral-100 bg-neutral-50/50 overflow-hidden hover:border-neutral-200 transition-all duration-300 hover:shadow-xl hover:shadow-neutral-900/[0.02]"
            >
              <a href={project.link} target="_blank" rel="noreferrer" className="block">
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
                  <p className="text-sm text-neutral-500 font-normal leading-relaxed mb-6">
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
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
