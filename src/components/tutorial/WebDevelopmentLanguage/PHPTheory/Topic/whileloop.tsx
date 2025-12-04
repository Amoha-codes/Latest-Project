import React from "react";

const PhpWhileLoop: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP while Loop
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <strong>while</strong> loop in PHP executes a block of code 
        as long as a specified condition is <strong>true</strong>.
      </p>

      <p className="leading-relaxed">
        This type of loop is useful when you don’t know in advance how many 
        times the loop should run. It checks the condition before each iteration.
      </p>

      {/* Basic Syntax */}
      <h2 className="text-2xl font-bold mt-10">Basic Example</h2>

      <p className="leading-relaxed">
        This example prints numbers from 1 to 5:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$i = 1;
while ($i < 6) {
  echo $i;
  $i++;
}`}
      </pre>

      <p className="leading-relaxed">
        ⚠ <strong>Note:</strong> Always increment the counter, or the loop will run forever.
      </p>

      {/* Behavior */}
      <h2 className="text-2xl font-bold mt-10">How the while Loop Works</h2>

      <p className="leading-relaxed">
        The <code>while</code> loop checks its condition before each iteration.  
        As long as the condition evaluates to <strong>true</strong>, the loop continues.
      </p>

      <p className="leading-relaxed">
        The condition doesn’t need to be a counter—it can be any expression that evaluates 
        to true or false.
      </p>

      {/* Break */}
      <h2 className="text-2xl font-bold mt-10">The break Statement</h2>

      <p className="leading-relaxed">
        Use <code>break</code> to exit the loop even if the condition is still true.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$i = 1;
while ($i < 6) {
  if ($i == 3) break;
  echo $i;
  $i++;
}`}
      </pre>

      {/* Continue */}
      <h2 className="text-2xl font-bold mt-10">The continue Statement</h2>

      <p className="leading-relaxed">
        Use <code>continue</code> to skip the current iteration and move to the next.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$i = 0;
while ($i < 6) {
  $i++;
  if ($i == 3) continue;
  echo $i;
}`}
      </pre>

      {/* Alternative Syntax */}
      <h2 className="text-2xl font-bold mt-10">Alternative Syntax</h2>

      <p className="leading-relaxed">
        PHP also allows an alternative syntax using <code>endwhile;</code>
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$i = 1;
while ($i < 6):
  echo $i;
  $i++;
endwhile;`}
      </pre>

      {/* Step 10 Example */}
      <h2 className="text-2xl font-bold mt-10">Count in Steps of 10</h2>

      <p className="leading-relaxed">
        You can increment by any value—like counting to 100 by tens:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$i = 0;
while ($i < 100) {
  $i += 10;
  echo $i . "<br>";
}`}
      </pre>

    </div>
  );
};

export default PhpWhileLoop;
