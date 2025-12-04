import React from "react";

const HarvardArchitecture: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Title ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Harvard Architecture
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 19 Sep, 2025</p>

    {/* ================= Intro ================= */}
    <p className="text-lg leading-relaxed">
      Harvard architecture is a computer design model where program instructions 
      and data are stored in separate memory units accessed through independent 
      buses. This separation allows the processor to fetch instructions and access 
      data simultaneously, eliminating the bottleneck present in traditional Von 
      Neumann systems.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Eliminates the Von Neumann bottleneck.</li>
      <li>Provides faster and predictable performance (ideal for real-time systems).</li>
      <li>Enables parallel access to both instructions and data.</li>
    </ul>

    {/* ================= Working Principle ================= */}
    <h2 className="text-3xl font-bold mt-8">Working Principle</h2>
    <p className="leading-relaxed">
      In Harvard Architecture, fetching an instruction from instruction memory 
      and reading/writing data from/to data memory happen at the same time without 
      waiting for one another. Separate buses prevent delays caused when both 
      data and instructions share the same path.
    </p>

    <p className="leading-relaxed">
      For example, while one instruction is being executed, the next instruction 
      can already be fetched in parallel, speeding up overall processing.
    </p>

    {/* ================= Image Placeholder ================= */}
    <div className="bg-gray-400 p-4 rounded-lg text-center text-sm">
      central_processing_unit234.webp
    </div>

    {/* ================= Structure ================= */}
    <h2 className="text-3xl font-bold mt-8">Structure of Harvard Architecture</h2>

    <h3 className="text-2xl font-semibold mt-4">Buses</h3>
    <p className="leading-relaxed">
      Buses act as signal pathways that transport data, instructions, and addresses. 
      Harvard architecture uses separate buses for instructions and data:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Data Bus:</strong> Transfers data between main memory, CPU, and I/O devices.</li>
      <li><strong>Data Address Bus:</strong> Carries data memory addresses from CPU to memory.</li>
      <li><strong>Instruction Bus:</strong> Transfers program instructions.</li>
      <li><strong>Instruction Address Bus:</strong> Carries instruction memory addresses.</li>
    </ul>

    {/* ================= Components ================= */}
    <h2 className="text-3xl font-bold mt-8">Components of Harvard Architecture</h2>

    <h3 className="text-2xl font-semibold mt-4">Arithmetic and Logic Unit (ALU)</h3>
    <p className="leading-relaxed">
      The ALU performs all arithmetic operations (addition, subtraction) and logical 
      operations (comparisons, bit shifting). It handles the core mathematical work 
      inside the processor.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Control Unit (CU)</h3>
    <p className="leading-relaxed">
      The Control Unit controls all processor signals, manages the flow of instructions, 
      coordinates data transfers, and handles input/output operations.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Input/Output System</h3>
    <p className="leading-relaxed">
      Input devices send data into the main memory through CPU instructions, while output 
      devices display the results from computations.
    </p>

    {/* ================= Applications ================= */}
    <h2 className="text-3xl font-bold mt-8">Application of Harvard Architecture</h2>

    <p className="leading-relaxed">
      The Harvard architecture is widely used in embedded and specialized computing systems 
      where high performance and predictable execution are required.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">

      <li>
        <strong>Digital Signal Processors (DSPs):</strong>
        <ul className="list-disc ml-6">
          <li>Used in audio/video processing, radar, image processing.</li>
          <li>Example: Texas Instruments TMS320 (hearing aids).</li>
        </ul>
      </li>

      <li className="mt-2">
        <strong>Microcontrollers (MCUs):</strong>
        <ul className="list-disc ml-6">
          <li>Used in cars, IoT devices, consumer electronics, and automation.</li>
          <li>Example: PIC in automotive ABS systems.</li>
        </ul>
      </li>

      <li className="mt-2">
        <strong>Network Processors:</strong>
        <ul className="list-disc ml-6">
          <li>Used in routers, switches, and firewalls.</li>
          <li>Example: Broadcom StrataXGS.</li>
        </ul>
      </li>

      <li className="mt-2">
        <strong>Automotive Systems:</strong>
        <ul className="list-disc ml-6">
          <li>Used in ECUs, ADAS, and infotainment systems.</li>
          <li>Example: NXP S32K for engine control.</li>
        </ul>
      </li>

    </ul>

  </div>
);

export default HarvardArchitecture;
