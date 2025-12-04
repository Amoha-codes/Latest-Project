import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Lamport's Algorithm ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Lamport's Algorithm for Mutual Exclusion in Distributed System
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 Jul, 2025</p>

    {/* INTRO */}
    <p className="text-lg leading-relaxed">
      Lamport's Distributed Mutual Exclusion Algorithm is a <strong>permission-based</strong> 
      algorithm that uses <strong>timestamps</strong> to order requests for entering the critical 
      section. Requests with smaller timestamps are given higher priority, ensuring fairness in 
      distributed mutual exclusion.
    </p>

    <p className="leading-relaxed">
      The algorithm uses <strong>three types of messages</strong>: REQUEST, REPLY, and RELEASE. 
      All communication channels follow FIFO order. Each site maintains a queue of critical 
      section requests ordered by their timestamps.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Each site sends a <strong>REQUEST</strong> message to all other sites when it wants to enter the critical section.</li>
      <li>Each receiving site sends a <strong>REPLY</strong> message back as permission.</li>
      <li>After exiting the critical section, a site broadcasts a <strong>RELEASE</strong> message.</li>
    </ul>

    <p className="leading-relaxed">
      Every site <strong>Si</strong> maintains <strong>request_queueᵢ</strong>, which stores critical section 
      requests sorted by timestamps (Lamport logical clocks).
    </p>

    {/* Algorithm */}
    <h2 className="text-3xl font-bold mt-8">Algorithm Steps</h2>

    <h3 className="text-2xl font-semibold mt-4">1. To Enter the Critical Section</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        When site Si wants to enter, it sends <strong>REQUEST(tsᵢ, i)</strong> to all sites and adds its request to <strong>request_queueᵢ</strong>.
      </li>
      <li>
        When site Sj receives REQUEST(tsᵢ, i), it sends a timestamped <strong>REPLY</strong> and places Si's request in <strong>request_queueⱼ</strong>.
      </li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">2. To Execute the Critical Section</h3>
    <p className="leading-relaxed">
      A site Si can enter the critical section if:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        It has received REPLY messages from all sites with timestamps greater than (tsᵢ, i)
      </li>
      <li>
        Its request is at the <strong>top</strong> of <strong>request_queueᵢ</strong>.
      </li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">3. To Release the Critical Section</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Site Si removes its request from the top of its queue.</li>
      <li>It sends a timestamped <strong>RELEASE</strong> message to all other sites.</li>
      <li>
        Each site Sj removes Si’s request from <strong>request_queueⱼ</strong>.
      </li>
    </ul>

    {/* Message Complexity */}
    <h2 className="text-3xl font-bold mt-8">Message Complexity</h2>
    <p className="leading-relaxed">
      Lamport’s Algorithm requires <strong>3(N − 1)</strong> messages per critical-section request:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>(N − 1) REQUEST messages</li>
      <li>(N − 1) REPLY messages</li>
      <li>(N − 1) RELEASE messages</li>
    </ul>

    {/* Drawbacks */}
    <h2 className="text-3xl font-bold mt-8">Drawbacks of Lamport's Algorithm</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Unreliable: failure of any single process halts the entire system.</li>
      <li>High message complexity (3(N − 1) messages).</li>
      <li>Execution delay due to waiting for all replies.</li>
      <li>No fault tolerance.</li>
    </ul>

    {/* Performance */}
    <h2 className="text-3xl font-bold mt-8">Performance</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Synchronization delay equals maximum message transmission time.</li>
      <li>3(N − 1) messages required per critical section entry.</li>
      <li>Possible optimization to 2(N − 1) messages in some conditions.</li>
    </ul>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Simple and easy to implement.</li>
      <li>Provides fairness via total ordering of requests.</li>
      <li>Scalable and adaptable to different architectures.</li>
      <li>Works across multiple network topologies.</li>
    </ul>

    {/* Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Disadvantages</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>High message overhead.</li>
      <li>Delayed execution in busy networks.</li>
      <li>Not efficient for large distributed systems.</li>
      <li>Lack of fault-tolerance; a single crash stops progress.</li>
    </ul>

    {/* FAQs */}
    <h2 className="text-3xl font-bold mt-8">FAQs</h2>

    <h3 className="text-xl font-semibold mt-4">
      1. How does Lamport's algorithm ensure mutual exclusion?
    </h3>
    <p className="leading-relaxed">
      It uses timestamps to totally order all critical-section requests. A process enters the 
      critical section only when:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Its request is at the top of every queue</li>
      <li>It receives REPLY messages from all other processes</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">
      2. What is the message complexity?
    </h3>
    <p className="leading-relaxed">
      Message complexity is <strong>3(N − 1)</strong>, including REQUEST, REPLY, and RELEASE messages.
    </p>

    <h3 className="text-xl font-semibold mt-4">
      3. Is Lamport’s algorithm fault-tolerant?
    </h3>
    <p className="leading-relaxed">
      No. The algorithm does not tolerate process failures. A single crashed process can halt 
      the entire system.
    </p>

  </div>
);

export default Home;
