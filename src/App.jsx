import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutAndSkills from './components/AboutAndSkills';
import Projects from './components/FeaturedProjects';
import CurrentlyBuilding from './components/CurrentlyBuilding';
import JourneyAndAchievements from './components/JourneyAndAchievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-[#f9fafb]">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Me & Tech Skills Section */}
      <AboutAndSkills />

      {/* Featured Projects Grid */}
      <Projects />

      {/* Currently Building & Hackathons Section */}
      <CurrentlyBuilding />

      {/* Career Journey & Achievements Milestones */}
      <JourneyAndAchievements />

      {/* Interactive Contact Form & Email Details */}
      <Contact />

      {/* Site Footer */}
      <Footer />
    </div>
  );
}

export default App;
