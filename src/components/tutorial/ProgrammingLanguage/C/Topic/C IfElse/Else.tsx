import React from "react";

const CElse: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        C - Else Statement
      </h1>

      <p className="leading-relaxed">
        The <code>else</code> statement is used to specify a block of code that executes when the <code>if</code> condition is false.
      </p>

      {/* Syntax */}
      <h2 className="text-2xl font-bold">Syntax</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`if (condition) {
    // block of code executed if condition is true
} else {
    // block of code executed if condition is false
}`}</pre>
      </div>

      {/* Example */}
      <h2 className="text-2xl font-bold">Example</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`int time = 20;

if (time < 18) {
    printf("Good day.");
} else {
    printf("Good evening.");
}
// Outputs: "Good evening."`}</pre>
      </div>
    </div>
  );
};

export default CElse;
