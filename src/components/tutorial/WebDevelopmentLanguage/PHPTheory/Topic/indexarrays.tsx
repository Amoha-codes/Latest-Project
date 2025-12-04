import React from "react";

const PhpIndexedArrays: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP Indexed Arrays
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        Indexed arrays are arrays where each item has a numeric index. The first
        item starts at index <strong>0</strong>, the second at <strong>1</strong>,
        and so on.
      </p>

      {/* Create Indexed Array */}
      <h2 className="text-2xl font-bold">Create and Display an Indexed Array</h2>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$cars = array("Volvo", "BMW", "Toyota");
var_dump($cars);`}
      </pre>

      {/* Accessing */}
      <h2 className="text-2xl font-bold">Access Indexed Arrays</h2>

      <p className="leading-relaxed">
        You can access an array item using its index number:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$cars = array("Volvo", "BMW", "Toyota");
echo $cars[0];`}
      </pre>

      {/* Change Value */}
      <h2 className="text-2xl font-bold">Change Array Values</h2>

      <p className="leading-relaxed">
        To update a value, reference its index number:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$cars = array("Volvo", "BMW", "Toyota");
$cars[1] = "Ford";
var_dump($cars);`}
      </pre>

      {/* Loop */}
      <h2 className="text-2xl font-bold">Loop Through an Indexed Array</h2>

      <p className="leading-relaxed">Use a <code>foreach</code> loop to print all items:</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$cars = array("Volvo", "BMW", "Toyota");

foreach ($cars as $x) {
  echo "$x <br>";
}`}
      </pre>

      {/* Index Number Explanation */}
      <h2 className="text-2xl font-bold">Index Numbers in Indexed Arrays</h2>

      <p className="leading-relaxed">
        PHP automatically assigns numeric indexes. New items get an index that is
        one higher than the highest existing index.
      </p>

      <p className="leading-relaxed">Example with regular indexes:</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$cars[0] = "Volvo";
$cars[1] = "BMW";
$cars[2] = "Toyota";

array_push($cars, "Ford"); // index becomes 3
var_dump($cars);`}
      </pre>

      {/* Random indexes */}
      <h2 className="text-2xl font-bold">Arrays With Random Index Numbers</h2>

      <p className="leading-relaxed">
        If the array has random indexes, PHP still assigns the new element the next highest index:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$cars[5] = "Volvo";
$cars[7] = "BMW";
$cars[14] = "Toyota";

array_push($cars, "Ford"); 
// New index becomes 15
var_dump($cars);`}
      </pre>

    </div>
  );
};

export default PhpIndexedArrays;
