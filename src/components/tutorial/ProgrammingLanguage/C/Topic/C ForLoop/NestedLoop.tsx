import React from "react";

const CNestedLoops: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        C - Nested Loops
      </h1>

      <p className="leading-relaxed">
        It is possible to place a loop inside another loop. This is called a 
        <strong> nested loop</strong>. The inner loop runs completely for each 
        iteration of the outer loop.
      </p>

      {/* Example 1 */}
      <h2 className="text-2xl font-bold">Example: Outer and Inner Loops</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`int i, j;

// Outer loop
for (i = 1; i <= 2; ++i) {
    printf("Outer: %d\\n", i);  // Executes 2 times

    // Inner loop
    for (j = 1; j <= 3; ++j) {
        printf(" Inner: %d\\n", j);  // Executes 6 times (2 * 3)
    }
}`}</pre>
      </div>

      <p className="leading-relaxed">
        <strong>Explanation:</strong> The outer loop runs 2 times, and for each iteration, 
        the inner loop runs 3 times. Total inner loop executions = 2 * 3 = 6.
      </p>

      {/* Example 2 */}
      <h2 className="text-2xl font-bold">Example: Multiplication Table (1 to 3)</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`int i, j;

for (i = 1; i <= 3; i++) {
    for (j = 1; j <= 3; j++) {
        printf("%d ", i * j);
    }
    printf("\\n");
}`}</pre>
      </div>

      <p className="leading-relaxed">
        <strong>Output:</strong><br/>
        1 2 3<br/>
        2 4 6<br/>
        3 6 9
      </p>
    </div>
  );
};

export default CNestedLoops;
