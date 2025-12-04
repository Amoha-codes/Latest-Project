import React from "react";

const TCPHandshake: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Title ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      TCP 3-Way Handshake Process
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 13 Oct, 2025</p>

    {/* ================= Intro ================= */}
    <p className="text-lg leading-relaxed">
      The <strong>TCP 3-Way Handshake</strong> is used by the Transmission Control Protocol (TCP) to establish a reliable connection between a client and a server before data transfer. It ensures that both sides are synchronized and ready to communicate.
    </p>

    {/* ================= TCP Segment ================= */}
    <h2 className="text-3xl font-bold mt-8">TCP Segment Structure</h2>
    <p className="leading-relaxed">
      A TCP segment consists of a header and the data bytes to be sent. The header length can range from 20–60 bytes, depending on whether options are used.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Source Port / Destination Port (16 bits each):</strong> Identify sending and receiving applications.</li>
      <li><strong>Sequence Number (32 bits):</strong> Position of the first byte in the segment, used for ordering.</li>
      <li><strong>Acknowledgment Number (32 bits):</strong> Next byte expected by the receiver; confirms data receipt.</li>
      <li><strong>Header Length (HLEN):</strong> Size of the header in 32-bit words (5–15 words = 20–60 bytes).</li>
      <li><strong>Control Flags (1 bit each):</strong> URG (urgent), ACK (acknowledgment), PSH (push), RST (reset), SYN (synchronize), FIN (terminate).</li>
      <li><strong>Window Size:</strong> Receiver buffer size for flow control.</li>
      <li><strong>Checksum:</strong> Error detection.</li>
      <li><strong>Urgent Pointer:</strong> Position of urgent data (if URG flag set).</li>
    </ul>

    {/* ================= 3-Way Handshake ================= */}
    <h2 className="text-3xl font-bold mt-8">TCP 3-Way Handshake Steps</h2>
    <p className="leading-relaxed">
      TCP ensures reliable communication using <strong>Positive Acknowledgement with Retransmission (PAR)</strong>: each segment must be acknowledged, and lost or corrupted segments are retransmitted.
    </p>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>
        <strong>Step 1 (SYN):</strong> The client sends a segment with the SYN flag set to request a connection and specifies its initial sequence number.
      </li>
      <li>
        <strong>Step 2 (SYN + ACK):</strong> The server responds with both SYN and ACK flags set. The ACK confirms receipt of the client’s SYN, and the SYN specifies the server’s initial sequence number.
      </li>
      <li>
        <strong>Step 3 (ACK):</strong> The client acknowledges the server’s SYN-ACK. After this, a reliable connection is established, and actual data transfer can begin.
      </li>
    </ol>

    {/* ================= Summary ================= */}
    <p className="leading-relaxed mt-4">
      This handshake ensures both the client and server agree on initial sequence numbers and are ready for data transfer, providing a foundation for reliable communication over TCP.
    </p>
  </div>
);

export default TCPHandshake;
