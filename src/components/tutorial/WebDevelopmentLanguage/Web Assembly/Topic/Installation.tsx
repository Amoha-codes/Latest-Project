import React from "react";

const WebAssemblyInstallation: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        WebAssembly - Installation
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        In this chapter, we will learn how to install the{" "}
        <b>Emscripten SDK</b> to compile C/C++ into WebAssembly. Emscripten is
        an LLVM-based toolchain that converts C/C++ code into JavaScript or
        WebAssembly (<code>.wasm</code>) that can run inside the browser.
      </p>

      <p className="leading-relaxed">
        To compile C/C++ programs to WebAssembly, we must first install the{" "}
        <b>Emscripten SDK</b>.
      </p>

      {/* Installation Steps */}
      <h2 className="text-2xl font-bold">Install Emscripten SDK</h2>
      <p className="leading-relaxed">Follow the steps below to install Emscripten:</p>

      {/* Step 1 */}
      <h3 className="text-xl font-semibold">Step 1 — Clone the emsdk repository</h3>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`git clone https://github.com/emscripten-core/emsdk.git`}
      </pre>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`E:\\wa>git clone https://github.com/emscripten-core/emsdk.git 
Cloning into 'emsdk'... 
remote: Enumerating objects: 14, done. 
remote: Counting objects: 100% (14/14), done. 
remote: Compressing objects: 100% (12/12), done. 
remote: Total 1823 (delta 4), reused 4 (delta 2), pack-reused 1809 
Receiving objects: 100% (1823/1823), 1.01 MiB | 257.00 KiB/s, done. 
Resolving deltas: 100% (1152/1152), done.`}
      </pre>

      {/* Step 2 */}
      <h3 className="text-xl font-semibold">Step 2 — Enter the directory</h3>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`cd emsdk`}
      </pre>

      {/* Step 3 */}
      <h3 className="text-xl font-semibold">Step 3 — Install the latest SDK</h3>
      <p className="leading-relaxed">
        For <b>Windows</b>:
      </p>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`emsdk install latest`}
      </pre>

      <p className="leading-relaxed">
        For <b>Linux / macOS</b>:
      </p>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`./emsdk install latest`}
      </pre>

      {/* Step 4 */}
      <h3 className="text-xl font-semibold">Step 4 — Activate the latest SDK</h3>
      <p className="leading-relaxed">
        Windows:
      </p>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`emsdk activate latest`}
      </pre>

      <p className="leading-relaxed">
        Linux / macOS:
      </p>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`./emsdk activate latest`}
      </pre>

      {/* Step 5 */}
      <h3 className="text-xl font-semibold">
        Step 5 — Set PATH and environment variables
      </h3>
      <p className="leading-relaxed">Windows:</p>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`emsdk_env.bat`}
      </pre>

      <p className="leading-relaxed">Linux / macOS:</p>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`source ./emsdk_env.sh`}
      </pre>

      <p className="leading-relaxed">
        After completing these steps, Emscripten is fully installed and ready to
        compile C/C++ to WebAssembly.
      </p>

      {/* Compilation Commands */}
      <h2 className="text-2xl font-bold">Compile C/C++ Code</h2>
      <p className="leading-relaxed">
        To compile a C or C++ file into WebAssembly and generate HTML, JS, and
        WASM:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`emcc source.c -s WASM=1 -o source.html
# or
emcc source.cpp -s WASM=1 -o source.html`}
      </pre>

      <p className="leading-relaxed">
        This produces <b>source.html</b>, <b>source.js</b>, and{" "}
        <b>source.wasm</b>.  
        The JavaScript file contains the code needed to load and run the WASM
        module inside the browser.
      </p>

      <p className="leading-relaxed">
        To generate only a <code>.wasm</code> output (standalone):
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`emcc source.c -s STANDALONE_WASM
# or
emcc source.cpp -s STANDALONE_WASM`}
      </pre>
    </div>
  );
};

export default WebAssemblyInstallation;
