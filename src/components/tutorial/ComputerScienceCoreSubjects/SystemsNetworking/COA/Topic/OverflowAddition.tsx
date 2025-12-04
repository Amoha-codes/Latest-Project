import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Overflow in Arithmetic Addition ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Overflow in Arithmetic Addition in Binary Number System
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 22 Sep, 2025</p>

    {/* Intro */}
    <p className="text-lg leading-relaxed">
      In binary arithmetic, an <strong>overflow</strong> occurs when the result of an addition 
      exceeds the capacity of the fixed number of bits, causing an incorrect result and possible 
      sign error in signed arithmetic.
    </p>

    <p className="leading-relaxed">
      <strong>Limited Memory:</strong> Computers store numbers using a fixed number of bits.  
      When a result needs more bits, extra bits are lost, producing incorrect output.
    </p>

    <p className="leading-relaxed">
      <strong>Excess Bits:</strong> If the result requires more bits than available, the most 
      significant bits overflow out of range.
    </p>

    <p className="leading-relaxed">
      <strong>Erroneous Result:</strong> Because the extra bits are discarded, the arithmetic 
      result becomes incorrect.
    </p>

    {/* Binary System */}
    <h2 className="text-3xl font-bold mt-8">Binary Number System</h2>
    <p className="leading-relaxed">
      The binary number system uses two digits: <strong>0</strong> and <strong>1</strong>.  
      It forms the foundation of computer arithmetic. Each bit represents increasing powers of 2 
      from right to left.
    </p>

    {/* Conditions of Overflow */}
    <h2 className="text-3xl font-bold mt-8">Conditions of Overflow</h2>

    <p className="leading-relaxed">
      Overflow happens when the result of an addition operation exceeds the representable range 
      in N-bit <strong>2’s complement</strong> form. It occurs under the following conditions:
    </p>

    <h3 className="text-2xl font-bold mt-4">1) Addition of Two Positive Numbers</h3>
    <p className="leading-relaxed">
      If two positive numbers produce a value greater than the maximum representable positive 
      number, the MSB becomes 1 (negative), which is incorrect → overflow occurs.
    </p>

    <h3 className="text-2xl font-bold mt-4">2) Addition of Two Negative Numbers</h3>
    <p className="leading-relaxed">
      If two negative numbers produce a result below the minimum negative number, the MSB becomes 
      0 (positive), also incorrect → overflow occurs.
    </p>

    <h3 className="text-2xl font-bold mt-4">3) Carry-In and Carry-Out of MSB</h3>
    <p className="leading-relaxed">
      When <strong>Carry-in ≠ Carry-out</strong> at the MSB, overflow has occurred.
    </p>

    {/* Range */}
    <p className="leading-relaxed mt-4">
      N-bit 2’s complement range:  
      <br />
      −2<sup>n−1</sup> to (2<sup>n−1</sup> − 1)
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>4-bit: −8 to 7</li>
      <li>5-bit: −16 to 15</li>
    </ul>

    {/* Example */}
    <h2 className="text-3xl font-bold mt-8">Example</h2>
    <p className="leading-relaxed">
      Adding <strong>7 + 1</strong> in a 4-bit system should give 8, but 8 is outside range (−8 to 7).  
      The output becomes <strong>-8</strong> → overflow.
    </p>

    {/* Overflow Detection */}
    <h2 className="text-3xl font-bold mt-8">Overflow Detection</h2>
    <p className="leading-relaxed">
      Overflow occurs if:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Two negative numbers are added → result becomes positive</li>
      <li>Two positive numbers are added → result becomes negative</li>
    </ul>

    <p className="leading-relaxed">
      This can be detected by checking <strong>Carry-in</strong> and <strong>Carry-out</strong> of MSB:
      <br />
      <strong>Overflow occurs when: C-in ≠ C-out</strong>
    </p>

    <p className="leading-relaxed">
      Thus, a simple <strong>XOR gate</strong> is enough to detect overflow.
    </p>

    {/* Conclusion */}
    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      Overflow arises when a computed value cannot be represented within the available bit range.  
      Understanding how overflow occurs and how to detect it using MSB carry bits helps programmers 
      ensure correct arithmetic operations in computer systems.
    </p>

  </div>
);

export default Home;
