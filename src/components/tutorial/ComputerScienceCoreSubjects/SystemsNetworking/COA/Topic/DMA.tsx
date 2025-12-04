import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= DMA Controller ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Direct Memory Access (DMA) Controller
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 06 Nov, 2025</p>

    <p className="text-lg leading-relaxed">
      In modern computer systems, transferring data between I/O devices and memory can slow performance if the CPU handles every step. A Direct Memory Access (DMA) Controller allows devices to transfer data directly to or from memory without heavy CPU involvement, improving speed and efficiency. It generates memory addresses and controls timing for efficient data movement. Once initialized by the CPU, it operates independently to complete the transfer.
    </p>

    {/* ================= Types of DMA ================= */}
    <h2 className="text-3xl font-bold mt-8">Types of Direct Memory Access (DMA)</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><b>Single-Ended DMA:</b> Connected only to one device (memory or I/O) and directly controls data transfer.</li>
      <li><b>Dual-Ended DMA:</b> Connected to both source and destination, typically memory and an I/O device.</li>
      <li><b>Arbitrated-Ended DMA:</b> Used in systems with multiple DMA devices; arbitration decides which device gets control of the bus.</li>
      <li><b>Interleaved DMA:</b> Reads from one memory address and writes to another memory address.</li>
    </ul>

    {/* ================= Working of DMA ================= */}
    <h2 className="text-3xl font-bold mt-8">Working of DMA Controller</h2>
    <p className="leading-relaxed">
      The DMA controller has three main registers:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><b>Address Register:</b> Specifies the memory location for read/write.</li>
      <li><b>Word Count Register:</b> Contains the number of words to transfer.</li>
      <li><b>Control Register:</b> Defines the transfer mode (read/write) and starts the DMA transfer.</li>
    </ul>
    <p className="leading-relaxed">
      These registers appear to the CPU as I/O interface registers, allowing program-controlled read/write access via the data bus. The CPU initializes the DMA with:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Starting memory address for reading or writing data.</li>
      <li>Word count for the number of words to transfer.</li>
      <li>Control settings defining transfer mode.</li>
      <li>A signal to begin the DMA transfer.</li>
    </ul>

    {/* ================= Modes of DMA ================= */}
    <h2 className="text-3xl font-bold mt-8">Modes of Data Transfer in DMA</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><b>Burst Mode:</b> DMA takes full control of the system bus and transfers the entire block of data at once. Efficient for large transfers but can delay CPU operations.</li>
      <li><b>Transparent Mode:</b> Transfers data only when CPU is idle, avoiding interference with CPU operations. Suitable when CPU performance is critical.</li>
      <li><b>Cycle Stealing Mode:</b> Transfers one byte/word at a time and releases the bus back to CPU between transfers. Allows DMA operation without fully blocking the CPU, useful for streaming applications.</li>
    </ul>

  </div>
);

export default Home;
