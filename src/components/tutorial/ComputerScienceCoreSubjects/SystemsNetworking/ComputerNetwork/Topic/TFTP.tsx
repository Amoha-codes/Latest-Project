import React from "react";

const TFTPTheory: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= TFTP ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Trivial File Transfer Protocol (TFTP)
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 16 Oct, 2025</p>

    {/* Introduction */}
    <p className="text-lg leading-relaxed">
      TFTP (Trivial File Transfer Protocol) is a lightweight protocol used to transfer files between a client and server. It operates over the User Datagram Protocol (UDP) on port 69. TFTP is designed for simple file transfers without authentication or advanced features, making it suitable for local network environments rather than the Internet.
    </p>

    {/* Note */}
    <p className="text-lg leading-relaxed font-semibold">
      Note: TFTP lacks security features and is primarily used in LANs or embedded systems. It requires minimal memory and resources.
    </p>

    {/* TFTP Message Formats */}
    <h2 className="text-3xl font-bold mt-6">TFTP Message Formats</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Read Request (RRQ) - Type 1:</strong> Client requests a copy of a file from the server.
        <pre className="bg-gray-400 p-2 rounded">Opcode (2 bytes) | File Name (variable) | 0 (1 byte) | Mode (variable) | 0 (1 byte)</pre>
      </li>
      <li>
        <strong>Write Request (WRQ) - Type 2:</strong> Client requests to write a file to the server.
        <pre className="bg-gray-400 p-2 rounded">Opcode (2 bytes) | File Name (variable) | 0 (1 byte) | Mode (variable) | 0 (1 byte)</pre>
      </li>
      <li>
        <strong>Data - Type 3:</strong> Transfers a block of file data (max 512 bytes per packet).
        <pre className="bg-gray-400 p-2 rounded">Opcode (2 bytes) | Block Number (2 bytes) | Data (≤512 bytes)</pre>
      </li>
      <li>
        <strong>Acknowledgment (ACK) - Type 4:</strong> Confirms receipt of a data block; EOF block may be {"<"} 512 bytes.
        <pre className="bg-gray-400 p-2 rounded">Opcode (2 bytes) | Block Number (2 bytes)</pre>
      </li>
    </ul>

    {/* Working */}
    <h2 className="text-3xl font-bold mt-6">Working of TFTP</h2>
    <p className="leading-relaxed">
      1. TFTP uses UDP port 69 to establish a connection between the client and server.<br />
      2. The client sends a <strong>Read Request (RRQ)</strong> or <strong>Write Request (WRQ)</strong> depending on the operation.<br />
      3. Data is transmitted in 512-byte packets from the server to the client (or vice versa).<br />
      4. The receiving side sends an acknowledgment (ACK) for each packet.<br />
      5. The process repeats until all packets are transmitted and acknowledged.
    </p>

    {/* Comparison with FTP */}
    <h2 className="text-3xl font-bold mt-6">Comparison of TFTP vs FTP</h2>
    <table className="table-auto border-collapse border border-gray-300 w-full text-left">
      <thead>
        <tr className="bg-gray-400">
          <th className="border border-gray-300 px-4 py-2">Feature</th>
          <th className="border border-gray-300 px-4 py-2">TFTP</th>
          <th className="border border-gray-300 px-4 py-2">FTP</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Protocol</td>
          <td className="border border-gray-300 px-4 py-2">UDP-based</td>
          <td className="border border-gray-300 px-4 py-2">TCP-based</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Authentication</td>
          <td className="border border-gray-300 px-4 py-2">None</td>
          <td className="border border-gray-300 px-4 py-2">Username & password required</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Reliability</td>
          <td className="border border-gray-300 px-4 py-2">Less reliable</td>
          <td className="border border-gray-300 px-4 py-2">Reliable (TCP error handling)</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">File Size</td>
          <td className="border border-gray-300 px-4 py-2">Small files</td>
          <td className="border border-gray-300 px-4 py-2">Can handle large files</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Use Case</td>
          <td className="border border-gray-300 px-4 py-2">Simple transfers, firmware updates</td>
          <td className="border border-gray-300 px-4 py-2">General-purpose file transfer</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default TFTPTheory;
