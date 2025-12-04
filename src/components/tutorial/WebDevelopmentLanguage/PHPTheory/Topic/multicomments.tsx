import React from "react";

const PhpMultilineComments: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP Multiline Comments
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        Multi-line comments allow you to write comments that span across multiple lines. 
        Everything between <code>/*</code> and <code>*/</code> is ignored by PHP.
      </p>

      {/* Definition */}
      <h2 className="text-2xl font-bold">Multi-line Comments</h2>

      <p className="leading-relaxed">
        Multi-line comments begin with <code>/*</code> and end with <code>*/</code>.
      </p>

      <h3 className="text-xl font-semibold">Example — Multi-line explanation</h3>

      <pre className="bg-gray-100 p-3 text-black rounded-md font-mono whitespace-pre-wrap">
{`/*
The next statement will
print a welcome message
*/
echo "Welcome Home!";`}
      </pre>

      {/* Ignore Code */}
      <h2 className="text-2xl font-bold">Multi-line Comments to Ignore Code</h2>

      <p className="leading-relaxed">
        You can also use multi-line comments to temporarily disable multiple lines of code.
      </p>

      <h3 className="text-xl font-semibold">Example — Ignoring a block of code</h3>

      <pre className="bg-gray-100 p-3 text-black rounded-md font-mono whitespace-pre-wrap">
{`/*
echo "Welcome to my home!";
echo "Mi casa su casa!";
*/
echo "Hello!";`}
      </pre>

      {/* Inside Code Line */}
      <h2 className="text-2xl font-bold">Comments Inside Code</h2>

      <p className="leading-relaxed">
        Multi-line comments can even be placed inside a line of PHP code to prevent part of it from executing.
      </p>

      <h3 className="text-xl font-semibold">Example — Comment inside code line</h3>

      <p className="leading-relaxed">The <code>+ 15</code> part is ignored:</p>

      <pre className="bg-gray-100 p-3 text-black rounded-md font-mono whitespace-pre-wrap">
{`$x = 5 /* + 15 */ + 5;
echo $x;`}
      </pre>

    </div>
  );
};

export default PhpMultilineComments;
