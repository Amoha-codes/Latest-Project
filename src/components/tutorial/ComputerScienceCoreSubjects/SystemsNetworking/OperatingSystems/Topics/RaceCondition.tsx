import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Race Condition ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Race Condition
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 04 Sep, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      A <strong>race condition</strong> occurs when two or more processes or threads access and modify the same data at the same time, and the final result depends on the order of execution. Without proper coordination, this can lead to incorrect or unpredictable results.
      For example, if two people update the same bank account simultaneously without checking each other’s changes, the final balance may be wrong.
    </p>

    {/* Key Concepts Section */}
    <h2 className="text-3xl font-bold mt-8">Key Concepts</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Shared Resource:</strong> A variable, file, memory location, or device accessed by multiple processes.</li>
      <li><strong>Concurrency:</strong> Multiple processes or threads executing simultaneously or overlapping in execution.</li>
      <li><strong>Non-Atomic Operations:</strong> Operations like read-modify-write that can be interrupted, causing inconsistent states.</li>
    </ul>

    {/* Causes Section */}
    <h2 className="text-3xl font-bold mt-8">Causes of Race Conditions</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Simultaneous Access: Multiple processes read/write the same shared resource at the same time.</li>
      <li>Non-Atomic Updates: Increment or decrement operations are not indivisible.</li>
      <li>Lack of Synchronization: No locks, semaphores, or monitors are used.</li>
      <li>Improper Scheduling: OS scheduler interrupts processes at critical moments.</li>
    </ul>

    {/* Example Section */}
    <h2 className="text-3xl font-bold mt-8">Example: Two Processes Updating a Shared Variable</h2>
    <p className="leading-relaxed">
      Let’s take a shared variable <strong>balance = 100</strong> and two processes P1 and P2:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>P1 wants to add 10 to balance.</li>
      <li>P2 wants to subtract 10 from balance.</li>
    </ul>

    <p className="leading-relaxed">
      <strong>Scenario without synchronization:</strong>
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      1. P1 reads balance = 100 and prepares to add 10.<br />
      2. Before updating, P1 is interrupted by P2.<br />
      3. P2 reads balance = 100 (ignoring P1’s action) and subtracts 10 → balance = 90.<br />
      4. P1 resumes and writes balance = 110 → final value is incorrect.
    </p>

    {/* Effects Section */}
    <h2 className="text-3xl font-bold mt-8">Effects of Race Conditions</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Data Corruption: Shared data becomes inconsistent.</li>
      <li>Unpredictable Behavior: Output may vary every execution.</li>
      <li>Security Risks: Can be exploited, e.g., in banking or authentication.</li>
      <li>System Crashes: Critical data corruption may lead to failures.</li>
    </ul>

    {/* Prevention Section */}
    <h2 className="text-3xl font-bold mt-8">Prevention Techniques</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li><strong>Mutex (Mutual Exclusion):</strong> Only one process can enter the critical section at a time.</li>
      <li><strong>Semaphores:</strong> Counting or binary semaphores control access to resources.</li>
      <li><strong>Monitors:</strong> High-level constructs managing shared resources.</li>
      <li><strong>Atomic Operations:</strong> Use hardware/software-supported atomic instructions.</li>
      <li><strong>Disable Interrupts:</strong> For kernel-level programming, prevent context switches in critical sections.</li>
      <li><strong>Proper Scheduling:</strong> Ensure the scheduler does not preempt critical section execution.</li>
    </ol>

  </div>
);

export default Home;
