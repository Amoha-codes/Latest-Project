import React from "react";

const PhpIfOperators: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP if Operators
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        In PHP, an <strong>if statement</strong> usually includes conditions that
        compare two values. These comparisons are made using comparison
        operators and logical operators.
      </p>

      {/* Comparison Intro */}
      <h2 className="text-2xl font-bold mt-10">PHP Comparison Operators</h2>

      <p className="leading-relaxed">
        Comparison operators allow you to compare two values inside an if
        statement.
      </p>

      <h3 className="text-xl font-semibold mt-4">Example</h3>
      <p className="leading-relaxed mb-2">Check if <code>$t</code> is equal to 14:</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$t = 14;

if ($t == 14) {
  echo "Have a good day!";
}`}
      </pre>

      {/* Comparison Table */}
      <p className="leading-relaxed mt-4">
        Here are the PHP comparison operators used in <code>if</code> statements:
      </p>

      <ul className="list-disc list-inside leading-relaxed space-y-1">
        <li><code>==</code> — Equal (values are equal)</li>
        <li><code>===</code> — Identical (values and types are equal)</li>
        <li><code>!=</code> — Not equal</li>
        <li><code>&lt;&gt;</code> — Not equal</li>
        <li><code>!==</code> — Not identical</li>
        <li><code>&gt;</code> — Greater than</li>
        <li><code>&lt;</code> — Less than</li>
        <li><code>&gt;=</code> — Greater than or equal to</li>
        <li><code>&lt;=</code> — Less than or equal to</li>
      </ul>

      {/* Logical Operators */}
      <h2 className="text-2xl font-bold mt-10">PHP Logical Operators</h2>

      <p className="leading-relaxed">
        Logical operators are used when you want to check more than one
        condition inside an <code>if</code> statement.  
        Example: the <strong>&amp;&amp;</strong> operator checks if both conditions are true.
      </p>

      <h3 className="text-xl font-semibold mt-4">Example</h3>

      <p className="leading-relaxed mb-2">
        Check if <code>$a</code> is greater than <code>$b</code> AND less than <code>$c</code>:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$a = 200;
$b = 33;
$c = 500;

if ($a > $b && $a < $c ) {
  echo "Both conditions are true";
}`}
      </pre>

      <p className="leading-relaxed mt-4">Logical operators you can use:</p>

      <ul className="list-disc list-inside space-y-1 leading-relaxed">
        <li><code>and</code> — True if both conditions are true</li>
        <li><code>&amp;&amp;</code> — True if both conditions are true</li>
        <li><code>or</code> — True if either condition is true</li>
        <li><code>||</code> — True if either condition is true</li>
        <li><code>xor</code> — True if only one condition is true, but not both</li>
        <li><code>!</code> — True if the condition is NOT true</li>
      </ul>

      {/* Multiple conditions example */}
      <h2 className="text-2xl font-bold mt-10">Multiple Conditions</h2>

      <p className="leading-relaxed">
        You can check as many conditions as you want using logical operators.
      </p>

      <h3 className="text-xl font-semibold mt-4">Example</h3>

      <p className="leading-relaxed mb-2">
        Check if <code>$a</code> is between 2 and 7:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$a = 5;

if ($a == 2 || $a == 3 || $a == 4 || $a == 5 || $a == 6 || $a == 7) {
  echo "$a is a number between 2 and 7";
}`}
      </pre>

    </div>
  );
};

export default PhpIfOperators;
