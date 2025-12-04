import React from "react";

const PhpForLoop: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP for Loop
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <strong>for loop</strong> in PHP is used when you know exactly how many times 
        the code block should run. It is commonly used for counting iterations.
      </p>

      {/* Syntax */}
      <h2 className="text-2xl font-bold mt-10">Syntax</h2>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`for (expression1; expression2; expression3) {
  // code block
}`}
      </pre>

      <p className="leading-relaxed">
        Here's how a <strong>for loop</strong> works:
      </p>

      <ul className="list-disc list-inside space-y-1 leading-relaxed">
        <li><strong>expression1</strong> runs once at the beginning (initialization).</li>
        <li><strong>expression2</strong> runs before every loop iteration (condition).</li>
        <li><strong>expression3</strong> runs after each loop iteration (increment/decrement).</li>
      </ul>

      {/* Basic Example */}
      <h2 className="text-2xl font-bold mt-10">Basic Example</h2>

      <p className="leading-relaxed">
        This example prints numbers from 0 to 10:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`for ($x = 0; $x <= 10; $x++) {
  echo "The number is: $x <br>";
}`}
      </pre>

      {/* break */}
      <h2 className="text-2xl font-bold mt-10">The break Statement</h2>

      <p className="leading-relaxed">
        Use <code>break</code> to exit the loop even if the condition is still true.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`for ($x = 0; $x <= 10; $x++) {
  if ($x == 3) break;
  echo "The number is: $x <br>";
}`}
      </pre>

      {/* continue */}
      <h2 className="text-2xl font-bold mt-10">The continue Statement</h2>

      <p className="leading-relaxed">
        Use <code>continue</code> to skip the current iteration and move to the next one.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`for ($x = 0; $x <= 10; $x++) {
  if ($x == 3) continue;
  echo "The number is: $x <br>";
}`}
      </pre>

      {/* Count by 10 */}
      <h2 className="text-2xl font-bold mt-10">Step Counting</h2>

      <p className="leading-relaxed">
        You can increment by any number.  
        This example counts to 100 in steps of 10:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`for ($x = 0; $x <= 100; $x += 10) {
  echo "The number is: $x <br>";
}`}
      </pre>

    </div>
  );
};

export default PhpForLoop;
