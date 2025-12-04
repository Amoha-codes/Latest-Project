import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Header ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Centralized vs Decentralized vs Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 17 Sep, 2025</p>

    {/* ================= Intro ================= */}
    <p className="text-lg leading-relaxed">
      Understanding system architectures is key to designing efficient solutions. Centralized, 
      decentralized, and distributed systems each have distinct advantages and challenges.
      <br /><br />
      Centralized systems rely on a single control point, offering simplicity but risking failure. 
      Decentralized systems spread control across multiple nodes, improving fault tolerance. 
      Distributed systems further distribute resources to enhance performance, scalability, and reliability.
    </p>

    {/* ================= Centralized Systems ================= */}
    <h2 className="text-3xl font-bold mt-8">What are Centralized Systems?</h2>
    <p className="leading-relaxed">
      In centralized systems, all processing and data storage occur on a single server or a closely connected set of servers. 
      The central server manages operations and resources, while client nodes rely on it for most computations.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Key Characteristics</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Single Point of Control:</strong> Centralized management of data and operations.</li>
      <li><strong>Simplicity:</strong> Clear architecture and easier deployment.</li>
      <li><strong>Efficiency:</strong> Optimized resource usage and centralized security.</li>
      <li><strong>Scalability Issues:</strong> Central server can become a bottleneck.</li>
      <li><strong>Single Point of Failure:</strong> Failure of the central server affects the entire system.</li>
    </ul>

    {/* ================= Decentralized Systems ================= */}
    <h2 className="text-3xl font-bold mt-8">What are Decentralized Systems?</h2>
    <p className="leading-relaxed">
      Decentralized systems distribute control among multiple independent nodes, which collaborate to achieve common goals. 
      This design improves fault tolerance, scalability, and resilience compared to centralized systems.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Key Characteristics</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Distributed Control:</strong> No single point of failure; each node contributes independently.</li>
      <li><strong>Fault Tolerance:</strong> System continues to function if one node fails.</li>
      <li><strong>Scalability:</strong> Easy to add nodes without overwhelming a central point.</li>
      <li><strong>Coordination:</strong> Nodes communicate and coordinate to maintain consistency.</li>
      <li><strong>Autonomy and Redundancy:</strong> Nodes operate independently with replicated data for reliability.</li>
    </ul>

    {/* ================= Distributed Systems ================= */}
    <h2 className="text-3xl font-bold mt-8">What are Distributed Systems?</h2>
    <p className="leading-relaxed">
      Distributed systems consist of multiple independent nodes working together over a network, appearing as a single system to users. 
      They improve performance, reliability, scalability, and resource sharing.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Key Characteristics</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Geographical Distribution:</strong> Nodes spread across physical locations and communicate via networks.</li>
      <li><strong>Resource Sharing:</strong> Efficient use of processing power, storage, and data.</li>
      <li><strong>Concurrency:</strong> Tasks are executed in parallel across multiple nodes.</li>
      <li><strong>Scalability:</strong> System capacity grows by adding more nodes.</li>
      <li><strong>Fault Tolerance:</strong> Redundancy and replication keep the system operational despite failures.</li>
      <li><strong>Transparency:</strong> Users perceive the system as a single coherent entity.</li>
    </ul>

    {/* ================= Comparison Table ================= */}
    <h2 className="text-3xl font-bold mt-8">Comparison</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 text-left">
        <thead>
          <tr className="bg-gray-400">
            <th className="px-4 py-2">Aspect</th>
            <th className="px-4 py-2">Centralized</th>
            <th className="px-4 py-2">Decentralized</th>
            <th className="px-4 py-2">Distributed</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="px-4 py-2">Control</td>
            <td className="px-4 py-2">Single central server</td>
            <td className="px-4 py-2">Multiple independent nodes</td>
            <td className="px-4 py-2">Shared collaboration across nodes</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Single Point of Failure</td>
            <td className="px-4 py-2">High risk</td>
            <td className="px-4 py-2">Reduced risk</td>
            <td className="px-4 py-2">Reduced risk with redundancy</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Scalability</td>
            <td className="px-4 py-2">Limited</td>
            <td className="px-4 py-2">Moderate</td>
            <td className="px-4 py-2">High</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Resource Utilization</td>
            <td className="px-4 py-2">Central server</td>
            <td className="px-4 py-2">Spread across nodes</td>
            <td className="px-4 py-2">Efficient sharing</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Performance</td>
            <td className="px-4 py-2">Can degrade with load</td>
            <td className="px-4 py-2">Generally good</td>
            <td className="px-4 py-2">High with parallelism</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Management</td>
            <td className="px-4 py-2">Easier centrally</td>
            <td className="px-4 py-2">More complex</td>
            <td className="px-4 py-2">Complex coordination required</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Latency</td>
            <td className="px-4 py-2">Lower</td>
            <td className="px-4 py-2">Varies by node</td>
            <td className="px-4 py-2">Potentially higher</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* ================= Use Cases ================= */}
    <h2 className="text-3xl font-bold mt-8">Use Cases</h2>

    <h3 className="text-2xl font-semibold mt-4">Centralized Systems</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>ERP Systems: Simplified management, centralized control.</li>
      <li>CRM Systems: Consistent customer data, streamlined services.</li>
      <li>Email Servers: Centralized storage and management.</li>
      <li>Banking Systems: Centralized transaction processing and security.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Decentralized Systems</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Blockchain & Cryptocurrencies: Secure, transparent ledgers (Bitcoin, Ethereum).</li>
      <li>Peer-to-Peer File Sharing: Resilient file sharing without central server (BitTorrent).</li>
      <li>Decentralized Finance (DeFi): Lending and trading without intermediaries (Uniswap).</li>
      <li>Mesh Networks: Community Wi-Fi and disaster recovery networks.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Distributed Systems</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Cloud Computing Platforms: Scalable, on-demand resources (AWS, Azure, GCP).</li>
      <li>Content Delivery Networks (CDNs): Low latency, distributed content delivery (Cloudflare).</li>
      <li>Distributed Databases: High availability and fault tolerance (Google Spanner, Cassandra).</li>
      <li>Microservices Architectures: Loosely coupled services for scalability (Netflix, Uber).</li>
    </ul>

  </div>
);

export default Home;
