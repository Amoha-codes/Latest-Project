import React from "react";

const TCPServicesAndSegment: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Title ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Services and Segment Structure in TCP
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 01 Oct, 2025</p>

    {/* ================= TCP Services ================= */}
    <h2 className="text-3xl font-bold mt-8">TCP Services</h2>
    <p className="leading-relaxed">
      The Transmission Control Protocol (TCP) works with IP to provide a reliable transport service between processes. Key services offered by TCP to the application layer include:
    </p>
    <ul className="list-disc ml-6 space-y-2 leading-relaxed">
      <li>
        <strong>Process-to-Process Communication:</strong> Uses 16-bit port numbers to identify sending and receiving processes.
      </li>
      <li>
        <strong>Stream-Oriented:</strong> Sends data as a byte stream, grouped into segments with headers, encapsulated into IP packets.
      </li>
      <li>
        <strong>Full-Duplex Service:</strong> Allows communication in both directions simultaneously.
      </li>
      <li>
        <strong>Connection-Oriented Service:</strong> TCP connection has three phases: connection establishment, data transfer, and connection termination.
      </li>
      <li>
        <strong>Reliability:</strong> Ensures reliable delivery using checksums, acknowledgements, retransmissions, sequencing, and congestion control.
      </li>
      <li>
        <strong>Multiplexing:</strong> Allows multiple logical connections between port numbers over a single physical connection.
      </li>
    </ul>

    {/* ================= TCP Header Components ================= */}
    <h2 className="text-3xl font-bold mt-8">Components of TCP Header</h2>
    <ul className="list-disc ml-6 space-y-2 leading-relaxed">
      <li>
        <strong>Byte Number:</strong> Each byte in a TCP connection is assigned a unique number, starting from an arbitrary initial value.
      </li>
      <li>
        <strong>Sequence Number:</strong> Byte number of the first byte in the segment; helps the receiver reassemble data in order.
      </li>
      <li>
        <strong>Acknowledgement Number:</strong> Indicates the next expected byte from the sender; confirms receipt of all previous bytes.
      </li>
    </ul>

    {/* ================= TCP Segment Structure ================= */}
    <h2 className="text-3xl font-bold mt-8">TCP Segment Structure</h2>
    <p className="leading-relaxed">
      A TCP segment consists of a header and the data bytes to be transmitted. The header can range from 20–60 bytes, depending on the options.
    </p>
    <ul className="list-disc ml-6 space-y-2 leading-relaxed">
      <li><strong>Source Port Address:</strong> 16-bit field identifying the sending application.</li>
      <li><strong>Destination Port Address:</strong> 16-bit field identifying the receiving application.</li>
      <li><strong>Sequence Number:</strong> 32-bit field for the first byte number in the segment.</li>
      <li><strong>Acknowledgement Number:</strong> 32-bit field indicating the next expected byte from the sender.</li>
      <li>
        <strong>Header Length (HLEN):</strong> 4-bit field indicating TCP header length in 32-bit words (min 5 → 20 bytes, max 15 → 60 bytes).
      </li>
      <li>
        <strong>Control Flags:</strong> 6 one-bit flags that manage connection and flow:
        <ul className="list-disc ml-6">
          <li>URG: Urgent pointer is valid</li>
          <li>ACK: Acknowledgement number is valid</li>
          <li>PSH: Push data immediately</li>
          <li>RST: Reset connection</li>
          <li>SYN: Synchronize sequence numbers</li>
          <li>FIN: Terminate connection</li>
        </ul>
      </li>
      <li><strong>Window Size:</strong> Size of the sender’s buffer in bytes.</li>
      <li><strong>Checksum:</strong> Mandatory error detection field.</li>
      <li>
        <strong>Urgent Pointer:</strong> Points to urgent data if URG flag is set; added to sequence number to get the last urgent byte.
      </li>
    </ul>
  </div>
);

export default TCPServicesAndSegment;
