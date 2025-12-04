import React from "react";

const DartNumbers: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        Dart Programming – Numbers
      </h1>

      <p>
        Dart numbers can be classified into the following types:
      </p>

      <ul className="list-disc pl-6 space-y-1">
        <li>
          <strong>int</strong> – Integer of arbitrary size, used to represent whole numbers.
        </li>
        <li>
          <strong>double</strong> – 64-bit floating-point numbers, used for fractional values.
        </li>
      </ul>

      <p>
        Both <strong>int</strong> and <strong>double</strong> inherit from the <strong>num</strong> type, which provides various numeric operations through the <strong>dart:core</strong> library.
      </p>

      <h2 className="text-2xl font-bold">Syntax</h2>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`int var_name;      // declares an integer variable 
double var_name;   // declares a double variable`}
      </pre>

      <h2 className="text-2xl font-bold">Example</h2>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`void main() {
   int num1 = 10;
   double num2 = 10.50;

   print(num1);
   print(num2);
}`}
      </pre>

      <p><strong>Output:</strong></p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`10
10.5`}
      </pre>

      <p>
        Note: Dart throws an exception if you assign decimal values to an integer variable.
      </p>

      <h2 className="text-2xl font-bold">Parsing Numbers</h2>

      <p>
        The <strong>num.parse()</strong> function is used to convert a numeric string into a number.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`void main() { 
   print(num.parse('12')); 
   print(num.parse('10.91')); 
}`}
      </pre>

      <p><strong>Output:</strong></p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`12
10.91`}
      </pre>

      <p>
        Passing non-numeric values causes a FormatException:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`void main() { 
   print(num.parse('12A')); 
   print(num.parse('AAAA')); 
}`}
      </pre>

      <h2 className="text-2xl font-bold">Number Properties</h2>

      <table className="w-full border mt-4">
        <thead className="border-b">
          <tr>
            <th className="p-2 font-semibold text-left">Property</th>
            <th className="p-2 font-semibold text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["hashCode", "Returns a hash code for the number."],
            ["isFinite", "True if the number is finite."],
            ["isInfinite", "True if the number is infinite."],
            ["isNaN", "True if the number is Not-a-Number."],
            ["isNegative", "True if the number is negative."],
            ["sign", "Returns -1, 0, or 1 based on the value."],
            ["isEven", "Returns true if the number is even."],
            ["isOdd", "Returns true if the number is odd."]
          ].map(([prop, desc], i) => (
            <tr key={i} className="border-b">
              <td className="p-2 font-medium">{prop}</td>
              <td className="p-2">{desc}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="text-2xl font-bold">Number Methods</h2>

      <table className="w-full border mt-4">
        <thead className="border-b">
          <tr>
            <th className="p-2 font-semibold text-left">Method</th>
            <th className="p-2 font-semibold text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["abs", "Returns the absolute value."],
            ["ceil", "Returns the least integer >= number."],
            ["compareTo", "Compares this number to another."],
            ["floor", "Returns the greatest integer <= number."],
            ["remainder", "Returns the truncated remainder."],
            ["round", "Returns the closest integer."],
            ["toDouble", "Converts to double."],
            ["toInt", "Converts to integer."],
            ["toString", "Converts to string."],
            ["truncate", "Removes fractional digits."]
          ].map(([method, desc], i) => (
            <tr key={i} className="border-b">
              <td className="p-2 font-medium">{method}</td>
              <td className="p-2">{desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DartNumbers;
