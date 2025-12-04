import React from "react";

const PhpNestedIf: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP Nested if Statement
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        In PHP, you can place an <strong>if statement inside another if statement</strong>.  
        This is called a <strong>nested if</strong>. It allows you to check multiple conditions
        in a structured way.
      </p>

      {/* Explanation */}
      <h2 className="text-2xl font-bold mt-10">What is a Nested if?</h2>

      <p className="leading-relaxed">
        A nested if is useful when you want to test a second condition,  
        but only if the first condition is true.
      </p>

      {/* Example */}
      <h3 className="text-xl font-semibold mt-6">Example</h3>

      <p className="leading-relaxed mb-2">
        This example checks if <code>$a</code> is above 10.  
        If true, it checks again if <code>$a</code> is above 20:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$a = 13;

if ($a > 10) {
  echo "Above 10";
  if ($a > 20) {
    echo " and also above 20";
  } else {
    echo " but not above 20";
  }
}`}
      </pre>

      <p className="leading-relaxed">
        Since <code>$a = 13</code>, the output will be:  
        <strong>Above 10 but not above 20</strong>
      </p>

    </div>
  );
};

export default PhpNestedIf;
