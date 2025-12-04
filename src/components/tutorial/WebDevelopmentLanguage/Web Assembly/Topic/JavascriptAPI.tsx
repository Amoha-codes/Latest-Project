import React from "react";

const WebAssemblyJavaScriptAPI: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        WebAssembly - JavaScript API
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        In this chapter, we will learn how to load and execute WebAssembly
        (<code>.wasm</code>) files in the browser using JavaScript WebAssembly APIs.
      </p>

      <p className="leading-relaxed">
        We will use the following APIs throughout this tutorial:
      </p>

      <ul className="list-disc ml-6 space-y-1 leading-relaxed">
        <li><b>fetch()</b> – to load <code>.wasm</code> files</li>
        <li><b>WebAssembly.compile</b></li>
        <li><b>WebAssembly.Instance</b></li>
        <li><b>WebAssembly.instantiate</b></li>
        <li><b>WebAssembly.instantiateStreaming</b></li>
      </ul>

      {/* Example C Program */}
      <h2 className="text-2xl font-bold">Example C Program</h2>
      <p className="leading-relaxed">
        We will use a simple C function to demonstrate the WebAssembly APIs:
      </p>

      <pre className="bg-gray-100 p-3 font-mono rounded-md text-black">
{`#include<stdio.h>
int square(int n) { 
   return n * n; 
}`}
      </pre>

      <p className="leading-relaxed">
        Use <b>WASM Explorer</b> to compile the above C code and download the
        resulting <code>.wasm</code> file.
      </p>

      {/* fetch() */}
      <h2 className="text-2xl font-bold">fetch() Browser API</h2>
      <p className="leading-relaxed">
        The <code>fetch()</code> API is used to load the <code>.wasm</code> file
        from the server.
      </p>

      <pre className="bg-gray-100 p-3 font-mono rounded-md text-black">
{`<script>
   var result = fetch("findsquare.wasm");
   console.log(result);
</script>`}
      </pre>

      <p className="leading-relaxed">It returns a promise containing the response data.</p>

      {/* WebAssembly.compile */}
      <h2 className="text-2xl font-bold">WebAssembly.compile()</h2>
      <p className="leading-relaxed">
        This API compiles the binary WebAssembly bytes into a compiled module.
      </p>

      <h3 className="text-xl font-semibold">Syntax</h3>
      <pre className="bg-gray-100 p-3 font-mono rounded-md text-black">
{`WebAssembly.compile(buffer);`}
      </pre>

      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 p-3 font-mono rounded-md text-black text-sm">
{`<script> 
   fetch("findsquare.wasm")
      .then(bytes => bytes.arrayBuffer()) 
      .then(mod => {
         var compiledmod = WebAssembly.compile(mod);
         compiledmod.then(result => {
            console.log(result);
         })
      })
</script>`}
      </pre>

      {/* WebAssembly.Instance */}
      <h2 className="text-2xl font-bold">WebAssembly.Instance</h2>
      <p className="leading-relaxed">
        This API creates an executable instance from a compiled module.
      </p>

      <h3 className="text-xl font-semibold">Syntax</h3>
      <pre className="bg-gray-100 p-3 font-mono rounded-md text-black">
{`new WebAssembly.Instance(module);`}
      </pre>

      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 p-3 font-mono rounded-md text-black text-sm">
{`<script> 
   fetch("findsquare.wasm")
      .then(bytes => bytes.arrayBuffer())
      .then(mod => WebAssembly.compile(mod))
      .then(module => {
         let instance = new WebAssembly.Instance(module);
         console.log(instance); 
      })
</script>`}
      </pre>

      <p className="leading-relaxed">
        You can now call exported functions:
      </p>

      <pre className="bg-gray-100 p-3 font-mono rounded-md text-black">
{`instance.exports.square(15); // returns 225`}
      </pre>

      {/* WebAssembly.instantiate */}
      <h2 className="text-2xl font-bold">WebAssembly.instantiate</h2>
      <p className="leading-relaxed">
        This API compiles and instantiates the module in a single step.
      </p>

      <h3 className="text-xl font-semibold">Syntax</h3>
      <pre className="bg-gray-100 p-3 font-mono rounded-md text-black">
{`WebAssembly.instantiate(arraybuffer, importObject);`}
      </pre>

      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 p-3 font-mono rounded-md text-black text-sm">
{`<script type="text/javascript">
   const importObj = { module: {} };

   fetch("findsquare.wasm")
      .then(bytes => bytes.arrayBuffer())
      .then(buffer => WebAssembly.instantiate(buffer, importObj))
      .then(finalcode => { 
         console.log(finalcode);
         console.log(finalcode.instance.exports.square(25)); 
      });
</script>`}
      </pre>

      {/* WebAssembly.instantiateStreaming */}
      <h2 className="text-2xl font-bold">WebAssembly.instantiateStreaming</h2>
      <p className="leading-relaxed">
        This API compiles and instantiates the module directly from a streamed
        response without needing <code>arrayBuffer()</code>.
      </p>

      <h3 className="text-xl font-semibold">Syntax</h3>
      <pre className="bg-gray-100 p-3 font-mono rounded-md text-black">
{`WebAssembly.instantiateStreaming(fetch("file.wasm"), importObject);`}
      </pre>

      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 p-3 font-mono rounded-md text-black text-sm">
{`<script type="text/javascript">     
   const importObj = { module: {} };

   WebAssembly.instantiateStreaming(fetch("findsquare.wasm"), importObj)
      .then(obj => {
         console.log(obj);
      });
</script>`}
      </pre>

      <p className="leading-relaxed text-red-600 font-semibold">
        Note: This API requires the server to return <b>application/wasm</b>
        MIME type, otherwise it will throw an error.
      </p>

      <p className="leading-relaxed">
        If the server does not support the WASM MIME type, use{" "}
        <code>WebAssembly.instantiate(arraybuffer)</code> instead.
      </p>
    </div>
  );
};

export default WebAssemblyJavaScriptAPI;
