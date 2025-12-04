import React from "react";

const WebAssemblyProgramStructure: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        WebAssembly - Program Structure
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        WebAssembly (WASM) is a binary low-level code format designed to execute
        very efficiently inside web browsers. A WebAssembly program is organized
        using the following core concepts:
      </p>

      <ul className="list-disc ml-6 leading-relaxed">
        <li>Values</li>
        <li>Types</li>
        <li>Instructions</li>
      </ul>

      <p className="leading-relaxed">Let us explore them in detail.</p>

      {/* Values */}
      <h2 className="text-2xl font-bold">Values</h2>
      <p className="leading-relaxed">
        Values in WebAssembly represent data such as numbers, bytes, names, and
        vectors. WebAssembly supports the following kinds of values:
      </p>

      <ul className="list-disc ml-6 space-y-1 leading-relaxed">
        <li>Bytes</li>
        <li>Integers</li>
        <li>Floating point numbers</li>
        <li>Names</li>
      </ul>

      {/* Bytes */}
      <h3 className="text-xl font-semibold">Bytes</h3>
      <p className="leading-relaxed">
        Bytes are the simplest form of values in WebAssembly. They are
        represented as hexadecimal values.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`byte ::= 0x00 | ... | 0xFF`}
      </pre>

      <p className="leading-relaxed">
        Bytes may also include natural numbers <code>n</code> where{" "}
        <code>n &lt; 256</code>.
      </p>

      {/* Integers */}
      <h3 className="text-xl font-semibold">Integers</h3>
      <p className="leading-relaxed">Supported integer types are:</p>

      <ul className="list-disc ml-6 leading-relaxed">
        <li><b>i32</b> – 32-bit integer</li>
        <li><b>i64</b> – 64-bit integer</li>
      </ul>

      {/* Floating Point */}
      <h3 className="text-xl font-semibold">Floating Point</h3>
      <p className="leading-relaxed">Floating point numbers include:</p>

      <ul className="list-disc ml-6 leading-relaxed">
        <li><b>f32</b> – 32-bit floating point</li>
        <li><b>f64</b> – 64-bit floating point</li>
      </ul>

      {/* Names */}
      <h3 className="text-xl font-semibold">Names</h3>
      <p className="leading-relaxed">
        Names are sequences of Unicode characters, as described in the Unicode
        standard:
      </p>
      <p className="leading-relaxed">
        <code>http://www.unicode.org/versions/Unicode12.1.0/</code>
      </p>

      {/* Types */}
      <h2 className="text-2xl font-bold">Types</h2>
      <p className="leading-relaxed">
        WebAssembly entities are categorized into different types. These include:
      </p>

      <ul className="list-disc ml-6 space-y-1 leading-relaxed">
        <li>Value Types</li>
        <li>Result Types</li>
        <li>Function Types</li>
        <li>Limits</li>
        <li>Memory Types</li>
        <li>Table Types</li>
        <li>Global Types</li>
        <li>External Types</li>
      </ul>

      {/* Value Types */}
      <h3 className="text-xl font-semibold">Value Types</h3>
      <p className="leading-relaxed">WebAssembly supports the following types:</p>

      <ul className="list-disc ml-6 leading-relaxed">
        <li>i32</li>
        <li>i64</li>
        <li>f32</li>
        <li>f64</li>
      </ul>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`valtype ::= i32 | i64 | f32 | f64`}
      </pre>

      {/* Result Types */}
      <h3 className="text-xl font-semibold">Result Types</h3>
      <p className="leading-relaxed">
        Result types represent the output type of evaluating a block of code.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`resulttype ::= [valtype?]`}
      </pre>

      {/* Function Types */}
      <h3 className="text-xl font-semibold">Function Types</h3>
      <p className="leading-relaxed">
        A function type takes a vector of parameters and returns a vector of
        results.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`functype ::= [vec(valtype)] --> [vec(valtype)]`}
      </pre>

      {/* Limits */}
      <h3 className="text-xl font-semibold">Limits</h3>
      <p className="leading-relaxed">
        Limits define the minimum and maximum size related to memory and tables.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`limits ::= {min u32, max u32}`}
      </pre>

      {/* Memory Types */}
      <h3 className="text-xl font-semibold">Memory Types</h3>
      <p className="leading-relaxed">Memory types describe linear memories.</p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`memtype ::= limits`}
      </pre>

      {/* Table Types */}
      <h3 className="text-xl font-semibold">Table Types</h3>
      <p className="leading-relaxed">
        Table types specify tables that hold references (typically to functions).
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`tabletype ::= limits elemtype
elemtype ::= funcref`}
      </pre>

      {/* Global Types */}
      <h3 className="text-xl font-semibold">Global Types</h3>
      <p className="leading-relaxed">
        Global types describe global variables that can be constant or mutable.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`globaltype ::= mut valtype
mut ::= const | var`}
      </pre>

      {/* External Types */}
      <h3 className="text-xl font-semibold">External Types</h3>
      <p className="leading-relaxed">
        External types represent imported or exported WebAssembly components.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`externtype ::= 
  func functype |
  table tabletype |
  mem memtype |
  global globaltype`}
      </pre>

      {/* Instructions */}
      <h2 className="text-2xl font-bold">Instructions</h2>
      <p className="leading-relaxed">
        WebAssembly instructions follow a <b>stack machine model</b>. Values are
        pushed onto the stack, operations pop required arguments, and results
        are pushed back. The final remaining value on the stack becomes the
        output.
      </p>

      <h3 className="text-xl font-semibold">Types of Instructions</h3>
      <ul className="list-disc ml-6 leading-relaxed">
        <li>Numeric Instructions</li>
        <li>Variable Instructions</li>
      </ul>

      {/* Numeric Instructions */}
      <h3 className="text-xl font-semibold">Numeric Instructions</h3>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`nn, mm ::= 32 | 64
ibinop ::= add | sub | mul | div_sx | rem_sx | and | or | xor
irelop ::= eq | ne | lt_sx | gt_sx | le_sx | ge_sx
frelop ::= eq | ne | lt | gt | le | ge`}
      </pre>

      {/* Variable Instructions */}
      <h3 className="text-xl font-semibold">Variable Instructions</h3>
      <p className="leading-relaxed">To access local variables:</p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`get_local $a
get_local $b`}
      </pre>

      <p className="leading-relaxed">To set local variables:</p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`set_local $a
set_local $b`}
      </pre>

      <p className="leading-relaxed">To access global variables:</p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`get_global $a
get_global $b`}
      </pre>

      <p className="leading-relaxed">To set global variables:</p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`set_global $a
set_global $b`}
      </pre>
    </div>
  );
};

export default WebAssemblyProgramStructure;
