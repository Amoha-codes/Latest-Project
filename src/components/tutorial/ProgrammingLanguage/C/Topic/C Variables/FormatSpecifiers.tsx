import React from "react";

const CFormatSpecifiers: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        C - Format Specifiers
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        Format specifiers are used with the <code>printf()</code> function to
        tell the compiler what type of data you are trying to print.
        They act as placeholders for variable values.
      </p>

      <p className="leading-relaxed">
        A format specifier starts with <code>%</code> followed by a character.
        For example, to print an <code>int</code>, you use <code>%d</code>.
      </p>

      {/* Example 1 */}
      <h2 className="text-2xl font-semibold">Example: Print an Integer</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`int myNum = 15;
printf("%d", myNum);  // Outputs 15`}
      </pre>

      {/* Example 2 */}
      <h2 className="text-2xl font-semibold">Print Different Data Types</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`// Create variables
int myNum = 15;            // Integer
float myFloatNum = 5.99;   // Floating point number
char myLetter = 'D';       // Character

// Print variables
printf("%d\\n", myNum);
printf("%f\\n", myFloatNum);
printf("%c\\n", myLetter);`}
      </pre>

      {/* Example 3 */}
      <h2 className="text-2xl font-semibold">Combine Text and Variables</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`int myNum = 15;
printf("My favorite number is: %d", myNum);`}
      </pre>

      {/* Example 4 */}
      <h2 className="text-2xl font-semibold">
        Print Multiple Variables Together
      </h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`int myNum = 15;
char myLetter = 'D';

printf("My number is %d and my letter is %c", myNum, myLetter);`}
      </pre>

      {/* Example 5 */}
      <h2 className="text-2xl font-semibold">Print Values Without Variables</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`printf("My favorite number is: %d", 15);
printf("My favorite letter is: %c", 'D');`}
      </pre>
    </div>
  );
};

export default CFormatSpecifiers;
