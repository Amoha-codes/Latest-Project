import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Floating Point Representation ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Floating Point Representation
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 30 Aug, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Floating-point representation encodes numbers in a format that handles very large and very small values. It is based on scientific notation, representing numbers as a fraction (mantissa) and an exponent. This allows a trade-off between range and precision in computing.
    </p>

    {/* Floating Point Format */}
    <h2 className="text-3xl font-bold mt-8">Format</h2>
    <p className="leading-relaxed">
      A floating point number is typically represented as:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg text-sm">
      <strong>Value = Sign × Significand × Base^Exponent</strong>
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Sign:</strong> Indicates positive or negative.</li>
      <li><strong>Significand (Mantissa):</strong> Precision bits of the number.</li>
      <li><strong>Base:</strong> Usually 2 in binary systems.</li>
      <li><strong>Exponent:</strong> Determines the scale of the number.</li>
    </ul>

    {/* Need for Floating Point */}
    <h2 className="text-3xl font-bold mt-8">Need for Floating-Point Representation</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Range:</strong> Can represent very large and very small numbers.</li>
      <li><strong>Precision:</strong> Balances precision and range, suitable for scientific computations and graphics.</li>
      <li><strong>Flexibility:</strong> Efficiently stores and computes real numbers of different scales.</li>
    </ul>

    {/* Precision Table */}
    <h2 className="text-3xl font-bold mt-8">Precision Representation</h2>
    <p className="leading-relaxed">Common formats for floating point numbers:</p>
    <table className="table-auto border-collapse border border-gray-300 text-sm mt-2">
      <thead>
        <tr className="border border-gray-300 bg-gray-400">
          <th className="border border-gray-300 px-2 py-1">Precision</th>
          <th className="border border-gray-300 px-2 py-1">Base</th>
          <th className="border border-gray-300 px-2 py-1">Sign</th>
          <th className="border border-gray-300 px-2 py-1">Exponent</th>
          <th className="border border-gray-300 px-2 py-1">Significant</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border border-gray-300">
          <td className="border px-2 py-1">Single</td>
          <td className="border px-2 py-1">2</td>
          <td className="border px-2 py-1">1</td>
          <td className="border px-2 py-1">8</td>
          <td className="border px-2 py-1">23+1</td>
        </tr>
        <tr className="border border-gray-300">
          <td className="border px-2 py-1">Double</td>
          <td className="border px-2 py-1">2</td>
          <td className="border px-2 py-1">1</td>
          <td className="border px-2 py-1">11</td>
          <td className="border px-2 py-1">52+1</td>
        </tr>
      </tbody>
    </table>

    {/* Components */}
    <h2 className="text-3xl font-bold mt-8">Components of Floating Point Numbers</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Sign bit:</strong> Indicates positive or negative number.</li>
      <li><strong>Exponent:</strong> Power to which the base (2) is raised.</li>
      <li><strong>Mantissa (Significand):</strong> Represents the significant digits.</li>
    </ul>

    {/* Floating Point to Decimal */}
    <h2 className="text-3xl font-bold mt-8">Floating Point to Decimal Conversion</h2>
    <p className="leading-relaxed">
      Example: 32-bit floating-point representation: 11000001110100000000000000000000  
      <strong>Sign bit:</strong> First bit = 1 (negative)  
      <strong>Exponent:</strong> Next 8 bits = 10000011 = 131. Bias = 127 → exponent = 131-127 = 4 → 2⁴ = 16  
      <strong>Mantissa:</strong> Remaining 23 bits give fractional part = 0.625 → 1 + 0.625 = 1.625  
      Decimal value = (-1)^0 × 16 × 1.625 = 26
    </p>

    {/* Decimal to Floating Point */}
    <h2 className="text-3xl font-bold mt-8">Decimal to Floating Point Conversion</h2>
    <p className="leading-relaxed">
      To convert a decimal to 32-bit floating point:  
      i) Sign bit → 1 for negative, 0 for positive  
      ii) Exponent → nearest 2ⁿ, add bias (127)  
      iii) Mantissa → normalize binary number, store fractional bits  
      <strong>Example:</strong> Convert -17:  
      Sign = 1, nearest 2ⁿ = 16 → exponent = 4 → 4 + 127 = 131 → 10000011 in binary  
      17 in binary = 10001 → normalized = 1.0001 × 2⁴ → mantissa = 00010000000000000000000
    </p>

  </div>
);

export default Home;
