import React, { useState, useEffect } from "react";

const AjaxControl: React.FC = () => {
  const [partialTime, setPartialTime] = useState<string>("");
  const [totalTime, setTotalTime] = useState<string>("");
  const [timerTime, setTimerTime] = useState<string>("");

  // Timer effect simulating UpdatePanel + Timer
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().toLocaleTimeString();
      setTimerTime(`Timer Label: ${now}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handlePartialUpdate = () => {
    const now = new Date().toLocaleTimeString();
    setPartialTime(`Showing time from panel: ${now}`);
    // totalTime remains unchanged
  };

  const handleTotalUpdate = () => {
    const now = new Date().toLocaleTimeString();
    setPartialTime(`Showing time from panel: ${now}`);
    setTotalTime(`Showing time from outside: ${now}`);
  };

  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        ASP.NET AJAX Controls Simulation
      </h1>

      <p className="leading-relaxed">
        This example demonstrates partial and total postbacks using UpdatePanel 
        behavior in React.
      </p>

      {/* UpdatePanel Simulation */}
      <div className="border border-gray-400 p-4 rounded-md bg-gray-50">
        <h2 className="font-bold mb-2">Inside Update Panel</h2>
        <button
          onClick={handlePartialUpdate}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
        >
          Partial PostBack
        </button>
        <p className="mt-2 text-gray-700">{partialTime}</p>
      </div>

      {/* Outside UpdatePanel */}
      <div className="mt-6">
        <h2 className="font-bold mb-2">Outside Update Panel</h2>
        <button
          onClick={handleTotalUpdate}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-2"
        >
          Total PostBack
        </button>
        <p className="mt-2 text-gray-700">{totalTime}</p>
      </div>

      {/* Timer / Auto PostBack */}
      <div className="mt-6 border border-gray-400 p-4 rounded-md bg-yellow-50">
        <h2 className="font-bold mb-2">Timer Update (Every 1s)</h2>
        <p className="text-gray-700">{timerTime}</p>
      </div>

      {/* UpdateProgress Simulation */}
      <div className="mt-6 border border-gray-400 p-4 rounded-md bg-pink-50">
        <h2 className="font-bold mb-2">Update Progress Simulation</h2>
        <p className="text-gray-700 animate-pulse">Loading...</p>
      </div>
    </div>
  );
};

export default AjaxControl;
