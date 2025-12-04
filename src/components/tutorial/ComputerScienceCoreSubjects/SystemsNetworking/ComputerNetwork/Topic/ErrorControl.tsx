import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Error Control in Data Link Layer ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Error Control in Data Link Layer
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 30 Sep, 2025</p>

    <p className="text-lg leading-relaxed">
      The Data Link Layer uses <strong>error control</strong> to ensure data frames are delivered 
      accurately from sender to receiver. If a frame is lost or corrupted during transmission, 
      the receiver may not get the correct data, and the sender may not know about it. Protocols 
      detect errors and request retransmission using <strong>ARQ (Automatic Repeat Request)</strong>.
      Frames are resent until they are received correctly.
    </p>

    <h2 className="text-3xl font-bold mt-8">Ways of Error Control</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Error Detection:</strong> Identifies errors caused by noise or transmission impairments. 
        Techniques detect garbled or distorted data.
      </li>
      <li>
        <strong>Error Correction:</strong> Fixes the detected errors, reconstructing the original 
        data. Error correction is more complex and costly than detection.
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Error Control Techniques</h2>

    <h3 className="text-2xl font-semibold mt-4">1. Stop-and-Wait ARQ</h3>
    <p className="leading-relaxed">
      The sender transmits one frame at a time and waits for an ACK (Acknowledgment) from the receiver. 
      If the ACK is not received within a time limit, the frame is retransmitted. This continues until 
      all frames are successfully delivered.
    </p>

    <h3 className="text-2xl font-semibold mt-4">2. Sliding Window ARQ</h3>
    <p className="leading-relaxed">
      Sliding Window ARQ allows continuous transmission of multiple frames without waiting for individual ACKs. 
      It has two main types:
    </p>

    <h4 className="text-xl font-semibold mt-2">2.1 Go-Back-N ARQ</h4>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>The sender can transmit multiple frames up to the window size without waiting for ACKs.</li>
      <li>If an error occurs or a frame is lost, the sender retransmits that frame and all subsequent frames in the window.</li>
      <li>If no errors occur, it works like a normal sliding window protocol.</li>
    </ul>

    <h4 className="text-xl font-semibold mt-2">2.2 Selective Repeat ARQ</h4>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Only lost or damaged frames are retransmitted.</li>
      <li>More efficient than Go-Back-N, reducing unnecessary retransmissions.</li>
      <li>The sender resends frames for which a NAK (Negative Acknowledgment) is received.</li>
      <li>Each frame must be acknowledged individually, increasing system complexity.</li>
    </ul>

    <p className="leading-relaxed mt-2">
      <strong>Key Difference:</strong> In Go-Back-N ARQ, the sender retransmits the entire window if any frame is lost, 
      whereas in Selective Repeat ARQ, only the lost frames are retransmitted.
    </p>

  </div>
);

export default Home;
