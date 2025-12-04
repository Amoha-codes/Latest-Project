import React from "react";

const PhpConstants: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP Constants
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        Constants are similar to variables, except once a constant is defined, 
        it <strong>cannot be changed or undefined</strong>.
      </p>

      <p className="leading-relaxed">
        A constant is an identifier (name) for a fixed value, and it is 
        automatically global throughout the script.
      </p>

      {/* Rules */}
      <h2 className="text-2xl font-bold">Rules for PHP Constants</h2>

      <ul className="list-disc list-inside space-y-1 leading-relaxed">
        <li>A constant name must start with a letter or underscore</li>
        <li>No <code>$</code> sign before the name</li>
        <li>Constants are automatically global</li>
      </ul>

      {/* Creating constant */}
      <h2 className="text-2xl font-bold">Create a PHP Constant</h2>
      <p className="leading-relaxed">
        Use the <code>define()</code> function to create a constant.
      </p>

      <h3 className="text-xl font-semibold">Syntax</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`define(name, value);`}
      </pre>

      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`define("GREETING", "Welcome to W3Schools.com!");
echo GREETING;`}
      </pre>

      {/* const keyword */}
      <h2 className="text-2xl font-bold">PHP <code>const</code> Keyword</h2>

      <p className="leading-relaxed">
        You can also create a constant using the <code>const</code> keyword.
      </p>

      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`const MYCAR = "Volvo";
echo MYCAR;`}
      </pre>

      {/* const vs define */}
      <h2 className="text-2xl font-bold">const vs define()</h2>

      <ul className="list-disc list-inside space-y-1 leading-relaxed">
        <li><strong>const</strong> cannot be used inside functions or conditional blocks</li>
        <li><strong>define()</strong> can be used inside functions or conditional blocks</li>
      </ul>

      {/* Constant Arrays */}
      <h2 className="text-2xl font-bold">PHP Constant Arrays</h2>

      <p className="leading-relaxed">
        Since PHP 7, you can create array constants using <code>define()</code>.
      </p>

      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`define("cars", [
  "Alfa Romeo",
  "BMW",
  "Toyota"
]);

echo cars[0];`}
      </pre>

      {/* Global usage */}
      <h2 className="text-2xl font-bold">Constants Are Global</h2>

      <p className="leading-relaxed">
        Constants can be accessed inside functions even if they were defined outside.
      </p>

      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`define("GREETING", "Welcome to W3Schools.com!");

function myTest() {
  echo GREETING;
}

myTest();`}
      </pre>

    </div>
  );
};

export default PhpConstants;
