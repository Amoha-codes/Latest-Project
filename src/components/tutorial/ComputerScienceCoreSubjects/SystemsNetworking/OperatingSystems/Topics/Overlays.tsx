import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Overlays in Memory Management ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Overlays in Memory Management
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 05 Sep, 2025</p>

    {/* Intro */}
    <p className="text-lg leading-relaxed">
      Overlays are a memory management technique used to efficiently run large 
      programs in limited memory. Only the necessary parts of a program are 
      loaded into memory at a time, while the rest is stored on disk and loaded 
      when needed.
    </p>

    <p className="leading-relaxed">
      This technique allows programs larger than the available memory to execute 
      without requiring all parts to reside in memory simultaneously.
    </p>

    {/* How it works */}
    <h2 className="text-3xl font-bold mt-8">How Overlays Work</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>The program is divided into smaller modules or segments.</li>
      <li>Only the module needed at a given time is loaded into memory.</li>
      <li>Once the module finishes execution, it is unloaded, and another module is loaded.</li>
      <li>The program remains functional because only necessary parts are in memory at any given time.</li>
    </ul>

    {/* Example */}
    <h2 className="text-3xl font-bold mt-8">Example: Assembler with Two Passes</h2>

    <p className="leading-relaxed">
      Consider an assembler with two passes. Available memory = 150 KB, total code size = 200 KB:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Pass 1: 70 KB</li>
      <li>Pass 2: 80 KB</li>
      <li>Symbol Table: 30 KB</li>
      <li>Common Routine: 20 KB</li>
      <li>Overlays Driver: 10 KB</li>
    </ul>

    <p className="leading-relaxed">
      Both passes cannot fit into memory simultaneously. Overlays allow one pass 
      at a time, along with shared resources (symbol table, common routine, driver).
    </p>

    <h3 className="text-2xl font-semibold mt-6">Memory Requirements</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Pass 1: 70 + 30 + 20 + 10 = 130 KB</li>
      <li>Pass 2: 80 + 30 + 20 + 10 = 140 KB</li>
    </ul>

    <p className="leading-relaxed font-semibold">
      Minimum Partition Size = 140 KB to accommodate any pass along with shared resources.
    </p>

    {/* Overlays Driver */}
    <h2 className="text-3xl font-bold mt-8">Overlays Driver</h2>
    <p className="leading-relaxed">
      The overlays driver is managed by the user. The OS does not automatically 
      swap program parts. The user must:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Load the required module into memory.</li>
      <li>Unload a module after execution and load the next module.</li>
    </ul>

    {/* Overlay Tree Example */}
    <h2 className="text-3xl font-bold mt-8">Overlay Tree Example</h2>
    <p className="leading-relaxed">
      For the following overlay tree, what is the minimum partition size required?
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Root + A + D = 2 + 4 + 6 = 12 KB</li>
      <li>Root + A + E = 2 + 4 + 8 = 14 KB</li>
      <li>Root + B + F = 2 + 6 + 2 = 10 KB</li>
      <li>Root + C + G = 2 + 8 + 4 = 14 KB</li>
    </ul>

    <p className="leading-relaxed font-semibold">
      Answer: 14 KB. With a partition size of 14 KB, any part of the program can run.
    </p>

    {/* Conclusion */}
    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      Overlays efficiently manage limited memory by loading only necessary parts 
      of a program at a time. They allow execution of programs larger than 
      available memory, solving the fixed partition limitation and optimizing 
      memory usage.
    </p>

  </div>
);

export default Home;
