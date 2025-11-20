import React from "react";

const SwiftNumberOutput: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold text-gray-900 border-b-2 pb-2 mt-15">
      Swift Number Output
    </h1>

    <p className="text-lg text-gray-700 leading-relaxed mt-4">
      Swift makes it easy to print numeric values using <b>print()</b>. You can output
      numbers directly or format them using <b>string interpolation</b>.
    </p>

    {/* Printing Numbers */}
    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Printing Numbers</h2>

    <p className="text-gray-700 leading-relaxed mt-3">
      Use <code>print()</code> to display numbers. Swift also allows embedding numeric
      values inside strings using <code>\\(value)</code>.
    </p>

    <h3 className="text-xl font-bold text-gray-800 mt-4">Example</h3>

    <div className="bg-gray-900 text-green-400 font-mono p-4 rounded-lg shadow-md mt-3">
      <pre>
{`let a = 7, b = 3

print(a, b)                 // space-separated by default
print("a=\\(a), b=\\(b)")    // string interpolation
print("sum = \\(a + b)")     // inline math in interpolation`}
      </pre>
    </div>
  </>
);

export default SwiftNumberOutput;
