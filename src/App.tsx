import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import ArticleDetail from "./pages/ArticleDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import CreateArticle from "./pages/CreateArticle";
import EditArticle from "./pages/EditArticle";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Performance from "./pages/Performance";
import AdvancedHooks from "./pages/AdvancedHooks";

import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <CartProvider>
      <Navbar />

      <main style={{ padding: 12 }}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/article/:id" element={<ArticleDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/login" element={<Login />} />

          <Route
            path="/create"
            element={
              <ProtectedRoute>
                <CreateArticle />
              </ProtectedRoute>
            }
          />

          <Route
            path="/edit/:id"
            element={
              <ProtectedRoute>
                <EditArticle />
              </ProtectedRoute>
            }
          />

          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/hooks" element={<AdvancedHooks />} />

          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </main>
    </CartProvider>
  );
}
