import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Token Bucket Algorithm ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Token Bucket Algorithm
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 03 Oct, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      The Token Bucket algorithm is a widely used traffic shaping and rate-limiting mechanism
      in computer networks. It regulates how much data can be transmitted while allowing
      bursty traffic when sufficient tokens are available.
    </p>

    {/* ================= Need Section ================= */}
    <h2 className="text-3xl font-bold mt-8">Need for Token Bucket Algorithm</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Video/audio conferencing needs bounded delay and loss rate.</li>
      <li>Streaming requires low packet loss but can tolerate some delay.</li>
      <li>Real-time control systems need strictly bounded delay.</li>
      <li>High-value applications should receive better QoS than normal ones.</li>
    </ul>

    {/* ================= Flow Characteristics ================= */}
    <h2 className="text-3xl font-bold mt-8">Flow Characteristics of Token Bucket Algorithm</h2>
    <p className="leading-relaxed">
      Network flows have four important characteristics that impact Quality of Service (QoS):
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Reliability:</strong> Ensures delivery without loss. Needed for email, file transfer, etc.
      </li>
      <li>
        <strong>Delay:</strong> Time taken for packets to reach destination. Critical for real-time apps.
      </li>
      <li>
        <strong>Jitter:</strong> Variation in packet arrival times. Important for smooth audio/video.
      </li>
      <li>
        <strong>Bandwidth:</strong> Amount of data transmitted per second. Needed for HD streaming/calls.
      </li>
    </ul>

    {/* ================= QoS Improvement ================= */}
    <h2 className="text-3xl font-bold mt-8">Techniques to Improve QoS</h2>
    <p className="leading-relaxed">
      QoS can be improved using <strong>Scheduling</strong> and <strong>Traffic Shaping</strong>.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Scheduling Techniques</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>FIFO Queuing</li>
      <li>Priority Queuing</li>
      <li>Weighted Fair Queuing</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Traffic Shaping</h3>
    <p className="leading-relaxed">
      Controls the amount and rate of traffic. The two main techniques are:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Leaky Bucket Algorithm</li>
      <li>Token Bucket Algorithm</li>
    </ul>

    {/* ================= Differences ================= */}
    <h2 className="text-3xl font-bold mt-8">
      Difference Between Token Bucket and Leaky Bucket Algorithm
    </h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Token bucket depends on tokens; leaky bucket does not.</li>
      <li>Token bucket discards tokens when full; leaky bucket discards packets.</li>
      <li>Token bucket allows bursts; leaky bucket enforces constant rate.</li>
      <li>Packets sent only when tokens exist; leaky bucket sends continuously.</li>
      <li>Leaky bucket smoothens bursty traffic; token bucket allows bursts.</li>
      <li>Finite queue output in leaky bucket vs. token counter in token bucket.</li>
    </ul>

    {/* ================= Working ================= */}
    <h2 className="text-3xl font-bold mt-8">Working of Token Bucket Algorithm</h2>
    <p className="leading-relaxed">
      The algorithm allows bursty traffic at a regulated maximum rate. Tokens accumulate
      when the host is idle and are consumed whenever packets are transmitted. If tokens
      run out, packets must wait.
    </p>

    <p className="leading-relaxed">
      The bucket is typically implemented using a counter that increments when tokens are
      generated and decrements when data is sent.
    </p>

    {/* ================= Steps ================= */}
    <h2 className="text-3xl font-bold mt-8">Steps Involved in Token Bucket Algorithm</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Step 1:</strong> A bucket with fixed capacity is defined.</li>
      <li><strong>Step 2:</strong> Tokens are added at a constant rate.</li>
      <li><strong>Step 3:</strong> When a packet arrives, availability of tokens is checked.</li>
      <li><strong>Step 4:</strong> If available, one token is consumed and packet is sent.</li>
      <li><strong>Step 5:</strong> If no tokens remain, packets are delayed or dropped.</li>
    </ul>

    {/* ================= Advantages ================= */}
    <h2 className="text-3xl font-bold mt-8">Advantages of Token Bucket</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Excess tokens are discarded, not packets.</li>
      <li>Supports bursts of high-speed data.</li>
      <li>Better traffic shaping control via token rate.</li>
      <li>Improved QoS through selective token rates.</li>
      <li>Efficient for high-speed streaming and transfers.</li>
    </ul>

    {/* ================= Disadvantages ================= */}
    <h2 className="text-3xl font-bold mt-8">Disadvantages of Token Bucket Algorithm</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Token buildup when traffic is absent.</li>
      <li>Packets may wait when tokens are unavailable.</li>
      <li>More complex to implement for multiple flows.</li>
      <li>Large bursts may cause temporary congestion.</li>
    </ul>

  </div>
);

export default Home;
