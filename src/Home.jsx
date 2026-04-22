import React, { useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import ResultForm from "./components/ResultForm";
import LoadingState from "./components/LoadingState";
import ResultDisplay from "./components/ResultDisplay";
import NoResult from "./components/NoResult";
import DetailedBreakdown from "./components/DetailedBreakdown";
import QuickActions from "./components/QuickActions";
import Features from "./components/Features";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [resultData, setResultData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const handleCheckResult = (data) => {
    setIsLoading(true);
    setNotFound(false);

    setTimeout(() => {
      setIsLoading(false);

      if (data.success) {
        setResultData(data.result);
      } else {
        setNotFound(true);
        setResultData(null);
      }
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-kerala-light">
      
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Trust Bar */}
      <TrustBar />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-10">

        {/* Result Form */}
        <div className="max-w-2xl mx-auto mb-10">
          <ResultForm onCheckResult={handleCheckResult} />
        </div>

        {/* Result Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Left */}
          <div className="space-y-6">
            <DetailedBreakdown />
            <QuickActions />
          </div>

          {/* Right */}
          <div className="space-y-6">
            {isLoading && <LoadingState />}
            {!isLoading && resultData && (
              <ResultDisplay result={resultData} />
            )}
            {!isLoading && notFound && <NoResult />}
        
          </div>

        </div>

        {/* Features */}
        <Features />

      </main>

      {/* Footer */}
      <footer className="bg-kerala-dark text-white text-center py-6 mt-10">
        <p>© 2026 Kerala Lottery. All rights reserved.</p>
      </footer>

    </div>
  );
}