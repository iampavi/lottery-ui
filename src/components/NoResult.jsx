import React from "react";

export default function NoResult() {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 text-center">
      <h2 className="text-xl font-bold text-red-500 mb-2">
        No Result Found ❌
      </h2>
      <p className="text-gray-600">
        Please check your ticket number and date.
      </p>
    </div>
  );
}