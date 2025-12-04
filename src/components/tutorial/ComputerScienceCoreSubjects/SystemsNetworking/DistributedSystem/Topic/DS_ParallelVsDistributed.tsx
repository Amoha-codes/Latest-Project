import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Header ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Difference between Parallel Computing and Distributed Computing
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 16 Sep, 2025</p>

    {/* ================= Intro ================= */}
    <p className="text-lg leading-relaxed">
      Parallel Computing and Distributed Computing are two important models of high-performance computing. 
      Both aim to perform large numbers of calculations by breaking tasks into parallel operations, 
      but they differ in architecture, execution, and resource utilization.
    </p>

    {/* ================= Parallel Computing ================= */}
    <h2 className="text-3xl font-bold mt-8">Parallel Computing</h2>
    <p className="leading-relaxed">
      In parallel computing, multiple processors perform multiple tasks simultaneously. Memory can be shared or distributed, allowing concurrent execution and saving time.
    </p>
    <p className="leading-relaxed font-semibold">Examples:</p>
    <p className="leading-relaxed">
      Supercomputers, AI & Machine Learning, IoT devices, Space shuttles, Smartphones, Laptops, Blockchain technologies.
    </p>
    <p className="leading-relaxed font-semibold">Advantages:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Increased Speed: Multiple calculations are performed concurrently, reducing computation time.</li>
      <li>Efficient Use of Resources: Utilizes all processing units for maximum computational power.</li>
      <li>Scalability: Adding more processors allows solving more complex problems faster.</li>
      <li>Better Performance for Complex Tasks: Ideal for numerical simulations, scientific modeling, and data processing.</li>
    </ul>
    <p className="leading-relaxed font-semibold">Disadvantages:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Complex Programming: Writing parallel programs is more challenging than serial programming.</li>
      <li>Synchronization Issues: Multiple processors may require careful coordination to avoid conflicts.</li>
      <li>Hardware Costs: Multi-core processors and specialized hardware can be expensive.</li>
    </ul>

    {/* ================= Distributed Computing ================= */}
    <h2 className="text-3xl font-bold mt-8">Distributed Computing</h2>
    <p className="leading-relaxed">
      Distributed computing involves multiple autonomous computers that appear to the user as a single system. 
      There is no shared memory; nodes communicate via message passing, and a task is divided across different computers.
    </p>
    <p className="leading-relaxed font-semibold">Examples:</p>
    <p className="leading-relaxed">
      AI & Machine Learning, High-Performance Scientific Research, Financial Computing, IoT, Blockchain, and Energy/Environment monitoring.
    </p>
    <p className="leading-relaxed font-semibold">Advantages:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Fault Tolerance: Failure of one node does not stop the overall computation.</li>
      <li>Cost-Effective: Uses commodity hardware instead of expensive specialized processors.</li>
      <li>Scalability: More machines can be added to handle larger workloads.</li>
      <li>Geographic Distribution: Tasks can be executed across multiple locations, reducing latency.</li>
    </ul>
    <p className="leading-relaxed font-semibold">Disadvantages:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Complex Management: Synchronizing nodes and managing network failures is challenging.</li>
      <li>Communication Overhead: Data transfer between distant nodes can reduce performance.</li>
      <li>Security Concerns: Distributed systems are more vulnerable due to reliance on networks.</li>
    </ul>

    {/* ================= Comparison Table ================= */}
    <h2 className="text-3xl font-bold mt-8">Parallel vs Distributed Computing</h2>
    <div className="overflow-x-auto">
      <table className="table-auto border-collapse border border-gray-300 w-full text-left">
        <thead>
          <tr className="bg-gray-400">
            <th className="border border-gray-300 px-4 py-2">S.NO</th>
            <th className="border border-gray-300 px-4 py-2">Parallel Computing</th>
            <th className="border border-gray-300 px-4 py-2">Distributed Computing</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">1</td>
            <td className="border border-gray-300 px-4 py-2">Many operations performed simultaneously</td>
            <td className="border border-gray-300 px-4 py-2">System components located at different locations</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border border-gray-300 px-4 py-2">2</td>
            <td className="border border-gray-300 px-4 py-2">Single computer is required</td>
            <td className="border border-gray-300 px-4 py-2">Uses multiple computers</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">3</td>
            <td className="border border-gray-300 px-4 py-2">Multiple processors perform multiple operations</td>
            <td className="border border-gray-300 px-4 py-2">Multiple computers perform multiple operations</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border border-gray-300 px-4 py-2">4</td>
            <td className="border border-gray-300 px-4 py-2">Memory may be shared or distributed</td>
            <td className="border border-gray-300 px-4 py-2">Memory is only distributed</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">5</td>
            <td className="border border-gray-300 px-4 py-2">Processors communicate through bus</td>
            <td className="border border-gray-300 px-4 py-2">Computers communicate via message passing</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border border-gray-300 px-4 py-2">6</td>
            <td className="border border-gray-300 px-4 py-2">Improves system performance</td>
            <td className="border border-gray-300 px-4 py-2">Improves scalability, fault tolerance, and resource sharing</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* ================= Conclusion ================= */}
    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      Parallel computing focuses on executing multiple tasks simultaneously on a single system or shared memory, optimizing speed and performance. 
      Distributed computing focuses on performing tasks across multiple independent computers, enhancing scalability, fault tolerance, and geographic flexibility.
    </p>

  </div>
);

export default Home;
