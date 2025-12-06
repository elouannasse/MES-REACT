import { useState, useMemo, useCallback, useRef } from "react";
import { generateProducts } from "../utils/generateProducts";
import type { Product, SortOption } from "../types/product";
import FilterControls from "../components/FilterControls";
import ProductList from "../components/ProductList";
import PerformanceStats from "../components/PerformanceStats";


export default function Performance() {
  // État des filtres
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [sortBy, setSortBy] = useState<SortOption>("name");

 
  const renderCountRef = useRef(0);
  renderCountRef.current += 1;

  console.log(` Performance Page render #${renderCountRef.current}`);

  
  const allProducts = useMemo(() => {
    return generateProducts(1500);
  }, []);
  
  const categories = useMemo(() => {
    const uniqueCategories = new Set(allProducts.map((p) => p.category));
    return Array.from(uniqueCategories).sort();
  }, [allProducts]);

  
  const { filteredProducts, filterTime } = useMemo(() => {
    const startTime = performance.now();
    console.log(" Calcul du filtrage...");

    let filtered = allProducts;

   
    if (searchTerm) {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filtre par catégorie
    if (category) {
      filtered = filtered.filter((p) => p.category === category);
    }

    // Filtre par prix
    filtered = filtered.filter(
      (p) => p.price >= minPrice && p.price <= maxPrice
    );

    // Tri
    switch (sortBy) {
      case "name":
        filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "price-asc":
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered = [...filtered].sort((a, b) => b.rating - a.rating);
        break;
    }

    const endTime = performance.now();
    const filterTime = endTime - startTime;

    return { filteredProducts: filtered, filterTime };
  }, [searchTerm, category, minPrice, maxPrice, sortBy, allProducts]);

  

  const handleSearchChange = useCallback((value: string) => {
    console.log(" Recherche:", value);
    setSearchTerm(value);
  }, []);

  const handleCategoryChange = useCallback((value: string) => {
    console.log(" Catégorie:", value);
    setCategory(value);
  }, []);

  const handleMinPriceChange = useCallback((value: number) => {
    setMinPrice(value);
  }, []);

  const handleMaxPriceChange = useCallback((value: number) => {
    setMaxPrice(value);
  }, []);

  const handleSortChange = useCallback((value: SortOption) => {
    console.log(" Tri:", value);
    setSortBy(value);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ marginBottom: 8 }}> Performance & Optimisation</h1>
        <p style={{ color: "#6b7280", marginTop: 0 }}>
          {/* Démonstration de useMemo, useCallback et React.memo avec 1500 produits */}
        </p>
      </div>

      <PerformanceStats
        totalProducts={allProducts.length}
        filteredCount={filteredProducts.length}
        renderCount={renderCountRef.current}
        filterTime={filterTime}
      />

      <FilterControls
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        category={category}
        onCategoryChange={handleCategoryChange}
        minPrice={minPrice}
        onMinPriceChange={handleMinPriceChange}
        maxPrice={maxPrice}
        onMaxPriceChange={handleMaxPriceChange}
        sortBy={sortBy}
        onSortChange={handleSortChange}
        categories={categories}
      />

      <ProductList
        products={filteredProducts}
        renderCount={renderCountRef.current}
      />
    </div>
  );
}
