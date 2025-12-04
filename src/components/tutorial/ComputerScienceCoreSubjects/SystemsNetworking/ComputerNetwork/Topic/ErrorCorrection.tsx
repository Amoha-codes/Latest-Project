import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Error Correction in Computer Networks ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Error Correction in Computer Networks
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Sep, 2025</p>

    <p className="text-lg leading-relaxed">
      Once errors are detected in the network, the deviated bits sequence needs to be replaced 
      with the correct bits so that the receiver can accept and process the data. This process 
      is called <strong>Error Correction</strong>. There are two main types:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Forward Error Correction (FEC):</strong> The receiver corrects errors without 
        needing retransmission.
      </li>
      <li>
        <strong>Backward Error Correction (Automatic Repeat Request - ARQ):</strong> The sender 
        retransmits data if the receiver detects errors.
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Hamming Code Error Correction</h2>
    <p className="leading-relaxed">
      Hamming Code, designed by R.W. Hamming, is a widely used error correction method. Extra 
      parity bits are added to the message so that the receiver can detect and correct errors.
    </p>

    <p className="leading-relaxed">
      Example: Suppose the sender wants to transmit the message <strong>1011001</strong>.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Total number of data bits (d) = 7</li>
      <li>Total number of redundant bits (r) = 4</li>
      <li>Total bits (d + r) = 11</li>
      <li>Redundant bits are placed at positions that are powers of 2: R1, R2, R3, R4</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Redundant Bit Calculation Rules</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>R1:</strong> Covers positions with 1 in the least significant bit of their binary index (1,3,5,7,9,11)</li>
      <li><strong>R2:</strong> Covers positions with 1 in the 2nd LSB (2,3,6,7,10,11)</li>
      <li><strong>R3:</strong> Covers positions with 1 in the 3rd LSB (4,5,6,7)</li>
      <li><strong>R4:</strong> Covers positions with 1 in the 4th LSB (8,9,10,11)</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Example Calculation</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>R1 = 0 (even number of 1s in covered positions)</li>
      <li>R2 = 1 (odd number of 1s)</li>
      <li>R3 = 1 (odd number of 1s)</li>
      <li>R4 = 0 (even number of 1s)</li>
    </ul>

    <p className="leading-relaxed">
      Message to transmit: <strong>10110010110</strong> (including redundant bits)
    </p>

    <h3 className="text-2xl font-semibold mt-4">Error Detection and Correction at Receiver</h3>
    <p className="leading-relaxed">
      Suppose bit 6 gets corrupted (changes to 1). The received message: <strong>10101101110</strong>.
      The receiver checks all parity bits:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>R1 checks bits 1,3,5,7,9,11 → even → R1 = 0</li>
      <li>R2 checks bits 2,3,6,7,10,11 → odd → R2 = 1</li>
      <li>R3 checks bits 4,5,6,7 → odd → R3 = 1</li>
      <li>R4 checks bits 8,9,10,11 → even → R4 = 0</li>
    </ul>

    <p className="leading-relaxed">
      The binary combination of redundant bits is <strong>0110</strong> → decimal 6, indicating 
      the error is at bit 6. After correction, the message is restored to its original error-free form.
    </p>

  </div>
);

export default Home;
