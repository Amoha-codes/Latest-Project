import React from "react";

const SwiftNumbers: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold text-gray-900 border-b-2 pb-2 mt-15">
      Swift Numbers
    </h1>

    <p className="text-lg text-gray-700 leading-relaxed mt-4">
      Swift provides both <b>integer</b> types (such as <code>Int</code>) and{" "}
      <b>floating-point</b> types (such as <code>Double</code>). You can use these
      numeric types with Swift's arithmetic operators.
    </p>

    {/* Arithmetic */}
    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Arithmetic</h2>

    <p className="text-gray-700 leading-relaxed mt-3">
      Use Swift’s basic arithmetic operators <code>+</code>, <code>-</code>,{" "}
      <code>*</code>, and <code>/</code> to perform operations on numbers. When
      dividing integers and needing a decimal result, convert values to{" "}
      <code>Double</code>.
    </p>

    <h3 className="text-xl font-bold text-gray-800 mt-4">Example</h3>

    <div className="bg-gray-900 text-green-400 font-mono p-4 rounded-lg shadow-md mt-3">
      <pre>
{`let a = 5, b = 2

print(a - b)                  // subtraction
print(a * b)                  // multiplication
print(Double(a) / Double(b))  // convert to Double for decimal output`}
      </pre>
    </div>
  </>
);

export default SwiftNumbers;
