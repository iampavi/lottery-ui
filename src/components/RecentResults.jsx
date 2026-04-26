export default function RecentResults() {
  const data = [
    { date: "17 Apr", number: "WK 123456", prize: "₹75L" },
    { date: "16 Apr", number: "WK 654321", prize: "₹75L" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-lg font-bold text-kerala-dark mb-4">
        Recent Results
      </h2>

      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-gray-600">
            <th>Date</th>
            <th>Number</th>
            <th>Prize</th>
          </tr>
        </thead>

        <tbody>
          {data.map((r, i) => (
            <tr key={i} className="border-t">
              <td>{r.date}</td>
              <td>{r.number}</td>
              <td>{r.prize}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}