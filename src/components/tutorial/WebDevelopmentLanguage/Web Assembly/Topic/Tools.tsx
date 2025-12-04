import React from "react";

const WebAssemblyTools: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        WebAssembly - Tools to Compile to WASM
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        This chapter discusses several easy-to-use tools that help compile code
        into WebAssembly (WASM). These tools support languages like C, C++,
        Rust, and WebAssembly text format (WAT), making development and testing
        much simpler.
      </p>

      {/* WebAssembly Studio */}
      <h2 className="text-2xl font-bold">WebAssembly.studio</h2>
      <p className="leading-relaxed">
        <b>WebAssembly.studio</b> is an online IDE that lets you compile{" "}
        <b>C</b>, <b>Rust</b>, and <b>WAT</b> into WebAssembly.
      </p>

      <p className="leading-relaxed">
        You can start by choosing:
      </p>

      <ul className="list-disc ml-6 space-y-1 leading-relaxed">
        <li>Empty C Project</li>
        <li>Empty Rust Project</li>
        <li>Empty WAT Project</li>
      </ul>

      <p className="leading-relaxed">
        The tool provides a <b>Build</b> and <b>Run</b> option to compile and
        execute your code. You can also download the <code>.wasm</code> output
        to test it directly inside a browser. This is one of the most convenient
        tools for quick WASM development.
      </p>

      {/* WebAssembly Explorer */}
      <h2 className="text-2xl font-bold">WebAssembly Explorer</h2>
      <p className="leading-relaxed">
        <b>WebAssembly Explorer</b> allows you to compile C and C++ code into
        WebAssembly. You can visit:
      </p>
      <p className="leading-relaxed">
        <code>https://mbebenita.github.io/WasmExplorer/</code>
      </p>

      <p className="leading-relaxed">
        You can choose the C or C++ version and enter your source code in the
        editor. After clicking the <b>Compile</b> button, the tool displays:
      </p>

      <ul className="list-disc ml-6 space-y-1 leading-relaxed">
        <li>WebAssembly text format (WAT)</li>
        <li>Firefox x86 Assembly output</li>
      </ul>

      <p className="leading-relaxed">
        You can also download the compiled <code>.wasm</code> file.
      </p>

      {/* WASMFiddle */}
      <h2 className="text-2xl font-bold">WASMFiddle</h2>
      <p className="leading-relaxed">
        <b>WASMFiddle</b> is another simple online tool for compiling C code to
        WebAssembly. Visit:
      </p>
      <p className="leading-relaxed">
        <code>https://wasmfiddle.com/</code>
      </p>

      <p className="leading-relaxed">
        Click on <b>Build</b> to compile your C program. You can download:
      </p>

      <ul className="list-disc ml-6 space-y-1 leading-relaxed">
        <li>WAT (text format)</li>
        <li>WASM (binary format)</li>
      </ul>

      <p className="leading-relaxed">
        The <b>Run</b> button lets you execute and test your compiled WebAssembly
        code directly in the tool.
      </p>

      {/* WASM to WAT */}
      <h2 className="text-2xl font-bold">WASM to WAT</h2>
      <p className="leading-relaxed">
        The tool <b>wasm2wat</b> converts WASM binary files into readable WAT
        format. You can try it online here:
      </p>
      <p className="leading-relaxed">
        <code>https://webassembly.github.io/wabt/demo/wasm2wat/</code>
      </p>

      <p className="leading-relaxed">
        Use the upload button to load a <code>.wasm</code> file and the tool
        will display the corresponding text (.wat) format.
      </p>

      {/* WAT to WASM */}
      <h2 className="text-2xl font-bold">WAT to WASM</h2>
      <p className="leading-relaxed">
        The tool <b>wat2wasm</b> converts WebAssembly text format into WASM
        binary. Try it here:
      </p>
      <p className="leading-relaxed">
        <code>https://webassembly.github.io/wabt/demo/wat2wasm/</code>
      </p>

      <p className="leading-relaxed">
        You can paste your WAT code, convert it to WASM, download the result,
        and even execute it in the browser. This tool is especially helpful for
        debugging and understanding how WebAssembly instructions behave.
      </p>
    </div>
  );
};

export default WebAssemblyTools;
