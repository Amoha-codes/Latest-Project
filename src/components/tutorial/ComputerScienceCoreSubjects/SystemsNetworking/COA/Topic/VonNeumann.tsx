import React from "react";

const VonNeumannArchitecture: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Title ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Von Neumann Architecture
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 20 Sep, 2025</p>

    {/* ================= Introduction ================= */}
    <p className="text-lg leading-relaxed">
      Von Neumann architecture is a computer design where both instructions 
      and data are stored in the same memory space. The CPU fetches 
      instructions and data using the same pathways, making the design simple 
      and efficient. Historically, computers were categorized into two types:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <b>Fixed Program Computers</b> – Designed for specific tasks and 
        cannot be reprogrammed (e.g., calculators).
      </li>
      <li>
        <b>Stored Program Computers</b> – Can store and execute multiple 
        programs, allowing flexibility.
      </li>
    </ul>

    {/* ================= Image Placeholder ================= */}
    <div className="bg-gray-400 p-4 rounded-lg text-center text-sm">
      central_processing_unit.webp
    </div>

    {/* ================= Components ================= */}
    <h2 className="text-3xl font-bold mt-8">
      Components of Von Neumann Architecture
    </h2>
    <p className="leading-relaxed">
      The architecture is built using three major components that define the 
      workflow of a computer system:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>CPU (Central Processing Unit)</li>
      <li>Memory</li>
      <li>I/O Devices</li>
    </ul>

    <p className="leading-relaxed">
      Let’s understand each component in more detail:
    </p>

    {/* ================= CPU ================= */}
    <h2 className="text-2xl font-bold mt-6">CPU (Central Processing Unit)</h2>
    <p className="leading-relaxed">
      The CPU is the brain of the computer. It executes instructions, processes 
      data, manages operations, and generates results. It consists of:
    </p>

    {/* ================= Image Placeholder ================= */}
    <div className="bg-gray-400 p-4 rounded-lg text-center text-sm">
      memory_structure.webp
    </div>

    {/* Subcomponents */}
    <h3 className="text-xl font-semibold mt-4">CU (Control Unit)</h3>
    <p className="leading-relaxed">
      The control unit manages instruction execution. It sends signals, 
      directs data flow, manages input/output, and fetches instructions from 
      memory.
    </p>

    <h3 className="text-xl font-semibold mt-4">ALU (Arithmetic & Logic Unit)</h3>
    <p className="leading-relaxed">
      The ALU performs all arithmetic operations (addition, subtraction, etc.) 
      and logical operations (comparisons, decision making). It is responsible 
      for computation inside the processor.
    </p>

    <h3 className="text-xl font-semibold mt-4">Registers</h3>
    <p className="leading-relaxed">
      Registers are high-speed memory units inside the CPU used for storing 
      temporary data. They help in fast processing and instruction execution.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><b>PC (Program Counter)</b>: Holds the address of the next instruction.</li>
      <li><b>IR (Instruction Register)</b>: Stores the instruction being executed.</li>
      <li><b>MAR (Memory Address Register)</b>: Holds the memory address being accessed.</li>
      <li><b>MDR (Memory Data Register)</b>: Temporarily stores data moving to/from memory.</li>
      <li><b>Accumulator</b>: Stores intermediate ALU results.</li>
      <li><b>General Purpose Registers</b>: Used for temporary data storage.</li>
    </ul>

    {/* ================= BUS ================= */}
    <h2 className="text-2xl font-bold mt-6">Bus</h2>
    <p className="leading-relaxed">
      A bus is a communication pathway used to transfer data, addresses, and 
      control signals between CPU, memory, and I/O devices. In Von Neumann 
      architecture, both data and instructions use the same bus, creating a 
      performance limitation known as the Von Neumann bottleneck.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><b>I/O Bus</b>: Connects CPU and memory to I/O devices.</li>
      <li><b>I/O Interface</b>: Bridges internal components with external hardware.</li>
      <li><b>Devices</b>: Keyboards, monitors, storage, etc.</li>
    </ul>

    {/* ================= Characteristics ================= */}
    <h2 className="text-3xl font-bold mt-8">Key Characteristics</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Single memory used for both data and instructions.</li>
      <li>Shared bus for data, address, and control signals.</li>
      <li>Sequential instruction execution.</li>
    </ul>

    {/* ================= Bottleneck ================= */}
    <h2 className="text-3xl font-bold mt-8">Von Neumann Bottleneck</h2>
    <p className="leading-relaxed">
      The bottleneck occurs because instructions and data share the same bus, 
      allowing only one operation at a time. This slows down CPU performance 
      despite improvements in RAM, cache, or clock speeds. Major performance 
      gains require rethinking CPU architecture itself.
    </p>

    {/* ================= Applications ================= */}
    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <p className="leading-relaxed">
      Von Neumann architecture is widely used across modern systems:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <b>Personal Computers & Laptops:</b> Intel Core i7, AMD Ryzen.
      </li>
      <li>
        <b>Smartphones & Tablets:</b> ARM processors like Snapdragon, Apple A-series.
      </li>
      <li>
        <b>Embedded Systems:</b> Arduino Uno, ATmega328, older ARM Cortex-M.
      </li>
      <li>
        <b>Servers & Cloud Computing:</b> Used in large-scale platforms like AWS.
      </li>
      <li>
        <b>Gaming Consoles:</b> PS5 and Xbox use unified memory architecture.
      </li>
    </ul>
  </div>
);

export default VonNeumannArchitecture;
