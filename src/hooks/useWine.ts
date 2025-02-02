import { useState, useEffect } from 'react';
import { Wine } from '@/types/wine';

export function useWine() {
  const [wines, setWines] = useState<Wine[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchWines() {
      try {
        // TODO: Substituir por chamada real à API
        const mockWines = [
          {
            id: 1,
            name: "Château Margaux 2015",
            region: "Bordeaux, France",
            price: 599.99,
            image: "/images/wines/featured/margaux.jpg",
            description: "Um vinho excepcional com notas de frutas negras e taninos sedosos.",
            type: "red",
            year: 2015,
            rating: 4.9,
            stock: 15
          },
          {
            id: 2,
            name: "Opus One 2018",
            region: "Napa Valley, USA",
            price: 399.99,
            image: "/images/wines/featured/opus.jpg",
            description: "Blend icônico da Califórnia com complexidade e elegância únicas.",
            type: "red",
            year: 2018,
            rating: 4.8,
            stock: 20
          },
          {
            id: 3,
            name: "Sassicaia 2017",
            region: "Tuscany, Italy",
            price: 349.99,
            image: "/images/wines/featured/sassicaia.jpg",
            description: "Super Toscano com caráter distinto e final prolongado.",
            type: "red",
            year: 2017,
            rating: 4.7,
            stock: 12
          }
        ];

        setWines(mockWines);
        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Erro ao carregar vinhos'));
        setIsLoading(false);
      }
    }

    fetchWines();
  }, []);

  return { wines, isLoading, error };
} 