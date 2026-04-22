import React, { useState } from "react";
import axios from "axios";

export default function AdminLogin() {
  const [form, setForm] = useState({ username: "", password: "" });

const handleLogin = async (e) => {
  e.preventDefault(); // 🔥 important

  try {
    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/admin/login`,
      {
        username: form.username,
        password: form.password,
      }
    );

    if (res.data.success) {
      localStorage.setItem("token", res.data.token);
      window.location.href = "/admin/dashboard";
    } else {
      alert("Login failed");
    }

  } catch (err) {
    console.error(err);
    alert("Login failed");
  }
};

  return (
    <div className="flex items-center justify-center h-screen bg-kerala-light">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-md w-80"
      >
        <h2 className="text-xl font-bold mb-4 text-center text-kerala-dark">
          Admin Login
        </h2>

        <input
          type="text"
          placeholder="Username"
          className="w-full mb-3 p-2 border rounded"
          onChange={(e) =>
            setForm({ ...form, username: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <button className="w-full bg-kerala-green text-white py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}