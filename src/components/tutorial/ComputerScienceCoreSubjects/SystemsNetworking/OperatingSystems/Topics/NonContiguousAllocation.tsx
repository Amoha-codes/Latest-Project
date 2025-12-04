import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Non-Contiguous Memory Allocation ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Non-Contiguous Allocation in Operating System
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 09 Sep, 2025</p>

    {/* Intro */}
    <p className="text-lg leading-relaxed">
      Non-contiguous allocation is a memory management technique where a process 
      is divided into smaller parts and stored in different free memory blocks 
      (not necessarily consecutive). This allows efficient use of scattered free 
      memory without requiring a single large continuous block.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Process is divided into smaller units (pages/segments).</li>
      <li>These parts are placed in available free blocks (frames).</li>
      <li>OS maintains mapping through page tables or segment tables.</li>
    </ul>

    <p className="leading-relaxed font-semibold">
      Note: Non-contiguous blocks can be located anywhere in physical memory.
    </p>


    {/* Fundamental Approaches */}
    <h2 className="text-3xl font-bold mt-8">
      Fundamental Approaches of Non-Contiguous Memory Allocation
    </h2>

    <p className="leading-relaxed">
      These approaches use pointers and mapping structures to locate the scattered 
      memory blocks during execution. The two main techniques are:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Paging:</strong> Divides processes into equal-sized pages and maps 
        them to frames, eliminating external fragmentation.
      </li>
      <li>
        <strong>Segmentation:</strong> Divides processes into logical variable-sized 
        segments like code, data, and stack.
      </li>
      <li>
        <strong>Segmented Paging:</strong> A hybrid where segments are further split 
        into pages, combining benefits of both.
      </li>
    </ul>

    <p className="leading-relaxed">
      These techniques reduce memory wastage but increase address translation overhead.
    </p>


    {/* Working */}
    <h2 className="text-3xl font-bold mt-8">
      How Does Non-Contiguous Memory Allocation Work?
    </h2>

    <p className="leading-relaxed">
      A process is split into parts that can be stored in different free memory 
      spaces. Unlike contiguous allocation, the entire process does not need to 
      fit in one continuous block.
    </p>

    <p className="leading-relaxed">
      Example: If a 4KB process finds two 2KB free spaces, contiguous allocation 
      fails, but non-contiguous allocation splits it into two 2KB parts, placing 
      them into available memory frames.
    </p>

    <h3 className="text-2xl font-semibold mt-6">Contiguous vs Non-Contiguous</h3>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Contiguous:</strong> Must allocate space large enough for the whole 
        process; otherwise memory stays unused.
      </li>
      <li>
        <strong>Non-Contiguous:</strong> Process is split into smaller parts so 
        scattered spaces can be utilized.
      </li>
    </ul>


    {/* Rule */}
    <p className="leading-relaxed font-semibold mt-4">
      Rule: <span className="font-bold">pageSize = frameSize</span>
    </p>

    <p className="leading-relaxed">
      Processes are divided into pages in secondary memory before execution. 
      Main memory is divided into equal-sized frames. The OS maps pages to frames 
      in any available order.
    </p>


    {/* Example */}
    <h2 className="text-3xl font-bold mt-8">Example with Paging</h2>

    <p className="leading-relaxed">
      If frame size = 2KB, and processes P₁ and P₂ have 2 pages each, they can be 
      stored alternately across different free frames:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>First page of P₁</li>
      <li>First page of P₂</li>
      <li>Second page of P₁</li>
      <li>Second page of P₂</li>
    </ul>

    <p className="leading-relaxed">
      Non-contiguous allocation ensures unused scattered memory is efficiently used.
    </p>


    {/* Pros */}
    <h2 className="text-3xl font-bold mt-8">Pros of Non-Contiguous Allocation</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Reduces internal fragmentation.</li>
      <li>Flexible and efficient memory allocation.</li>
      <li>Better utilization of small memory gaps.</li>
      <li>Supports growing segments like stack/heap.</li>
      <li>Allows more processes in memory (improves multiprogramming).</li>
      <li>Forms the foundation of virtual memory (paging & segmentation).</li>
    </ul>

    {/* Cons */}
    <h2 className="text-3xl font-bold mt-8">Cons of Non-Contiguous Allocation</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>External fragmentation (in segmentation).</li>
      <li>Overhead due to mapping structures like page tables.</li>
      <li>Address translation slows down execution.</li>
      <li>Requires MMU hardware support.</li>
      <li>Deallocation becomes more complex.</li>
      <li>Page faults may occur frequently.</li>
    </ul>


    {/* Conclusion */}
    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>

    <p className="leading-relaxed">
      Non-contiguous allocation is more flexible and efficient than contiguous 
      allocation. By dividing processes into pages or segments, modern operating 
      systems reduce wastage, improve multiprogramming, and support virtual 
      memory. However, these benefits come with added overhead of mapping, 
      translation, and memory management complexity.
    </p>

  </div>
);

export default Home;
