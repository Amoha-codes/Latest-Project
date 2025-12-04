import React from "react";

const PhpIfElse: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP if...else Statements
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <strong>if...else</strong> statement allows you to run one block of code
        when a condition is true, and a different block when the condition is false.
      </p>

      {/* Basic if...else */}
      <h2 className="text-2xl font-bold mt-10">PHP - The if...else Statement</h2>

      <p className="leading-relaxed">
        The <code>if...else</code> statement executes code based on whether a condition
        evaluates to true or false.
      </p>

      <h3 className="text-xl font-semibold">Syntax</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`if (condition) {
  // code to be executed if condition is true;
} else {
  // code to be executed if condition is false;
}`}
      </pre>

      {/* Example 1 */}
      <h3 className="text-xl font-semibold">Example</h3>
      <p className="leading-relaxed">
        Output "Have a good day!" if the current time is less than 20, otherwise
        output "Have a good night!":
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$t = date("H");

if ($t < "20") {
  echo "Have a good day!";
} else {
  echo "Have a good night!";
}`}
      </pre>

      {/* if...elseif...else */}
      <h2 className="text-2xl font-bold mt-10">PHP - The if...elseif...else Statement</h2>

      <p className="leading-relaxed">
        The <strong>if...elseif...else</strong> statement allows you to test multiple
        conditions and execute different blocks of code depending on which
        condition evaluates to true.
      </p>

      <h3 className="text-xl font-semibold">Syntax</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`if (condition) {
  // code to be executed if this condition is true;
} elseif (condition) {
  // code to be executed if first condition is false and this condition is true;
} else {
  // code to be executed if all conditions are false;
}`}
      </pre>

      {/* Example 2 */}
      <h3 className="text-xl font-semibold">Example</h3>

      <p className="leading-relaxed">
        Output a greeting depending on the current time:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$t = date("H");

if ($t < "10") {
  echo "Have a good morning!";
} elseif ($t < "20") {
  echo "Have a good day!";
} else {
  echo "Have a good night!";
}`}
      </pre>

    </div>
  );
};

export default PhpIfElse;
