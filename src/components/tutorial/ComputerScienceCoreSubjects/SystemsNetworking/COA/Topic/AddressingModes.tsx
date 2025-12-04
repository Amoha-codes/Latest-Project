import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Addressing Modes ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Addressing Modes
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 22 Sep, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Addressing modes are techniques used by the CPU to identify the location of operands needed for executing an instruction. They define how the CPU interprets the address field in instructions.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Opcode:</strong> Specifies the operation to perform, e.g., ADD, MOV.</li>
      <li><strong>Operands:</strong> The data or addresses on which the operation is performed.</li>
    </ul>

    {/* Types of Addressing Modes */}
    <h2 className="text-3xl font-bold mt-6">Types of Addressing Modes</h2>

    {/* Implicit Addressing */}
    <h3 className="text-2xl font-semibold mt-4">Implicit (Implied) Addressing</h3>
    <p className="text-lg leading-relaxed">
      The operand is not explicitly mentioned; the CPU knows it from the instruction, typically using special registers like the accumulator or stack.
    </p>
    <p className="text-lg leading-relaxed">Example: CLA, PUSH, RET instructions.</p>

    {/* Immediate Addressing */}
    <h3 className="text-2xl font-semibold mt-4">Immediate Addressing</h3>
    <p className="text-lg leading-relaxed">
      The operand is part of the instruction itself. Used when the value is known at programming time.
    </p>
    <p className="text-lg leading-relaxed">
      Example: <code>MOV R1, #5</code> moves the value 5 into register R1.
    </p>

    {/* Direct Addressing */}
    <h3 className="text-2xl font-semibold mt-4">Direct Addressing</h3>
    <p className="text-lg leading-relaxed">
      The instruction contains the memory address of the operand. CPU accesses data directly from that address.
    </p>
    <p className="text-lg leading-relaxed">
      Example: <code>LOAD R1, 1000</code> loads data from memory address 1000 into R1.
    </p>

    {/* Indirect Addressing */}
    <h3 className="text-2xl font-semibold mt-4">Indirect Addressing</h3>
    <p className="text-lg leading-relaxed">
      The instruction contains the address of a register or memory location that holds the actual operand address. CPU first fetches this address, then accesses the operand.
    </p>
    <p className="text-lg leading-relaxed">
      Example: <code>LOAD R1, (R2)</code> loads data from memory location whose address is in R2.
    </p>

    {/* Register Addressing */}
    <h3 className="text-2xl font-semibold mt-4">Register Addressing</h3>
    <p className="text-lg leading-relaxed">
      The operand is located in a CPU register specified by the instruction.
    </p>
    <p className="text-lg leading-relaxed">
      Example: <code>MOV A, B</code> operates between registers A and B.
    </p>

    {/* Register Indirect Addressing */}
    <h3 className="text-2xl font-semibold mt-4">Register Indirect Addressing</h3>
    <p className="text-lg leading-relaxed">
      The register specified contains the memory address of the operand. CPU fetches operand from the address in the register.
    </p>
    <p className="text-lg leading-relaxed">
      Example: <code>MOV A, [R1]</code> uses content of R1 as memory address.
    </p>

    {/* Displacement Addressing */}
    <h3 className="text-2xl font-semibold mt-4">Displacement Addressing (Indexed / Base-Register / Relative)</h3>
    <p className="text-lg leading-relaxed">
      Effective address is calculated by adding a constant displacement to the content of one or more registers.
    </p>
    <p className="text-lg leading-relaxed">
      Example: Accessing an array element relative to a base register.
    </p>

    {/* Stack Addressing */}
    <h3 className="text-2xl font-semibold mt-4">Stack Addressing</h3>
    <p className="text-lg leading-relaxed">
      The operand is implicitly taken from the top of the stack. CPU refers to the stack pointer register automatically.
    </p>
    <p className="text-lg leading-relaxed">
      Example: <code>PUSH</code> and <code>POP</code> instructions.
    </p>

  </div>
);

export default Home;
