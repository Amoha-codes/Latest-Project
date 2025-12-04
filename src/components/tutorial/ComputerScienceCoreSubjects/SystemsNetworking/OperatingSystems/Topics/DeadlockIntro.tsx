import React from 'react';

const Deadlock: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Introduction of Deadlock ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction of Deadlock in Operating System
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 03 Sep, 2025</p>

    <p className="text-lg leading-relaxed">
      A deadlock is a situation in a computing environment where a set of processes gets permanently stuck 
      because each process is waiting for a resource held by another process, and none of them can proceed.
    </p>

    {/* How Does Deadlock Occur */}
    <h2 className="text-3xl font-bold mt-8">How Does Deadlock Occur?</h2>
    <p className="leading-relaxed">
      A process typically uses resources in the following sequence:
      <ol className="list-decimal ml-6 mt-2">
        <li>Request a resource</li>
        <li>Use the resource</li>
        <li>Release the resource</li>
      </ol>
      Deadlock arises when processes hold some resources while waiting for others.
    </p>

    {/* Example */}
    <h2 className="text-3xl font-bold mt-8">Example</h2>
    <p className="leading-relaxed">
      Process P1 holds Resource R1 and requests R2. <br />
      Process P2 holds Resource R2 and requests R1. <br />
      Neither process can proceed, causing a deadlock.
    </p>

    {/* Examples of Deadlock */}
    <h2 className="text-3xl font-bold mt-8">Examples of Deadlock</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        Two tape drives exist. P0 and P1 each hold one tape drive and need the other.
      </li>
      <li>
        Semaphores A and B, initialized to 1. P0 executes wait(A) and preempts. P1 executes wait(B). 
        Now both P0 and P1 are in deadlock.
      </li>
      <li>
        Memory allocation example: Available 200KB, P0 requests 80KB, P1 requests 70KB, 
        P0 requests 60KB, P1 requests 80KB. Deadlock occurs if both reach their second request.
      </li>
    </ul>

    {/* Necessary Conditions */}
    <h2 className="text-3xl font-bold mt-8">Necessary Conditions for Deadlock</h2>
    <p className="leading-relaxed">
      Deadlock occurs if all four of the following conditions hold simultaneously:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Mutual Exclusion:</strong> Only one process can use a resource at a time (non-sharable).</li>
      <li><strong>Hold and Wait:</strong> A process holds at least one resource and waits for others held by other processes.</li>
      <li><strong>No Preemption:</strong> A resource cannot be taken from a process unless it releases it voluntarily.</li>
      <li><strong>Circular Wait:</strong> A set of processes are waiting for each other in a circular chain.
        <br />
        Example: P1 holds R1 → waits R2 (held by P2), P2 holds R2 → waits R3 (held by P3), 
        P3 holds R3 → waits R4 (held by P4), P4 holds R4 → waits R1 (held by P1).
      </li>
    </ul>

  </div>
);

export default Deadlock;
