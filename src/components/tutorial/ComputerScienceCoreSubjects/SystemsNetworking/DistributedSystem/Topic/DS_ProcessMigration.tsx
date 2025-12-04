import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Process Migration ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Process Migration in Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 03 Dec, 2025</p>

    {/* Intro */}
    <p className="text-lg leading-relaxed">
      Process migration refers to transferring a running process from one node to another 
      in a distributed system. It helps improve load balancing, resource utilization, 
      performance, and fault tolerance.
    </p>

    {/* Distributed Systems */}
    <h2 className="text-3xl font-bold mt-8">What are Distributed Systems?</h2>
    <p className="leading-relaxed">
      Distributed systems consist of multiple independent computers connected through 
      a network and working together as a unified system. Key characteristics include:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Resource Sharing</li>
      <li>Scalability</li>
      <li>Fault Tolerance</li>
      <li>Concurrency</li>
      <li>Transparency</li>
    </ul>

    {/* What is Process Migration */}
    <h2 className="text-3xl font-bold mt-8">What is Process Migration?</h2>
    <p className="leading-relaxed">
      Process migration is the movement of a process’s execution state—including memory, 
      registers, and open files—from one node to another. After migration, the process 
      resumes execution seamlessly on the target node.
    </p>

    {/* Why Use Migration */}
    <h2 className="text-3xl font-bold mt-8">Why Use Process Migration?</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Dynamic load balancing</li>
      <li>Fault recovery and node failure handling</li>
      <li>System maintenance</li>
      <li>Improved data locality</li>
      <li>Device mobility across networks</li>
      <li>Performance optimization</li>
    </ul>

    {/* Key Concepts */}
    <h2 className="text-3xl font-bold mt-8">Key Concepts in Process Migration</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Process State:</strong> Memory content, registers, program counter, etc.</li>
      <li><strong>Checkpointing:</strong> Saving execution state for resuming later.</li>
      <li><strong>Migration Overhead:</strong> Cost of transferring state across nodes.</li>
      <li><strong>Consistency:</strong> Keeping process state valid after migration.</li>
      <li><strong>Transparency:</strong> Migration should be invisible to users.</li>
      <li><strong>Fault Tolerance:</strong> Ability to resume safely after failures.</li>
    </ul>

    {/* Types of Migration */}
    <h2 className="text-3xl font-bold mt-8">Types of Process Migration</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Static Migration:</strong> Entire process moved after suspension.</li>
      <li><strong>Dynamic Migration:</strong> Process migrates while running.</li>
      <li><strong>Preemptive Migration:</strong> Pauses → moves → resumes the process.</li>
      <li><strong>Non-Preemptive Migration:</strong> Migrates at natural checkpoints.</li>
      <li><strong>Incremental Migration:</strong> Transfers process state in small parts.</li>
    </ul>

    {/* Steps in Migration */}
    <h2 className="text-3xl font-bold mt-8">Steps in Process Migration</h2>
    <ol className="list-decimal ml-6 leading-relaxed space-y-2">
      <li>
        <strong>Select Process:</strong> Choose the process based on load or resource needs.
      </li>
      <li>
        <strong>Select Destination Node:</strong> Pick a node with enough resources 
        and low load.
      </li>
      <li>
        <strong>Migrate Process:</strong>
        <ul className="list-disc ml-6 mt-2">
          <li>Halting and restarting the process</li>
          <li>Transferring address space and memory</li>
          <li>Forwarding pending messages</li>
          <li>Maintaining communication with other processes</li>
        </ul>
      </li>
    </ol>

    {/* Migration Techniques */}
    <h2 className="text-3xl font-bold mt-8">Process Migration Techniques</h2>

    <h3 className="text-xl font-semibold">1. Full Process Migration</h3>
    <p className="leading-relaxed">
      Transfers the entire process state at once. Simple but high overhead.
    </p>

    <h3 className="text-xl font-semibold mt-4">2. Incremental Migration</h3>
    <p className="leading-relaxed">
      Moves state in stages to reduce performance impact.
    </p>

    <h3 className="text-xl font-semibold mt-4">3. Lazy Migration</h3>
    <p className="leading-relaxed">
      Migration occurs only at natural stopping points.
    </p>

    <h3 className="text-xl font-semibold mt-4">4. Preemptive Migration</h3>
    <p className="leading-relaxed">
      Process is paused, transferred, and resumed safely.
    </p>

    <h3 className="text-xl font-semibold mt-4">5. Non-Preemptive Migration</h3>
    <p className="leading-relaxed">
      Migration happens without interrupting execution, at checkpoints.
    </p>

    <h3 className="text-xl font-semibold mt-4">6. Snapshot-Based Migration</h3>
    <p className="leading-relaxed">
      Uses snapshots of process state for migration and restart.
    </p>

  </div>
);

export default Home;
