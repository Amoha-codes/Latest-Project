import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Instruction Formats ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Instruction Formats
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 21 Oct, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Instruction format defines how instructions are represented in a computer’s memory. It specifies how the CPU decodes and executes instructions. Key components include:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Opcode:</strong> Specifies the operation to perform, e.g., addition, subtraction, or data transfer.</li>
      <li><strong>Operands:</strong> Contains data or addresses of data on which the operation acts.</li>
      <li><strong>Addressing Mode:</strong> Specifies how to interpret or locate the operand, e.g., direct, indirect, or immediate addressing.</li>
    </ul>

    {/* Types of Instruction Formats */}
    <h2 className="text-3xl font-bold mt-6">Types of Instruction Formats</h2>
    <p className="text-lg leading-relaxed">
      Instruction formats are classified into zero, one, two, and three-address types depending on the number of address fields.
    </p>

    {/* Zero Address Instructions */}
    <h3 className="text-2xl font-semibold mt-4">Zero Address Instructions</h3>
    <p className="text-lg leading-relaxed">
      These instructions do not specify operands; they operate on data implicitly using a stack. Reverse Polish Notation (postfix) is commonly used.
    </p>
    <table className="table-auto border-collapse border border-gray-300 w-full text-left mt-2">
      <thead>
        <tr className="bg-gray-400">
          <th className="border border-gray-300 px-2 py-1">Instruction</th>
          <th className="border border-gray-300 px-2 py-1">Stack (TOP Value After Execution)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-2 py-1">PUSH A</td>
          <td className="border border-gray-300 px-2 py-1">TOP = A</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-2 py-1">PUSH B</td>
          <td className="border border-gray-300 px-2 py-1">TOP = B</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-2 py-1">ADD</td>
          <td className="border border-gray-300 px-2 py-1">TOP = A + B</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-2 py-1">PUSH C</td>
          <td className="border border-gray-300 px-2 py-1">TOP = C</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-2 py-1">PUSH D</td>
          <td className="border border-gray-300 px-2 py-1">TOP = D</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-2 py-1">ADD</td>
          <td className="border border-gray-300 px-2 py-1">TOP = C + D</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-2 py-1">MUL</td>
          <td className="border border-gray-300 px-2 py-1">TOP = (A + B) * (C + D)</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-2 py-1">POP X</td>
          <td className="border border-gray-300 px-2 py-1">M[X] = TOP</td>
        </tr>
      </tbody>
    </table>

    {/* One Address Instructions */}
    <h3 className="text-2xl font-semibold mt-4">One Address Instructions</h3>
    <p className="text-lg leading-relaxed">
      These instructions specify one operand, usually using an accumulator register. The other operand is implied to be in the accumulator.
    </p>
    <table className="table-auto border-collapse border border-gray-300 w-full text-left mt-2">
      <thead>
        <tr className="bg-gray-400">
          <th className="border border-gray-300 px-2 py-1">Instruction</th>
          <th className="border border-gray-300 px-2 py-1">AC / M[]</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-2 py-1">AC = A</td>
          <td className="border border-gray-300 px-2 py-1">AC = A</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-2 py-1">AC = AC + B</td>
          <td className="border border-gray-300 px-2 py-1">AC = A + B</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-2 py-1">M[T] = AC</td>
          <td className="border border-gray-300 px-2 py-1">M[T] = A + B</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-2 py-1">AC = C</td>
          <td className="border border-gray-300 px-2 py-1">AC = C</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-2 py-1">AC = AC + D</td>
          <td className="border border-gray-300 px-2 py-1">AC = C + D</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-2 py-1">AC = AC * M[T]</td>
          <td className="border border-gray-300 px-2 py-1">AC = (A + B) * (C + D)</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-2 py-1">M[X] = AC</td>
          <td className="border border-gray-300 px-2 py-1">M[X] = (A + B) * (C + D)</td>
        </tr>
      </tbody>
    </table>

    {/* Two Address Instructions */}
    <h3 className="text-2xl font-semibold mt-4">Two Address Instructions</h3>
    <p className="text-lg leading-relaxed">
      These instructions specify two operands. The result may be stored in either operand or a memory location.
    </p>
    <table className="table-auto border-collapse border border-gray-300 w-full text-left mt-2">
      <thead>
        <tr className="bg-gray-400">
          <th className="border border-gray-300 px-2 py-1">Instruction</th>
          <th className="border border-gray-300 px-2 py-1">Registers / Memory</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border border-gray-300 px-2 py-1">R1 = A</td><td className="border border-gray-300 px-2 py-1">R1 = A</td></tr>
        <tr><td className="border border-gray-300 px-2 py-1">R1 = R1 + B</td><td className="border border-gray-300 px-2 py-1">R1 = A + B</td></tr>
        <tr><td className="border border-gray-300 px-2 py-1">R2 = C</td><td className="border border-gray-300 px-2 py-1">R2 = C</td></tr>
        <tr><td className="border border-gray-300 px-2 py-1">R2 = R2 + D</td><td className="border border-gray-300 px-2 py-1">R2 = C + D</td></tr>
        <tr><td className="border border-gray-300 px-2 py-1">R1 = R1 * R2</td><td className="border border-gray-300 px-2 py-1">R1 = (A + B) * (C + D)</td></tr>
        <tr><td className="border border-gray-300 px-2 py-1">M[X] = R1</td><td className="border border-gray-300 px-2 py-1">M[X] = (A + B) * (C + D)</td></tr>
      </tbody>
    </table>

    {/* Three Address Instructions */}
    <h3 className="text-2xl font-semibold mt-4">Three Address Instructions</h3>
    <p className="text-lg leading-relaxed">
      These instructions specify three operands. Programs are shorter but instruction size increases.
    </p>
    <table className="table-auto border-collapse border border-gray-300 w-full text-left mt-2">
      <thead>
        <tr className="bg-gray-400">
          <th className="border border-gray-300 px-2 py-1">Instruction</th>
          <th className="border border-gray-300 px-2 py-1">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border border-gray-300 px-2 py-1">R1 = A</td><td className="border border-gray-300 px-2 py-1">Load value A into R1</td></tr>
        <tr><td className="border border-gray-300 px-2 py-1">R1 = R1 + B</td><td className="border border-gray-300 px-2 py-1">Add B to R1</td></tr>
        <tr><td className="border border-gray-300 px-2 py-1">M[T1] = R1</td><td className="border border-gray-300 px-2 py-1">Store R1 into memory at M[T1]</td></tr>
        <tr><td className="border border-gray-300 px-2 py-1">R2 = C</td><td className="border border-gray-300 px-2 py-1">Load value C into R2</td></tr>
        <tr><td className="border border-gray-300 px-2 py-1">R2 = R2 + D</td><td className="border border-gray-300 px-2 py-1">Add D to R2</td></tr>
        <tr><td className="border border-gray-300 px-2 py-1">M[T2] = R2</td><td className="border border-gray-300 px-2 py-1">Store R2 into memory at M[T2]</td></tr>
        <tr><td className="border border-gray-300 px-2 py-1">R1 = M[T1]</td><td className="border border-gray-300 px-2 py-1">Load M[T1] into R1</td></tr>
        <tr><td className="border border-gray-300 px-2 py-1">R1 = R1 * M[T2]</td><td className="border border-gray-300 px-2 py-1">Multiply R1 by M[T2] and store in R1</td></tr>
        <tr><td className="border border-gray-300 px-2 py-1">M[X] = R1</td><td className="border border-gray-300 px-2 py-1">Store R1 into memory at M[X]</td></tr>
      </tbody>
    </table>

    {/* CPU Organization */}
    <h3 className="text-2xl font-semibold mt-4">CPU Organization and Instruction Formats</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Single Accumulator Organisation:</strong> Uses one special register (accumulator) to store and process data.</li>
      <li><strong>General Register Organisation:</strong> Uses several general-purpose registers to hold operands for operations.</li>
      <li><strong>Stack Organisation:</strong> Works with a stack, processing data using the top elements without directly specifying operands.</li>
    </ul>

  </div>
);

export default Home;
