import React from "react";
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

export default function App() {
  return (
    <>
      <Navbar />
      <main style={{ padding: 12 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/login" element={<Login />} />

          {/* Protected routes */}
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

          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </main>
    </>
  );
}
