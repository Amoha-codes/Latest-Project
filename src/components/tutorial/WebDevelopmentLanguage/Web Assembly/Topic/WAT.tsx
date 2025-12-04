import React from "react";

const WebAssemblyWatToWasm: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        WebAssembly - Convert WAT to WASM
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        In the previous chapter, we learned how to write code in{" "}
        <b>.wat</b> (WebAssembly Text Format).  
        However, WAT cannot run directly in the browser — it must be compiled
        into the binary <b>.wasm</b> format.  
        In this chapter, we will convert a WAT file into a WASM file using
        WebAssembly Studio.
      </p>

      {/* WAT Code */}
      <h2 className="text-2xl font-bold">Sample WAT Code</h2>
      <p className="leading-relaxed">We will use the following WAT code:</p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`(module 
   (func $add (param $a i32) (param $b i32) (result i32) 
      get_local $a 
      get_local $b 
      i32.add
   ) 
   (export "add" (func $add)) 
)`}
      </pre>

      {/* Step 1 */}
      <h2 className="text-2xl font-bold">Step 1 — Open WebAssembly Studio</h2>
      <p className="leading-relaxed">
        Go to:{" "}
        <code>https://webassembly-studio.kamenokosoft.com/</code>
      </p>
      <p className="leading-relaxed">
        Choose <b>Empty WAT Project</b> and click <b>Create</b>.
      </p>

      {/* Step 2 */}
      <h2 className="text-2xl font-bold">Step 2 — Replace main.wat Content</h2>
      <p className="leading-relaxed">
        Open <b>main.wat</b> in the editor, delete the existing code, and paste
        your WAT code into it.  
        Click <b>Save</b>.
      </p>

      {/* Step 3 */}
      <h2 className="text-2xl font-bold">Step 3 — Build to Generate WASM</h2>
      <p className="leading-relaxed">
        Click on the <b>Build</b> button.  
        If successful, WebAssembly Studio will generate:
      </p>

      <ul className="list-disc ml-6 leading-relaxed">
        <li><b>main.wasm</b> — the compiled binary format</li>
      </ul>

      <p className="leading-relaxed">
        Download <b>main.wasm</b> to use it inside your HTML file.
      </p>

      {/* HTML Example */}
      <h2 className="text-2xl font-bold">Example — Using WASM in HTML</h2>

      <p className="leading-relaxed">
        After generating <code>main.wasm</code>, create an HTML file
        <b>add.html</b> to load and execute the WebAssembly function.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black overflow-x-auto">
{`<!doctype html>
<html>
   <head>
      <meta charset="utf-8">
      <title>WebAssembly Add Function</title>
   </head>
   <body>
      <script> 
         let sum;

         fetch("main.wasm")
            .then(bytes => bytes.arrayBuffer())
            .then(mod => WebAssembly.compile(mod))
            .then(module => {
               return new WebAssembly.Instance(module);
            })
            .then(instance => {
               sum = instance.exports.add(10, 40);
               console.log("The sum of 10 and 40 = " + sum);
            });
      </script>
   </body>
</html>`}
      </pre>

      <p className="leading-relaxed">
        The function <b>add</b> is exported from WebAssembly and takes two
        integers — here <b>10</b> and <b>40</b>.  
        The result (<b>50</b>) is printed in the browser console.
      </p>

      {/* Output */}
      <h2 className="text-2xl font-bold">Output</h2>
      <p className="leading-relaxed">
        When you open <b>add.html</b> in the browser, you will see:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`The sum of 10 and 40 = 50`}
      </pre>

    </div>
  );
};

export default WebAssemblyWatToWasm;
