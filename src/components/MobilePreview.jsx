import React from 'react';
import { Home, Trophy, Clock, User } from 'lucide-react';

export default function MobilePreview() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 md:p-8 slide-in">
      <h2 className="text-lg md:text-xl font-bold text-keras-dark mb-6 text-center">
        MOBILE VERSION
      </h2>

      {/* Mobile Phone Frame */}
      <div className="flex justify-center">
        <div className="relative w-48 md:w-56 bg-black rounded-3xl p-3 md:p-4 shadow-2xl" style={{ aspectRatio: '9/19' }}>
          {/* Phone Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 md:w-40 h-6 md:h-7 bg-black rounded-b-2xl z-20"></div>

          {/* Screen Content */}
          <div className="w-full h-full bg-kerala-light rounded-2xl overflow-hidden flex flex-col">
            {/* Phone Header */}
            <div className="bg-gradient-to-r from-kerala-dark to-kerala-green text-white p-3 md:p-4 text-center">
              <p className="text-xs md:text-sm font-bold">WK 123456</p>
              <p className="text-xs md:text-sm font-semibold mt-1">You Won!</p>
            </div>

            {/* Phone Content */}
            <div className="flex-1 flex flex-col items-center justify-center px-3 md:px-4 py-6 md:py-8">
              {/* Prize Display */}
              <div className="w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-kerala-accent to-kerala-gold rounded-2xl flex items-center justify-center mb-3 md:mb-4 shadow-lg">
                <Trophy size={32} className="text-white" />
              </div>

              <p className="text-white text-lg md:text-xl font-bold mb-1 text-center">₹75,00,000</p>
              <p className="text-xs md:text-sm text-white/80 text-center mb-4 md:mb-6">Prize Amount</p>

              {/* Status Badge */}
              <div className="bg-white bg-opacity-20 backdrop-blur px-4 md:px-6 py-2 md:py-3 rounded-lg mb-6 md:mb-8">
                <p className="text-white text-xs md:text-sm font-semibold">Winning Result</p>
              </div>
            </div>

            {/* Phone Navigation */}
            <div className="bg-white border-t border-gray-200 flex items-center justify-around px-2 md:px-4 py-2 md:py-3">
              <button className="flex flex-col items-center gap-1 text-kerala-green font-bold">
                <Home size={18} className="md:w-6 md:h-6" />
                <span className="text-xs md:text-sm">Home</span>
              </button>
              <button className="flex flex-col items-center gap-1 text-gray-600 font-bold">
                <Trophy size={18} className="md:w-6 md:h-6" />
                <span className="text-xs md:text-sm">Results</span>
              </button>
              <button className="flex flex-col items-center gap-1 text-gray-600 font-bold">
                <Clock size={18} className="md:w-6 md:h-6" />
                <span className="text-xs md:text-sm">History</span>
              </button>
              <button className="flex flex-col items-center gap-1 text-gray-600 font-bold">
                <User size={18} className="md:w-6 md:h-6" />
                <span className="text-xs md:text-sm">Profile</span>
              </button>
            </div>
          </div>

          {/* Side Button */}
          <div className="absolute right-0 top-24 md:top-32 w-1 md:w-1.5 h-16 md:h-20 bg-gray-800 rounded-l"></div>
        </div>
      </div>

      {/* Description */}
      <p className="text-center text-xs md:text-sm text-gray-600 font-semibold mt-6">App-Friendly Design</p>
    </div>
  );
}
