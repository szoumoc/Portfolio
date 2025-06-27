import { ArrowDown, Instagram } from 'lucide-react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import React from 'react';
import { FaGithub, FaLinkedin, FaSpotify, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import Button from './PlayButton';
import RecruiterButton from './PrimaryButton';
import ScrollDownWheel from './ScrollDownWheel';

const HeroSection = () => {
  // Social media links
  const socialLinks = [
    {
      href: 'https://github.com/your-username',
      icon: FaGithub,
      label: 'GitHub',
      color: 'white',
    },
    {
      href: 'https://linkedin.com/in/your-username',
      icon: FaLinkedin,
      label: 'LinkedIn',
      color: 'indigo',
    },
    {
      href: 'https://spotify.com/user/your-username',
      icon: FaSpotify,
      label: 'Spotify',
      color: 'green',
    },
    {
      href: 'https://instagram.com/your-username',
      icon: FaInstagram,
      label: 'Instagram',
      color: 'red',
    },
    {
      href: 'mailto:your@email.com',
      icon: HiOutlineMail,
      label: 'Mail',
      color: 'white',
    },
  ];
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-black justify-center px-4 pt-20 w-full"
    >
      <div className="relative w-full h-full">
        {/* Top-left corner logo text */}
        <div className="absolute top-6 left-6 text-red-500 font-serif text-lg tracking-wide">
          
        </div>

        {/* Abstract shape (can be replaced with image or SVG later) */}
        
        {/* Distorted Typography right side */}
        <div className="absolute right-0 top-12 text-[16rem] font-black tracking-tighter leading-none text-black opacity-100 z-0">
          <span className="text-[20rem] px-[5rem] text-white font-black -ml-10">SZ</span><br />
          <span className="text-[20rem] text-red-600 font-black -ml-10">'25</span>
          
        </div>


        {/* Intro Content */}
        <div className="relative z-10 flex flex-col min-h-screen max-w-6xl px-6 md:px-20">
          <h2 className="text-4xl md:text-[12rem] py-[5rem] font-inter font-regular text-white mb-4">
            SOUMO
          </h2>

          {/* Optional location note */}
          <p className="mt-6 text-sm px-[1rem] uppercase tracking-widest text-gray-500 dark:text-gray-400">
            Based in India
          </p>
          <h3 className="mt-6 text-sm px-[1rem] uppercase tracking-widest text-white">
            use technology — bend it to solve, to scale, to lead. Every product is a reflection of logic, creativity, and execution.
          </h3>
          <ScrollDownWheel />
          
        </div>

        {/* Down Arrow */}

      </div>
    </section>
  );
};

export default HeroSection;
