import React from 'react';

const AboutPage: React.FC = () => {
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header avec image de fond et overlay */}
      <header
        className="relative py-16 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/insidetaxi.jpg')" }}
      >
        {/* Overlay noir semi-transparent */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Contenu en relatif pour être au-dessus de l'overlay */}
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-2 bg-white/10 rounded-lg text-white text-sm mb-6">
            Groupement d'Intérêt Économique
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Pool Transports Publics de Voyageurs
          </h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Une vision solidaire et structurée du secteur du transport public, 
            unissant les acteurs pour une régulation moderne et efficace.
          </p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* About Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#432108' }}>
                Notre Organisation
              </h2>
              <div className="prose prose-lg text-gray-700">
                <p>
                  Créé sous la forme d'un <strong>Groupement d'Intérêt Économique (GIE)</strong>, 
                  le Pool TPV incarne une vision solidaire et structurée du secteur du transport public.
                </p>
                <p>
                  Ce système favorise une souscription centralisée, avec la délivrance d'attestations 
                  spéciales Pool TPV, dont l'organisme reste le seul propriétaire et distributeur officiel.
                </p>
                <p>
                  Les attestations sont diffusées à travers les compagnies d'assurances partenaires 
                  ainsi que les bureaux propres du Pool TPV, assurant ainsi un contrôle rigoureux 
                  et une distribution homogène sur l'ensemble du territoire.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#432108' }}>
                Rôle Stratégique
              </h3>
              <p className="text-gray-700 mb-6">
                En unissant les acteurs du secteur, le Pool TPV se positionne comme un pilier 
                stratégique de la régulation et de la modernisation du transport public de voyageurs.
              </p>
              <div className="flex items-center text-sm text-[#432108]">
             
                <span className="font-medium">Union des acteurs du secteur</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid avec background image */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#432108' }}>
              Nos Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Un système complet pour garantir l'excellence du transport public
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

        {/* Benefits */}
        <section className="mb-20">
          <div className="bg-white rounded-lg shadow-sm border p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-6" style={{ color: '#432108' }}>
                  Avantages du Système
                </h2>
                <div className="space-y-3">
                  {[
                    "Vision solidaire du secteur",
                    "Structure organisée et réglementée",
                    "Pilier stratégique de régulation",
                    "Modernisation du transport public",
                    "Union des acteurs du secteur",
                    "Distribution homogène nationale",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className="text-green-600 mr-3 text-lg">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4" style={{ color: '#432108' }}>
                  Couverture Territoriale
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Compagnies Partenaires</span>
                      <span className="font-medium">National</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="h-2 rounded-full w-full" style={{ backgroundColor: '#432108' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Bureaux Pool TPV</span>
                      <span className="font-medium">Régional</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="h-2 rounded-full w-4/5" style={{ backgroundColor: '#432108', opacity: 0.8 }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Contrôle Qualité</span>
                      <span className="font-medium">Continu</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="h-2 rounded-full w-full" style={{ backgroundColor: '#432108', opacity: 0.9 }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="rounded-lg p-12 text-white" style={{ backgroundColor: '#432108' }}>
            <h2 className="text-3xl font-bold mb-4">Rejoignez le Pool TPV</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Participez à la modernisation du transport public et bénéficiez 
              d'un système d'assurance solidaire et structuré.
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
