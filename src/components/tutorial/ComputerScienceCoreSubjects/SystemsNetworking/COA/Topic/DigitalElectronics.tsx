import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Digital Electronics and Logic Design ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Digital Electronics and Logic Design
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 19 Sep, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Digital electronics and logic design form the foundation of modern computing, enabling the operation of devices from smartphones to advanced computers. Digital electronics focuses on circuits that process binary data (0s and 1s), while logic design involves creating systems that perform specific functions using logical operations.
    </p>

    {/* Digital Electronics */}
    <h2 className="text-3xl font-bold mt-8">Digital Electronics</h2>
    <p className="leading-relaxed">
      Digital electronics is the branch of electronic systems that use discrete signals to represent and process information. This technology is the core of most modern devices and systems.
    </p>

    {/* Difference Between Analog and Digital */}
    <h2 className="text-3xl font-bold mt-8">Difference Between Analog and Digital Systems</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Analog Systems:</strong> Process continuous signals; information is represented by continuous waves. Example: audio voltages that continuously vary.
      </li>
      <li>
        <strong>Digital Systems:</strong> Process discrete signals, often binary. Signals consist of distinct values, making systems stable and less prone to noise.
      </li>
    </ul>

    {/* Logic Design */}
    <h2 className="text-3xl font-bold mt-8">Logic Design</h2>
    <p className="leading-relaxed">
      Logic design is the process of creating digital circuits using logic gates to perform specific functions. The goal is to convert high-level problems into a series of logical operations that digital circuits can execute efficiently.
    </p>

    {/* Logic Gates */}
    <h2 className="text-3xl font-bold mt-8">Logic Gates</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>AND Gate:</strong> Output 1 only when all inputs are 1.</li>
      <li><strong>OR Gate:</strong> Output 1 when at least one input is 1.</li>
      <li><strong>NOT Gate:</strong> Inverts input; outputs 1 when input is 0.</li>
      <li><strong>NAND Gate:</strong> Inverse of AND; outputs 0 only when all inputs are 1.</li>
      <li><strong>NOR Gate:</strong> Inverse of OR; outputs 1 only when all inputs are 0.</li>
      <li><strong>XOR Gate:</strong> Outputs 1 when the number of 1 inputs is odd.</li>
      <li><strong>XNOR Gate:</strong> Outputs 1 when the number of 1 inputs is even.</li>
    </ul>

    {/* Logic Circuit Types */}
    <h2 className="text-3xl font-bold mt-8">Types of Logic Circuits</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Combinational Logic:</strong> Output depends only on current inputs. Examples: adders, multiplexers, encoders.
      </li>
      <li>
        <strong>Sequential Logic:</strong> Circuits with memory elements; output depends on current and past inputs. Examples: flip-flops, registers, counters.
      </li>
    </ul>

    {/* Core Concepts */}
    <h2 className="text-3xl font-bold mt-8">Core Concepts</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Binary Number System:</strong> Uses 0 and 1 for data representation; conversions between binary, decimal, and hexadecimal are essential.</li>
      <li><strong>Logic Gates and Truth Tables:</strong> Gates perform binary operations; truth tables show all possible input-output combinations.</li>
      <li><strong>Boolean Algebra:</strong> Simplifies logic expressions and optimizes circuits.</li>
      <li><strong>Combinational Circuits:</strong> Depend solely on current inputs; no memory.</li>
      <li><strong>Sequential Circuits:</strong> Store and process information based on current and past inputs.</li>
    </ul>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Computing Systems: Fast arithmetic, storage, and I/O operations.</li>
      <li>Communication Systems: Data transmission and signal processing in phones, routers, satellites.</li>
      <li>Consumer Electronics: TVs, gaming consoles, and smart devices.</li>
      <li>Automotive Systems: Engine control, safety, navigation automation.</li>
      <li>Medical Devices: Precise monitoring and diagnostics.</li>
      <li>Embedded Systems: Efficient control in appliances, robotics, and automation.</li>
      <li>Industrial Automation: Precision and smooth process control in manufacturing.</li>
    </ul>

  </div>
);

export default Home;
