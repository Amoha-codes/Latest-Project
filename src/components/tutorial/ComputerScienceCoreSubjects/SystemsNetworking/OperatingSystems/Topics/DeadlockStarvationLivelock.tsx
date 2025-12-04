import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Starvation and Livelock ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Starvation and Livelock
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 03 Sep, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      <strong>Starvation</strong> and <strong>Livelock</strong> are problems in computer systems 
      that occur when multiple processes compete for resources.
    </p>

    {/* Starvation */}
    <h2 className="text-3xl font-bold mt-8">Starvation</h2>
    <p className="leading-relaxed">
      Starvation occurs when a process is repeatedly denied access to resources because higher-priority 
      processes continuously get them first. Low-priority processes may be blocked indefinitely.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Priority Scheduling:</strong> High-priority processes always execute first, starving low-priority ones.</li>
      <li><strong>Resource Utilization:</strong> Resources are continuously used by higher-priority processes, preventing lower-priority processes from proceeding.</li>
    </ul>

    {/* Livelock */}
    <h2 className="text-3xl font-bold mt-8">Livelock</h2>
    <p className="leading-relaxed">
      Livelock occurs when processes continuously change their state to avoid conflict but never make progress. 
      Unlike deadlock, processes are actively executing, but no real work is completed.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Example:</strong> Two processes repeatedly yield to each other while trying to access a resource, so neither proceeds.</li>
      <li><strong>Excessive resource preemption:</strong> Processes release and request resources repeatedly without acquiring them.</li>
      <li><strong>Over-politeness:</strong> Processes yield to each other endlessly, preventing progress.</li>
      <li><strong>Improper scheduling:</strong> CPU switches processes in a way that no process completes its task.</li>
      <li><strong>Faulty recovery mechanisms:</strong> Rollback or retry algorithms can cause livelock if repeated endlessly.</li>
      <li><strong>Busy-waiting loops:</strong> Processes actively check conditions but do not advance execution.</li>
    </ul>

    {/* Difference Table */}
    <h2 className="text-3xl font-bold mt-8">Difference Between Starvation and Livelock</h2>
    <table className="table-auto border-collapse border border-gray-400 w-full text-left">
      <thead>
        <tr className="bg-gray-400">
          <th className="border border-gray-400 px-4 py-2">Feature</th>
          <th className="border border-gray-400 px-4 py-2">Starvation</th>
          <th className="border border-gray-400 px-4 py-2">Livelock</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Definition</td>
          <td className="border border-gray-400 px-4 py-2">A process waits indefinitely because it is always bypassed by others.</td>
          <td className="border border-gray-400 px-4 py-2">Processes keep executing but fail to make progress.</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Cause</td>
          <td className="border border-gray-400 px-4 py-2">Unfair resource allocation or scheduling.</td>
          <td className="border border-gray-400 px-4 py-2">Processes continuously respond to each other, preventing progress.</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Process State</td>
          <td className="border border-gray-400 px-4 py-2">Ready but not scheduled/executed.</td>
          <td className="border border-gray-400 px-4 py-2">Actively executing but not making progress.</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">System Progress</td>
          <td className="border border-gray-400 px-4 py-2">System progresses, but some processes do not.</td>
          <td className="border border-gray-400 px-4 py-2">System is busy, but no real work is done.</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Example</td>
          <td className="border border-gray-400 px-4 py-2">A low-priority task never gets CPU time.</td>
          <td className="border border-gray-400 px-4 py-2">Two processes constantly yielding to each other.</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Resolution</td>
          <td className="border border-gray-400 px-4 py-2">Use fair scheduling (e.g., aging).</td>
          <td className="border border-gray-400 px-4 py-2">Better coordination or back-off strategies are needed.</td>
        </tr>
      </tbody>
    </table>

  </div>
);

export default Home;
