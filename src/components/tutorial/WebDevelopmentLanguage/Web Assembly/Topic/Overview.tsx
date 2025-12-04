import React from "react";

const WebAssemblyOverview: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        WebAssembly - Overview
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        WebAssembly (Wasm) is a new low-level binary format designed for the
        web. It runs efficiently in modern browsers, offering near-native
        performance. High-level languages like <b>C</b>, <b>C++</b>,
        <b>Rust</b>, and <b>Go</b> can be compiled into WebAssembly and executed
        in the browser just like JavaScript. The compiled binary files are small
        in size, enabling faster loading and execution.
      </p>

      {/* Definition */}
      <h2 className="text-2xl font-bold">Definition of WebAssembly</h2>
      <p className="leading-relaxed">
        As defined on the official WebAssembly website:
      </p>
      <blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-700">
        WebAssembly (abbreviated Wasm) is a binary instruction format for a
        stack-based virtual machine. It is designed as a portable compilation
        target for high-level languages like C/C++/Rust, enabling deployment on
        the web for both client and server applications.
      </blockquote>

      <p className="leading-relaxed">
        WebAssembly is not typically written manually. Developers write code in
        high-level languages, which is then compiled into <code>.wasm</code>{" "}
        files. These binaries can run inside all major browsers, making it easy
        to bring high-performance native code to the web.
      </p>

      <p className="leading-relaxed">
        Although Wasm is low-level like assembly, it comes with a text format
        that makes reading and debugging the code possible when needed.
      </p>

      {/* Goals */}
      <h2 className="text-2xl font-bold">Goals of WebAssembly</h2>
      <p className="leading-relaxed">
        WebAssembly is being developed by an open W3C Community Group that
        includes members from all major browser vendors. Its primary goals are:
      </p>

      <ul className="list-disc ml-6 space-y-2 leading-relaxed">
        <li>
          <b>Faster, Efficient, and Portable</b> – Designed to run efficiently
          across different environments, making full use of available hardware.
        </li>
        <li>
          <b>Easy to Read and Debug</b> – Despite being low-level, Wasm includes
          a readable text format for debugging and rewriting code.
        </li>
        <li>
          <b>Security</b> – WebAssembly enforces browser security policies like
          the same-origin rule, making it safe to execute on the web.
        </li>
      </ul>

      {/* Advantages */}
      <h2 className="text-2xl font-bold">Advantages of WebAssembly</h2>
      <ul className="list-disc ml-6 space-y-2 leading-relaxed">
        <li>
          <b>Runs in Modern Browsers</b> – All major browsers support WebAssembly
          natively.
        </li>
        <li>
          <b>Multiple Language Support</b> – Code written in C, C++, Rust, Go,
          and others can be compiled to WebAssembly.
        </li>
        <li>
          <b>Fast and Efficient</b> – Small binary files allow faster loading and
          execution.
        </li>
        <li>
          <b>Easy for Developers</b> – You don't write Wasm manually; you just
          compile your existing code.
        </li>
        <li>
          <b>Easy to Debug</b> – Text format makes low-level code readable when
          debugging.
        </li>
      </ul>

      {/* Disadvantages */}
      <h2 className="text-2xl font-bold">Disadvantages of WebAssembly</h2>
      <ul className="list-disc ml-6 space-y-2 leading-relaxed">
        <li>
          WebAssembly is still evolving, and its long-term ecosystem is under
          development.
        </li>
        <li>
          WebAssembly relies on JavaScript to interact with the browser DOM,
          since Wasm itself cannot manipulate the DOM directly.
        </li>
      </ul>
    </div>
  );
};

export default WebAssemblyOverview;
