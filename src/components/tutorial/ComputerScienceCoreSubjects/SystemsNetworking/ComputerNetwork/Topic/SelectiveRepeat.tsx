import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Selective Repeat Protocol ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Selective Repeat Sliding Window Protocol
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 24 Sep, 2025</p>

    <p className="text-lg leading-relaxed">
      The Selective Repeat Protocol (SRP) is a reliable data transmission method that improves upon Go-Back-N (GBN) by retransmitting only the lost or corrupted packets. Unlike GBN, which retransmits all packets from the point of failure, SRP minimizes unnecessary retransmissions, making it more efficient on unreliable links. It requires a full-duplex link, allowing data to be sent in both directions simultaneously.
    </p>

    <h2 className="text-3xl font-bold mt-8">Key Characteristics</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Window Size:</strong> Sender's window (Ws) and receiver's window (Wr) are equal.</li>
      <li><strong>Packet Handling:</strong> Receiver can accept and buffer out-of-order packets while waiting for retransmission of lost packets.</li>
      <li><strong>Retransmission:</strong> Sender retransmits only specific packets that were not acknowledged after a timeout or upon receiving a Negative Acknowledgment (NAK).</li>
      <li><strong>Efficiency:</strong> Efficiency formula:
        <p className="ml-6 font-mono">
          η = N / (1 + 2a), where a = Tp / Tt, Tp = Propagation Delay, Tt = Transmission Delay
        </p>
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Why Window Size is Crucial</h2>
    <p className="leading-relaxed">
      In SRP, the sender and receiver window size must be ≤ 2^(m−1), i.e., half of the sequence number space. If the window is larger, sequence numbers may repeat before old packets are acknowledged. This can cause the receiver to confuse new packets with old retransmissions, leading to errors.
    </p>

    <h2 className="text-3xl font-bold mt-8">Efficiency Formula with Delays</h2>
    <p className="leading-relaxed">
      Efficiency, considering delays:
    </p>
    <p className="ml-6 font-mono">
      η = Tt(data) / [Tt(data) + 2Tp + Tq + Tpro + Tt(ack)]
    </p>
    <p className="leading-relaxed mt-2">
      Where:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Tt(data) = Transmission delay of data packet</li>
      <li>Tp = Propagation delay</li>
      <li>Tq = Queuing delay</li>
      <li>Tpro = Processing delay</li>
      <li>Tt(ack) = Transmission delay of acknowledgment</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Buffers & Sequence Numbers</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Buffers required = N (sender) + N (receiver)</li>
      <li>Sequence numbers required = N + N = 2N</li>
      <li>Efficiency relation is same as Go-Back-N: η = N / (1 + 2a)</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Advantages of SRP</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Efficient use of bandwidth by retransmitting only lost or corrupted packets.</li>
      <li>Supports out-of-order packet reception and buffering at receiver.</li>
      <li>Reduces unnecessary retransmissions compared to Go-Back-N.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Disadvantages of SRP</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>More complex to implement due to buffering and individual packet timers.</li>
      <li>Requires larger memory at both sender and receiver.</li>
    </ul>

  </div>
);

export default Home;
