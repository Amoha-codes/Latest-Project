import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Compiler Design Tutorial ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Compiler Design Tutorial
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 30 Aug, 2025</p>

    {/* Introduction */}
    <p className="text-lg leading-relaxed">
      A compiler is software that translates a program written in a 
      <strong> high-level language</strong> (Source Language) into a 
      <strong> low-level language</strong> (Machine or Assembly Language). 
      Compiler design focuses on building such translators efficiently.
    </p>

    <p className="leading-relaxed">
      The main goals of compiler design include automating code translation, 
      ensuring correctness, and reporting errors in the input program. A compiler 
      acts as a bridge between human-understandable code and machine instructions.
    </p>

    <p className="leading-relaxed">
      A compiler works in several stages such as 
      <strong> lexical analysis</strong>, 
      <strong> syntax analysis</strong>, 
      <strong> semantic analysis</strong>, 
      <strong> intermediate code generation</strong>, 
      <strong> optimization</strong>, and 
      <strong> target code generation</strong>.
    </p>

    <p className="leading-relaxed">
      Earlier languages like C and C++ were primarily compiled. Modern languages 
      such as Java and Python use a combination of compilation and interpretation. 
      Remember: a compiler <strong>translates</strong> code, but an interpreter 
      <strong>executes</strong> it directly.
    </p>

    {/* Sections List */}
    <h2 className="text-3xl font-bold mt-8">Topics Covered</h2>

    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Introduction</li>
      <li>Phases of a Compiler</li>
      <li>Compiler Construction Tools</li>
      <li>Symbol Table in Compiler</li>
      <li>Error Handling in Compiler Design</li>
      <li>Generations of Programming Languages</li>
    </ol>

    {/* Lexical Analysis */}
    <h2 className="text-3xl font-bold mt-8">Lexical Analysis</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Introduction to Lexical Analysis</li>
      <li>Program to Detect Tokens in C</li>
      <li>Flex (Fast Lexical Analyzer Generator)</li>
    </ol>

    {/* Syntax Analysis */}
    <h2 className="text-3xl font-bold mt-8">Syntax Analysis</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Introduction to Syntax Analysis</li>
      <li>FIRST and FOLLOW</li>
      <li>Context-Free Grammar (CFG) Classification</li>
      <li>Ambiguous Grammar</li>
      <li>Introduction to Parsers</li>
      <li>Classification of Top-down Parsers</li>
      <li>Bottom-Up Parser</li>
      <li>Shift-Reduce Parser</li>
      <li>SLR, CLR, and LALR Parsers</li>
      <li>Operator Grammar & Precedence Parser</li>
    </ol>

    {/* Syntax Directed Translation */}
    <h2 className="text-3xl font-bold mt-8">Syntax Directed Translation</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Introduction to SDTs</li>
      <li>S-Attributed and L-Attributed Definitions</li>
    </ol>

    {/* Code Generation & Optimization */}
    <h2 className="text-3xl font-bold mt-8">Code Generation and Optimization</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Code Optimization</li>
      <li>Intermediate Code Generation</li>
      <li>Design Issues in Code Generators</li>
      <li>Three Address Code (TAC)</li>
      <li>Loop Detection in TAC</li>
      <li>Object Code Introduction</li>
      <li>Data Flow Analysis</li>
    </ol>

    {/* Runtime Environments */}
    <h2 className="text-3xl font-bold mt-8">Runtime Environments</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Static and Dynamic Scoping</li>
      <li>Runtime Environment Concepts</li>
      <li>Linker</li>
      <li>Loader in C/C++</li>
      <li>Developing a Linux-based Shell</li>
    </ol>

  </div>
);

export default Home;
