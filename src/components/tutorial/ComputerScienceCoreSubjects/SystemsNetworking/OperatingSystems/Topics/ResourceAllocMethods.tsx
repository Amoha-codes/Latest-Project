import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Resource Allocation Techniques ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Resource Allocation Techniques for Processes
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 25 Oct, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      In a multitasking operating system, several processes run at the same time and 
      compete for system resources such as CPU time, memory, I/O devices, and files. 
      To manage this efficiently, the Operating System (OS) allocates resources to 
      processes when required and reclaims them once the process finishes execution.
    </p>

    <p className="text-lg font-semibold mt-6">There are two major resource allocation techniques:</p>

    {/* ================= Resource Partitioning Approach ================= */}
    <h2 className="text-3xl font-bold mt-8">1. Resource Partitioning Approach</h2>

    <p className="leading-relaxed">
      In this approach, the OS divides all available resources into fixed partitions 
      before execution begins. Each partition is treated as a bundle of resources, such as:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>A fixed portion of memory (e.g., 1 MB)</li>
      <li>A specific number of disk blocks</li>
      <li>A dedicated I/O device (e.g., printer)</li>
    </ul>

    <p className="leading-relaxed font-semibold">
      Once a program is assigned a partition, it can only use the resources within that partition.
    </p>

    <h3 className="text-2xl font-bold mt-6">Working</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>The OS creates resource partitions at system startup.</li>
      <li>Each partition contains a set of grouped resources.</li>
      <li>A Resource Table stores the status (Allocated / Free) of each partition.</li>
      <li>A program is assigned an entire partition when it starts.</li>
      <li>After termination, the partition is marked as Free.</li>
    </ul>

    <h3 className="text-2xl font-bold mt-6">Example Resource Table</h3>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Memory (MB): Total = 8, Allocated = 5, Free = 3<br />
      Disk Blocks: Total = 100, Allocated = 75, Free = 25<br />
      Printers: Total = 2, Allocated = 1, Free = 1
    </p>

    <h3 className="text-2xl font-bold mt-6">Advantages</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Easy to implement</li>
      <li>Low overhead since allocation happens once</li>
    </ul>

    <h3 className="text-2xl font-bold mt-6">Disadvantages</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Lack of flexibility — programs cannot use resources outside their partition</li>
      <li>Wastage of resources if a process does not fully utilize its partition</li>
    </ul>

    {/* ================= Pool-Based Approach ================= */}
    <h2 className="text-3xl font-bold mt-10">2. Pool-Based Approach</h2>

    <p className="leading-relaxed">
      In this technique, the OS keeps all resources in a common pool. Resources are allocated 
      dynamically whenever a process requests them, and returned to the pool after use.
    </p>

    <h3 className="text-2xl font-bold mt-6">Working</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>All resources remain in a shared pool.</li>
      <li>A Resource Table tracks the status of each resource.</li>
      <li>If a requested resource is available, the OS allocates it instantly.</li>
      <li>When a process releases a resource, it is marked Free again.</li>
    </ul>

    <h3 className="text-2xl font-bold mt-6">Example Resource Table</h3>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Memory (MB): Total = 8, Allocated = 5, Free = 3<br />
      Disk Blocks: Total = 100, Allocated = 75, Free = 25<br />
      Printers: Total = 2, Allocated = 1, Free = 1
    </p>

    <h3 className="text-2xl font-bold mt-6">Advantages</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Efficient resource utilization</li>
      <li>High flexibility — any process may request any resource</li>
    </ul>

    <h3 className="text-2xl font-bold mt-6">Disadvantages</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Higher overhead due to frequent allocation and release</li>
      <li>Complex resource management</li>
    </ul>

    {/* ================= Comparison Table ================= */}
    <h2 className="text-3xl font-bold mt-10">Comparison: Partitioning vs Pool-Based Approach</h2>

    <p className="leading-relaxed">Key differences between the two techniques:</p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Allocation Time:</strong> Partitioning → before execution, Pool → during execution</li>
      <li><strong>Flexibility:</strong> Partitioning is static, Pool is dynamic</li>
      <li><strong>Resource Utilization:</strong> Partitioning may waste resources; Pool is efficient</li>
      <li><strong>Overhead:</strong> Partitioning has low overhead; Pool has high overhead</li>
      <li><strong>Complexity:</strong> Partitioning is simple; Pool is complex</li>
      <li><strong>Use Case:</strong> Partitioning fits embedded systems; Pool fits modern multitasking OS</li>
    </ul>

  </div>
);

export default Home;
