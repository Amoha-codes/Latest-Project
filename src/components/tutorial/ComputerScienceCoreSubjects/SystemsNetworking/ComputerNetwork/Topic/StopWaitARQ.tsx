import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Stop and Wait ARQ ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Stop and Wait ARQ
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 29 Sep, 2025</p>

    <p className="text-lg leading-relaxed">
      Stop-and-Wait ARQ is a sliding window protocol for reliable communication over noisy channels. 
      The sender transmits one frame at a time and waits for an acknowledgment (ACK) from the receiver. 
      If ACK is received, the sender proceeds to the next frame; otherwise, the same frame is retransmitted. 
      It provides both flow control and error control, though channel utilization is low.
    </p>

    <h2 className="text-3xl font-bold mt-8">Characteristics of Stop and Wait ARQ</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Used in connection-oriented communication.</li>
      <li>Provides both error control and flow control.</li>
      <li>Special case of Sliding Window Protocol with window size = 1.</li>
      <li>Requires only two sequence numbers: 0 and 1.</li>
      <li>Throughput = 1 frame per RTT; low performance for high bandwidth × delay product.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Useful Terms</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Propagation Delay:</strong> Time for a packet to travel from sender to receiver.</li>
      <li><strong>Round Trip Time (RTT):</strong> Time for packet to reach receiver + time for ACK to return.</li>
      <li><strong>Timeout (TO):</strong> 2 × RTT</li>
      <li><strong>Time To Live (TTL):</strong> 2 × Timeout (maximum 255 seconds)</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Simple Stop and Wait Rules</h2>
    <h3 className="text-2xl font-semibold mt-4">At Sender</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Send one data packet at a time.</li>
      <li>Send the next packet only after receiving acknowledgment for the previous.</li>
    </ul>
    <h3 className="text-2xl font-semibold mt-4">At Receiver</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Send acknowledgment after receiving and consuming a data packet.</li>
      <li>Ensure acknowledgment is sent for flow control.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Problems in Stop and Wait</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li><strong>Lost Data:</strong> If a frame is lost, the receiver cannot acknowledge, so the sender waits indefinitely.</li>
      <li><strong>Lost Acknowledgment:</strong> Frame received but ACK is lost; sender waits and cannot transmit the next frame.</li>
      <li><strong>Delayed ACK/Data:</strong> ACK arrives after sender timeout, potentially causing misinterpretation as acknowledgment of a different packet.</li>
    </ol>

    <h2 className="text-3xl font-bold mt-8">Stop and Wait ARQ Solution</h2>
    <p className="leading-relaxed">
      Stop-and-Wait ARQ solves these issues by combining flow control and error control using:
    </p>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li><strong>Timeout:</strong> Resends frame if ACK not received within a timeout period.</li>
      <li><strong>Sequence Numbers (Data):</strong> Each data frame is numbered to ensure correct delivery.</li>
      <li><strong>Sequence Numbers (ACK):</strong> ACKs carry sequence numbers of the next expected frame.</li>
    </ol>

    <h2 className="text-3xl font-bold mt-8">Working of Stop and Wait ARQ</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Sender A sends frame with sequence number 0.</li>
      <li>Receiver B receives the frame and sends ACK with sequence number 1.</li>
      <li>Only a one-bit sequence number is used; both sender and receiver buffer one frame at a time.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Constraints</h2>
    <p className="leading-relaxed">
      Stop-and-Wait ARQ is inefficient on high-bandwidth, high-delay links because the sender waits for ACK before sending the next frame. 
      Efficiency improves with larger window sizes, leading to advanced protocols like Go-Back-N and Selective Repeat ARQ. 
      Works well for low propagation delay networks such as LANs.
    </p>

  </div>
);

export default Home;
