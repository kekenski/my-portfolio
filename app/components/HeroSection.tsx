"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pl-8">
      <div className='grid grid-cols-1 sm:grid-cols-12 w-full max-w-7xl gap-8'>
        <div className='col-span-12 sm:col-span-7 place-self-center text-center sm:text-left'>
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold gradient-text">
            Hello, I'm{" "}
            <span>
              <br></br>
              <TypeAnimation
                sequence={[
                  'Andria',
                  1000,
                  'Web Developer',
                ]}
                wrapper="span"
                speed={10}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className='text-base sm:text-lg lg:text-xl mb-6 text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et repellendus eius eveniet.
          </p>
          <div className='flex flex-col sm:flex-row items-center gap-4'>
            <Link href="#hire-me">
              <span className='relative px-8 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-[#FF6B6B] to-[#FFD93D] hover:from-[#FF6B6B] hover:to-[#FFD93D] transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer'>
                <span className='absolute inset-0 bg-gradient-to-r from-[#FF6B6B] to-[#FFD93D] opacity-30 rounded-full animate-pulse'></span>
                <span className='relative'>Hire Me</span>
              </span>
            </Link>
            <Link href="#about">
              <span className='relative px-8 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-[#48C9B0] to-[#1F8A70] hover:from-[#48C9B0] hover:to-[#1F8A70] transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer'>
                <span className='absolute inset-0 bg-gradient-to-r from-[#48C9B0] to-[#1F8A70] opacity-30 rounded-full animate-pulse'></span>
                <span className='relative'>View CV</span>
              </span>
            </Link>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-5 flex justify-center lg:justify-end">
          <div className="relative rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] flex items-center justify-center overflow-hidden">
            <div className="image-container">
              <Image 
                src="/coder.png"
                alt='hero image'
                className='object-cover'
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes gradientAnimation {
          0% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
          100% { background-position: 0% 0%; }
        }
        @keyframes imageAnimation {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(5deg); }
          50% { transform: rotate(0deg); }
          75% { transform: rotate(-5deg); }
          100% { transform: rotate(0deg); }
        }
        .gradient-text {
          background: linear-gradient(45deg, #FF6B6B, #FFD93D, #1F8A70, #48C9B0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
          animation: gradientAnimation 5s ease infinite;
          background-size: 400% 400%;
        }
        .image-container {
          animation: imageAnimation 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
