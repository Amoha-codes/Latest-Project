import React from "react";

const WebAssemblyModules: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        WebAssembly - Modules
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        WebAssembly modules allow <b>.wasm</b> binary files to be compiled and
        executed inside the browser. In this chapter, we will use a C++
        factorial function, convert it into a WebAssembly module, and execute it
        using JavaScript.
      </p>

      {/* C++ Factorial Code */}
      <h2 className="text-2xl font-bold">C++ Factorial Code</h2>
      <p className="leading-relaxed">
        We start with the following recursive factorial function:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`int fact(int n) {
   if ((n == 0) || (n == 1))
      return 1;
   else
      return n * fact(n - 1);
}`}
      </pre>

      <p className="leading-relaxed">
        Open <b>WASM Explorer</b> at:
        <br />
        <code>https://mbebenita.github.io/WasmExplorer/</code>
      </p>

      {/* WAT Format */}
      <h2 className="text-2xl font-bold">WebAssembly Text Format</h2>
      <p className="leading-relaxed">WASM Explorer generates the following WAT output:</p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black overflow-x-auto text-sm">
{`(module
   (table 0 anyfunc)
   (memory $0 1)
   (export "memory" (memory $0))
   (export "_Z4facti" (func $_Z4facti))
   (func $_Z4facti (; 0 ;) (param $0 i32) (result i32)
      (local $1 i32)
      (set_local $1 (i32.const 1))
      (block $label$0
         (br_if $label$0
            (i32.eq
               (i32.or (get_local $0) (i32.const 1))
               (i32.const 1)
            )
         )
         (set_local $1 (i32.const 1))
         (loop $label$1
            (set_local $1
               (i32.mul (get_local $0) (get_local $1))
            )
            (br_if $label$1
               (i32.ne
                  (i32.or
                     (tee_local $0
                        (i32.add (get_local $0) (i32.const -1))
                     )
                     (i32.const 1)
                  )
                  (i32.const 1)
               )
            )
         )
      )
      (get_local $1)
   )
)`}
      </pre>

      <p className="leading-relaxed">
        The C++ function <code>fact</code> is exported as{" "}
        <code>_Z4facti</code> in WebAssembly.
      </p>

      <p className="leading-relaxed">
        Download the generated <b>factorial.wasm</b> file using the WASM
        Explorer download button.
      </p>

      {/* Steps */}
      <h2 className="text-2xl font-bold">Steps to Convert WASM into a Module</h2>

      <h3 className="text-xl font-semibold">Step 1 — Convert WASM to ArrayBuffer</h3>
      <p className="leading-relaxed">
        Use <code>fetch()</code> to load the file, then convert to ArrayBuffer:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`fetch("factorial.wasm")
   .then(bytes => bytes.arrayBuffer())`}
      </pre>

      <h3 className="text-xl font-semibold">Step 2 — Compile to a WebAssembly Module</h3>
      <p className="leading-relaxed">
        Use <code>WebAssembly.compile()</code> to convert bytes into a module:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`fetch("factorial.wasm")
   .then(bytes => bytes.arrayBuffer())
   .then(mod => WebAssembly.compile(mod))`}
      </pre>

      <p className="leading-relaxed">
        The <code>WebAssembly.compile()</code> function returns a{" "}
        <b>WebAssembly.Module</b> object.
      </p>

      {/* Complete Script */}
      <h2 className="text-2xl font-bold">Complete JavaScript Module Code</h2>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm overflow-x-auto">
{`<script type="text/javascript">
   let factorial;

   fetch("factorial.wasm")
      .then(bytes => bytes.arrayBuffer())
      .then(mod => WebAssembly.compile(mod))
      .then(module => { 
         return new WebAssembly.Instance(module);
      })
      .then(instance => {
         factorial = instance.exports._Z4facti;
         console.log('Test the output in Browser Console by using factorial(n)');
      });
</script>`}
      </pre>

      {/* Explanation */}
      <h2 className="text-2xl font-bold">Code Explanation</h2>
      <ul className="list-disc ml-6 space-y-2 leading-relaxed">
        <li><b>fetch()</b> loads the <code>factorial.wasm</code> file.</li>
        <li>
          <b>arrayBuffer()</b> converts the fetched data into raw bytes.
        </li>
        <li>
          <b>WebAssembly.compile()</b> compiles bytes into a WebAssembly
          Module.
        </li>
        <li>
          <b>WebAssembly.Instance</b> creates an instance of the compiled module.
        </li>
        <li>
          The exported WASM function <code>_Z4facti</code> is stored in{" "}
          <code>factorial</code>.
        </li>
      </ul>

      {/* Example HTML */}
      <h2 className="text-2xl font-bold">Example: module.html</h2>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm overflow-x-auto">
{`<!doctype html>
<html>
   <head>
      <meta charset="utf-8">
      <title>WebAssembly Module</title>
   </head>
   <body>
      <script>
         let factorial;
         fetch("factorial.wasm")
            .then(bytes => bytes.arrayBuffer())
            .then(mod => WebAssembly.compile(mod))
            .then(module => new WebAssembly.Instance(module))
            .then(instance => {
               factorial = instance.exports._Z4facti;
               console.log('Test using factorial(n) in the console');
            });
      </script>
   </body>
</html>`}
      </pre>

      <p className="leading-relaxed">
        Open <code>module.html</code> in your browser and use the console to test:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`factorial(5)   // Output: 120`}
      </pre>
    </div>
  );
};

export default WebAssemblyModules;
