import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Execution and Throughput ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Execution and Throughput
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 10 Nov, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Pipelining is a technique used in CPU design to improve overall performance by allowing
      multiple instruction stages to operate in parallel. In a pipelined processor, each stage
      works on a different part of an instruction, enabling the execution of multiple instructions
      simultaneously. Once the pipeline is filled, the goal is to complete one instruction per
      clock cycle.
    </p>

    {/* Execution in Pipelined Processor */}
    <h2 className="text-3xl font-bold mt-8">Execution in a Pipelined Processor</h2>
    <p className="leading-relaxed">
      The execution sequence of instructions can be visualized using a space-time diagram. Consider a processor
      with 4 stages and 2 instructions to execute. There are two execution modes:
    </p>

    <h3 className="text-2xl font-semibold mt-6">Non-Overlapped Execution</h3>
    <p className="leading-relaxed">
      In non-overlapped execution, each instruction completes all stages before the next instruction starts.
      Total time taken = <strong>8 cycles</strong>.
    </p>

    <h3 className="text-2xl font-semibold mt-6">Overlapped Execution</h3>
    <p className="leading-relaxed">
      In overlapped execution, multiple instructions progress through different stages simultaneously.
      Total time taken = <strong>5 cycles</strong>.
    </p>

    {/* RISC Pipeline Stages */}
    <h2 className="text-3xl font-bold mt-8">Pipeline Stages (RISC Processor)</h2>
    <p className="leading-relaxed">
      A typical RISC processor contains a 5-stage instruction pipeline:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Stage 1 – Instruction Fetch (IF):</strong> Fetches the instruction using the Program Counter.</li>
      <li><strong>Stage 2 – Instruction Decode (ID):</strong> Decodes the instruction and reads register values.</li>
      <li><strong>Stage 3 – Execute (EX):</strong> Performs ALU operations.</li>
      <li><strong>Stage 4 – Memory Access (MEM):</strong> Reads/writes operands from/to memory.</li>
      <li><strong>Stage 5 – Write Back (WB):</strong> Writes the computed result back to a register.</li>
    </ul>

    {/* Performance Section */}
    <h2 className="text-3xl font-bold mt-8">Performance of a Pipelined Processor</h2>
    <p className="leading-relaxed">
      Consider a pipeline with <strong>k stages</strong> and clock cycle time <strong>Tp</strong>.
      For <strong>n instructions</strong>:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      ET<sub>pipeline</sub> = (k + n – 1) cycles = (k + n – 1) Tp
      <br />
      ET<sub>non-pipeline</sub> = n × k × Tp
    </p>

    <h3 className="text-2xl font-semibold mt-6">Speedup</h3>
    <p className="leading-relaxed">
      Speedup (S) compares the performance of pipelined vs non-pipelined execution:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      S = (n × k) / (k + n – 1)
    </p>

    <p className="leading-relaxed">
      When the number of instructions is very large (n ≫ k), speedup approaches:
    </p>

    <p className="leading-relaxed font-semibold text-lg">S ≈ k</p>

    {/* Efficiency */}
    <h3 className="text-2xl font-semibold mt-6">Efficiency</h3>
    <p className="leading-relaxed">
      Efficiency = S / S<sub>max</sub> = S / k
    </p>

    {/* Throughput */}
    <h2 className="text-3xl font-bold mt-8">Throughput</h2>
    <p className="leading-relaxed">
      Throughput measures the number of instructions executed per unit time.
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Throughput = n / (k + n – 1) × Tp
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Higher throughput → faster overall processing.</li>
      <li>Affected by pipeline depth, clock speed, and hazards.</li>
      <li>Ideal CPI (Cycles Per Instruction) ≈ 1 for large n.</li>
    </ul>

    {/* Latency */}
    <h2 className="text-3xl font-bold mt-8">Latency</h2>
    <p className="leading-relaxed">
      Latency is the time taken by a single instruction to pass through all pipeline stages.
      Lower latency means faster completion of individual instructions.
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Latency = Total Execution Time / Number of Instructions
    </p>

    <p className="leading-relaxed">
      Latency is influenced by pipeline length, clock cycle time, instruction dependencies, and hazards.
    </p>

  </div>
);

export default Home;
