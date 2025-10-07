// app/etiquette/[etiquetteId]/RapportList.tsx
"use client";

import { useEffect, useState } from "react";

interface Rapport {
  id: number;
  name: string;
  date: string;
  download_url: string;
}

interface RapportListProps {
  etiquetteId: string;
}

export default function RapportList({ etiquetteId }: RapportListProps) {
  const [rapports, setRapports] = useState<Rapport[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchRapports(etiquetteId);
  }, [etiquetteId]);

  const fetchRapports = async (codeEtiquette: string) => {
    try {
      setLoading(true);
      setError(null);

      // 🔥 TEMPORAIREMENT : Aucun appel API, on simule un résultat vide
      setTimeout(() => {
        setRapports([]); // Tableau vide = aucun rapport
        setLoading(false);
      }, 500);

      // 🔥 COMMENTÉ TEMPORAIREMENT
      /*
      const response = await fetch(`/api/rapports/${codeEtiquette}`);
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des rapports");
      }
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setRapports(data.rapports || []);
      */
    } catch (error) {
      console.error("Erreur:", error);
      setError(
        error instanceof Error ? error.message : "Une erreur est survenue"
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">Chargement des rapports...</p>
        </div>
      </div>
    );
  }

  // 🔥 AFFICHAGE DIRECT "AUCUN RAPPORT DISPONIBLE"
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-col items-center text-center py-8">
        <svg
          className="w-16 h-16 text-gray-300 mb-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 48 48"
        >
          <path
            d="M8 12h8M8 12v24a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V16L28 8H12a4 4 0 0 0-4 4z"
            stroke="currentColor"
            strokeWidth="2"
            fill="#f3f4f6"
          />
          <path
            d="M28 8v8h8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 22h16M16 28h12M16 34h16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Aucun rapport disponible
        </h2>
        <p className="text-gray-500 max-w-md">
          Il n&apos;y a actuellement aucun rapport disponible pour l&apos;étiquette
        </p>
        <div className="mt-4 text-sm text-gray-400">
          <p>Les rapports seront disponibles prochainement.</p>
        </div>
      </div>
    </div>
  );
}