import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Mutex vs Semaphore ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Mutex vs Semaphore
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 24 Oct, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      In operating systems, Mutex and Semaphores are synchronization primitives used to control access 
      to shared resources when multiple processes or threads execute concurrently.
    </p>

    {/* Mutex Section */}
    <h2 className="text-3xl font-bold mt-8">Mutex</h2>
    <p className="leading-relaxed">
      A <strong>Mutex</strong> (Mutual Exclusion Object) provides exclusive access to a resource. 
      Only the thread that locks the mutex can unlock it, enforcing strict ownership.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Used for locking a resource to ensure only one thread accesses it at a time.</li>
      <li>Priority inheritance can reduce priority inversion issues.</li>
      <li>Common use case: Producer-Consumer problem with a single buffer.</li>
    </ul>

    {/* Mutex Example */}
    <h3 className="text-2xl font-semibold mt-4">Using Mutex</h3>
    <p className="leading-relaxed">
      In a producer-consumer scenario with a 4096-byte buffer, a mutex ensures either the producer 
      or consumer thread accesses the buffer at any time, maintaining mutual exclusion.
    </p>

    {/* Mutex Advantages/Disadvantages */}
    <h3 className="text-2xl font-semibold mt-4">Advantages of Mutex</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>No race condition, ensuring data consistency.</li>
      <li>Simple locking mechanism with integrity maintenance.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Disadvantages of Mutex</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Starvation possible if thread sleeps or is preempted in critical section.</li>
      <li>Only the owning thread can release the mutex.</li>
      <li>Implementation may involve busy waiting, wasting CPU cycles.</li>
    </ul>

    {/* Semaphore Section */}
    <h2 className="text-3xl font-bold mt-8">Semaphore</h2>
    <p className="leading-relaxed">
      A <strong>Semaphore</strong> is a non-negative integer used to control access to shared resources. 
      Any thread can signal or wait on a semaphore, without strict ownership.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Uses atomic operations Wait (P) and Signal (V) for synchronization.</li>
      <li>Can be used for generalized resource management with multiple instances.</li>
    </ul>

    {/* Semaphore Example */}
    <h3 className="text-2xl font-semibold mt-4">Using Semaphore</h3>
    <p className="leading-relaxed">
      In a producer-consumer problem with multiple 1 KB buffers, a semaphore allows the producer 
      and consumer to work on different buffers concurrently, providing flexible resource management.
    </p>

    {/* Semaphore Advantages/Disadvantages */}
    <h3 className="text-2xl font-semibold mt-4">Advantages of Semaphore</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Allows multiple threads to access critical sections safely.</li>
      <li>Machine-independent and flexible resource management.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Disadvantages of Semaphore</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Priority inversion and potential deadlocks if misused.</li>
      <li>Prone to programming errors; OS must track all Wait/Signal calls.</li>
      <li>Reduced modularity for large-scale systems.</li>
    </ul>

    {/* Differences Table */}
    <h2 className="text-3xl font-bold mt-8">Difference Between Mutex and Semaphore</h2>
    <table className="table-auto border-collapse border border-gray-400 w-full text-left">
      <thead>
        <tr className="bg-gray-400">
          <th className="border px-4 py-2">Mutex</th>
          <th className="border px-4 py-2">Semaphore</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">An object providing mutual exclusion</td>
          <td className="border px-4 py-2">An integer controlling access to resources</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Lock & Unlock operations</td>
          <td className="border px-4 py-2">Wait (P) & Signal (V) operations</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Strict ownership by the requesting thread</td>
          <td className="border px-4 py-2">No strict ownership; any thread can signal</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">No subtypes</td>
          <td className="border px-4 py-2">Counting Semaphore & Binary Semaphore</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Single thread can enter critical section</td>
          <td className="border px-4 py-2">Multiple threads allowed depending on value</td>
        </tr>
      </tbody>
    </table>

    {/* Misconception */}
    <h2 className="text-3xl font-bold mt-8">Common Misconception</h2>
    <p className="leading-relaxed">
      A mutex is sometimes confused with a binary semaphore. While both allow a single thread in 
      a critical section, a mutex enforces ownership and mutual exclusion, whereas a binary semaphore 
      is a signaling mechanism without ownership, used for resource coordination.
    </p>

    <p className="leading-relaxed">
      Example: Downloading a file (Task A) and printing a document (Task B). A semaphore ensures 
      Task B waits until Task A finishes without interfering, whereas a mutex would enforce exclusive 
      access by ownership.
    </p>

  </div>
);

export default Home;
