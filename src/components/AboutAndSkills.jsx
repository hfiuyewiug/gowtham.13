import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, MapPin, Mail, Sparkles, Plus, Check } from 'lucide-react';

const AboutAndSkills = () => {
  const [copied, setCopied] = useState(false);
  const [showMoreSkills, setShowMoreSkills] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('yadhur689@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const mainSkills = [
    { name: 'HTML5', color: '#E34F26', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', color: '#1572B6', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', color: '#F7DF1E', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', color: '#61DAFB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', color: '#339933', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'MongoDB', color: '#47A248', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Tailwind CSS', color: '#06B6D4', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Git', color: '#F05032', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Python', color: '#3776AB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'SQL', color: '#00758F', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' }
  ];

  const extraSkills = [
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-head.svg' },
    { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' }
  ];

  return (
    <section id="about" className="py-24 bg-neutral-50/50 relative overflow-hidden">
      
      {/* Decorative backdrop mesh */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-neutral-200/20 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT CARD: About Me (Dark Theme Matching Image) */}
          <div className="lg:col-span-5 bg-neutral-950 text-white rounded-3xl p-8 md:p-10 shadow-xl border border-neutral-800 relative overflow-hidden h-full flex flex-col justify-between">
            {/* Background Monogram Glow */}
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-neutral-800/10 rounded-full filter blur-2xl"></div>

            <div>
              {/* Category Indicator */}
              <div className="flex items-center gap-2 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-400">About Me</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-snug mb-6">
                Building digital experiences that make an <span className="text-violet-400">impact.</span>
              </h2>

              {/* Description */}
              <p className="text-neutral-400 text-sm md:text-base font-normal leading-relaxed mb-8">
                I'm a passionate Full Stack Developer who loves turning ideas into real-world solutions. I specialize in building scalable, performant and user-friendly web applications.
              </p>

              {/* Information Grid */}
              <div className="space-y-4 mb-8">
                {/* Item: Name */}
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-neutral-500 uppercase tracking-wider font-semibold">Name</span>
                    <span className="text-sm font-medium text-neutral-200">Gowtham N</span>
                  </div>
                </div>

                {/* Item: Location */}
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-neutral-500 uppercase tracking-wider font-semibold">Location</span>
                    <span className="text-sm font-medium text-neutral-200">Mangalore, India</span>
                  </div>
                </div>

                {/* Item: Email */}
                <button 
                  onClick={copyEmail}
                  className="flex items-center gap-4 text-left w-full group hover:bg-neutral-900/50 p-1.5 rounded-xl -ml-1.5 transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 transition-colors group-hover:border-neutral-700">
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Mail className="w-4 h-4" />}
                  </div>
                  <div className="flex-1">
                    <span className="block text-[10px] text-neutral-500 uppercase tracking-wider font-semibold">Email</span>
                    <span className="text-sm font-medium text-neutral-200 group-hover:text-violet-400 transition-colors break-all">
                      yadhur689@gmail.com
                    </span>
                  </div>
                  <span className="text-[10px] text-neutral-600 group-hover:text-neutral-400 transition-colors pr-2 hidden sm:inline">
                    {copied ? 'Copied!' : 'Click to copy'}
                  </span>
                </button>

                {/* Item: Availability */}
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-neutral-500 uppercase tracking-wider font-semibold">Availability</span>
                    <span className="text-sm font-medium text-neutral-200">Open to opportunities</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl border border-neutral-800 hover:border-neutral-700 text-sm font-medium text-neutral-300 hover:text-white transition-all duration-300 mt-4 group"
            >
              <span>More About Me</span>
              <span className="text-neutral-500 group-hover:text-white transition-colors">→</span>
            </a>
          </div>

          {/* RIGHT CARD: My Skills (White Theme Matching Image) */}
          <div id="skills" className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-neutral-100/80 h-full flex flex-col justify-between">
            <div>
              {/* Category Indicator */}
              <div className="flex items-center gap-2 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-600"></span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-500">My Skills</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-snug text-neutral-900 mb-8">
                Technologies I work with
              </h2>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 mb-8">
                {mainSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex flex-col items-center justify-center p-4 rounded-2xl bg-neutral-50 border border-neutral-100 hover:border-neutral-200 transition-colors duration-200 shadow-sm relative group"
                  >
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className="w-10 h-10 mb-3 filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                    <span className="text-xs font-semibold text-neutral-700 group-hover:text-neutral-900 transition-colors text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Expandable Skills Drawer */}
            <div>
              <button 
                onClick={() => setShowMoreSkills(!showMoreSkills)}
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-violet-600 hover:text-violet-700 transition-colors py-2 focus:outline-none"
              >
                <span>{showMoreSkills ? "- Close technologies" : "+5 more technologies"}</span>
              </button>

              <AnimatePresence>
                {showMoreSkills && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mt-4 pt-4 border-t border-neutral-100"
                  >
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                      {extraSkills.map((skill) => (
                        <div 
                          key={skill.name}
                          className="flex flex-col items-center justify-center p-3 rounded-xl bg-neutral-50/50 border border-neutral-100 hover:border-neutral-200 transition-colors duration-200"
                        >
                          <img 
                            src={skill.icon} 
                            alt={skill.name} 
                            className="w-8 h-8 mb-2 filter grayscale hover:grayscale-0 transition-all duration-300"
                          />
                          <span className="text-[10px] font-semibold text-neutral-600">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutAndSkills;
