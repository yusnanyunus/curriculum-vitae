"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "../Components/ui/card";
import { Button } from "../Components/ui/button";
import { Input } from "../Components/ui/input";
import Image from "next/image";

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Company Profile Website",
    category: "Web",
    description: "Website profile perusahaan dengan desain modern dan responsif.",
    image: "/images/background.avif",
  },
  {
    id: 2,
    title: "Mobile E-Commerce",
    category: "Mobile",
    description: "Aplikasi belanja online berbasis mobile dengan integrasi payment gateway.",
    image: "/images/background.avif",
  },
  {
    id: 3,
    title: "Inventory Management System",
    category: "System",
    description: "Sistem manajemen stok berbasis web untuk perusahaan distribusi.",
    image: "/images/background.avif",
  },
  {
    id: 4,
    title: "Portfolio Website",
    category: "Web",
    description: "Website pribadi untuk menampilkan CV dan portofolio digital.",
    image: "/images/background.avif",
  },
  {
    id: 5,
    title: "Chat Application",
    category: "Mobile",
    description: "Aplikasi chat real-time berbasis mobile dengan notifikasi push.",
    image: "/images/background.avif",
  },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter(
    (project) =>
      (selectedCategory === "All" || project.category === selectedCategory) &&
      project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="relative mx-auto max-w-6xl py-12 md:py-24 px-4 md:px-0">
      <h1 className="text-4xl font-bold text-center uppercase mb-12">
        My Portfolio
      </h1>
      
      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-8">
        <Input
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 text-lg border rounded-2xl shadow-sm"
        />
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-3 mb-12 flex-wrap">
        {["All", "Data Analytic", "Web Application", "Technical Document"].map((cat) => (
          <Button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`rounded-2xl px-5 py-2 ${
              selectedCategory === cat
                ? "bg-black text-white"
                : "bg-black text-black border"
            } transition-all`}
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              onClick={() => handleCardClick(project)}
              className="cursor-pointer"
            >
              <Card className="rounded-2xl shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-6 space-y-3">
                  <h2 className="text-xl font-bold">{project.title}</h2>
                  <p className="text-sm text-gray-500">{project.category}</p>
                  <p className="text-gray-700 text-sm">{project.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-white rounded-lg p-6 max-w-2xl w-full mx-4 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl transition-colors"
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
              <div className="relative w-full h-80 mb-4 rounded-md overflow-hidden">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <p className="text-sm text-gray-500 mb-2">{selectedProject.category}</p>
              <p className="text-gray-700">{selectedProject.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}