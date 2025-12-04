import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Starvation and Aging ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Starvation and Aging in Operating Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 27 Aug, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Starvation (or indefinite blocking) occurs in priority scheduling when a low-priority process keeps waiting indefinitely because higher-priority processes continuously get the CPU. 
      This problem is common in heavily loaded systems where resources are always occupied by higher-priority tasks.
    </p>

    <h2 className="text-3xl font-bold mt-8">Example of Starvation</h2>
    <p className="leading-relaxed">
      Consider the following priority scheduling scenario:
    </p>

    <table className="table-auto border-collapse border border-gray-300 w-full text-left mt-4">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">Process</th>
          <th className="border border-gray-300 px-4 py-2">Burst Time</th>
          <th className="border border-gray-300 px-4 py-2">Priority</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">P1</td>
          <td className="border border-gray-300 px-4 py-2">4</td>
          <td className="border border-gray-300 px-4 py-2">10</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">P2</td>
          <td className="border border-gray-300 px-4 py-2">7</td>
          <td className="border border-gray-300 px-4 py-2">1</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">P3</td>
          <td className="border border-gray-300 px-4 py-2">10</td>
          <td className="border border-gray-300 px-4 py-2">2</td>
        </tr>
      </tbody>
    </table>

    <p className="leading-relaxed mt-4">
      Gantt Chart:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      P1 → P3 → P2  <br />
      0 &nbsp; 4 &nbsp; 14 &nbsp; 21
    </p>

    <p className="leading-relaxed">
      In this example, higher-priority processes get the CPU first, potentially leaving lower-priority processes waiting indefinitely, leading to starvation.
    </p>

    <h2 className="text-3xl font-bold mt-8">Causes of Starvation</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Unfair Scheduling:</strong> If higher-priority processes are always available, lower-priority processes may never run.</li>
      <li><strong>Limited Resources:</strong> Processes must wait when system resources are scarce.</li>
      <li>Random scheduling algorithms may repeatedly skip a particular process, causing starvation.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Aging - Solution to Starvation</h2>
    <p className="leading-relaxed">
      Aging is a scheduling technique used to prevent starvation by gradually increasing the priority of long-waiting processes, ensuring fair CPU allocation.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Ensures fairness as long-waiting processes eventually get CPU time.</li>
      <li>Often combined with priority scheduling or round-robin to balance short-term efficiency with long-term fairness.</li>
      <li>Example: If priorities range from 127 (low) to 0 (high), a waiting process can move up one level every 15 minutes, ensuring execution of even the lowest-priority process.</li>
    </ul>

    <p className="leading-relaxed mt-4">
      Aging effectively prevents starvation while maintaining system efficiency and responsiveness.
    </p>

  </div>
);

export default Home;
