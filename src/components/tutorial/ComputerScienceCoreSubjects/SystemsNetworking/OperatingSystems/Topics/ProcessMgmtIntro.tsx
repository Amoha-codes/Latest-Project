import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Process Management ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Process Management
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 02 Oct, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Process management is a core function of an Operating System (OS). It deals with creating,
      scheduling, and coordinating processes to ensure efficient CPU utilization and smooth
      system performance.
    </p>

    <h2 className="text-3xl font-bold mt-8">Key Points to Understand</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Single-tasking systems: Only one process runs at a time, so process management is simpler.</li>
      <li>Multiprogramming/multitasking systems: Multiple processes share the CPU, requiring efficient scheduling.</li>
      <li>Resource sharing: Active processes often share memory, files, or other resources.</li>
      <li>Process synchronization: Needed to avoid conflicts when processes interact or communicate.</li>
    </ul>

    {/* CPU-bound vs IO-bound */}
    <h2 className="text-3xl font-bold mt-8">CPU-Bound vs I/O-Bound Processes</h2>
    <p className="leading-relaxed">
      A <strong>CPU-bound</strong> process requires more CPU time and spends more time in the running state.
      An <strong>I/O-bound</strong> process performs frequent I/O operations and spends more time in the waiting state.
    </p>

    <p className="leading-relaxed">
      Because the CPU is much faster than I/O devices, the OS must assign the CPU to another ready
      process whenever the current process begins an I/O operation. This maximizes CPU utilization.
    </p>

    {/* Process Management Tasks */}
    <h2 className="text-3xl font-bold mt-8">Process Management Tasks</h2>
    <p className="leading-relaxed">
      Process management plays a major role in multiprogramming or multitasking operating systems.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Process Creation and Termination:</strong> Involves assigning a PID, creating the PCB,
        and allocating resources. Termination frees the allocated resources.
      </li>

      <li>
        <strong>CPU Scheduling:</strong> Ensures that multiple processes using the CPU execute smoothly
        and efficiently.
      </li>

      <li>
        <strong>Deadlock Handling:</strong> Prevents or resolves situations where processes cannot
        proceed due to cyclic dependencies.
      </li>

      <li>
        <strong>Inter-Process Communication (IPC):</strong> Provides mechanisms such as shared memory
        and message passing for processes to communicate.
      </li>

      <li>
        <strong>Process Synchronization:</strong> Coordinates the execution of multiple processes to
        prevent conflicts while accessing shared resources.
      </li>
    </ul>

    <p className="leading-relaxed">
      Processes go through various states before termination, and the OS must update the PCB during
      these transitions. Once a process completes its task, the OS removes its PCB.
    </p>

    {/* Context Switching */}
    <h2 className="text-3xl font-bold mt-8">Context Switching of a Process</h2>
    <p className="leading-relaxed">
      Context switching refers to saving the context of the currently running process and loading
      the context of the next process. This transitions a process between running and ready states.
    </p>

    {/* GATE Questions */}
    <h2 className="text-3xl font-bold mt-8">GATE-CS Questions on Process Management</h2>

    <h3 className="text-xl font-semibold mt-4">Q1. (GATE-CS-2000)</h3>
    <p className="leading-relaxed">Which of the following need NOT be saved during a context switch?</p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>A) General purpose registers</li>
      <li>B) Translation lookaside buffer</li>
      <li>C) Program counter</li>
      <li>D) All of the above</li>
    </ul>

    <p className="font-semibold">Answer: (B)</p>

    <p className="leading-relaxed">
      A context switch requires saving all essential registers such as the program counter so a
      process can resume later. However, TLB entries do not need to be saved; they are usually
      flushed because the virtual address mapping changes across processes.
    </p>

    <h3 className="text-xl font-semibold mt-4">Q2. (GATE-CS-2011)</h3>
    <p className="leading-relaxed">
      If t₁ is the time to switch between user and kernel mode, and t₂ is the time to switch between
      two processes, which is TRUE?
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>A) t₁ &gt; t₂</li>
      <li>B) t₁ = t₂</li>
      <li>C) t₁ &lt; t₂</li>
      <li>D) Nothing can be said</li>
    </ul>

    <p className="font-semibold">Answer: (C)</p>

    <p className="leading-relaxed">
      Switching between user and kernel mode is faster because it does not require saving the entire
      process context. A full process switch requires storing registers, PC, and flushing the TLB,
      making t₂ greater than t₁.
    </p>
  </div>
);

export default Home;
