import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Title ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Pipelining Types and Stalling
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 Nov, 2025</p>

    {/* ================= Introduction ================= */}
    <p className="text-lg leading-relaxed">
      Pipelining is a fundamental technique in computer architecture that improves instruction throughput 
      by overlapping execution phases of multiple instructions. The effectiveness of a pipeline depends on 
      how stages are organized and timed. There are two main types of pipelines based on stage timing:
    </p>

    {/* ================= Pipeline Types ================= */}
    <h2 className="text-3xl font-bold mt-8">Uniform Delay Pipeline</h2>
    <p className="leading-relaxed">
      In a uniform delay pipeline, all stages take the same amount of time to complete an operation. 
      The cycle time (Tp) is given by:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Tp = Stage Delay <br/>
      If buffers are included between stages, Tp = Stage Delay + Buffer Delay
    </p>

    <h2 className="text-3xl font-bold mt-8">Non-Uniform Delay Pipeline</h2>
    <p className="leading-relaxed">
      In a non-uniform delay pipeline, different stages take different amounts of time. The cycle time is:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Tp = Maximum(Stage Delay) <br/>
      If buffers are included, Tp = Maximum(Stage Delay + Buffer Delay)
    </p>

    {/* ================= Example ================= */}
    <h2 className="text-3xl font-bold mt-8">Example</h2>
    <p className="leading-relaxed">
      Consider a 4-segment pipeline with stage delays (2 ns, 8 ns, 3 ns, 10 ns). To execute 100 tasks:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Tp = max(2, 8, 3, 10) = 10 ns <br/>
      ETpipeline = (k + n - 1) Tp = (4 + 100 - 1) * 10 ns = 1030 ns
    </p>
    <p className="leading-relaxed">
      NOTE: MIPS = Million Instructions Per Second
    </p>

    {/* ================= Pipeline Performance with Stalls ================= */}
    <h2 className="text-3xl font-bold mt-8">Performance of Pipeline with Stalls</h2>
    <p className="leading-relaxed">
      Speedup (S) of the pipelined processor:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      S = Average Execution Time<sub>non-pipeline</sub> / Average Execution Time<sub>pipeline</sub> <br/>
      S = (CPI<sub>non-pipeline</sub> * Cycle Time<sub>non-pipeline</sub>) / 
          ((1 + Number of stalls per instruction) * Cycle Time<sub>pipeline</sub>)
    </p>
    <p className="leading-relaxed">
      Ideal CPI of a pipelined processor is 1. Stalls increase the effective CPI above 1.
    </p>

    {/* ================= Problems in Instruction Pipelining ================= */}
    <h2 className="text-3xl font-bold mt-8">Problems in Instruction Pipelining</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Time Variation:</strong> Different instructions have different operand requirements and processing times. The pipeline speed gain is limited by the slowest stage.</li>
      <li><strong>Data Hazards:</strong> Instructions referencing the same data in parallel stages can lead to incorrect results if later instructions access data before preceding instructions complete.</li>
      <li><strong>Branching:</strong> For conditional branches, the next instruction may not be known until the current instruction is processed, potentially causing pipeline stalls.</li>
      <li><strong>Interrupts:</strong> Unplanned instructions introduced by interrupts must be handled carefully between pipeline stages, which can introduce extra delays.</li>
    </ul>

  </div>
);

export default Home;
