import React from "react";

const WebAssemblyHome: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        WebAssembly Tutorial
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        WebAssembly (WASM) is a low-level, binary instruction format designed 
        to run at near-native speed on the web. Unlike JavaScript, it is not 
        written manually — instead, code from languages like <b>C</b>, <b>C++</b>, 
        <b>Rust</b>, and <b>Go</b> is compiled into WebAssembly. Modern browsers 
        can load and execute WASM extremely fast because of its small file size 
        and efficient binary format.
      </p>

      {/* Audience Section */}
      <h2 className="text-2xl font-bold">Audience</h2>
      <p className="leading-relaxed">
        This tutorial is designed for software developers who want to learn the 
        foundations of WebAssembly in a simple, practical way. After completing 
        it, you will have a clear understanding of how WebAssembly works and how 
        to integrate it with JavaScript.
      </p>

      {/* Prerequisites */}
      <h2 className="text-2xl font-bold">Prerequisites</h2>
      <p className="leading-relaxed">
        Before starting this tutorial, you should have:
      </p>
      <ul className="list-disc ml-6 space-y-1 leading-relaxed">
        <li>Basic knowledge of JavaScript</li>
        <li>Experience with at least one compiled language (C, C++, Rust, Go)</li>
        <li>Understanding of how web apps run in the browser</li>
      </ul>

      {/* Example Code */}
      <h2 className="text-2xl font-bold">Simple WebAssembly Example</h2>
      <p className="leading-relaxed">
        Here is a minimal example showing how WebAssembly can be loaded in JavaScript:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`fetch("module.wasm")
  .then(response => response.arrayBuffer())
  .then(bytes => WebAssembly.instantiate(bytes))
  .then(result => {
    console.log("WASM loaded");
    console.log(result.instance.exports.add(5, 3)); // example exported function
  });`}
      </pre>

      {/* Summary */}
      <p className="leading-relaxed">
        WebAssembly enables high-performance execution inside the browser, making 
        it ideal for tasks like game engines, video processing, 3D rendering, 
        simulations, and more — all running at near-native speed.
      </p>
    </div>
  );
};

export default WebAssemblyHome;
