"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ResumeItem = {
  id: number;
  category: string;
  nameskill?: string;
  cores?: { core: string; detail: string; }[];
  title?: string;
  company?: string;
  school?: string;
  degree?: string;
  date?: string;
};

const resumeItems: ResumeItem[] = [
  // Data Skill
  {
    id: 1,
    category: "Skill",
    nameskill: "Data Management",
    cores: [
      { core: "Professional Data Input & Validation", detail: "Microsoft Excel, Google Sheets, Power BI" },
      { core: "Analytic & Data Tools", detail: "Google Analytics, Power BI, insights & reporting" },
    ],
  },
  {
    id: 2,
    category: "Skill",
    nameskill: "Fullstack Development",
    cores: [
      { core: "Web Development", detail: "Laravel & Next JS" },
      { core: "Database Management", detail: "MySQL data structure and relationships" },
    ],
  },
  {
    id: 3,
    category: "Skill",
    nameskill: "Technical Writer",
    cores: [
      { core: "Technical Guide & Documentation Writing", detail: "Digital manuals, User Requirements, Functional Specification Document, Software Requerement Spesification" },
      { core: "System Documentation Writing", detail: "User manuals, help center, application docs" },
    ],
  },
  // Data Experience
  {
    id: 4,
    category: "Experience",
    title: "Subject Matter Expert System Analyst",
    company: "PT. Hadji Kalla (Holding)",
    date: "Feb 2025 - Present",
  },
  {
    id: 5,
    category: "Experience",
    title: "Application Support - Senior Analyst",
    company: "PT. Hadji Kalla (Holding)",
    date: "Mar 2021 - Jan 2025",
  },
  {
    id: 6,
    category: "Experience",
    title: "Application Support - Analyst",
    company: "PT. Haka Sarana Investama",
    date: "Sep 2018 - Jan 2021",
  },
  {
    id: 7,
    category: "Experience",
    title: "IT & System Support - Staff",
    company: "PT. Kalla Inti Karsa",
    date: "Feb 2015 - Sep 2018",
  },
  // Data Education
  {
    id: 8,
    category: "Education",
    date: "2009 - 2014",
    degree: "Bachelor Degree, Information Systems",
    school: "STMIK DIPANEGARA Makassar",
  },
  {
    id: 9,
    category: "Education",
    date: "2006 - 2009",
    degree: "Senior High School",
    school: "SMA LPP UMI Makassar",
  },
  {
    id: 10,
    category: "Education",
    date: "2003 - 2006",
    degree: "Junior High School",
    school: "SMP ISLAM ATHIRAH Makassar",
  },
];

export default function Resume() {
  const [selectedCategory, setSelectedCategory] = useState("Skill");
  const searchQuery = "";

  const filteredItems = resumeItems.filter((item) => {
    return item.category === selectedCategory;
  });

  const getSectionTitle = () => {
    switch (selectedCategory) {
      case "Skill":
      case "Experience":
      case "Education":
      default:
        return "";
    }
  };

  return (
    <div className="relative mx-auto max-w-5xl py-12 md:py-24 px-4 md:px-0 space-y-24">
      {/* Filter Buttons */}
      <div className="flex justify-center gap-3 mb-12 flex-wrap">
        {["Skill", "Experience", "Education"].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`rounded-2xl px-5 py-2 transition-all ${
              selectedCategory === cat
                ? "bg-black text-white"
                : "bg-white text-black border border-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <h2 className="text-4xl font-bold text-center uppercase mb-12">
        {getSectionTitle()}
      </h2>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {filteredItems.map((item) => (
            <section key={item.id}>
              {/* Render Skill Section */}
              {item.category === "Skill" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <h3 className="text-[#020a3b] font-bold text-left uppercase">
                    {item.nameskill}
                  </h3>
                  <div className="text-left">
                    {item.cores?.map((coreItem, coreIndex) => (
                      <div key={coreIndex} className="mb-4">
                        <h4 className="text-xl font-bold">{coreItem.core}</h4>
                        <p className="text-gray-700">{coreItem.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Render Experience Section */}
              {item.category === "Experience" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="text-gray-500 font-bold text-left">
                    {item.date}
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold uppercase">{item.title}</h3>
                    <p className="text-gray-700 uppercase">{item.company}</p>
                  </div>
                </div>
              )}

              {/* Render Education Section */}
              {item.category === "Education" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="text-gray-500 font-bold text-left">
                    {item.date}
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold uppercase">{item.degree}</h3>
                    <p className="text-gray-700 uppercase">{item.school}</p>
                  </div>
                </div>
              )}
            </section>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}