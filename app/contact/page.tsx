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
      color: 'text-gray-700'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      details: ['contact@pooltpv.ci', 'info@pooltpv.ci'],
      color: 'text-gray-700'
    },
    {
      icon: MapPinIcon,
      title: 'Adresse',
      details: ['Abidjan, Côte d\'Ivoire', 'Plateau - Cocody'],
      color: 'text-gray-700'
    },
    {
      icon: ClockIcon,
      title: 'Horaires',
      details: ['Lun - Ven: 8h00 - 17h00', 'Sam: 8h00 - 12h00'],
      color: 'text-gray-700'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <div className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-semibold mb-4">
            Contactez-nous
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Nous sommes là pour répondre à toutes vos questions et vous accompagner dans vos projets avec Pool TPV
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Formulaire */}
        <div className="bg-gray-50 rounded-lg shadow-md p-8">
          <div className="flex items-center mb-6">
            <BuildingOfficeIcon className="w-7 h-7 text-gray-700 mr-3" />
            <h2 className="text-2xl font-semibold">Envoyez-nous un message</h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="prenom" className="block text-sm font-medium mb-2">
                  Prénom *
                </label>
                <input
                  type="text"
                  id="prenom"
                  name="prenom"
                  required
                  value={formData.prenom}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Votre prénom"
                />
              </div>
              <div>
                <label htmlFor="nom" className="block text-sm font-medium mb-2">
                  Nom *
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  required
                  value={formData.nom}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Votre nom"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label htmlFor="telephone" className="block text-sm font-medium mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="+225 XX XX XX XX XX"
                />
              </div>
            </div>

            <div>
              <label htmlFor="entreprise" className="block text-sm font-medium mb-2">
                Entreprise / Organisation
              </label>
              <input
                type="text"
                id="entreprise"
                name="entreprise"
                value={formData.entreprise}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Nom de votre entreprise"
              />
            </div>

            <div>
              <label htmlFor="sujet" className="block text-sm font-medium mb-2">
                Sujet *
              </label>
              <select
                id="sujet"
                name="sujet"
                required
                value={formData.sujet}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Sélectionnez un sujet</option>
                <option value="adhesion">Demande d&apos;adhésion</option>
                <option value="partenariat">Partenariat</option>
                <option value="information">Demande d&apos;information</option>
                <option value="collaboration">Collaboration</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                placeholder="Détaillez votre demande..."
              />
            </div>

            {submitStatus === 'success' && (
              <div className="bg-green-100 border border-green-400 text-green-700 rounded-md p-4 font-semibold">
                ✓ Votre message a été envoyé avec succès ! Nous vous répondrons rapidement.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-100 border border-red-400 text-red-700 rounded-md p-4 font-semibold">
                ✗ Une erreur s&apos;est produite. Veuillez réessayer.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#432108] hover: text-white font-semibold py-3 rounded-md transition duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
            </button>
          </form>
        </div>

        {/* Coordonnées */}
        <div className="space-y-8">
          <div className="bg-gray-50 rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-6">Nos coordonnées</h2>
            <div className="space-y-5">
              {contactInfo.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-10 h-10 ${item.color} bg-gray-200 rounded-lg flex items-center justify-center`}>
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

          <div className="bg-gray-50 rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold mb-4">Pourquoi nous contacter ?</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Rejoindre notre réseau de professionnels</li>
              <li>Découvrir nos opportunités de partenariat</li>
              <li>Obtenir des informations sur nos services</li>
              <li>Collaborer sur des projets innovants</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
