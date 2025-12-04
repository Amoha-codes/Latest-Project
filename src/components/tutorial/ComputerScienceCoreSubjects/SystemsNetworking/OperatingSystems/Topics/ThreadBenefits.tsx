import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Benefits of Multithreading ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Benefits of Multithreading in Operating System
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 24 Oct, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Multithreading enables multiple threads to execute concurrently within a single process. 
      By dividing tasks into smaller execution units, systems achieve better performance, 
      responsiveness, and resource utilization.
    </p>

    <p className="leading-relaxed">
      It is widely used in both single-processor and multiprocessor systems to handle multiple 
      user requests efficiently and improve parallelism.
    </p>

    {/* 1. Increased Responsiveness */}
    <h2 className="text-3xl font-bold mt-8">1. Increased Responsiveness</h2>
    <p className="leading-relaxed">
      Multithreading improves application responsiveness. Even if one thread is blocked or 
      performing a long task, other threads continue running independently.
    </p>

    <p className="leading-relaxed">
      <strong>Example:</strong> In a web browser, one thread can load a webpage while another 
      handles user interactions simultaneously.
    </p>

    {/* 2. Resource Sharing */}
    <h2 className="text-3xl font-bold mt-8">2. Resource Sharing</h2>
    <p className="leading-relaxed">
      Threads within the same process share memory, code, and resources without requiring 
      complex IPC mechanisms like message passing or shared memory segments.
    </p>

    <p className="leading-relaxed">
      This shared-memory model increases efficiency and reduces overhead.
    </p>

    {/* 3. Economy of Resources */}
    <h2 className="text-3xl font-bold mt-8">3. Economy of Resources</h2>
    <p className="leading-relaxed">
      Creating and managing threads is much cheaper compared to processes. Threads share memory 
      and resources of the parent process, reducing allocation requirements.
    </p>

    <p className="leading-relaxed">
      For example, in Solaris, creating a process is up to 30 times slower than creating a thread 
      and context switching between processes is significantly slower.
    </p>

    {/* 4. Scalability */}
    <h2 className="text-3xl font-bold mt-8">4. Scalability</h2>
    <p className="leading-relaxed">
      Multithreading improves scalability, especially on multiprocessor systems. Multiple threads 
      of a single process can run in parallel on different CPUs, enhancing overall system 
      performance.
    </p>

    <p className="leading-relaxed">
      Single-threaded applications cannot fully utilize multi-core CPUs.
    </p>

    {/* 5. Better Communication */}
    <h2 className="text-3xl font-bold mt-8">5. Better Communication</h2>
    <p className="leading-relaxed">
      Threads communicate efficiently since they share the same memory space. Synchronization 
      tools like semaphores and mutexes help manage shared resources safely.
    </p>

    <p className="leading-relaxed">
      This allows high-bandwidth and low-latency communication.
    </p>

    {/* 6. Microprocessor Architecture Utilization */}
    <h2 className="text-3xl font-bold mt-8">6. Microprocessor Architecture Utilization</h2>
    <p className="leading-relaxed">
      In multi-core systems, threads can run in true parallelism across separate cores. 
      Even on single-core CPUs, rapid context switching creates the illusion of parallelism.
    </p>

    <p className="leading-relaxed">
      This improves CPU utilization and system throughput.
    </p>

    {/* 7. Minimized System Resource Usage */}
    <h2 className="text-3xl font-bold mt-8">7. Minimized System Resource Usage</h2>
    <p className="leading-relaxed">
      Threads require fewer system resources than processes. They share memory, do not require 
      separate memory maps, and reduce load on the CPU and OS scheduler.
    </p>

    {/* 8. Reduced Context Switching Time */}
    <h2 className="text-3xl font-bold mt-8">8. Reduced Context Switching Time</h2>
    <p className="leading-relaxed">
      Context switching between threads is faster than between processes because threads share 
      the same memory and do not require complex register or memory map reloads.
    </p>

    {/* 9. Enhanced Concurrency */}
    <h2 className="text-3xl font-bold mt-8">9. Enhanced Concurrency</h2>
    <p className="leading-relaxed">
      Threads can execute independently and concurrently, providing better throughput and 
      performance—especially in multi-CPU environments.
    </p>

    <p className="leading-relaxed">
      This makes multithreading essential for high-performance applications.
    </p>

  </div>
);

export default Home;
