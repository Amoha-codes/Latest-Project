import React from "react";

const CComparisonOperators: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        C - Comparison Operators
      </h1>

      <p className="leading-relaxed">
        Comparison operators are used to compare two values or variables. They
        return either <strong>1 (true)</strong> or <strong>0 (false)</strong>.
        These values are known as Boolean values.
      </p>

      {/* Example */}
      <h2 className="text-2xl font-bold">Example</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>
{`int x = 5;
int y = 3;
printf("%d", x > y); // returns 1 (true)`}
        </pre>
      </div>

      {/* Table */}
      <h2 className="text-2xl font-bold">Comparison Operators</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border">Operator</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Example</th>
              <th className="p-2 border">Description</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-2 border text-center">==</td>
              <td className="p-2 border">Equal to</td>
              <td className="p-2 border">x == y</td>
              <td className="p-2 border">Returns 1 if values are equal</td>
            </tr>

            <tr>
              <td className="p-2 border text-center">!=</td>
              <td className="p-2 border">Not equal</td>
              <td className="p-2 border">x != y</td>
              <td className="p-2 border">Returns 1 if values are not equal</td>
            </tr>

            <tr>
              <td className="p-2 border text-center">&gt;</td>
              <td className="p-2 border">Greater than</td>
              <td className="p-2 border">x &gt; y</td>
              <td className="p-2 border">
                Returns 1 if first value is greater than second value
              </td>
            </tr>

            <tr>
              <td className="p-2 border text-center">&lt;</td>
              <td className="p-2 border">Less than</td>
              <td className="p-2 border">x &lt; y</td>
              <td className="p-2 border">
                Returns 1 if first value is less than second value
              </td>
            </tr>

            <tr>
              <td className="p-2 border text-center">&gt;=</td>
              <td className="p-2 border">Greater than or equal to</td>
              <td className="p-2 border">x &gt;= y</td>
              <td className="p-2 border">
                Returns 1 if first value is greater than or equal to the second
              </td>
            </tr>

            <tr>
              <td className="p-2 border text-center">&lt;=</td>
              <td className="p-2 border">Less than or equal to</td>
              <td className="p-2 border">x &lt;= y</td>
              <td className="p-2 border">
                Returns 1 if first value is less than or equal to the second
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Real-life examples */}
      <h2 className="text-2xl font-bold">Real-Life Examples</h2>

      {/* Example 1 */}
      <p className="leading-relaxed">
        Comparison operators are often used to check conditions, such as whether
        someone is old enough to vote:
      </p>

      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>
{`int age = 18;

printf("%d\\n", age >= 18); // 1 (true)
printf("%d\\n", age < 18);  // 0 (false)`}
        </pre>
      </div>

      {/* Example 2 */}
      <p className="leading-relaxed">
        Another example is checking if a password is long enough:
      </p>

      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>
{`int passwordLength = 5;

printf("%d\\n", passwordLength >= 8); // 0 (false)
printf("%d\\n", passwordLength < 8);  // 1 (true)`}
        </pre>
      </div>
    </div>
  );
};

export default CComparisonOperators;
