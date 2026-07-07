import React, { useState, useEffect } from 'react';
import { Mail, ArrowUpRight, Download, Briefcase, Code2, Users, Trophy, Star } from 'lucide-react';
import portraitImg from '../assets/portrait.png';

// Inline Custom SVGs for brand icons to bypass Lucide package issues
const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" rx="1" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" />
  </svg>
);

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX - window.innerWidth / 2) / 60;
      const y = (clientY - window.innerHeight / 2) / 60;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { value: "10+", label: "Projects Completed", icon: Briefcase },
    { value: "2+", label: "Years Experience", icon: Code2 },
    { value: "5+", label: "Technologies", icon: Users },
    { value: "100%", label: "Client Satisfaction", icon: Trophy },
    { value: "5+", label: "Hackathons", icon: Star }
  ];

  const technologies = [
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' }
  ];

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-12 flex items-center overflow-hidden bg-gradient-to-b from-white via-[#fcfcfc] to-neutral-50/50">
      
      {/* Background Dots Pattern */}
      <div className="absolute top-24 left-[10%] opacity-20 w-24 h-24 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Left Column: Details + Embedded Stats + Embedded Tech */}
        <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1 pt-4 lg:pt-0">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-100 bg-white shadow-sm w-fit mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[10px] font-bold tracking-wider uppercase text-neutral-500">Available for new opportunities</span>
          </div>

          {/* Intro Text */}
          <span className="text-neutral-400 font-medium text-base mb-1 tracking-wide block">
            Hello, I'm
          </span>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-neutral-900 tracking-tight leading-none mb-3">
            Gowtham N
          </h1>

          {/* Role */}
          <h3 className="text-neutral-500 font-bold uppercase tracking-[0.25em] text-xs md:text-sm mb-6 flex items-center gap-1.5">
            Full Stack Developer <span className="text-neutral-300 font-light font-sans text-lg">|</span>
          </h3>

          {/* Description */}
          <p className="text-neutral-500 text-sm md:text-base font-normal leading-relaxed max-w-xl mb-8">
            I build clean, modern & responsive web applications that deliver exceptional user experiences.
          </p>

          {/* Action Buttons & Social Icons Group */}
          <div className="flex flex-wrap items-center gap-6 mb-8">
            <a 
              href="#projects" 
              className="flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white text-xs font-semibold rounded-full shadow-lg shadow-neutral-900/10 hover:bg-neutral-800 transition-all duration-300 group"
            >
              <span>View My Work</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            
            <a 
              href="/resume.pdf" 
              download
              className="flex items-center gap-1.5 text-xs font-semibold text-neutral-600 hover:text-neutral-900 transition-colors py-2 group"
            >
              <span>Download CV</span>
              <Download className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-950 transition-colors" />
            </a>

            <div className="w-[1px] h-6 bg-neutral-200 hidden sm:block"></div>

            {/* Social Icons inline */}
            <div className="flex items-center gap-4">
              {[
                { icon: <GithubIcon className="w-4.5 h-4.5" />, href: "https://github.com/gowtham-n", label: "GitHub" },
                { icon: <LinkedinIcon className="w-4.5 h-4.5" />, href: "https://www.linkedin.com/in/gowtham-n-a5272a3a7?utm_source=share_via&utm_content=profile&utm_medium=member_android", label: "LinkedIn" },
                { icon: <InstagramIcon className="w-4.5 h-4.5" />, href: "https://www.instagram.com/gautak_shetty?igsh=dnhyaG5oZDB1Zmsx", label: "Instagram" },
                { icon: <Mail className="w-4.5 h-4.5" />, href: "mailto:gowtham@example.com", label: "Email" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-neutral-100 hover:border-neutral-200 bg-white text-neutral-400 hover:text-neutral-950 shadow-sm transition-all duration-300 hover:-translate-y-0.5"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* FLOATING STATISTICS CARD (Matching reference layout) */}
          <div className="bg-white border border-neutral-100/80 rounded-2xl p-6 shadow-sm mb-6 max-w-2xl w-full">
            <div className="grid grid-cols-5 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center text-center relative after:absolute after:right-0 after:top-1/4 after:h-1/2 after:w-[1px] after:bg-neutral-100 last:after:hidden">
                  {/* Icon */}
                  <div className="w-8 h-8 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-400 mb-2 border border-neutral-100">
                    <stat.icon className="w-4 h-4" />
                  </div>
                  {/* Value */}
                  <h4 className="text-base font-extrabold text-neutral-900 tracking-tight leading-none mb-1">
                    {stat.value}
                  </h4>
                  {/* Full Label */}
                  <p className="text-[9px] font-bold text-neutral-400 uppercase tracking-wider leading-tight max-w-[80px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* FLOATING TECHNOLOGIES ROW (Matching reference layout) */}
          <div className="bg-white border border-neutral-100/80 rounded-2xl px-6 py-4 shadow-sm max-w-2xl w-full flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest shrink-0">
              Technologies I Work With
            </span>
            <div className="w-full overflow-x-auto no-scrollbar flex items-center justify-between">
              {technologies.map((tech) => (
                <div key={tech.name} className="flex items-center justify-center shrink-0 group py-1" title={tech.name}>
                  <img 
                    src={tech.icon} 
                    alt={tech.name} 
                    className="w-5 h-5 filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Correct Portrait + Background Monogram */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end items-center relative order-1 lg:order-2 py-4">
          
          {/* Subtle Serif Monogram backdrop behind portrait */}
          <div 
            style={{ 
              transform: `translate(${mousePosition.x * -0.5}px, ${mousePosition.y * -0.5}px)`
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none z-0 transition-transform duration-300 ease-out"
          >
            <span 
              className="font-bold text-[24rem] md:text-[28rem] text-neutral-900/[0.015] select-none block leading-none filter blur-[0.5px]"
              style={{
                fontFamily: "Georgia, serif",
                WebkitTextStroke: "1px rgba(17, 24, 39, 0.03)",
                color: "transparent"
              }}
            >
              GN
            </span>
          </div>

          {/* Large portrait container taking the right height */}
          <div
            style={{ 
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
            }}
            className="relative w-[310px] h-[370px] sm:w-[380px] sm:h-[460px] md:w-[440px] md:h-[530px] lg:w-[460px] lg:h-[550px] rounded-[2.5rem] bg-gradient-to-tr from-neutral-100 to-white p-0.5 shadow-xl select-none overflow-hidden transition-transform duration-300 ease-out z-10"
          >
            <div className="w-full h-full rounded-[2.4rem] overflow-hidden bg-neutral-50 relative group">
              <img 
                src={portraitImg} 
                alt="Gowtham N" 
                className="w-full h-full object-cover object-center"
                draggable="false"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/5 via-transparent to-transparent opacity-40"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
