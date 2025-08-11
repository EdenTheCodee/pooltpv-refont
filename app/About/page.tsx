'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutPage: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const features = [
    {
      title: "Souscription Centralisée",
      image: "/images/hanshake1.jpg",
      description: "Un système unifié de souscription garantissant une couverture optimale et standardisée.",
    },
    {
      title: "Attestations Spéciales",
      image: "/images/handshake2.jpg",
      description: "Délivrance d'attestations Pool TPV exclusives, propriété et distribution officielles.",
    },
    {
      title: "Réseau de Partenaires",
      image: "/images/handshake3.jpg",
      description: "Distribution via compagnies d'assurances partenaires et bureaux propres.",
    },
    {
      title: "Contrôle Rigoureux",
      image: "/images/office.jpg",
      description: "Système de contrôle strict pour une distribution homogène nationale.",
    },
  ];

  const membresPrincipaux = [
    { name: 'M. Koné Ibrahim', role: 'Directeur du Pool TPV', photo: '/images/PINTEREST.jpg' },
    { name: 'Mme Toure Awa', role: 'Responsable des Sinistres Auto', photo: '/images/photoPRO.jpg' },
    { name: 'M. N’Guessan Hervé', role: 'Chef Comptable', photo: '/images/PHOTOPRO2.jpg' },
  ];

  const equipeSupport = [
    { name: 'M. Traoré Souleymane', role: 'Assistant de Direction', photo: '/images/photopro5.jpg' },
    { name: 'Mme Diabaté Aïssata', role: 'Chargée des Opérations Terrain', photo: '/images/photopro10.jpg' },
    { name: 'Mme Yao Clarisse', role: 'Chargée de la Communication Digitale', photo: '/images/photopro6.jpg' },
    { name: 'M. Bakayoko Idrissa', role: 'Analyste Statistiques Sinistres', photo: '/images/photopro7.jpg' },
    { name: 'Mme Kouamé Gisèle', role: 'Assistante Administrative', photo: '/images/photopro8.jpg' },
    { name: 'M. Coulibaly Mahamadou', role: 'Responsable Réseau & Systèmes', photo: '/images/photopro9.jpg' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header
        className="relative py-16 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/insidetaxi.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-2 bg-white/10 rounded-lg text-white text-sm mb-6">
            Groupement d&apos;Intérêt Économique
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Pool Transports Publics de Voyageurs
          </h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Une vision solidaire et structurée du secteur du transport public, unissant les acteurs pour une régulation moderne et efficace.
          </p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Organisation */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#432108' }}>
                Notre Organisation
              </h2>
              <div className="prose prose-lg text-gray-700">
                <p>
                  Créé sous la forme d&apos;un <strong>Groupement d&apos;Intérêt Économique (GIE)</strong>, le Pool TPV incarne une vision solidaire et structurée du secteur du transport public.
                </p>
                <p>
                  Ce système favorise une souscription centralisée, avec la délivrance d&apos;attestations spéciales Pool TPV, dont l&apos;organisme reste le seul propriétaire et distributeur officiel.
                </p>
                <p>
                  Les attestations sont diffusées à travers les compagnies d&apos;assurances partenaires ainsi que les bureaux propres du Pool TPV, assurant ainsi un contrôle rigoureux et une distribution homogène sur l&apos;ensemble du territoire.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#432108' }}>
                Rôle Stratégique
              </h3>
              <p className="text-gray-700 mb-6">
                En unissant les acteurs du secteur, le Pool TPV se positionne comme un pilier stratégique de la régulation et de la modernisation du transport public de voyageurs.
              </p>
              <div className="flex items-center text-sm text-[#432108]">
                <span className="font-medium">Union des acteurs du secteur</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#432108' }}>
              Nos Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Un système complet pour garantir l&apos;excellence du transport public
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative rounded-xl overflow-hidden h-64 shadow-md hover:scale-[1.01] transition-transform"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${feature.image})` }}
                ></div>
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 text-white">
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm opacity-90">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* Équipe */}
        <section className="bg-white py-20 text-gray-800">
          <h2 className="text-4xl font-bold text-center mb-4" data-aos="fade-up">
            Notre Équipe
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Découvrez les femmes et les hommes qui œuvrent chaque jour pour assurer le bon fonctionnement du Pool TPV.
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
                <div className="relative w-full h-64 overflow-hidden rounded-lg mb-4">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center top"
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600 text-sm mt-1">{member.role}</p>
              </div>
            ))}
          </div>

          {/* Équipe support */}
          <h3 className="text-2xl font-bold mt-20 mb-6 text-center" data-aos="fade-up" data-aos-delay="200">
            Équipe de Soutien
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {equipeSupport.map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center shadow-sm hover:shadow-md transition"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative w-full h-60 overflow-hidden rounded-lg mb-3">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center top"
                    className="rounded-lg"
                  />
                </div>
                <h4 className="text-lg font-medium">{member.name}</h4>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center mt-20">
          <div className="rounded-lg p-12 text-white" style={{ backgroundColor: '#432108' }}>
            <h2 className="text-3xl font-bold mb-4">Rejoignez le Pool TPV</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Participez à la modernisation du transport public et bénéficiez d&apos;un système d&apos;assurance solidaire et structuré.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-900 font-medium px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Nous Contacter
              </button>
              <button className="border-2 border-white text-white font-medium px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
                En Savoir Plus
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
