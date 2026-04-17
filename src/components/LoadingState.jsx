import React from 'react';
import { RotateCw } from 'lucide-react';

export default function LoadingState() {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 md:p-10 slide-in">
      <div className="flex items-center gap-3 mb-6">
        <span className="bg-kerala-green text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm md:text-base">2</span>
        <h2 className="text-xl md:text-2xl font-bold text-kerala-dark">LOADING STATE</h2>
      </div>

      <div className="flex flex-col items-center justify-center gap-6 py-12 md:py-16">
        <div className="relative w-20 h-20 md:w-24 md:h-24">
          <RotateCw size={80} className="text-kerala-green spinner" />
        </div>
        <p className="text-base md:text-lg font-semibold text-kerala-dark">Checking result...</p>
        <div className="w-full bg-gray-200 rounded-full h-2 md:h-3">
          <div className="bg-kerala-green h-full rounded-full pulse" style={{ width: '60%' }}></div>
        </div>
      </div>
    </div>
  );
}
