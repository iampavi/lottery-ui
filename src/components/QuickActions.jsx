import React from 'react';
import { Search, RotateCcw, BarChart3, ChevronRight } from 'lucide-react';

export default function QuickActions() {
  const actions = [
    { icon: Search, label: 'Check Another', color: 'from-green-400 to-green-600' },
    { icon: RotateCcw, label: 'Yesterday Result', color: 'from-emerald-400 to-emerald-600' },
    { icon: BarChart3, label: 'Monthly Chart', color: 'from-teal-400 to-teal-600' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6 md:p-8 slide-in">
      <div className="flex items-center gap-3 mb-6">
        <span className="bg-kerala-green text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm md:text-base">7</span>
        <h2 className="text-xl md:text-2xl font-bold text-kerala-dark">QUICK ACTIONS</h2>
      </div>

      {/* Actions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-6">
        {actions.map((action, index) => (
          <button
            key={index}
            className={`bg-gradient-to-br ${action.color} text-white px-4 md:px-6 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base flex items-center justify-center gap-2 hover:shadow-lg transition-all transform hover:scale-105`}
          >
            <action.icon size={20} />
            <span className="hidden sm:inline">{action.label}</span>
            <span className="sm:hidden text-xs">{action.label.split(' ')[0]}</span>
          </button>
        ))}
      </div>

      <p className="text-center text-sm text-gray-600 font-semibold">Smart Options</p>
    </div>
  );
}
