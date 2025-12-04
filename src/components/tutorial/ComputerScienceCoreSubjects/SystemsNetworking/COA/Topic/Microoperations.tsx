import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Micro-Operation ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Micro-Operation
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 16 Sep, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Micro-operations (micro-ops) are the atomic operations of a processor. These are low-level instructions that perform tasks on data stored in registers. They move data between registers or CPU buses, and execute arithmetic, logic, or shift operations on registers.
    </p>
    <p className="text-lg leading-relaxed">
      During a program's execution, a computer performs instruction cycles, with each machine instruction consisting of several smaller steps called micro-operations. These steps are very simple operations inside the CPU.
    </p>

    {/* How Micro-Operations Work */}
    <h2 className="text-3xl font-bold mt-6">How Micro-Operations Work?</h2>
    <p className="text-lg leading-relaxed">
      Micro-operations are combined to perform complex instructions. For example, an addition instruction may involve:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Load: Move values into registers.</li>
      <li>Add: Perform the arithmetic operation.</li>
      <li>Store: Save the result back into memory.</li>
    </ul>

    {/* Types of Micro-Operations */}
    <h2 className="text-3xl font-bold mt-6">Types of Micro-Operations</h2>
    <p className="text-lg leading-relaxed">
      Micro-operations generally fall into four major categories:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Register Transfer Micro-Operations:</strong> Move data between registers or between registers and memory/I/O (e.g., load data from memory into a register).</li>
      <li><strong>Arithmetic Micro-Operations:</strong> Perform arithmetic operations on registers like addition, subtraction, increment, and decrement.</li>
      <li><strong>Logic Micro-Operations:</strong> Execute logical (bitwise) operations such as AND, OR, XOR, and NOT on register contents.</li>
      <li><strong>Shift Micro-Operations:</strong> Shift or rotate bits in a register to the left or right for multiplication/division or bitwise manipulation.</li>
    </ul>

    {/* Examples */}
    <h2 className="text-3xl font-bold mt-6">Examples of Micro-Operations</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Load:</strong> Moves data from memory into a register.</li>
      <li><strong>Store:</strong> Saves data from a register back into memory.</li>
      <li><strong>Add:</strong> Adds two values and stores the result in a register.</li>
      <li><strong>Subtract:</strong> Subtracts one value from another and stores the result in a register.</li>
      <li><strong>AND:</strong> Performs a logical AND operation on two values and stores the result in a register.</li>
      <li><strong>OR:</strong> Performs a logical OR operation on two values and stores the result in a register.</li>
      <li><strong>NOT:</strong> Reverses the bits of a value and stores the result in a register.</li>
      <li><strong>Shift:</strong> Moves the bits of a value left or right within a register.</li>
      <li><strong>Rotate:</strong> Rotates the bits of a value left or right in a register.</li>
    </ul>

  </div>
);

export default Home;
