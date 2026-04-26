export default function DetailedBreakdown({ result }) {
  const isWinner = result?.prize > 0;

  return (
    <div className="max-w-3xl mx-auto mt-10">
      
      {/* RESULT CARD */}
      <div className="rounded-xl shadow-lg overflow-hidden border bg-white">
        
        {/* HEADER */}
        <div className="bg-gradient-to-r from-kerala-green to-kerala-dark text-white p-5">
          <h2 className="text-lg font-semibold">
            {result.lottery.toUpperCase()} Lottery
          </h2>
          <p className="text-sm opacity-90">{result.date}</p>
        </div>

        {/* BODY */}
        <div className="p-6 text-center">

          <p className="text-sm text-gray-500 mb-2">Ticket Number</p>
          <h3 className="text-xl font-bold text-kerala-dark mb-4">
            {result.ticketNumber}
          </h3>

          {/* WIN / LOSE */}
          {isWinner ? (
            <>
              <div className="bg-green-100 text-kerala-green font-bold py-3 rounded-lg mb-4">
                🎉 Congratulations! You Won
              </div>

              <p className="text-gray-500">Prize Amount</p>
              <h1 className="text-3xl font-bold text-kerala-green">
                ₹{result.prize.toLocaleString()}
              </h1>
            </>
          ) : (
            <div className="bg-red-100 text-red-600 font-semibold py-3 rounded-lg">
              ❌ Sorry, better luck next time
            </div>
          )}
        </div>
      </div>
    </div>
  );
}