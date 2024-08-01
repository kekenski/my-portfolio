// ./app/components/AboutSection.tsx

"use client";

import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center text-white p-8">
      <div className="w-full max-w-2xl">
        <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>
        <p className="text-lg mb-4">
          Hello! My name is Andria Kekenadze, and I am a passionate Frontend Developer and Web Developer with a solid background in building responsive and user-friendly web applications. I studied at Public College "Information Technologies Academy" (ITVET) in Tbilisi, Georgia.
        </p>
        <p className="text-lg mb-4">
          I have expertise in the following technologies:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>HTML/CSS</li>
          <li>JavaScript/TypeScript</li>
          <li>Angular</li>
          <li>WordPress</li>
          <li>Bootstrap</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Tailwind CSS</li>
        </ul>
        <p className="text-lg mb-4">
          I enjoy crafting beautiful and functional user interfaces, ensuring the best user experience. Let's work together to create something amazing!
        </p>
        <p className="text-lg text-center">
          Contact me: <a href="mailto:andriakekenadze@itvet.ge" className="text-blue-400">andriakekenadze@itvet.ge</a>
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
