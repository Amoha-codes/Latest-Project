import React from "react";

const WebAssemblyHelloWorld: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        WebAssembly - "Hello World"
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        In this chapter, we will write a simple C program, compile it into a
        <code>.wasm</code> file, and execute it in the browser to display the 
        text <b>"Hello World"</b>.  
        We will use the online tool <b>WASM Explorer</b> to compile the C code 
        into WebAssembly.
      </p>

      {/* C Code */}
      <h2 className="text-2xl font-bold">C Code</h2>
      <p className="leading-relaxed">The C code we will compile is:</p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`#include <stdio.h>

char *c_hello() {
   return "Hello World"; 
}`}
      </pre>

      <p className="leading-relaxed">
        Paste this code into WASM Explorer and click <b>COMPILE</b> to generate
        the <code>.wasm</code>, WAT, and assembly views.
      </p>

      <p className="leading-relaxed">
        Download the compiled WebAssembly file and save it as:
        <br />
        <code>firstprog.wasm</code>
      </p>

      {/* HTML Structure */}
      <h2 className="text-2xl font-bold">Create firstprog.html</h2>
      <p className="leading-relaxed">
        Next, create an HTML file that will load and execute the WebAssembly
        module:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm overflow-x-auto">
{`<!doctype html>
<html>
   <head>
      <meta charset="utf-8"> 
      <title>WebAssembly Hello World</title> 
   </head> 
   <body>
      <div id="textcontent"></div>     
      <script type="text/javascript"> 
         // Your WebAssembly code goes here
      </script> 
   </body>
</html>`}
      </pre>

      {/* Steps */}
      <h2 className="text-2xl font-bold">Steps to Load the WASM File</h2>

      <h3 className="text-xl font-semibold">Step 1 — Fetch the WASM File</h3>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`fetch("firstprog.wasm")
   .then(bytes => bytes.arrayBuffer())`}
      </pre>

      <h3 className="text-xl font-semibold">Step 2 — Convert to ArrayBuffer</h3>
      <p className="leading-relaxed">
        <code>ArrayBuffer</code> converts the binary file into raw memory bytes.
      </p>

      <h3 className="text-xl font-semibold">Step 3 — Compile the Module</h3>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`fetch("firstprog.wasm")
   .then(bytes => bytes.arrayBuffer())
   .then(mod => WebAssembly.compile(mod))`}
      </pre>

      <h3 className="text-xl font-semibold">Step 4 — Create an Instance</h3>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`fetch("firstprog.wasm")
   .then(bytes => bytes.arrayBuffer())
   .then(mod => WebAssembly.compile(mod))
   .then(module => new WebAssembly.Instance(module))`}
      </pre>

      <h3 className="text-xl font-semibold">Step 5 — Log the Instance</h3>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm overflow-x-auto">
{`fetch("firstprog.wasm")
   .then(bytes => bytes.arrayBuffer())
   .then(mod => WebAssembly.compile(mod))
   .then(module => new WebAssembly.Instance(module))
   .then(instance => {
      console.log(instance);
   });`}
      </pre>

      {/* Reading Memory */}
      <h2 className="text-2xl font-bold">Reading "Hello World" from Memory</h2>

      <p className="leading-relaxed">
        The exported C function <code>c_hello()</code> returns a pointer to a
        string inside WebAssembly linear memory.  
        To read this string, follow these steps:
      </p>

      <ul className="list-disc ml-6 space-y-2 leading-relaxed">
        <li>Access memory buffer using <code>instance.exports.memory.buffer</code></li>
        <li>Convert buffer → <code>Uint8Array</code></li>
        <li>Call <code>c_hello()</code> to get the starting address</li>
        <li>Read characters until the null terminator</li>
        <li>Convert integers to characters using <code>String.fromCharCode</code></li>
      </ul>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black overflow-x-auto text-sm">
{`let buffer = new Uint8Array(instance.exports.memory.buffer);
let start = instance.exports.c_hello();

let mytext = "";

for (let i = start; buffer[i]; i++) {
   mytext += String.fromCharCode(buffer[i]);
}

console.log(mytext);`}
      </pre>

      {/* Full Example */}
      <h2 className="text-2xl font-bold">Complete Example</h2>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black overflow-x-auto text-sm">
{`<!doctype html> 
<html> 
   <head> 
      <meta charset="utf-8"> 
      <title>WebAssembly Hello World</title>
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
         fetch("firstprog.wasm")
            .then(bytes => bytes.arrayBuffer())
            .then(mod => WebAssembly.compile(mod))
            .then(module => new WebAssembly.Instance(module))
            .then(instance => {
               console.log(instance);

               let buffer = new Uint8Array(instance.exports.memory.buffer);
               let start = instance.exports.c_hello();

               let mytext = "";
               for (let i = start; buffer[i]; i++) {
                  mytext += String.fromCharCode(buffer[i]);
               }

               console.log(mytext);
               document.getElementById("textcontent").innerHTML = mytext;
            });
      </script>
   </body>
</html>`}
      </pre>

      <p className="leading-relaxed">
        The above HTML loads the WebAssembly module, extracts the string from 
        memory, and displays <b>Hello World</b> on the browser.
      </p>

      <h2 className="text-2xl font-bold">Output</h2>
      <p className="leading-relaxed font-semibold text-orange-600 text-2xl">
        Hello World
      </p>

    </div>
  );
};

export default WebAssemblyHelloWorld;
