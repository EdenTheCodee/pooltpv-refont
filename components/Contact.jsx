export default function PoolTPVSection() {
  return (
    <section className="bg-white text-black py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Titre principal */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-4">
            Pool TPV : Structurer et Moderniser le Transport Public
          </h2>
          <div className="w-24 h-1 bg-[#8B4513] mx-auto rounded-full"></div>
        </div>

        {/* Description d’introduction */}
        <div className="max-w-3xl mx-auto text-center text-gray-700 text-lg">
          <p>
            Le Pool Transports Publics de Voyageurs, un Groupement d'Intérêt Économique (GIE), agit comme levier de régulation et de modernisation du transport collectif en Côte d’Ivoire.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Bloc Missions */}
          <div className="bg-[#F9F8F6] border-l-4 border-[#8B4513] p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold text-[#8B4513] mb-4 uppercase tracking-wide">
              Nos Missions
            </h3>
            <ul className="space-y-4 text-gray-800 text-base leading-relaxed list-disc list-inside">
              <li>Structurer le secteur avec une approche solidaire</li>
              <li>Centraliser les souscriptions d’attestations TPV</li>
              <li>Distribuer les attestations via des points officiels</li>
              <li>Contrôler et unifier la délivrance à l’échelle nationale</li>
            </ul>
          </div>

          {/* Bloc Ambitions */}
          <div className="bg-[#F9F8F6] border-l-4 border-black p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold text-black mb-4 uppercase tracking-wide">
              Nos Ambitions
            </h3>
            <ul className="space-y-4 text-gray-800 text-base leading-relaxed list-disc list-inside">
              <li>Être le pilier stratégique de la régulation du secteur</li>
              <li>Moderniser durablement le transport public ivoirien</li>
              <li>Promouvoir une approche collective et responsable</li>
              <li>Renforcer la professionnalisation du secteur</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
    
  )
}
