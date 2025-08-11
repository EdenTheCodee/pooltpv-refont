'use client';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

export default function Contact() {
  const contactInfo = [
    {
      icon: PhoneIcon,
      title: 'Téléphone',
      details: ['+225 XX XX XX XX XX', '+225 XX XX XX XX XX'],
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      details: ['contact@pooltpv.ci', 'info@pooltpv.ci'],
    },
    {
      icon: MapPinIcon,
      title: 'Adresse',
      details: ['Abidjan, Côte d\'Ivoire', 'Plateau - Cocody'],
    },
    {
      icon: ClockIcon,
      title: 'Horaires',
      details: ['Lun - Ven: 8h00 - 17h00', 'Sam: 8h00 - 12h00'],
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* En-tête */}
      <div className="pt-24 pb-12 text-center">
        <h1 className="text-4xl font-semibold mb-4">Contactez-nous</h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Retrouvez toutes nos coordonnées et notre localisation.
        </p>
      </div>

      {/* Coordonnées + Carte */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 pb-20">
        
        {/* Coordonnées */}
        <div className="bg-gray-50 rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6">Nos coordonnées</h2>
          <div className="space-y-5">
            {contactInfo.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 text-gray-700 bg-gray-200 rounded-lg flex items-center justify-center">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-700">{item.title}</h3>
                  {item.details.map((detail, i) => (
                    <p key={i} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carte Google Maps */}
        <div className="w-full h-96 rounded-lg overflow-hidden shadow">
          <iframe
            title="Localisation Pool TPV"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.5305323979005!2d-4.0102676250164455!3d5.3356547946429425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1eb9f6e467573%3A0xa34626301834ad63!2sASA-CI!5e0!3m2!1sfr!2sci!4v1754873722314!5m2!1sfr!2sci"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </div>
  );
}
