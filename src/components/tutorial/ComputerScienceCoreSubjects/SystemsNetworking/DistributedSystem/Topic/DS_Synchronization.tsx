import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Synchronization in Distributed Systems ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Synchronization in Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 12 Jul, 2025</p>

    <p className="text-lg leading-relaxed">
      Synchronization in distributed systems is crucial for ensuring consistency, coordination,
      and cooperation among distributed components. It addresses the challenges of maintaining
      data consistency, managing concurrent processes, and achieving coherent system behavior
      across different nodes in a network. By implementing effective synchronization mechanisms,
      distributed systems can operate seamlessly, prevent data conflicts, and provide reliable
      and efficient services.
    </p>

    <h2 className="text-3xl font-bold mt-8">Important Topics for Synchronization in Distributed Systems</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Importance of Synchronization in Distributed Systems</li>
      <li>Challenges in Synchronizing Distributed Systems</li>
      <li>Types of Synchronization</li>
      <li>Synchronization Techniques</li>
      <li>Coordination Mechanisms in Distributed Systems</li>
      <li>Time Synchronization in Distributed Systems</li>
      <li>Real-World Examples of Synchronization in Distributed Systems</li>
      <li>FAQs for Synchronization in Distributed Systems</li>
    </ul>

    {/* ================= Importance ================= */}
    <h2 className="text-3xl font-bold mt-8">Importance of Synchronization in Distributed Systems</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Data Integrity: Ensures that data remains consistent across all nodes.</li>
      <li>State Synchronization: Maintains coherent states across distributed components.</li>
      <li>Task Coordination: Helps coordinate operations among distributed nodes.</li>
      <li>Resource Management: Prevents conflicts during shared resource access.</li>
      <li>Redundancy Management: Keeps redundant systems synchronized for reliability.</li>
      <li>Recovery Mechanisms: Enables accurate recovery using synchronized states.</li>
      <li>Efficient Utilization: Minimizes redundant operations.</li>
      <li>Load Balancing: Ensures workload distribution across nodes.</li>
      <li>Deadlock Prevention: Prevents indefinite waiting for resources.</li>
      <li>Scalable Operations: Supports growth across many nodes.</li>
    </ul>

    {/* ================= Challenges ================= */}
    <h2 className="text-3xl font-bold mt-8">Challenges in Synchronizing Distributed Systems</h2>

    <h3 className="text-2xl font-semibold mt-4">Network Latency and Partitioning</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Latency: Causes inconsistent states and delays.</li>
      <li>Partitioning: Isolated nodes cannot be synchronized easily.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Scalability</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Large number of nodes increases synchronization complexity.</li>
      <li>Load balancing becomes challenging.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Fault Tolerance</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Node failures complicate synchronized recovery.</li>
      <li>Maintaining data integrity during recovery is difficult.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Concurrency Control</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Simultaneous updates can conflict.</li>
      <li>Deadlocks may occur.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Data Consistency</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Strong consistency requires heavy resources.</li>
      <li>Eventual consistency becomes hard with high writes.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Time Synchronization</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Clock drift affects synchronization.</li>
      <li>Network delays reduce accuracy.</li>
    </ul>

    {/* ================= Types of Synchronization ================= */}
    <h2 className="text-3xl font-bold mt-8">Types of Synchronization</h2>

    {/* Time Sync */}
    <h3 className="text-2xl font-semibold mt-4">1. Time Synchronization</h3>
    <p className="leading-relaxed">
      Time synchronization ensures all nodes have a consistent view of time for event ordering,
      consistency, logging, and debugging.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>NTP:</strong> Synchronizes clocks over a network.</li>
      <li><strong>PTP:</strong> Provides microsecond-level precision.</li>
      <li><strong>Logical Clocks:</strong> Orders events without physical time.</li>
    </ul>

    {/* Data Sync */}
    <h3 className="text-2xl font-semibold mt-4">2. Data Synchronization</h3>
    <p className="leading-relaxed">
      Maintains consistent copies of data across distributed nodes.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Replication</strong></li>
      <li><strong>Consensus Algorithms</strong> (Paxos, Raft)</li>
      <li><strong>Eventual Consistency</strong> (DynamoDB)</li>
    </ul>

    {/* Process Sync */}
    <h3 className="text-2xl font-semibold mt-4">3. Process Synchronization</h3>
    <p className="leading-relaxed">
      Coordinates the execution of processes across distributed nodes.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Mutual Exclusion (locks, semaphores)</li>
      <li>Barriers</li>
      <li>Condition Variables</li>
    </ul>

    {/* ================= Synchronization Techniques ================= */}
    <h2 className="text-3xl font-bold mt-8">Synchronization Techniques</h2>

    <h3 className="text-xl font-semibold mt-4">1. Time Synchronization Techniques</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>NTP</li>
      <li>PTP</li>
      <li>Logical Clocks</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">2. Data Synchronization Techniques</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Replication</li>
      <li>Consensus Algorithms (Paxos, Raft)</li>
      <li>Eventual Consistency</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">3. Process Synchronization Techniques</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Mutual Exclusion</li>
      <li>Barriers</li>
      <li>Condition Variables</li>
    </ul>

    {/* ================= Coordination Mechanisms ================= */}
    <h2 className="text-3xl font-bold mt-8">Coordination Mechanisms in Distributed Systems</h2>

    <h3 className="text-xl font-semibold mt-4">1. Locking Mechanisms</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Mutexes</li>
      <li>Read/Write Locks</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">2. Semaphores</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Counting Semaphores</li>
      <li>Binary Semaphores</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">3. Barriers</h3>
    <p>Ensures all processes reach a point before proceeding.</p>

    <h3 className="text-xl font-semibold mt-4">4. Leader Election</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Bully Algorithm</li>
      <li>Raft Algorithm</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">5. Distributed Transactions</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Two-Phase Commit (2PC)</li>
      <li>Three-Phase Commit (3PC)</li>
    </ul>

    {/* ================= Time Sync ================= */}
    <h2 className="text-3xl font-bold mt-8">Time Synchronization in Distributed Systems</h2>

    <h3 className="text-xl font-semibold mt-4">Importance</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Event Ordering</li>
      <li>Coordination</li>
      <li>Logging and Debugging</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">Challenges</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Clock Drift</li>
      <li>Network Latency</li>
      <li>Fault Tolerance</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">Techniques</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>NTP</li>
      <li>PTP</li>
      <li>Berkeley Algorithm</li>
    </ul>

    {/* ================= Real World Examples ================= */}
    <h2 className="text-3xl font-bold mt-8">Real-World Examples of Synchronization in Distributed Systems</h2>

    <h3 className="text-xl font-semibold mt-4">1. Google Spanner</h3>
    <p className="leading-relaxed">
      Uses TrueTime, combining GPS and atomic clocks, to maintain global consistency.
    </p>

    <h3 className="text-xl font-semibold mt-4">2. Financial Trading Systems</h3>
    <p className="leading-relaxed">
      Require microsecond-level timestamp accuracy using PTP.
    </p>

    <h3 className="text-xl font-semibold mt-4">3. Telecommunications Networks</h3>
    <p className="leading-relaxed">
      Precise synchronization ensures smooth handoff between cell towers.
    </p>

  </div>
);

export default Home;
