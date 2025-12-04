import React from "react";

const CDoWhileLoop: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        C - Do/While Loop
      </h1>

      <p className="leading-relaxed">
        The <code>do/while</code> loop is a variant of the <code>while</code> loop. 
        It executes the code block once before checking the condition, and then repeats 
        the loop as long as the condition is true.
      </p>

      {/* Syntax */}
      <h2 className="text-2xl font-bold">Syntax</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`do {
    // code block to be executed
} while (condition);`}</pre>
      </div>

      {/* Example 1 */}
      <h2 className="text-2xl font-bold">Example: Incrementing</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`int i = 0;

do {
    printf("%d\\n", i);
    i++;
} while (i < 5);`}</pre>
      </div>

      <p className="leading-relaxed">
        Note: Always increase the variable in the condition, otherwise the loop will never end!
      </p>

      {/* Condition False from Start */}
      <h2 className="text-2xl font-bold">Condition False from the Start</h2>
      <p className="leading-relaxed">
        Even if the condition is false initially, the <code>do/while</code> loop executes 
        the code block at least once:
      </p>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`int i = 10;

do {
    printf("i is %d\\n", i);
    i++;
} while (i < 5);`}</pre>
      </div>

      {/* Summary */}
      <h2 className="text-2xl font-bold">Summary</h2>
      <p className="leading-relaxed">
        The <code>do/while</code> loop always runs at least once, even if the condition 
        is false from the start. This is different from a regular <code>while</code> loop, 
        which would skip execution if the condition is false initially. 
        This makes <code>do/while</code> useful for tasks like displaying a message or 
        requesting user input at least once.
      </p>

      {/* Practical Example */}
      <h2 className="text-2xl font-bold">Practical Example: User Input</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`int number;

do {
    printf("Enter a positive number: ");
    scanf("%d", &number);
} while (number > 0);`}</pre>
      </div>
    </div>
  );
};

export default CDoWhileLoop;
