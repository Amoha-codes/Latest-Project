import React from "react";

const WebAssemblyDebugFirefox: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        WebAssembly - Debugging WASM in Firefox
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        WebAssembly support is available in all modern browsers like Chrome and
        Firefox. Starting from <b>Firefox version 54+</b>, developers get
        built-in debugging support for WebAssembly.
      </p>

      <p className="leading-relaxed">
        You can debug WebAssembly by running your WebAssembly-enabled webpage in
        the Firefox browser and using the built-in Developer Tools.
      </p>

      {/* C Example */}
      <h2 className="text-2xl font-bold">Example C Program</h2>
      <p className="leading-relaxed">
        Below is a simple C program that calculates the square of a number:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`#include<stdio.h>

int square(int n) {
   return n * n;
}`}
      </pre>

      <p className="leading-relaxed">
        Use tools like <b>WASM Explorer</b> to compile the above C code into
        WebAssembly.
      </p>

      {/* HTML Loader */}
      <h2 className="text-2xl font-bold">HTML File to Load the WASM Code</h2>
      <p className="leading-relaxed">
        After downloading the <code>.wasm</code> file, create an HTML file to
        load and execute it inside the browser:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black overflow-x-auto text-sm">
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

      {/* Debugging Section */}
      <h2 className="text-2xl font-bold">Debugging in Firefox</h2>
      <p className="leading-relaxed">
        Open the HTML file in Firefox. Then open the browser developer tools
        (F12 or Ctrl + Shift + I) and switch to the <b>Debugger</b> tab.
      </p>

      <p className="leading-relaxed">
        In the file list panel, you will notice an entry starting with{" "}
        <code>wasm://</code>. This represents your WebAssembly module.
      </p>

      <p className="leading-relaxed">
        Clicking on it will display the <b>WebAssembly text format (.wat)</b>{" "}
        generated from your <code>.wasm</code> file.
      </p>

      <h3 className="text-xl font-semibold">What You Can Do:</h3>

      <ul className="list-disc ml-6 space-y-2 leading-relaxed">
        <li>View the converted <code>.wat</code> representation of WebAssembly</li>
        <li>Inspect the exported functions</li>
        <li>Understand the execution flow</li>
        <li>Analyze the instructions and stack behavior</li>
      </ul>

      <p className="leading-relaxed">
        Firefox is also working toward supporting <b>breakpoints</b> for
        WebAssembly debugging, allowing you to step through execution just like
        JavaScript.
      </p>
    </div>
  );
};

export default WebAssemblyDebugFirefox;
