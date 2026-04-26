import React, { useState } from "react";

import Header from "./components/Header";
import ResultForm from "./components/ResultForm";
import LoadingState from "./components/LoadingState";
import ResultDisplay from "./components/ResultDisplay";
import NoResult from "./components/NoResult";

export default function Home({ isLoggedIn, setIsLoggedIn }) {
  const [isLoading, setIsLoading] = useState(false);
  const [resultData, setResultData] = useState(null);
  const [notFound, setNotFound] = useState(false);

const handleCheckResult = (data) => {
  if (data) {
    setResultData(data);
    setNotFound(false);
  } else {
    setResultData(null);   // 🔥 IMPORTANT
    setNotFound(true);
  }
};

  return (
    <div className="min-h-screen bg-kerala-light">

      <Header
  isLoggedIn={isLoggedIn}
  setIsLoggedIn={setIsLoggedIn}
/>

      <main className="max-w-4xl mx-auto px-4 py-10">

        {/* FORM */}
        <ResultForm
          setIsLoading={setIsLoading}
          onCheckResult={handleCheckResult}
        />

        {/* RESULT SECTION */}
        <div className="mt-8">
          {isLoading && <LoadingState />}
          {resultData && <ResultDisplay result={resultData} />}
          {notFound && <NoResult />}
        </div>

      </main>
    </div>
  );
}