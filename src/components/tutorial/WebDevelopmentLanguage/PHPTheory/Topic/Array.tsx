import React from "react";

const PhpArrays: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP Arrays
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        Arrays in PHP allow you to store multiple values inside a single
        variable. This is one of the most powerful parts of PHP.
      </p>

      {/* Basic Example */}
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$cars = array("Volvo", "BMW", "Toyota");`}
      </pre>

      {/* What is an Array */}
      <h2 className="text-2xl font-bold">What is an Array?</h2>

      <p className="leading-relaxed">
        An array is a special variable that can hold many values under one name.
        You can access each value using an index or a key.
      </p>

      {/* Types */}
      <h2 className="text-2xl font-bold">PHP Array Types</h2>

      <ul className="list-disc pl-5 space-y-2">
        <li>Indexed Arrays – Arrays with numeric indexes</li>
        <li>Associative Arrays – Arrays with named keys</li>
        <li>Multidimensional Arrays – Arrays containing other arrays</li>
      </ul>

      {/* Working With Arrays */}
      <h2 className="text-2xl font-bold">Working With Arrays</h2>

      <p className="leading-relaxed">In this chapter, you will learn how to:</p>

      <ul className="list-disc pl-5 space-y-1">
        <li>Create Arrays</li>
        <li>Access Arrays</li>
        <li>Update Arrays</li>
        <li>Add Array Items</li>
        <li>Remove Array Items</li>
        <li>Sort Arrays</li>
      </ul>

      {/* Array Items */}
      <h2 className="text-2xl font-bold">Array Items</h2>

      <p className="leading-relaxed">
        Array items can be of <strong>any data type</strong>: strings, numbers,
        objects, functions, or even other arrays.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$myArr = array("Volvo", 15, ["apples", "bananas"], myFunction);`}
      </pre>

      {/* Array Functions */}
      <h2 className="text-2xl font-bold">Array Functions</h2>

      <p className="leading-relaxed">
        PHP provides many built-in array functions. The most commonly used is
        <code> count() </code> — which counts how many items are in an array.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$cars = array("Volvo", "BMW", "Toyota");
echo count($cars);`}
      </pre>

    </div>
  );
};

export default PhpArrays;
