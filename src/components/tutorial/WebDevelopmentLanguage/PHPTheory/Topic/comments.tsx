import React from "react";

const PhpComments: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP Comments
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        A comment in PHP is a line or block of text that is ignored during execution.  
        Comments are used to help others understand your code or to remind yourself of what you wrote.
      </p>

      <p className="leading-relaxed">
        Comments can also be used to temporarily disable parts of your code.
      </p>

      {/* Why Comments */}
      <h2 className="text-2xl font-bold">Why Use Comments?</h2>

      <ul className="list-disc list-inside space-y-1 leading-relaxed">
        <li>Explain your code to others</li>
        <li>Remind yourself of your thought process</li>
        <li>Disable code without deleting it</li>
      </ul>

      {/* Syntax */}
      <h2 className="text-2xl font-bold">Types of Comments in PHP</h2>

      <p className="leading-relaxed">PHP supports single-line and multi-line comments.</p>

      <h3 className="text-xl font-semibold">Syntax</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`// This is a single-line comment

# This is also a single-line comment

/* This is a
multi-line comment */`}
      </pre>

      {/* Single-line Comments */}
      <h2 className="text-2xl font-bold">Single Line Comments</h2>

      <p className="leading-relaxed">
        Single-line comments start with <code>//</code>.  
        Everything on the line after <code>//</code> is ignored.
      </p>

      <p className="leading-relaxed">
        You can also use <code>#</code>, but <code>//</code> is more common.
      </p>

      {/* Example 1 */}
      <h3 className="text-xl font-semibold">Example — Comment Before Code</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`// Outputs a welcome message:
echo "Welcome Home!";`}
      </pre>

      {/* Example 2 */}
      <h3 className="text-xl font-semibold">Example — Comment at the End</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`echo "Welcome Home!"; // Outputs a welcome message`}
      </pre>

      {/* Ignoring Code */}
      <h2 className="text-2xl font-bold">Using Comments to Ignore Code</h2>

      <p className="leading-relaxed">
        Comments can be used to stop code from executing without deleting it.
      </p>

      <h3 className="text-xl font-semibold">Example — Disable a Line</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`// echo "Welcome Home!";`}
      </pre>

    </div>
  );
};

export default PhpComments;
