import React from "react";

const FlynnsTaxonomy: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Title ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Flynn's Taxonomy
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 26 Sep, 2025</p>

    {/* ================= Intro ================= */}
    <p className="text-lg leading-relaxed">
      Flynn's Taxonomy classifies computer architectures based on the number of 
      instruction streams and data streams a system can process simultaneously. 
      It divides architectures into four main categories: SISD, SIMD, MISD, and MIMD.
    </p>

    {/* Image Placeholder */}
    <div className="bg-gray-400 p-4 rounded-lg text-center text-sm">
      flynn_s_classification_of_computers.webp
    </div>

    {/* ================= Classification ================= */}
    <h2 className="text-3xl font-bold mt-8">Classification of Flynn's Taxonomy</h2>

    {/* ================= SISD ================= */}
    <h3 className="text-2xl font-semibold mt-6">Single-Instruction, Single-Data (SISD) Systems</h3>
    <p className="leading-relaxed">
      An SISD system is a uniprocessor machine that executes a single instruction 
      on a single data stream. Instructions are processed sequentially, and these 
      machines are commonly known as sequential computers. Most traditional systems 
      follow this architecture, such as IBM PCs and workstations.
    </p>

    <div className="bg-gray-400 p-4 rounded-lg text-center text-sm">sisd.webp</div>

    <p className="leading-relaxed">
      The speed of SISD systems is limited by the internal data transfer rate of the 
      processor. All instructions and data must be stored in the main memory.
    </p>

    {/* ================= SIMD ================= */}
    <h3 className="text-2xl font-semibold mt-6">Single-Instruction, Multiple-Data (SIMD) Systems</h3>
    <p className="leading-relaxed">
      SIMD machines are multiprocessor systems that execute the same instruction 
      across multiple processing elements (PEs), each working on a different data stream. 
      This architecture is ideal for scientific workloads involving vector and matrix operations.
    </p>

    <div className="bg-gray-400 p-4 rounded-lg text-center text-sm">simd.webp</div>

    <p className="leading-relaxed">
      Data is divided into sets, with each processing element handling one subset. 
      A dominant example of SIMD systems is Cray’s vector processing machines.
    </p>

    {/* ================= MISD ================= */}
    <h3 className="text-2xl font-semibold mt-6">Multiple-Instruction, Single-Data (MISD) Systems</h3>
    <p className="leading-relaxed">
      MISD machines execute multiple instructions on the same data stream. Each 
      processing element performs a different operation on the same dataset. These 
      systems are extremely rare and not commercially used.
    </p>

    <div className="bg-gray-400 p-4 rounded-lg text-center text-sm">misd.webp</div>

    <p className="leading-relaxed">
      Example: Performing <code>sin(x)</code>, <code>cos(x)</code>, and <code>tan(x)</code> on the same input value.
      Very few MISD systems have been built due to limited real-world applicability.
    </p>

    {/* ================= MIMD ================= */}
    <h3 className="text-2xl font-semibold mt-6">Multiple-Instruction, Multiple-Data (MIMD) Systems</h3>
    <p className="leading-relaxed">
      MIMD systems are multiprocessor machines capable of executing multiple 
      instructions on multiple data sets simultaneously. Each processing element 
      has its own instruction and data stream, allowing these systems to support 
      a wide range of applications.
    </p>

    <div className="bg-gray-400 p-4 rounded-lg text-center text-sm">mimd.webp</div>

    <p className="leading-relaxed">
      Processors in MIMD machines operate asynchronously. MIMD systems are further 
      classified into:
    </p>

    {/* Subclassification */}
    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Shared-Memory MIMD (Tightly Coupled):</strong>  
        All processors access a common global memory. Any change made by one 
        processor is visible to all.  
        Examples include Silicon Graphics and Sun/IBM SMP systems.
      </li>

      <li className="mt-2">
        <strong>Distributed-Memory MIMD (Loosely Coupled):</strong>  
        Each processor has its own local memory and communicates through an 
        interconnection network like mesh or tree structures.  
        These systems are scalable and fault-tolerant.
      </li>
    </ul>

    <p className="leading-relaxed">
      Distributed-memory MIMD systems are generally preferred for large-scale, 
      real-world applications due to higher scalability and fault tolerance.
    </p>

  </div>
);

export default FlynnsTaxonomy;
