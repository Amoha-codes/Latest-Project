import React from "react";

const SwiftIfElse: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-15">
      Swift If...Else
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      Control the flow of your program with <code>if</code>, <code>else if</code>, and <code>else</code>.
      Combine conditions with logical operators to build complex checks.
    </p>

    {/* Basic If...Else */}
    <h2 className="text-2xl font-bold  mt-6">Basic If...Else</h2>

    <p className=" leading-relaxed mt-3">
      Use <code>if</code> to run code when a condition is true.  
      Add <code>else</code> for the false case, and <code>else if</code> for multiple branches.
    </p>

    <h3 className="text-xl font-bold  mt-4">Example</h3>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`let score = 82
if score >= 90 {
  print("A")
} else if score >= 80 {
  print("B")
} else {
  print("C or lower")
}`}</pre>
    </div>

    <p className=" leading-relaxed mt-4">
       This example checks a score and prints the appropriate grade based on the conditions.
    </p>
  </>
);

export default SwiftIfElse;
