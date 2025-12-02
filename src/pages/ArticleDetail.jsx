import { useParams } from "react-router-dom";

export default function ArticleDetail() {
  const { id } = useParams();
  return <h1>Détails de l'article {id}</h1>;
}
