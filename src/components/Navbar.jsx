import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: 20, background: "#eee" }}>
      <Link to="/" style={{ marginRight: 10 }}>
        Home
      </Link>
      <Link to="/about" style={{ marginRight: 10 }}>
        About
      </Link>
      <Link to="/contact" style={{ marginRight: 10 }}>
        Contact
      </Link>
      <Link to="/article/1" style={{ marginRight: 10 }}>
        Article 1
      </Link>
      <Link to="/article/2">Article 2</Link>
    </nav>
  );
}
