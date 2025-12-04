import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Critical Section ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Critical Section in Synchronization
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 28 Aug, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      A <strong>critical section</strong> is a part of a program where shared resources 
      (like memory, files, or variables) are accessed by multiple processes or threads. 
      To avoid race conditions and data inconsistency, only one process/thread should execute 
      the critical section at a time using synchronization techniques. This ensures safe and predictable operations on shared resources.
    </p>

    {/* Structure Section */}
    <h2 className="text-3xl font-bold mt-8">Structure of a Critical Section</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Entry Section:</strong> Process requests permission to enter the critical section. Synchronization tools (mutex, semaphore) control access.</li>
      <li><strong>Critical Section:</strong> Code that accesses or modifies shared resources.</li>
      <li><strong>Exit Section:</strong> Process releases the lock or semaphore, allowing others to enter.</li>
      <li><strong>Remainder Section:</strong> Rest of the program not involving shared resources.</li>
    </ul>

    {/* Problem Section */}
    <h2 className="text-3xl font-bold mt-8">Critical Section Problem</h2>
    <p className="leading-relaxed">
      Shared resources include memory, global variables, files, and databases. 
      Race conditions occur when two or more processes try to update shared data simultaneously, leading to unexpected results.
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      do {'{'}<br />
      &nbsp;&nbsp;flag = 1;<br />
      &nbsp;&nbsp;while(flag); // Entry section<br />
      &nbsp;&nbsp;// Critical section<br />
      &nbsp;&nbsp;if (!flag) // Remainder section<br />
      {'}'} while(true);
    </p>

    {/* Requirements Section */}
    <h2 className="text-3xl font-bold mt-8">Requirements of a Solution</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Correctness:</strong> Shared data should remain consistent.</li>
      <li><strong>Efficiency:</strong> Minimize waiting and maximize CPU utilization.</li>
      <li><strong>Fairness:</strong> No process should be unfairly delayed or starved.</li>
    </ul>

    {/* Solution Principles */}
    <h2 className="text-3xl font-bold mt-8">Key Principles for Critical Section Solutions</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Mutual Exclusion:</strong> At most one process can be inside the critical section at a time.</li>
      <li><strong>Progress:</strong> If no process is in the critical section, processes wanting to enter should not be indefinitely postponed.</li>
      <li><strong>Bounded Waiting:</strong> Limit the waiting time for a process before it enters the critical section, preventing starvation.</li>
    </ul>

    {/* Simple Solution */}
    <h2 className="text-3xl font-bold mt-8">Solution to Critical Section Problem</h2>
    <p className="leading-relaxed">
      A simple solution involves acquiring a lock before entering the critical section and releasing it afterwards:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      acquireLock();<br />
      Process Critical Section<br />
      releaseLock();
    </p>

    {/* Real-world Examples */}
    <h2 className="text-3xl font-bold mt-8">Examples of Critical Sections in Real-world Applications</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Banking System:</strong> Updating an account balance. Without synchronization, simultaneous withdrawals can produce incorrect balances.</li>
      <li><strong>Ticket Booking System:</strong> Reserving the last available seat. Unsynchronized access may cause overbooking.</li>
      <li><strong>Print Spooler:</strong> Sending print jobs to a printer queue. Jobs may get mixed up if multiple users print at the same time.</li>
      <li><strong>File Editing (e.g., Google Docs):</strong> Saving shared documents. Simultaneous edits without proper locks can cause data loss or conflicts.</li>
    </ul>

  </div>
);

export default Home;
