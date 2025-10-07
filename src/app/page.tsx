// src/app/page.tsx - Version minimaliste
import Link from "next/link";

export default function Home() {
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
            Accédez à vos rapports d&apos;inspection en scannant le QR code
          </p>
        </div>

        {/* Main Action */}
        <div className="bg-white rounded-2xl p-8 shadow-2xl mb-8">
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
            présent sur l&apos;étiquette de votre équipement. Vous serez automatiquement 
            redirigé vers la liste des rapports disponibles.
          </p>

          <div className="space-y-3 text-sm text-gray-500">
            <p>✅ Aucune application à installer</p>
            <p>✅ Accès instantané depuis mobile</p>
            <p>✅ Documents sécurisés</p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-blue-200 text-sm">
            <p>
            KES Inspections © {new Date().getFullYear()} - Tous droits réservés
            </p>
        </div>
      </div>
    </div>
  );
}