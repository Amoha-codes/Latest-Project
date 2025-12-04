import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= RUDP Theory ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Reliable User Datagram Protocol (RUDP)
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 15 Oct, 2025</p>

    <p className="text-lg leading-relaxed">
      Reliable UDP (RUDP) is a protocol built on top of UDP that introduces
      reliability features such as acknowledgments, retransmissions, and ordered
      delivery while still maintaining UDP’s low latency. It bridges the gap
      between UDP, which is fast but unreliable, and TCP, which is reliable but
      slower due to connection setup and strict control mechanisms.
    </p>

    <h2 className="text-3xl font-bold mt-8">Why UDP Alone Isn’t Enough</h2>
    <p className="leading-relaxed">
      UDP sends datagrams without any confirmation or error checking. This leads
      to possible packet loss, duplication, or out-of-order delivery. RUDP solves
      this by adding a reliability layer on top of UDP—combining speed with
      dependable delivery.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Packets may get lost or duplicated</li>
      <li>No acknowledgment from receiver</li>
      <li>No guarantee of ordering</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">RUDP Architecture – How It Works</h2>
    <p className="leading-relaxed">
      RUDP operates at the application layer and uses UDP as the transport.
      Sender and receiver maintain a sliding window to control packet flow.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Sender divides data into segments</li>
      <li>Each segment gets a sequence number + checksum</li>
      <li>Receiver validates packets, checks ordering, and sends ACKs</li>
      <li>Lost packets are retransmitted after timeout</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Components of RUDP</h2>

    <h3 className="text-2xl font-semibold mt-4">1. Thread-Safe Buffers</h3>
    <p className="leading-relaxed">
      Sender and receiver use synchronized buffers protected with semaphores to
      prevent data corruption and ensure concurrency safety.
    </p>

    <h3 className="text-2xl font-semibold mt-4">2. Window Management</h3>
    <p className="leading-relaxed">
      RUDP maintains two counters:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>base</strong> – earliest unacknowledged packet</li>
      <li><strong>next</strong> – next packet to send</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">3. Timeout and Retransmission</h3>
    <p className="leading-relaxed">
      Each sent segment starts a timer. If an ACK is not received within the timeout,
      the packet is resent—ensuring reliability.
    </p>

    <h3 className="text-2xl font-semibold mt-4">4. Network Simulation & Queuing</h3>
    <p className="leading-relaxed">
      RUDP can simulate delay, loss, and out-of-order packet delivery during testing.
    </p>

    <h2 className="text-3xl font-bold mt-8">Sliding Window Protocol</h2>
    <p className="leading-relaxed">
      Sliding Window Protocol ensures controlled flow of packets and correct ordering.
      RUDP typically uses the Selective Repeat variant.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>One-Bit Sliding Window – simplest form</li>
      <li>Go-Back-N – retransmits all packets after a loss</li>
      <li>Selective Repeat – retransmits only lost packets (Used in RUDP)</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Piggybacking Technique</h2>
    <p className="leading-relaxed">
      RUDP attaches ACKs to outgoing data packets instead of sending them separately,
      reducing overhead and improving efficiency.
    </p>

    <h2 className="text-3xl font-bold mt-8">Internal Classes in RUDP</h2>
    <table className="w-full bg-gray-400 p-4 rounded-lg text-sm">
      <tbody>
        <tr><td className="font-semibold">RUDP:</td><td>Core class managing window, timers, send/receive</td></tr>
        <tr><td className="font-semibold">Buffer_RUDP:</td><td>Thread-safe shared buffer</td></tr>
        <tr><td className="font-semibold">Thread_Receiver:</td><td>Always listens for packets & ACKs</td></tr>
        <tr><td className="font-semibold">Segment_RUDP:</td><td>Structure of packets</td></tr>
        <tr><td className="font-semibold">Timeout_Handler:</td><td>Handles retransmissions</td></tr>
        <tr><td className="font-semibold">Support_RUDP:</td><td>UDP sending, delay/loss simulation</td></tr>
        <tr><td className="font-semibold">Client/Server:</td><td>Interfaces for application-level communication</td></tr>
      </tbody>
    </table>

    <h2 className="text-3xl font-bold mt-8">RUDP Work Flow</h2>

    <h3 className="text-2xl font-semibold mt-4">Client Side</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Data divided into segments</li>
      <li>Each segment given sequence number + checksum</li>
      <li>Sent through Support_RUDP.send_udp()</li>
      <li>Timer started for each packet</li>
      <li>ACK → mark delivered</li>
      <li>Timeout → retransmit</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Server Side</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Receives packets</li>
      <li>Validates checksum + sequence number</li>
      <li>Sends ACKs</li>
      <li>Reorders out-of-sequence packets</li>
      <li>Delivers complete data to application</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Use Cases of RUDP</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Online gaming</li>
      <li>VoIP and streaming</li>
      <li>IoT communication</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">RUDP vs UDP vs TCP</h2>
    <table className="w-full bg-gray-400 p-4 rounded-lg text-sm">
      <thead className="font-bold">
        <tr>
          <td>Feature</td>
          <td>UDP</td>
          <td>TCP</td>
          <td>RUDP</td>
        </tr>
      </thead>
      <tbody>
        <tr><td>Connection setup</td><td>No</td><td>Yes</td><td>No</td></tr>
        <tr><td>Reliability</td><td>No</td><td>Yes</td><td>Yes</td></tr>
        <tr><td>Acknowledgment</td><td>No</td><td>Yes</td><td>Yes</td></tr>
        <tr><td>Packet ordering</td><td>No</td><td>Guaranteed</td><td>Guaranteed</td></tr>
        <tr><td>Speed</td><td>Very fast</td><td>Moderate</td><td>Near UDP</td></tr>
      </tbody>
    </table>

  </div>
);

export default Home;
