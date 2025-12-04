import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Priority Inversion ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Priority Inversion in Operating Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 02 Sep, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Priority inversion is a scheduling problem where a low-priority task holds a resource (like a lock) 
      needed by a high-priority task. This forces the high-priority task to wait, potentially causing delays or system inefficiencies.
    </p>

    {/* Causes */}
    <h2 className="text-3xl font-bold mt-8">Causes of Priority Inversion</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>A low-priority task (L) acquires a shared resource that a high-priority task (H) will need later.</li>
      <li>When H requests the resource, it must wait for L to release it.</li>
      <li>While L holds the resource, a medium-priority task (M) that does not require the resource can preempt L.</li>
      <li>Result: High-priority task H remains blocked even though it outranks L and M, inverting the intended priority order.</li>
    </ul>

    {/* Types */}
    <h2 className="text-3xl font-bold mt-8">Types of Priority Inversion</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Bounded Priority Inversion: Delay is predictable and limited to the lower-priority task's critical section time plus any preempting medium-priority tasks.</li>
      <li>Unbounded Priority Inversion: Delay can be indefinite if medium-priority tasks repeatedly preempt the low-priority task holding the resource.</li>
    </ul>

    {/* Bounded Example */}
    <h2 className="text-3xl font-bold mt-8">Bounded Priority Inversion</h2>
    <p className="leading-relaxed">
      Consider three tasks: L (Low), M (Medium), H (High). 
      L acquires a mutex, H waits for it, M preempts L but does not require the mutex. 
      Once M finishes, L completes its critical section and releases the mutex for H.
      The total delay is predictable and bounded.
    </p>

    {/* Unbounded Example */}
    <h2 className="text-3xl font-bold mt-8">Unbounded Priority Inversion</h2>
    <p className="leading-relaxed">
      Task L (Low) acquires a lock, H (High) needs the same lock and gets blocked. 
      Task M (Medium) preempts L repeatedly, delaying L from releasing the lock. 
      H remains blocked indefinitely until L finishes, causing unbounded delay and potential system failures.
    </p>

    {/* Solutions */}
    <h2 className="text-3xl font-bold mt-8">Solutions to Priority Inversion</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Priority Inheritance:</strong> Temporarily elevates the priority of the low-priority task holding the resource to match the highest-priority waiting task.</li>
      <li><strong>Priority Ceiling Protocol:</strong> Assigns a maximum priority to each resource to prevent lower-priority tasks from blocking higher-priority tasks.</li>
      <li><strong>Avoiding Blocking:</strong> Uses non-blocking algorithms or designs systems to minimize shared resource usage, reducing chances of priority inversion.</li>
    </ul>

  </div>
);

export default Home;
