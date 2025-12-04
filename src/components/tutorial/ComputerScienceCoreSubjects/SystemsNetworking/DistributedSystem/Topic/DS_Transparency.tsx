import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Header ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Types of Transparency in Distributed System
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 17 Sep, 2025</p>

    {/* ================= Intro ================= */}
    <p className="text-lg leading-relaxed">
      In distributed systems, transparency plays a key role in hiding system complexities 
      and providing a seamless user experience. By abstracting the underlying architecture, 
      distributed systems can offer reliability, scalability, and maintainability without 
      exposing the intricacies to users or applications.
    </p>

    {/* ================= What is Transparency ================= */}
    <h2 className="text-3xl font-bold mt-8">What is Transparency?</h2>
    <p className="leading-relaxed">
      Transparency refers to hiding the implementation details of a distributed system from 
      users and applications. It allows interaction with distributed resources in a uniform 
      and predictable manner, regardless of where or how resources are located.
    </p>

    {/* ================= Importance of Transparency ================= */}
    <h2 className="text-3xl font-bold mt-8">Importance of Transparency</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Simplicity and Abstraction:</strong> Users and developers can interact with 
        complex distributed systems through simple interfaces.</li>
      <li><strong>Consistency:</strong> Ensures uniform behavior and performance across the system.</li>
      <li><strong>Ease of Maintenance:</strong> Abstracted complexity simplifies troubleshooting and debugging.</li>
      <li><strong>Scalability:</strong> Distributed components can be added or modified without affecting overall functionality.</li>
    </ul>

    {/* ================= Types of Transparency ================= */}
    <h2 className="text-3xl font-bold mt-8">Types of Transparency</h2>

    {/* ================= Location Transparency ================= */}
    <h3 className="text-2xl font-semibold mt-4">1. Location Transparency</h3>
    <p className="leading-relaxed">
      Allows resources to be accessed without knowing their physical or network locations.
      Users interact with a uniform interface regardless of where the resources reside.
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Examples: DNS mapping domain names to IPs, Virtual Machines hiding hardware details.
    </p>

    {/* ================= Access Transparency ================= */}
    <h3 className="text-2xl font-semibold mt-4">2. Access Transparency</h3>
    <p className="leading-relaxed">
      Users and applications can access resources uniformly, without concern for how they 
      are distributed across the network.
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Methods: RPC (Remote Procedure Calls), Message Queues for asynchronous communication.
    </p>

    {/* ================= Concurrency Transparency ================= */}
    <h3 className="text-2xl font-semibold mt-4">3. Concurrency Transparency</h3>
    <p className="leading-relaxed">
      Hides complexities of concurrent access to shared resources, ensuring operations do not interfere.
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Techniques: Locking mechanisms, Transaction Management (ACID properties).
    </p>

    {/* ================= Replication Transparency ================= */}
    <h3 className="text-2xl font-semibold mt-4">4. Replication Transparency</h3>
    <p className="leading-relaxed">
      Clients see replicated resources as a single resource. The system manages consistency among replicas.
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Applications: CDNs, Database Replication.
    </p>

    {/* ================= Failure Transparency ================= */}
    <h3 className="text-2xl font-semibold mt-4">5. Failure Transparency</h3>
    <p className="leading-relaxed">
      Failures in the system do not affect service availability. Mechanisms detect failures 
      and provide recovery automatically.
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Examples: Load balancers, Automatic failover, Heartbeating and redundancy.
    </p>

    {/* ================= Performance Transparency ================= */}
    <h3 className="text-2xl font-semibold mt-4">6. Performance Transparency</h3>
    <p className="leading-relaxed">
      Ensures consistent performance despite workload, network, or hardware differences.
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Strategies: Load balancing, Caching frequently accessed data closer to clients.
    </p>

    {/* ================= Security Transparency ================= */}
    <h3 className="text-2xl font-semibold mt-4">7. Security Transparency</h3>
    <p className="leading-relaxed">
      Security mechanisms are integrated seamlessly to protect data and resources.
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Techniques: Encryption, Access control, Authentication.
    </p>

    {/* ================= Management Transparency ================= */}
    <h3 className="text-2xl font-semibold mt-4">8. Management Transparency</h3>
    <p className="leading-relaxed">
      Simplifies monitoring, control, and administration of the system by providing unified 
      visibility and centralized management.
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Examples: Cloud Management Platforms, Configuration Management Tools.
    </p>

    {/* ================= Conclusion ================= */}
    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      Understanding and implementing transparency types is essential for building robust, 
      scalable, and maintainable distributed systems. They help abstract complexity, 
      optimize performance, and enhance security and user experience in distributed computing.
    </p>

  </div>
);

export default Home;
