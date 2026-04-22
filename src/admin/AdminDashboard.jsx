import React, { useState } from "react";
import axios from "axios";

export default function AdminDashboard() {
  const [form, setForm] = useState({
    ticketNumber: "",
    lottery: "",
    date: "",
    prize: "",
  });

  const handleAdd = async () => {
    await axios.post(
      `${import.meta.env.VITE_API_URL}/api/lottery/add`,
      form
    );

    alert("Result added!");
  };

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>

      <input placeholder="Ticket" onChange={(e)=>setForm({...form, ticketNumber:e.target.value})} />
      <input placeholder="Lottery" onChange={(e)=>setForm({...form, lottery:e.target.value})} />
      <input type="date" onChange={(e)=>setForm({...form, date:e.target.value})} />
      <input placeholder="Prize" onChange={(e)=>setForm({...form, prize:e.target.value})} />

      <button onClick={handleAdd}>Add Result</button>
    </div>
  );
}