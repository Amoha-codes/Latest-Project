import React from "react";

const PhpAssociativeArrays: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP Associative Arrays
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        Associative arrays are arrays that use <strong>named keys</strong> instead 
        of numeric indexes. These keys are strings that you assign to represent 
        each item.
      </p>

      {/* Create Associative Array */}
      <h2 className="text-2xl font-bold">Create an Associative Array</h2>
      <p className="leading-relaxed">Here is an example of an associative array:</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$car = array("brand" => "Ford", "model" => "Mustang", "year" => 1964);
var_dump($car);`}
      </pre>

      {/* Accessing Values */}
      <h2 className="text-2xl font-bold">Access Associative Arrays</h2>
      <p className="leading-relaxed">
        To access a value, refer to the <strong>key name</strong> inside brackets:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$car = array("brand" => "Ford", "model" => "Mustang", "year" => 1964);
echo $car["model"];`}
      </pre>

      {/* Change Values */}
      <h2 className="text-2xl font-bold">Change Array Values</h2>
      <p className="leading-relaxed">
        You can update values by assigning a new value to the key:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$car = array("brand" => "Ford", "model" => "Mustang", "year" => 1964);
$car["year"] = 2024;
var_dump($car);`}
      </pre>

      {/* Looping */}
      <h2 className="text-2xl font-bold">Loop Through an Associative Array</h2>
      <p className="leading-relaxed">
        Use <code>foreach</code> to loop through both keys and values:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$car = array("brand" => "Ford", "model" => "Mustang", "year" => 1964);

foreach ($car as $x => $y) {
  echo "$x: $y <br>";
}`}
      </pre>

    </div>
  );
};

export default PhpAssociativeArrays;
