import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Paging Theory ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Paging
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 08 Nov, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Paging is the process of moving parts of a program, called pages, from secondary storage into 
      the main memory (RAM). The main idea behind paging is to break a program into smaller fixed-size 
      blocks called pages. It allows processes to run without being loaded fully into contiguous memory.
    </p>

    {/* Key Points */}
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Process does not have to be allocated in contiguous memory space.</li>
      <li>The whole process does not have to be in main memory; some pages can be loaded when needed.</li>
      <li>Memory allocation is simplified since memory is always allocated in fixed-sized pages.</li>
    </ul>

    {/* Page Table Section */}
    <h2 className="text-3xl font-bold mt-8">Paging in Operating System</h2>
    <p className="leading-relaxed">
      The operating system uses a page table to keep track of each page's location in physical memory. 
      The memory management unit (MMU) converts logical addresses into physical addresses using the page table.
    </p>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages of Paging</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Memory can be allocated in non-contiguous blocks.</li>
      <li>Programs larger than main memory can run partially loaded.</li>
      <li>Simplifies memory allocation and management.</li>
    </ul>

    {/* Terminology */}
    <h2 className="text-3xl font-bold mt-8">Terminologies</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Logical Address Space (Virtual Address Space):</strong> All possible logical addresses a process can generate.</li>
      <li><strong>Physical Address Space:</strong> The total range of addresses available in RAM.</li>
      <li><strong>Page:</strong> Fixed-size block of logical memory.</li>
      <li><strong>Frame:</strong> Fixed-size block of physical memory.</li>
      <li><strong>Page Table Entry (PTE):</strong> Maps a logical page to a physical frame.</li>
      <li><strong>TLB (Translation Lookaside Buffer):</strong> Small, high-speed cache for fast page table lookups.</li>
    </ul>

    {/* Working of Paging */}
    <h2 className="text-3xl font-bold mt-8">Working of Paging</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Divide memory: Logical → Pages, Physical → Frames.</li>
      <li>Allocate pages into available frames.</li>
      <li>Page table maps logical pages to physical frames.</li>
      <li>Translate logical address to physical address using the page table.</li>
      <li>Handle page faults: load missing pages from disk.</li>
      <li>CPU uses page table to access memory during program execution.</li>
    </ol>

    {/* Example */}
    <h2 className="text-3xl font-bold mt-8">Example of Paging</h2>
    <p className="leading-relaxed">
      Suppose Physical Address = 12 bits (4K words), Logical Address = 13 bits (8K words), and Page Size = Frame Size = 1K words.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Number of frames = 4K / 1K = 4</li>
      <li>Number of pages = 8K / 1K = 8</li>
      <li>CPU generates a logical address divided into page number (p) and page offset (d).</li>
      <li>Physical address is divided into frame number (f) and frame offset (d).</li>
      <li>
        Physical Address = (Frame Number &lt;&lt; Number of Bits in Frame Offset) + Frame Offset
        </li>

    </ul>

    {/* Hardware Implementation */}
    <h2 className="text-3xl font-bold mt-8">Hardware Implementation of Paging</h2>
    <p className="leading-relaxed">
      The page table can be stored in registers if small. For large page tables, a Translation Lookaside Buffer (TLB) is used. 
      The TLB is a small, fast associative memory storing recent page table entries for quick address translation.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Main memory access time = m</li>
      <li>Effective access time with page table in memory = m (for page table) + m (for particular page)</li>
    </ul>

    {/* Conclusion */}
    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      Paging allows non-contiguous memory allocation, simplifies memory management, and enables execution of processes larger than main memory. 
      Using page tables and TLBs ensures fast logical-to-physical address translation.
    </p>

  </div>
);

export default Home;
