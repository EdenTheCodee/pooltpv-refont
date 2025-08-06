'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const images = [
  '/images/heroimg1.jpg',
  '/images/heroimg2.jpg',
  '/images/heroimg3.jpg',
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [titleText, setTitleText] = useState('');
  const [subtitleText, setSubtitleText] = useState('');
  const [showButtons, setShowButtons] = useState(false);
  const intervalRef = useRef(null);

  // Fonctions de navigation
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  
  const fullTitle = 'POOL TPV';
  const fullSubtitle = 'Pool Transport Public Voyageurs';

  useEffect(() => {
    // Animation du titre (typewriter effect)
    let titleIndex = 0;
    const titleTimer = setInterval(() => {
      if (titleIndex < fullTitle.length) {
        setTitleText(fullTitle.slice(0, titleIndex + 1));
        titleIndex++;
      } else {
        clearInterval(titleTimer);
        // Commencer l'animation du sous-titre après le titre
        setTimeout(() => {
          let subtitleIndex = 0;
          const subtitleTimer = setInterval(() => {
            if (subtitleIndex < fullSubtitle.length) {
              setSubtitleText(fullSubtitle.slice(0, subtitleIndex + 1));
              subtitleIndex++;
            } else {
              clearInterval(subtitleTimer);
              // Afficher les boutons après le sous-titre
              setTimeout(() => {
                setShowButtons(true);
              }, 500);
            }
          }, 100); // Vitesse d'écriture du sous-titre
        }, 500); // Délai avant le sous-titre
      }
    }, 200); // Vitesse d'écriture du titre

    // Fonction pour passer à l'image suivante
    const nextImage = goToNext;

    // Démarrer l'intervalle des images
    intervalRef.current = setInterval(goToNext, 4000);

    // Nettoyer les timers au démontage
    return () => {
      clearInterval(titleTimer);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <section className="relative h-screen min-h-[80vh] overflow-hidden flex items-center justify-center">
      {/* Container des images */}
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={src}
              alt={`Hero ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Flèches de navigation - Responsive */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-lg border border-white/20 text-white p-2 md:p-4 rounded-full hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110 shadow-xl hover:shadow-2xl"
        aria-label="Image précédente"
      >
        <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-lg border border-white/20 text-white p-2 md:p-4 rounded-full hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110 shadow-xl hover:shadow-2xl"
        aria-label="Image suivante"
      >
        <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

      {/* Contenu textuel avec effet typewriter */}
      <div className="relative z-20 text-center text-white space-y-4 px-4">
        {/* Titre avec effet typewriter */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight min-h-[4rem] md:min-h-[6rem] flex items-center justify-center">
          <span className="typewriter-text">
            {titleText}
          </span>
          <span className={`typewriter-cursor ${titleText.length === fullTitle.length ? 'opacity-0' : 'opacity-100'}`}>
            |
          </span>
        </h1>
        
        {/* Sous-titre avec effet typewriter */}
        <p className="text-xl md:text-2xl min-h-[2rem] md:min-h-[3rem] flex items-center justify-center">
          <span className="typewriter-text">
            {subtitleText}
          </span>
          <span className={`typewriter-cursor ${subtitleText.length === fullSubtitle.length ? 'opacity-0' : 'opacity-100'}`}>
            |
          </span>
        </p>
        
        {/* Boutons avec animation d'apparition */}
        <div className={`mt-6 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 ${
          showButtons 
            ? 'translate-y-0 opacity-100 scale-100' 
            : 'translate-y-10 opacity-0 scale-95'
        }`}>
          <a
            href="About"
            className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-lg shadow-md  hover:text-forest-green hover:border-white transition-all duration-300 font-semibold no-underline hover:scale-105 hover:shadow-xl"
          >
            Découvrir
          </a>
          <a
            href="contact"
            className="bg-white text-black px-8 py-3 rounded-md shadow hover:bg-forest-green hover:text-white transition-all duration-300 font-semibold no-underline hover:scale-105 hover:shadow-lg"
          >
            Nous contacter
          </a>
        </div>
      </div>

      {/* Indicateurs de position */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-110 ${
              index === currentIndex 
                ? 'bg-white scale-110 animate-pulse' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Aller à l'image ${index + 1}`}
          />
        ))}
      </div>

      {/* Styles pour l'effet typewriter */}
      <style jsx>{`
        .typewriter-text {
          display: inline-block;
        }
        
        .typewriter-cursor {
          display: inline-block;
          animation: blink 1s infinite;
          margin-left: 2px;
          font-weight: 100;
        }
        
        @keyframes blink {
          0%, 50% {
            opacity: 1;
          }
          51%, 100% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}