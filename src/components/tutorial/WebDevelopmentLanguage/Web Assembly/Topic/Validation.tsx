import React from "react";

const WebAssemblyValidation: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        WebAssembly - Validation
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        In this chapter, we explore the <b>WebAssembly.validate()</b> function,
        which is used to check whether the binary <code>.wasm</code> output is valid.
        This validation is useful after compiling languages like C, C++, or Rust
        into WebAssembly.
      </p>

      <p className="leading-relaxed">
        You can generate <code>.wasm</code> files using tools like:
      </p>

      <ul className="list-disc ml-6 leading-relaxed">
        <li>
          <b>WASM Fiddler</b> – https://anonyco.github.io/WasmFiddlePlusPlus/
        </li>
        <li>
          <b>WebAssembly Explorer</b> – https://anonyco.github.io/WasmFiddlePlusPlus/
        </li>
      </ul>

      {/* Syntax */}
      <h2 className="text-2xl font-bold">Syntax</h2>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`WebAssembly.validate(bufferSource);`}
      </pre>

      {/* Parameters */}
      <h3 className="text-xl font-semibold">Parameters</h3>
      <p className="leading-relaxed">
        <b>bufferSource</b> — The binary <code>.wasm</code> data, either as a
        <code>TypedArray</code> or an <code>ArrayBuffer</code>.
      </p>

      {/* Return Value */}
      <h3 className="text-xl font-semibold">Return Value</h3>
      <p className="leading-relaxed">
        Returns <b>true</b> if the given WebAssembly binary is valid.
        <br />
        Returns <b>false</b> otherwise.
      </p>

      {/* Example */}
      <h2 className="text-2xl font-bold">Example</h2>

      <p className="leading-relaxed">
        Generate a <code>.wasm</code> file using Wasm Fiddler, download it, and
        place it alongside a simple HTML file (e.g., <b>validate.html</b>).  
        This code will validate whether the WASM file is correct.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black overflow-x-auto text-sm">
{`<!doctype html>
<html>
   <head> 
      <meta charset="utf-8">
      <title>Testing WASM validate()</title>
   </head>
   <body>
      <script> 
         fetch('program.wasm')
            .then(res => res.arrayBuffer())
            .then(function(testbytes) {
               var valid = WebAssembly.validate(testbytes); 
               if (valid) {
                  console.log("Valid Wasm Bytes!");
               } else {
                  console.log("Invalid Wasm Code!");
               }
            });
      </script> 
   </body>
</html>`}
      </pre>

      {/* Output */}
      <h2 className="text-2xl font-bold">Output</h2>
      <p className="leading-relaxed">
        When tested in a browser (e.g., hosted via local server such as WAMP),
        the console will display:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`Valid Wasm Bytes!`}
      </pre>

      <p className="leading-relaxed">
        This confirms that the downloaded <code>.wasm</code> file is valid and
        ready to be instantiated or executed using the WebAssembly JavaScript API.
      </p>

    </div>
  );
};

export default WebAssemblyValidation;
