import React from "react";

const CForLoop: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        C - For Loop
      </h1>

      <p className="leading-relaxed">
        When you know exactly how many times you want to execute a block of code, 
        you can use the <code>for</code> loop instead of a <code>while</code> loop.
      </p>

      {/* Syntax */}
      <h2 className="text-2xl font-bold">Syntax</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`for (expression1; expression2; expression3) {
    // code block to be executed
}`}</pre>
      </div>
      <p className="leading-relaxed">
        <strong>Expression1:</strong> executed once before the loop starts.<br/>
        <strong>Expression2:</strong> defines the condition for executing the code block.<br/>
        <strong>Expression3:</strong> executed every time after the code block runs.
      </p>

      {/* Example 1 */}
      <h2 className="text-2xl font-bold">Example: Print Numbers 0 to 4</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`int i;

for (i = 0; i < 5; i++) {
    printf("%d\\n", i);
}`}</pre>
      </div>
      <p className="leading-relaxed">
        <strong>Explanation:</strong> <br/>
        Statement 1 sets the variable: <code>int i = 0</code><br/>
        Statement 2 defines the condition: <code>i &lt; 5</code><br/>
        Statement 3 increments the variable each loop: <code>i++</code>
      </p>

      {/* Example 2 */}
      <h2 className="text-2xl font-bold">Example: Print Even Numbers 0 to 10</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`int i;

for (i = 0; i <= 10; i = i + 2) {
    printf("%d\\n", i);
}`}</pre>
      </div>

      {/* Example 3 */}
      <h2 className="text-2xl font-bold">Example: Sum of Numbers 1 to 5</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`int sum = 0;
int i;

for (i = 1; i <= 5; i++) {
    sum = sum + i;
}

printf("Sum is %d", sum);`}</pre>
      </div>

      {/* Example 4 */}
      <h2 className="text-2xl font-bold">Example: Countdown from 5 to 1</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`int i;

for (i = 5; i > 0; i--) {
    printf("%d\\n", i);
}`}</pre>
      </div>
    </div>
  );
};

export default CForLoop;
