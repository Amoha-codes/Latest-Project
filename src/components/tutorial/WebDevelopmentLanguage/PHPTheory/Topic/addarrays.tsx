import React from "react";

const PhpAddArrayItems: React.FC = () => {
  return (
    <div className="mt-20 space-y-10">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP Add Array Items
      </h1>

      <p className="leading-relaxed">
        PHP allows adding items to both indexed and associative arrays using simple syntax.
        You can use <code>[]</code>, <code>array_push()</code>, or the <code>+=</code> operator.
      </p>

      {/* Add Array Item */}
      <h2 className="text-2xl font-bold mt-6">Add Array Item</h2>

      <p>Use the bracket <code>[]</code> syntax to add items to an indexed array.</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`$fruits = array("Apple", "Banana", "Cherry");
$fruits[] = "Orange";`}
      </pre>

      {/* Associative Array */}
      <h2 className="text-2xl font-bold mt-10">Associative Arrays</h2>

      <p>
        To add items to an associative array, specify the key inside brackets and assign the value.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`$cars = array("brand" => "Ford", "model" => "Mustang");
$cars["color"] = "Red";`}
      </pre>

      {/* Add Multiple Items */}
      <h2 className="text-2xl font-bold mt-10">Add Multiple Array Items</h2>

      <p>Use the <code>array_push()</code> function to add multiple values to an array.</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`$fruits = array("Apple", "Banana", "Cherry");
array_push($fruits, "Orange", "Kiwi", "Lemon");`}
      </pre>

      {/* Add Multiple Associative Items */}
      <h2 className="text-2xl font-bold mt-10">Add Multiple Items to Associative Arrays</h2>

      <p>
        Use the <code>+=</code> operator to merge new key/value pairs into an existing associative array.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`$cars = array("brand" => "Ford", "model" => "Mustang");
$cars += ["color" => "red", "year" => 1964];`}
      </pre>

    </div>
  );
};

export default PhpAddArrayItems;
