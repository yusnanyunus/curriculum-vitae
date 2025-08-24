"use client";

import { FC } from 'react';
import Image from 'next/image';
import { Keyboard, FileText, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const Skill: FC = () => {
  return (
    <div id="skill" className="relative bg-gray-100 min-h-screen">
      {/* Background image */}
      <div className="absolute inset-0">
        <h2 className="md:hidden text-4xl font-bold text-center text-white uppercase tracking-widest mb-2">
          My Skill
        </h2>
        <Image
          src="/images/background.avif"
          alt="Building background"
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-black opacity-85"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex items-center justify-center min-h-screen">
        <motion.div
          className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-5xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          {/* Data Management */}
          <motion.div
            className="flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:-translate-y-2 group relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-blue-600 text-white p-5 rounded-full shadow-lg transition duration-300 hover:bg-blue-700">
              <Keyboard className="h-9 w-9" />
            </div>
            <p className="mt-4 text-lg font-semibold text-gray-800">Data Management</p>

            {/* Tooltip */}
            <div className="absolute bottom-20 opacity-0 group-hover:opacity-100 transition bg-white text-gray-800 text-sm px-4 py-2 rounded-lg shadow-lg w-80">
              📥 Professional Data Input & Validation : Microsoft Excel, Google Sheets, Power BI <br />
              📊 Analytics & Data Tools : Google Analytics, Power BI, insights & reporting
            </div>
          </motion.div>

          {/* Technical Writer */}
          <motion.div
            className="flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:-translate-y-2 group relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-green-600 text-white p-5 rounded-full shadow-lg transition duration-300 hover:bg-green-700">
              <FileText className="h-9 w-9" />
            </div>
            <p className="mt-4 text-lg font-semibold text-gray-800">Technical Writer</p>

            {/* Tooltip */}
            <div className="absolute bottom-20 opacity-0 group-hover:opacity-100 transition bg-white text-gray-800 text-sm px-4 py-2 rounded-lg shadow-lg w-80">
              📘 Technical Guide & Documentation Writing : Digital manuals, web-based documentation, SOPs <br />
              📝 System Documentation Writing : User manuals, help center, application docs
            </div>
          </motion.div>

          {/* Fullstack Development */}
          <motion.div
            className="flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:-translate-y-2 group relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-purple-600 text-white p-5 rounded-full shadow-lg transition duration-300 hover:bg-purple-700">
              <Code className="h-9 w-9" />
            </div>
            <p className="mt-4 text-lg font-semibold text-gray-800">Fullstack Development</p>

            {/* Tooltip */}
            <div className="absolute bottom-20 opacity-0 group-hover:opacity-100 transition bg-white text-gray-800 text-sm px-4 py-2 rounded-lg shadow-lg w-80">
              💻 Web Development : Laravel(Backend), Next JS(Frontend) <br />
              🔌 Database Management : MySQL data structure and relationships
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skill;
