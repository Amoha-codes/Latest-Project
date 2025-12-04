import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Title ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Scalable Systems in Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 17 Sep, 2025</p>

    {/* Intro Section */}
    <section>
      <p className="text-lg leading-relaxed">
        In distributed systems, a <strong>scalable system</strong> refers to the ability of a networked 
        architecture to handle increasing workloads or expand to accommodate growth without 
        compromising performance or reliability. Scalability ensures that as demand grows—whether 
        in terms of user load, data volume, or transaction rate—the system can efficiently adapt by 
        adding resources or nodes.
      </p>
    </section>

    {/* What is Scalability */}
    <section>
      <h2 className="text-3xl font-bold mt-6">What is Scalability?</h2>
      <p className="leading-relaxed">
        Scalability refers to the ability of a system, network, or application to handle a growing 
        amount of work or to be easily expanded to accommodate growth. It is crucial in distributed 
        systems to maintain performance, reliability, and efficiency as demand increases.
      </p>
    </section>

    {/* Importance */}
    <section>
      <h2 className="text-3xl font-bold mt-6">Importance of Scalability</h2>
      <ul className="list-disc ml-6 leading-relaxed space-y-1">
        <li><strong>Performance Maintenance:</strong> Ensures responsiveness even with increasing workload.</li>
        <li><strong>Cost Efficiency:</strong> Allows incremental growth without over-provisioning.</li>
        <li><strong>Future-Proofing:</strong> Supports future growth and technological changes without major redesigns.</li>
      </ul>
    </section>

    {/* Types of Scalability */}
    <section>
      <h2 className="text-3xl font-bold mt-6">Types of Scalability</h2>

      <h3 className="text-2xl font-semibold mt-4">1. Horizontal Scalability (Scaling Out)</h3>
      <p className="leading-relaxed">
        Involves adding more machines or nodes to handle increased load. Each new node adds resources 
        such as CPU, memory, and storage. Workload is distributed across all nodes, often via 
        load balancing.
      </p>
      <p className="leading-relaxed font-semibold">
        Examples: Web servers in cloud environments, distributed databases.
      </p>

      <h3 className="text-2xl font-semibold mt-4">2. Vertical Scalability (Scaling Up)</h3>
      <p className="leading-relaxed">
        Involves upgrading the hardware of a single machine to add more CPU, memory, or storage. Focuses 
        on improving a single node's capacity rather than adding more nodes.
      </p>
      <p className="leading-relaxed font-semibold">
        Examples: Upgrading database or application servers to handle higher demand.
      </p>
    </section>

    {/* Metrics */}
    <section>
      <h2 className="text-3xl font-bold mt-6">Metrics for Measuring Scalability</h2>
      <ul className="list-disc ml-6 leading-relaxed space-y-1">
        <li><strong>Throughput:</strong> Operations handled per unit of time.</li>
        <li><strong>Latency:</strong> Time to process a single request.</li>
        <li><strong>Load:</strong> Active users or data volume.</li>
        <li><strong>Resource Utilization:</strong> Efficiency of CPU, memory, etc.</li>
        <li><strong>Scalability Ratio:</strong> Performance increase relative to resources added.</li>
        <li><strong>Fault Tolerance & Recovery:</strong> Ability to handle failures quickly.</li>
        <li><strong>Consistency & Availability:</strong> Ensuring data consistency and system availability.</li>
      </ul>
    </section>

    {/* Architectural Patterns */}
    <section>
      <h2 className="text-3xl font-bold mt-6">Architectural Patterns</h2>

      <h3 className="text-2xl font-semibold mt-4">1. Client-Server Architecture</h3>
      <ul className="list-disc ml-6 leading-relaxed space-y-1">
        <li><strong>Centralized Management:</strong> Servers handle resources while clients request services.</li>
        <li><strong>Scaling:</strong> Upgrade server hardware or increase number of clients.</li>
        <li><strong>Challenges:</strong> Single point of failure, load bottlenecks.</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-4">2. Microservices Architecture</h3>
      <ul className="list-disc ml-6 leading-relaxed space-y-1">
        <li><strong>Modularity:</strong> Services focus on specific functions.</li>
        <li><strong>Scaling:</strong> Individual services scaled independently.</li>
        <li><strong>Challenges:</strong> Complexity, inter-service communication.</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-4">3. Peer-to-Peer Architecture</h3>
      <ul className="list-disc ml-6 leading-relaxed space-y-1">
        <li><strong>Decentralization:</strong> Each node shares resources directly.</li>
        <li><strong>Scaling:</strong> Distributed load, self-healing.</li>
        <li><strong>Challenges:</strong> Data consistency, security.</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-4">4. Event-Driven Architecture</h3>
      <ul className="list-disc ml-6 leading-relaxed space-y-1">
        <li><strong>Asynchronous Communication:</strong> Components respond independently to events.</li>
        <li><strong>Scaling:</strong> Event streaming, scalable event processing.</li>
        <li><strong>Challenges:</strong> Event ordering and management complexity.</li>
      </ul>
    </section>

    {/* Key Concepts */}
    <section>
      <h2 className="text-3xl font-bold mt-6">Key Concepts</h2>
      <ul className="list-disc ml-6 leading-relaxed space-y-1">
        <li><strong>Load Balancing:</strong> Distribute traffic evenly to prevent bottlenecks.</li>
        <li><strong>Data Partitioning:</strong> Divide large datasets into smaller shards.</li>
        <li><strong>Replication:</strong> Maintain copies of data for fault tolerance and load distribution.</li>
        <li><strong>Consistency & Availability:</strong> CAP theorem trade-offs.</li>
        <li><strong>Fault Tolerance & Redundancy:</strong> System remains operational despite failures.</li>
      </ul>
    </section>

    {/* Principles */}
    <section>
      <h2 className="text-3xl font-bold mt-6">Principles of Scalable System Design</h2>
      <ul className="list-disc ml-6 leading-relaxed space-y-1">
        <li><strong>Modularity:</strong> Break system into independent components or services.</li>
        <li><strong>Loose Coupling:</strong> Components interact via well-defined APIs.</li>
        <li><strong>Horizontal Scaling:</strong> Add more instances instead of upgrading single nodes.</li>
        <li><strong>Fault Tolerance:</strong> Redundancy, failover mechanisms, and health monitoring.</li>
        <li><strong>Load Distribution:</strong> Distribute workload evenly across resources.</li>
        <li><strong>Decentralization:</strong> Avoid single points of failure.</li>
        <li><strong>Asynchronous Processing:</strong> Non-blocking operations for better responsiveness.</li>
      </ul>
    </section>

  </div>
);

export default Home;
