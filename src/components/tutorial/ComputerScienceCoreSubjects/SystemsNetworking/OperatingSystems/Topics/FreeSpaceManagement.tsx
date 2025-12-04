import React from "react";

const FreeSpaceManagement: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Free Space Management ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Free Space Management in Operating System
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 12 Sep, 2025</p>

    <p className="text-lg leading-relaxed mt-4">
      Free space management involves keeping track of available storage on secondary devices such as hard disks. 
      To reuse space freed by deleted files, the operating system maintains a <strong>free space list</strong>. 
      Common implementations include:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Bitmap or Bit Vector</li>
      <li>Linked List</li>
      <li>Boundary Tags</li>
      <li>Free List</li>
    </ul>

    {/* ================= Bitmap ================= */}
    <h2 className="text-3xl font-bold mt-6">Bitmap / Bit Vector</h2>
    <p className="leading-relaxed text-lg">
      A bitmap is a sequence of bits where each bit corresponds to a disk block. 
      <strong>0</strong> indicates a free block, and <strong>1</strong> indicates an allocated block. 
      Example: A 16-block disk could have a bitmap like <code>1111000111111001</code>.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Advantages</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Simple to understand and implement.</li>
      <li>Efficient to find the first free block by scanning for a zero bit.</li>
    </ul>
    <h3 className="text-2xl font-semibold mt-4">Disadvantages</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Finding free blocks can be time-consuming for large disks.</li>
      <li>Efficiency decreases as disk size increases.</li>
    </ul>

    {/* ================= Linked List ================= */}
    <h2 className="text-3xl font-bold mt-6">Linked List</h2>
    <p className="leading-relaxed text-lg">
      Free blocks are linked together, with each block storing the address of the next free block. 
      The head of the list points to the first free block, and the last block points to <code>null</code>.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Advantages</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Efficient use of total available space.</li>
      <li>Dynamic allocation is simple; space can grow as needed.</li>
    </ul>
    <h3 className="text-2xl font-semibold mt-4">Disadvantages</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Pointer management becomes complex for large lists.</li>
      <li>I/O may be needed to traverse the free list.</li>
    </ul>

    {/* ================= Boundary Tags ================= */}
    <h2 className="text-3xl font-bold mt-6">Boundary Tags</h2>
    <p className="leading-relaxed text-lg">
      Each block stores a boundary tag indicating its size and whether it is free. 
      Adjacent free blocks are merged during deallocation, reducing fragmentation.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Advantages</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Useful in memory management systems.</li>
      <li>Simplifies coalescing of adjacent free blocks.</li>
    </ul>
    <h3 className="text-2xl font-semibold mt-4">Disadvantages</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Overhead in storing tag information.</li>
      <li>More complex than bitmap or linked list methods.</li>
    </ul>

    {/* ================= Free List ================= */}
    <h2 className="text-3xl font-bold mt-6">Free List</h2>
    <p className="leading-relaxed text-lg">
      Free blocks are maintained in a list (array or linked list). Each entry points directly to a free block on disk.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Advantages</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Fast allocation as free blocks are known upfront.</li>
      <li>Easy to traverse and maintain.</li>
    </ul>
    <h3 className="text-2xl font-semibold mt-4">Disadvantages</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Requires extra memory to store the list.</li>
      <li>May suffer from fragmentation over time.</li>
    </ul>
  </div>
);

export default FreeSpaceManagement;
