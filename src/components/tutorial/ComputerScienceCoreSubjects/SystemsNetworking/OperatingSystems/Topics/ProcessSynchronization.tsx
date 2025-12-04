import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Process Synchronization ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Process Synchronization
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 30 Aug, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      <strong>Process Synchronization</strong> is a mechanism in operating systems used to manage the execution of multiple processes accessing shared resources. Its main goals are to ensure data consistency, prevent race conditions, and avoid deadlocks in a multi-process environment.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Processes</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Independent Process:</strong> Its execution does not affect other processes.</li>
      <li><strong>Cooperative Process:</strong> Its execution can affect or be affected by other processes.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Problems Due to Improper Synchronization</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Inconsistency:</strong> Occurs when multiple processes access shared data simultaneously without synchronization.</li>
      <li><strong>Loss of Data:</strong> Happens when one process overwrites data before another process finishes.</li>
      <li><strong>Deadlock:</strong> Two or more processes get stuck waiting for each other to release resources.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Role of Synchronization in IPC</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Preventing Race Conditions</li>
      <li>Mutual Exclusion (only one process in critical section)</li>
      <li>Process Coordination (e.g., producer-consumer)</li>
      <li>Deadlock Prevention</li>
      <li>Safe Communication</li>
      <li>Fairness to prevent starvation</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Types of Process Synchronization</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Competitive:</strong> Processes compete for shared resources. Improper synchronization may cause inconsistency or data loss.</li>
      <li><strong>Cooperative:</strong> Processes affect each other. Improper synchronization may lead to deadlock.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Example</h2>
    <p className="leading-relaxed">
      Consider the Linux command:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm font-mono">
      ps | grep "chrome" | wc
    </p>
    <p className="leading-relaxed">
      Here, <strong>ps</strong> produces a list of processes, <strong>grep</strong> filters it, and <strong>wc</strong> counts the lines. This demonstrates cooperative processes where some processes produce data and others consume it.
    </p>

    <h2 className="text-3xl font-bold mt-8">Conditions That Require Synchronization</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Critical Section:</strong> Code that can be accessed by only one process at a time.</li>
      <li><strong>Race Condition:</strong> Occurs when results depend on the execution order of processes in the critical section.</li>
      <li><strong>Pre-emption:</strong> Stopping a running process to give CPU to another may cause inconsistent shared data if synchronization is not used.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      Process synchronization is essential in multi-process systems to maintain consistency, prevent race conditions, and avoid deadlocks while coordinating shared resource access.
    </p>

  </div>
);

export default Home;
