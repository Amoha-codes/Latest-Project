import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Solutions to Process Synchronization Problems ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Solutions to Process Synchronization Problems
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 01 Sep, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      In a multiprogramming environment, multiple processes often compete for shared resources like memory, CPU, or files. 
      If not managed properly, this leads to race conditions where the final output depends on the order of execution. 
      To avoid such issues, process synchronization techniques are used. The major approaches are:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Interrupt Disable</li>
      <li>Lock (Software-based & Hardware-based)</li>
      <li>Operating System (OS)-based Solutions</li>
    </ul>

    {/* Interrupt Disable */}
    <h2 className="text-3xl font-bold mt-8">1. Interrupt Disable</h2>
    <p className="leading-relaxed">
      This method allows a process to disable all hardware interrupts before entering its critical section. 
      Since no interrupts can occur, the process cannot be preempted and executes safely.
    </p>
    <p className="leading-relaxed font-semibold">Problems:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Works only in uniprocessor systems; in multiprocessor systems, other CPUs can still preempt.</li>
      <li>If interrupts are not re-enabled, the system may hang.</li>
      <li>Gives too much power to processes, which may misuse it.</li>
    </ul>

    {/* Lock */}
    <h2 className="text-3xl font-bold mt-8">2. Lock</h2>
    <p className="leading-relaxed">
      Locks ensure that only one process at a time can enter the critical section. 
      A process must “acquire” the lock before entering and “release” it after exiting. Others must wait if the lock is held.
    </p>

    <h3 className="text-2xl font-semibold mt-4">(a) Software-Based Locks</h3>
    <p className="leading-relaxed">
      Implemented using shared variables (flags, turn variables, ticket numbers) to coordinate access. Examples:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Peterson’s Algorithm: works for two processes.</li>
      <li>Dekker’s Algorithm: one of the earliest algorithms for two processes.</li>
      <li>Bakery Algorithm: works for multiple processes using a “take-a-number” system.</li>
    </ul>
    <p className="leading-relaxed font-semibold">Problems:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Busy waiting wastes CPU cycles.</li>
      <li>Complex for multiple processes.</li>
      <li>Not suitable for modern multiprocessor systems.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">(b) Hardware-Based Locks</h3>
    <p className="leading-relaxed">
      Modern CPUs provide atomic instructions for locks, suitable for multiprocessor systems.
      Atomic means indivisible: once started, the operation completes fully without interruption.
    </p>
    <p className="leading-relaxed font-semibold">CPU Instructions:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Test-and-Set (TSL): Atomically tests and sets a lock.</li>
      <li>Compare-and-Swap (CAS): Atomically swaps memory value if it matches an expected value.</li>
      <li>Spinlocks: Use TSL or CAS; processes spin (busy wait) until the lock is free.</li>
    </ul>
    <p className="leading-relaxed font-semibold">Limitations:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Busy waiting wastes CPU cycles.</li>
      <li>No fairness guarantee; starvation may occur.</li>
      <li>Only solves mutual exclusion, not higher-level synchronization.</li>
    </ul>

    {/* Mutex */}
    <h2 className="text-3xl font-bold mt-8">2.1 Mutex (Mutual Exclusion Lock)</h2>
    <p className="leading-relaxed">
      A mutex is a higher-level lock abstraction often built on hardware primitives. 
      If unavailable, the process is blocked until the lock is released, avoiding busy waiting. 
      Mutexes ensure fair scheduling and are widely used in operating systems and thread libraries.
    </p>

    {/* Semaphores and Monitors */}
    <h2 className="text-3xl font-bold mt-8">3. Semaphores and Monitors</h2>
    <p className="leading-relaxed">
      Locks solve basic mutual exclusion, but higher-level management is required. Semaphores and monitors address this:
    </p>

    <h3 className="text-2xl font-semibold mt-4">(a) Semaphores</h3>
    <p className="leading-relaxed">
      A semaphore is an integer accessed with two atomic operations: <strong>wait()</strong> (decrement, block if {"<"} 0) and <strong>signal()</strong> (increment, wake a waiting process). 
      Removes busy waiting by blocking processes when resources are unavailable.
    </p>

    <h3 className="text-2xl font-semibold mt-4">(b) Monitors</h3>
    <p className="leading-relaxed">
      A monitor is a high-level construct combining mutual exclusion and condition variables. 
      Only one process executes inside a monitor at a time. Condition variables (<strong>wait</strong>, <strong>signal</strong>) simplify coordination.
    </p>

  </div>
);

export default Home;
