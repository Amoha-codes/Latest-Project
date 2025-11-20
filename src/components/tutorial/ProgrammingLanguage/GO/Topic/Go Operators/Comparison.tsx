import React from "react";

const GoComparisonOperators: React.FC = () => (
  <div className="mt-20 px-6">
    {/* Main Heading */}
    <h1 className="text-4xl font-extrabold text-gray-900 border-b-2 pb-2">
      Go Comparison Operators
    </h1>

    {/* Intro Paragraph */}
    <p className="text-lg text-gray-700 mt-4 leading-relaxed">
      Comparison operators are used to compare two values in Go. 
      These operators return a boolean value — either <code>true</code> (1) or <code>false</code> (0).
    </p>

    {/* Example Section */}
    <h2 className="text-2xl font-bold text-gray-800 mt-6">Example</h2>
    <p className="text-gray-700 mt-2">
      In this example, the greater than (<code>&gt;</code>) operator is used to check if 5 is greater than 3:
    </p>

    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-2 overflow-x-auto">
{`package main
import ("fmt")

func main() {
  var x = 5
  var y = 3
  fmt.Println(x > y) // returns true because 5 is greater than 3
}`}
    </pre>

    {/* Table Section */}
    <h2 className="text-2xl font-bold text-gray-800 mt-6">
      List of Comparison Operators
    </h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left text-gray-800">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 border">Operator</th>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border text-center">==</td>
            <td className="py-2 px-4 border">Equal to</td>
            <td className="py-2 px-4 border">x == y</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="py-2 px-4 border text-center">!=</td>
            <td className="py-2 px-4 border">Not equal</td>
            <td className="py-2 px-4 border">x != y</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border text-center">&gt;</td>
            <td className="py-2 px-4 border">Greater than</td>
            <td className="py-2 px-4 border">x &gt; y</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="py-2 px-4 border text-center">&lt;</td>
            <td className="py-2 px-4 border">Less than</td>
            <td className="py-2 px-4 border">x &lt; y</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border text-center">&gt;=</td>
            <td className="py-2 px-4 border">Greater than or equal to</td>
            <td className="py-2 px-4 border">x &gt;= y</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="py-2 px-4 border text-center">&lt;=</td>
            <td className="py-2 px-4 border">Less than or equal to</td>
            <td className="py-2 px-4 border">x &lt;= y</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default GoComparisonOperators;
