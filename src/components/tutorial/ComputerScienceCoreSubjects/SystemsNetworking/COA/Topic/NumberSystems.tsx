import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Number System ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Number System
    </h1>

    <p className="text-sm text-gray-500">Last Updated : 19 Jul, 2025</p>

    {/* Intro Section */}
    <p className="text-lg leading-relaxed">
      Number System is a method of representing numbers with the help of a set
      of symbols and rules; it is a mathematical notation used to represent
      quantities or values in various forms.
    </p>

    <p className="leading-relaxed">
      Please remember every piece of data in a computer—whether it’s text, images,
      sound, video, code, or memory addresses—is ultimately stored as binary, a
      string of 0s and 1s making numbers and number systems the core of computing.
    </p>

    <p className="leading-relaxed">
      Humans understand decimal and computers understand binary. Binary can be long
      for large amounts of data, so there are more systems like octal and hexadecimal
      that allow binary sequences to be broken into groups, making them less
      error-prone and more readable compared to binary.
    </p>

    <p className="leading-relaxed font-semibold">
      Fig: 1 Everything is stored in the computer in the form of binary.
    </p>

    <p className="leading-relaxed">
      As shown in Figure 1, binary is the foundation of all data representation in
      computers. Let’s now explore the different number systems that enable this
      process.
    </p>

    <p className="leading-relaxed">
      Number systems provide a structured way to represent numbers, enabling
      arithmetic operations and ensuring consistent, understandable notation.
    </p>

    <p className="leading-relaxed">
      A number system uses a base (or radix) to represent values. The base refers to
      the number of unique digits, including zero, that a system uses to represent numbers.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Number Systems</h2>
    <p className="leading-relaxed">
      Number systems are of various types based on their base value and the number of
      allowed digits. Let's discuss them in detail along with solved examples.
    </p>

    {/* ================= Decimal Number System ================= */}
    <h2 className="text-3xl font-bold mt-8">Decimal Number System</h2>

    <p className="leading-relaxed">
      The Decimal Number System is the standard system for denoting numbers.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Also called the base-10 system.</li>
      <li>Digits used: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9.</li>
      <li>Each digit is at a position representing powers of 10.</li>
    </ul>

    <h3 className="font-semibold mt-4">Example:</h3>
    <pre className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
{`10285 = (1 × 10⁴) + (0 × 10³) + (2 × 10²) + (8 × 10¹) + (5 × 10⁰)
     = 10000 + 0 + 200 + 80 + 5
     = 10285`}
    </pre>

    {/* ================= Binary Number System ================= */}
    <h2 className="text-3xl font-bold mt-8">Binary Number System</h2>

    <p className="leading-relaxed">
      Binary Number System is the number system with base 2.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Digits: 0 and 1.</li>
      <li>Used in computers due to two-state electronic circuits.</li>
      <li>Each digit is at a position representing powers of 2.</li>
    </ul>

    <h3 className="font-semibold mt-4">Example:</h3>
    <pre className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
{`(1011)₂ = 1 × 2³ + 0 × 2² + 1 × 2¹ + 1 × 2⁰
        = 8 + 0 + 2 + 1
        = 11 (decimal)`}
    </pre>

    {/* ================= Octal Number System ================= */}
    <h2 className="text-3xl font-bold mt-8">Octal Number System</h2>

    <p className="leading-relaxed">
      Octal Number System is the number system with base 8.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Digits: 0 to 7.</li>
      <li>Used in Unix/Linux for file permissions.</li>
      <li>Each digit represents powers of 8.</li>
    </ul>

    <h3 className="font-semibold mt-4">Example:</h3>
    <pre className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
{`(325)₈ = 3 × 8² + 2 × 8¹ + 5 × 8⁰
        = 192 + 16 + 5
        = 213 (decimal)`}
    </pre>

    {/* ================= Hexadecimal Number System ================= */}
    <h2 className="text-3xl font-bold mt-8">Hexadecimal Number System</h2>

    <p className="leading-relaxed">
      Hexadecimal Number System is the number system with base 16.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Digits: 0–9 and A–F.</li>
      <li>Used for memory addressing and color representation.</li>
      <li>Each digit represents powers of 16.</li>
    </ul>

    <h3 className="font-semibold mt-4">Example:</h3>
    <pre className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
{`(2F)₁₆ = 2 × 16¹ + F × 16⁰
        = 32 + 15
        = 47 (decimal)`}
    </pre>

  </div>
);

export default Home;
