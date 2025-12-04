import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Combinational and Sequential Circuits ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Combinational and Sequential Circuits
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 30 Aug, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Digital logic circuits are fundamental components in modern electronic devices, enabling operations in systems like computers, mobile phones, and calculators by processing binary data through logic gates such as AND, OR, and NOT. These circuits perform tasks like data storage, decision-making, and control functions.
    </p>

    <p className="text-lg leading-relaxed">
      Digital circuits are primarily classified into two categories: <strong>combinational</strong> and <strong>sequential</strong>. Combinational circuits produce outputs based solely on the current inputs, while sequential circuits, built from both combinational circuits and memory elements like flip-flops, generate outputs dependent on both the current and previous states.
    </p>

    {/* Combinational Circuits */}
    <h2 className="text-3xl font-bold mt-8">Combinational Circuits</h2>
    <p className="leading-relaxed">
      Combinational logic circuits are made from basic logic gates (AND, OR, NOT) or universal gates (NAND, NOR) connected to create more complex circuits. The output at any given time depends only on the current inputs, not on past states.
    </p>

    <p className="leading-relaxed">
      These circuits are essential for tasks such as arithmetic operations, data routing, and comparisons.
    </p>

    {/* Classification of Combinational Circuits */}
    <h3 className="text-2xl font-semibold mt-6">Classification</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Arithmetic or Logical Functions:</strong> Performs mathematical or logical operations like addition, subtraction, and comparison.</li>
      <li><strong>Data Transmission:</strong> Routes and controls data flow between different system parts.</li>
      <li><strong>Code Converters:</strong> Converts data from one format or code to another, such as binary to decimal.</li>
    </ul>

    {/* Sequential Circuits */}
    <h2 className="text-3xl font-bold mt-8">Sequential Circuits</h2>
    <p className="leading-relaxed">
      Sequential logic differs from combinational logic because its output depends on both current inputs and previous states. Sequential circuits have memory elements that store the circuit's "history," influencing future outputs.
    </p>

    <h3 className="text-2xl font-semibold mt-6">Structure</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Memory Elements:</strong> Typically flip-flops, which store the circuit’s state.</li>
      <li><strong>Combinational Logic:</strong> Generates excitation inputs for memory elements and produces outputs based on current inputs and stored state.</li>
    </ul>

    <p className="leading-relaxed mt-2">
      The state of memory elements defines the current state of a sequential circuit. Outputs depend on both present inputs and previous states, and the next state of memory elements depends on the external input and current state.
    </p>

    <h3 className="text-2xl font-semibold mt-6">Types of Sequential Circuits</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Synchronous Sequential Circuits:</strong> Memory content changes only at specific clock transitions; also called clocked sequential circuits.</li>
      <li><strong>Asynchronous Sequential Circuits:</strong> Output can change at any time with input changes. These use delay-type memory elements and can be viewed as combinational circuits with feedback.</li>
    </ul>

    {/* Comparison Table */}
    <h3 className="text-2xl font-semibold mt-6">Combinational vs Sequential Circuits</h3>
    <table className="table-auto border-collapse border border-gray-400 mt-2 w-full">
      <thead>
        <tr className="bg-gray-400">
          <th className="border border-gray-400 px-4 py-2">Combinational Circuit</th>
          <th className="border border-gray-400 px-4 py-2">Sequential Circuit</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Output depends only on current inputs.</td>
          <td className="border border-gray-400 px-4 py-2">Output depends on current inputs and past states.</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Does not require memory elements.</td>
          <td className="border border-gray-400 px-4 py-2">Requires memory elements (e.g., flip-flops).</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">No clock signal required.</td>
          <td className="border border-gray-400 px-4 py-2">Requires a clock signal to synchronize state changes.</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Simpler design.</td>
          <td className="border border-gray-400 px-4 py-2">More complex due to memory and clock management.</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Examples: Adders, Subtractors, Multiplexers.</td>
          <td className="border border-gray-400 px-4 py-2">Examples: Counters, Shift Registers, Flip-Flops.</td>
        </tr>
      </tbody>
    </table>

  </div>
);

export default Home;
