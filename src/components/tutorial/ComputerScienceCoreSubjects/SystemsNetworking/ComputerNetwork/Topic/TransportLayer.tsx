import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Title ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Transport Layer in OSI Model
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 13 Oct, 2025</p>

    {/* ================= Intro ================= */}
    <p className="text-lg leading-relaxed">
      The <strong>Transport Layer</strong> ensures end-to-end communication between applications on different hosts. 
      It sits between the Network Layer (which delivers packets to the correct machine) and the Session Layer 
      (which manages communication sessions). Its main job is to deliver data reliably, efficiently, and in the correct order.
    </p>

    {/* ================= Functions ================= */}
    <h2 className="text-3xl font-bold mt-8">Functions of Transport Layer</h2>
    <p className="leading-relaxed">
      The Transport Layer provides logical communication between processes on different hosts. Its primary functions include:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Implemented only in end systems, not in intermediate routers.</li>
      <li>Uses port numbers to identify sending and receiving applications.</li>
      <li>Supports process-to-process delivery, enabling multiple applications to share a single network connection.</li>
      <li>Performs multiplexing and demultiplexing using port numbers to direct data to the correct process.</li>
      <li>Divides data from upper layers into segments (TCP) or datagrams (UDP) and adds necessary headers.</li>
      <li>Handles error detection, retransmission, and sequencing to maintain reliable communication.</li>
      <li>Coordinates flow control to ensure the receiver is not overloaded.</li>
      <li>Communicates with the Network Layer to send data across networks.</li>
      <li>At the receiving end, removes headers, reassembles data, and passes it to the appropriate application.</li>
    </ul>

    {/* ================= 3-Way Handshake ================= */}
    <h2 className="text-3xl font-bold mt-8">3-Way Handshake</h2>
    <p className="leading-relaxed">
      The 3-Way Handshake ensures both client and server are ready before data transmission:
    </p>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li><strong>SYN → (Client → Server)</strong>: Client sends a TCP segment with SYN=1, including its Initial Sequence Number (ISN).</li>
      <li><strong>SYN‑ACK ← (Server → Client)</strong>: Server replies with SYN=1 & ACK=1, containing its own ISN and ACK=client_ISN+1.</li>
      <li><strong>ACK → (Client → Server)</strong>: Client sends ACK=1 segment with ACK=server_ISN+1, completing synchronization. Connection enters ESTABLISHED state.</li>
    </ol>
    <p className="leading-relaxed">
      <strong>Why three steps?</strong> Two steps would not guarantee mutual confirmation. The third step ensures both client and server know the connection is established for reliable data transfer.
    </p>

    {/* ================= Transport Layer Protocols ================= */}
    <h2 className="text-3xl font-bold mt-8">Transport Layer Protocols</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Transmission Control Protocol (TCP):</strong> Connection-oriented, reliable, establishes connection before data transfer and terminates after completion.</li>
      <li><strong>User Datagram Protocol (UDP):</strong> Connectionless, not reliable, used when speed is more important than reliability.</li>
      <li><strong>Stream Control Transmission Protocol (SCTP):</strong> Reliable transport over connectionless networks like IP; supports multi-homing and is used by many Internet applications.</li>
    </ul>

    {/* ================= TCP vs UDP ================= */}
    <h2 className="text-3xl font-bold mt-8">Difference Between TCP and UDP</h2>
    <table className="w-full border-collapse border border-gray-400 text-left">
      <thead>
        <tr>
          <th className="border border-gray-400 px-4 py-2">TCP</th>
          <th className="border border-gray-400 px-4 py-2">UDP</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Connection-oriented protocol</td>
          <td className="border border-gray-400 px-4 py-2">Connectionless protocol</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Supports error-checking, retransmission, sequencing</td>
          <td className="border border-gray-400 px-4 py-2">Basic error-checking using checksums only</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Acknowledgment segments present</td>
          <td className="border border-gray-400 px-4 py-2">No acknowledgment segments</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Slower due to reliability features</td>
          <td className="border border-gray-400 px-4 py-2">Faster and more efficient</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Retransmission of lost packets possible</td>
          <td className="border border-gray-400 px-4 py-2">No retransmission of lost packets</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Variable-length header (20-60 bytes)</td>
          <td className="border border-gray-400 px-4 py-2">Fixed-length header (8 bytes)</td>
        </tr>
      </tbody>
    </table>

  </div>
);

export default Home;
