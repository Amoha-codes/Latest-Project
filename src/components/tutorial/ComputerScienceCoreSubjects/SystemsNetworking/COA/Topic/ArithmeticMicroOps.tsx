import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Arithmetic Micro-operations ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Arithmetic Micro-operations in Registers
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 09 Sep, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Arithmetic micro-operations are fundamental operations performed directly on the data stored inside CPU registers. They involve basic arithmetic processes like addition, subtraction, incrementing, decrementing, and bit shifting.
    </p>

    <p className="text-lg leading-relaxed">
      Registers hold numbers, instructions, or addresses for a short time while the computer executes programs. These simple operations form the foundation for more complex calculations, enabling the CPU to run programs efficiently.
    </p>

    {/* Example */}
    <p className="text-lg leading-relaxed font-semibold">
      Example:
    </p>
    <p className="text-lg leading-relaxed">
      <code>R3 &lt;- R1 + R2</code>: The value in register R1 is added to the value in register R2, and the sum is stored in R3. Other arithmetic micro-operations follow similar principles.
    </p>

    {/* Types of Arithmetic Micro-operations */}
    <h2 className="text-3xl font-bold mt-8">Types of Arithmetic Micro-operations</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Addition:</strong> Adds the contents of R1 and R2, storing the result in R3.
      </li>
      <li className="mt-2">
        <strong>Subtraction:</strong> Subtracts R2 from R1 and stores the result in R3. Alternatively, R1 + 2's complement of R2 achieves the same result.
      </li>
      <li className="mt-2">
        <strong>Increment:</strong> Increases the value of a register (R1) by 1.
      </li>
      <li className="mt-2">
        <strong>Decrement:</strong> Decreases the value of a register (R1) by 1.
      </li>
      <li className="mt-2">
        <strong>1's Complement:</strong> Flips all bits of the register (R1).
      </li>
      <li className="mt-2">
        <strong>2's Complement:</strong> Takes the complement of a register (R2) and adds 1, effectively negating its value.
      </li>
    </ul>

    {/* Micro-operations Table */}
    <h2 className="text-3xl font-bold mt-8">Arithmetic Micro-operations and Examples</h2>
    <table className="table-auto border-collapse border border-gray-400 mt-2 w-full">
      <thead>
        <tr className="bg-gray-400">
          <th className="border border-gray-400 px-4 py-2">Micro-operation</th>
          <th className="border border-gray-400 px-4 py-2">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Addition</td>
          <td className="border border-gray-400 px-4 py-2">Adds two register values: R3 ← R1 + R2</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Subtraction</td>
          <td className="border border-gray-400 px-4 py-2">Subtracts one register from another: R3 ← R1 - R2</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Increment</td>
          <td className="border border-gray-400 px-4 py-2">Adds 1 to a register: R1 ← R1 + 1</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Decrement</td>
          <td className="border border-gray-400 px-4 py-2">Subtracts 1 from a register: R1 ← R1 - 1</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">1's Complement</td>
          <td className="border border-gray-400 px-4 py-2">Flips all bits of a register: R1 ← ¬R1</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">2's Complement</td>
          <td className="border border-gray-400 px-4 py-2">Negation: R1 ← -R1 (¬R1 + 1)</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Multiplication</td>
          <td className="border border-gray-400 px-4 py-2">Multiplies two registers: R3 ← R1 × R2</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Division</td>
          <td className="border border-gray-400 px-4 py-2">Divides one register by another: Quotient in R1, Remainder in R2</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Shift</td>
          <td className="border border-gray-400 px-4 py-2">Shifts bits left/right: R1 ← shl R1</td>
        </tr>
      </tbody>
    </table>

  </div>
);

export default Home;
