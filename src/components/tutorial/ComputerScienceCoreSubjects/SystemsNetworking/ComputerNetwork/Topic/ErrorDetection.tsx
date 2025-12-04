import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Error Detection in Computer Networks ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Error Detection in Computer Networks
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 25 Sep, 2025</p>

    <p className="text-lg leading-relaxed">
      Error detection in computer networks ensures that data is transmitted accurately without 
      corruption. It works by adding extra (redundant) bits to data so the receiver can verify 
      its correctness. If errors are found, the receiver discards the frame and requests 
      retransmission.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Detects errors caused by noise or interference.</li>
      <li>Uses redundant bits for consistency checking.</li>
      <li>Common methods: Parity Check, Checksum, CRC.</li>
      <li>Ensures data integrity and reliable communication.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Types of Errors</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Single-Bit Error:</strong> One bit is altered during transmission.</li>
      <li><strong>Multiple-Bit Error:</strong> More than one bit is altered during transmission.</li>
      <li><strong>Burst Error:</strong> Several consecutive bits are flipped incorrectly.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Error Detection Methods</h2>
    <p className="leading-relaxed">
      Redundancy bits are introduced to detect errors. Common techniques include:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Simple Parity Check</li>
      <li>Two-Dimensional Parity Check</li>
      <li>Checksum</li>
      <li>Cyclic Redundancy Check (CRC)</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">1. Simple Parity Check</h3>
    <p className="leading-relaxed">
      Adds an extra bit to make the total number of 1’s even (even parity).
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Detects all single-bit errors and odd number of errors.</li>
      <li>Easy to implement in hardware/software.</li>
      <li>Only one extra parity bit per data unit.</li>
      <li>Fast error detection.</li>
      <li><strong>Limitation:</strong> Cannot detect even number of errors.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">2. Two-Dimensional Parity Check</h3>
    <p className="leading-relaxed">
      Parity bits are calculated for rows and columns and sent with data.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Can detect and correct all single-bit errors.</li>
      <li>Can detect 2- or 3-bit errors in the matrix.</li>
      <li><strong>Limitation:</strong> Cannot correct 2- or 3-bit errors; fails if parity bit itself is erroneous.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">3. Checksum</h3>
    <p className="leading-relaxed">
      Divides data into segments, calculates 1’s complement sum, and appends the checksum to the data.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Sender: sum segments, complement sum → checksum, send with data.</li>
      <li>Receiver: sum received segments, complement sum → if zero, data is correct; else discarded.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">4. Cyclic Redundancy Check (CRC)</h3>
    <p className="leading-relaxed">
      Based on binary division. Redundant bits (CRC) appended to make data divisible by a predetermined binary number. Receiver divides received data by same number; remainder indicates error.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Step 1: Append k-1 zeros to data.</li>
      <li>Step 2: Perform modulo-2 division.</li>
      <li>Step 3: Remainder = CRC.</li>
      <li>Step 4: Code word = original data + CRC.</li>
      <li>Length of code word = n + k - 1 bits.</li>
      <li>Example: Data = 1010000, divisor polynomial x³+1.</li>
    </ul>

  </div>
);

export default Home;
