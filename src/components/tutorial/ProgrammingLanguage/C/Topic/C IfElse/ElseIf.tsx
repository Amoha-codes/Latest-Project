import React from "react";

const CElseIf: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        C - Else If Statement
      </h1>

      <p className="leading-relaxed">
        The <code>else if</code> statement is used to specify a new condition if the first <code>if</code> condition is false.
      </p>

      {/* Syntax */}
      <h2 className="text-2xl font-bold">Syntax</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`if (condition1) {
    // block executed if condition1 is true
} else if (condition2) {
    // block executed if condition1 is false and condition2 is true
} else {
    // block executed if both condition1 and condition2 are false
}`}</pre>
      </div>

      {/* Example */}
      <h2 className="text-2xl font-bold">Example</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`int time = 22;

if (time < 10) {
    printf("Good morning.");
} else if (time < 20) {
    printf("Good day.");
} else {
    printf("Good evening.");
}
// Outputs: "Good evening."`}</pre>
      </div>
    </div>
  );
};

export default CElseIf;
