import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Register Transfer Language (RTL) ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Register Transfer Language (RTL)
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 10 Oct, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Register Transfer Language (RTL) is a design abstraction used to describe the behavior and structure of digital circuits, specifically focusing on the transfer of data between registers and the operations performed on that data — such as addition, subtraction, shifting, and logical operations.
    </p>

    <p className="text-lg leading-relaxed">
      RTL defines how data moves from one register to another and how it is processed within a digital system. It provides a high-level representation of circuit behavior, linking algorithmic design with low-level hardware implementation for simulation, synthesis, and verification purposes.
    </p>

    <p className="text-lg leading-relaxed">
      RTL is primarily applied to synchronous circuits, which are controlled by clock signals. RTL designs are typically described using Hardware Description Languages (HDLs) such as Verilog or VHDL. It is widely used in the design of ASICs, FPGAs, and other custom digital hardware.
    </p>

    {/* Usage of RTL in Digital Design */}
    <h2 className="text-3xl font-bold mt-8">Usage of RTL in Digital Design</h2>
    <p className="leading-relaxed">
      RTL describes the flow of data within a digital system by detailing micro-operations performed on data stored in registers. These operations can be categorized as follows:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Micro-operations:</strong> Operations executed on the data stored in registers. They are low-level instructions used to implement complex machine instructions.</li>
      <li><strong>Register Transfer:</strong> Data transferred from one register to another is represented symbolically using a replacement operator, e.g., <code>R2 &lt;- R1</code>.</li>
      <li><strong>Replacement Operator:</strong> In <code>R2 &lt;- R1</code>, the operator <code>&lt;-</code> indicates the transfer of content from R1 to R2.</li>
      <li><strong>Register Representation:</strong> Registers are typically drawn as rectangular boxes with bit numbering along the top. They can be divided into sections, e.g., a 16-bit register split into lower and higher bytes.</li>
    </ul>

    {/* Register Transfer Operations */}
    <h2 className="text-3xl font-bold mt-8">Register Transfer Operations</h2>
    <p className="leading-relaxed">
      Operations performed on data stored in registers are referred to as register transfer operations. Types include:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Simple Transfer:</strong> The content of R1 is copied into R2 without affecting R1. This is an unconditional transfer.</li>
      <li><strong>Conditional Transfer:</strong> If a control condition P=1, the content of R1 is transferred to R2.</li>
      <li><strong>Simultaneous Operations:</strong> If two or more operations occur simultaneously, they are separated by a comma. For example, if P=1, load R1 into R2 and simultaneously R2 into R1.</li>
    </ul>

    {/* Basic Symbols of RTL */}
    <h3 className="text-2xl font-semibold mt-6">Basic Symbols of RTL</h3>
    <table className="table-auto border-collapse border border-gray-400 mt-2 w-full">
      <thead>
        <tr className="bg-gray-400">
          <th className="border border-gray-400 px-4 py-2">Symbol</th>
          <th className="border border-gray-400 px-4 py-2">Description</th>
          <th className="border border-gray-400 px-4 py-2">Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Letters and Numbers</td>
          <td className="border border-gray-400 px-4 py-2">Denotes a register</td>
          <td className="border border-gray-400 px-4 py-2">MAR, R1, R2</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">( )</td>
          <td className="border border-gray-400 px-4 py-2">Denotes a part of register</td>
          <td className="border border-gray-400 px-4 py-2">R1(0-7), R1(8-bit)</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">&lt;-</td>
          <td className="border border-gray-400 px-4 py-2">Denotes a transfer of information</td>
          <td className="border border-gray-400 px-4 py-2">R2 &lt;- R1</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">,</td>
          <td className="border border-gray-400 px-4 py-2">Specifies two micro-operations</td>
          <td className="border border-gray-400 px-4 py-2">R1 &lt;- R2, R2 &lt;- R1</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">:</td>
          <td className="border border-gray-400 px-4 py-2">Denotes conditional operations</td>
          <td className="border border-gray-400 px-4 py-2">P : R2 &lt;- R1 (if P=1)</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">:=</td>
          <td className="border border-gray-400 px-4 py-2">Denotes alias or another name for an existing register</td>
          <td className="border border-gray-400 px-4 py-2">Ra := R1</td>
        </tr>
      </tbody>
    </table>

  </div>
);

export default Home;
