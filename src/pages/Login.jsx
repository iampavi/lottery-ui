import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        { email, password }
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
       setIsLoggedIn(true);
        navigate("/");

    } catch (err) {
      console.log(err.response?.data);
    }
  };

  return (
    <form onSubmit={handleLogin} className="max-w-md mx-auto mt-20 bg-white p-8 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-6 text-kerala-dark">Login</h2>

      <input
        type="email"
        placeholder="Email"
        className="w-full mb-4 p-3 border rounded"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full mb-4 p-3 border rounded"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        type="submit"
        className="w-full bg-kerala-green text-white py-3 rounded"
      >
        Login
      </button>
    </form>
  );
}