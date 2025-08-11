import React from 'react';

function Appeloffre() {
  const handleLearnMore = () => {
    window.open('/offres-emploi', '_blank');
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animation styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .delay-0 {
          animation-delay: 0s;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>

      {/* Image de fond */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: "url('/images/office.jpg')" }}
      />

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Contenu principal */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-16">
        <div className="max-w-4xl w-full">

          {/* En-tête */}
          <div className="text-center mb-12">
            <div className="inline-block bg-[#442108]/20 px-6 py-2 rounded-full border border-[#8B4513]/30 mb-6">
              <span className="text-[#442108] font-semibold text-sm tracking-wide">
                OFFRES D'EMPLOI
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Rejoignez Notre Équipe
            </h1>
            <div className="w-24 h-1 bg-[#442108] mx-auto rounded-full mb-8" />
          </div>

          {/* Date & Référence */}
          <div className="text-center mb-8">
            <p className="text-gray-300 text-lg mb-2">
              <span className="text-[#8B4513] font-semibold">Date :</span> 29 Février 2016
            </p>
            <p className="text-gray-300 text-lg">
              <span className="text-[#8B4513] font-semibold">Référence :</span> 01142/PTPV/SM/bmt
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            APPEL À CANDIDATURES
          </h2>

          {/* Postes avec animations différées */}
          <div className="space-y-6 mb-10">
            {/* Inspecteur */}
            <div className="relative bg-gray-900/30 rounded-lg fade-in-up delay-0">
              <div className="p-6 pl-8 flex items-center gap-6">
                <div className="w-12 h-12 bg-[#8B4513]/20 rounded-full flex items-center justify-center flex-shrink-0">
                 
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">INSPECTEUR</h3>
                  <p className="text-gray-300">
                    Planification et contrôle des missions, gestion des souscriptions et attestations d'assurances.
                  </p>
                </div>
              </div>
            </div>

            {/* Gestionnaire Sinistres */}
            <div className="relative bg-gray-900/30 rounded-lg fade-in-up delay-200">
              <div className="p-6 pl-8 flex items-center gap-6">
                <div className="w-12 h-12 bg-[#8B4513]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">GESTIONNAIRE SINISTRES</h3>
                  <p className="text-gray-300">
                    Veille sinistre, contrôle sur le terrain et recouvrement des quotes-parts.
                  </p>
                </div>
              </div>
            </div>

            {/* Comptable */}
            <div className="relative bg-gray-900/30 rounded-lg fade-in-up delay-400">
              <div className="p-6 pl-8 flex items-center gap-6">
                <div className="w-12 h-12 bg-[#8B4513]/20 rounded-full flex items-center justify-center flex-shrink-0">
             
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">COMPTABLE</h3>
                  <p className="text-gray-300">
                    Analyse financière, déclarations fiscales et gestion des pièces comptables.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Infos pratiques */}
          <p className="text-white text-center mb-2">
            <span className="font-semibold text-[#8B4513]">Date limite :</span> 14 Mars 2016 à 16h45
          </p>
          <p className="text-gray-300 text-sm text-center">
            Envoyez votre candidature à <span className="text-[#8B4513]">pooltpv@pooltpv.com</span>
          </p>

          {/* Bouton */}
             <div className="text-center mt-6">
        <button
          onClick={handleLearnMore}
          className="group relative inline-flex items-center gap-3 bg-[#8B4513] hover:bg-[#8B4513]/90 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <span>En savoir plus</span>
          <svg 
            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>

          {/* Signature */}
          <div className="text-center mt-8 pt-6 border-t border-gray-700/50">
            <p className="text-gray-400 text-sm">
              Le Directeur<br />
              <span className="text-[#8B4513] font-semibold">SOUMAHORO Mori</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appeloffre;
