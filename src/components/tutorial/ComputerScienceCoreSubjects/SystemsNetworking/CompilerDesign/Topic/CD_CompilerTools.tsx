import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Compiler Construction Tools ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Compiler Construction Tools
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 26 Aug, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Compiler construction involves multiple automated tools that simplify the development of 
      different phases such as scanning, parsing, semantic analysis, code generation, and 
      optimization. These tools help in efficiently building robust and error-free compilers.
    </p>

    {/* ================= Tools List ================= */}

    {/* 1. Lexical Analyzer Generators */}
    <h2 className="text-3xl font-bold mt-8">1. Lexical Analyzer Generators</h2>
    <p className="leading-relaxed">
      Lexical Analyzer Generators create <strong>scanners</strong> based on regular expression 
      definitions. They convert input streams into meaningful tokens.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Examples:</strong> LEX, FLEX</li>
      <li><strong>Input:</strong> Regular expressions for tokens</li>
      <li><strong>Output:</strong> Token recognizer code (C/C++/Java/Python)</li>
    </ul>

    {/* 2. Parser Generators */}
    <h2 className="text-3xl font-bold mt-8">2. Parser Generators</h2>
    <p className="leading-relaxed">
      Parser Generators automatically build parsers from 
      <strong> context-free grammar (CFG)</strong> specifications.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Examples:</strong> YACC, Bison, ANTLR</li>
      <li><strong>Input:</strong> Grammar rules</li>
      <li><strong>Output:</strong> Syntax checker and parse tree generator</li>
    </ul>

    {/* 3. Syntax Directed Translation Engines */}
    <h2 className="text-3xl font-bold mt-8">3. Syntax-Directed Translation Engines</h2>
    <p className="leading-relaxed">
      These tools generate code based on <strong>syntax-directed definitions (SDDs)</strong>. 
      They allow attaching semantic actions to grammar productions.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Example:</strong> ANTLR with semantic predicates</li>
    </ul>

    {/* 4. Automatic Code Generators */}
    <h2 className="text-3xl font-bold mt-8">4. Automatic Code Generators</h2>
    <p className="leading-relaxed">
      Automatic Code Generators translate intermediate code (IR) into target machine code. 
      They handle:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Instruction selection</li>
      <li>Register allocation</li>
      <li>Addressing mode selection</li>
      <li>Machine-dependent optimization</li>
    </ul>
    <p className="leading-relaxed">
      <strong>Examples:</strong> LLVM backend, GCC code generator
    </p>

    {/* 5. Data-Flow Analysis Engines */}
    <h2 className="text-3xl font-bold mt-8">5. Data-Flow Analysis Engines</h2>
    <p className="leading-relaxed">
      These tools determine how values propagate through the program. They are essential for 
      optimizations like:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Constant propagation</li>
      <li>Dead code elimination</li>
      <li>Liveness analysis</li>
      <li>Reaching definitions</li>
    </ul>
    <p className="leading-relaxed">
      <strong>Example:</strong> LLVM Analysis Passes
    </p>

    {/* 6. Compiler Construction Toolkits */}
    <h2 className="text-3xl font-bold mt-8">6. Compiler-Construction Toolkits</h2>
    <p className="leading-relaxed">
      These toolkits provide ready-made modules for scanning, parsing, IR generation, and code 
      optimization. They significantly reduce development time.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>LLVM (Low-Level Virtual Machine)</li>
      <li>MLIR (Multi-Level IR)</li>
      <li>Eclipse Compiler Tools</li>
    </ul>

    {/* 7. Debugging and Profiling Tools */}
    <h2 className="text-3xl font-bold mt-8">7. Debugging & Profiling Tools</h2>
    <p className="leading-relaxed">
      These tools help debug compiler executables, analyze memory usage, and profile performance.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Debuggers:</strong> GDB</li>
      <li><strong>Profilers:</strong> Valgrind, Perf</li>
    </ul>

  </div>
);

export default Home;
