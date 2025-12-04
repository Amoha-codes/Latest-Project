import React from "react";

const PhpAccessArrays: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP Access Arrays
      </h1>

      <p className="leading-relaxed">
        You can access items inside an array using their index number (for indexed arrays) 
        or key name (for associative arrays).
      </p>

      {/* Indexed Array Access */}
      <h2 className="text-2xl font-bold">Access Indexed Array Items</h2>
      <p className="leading-relaxed">
        To access an indexed array item, refer to its index number. 
        Remember: indexing starts at <strong>0</strong>.
      </p>

      <pre className="bg-gray-100 text-black rounded-md p-3 font-mono whitespace-pre-wrap">
{`$cars = array("Volvo", "BMW", "Toyota");
echo $cars[2]; // Output: Toyota`}
      </pre>

      {/* Associative Array Access */}
      <h2 className="text-2xl font-bold">Access Associative Array Items</h2>
      <p className="leading-relaxed">
        To access items from an associative array, use the key name:
      </p>

      <pre className="bg-gray-100 text-black rounded-md p-3 font-mono whitespace-pre-wrap">
{`$cars = array("brand" => "Ford", "model" => "Mustang", "year" => 1964);
echo $cars["year"];`}
      </pre>

      {/* Quotes */}
      <h2 className="text-2xl font-bold">Double or Single Quotes</h2>
      <p className="leading-relaxed">
        PHP allows both single and double quotes for array keys:
      </p>

      <pre className="bg-gray-100 text-black rounded-md p-3 font-mono whitespace-pre-wrap">
{`echo $cars["model"];
echo $cars['model'];`}
      </pre>

      {/* Function as Array Item */}
      <h2 className="text-2xl font-bold">Execute a Function Stored in an Array</h2>
      <p className="leading-relaxed">
        Arrays can store functions. To execute them, add parentheses after the index or key:
      </p>

      <h3 className="text-xl font-semibold">Function in Indexed Array</h3>

      <pre className="bg-gray-100 text-black rounded-md p-3 font-mono whitespace-pre-wrap">
{`function myFunction() {
  echo "I come from a function!";
}

$myArr = array("Volvo", 15, myFunction);

$myArr[2]();`}
      </pre>

      <h3 className="text-xl font-semibold">Function in Associative Array</h3>

      <pre className="bg-gray-100 text-black rounded-md p-3 font-mono whitespace-pre-wrap">
{`function myFunction() {
  echo "I come from a function!";
}

$myArr = array(
  "car" => "Volvo",
  "age"  => 15,
  "message" => myFunction
);

$myArr["message"]();`}
      </pre>

      {/* Loop Associative Array */}
      <h2 className="text-2xl font-bold">Loop Through an Associative Array</h2>
      <p className="leading-relaxed">
        Use <code>foreach</code> to loop through keys and values:
      </p>

      <pre className="bg-gray-100 text-black rounded-md p-3 font-mono whitespace-pre-wrap">
{`$car = array("brand" => "Ford", "model" => "Mustang", "year" => 1964);

foreach ($car as $x => $y) {
  echo "$x: $y <br>";
}`}
      </pre>

      {/* Loop Indexed Array */}
      <h2 className="text-2xl font-bold">Loop Through an Indexed Array</h2>
      <p className="leading-relaxed">
        Printing all indexed array items is simple with <code>foreach</code>:
      </p>

      <pre className="bg-gray-100 text-black rounded-md p-3 font-mono whitespace-pre-wrap">
{`$cars = array("Volvo", "BMW", "Toyota");

foreach ($cars as $x) {
  echo "$x <br>";
}`}
      </pre>

    </div>
  );
};

export default PhpAccessArrays;
