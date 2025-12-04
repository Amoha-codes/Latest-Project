import React from "react";

const WebAssemblyIntroduction: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        WebAssembly - Introduction
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        WebAssembly, also known as <b>WASM</b>, was first introduced in 2017.
        Major technology companies such as <b>Google</b>, <b>Apple</b>,{" "}
        <b>Microsoft</b>, <b>Mozilla</b>, and the <b>W3C</b> contributed to its
        development.
      </p>

      <p className="leading-relaxed">
        There has been a buzz that WebAssembly might replace JavaScript due to
        its faster execution speed — but this is not true. WebAssembly and
        JavaScript are designed to <b>work together</b> to solve complex,
        performance-heavy tasks.
      </p>

      {/* Need for WebAssembly */}
      <h2 className="text-2xl font-bold">Need for WebAssembly</h2>
      <p className="leading-relaxed">
        Until now, JavaScript has been the only language that could run inside a
        browser. However, many heavy tasks are difficult and slow to perform
        using JavaScript alone.
      </p>

      <p className="leading-relaxed">Examples include:</p>

      <ul className="list-disc ml-6 space-y-1 leading-relaxed">
        <li>Image recognition</li>
        <li>CAD (Computer-Aided Design) applications</li>
        <li>Live video augmentation</li>
        <li>Virtual Reality (VR) and Augmented Reality (AR)</li>
        <li>Music production and audio processing</li>
        <li>Scientific visualization and simulations</li>
        <li>Games</li>
        <li>Image and video editing</li>
      </ul>

      <p className="leading-relaxed">
        WebAssembly solves this by allowing high-level languages like{" "}
        <b>C</b>, <b>C++</b>, and <b>Rust</b> to be compiled into a binary
        format that loads and executes extremely fast in browsers.
      </p>

      <p className="leading-relaxed">
        When WebAssembly code loads in a browser, it is quickly compiled into
        machine code that the processor can directly understand.
      </p>

      <p className="leading-relaxed">
        JavaScript, on the other hand, must be downloaded, parsed, optimized,
        and then compiled — which makes heavy computations slower.
      </p>

      {/* Working of WebAssembly */}
      <h2 className="text-2xl font-bold">Working of WebAssembly</h2>
      <p className="leading-relaxed">
        High-level languages like C, C++, and Rust are compiled into:
      </p>

      <ul className="list-disc ml-6 space-y-1 leading-relaxed">
        <li><code>.wasm</code> — binary format</li>
        <li><code>.wat</code> — text format</li>
      </ul>

      <p className="leading-relaxed">
        The source code is compiled into <code>.wasm</code> using tools like the{" "}
        <b>Emscripten SDK</b> (for C/C++). The resulting WebAssembly module can
        then be used in JavaScript inside an HTML page.
      </p>

      {/* Flow Explanation */}
      <h3 className="text-xl font-semibold">Flow:</h3>
      <ul className="list-disc ml-6 space-y-2 leading-relaxed">
        <li>Write C/C++/Rust code</li>
        <li>Compile using tools like Emscripten → generates <code>.wasm</code></li>
        <li>Load <code>.wasm</code> in the browser using JavaScript</li>
        <li>Execute WebAssembly functions inside the webpage</li>
      </ul>

      {/* Key Concepts */}
      <h2 className="text-2xl font-bold">Key Concepts of WebAssembly</h2>

      {/* Module */}
      <h3 className="text-xl font-semibold">Module</h3>
      <p className="leading-relaxed">
        A module is a compiled WebAssembly binary that the browser converts into
        executable machine code. Modules are stateless and can be shared across
        windows and web workers.
      </p>

      {/* Memory */}
      <h3 className="text-xl font-semibold">Memory</h3>
      <p className="leading-relaxed">
        Memory in WebAssembly is an <code>ArrayBuffer</code> that stores raw
        data. You can allocate or modify memory using JavaScript APIs like{" "}
        <code>WebAssembly.Memory()</code>.
      </p>

      {/* Table */}
      <h3 className="text-xl font-semibold">Table</h3>
      <p className="leading-relaxed">
        A table stores references to functions or other objects. It exists
        outside of WebAssembly memory and is often used for things like indirect
        function calls.
      </p>

      {/* Instance */}
      <h3 className="text-xl font-semibold">Instance</h3>
      <p className="leading-relaxed">
        An instance is a WebAssembly module that has been executed. It contains
        all exported functions that can be called from JavaScript.
      </p>
    </div>
  );
};

export default WebAssemblyIntroduction;
