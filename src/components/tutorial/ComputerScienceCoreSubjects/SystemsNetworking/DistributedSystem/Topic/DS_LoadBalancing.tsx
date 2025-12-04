import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Load Balancing Approach ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Load Balancing Approach in Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 03 Dec, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Load balancing is the process of distributing workloads across multiple servers or nodes 
      in a distributed system. A load balancer ensures efficient resource utilization, reduces 
      response time, and improves system reliability and availability.
    </p>

    {/* Purpose of Load Balancing */}
    <h2 className="text-3xl font-bold mt-8">1. Purpose of Load Balancing</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Security:</strong> Protects applications using authentication, Web Application Firewall (WAF), and DDoS prevention.</li>
      <li><strong>Performance:</strong> Reduces server load, optimizes traffic, and improves user experience.</li>
      <li><strong>SSL Offload:</strong> Handles SSL processing at the load balancer to free server resources.</li>
      <li><strong>Traffic Compression:</strong> Compresses traffic to speed up data transfer and improve responsiveness.</li>
    </ul>

    {/* Load Balancing Approaches */}
    <h2 className="text-3xl font-bold mt-8">2. Load Balancing Approaches</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Round Robin – Assigns tasks in cyclic order.</li>
      <li>Least Connections – Assigns tasks to the server with the fewest active connections.</li>
      <li>Least Time – Chooses the server with the minimum response time.</li>
      <li>Hash – Distributes load based on a hash of the task or request.</li>
      <li>IP Hash – Maps client IPs to specific servers for consistent routing.</li>
    </ul>

    {/* Classes of Load Balancing Algorithms */}
    <h2 className="text-3xl font-bold mt-8">3. Classes of Load Balancing Algorithms</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Static:</strong> Assigns tasks without considering current system load.</li>
      <li><strong>Dynamic:</strong> Uses real-time system status to make load assignment decisions.</li>
      <li><strong>Deterministic:</strong> Allocates tasks based on processor and cycle characteristics.</li>
      <li><strong>Centralized:</strong> A single node collects system-wide information and makes decisions.</li>
    </ul>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-8">4. Advantages of Load Balancing</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Minimizes server response time and maximizes throughput.</li>
      <li>Ensures high availability and reliability by directing traffic only to online servers.</li>
      <li>Performs continuous health checks to monitor server capabilities.</li>
    </ul>

    {/* Migration in Distributed Systems */}
    <h2 className="text-3xl font-bold mt-8">5. Process Migration</h2>
    <p className="leading-relaxed">
      Process migration involves moving a running process from one node to another. It helps 
      in load balancing, fault tolerance, and resource optimization. The system must decide 
      how often a process can migrate to avoid excessive overhead.
    </p>

    {/* Migration Models */}
    <h2 className="text-3xl font-bold mt-8">6. Migration Models</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Code Section:</strong> Moves only the program code.</li>
      <li><strong>Resource Section:</strong> References external resources required by the process.</li>
      <li><strong>Execution Section:</strong> Contains runtime state including stack, program counter, and private data.</li>
    </ul>

    <p className="leading-relaxed">
      <strong>Weak Migration:</strong> Transfers only the code section.<br />
      <strong>Strong Migration:</strong> Transfers both the code and execution sections. Migration can be initiated by the source node.
    </p>

    {/* Conclusion */}
    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      Load balancing and process migration are essential techniques in distributed systems 
      to ensure efficient resource utilization, high availability, and improved performance. 
      Different algorithms and models are applied based on system requirements and constraints.
    </p>

  </div>
);

export default Home;
