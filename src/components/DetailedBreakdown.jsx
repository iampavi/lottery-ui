import React from 'react';
import { Gift, Sparkles } from 'lucide-react';

export default function DetailedBreakdown() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 md:p-8 slide-in">
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-kerala-dark">DETAILED BREAKDOWN</h2>
      </div>

      {/* Ticket Card */}
      <div className="bg-gradient-to-br from-kerala-cream to-white border border-gray-200 rounded-xl overflow-hidden shadow-md mb-6">
        {/* Header */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-200">
          <div>
            <p className="text-xs md:text-sm text-gray-600 font-semibold">Win-Win Lottery</p>
            <p className="text-lg md:text-xl font-bold text-kerala-dark mt-1">12 April 2026</p>
          </div>
          <Sparkles size={24} className="text-kerala-gold" />
        </div>

        {/* Ticket Number Section */}
        <div className="bg-gradient-to-r from-kerala-accent to-kerala-gold p-4 md:p-6 relative">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-2 left-4 text-kerala-dark text-opacity-20">✦</div>
            <div className="absolute bottom-2 right-4 text-kerala-dark text-opacity-20">✦</div>
          </div>
          <p className="text-center text-white text-sm md:text-base font-semibold mb-2 relative z-10">WK 123456</p>
        </div>

        {/* Result Section */}
        <div className="bg-gradient-to-r from-kerala-green to-kerala-dark p-4 md:p-6">
          <p className="text-center text-white text-lg md:text-2xl font-bold">Congratulations! 🎉</p>
        </div>

        {/* Prize Section */}
        <div className="p-4 md:p-6 text-center border-t border-gray-200">
          <p className="text-xs md:text-sm text-gray-600 font-semibold mb-1">Prize Amount</p>
          <p className="text-3xl md:text-4xl font-bold text-kerala-green">₹75,00,000</p>
          <p className="text-xs md:text-sm text-gray-600 mt-2 font-medium">Winning Highlight</p>
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-kerala-light p-4 md:p-6 rounded-lg border-l-4 border-kerala-gold flex items-start gap-3">
        <Gift size={20} className="text-kerala-green flex-shrink-0 mt-1" />
        <div>
          <p className="text-sm md:text-base font-semibold text-kerala-dark mb-1">Prize Info</p>
          <p className="text-xs md:text-sm text-gray-700">
            Prize amount includes all tax deductions as per Kerala government regulations.
          </p>
        </div>
      </div>
    </div>
  );
}
