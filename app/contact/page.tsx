'use client';
import { useState } from 'react';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ClockIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    entreprise: '',
    sujet: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi (remplacez par votre logique d'envoi)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        entreprise: '',
        sujet: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: 'Téléphone',
      details: ['+225 XX XX XX XX XX', '+225 XX XX XX XX XX'],
      color: 'text-[rgb(67_33_8_/var(--tw-bg-opacity,1))]'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      details: ['contact@pooltpv.ci', 'info@pooltpv.ci'],
      color: 'text-[rgb(67_33_8_/var(--tw-bg-opacity,1))]'
    },
    {
      icon: MapPinIcon,
      title: 'Adresse',
      details: ['Abidjan, Côte d\'Ivoire', 'Plateau - Cocody'],
      color: 'text-[rgb(67_33_8_/var(--tw-bg-opacity,1))]'
    },
    {
      icon: ClockIcon,
      title: 'Horaires',
      details: ['Lun - Ven: 8h00 - 17h00', 'Sam: 8h00 - 12h00'],
      color: 'text-[rgb(67_33_8_/var(--tw-bg-opacity,1))]'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header avec espacement pour la navbar fixe */}
      <div className="pt-24 pb-12 bg-[rgb(67_33_8_/var(--tw-bg-opacity,1))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contactez-nous
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Nous sommes là pour répondre à toutes vos questions et vous accompagner 
            dans vos projets avec Pool TPV
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Formulaire de contact */}
          <div className="bg-white rounded-2xl p-8 lg:p-10">
            <div className="flex items-center mb-8">
              <BuildingOfficeIcon className="w-8 h-8 text-gray-700 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">
                Envoyez-nous un message
              </h2>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="prenom" className="block text-sm font-semibold text-gray-700 mb-2">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    required
                    value={formData.prenom}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label htmlFor="nom" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    required
                    value={formData.nom}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="telephone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="+225 XX XX XX XX XX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="entreprise" className="block text-sm font-semibold text-gray-700 mb-2">
                  Entreprise / Organisation
                </label>
                <input
                  type="text"
                  id="entreprise"
                  name="entreprise"
                  value={formData.entreprise}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Nom de votre entreprise"
                />
              </div>

              <div>
                <label htmlFor="sujet" className="block text-sm font-semibold text-gray-700 mb-2">
                  Sujet *
                </label>
                <select
                  id="sujet"
                  name="sujet"
                  required
                  value={formData.sujet}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="adhesion">Demande d'adhésion</option>
                  <option value="partenariat">Partenariat</option>
                  <option value="information">Demande d'information</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Détaillez votre demande..."
                />
              </div>

              {/* Messages de statut */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800 font-medium">
                    ✓ Votre message a été envoyé avec succès ! Nous vous répondrons rapidement.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-800 font-medium">
                    ✗ Une erreur s'est produite. Veuillez réessayer.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[rgb(67_33_8_/var(--tw-bg-opacity,1))] text-white font-bold py-4 px-6 rounded-lg hover:bg-opacity-90 focus:ring-4 focus:ring-blue-200 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </span>
                ) : (
                  'Envoyer le message'
                )}
              </button>
            </form>
          </div>

          {/* Informations de contact */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 lg:p-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Nos coordonnées
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group hover:transform hover:scale-105 transition-all duration-200">
                    <div className={`flex-shrink-0 w-12 h-12 ${item.color} bg-gray-50 rounded-xl flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-200`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      {item.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carte ou informations supplémentaires */}
            <div className="bg-white rounded-2xl p-8 lg:p-10 border border-[rgb(67_33_8_/var(--tw-bg-opacity,1))]">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Pourquoi nous contacter ?
              </h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Rejoindre notre réseau de professionnels</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>Découvrir nos opportunités de partenariat</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Obtenir des informations sur nos services</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Collaborer sur des projets innovants</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}