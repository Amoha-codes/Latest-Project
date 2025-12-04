import React from "react";

const PhpOperators: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP Operators
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        PHP operators are symbols that perform operations on variables and values.
        PHP divides operators into several categories such as arithmetic, comparison,
        logical, string operators, and more.
      </p>

      <h2 className="text-2xl font-bold">Types of PHP Operators</h2>
      <ul className="list-disc list-inside leading-relaxed space-y-1">
        <li>Arithmetic Operators</li>
        <li>Assignment Operators</li>
        <li>Comparison Operators</li>
        <li>Increment/Decrement Operators</li>
        <li>Logical Operators</li>
        <li>String Operators</li>
        <li>Array Operators</li>
        <li>Conditional Assignment Operators</li>
      </ul>

      {/* Arithmetic Operators */}
      <h2 className="text-2xl font-bold mt-10">PHP Arithmetic Operators</h2>

      <table className="w-full border border-gray-300 text-left">
        <thead>
          <tr>
            <th className="p-2 border">Operator</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Example</th>
            <th className="p-2 border">Result</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="p-2 border">+</td><td className="p-2 border">Addition</td><td className="p-2 border">$x + $y</td><td className="p-2 border">Sum of $x and $y</td></tr>
          <tr><td className="p-2 border">-</td><td className="p-2 border">Subtraction</td><td className="p-2 border">$x - $y</td><td className="p-2 border">Difference</td></tr>
          <tr><td className="p-2 border">*</td><td className="p-2 border">Multiplication</td><td className="p-2 border">$x * $y</td><td className="p-2 border">Product</td></tr>
          <tr><td className="p-2 border">/</td><td className="p-2 border">Division</td><td className="p-2 border">$x / $y</td><td className="p-2 border">Quotient</td></tr>
          <tr><td className="p-2 border">%</td><td className="p-2 border">Modulus</td><td className="p-2 border">$x % $y</td><td className="p-2 border">Remainder</td></tr>
          <tr><td className="p-2 border">**</td><td className="p-2 border">Exponentiation</td><td className="p-2 border">$x ** $y</td><td className="p-2 border">x raised to y</td></tr>
        </tbody>
      </table>

      {/* Assignment Operators */}
      <h2 className="text-2xl font-bold mt-10">PHP Assignment Operators</h2>

      <table className="w-full border border-gray-300 text-left">
        <thead >
          <tr>
            <th className="p-2 border">Assignment</th>
            <th className="p-2 border">Same As</th>
            <th className="p-2 border">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="p-2 border">x = y</td><td className="p-2 border">x = y</td><td className="p-2 border">Assigns value</td></tr>
          <tr><td className="p-2 border">x += y</td><td className="p-2 border">x = x + y</td><td className="p-2 border">Addition</td></tr>
          <tr><td className="p-2 border">x -= y</td><td className="p-2 border">x = x - y</td><td className="p-2 border">Subtraction</td></tr>
          <tr><td className="p-2 border">x *= y</td><td className="p-2 border">x = x * y</td><td className="p-2 border">Multiplication</td></tr>
          <tr><td className="p-2 border">x /= y</td><td className="p-2 border">x = x / y</td><td className="p-2 border">Division</td></tr>
          <tr><td className="p-2 border">x %= y</td><td className="p-2 border">x = x % y</td><td className="p-2 border">Modulus</td></tr>
        </tbody>
      </table>

      {/* Comparison Operators */}
      <h2 className="text-2xl font-bold mt-10">PHP Comparison Operators</h2>

      <table className="w-full border border-gray-300">
        <thead>
          <tr>
            <th className="p-2 border">Operator</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Example</th>
            <th className="p-2 border">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="p-2 border">==</td><td className="p-2 border">Equal</td><td className="p-2 border">$x == $y</td><td className="p-2 border">True if values match</td></tr>
          <tr><td className="p-2 border">===</td><td className="p-2 border">Identical</td><td className="p-2 border">$x === $y</td><td className="p-2 border">Values & types match</td></tr>
          <tr><td className="p-2 border">!=</td><td className="p-2 border">Not equal</td><td className="p-2 border">$x != $y</td><td className="p-2 border">True if not equal</td></tr>
          <tr><td className="p-2 border">&lt;&gt;</td><td className="p-2 border">Not equal</td><td className="p-2 border">$x &lt;&gt; $y</td><td className="p-2 border">True if not equal</td></tr>
          <tr><td className="p-2 border">!==</td><td className="p-2 border">Not identical</td><td className="p-2 border">$x !== $y</td><td className="p-2 border">True if different</td></tr>
          <tr><td className="p-2 border">&gt;</td><td className="p-2 border">Greater than</td><td className="p-2 border">$x &gt; $y</td><td className="p-2 border">True if x &gt; y</td></tr>
          <tr><td className="p-2 border">&lt;</td><td className="p-2 border">Less than</td><td className="p-2 border">$x &lt; $y</td><td className="p-2 border">True if x &lt; y</td></tr>
          <tr><td className="p-2 border">&gt;=</td><td className="p-2 border">Greater or equal</td><td className="p-2 border">$x &gt;= $y</td><td className="p-2 border">True if x ≥ y</td></tr>
          <tr><td className="p-2 border">&lt;=</td><td className="p-2 border">Less or equal</td><td className="p-2 border">$x &lt;= $y</td><td className="p-2 border">True if x ≤ y</td></tr>
          <tr><td className="p-2 border">&lt;=&gt;</td><td className="p-2 border">Spaceship</td><td className="p-2 border">$x &lt;=&gt; $y</td><td className="p-2 border">Returns -1, 0, 1</td></tr>
        </tbody>
      </table>

      {/* Increment/Decrement */}
      <h2 className="text-2xl font-bold mt-10">PHP Increment / Decrement Operators</h2>

      <table className="w-full border border-gray-300 text-left">
        <thead >
          <tr>
            <th className="p-2 border">Operator</th>
            <th className="p-2 border">Meaning</th>
            <th className="p-2 border">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="p-2 border">++$x</td><td className="p-2 border">Pre-increment</td><td className="p-2 border">Increment, then return</td></tr>
          <tr><td className="p-2 border">$x++</td><td className="p-2 border">Post-increment</td><td className="p-2 border">Return, then increment</td></tr>
          <tr><td className="p-2 border">--$x</td><td className="p-2 border">Pre-decrement</td><td className="p-2 border">Decrement, then return</td></tr>
          <tr><td className="p-2 border">$x--</td><td className="p-2 border">Post-decrement</td><td className="p-2 border">Return, then decrement</td></tr>
        </tbody>
      </table>

      {/* Logical Operators */}
      <h2 className="text-2xl font-bold mt-10">PHP Logical Operators</h2>

      <table className="w-full border border-gray-300 text-left">
        <thead>
          <tr>
            <th className="p-2 border">Operator</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Example</th>
            <th className="p-2 border">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="p-2 border">and</td><td className="p-2 border">And</td><td className="p-2 border">$x and $y</td><td className="p-2 border">True if both true</td></tr>
          <tr><td className="p-2 border">or</td><td className="p-2 border">Or</td><td className="p-2 border">$x or $y</td><td className="p-2 border">True if one true</td></tr>
          <tr><td className="p-2 border">xor</td><td className="p-2 border">Xor</td><td className="p-2 border">$x xor $y</td><td className="p-2 border">True if only one true</td></tr>
          <tr><td className="p-2 border">&&</td><td className="p-2 border">And</td><td className="p-2 border">$x && $y</td><td className="p-2 border">Both true</td></tr>
          <tr><td className="p-2 border">||</td><td className="p-2 border">Or</td><td className="p-2 border">$x || $y</td><td className="p-2 border">Either true</td></tr>
          <tr><td className="p-2 border">!</td><td className="p-2 border">Not</td><td className="p-2 border">!$x</td><td className="p-2 border">True if x is false</td></tr>
        </tbody>
      </table>

      {/* String Operators */}
      <h2 className="text-2xl font-bold mt-10">PHP String Operators</h2>

      <table className="w-full border border-gray-300 text-left">
        <thead>
          <tr>
            <th className="p-2 border">Operator</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Example</th>
            <th className="p-2 border">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="p-2 border">.</td><td className="p-2 border">Concatenation</td><td className="p-2 border">$txt1 . $txt2</td><td className="p-2 border">Join strings</td></tr>
          <tr><td className="p-2 border">.=</td><td className="p-2 border">Concat Assignment</td><td className="p-2 border">$txt1 .= $txt2</td><td className="p-2 border">Append to string</td></tr>
        </tbody>
      </table>

      {/* Array Operators */}
      <h2 className="text-2xl font-bold mt-10">PHP Array Operators</h2>

      <table className="w-full border border-gray-300 text-left">
        <thead>
          <tr>
            <th className="p-2 border">Operator</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Example</th>
            <th className="p-2 border">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="p-2 border">+</td><td className="p-2 border">Union</td><td className="p-2 border">$x + $y</td><td className="p-2 border">Union of arrays</td></tr>
          <tr><td className="p-2 border">==</td><td className="p-2 border">Equality</td><td className="p-2 border">$x == $y</td><td className="p-2 border">Same key/value pairs</td></tr>
          <tr><td className="p-2 border">===</td><td className="p-2 border">Identity</td><td className="p-2 border">$x === $y</td><td className="p-2 border">Same order & type</td></tr>
          <tr><td className="p-2 border">!=</td><td className="p-2 border">Inequality</td><td className="p-2 border">$x != $y</td><td className="p-2 border">Not equal</td></tr>
          <tr><td className="p-2 border">&lt;&gt;</td><td className="p-2 border">Inequality</td><td className="p-2 border">$x &lt;&gt; $y</td><td className="p-2 border">Not equal</td></tr>
          <tr><td className="p-2 border">!==</td><td className="p-2 border">Non-identity</td><td className="p-2 border">$x !== $y</td><td className="p-2 border">Not identical</td></tr>
        </tbody>
      </table>

      {/* Conditional Assignment Operators */}
      <h2 className="text-2xl font-bold mt-10">PHP Conditional Assignment Operators</h2>

      <table className="w-full border border-gray-300">
        <thead>
          <tr>
            <th className="p-2 border">Operator</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Example</th>
            <th className="p-2 border">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border">?:</td>
            <td className="p-2 border">Ternary</td>
            <td className="p-2 border">$x = cond ? val1 : val2</td>
            <td className="p-2 border">Returns val1 if true, else val2</td>
          </tr>
          <tr>
            <td className="p-2 border">??</td>
            <td className="p-2 border">Null Coalescing</td>
            <td className="p-2 border">$x = expr1 ?? expr2</td>
            <td className="p-2 border">expr1 if exists; otherwise expr2</td>
          </tr>
        </tbody>
      </table>

    </div>
  );
};

export default PhpOperators;
