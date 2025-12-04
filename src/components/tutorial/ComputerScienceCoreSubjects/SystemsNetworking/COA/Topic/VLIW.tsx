import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Title ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Very Long Instruction Word (VLIW) Architecture
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 22 Sep, 2025</p>

    {/* ================= Introduction ================= */}
    <p className="text-lg leading-relaxed">
      Very Long Instruction Word (VLIW) is a processor architecture designed to execute multiple operations 
      in a single instruction cycle. Unlike conventional processors, which rely on complex hardware to identify parallelism, 
      VLIW shifts this responsibility to the compiler, which packs independent instructions into one long instruction word.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Execution units work simultaneously on different operations</li>
      <li>Reduces need for complex runtime scheduling</li>
      <li>Improves instruction-level parallelism</li>
    </ul>

    <p className="leading-relaxed">
      Traditional architectures improve performance using pipelining, superscalar execution, or out-of-order execution. 
      While these methods increase hardware complexity, VLIW reduces hardware complexity by relying on the compiler 
      to schedule parallel instruction execution.
    </p>

    {/* ================= Features ================= */}
    <h2 className="text-3xl font-bold mt-8">Features of VLIW Architecture</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Multiple functional units fetching from an instruction cache containing VLIWs</li>
      <li>Independent operations grouped in a single VLIW instruction and executed in the same cycle</li>
      <li>Each operation assigned to a separate functional unit</li>
      <li>All functional units share a common register file</li>
      <li>Instruction words range from 64–1024 bits depending on execution units</li>
      <li>Instruction scheduling and parallel dispatch handled statically by the compiler</li>
      <li>Compiler checks for dependencies before scheduling parallel execution</li>
    </ul>

    {/* ================= Comparison Table ================= */}
    <h2 className="text-3xl font-bold mt-8">Comparison with Other Architectures</h2>
    <table className="table-auto border-collapse border border-gray-300 w-full text-left">
      <thead>
        <tr className="bg-gray-400">
          <th className="border border-gray-300 px-2 py-1">Architecture</th>
          <th className="border border-gray-300 px-2 py-1">Advantages</th>
          <th className="border border-gray-300 px-2 py-1">Disadvantages</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-2 py-1">VLIW</td>
          <td className="border border-gray-300 px-2 py-1">
            Reduces hardware complexity, reduces power consumption, simplifies decoding and instruction issues, increases potential clock rate.
          </td>
          <td className="border border-gray-300 px-2 py-1">
            Requires complex compilers, increased code size, larger memory/register bandwidth, unfilled opcodes waste memory, cache misses can stall entire processor.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-2 py-1">Pipelining</td>
          <td className="border border-gray-300 px-2 py-1">
            Increases instruction throughput, enhances performance by overlapping execution, reduces hardware complexity.
          </td>
          <td className="border border-gray-300 px-2 py-1">
            Dependency checking required, pipeline hazards and stalls may occur.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-2 py-1">Superscalar</td>
          <td className="border border-gray-300 px-2 py-1">
            Executes multiple instructions per clock, reduces hardware complexity, enhances throughput.
          </td>
          <td className="border border-gray-300 px-2 py-1">
            Dependency checking required, out-of-order execution increases complexity.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-2 py-1">Out-of-order Execution</td>
          <td className="border border-gray-300 px-2 py-1">
            Overlaps instruction execution, enhances throughput, reduces hardware complexity.
          </td>
          <td className="border border-gray-300 px-2 py-1">
            Requires dependency checking, register renaming, dynamic scheduling, more complex hardware.
          </td>
        </tr>
      </tbody>
    </table>

    {/* ================= Applications ================= */}
    <h2 className="text-3xl font-bold mt-8">Applications of VLIW Architecture</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Digital Signal Processing (DSP):</strong> Efficiently handles multiple parallel data streams.</li>
      <li><strong>Multimedia Processing:</strong> Video and audio applications requiring high throughput and parallelism.</li>
      <li><strong>Scientific Computing:</strong> Solves complex numerical problems with high-performance computing.</li>
      <li><strong>Embedded Systems:</strong> Automotive control, medical devices, and industrial automation requiring high-performance, low-power execution.</li>
    </ul>

  </div>
);

export default Home;
