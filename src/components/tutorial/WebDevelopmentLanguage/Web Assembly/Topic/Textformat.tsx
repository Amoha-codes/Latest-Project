import React from "react";

const WebAssemblyTextFormat: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        WebAssembly - Text Format (WAT)
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        WebAssembly is typically represented in a binary format called{" "}
        <b>.wasm</b>. However, WebAssembly also supports a human-readable text
        format called <b>WAT</b> (WebAssembly Text Format).  
        Developers normally do not write WebAssembly manually — instead, they
        compile high-level languages like C, C++, or Rust into WebAssembly.
      </p>

      {/* Step 1 */}
      <h2 className="text-2xl font-bold">Step 1 — Module Declaration</h2>
      <p className="leading-relaxed">
        Every WAT file begins with a module:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`(module)`}
      </pre>

      {/* Step 2 */}
      <h2 className="text-2xl font-bold">Step 2 — Adding a Function</h2>
      <p className="leading-relaxed">
        A function is declared using the <code>func</code> keyword:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`(func <parameters/result> <locals> <function body>)`}
      </pre>

      {/* Parameter Types */}
      <h3 className="text-xl font-semibold">Parameter & Result Types</h3>
      <p className="leading-relaxed">
        WASM supports these basic value types:
      </p>

      <ul className="list-disc ml-6 leading-relaxed">
        <li>i32 — 32-bit integer</li>
        <li>i64 — 64-bit integer</li>
        <li>f32 — 32-bit floating point</li>
        <li>f64 — 64-bit floating point</li>
      </ul>

      <p className="leading-relaxed">Examples:</p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`(param i32)
(param f64)
(result i32)`}
      </pre>

      <p className="leading-relaxed">Full function signature:</p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`(func (param i32) (param i32) (result i64) <body>)`}
      </pre>

      {/* Local Variables */}
      <h3 className="text-xl font-semibold">Local Variables</h3>

      <p className="leading-relaxed">
        Local variables are declared using <code>local</code>:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`(local i32)`}
      </pre>

      <p className="leading-relaxed">
        Full function with locals:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`(func (param i32) (param i32) (local i32) (result i64) <body>)`}
      </pre>

      {/* Step 3 */}
      <h2 className="text-2xl font-bold">Step 3 — Accessing Parameters & Locals</h2>

      <p className="leading-relaxed">
        Use <code>get_local</code> and <code>set_local</code>:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`get_local 0
get_local 1
get_local 2`}
      </pre>

      <p className="leading-relaxed">
        You can also use **named variables**:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`(module
  (func
    (param $a i32)
    (param $b i32)
    (local $c i32)
    (result i64)
    get_local $a
    get_local $b
    get_local $c
  )
)`}
      </pre>

      {/* Step 4 */}
      <h2 className="text-2xl font-bold">Step 4 — Instructions and Stack Execution</h2>
      <p className="leading-relaxed">
        WASM uses a <b>stack-based</b> execution model.  
        Each instruction pushes or pops values from the stack.
      </p>

      <p className="leading-relaxed">
        Example: adding two integers
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`(func (param $a i32) (param $b i32) (result i32)
   get_local $a
   get_local $b
   i32.add
)`}
      </pre>

      <p className="leading-relaxed">
        The stack ends with a single value — the function result.
      </p>

      {/* Step 5 */}
      <h2 className="text-2xl font-bold">Step 5 — Exporting the Function</h2>

      <p className="leading-relaxed">
        To call a function from JavaScript, it must be exported:
      </p>

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

      <p className="leading-relaxed">
        This can now be compiled into <code>.wasm</code> using tools like Wabt or online tools.
      </p>

    </div>
  );
};

export default WebAssemblyTextFormat;
