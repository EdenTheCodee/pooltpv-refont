'use client';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [titleText, setTitleText] = useState('');
  const [subtitleText, setSubtitleText] = useState('');
  const [showButtons, setShowButtons] = useState(false);

  const fullTitle = 'POOL TPV';
  const fullSubtitle = 'Pool Transports Publics de Voyageurs';

  useEffect(() => {
    let titleIndex = 0;
    const titleTimer = setInterval(() => {
      if (titleIndex < fullTitle.length) {
        setTitleText(fullTitle.slice(0, titleIndex + 1));
        titleIndex++;
      } else {
        clearInterval(titleTimer);
        setTimeout(() => {
          let subtitleIndex = 0;
          const subtitleTimer = setInterval(() => {
            if (subtitleIndex < fullSubtitle.length) {
              setSubtitleText(fullSubtitle.slice(0, subtitleIndex + 1));
              subtitleIndex++;
            } else {
              clearInterval(subtitleTimer);
              setTimeout(() => {
                setShowButtons(true);
              }, 500);
            }
          }, 100);
        }, 500);
      }
    }, 150);

    return () => {
      clearInterval(titleTimer);
    };
  }, []);

  return (
    <section className="relative h-screen min-h-[80vh] overflow-hidden flex items-center justify-center">
      {/* Vidéo de fond */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/herovid1.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas les vidéos HTML5.
      </video>


      {/* Texte principal */}
      <div className="relative z-20 text-center text-white px-4 space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide min-h-[3rem] md:min-h-[5rem]">
          <span>{titleText}</span>
          <span className={`typewriter-cursor ${titleText.length === fullTitle.length ? 'opacity-0' : 'opacity-100'}`}>
            |
          </span>
        </h1>
        <p className="text-lg md:text-2xl min-h-[2rem]">
          <span>{subtitleText}</span>
          <span className={`typewriter-cursor ${subtitleText.length === fullSubtitle.length ? 'opacity-0' : 'opacity-100'}`}>
            |
          </span>
        </p>

        {/* Boutons */}
        <div className={`mt-6 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 ${
          showButtons ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <a
            href="#about"
            className="bg-white/10 border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition-all duration-300 font-semibold"
          >
            Découvrir
          </a>
          <a
            href="#contact"
            className="bg-white text-black px-6 py-3 rounded-lg hover:bg-forest-green hover:text-white transition-all duration-300 font-semibold"
          >
            Nous contacter
          </a>
        </div>
      </div>

      {/* Style typewriter */}
      <style jsx>{`
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
