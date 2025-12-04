import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= RISC vs CISC ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      RISC vs CISC
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 25 Oct, 2025</p>

    {/* Intro */}
    <p className="text-lg leading-relaxed">
      RISC and CISC are two different approaches to processor design.  
      <br /> <br />
      <strong>RISC</strong> uses a small set of simple, fixed-size instructions that typically
      execute in a single clock cycle.  
      <br />
      <strong>CISC</strong> uses a large set of complex, variable-length instructions that may
      take multiple cycles and can perform several operations in a single command.
    </p>

    {/* RISC Section */}
    <h2 className="text-3xl font-bold mt-6">Reduced Instruction Set Architecture (RISC)</h2>
    <p className="text-lg leading-relaxed">
      RISC simplifies the processor by providing a uniform set of simple instructions, each
      designed for fast execution and optimized for pipelining.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Characteristics of RISC</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Simpler instructions leading to simpler decoding</li>
      <li>Fixed one-word instruction size</li>
      <li>Most instructions execute in a single clock cycle</li>
      <li>More general-purpose registers</li>
      <li>Simple addressing modes</li>
      <li>Highly optimized for pipelining</li>
    </ul>

    {/* CISC Section */}
    <h2 className="text-3xl font-bold mt-6">Complex Instruction Set Architecture (CISC)</h2>
    <p className="text-lg leading-relaxed">
      CISC aims to reduce the number of instructions per program by enabling single
      instructions to perform multiple operations.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Characteristics of CISC</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Complex instructions requiring complex decoding</li>
      <li>Variable-length instructions</li>
      <li>Instructions may take multiple cycles to execute</li>
      <li>Fewer general-purpose registers</li>
      <li>More complex addressing modes</li>
    </ul>

    {/* CPU Performance */}
    <h2 className="text-3xl font-bold mt-6">CPU Performance of RISC and CISC</h2>
    <p className="text-lg leading-relaxed">
      Both RISC and CISC architectures aim to improve CPU performance, but they do so using
      different strategies.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>RISC:</strong> Reduces cycles per instruction at the cost of more instructions
        per program.
      </li>
      <li>
        <strong>CISC:</strong> Reduces the number of instructions per program but increases the
        cycles per instruction.
      </li>
    </ul>

    <p className="text-lg leading-relaxed">
      Earlier when assembly programming was common, CISC became popular because fewer
      instructions meant simpler programming. But with modern high-level languages, RISC
      architectures like ARM and RISC-V have become more widely used due to efficiency and
      simpler hardware.
    </p>

    {/* Example */}
    <h3 className="text-2xl font-semibold mt-4">Example</h3>
    <p className="text-lg leading-relaxed">
      Suppose we want to add two 8-bit numbers:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>CISC:</strong> A single instruction like <code>ADD</code> performs the entire task.</li>
      <li><strong>RISC:</strong> Requires multiple steps — load, operate, and store — producing longer
        programs but using simpler hardware.</li>
    </ul>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-6">Comparison Table</h2>
    <table className="w-full border mt-4">
      <thead>
        <tr className="bg-gray-400">
          <th className="border p-2">RISC</th>
          <th className="border p-2">CISC</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border p-2">Small and simple instruction set</td>
          <td className="border p-2">Large and complex instruction set</td>
        </tr>
        <tr>
          <td className="border p-2">Fixed-length instructions</td>
          <td className="border p-2">Variable-length instructions</td>
        </tr>
        <tr>
          <td className="border p-2">Usually 1 cycle per instruction</td>
          <td className="border p-2">Multiple cycles per instruction</td>
        </tr>
        <tr>
          <td className="border p-2">More general-purpose registers</td>
          <td className="border p-2">Fewer registers</td>
        </tr>
        <tr>
          <td className="border p-2">Simple addressing modes</td>
          <td className="border p-2">Complex addressing modes</td>
        </tr>
        <tr>
          <td className="border p-2">Larger code size</td>
          <td className="border p-2">Smaller code size</td>
        </tr>
        <tr>
          <td className="border p-2">Simple hardware, easier pipelining</td>
          <td className="border p-2">Complex hardware, harder pipelining</td>
        </tr>
        <tr>
          <td className="border p-2">Examples: ARM, RISC-V, MIPS</td>
          <td className="border p-2">Examples: x86, Intel 80386</td>
        </tr>
      </tbody>
    </table>

  </div>
);

export default Home;
