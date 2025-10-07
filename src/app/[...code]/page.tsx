// src/app/[...code]/page.tsx

import HomeWithCode from "../homeWithCode"

export default async function CodePage({ 
  params 
}: { 
  params: Promise<{ code: string[] }> 
}) {
  const { code } = await params
  const etiquetteCode = code.join('/')
  
  return <HomeWithCode initialCode={etiquetteCode} />
}