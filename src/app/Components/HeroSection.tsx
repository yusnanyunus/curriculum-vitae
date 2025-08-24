import { FC } from 'react';
import Image from 'next/image';
import { FaYoutube, FaLinkedin, FaTiktok, FaInstagram } from 'react-icons/fa';

const HeroSection: FC = () => {
return (
<div id="herosection" className="relative bg-gray-100 min-h-screen">
{/* Background image */}
<div className="absolute inset-0">
<Image
src="/images/background.avif"
alt="Building background"
fill
style={{ objectFit: 'cover' }}
/>
<div className="absolute inset-0 bg-black opacity-60"></div>
</div>

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex items-center justify-center min-h-screen">
    
    {/* KOTAK PUTIH (Kartu Profil) */}
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col w-11/12 md:w-3/4 lg:w-1/2">
      
      {/* Kontainer untuk Foto & Info (Flex Row untuk Desktop) */}
      <div className="flex flex-col md:flex-row">
        {/* Bagian Foto */}
        <div className="relative w-full md:w-1/2 min-h-[300px] md:min-h-0">
          <Image
            src="/images/my-photo.png"
            alt="Yusnan Yunus"
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>

        {/* Bagian Info */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-800">Yusnan Yunus</h1>
            <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">
              Systems Analyst
            </p>
          </div>
          
          <div className="space-y-4 text-center md:text-left">
            <div className="text-gray-900">
              <h2 className="text-sm text-gray-600">Email:</h2>
              <p>yusnanyunus24@gmail.com</p>
            </div>
            <div className="text-gray-900">
              <h2 className="text-sm text-gray-600">Date of Birth:</h2>
              <p>February 24th, 1991</p>
            </div>
          </div>
        </div>
      </div>

      {/* KONTEN BARU: Tombol Sosial Media di Dalam Kotak Putih, di Bawah */}
      <div className="flex justify-center space-x-4 py-4 bg-black bg-opacity-75 text-white">
        <a href="https://linkedin.com/in/yusnan-yunus" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:opacity-75">
          <FaLinkedin size={24} />
        </a>
        <a href="https://youtube.com/@yusnanyunus" target="_blank" rel="noopener noreferrer" aria-label="Youtube" className="hover:opacity-75">
          <FaYoutube size={24} />
        </a>
        <a href="https://tiktok.com/@yusnan_yunus" target="_blank" rel="noopener noreferrer" aria-label="Tiktok" className="hover:opacity-75">
          <FaTiktok size={24} />
        </a>
        <a href="https://instagram.com/yusnan_yunus" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-75">
          <FaInstagram size={24} />
        </a>
      </div>

    </div>
  </div>
</div>
);
};

export default HeroSection;