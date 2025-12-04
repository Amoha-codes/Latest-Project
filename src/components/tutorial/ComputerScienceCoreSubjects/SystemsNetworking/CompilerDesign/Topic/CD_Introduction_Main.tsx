import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Introduction of Compiler Design ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction of Compiler Design
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 26 Aug, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      A compiler is software that translates a program written in a 
      <strong> high-level language</strong> (source language) into a 
      <strong> low-level language</strong> (machine or assembly language). 
      Compiler design deals with the principles, techniques, and tools needed 
      to construct a compiler.
    </p>

    {/* ================= Operations of Compilers ================= */}
    <h2 className="text-3xl font-bold mt-8">Operations of Compilers</h2>

    <p className="leading-relaxed">
      The main operations performed by a compiler include:
    </p>

    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Breaking source programs into smaller parts.</li>
      <li>Creating symbol tables and intermediate representations.</li>
      <li>Detecting and reporting errors.</li>
      <li>Storing codes, variables, and associated data.</li>
      <li>Analyzing the complete program for translation.</li>
      <li>Converting source code into machine code.</li>
    </ol>

    {/* ================= Language Processing Systems ================= */}
    <h2 className="text-3xl font-bold mt-8">
      Compiler and Other Language Processing Systems
    </h2>

    <p className="leading-relaxed">
      Computers operate using machine-level instructions that are difficult for humans 
      to understand. Therefore, programmers write code in high-level languages. 
      These programs must pass through several transformations to become executable. 
      Language processing systems enable this translation process.
    </p>

    {/* ================= High-Level Language to Machine Code ================= */}
    <h2 className="text-3xl font-bold mt-8">High-Level Language to Machine Code</h2>

    <p className="leading-relaxed">
      The process of converting high-level code to machine code involves multiple components:
    </p>

    <ol className="list-decimal ml-6 leading-relaxed">

      <li>
        <strong>Pre-Processor:</strong> 
        Removes <code>#include</code> files by inserting their contents and expands 
        macros defined using <code>#define</code>. It performs file inclusion and macro processing.
      </li>

      <li>
        <strong>Assembler:</strong> 
        Converts assembly language instructions into machine code. 
        Assemblers are platform-dependent and generate object files.
      </li>

      <li>
        <strong>Compiler:</strong> 
        Analyzes the entire program, checks ranges, limits, and errors, and generates 
        machine code. It takes more time and memory compared to assemblers.
      </li>

      <li>
        <strong>Interpreter:</strong> 
        Converts and executes code line by line. Unlike compilers, interpreters do not 
        translate the whole program at once. Interpreted programs run slower.
      </li>

      <li>
        <strong>Loader/Linker:</strong> 
        The linker combines object files into a single executable, while the loader places 
        the executable in memory and runs it by assigning actual memory addresses.
      </li>

      <li>
        <strong>Linker:</strong> 
        Merges object files generated from the compiler, assembler, and libraries.
      </li>

      <li>
        <strong>Loader:</strong> 
        Determines the memory location of relocatable code and loads it for execution.
      </li>
    </ol>

    {/* ================= Types of Compilers ================= */}
    <h2 className="text-3xl font-bold mt-8">Types of Compilers</h2>

    <ol className="list-decimal ml-6 leading-relaxed">
      <li>
        <strong>Self Compiler:</strong> Runs on a machine and produces machine code 
        for the same machine.
      </li>
      <li>
        <strong>Cross Compiler:</strong> Runs on one machine but produces code 
        for another machine.
      </li>
      <li>
        <strong>Source-to-Source Compiler:</strong> Converts source code of one 
        programming language into another.
      </li>
      <li>
        <strong>Single Pass Compiler:</strong> Performs translation in a single scan 
        of the source code.
      </li>
      <li>
        <strong>Two Pass Compiler:</strong> Processes the program twice—once by the 
        front end and once by the back end.
      </li>
      <li>
        <strong>Multi-Pass Compiler:</strong> Generates multiple intermediate forms 
        and processes syntax trees several times.
      </li>
      <li>
        <strong>Just-in-Time (JIT) Compiler:</strong> Converts code into machine 
        language during execution for better runtime performance.
      </li>
      <li>
        <strong>Ahead-of-Time (AOT) Compiler:</strong> Converts the entire program 
        into machine code before execution, allowing faster startup.
      </li>
      <li>
        <strong>Incremental Compiler:</strong> Recompiles only the modified parts 
        of the program, useful during development.
      </li>
    </ol>

    {/* ================= History of Compilers ================= */}
    <h2 className="text-3xl font-bold mt-8">History of Compilers</h2>

    <p className="leading-relaxed">
      The first compiler was developed by Grace Hopper in the 1950s, which led to the 
      creation of early languages like FORTRAN (1957), LISP (1958), and COBOL (1959). 
      The 1960s introduced ALGOL, while the 1970s brought languages such as C and Pascal. 
      Modern compilers emphasize optimization, support object-oriented programming, 
      and incorporate Just-in-Time compilation. Compilers have played a crucial role 
      in advancing programming and improving software performance.
    </p>

  </div>
);

export default Home;
