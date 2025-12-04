import React from "react";

const PhpSortingArrays: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP Sorting Arrays
      </h1>

      <p className="leading-relaxed">
        PHP provides several built-in functions to sort array elements. You can 
        sort arrays in alphabetical or numerical order, in both ascending and 
        descending directions.
      </p>

      {/* Sort Functions List */}
      <h2 className="text-2xl font-bold">PHP - Sort Functions for Arrays</h2>

      <ul className="list-disc ml-6 space-y-2">
        <li><code>sort()</code> - Sort indexed arrays in ascending order</li>
        <li><code>rsort()</code> - Sort indexed arrays in descending order</li>
        <li><code>asort()</code> - Sort associative arrays ascending by value</li>
        <li><code>ksort()</code> - Sort associative arrays ascending by key</li>
        <li><code>arsort()</code> - Sort associative arrays descending by value</li>
        <li><code>krsort()</code> - Sort associative arrays descending by key</li>
      </ul>

      {/* sort() */}
      <h2 className="text-2xl font-bold">Sort Array in Ascending Order - sort()</h2>
      <p className="leading-relaxed">
        The <code>sort()</code> function sorts indexed arrays in ascending order.
      </p>

      <h3 className="text-xl font-semibold">Example (alphabetical)</h3>
      <pre className="bg-gray-100 p-3 rounded-md text-black font-mono whitespace-pre-wrap">
{`$cars = array("Volvo", "BMW", "Toyota");
sort($cars);`}
      </pre>

      <h3 className="text-xl font-semibold">Example (numerical)</h3>
      <pre className="bg-gray-100 p-3 rounded-md text-black font-mono whitespace-pre-wrap">
{`$numbers = array(4, 6, 2, 22, 11);
sort($numbers);`}
      </pre>

      {/* rsort() */}
      <h2 className="text-2xl font-bold">Sort Array in Descending Order - rsort()</h2>
      <p className="leading-relaxed">
        The <code>rsort()</code> function sorts indexed arrays in descending order.
      </p>

      <h3 className="text-xl font-semibold">Example (alphabetical)</h3>
      <pre className="bg-gray-100 p-3 rounded-md text-black font-mono whitespace-pre-wrap">
{`$cars = array("Volvo", "BMW", "Toyota");
rsort($cars);`}
      </pre>

      <h3 className="text-xl font-semibold">Example (numerical)</h3>
      <pre className="bg-gray-100 p-3 rounded-md text-black font-mono whitespace-pre-wrap">
{`$numbers = array(4, 6, 2, 22, 11);
rsort($numbers);`}
      </pre>

      {/* asort() */}
      <h2 className="text-2xl font-bold">Sort Array - asort()</h2>
      <p className="leading-relaxed">
        <code>asort()</code> sorts associative arrays in ascending order by value.
      </p>

      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 p-3 rounded-md text-black font-mono whitespace-pre-wrap">
{`$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
asort($age);`}
      </pre>

      {/* ksort() */}
      <h2 className="text-2xl font-bold">Sort Array - ksort()</h2>
      <p className="leading-relaxed">
        <code>ksort()</code> sorts associative arrays in ascending order by key.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md text-black font-mono whitespace-pre-wrap">
{`$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
ksort($age);`}
      </pre>

      {/* arsort() */}
      <h2 className="text-2xl font-bold">Sort Array - arsort()</h2>
      <p className="leading-relaxed">
        <code>arsort()</code> sorts associative arrays in descending order by value.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md text-black font-mono whitespace-pre-wrap">
{`$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
arsort($age);`}
      </pre>

      {/* krsort() */}
      <h2 className="text-2xl font-bold">Sort Array - krsort()</h2>
      <p className="leading-relaxed">
        <code>krsort()</code> sorts associative arrays in descending order by key.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md text-black font-mono whitespace-pre-wrap">
{`$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
krsort($age);`}
      </pre>

    </div>
  );
};

export default PhpSortingArrays;
