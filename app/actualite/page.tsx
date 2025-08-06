'use client';

import React from 'react';

export default function ActualityPage() {
  const events = [
    {
      title: 'Lancement de la plateforme ASACI Technologies',
      date: '1 Janvier 2023',
      content: `L’Association des Sociétés d’Assurances de Côte d’Ivoire (ASACI) lance une solution numérique de gestion des attestations automobiles. 
      Dès janvier 2023, les assurés recevront leur attestation d’assurance sous format électronique. Cette innovation permet de lutter contre la fraude 
      et d’identifier les véhicules non assurés.`,
    },
    {
      title: '47ème Assemblée Générale de la FANAF à Kinshasa',
      date: '6 Mars 2023',
      content: `Sous le thème : « L’assurance africaine : comment exploiter au maximum son potentiel pour une croissance partagée », 
      cette assemblée générale a réuni de nombreux acteurs du secteur à Kinshasa.`,
    },
    {
      title: 'Marche sportive ASA-CI – 1ère édition',
      date: '3 Mai 2016',
      content: `L’ASA-CI a organisé une marche le 19 décembre, depuis son siège à Cocody. L’objectif : promouvoir l’activité physique comme vecteur de cohésion. 
      Plusieurs sociétés ont participé, avec des récompenses à la clé pour l'engagement collectif.`,
    },
    {
      title: 'Un client SUNU Assurances devient millionnaire grâce à Ecobank',
      date: '26 Décembre 2015',
      content: `SUNU Assurances Vie Burkina Faso a récompensé le gagnant du tirage au sort du produit Bancassurance "TRESOR", 
      en partenariat avec Ecobank. Un événement qui a mis en lumière les avantages de l’offre.`,
    },
    {
      title: 'Fusion : SUNU Assurances Vie CI et LMAI Vie',
      date: '1 Janvier 2014',
      content: `Les deux sociétés ont fusionné pour former la plus grande entité d’assurance vie de la zone CIMA. 
      M. Saliou BAKAYOKO en devient Directeur général, avec M. Almamy TIMITE en tant qu’adjoint.`,
    },
  ];

  return (
    <>
      {/* Hero Section avec vidéo en background */}
        <section style={{ position: 'relative', width: '100vw', height: '60vh', overflow: 'hidden' }}>
          <video
            src="/carvideo.mp4"
            autoPlay
            muted
            loop
            playsInline
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            objectPosition: 'center 70%', // Décale la vidéo vers le bas (coupe le haut)
            zIndex: 0,
          }}
        />
        {/* Overlay sombre pour contraste */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.4)',
            zIndex: 1,
          }}
        />
        {/* Texte du hero */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            textAlign: 'center',
            padding: '0 20px',
          }}
        >
          <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>
            Actualités et Événements
          </h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '700px' }}>
            Plongez au cœur des dernières nouvelles, où chaque histoire prend vie dans le mouvement des véhicules.
          </p>
        </div>
      </section>

      {/* Contenu principal */}
      <main className="bg-white min-h-screen py-20 px-4 md:px-12 lg:px-24 text-gray-800">
        <section className="max-w-5xl mx-auto">
          <div className="space-y-10 mt-16">
            {events.map((event, idx) => (
              <article
                key={idx}
                className="border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition duration-200 bg-white"
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">{event.title}</h2>
                <p className="text-sm text-gray-500 mb-4">{event.date}</p>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{event.content}</p>
              </article>
            ))}
          </div>

          {/* Appel d'offres */}
          <section className="mt-20">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Appel à Candidatures</h2>
            <p className="text-gray-600 mb-4 italic">Abidjan, le 29 Février 2016</p>
            <p className="text-gray-700 mb-6">
              Le Pool TPV recrute pour les postes suivants. Les candidatures sont ouvertes jusqu’au{' '}
              <strong>14 Mars 2016 à 16h45</strong>.
            </p>

            {/* Poste 1 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">1. Inspecteur</h3>
              <p className="font-semibold">Résumé du Poste :</p>
              <ul className="list-disc ml-6 text-gray-700 mb-2">
                <li>Planifier, organiser et effectuer les missions de contrôle</li>
                <li>Contrôler les souscriptions et le décompte des attestations d’assurances</li>
              </ul>
              <p className="font-semibold">Qualifications requises :</p>
              <ul className="list-disc ml-6 text-gray-700">
                <li>BTS ou DUT Assurances</li>
                <li>5 ans d’expérience</li>
                <li>Maîtrise d’Oracle, rigueur et éthique, aisance relationnelle</li>
              </ul>
            </div>

            {/* Poste 2 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">2. Gestionnaire Sinistres</h3>
              <p className="font-semibold">Résumé du Poste :</p>
              <ul className="list-disc ml-6 text-gray-700 mb-2">
                <li>Cellule de veille, contrôles de sinistres, relances auprès des compagnies</li>
                <li>Recensement des sinistres bons à payer</li>
              </ul>
              <p className="font-semibold">Qualifications requises :</p>
              <ul className="list-disc ml-6 text-gray-700">
                <li>BTS ou DUT Assurances</li>
                <li>5 ans d’expérience, connaissance du logiciel ORASS</li>
                <li>Rigueur, organisation, travail sous pression</li>
              </ul>
            </div>

            {/* Poste 3 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">3. Comptable</h3>
              <p className="font-semibold">Résumé du Poste :</p>
              <ul className="list-disc ml-6 text-gray-700 mb-2">
                <li>Analyse des comptes, rapprochements bancaires</li>
                <li>Déclarations fiscales et sociales, saisie comptable</li>
                <li>Organisation des archives</li>
              </ul>
              <p className="font-semibold">Qualifications requises :</p>
              <ul className="list-disc ml-6 text-gray-700">
                <li>BTS ou DUT Finance/Comptabilité</li>
                <li>5 ans d’expérience, maîtrise d’Oracle</li>
                <li>Communication, rigueur, éthique</li>
              </ul>
            </div>

            <div className="text-gray-700">
              <p className="mb-2">
                <strong>Pour postuler</strong>, envoyez une lettre de motivation et un CV à{' '}
                <a href="mailto:pooltpv@pooltpv.com" className="text-blue-600 underline">
                  pooltpv@pooltpv.com
                </a>{' '}
                ou déposez-les physiquement au :
              </p>
              <p>
                <em>1, Boulevard de l’Indénié, immeuble THANRY 4ème étage (face Polyclinique de l’Indénié)</em>
              </p>
              <p className="mt-4">
                Le Directeur, <br />
                <strong>SOUMAHORO Mori</strong>
              </p>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
