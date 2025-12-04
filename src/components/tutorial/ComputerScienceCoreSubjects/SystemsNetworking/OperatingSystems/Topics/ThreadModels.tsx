import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Multi Threading Models ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Multi Threading Models in Process Management
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 25 Oct, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Multithreading is a programming and execution model that allows multiple threads 
      to run concurrently within a single process. Threads represent independent execution 
      paths, improving responsiveness, CPU utilization, and parallelism—especially on 
      modern multiprocessor systems.
    </p>

    <p className="leading-relaxed">
      It is widely used in web servers, interactive applications, and high-performance 
      computing environments where concurrency is essential.
    </p>

    {/* Threading Models */}
    <h2 className="text-3xl font-bold mt-8">Threading Models</h2>
    <p className="leading-relaxed">
      Operating systems support different threading models that determine how threads 
      are created, managed, and mapped to CPU execution.
    </p>

    {/* User Level Threads */}
    <h3 className="text-2xl font-semibold mt-6">1. User-Level Threads (ULT)</h3>
    <p className="leading-relaxed">
      These threads are managed by a user-level library rather than the operating system.
    </p>

    <p className="font-semibold mt-2">Advantages:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Greater flexibility and control over scheduling</li>
      <li>Highly portable across operating systems</li>
      <li>Faster context switching since it occurs in user space</li>
    </ul>

    <p className="font-semibold mt-2">Disadvantages:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Blocking system calls block the entire process</li>
      <li>Cannot effectively utilize multiple CPUs</li>
    </ul>

    {/* Kernel Level Threads */}
    <h3 className="text-2xl font-semibold mt-6">2. Kernel-Level Threads (KLT)</h3>
    <p className="leading-relaxed">
      These threads are managed and scheduled directly by the operating system kernel.
    </p>

    <p className="font-semibold mt-2">Advantages:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>True parallel execution across multiple CPUs</li>
      <li>Better scalability and thread management</li>
      <li>Non-blocking behavior—other threads continue even if one blocks</li>
    </ul>

    <p className="font-semibold mt-2">Disadvantages:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Less portable and harder to customize</li>
      <li>Higher overhead due to kernel involvement</li>
    </ul>

    {/* Hybrid Threads */}
    <h3 className="text-2xl font-semibold mt-6">3. Hybrid Threading Models</h3>
    <p className="leading-relaxed">
      Hybrid models combine the benefits of ULT and KLT. Modern systems, like Solaris, 
      map multiple user threads to kernel threads for better concurrency.
    </p>

    <p className="font-semibold mt-2">Advantages:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>High flexibility with efficient parallelism</li>
      <li>Reduced blocking issues</li>
    </ul>

    <p className="font-semibold mt-2">Disadvantages:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Complex implementation</li>
      <li>Requires more system resources</li>
    </ul>

    {/* Mapping Models */}
    <h2 className="text-3xl font-bold mt-8">Mapping Models of Threads</h2>

    {/* Many to Many */}
    <h3 className="text-2xl font-semibold mt-6">1. Many-to-Many Model</h3>
    <p className="leading-relaxed">
      Multiple user-level threads are mapped to multiple kernel-level threads. If one 
      thread blocks, others continue running. This model offers high concurrency and 
      efficient CPU utilization.
    </p>

    {/* Many to One */}
    <h3 className="text-2xl font-semibold mt-6">2. Many-to-One Model</h3>
    <p className="leading-relaxed">
      Many user threads map to a single kernel thread. It is easy to manage but does not 
      support parallelism—if one thread blocks, the entire process blocks.
    </p>

    {/* One to One */}
    <h3 className="text-2xl font-semibold mt-6">3. One-to-One Model</h3>
    <p className="leading-relaxed">
      Each user-level thread maps to its own kernel thread. It provides true parallelism 
      and prevents blocking issues, but comes with higher overhead.
    </p>

    {/* Thread Libraries */}
    <h2 className="text-3xl font-bold mt-8">Thread Libraries</h2>
    <p className="leading-relaxed">
      Thread libraries provide APIs to create, manage, and synchronize threads.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>POSIX Pthreads</strong> – supports both ULT and KLT</li>
      <li><strong>Windows Threads</strong> – kernel-level</li>
      <li><strong>Java Threads</strong> – built on kernel threads in modern JVMs</li>
    </ul>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages of Multithreading</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Faster context switching than processes</li>
      <li>Better concurrency within applications</li>
      <li>Efficient CPU and resource usage</li>
      <li>Improved scalability on multiprocessors</li>
      <li>Higher responsiveness for interactive tasks</li>
    </ul>

    {/* Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Disadvantages of Multithreading</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Increased complexity in development</li>
      <li>Risk of race conditions and deadlocks</li>
      <li>Difficult debugging and testing</li>
      <li>High management overhead for simple tasks</li>
    </ul>

  </div>
);

export default Home;
