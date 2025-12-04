import React from "react";

const CAssignmentOperators: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        C - Assignment Operators
      </h1>

      <p className="leading-relaxed">
        Assignment operators are used to assign values to variables. The basic
        assignment operator <code>=</code> assigns a value to a variable.
      </p>

      {/* Example 1 */}
      <h2 className="text-2xl font-bold">Example</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`int x = 10;`}</pre>
      </div>

      <p className="leading-relaxed">
        The <code>+=</code> operator adds a value to an existing variable.
      </p>

      {/* Example 2 */}
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`int x = 10;
x += 5;`}</pre>
      </div>

      {/* Assignment Operators Table */}
      <h2 className="text-2xl font-bold">List of Assignment Operators</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border">Operator</th>
              <th className="p-2 border">Example</th>
              <th className="p-2 border">Same As</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-2 border text-center">=</td>
              <td className="p-2 border">x = 5</td>
              <td className="p-2 border">x = 5</td>
            </tr>
            <tr>
              <td className="p-2 border text-center">+=</td>
              <td className="p-2 border">x += 3</td>
              <td className="p-2 border">x = x + 3</td>
            </tr>
            <tr>
              <td className="p-2 border text-center">-=</td>
              <td className="p-2 border">x -= 3</td>
              <td className="p-2 border">x = x - 3</td>
            </tr>
            <tr>
              <td className="p-2 border text-center">*=</td>
              <td className="p-2 border">x *= 3</td>
              <td className="p-2 border">x = x * 3</td>
            </tr>
            <tr>
              <td className="p-2 border text-center">/=</td>
              <td className="p-2 border">x /= 3</td>
              <td className="p-2 border">x = x / 3</td>
            </tr>
            <tr>
              <td className="p-2 border text-center">%=</td>
              <td className="p-2 border">x %= 3</td>
              <td className="p-2 border">x = x % 3</td>
            </tr>
            <tr>
              <td className="p-2 border text-center">&=</td>
              <td className="p-2 border">x &= 3</td>
              <td className="p-2 border">x = x & 3</td>
            </tr>
            <tr>
              <td className="p-2 border text-center">|=</td>
              <td className="p-2 border">x |= 3</td>
              <td className="p-2 border">x = x | 3</td>
            </tr>
            <tr>
              <td className="p-2 border text-center">^=</td>
              <td className="p-2 border">x ^= 3</td>
              <td className="p-2 border">x = x ^ 3</td>
            </tr>
         
            <tr>
              <td className="p-2 border text-center">&lt;&lt;=</td>
              <td className="p-2 border">x &lt;&lt;= 3</td>
              <td className="p-2 border">x = x &lt;&lt; 3</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="leading-relaxed">
        Most assignment operators are just shorter forms of writing expressions.
        For example, <code>x += 5</code> is the same as <code>x = x + 5</code>.
      </p>

      {/* Real Life Example */}
      <h2 className="text-2xl font-bold">Real-Life Example: Tracking Savings</h2>

      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`int savings = 100;
savings += 50; // add 50 to savings

printf("Total savings: %d\\n", savings);`}</pre>
      </div>
    </div>
  );
};

export default CAssignmentOperators;
