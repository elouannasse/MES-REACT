import { memo } from "react";
import type { SortOption } from "../types/product";

interface FilterControlsProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  category: string;
  onCategoryChange: (value: string) => void;
  minPrice: number;
  onMinPriceChange: (value: number) => void;
  maxPrice: number;
  onMaxPriceChange: (value: number) => void;
  sortBy: SortOption;
  onSortChange: (value: SortOption) => void;
  categories: string[];
}

/**
 * Composant de filtres optimisé avec React.memo
 * Les callbacks sont mémoïsés dans le parent avec useCallback
 */
const FilterControls = memo(
  ({
    searchTerm,
    onSearchChange,
    category,
    onCategoryChange,
    minPrice,
    onMinPriceChange,
    maxPrice,
    onMaxPriceChange,
    sortBy,
    onSortChange,
    categories,
  }: FilterControlsProps) => {
    console.log("🔧 FilterControls render");

    return (
      <div
        style={{
          backgroundColor: "#f9fafb",
          padding: 20,
          borderRadius: 8,
          marginBottom: 20,
        }}
      >
        <h2 style={{ marginTop: 0 }}>Filtres et Tri</h2>

        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
        >
          {/* Recherche */}
          <div>
            <label
              style={{ display: "block", marginBottom: 4, fontWeight: 500 }}
            >
              Recherche
            </label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Nom du produit..."
              style={{
                width: "100%",
                padding: 8,
                borderRadius: 4,
                border: "1px solid #d1d5db",
              }}
            />
          </div>

          {/* Catégorie */}
          <div>
            <label
              style={{ display: "block", marginBottom: 4, fontWeight: 500 }}
            >
              Catégorie
            </label>
            <select
              value={category}
              onChange={(e) => onCategoryChange(e.target.value)}
              style={{
                width: "100%",
                padding: 8,
                borderRadius: 4,
                border: "1px solid #d1d5db",
              }}
            >
              <option value="">Toutes les catégories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Prix minimum */}
          <div>
            <label
              style={{ display: "block", marginBottom: 4, fontWeight: 500 }}
            >
              Prix minimum: {minPrice} MAD
            </label>
            <input
              type="range"
              min="0"
              max="10000"
              step="100"
              value={minPrice}
              onChange={(e) => onMinPriceChange(Number(e.target.value))}
              style={{ width: "100%" }}
            />
          </div>

          {/* Prix maximum */}
          <div>
            <label
              style={{ display: "block", marginBottom: 4, fontWeight: 500 }}
            >
              Prix maximum: {maxPrice} MAD
            </label>
            <input
              type="range"
              min="0"
              max="10000"
              step="100"
              value={maxPrice}
              onChange={(e) => onMaxPriceChange(Number(e.target.value))}
              style={{ width: "100%" }}
            />
          </div>

          {/* Tri */}
          <div style={{ gridColumn: "1 / -1" }}>
            <label
              style={{ display: "block", marginBottom: 4, fontWeight: 500 }}
            >
              Trier par
            </label>
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value as SortOption)}
              style={{
                width: "100%",
                padding: 8,
                borderRadius: 4,
                border: "1px solid #d1d5db",
              }}
            >
              <option value="name">Nom (A-Z)</option>
              <option value="price-asc">Prix (croissant)</option>
              <option value="price-desc">Prix (décroissant)</option>
              <option value="rating">Note (meilleure)</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
);

FilterControls.displayName = "FilterControls";

export default FilterControls;
