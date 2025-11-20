import React from "react";

const KotlinOperators: React.FC = () => (
  <div className="mt-20 px-6 py-10 bg-white rounded-2xl shadow-lg max-w-4xl mx-auto">
    <h1 className="text-4xl font-extrabold text-gray-900 border-b-2 pb-3">
      Kotlin Operators
    </h1>

    <p className="text-lg text-gray-700 leading-relaxed mt-4">
      Operators are used to perform operations on variables and values. The
      values are called <strong>operands</strong>, while the operation to be
      performed is defined by an <strong>operator</strong>.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full bg-gray-50 rounded-lg text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">Operand</th>
            <th className="p-2">Operator</th>
            <th className="p-2">Operand</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">100</td>
            <td className="p-2">+</td>
            <td className="p-2">50</td>
          </tr>
        </tbody>
      </table>
    </div>

    <pre className="bg-gray-100 p-4 rounded-lg mt-4 text-sm">
{`var x = 100 + 50`}
    </pre>

    <p className="text-gray-700 mt-4">
      The <code>+</code> operator can add two values, a variable and a value, or
      two variables:
    </p>

    <pre className="bg-gray-100 p-4 rounded-lg mt-2 text-sm">
{`var sum1 = 100 + 50       // 150 (100 + 50)
var sum2 = sum1 + 250     // 400 (150 + 250)
var sum3 = sum2 + sum2    // 800 (400 + 400)`}
    </pre>

    <h2 className="text-2xl font-bold text-gray-900 mt-8">
      Types of Operators in Kotlin
    </h2>
    <ul className="list-disc ml-8 mt-3 text-gray-700 space-y-2">
      <li>Arithmetic operators</li>
      <li>Assignment operators</li>
      <li>Comparison operators</li>
      <li>Logical operators</li>
    </ul>

    {/* Arithmetic Operators */}
    <h3 className="text-xl font-semibold mt-8 text-gray-900">
      Arithmetic Operators
    </h3>
    <p className="text-gray-700 mt-2">
      Arithmetic operators are used to perform basic mathematical operations.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full bg-gray-50 rounded-lg text-left text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">Operator</th>
            <th className="p-2">Name</th>
            <th className="p-2">Description</th>
            <th className="p-2">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="p-2">+</td><td>Addition</td><td>Adds two values</td><td>x + y</td></tr>
          <tr><td className="p-2">-</td><td>Subtraction</td><td>Subtracts one from another</td><td>x - y</td></tr>
          <tr><td className="p-2">*</td><td>Multiplication</td><td>Multiplies two values</td><td>x * y</td></tr>
          <tr><td className="p-2">/</td><td>Division</td><td>Divides one by another</td><td>x / y</td></tr>
          <tr><td className="p-2">%</td><td>Modulus</td><td>Returns remainder</td><td>x % y</td></tr>
          <tr><td className="p-2">++</td><td>Increment</td><td>Increases by 1</td><td>++x</td></tr>
          <tr><td className="p-2">--</td><td>Decrement</td><td>Decreases by 1</td><td>--x</td></tr>
        </tbody>
      </table>
    </div>

    {/* Assignment Operators */}
    <h3 className="text-xl font-semibold mt-10 text-gray-900">
      Kotlin Assignment Operators
    </h3>
    <p className="text-gray-700 mt-2">
      Assignment operators are used to assign values to variables.
    </p>

    <pre className="bg-gray-100 p-4 rounded-lg mt-3 text-sm">
{`var x = 10`}
    </pre>

    <p className="text-gray-700 mt-4">
      The addition assignment operator (<code>+=</code>) adds a value to a
      variable:
    </p>

    <pre className="bg-gray-100 p-4 rounded-lg mt-2 text-sm">
{`var x = 10
x += 5`}
    </pre>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full bg-gray-50 rounded-lg text-left text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">Operator</th>
            <th className="p-2">Example</th>
            <th className="p-2">Same As</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="p-2">=</td><td>x = 5</td><td>x = 5</td></tr>
          <tr><td className="p-2">+=</td><td>x += 3</td><td>x = x + 3</td></tr>
          <tr><td className="p-2">-=</td><td>x -= 3</td><td>x = x - 3</td></tr>
          <tr><td className="p-2">*=</td><td>x *= 3</td><td>x = x * 3</td></tr>
          <tr><td className="p-2">/=</td><td>x /= 3</td><td>x = x / 3</td></tr>
          <tr><td className="p-2">%=</td><td>x %= 3</td><td>x = x % 3</td></tr>
        </tbody>
      </table>
    </div>

    {/* Comparison Operators */}
    <h3 className="text-xl font-semibold mt-10 text-gray-900">
      Kotlin Comparison Operators
    </h3>
    <p className="text-gray-700 mt-2">
      Comparison operators compare two values and return a{" "}
      <code>Boolean</code> (true or false).
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full bg-gray-50 rounded-lg text-left text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">Operator</th>
            <th className="p-2">Name</th>
            <th className="p-2">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="p-2">==</td><td>Equal to</td><td>x == y</td></tr>
          <tr><td className="p-2">!=</td><td>Not equal</td><td>x != y</td></tr>
          <tr><td className="p-2">&gt;</td><td>Greater than</td><td>x &gt; y</td></tr>
          <tr><td className="p-2">&lt;</td><td>Less than</td><td>x &lt; y</td></tr>
          <tr><td className="p-2">&gt;=</td><td>Greater than or equal to</td><td>x &gt;= y</td></tr>
          <tr><td className="p-2">&lt;=</td><td>Less than or equal to</td><td>x &lt;= y</td></tr>
        </tbody>
      </table>
    </div>

    {/* Logical Operators */}
    <h3 className="text-xl font-semibold mt-10 text-gray-900">
      Kotlin Logical Operators
    </h3>
    <p className="text-gray-700 mt-2">
      Logical operators determine the logic between variables or expressions.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full bg-gray-50 rounded-lg text-left text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">Operator</th>
            <th className="p-2">Name</th>
            <th className="p-2">Description</th>
            <th className="p-2">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">&amp;&amp;</td>
            <td>Logical AND</td>
            <td>Returns true if both statements are true</td>
            <td>x &lt; 5 &amp;&amp; x &lt; 10</td>
          </tr>
          <tr>
            <td className="p-2">||</td>
            <td>Logical OR</td>
            <td>Returns true if one statement is true</td>
            <td>x &lt; 5 || x &lt; 4</td>
          </tr>
          <tr>
            <td className="p-2">!</td>
            <td>Logical NOT</td>
            <td>Reverses the result</td>
            <td>!(x &lt; 5 &amp;&amp; x &lt; 10)</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default KotlinOperators;
