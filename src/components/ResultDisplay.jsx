import React from 'react';
import { RotateCw } from 'lucide-react';

export default function ResultDisplay() {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 md:p-10 slide-in">
      <div className="flex items-center gap-3 mb-6">
        <span className="bg-kerala-green text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm md:text-base">4</span>
        <h2 className="text-xl md:text-2xl font-bold text-kerala-dark">RESULT DISPLAY</h2>
      </div>

      <div className="flex flex-col items-center justify-center gap-6 py-8 md:py-12">
        <div className="relative w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-kerala-accent to-kerala-gold rounded-2xl flex items-center justify-center shadow-lg">
          <RotateCw size={64} className="text-white spinner" />
        </div>
        <p className="text-lg md:text-xl font-semibold text-kerala-dark">Spinner Animation</p>
        <p className="text-xs md:text-sm text-gray-600 text-center">
          Beautiful loading animation while processing resultsss
        </p>
      </div>
    </div>
  );
}
