import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= TITLE ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Computer Organization and Architecture Tutorial
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 10 Oct, 2025</p>

    {/* ================= INTRO ================= */}
    <p className="text-lg leading-relaxed">
      Computer architecture defines how a computer’s components communicate 
      through electronic signals to perform input, processing, and output operations.
      It covers the design and organization of the CPU, memory, storage, 
      and input/output devices. It describes how these components interact 
      through buses, control signals, and data pathways, and it directly 
      influences the system’s speed, functionality, and reliability.
    </p>

  

    {/* ================= BASIC COMPUTER STRUCTURE ================= */}
    <h2 className="text-3xl font-bold mt-8">Basic Computer Structure</h2>
    <p className="leading-relaxed">
      This section introduces the fundamentals of computer organisation and architecture, 
      explaining system components, design issues, and different architectural models.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>What is Computer?</li>
      <li>Issues in Computer Design</li>
      <li>Von Neumann Architecture</li>
      <li>Harvard Architecture</li>
      <li>Flynn's Taxonomy</li>
    </ul>

    {/* ================= NUMBER SYSTEM & DATA REPRESENTATION ================= */}
    <h2 className="text-3xl font-bold mt-8">Number System and Data Representation</h2>
    <p className="leading-relaxed">
      Covers how data, numbers, and characters are represented inside a computer, 
      along with techniques to ensure accuracy and reliability in storage and communication.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Number Systems</li>
      <li>Base Conversions</li>
      <li>Character Representation</li>
      <li>Error Detection and Correction Codes</li>
    </ul>

    <h3 className="text-2xl font-bold mt-4">Fixed & Floating-Point Formats</h3>
    <p className="leading-relaxed">Used for precision and numerical range.</p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Fixed Point Representation</li>
      <li>Floating Point Representation</li>
    </ul>

    {/* ================= DIGITAL LOGIC ================= */}
    <h2 className="text-3xl font-bold mt-8">Digital Logic & Circuits</h2>
    <p className="leading-relaxed">
      Designing digital systems using logic gates, Boolean algebra, and 
      combinational/sequential circuits.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Digital Electronic and Logic Gate</li>
      <li>Boolean Algebra</li>
      <li>Combinational & Sequential Circuits</li>
    </ul>

    {/* ================= REGISTER TRANSFER ================= */}
    <h2 className="text-3xl font-bold mt-8">Register Transfer & Micro-Operations</h2>
    <p className="leading-relaxed">
      Managing data movement and operations in registers using bus/memory transfers, 
      arithmetic, and shift micro-operations.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Register Transfer Language</li>
      <li>Data Transfers (Bus/Memory)</li>
      <li>Arithmetic Micro-Operations</li>
      <li>Shift Micro-Operations</li>
      <li>Microoperations</li>
      <li>Hardwired vs Microprogrammed Control Unit</li>
    </ul>

    {/* ================= ISA ================= */}
    <h2 className="text-3xl font-bold mt-8">Instruction Set Architecture (ISA) & Control Flow</h2>
    <p className="leading-relaxed">
      Defining the set of instructions, formats, and addressing modes 
      for processor communication.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Instruction Format</li>
      <li>Addressing Modes</li>
      <li>Microarchitecture and Instruction Set Architecture</li>
      <li>Timing and Control</li>
      <li>RISC vs CISC Architectures</li>
    </ul>

    {/* ================= ARITHMETIC ================= */}
    <h2 className="text-3xl font-bold mt-8">Computer Arithmetic</h2>
    <p className="leading-relaxed">
      Explore ALU operations, number complements, division algorithms, 
      Booth’s method, overflow handling, and the representation of signed numbers.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>ALU and Data Path</li>
      <li>1’s Complement vs 2’s Complement</li>
      <li>Restoring Division Algorithm</li>
      <li>Non-Restoring Division</li>
      <li>Booth’s Algorithm</li>
      <li>Overflow in Arithmetic Addition</li>
    </ul>

    {/* ================= MEMORY ORGANIZATION ================= */}
    <h2 className="text-3xl font-bold mt-8">Memory Organization</h2>
    <p className="leading-relaxed">
      Covers types of memory, hierarchy, addressing methods, virtual memory, 
      and architectural differences.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Memory & Memory Units</li>
      <li>Paging</li>
      <li>Segmentation</li>
      <li>Virtual Memory</li>
      <li>Page Replacement Algorithms</li>
      <li>Translation Lookaside Buffer</li>
      <li>NUMA vs UMA Architectures</li>
      <li>Memory Interleaving</li>
      <li>Byte & Word Addressable Memory</li>
      <li>Simultaneous vs Hierarchical Access Memory</li>
    </ul>

    {/* ================= I/O ORGANIZATION ================= */}
    <h2 className="text-3xl font-bold mt-8">Input/Output Organization</h2>
    <p className="leading-relaxed">
      Covers interfaces, interrupts, DMA, peripheral devices, synchronization, 
      bus systems, and processor communication.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Introduction to I/O Interface</li>
      <li>I/O Interface (Interrupt and DMA Mode)</li>
      <li>Memory Mapped & Isolated I/O</li>
      <li>Interrupts</li>
      <li>DMA</li>
      <li>Modes of DMA Transfer</li>
      <li>DMA controller 8257/8237</li>
      <li>PPI 8255</li>
      <li>Asynchronous & Synchronous I/O Synchronization</li>
      <li>Interface 8255 with 8085</li>
      <li>Microcomputer System</li>
      <li>Working of 8085 SBC</li>
      <li>Interface 8254 PIT with 8085</li>
      <li>Synchronous Data Transfer</li>
      <li>Input-Output Processor</li>
      <li>Bus Systems</li>
      <li>MPU Communication</li>
      <li>Bus Arbitration</li>
    </ul>

    {/* ================= PIPELINING ================= */}
    <h2 className="text-3xl font-bold mt-8">Pipelining & Hazards</h2>
    <p className="leading-relaxed">
      This section explains pipelining, execution stages, hazards, 
      parallelism concepts, VLIW architecture, and Amdahl’s law.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Pipelining Set 1 (Execution, Stages & Throughput)</li>
      <li>Pipelining Set 2 (Dependencies & Data Hazard)</li>
      <li>Instruction Level Parallelism</li>
      <li>Very Long Instruction Word (VLIW) Architecture</li>
      <li>Types and Stalling</li>
      <li>Dependencies and Data Hazard</li>
      <li>Branch Prediction in Pentium</li>
      <li>Amdahl's Law and its Proof</li>
    </ul>

  </div>
);

export default Home;
