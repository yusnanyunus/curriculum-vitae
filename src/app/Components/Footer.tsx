import { FC } from 'react';
import Link from 'next/link';

const Footer: FC = () => {
  return (
    <footer className="bg-gray-900 text-white p-4 text-center">
      <div className="container mx-auto flex justify-center space-x-4">
        <Link href="https://linkedin.com" aria-label="LinkedIn">
          <span className="text-2xl hover:text-gray-400">in</span>
        </Link>
        <Link href="https://facebook.com" aria-label="Facebook">
          <span className="text-2xl hover:text-gray-400">f</span>
        </Link>
        <Link href="https://twitter.com" aria-label="Twitter">
          <span className="text-2xl hover:text-gray-400"></span>
        </Link>
        <Link href="https://instagram.com" aria-label="Instagram">
          <span className="text-2xl hover:text-gray-400"></span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;