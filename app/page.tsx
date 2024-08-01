import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import HireMeSection from './components/HireMeSection';

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen max-w-full flex-col">
        <NavBar />
        <div className="container">
          <HeroSection />
          <AboutSection />
          <HireMeSection />
        </div>
      </div>
    </>
  );
}
