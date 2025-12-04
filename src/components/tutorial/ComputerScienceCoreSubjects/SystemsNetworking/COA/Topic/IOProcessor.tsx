import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Title ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction of Input-Output Processor
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 Jul, 2025</p>

    {/* ================= Intro ================= */}
    <p className="text-lg leading-relaxed">
      The DMA mode of data transfer minimizes CPU overhead during I/O operations and 
      enables parallel execution of CPU and I/O tasks. Since I/O devices operate much 
      slower than the CPU, this parallelism prevents CPU time from being wasted. 
      To further reduce CPU involvement, special processors called 
      <strong> Input-Output Processors (IOPs)</strong> or <strong> I/O channels</strong> 
      were developed.
    </p>

    <p className="leading-relaxed">
      An Input-Output Processor works similarly to a CPU but is dedicated to handling 
      I/O operations. It is more advanced than a traditional DMA controller and can fetch 
      and execute its own instruction set focused on I/O transfers. Besides I/O operations, 
      it can perform arithmetic, logic, branching, and translation tasks. The main memory 
      communicates with the IOP using DMA.
    </p>

    {/* ================= Working ================= */}
    <h2 className="text-3xl font-bold mt-8">Working of Input-Output Processor</h2>

    <p className="leading-relaxed">
      The Input-Output Processor acts as an interface between the system and I/O devices. 
      It performs I/O tasks independently using the following sequence:
    </p>

    <ul className="list-decimal ml-6 leading-relaxed">
      <li>The IOP is triggered by a system or device request for an I/O operation.</li>
      <li>It fetches I/O-specific instructions from its own instruction set.</li>
      <li>Memory space is allocated for storing the data being transferred.</li>
      <li>
        DMA is used for direct data transfer between I/O devices and memory, bypassing the CPU.
      </li>
      <li>Data is temporarily buffered for efficient movement.</li>
      <li>I/O commands such as read, write, and sync are executed.</li>
      <li>Error handling and correction are managed through interrupts.</li>
      <li>The results are written to memory once the operation is complete.</li>
      <li>The system or device is notified of completion.</li>
      <li>Resources are released and the CPU continues normal processing.</li>
    </ul>

    {/* ================= Features ================= */}
    <h2 className="text-3xl font-bold mt-8">Features of an Input-Output Processor</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        Equipped with specialized hardware including I/O ports, DMA controllers, 
        and interrupt controllers.
      </li>
      <li>
        Supports Direct Memory Access (DMA) for CPU-independent data transfer.
      </li>
      <li>
        Handles device interrupts independently of the CPU.
      </li>
      <li>
        Supports communication protocols such as Ethernet, USB, and SCSI.
      </li>
      <li>
        Buffers data to prevent overload and improve transfer efficiency.
      </li>
      <li>
        Executes peripheral commands without involving the CPU.
      </li>
      <li>
        Allows parallel execution of CPU tasks and I/O operations.
      </li>
    </ul>

    {/* ================= Applications ================= */}
    <h2 className="text-3xl font-bold mt-8">Applications of I/O Processors</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Real-time data acquisition systems.</li>
      <li>Industrial control systems for precise timing and signal handling.</li>
      <li>Multimedia processing such as audio/video streaming and compression.</li>
      <li>Network data processing, routing, filtering, and encryption.</li>
      <li>High-speed storage systems with caching and prefetching.</li>
    </ul>

    {/* ================= Advantages ================= */}
    <h2 className="text-3xl font-bold mt-8">Advantages of Input-Output Processor</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        Allows I/O devices to access main memory directly without CPU intervention.
      </li>
      <li>
        Frees the main processor to focus on other operations, improving performance.
      </li>
      <li>
        Enables faster data transfer between I/O devices and memory.
      </li>
      <li>
        Improves system fault tolerance by isolating I/O failures.
      </li>
    </ul>

    {/* ================= Disadvantages ================= */}
    <h2 className="text-3xl font-bold mt-8">Disadvantages of Input-Output Processor</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        Adds significant cost to the system due to additional hardware.
      </li>
      <li>
        Increases overall system complexity and makes troubleshooting harder.
      </li>
      <li>
        Performance gains may be minimal in systems with low I/O activity.
      </li>
      <li>
        Synchronization issues may occur when multiple processors share memory.
      </li>
    </ul>

  </div>
);

export default Home;
