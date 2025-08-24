// components/SocialButton.tsx
import Link from 'next/link';
import { FC } from 'react';

interface SocialButtonProps {
  href: string;
  icon: React.JSX.Element; // Anda bisa menggunakan ikon SVG atau library ikon
  label: string;
}

const SocialButton: FC<SocialButtonProps> = ({ href, icon, label }) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="hover:opacity-75">
      <span className="sr-only">{label}</span>
      {icon}
    </Link>
  );
};

export default SocialButton;