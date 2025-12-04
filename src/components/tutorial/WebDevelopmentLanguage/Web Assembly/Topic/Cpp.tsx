import React from "react";

const WebAssemblyCpp: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        WebAssembly - Working with C++
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        In this chapter, we will compile a simple <b>C++ program</b> into
        WebAssembly <code>.wasm</code> using <b>emcc</b> (Emscripten).
        Then we will execute it inside a web browser using JavaScript.
      </p>

      {/* Example C++ Code */}
      <h2 className="text-2xl font-bold">Step 1 — Write the C++ Program</h2>

      <p className="leading-relaxed">
        Example C++ code to reverse a number:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`#include <iostream>

int reversenumber(int n) {
   int reverse = 0, rem;
   while (n != 0) {
      rem = n % 10;
      reverse = reverse * 10 + rem;
      n /= 10;
   }
   return reverse;
}`}
      </pre>

      <p className="leading-relaxed">
        Save this file as <code>reverse.cpp</code> inside your
        <b> cprog/</b> folder (inside your <b>emsdk</b> directory).
      </p>

      {/* Compilation Command */}
      <h2 className="text-2xl font-bold">Step 2 — Compile C++ to WebAssembly</h2>

      <p className="leading-relaxed">
        Use the following command to compile the C++ file into a standalone
        <code>.wasm</code> file:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`emcc reverse.cpp -s STANDALONE_WASM -o reverse.wasm`}
      </pre>

      <p className="leading-relaxed">
        The output will be a single file: <code>reverse.wasm</code>.
      </p>

      {/* HTML File */}
      <h2 className="text-2xl font-bold">Step 3 — Create HTML File</h2>

      <p className="leading-relaxed">
        Create a file named <code>reversenumber.html</code> to load and execute
        the WebAssembly module.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm overflow-x-auto">
{`<!doctype html>
<html>
   <head> 
      <meta charset="utf-8">
      <title>WebAssembly Reverse Number</title>
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
         let reverse;

         fetch("reverse.wasm")
            .then(bytes => bytes.arrayBuffer())
            .then(mod => WebAssembly.compile(mod))
            .then(module => new WebAssembly.Instance(module))
            .then(instance => {
               console.log(instance);

               // Call exported C++ function
               reverse = instance.exports._Z13reversenumberi(1439898);

               console.log("The reverse of 1439898 = " + reverse);
               document.getElementById("textcontent").innerHTML =
                  "The reverse of 1439898 = " + reverse;
            });
      </script>
   </body>
</html>`}
      </pre>

      {/* Explanation */}
      <h2 className="text-2xl font-bold">Step 4 — Understanding the Export</h2>

      <p className="leading-relaxed">
        When C++ is compiled, function names get <b>mangled</b>.
        That’s why the exported WebAssembly function is named:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`_Z13reversenumberi`}
      </pre>

      <p className="leading-relaxed">
        This corresponds to the original C++ function:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`int reversenumber(int n)`}
      </pre>

      {/* Output */}
      <h2 className="text-2xl font-bold">Output</h2>

      <p className="leading-relaxed">
        When you open <code>reversenumber.html</code> in a browser, you will see:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-center">
{`The reverse of 1439898 = 8989341`}
      </pre>

      <p className="leading-relaxed">
        Your reversed number is displayed in both the console and the webpage.
      </p>

    </div>
  );
};

export default WebAssemblyCpp;
