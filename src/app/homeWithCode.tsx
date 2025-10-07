// src/app/HomeWithCode.tsx
'use client'

import Link from "next/link";

interface HomeWithCodeProps {
  initialCode?: string;
}

export default function HomeWithCode({ initialCode }: HomeWithCodeProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        {/* Logo/Header */}
        <div className="mb-12">
          <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-blue-600 font-bold text-2xl">KES</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            KES Inspections
          </h1>
          <p className="text-blue-100 text-xl">
            Accédez à vos rapports d&apos;inspection
          </p>
        </div>

        {/* Main Action */}
        <div className="bg-white rounded-2xl p-8 shadow-2xl mb-8">
          
          {initialCode ? (
            //  AFFICHAGE QUAND ON A DÉJÀ UN CODE DANS L'URL
            <>
            
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="font-mono text-sm break-all text-black">{initialCode}</p>
              </div>

              <Link 
                href={`/etiquette/${encodeURIComponent(initialCode)}`}
                className="inline-block w-full bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg"
              >
                📄 Consulter le rapport
              </Link>
            </>
          ) : (
            // 🔥 AFFICHAGE NORMAL QUAND AUCUN CODE
            <>
              <div className="w-32 h-32 bg-gray-100 rounded-lg mx-auto mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">📱</div>
                  <p className="text-xs text-gray-500">Scanner QR Code</p>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Comment accéder à vos rapports ?
              </h2>
              
              <p className="text-gray-600 mb-6">
                Utilisez l&apos;appareil photo de votre smartphone pour scanner le QR code 
                présent sur l&apos;étiquette de votre équipement.
              </p>

              <div className="space-y-3 text-sm text-gray-500 mb-6">
                <p>✅ Aucune application à installer</p>
                <p>✅ Accès instantané depuis mobile</p>
                <p>✅ Documents sécurisés</p>
              </div>

              {/* Champ de saisie manuel */}
              <div className="mb-4">
                <label htmlFor="etiquetteCode" className="block text-sm font-medium text-gray-700 mb-2">
                  Ou saisissez le code de l&apos;étiquette :
                </label>
                <div className="flex gap-2">
                  <input
                    id="etiquetteCode"
                    type="text"
                    placeholder="Ex: KES/V25/10/80/0080/I002/SA001/ASC-PROD-001_BZW7"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        const target = e.target as HTMLInputElement;
                        if (target.value.trim()) {
                          window.location.href = `/${target.value.trim()}`;
                        }
                      }
                    }}
                  />
                  <button
                    onClick={() => {
                      const input = document.getElementById('etiquetteCode') as HTMLInputElement;
                      if (input?.value.trim()) {
                        window.location.href = `/${input.value.trim()}`;
                      }
                    }}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Voir
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="mt-12 text-blue-200 text-sm">
          <p>KES Inspections © {new Date().getFullYear()} - Tous droits réservés</p>
        </div>
      </div>
    </div>
  );
}