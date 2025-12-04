import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Uniform Memory Access (UMA) vs Non-uniform Memory Access (NUMA) ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Uniform Memory Access (UMA) vs Non-uniform Memory Access (NUMA)
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 24 Sep, 2025</p>

    <p className="text-lg leading-relaxed">
      UMA (Uniform Memory Access) and NUMA (Non-uniform Memory Access) are two different methods to manage memory in multi-processor systems. They define how processors access system memory and impact performance.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>UMA:</strong> Ensures equal memory access latency for all processors.</li>
      <li><strong>NUMA:</strong> Offers faster access to local memory, with variable latency for remote memory.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Uniform Memory Access (UMA)</h2>
    <p className="leading-relaxed">
      UMA uses a single memory controller. It is slower than NUMA and its bandwidth is limited. UMA is applicable for general-purpose and time-sharing applications. Three types of buses are used: Single, Multiple, and Crossbar.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Advantages of UMA</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Easy to implement: All processors have equal access to memory.</li>
      <li>Low latency: Memory access time is equal for all processors.</li>
      <li>Low cost: Only a single shared memory bus is required.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Disadvantages of UMA</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Limited scalability: Adding more processors can create contention for the memory bus.</li>
      <li>Limited bandwidth: Shared memory bus can become a bottleneck for memory-intensive applications.</li>
      <li>Limited memory capacity: All processors share a single memory pool.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Non-Uniform Memory Access (NUMA)</h2>
    <p className="leading-relaxed">
      NUMA uses different memory controllers, providing faster access to local memory. It is suitable for real-time and time-critical applications.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Advantages of NUMA</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Improved performance: Each processor has local memory, reducing access times.</li>
      <li>Scalability: Can handle large workloads by adding processors and memory nodes.</li>
      <li>Reduced memory contention: Processors primarily access their own memory.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Disadvantages of NUMA</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Complexity: Requires specialized hardware and software for memory management.</li>
      <li>Higher cost: More expensive than UMA due to extra hardware and software.</li>
      <li>Performance variability: Accessing remote memory can cause slower performance in some workloads.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Differences Between UMA and NUMA</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>UMA: Single memory controller → NUMA: Different memory controllers.</li>
      <li>UMA: Slower access → NUMA: Faster access for local memory.</li>
      <li>UMA: Limited bandwidth → NUMA: Higher bandwidth.</li>
      <li>UMA: General-purpose/time-sharing apps → NUMA: Real-time/time-critical apps.</li>
      <li>UMA: Memory access time equal → NUMA: Access time varies.</li>
      <li>UMA buses: Single, Multiple, Crossbar → NUMA buses: Tree, Hierarchical.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Examples</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>UMA: Sun Starfire Servers, Compaq Alpha Server, HP v Series</li>
      <li>NUMA: Cray, TC-2000, BBN</li>
    </ul>

  </div>
);

export default Home;
