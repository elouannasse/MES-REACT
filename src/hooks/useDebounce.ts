import { useState, useEffect } from "react";

/**
 * Custom Hook: useDebounce
 * Retarde la mise à jour d'une valeur
 * Utile pour les recherches, filtres, etc.
 *
 * @param value - Valeur à debouncer
 * @param delay - Délai en millisecondes
 * @returns Valeur debouncée
 */
export function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // Crée un timer qui met à jour la valeur après le délai
    const handler = setTimeout(() => {
      console.log(`⏱️ Debounce: Mise à jour après ${delay}ms`);
      setDebouncedValue(value);
    }, delay);

    // Nettoie le timer si la valeur change avant la fin du délai
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
