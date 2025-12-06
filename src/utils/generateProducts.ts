import type { Product } from "../types/product";

const categories = [
  "Électronique",
  "Vêtements",
  "Livres",
  "Maison",
  "Sports",
  "Jouets",
  "Alimentaire",
  "Beauté",
];

const prefixes = [
  "Super",
  "Mega",
  "Ultra",
  "Premium",
  "Deluxe",
  "Pro",
  "Smart",
  "Classic",
];

const items = [
  "Laptop",
  "Téléphone",
  "T-shirt",
  "Pantalon",
  "Roman",
  "Cahier",
  "Chaise",
  "Table",
  "Ballon",
  "Raquette",
  "Poupée",
  "Robot",
  "Café",
  "Thé",
  "Crème",
  "Parfum",
];

/**
 * Génère un tableau de produits fictifs
 * Fonction coûteuse pour démontrer l'utilité de useMemo
 */
export function generateProducts(count: number): Product[] {
  console.log(`🔄 Génération de ${count} produits...`);
  const products: Product[] = [];

  for (let i = 1; i <= count; i++) {
    const category = categories[Math.floor(Math.random() * categories.length)];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const item = items[Math.floor(Math.random() * items.length)];

    products.push({
      id: i,
      name: `${prefix} ${item} ${i}`,
      category,
      price: Math.floor(Math.random() * 9900) + 100, // 100 à 10000 MAD
      rating: Math.floor(Math.random() * 50) / 10, // 0 à 5.0
      stock: Math.floor(Math.random() * 100),
      description: `Description du produit ${i}`,
    });
  }

  return products;
}
