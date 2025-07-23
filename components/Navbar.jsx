'use client'
import Image from 'next/image'
import '/app/globals.css';
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setIsScroll(true);
      else setIsScroll(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    
  <div className='bg-white z-50'>
    <div className='fixed top-0 right-0 w-full z-50'>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-2 
          flex items-center justify-between z-50 bg-white ${isScroll ? "shadow-sm" : ""}`}
      >
        <ul>
          <a href="#top" className="no-underline ms-auto font-bold text-black">
            <h2>POOL TPV</h2>
          </a>
        </ul>
        <ul
          className="hidden md:flex items-center gap-6 lg:gap-8 px-12 py-3 bg-white"
        >
          <li>
            <a href='/' className='text-black no-underline border-b-0 hover:border-b-4 hover:border-forest-green transition'>Accueil</a>
          </li>
          <li>
            <a href='#about' className='text-black no-underline border-b-0 hover:border-b-4 hover:border-forest-green transition'>A propos</a>
          </li>
          <li>
            <a href='#work' className='text-black no-underline border-b-0 hover:border-b-4 hover:border-forest-green transition'>
              Missions et ambitions
            </a>
          </li>
          <li>
            <a href='#contact' className='text-black no-underline border-b-0 hover:border-b-4 hover:border-forest-green transition'>Contacts</a>
          </li>
          <li>
            <a href="/sahil-enterprises.pdf" download className="bg-forest-green text-white font-semibold py-2.5 px-4 rounded no-underline">Brouchure</a>
          </li>
        </ul>
        
   

          {/* Mobile menu */}
          <ul
            className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen transition-transform duration-500 bg-forest-green text-white
              ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          >
            <button className='absolute right-6 top-6 cursor-pointer' onClick={() => setMenuOpen(false)}>
              <RxCross1 size={28} />
            </button>
            <li>
              <a href='/' className="text-white no-underline border-b-0 hover:border-b-4 hover:border-white transition" onClick={() => setMenuOpen(false)}>Accueil</a>
            </li>
            <li>
              <a href='#about' className="text-white no-underline border-b-0 hover:border-b-4 hover:border-white transition" onClick={() => setMenuOpen(false)}>A propos</a>
            </li>
            <li>
              <a href='#work' className="text-white no-underline border-b-0 hover:border-b-4 hover:border-white transition" onClick={() => setMenuOpen(false)}>Missions et ambitions</a>
            </li>
            <li>
              <a href='#contact' className="text-white no-underline border-b-0 hover:border-b-4 hover:border-white transition" onClick={() => setMenuOpen(false)}>Contact us</a>
            </li>
          </ul>
          {!menuOpen && (
            <button className='block md:hidden ml-3 text-forest-green' onClick={() => setMenuOpen(true)}>
              <CiMenuFries size={32} />
            </button>
          )}
        </nav>
      </div>
    </div>
  )
}

export default Navbar