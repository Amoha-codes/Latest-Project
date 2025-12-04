import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Linker ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Linker
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 Jul, 2025</p>

    {/* Intro */}
    <p className="text-lg leading-relaxed">
      A <strong>linker</strong> is an essential tool in the compilation process. 
      It combines multiple object modules (produced by the assembler) into a 
      single executable file. The linker connects code and data across files 
      ensuring all symbol references are resolved correctly.
    </p>

    <p className="leading-relaxed">
      Linking occurs in two stages: 
      <strong> compile-time linking</strong> (during machine-code generation) and 
      <strong> load-time linking</strong> (when the program loads into memory).
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Source Code → Compiler → Assembler → Object Code → Linker → Executable File → Loader
    </p>

    {/* Types of Linking */}
    <h2 className="text-3xl font-bold mt-8">Types of Linking</h2>

    <h3 className="text-2xl font-semibold mt-4">1. Static Linking</h3>
    <p className="leading-relaxed">
      Static linking occurs during compilation. All required object files and 
      libraries are combined into a single executable. After linking, the 
      program does not require the original object files.
    </p>

    <p className="font-semibold mt-2">Key Tasks:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Symbol Resolution:</strong> Ensures each symbol refers to exactly one definition.</li>
      <li><strong>Relocation:</strong> Adjusts the memory addresses used in the program.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-6">2. Dynamic Linking</h3>
    <p className="leading-relaxed">
      Dynamic linking occurs at runtime. Instead of copying library code into 
      the executable, the program links to shared libraries when executed.
    </p>

    <p className="font-semibold mt-2">Advantages:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Memory efficiency through shared libraries</li>
      <li>Reduced executable size</li>
      <li>Runtime relocation and flexibility</li>
    </ul>

    <p className="font-semibold mt-2">Disadvantages:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Runtime errors if libraries are missing</li>
      <li>Possible compatibility issues</li>
      <li>Slower due to runtime linking</li>
    </ul>

    {/* Features of a Linker */}
    <h2 className="text-3xl font-bold mt-8">Features of a Linker</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Symbol resolution</li>
      <li>Relocation</li>
      <li>Dead-code elimination and optimizations</li>
      <li>Library management</li>
      <li>Debugging information inclusion</li>
      <li>Cross-platform support</li>
      <li>Incremental linking</li>
      <li>Versioning support</li>
      <li>Link-time code generation</li>
      <li>Linker scripting for memory layout control</li>
    </ul>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications of Linker</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Combining object files</li>
      <li>Resolving cross-file symbol references</li>
      <li>Supporting dynamic linking</li>
      <li>Managing libraries</li>
      <li>Improving modularity and reusability</li>
    </ol>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages of Linker</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Supports code reuse via shared libraries</li>
      <li>Reduces executable size (dynamic linking)</li>
      <li>Decreases overall memory footprint</li>
      <li>Reduces disk usage</li>
      <li>Supports secure, protected libraries</li>
      <li>Easy updates without recompiling the program</li>
      <li>Improves portability across systems</li>
    </ol>

    {/* Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Disadvantages of Linker</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Complex for large projects</li>
      <li>Symbol resolution difficulties</li>
      <li>Compatibility issues with different file formats</li>
      <li>Performance overhead for large builds</li>
      <li>Potential security vulnerabilities in linking</li>
      <li>Complex dependency management</li>
    </ol>

  </div>
);

export default Home;
