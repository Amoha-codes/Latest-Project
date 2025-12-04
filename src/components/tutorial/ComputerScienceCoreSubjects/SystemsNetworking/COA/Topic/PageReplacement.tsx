import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Page Replacement Algorithms ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Page Replacement Algorithms in Operating Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 10 Sep, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      In an operating system that uses paging, a <strong>page replacement algorithm</strong> 
      is required when a page fault occurs and no free page frame is available. The OS must 
      select a page to replace, mark its page table entry as “not present,” and write it 
      back to disk if it has been modified.
    </p>

    {/* Common Page Replacement Techniques */}
    <h2 className="text-3xl font-bold mt-8">Common Page Replacement Techniques</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>First In First Out (FIFO)</li>
      <li>Optimal Page Replacement</li>
      <li>Least Recently Used (LRU)</li>
      <li>Most Recently Used (MRU)</li>
    </ul>

    {/* FIFO */}
    <h2 className="text-3xl font-bold mt-8">1. First In First Out (FIFO)</h2>
    <p className="leading-relaxed">
      FIFO replaces the oldest page in memory. Pages are kept in a queue; the front of the queue 
      is removed when a new page must be loaded.
    </p>
    <p className="leading-relaxed font-semibold">Example:</p>
    <p className="leading-relaxed">
      Page reference string: 1, 3, 0, 3, 5, 6, 3 with 3-page frames.
    </p>
   <p className="leading-relaxed font-semibold">Example:</p>
    <ul className="list-disc ml-6 leading-relaxed">
    <li>Initially empty → 1, 3, 0 are loaded → 3 page faults.</li>
    <li>3 already in memory → 0 page fault.</li>
    <li>5 replaces oldest page 1 → 1 page fault.</li>
    <li>6 replaces oldest page 3 → 1 page fault.</li>
    <li>3 replaces 0 → 1 page fault.</li>
    </ul>


    {/* Optimal */}
    <h2 className="text-3xl font-bold mt-8">2. Optimal Page Replacement</h2>
    <p className="leading-relaxed">
      Replaces the page that will not be used for the longest time in the future. 
      Used as a benchmark because future references are required.
    </p>
    
   <p className="leading-relaxed font-semibold">Example:</p>
    <ul className="list-disc ml-6 leading-relaxed">
    <li>Page references: 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 3 with 4-page frames.</li>
    <li>Initially empty → load 7, 0, 1, 2 → 4 page faults.</li>
    <li>0 already present → 0 page fault.</li>
    <li>3 replaces 7 → 1 page fault.</li>
    <li>0 already present → 0 page fault.</li>
    <li>4 replaces 1 → 1 page fault.</li>
    <li>Subsequent pages in memory → 0 page faults.</li>
    </ul>


    {/* LRU */}
    <h2 className="text-3xl font-bold mt-8">3. Least Recently Used (LRU)</h2>
    <p className="leading-relaxed">
      Replaces the page that was least recently used.
    </p>
   
   <p className="leading-relaxed font-semibold">Example:</p>
        <ul className="list-disc ml-6 leading-relaxed">
        <li>Page references: 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 3 with 4-page frames.</li>
        <li>Initially empty → load 7, 0, 1, 2 → 4 page faults.</li>
        <li>0 already in memory → 0 page fault.</li>
        <li>3 replaces least recently used 7 → 1 page fault.</li>
        <li>0 already in memory → 0 page fault.</li>
        <li>4 replaces 1 → 1 page fault.</li>
        <li>Remaining pages already in memory → 0 page faults.</li>
        </ul>


   {/* MRU */}
<h2 className="text-3xl font-bold mt-8">4. Most Recently Used (MRU)</h2>
<p className="leading-relaxed">
  Replaces the page that was most recently used. Belady's anomaly can occur with MRU.
</p>
<p className="leading-relaxed font-semibold">Example:</p>
<ul className="list-disc ml-6 leading-relaxed">
  <li>Page references: 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 3 with 4-page frames.</li>
  <li>Initially empty → load 7, 0, 1, 2 → 4 page faults.</li>
  <li>0 already in memory → 0 page fault.</li>
  <li>3 replaces most recently used 0 → 1 page fault.</li>
  <li>0 replaces 3 → 1 page fault.</li>
  <li>4 replaces 0 → 1 page fault.</li>
  <li>2 already in memory → 0 page fault.</li>
  <li>3 replaces 2 → 1 page fault.</li>
  <li>0 replaces 3 → 1 page fault.</li>
  <li>3 replaces 0 → 1 page fault.</li>
  <li>2 replaces 3 → 1 page fault.</li>
  <li>3 replaces 2 → 1 page fault.</li>
</ul>

  </div>
);

export default Home;
