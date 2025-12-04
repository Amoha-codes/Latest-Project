import React from "react";

const COperators: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">C - Operators</h1>

      {/* Intro */}
      <p className="leading-relaxed">
        Operators are used to perform operations on variables and values. For
        example, the <code className="font-semibold">+</code> operator adds two
        values together:
      </p>

      {/* Example 1 */}
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>
{`int myNum = 100 + 50;`}
        </pre>
      </div>

      <p className="leading-relaxed">
        The <code className="font-semibold">+</code> operator can be used with
        values, variables, or a combination of both:
      </p>

      {/* Example 2 */}
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>
{`int sum1 = 100 + 50;        // 150 (100 + 50)
int sum2 = sum1 + 250;      // 400 (150 + 250)
int sum3 = sum2 + sum2;     // 800 (400 + 400)`}
        </pre>
      </div>

      <p className="leading-relaxed">
        C divides operators into the following groups:
      </p>

      {/* Operator Groups */}
      <ul className="list-disc pl-6 space-y-1">
        <li>Arithmetic Operators</li>
        <li>Assignment Operators</li>
        <li>Comparison Operators</li>
        <li>Logical Operators</li>
        <li>Bitwise Operators (Advanced)</li>
      </ul>
    </div>
  );
};

export default COperators;
