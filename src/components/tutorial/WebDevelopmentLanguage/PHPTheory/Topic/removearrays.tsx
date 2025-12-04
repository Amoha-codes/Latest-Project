import React from "react";

const PhpDeleteArrayItems: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP Delete Array Items
      </h1>

      <p className="leading-relaxed">
        PHP provides multiple ways to remove items from an array. Some methods 
        reindex the array automatically, while others keep the original index numbers.
      </p>

      {/* array_splice */}
      <h2 className="text-2xl font-bold">Remove Array Item</h2>
      <p className="leading-relaxed">
        Use <code>array_splice()</code> to remove items by index. This method 
        automatically reindexes the array.
      </p>

      <h3 className="text-xl font-semibold">Example: Remove the second item</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$cars = array("Volvo", "BMW", "Toyota");
array_splice($cars, 1, 1);`}
      </pre>

      <p className="leading-relaxed">
        After deletion, the array is reindexed starting from <strong>0</strong>.
      </p>

      {/* unset */}
      <h2 className="text-2xl font-bold">Using the unset() Function</h2>
      <p className="leading-relaxed">
        You can also delete an item using <code>unset()</code>, but it does  
        <strong>not</strong> reindex the array.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$cars = array("Volvo", "BMW", "Toyota");
unset($cars[1]);`}
      </pre>

      <p className="leading-relaxed">
        This creates a gap in the index sequence.
      </p>

      {/* Multiple removals */}
      <h2 className="text-2xl font-bold">Remove Multiple Array Items</h2>

      <h3 className="text-xl font-semibold">Using array_splice()</h3>
      <p className="leading-relaxed">
        You can remove multiple items by specifying how many items to delete.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$cars = array("Volvo", "BMW", "Toyota");
array_splice($cars, 1, 2);  // Removes BMW and Toyota`}
      </pre>

      <h3 className="text-xl font-semibold">Using unset()</h3>
      <p className="leading-relaxed">
        <code>unset()</code> supports multiple arguments.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$cars = array("Volvo", "BMW", "Toyota");
unset($cars[0], $cars[1]);`}
      </pre>

      {/* Associative array */}
      <h2 className="text-2xl font-bold">Remove Item From an Associative Array</h2>
      <p className="leading-relaxed">
        Use the key name with <code>unset()</code> to remove a specific item.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$cars = array("brand" => "Ford", "model" => "Mustang", "year" => 1964);
unset($cars["model"]);`}
      </pre>

      {/* array_diff */}
      <h2 className="text-2xl font-bold">Using array_diff()</h2>
      <p className="leading-relaxed">
        <code>array_diff()</code> removes items by value, not by key, and returns a new array.
      </p>

      <h3 className="text-xl font-semibold">Example: Remove specific values</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$cars = array("brand" => "Ford", "model" => "Mustang", "year" => 1964);
$newarray = array_diff($cars, ["Mustang", 1964]);`}
      </pre>

      {/* array_pop */}
      <h2 className="text-2xl font-bold">Remove the Last Item</h2>
      <p className="leading-relaxed">
        The <code>array_pop()</code> function removes the last item from an array.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$cars = array("Volvo", "BMW", "Toyota");
array_pop($cars);`}
      </pre>

      {/* array_shift */}
      <h2 className="text-2xl font-bold">Remove the First Item</h2>
      <p className="leading-relaxed">
        Use <code>array_shift()</code> to remove the first item.  
        This also reindexes the array.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$cars = array("Volvo", "BMW", "Toyota");
array_shift($cars);`}
      </pre>

    </div>
  );
};

export default PhpDeleteArrayItems;
