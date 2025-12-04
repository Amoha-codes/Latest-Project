import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= ALU Functions and Bus Organization ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      ALU Functions and Bus Organization
    </h1>

    <p className="text-sm text-gray-500">Last Updated : 13 Oct, 2025</p>

    <p className="text-lg leading-relaxed">
      The Arithmetic Logic Unit (ALU) and the Data Path are core components that enable the CPU 
      to execute instructions and manage data efficiently. These components work together with 
      registers and buses to perform operations and move data across the system.
    </p>

    {/* ALU Section */}
    <h2 className="text-3xl font-bold mt-6">Arithmetic Logic Unit (ALU)</h2>

    <p className="leading-relaxed">
      The ALU is a digital circuit within the CPU that performs all arithmetic and logical 
      operations. It takes input from registers, processes the operation, and sends the result 
      back to a destination register or memory.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Performs operations like addition, subtraction, AND, OR, NOT, etc.</li>
      <li>Controlled by the control unit based on the instruction type.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-6">Functions and Operations of ALU</h3>

    {/* 1. Arithmetic */}
    <h4 className="text-xl font-semibold mt-4">1. Arithmetic Operations</h4>
    <p className="leading-relaxed">
      ALU performs basic mathematical calculations on binary numbers.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Addition, subtraction, increment, decrement</li>
      <li>Used in instructions like ADD, SUB, INC, DEC</li>
    </ul>

    {/* 2. Logical */}
    <h4 className="text-xl font-semibold mt-4">2. Logical Operations</h4>
    <p className="leading-relaxed">
      These operations manipulate data at the bit level using logic gates.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Bitwise AND, OR, XOR, NOT</li>
      <li>Used for masking, setting, clearing, toggling bits</li>
    </ul>

    {/* 3. Shifts */}
    <h4 className="text-xl font-semibold mt-4">3. Shift Operations</h4>
    <p className="leading-relaxed">
      ALU can shift bits left or right for fast arithmetic and bit manipulation.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Logical shift</li>
      <li>Arithmetic shift</li>
      <li>Rotate operations</li>
    </ul>

    {/* 4. Comparisons */}
    <h4 className="text-xl font-semibold mt-4">4. Comparison Operations</h4>
    <p className="leading-relaxed">
      ALU evaluates two operands and sets appropriate flags.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Equality</li>
      <li>Greater than</li>
      <li>Less than</li>
    </ul>

    {/* 5. Flags */}
    <h4 className="text-xl font-semibold mt-4">5. Status Flag Generation</h4>
    <p className="leading-relaxed">
      Flags influence branching and program control.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Zero (Z)</li>
      <li>Carry (C)</li>
      <li>Sign (S)</li>
      <li>Overflow (V)</li>
    </ul>

    {/* BUS Section */}
    <h2 className="text-3xl font-bold mt-8">BUS</h2>
    <p className="leading-relaxed">
      A bus is a communication system that transfers data between CPU components such as 
      registers, ALU, and memory.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Data Bus</li>
      <li>Address Bus</li>
      <li>Control Bus</li>
    </ul>

    <p className="leading-relaxed">
      Since it is a shared pathway, typically only one operation occurs at a time.
    </p>

    {/* Registers */}
    <h2 className="text-3xl font-bold mt-8">Registers</h2>
    <p className="leading-relaxed">
      Registers are small, fast memory elements inside the CPU that temporarily hold 
      instructions, addresses, and data.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Accumulator</li>
      <li>Program Counter</li>
      <li>General-Purpose Registers</li>
    </ul>

    {/* Data Path */}
    <h2 className="text-3xl font-bold mt-8">Data Path</h2>
    <p className="leading-relaxed">
      The Data Path includes the ALU, registers, and buses and executes instructions by moving 
      and transforming data according to control signals.
    </p>

    {/* One Bus */}
    <h2 className="text-3xl font-bold mt-8">One Bus Organization</h2>
    <p className="leading-relaxed">
      Uses a single bus for all CPU data transfers.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Only one data movement at a time</li>
      <li>Requires temporary registers</li>
    </ul>

    {/* Two Bus */}
    <h2 className="text-3xl font-bold mt-8">Two Bus Organization</h2>

    <h3 className="text-xl font-semibold mt-4">Version 1: Standard Two-Bus with ALU Inputs</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Two buses feed operands directly into ALU</li>
      <li>ALU output goes to result bus or register</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">Version 2: Bus-In and Bus-Out Architecture</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Bus-Out sends data to ALU/memory</li>
      <li>Bus-In receives results</li>
      <li>Allows simultaneous read and write operations</li>
    </ul>

    {/* Three Bus */}
    <h2 className="text-3xl font-bold mt-8">Three Bus Organization</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Two buses for ALU input, one for output</li>
      <li>Read two operands + write result in one cycle</li>
      <li>Faster execution but more hardware</li>
    </ul>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages of Multiple Bus Organization</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Increase in size of registers</li>
      <li>Reduction in number of cycles for execution</li>
      <li>Faster overall performance</li>
    </ul>

  </div>
);

export default Home;
