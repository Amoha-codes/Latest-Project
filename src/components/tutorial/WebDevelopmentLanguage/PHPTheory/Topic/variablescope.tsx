import React from "react";

const PhpVariableScope: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP Variable Scope
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        In PHP, variables can be declared anywhere in the script.  
        The <strong>scope</strong> of a variable determines where it can be accessed.
      </p>

      <p className="leading-relaxed">
        PHP has three main variable scopes:
      </p>

      <ul className="list-disc list-inside space-y-1 leading-relaxed">
        <li>local</li>
        <li>global</li>
        <li>static</li>
      </ul>

      {/* Global Scope */}
      <h2 className="text-2xl font-bold">Global and Local Scope</h2>

      <p className="leading-relaxed">
        A variable declared <strong>outside</strong> a function has a
        <strong> global scope</strong> and can only be accessed outside functions.
      </p>

      <h3 className="text-xl font-semibold">Example — Global Variable</h3>

      <pre className="bg-gray-100 p-3 rounded-md text-black font-mono whitespace-pre-wrap">
{`$x = 5; // global scope

function myTest() {
  // using x inside this function will generate an error
  echo "<p>Variable x inside function is: $x</p>";
}
myTest();

echo "<p>Variable x outside function is: $x</p>";`}
      </pre>

      <p className="leading-relaxed">
        A variable declared <strong>inside</strong> a function has a
        <strong> local scope</strong> and can only be accessed within that function.
      </p>

      <h3 className="text-xl font-semibold">Example — Local Variable</h3>

      <pre className="bg-gray-100 p-3 rounded-md text-black font-mono whitespace-pre-wrap">
{`function myTest() {
  $x = 5; // local scope
  echo "<p>Variable x inside function is: $x</p>";
}
myTest();

// using x outside the function will generate an error
echo "<p>Variable x outside function is: $x</p>";`}
      </pre>

      <p className="leading-relaxed">
        You may reuse variable names in different functions because each local variable exists only inside its function.
      </p>

      {/* global keyword */}
      <h2 className="text-2xl font-bold">The <code>global</code> Keyword</h2>

      <p className="leading-relaxed">
        Use the <code>global</code> keyword to access global variables from inside a function.
      </p>

      <h3 className="text-xl font-semibold">Example — Using global keyword</h3>

      <pre className="bg-gray-100 p-3 rounded-md text-black font-mono whitespace-pre-wrap">
{`$x = 5;
$y = 10;

function myTest() {
  global $x, $y;
  $y = $x + $y;
}

myTest();
echo $y; // outputs 15`}
      </pre>

      <p className="leading-relaxed">
        PHP stores all global variables in a special array called <code>$GLOBALS</code>, which can also be used to modify global values.
      </p>

      <h3 className="text-xl font-semibold">Example — Using $GLOBALS</h3>

      <pre className="bg-gray-100 p-3 rounded-md text-black font-mono whitespace-pre-wrap">
{`$x = 5;
$y = 10;

function myTest() {
  $GLOBALS['y'] = $GLOBALS['x'] + $GLOBALS['y'];
}

myTest();
echo $y; // outputs 15`}
      </pre>

      {/* static Scope */}
      <h2 className="text-2xl font-bold">The <code>static</code> Keyword</h2>

      <p className="leading-relaxed">
        Normally, when a function finishes executing, all of its variables are deleted.  
        But sometimes you want a variable to keep its value between function calls.
      </p>

      <p className="leading-relaxed">
        Use the <code>static</code> keyword to preserve a variable's value.
      </p>

      <h3 className="text-xl font-semibold">Example — static Variable</h3>

      <pre className="bg-gray-100 p-3 rounded-md text-black font-mono whitespace-pre-wrap">
{`function myTest() {
  static $x = 0;
  echo $x;
  $x++;
}

myTest();
myTest();
myTest();`}
      </pre>

      <p className="leading-relaxed">
        Output will be: <strong>0 1 2</strong>  
        Because <code>$x</code> keeps its value across function calls.
      </p>
    </div>
  );
};

export default PhpVariableScope;
