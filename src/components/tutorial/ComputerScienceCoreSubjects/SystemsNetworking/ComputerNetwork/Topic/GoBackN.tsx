import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Go-Back-N Protocol ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Go-Back-N Sliding Window Protocol
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 01 Oct, 2025</p>

    <p className="text-lg leading-relaxed">
      Go-Back-N (GBN) is a sliding window ARQ protocol that allows the sender to transmit multiple frames (up to a defined window size) without waiting for individual acknowledgments. 
      If a packet is lost or corrupted, the sender retransmits that packet and all subsequent packets in the window, ensuring reliability but potentially wasting bandwidth if errors occur frequently.
    </p>

    <h2 className="text-3xl font-bold mt-8">Characteristic Features of GBN</h2>
    
    <h3 className="text-2xl font-semibold mt-4">1. Sender Window Size (Ws)</h3>
    <p className="leading-relaxed">
      Ws = N (e.g., GB10 → Ws = 10). For N = 1, it reduces to Stop-and-Wait protocol. Efficiency is:
    </p>
    <p className="ml-6 font-mono">
      Efficiency = N / (1 + 2a), where a = Tp / Tt, Tp = Propagation Delay, Tt = Transmission Delay
    </p>
    <p className="leading-relaxed mt-2">
      If processing, queuing, and ACK transmission delays are non-zero:
    </p>
    <p className="ml-6 font-mono">
      Efficiency = N * Useful Time / Total Time <br/>
      Useful Time = Tt <br/>
      Total Time = Tt + 2*Tp + Pr + Pq + Tt(ack)
    </p>
    <p className="leading-relaxed mt-2">
      Effective Bandwidth / Throughput = Efficiency * Bandwidth = (N/(1+2a)) * B
    </p>

    <h3 className="text-2xl font-semibold mt-4">2. Receiver Window Size (WR)</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Always 1 in GBN.</li>
      <li>Receiver accepts only the next expected packet.</li>
      <li>Out-of-order packets are discarded.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">3. Acknowledgements (ACKs)</h3>
    <p className="leading-relaxed">
      ACKs confirm receipt of data packets. If an ACK is not received in time, the sender retransmits the packet.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Cumulative ACK:</strong> Confirms all packets up to a point; less traffic but less reliable if ACK lost.</li>
      <li><strong>Independent ACK:</strong> Each packet acknowledged individually; higher reliability but more traffic.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Working of GBN Protocol</h2>
    <h3 className="text-2xl font-semibold mt-4">Sender Side</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Maintains a window of size N (e.g., GB4 → window size = 4).</li>
      <li>Can send up to N unacknowledged packets.</li>
      <li>Each packet has a timer; if ACK received, window slides forward.</li>
      <li>Timeout triggers retransmission of the missing packet and all subsequent packets in the window.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Receiver Side</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Window size WR = 1; accepts only the expected packet.</li>
      <li>Correct packet → send ACK and move to next expected sequence number.</li>
      <li>Out-of-order packet → discard and resend ACK for last correctly received packet.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Window Size and Sequence Numbers</h2>
    <p className="leading-relaxed">
      The sender window size determines how many packets can be sent without acknowledgment. 
      Sequence numbers label packets for correct ordering. The window size must not exceed the available sequence numbers:
    </p>
    <p className="ml-6 font-mono">
      Ws + WR ≤ ASN <br/>
      Since WR = 1 → Ws + 1 ≤ ASN <br/>
      Minimum sequence numbers in GBN = N + 1 <br/>
      Bits Required = ⌈log₂(N + 1)⌉
    </p>
    <p className="leading-relaxed mt-2">
      One extra sequence number avoids duplicate packet problems when cumulative ACKs are lost.
    </p>

    <h2 className="text-3xl font-bold mt-8">Example: GB4 Protocol</h2>
    <p className="leading-relaxed">
      Sender window size = 4, so minimum 4 sequence numbers are needed. If cumulative ACK is lost, retransmission could produce duplicates. 
      An extra sequence number ensures the receiver can reject duplicates correctly.
    </p>

    <h2 className="text-3xl font-bold mt-8">Advantages</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Simple and effective for reliable communication.</li>
      <li>Better performance than Stop-and-Wait for low-error networks.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Disadvantages</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Inefficient if errors are frequent due to multiple retransmissions.</li>
      <li>Bandwidth may be wasted due to redundant retransmissions.</li>
    </ul>

  </div>
);

export default Home;
