'use client';

import React from 'react';
import { useRouter } from 'next/navigation';  // <-- import du router

// Données de l'article
const ARTICLE_DATA = {
  title: "47ème Assemblée Générale de la FANAF à Kinshasa",
  subtitle: "Du 20 au 24 février 2023 — Kinshasa, République Démocratique du Congo",
  theme: "L'assurance africaine : comment exploiter au maximum son potentiel pour une prospérité partagée",
  location: "Kinshasa, République Démocratique du Congo",
  dates: {
    event: "lundi 20 au vendredi 24 février 2023",
    announcement: "18 février 2023"
  },
  statistics: {
    participants: "1 000 participants",
    rdcCompanies: {
      nonLife: 7,
      life: 3,
      reinsurance: 2,
      intermediaries: 27,
      asarMembers: 11
    },
    premiums: {
      2021: "215 millions USD",
      2019: "101 millions USD"
    },
    fanafMembers: "plus de 203 sociétés membres"
  },
  keyFigures: [
    { name: "César Ekomie Afene", title: "Président de la FANAF" },
    { name: "Vincent Mwepu Makasa", title: "Président de l'ASAR-RDC" },
    { name: "Alain Kanyinde Ngalula", title: "Directeur général de l'ARCA" },
    { name: "Félix Tshisekedi", title: "Chef de l'État de la RDC" }
  ]
};

const IMAGES = {
  hero: {
    src: "/images/fanaf47.png",
    alt: "47ème Assemblée Générale de la FANAF à Kinshasa 2023",
    caption: "Vue d'ensemble de l'Assemblée Générale"
  },
  ceremony: {
    src: "/images/fanafimage1.jpg",
    alt: "Cérémonie d'ouverture FANAF Kinshasa",
    caption: "Cérémonie d'ouverture officielle"
  },
  participants: {
    src: "/images/fanafimage2.jpeg", 
    alt: "Participants à l'AG FANAF 2023",
    caption: "Les participants lors des sessions de travail"
  },
  networking: {
    src: "/images/fanafimage3.jpg",
    alt: "Séances de réseautage FANAF",
    caption: "Moments d'échanges entre professionnels"
  }
};

const ImageCard = ({ image, size = 'full', showCaption = false, className = '', priority = false, fixedHeight = false }) => {
  const sizeClasses = {
    full: 'w-full',
    half: 'md:w-1/2',
    third: 'md:w-1/3'
  };

  const heightClasses = fixedHeight 
    ? 'h-64 md:h-80'
    : 'h-auto';

  return (
    <figure className={`mb-6 ${className}`}>
      <img
        src={image.src}
        alt={image.alt}
        className={`${sizeClasses[size]} ${heightClasses} rounded-lg object-cover shadow-md hover:shadow-lg transition-shadow duration-300 w-full`}
        loading={priority ? "eager" : "lazy"}
      />
      {showCaption && image.caption && (
        <figcaption className="text-sm mt-2 italic text-center">
          {image.caption}
        </figcaption>
      )}
    </figure>
  );
};

const ImageGallery = ({ images, columns = 2 }) => {
  const gridClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <section className={`grid ${gridClasses[columns]} gap-6 mb-8`}>
      {images.map((imageKey, index) => (
        <ImageCard 
          key={index}
          image={IMAGES[imageKey]} 
          showCaption={true}
          fixedHeight={true}
          className="hover:scale-105 transition-transform duration-200"
        />
      ))}
    </section>
  );
};

const StatCard = ({ label, value, className = '' }) => (
  <div className={`bg-[#8B4513]/10 rounded-lg p-4 text-center border border-[#8B4513]/20 ${className}`}>
    <div className="text-2xl font-bold text-[#432108] mb-1">{value}</div>
    <div className="text-sm text-[#8B4513]">{label}</div>
  </div>
);

const KeyFigure = ({ name, title }) => (
  <div className="flex flex-col sm:flex-row sm:items-center mb-2">
    <span className="font-semibold text-[#432108]">{name}</span>
    <span className="text-[#8B4513] sm:ml-2">{title}</span>
  </div>
);

