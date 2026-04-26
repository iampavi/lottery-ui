import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/register`,
        { name, email, password }
      );

      alert("Registered Successfully");
      navigate("/login");

    } catch (err) {
      console.log(err.response?.data);
    }
  };

  return (
    <form onSubmit={handleRegister} className="max-w-md mx-auto mt-20 bg-white p-8 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-6 text-kerala-dark">Register</h2>

      <input
        placeholder="Name"
        className="w-full mb-4 p-3 border rounded"
        onChange={(e) => setName(e.target.value)}
      />

      <input
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
        Register
      </button>
    </form>
  );
}