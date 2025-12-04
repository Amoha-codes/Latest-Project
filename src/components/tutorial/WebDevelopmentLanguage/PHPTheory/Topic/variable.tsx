import React from "react";

const PhpVariables: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP Variables
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        Variables are containers used for storing information in PHP.
      </p>

      {/* Creating Variables */}
      <h2 className="text-2xl font-bold">Creating (Declaring) PHP Variables</h2>

      <p className="leading-relaxed">
        In PHP, a variable starts with the <code>$</code> sign, followed by the variable name:
      </p>

      <pre className="bg-gray-100 p-3 text-black rounded-md font-mono whitespace-pre-wrap">
{`$x = 5;
$y = "John";`}
      </pre>

      <p className="leading-relaxed">
        Here, <code>$x</code> holds the value <strong>5</strong> and <code>$y</code> holds the value <strong>"John"</strong>.
      </p>

      <p className="leading-relaxed font-semibold">
        Note: Variables are created when you assign them a value—no explicit declaration needed.
      </p>

      {/* Rules */}
      <h2 className="text-2xl font-bold">Rules for PHP Variables</h2>

      <ul className="list-disc list-inside space-y-1 leading-relaxed">
        <li>A variable starts with the <code>$</code> sign</li>
        <li>Must start with a letter or underscore</li>
        <li>Cannot start with a number</li>
        <li>May contain letters, numbers, and underscores</li>
        <li>Variable names are case-sensitive</li>
      </ul>

      <p className="leading-relaxed font-semibold">
        Example: <code>$age</code> and <code>$AGE</code> are different variables.
      </p>

      {/* Output Variables */}
      <h2 className="text-2xl font-bold">Output Variables</h2>

      <p className="leading-relaxed">
        The <code>echo</code> statement is used to output text and variable values.
      </p>

      {/* Example 1 */}
      <h3 className="text-xl font-semibold">Example — Output a Variable</h3>

      <pre className="bg-gray-100 p-3 text-black rounded-md font-mono whitespace-pre-wrap">
{`$txt = "W3Schools.com";
echo "I love $txt!";`}
      </pre>

      {/* Example 2 */}
      <h3 className="text-xl font-semibold">Example — Using Concatenation</h3>

      <pre className="bg-gray-100 p-3 text-black rounded-md font-mono whitespace-pre-wrap">
{`$txt = "W3Schools.com";
echo "I love " . $txt . "!";`}
      </pre>

      {/* Example 3 */}
      <h3 className="text-xl font-semibold">Example — Output Sum</h3>

      <pre className="bg-gray-100 p-3 text-black rounded-md font-mono whitespace-pre-wrap">
{`$x = 5;
$y = 4;
echo $x + $y;`}
      </pre>

      {/* Loosely Typed */}
      <h2 className="text-2xl font-bold">PHP is a Loosely Typed Language</h2>

      <p className="leading-relaxed">
        PHP does not require you to declare a data type for variables.
        It automatically assigns a type based on the value.
      </p>

      <p className="leading-relaxed">
        This means you can add a string to an integer without errors.
      </p>

      <p className="leading-relaxed">
        PHP 7 introduced <strong>type declarations</strong>, making strict typing possible when desired.
      </p>

      {/* Variable Types */}
      <h2 className="text-2xl font-bold">Variable Types</h2>

      <p className="leading-relaxed">
        A variable’s data type depends on the value assigned to it.
      </p>

      <pre className="bg-gray-100 p-3 text-black rounded-md font-mono whitespace-pre-wrap">
{`$x = 5;      // integer
$y = "John"; // string

echo $x;
echo $y;`}
      </pre>

      <p className="leading-relaxed">PHP supports these data types:</p>

      <ul className="list-disc list-inside space-y-1 leading-relaxed">
        <li>String</li>
        <li>Integer</li>
        <li>Float</li>
        <li>Boolean</li>
        <li>Array</li>
        <li>Object</li>
        <li>NULL</li>
        <li>Resource</li>
      </ul>

      {/* var_dump */}
      <h2 className="text-2xl font-bold">Get the Type of a Variable</h2>

      <p className="leading-relaxed">
        The <code>var_dump()</code> function returns both the data type and value.
      </p>

      <h3 className="text-xl font-semibold">Example</h3>

      <pre className="bg-gray-100 p-3 text-black rounded-md font-mono whitespace-pre-wrap">
{`$x = 5;
var_dump($x);`}
      </pre>

      <h3 className="text-xl font-semibold">More Examples</h3>

      <pre className="bg-gray-100 p-3 text-black rounded-md font-mono whitespace-pre-wrap">
{`var_dump(5);
var_dump("John");
var_dump(3.14);
var_dump(true);
var_dump([2, 3, 56]);
var_dump(NULL);`}
      </pre>

      {/* Assign Strings */}
      <h2 className="text-2xl font-bold">Assign String to a Variable</h2>

      <pre className="bg-gray-100 p-3 text-black rounded-md font-mono whitespace-pre-wrap">
{`$x = "John";
echo $x;`}
      </pre>

      <p className="leading-relaxed">
        Strings can use single or double quotes.  
        Differences are explained in the <strong>PHP Strings</strong> chapter.
      </p>

      {/* Multiple Assignment */}
      <h2 className="text-2xl font-bold">Assign Multiple Values</h2>

      <p className="leading-relaxed">You can assign the same value to several variables:</p>

      <h3 className="text-xl font-semibold">Example</h3>

      <pre className="bg-gray-100 p-3 text-black rounded-md font-mono whitespace-pre-wrap">
{`$x = $y = $z = "Fruit";`}
      </pre>
    </div>
  );
};

export default PhpVariables;
