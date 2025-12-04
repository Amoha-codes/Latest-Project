import React from "react";

const CSyntax: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        C Programming – Syntax
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        You have already seen the following C code several times. Now let’s break it
        down to understand it better:
      </p>

      {/* Code Example */}
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>
          <code>{`#include <stdio.h>

int main() {
  printf("Hello World!");
  return 0;
}`}</code>
        </pre>
      </div>

      {/* Explanation */}
      <h2 className="text-2xl font-bold">Example Explained</h2>

      <ul className="list-disc list-inside space-y-2 leading-relaxed">
        <li>
          <span className="font-semibold">Line 1: #include &lt;stdio.h&gt;</span>  
          This is a header file library that lets us use input/output functions like
          <code> printf()</code>.
        </li>

        <li>
          <span className="font-semibold">Line 2:</span> A blank line.  
          C ignores white spaces, but they help make code readable.
        </li>

        <li>
          <span className="font-semibold">Line 3: int main()</span>  
          The main function — code inside its <code>{`{}`}</code> runs first.
        </li>

        <li>
          <span className="font-semibold">Line 4: printf()</span>  
          Used to print text to the screen. Here it prints <code>"Hello World!"</code>.
          <br />
          <span className="font-semibold">Note:</span> Every C statement ends with a
          semicolon (<code>;</code>).
        </li>

        <li>
          <span className="font-semibold">Line 5: return 0;</span>  
          Ends the <code>main()</code> function and returns 0 (meaning the program ran
          successfully).
        </li>

     
      </ul>

      {/* Single-line version */}
      <p className="leading-relaxed font-semibold mt-4">
        Note: The body of <code>main()</code> could also be written like this:
      </p>

      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>
          <code>{`int main(){printf("Hello World!");return 0;}`}</code>
        </pre>
      </div>

      <p className="leading-relaxed">
        The compiler ignores extra spaces or new lines — but writing clean, readable
        code is always the best practice.
      </p>
    </div>
  );
};

export default CSyntax;
