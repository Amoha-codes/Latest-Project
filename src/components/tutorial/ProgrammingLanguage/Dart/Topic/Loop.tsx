import React from "react";

const DartLoops: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        Dart Programming – Loops
      </h1>

      <p className="leading-relaxed">
        Loops allow you to execute a block of code repeatedly. Each repetition
        of the loop is called an <b>iteration</b>.
      </p>

      <h2 className="text-2xl font-bold border-b pb-1">
        Classification of Loops
      </h2>
      <p className="leading-relaxed">
        Dart loops fall under two categories:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li><b>Definite Loops</b> – Number of iterations is fixed</li>
        <li><b>Indefinite Loops</b> – Number of iterations is unknown</li>
      </ul>

      {/* Definite loops */}
      <h2 className="text-2xl font-bold border-b pb-1">Definite Loops</h2>
      <table className="w-full border">
        <tbody>
          <tr>
            <td className="p-2 border w-40">for loop</td>
            <td className="p-2 border">
              Executes a block of code a fixed number of times.
            </td>
          </tr>
          <tr>
            <td className="p-2 border w-40">for…in loop</td>
            <td className="p-2 border">
              Used to iterate through values in a collection.
            </td>
          </tr>
        </tbody>
      </table>

      {/* Indefinite loops */}
      <h2 className="text-2xl font-bold border-b pb-1">Indefinite Loops</h2>
      <table className="w-full border">
        <tbody>
          <tr>
            <td className="p-2 border w-40">while loop</td>
            <td className="p-2 border">
              Repeats while the condition is true. Condition checked first.
            </td>
          </tr>
          <tr>
            <td className="p-2 border w-40">do…while loop</td>
            <td className="p-2 border">
              Executes the code once before checking the condition.
            </td>
          </tr>
        </tbody>
      </table>

      {/* Control Statements */}
      <h2 className="text-2xl font-bold border-b pb-1">
        Loop Control Statements
      </h2>
      <table className="w-full border">
        <tbody>
          <tr>
            <td className="p-2 border w-40">break</td>
            <td className="p-2 border">
              Immediately exits the loop.
            </td>
          </tr>
          <tr>
            <td className="p-2 border w-40">continue</td>
            <td className="p-2 border">
              Skips the current iteration and jumps to the next.
            </td>
          </tr>
        </tbody>
      </table>

      {/* Labels */}
      <h2 className="text-2xl font-bold border-b pb-1">
        Using Labels in Loops
      </h2>
      <p className="leading-relaxed">
        Labels allow you to control nested loops more precisely using
        <b> break </b> and <b>continue</b>.
      </p>

      <ul className="list-disc pl-6 space-y-1">
        <li>A label is an identifier followed by a colon (:)</li>
        <li>No line break allowed between label and loop</li>
        <li>No statements between label and loop</li>
      </ul>

      {/* Example 1 */}
      <h2 className="text-2xl font-bold border-b pb-1">Example: Label with break</h2>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`void main() {
  outerloop: // Label

  for (var i = 0; i < 5; i++) {
    print("Outerloop: \$i");

    innerloop:
    for (var j = 0; j < 5; j++) {
      if (j > 3) break; 
      if (i == 2) break innerloop;
      if (i == 4) break outerloop;

      print("Innerloop: \$j");
    }
  }
}`}
      </pre>

      {/* Example 2 */}
      <h2 className="text-2xl font-bold border-b pb-1">Example: Label with continue</h2>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`void main() {
  outerloop: 

  for (var i = 0; i < 3; i++) {
    print("Outerloop: \$i");

    for (var j = 0; j < 5; j++) {
      if (j == 3) {
        continue outerloop;
      }
      print("Innerloop: \$j");
    }
  }
}`}
      </pre>
    </div>
  );
};

export default DartLoops;
