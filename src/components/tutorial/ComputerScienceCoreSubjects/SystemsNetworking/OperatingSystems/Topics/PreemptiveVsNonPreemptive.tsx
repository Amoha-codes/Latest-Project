import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Preemptive vs Non-Preemptive Scheduling ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Preemptive and Non-Preemptive CPU Scheduling
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 21 Sep, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      CPU scheduling in operating systems decides which process in the ready queue executes on the CPU next. 
      The goal is to efficiently utilize the processor while minimizing waiting and response times. 
      By selecting an optimal execution order, CPU scheduling improves system performance, supports multitasking, and enhances user experience.
    </p>

    {/* Types of Scheduling */}
    <h2 className="text-3xl font-bold mt-8">Types of Scheduling</h2>
    <p className="leading-relaxed">
      CPU scheduling can be broadly classified into <strong>Preemptive</strong> and <strong>Non-Preemptive</strong> scheduling.
    </p>

    {/* Preemptive Scheduling */}
    <h2 className="text-3xl font-bold mt-8">Preemptive Scheduling</h2>
    <p className="leading-relaxed">
      In preemptive scheduling, the operating system can interrupt a running process and allocate the CPU to another process, usually due to priority rules or time-sharing policies. 
      A process may move from <strong>Running → Ready</strong> before it finishes execution.
    </p>
    <p className="leading-relaxed font-semibold">Examples:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Round Robin</li>
      <li>Shortest Remaining Time First (SRTF)</li>
      <li>Priority Scheduling (preemptive)</li>
    </ul>
    <p className="leading-relaxed font-semibold">Advantages:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Prevents one process from monopolizing the CPU</li>
      <li>Better average response time in multi-user systems</li>
      <li>Widely used in modern OS (Windows, Linux, macOS)</li>
    </ul>
    <p className="leading-relaxed font-semibold">Disadvantages:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>More complex to implement</li>
      <li>Higher overhead due to context switching</li>
      <li>Can cause starvation of low-priority processes</li>
      <li>Risk of concurrency issues if preempted during shared resource access</li>
    </ul>

    {/* Non-Preemptive Scheduling */}
    <h2 className="text-3xl font-bold mt-8">Non-Preemptive Scheduling</h2>
    <p className="leading-relaxed">
      In non-preemptive scheduling, once a process starts using the CPU, it runs until completion or until it moves to a waiting state. 
      The OS cannot forcibly take the CPU away from the running process.
    </p>
    <p className="leading-relaxed font-semibold">Examples:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>First Come First Serve (FCFS)</li>
      <li>Shortest Job First (SJF)</li>
      <li>Priority Scheduling (non-preemptive)</li>
    </ul>
    <p className="leading-relaxed font-semibold">Advantages:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Easy to implement</li>
      <li>Minimal scheduling overhead</li>
      <li>Uses fewer computational resources</li>
    </ul>
    <p className="leading-relaxed font-semibold">Disadvantages:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Vulnerable to denial-of-service by long processes</li>
      <li>Cannot implement time-sharing effectively; higher average response time</li>
    </ul>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Comparison: Preemptive vs Non-Preemptive Scheduling</h2>
    <table className="table-auto border-collapse border border-gray-300 w-full text-left">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">Parameter</th>
          <th className="border border-gray-300 px-4 py-2">Preemptive Scheduling</th>
          <th className="border border-gray-300 px-4 py-2">Non-Preemptive Scheduling</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Basic</td>
          <td className="border border-gray-300 px-4 py-2">CPU allocated for limited time; can be preempted</td>
          <td className="border border-gray-300 px-4 py-2">CPU allocated until process finishes or waits</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Interrupt</td>
          <td className="border border-gray-300 px-4 py-2">Process can be interrupted anytime</td>
          <td className="border border-gray-300 px-4 py-2">Process cannot be interrupted until it finishes or waits</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Starvation</td>
          <td className="border border-gray-300 px-4 py-2">Low-priority processes may starve if high-priority processes keep arriving</td>
          <td className="border border-gray-300 px-4 py-2">Long-running processes may delay shorter new processes</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Overhead</td>
          <td className="border border-gray-300 px-4 py-2">Higher due to frequent context switching</td>
          <td className="border border-gray-300 px-4 py-2">Minimal scheduling overhead</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Response Time</td>
          <td className="border border-gray-300 px-4 py-2">Lower average response time</td>
          <td className="border border-gray-300 px-4 py-2">Higher average response time</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Decision Making</td>
          <td className="border border-gray-300 px-4 py-2">Scheduler decides based on priority/time slice</td>
          <td className="border border-gray-300 px-4 py-2">Process runs until it finishes; OS follows instructions</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Concurrency Overhead</td>
          <td className="border border-gray-300 px-4 py-2">Higher (may preempt during shared resource access)</td>
          <td className="border border-gray-300 px-4 py-2">Lower (process never preempted)</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Examples</td>
          <td className="border border-gray-300 px-4 py-2">Round Robin, SRTF</td>
          <td className="border border-gray-300 px-4 py-2">FCFS, SJF</td>
        </tr>
      </tbody>
    </table>

  </div>
);

export default Home;
