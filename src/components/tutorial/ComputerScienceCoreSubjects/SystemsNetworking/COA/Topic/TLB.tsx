import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Translation Lookaside Buffer (TLB) in Paging ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Translation Lookaside Buffer (TLB) in Paging
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 08 Sep, 2025</p>

    <p className="text-lg leading-relaxed">
      In an Operating System, paging allows efficient mapping between virtual addresses and the physical addresses in main memory. Each process has its own Page Table, which stores Page Table Entries (PTEs) that map virtual page numbers to physical frame numbers.
    </p>

    <h2 className="text-3xl font-bold mt-8">The Problem of Access Time in Paging</h2>
    <p className="leading-relaxed">
      When the CPU generates a virtual address, it must be translated into a physical address to access data in main memory. If the entire page table is stored in main memory, every memory access requires:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Accessing the page table in main memory to get the frame number.</li>
      <li>Accessing the actual data in the main memory frame.</li>
    </ul>
    <p className="leading-relaxed">
      This results in slower performance due to two memory accesses per data request.
    </p>

    <h2 className="text-3xl font-bold mt-8">Why Not Store Page Table in Registers?</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Registers are limited in size and can store only a small number of PTEs.</li>
      <li>For large processes, the page table size can be huge (e.g., 1 million entries for a 32-bit address space with 4 KB pages).</li>
      <li>Thus, storing the page table in registers is impractical; it is stored in main memory instead.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">How Does the TLB Work?</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>TLB Hit:</strong> The page number is found in the TLB, and the frame number is retrieved instantly.</li>
      <li><strong>TLB Miss:</strong> The page number is not found in the TLB, so the CPU accesses the page table in main memory. The TLB is updated with the new PTE using a replacement algorithm (FIFO, LRU, MFU, etc.).</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Step-by-Step Process</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>TLB Hit:</strong> CPU generates a virtual address → checked in TLB → frame number retrieved → data accessed.</li>
      <li><strong>TLB Miss:</strong> CPU generates a virtual address → not found in TLB → page table in memory accessed → frame number retrieved → TLB updated → data accessed.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Effective Memory Access Time (EMAT)</h2>
    <p className="leading-relaxed">
      TLB reduces average memory access time. EMAT is calculated as:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      EMAT = h × (c + m) + (1 − h) × (c + n × m)
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>h = TLB hit ratio</li>
      <li>m = memory access time</li>
      <li>c = TLB access time</li>
      <li>n = system level factor</li>
    </ul>
    <p className="leading-relaxed">
      A higher hit ratio significantly reduces EMAT and improves system efficiency.
    </p>

    <h2 className="text-3xl font-bold mt-8">Advantages of Using TLB</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Faster address translation by reducing page table lookups.</li>
      <li>Better overall performance due to lower average memory access time.</li>
      <li>Efficient memory utilization by caching frequently used PTEs.</li>
      <li>Scalability for large address spaces, especially in 64-bit systems.</li>
    </ul>

  </div>
);

export default Home;
