'use client';
import Image from 'next/image';
import '/app/globals.css';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useState, useEffect, useRef } from 'react';
import ModalContact from './ModalContact'; // Assure-toi que ce fichier existe dans components/

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
  { name: 'NOS MEMBRES', href: '#members' },
  {
    name: 'ACTUALITES',
    subItems: [
      { name: 'EVENEMENTS', href: '#EVENTS' },
      { name: "APPEL D'OFFRES", href: '#appelOffre' },
    ],
  },
  { name: 'CONTACTS', href: '#' }, // On va gérer ce clic manuellement
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDropdownClick = (index, event) => {
    event.preventDefault();
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <>
      <nav className="bg-white shadow-md z-50 w-full px-8 py-2 fixed top-0" ref={navRef}>
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          {/* Logo + texte */}
          <div className="flex items-center gap-4">
            <div className="relative w-20 h-20">
              <Image src="/images/logo-pooltpv.png" alt="Logo Pool TPV" fill className="object-contain" />
            </div>
            <div className="w-px h-8 bg-gray-300" />
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
                  href={item.href}
                  className="text-black font-medium no-underline flex items-center gap-1 hover:text-forest-green transition cursor-pointer"
                  onClick={(e) => {
                    if (item.subItems) {
                      handleDropdownClick(index, e);
                    } else if (item.name === 'CONTACTS') {
                      e.preventDefault();
                      setIsContactOpen(true);
                    }
                  }}
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
                          onClick={() => setOpenDropdown(null)}
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

      {/* Contact Modal */}
      <ModalContact isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}
