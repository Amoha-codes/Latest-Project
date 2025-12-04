import React from "react";

const PhpBreakStatement: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP Break Statement
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <strong>break</strong> statement in PHP is used to immediately stop the 
        execution of a loop. It works with all loop types: <code>for</code>, 
        <code>while</code>, <code>do...while</code>, and <code>foreach</code>.
      </p>

      {/* Break in For Loop */}
      <h2 className="text-2xl font-bold mt-10">Break in for Loop</h2>

      <p className="leading-relaxed">
        Use <code>break</code> to jump out of a <strong>for loop</strong> before it finishes.
      </p>

      <h3 className="text-xl font-semibold">Example</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`for ($x = 0; $x < 10; $x++) {
  if ($x == 4) {
    break;
  }
  echo "The number is: $x <br>";
}`}
      </pre>

      {/* Break in While Loop */}
      <h2 className="text-2xl font-bold mt-10">Break in while Loop</h2>

      <p className="leading-relaxed">
        You can use <code>break</code> inside a <strong>while loop</strong> to stop it early.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$x = 0;

while ($x < 10) {
  if ($x == 4) {
    break;
  }
  echo "The number is: $x <br>";
  $x++;
}`}
      </pre>

      {/* Break in Do While Loop */}
      <h2 className="text-2xl font-bold mt-10">Break in do...while Loop</h2>

      <p className="leading-relaxed">
        The <code>break</code> statement works the same way inside a 
        <strong> do...while loop</strong>.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$i = 1;

do {
  if ($i == 3) break;
  echo $i;
  $i++;
} while ($i < 6);`}
      </pre>

      {/* Break in Foreach Loop */}
      <h2 className="text-2xl font-bold mt-10">Break in foreach Loop</h2>

      <p className="leading-relaxed">
        Use <code>break</code> to stop looping through an array when a match is found.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$colors = array("red", "green", "blue", "yellow");

foreach ($colors as $x) {
  if ($x == "blue") break;
  echo "$x <br>";
}`}
      </pre>

    </div>
  );
};

export default PhpBreakStatement;
