import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Page Replacement Algorithms ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Page Replacement Algorithms in Operating Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 10 Sep, 2025</p>

    {/* Intro */}
    <p className="text-lg leading-relaxed">
      In operating systems using paging, a <strong>page replacement algorithm</strong> 
      is used when a page fault occurs and no free page frames are available. One 
      of the existing pages in memory is replaced with the new page. The virtual 
      memory manager:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Selects a victim page using the page replacement algorithm.</li>
      <li>Marks its page table entry as “not present.”</li>
      <li>If modified, writes it back to disk before replacement.</li>
    </ul>
    <p className="leading-relaxed">
      Efficient page replacement reduces page faults and improves system performance.
    </p>

    {/* FIFO */}
    <h2 className="text-3xl font-bold mt-8">1. First In First Out (FIFO)</h2>
    <p className="leading-relaxed">
      FIFO replaces the oldest page in memory. Pages are managed in a queue; 
      the page at the front is replaced first.
    </p>
    <p className="leading-relaxed">
      Example: Page reference string: <strong>1, 3, 0, 3, 5, 6, 3</strong> with 3-page frames.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Initially empty → 1, 3, 0 allocated → 3 page faults.</li>
      <li>3 already in memory → 0 page fault.</li>
      <li>5 replaces oldest (1) → 1 page fault.</li>
      <li>6 replaces oldest (3) → 1 page fault.</li>
      <li>3 replaces oldest (0) → 1 page fault.</li>
    </ul>

    {/* Optimal */}
    <h2 className="text-3xl font-bold mt-8">2. Optimal Page Replacement</h2>
    <p className="leading-relaxed">
      Replaces the page that will not be used for the longest time in the future. 
      It provides a benchmark for comparing other algorithms.
    </p>
    <p className="leading-relaxed">
      Example: Page reference string: <strong>7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 3</strong> 
      with 4-page frames.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Initially empty → 7, 0, 1, 2 allocated → 4 page faults.</li>
      <li>0 already in memory → 0 page fault.</li>
      <li>3 replaces 7 (used farthest in future) → 1 page fault.</li>
      <li>4 replaces 1 → 1 page fault.</li>
      <li>Remaining references mostly in memory → 0 page faults.</li>
    </ul>

    {/* LRU */}
    <h2 className="text-3xl font-bold mt-8">3. Least Recently Used (LRU)</h2>
    <p className="leading-relaxed">
      Replaces the page that has not been used for the longest time.
    </p>
    <p className="leading-relaxed">
      Example: Page reference string: <strong>7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 3</strong> 
      with 4-page frames.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Initially empty → 7, 0, 1, 2 allocated → 4 page faults.</li>
      <li>3 replaces least recently used (7) → 1 page fault.</li>
      <li>4 replaces least recently used (1) → 1 page fault.</li>
      <li>Remaining references mostly in memory → 0 page faults.</li>
    </ul>

    {/* MRU */}
    <h2 className="text-3xl font-bold mt-8">4. Most Recently Used (MRU)</h2>
    <p className="leading-relaxed">
      Replaces the page that has been used most recently. This algorithm can 
      exhibit Belady's anomaly.
    </p>
    <p className="leading-relaxed">
      Example: Page reference string: <strong>7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 3</strong> 
      with 4-page frames.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Initially empty → 7, 0, 1, 2 allocated → 4 page faults.</li>
      <li>3 replaces most recently used (0) → 1 page fault.</li>
      <li>0 replaces most recently used (3) → 1 page fault.</li>
      <li>4 replaces most recently used (0) → 1 page fault.</li>
      <li>2 already in memory → 0 page fault.</li>
      <li>Remaining references cause replacements similarly → total page faults accumulate.</li>
    </ul>

    {/* Conclusion */}
    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      Page replacement algorithms are crucial for managing limited memory in 
      paging systems. FIFO is simple but may cause more faults, Optimal provides 
      a benchmark, LRU is practical and commonly used, while MRU is less common 
      but useful in specific scenarios.
    </p>

  </div>
);

export default Home;
