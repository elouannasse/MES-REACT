export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  stock: number;
  description: string;
}

export type SortOption = "name" | "price-asc" | "price-desc" | "rating";

export interface FilterState {
  searchTerm: string;
  category: string;
  minPrice: number;
  maxPrice: number;
  sortBy: SortOption;
}
