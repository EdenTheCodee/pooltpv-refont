'use client';
import React from 'react';
import Image from 'next/image'; 

function About() {
  return (
    <div id="about" className="w-full px-[8%] py-16 bg-black scroll-mt-20">
      
      {/* Bande noire défilante */}
      <div className="w-full bg-[#442108] py-2 overflow-hidden mb-10">
        <div className="marquee text-white text-center text-sm md:text-base font-semibold tracking-wide">
          {Array(4).fill(0).map((_, i) => (
            <span key={i} className="inline-block mx-4">
              POOL TPV – Pool Transports Publics de Voyageurs
            </span>
          ))}
        </div>
      </div>
      
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-tight text-white">
        À propos de nous
      </h2>
      
      {/* Layout avec image à gauche et blocs de texte à droite */}
      <div className="flex flex-col lg:flex-row items-start gap-12">
        
        {/* Image à gauche */}
        <div className="flex-shrink-0 w-full py-10 lg:w-[600px]">
          <img
            src="/images/traffic.jpg"
            alt="Circulation - Pool TPV"
            className="rounded-xl object-cover w-full h-auto"
          />
        </div>
        
        {/* Blocs de texte à droite */}
        <div className="flex-1 space-y-8">
          
          {/* Bloc de texte 1 */}
          <div className="text-white text-lg leading-relaxed space-y-4">
            <p>
              Créé sous la forme d'un Groupement d'Intérêt Économique (GIE), <span className="font-semibold text-[#8B4513]">le Pool Transports Publics de Voyageurs</span> (Pool TPV) incarne une vision solidaire et structurée du secteur du transport public.
            </p>
            <p>
              Ce système favorise une souscription centralisée, avec la délivrance d'attestations spéciales Pool TPV, dont l'organisme reste le seul propriétaire et distributeur officiel.
            </p>
          </div>
          
          {/* Ligne de séparation */}
          <div className="w-1/2 h-1 bg-[#8B4513]/50 rounded-full"></div>
          
          {/* Bloc de texte 2 */}
          <div className="text-white text-lg leading-relaxed space-y-4">
            <p>
              Les attestations sont diffusées à travers les compagnies d'assurances partenaires ainsi que les bureaux propres du Pool TPV, assurant ainsi un contrôle rigoureux et une distribution homogène sur l'ensemble du territoire.
            </p>
            <p>
              En unissant les acteurs du secteur, le Pool TPV se positionne comme un pilier stratégique de la régulation et de la modernisation du transport public de voyageurs.
            </p>
          </div>
        </div>
      </div>

      {/* Style JSX pour l'animation de la bande noire */}
      <style jsx>{`
        .marquee {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 20s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}

export default About;
