import React from "react";

const CDeclareMultipleVariables: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        C - Declare Multiple Variables
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        In C, you can declare multiple variables of the same type using a
        comma-separated list. This helps keep your code clean and concise.
      </p>

      {/* Example 1 */}
      <h2 className="text-2xl font-semibold">Declare Multiple Variables</h2>
      <p className="leading-relaxed">
        You can declare and assign values to several variables in one line:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`int x = 5, y = 6, z = 50;
printf("%d", x + y + z);`}
      </pre>

      {/* Example 2 */}
      <h2 className="text-2xl font-semibold">
        Assign the Same Value to Multiple Variables
      </h2>
      <p className="leading-relaxed">
        You can also assign the same value to multiple variables at once:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`int x, y, z;
x = y = z = 50;

printf("%d", x + y + z);`}
      </pre>
    </div>
  );
};

export default CDeclareMultipleVariables;
