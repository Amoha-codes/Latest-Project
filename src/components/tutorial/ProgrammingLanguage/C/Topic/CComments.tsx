import React from "react";

const CComments: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">

      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        C Programming – Comments
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        Comments in C are used to explain code and make it more readable. They
        are ignored by the compiler and do not affect program execution.
        Comments can be <span className="font-semibold">single-line</span> or{" "}
        <span className="font-semibold">multi-line</span>.
      </p>

      {/* Single-line Comments */}
      <h2 className="text-2xl font-bold">Single-line Comments</h2>
      <p className="leading-relaxed">
        Single-line comments start with{" "}
        <span className="font-semibold">//</span>.  
        Anything written after <code>//</code> until the end of the line is ignored by the compiler.
      </p>

      {/* Example 1 */}
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>
          <code>{`// This is a comment
printf("Hello World!");`}</code>
        </pre>
      </div>

      <p className="leading-relaxed">
        You can also place a comment at the end of a statement:
      </p>

      {/* Example 2 */}
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>
          <code>{`printf("Hello World!"); // This is a comment`}</code>
        </pre>
      </div>

      {/* Multi-line Comments */}
      <h2 className="text-2xl font-bold">Multi-line Comments</h2>
      <p className="leading-relaxed">
        Multi-line comments start with{" "}
        <span className="font-semibold">/*</span> and end with{" "}
        <span className="font-semibold">*/</span>.  
        Anything written between these markers is ignored by the compiler.
      </p>

      {/* Example 3 */}
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>
          <code>{`/* The code below will print the words Hello World!
to the screen, and it is amazing */
printf("Hello World!");`}</code>
        </pre>
      </div>

    </div>
  );
};

export default CComments;
