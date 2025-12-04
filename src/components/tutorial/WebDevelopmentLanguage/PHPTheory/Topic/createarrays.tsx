import React from "react";

const PhpCreateArrays: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP Create Arrays
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        In PHP, arrays can be created using the <code>array()</code> function or 
        using the short <strong>[]</strong> syntax. Arrays can store multiple values 
        and can be written across multiple lines.
      </p>

      {/* array() Function */}
      <h2 className="text-2xl font-bold">Create Array Using array()</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$cars = array("Volvo", "BMW", "Toyota");`}
      </pre>

      {/* Short Syntax */}
      <h2 className="text-2xl font-bold">Short Array Syntax</h2>
      <p className="leading-relaxed">PHP also supports a shorter syntax:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$cars = ["Volvo", "BMW", "Toyota"];`}
      </pre>

      {/* Multiple Lines */}
      <h2 className="text-2xl font-bold">Array Across Multiple Lines</h2>
      <p className="leading-relaxed">
        Arrays can span multiple lines for better readability:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$cars = [
  "Volvo",
  "BMW",
  "Toyota"
];`}
      </pre>

      {/* Trailing Comma */}
      <h2 className="text-2xl font-bold">Trailing Comma</h2>
      <p className="leading-relaxed">
        A trailing comma after the last item is allowed:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$cars = [
  "Volvo",
  "BMW",
  "Toyota",
];`}
      </pre>

      {/* Array Keys */}
      <h2 className="text-2xl font-bold">Array Keys</h2>
      <p className="leading-relaxed">
        Indexed arrays automatically assign numeric keys starting from 0:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$cars = [
  0 => "Volvo",
  1 => "BMW",
  2 => "Toyota"
];`}
      </pre>

      <p className="leading-relaxed">
        Associative arrays use named keys instead of numeric indexes:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$myCar = [
  "brand" => "Ford",
  "model" => "Mustang",
  "year" => 1964
];`}
      </pre>

      {/* Declare Empty Array */}
      <h2 className="text-2xl font-bold">Declare Empty Array</h2>
      <p className="leading-relaxed">You can declare an empty array first and add items later:</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$cars = [];
$cars[0] = "Volvo";
$cars[1] = "BMW";
$cars[2] = "Toyota";`}
      </pre>

      <p className="leading-relaxed">This works for associative arrays too:</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$myCar = [];
$myCar["brand"] = "Ford";
$myCar["model"] = "Mustang";
$myCar["year"] = 1964;`}
      </pre>

      {/* Mixing Keys */}
      <h2 className="text-2xl font-bold">Mixing Array Keys</h2>
      <p className="leading-relaxed">
        PHP allows mixing numeric and associative keys in the same array:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$myArr = [];
$myArr[0] = "apples";
$myArr[1] = "bananas";
$myArr["fruit"] = "cherries";`}
      </pre>

    </div>
  );
};

export default PhpCreateArrays;
