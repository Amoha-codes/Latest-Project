import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Hardware-Based Solutions ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Hardware-Based Solutions in Process Synchronization
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 01 Sep, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Hardware-based solutions use special CPU instructions like <strong>Test-and-Set</strong> and <strong>Swap</strong> to manage access to shared resources.
      They allow only one process at a time to enter the critical section and are efficient for systems with advanced hardware support.
    </p>

    {/* Test-and-Set */}
    <h2 className="text-3xl font-bold mt-8">1. Test-and-Set (TAS)</h2>
    <p className="leading-relaxed">
      TAS is an atomic instruction that reads a variable’s old value and sets it to true in a single indivisible step.
    </p>
    <pre className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm overflow-x-auto">
{`boolean lock = false; // Shared lock variable

boolean TestAndSet(boolean &target) {
    boolean rv = target; // Step 1: Read old value
    target = true;       // Step 2: Set lock
    return rv;           // Step 3: Return old value
}

while (1) {
    while (TestAndSet(lock)); // Entry Section (Busy wait)
    // ---- Critical Section ----
    lock = false;             // Exit Section
    // ---- Remainder Section ----
}`}
    </pre>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Mutual Exclusion:</strong> Only one process enters CS at a time.</li>
      <li><strong>Critical Section Protection:</strong> Process enters only if lock was free.</li>
      <li><strong>Exit Section:</strong> Releases lock by setting it false.</li>
    </ul>

    {/* Swap */}
    <h2 className="text-3xl font-bold mt-8">2. Swap Instruction</h2>
    <p className="leading-relaxed">
      Swap exchanges values of a shared lock variable and a local key variable, ensuring mutual exclusion.
    </p>
    <pre className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm overflow-x-auto">
{`boolean lock = false;   // Shared variable
boolean key;            // Local variable

void swap(boolean &a, boolean &b) {
    boolean temp = a;
    a = b;
    b = temp;
}

while (1) {
    key = true;              // Wants to enter
    while (key)              // Entry Section
        swap(lock, key);     // Spin until lock free
    // ---- Critical Section ----
    lock = false;            // Exit Section
}`}
    </pre>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Ensures only one process enters CS.</li>
      <li>Processes keep spinning until they acquire the lock.</li>
      <li>Busy waiting can cause CPU cycles to be wasted.</li>
    </ul>

    {/* Compare-and-Swap */}
    <h2 className="text-3xl font-bold mt-8">3. Compare-and-Swap (CAS)</h2>
    <p className="leading-relaxed">
      CAS atomically compares a variable to an expected value and updates it only if they match, improving efficiency over Swap.
    </p>
    <pre className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm overflow-x-auto">
{`int lock = 0; // 0 = free, 1 = busy

boolean CompareAndSwap(int &target, int expected, int new_val) {
    int old = target;
    if (target == expected) target = new_val;
    return old == expected; // true if swap succeeded
}

while (1) {
    while (!CompareAndSwap(lock, 0, 1)); // Acquire lock
    // ---- Critical Section ----
    lock = 0; // Release lock
}`}
    </pre>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Ensures mutual exclusion and progress.</li>
      <li>Suffers from busy waiting under contention.</li>
    </ul>

    {/* Spinlock */}
    <h2 className="text-3xl font-bold mt-8">4. Spinlock</h2>
    <p className="leading-relaxed">
      Spinlocks are high-level locks built using TAS or CAS. Processes repeatedly check if the lock is free (spinning) instead of sleeping.
      They are very fast for short critical sections, e.g., in kernel or multiprocessor systems.
    </p>
    <pre className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm overflow-x-auto">
{`int lock = 0; // 0 = free, 1 = busy

void acquire() { while (TestAndSet(lock)); } // Busy wait
void release() { lock = 0; }

while (1) {
    acquire();
    // ---- Critical Section ----
    release();
    // ---- Remainder Section ----
}`}
    </pre>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Very fast on multiprocessor systems (no context switch).</li>
      <li>Simple to implement using atomic instructions.</li>
      <li>Causes busy waiting → wastes CPU cycles.</li>
    </ul>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Comparison of Hardware-Based Solutions</h2>
    <table className="w-full border border-gray-300 text-left text-sm">
      <thead>
        <tr className="bg-gray-400">
          <th className="border px-2 py-1">Method</th>
          <th className="border px-2 py-1">Mechanism</th>
          <th className="border px-2 py-1">Pros</th>
          <th className="border px-2 py-1">Cons</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-2 py-1">Test-and-Set</td>
          <td className="border px-2 py-1">Atomically sets lock variable</td>
          <td className="border px-2 py-1">Simple, widely supported</td>
          <td className="border px-2 py-1">Busy waiting, starvation possible</td>
        </tr>
        <tr>
          <td className="border px-2 py-1">Swap</td>
          <td className="border px-2 py-1">Swap shared & local variables</td>
          <td className="border px-2 py-1">Ensures mutual exclusion</td>
          <td className="border px-2 py-1">Busy waiting, less efficient than CAS</td>
        </tr>
        <tr>
          <td className="border px-2 py-1">CAS</td>
          <td className="border px-2 py-1">Compare-and-swap atomic update</td>
          <td className="border px-2 py-1">Efficient, lock-free possible</td>
          <td className="border px-2 py-1">Still spins under contention</td>
        </tr>
        <tr>
          <td className="border px-2 py-1">Spinlock</td>
          <td className="border px-2 py-1">Lock abstraction (TAS/CAS)</td>
          <td className="border px-2 py-1">Very fast for short waits</td>
          <td className="border px-2 py-1">CPU wasting, not fair</td>
        </tr>
      </tbody>
    </table>

  </div>
);

export default Home;
