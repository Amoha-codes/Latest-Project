import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Scheduler vs Dispatcher ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Difference between Dispatcher and Scheduler
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 24 Oct, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      In a multitasking operating system, multiple processes compete for CPU time. 
      The operating system uses two components to manage this efficiently: the <strong>Scheduler</strong> and the <strong>Dispatcher</strong>.
      While they work together to decide which process runs and how it executes, they perform distinct functions for optimal CPU utilization.
    </p>

    {/* Scheduler Section */}
    <h2 className="text-3xl font-bold mt-8">Scheduler</h2>
    <p className="leading-relaxed">
      The scheduler selects processes for execution and manages process queues. There are three types of schedulers:
    </p>

    <h3 className="text-2xl font-semibold mt-4">1. Long-Term (Job) Scheduler</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Moves processes from secondary memory (job pool) to main memory (ready queue).</li>
      <li>Decides which programs to admit for processing.</li>
      <li>Controls the degree of multiprogramming.</li>
      <li><strong>Example:</strong> Deciding whether a newly submitted process should be loaded into memory or kept in secondary storage.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">2. Medium-Term Scheduler</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Suspends and resumes processes based on system status.</li>
      <li>Manages swapping to reduce memory load.</li>
      <li>Reintroduces suspended processes when resources are available.</li>
      <li>Helps maintain a balanced level of multiprogramming.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">3. Short-Term (CPU) Scheduler</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Dispatches ready processes to the CPU for execution.</li>
      <li>Selects one process in memory to execute next.</li>
      <li>Runs most frequently and works with algorithms such as FCFS, SJF, Round Robin, and Priority Scheduling.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Advantages of Schedulers</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Optimized CPU utilization: CPU is always busy with execution.</li>
      <li>Fair process handling: Each process gets equitable CPU time.</li>
      <li>Better process management: Manages transitions among ready, running, and waiting states.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Disadvantages of Schedulers</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Complexity: Designing and tuning can be challenging for different workloads.</li>
      <li>Overhead: Frequent scheduling decisions consume CPU cycles, slightly reducing performance.</li>
    </ul>

    {/* Dispatcher Section */}
    <h2 className="text-3xl font-bold mt-8">Dispatcher</h2>
    <p className="leading-relaxed">
      Once the scheduler selects the next process, the dispatcher takes over. 
      It is a small, specialized program that gives control of the CPU to the chosen process and performs low-level tasks to start execution.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Functions of Dispatcher</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Context switching: Saves the current process state and loads the next process state.</li>
      <li>Switching to user mode: Ensures the process runs in user mode for security and isolation.</li>
      <li>Jumping to the correct program location: Resumes the process from the point it was stopped.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Advantages of Dispatcher</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Fast process switching: Reduces delay during context switching.</li>
      <li>Efficient CPU allocation: Enables smooth multitasking by quickly assigning CPU time.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Disadvantages of Dispatcher</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Dispatch latency: Small delay occurs during context switching and control transfer.</li>
      <li>Scheduler dependency: Dispatcher relies on the scheduler’s selection and cannot work independently.</li>
    </ul>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Difference Between Scheduler and Dispatcher</h2>
    <table className="table-auto border-collapse border border-gray-300 w-full text-left">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">Property</th>
          <th className="border border-gray-300 px-4 py-2">Scheduler</th>
          <th className="border border-gray-300 px-4 py-2">Dispatcher</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Definition</td>
          <td className="border border-gray-300 px-4 py-2">Decides which process should execute next</td>
          <td className="border border-gray-300 px-4 py-2">Transfers CPU control to the selected process</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Purpose</td>
          <td className="border border-gray-300 px-4 py-2">Select process and determine execution order</td>
          <td className="border border-gray-300 px-4 py-2">Start execution of the selected process</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Types</td>
          <td className="border border-gray-300 px-4 py-2">Long-term, Medium-term, Short-term</td>
          <td className="border border-gray-300 px-4 py-2">Single module, no types</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Dependency</td>
          <td className="border border-gray-300 px-4 py-2">Works independently</td>
          <td className="border border-gray-300 px-4 py-2">Dependent on scheduler</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Algorithm</td>
          <td className="border border-gray-300 px-4 py-2">FCFS, SJF, RR, Priority, etc.</td>
          <td className="border border-gray-300 px-4 py-2">No specific algorithm</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Time Taken</td>
          <td className="border border-gray-300 px-4 py-2">Negligible but occurs less frequently</td>
          <td className="border border-gray-300 px-4 py-2">Dispatch latency (very short)</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Functions</td>
          <td className="border border-gray-300 px-4 py-2">Process selection, queue management</td>
          <td className="border border-gray-300 px-4 py-2">Context switching, mode change, process start</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Execution Time</td>
          <td className="border border-gray-300 px-4 py-2">Takes longer</td>
          <td className="border border-gray-300 px-4 py-2">Executes very quickly</td>
        </tr>
      </tbody>
    </table>

    <p className="leading-relaxed mt-4">
      <strong>Note:</strong> The scheduler decides what processes are executed and when, 
      while the dispatcher performs the actual CPU allocation to those processes.
    </p>

  </div>
);

export default Home;
