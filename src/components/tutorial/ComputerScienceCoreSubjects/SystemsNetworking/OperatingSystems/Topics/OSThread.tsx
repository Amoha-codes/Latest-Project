import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Thread in Operating System ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Thread in Operating System
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 08 Sep, 2025</p>

    {/* Intro */}
    <p className="text-lg leading-relaxed">
      A <strong>thread</strong> is the smallest unit of execution within a process. Threads are often
      called <strong>lightweight processes</strong> because they share many resources of the parent
      process but still execute independently with their own <strong>program counter</strong>,
      <strong> register set</strong>, and <strong>stack</strong>.
    </p>

    <p className="leading-relaxed">
      In multithreading systems, a single process may contain multiple threads. All threads in the
      same process share code, data, and OS resources like files, but each thread maintains its
      own execution state.
    </p>

    {/* Why We Need Threads */}
    <h2 className="text-3xl font-bold mt-8">Why Do We Need Threads?</h2>
    <p className="leading-relaxed">
      Threads are essential in modern operating systems because they:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Improve performance by allowing parallel execution.</li>
      <li>Increase responsiveness even when part of the program is busy.</li>
      <li>Enable concurrency (e.g., editing + auto-saving in MS Word).</li>
      <li>Share memory easily without complex communication.</li>
      <li>Support thread prioritization for better scheduling.</li>
      <li>Offer faster context switching than processes.</li>
      <li>Utilize multi-core processors efficiently.</li>
      <li>Share resources, reducing overhead on the OS.</li>
      <li>Increase throughput by dividing tasks into subtasks.</li>
      <li>Use synchronization tools like semaphores and locks.</li>
    </ul>

    {/* Components of a Thread */}
    <h2 className="text-3xl font-bold mt-8">Components of a Thread</h2>
    <p className="leading-relaxed">
      Each thread consists of:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Stack Space</strong> – local variables, function calls.</li>
      <li><strong>Register Set</strong> – temporary data and intermediate results.</li>
      <li><strong>Program Counter</strong> – current executing instruction.</li>
    </ul>

    {/* Types of Threads */}
    <h2 className="text-3xl font-bold mt-8">Types of Threads in OS</h2>

    <h3 className="text-2xl font-semibold mt-4">1. User-Level Threads (ULTs)</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Managed in user space using thread libraries.</li>
      <li>Very fast context switching.</li>
      <li>Do not require system calls for management.</li>
      <li>If one thread blocks, the entire process blocks.</li>
      <li>Cannot fully utilize multiprocessor systems.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">2. Kernel-Level Threads (KLTs)</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Managed directly by the OS kernel.</li>
      <li>Kernel schedules each thread independently.</li>
      <li>Suitable for true parallelism on multiple CPUs.</li>
      <li>Handles blocking system calls efficiently.</li>
      <li>Slower context switching due to kernel involvement.</li>
      <li>More complex and adds load to the scheduler.</li>
    </ul>

    {/* Difference Between Process and Thread */}
    <h2 className="text-3xl font-bold mt-8">Difference Between Process and Thread</h2>
    <p className="leading-relaxed">
      The major difference is that <strong>processes have separate memory spaces</strong>, while
      <strong>threads share the memory</strong> of the same process. Threads share code, data, and files, 
      but each thread maintains its own program counter, stack, and register values.
    </p>

  </div>
);

export default Home;
