import React from "react";

const CLogicalOperators: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        C - Logical Operators
      </h1>

      <p className="leading-relaxed">
        Logical operators are used to test for true or false values, combining multiple conditions.
      </p>

      {/* Logical Operators Table */}
      <h2 className="text-2xl font-bold">Logical Operators</h2>
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
              <td className="p-2 border text-center">&&</td>
              <td className="p-2 border">AND</td>
              <td className="p-2 border">x &lt; 5 && x &lt; 10</td>
              <td className="p-2 border">Returns 1 if both statements are true</td>
            </tr>
            <tr>
              <td className="p-2 border text-center">||</td>
              <td className="p-2 border">OR</td>
              <td className="p-2 border">x &lt; 5 || x &lt; 4</td>
              <td className="p-2 border">Returns 1 if at least one statement is true</td>
            </tr>
            <tr>
              <td className="p-2 border text-center">!</td>
              <td className="p-2 border">NOT</td>
              <td className="p-2 border">!(x &lt; 5 && x &lt; 10)</td>
              <td className="p-2 border">Reverses the result (0 if true, 1 if false)</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Real-Life Example */}
      <h2 className="text-2xl font-bold">Real-Life Example: Login Check</h2>
      <p className="leading-relaxed">
        Logical operators are often used to check multiple conditions, e.g., login status and access rights:
      </p>

      <div className="bg-gray-100 text-black p-3 rounded-md font-mono font-mono">
        <pre>
{`#include <stdio.h>
#include <stdbool.h>

int main() {
    bool isLoggedIn = true;
    bool isAdmin = false;

    printf("Regular user: %s\\n", (isLoggedIn && !isAdmin) ? "true" : "false");
    printf("Has access: %s\\n", (isLoggedIn || isAdmin) ? "true" : "false");
    printf("Not logged in: %s\\n", (!isLoggedIn) ? "true" : "false");

    return 0;
}`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold">Result</h2>
      <div className="bg-gray-100 text-black p-4 rounded-md font-mono">
        Regular user: true <br />
        Has access: true <br />
        Not logged in: false
      </div>
    </div>
  );
};

export default CLogicalOperators;
