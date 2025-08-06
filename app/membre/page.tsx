'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const membresPrincipaux = [
  { name: 'M. Koné Ibrahim', role: 'Inspecteur Principal', photo: '/images/PINTEREST.jpg' },
  { name: 'Mme Toure Awa', role: 'Responsable Sinistres', photo: '/images/photoPRO.jpg' },
  { name: 'M. N’Guessan Hervé', role: 'Comptable', photo: '/images/PHOTOPRO2.jpg' },
];

const equipeSupport = [
  { name: 'Mme Coulibaly Inès', role: 'Assistante Administrative', photo: '/images/avatar-f.png' },
  { name: 'M. Traoré Souleymane', role: 'Chargé d’Opérations', photo: '/images/avatar-m.png' },
  { name: 'Mme Yao Clarisse', role: 'Chargée de Communication', photo: '/images/avatar-f.png' },
  { name: 'Mme Coulibaly Inès', role: 'Assistante Administrative', photo: '/images/avatar-f.png' },
  { name: 'M. Traoré Souleymane', role: 'Chargé d’Opérations', photo: '/images/avatar-m.png' },
  { name: 'Mme Yao Clarisse', role: 'Chargée de Communication', photo: '/images/avatar-f.png' },
];

export default function Membres() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-white py-20 text-gray-800">
      <div className="container mx-auto px-6">
        {/* Titre principal */}
        <h2
          className="text-4xl font-bold mt-10 text-center mb-4"
          data-aos="fade-up"
        >
          Nos Membres
        </h2>
        <p
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Découvrez les femmes et les hommes qui assurent au quotidien le bon fonctionnement du Pool TPV. Leur engagement, leur rigueur et leur expertise sont le socle de notre efficacité.
        </p>

        {/* Membres principaux */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {membresPrincipaux.map((member, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl p-4 text-center shadow-md hover:scale-105 transition duration-300"
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              <div className="w-full h-64 overflow-hidden rounded-lg mb-4">
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600 text-sm mt-1">{member.role}</p>
            </div>
          ))}
        </div>

        {/* Équipe support */}
        <h3
          className="text-2xl font-bold mt-20 mb-6 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Équipe Support
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {equipeSupport.map((member, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center shadow-sm hover:shadow-md transition"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-full h-60 overflow-hidden rounded-lg mb-3">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-lg font-medium">{member.name}</h4>
              <p className="text-gray-500 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
