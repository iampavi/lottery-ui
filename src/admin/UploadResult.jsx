import React, { useState } from "react";
import axios from "axios";

export default function UploadResult() {
  const [form, setForm] = useState({
    ticketNumber: "",
    lottery: "win-win",
    date: "",
    prize: "",
    prizeType: "",
  });

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");

    await axios.post(
      `${import.meta.env.VITE_API_URL}/api/admin/upload`,
      form,
      {
        headers: { Authorization: token },
      }
    );

    alert("Result uploaded!");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="font-bold mb-4">Upload Result</h2>

      <input placeholder="Ticket" onChange={(e) => setForm({...form, ticketNumber: e.target.value})} />
      <input placeholder="Date" type="date" onChange={(e) => setForm({...form, date: e.target.value})} />
      <input placeholder="Prize" onChange={(e) => setForm({...form, prize: e.target.value})} />
      <input placeholder="Prize Type" onChange={(e) => setForm({...form, prizeType: e.target.value})} />

      <button onClick={handleSubmit} className="bg-kerala-green text-white p-2 mt-3">
        Upload
      </button>
    </div>
  );
}