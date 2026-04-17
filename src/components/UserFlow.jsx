import React from 'react';
import { ArrowRight, Ticket, Calendar, User, BarChart3 } from 'lucide-react';

export default function UserFlow() {
  const steps = [
    { icon: Ticket, label: 'Enter Ticket', number: 1 },
    { icon: BarChart3, label: 'Select Lottery', number: 2 },
    { icon: Calendar, label: 'Pick Date', number: 3 },
    { icon: User, label: 'Check Result', number: 4 },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6 md:p-8 slide-in">
      <div className="flex items-center gap-3 mb-6">
        <span className="bg-kerala-green text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm md:text-base">1</span>
        <h2 className="text-xl md:text-2xl font-bold text-kerala-dark">USER FLOW</h2>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex items-center justify-between gap-4 mb-6">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center flex-1">
            <div className="flex flex-col items-center flex-1">
              <div className="bg-gradient-to-br from-kerala-accent to-kerala-gold w-16 h-16 rounded-lg flex items-center justify-center mb-3 shadow-md">
                <step.icon size={32} className="text-white" />
              </div>
              <p className="text-xs md:text-sm font-semibold text-center text-kerala-dark">{step.label}</p>
            </div>
            {index < steps.length - 1 && (
              <ArrowRight size={24} className="text-kerala-green mb-8 flex-shrink-0 mx-2" />
            )}
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="md:hidden space-y-4 mb-6">
        {steps.map((step, index) => (
          <div key={index}>
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-gradient-to-br from-kerala-accent to-kerala-gold w-12 h-12 rounded-lg flex items-center justify-center shadow-md flex-shrink-0">
                <step.icon size={24} className="text-white" />
              </div>
              <p className="text-sm font-semibold text-kerala-dark">{step.label}</p>
            </div>
            {index < steps.length - 1 && (
              <div className="flex justify-center mb-2">
                <ArrowRight size={20} className="text-kerala-green rotate-90" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center text-sm text-kerala-dark font-semibold">
        <p>Quick 4-Step Process</p>
      </div>
    </div>
  );
}