export default function FanafPage() {
  const router = useRouter(); // <-- initialisation du router

  return (
    <main className="bg-white min-h-screen py-12 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <article className="text-gray-900 leading-relaxed">

    <button
  onClick={() => router.back()}
  className="inline-flex items-center mb-6 px-3 py-2 rounded-md bg-[#f5f0e6] hover:bg-[#e6d9b8] text-[#3e2f1c] font-semibold transition-colors duration-200 shadow-md"
  aria-label="Retour à la liste d'actualités"
>
  <svg
    className="w-6 h-6 mr-2"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
  Retour à la liste
</button>

        {/* En-tête */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight ">
            {ARTICLE_DATA.title}
          </h1>
          <p className="text-lg  border-b border-[#8B4513]/30 pb-6">
            {ARTICLE_DATA.subtitle}
          </p>
        </header>

        {/* Image principale */}
        <ImageCard 
          image={IMAGES.hero} 
          priority={true}
          showCaption={true}
          className="mb-8"
          fixedHeight={false}
        />

        {/* Contenu principal */}
        <section className="prose prose-lg max-w-none mb-8 text-gray-900">
          <p className="text-lg leading-relaxed mb-6">
            <strong>Kinshasa</strong>, capitale de la République Démocratique du Congo, 
            a accueilli, du <strong>{ARTICLE_DATA.dates.event}</strong>, 
            la <strong>47ème Assemblée Générale</strong> de la{' '}
            <strong>Fédération des Sociétés d'Assurances de Droit National Africaines (FANAF)</strong>.
            Le thème retenu :
          </p>

          <blockquote className="border-l-4 border-[#8B4513] pl-6 py-4 italic text-xl mb-8 bg-[#8B4513]/5 rounded-r-lg">
            « {ARTICLE_DATA.theme} »
          </blockquote>
        </section>

        {/* Galerie d'images supplémentaires */}
        <ImageGallery 
          images={['ceremony', 'participants', 'networking']} 
          columns={3}
        />

        

        
        {/* Contenu suite */}
        <section className="prose prose-lg max-w-none text-gray-900">
          <p className="mb-6">
            L'annonce officielle a été faite le <strong>{ARTICLE_DATA.dates.announcement}</strong> 
            par le président de la FANAF, lors d'un point de presse conjoint avec les responsables 
            de l'ASAR-RDC et de l'ARCA.
          </p>

          <p className="mb-6">
            Sous l'égide du Chef de l'État <strong>Félix Tshisekedi</strong>, l'ASAR-RDC — créée en 2019 
            et présidée depuis 2021 par Vincent Mwepu Makasa — a accueilli cette rencontre qui a réuni 
            près de <strong >{ARTICLE_DATA.statistics.participants}</strong>, 
            intervenants et sponsors.
          </p>

          <p className="mb-6">
            Selon César Ekomie Afene, l'un des objectifs majeurs de la FANAF est{' '}
            « d'informer et de sensibiliser ses membres sur les problématiques 
            nécessitant une réflexion commune dans l'intérêt de l'industrie des assurances ».
            Le symposium annuel constitue un temps fort, permettant d'échanger sur les mutations 
            pouvant impacter la finance et l'assurance.
          </p>

          <p className="mb-6">
            Malgré la progression observée, le potentiel reste sous-exploité. Le principal défi 
            demeure l'instauration d'une véritable culture de l'assurance dans une population 
            longtemps méfiante. Les pouvoirs publics et les acteurs du secteur œuvrent à vulgariser 
            l'assurance et à restaurer la confiance du public.
          </p>
        </section>

        {/* Conclusion */}
        <footer className="mt-8 pt-6 border-t border-[#8B4513]/30 bg-white rounded-lg p-6 text-gray-900">
          <p className="text-lg">
            Fondée en <strong>1976 à Yamoussoukro (Côte d'Ivoire)</strong>, la FANAF regroupe aujourd'hui{' '}
            <strong >{ARTICLE_DATA.statistics.fanafMembers}</strong> 
            et a son siège à <strong>Dakar, Sénégal</strong>. Son assemblée générale annuelle est 
            l'occasion de renforcer la coopération entre opérateurs africains et de bâtir un marché 
            solide au service des populations.
          </p>
        </footer>
      </article>
    </main>
  );
}
