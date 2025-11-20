import React from "react";

const GoLogicalOperators: React.FC = () => (
  <div className="mt-20 px-6">
    {/* Heading */}
    <h1 className="text-4xl font-extrabold text-gray-900 border-b-2 pb-2">
      Go Logical Operators
    </h1>

    {/* Intro Paragraph */}
    <p className="text-lg text-gray-700 mt-4 leading-relaxed">
      Logical operators in Go are used to determine the logic between variables or expressions.
      These operators return a boolean value — either <code>true</code> or <code>false</code>.
    </p>

    {/* Subheading */}
    <h2 className="text-2xl font-bold text-gray-800 mt-6">Logical Operators</h2>

    {/* Table */}
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left text-gray-800">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 border">Operator</th>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Description</th>
            <th className="py-2 px-4 border">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border text-center">&amp;&amp;</td>
            <td className="py-2 px-4 border">Logical AND</td>
            <td className="py-2 px-4 border">
              Returns <code>true</code> if both statements are true.
            </td>
            <td className="py-2 px-4 border">x &lt; 5 &amp;&amp; x &lt; 10</td>
          </tr>

          <tr className="bg-gray-50">
            <td className="py-2 px-4 border text-center">||</td>
            <td className="py-2 px-4 border">Logical OR</td>
            <td className="py-2 px-4 border">
              Returns <code>true</code> if one of the statements is true.
            </td>
            <td className="py-2 px-4 border">x &lt; 5 || x &lt; 4</td>
          </tr>

          <tr>
            <td className="py-2 px-4 border text-center">!</td>
            <td className="py-2 px-4 border">Logical NOT</td>
            <td className="py-2 px-4 border">
              Reverses the result; returns <code>false</code> if the result is true.
            </td>
            <td className="py-2 px-4 border">!(x &lt; 5 &amp;&amp; x &lt; 10)</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default GoLogicalOperators;
