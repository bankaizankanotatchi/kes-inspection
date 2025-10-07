// app/etiquette/[etiquetteId]/page.tsx
import RapportList from './rapportList'

// CORRECTION : Utiliser Promise pour les params dans Next.js 15
interface PageProps {
  params: Promise<{
    etiquetteId: string
  }>
}

// CORRECTION : Fonction async avec await sur params
export default async function EtiquettePage({ params }: PageProps) {
  // CORRECTION : Attendre la résolution des params
  const { etiquetteId } = await params

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