import React from "react";

const PhpDoWhileLoop: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP do...while Loop
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <strong>do...while</strong> loop in PHP runs a block of code 
        <strong> at least once</strong>, and then continues running as long as the condition is true.
      </p>

      <p className="leading-relaxed">
        Unlike the <code>while</code> loop, the <strong>condition is checked after executing</strong> 
        the loop body.
      </p>

      {/* Basic Example */}
      <h2 className="text-2xl font-bold mt-10">Basic Example</h2>

      <p className="leading-relaxed">
        This example prints numbers from 1 to 5:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$i = 1;

do {
  echo $i;
  $i++;
} while ($i < 6);`}
      </pre>

      <p className="leading-relaxed">
        ⚠ <strong>Note:</strong> The loop body runs first, then the condition is checked.
      </p>

      {/* Condition False Example */}
      <h2 className="text-2xl font-bold mt-10">Executes at Least Once</h2>

      <p className="leading-relaxed">
        Even if the condition is false on the first check, the code will run once.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$i = 8;

do {
  echo $i;
  $i++;
} while ($i < 6);`}
      </pre>

      <p className="leading-relaxed">
        Even though <code>$i &lt; 6</code> is false, the number <strong>8</strong> still prints once.
      </p>

      {/* Break */}
      <h2 className="text-2xl font-bold mt-10">The break Statement</h2>

      <p className="leading-relaxed">
        Use <code>break</code> to stop the loop at any moment:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$i = 1;

do {
  if ($i == 3) break;
  echo $i;
  $i++;
} while ($i < 6);`}
      </pre>

      {/* Continue */}
      <h2 className="text-2xl font-bold mt-10">The continue Statement</h2>

      <p className="leading-relaxed">
        Use <code>continue</code> to skip an iteration and continue with the next one:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$i = 0;

do {
  $i++;
  if ($i == 3) continue;
  echo $i;
} while ($i < 6);`}
      </pre>

    </div>
  );
};

export default PhpDoWhileLoop;
