import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as any)?.from?.pathname || "/";

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    try {
      await login(email, password);
      navigate(from, { replace: true });
    } catch (error: any) {
      setErr(error?.message || "Login failed");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>Email</label><br />
          <input value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div style={{ marginTop: 8 }}>
          <label>Password</label><br />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        {err && <div style={{ color: "red", marginTop: 8 }}>{err}</div>}
        <button style={{ marginTop: 12 }} type="submit">Login</button>
      </form>
    </div>
  );
}
