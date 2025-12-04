import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Shift Micro-Operations ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Shift Micro-Operations
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 16 Oct, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Shift micro-operations move bits left or right within a register and are used in tasks like data storage, serial transmission, multiplication, division, and logical operations. They are often combined with arithmetic and logic operations for efficient processing.
    </p>

    {/* Logical Shift */}
    <h2 className="text-3xl font-bold mt-6">Logical Shift</h2>
    <p className="text-lg leading-relaxed">
      A logical shift moves the bits of data in a register either to the left or right, introducing zeroes into the empty positions. Logical shifts are used primarily in binary arithmetic and data processing tasks.
    </p>

    <h3 className="text-2xl font-semibold mt-4">1. Logical Left Shift</h3>
    <p className="text-lg leading-relaxed">
      Each bit is moved to the left by one position. The empty least significant bit (LSB) is filled with zero, and the most significant bit (MSB) is discarded. Syntax: <code>shift-expression &lt;&lt; k</code>.
    </p>
    <p className="text-lg leading-relaxed font-semibold">Example:</p>
    <p className="text-lg leading-relaxed">
      8-bit number 01010011 (83 decimal) → Logical Left Shift → 10100110 (166 decimal)
    </p>

    <h3 className="text-2xl font-semibold mt-4">2. Logical Right Shift</h3>
    <p className="text-lg leading-relaxed">
      Each bit moves to the right by one position. The LSB is discarded, and the empty MSB is filled with zero. Syntax: <code>shift-expression &gt;&gt; k</code>.
    </p>
    <p className="text-lg leading-relaxed font-semibold">Example:</p>
    <p className="text-lg leading-relaxed">
      8-bit number 01010011 (83 decimal) → Logical Right Shift → 00101001 (41 decimal)
    </p>

    {/* Arithmetic Shift */}
    <h2 className="text-3xl font-bold mt-6">Arithmetic Shift</h2>
    <p className="text-lg leading-relaxed">
      Arithmetic shifts move signed binary numbers left or right while preserving the sign bit.
    </p>

    <h3 className="text-2xl font-semibold mt-4">1. Arithmetic Left Shift</h3>
    <p className="text-lg leading-relaxed">
      Each bit moves left, empty LSB filled with zero. Conceptually used as multiplication by 2 for signed integers.
    </p>
    <p className="text-lg leading-relaxed font-semibold">Example:</p>
    <p className="text-lg leading-relaxed">
      8-bit signed number 11111111 (-1 decimal) → Arithmetic Left Shift → 11111110 (-2 decimal)
    </p>

    <h3 className="text-2xl font-semibold mt-4">2. Arithmetic Right Shift</h3>
    <p className="text-lg leading-relaxed">
      Each bit moves right, empty MSB filled with previous MSB. Used for dividing signed numbers by powers of 2.
    </p>
    <p className="text-lg leading-relaxed font-semibold">Example:</p>
    <p className="text-lg leading-relaxed">
      8-bit signed number 11111111 (-1 decimal) → Arithmetic Right Shift → 11111111 (-1 decimal)
    </p>

    {/* Circular Shift */}
    <h2 className="text-3xl font-bold mt-6">Circular Shift</h2>
    <p className="text-lg leading-relaxed">
      Circular shifts rotate bits around the register ends without losing information.
    </p>

    <h3 className="text-2xl font-semibold mt-4">1. Circular Left Shift</h3>
    <p className="text-lg leading-relaxed font-semibold">Example:</p>
    <p className="text-lg leading-relaxed">
      8-bit number 11010011 → Circular Left Shift → 10100111
    </p>

    <h3 className="text-2xl font-semibold mt-4">2. Circular Right Shift</h3>
    <p className="text-lg leading-relaxed font-semibold">Example:</p>
    <p className="text-lg leading-relaxed">
      8-bit number 11010011 → Circular Right Shift → 11101001
    </p>

    {/* Symbolic Representation */}
    <h2 className="text-3xl font-bold mt-6">Symbolic Representation of Shift Micro-operations</h2>
    <table className="table-auto border-collapse border border-gray-400 mt-2 w-full">
      <thead>
        <tr className="bg-gray-400">
          <th className="border border-gray-400 px-4 py-2">Symbolic Designation</th>
          <th className="border border-gray-400 px-4 py-2">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-400 px-4 py-2">R &lt;- shl R</td>
          <td className="border border-gray-400 px-4 py-2">Logical Shift left register R</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">R &lt;- shr R</td>
          <td className="border border-gray-400 px-4 py-2">Logical Shift right register R</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">R &lt;- cil R</td>
          <td className="border border-gray-400 px-4 py-2">Circular shift left register R</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">R &lt;- cir R</td>
          <td className="border border-gray-400 px-4 py-2">Circular shift right register R</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">R &lt;- ashl R</td>
          <td className="border border-gray-400 px-4 py-2">Arithmetic shift left register R</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">R &lt;- ashr R</td>
          <td className="border border-gray-400 px-4 py-2">Arithmetic shift right register R</td>
        </tr>
      </tbody>
    </table>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-6">Applications</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Math Operations: Left ({"<<"}) and right ({">>"}) shifts multiply or divide by powers of two.</li>
      <li>Bitwise Control: Used to set, clear, or toggle bits in low-level programming.</li>
      <li>Data Encoding & Compression: Efficient packing/unpacking of data like bitmaps or Huffman coding.</li>
      <li>Cryptography: Supports key generation, encryption, and hashing.</li>
      <li>Graphics Processing: Assists in handling color channels and pixel manipulation.</li>
    </ul>

  </div>
);

export default Home;
