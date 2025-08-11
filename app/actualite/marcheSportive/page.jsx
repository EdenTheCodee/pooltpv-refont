'use client';

import React from 'react';

// Configuration des données
const ARTICLE_DATA = {
  title: "Journée sportive : les assureurs évacuent le stress et tissent des liens d'amitié dans la forêt du Banco",
  quote: {
    text: "Ce type d'activité permet de se connaître, se détendre et renforcer notre secteur",
    author: "Mamadou Koné",
    title: "Président de l'ASACI et DG Allianz Côte d'Ivoire"
  }
};

const IMAGES = [
  {
    src: "/images/marche2.jpg",
    alt: "Marche sportive ASACI dans la forêt du Banco"
  },
  {
    src: "/images/marche1.jpg", 
    alt: "Participants lors de la marche sportive des assureurs"
  },
  {
    src: "/images/marche3.jpg",
    alt: "Ambiance conviviale durant l'événement ASACI"
  }
];

// Section image à côté du texte (image à droite)
const ImageSideTextSection = ({ image, children }) => (
  <section className="max-w-4xl mx-auto mb-8 flex flex-col mt-10 md:flex-row items-start gap-8">
    <div className="md:w-1/2 text-white text-lg leading-relaxed">
      {children}
    </div>
    <img
      src={image.src}
      alt={image.alt}
      className="md:w-1/2 w-full h-auto rounded-lg object-cover shadow-sm"
      loading="lazy"
    />
  </section>
);

// Section image avec texte au-dessus
const ImageBelowTextSection = ({ image, introText, children }) => (
  <section className="max-w-4xl mx-auto mb-8">
    {introText && (
      <p className="text-white text-lg leading-relaxed mb-4">
        {introText}
      </p>
    )}
    <img
      src={image.src}
      alt={image.alt}
      className="w-full h-auto rounded-lg mb-6 object-cover shadow-sm"
      loading="lazy"
    />
    <div className="text-white text-lg leading-relaxed">
      {children}
    </div>
  </section>
);

// Section image avec texte dessous
const ImageAboveTextSection = ({ image, children }) => (
  <section className="max-w-4xl mx-auto mb-8">
    <img
      src={image.src}
      alt={image.alt}
      className="w-full h-auto rounded-lg mb-6 object-cover shadow-sm"
      loading="lazy"
    />
    <div className="text-white text-lg leading-relaxed">
      {children}
    </div>
  </section>
);

// Composant citation en blanc sur fond noir
const Quote = ({ quote, author, title }) => (
  <blockquote className="relative border-l-8 border-white bg-transparent rounded-r-lg py-6 pl-10 pr-6 mb-12 text-white italic prose prose-lg max-w-4xl mx-auto">
    <svg
      className="absolute left-3 top-3 w-8 h-8 text-white"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M7.17 6.17a4 4 0 0 0-4 4v7a2 2 0 0 0 2 2h2v-2H5v-7a2 2 0 0 1 2-2h1v-2H7.17zm9 0a4 4 0 0 0-4 4v7a2 2 0 0 0 2 2h2v-2h-2v-7a2 2 0 0 1 2-2h1v-2h-1.83z" />
    </svg>
    <p className="mb-4">« {quote} »</p>
    <cite className="not-italic font-semibold text-white text-base">
      — {author}{title && <span className="font-normal">, {title}</span>}
    </cite>
  </blockquote>
);

// Composant principal
export default function MarcheSportivePage() {
  return (
    <>
      <style jsx global>{`
        html, body, #__next {
          height: 100%;
          margin: 0;
          padding: 0;
          background-color: black;
          color: white;
          font-family: system-ui, sans-serif;
        }
      `}</style>

      <main className="bg-black min-h-screen mt- py-12 px-4 md:px-12 lg:px-24 max-w-6xl mx-auto">
        <article className="leading-relaxed">
          {/* En-tête */}
          <header className="max-w-4xl mx-auto mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-white">
              {ARTICLE_DATA.title}
            </h1>
          </header>

          {/* 1ère section : texte à gauche, image à droite */}
          <ImageSideTextSection image={IMAGES[0]}>
            <p>
              Pour un coup d'essai, ce fut un véritable coup de maître. La marche sportive, 
              journée récréative organisée le samedi 1er juillet 2023 dans la{' '}
              <strong>forêt du Banco</strong> par l'ASACI, 
              a rassemblé plus de <strong>800 employés du secteur des assurances</strong>, 
              transformant l'événement en une célébration d'unité et de convivialité.
            </p>
            <p>
              À la place du traditionnel tournoi de football inter-compagnies, 
              cette <em className="font-medium">randonnée pédestre</em> fut 
              ponctuée de jeux collectifs, d'activités récréatives et d'un repas chaleureux, 
              laissant place à la détente après un semestre intense.
            </p>
          </ImageSideTextSection>

          {/* 2ème section : texte au-dessus de l'image */}
          <ImageBelowTextSection
            image={IMAGES[1]}
            introText="La marche sportive a insufflé énergie et complicité, réunissant des assureurs dans un élan de fraternité. Chaque pas renforçait les liens et effaçait le stress du quotidien. Une journée où l’amitié s’est tissée au cœur de la forêt du Banco."
          >
            {/* aucun texte dessous */}
          </ImageBelowTextSection>

          {/* Citation */}
          <Quote 
            quote={ARTICLE_DATA.quote.text}
            author={ARTICLE_DATA.quote.author}
            title={ARTICLE_DATA.quote.title}
          />

          {/* 3ème section : image au-dessus, texte en dessous */}
          <ImageAboveTextSection image={IMAGES[2]}>
            <p>
              L'événement a aussi été salué par <strong>Jean Baptiste Aizan</strong>, 
              président du comité d'organisation, qui a mis en avant la fraternité et le réseau 
              que cette marche contribue à développer au sein de la profession.
            </p>
          </ImageAboveTextSection>

          {/* Conclusion */}
          <section className="max-w-4xl mx-auto mt-8 pt-6 border-t border-gray-700">
            <p className="text-lg mb-6 text-white">
              De son côté, <strong>Gérard Kouamé Ballo</strong>, 
              secrétaire général de l'ASACI, a rappelé que l'association regroupe{' '}
              <strong>42 sociétés membres</strong>, dont 22 compagnies non-vie, 
              10 vie, 8 de réassurance, ainsi que la CNPS et le FGA. Sa mission : défendre les intérêts 
              des membres et renforcer les liens humains dans le secteur.
            </p>
            
            <footer className="text-right">
              <p className="font-semibold text-gray-400 text-sm">— {ARTICLE_DATA.quote.author}</p>
            </footer>
          </section>
        </article>
      </main>
    </>
  );
}
