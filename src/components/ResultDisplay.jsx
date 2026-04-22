import React from "react";

export default function ResultDisplay({ result }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 text-center">
      <h2 className="text-2xl font-bold text-kerala-dark mb-4">
        🎉 Congratulations!
      </h2>

      <p className="text-lg font-semibold mb-2">
        Ticket: {result.ticketNumber}
      </p>

      <p className="text-3xl font-bold text-kerala-green mb-2">
        ₹{result.prize}
      </p>

      <p className="text-gray-600">Winning Lottery</p>
    </div>
  );
}