import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Semaphores ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Semaphores in Process Synchronization
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 01 Sep, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      In multiprogramming systems, semaphores are synchronization mechanisms used to control access 
      to shared resources such as files, printers, or memory. They ensure that only the allowed number 
      of processes can access a resource simultaneously.
    </p>

    {/* Semaphore Operations */}
    <h2 className="text-3xl font-bold mt-8">Semaphore Operations</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Wait (P operation / down):</strong> Decreases the semaphore value. If it becomes negative, 
        the process is blocked until the resource is available.
      </li>
      <li>
        <strong>Signal (V operation / up):</strong> Increases the semaphore value. If processes are waiting, 
        one of them is unblocked.
      </li>
    </ul>

    {/* Features */}
    <h2 className="text-3xl font-bold mt-8">Features of Semaphores</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Mutual Exclusion: Ensures only one process accesses a shared resource at a time.</li>
      <li>Process Synchronization: Coordinates execution order of multiple processes.</li>
      <li>Resource Management: Limits access to finite resources.</li>
      <li>Reader-Writer Problem: Allows multiple readers but restricts writers until no readers exist.</li>
      <li>Avoiding Deadlocks: Controls allocation order to prevent deadlocks.</li>
    </ul>

    {/* Types of Semaphores */}
    <h2 className="text-3xl font-bold mt-8">Types of Semaphores</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Counting Semaphore:</strong> Used for multiple identical resources; value ranges from 0 to N.
        Example: Managing 5 printers.
      </li>
      <li>
        <strong>Binary Semaphore:</strong> Special case of counting semaphore with value 0 or 1. Works like a lock.
        Example: Managing a single critical section.
      </li>
    </ul>

    {/* Counting Semaphore Pseudocode */}
    <h2 className="text-3xl font-bold mt-8">Counting Semaphore</h2>
    <pre className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm overflow-x-auto">
{`struct Semaphore {
    int value;          // Number of available resources
    Queue<process> q;   // Waiting processes
};

P(Semaphore s) {   // wait()
    s.value = s.value - 1;
    if (s.value < 0) {
        q.push(p);
        block();
    }
}

V(Semaphore s) {   // signal()
    s.value = s.value + 1;
    if (s.value <= 0) {
        Process p = q.pop();
        wakeup(p);
    }
}`}
    </pre>
    <p className="leading-relaxed">
      <strong>Explanation:</strong> wait() blocks the process if resources are unavailable, 
      signal() wakes up a waiting process when a resource is released.
    </p>

    {/* Binary Semaphore Pseudocode */}
    <h2 className="text-3xl font-bold mt-8">Binary Semaphore</h2>
    <pre className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm overflow-x-auto">
{`struct Semaphore {
    enum value(0, 1); // 0 = locked, 1 = free
    Queue<process> q;
};

P(Semaphore s) { // wait()
    if (s.value == 1) s.value = 0;
    else {
        q.push(p);
        sleep();
    }
}

V(Semaphore s) { // signal()
    if (s.q is empty) s.value = 1;
    else {
        Process p = q.front();
        q.pop();
        wakeup(p);
    }
}`}
    </pre>
    <p className="leading-relaxed">
      <strong>Explanation:</strong> Binary semaphores act as ON/OFF switches, allowing only one process in the critical section at a time.
    </p>

    {/* Limitations */}
    <h2 className="text-3xl font-bold mt-8">Limitations of Semaphores</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Priority Inversion: Low-priority processes holding a semaphore can block high-priority ones.</li>
      <li>Deadlock: Processes may wait on each other in a cycle, causing indefinite blocking.</li>
      <li>Complex Management: Misuse of wait/signal can lead to errors.</li>
      <li>Busy Waiting: Basic implementations may spin while checking semaphore value, wasting CPU time.</li>
    </ul>

  </div>
);

export default Home;
