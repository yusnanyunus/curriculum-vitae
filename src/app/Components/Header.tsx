'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, easeIn, easeOut } from 'framer-motion';

// Definisikan tautan-tautan navigasi Anda
const navLinks = [
  { name: 'Home', href: '#herosection' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Skill', href: '#skill' },
  { name: 'Portfolio', href: '#portfolio' },
];

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const, 
      stiffness: 200,
      damping: 20,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2,
      ease: easeIn,
    },
  },
};


const Header: FC = () => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('#herosection'); 
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) =>
        document.getElementById(link.href.substring(1))
      );
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        if (
          section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(`#${section.id}`);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bg-gray-800 text-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Yusnan Yunus
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || activeSection === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`
                  text-lg transition-colors duration-200
                  ${isActive ? 'font-bold text-[#6e4aff] text-xl' : 'hover:text-[#6e4aff]'}
                `}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Tombol Hamburger (Mobile) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Menu Mobile dengan Animasi + Stagger */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ type: "spring", stiffness: 150, damping: 18 }}
            className="md:hidden bg-gray-800 px-6 pb-4 space-y-4"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href || activeSection === link.href;
              return (
                <motion.div key={link.name} variants={itemVariants}>
                  <Link
                    href={link.href}
                    className={`
                      block text-lg transition-colors duration-200
                      ${isActive ? 'font-bold text-[#6e4aff]' : 'hover:text-[#6e4aff]'}
                    `}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
