import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Instruction Set Architecture and Microarchitecture ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Instruction Set Architecture and Microarchitecture
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 25 Oct, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Microarchitecture and Instruction Set Architecture (ISA) are key concepts in computer organization. The ISA defines what a CPU can do, while the microarchitecture defines how the CPU is built to execute those instructions.
    </p>

    {/* ISA Section */}
    <h2 className="text-3xl font-bold mt-6">Instruction Set Architecture (ISA)</h2>
    <p className="text-lg leading-relaxed">
      ISA is the language of the CPU, defining the operations it can perform and how software communicates with hardware.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Instruction types: e.g., ADD, LOAD, JUMP</li>
      <li>Registers and data types</li>
      <li>Memory access rules</li>
      <li>Interrupt handling and system-level communication</li>
    </ul>
    <p className="text-lg leading-relaxed">
      Popular ISAs include x86, ARM, MIPS, and RISC-V.
    </p>

    {/* MIPS Example */}
    <h3 className="text-2xl font-semibold mt-4">Objective of ISA - MIPS Example</h3>
    <p className="text-lg leading-relaxed">
      MIPS ISA is simple and widely used for educational purposes. It defines instruction types, lengths, and formats.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Arithmetic/Logic Instructions:</strong> e.g., ADD, SUB, AND, OR</li>
      <li><strong>Data Transfer Instructions:</strong> e.g., LW (load word), SW (store word)</li>
      <li><strong>Branch and Jump Instructions:</strong> e.g., BEQ (branch if equal), J (jump)</li>
    </ul>

    <p className="text-lg leading-relaxed">
      MIPS is a 32-bit ISA, meaning each instruction is 32 bits long. Instruction formats include:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>R-type:</strong> Arithmetic and logic operations (ADD, SUB)</li>
      <li><strong>I-type:</strong> Data transfer and conditional branches (LW, BEQ)</li>
      <li><strong>J-type:</strong> Unconditional jumps (J)</li>
    </ul>

    {/* Microarchitecture Section */}
    <h2 className="text-3xl font-bold mt-6">Microarchitecture vs. ISA</h2>
    <p className="text-lg leading-relaxed">
      Microarchitecture describes the internal organization of the CPU, including components such as:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>ALU for calculations</li>
      <li>Pipelines for faster processing</li>
      <li>Cache for quick memory access</li>
      <li>Control Unit</li>
      <li>Execution units</li>
    </ul>
    <p className="text-lg leading-relaxed">
      Two processors may share the same ISA but have very different microarchitectures. ISA defines what a CPU can do, microarchitecture defines how it does it.
    </p>

    {/* Importance of ISA */}
    <h2 className="text-3xl font-bold mt-6">Importance of ISA</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Foundation of Processor Design:</strong> Determines overall CPU architecture (RISC, CISC)</li>
      <li><strong>Instruction Execution:</strong> Guides pipelining, control unit design, and instruction formats</li>
      <li><strong>Assembly Programming:</strong> Enables writing, understanding, and analyzing low-level programs</li>
      <li><strong>Performance Metrics:</strong> Impacts CPI, instruction count, and execution time</li>
      <li><strong>Compatibility:</strong> Software portability across processors with the same ISA</li>
    </ul>

    {/* Types of ISA */}
    <h2 className="text-3xl font-bold mt-6">Types of ISA</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>RISC:</strong> Few, simple instructions for speed</li>
      <li><strong>CISC:</strong> Many complex instructions</li>
      <li><strong>VLIW:</strong> Executes multiple operations in one instruction</li>
      <li><strong>EPIC:</strong> Enables parallel execution of instructions</li>
      <li><strong>Stack-based:</strong> Uses a stack rather than registers</li>
    </ul>

  </div>
);

export default Home;
