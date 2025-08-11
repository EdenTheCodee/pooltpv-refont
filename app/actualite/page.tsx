'use client';

import React from 'react';
import Link from 'next/link';

const events = [
  {
    title: '47ème Assemblée Générale de la FANAF à Kinshasa',
    date: '6 Mars 2023',
    content: `Sous le thème : « L’assurance africaine : comment exploiter au maximum son potentiel pour une croissance partagée », 
cette assemblée générale a réuni de nombreux acteurs du secteur à Kinshasa.`,
    image: '/images/fanaf.png',
    link: '/actualite/fanaf47'
  },
  {
    title: 'Marche sportive ASA-CI – 1ère édition',
    date: '3 Mai 2016',
    content: `L’ASA-CI a organisé une marche le 19 décembre, depuis son siège à Cocody. L’objectif : promouvoir l’activité physique comme vecteur de cohésion.`,
    image: '/images/asacimarche.jpg',
    link: '/actualite/marcheSportive'
  },
  {
    title: 'Lancement de la plateforme ASACI Technologies',
    date: '1 Janvier 2023',
    content: `L’Association des Sociétés d’Assurances de Côte d’Ivoire (ASACI) lance une solution numérique de gestion des attestations automobiles.`,
    image: '/images/asaci.png',
    link: '/actualites/asaci-technologies'
  },
];

// Composant pour l’appel à candidatures
function CallForApplications() {
  return (
    <section id="appelcandidat"className=" max-w-5xl mx-auto mt-16 mb-20 p-6 bg-gray-50 rounded-md shadow-md text-gray-800 whitespace-pre-line leading-relaxed text-base">
      <p>Abidjan, le 29 Février 2016</p>

      <p className="mt-4 font-semibold">N/Réf : 01142/PTPV/SM/bmt</p>

      <h2 className="mt-8 mb-4 text-xl font-bold uppercase">APPEL A CANDIDATURES</h2>

      <p className="mb-6">Le Pool TPV recrute :</p>

      <div className="mb-6">
        <h3 className="font-semibold underline mb-2">1- UN INSPECTEUR</h3>
        <p className="font-semibold">Résumé du Poste</p>
        <ul className="list-disc list-inside mb-2">
          <li>Planifier, organiser et effectuer les missions de contrôle</li>
          <li>Contrôler en collaboration avec le service production les souscriptions dans le logiciel et le décompte des attestations d’assurances.</li>
        </ul>
        <p className="font-semibold">Qualifications et aptitudes requises</p>
        <ul className="list-disc list-inside">
          <li>BTS ou DUT ASSURANCES</li>
          <li>Expérience d’au moins 5 ans dans une fonction similaire</li>
          <li>Bonne capacité d’analyse, de synthèse et de rédaction</li>
          <li>Maitrise de l’outil informatique et Connaissance du logiciel ORACLE</li>
          <li>Grande rigueur morale et éthique</li>
          <li>Aisance relationnelle</li>
          <li>Grande capacité à travailler sous pression</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold underline mb-2">2- UN GESTIONNAIRE SINISTRES</h3>
        <p className="font-semibold">Résumé du Poste</p>
        <ul className="list-disc list-inside mb-2">
          <li>Organiser une cellule de veille sous la supervision du Directeur</li>
          <li>Organiser et effectuer des missions de contrôle sur les lieux de sinistres majeurs</li>
          <li>Organiser et effectuer des tournées dans les compagnies d’assurances pour réclamer les quotes-parts de sinistres et recenser les sinistres bons à payer en souffrance</li>
          <li>Grande capacité à travailler sous pression</li>
        </ul>
        <p className="font-semibold">Qualifications et aptitudes requise</p>
        <ul className="list-disc list-inside">
          <li>BTS ou DUT ASSURANCES</li>
          <li>Expérience d’au moins 5 ans</li>
          <li>Maitrise de l’outil informatique et connaissance du logiciel ORASS</li>
          <li>Sens de l’organisation et de la rigueur</li>
          <li>Aisance relationnelle</li>
          <li>Grande capacité à travailler sous pression</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold underline mb-2">3- UN COMPTABLE</h3>
        <p className="font-semibold">Résumé du Poste</p>
        <ul className="list-disc list-inside mb-2">
          <li>Analyse des comptes</li>
          <li>Rapprochements bancaires</li>
          <li>Déclarations fiscales et sociales</li>
          <li>Etablissement de chèques de règlements</li>
          <li>Saisie des pièces comptables</li>
          <li>Organisation et suivie des archives de la comptabilité</li>
        </ul>
        <p className="font-semibold">Qualifications et aptitudes requises</p>
        <ul className="list-disc list-inside">
          <li>BTS ou DUT FINANCE COMPTABILITE</li>
          <li>Expérience d’au moins 5 ans</li>
          <li>Maitrise de l’outil informatique et Connaissance du logiciel ORACLE</li>
          <li>Grande rigueur morale et éthique</li>
          <li>Bonne capacité à communiquer et entretenir de bonnes relations de travail</li>
          <li>Grande capacité à travailler sous pression</li>
        </ul>
      </div>

      <p>
        Pour postuler à cette offre, veuillez envoyer une lettre de motivation et un curriculum vitae à <a href="mailto:pooltpv@pooltpv.com" className="text-blue-600 underline">pooltpv@pooltpv.com</a>, ou les déposer au siège du Pool TPV, sis au 1, Boulevard de l’Indénié, immeuble THANRY 4ème étage (Face Polyclinique de l’Indénié) au plus tard le 14 Mars 2016 à 16h45.
      </p>

      <p className="mt-10 font-semibold">Le Directeur</p>
      <p>SOUMAHORO Mori</p>
    </section>
  );
}

export default function ActualityPage() {
  return (
    <main className="bg-white min-h-screen py-20 px-4 md:px-12 lg:px-24 text-gray-800">
      <section className="max-w-5xl mx-auto space-y-10 mt-16">
        {events.map((event, idx) => (
          <Link href={event.link} key={idx} className="no-underline">
            <article
              className="cursor-pointer no-underline border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition duration-200 bg-white flex items-start gap-8"
            >
              <div className="flex-shrink-0 w-36 h-36  rounded-lg overflow-hidden shadow-lg">
                <img
                  src={event.image}
                  alt={event.title}
                  className="object-cover w-full h-full"
                />
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">{event.title}</h2>
                <p className="text-sm text-gray-500 mb-4">{event.date}</p>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {event.content}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </section>

      {/* Ajout de l'appel à candidatures */}
      <CallForApplications  />
    </main>
  );
}
