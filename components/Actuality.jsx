'use client';

import React from 'react';
import Image from 'next/image';

function Actuality() {
  const logos = [
    { id: 1, name: 'ASACI', src: '/images/asaci.png' },
    { id: 2, name: 'Logo 2', src: '/images/atlantique.png' },
    { id: 3, name: 'Logo 3', src: '/images/logoActiva.png' },
    { id: 4, name: 'Logo 4', src: '/images/logoArlanta.png' },
    { id: 5, name: 'Logo 5', src: '/images/loyaleLogo.png' },
    { id: 6, name: 'Logo 6', src: '/images/logoComar.png' },
    { id: 7, name: 'Logo 7', src: '/images/NSIAassurance.png' },
    { id: 8, name: 'Logo 8', src: '/images/serenityLogo.png' },
    { id: 9, name: 'Logo 9', src: '/images/sonamLogo.png' },
    { id: 10, name: 'Logo 10', src: '/images/sunuLogo.png' },
    { id: 11, name: 'Logo 11', src: '/images/gnaAssurance.png' },
    { id: 12, name: 'Logo 12', src: '/images/axaLogo.png' },
    { id: 13, name: 'Logo 13', src: '/images/logoAmsa.png' },
    { id: 14, name: 'Logo 14', src: '/images/leadwayLogo.png' },
    { id: 15, name: 'Logo 15', src: '/images/NcareLogo.png' },
    { id: 16, name: 'Logo 16', src: '/images/yacoAfrica.png' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-5xl w-full">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Nos Partenaires
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="flex items-center justify-center transition-transform duration-300 hover:scale-110 cursor-pointer"
            >
              {logo.src ? (
                <div className="w-20 h-20 relative rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              ) : (
                <div className={`w-20 h-20 ${logo.color} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg border-4 border-white`}>
                  {logo.name}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Actuality;
