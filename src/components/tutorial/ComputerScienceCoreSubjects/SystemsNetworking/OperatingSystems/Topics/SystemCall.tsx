import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= System Call ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      System Call
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 22 Sep, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      A <strong>system call</strong> is a programmatic way for a computer program to request 
      services from the <strong>kernel</strong> of the operating system. It acts as an 
      interface between user applications and low-level hardware functions managed by the OS.
    </p>

    <p className="leading-relaxed">
      System calls allow programs to interact with the operating system, enabling operations 
      like file handling, process management, device access, and communication. They are the 
      only entry points into the kernel and run in <strong>kernel mode</strong>.
    </p>

    {/* System Call Image Section (Optional) */}
    <h2 className="text-3xl font-bold mt-8">System Call Overview</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Allows programs to request OS-level services.</li>
      <li>Provides a controlled interface to hardware resources.</li>
      <li>Executes only in kernel mode for safety and stability.</li>
    </ul>

    {/* Working of System Calls */}
    <h2 className="text-3xl font-bold mt-8">How Do System Calls Work?</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>A user program invokes a system call written in high-level languages or assembly.</li>
      <li>The request triggers a switch from <strong>user mode</strong> to <strong>kernel mode</strong>.</li>
      <li>The OS handles the request — such as file access, process control, or memory operations.</li>
      <li>The kernel performs the operation and returns the result back to user mode.</li>
      <li>
        Without system calls, every program would require its own hardware-access methods, 
        leading to inconsistency and security issues.
      </li>
    </ul>

    {/* Types of System Calls */}
    <h2 className="text-3xl font-bold mt-8">Types of System Calls</h2>

    <p className="leading-relaxed">
      System calls are grouped based on the services they provide. These categories 
      represent the essential operations that user programs perform through the operating system:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>File System:</strong> Creating, opening, reading, writing, and managing files 
        and directories.
      </li>

      <li>
        <strong>Process Control:</strong> Creating, executing, synchronizing, and terminating 
        processes.
      </li>

      <li>
        <strong>Memory Management:</strong> Allocating and deallocating memory, managing 
        virtual memory.
      </li>

      <li>
        <strong>Interprocess Communication (IPC):</strong> Enabling communication and data 
        sharing between different processes.
      </li>

      <li>
        <strong>Device Management:</strong> Requesting and releasing devices, performing 
        read/write operations on hardware.
      </li>
    </ul>

  </div>
);

export default Home;
