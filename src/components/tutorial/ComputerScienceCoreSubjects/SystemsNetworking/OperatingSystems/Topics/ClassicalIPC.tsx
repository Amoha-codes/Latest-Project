import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Classical IPC Problems ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Classical IPC Problems
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 03 Sep, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Inter-Process Communication (IPC) allows processes to share data and coordinate tasks. 
      When multiple processes interact, challenges such as synchronization errors, resource conflicts, 
      and deadlocks can occur. Classical IPC problems provide models to understand and solve these issues 
      in operating systems.
    </p>

    {/* List of Problems */}
    <h2 className="text-3xl font-bold mt-8">Main IPC Problems</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Producer-Consumer Problem – managing shared buffers without overflow or underflow.</li>
      <li>Readers-Writers Problem – balancing concurrent reads and exclusive writes.</li>
      <li>Dining Philosophers Problem – preventing deadlock and starvation in shared resource usage.</li>
      <li>Sleeping Barber Problem – handling synchronization and fairness in service systems.</li>
    </ul>

    {/* 1. Producer-Consumer Problem */}
    <h2 className="text-3xl font-bold mt-8">1. Producer-Consumer Problem</h2>
    <p className="leading-relaxed">
      Involves two processes: <strong>Producer</strong> (generates data into a buffer) and 
      <strong>Consumer</strong> (removes data for processing). Challenges include buffer overflow 
      and underflow. Synchronization tools like semaphores or mutexes ensure controlled buffer access.
    </p>

    {/* 2. Reader-Writer Problem */}
    <h2 className="text-3xl font-bold mt-8">2. Reader-Writer Problem</h2>
    <p className="leading-relaxed">
      Multiple processes read and write to a shared resource.
      <ul className="list-disc ml-6">
        <li><strong>Readers:</strong> only read data.</li>
        <li><strong>Writers:</strong> modify data.</li>
      </ul>
      Challenges: Allow multiple readers, ensure single-writer access, prevent reading during writing.
      Solutions include Readers Preference (priority to readers) and Writers Preference (priority to writers).
    </p>

    {/* 3. Dining Philosophers Problem */}
    <h2 className="text-3xl font-bold mt-8">3. Dining Philosophers Problem</h2>
    <p className="leading-relaxed">
      Philosophers sit around a table, each needing two chopsticks to eat. Chopsticks are shared between neighbors.
      <ul className="list-disc ml-6">
        <li><strong>Deadlock:</strong> if all pick up one chopstick and wait for another.</li>
        <li><strong>Starvation:</strong> some philosophers may never get to eat.</li>
      </ul>
      Solutions: Use semaphores or monitors to coordinate chopstick usage and avoid deadlock.
    </p>

    {/* 4. Sleeping Barber Problem */}
    <h2 className="text-3xl font-bold mt-8">4. Sleeping Barber Problem</h2>
    <p className="leading-relaxed">
      In a barber shop scenario:
      <ul className="list-disc ml-6">
        <li>If no customers are present, the barber sleeps.</li>
        <li>If customers arrive and seats are available, they wait.</li>
        <li>If all seats are full, new customers leave.</li>
      </ul>
      Challenges: Prevent deadlock and ensure fairness. Solution: Semaphores manage customer queues, chair availability, and barber activity.
    </p>

  </div>
);

export default Home;
