'use client';
import Image from 'next/image';
import '/app/globals.css';
import { CiMenuFries } from 'react-icons/ci';
import { RxCross1 } from 'react-icons/rx';
import { useState, useEffect, useRef } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const menuItems = [
  { name: 'ACCUEIL', href: '/' },
  {
    name: 'À PROPOS', 
    subItems: [
      { name: 'Définition', href: '#about' },
      { name: 'Historique de création', href: '#creationhistory' },
      { name: 'Mission et ambitions', href: '#missionAmbitions' },
    ],
  },
  { name: 'NOS MEMBRES' , href: '#members' },
  {
    name: 'ACTUALITES', 
    subItems: [
      { name: 'EVENEMENTS', href: '#EVENTS' },
      { name: "APPEL D'OFFRES", href: '#appelOffre' },
    ],
  },
  { name: 'CONTACTS', href: '#CONTACTS' },
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef(null);

  // Ferme le menu déroulant quand on clique à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Fonction pour gérer le clic sur les éléments avec dropdown
  const handleDropdownClick = (index, event) => {
    event.preventDefault();
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <nav className="bg-white shadow-md z-50 w-full px-8 py-2 fixed top-0" ref={navRef}>
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo + texte */}
        <div className="flex items-center gap-4">
          {/* Logo */}
          <div className="relative w-20 h-20">
            <Image
              src="/images/logo-pooltpv.png"
              alt="Logo Pool TPV"
              fill
              className="object-contain"
            />
          </div>

          {/* Trait vertical */}
          <div className="w-px h-8 bg-gray-300" />

          {/* Texte dégradé */}
          <a href="/" className="text-xl font-bold no-underline flex gap-0.5">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-black to-gray-500">P</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-800 to-gray-400">O</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-700 to-gray-300">O</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-600 to-gray-200">L</span>
            <span className="mx-1" />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-500 to-gray-300">T</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-600 to-gray-400">P</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-700 to-gray-500">V</span>
          </a>
        </div>

        {/* Navigation */}
        <ul className="hidden md:flex gap-8 items-center">
          {menuItems.map((item, index) => (
            <li key={index} className="relative group">
              <a
                href={item.href || '#'}
                className="text-black font-medium no-underline flex items-center gap-1 hover:text-forest-green transition cursor-pointer"
                onClick={item.subItems ? (e) => handleDropdownClick(index, e) : undefined}
              >
                {item.name}
                {item.subItems && (
                  <ChevronDownIcon 
                    className={`w-4 h-4 mt-1 transition-transform ${
                      openDropdown === index ? 'rotate-180' : ''
                    }`} 
                  />
                )}
              </a>

              {item.subItems && openDropdown === index && (
                <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-48 z-10 px-0">
                  {item.subItems.map((sub, subIndex) => (
                    <li key={subIndex}>
                      <a
                        href={sub.href}
                        className="block w-full py-2 text-sm text-black hover:bg-gray-100 rounded-md no-underline transition-colors text-center"
                        onClick={() => setOpenDropdown(null)} // Ferme le dropdown après clic sur un sous-élément
                      >
                        {sub.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}