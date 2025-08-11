'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const membresPrincipaux = [
  {
    name: 'M. Koné Ibrahim',
    role: 'Directeur du Pool TPV',
    photo: '/images/PINTEREST.jpg',
    message: "Guider avec clairvoyance, bâtir notre avenir ensemble."
  },
  {
    name: 'Mme Toure Awa',
    role: 'Responsable des Sinistres Auto',
    photo: '/images/photoPRO.jpg',
    message: "Chaque dossier traité avec attention et empathie."
  },
  {
    name: 'M. N’Guessan Hervé',
    role: 'Chef Comptable',
    photo: '/images/PHOTOPRO2.jpg',
    message: "Les chiffres racontent l’histoire de notre transparence."
  },
];

const equipeSupport = [
  {
    name: 'M. Traoré Souleymane',
    role: 'Assistant de Direction',
    photo: '/images/photopro5.jpg',
    message: "Soutenir chaque projet avec dévouement et énergie."
  },
  {
    name: 'Mme Diabaté Aïssata',
    role: 'Chargée des Opérations Terrain',
    photo: '/images/photopro10.jpg',
    message: "Relier terrain et stratégie avec passion."
  },
  {
    name: 'Mme Yao Clarisse',
    role: 'Chargée de la Communication Digitale',
    photo: '/images/photopro6.jpg',
    message: "Partager nos valeurs et notre vision au monde."
  },
];

export default function Membres() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-black py-20 text-gray-200 min-h-screen">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2
          className="text-4xl font-extrabold text-[#8B4513] text-center mb-12"
          data-aos="fade-down"
        >
          Conseil d'administration
        </h2>
        <p
          className="text-center text-gray-400 mb-16 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          Découvrez les femmes et les hommes qui œuvrent chaque jour pour assurer le bon fonctionnement du Pool TPV.
        </p>

        {/* Arbre hiérarchique */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-14"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          {membresPrincipaux.map(({ name, role, photo, message }, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl p-6 flex flex-col items-center shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay={index * 200}
            >
              <div className="relative w-40 h-40 rounded-full overflow-hidden mb-5 ring-4 ring-[#8B4513]">
                <Image
                  src={photo}
                  alt={name}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  priority
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">{name}</h3>
              <p className="text-[#D2B48C] italic text-sm mb-4">{role}</p>
              <p className="text-center text-gray-400 text-sm leading-relaxed max-w-xs">
                “{message}”
              </p>
            </div>
          ))}
        </div>

        <h3
          className="text-3xl font-bold text-[#8B4513] text-center mt-24 mb-10"
          data-aos="fade-down"
          data-aos-delay={400}
        >
          Équipe de Soutien
        </h3>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12"
          data-aos="fade-up"
          data-aos-delay={500}
        >
          {equipeSupport.map(({ name, role, photo, message }, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-5 flex flex-col items-center shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 ring-2 ring-[#8B4513]">
                <Image
                  src={photo}
                  alt={name}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  priority
                />
              </div>
              <h4 className="text-lg font-semibold mb-1">{name}</h4>
              <p className="text-[#CDAA7D] italic text-sm mb-3">{role}</p>
              <p className="text-center text-gray-400 text-xs leading-relaxed max-w-xs">
                “{message}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
