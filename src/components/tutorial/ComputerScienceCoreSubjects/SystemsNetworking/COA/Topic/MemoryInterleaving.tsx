import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Memory Interleaving ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Memory Interleaving
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 09 Sep, 2025</p>

    <p className="text-lg leading-relaxed">
      Memory Interleaving is a technique used to increase the speed of memory access by splitting memory into multiple modules (banks) and accessing them in parallel.  
      Instead of storing the entire block of data in a single module, memory addresses are distributed across multiple modules in a round-robin fashion.  
      This allows the CPU to fetch the next instruction/data while the previous one is still being accessed, improving throughput.
    </p>

    <h2 className="text-3xl font-bold mt-8">Need for Memory Interleaving</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>CPU executes instructions faster than memory can supply data (memory bottleneck problem).</li>
      <li>Without interleaving, CPU must wait for each memory access to complete.</li>
      <li>Interleaving ensures that while one module is busy, the CPU can access another, reducing wait time.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Consecutive Words in a Module</h2>
    <p className="leading-relaxed">
      Memory is divided into four modules. Example: 16 data items (10, 20, …, 160) are transferred.  
      Each module receives consecutive data until full:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Module 1: 10, 20, 30, 40</li>
      <li>Module 2: 50, 60, 70, 80</li>
      <li>Module 3: 90, 100, 110, 120</li>
      <li>Module 4: 130, 140, 150, 160</li>
    </ul>
    <p className="leading-relaxed">
      Most significant bit (MSB) provides the module address; least significant bit (LSB) gives the address within the module.  
      Example: Data 90 → 1000: MSB 10 → Module 3, LSB 00 → position in module.
    </p>

    <h2 className="text-3xl font-bold mt-8">Consecutive Words in Consecutive Modules</h2>
    <p className="leading-relaxed">
      In this method, consecutive data are stored across consecutive modules.  
      Example: 16 data items (10, 20, …, 160) are distributed:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Module 1: 10, 50, 90, 130</li>
      <li>Module 2: 20, 60, 100, 140</li>
      <li>Module 3: 30, 70, 110, 150</li>
      <li>Module 4: 40, 80, 120, 160</li>
    </ul>
    <p className="leading-relaxed">
      Here, LSB indicates the module, and MSB indicates the data's position within the module.
    </p>

    <h2 className="text-3xl font-bold mt-8">Benefits of Memory Interleaving</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Higher Bandwidth: Multiple memory banks work in parallel, transferring more data at once.</li>
      <li>Lower Latency: While one bank is busy, others prepare the next data, reducing wait time.</li>
      <li>Better Performance: Combined higher bandwidth and lower latency improve efficiency, especially for heavy tasks and multitasking.</li>
    </ul>

  </div>
);

export default Home;
