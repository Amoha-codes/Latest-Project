import React from "react";

const CDataTypes: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        C - Data Types
      </h1>

      <p className="leading-relaxed">
        In C, every variable must have a specified data type. The data type tells the compiler what kind of value the variable will store.
        You also need to use the correct format specifier in <code>printf()</code> to display the variable.
      </p>

      {/* Example */}
      <h2 className="text-2xl font-bold">Example</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`// Create variables
int myNum = 5;             // Integer (whole number)
float myFloatNum = 5.99;   // Floating point number
char myLetter = 'D';       // Character

// Print variables
printf("%d\\n", myNum);
printf("%f\\n", myFloatNum);
printf("%c\\n", myLetter);`}</pre>
      </div>

      {/* Basic Data Types */}
      <h2 className="text-2xl font-bold">Basic Data Types</h2>
      <p className="leading-relaxed">
        The most commonly used basic data types in C are:
      </p>
      <table className="table-auto border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 px-4 py-2">Data Type</th>
            <th className="border border-gray-400 px-4 py-2">Size</th>
            <th className="border border-gray-400 px-4 py-2">Description</th>
            <th className="border border-gray-400 px-4 py-2">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 px-4 py-2">int</td>
            <td className="border border-gray-400 px-4 py-2">2 or 4 bytes</td>
            <td className="border border-gray-400 px-4 py-2">Stores whole numbers, without decimals</td>
            <td className="border border-gray-400 px-4 py-2">1</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">float</td>
            <td className="border border-gray-400 px-4 py-2">4 bytes</td>
            <td className="border border-gray-400 px-4 py-2">Stores fractional numbers (6-7 decimal digits)</td>
            <td className="border border-gray-400 px-4 py-2">1.99</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">double</td>
            <td className="border border-gray-400 px-4 py-2">8 bytes</td>
            <td className="border border-gray-400 px-4 py-2">Stores fractional numbers (15 decimal digits)</td>
            <td className="border border-gray-400 px-4 py-2">1.99</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">char</td>
            <td className="border border-gray-400 px-4 py-2">1 byte</td>
            <td className="border border-gray-400 px-4 py-2">Stores a single character/letter or ASCII value</td>
            <td className="border border-gray-400 px-4 py-2">'A'</td>
          </tr>
        </tbody>
      </table>

      {/* Format Specifiers */}
      <h2 className="text-2xl font-bold">Basic Format Specifiers</h2>
      <p className="leading-relaxed">
        Each data type has a corresponding format specifier to print its value:
      </p>
      <table className="table-auto border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 px-4 py-2">Format Specifier</th>
            <th className="border border-gray-400 px-4 py-2">Data Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 px-4 py-2">%d or %i</td>
            <td className="border border-gray-400 px-4 py-2">int</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">%f or %F</td>
            <td className="border border-gray-400 px-4 py-2">float</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">%lf</td>
            <td className="border border-gray-400 px-4 py-2">double</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">%c</td>
            <td className="border border-gray-400 px-4 py-2">char</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">%s</td>
            <td className="border border-gray-400 px-4 py-2">string (text)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CDataTypes;
