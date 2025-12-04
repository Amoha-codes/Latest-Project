import React from "react";

const CNestedIf: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        C - Nested If Statements
      </h1>

      <p className="leading-relaxed">
        A <code>nested if</code> statement is an <code>if</code> statement placed inside another <code>if</code> statement. 
        It allows you to check for a condition only if another condition is already true.
      </p>

      {/* Syntax */}
      <h2 className="text-2xl font-bold">Syntax</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`if (condition1) {
    // code to run if condition1 is true
    if (condition2) {
        // code to run if both condition1 and condition2 are true
    }
}`}</pre>
      </div>

      {/* Example 1 */}
      <h2 className="text-2xl font-bold">Example</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`int x = 15;
int y = 25;

if (x > 10) {
    printf("x is greater than 10\\n");

    // Nested if
    if (y > 20) {
        printf("y is also greater than 20\\n");
    }
}
// Result:
// x is greater than 10
// y is also greater than 20`}</pre>
      </div>

      {/* Real-Life Example */}
      <h2 className="text-2xl font-bold">Real-Life Example: Voting Eligibility</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`int age = 20;
bool isCitizen = true;

if (age >= 18) {
    printf("Old enough to vote.\\n");

    if (isCitizen) {
        printf("And you are a citizen, so you can vote!\\n");
    } else {
        printf("But you must be a citizen to vote.\\n");
    }
} else {
    printf("Not old enough to vote.\\n");
}
// Result:
// Old enough to vote.
// And you are a citizen, so you can vote!`}</pre>
      </div>
    </div>
  );
};

export default CNestedIf;
