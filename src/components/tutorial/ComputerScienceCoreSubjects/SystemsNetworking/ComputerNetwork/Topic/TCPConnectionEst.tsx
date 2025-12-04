import React from "react";

const TCPConnectionEstablishment: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Title ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      TCP Connection Establishment
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 Jul, 2025</p>

    {/* ================= Introduction ================= */}
    <p className="leading-relaxed mt-4">
      TCP (Transmission Control Protocol) ensures reliable, ordered, and error-checked delivery of data between computers. Before data transfer begins, TCP establishes a connection using a <strong>three-way handshake</strong>, synchronizing both devices and agreeing on communication parameters. TCP breaks data into segments, manages delivery, retransmits lost packets, and reassembles them in order. This makes TCP ideal for applications like web browsing, email, and file transfers.
    </p>

    {/* ================= Three-Way Handshake ================= */}
    <h2 className="text-3xl font-bold mt-8">TCP Three-Way Handshake</h2>
    <p className="leading-relaxed">
      The three-way handshake uses three steps to establish a reliable connection:
    </p>
    <ol className="list-decimal ml-6 space-y-3 leading-relaxed">
      <li>
        <strong>Client → Server (SYN):</strong> The client sends a TCP segment with:
        <ul className="list-disc ml-6">
          <li>Sequence Number: Random initial sequence number (e.g., 521)</li>
          <li>SYN=1: Request to synchronize sequence numbers</li>
          <li>Maximum Segment Size (MSS): Maximum payload size (e.g., 1460 B)</li>
          <li>Window Size: Sender buffer size (e.g., 14600 B)</li>
        </ul>
      </li>
      <li>
        <strong>Server → Client (SYN + ACK):</strong> The server replies with:
        <ul className="list-disc ml-6">
          <li>Sequence Number: Random initial sequence number (e.g., 2000)</li>
          <li>SYN=1: Synchronize sequence numbers</li>
          <li>ACK=1: Acknowledges client’s SYN</li>
          <li>MSS & Window Size: Defines server's limits (e.g., MSS=500 B, window=10000 B)</li>
        </ul>
      </li>
      <li>
        <strong>Client → Server (ACK):</strong> The client sends:
        <ul className="list-disc ml-6">
          <li>Sequence Number: Next in sequence (e.g., 522)</li>
          <li>ACK=1: Acknowledges server’s SYN (Ack No.=2001)</li>
        </ul>
      </li>
    </ol>
    <p className="leading-relaxed mt-2">
      This process establishes a reliable full-duplex connection between client and server.
    </p>

    {/* ================= TCP Flags ================= */}
    <h2 className="text-3xl font-bold mt-8">TCP Flags Used in Connection Establishment</h2>
    <ul className="list-disc ml-6 space-y-2 leading-relaxed">
      <li><strong>SYN:</strong> Initiates a new connection and synchronizes sequence numbers.</li>
      <li><strong>ACK:</strong> Confirms receipt of a segment.</li>
      <li><strong>RST:</strong> Abruptly closes a connection due to errors or security reasons.</li>
      <li><strong>FIN:</strong> Signals intent to close the connection properly.</li>
    </ul>

    {/* ================= Common Issues ================= */}
    <h2 className="text-3xl font-bold mt-8">Common Issues in TCP Connection Establishment</h2>
    <ul className="list-disc ml-6 space-y-2 leading-relaxed">
      <li><strong>SYN Flood Attacks:</strong> Multiple SYN requests without completion can overload the server.</li>
      <li><strong>Connection Timeout:</strong> Failure occurs if a device doesn’t respond in time.</li>
      <li><strong>Packet Loss:</strong> Lost packets can delay or prevent connection establishment.</li>
    </ul>

    {/* ================= Optimization ================= */}
    <h2 className="text-3xl font-bold mt-8">Optimizing TCP Connection Establishment</h2>
    <ul className="list-disc ml-6 space-y-2 leading-relaxed">
      <li><strong>TCP Fast Open:</strong> Reduces latency by sending data earlier in the handshake.</li>
      <li><strong>Keep-Alive Mechanism:</strong> Maintains connections to avoid repeated setups.</li>
      <li><strong>Load Balancing:</strong> Distributes traffic to efficiently handle many connections.</li>
    </ul>

    {/* ================= Additional Notes ================= */}
    <h2 className="text-3xl font-bold mt-8">Additional Information</h2>
    <ul className="list-disc ml-6 space-y-2 leading-relaxed">
      <li><strong>"Established" state:</strong> Connection is successfully set up and ready for data transfer.</li>
      <li><strong>TCP Connection Limit:</strong> Depends on system resources; modern systems support thousands to millions of concurrent connections.</li>
      <li><strong>TCP Speed:</strong> Determined by bandwidth, latency, congestion, and window size; no fixed limit.</li>
    </ul>
  </div>
);

export default TCPConnectionEstablishment;
