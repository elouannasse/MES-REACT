import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const activeStyle = ({ isActive }) =>
  isActive ? { fontWeight: "bold", textDecoration: "underline" } : undefined;

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav style={{ padding: 12, borderBottom: "1px solid #ddd" }}>
      <NavLink to="/" style={activeStyle}>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/about" style={activeStyle}>
        About
      </NavLink>
      {" | "}
      <NavLink to="/contact" style={activeStyle}>
        Contact
      </NavLink>
      {" | "}
      <NavLink to="/create" style={activeStyle}>
        Create
      </NavLink>
      {" | "}
      <NavLink to="/shop" style={activeStyle}>
        Shop
      </NavLink>
      {" | "}
      <NavLink to="/cart" style={activeStyle}>
        Cart
      </NavLink>
      {" | "}
      <NavLink to="/performance" style={activeStyle}>
        Performance
      </NavLink>

      <span style={{ float: "right" }}>
        {user ? (
          <>
            <span style={{ marginRight: 8 }}>Hi, {user.name}</span>
            <button
              onClick={() => {
                logout();
                navigate("/");
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <NavLink to="/login" style={activeStyle}>
            Login
          </NavLink>
        )}
      </span>
    </nav>
  );
}
