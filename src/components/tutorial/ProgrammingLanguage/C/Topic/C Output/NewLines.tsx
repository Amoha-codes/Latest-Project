import React from "react";

const CNewLines: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        C Programming – New Lines
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        To insert a new line in C, you can use the{" "}
        <span className="font-semibold">{"\\n"}</span> character inside{" "}
        <span className="font-semibold">printf()</span>.
      </p>

      {/* Example 1 */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Example</h2>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          <pre>
            <code>{`#include <stdio.h>

int main() {
  printf("Hello World!\\n");
  printf("I am learning C.");
  return 0;
}`}</code>
          </pre>
        </div>
      </div>

      {/* Multiple lines in one printf */}
      <h2 className="text-2xl font-bold">Output Multiple Lines in One printf()</h2>
      <p className="leading-relaxed">
        You can also print multiple lines using a single{" "}
        <code>printf()</code> statement.  
        But this may reduce code readability.
      </p>

      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>
          <code>{`#include <stdio.h>

int main() {
  printf("Hello World!\\nI am learning C.\\nAnd it is awesome!");
  return 0;
}`}</code>
        </pre>
      </div>

      {/* Tip */}
      <h2 className="text-2xl font-bold">Tip</h2>
      <p className="leading-relaxed">
        Two <code>{"\\n"}</code> characters in a row will create a blank line.
      </p>

      {/* Example 3 */}
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>
          <code>{`#include <stdio.h>

int main() {
  printf("Hello World!\\n\\n");
  printf("I am learning C.");
  return 0;
}`}</code>
        </pre>
      </div>
    </div>
  );
};

export default CNewLines;
