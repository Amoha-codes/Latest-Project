import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Title ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      What is a Computer Bus?
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 10 Oct, 2025</p>

    {/* ================= Intro ================= */}
    <p className="text-lg leading-relaxed">
      A <strong>computer bus</strong> is a communication system used to transfer data between
      components inside a computer or between multiple computers. It reduces the number of
      required connections by allowing communication over shared pathways.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>It consists of physical connections such as wires, circuits, and cables.</li>
      <li>It connects the CPU, memory, and I/O devices through a shared path.</li>
      <li>It simplifies communication and increases data transfer efficiency.</li>
    </ul>

    {/* ================= Types of Buses ================= */}
    <h2 className="text-3xl font-bold mt-8">Types of Buses</h2>
    <p className="leading-relaxed">
      A computer system mainly uses the following three types of buses:
    </p>

    {/* ================= Address Bus ================= */}
    <h3 className="text-2xl font-bold mt-6">1. Address Bus</h3>
    <p className="leading-relaxed">
      The <strong>address bus</strong> is a set of wires used to carry memory addresses that
      the processor wants to access for reading or writing data.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>It carries memory addresses only — not data.</li>
      <li>It is <strong>unidirectional</strong>.</li>
      <li>The width of the address bus determines the maximum addressable memory.</li>
    </ul>

    <p className="leading-relaxed font-semibold mt-2">Examples:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>4-bit address bus → 2⁴ = 16 bytes</li>
      <li>16-bit address bus → 2¹⁶ = 64 KB</li>
      <li>20-bit address bus → 2²⁰ = 1 MB</li>
    </ul>

    {/* ================= Data Bus ================= */}
    <h3 className="text-2xl font-bold mt-6">2. Data Bus</h3>
    <p className="leading-relaxed">
      The <strong>data bus</strong> is a group of wires through which actual data is
      transferred within the computer.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Transfers data between CPU, memory, and I/O devices.</li>
      <li>Carries instructions to/from the processor.</li>
      <li>It is <strong>bidirectional</strong>.</li>
      <li>The width determines how many bits can be transferred at once.</li>
    </ul>

    <p className="leading-relaxed font-semibold mt-2">Examples:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>16-bit data bus → transfers 16 bits at a time.</li>
      <li>32-bit data bus → transfers 32 bits at a time.</li>
    </ul>

    {/* ================= Control Bus ================= */}
    <h3 className="text-2xl font-bold mt-6">3. Control Bus</h3>
    <p className="leading-relaxed">
      The <strong>control bus</strong> carries control and coordination signals between the
      CPU and other components.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Carries signals like read, write, interrupt, and clock.</li>
      <li>Manages synchronization between CPU and devices.</li>
      <li>It is <strong>bidirectional</strong>.</li>
      <li>Also carries acknowledgment and response signals.</li>
    </ul>

    {/* ================= Comparison Table ================= */}
    <h2 className="text-3xl font-bold mt-8">Comparison Between System Buses</h2>

    <div className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      <p><strong>Address Bus (Unidirectional):</strong> Carries memory addresses; identifies locations.</p>
      <p><strong>Data Bus (Bidirectional):</strong> Transfers actual data between components.</p>
      <p><strong>Control Bus (Bidirectional):</strong> Sends control and sync signals for coordination.</p>
    </div>

  </div>
);

export default Home;
