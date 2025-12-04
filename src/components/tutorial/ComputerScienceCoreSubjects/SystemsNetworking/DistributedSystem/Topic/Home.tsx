import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Distributed Systems Tutorial ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Distributed Systems Tutorial
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 17 Sep, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      A distributed system is a collection of independent computers that appear
      to users as a single coherent system. Instead of relying on a single
      powerful machine, tasks are divided across multiple machines that
      communicate and coordinate to achieve a common goal. Distributed systems
      provide scalability, fault tolerance, and improved performance—making them
      critical for modern large-scale applications and services.
    </p>

    {/* Section: Introduction */}
    <h2 className="text-3xl font-bold mt-8">Introduction to Distributed Systems</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Goals of Distributed Systems</li>
      <li>Types of Transparency</li>
      <li>Centralized vs Decentralized vs Distributed</li>
      <li>Loosely Coupled vs Tightly Coupled Systems</li>
      <li>Design Issues</li>
      <li>Failure Types</li>
      <li>Parallel vs Distributed Computing</li>
    </ul>

    {/* Scalability & Middleware */}
    <h2 className="text-3xl font-bold mt-8">Scalability & Middleware</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>What is a Scalable System?</li>
      <li>Role of Middleware</li>
      <li>Hardware vs Middleware</li>
      <li>What is Groupware?</li>
    </ul>

    {/* Communication */}
    <h2 className="text-3xl font-bold mt-8">Communication in Distributed Systems</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Interprocess Communication</li>
      <li>gRPC Communication</li>
      <li>Gossip Protocol</li>
      <li>Message Passing</li>
      <li>Issues in Message Passing</li>
    </ul>

    {/* RPC */}
    <h2 className="text-3xl font-bold mt-8">Remote Procedure Calls (RPC)</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>What is RPC?</li>
      <li>Transparency in RPC</li>
      <li>RPC Implementation</li>
      <li>Stub Generation</li>
      <li>Marshalling & Unmarshalling</li>
      <li>Server Management</li>
      <li>Call Semantics</li>
      <li>Communication Protocols for RPC</li>
    </ul>

    {/* Synchronization */}
    <h2 className="text-3xl font-bold mt-8">
      Synchronization in Distributed Systems
    </h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Synchronization</li>
      <li>Clock Synchronization</li>
      <li>Logical Clocks (Lamport, Vector)</li>
      <li>Event Ordering</li>
      <li>Mutual Exclusion Algorithms</li>
      <li>Cristian & Berkeley Algorithms</li>
      <li>Token-based & Non-token Based Algorithms</li>
      <li>Ricart–Agrawala Algorithm</li>
    </ul>

    {/* Resource & Process Management */}
    <h2 className="text-3xl font-bold mt-8">
      Resource & Process Management
    </h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Global Scheduling</li>
      <li>Task Assignment Approaches</li>
      <li>Load Balancing vs Load Sharing</li>
      <li>Process Management</li>
      <li>Process Migration</li>
    </ul>

    {/* DFS & Shared Memory */}
    <h2 className="text-3xl font-bold mt-8">
      Distributed File Systems & Shared Memory
    </h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>DFS Characteristics</li>
      <li>NFS Architecture</li>
      <li>Andrew File System</li>
      <li>File Models & Semantics</li>
      <li>File Caching</li>
      <li>Replication & Atomic Commit Protocols</li>
      <li>Distributed Shared Memory (DSM)</li>
      <li>Consistency Models</li>
      <li>Thrashing in DSM</li>
    </ul>

    {/* Deadlock & Scheduling */}
    <h2 className="text-3xl font-bold mt-8">
      Distributed Scheduling & Deadlock
    </h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Load Distribution Components</li>
      <li>Deadlock & Phantom Deadlock</li>
      <li>Deadlock Detection Algorithms</li>
      <li>Prevention & Recovery</li>
      <li>Chandy–Misra–Haas Algorithm</li>
    </ul>

    {/* Security */}
    <h2 className="text-3xl font-bold mt-8">Security in Distributed Systems</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Types of Cyberattacks</li>
      <li>Cryptography Basics</li>
      <li>Authentication Mechanisms</li>
      <li>Access Matrix Model</li>
      <li>Digital Signatures & Certificates</li>
      <li>Security Design Principles</li>
    </ul>

    {/* Distributed DB & Multimedia */}
    <h2 className="text-3xl font-bold mt-8">
      Distributed Multimedia & Database Systems
    </h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>What is Distributed DBMS?</li>
      <li>Advantages & Disadvantages</li>
      <li>Functions of DDBMS</li>
      <li>Homogeneous vs Heterogeneous DBs</li>
      <li>Distributed Multimedia Systems</li>
      <li>Multimedia Databases</li>
    </ul>

    {/* Distributed Algorithms */}
    <h2 className="text-3xl font-bold mt-8">Distributed Algorithms</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Destination-based Routing</li>
      <li>Deadlock-free Packet Switching</li>
      <li>Wave & Traversal Algorithms</li>
      <li>Election Algorithms (Bully, Ring)</li>
      <li>CORBA & DCOM</li>
      <li>COM Lifecycle</li>
    </ul>

    {/* Distributed Transactions */}
    <h2 className="text-3xl font-bold mt-8">Distributed Transactions</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Flat & Nested Transactions</li>
      <li>Concurrency Control</li>
      <li>Transaction Recovery</li>
      <li>Replication Mechanisms</li>
      <li>Two-Phase Commit (2PC)</li>
    </ul>

  </div>
);

export default Home;
