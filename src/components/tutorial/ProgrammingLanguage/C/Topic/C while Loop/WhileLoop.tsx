import React from "react";

const CWhileLoop: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        C - While Loop
      </h1>

      <p className="leading-relaxed">
        Loops can execute a block of code as long as a specified condition is true. 
        Loops are useful because they save time, reduce errors, and make code more readable.
      </p>

      {/* While Loop Syntax */}
      <h2 className="text-2xl font-bold">While Loop Syntax</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`while (condition) {
    // code block to be executed
}`}</pre>
      </div>

      {/* Example 1 */}
      <h2 className="text-2xl font-bold">Example: Incrementing</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`int i = 0;

while (i < 5) {
    printf("%d\\n", i);
    i++;
}`}</pre>
      </div>

      <p className="leading-relaxed">
        Note: Do not forget to increase the variable used in the condition (<code>i++</code>), 
        otherwise the loop will run forever! The variable <code>i</code> is commonly used as a counter 
        because it stands for 'index' or 'iterator'.
      </p>

      {/* Countdown Example */}
      <h2 className="text-2xl font-bold">Example: Countdown</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`int countdown = 3;

while (countdown > 0) {
    printf("%d\\n", countdown);
    countdown--;
}
printf("Happy New Year!!\\n");`}</pre>
      </div>

      {/* While Loop with False Condition */}
      <h2 className="text-2xl font-bold">While Loop with False Condition</h2>
      <p className="leading-relaxed">
        If the condition is false at the start, the loop body will never execute:
      </p>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`int i = 10;

while (i < 5) {
    printf("This will never be printed\\n");
    i++;
}`}</pre>
      </div>
    </div>
  );
};

export default CWhileLoop;
