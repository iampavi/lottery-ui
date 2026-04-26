import React from "react";

export default function Hero() {
  return (
<section className="bg-gradient-to-br from-kerala-green to-kerala-dark text-white py-20 text-center">
  <h1 className="text-5xl font-bold mb-4 tracking-tight">
    Kerala Lottery Results
  </h1>

  <p className="text-lg opacity-90 mb-8">
    Official Kerala Government Lottery Result Portal
  </p>

  <div className="flex justify-center gap-4">
    <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold">
      Check Result
    </button>

    <button className="border border-white px-6 py-3 rounded-lg">
      View Today Result
    </button>
  </div>
</section>
  );
}