import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= 1's Complement vs 2's Complement ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      1's Complement Representation vs 2's Complement Representation
    </h1>

    <p className="text-sm text-gray-500">Last Updated : 22 Sep, 2025</p>

    <p className="text-lg leading-relaxed">
      1's Complement and 2's Complement are two binary methods used to represent 
      signed integers. They allow computers to work with both positive and negative 
      numbers efficiently.
    </p>

    <p className="leading-relaxed">
      <strong>1's Complement:</strong> Negative numbers are formed by flipping all bits.  
      However, it has <strong>two representations of zero</strong>, which complicates operations.
    </p>

    <p className="leading-relaxed">
      <strong>2's Complement:</strong> Negative numbers are formed by flipping bits and 
      adding 1. It provides a <strong>single zero representation</strong> and simpler arithmetic.
    </p>

    {/* 1's Complement */}
    <h2 className="text-3xl font-bold mt-8">What is 1's Complement?</h2>

    <p className="leading-relaxed">
      The 1's complement of a binary number is obtained by flipping all its bits 
      (0 → 1 and 1 → 0).
    </p>

    <p className="leading-relaxed font-semibold">Let numbers be stored using 4 bits:</p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>1's complement of 7 (0111) → 1000</li>
      <li>1's complement of 12 (1100) → 0011</li>
    </ul>

    <h3 className="text-2xl font-bold mt-6">Advantages of 1's Complement</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Easy to compute by flipping bits.</li>
      <li>Simpler hardware compared to older methods.</li>
    </ul>

    <h3 className="text-2xl font-bold mt-6">Disadvantages of 1's Complement</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Has two zeros → 0000 (+0) and 1111 (−0).</li>
      <li>Requires end-around carry during addition.</li>
      <li>Not as efficient for representing negative numbers.</li>
    </ul>

    {/* 2's Complement */}
    <h2 className="text-3xl font-bold mt-8">What is 2's Complement?</h2>

    <p className="leading-relaxed">
      In 2's complement, all bits are inverted (1's complement) and then 1 is added 
      to the least significant bit.
    </p>

    <p className="leading-relaxed font-semibold">Let numbers be stored using 4 bits:</p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>2's complement of 7 (0111) → 1001</li>
      <li>2's complement of 12 (1100) → 0100</li>
    </ul>

    <h3 className="text-2xl font-bold mt-6">Advantages of 2's Complement</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Only one zero representation → 0000.</li>
      <li>No need for end-around carry.</li>
      <li>Negative numbers are easy to identify (MSB = 1).</li>
      <li>Efficient for arithmetic operations.</li>
    </ul>

    <h3 className="text-2xl font-bold mt-6">Disadvantages of 2's Complement</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Requires the extra step of adding 1.</li>
      <li>Range of negative numbers is larger than positive range.</li>
    </ul>

    {/* Main Difference Explanation */}
    <h2 className="text-3xl font-bold mt-8">Key Differences</h2>

    <p className="leading-relaxed">
      1's complement has two zeros (00000000 and 11111111), while 2's complement 
      has only one zero (00000000) because adding 1 to 11111111 results in overflow, 
      leaving 00000000.
    </p>

    <p className="leading-relaxed">
      Addition in 1's complement requires adding end-around carry, whereas 2's 
      complement does not.
    </p>

    {/* Range */}
    <h2 className="text-3xl font-bold mt-8">Range</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>1's Complement Range (n bits):</strong> −(2<sup>n−1</sup>−1) to (2<sup>n−1</sup>−1)
      </li>
      <li>
        <strong>2's Complement Range (n bits):</strong> −2<sup>n−1</sup> to (2<sup>n−1</sup>−1)
      </li>
    </ul>

    <p className="leading-relaxed">
      1's complement has 2ⁿ−1 valid numbers, while 2's complement has 2ⁿ valid numbers.
    </p>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">
      1's Complement Representation vs 2's Complement Representation
    </h2>

    <table className="w-full border mt-4 text-left">
      <thead>
        <tr className="bg-gray-400">
          <th className="p-2 border">1's Complement</th>
          <th className="p-2 border">2's Complement</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">Invert all bits</td>
          <td className="p-2 border">Invert all bits + add 1</td>
        </tr>
        <tr>
          <td className="p-2 border">Two zeros (+0 and −0)</td>
          <td className="p-2 border">One zero (0)</td>
        </tr>
        <tr>
          <td className="p-2 border">Requires end-around carry</td>
          <td className="p-2 border">No carry needed</td>
        </tr>
        <tr>
          <td className="p-2 border">Range: −(2ⁿ⁻¹−1) to (2ⁿ⁻¹−1)</td>
          <td className="p-2 border">Range: −2ⁿ⁻¹ to (2ⁿ⁻¹−1)</td>
        </tr>
        <tr>
          <td className="p-2 border">Rarely used</td>
          <td className="p-2 border">Standard in modern systems</td>
        </tr>
      </tbody>
    </table>

  </div>
);

export default Home;
