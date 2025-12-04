import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Clock Synchronization Title ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Clock Synchronization in Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 17 Sep, 2025</p>

    {/* ================= Introduction ================= */}
    <p className="text-lg leading-relaxed">
      In distributed computing, where multiple systems collaborate to accomplish tasks, ensuring 
      that all the clocks are synchronized plays a crucial role. Clock synchronization involves 
      aligning the clocks of computers or nodes, enabling efficient data transfer, smooth 
      communication, and coordinated task execution. This article explores the importance of clock 
      synchronization in distributed systems, discusses the challenges it addresses, and delves into 
      approaches used to achieve synchronization.
    </p>

    {/* ================= What is Clock Synchronization? ================= */}
    <h2 className="text-3xl font-bold mt-8">
      What is Clock Synchronization in Distributed Systems?
    </h2>

    <p className="leading-relaxed">
      Clock synchronization in distributed systems refers to the process of ensuring that all clocks 
      across various nodes or computers in the system are set to the same time or at least have their 
      times closely aligned.
    </p>

    <p className="leading-relaxed">
      In a distributed system, where multiple computers communicate and collaborate over a network, 
      each computer typically has its own local clock. However, due to factors such as hardware 
      differences, network delays, and clock drift (inaccuracies in timekeeping), these local clocks 
      can drift apart over time.
    </p>

    {/* ================= Importance ================= */}
    <h2 className="text-3xl font-bold mt-8">Importance of Clock Synchronization</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Consistency and Coherence:</strong> Ensures that timestamps and time-based decisions 
        across different nodes are consistent.
      </li>
      <li>
        <strong>Event Ordering:</strong> Helps maintain causality and correct ordering of distributed events.
      </li>
      <li>
        <strong>Data Integrity and Conflict Resolution:</strong> In distributed databases, accurate 
        timestamps help resolve concurrent write conflicts.
      </li>
      <li>
        <strong>Fault Detection and Recovery:</strong> Synchronized timestamps help track event 
        sequences that caused failures.
      </li>
      <li>
        <strong>Security and Authentication:</strong> Many cryptographic protocols depend on 
        trustworthy timestamps.
      </li>
    </ul>

    {/* ================= Bridging Time Gaps ================= */}
    <h2 className="text-3xl font-bold mt-8">Bridging Time Gaps</h2>

    <p className="leading-relaxed">
      Clock synchronization in distributed systems aims to establish a reference for time across 
      nodes. Imagine a scenario where three distinct systems are part of a distributed environment. 
      For coordinated operations, these systems must have a shared understanding of time.
    </p>

    <p className="leading-relaxed">
      Achieving clock synchronization ensures that data flows seamlessly between them, tasks are 
      executed coherently, and communication happens without any ambiguity.
    </p>

    {/* ================= Types of Clock Synchronization ================= */}
    <h2 className="text-3xl font-bold mt-8">
      Types of Clock Synchronization in Distributed Systems
    </h2>

    {/* --- Physical Clock Synchronization --- */}
    <h3 className="text-2xl font-semibold mt-4">1. Physical Clock Synchronization</h3>
    <p className="leading-relaxed">
      In distributed systems each node operates with its own clock, which can lead to time differences. 
      Physical clock synchronization overcomes this by aligning each node’s clock to Universal 
      Coordinated Time (UTC).
    </p>

    <p className="leading-relaxed">
      <strong>Addressing Time Disparities:</strong> Local clocks may vary, and synchronization 
      minimizes these gaps.
    </p>

    <p className="leading-relaxed">
      <strong>Using UTC:</strong> All nodes align their clocks to the standard global reference UTC.
    </p>

    {/* --- Logical Clock Synchronization --- */}
    <h3 className="text-2xl font-semibold mt-4">2. Logical Clock Synchronization</h3>
    <p className="leading-relaxed">
      In distributed systems, logical clocks focus on the order of events rather than exact time. 
      Logical clocks tell “stories” of events and maintain cause-effect relationships.
    </p>

    <p className="leading-relaxed">
      <strong>Event Order Over Absolute Time:</strong> Logical clocks sequence events logically rather 
      than depending on real-world timestamps.
    </p>

    <p className="leading-relaxed">
      <strong>Understanding Behavior:</strong> Logical clocks help build consistent system behavior 
      through event ordering.
    </p>

    {/* --- Mutual Exclusion Synchronization --- */}
    <h3 className="text-2xl font-semibold mt-4">3. Mutual Exclusion Synchronization</h3>
    <p className="leading-relaxed">
      Distributed systems often have multiple processes competing for shared resources. Mutual 
      exclusion ensures processes access resources one at a time.
    </p>

    <p className="leading-relaxed">
      <strong>Managing Resource Conflicts:</strong> Prevents simultaneous access and collisions.
    </p>

    <p className="leading-relaxed">
      <strong>Sequential Access:</strong> Ensures orderly, conflict-free usage of resources.
    </p>

    {/* ================= Techniques ================= */}
    <h2 className="text-3xl font-bold mt-8">
      Techniques of Clock Synchronization in Distributed Systems
    </h2>

    {/* --- NTP --- */}
    <h3 className="text-2xl font-semibold mt-4">1. Network Time Protocol (NTP)</h3>
    <p className="leading-relaxed">
      NTP is one of the oldest and most widely used protocols for synchronizing clocks across 
      networks.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Client-Server Model:</strong> Clients query time from servers.</li>
      <li><strong>Stratum Levels:</strong> Lower stratum = higher accuracy.</li>
      <li><strong>Timestamp Comparison:</strong> Calculates offset and adjusts slowly.</li>
    </ul>

    <p className="leading-relaxed">
      Used in infrastructure, servers, and general computing.
    </p>

    {/* --- PTP --- */}
    <h3 className="text-2xl font-semibold mt-4">2. Precision Time Protocol (PTP)</h3>
    <p className="leading-relaxed">
      PTP provides extremely high precision, used in telecom, finance, automation, and research.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Master-Slave Architecture</strong></li>
      <li><strong>Hardware Timestamping</strong></li>
      <li><strong>Sync & Delay Messages</strong></li>
    </ul>

    {/* --- Berkeley Algorithm --- */}
    <h3 className="text-2xl font-semibold mt-4">3. Berkeley Algorithm</h3>
    <p className="leading-relaxed">
      A decentralized method that synchronizes clocks without a central server.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Coordinator collects time from all nodes.</li>
      <li>Calculates average and adjusts clocks.</li>
      <li>Handles drift through periodic updates.</li>
    </ul>

    {/* ================= Real-World Examples ================= */}
    <h2 className="text-3xl font-bold mt-8">
      Real-World Examples of Clock Synchronization
    </h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>NTP for Internet systems</strong></li>
      <li><strong>Financial Trading Systems</strong> – precise timestamps for fairness.</li>
      <li><strong>Distributed Databases</strong> – for consistency and conflict resolution.</li>
      <li><strong>Cloud Computing</strong> – synchronizing across data centers.</li>
      <li><strong>Industrial Control Systems</strong> – uses PTP for accuracy.</li>
    </ul>

    {/* ================= Challenges ================= */}
    <h2 className="text-3xl font-bold mt-8">
      Challenges of Clock Synchronization in Distributed Systems
    </h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Information Dispersion:</strong> Data resides in many nodes.</li>
      <li><strong>Local Decision Realm:</strong> Each node makes decisions with limited data.</li>
      <li><strong>Mitigating Failures:</strong> One node’s failure can disrupt synchronization.</li>
      <li><strong>Temporal Uncertainty:</strong> Different clocks drift at different rates.</li>
    </ul>

  </div>
);

export default Home;
