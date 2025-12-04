import React from "react";

const PhpIfStatements: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP if Statements
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        Conditional statements allow you to perform different actions based on
        different conditions. They are one of the most important concepts in any
        programming language.
      </p>

      <h2 className="text-2xl font-bold">PHP Conditional Statements</h2>

      <p className="leading-relaxed">
        PHP supports several types of conditional statements:
      </p>

      <ul className="list-disc list-inside space-y-1 leading-relaxed">
        <li><strong>if</strong> — executes code if a condition is true</li>
        <li><strong>if...else</strong> — executes one block if true, another if false</li>
        <li><strong>if...elseif...else</strong> — runs multiple condition checks</li>
        <li><strong>switch</strong> — selects one of many blocks of code</li>
      </ul>

      {/* if statement */}
      <h2 className="text-2xl font-bold mt-10">PHP - The if Statement</h2>

      <p className="leading-relaxed">
        The <strong>if statement</strong> executes a block of code only if the condition is true.
      </p>

      <h3 className="text-xl font-semibold mt-4">Syntax</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`if (condition) {
  // code to be executed if condition is true;
}`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Example</h3>
      <p className="leading-relaxed mb-2">
        Output "Have a good day!" if 5 is larger than 3:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`if (5 > 3) {
  echo "Have a good day!";
}`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Example with Variables</h3>

      <p className="leading-relaxed mb-2">
        Output "Have a good day!" if <code>$t</code> is less than 20:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$t = 14;

if ($t < 20) {
  echo "Have a good day!";
}`}
      </pre>
    </div>
  );
};

export default PhpIfStatements;
