'use client';
import React from 'react';
import { EnvelopeIcon, PhoneIcon, XMarkIcon } from '@heroicons/react/24/outline';

export default function ModalContact({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-black text-white rounded-xl shadow-2xl w-full max-w-3xl p-6 relative overflow-y-auto max-h-[90vh]">
        {/* Bouton de fermeture */}
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-gray-400 hover:text-white transition"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        <h2 className="text-3xl font-bold text-[#442108] mb-6 text-center">Contactez-nous</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Infos de contact */}
          <div className="space-y-6">
            <div className="bg-black p-5 rounded-lg shadow flex flex-col items-center text-center border border-gray-700">
              <EnvelopeIcon className="h-8 w-8 text- mb-2" />
              <p className="text-lg font-semibold">Email</p>
              <p className="text-white break-words">contact@pooltpv.ci</p>
            </div>

            <div className="bg-black p-5 rounded-lg shadow flex flex-col items-center text-center border border-gray-700">
              <PhoneIcon className="h-8 w-8 text-white mb-2" />
              <p className="text-lg font-semibold">Téléphone</p>
              <p className="text-white">+225 0777105200</p>
            </div>
          </div>

   
        </div>
      </div>
    </div>
  );
}
