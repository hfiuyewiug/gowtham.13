import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import weekendExploreImg from '../assets/weekend_explore_mockup.jpg';
import aptfixImg from '../assets/aptfix_mockup.jpg';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "Weekend Explore",
      description: "Weekend Explore is a travel discovery platform that helps users easily discover interesting places and plan their weekend journeys.",
      tags: ["Developer / Product Builder", "v1.3", "Currently Building"],
      link: "https://weekend-explore.vercel.app/",
      image: weekendExploreImg
    },
    {
      id: 2,
      title: "AptFix",
      description: "AptFix — Apartment Issue Tracking & Maintenance Management System. A digital apartment issue tracking system designed to help residents report problems (electricity, water, maintenance) and track them until resolved.",
      tags: ["Developer / Product Builder", "Currently Building"],
      link: null,
      image: aptfixImg
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
              My featured products
            </h2>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, idx) => {
            const CardContent = (
              <div className="h-full flex flex-col">
                {/* Card Header Illustration */}
                <div className="h-56 md:h-64 relative overflow-hidden border-b border-neutral-100 bg-neutral-50 flex items-center justify-center">
                  
                  {/* Mockup Image */}
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500" 
                    draggable="false"
                  />

                  {/* Dark overlay for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/20 via-transparent to-transparent opacity-60"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-6 left-6 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-sm border border-neutral-100/50 shadow-sm z-20">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-600 animate-pulse"></span>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-neutral-600">Currently Building</span>
                  </div>

                  {/* Diagonal Arrow Overlay */}
                  {project.link && (
                    <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white border border-neutral-100 flex items-center justify-center text-neutral-400 group-hover:text-neutral-900 group-hover:border-neutral-300 shadow-sm transition-all duration-300 z-20">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 md:p-8 bg-white flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-violet-600 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-sm text-neutral-500 font-normal leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

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
              </div>
            );

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`group rounded-3xl border border-neutral-100 bg-neutral-50/50 overflow-hidden hover:border-neutral-200 transition-all duration-300 hover:shadow-xl hover:shadow-neutral-900/[0.02] ${
                  project.link ? 'cursor-pointer' : 'cursor-default'
                }`}
              >
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noreferrer" className="block h-full">
                    {CardContent}
                  </a>
                ) : (
                  <div className="h-full">
                    {CardContent}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;
