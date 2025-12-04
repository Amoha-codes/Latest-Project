import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Load Balancing vs Load Sharing ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Difference Between Load Balancing and Load Sharing in Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 03 Dec, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      A distributed system consists of multiple interconnected nodes that work together to execute 
      tasks efficiently. Load balancing and load sharing are two strategies for managing workloads, 
      each serving distinct purposes in optimizing resource usage and task execution.
    </p>

    {/* What is Load Balancing */}
    <h2 className="text-3xl font-bold mt-8">1. What is Load Balancing?</h2>
    <p className="leading-relaxed">
      Load balancing evenly distributes incoming network traffic or computational tasks across multiple 
      servers or nodes. Its goal is to optimize resource utilization, maximize throughput, minimize 
      response time, and prevent any single resource from becoming overloaded.
    </p>

    {/* What is Load Sharing */}
    <h2 className="text-3xl font-bold mt-8">2. What is Load Sharing?</h2>
    <p className="leading-relaxed">
      Load sharing involves distributing computational tasks among multiple nodes for collaborative execution. 
      Unlike load balancing, which focuses on resource allocation, load sharing emphasizes parallel task execution 
      and coordination to improve performance and scalability.
    </p>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">3. Load Balancing vs Load Sharing</h2>
    <table className="table-auto border border-gray-300 w-full text-left">
      <thead>
        <tr className="bg-gray-400">
          <th className="px-4 py-2 border">Aspect</th>
          <th className="px-4 py-2 border">Load Balancing</th>
          <th className="px-4 py-2 border">Load Sharing</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-4 py-2 border">Definition</td>
          <td className="px-4 py-2 border">Distributes tasks evenly to optimize resources and performance.</td>
          <td className="px-4 py-2 border">Distributes tasks for parallel execution among nodes.</td>
        </tr>
        <tr className="bg-gray-50">
          <td className="px-4 py-2 border">Objective</td>
          <td className="px-4 py-2 border">Maximize throughput, minimize response time, prevent overload.</td>
          <td className="px-4 py-2 border">Enhance parallelism, scalability, and collaborative performance.</td>
        </tr>
        <tr>
          <td className="px-4 py-2 border">Focus</td>
          <td className="px-4 py-2 border">Resource allocation and management.</td>
          <td className="px-4 py-2 border">Task execution and parallelism.</td>
        </tr>
        <tr className="bg-gray-50">
          <td className="px-4 py-2 border">Methodology</td>
          <td className="px-4 py-2 border">Algorithms like Round Robin, Least Connections based on load metrics.</td>
          <td className="px-4 py-2 border">Task partitioning and cooperative execution across nodes.</td>
        </tr>
        <tr>
          <td className="px-4 py-2 border">Implementation</td>
          <td className="px-4 py-2 border">Uses load balancers to distribute incoming requests/tasks.</td>
          <td className="px-4 py-2 border">Breaks tasks into smaller units and coordinates nodes for parallel processing.</td>
        </tr>
        <tr className="bg-gray-50">
          <td className="px-4 py-2 border">Examples</td>
          <td className="px-4 py-2 border">Web servers, cloud platforms, CDNs distributing traffic.</td>
          <td className="px-4 py-2 border">Big data frameworks (Hadoop), scientific simulations, distributed databases.</td>
        </tr>
        <tr>
          <td className="px-4 py-2 border">Key Benefit</td>
          <td className="px-4 py-2 border">Optimizes resources, avoids overload, improves responsiveness.</td>
          <td className="px-4 py-2 border">Improves throughput, accelerates task completion, enables horizontal scalability.</td>
        </tr>
      </tbody>
    </table>

    {/* Use Cases */}
    <h2 className="text-3xl font-bold mt-8">4. Use Cases</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Load Balancing:</strong> Web servers, cloud computing platforms, CDNs to distribute requests efficiently.</li>
      <li><strong>Load Sharing:</strong> Big data processing, scientific simulations, distributed databases to enable parallel execution.</li>
    </ul>

    {/* Conclusion */}
    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      Load balancing ensures even resource utilization and responsiveness, while load sharing emphasizes 
      parallel task execution and collaborative processing. Both strategies are critical for optimizing 
      distributed systems, serving complementary purposes in achieving efficiency, scalability, and performance.
    </p>

  </div>
);

export default Home;
