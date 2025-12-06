import { useParams } from "react-router-dom";

export default function EditArticle() {
  const { id } = useParams<{ id: string }>();
  return (
    <div style={{ padding: 20 }}>
      <h1>Edit Article {id}</h1>
      <p>Edit form for article {id} (protected).</p>
    </div>
  );
}
