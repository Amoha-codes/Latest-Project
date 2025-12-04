import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Introduction of Microcomputer System ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction of Microcomputer System
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 Jul, 2025</p>

    <p className="text-lg leading-relaxed">
      Microcomputer systems are small and inexpensive computers that are widely used in various
      applications. The 8085 microprocessor is an example of a Microcomputer System. A microprocessor
      system contains two types of memory (EPROM and R/WM), Input and Output devices, and buses that
      link all peripherals (memory and I/Os) to the MPU.
    </p>

    {/* MPU Section */}
    <h2 className="text-3xl font-bold mt-8">The Microprocessor Unit (MPU)</h2>
    <p className="leading-relaxed">
      The MPU is the brain of the microcomputer system. It contains the Arithmetic and Logic Unit
      (ALU) and the Control Unit (CU), which work together to execute instructions. The 8085
      microcomputer system has 16 address lines, A0 to A15, used to address memory. The lower-order
      address bus A0–A7 is used to identify input and output devices.
    </p>

    {/* Memory Section */}
    <h2 className="text-3xl font-bold mt-8">Memory</h2>
    <p className="leading-relaxed">
      There are two types of memory in the microcomputer system:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>EPROM</strong>: Erasable Programmable Read-Only Memory; can be programmed once and erased using UV light.</li>
      <li><strong>R/WM</strong>: Random-Access Read-Write Memory; data can be both read and written.</li>
    </ul>

    <p className="leading-relaxed">
      The MPU communicates with memory using <strong>memory read</strong> and
      <strong> memory write</strong> control signals.
    </p>

    {/* I/O Section */}
    <h2 className="text-3xl font-bold mt-8">Input and Output (I/O) Devices</h2>
    <p className="leading-relaxed">
      The microcomputer system contains input and output devices to interact with the external
      environment. It has 8 data lines, D0–D7, which are bidirectional and common to all devices.
      The system generates four control signals:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Memory Read</li>
      <li>Memory Write</li>
      <li>I/O Read</li>
      <li>I/O Write</li>
    </ul>

    <p className="leading-relaxed">
      These signals connect to various peripheral devices.
    </p>

    {/* Interfacing Devices Section */}
    <h2 className="text-3xl font-bold mt-8">Interfacing Devices</h2>
    <p className="leading-relaxed">
      The MPU communicates with only one peripheral at a time by enabling it through its control
      signal. For example, to send data to an output device, the MPU places the device address on the
      address bus, data on the data bus, and enables the output device using the I/O Write signal.
    </p>

    <p className="leading-relaxed">
      Devices not enabled remain in a high-impedance (Tri-state) condition. Bus drivers increase bus
      current capacity, decoders identify output ports, and latches hold data for display.
      These components are essential for connecting peripherals to the bus system.
    </p>

    {/* Summary Section */}
    <h2 className="text-3xl font-bold mt-8">Summary</h2>
    <p className="leading-relaxed">
      A microcomputer system contains an MPU, memory, input/output devices, and buses connecting all
      peripherals. It communicates using control signals, and interfacing devices ensure proper
      connectivity across the system.
    </p>

    {/* Advantages Section */}
    <h2 className="text-3xl font-bold mt-8">Advantages</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Flexibility</strong>: Can handle many tasks and can be upgraded easily.</li>
      <li><strong>Cost-effective</strong>: Cheaper compared to larger computer systems.</li>
      <li><strong>Compact size</strong>: Ideal for space-limited applications.</li>
      <li><strong>Ease of use</strong>: User-friendly and simple to operate.</li>
    </ul>

    {/* Disadvantages Section */}
    <h2 className="text-3xl font-bold mt-8">Disadvantages</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Limited processing power for complex tasks.</li>
      <li>Limited memory capacity.</li>
      <li>Fewer I/O options for complex interfacing.</li>
      <li>Limited expansion compared to larger systems.</li>
    </ul>
  </div>
);

export default Home;
