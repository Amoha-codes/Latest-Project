import React from "react";

const CArithmeticOperators: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        C - Arithmetic Operators
      </h1>

      <p className="leading-relaxed">
        Arithmetic operators are used to perform common mathematical
        operations in C.
      </p>

      {/* Operators Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border">Operator</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Description</th>
              <th className="p-2 border">Example</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-2 border text-center">+</td>
              <td className="p-2 border">Addition</td>
              <td className="p-2 border">Adds two values</td>
              <td className="p-2 border">x + y</td>
            </tr>

            <tr>
              <td className="p-2 border text-center">-</td>
              <td className="p-2 border">Subtraction</td>
              <td className="p-2 border">Subtracts two values</td>
              <td className="p-2 border">x - y</td>
            </tr>

            <tr>
              <td className="p-2 border text-center">*</td>
              <td className="p-2 border">Multiplication</td>
              <td className="p-2 border">Multiplies two values</td>
              <td className="p-2 border">x * y</td>
            </tr>

            <tr>
              <td className="p-2 border text-center">/</td>
              <td className="p-2 border">Division</td>
              <td className="p-2 border">Divides two values</td>
              <td className="p-2 border">x / y</td>
            </tr>

            <tr>
              <td className="p-2 border text-center">%</td>
              <td className="p-2 border">Modulus</td>
              <td className="p-2 border">Returns remainder</td>
              <td className="p-2 border">x % y</td>
            </tr>

            <tr>
              <td className="p-2 border text-center">++</td>
              <td className="p-2 border">Increment</td>
              <td className="p-2 border">Increases value by 1</td>
              <td className="p-2 border">++x</td>
            </tr>

            <tr>
              <td className="p-2 border text-center">--</td>
              <td className="p-2 border">Decrement</td>
              <td className="p-2 border">Decreases value by 1</td>
              <td className="p-2 border">--x</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Example 1 */}
      <h2 className="text-2xl font-bold">Example</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>
{`int x = 10;
int y = 3;

printf("%d\\n", x + y); // 13
printf("%d\\n", x - y); // 7
printf("%d\\n", x * y); // 30
printf("%d\\n", x / y); // 3
printf("%d\\n", x % y); // 1

int z = 5;
++z;
printf("%d\\n", z); // 6
--z;
printf("%d\\n", z); // 5`}
        </pre>
      </div>

      {/* Integer vs Decimal Division */}
      <p className="leading-relaxed">
        Note: When dividing two integers, the result is also an integer. To get
        a decimal result, use <code>float</code> or <code>double</code>.
      </p>

      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>
{`int a = 10;
int b = 3;
printf("%d\\n", a / b); // 3 (integer division)

double c = 10.0;
double d = 3.0;
printf("%f\\n", c / d); // 3.333...`}
        </pre>
      </div>

      {/* Increment & Decrement */}
      <h2 className="text-2xl font-bold">Incrementing and Decrementing</h2>

      <p className="leading-relaxed">
        The <code>++</code> operator increases a value by 1, and the{" "}
        <code>--</code> operator decreases it by 1.
      </p>

      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>
{`int x = 5;

++x;
printf("%d\\n", x); // 6`}
        </pre>
      </div>

      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>
{`int x = 5;

--x;
printf("%d\\n", x); // 4`}
        </pre>
      </div>

      {/* Combined Example */}
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>
{`int x = 5;

++x; // x becomes 6
--x; // x becomes 5

printf("%d\\n", x); // 5`}
        </pre>
      </div>

      {/* Real Life Example */}
      <h2 className="text-2xl font-bold">Real Life Example: Counting People</h2>

      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>
{`int peopleInRoom = 0;

// 3 people enter
peopleInRoom++;
peopleInRoom++;
peopleInRoom++;

printf("%d\\n", peopleInRoom); // 3

// 1 person leaves
peopleInRoom--;

printf("%d\\n", peopleInRoom); // 2`}
        </pre>
      </div>
    </div>
  );
};

export default CArithmeticOperators;
