import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Heading ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Process-Based and Thread-Based Multitasking
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 19 Aug, 2025</p>

    {/* ================= Intro ================= */}
    <p className="text-lg leading-relaxed">
      Multitasking is the ability of an operating system to run multiple tasks 
      at the same time. It creates the illusion of simultaneous execution by 
      switching quickly between tasks through <strong>context switching</strong>. 
      The CPU allocates short time slices to each task, ensuring smooth execution 
      and preventing any single task from dominating system resources.
    </p>

    {/* How Multitasking Works */}
    <h2 className="text-3xl font-bold mt-8">How Multitasking Works</h2>
    <p className="leading-relaxed">Multitasking is achieved through:</p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Time Slicing:</strong> Dividing CPU time among tasks in small slices.</li>
      <li><strong>Context Switching:</strong> Saving the state of one task and restoring another.</li>
      <li><strong>Resource Management:</strong> Efficient allocation of memory, I/O devices, and CPU cycles.</li>
    </ul>

    {/* Types of Multitasking */}
    <h2 className="text-3xl font-bold mt-8">Types of Multitasking</h2>
    <p className="leading-relaxed">Multitasking can be classified into two types based on the execution unit:</p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Process-Based Multitasking</strong></li>
      <li><strong>Thread-Based Multitasking</strong></li>
    </ul>

    {/* ================= Process-Based Multitasking ================= */}
    <h2 className="text-3xl font-bold mt-8">Process-Based Multitasking</h2>
    <p className="leading-relaxed">
      In process-based multitasking, two or more independent processes run concurrently. 
      Each process has:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Its own memory space (address space)</li>
      <li>Its own code, data, and system resources</li>
      <li>Its own Process Control Block (PCB)</li>
    </ul>

    <h3 className="text-2xl font-bold mt-6">Key Features</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Isolation:</strong> Each process runs independently.</li>
      <li><strong>Heavyweight:</strong> Higher overhead due to separate memory.</li>
      <li><strong>Slower Communication:</strong> Uses IPC methods like pipes and message queues.</li>
      <li><strong>Better Security:</strong> Fault in one process does not affect others.</li>
    </ul>

    <h3 className="text-2xl font-bold mt-6">Benefits</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Strong fault isolation</li>
      <li>High robustness and stability</li>
    </ul>

    <h3 className="text-2xl font-bold mt-6">Limitations</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>High memory overhead</li>
      <li>Slower context switching</li>
      <li>Complex inter-process communication</li>
    </ul>

    <p className="leading-relaxed font-semibold mt-4">
      Example: Running a music player while using a web browser.
    </p>

    {/* ================= Thread-Based Multitasking ================= */}
    <h2 className="text-3xl font-bold mt-8">Thread-Based Multitasking (Multithreading)</h2>
    <p className="leading-relaxed">
      In thread-based multitasking, multiple threads run within a single process. 
      Threads share the same address space, code, and data but each has its own 
      stack and execution context.
    </p>

    <h3 className="text-2xl font-bold mt-6">Key Features</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Lightweight:</strong> Faster to create and manage.</li>
      <li><strong>Shared Memory:</strong> Threads can directly communicate.</li>
      <li><strong>Efficient Synchronization:</strong> Using locks, semaphores, etc.</li>
      <li><strong>Scalable:</strong> Can utilize multiple CPU cores.</li>
    </ul>

    <h3 className="text-2xl font-bold mt-6">Benefits</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Lower memory and switching overhead</li>
      <li>Fast communication between threads</li>
      <li>Improved responsiveness</li>
    </ul>

    <h3 className="text-2xl font-bold mt-6">Limitations</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Lack of isolation: one faulty thread can crash the entire process</li>
      <li>Requires careful synchronization</li>
      <li>Debugging is more complex</li>
    </ul>

    <p className="leading-relaxed font-semibold mt-4">
      Example:  
      <br />• In a web browser, one thread handles navigation while another downloads files.  
      <br />• In MS Word, one thread manages typing while another performs spell-check.
    </p>

  </div>
);

export default Home;
