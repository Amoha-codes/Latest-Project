import React from "react";

const COutput: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        C Programming – Output (Print Text)
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        To output values or print text in C, you use the{" "}
        <span className="font-semibold">printf()</span> function.
      </p>

      {/* Example */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Example</h2>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          <pre>
            <code>{`#include <stdio.h>

int main() {
  printf("Hello World!");
  return 0;
}`}</code>
          </pre>
        </div>
      </div>

      {/* Double Quotes */}
      <h2 className="text-2xl font-bold">Double Quotes</h2>
      <p className="leading-relaxed">
        When printing text, the content must be wrapped inside{" "}
        <span className="font-semibold">double quotation marks ("")</span>.  
        If you forget them, you will get an error.
      </p>

      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>
          <code>{`printf("This sentence will work!");
printf(This sentence will produce an error.);`}</code>
        </pre>
      </div>

      {/* Multiple printf */}
      <h2 className="text-2xl font-bold">Many printf() Functions</h2>
      <p className="leading-relaxed">
        You can use multiple <code>printf()</code> functions.  
        Note that <span className="font-semibold">printf does not add a new line</span>{" "}
        automatically.
      </p>

      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>
          <code>{`#include <stdio.h>

int main() {
  printf("Hello World!");
  printf("I am learning C.");
  printf("And it is awesome!");
  return 0;
}`}</code>
        </pre>
      </div>
    </div>
  );
};

export default COutput;
