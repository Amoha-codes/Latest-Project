import React from "react";

const RustOperators: React.FC = () => {
  return (
    <>

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b pb-3 mt-20">
        Rust - Operators
      </h1>

      <p className="leading-relaxed">
        Operators define the operations performed on data. The values on which operators act are called
        <strong> operands</strong>.  
        Example: <code>7 + 5 = 12</code>
      </p>

      <p>
        Rust provides several categories of operators:
      </p>
      <ul className="list-disc ml-8 space-y-1">
        <li>Arithmetic Operators</li>
        <li>Relational (Comparison) Operators</li>
        <li>Logical Operators</li>
        <li>Bitwise Operators</li>
        <li>Conditional Operators</li>
      </ul>

      {/* Arithmetic Operators */}
      <h2 className="text-2xl font-bold mt-8">1. Arithmetic Operators</h2>
      <p>Assume <strong>a = 10</strong> and <strong>b = 5</strong>.</p>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-700">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-2 text-left">Operator</th>
              <th className="p-2 text-left">Description</th>
              <th className="p-2 text-left">Example</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-2">+</td><td className="p-2">Addition</td><td className="p-2">a + b = 15</td></tr>
            <tr><td className="p-2">-</td><td className="p-2">Subtraction</td><td className="p-2">a - b = 5</td></tr>
            <tr><td className="p-2">*</td><td className="p-2">Multiplication</td><td className="p-2">a * b = 50</td></tr>
            <tr><td className="p-2">/</td><td className="p-2">Division</td><td className="p-2">a / b = 2</td></tr>
            <tr><td className="p-2">%</td><td className="p-2">Modulus</td><td className="p-2">a % b = 0</td></tr>
          </tbody>
        </table>
      </div>

      <p className="text-yellow-400 font-semibold mt-2">
        Note: Rust does NOT support ++ and -- operators.
      </p>

      {/* Relational Operators */}
      <h2 className="text-2xl font-bold mt-8">2. Relational Operators</h2>
      <p>Used to compare values. Always return <strong>true</strong> or <strong>false</strong>.</p>
      <p>Assume: <strong>A = 10</strong> and <strong>B = 20</strong></p>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-700">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-2">Operator</th>
              <th className="p-2">Description</th>
              <th className="p-2">Example</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-2">{">"}</td><td className="p-2">Greater than</td><td className="p-2">(A {">"} B) = false</td></tr>
            <tr><td className="p-2">{"<"}</td><td className="p-2">Less than</td><td className="p-2">(A {"<"} B) = true</td></tr>
            <tr><td className="p-2">{">="}</td><td className="p-2">Greater than or equal</td><td className="p-2">(A {">"}= B) = false</td></tr>
            <tr><td className="p-2">{"<="}</td><td className="p-2">Less than or equal</td><td className="p-2">(A {"<"}= B) = true</td></tr>
            <tr><td className="p-2">==</td><td className="p-2">Equality</td><td className="p-2">(A == B) = false</td></tr>
            <tr><td className="p-2">!=</td><td className="p-2">Not equal</td><td className="p-2">(A != B) = true</td></tr>
          </tbody>
        </table>
      </div>

      {/* Logical Operators */}
      <h2 className="text-2xl font-bold mt-8">3. Logical Operators</h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-700">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-2">Operator</th>
              <th className="p-2">Description</th>
              <th className="p-2">Example</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-2">&&</td><td className="p-2">Logical AND</td><td className="p-2">(A {">"} 10 && B {">"} 10) = false</td></tr>
            <tr><td className="p-2">||</td><td className="p-2">Logical OR</td><td className="p-2">(A {">"} 10 || B {">"} 10) = true</td></tr>
            <tr><td className="p-2">!</td><td className="p-2">Logical NOT</td><td className="p-2">!(A {">"} 10) = true</td></tr>
          </tbody>
        </table>
      </div>

      {/* Bitwise Operators */}
      <h2 className="text-2xl font-bold mt-8">4. Bitwise Operators</h2>

      <p>Assume <strong>A = 2</strong> and <strong>B = 3</strong>.</p>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-700">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-2">Operator</th>
              <th className="p-2">Description</th>
              <th className="p-2">Example</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-2">&</td><td className="p-2">Bitwise AND</td><td className="p-2">(A & B) = 2</td></tr>
            <tr><td className="p-2">|</td><td className="p-2">Bitwise OR</td><td className="p-2">(A | B) = 3</td></tr>
            <tr><td className="p-2">^</td><td className="p-2">Bitwise XOR</td><td className="p-2">(A ^ B) = 1</td></tr>
            <tr><td className="p-2">!</td><td className="p-2">Bitwise NOT</td><td className="p-2">(!B) = -4</td></tr>
            <tr><td className="p-2">{"<<"}</td><td className="p-2">Left Shift</td><td className="p-2">(A {"<<"} 1) = 4</td></tr>
            <tr><td className="p-2">{">>"}</td><td className="p-2">Right Shift</td><td className="p-2">(A {" >>"} 1) = 1</td></tr>
            <tr><td className="p-2">{">>>"}</td><td className="p-2">Right Shift with Zero</td><td className="p-2">(A {">>>"} 1) = 1</td></tr>
          </tbody>
        </table>
      </div>

    </>
  );
};

export default RustOperators;
