import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminDashboard() {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [showAddModal, setShowAddModal] = useState(false);

  const [newData, setNewData] = useState({
    ticketNumber: "",
    lottery: "win-win",
    date: "",
    prize: "",
    prizeType: ""
  });

  const perPage = 5;

  // 🔥 FETCH RESULTS
  const fetchResults = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/lottery/all`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setResults(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchResults();
  }, []);

  // 🔥 ADD RESULT
  const handleAdd = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/lottery/add`,
        newData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setShowAddModal(false);
      fetchResults();

    } catch (err) {
      console.log(err);
    }
  };

  // 🔥 DELETE
  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");

    await axios.delete(
      `${import.meta.env.VITE_API_URL}/api/lottery/${id}`,
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    );

    fetchResults();
  };

  // 🔍 FILTER
  const filtered = results.filter((r) =>
    r.ticketNumber.toLowerCase().includes(search.toLowerCase())
  );

  // 📄 PAGINATION
  const paginated = filtered.slice(
    (page - 1) * perPage,
    page * perPage
  );

  // 📊 STATS
  const totalPrize = results.reduce((a, b) => a + b.prize, 0);
  const totalLotteries = new Set(results.map(r => r.lottery)).size;

  // 📁 EXPORT CSV
  const exportCSV = () => {
    const rows = results.map(r =>
      `${r.ticketNumber},${r.lottery},${r.date},${r.prize},${r.prizeType}`
    );

    const blob = new Blob([rows.join("\n")], { type: "text/csv" });

    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "results.csv";
    a.click();
  };

  // 📁 IMPORT CSV
  const handleCSV = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onload = async (e) => {
      const rows = e.target.result.split("\n");

      for (let row of rows) {
        const [ticketNumber, lottery, date, prize, prizeType] = row.split(",");

        if (!ticketNumber) continue;

        await axios.post(
          `${import.meta.env.VITE_API_URL}/api/lottery/add`,
          { ticketNumber, lottery, date, prize, prizeType },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          }
        );
      }

      fetchResults();
    };

    reader.readAsText(file);
  };

  return (
    <div className="p-6 bg-kerala-light min-h-screen">

      {/* HEADER */}
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-bold text-kerala-dark">
          Admin Dashboard
        </h2>

        <div className="flex gap-2">
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-kerala-green text-white px-4 py-2 rounded"
          >
            + Add Result
          </button>

          <button
            onClick={exportCSV}
            className="bg-blue-500 text-white px-3 py-2 rounded"
          >
            Export CSV
          </button>

          <input type="file" accept=".csv" onChange={handleCSV} />
        </div>
      </div>

      {/* 🔍 SEARCH */}
      <input
        placeholder="Search ticket..."
        className="border p-2 mb-4 w-60"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 📊 STATS */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <h3>Total Results</h3>
          <p className="text-xl font-bold">{results.length}</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3>Total Prize</h3>
          <p className="text-xl font-bold">₹ {totalPrize}</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3>Lotteries</h3>
          <p className="text-xl font-bold">{totalLotteries}</p>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-kerala-green text-white">
            <tr>
              <th className="p-3 text-left">Ticket</th>
              <th>Lottery</th>
              <th>Date</th>
              <th>Prize</th>
              <th>Type</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {paginated.map((r) => (
              <tr key={r._id} className="border-b">
                <td className="p-3">{r.ticketNumber}</td>
                <td>{r.lottery}</td>
                <td>{r.date}</td>
                <td>₹ {r.prize}</td>
                <td>{r.prizeType}</td>

                <td className="flex gap-2 p-3">
                  <button className="bg-yellow-500 px-3 py-1 rounded">
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(r._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      <div className="flex gap-2 mt-4">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Prev
        </button>

        <button onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>

      {/* ➕ ADD MODAL */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
          <div className="bg-white p-6 rounded-xl w-96">
            <h2 className="text-lg font-bold mb-4">Add Result</h2>

            <input
              placeholder="Ticket"
              className="w-full mb-2 p-2 border"
              onChange={(e) =>
                setNewData({ ...newData, ticketNumber: e.target.value })
              }
            />

            <input
              type="date"
              className="w-full mb-2 p-2 border"
              onChange={(e) =>
                setNewData({ ...newData, date: e.target.value })
              }
            />

            <input
              placeholder="Prize"
              className="w-full mb-2 p-2 border"
              onChange={(e) =>
                setNewData({ ...newData, prize: e.target.value })
              }
            />

            <input
              placeholder="Prize Type"
              className="w-full mb-2 p-2 border"
              onChange={(e) =>
                setNewData({ ...newData, prizeType: e.target.value })
              }
            />

            <div className="flex justify-end gap-2 mt-4">
              <button onClick={() => setShowAddModal(false)}>
                Cancel
              </button>

              <button
                onClick={handleAdd}
                className="bg-green-600 text-white px-3 py-1 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}