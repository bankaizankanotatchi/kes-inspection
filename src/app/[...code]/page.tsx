// src/app/[...code]/page.tsx

import RapportList from "../etiquette/[etiquetteId]/rapportList"

export default async function CodePage({ 
  params 
}: { 
  params: Promise<{ code: string[] }> 
}) {
  const { code } = await params
  const etiquetteCode = code.join('/')
  
  return <RapportList etiquetteId={etiquetteCode} />
}