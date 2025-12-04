import React from "react";

const PhpModifyStrings: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP - Modify Strings
      </h1>

      <p className="leading-relaxed">
        PHP provides several built-in functions that help you modify and transform strings easily.
      </p>

      {/* Upper Case */}
      <h2 className="text-2xl font-bold">Upper Case</h2>
      <p className="leading-relaxed">
        Use <code>strtoupper()</code> to convert a string to upper case.
      </p>

      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black whitespace-pre-wrap">
{`$x = "Hello World!";
echo strtoupper($x);   // Outputs: HELLO WORLD!`}
      </pre>

      {/* Lower Case */}
      <h2 className="text-2xl font-bold">Lower Case</h2>
      <p className="leading-relaxed">
        Use <code>strtolower()</code> to convert a string to lower case.
      </p>

      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black whitespace-pre-wrap">
{`$x = "Hello World!";
echo strtolower($x);   // Outputs: hello world!`}
      </pre>

      {/* Replace String */}
      <h2 className="text-2xl font-bold">Replace String</h2>
      <p className="leading-relaxed">
        Use <code>str_replace()</code> to replace characters inside a string.
      </p>

      <h3 className="text-xl font-semibold">Example — Replace text</h3>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black whitespace-pre-wrap">
{`$x = "Hello World!";
echo str_replace("World", "Dolly", $x);   
// Outputs: Hello Dolly!`}
      </pre>

      {/* Reverse String */}
      <h2 className="text-2xl font-bold">Reverse a String</h2>
      <p className="leading-relaxed">
        Use <code>strrev()</code> to reverse a string.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black whitespace-pre-wrap">
{`$x = "Hello World!";
echo strrev($x);   // Outputs: !dlroW olleH`}
      </pre>

      {/* Remove Whitespace */}
      <h2 className="text-2xl font-bold">Remove Whitespace</h2>
      <p className="leading-relaxed">
        The <code>trim()</code> function removes whitespace from the beginning and end of a string.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black whitespace-pre-wrap">
{`$x = " Hello World! ";
echo trim($x);   // Outputs: Hello World!`}
      </pre>

      {/* Convert String to Array */}
      <h2 className="text-2xl font-bold">Convert String into Array</h2>
      <p className="leading-relaxed">
        Use <code>explode()</code> to split a string into an array using a separator.
      </p>

      <h3 className="text-xl font-semibold">Example — Split by space</h3>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black whitespace-pre-wrap">
{`$x = "Hello World!";
$y = explode(" ", $x);

// Display the array:
print_r($y);

/*
Result:
Array ( [0] => Hello [1] => World! )
*/
`}
      </pre>

    </div>
  );
};

export default PhpModifyStrings;
