import React from "react";

const SwiftIf: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-15">
      Swift If
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      Execute code conditionally when an expression evaluates to true.
    </p>

    <h2 className="text-2xl font-bold  mt-6">Basic if</h2>
    <p className="text-lg  leading-relaxed mt-2">
      Run code only when a condition evaluates to true.
    </p>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
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
