import React from "react";

const WebAssemblyRust: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        WebAssembly - Working with Rust
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        In this chapter, we will compile a Rust program into WebAssembly using{" "}
        <b>WebAssembly.studio</b>. This online tool allows you to quickly build
        and run Rust code compiled to <code>.wasm</code>.
      </p>

      {/* Steps */}
      <h2 className="text-2xl font-bold">Step 1 — Open WebAssembly Studio</h2>
      <p className="leading-relaxed">
        Visit:{" "}
        <code>https://github.com/wasdk/WebAssemblyStudio</code>.  
        Click <b>Empty Rust Project</b>.  
        You will see three files inside the <code>src/</code> folder.
      </p>

      <h2 className="text-2xl font-bold">Step 2 — Modify Rust Code</h2>
      <p className="leading-relaxed">
        Open <code>main.rs</code> and replace the default function with your own.
      </p>

      <p className="leading-relaxed">Original function:</p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`#[no_mangle]
pub extern "C" fn add_one(x: i32) -> i32 {
   x + 1
}`}
      </pre>

      <p className="leading-relaxed">Replace it with your custom function:</p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`#[no_mangle]
pub extern "C" fn add_ints(lhs: i32, rhs: i32) -> i32 {
   lhs + rhs
}`}
      </pre>

      {/* Modify JS */}
      <h2 className="text-2xl font-bold">Step 3 — Update JavaScript File</h2>
      <p className="leading-relaxed">
        Open <code>main.js</code> and update the exported function name.
      </p>

      <p className="leading-relaxed">Original code:</p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`fetch('../out/main.wasm').then(
   response => response.arrayBuffer()
).then(bytes => WebAssembly.instantiate(bytes)).then(results => {
   instance = results.instance;
   document.getElementById("container").textContent =
      instance.exports.add_one(41);
}).catch(console.error);`}
      </pre>

      <p className="leading-relaxed">Replace <code>add_one</code> with <code>add_ints</code>:</p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`fetch('../out/main.wasm').then(
   response => response.arrayBuffer()
).then(bytes => WebAssembly.instantiate(bytes)).then(results => {
   instance = results.instance;
   document.getElementById("container").textContent =
      instance.exports.add_ints(100, 100);
}).catch(console.error);`}
      </pre>

      {/* Build & Run */}
      <h2 className="text-2xl font-bold">Step 4 — Build the Project</h2>
      <p className="leading-relaxed">
        Click the <b>Build</b> button in WebAssembly.studio.  
        Once build completes, click the <b>Run</b> button.
      </p>

      <p className="leading-relaxed">
        Your program will run and display the output:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-center">
{`200`}
      </pre>

      <p className="leading-relaxed">
        This output comes from calling:  
        <code>instance.exports.add_ints(100, 100)</code>
      </p>

      {/* Conclusion */}
      <h2 className="text-2xl font-bold">You Can Try More Rust Programs</h2>
      <p className="leading-relaxed">
        WebAssembly.studio allows you to write and test any Rust function. Just
        define it with <code>#[no_mangle]</code> and export it for use in
        JavaScript.
      </p>
    </div>
  );
};

export default WebAssemblyRust;
