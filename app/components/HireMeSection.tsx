"use client";

import React, { useState } from 'react';

const HireMeSection = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Message:', message);
  };

  return (
    <section id="hire-me" className="min-h-screen flex flex-col justify-center items-center bg-gray-800 text-white">
      <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full max-w-md">
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Your email" 
          className="p-2 rounded bg-gray-700 text-white w-full"
          required 
        />
        <textarea 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          placeholder="Your message" 
          className="p-2 rounded bg-gray-700 text-white w-full"
          required 
        />
        <button type="submit" className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500">Send</button>
      </form>
    </section>
  );
};

export default HireMeSection;
