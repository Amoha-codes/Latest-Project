import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Generations of Programming Languages ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Generations of Programming Languages
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 22 Nov, 2025</p>

    <p className="text-lg leading-relaxed">
      Programming languages have evolved from machine-dependent binary code to 
      human-friendly high-level languages and intelligent AI-driven systems. 
      These stages are grouped into five generations.
    </p>

    {/* 1GL */}
    <h2 className="text-3xl font-bold mt-8">1. First-Generation Languages (1GL) – Machine Language</h2>
    <p className="leading-relaxed">
      These languages use binary instructions (0s and 1s) and run directly on the hardware. 
      They are entirely machine-dependent.
    </p>

    <h3 className="font-semibold mt-4">Advantages</h3>
    <ul className="list-decimal ml-6 leading-relaxed">
      <li>Fast and highly efficient.</li>
      <li>No need for a translator.</li>
    </ul>

    <h3 className="font-semibold mt-4">Disadvantages</h3>
    <ul className="list-decimal ml-6 leading-relaxed">
      <li>Very difficult to read and write.</li>
      <li>Debugging and modification are extremely hard.</li>
    </ul>

    {/* 2GL */}
    <h2 className="text-3xl font-bold mt-8">2. Second-Generation Languages (2GL) – Assembly Language</h2>
    <p className="leading-relaxed">
      Assembly languages use mnemonics and require an assembler to convert them 
      into machine code. They are still machine-specific.
    </p>

    <h3 className="font-semibold mt-4">Advantages</h3>
    <ul className="list-decimal ml-6 leading-relaxed">
      <li>Easier to understand than machine language.</li>
      <li>Modifications are simple.</li>
      <li>Error detection and correction is easier.</li>
    </ul>

    <h3 className="font-semibold mt-4">Disadvantages</h3>
    <ul className="list-decimal ml-6 leading-relaxed">
      <li>Requires an assembler.</li>
      <li>Machine-dependent instruction set.</li>
    </ul>

    {/* 3GL */}
    <h2 className="text-3xl font-bold mt-8">3. Third-Generation Languages (3GL) – High-Level Procedural Languages</h2>
    <p className="leading-relaxed">
      These are high-level languages that use English-like statements and require 
      a compiler or interpreter. Examples include C, FORTRAN, PASCAL, and COBOL.
    </p>

    <h3 className="font-semibold mt-4">Advantages</h3>
    <ul className="list-decimal ml-6 leading-relaxed">
      <li>Easy to understand due to English-like syntax.</li>
      <li>Fewer lines of code required.</li>
      <li>Portable across machines using appropriate compilers.</li>
    </ul>

    <h3 className="font-semibold mt-4">Disadvantages</h3>
    <ul className="list-decimal ml-6 leading-relaxed">
      <li>Requires a compiler or interpreter.</li>
      <li>Different compilers needed for different machines.</li>
    </ul>

    {/* 4GL */}
    <h2 className="text-3xl font-bold mt-8">4. Fourth-Generation Languages (4GL) – Non-Procedural Languages</h2>
    <p className="leading-relaxed">
      These languages focus on what the user wants instead of how to achieve it. 
      Commonly used for database operations. Examples: SQL, FoxPro, Focus.
    </p>

    <h3 className="font-semibold mt-4">Advantages</h3>
    <ul className="list-decimal ml-6 leading-relaxed">
      <li>Easy to learn and understand.</li>
      <li>Faster application development.</li>
      <li>Less prone to errors.</li>
    </ul>

    <h3 className="font-semibold mt-4">Disadvantages</h3>
    <ul className="list-decimal ml-6 leading-relaxed">
      <li>High memory consumption.</li>
      <li>Low control over hardware.</li>
      <li>Less flexibility.</li>
    </ul>

    {/* 5GL */}
    <h2 className="text-3xl font-bold mt-8">5. Fifth-Generation Languages (5GL) – AI-Based Languages</h2>
    <p className="leading-relaxed">
      These languages focus on problem-solving using constraints and logic. 
      Machines can learn and make decisions. Examples: PROLOG, LISP.
    </p>

    <h3 className="font-semibold mt-4">Advantages</h3>
    <ul className="list-decimal ml-6 leading-relaxed">
      <li>Machines can make decisions.</li>
      <li>Less programmer effort required.</li>
      <li>Easier to learn than 3GL and 4GL.</li>
    </ul>

    <h3 className="font-semibold mt-4">Disadvantages</h3>
    <ul className="list-decimal ml-6 leading-relaxed">
      <li>Complex and lengthy code.</li>
      <li>Requires high processing power and expensive resources.</li>
    </ul>

  </div>
);

export default Home;
