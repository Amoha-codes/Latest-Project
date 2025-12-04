import React from "react";

const CIfElse: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        C - If ... Else
      </h1>

      <p className="leading-relaxed">
        In C, you can use comparison conditions to make decisions, such as:
      </p>

      <ul className="list-disc ml-6">
        <li>Less than: <code>a &lt; b</code></li>
        <li>Less than or equal to: <code>a &lt;= b</code></li>
        <li>Greater than: <code>a &gt; b</code></li>
        <li>Greater than or equal to: <code>a &gt;= b</code></li>
        <li>Equal to: <code>a == b</code></li>
        <li>Not equal to: <code>a != b</code></li>
      </ul>

      <p className="leading-relaxed">
        Conditional statements allow you to execute different blocks of code depending on a condition:
      </p>

      <ul className="list-disc ml-6">
        <li><code>if</code> - execute code if a condition is true</li>
        <li><code>else</code> - execute code if the condition is false</li>
        <li><code>else if</code> - test a new condition if the first condition is false</li>
        <li><code>switch</code> - choose between multiple alternative blocks of code</li>
      </ul>

      {/* if Statement */}
      <h2 className="text-2xl font-bold">The if Statement</h2>
      <p className="leading-relaxed">
        The <code>if</code> statement executes a block of code only if the specified condition is true.
      </p>

      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`if (condition) {
    // code to execute if condition is true
}`}</pre>
      </div>

      <p className="leading-relaxed">
        Note: <code>if</code> must be in lowercase. Using <code>If</code> or <code>IF</code> will cause an error.
      </p>

      {/* Example with numbers */}
      <h2 className="text-2xl font-bold">Example</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`if (20 > 18) {
    printf("20 is greater than 18");
}`}</pre>
      </div>

      {/* Example with variables */}
      <h2 className="text-2xl font-bold">Example with Variables</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`int x = 20;
int y = 18;
if (x > y) {
    printf("x is greater than y");
}`}</pre>
      </div>
    </div>
  );
};

export default CIfElse;
