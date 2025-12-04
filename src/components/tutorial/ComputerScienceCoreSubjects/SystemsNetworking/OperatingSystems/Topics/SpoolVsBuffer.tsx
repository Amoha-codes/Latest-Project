import React from "react";

const SpoolingBufferingTheory: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Spooling vs Buffering ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Difference between Spooling and Buffering
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 08 Sep, 2025</p>

    {/* ================= Spooling ================= */}
    <h2 className="text-3xl font-bold mt-6">Spooling</h2>
    <p className="leading-relaxed text-lg">
      SPOOL stands for <strong>Simultaneous Peripheral Operation On-Line</strong>. 
      It is a process where data is temporarily stored in a special disk area and queued for execution. 
      Spooling allows multiple jobs to be handled simultaneously, commonly used in scenarios like printing where documents are stored sequentially in a queue.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Advantages of Spooling</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Efficient resource management – reduces idle time.</li>
      <li>Improved system efficiency through concurrent job processing.</li>
      <li>Ensures data integrity by processing tasks in correct sequence.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Disadvantages of Spooling</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Requires disk space to store queued data.</li>
      <li>May cause delays if the system is overloaded with many jobs.</li>
    </ul>

    {/* ================= Buffering ================= */}
    <h2 className="text-3xl font-bold mt-6">Buffering</h2>
    <p className="leading-relaxed text-lg">
      Buffering is the temporary storage of data in main memory (a buffer) while it is being transferred between devices or between a device and an application. 
      It helps match the speed of the data stream between the sender and receiver, preventing bottlenecks.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Advantages of Buffering</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Matches speed differences between devices for smoother data transfer.</li>
      <li>Minimizes latency, enabling continuous processing.</li>
      <li>Improves user experience in applications like media streaming.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Disadvantages of Buffering</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Consumes main memory, which may be limited.</li>
      <li>Potential for data loss or corruption if buffer overflows.</li>
    </ul>

    {/* ================= Differences ================= */}
    <h2 className="text-3xl font-bold mt-6">Key Differences between Spooling and Buffering</h2>
    <table className="table-auto border-collapse border border-gray-400 w-full text-left mt-4">
      <thead>
        <tr className="bg-gray-400">
          <th className="border border-gray-400 px-4 py-2">Aspect</th>
          <th className="border border-gray-400 px-4 py-2">Spooling</th>
          <th className="border border-gray-400 px-4 py-2">Buffering</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Basic Function</td>
          <td className="border border-gray-400 px-4 py-2">Overlaps I/O of one job with execution of another job</td>
          <td className="border border-gray-400 px-4 py-2">Overlaps I/O of a job with its own execution</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Full Form</td>
          <td className="border border-gray-400 px-4 py-2">Simultaneous Peripheral Operation On-Line</td>
          <td className="border border-gray-400 px-4 py-2">Not an acronym</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Efficiency</td>
          <td className="border border-gray-400 px-4 py-2">Higher efficiency due to handling multiple jobs</td>
          <td className="border border-gray-400 px-4 py-2">Less efficient compared to spooling</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Storage Used</td>
          <td className="border border-gray-400 px-4 py-2">Uses disk as a large buffer</td>
          <td className="border border-gray-400 px-4 py-2">Uses limited main memory</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Remote Processing</td>
          <td className="border border-gray-400 px-4 py-2">Supported</td>
          <td className="border border-gray-400 px-4 py-2">Not supported</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Implementation</td>
          <td className="border border-gray-400 px-4 py-2">Through spoolers managing I/O and resources</td>
          <td className="border border-gray-400 px-4 py-2">Via software/hardware mechanisms like FIFO or circular buffers</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Capacity</td>
          <td className="border border-gray-400 px-4 py-2">Handles large data stored on disk</td>
          <td className="border border-gray-400 px-4 py-2">Limited by main memory size</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Error Handling</td>
          <td className="border border-gray-400 px-4 py-2">Data can be recovered from disk if system crashes</td>
          <td className="border border-gray-400 px-4 py-2">Buffer overflow can cause data loss or corruption</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Complexity</td>
          <td className="border border-gray-400 px-4 py-2">More complex, requires extra software</td>
          <td className="border border-gray-400 px-4 py-2">Simpler technique for managing data transfer</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default SpoolingBufferingTheory;
