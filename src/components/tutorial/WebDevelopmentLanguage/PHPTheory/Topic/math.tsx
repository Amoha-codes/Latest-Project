import React from "react";

const PhpMathFunctions: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP Math Functions
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        PHP provides a wide range of built-in math functions that allow you to perform 
        mathematical operations on numbers. These functions are simple to use and useful 
        for calculations, random number generation, rounding, and more.
      </p>

      {/* pi() */}
      <h2 className="text-2xl font-bold">PHP <code>pi()</code> Function</h2>
      <p className="leading-relaxed">
        The <code>pi()</code> function returns the value of <strong>PI</strong>.
      </p>

      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`echo(pi());`}
      </pre>

      {/* min & max */}
      <h2 className="text-2xl font-bold">PHP <code>min()</code> and <code>max()</code> Functions</h2>

      <p className="leading-relaxed">
        The <code>min()</code> and <code>max()</code> functions return the lowest and highest 
        value from a list of numbers.
      </p>

      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`echo(min(0, 150, 30, 20, -8, -200));
echo(max(0, 150, 30, 20, -8, -200));`}
      </pre>

      {/* abs */}
      <h2 className="text-2xl font-bold">PHP <code>abs()</code> Function</h2>

      <p className="leading-relaxed">
        The <code>abs()</code> function returns the absolute (positive) value of a number.
      </p>

      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`echo(abs(-6.7));`}
      </pre>

      {/* sqrt */}
      <h2 className="text-2xl font-bold">PHP <code>sqrt()</code> Function</h2>

      <p className="leading-relaxed">
        The <code>sqrt()</code> function returns the square root of a number.
      </p>

      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`echo(sqrt(64));`}
      </pre>

      {/* round */}
      <h2 className="text-2xl font-bold">PHP <code>round()</code> Function</h2>

      <p className="leading-relaxed">
        The <code>round()</code> function rounds a number to the nearest integer.
      </p>

      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`echo(round(0.60)); // 1
echo(round(0.49)); // 0`}
      </pre>

      {/* Random numbers */}
      <h2 className="text-2xl font-bold">Random Numbers</h2>

      <p className="leading-relaxed">
        The <code>rand()</code> function is used to generate a random number.
      </p>

      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`echo(rand());`}
      </pre>

      <p className="leading-relaxed">
        You can also specify a range using <code>rand(min, max)</code>.  
        For example, to generate a random number between 10 and 100:
      </p>

      <h3 className="text-xl font-semibold">Example</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`echo(rand(10, 100));`}
      </pre>

    </div>
  );
};

export default PhpMathFunctions;
