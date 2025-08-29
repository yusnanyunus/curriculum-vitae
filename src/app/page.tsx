"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import HeroSection from './Components/HeroSection';

export default function Home() {
  return (
  <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ type: "spring", stiffness: 120, damping: 15 }}
      className="p-10"
    >
    
      <HeroSection />
    
  </motion.div>
  );
}
