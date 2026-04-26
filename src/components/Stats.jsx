export default function Stats() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-white p-4 rounded-lg shadow text-center">
        <p className="text-lg font-bold text-kerala-green">₹75L</p>
        <p className="text-xs text-gray-600">Top Prize</p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow text-center">
        <p className="text-lg font-bold text-kerala-green">Daily</p>
        <p className="text-xs text-gray-600">Draw</p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow text-center">
        <p className="text-lg font-bold text-kerala-green">100%</p>
        <p className="text-xs text-gray-600">Verified</p>
      </div>
    </div>
  );
}