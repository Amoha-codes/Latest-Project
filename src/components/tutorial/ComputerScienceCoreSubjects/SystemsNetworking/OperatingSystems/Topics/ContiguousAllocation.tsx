import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Contiguous Memory Management Techniques ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Implementation of Contiguous Memory Management Techniques
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 12 Jul, 2025</p>

    {/* Intro */}
    <p className="text-lg leading-relaxed">
      Memory management techniques are essential components of an operating system,
      responsible for allocating and organizing memory efficiently. These techniques
      are broadly categorized into <strong>Contiguous</strong> and 
      <strong> Non-contiguous</strong> memory allocation.
    </p>

    <p className="leading-relaxed">
      Contiguous memory allocation assigns a continuous block of memory to each process.
      When a process requests memory, a single contiguous region is allocated based on 
      its size. This method includes two main schemes:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Fixed (Static) Partitioning</li>
      <li>Variable (Dynamic) Partitioning</li>
    </ul>

    {/* Fixed Partition Scheme */}
    <h2 className="text-3xl font-bold mt-8">Fixed Partition Scheme</h2>
    <p className="leading-relaxed">
      In this scheme, memory is divided into a fixed number of partitions. Each partition
      can hold only one process at a time. The degree of multiprogramming depends on the
      number of partitions available.
    </p>

    <p className="leading-relaxed">
      The maximum size of a process is restricted by the size of the largest partition.
      Each partition uses <strong>limit registers</strong>:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Lower Limit:</strong> Starting address of the partition.</li>
      <li><strong>Upper Limit:</strong> Ending address of the partition.</li>
    </ul>

    {/* Internal Fragmentation */}
    <h3 className="text-2xl font-semibold mt-6">Internal Fragmentation</h3>
    <p className="leading-relaxed">
      Internal fragmentation occurs when a process does not fully utilize the allocated
      partition space, leaving unused memory inside the partition.
    </p>

    <h3 className="text-2xl font-semibold mt-6">Disadvantages of Fixed Partitioning</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Process size must be ≤ partition size.</li>
      <li>Multiprogramming level depends on number of partitions.</li>
      <li>Non-contiguous free memory cannot be combined.</li>
      <li>Internal fragmentation occurs frequently.</li>
    </ul>

    {/* Variable Partition Scheme */}
    <h2 className="text-3xl font-bold mt-8">Variable Partition Scheme</h2>
    <p className="leading-relaxed">
      In this scheme, memory starts as a single large block. As processes arrive,
      partitions are created dynamically based on process size.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Partition sizes vary according to process size.</li>
      <li>Each active process gets one partition.</li>
      <li>External fragmentation is present.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-6">Advantages</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Partition size = process size (no internal fragmentation).</li>
      <li>Flexible degree of multiprogramming.</li>
      <li>Better memory utilization than fixed partitions.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-6">Disadvantages</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>External fragmentation still occurs.</li>
    </ul>

    {/* External Fragmentation */}
    <h2 className="text-3xl font-bold mt-8">External Fragmentation</h2>
    <p className="leading-relaxed">
      External fragmentation occurs when free memory is divided into small scattered
      blocks, preventing allocation to larger processes even though total free memory
      is sufficient.
    </p>

    {/* Solutions */}
    <h2 className="text-3xl font-bold mt-8">Solutions to External Fragmentation</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Compaction</h3>
    <p className="leading-relaxed">
      Compaction involves shifting processes together to create one large free block.
      Although effective, it interrupts running processes and increases CPU overhead.
    </p>

    <h3 className="text-2xl font-semibold mt-6">2. Non-contiguous Memory Allocation</h3>
    <p className="leading-relaxed">
      Instead of allocating contiguous blocks, the physical memory is divided into
      fixed-size <strong>frames</strong> and logical memory into 
      <strong> pages</strong>, allowing processes to be stored in 
      non-contiguous locations.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Physical Address Space:</strong> Divided into frames (fixed size).
      </li>
      <li>
        <strong>Logical Address Space:</strong> Divided into pages of the same size.
      </li>
    </ul>

    {/* Conclusion */}
    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      Contiguous memory allocation is simple and fast but suffers from fragmentation.
      Fixed partitions face internal fragmentation, while variable partitions deal with
      external fragmentation. Modern systems overcome these issues using non-contiguous
      techniques like paging and segmentation.
    </p>

  </div>
);

export default Home;
