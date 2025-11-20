import React from "react";

const SwiftArithmeticOperators: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold text-gray-900 border-b-2 pb-2 mt-15">
      Swift Arithmetic Operators
    </h1>

    <p className="text-lg text-gray-700 leading-relaxed mt-4">
      Use <code>+</code>, <code>-</code>, <code>*</code>, and <code>/</code> to add, subtract, multiply, and divide. Integer division truncates toward zero.
    </p>

    {/* Basic Arithmetic */}
    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Examples</h2>
    <p className="text-gray-700 leading-relaxed mt-3">
      These examples show addition, subtraction, multiplication, and integer division.
    </p>

    <h3 className="text-xl font-bold text-gray-800 mt-4">Example</h3>
    <div className="bg-gray-900 text-green-400 font-mono p-4 rounded-lg shadow-md mt-3">
      <pre>{`let a = 7, b = 3
print(a - b)
print(a * b)
print(a / b)        // integer division`}</pre>
    </div>
    <p className="text-gray-700 leading-relaxed mt-4">
      ✅ This example demonstrates arithmetic with integers.
    </p>

    {/* Remainder Operator */}
    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Remainder Operator</h2>
    <p className="text-gray-700 leading-relaxed mt-3">
      The remainder operator <code>%</code> gives the leftover after integer division.
    </p>

    <h3 className="text-xl font-bold text-gray-800 mt-4">Example</h3>
    <div className="bg-gray-900 text-green-400 font-mono p-4 rounded-lg shadow-md mt-3">
      <pre>{`print(7 % 3)   // 1
print(8 % 2)   // 0
print(10 % 6)  // 4`}</pre>
    </div>
    <p className="text-gray-700 leading-relaxed mt-4">
      ✅ This example demonstrates how the remainder operator returns the leftover after integer division.
    </p>
  </>
);

export default SwiftArithmeticOperators;
