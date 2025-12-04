import React from 'react';

const RicartAgrawala: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Title ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Ricart–Agrawala Algorithm in Mutual Exclusion
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 Jul, 2025</p>

    {/* Introduction */}
    <p className="text-lg leading-relaxed">
      The <strong>Ricart–Agrawala algorithm</strong> is a mutual exclusion algorithm for distributed systems, proposed by Glenn Ricart and Ashok Agrawala. 
      It is an optimization of Lamport's Distributed Mutual Exclusion Algorithm, using a permission-based approach to ensure that only one site can enter the Critical Section at a time.
    </p>

    {/* Key Concepts */}
    <h2 className="text-3xl font-bold mt-8">Key Concepts</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Two types of messages are used: <strong>REQUEST</strong> and <strong>REPLY</strong>. Communication channels follow FIFO order.</li>
      <li>A site sends a REQUEST message to all other sites to obtain permission to enter the Critical Section.</li>
      <li>A site sends a REPLY message to grant permission to another site.</li>
      <li>Each request is timestamped using <strong>Lamport’s logical clock</strong> to determine priority. Smaller timestamps have higher priority.</li>
      <li>Critical Section requests are executed in the order of their timestamps.</li>
    </ul>

    {/* Algorithm Steps */}
    <h2 className="text-3xl font-bold mt-8">Algorithm Steps</h2>

    <h3 className="text-xl font-semibold mt-4">To Enter Critical Section:</h3>
    <p className="leading-relaxed">
      When a site <strong>Si</strong> wants to enter the Critical Section, it sends a timestamped REQUEST message to all other sites.
    </p>
    <p className="leading-relaxed">
      When a site <strong>Sj</strong> receives a REQUEST from <strong>Si</strong>, it sends a REPLY if and only if:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Sj is neither requesting nor executing the Critical Section.</li>
      <li>If Sj is requesting, Si's timestamp is smaller than Sj's timestamp.</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">To Execute Critical Section:</h3>
    <p className="leading-relaxed">
      Site <strong>Si</strong> enters the Critical Section after receiving REPLY messages from all other sites.
    </p>

    <h3 className="text-xl font-semibold mt-4">To Release Critical Section:</h3>
    <p className="leading-relaxed">
      Upon exiting, site <strong>Si</strong> sends REPLY messages to all deferred requests.
    </p>

    {/* Message Complexity */}
    <h2 className="text-3xl font-bold mt-8">Message Complexity</h2>
    <p className="leading-relaxed">
      Ricart–Agrawala requires <strong>2(N-1)</strong> messages per Critical Section execution:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>(N-1) REQUEST messages</li>
      <li>(N-1) REPLY messages</li>
    </ul>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Low message complexity: only (N-1) messages to enter the Critical Section.</li>
      <li>Scalable: works well in systems with many nodes.</li>
      <li>Non-blocking: a node can continue other operations while waiting for permission.</li>
    </ul>

    {/* Drawbacks */}
    <h2 className="text-3xl font-bold mt-8">Drawbacks</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Unreliable: failure of any single node can halt the system, causing starvation.</li>
      <li>Synchronization delay is equal to the maximum message transmission time.</li>
    </ul>

    {/* Performance */}
    <h2 className="text-3xl font-bold mt-8">Performance</h2>
    <p className="leading-relaxed">
      The algorithm requires <strong>2(N-1)</strong> messages per Critical Section execution, involving both REQUEST and REPLY messages. 
      Synchronization delay is determined by the maximum message transmission time in the network.
    </p>

  </div>
);

export default RicartAgrawala;
