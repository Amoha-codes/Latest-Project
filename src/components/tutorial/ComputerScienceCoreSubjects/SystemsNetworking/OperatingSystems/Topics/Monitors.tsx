import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Monitors ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Monitors in Process Synchronization
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 30 Aug, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Monitors are a high-level synchronization mechanism that simplify process and thread synchronization.
      They are built on top of locks and are commonly used in multithreading systems like Java.
      Unlike semaphores, where wait() and signal() must be explicitly called, monitors encapsulate
      shared data and the operations on them, making synchronization safer and easier to manage.
    </p>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>A monitor is like a class/module that groups shared variables and the functions operating on them.</li>
      <li>Only one thread can execute inside a monitor at a time, ensuring automatic mutual exclusion.</li>
      <li>In Java, monitors are implemented using classes and <code>synchronized</code> methods.</li>
      <li>No dedicated monitor keyword in Java; functionality is achieved through <code>synchronized</code>.</li>
    </ul>

    {/* Implementation */}
    <h2 className="text-3xl font-bold mt-8">How to Implement Monitors</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Implemented at the programming language level, not directly by the OS.</li>
      <li>Encapsulates both shared data (critical resource) and operations accessing it.</li>
      <li>Mutual exclusion is automatic; programmers do not call wait() or signal() manually for mutual exclusion.</li>
      <li>Synchronization is achieved via <code>synchronized</code> methods or blocks.</li>
      <li>Condition variables are used for thread coordination with methods like <code>wait()</code>, <code>notify()</code>, and <code>notifyAll()</code>.</li>
    </ul>

    {/* Condition Variables */}
    <h2 className="text-3xl font-bold mt-8">Condition Variables in Monitors</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><code>wait()</code>: Temporarily releases the monitor lock and puts the thread to sleep until signaled.</li>
      <li><code>signal()</code>: Wakes up one waiting thread (if any).</li>
      <li><code>broadcast()</code>: Wakes up all waiting threads (in some languages).</li>
    </ul>

    {/* Pseudocode */}
    <h2 className="text-3xl font-bold mt-8">Pseudocode Example</h2>
    <pre className="bg-gray-400 p-4 rounded text-sm overflow-x-auto">
{`class AccountUpdate {
    private int bal;
    condition sufficientFunds; // condition variable

    void synchronized deposit(int n) {
        // increase balance
        // signal waiting threads that funds are available
    }

    void synchronized withdraw(int n) {
        // if (bal < n) -> wait on sufficientFunds
        // else -> perform withdrawal (bal = bal - n)
    }
}`}
    </pre>

    {/* Java Example */}
    <h2 className="text-3xl font-bold mt-8">Example: Monitor Implementation in Java</h2>
    <pre className="bg-gray-400 p-4 rounded text-sm overflow-x-auto">
{`class AccountUpdate {
    private int bal;

    void synchronized deposit(int n) {
        bal = bal + n;
    }

    void synchronized withdraw(int n) {
        bal = bal - n;
    }
}`}
    </pre>

    {/* Explanation */}
    <h2 className="text-3xl font-bold mt-8">Code Explanation</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><code>AccountUpdate</code>: Defines the monitor as a class.</li>
      <li><code>private int bal;</code>: Shared resource accessed by one thread at a time.</li>
      <li><code>synchronized deposit(int n)</code>: Ensures only one thread deposits at a time.</li>
      <li><code>synchronized withdraw(int n)</code>: Ensures only one thread withdraws at a time.</li>
      <li>Using <code>synchronized</code> makes methods act like monitor procedures, guaranteeing mutual exclusion.</li>
    </ul>

    {/* Limitations */}
    <h2 className="text-3xl font-bold mt-8">Limitations of Monitors</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Language dependency: Must be built into the language; cannot be added externally.</li>
      <li>Compiler burden: Extra code generated to manage monitor functionality.</li>
      <li>OS dependency: Compiler requires awareness of OS facilities for critical section access.</li>
      <li>Limited language support: Only some languages support monitors directly (Java, C#, Ada, etc.).</li>
      <li>Reduced flexibility: Tightly coupled with language/compiler design, limiting portability.</li>
    </ul>

  </div>
);

export default Home;
