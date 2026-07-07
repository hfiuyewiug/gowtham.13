import React from 'react';
import { Mail } from 'lucide-react';

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
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white py-16 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-neutral-900">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center font-bold text-white bg-neutral-900 shadow-sm">
                GN
              </div>
              <span className="font-semibold text-lg tracking-tight">
                Gowtham Nataraj
              </span>
            </div>
            <p className="text-sm text-neutral-400 font-normal leading-relaxed max-w-sm">
              Building clean, responsive, and performance-driven digital experiences that make an impact.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              <a href="#home" className="text-sm text-neutral-400 hover:text-white transition-colors duration-200">Home</a>
              <a href="#projects" className="text-sm text-neutral-400 hover:text-white transition-colors duration-200">Projects</a>
              <a href="#about" className="text-sm text-neutral-400 hover:text-white transition-colors duration-200">About</a>
              <a href="#experience" className="text-sm text-neutral-400 hover:text-white transition-colors duration-200">Experience</a>
              <a href="#skills" className="text-sm text-neutral-400 hover:text-white transition-colors duration-200">Skills</a>
              <a href="#contact" className="text-sm text-neutral-400 hover:text-white transition-colors duration-200">Contact</a>
            </div>
          </div>

          {/* Connect Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500">Connect</h4>
            <div className="flex gap-4">
              {[
                { icon: <GithubIcon className="w-4.5 h-4.5" />, href: "https://github.com/gowtham-n", label: "GitHub" },
                { icon: <LinkedinIcon className="w-4.5 h-4.5" />, href: "https://www.linkedin.com/in/gowtham-n-a5272a3a7?utm_source=share_via&utm_content=profile&utm_medium=member_android", label: "LinkedIn" },
                { icon: <InstagramIcon className="w-4.5 h-4.5" />, href: "https://www.instagram.com/gautak_shetty?igsh=dnhyaG5oZDB1Zmsx", label: "Instagram" },
                { icon: <Mail className="w-4.5 h-4.5" />, href: "mailto:yadhur689@gmail.com", label: "Email" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-700 transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs font-medium text-neutral-500">
          <span>&copy; {new Date().getFullYear()} Gowtham Nataraj. All rights reserved.</span>
          <span className="flex items-center gap-1.5">
            Designed & Built with <span className="text-rose-500">❤️</span> by Gowtham Nataraj
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
