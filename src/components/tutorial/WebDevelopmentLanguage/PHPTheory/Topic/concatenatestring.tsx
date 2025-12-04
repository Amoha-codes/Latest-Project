import React from "react";

const PhpConcatenateStrings: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP - Concatenate Strings
      </h1>

      <p className="leading-relaxed">
        String concatenation means joining two or more strings together.  
        In PHP, strings are commonly concatenated using the <code>.</code> operator.
      </p>

      {/* Using the dot operator */}
      <h2 className="text-2xl font-bold">String Concatenation Using the <code>.</code> Operator</h2>

      <p className="leading-relaxed">
        The dot operator (<code>.</code>) combines two strings into one.
      </p>

      <h3 className="text-xl font-semibold">Example — Simple Concatenation</h3>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black whitespace-pre-wrap">
{`$x = "Hello";
$y = "World";
$z = $x . $y;
echo $z;    // Outputs: HelloWorld`}
      </pre>

      {/* Adding a space */}
      <h2 className="text-2xl font-bold">Add a Space Between Strings</h2>

      <p className="leading-relaxed">
        You can add a space by concatenating a space character between the variables.
      </p>

      <h3 className="text-xl font-semibold">Example — Add Space Manually</h3>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black whitespace-pre-wrap">
{`$x = "Hello";
$y = "World";
$z = $x . " " . $y;
echo $z;    // Outputs: Hello World`}
      </pre>

      {/* Using double quotes */}
      <h2 className="text-2xl font-bold">Concatenation Using Double Quotes</h2>

      <p className="leading-relaxed">
        An easier method is using double quotes.  
        PHP will automatically insert the variable values inside the string.
      </p>

      <h3 className="text-xl font-semibold">Example — Using Double Quotes</h3>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black whitespace-pre-wrap">
{`$x = "Hello";
$y = "World";
$z = "$x $y";
echo $z;    // Outputs: Hello World`}
      </pre>

    </div>
  );
};

export default PhpConcatenateStrings;
