import React from "react";

const PhpContinueStatement: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP Continue Statement
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <strong>continue</strong> statement stops the current iteration of a loop 
        and immediately moves to the <strong>next</strong> iteration.
      </p>

      {/* For Loop */}
      <h2 className="text-2xl font-bold mt-10">Continue in for Loop</h2>

      <p className="leading-relaxed">
        Use <code>continue</code> to skip the current loop iteration inside a 
        <strong> for loop</strong>.
      </p>

      <h3 className="text-xl font-semibold">Example</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`for ($x = 0; $x < 10; $x++) {
  if ($x == 4) {
    continue;
  }
  echo "The number is: $x <br>";
}`}
      </pre>

      {/* While Loop */}
      <h2 className="text-2xl font-bold mt-10">Continue in while Loop</h2>

      <p className="leading-relaxed">
        The <code>continue</code> statement skips to the next iteration of a 
        <strong> while loop</strong>.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$x = 0;

while ($x < 10) {
  if ($x == 4) {
    continue;
  }
  echo "The number is: $x <br>";
  $x++;
}`}
      </pre>

      {/* Do While Loop */}
      <h2 className="text-2xl font-bold mt-10">Continue in do...while Loop</h2>

      <p className="leading-relaxed">
        Inside a <strong>do...while loop</strong>, continue jumps to the next iteration 
        after executing the condition check.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$i = 0;

do {
  $i++;
  if ($i == 3) continue;
  echo $i;
} while ($i < 6);`}
      </pre>

      {/* Foreach Loop */}
      <h2 className="text-2xl font-bold mt-10">Continue in foreach Loop</h2>

      <p className="leading-relaxed">
        You can skip certain values when looping through arrays using 
        <code> continue</code>.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$colors = array("red", "green", "blue", "yellow");

foreach ($colors as $x) {
  if ($x == "blue") continue;
  echo "$x <br>";
}`}
      </pre>

    </div>
  );
};

export default PhpContinueStatement;
