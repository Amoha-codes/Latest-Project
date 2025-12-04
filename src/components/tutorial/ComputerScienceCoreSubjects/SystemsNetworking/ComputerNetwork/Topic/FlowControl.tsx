import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Flow Control ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Flow Control
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 14 Oct, 2025</p>

    <p className="text-lg leading-relaxed">
      Flow control is a key technique in the Data Link Layer (DLL) of the OSI model that manages 
      the rate of data transmission between a sender and receiver. It ensures that a fast sender 
      does not overwhelm a slower receiver, preventing data loss and inefficient communication. 
      Flow control balances the data transmission rate with the receiver’s processing and memory capacity.
    </p>

    <h2 className="text-3xl font-bold mt-8">Approaches to Flow Control</h2>

    <h3 className="text-2xl font-semibold mt-4">1. Feedback-Based Flow Control</h3>
    <p className="leading-relaxed">
      The receiver informs the sender about its ability to receive data. This allows the sender 
      to adjust its transmission rate dynamically.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Sender waits for acknowledgments or window updates before sending more data.</li>
      <li>Commonly used in TCP for dynamic network or receiver-based control.</li>
      <li><strong>Techniques:</strong></li>
      <ul className="list-disc ml-6 leading-relaxed">
        <li>Ready-signal handshaking – used when devices operate at different clock speeds.</li>
        <li>Credit-based flow control – sender transmits frames based on available credits from receiver buffers.</li>
      </ul>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">2. Rate-Based Flow Control</h3>
    <p className="leading-relaxed">
      The sender transmits data at a fixed or negotiated rate without feedback from the receiver.
      Suitable for streaming, multimedia, and real-time systems.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Leaky Bucket Algorithm:</strong> Enforces a constant output rate.</li>
      <li><strong>Token Bucket Algorithm:</strong> Allows occasional bursts by sending packets only if tokens are available.</li>
      <li><strong>Traffic Shaping and Policing:</strong> Regulates packet flow; shaping delays packets, policing drops excess traffic.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Techniques of Flow Control</h2>

    <h3 className="text-2xl font-semibold mt-4">1. Stop-and-Wait Flow Control</h3>
    <p className="leading-relaxed">
      Sender transmits one frame and waits for an acknowledgment before sending the next. 
      If no acknowledgment is received within a timeout, the frame is retransmitted.
    </p>
    <p className="leading-relaxed">
      Advantages: Simple implementation, reliable transmission. <br />
      Disadvantages: Inefficient for high-latency or high-bandwidth networks.
    </p>

    <h3 className="text-2xl font-semibold mt-4">2. Sliding Window Flow Control</h3>
    <p className="leading-relaxed">
      Allows multiple frames to be sent before receiving acknowledgments. The sender maintains 
      a "window" of unacknowledged frames and slides it forward as ACKs arrive.
    </p>
    <p className="leading-relaxed">
      Advantages: Improves bandwidth utilization through pipelined transmission. <br />
      Disadvantages: More complex, requires additional memory for window and buffer management.
    </p>

    <h2 className="text-3xl font-bold mt-8">Importance of Flow Control</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Prevents Data Loss: Avoids buffer overflows at the receiver.</li>
      <li>Maximizes Throughput: Optimizes network resource utilization.</li>
      <li>Maintains System Stability: Prevents stalls or crashes in hardware datapaths.</li>
      <li>Enhances Fairness: Ensures fair transmission across multiple streams or connections.</li>
    </ul>

  </div>
);

export default Home;
