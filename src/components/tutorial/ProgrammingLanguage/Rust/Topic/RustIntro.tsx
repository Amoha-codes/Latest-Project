import React from "react";

const RustIntro: React.FC = () => (
  <div className="mt-20 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-3">
      Rust – Introduction
    </h1>

    {/* Introduction */}
    <p className="leading-relaxed">
      Rust is a systems-level programming language developed by Graydon Hoare
      and later supported by Mozilla Labs. It is designed to build reliable,
      fast, and secure software, from high-level applications down to
      hardware-specific programs.
    </p>

    {/* Application vs Systems Programming */}
    <h2 className="text-2xl font-bold mt-10">
      Application vs Systems Programming Languages
    </h2>

    <p className="leading-relaxed">
      Application programming languages like <strong>Java</strong> or{" "}
      <strong>C#</strong> are used to build software that directly interacts
      with users—such as spreadsheets, word processors, web apps, or mobile
      applications.
    </p>

    <p className="leading-relaxed">
      Systems programming languages like <strong>C</strong> or{" "}
      <strong>C++</strong> are used to build low-level software such as
      operating systems, compilers, and game engines. These languages require
      deep hardware interaction and tight memory control.
    </p>

    <p className="leading-relaxed">
      Both application and systems languages face two major challenges:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Writing secure code</li>
      <li>Writing multi-threaded, race-free code</li>
    </ul>

    {/* Why Rust */}
    <h2 className="text-2xl font-bold mt-10">Why Rust?</h2>

    <p className="leading-relaxed">Rust focuses on three key goals:</p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Safety</li>
      <li>Speed</li>
      <li>Concurrency</li>
    </ul>

    <p className="leading-relaxed">
      Rust enables developers to build highly reliable and efficient software in
      a simple and structured way. It scales from high-level applications down
      to performance-critical system components.
    </p>

    {/* Performance */}
    <h2 className="text-2xl font-bold mt-10">Performance</h2>
    <p className="leading-relaxed">
      Rust does not use a Garbage Collector (GC). This ensures predictable and
      high-performance execution, similar to languages like C and C++.
    </p>

    {/* Memory Safety */}
    <h2 className="text-2xl font-bold mt-10">Memory Safety at Compile Time</h2>
    <p className="leading-relaxed">
      Rust guarantees memory safety by preventing issues such as dangling
      pointers, buffer overflows, and memory leaks—all enforced at compile time
      through its ownership system.
    </p>

    {/* Multi-threading */}
    <h2 className="text-2xl font-bold mt-10">Multi-Threaded Applications</h2>
    <p className="leading-relaxed">
      Rust&apos;s ownership and borrowing rules ensure safe concurrency without
      data races, making it easier to write efficient multi-threaded programs.
    </p>

    {/* WASM */}
    <h2 className="text-2xl font-bold mt-10">Support for WebAssembly (WASM)</h2>
    <p className="leading-relaxed">
      Rust can compile to WebAssembly, allowing high-performance code to run in
      the browser, on embedded devices, and other platforms at near-native
      speed.
    </p>
  </div>
);

export default RustIntro;
