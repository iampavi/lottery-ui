import React from "react";

export default function ResultDisplay({ result }) {
  if (!result) return null;

  const isWinner = result?.prize > 0;

  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden transition-all">

      {/* HEADER */}
      <div className="px-6 py-4 border-b">
        <h2 className="text-lg font-bold text-kerala-dark">
          Result Status
        </h2>
      </div>

      {/* CONTENT */}
      <div className="p-6 text-center">

        {/* WINNER */}
        {isWinner ? (
          <>
            <div className="bg-kerala-green text-white py-4 rounded-lg mb-4">
              <h2 className="text-xl font-bold">
                🎉 Congratulations!
              </h2>
            </div>

            <p className="text-lg font-semibold mb-2">
              Ticket: {result.ticketNumber}
            </p>

            <p className="text-2xl font-bold text-kerala-dark">
              ₹ {result.prize?.toLocaleString()}
            </p>

            <p className="text-gray-500 mt-2">
              {result.prizeType}
            </p>
          </>
        ) : (
          <>
            {/* LOSER UI */}
            <div className="bg-gray-200 py-4 rounded-lg mb-4">
              <h2 className="text-lg font-semibold text-gray-700">
                Not a Winning Ticket ❌
              </h2>
            </div>

            <p className="text-gray-600">
              Better luck next time!
            </p>
          </>
        )}
      </div>
    </div>
  );
}