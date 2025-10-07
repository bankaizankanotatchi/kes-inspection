/* eslint-disable @typescript-eslint/no-explicit-any */
// app/etiquette/[etiquetteId]/page.tsx

import RapportList from "./rapportList"


interface PageProps {
  params: {
    etiquetteId: string
  }
}

export default async function EtiquettePage({ params }: PageProps) {
  const { etiquetteId } = params

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Rapports pour l&apos;étiquette: <span className="text-blue-600">{etiquetteId}</span>
          </h1>
        </div>
        
        {/* Client Component pour les interactions */}
        <RapportList etiquetteId={etiquetteId} />
        
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Scannez le QR code pour revenir à cette page à tout moment</p>
        </div>
      </div>
    </div>
  )
}