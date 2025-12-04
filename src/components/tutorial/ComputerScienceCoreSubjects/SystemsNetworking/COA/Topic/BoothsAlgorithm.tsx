import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Booth's Algorithm ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Booth's Algorithm
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Sep, 2025</p>

    {/* Intro */}
    <p className="text-lg leading-relaxed">
      Booth’s algorithm is a method for multiplying signed binary numbers in 
      two’s complement representation. It improves efficiency by minimizing 
      the number of arithmetic operations required during multiplication.
    </p>

    <p className="leading-relaxed">
      The algorithm examines adjacent pairs of bits in the multiplier and 
      decides whether to add, subtract, or ignore the multiplicand. It then 
      performs an arithmetic right shift, simplifying multiplication involving 
      consecutive sequences of 1s or 0s and making the process more efficient 
      than standard binary multiplication.
    </p>

    {/* Hardware Implementation */}
    <h2 className="text-3xl font-bold mt-8">Hardware Implementation of Booth's Algorithm</h2>
    <p className="leading-relaxed">
      Hardware implementation uses registers such as AC (Accumulator), QR 
      (Multiplier), BR (Multiplicand), and an extra flip-flop Qn+1 appended to QR 
      for evaluating bit pairs (Qn and Qn+1). Operations are controlled using a 
      sequence counter (SC). This setup enables efficient signed multiplication.
    </p>

    {/* Steps */}
    <h2 className="text-3xl font-bold mt-8">Booth’s Algorithm Steps</h2>

    <ol className="list-decimal ml-6 leading-relaxed space-y-2">
      <li>Initialize AC = 0, Qn+1 = 0, and set SC = n (number of multiplier bits).</li>
      <li>Check the two least significant bits (Qn and Qn+1).</li>
      <li>If bits = 10 → Subtract multiplicand (M) from AC.</li>
      <li>If bits = 01 → Add multiplicand (M) to AC.</li>
      <li>If bits = 00 or 11 → No change in AC.</li>
      <li>Perform an Arithmetic Shift Right (ASHR) on [AC, QR, Qn+1].</li>
      <li>Decrement SC.</li>
      <li>Repeat steps until SC = 0.</li>
      <li>
        Final product is stored in [AC, QR]. If numbers are negative, use 
        2’s complement representation.
      </li>
    </ol>

    {/* Example Section */}
    <h2 className="text-3xl font-bold mt-8">Example</h2>

    <p className="leading-relaxed">
      Example for n = 4: Multiplying <strong>-5</strong> and <strong>-7</strong> using Booth’s Algorithm.
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      BR = -5 = 1011 <br />
      BR' = 0100 (1's Complement) <br />
      BR'+1 = 0101 (2's Complement) <br />
      QR = -7 = 1001 (2's complement of 0111)
    </p>

    <h3 className="text-xl font-semibold mt-4">Step Explanation</h3>
    <p className="leading-relaxed">
      AC = 0000, QR = 1001, Qn+1 = 0, SC = 4 <br />
      Qn Qn+1 = 10 → Perform AC + (BR)'+1 → AC becomes 0101
    </p>

    <p className="leading-relaxed">
      After right shifting AC and QR:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      AC = 0010, QR = 1100, Qn+1 = 1
    </p>

    <h3 className="text-xl font-semibold mt-4">Final Product</h3>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Product = AC QR = 0010 0011 = 35
    </p>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications of Booth’s Algorithm</h2>

    <ul className="list-disc ml-6 leading-relaxed space-y-2">
      <li>Processors & ALUs for efficient signed multiplication.</li>
      <li>Digital Signal Processing (DSP) applications.</li>
      <li>Hardware accelerators for AI, image processing, and neural networks.</li>
      <li>Cryptography (fast large-number multiplication).</li>
      <li>High-Performance Computing (HPC) systems.</li>
      <li>Embedded systems requiring efficient arithmetic.</li>
      <li>Networking devices for fast packet operations.</li>
    </ul>

    {/* Best/Worst Case */}
    <h2 className="text-3xl font-bold mt-8">Best Case and Worst Case</h2>

    <p className="leading-relaxed">
      <strong>Best Case:</strong> Large blocks of consecutive 1s or 0s in the multiplier, leading to 
      minimal additions or subtractions.
    </p>

    <p className="leading-relaxed">
      <strong>Worst Case:</strong> Alternating bits (01 or 10) in the multiplier, causing maximum 
      arithmetic operations.
    </p>

  </div>
);

export default Home;
