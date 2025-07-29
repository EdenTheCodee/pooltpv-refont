"use client";
import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email soumis:', email);
    setEmail('');
  };

  return (
    <footer className="bg-[#432108] text-white px-8 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Container glassmorphisme principal */}
        <div className="bg-brown text-white px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Pool TPV - Informations de contact */}
            <div className="flex flex-col items-start text-left">
              <h4 className="text-xl font-semibold mb-4 text-left w-full">POOL TPV</h4>
              <div className="space-y-3 text-sm w-full">
                {/* Localisation */}
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-left">Abidjan, Côte d'Ivoire</span>
                </div>
                
                {/* Téléphone */}
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+2250123456789" className="text-left hover:text-white no-underline text-gray-300 transition-colors">
                    +225 01 23 45 67 89
                  </a>
                </div>
                
                {/* Email */}
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:contact@pooltpv.ci" className="text-left hover:text-white no-underline text-gray-300 transition-colors">
                    contact@pooltpv.ci
                  </a>
                </div>
              </div>
            </div>

            {/* À propos */}
            <div className="flex flex-col items-start text-left">
              <h4 className="text-xl font-semibold mb-4 text-left w-full">À propos</h4>
              <ul className="space-y-2 text-sm w-full">
                <li className="text-left">
                  <a href="#contact" className="text-white no-underline hover:text-gray-300 transition-colors">
                    Présentation
                  </a>
                </li>
                <li className="text-left">
                  <a href="#" className="text-white no-underline hover:text-gray-300 transition-colors">
                    Historique de création
                  </a>
                </li>
                <li className="text-left">
                  <a href="#" className="text-white no-underline hover:text-gray-300 transition-colors">
                    Mission et ambitions
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter - repositionnée avec padding */}
            <div className="flex flex-col items-start text-left md:pl-6">
              <h4 className="text-xl font-semibold mb-4 text-left w-full">Newsletter</h4>
              <div className="space-y-4 text-sm w-full">
                <input
                  type="email"
                  placeholder="votre@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl bg-white/20 backdrop-blur-sm text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all"
                />
                <button
                  onClick={handleSubmit}
                  className="w-full bg-white/20 backdrop-blur-sm text-white font-semibold py-2 rounded-xl border border-white/30 hover:bg-white/30 hover:scale-105 transition-all duration-300"
                >
                  S'abonner
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ligne de séparation */}
      <div className="mt-10 border-t border-white/20 pt-6">
        <div className="text-center text-sm text-white/70">
          © {new Date().getFullYear()} Pool TPV. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;