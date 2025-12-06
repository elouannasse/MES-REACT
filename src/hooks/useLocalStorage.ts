import { useState, useEffect } from "react";

/**
 * Custom Hook: useLocalStorage
 * Synchronise l'état avec localStorage
 *
 * @param key - Clé du localStorage
 * @param initialValue - Valeur initiale
 * @returns [value, setValue] - État et fonction de mise à jour
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  // Initialisation: récupère depuis localStorage ou utilise la valeur initiale
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Fonction de mise à jour qui sauvegarde aussi dans localStorage
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Permet de passer une fonction comme avec useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue] as const;
}
