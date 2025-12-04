import React from "react";

const WebAssemblySecurity: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        WebAssembly - Security
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        According to the official WebAssembly documentation, the security model
        of WebAssembly focuses on two main goals:
      </p>

      <ul className="list-disc ml-6 space-y-2 leading-relaxed">
        <li><b>Protect users</b> from buggy or malicious WebAssembly modules.</li>
        <li>
          <b>Provide developers with secure building blocks</b> for creating safe
          applications.
        </li>
      </ul>

      <p className="leading-relaxed">
        Even though WebAssembly compiles high-level languages like C, C++, or
        Rust into <b>.wasm</b> binaries, this binary code is <b>not executed
        directly</b> by the browser.  
        It is always run through the <b>JavaScript WebAssembly API</b>, inside a
        secure sandbox.
      </p>

      {/* Sandbox Explanation */}
      <h2 className="text-2xl font-bold">WASM Sandbox Execution</h2>
      <p className="leading-relaxed">
        WebAssembly does not have direct access to the browser's environment.
        Instead:
      </p>

      <ul className="list-disc ml-6 space-y-1 leading-relaxed">
        <li>WebAssembly code runs inside a sandboxed memory environment.</li>
        <li>It can only interact with the outside world through JavaScript APIs.</li>
        <li>Browser security principles like Same-Origin Policy still apply.</li>
      </ul>

      <p className="leading-relaxed">
        This architecture ensures that WebAssembly modules behave safely and cannot
        access system resources directly.
      </p>

      {/* Example C Program */}
      <h2 className="text-2xl font-bold">Example: Loading a WASM File</h2>

      <p className="leading-relaxed">
        Consider this simple C program:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`#include <stdio.h>

int square(int n) {
   return n * n;
}`}
      </pre>

      <p className="leading-relaxed">
        Use WASM Explorer to compile the above C code into a <code>.wasm</code> file.
      </p>

      {/* JS Example */}
      <h3 className="text-xl font-semibold mt-4">JavaScript to Load & Execute WASM</h3>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black overflow-x-auto">
{`<script type="text/javascript"> 
   const importObj = { module: {} };

   fetch("findsquare.wasm")
      .then(bytes => bytes.arrayBuffer())
      .then(module => WebAssembly.instantiate(module, importObj))
      .then(finalcode => {
         console.log(finalcode);
         console.log(finalcode.instance.exports.square(25));
      });
</script>`}
      </pre>

      <p className="leading-relaxed">
        The exported function <code>square</code> can now be safely executed through:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`finalcode.instance.exports.square(25);`}
      </pre>

      {/* Issues Section */}
      <h2 className="text-2xl font-bold">Security Concerns with WASM</h2>

      <p className="leading-relaxed">
        Although WebAssembly is designed with security in mind, it also introduces new challenges:
      </p>

      <ul className="list-disc ml-6 space-y-2 leading-relaxed">
        <li>
          <b>No reliable tools</b> currently exist to detect whether malicious code
          has been inserted during compilation from C/C++/Rust to WASM.
        </li>
        <li>
          WASM binaries are harder to analyze than human-readable JavaScript, which
          makes detecting malicious behavior more difficult.
        </li>
        <li>
          Buggy or harmful WASM modules can still execute inside the browser sandbox
          if developers do not properly validate or inspect imported functions.
        </li>
      </ul>

      <p className="leading-relaxed">
        Despite these challenges, the sandbox model ensures that WebAssembly cannot
        escape into the system or access sensitive resources without explicit permissions.
      </p>

    </div>
  );
};

export default WebAssemblySecurity;
