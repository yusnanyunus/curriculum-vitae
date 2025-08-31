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
  images: string[]; // Mengubah 'image' menjadi 'images' (array of strings)
};

const projects: Project[] = [
  {
    id: 1,
    title: "Mail Managements",
    category: "Web Application",
    description: "Aplikasi ini digunakan untuk mengelola dokumen atau surat yang dilengkapi dengan generate nomor surat dan juga fasilitas upload file secara fisik",
    images: [
    "/porto/web/mail_management/LoginPage.png",
    "/porto/web/mail_management/dashboardpage.png", 
    "/porto/web/mail_management/Formpage.png", 
    "/porto/web/mail_management/Reportpage.png"
  ],
  },
  {
    id: 2,
    title: "Operation Building Management System",
    category: "Web Application",
    description: "Aplikasi ini digunakan untuk mengelola kebutuhan operasional gedung dan salah satu pusat perbelanjaan di Makassar yang terdiri dari tenant relation, fit out, engineering, marketing communication, tenant store dan juga tenant income serta penunjang kebutuhan operasional gedung.",
    images: ["/porto/web/obms/LoginPage.png"],
  },
  {
    id: 3,
    title: "IT Asset Management",
    category: "Web Application",
    description: "Aplikasi ini digunakan untuk pendataan asset berupa perangkat IT baik itu software maupun hardware",
    images: ["/porto/web/it_asset/FormPage.png"],
  },
  {
    id: 4,
    title: "Laundry System",
    category: "Web Application",
    description: "Aplikasi ini digunakan untuk mengelola usaha yang bergerak di bidang jasa cuci dan setrika, sedangkan menu terdiri dari pembuatan kwitansi dan pencetakannya beserta pengelolaannya seperti penambahan dan pengurangan barang, serta pengeluaran usaha dan dilengkapi dengan pengelolaan pengguna serta laporan pengeluaran dan pendapatan bisnis.",
    images: [
      "/porto/web/laundry/LoginPage.png",
      "/porto/web/laundry/DashboardPage.png",
      "/porto/web/laundry/FormPage.png",
      "/porto/web/laundry/ViewTransaksi.png",
      "/porto/web/laundry/ReportPage.png",
      "/porto/web/laundry/UserManagement.png"

    ],
  },
  {
    id: 5,
    title: "Dealer Management System (Aftersales) - Guidance",
    category: "Technical Document",
    description: "Website ini merupakan portal dokumentasi untuk aplkasi pengelolaan salah satu bengkel mobil terbesar yang ada di wilayah indonesia timur, dirancang untuk memberikan panduan lengkap dan terperinci. Di sini, pengguna dapat menemukan berbagai informasi, panduan penggunaan, serta referensi yang memudahkan dalam memahami dan mengoptimalkan fitur-fitur aplikasi.",
    images: ["/porto/doc/dms_af/Reception.png"],
  },
  {
    id: 6,
    title: "Asset Management System - Guidance",
    category: "Technical Document",
    description: "Website ini merupakan portal dokumentasi untuk aplkasi pengolahan asset di salah satu perusahaan swasta di makassar yang dirancang untuk memberikan panduan lengkap dan terperinci. Di sini, pengguna dapat menemukan berbagai informasi, panduan penggunaan, serta referensi yang memudahkan dalam memahami dan mengoptimalkan fitur-fitur aplikasi.",
    images: ["/porto/doc/asset_oto/Mutation.png"],
  },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // State untuk melacak gambar yang sedang ditampilkan

  const filteredProjects = projects.filter(
    (project) =>
      (selectedCategory === "All" || project.category === selectedCategory) &&
      project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0); // Reset index gambar ke 0 saat modal dibuka
  };

  const closeModal = () => {
    setSelectedProject(null);
  };
  
  // Fungsi untuk maju ke gambar berikutnya
  const handleNextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedProject.images.length);
    }
  };

  // Fungsi untuk mundur ke gambar sebelumnya
  const handlePreviousImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
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
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl transition-colors z-20"
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
              
              {/* Image Container with Navigation Buttons */}
              <div className="relative w-full h-80 mb-4 rounded-md overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex} // Key untuk memicu animasi saat index berubah
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={selectedProject.images[currentImageIndex]}
                      alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Previous Button */}
                {selectedProject.images.length > 1 && (
                  <button
                    onClick={handlePreviousImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 z-10 opacity-70 hover:opacity-100 transition-opacity"
                  >
                    &lt;
                  </button>
                )}

                {/* Next Button */}
                {selectedProject.images.length > 1 && (
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 z-10 opacity-70 hover:opacity-100 transition-opacity"
                  >
                    &gt;
                  </button>
                )}
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