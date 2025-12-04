import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Piggybacking ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Piggybacking in Computer Networks
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 24 Sep, 2025</p>

    <p className="text-lg leading-relaxed">
      Piggybacking is a technique where the receiver delays sending an acknowledgment (ACK) and attaches it to its next outgoing data packet. This reduces the number of separate control frames, improving network efficiency.
    </p>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Sliding window protocols allow multiple packets to be sent before receiving acknowledgments, increasing throughput.</li>
      <li>Both sender and receiver maintain finite buffers to hold outgoing and incoming packets.</li>
      <li>Unacknowledged packets are retransmitted after a timeout.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Increasing Network Efficiency</h2>
    <p className="leading-relaxed">
      Efficiency can be improved using <strong>Full-Duplex Transmission</strong>, where data flows in both directions simultaneously, providing better performance than half-duplex or simple transmission modes.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Methods of Full-Duplex Transmission</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Two Separate Channels:</strong> One channel for sending data, another for receiving. This wastes bandwidth in the reverse direction.</li>
      <li><strong>Piggybacking:</strong> Data and acknowledgments share the same channel. For example, if Host A sends data to Host B, the acknowledgment from B can be attached to the next outgoing data frame. The receiver checks the header to distinguish between data and acknowledgment.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Working of Piggybacking</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>If a host has both data and an acknowledgment, it sends a single frame containing both.</li>
      <li>If only an acknowledgment exists, the host waits briefly to see if data is ready; otherwise, it sends the ACK separately.</li>
      <li>If only data is left, the last acknowledgment is included in the data frame.</li>
      <li>This reduces the number of frames on the network, improving bidirectional protocol efficiency.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Advantages of Piggybacking</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Better use of available channel bandwidth, as ACK frames do not need to be sent separately.</li>
      <li>Reduces usage cost and network congestion.</li>
      <li>Improves latency and overall data transfer performance.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Disadvantages of Piggybacking</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Introduces additional complexity in the data link layer.</li>
      <li>If the acknowledgment is delayed too long while waiting for outgoing data, retransmissions may occur unnecessarily.</li>
    </ul>

  </div>
);

export default Home;
