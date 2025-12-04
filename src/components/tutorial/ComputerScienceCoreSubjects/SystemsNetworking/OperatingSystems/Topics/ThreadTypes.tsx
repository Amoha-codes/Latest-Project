import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Threads and Types in Operating System ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Threads and its Types in Operating System
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 08 Sep, 2025</p>

    {/* Intro */}
    <p className="text-lg leading-relaxed">
      A <strong>thread</strong> is the smallest execution unit within a process. Threads are called 
      <strong> lightweight processes</strong> because they share most resources of the parent process 
      but execute independently with their own <strong>program counter</strong>, 
      <strong> registers</strong>, and <strong>stack</strong>.
    </p>

    <p className="leading-relaxed">
      On a single-core processor, threads appear to run in parallel through rapid switching. 
      On multi-core processors, threads can run truly in parallel. Each thread can be in 
      different execution states depending on scheduling and CPU availability.
    </p>

    {/* What are Threads */}
    <h2 className="text-3xl font-bold mt-8">What Are Threads?</h2>
    <p className="leading-relaxed">
      Threads are small execution units inside a program that allow multiple tasks to run 
      simultaneously. This improves efficiency, responsiveness, and overall performance.
    </p>

    <p className="leading-relaxed">Each thread contains:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>A Program Counter</li>
      <li>A Register Set</li>
      <li>A Stack Space</li>
    </ul>

    <p className="leading-relaxed">
      Threads share the code, data, and OS resources of the process, enabling efficient 
      multitasking and parallel execution.
    </p>

    {/* Similarity Between Threads and Processes */}
    <h2 className="text-3xl font-bold mt-8">Similarity Between Threads and Processes</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Only one thread or process executes at a time on a single CPU.</li>
      <li>Both follow sequential execution inside the process.</li>
      <li>Both can create child threads or processes.</li>
      <li>Both are schedulable entities handled by the OS.</li>
      <li>Each has its own execution context (registers, PC, stack).</li>
      <li>Both can communicate using IPC or shared memory.</li>
      <li>Both can be preempted by the OS scheduler.</li>
      <li>Both can be terminated by the OS or other threads/processes.</li>
    </ul>

    {/* Differences Between Threads and Process */}
    <h2 className="text-3xl font-bold mt-8">Differences Between Threads and Processes</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Resources:</strong> Processes have separate memory; threads share memory.</li>
      <li><strong>Scheduling:</strong> Processes are scheduled by OS; threads by OS or user-level.</li>
      <li><strong>Creation:</strong> Processes created by OS; threads created by OS or programs.</li>
      <li><strong>Communication:</strong> Threads communicate easily; processes need IPC.</li>
    </ul>

    <p className="leading-relaxed">
      Threads are lighter and better for concurrency within one program, 
      while processes isolate resources and run independent programs.
    </p>

    {/* Types of Threads */}
    <h2 className="text-3xl font-bold mt-8">Types of Threads</h2>
    <p className="leading-relaxed">
      Threads are classified into two types:
    </p>

    {/* ULT */}
    <h3 className="text-2xl font-semibold mt-4">1. User Level Threads (ULT)</h3>
    <p className="leading-relaxed">
      Managed by user-level libraries. The kernel is unaware of them.
    </p>

    <p className="font-semibold">Advantages:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Works even on OS without multithreading support.</li>
      <li>Simple representation (PC, registers, stack).</li>
      <li>Fast creation and switching (no kernel calls).</li>
    </ul>

    <p className="font-semibold">Disadvantages:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Poor coordination between ULT and kernel.</li>
      <li>If one thread blocks, whole process blocks.</li>
    </ul>

    {/* KLT */}
    <h3 className="text-2xl font-semibold mt-4">2. Kernel Level Threads (KLT)</h3>
    <p className="leading-relaxed">
      Managed directly by the OS kernel. The kernel maintains a global thread table.
    </p>

    <p className="font-semibold">Advantages:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Kernel can schedule each thread independently.</li>
      <li>Efficient handling of blocking calls.</li>
    </ul>

    <p className="font-semibold">Disadvantages:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Slower due to kernel-level context switching.</li>
      <li>Requires separate thread control blocks (overhead).</li>
    </ul>

    {/* Threading Issues */}
    <h2 className="text-3xl font-bold mt-8">Threading Issues</h2>

    <h3 className="text-xl font-semibold mt-4">1. fork() and exec()</h3>
    <p className="leading-relaxed">
      Multithreading complicates how fork() behaves—OS may duplicate all threads 
      or only the calling thread. exec() replaces the entire process including all threads.
    </p>

    <h3 className="text-xl font-semibold mt-4">2. Signal Handling</h3>
    <p className="leading-relaxed">
      Signals notify processes of events. Each signal can be handled by default handlers or 
      user-defined handlers. Multithreaded systems must manage which thread receives a signal.
    </p>

    <h3 className="text-xl font-semibold mt-4">3. Thread Cancellation</h3>
    <p className="leading-relaxed">
      Threads may be terminated early. Cancellation can be:
    </p>
    <ul className="list-disc ml-6">
      <li><strong>Asynchronous:</strong> Terminated immediately.</li>
      <li><strong>Deferred:</strong> Thread checks periodically and exits cleanly.</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">4. Thread-Local Storage (TLS)</h3>
    <p className="leading-relaxed">
      Allows each thread to maintain its own private data independent of other threads.
    </p>

    <h3 className="text-xl font-semibold mt-4">5. Scheduler Activations</h3>
    <p className="leading-relaxed">
      A communication mechanism between kernel and thread library. Kernel provides virtual 
      processors, and the user-level library schedules threads on them.
    </p>

    {/* Advantages and Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages of Threading</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Improved responsiveness</li>
      <li>Shared resources reduce memory use</li>
      <li>Increased concurrency on multi-core systems</li>
      <li>Lower cost than process creation</li>
      <li>Faster context switching than processes</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Disadvantages of Threading</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Increased programming complexity</li>
      <li>Risk of resource contention</li>
      <li>Difficult to optimize for different hardware</li>
      <li>Debugging multithreaded programs is harder</li>
    </ul>

  </div>
);

export default Home;
