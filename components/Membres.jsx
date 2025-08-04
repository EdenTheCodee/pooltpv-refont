import React from 'react';

function Membres() {
  return (
    <div className="bg-black py-20 text-white">
      {/* Membres du Pool TPV */}
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Membres</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6">
          {[
            { name: 'M. Koné Ibrahim', role: 'Responsable Sinistres', photo: '/images/photoPRO.jpg' },
            { name: 'Mme Touré Awa', role: 'Comptable', photo: '/images/PHOTOPRO2.jpg' },
            { name: 'M. N’Guessan Hervé', role: 'Inspecteur Principal', photo: '/images/PINTEREST.jpg' }
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white/5 border border-[#8B4513]/30 rounded-xl p-4 text-center shadow-md hover:scale-105 transition duration-300"
            >
              <div className="w-full h-64 overflow-hidden rounded-lg mb-4">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-[#d3bfa7] text-sm mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Événements récents */}
    </div>
  );
}

export default Membres;
