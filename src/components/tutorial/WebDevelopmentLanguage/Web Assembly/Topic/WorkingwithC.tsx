import React from "react";

const WebAssemblyC: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        WebAssembly - Working with C
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        In this chapter, we compile a simple <b>C program</b> to WebAssembly
        using <code>emcc</code> (Emscripten SDK).  
        The resulting <code>.wasm</code> file is then executed directly inside the browser.
      </p>

      {/* Step 1 */}
      <h2 className="text-2xl font-bold">Step 1 — Write C Code</h2>
      <p className="leading-relaxed">
        Create a folder <code>cprog/</code> and add the following file:
        <code>square.c</code>.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`#include <stdio.h>

int square(int n) {
   return n * n;
}`}
      </pre>

      {/* Step 2 */}
      <h2 className="text-2xl font-bold">Step 2 — Compile C Program to WASM</h2>
      <p className="leading-relaxed">
        Make sure Emscripten SDK (<code>emsdk</code>) is installed and activated.
        Then run the compile command:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`emcc square.c -s STANDALONE_WASM -o findsquare.wasm`}
      </pre>

      <p className="leading-relaxed">
        The option <code>-s STANDALONE_WASM</code> generates only the{" "}
        <code>.wasm</code> file without any JavaScript glue code.
      </p>

      {/* Step 3 */}
      <h2 className="text-2xl font-bold">Step 3 — Create HTML File to Execute WASM</h2>

      <p className="leading-relaxed">
        Create <code>findsquare.html</code> and load the WASM module using
        JavaScript:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm overflow-x-auto">
{`<!doctype html>
<html>
   <head>
      <meta charset="utf-8">
      <title>WebAssembly Square function</title>
      <style>
         div {
            font-size: 30px;
            text-align: center;
            color: orange;
         }
      </style>
   </head>
   <body>
      <div id="textcontent"></div>

      <script>
         let square;

         fetch("findsquare.wasm")
            .then(bytes => bytes.arrayBuffer())
            .then(mod => WebAssembly.compile(mod))
            .then(module => new WebAssembly.Instance(module))
            .then(instance => {
               square = instance.exports.square(13);
               console.log("The square of 13 = " + square);
               document.getElementById("textcontent").innerHTML =
                  "The square of 13 = " + square;
            });
      </script>
   </body>
</html>`}
      </pre>

      {/* Output */}
      <h2 className="text-2xl font-bold">Output</h2>

      <p className="leading-relaxed">
        When you open <code>findsquare.html</code> in a browser, the output will be:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-center">
{`The square of 13 = 169`}
      </pre>

      <p className="leading-relaxed">
        The value is computed by your C function compiled to WebAssembly.
      </p>

      {/* Conclusion */}
      <h2 className="text-2xl font-bold">You Can Try More C Programs</h2>
      <p className="leading-relaxed">
        Simply compile any C file using <code>emcc</code> and load it using
        JavaScript as shown above.  
        WebAssembly runs the C logic at near-native speed inside your browser.
      </p>

    </div>
  );
};

export default WebAssemblyC;
