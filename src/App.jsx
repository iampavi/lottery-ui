import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUser } from "./utils/auth";
import Home from "./Home";
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  return token && role === "admin"
    ? children
    : <Navigate to="/" />;
};
const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLoggedIn(true);
  }, []);

useEffect(() => {
  const decoded = getUser();
  if (decoded) setUser(decoded);
}, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home user={user} setUser={setUser}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          />
        }
      />

      <Route
        path="/login"
        element={<Login setIsLoggedIn={setIsLoggedIn} />}
      />

      <Route path="/register" element={<Register />} />

      <Route path="/admin" element={<AdminLogin />} />

      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}