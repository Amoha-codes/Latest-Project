import React from "react";

const SwiftIf: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold text-gray-900 border-b-2 pb-2 mt-15">
      Swift If
    </h1>

    <p className="text-lg text-gray-700 leading-relaxed mt-4">
      Execute code conditionally when an expression evaluates to true.
    </p>

    <h2 className="text-2xl font-bold text-gray-800 mt-6">Basic if</h2>
    <p className="text-lg text-gray-700 leading-relaxed mt-2">
      Run code only when a condition evaluates to true.
    </p>

    <div className="bg-gray-900 text-green-400 p-4 rounded-lg mt-4 font-mono text-base">
      <pre>
{`let temp = 25
if temp > 20 {
    print("Warm")
}`}
      </pre>
    </div>
  </>
);

export default SwiftIf;
