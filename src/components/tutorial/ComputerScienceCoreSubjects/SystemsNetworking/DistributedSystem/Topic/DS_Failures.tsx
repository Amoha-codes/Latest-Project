import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Header ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Various Failures in Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Nov, 2022</p>

    {/* ================= Intro ================= */}
    <p className="text-lg leading-relaxed">
      Distributed Shared Memory (DSM) systems allow multiple nodes to share a virtual address space 
      without physically shared memory. While this simplifies programming, distributed systems 
      are prone to various types of failures that must be understood for robust system design.
    </p>

    {/* ================= Method Failure ================= */}
    <h2 className="text-3xl font-bold mt-8">1. Method Failure</h2>
    <p className="leading-relaxed">
      A method failure occurs when a specific process or operation halts unexpectedly, producing 
      incorrect or incomplete results.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Behavior:</strong> Computation stops due to issues like protection violations, deadlocks, timeouts, or invalid user input.</li>
      <li><strong>Recovery:</strong> Abort or restart the method from a previous safe state to continue execution.</li>
    </ul>

    {/* ================= System Failure ================= */}
    <h2 className="text-3xl font-bold mt-8">2. System Failure</h2>
    <p className="leading-relaxed">
      A system failure happens when the processor or hardware in the distributed system stops functioning, often due to software or hardware faults.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Behavior:</strong> System may freeze, reboot, or become idle without performing tasks.</li>
      <li><strong>Recovery:</strong> Reboot the system and restore the correct state to resume operation.</li>
    </ul>

    {/* ================= Secondary Storage Failure ================= */}
    <h2 className="text-3xl font-bold mt-8">3. Secondary Storage Device Failure</h2>
    <p className="leading-relaxed">
      This occurs when stored data cannot be accessed, often caused by parity errors, head crashes, or contamination.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Behavior:</strong> Data becomes inaccessible.</li>
      <li><strong>Errors:</strong> Parity errors, head crashes, disk contamination.</li>
      <li><strong>Recovery/Design Strategies:</strong> Restore data from backups, logs, or use fault-tolerant disk designs.</li>
    </ul>

    {/* ================= Communication Medium Failure ================= */}
    <h2 className="text-3xl font-bold mt-8">4. Communication Medium Failure</h2>
    <p className="leading-relaxed">
      Occurs when a node cannot communicate with other operational nodes due to network link or switch failures.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Behavior:</strong> Node cannot exchange data with other nodes.</li>
      <li><strong>Errors/Faults:</strong> Failure of switches or communication links.</li>
      <li><strong>Recovery/Strategies:</strong> Reroute communication, use error-resistant protocols.</li>
    </ul>

    {/* ================= Failure Models ================= */}
    <h2 className="text-3xl font-bold mt-8">Failure Models</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Timing Failure:</strong> Node responds too early or too late, also called performance failure.</li>
      <li><strong>Response Failure:</strong> Node sends incorrect values or responds using incorrect control flow.</li>
      <li><strong>Omission Failure:</strong> Node fails to send a response entirely.</li>
      <li><strong>Crash Failure:</strong> Node stops responding completely after an omission failure.</li>
      <li><strong>Arbitrary (Byzantine) Failure:</strong> Node produces arbitrary or unpredictable responses at any time.</li>
    </ul>

    {/* ================= Conclusion ================= */}
    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      Understanding these failures is essential for designing robust distributed systems. 
      Recovery strategies like replication, backups, error-resistant protocols, and consensus mechanisms 
      help ensure system reliability and maintain performance even in the presence of faults.
    </p>

  </div>
);

export default Home;
