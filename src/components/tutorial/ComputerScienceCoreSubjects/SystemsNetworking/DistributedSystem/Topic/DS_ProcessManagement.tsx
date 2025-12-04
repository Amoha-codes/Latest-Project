import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Process Management ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction of Process Management
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 02 Oct, 2025</p>

    <p className="text-lg leading-relaxed">
      Process management is a core function of an Operating System (OS). It handles the creation, 
      scheduling, execution, synchronization, and termination of processes to ensure efficient CPU 
      utilization and smooth system performance.
    </p>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Single-tasking systems</strong>: Only one process runs at a time—simple to manage.</li>
      <li><strong>Multitasking systems</strong>: Multiple processes share CPU time, requiring scheduling.</li>
      <li><strong>Resource sharing</strong>: Processes may share memory or files, demanding proper coordination.</li>
      <li><strong>Process synchronization</strong>: Prevents conflicts when processes interact or access shared resources.</li>
    </ul>

    {/* CPU-bound vs IO-bound */}
    <h2 className="text-3xl font-bold mt-8">CPU-Bound vs I/O-Bound Processes</h2>
    <p className="leading-relaxed">
      A <strong>CPU-bound</strong> process spends more time performing computations, whereas an 
      <strong> I/O-bound</strong> process spends more time waiting for input/output operations.
    </p>

    <p className="leading-relaxed">
      Because the CPU is much faster than I/O devices, if a process begins an I/O operation, the CPU 
      should switch to another ready process instead of sitting idle. This is the foundation of 
      CPU scheduling in modern operating systems.
    </p>

    {/* Process Management Tasks */}
    <h2 className="text-3xl font-bold mt-8">Process Management Tasks</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Process Creation & Termination:</strong> Includes assigning a PID, allocating memory, 
        and setting up the PCB. Termination releases all allocated resources.
      </li>
      <li>
        <strong>CPU Scheduling:</strong> Decides which process gets the CPU next to maximize utilization.
      </li>
      <li>
        <strong>Deadlock Handling:</strong> Ensures the system avoids circular dependencies where 
        processes wait indefinitely.
      </li>
      <li>
        <strong>Inter-Process Communication (IPC):</strong> Includes shared memory, pipes, and message passing.
      </li>
      <li>
        <strong>Process Synchronization:</strong> Ensures safe access to shared resources using semaphores, 
        monitors, etc.
      </li>
    </ul>

    {/* Context Switching */}
    <h2 className="text-3xl font-bold mt-8">Context Switching of a Process</h2>
    <p className="leading-relaxed">
      <strong>Context switching</strong> is the process of saving the state of a running process and loading 
      the state of another process. This allows multitasking by switching the CPU between processes.
    </p>

    {/* GATE Questions */}
    <h2 className="text-3xl font-bold mt-8">GATE-CS Questions on Process Management</h2>

    {/* Q1 */}
    <p className="font-semibold mt-4">
      Q1. Which of the following need not necessarily be saved during a context switch? (GATE-CS-2000)
    </p>
    <ul className="list-disc ml-6 leading-relaxed text-sm">
      <li>(A) General purpose registers</li>
      <li>(B) Translation lookaside buffer</li>
      <li>(C) Program counter</li>
      <li>(D) All of the above</li>
    </ul>
    <p className="font-semibold">Answer: (B)</p>

    <p className="leading-relaxed text-sm">
      TLB entries may become invalid on a context switch, and the simplest solution is to flush the TLB. 
      The program counter and CPU registers must be saved to resume execution later.
    </p>

    {/* Q2 */}
    <p className="font-semibold mt-4">
      Q2. Time taken to switch between user → kernel mode is t₁, and switching between two processes is t₂.  
      Which is TRUE? (GATE-CS-2011)
    </p>
    <ul className="list-disc ml-6 leading-relaxed text-sm">
      <li>(A) t₁ &gt; t₂</li>
      <li>(B) t₁ = t₂</li>
      <li>(C) t₁ {"<"} t₂</li>
      <li>(D) Nothing can be said</li>
    </ul>
    <p className="font-semibold">Answer: (C)</p>

    <p className="leading-relaxed text-sm">
      Switching between two processes involves saving and loading multiple registers and PCB data, making 
      it slower than switching modes.
    </p>

  </div>
);

export default Home;
