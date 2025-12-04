import React from "react";

const PhpFunctions: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP Functions
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        PHP provides over 1000 built-in functions, and you can also create your 
        own custom functions to reuse code and simplify your programs.
      </p>

      <p className="leading-relaxed">
        A function is a block of code that executes only when it is called.
      </p>

      {/* Built-in Functions */}
      <h2 className="text-2xl font-bold">PHP Built-in Functions</h2>

      <p className="leading-relaxed">
        PHP has many built-in functions available for direct use. You can explore 
        them in the PHP function reference.  
      </p>

      {/* User Defined Functions */}
      <h2 className="text-2xl font-bold">PHP User Defined Functions</h2>

      <p className="leading-relaxed">
        You can define your own functions using the <code>function</code> keyword.  
      </p>

      <h3 className="text-xl font-semibold">Create a Function</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`function myMessage() {
  echo "Hello world!";
}`}
      </pre>

      <p className="leading-relaxed">
        Function names must start with a letter or underscore.  
        Function names are <strong>not case-sensitive</strong>.
      </p>

      {/* Calling a function */}
      <h3 className="text-xl font-semibold">Call a Function</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`function myMessage() {
  echo "Hello world!";
}

myMessage();`}
      </pre>

      {/* Function Arguments */}
      <h2 className="text-2xl font-bold mt-10">PHP Function Arguments</h2>

      <p className="leading-relaxed">
        You can pass information to functions through arguments.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`function familyName($fname) {
  echo "$fname Refsnes.<br>";
}

familyName("Jani");
familyName("Hege");
familyName("Stale");`}
      </pre>

      <h3 className="text-xl font-semibold">Multiple Arguments</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`function familyName($fname, $year) {
  echo "$fname Refsnes. Born in $year <br>";
}

familyName("Hege", 1975);
familyName("Stale", 1978);`}
      </pre>

      {/* Default Values */}
      <h2 className="text-2xl font-bold mt-10">PHP Default Argument Value</h2>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`function setHeight($minheight = 50) {
  echo "The height is : $minheight <br>";
}

setHeight(350);
setHeight(); // default = 50`}
      </pre>

      {/* Returning Values */}
      <h2 className="text-2xl font-bold mt-10">PHP Functions — Returning Values</h2>

      <p className="leading-relaxed">
        Use the <code>return</code> statement to return a value.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`function sum($x, $y) {
  return $x + $y;
}

echo sum(5, 10);`}
      </pre>

      {/* Passing by Reference */}
      <h2 className="text-2xl font-bold mt-10">Passing Arguments by Reference</h2>

      <p className="leading-relaxed">
        Use <code>&amp;</code> to pass a variable by reference.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`function add_five(&$value) {
  $value += 5;
}

$num = 2;
add_five($num);
echo $num;  // 7`}
      </pre>

      {/* Variadic Functions */}
      <h2 className="text-2xl font-bold mt-10">Variable Number of Arguments</h2>

      <p className="leading-relaxed">
        Use <code>...</code> to accept unlimited arguments (variadic function).
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`function sumMyNumbers(...$x) {
  $total = 0;
  foreach ($x as $num) {
    $total += $num;
  }
  return $total;
}

echo sumMyNumbers(5, 2, 6, 2, 7, 7);`}
      </pre>

      <p className="leading-relaxed">
        The variadic parameter must be the <strong>last</strong> parameter.
      </p>

      {/* Incorrect variadic example */}
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`function myFamily(...$firstname, $lastname) {
  // ❌ ERROR: variadic must be last
}`}
      </pre>

      {/* Loose Typing */}
      <h2 className="text-2xl font-bold mt-10">PHP is a Loosely Typed Language</h2>

      <p className="leading-relaxed">
        PHP does not require specifying data types for variables.
        However, PHP 7 introduced optional <strong>type declarations</strong>.
      </p>

      <h3 className="text-xl font-semibold">Example without strict types</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`function addNumbers(int $a, int $b) {
  return $a + $b;
}

echo addNumbers(5, "5 days");  
// "5 days" becomes 5 → output = 10`}
      </pre>

      {/* Strict Types */}
      <h2 className="text-2xl font-bold mt-10">Strict Types</h2>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`<?php declare(strict_types=1);

function addNumbers(int $a, int $b) {
  return $a + $b;
}

echo addNumbers(5, "5 days"); 
// ❌ ERROR: string is not integer`}
      </pre>

      {/* Return Type Declarations */}
      <h2 className="text-2xl font-bold mt-10">PHP Return Type Declarations</h2>

      <p className="leading-relaxed">
        You can also declare the return type of a function.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`<?php declare(strict_types=1);

function addNumbers(float $a, float $b) : float {
  return $a + $b;
}

echo addNumbers(1.2, 5.2);`}
      </pre>

      <h3 className="text-xl font-semibold">Different return type</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`function addNumbers(float $a, float $b) : int {
  return (int)($a + $b);
}`}
      </pre>
    </div>
  );
};

export default PhpFunctions;
