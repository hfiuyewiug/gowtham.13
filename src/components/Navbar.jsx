import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center font-bold text-neutral-900 bg-white shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:border-neutral-900">
            GN
          </div>
          <span className="font-semibold text-lg tracking-tight text-neutral-900 group-hover:text-neutral-600 transition-colors duration-300">
            Gowtham Nataraj
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-neutral-900 after:scale-x-0 hover:after:scale-x-100 after:origin-right hover:after:origin-left after:transition-transform after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-medium transition-all duration-300 hover:shadow-md group"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-neutral-900 hover:text-neutral-600 transition-colors focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-neutral-100 shadow-lg px-6 py-6 flex flex-col gap-4 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-neutral-700 hover:text-neutral-900 py-2 border-b border-neutral-50 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-all group mt-2"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
