'use client';
import Image from 'next/image';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
import { useState, useEffect, useRef } from 'react';
import ModalContact from './ModalContact'; 
import { useRouter } from 'next/navigation';

const menuItems = [
  { name: 'ACCUEIL', href: '/' },
  { name: 'À PROPOS', href: 'About'  },
  { name: 'NOS PARTENAIRES', href: 'membre' },
  { name: 'ACTUALITES', href: 'actualite' },
  {name: 'CONTACTS',href: 'contact',},
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const router = useRouter(); // Always call useRouter unconditionally

  useEffect(() => {
    setIsMounted(true); // Set mounted state after component mounts
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Fermer le menu mobile quand on redimensionne vers desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDropdownClick = (index, event) => {
    event.preventDefault();
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    if (isMounted && router) {
      router.push('/contact');
    } else {
      setIsContactOpen(true); // Fallback to modal if router isn't ready
    }
    // Fermer le menu mobile après clic
    setIsMobileMenuOpen(false);
  };

  const handleMobileMenuItemClick = (item, index, e) => {
    if (item.subItems) {
      handleDropdownClick(index, e);
    } else if (item.name === 'CONTACTS') {
      handleContactClick(e);
    } else {
      // Fermer le menu mobile pour les liens normaux
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className="bg-white shadow-md z-50 w-full px-8 py-2 fixed top-0"
        ref={navRef}
        aria-label="Main Navigation"
      >
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          {/* Logo + texte */}
          <div className="flex items-center gap-4">
            <div className="relative w-20 h-20">
              <Image
                src="/images/logo-pooltpv.png"
                alt="Logo Pool TPV"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-px h-8 bg-gray-300" />
            <a
              href="/"
              className="text-xl font-bold no-underline flex gap-0.5"
              aria-label="Home"
            >
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

          {/* Navigation Desktop */}
          <ul className="hidden md:flex gap-8 items-center">
            {menuItems.map((item, index) => (
              <li key={index} className="relative group">
                <a
                  href={item.href || '#'}
                  className="text-black font-medium no-underline flex items-center gap-1 hover:text-forest-green transition cursor-pointer"
                  onClick={(e) => {
                    if (item.subItems) {
                      handleDropdownClick(index, e);
                    } else if (item.name === 'CONTACTS') {
                      handleContactClick(e);
                    }
                  }}
                  aria-haspopup={item.subItems ? 'true' : 'false'}
                  aria-expanded={openDropdown === index}
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
                  <ul
                    className="absolute left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-48 z-10 px-0"
                    role="menu"
                  >
                    {item.subItems.map((sub, subIndex) => (
                      <li key={subIndex}>
                        <a
                          href={sub.href}
                          className="block w-full py-2 text-sm text-black hover:bg-gray-100 rounded-md no-underline transition-colors text-center"
                          onClick={() => setOpenDropdown(null)}
                          role="menuitem"
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

          {/* Bouton Hamburger Mobile */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6 text-gray-700" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200">
            <ul className="py-4">
              {menuItems.map((item, index) => (
                <li key={index} className="relative">
                  <a
                    href={item.href || '#'}
                    className="flex items-center justify-between px-8 py-3 text-black font-medium no-underline hover:bg-gray-50 transition-colors"
                    onClick={(e) => handleMobileMenuItemClick(item, index, e)}
                    aria-haspopup={item.subItems ? 'true' : 'false'}
                    aria-expanded={openDropdown === index}
                  >
                    <span>{item.name}</span>
                    {item.subItems && (
                      <ChevronDownIcon
                        className={`w-4 h-4 transition-transform ${
                          openDropdown === index ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </a>

                  {item.subItems && openDropdown === index && (
                    <ul className="bg-gray-50 border-t border-gray-200">
                      {item.subItems.map((sub, subIndex) => (
                        <li key={subIndex}>
                          <a
                            href={sub.href}
                            className="block px-12 py-2 text-sm text-gray-700 hover:bg-gray-100 no-underline transition-colors"
                            onClick={() => {
                              setOpenDropdown(null);
                              setIsMobileMenuOpen(false);
                            }}
                            role="menuitem"
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
        )}
      </nav>

      {/* Contact Modal */}
      <ModalContact isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}