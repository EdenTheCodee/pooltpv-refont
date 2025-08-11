'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const membresPrincipaux = [
  {  photo: '/images/sunuLogo.png' },
  {  photo: '/images/atlantique.png' },
  {  photo: '/images/gnaAssurance.png' },
];

const equipeSupport = [
  {  photo: '/images/leadwayLogo.png' },
  {  photo: '/images/logoActiva.png' },
  {  photo: '/images/logoAmsa.png' },
  { photo: '/images/logoArlanta.png' },
  {  photo: '/images/NSIAassurance.png' },
  {  photo: '/images/sonamlogo.png' },
];

export default function Membres() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-white py-20 text-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mt-10 text-center mb-4" data-aos="fade-up">
          Nos partenaires 
        </h2>

        {/* Membres principaux */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {membresPrincipaux.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-3 text-center shadow-md hover:scale-105 transition duration-300"
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              <div className="relative w-full h-40 overflow-hidden rounded-lg mb-3 bg-white">
                <Image
                  src={member.photo}
                  alt={`Membre ${index + 1}`}
                  layout="fill"
                  objectFit="contain" // <-- Voir logo entier
                  objectPosition="center"
                  className="rounded-lg"
                />
              </div>
               {/* <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-600 text-sm mt-1">{member.role}</p>*/}
            </div>
          ))}
        </div>

        {/* Équipe support */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {equipeSupport.map((member, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-3 text-center shadow-sm hover:shadow-md transition"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative w-full h-36 overflow-hidden rounded-lg mb-2 bg-white">
                <Image
                    src={member.photo}
                    alt={`Membre Support ${index + 1}`}
                  layout="fill"
                  objectFit="contain" // <-- Voir logo entier
                  objectPosition="center"
                  className="rounded-lg"
                />
              </div>
              {/* <h4 className="text-base font-medium">{member.name}</h4>*/}
              {/* <p className="text-gray-500 text-xs">{member.role}</p>*/}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
