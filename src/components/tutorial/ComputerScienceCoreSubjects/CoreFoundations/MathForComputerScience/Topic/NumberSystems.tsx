import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Number Systems ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      How Many Types of Number Systems Are There?
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 29 Jul, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Numbers are not only symbols on a page—they carry meaning and have diverse applications. 
      Mathematics includes numerous number systems, each with unique significance. From the 
      decimal system to binary, octal, and hexadecimal systems, these provide different perspectives 
      on numerical representation.
    </p>

    <p className="text-lg leading-relaxed">
      Numbers such as 40 and 65 can be expressed as figures or words—forty and sixty-five. 
      Number systems include types like prime, odd, even, rational, whole numbers, etc.
    </p>

    {/* What is a Number System */}
    <h2 className="text-3xl font-bold mt-8">What is a Number System?</h2>
    <p className="leading-relaxed">
      A number system is an elementary system to represent numbers and figures logically. 
      It allows numeric representation using digits or symbols, reflecting arithmetic and algebraic structure. 
      For example, the decimal system uses digits 0–9 to form all numbers.
    </p>

    {/* Types of Number Systems */}
    <h2 className="text-3xl font-bold mt-8">Types of Number Systems</h2>
    <p className="leading-relaxed">
      Based on the base value and allowed digits, number systems include:
    </p>

    <ol className="list-decimal ml-6 leading-relaxed">
      <li>
        <strong>Decimal Number System:</strong> Base 10, uses digits 0-9. Each digit's place value is a power of 10.
        <p className="leading-relaxed">
          Example: 12265 = (1×10⁴) + (2×10³) + (2×10²) + (6×10¹) + (5×10⁰) = 12265
        </p>
      </li>
      <li>
        <strong>Binary Number System:</strong> Base 2, uses digits 0 and 1. Essential in computers.
        <p className="leading-relaxed">
          Example: 14 = 1110₂, 19 = 10011₂, 50 = 110010₂
        </p>
      </li>
      <li>
        <strong>Octal Number System:</strong> Base 8, uses digits 0-7.
        <p className="leading-relaxed">
          Example: Decimal (125)₁₀ = Octal (175)₈
        </p>
      </li>
      <li>
        <strong>Hexadecimal Number System:</strong> Base 16, uses digits 0-9 and A-F (10–15). 
          Useful for memory addresses.
        <p className="leading-relaxed">
          Example: (185)₁₀ = (B9)₁₆, (5440)₁₀ = (1540)₁₆, (4265)₁₀ = (10A9)₁₆
        </p>
        <table className="table-auto border-collapse border border-gray-400 mt-2">
          <thead className='bg-gray-400'>
            <tr>
              <th className="border border-gray-400 px-2 py-1">Hexadecimal</th>
              <th className="border border-gray-400 px-2 py-1">0-9, A-F</th>
              <th className="border border-gray-400 px-2 py-1">Decimal</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border px-2 py-1">0</td><td className="border px-2 py-1">0</td><td className="border px-2 py-1">0</td></tr>
            <tr><td className="border px-2 py-1">1</td><td className="border px-2 py-1">1</td><td className="border px-2 py-1">1</td></tr>
            <tr><td className="border px-2 py-1">2</td><td className="border px-2 py-1">2</td><td className="border px-2 py-1">2</td></tr>
            <tr><td className="border px-2 py-1">…</td><td className="border px-2 py-1">…</td><td className="border px-2 py-1">…</td></tr>
            <tr><td className="border px-2 py-1">F</td><td className="border px-2 py-1">15</td><td className="border px-2 py-1">15</td></tr>
          </tbody>
        </table>
      </li>
    </ol>

    {/* Roman Number System */}
    <h2 className="text-3xl font-bold mt-8">Roman Number System</h2>
    <p className="leading-relaxed">
      An ancient system using Latin letters to represent numbers. 
      Examples: I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000
    </p>

    <table className="table-auto border-collapse border border-gray-400 mt-2">
      <thead className='bg-gray-400'>
        <tr>
          <th className="border px-2 py-1">Symbol</th>
          <th className="border px-2 py-1">Value</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border px-2 py-1">I</td><td className="border px-2 py-1">1</td></tr>
        <tr><td className="border px-2 py-1">V</td><td className="border px-2 py-1">5</td></tr>
        <tr><td className="border px-2 py-1">X</td><td className="border px-2 py-1">10</td></tr>
        <tr><td className="border px-2 py-1">L</td><td className="border px-2 py-1">50</td></tr>
        <tr><td className="border px-2 py-1">C</td><td className="border px-2 py-1">100</td></tr>
        <tr><td className="border px-2 py-1">D</td><td className="border px-2 py-1">500</td></tr>
        <tr><td className="border px-2 py-1">M</td><td className="border px-2 py-1">1000</td></tr>
      </tbody>
    </table>

    <p className="leading-relaxed mt-2">
      <strong>Rules:</strong> I, X, C, M can repeat up to 3 times. If a smaller symbol appears before a larger one, it is subtracted; after a larger symbol, it is added. 
      Example: XLVIII = 48, MCCXLV = 1245
    </p>

    {/* Sample Problems */}
    <h2 className="text-3xl font-bold mt-8">Sample Problems on Number Systems</h2>

    <ol className="list-decimal ml-6 leading-relaxed">
      <li>
        Convert (4525)₈ to decimal:
        <p className="leading-relaxed">
          (4525)₈ = 4×8³ + 5×8² + 2×8¹ + 5×8⁰ = 2389₁₀
        </p>
      </li>
      <li>
        Convert (17)₁₀ to binary:
        <p className="leading-relaxed">(17)₁₀ = (10001)₂</p>
      </li>
      <li>
        Convert (1011110)₂ to octal:
        <p className="leading-relaxed">(1011110)₂ = 001 011 110₂ = (136)₈</p>
      </li>
      <li>
        Convert XLVIII to decimal:
        <p className="leading-relaxed">XLVIII = 48</p>
      </li>
      <li>
        Convert MCCXLV to decimal:
        <p className="leading-relaxed">MCCXLV = 1245</p>
      </li>
    </ol>

  </div>
);

export default Home;
