import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Operating System Tutorial ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Operating System Tutorial
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 27 Sep, 2025</p>

    {/* ================= Introduction ================= */}
    <p className="text-lg leading-relaxed">
      An Operating System (OS) is a software that manages and handles the hardware and 
      software resources of a computing device. It is responsible for controlling all the 
      activities and sharing of resources among different running applications.
    </p>

    <p className="leading-relaxed">
      It is a low-level software that includes essential functions such as processor 
      management, memory management, file handling, device management, and more. 
      An operating system works like a **government** for your system—managing different 
      resources like various departments.
    </p>

    <p className="leading-relaxed font-semibold">
      Examples: Linux, Unix, Windows 11, MS-DOS, Android, macOS, iOS
    </p>

    <h2 className="text-3xl font-bold mt-8">Operating System Diagram</h2>
    <p className="leading-relaxed">
      The OS sits between the user and the hardware, ensuring proper command execution, 
      memory allocation, file handling, and process management.
    </p>

    {/* ================= BASICS ================= */}
    <h2 className="text-3xl font-bold mt-10">Basics</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Introduction</li>
      <li>Types of OS</li>
      <li>Kernel in OS</li>
      <li>System Call</li>
      <li>System Initialization</li>
    </ul>

    {/* ================= PROCESS SCHEDULING ================= */}
    <h2 className="text-3xl font-bold mt-10">Process Scheduling</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Process Introduction</li>
      <li>Process Table and Control Block</li>
      <li>Process Management Introduction</li>
      <li>Process States</li>
      <li>Process Scheduler</li>
      <li>CPU Scheduling Algorithms</li>
      <li>Preemptive vs Non-Preemptive</li>
      <li>Dispatcher vs Scheduler</li>
      <li>Starvation and Aging</li>
      <li>Quiz: CPU Scheduling</li>
    </ul>

    {/* ================= PROCESS SYNCHRONIZATION ================= */}
    <h2 className="text-3xl font-bold mt-10">Process Synchronization</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Inter Process Communication</li>
      <li>Process Synchronization</li>
      <li>Race Condition</li>
      <li>Critical Section</li>
      <li>Solutions to Synchronization Problems</li>
      <li>Peterson’s Algorithm</li>
      <li>Dekker’s Algorithm</li>
      <li>Bakery Algorithm</li>
      <li>Hardware Based Solutions</li>
      <li>Semaphores</li>
      <li>Mutex vs Semaphore</li>
      <li>Monitors</li>
      <li>Priority Inversion</li>
      <li>Classical IPC Problems</li>
      <li>Quiz: Process Synchronization</li>
    </ul>

    {/* ================= DEADLOCK ================= */}
    <h2 className="text-3xl font-bold mt-10">Deadlock</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Deadlock Introduction</li>
      <li>Deadlock Handling</li>
      <li>Deadlock Prevention</li>
      <li>Banker's Algorithm</li>
      <li>Deadlock Detection & Recovery</li>
      <li>Deadlock, Starvation & Livelock</li>
      <li>Resource Allocation Graph (RAG)</li>
      <li>Methods of Resource Allocation</li>
      <li>Program for Deadlock Free Condition</li>
      <li>Quiz: Deadlock</li>
    </ul>

    {/* ================= MULTITHREADING ================= */}
    <h2 className="text-3xl font-bold mt-10">Multithreading</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Operating System | Thread</li>
      <li>Thread Types</li>
      <li>User Level vs Kernel Level Thread</li>
      <li>Process-based & Thread-based Multitasking</li>
      <li>Multithreading Models</li>
      <li>Benefits of Multithreading</li>
      <li>Remote Procedure Call (RPC)</li>
      <li>Quiz: Multithreading</li>
    </ul>

    {/* ================= MEMORY MANAGEMENT ================= */}
    <h2 className="text-3xl font-bold mt-10">Memory Management</h2>

    <h3 className="text-xl font-semibold mt-4">1. Basics</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Introduction to Memory Units</li>
      <li>Memory Management in Operating System</li>
      <li>Logical & Physical Address</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">2. Contiguous Allocation</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Implementation of Contiguous Memory</li>
      <li>Internal Fragmentation</li>
      <li>External Fragmentation</li>
      <li>Next Fit Algorithm</li>
      <li>Buddy System</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">3. Non-Contiguous Allocation</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Paging</li>
      <li>Segmentation</li>
      <li>Page Table Entries</li>
      <li>Paged Segmentation & Segmented Paging</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">4. Advanced Memory Concepts</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Overlays</li>
      <li>Virtual Memory</li>
      <li>Demand Paging</li>
      <li>Page Fault Handling</li>
      <li>Swap Space</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">5. Page Replacement & Thrashing</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Page Replacement Algorithms</li>
      <li>Belady’s Anomaly</li>
      <li>Second Chance / Clock Policy</li>
      <li>Thrashing Control</li>
      <li>Working Set</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">6. Kernel & System-Level Concepts</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Kernel Memory Allocation (Buddy & Slab)</li>
      <li>Memory Interleaving</li>
      <li>OS-based Virtualization</li>
      <li>Quiz: Memory Management</li>
    </ul>

    {/* ================= DISK & FILE SYSTEM ================= */}
    <h2 className="text-3xl font-bold mt-10">Disk Management</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>File Systems</li>
      <li>Unix File System</li>
      <li>Directory Management Script</li>
      <li>File Directory | Path Name</li>
      <li>Directory Structures</li>
      <li>File Allocation Methods</li>
      <li>File Access Methods</li>
      <li>Secondary Memory</li>
      <li>Hard Disk Drive</li>
      <li>Disk Scheduling Algorithms</li>
      <li>Program for SSTF Disk Scheduling</li>
      <li>What is Spooling?</li>
      <li>Spooling vs Buffering</li>
      <li>Free Space Management</li>
      <li>Quiz: Input/Output Systems</li>
    </ul>
  </div>
);

export default Home;
