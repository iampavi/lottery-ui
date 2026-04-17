import React, { useState } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';

export default function ResultForm({ onCheckResult }) {
  const [ticketNumber, setTicketNumber] = useState('');
  const [lottery, setLottery] = useState('win-win');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ticketNumber && lottery && date) {
      onCheckResult(ticketNumber, lottery, date);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 md:p-8 slide-in">
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-kerala-dark">RESULT ENTRY UI</h2>
      </div>

      <form onSubmit={handleSubmit} className="bg-gradient-to-br from-white to-kerala-light p-6 md:p-7 rounded-xl border border-gray-100">
        <h3 className="text-lg md:text-xl font-bold text-kerala-dark mb-6">Check Lottery Result</h3>

        {/* Ticket Number Input */}
        <div className="mb-5">
          <label className="block text-sm font-semibold text-kerala-dark mb-2">Enter Ticket Number</label>
          <input
            type="text"
            placeholder="e.g., WK 123456"
            value={ticketNumber}
            onChange={(e) => setTicketNumber(e.target.value.toUpperCase())}
            className="w-full px-4 py-3 md:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kerala-green focus:border-transparent"
          />
        </div>

        {/* Lottery Selection */}
        <div className="mb-5">
          <label className="block text-sm font-semibold text-kerala-dark mb-2">Select Lottery</label>
          <select
            value={lottery}
            onChange={(e) => setLottery(e.target.value)}
            className="w-full px-4 py-3 md:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kerala-green focus:border-transparent bg-white"
          >
            <option value="win-win">Win-Win Lottery</option>
            <option value="sthree-sakthi">Sthree Sakthi</option>
            <option value="fifty-fifty">Fifty-Fifty</option>
            <option value="karunya">Karunya</option>
            <option value="karunya-plus">Karunya Plus</option>
          </select>
        </div>

        {/* Date Picker */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-kerala-dark mb-2">Select Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-4 py-3 md:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kerala-green focus:border-transparent"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-kerala-green text-white py-3 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-kerala-dark transition-colors"
        >
          Check Result
        </button>

        {/* Features List */}
        <div className="mt-6 pt-6 border-t border-gray-200 grid grid-cols-2 gap-3 md:gap-4">
          <div className="flex items-start gap-2">
            <CheckCircle size={18} className="text-kerala-green flex-shrink-0 mt-0.5" />
            <span className="text-xs md:text-sm text-kerala-dark font-medium">Simple & Focused</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle size={18} className="text-kerala-green flex-shrink-0 mt-0.5" />
            <span className="text-xs md:text-sm text-kerala-dark font-medium">Auto-Suggestions</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle size={18} className="text-kerala-green flex-shrink-0 mt-0.5" />
            <span className="text-xs md:text-sm text-kerala-dark font-medium">Easy Inputs</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle size={18} className="text-kerala-green flex-shrink-0 mt-0.5" />
            <span className="text-xs md:text-sm text-kerala-dark font-medium">Great Reading</span>
          </div>
        </div>
      </form>
    </div>
  );
}
