import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Computer Bus ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      What is a Computer Bus?
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 10 Oct, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      A computer bus is a communication system used to transfer data between components within a computer or between different computers. It plays a vital role in minimizing the number of connections needed by centralizing communication over shared pathways.
    </p>

    <p className="text-lg leading-relaxed">
      A bus consists of physical connections such as wires, circuits, or cables, connecting components like the CPU, memory, and input/output (I/O) devices. It simplifies data transfer and improves overall system efficiency.
    </p>

    {/* Types of Buses */}
    <h2 className="text-3xl font-bold mt-8">Types of Buses</h2>
    <p className="leading-relaxed">
      There are three main types of buses in a computer system:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Address Bus:</strong> A collection of wires used to identify a particular memory location. It transports memory addresses that the processor wants to access for reading or writing data. The address bus is unidirectional, and its width determines the number of unique memory locations that can be addressed.
        <br />
        <strong>Examples:</strong>
        <ul className="list-disc ml-6">
          <li>4-bit bus → 2⁴ = 16 Bytes</li>
          <li>16-bit bus → 2¹⁶ = 64 KB</li>
          <li>20-bit bus → 2²⁰ = 1 MB</li>
        </ul>
      </li>

      <li className="mt-2">
        <strong>Data Bus:</strong> A collection of wires through which data is transmitted between parts of the computer. It transfers instructions and data to and from the processor, memory, and I/O devices. The data bus is bidirectional, and its width determines how much data can be transmitted at one time.
        <br />
        <strong>Examples:</strong>
        <ul className="list-disc ml-6">
          <li>16-bit bus → 16 bits at a time</li>
          <li>32-bit bus → 32 bits at a time</li>
        </ul>
      </li>

      <li className="mt-2">
        <strong>Control Bus:</strong> Carries control and synchronization signals between the CPU and other devices. It transports instructions from the control unit and responses from hardware. The control bus is bidirectional.
      </li>
    </ul>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Comparison Between System Buses</h2>
    <table className="table-auto border-collapse border border-gray-400 mt-2 w-full">
      <thead>
        <tr className="bg-gray-400">
          <th className="border border-gray-400 px-4 py-2">Bus</th>
          <th className="border border-gray-400 px-4 py-2">Purpose & Key Role</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Address Bus (Unidirectional)</td>
          <td className="border border-gray-400 px-4 py-2">Carries memory addresses; identifies where data should go</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Data Bus (Bidirectional)</td>
          <td className="border border-gray-400 px-4 py-2">Carries actual data; moves data between components</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Control Bus (Bidirectional)</td>
          <td className="border border-gray-400 px-4 py-2">Carries control and synchronization signals; coordinates CPU and device actions</td>
        </tr>
      </tbody>
    </table>

  </div>
);

export default Home;
