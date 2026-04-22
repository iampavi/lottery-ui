import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-kerala-dark to-kerala-green text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Kerala Lottery Results
        </h1>

        <p className="text-sm md:text-lg opacity-90 mb-6">
          Official Kerala Government Lottery Result Portal
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-kerala-gold text-kerala-dark px-6 py-3 rounded-lg font-semibold">
            Check Result
          </button>
          <button className="border border-white px-6 py-3 rounded-lg">
            View Today Result
          </button>
        </div>
      </div>
    </section>
  );
}