import React from "react";

const PhpUpdateArrayItems: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP Update Array Items
      </h1>

      <p className="leading-relaxed">
        You can update an existing array item by referring to its index number 
        (for indexed arrays) or key name (for associative arrays).
      </p>

      {/* Indexed Array Update */}
      <h2 className="text-2xl font-bold">Update Indexed Array Item</h2>
      <p className="leading-relaxed">
        Indexed arrays use numbers as keys, starting at <strong>0</strong>.
      </p>

      <pre className="bg-gray-100 text-black rounded-md p-3 font-mono whitespace-pre-wrap">
{`$cars = array("Volvo", "BMW", "Toyota");
$cars[1] = "Ford"; // Update the second item`}
      </pre>

      {/* Associative Array Update */}
      <h2 className="text-2xl font-bold">Update Associative Array Item</h2>
      <p className="leading-relaxed">
        Associative arrays use named keys. Just reference the key to update the value:
      </p>

      <pre className="bg-gray-100 text-black rounded-md p-3 font-mono whitespace-pre-wrap">
{`$cars = array("brand" => "Ford", "model" => "Mustang", "year" => 1964);
$cars["year"] = 2024;`}
      </pre>

      {/* Foreach Update by Reference */}
      <h2 className="text-2xl font-bold">Update Array Items in a Foreach Loop</h2>
      <p className="leading-relaxed">
        To modify the original array inside a <code>foreach</code> loop, you can assign
        the loop variable by reference using <code>&amp;</code>.
      </p>

      <h3 className="text-xl font-semibold">Example: Change ALL items to "Ford"</h3>

      <pre className="bg-gray-100 text-black rounded-md p-3 font-mono whitespace-pre-wrap">
{`$cars = array("Volvo", "BMW", "Toyota");

foreach ($cars as &$x) {
  $x = "Ford";
}

unset($x); // Important!

var_dump($cars);`}
      </pre>

      <p className="leading-relaxed">
        <strong>Important:</strong> Always call <code>unset($x)</code> after the loop.
        Otherwise, the loop variable remains a reference to the last array item.
      </p>

      {/* Forgetting unset() */}
      <h2 className="text-2xl font-bold">What If You Forget unset()?</h2>

      <p className="leading-relaxed">
        If <code>unset($x)</code> is missing, the loop variable still references the last array element.  
        Changing <code>$x</code> afterward will also change the array.
      </p>

      <pre className="bg-gray-100 text-black rounded-md p-3 font-mono whitespace-pre-wrap">
{`$cars = array("Volvo", "BMW", "Toyota");

foreach ($cars as &$x) {
  $x = "Ford";
}

// Missing unset($x)

$x = "ice cream";

var_dump($cars);`}
      </pre>

    </div>
  );
};

export default PhpUpdateArrayItems;
