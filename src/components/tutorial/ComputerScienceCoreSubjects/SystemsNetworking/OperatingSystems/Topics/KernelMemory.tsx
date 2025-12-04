import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Kernel Memory Allocation ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Allocating Kernel Memory: Buddy System and Slab System
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 14 Apr, 2023</p>

    {/* Intro */}
    <p className="text-lg leading-relaxed">
      Allocating kernel memory efficiently is crucial for operating system performance. 
      Two common strategies are the <strong>Buddy System</strong> and the <strong>Slab System</strong>.
    </p>

    {/* Buddy System */}
    <h2 className="text-3xl font-bold mt-8">1. Buddy System</h2>
    <p className="leading-relaxed">
      The buddy system divides memory into blocks of size power-of-two. When a memory request 
      arrives, it finds the smallest available block large enough. If the block is larger, 
      it is split into two "buddies" recursively until the appropriate size is found.
    </p>
    <p className="leading-relaxed">
      Example: Requesting 25 KB → Allocated block = 32 KB. The remaining part can coalesce with 
      its buddy later to form larger blocks.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Types of Buddy System</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Binary Buddy System</li>
      <li>Fibonacci Buddy System</li>
      <li>Weighted Buddy System</li>
      <li>Tertiary Buddy System</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Advantages</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Minimal external fragmentation</li>
      <li>Fast allocation and deallocation</li>
      <li>Coalescing allows merging buddies efficiently</li>
      <li>Low overhead for allocation and freeing</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Drawback</h3>
    <p className="leading-relaxed">
      Internal fragmentation may occur when allocated block is larger than requested size.
    </p>

    {/* Slab System */}
    <h2 className="text-3xl font-bold mt-8">2. Slab System</h2>
    <p className="leading-relaxed">
      The slab system is designed for kernel memory, efficiently managing allocations 
      of objects of the same type. Memory is divided into <strong>caches</strong> of 
      slabs, and each slab contains multiple objects of the same type.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Key Concepts</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Slab:</strong> One or more contiguous pages containing objects.</li>
      <li><strong>Cache:</strong> Holds slabs for a specific kernel object type.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Slab States</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Full: All objects in the slab are allocated.</li>
      <li>Empty: All objects are free.</li>
      <li>Partial: Some objects allocated, some free.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Advantages</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Prevents fragmentation</li>
      <li>Quick allocation from cache</li>
      <li>Efficient for frequently allocated/deallocated objects</li>
      <li>Memory can be reused immediately after being released</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Example</h3>
    <p className="leading-relaxed">
      A cache for process descriptors stores preallocated objects. When a new descriptor 
      is required, an object from the cache is assigned and marked as used. Upon release, 
      the object is marked free for future allocation.
    </p>

    <p className="leading-relaxed">
      Together, buddy and slab systems provide efficient kernel memory management, 
      balancing speed, fragmentation control, and memory utilization.
    </p>

  </div>
);

export default Home;
