
import React from "react";

const WebAssemblyDynamicLinking: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        WebAssembly - Dynamic Linking
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        Dynamic linking is the process where two or more WebAssembly modules are
        linked together at <b>runtime</b>.  
        In this chapter, we use C programs compiled using the Emscripten SDK to
        demonstrate how dynamic linking works in WebAssembly.
      </p>

      {/* C Programs */}
      <h2 className="text-2xl font-bold">C Source Files</h2>

      <h3 className="text-xl font-semibold">test1.c</h3>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`int test1() { 
   return 100; 
}`}
      </pre>

      <h3 className="text-xl font-semibold">test2.c</h3>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`int test2() { 
   return 200; 
}`}
      </pre>

      <h3 className="text-xl font-semibold">main.c</h3>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`#include <stdio.h>

int test1(); 
int test2();

int main() { 
   int result = test1() + test2(); 
   return result; 
}`}
      </pre>

      {/* Compiling */}
      <h2 className="text-2xl font-bold">Compiling with Dynamic Linking</h2>

      <p className="leading-relaxed">
        To compile and dynamically link these modules, Emscripten uses the
        option <code>-s SIDE_MODULE=1</code>.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`emcc test1.c test2.c main.c -s SIDE_MODULE=1 -o maintest.wasm`}
      </pre>

      <p className="leading-relaxed">
        After compilation, you can convert the <code>.wasm</code> file into
        WAT using wasm2wat:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`https://webassembly.github.io/wabt/demo/wasm2wat/`}
      </pre>

      {/* Import Explanation */}
      <h2 className="text-2xl font-bold">Module Imports</h2>

      <p className="leading-relaxed">
        The compiled WebAssembly module contains several imports added by
        Emscripten. These include stack management and memory / table
        configuration.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`(import "env" "stackSave"      (func $env.stackSave (type $t0)))
(import "env" "stackRestore"  (func $env.stackRestore (type $t2)))
(import "env" "__memory_base" (global $env.__memory_base i32))
(import "env" "__table_base"  (global $env.__table_base i32))
(import "env" "memory"        (memory $env.memory 0))
(import "env" "table"         (table $env.table 0 funcref))`}
      </pre>

      <p className="leading-relaxed">These imports are used for:</p>

      <ul className="list-disc ml-6 leading-relaxed space-y-1">
        <li><b>env.stackSave</b> — stack management</li>
        <li><b>env.stackRestore</b> — stack management</li>
        <li><b>env.__memory_base</b> — memory offset for data segments</li>
        <li><b>env.__table_base</b> — table offset for function references</li>
        <li><b>env.memory</b> — shared memory buffer</li>
        <li><b>env.table</b> — shared function table</li>
      </ul>

      {/* Import Object */}
      <h2 className="text-2xl font-bold">Defining Imports in JavaScript</h2>

      <p className="leading-relaxed">
        We must define these imports in JavaScript when instantiating the WASM
        module:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black overflow-x-auto">
{`var wasmMemory = new WebAssembly.Memory({
  initial: 256,
  maximum: 65536
});

const importObj = {
  env: {
    stackSave: n => 2,
    stackRestore: n => 3,
    table: new WebAssembly.Table({
      initial: 0,
      maximum: 65536,
      element: 'anyfunc'
    }),
    __table_base: 0,
    memory: wasmMemory,
    __memory_base: 256
  }
};`}
      </pre>

      {/* Example */}
      <h2 className="text-2xl font-bold">Example — Using Dynamic Linking</h2>

      <p className="leading-relaxed">
        Below is the JavaScript code that loads and executes the dynamically
        linked WebAssembly module:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black overflow-x-auto text-sm">
{`<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <script>
      var wasmMemory = new WebAssembly.Memory({ initial: 256, maximum: 65536 });

      const importObj = {
        env: {
          stackSave: n => 2,
          stackRestore: n => 3,
          table: new WebAssembly.Table({
            initial: 0,
            maximum: 65536,
            element: 'anyfunc'
          }),
          __table_base: 0,
          memory: wasmMemory,
          __memory_base: 256
        }
      };

      fetch("maintest.wasm")
        .then(bytes => bytes.arrayBuffer())
        .then(module => WebAssembly.instantiate(module, importObj))
        .then(finalcode => {
          console.log(finalcode);
          console.log(WebAssembly.Module.imports(finalcode.module));
          console.log(finalcode.instance.exports.test1());
          console.log(finalcode.instance.exports.test2());
          console.log(finalcode.instance.exports.main());
        });
    </script>
  </body>
</html>`}
      </pre>

      {/* Summary */}
      <h2 className="text-2xl font-bold">Summary</h2>
      <p className="leading-relaxed">
        Dynamic linking in WebAssembly allows multiple compiled modules to be
        combined at runtime. Emscripten provides helpful tooling to enable this
        by generating necessary imports, stack management, memory segments, and
        table structures.  
        Once imported properly in JavaScript, the linked modules behave like a
        single executable WASM module.
      </p>

    </div>
  );
};

export default WebAssemblyDynamicLinking;
