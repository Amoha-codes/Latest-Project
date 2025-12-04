import React from "react";

const WebAssemblyNodeJS: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        WebAssembly - Working with Node.js
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        WebAssembly is not limited to browsers — it also works seamlessly in{" "}
        <b>Node.js</b>. Node provides all required WebAssembly APIs, allowing
        you to run <code>.wasm</code> modules directly on the server.
      </p>

      {/* Step 1 */}
      <h2 className="text-2xl font-bold">Step 1 — Prepare a C++ Program</h2>

      <p className="leading-relaxed">
        We will use the following C++ <b>factorial</b> function and compile it
        into WebAssembly:
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
        Use <b>WASM Explorer</b> to compile this code into a <code>.wasm</code>{" "}
        file and download <b>factorial.wasm</b>.
      </p>

      {/* Step 2 */}
      <h2 className="text-2xl font-bold">Step 2 — Create a Node.js Script</h2>

      <p className="leading-relaxed">
        Create a file named <code>Factorialtest.js</code>:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`const fs = require('fs');

const buf = fs.readFileSync('./factorial.wasm');

WebAssembly.instantiate(new Uint8Array(buf)).then(res => {
   for (let i = 1; i <= 10; i++) {
      console.log(
         "The factorial of " + i + " = " +
         res.instance.exports._Z4facti(i)
      );
   }
});`}
      </pre>

      {/* Explanation */}
      <h2 className="text-2xl font-bold">How This Works</h2>

      <ul className="list-disc ml-6 space-y-2 leading-relaxed">
        <li>
          <code>fs.readFileSync()</code> loads the <code>.wasm</code> file.
        </li>
        <li>
          <code>WebAssembly.instantiate()</code> compiles & instantiates the
          WebAssembly module.
        </li>
        <li>
          The exported function <code>_Z4facti</code> is called from Node.js.
        </li>
      </ul>

      {/* Step 3 */}
      <h2 className="text-2xl font-bold">Step 3 — Run the Program</h2>

      <p className="leading-relaxed">Run the script using Node:</p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`node Factorialtest.js`}
      </pre>

      <h3 className="text-xl font-semibold">Output:</h3>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`The factorial of 1 = 1
The factorial of 2 = 2
The factorial of 3 = 6
The factorial of 4 = 24
The factorial of 5 = 120
The factorial of 6 = 720
The factorial of 7 = 5040
The factorial of 8 = 40320
The factorial of 9 = 362880
The factorial of 10 = 3628800`}
      </pre>

      {/* Conclusion */}
      <h2 className="text-2xl font-bold">Conclusion</h2>

      <p className="leading-relaxed">
        With just a few lines of JavaScript, Node.js can load, compile, and
        execute WebAssembly modules. This makes WebAssembly a powerful choice
        for high-performance server-side applications.
      </p>
    </div>
  );
};

export default WebAssemblyNodeJS;
