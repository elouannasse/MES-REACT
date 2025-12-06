import { memo } from "react";

interface PerformanceStatsProps {
  totalProducts: number;
  filteredCount: number;
  renderCount: number;
  filterTime: number;
}


const PerformanceStats = memo(
  ({
    totalProducts,
    filteredCount,
    renderCount,
    filterTime,
  }: PerformanceStatsProps) => {
    return (
      <div
        style={{
          backgroundColor: "#dbeafe",
          padding: 16,
          borderRadius: 8,
          marginBottom: 20,
        }}
      >
        <h3 style={{ marginTop: 0 }}> Statistiques de Performance</h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
          }}
        >
          <div>
            <strong>Total produits:</strong>
            <br />
            {totalProducts}
          </div>
          <div>
            <strong>Produits filtrés:</strong>
            <br />
            {filteredCount}
          </div>
          <div>
            <strong>Nombre de renders:</strong>
            <br />
            {renderCount}
          </div>
          <div>
            <strong>Temps de filtrage:</strong>
            <br />
            {filterTime.toFixed(2)}ms
          </div>
        </div>
        <p
          style={{
            marginBottom: 0,
            marginTop: 12,
            fontSize: 14,
            color: "#1e40af",
          }}
        >
           Ouvrez la console pour voir les logs de re-rendering
        </p>
      </div>
    );
  }
);

PerformanceStats.displayName = "PerformanceStats";

export default PerformanceStats;
