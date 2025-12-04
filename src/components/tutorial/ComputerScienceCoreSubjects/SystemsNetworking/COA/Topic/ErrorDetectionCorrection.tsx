import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Error Detection Codes - Parity Bit ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Error Detection Codes - Parity Bit
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 07 Oct, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      An error detection code is a method used to detect errors during data transmission or storage of digital data. Extra bits are added to the original data, allowing the receiver to detect inconsistencies, indicating potential errors.
    </p>

    {/* Parity Bit Method */}
    <h2 className="text-3xl font-bold mt-8">Parity Bit Method</h2>
    <p className="leading-relaxed">
      A parity bit is an extra bit added to the message bits on the sender side. Data-word bits along with parity bits form a codeword. The parity bit ensures an odd or even total of 1’s, helping detect errors at the receiver end.
    </p>

    {/* Even Parity */}
    <h3 className="text-2xl font-semibold mt-4">Even Parity</h3>
    <p className="leading-relaxed">
      In even parity, the total number of 1's in the data word should be even. If the total is odd, a 1 is appended as the parity bit; if already even, a 0 is appended. The parity check circuit detects single-bit errors at the receiver.
    </p>
    <p className="leading-relaxed">
      Example: Data bits '1011000' → even parity → append 1 → codeword '10110001'.
    </p>

    {/* Odd Parity */}
    <h3 className="text-2xl font-semibold mt-4">Odd Parity</h3>
    <p className="leading-relaxed">
      In odd parity, if the total number of 1's in the data is even, append 1 to make it odd; if already odd, append 0. The receiver expects an odd number of 1's and can detect single-bit errors.
    </p>
    <p className="leading-relaxed">
      Example: Data bits '1011000' → odd parity → append 0 → codeword '10110000'.
    </p>

    {/* Parity Table */}
    <h3 className="text-2xl font-semibold mt-4">Example Parity Bit Table</h3>
    <table className="table-auto border border-gray-300 text-left w-full mt-2">
      <thead>
        <tr className="bg-gray-400">
          <th className="border px-4 py-2">Message (XYZ)</th>
          <th className="border px-4 py-2">P (Odd)</th>
          <th className="border px-4 py-2">P (Even)</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border px-4 py-2">000</td><td className="border px-4 py-2">1</td><td className="border px-4 py-2">0</td></tr>
        <tr><td className="border px-4 py-2">001</td><td className="border px-4 py-2">0</td><td className="border px-4 py-2">1</td></tr>
        <tr><td className="border px-4 py-2">010</td><td className="border px-4 py-2">0</td><td className="border px-4 py-2">1</td></tr>
        <tr><td className="border px-4 py-2">011</td><td className="border px-4 py-2">1</td><td className="border px-4 py-2">0</td></tr>
        <tr><td className="border px-4 py-2">100</td><td className="border px-4 py-2">0</td><td className="border px-4 py-2">1</td></tr>
        <tr><td className="border px-4 py-2">101</td><td className="border px-4 py-2">1</td><td className="border px-4 py-2">0</td></tr>
        <tr><td className="border px-4 py-2">110</td><td className="border px-4 py-2">1</td><td className="border px-4 py-2">0</td></tr>
        <tr><td className="border px-4 py-2">111</td><td className="border px-4 py-2">0</td><td className="border px-4 py-2">1</td></tr>
      </tbody>
    </table>

    {/* Limitations */}
    <h3 className="text-2xl font-semibold mt-4">Limitations</h3>
    <p className="leading-relaxed">
      Parity checks can detect only single-bit errors. If multiple bits change but the total parity remains the same, errors cannot be detected.
    </p>
    <p className="leading-relaxed">
      Example: In even parity, if two bits change in a codeword and the total number of 1's stays even, the error will go undetected. Similarly, odd parity cannot detect certain multi-bit errors.
    </p>

  </div>
);

export default Home;
