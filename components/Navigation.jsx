'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  // Est-ce qu'on est dans la section /actualite ?
  const isInActualite = pathname.startsWith('/actualite');

  return (
    <nav className="flex space-x-6 bg-[#f5f0e6] p-4 rounded-md shadow-sm">
      <Link 
        href="/"
        className={`text-lg font-semibold ${pathname === '/' ? 'text-[#8B4513]' : 'text-[#3e2f1c] hover:text-[#8B4513]'}`}
      >
        Accueil
      </Link>

      <Link 
        href="/actualite"
        className={`text-lg font-semibold ${isInActualite ? 'text-[#8B4513] underline' : 'text-[#3e2f1c] hover:text-[#8B4513]'}`}
      >
        Actualité
      </Link>

      <Link 
        href="/autre-section"
        className={`text-lg font-semibold ${pathname === '/autre-section' ? 'text-[#8B4513]' : 'text-[#3e2f1c] hover:text-[#8B4513]'}`}
      >
        Autre Section
      </Link>
    </nav>
  );
}
