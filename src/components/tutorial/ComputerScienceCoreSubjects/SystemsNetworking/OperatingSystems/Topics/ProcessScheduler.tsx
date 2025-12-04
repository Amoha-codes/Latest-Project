import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Process Schedulers in Operating System
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 20 Sep, 2025</p>

    {/* Introduction */}
    <p className="text-lg leading-relaxed">
      Process scheduling is the activity of the process manager that handles removal of the running process from the CPU and the selection of another process based on a strategy. A process moves between different scheduling queues like ready queue, waiting queue, or devices queue during its lifetime.
    </p>

    {/* Categories of Scheduling */}
    <h2 className="text-3xl font-bold mt-8">Categories of Scheduling</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Non-Preemptive:</strong> A process cannot be interrupted until it finishes execution.</li>
      <li><strong>Preemptive:</strong> The OS can switch a running process to ready state to give CPU to a higher priority process.</li>
    </ul>

    {/* Process Scheduler */}
    <h2 className="text-3xl font-bold mt-8">Process Scheduler</h2>
    <p className="leading-relaxed">
      Process schedulers are OS components responsible for deciding the order in which processes are executed by the CPU. They manage how the CPU allocates its time among multiple competing processes.
    </p>

    {/* Types of Schedulers */}
    <h2 className="text-3xl font-bold mt-8">Types of Process Schedulers</h2>

    <h3 className="text-2xl font-semibold mt-4">1. Long-Term (Job) Scheduler</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Loads processes from disk to main memory (Ready State).</li>
      <li>Controls degree of multiprogramming (number of processes in memory).</li>
      <li>Balances CPU-bound and I/O-bound processes.</li>
      <li>Usually slowest scheduler; may not exist in time-sharing systems.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">2. Short-Term (CPU) Scheduler</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Selects one process from the ready queue to execute on CPU.</li>
      <li>Runs frequently to avoid CPU starvation.</li>
      <li>Uses scheduling algorithms like FCFS, RR, Priority, etc.</li>
      <li>Main objective: maximize CPU utilization.</li>
    </ul>

    <h4 className="text-xl font-semibold mt-2">Dispatcher</h4>
    <p className="leading-relaxed">
      Dispatcher loads the process selected by the short-term scheduler onto the CPU and performs context switching. Steps include:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Saving context of previously running process.</li>
      <li>Switching system mode to user mode.</li>
      <li>Jumping to the proper instruction in the new process.</li>
      <li>Time taken is called dispatch latency.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">3. Medium-Term Scheduler</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Swaps processes between memory and disk to reduce degree of multiprogramming.</li>
      <li>Suspended processes cannot progress until returned to memory.</li>
      <li>Faster than long-term but slower than short-term scheduler.</li>
    </ul>

    {/* Other Schedulers */}
    <h2 className="text-3xl font-bold mt-8">Other Schedulers</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>I/O Schedulers:</strong> Manage order of I/O operations (e.g., FCFS, RR).</li>
      <li><strong>Real-Time Schedulers:</strong> Ensure critical tasks complete within specified time using EDF, RM, etc.</li>
    </ul>

    {/* Comparison */}
    <h2 className="text-3xl font-bold mt-8">Comparison Among Schedulers</h2>
    <table className="table-auto border-collapse border border-gray-300 w-full text-left">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">Scheduler</th>
          <th className="border border-gray-300 px-4 py-2">Description</th>
          <th className="border border-gray-300 px-4 py-2">Speed</th>
          <th className="border border-gray-300 px-4 py-2">Multiprogramming Control</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Long-Term</td>
          <td className="border border-gray-300 px-4 py-2">Job scheduler, moves jobs to ready queue</td>
          <td className="border border-gray-300 px-4 py-2">Slowest</td>
          <td className="border border-gray-300 px-4 py-2">Controls degree of multiprogramming</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Short-Term</td>
          <td className="border border-gray-300 px-4 py-2">CPU scheduler, selects process to execute</td>
          <td className="border border-gray-300 px-4 py-2">Fastest</td>
          <td className="border border-gray-300 px-4 py-2">Minimal control</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Medium-Term</td>
          <td className="border border-gray-300 px-4 py-2">Swapping scheduler, moves processes in/out of memory</td>
          <td className="border border-gray-300 px-4 py-2">Intermediate</td>
          <td className="border border-gray-300 px-4 py-2">Reduces multiprogramming</td>
        </tr>
      </tbody>
    </table>

  </div>
);

export default Home;
