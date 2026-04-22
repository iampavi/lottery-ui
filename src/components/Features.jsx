export default function Features() {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-10">
      <div className="bg-white p-6 rounded-xl shadow-md text-center">
        <h3 className="font-bold text-kerala-dark mb-2">Fast Results</h3>
        <p className="text-sm text-gray-600">Check results instantly</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md text-center">
        <h3 className="font-bold text-kerala-dark mb-2">Accurate Data</h3>
        <p className="text-sm text-gray-600">Official Kerala results</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md text-center">
        <h3 className="font-bold text-kerala-dark mb-2">Easy to Use</h3>
        <p className="text-sm text-gray-600">Simple UI experience</p>
      </div>
    </div>
  );
}