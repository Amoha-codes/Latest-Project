import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Kernel in Operating System ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Kernel in Operating System
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 22 Sep, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      A <strong>kernel</strong> is the core part of an operating system. It acts as a 
      bridge between user applications and the hardware of a computer. It manages 
      essential system resources such as the CPU, memory, and I/O devices, ensuring 
      smooth and secure execution of programs.
    </p>

    <p className="leading-relaxed">
      The kernel handles tasks like running programs, memory allocation, 
      file access, and communicating with devices such as keyboards, printers, 
      and storage drives.
    </p>

    <p className="leading-relaxed">
      The operating system contains the kernel as its core but also includes 
      components like the user interface, file system, networking services, and 
      utilities to help users interact with the system effectively.
    </p>

    {/* Kernel Features */}
    <h2 className="text-3xl font-bold mt-8">Kernel (Operating System)</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Facilitates communication between hardware and user applications.</li>
      <li>Ensures efficient and secure multitasking.</li>
      <li>Manages system stability and prevents unauthorized resource access.</li>
    </ul>

    {/* Types of Kernel */}
    <h2 className="text-3xl font-bold mt-8">Types of Kernel</h2>
    <p className="leading-relaxed">The major types of kernels are:</p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Monolithic Kernel:</strong> All OS services run in kernel space. 
        Fast but less isolated. Examples: Linux, Unix, Open VMS.
      </li>

      <li>
        <strong>Microkernel:</strong> Minimal kernel; most services run in user space. 
        More secure and reliable but may introduce overhead. Examples: Minix 3, Mach.
      </li>

      <li>
        <strong>Hybrid Kernel:</strong> Mix of monolithic + microkernel. Faster than microkernel, 
        safer than monolithic. Examples: Windows NT family, macOS (XNU).
      </li>

      <li>
        <strong>Nanokernel:</strong> Extremely minimal kernel that provides only 
        hardware abstraction. Examples: Nemesis, MIT Exokernel projects.
      </li>

      <li>
        <strong>Exokernel:</strong> Separates protection from management. Allows 
        applications direct control over hardware abstractions.
      </li>
    </ul>

    {/* Functions of Kernel */}
    <h2 className="text-3xl font-bold mt-8">Functions of Kernel</h2>
    <p className="leading-relaxed">
      A kernel performs essential tasks required for the smooth functioning 
      of the computer system:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Process Management:</strong> Scheduling, creation, and termination of processes.</li>
      <li><strong>Memory Management:</strong> Allocation, deallocation, virtual memory, protection.</li>
      <li><strong>Device Management:</strong> Handling I/O devices and device drivers.</li>
      <li><strong>File System Management:</strong> Managing files and storage operations.</li>
      <li><strong>Resource Management:</strong> Management of CPU time, disk space, network bandwidth.</li>
      <li><strong>Security & Access Control:</strong> Enforcing permissions and authentication.</li>
      <li><strong>Inter-Process Communication:</strong> Message passing, pipes, shared memory.</li>
    </ul>

    {/* Working of Kernel */}
    <h2 className="text-3xl font-bold mt-8">Working of Kernel</h2>
    <p className="leading-relaxed">
      The kernel is the first part of the OS loaded into memory and remains active 
      throughout the system's runtime.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>It runs in <strong>kernel mode</strong> with full hardware access.</li>
      <li>User applications run in <strong>user mode</strong> and cannot directly access hardware.</li>
      <li>Applications make requests via <strong>system calls</strong>.</li>
      <li>The kernel switches to kernel mode, performs the operation, and returns control to user mode.</li>
      <li>The scheduler performs <strong>context switching</strong> for multitasking.</li>
    </ul>

  </div>
);

export default Home;
