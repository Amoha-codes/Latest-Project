import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Heading ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Difference Between User-Level Thread and Kernel-Level Thread
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Oct, 2025</p>

    {/* ================= Intro ================= */}
    <p className="text-lg leading-relaxed">
      Threads can be managed either by user-level libraries or directly by the operating system kernel. 
      Based on this, threads are classified into <strong>User-Level Threads (ULT)</strong> and 
      <strong> Kernel-Level Threads (KLT)</strong>. Both types support concurrent execution but differ 
      significantly in their performance, control, and overhead.
    </p>

    {/* ================= User Level Thread ================= */}
    <h2 className="text-3xl font-bold mt-8">User-Level Thread (ULT)</h2>
    <p className="leading-relaxed">
      User-Level Threads are implemented entirely in user space by a thread library. 
      These threads are not recognized by the operating system, and the OS manages the whole 
      process as a single-threaded unit. Each ULT is represented by a program counter, stack, 
      register set, and thread control block.
    </p>

    <p className="leading-relaxed mt-4">
      ULTs are often used in systems where fine-grained control is required but kernel overhead 
      should be avoided. They also work well in environments where the OS does not support native multithreading.
    </p>

    <p className="leading-relaxed font-semibold mt-2">
      Example: POSIX user threads, Mach C-Threads
    </p>

    {/* Advantages ULT */}
    <h3 className="text-2xl font-bold mt-6">Advantages of User-Level Threads</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Quick and simple to create and manage</li>
      <li>Highly portable across different operating systems</li>
      <li>No kernel mode transitions required during context switching</li>
    </ul>

    {/* Disadvantages ULT */}
    <h3 className="text-2xl font-bold mt-6">Disadvantages of User-Level Threads</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Cannot fully utilize multiprocessing capabilities</li>
      <li>A blocking system call in one thread blocks the entire process</li>
    </ul>

    {/* ================= Kernel Level Thread ================= */}
    <h2 className="text-3xl font-bold mt-8">Kernel-Level Thread (KLT)</h2>
    <p className="leading-relaxed">
      Kernel-Level Threads are managed directly by the operating system. The OS scheduler creates, 
      manages, and assigns CPU time to each thread individually. Every kernel-level thread maintains 
      its own context, thread ID, priority, and execution state.
    </p>

    <p className="leading-relaxed font-semibold mt-2">
      Example: Java threads, POSIX threads on Linux
    </p>

    {/* Advantages KLT */}
    <h3 className="text-2xl font-bold mt-6">Advantages of Kernel-Level Threads</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>True parallelism using multiple processors</li>
      <li>Only the blocked thread stops; remaining threads continue execution</li>
      <li>Direct access to system resources and kernel features</li>
    </ul>

    {/* Disadvantages KLT */}
    <h3 className="text-2xl font-bold mt-6">Disadvantages of Kernel-Level Threads</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Higher overhead for creation and management</li>
      <li>Requires kernel mode switching, increasing overhead</li>
    </ul>

    {/* ================= Comparison Table ================= */}
    <h2 className="text-3xl font-bold mt-8">
      Difference Between User-Level Thread and Kernel-Level Thread
    </h2>

    <div className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Parameter</th>
            <th className="border p-2">User-Level Thread (ULT)</th>
            <th className="border p-2">Kernel-Level Thread (KLT)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">Implemented by</td>
            <td className="border p-2">User-level libraries</td>
            <td className="border p-2">Operating System</td>
          </tr>
          <tr>
            <td className="border p-2">OS Recognition</td>
            <td className="border p-2">Not recognized by OS</td>
            <td className="border p-2">Fully recognized by OS</td>
          </tr>
          <tr>
            <td className="border p-2">Context Switch Time</td>
            <td className="border p-2">Fast, low overhead</td>
            <td className="border p-2">Slower, high overhead</td>
          </tr>
          <tr>
            <td className="border p-2">Blocking Operation</td>
            <td className="border p-2">Blocks entire process</td>
            <td className="border p-2">Only the blocked thread stops</td>
          </tr>
          <tr>
            <td className="border p-2">Multithreading Support</td>
            <td className="border p-2">Limited multiprocessing</td>
            <td className="border p-2">Full multiprocessing</td>
          </tr>
          <tr>
            <td className="border p-2">Creation & Management</td>
            <td className="border p-2">Fast and simple</td>
            <td className="border p-2">Slower and more complex</td>
          </tr>
          <tr>
            <td className="border p-2">Memory Management</td>
            <td className="border p-2">Shared address space</td>
            <td className="border p-2">Individual context per thread</td>
          </tr>
          <tr>
            <td className="border p-2">Portability</td>
            <td className="border p-2">More portable</td>
            <td className="border p-2">OS-dependent</td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
);

export default Home;
