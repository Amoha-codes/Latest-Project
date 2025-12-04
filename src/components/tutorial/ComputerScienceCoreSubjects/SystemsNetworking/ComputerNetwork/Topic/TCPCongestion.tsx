import React from "react";

const CongestionControl: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Title ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Congestion Control in Computer Networks
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 03 Oct, 2025</p>

    {/* ================= Introduction ================= */}
    <p className="leading-relaxed mt-4">
      In computer networks, congestion occurs when too much data is sent simultaneously, causing delays, packet loss, or network collapse—similar to a traffic jam on a highway. <strong>Congestion control</strong> is a set of techniques used to prevent, detect, and manage congestion. Its main goal is to maintain smooth data flow, fair bandwidth allocation, and efficient network resource utilization.
    </p>

    {/* ================= Effects of Congestion Control ================= */}
    <h2 className="text-3xl font-bold mt-8">Effects of Congestion Control</h2>
    <ul className="list-disc ml-6 space-y-2 leading-relaxed">
      <li>Improved Network Stability: Prevents overload and keeps the network running smoothly.</li>
      <li>Reduced Latency and Packet Loss: Ensures faster delivery with fewer retransmissions.</li>
      <li>Enhanced Throughput: Maximizes successful data transfer volume over time.</li>
      <li>Fairness in Resource Allocation: Distributes bandwidth evenly among users.</li>
      <li>Better User Experience: Provides faster access to websites, apps, and services.</li>
      <li>Prevention of Congestion Collapse: Avoids severe network breakdowns.</li>
    </ul>

    {/* ================= Congestion Control Algorithms ================= */}
    <h2 className="text-3xl font-bold mt-8">Congestion Control Algorithms</h2>

    {/* ---------- Leaky Bucket Algorithm ---------- */}
    <h3 className="text-2xl font-semibold mt-4">1. Leaky Bucket Algorithm</h3>
    <p className="leading-relaxed">
      Controls the flow of packets by sending them at a fixed rate, smoothing burst traffic. Packets exceeding the bucket capacity are discarded.
    </p>
    <ul className="list-disc ml-6 space-y-1 leading-relaxed">
      <li>Packets arrive → placed into the bucket.</li>
      <li>Bucket leaks (transmits) at a constant rate.</li>
      <li>Bursty traffic is smoothed into uniform traffic.</li>
      <li><strong>Limitation:</strong> Rigid; wastes bandwidth during idle periods.</li>
    </ul>

    {/* ---------- Token Bucket Algorithm ---------- */}
    <h3 className="text-2xl font-semibold mt-4">2. Token Bucket Algorithm</h3>
    <p className="leading-relaxed">
      Allows bursty traffic by generating tokens at a fixed rate. Each token allows sending one packet. Bursts can be transmitted quickly if tokens are available.
    </p>
    <ul className="list-disc ml-6 space-y-1 leading-relaxed">
      <li>Tokens are added at regular intervals.</li>
      <li>Each token permits sending one packet.</li>
      <li>If tokens exist → packets transmitted immediately; else, packets wait.</li>
      <li><strong>Advantage:</strong> Handles bursty traffic efficiently without unnecessary data loss.</li>
    </ul>

    {/* ---------- Comparison ---------- */}
    <h3 className="text-2xl font-semibold mt-4">Leaky Bucket vs Token Bucket</h3>
    <table className="table-auto border border-gray-300 w-full text-left mt-2">
      <thead>
        <tr className="bg-gray-400">
          <th className="border px-4 py-2">Parameter</th>
          <th className="border px-4 py-2">Leaky Bucket</th>
          <th className="border px-4 py-2">Token Bucket</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">Output</td>
          <td className="border px-4 py-2">Fixed, constant rate</td>
          <td className="border px-4 py-2">Variable, allows bursts</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Flexibility</td>
          <td className="border px-4 py-2">Rigid</td>
          <td className="border px-4 py-2">Flexible</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Packet Loss</td>
          <td className="border px-4 py-2">Possible during bursts</td>
          <td className="border px-4 py-2">Avoids loss if tokens available</td>
        </tr>
      </tbody>
    </table>

    {/* ================= Advantages ================= */}
    <h2 className="text-3xl font-bold mt-8">Advantages of Congestion Control</h2>
    <ul className="list-disc ml-6 space-y-2 leading-relaxed">
      <li>Ensures stable and reliable network operation.</li>
      <li>Reduces delays and retransmissions.</li>
      <li>Minimizes data loss.</li>
      <li>Optimizes resource utilization.</li>
      <li>Scales well with growing networks.</li>
      <li>Adapts to changing traffic conditions.</li>
    </ul>

    {/* ================= Disadvantages ================= */}
    <h2 className="text-3xl font-bold mt-8">Disadvantages of Congestion Control</h2>
    <ul className="list-disc ml-6 space-y-2 leading-relaxed">
      <li>Adds complexity to network design.</li>
      <li>May introduce processing overhead.</li>
      <li>Can be sensitive to network conditions.</li>
      <li>Challenges with resource prioritization in critical scenarios.</li>
      <li>Effectiveness depends on modern infrastructure.</li>
    </ul>
  </div>
);

export default CongestionControl;
