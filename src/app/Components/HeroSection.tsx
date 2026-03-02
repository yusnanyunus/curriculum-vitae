"use client";

import { FC } from 'react';
import Image from 'next/image';
import { FaYoutube, FaLinkedin, FaTiktok, FaInstagram, FaFacebook } from 'react-icons/fa';
import { SiThreads } from "react-icons/si";

const HeroSection: FC = () => {
  return (
    <div id="herosection" className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/my-background-2.png"
          alt="Personal Background"
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 flex items-center justify-center min-h-screen">
        {/* Kartu Profil */}
        <div className="bg-white shadow-2xl rounded-lg overflow-hidden flex flex-col w-11/12 md:w-3/4 lg:w-2/4">
          
          <div className="flex flex-col md:flex-row">
            {/* Bagian Foto */}
            <div className="relative w-full md:w-1/2 min-h-[300px] bg-gray-50">
              <Image
                src="/images/aiease_1757609232450.png"
                alt="yusnan yunus"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>

            {/* Bagian Info */}
            <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
              <div className="text-center md:text-left">
                {/* Perbaikan text-3xl di bawah ini */}
                <h1 className="text-3xl uppercase font-bold text-gray-800">Yusnan Yunus</h1>
                <p className="text-sm uppercase tracking-wide text-gray-400 mb-4">
                  Digital & Tech Enthusiast
                </p>
              </div>
            
              <div className="space-y-4 text-center md:text-left">
                <div className="text-gray-900">
                  <h2 className="text-xs uppercase font-semibold text-gray-500">Email:</h2>
                  <p className="text-sm md:text-base">yusnanyunus24@gmail.com</p>
                </div>
                <div className="text-gray-900">
                  <h2 className="text-xs uppercase font-semibold text-gray-500">Date of Birth:</h2>
                  <p className="text-sm md:text-base">February 24th, 1991</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Bar */}
          <div className="flex justify-center space-x-6 py-4 bg-gray-900 text-white">
            <a href="https://linkedin.com/in/yusnan-yunus" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <FaLinkedin size={22} />
            </a>
            <a href="https://youtube.com/@yusnanyunus" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
              <FaYoutube size={22} />
            </a>
            <a href="https://tiktok.com/@sayayusnanyunus" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">
              <FaTiktok size={22} />
            </a>
            <a href="https://instagram.com/sayayusnanyunus" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
              <FaInstagram size={22} />
            </a>
            <a href="https://facebook.com/sayayusnanyunus" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
              <FaFacebook size={22} />
            </a>
            <a href="https://www.threads.com/@yusnan_yunus" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
              <SiThreads size={22} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;