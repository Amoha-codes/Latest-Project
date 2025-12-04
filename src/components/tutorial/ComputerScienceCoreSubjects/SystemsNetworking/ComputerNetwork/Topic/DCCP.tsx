import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= DCCP THEORY ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Datagram Congestion Control Protocol (DCCP)
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 14 Oct, 2025</p>

    {/* Intro */}
    <p className="text-lg leading-relaxed">
      Congestion in networks occurs when routers, buffers, or CPUs become overloaded, causing 
      packet delays or even delivery failures. To address these issues, the Datagram Congestion 
      Control Protocol (DCCP) was introduced. DCCP is a message-based transport layer protocol 
      that provides congestion control, secure connection setup/closure, and feature 
      negotiation—without requiring applications to implement these mechanisms manually.
    </p>

    {/* Key Features */}
    <h2 className="text-3xl font-bold mt-8">Key Features of DCCP</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Message-based transport (similar to UDP, unlike TCP’s byte stream).</li>
      <li>Built-in congestion control and support for ECN (Explicit Congestion Notification).</li>
      <li>Secure handshake for setting up and closing connections.</li>
      <li>Acknowledgment mechanisms to track packet loss, ECN marks, and corruption.</li>
      <li>Feature negotiation to choose the best congestion control algorithm.</li>
      <li>Supports multiple concurrent streams with prioritization for QoS.</li>
      <li>Works with both IPv4 and IPv6.</li>
      <li>Supports connection-oriented as well as connectionless transmission.</li>
    </ul>

    {/* Packet Structure */}
    <h2 className="text-3xl font-bold mt-8">DCCP Packet Structure</h2>
    <p className="leading-relaxed">
      DCCP’s generic header size depends on the Extended Sequence Number (X) field:
    </p>

    <p className="leading-relaxed font-semibold mt-4">When X = 1:</p>
    <p className="leading-relaxed">
      The Sequence Number field is 48 bits long, and the generic header becomes 
      <strong>16 bytes</strong>.
    </p>

    <p className="leading-relaxed font-semibold mt-4">When X = 0:</p>
    <p className="leading-relaxed">
      Only the low 24 bits of the Sequence Number are sent, reducing the header 
      size to <strong>12 bytes</strong>.
    </p>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Built-in congestion control prevents network overload (unlike UDP).</li>
      <li>Supports Quality of Service (QoS) by prioritizing important data.</li>
      <li>Flexible congestion control algorithms suited for various applications.</li>
      <li>Fully compatible with modern IP networks and coexists with TCP/UDP.</li>
    </ul>

    {/* Real-World Applications */}
    <h2 className="text-3xl font-bold mt-8">Real-World Applications</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Streaming Media:</strong> Audio, video, and conferencing requiring low latency.</li>
      <li><strong>Online Gaming:</strong> Ensures fast communication with minimal packet loss.</li>
      <li><strong>Telemetry:</strong> Transmission of large datasets from remote devices.</li>
      <li><strong>Remote Access:</strong> Secure and efficient access to servers or resources.</li>
    </ul>

  </div>
);

export default Home;
