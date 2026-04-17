import React, { useState } from 'react';
import Header from './components/Header';
import UserFlow from './components/UserFlow';
import LoadingState from './components/LoadingState';
import ResultForm from './components/ResultForm';
import ResultDisplay from './components/ResultDisplay';
import DetailedBreakdown from './components/DetailedBreakdown';
import QuickActions from './components/QuickActions';
import MobilePreview from './components/MobilePreview';

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleCheckResult = (ticketNumber, lottery, date) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowResult(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-kerala-light">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Left Column */}
          <div className="space-y-6 md:space-y-8">
            

            {/* Section 3: Result Entry UI */}
            <ResultForm onCheckResult={handleCheckResult} />

            {/* Section 6: Detailed Breakdown */}
            <DetailedBreakdown />

            {/* Section 7: Quick Actions */}
            <QuickActions />
          </div>

          {/* Right Column */}
          <div className="space-y-6 md:space-y-8">
            {/* Section 2: Loading State */}
            {isLoading && <LoadingState />}

            {/* Section 4: Result Display */}
            {!isLoading && showResult && <ResultDisplay />}

            {/* Mobile Preview */}
            <MobilePreview />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-kerala-dark text-white mt-12 md:mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div>
              <h3 className="text-lg font-bold mb-3">About</h3>
              <p className="text-sm opacity-90">
                Kerala Lottery is a legal gambling game conducted by the Kerala Government.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3">Quick Links</h3>
              <ul className="text-sm space-y-2 opacity-90">
                <li><a href="#" className="hover:opacity-100">Check Results</a></li>
                <li><a href="#" className="hover:opacity-100">Lottery Types</a></li>
                <li><a href="#" className="hover:opacity-100">How to Play</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3">Contact</h3>
              <p className="text-sm opacity-90">
                Email: info@keralallottery.gov.in<br />
                Phone: +91 XXXX-XXXX-XXXX
              </p>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-75">
            <p>&copy; 2026 Kerala Lottery. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
