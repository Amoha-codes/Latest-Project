import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Process in Operating System ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Process in Operating System
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 16 Sep, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      A <strong>process</strong> is a program that is currently being executed by the operating
      system. While a program is a passive set of instructions stored on disk, a process is an
      active entity that occupies memory, uses CPU time, and interacts with system resources.
    </p>

    <p className="leading-relaxed">
      A single program can create multiple processes when executed multiple times. For example,
      opening the same application repeatedly launches multiple independent processes.
    </p>

    {/* Memory Layout Section */}
    <h2 className="text-3xl font-bold mt-8">How Does a Process Look in Memory?</h2>
    <p className="leading-relaxed">
      When a process is loaded into RAM, the operating system divides its memory into structured
      sections, each with a specific purpose. The typical layout of a process in memory includes:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Text (Code) Section</strong>: Contains the executable instructions of the program.
        It is usually read-only.
      </li>
      <li>
        <strong>Stack</strong>: Stores temporary data such as function parameters, return addresses,
        and local variables.
      </li>
      <li>
        <strong>Data Section</strong>: Contains global and static variables initialized before execution.
      </li>
      <li>
        <strong>Heap</strong>: Memory used for dynamic allocation during runtime.
      </li>
    </ul>

    {/* Attributes Section */}
    <h2 className="text-3xl font-bold mt-8">Attributes of a Process</h2>
    <p className="leading-relaxed">
      A process contains several important attributes that help the operating system control and
      manage it effectively. These attributes are stored in a data structure known as the
      <strong> Process Control Block (PCB)</strong>.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Process ID (PID)</strong>: A unique identifier assigned to each process.
      </li>
      <li>
        <strong>Process State</strong>: Indicates the current status of the process—running, ready,
        waiting, etc.
      </li>
      <li>
        <strong>CPU Scheduling Information</strong>: Includes priority and other scheduling-related
        data to determine which process should execute next.
      </li>
      <li>
        <strong>I/O Information</strong>: Tracks devices allocated to the process and pending I/O
        requests.
      </li>
      <li>
        <strong>File Descriptors</strong>: Contains details of files and network connections opened
        by the process.
      </li>
      <li>
        <strong>Accounting Information</strong>: Stores CPU usage, execution time, and overall
        resource consumption.
      </li>
      <li>
        <strong>Memory Management Information</strong>: Includes memory allocation details such as
        base registers, limit registers, and page tables.
      </li>
    </ul>

    <p className="leading-relaxed">
      These PCB attributes enable the operating system to efficiently schedule, monitor, and control
      each process as part of the overall system operation.
    </p>

  </div>
);

export default Home;
